import type {LessonBlueprint} from './authored-lesson-blueprint.ts';
export const stage18Physics:LessonBlueprint[]=[
  {
    "subject": "Física",
    "topic": "Sistema Internacional de Unidades",
    "objective": "Distinguir grandezas físicas de suas unidades, reconhecer bases do SI e conferir dimensões em cálculos experimentais.",
    "chapters": [
      [
        "Grandeza, número e unidade",
        "Uma medida física informa valor numérico e unidade. No SI, comprimento tem unidade metro (m), tempo segundo (s), massa quilograma (kg) e corrente elétrica ampère (A), entre outras grandezas fundamentais. Temperatura termodinâmica utiliza kelvin (K). O símbolo da unidade não é decoração: 20 m e 20 s descrevem naturezas diferentes.",
        "Uma corrida de 100 m realizada em 12 s envolve comprimento e tempo, que não podem ser somados diretamente como se fossem iguais.",
        "Metros e segundos podem ser somados porque ambos são números em uma fórmula.",
        "Registre nome da grandeza, símbolo e unidade antes de operar.",
        "Qual é a unidade SI de massa: grama ou quilograma?",
        "Considere a unidade básica estabelecida para massa.",
        "O quilograma (kg) é a unidade de base de massa no SI, embora o grama também seja muito utilizado como submúltiplo.",
        "Somar valores requer grandezas compatíveis; ser representado por número não torna unidades de natureza diferente intercambiáveis."
      ],
      [
        "Unidades derivadas e coerência dimensional",
        "Velocidade corresponde a comprimento por tempo e, no SI, pode ser expressa em m/s. Aceleração tem dimensão de comprimento por tempo ao quadrado e usa m/s²; força tem unidade newton, equivalente a kg·m/s². A verificação dimensional pode detectar fórmulas incoerentes, mas não demonstra por si que todo resultado numérico está certo.",
        "Se um objeto percorre 40 m em 5 s, sua velocidade média escalar no trajeto é 40/5=8 m/s; o resultado não pode ser 8 m².",
        "Uma fórmula fisicamente correta sempre pode ser comprovada apenas por apresentar unidades consistentes.",
        "Confira o tipo de grandeza resultante antes de substituir números.",
        "Qual a unidade de força se F=ma, usando SI?",
        "Multiplique kg por m/s².",
        "A unidade é kg·m/s², chamada newton (N); deriva de massa multiplicada por aceleração.",
        "A consistência dimensional é necessária, mas não suficiente: relações incorretas podem possuir as mesmas dimensões."
      ],
      [
        "Padrões, precisão e contexto",
        "Medir exige instrumentos, referência e indicação apropriada de precisão. Usar 2,000 m não significa automaticamente conhecer comprimento com certeza absoluta, e converter unidades não cria precisão que não existia. Prefixos como quilo (10³), centi (10⁻²) e mili (10⁻³) ajudam a expressar múltiplos, mas precisam ser aplicados à unidade correta. Em resultados de laboratório, registre a medida com seus limites.",
        "Uma régua que permite ler centímetros não justifica anunciar espessura como 2,000000 m com precisão microscópica.",
        "Quanto maior o número de casas decimais, mais precisa é necessariamente a medida física.",
        "Considere instrumento e incerteza antes de apresentar resultado com muitos algarismos.",
        "Converta 3,5 km em metros.",
        "Quilo indica fator mil.",
        "3,5 km equivalem a 3.500 m; a conversão modifica a unidade, não a qualidade original da medição.",
        "Casas decimais adicionadas numa conversão não representam novas observações nem garantem menor incerteza."
      ]
    ],
    "situation": [
      "Um estudante registra que caminhou 2,5 km em 30 minutos e anuncia velocidade de 0,083 m/s usando números sem converter as unidades.",
      "Qual velocidade média em m/s o modelo fornece, e por que a conferência de unidades importa?",
      "2,5 km=2500 m e 30 min=1800 s. Logo 2500/1800≈1,39 m/s; dividir valores com unidades não convertidas gera resultado errado."
    ],
    "links": [
      [
        "Física",
        "Conversão de unidades físicas",
        "As transformações entre múltiplos e submúltiplos são necessárias para manter cálculos consistentes no Sistema Internacional."
      ],
      [
        "Matemática",
        "Potências, radicais e notação científica",
        "Prefixos decimais e potências de dez tornam mais claras medidas muito grandes ou muito pequenas."
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Conversão de unidades físicas",
    "objective": "Converter velocidade, comprimento, tempo e área conservando valores físicos, unidades e fatores de transformação.",
    "chapters": [
      [
        "Converter é manter a mesma grandeza",
        "Uma conversão de unidades muda a forma de expressar a medida, não o fenômeno medido. Um quilômetro corresponde a 1.000 metros, um minuto a 60 segundos e uma hora a 3.600 segundos. Ao multiplicar por um fator de conversão com unidades inversas, a unidade indesejada se cancela. Se a grandeza não é compatível, não existe fator universal de conversão.",
        "2,4 km correspondem a 2.400 m; não se afirma que a pessoa percorreu mais caminho por escrever um número maior.",
        "Um número maior após conversão significa que a medida física aumentou.",
        "Escreva a igualdade de unidades antes de converter.",
        "Quanto vale 45 minutos em segundos?",
        "Multiplique pelo fator 60 s por minuto.",
        "45×60=2700 s. O tempo físico continua o mesmo e apenas sua representação numérica muda.",
        "A conversão preserva a mesma medida; 2400 m e 2,4 km não representam comprimentos diferentes."
      ],
      [
        "Velocidade e fatores compostos",
        "Converter km/h em m/s exige transformar numerador e denominador: 1 km/h=1000/3600 m/s=1/3,6 m/s. Para fazer o inverso, multiplique a velocidade em m/s por 3,6. Não se deve converter só quilômetros e esquecer as horas, porque o resultado fica incorreto. A análise dimensional indica qual fator faz sentido.",
        "Um veículo a 72 km/h move-se a 72/3,6=20 m/s, sem que a velocidade real se altere.",
        "Para converter km/h em m/s, basta multiplicar o número por mil.",
        "Transforme comprimento e tempo separadamente para entender a conversão composta.",
        "Converta 15 m/s para km/h.",
        "Multiplique por 3,6.",
        "15×3,6=54 km/h. O fator combina 3600 segundos por hora com 1000 metros por quilômetro.",
        "Converter só o numerador deixaria unidade m/h, não m/s; a conversão de velocidade exige ambas as dimensões."
      ],
      [
        "Áreas e volumes usam fatores elevados",
        "Se uma unidade linear aumenta dez vezes, uma área expressa na unidade correspondente muda por fator cem, e um volume por fator mil. Logo 1 m²=10.000 cm² e 1 m³=1.000.000 cm³. O erro comum é aplicar a conversão linear diretamente a áreas e volumes, sem elevar o fator ao quadrado ou cubo.",
        "Um quadrado de lado 1 m possui 100 cm por lado, então área 100×100=10.000 cm².",
        "Uma área de um metro quadrado equivale a cem centímetros quadrados.",
        "Observe o expoente da unidade e aplique o mesmo expoente ao fator de conversão.",
        "Converta 0,5 m² para cm².",
        "Use 1 m²=10.000 cm².",
        "0,5×10.000=5.000 cm², porque cada dimensão linear foi convertida de metros para centímetros.",
        "Multiplicar por cem é conversão de comprimento; para área o fator deve ser elevado ao quadrado."
      ]
    ],
    "situation": [
      "Uma turma estuda a velocidade de ônibus e encontra 54 km/h em um aviso, enquanto seu exercício exige m/s. Um aluno multiplica 54 por mil sem converter as horas.",
      "Qual valor correto em m/s e qual erro ocorreu na conversão?",
      "54 km/h equivale a 54/3,6=15 m/s. O erro foi converter quilômetro mas não a hora, que contém 3600 segundos."
    ],
    "links": [
      [
        "Física",
        "Sistema Internacional de Unidades",
        "A identificação das grandezas e unidades é pré-requisito para transformar comprimentos, tempos e velocidades."
      ],
      [
        "Física",
        "Movimento uniformemente variado",
        "Equações de movimento exigem coerência dimensional, por exemplo tempo em segundos e velocidade em metros por segundo."
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Força de atrito",
    "objective": "Explicar forças de atrito estático e cinético e analisar sua relação com superfícies, força normal e movimento.",
    "chapters": [
      [
        "Atrito pode impedir ou acompanhar movimento",
        "Atrito é força de contato associada à interação de superfícies e geralmente se opõe ao deslizamento relativo ou à tendência de deslizamento. O atrito estático pode variar até certo máximo, enquanto o atrito cinético atua quando há deslizamento. A direção é determinada pela tendência de movimento relativo entre superfícies, não por uma regra de sempre apontar para trás em relação ao observador.",
        "Uma caixa parada pode receber empurrão fraco e continuar imóvel porque o atrito estático equilibra a força horizontal aplicada.",
        "Uma caixa imóvel não sofre atrito porque não está deslizando.",
        "Faça diagrama das forças e identifique tendência de deslizamento relativo.",
        "Uma caixa não se move sob empurrão horizontal de 10 N; qual força de atrito equilibra o empurrão no modelo?",
        "O resultado horizontal é zero.",
        "O atrito estático tem módulo de 10 N e sentido oposto ao empurrão, desde que o limite estático não seja excedido.",
        "O atrito estático pode atuar mesmo sem movimento; seu módulo se ajusta até o limite de escorregamento."
      ],
      [
        "Normal e coeficiente de atrito",
        "Em modelo simplificado, o máximo atrito estático vale μsN e o atrito cinético pode ser aproximado por μkN. N é a força normal, não necessariamente igual ao peso em planos inclinados ou em situações aceleradas. Coeficientes dependem de materiais e condições, e o modelo não é universal para pneus, fluidos ou qualquer contato complexo.",
        "Se N=100 N e μk=0,3, o atrito cinético aproximado durante deslizamento é 30 N.",
        "O módulo do atrito estático é sempre μsN, mesmo quando a força aplicada é pequena.",
        "Calcule primeiro a normal adequada à geometria e às demais forças.",
        "Uma caixa desliza com N=50 N e μk=0,2. Determine atrito cinético.",
        "Multiplique coeficiente por normal.",
        "O módulo é fk=0,2×50=10 N, com sentido oposto ao movimento relativo de deslizamento.",
        "μsN expressa o limite máximo do atrito estático; abaixo do limite o atrito pode ser menor para equilibrar a situação."
      ],
      [
        "Atrito no cotidiano não é apenas resistência indesejada",
        "Atrito entre calçados e chão permite caminhar, e pneus dependem de aderência para tração e frenagem. Diminuir atrito pode reduzir perdas em máquinas, mas eliminá-lo em todos os contatos poderia impedir deslocamentos controlados. A distância de frenagem depende também de velocidade, sistema de freios, pavimento e condições meteorológicas, sem que um coeficiente isolado explique todo evento.",
        "Uma pessoa caminha porque o pé empurra o chão para trás e recebe força de atrito estático do solo para frente em parte do movimento.",
        "Se retirarmos todo o atrito, veículos sempre frearão de modo mais eficiente.",
        "Analise a função do atrito em cada contato, em vez de classificá-lo como sempre ruim.",
        "Por que piso molhado pode modificar a frenagem de um automóvel?",
        "Considere aderência pneu-pavimento.",
        "As condições do contato podem reduzir aderência e alterar forças de frenagem, aumentando risco; o resultado real depende de vários fatores.",
        "Sem aderência suficiente, pneus podem perder capacidade de aplicar forças longitudinais para controlar o movimento."
      ]
    ],
    "situation": [
      "Em aula de segurança viária, um estudante afirma que o atrito deve ser eliminado dos pneus para o carro parar mais rápido. Outro diz que a aderência é importante.",
      "Qual interpretação relaciona corretamente atrito, contato pneu-pavimento e frenagem?",
      "A força de atrito no contato com o pavimento permite transmitir força de frenagem. Menor aderência pode prejudicar a desaceleração."
    ],
    "links": [
      [
        "Física",
        "Leis de Newton",
        "Diagramas de forças e força resultante permitem verificar se o atrito equilibra ou acelera um corpo."
      ],
      [
        "Física",
        "Movimento uniformemente variado",
        "Uma frenagem aproximadamente uniforme pode ser modelada por aceleração constante decorrente de força resultante."
      ]
    ]
  },
  {
    "subject": "Física",
    "topic": "Gráficos de posição, velocidade e aceleração",
    "objective": "Ler inclinação e área em gráficos cinemáticos, distinguindo deslocamento, velocidade e aceleração.",
    "chapters": [
      [
        "Inclinação de posição por tempo",
        "Em gráfico posição versus tempo, a inclinação em um intervalo representa velocidade média, e a inclinação tangente idealizada representa velocidade instantânea. Uma reta inclinada indica velocidade constante; uma linha horizontal indica posição constante naquele referencial. Uma curva exige examinar como a inclinação varia, e não simplesmente sua altura.",
        "Um gráfico s(t)=5+2t, em unidades SI, é reta de inclinação 2 m/s e posição inicial de 5 m.",
        "Uma linha mais alta no gráfico s×t significa necessariamente que o corpo está mais rápido.",
        "Compare variações de posição com os intervalos de tempo correspondentes.",
        "Um corpo passa de 10 para 30 m entre t=2 s e t=6 s. Qual velocidade média?",
        "Divida a variação de posição por quatro segundos.",
        "v média=(30−10)/(6−2)=5 m/s, positiva conforme o eixo escolhido.",
        "Velocidade é determinada pela inclinação do gráfico de posição, não por quão alto o ponto aparece."
      ],
      [
        "Inclinação em v×t e área de deslocamento",
        "No gráfico velocidade versus tempo, a inclinação corresponde à aceleração. A área algébrica sob a curva indica deslocamento, com trechos abaixo do eixo contribuindo negativamente. Se v é constante, a área retangular representa vΔt; se varia linearmente, pode-se decompor em triângulos e trapézios. Distância percorrida pode exigir somar módulos de áreas de sinais opostos.",
        "Com velocidade constante de 3 m/s durante 4 s, a área é 3×4=12 m, deslocamento no eixo positivo.",
        "Área sob gráfico v×t representa sempre distância positiva, independentemente do sinal da velocidade.",
        "Observe sinais de velocidade antes de calcular e somar áreas.",
        "Uma velocidade é −2 m/s por 5 s. Qual deslocamento?",
        "Calcule área algébrica vΔt.",
        "Δs=−2×5=−10 m, pois houve deslocamento no sentido negativo do referencial.",
        "Área de velocidade abaixo do eixo é negativa; distância percorrida é não negativa e não deve ser confundida com deslocamento."
      ],
      [
        "Aceleração e interpretação conjunta",
        "O gráfico aceleração versus tempo mostra a taxa de variação da velocidade; sua área algébrica corresponde à mudança de velocidade. Aceleração zero não exige posição zero, apenas velocidade constante em um intervalo no modelo. Em MUV, v×t é uma reta e s×t tem forma parabólica quando a aceleração não é nula. Gráficos devem ter escalas, unidades e intervalos claramente indicados.",
        "Uma aceleração constante de 2 m/s² durante 3 s altera a velocidade em 2×3=6 m/s.",
        "Aceleração zero significa que o objeto está parado e que sua posição vale zero.",
        "Associe cada eixo à grandeza e ao tipo de cálculo permitido.",
        "Qual a variação de velocidade sob a=−1 m/s² durante 4 s?",
        "Calcule área de a×t.",
        "Δv=−1×4=−4 m/s; o sinal indica variação no sentido negativo do eixo.",
        "Aceleração nula implica velocidade constante, que pode ser diferente de zero; não determina a posição do corpo."
      ]
    ],
    "situation": [
      "Um aplicativo mostra três gráficos de uma corrida: posição, velocidade e aceleração. Um aluno compara alturas dos gráficos sem observar os eixos e conclui que todos indicam a mesma coisa.",
      "Como saber o que a inclinação e a área representam em cada gráfico e qual grandeza está sendo calculada?",
      "Em s×t a inclinação é velocidade; em v×t a inclinação é aceleração e a área é deslocamento; em a×t a área é variação de velocidade."
    ],
    "links": [
      [
        "Física",
        "Movimento uniformemente variado",
        "O MUV corresponde a aceleração constante, reta no gráfico de velocidade e evolução quadrática da posição."
      ],
      [
        "Matemática",
        "Função afim",
        "A inclinação de retas e a interpretação dos interceptos ajudam a ler gráficos de posição e velocidade."
      ]
    ]
  }
];
