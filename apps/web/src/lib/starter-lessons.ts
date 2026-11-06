import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseLevel} from './course-content.ts';
import {examBlueprints} from './exam-blueprints.ts';
import {findLearningLesson} from './learning-catalog.ts';
import {findProvaoTopic} from './provao-paulista.ts';
import {matchTeachingSeed,teachingSeedCount,type SubjectSeed} from './starter-lesson-patterns.ts';
import {deepMathLesson,deepMathTopicNames} from './deep-math-lessons.ts';
import {deepCrossSubjectLesson,deepCrossSubjectTopics} from './deep-cross-subject-lessons.ts';
import {stage13Lesson,stage13Topics} from './authored-lessons-stage13.ts';
import {stage14Lesson,stage14Topics} from './authored-lessons-stage14.ts';
import {stage15Lesson,stage15Topics} from './authored-lessons-stage15.ts';
import {stage16Lesson,stage16Topics} from './authored-lessons-stage16.ts';
import {stage17Lesson,stage17Topics} from './authored-lessons-stage17.ts';
import {stage18Lesson,stage18Topics} from './authored-lessons-stage18.ts';
import {stage19Lesson,stage19Topics} from './authored-lessons-stage19.ts';
import {stage20Lesson,stage20Topics} from './authored-lessons-stage20.ts';
import {stage21Lesson,stage21Topics} from './authored-lessons-stage21.ts';
import {stage22Lesson,stage22Topics} from './authored-lessons-stage22.ts';
import {stage23Lesson,stage23Topics} from './authored-lessons-stage23.ts';
import {stage24Lesson,stage24Topics} from './authored-lessons-stage24.ts';

/** Offline curriculum-wide teaching modules.
 * IMPORTANT: auto-assembled introductory content is not a teacher-reviewed
 * complete lesson. It must never be counted as a published editorial lesson.
 * It does not store data, use AI, or copy exam questions.
 */
export type StarterCoverage='thematic'|'curated'|'guided';
const broadStudyMethods:Record<string,{concept:string;method:string;example:string;warning:string}>={
 'Matemática':{
  concept:'Em Matemática, definir as grandezas, variáveis e condições de uma propriedade é necessário antes de escolher uma operação. Relações numéricas e geométricas precisam ser verificadas com exemplos e contraexemplos.',
  method:'Separe dados e incógnitas, registre unidades, represente o problema com uma expressão, figura ou tabela e verifique se o resultado faz sentido no contexto.',
  example:'Num problema quantitativo original, compare um caso simples, um caso limite e uma situação em que se modifica uma única grandeza para identificar relações que podem ser testadas.',
  warning:'Aplicar uma fórmula apenas porque seu nome parece relacionado ao enunciado pode gerar um resultado sem validade.'},
 'Português':{
  concept:'O estudo da língua exige observar como escolhas lexicais, sintáticas e discursivas constroem sentido no contexto. Uma regra isolada não substitui a análise de um enunciado efetivo.',
  method:'Identifique gênero, interlocutores, finalidade, relações entre segmentos e marcas linguísticas. Baseie interpretações em trechos do texto, sem inventar intenções do autor.',
  example:'Compare duas formulações originais como “Ele saiu porque choveu” e “Embora chovesse, ele saiu”: mudando a relação lógica, muda-se a leitura do enunciado.',
  warning:'Retirar palavras do contexto e classificar seu significado de modo automático pode comprometer a análise.'},
 'Física':{
  concept:'A Física descreve fenômenos naturais por grandezas mensuráveis, leis e modelos com condições de aplicação específicas. Uma representação deve indicar unidades, sistema e hipóteses.',
  method:'Desenhe a situação, indique grandezas e sinais, escolha um modelo apropriado e teste dimensões e limites da resposta antes de concluir.',
  example:'Ao comparar dois fenômenos com condições controladas, observe quais grandezas variam e quais são mantidas constantes para avaliar relações físicas.',
  warning:'Misturar unidades ou aplicar leis fora das hipóteses do modelo pode gerar interpretações físicas incorretas.'},
 'Química':{
  concept:'A Química conecta observações macroscópicas, modelos de partículas e linguagem simbólica. Substâncias, transformações e propriedades dependem de composição, estrutura e condições.',
  method:'Identifique espécies envolvidas, escalas de representação, condições e evidências observáveis. Diferencie um modelo didático de uma descrição literal de átomos ou moléculas.',
  example:'Num fenômeno original, compare antes e depois da transformação e investigue se há alteração de composição, de estado físico ou de distribuição de partículas.',
  warning:'Confundir símbolos, partículas e observações do cotidiano é fonte comum de erros conceituais.'},
 'Biologia':{
  concept:'A Biologia relaciona estruturas, processos e interações em diferentes níveis, das moléculas aos ecossistemas. Relações entre causas e efeitos dependem de mecanismos e contexto.',
  method:'Identifique o nível de organização estudado, os componentes, o processo e a função; em seguida compare situações e evite explicações teleológicas.',
  example:'Ao estudar um processo biológico, descreva entradas, transformações e saídas e relacione alterações ambientais às respostas possíveis do sistema.',
  warning:'Generalizar uma característica observada em um organismo para todos os seres vivos exige evidências que nem sempre existem.'},
 'História':{
  concept:'História investiga processos no tempo com base em fontes e interpretações situadas. Mudanças e permanências devem ser compreendidas segundo contextos e agentes diversos.',
  method:'Delimite período e território, identifique atores, interesses, antecedentes e consequências. Compare fontes e diferencie acontecimentos, memórias e interpretações.',
  example:'Construa uma linha do tempo de um processo estudado e compare os interesses de pelo menos dois grupos diretamente envolvidos, sem supor consenso.',
  warning:'Explicar processos históricos complexos por uma causa única ou projetar valores atuais sem contextualização gera anacronismos.'},
 'Geografia':{
  concept:'Geografia analisa relações entre sociedade, território e ambiente em escalas diferentes. Paisagens, regiões, fluxos e indicadores podem mudar conforme período e método de análise.',
  method:'Observe o mapa ou dado espacial, identifique escala, fonte, área e período e relacione processos físicos, econômicos e sociais sem supor causalidade automática.',
  example:'Compare dois lugares com dados de acesso a serviços e relevo; destaque fatores que poderiam explicar semelhanças e diferenças, sem inventar medições.',
  warning:'Um mapa esquemático ou um único indicador não descreve sozinho a complexidade de um território.'},
 'Filosofia':{
  concept:'A reflexão filosófica envolve conceitos, argumentos, pressupostos e objeções. Autores de escolas diferentes podem atribuir sentidos distintos às mesmas palavras.',
  method:'Separe tese, premissas, justificativas e possíveis objeções. Considere o contexto da obra e diferencie descrição, conclusão lógica e avaliação normativa.',
  example:'Compare duas posições sobre um dilema original e avalie a coerência das razões, mesmo sem assumir de início que uma posição é incontestável.',
  warning:'Atribuir uma afirmação a um filósofo sem fonte ou reduzir uma tradição a um slogan pode distorcer sua teoria.'},
 'Sociologia':{
  concept:'A Sociologia analisa padrões de relações sociais, instituições, práticas culturais e desigualdades. Situações individuais devem ser contextualizadas em processos coletivos.',
  method:'Defina o fenômeno, identifique agentes e instituições e compare dados, contextos e interpretações. Distinga observação de inferência.',
  example:'Num cenário hipotético de bairro, compare diferentes trajetórias de acesso ao transporte e investigue fatores coletivos que afetariam as oportunidades.',
  warning:'Transformar experiências individuais em generalizações sobre toda uma população leva a estereótipos sem evidência.'},
 'Literatura':{
  concept:'A literatura constrói efeitos estéticos e sentidos por escolhas de linguagem, forma, narrador e contexto. Movimentos literários ajudam na comparação, mas não explicam toda obra.',
  method:'Leia trechos, identifique recursos de linguagem, gênero e foco narrativo, e relacione escolhas formais ao momento de produção e à interpretação possível.',
  example:'Compare a descrição de uma paisagem em linguagem objetiva e em linguagem simbólica para examinar efeitos distintos de sentido.',
  warning:'Classificar uma obra apenas pelo ano ou por um recurso isolado reduz sua riqueza estética.'},
 'Redação':{
  concept:'Produzir textos argumentativos requer delimitar problema, organizar tese, selecionar evidências e construir progressão coerente, conforme o gênero e os critérios da prova.',
  method:'Planeje introdução, desenvolvimento e conclusão; revise a relação entre tese, evidência e análise. Respeite as particularidades do gênero solicitado.',
  example:'Para um tema hipotético sobre mobilidade urbana, proponha uma tese discutível e dois eixos de argumentos sustentáveis por evidências.',
  warning:'Inserir repertório decorativo sem explicação e usar conectivos incompatíveis com a relação lógica prejudicam a argumentação.'},
 'Inglês':{
  concept:'Compreensão textual em inglês depende de contexto, sintaxe, vocabulário e pistas discursivas. Cognatos, pronomes e conectores devem ser interpretados em frases completas.',
  method:'Leia título e contexto, identifique propósito e público, localize evidências e confirme significados com a estrutura do texto.',
  example:'Compare “They will go” e “They might go”: o modal altera o grau de certeza apresentado, mesmo com o mesmo verbo principal.',
  warning:'Traduções palavra a palavra e falsos cognatos podem produzir interpretações incorretas.'},
 'Espanhol':{
  concept:'Na leitura em espanhol, a proximidade com o português é útil, mas não elimina diferenças lexicais, sintáticas e culturais.',
  method:'Reconheça o gênero, observe conectores, tempo verbal e pistas contextuais e verifique cognatos antes de traduzir.',
  example:'“Sin embargo” introduz contraposição; “embarázada” significa grávida, e não envergonhada.',
  warning:'Assumir equivalência de todas as palavras semelhantes entre português e espanhol gera falsos sentidos.'},
 'Arte':{
  concept:'A análise de produções artísticas considera linguagem, material, composição, circulação e contexto cultural. A experiência estética não se limita a gostos pessoais.',
  method:'Descreva elementos perceptíveis, identifique técnicas e suportes e proponha interpretações fundamentadas nas escolhas da obra.',
  example:'Uma fotografia pode utilizar contraste de iluminação e enquadramento para dirigir a atenção do espectador a um detalhe.',
  warning:'Apresentar uma interpretação única como verdade definitiva sem evidências ignora a pluralidade de leituras.'},
 'Educação Física':{
  concept:'Práticas corporais envolvem regras, técnicas, cultura, relações sociais e saúde. Seus efeitos e significados variam conforme o contexto e as condições de participação.',
  method:'Examine objetivos, movimentos, estratégias coletivas, segurança e inclusão. Diferencie condicionamento, desempenho e saúde integral.',
  example:'Num esporte coletivo, mudanças de posicionamento podem modificar a organização tática e a participação dos jogadores.',
  warning:'Tratar alto rendimento como sinônimo de saúde ou tomar um padrão corporal como universal limita a análise.'},
 'Ciências':{
  concept:'Ciências naturais investigam fenômenos por observações, evidências e modelos testáveis. Matéria, vida, energia e ambiente são temas interligados.',
  method:'Defina problema e hipótese, identifique variáveis e diferencie o que foi observado do que se concluiu. Repita medições quando pertinente.',
  example:'Ao investigar dissolução de um sólido, compare condições controladas e observe alterações sem presumir automaticamente reação química.',
  warning:'Uma única observação sem controle adequado não confirma uma lei geral.'}
};
function shorten(value:string,max:number){return value.length<=max?value:value.slice(0,max-1).trimEnd()+'…';}
export function starterCoverage(topic:CurriculumTopic):StarterCoverage{
 if(topic.subject==='Matemática'&&deepMathTopicNames.includes(topic.topic))return 'thematic';
 if(deepCrossSubjectTopics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage13Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage14Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage15Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage16Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage17Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage18Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage19Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage20Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage21Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 if(stage22Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
  if(stage23Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
  if(stage24Topics.some(item=>item.subject===topic.subject&&item.topic===topic.topic))return 'thematic';
 const legacy=topic.legacyLessonId?findLearningLesson(topic.legacyLessonId):null;
 if(legacy)return 'curated';
 const ref=findProvaoTopic(topic.subject,topic.topic);
 return matchTeachingSeed(topic.subject,topic.topic+' '+(ref?.description??''))?'thematic':'guided';
}
export function starterCoverageCounts(topics:readonly CurriculumTopic[]){
 const stats={curated:0,thematic:0,guided:0};
 for(const t of topics)stats[starterCoverage(t)]++;
 return stats;
}
export function starterLesson(topic:CurriculumTopic):CourseLesson{
 const developed=deepMathLesson(topic);
 if(developed)return developed;
 const crossSubject=deepCrossSubjectLesson(topic);
 if(crossSubject)return crossSubject;
 const stage13=stage13Lesson(topic);
 if(stage13)return stage13;
 const stage14=stage14Lesson(topic);
 if(stage14)return stage14;
 const stage15=stage15Lesson(topic);
 if(stage15)return stage15;
 const stage16=stage16Lesson(topic);
 if(stage16)return stage16;
 const stage17=stage17Lesson(topic);
 if(stage17)return stage17;
 const stage18=stage18Lesson(topic);
 if(stage18)return stage18;
 const stage19=stage19Lesson(topic);
 if(stage19)return stage19;
 const stage20=stage20Lesson(topic);
 if(stage20)return stage20;
 const stage21=stage21Lesson(topic);
 if(stage21)return stage21;
 const stage22=stage22Lesson(topic);
 if(stage22)return stage22;
  const stage23=stage23Lesson(topic);
  if(stage23)return stage23;
  const stage24=stage24Lesson(topic);
  if(stage24)return stage24;
 const ref=findProvaoTopic(topic.subject,topic.topic);
 const legacy=topic.legacyLessonId?findLearningLesson(topic.legacyLessonId):null;
 const seed=matchTeachingSeed(topic.subject,topic.topic+' '+(ref?.description??''));
 const method=broadStudyMethods[topic.subject]??broadStudyMethods['Ciências'];
 const evidence=(ref?.description??topic.topic).replace(/\s+/g,' ').trim();
 const unit=ref?.unit??'Organização temática preparatória';
 const thematic=seed??{
  terms:method.concept,method:method.method,example:method.example,pitfall:method.warning,
  question:'Identifique duas informações do tema e explique quais dados ou fontes seriam necessários para estudá-las com precisão.',
  answer:'É necessário reconhecer as informações do enunciado, contextualizar o tema e justificar a resposta com registros verificáveis, sem supor dados ausentes.'
 };
 const merged:SubjectSeed=legacy?{
  terms:legacy.explanation,
  method:thematic.method,
  example:legacy.workedExample,
  pitfall:legacy.commonMistake,
  question:legacy.check,
  answer:'Compare sua solução com o exemplo: '+legacy.workedExample+' O raciocínio deve respeitar as condições e definições da aula.'
 }:thematic;
 const lines=[
  'Este é um módulo introdutório pré-carregado sobre '+topic.topic+'.',
  'Escopo registrado no programa: '+evidence+'.',
  'Eixo curricular: '+unit+'.'
 ];
 const common='Os exemplos e exercícios a seguir são originais do Kognos e não são questões oficiais. Verifique a adequação ao edital da edição selecionada.';
 const stages:CourseLevel[]=['basic','intermediate','advanced'];
 const sections=[
  {level:stages[0],title:shorten('Fundamentos de '+topic.topic,175),
   explanation:merged.terms+'\n\n'+lines.join(' ')+'\n\n'+common,
   steps:['Identifique as palavras-chave e a finalidade do tema: '+shorten(topic.topic,160)+'.',
    'Relacione a definição principal ao escopo do programa e confira exemplos observáveis.'],
   example:merged.example,pitfall:merged.pitfall},
  {level:stages[1],title:'Aplicação e interpretação',
   explanation:merged.method+'\n\nAo aplicar estes conceitos ao assunto '+topic.topic+', observe o contexto indicado no programa: '+evidence+'. Procure justificar cada etapa com dados, regras ou fontes apropriadas.\n\n'+common,
   steps:['Registre informações dadas e pontos que ainda exigem confirmação.',
    'Escolha um procedimento coerente com o conceito e justifique por que ele se aplica.',
    'Compare o resultado com o exemplo resolvido e as condições da situação.'],
   example:merged.example+'\n\nProcedimento: '+merged.method,
   pitfall:merged.pitfall},
  {level:stages[2],title:'Análise crítica e aprofundamento',
   explanation:'Um conteúdo pode parecer simples em um exemplo isolado, mas sua interpretação depende das condições do problema. '+merged.pitfall+
    '\n\nPara aprofundar '+topic.topic+', compare situações, identifique limitações do método e discuta quais evidências adicionais seriam necessárias. O programa especifica: '+evidence+'.\n\nEste bloco é orientação preparatória; não substitui aprofundamento disciplinar revisado.',
   steps:['Compare pelo menos duas situações ou explicações possíveis.',
    'Identifique limitações, pressupostos e condições para utilizar o método.',
    'Apresente uma conclusão coerente, sem extrapolar as evidências.'],
   example:merged.example+'\n\nCompare o que muda se as condições do caso forem diferentes.',
   pitfall:merged.pitfall}
 ] as CourseLesson['sections'];
 const tasks:CourseLesson['tasks']=[
  {level:'basic',prompt:'Explique com suas palavras o conceito central de '+topic.topic+' e indique um exemplo coerente com a explicação.',
   hint:shorten('Releia os fundamentos e observe o exemplo: '+merged.example,1800),
   solution:'Uma resposta adequada pode apoiar-se nesta definição: '+merged.terms+' Exemplo de referência: '+merged.example},
  {level:'intermediate',prompt:merged.question.length>=15?merged.question:
   'Aplique os fundamentos de '+topic.topic+' a um exemplo e justifique sua resposta.',
   hint:'Releia o procedimento de aplicação e identifique os dados, as relações e as condições relevantes.',
   solution:merged.answer.length>=20?merged.answer:'Uma solução fundamentada deve usar: '+merged.method},
  {level:'advanced',prompt:'Analise uma possível interpretação incorreta de '+topic.topic+' e explique como evitá-la usando argumentos ou evidências.',
   hint:shorten('Considere este erro frequente: '+merged.pitfall,1800),
   solution:'É necessário verificar as condições do problema. Erro frequente: '+merged.pitfall+
    ' O procedimento mais adequado começa assim: '+merged.method}
 ];
 const sourceUrls=[...new Set(topic.exams.map(exam=>examBlueprints[exam]?.sourceUrl).filter((url):url is string=>Boolean(url&&url.startsWith('https://'))))].slice(0,5);
 return {
  kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
  objective:legacy?.objective??'Compreender os fundamentos de '+topic.topic+', aplicar ideias centrais e reconhecer limitações das interpretações.',
  prerequisites:legacy?.prerequisites??[],sections,tasks,videos:[],
  authorship:'Kognos — módulo introdutório estruturado a partir do repertório temático; sem homologação docente',
  license:'Conteúdo preparatório original do Kognos, não oficial',
  sourceUrls,review:'introductory'
 };
}
export const availableStarterSubjects=Object.keys(broadStudyMethods);
export const authoredStarterPatternCount=teachingSeedCount();
