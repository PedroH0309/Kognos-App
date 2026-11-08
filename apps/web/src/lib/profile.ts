import type {ExamId} from './exam-blueprints.ts';
export type Goal = 'enem' | 'vestibular' | 'etec' | 'school' | 'contest' | 'olympiad' | 'personal';
export type Stage = 'fundamental_2' | 'medio' | 'tecnico' | 'superior' | 'adulto' | 'other';
export type TeachingStyle = 'examples' | 'step_by_step' | 'brief' | 'detailed' | 'practice_first' | 'flashcards' | 'visual';
export type Adaptation = 'short_blocks' | 'reduced_distractions' | 'plain_language' | 'larger_text' | 'extra_spacing' | 'high_contrast' | 'more_examples' | 'frequent_checks';
export type Tone = 'balanced' | 'formal' | 'motivating';

export interface StudentProfile {
  version: 1;
  nickname: string;
  username: string;
  biography: string;
  stage: Stage;
  goal: Goal;
  goals: Goal[];
  examFocus: ExamId | null;
  syllabusExams: ExamId[];
  targetName: string;
  targetDate: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  weeklyDays: number[];
  dailyMinutes: number;
  sessionMinutes: number;
  styles: TeachingStyle[];
  adaptations: Adaptation[];
  tone: Tone;
  completedAt: string;
}

export const initialProfile: StudentProfile = {
  version: 1, nickname: '', username: '', biography: '', stage: 'medio', goal: 'enem', goals:['enem'], examFocus:null, syllabusExams:[], targetName: '', targetDate: '',
  level: 'beginner', weeklyDays: [1,2,3,4,5], dailyMinutes: 60, sessionMinutes: 25,
  styles: ['examples', 'step_by_step'], adaptations: [], tone: 'balanced', completedAt: '',
};

export const goalLabels: Record<Goal,string> = {
  enem:'ENEM',vestibular:'Vestibulares',etec:'Curso técnico',school:'Provas escolares',contest:'Concursos',olympiad:'Olimpíadas científicas',personal:'Aprendizado pessoal'
};
export const styleLabels: Record<TeachingStyle,string> = {
  examples:'Exemplos do cotidiano',step_by_step:'Passo a passo',brief:'Explicações diretas',
  detailed:'Aprofundamento teórico',practice_first:'Questões antes da teoria',flashcards:'Flashcards',visual:'Esquemas e mapas visuais'
};
export const adaptationLabels: Record<Adaptation,string> = {
  short_blocks:'Blocos curtos',reduced_distractions:'Menos estímulos na tela',plain_language:'Linguagem simplificada',
  larger_text:'Fonte maior',extra_spacing:'Mais espaçamento',high_contrast:'Alto contraste',
  more_examples:'Mais exemplos',frequent_checks:'Pausas para conferir o aprendizado'
};
export const dayLabels = ['D','S','T','Q','Q','S','S'];
export const defaultForTDAH: Adaptation[] = ['short_blocks','reduced_distractions','frequent_checks'];
export const defaultForDyslexia: Adaptation[] = ['plain_language','extra_spacing','more_examples'];

export function normalizeProfile(value: unknown): StudentProfile {
  if (!value || typeof value !== 'object') return {...initialProfile};
  const v=value as Partial<StudentProfile>;
  const knownGoals=Object.keys(goalLabels) as Goal[];
  const supportedExams:ExamId[]=['enem','etec','fuvest','saresp','vunesp'];
  const examFocus=supportedExams.includes(v.examFocus as ExamId)?v.examFocus as ExamId:null;
  const syllabusExams=Array.isArray(v.syllabusExams)?[...new Set(v.syllabusExams.filter(x=>supportedExams.includes(x)))]:[];
  const stages: Stage[]=['fundamental_2','medio','tecnico','superior','adulto','other'];
  const levels: StudentProfile['level'][]=['beginner','intermediate','advanced'];
  const styles=Object.keys(styleLabels) as TeachingStyle[];
  const adaptations=Object.keys(adaptationLabels) as Adaptation[];
  const validDate=typeof v.targetDate==='string' && /^\d{4}-\d{2}-\d{2}$/.test(v.targetDate);
  return {
    ...initialProfile,
    nickname:typeof v.nickname==='string'?v.nickname.trim().slice(0,60):'',
    username:typeof v.username==='string'?v.username.trim().toLowerCase().slice(0,24):'',
    biography:typeof v.biography==='string'?v.biography.trim().slice(0,240):'',
    stage:stages.includes(v.stage as Stage)?v.stage as Stage:'medio',
    goal:knownGoals.includes(v.goal as Goal)?v.goal as Goal:'enem',
    goals:Array.isArray(v.goals) && v.goals.some(g=>knownGoals.includes(g))?Array.from(new Set(v.goals.filter(g=>knownGoals.includes(g)))):[knownGoals.includes(v.goal as Goal)?v.goal as Goal:'enem'],
    examFocus,syllabusExams,
    targetName:typeof v.targetName==='string'?v.targetName.trim().slice(0,120):'',
    targetDate:validDate?v.targetDate!:'',
    level:levels.includes(v.level as StudentProfile['level'])?v.level as StudentProfile['level']:'beginner',
    weeklyDays:Array.isArray(v.weeklyDays)?Array.from(new Set(v.weeklyDays.filter(x=>Number.isInteger(x) && x>=0 && x<=6))).sort():initialProfile.weeklyDays,
    dailyMinutes:Number.isFinite(v.dailyMinutes)?Math.max(15,Math.min(480,Math.floor(v.dailyMinutes!))):60,
    sessionMinutes:[15,25,40,60].includes(v.sessionMinutes ?? 0)?v.sessionMinutes!:25,
    styles:Array.isArray(v.styles)?v.styles.filter(s=>styles.includes(s)):initialProfile.styles,
    adaptations:Array.isArray(v.adaptations)?v.adaptations.filter(a=>adaptations.includes(a)):[],
    tone:['balanced','formal','motivating'].includes(v.tone||'')?v.tone!:'balanced',
    completedAt:typeof v.completedAt==='string'?v.completedAt.slice(0,40):'',
    version:1,
  };
}
