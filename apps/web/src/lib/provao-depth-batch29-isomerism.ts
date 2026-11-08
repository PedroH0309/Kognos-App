import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral original, não oficial e sem homologação docente. */
export const provaoDepthBatch29Isomerism:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Isomeria plana e espacial (geométrica e óptica)",
    "objective": "Distinguir isomeria constitucional, geométrica e óptica a partir de fórmulas e ligações reais; reconhecer condições para E/Z e quiralidade e justificar respostas objetivas com exemplos estruturais verificáveis.",
    "prerequisites": [
      "Tetravalência do carbono e estruturas de Lewis",
      "Funções orgânicas: álcool, éter e hidrocarbonetos",
      "Ligações simples, duplas e geometria tetraédrica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Isomeria constitucional e comparação de fórmulas estruturais",
        "explanation": "Isômeros possuem a mesma fórmula molecular, mas diferem na conectividade dos átomos ou em sua disposição espacial. Na isomeria plana, também chamada constitucional, o que muda é a conectividade: átomos estão ligados de maneira diferente, mesmo quando as quantidades de carbono, hidrogênio e oxigênio permanecem iguais. A fórmula C₂H₆O pode representar etanol, CH₃CH₂OH, ou metoximetano, CH₃OCH₃. Ambos têm a mesma massa molar, porém o primeiro contém uma hidroxila ligada ao carbono e é classificado como álcool, ao passo que o segundo possui ligação C–O–C e é um éter. Essa diferença é isomeria de função. Também há isomeria de cadeia, quando muda o esqueleto carbônico, de posição, quando se desloca insaturação ou grupo funcional compatível, e casos denominados metameria e tautomeria conforme critérios específicos. Para decidir a classe, primeiro verifique a fórmula molecular pela contagem de cada elemento e desenhe as ligações explicitamente. Duas figuras rotacionadas do mesmo arranjo não são necessariamente dois isômeros. A nomenclatura isolada tampouco basta: é preciso confirmar valências usuais, conectividade e condições de existência das estruturas propostas.",
        "example": "Compare etanol CH₃–CH₂–OH e metoximetano CH₃–O–CH₃. Conte em cada estrutura 2 átomos de C, 6 de H e 1 de O, obtendo C₂H₆O. No etanol há C–O–H; no éter há C–O–C. Conclusão: mesma fórmula molecular, funções distintas e conectividades diferentes.",
        "pitfall": "Não classificar compostos como isômeros apenas por terem massas molares iguais; a fórmula molecular deve coincidir, e a ligação entre átomos deve ser comparada.",
        "steps": [
          "Conte os elementos para verificar fórmula molecular idêntica.",
          "Desenhe ligações sem perder a tetravalência usual do carbono.",
          "Classifique mudança de função, cadeia ou posição pela conectividade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Restrição de rotação e isomeria geométrica E/Z",
        "explanation": "A isomeria geométrica resulta de restrição à rotação que impede a interconversão livre de certos arranjos espaciais. Em alcenos, uma ligação dupla C=C possui componente π, cuja quebra seria necessária para a rotação completa; por isso dois arranjos podem persistir como estereoisômeros configuracionais. Para que uma dupla apresente isomeria geométrica, cada carbono da dupla deve ter dois substituintes diferentes. Em but-2-eno, cada carbono está ligado a H e CH₃. Quando os dois grupos CH₃ estão do mesmo lado da dupla, usa-se a designação cis; em lados opostos, trans. Esses termos são úteis nesse caso simples, mas a notação E/Z é mais geral: aplicam-se regras de prioridade CIP em cada extremidade; Z reúne os substituintes prioritários do mesmo lado e E os coloca em lados opostos. Se uma das extremidades tiver substituintes idênticos, como em prop-1-eno CH₂=CH–CH₃, não há dois isômeros geométricos distintos por essa dupla. Os isômeros podem apresentar propriedades físicas diferentes, mas não se deve presumir que um seja sempre mais estável ou mais polar sem examinar grupos específicos e ambiente. A orientação em desenho bidimensional é representação, não evidência de rotação livre.",
        "example": "Analise CH₃–CH=CH–CH₃. No carbono 2, H e CH₃ são diferentes; no carbono 3, também. Logo podem existir cis-but-2-eno e trans-but-2-eno. Já CH₂=CH–CH₃ tem dois H na primeira extremidade da dupla e não forma um par E/Z para essa ligação.",
        "pitfall": "Não afirmar que todo alceno apresenta cis/trans: é indispensável haver substituintes diferentes em cada carbono da dupla, além de considerar prioridade CIP em exemplos complexos.",
        "steps": [
          "Localize a ligação dupla e identifique os dois substituintes de cada carbono.",
          "Confira se há dois grupos diferentes em ambas as extremidades.",
          "Compare os grupos prioritários para atribuir E ou Z, se aplicável."
        ]
      },
      {
        "level": "advanced",
        "title": "Quiralidade, imagens especulares e atividade óptica",
        "explanation": "A isomeria óptica envolve diferenças tridimensionais que podem produzir imagens especulares não superponíveis, chamadas enantiômeros. Um centro de carbono tetraédrico ligado a quatro substituintes diferentes é um indício frequente de quiralidade: o carbono 2 do butan-2-ol está ligado a OH, H, CH₃ e CH₂CH₃, grupos distintos. As duas configurações possíveis nesse centro formam um par de enantiômeros, rotulados R e S por regras CIP. É incorreto dizer que toda molécula com carbono assimétrico necessariamente desvia luz polarizada em qualquer amostra: uma mistura racêmica com quantidades iguais de enantiômeros pode ter rotação óptica total nula. Mais ainda, há moléculas com mais de um centro estereogênico que apresentam simetria interna e são aquirais, como certos compostos meso. A rotação óptica depende da substância, da concentração, do comprimento do caminho óptico, da temperatura e do comprimento de onda da luz. As designações R/S indicam configuração, não predizem diretamente o sinal positivo ou negativo da rotação experimental. Em organismos, enzimas e receptores podem diferenciar enantiômeros, resultando em efeitos biológicos diferentes. Esse raciocínio exige identificar estruturas, e não supor propriedades farmacológicas sem dados.",
        "example": "No butan-2-ol, CH₃–CH(OH)–CH₂–CH₃, destaque o carbono ligado a OH. Seus substituintes são H, OH, CH₃ e CH₂CH₃; como são quatro grupos distintos, esse centro é quiral. No propan-2-ol, CH₃–CH(OH)–CH₃, há dois grupos CH₃ iguais, então esse carbono não é centro quiral.",
        "pitfall": "Não equiparar R a rotação positiva ou S a negativa, nem afirmar que uma mistura racêmica apresenta necessariamente rotação óptica diferente de zero.",
        "steps": [
          "Examine o carbono tetraédrico e liste os quatro substituintes.",
          "Identifique possíveis planos internos de simetria e grupos repetidos.",
          "Distinga configuração R/S de rotação óptica medida e composição da amostra."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Etanol e metoximetano, ambos C₂H₆O, são exemplos de:",
        "options": [
          "Isomeria óptica obrigatória",
          "Compostos com fórmula molecular diferente",
          "Isomeria de função",
          "Isomeria geométrica E/Z"
        ],
        "correctIndex": 2,
        "hint": "Conte átomos, verifique a conectividade e identifique grupos iguais ou diferentes.",
        "solution": "As duas substâncias têm C₂H₆O, porém apresentam conectividades distintas: o etanol possui grupo álcool e o metoximetano pertence aos éteres. A diferença é de função orgânica, portanto isomeria constitucional, não geométrica."
      },
      {
        "level": "intermediate",
        "prompt": "Qual composto pode apresentar dois isômeros geométricos decorrentes de sua dupla ligação?",
        "options": [
          "Prop-1-eno",
          "But-2-eno",
          "Etano",
          "Etino"
        ],
        "correctIndex": 1,
        "hint": "Conte átomos, verifique a conectividade e identifique grupos iguais ou diferentes.",
        "solution": "No but-2-eno, cada carbono da ligação dupla apresenta um H e um CH₃, permitindo dois arranjos espaciais não interconvertidos por simples rotação. No prop-1-eno uma extremidade contém dois H iguais, impedindo o par E/Z."
      },
      {
        "level": "advanced",
        "prompt": "Qual composto possui um carbono ligado a quatro grupos diferentes e pode apresentar enantiômeros?",
        "options": [
          "Propan-2-ol",
          "2-metilpropan-2-ol",
          "Etanol",
          "Butan-2-ol"
        ],
        "correctIndex": 3,
        "hint": "Conte átomos, verifique a conectividade e identifique grupos iguais ou diferentes.",
        "solution": "O carbono 2 do butan-2-ol liga-se a H, OH, CH₃ e CH₂CH₃, quatro grupos diferentes. Isso gera um centro estereogênico e um par de enantiômeros. Nos demais álcoois listados não ocorre essa combinação de quatro substituintes nesse carbono."
      }
    ]
  }
];
