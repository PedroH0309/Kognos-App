import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Batch 13: original non-official content, pending pedagogical review. */
export const provaoDepthBatch13Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Operações envolvendo soluções (diluições e misturas de soluções com ou sem reação química)",
    "objective": "Calcular diluições e misturas de soluções com e sem reação química, distinguindo conservação de soluto, volume final e proporções estequiométricas.",
    "prerequisites": [
      "Molaridade",
      "Quantidade de matéria",
      "Estequiometria"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Diluição sem reação",
        "explanation": "Ao adicionar solvente a uma solução, a quantidade de soluto permanece constante se não houver reação, perda ou precipitação. A relação n=C·V permite escrever C1V1=C2V2, usando concentrações em mol/L e volumes coerentes. A concentração diminui quando o volume final aumenta. O volume final deve ser medido depois de completar a solução, pois nem toda mistura de líquidos tem volumes rigorosamente aditivos. O procedimento de laboratório usa alíquota e balão volumétrico. A validade depende de conservar a identidade química do soluto e de não retirar matéria. Um fator de diluição igual a dez reduz a molaridade para um décimo. A fórmula não determina automaticamente o pH de misturas reativas. Em questões, identificar o volume final é mais importante do que memorizar uma igualdade sem entender sua conservação. A segurança do preparo também depende da natureza dos reagentes; diluir ácidos concentrados exige protocolo apropriado.",
        "example": "Para obter 250 mL de NaCl 0,20 mol/L de estoque 1,0 mol/L: calcule 0,20×0,250=0,050 mol; retire 0,050/1,0=0,050 L do estoque; complete com solvente até 250 mL. A unidade final é mol por litro; a quantidade de soluto calculada inicialmente é preservada durante todo o preparo.",
        "pitfall": "Não confunda volume de solvente adicionado com volume final medido.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Mistura do mesmo soluto",
        "explanation": "Misturando duas soluções do mesmo soluto sem reação, a quantidade total é a soma dos mols iniciais: n=C1V1+C2V2. A concentração final resulta de dividir essa soma pelo volume final. Se o exercício declarar volumes aditivos, use V1+V2; na prática, o volume pode mudar por interação entre líquidos. Uma média simples das concentrações só corresponde ao resultado quando os volumes são iguais. O conceito físico de quantidade extensiva explica a regra: mols se somam, mas molaridades não. Concentração alta em volume pequeno pode conter menos matéria do que concentração menor em volume grande. A mistura exige identificar as espécies presentes; misturar substâncias distintas pode gerar neutralização ou precipitação, e a soma simples deixa de representar o soluto livre. Uma resposta correta deve explicitar hipótese de ausência de reação, volumes e unidades. Verificar o resultado entre as concentrações iniciais é uma checagem útil para misturas ideais sem reação.",
        "example": "Misture 100 mL de KCl 0,40 mol/L com 300 mL de KCl 0,20 mol/L: mols 0,040+0,060=0,100; volume 0,400 L; concentração 0,25 mol/L. O resultado 0,25 mol/L está entre as duas concentrações iniciais, como esperado em uma mistura sem reação.",
        "pitfall": "Não use média aritmética 0,30 mol/L quando os volumes diferem.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Mistura com reação",
        "explanation": "Quando duas soluções reagem, a quantidade de cada reagente deixa de ser conservada individualmente. Escreva primeiro a equação balanceada, converta concentrações e volumes em mols, compare proporções estequiométricas e identifique o reagente limitante. Só então calcule a concentração de espécie residual ou produzida no volume final. Para neutralização de ácido forte monoprotônico e base forte monohidroxilada, a proporção H+ para OH− é 1:1. Ácidos fracos e tampões exigem análise de equilíbrio e não podem ser tratados pela mesma aproximação sem ressalvas. Em precipitação, parte do soluto sai da fase aquosa e a solubilidade precisa ser considerada. A conservação é de átomos e carga elétrica, não da concentração dos reagentes. O volume final pode não ser soma exata dos volumes iniciais. Em avaliações, erros comuns incluem subtrair molaridades diretamente e ignorar coeficientes da reação. Verifique sempre as hipóteses antes de usar a fórmula de diluição.",
        "example": "Misture 100 mL de HCl 0,10 mol/L com 50 mL de NaOH 0,10 mol/L: há 0,010 mol de ácido e 0,005 mol de base; a reação 1:1 consome 0,005 mol e sobram 0,005 mol de ácido. Se o volume final for 150 mL, a concentração residual aproximada do ácido forte será 0,005/0,150=0,033 mol/L.",
        "pitfall": "Não faça média de concentrações de espécies que reagem.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "20 mL de solução 2,0 mol/L diluídos a 200 mL produzem qual concentração?",
        "options": [
          "0,02 mol/L",
          "0,20 mol/L",
          "2,0 mol/L",
          "20 mol/L"
        ],
        "correctIndex": 1,
        "hint": "Use conservação de mols na diluição.",
        "solution": "B: 2,0×20/200=0,20 mol/L. O volume final é dez vezes maior, portanto a concentração cai para um décimo. A conservação de soluto pode ser confirmada multiplicando concentração e volume em litros antes e depois do preparo."
      },
      {
        "level": "intermediate",
        "prompt": "Misture 100 mL de 0,10 mol/L e 300 mL de 0,30 mol/L do mesmo soluto. Concentração final?",
        "options": [
          "0,20 mol/L",
          "0,30 mol/L",
          "0,25 mol/L",
          "0,40 mol/L"
        ],
        "correctIndex": 2,
        "hint": "Some os mols antes de dividir pelo volume total.",
        "solution": "C: n=0,010+0,090=0,100 mol e V=0,400 L; a concentração é 0,25 mol/L, assumindo volumes aditivos. A verificação independente compara os mols calculados em cada frasco com os mols obtidos a partir da concentração final."
      },
      {
        "level": "advanced",
        "prompt": "Misture 100 mL de HCl 0,20 mol/L e 100 mL de NaOH 0,10 mol/L. Quantos mols de HCl sobram?",
        "options": [
          "0,010 mol",
          "0,020 mol",
          "0,030 mol",
          "0 mol"
        ],
        "correctIndex": 0,
        "hint": "Neutralização HCl e NaOH ocorre na proporção 1:1.",
        "solution": "A: inicialmente 0,020 mol de ácido e 0,010 mol de base; consumidos 0,010 mol de ácido, restam 0,010 mol. O reagente limitante é a base; subtrair concentrações diretamente seria incorreto, pois os volumes podem diferir."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Desintegração radioativa: meia-vida, datação e uso de radioisótopos",
    "objective": "Modelar decaimento radioativo, calcular meias-vidas e interpretar datação radiométrica e uso de radioisótopos com suas hipóteses e limites.",
    "prerequisites": [
      "Isótopos",
      "Potências",
      "Núcleo atômico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Meia-vida física",
        "explanation": "A meia-vida física é o tempo necessário para que, estatisticamente, metade dos núcleos radioativos de uma amostra sofra decaimento. Não significa que a amostra desapareça integralmente após esse período. A lei N=N0×(1/2)^(t/T) expressa a quantidade remanescente após tempo t para meia-vida T constante. Depois de três meias-vidas, resta um oitavo dos núcleos iniciais. O instante de desintegração de um núcleo individual é imprevisível, embora o comportamento de populações numerosas seja estatisticamente regular. A atividade, medida em becquerels, representa desintegrações por segundo e diminui proporcionalmente à quantidade do radionuclídeo. A massa total do recipiente pode incluir produtos-filhos e não necessariamente cai na mesma proporção. Radiações alfa, beta e gama possuem naturezas distintas. O fenômeno é nuclear e não deve ser confundido com rapidez de reação química alterada por temperatura. Interpretar porcentagens requer distinguir núcleos radioativos de massa total.",
        "example": "Com 80 mg de radionuclídeo e meia-vida de cinco anos, após cinco anos restam 40 mg; após dez, 20 mg; após quinze, 10 mg. Cada etapa multiplica a quantidade restante por 1/2, sem prever qual núcleo individual decairá.",
        "pitfall": "Não confunda meia-vida com desaparecimento total do material.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Datação radiométrica",
        "explanation": "A datação radiométrica estima o intervalo desde um evento por meio de proporções isotópicas e taxas de decaimento conhecidas. É necessário estabelecer o que foi datado e se o sistema permaneceu suficientemente fechado. O carbono-14 possui meia-vida aproximada de 5.730 anos e é útil para materiais orgânicos de idades compatíveis. Não é método apropriado para datar diretamente rochas ígneas com bilhões de anos; outros sistemas isotópicos, como urânio-chumbo, são empregados conforme o material. Uma amostra com 25% da atividade inicial corresponde aproximadamente a duas meias-vidas, mas a idade radiocarbônica precisa de calibração para conversão em idade calendárica. Contaminação e efeitos reservatório podem distorcer resultados. O método depende de hipóteses verificáveis, amostras de referência e controle de qualidade. Uma idade numérica não é leitura direta de um relógio, mas inferência apoiada em modelo físico e contexto geológico ou arqueológico.",
        "example": "Se resta 25% da atividade inicial de C-14, a fração 1/4 indica duas meias-vidas; 2×5.730=11.460 anos de idade radiocarbônica aproximada. A porcentagem de atividade pressupõe referência adequada e ausência de contaminação significativa; a idade deve ser calibrada.",
        "pitfall": "Não use carbono-14 indiscriminadamente para rochas antigas.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Traçadores e segurança",
        "explanation": "Radioisótopos podem servir como traçadores em medicina e pesquisa, e também em terapia, dependendo da emissão e comportamento químico. Meia-vida física descreve decaimento nuclear; meia-vida biológica descreve eliminação pelo organismo. Quando ambos os processos são exponenciais independentes, a meia-vida efetiva obedece 1/Tef=1/Tf+1/Tb. Atividade em Bq não equivale à dose absorvida em Gy nem à dose efetiva em Sv. A exposição depende de energia, tempo, distância, blindagem e incorporação. Princípios de proteção radiológica incluem justificação e otimização. Não basta escolher um radionuclídeo de meia-vida curta para garantir segurança, porque a energia e a distribuição no organismo importam. A emissão nuclear não é acelerada simplesmente aquecendo uma amostra como uma reação química. Em exercícios, identifique a grandeza pedida antes de calcular e separe remoção biológica de transformação nuclear.",
        "example": "Com meia-vida física de 6 h e biológica de 6 h, 1/Tef=1/6+1/6=1/3 h⁻¹; a meia-vida efetiva é 3 h. O cálculo exige processos exponenciais independentes e não fornece diretamente dose ou risco radiológico.",
        "pitfall": "Não converta Bq em Gy sem dados físicos de exposição.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "64 g com meia-vida de 4 h: quanto resta após 12 h?",
        "options": [
          "32 g",
          "16 g",
          "8 g",
          "4 g"
        ],
        "correctIndex": 2,
        "hint": "São três meias-vidas sucessivas.",
        "solution": "C: 64→32→16→8 g. Três reduções pela metade deixam 1/8 do radionuclídeo original. A redução sucessiva pela metade é estatística, e os produtos do decaimento podem continuar no recipiente."
      },
      {
        "level": "intermediate",
        "prompt": "C-14 com 25% de atividade inicial: idade aproximada?",
        "options": [
          "5.730 anos",
          "11.460 anos",
          "17.190 anos",
          "22.920 anos"
        ],
        "correctIndex": 1,
        "hint": "Um quarto equivale a duas meias-vidas.",
        "solution": "B: 2×5.730=11.460 anos, antes de calibração radiocarbônica e correções apropriadas. O cálculo estima idade radiocarbônica antes da calibração; a amostra e a referência precisam ser apropriadas."
      },
      {
        "level": "advanced",
        "prompt": "Meia-vida física e biológica de 6 h cada: meia-vida efetiva?",
        "options": [
          "12 h",
          "6 h",
          "9 h",
          "3 h"
        ],
        "correctIndex": 3,
        "hint": "Some as taxas inversas das meias-vidas.",
        "solution": "D: 1/Tef=1/6+1/6=1/3, portanto Tef=3 h, porque os dois mecanismos atuam simultaneamente. A meia-vida efetiva é menor porque decaimento e eliminação atuam simultaneamente, sem serem o mesmo fenômeno."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Trabalho realizado por forças conservativas e não conservativas",
    "objective": "Calcular trabalho mecânico e distinguir forças conservativas e dissipativas, aplicando energia potencial e balanços de energia em trajetórias reais.",
    "prerequisites": [
      "Força",
      "Cosseno",
      "Energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Trabalho mecânico",
        "explanation": "Trabalho mecânico mede transferência de energia associada à componente de uma força ao longo do deslocamento. Para força constante e deslocamento retilíneo, W=F d cosθ, em joules, com θ entre os vetores força e deslocamento. Se a força aponta no mesmo sentido, o trabalho é positivo; se aponta contra, negativo; se perpendicular, zero. O fato de existir força não garante trabalho: segurar uma mala parada pode exigir esforço muscular, mas não há trabalho mecânico dessa força sobre a mala sem deslocamento. A força normal em piso horizontal ideal realiza trabalho nulo no deslocamento horizontal. O trabalho resultante é a soma algébrica dos trabalhos de todas as forças, e o teorema trabalho–energia estabelece Wresultante=ΔK. Em trajetórias curvas ou forças variáveis, a expressão simples requer integração da componente tangencial. A palavra trabalho na Física tem definição precisa, diferente do esforço cotidiano. Antes de calcular, desenhe as forças e determine o ângulo correto.",
        "example": "Uma força de 15 N empurra caixa por 4 m no mesmo sentido: W=15×4×cos0°=60 J. Se a força apontasse em sentido oposto, o trabalho seria −60 J. O valor é positivo porque a força e o deslocamento apontam no mesmo sentido, isto é, θ=0°.",
        "pitfall": "Não aplique W=Fd sem considerar o ângulo entre força e deslocamento.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Forças conservativas",
        "explanation": "Força conservativa realiza trabalho independente do caminho entre dois pontos, e seu trabalho em percurso fechado é zero. Gravidade em campo estático e mola ideal são exemplos em seus modelos. A variação de energia potencial satisfaz ΔU=−Wconservativa. Perto da superfície da Terra, com g aproximadamente constante, U=mgh e o trabalho do peso é mg(h inicial−h final). Para mola ideal, U=kx²/2. A energia mecânica K+U se conserva quando somente forças conservativas realizam trabalho no sistema considerado. Atrito cinético pode reduzir energia mecânica, transformando-a em energia interna, sem destruir energia total. Duas rampas diferentes entre mesmas alturas produzem o mesmo trabalho do peso ideal, embora o trabalho do atrito possa variar. O sinal de ΔU deve ser verificado com alturas inicial e final. O modelo depende de campo e referencial apropriados, e não de uma fórmula aplicada sem condições.",
        "example": "Massa de 2 kg desce de 5 m para 2 m com g=10 m/s²: Wpeso=2×10×(5−2)=60 J; a energia potencial diminui 60 J. O resultado independe do formato da rampa quando o campo gravitacional é conservativo e aproximadamente uniforme.",
        "pitfall": "Não confunda perda de energia potencial com desaparecimento de energia total.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Forças dissipativas",
        "explanation": "Atrito cinético é força não conservativa cujo trabalho pode depender do comprimento do caminho. Para força aproximadamente constante contrária ao movimento, Watr=−fL, com L igual à distância percorrida. Em piso horizontal ideal, f=μN e N=mg quando não há outras forças verticais. Um objeto pode ir e voltar ao mesmo ponto, tendo deslocamento líquido zero, mas dissipar energia ao longo do percurso. O balanço Δ(K+U)=Wnão conservativas ajuda a organizar sistemas com energia potencial definida. A resistência do ar depende frequentemente da velocidade e requer modelos mais elaborados. O atrito estático sem deslizamento exige análise própria; não se deve aplicar indiscriminadamente a expressão do atrito cinético. A energia total continua conservada quando se incluem energia interna e outras formas. Em exercícios, diferencie distância percorrida de deslocamento, e verifique se o corpo completa o trajeto indicado antes de calcular o trabalho.",
        "example": "Uma caixa de 5 kg desliza 6 m com μ=0,20 e g=10 m/s²: N=50 N; f=10 N; Watr=−10×6=−60 J, se percorre todo o trecho. O sinal negativo indica transferência de energia mecânica para outras formas, não destruição de energia.",
        "pitfall": "Não use deslocamento líquido no lugar do comprimento percorrido para calcular atrito.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Força 10 N faz 60° com deslocamento 4 m. Trabalho?",
        "options": [
          "20 J",
          "40 J",
          "80 J",
          "10 J"
        ],
        "correctIndex": 0,
        "hint": "Calcule Fdcos60°.",
        "solution": "A: 10×4×0,5=20 J. A componente paralela da força é metade da intensidade total. O fator cos60° representa a projeção da força na direção do deslocamento, não uma alteração da distância."
      },
      {
        "level": "intermediate",
        "prompt": "Massa 3 kg desce 2 m com g=10 m/s². Trabalho do peso?",
        "options": [
          "−60 J",
          "6 J",
          "30 J",
          "60 J"
        ],
        "correctIndex": 3,
        "hint": "Peso e deslocamento têm mesmo sentido.",
        "solution": "D: 3×10×2=60 J, positivo na descida; energia potencial diminui no mesmo valor. O peso realiza trabalho positivo na descida e a energia potencial gravitacional diminui na mesma magnitude."
      },
      {
        "level": "advanced",
        "prompt": "Atrito 8 N contrário ao movimento por 5 m. Trabalho?",
        "options": [
          "40 J",
          "−40 J",
          "−13 J",
          "0 J"
        ],
        "correctIndex": 1,
        "hint": "O cosseno entre força e deslocamento é −1.",
        "solution": "B: W=8×5×(−1)=−40 J. O trabalho negativo corresponde à redução de energia mecânica. O atrito se opõe ao movimento e seu trabalho é negativo mesmo quando o deslocamento total de um percurso fechado é zero."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Construção e análise de árvores filogenéticas",
    "objective": "Interpretar cladogramas por ancestralidade comum e sinapomorfias, distinguindo homologia, convergência e incerteza de reconstruções filogenéticas.",
    "prerequisites": [
      "Evolução",
      "Ancestralidade",
      "Homologia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Nós e ramos",
        "explanation": "Árvores filogenéticas representam hipóteses de relações evolutivas entre linhagens. Ramos representam linhagens e nós internos indicam ancestrais comuns ou divergências inferidas. Grupos-irmãos compartilham um ancestral exclusivo mais recente que o compartilhado com outros grupos. A raiz estabelece direção de ancestralidade; uma árvore não enraizada não indica sozinha essa direção. Proximidade de nomes no papel não é critério confiável, pois girar ramos em torno de um nó não altera relações. Espécies atuais nas pontas não são necessariamente ancestrais diretos umas das outras, mas linhagens contemporâneas com história própria. Evidências anatômicas, moleculares e fósseis podem sustentar hipóteses, com limitações de amostragem e método. A evolução não forma uma escada de organismos superiores e inferiores. A leitura correta localiza o ancestral comum mais recente, independentemente da posição gráfica dos nomes. Uma árvore é uma hipótese científica passível de revisão.",
        "example": "Na árvore ((A,B),C), A e B compartilham nó exclusivo, enquanto C se separa antes. Girar A e B no desenho não altera o parentesco. O ancestral exclusivo de A e B é mais recente que o ancestral compartilhado com C; a ordem dos nomes é irrelevante.",
        "pitfall": "Não interprete proximidade visual como parentesco nem trate organismos atuais como ancestrais obrigatórios.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Sinapomorfias",
        "explanation": "Um clado monofilético reúne ancestral comum e todos os seus descendentes pertinentes. Sinapomorfias são caracteres derivados compartilhados que podem apoiar a identificação de clados. Um grupo externo ajuda a inferir qual estado do caráter é ancestral. Homologia é semelhança de origem evolutiva comum, enquanto convergência pode gerar funções parecidas em linhagens distintas. Asas de aves e insetos exercem função semelhante, mas não são o mesmo órgão alar herdado de um ancestral comum com asas. Membros anteriores de tetrápodes compartilham estrutura ancestral apesar de funções distintas. Um grupo parafilético exclui alguns descendentes de seu ancestral; um polifilético reúne linhagens sem incluir o ancestral pertinente. Caracteres isolados podem enganar, por isso hipóteses devem ser confrontadas com múltiplas evidências. Semelhança superficial não demonstra parentesco exclusivo. A classificação filogenética procura refletir a história de divergências.",
        "example": "Se A e B possuem mutação derivada ausente em C e no grupo externo, compare estados e considere a mutação possível sinapomorfia de A+B, verificando outros caracteres. A mutação deve ser confrontada com caracteres independentes, pois convergência ou reversão podem confundir a análise.",
        "pitfall": "Não confunda analogia funcional com homologia evolutiva.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Topologia e incerteza",
        "explanation": "Uma árvore pode mostrar apenas topologia ou usar comprimentos de ramos proporcionais ao tempo ou às mudanças genéticas, conforme escala e legenda. Sem escala, ramo visualmente longo não representa necessariamente mais milhões de anos. Suporte estatístico como bootstrap estima estabilidade de agrupamentos em reamostragens, não certeza absoluta de uma árvore. Árvores de genes podem discordar de árvores de espécies por hibridação, transferência horizontal ou separação incompleta de linhagens. Fósseis podem restringir idades de divergência, mas precisam de contexto geológico e posição filogenética. Comparar árvores exige observar clados definidos por nós, não ordem de nomes. Rotações em um nó preservam topologia; transferir uma espécie para outro clado altera a hipótese. A inferência evolutiva é revisável e não implica hierarquia moral de espécies. Avaliar dados e métodos é tão importante quanto memorizar terminologia. Uma árvore é modelo interpretativo, não fotografia direta do passado.",
        "example": "((A,B),C) e ((B,A),C) apresentam a mesma topologia porque A e B seguem agrupados; ((A,C),B) altera o agrupamento e constitui outra hipótese. As duas primeiras árvores compartilham o clado A+B, enquanto a terceira define um clado A+C diferente.",
        "pitfall": "Não interprete bootstrap como certeza absoluta nem comprimentos sem escala como tempo.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na árvore ((A,B),C), quais são grupos-irmãos?",
        "options": [
          "A e C",
          "B e C",
          "Todos separadamente",
          "A e B"
        ],
        "correctIndex": 3,
        "hint": "Encontre o nó exclusivo mais recente.",
        "solution": "D: A e B compartilham ancestral exclusivo mais recente; C diverge antes na árvore apresentada. A posição gráfica não é decisiva: o critério é o nó compartilhado e a história de divergência."
      },
      {
        "level": "intermediate",
        "prompt": "Asas de aves e insetos comprovam homologia do órgão alar?",
        "options": [
          "Sim, função igual prova homologia.",
          "Não; pode haver convergência funcional.",
          "Sim, toda semelhança é sinapomorfia.",
          "Anatomia nunca informa filogenia."
        ],
        "correctIndex": 1,
        "hint": "Compare origem evolutiva e função.",
        "solution": "B: a função de voo pode surgir independentemente. Semelhança funcional não basta para provar origem comum do órgão alar. Funções semelhantes podem resultar de convergência, portanto a origem dos caracteres deve ser investigada."
      },
      {
        "level": "advanced",
        "prompt": "Qual mudança preserva topologia?",
        "options": [
          "Girar ramos em torno de nó sem alterar clados.",
          "Mover espécie para outro clado.",
          "Agrupar por ordem alfabética.",
          "Eliminar ancestral comum."
        ],
        "correctIndex": 0,
        "hint": "Rotações não modificam ancestralidade.",
        "solution": "A: rotações em torno do mesmo nó mudam o desenho, mas preservam os grupos que compartilham ancestral exclusivo. A topologia é definida por clados e nós, não pela disposição visual dos rótulos."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Feudalismo e mundo feudal",
    "objective": "Explicar a organização do mundo feudal, diferenciando servidão e vassalagem e avaliando mudanças econômicas e sociais na Europa medieval.",
    "prerequisites": [
      "Império Romano",
      "História medieval",
      "Análise de fontes"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Senhorio e servidão",
        "explanation": "Feudalismo é conceito historiográfico usado para examinar relações políticas, econômicas e sociais de parte da Europa medieval, especialmente ocidental. Não descreve uma organização idêntica em todos os lugares nem uma sociedade imutável. Senhorios reuniam direitos e obrigações relacionados à terra, à produção agrícola e a prestações de camponeses. Servidão não é automaticamente sinônimo de escravidão: servos podiam ter obrigações e restrições específicas sem que sua condição jurídica equivalesse à propriedade pessoal de alguém. Existiam camponeses livres, dependentes e trabalhadores urbanos. A agricultura era central em muitas regiões, mas comércio e mercados também existiam. Poderes régios, aristocráticos, religiosos e locais podiam se sobrepor e competir. Para compreender uma fonte, situe região e século, e distinga normas escritas de práticas sociais. A imagem de castelos isolados com economia totalmente fechada simplifica a diversidade histórica. Uma interpretação sólida compara evidências e reconhece variações.",
        "example": "Um camponês cultiva parcela para sustento e trabalha dias nas terras do senhor: identifique produção própria, serviço obrigatório e dependência, sem classificá-lo automaticamente como escravidão. A conclusão é restrita ao senhorio descrito e não deve ser estendida automaticamente a todas as regiões medievais.",
        "pitfall": "Não generalize servidão a todos os habitantes medievais.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "intermediate",
        "title": "Vassalagem",
        "explanation": "Vassalagem podia envolver juramentos de fidelidade, proteção, conselho e concessões de benefícios entre elites, inclusive direitos sobre terras ou rendas. Essa relação não se confunde com prestações de camponeses no senhorio: vassalo e servo são categorias distintas. A autoridade medieval era compartilhada e disputada por reis, nobres, bispos, mosteiros e cidades, com tribunais, impostos e privilégios diferentes. A imagem de uma pirâmide feudal perfeitamente rígida é simplificação didática; vínculos podiam se sobrepor. Instituições religiosas influenciavam educação, propriedade e legitimação, mas não controlavam uniformemente toda a Europa. Cartas e crônicas registram interesses de seus produtores, exigindo comparação de fontes. Monarquias se fortaleceram em alguns lugares por processos longos de conflito e negociação, sem extinguir instantaneamente poderes locais. A diversidade de épocas e regiões impede transformar um modelo escolar em lei histórica universal.",
        "example": "Um nobre jura fidelidade e recebe rendas de terra: identifique compromisso entre elites, diferencie obrigações camponesas e não presuma controle absoluto de toda a região. A fonte escrita expressa um vínculo de elite, não a totalidade das práticas sociais ou dos poderes locais.",
        "pitfall": "Não trate vassalagem, vínculo político entre nobres, como sinônimo de servidão camponesa, ligada a obrigações no senhorio.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Mudanças e crises",
        "explanation": "Entre os séculos XI e XIII, expansão agrícola, comércio, cidades e crescimento demográfico alteraram relações em partes da Europa ocidental, sem eliminar imediatamente senhorios. Técnicas e redes mercantis tiveram impactos variados por região. Nos séculos XIV e XV, guerras, problemas de abastecimento e a Peste Negra transformaram populações e trabalho em ritmos distintos. A mortalidade podia reduzir oferta de trabalhadores e modificar negociações, mas senhores e autoridades responderam de maneiras diferentes. O conceito de feudalismo possui limites quando aplicado indiscriminadamente fora do contexto europeu e é discutido por historiadores. Para recuperar experiências camponesas, é necessário cruzar documentação jurídica, registros fiscais e arqueologia, pois muitas fontes escritas privilegiam elites. Crises não encerram automaticamente instituições. Análises históricas distinguem continuidades e rupturas, causas e consequências, evitando narrativa de evolução inevitável rumo a um único modelo econômico.",
        "example": "Após epidemia que reduz trabalhadores, camponeses podem negociar condições e senhores tentar reforçar obrigações; compare leis e poderes locais antes de concluir um efeito uniforme. O resultado histórico depende de legislação, estrutura agrária, conflitos e oportunidades de cada região.",
        "pitfall": "Não afirme que a Peste Negra aboliu imediatamente relações senhoriais em toda a Europa.",
        "steps": [
          "Identifique dados, pressupostos e conceitos relevantes.",
          "Aplique o procedimento explicitado no exemplo resolvido.",
          "Verifique hipóteses, unidades e erros frequentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual distinção entre servidão e escravidão é adequada?",
        "options": [
          "São sempre idênticas.",
          "Servidão tinha obrigações específicas sem equivaler automaticamente à propriedade pessoal.",
          "Todo camponês era servo.",
          "Servos eram sempre nobres."
        ],
        "correctIndex": 1,
        "hint": "Considere diferentes condições jurídicas.",
        "solution": "B: servidão podia impor obrigações e dependência, mas não equivalia necessariamente à escravidão; existiam condições variadas. A categoria jurídica da servidão depende de tempo e lugar e não equivale automaticamente à propriedade pessoal."
      },
      {
        "level": "intermediate",
        "prompt": "O que caracterizava vassalagem?",
        "options": [
          "Era idêntica à servidão.",
          "Eliminava todos os reis.",
          "Envolvia vínculos entre elites, proteção e benefícios.",
          "Era uniforme sem sobreposições."
        ],
        "correctIndex": 2,
        "hint": "Diferencie compromissos de elites e obrigações camponesas.",
        "solution": "C: vínculos vassálicos podiam envolver fidelidade, proteção e concessões, distintos do trabalho camponês. O vínculo de vassalagem se refere a compromissos entre elites e não deve ser confundido com trabalho servil."
      },
      {
        "level": "advanced",
        "prompt": "Por que a Peste Negra não encerrou imediatamente o feudalismo?",
        "options": [
          "Efeitos e respostas variaram regionalmente e integraram processos longos.",
          "Não houve mortalidade.",
          "Toda agricultura acabou.",
          "Não havia comércio medieval."
        ],
        "correctIndex": 0,
        "hint": "Compare regiões e ritmos de mudança.",
        "solution": "A: mortalidade e respostas institucionais variaram; transformações senhoriais não ocorreram como ruptura única em toda a Europa. A crise demográfica influenciou relações de trabalho, mas não aboliu automaticamente instituições em todas as regiões."
      }
    ]
  }
];
