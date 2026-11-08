/** Aulas autorais para temas do Provão Paulista que ainda dependiam de fallback genérico.
 * Material educacional original, não homologado por docentes; sem chamadas externas.
 * Manter identificadores curriculares e indicação de procedência da matriz.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseSection,CourseTask} from './course-content.ts';
import {findProvaoTopic} from './provao-paulista.ts';
import {examBlueprints} from './exam-blueprints.ts';

type SubjectLesson={subject:string;descriptionStarts:string;objective:string;sections:CourseSection[];tasks:CourseTask[];prerequisites:string[]};

const ecology:SubjectLesson={
 subject:'Biologia',
 descriptionStarts:'Principais conceitos de Ecologia (população, comunidade',
 objective:'Distinguir população, comunidade, ecossistema, biosfera, hábitat e nicho ecológico; interpretar cadeias e teias alimentares, transferência de energia e produtividade ecológica com exemplos e limites explícitos.',
 prerequisites:[],
 sections:[
  {
   level:'basic',
   title:'Organismos, populações e ecossistemas: do indivíduo à biosfera',
   explanation:`Imagine uma lagoa com algas, insetos, peixes, aves, água, sedimentos e luz solar. Para compreender a lagoa, precisamos distinguir níveis de organização. Um organismo é um indivíduo de uma espécie; população é o conjunto de indivíduos da mesma espécie numa área e período definidos; comunidade reúne populações de espécies diferentes que convivem numa área. Ecossistema inclui essa comunidade e fatores abióticos, como água, luz, temperatura e nutrientes, com as interações entre eles. Biosfera é o conjunto dos ambientes terrestres onde há vida, não uma população gigante.

Hábitat é o lugar em que uma espécie vive. Nicho ecológico descreve como ela utiliza recursos e se relaciona com o ambiente: alimentação, horários de atividade, reprodução, competidores e predadores. Não são sinônimos. Na mesma lagoa, duas espécies de peixes podem compartilhar hábitat e apresentar nichos diferentes, como alimentação em camadas de água distintas.

Espécie, população, comunidade e ecossistema respondem a perguntas diferentes. Se queremos medir quantos peixes de uma espécie vivem na lagoa, estudamos uma população. Se investigamos peixes, algas, aves e suas interações, olhamos a comunidade. Se a pergunta inclui a influência da temperatura, da quantidade de oxigênio dissolvido e da luz, analisamos o ecossistema. A escala escolhida precisa corresponder à pergunta científica.

Ecologia não é apenas uma lista de conceitos: é o estudo das relações entre organismos e ambiente. Falar de equilíbrio ecológico não significa que todos os números fiquem constantes; populações variam, há sucessão, migração e mudanças ambientais ao longo do tempo.`,
   steps:[
    'Identifique a área e o período observados; isso delimita a população estudada.',
    'Separe os seres vivos em espécies e populações e reúna-as para descrever a comunidade.',
    'Acrescente fatores abióticos e relações para representar o ecossistema.',
    'Diferencie hábitat (onde vive) de nicho (como vive e interage).'
   ],
   example:`Numa lagoa há 120 tilápias, 40 garças, várias algas e bactérias. As 120 tilápias formam uma população (considerando que pertençam à mesma espécie e ao mesmo recorte). Tilápias, garças, algas e bactérias, juntas, integram a comunidade. A comunidade mais a água, a luz, a temperatura e os nutrientes compõem o ecossistema. A margem da lagoa pode ser parte do hábitat das garças; caçar peixes em certos horários e locais descreve aspectos de seu nicho ecológico.`,
   pitfall:'Confundir comunidade com ecossistema: comunidade é somente o conjunto de populações; ecossistema inclui fatores bióticos e abióticos. Outro erro é chamar hábitat e nicho da mesma coisa.'
  },
  {
   level:'intermediate',
   title:'Quem come quem: cadeias, teias e papéis tróficos',
   explanation:`Uma cadeia alimentar descreve um caminho possível de transferência de matéria e energia por alimentação. Em "capim → gafanhoto → sapo → cobra", a seta significa que o organismo à esquerda serve de alimento ao da direita; a direção acompanha a transferência de energia e matéria. O capim é produtor, porque produz matéria orgânica a partir de substâncias inorgânicas usando energia, geralmente da luz. O gafanhoto, que se alimenta do produtor, é consumidor primário. O sapo é consumidor secundário e a cobra, nesse percurso, consumidor terciário.

Os níveis tróficos dependem do caminho analisado, não de um rótulo imutável da espécie. Um animal onívoro pode ocupar posições diferentes conforme o que consome. E uma teia alimentar representa várias cadeias interligadas: o mesmo inseto pode ser alimento de aves, sapos e lagartos; a redução de um desses predadores não significa que todos os insetos ficarão automaticamente sem predadores.

Os decompositores, como diversos fungos e bactérias, obtêm matéria e energia de restos orgânicos e resíduos de diferentes níveis da teia. Ao transformar compostos orgânicos, participam da reciclagem de nutrientes que podem ser reutilizados pelos produtores. Atenção: nutrientes circulam em ciclos biogeoquímicos, mas a energia não é reciclada do mesmo modo. A cada transformação, parte da energia é dissipada, principalmente como calor.

O fluxo energético deve ser descrito distinguindo fonte, transferência e dissipação. A entrada mais comum de energia para cadeias terrestres é a radiação solar captada pelos produtores. Existem também ecossistemas sustentados por organismos quimiossintetizantes, sem depender diretamente de luz solar em sua produção primária.`,
   steps:[
    'Localize o produtor e identifique a fonte de energia da produção primária.',
    'Siga cada seta no sentido do alimento para o consumidor, classificando os níveis do caminho escolhido.',
    'Acrescente caminhos alternativos para formar a teia e investigue impactos em mais de uma população.',
    'Inclua decompositores e diferencie reciclagem de nutrientes de dissipação de energia.'
   ],
   example:`Considere "gramíneas → gafanhotos → sapos → cobras" e "gramíneas → coelhos → cobras". As cobras podem consumir sapos e coelhos; portanto, ocupam posições diferentes nas cadeias. Se a população de sapos diminuir, as cobras ainda podem ter coelhos como recurso, mas a consequência depende também da abundância de coelhos e dos demais fatores ambientais. A teia evita a conclusão simplista de que um único elo controla todo o ecossistema.`,
   pitfall:'Inverter o sentido das setas, considerar o decompositor um simples consumidor final desconectado da teia, ou afirmar que energia circula indefinidamente como os nutrientes.'
  },
  {
   level:'advanced',
   title:'Fluxo energético, produtividade e interpretação de dados',
   explanation:`Produtividade primária bruta (PPB) é a quantidade de energia química fixada pelos produtores por unidade de área e tempo (ou outra unidade comparável). Parte dessa energia é usada na respiração dos próprios produtores. A produtividade primária líquida (PPL) é o restante disponível para crescimento, reprodução e formação de biomassa: PPL = PPB − respiração dos produtores, usando unidades consistentes. Isso não significa que toda PPL será ingerida por herbívoros: parte da biomassa pode permanecer, morrer ou entrar na via dos detritos.

Ao passar de um nível trófico para outro, a energia disponível tende a diminuir: organismos gastam energia no metabolismo e nem toda biomassa é consumida ou assimilada. O valor frequentemente usado em exercícios, cerca de 10% de transferência, é um modelo didático aproximado, não uma lei fixa da natureza. A eficiência pode variar entre ambientes, cadeias e organismos.

A pirâmide de energia representa a quantidade de energia disponível ou transferida por nível ao longo de um intervalo. Em condições usuais, sua base é maior do que os níveis superiores, pois não há criação de energia adicional em cada transferência. Pirâmides de números ou de biomassa, por outro lado, podem ter formatos diferentes em certas situações. Compare sempre unidade, intervalo de tempo, escala e o que exatamente está sendo medido.

Uma redução da produção primária pode limitar os consumidores, mas alterações numa teia alimentar não têm resposta obrigatoriamente única. Para avaliar uma hipótese, seria preciso considerar populações, dieta, sazonalidade, eficiência trófica e fatores abióticos. O raciocínio ecológico articula conceitos, relações e evidências em vez de apenas decorar definições.`,
   steps:[
    'Escreva a definição de PPB, PPL e respiração; todas precisam ser expressas nas mesmas unidades.',
    'Calcule a produtividade líquida subtraindo a respiração da produção bruta.',
    'Identifique se o problema informa transferência de energia, biomassa ou número de indivíduos.',
    'Interprete percentuais como hipóteses do exercício quando não houver dados empíricos; discuta limites do modelo.'
   ],
   example:`Um campo apresenta PPB de 2.400 kJ/m²/ano e respiração dos produtores de 1.000 kJ/m²/ano. A produtividade primária líquida é 2.400 − 1.000 = 1.400 kJ/m²/ano. Se um exercício supõe, hipoteticamente, eficiência de transferência de 10%, a energia transferida aos herbívoros seria 140 kJ/m²/ano. Esse resultado depende das hipóteses e não determina sozinho quantos animais vivem no campo.`,
   pitfall:'Usar PPB como se fosse PPL, supor que toda a biomassa produzida é comida por herbívoros ou transformar os 10% didáticos numa regra universal para qualquer ecossistema.'
  }
 ],
 tasks:[
  {level:'basic',prompt:'Numa praça, há 30 árvores da mesma espécie, 12 pombos e várias formigas. O que forma uma população? E o que seria necessário acrescentar à comunidade para descrever o ecossistema?',hint:'Separe indivíduos da mesma espécie, conjuntos de espécies e fatores não vivos.',solution:'As 30 árvores da mesma espécie, situadas na praça no mesmo período, constituem uma população. Árvores, pombos, formigas e outros organismos integram a comunidade. Para analisar o ecossistema, inclua também solo, água, luz, temperatura e as interações entre componentes bióticos e abióticos.'},
  {level:'basic',prompt:'Duas aves vivem na mesma árvore, mas uma come sementes durante o dia e outra caça insetos ao entardecer. Elas têm o mesmo hábitat e o mesmo nicho?',hint:'Lugar de vida não é o mesmo que papel ecológico, dieta e horário de atividade.',solution:'Compartilham parte do hábitat, porque utilizam a mesma árvore. Não têm necessariamente o mesmo nicho, pois a dieta e o horário de atividade diferem. O nicho inclui modos de exploração de recursos e outras interações, não apenas o local.'},
  {level:'intermediate',prompt:'Na cadeia "algas → pequenos crustáceos → peixes → garças", identifique o produtor, o consumidor primário e o secundário. Explique o significado das setas.',hint:'A seta vai do organismo que fornece alimento para aquele que o consome.',solution:'As algas são produtoras; os crustáceos, consumidores primários; os peixes, consumidores secundários; as garças ocupam o nível seguinte nessa cadeia. As setas indicam transferência de matéria e energia por alimentação, da presa ou recurso para o consumidor.'},
  {level:'intermediate',prompt:'Se um lago perde parte de sua população de peixes, por que não é correto afirmar que todas as garças desaparecerão?',hint:'Pense em teias alimentares e em recursos alternativos.',solution:'Uma teia apresenta vários caminhos alimentares. Garças podem consumir outras presas e mover-se entre áreas. O efeito dependerá da disponibilidade de recursos, de outras populações e de condições ambientais. Não é possível prever extinção local apenas com uma cadeia simplificada.'},
  {level:'advanced',prompt:'Em uma área, a PPB foi de 1.800 kJ/m²/ano e a respiração dos produtores consumiu 700 kJ/m²/ano. Qual é a PPL? Justifique a unidade.',hint:'Produtividade líquida = produtividade bruta − respiração dos produtores.',solution:'PPL = 1.800 − 700 = 1.100 kJ/m²/ano. Subtrair grandezas de mesma unidade conserva kJ por metro quadrado por ano, indicando energia química líquida fixada pelos produtores nesse período.'},
  {level:'advanced',prompt:'Num modelo hipotético, produtores disponibilizam 2.000 kJ de energia; a transferência para consumidores primários é 15% e para secundários é 8% da energia do nível anterior. Quantos kJ chegam aos secundários? Por que não aplicar 10% automaticamente?',hint:'Aplique as porcentagens sucessivas informadas no enunciado.',solution:'Consumidores primários recebem 2.000 × 0,15 = 300 kJ. Consumidores secundários recebem 300 × 0,08 = 24 kJ. As eficiências foram fornecidas, e 10% é apenas aproximação didática, não constante de todos os ecossistemas.'}
 ]
};
const detailed:readonly SubjectLesson[]=[ecology];
export function provaoDetailedLesson(topic:CurriculumTopic):CourseLesson|null{
 const ref=findProvaoTopic(topic.subject,topic.topic);
 if(!ref)return null;
 const source=detailed.find(item=>item.subject===topic.subject&&ref.description.startsWith(item.descriptionStarts));
 if(!source)return null;
 const sourceUrls=[...new Set(topic.exams.map(e=>examBlueprints[e]?.sourceUrl).filter((x):x is string=>Boolean(x?.startsWith('https://'))))];
 return {kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
  objective:source.objective,prerequisites:source.prerequisites,sections:source.sections,tasks:source.tasks,
  videos:[],authorship:'Kognos — aula autoral específica sobre o escopo do Provão Paulista; sem homologação docente',
  license:'Material preparatório original do Kognos; não oficial',
  sourceUrls,syllabusScope:ref.description,review:'introductory'};
}
export function hasProvaoDetailedLesson(topic:CurriculumTopic){
 const ref=findProvaoTopic(topic.subject,topic.topic);
 return Boolean(ref&&detailed.some(item=>item.subject===topic.subject&&ref.description.startsWith(item.descriptionStarts)));
}
