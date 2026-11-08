import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Kognos: autoria original; não oficial; sem homologação docente. */
export const provaoDepthBatch31Capacitors:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Capacitores. Associação de capacitores. Energia potencial elétrica armazenada em um capacitor.…",
    "objective": "Calcular capacitância e carga de capacitores ideais, distinguir conexões em série e paralelo a partir dos nós e determinar energia armazenada pelo campo elétrico com hipóteses de linearidade e segurança explícitas.",
    "prerequisites": [
      "Carga elétrica e diferença de potencial",
      "Unidades coulomb, volt e prefixo micro",
      "Circuitos elétricos, nós e conservação de carga"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Capacitância, carga e diferença de potencial",
        "explanation": "Um capacitor armazena cargas de sinais opostos em dois condutores separados por material isolante ou dielétrico, sob diferença de potencial elétrico. Para um dispositivo ideal linear, a capacitância é C=Q/ΔV, em que Q é o módulo da carga de uma placa e ΔV a tensão entre placas. Sua unidade é o farad (F), equivalente a coulomb por volt. A carga total do conjunto de placas permanece nula em um capacitor inicialmente neutro: uma placa recebe +Q e outra −Q, portanto não se deve somar módulos para definir Q na fórmula. Para um capacitor de placas paralelas de área A e distância d, desprezando bordas, C≈εA/d, com permissividade ε do meio; aumentar A aumenta C, e aumentar d diminui C. O dielétrico pode aumentar a capacitância por polarização, sem tornar o espaço entre as placas um condutor ideal. A linearidade de C e os valores de rigidez dielétrica têm limites: tensão excessiva pode provocar ruptura do isolante e descarga perigosa. Capacitância não é a mesma grandeza que corrente ou resistência. Em um problema de carga, converter microfarads e microcoulombs corretamente é tão importante quanto escolher a equação.",
        "example": "Um capacitor ideal de 20 μF é submetido a 12 V. Primeiro converta C=20×10⁻⁶ F e calcule Q=C·V=(20×10⁻⁶)×12=240×10⁻⁶ C=240 μC em módulo em cada placa. O dispositivo acumula +240 μC numa placa e −240 μC na outra.",
        "pitfall": "Não some as cargas absolutas das duas placas na fórmula Q=CV, e não conclua que o dielétrico é condutor por aumentar a capacitância.",
        "steps": [
          "Identifique a tensão entre placas e a capacitância.",
          "Converta μF e μC a unidades compatíveis.",
          "Calcule Q=CV e interprete cargas de sinais opostos."
        ]
      },
      {
        "level": "intermediate",
        "title": "Associações em paralelo e em série",
        "explanation": "Capacitores em paralelo têm terminais ligados aos mesmos dois nós do circuito, de modo que todos experimentam a mesma diferença de potencial, enquanto as cargas armazenadas podem diferir. Nesse arranjo, a capacitância equivalente é C_eq=C₁+C₂+..., pois a carga total fornecida pela fonte é a soma das cargas de cada ramo. Em série, os capacitores ficam em sequência e, para capacitores inicialmente descarregados e nós internos isolados, o módulo da carga nas placas correspondentes é igual; a tensão total é a soma das tensões de cada componente. A capacitância equivalente então satisfaz 1/C_eq=1/C₁+1/C₂+..., sendo menor que a menor capacitância individual. Não se deve confundir circuito em série com 'tensões iguais', que valeria apenas em casos particulares de capacitâncias iguais. O desenho topológico dos nós determina a associação, não a posição dos símbolos na página. As fórmulas ideais pressupõem capacitâncias lineares e ignoram capacitâncias parasitas e fugas; circuitos reais podem exigir cuidados com polaridade e limites máximos de tensão. A análise quantitativa deve distinguir o que permanece comum em cada tipo de conexão.",
        "example": "Dois capacitores de 6 μF e 3 μF, em paralelo, têm C_eq=6+3=9 μF. Se forem ligados em série, 1/C_eq=1/6+1/3=3/6, portanto C_eq=2 μF. A associação em série resulta em capacidade equivalente menor que 3 μF, a menor das duas.",
        "pitfall": "Não trocar regras de série e paralelo: em paralelo a tensão é comum e as capacitâncias somam, enquanto em série a carga ideal tem módulo comum.",
        "steps": [
          "Identifique nós para classificar a associação.",
          "Use soma direta para paralelo ou soma dos inversos em série.",
          "Verifique a relação da capacitância equivalente com as individuais."
        ]
      },
      {
        "level": "advanced",
        "title": "Energia armazenada, descarga e segurança",
        "explanation": "O trabalho necessário para carregar gradualmente um capacitor ideal aparece como energia potencial elétrica armazenada no campo entre seus condutores. Para C linear, a energia é U=½C(ΔV)², equivalente a U=Q²/(2C) ou U=½QΔV. O fator ½ é indispensável: durante o carregamento a tensão cresce de zero ao valor final, de modo que multiplicar apenas Q pelo valor máximo de V superestima a energia no modelo. Se a tensão dobra em um capacitor com capacitância constante, U quadruplica, ainda que Q apenas dobre. Na descarga através de um resistor, a energia do campo pode converter-se principalmente em calor; a energia não desaparece. Dispositivos reais apresentam resistências internas, perdas e limites de isolamento. Um capacitor desligado de uma fonte ainda pode manter carga, razão pela qual não se deve assumir ausência de risco apenas porque o circuito está desconectado. Em eletrônica, capacitores ajudam em temporização, filtragem e armazenamento transitório, sem serem equivalentes a baterias eletroquímicas. A diferença entre energia armazenada e potência instantânea precisa ser preservada: joule mede energia, e watt mede taxa de transferência.",
        "example": "Um capacitor de C=200 μF está carregado a 10 V. Calcule U=½(200×10⁻⁶ F)(10² V²)=0,010 J, isto é, 10 mJ. Se a tensão passar a 20 V mantendo C, a energia será 0,040 J, quatro vezes maior, não apenas o dobro.",
        "pitfall": "Não omita o fator ½ na energia armazenada e não considere seguro tocar capacitores apenas porque a fonte foi retirada; pode restar carga.",
        "steps": [
          "Converta a capacitância para farads.",
          "Calcule U=½CV² e confira o resultado em joules.",
          "Compare energia, tensão e condições de descarga sem confundir potência."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um capacitor ideal de 20 μF recebe tensão de 12 V. O módulo da carga em uma placa é:",
        "options": [
          "12 μC",
          "240 μC",
          "1,67 μC",
          "0,24 C"
        ],
        "correctIndex": 1,
        "hint": "Identifique o tipo de associação e converta as unidades antes de calcular.",
        "solution": "Pela relação Q=CV, temos Q=(20×10⁻⁶ F)(12 V)=240×10⁻⁶ C=240 μC. Uma placa possui carga +Q e a outra −Q; usar a soma dos módulos na fórmula duplicaria indevidamente o valor."
      },
      {
        "level": "intermediate",
        "prompt": "Capacitores ideais de 6 μF e 3 μF ligados em série apresentam capacitância equivalente:",
        "options": [
          "9 μF",
          "3 μF",
          "2 μF",
          "18 μF"
        ],
        "correctIndex": 2,
        "hint": "Identifique o tipo de associação e converta as unidades antes de calcular.",
        "solution": "Em série, 1/C_eq=1/6+1/3=1/2 em unidades inversas de μF. Assim C_eq=2 μF, menor que a menor capacitância individual. A soma 9 μF corresponde à conexão em paralelo."
      },
      {
        "level": "advanced",
        "prompt": "A energia armazenada em C=200 μF sob tensão de 10 V é:",
        "options": [
          "0,010 J",
          "0,10 J",
          "1,0 J",
          "10 J"
        ],
        "correctIndex": 0,
        "hint": "Identifique o tipo de associação e converta as unidades antes de calcular.",
        "solution": "Aplicando U=½CV², temos U=½×200×10⁻⁶×10²=0,010 J. A expressão incorpora a elevação gradual da tensão durante a carga, e a unidade obtida é joule, não watt."
      }
    ]
  }
];
