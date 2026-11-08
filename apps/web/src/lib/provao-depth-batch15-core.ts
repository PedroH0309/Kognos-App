import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original Kognos editorial lessons; not official or teacher certified. */
export const provaoDepthBatch15Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Número atômico e de massa. Semelhanças entre átomos",
    "objective": "Compreender número atômico, massa e isótopos, resolver situações com dados explícitos, comparar modelos e reconhecer limitações e interpretações incorretas em avaliações do ensino médio.",
    "prerequisites": [
      "Estrutura da matéria",
      "Proporções e unidades",
      "Leitura de modelos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Número atômico, massa e isótopos",
        "explanation": "Número atômico Z é o número de prótons; ele identifica o elemento químico. Número de massa A é a soma de prótons e nêutrons no núcleo, portanto N=A−Z. Em átomo neutro, elétrons=Z, mas em íon a carga depende da perda ou ganho de elétrons, sem mudar o núcleo. Para ²³₁₁Na, Z=11, A=23 e N=12; Na⁺ conserva 11 prótons e 12 nêutrons, mas possui dez elétrons. A massa atômica da tabela periódica não deve ser confundida com A: ela é uma média ponderada de massas isotópicas naturais, geralmente não inteira. A representação A/Z informa composição nuclear de um nuclídeo específico, enquanto o símbolo do elemento é definido somente por Z. A verificação exige distinguir símbolo, valor medido e hipótese. Em questões com várias grandezas, uma resposta numérica só é confiável quando se preservam as unidades e se explica por que cada quantidade aparece na equação. Compare sempre o modelo de referência com o fenômeno observado, e não transfira propriedades de uma partícula para todo o conjunto sem justificativa. É indispensável interpretar os termos antes de substituir números ou estabelecer relações causais: os dados da questão delimitam quais conclusões podem ser defendidas.",
        "example": "Para ³⁵₁₇Cl neutro: Z=17; N=35−17=18; elétrons=17. No Cl⁻: 18 elétrons, mas o mesmo núcleo de 17 prótons e 18 nêutrons. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não confunda definições distintas nem aplique uma fórmula fora das condições explicitadas; verifique grandezas e unidades antes de concluir.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Número atômico, massa e isótopos",
        "explanation": "Isótopos têm o mesmo Z e números de nêutrons distintos; isóbaros têm o mesmo A e diferentes Z; isótonos têm igual N e diferentes Z. Por exemplo, ¹⁴₆C e ¹⁴₇N são isóbaros; ¹⁴₆C tem oito nêutrons e ¹⁵₇N também tem oito, formando par isótono. Para classificar corretamente, primeiro calcule N=A−Z em cada espécie e depois compare as grandezas apropriadas. Isótopos de um mesmo elemento tendem a apresentar química semelhante por compartilharem Z e estrutura eletrônica comparável quando neutros, mas podem diferir na estabilidade nuclear e em propriedades relacionadas à massa. Íons de elementos diferentes não viram isótopos apenas porque possuem igual número de elétrons. A comparação entre dois casos é mais informativa quando somente uma variável muda por vez. Organize uma tabela com as quantidades conservadas e alteradas, explicite qual relação matemática ou histórica autoriza a conclusão e verifique se o exemplo é compatível com a definição adotada. Uma resolução completa deve incluir a escolha do procedimento, sua execução e a verificação do resultado contra o contexto apresentado, evitando extrapolações sem suporte.",
        "example": "Compare ¹²₆C, ¹³₆C e ¹³₇N: os dois primeiros são isótopos (Z=6); os dois últimos isóbaros (A=13). Calcule N: 6, 7 e 6, respectivamente; ¹²C e ¹³N são isótonos. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não extrapole um exemplo particular para todos os casos; observe o que foi mantido constante e quais hipóteses foram necessárias.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Análise avançada: Número atômico, massa e isótopos",
        "explanation": "A abundância isotópica explica a massa atômica relativa. Se um elemento hipotético possui 75% de isótopos com massa 10 u e 25% com massa 11 u, a média aproximada é 0,75×10+0,25×11=10,25 u. O cálculo usa frações de abundância cuja soma é 1, não soma direta de números de massa. Massas isotópicas medidas não coincidem necessariamente com inteiros devido à energia de ligação nuclear e à definição da unidade de massa atômica. Em radioatividade, transformar um núcleo pode alterar Z e portanto o elemento; perder elétrons altera apenas a carga. Essas distinções são cruciais em datação, espectrometria de massas e identificação de nuclídeos. No nível avançado, diferencie resultados de modelo e medições efetivas. Uma relação deduzida sob condições controladas pode precisar de correções em situações reais. Justifique cada aproximação e explique qual evidência permitiria identificar sua falha. A comparação de explicações alternativas deve reconhecer incertezas, pressupostos e evidências independentes, distinguindo o que se observa do que se infere.",
        "example": "Para abundâncias 20% de massa 10 u e 80% de massa 11 u: massa média=0,20×10+0,80×11=10,8 u. A média não identifica um núcleo com A=10,8. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não trate aproximações ou interpretações como verdades universais: examine os limites do modelo e a qualidade das evidências.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é o número de nêutrons de ²⁷₁₃Al?",
        "options": [
          "13",
          "14",
          "27",
          "40"
        ],
        "correctIndex": 1,
        "hint": "Use N=A−Z.",
        "solution": "A alternativa B é correta: A=27 e Z=13, portanto N=27−13=14. Os prótons são 13; 27 é o total de núcleons e 40 resulta de somar grandezas indevidamente."
      },
      {
        "level": "intermediate",
        "prompt": "¹²₆C e ¹⁴₆C são:",
        "options": [
          "Isótopos",
          "Isóbaros",
          "Isótonos",
          "Íons do mesmo átomo"
        ],
        "correctIndex": 0,
        "hint": "Compare os números atômicos.",
        "solution": "A alternativa A é correta: ambos possuem Z=6 e diferentes números de massa, caracterizando isótopos. Seus nêutrons são 6 e 8, logo não são isótonos."
      },
      {
        "level": "advanced",
        "prompt": "Um elemento tem 25% de átomos com massa 20 u e 75% com massa 22 u. A massa média é:",
        "options": [
          "20,0 u",
          "20,5 u",
          "21,5 u",
          "22,5 u"
        ],
        "correctIndex": 2,
        "hint": "Calcule a média ponderada pelas abundâncias.",
        "solution": "A alternativa C é correta: 0,25×20+0,75×22=5+16,5=21,5 u. Não se calcula a média aritmética simples quando as abundâncias são diferentes. O raciocínio exige identificar a grandeza ou conceito relevante, aplicar a definição sem confundir alternativas próximas e conferir a condição descrita no enunciado."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Energia mecânica: energia cinética",
    "objective": "Compreender energia mecânica e conservação, resolver situações com dados explícitos, comparar modelos e reconhecer limitações e interpretações incorretas em avaliações do ensino médio.",
    "prerequisites": [
      "Álgebra básica",
      "Grandezas físicas e unidades",
      "Conservação de energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Energia mecânica e conservação",
        "explanation": "Energia cinética mede a energia associada ao movimento de um corpo em determinado referencial e é dada por Ec=mv²/2, com massa em quilogramas e velocidade em metros por segundo. A energia potencial gravitacional próxima à superfície da Terra pode ser expressa por Ep=mgh, com referência de altura escolhida explicitamente; sua variação é fisicamente relevante. Energia potencial elástica de mola ideal é Eel=kx²/2, para deformação x medida em relação ao comprimento natural. Energia mecânica é a soma dessas parcelas quando pertinentes. Uma velocidade duplicada quadruplica Ec, não a duplica. A escolha do zero de energia potencial não altera diferenças de energia, mas altera os valores absolutos reportados. Antes de usar qualquer fórmula, identifique corpo, sistema, referencial e aproximações. A verificação exige distinguir símbolo, valor medido e hipótese. Em questões com várias grandezas, uma resposta numérica só é confiável quando se preservam as unidades e se explica por que cada quantidade aparece na equação. Compare sempre o modelo de referência com o fenômeno observado, e não transfira propriedades de uma partícula para todo o conjunto sem justificativa. É indispensável interpretar os termos antes de substituir números ou estabelecer relações causais: os dados da questão delimitam quais conclusões podem ser defendidas.",
        "example": "Um carrinho de 4 kg a 3 m/s possui Ec=4×3²/2=18 J. Se sua velocidade dobra para 6 m/s, Ec=72 J, quatro vezes maior. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não confunda definições distintas nem aplique uma fórmula fora das condições explicitadas; verifique grandezas e unidades antes de concluir.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Energia mecânica e conservação",
        "explanation": "Em sistema onde apenas forças conservativas realizam trabalho, Em=Ec+Ep permanece constante. Para corpo de 2 kg que parte do repouso a 5 m acima de uma referência, com g=10 m/s² e sem resistência do ar, Ep inicial=2×10×5=100 J. No solo, Ec=100 J e mv²/2=100, portanto v=10 m/s. O raciocínio exige desprezar arrasto e outras dissipações; em presença de atrito, parte da energia mecânica transforma-se em energia interna. A conservação da energia total continua válida para sistema adequadamente definido, embora a energia mecânica diminua. Em uma montanha-russa, as alturas e velocidades variam de forma interdependente, mas forças de frenagem exigem balanço de trabalho não conservativo. A comparação entre dois casos é mais informativa quando somente uma variável muda por vez. Organize uma tabela com as quantidades conservadas e alteradas, explicite qual relação matemática ou histórica autoriza a conclusão e verifique se o exemplo é compatível com a definição adotada. Uma resolução completa deve incluir a escolha do procedimento, sua execução e a verificação do resultado contra o contexto apresentado, evitando extrapolações sem suporte.",
        "example": "Um corpo de 1 kg desce sem atrito de altura 20 m, partindo do repouso, com g=10 m/s². mgh=mv²/2; v²=400; v=20 m/s. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não extrapole um exemplo particular para todos os casos; observe o que foi mantido constante e quais hipóteses foram necessárias.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Análise avançada: Energia mecânica e conservação",
        "explanation": "O teorema trabalho–energia afirma que o trabalho resultante sobre um corpo é igual à variação da energia cinética, Wresultante=ΔEc. Quando há trabalho de forças não conservativas, Wnc=ΔEm, desde que as forças conservativas estejam representadas pelas energias potenciais adotadas. Por exemplo, um bloco de 2 kg desliza de altura 5 m, mas chega com velocidade 8 m/s: Ep inicial=100 J, Ec final=64 J e Wnc=64−100=−36 J. Esse trabalho negativo representa dissipação mecânica, não desaparecimento da energia total. O sinal do trabalho depende da componente da força ao longo do deslocamento; uma força perpendicular ao movimento realiza trabalho nulo naquele trecho. Em sistemas com motores, o trabalho externo pode ser positivo e aumentar Em. No nível avançado, diferencie resultados de modelo e medições efetivas. Uma relação deduzida sob condições controladas pode precisar de correções em situações reais. Justifique cada aproximação e explique qual evidência permitiria identificar sua falha. A comparação de explicações alternativas deve reconhecer incertezas, pressupostos e evidências independentes, distinguindo o que se observa do que se infere.",
        "example": "Bloco de 2 kg cai de 5 m e chega a 8 m/s, com g=10: Em inicial=100 J; Em final=64 J; Wnc=−36 J, associado ao atrito com o ar. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não trate aproximações ou interpretações como verdades universais: examine os limites do modelo e a qualidade das evidências.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um corpo de 2 kg a 4 m/s tem energia cinética de:",
        "options": [
          "4 J",
          "8 J",
          "16 J",
          "32 J"
        ],
        "correctIndex": 2,
        "hint": "Use Ec=mv²/2.",
        "solution": "A alternativa C está correta: Ec=2×16/2=16 J. O fator quadrático da velocidade e a divisão por dois são indispensáveis. O raciocínio exige identificar a grandeza ou conceito relevante, aplicar a definição sem confundir alternativas próximas e conferir a condição descrita no enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Sem atrito, um corpo parte do repouso de altura 5 m (g=10 m/s²). A velocidade ao chegar ao solo é aproximadamente:",
        "options": [
          "5 m/s",
          "10 m/s",
          "20 m/s",
          "50 m/s"
        ],
        "correctIndex": 1,
        "hint": "Iguale mgh e mv²/2.",
        "solution": "A alternativa B está correta: v²=2gh=2×10×5=100, então v=10 m/s. A massa cancela e o resultado pressupõe ausência de perdas. O raciocínio exige identificar a grandeza ou conceito relevante, aplicar a definição sem confundir alternativas próximas e conferir a condição descrita no enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Um bloco parte com 100 J de energia mecânica e termina com 70 J. O trabalho das forças não conservativas é:",
        "options": [
          "+170 J",
          "+30 J",
          "0 J",
          "−30 J"
        ],
        "correctIndex": 3,
        "hint": "Calcule ΔEm=Em final−Em inicial.",
        "solution": "A alternativa D está correta: Wnc=70−100=−30 J. A energia mecânica diminuiu por trabalho dissipativo; a energia total não desapareceu. O raciocínio exige identificar a grandeza ou conceito relevante, aplicar a definição sem confundir alternativas próximas e conferir a condição descrita no enunciado."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Envoltórios celulares; membrana plasmática",
    "objective": "Compreender membrana plasmática e transporte, resolver situações com dados explícitos, comparar modelos e reconhecer limitações e interpretações incorretas em avaliações do ensino médio.",
    "prerequisites": [
      "Organização celular",
      "Moléculas biológicas",
      "Gradientes de concentração"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Membrana plasmática e transporte",
        "explanation": "A membrana plasmática delimita a célula e regula trocas com o meio. No modelo do mosaico fluido, uma bicamada de fosfolipídios organiza-se com cabeças hidrofílicas voltadas aos meios aquosos e caudas hidrofóbicas para o interior. Proteínas integrais e periféricas participam de transporte, recepção de sinais, adesão e atividade enzimática. O colesterol, em membranas animais, modula propriedades de fluidez em diferentes temperaturas. A permeabilidade seletiva não significa impermeabilidade absoluta: moléculas pequenas apolares, como oxigênio, atravessam a bicamada com relativa facilidade; íons e moléculas polares frequentemente dependem de proteínas. A presença de parede celular em plantas e bactérias não substitui a membrana, que também existe nesses organismos. É essencial separar função de barreira, reconhecimento e comunicação. A verificação exige distinguir símbolo, valor medido e hipótese. Em questões com várias grandezas, uma resposta numérica só é confiável quando se preservam as unidades e se explica por que cada quantidade aparece na equação. Compare sempre o modelo de referência com o fenômeno observado, e não transfira propriedades de uma partícula para todo o conjunto sem justificativa. É indispensável interpretar os termos antes de substituir números ou estabelecer relações causais: os dados da questão delimitam quais conclusões podem ser defendidas.",
        "example": "Oxigênio atravessa bicamada por difusão simples, de maior para menor pressão parcial. Já Na⁺ necessita de vias proteicas porque possui carga elétrica. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não confunda definições distintas nem aplique uma fórmula fora das condições explicitadas; verifique grandezas e unidades antes de concluir.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Membrana plasmática e transporte",
        "explanation": "Difusão simples e difusão facilitada são transportes passivos: ocorrem a favor do gradiente eletroquímico e não consomem diretamente ATP no próprio processo. Canais e carreadores permitem passagem de substâncias que não atravessam facilmente a bicamada. Osmose é movimento líquido de água através de membrana semipermeável, associado à diferença de potencial hídrico; em situações didáticas simples, a água tende ao compartimento com maior concentração efetiva de solutos não permeantes. Células animais em solução muito hipotônica podem inchar e sofrer lise; células vegetais tornam-se túrgidas graças à parede celular. Em meio hipertônico, uma célula vegetal pode sofrer plasmólise. A comparação deve considerar quais solutos atravessam a membrana, não apenas a concentração total anunciada. A comparação entre dois casos é mais informativa quando somente uma variável muda por vez. Organize uma tabela com as quantidades conservadas e alteradas, explicite qual relação matemática ou histórica autoriza a conclusão e verifique se o exemplo é compatível com a definição adotada. Uma resolução completa deve incluir a escolha do procedimento, sua execução e a verificação do resultado contra o contexto apresentado, evitando extrapolações sem suporte.",
        "example": "Hemácia em água muito hipotônica recebe água por osmose e pode romper. Célula vegetal em condição semelhante ganha turgor; a parede restringe a expansão. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não extrapole um exemplo particular para todos os casos; observe o que foi mantido constante e quais hipóteses foram necessárias.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Análise avançada: Membrana plasmática e transporte",
        "explanation": "Transporte ativo usa energia para mover solutos contra seu gradiente eletroquímico. A bomba Na⁺/K⁺-ATPase, em células animais, transporta três Na⁺ para fora e dois K⁺ para dentro por ATP hidrolisado, ajudando a manter gradientes importantes para excitabilidade e volume celular. Transporte ativo secundário acopla o fluxo favorável de um soluto ao transporte desfavorável de outro; a energia deriva indiretamente de gradientes previamente mantidos. Endocitose e exocitose são processos vesiculares e não equivalem a simples passagem por canais. Em intestino, o cotransporte Na⁺/glicose utiliza o gradiente de sódio; a Na⁺/K⁺-ATPase sustenta indiretamente esse mecanismo. Para distinguir processos, identifique direção do gradiente, gasto direto ou indireto de energia e participação de proteínas ou vesículas. No nível avançado, diferencie resultados de modelo e medições efetivas. Uma relação deduzida sob condições controladas pode precisar de correções em situações reais. Justifique cada aproximação e explique qual evidência permitiria identificar sua falha. A comparação de explicações alternativas deve reconhecer incertezas, pressupostos e evidências independentes, distinguindo o que se observa do que se infere.",
        "example": "A bomba Na⁺/K⁺ consome ATP: para cada ciclo, 3 Na⁺ saem e 2 K⁺ entram. Em 10 ciclos, saem 30 Na⁺ e entram 20 K⁺. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não trate aproximações ou interpretações como verdades universais: examine os limites do modelo e a qualidade das evidências.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual componente constitui a estrutura básica da membrana plasmática?",
        "options": [
          "Bicamada de fosfolipídios",
          "Parede de celulose em todas as células",
          "Camada única de DNA",
          "Rede de microtúbulos"
        ],
        "correctIndex": 0,
        "hint": "Pense na orientação das cabeças polares.",
        "solution": "A alternativa A está correta: a bicamada fosfolipídica forma a matriz da membrana, com proteínas associadas. Parede celular não está presente em todas as células."
      },
      {
        "level": "intermediate",
        "prompt": "Uma hemácia colocada em meio muito hipotônico tende a:",
        "options": [
          "Perder água e murchar",
          "Manter volume por possuir parede celular",
          "Ganhar água e possivelmente sofrer lise",
          "Interromper toda difusão"
        ],
        "correctIndex": 2,
        "hint": "Considere a osmose e a ausência de parede celular.",
        "solution": "A alternativa C está correta: o fluxo líquido de água para o interior pode causar inchaço e lise. Hemácias não têm parede celular rígida que limite a expansão."
      },
      {
        "level": "advanced",
        "prompt": "A Na⁺/K⁺-ATPase transporta, por ATP:",
        "options": [
          "2 Na⁺ para fora e 3 K⁺ para dentro",
          "3 Na⁺ para fora e 2 K⁺ para dentro",
          "3 Na⁺ para dentro e 2 K⁺ para fora",
          "Apenas água para fora"
        ],
        "correctIndex": 1,
        "hint": "Lembre da estequiometria 3:2.",
        "solution": "A alternativa B está correta: três íons sódio saem e dois potássio entram a cada ATP hidrolisado, mantendo gradientes eletroquímicos. O raciocínio exige identificar a grandeza ou conceito relevante, aplicar a definição sem confundir alternativas próximas e conferir a condição descrita no enunciado."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Renascimento Cultural",
    "objective": "Compreender renascimento cultural europeu, resolver situações com dados explícitos, comparar modelos e reconhecer limitações e interpretações incorretas em avaliações do ensino médio.",
    "prerequisites": [
      "Periodização histórica",
      "Análise de fontes",
      "Contexto social"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Renascimento cultural europeu",
        "explanation": "O Renascimento cultural europeu, especialmente entre os séculos XIV e XVI, articulou transformações artísticas, intelectuais e urbanas com o estudo de obras clássicas greco-romanas. Humanismo não significa abandono generalizado da religião: muitos humanistas eram cristãos e procuravam conciliar erudição clássica, filologia e fé. Centros urbanos italianos, como Florença, desenvolveram redes de patronagem nas quais famílias, corporações e instituições religiosas financiavam obras. O mecenato sustentava artistas e também expressava prestígio político. Perspectiva linear, estudos anatômicos e atenção às proporções tornaram-se recursos de representação, embora não fossem praticados de modo uniforme. O Renascimento não começou do zero nem substituiu instantaneamente a cultura medieval; dialogou com traduções, universidades e tradições artísticas anteriores. A verificação exige distinguir símbolo, valor medido e hipótese. Em questões com várias grandezas, uma resposta numérica só é confiável quando se preservam as unidades e se explica por que cada quantidade aparece na equação. Compare sempre o modelo de referência com o fenômeno observado, e não transfira propriedades de uma partícula para todo o conjunto sem justificativa. É indispensável interpretar os termos antes de substituir números ou estabelecer relações causais: os dados da questão delimitam quais conclusões podem ser defendidas.",
        "example": "Em Florença, uma família financia afresco religioso: identifique o mecenas, o artista e a função pública da obra; a presença de tema cristão não impede recursos renascentistas. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não confunda definições distintas nem aplique uma fórmula fora das condições explicitadas; verifique grandezas e unidades antes de concluir.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Renascimento cultural europeu",
        "explanation": "A perspectiva linear organiza linhas paralelas do espaço representado em direção a pontos de fuga, produzindo ilusão de profundidade numa superfície plana. Brunelleschi é associado a experiências pioneiras, e Alberti sistematizou princípios em tratado de pintura. Em uma cena com estrada reta, as bordas convergem visualmente para um ponto no horizonte; essa convergência não significa que a estrada realmente se estreite. Leonardo da Vinci integrou observação, desenho e investigação anatômica, mas não deve ser descrito como inventor isolado da ciência experimental. A imprensa de tipos móveis difundida por Gutenberg em meados do século XV acelerou a circulação de textos na Europa, com efeitos condicionados por alfabetização, custos e redes comerciais. Distinguir inovação técnica, circulação cultural e contexto social evita narrativa de gênios sem sociedade. A comparação entre dois casos é mais informativa quando somente uma variável muda por vez. Organize uma tabela com as quantidades conservadas e alteradas, explicite qual relação matemática ou histórica autoriza a conclusão e verifique se o exemplo é compatível com a definição adotada. Uma resolução completa deve incluir a escolha do procedimento, sua execução e a verificação do resultado contra o contexto apresentado, evitando extrapolações sem suporte.",
        "example": "Em desenho de corredor, trace linhas do teto e piso convergindo para ponto de fuga no horizonte. Isso cria profundidade visual, sem alterar a largura real. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não extrapole um exemplo particular para todos os casos; observe o que foi mantido constante e quais hipóteses foram necessárias.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Análise avançada: Renascimento cultural europeu",
        "explanation": "A expansão do humanismo envolveu crítica filológica de documentos, comparação de manuscritos e valorização de línguas clássicas. Lorenzo Valla, por exemplo, usou análise linguística para questionar a autenticidade da chamada Doação de Constantino, demonstrando como formas de linguagem podem revelar anacronismos. O caso ilustra método histórico: uma fonte atribuída ao passado deve ser confrontada com vocabulário, contexto e evidências externas. Ao mesmo tempo, o Renascimento coexistiu com desigualdades sociais, guerras e exclusões; a participação de mulheres em instituições de ensino e patronagem variou conforme região e posição social. A periodização é ferramenta interpretativa, não fronteira absoluta entre Idade Média obscura e modernidade iluminada. É incorreto tratar a Europa renascentista como culturalmente isolada de intercâmbios mediterrâneos e islâmicos. No nível avançado, diferencie resultados de modelo e medições efetivas. Uma relação deduzida sob condições controladas pode precisar de correções em situações reais. Justifique cada aproximação e explique qual evidência permitiria identificar sua falha. A comparação de explicações alternativas deve reconhecer incertezas, pressupostos e evidências independentes, distinguindo o que se observa do que se infere.",
        "example": "Valla comparou linguagem de documento atribuído ao século IV com usos posteriores; detectou anacronismos, enfraquecendo a atribuição antiga. A conclusão depende de análise textual contextual. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não trate aproximações ou interpretações como verdades universais: examine os limites do modelo e a qualidade das evidências.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O humanismo renascentista caracteriza-se principalmente por:",
        "options": [
          "Rejeição de toda cultura clássica",
          "Valorização de estudos clássicos e da experiência humana",
          "Proibição da arte religiosa",
          "Fim imediato das universidades"
        ],
        "correctIndex": 1,
        "hint": "Pense no estudo crítico de autores antigos.",
        "solution": "A alternativa B está correta: o humanismo valorizou textos clássicos e investigação das capacidades humanas, frequentemente coexistindo com tradições religiosas."
      },
      {
        "level": "intermediate",
        "prompt": "Na perspectiva linear, linhas paralelas no espaço representado parecem:",
        "options": [
          "Convergir em direção ao ponto de fuga",
          "Manter sempre distância idêntica na imagem",
          "Formar círculos concêntricos",
          "Desaparecer em todas as obras"
        ],
        "correctIndex": 0,
        "hint": "Observe trilhos ou bordas de uma estrada.",
        "solution": "A alternativa A está correta: linhas paralelas podem convergir visualmente para um ponto de fuga, produzindo ilusão de profundidade na representação plana."
      },
      {
        "level": "advanced",
        "prompt": "A análise de Lorenzo Valla da Doação de Constantino exemplifica:",
        "options": [
          "Aceitação de qualquer documento antigo sem crítica",
          "Prova de que documentos não têm valor histórico",
          "Uso exclusivo de experimentos químicos",
          "Crítica filológica para identificar anacronismos"
        ],
        "correctIndex": 3,
        "hint": "Considere o vocabulário e o contexto de produção.",
        "solution": "A alternativa D está correta: Valla investigou anacronismos linguísticos e históricos, questionando a autenticidade atribuída ao documento. O raciocínio exige identificar a grandeza ou conceito relevante, aplicar a definição sem confundir alternativas próximas e conferir a condição descrita no enunciado."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Propriedades coligativas: conceitos",
    "objective": "Compreender propriedades coligativas de soluções, resolver situações com dados explícitos, comparar modelos e reconhecer limitações e interpretações incorretas em avaliações do ensino médio.",
    "prerequisites": [
      "Estrutura da matéria",
      "Proporções e unidades",
      "Leitura de modelos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fundamentos: Propriedades coligativas de soluções",
        "explanation": "Propriedades coligativas dependem principalmente da quantidade de partículas de soluto em solução, para condições em que o modelo ideal ou diluído seja adequado, e não apenas da identidade química do soluto. A adição de soluto não volátil reduz a pressão de vapor do solvente em relação à do solvente puro, pois diminui sua fração molar na fase líquida. Em solução ideal, a lei de Raoult expressa Psolvente=xsolvente·P°solvente. Se xsolvente=0,90 e P°=100 unidades de pressão, a pressão parcial prevista do solvente é 90. Essa relação não vale indistintamente para misturas fortemente não ideais ou solutos voláteis, que também contribuem para a pressão total. Para interpretar um problema, identifique solvente, soluto, temperatura e hipótese de idealidade antes de aplicar relações quantitativas. A verificação exige distinguir símbolo, valor medido e hipótese. Em questões com várias grandezas, uma resposta numérica só é confiável quando se preservam as unidades e se explica por que cada quantidade aparece na equação. Compare sempre o modelo de referência com o fenômeno observado, e não transfira propriedades de uma partícula para todo o conjunto sem justificativa. É indispensável interpretar os termos antes de substituir números ou estabelecer relações causais: os dados da questão delimitam quais conclusões podem ser defendidas.",
        "example": "Solução ideal com xsolvente=0,80 e pressão de vapor pura de 50 kPa: P=0,80×50=40 kPa. A redução é 10 kPa, mantida a temperatura. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não confunda definições distintas nem aplique uma fórmula fora das condições explicitadas; verifique grandezas e unidades antes de concluir.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Propriedades coligativas de soluções",
        "explanation": "A elevação ebulioscópica e o abaixamento crioscópico decorrem da alteração do equilíbrio entre fases: para soluções diluídas, ΔTb=iKb·m e ΔTf=iKf·m, onde m é molalidade, Kb e Kf são constantes do solvente e i representa o número efetivo de partículas por fórmula, considerando dissociação ou associação. Para 0,5 mol/kg de glicose em água e Kf=1,86 °C·kg/mol, i≈1 e ΔTf=0,93 °C, prevendo congelamento em aproximadamente −0,93 °C sob pressão de referência. Para NaCl idealmente dissociado, i≈2, mas interações iônicas em soluções reais podem fazer o fator efetivo divergir desse valor. Não confunda molalidade com molaridade, pois a primeira usa massa do solvente. A comparação entre dois casos é mais informativa quando somente uma variável muda por vez. Organize uma tabela com as quantidades conservadas e alteradas, explicite qual relação matemática ou histórica autoriza a conclusão e verifique se o exemplo é compatível com a definição adotada. Uma resolução completa deve incluir a escolha do procedimento, sua execução e a verificação do resultado contra o contexto apresentado, evitando extrapolações sem suporte.",
        "example": "Glicose 0,5 mol/kg em água, Kf=1,86 e i=1: ΔTf=1×1,86×0,5=0,93 °C; Tf≈−0,93 °C em condições de referência. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não extrapole um exemplo particular para todos os casos; observe o que foi mantido constante e quais hipóteses foram necessárias.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Análise avançada: Propriedades coligativas de soluções",
        "explanation": "Osmose ocorre quando há diferença de potencial químico do solvente através de membrana seletivamente permeável. Em soluções ideais diluídas, a pressão osmótica é aproximada por π=iMRT, com concentração molar M, temperatura absoluta T e constante R coerente com as unidades. Para solução de glicose 0,10 mol/L a 300 K, usando R=0,082 L·atm·mol⁻¹·K⁻¹ e i=1, π≈2,46 atm. A equação é aproximação para soluções diluídas; membranas reais, interações entre solutos e coeficientes osmóticos podem alterar resultados. Soluções isotônicas têm pressão osmótica efetiva comparável em relação a membrana e solutos considerados, não necessariamente mesma concentração molar. Essas propriedades são úteis em conservação de alimentos, crioproteção e formulações médicas, mas aplicações clínicas exigem condições fisiológicas específicas. No nível avançado, diferencie resultados de modelo e medições efetivas. Uma relação deduzida sob condições controladas pode precisar de correções em situações reais. Justifique cada aproximação e explique qual evidência permitiria identificar sua falha. A comparação de explicações alternativas deve reconhecer incertezas, pressupostos e evidências independentes, distinguindo o que se observa do que se infere.",
        "example": "Glicose 0,10 mol/L a 300 K: π=1×0,10×0,082×300≈2,46 atm. A estimativa pressupõe diluição e idealidade. Primeiro, identifique os dados e a pergunta; depois, aplique a relação adequada; finalmente, confira o resultado e sua condição de validade.",
        "pitfall": "Não trate aproximações ou interpretações como verdades universais: examine os limites do modelo e a qualidade das evidências.",
        "steps": [
          "Identifique dados, grandezas e contexto do problema.",
          "Aplique o conceito específico e mostre o raciocínio intermediário.",
          "Verifique unidades, condições de validade e erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Soluto não volátil em solução ideal provoca na pressão de vapor do solvente:",
        "options": [
          "Aumento obrigatório",
          "Nenhuma alteração",
          "Redução em relação ao solvente puro",
          "Valor sempre zero"
        ],
        "correctIndex": 2,
        "hint": "Use a fração molar do solvente na lei de Raoult.",
        "solution": "A alternativa C está correta: P=xsolvente P°, e xsolvente<1 quando há soluto, logo a pressão parcial do solvente diminui sob a hipótese ideal."
      },
      {
        "level": "intermediate",
        "prompt": "Para glicose 0,5 mol/kg em água, com Kf=1,86 e i=1, ΔTf é:",
        "options": [
          "0,93 °C",
          "1,86 °C",
          "3,72 °C",
          "0,50 °C"
        ],
        "correctIndex": 0,
        "hint": "Multiplique i, Kf e molalidade.",
        "solution": "A alternativa A está correta: ΔTf=1×1,86×0,5=0,93 °C. O ponto de congelamento previsto fica abaixo do da água pura. O raciocínio exige identificar a grandeza ou conceito relevante, aplicar a definição sem confundir alternativas próximas e conferir a condição descrita no enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Uma solução ideal diluída de glicose 0,10 mol/L a 300 K (R=0,082) tem π aproximadamente:",
        "options": [
          "0,246 atm",
          "0,82 atm",
          "24,6 atm",
          "2,46 atm"
        ],
        "correctIndex": 3,
        "hint": "Aplique π=MRT com i=1.",
        "solution": "A alternativa D está correta: π=0,10×0,082×300=2,46 atm. A temperatura deve estar em kelvin e as unidades de R devem ser compatíveis. O raciocínio exige identificar a grandeza ou conceito relevante, aplicar a definição sem confundir alternativas próximas e conferir a condição descrita no enunciado."
      }
    ]
  }
];
