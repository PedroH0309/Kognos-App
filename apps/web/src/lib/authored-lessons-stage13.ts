/** Etapa 13 — conteúdo escrito especificamente para cada assunto.
 * Exemplos são didáticos e não constituem fatos estatísticos aferidos.
 * Nenhuma aula é gerada durante o acesso do estudante.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseLevel,CourseSection,CourseTask} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {examBlueprints} from './exam-blueprints.ts';

type Chapter={title:string;explanation:string;example:string;pitfall:string};
type Practice={level:CourseLevel;prompt:string;hint:string;solution:string};
type Spec={
 subject:string;topic:string;objective:string;
 sections:Chapter[];tasks:Practice[];
 everyday:Pick<EverydayContext,'context'|'question'|'answer'|'connections'>;
};
const specs:Spec[] = [
  {
    "subject": "Português",
    "topic": "Coesão sequencial e conectivos",
    "objective": "Analisar relações de causa, consequência, oposição, condição e conclusão entre enunciados; selecionar conectivos que mantenham a lógica argumentativa sem criar sentidos ausentes.",
    "sections": [
      {
        "title": "Conexões de sentido: o texto precisa avançar",
        "explanation": "Em um aviso escolar, duas frases podem estar corretas isoladamente e, ainda assim, produzir leitura confusa quando o conectivo é inadequado. Coesão sequencial é o conjunto de recursos que organiza a progressão entre ideias, incluindo conjunções, advérbios, expressões organizadoras, tempo verbal e ordenação de enunciados. “Porque” pode introduzir uma causa; “portanto”, uma conclusão apoiada por informações anteriores; “embora”, uma concessão que não elimina a afirmação principal. O leitor precisa identificar a relação lógica antes de escolher a palavra. A conexão não cria prova: afirmar “choveu, portanto a aula foi cancelada” só é justificável quando há informação de que a chuva implicou o cancelamento. A análise exige observar conteúdo e contexto de cada período.",
        "example": "Compare “A praça ficou alagada porque a drenagem estava obstruída” com “A drenagem estava obstruída; por isso, a praça ficou alagada”. Ambas organizam uma explicação causal, mas em ordem diferente. Já “A praça ficou alagada, embora não tenha chovido” apresenta contraste entre a ocorrência e uma expectativa.",
        "pitfall": "Trocar conectivos apenas porque parecem formais: “contudo” indica contraste e não pode substituir “portanto” quando o segundo período conclui o primeiro."
      },
      {
        "title": "Adversidade, concessão e condição não são sinônimos",
        "explanation": "“Mas” frequentemente contrapõe informações; “embora” apresenta uma concessão, isto é, um fato que poderia sugerir resultado diferente, mas não impede a ação principal. “Se” normalmente apresenta condição, sem garantir que ela seja satisfeita. “Caso”, “desde que” e “a menos que” podem introduzir hipóteses ou restrições e não funcionam sempre como equivalentes perfeitos. A ordem da oração muda a organização do texto sem alterar, em certos casos, a relação principal. Em produções argumentativas, conectivos ajudam a apresentar objeções e respostas sem criar contradições. É útil testar a paráfrase: a relação permanece correta se o conectivo for substituído por uma explicação direta? Se não, o problema é lógico, não apenas gramatical.",
        "example": "“Embora o ônibus tenha atrasado, chegamos a tempo” indica que o atraso não impediu a chegada. “Se o ônibus atrasar, avisaremos a coordenação” não declara que houve atraso; apresenta uma hipótese. “O ônibus atrasou, mas chegamos a tempo” contrapõe dois fatos realizados.",
        "pitfall": "Ler frases condicionais como relatos de fatos ocorridos ou supor que “embora” e “porque” expressem a mesma relação."
      },
      {
        "title": "Progressão argumentativa e revisão de parágrafos",
        "explanation": "Um parágrafo bem articulado não é uma sequência de expressões sofisticadas. Começa por uma ideia identificável, apresenta razões, dados ou exemplos e explicita o que se pode concluir deles. Conectivos de adição, como “além disso”, acrescentam informação; de exemplificação, como “por exemplo”, especificam; de conclusão, como “assim”, organizam a inferência. É necessário evitar conclusão maior que o argumento: de uma turma pesquisada não se conclui automaticamente a situação de todas as escolas. Na revisão, identifique a função de cada frase e veja se há repetição, salto de ideia, contradição ou conectivo sem antecedente lógico. É possível reorganizar períodos para mostrar melhor a relação, sem alterar a tese e sem inventar evidências.",
        "example": "Versão fraca: “Muitos alunos usam transporte público. Entretanto, a escola pode ampliar informações sobre horários.” Não há oposição clara. Versão revisada: “Muitos alunos usam transporte público. Por isso, informar alterações de horários pode ajudá-los a planejar deslocamentos”. A conclusão agora se relaciona à premissa.",
        "pitfall": "Achar que um texto possui boa argumentação só porque inclui vários “portanto” ou “além disso”, mesmo quando o conteúdo não sustenta as inferências."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em “Faltou energia; por isso, o laboratório suspendeu a atividade”, que relação o conectivo estabelece?",
        "hint": "Identifique se o segundo evento é apresentado como consequência do primeiro.",
        "solution": "“Por isso” marca consequência: a suspensão é apresentada como resultado da falta de energia. O conectivo não é oposição nem simples acréscimo; ele organiza uma inferência causal no aviso."
      },
      {
        "level": "basic",
        "prompt": "Complete logicamente: “_____ estivesse cansada, a estudante terminou a revisão”. Explique o sentido.",
        "hint": "O cansaço poderia impedir a revisão, mas não impediu.",
        "solution": "Uma possibilidade é “Embora estivesse cansada, a estudante terminou a revisão”. A oração introduz uma concessão: o cansaço era um obstáculo esperado, mas a conclusão da tarefa aconteceu."
      },
      {
        "level": "intermediate",
        "prompt": "Por que “Se a aula for cancelada, haverá aviso” não prova que a aula foi cancelada?",
        "hint": "Diferencie hipótese e realização.",
        "solution": "A estrutura com “se” estabelece uma condição: caso haja cancelamento, haverá aviso. A premissa não informa que o cancelamento ocorreu; portanto, deduzir esse fato seria inferência indevida."
      },
      {
        "level": "intermediate",
        "prompt": "Corrija “O ônibus passou no horário; portanto, o estudante perdeu o transporte” para expressar contraste.",
        "hint": "O segundo acontecimento pode ser inesperado em relação ao primeiro.",
        "solution": "Uma reescrita possível é “O ônibus passou no horário, mas o estudante o perdeu”. A conjunção “mas” apresenta contraposição, enquanto “portanto” pressuporia uma conclusão que o enunciado não justifica."
      },
      {
        "level": "advanced",
        "prompt": "Reescreva um argumento que usa “portanto” para generalizar uma pesquisa feita com apenas dez alunos.",
        "hint": "A conclusão precisa respeitar o alcance da amostra.",
        "solution": "Pode-se escrever “Na amostra de dez estudantes, seis preferiram materiais digitais; portanto, nesse grupo a preferência foi majoritária”. Não se deve afirmar preferência de todos os estudantes da cidade sem dados representativos."
      },
      {
        "level": "advanced",
        "prompt": "Compare “Embora chovesse, o evento ocorreu” e “Porque choveu, o evento ocorreu”. Que mudança de sentido há?",
        "hint": "Identifique concessão e causalidade.",
        "solution": "A primeira frase apresenta a chuva como obstáculo que não impediu o evento; a segunda atribui a realização do evento à chuva. O conectivo altera a relação entre os fatos e precisa ser escolhido conforme a evidência."
      }
    ],
    "everyday": {
      "context": "A escola envia um aviso: “O laboratório estava sem energia; contudo, a atividade foi cancelada”. Uma família entende que o cancelamento contradiz a falta de energia.",
      "question": "Qual conectivo deve substituir “contudo” para indicar corretamente a consequência?",
      "answer": "“Por isso” ou “portanto” podem explicitar que a suspensão decorreu da falta de energia: “O laboratório estava sem energia; por isso, a atividade foi cancelada”. “Contudo” indicaria oposição, inadequada nesse contexto.",
      "connections": [
        {
          "subject": "Redação",
          "topic": "Formulação de tese",
          "reason": "A tese precisa de razões logicamente encadeadas, e os conectivos tornam explícitas essas relações."
        },
        {
          "subject": "Português",
          "topic": "Coesão referencial",
          "reason": "Além da sequência lógica, pronomes e expressões nominais precisam retomar o referente correto para evitar ambiguidade."
        }
      ]
    }
  },
  {
    "subject": "Literatura",
    "topic": "Realismo brasileiro",
    "objective": "Relacionar crítica social, construção do narrador e procedimentos de ironia em narrativas realistas brasileiras, distinguindo movimento literário de reprodução objetiva da realidade.",
    "sections": [
      {
        "title": "O Realismo como leitura crítica da sociedade",
        "explanation": "O Realismo brasileiro costuma ser estudado a partir da publicação de Memórias póstumas de Brás Cubas, de Machado de Assis, em 1881, marco didático que não significa ruptura instantânea ou uniforme entre movimentos. Diferentemente da idealização frequente em certas tendências românticas, narrativas realistas podem examinar interesses, contradições, hierarquias sociais e comportamentos de personagens. O romance não equivale a reportagem ou reprodução neutra dos fatos: a seleção das cenas e a organização do narrador são construções literárias. Questões de vestibular costumam exigir identificar mecanismos de crítica e efeitos de sentido em passagens, não apenas decorar uma data. Em especial, convém perceber que apresentar uma personagem com defeitos não torna automaticamente um texto realista, assim como um enredo amoroso não o torna necessariamente romântico.",
        "example": "Uma narrativa original apresenta um comerciante que se declara defensor da honestidade, mas oculta defeitos de um produto para obter lucro. O contraste entre o discurso moral e a prática evidencia uma contradição social e pode produzir ironia, sem depender de narrador que explique tudo ao leitor.",
        "pitfall": "Achar que Realismo é ausência de ficção, de sentimentos ou de invenção formal, ou classificar obras exclusivamente pela época em que foram publicadas."
      },
      {
        "title": "Narrador não confiável, ironia e perspectiva",
        "explanation": "Na ficção, narrador é a voz que organiza o relato e pode escolher, omitir ou distorcer informações. Em Machado de Assis, o leitor muitas vezes precisa desconfiar da versão apresentada, percebendo tensões entre o que o narrador afirma e o que sua própria fala revela. A ironia nasce de uma distância entre sentido literal e interpretação crítica sugerida pela situação ou pela linguagem. O uso de primeira pessoa não garante transparência psicológica; a terceira pessoa também não implica imparcialidade. Para interpretar um trecho, pergunte quem narra, que interesse tem, como retrata as demais personagens e que pistas textuais sustentam uma leitura alternativa. Essa atitude conecta análise literária à interpretação de discursos no cotidiano, sem reduzir a complexidade artística à checagem factual.",
        "example": "Num fragmento inventado, o narrador diz: “Nunca me interessei por prestígio; apenas fiz questão de que todos vissem meu nome na placa”. O próprio enunciado contradiz a alegada modéstia. O leitor infere vaidade a partir da contradição, não de uma declaração direta.",
        "pitfall": "Atribuir toda opinião do narrador ao autor real ou considerar ironia qualquer frase engraçada, sem mostrar o contraste textual que a produz."
      },
      {
        "title": "Contexto histórico e limites da representação",
        "explanation": "A literatura realista brasileira foi produzida num século marcado por escravidão, abolicionismo, transformações urbanas e mudanças de instituições políticas. Essas condições podem atravessar conflitos de classe, relações de favor, prestígio e poder em narrativas da época. A leitura contextualizada deve aproximar texto e história sem supor que todos os personagens representem diretamente grupos inteiros nem que obras tenham a mesma posição política. Comparar um comportamento individual e uma instituição ajuda a perceber como hierarquias são naturalizadas ou questionadas. É indispensável separar afirmações historicamente documentadas de interpretações críticas da obra. O texto literário possui autonomia estética e pode contrariar a perspectiva aparente do narrador, propondo ao leitor uma investigação de valores sociais.",
        "example": "Um conto original mostra um jovem que critica privilégios hereditários, mas solicita recomendação de um parente influente para obter emprego. O conflito entre discurso e ação permite discutir favores sociais e reputação, relacionando personagem e organização da sociedade sem tratá-lo como estatística.",
        "pitfall": "Usar uma personagem para concluir, sem fontes históricas, que todas as pessoas de uma época agiam de modo idêntico."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que o Realismo não deve ser definido como cópia exata da realidade?",
        "hint": "Considere narrador, escolhas estéticas e ficção.",
        "solution": "Narrativas realistas constroem situações e personagens por escolhas de linguagem, foco e estrutura. Mesmo quando representam conflitos sociais reconhecíveis, não são registros neutros nem dispensam interpretação."
      },
      {
        "level": "basic",
        "prompt": "Qual é o marco didático frequentemente associado ao início do Realismo brasileiro e quem é seu autor?",
        "hint": "Pense no romance publicado em 1881.",
        "solution": "Memórias póstumas de Brás Cubas, de Machado de Assis, publicado em 1881, é marco convencional do Realismo no Brasil. Essa data não implica que toda a produção literária tenha mudado imediatamente."
      },
      {
        "level": "intermediate",
        "prompt": "Analise a ironia em “Não queria elogios; só pedi que anunciassem meu nome ao microfone”.",
        "hint": "Compare declaração de desinteresse e conduta do personagem.",
        "solution": "A declaração de que não deseja elogios contrasta com o pedido de exposição pública. A ironia decorre dessa contradição, permitindo ao leitor questionar a sinceridade da voz que fala."
      },
      {
        "level": "intermediate",
        "prompt": "Explique por que narrador em primeira pessoa não corresponde automaticamente à opinião do autor.",
        "hint": "Diferencie instância narrativa e pessoa que escreveu a obra.",
        "solution": "O narrador é uma construção ficcional e pode ser parcial, contraditório ou pouco confiável. A autoria pertence a quem criou o texto; atribuir-lhe toda opinião narrada ignora a mediação literária."
      },
      {
        "level": "advanced",
        "prompt": "Uma análise afirma que uma personagem gananciosa prova que toda a sociedade oitocentista era gananciosa. Qual o problema?",
        "hint": "Diferencie caso ficcional e generalização histórica.",
        "solution": "Uma personagem pode representar crítica a interesses e hierarquias, mas não constitui amostra histórica universal. É preciso analisar sua função artística e recorrer a outras fontes para afirmar padrões sociais amplos."
      },
      {
        "level": "advanced",
        "prompt": "Compare a idealização de personagens românticos à representação crítica de contradições em narrativas realistas.",
        "hint": "Evite tratar escolas literárias como conjuntos homogêneos.",
        "solution": "Tendências românticas podem privilegiar idealização e subjetividade, enquanto textos realistas frequentemente exploram contradições e crítica social. São tendências, não regras rígidas; recursos podem coexistir em obras de épocas distintas."
      }
    ],
    "everyday": {
      "context": "Um influenciador afirma em vídeo que não se importa com fama, mas dedica quase toda a fala a contar seguidores e mostrar convites de eventos. A turma compara essa contradição com a construção de narradores literários.",
      "question": "Como a ironia pode surgir entre o que o narrador declara e o comportamento que a própria narrativa revela?",
      "answer": "O contraste entre afirmar desinteresse e buscar reconhecimento permite inferir uma motivação que a voz narradora procura ocultar. Em literatura realista, é necessário sustentar essa leitura por pistas do texto, sem identificar narrador com autor.",
      "connections": [
        {
          "subject": "Literatura",
          "topic": "Narrador e foco narrativo",
          "reason": "A perspectiva do narrador determina quais informações são apresentadas e quais contradições o leitor pode perceber."
        },
        {
          "subject": "Português",
          "topic": "Informações explícitas e inferências",
          "reason": "A compreensão da ironia depende de diferenciar a declaração literal das inferências autorizadas pelo contexto."
        }
      ]
    }
  },
  {
    "subject": "Redação",
    "topic": "Proposta de intervenção: agente, ação, meio, finalidade e detalhamento",
    "objective": "Planejar propostas de intervenção viáveis, relacionadas à tese e aos argumentos, identificando agente, ação, meio, finalidade e detalhamento sem atribuir responsabilidades impróprias.",
    "sections": [
      {
        "title": "Do diagnóstico à proposta de intervenção",
        "explanation": "Em uma redação dissertativo-argumentativa do ENEM, o desenvolvimento de um problema social deve conduzir a uma conclusão coerente. A proposta de intervenção apresenta medidas capazes de enfrentar ao menos parte das causas discutidas; não basta pedir “conscientização” ou “melhoria”. Uma estrutura de planejamento pode identificar agente responsável, ação a realizar, meio ou modo de execução, finalidade e detalhamento pertinente. Essas categorias funcionam como guia pedagógico, não como substituto de argumentação e adequação ao tema. É importante distinguir um problema complexo de uma solução total: uma medida plausível pode ter alcance limitado, depender de recursos e exigir participação de instituições diferentes. A redação deve respeitar direitos humanos e evitar soluções discriminatórias ou coercitivas.",
        "example": "Se o desenvolvimento discutiu dificuldade de acesso a bibliotecas, uma proposta inicial seria: “A gestão municipal pode ampliar horários de bibliotecas públicas por meio de reorganização das equipes e divulgação comunitária, para permitir maior uso por estudantes que trabalham”. A medida enfrenta uma barreira específica.",
        "pitfall": "Escrever “o governo deve resolver tudo” sem apontar setor, ação concreta, instrumento ou relação com as causas argumentadas."
      },
      {
        "title": "Responsabilidade, meio e finalidade",
        "explanation": "O agente deve possuir competência ou capacidade compatível com a medida: uma escola pode organizar atividades pedagógicas, uma secretaria de transporte pode planejar linhas, e uma organização comunitária pode promover participação local, respeitados recursos e atribuições. A ação precisa ser observável: capacitar profissionais, disponibilizar material, adequar horários ou criar canal de atendimento. O meio mostra como a ação será executada, por exemplo oficinas, campanhas informativas ou ampliação de infraestrutura; a finalidade indica o efeito esperado, sem garanti-lo como certeza. O detalhamento pode especificar público-alvo, periodicidade ou modo de acompanhamento. É indispensável relacionar a proposta ao argumento anterior e não copiar soluções genéricas entre temas diferentes.",
        "example": "Tema hipotético: segurança de pedestres perto de uma escola. A prefeitura, por seu órgão de trânsito (agente), pode avaliar a travessia e implantar sinalização adequada (ação), após levantamento técnico e consulta à comunidade (meio), visando diminuir conflitos de circulação (finalidade), com avaliação periódica de resultados (detalhamento).",
        "pitfall": "Usar instrumento que não produz a ação pretendida ou escolher um agente sem competência para realizá-la."
      },
      {
        "title": "Coerência, direitos humanos e avaliação crítica",
        "explanation": "Uma intervenção coerente responde ao problema delimitado pela tese e às causas desenvolvidas nos parágrafos. Antes de concluir, confronte cada elemento com o argumento: o agente pode agir? O meio oferece caminho plausível? A ação alcança o público descrito? A finalidade é proporcional ao alcance? Respeita direitos individuais e coletivos? Uma proposta não pode depender de proibições arbitrárias ou culpabilização de grupos vulneráveis. Mesmo medidas bem formuladas não dispensam a análise das limitações: mudanças institucionais precisam de financiamento, monitoramento e ajustes. Critérios específicos de avaliação mudam conforme o exame e seu manual; o estudante deve consultar a versão aplicável sem inventar fórmulas para nota máxima.",
        "example": "Uma redação sobre evasão escolar aponta transporte insuficiente. Propor somente palestras motivacionais não enfrenta diretamente o deslocamento. Uma alternativa coerente é avaliar trajetos escolares e organizar apoio ao transporte, com acompanhamento de frequência e escuta das famílias, dentro das competências locais.",
        "pitfall": "Tratar a intervenção como lista de cinco palavras ou considerar que qualquer ação, mesmo desconectada do problema, garante boa avaliação."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Identifique o agente e a ação na frase “A escola organizará oficinas de leitura para estudantes iniciantes”.",
        "hint": "Pergunte quem executará a medida e o que será feito.",
        "solution": "O agente é a escola, instituição que executará a medida. A ação é organizar oficinas de leitura. O enunciado ainda pode ser aprimorado com meio, finalidade e detalhamento contextualizado."
      },
      {
        "level": "basic",
        "prompt": "Por que “Precisamos melhorar o transporte” é uma proposta pouco específica?",
        "hint": "Procure agente, procedimento e finalidade verificáveis.",
        "solution": "A frase anuncia uma intenção, mas não define quem atua, qual medida realizará, como será executada nem qual problema do transporte enfrentará. Para virar intervenção, precisa desses elementos coerentes."
      },
      {
        "level": "intermediate",
        "prompt": "Formule uma medida para informar mudanças de horário na biblioteca escolar identificando agente, ação e meio.",
        "hint": "Considere canais que a escola já poderia usar.",
        "solution": "Uma proposta é: “A direção escolar divulgará antecipadamente mudanças de horário por avisos impressos e canais oficiais, para que estudantes planejem o acesso”. O agente, a ação e os meios ficam identificáveis."
      },
      {
        "level": "intermediate",
        "prompt": "Uma proposta sobre filas de atendimento diz “A secretaria fará uma campanha para resolver tudo”. Indique duas falhas.",
        "hint": "Considere generalidade e adequação da ação à causa.",
        "solution": "“Resolver tudo” é finalidade vaga e impossível de avaliar; “fará uma campanha” não demonstra como filas serão reduzidas. Seria necessário relacionar a medida às causas, como distribuição de horários e capacidade de atendimento."
      },
      {
        "level": "advanced",
        "prompt": "Reescreva uma intervenção sobre dificuldade de acesso à escola para incluir agente, ação, meio, finalidade e monitoramento.",
        "hint": "Parta do obstáculo de deslocamento, não de uma mudança abstrata de comportamento.",
        "solution": "A gestão municipal de educação, em articulação com transporte local, pode revisar rotas escolares com base em levantamento de trajetos, visando reduzir barreiras de deslocamento, e acompanhar mensalmente frequência e reclamações das famílias."
      },
      {
        "level": "advanced",
        "prompt": "Avalie por que uma proposta que restringe direitos de um grupo social pode comprometer a redação, mesmo que apresente cinco elementos formais.",
        "hint": "A adequação ética e argumentativa vem antes da lista de componentes.",
        "solution": "A presença formal de agente, ação, meio, finalidade e detalhe não justifica violação de direitos humanos. A proposta deve respeitar pessoas e grupos, ser proporcional e enfrentar as causas reais do problema."
      }
    ],
    "everyday": {
      "context": "Em uma redação sobre estudantes que chegam atrasados porque a linha de ônibus mudou de horário, o texto termina com “as autoridades precisam melhorar o transporte”. O professor pede uma solução executável.",
      "question": "Quem poderia agir, o que fazer, por qual meio e com que finalidade, sem prometer eliminar todos os atrasos?",
      "answer": "Uma secretaria municipal competente pode revisar informações e conexões de linhas, com levantamento de horários e consulta aos usuários, para reduzir dificuldades no trajeto escolar. Acompanhar reclamações e pontualidade detalha como avaliar a ação.",
      "connections": [
        {
          "subject": "Redação",
          "topic": "Formulação de tese",
          "reason": "A proposta deve resolver uma causa estabelecida nos argumentos, e não mudar o assunto na conclusão."
        },
        {
          "subject": "Geografia",
          "topic": "Fusos horários",
          "reason": "A distinção entre horário previsto e horário efetivo reforça a importância de informação temporal exata em serviços, embora trate de escalas diferentes."
        }
      ]
    }
  }
];
const lookup=new Map(specs.map(s=>[s.subject+'\0'+s.topic,s]));
export const stage13Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage13EverydayContexts:readonly EverydayContext[]=specs.map(s=>({subject:s.subject,topic:s.topic,...s.everyday}));
export function stage13Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=lookup.get(topic.subject+'\0'+topic.topic);
 if(!data)return null;
 const levels:CourseLevel[]=['basic','intermediate','advanced'];
 const sections:CourseSection[]=data.sections.map((section,i)=>({
  ...section,level:levels[i],
  explanation:(i===0?'Aula específica do Kognos; revisão docente pendente.\n\n':'')+section.explanation,
  steps:[
   'Interprete as informações do problema cotidiano e identifique a questão central.',
   'Aplique as definições e o procedimento do capítulo ao exemplo apresentado.',
   'Confira o resultado, suas condições de validade e o erro comum descrito.'
  ]
 }));
 const sourceUrls=[...new Set(topic.exams.map(e=>examBlueprints[e]?.sourceUrl).filter((u):u is string=>Boolean(u?.startsWith('https://'))))];
 const tasks:CourseTask[]=data.tasks.map(t=>({...t}));
 return {
  kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
  objective:data.objective,prerequisites:[],sections,tasks,videos:[],
  authorship:'Kognos — aula autoral específica; sem homologação docente',
  license:'Conteúdo preparatório original do Kognos, não oficial',
  sourceUrls,review:'introductory'
 };
}
