import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Kognos: aulas originais, não oficiais e sem homologação docente. */
export const provaoDepthBatch34LanguageGenetics:readonly DeepTopicSpec[]=[
  {
    "subject": "Português",
    "topicStart": "Elementos estruturais e processos de formação de palavras",
    "objective": "Distinguir radical, afixos, vogal temática e desinências; reconhecer derivação e composição em palavras reais, justificando alterações semânticas e formais.",
    "prerequisites": [
      "Classes de palavras e funções sintáticas",
      "Distinção entre grafemas e sons",
      "Significado lexical e contexto"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Estrutura interna da palavra e unidades de sentido",
        "explanation": "Morfema é uma unidade mínima de organização linguística com função lexical ou gramatical; nem toda sequência de letras é um morfema isolável. Em 'infeliz', identifica-se o prefixo 'in-' com sentido de negação e a base 'feliz'. Em 'felizmente', o sufixo '-mente' forma um advérbio a partir do adjetivo. Já em 'cantávamos', uma análise escolar distingue 'cant-' (radical), '-a-' (vogal temática da primeira conjugação), '-va-' (marca de pretérito imperfeito do indicativo) e '-mos' (marca de primeira pessoa do plural). O radical carrega o núcleo lexical, enquanto desinências expressam categorias como número, pessoa ou tempo. Atenção: segmentação não pode ser feita por semelhança visual apenas; a palavra 'interesse' não contém necessariamente um prefixo produtivo 'inter-' com o mesmo funcionamento de 'intermunicipal'. Além disso, formas irregulares e mudanças históricas exigem análise lexical contextualizada, não uma soma mecânica de pedacinhos gráficos.",
        "example": "Resolva 'cantávamos': 1) reconheça o verbo 'cantar'; 2) separe cant- + -a- + -va- + -mos; 3) conclua que a forma situa uma ação habitual ou em curso no passado, atribuída a 'nós'. Compare 'cantamos': a ausência de '-va-' não permite a mesma leitura temporal sem contexto.",
        "pitfall": "Não confunda radical com primeira sílaba nem trate qualquer letra repetida como afixo significativo.",
        "steps": [
          "Defina o conceito e destaque quais dados aparecem no enunciado.",
          "Aplique o procedimento ao caso resolvido, conferindo cada inferência.",
          "Compare a resposta com um erro comum e com as condições de validade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Derivação, composição e parassíntese",
        "explanation": "Na derivação prefixal, um elemento anterior modifica a base: 'reler' = re- + ler. Na derivação sufixal, uma unidade posterior acrescenta função ou sentido: 'felizmente' = feliz + -mente. Uma palavra pode receber ambos os afixos por etapas independentes; 'infelizmente' admite 'infeliz' e 'felizmente', por isso não precisa ser classificada como parassintética. A parassíntese pressupõe incorporação conjunta de prefixo e sufixo para formar a palavra, como 'anoitecer' a partir de 'noite', quando as formas intermediárias correspondentes não funcionam como palavras independentes no mesmo sentido. Composição por justaposição reúne bases reconhecíveis sem alteração fonética importante, como 'guarda-chuva'; por aglutinação, há mudança na forma das bases, como 'planalto', tradicionalmente analisado a partir de plano + alto. A classificação é histórica e morfológica; o hífen, sozinho, não decide o processo. Antes de rotular, teste se as bases existem e se ocorreu alteração estrutural relevante.",
        "example": "Compare 'guarda-chuva' e 'planalto': identifique as bases guarda + chuva e plano + alto; observe manutenção das formas na primeira e a redução de plano na segunda. Conclua justaposição no primeiro caso e aglutinação no segundo; não use apenas o hífen como critério.",
        "pitfall": "Não confunda prefixação e sufixação sucessivas com parassíntese; verifique a existência das formas intermediárias.",
        "steps": [
          "Defina o conceito e destaque quais dados aparecem no enunciado.",
          "Aplique o procedimento ao caso resolvido, conferindo cada inferência.",
          "Compare a resposta com um erro comum e com as condições de validade."
        ]
      },
      {
        "level": "advanced",
        "title": "Derivação imprópria, regressiva e interpretação em textos",
        "explanation": "A derivação imprópria, também chamada conversão, ocorre quando a palavra muda de classe pelo emprego sintático sem acréscimo de afixo: em 'O jantar terminou cedo', 'jantar' atua como substantivo, embora também exista como verbo. A derivação regressiva pode produzir nomes relacionados a verbos, como 'pesca' a partir de 'pescar', segundo a análise escolar tradicional; a história de cada família lexical pode envolver discussões etimológicas. Na comunicação digital surgem neologismos por processos produtivos, como 'viralizar', formado por uma base adjetiva e o sufixo verbal '-izar'. A leitura crítica exige distinguir formação de palavras de metáfora e de empréstimos linguísticos: uma expressão nova não depende sempre de um morfema novo. Em questões de vestibular, observe a palavra completa, sua classe no enunciado, as bases documentadas e o valor semântico do afixo. Prefixos podem mudar de sentido conforme a base e o contexto; o mesmo segmento gráfico não autoriza inferir um processo morfológico sem evidências.",
        "example": "Na frase 'O jantar foi preparado cedo', teste 'jantar': vem depois do artigo 'o' e recebe predicação nominal, logo é substantivo. Compare com 'Vamos jantar cedo', em que a mesma forma funciona como verbo. Não houve anexação de afixo, então a análise é conversão, não sufixação.",
        "pitfall": "Não deduza derivação apenas da ortografia: mudança de classe, uso contextual e história lexical também importam.",
        "steps": [
          "Defina o conceito e destaque quais dados aparecem no enunciado.",
          "Aplique o procedimento ao caso resolvido, conferindo cada inferência.",
          "Compare a resposta com um erro comum e com as condições de validade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em 'infeliz', a formação da palavra ocorre principalmente por:",
        "options": [
          "Composição por aglutinação",
          "Derivação prefixal",
          "Derivação regressiva",
          "Conversão"
        ],
        "correctIndex": 1,
        "hint": "Identifique o conceito-chave e teste as alternativas usando a explicação do capítulo.",
        "solution": "O prefixo negativo in- se une à base feliz; não há combinação de duas palavras autônomas nem mudança de classe sem afixo."
      },
      {
        "level": "intermediate",
        "prompt": "Qual par representa, respectivamente, justaposição e aglutinação?",
        "options": [
          "Guarda-chuva e planalto",
          "Planalto e guarda-chuva",
          "Infeliz e infelizmente",
          "Felizmente e releitura"
        ],
        "correctIndex": 0,
        "hint": "Identifique o conceito-chave e teste as alternativas usando a explicação do capítulo.",
        "solution": "Guarda-chuva mantém reconhecíveis as bases; planalto apresenta alteração formal da combinação de plano e alto."
      },
      {
        "level": "advanced",
        "prompt": "Na frase 'O jantar começou cedo', a palavra 'jantar' exemplifica:",
        "options": [
          "Parassíntese",
          "Composição",
          "Conversão ou derivação imprópria",
          "Derivação prefixal"
        ],
        "correctIndex": 2,
        "hint": "Identifique o conceito-chave e teste as alternativas usando a explicação do capítulo.",
        "solution": "A forma verbal é usada como substantivo pelo contexto e pelo artigo, sem acréscimo de afixo derivacional."
      }
    ]
  },
  {
    "subject": "Português",
    "topicStart": "Flexão nominal e flexão verbal (expressão de tempo, modo, aspecto e voz; correlação de tempos e…",
    "objective": "Analisar flexões de número e gênero, pessoa, tempo, modo, aspecto e voz verbal, aplicando correlação temporal e transformação ativa/passiva.",
    "prerequisites": [
      "Categorias de substantivo, adjetivo e verbo",
      "Concordância em sintagmas e orações",
      "Reconhecimento de sujeito e complemento"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Flexão nominal e informação gramatical",
        "explanation": "Flexão nominal modifica formas de substantivos, adjetivos e outras classes para marcar categorias como número e, quando aplicável, gênero: 'menino estudioso' e 'meninos estudiosos' apresentam mudança de singular para plural. Nem todo substantivo varia em gênero por uma simples troca de vogal; 'a pessoa' tem gênero gramatical feminino independentemente da identidade de quem é designado. Alguns plurais exigem mudanças de escrita, como 'animal' → 'animais', e outros nomes são invariáveis em certos contextos. É importante distinguir flexão de derivação: 'casa' e 'casas' são formas do mesmo item lexical, enquanto 'caseiro' resulta de derivação e designa outro conceito. Os adjetivos podem expressar grau, mas nem toda intensificação é uma flexão morfológica simples; 'muito feliz' utiliza expressão sintática. Em análise textual, relações de concordância mostram quais termos caracterizam quais núcleos. O contexto decide se uma palavra que apresenta formas semelhantes cumpre função de nome, atributo ou verbo.",
        "example": "Passe 'A aluna dedicada escreveu' para plural: 1) altere o núcleo 'aluna' para 'alunas'; 2) ajuste o artigo para 'As' e o adjetivo para 'dedicadas'; 3) flexione o verbo para 'escreveram'. Resultado: 'As alunas dedicadas escreveram', mantendo a concordância de toda a oração.",
        "pitfall": "Não confunda gênero gramatical com sexo biológico e não altere apenas o substantivo, esquecendo seus determinantes.",
        "steps": [
          "Defina o conceito e destaque quais dados aparecem no enunciado.",
          "Aplique o procedimento ao caso resolvido, conferindo cada inferência.",
          "Compare a resposta com um erro comum e com as condições de validade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Tempo, modo e aspecto verbal em situações concretas",
        "explanation": "Tempo verbal posiciona eventos em relação à enunciação ou a outro marco temporal; modo expressa, entre outros valores, a atitude enunciativa e a relação com hipótese, certeza, desejo ou ordem. 'Ela estuda' está no presente do indicativo; 'Se ela estudasse, entenderia' combina pretérito imperfeito do subjuntivo com futuro do pretérito para formular condição hipotética. Em 'Quando ela chegar, começaremos', o futuro do subjuntivo orienta evento ainda não ocorrido em relação ao momento da fala e o futuro do presente projeta a consequência. Aspecto refere-se ao modo de apresentação interna do evento: 'estudou' pode apresentar uma ação como concluída, enquanto 'estava estudando' enfatiza desenvolvimento no passado. O tempo de um verbo não permite inferir sozinho que o evento efetivamente aconteceu: 'Se eu ganhasse...' não é relato de vitória. Em diferentes gêneros e variantes do português, tempos podem adquirir efeitos discursivos, como presente histórico em narrativas. Analisar frases exige reconhecer tanto a forma verbal quanto a função contextual, sem transformar regras escolares em equivalências automáticas.",
        "example": "Reescreva 'Se eu estudar, aprenderei' para hipótese menos provável: 1) substitua 'estudar' por 'estudasse' (imperfeito do subjuntivo); 2) use 'aprenderia' (futuro do pretérito); 3) obtenha 'Se eu estudasse, aprenderia'. A mudança altera o valor de hipótese, não apenas a cronologia.",
        "pitfall": "Não interprete futuro do pretérito como evento garantido no futuro; a correlação com o subjuntivo pode sinalizar condição.",
        "steps": [
          "Defina o conceito e destaque quais dados aparecem no enunciado.",
          "Aplique o procedimento ao caso resolvido, conferindo cada inferência.",
          "Compare a resposta com um erro comum e com as condições de validade."
        ]
      },
      {
        "level": "advanced",
        "title": "Voz verbal, concordância e leitura crítica",
        "explanation": "Na voz ativa, o sujeito tende a ocupar o papel de agente em construções transitivas como 'A equipe revisou o relatório'. Na passiva analítica, 'O relatório foi revisado pela equipe', o paciente ocupa a posição de sujeito, e o antigo agente pode aparecer introduzido por 'por'. A passiva analítica emprega verbo auxiliar 'ser' e particípio, com concordância adequada ao sujeito paciente: 'As propostas foram aprovadas'. Nem todo verbo aceita passivização natural; verbos intransitivos, como 'chegar' em 'Ela chegou', não oferecem objeto direto que possa ser promovido a sujeito passivo. Construções reflexivas, como 'Ela se penteou', descrevem relação diferente da passiva. Na comparação entre duas notícias, a escolha de omitir o agente pode reduzir sua visibilidade discursiva; isso não prova, por si só, intenção manipuladora, mas pede análise de autoria, gênero e evidências. Para preservar sentido e tempo em transformações, identifique transitividade, paciente e flexão verbal original antes de reorganizar a oração.",
        "example": "Transforme 'Os técnicos avaliaram as propostas': 1) objeto direto = 'as propostas'; 2) passe-o a sujeito paciente; 3) concorde auxiliar e particípio: 'As propostas foram avaliadas pelos técnicos'. A flexão plural é exigida pelo novo sujeito e o passado continua expresso.",
        "pitfall": "Não tente aplicar voz passiva a qualquer verbo; verifique se existe objeto direto em estrutura transitiva passivizável.",
        "steps": [
          "Defina o conceito e destaque quais dados aparecem no enunciado.",
          "Aplique o procedimento ao caso resolvido, conferindo cada inferência.",
          "Compare a resposta com um erro comum e com as condições de validade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual transformação preserva a concordância de 'A aluna dedicada escreveu' no plural?",
        "options": [
          "As aluna dedicadas escreveu",
          "As alunas dedicadas escreveram",
          "A alunas dedicada escreveram",
          "As alunas dedicada escreve"
        ],
        "correctIndex": 1,
        "hint": "Identifique o conceito-chave e teste as alternativas usando a explicação do capítulo.",
        "solution": "Artigo, substantivo e adjetivo passam ao plural, e o verbo concorda com o novo sujeito: escreveram."
      },
      {
        "level": "intermediate",
        "prompt": "A correlação adequada para condição hipotética é:",
        "options": [
          "Se eu estudasse, aprenderia",
          "Se eu estudava, aprenderei",
          "Se eu estudar, aprendia ontem",
          "Se eu estudo, aprendera"
        ],
        "correctIndex": 0,
        "hint": "Identifique o conceito-chave e teste as alternativas usando a explicação do capítulo.",
        "solution": "O imperfeito do subjuntivo 'estudasse' articula-se ao futuro do pretérito 'aprenderia' numa hipótese."
      },
      {
        "level": "advanced",
        "prompt": "A voz passiva de 'Os técnicos avaliaram as propostas' é:",
        "options": [
          "Os técnicos foram avaliados pelas propostas",
          "As propostas avaliaram os técnicos",
          "As propostas foram avaliadas pelos técnicos",
          "Avaliou-se os técnicos pelas propostas"
        ],
        "correctIndex": 2,
        "hint": "Identifique o conceito-chave e teste as alternativas usando a explicação do capítulo.",
        "solution": "O objeto direto 'as propostas' torna-se sujeito paciente, e auxiliar e particípio concordam no plural feminino."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Ausência de dominância, alelos letais e alelos múltiplos (polialelia)",
    "objective": "Distinguir dominância incompleta, codominância, alelos letais e polialelia usando cruzamentos com probabilidades condicionais corretas.",
    "prerequisites": [
      "Meiose e segregação alélica",
      "Genótipos, fenótipos e quadros de Punnett",
      "Leis de Mendel e probabilidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Dominância incompleta e codominância",
        "explanation": "Em organismos diploides, um indivíduo geralmente possui dois alelos por locus, um em cada cromossomo homólogo, ainda que existam muitas variantes desse gene na população. Na dominância completa, um heterozigoto manifesta um fenótipo semelhante ao de um dos homozigotos para o caráter considerado. Na dominância incompleta, o heterozigoto apresenta fenótipo distinto e frequentemente intermediário, como flores vermelhas RR e brancas rr que produzem flores rosas Rr em um modelo didático. Na codominância, produtos ou efeitos de ambos os alelos podem ser detectados no heterozigoto, sem que um oculte inteiramente o outro; o fenótipo AB no sistema ABO exemplifica a expressão de antígenos A e B. 'Ausência de dominância' não significa ausência de expressão gênica: significa que a relação genótipo–fenótipo não segue o padrão dominante/recessivo simples. Os resultados dependem do locus estudado e do modo de medir o caráter, e não se pode generalizar uma mesma relação de dominância a todas as características do indivíduo.",
        "example": "Cruze duas flores rosas Rr × Rr, com dominância incompleta: os gametas possíveis de cada genitor são R e r. Quadro RR, Rr, Rr, rr: 1/4 vermelhas, 1/2 rosas e 1/4 brancas. A proporção fenotípica é 1:2:1, diferente do 3:1 da dominância completa.",
        "pitfall": "Não use a proporção 3:1 automaticamente quando o heterozigoto apresenta fenótipo próprio.",
        "steps": [
          "Defina o conceito e destaque quais dados aparecem no enunciado.",
          "Aplique o procedimento ao caso resolvido, conferindo cada inferência.",
          "Compare a resposta com um erro comum e com as condições de validade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Alelos letais e probabilidade entre sobreviventes",
        "explanation": "Um alelo pode interferir na viabilidade em certos genótipos e ambientes. No exemplo clássico de pelagem amarela em camundongos, um alelo que causa pelagem amarela nos heterozigotos pode ser letal na homozigose. Representando o alelo por Y e o outro por y, o cruzamento Yy × Yy produz, na concepção, proporções teóricas de 1/4 YY, 1/2 Yy e 1/4 yy. Se YY for inviável antes do nascimento, entre os nascidos vivos esperam-se 2/3 Yy amarelos e 1/3 yy não amarelos. Essa probabilidade é condicional à sobrevivência: os 25% inviáveis não podem ser incluídos no denominador de filhotes vivos. A letalidade pode ocorrer em estágios distintos e não implica que qualquer indivíduo portador morrerá; é preciso especificar genótipo, penetrância e estágio biológico. Em situações reais, número de descendentes e acaso de amostragem geram desvios dos valores esperados, especialmente em ninhadas pequenas.",
        "example": "Em 120 zigotos hipotéticos Yy × Yy, a expectativa mendeliana é 30 YY, 60 Yy e 30 yy. Se os 30 YY não sobrevivem, restam 90 nascidos: 60/90=2/3 amarelos e 30/90=1/3 não amarelos. A proporção observada é expectativa teórica, não garantia numérica.",
        "pitfall": "Não confunda o 1/4 de zigotos homozigotos inviáveis com 1/4 dos filhotes que nasceram vivos.",
        "steps": [
          "Defina o conceito e destaque quais dados aparecem no enunciado.",
          "Aplique o procedimento ao caso resolvido, conferindo cada inferência.",
          "Compare a resposta com um erro comum e com as condições de validade."
        ]
      },
      {
        "level": "advanced",
        "title": "Polialelia em populações e probabilidades combinadas",
        "explanation": "Polialelia significa que há mais de dois alelos possíveis para um locus na população, não que um indivíduo diploide tenha três alelos no mesmo par de cromossomos. No sistema ABO, há alelos Iᴬ, Iᴮ e i; Iᴬ e Iᴮ são codominantes entre si, enquanto ambos produzem fenótipo dominante em relação a i no padrão escolar. O cruzamento Iᴬi × Iᴮi gera quatro combinações equiprováveis: IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B) e ii (O). Cada fenótipo tem probabilidade teórica de 1/4 nesse cruzamento específico; não se trata da distribuição da população. A análise deve sempre separar 'quantidade de variantes possíveis no conjunto dos indivíduos' de 'alelos presentes em uma pessoa'. Situações com mais de um locus, influência ambiental ou interação entre genes podem modificar previsões fenotípicas. Os sistemas ABO e Rh envolvem mecanismos genéticos distintos e não devem ser combinados sem dados adicionais.",
        "example": "Pais Iᴬi e Iᴮi: gametas do primeiro Iᴬ ou i, do segundo Iᴮ ou i. Multiplique as probabilidades 1/2 × 1/2=1/4 para cada quadrante: AB, A, B e O. O resultado não autoriza afirmar que a população tenha 25% de cada grupo sanguíneo.",
        "pitfall": "Não conclua que cada pessoa tem três alelos do sistema ABO; o conjunto de três variantes pertence à população.",
        "steps": [
          "Defina o conceito e destaque quais dados aparecem no enunciado.",
          "Aplique o procedimento ao caso resolvido, conferindo cada inferência.",
          "Compare a resposta com um erro comum e com as condições de validade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "No cruzamento Rr × Rr com dominância incompleta, a proporção fenotípica esperada é:",
        "options": [
          "3:1",
          "1:2:1",
          "1:1",
          "9:3:3:1"
        ],
        "correctIndex": 1,
        "hint": "Identifique o conceito-chave e teste as alternativas usando a explicação do capítulo.",
        "solution": "Os genótipos RR, Rr e rr produzem fenótipos distinguíveis; o heterozigoto aparece em metade dos descendentes."
      },
      {
        "level": "intermediate",
        "prompt": "Se YY é letal e Yy × Yy, a fração esperada de amarelos entre os nascidos vivos é:",
        "options": [
          "1/4",
          "1/2",
          "2/3",
          "3/4"
        ],
        "correctIndex": 2,
        "hint": "Identifique o conceito-chave e teste as alternativas usando a explicação do capítulo.",
        "solution": "Descontado o 1/4 YY inviável, o grupo Yy representa 1/2 dos zigotos e 2/3 dos sobreviventes."
      },
      {
        "level": "advanced",
        "prompt": "Para Iᴬi × Iᴮi, a probabilidade de um descendente com fenótipo O é:",
        "options": [
          "0%",
          "25%",
          "50%",
          "75%"
        ],
        "correctIndex": 1,
        "hint": "Identifique o conceito-chave e teste as alternativas usando a explicação do capítulo.",
        "solution": "A combinação ii ocorre quando ambos os pais fornecem i: 1/2 × 1/2 = 1/4, ou 25%."
      }
    ]
  }
];
