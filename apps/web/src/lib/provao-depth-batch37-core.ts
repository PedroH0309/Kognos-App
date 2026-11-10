import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Kognos original editorial teaching, non-official, pending specialist teacher review. */
export const provaoDepthBatch37Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Escalas termométricas. As escalas Celsius, Fahrenheit e Kelvin. Relação matemática entre elas",
    "objective": "Converter temperaturas e intervalos entre Celsius, Fahrenheit e Kelvin, distinguir zero absoluto e validar relações lineares por pontos fixos.",
    "prerequisites": [
      "Temperatura e equilíbrio térmico",
      "Equação de primeiro grau",
      "Diferença entre temperatura e variação térmica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Construção de escalas e pontos de referência",
        "explanation": "Escalas termométricas atribuem números a estados térmicos segundo uma convenção de calibração e uma grandeza física mensurável. Na escala Celsius usual, a água pura à pressão atmosférica de referência congela próximo de 0 °C e entra em ebulição próximo de 100 °C; essas temperaturas dependem de pressão e pureza, portanto são referências escolares aproximadas e não substituem definições metrológicas modernas. Na escala Fahrenheit, os pontos correspondentes são aproximadamente 32 °F e 212 °F, uma diferença de 180 graus contra 100 graus Celsius. Como as escalas são lineares, cada variação de 5 °C equivale a 9 °F, mas o ponto zero é deslocado. A relação F=(9/5)C+32 combina inclinação e intercepto; ignorar o termo 32 só é permitido ao comparar variações, não temperaturas absolutas. Uma temperatura de 0 °C não significa ausência de energia microscópica. Para validar uma conversão, teste os dois pontos de referência e verifique se o resultado é fisicamente plausível. Um termômetro pode apresentar erro de calibração mesmo que sua escala seja bem definida, então diferencie escala e instrumento.",
        "example": "Para converter 20 °C, aplique F=(9/5)×20+32=36+32=68 °F. Confirme com 0 °C→32 °F e 100 °C→212 °F. Se um cálculo para 20 °C resultar em 36 °F, faltou o deslocamento de 32 unidades. O resultado só é válido para a leitura da escala, não para diferenças térmicas.",
        "pitfall": "Não use F=1,8C sem o termo de deslocamento para temperaturas; a expressão simples só vale para diferenças ΔF=1,8ΔC.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Kelvin e temperatura absoluta",
        "explanation": "A escala kelvin é a unidade de temperatura termodinâmica do SI, com zero associado ao limite inferior da temperatura termodinâmica. Para as conversões escolares entre Celsius e kelvin, utiliza-se T(K)=t(°C)+273,15; a diferença de uma unidade kelvin corresponde exatamente à diferença de um grau Celsius. Assim, 25 °C equivalem a 298,15 K, mas uma elevação de 25 °C corresponde a uma variação de 25 K, não 298,15 K. Temperaturas absolutas em kelvin são necessárias em leis como a dos gases ideais e a potência radiativa de Stefan–Boltzmann; substituir Celsius nesses modelos produz previsões incorretas. Zero kelvin não significa que toda descrição quântica de movimento desapareça, e a escala não permite simplesmente afirmar que um objeto a 40 °C é duas vezes mais quente que um a 20 °C. Para razões de temperatura em relações físicas específicas, use kelvin e verifique quais grandezas são mantidas constantes. Uma temperatura Celsius negativa pode corresponder a uma temperatura termodinâmica positiva.",
        "example": "Converta −10 °C: T=−10+273,15=263,15 K. Se um gás ideal mantiver volume e quantidade de matéria constantes e passar de 300 K para 330 K, P₂/P₁=330/300=1,10, aumento de 10%; não calcule a razão com 26,85 °C e 56,85 °C.",
        "pitfall": "Não some 273,15 a variações de temperatura e não substitua kelvin por Celsius em relações proporcionais de gases ideais.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Conversões inversas e intervalos térmicos",
        "explanation": "Para converter Fahrenheit em Celsius, isole C na equação F=(9/5)C+32: C=(5/9)(F−32). A ordem é essencial: primeiro subtraia o deslocamento, depois multiplique pelo fator de escala. Para intervalos, o deslocamento desaparece, de modo que ΔF=(9/5)ΔC e ΔK=ΔC. Um aquecimento de 10 °C corresponde a aumento de 18 °F e 10 K, independentemente da temperatura inicial. A leitura de 98,6 °F equivale a 37 °C pelo modelo escolar; não é correto tratá-la como 98,6 °C. Em medições, precisão e algarismos significativos importam: 273,15 é o deslocamento exato entre escalas, mas um termômetro com resolução de 1 °C não passa a medir centésimos de kelvin só porque o cálculo produz decimais. Uma verificação dimensional ajuda: Celsius e Fahrenheit são valores de escalas com origens diferentes; diferenças e valores absolutos têm usos distintos. Em aplicações científicas, escolha a unidade exigida pela equação, explicite a conversão e apresente a precisão compatível com os dados.",
        "example": "Uma variação térmica de 45 °F corresponde a ΔC=(5/9)×45=25 °C e ΔK=25 K. Já a temperatura de 45 °F corresponde a C=(5/9)(45−32)=65/9≈7,22 °C. O mesmo número Fahrenheit gera resultados diferentes porque intervalo e leitura absoluta são operações distintas.",
        "pitfall": "Não aplique a subtração de 32 a intervalos nem confunda 45 °F de temperatura com aumento de 45 °F.",
        "steps": [
          "Identifique grandezas, agentes e condições do problema.",
          "Resolva o caso concreto usando os conceitos da etapa.",
          "Confira unidades, evidências e limitações da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quanto vale 20 °C na escala Fahrenheit?",
        "options": [
          "36 °F",
          "68 °F",
          "52 °F",
          "293,15 °F"
        ],
        "correctIndex": 1,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Use F=1,8×20+32=68 °F. O termo +32 é indispensável para converter uma leitura absoluta; sem ele o resultado representaria apenas o intervalo correspondente a 20 °C."
      },
      {
        "level": "intermediate",
        "prompt": "Uma temperatura de −10 °C corresponde a:",
        "options": [
          "−283,15 K",
          "10 K",
          "263,15 K",
          "273,15 K"
        ],
        "correctIndex": 2,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "A conversão entre Celsius e kelvin é T=t+273,15. Para −10 °C, T=263,15 K, uma temperatura absoluta positiva, embora o valor Celsius seja negativo."
      },
      {
        "level": "advanced",
        "prompt": "Um aquecimento de 25 °C corresponde a qual aumento Fahrenheit?",
        "options": [
          "45 °F",
          "77 °F",
          "13,9 °F",
          "298,15 °F"
        ],
        "correctIndex": 0,
        "hint": "Releia o exemplo e compare as hipóteses com as alternativas.",
        "solution": "Para intervalos, o deslocamento entre origens cancela: ΔF=(9/5)ΔC=(9/5)×25=45 °F. A fórmula com +32 serve para temperaturas, não para variações."
      }
    ]
  }
];
