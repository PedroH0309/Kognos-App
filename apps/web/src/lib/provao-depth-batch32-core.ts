import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Kognos — conteúdo autoral original, não oficial e sem homologação docente. */
export const provaoDepthBatch32Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Macromoléculas naturais e sintéticas",
    "objective": "Diferenciar macromoléculas naturais e materiais poliméricos sintéticos pela estrutura e pelas ligações químicas, resolver grau de polimerização e avaliar reciclagem e persistência ambiental sem confundir origem renovável com biodegradabilidade.",
    "prerequisites": [
      "Ligações covalentes e grupos funcionais",
      "Massa molar e quantidade de matéria",
      "Reações de adição e condensação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Estrutura molecular, unidades repetitivas e origem",
        "explanation": "Macromoléculas são espécies químicas de massa molecular elevada que contêm grande número de átomos ligados covalentemente. Muitos polímeros apresentam unidades repetitivas derivadas de monômeros: no polietileno, a sequência predominante deriva da abertura da ligação dupla do eteno, produzindo segmentos –CH₂–CH₂–. Polissacarídeos como amido e celulose também são polímeros, mas suas unidades de glicose apresentam arranjos de ligações diferentes: amido possui principalmente ligações α-glicosídicas, enquanto celulose possui ligações β(1→4), razão importante para distintas propriedades e digestibilidade humana. Proteínas são macromoléculas de aminoácidos conectados por ligações peptídicas e dobradas em estruturas com funções específicas. Classificar um material como natural ou sintético diz respeito à origem e ao processo de produção, não indica automaticamente toxicidade, solubilidade em água ou facilidade de decomposição. Um polímero também pode apresentar distribuição de comprimentos de cadeia; sua massa molar é frequentemente descrita por uma média, não um número único obrigatório para todas as moléculas da amostra.",
        "example": "Observe um trecho de cadeia com quatro unidades –CH₂–CH₂– e massa aproximada de 4×28=112 u, desprezando as pequenas contribuições dos grupos terminais. A contagem ajuda a reconhecer a unidade repetitiva, mas uma peça real de polietileno contém cadeias de muitos comprimentos e não apenas quatro repetições.",
        "pitfall": "Não confunda unidade repetitiva com molécula de monômero ainda intacta; estrutura, ramificações e massa molar média influenciam propriedades, além da origem natural ou sintética.",
        "steps": [
          "Reconheça as ligações covalentes e a unidade repetitiva de cada exemplo.",
          "Compare celulose, amido, proteínas e polietileno por estrutura, não apenas por nomes.",
          "Identifique se a origem do material permite ou não concluir biodegradação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Polimerização por adição, condensação e propriedades",
        "explanation": "Na polimerização por adição em cadeia do eteno, moléculas pequenas formam uma macromolécula sem eliminação estequiométrica de uma molécula pequena por cada ligação formada. Já a produção de poliésteres por policondensação, como o PET a partir de reagentes difuncionais adequados, envolve formação repetida de ligações éster e liberação de pequenas moléculas, dependendo da rota industrial. Essas classificações são modelos de mecanismos distintos: um polímero não pode ser considerado de condensação apenas porque possui oxigênio em sua cadeia. O grau médio de polimerização pode ser estimado por DP≈M̄n/M₀, em que M̄n é a massa molar numérica média da cadeia e M₀ é a massa da unidade repetitiva, desde que as extremidades não alterem significativamente o resultado. Por exemplo, para polietileno com M̄n=28 000 g/mol e M₀≈28 g/mol, DP≈1000. Cadeias mais longas, maior cristalinidade e ramificações afetam resistência mecânica, temperatura de amolecimento e permeabilidade. Esses efeitos precisam ser analisados junto com os aditivos e o processamento, não inferidos de forma universal por um único parâmetro.",
        "example": "Considere amostra com massa molar numérica média de 42 000 g/mol e unidade repetitiva de polietileno próxima de 28 g/mol. Calcule DP≈42 000/28=1500 unidades repetitivas por cadeia média. O resultado só estima média sob hipótese de contribuição terminal desprezível.",
        "pitfall": "Não use massa do monômero incorreta, nem trate o grau médio como quantidade exata de unidades em todas as moléculas da amostra; ele depende do tipo de massa molar média.",
        "steps": [
          "Identifique a unidade repetitiva e a rota de formação indicada no enunciado.",
          "Divida a massa molar média da cadeia pela massa da unidade para obter DP estimado.",
          "Discuta como ramificação e processamento limitam comparações de propriedades."
        ]
      },
      {
        "level": "advanced",
        "title": "Ciclo de vida, reciclagem e materiais biodegradáveis",
        "explanation": "Polímeros naturais não são necessariamente rapidamente biodegradáveis em qualquer ambiente, e alguns polímeros sintéticos podem ser desenvolvidos para degradação sob condições controladas. O PET pode passar por reciclagem mecânica, com seleção, lavagem, fragmentação e reprocessamento, ou por rotas químicas que desconstroem parte da macromolécula; o rendimento depende da pureza, da tecnologia e da perda de material. Reciclagem mecânica pode sofrer redução de propriedades após múltiplos ciclos térmicos, e nem todo resíduo é viável para reciclar sem infraestrutura. Materiais compostáveis certificados frequentemente exigem condições específicas de compostagem industrial, não equivalentes ao oceano ou a um aterro. Microplásticos são partículas pequenas que podem surgir por fragmentação ou desgaste de materiais; sua presença não significa que o carbono tenha sido mineralizado. Em uma triagem de 800 kg de resíduo de PET com recuperação de massa de 65%, obtêm-se 520 kg de material recuperado, enquanto 280 kg não são recuperados nessa etapa. A análise deve usar massa, composição, uso de energia, transporte e impactos locais, evitando concluir que qualquer tecnologia isolada resolve a poluição plástica.",
        "example": "Um centro recebe 800 kg de embalagens PET e obtém rendimento verificado de 65% na etapa de separação e recuperação. Massa recuperada=0,65×800=520 kg; diferença=800−520=280 kg. O cálculo não afirma que os 280 kg foram destruídos, nem que o material recuperado já virou um produto novo.",
        "pitfall": "Não confunda fragmentação física com biodegradação completa, ou 'material reciclável' com recuperação efetiva: coleta, contaminação e mercado são condições determinantes.",
        "steps": [
          "Defina a etapa e a unidade funcional da avaliação ambiental.",
          "Calcule rendimento de recuperação de massa sem atribuir destino fictício ao resíduo.",
          "Compare reciclagem, reutilização e biodegradação sob condições de tratamento reais."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na estrutura do polietileno, a unidade repetitiva formada a partir de eteno é:",
        "options": [
          "–CO–NH–",
          "–CH₂–CH₂–",
          "–O–CO–",
          "–Si–O–"
        ],
        "correctIndex": 1,
        "hint": "Lembre que o eteno perde a insaturação e constrói uma cadeia carbonada.",
        "solution": "A polimerização do eteno forma ligações simples entre carbonos e produz a repetição –CH₂–CH₂–. Os grupos –CO–NH– caracterizam ligações peptídicas, enquanto estruturas com ésteres e siloxanos pertencem a outras famílias químicas."
      },
      {
        "level": "intermediate",
        "prompt": "Um polietileno tem massa molar numérica média de 28 000 g/mol e unidade repetitiva de 28 g/mol. Seu DP médio aproximado é:",
        "options": [
          "100",
          "280",
          "1000",
          "784000"
        ],
        "correctIndex": 2,
        "hint": "Faça a razão massa molar média da cadeia sobre massa da unidade repetitiva.",
        "solution": "DP≈28 000/28=1000 unidades repetitivas. Essa é uma estimativa do grau médio, assumindo pequena contribuição dos grupos terminais e usando massa molar numérica média adequada, não uma contagem idêntica de todas as cadeias."
      },
      {
        "level": "advanced",
        "prompt": "Na recuperação de 800 kg de PET, um processo aproveita 65% da massa recebida. Qual a massa recuperada?",
        "options": [
          "520 kg",
          "280 kg",
          "650 kg",
          "1230 kg"
        ],
        "correctIndex": 0,
        "hint": "Converta 65% em 0,65 e multiplique pelo total.",
        "solution": "A massa aproveitada é 0,65×800=520 kg. Os 280 kg restantes não são recuperados nessa etapa, mas o cálculo por si só não informa seu destino. A recuperação não prova que todo o plástico foi reciclado em novos produtos."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Geradores elétricos. Força eletromotriz e resistência interna. Equação e curva característica…",
    "objective": "Modelar geradores reais pela força eletromotriz e resistência interna, calcular corrente, tensão terminal, perdas e potência na carga, e interpretar a curva tensão-corrente com convenções explícitas e limitações do modelo.",
    "prerequisites": [
      "Corrente, resistência e diferença de potencial elétrico",
      "Primeira lei de Ohm e associação de resistores",
      "Potência elétrica e conservação de energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Força eletromotriz e tensão nos terminais",
        "explanation": "Um gerador elétrico transforma outra forma de energia, como química ou mecânica, em energia elétrica disponível ao circuito. A força eletromotriz ε mede energia fornecida por unidade de carga no modelo de uma fonte, sendo expressa em volt: embora o nome inclua 'força', não é uma força mecânica em newtons. Um gerador real pode ser aproximado por fonte ideal ε em série com resistência interna r. Quando entrega corrente I ao circuito externo, parte da energia é dissipada internamente e a tensão terminal obedece U=ε−rI, adotando-se a convenção de gerador em descarga. Sem corrente e sem outras perdas internas relevantes, U≈ε; com corrente crescente, a tensão útil cai. Isso não significa que energia elétrica seja perdida sem transformação: rI² corresponde à taxa de conversão em calor no modelo resistivo. A equação não deve ser aplicada indiscriminadamente a uma bateria em carga, a um gerador regulado eletronicamente ou a condições em que temperatura e estado de carga alteram muito os parâmetros. É necessário declarar sentido da corrente e se o dispositivo fornece ou recebe energia elétrica.",
        "example": "Uma fonte idealizada tem ε=12 V e r=1,5 Ω. Se entrega I=2 A a uma carga, a queda interna é rI=3 V e sua tensão terminal U=12−3=9 V. A potência dissipada dentro da fonte é rI²=1,5×4=6 W, diferente da potência recebida pela carga.",
        "pitfall": "O nome 'força eletromotriz' não representa newtons, e U não é sempre igual a ε; a relação U=ε−rI assume gerador fornecendo corrente sob resistência interna aproximadamente constante.",
        "steps": [
          "Determine a função energética do dispositivo e o sentido da corrente.",
          "Calcule a queda interna rI e subtraia de ε para obter U em descarga.",
          "Verifique se a aproximação de parâmetros constantes é adequada ao caso."
        ]
      },
      {
        "level": "intermediate",
        "title": "Gerador ligado a resistor e conservação de potência",
        "explanation": "Se um gerador de força eletromotriz ε e resistência interna r alimenta um resistor externo R, todos em série, a lei das malhas fornece ε=I(R+r), portanto I=ε/(R+r). A tensão no resistor é U=IR e coincide com a tensão nos terminais do gerador. É incorreto calcular I=ε/R quando a resistência interna não é desprezível. O balanço de potência no modelo é εI=I²R+I²r: a energia entregue pela fonte por unidade de tempo se reparte entre carga útil e dissipação interna. Para ε=12 V, r=1 Ω e R=5 Ω, obtém-se I=12/(1+5)=2 A, U=2×5=10 V, Pexterna=I²R=20 W e Pinterna=I²r=4 W, somando 24 W fornecidos. A potência elétrica não é energia em joules: watts correspondem a joules por segundo. Fontes reais têm limites de corrente, aquecimento e segurança; esse cálculo é apenas análise de circuito de baixa complexidade, não instrução para curto-circuitar baterias reais.",
        "example": "Conecte teoricamente uma fonte ε=9 V, r=1 Ω a R=8 Ω. Corrente I=9/(8+1)=1 A; tensão útil U=IR=8 V. O gerador fornece 9 W no modelo, dos quais 8 W chegam ao resistor externo e 1 W se dissipa em r.",
        "pitfall": "Não ignore a resistência interna ao fechar o circuito; distinguir potência fornecida εI, potência útil UI e calor interno rI² impede conclusões energéticas incompatíveis.",
        "steps": [
          "Somar r e R na malha para obter corrente única da associação em série.",
          "Determinar U e as potências externa, interna e total nas unidades corretas.",
          "Conferir o balanço εI=I²R+I²r e os limites do modelo."
        ]
      },
      {
        "level": "advanced",
        "title": "Curva característica, potência máxima e rendimento",
        "explanation": "No modelo linear, o gráfico U em função da corrente I para um gerador que fornece energia é uma reta de intercepto vertical ε e inclinação negativa −r. Assim, medir U para diferentes correntes permite estimar força eletromotriz e resistência interna, desde que elas permaneçam praticamente constantes. Para uma reta passando por (0 A, 6 V) e (2 A, 4 V), ε=6 V e r=(6−4)/2=1 Ω. Quando se varia a resistência externa positiva R, a potência entregue à carga P=I²R=ε²R/(R+r)² atinge máximo em R=r no modelo ideal; esse ponto corresponde a eficiência elétrica U/ε=1/2 e dissipação interna igual à externa. Potência máxima não é sinônimo de maior economia nem da melhor condição de operação segura. Com ε=6 V, r=1 Ω e R=1 Ω, a corrente é 3 A e a potência útil é 9 W. A curva real pode desviar da reta por química da bateria, temperatura, regulação eletrônica e envelhecimento, exigindo dados medidos antes de extrapolar.",
        "example": "Uma fonte apresenta U=10 V sem carga e U=8 V ao fornecer 1 A. No modelo, ε≈10 V e r=(10−8)/1=2 Ω. Para R=2 Ω, a potência na carga seria ε²/(4r)=100/8=12,5 W no ponto matemático de máxima transferência, ignorando limites térmicos.",
        "pitfall": "Não confunda a inclinação da reta U×I com resistência externa; seu módulo é r, e o ponto de máxima potência útil dissipa metade da potência gerada no próprio circuito interno.",
        "steps": [
          "Leia o intercepto de U(I) como ε e calcule a inclinação com pontos medidos.",
          "Use R=r somente sob as hipóteses de fonte linear e carga puramente resistiva.",
          "Compare potência, rendimento e limites práticos antes de recomendar operação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um gerador fornece ε=10 V, com r=2 Ω, a uma corrente de 3 A. Sua tensão terminal é:",
        "options": [
          "2 V",
          "4 V",
          "6 V",
          "10 V"
        ],
        "correctIndex": 1,
        "hint": "Para fonte fornecendo corrente, U=ε−rI.",
        "solution": "A queda interna vale rI=2×3=6 V; portanto U=10−6=4 V. Os 10 V são a força eletromotriz e a tensão a circuito aberto idealizada, não a tensão disponível sob essa corrente."
      },
      {
        "level": "intermediate",
        "prompt": "Uma fonte ε=12 V e r=1 Ω alimenta resistor externo R=5 Ω. A corrente é:",
        "options": [
          "0,5 A",
          "1 A",
          "2 A",
          "12 A"
        ],
        "correctIndex": 2,
        "hint": "A resistência total da malha é R+r.",
        "solution": "Em série, I=ε/(R+r)=12/(5+1)=2 A. Ignorar r levaria a 2,4 A, valor incompatível com a queda de tensão interna. A fonte fornece 24 W, dos quais 20 W ficam na carga."
      },
      {
        "level": "advanced",
        "prompt": "Na curva de um gerador linear, U=6 V em I=0 A e U=4 V em I=2 A. Sua resistência interna aproximada é:",
        "options": [
          "1 Ω",
          "2 Ω",
          "3 Ω",
          "6 Ω"
        ],
        "correctIndex": 0,
        "hint": "A inclinação é −r: calcule −ΔU/ΔI.",
        "solution": "O intercepto permite ε=6 V; com I=2 A, a queda interna é 2 V. Assim, r=(6−4)/2=1 Ω. A resistência é positiva; o gráfico U×I tem inclinação negativa por convenção de descarga."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Receptores elétricos. Força contraeletromotriz e resistência interna. Equação e curva…",
    "objective": "Interpretar motores como receptores de energia elétrica, distinguir força contraeletromotriz de resistência interna, calcular tensão, corrente, potência útil e perdas e analisar gerador e receptor em um mesmo circuito.",
    "prerequisites": [
      "Corrente e tensão em circuitos de corrente contínua",
      "Lei de Ohm e potência elétrica",
      "Geradores elétricos e conversão de energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Receptores, conversão de energia e força contraeletromotriz",
        "explanation": "Um receptor elétrico recebe energia elétrica de um circuito e a transforma em outra modalidade de energia; no caso de um motor, parte se converte em movimento mecânico e parte em aquecimento e outras perdas. Quando gira em campo magnético, o motor pode gerar uma tensão induzida que se opõe ao fornecimento da fonte: é a força contraeletromotriz ε', medida em volts. Num modelo simples de motor em regime estacionário e corrente I entrando no terminal de maior potencial, a tensão nos terminais é U=ε'+rI, em que r representa a resistência interna equivalente. Essa equação contrasta com U=ε−rI para um gerador idealizado em descarga. A parcela ε'I corresponde a potência elétrica convertida internamente em modalidade não térmica no modelo, enquanto rI² representa dissipação resistiva. Não se deve interpretar ε' como uma força física de dimensão newton nem afirmar que ela 'consome' corrente. Quando o eixo de um motor para, a força contraeletromotriz pode cair e a corrente pode aumentar fortemente, motivo pelo qual motores reais necessitam proteção e modelos dinâmicos mais completos.",
        "example": "Um motor em funcionamento recebe U=18 V com ε'=12 V e resistência r=2 Ω. Pela relação U=ε'+rI, a corrente idealizada é I=(18−12)/2=3 A. Sua conversão não térmica é ε'I=36 W e o calor resistivo é 18 W, totalizando 54 W recebidos.",
        "pitfall": "Não use a equação de gerador U=ε−rI para um motor receptor nem suponha que força contraeletromotriz seja 'força' em newtons; o sentido da corrente define a convenção.",
        "steps": [
          "Identifique se o dispositivo fornece ou recebe potência elétrica.",
          "Desenhe a queda rI e a força contraeletromotriz em oposição à alimentação.",
          "Aplique U=ε'+rI apenas sob regime e parâmetros do modelo declarado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Cálculo de corrente, potências e rendimento idealizado",
        "explanation": "Para um motor receptor de força contraeletromotriz ε', resistência interna r e tensão aplicada U, a corrente no regime idealizado vale I=(U−ε')/r, se r>0 e U>ε'. A potência elétrica recebida é Pent=UI. Sem considerar atrito, perdas magnéticas e eletrônicas, a parcela convertida em trabalho mecânico é Pútil≈ε'I; a potência dissipada no enrolamento é PJ=rI². Consequentemente, Pent=Pútil+PJ. Para U=24 V, ε'=18 V e r=2 Ω, I=(24−18)/2=3 A, Pent=72 W, Pútil=54 W e PJ=18 W, o que resulta em rendimento eletromecânico idealizado η=54/72=0,75, isto é, 75%. No motor real o rendimento mecânico do eixo pode ser menor por atrito, ventilação e perdas adicionais. Quando U não supera ε', o dispositivo pode operar em outros regimes, inclusive regenerativo, e a interpretação receptor simples precisa ser revista. Corrente de partida, variações de velocidade e controle PWM não podem ser tratados como estado estacionário de parâmetros fixos sem justificativa.",
        "example": "Um motor recebe U=30 V, ε'=24 V, r=3 Ω: I=(30−24)/3=2 A. Potência de entrada 30×2=60 W, parcela convertida ε'I=48 W e calor rI²=3×4=12 W. O rendimento idealizado da conversão é 48/60=80%, sem incluir atrito.",
        "pitfall": "Não considere o rendimento calculado por ε'/U como medição completa do rendimento real do eixo: atrito, ventilação e perdas magnéticas foram desprezados por hipótese.",
        "steps": [
          "Determine a corrente pela tensão aplicada menos a força contraeletromotriz.",
          "Calcule entrada UI, conversão ε'I e aquecimento rI².",
          "Verifique conservação de potência e esclareça quais perdas foram omitidas."
        ]
      },
      {
        "level": "advanced",
        "title": "Gerador e receptor no mesmo circuito e funcionamento do motor",
        "explanation": "Se um gerador fornece energia a um motor em série com resistor externo, deve-se escrever uma única malha e somar resistências e forças eletromotrizes com sinais apropriados. Para gerador εg=24 V, resistência interna rg=1 Ω, motor com ε'=12 V e rm=2 Ω e resistor externo R=3 Ω, a corrente é I=(εg−ε')/(rg+rm+R)=(24−12)/6=2 A. A tensão terminal do gerador é Ug=εg−rgI=22 V; a tensão terminal do motor é Um=ε'+rmI=16 V; a diferença restante de 6 V está em R, fechando 22=16+6. O gerador transforma 48 W de outra forma de energia no modelo; 2 W se dissipam em rg, 8 W em rm, 12 W em R e 24 W são convertidos no motor, somando 46 W que saem dos terminais do gerador e fechando o balanço completo. Se o motor for impedido de girar, ε' pode cair quase a zero; a corrente aumenta e o regime torna-se diferente, com risco de sobreaquecimento. A análise não substitui especificações de fabricante e proteções reais.",
        "example": "Com εg=24 V, ε'=12 V, rg=1 Ω, rm=2 Ω e R=3 Ω, calcule I=2 A; Ug=22 V, Um=16 V e UR=6 V. Verifique 22=16+6, enquanto εgI=48 W se distribui em 24 W de conversão e 24 W de aquecimento total nas três resistências.",
        "pitfall": "Não some as forças eletromotrizes do gerador e do motor como se atuassem no mesmo sentido: sob a convenção de receptor a força contraeletromotriz se opõe à fonte.",
        "steps": [
          "Desenhe a malha e subtraia a contraeletromotriz da força eletromotriz fornecedora.",
          "Some as resistências em série e calcule corrente e tensões em cada componente.",
          "Feche o balanço de potência e identifique o limite do modelo em partida ou travamento."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um motor idealizado recebe U=20 V, apresenta ε'=12 V e r=2 Ω. A corrente em regime é:",
        "options": [
          "2 A",
          "3 A",
          "4 A",
          "16 A"
        ],
        "correctIndex": 2,
        "hint": "No motor em regime, U=ε'+rI.",
        "solution": "A diferença de tensão disponível para o enrolamento resistivo é 20−12=8 V. Aplicando I=(U−ε')/r=8/2=4 A. Somar as tensões ou usar U=ε'−rI confunde receptor com gerador."
      },
      {
        "level": "intermediate",
        "prompt": "Motor com U=24 V, ε'=18 V, r=2 Ω recebe I=3 A. Qual potência convertida não termicamente no modelo?",
        "options": [
          "18 W",
          "54 W",
          "72 W",
          "6 W"
        ],
        "correctIndex": 1,
        "hint": "A parcela convertida é ε' vezes corrente, não a potência total entregue.",
        "solution": "Pconvertida≈ε'I=18×3=54 W. A potência de entrada é UI=72 W; a diferença de 18 W corresponde à dissipação rI²=2×9. A conversão mecânica real pode ser menor por perdas adicionais."
      },
      {
        "level": "advanced",
        "prompt": "Um gerador εg=24 V e um motor ε'=12 V estão em série com resistências 1 Ω, 2 Ω e 3 Ω. A corrente é:",
        "options": [
          "2 A",
          "4 A",
          "6 A",
          "12 A"
        ],
        "correctIndex": 0,
        "hint": "A tensão motriz líquida é εg−ε', e a resistência total é 6 Ω.",
        "solution": "A força eletromotriz líquida vale 24−12=12 V, e as resistências em série somam 1+2+3=6 Ω. Logo I=12/6=2 A. Isso pressupõe funcionamento estacionário do motor no regime receptor."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Teorias da origem da vida na Terra e hipóteses sobre a evolução do metabolismo energético",
    "objective": "Distinguir hipóteses científicas sobre origem da vida e evolução inicial do metabolismo, interpretar resultados de síntese abiótica e comparar modelos mundo de RNA, fontes hidrotermais e quimiossíntese sem apresentá-los como fatos definitivamente estabelecidos.",
    "prerequisites": [
      "Moléculas orgânicas e reações químicas",
      "Membranas, enzimas e metabolismo celular",
      "Hipóteses científicas, controles e evidências"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Biogênese moderna e origem da vida: perguntas diferentes",
        "explanation": "A biogênese afirma que os organismos observados hoje se originam de outros seres vivos por reprodução, entendimento reforçado por experimentos como os de Pasteur contra a antiga geração espontânea nas condições testadas. Isso não resolve automaticamente a pergunta distinta sobre como sistemas capazes de metabolismo e evolução surgiram na Terra primitiva, antes de existirem organismos reprodutores. A hipótese de evolução química investiga etapas possíveis nas quais compostos simples formaram moléculas orgânicas, redes de reações, compartimentos e sistemas de informação hereditária. Não existe consenso sobre uma sequência completa e comprovada dessas etapas. Também é importante distinguir evidência de hipótese: a existência atual de RNA, proteínas e membranas mostra componentes possíveis, mas não documenta diretamente a primeira célula. A composição atmosférica primitiva, as fontes de energia disponíveis e os ambientes favoráveis são temas de pesquisa, não valores únicos conhecidos com certeza absoluta. A panspermia propõe transporte de materiais ou vida entre corpos celestes, mas não explica por si só o primeiro aparecimento da vida. Avaliações escolares rigorosas devem distinguir o que foi demonstrado em laboratório do que foi inferido sobre o passado remoto.",
        "example": "Pasteur aqueceu caldos nutritivos em frascos apropriados e observou ausência de crescimento microbiano enquanto o acesso de contaminantes era impedido. O resultado enfraqueceu a hipótese de geração espontânea cotidiana, mas não demonstrou nem refutou diretamente processos químicos na Terra anterior aos primeiros seres vivos.",
        "pitfall": "Não confunda a refutação de geração espontânea em caldos com a refutação de toda hipótese de abiogênese primordial: são condições e perguntas científicas diferentes.",
        "steps": [
          "Formule separadamente a origem de organismos atuais e a origem dos primeiros sistemas vivos.",
          "Classifique observações experimentais, inferências históricas e hipóteses ainda em teste.",
          "Evite tratar um modelo de origem como sequência comprovada de eventos."
        ]
      },
      {
        "level": "intermediate",
        "title": "Síntese prebiótica, compartimentos e limites experimentais",
        "explanation": "Experimentos de síntese prebiótica, como o clássico sistema de Miller e Urey, demonstraram que certas misturas simples submetidas a fontes de energia podem formar moléculas orgânicas, entre elas aminoácidos, sem intervenção de células vivas. Os resultados dependem da composição da mistura, do meio, da temperatura e do tipo de energia; não provam que exatamente aquela atmosfera existiu na Terra primitiva nem que moléculas produzidas constituam vida. Outras propostas investigam ambientes hidrotermais submarinos, superfícies minerais catalíticas, ciclos de hidratação e desidratação e transporte extraterrestre de compostos orgânicos. Vesículas formadas por moléculas anfifílicas são candidatas a compartimentos primitivos porque podem concentrar reagentes e separar ambientes químicos, embora uma vesícula isolada não seja necessariamente uma protocélula evolutiva. Em uma comparação de dois reatores, se o experimental contém compostos orgânicos recém-formados e o controle sem fonte energética não, a inferência apoiada é que a fonte contribuiu para reações químicas sob aquelas condições, não que a vida foi gerada. A origem da replicação com hereditariedade continua questão própria.",
        "example": "Imagine dois sistemas químicos semelhantes: um recebe descargas elétricas controladas e outro não. Após análise, detectam-se aminoácidos em quantidades maiores no primeiro. O resultado sustenta uma via possível de síntese abiótica, mas não autoriza concluir que surgiram células, metabolismo completo ou a atmosfera exata do passado.",
        "pitfall": "Não equipare aminoácidos produzidos em laboratório a organismos vivos; é indispensável perguntar por compartimentalização, hereditariedade, transformação energética e seleção.",
        "steps": [
          "Identifique reagentes, fonte energética e controle de cada experimento.",
          "Interprete a formação de moléculas sem atribuir ao sistema propriedades celulares ausentes.",
          "Compare ambientes químicos propostos e explicite limites de extrapolação histórica."
        ]
      },
      {
        "level": "advanced",
        "title": "Mundo de RNA, metabolismo primeiro e evolução dos fluxos de energia",
        "explanation": "A hipótese do mundo de RNA investiga a possibilidade de etapas em que moléculas semelhantes ao RNA armazenavam informação e catalisavam reações: ribozimas existentes demonstram que RNA pode ter atividade catalítica. Ainda há desafios sobre síntese prebiótica dos componentes, estabilidade e autorreplicação suficientemente fiel. Propostas conhecidas como metabolismo primeiro investigam redes químicas auto-organizadas ou ciclos catalíticos que poderiam preceder sistemas genéticos plenamente desenvolvidos, inclusive em gradientes energéticos naturais. A distinção entre heterotrofia e autotrofia inicial envolve diferentes possíveis fontes de carbono e de energia. Organismos quimioautotróficos atuais podem obter energia de reações envolvendo compostos inorgânicos e usar carbono inorgânico para produzir moléculas orgânicas, exemplificando a viabilidade de processos sem luz solar. Contudo, o metabolismo dos organismos atuais não prova que ele tenha sido o primeiro. A fotossíntese oxigênica, responsável por liberar O₂, modificou o ambiente ao longo da história terrestre, mas não deve ser atribuída a todos os primeiros microrganismos. Modelos de origem da vida devem ser avaliados quanto à continuidade das reações, estabilidade dos compartimentos, aquisição de energia e possibilidade de herança com variação.",
        "example": "Compare hipoteticamente dois sistemas: o primeiro contém RNA catalítico que produz cópias imperfeitas e o segundo possui reações químicas sustentadas por gradiente mineral sem moléculas hereditárias. O primeiro explora replicação e seleção, o segundo viabilidade energética; nenhum, isoladamente, constitui comprovação da sequência real de origem da vida.",
        "pitfall": "Não conclua que organismos quimioautotróficos atuais foram necessariamente os primeiros, nem que o RNA já resolva sozinho estabilidade, replicação e metabolismo em ambiente pré-biótico.",
        "steps": [
          "Identifique qual hipótese aborda catálise, energia, herança e compartimentos.",
          "Compare a plausibilidade de fontes de energia antes da fotossíntese oxigênica.",
          "Separe processos observáveis hoje das inferências sobre a história terrestre inicial."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A principal conclusão de experimentos como os de Pasteur com caldos controlados foi que:",
        "options": [
          "A primeira vida surgiu em frascos aquecidos",
          "O RNA foi o primeiro material hereditário",
          "Microrganismos podem aparecer em qualquer caldo estéril sem contaminação",
          "O crescimento observado depende de organismos preexistentes que contaminam o meio"
        ],
        "correctIndex": 3,
        "hint": "Diferencie a pergunta sobre geração espontânea cotidiana da origem primordial da vida.",
        "solution": "Os experimentos mostraram que, nas condições testadas, organismos não surgiram espontaneamente em meios esterilizados protegidos de contaminação. Esse resultado sustenta biogênese cotidiana, mas não reconstrói a origem das primeiras entidades evolutivas."
      },
      {
        "level": "intermediate",
        "prompt": "A síntese de aminoácidos em um experimento com gases e energia demonstra que:",
        "options": [
          "Moléculas orgânicas podem surgir abióticamente em determinadas condições",
          "Uma célula completa foi produzida",
          "A composição atmosférica primitiva ficou comprovada",
          "A seleção natural ocorreu necessariamente no reator"
        ],
        "correctIndex": 0,
        "hint": "O experimento detecta moléculas produzidas, não organismos ou genes funcionais.",
        "solution": "A formação de aminoácidos sem organismos demonstra possibilidade de síntese química abiótica sob condições definidas. Não demonstra vida, metabolismo, replicação hereditária nem comprova que o modelo reproduz exatamente o ambiente da Terra primitiva."
      },
      {
        "level": "advanced",
        "prompt": "A descoberta de ribozimas é especialmente pertinente à hipótese:",
        "options": [
          "Da geração espontânea cotidiana",
          "Do mundo de RNA, que combina informação e catálise",
          "De que todos os seres vivos atuais dispensam proteínas",
          "De que a primeira vida dependia de oxigênio atmosférico abundante"
        ],
        "correctIndex": 1,
        "hint": "Ribozimas são moléculas de RNA capazes de catalisar reações.",
        "solution": "Ribozimas mostram que determinadas moléculas de RNA podem atuar como catalisadores, além de participarem de processos informacionais. Isso apoia a plausibilidade do mundo de RNA, mas não prova que tal etapa ocorreu nem resolve todos os problemas da replicação prebiótica."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "A Declaração Universal dos Direitos Humanos de 1948: seus princípios e trajetória histórica",
    "objective": "Contextualizar a adoção da Declaração Universal dos Direitos Humanos após a Segunda Guerra, interpretar artigos sobre dignidade e educação e distinguir declaração, tratados e implementação histórica dos direitos fundamentais.",
    "prerequisites": [
      "Segunda Guerra Mundial e criação da ONU",
      "Estado, cidadania e igualdade jurídica",
      "Leitura crítica de textos normativos e cronologias"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "1945–1948: direitos humanos no contexto do pós-guerra",
        "explanation": "A Declaração Universal dos Direitos Humanos foi adotada pela Assembleia Geral das Nações Unidas em 10 de dezembro de 1948, em Paris, num cenário marcado por violações massivas de direitos durante a Segunda Guerra Mundial e pelos debates sobre reconstrução internacional. A ONU fora criada em 1945, mas sua fundação não significou que o texto de 1948 já existisse. A elaboração envolveu representantes de diferentes regiões e tradições jurídicas; Eleanor Roosevelt desempenhou papel destacado na Comissão de Direitos Humanos, sem ter produzido sozinha o documento. O artigo 1º afirma igualdade em dignidade e direitos, e o artigo 2º estabelece a não discriminação no gozo dos direitos enunciados. A declaração expressou compromisso normativo de alcance universal, mas não resolveu automaticamente colonialismo, segregação racial, desigualdade de gênero ou conflitos políticos de sua época. A adoção pela Assembleia Geral não tornou a declaração um tratado internacional vinculante da mesma forma que convenções posteriormente ratificadas pelos Estados. Estudar sua história exige separar a data da adoção, o conteúdo dos princípios e o longo processo político de realização concreta.",
        "example": "Organize três marcos: em 1945 foi fundada a ONU; em 1948 a Assembleia Geral adotou a Declaração; em 1966 foram aprovados os dois grandes Pactos Internacionais de Direitos Humanos. A diferença entre os eventos impede afirmar que todos os mecanismos jurídicos nasceram juntos em 1948.",
        "pitfall": "Não atribua a Declaração exclusivamente a uma pessoa nem confunda o documento de 1948, aprovado pela Assembleia Geral, com um tratado automaticamente ratificado por todos os países.",
        "steps": [
          "Situe a experiência da guerra e o nascimento da ONU no tempo.",
          "Diferencie autoria coletiva, adoção na Assembleia Geral e ratificação de tratados.",
          "Relaciona os princípios proclamados às desigualdades persistentes no pós-guerra."
        ]
      },
      {
        "level": "intermediate",
        "title": "Princípios, artigos e leitura de casos concretos",
        "explanation": "A Declaração organiza direitos civis, políticos, econômicos, sociais e culturais como dimensões interdependentes da dignidade humana. O artigo 3º trata de vida, liberdade e segurança pessoal; o artigo 19 consagra liberdade de opinião e expressão; o artigo 26 estabelece direito à educação, com previsão de gratuidade e obrigatoriedade da instrução elementar. Esses dispositivos devem ser lidos em conjunto com o princípio de não discriminação do artigo 2º, e não como autorizações irrestritas para violar direitos alheios. Considere uma estudante impedida de frequentar escola exclusivamente por sua origem étnica: a situação contraria tanto a garantia geral de igualdade quanto a proteção do acesso à educação. Já a censura de opiniões pacíficas exige exame da liberdade de expressão e das condições jurídicas específicas do caso. Uma lista de direitos não é mera relação de benefícios concedidos pelo Estado; ela impõe parâmetros para avaliar ações de instituições e reivindicações sociais. A interpretação histórica exige distinguir o texto da declaração das legislações nacionais, dos mecanismos judiciais e das condições efetivas de acesso aos direitos em cada país.",
        "example": "Uma escola pública recusa matrícula de um aluno por sua religião. Primeiro identifique a diferenciação injustificada, contrária à não discriminação do artigo 2º. Depois relacione a situação ao artigo 26, que protege a educação. O caso envolve dois princípios complementares, não um único direito isolado.",
        "pitfall": "Não reduza direitos humanos à liberdade de expressão ou à educação apenas; uma violação concreta pode atingir simultaneamente igualdade, participação e direitos sociais.",
        "steps": [
          "Localize no texto o direito específico aplicável à situação descrita.",
          "Examine possíveis discriminações e direitos conexos, evitando interpretação isolada.",
          "Diferencie princípio internacional, regra nacional e acesso real ao direito."
        ]
      },
      {
        "level": "advanced",
        "title": "Declaração, pactos, Constituição e efetivação de direitos",
        "explanation": "A Declaração de 1948 influenciou tratados posteriores, constituições nacionais e movimentos sociais, mas a existência de um texto proclamando direitos não significa sua realização automática. Em 1966, a ONU adotou o Pacto Internacional sobre Direitos Civis e Políticos e o Pacto Internacional sobre Direitos Econômicos, Sociais e Culturais, instrumentos com obrigações jurídicas para Estados que deles se tornam partes; sua adoção é evento diferente da entrada em vigor e da adesão de cada país. No Brasil, a Constituição de 1988 consolidou extensa proteção de direitos fundamentais e mecanismos de cidadania no contexto da redemocratização. Entre 1948 e 1988 transcorreram 40 anos, durante os quais houve avanços normativos e permanência de desigualdades. Avaliar direitos humanos requer investigar políticas públicas, tribunais, participação política, violência institucional e acesso desigual à educação e à saúde, e não simplesmente contar leis aprovadas. A universalidade dos direitos não apaga diferenças históricas e culturais; significa que a dignidade não depende de nacionalidade, religião, gênero ou condição social. Estudos históricos devem comparar discurso normativo e práticas concretas com fontes e recortes definidos.",
        "example": "Na linha do tempo, coloque 1948 (Declaração), 1966 (adoção dos Pactos) e 1988 (Constituição brasileira). Entre o primeiro e o último marco há 1988−1948=40 anos. A diferença cronológica ajuda a mostrar que enunciar direitos e desenvolver instrumentos nacionais são processos históricos separados.",
        "pitfall": "Não afirme que a declaração de 1948 substitui constituições ou tratados, nem que a aprovação de uma norma prova o cumprimento universal dos direitos no cotidiano.",
        "steps": [
          "Organize documentos internacionais e nacionais por data, natureza e alcance.",
          "Reconheça a diferença entre norma declaratória e obrigação de tratado ratificado.",
          "Analise evidências de efetivação e violações de direitos após a adoção dos textos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A Declaração Universal dos Direitos Humanos foi adotada:",
        "options": [
          "Pela Assembleia Geral da ONU em 1948",
          "Pelo Congresso brasileiro em 1988",
          "Pelo Conselho da Europa em 1966",
          "Na fundação da ONU em 1945, como tratado ratificado"
        ],
        "correctIndex": 0,
        "hint": "Separe os marcos da criação da ONU e da adoção da Declaração.",
        "solution": "A Assembleia Geral da ONU adotou a Declaração Universal em 10 de dezembro de 1948, em Paris. A fundação da ONU ocorreu em 1945 e não deve ser confundida com a Declaração; o documento também não se tornou um tratado ratificado por todos os países."
      },
      {
        "level": "intermediate",
        "prompt": "Impedir matrícula escolar por religião contraria diretamente quais princípios da Declaração?",
        "options": [
          "Propriedade e circulação apenas",
          "Não discriminação (artigo 2º) e direito à educação (artigo 26)",
          "Somente a liberdade comercial",
          "Apenas o direito ao lazer"
        ],
        "correctIndex": 1,
        "hint": "Identifique o motivo da exclusão e o direito de acesso que foi restringido.",
        "solution": "A exclusão baseada em religião configura tratamento discriminatório e impede o exercício do direito à educação. A situação envolve o artigo 2º, sobre não discriminação, e o artigo 26, sobre educação; direitos devem ser interpretados conjuntamente."
      },
      {
        "level": "advanced",
        "prompt": "Sobre a Declaração de 1948 e os Pactos Internacionais de 1966, é correto afirmar:",
        "options": [
          "Todos foram criados pela Constituição de 1988",
          "A Declaração dispensou qualquer tratado posterior",
          "Os Pactos criaram obrigações para Estados que deles se tornaram partes, enquanto a Declaração é instrumento proclamativo",
          "Os Pactos foram adotados antes da criação da ONU"
        ],
        "correctIndex": 2,
        "hint": "Compare o tipo de documento e a relação entre adoção internacional e ratificação.",
        "solution": "A Declaração é um marco normativo proclamado pela Assembleia Geral; os Pactos adotados em 1966 são tratados que impõem obrigações jurídicas aos Estados-partes. A existência de ambos não assegura automaticamente o respeito concreto aos direitos em todos os territórios."
      }
    ]
  }
];
