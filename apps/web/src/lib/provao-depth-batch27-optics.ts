import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original, não oficial, sem homologação docente. */
export const provaoDepthBatch27Optics:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Dioptro plano. Ângulo limite e reflexão total da luz",
    "objective": "Resolver situações de refração em dioptros planos, determinar a condição de reflexão interna total e aplicar modelos geométricos a fibras ópticas e profundidade aparente, explicitando limites e hipóteses físicos.",
    "prerequisites": [
      "Índice de refração e propagação da luz",
      "Razões trigonométricas e normal à interface",
      "Velocidade, frequência e comprimento de onda"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Refração em uma interface plana",
        "explanation": "Um dioptro plano é a superfície que separa dois meios transparentes homogêneos, como ar e água. Para estudar o trajeto de um raio, traça-se uma normal perpendicular à interface no ponto onde a luz incide. Os ângulos de incidência e refração são medidos em relação à normal; medir a partir do plano é erro recorrente. A lei de Snell-Descartes, n₁sen(i)=n₂sen(r), descreve a geometria em meios isotrópicos: ao entrar em meio de índice maior, o raio aproxima-se da normal; em meio de índice menor, afasta-se. O índice absoluto n=c/v expressa a razão entre a velocidade da luz no vácuo e a velocidade de fase no meio. Em interface estacionária, a frequência luminosa permanece a mesma, enquanto velocidade e comprimento de onda podem mudar. Uma parte da luz costuma ser refletida mesmo quando existe raio refratado; transmissão não significa passagem integral da energia. A descrição por raios pressupõe comprimento de onda pequeno em relação às dimensões dos objetos, sem tratar detalhadamente efeitos como interferência, polarização e absorção.",
        "example": "Um raio sai do ar, n₁=1,00, e chega à água, n₂=1,33, com i=30° em relação à normal. Calcule sen(r)=1,00×0,500/1,33≈0,376; logo r≈22°. A redução do ângulo confirma a aproximação à normal. A frequência permanece inalterada.",
        "pitfall": "Não se deve confundir ângulo medido da normal com ângulo medido da superfície, nem imaginar que a frequência da luz muda ao atravessar interface fixa.",
        "steps": [
          "Desenhe os raios e a normal à superfície.",
          "Identifique os índices de cada lado e escreva Snell.",
          "Confira se o sentido do desvio faz sentido."
        ]
      },
      {
        "level": "intermediate",
        "title": "Condição para reflexão interna total",
        "explanation": "A reflexão interna total é possível apenas quando a luz parte de um meio com índice de refração maior e tenta penetrar em outro de índice menor. Nessa direção, Snell exige que o ângulo refratado aumente com a incidência. O caso-limite ocorre com r=90°: a relação n₁sen(i_lim)=n₂ produz sen(i_lim)=n₂/n₁, desde que n₁>n₂. De vidro idealizado, n=1,50, para ar, n=1,00, o ângulo limite vale aproximadamente 41,8°. Para incidência interna menor, há raio refratado e reflexo; no limite, a direção transmitida é rasante na aproximação geométrica; acima dele não existe raio refratado propagante real no modelo ideal. No percurso inverso, de ar para vidro, não há ângulo crítico de reflexão total. A reflexão produzida por um espelho metálico tem mecanismo físico distinto. Uma interface real pode envolver absorção e fenômenos evanescentes, exigindo óptica ondulatória; por isso a expressão 'toda a luz é refletida' depende da idealização de meios transparentes.",
        "example": "Uma luz percorre água, n=1,33, e tenta alcançar o ar, n=1,00. Aplique sen(i_lim)=1/1,33≈0,752; i_lim≈48,8°. Se o ângulo interno for 55°, excede 48,8°, portanto ocorre reflexão interna total ideal, e não refração para o ar.",
        "pitfall": "Não use a relação de ângulo limite quando n do meio de incidência é menor; nessas condições não existe reflexão interna total pela regra do dioptro.",
        "steps": [
          "Confirme n_inicial maior que n_final.",
          "Use seno do ângulo limite como razão dos índices.",
          "Compare com a incidência e classifique o fenômeno."
        ]
      },
      {
        "level": "advanced",
        "title": "Aplicações e aproximações da óptica geométrica",
        "explanation": "Numa fibra óptica de índice escalonado, o núcleo tem índice maior que a casca. Raios que atingem a interface lateral com ângulo de incidência acima do crítico podem ser guiados por reflexões internas sucessivas. O ângulo relevante é contado a partir da normal à superfície lateral, não do eixo longitudinal da fibra. A luz real, porém, sofre perdas por absorção, espalhamento e curvaturas; uma descrição completa precisa considerar modos eletromagnéticos e dispersão. A refração também explica a posição aparente de objetos sob a água. Para observação próxima da direção normal à superfície, a profundidade aparente d_a pode ser estimada por d_a≈d_real·n_observador/n_objeto. Um objeto submerso parece mais raso quando observado do ar. A aproximação não deve ser estendida para ângulos grandes ou superfícies curvas sem análise. A reversibilidade de trajetórias ópticas em condições ideais permite inverter o sentido de um raio, mas não autoriza ignorar mudanças de polarização, dispersão ou perdas. Escolher o modelo apropriado é parte da resolução, não um detalhe posterior.",
        "example": "Considere um objeto a 1,50 m de profundidade na água, n=1,33, observado quase verticalmente do ar, n=1,00. Estime d_aparente=1,50×1,00/1,33≈1,13 m. Compare 1,13 com 1,50 m: o objeto aparece cerca de 0,37 m mais próximo da superfície.",
        "pitfall": "Não se deve aplicar profundidade aparente de pequenos ângulos à observação muito oblíqua, nem confundir confinamento ideal de uma fibra com propagação sem perdas.",
        "steps": [
          "Identifique o regime geométrico e suas condições.",
          "Aplique a relação específica com unidades coerentes.",
          "Discuta perdas e limites físicos da aproximação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um raio vai do ar (n=1,00) à água (n=1,33) a 30° da normal. O ângulo refratado é aproximadamente:",
        "options": [
          "40°",
          "30°",
          "22°",
          "50°"
        ],
        "correctIndex": 2,
        "hint": "Calcule e depois confronte a solução com o comportamento físico do raio.",
        "solution": "Pela lei n₁sen(i)=n₂sen(r), sen(r)=0,5/1,33≈0,376 e r≈22°. Como o índice aumenta, o raio aproxima-se da normal; uma solução maior que 30° seria fisicamente incoerente."
      },
      {
        "level": "intermediate",
        "prompt": "Na interface vidro (n=1,50) para ar (n=1,00), o ângulo limite é aproximadamente:",
        "options": [
          "30°",
          "41,8°",
          "60°",
          "90°"
        ],
        "correctIndex": 1,
        "hint": "Calcule e depois confronte a solução com o comportamento físico do raio.",
        "solution": "A condição para reflexão interna total exige n_inicial maior que n_final. Sen(i_lim)=1/1,50=2/3, assim i_lim≈41,8°. Acima desse valor, não há raio refratado propagante no modelo ideal."
      },
      {
        "level": "advanced",
        "prompt": "Visto quase verticalmente do ar, um objeto a 1,50 m sob água (n=1,33) parece estar a:",
        "options": [
          "2,00 m",
          "1,50 m",
          "0,50 m",
          "1,13 m"
        ],
        "correctIndex": 3,
        "hint": "Calcule e depois confronte a solução com o comportamento físico do raio.",
        "solution": "Na aproximação de pequenos ângulos, d_aparente=d_real·n_ar/n_água=1,50/1,33≈1,13 m. Esse resultado é uma estimativa para observação quase normal, não uma regra universal para todo ângulo."
      }
    ]
  }
];
