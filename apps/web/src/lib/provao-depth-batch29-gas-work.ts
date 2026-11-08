import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material original, não oficial, sem homologação docente. */
export const provaoDepthBatch29GasWork:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Trabalho realizado pelas forças exercidas por um gás. Energia interna. Transformações cíclicas",
    "objective": "Calcular o trabalho pΔV e interpretar áreas em diagramas pressão-volume, aplicar a primeira lei com convenções de sinal e analisar transformações especiais e ciclos sem confundir grandezas de processo com funções de estado.",
    "prerequisites": [
      "Pressão, volume e conversões entre litros e metros cúbicos",
      "Conservação de energia e formas de transferência",
      "Leitura de gráficos e conceito de gás ideal"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Trabalho de expansão e área no diagrama p×V",
        "explanation": "Um gás pode realizar trabalho sobre um pistão móvel ao expandir-se contra uma pressão externa. Em uma transformação quase estática, com pressão do gás bem definida ao longo do caminho, o trabalho realizado pelo sistema é W=∫p,dV; em processo isobárico, a expressão reduz-se a W=p·(V_f−V_i). No sistema internacional, p deve estar em pascals e volume em metros cúbicos, de modo que Pa·m³ corresponde a joule. Expansão produz W positivo nessa convenção, enquanto compressão dá W negativo, significando trabalho realizado sobre o gás. A área sob a curva no plano pressão-volume permite visualizar o cálculo, mas curvas diferentes com os mesmos estados inicial e final podem gerar trabalhos diferentes: trabalho não é função de estado. O uso de p do gás na integral pressupõe uma transformação quase estática; num processo abrupto contra pressão externa constante, deve-se considerar a pressão que efetivamente se opõe ao deslocamento. A expressão não descreve por si só todas as perdas por atrito ou turbulência. Em um recipiente rígido não ocorre variação de volume e, portanto, o trabalho de fronteira é nulo mesmo que pressão e temperatura mudem.",
        "example": "Um gás sofre expansão isobárica a p=2,0×10⁵ Pa, de 2,0 L para 5,0 L. Converta ΔV=3,0 L=3,0×10⁻³ m³. Calcule W=pΔV=(2,0×10⁵)(3,0×10⁻³)=600 J. Como ΔV>0, o trabalho realizado pelo gás é positivo.",
        "pitfall": "Não usar litros diretamente com pascal para obter joules nem afirmar que o trabalho depende apenas dos estados inicial e final, independentemente do caminho.",
        "steps": [
          "Identifique a convenção de sinal para o trabalho do gás.",
          "Converta volume para m³ e pressão para Pa.",
          "Calcule W e interprete expansão ou compressão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Primeira lei, energia interna e processos especiais",
        "explanation": "A primeira lei da termodinâmica aplicada a um sistema fechado, adotando W como trabalho realizado pelo gás, pode ser escrita ΔU=Q−W. O calor Q é positivo quando entra no sistema; o trabalho W é positivo quando sai como energia mecânica. A energia interna é função de estado e depende das condições do material, ao contrário do calor e do trabalho, que são modos de transferência energética durante um processo. Para gás ideal monoatômico com quantidade fixa de matéria, U=3nRT/2 e ΔU=3nRΔT/2, independentemente da transformação percorrida. Em processo isotérmico de gás ideal, ΔT=0 e ΔU=0; portanto Q=W. Em processo isovolumétrico, W=0, e a primeira lei exige ΔU=Q. Em transformação adiabática não há troca de calor (Q=0), mas a temperatura pode variar por trabalho, logo ΔU=−W. A palavra 'adiabático' não significa 'isotérmico'. Para gases reais ou processos com reações químicas, relações mais complexas podem ser necessárias, e a fórmula monoatômica não se aplica indiscriminadamente a qualquer gás. A conservação de energia exige indicar o sistema e o sinal de cada transferência, evitando regras memorizadas sem definição.",
        "example": "Um gás absorve Q=900 J e realiza W=600 J sobre um pistão. Pela primeira lei, ΔU=900−600=+300 J: sua energia interna aumenta. Se outra transformação tivesse Q=200 J e W=500 J, obteríamos ΔU=−300 J; o sinal negativo indicaria redução de energia interna.",
        "pitfall": "Não confundir temperatura constante com ausência de fluxo de calor nem interpretar adiabático como processo em que a energia interna obrigatoriamente se conserva.",
        "steps": [
          "Defina os sinais de Q e de W em relação ao sistema.",
          "Calcule ΔU=Q−W antes de classificar a transformação.",
          "Confirme se o gás ideal e o tipo de processo justificam simplificações."
        ]
      },
      {
        "level": "advanced",
        "title": "Transformações cíclicas, trabalho líquido e sentido do ciclo",
        "explanation": "Um ciclo termodinâmico devolve o sistema ao mesmo estado macroscópico inicial. Como a energia interna é função de estado, a soma de suas variações ao longo de um ciclo é zero: ΔU_ciclo=0. Consequentemente, pela primeira lei, Q_líquido=W_líquido sob a convenção de trabalho feito pelo gás. Em um diagrama p×V com percurso fechado, o módulo do trabalho líquido corresponde à área geométrica encerrada quando o caminho é quase estático. Ciclos no sentido horário apresentam trabalho líquido positivo pelo gás, enquanto ciclos anti-horários têm trabalho líquido negativo nessa convenção, exigindo trabalho externo. Isso não implica que toda etapa de um ciclo tenha expansão ou calor positivo: em algumas etapas o gás pode ser comprimido ou liberar energia. Para um ciclo retangular, o módulo do trabalho é Δp·ΔV, desde que as pressões e os volumes estejam em unidades coerentes. Um ciclo real envolve dissipação e não deve ser comparado diretamente com um percurso ideal sem discutir irreversibilidades. O trabalho líquido de um ciclo difere do trabalho de uma transformação isolada; somar somente os trabalhos positivos levaria a uma conclusão errada.",
        "example": "Em um ciclo retangular, a pressão varia de 1,0×10⁵ a 3,0×10⁵ Pa e o volume de 1,0 a 4,0 L. A área encerrada é ΔpΔV=(2,0×10⁵)(3,0×10⁻³)=600 J. Se o ciclo for horário, W_líquido=+600 J e Q_líquido=+600 J.",
        "pitfall": "Não afirmar que a energia interna aumenta após um ciclo completo: ao voltar ao mesmo estado, ΔU é zero, ainda que calor e trabalho líquidos não o sejam.",
        "steps": [
          "Verifique que o estado final coincide com o inicial.",
          "Determine área e sentido no diagrama p×V.",
          "Aplique ΔU_ciclo=0 e relacione trabalho e calor líquidos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um gás expande-se a 2×10⁵ Pa, de 2 L para 5 L. O trabalho realizado pelo gás é:",
        "options": [
          "60 J",
          "600 J",
          "1500 J",
          "−600 J"
        ],
        "correctIndex": 1,
        "hint": "Defina os sinais, converta as unidades e use a primeira lei.",
        "solution": "A expansão é de 3 L=3×10⁻³ m³. Em transformação isobárica, W=pΔV=2×10⁵×3×10⁻³=600 J, positivo por se tratar de expansão na convenção de trabalho realizado pelo sistema."
      },
      {
        "level": "intermediate",
        "prompt": "Um gás recebe 900 J de calor e realiza 600 J de trabalho. A variação da energia interna é:",
        "options": [
          "−1500 J",
          "−300 J",
          "+300 J",
          "+1500 J"
        ],
        "correctIndex": 2,
        "hint": "Defina os sinais, converta as unidades e use a primeira lei.",
        "solution": "Pela primeira lei, adotando Q positivo quando entra e W positivo quando o gás realiza trabalho, ΔU=Q−W=900−600=+300 J. A energia interna aumenta embora parte do calor recebido tenha sido convertida em trabalho."
      },
      {
        "level": "advanced",
        "prompt": "Em um ciclo fechado horário no gráfico p×V, cuja área é 600 J, o resultado é:",
        "options": [
          "W_líquido=+600 J e ΔU_ciclo=0",
          "W_líquido=−600 J e ΔU_ciclo=+600 J",
          "W_líquido=0 e ΔU_ciclo=+600 J",
          "W_líquido=−600 J e ΔU_ciclo=0"
        ],
        "correctIndex": 0,
        "hint": "Defina os sinais, converta as unidades e use a primeira lei.",
        "solution": "O ciclo horário corresponde a trabalho líquido positivo realizado pelo gás, igual à área interna do laço no modelo quase estático. Como o sistema retorna ao estado inicial, ΔU_ciclo=0, e o calor líquido iguala o trabalho líquido."
      }
    ]
  }
];
