import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Additional authorial modules: mathematics, world history, geography. */
export const provaoDepthBatch02MathHumanities:readonly DeepTopicSpec[]=[
  {
    "subject": "Matemática",
    "topicStart": "Função exponencial e função logarítmica",
    "objective": "Interpretar potências reais, crescimento e decaimento exponencial, logaritmos como inversas de potências, gráficos, domínio, equações e aplicações com taxas e mudanças de escala.",
    "prerequisites": [
      "Potências e raízes",
      "Equações",
      "Plano cartesiano"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Da potência à função exponencial",
        "explanation": "Uma função exponencial da forma f(x)=aˣ, para base a>0 e a≠1, associa ao expoente x uma potência positiva. Se a>1, a função é crescente; se 0<a<1, é decrescente. O gráfico cruza o eixo vertical em (0,1) e não assume valores nulos ou negativos no modelo puro. Essa diferença de comportamento está ligada à base e não ao sinal do expoente.\n\nCrescimento exponencial aparece quando o acréscimo é proporcional ao valor existente em intervalos iguais. Um capital multiplicado por 1,10 a cada período segue C(n)=C₀(1,10)ⁿ, sob taxa constante e capitalização composta. Isso é diferente de um acréscimo fixo de dez unidades por período, que geraria crescimento linear. O mesmo padrão matemático pode representar decaimento por fator 0,8 a cada intervalo.\n\nPara trabalhar com a função, identifique valor inicial, fator multiplicativo e número de períodos. Uma base menor que 1 não torna a função negativa: (1/2)ˣ é sempre positiva, embora diminua quando x cresce. Ao representar valores para x=−1,0,1, compare a progressão e a curvatura observadas.",
        "example": "Uma população modelada por P(n)=200×1,5ⁿ, em períodos iguais, começa com 200. Após um período: 300; após dois: 450. O aumento do primeiro para o segundo período é 150, maior que os 100 do primeiro, pois cada crescimento corresponde a 50% do valor anterior.",
        "pitfall": "Não confunda multiplicar por 1,5 a cada etapa com adicionar 1,5 unidades. A função exponencial descreve multiplicação sucessiva, enquanto a função afim descreve incrementos absolutos constantes.",
        "steps": [
          "Identifique valor inicial e fator a, verificando se a>0 e a≠1.",
          "Substitua valores simples do expoente para visualizar crescimento ou decaimento.",
          "Diferencie taxa relativa constante de aumento absoluto constante."
        ]
      },
      {
        "level": "intermediate",
        "title": "Logaritmo: encontrar o expoente desconhecido",
        "explanation": "O logaritmo de b na base a é o expoente necessário para obter b: logₐ(b)=x significa aˣ=b, com a>0, a≠1 e b>0. A função logarítmica é inversa da exponencial de mesma base. Se 2³=8, então log₂8=3. O logaritmo não é uma operação que pode ter argumento zero ou negativo no conjunto real, e sua base também deve atender às restrições.\n\nPropriedades de logaritmos derivam de propriedades de potências. Para x,y>0, logₐ(xy)=logₐx+logₐy e logₐ(x/y)=logₐx−logₐy. A igualdade logₐ(x+y)=logₐx+logₐy não vale em geral, e decorá-la erroneamente compromete a resolução de questões. A mudança de base permite calcular logₐb=log b/log a usando uma mesma base de referência.\n\nPara resolver 3ˣ=81, identifique 81=3⁴ e conclua x=4. Em 2ˣ=10, a resposta pode ser escrita x=log₂10; uma aproximação numérica requer calculadora ou tabela apropriada. A escolha da forma de resposta depende do enunciado.",
        "example": "Resolva log₂(x−1)=3. Pela definição, x−1=2³=8, logo x=9. Antes de aceitar, confira domínio: x−1>0 exige x>1, condição satisfeita. Uma resposta como x=−7 seria inválida mesmo se resultasse de manipulação algébrica indevida.",
        "pitfall": "Não distribua o logaritmo em somas e não ignore o domínio. A função logₐx existe no conjunto real somente para argumento x>0 e base positiva distinta de 1.",
        "steps": [
          "Escreva restrições da base e do argumento antes de operar.",
          "Converta a equação logarítmica para forma exponencial equivalente.",
          "Resolva e substitua a resposta na expressão original para conferir domínio."
        ]
      },
      {
        "level": "advanced",
        "title": "Gráficos, equações e modelos reais",
        "explanation": "O gráfico de y=logₐx é a reflexão do gráfico de y=aˣ em relação à reta y=x, pois ambas são funções inversas. Para a>1, logₐx cresce lentamente e passa por (1,0); possui assíntota vertical em x=0. Para base entre zero e um, o gráfico é decrescente. Identificar assíntotas, domínio e imagem ajuda a resolver inequações sem aplicar regras de sinais incorretas.\n\nEm crescimento composto, calcular quantos períodos são necessários para alcançar determinado valor pode exigir logaritmos: se P(n)=100×1,2ⁿ, para atingir 200, precisamos de 1,2ⁿ=2, logo n=ln2/ln1,2≈3,80. Se os períodos forem discretos e o objetivo exigir pelo menos 200, o menor número inteiro de períodos é quatro. A interpretação matemática depende da restrição sobre n.\n\nModelos exponenciais supõem uma taxa relativa constante. Populações reais enfrentam limitação de recursos, políticas econômicas alteram juros e processos físicos podem ter regimes diferentes. Uma boa aula não apenas resolve a equação: também identifica quando a hipótese de crescimento irrestrito deixa de ser razoável e discute o período de validade dos dados.",
        "example": "Um capital de R$ 1.000 rende 10% por período, com juros compostos. O instante de duplicação satisfaz 1,1ⁿ=2; n=ln2/ln1,1≈7,27. Se o crédito acontece somente ao fim de períodos completos, serão necessários 8 períodos para o saldo atingir pelo menos R$ 2.000.",
        "pitfall": "Não arredonde n=7,27 para sete quando o problema pede o primeiro período inteiro em que uma meta será atingida. A condição “pelo menos” pode exigir arredondamento para cima.",
        "steps": [
          "Relacione exponencial e logarítmica como funções inversas e identifique seus domínios.",
          "Use logaritmo para isolar expoentes e interprete restrições de períodos.",
          "Questione a validade do fator constante no contexto representado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual função representa crescimento de 20% sobre o valor atual a cada período, começando em 100?",
        "options": [
          "f(n)=100+20n",
          "f(n)=100(1,20)ⁿ",
          "f(n)=100(0,20)ⁿ",
          "f(n)=20(100)ⁿ"
        ],
        "correctIndex": 1,
        "hint": "Crescimento relativo exige multiplicar por 1+0,20 a cada período.",
        "solution": "A alternativa B está correta: o valor inicial 100 é multiplicado por 1,20 em cada período. A representa acréscimo absoluto fixo; C descreve forte decaimento; D usa base 100 sem relação com a taxa."
      },
      {
        "level": "intermediate",
        "prompt": "Resolva log₂(x−1)=3 no conjunto real.",
        "options": [
          "x=7",
          "x=8",
          "x=9",
          "x=−7"
        ],
        "correctIndex": 2,
        "hint": "Converta para x−1=2³ e verifique o domínio.",
        "solution": "A opção C é correta: 2³=8, portanto x−1=8 e x=9; o domínio exige x>1. A, B e D não satisfazem a equação original ou violam restrições."
      },
      {
        "level": "advanced",
        "prompt": "A expressão 100×1,2ⁿ deve atingir pelo menos 200 em períodos inteiros. Qual é o menor n?",
        "options": [
          "4",
          "3",
          "2",
          "5"
        ],
        "correctIndex": 0,
        "hint": "Resolva 1,2ⁿ≥2 e confira os valores para 3 e 4.",
        "solution": "A alternativa A está correta: 1,2³=1,728, abaixo de 2; 1,2⁴=2,0736, acima de 2. O limiar contínuo é cerca de 3,80, então o menor inteiro válido é quatro."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topicStart": "Arranjos, permutações e combinações simples",
    "objective": "Distinguir regras de contagem, permutação, arranjo e combinação, aplicar fórmulas apenas após analisar ordem e repetição e resolver seleções e códigos em contextos discretos.",
    "prerequisites": [
      "Fatoriais",
      "Princípio multiplicativo",
      "Conjuntos e operações inteiras"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Primeiro pergunte: a ordem importa?",
        "explanation": "Problemas de contagem exigem identificar etapas, escolhas possíveis e restrições. Pelo princípio multiplicativo, se uma etapa tem m opções e a seguinte n opções independentes das escolhas anteriores, há m×n sequências possíveis. Um cardápio com três entradas e quatro pratos principais permite doze pares se qualquer entrada combina com qualquer prato. Quando as opções da etapa seguinte dependem da anterior, é necessário atualizar sua contagem.\n\nPermutar n objetos distintos significa ordenar todos eles. O número de ordens é n! = n(n−1)…1. Para três livros distintos, as ordens possíveis são 3×2×1=6; cada livro muda de posição, e essa diferença conta como nova organização. O fatorial de zero é definido como 1, coerente com várias fórmulas de combinatória.\n\nEm uma seleção de pessoas para formar uma equipe sem cargos, a ordem das pessoas não importa: {Ana, Beto} representa o mesmo grupo que {Beto, Ana}. Mas se as pessoas vão ocupar posições distintas, como presidente e secretário, trocar quem ocupa qual cargo produz outro resultado. Esse teste conceitual deve preceder qualquer fórmula.",
        "example": "Três estudantes disputam presidente e secretário. Para presidente há três escolhas; para secretário restam duas, pois ninguém ocupa dois cargos. Logo 3×2=6 possibilidades. Se fosse uma dupla sem cargos, as seis ordens seriam contadas duas vezes, resultando em três grupos distintos.",
        "pitfall": "Não use combinação só porque o enunciado diz “escolher”. Se escolher inclui papéis diferentes ou ordem em uma senha, a contagem pode exigir arranjo ou outra regra.",
        "steps": [
          "Determine se os objetos são distintos e se a repetição é permitida.",
          "Teste se trocar a ordem gera resultado diferente.",
          "Conte escolhas por etapa antes de aplicar fórmula."
        ]
      },
      {
        "level": "intermediate",
        "title": "Arranjos ordenam parte; combinações ignoram a ordem",
        "explanation": "Um arranjo simples de p elementos escolhidos dentre n distintos, sem repetição, considera a ordem relevante e utiliza A(n,p)=n!/(n−p)!. Por exemplo, escolher ouro, prata e bronze entre cinco atletas produz 5×4×3=60 classificações possíveis, pois trocar posições muda o resultado. Se p=n, a expressão coincide com n!, a contagem de permutações.\n\nUma combinação simples de p elementos dentre n, sem repetição, considera a ordem irrelevante: C(n,p)=n!/[p!(n−p)!]. Para selecionar três estudantes entre cinco para um grupo sem cargos, C(5,3)=10. A divisão por p! corrige o número de ordens internas contadas num arranjo. A relação C(n,p)=C(n,n−p) expressa que escolher quem entra é equivalente a escolher quem fica fora.\n\nAs fórmulas pressupõem objetos distintos e seleção sem repetição. Se a senha admite letras repetidas, a regra muda; se existem pessoas idênticas para fins de contagem, permutações com repetição exigem tratamento distinto. Usar a fórmula certa implica compreender condições, não apenas reconhecer palavras do enunciado.",
        "example": "De seis candidatos devem ser escolhidos dois para uma comissão sem cargos: C(6,2)=6×5/2=15. Se fossem escolhidos presidente e vice, as possibilidades seriam A(6,2)=6×5=30. A diferença vem exclusivamente da relevância da ordem das pessoas.",
        "pitfall": "Não confunda C(6,2)=15 com A(6,2)=30. São resultados de perguntas distintas, apesar de selecionarem duas pessoas do mesmo conjunto de seis.",
        "steps": [
          "Identifique n, p e se todos os selecionados ocupam papéis diferentes.",
          "Use arranjo quando ordem muda o resultado; combinação quando não muda.",
          "Confira o valor com contagem simples em casos pequenos."
        ]
      },
      {
        "level": "advanced",
        "title": "Restrições, princípio aditivo e contagem por complemento",
        "explanation": "Problemas mais complexos podem combinar etapas com restrições. O princípio aditivo se aplica quando casos são disjuntos: se um resultado pertence a um de dois grupos que não se sobrepõem, somam-se as contagens. Para casos que se sobrepõem, é necessário corrigir a interseção. O princípio multiplicativo combina etapas sucessivas, enquanto a contagem por complemento calcula o total menos os casos indesejados.\n\nSe uma senha de três algarismos usa dígitos distintos e o primeiro não pode ser zero, há nove escolhas para o primeiro, nove para o segundo e oito para o terceiro: 9×9×8=648. A primeira restrição não deve ser aplicada indistintamente às demais posições. Para uma equipe de quatro pessoas entre dez, com uma pessoa específica obrigatoriamente incluída, resta escolher três dentre nove: C(9,3)=84. Escolher quatro dentre dez e depois “incluir” a pessoa contaria indevidamente casos.\n\nPara avaliar um problema, escreva as condições como regras verificáveis e divida em casos sem sobreposição. Se a ordem importa e há repetição, arranjos simples não se aplicam diretamente. A resposta deve explicar por que cada fator representa exatamente o número de opções disponíveis naquele momento.",
        "example": "Entre oito estudantes, será formada uma equipe de três que deve incluir Ana. Fixe Ana e escolha duas pessoas entre os sete restantes: C(7,2)=21. Se a condição fosse “Ana não pode participar”, escolheríamos três entre os outros sete: C(7,3)=35.",
        "pitfall": "Evite somar casos que se sobrepõem ou multiplicar etapas dependentes sem atualizar escolhas disponíveis. Descrever a condição antes da fórmula evita dupla contagem.",
        "steps": [
          "Separe restrições e determine se podem ser tratadas em casos disjuntos.",
          "Conte por produto, soma ou complemento, indicando cada fator.",
          "Valide o resultado por comparação com total sem restrições."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma disputa com três pessoas por presidente e secretário, sem acumular cargos, quantas escolhas distintas existem?",
        "options": [
          "3",
          "6",
          "9",
          "2"
        ],
        "correctIndex": 1,
        "hint": "A primeira posição tem três opções e a segunda tem duas.",
        "solution": "A alternativa B é correta: 3×2=6. A considera apenas duplas sem cargos; C permite a mesma pessoa nas duas posições; D não contabiliza todas as escolhas."
      },
      {
        "level": "intermediate",
        "prompt": "Quantos grupos sem cargos de três pessoas podem ser formados com cinco pessoas distintas?",
        "options": [
          "60",
          "20",
          "10",
          "15"
        ],
        "correctIndex": 2,
        "hint": "Use C(5,3)=5!/(3!2!).",
        "solution": "A alternativa C é correta: C(5,3)=10. A conta arranjos ordenados; B não divide corretamente as ordens internas; D corresponde a outra combinação."
      },
      {
        "level": "advanced",
        "prompt": "Uma equipe de três entre oito pessoas deve incluir Ana. Quantas equipes podem ser formadas?",
        "options": [
          "21",
          "56",
          "28",
          "7"
        ],
        "correctIndex": 0,
        "hint": "Fixe Ana e escolha duas dentre as outras sete pessoas.",
        "solution": "A alternativa A é correta: C(7,2)=21. B conta todos os grupos de três sem obrigação; C calcula C(8,2) sem fixar uma pessoa; D seleciona só um dos dois integrantes restantes."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "A Revolução Francesa e a era napoleônica",
    "objective": "Relacionar crise fiscal, desigualdades de ordens, mobilização popular e transformações da Revolução Francesa às fases políticas e ao governo napoleônico, reconhecendo contradições entre direitos e autoritarismo.",
    "prerequisites": [
      "Antigo Regime",
      "Iluminismo",
      "Sociedade de ordens"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "O Antigo Regime entra em crise em 1789",
        "explanation": "A Revolução Francesa foi um processo político e social iniciado em 1789, após agravamento da crise financeira da monarquia, desigualdades jurídicas entre ordens e conflitos sobre representação e impostos. O clero e a nobreza possuíam privilégios, enquanto o chamado Terceiro Estado reunia grupos muito diferentes, entre burgueses, trabalhadores urbanos e camponeses. A insatisfação não era idêntica entre esses grupos e não se explica apenas por circulação de ideias iluministas.\n\nA convocação dos Estados Gerais em maio de 1789 abriu disputa sobre representação e votação. Deputados do Terceiro Estado proclamaram Assembleia Nacional, reivindicando papel constituinte. A tomada da Bastilha, em 14 de julho, tornou-se símbolo de mobilização popular, embora a revolução não se reduza ao evento parisiense. No campo, tensões camponesas pressionaram contra estruturas feudais. A Declaração dos Direitos do Homem e do Cidadão, de agosto, expressou princípios jurídicos de liberdade e igualdade perante a lei, cuja aplicação prática foi limitada por exclusões.\n\nPara entender uma questão, relacione causa estrutural, crise conjuntural e ação de grupos sociais. A monarquia tinha problemas de arrecadação e endividamento, mas reformas fiscais enfrentavam privilégios; a mobilização coletiva transformou uma disputa institucional em revolução.",
        "example": "Organize três registros de 1789: convocação dos Estados Gerais, formação da Assembleia Nacional e tomada da Bastilha. O primeiro envolveu tentativa de enfrentar crise política e fiscal; o segundo alterou a ideia de representação; o terceiro mostrou ação popular. Nenhum sozinho explica toda a revolução.",
        "pitfall": "Não apresente a burguesia como único grupo participante nem a Revolução como aplicação automática de livros iluministas. Camponeses, artesãos e mulheres atuaram de modos diferentes, embora não tivessem direitos iguais.",
        "steps": [
          "Identifique a estrutura de ordens e as disputas tributárias.",
          "Relacione as decisões dos Estados Gerais às novas instituições.",
          "Compare mobilizações urbanas e rurais e seus objetivos."
        ]
      },
      {
        "level": "intermediate",
        "title": "Monarquia constitucional, república e radicalização",
        "explanation": "A primeira fase revolucionária buscou transformar a monarquia por meio de uma constituição, mas divergências internas, crises econômicas e conflitos externos favoreceram radicalização. A Constituição de 1791 instaurou monarquia constitucional, com distinções de participação política. Em 1792, a monarquia foi derrubada e a França tornou-se república. A execução de Luís XVI em 1793 simbolizou ruptura profunda com a ordem anterior, intensificando enfrentamentos internos e internacionais.\n\nO período da Convenção envolveu disputa entre facções, mobilizações populares e medidas excepcionais de segurança e repressão. O chamado Terror, associado ao Comitê de Salvação Pública e a líderes jacobinos, deve ser analisado em seu contexto de guerra e conflito, sem tratar qualquer violência como desfecho inevitável de ideias de igualdade. Após a queda de Robespierre, em 1794, mudanças políticas levaram a governo mais conservador e ao Diretório.\n\nUma análise consistente distingue interesses e instituições em cada etapa: não se deve dizer que a França teve a mesma forma de governo durante toda a Revolução. Transformações jurídicas e administrativas coexistiram com conflitos sociais e limitações do sufrágio. As consequências atingiram diferentes grupos de forma desigual.",
        "example": "Uma questão apresenta 1791, 1793 e 1795. Relacione 1791 à monarquia constitucional; 1793 à república e radicalização revolucionária; e 1795 ao início do Diretório. O exercício exige situar regimes e conflitos, em vez de decorar uma sequência de nomes isolados.",
        "pitfall": "Não confunda a Declaração de 1789 com sufrágio universal pleno em todas as fases. A extensão de direitos e participação variou ao longo do processo e entre grupos sociais.",
        "steps": [
          "Construa linha do tempo com mudanças institucionais verificáveis.",
          "Identifique divergências entre grupos e suas bases sociais.",
          "Examine consequências dos conflitos internos e externos para a radicalização."
        ]
      },
      {
        "level": "advanced",
        "title": "Napoleão: reformas, guerras e autoritarismo",
        "explanation": "O golpe do 18 de Brumário, em 1799, abriu o Consulado e consolidou a ascensão de Napoleão Bonaparte. Em 1804, Napoleão assumiu título de imperador. Seu governo realizou reformas administrativas e jurídicas, incluindo o Código Civil, e fortaleceu a centralização do Estado. Parte das transformações revolucionárias foi preservada, enquanto liberdades políticas e oposição ficaram limitadas pelo autoritarismo.\n\nGuerras napoleônicas ampliaram influência francesa em grande parte da Europa e provocaram resistências e reconfigurações territoriais. O Bloqueio Continental, política de restrição ao comércio com o Reino Unido, gerou repercussões econômicas e diplomáticas, inclusive no mundo português. A transferência da corte portuguesa para o Brasil, em 1808, integra esse contexto de pressão e conflito internacional, mas exige considerar decisões e interesses da monarquia lusa.\n\nO declínio napoleônico envolveu derrotas militares, desgaste das guerras e mudanças de alianças, culminando na derrota de Waterloo em 1815. O Congresso de Viena buscou reorganizar a ordem europeia, enfrentando as heranças revolucionárias e napoleônicas. A relação entre direitos, expansão militar e restauração monárquica impede narrativas simplistas de progresso linear ou regressão total.",
        "example": "Compare o Código Civil napoleônico, associado à uniformização de regras civis e afirmação de certos direitos de propriedade, com censura e concentração de poder. O mesmo governo pode ter consolidado reformas legais e restringido participação política. Essa contradição é central para entender sua época.",
        "pitfall": "Evite identificar Napoleão como defensor da democracia plena ou negar todas as mudanças jurídicas da era revolucionária. A análise exige distinguir reforma institucional, guerra e formas de exercício do poder.",
        "steps": [
          "Relacione o Consulado e o Império a mudanças e continuidades revolucionárias.",
          "Explique efeitos internacionais das guerras e do Bloqueio Continental.",
          "Compare consolidação de reformas civis com limites autoritários e reação europeia."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual conjunto de fatores ajuda a explicar a crise francesa de 1789?",
        "options": [
          "Somente ideias de um filósofo sem tensões fiscais.",
          "Crise financeira, privilégios de ordens e disputas políticas.",
          "Descolonização africana do século XX.",
          "Fim imediato de todas as desigualdades sociais."
        ],
        "correctIndex": 1,
        "hint": "Considere causas sociais, econômicas e políticas.",
        "solution": "A alternativa B reúne fatores estruturais e conjunturais da Revolução. A simplifica a causalidade; C é anacrônica; D apresenta um resultado não ocorrido imediatamente."
      },
      {
        "level": "intermediate",
        "prompt": "Qual sequência institucional corresponde ao processo revolucionário francês?",
        "options": [
          "Império em 1789, Diretório em 1791, monarquia em 1799.",
          "República em 1789, Império em 1793, Diretório em 1815.",
          "Monarquia constitucional em 1791, república em 1792, Diretório em 1795.",
          "Diretório em 1789, Império em 1791, república em 1799."
        ],
        "correctIndex": 2,
        "hint": "Organize os principais regimes na linha do tempo.",
        "solution": "A alternativa C está correta: monarquia constitucional em 1791, república em 1792 e Diretório a partir de 1795. As outras opções invertem regimes e atribuem datas inadequadas."
      },
      {
        "level": "advanced",
        "prompt": "Como caracterizar o governo napoleônico?",
        "options": [
          "Consolidou reformas jurídicas e centralização, mas restringiu liberdades políticas.",
          "Eliminou toda legislação originada na Revolução.",
          "Defendeu sufrágio universal irrestrito em toda a Europa.",
          "Impediu qualquer conflito militar no continente."
        ],
        "correctIndex": 0,
        "hint": "Compare reformas administrativas e forma de exercício do poder.",
        "solution": "A alternativa A reconhece a combinação de reorganização jurídica, fortalecimento estatal e autoritarismo. As alternativas restantes contradizem o papel do Código Civil, as limitações políticas e as guerras napoleônicas."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Primeira Guerra Mundial",
    "objective": "Analisar alianças, nacionalismos, imperialismo, militarização e a crise de 1914, explicar fases e impacto da guerra total e relacionar tratados de paz a transformações políticas e territoriais.",
    "prerequisites": [
      "Imperialismo do século XIX",
      "Nacionalismos",
      "Industrialização e armamentos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "A guerra não teve uma única causa",
        "explanation": "A Primeira Guerra Mundial começou em 1914 em ambiente de rivalidades imperialistas, nacionalismos, sistemas de alianças e militarização europeia. A competição econômica e estratégica entre grandes potências agravava tensões, mas não significa que cada país tivesse um único motivo para participar. O sudeste europeu acumulava disputas nacionais e imperiais, com interesses de diversos povos e Estados.\n\nO assassinato do arquiduque Francisco Ferdinando em Sarajevo, em junho de 1914, desencadeou crise diplomática entre Áustria-Hungria e Sérvia. Ultimatos, decisões de mobilização e compromissos entre potências ampliaram o conflito. Esse atentado é considerado estopim, não explicação suficiente das causas estruturais. A guerra reuniu diferentes frentes e envolveu Estados para além da Europa, com tropas e recursos coloniais.\n\nAs alianças anteriores não devem ser confundidas com blocos rígidos e imutáveis durante toda a guerra. As potências centrais incluíram Alemanha e Áustria-Hungria; do lado aliado participaram, entre outros, França, Reino Unido e Rússia por parte do conflito. A entrada de novos países ao longo do tempo modificou as forças em jogo.",
        "example": "Analise duas evidências: mapas de alianças anteriores a 1914 e cronologia de declarações de guerra após Sarajevo. O mapa explica conexões estratégicas; a cronologia mostra decisões políticas. Só a combinação permite compreender por que um atentado regional se transformou em guerra ampla.",
        "pitfall": "Não afirme que a guerra aconteceu exclusivamente porque um arquiduque foi assassinado. O atentado foi estopim numa situação anterior de rivalidades e decisões de governos.",
        "steps": [
          "Separe causas de longa duração, crise de 1914 e decisões imediatas.",
          "Identifique interesses e alianças sem tratá-los como blocos eternos.",
          "Relacione mobilização e escalada diplomática à ampliação da guerra."
        ]
      },
      {
        "level": "intermediate",
        "title": "Trincheiras, tecnologia e mobilização social",
        "explanation": "A guerra passou por fases de movimentos e posições estabilizadas em várias frentes, particularmente na frente ocidental. Sistemas extensos de trincheiras e arame farpado, combinados com artilharia, metralhadoras e estratégias ofensivas custosas, contribuíram para impasses e elevadas perdas humanas. A tecnologia não eliminou a logística e a resistência física: doenças, lama, escassez e longas campanhas afetaram soldados e civis.\n\nA expressão guerra total destaca mobilização ampla de economias, indústrias, transportes, propaganda e populações civis. Governos reorganizaram produção e consumo e impuseram restrições; mulheres assumiram diversas funções em setores produtivos, mas transformações de gênero foram desiguais e não garantiram igualdade automática após a guerra. Tropas coloniais e trabalhadores de regiões submetidas a impérios participaram, demonstrando a dimensão global do conflito.\n\nO uso de gases tóxicos e novas armas intensificou consequências humanitárias, embora a extensão de seu emprego variasse por frente e fase. Interpretar cartazes de propaganda exige observar emissor, público e objetivos; uma peça que exalta patriotismo não prova consenso de toda população.",
        "example": "Compare um cartaz que pede economia de alimentos e uma fotografia de trincheiras. O cartaz indica mobilização da sociedade civil e propaganda; a fotografia evidencia condições militares. Ambos ajudam a entender a guerra total, mas nenhum sozinho informa o número de vítimas ou as opiniões de toda população.",
        "pitfall": "Não reduza a guerra apenas às trincheiras ou a uma corrida tecnológica. O conflito envolveu diferentes frentes, economia, trabalho civil e redes imperiais globais.",
        "steps": [
          "Diferencie frentes militares e períodos de mobilidade ou posições fixas.",
          "Analise como produção, propaganda e logística sustentaram as operações.",
          "Examine fontes de época considerando finalidade e limites de representação."
        ]
      },
      {
        "level": "advanced",
        "title": "1917–1919: viradas, tratados e novas tensões",
        "explanation": "O ano de 1917 concentrou transformações importantes: os Estados Unidos entraram no conflito ao lado dos Aliados, enquanto a Revolução Russa alterou a posição da Rússia e levou ao seu afastamento da guerra, formalizado em 1918 pelo tratado de Brest-Litovsk. Esses acontecimentos mudaram recursos militares e diplomáticos, mas seus efeitos não foram instantâneos e dependeram de operações subsequentes.\n\nEm novembro de 1918, o armistício encerrou os combates principais na frente ocidental. A Conferência de Paz de Paris produziu tratados, entre eles Versalhes (1919), com imposições territoriais, militares e financeiras à Alemanha. A Sociedade das Nações foi criada com objetivo de promover cooperação e segurança coletiva, mas enfrentou limites políticos e dificuldades institucionais. Diversos povos reivindicaram autodeterminação, embora a nova ordem não a aplicasse universalmente.\n\nA guerra contribuiu para colapso de impérios e redefinição de fronteiras europeias, deixando ressentimentos, crises econômicas e disputas de legitimidade. Entretanto, atribuir toda a ascensão posterior de regimes autoritários exclusivamente ao Tratado de Versalhes seria simplificação: processos políticos nacionais, crise econômica e outras condições também importaram.",
        "example": "Um mapa da Europa antes e depois de 1918 mostra desaparecimento de impérios multinacionais e criação de novos Estados. Para compreender o fenômeno, relacione derrota militar, revoluções, negociações de paz e reivindicações nacionais, sem supor que fronteiras novas tenham eliminado todos os conflitos.",
        "pitfall": "Não confunda armistício de 1918 com Tratado de Versalhes de 1919, nem conclua que todos os países derrotados receberam regras idênticas. Cada tratado e contexto exigem análise específica.",
        "steps": [
          "Organize eventos de 1917, 1918 e 1919 e seus efeitos políticos.",
          "Analise tratados como negociações que criaram novas regras e tensões.",
          "Evite explicações monocausais para transformações políticas posteriores."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual fato é geralmente identificado como estopim da Primeira Guerra, mas não sua causa única?",
        "options": [
          "Assassinato de Francisco Ferdinando em Sarajevo, em 1914.",
          "Criação da ONU em 1945.",
          "Queda do Muro de Berlim em 1989.",
          "Início da Revolução Industrial em 1750."
        ],
        "correctIndex": 0,
        "hint": "Estopim é o evento imediato da crise de 1914.",
        "solution": "A alternativa A está correta: o assassinato desencadeou crise diplomática, enquanto rivalidades e alianças estruturais ampliaram a guerra. As demais são eventos de outros períodos."
      },
      {
        "level": "intermediate",
        "prompt": "Qual característica ajuda a definir a Primeira Guerra como guerra total?",
        "options": [
          "O conflito envolveu somente soldados e nenhum civil.",
          "A guerra foi exclusivamente naval, sem trincheiras.",
          "Governos mobilizaram indústria, trabalho, propaganda e recursos civis para o esforço militar.",
          "Todas as economias europeias cresceram igualmente."
        ],
        "correctIndex": 2,
        "hint": "Pense na mobilização além do campo de batalha.",
        "solution": "A alternativa C está correta: economias e sociedades civis participaram amplamente da sustentação militar. A e B negam aspectos centrais do conflito; D generaliza efeitos econômicos que foram variados."
      },
      {
        "level": "advanced",
        "prompt": "Qual associação cronológica está correta?",
        "options": [
          "Versalhes em 1914 e armistício em 1919.",
          "Entrada dos EUA em 1917, armistício em 1918 e Versalhes em 1919.",
          "Revolução Russa em 1939 e Versalhes em 1945.",
          "Criação da Sociedade das Nações antes do atentado de Sarajevo."
        ],
        "correctIndex": 1,
        "hint": "Organize a sequência dos principais marcos do encerramento.",
        "solution": "A alternativa B apresenta sequência adequada: EUA entram em 1917, armistício ocorre em novembro de 1918 e Versalhes é assinado em 1919. As outras opções deslocam acontecimentos para períodos inadequados."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topicStart": "O espaço geográfico e a globalização",
    "objective": "Conectar redes técnicas, fluxos econômicos, circulação cultural e cadeias produtivas à organização espacial da globalização, examinando desigualdades territoriais e diferentes escalas.",
    "prerequisites": [
      "Espaço geográfico e território",
      "Setores produtivos",
      "Cartografia e escalas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Globalização é intensificação de redes, não uniformidade",
        "explanation": "Globalização descreve processos históricos de intensificação e articulação de fluxos de mercadorias, capitais, pessoas, informações e símbolos através de diferentes regiões. Transporte marítimo, aviação, redes digitais e acordos econômicos influenciam velocidade e alcance dessas trocas. O fenômeno não começou em um único ano nem significa que todas as populações participem da mesma maneira: existe longa história de conexões globais e acelerações distintas.\n\nEspaço geográfico resulta de relações entre sociedades e natureza ao longo do tempo. Redes de circulação conectam nós, como portos, centros industriais, cidades e plataformas logísticas. Lugares com boa infraestrutura podem integrar-se intensamente a cadeias produtivas, enquanto outros enfrentam exclusões de conectividade, investimento e transporte. O mapa de fluxos ajuda a visualizar concentrações e assimetrias.\n\nÉ importante diferenciar fluxo de mercadorias, deslocamento de pessoas e circulação de dados. Um país pode ter forte exportação e acesso desigual a serviços digitais. A globalização pode ampliar acesso a tecnologias e também reforçar dependências e desigualdades, dependendo das condições concretas.",
        "example": "Um celular projetado em um país pode usar componentes fabricados em vários outros, ser montado em outra região e vendido globalmente. Essa cadeia mostra fragmentação espacial da produção. Não significa, porém, que salários e impactos ambientais sejam iguais em todas as etapas.",
        "pitfall": "Não confunda globalização com desaparecimento das fronteiras ou igualdade entre países. Estados continuam estabelecendo regras e diferentes grupos acessam redes em condições desiguais.",
        "steps": [
          "Identifique atores e fluxos de uma rede econômica ou informacional.",
          "Localize nós, trajetos e territórios participantes.",
          "Observe desigualdades de acesso, decisão e distribuição de benefícios."
        ]
      },
      {
        "level": "intermediate",
        "title": "Cadeias globais de valor e divisão internacional do trabalho",
        "explanation": "Uma cadeia global de valor distribui etapas como projeto, extração de matérias-primas, fabricação, montagem, transporte e venda entre diferentes localidades. Empresas escolhem lugares com base em infraestrutura, disponibilidade de trabalhadores, tecnologias, mercado, legislação e custos. A divisão internacional do trabalho não é fixa: transformações tecnológicas e políticas comerciais podem deslocar investimentos e especializações.\n\nO valor econômico criado em cada etapa pode ser diferente do número de unidades produzidas. Um território pode exportar grande volume de insumos com baixo valor agregado e importar produtos acabados mais caros. Isso não prova que todos os setores ou países se encaixem em uma hierarquia permanente, mas indica a importância de examinar relações de dependência, tecnologia e controle das marcas ou patentes.\n\nRedes logísticas também geram vulnerabilidades. Um bloqueio portuário, desastre ambiental ou crise energética pode afetar fábricas distantes quando faltam componentes. Essas interdependências demonstram que distância física não determina sozinha o grau de conexão econômica. Comparar mapas de exportação exige verificar escala, período e unidades, como valor monetário ou volume físico.",
        "example": "Uma indústria depende de chips importados e produz eletrodomésticos em território nacional. Se uma rota marítima sofre interrupção, a empresa pode reduzir produção mesmo sem dano à fábrica local. A cadeia está conectada por transporte e fornecedores transnacionais.",
        "pitfall": "Não iguale globalização a desindustrialização obrigatória. Resultados variam conforme políticas industriais, investimentos, infraestrutura e estratégias das empresas.",
        "steps": [
          "Separe etapas produtivas e localize sua distribuição territorial.",
          "Identifique quem controla tecnologia, transporte e acesso a mercados.",
          "Avalie efeitos e vulnerabilidades de redes interdependentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Fluxos, desigualdades e interpretação de indicadores",
        "explanation": "A circulação global de capitais e informação pode ser rápida, mas a mobilidade de trabalhadores é regulada por fronteiras, direitos e políticas migratórias específicas. Plataformas digitais também se apoiam em infraestrutura física: cabos submarinos, centros de dados, redes de energia e antenas. A experiência de conexão online não elimina a geografia, apenas reorganiza as formas de produzir e acessar o espaço.\n\nPara estudar desigualdade territorial, escolha indicadores de acesso à internet, renda, saneamento, logística ou concentração industrial, mas compare metodologias e períodos. Um país pode crescer economicamente enquanto certas regiões perdem empregos industriais. A escala nacional pode ocultar desigualdades internas: médias elevadas não representam necessariamente todos os municípios.\n\nA relação entre globalização e ambiente inclui emissões do transporte, extração de recursos, consumo e circulação de tecnologia de baixo carbono. Uma política pode deslocar impactos ambientais para outra região sem eliminá-los. Conclusões responsáveis precisam considerar ciclo produtivo e fontes de dados, evitando afirmar causalidade apenas por coincidência temporal.",
        "example": "Duas cidades apresentam a mesma proporção de habitantes conectados à internet, 80%, mas numa delas a velocidade média é baixa e o serviço é caro para famílias de baixa renda. A taxa isolada de acesso não explica plenamente a inclusão digital; preço, qualidade e habilidades também importam.",
        "pitfall": "Não interprete a média de um país como condição de cada região. Redes globais conectam territórios de modo seletivo, e os indicadores precisam ser contextualizados.",
        "steps": [
          "Escolha variáveis compatíveis com a pergunta geográfica e a escala adotada.",
          "Compare fluxos, infraestrutura e desigualdade social em cada lugar.",
          "Reconheça consequências ambientais e limites de inferências causais."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual situação representa uma rede produtiva global?",
        "options": [
          "Uma cadeia com projeto, peças, montagem e venda distribuídos por vários países.",
          "Um território completamente isolado sem fluxos econômicos.",
          "Um mapa sem rotas de transporte ou comunicação.",
          "Uma atividade que não envolve qualquer circulação entre lugares."
        ],
        "correctIndex": 0,
        "hint": "Pense na conexão de etapas produtivas distantes.",
        "solution": "A alternativa A descreve a fragmentação espacial de uma cadeia global de valor. Os demais exemplos ignoram conexões produtivas e, por isso, não demonstram o fenômeno pedido."
      },
      {
        "level": "intermediate",
        "prompt": "Por que uma interrupção em porto distante pode afetar fábrica nacional?",
        "options": [
          "Porque todos os países usam a mesma moeda.",
          "Porque as fronteiras deixaram de existir.",
          "Porque cadeias produtivas podem depender de componentes transportados por redes internacionais.",
          "Porque cada fábrica produz isoladamente todos os seus insumos."
        ],
        "correctIndex": 2,
        "hint": "Observe a dependência entre fornecedores e etapas logísticas.",
        "solution": "A alternativa C está correta: a interdependência entre fornecedores, portos e fábricas pode transmitir impactos a longas distâncias. As outras opções afirmam uniformidade monetária ou independência produtiva inexistentes."
      },
      {
        "level": "advanced",
        "prompt": "Dois países apresentam a mesma média nacional de acesso digital. Qual análise seria mais rigorosa?",
        "options": [
          "Afirmar que todas as cidades têm acesso igual.",
          "Examinar diferenças regionais de preço, qualidade e infraestrutura.",
          "Ignorar diferenças de renda e localização.",
          "Concluir que as desigualdades territoriais desapareceram."
        ],
        "correctIndex": 1,
        "hint": "Médias agregadas podem ocultar desigualdades internas.",
        "solution": "A alternativa B reconhece que acesso nacional médio não mede necessariamente custo, qualidade ou distribuição regional. As demais extrapolam o indicador para conclusões sem evidências."
      }
    ]
  }
];
