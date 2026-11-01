import type { Goal } from './profile.ts';

export type KogContext = 'dashboard'|'learn'|'trails'|'subjects'|'questions'|'simulados'|'plans'|'reviews'|'calendar'|'performance'|'achievements'|'profile'|'settings'|'tutor';

/** Non-sensitive page context only: no personal data, answers, or account credentials. */
export function subjectForView(view:KogContext):string {
  return view==='questions'||view==='simulados'?'Geral':view==='performance'?'Geral':'Matemática';
}

export function quickPromptForView(view:KogContext,goal:Goal):string[] {
  if(view==='questions'||view==='simulados') return ['Como interpretar melhor um enunciado?','Me ensine a resolver uma questão passo a passo','Como revisar meus erros sem decorar respostas?'];
  if(view==='plans'||view==='calendar') return ['Me ajude a organizar meu tempo de estudo','Como escolher o que revisar primeiro?','Monte uma sessão de estudo de 25 minutos'];
  if(view==='performance'||view==='achievements') return ['Como aprender com meus erros?','O que fazer quando não avanço em uma matéria?','Como medir meu progresso de verdade?'];
  if(view==='learn'||view==='trails'||view==='subjects') return ['Explique um assunto do zero','Como identificar meus pré-requisitos?','Crie um exercício para testar meu entendimento'];
  const mode=goal==='olympiad'?'olimpíadas científicas':goal==='contest'?'concursos':goal==='school'?'minhas provas escolares':goal==='personal'?'meu aprendizado':'minha prova';
  return [`Quero montar uma estratégia para ${mode}`,'Me explique um conceito difícil com exemplos','Me faça uma pergunta para descobrir meu nível'];
}