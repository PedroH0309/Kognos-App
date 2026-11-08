import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Autoria original Kognos, não oficial, sem homologação docente. */
export const provaoDepthBatch28HeatEngines:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Máquinas térmicas e máquinas frigoríficas. O ciclo de Carnot",
    "objective": "Analisar máquinas térmicas e refrigeradores em ciclos, aplicar conservação de energia, calcular rendimento e limites de Carnot em kelvin e interpretar corretamente o coeficiente de desempenho e suas restrições.",
    "prerequisites": [
      "Primeira lei da termodinâmica e trocas de calor",
      "Temperatura absoluta em kelvin e conversões",
      "Proporções, trabalho e conservação de energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Máquina térmica e balanço de energia",
        "explanation": "Uma máquina térmica funciona em ciclos, recebe energia na forma de calor de uma fonte quente, converte parte dessa energia em trabalho e rejeita a parcela restante a uma fonte fria. Como retorna ao mesmo estado ao fim de cada ciclo, a variação de sua energia interna é nula no ciclo completo; pela primeira lei da termodinâmica, W=Q_h−Q_c, tomando Q_h e Q_c como módulos positivos do calor recebido e rejeitado. O rendimento térmico é η=W/Q_h=1−Q_c/Q_h, normalmente representado em percentual. Essa expressão impede que se confunda trabalho útil com todo o calor recebido. A segunda lei impõe restrições adicionais: uma máquina cíclica operando com duas fontes, ambas com temperaturas absolutas positivas, não consegue transformar integralmente em trabalho todo o calor retirado da fonte quente. Por isso, rendimento de 100% não é atingível nesse modelo. O motor de um automóvel não utiliza energia química diretamente como trabalho mecânico sem etapas: a combustão aquece gases, que realizam trabalho e também liberam calor residual. A análise de rendimento precisa especificar sistema, fontes, fluxo de energia e condições de operação; a primeira lei, sozinha, não determina a máxima eficiência.",
        "example": "Uma máquina recebe 1.000 J da fonte quente em cada ciclo e entrega 300 J à fonte fria. A conservação de energia impõe W=1.000−300=700 J. Seu rendimento é η=700/1.000=0,70=70%; não significa que 70% de toda energia da usina seja útil sem definir o sistema.",
        "pitfall": "Não declarar que Q_h=Q_c em um motor que produz trabalho, nem afirmar que um ciclo perfeito pode converter integralmente calor de uma única fonte em trabalho.",
        "steps": [
          "Defina calor recebido, calor rejeitado e trabalho líquido.",
          "Aplique W=Q_h−Q_c com módulos coerentes.",
          "Calcule η=W/Q_h e confronte a limitação imposta pela segunda lei."
        ]
      },
      {
        "level": "intermediate",
        "title": "Ciclo reversível de Carnot e temperaturas absolutas",
        "explanation": "O ciclo de Carnot é um modelo reversível ideal que estabelece o limite superior do rendimento para máquinas térmicas que operam entre duas fontes de temperaturas constantes T_h e T_c, expressas em kelvin. O ciclo reversível combina duas transformações isotérmicas e duas adiabáticas ideais, em vez de uma única expansão sem trocas adicionais. Para T_h>T_c>0, η_Carnot=1−T_c/T_h. Esse rendimento depende somente das temperaturas das fontes, não do combustível específico nem do material do pistão. Uma máquina real entre as mesmas fontes, sujeita a dissipação, atrito, diferenças finitas de temperatura e irreversibilidades, não supera o rendimento de Carnot. Converter Celsius diretamente na razão é incorreto, pois a proporção deve usar temperatura absoluta. Quando a fonte quente fica mais quente, mantida a fria, o limite aumenta; quando a fonte fria se aproxima da quente, o trabalho máximo obtido para cada quantidade de calor recebida diminui. O cálculo fornece teto teórico, não previsão do rendimento efetivo de uma instalação. O ciclo de Carnot não descreve todos os detalhes de um motor a combustão, de uma turbina ou de uma central elétrica reais; ele serve para comparar a possibilidade termodinâmica de conversão.",
        "example": "Uma máquina ideal opera entre 600 K e 300 K. Então η_C=1−300/600=0,50=50%. Se ela recebe Q_h=1.200 J por ciclo, o trabalho máximo reversível seria W=0,50×1.200=600 J. Uma máquina real com as mesmas fontes deve fornecer menos trabalho por esse calor recebido.",
        "pitfall": "Não usar 327°C/27°C diretamente em η_C=1−T_c/T_h. Temperaturas precisam ser convertidas para kelvin antes da divisão, e o resultado é um limite teórico.",
        "steps": [
          "Converta temperaturas para kelvin e confira T_h>T_c.",
          "Use η_C=1−T_c/T_h e calcule o trabalho máximo.",
          "Diferencie o máximo reversível do rendimento real, sempre menor."
        ]
      },
      {
        "level": "advanced",
        "title": "Refrigeração, bomba de calor e coeficiente de desempenho",
        "explanation": "Máquinas frigoríficas operam no sentido de transferir calor de uma região fria para uma quente, consumindo trabalho externo. Uma geladeira retira calor Q_c do seu interior e descarrega Q_h no ambiente, obedecendo a Q_h=Q_c+W quando os símbolos representam módulos positivos por ciclo. Diferentemente do rendimento de um motor, o desempenho de um refrigerador é expresso pelo coeficiente COP_frio=Q_c/W. Esse coeficiente pode ser maior que 1 sem violar conservação de energia, porque mede calor transferido por trabalho gasto, não conversão de trabalho em energia criada. Para um refrigerador reversível ideal entre temperaturas absolutas T_c<T_h, COP_Carnot=T_c/(T_h−T_c); uma máquina real com a mesma diferença de temperaturas opera abaixo desse teto. Para uma bomba de calor usada em aquecimento, COP_quente=Q_h/W, que pode ser escrito como COP_frio+1, quando se trata do mesmo dispositivo idealizado. A função da máquina define qual calor deve ficar no numerador. Abrir a porta de uma geladeira funcionando no mesmo cômodo não resfria esse cômodo em regime permanente: o aparelho devolve ao ambiente o calor retirado e o trabalho recebido, gerando saldo de calor. O desempenho também depende de perdas, isolamento e condições de trabalho.",
        "example": "Um refrigerador ideal opera entre T_c=280 K e T_h=300 K. Seu COP máximo é 280/(300−280)=14. Para remover Q_c=2.800 J da região fria, o trabalho mínimo reversível seria W=Q_c/COP=2.800/14=200 J, com Q_h=3.000 J descartados na região quente.",
        "pitfall": "Não chamar COP de rendimento percentual nem interpretar COP>1 como criação de energia; também é incorreto confundir o calor retirado da geladeira com o calor rejeitado na cozinha.",
        "steps": [
          "Identifique se a finalidade é refrigerar ou aquecer.",
          "Aplique conservação de energia e selecione COP_frio ou COP_quente.",
          "Use temperaturas absolutas no limite de Carnot e discuta irreversibilidades."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma máquina recebe 1.000 J e rejeita 300 J por ciclo. Seu rendimento térmico é:",
        "options": [
          "30%",
          "100%",
          "70%",
          "130%"
        ],
        "correctIndex": 2,
        "hint": "Defina fontes, energia recebida e energia transferida antes de aplicar a fórmula.",
        "solution": "Pela primeira lei aplicada ao ciclo, W=Q_h−Q_c=1.000−300=700 J. A fração do calor recebido convertida em trabalho é 700/1.000=0,70=70%. Parte da energia precisa ser rejeitada à fonte fria."
      },
      {
        "level": "intermediate",
        "prompt": "O rendimento máximo de Carnot entre fontes a 600 K e 300 K é:",
        "options": [
          "25%",
          "50%",
          "75%",
          "100%"
        ],
        "correctIndex": 1,
        "hint": "Defina fontes, energia recebida e energia transferida antes de aplicar a fórmula.",
        "solution": "Para a máquina reversível ideal, η_C=1−T_c/T_h=1−300/600=0,5 ou 50%. O valor é limite superior para máquinas operando entre essas fontes; nenhuma irreversibilidade real aumenta o rendimento."
      },
      {
        "level": "advanced",
        "prompt": "Um refrigerador reversível opera entre 280 K e 300 K. Seu COP máximo de refrigeração é:",
        "options": [
          "0,07",
          "1,07",
          "10",
          "14"
        ],
        "correctIndex": 3,
        "hint": "Defina fontes, energia recebida e energia transferida antes de aplicar a fórmula.",
        "solution": "Para refrigerador de Carnot, COP=T_c/(T_h−T_c)=280/(300−280)=280/20=14. Isso significa transferir até 14 J de calor da região fria por joule de trabalho, sem criar energia e somente no limite ideal."
      }
    ]
  }
];
