import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral original, não oficial e sem homologação docente. */
export const provaoDepthBatch29Eclipses:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Eclipses. Sombra e penumbra. Câmara escura de orifício",
    "objective": "Usar a propagação retilínea para distinguir umbra e penumbra, explicar os alinhamentos necessários a eclipses solares e lunares e resolver problemas quantitativos de imagem invertida em câmara escura.",
    "prerequisites": [
      "Propagação retilínea da luz e fontes luminosas",
      "Semelhança de triângulos e proporcionalidade",
      "Fases e movimentos orbitais da Lua"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Luz retilínea, umbra e penumbra de fontes extensas",
        "explanation": "Em um meio transparente, homogêneo e aproximadamente isotrópico, a óptica geométrica representa a propagação luminosa por raios retilíneos. Essa idealização explica a formação de regiões de sombra quando um corpo opaco intercepta a luz. Uma fonte puntiforme ideal, ao iluminar um obstáculo, produz uma transição geométrica definida entre regiões iluminadas e não iluminadas. Já uma fonte extensa, como uma lâmpada ou o Sol, pode ser vista por partes a partir de cada ponto atrás de um objeto; daí surgem a umbra, onde a fonte é completamente ocultada, e a penumbra, onde apenas parte dela é visível. O traçado de raios tangentes aos contornos da fonte e do obstáculo delimita essas regiões. A dimensão da sombra muda com as distâncias e os tamanhos envolvidos; a sombra projetada não deve ser confundida automaticamente com o tamanho real do objeto. As bordas não são infinitamente nítidas no mundo físico por causa de difração e de outras condições de iluminação, mas o modelo de raios funciona bem quando os comprimentos de onda são muito menores que as dimensões relevantes. A intensidade luminosa na penumbra varia conforme a fração da fonte visível, por isso a penumbra não é simplesmente uma área sem luz.",
        "example": "Considere uma fonte luminosa extensa atrás de um disco opaco e uma tela. Num ponto da tela em que o disco oculta toda a fonte, a região é umbra. Desloque o ponto até que uma borda da fonte fique visível: há penumbra, não iluminação plena. Esse diagnóstico depende de traçar raios a partir das extremidades da fonte.",
        "pitfall": "Não tratar penumbra como ausência completa de luz nem afirmar que toda sombra de fonte extensa possui contorno abrupto e perfeitamente nítido.",
        "steps": [
          "Identifique se a fonte é pontual ou extensa.",
          "Trace raios tangentes ao obstáculo a partir das bordas da fonte.",
          "Classifique cada região conforme a fração visível da fonte luminosa."
        ]
      },
      {
        "level": "intermediate",
        "title": "Eclipse solar e lunar: alinhamentos e fases da Lua",
        "explanation": "Um eclipse solar ocorre quando a Lua se interpõe entre a Terra e o Sol e a região observada na Terra fica no cone de sombra ou penumbra lunar. Para um observador situado na umbra, o disco solar pode ficar totalmente oculto; na penumbra, apenas parte dele é encoberta. Quando o tamanho angular aparente da Lua é menor que o do Sol em um alinhamento apropriado, pode ocorrer eclipse solar anular, com um anel luminoso visível. Um eclipse lunar tem arranjo diferente: a Terra fica entre o Sol e a Lua e projeta sua sombra sobre a Lua, que pode atravessar a penumbra ou a umbra terrestre. O eclipse solar está associado à fase de Lua nova e o lunar à fase de Lua cheia, mas nenhum deles acontece em todas essas fases: o plano orbital lunar está inclinado em relação ao plano da órbita terrestre, e o alinhamento também precisa ocorrer próximo aos nós orbitais. Em cada caso, observadores têm visibilidades e horários distintos. A cor avermelhada da Lua durante eclipses totais pode resultar da passagem de luz solar pela atmosfera terrestre, com espalhamento e refração, e não significa que a Lua emita luz própria. Para observar eclipses solares, são necessários filtros e equipamentos próprios; olhar diretamente para o Sol sem proteção adequada é perigoso.",
        "example": "Desenhe Sol—Lua—Terra alinhados: a Lua interrompe parte da luz solar destinada a observadores terrestres, caracterizando eclipse solar possível na Lua nova. Inverta a posição dos corpos intermediários para Sol—Terra—Lua: a sombra da Terra pode cobrir a Lua na fase cheia, originando eclipse lunar.",
        "pitfall": "Não afirmar que toda Lua nova produz eclipse solar ou que toda Lua cheia gera eclipse lunar: a inclinação da órbita e o alinhamento nos nós são essenciais.",
        "steps": [
          "Determine qual corpo ocupa a posição intermediária.",
          "Relacione fase lunar e região de sombra percorrida.",
          "Verifique a exigência adicional de alinhamento orbital adequado."
        ]
      },
      {
        "level": "advanced",
        "title": "Câmara escura de orifício e semelhança de triângulos",
        "explanation": "Uma câmara escura com pequeno orifício numa parede frontal projeta na tela oposta uma imagem real e invertida de um objeto luminoso externo. Os raios saem de diferentes partes do objeto e atravessam o mesmo pequeno orifício: o raio proveniente da extremidade superior atinge a região inferior da tela, e o da inferior chega à parte superior. O mecanismo dispensa lente para formar imagem, embora a escolha do tamanho do orifício afete nitidez e luminosidade. Pela semelhança de triângulos, a razão entre a altura da imagem h_i e a altura do objeto h_o é, em módulo, igual à razão entre a distância do orifício à tela d_i e a distância do objeto ao orifício d_o: |h_i|/h_o=d_i/d_o. Se a tela é movida para mais longe do orifício, a imagem cresce, mas tende a ficar menos luminosa para condições comparáveis. Orifício muito largo provoca superposição de raios, reduzindo nitidez; orifício extremamente pequeno evidencia efeitos de difração. A aproximação geométrica exige dimensões compatíveis e objetos que caibam no campo de visão. Não se deve aplicar a equação como se a câmara fosse um sistema de lentes convergentes, porque sua formação de imagem utiliza geometria de raios através do orifício.",
        "example": "Uma árvore de 1,80 m está a 3,0 m do orifício e a tela da câmara está a 0,15 m atrás dele. Pelo módulo da semelhança, h_i=1,80×0,15/3,0=0,090 m=9,0 cm. A imagem será invertida: o topo da árvore aparece na parte inferior da tela.",
        "pitfall": "Não usar a razão invertida d_o/d_i, não esquecer que a imagem é invertida e não presumir que um orifício arbitrariamente pequeno melhora indefinidamente a nitidez.",
        "steps": [
          "Desenhe dois raios que cruzam o mesmo orifício.",
          "Use a semelhança de triângulos com distâncias em mesma unidade.",
          "Calcule o módulo e descreva a orientação invertida da imagem."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Atrás de um corpo opaco iluminado por fonte extensa, a penumbra é a região em que:",
        "options": [
          "Apenas parte da fonte luminosa está visível",
          "Toda a fonte está oculta",
          "Não há qualquer raio luminoso",
          "A fonte desaparece permanentemente"
        ],
        "correctIndex": 0,
        "hint": "Identifique a geometria da luz e as condições de alinhamento.",
        "solution": "Na penumbra, o obstáculo impede a chegada de raios emitidos por apenas uma parte da fonte extensa. A umbra corresponde à ocultação completa. O diagnóstico depende dos raios tangentes à fonte e ao obstáculo."
      },
      {
        "level": "intermediate",
        "prompt": "Qual alinhamento pode produzir um eclipse lunar?",
        "options": [
          "Sol—Lua—Terra durante Lua nova",
          "Terra—Sol—Lua durante quarto crescente",
          "Lua—Sol—Terra durante quarto minguante",
          "Sol—Terra—Lua durante Lua cheia"
        ],
        "correctIndex": 3,
        "hint": "Identifique a geometria da luz e as condições de alinhamento.",
        "solution": "No eclipse lunar, a Terra fica entre Sol e Lua e sua sombra intercepta a Lua. Isso exige fase cheia e alinhamento próximo aos nós orbitais. A fase cheia isolada não garante um eclipse mensal."
      },
      {
        "level": "advanced",
        "prompt": "Uma árvore de 1,80 m fica a 3,0 m de uma câmara; a tela está a 0,15 m do orifício. A imagem mede:",
        "options": [
          "36 cm e é direita",
          "9,0 cm e é invertida",
          "90 cm e é direita",
          "3,0 cm e é invertida"
        ],
        "correctIndex": 1,
        "hint": "Identifique a geometria da luz e as condições de alinhamento.",
        "solution": "Pela semelhança, o módulo da altura é 1,80×0,15/3,0=0,090 m, ou 9 cm. A imagem formada por câmara escura de orifício é invertida devido ao cruzamento dos raios no pequeno orifício."
      }
    ]
  }
];
