import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Aulas originais Kognos; não oficiais e sem homologação docente. */
export const provaoDepthBatch18Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Lei da gravitação universal de Newton",
    "objective": "Aplicar a gravitação universal a forças, campos e órbitas, distinguindo massa, peso, distância entre centros e aproximações de campo uniforme.",
    "prerequisites": [
      "Segunda lei de Newton",
      "Potências e notação científica",
      "Movimento circular"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: Força gravitacional e lei do inverso do quadrado",
        "explanation": "A lei da gravitação universal de Newton estabelece que duas massas puntiformes se atraem com força de módulo F=Gm₁m₂/r², em que r é a distância entre seus centros e G é a constante gravitacional. Para corpos aproximadamente esféricos com distribuição de massa simétrica, a mesma expressão pode descrever a interação externa como se a massa estivesse concentrada no centro. A força é atrativa, atua ao longo da linha que une os centros e constitui um par ação-reação: os módulos sobre cada corpo são iguais, mas as acelerações podem ser diferentes porque as massas diferem. Se a distância dobra, a força cai a um quarto; se uma massa dobra, a força dobra, mantendo o restante fixo. Não se deve usar a distância entre superfícies como r. A gravitação newtoniana funciona muito bem em numerosas situações do ensino médio, mas não é a descrição mais completa em campos extremos, onde a relatividade geral é necessária.",
        "example": "Se duas massas de 2 kg e 3 kg estão separadas por 2 m, F=G×2×3/2²=1,5G N. Ao aumentar r para 4 m, F=G×6/16=0,375G N, exatamente um quarto do valor inicial. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não altere definições ou fórmulas para ajustar uma resposta; confira os dados e o que está sendo representado.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Campo gravitacional e peso",
        "explanation": "Campo gravitacional é força por unidade de massa de prova: g=F/m. Perto de um corpo esférico de massa M, fora de sua distribuição de massa, g=GM/r², orientado para o centro. O peso de um objeto é P=mg, enquanto sua massa mede inércia e não se altera apenas por deslocá-lo da Terra à Lua. Para um corpo de 5 kg em local onde g=10 m/s², o peso vale 50 N; em outro local onde g=2 m/s², vale 10 N, mas a massa permanece 5 kg. A aproximação g constante é útil para alturas pequenas em relação ao raio terrestre, porém em satélites e trajetórias espaciais a variação com r precisa ser considerada. A expressão g=GM/r² não pode ser aplicada sem cuidado no interior de planetas, pois a distribuição de massa importa. Queda livre ideal significa movimento apenas sob gravidade, desprezando resistência do ar, não ausência de força.",
        "example": "Um astronauta de massa 70 kg está em região com g=1,6 m/s². Calcule P=70×1,6=112 N. A massa continua 70 kg; o peso diminui porque o campo local é menor. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não generalize o exemplo sem verificar as condições de aplicação e a distinção entre grandezas ou processos.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Órbitas e velocidade orbital",
        "explanation": "Um satélite em órbita circular está em queda livre contínua: a gravidade fornece a aceleração centrípeta. Igualando GMm/r² a mv²/r, obtém-se v=√(GM/r), em que r é a distância ao centro do planeta, não a altitude sobre a superfície. A massa m do satélite cancela nessa aproximação, de modo que objetos de massas diferentes na mesma órbita circular ideal possuem a mesma velocidade orbital. Se o raio orbital quadruplica, a velocidade cai à metade. O período pode ser calculado por T=2πr/v, produzindo T² proporcional a r³ para órbitas em torno do mesmo corpo central. O modelo supõe massa central dominante, órbita circular e perturbações desprezíveis. Satélites reais podem ter órbitas elípticas e sofrer arrasto atmosférico, irregularidades gravitacionais e perturbações de outros corpos. Estar em órbita não significa que a força gravitacional desapareceu; a sensação de imponderabilidade decorre da queda livre compartilhada.",
        "example": "Para órbitas circulares de raios r e 4r em torno do mesmo planeta, v₁=√(GM/r) e v₂=√(GM/(4r))=v₁/2. A massa do satélite não aparece no resultado. A conclusão exige verificar os dados, as condições indicadas e a diferença entre o modelo apresentado e situações não descritas.",
        "pitfall": "Não confunda modelo explicativo com lei universal; examine exceções, evidências e limitações.",
        "steps": [
          "Identifique os dados, o fenômeno e as hipóteses.",
          "Aplique o procedimento específico e justifique as etapas.",
          "Confira o resultado e os limites da interpretação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Se a distância entre duas massas puntiformes dobra, a força gravitacional:",
        "options": [
          "Dobra",
          "Cai à metade",
          "Cai a um quarto",
          "Quadruplica"
        ],
        "correctIndex": 2,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "F é inversamente proporcional a r². Substituir r por 2r divide a força por 4, mantendo as massas constantes. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Um corpo de 3 kg num local com g=4 m/s² tem peso de:",
        "options": [
          "0,75 N",
          "7 N",
          "12 N",
          "24 N"
        ],
        "correctIndex": 2,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "O peso é P=mg=3×4=12 N. A massa continua 3 kg independentemente do campo local. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      },
      {
        "level": "advanced",
        "prompt": "Em órbita circular ideal de raio 4r, a velocidade orbital em comparação à de raio r é:",
        "options": [
          "Duas vezes maior",
          "A metade",
          "Quatro vezes maior",
          "Igual"
        ],
        "correctIndex": 1,
        "hint": "Revise a definição e as condições da situação antes de selecionar.",
        "solution": "Como v=√(GM/r), quadruplicar r divide v por √4=2. O resultado pressupõe mesmo corpo central e órbitas circulares. Os distratores confundem conceitos, relações ou contextos que não correspondem aos dados do enunciado."
      }
    ]
  }
];
