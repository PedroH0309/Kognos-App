import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Kognos original editorial teaching, non-official, pending specialist teacher review. */
export const provaoDepthBatch37Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Propriedade de substâncias moleculares, iônicas e metálicas",
    "objective": "Comparar propriedades elétricas, mecânicas e térmicas de sólidos iônicos, moleculares e metálicos, justificando a estrutura microscópica e as condições de medição.",
    "prerequisites": [
      "Íons e ligações químicas",
      "Rede cristalina e interações intermoleculares",
      "Condutividade elétrica e temperatura"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Retículos iônicos e mobilidade de cargas",
        "explanation": "Um composto iônico como NaCl sólido consiste em cátions e ânions organizados em uma rede tridimensional. Sua coesão decorre de atrações eletrostáticas que dependem das cargas, distâncias e arranjo cristalino. O fato de conter partículas carregadas não implica conduzir corrente no estado sólido: em condições usuais, os íons ocupam posições relativamente fixas na rede e não fornecem portadores móveis suficientes para condução macroscópica significativa. Ao fundir ou dissolver em água, quando a dissolução ocorre e produz íons livres, a mobilidade aumenta e a solução ou o líquido pode conduzir. A solubilidade, porém, não é universal: carbonato de cálcio é pouco solúvel em água, e não se pode concluir que todo sal forme solução concentrada. Sólidos iônicos costumam ser duros e quebradiços: deslocar planos cristalinos pode aproximar íons de mesma carga e favorecer fratura. A temperatura de fusão depende das interações e da estrutura, não apenas do rótulo 'iônico'. Para prever propriedades, identifique partículas, portadores de carga e estado físico antes de escolher uma regra geral.",
        "example": "Compare NaCl sólido, NaCl fundido e solução aquosa de NaCl. No sólido, íons pouco móveis e condutividade pequena; no fundido, Na⁺ e Cl⁻ podem migrar; em solução, os íons dissolvidos transportam carga. A conclusão exige que haja fusão efetiva ou dissolução, não apenas contato superficial com água.",
        "pitfall": "Não confunda presença de íons com mobilidade de íons; tampouco declare que todo sal se dissolve abundantemente em água.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Substâncias moleculares e forças entre moléculas",
        "explanation": "Substâncias moleculares são formadas por unidades moleculares discretas; dentro de cada molécula, ligações covalentes mantêm os átomos unidos, enquanto interações entre moléculas influenciam fusão, ebulição, viscosidade e solubilidade. Na água líquida, ligações O–H são covalentes, mas a atração entre moléculas inclui ligações de hidrogênio. Ao ferver água em condições comuns, predominantemente separam-se moléculas umas das outras, não se quebram as ligações O–H de cada molécula. O dióxido de carbono molecular pode existir como sólido molecular, e a baixa condutividade de substâncias moleculares puras decorre geralmente da ausência de portadores de carga móveis, não de inexistência de elétrons. Existem exceções quando moléculas reagem com água gerando íons: HCl gasoso é molecular, mas em água ioniza e produz solução condutora. Também há sólidos covalentes de rede, como diamante e quartzo, que não devem ser confundidos com sólidos moleculares apenas por apresentarem ligações covalentes. Compare sempre as unidades estruturais efetivas antes de inferir temperatura de fusão.",
        "example": "No gelo, moléculas H₂O permanecem individualmente constituídas por ligações O–H. Na fusão a 0 °C e pressão próxima de 1 atm, altera-se a organização intermolecular. O número de átomos por molécula permanece 2 H e 1 O; não surge H₂ ou O₂. Isso diferencia mudança física de decomposição química.",
        "pitfall": "Não diga que ebulição rompe todas as ligações covalentes internas nem equipare diamante a um sólido de moléculas isoladas.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Metais, elétrons deslocalizados e limites de classificação",
        "explanation": "Em metais, a ligação metálica pode ser descrita por uma rede de centros atômicos positivos e elétrons eletronicamente deslocalizados, modelo que ajuda a explicar condução elétrica e térmica, brilho e deformação plástica. A descrição não significa que os elétrons estejam completamente livres de interações ou que todos os metais tenham a mesma resistividade. O cobre conduz bem e é utilizado em fios; o aço, uma liga de ferro com carbono e outros constituintes, possui propriedades diferentes do ferro puro. A maleabilidade envolve deslocamentos de defeitos e planos na estrutura cristalina, enquanto a fratura de sólidos iônicos frequentemente se relaciona a repulsões entre íons após deslocamentos. Há metais líquidos, como mercúrio próximo da temperatura ambiente, e substâncias não metálicas que conduzem em circunstâncias específicas, como grafite. Portanto, nenhuma característica isolada define perfeitamente a classe de ligação. Para avaliar uma amostra desconhecida, combine observações de condução no sólido, no fundido e em solução, fusibilidade, estrutura e comportamento mecânico; classifique com grau de confiança e reconheça misturas e materiais compostos.",
        "example": "Uma amostra X conduz corrente no estado sólido e pode ser laminada sem fraturar facilmente; uma amostra Y é quebradiça e conduz somente quando fundida. X é compatível com metal e Y com sólido iônico, mas o diagnóstico exige testes adicionais porque grafite e outros materiais podem compartilhar propriedades isoladas.",
        "pitfall": "Não use brilho como prova conclusiva de ligação metálica nem suponha que todo material covalente seja isolante em todas as condições.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que NaCl sólido conduz pouco, embora contenha íons?",
        "options": [
          "Porque não há partículas carregadas no cristal",
          "Porque os íons não possuem mobilidade suficiente na rede sólida",
          "Porque os íons viram moléculas de água",
          "Porque a carga total de cada íon é zero"
        ],
        "correctIndex": 1,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "O sólido tem íons carregados, mas presos em posições cristalinas, sem transporte macroscópico eficiente de carga. Ao fundir ou dissolver, a mobilidade dos íons pode permitir condução."
      },
      {
        "level": "intermediate",
        "prompt": "Quando a água ferve, o processo dominante é:",
        "options": [
          "Quebra das ligações covalentes O–H",
          "Formação de oxigênio molecular",
          "Separação de moléculas por superação de interações intermoleculares",
          "Transformação de hidrogênio em hélio"
        ],
        "correctIndex": 2,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Na ebulição, moléculas H₂O passam à fase gasosa e a organização intermolecular muda. As ligações covalentes O–H de cada molécula permanecem em condições comuns."
      },
      {
        "level": "advanced",
        "prompt": "Qual conjunto é mais compatível com um metal típico?",
        "options": [
          "Boa condução no sólido e possibilidade de deformação plástica",
          "Condução somente quando dissolvido e fratura iônica",
          "Moléculas discretas sem portadores e fusão sempre abaixo de 0 °C",
          "Ausência absoluta de elétrons deslocalizados"
        ],
        "correctIndex": 0,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Metais como cobre exibem condução elétrica no sólido e podem ser deformados devido à estrutura eletrônica e cristalina. A classificação requer cautela porque propriedades isoladas têm exceções."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Escalas termométricas. As escalas Celsius, Fahrenheit e Kelvin. Relação matemática entre elas",
    "objective": "Converter temperaturas e intervalos entre Celsius, Fahrenheit e Kelvin, distinguir zero absoluto e validar relações lineares por pontos fixos.",
    "prerequisites": [
      "Temperatura e equilíbrio térmico",
      "Equação de primeiro grau",
      "Diferença entre temperatura e variação térmica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Construção de escalas e pontos de referência",
        "explanation": "Escalas termométricas atribuem números a estados térmicos segundo uma convenção de calibração e uma grandeza física mensurável. Na escala Celsius usual, a água pura à pressão atmosférica de referência congela próximo de 0 °C e entra em ebulição próximo de 100 °C; essas temperaturas dependem de pressão e pureza, portanto são referências escolares aproximadas e não substituem definições metrológicas modernas. Na escala Fahrenheit, os pontos correspondentes são aproximadamente 32 °F e 212 °F, uma diferença de 180 graus contra 100 graus Celsius. Como as escalas são lineares, cada variação de 5 °C equivale a 9 °F, mas o ponto zero é deslocado. A relação F=(9/5)C+32 combina inclinação e intercepto; ignorar o termo 32 só é permitido ao comparar variações, não temperaturas absolutas. Uma temperatura de 0 °C não significa ausência de energia microscópica. Para validar uma conversão, teste os dois pontos de referência e verifique se o resultado é fisicamente plausível. Um termômetro pode apresentar erro de calibração mesmo que sua escala seja bem definida, então diferencie escala e instrumento.",
        "example": "Para converter 20 °C, aplique F=(9/5)×20+32=36+32=68 °F. Confirme com 0 °C→32 °F e 100 °C→212 °F. Se um cálculo para 20 °C resultar em 36 °F, faltou o deslocamento de 32 unidades.",
        "pitfall": "Não use F=1,8C sem o termo de deslocamento para temperaturas; a expressão simples só vale para diferenças ΔF=1,8ΔC.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Kelvin e temperatura absoluta",
        "explanation": "A escala kelvin é a unidade de temperatura termodinâmica do SI, com zero associado ao limite inferior da temperatura termodinâmica. Para as conversões escolares entre Celsius e kelvin, utiliza-se T(K)=t(°C)+273,15; a diferença de uma unidade kelvin corresponde exatamente à diferença de um grau Celsius. Assim, 25 °C equivalem a 298,15 K, mas uma elevação de 25 °C corresponde a uma variação de 25 K, não 298,15 K. Temperaturas absolutas em kelvin são necessárias em leis como a dos gases ideais e a potência radiativa de Stefan–Boltzmann; substituir Celsius nesses modelos produz previsões incorretas. Zero kelvin não significa que toda descrição quântica de movimento desapareça, e a escala não permite simplesmente afirmar que um objeto a 40 °C é duas vezes mais quente que um a 20 °C. Para razões de temperatura em relações físicas específicas, use kelvin e verifique quais grandezas são mantidas constantes. Uma temperatura Celsius negativa pode corresponder a uma temperatura termodinâmica positiva.",
        "example": "Converta −10 °C: T=−10+273,15=263,15 K. Se um gás ideal mantiver volume e quantidade de matéria constantes e passar de 300 K para 330 K, P₂/P₁=330/300=1,10, aumento de 10%; não calcule a razão com 26,85 °C e 56,85 °C.",
        "pitfall": "Não some 273,15 a variações de temperatura e não substitua kelvin por Celsius em relações proporcionais de gases ideais.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Conversões inversas e intervalos térmicos",
        "explanation": "Para converter Fahrenheit em Celsius, isole C na equação F=(9/5)C+32: C=(5/9)(F−32). A ordem é essencial: primeiro subtraia o deslocamento, depois multiplique pelo fator de escala. Para intervalos, o deslocamento desaparece, de modo que ΔF=(9/5)ΔC e ΔK=ΔC. Um aquecimento de 10 °C corresponde a aumento de 18 °F e 10 K, independentemente da temperatura inicial. A leitura de 98,6 °F equivale a 37 °C pelo modelo escolar; não é correto tratá-la como 98,6 °C. Em medições, precisão e algarismos significativos importam: 273,15 é o deslocamento exato entre escalas, mas um termômetro com resolução de 1 °C não passa a medir centésimos de kelvin só porque o cálculo produz decimais. Uma verificação dimensional ajuda: Celsius e Fahrenheit são valores de escalas com origens diferentes; diferenças e valores absolutos têm usos distintos. Em aplicações científicas, escolha a unidade exigida pela equação, explicite a conversão e apresente a precisão compatível com os dados.",
        "example": "Uma variação térmica de 45 °F corresponde a ΔC=(5/9)×45=25 °C e ΔK=25 K. Já a temperatura de 45 °F corresponde a C=(5/9)(45−32)=65/9≈7,22 °C. O mesmo número Fahrenheit gera resultados diferentes porque intervalo e leitura absoluta são operações distintas.",
        "pitfall": "Não aplique a subtração de 32 a intervalos nem confunda 45 °F de temperatura com aumento de 45 °F.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quanto vale 20 °C na escala Fahrenheit?",
        "options": [
          "36 °F",
          "68 °F",
          "52 °F",
          "293,15 °F"
        ],
        "correctIndex": 1,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Use F=1,8×20+32=68 °F. O termo +32 é indispensável para converter uma leitura absoluta; sem ele o resultado representaria apenas o intervalo correspondente a 20 °C."
      },
      {
        "level": "intermediate",
        "prompt": "Uma temperatura de −10 °C corresponde a:",
        "options": [
          "−283,15 K",
          "10 K",
          "263,15 K",
          "273,15 K"
        ],
        "correctIndex": 2,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "A conversão entre Celsius e kelvin é T=t+273,15. Para −10 °C, T=263,15 K, uma temperatura absoluta positiva, embora o valor Celsius seja negativo."
      },
      {
        "level": "advanced",
        "prompt": "Um aquecimento de 25 °C corresponde a qual aumento Fahrenheit?",
        "options": [
          "45 °F",
          "77 °F",
          "13,9 °F",
          "298,15 °F"
        ],
        "correctIndex": 0,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Para intervalos, o deslocamento entre origens cancela: ΔF=(9/5)ΔC=(9/5)×25=45 °F. A fórmula com +32 serve para temperaturas, não para variações."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Ausência de dominância, alelos letais e alelos múltiplos (polialelia)",
    "objective": "Resolver cruzamentos com dominância incompleta, codominância, alelos letais e polialelia, distinguindo proporções genotípicas e fenótipos entre descendentes viáveis.",
    "prerequisites": [
      "Segregação mendeliana",
      "Genótipo e fenótipo",
      "Probabilidade e quadro de Punnett"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Dominância incompleta e codominância",
        "explanation": "Dominância incompleta ocorre quando o heterozigoto apresenta fenótipo intermediário em relação aos homozigotos, em um contexto definido. Um exemplo didático é a cor de flores de certas linhagens: RR vermelha, rr branca e Rr rosa, desde que o sistema genético descrito corresponda à espécie e ao cruzamento em questão. O cruzamento Rr×Rr gera genótipos RR, Rr, Rr e rr, na razão 1:2:1; se cada genótipo tem fenótipo distinto, a razão fenotípica também é 1:2:1, diferentemente da dominância completa clássica 3:1. Na codominância, os dois produtos alélicos podem manifestar-se de modo detectável no heterozigoto, como ocorre com antígenos A e B no sistema ABO. Codominância não significa que os alelos 'se misturam' nem que todos os fenótipos de heterozigotos sejam intermediários. A expressão fenotípica depende do nível de observação e das interações moleculares. É indispensável nomear os alelos, identificar o heterozigoto e distinguir proporção genotípica de proporção fenotípica.",
        "example": "Em flores com dominância incompleta, Rr rosa × Rr rosa: gametas R e r de cada progenitor. Punnett: RR (vermelha), Rr (rosa), rR (rosa), rr (branca). Probabilidades: 25% vermelha, 50% rosa, 25% branca, assumindo segregação mendeliana e sobrevivência igual.",
        "pitfall": "Não interprete rosa como prova de mistura irreversível dos alelos; a geração seguinte pode recuperar ambos os fenótipos homozigotos.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Alelos letais e condicionamento à sobrevivência",
        "explanation": "Um alelo pode afetar a viabilidade de determinado genótipo, produzindo proporções observadas diferentes das previstas ao considerar apenas a fecundação. No exemplo escolar de alelo dominante para pelagem amarela em camundongos que é letal em homozigose, dois heterozigotos Aa×Aa geram concepções AA, Aa, Aa e aa, em proporção 1:2:1. Se AA não sobrevive até o momento de observação, entre os descendentes vivos restam 2 Aa para 1 aa, proporção 2:1. O alelo pode ser dominante para cor e recessivo quanto à letalidade, mostrando que 'dominante' não é propriedade absoluta de um alelo independente do caráter analisado. A probabilidade de um filhote vivo ser Aa é 2/3, não 1/2, porque o universo amostral mudou. É necessário explicitar em que estágio ocorre a letalidade e se os genótipos viáveis possuem chances iguais de sobreviver. Sem essas hipóteses, uma razão 2:1 pode ter outras explicações, como amostragem pequena ou seleção ambiental.",
        "example": "No cruzamento Aa×Aa, quatro combinações equiprováveis: AA 1/4 (letal), Aa 1/2 (vivo), aa 1/4 (vivo). A fração de nascimentos viáveis é 3/4. Entre vivos, P(Aa|vivo)=(1/2)/(3/4)=2/3. Esse cálculo condiciona a probabilidade à sobrevivência.",
        "pitfall": "Não responda 50% para a proporção de Aa entre sobreviventes; 50% é a frequência entre zigotos antes de excluir o genótipo letal.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Polialelia e expressão em populações",
        "explanation": "Polialelia significa a existência de mais de duas variantes alélicas de um mesmo locus na população, embora cada indivíduo diploide carregue normalmente até duas variantes desse locus. O sistema ABO humano apresenta três alelos principais no modelo escolar: Iᴬ, Iᴮ e i. Iᴬ e Iᴮ são codominantes entre si e cada um domina i na expressão dos antígenos correspondentes. Assim, o fenótipo A pode corresponder a IᴬIᴬ ou Iᴬi; B a IᴮIᴮ ou Iᴮi; AB a IᴬIᴮ; O a ii. Um cruzamento Iᴬi × Iᴮi produz quatro genótipos equiprováveis, IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B) e ii (O). A existência de três alelos na população não significa que um indivíduo possua três alelos simultaneamente. Para analisar casos reais de transfusão, o sistema ABO não basta: compatibilidade exige considerar também Rh e outros antígenos, além de procedimentos clínicos específicos. O modelo escolar de herança não substitui exames laboratoriais de tipagem sanguínea.",
        "example": "No cruzamento Iᴬi×Iᴮi, gametas do primeiro: Iᴬ e i; do segundo: Iᴮ e i. As combinações são IᴬIᴮ, Iᴬi, Iᴮi, ii, cada uma com 25%. Fenótipos AB, A, B e O aparecem em 1:1:1:1 sob segregação mendeliana simples.",
        "pitfall": "Não afirme que cada pessoa carrega três alelos ABO nem que o fenótipo A identifica necessariamente um único genótipo.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Flores Rr rosas em dominância incompleta são cruzadas entre si. Qual a proporção esperada de flores rosas?",
        "options": [
          "25%",
          "50%",
          "75%",
          "100%"
        ],
        "correctIndex": 1,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Rr×Rr produz RR, Rr, Rr e rr. Apenas os dois heterozigotos são rosas, portanto 2/4=50%. A razão fenotípica completa é 1 vermelha:2 rosas:1 branca."
      },
      {
        "level": "intermediate",
        "prompt": "Em Aa×Aa, AA é letal e Aa e aa sobrevivem. Entre descendentes vivos, a fração Aa é:",
        "options": [
          "1/4",
          "1/2",
          "2/3",
          "3/4"
        ],
        "correctIndex": 2,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Entre zigotos, Aa ocorre em 1/2 e a sobrevivência total é 3/4. Condicionando ao grupo vivo, (1/2)/(3/4)=2/3; a razão dos sobreviventes é 2 Aa para 1 aa."
      },
      {
        "level": "advanced",
        "prompt": "Pais Iᴬi e Iᴮi podem ter qual distribuição fenotípica ABO no modelo mendeliano simples?",
        "options": [
          "25% A, 25% B, 25% AB, 25% O",
          "50% AB e 50% O",
          "75% A e 25% B",
          "100% AB"
        ],
        "correctIndex": 0,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Os gametas Iᴬ/i e Iᴮ/i geram IᴬIᴮ, Iᴬi, Iᴮi e ii, cada um com probabilidade 1/4. Assim os quatro fenótipos AB, A, B e O são possíveis em partes iguais."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Feudalismo e mundo feudal",
    "objective": "Explicar relações de dependência, senhorio, trabalho camponês e diversidade medieval, evitando equiparar feudalismo a uma estrutura homogênea ou universal.",
    "prerequisites": [
      "Europa ocidental pós-romana",
      "Fontes medievais e cronologia",
      "Terra, trabalho e poder político"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Senhorio, terras e trabalho camponês",
        "explanation": "Na Europa ocidental medieval, formas de domínio senhorial organizavam o acesso à terra, obrigações de trabalho, pagamentos e jurisdição em contextos locais variados. Um senhorio podia incluir parcelas cultivadas por camponeses, reservas de exploração senhorial, florestas e instalações de uso comum, mas a composição diferia conforme região e época. Camponeses livres e dependentes não possuíam exatamente os mesmos direitos e deveres, e a servidão não se confunde automaticamente com escravidão: ambas envolvem coerção, porém têm estatutos e formas de controle historicamente distintos. Obrigações como corveias (dias de trabalho) e prestações em produtos aparecem em certos documentos, mas não se pode supor que todos os camponeses medievais cumprissem a mesma taxa. A produção agrícola dependia de técnicas, clima, redes de troca e decisões coletivas. A imagem de uma economia completamente isolada é equivocada: mercados e circulação existiam, embora sua importância variasse. A análise deve perguntar quem possuía direitos sobre terra e trabalho e quais mecanismos de negociação e resistência estavam disponíveis.",
        "example": "Em um registro hipotético, uma família trabalha três dias por semana na reserva do senhor e cultiva sua parcela nos demais dias. Em quatro semanas regulares, a obrigação soma 3×4=12 dias, sem incluir feriados ou variações sazonais. O cálculo ilustra corveia específica, não uma regra universal para toda a Idade Média.",
        "pitfall": "Não identifique todo camponês como servo nem trate qualquer prestação de trabalho como escravidão idêntica à de outras épocas.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Vassalagem, poder e relações políticas",
        "explanation": "Vassalagem descreve relações pessoais de compromisso entre membros de elites em determinadas sociedades medievais, frequentemente envolvendo juramentos, proteção, serviços e concessões de benefícios. O termo feudo pode designar diferentes tipos de direitos e bens segundo o contexto documental; não corresponde sempre a uma propriedade de terra plenamente independente. É essencial separar vassalagem entre elites de dependência camponesa no senhorio, pois não são a mesma relação. A descentralização do poder político em partes da Europa medieval também não significou ausência de reis, leis, cidades ou instituições eclesiásticas. Monarcas negociavam com nobres, autoridades religiosas e comunidades, e a intensidade do controle central mudou ao longo dos séculos. A Igreja latina exercia influência cultural e institucional significativa em várias regiões, mas havia divergências, disputas de investidura e pluralidade religiosa. O historiador precisa verificar o tipo de fonte: um juramento normativo indica obrigações idealizadas, não prova que todos os acordos fossem cumpridos. Comparar dois territórios sem observar século e instituições produz generalizações frágeis.",
        "example": "Compare dois documentos fictícios: um juramento de fidelidade de um nobre e um registro de trabalho de camponeses. O primeiro permite investigar compromissos políticos de vassalagem; o segundo informa obrigações econômicas senhoriais. Classifique sujeitos, deveres e natureza da fonte antes de concluir que representam uma única relação.",
        "pitfall": "Não confunda vassalo com servo: vassalagem envolve compromissos entre elites, enquanto dependência camponesa refere-se a terra, produção e obrigações senhoriais.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Transformações medievais e crítica do modelo único",
        "explanation": "A expressão feudalismo é uma categoria historiográfica debatida: alguns autores a usam para articular relações políticas, sociais e econômicas, enquanto outros preferem estudar senhorios, vínculos e instituições separadamente para evitar um modelo excessivamente uniforme. Entre os séculos XI e XIII, em várias regiões da Europa ocidental, houve expansão agrícola, crescimento populacional e urbano e ampliação de circuitos comerciais, processos que não apagaram imediatamente a autoridade senhorial. Crises demográficas, conflitos e epidemias nos séculos XIV e XV transformaram relações de trabalho e condições de negociação de maneira desigual. A Peste Negra, por exemplo, reduziu populações em muitas regiões e alterou oferta de trabalho, mas seus efeitos jurídicos e econômicos não foram idênticos em toda a Europa. Também é anacrônico aplicar o esquema do senhorio europeu a sociedades islâmicas, africanas ou asiáticas como se fossem cópias do mesmo sistema. Para estudar mudança histórica, compare registros de renda, normas, contratos e fontes arqueológicas de períodos diferentes, reconhecendo continuidade e ruptura. O rótulo só é útil quando esclarece, em vez de ocultar, diferenças concretas.",
        "example": "Suponha dois inventários de um mesmo senhorio, um de 1200 e outro de 1400: o primeiro registra pagamentos em produtos e o segundo inclui mais pagamentos monetários. Isso sugere mudança na forma de prestação, mas não demonstra sozinho desaparecimento de dependência; seria necessário verificar contratos, obrigações e poder jurisdicional.",
        "pitfall": "Não declare que o comércio medieval inexistia ou que o crescimento urbano encerrou de imediato todas as relações senhoriais.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual descrição corresponde melhor à corveia em determinados senhorios medievais?",
        "options": [
          "Voto popular em assembleia",
          "Prestação obrigatória de dias de trabalho ao senhor",
          "Troca internacional de moedas",
          "Tributo pago exclusivamente por reis"
        ],
        "correctIndex": 1,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "A corveia era uma forma de obrigação de trabalho em certos senhorios. Sua duração e aplicação variavam conforme região, época e estatuto camponês; não descreve universalmente toda atividade agrícola medieval."
      },
      {
        "level": "intermediate",
        "prompt": "Qual distinção é historicamente adequada?",
        "options": [
          "Vassalo e servo são sinônimos exatos",
          "Vassalagem é sempre uma forma de escravidão atlântica",
          "Vassalagem entre elites difere de obrigações camponesas no senhorio",
          "Servidão significa ausência de qualquer produção agrícola"
        ],
        "correctIndex": 2,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Vassalagem tratava de compromissos políticos e pessoais entre elites, enquanto a dependência senhorial camponesa envolvia acesso à terra, trabalho e prestações. Confundir ambas obscurece sujeitos e instituições."
      },
      {
        "level": "advanced",
        "prompt": "Por que 'feudalismo' deve ser empregado com cautela?",
        "options": [
          "Porque relações medievais variaram entre regiões e períodos e o conceito é debatido",
          "Porque não havia qualquer autoridade política medieval",
          "Porque o comércio desapareceu totalmente até 1500",
          "Porque toda a Europa tinha exatamente as mesmas obrigações"
        ],
        "correctIndex": 0,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "O conceito pode ajudar a organizar o estudo, mas seu uso uniforme apaga diferenças de senhorios, vínculos e instituições. A historiografia debate sua abrangência e exige atenção às fontes e à cronologia."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topicStart": "Cartografia",
    "objective": "Interpretar escalas cartográficas, projeções, coordenadas e distorções, distinguindo cálculos métricos de escolhas políticas na representação espacial.",
    "prerequisites": [
      "Razão e proporção",
      "Latitude e longitude",
      "Leitura de legendas e orientação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Escala numérica e distância real",
        "explanation": "Escala cartográfica é a razão entre uma distância medida no mapa e a distância correspondente no terreno, desde que ambas sejam expressas na mesma unidade e que a representação seja adequada à região analisada. Na escala 1:100 000, um centímetro no mapa corresponde a 100 000 centímetros no terreno, ou um quilômetro. Para calcular, converta unidades antes de multiplicar: 3 cm na carta correspondem a 300 000 cm, isto é, 3 km. Uma escala 1:25 000 é maior que 1:100 000, pois representa uma área menor com maior detalhe para a mesma folha. O denominador maior indica maior redução, não mapa 'maior'. Em mapas digitais, a escala exibida pode mudar com zoom, tamanho da tela e resolução; por isso barras gráficas e metadados devem ser interpretados no contexto de visualização. Distâncias sobre terreno acidentado diferem de distâncias horizontais projetadas, e medir estradas sinuosas por segmento reto subestima seu comprimento. A escala não elimina distorções decorrentes da projeção nem garante precisão superior à qualidade dos dados originais.",
        "example": "Numa carta 1:50 000, dois pontos distam 4 cm. Distância horizontal aproximada: 4×50 000=200 000 cm=2 000 m=2 km. A conta vale para a representação local e exige que a impressão não tenha sido redimensionada sem atualizar a escala.",
        "pitfall": "Não inverta o denominador: 1:25 000 tem escala maior que 1:100 000 e costuma permitir mais detalhe.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Coordenadas e orientação terrestre",
        "explanation": "Latitude é a distância angular de um ponto ao Equador, de 0° a 90° norte ou sul; longitude é o ângulo em relação ao meridiano de Greenwich, de 0° a 180° leste ou oeste. A combinação de latitude e longitude localiza posições na superfície terrestre em um sistema de referência geodésico, mas não informa por si só altitude ou endereço. Paralelos unem pontos de mesma latitude, enquanto meridianos unem pontos de mesma longitude; eles não são equivalentes a linhas retas paralelas em qualquer mapa. Para interpretar 23° S, 46° O, identifique hemisfério sul e oeste antes de tentar localizar a região. Coordenadas geográficas devem ser distinguidas de coordenadas planas como UTM, que utilizam zonas e unidades métricas. Um GPS fornece posição estimada com incerteza dependente de sinais, obstruções e condições de medição; portanto, vários aparelhos podem indicar valores próximos, não idênticos. Na leitura de mapas, norte geográfico, norte magnético e norte de quadrícula podem diferir, especialmente em aplicações de navegação precisa.",
        "example": "Um ponto A está em 10° S, 40° O e um ponto B em 10° N, 40° O. Ambos compartilham longitude, portanto estão no mesmo meridiano, mas em hemisférios latitudinais opostos. O raciocínio não permite deduzir que a distância real seja exatamente 20 km: graus são unidades angulares.",
        "pitfall": "Não interprete 20° de diferença angular como 20 quilômetros e não confunda longitude oeste com latitude sul.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Projeções, áreas e escolhas de representação",
        "explanation": "Transformar a superfície curva da Terra em um plano requer projeções cartográficas, que inevitavelmente produzem distorções de área, forma, distância ou direção em diferentes regiões. A projeção de Mercator preserva ângulos locais, sendo conforme, mas exagera áreas de altas latitudes; ela não é apropriada para comparar diretamente o tamanho de países pelo desenho visual. Projeções equivalentes preservam proporções de área, embora distorçam formas, e projeções equidistantes preservam certas distâncias especificadas, não todas as distâncias possíveis. Não existe uma projeção plana que preserve simultaneamente todas as propriedades de toda a superfície terrestre. O propósito do mapa deve orientar a escolha: navegação, estatística populacional, planejamento regional e comparação de áreas demandam critérios distintos. Cores, classes, limites administrativos e cortes de legenda também influenciam a leitura de mapas temáticos; uma escala cromática pode enfatizar diferenças pequenas ou esconder heterogeneidade interna. O leitor deve avaliar fonte, data, sistema de referência, escala, projeção e variável representada antes de inferir relações causais a partir de padrões espaciais.",
        "example": "Para comparar áreas continentais, prefira um mapa equivalente em vez de inferir tamanhos de uma projeção de Mercator. Observe que a Groenlândia parece enorme em Mercator em relação à África, mas sua área real é muito menor. A comparação exige dados de área e projeção adequada.",
        "pitfall": "Não conclua que regiões próximas aos polos são proporcionalmente gigantes só porque aparecem ampliadas em Mercator.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Numa carta de escala 1:50 000, 4 cm representam aproximadamente:",
        "options": [
          "200 m",
          "2 km",
          "20 km",
          "200 km"
        ],
        "correctIndex": 1,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "A distância real é 4×50 000=200 000 cm. Convertendo 100 000 cm por quilômetro, obtêm-se 2 km, assumindo escala impressa válida e medição horizontal."
      },
      {
        "level": "intermediate",
        "prompt": "Dois pontos com longitude 40° O e latitudes 10° N e 10° S compartilham:",
        "options": [
          "O mesmo paralelo",
          "A mesma altitude",
          "O mesmo meridiano",
          "O mesmo hemisfério norte"
        ],
        "correctIndex": 2,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Longitude igual significa pertencimento ao mesmo meridiano, independentemente da latitude. Os pontos estão em hemisférios opostos quanto ao Equador, e a coordenada não informa altitude."
      },
      {
        "level": "advanced",
        "prompt": "Qual projeção é mais adequada quando a prioridade é comparar áreas de regiões?",
        "options": [
          "Uma projeção equivalente",
          "Qualquer projeção conforme, sem verificar distorções",
          "Mercator obrigatoriamente",
          "Uma fotografia sem escala"
        ],
        "correctIndex": 0,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Projeções equivalentes preservam proporcionalidade de áreas e são adequadas à comparação de extensão territorial. Projeções conformes preservam ângulos locais, mas podem distorcer muito as áreas."
      }
    ]
  }
];
