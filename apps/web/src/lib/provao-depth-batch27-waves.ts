import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original, não oficial, sem homologação docente. */
export const provaoDepthBatch27Waves:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Propagação de um pulso em meios unidimensionais. Lei de Taylor. Ondas planas e esféricas",
    "objective": "Descrever a propagação e reflexão de pulsos em cordas, calcular a velocidade pela lei de Taylor e comparar intensidade e geometria de frentes de onda planas e esféricas, com hipóteses físicas explícitas.",
    "prerequisites": [
      "Força e unidades do sistema internacional",
      "Raiz quadrada e proporções",
      "Ondas, frequência e energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Lei de Taylor para perturbações em corda",
        "explanation": "Um pulso é uma perturbação localizada que se move por um meio, transmitindo energia sem transportar continuamente a matéria ao longo de todo o percurso. Em uma corda tensionada horizontalmente, os pontos da corda se deslocam transversalmente enquanto a perturbação percorre sua extensão. Sob hipóteses de corda flexível, homogênea, tensão constante T e pequenas deformações, a rapidez das perturbações transversais obedece à lei de Taylor: v=√(T/μ). A densidade linear μ é a massa dividida pelo comprimento, em kg/m; não é densidade volumétrica. Como a unidade de força é kg·m/s², a grandeza T/μ tem unidade m²/s², permitindo obter v em m/s. Se a tensão quadruplica mantendo μ, v dobra, pois a relação depende da raiz quadrada. Se a densidade linear quadruplica com T fixa, v cai à metade. No regime ideal de pequenas amplitudes, a velocidade não depende da altura do pulso. Essa lei não deve ser estendida sem correções a cordas rígidas ou muito deformadas, pois o modelo despreza flexão e comportamento não linear.",
        "example": "Uma corda de 20 m possui massa 0,40 kg, logo μ=0,40/20=0,020 kg/m. Sob tensão de 80 N, v=√(80/0,020)=√4000≈63,2 m/s. A análise dimensional dá √[(kg·m/s²)/(kg/m)]=m/s, confirmando a unidade.",
        "pitfall": "Não substitua μ por massa total e não confunda a tensão, expressa em newtons, com uma massa suspensa, expressa em quilogramas.",
        "steps": [
          "Calcule μ em kg/m a partir de m e L.",
          "Aplique v=√(T/μ) com tensão em newtons.",
          "Confira dimensão e limites da corda ideal."
        ]
      },
      {
        "level": "intermediate",
        "title": "Reflexão e transmissão de pulsos",
        "explanation": "Quando um pulso se aproxima de uma extremidade fixa, o contorno não pode deslocar-se. A reflexão ocorre com inversão do deslocamento transversal: uma crista incidente retorna como um vale no modelo ideal. Em extremidade livre, o deslocamento refletido conserva o sinal. Na junção entre duas cordas, contudo, parte da perturbação pode voltar e parte prosseguir: as regras fixo/livre não devem ser aplicadas indiscriminadamente a uma emenda de materiais diferentes. Se as duas cordas estiverem sob a mesma tensão, a velocidade em cada trecho é determinada pela densidade linear local. Uma onda periódica que atravessa a fronteira preserva a frequência temporal definida pela fonte, mas o comprimento de onda muda de acordo com λ=v/f. Já um pulso isolado é uma perturbação não periódica e não possui uma frequência única como uma senoide. O princípio de superposição descreve a soma instantânea dos deslocamentos quando pequenas perturbações se cruzam; após a passagem, os pulsos ideais retomam sua propagação, sem que a matéria tenha viajado permanentemente com eles. É necessário reconhecer condições e limites de linearidade antes de generalizar.",
        "example": "Duas cordas estão sob 100 N. A primeira tem μ₁=0,010 kg/m, então v₁=√(100/0,010)=100 m/s. A segunda tem μ₂=0,040 kg/m, então v₂=√(100/0,040)=50 m/s. O pulso transmitido se move duas vezes mais devagar no segundo trecho.",
        "pitfall": "Não interprete uma emenda entre cordas como se fosse obrigatoriamente uma extremidade fixa: reflexão, transmissão e fase dependem das condições da interface.",
        "steps": [
          "Identifique tipo de contorno e material.",
          "Aplique lei de Taylor em cada trecho.",
          "Distinga velocidade, forma refletida e transmissão."
        ]
      },
      {
        "level": "advanced",
        "title": "Frentes planas e esféricas e intensidade",
        "explanation": "Uma frente de onda é o conjunto de pontos de uma perturbação periódica que compartilham a mesma fase. Quando uma fonte puntiforme emite isotropicamente num meio homogêneo tridimensional, as frentes aproximam-se de esferas concêntricas; em uma pequena região diante de uma fonte muito distante, elas podem ser aproximadas por planos. A potência P de uma onda esférica ideal sem absorção distribui-se sobre área 4πr²; por isso I=P/(4πr²). Ao dobrar r, a intensidade diminui para um quarto. A intensidade é potência por área e não deve ser confundida com amplitude. Em modelos lineares, a amplitude de uma onda esférica ideal tende a diminuir como 1/r, enquanto a intensidade é proporcional ao quadrado da amplitude. Uma frente plana ideal não apresenta automaticamente o espalhamento geométrico inversamente proporcional a r². Na vida real, absorção, obstáculos, interferência, difração e diretividade das fontes alteram essas relações. Uma onda plana e uma esférica podem ter a mesma frequência e a mesma velocidade no mesmo meio, mas distribuição espacial distinta. Deve-se identificar a geometria da emissão antes de selecionar uma regra de intensidade.",
        "example": "Uma fonte sonora esférica ideal gera I₁=0,080 W/m² a 2,0 m. A 4,0 m, sem absorção, I₂=I₁(r₁/r₂)²=0,080×(2/4)²=0,020 W/m². A distância dobra e a intensidade se torna um quarto; não a metade.",
        "pitfall": "A lei do inverso do quadrado pressupõe espalhamento sobre superfícies esféricas e ausência de perdas: não se aplica automaticamente a ondas planas.",
        "steps": [
          "Reconheça frente plana ou esférica.",
          "Relacione potência à área atravessada.",
          "Verifique isotropia, perdas e regime distante."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A tensão de uma corda uniforme quadruplica, mantendo-se μ. Sua velocidade de propagação:",
        "options": [
          "Quadruplica",
          "Dobra",
          "Reduz-se à metade",
          "Permanece igual"
        ],
        "correctIndex": 1,
        "hint": "Identifique a grandeza constante, calcule a proporção e confira unidades.",
        "solution": "A lei de Taylor fornece v=√(T/μ). Com μ fixo, substituir T por 4T produz √4=2 vezes a velocidade original, não quatro vezes. A afirmação é válida sob as hipóteses de corda flexível e pequenas deformações."
      },
      {
        "level": "intermediate",
        "prompt": "Duas cordas sob mesma tensão têm densidades lineares μ e 4μ. No segundo trecho a velocidade é:",
        "options": [
          "Quatro vezes maior",
          "Duas vezes maior",
          "Metade da primeira",
          "Igual à primeira"
        ],
        "correctIndex": 2,
        "hint": "Identifique a grandeza constante, calcule a proporção e confira unidades.",
        "solution": "Como v=√(T/μ), aumentar a densidade linear por fator quatro divide a velocidade por √4=2. A transmissão pode coexistir com reflexão na emenda; não é correto supor que toda energia passe sem reflexão."
      },
      {
        "level": "advanced",
        "prompt": "Em uma onda esférica ideal sem absorção, dobrar a distância à fonte faz a intensidade:",
        "options": [
          "Cair para um quarto",
          "Cair para metade",
          "Dobrar",
          "Quadruplicar"
        ],
        "correctIndex": 0,
        "hint": "Identifique a grandeza constante, calcule a proporção e confira unidades.",
        "solution": "A área das frentes esféricas cresce com o quadrado da distância: A=4πr². Com potência constante, a intensidade I=P/A cai por fator quatro ao dobrar r. A regra exige fonte aproximadamente isotrópica."
      }
    ]
  }
];
