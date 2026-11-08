import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Autoria original Kognos, conteúdo não oficial e ainda sem homologação docente. */
export const provaoDepthBatch28Thermochemistry:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Equações termoquímicas",
    "objective": "Interpretar e transformar equações termoquímicas balanceadas, calcular ΔH por proporcionalidade e pela lei de Hess e aplicar entalpias-padrão de formação com fases e condições de validade explícitas.",
    "prerequisites": [
      "Equações químicas balanceadas e mol",
      "Exotermia, endotermia e conservação de energia",
      "Operações algébricas com sinais e proporcionalidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Como ler equações termoquímicas e ΔH",
        "explanation": "Uma equação termoquímica combina a representação balanceada de uma transformação química com sua variação de entalpia ΔH sob condições especificadas. O sinal é essencial: ΔH<0 indica processo exotérmico, no qual o sistema libera calor ao entorno em pressão constante; ΔH>0 indica processo endotérmico, no qual o sistema absorve calor. A entalpia não é uma quantidade de calor armazenada dentro de uma molécula, mas uma função de estado cuja diferença entre produtos e reagentes permite calcular o calor trocado em condições adequadas. A equação 2H₂(g)+O₂(g)→2H₂O(l), ΔH≈−572 kJ, descreve a formação de dois mols de água líquida a partir dos reagentes indicados. O valor −572 kJ corresponde à extensão de reação escrita, não automaticamente a um mol de H₂. Coeficientes e estados físicos, indicados por (s), (l), (g) e (aq), integram a informação: formar vapor de água e formar água líquida têm entalpias diferentes. Também se deve declarar temperatura e pressão, em especial se usar valores padronizados. Uma equação energética sem reagentes balanceados ou sem fase identificada não é suficiente para extrapolações quantitativas confiáveis.",
        "example": "Para 2H₂(g)+O₂(g)→2H₂O(l), ΔH=−572 kJ, forme apenas 1 mol de H₂O(l). Divida toda a equação e ΔH por dois: H₂(g)+½O₂(g)→H₂O(l), ΔH=−286 kJ. O sinal continua negativo, pois a formação ainda libera calor.",
        "pitfall": "Não interpretar −572 kJ como energia de cada molécula, nem omitir que a equação se refere à água líquida e aos coeficientes mostrados.",
        "steps": [
          "Balanceie e identifique os estados físicos.",
          "Leia o sinal de ΔH em relação ao sistema e à extensão escrita.",
          "Relacione a quantidade reagida ao valor energético da equação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Proporcionalidade, inversão e soma de equações",
        "explanation": "A variação de entalpia é extensiva: se uma reação termoquímica é multiplicada por determinado fator, a energia associada à extensão escrita também deve ser multiplicada. Quando todos os coeficientes são divididos por dois, ΔH deve ser dividido por dois. Inverter uma equação significa trocar produtos e reagentes e, necessariamente, trocar o sinal de ΔH, pois o percurso de estado final para inicial tem variação oposta. Essas operações fundamentam a lei de Hess: como a entalpia é função de estado, a variação global independe do caminho reacional, desde que os estados inicial e final sejam idênticos. Assim, somam-se equações intermediárias e seus ΔH, cancelando espécies que apareçam em lados opostos. Não basta somar números sem verificar que as etapas químicas, os estados e os coeficientes realmente produzem a reação desejada. Em combustão, a energia indicada costuma referir-se a certa quantidade de combustível; a massa consumida precisa ser convertida em mol antes de usar o valor por mol. O raciocínio é uma relação estequiométrica com energia, não um simples reconhecimento de palavras como 'combustão' ou 'reação quente'.",
        "example": "A combustão de CH₄(g) libera aproximadamente 890 kJ por mol de CH₄ queimado, isto é, ΔH≈−890 kJ/mol. Para 8,0 g de CH₄ (massa molar 16 g/mol), n=8/16=0,50 mol; ΔH≈0,50×(−890)=−445 kJ. Inverter a reação daria +890 kJ por mol.",
        "pitfall": "Nunca multiplique coeficientes mantendo ΔH invariável, e nunca inverta reagentes e produtos sem inverter o sinal da variação de entalpia.",
        "steps": [
          "Converta massas ou volumes para mols pela estequiometria.",
          "Multiplique cada ΔH pelo mesmo fator aplicado à reação.",
          "Após inversões ou somas, confira a equação resultante antes de concluir."
        ]
      },
      {
        "level": "advanced",
        "title": "Entalpias de formação, fases e interpretação energética",
        "explanation": "Para calcular entalpias de reação a partir de dados tabelados, uma estratégia é aplicar ΔH°reação=ΣνΔH°f(produtos)−ΣνΔH°f(reagentes), em que ν representa os coeficientes estequiométricos. A entalpia-padrão de formação de um elemento em seu estado-padrão de referência é convencionada como zero, não por ausência de energia, mas por escolha de referência. Nas condições usuais de tabelas, O₂(g) tem ΔH°f=0, enquanto compostos como CO₂(g) ou H₂O(l) têm valores específicos. Sempre conferir as fases e a temperatura de referência, pois H₂O(g) e H₂O(l) não são intercambiáveis: condensar vapor libera energia, alterando o resultado energético global de uma combustão. O cálculo com tabelas pressupõe que os dados correspondam aos mesmos estados e condições, e pequenas diferenças de arredondamento são normais. O valor de ΔH não informa sozinho a rapidez da reação, o mecanismo ou a espontaneidade em todas as temperaturas. Uma reação exotérmica pode ser muito lenta por grande barreira de ativação, enquanto a espontaneidade também depende de entropia e de energia livre. Separar cinética, termoquímica e equilíbrio evita conclusões falsas.",
        "example": "Na combustão CH₄+2O₂→CO₂+2H₂O(l), tome ΔH°f: CH₄=−74,8; O₂=0; CO₂=−393,5; H₂O(l)=−285,8 kJ/mol. Produtos: −393,5+2(−285,8)=−965,1. Reagentes: −74,8. Resultado: ΔH°=−965,1−(−74,8)=−890,3 kJ por mol de CH₄.",
        "pitfall": "Não substituir água líquida por vapor na mesma tabela sem recalcular, nem inferir rapidez de uma reação apenas do sinal de ΔH.",
        "steps": [
          "Escreva e balanceie a reação com fases identificadas.",
          "Some entalpias de formação ponderadas por coeficientes.",
          "Subtraia reagentes de produtos e confira sinal, unidade e referência."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Para 2H₂(g)+O₂(g)→2H₂O(l), ΔH=−572 kJ, a formação de 1 mol de H₂O(l) tem ΔH igual a:",
        "options": [
          "−1144 kJ",
          "+286 kJ",
          "−286 kJ",
          "−572 kJ"
        ],
        "correctIndex": 2,
        "hint": "Identifique a extensão reacional, o sinal e os coeficientes antes de calcular.",
        "solution": "A equação como escrita forma dois mols de água líquida e libera 572 kJ. Para formar apenas um mol, dividimos os coeficientes e a entalpia por dois, obtendo ΔH=−286 kJ. A fase líquida é parte do enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Uma reação possui ΔH=+80 kJ. Se sua equação for invertida, o novo ΔH será:",
        "options": [
          "+80 kJ",
          "−80 kJ",
          "+160 kJ",
          "−160 kJ"
        ],
        "correctIndex": 1,
        "hint": "Identifique a extensão reacional, o sinal e os coeficientes antes de calcular.",
        "solution": "A entalpia é função de estado. A reação inversa troca o estado inicial pelo final, mudando o sinal da variação energética, mas preservando seu módulo quando não se alteram os coeficientes. Assim, ΔH=−80 kJ."
      },
      {
        "level": "advanced",
        "prompt": "Para CH₄+2O₂→CO₂+2H₂O(l), dados ΔH°f=−74,8; 0; −393,5; −285,8 kJ/mol, respectivamente, ΔH° é aproximadamente:",
        "options": [
          "+890,3 kJ",
          "−604,5 kJ",
          "−965,1 kJ",
          "−890,3 kJ"
        ],
        "correctIndex": 3,
        "hint": "Identifique a extensão reacional, o sinal e os coeficientes antes de calcular.",
        "solution": "Aplicando produtos menos reagentes: [−393,5+2(−285,8)]−[−74,8+2×0]=−965,1+74,8=−890,3 kJ. O valor é por mol de metano na reação balanceada e depende das fases tabeladas."
      }
    ]
  }
];
