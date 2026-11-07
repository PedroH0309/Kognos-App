import type {TopicSeed} from './authored-stage19-seed.ts';
/** Química: equilibrios ácido-base e precipitação em situações verificáveis. */
export const stage24Chemistry:TopicSeed[]=[
 {
  "subject": "Química",
  "topic": "Hidrólise de sais",
  "objective": "Prever qualitativamente o pH de soluções salinas por equilíbrio ácido-base dos íons e distinguir hidrólise de simples dissolução.",
  "chapters": [
   [
    "Dissociação e reação com água",
    "Um sal solúvel pode liberar íons que não são quimicamente indiferentes à água. Íons conjugados de ácidos ou bases fracos podem reagir com H₂O, alterando concentrações de H₃O⁺ ou OH⁻. Já Na⁺ e Cl⁻, derivados de base e ácido fortes, têm hidrólise desprezível em condições usuais. Dissolver um sal e hidrolisar um íon são processos distintos.",
    "NaCl(aq) tende a produzir solução aproximadamente neutra em água pura; CH₃COONa(aq) pode torná-la básica devido ao acetato.",
    "Todo sal dissolvido em água produz solução neutra, pois os íons positivos anulam os negativos.",
    "Por que acetato de sódio pode produzir pH acima de sete?",
    "Observe a base conjugada do ácido acético.",
    "O acetato reage com água formando ácido acético e OH⁻; o aumento de OH⁻ favorece pH básico.",
    "Neutralidade elétrica da solução não equivale a pH neutro; cargas se compensam em qualquer solução iônica."
   ],
   [
    "Conjugados fracos e caráter do meio",
    "O cátion NH₄⁺ é ácido conjugado de NH₃ e pode doar próton à água, formando NH₃ e H₃O⁺. O ânion acetato é base conjugada de ácido acético e pode retirar próton da água. O efeito depende de constantes de equilíbrio e temperatura; sal formado de ácido forte e base fraca tende a acidificar, enquanto sal de ácido fraco e base forte tende a basificar.",
    "Uma solução de NH₄Cl pode ser ácida porque NH₄⁺ reage com água, embora Cl⁻ seja praticamente espectador.",
    "Um cátion com carga positiva sempre torna a solução básica por atrair íons hidróxido.",
    "Qual caráter esperado para solução aquosa de NH₄Cl?",
    "Identifique a espécie conjugada de NH₃.",
    "Ácido: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺, aumentando a concentração de hidrônio.",
    "O sinal da carga não determina sozinho acidez ou basicidade; importa a transferência de prótons."
   ],
   [
    "Quando dois íons hidrolisam",
    "Em sais derivados de ácido e base fracos, cátion e ânion podem reagir com água. A previsão do pH exige comparar forças relativas, não usar apenas a origem nominal do sal. Diluição, temperatura e atividade iônica também influenciam valores medidos; sem dados de Ka e Kb, certas classificações quantitativas não são justificadas.",
    "Para acetato de amônio, tanto NH₄⁺ quanto CH₃COO⁻ participam de equilíbrios; comparar Ka do cátion e Kb do ânion esclarece o pH.",
    "Quando o sal vem de ácido fraco e base fraca, o pH obrigatoriamente é sete em qualquer concentração.",
    "Como decidir se sal de ácido e base fracos é ácido ou básico?",
    "Compare constantes de acidez e basicidade dos íons.",
    "Comparar Ka do cátion e Kb do ânion permite avaliar qual hidrólise predomina, sob condições especificadas.",
    "A presença simultânea de reações ácidas e básicas não garante cancelamento perfeito de seus efeitos."
   ]
  ],
  "situation": [
   "Um laboratório escolar prepara soluções de NaCl, NH₄Cl e CH₃COONa com concentrações semelhantes e mede pH diferentes, apesar de todas conduzirem corrente elétrica.",
   "Como explicar a diferença sem confundir neutralidade elétrica com neutralidade ácido-base?",
   "NaCl tem íons praticamente espectadores; NH₄⁺ produz H₃O⁺ e tende a acidificar; acetato produz OH⁻ e tende a basificar. Todas permanecem eletricamente neutras no conjunto."
  ],
  "links": [
   [
    "Química",
    "Equilíbrio químico e constantes",
    "A hidrólise é descrita por equilíbrios de transferência de prótons e suas constantes."
   ],
   [
    "Química",
    "pH e pOH",
    "A formação de H₃O⁺ e OH⁻ determina o caráter ácido ou básico medido em solução."
   ]
  ]
 },
 {
  "subject": "Química",
  "topic": "Produto de solubilidade",
  "objective": "Interpretar Kps, quociente iônico e efeito do íon comum na precipitação de sais pouco solúveis sem confundir solubilidade com velocidade.",
  "chapters": [
   [
    "Equilíbrio entre sólido e íons",
    "Para AgCl(s) ⇌ Ag⁺(aq)+Cl⁻(aq), o produto de solubilidade Kps=[Ag⁺][Cl⁻] em modelo de atividades aproximadas. A concentração do sólido puro não aparece na expressão porque sua atividade é constante. Kps descreve condição de equilíbrio em temperatura definida; não é medida direta da rapidez de dissolução.",
    "Se uma solução saturada de AgCl tem [Ag⁺]=[Cl⁻]=1,0×10⁻⁵ mol/L, o Kps aproximado é 1,0×10⁻¹⁰.",
    "Quanto maior o pedaço de sólido no fundo, maior será o valor de Kps na mesma temperatura.",
    "Como calcular Kps de AgCl quando cada íon vale 2×10⁻⁵ mol/L?",
    "Multiplique as concentrações dos íons.",
    "Kps=(2×10⁻⁵)²=4×10⁻¹⁰, considerando solução idealizada em equilíbrio.",
    "Quantidade de sólido altera massa disponível, mas não o valor da constante de equilíbrio a temperatura fixa."
   ],
   [
    "Estequiometria da dissolução",
    "Para CaF₂(s) ⇌ Ca²⁺+2F⁻, se a solubilidade molar em água pura é s, então [Ca²⁺]=s e [F⁻]=2s. Portanto Kps=s(2s)²=4s³. Não se pode usar sempre Kps=s²: os expoentes dependem dos coeficientes da reação e as relações de concentração precisam respeitar a fórmula do sal.",
    "Se s=0,010 mol/L para um sal idealizado CaF₂, Kps=4(0,010)³=4×10⁻⁶ no modelo sem outras fontes iônicas.",
    "A concentração de cada íon liberado por CaF₂ é igual a s porque toda dissolução produz um cátion e um ânion.",
    "Se s=0,020 mol/L para CaF₂, qual concentração de fluoreto?",
    "Leia o coeficiente de F⁻ na dissociação.",
    "[F⁻]=2s=0,040 mol/L, porque cada fórmula de CaF₂ libera dois fluoretos.",
    "A estequiometria deve preceder qualquer substituição na expressão de Kps."
   ],
   [
    "Precipitação e íon comum",
    "O quociente iônico Q usa as concentrações instantâneas: Q>Kps indica tendência à precipitação, Q<Kps indica possibilidade de dissolução e Q=Kps indica equilíbrio no modelo. Adicionar íon comum geralmente diminui a solubilidade molar de sal pouco solúvel, pois desloca o equilíbrio. Misturas exigem calcular concentrações após diluição antes de comparar Q e Kps.",
    "Ao misturar soluções contendo Ag⁺ e Cl⁻, a precipitação só é prevista após calcular o produto das concentrações finais e compará-lo a Kps.",
    "Se dois íons capazes de formar sólido estiverem presentes, haverá precipitado em qualquer concentração, por menor que seja.",
    "Quando Q é menor que Kps, há tendência imediata de precipitar?",
    "Compare Q com o valor de equilíbrio.",
    "Não; Q<Kps indica solução insaturada em relação ao sal e tendência à dissolução se houver sólido disponível.",
    "Presença de íons não basta: é a comparação quantitativa com Kps que orienta a previsão."
   ]
  ],
  "situation": [
   "Uma estação de tratamento mistura duas correntes aquosas com íons que podem formar sal pouco solúvel e deseja evitar incrustações em tubulações.",
   "Qual procedimento químico permite prever formação de precipitado antes da mistura?",
   "Calcular concentrações após mistura e diluição, montar Q com expoentes estequiométricos e comparar ao Kps na temperatura de operação; Q>Kps indica tendência à precipitação."
  ],
  "links": [
   [
    "Química",
    "Equilíbrio químico e constantes",
    "O Kps é uma constante de equilíbrio aplicada à dissolução de sólidos pouco solúveis."
   ],
   [
    "Química",
    "Princípio de Le Chatelier",
    "O efeito do íon comum pode ser explicado pelo deslocamento do equilíbrio de dissolução."
   ]
  ]
 }
];
