import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Kognos autoral, não oficial, revisão e homologação docente pendentes. */
export const provaoDepthBatch35Sciences:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Energia térmica, temperatura e termômetros. Lei zero da termodinâmica",
    "objective": "Distinguir energia interna, temperatura e calor, fundamentar a Lei Zero da Termodinâmica, interpretar termômetros calibrados e resolver situações de equilíbrio térmico com condições de validade explícitas.",
    "prerequisites": [
      "Movimento microscópico das partículas e energia",
      "Conservação de energia em sistemas isolados",
      "Proporções e escalas lineares"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Temperatura, energia interna e a Lei Zero",
        "explanation": "Temperatura caracteriza o estado térmico de um sistema e é uma grandeza que pode ser comparada por meio de termômetros. Não é quantidade de calor armazenada: calor é energia transferida entre sistemas em decorrência de diferença de temperatura, enquanto energia interna reúne contribuições microscópicas de movimento e interação das partículas. Dois corpos com a mesma temperatura podem ter energias internas diferentes porque possuem massas, substâncias e estados físicos distintos. A Lei Zero da Termodinâmica afirma que, se A está em equilíbrio térmico com um sistema C e B também está em equilíbrio térmico com C, então A e B estão em equilíbrio térmico entre si. É esse princípio que permite usar um termômetro como sistema intermediário de comparação. Equilíbrio térmico pressupõe ausência de fluxo líquido macroscópico de calor entre os corpos em contato, não ausência de movimento molecular. Para interpretar um termômetro, é necessário aguardar sua resposta e respeitar a faixa de uso e a calibração. A leitura obtida é uma medição sujeita a incerteza, não uma revelação automática de energia interna ou de quantidade de calor.",
        "example": "Imagine dois recipientes com água a 30 °C: um contém 200 g e outro, 1 kg. Se um termômetro adequado atingir equilíbrio separadamente com cada recipiente, indicará aproximadamente a mesma temperatura. Mas a energia interna total pode diferir porque há quantidades diferentes de matéria. O instrumento compara estado térmico, não massa nem energia armazenada.",
        "pitfall": "Não confunda temperatura igual com energia interna igual. A Lei Zero é um princípio de transitividade do equilíbrio térmico, não uma fórmula para calcular calor transferido.",
        "steps": [
          "Identifique as definições do assunto e separe observação direta de interpretação.",
          "Reproduza o exemplo resolvido, registrando os passos e suas justificativas específicas.",
          "Cheque a resposta com unidades, proporções ou fontes e explique um erro conceitual comum."
        ]
      },
      {
        "level": "intermediate",
        "title": "Calibração termométrica e relações lineares",
        "explanation": "Um termômetro funciona associando uma propriedade mensurável à temperatura, como expansão volumétrica, resistência elétrica ou diferença de potencial em sensores específicos. Para uma propriedade X aproximadamente linear em um intervalo calibrado, pode-se usar (X−X₀)/(X₁₀₀−X₀)=(T−0)/(100−0) quando X₀ e X₁₀₀ forem as leituras correspondentes aos pontos de 0 °C e 100 °C nas condições de referência. A linearidade não vale automaticamente em qualquer faixa: sensores podem apresentar resposta não linear e calibrações exigem correções. A escala Celsius atribui valores em função de uma referência termométrica convencional, enquanto a escala Kelvin expressa temperatura termodinâmica absoluta; variações de 1 kelvin têm a mesma magnitude que variações de 1 grau Celsius. Para converter temperaturas convencionais usa-se T(K)=t(°C)+273,15, não a soma de 273 para uma medição de alta precisão. O zero absoluto não é a temperatura de congelamento da água, e um termômetro não precisa necessariamente usar mercúrio. Medir corretamente significa relacionar um sinal ao intervalo e à unidade da calibração.",
        "example": "Um termômetro experimental marca 2 cm para 0 °C e 7 cm para 100 °C, com comportamento linear nesse trecho. Para uma coluna de 4,5 cm, calcule a fração: (4,5−2)/(7−2)=2,5/5=0,5. Multiplique por 100 °C e obtenha 50 °C. O cálculo usa a hipótese de escala linear entre as referências, não fora dela.",
        "pitfall": "Não converta comprimentos diretamente em graus sem descontar a origem da escala. Uma coluna de 4,5 cm não significa 45 °C se o zero físico corresponde a 2 cm.",
        "steps": [
          "Identifique as grandezas ou evidências do exemplo e as relações aplicáveis.",
          "Reproduza o exemplo resolvido, registrando os passos e suas justificativas específicas.",
          "Cheque a resposta com unidades, proporções ou fontes e explique um erro conceitual comum."
        ]
      },
      {
        "level": "advanced",
        "title": "Troca de energia, equilíbrio térmico e limites do modelo",
        "explanation": "Quando corpos com temperaturas iniciais diferentes entram em contato térmico, pode ocorrer transferência de energia até se aproximarem de uma temperatura comum, desde que o conjunto permaneça em condições que permitam equilíbrio. Para água líquida em temperaturas nas quais o calor específico pode ser aproximado como constante, Q=mcΔT descreve energia térmica trocada sem mudança de fase. Num sistema idealmente isolado com dois porções da mesma substância e sem perdas, Q₁+Q₂=0. Essa igualdade é de energia transferida, não implica que as temperaturas iniciais sejam idênticas ou que as massas se igualem. Se um recipiente absorve calor, ocorre evaporação ou há troca com o ambiente, a temperatura final precisa incluir esses termos. A Lei Zero sustenta a ideia de temperatura comum em equilíbrio, mas o valor numérico da temperatura final vem do balanço energético e das capacidades térmicas. A energia térmica não 'escolhe' fluir do corpo com mais energia interna total para o com menos; o fluxo espontâneo de calor entre corpos em contato se relaciona ao sentido da diferença de temperatura. Deve-se especificar massa, calor específico, isolamento, estado físico e ausência de reações para calcular misturas.",
        "example": "Misturam-se 200 g de água a 80 °C e 300 g de água a 20 °C, sem perdas ou mudança de fase. Como c é igual, 200c(T−80)+300c(T−20)=0; cancele c: 500T−16000−6000=0. Assim T=22000/500=44 °C. O resultado está entre as temperaturas iniciais e depende de isolamento ideal e calor específico aproximadamente constante.",
        "pitfall": "Não calcule temperatura final como média aritmética simples quando as massas forem diferentes. Também não aplique Q=mcΔT sem considerar mudança de fase ou aquecimento do recipiente.",
        "steps": [
          "Delimite sistema, condições experimentais ou hipóteses genéticas antes de calcular.",
          "Reproduza o exemplo resolvido, registrando os passos e suas justificativas específicas.",
          "Cheque a resposta com unidades, proporções ou fontes e explique um erro conceitual comum."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Dois corpos estão separadamente em equilíbrio térmico com o mesmo termômetro C. Segundo a Lei Zero, eles:",
        "options": [
          "Devem ter a mesma massa",
          "Devem estar em equilíbrio térmico um com o outro",
          "Têm necessariamente a mesma energia interna total",
          "Não podem trocar energia com o ambiente"
        ],
        "correctIndex": 1,
        "hint": "Releia o exemplo resolvido correspondente a este nível; confira as hipóteses e descarte alternativas incompatíveis.",
        "solution": "A Lei Zero estabelece a transitividade do equilíbrio térmico: se A e B estão em equilíbrio com C, A e B têm o mesmo estado térmico na comparação. Isso não iguala suas massas ou energias internas totais."
      },
      {
        "level": "intermediate",
        "prompt": "Um termômetro linear marca 2 cm em 0 °C e 7 cm em 100 °C. Qual temperatura corresponde a 4,5 cm?",
        "options": [
          "25 °C",
          "45 °C",
          "50 °C",
          "90 °C"
        ],
        "correctIndex": 2,
        "hint": "Releia o exemplo resolvido correspondente a este nível; confira as hipóteses e descarte alternativas incompatíveis.",
        "solution": "A fração de expansão é (4,5−2)/(7−2)=2,5/5=0,5. Em uma escala linear, essa fração equivale a 50% de 100 °C, ou 50 °C, desde que a calibração permaneça válida no intervalo."
      },
      {
        "level": "advanced",
        "prompt": "Misturam-se 200 g de água a 80 °C com 300 g a 20 °C, sem perdas e com c constante. A temperatura final é:",
        "options": [
          "44 °C",
          "50 °C",
          "60 °C",
          "20 °C"
        ],
        "correctIndex": 0,
        "hint": "Releia o exemplo resolvido correspondente a este nível; confira as hipóteses e descarte alternativas incompatíveis.",
        "solution": "O balanço de calor para a mesma substância fornece T=(200×80+300×20)/(200+300)=22000/500=44 °C. A média ponderada pelas massas substitui a média simples porque as quantidades de água diferem."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Evidências macroscópicas da ocorrência de transformações químicas: alteração de cor,…",
    "objective": "Reconhecer evidências macroscópicas de reações químicas sem confundi-las com provas isoladas, representar transformações por equações balanceadas e aplicar critérios experimentais e estequiométricos.",
    "prerequisites": [
      "Diferenças entre mistura e substância pura",
      "Conservação de massa e representação de fórmulas",
      "Quantidade de matéria, mol e equações balanceadas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Evidências observáveis e limites da inferência",
        "explanation": "Uma transformação química envolve reorganização de átomos e alteração na composição de espécies químicas, preservando os elementos em reações químicas comuns. Sinais macroscópicos possíveis incluem emissão de gás, formação de precipitado, mudança de cor, variação de temperatura e emissão de luz. Entretanto, nenhum desses sinais isoladamente prova que houve reação: bolhas podem surgir na ebulição física de água, a mudança de cor pode acompanhar diluição ou mistura de pigmentos, e a liberação de calor também ocorre em certos processos físicos. A conclusão científica deve relacionar observações aos reagentes, às propriedades das substâncias e a controles experimentais. Um sólido que se forma após misturar soluções pode ser evidência de precipitação, mas também convém investigar solubilidade e concentração. Quando o ferro enferruja, substâncias contendo ferro reagem com oxigênio e água e geram produtos diferentes do metal inicial; o fenômeno não é apenas mudança superficial de cor. No registro de laboratório é importante diferenciar 'observou-se formação de bolhas' de 'identificou-se CO₂': a primeira frase é observação direta, a segunda requer teste ou outra evidência química.",
        "example": "Ao aquecer água limpa, surgem bolhas e vapor, mas, sem decomposição, H₂O continua H₂O: é transformação física. Ao adicionar vinagre a carbonato, bolhas indicam formação de gás por reação e a identificação pode ser reforçada por coleta e teste apropriado. O primeiro sinal visual é semelhante; a interpretação depende de reagentes, conservação e testes adicionais.",
        "pitfall": "Não conclua 'reação química' apenas porque houve bolhas ou cor diferente. Uma mesma evidência visual pode ter causas físicas e químicas distintas.",
        "steps": [
          "Identifique as definições do assunto e separe observação direta de interpretação.",
          "Reproduza o exemplo resolvido, registrando os passos e suas justificativas específicas.",
          "Cheque a resposta com unidades, proporções ou fontes e explique um erro conceitual comum."
        ]
      },
      {
        "level": "intermediate",
        "title": "Equações balanceadas e identificação de produtos",
        "explanation": "Uma equação química representa reagentes e produtos usando símbolos e coeficientes estequiométricos, permitindo comparar quantidades relativas. Para um carbonato reagindo com ácido clorídrico, uma representação é CaCO₃(s)+2 HCl(aq)→CaCl₂(aq)+H₂O(l)+CO₂(g). Contam-se os átomos de cálcio, carbono, oxigênio, hidrogênio e cloro em ambos os lados; o coeficiente 2 diante de HCl é necessário para conservar hidrogênio e cloro. A formação de CO₂ explica bolhas observadas quando o gás é liberado, mas a simples observação das bolhas não prova identidade molecular; testes como reação com água de cal, com controles adequados, podem ajudar a sustentar a interpretação. Os estados físicos também importam, pois CO₂ dissolvido pode não aparecer como bolhas visíveis nas mesmas condições. Equações balanceadas são modelos de proporção entre partículas; não indicam por si só rapidez, rendimento completo ou etapas do mecanismo. Para raciocinar quantitativamente, primeiro balanceie e identifique o reagente limitante, depois relacione os coeficientes aos mols.",
        "example": "Se houver 0,05 mol de CaCO₃ com HCl em excesso, a proporção 1:1 prevê 0,05 mol de CO₂, e a reação demanda 0,10 mol de HCl. Em um modelo de volume molar de 22,4 L/mol nas condições explicitadas de referência, isso equivale a 1,12 L de CO₂; valores reais dependem de pressão, temperatura e dissolução.",
        "pitfall": "Não confunda coeficientes da equação com índices da fórmula: alterar CaCO₃ para CaCO₂ mudaria a substância em vez de balancear a reação.",
        "steps": [
          "Identifique as grandezas ou evidências do exemplo e as relações aplicáveis.",
          "Reproduza o exemplo resolvido, registrando os passos e suas justificativas específicas.",
          "Cheque a resposta com unidades, proporções ou fontes e explique um erro conceitual comum."
        ]
      },
      {
        "level": "advanced",
        "title": "Precipitação, energia e desenho de experimentos",
        "explanation": "Reações de precipitação ocorrem quando espécies presentes em solução formam um composto com baixa solubilidade nas condições do experimento. Misturar soluções contendo Ca²⁺ e CO₃²⁻ pode produzir CaCO₃(s); a equação iônica simplificada Ca²⁺(aq)+CO₃²⁻(aq)→CaCO₃(s) destaca as espécies que formam o sólido. Íons espectadores permanecem em solução e não devem ser confundidos com reagentes consumidos pela equação iônica líquida. A massa do precipitado pode ser prevista por estequiometria quando quantidades e limitações são conhecidas, mas é preciso considerar perdas de filtração, lavagem e secagem para comparar massa teórica e experimental. Variação de temperatura sugere transferência de energia ou processos exotérmicos/endotérmicos, mas medir a mistura e controlar o ambiente são necessários para interpretar calor liberado ou absorvido. Um experimento confiável compara uma condição-teste com controles, registra massa e temperatura e repete medições, sem tomar um único efeito visual como confirmação automática de identidade. Uma boa questão não pergunta apenas 'o que mudou?', mas qual hipótese é compatível com conservação de átomos e as evidências coletadas.",
        "example": "Misture soluções que fornecem 0,10 mol de Ca²⁺ e 0,05 mol de CO₃²⁻. A reação 1:1 consome 0,05 mol de cada e forma no máximo 0,05 mol de CaCO₃. Usando massa molar aproximada de 100 g/mol, a massa teórica do precipitado seco é 5 g; sobram 0,05 mol de Ca²⁺ na solução.",
        "pitfall": "Não interprete massa de precipitado medida sem considerar umidade ou perdas. A produção real pode diferir da previsão ideal mesmo com a equação correta.",
        "steps": [
          "Delimite sistema, condições experimentais ou hipóteses genéticas antes de calcular.",
          "Reproduza o exemplo resolvido, registrando os passos e suas justificativas específicas.",
          "Cheque a resposta com unidades, proporções ou fontes e explique um erro conceitual comum."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual situação comprova menos a ocorrência de uma transformação química quando observada isoladamente?",
        "options": [
          "Formação de nova substância identificada por análise",
          "Bolhas ao aquecer água até sua ebulição",
          "Oxidação de ferro confirmada por novos compostos",
          "Formação de precipitado identificado após mistura de íons"
        ],
        "correctIndex": 1,
        "hint": "Releia o exemplo resolvido correspondente a este nível; confira as hipóteses e descarte alternativas incompatíveis.",
        "solution": "Bolhas na ebulição de água podem indicar apenas vaporização física: a composição continua H₂O. As demais situações incluem identificação de produto novo, condição que sustenta a conclusão de transformação química."
      },
      {
        "level": "intermediate",
        "prompt": "Na reação CaCO₃+2 HCl→CaCl₂+H₂O+CO₂, 0,05 mol de CaCO₃ com ácido em excesso forma teoricamente:",
        "options": [
          "0,10 mol de CO₂",
          "0,025 mol de CO₂",
          "0,05 mol de CO₂",
          "0,50 mol de CO₂"
        ],
        "correctIndex": 2,
        "hint": "Releia o exemplo resolvido correspondente a este nível; confira as hipóteses e descarte alternativas incompatíveis.",
        "solution": "O coeficiente do CaCO₃ e do CO₂ é 1 para cada espécie, logo 0,05 mol de carbonato pode formar 0,05 mol de CO₂. O HCl necessário é 0,10 mol, mas não altera a proporção produto-carbonato."
      },
      {
        "level": "advanced",
        "prompt": "Com 0,10 mol de Ca²⁺ e 0,05 mol de CO₃²⁻, qual massa teórica de CaCO₃ se forma (M=100 g/mol)?",
        "options": [
          "10 g",
          "5 g",
          "0,5 g",
          "15 g"
        ],
        "correctIndex": 1,
        "hint": "Releia o exemplo resolvido correspondente a este nível; confira as hipóteses e descarte alternativas incompatíveis.",
        "solution": "A equação iônica é 1:1. O carbonato é limitante: 0,05 mol reage com 0,05 mol de cálcio e forma 0,05 mol de CaCO₃, correspondente a 0,05×100=5 g de precipitado, antes de perdas experimentais."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Conceitos básicos de Genética; influência do ambiente sobre o genótipo e o fenótipo;…",
    "objective": "Diferenciar gene, alelo, genótipo e fenótipo; interpretar heredogramas e probabilidades mendelianas; analisar como ambiente, penetrância e expressão gênica afetam características observadas.",
    "prerequisites": [
      "DNA e cromossomos homólogos",
      "Meiose e segregação de alelos",
      "Frações e probabilidade de eventos independentes"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Genes, alelos e a interpretação de fenótipos",
        "explanation": "Gene é uma região de DNA associada a produtos funcionais, como RNAs e proteínas, e pode contribuir para processos e características de um organismo. Alelos são variantes de uma região genética; em um locus autossômico, um indivíduo diploide costuma possuir duas cópias alélicas herdadas dos pais. Genótipo refere-se à constituição genética relevante para a análise, enquanto fenótipo descreve características observáveis ou mensuráveis, como pigmentação, atividade enzimática ou estatura. Fenótipo não é uma simples cópia de genótipo: depende do desenvolvimento, de interações entre genes e, em muitos casos, de condições ambientais. A nutrição influencia o crescimento corporal, por exemplo, mas uma mudança temporária de alimentação não altera automaticamente a sequência de DNA germinativa herdada pela pessoa. Dominância é uma relação entre alelos e um fenótipo específico, não superioridade biológica de um alelo. O mesmo genótipo pode produzir fenótipos diferentes em ambientes distintos, e fenótipos semelhantes podem resultar de mecanismos diferentes. Em exercícios, é preciso separar as variáveis hereditárias das observações e declarar quando se adota um modelo mendeliano simplificado.",
        "example": "Considere duas plantas geneticamente idênticas para um locus relacionado ao crescimento. A primeira recebe água suficiente e atinge 35 cm; a segunda enfrenta seca e atinge 20 cm. O fenótipo de altura diferiu apesar do genótipo assumido como igual. Não é possível concluir que a planta menor 'ganhou um alelo de baixa estatura' apenas observando a diferença.",
        "pitfall": "Não confunda fenótipo com genótipo e não atribua toda diferença observável a uma mutação hereditária sem evidências genéticas.",
        "steps": [
          "Identifique as definições do assunto e separe observação direta de interpretação.",
          "Reproduza o exemplo resolvido, registrando os passos e suas justificativas específicas.",
          "Cheque a resposta com unidades, proporções ou fontes e explique um erro conceitual comum."
        ]
      },
      {
        "level": "intermediate",
        "title": "Heredogramas e alelos recessivos",
        "explanation": "Heredogramas representam relações familiares e a distribuição de características ao longo de gerações. Símbolos e conexões podem ajudar a reconhecer padrões de herança, mas a interpretação depende de informações confiáveis sobre parentesco, diagnóstico e critérios fenotípicos. Num modelo simples de caráter autossômico recessivo, pessoas afetadas são aa, enquanto heterozigotos Aa podem não apresentar o fenótipo. Dois genitores não afetados, ambos Aa, podem ter um descendente aa: cada um produz gametas A e a em proporções ideais de 1/2. O cruzamento Aa×Aa resulta em AA, Aa, Aa, aa, com probabilidade de 1/4 de aa para cada gestação, presumindo segregação mendeliana e ausência de seleção. O histórico de irmãos não altera a probabilidade genética por gestação no modelo ideal; probabilidades não garantem uma distribuição exata em famílias pequenas. Um heredograma isolado pode ser compatível com mais de um padrão, especialmente se houver poucos indivíduos, baixa penetrância ou registros incompletos. Não associe um padrão de herança a identidade social ou características pessoais não indicadas pelo problema.",
        "example": "Para pais Aa e Aa, monte os gametas A e a de ambos. O quadro de Punnett tem AA (1), Aa (2) e aa (1), totalizando quatro combinações igualmente prováveis. A probabilidade de uma criança aa é 1/4 ou 25%; se um casal já tem uma criança aa, a probabilidade ideal de outra gestação permanece 25%.",
        "pitfall": "Não conclua que dois pais sem manifestação do caráter não podem ter descendente afetado. Ambos podem ser portadores de um alelo recessivo.",
        "steps": [
          "Identifique as grandezas ou evidências do exemplo e as relações aplicáveis.",
          "Reproduza o exemplo resolvido, registrando os passos e suas justificativas específicas.",
          "Cheque a resposta com unidades, proporções ou fontes e explique um erro conceitual comum."
        ]
      },
      {
        "level": "advanced",
        "title": "Interação gene-ambiente, penetrância e incerteza",
        "explanation": "Algumas características são poligênicas e multifatoriais: muitos loci e fatores ambientais participam de sua expressão. Mesmo para um único genótipo relacionado a doença ou fenótipo específico, penetrância pode ser inferior a 100%, isto é, nem todos os indivíduos portadores expressam o caráter em determinadas condições. Penetrância não é a intensidade da característica; expressividade variável descreve diferenças no grau de manifestação entre indivíduos. Suponha um caráter autossômico recessivo cujo genótipo aa tem 80% de penetrância num contexto definido e os demais genótipos não expressam a condição. Para pais Aa×Aa, a chance de aa é 25%; a probabilidade modelada de manifestação é 0,25×0,80=0,20, ou 20%. Essa conta exige as hipóteses explícitas de penetrância fixada, ausência de outras causas e mesma população-alvo: ela não é válida automaticamente para qualquer doença real. Dados familiares observacionais não isolam ambiente e genética sem desenho de estudo adequado; é preciso evitar determinismo biológico e comunicar incerteza. Em questões de vestibular, identifique se o problema pede genótipo, fenótipo ou manifestação condicionada.",
        "example": "Num cruzamento Aa×Aa com 1/4 de aa, assuma penetrância de 80% para aa e nenhuma manifestação nos demais. Multiplique P(aa)×P(manifestar|aa)=0,25×0,80=0,20. O risco fenotípico é 20%, diferente dos 25% de genótipo aa; a conta depende integralmente das condições inventadas do exercício.",
        "pitfall": "Não aplique automaticamente um risco genético de 25% como probabilidade de doença manifestada quando o enunciado introduz penetrância incompleta.",
        "steps": [
          "Delimite sistema, condições experimentais ou hipóteses genéticas antes de calcular.",
          "Reproduza o exemplo resolvido, registrando os passos e suas justificativas específicas.",
          "Cheque a resposta com unidades, proporções ou fontes e explique um erro conceitual comum."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Dois organismos possuem o mesmo genótipo em um locus, mas crescem em ambientes diferentes. Qual conclusão é válida?",
        "options": [
          "Seus fenótipos podem diferir por efeito ambiental",
          "Seus genótipos necessariamente se tornam diferentes",
          "O fenótipo independe de nutrição e temperatura",
          "Ambos sempre terão a mesma altura final"
        ],
        "correctIndex": 0,
        "hint": "Releia o exemplo resolvido correspondente a este nível; confira as hipóteses e descarte alternativas incompatíveis.",
        "solution": "O fenótipo resulta da interação entre informação genética e condições de desenvolvimento. Sem evidências adicionais, diferenças de crescimento não demonstram alteração nos alelos herdados."
      },
      {
        "level": "intermediate",
        "prompt": "Em herança autossômica recessiva com pais Aa×Aa, a probabilidade de uma criança aa em cada gestação é:",
        "options": [
          "50%",
          "75%",
          "25%",
          "100%"
        ],
        "correctIndex": 2,
        "hint": "Releia o exemplo resolvido correspondente a este nível; confira as hipóteses e descarte alternativas incompatíveis.",
        "solution": "Cada genitor fornece A ou a com chance 1/2. As combinações AA, Aa, Aa e aa são equiprováveis e apenas uma das quatro é aa: 1/4 ou 25%, independentemente da sequência anterior de nascimentos."
      },
      {
        "level": "advanced",
        "prompt": "Para Aa×Aa, com penetrância de 80% restrita a aa e nenhuma manifestação em outros genótipos, qual é o risco fenotípico?",
        "options": [
          "80%",
          "25%",
          "5%",
          "20%"
        ],
        "correctIndex": 3,
        "hint": "Releia o exemplo resolvido correspondente a este nível; confira as hipóteses e descarte alternativas incompatíveis.",
        "solution": "O genótipo aa ocorre com probabilidade 0,25. Como apenas 80% dos indivíduos aa expressam o caráter, o risco de manifestação é 0,25×0,80=0,20, ou 20%, nas hipóteses específicas propostas."
      }
    ]
  }
];
