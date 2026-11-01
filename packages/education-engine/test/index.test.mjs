import test from "node:test";
import assert from "node:assert/strict";
import {
  estimateMastery,
  calculateTopicPriority,
  explainTopicPriority,
} from "../src/index.mjs";

const NOW = new Date("2026-11-01T12:00:00-03:00");

test("sem tentativas, domínio fica desconhecido e confiança zero", () => {
  assert.deepEqual(estimateMastery([], NOW), {
    mastery: null, confidence: 0, sampleSize: 0, validSampleSize: 0,
  });
});

test("filtra tentativas inválidas e calcula domínio de dados válidos", () => {
  const result = estimateMastery([
    { correct: true, difficulty: 3, occurredAt: "2026-10-30T12:00:00Z" },
    { correct: false, difficulty: 4, occurredAt: "2026-10-31T12:00:00Z" },
    { correct: "yes", occurredAt: "invalid" },
  ], NOW);
  assert.equal(result.sampleSize, 3);
  assert.equal(result.validSampleSize, 2);
  assert.ok(result.mastery >= 0 && result.mastery <= 100);
  assert.equal(result.confidence, 0.17);
});

test("evidências recentes têm mais peso que evidências antigas", () => {
  const result = estimateMastery([
    { correct: true, difficulty: 3, occurredAt: "2026-10-31T12:00:00Z" },
    { correct: false, difficulty: 3, occurredAt: "2026-06-01T12:00:00Z" },
  ], NOW);
  assert.ok(result.mastery > 50);
});

test("assunto com revisão vencida e pré-requisito recebe prioridade maior", () => {
  const base = { mastery: 60, confidence: 0.8, examWeight: 0.5 };
  const normal = calculateTopicPriority(base);
  const boosted = calculateTopicPriority({ ...base, reviewDue: true, isPrerequisite: true });
  assert.ok(boosted > normal);
});

test("assunto sem dados não é tratado como domínio zero", () => {
  const priority = calculateTopicPriority({ mastery: null, confidence: 0, examWeight: 0.5 });
  assert.ok(priority > 0 && priority < 100);
  assert.match(explainTopicPriority({ mastery: null, confidence: 0 }), /poucas evidências/);
});

test("prioridade permanece entre 0 e 100", () => {
  const result = calculateTopicPriority({
    mastery: 0, confidence: 1, examWeight: 1,
    reviewDue: true, isPrerequisite: true, daysToExam: 0,
  });
  assert.ok(result >= 0 && result <= 100);
});
