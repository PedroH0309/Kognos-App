'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {ArrowLeft, ArrowRight, BookOpenCheck, CalendarDays, Check, CheckCircle2, Clock3, Goal as GoalIcon, GraduationCap, LucideIcon, Plus, ShieldCheck, Sparkles, Target, Trophy} from 'lucide-react';
import {KognosSelect, KognosDateField, KognosRange} from './OnboardingControls';
import {weeklyStudyHours} from '@/lib/onboarding-helpers';
import {examBlueprints, publicExamEntries, type ExamId} from '@/lib/exam-blueprints';
import {examForStudent} from '@/lib/exam-syllabus';
import {adaptationLabels, dayLabels, defaultForDyslexia, defaultForTDAH, goalLabels, initialProfile, normalizeProfile, styleLabels, type Adaptation, type Goal, type StudentProfile, type TeachingStyle} from '@/lib/profile';
import {profileSetupIssue, explainProfileDatabaseError} from '@/lib/profile-setup';
import {readStoredStudentProfile} from '@/lib/auth-profile-routing';
import Logo from './Logo';

/**
 * Onboarding V2 — Reduced Cognitive Load
 *
 * Split from 5 steps to 6 steps, each with ≤3 decisions:
 * Step 0: Identity + Primary Goal (2 decisions)
 * Step 1: Exam + Context (3 decisions)
 * Step 2: Routine (3 decisions)
 * Step 3: Learning Style (2 decisions)
 * Step 4: Accessibility (2 decisions)
 * Step 5: Summary (0 decisions - review only)
 */

const GOAL_ICONS: Record<Goal, LucideIcon> = {
  enem: Target,
  vestibular: GoalIcon,
  etec: BookOpenCheck,
  school: GraduationCap,
  contest: Target,
  olympiad: Trophy,
  personal: Target,
};

function GoalIconComponent({goal}: {goal: Goal}) {
  const Icon = GOAL_ICONS[goal];
  return <Icon size={22} strokeWidth={1.8} aria-hidden="true" />;
}

const choices = <T extends string,>(items: Record<T, string>, selection: T[], toggle: (v: T) => void) =>
  Object.entries(items).map(([value, label]) => (
    <button
      key={value}
      type="button"
      className={`choice-pill ${selection.includes(value as T) ? 'selected' : ''}`}
      onClick={() => toggle(value as T)}
      aria-pressed={selection.includes(value as T)}
    >
      <span className="choice-check" aria-hidden="true">
        {selection.includes(value as T) ? <Check size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
      </span>
      {label as string}
    </button>
  ));

interface OnboardingV2Props {
  start: StudentProfile;
  onFinish: (p: StudentProfile) => Promise<void>;
  onSignout: () => void;
  email: string;
}

export default function OnboardingV2({start, onFinish, onSignout, email}: OnboardingV2Props) {
  const [step, setStep] = useState(0);
  const [p, setP] = useState<StudentProfile>({...start});
  const [declared, setDeclared] = useState<'none' | 'tdah' | 'dislexia' | 'both' | 'skip'>('skip');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [dateError, setDateError] = useState(false);
  const [proposedExam, setProposedExam] = useState<ExamId | null>(null);

  const update = (v: Partial<StudentProfile>) => {
    setP(old => ({...old, ...v}));
    setError('');
  };

  const toggleStyle = (s: TeachingStyle) => update({styles: p.styles.includes(s) ? p.styles.filter(v => v !== s) : [...p.styles, s]});
  const toggleAdaptation = (s: Adaptation) => update({adaptations: p.adaptations.includes(s) ? p.adaptations.filter(v => v !== s) : [...p.adaptations, s]});

  function chooseExam(exam: ExamId) {
    const previous = examForStudent(p);
    if (previous && previous !== exam && Boolean(start.completedAt)) {
      setProposedExam(exam);
      return;
    }
    setProposedExam(null);
    update({examFocus: exam, syllabusExams: [exam]});
  }

  function confirmExam(keepPrior: boolean) {
    if (!proposedExam) return;
    const old = examForStudent(p);
    update({
      examFocus: proposedExam,
      syllabusExams: keepPrior
        ? [...new Set([...(p.syllabusExams || []), ...(old ? [old] : []), proposedExam])]
        : [proposedExam]
    });
    setProposedExam(null);
  }

  // Single primary goal selection (not multi)
  const togglePrimaryGoal = (goal: Goal) => update({goal, goals: [goal]});

  function declaration(v: typeof declared) {
    setDeclared(v);
    if (v === 'none') update({adaptations: []});
    if (v === 'tdah' || v === 'dislexia' || v === 'both') {
      const adaptations = v === 'tdah' ? defaultForTDAH : v === 'dislexia' ? defaultForDyslexia : [...defaultForTDAH, ...defaultForDyslexia];
      update({adaptations: Array.from(new Set([...p.adaptations, ...adaptations]))});
    }
  }

  // 6 steps instead of 5
  const stepNames = [
    'Identidade e Meta',
    'Prova e Contexto',
    'Sua Rotina',
    'Como Aprender',
    'Acessibilidade',
    'Resumo'
  ];

  function validate() {
    if (step === 0 && !p.nickname.trim()) return 'Preencha o apelido para continuar.';
    if (step === 0 && !p.goal) return 'Selecione sua meta principal.';
    if (step === 1 && proposedExam) return 'Escolha como deseja atualizar seus temas antes de continuar.';
    if (step === 1 && dateError) return 'Corrija a data da prova ou deixe o campo vazio.';
    if (step === 2 && p.weeklyDays.length === 0) return 'Selecione pelo menos um dia disponível.';
    if (step === 3 && p.styles.length === 0) return 'Selecione pelo menos uma forma de aprender.';
    return '';
  }

  async function proceed() {
    const message = validate();
    if (message) {
      setError(message);
      return;
    }
    setError('');
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }
    setSaving(true);
    try {
      await onFinish({...p, nickname: p.nickname.trim(), completedAt: new Date().toISOString()});
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Não foi possível salvar suas preferências.');
    } finally {
      setSaving(false);
    }
  }

  const stageOptions = [
    {value: 'fundamental_2', label: 'Ensino fundamental II', description: '6º ao 9º ano'},
    {value: 'medio', label: 'Ensino médio', description: '1ª à 3ª série'},
    {value: 'tecnico', label: 'Ensino técnico', description: 'Cursos técnicos e profissionalizantes'},
    {value: 'superior', label: 'Ensino superior', description: 'Graduação e áreas especializadas'},
    {value: 'adulto', label: 'Adulto / outros estudos', description: 'Aprendizagem continuada'},
    {value: 'other', label: 'Outro', description: 'Personalizar minha jornada'}
  ] as const;

  const levelOptions = [
    {value: 'beginner', label: 'Estou começando', description: 'Quero construir uma base sólida'},
    {value: 'intermediate', label: 'Intermediário', description: 'Já conheço alguns assuntos'},
    {value: 'advanced', label: 'Avançado', description: 'Quero aprofundar e praticar'}
  ] as const;

  return (
    <main className="onboard-layout onboard-v2">
      <header className="onboard-header">
        <div className="onboard-header-inner">
          <Logo />
          <div className="onboard-utilities">
            <span className="subtle-tag">UMA JORNADA FEITA PARA VOCÊ</span>
            <span className="onboard-account-email" title={email}>{email}</span>
            <button type="button" onClick={onSignout} className="btn outline small">Sair</button>
          </div>
        </div>
      </header>
      <div className="onboard-columns">
        <section className="onboard-content" aria-labelledby="onboard-heading">
          <div className="wizard-head">
            <div>
              <span className="wizard-eyebrow">PERSONALIZAÇÃO DE ESTUDO</span>
              <p>Etapa <strong>{String(step + 1).padStart(2, '0')}</strong> de 06 · {stepNames[step]}</p>
            </div>
            <span className="wizard-fraction">{Math.round((step + 1) * 100 / 6)}%</span>
          </div>
          <div className="wizard-bars" role="progressbar" aria-valuemin={0} aria-valuemax={6} aria-valuenow={step + 1} aria-label={`Etapa ${step + 1} de seis`}>
            {stepNames.map((name, i) => <div key={name} className={i <= step ? 'filled' : ''} />)}
          </div>

          {/* STEP 0: Identity + Primary Goal */}
          {step === 0 && (
            <>
              <p className="overline">01 / IDENTIDADE E META</p>
              <h1 id="onboard-heading">Seu futuro começa com <em>uma escolha.</em></h1>
              <p className="intro-copy">Conte como quer ser chamado e qual sua meta principal. O resto ajustamos depois.</p>

              <div className="k-onboard-section">
                <label className="k-form-field">
                  <span className="k-field-title">Como prefere ser chamado? <span className="k-required">*</span></span>
                  <input
                    className="k-text-input"
                    value={p.nickname}
                    maxLength={60}
                    onChange={e => update({nickname: e.target.value})}
                    placeholder="Seu nome ou apelido"
                    autoComplete="nickname"
                    autoFocus
                  />
                  <small className="k-field-hint">Este nome será usado no seu painel e pelo Kog.</small>
                </label>

                <div className="k-field-group">
                  <div className="k-group-head">
                    <span className="k-field-title">Qual sua meta principal? <span className="k-required">*</span></span>
                    <span className="k-group-hint">Escolha uma — você pode adicionar outras depois</span>
                  </div>
                  <div className="goal-grid">
                    {(Object.entries(goalLabels) as [Goal, string][]).map(([key, label]) => (
                      <button
                        key={key}
                        type="button"
                        aria-pressed={p.goal === key}
                        className={`goal-card ${p.goal === key ? 'selected' : ''}`}
                        onClick={() => togglePrimaryGoal(key)}
                      >
                        <span className="goal-icon"><GoalIconComponent goal={key} /></span>
                        <strong>{label}</strong>
                        <span aria-hidden="true" className="select-ring">
                          {p.goal === key ? <Check size={12} strokeWidth={3} /> : null}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* STEP 1: Exam + Context */}
          {step === 1 && (
            <>
              <p className="overline">02 / PROVA E CONTEXTO</p>
              <h1 id="onboard-heading">Qual prova guia seus estudos?</h1>
              <p className="intro-copy">A matriz de conteúdos define quais matérias aparecem nas suas trilhas e questões.</p>

              <div className="k-onboard-section">
                <div className="k-field-group">
                  <KognosSelect
                    label="Prova principal (matriz de conteúdos)"
                    value={(p.examFocus && p.examFocus !== 'etec' ? p.examFocus : examForStudent(p)) || 'enem'}
                    options={publicExamEntries().map(([value, item]) => ({value, label: item.label}))}
                    onChange={chooseExam}
                  />
                  <small className="k-field-hint">As matérias são vinculadas à instituição selecionada. Editais, séries e modalidades específicas devem ser conferidos nas fontes oficiais.</small>

                  {proposedExam && (
                    <div className="k-exam-change-choice" role="group" aria-label="Como atualizar os conteúdos de estudo">
                      <p>Você está mudando sua prova. Deseja substituir os temas antigos ou manter os antigos e acrescentar os da nova prova?</p>
                      <div className="k-button-row">
                        <button type="button" className="btn primary small" onClick={() => confirmExam(false)}>Usar somente a nova prova</button>
                        <button type="button" className="btn outline small" onClick={() => confirmExam(true)}>Manter e acrescentar temas</button>
                        <button type="button" className="text-button" onClick={() => setProposedExam(null)}>Cancelar</button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="two-cols k-onboard-row">
                  <KognosSelect
                    label="Etapa escolar"
                    value={p.stage}
                    onChange={value => update({stage: value})}
                    options={stageOptions}
                  />
                  <KognosSelect
                    label="Nível atual"
                    value={p.level}
                    onChange={value => update({level: value})}
                    options={levelOptions}
                  />
                </div>

                <div className="two-cols k-onboard-row">
                  <label className="k-form-field">
                    <span className="k-field-title">Meta específica <span className="k-optional">opcional</span></span>
                    <input
                      className="k-text-input"
                      value={p.targetName}
                      maxLength={120}
                      onChange={e => update({targetName: e.target.value})}
                      placeholder="Ex.: UNESP 2027"
                    />
                    <small className="k-field-hint">Qual prova ou instituição?</small>
                  </label>
                  <KognosDateField
                    label="Data da prova (opcional)"
                    value={p.targetDate}
                    onChange={value => update({targetDate: value})}
                    onInvalidChange={setDateError}
                    hint="Você pode definir isso depois."
                  />
                </div>
              </div>
            </>
          )}

          {/* STEP 2: Routine */}
          {step === 2 && (
            <>
              <p className="overline">03 / SUA ROTINA</p>
              <h1 id="onboard-heading">Um plano que cabe na <em>sua vida.</em></h1>
              <p className="intro-copy">A melhor rotina é a que você consegue manter. Escolha uma disponibilidade realista — ela poderá mudar.</p>

              <div className="k-onboard-section">
                <div className="k-field-group">
                  <div className="k-group-head">
                    <span className="k-field-title">Quais dias você pode estudar?</span>
                    <span className="k-group-hint">{p.weeklyDays.length} de 7 dias</span>
                  </div>
                  <div className="days-row">
                    {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((name, i) => (
                      <button
                        key={name}
                        type="button"
                        className={`day ${p.weeklyDays.includes(i) ? 'active' : ''}`}
                        aria-pressed={p.weeklyDays.includes(i)}
                        aria-label={`${['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'][i]} ${p.weeklyDays.includes(i) ? 'selecionado' : 'não selecionado'}`}
                        onClick={() => update({weeklyDays: p.weeklyDays.includes(i) ? p.weeklyDays.filter(x => x !== i) : [...p.weeklyDays, i].sort()})}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>

                <KognosRange
                  label="Tempo total de estudo por dia"
                  value={p.dailyMinutes}
                  onChange={value => update({dailyMinutes: value})}
                />

                <div className="k-field-group">
                  <div className="k-group-head">
                    <span className="k-field-title">Tamanho ideal de cada sessão</span>
                    <span className="k-group-hint">Pausas entre os blocos</span>
                  </div>
                  <div className="card-selector">
                    {[15, 25, 40, 60].map(m => (
                      <button
                        key={m}
                        type="button"
                        aria-pressed={p.sessionMinutes === m}
                        className={`choice-time ${p.sessionMinutes === m ? 'selected' : ''}`}
                        onClick={() => update({sessionMinutes: m})}
                      >
                        <strong>{m} min</strong>
                        <small>{m === 15 ? 'Foco rápido' : m === 25 ? 'Equilibrado' : m === 40 ? 'Aprofundar' : 'Imersão'}</small>
                        <span aria-hidden="true" className="k-selection-dot" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="k-tip">
                  <Clock3 size={18} />
                  <span>Seu plano inicial terá cerca de <strong>{weeklyStudyHours(p.dailyMinutes, p.weeklyDays.length)} horas por semana</strong>, distribuídas em sessões personalizadas.</span>
                </div>
              </div>
            </>
          )}

          {/* STEP 3: Learning Style */}
          {step === 3 && (
            <>
              <p className="overline">04 / COMO APRENDER</p>
              <h1 id="onboard-heading">Aprender é algo <em>pessoal.</em></h1>
              <p className="intro-copy">Escolha o que funciona melhor para você. O Kog usará essas preferências para adaptar as explicações.</p>

              <div className="k-onboard-section">
                <div className="k-field-group">
                  <div className="k-group-head">
                    <span className="k-field-title">Como você prefere estudar?</span>
                    <span className="k-group-hint">Pode marcar vários</span>
                  </div>
                  <div className="choice-grid k-style-choices">
                    {choices(styleLabels, p.styles, toggleStyle)}
                  </div>
                </div>

                <div className="k-field-group">
                  <div className="k-group-head">
                    <span className="k-field-title">Tom das explicações</span>
                    <span className="k-group-hint">O jeito do professor falar</span>
                  </div>
                  <div className="card-selector tone-choices">
                    {([
                      ['balanced', 'Equilibrado', 'Professoral, sem rigidez'],
                      ['formal', 'Mais professoral', 'Técnico e detalhista'],
                      ['motivating', 'Mais motivador', 'Direto e estimulante']
                    ] as const).map(([k, title, sub]) => (
                      <button
                        key={k}
                        type="button"
                        aria-pressed={p.tone === k}
                        className={`choice-time ${p.tone === k ? 'selected' : ''}`}
                        onClick={() => update({tone: k})}
                      >
                        <strong>{title}</strong>
                        <small>{sub}</small>
                        <span aria-hidden="true" className="k-selection-dot" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="k-tip">
                  <BookOpenCheck size={18} />
                  <span>Suas escolhas podem mudar quando você descobrir outras formas de estudar.</span>
                </div>
              </div>
            </>
          )}

          {/* STEP 4: Accessibility */}
          {step === 4 && (
            <>
              <p className="overline">05 / CONFORTO E ACESSIBILIDADE</p>
              <h1 id="onboard-heading">O Kognos se adapta <em>a você.</em></h1>
              <p className="intro-copy">Personalize a leitura e a concentração. Todas as opções são voluntárias e podem ser alteradas depois.</p>

              <div className="k-onboard-section">
                <div className="k-field-group">
                  <span className="k-field-title">Gostaria de recursos relacionados a atenção ou leitura?</span>
                  <div className="choice-grid condition-grid">
                    {([
                      ['tdah', 'TDAH / concentração'],
                      ['dislexia', 'Dislexia / leitura'],
                      ['both', 'Ambas as adaptações'],
                      ['none', 'Não preciso de ajustes'],
                      ['skip', 'Prefiro não responder']
                    ] as const).map(([v, label]) => (
                      <button
                        key={v}
                        type="button"
                        className={`choice-pill ${declared === v ? 'selected' : ''}`}
                        onClick={() => declaration(v)}
                        aria-pressed={declared === v}
                      >
                        <span className="choice-check">
                          {declared === v ? <Check size={14} strokeWidth={2.5} /> : <Plus size={12} strokeWidth={2.5} />}
                        </span>
                        {label}
                      </button>
                    ))}
                  </div>
                  <p className="privacy-note">
                    <ShieldCheck size={16} /> Não registramos diagnóstico ou condição médica. Apenas suas preferências de interface são salvas.
                  </p>
                </div>

                <div className="k-field-group">
                  <span className="k-field-title">Recursos que você deseja ativar</span>
                  <div className="choice-grid">
                    {choices(adaptationLabels, p.adaptations, toggleAdaptation)}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* STEP 5: Summary */}
          {step === 5 && (
            <>
              <p className="overline">06 / SUA JORNADA ESTÁ PRONTA</p>
              <h1 id="onboard-heading">Tudo pronto para <em>evoluir.</em></h1>
              <p className="intro-copy">Este é seu ponto de partida. Você pode editar suas escolhas a qualquer momento no seu perfil.</p>

              <div className="summary-card">
                <div>
                  <small>COMO VAMOS CHAMAR VOCÊ</small>
                  <strong>{p.nickname || 'Estudante'}</strong>
                </div>
                <div>
                  <small>META PRINCIPAL</small>
                  <strong>{p.goal ? goalLabels[p.goal] : 'A definir'}{p.targetName ? ` · ${p.targetName}` : ''}</strong>
                </div>
                <div>
                  <small>MATRIZ DE ESTUDOS</small>
                  <strong>
                    {(p.syllabusExams.length ? p.syllabusExams : [examForStudent(p)].filter(Boolean) as ExamId[])
                      .filter(e => e !== 'etec')
                      .map(e => examBlueprints[e].label)
                      .join(' · ') || 'A definir'}
                  </strong>
                </div>
                <div>
                  <small>SEU RITMO</small>
                  <strong>{p.dailyMinutes} minutos por dia · {p.weeklyDays.length} dias na semana · sessões de {p.sessionMinutes} min</strong>
                </div>
                <div>
                  <small>COMO VOCÊ APRENDE</small>
                  <strong>{p.styles.map(s => styleLabels[s]).join(' · ') || 'A definir'}</strong>
                </div>
                <div>
                  <small>RECURSOS DE ACESSIBILIDADE</small>
                  <strong>{p.adaptations.length ? `${p.adaptations.length} adaptações selecionadas` : 'Configuração padrão'}</strong>
                </div>
              </div>
              <div className="k-tip">
                <CheckCircle2 size={19} />
                <span>Seu perfil ficará vinculado à sua conta. Da próxima vez, você poderá continuar diretamente pelo painel.</span>
              </div>
            </>
          )}

          {error && <div className="message warning" role="alert">{error}</div>}

          {profileSetupIssue(error) && (
            <section className="onboard-db-help" aria-label="Configuração do Supabase necessária">
              <strong>Como liberar o cadastro</strong>
              <p>
                No Supabase, abra <b>SQL Editor</b> e verifique se a migração <code>0001_core_schema.sql</code> criou <code>public.profiles</code>.
                Execute também <code>0003_account_and_avatars.sql</code> para os campos adicionais, respeitando a ordem das migrações.
                Confira se o projeto do seu <code>.env.local</code> é o mesmo do SQL Editor.
              </p>
              <small>Depois recarregue a página e tente salvar. Suas escolhas continuam aqui até você sair.</small>
            </section>
          )}

          <div className="wizard-actions">
            <div>
              {step > 0 && (
                <button
                  type="button"
                  className="btn outline"
                  onClick={() => {
                    setStep(step - 1);
                    setError('');
                    window.scrollTo({top: 0, behavior: 'smooth'});
                  }}
                >
                  <ArrowLeft size={17} /> Voltar
                </button>
              )}
            </div>
            <button
              type="button"
              className="btn primary"
              disabled={saving}
              onClick={proceed}
            >
              {saving ? 'Salvando…' : step === 5 ? 'Começar a aprender' : 'Continuar'}
              {!saving && <ArrowRight size={18} />}
            </button>
          </div>

          <p className="k-wizard-footnote">Seu ritmo, seus objetivos. <span>Você tem controle sobre suas preferências.</span></p>
        </section>

        <aside className="onboard-visual" aria-hidden="true">
          <div className="k-visual-top">
            <span className="k-visual-brand"><Sparkles size={16} /> APRENDIZAGEM INTELIGENTE</span>
            <span>01 / KOGNOS</span>
          </div>
          <div className="hero-image">
            <Image src="/brand/kognos-hero.webp" alt="" fill sizes="(max-width: 920px) 100vw, 38vw" priority />
          </div>
          <div className="visual-message">
            <span className="k-visual-rule" />
            <strong>Conhecimento que evolui com você.</strong>
            <p>Um espaço de estudo no seu ritmo, com inteligência e clareza em cada passo.</p>
          </div>
          <div className="visual-footer">
            <span>KOGNOS / APRENDIZAGEM INTELIGENTE</span>
            <span>v1.9</span>
          </div>
        </aside>
      </div>
    </main>
  );
}