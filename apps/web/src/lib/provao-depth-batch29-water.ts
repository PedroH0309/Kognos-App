import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Conteúdo original Kognos, não oficial e sem homologação docente. */
export const provaoDepthBatch29Water:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Ligação, estrutura, propriedades físicas e químicas da água",
    "objective": "Explicar a geometria angular e a polaridade da molécula de água, relacionar ligações de hidrogênio à densidade e às propriedades físicas e calcular autoionização, neutralidade e pH em condições declaradas.",
    "prerequisites": [
      "Ligações covalentes, eletronegatividade e pares eletrônicos",
      "Polaridade molecular e interações intermoleculares",
      "Notação científica, logaritmos e densidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Geometria angular e polaridade da molécula de água",
        "explanation": "A água tem fórmula H₂O: o oxigênio central realiza duas ligações covalentes polares com hidrogênios e apresenta dois pares eletrônicos não ligantes. A distribuição dos quatro domínios eletrônicos é aproximadamente tetraédrica, mas a geometria molecular, que descreve a posição dos núcleos, é angular, com ângulo H–O–H próximo de 104,5°. O oxigênio, mais eletronegativo, atrai mais fortemente os elétrons compartilhados; isso produz cargas parciais negativas perto do oxigênio e positivas nos hidrogênios. Como os vetores de dipolo das duas ligações não se cancelam na geometria angular, a molécula possui momento dipolar resultante e é polar. Uma ligação covalente polar é uma interação intramolecular, distinta da ligação de hidrogênio, que pode ocorrer entre moléculas vizinhas. Ser polar favorece a interação com íons e outras substâncias polares, mas não garante que qualquer sólido dissolva completamente: dissolução depende do balanço energético e entrópico e das condições. O modelo de Lewis, a repulsão entre pares eletrônicos e o momento dipolar explicam propriedades sem reduzir a água a um desenho linear.",
        "example": "Ao comparar CO₂ e H₂O, identifique as geometrias: CO₂ é linear e suas ligações C=O, embora polares, têm vetores opostos que se cancelam; H₂O é angular e soma dipolar não nula. Portanto H₂O é polar e CO₂ é globalmente apolar, apesar de conter ligações polares.",
        "pitfall": "Não confunda geometria eletrônica com molecular nem conclua que uma molécula é necessariamente polar apenas porque contém alguma ligação polar.",
        "steps": [
          "Represente pares ligantes e não ligantes no oxigênio.",
          "Determine a geometria molecular, não só a eletrônica.",
          "Some qualitativamente os vetores de polaridade das ligações."
        ]
      },
      {
        "level": "intermediate",
        "title": "Ligações de hidrogênio, coesão e anomalia de densidade",
        "explanation": "Moléculas de água estabelecem ligações de hidrogênio entre regiões próximas ao hidrogênio parcialmente positivo de uma molécula e ao oxigênio de outra. Essas interações intermoleculares não são novas ligações covalentes O–H e variam dinamicamente no líquido. Elas contribuem para a temperatura de ebulição relativamente elevada da água frente a hidretos de massas semelhantes, além da tensão superficial, coesão e grande capacidade térmica específica. Romper interações durante a vaporização requer energia, mas a energia necessária não equivale à dissociação de todas as ligações covalentes da molécula. No gelo comum, a estrutura cristalina aberta organizada por essas interações ocupa volume relativamente grande, tornando sua densidade menor que a da água líquida em condições usuais. Por isso o gelo flutua; a água líquida apresenta densidade máxima aproximadamente a 4 °C, em condições próximas à pressão atmosférica. A capilaridade depende tanto de adesão ao material como de coesão do líquido, não sendo explicada apenas por um dos efeitos. Valores numéricos mudam com temperatura, pressão e impurezas; a água não conserva densidade invariável em todas as condições.",
        "example": "Considere gelo com densidade aproximada de 0,92 g/cm³ flutuando em água líquida de 1,00 g/cm³. Pelo equilíbrio entre peso e empuxo, a fração do volume submerso é ρ_gelo/ρ_água≈0,92, ou 92%. Os aproximadamente 8% restantes ficam acima da superfície.",
        "pitfall": "Não afirmar que gelo flutua porque contém ar aprisionado nem que a vaporização destrói as moléculas de água; o fenômeno envolve arranjo e interações entre moléculas.",
        "steps": [
          "Identifique a interação intermolecular entre moléculas de água.",
          "Diferencie energia para mudar de fase de energia para quebrar ligações O–H.",
          "Relacione densidade e empuxo, declarando condições aproximadas."
        ]
      },
      {
        "level": "advanced",
        "title": "Autoionização, acidez e limites do papel de solvente",
        "explanation": "A água é uma substância anfótera nas reações ácido-base de Brønsted–Lowry, podendo doar ou receber prótons dependendo do reagente. Na autoionização, representada por 2H₂O(l) ⇌ H₃O⁺(aq)+OH⁻(aq), uma molécula atua como ácido e outra como base. A 25 °C, o produto iônico da água é K_w=[H₃O⁺][OH⁻]≈1,0×10⁻¹⁴ em soluções aquosas diluídas no tratamento escolar, e na água pura a eletroneutralidade leva a concentrações iguais de ambos os íons, cerca de 1,0×10⁻⁷ mol/L. Nessa temperatura, pH≈7 é neutro; a neutralidade, porém, sempre significa igualdade de concentrações desses íons, e não obrigatoriamente pH 7 em qualquer temperatura, pois K_w varia. A água também pode hidratar íons graças à sua polaridade, tornando possível a dissolução de muitos sais, mas dissolver uma substância não significa reagir quimicamente com ela. Substâncias orgânicas apolares frequentemente são pouco solúveis em água, conforme tamanho molecular e outras interações. A fórmula H₂O e suas ligações explicam a capacidade de solvente e também os limites dessa capacidade.",
        "example": "Em água pura a 25 °C, tome K_w=1,0×10⁻¹⁴ e [H₃O⁺]=[OH⁻]=x. Então x²=10⁻¹⁴, x=10⁻⁷ mol/L e pH=−log(10⁻⁷)=7. Esse resultado não autoriza chamar de ácido todo líquido neutro com pH diferente de 7 em outra temperatura.",
        "pitfall": "Não generalize pH 7 como critério universal de neutralidade a qualquer temperatura nem confunda hidratação física de íons com neutralização química.",
        "steps": [
          "Escreva a autoionização e identifique ácido e base.",
          "Use K_w e a condição de eletroneutralidade quando a água é pura.",
          "Avalie temperatura, diluição e interações antes de extrapolar."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A molécula de H₂O é polar principalmente porque:",
        "options": [
          "É linear e suas ligações cancelam os dipolos",
          "O hidrogênio tem maior eletronegatividade que o oxigênio",
          "Sua geometria angular não cancela os dipolos das ligações O–H",
          "Cada molécula possui duas ligações de hidrogênio covalentes"
        ],
        "correctIndex": 2,
        "hint": "Analise a estrutura molecular e as hipóteses numéricas do enunciado.",
        "solution": "Os pares não ligantes do oxigênio contribuem para a geometria angular de aproximadamente 104,5°. As ligações O–H são polares e seus vetores não se cancelam, conferindo momento dipolar à molécula como um todo."
      },
      {
        "level": "intermediate",
        "prompt": "Gelo de densidade 0,92 g/cm³ flutua em água de 1,00 g/cm³. Aproximadamente qual fração de seu volume fica submersa?",
        "options": [
          "8%",
          "92%",
          "50%",
          "100%"
        ],
        "correctIndex": 1,
        "hint": "Analise a estrutura molecular e as hipóteses numéricas do enunciado.",
        "solution": "Em equilíbrio de flutuação, o peso do gelo iguala o empuxo da água deslocada: ρ_gelo·V_total=ρ_água·V_submerso. Logo V_submerso/V_total=0,92/1,00=0,92, ou 92%, sob as densidades informadas."
      },
      {
        "level": "advanced",
        "prompt": "Na água pura a 25 °C, K_w=10⁻¹⁴. A concentração de H₃O⁺ é:",
        "options": [
          "10⁻¹⁴ mol/L",
          "10⁷ mol/L",
          "10⁻⁶ mol/L",
          "10⁻⁷ mol/L"
        ],
        "correctIndex": 3,
        "hint": "Analise a estrutura molecular e as hipóteses numéricas do enunciado.",
        "solution": "Na água pura, [H₃O⁺]=[OH⁻]=x. Como K_w=x²=10⁻¹⁴, então x=10⁻⁷ mol/L e pH=7. A neutralidade significa igualdade entre essas concentrações, enquanto o valor de K_w depende da temperatura."
      }
    ]
  }
];
