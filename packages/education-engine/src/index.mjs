/**
 * FOCO Education Engine — deterministic learning rules.
 * This package deliberately contains no AI or persistence dependencies.
 */

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

/**
 * Estimate a skill's current mastery from recorded attempts.
 * Each attempt: { correct: boolean, difficulty?: 1..5, occurredAt: ISO string }.
 * Returns null mastery when there is no evidence; confidence grows with sample size.
 * The score is an operational estimate, not a psychometric or official exam score.
 */
export function estimateMastery(attempts, now = new Date()) {
  if (!Array.isArray(attempts)) {
    throw new TypeError("attempts deve ser um array");
  }

  const valid = attempts.filter((attempt) => {
    return attempt && typeof attempt.correct === "boolean" &&
      Number.isFinite(Date.parse(attempt.occurredAt));
  });

  if (valid.length === 0) {
    return { mastery: null, confidence: 0, sampleSize: 0, validSampleSize: 0 };
  }

  let weightedScore = 0;
  let totalWeight = 0;
  const nowMs = now instanceof Date ? now.getTime() : Date.parse(now);
  if (!Number.isFinite(nowMs)) throw new TypeError("now precisa ser uma data válida");

  for (const attempt of valid) {
    const ageDays = Math.max(0, (nowMs - Date.parse(attempt.occurredAt)) / 86_400_000);
    const recencyWeight = Math.pow(0.5, ageDays / 45);
    const difficulty = clamp(Number(attempt.difficulty ?? 3), 1, 5);
    const difficultyWeight = 0.7 + difficulty * 0.1;
    const weight = recencyWeight * difficultyWeight;
    weightedScore += (attempt.correct ? 1 : 0) * weight;
    totalWeight += weight;
  }

  const mastery = Math.round((weightedScore / totalWeight) * 100);
  // Twelve valid observations provide the maximum operational confidence.
  const confidence = Number(clamp(valid.length / 12, 0, 1).toFixed(2));
  return {
    mastery,
    confidence,
    sampleSize: attempts.length,
    validSampleSize: valid.length,
  };
}

/**
 * Calculate transparent study priority (0–100) using deterministic inputs.
 * Unknown/low-confidence topics retain a baseline priority instead of being
 * labelled mastered or weak on insufficient evidence.
 */
export function calculateTopicPriority({
  mastery = null,
  confidence = 0,
  examWeight = 0.5,
  reviewDue = false,
  isPrerequisite = false,
  daysToExam = null,
}) {
  const c = clamp(Number(confidence) || 0, 0, 1);
  const weight = clamp(Number(examWeight) || 0, 0, 1);
  const knownMastery = mastery === null || mastery === undefined
    ? null
    : clamp(Number(mastery), 0, 100);

  if (knownMastery !== null && !Number.isFinite(knownMastery)) {
    throw new TypeError("mastery precisa ser null ou um número entre 0 e 100");
  }

  // With little evidence, blend the observed gap with a neutral baseline.
  const observedGap = knownMastery === null ? 0.5 : 1 - knownMastery / 100;
  const evidenceAdjustedGap = (observedGap * c) + (0.5 * (1 - c));
  const relevance = 0.35 + 0.65 * weight;
  const reviewBoost = reviewDue ? 0.18 : 0;
  const prerequisiteBoost = isPrerequisite ? 0.12 : 0;
  const urgency = daysToExam === null || daysToExam === undefined
    ? 0
    : clamp((60 - Math.max(0, Number(daysToExam))) / 60, 0, 1) * 0.1;

  const raw = (evidenceAdjustedGap * 0.55) + (relevance * 0.30) + reviewBoost + prerequisiteBoost + urgency;
  return Math.round(clamp(raw, 0, 1) * 100);
}

/** Build a user-facing, auditable explanation for the priority decision. */
export function explainTopicPriority({
  mastery = null,
  confidence = 0,
  examWeight = 0.5,
  reviewDue = false,
  isPrerequisite = false,
  daysToExam = null,
}) {
  const reasons = [];
  if (mastery === null || mastery === undefined || confidence < 0.4) {
    reasons.push("há poucas evidências de domínio; o assunto permanece no plano para avaliação");
  } else if (mastery < 60) {
    reasons.push(`o domínio estimado está em ${Math.round(mastery)}%`);
  } else if (mastery >= 85) {
    reasons.push("o domínio estimado está alto; a prática pode ser espaçada");
  }
  if (examWeight >= 0.7) reasons.push("o assunto tem alta relevância para a modalidade escolhida");
  if (reviewDue) reasons.push("há uma revisão vencida");
  if (isPrerequisite) reasons.push("o assunto é pré-requisito para outros objetivos");
  if (daysToExam !== null && daysToExam !== undefined && daysToExam <= 30) {
    reasons.push("a data da prova está próxima");
  }
  return reasons.length ? reasons.join("; ") + "." : "mantido para preservar a cobertura equilibrada do conteúdo.";
}
