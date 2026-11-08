import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Kognos: material original, não oficial, sem homologação docente. */
export const provaoDepthBatch26Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Fórmulas químicas: fórmula mínima, fórmula centesimal, fórmula molecular",
    "objective": "Analisar fórmulas químicas: fórmula mínima, fórmula centesimal, fórmula molecular com definições precisas, aplicação demonstrada e avaliação de hipóteses e limites, interpretando dados e justificando alternativas objetivas.",
    "prerequisites": [
      "Mol, massas atômicas e proporções",
      "Porcentagens em massa",
      "Conservação da matéria"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Composição centesimal e proporção atômica",
        "explanation": "A fórmula centesimal informa a fração em massa de cada elemento químico de uma substância pura; ela não informa diretamente quantos átomos existem em uma molécula. Para transformar percentuais em proporções atômicas, considere uma amostra hipotética de 100 g, converta cada porcentagem em massa e divida cada massa pela massa molar atômica correspondente. Só depois divida as quantidades de matéria pelo menor valor. Uma composição de 40,0% de carbono, 6,7% de hidrogênio e 53,3% de oxigênio fornece aproximadamente 3,33 mol de C, 6,7 mol de H e 3,33 mol de O. A razão 1:2:1 gera CH₂O, a fórmula mínima. Os percentuais experimentais podem não somar exatamente 100% devido a arredondamentos, mas diferenças grandes exigem revisar pureza e identificação dos elementos. Fórmula mínima é uma razão inteira reduzida, não necessariamente a fórmula molecular. Para sais iônicos, a fórmula representa a proporção na rede cristalina, não uma molécula discreta.",
        "example": "Para 100 g de amostra, calcule C=40/12=3,33 mol, H=6,7/1=6,7 mol e O=53,3/16=3,33 mol. Divida por 3,33 e obtenha aproximadamente 1:2:1. Escreva CH₂O e confira: 12/30=40% C; 2/30≈6,7% H; 16/30≈53,3% O.",
        "pitfall": "Evite confundir proporção observada com identidade química sem conferir a hipótese.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "intermediate",
        "title": "Da fórmula mínima à molecular",
        "explanation": "A fórmula molecular indica o número real de átomos de cada elemento em uma molécula, enquanto a fórmula mínima registra apenas a menor proporção inteira. Para obtê-la, determine a massa molar da fórmula mínima e compare com a massa molar experimental: n=M_molecular/M_mínima. O fator n deve ser inteiro positivo, pois multiplica simultaneamente todos os índices. CH₂O tem massa de fórmula mínima de 30 g/mol; se a massa molar da substância for 180 g/mol, n=6 e a fórmula molecular será C₆H₁₂O₆. Não é correto escolher n apenas pelo nome familiar da substância: a massa molar deve ser um dado independente. Fórmulas moleculares idênticas também não determinam estruturas: ácido acético e formiato de metila têm fórmula C₂H₄O₂ e conectividades diferentes. Uma razão experimental distante de um inteiro indica possível erro analítico, mistura ou hipótese incorreta. Fórmulas de compostos de rede iônica não devem ser interpretadas como entidades moleculares isoladas.",
        "example": "Para CH₂O, M_mínima=12+2+16=30 g/mol. Com M_experimental=60 g/mol, n=60/30=2. Multiplique cada índice: C₂H₄O₂. Confira massa: 2×12+4×1+2×16=60 g/mol; a fórmula ainda não define qual isômero está presente.",
        "pitfall": "Confira unidades, condições e variáveis antes de aplicar um modelo.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "advanced",
        "title": "Combustão e análise quantitativa",
        "explanation": "A análise de combustão pode revelar a quantidade de carbono e hidrogênio em uma amostra orgânica por meio das massas de CO₂ e H₂O coletadas. Na combustão completa, cada mol de CO₂ corresponde a um mol de átomos de carbono e cada mol de H₂O corresponde a dois mols de hidrogênio. Se a amostra contiver somente C, H e O, calcule a massa de oxigênio por diferença após subtrair as massas de carbono e hidrogênio da massa total. Essa estratégia não é válida sem ressalvas se houver nitrogênio, halogênios, impurezas, água inicialmente presente ou combustão incompleta. Para uma amostra de 3,0 g que produza 4,4 g de CO₂ e 1,8 g de H₂O, obtêm-se 0,10 mol de C e 0,20 mol de H; a massa restante de oxigênio é 1,6 g, ou 0,10 mol, dando CH₂O. A análise determina proporção elementar, não conectividade molecular nem necessariamente massa molar. É indispensável conferir unidades, conservação de massa e hipóteses experimentais antes de anunciar uma identidade química.",
        "example": "De 4,4 g de CO₂, n(C)=4,4/44=0,10 mol; de 1,8 g de H₂O, n(H)=2×1,8/18=0,20 mol. Massas: C=1,2 g e H=0,2 g. O restante dos 3,0 g é 1,6 g de O=0,10 mol. A razão 1:2:1 fornece CH₂O, sob a hipótese C/H/O.",
        "pitfall": "Uma fonte ou medida isolada não garante generalização; examine suas limitações.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual fórmula mínima corresponde a 40% C, 6,7% H e 53,3% O?",
        "options": [
          "CH₂O",
          "CHO₂",
          "C₂HO",
          "C₆H₁₂O₆"
        ],
        "correctIndex": 0,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "Em 100 g, os mols são 40/12≈3,33, 6,7/1≈6,7 e 53,3/16≈3,33. Dividindo por 3,33, a razão é 1:2:1, isto é, CH₂O."
      },
      {
        "level": "intermediate",
        "prompt": "Se a fórmula mínima é CH₂O e M=180 g/mol, qual a molecular?",
        "options": [
          "C₂H₄O₂",
          "CH₂O",
          "C₆H₁₂O₆",
          "C₃H₆O₃"
        ],
        "correctIndex": 2,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "CH₂O possui 30 g/mol; 180/30=6. Multiplicando todos os índices por seis, obtemos C₆H₁₂O₆, cuja massa molar é 180 g/mol."
      },
      {
        "level": "advanced",
        "prompt": "Em combustão completa, os mols de hidrogênio na amostra equivalem a:",
        "options": [
          "n(CO₂)",
          "2n(H₂O)",
          "n(H₂O)/2",
          "2n(CO₂)"
        ],
        "correctIndex": 1,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "Cada molécula de água formada contém dois átomos de H; portanto n(H)=2n(H₂O), desde que a água recolhida venha exclusivamente da combustão."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Constantes de equilíbrio e cálculos simples de equilíbrio",
    "objective": "Analisar constantes de equilíbrio e cálculos simples de equilíbrio com definições precisas, aplicação demonstrada e avaliação de hipóteses e limites, interpretando dados e justificando alternativas objetivas.",
    "prerequisites": [
      "Balanceamento e coeficientes",
      "Concentração molar",
      "Equilíbrio químico dinâmico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Expressões da constante de equilíbrio",
        "explanation": "Para aA+bB ⇌ cC+dD, uma expressão escolar aproximada é Kc=[C]^c[D]^d/([A]^a[B]^b), usando concentrações de equilíbrio e os coeficientes estequiométricos como expoentes. Na termodinâmica rigorosa, constantes são escritas com atividades adimensionais; usar concentrações é aproximação útil para soluções ideais. Sólidos puros e líquidos puros não entram explicitamente porque suas atividades são tomadas como unidade. Em H₂(g)+I₂(g)⇌2HI(g), com concentrações de equilíbrio 0,20 M, 0,20 M e 0,80 M, respectivamente, Kc=0,80²/(0,20×0,20)=16. Um K grande favorece produtos na composição de equilíbrio, mas não garante reação rápida nem irreversibilidade. Inverter a reação produz constante recíproca; multiplicar todos os coeficientes por dois eleva K ao quadrado. Equilíbrio dinâmico significa velocidades direta e inversa iguais, não concentrações iguais. O valor de K é específico da temperatura e da reação escrita.",
        "example": "Para H₂+I₂⇌2HI, use Kc=[HI]²/([H₂][I₂]). Substitua 0,80²/(0,20×0,20)=0,64/0,04=16. Confira o expoente 2 do produto e a origem dos dados: todos são valores no equilíbrio.",
        "pitfall": "Evite confundir proporção observada com identidade química sem conferir a hipótese.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "intermediate",
        "title": "Tabela ICE e conservação",
        "explanation": "Quando as concentrações de equilíbrio são desconhecidas, monte tabela inicial, variação e equilíbrio, chamada ICE. A mudança de cada espécie deve respeitar a estequiometria. Para A⇌B, com [A]₀=1,0 M e [B]₀=0, escreva [A]eq=1−x e [B]eq=x. Se Kc=4, a relação x/(1−x)=4 fornece x=0,8 M, logo [A]eq=0,2 M e [B]eq=0,8 M. Uma raiz que gere concentração negativa deve ser rejeitada, pois não representa estado físico possível. Se a equação fosse 2A⇌B, a variação de A seria −2x, e não −x. A temperatura deve ser mantida fixa ao utilizar o K informado. Adicionar reagente altera inicialmente o quociente reacional e a posição de equilíbrio, mas não o valor de K à mesma temperatura. Nem toda equação algébrica exige aproximação: se uma aproximação for usada, verifique depois sua consistência com o valor de x encontrado.",
        "example": "Para A⇌B, inicie A=1,0 M, B=0. Escreva A=1−x, B=x e imponha K=4: x/(1−x)=4. Logo x=4−4x, 5x=4, x=0,8 M. Verifique 0,8/0,2=4 e concentrações não negativas.",
        "pitfall": "Confira unidades, condições e variáveis antes de aplicar um modelo.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "advanced",
        "title": "Quociente Q e perturbações",
        "explanation": "O quociente reacional Q usa a mesma expressão de K, mas as concentrações de um instante qualquer. Se Q<K, a evolução espontânea favorece produtos; se Q>K, favorece reagentes, até alcançar equilíbrio nas condições consideradas. Para N₂O₄(g)⇌2NO₂(g), Q=[NO₂]²/[N₂O₄]. Com [NO₂]=0,10 M e [N₂O₄]=0,20 M, Q=0,01/0,20=0,05. Se K=0,20, a reação tende a produzir mais NO₂. Um catalisador acelera a aproximação ao equilíbrio em ambos os sentidos, mas não altera K. Temperatura, diferentemente de catalisador ou adição de reagentes, pode mudar K: aquecer costuma favorecer o sentido endotérmico, dependendo do sinal da entalpia. Pressão pode alterar a composição de equilíbrio gasoso, especialmente quando há mudança no número de mols de gás, mas não modifica K se a temperatura for mantida. A previsão do sentido não informa quanto tempo a transformação levará: isso depende da cinética.",
        "example": "Em N₂O₄⇌2NO₂, calcule Q=0,10²/0,20=0,05. Compare com K=0,20: Q<K. Conclua que há tendência de formação de NO₂ até Q alcançar K; não conclua que a transformação é instantânea.",
        "pitfall": "Uma fonte ou medida isolada não garante generalização; examine suas limitações.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Para H₂+I₂⇌2HI, a expressão correta de Kc é:",
        "options": [
          "[HI]/([H₂][I₂])",
          "[HI]²/([H₂][I₂])",
          "[H₂][I₂]/[HI]",
          "[HI]²[H₂][I₂]"
        ],
        "correctIndex": 1,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "O coeficiente 2 de HI torna-se expoente 2, e reagentes ocupam o denominador: Kc=[HI]²/([H₂][I₂])."
      },
      {
        "level": "intermediate",
        "prompt": "Para A⇌B, [A] inicial 1 M, [B] inicial 0 e K=4. Quanto vale [B]eq?",
        "options": [
          "0,2 M",
          "0,4 M",
          "0,8 M",
          "1,2 M"
        ],
        "correctIndex": 2,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "Defina x=[B]eq e [A]eq=1−x. Então x/(1−x)=4, logo 5x=4 e x=0,8 M, respeitando o balanço."
      },
      {
        "level": "advanced",
        "prompt": "Se Q=0,05 e K=0,20, qual tendência?",
        "options": [
          "Produzir reagentes",
          "Manter a composição",
          "K cair para 0,05",
          "Produzir produtos"
        ],
        "correctIndex": 3,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "Q<K significa que o quociente precisa aumentar para atingir K; o sentido direto é favorecido, sem mudança em K à mesma temperatura."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Fatores que regulam o tamanho das populações",
    "objective": "Analisar fatores que regulam o tamanho das populações com definições precisas, aplicação demonstrada e avaliação de hipóteses e limites, interpretando dados e justificando alternativas objetivas.",
    "prerequisites": [
      "População e comunidade",
      "Natalidade e mortalidade",
      "Razões e porcentagens"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Balanço demográfico",
        "explanation": "O tamanho de uma população varia por nascimentos, mortes, imigração e emigração. A identidade N_final=N_inicial+B−D+I−E organiza essas quatro contribuições, mas não explica sozinha suas causas. Uma população com 120 indivíduos, 30 nascimentos, 12 mortes, 8 imigrantes e 6 emigrantes termina com 140 indivíduos: aumento líquido de 20. A taxa relativa do período é 20/120≈16,7%, mas não pode ser extrapolada indefinidamente. Densidade populacional é indivíduos por área ou volume e não deve ser confundida com tamanho absoluto. Predação, competição, doenças, disponibilidade de alimento e clima afetam sobrevivência e reprodução; a importância de cada fator depende do organismo e da escala temporal. A estrutura etária também modifica o potencial de crescimento: populações com o mesmo tamanho podem ter proporções diferentes de indivíduos reprodutivos. Em espécies migratórias, aumento local pode ocorrer sem crescimento regional. Comparações confiáveis exigem mesma unidade temporal e esforço amostral semelhante.",
        "example": "Calcule N=120+30−12+8−6=140. A variação absoluta é 140−120=20; a relativa é 20/120×100≈16,7%. Se os dados abrangem um ano, a taxa refere-se àquele ano, não a todos os anos futuros.",
        "pitfall": "Evite confundir proporção observada com identidade química sem conferir a hipótese.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "intermediate",
        "title": "Crescimento logístico e capacidade de suporte",
        "explanation": "Em um ambiente com recursos limitados, a capacidade de suporte K representa um tamanho populacional sustentado sob condições específicas; não é propriedade fixa da espécie. O modelo logístico dN/dt=rN(1−N/K) reduz a taxa de crescimento quando N se aproxima de K. Com r=0,20 por ano, N=80 e K=100, a taxa instantânea é 0,20×80×(1−0,8)=3,2 indivíduos por ano. Esse número é taxa contínua, não contagem literal de frações de indivíduos. No modelo simples, o crescimento absoluto máximo ocorre em N=K/2, pois o produto N(1−N/K) é máximo ali. Na natureza, K muda com água, nutrientes, habitat e intervenção humana; atrasos demográficos podem causar oscilações e ultrapassagens. Fatores dependentes da densidade, como competição por alimento, diferem de eventos que podem afetar populações em várias densidades, como geadas intensas. O modelo exponencial dN/dt=rN é aproximação para situações sem limitação relevante no intervalo observado, não previsão permanente.",
        "example": "Para r=0,20 ano⁻¹, N=80 e K=100, calcule 1−80/100=0,20. Logo dN/dt=0,20×80×0,20=3,2 indivíduos/ano. Se N=100, a taxa líquida do modelo é zero, embora nascimentos e mortes possam continuar.",
        "pitfall": "Confira unidades, condições e variáveis antes de aplicar um modelo.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "advanced",
        "title": "Estimativas e incerteza de amostragem",
        "explanation": "Ecólogos estimam populações com quadrantes, transectos, armadilhas fotográficas e marcação e recaptura, escolhendo métodos adequados ao organismo e habitat. No estimador simples de Lincoln–Petersen, N≈M×C/R, onde M é a quantidade inicialmente marcada, C é o total capturado na segunda amostra e R é a quantidade de marcados recapturados. Se M=40, C=50 e R=10, a estimativa é 200 indivíduos. O método pressupõe população aproximadamente fechada, marcas persistentes, mistura suficiente e probabilidades semelhantes de captura; animais mais fáceis de capturar podem distorcer o resultado. R muito pequeno produz grande incerteza, e a estimativa não deve ser confundida com censo exato. Mudanças no esforço amostral também podem criar falsas tendências. Para conservação, combine séries temporais, conectividade de habitats, estrutura etária, ameaças e diversidade genética. Um aumento em reserva isolada pode resultar de imigração, sem recuperação do conjunto regional. Correlação entre chuva e abundância não prova causa única; hipóteses alternativas precisam ser confrontadas.",
        "example": "Marque 40 peixes e solte-os; depois capture 50, dos quais 10 marcados. A fração marcada é 10/50=0,20. Estime N≈40/0,20=200. A conclusão depende de capturas sem viés relevante e população aproximadamente fechada.",
        "pitfall": "Uma fonte ou medida isolada não garante generalização; examine suas limitações.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Com 100 indivíduos, 20 nascimentos, 5 mortes, 4 imigrantes e 9 emigrantes, N final é:",
        "options": [
          "100",
          "110",
          "120",
          "130"
        ],
        "correctIndex": 1,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "N_final=100+20−5+4−9=110; o balanço inclui as quatro entradas e saídas no período."
      },
      {
        "level": "intermediate",
        "prompt": "No modelo logístico, quando N=K, o crescimento líquido previsto é:",
        "options": [
          "rK",
          "K/r",
          "zero",
          "sempre negativo"
        ],
        "correctIndex": 2,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "Como dN/dt=rN(1−N/K), para N=K o fator entre parênteses é zero; isso não significa ausência de mortes e nascimentos."
      },
      {
        "level": "advanced",
        "prompt": "Se M=40, C=50 e R=10 na marcação-recaptura, N estimado é:",
        "options": [
          "100",
          "150",
          "200",
          "400"
        ],
        "correctIndex": 2,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "Pelo estimador simples N≈MC/R=40×50/10=200, supondo marcações persistentes, mistura e população aproximadamente fechada."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Período macedônico e cultura helenística",
    "objective": "Analisar período macedônico e cultura helenística com definições precisas, aplicação demonstrada e avaliação de hipóteses e limites, interpretando dados e justificando alternativas objetivas.",
    "prerequisites": [
      "Pólis gregas",
      "Cronologia antes da era comum",
      "Leitura crítica de fontes"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Hegemonia da Macedônia",
        "explanation": "A Macedônia ampliou seu poder sob Filipe II, que reorganizou a infantaria com sarissas, articulou cavalaria e diplomacia e derrotou uma coalizão de Atenas e Tebas em Queroneia, em 338 a.C. A vitória consolidou a hegemonia macedônica, mas não extinguiu instantaneamente as instituições de todas as pólis gregas. Alexandre III sucedeu Filipe em 336 a.C. e empreendeu campanhas contra o Império Aquemênida, conquistando territórios até o Egito e regiões próximas ao Indo. A batalha de Gaugamela, em 331 a.C., foi decisiva contra Dario III. Essas campanhas envolveram violência, negociações, alianças e administração de territórios heterogêneos; não podem ser descritas apenas como intercâmbio cultural pacífico. A expressão 'helenístico' designa transformações culturais e políticas ligadas à expansão macedônica e seus sucessores, sem pressupor eliminação das culturas locais. Compare hegemonia militar, controle administrativo e circulação de línguas como dimensões relacionadas, mas distintas. Datas a.C. diminuem conforme o tempo avança rumo ao ano 1.",
        "example": "Ordene Queroneia (338 a.C.), sucessão de Alexandre (336 a.C.) e Gaugamela (331 a.C.). Como são datas antes da era comum, 338 antecede 336, que antecede 331. Diferencie a hegemonia sobre pólis gregas da conquista do império persa.",
        "pitfall": "Evite confundir proporção observada com identidade química sem conferir a hipótese.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "intermediate",
        "title": "Reinos sucessores e circulação cultural",
        "explanation": "Após a morte de Alexandre em 323 a.C., seus generais disputaram territórios e constituíram reinos como o ptolomaico no Egito e o selêucida em partes da Ásia. Não existiu um único governo helenístico estável que controlasse permanentemente todas as conquistas. Alexandria, no Egito, tornou-se importante centro de comércio e investigação intelectual, enquanto Antioquia se destacou em outro reino. A língua grega koiné circulou em administração e comércio, mas coexistiu com egípcio e numerosas outras línguas. Governantes combinaram símbolos macedônicos e locais para legitimar poder; práticas políticas e experiências sociais variavam entre regiões, grupos e condições jurídicas. A circulação de moedas, mercadorias, pessoas e textos não significava igualdade política ou econômica. Para interpretar uma inscrição, pergunte quem a produziu, onde circulou, a quem se dirigia e quais interesses representava. Não atribua toda a produção científica antiga a uma única cidade nem suponha que o uso da língua grega tenha apagado tradições anteriores.",
        "example": "Compare Alexandria no Egito ptolomaico com Antioquia na esfera selêucida. Identifique primeiro dois centros de reinos diferentes; depois a circulação do grego e das redes comerciais; por fim conclua que semelhança cultural não prova governo unificado.",
        "pitfall": "Confira unidades, condições e variáveis antes de aplicar um modelo.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "advanced",
        "title": "Sincretismo e crítica das evidências",
        "explanation": "O sincretismo religioso e artístico no mundo helenístico resultou de contatos, negociações e reinterpretações entre tradições. No Egito ptolomaico, o culto de Serápis exemplifica articulações de repertórios gregos e egípcios, mas sua existência não prova que todos partilhavam as mesmas crenças ou que não havia conflito. Moedas com inscrições gregas e símbolos egípcios podem indicar estratégias de legitimação de governantes diante de públicos diversos. A arte helenística frequentemente explorou movimento e expressividade, sem eliminar tradições anteriores. Estudos de astronomia, matemática e medicina circularam por redes que envolviam diferentes comunidades e instituições. O recorte cronológico convencional vai da morte de Alexandre, em 323 a.C., à incorporação do Egito ptolomaico por Roma, em 30 a.C., embora periodizações sejam ferramentas historiográficas. Ao comparar fontes, considere o contexto de produção e a distância entre propaganda oficial e práticas cotidianas. Não trate influência cultural como evidência suficiente de igualdade social ou ausência de coerção.",
        "example": "Uma moeda ptolomaica exibe texto grego e símbolo religioso egípcio. Passo 1: identifique emissor e época. Passo 2: reconheça públicos possíveis. Passo 3: formule hipótese de legitimação, sem inferir convivência igualitária de todos os grupos.",
        "pitfall": "Uma fonte ou medida isolada não garante generalização; examine suas limitações.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual batalha consolidou a hegemonia de Filipe II em 338 a.C.?",
        "options": [
          "Maratona",
          "Queroneia",
          "Gaugamela",
          "Ácio"
        ],
        "correctIndex": 1,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "Queroneia, em 338 a.C., marcou a vitória macedônica sobre Atenas e Tebas; Gaugamela ocorreu nas campanhas posteriores de Alexandre contra os persas."
      },
      {
        "level": "intermediate",
        "prompt": "Após 323 a.C., os territórios de Alexandre caracterizaram-se por:",
        "options": [
          "Governo único permanente",
          "Retorno completo ao domínio aquemênida",
          "Reinos sucessores em disputa",
          "Controle romano imediato"
        ],
        "correctIndex": 2,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "A morte de Alexandre iniciou disputas entre sucessores e a formação de reinos como o ptolomaico e o selêucida, não de um império unificado estável."
      },
      {
        "level": "advanced",
        "prompt": "Moeda com inscrição grega e símbolo egípcio permite inferir, com cautela:",
        "options": [
          "Igualdade política geral",
          "Fim de crenças locais",
          "Ausência de conflitos",
          "Estratégia de legitimação em contatos culturais"
        ],
        "correctIndex": 3,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "A combinação de símbolos pode servir à legitimação diante de públicos distintos; sozinha não demonstra igualdade, uniformidade religiosa nem ausência de conflito."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Do artesanato à fábrica: transformações no mundo do trabalho",
    "objective": "Analisar do artesanato à fábrica: transformações no mundo do trabalho com definições precisas, aplicação demonstrada e avaliação de hipóteses e limites, interpretando dados e justificando alternativas objetivas.",
    "prerequisites": [
      "Antigo Regime",
      "Revolução Industrial",
      "Produtividade e fontes históricas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Artesanato, manufatura e fábrica",
        "explanation": "No artesanato, uma pessoa ou pequena oficina frequentemente controla várias etapas de produção, ferramentas e ritmos, embora também existam hierarquias e dependência econômica. Na manufatura, a divisão de tarefas entre trabalhadores pode ampliar a especialização sem máquinas motorizadas. A fábrica industrial intensificou a concentração de equipamentos, trabalhadores, capital e energia, além da disciplina de horários. As três formas coexistiram em vários lugares; a passagem não foi imediata nem uniforme. A Revolução Industrial iniciou-se na Grã-Bretanha no século XVIII e se expandiu em ritmos distintos, vinculada a carvão, mercados, agricultura, capital, técnicas e instituições. Atribuí-la a uma invenção única é reducionista. Para comparar produtividade, divida produção por trabalhador-hora, considerando peças comparáveis e qualidade semelhante. Aumento da produção pode coexistir com jornadas extensas, acidentes e remuneração baixa. As mudanças nas relações de trabalho devem ser avaliadas com evidências sobre renda, propriedade dos meios de produção e condições de vida, não apenas número de máquinas.",
        "example": "Uma oficina faz 20 peças com dois trabalhadores em 10 h: 20/(2×10)=1 peça/trabalhador-hora. Uma manufatura faz 60 peças em 20 trabalhador-horas: 3 peças/trabalhador-hora. Compare somente peças e qualidade equivalentes.",
        "pitfall": "Evite confundir proporção observada com identidade química sem conferir a hipótese.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "intermediate",
        "title": "Mecanização e urbanização",
        "explanation": "A mecanização têxtil, o aproveitamento de energia hidráulica e a difusão de máquinas a vapor transformaram a produção de forma desigual entre setores. Uma máquina a vapor converte parte da energia térmica de combustível em trabalho mecânico; não cria energia. A fábrica coordenou atividades com relógios, supervisão e divisão de tarefas, enquanto cidades industriais atraíram trabalhadores e enfrentaram problemas de moradia, saneamento e transporte. Mulheres e crianças trabalharam em diferentes setores sob condições que variaram por região e época. O assalariamento industrial cresceu, mas não eliminou de imediato trabalho domiciliar, artesanato, servidão e escravidão em outros contextos. Para estudar urbanização, diferencie migração, crescimento natural e mudanças administrativas. Uma correlação entre crescimento urbano e fábricas não demonstra que toda expansão das cidades tenha uma única causa. A avaliação histórica exige comparar salários reais, preços, duração da jornada e saúde, pois maior produção por trabalhador não garante automaticamente melhor qualidade de vida. A mecanização também dependeu de cadeias globais de matérias-primas.",
        "example": "Uma fábrica produz 1.200 peças com 50 trabalhadores em 8 h. Total de trabalho=50×8=400 trabalhador-horas; produtividade=1.200/400=3 peças/trabalhador-hora. O indicador não mede salários, segurança nem qualidade das peças.",
        "pitfall": "Confira unidades, condições e variáveis antes de aplicar um modelo.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      },
      {
        "level": "advanced",
        "title": "Conflitos sociais e direitos",
        "explanation": "A industrialização produziu disputas por salários, jornadas, condições de segurança e representação. Trabalhadores organizaram associações, petições, greves e outras formas de mobilização. O ludismo em partes da Grã-Bretanha envolveu ataques a máquinas associados à perda de renda e mudanças nas relações de produção; reduzi-lo a aversão irracional à tecnologia apaga suas causas sociais. Sindicatos e legislação sobre horas, trabalho infantil e segurança resultaram de conflitos prolongados, com diferenças entre países e categorias. Uma lei aprovada não significa cumprimento automático: fiscalização, capacidade de organização e interesses econômicos afetam sua aplicação. A produção industrial se conectou ao comércio colonial e a cadeias de algodão, metais e combustíveis, inclusive com trabalho escravizado em certos territórios. Progresso técnico não equivale a melhoria linear e universal de direitos. Compare documentos de empresários, trabalhadores e governos, observando interesses, silêncios e datas. Uma mudança de jornada pode alterar o tempo de trabalho sem elevar necessariamente salário real, que depende de preços e remuneração.",
        "example": "Se a jornada cai de 12 para 10 h com salário diário igual, a redução de horas é (12−10)/12×100≈16,7%. Para avaliar o ganho econômico, investigue preços, intensidade do trabalho e fiscalização, não apenas a lei.",
        "pitfall": "Uma fonte ou medida isolada não garante generalização; examine suas limitações.",
        "steps": [
          "Identifique os dados, conceitos e pressupostos relevantes.",
          "Execute a comparação ou cálculo, explicitando as etapas.",
          "Confira coerência, limites de validade e alternativas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual traço distingue manufatura de fábrica mecanizada?",
        "options": [
          "Exigência de eletricidade",
          "Divisão de tarefas possível sem máquinas motorizadas",
          "Ausência de capital",
          "Fim imediato do artesanato"
        ],
        "correctIndex": 1,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "A manufatura pode dividir tarefas com ferramentas manuais; a fábrica industrial amplia mecanização e concentração, sem eliminar automaticamente outras formas produtivas."
      },
      {
        "level": "intermediate",
        "prompt": "1.200 peças com 50 trabalhadores em 8 h equivalem a:",
        "options": [
          "3 peças por trabalhador-hora",
          "24 peças por trabalhador-hora",
          "150 peças por trabalhador-hora",
          "0,33 peça por trabalhador-hora"
        ],
        "correctIndex": 0,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "São 50×8=400 trabalhador-horas; 1.200/400=3 peças por trabalhador-hora, sob hipótese de peças comparáveis."
      },
      {
        "level": "advanced",
        "prompt": "O ludismo deve ser interpretado sobretudo como:",
        "options": [
          "Rejeição universal à ciência",
          "Movimento patronal",
          "Conflito sobre trabalho e mudanças técnicas",
          "Movimento exclusivo do século XX"
        ],
        "correctIndex": 2,
        "hint": "Compare cada alternativa com o mecanismo e os dados apresentados.",
        "solution": "Os ataques a máquinas em episódios ludistas estavam associados a perdas de renda e alterações nas relações de trabalho, não a rejeição indistinta de qualquer tecnologia."
      }
    ]
  }
];
