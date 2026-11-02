/**
 * Narrow, deterministic tutor-scope rules.
 *
 * The free-form teaching model handles ambiguous educational questions, while
 * unmistakable requests for finished software and unrelated services are
 * redirected before any paid inference or quota reservation.
 *
 * These rules are not a complete classifier. The system prompt independently
 * constrains any remaining ambiguous requests.
 */
export const PEDAGOGICAL_CODE_REPLY =
 'Eu sou o Kog, seu tutor de estudos. Não produzo código pronto, scripts ou programas para executar. Posso explicar conceitos de programação, lógica e algoritmos de forma didática e propor exercícios para você praticar. Que conceito você quer aprender?';

export const PEDAGOGICAL_OFF_TOPIC_REPLY =
 'Meu papel é ajudar com os estudos: explicar matérias, interpretar enunciados, orientar exercícios e organizar revisões. Me diga qual conteúdo você quer aprender ou qual dúvida pedagógica quer resolver.';

export const PEDAGOGICAL_OUTPUT_REPLY =
 'Posso ajudar você a compreender os conceitos e o raciocínio, mas não entregar código pronto. Qual parte do conteúdo você quer que eu explique?';

function normalize(text:string):string {
 return text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/\s+/g,' ').trim();
}

const productionVerb=/(?:\b(?:me\s+(?:de|da|envie|mostre|mande|passa|forneca)|gere|gera|crie|cria|faca|faz|escreva|escreve|monte|monta|desenvolva|desenvolve|produza|forneca|retorne|implemente|codifique|construa|manda|envia|mostra)\b)/;
const codeArtifact=/\b(?:codigo(?:s)?|script(?:s)?|snippet(?:s)?|trecho de codigo|programa(?:s)?|software|aplicativo|app|site|pagina web|hello world)\b/;
const language=/\b(?:java|python|javascript|typescript|node|html|css|sql|php|kotlin|swift|csharp|cplusplus|react)\b/;
const practicalCode=/\b(?:linha|trecho|sintaxe pronta|rodando|execute|executavel|funcionando|compile|imprima|print|impressao|hello world)\b/;
const explanationOnly=/\b(?:explicacao|explique|explicar|entender|compreender|o que e|o que significa|como funciona|conceito|diferenca|significado|analise|interpretacao)\b/;

/** Return a student-friendly redirection for explicit non-teaching requests. */
export function tutorScopeReply(message:string):string|null {
 const text=normalize(message);
 if(!text)return null;
 const wantsArtifact=productionVerb.test(text);
 const codeMention=codeArtifact.test(text)||(language.test(text)&&practicalCode.test(text));
 const educationalIntent=explanationOnly.test(text)||/\b(?:exercicio|questao|pergunta|atividade|aula|revisao|codigo genetico|material de estudo)\b/.test(text);
 const explicitOutput=/\b(?:codigo pronto|programa pronto|script pronto|hello world|linha de codigo|trecho de codigo|codigo executavel)\b/.test(text);
 if((wantsArtifact&&codeMention&&(!educationalIntent||explicitOutput))
   ||(explicitOutput&&/\b(?:me|de|faca|crie|gere|mostre|escreva|rodando|executando|executavel)\b/.test(text))
   ||/\b(?:rode|execute|compile|instale|publique)\b.{0,90}\b(?:codigo|script|programa|java|python|app|site)\b/.test(text)){
  return PEDAGOGICAL_CODE_REPLY;
 }
 // The Kog explains how to write an essay, but does not do a complete student
 // assignment or build unrelated finished deliverables.
 if(/\b(?:faca|escreva|crie|gere|monte|resolva)\b.{0,70}\b(?:minha redacao|redacao inteira|redacao completa|meu trabalho pronto|meu dever de casa inteiro|minha prova inteira)\b/.test(text))
  return PEDAGOGICAL_OFF_TOPIC_REPLY;
 if(/\b(?:conte|conta|me de|me conte|manda|crie)\b.{0,35}\b(?:piada|meme|horoscopo)\b/.test(text)
   ||/\b(?:previsao do tempo|tempo agora|cotacao do dolar|placar do jogo|resultado da loteria|aposta esportiva)\b/.test(text)
   ||/\b(?:me de|me passe|crie|faca)\b.{0,45}\b(?:receita de bolo|receita culinaria|playlist|letra de musica)\b/.test(text))
  return PEDAGOGICAL_OFF_TOPIC_REPLY;
 return null;
}

/**
 * A final server-side backstop. No generated executable snippet is sent to
 * the browser, even if the model ignored its teaching-only instructions.
 * The student's input and any subsequent history are still normal plain text.
 */
export function enforcePedagogicalTutorAnswer(answer:string):string {
 const executable = /\x60\x60\x60|\b(?:public\s+static\s+void\s+main|System\.out\.print(?:ln)?\s*\(|console\.log\s*\(|import\s+java\.|class\s+\w+\s*\{|function\s+\w+\s*\(|def\s+\w+\s*\(|#include\s*<|<html\b|<script\b)/i;
 return executable.test(answer)?PEDAGOGICAL_OUTPUT_REPLY:answer;
}
