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
  },
  {
    "subject": "Física",
    "topic": "Conservação da energia mecânica",
    "objective": "Relacionar energia cinética e potencial a transformações de energia e aplicar conservação da energia mecânica apenas sob as condições corretas.",
    "sections": [
      {
        "title": "Energia mecânica como soma de duas parcelas",
        "explanation": "Em muitos movimentos, descrevemos a energia mecânica como a soma da energia cinética, associada ao movimento, e da energia potencial, associada à configuração do sistema. Para um corpo de massa m e velocidade v, Ec=mv²/2. Próximo à superfície terrestre, quando a aceleração gravitacional pode ser tratada como aproximadamente constante, Ep,g=mgh em relação a um nível de referência escolhido. A energia cinética nunca é negativa, enquanto o valor numérico de uma energia potencial depende da referência. As duas possuem unidade joule (J), equivalente a kg·m²/s². Quando a altura diminui e a velocidade aumenta, parte da energia potencial gravitacional pode transformar-se em energia cinética. A explicação não exige supor que velocidade e altura sejam proporcionais.",
        "example": "Um carrinho de 2 kg está inicialmente a 5 m de altura, praticamente em repouso. Adotando g=10 m/s², sua energia potencial gravitacional em relação ao solo é 2×10×5=100 J, e sua energia cinética inicial é aproximadamente zero. Se não houver dissipação, essa energia pode aparecer como energia cinética ao descer.",
        "pitfall": "Confundir massa em quilogramas com peso em newtons ou afirmar que energia potencial gravitacional possui valor absoluto independente da referência."
      },
      {
        "title": "Quando a energia mecânica se conserva",
        "explanation": "A energia mecânica é constante para um sistema apropriado quando o trabalho das forças não conservativas é nulo, em condições em que as energias consideradas descrevem o processo. Em um modelo sem atrito, Ec inicial + Ep inicial = Ec final + Ep final. A velocidade pode ser calculada por essa igualdade, tomando cuidado para usar o mesmo nível de referência nas alturas. O princípio de conservação da energia em sentido amplo continua válido mesmo com atrito; o que pode diminuir é a parcela mecânica, transferida para energia interna e outras formas. Uma rampa real com atrito, portanto, não conserva necessariamente energia mecânica. A escolha de incluir corpo, Terra e outras partes no sistema afeta a interpretação das transferências.",
        "example": "Um bloco parte do repouso a 1,8 m de altura numa pista ideal sem atrito. Igualando mgh=mv²/2 e usando g=10 m/s²: v²=2×10×1,8=36 e v=6 m/s no ponto mais baixo. A massa se cancela porque o modelo usa apenas gravidade e não inclui outras forças dissipativas.",
        "pitfall": "Aplicar Ec+Ep constante a qualquer sistema com atrito relevante, ignorando trabalho de forças dissipativas."
      },
      {
        "title": "Trabalho não conservativo e limites de modelos",
        "explanation": "Quando atrito ou resistência do ar realizam trabalho, a variação da energia mecânica depende dessas forças: ΔEmec=Wnão conservativo, sob definições consistentes de sistema e forças. O atrito cinético geralmente reduz a energia mecânica do movimento ao transferi-la para energia interna de superfícies; isso não equivale ao desaparecimento de energia. O mesmo sistema pode ser estudado pela segunda lei de Newton e pelo teorema trabalho–energia, mas as perguntas e grandezas mudam. Em problemas, identifique se há motor, impulso externo ou contato deformável antes de usar uma igualdade simplificada. Contextos como freios, montanhas-russas e quedas fornecem bons modelos desde que os dados sejam hipóteses explícitas.",
        "example": "Uma bicicleta e seu ciclista possuem 500 J de energia mecânica num instante e 420 J depois de frear num trecho horizontal, sob modelo simplificado. A variação mecânica é −80 J. Essa diferença foi transferida para outras formas, como energia interna, e não foi destruída.",
        "pitfall": "Tomar uma diminuição de energia mecânica como violação da conservação total da energia ou atribuir valor exato à dissipação sem saber o sistema escolhido."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Calcule a energia cinética de um carrinho de 4 kg que se move a 3 m/s.",
        "hint": "Use Ec=mv²/2 em unidades do SI.",
        "solution": "Ec=4×3²/2=4×9/2=18 J. A velocidade deve ser elevada ao quadrado; por isso dobrar a velocidade quadruplica a energia cinética, mantida a massa."
      },
      {
        "level": "basic",
        "prompt": "Um objeto de 3 kg está a 2 m do nível de referência, com g=10 m/s². Calcule sua energia potencial.",
        "hint": "Use Ep=mgh e informe o nível adotado.",
        "solution": "Ep=3×10×2=60 J em relação ao nível h=0 escolhido. Se o nível de referência mudar, o valor isolado de Ep também muda, mas diferenças de energia permanecem relevantes."
      },
      {
        "level": "intermediate",
        "prompt": "Num trilho sem atrito, um corpo parte do repouso de altura 5 m. Encontre a rapidez ao chegar ao nível zero, com g=10 m/s².",
        "hint": "Conserve mgh+mv²/2 e cancele a massa.",
        "solution": "m×10×5=mv²/2, logo v²=100 e v=10 m/s. Isso pressupõe ausência de forças dissipativas e velocidade inicial nula; a massa não altera a rapidez nesse modelo."
      },
      {
        "level": "intermediate",
        "prompt": "Uma bola sobe verticalmente sem resistência do ar. O que acontece com Ec e Ep durante a subida?",
        "hint": "A velocidade diminui enquanto a altura aumenta.",
        "solution": "A energia cinética diminui e a energia potencial gravitacional aumenta. Em modelo ideal, a soma permanece constante. No ponto mais alto, a velocidade vertical é momentaneamente nula."
      },
      {
        "level": "advanced",
        "prompt": "Um ciclista possui energia mecânica de 1200 J e, após frear, 900 J no modelo adotado. Interprete a variação.",
        "hint": "Calcule energia final menos inicial.",
        "solution": "ΔEmec=900−1200=−300 J. Houve redução de 300 J da parcela mecânica, transferida a outras formas de energia; não se conclui que a energia total desapareceu."
      },
      {
        "level": "advanced",
        "prompt": "Por que a conservação de energia mecânica não pode ser aplicada sem ressalva a uma montanha-russa real?",
        "hint": "Considere atrito nos trilhos e resistência do ar.",
        "solution": "Forças dissipativas transferem parte da energia mecânica para energia interna e outras formas, alterando Ec+Ep. A conservação total da energia continua, mas um modelo ideal sem dissipação seria apenas aproximação."
      }
    ],
    "everyday": {
      "context": "Numa pista de skate, uma pessoa desce uma rampa a partir de uma altura conhecida. A velocidade aumenta durante a descida, mas o atrito pode impedir que toda a energia inicial apareça como movimento.",
      "question": "Como relacionar altura, rapidez e perdas sem dizer que energia foi criada ou destruída?",
      "answer": "No modelo sem atrito, a energia potencial gravitacional diminui e se transforma em energia cinética, mantendo Ec+Ep. Com atrito, parte é transferida para outras formas, como energia interna; a energia total continua conservada.",
      "connections": [
        {
          "subject": "Física",
          "topic": "Leis de Newton",
          "reason": "A análise das forças explica aceleração e atrito, enquanto a energia descreve transferências ao longo do percurso."
        },
        {
          "subject": "Física",
          "topic": "Velocidade média e instantânea",
          "reason": "A velocidade instantânea no fim da descida não é igual à rapidez média ao longo de todo o trajeto."
        }
      ]
    }
  },
  {
    "subject": "Química",
    "topic": "Concentração comum e molaridade",
    "objective": "Calcular concentração comum em g/L e molaridade em mol/L, diferenciar soluto de solução e analisar diluições com unidades e condições de validade.",
    "sections": [
      {
        "title": "Soluto, solvente e concentração comum",
        "explanation": "Uma solução é uma mistura homogênea, nas condições consideradas, de duas ou mais substâncias. Na linguagem escolar, chamamos soluto ao componente cuja concentração acompanhamos e solvente ao meio de dissolução, embora a designação dependa do sistema. A concentração comum, C=m_soluto/V_solução, expressa massa de soluto por volume total de solução, frequentemente em g/L. O denominador não é, em geral, o volume isolado do solvente: os volumes podem não ser aditivos. Converter mL em L é indispensável antes de substituir em unidades padronizadas. Concentração não diz sozinha se a substância é segura, e a ausência de cor não indica solução diluída. Não se deve interpretar o rótulo de um produto real sem verificar qual espécie e unidade ele apresenta.",
        "example": "Em um exercício de laboratório, dissolvem-se 12 g de um soluto e ajusta-se o volume final da solução para 300 mL (0,300 L). A concentração comum é C=12/0,300=40 g/L. O volume informado é o da solução preparada, não necessariamente o de água adicionado.",
        "pitfall": "Dividir gramas por mililitros e informar g/L sem converter unidades, ou usar volume de solvente em vez de volume final da solução."
      },
      {
        "title": "Molaridade: quantidade de matéria em volume",
        "explanation": "A concentração em quantidade de matéria, frequentemente chamada molaridade, é c=n_soluto/V_solução, geralmente expressa em mol/L. A conversão entre massa e mol usa n=m/M, sendo M a massa molar em g/mol. Assim, c=m/(M·V), desde que as unidades sejam compatíveis. Para NaCl, uma massa molar aproximada é 58,5 g/mol; a concentração em mol/L descreve quantidade de unidades de fórmula por volume, não diretamente a concentração individual de cada íon em soluções reais. É necessário distinguir concentração química de densidade da solução: densidade é massa total por volume, não massa apenas do soluto. A molaridade depende da temperatura se o volume mudar significativamente, detalhe importante para medições precisas.",
        "example": "Se 5,85 g de NaCl são dissolvidos e o volume final ajustado para 0,500 L, n≈5,85/58,5=0,100 mol. Portanto c=0,100/0,500=0,200 mol/L. Esse resultado depende de uma preparação hipotética e das aproximações fornecidas.",
        "pitfall": "Usar o número 58,5 como se fosse volume ou confundir 0,200 mol/L com 0,200 g/L, que são grandezas diferentes."
      },
      {
        "title": "Diluição e leitura crítica de rótulos",
        "explanation": "Ao adicionar solvente sem retirar nem transformar o soluto, a quantidade de matéria desse soluto permanece constante, enquanto o volume e a concentração mudam. No modelo de diluição, c1V1=c2V2, usando volumes compatíveis e concentração referida à mesma espécie química. A equação não deve ser aplicada quando há reação, precipitação significativa ou perda de soluto. Em soluções domésticas, rótulos podem apresentar porcentagem em massa, massa por volume ou outras unidades, e essas expressões não são equivalentes sem informações adicionais. Tampouco se deve incentivar misturas de produtos de limpeza: reações entre componentes podem produzir gases perigosos. A interpretação adequada inclui substância identificada, unidade, condições e finalidade do cálculo.",
        "example": "Uma amostra hipotética de 100 mL de solução 1,0 mol/L recebe solvente até atingir volume final 500 mL. Pela conservação dos mols: c2=(1,0×100)/500=0,20 mol/L. O número de mols do soluto permanece 0,100 mol; apenas a concentração diminui.",
        "pitfall": "Achar que diluir elimina substâncias ou reduz a quantidade total de soluto sem que haja remoção ou reação."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Determine C em g/L para 10 g de soluto em 250 mL de solução.",
        "hint": "Converta 250 mL para 0,250 L.",
        "solution": "C=10 g/0,250 L=40 g/L. A concentração corresponde à massa de soluto por volume total da solução, não por volume apenas de solvente."
      },
      {
        "level": "basic",
        "prompt": "Explique a diferença entre concentração comum e molaridade.",
        "hint": "Uma é massa por volume; a outra, quantidade de matéria por volume.",
        "solution": "Concentração comum usa g/L: massa do soluto dividida pelo volume da solução. Molaridade usa mol/L: quantidade de matéria do soluto dividida pelo volume da solução."
      },
      {
        "level": "intermediate",
        "prompt": "Uma solução contém 0,25 mol de soluto em 500 mL de volume final. Calcule sua molaridade.",
        "hint": "V=0,500 L; use c=n/V.",
        "solution": "c=0,25 mol/0,500 L=0,50 mol/L. É importante não manter o denominador como 500 sem conversão, pois isso resultaria em mol/mL."
      },
      {
        "level": "intermediate",
        "prompt": "Dissolvem-se 18 g de uma substância com M=60 g/mol até 200 mL de solução. Calcule c.",
        "hint": "Converta primeiro m em n usando n=m/M.",
        "solution": "n=18/60=0,30 mol. Como V=0,200 L, a molaridade é c=0,30/0,200=1,5 mol/L, assumindo que o soluto permanece dissolvido."
      },
      {
        "level": "advanced",
        "prompt": "Uma solução de 2,0 mol/L, com volume 50 mL, é diluída até 200 mL. Qual a concentração final?",
        "hint": "Utilize c1V1=c2V2, sem mudar a espécie.",
        "solution": "c2=(2,0×50)/200=0,50 mol/L. O volume quadruplicou e a concentração caiu a um quarto, mantendo constante a quantidade de matéria do soluto."
      },
      {
        "level": "advanced",
        "prompt": "Explique por que uma solução não se torna necessariamente segura apenas por ser mais diluída.",
        "hint": "Considere identidade da substância, concentração final e contexto de exposição.",
        "solution": "A segurança depende da substância e da situação, não apenas da diluição relativa. Uma concentração menor pode continuar inadequada, e misturar substâncias pode causar reações perigosas."
      }
    ],
    "everyday": {
      "context": "Em um laboratório escolar, dois frascos transparentes contêm a mesma substância dissolvida em água, mas em concentrações distintas. Só observar a cor não revela quantos gramas estão dissolvidos.",
      "question": "Que medida permite comparar os frascos de forma objetiva: massa por volume ou apenas aparência?",
      "answer": "Pode-se calcular C=m_soluto/V_solução em g/L ou a molaridade n/V em mol/L, com as unidades identificadas. A transparência não prova concentrações iguais e não autoriza experimentos com substâncias desconhecidas.",
      "connections": [
        {
          "subject": "Química",
          "topic": "Mol e constante de Avogadro",
          "reason": "A molaridade depende da quantidade de matéria, cuja unidade é o mol e cuja contagem se relaciona à constante de Avogadro."
        },
        {
          "subject": "Matemática",
          "topic": "Razões, escalas e proporcionalidade",
          "reason": "Massa por volume é uma razão; ao diluir uma mesma quantidade de soluto, o aumento de volume reduz a concentração."
        }
      ]
    }
  },
  {
    "subject": "Biologia",
    "topic": "Primeira lei de Mendel",
    "objective": "Interpretar segregação dos alelos durante formação de gametas e resolver cruzamentos monogênicos simples, explicitando hipóteses e limitações do modelo mendeliano.",
    "sections": [
      {
        "title": "Gene, alelos e segregação na formação dos gametas",
        "explanation": "Na explicação mendeliana clássica, organismos diploides possuem, em geral, dois alelos de um locus autossômico, herdados dos genitores. Durante a meiose, os cromossomos homólogos se separam e, consequentemente, cada gameta recebe um dos alelos do par, no modelo sem eventos cromossômicos atípicos. Um indivíduo Aa pode produzir gametas com A ou a, e a união dos gametas restabelece o par de alelos no descendente. Genótipo é a combinação de alelos; fenótipo é a característica observada, que também pode depender do ambiente e de outros genes. A primeira lei é frequentemente chamada lei da segregação e não afirma que todas as características humanas sejam explicadas por um único par de alelos. Além disso, dominância se refere à expressão fenotípica em um contexto genético, não à frequência populacional nem à 'força' de um gene.",
        "example": "Imagine plantas didáticas com genótipos AA, Aa e aa para uma característica com dominância completa, em condições controladas. Plantas Aa produzem dois tipos de gametas, A e a, em proporções esperadas de 50% cada. O fenótipo de Aa coincide com o de AA apenas sob o modelo de dominância completa adotado.",
        "pitfall": "Afirmar que um alelo dominante é sempre mais comum na natureza ou que todos os gametas de uma planta heterozigota carregam o mesmo alelo."
      },
      {
        "title": "Quadrado de Punnett e probabilidades",
        "explanation": "Para um cruzamento Aa×Aa, cada genitor produz dois tipos possíveis de gametas, A e a, com probabilidades esperadas iguais no modelo simples. Combinando as possibilidades, os genótipos dos descendentes apresentam proporções esperadas 1 AA:2 Aa:1 aa. Se A manifesta dominância completa sobre a, a proporção fenotípica esperada será 3:1; se não há dominância completa, não se pode inferir esse mesmo resultado fenotípico. Proporções são probabilidades por descendente, não garantias sobre quatro indivíduos de uma família. Nascimentos são eventos independentes sob determinadas hipóteses e não têm obrigação de 'compensar' resultados anteriores. O quadro de Punnett representa combinações possíveis, não o processo molecular completo da fecundação.",
        "example": "Num cruzamento hipotético de duas plantas Aa, o quadro combina A e a de cada genitor: AA, Aa, Aa e aa. Logo P(aa)=1/4=25%. Isso significa chance esperada para cada descendente sob o modelo, e não que a cada quatro sementes exatamente uma será aa.",
        "pitfall": "Confundir a proporção 1:2:1 de genótipos com resultado 3:1 de fenótipos em situações sem dominância completa."
      },
      {
        "title": "Hereditariedade real, ambiente e exceções",
        "explanation": "Muitos caracteres são poligênicos, influenciados pelo ambiente ou apresentam padrões como codominância, dominância incompleta, alelos múltiplos e ligação ao sexo. Por isso, exemplos escolares simplificados não devem ser apresentados como explicação de inteligência, aparência global ou comportamentos complexos. Mesmo para um caráter monogênico, mutações, alterações cromossômicas e diferenças na penetrância ou expressividade podem tornar a previsão mais complexa. Em aconselhamento genético real, a interpretação exige informações clínicas e especializadas; um diagrama de quatro quadrinhos não serve para diagnosticar ninguém. A primeira lei continua valiosa porque fundamenta a separação de alelos e os cálculos de probabilidade elementar, estabelecendo ponte entre meiose, gametas e transmissão hereditária.",
        "example": "Em plantas, uma característica modelada por um único locus pode seguir razão mendeliana simples sob condições específicas. A cor dos olhos humanos, por outro lado, envolve diferentes genes e processos, portanto não pode ser prevista corretamente apenas com um quadro simples de “castanho dominante sobre azul”.",
        "pitfall": "Aplicar o quadro Aa×Aa a qualquer traço humano sem verificar o mecanismo genético envolvido e sem distinguir probabilidade de certeza."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quais tipos de gametas são esperados para um indivíduo Aa num locus autossômico segundo o modelo mendeliano?",
        "hint": "Cada gameta recebe um dos alelos do par.",
        "solution": "São esperados gametas com alelo A e gametas com alelo a, em proporções de 50% cada no modelo simples de segregação equilibrada. O gameta não recebe simultaneamente ambos os alelos do mesmo locus."
      },
      {
        "level": "basic",
        "prompt": "Diferencie genótipo e fenótipo com um exemplo hipotético.",
        "hint": "Um representa informação genética; o outro, característica observada.",
        "solution": "Genótipo é a combinação de alelos, como Aa. Fenótipo é a característica expressa, que sob dominância completa pode ser igual em AA e Aa. Fatores ambientais e outros genes também podem influenciar fenótipos reais."
      },
      {
        "level": "intermediate",
        "prompt": "Num cruzamento Aa×Aa, qual a proporção genotípica esperada dos descendentes?",
        "hint": "Monte as combinações AA, Aa, aA e aa.",
        "solution": "As combinações equiprováveis são AA, Aa, aA e aa. Como Aa e aA representam o mesmo genótipo, a razão esperada é 1 AA : 2 Aa : 1 aa, ou 25%, 50% e 25%."
      },
      {
        "level": "intermediate",
        "prompt": "Qual P(aa) no cruzamento Aa×aa sob segregação mendeliana simples?",
        "hint": "Um genitor produz A/a; o outro, apenas a.",
        "solution": "As possibilidades esperadas são Aa e aa, cada uma com 50% de chance. Assim P(aa)=1/2=50%. O resultado pressupõe gametas viáveis e probabilidades iguais como no modelo."
      },
      {
        "level": "advanced",
        "prompt": "Por que a chance de 25% de um genótipo não garante um descendente em quatro?",
        "hint": "Distinga probabilidade por evento e frequência em amostras pequenas.",
        "solution": "O valor 25% é uma chance por descendente sob hipóteses do modelo. Em quatro nascimentos ou sementes podem ocorrer zero, um ou vários indivíduos com esse genótipo; a proporção 1:3 é expectativa de longo prazo."
      },
      {
        "level": "advanced",
        "prompt": "Explique por que usar dominância simples para prever altura ou inteligência humanas é cientificamente inadequado.",
        "hint": "Considere múltiplos genes e ambiente.",
        "solution": "Altura e aspectos cognitivos são características complexas, influenciadas por muitos genes e fatores ambientais. Reduzi-las a um par dominante/recessivo ignora sua natureza multifatorial e não fornece previsão válida."
      }
    ],
    "everyday": {
      "context": "Uma turma cultiva plantas com uma característica hipotética controlada por um único gene. Duas plantas de genótipo Aa são cruzadas, e os estudantes querem prever a proporção de um genótipo aa nas sementes.",
      "question": "Que probabilidade o quadro de Punnett prevê e por que ela não é garantia para apenas quatro sementes?",
      "answer": "Aa×Aa fornece AA, Aa, Aa e aa, portanto P(aa)=25% sob o modelo mendeliano simples. A probabilidade vale para cada descendente; uma amostra pequena pode apresentar proporção observada diferente.",
      "connections": [
        {
          "subject": "Biologia",
          "topic": "Ciclo celular e mitose",
          "reason": "Comparar meiose e mitose permite compreender por que a formação de gametas altera a combinação de alelos enquanto a mitose normalmente conserva a ploidia."
        },
        {
          "subject": "Matemática",
          "topic": "Probabilidade condicional",
          "reason": "Os cruzamentos exigem distinguir chances de combinações genéticas e condições conhecidas, sem prometer resultados exatos em amostras pequenas."
        }
      ]
    }
  },
  {
    "subject": "História",
    "topic": "Abolição e pós-abolição",
    "objective": "Examinar a abolição da escravidão no Brasil como processo de lutas, legislação e transformações econômicas, discutindo limites sociais e cidadania no pós-1888.",
    "sections": [
      {
        "title": "Escravidão, resistência e lutas pela abolição",
        "explanation": "A escravidão no Brasil foi uma instituição construída historicamente por leis, coerção, violência, interesses econômicos e hierarquias raciais. Pessoas escravizadas não foram agentes passivos: fugas, quilombos, negociações, ações judiciais, redes de solidariedade, rebeliões e estratégias cotidianas contribuíram para enfraquecer o sistema. Ao longo do século XIX, mudanças no tráfico atlântico, pressões políticas e movimentos abolicionistas ampliaram disputas. A Lei Eusébio de Queirós, de 1850, proibiu o tráfico transatlântico de africanos escravizados para o Brasil com mecanismos de repressão mais eficazes que iniciativas anteriores, mas não acabou com a escravidão interna. É preciso distinguir interesses de grupos abolicionistas, iniciativas de pessoas escravizadas e medidas de governos, sem atribuir a liberdade à ação isolada de uma figura histórica.",
        "example": "Uma linha do tempo documentada pode relacionar 1850, proibição do tráfico atlântico com aplicação mais efetiva; 1871, Lei do Ventre Livre; 1885, Lei dos Sexagenários; e 1888, Lei Áurea. Esses marcos devem ser estudados junto a mobilizações sociais e resistências, e não como favores espontâneos.",
        "pitfall": "Reduzir a abolição a uma assinatura em 1888, apagando a luta de pessoas negras escravizadas e libertas ou confundindo proibição do tráfico com fim da escravidão."
      },
      {
        "title": "Leis graduais e a Lei Áurea de 1888",
        "explanation": "As leis abolicionistas anteriores a 1888 impuseram limites e condições à passagem para o trabalho livre. A Lei do Ventre Livre, de 1871, reconheceu formalmente como livres os filhos de mulheres escravizadas nascidos depois de sua promulgação, mas estabeleceu mecanismos de tutela e prestação de serviços que restringiam a liberdade efetiva dessas crianças. A Lei dos Sexagenários, de 1885, tratou de pessoas escravizadas a partir dos 60 anos sob condições e limites de aplicação. Em 13 de maio de 1888, a Lei Áurea extinguiu legalmente a escravidão no Brasil, sem prever um amplo programa de distribuição de terras, reparação ou integração econômica para a população liberta. A leitura histórica deve relacionar texto legal e condições materiais, distinguindo reconhecimento jurídico de igualdade social realizada.",
        "example": "Um ex-escravizado reconhecido como pessoa livre em 1888 poderia, juridicamente, deixar de estar sujeito à propriedade de terceiros. Isso não significava receber automaticamente casa, escola, terra, salário suficiente ou proteção efetiva contra discriminação; cada dimensão dependia de políticas e relações sociais.",
        "pitfall": "Afirmar que as leis graduais garantiram liberdade irrestrita a todos os abrangidos ou que a assinatura da Lei Áurea resolveu automaticamente desigualdades econômicas."
      },
      {
        "title": "Pós-abolição: trabalho, exclusões e protagonismo",
        "explanation": "Depois de 1888, o fim legal da escravidão não eliminou racismo, barreiras ao trabalho, restrições no acesso à terra, educação e direitos em condições iguais. A sociedade brasileira passou por reorganizações do mercado de trabalho, migração, imigração e relações políticas que variaram entre regiões. Pessoas negras libertas e seus descendentes criaram associações, instituições de apoio, jornais, redes familiares e formas de participação pública. Analisar o pós-abolição implica observar tanto permanências estruturais quanto iniciativas de resistência e conquista de direitos, evitando descrever ex-escravizados apenas como vítimas. Fontes como registros de trabalho, imprensa negra, correspondências e estudos historiográficos permitem examinar experiências variadas sem inventar trajetórias individuais. A história desse período ajuda a compreender debates de cidadania, memória e desigualdade na atualidade.",
        "example": "Uma pesquisa escolar pode comparar a definição legal de liberdade em 1888 com documentos históricos sobre acesso a ocupações, moradia e instrução. A comparação permite perguntar se a liberdade formal veio acompanhada de oportunidades equivalentes, sem concluir que todas as cidades viveram a mesma experiência.",
        "pitfall": "Confundir abolição jurídica com reparação integral ou reduzir a história de pessoas negras após 1888 exclusivamente à ausência de direitos, ignorando suas organizações e ações."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que a Lei Eusébio de Queirós de 1850 buscou combater e o que ela não extinguiu?",
        "hint": "Separe tráfico atlântico e escravidão no território brasileiro.",
        "solution": "A lei proibiu o tráfico transatlântico de africanos escravizados, com repressão mais efetiva. Ela não extinguiu a escravidão interna, que permaneceu legal no Brasil até 1888."
      },
      {
        "level": "basic",
        "prompt": "Em que data a escravidão foi abolida legalmente no Brasil e qual o nome da lei?",
        "hint": "Considere o marco jurídico de maio de 1888.",
        "solution": "A Lei Áurea foi assinada em 13 de maio de 1888 e extinguiu juridicamente a escravidão no Brasil. A medida deve ser relacionada a mobilizações e lutas abolicionistas anteriores."
      },
      {
        "level": "intermediate",
        "prompt": "Por que a Lei do Ventre Livre de 1871 não significou liberdade plena e imediata para todas as crianças abrangidas?",
        "hint": "Observe condições de tutela e prestação de serviços.",
        "solution": "Embora declarasse livres crianças nascidas de mulheres escravizadas após sua promulgação, a lei incluiu condições de tutela e serviços que restringiam a autonomia efetiva. O texto legal e sua aplicação devem ser analisados conjuntamente."
      },
      {
        "level": "intermediate",
        "prompt": "Cite duas formas pelas quais pessoas escravizadas participaram das lutas contra a escravidão.",
        "hint": "Considere resistências individuais e coletivas.",
        "solution": "Fugas e formação de quilombos, por exemplo, constituíram formas de resistência e organização; ações judiciais e redes de solidariedade também foram relevantes. Essas iniciativas devem integrar a explicação histórica."
      },
      {
        "level": "advanced",
        "prompt": "Explique por que a abolição de 1888 não deve ser confundida com igualdade econômica imediata.",
        "hint": "Analise a ausência de amplo programa de inclusão material.",
        "solution": "A lei extinguiu uma relação jurídica de propriedade sobre pessoas, mas não instituiu distribuição abrangente de terras ou reparação social. Racismo e desigualdades persistiram, exigindo considerar condições de trabalho, moradia e educação."
      },
      {
        "level": "advanced",
        "prompt": "Que cuidado metodológico é necessário ao usar documentos de uma única cidade para descrever o pós-abolição brasileiro?",
        "hint": "Considere variações regionais, fontes e representatividade.",
        "solution": "Experiências de trabalho, participação e discriminação variavam entre regiões e grupos. Um conjunto local de fontes permite analisar seu contexto, mas não autoriza generalizar suas conclusões ao país inteiro."
      }
    ],
    "everyday": {
      "context": "Uma turma visita um memorial sobre a abolição e encontra apenas a data de 13 de maio de 1888. O professor pergunta quem lutou pela liberdade antes da assinatura da lei e como a vida mudou depois dela.",
      "question": "Por que a data é indispensável, mas insuficiente para compreender a abolição e o pós-abolição?",
      "answer": "1888 marca o fim jurídico da escravidão, porém a liberdade foi resultado de lutas de pessoas escravizadas, libertas e movimentos abolicionistas. Depois, acesso à terra, trabalho, moradia e direitos não foi garantido automaticamente.",
      "connections": [
        {
          "subject": "História",
          "topic": "Era Vargas",
          "reason": "A comparação ajuda a separar mudanças legais e relações sociais em períodos diferentes da história do trabalho brasileiro."
        },
        {
          "subject": "Redação",
          "topic": "Repertório sociocultural produtivo",
          "reason": "Datas e processos históricos só sustentam argumentos sociais quando são contextualizados e relacionados à tese."
        }
      ]
    }
  },
  {
    "subject": "Geografia",
    "topic": "Segregação socioespacial",
    "objective": "Compreender a distribuição desigual de moradia, infraestrutura, serviços e oportunidades no espaço urbano, distinguindo localização de explicações socioeconômicas.",
    "sections": [
      {
        "title": "Espaço urbano e desigualdade de acesso",
        "explanation": "Segregação socioespacial descreve a concentração ou separação territorial de grupos e condições sociais no espaço urbano, relacionada a renda, mercados imobiliários, políticas públicas, infraestrutura e outras relações históricas. Não significa que toda periferia seja homogênea ou que morar distante do centro determine individualmente pobreza. Uma cidade pode apresentar bairros próximos fisicamente com acesso muito diferente a saneamento, transporte, parques e equipamentos culturais. O conceito exige observar padrões e processos de produção do espaço, não culpabilizar moradores por seu endereço. Indicadores territoriais ajudam a identificar diferenças, mas precisam de recorte temporal e fontes. Para o estudante, comparar percursos até escolas, hospitais ou bibliotecas é uma forma concreta de perceber como o espaço interfere em oportunidades.",
        "example": "Num município hipotético, um bairro está a 2 km de uma unidade de atendimento, mas possui poucas opções de transporte; outro, a 5 km, dispõe de várias conexões. A distância em linha reta não determina por si só o tempo de acesso e tampouco resolve a análise das condições sociais de cada área.",
        "pitfall": "Assumir que endereço define capacidades pessoais ou usar mapas de renda para atribuir características morais aos moradores de cada bairro."
      },
      {
        "title": "Deslocamento, infraestrutura e indicadores",
        "explanation": "A segregação pode ser estudada pela distribuição de equipamentos e redes urbanas: escolas, unidades de saúde, postos de trabalho, vias de circulação, saneamento e áreas verdes. Para analisar mobilidade, considere tempo de viagem, frequência de transporte, custo, acessibilidade e segurança, e não somente quilômetros. Mapas temáticos permitem relacionar dados territoriais, mas correlação espacial não demonstra causalidade automática: dois fenômenos concentrados na mesma área podem ter causas distintas. É preciso distinguir acesso potencial de uso efetivo de um serviço; haver biblioteca no bairro não prova que todas as famílias consigam frequentá-la em seu horário de funcionamento. A escala também importa: médias municipais podem ocultar diferenças grandes entre bairros e setores censitários.",
        "example": "Uma pesquisa didática fictícia apresenta trajetos de 15 e 45 minutos para duas pessoas que percorrem distâncias semelhantes até uma escola. Diferenças na frequência dos ônibus podem explicar parte do resultado. Ainda seria necessário conferir horários, condições de tráfego e trajetos antes de formular uma política.",
        "pitfall": "Interpretar proximidade geográfica como garantia de acesso igual ou inferir causas sociais a partir de um único mapa sem dados complementares."
      },
      {
        "title": "Planejamento urbano e ação pública",
        "explanation": "Políticas de mobilidade, habitação e uso do solo podem reduzir ou aprofundar desigualdades de acesso. O planejamento territorial deve considerar localização de escolas, emprego, saúde, moradias e transporte, além da participação dos grupos diretamente afetados. Medidas como corredores de ônibus, adaptação de calçadas, abertura de equipamentos públicos e revisão de rotas têm impactos que dependem de recursos, prioridades e execução. Não existe solução única para cidades com tamanhos, redes e histórias diferentes. Ao propor intervenção, separe diagnóstico, mecanismo e objetivo mensurável, evitando culpar habitantes de bairros marginalizados. Uma análise mais completa pode combinar observação de campo, dados públicos identificados e relatos de moradores com diferentes experiências.",
        "example": "Se estudantes demoram muito para chegar a uma biblioteca que fecha cedo, ampliar seu horário de atendimento e revisar ligações de transporte podem ser medidas complementares, desde que haja demanda e viabilidade. O objetivo é reduzir a barreira de acesso, não garantir uso universal por decreto.",
        "pitfall": "Prometer que uma obra isolada elimina toda segregação ou tratar desigualdade de infraestrutura como escolha individual dos moradores."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Defina segregação socioespacial em linguagem própria sem associá-la a defeitos individuais de moradores.",
        "hint": "Foque na distribuição de grupos, serviços e oportunidades pelo território.",
        "solution": "É a distribuição desigual ou separação territorial de condições sociais e grupos no espaço urbano, produzida por processos históricos, econômicos e políticos. Não descreve o valor ou a capacidade das pessoas."
      },
      {
        "level": "basic",
        "prompt": "Cite duas dimensões de acesso urbano que vão além da distância em quilômetros.",
        "hint": "Considere custo, frequência e acessibilidade.",
        "solution": "Frequência e preço do transporte, por exemplo, podem determinar se uma escola é acessível. Segurança e acessibilidade física também influenciam o uso de equipamentos públicos."
      },
      {
        "level": "intermediate",
        "prompt": "Dois bairros estão a 5 km do centro, mas seus moradores levam 20 e 60 minutos para chegar. Que dado deve ser investigado?",
        "hint": "Avalie rede e intervalos do transporte.",
        "solution": "Deve-se comparar rotas, frequência de ônibus, tempo de espera, trânsito e modos disponíveis. Distância semelhante não implica a mesma experiência de mobilidade urbana."
      },
      {
        "level": "intermediate",
        "prompt": "Por que a média de acesso a saneamento de uma cidade pode ocultar desigualdades?",
        "hint": "Pense na distribuição espacial dos serviços.",
        "solution": "A média agrega regiões que podem ter cobertura muito diferente. Mapas por bairro ou setor e dados temporalmente comparáveis revelam desigualdades que o valor único esconde."
      },
      {
        "level": "advanced",
        "prompt": "Uma pessoa conclui que bairros com poucos parques têm moradores que não se interessam por lazer. Avalie a inferência.",
        "hint": "Diferencie infraestrutura disponível de preferências individuais.",
        "solution": "A inferência não decorre do mapa. A escassez de parques pode resultar de decisões urbanas e disponibilidade de terrenos, sem demonstrar falta de interesse dos moradores por espaços de lazer."
      },
      {
        "level": "advanced",
        "prompt": "Proponha uma medida municipal plausível para reduzir dificuldades de acesso a bibliotecas.",
        "hint": "Conecte diagnóstico de horários e transporte a um responsável e meio.",
        "solution": "Uma secretaria municipal pode avaliar horários e trajetos com consulta aos usuários e ajustar atendimento ou conexões de transporte quando viável. O sucesso deve ser medido por acesso efetivo, não apenas anúncios."
      }
    ],
    "everyday": {
      "context": "Dois estudantes moram a cinco quilômetros da escola. Um chega em vinte minutos com linha direta; outro leva uma hora porque precisa esperar duas conexões. O mapa mostra distâncias parecidas, mas trajetos distintos.",
      "question": "Por que a distância sozinha não explica o acesso à educação e qual conceito geográfico ajuda a interpretar essa diferença?",
      "answer": "Frequência, preço, rotas e infraestrutura influenciam oportunidades de acesso. A segregação socioespacial investiga como serviços e condições de mobilidade se distribuem desigualmente, sem atribuir características negativas aos moradores.",
      "connections": [
        {
          "subject": "Geografia",
          "topic": "Coordenadas geográficas",
          "reason": "Coordenadas localizam pontos, mas não informam sozinhas a qualidade das redes de transporte entre eles."
        },
        {
          "subject": "Redação",
          "topic": "Proposta de intervenção: agente, ação, meio, finalidade e detalhamento",
          "reason": "Um diagnóstico de acesso urbano pode fundamentar uma proposta específica com responsáveis, meios e avaliação de resultados."
        }
      ]
    }
  },
  {
    "subject": "Sociologia",
    "topic": "Trabalho e divisão social",
    "objective": "Analisar especialização de atividades produtivas e sociais, comparando funções, interdependência, organização do trabalho e desigualdade em diferentes contextos.",
    "sections": [
      {
        "title": "Divisão do trabalho e interdependência",
        "explanation": "Divisão do trabalho é a distribuição de tarefas e funções entre pessoas, grupos ou instituições. Em uma padaria, por exemplo, algumas atividades envolvem produção, outras compras, atendimento, limpeza e transporte, mas um único trabalhador pode realizar várias funções. A especialização pode elevar produtividade, acumular conhecimentos técnicos e criar interdependência entre pessoas. Ao mesmo tempo, não é neutra: tarefas são distribuídas em condições históricas e relações de poder, com diferenças de remuneração, prestígio e proteção. É importante distinguir divisão técnica do trabalho dentro de uma organização e divisão social do trabalho, relacionada à repartição mais ampla de atividades na sociedade. Descrever funções não basta para explicar se as relações são justas ou como os benefícios são distribuídos.",
        "example": "Uma refeição escolar depende de agricultores, transporte, compra pública, cozinheiras, equipe de limpeza e organização de horários. Nenhuma etapa isolada explica o serviço inteiro; o exemplo evidencia interdependência, que não significa salários ou reconhecimento equivalentes.",
        "pitfall": "Afirmar que divisão do trabalho é apenas distribuição eficiente de tarefas, desconsiderando instituições e desigualdades, ou supor que toda especialização implica colaboração sem conflitos."
      },
      {
        "title": "Durkheim, solidariedade e organização social",
        "explanation": "Émile Durkheim analisou a divisão do trabalho social como fenômeno ligado à diferenciação das funções e às formas de solidariedade. A solidariedade mecânica refere-se, como tipo analítico, à coesão associada a semelhanças compartilhadas; a orgânica, à interdependência criada por funções diferenciadas. Os termos não descrevem máquinas e organismos literalmente, e uma sociedade real pode apresentar elementos variados. O desenvolvimento de especialização não garante ausência de conflitos; Durkheim também discutiu formas anormais da divisão do trabalho. Comparar essa abordagem com a organização observável de hospitais, escolas ou transportes ajuda a distinguir interdependência funcional de distribuição equitativa de poder e recursos.",
        "example": "Numa equipe de saúde, diferentes profissionais podem desempenhar tarefas interdependentes para prestar atendimento. A complementaridade de funções ajuda a ilustrar solidariedade orgânica, mas não comprova que a instituição seja livre de hierarquias ou conflitos.",
        "pitfall": "Confundir solidariedade orgânica com compaixão individual ou julgar que pessoas especializadas sempre recebem reconhecimento proporcional à sua contribuição."
      },
      {
        "title": "História do trabalho, desigualdade e tecnologia",
        "explanation": "As relações de trabalho mudaram com a industrialização, legislação social, organização sindical e tecnologias. A divisão das tarefas pode se intensificar com plataformas digitais que distribuem pedidos e organizam serviços por algoritmos, mas os efeitos sobre remuneração e proteção dependem de regras, mercado e negociação. Para analisar um emprego, observe jornada, previsibilidade de renda, autonomia, segurança e representação coletiva, sem supor que uma categoria possua experiência uniforme. A comparação histórica exige cuidado: oficinas artesanais, fábricas de diferentes épocas e serviços por aplicativo não são equivalentes, embora permitam investigar especialização, controle e remuneração. Em estudos, diferencie exemplos hipotéticos de levantamentos empíricos com fonte e período identificados.",
        "example": "Um entregador pode receber pedidos por plataforma enquanto o estabelecimento prepara a comida e outra equipe administra pagamentos. A tecnologia reorganiza a coordenação de tarefas; isso não informa automaticamente as condições de trabalho sem dados sobre contratos, custos e proteção.",
        "pitfall": "Tratar tecnologia como causa única e inevitável de precarização ou melhoria e afirmar que todo trabalhador de aplicativos possui a mesma condição."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Diferencie divisão técnica de tarefas numa empresa e divisão social do trabalho.",
        "hint": "Uma é interna a uma atividade organizada; a outra, mais ampla na sociedade.",
        "solution": "A divisão técnica distribui etapas de produção ou serviço dentro de uma organização. A divisão social descreve a repartição mais ampla de funções, ocupações e atividades interdependentes na sociedade."
      },
      {
        "level": "basic",
        "prompt": "Em uma escola, explique por que professores, limpeza e alimentação exemplificam interdependência.",
        "hint": "Nenhuma função, isolada, mantém todas as atividades.",
        "solution": "O funcionamento da escola depende de tarefas diferentes e coordenadas. O exemplo mostra complementaridade entre funções, sem indicar que todas possuam o mesmo salário ou reconhecimento institucional."
      },
      {
        "level": "intermediate",
        "prompt": "O que Durkheim chamou de solidariedade orgânica e como ela se relaciona com especialização?",
        "hint": "Pense em funções diferentes que dependem umas das outras.",
        "solution": "A solidariedade orgânica está ligada à interdependência entre funções diferenciadas em sociedades complexas. A especialização pode aproximar pessoas por necessidade mútua, mas não elimina conflitos sociais."
      },
      {
        "level": "intermediate",
        "prompt": "Por que uma equipe muito especializada não é necessariamente uma equipe sem desigualdade?",
        "hint": "Compare tarefas e poder de decisão.",
        "solution": "A especialização organiza funções, porém decisões, remuneração e prestígio podem continuar desigualmente distribuídos. A análise precisa considerar instituições, contratos e relações de poder."
      },
      {
        "level": "advanced",
        "prompt": "Que fatores deveriam ser examinados para avaliar trabalho mediado por plataformas digitais sem generalização?",
        "hint": "Considere jornada, custos, proteção e escolhas individuais.",
        "solution": "É necessário observar remuneração líquida, horas, segurança, autonomia, regras contratuais e diversidade de experiências. Uma plataforma não define sozinha todas as condições de seus trabalhadores."
      },
      {
        "level": "advanced",
        "prompt": "Compare divisão do trabalho numa oficina artesanal e numa fábrica, evitando afirmar uma regra universal.",
        "hint": "Pense em escala e fragmentação sem transformar tendências em leis obrigatórias.",
        "solution": "Uma oficina pode concentrar várias etapas por trabalhador, enquanto fábricas frequentemente fragmentam tarefas e ampliam coordenação. Esses são padrões possíveis que variam por setor, tecnologia e período histórico."
      }
    ],
    "everyday": {
      "context": "Na merenda escolar, o alimento começa na produção agrícola, é transportado, comprado, preparado, servido e recolhido. Um estudante observa que muitos profissionais participam, mas nem todos possuem as mesmas condições de trabalho.",
      "question": "Como explicar a interdependência dessas atividades sem concluir que divisão de tarefas garante igualdade?",
      "answer": "A divisão técnica e social do trabalho organiza funções complementares, como cultivo, logística, cozinha e atendimento. A colaboração não determina automaticamente remuneração, poder ou proteção iguais; essas condições precisam de análise específica.",
      "connections": [
        {
          "subject": "Sociologia",
          "topic": "Durkheim: fato social e solidariedade",
          "reason": "A interdependência entre ocupações permite relacionar especialização à solidariedade orgânica como conceito de análise social."
        },
        {
          "subject": "História",
          "topic": "Revolução Industrial",
          "reason": "O desenvolvimento de fábricas e novas formas de coordenação produtiva ajuda a contextualizar mudanças na divisão das tarefas."
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
