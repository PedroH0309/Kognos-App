import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Fifth authorial batch: chemical classes and equilibria, electrostatics, evolution evidence and solid geometry. No teacher validation implied. */
export const provaoDepthBatch05Stem:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Principais características e propriedades de ácidos, bases, sais e óxidos",
    "objective": "Classificar ácidos, bases, sais e óxidos usando composição e comportamento em água, explicar neutralização e identificar limites das definições de Arrhenius e Brønsted–Lowry em aplicações.",
    "prerequisites": [
      "Íons e ligações químicas",
      "Dissociação e ionização",
      "Equações e cargas elétricas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Quatro classes inorgânicas e o comportamento em água",
        "explanation": "Na classificação escolar de Arrhenius, ácidos são substâncias que, em solução aquosa, originam íons H₃O⁺, frequentemente representados como H⁺ em equações simplificadas. HCl, por exemplo, reage com água formando H₃O⁺ e Cl⁻. Bases de Arrhenius aumentam a concentração de íons OH⁻ em solução aquosa, como ocorre na dissolução do hidróxido de sódio NaOH. A definição descreve um comportamento em água e não garante que todo composto cujo nome contenha hidrogênio seja ácido.\n\nSais são compostos iônicos constituídos por cátions e ânions, podendo resultar de neutralizações. NaCl é sal formado por Na⁺ e Cl⁻; isso não significa que todos os sais tenham soluções neutras, pois íons podem reagir com água. Óxidos são compostos binários do oxigênio com outro elemento, considerados segundo regras de classificação que excluem certos compostos especiais, como peróxidos. CO₂ e CaO são exemplos de óxidos com comportamentos diferentes.\n\nPara reconhecer uma substância, considere fórmula, tipo de ligação, composição e transformação em solução. H₂O, mesmo contendo hidrogênio e oxigênio, não é simplesmente um ácido de Arrhenius. A acidez também não é definida pela capacidade de corroer materiais de forma indistinta: propriedades variam com concentração, condições e reagentes.",
        "example": "Classifique HCl(aq), NaOH(aq), NaCl(s) e CO₂(g). HCl comporta-se como ácido de Arrhenius em água; NaOH fornece OH⁻ ao dissolver e é base; NaCl é sal iônico; CO₂ é óxido molecular. A identificação de cada classe exige composição e comportamento, não só o nome.",
        "pitfall": "Evite afirmar que qualquer substância com H é ácido e qualquer composto com O é óxido. Existem hidretos, peróxidos e espécies em que essas classificações simplificadas não se aplicam.",
        "steps": [
          "Leia a fórmula e reconheça íons, hidrogênio, hidroxila e oxigênio.",
          "Considere o comportamento em água antes de usar a definição de Arrhenius.",
          "Diferencie classe química de propriedade como corrosividade ou pH da solução."
        ]
      },
      {
        "level": "intermediate",
        "title": "Neutralização, força, concentração e indicadores",
        "explanation": "Na reação de neutralização, uma espécie ácida reage com uma básica. No modelo usual de ácido forte com base forte, íons H₃O⁺ e OH⁻ participam da formação de água, enquanto íons restantes podem formar sal. A equação HCl + NaOH → NaCl + H₂O está balanceada na proporção de um mol de cada reagente. Se houver quantidades estequiométricas apropriadas e condições ideais, o ponto de equivalência dessa reação pode apresentar pH próximo de 7 a 25 °C.\n\nNão confunda força com concentração. Um ácido forte, como HCl em solução aquosa diluída, é aquele cuja ionização em água é praticamente completa nas condições usuais. Uma solução concentrada de ácido fraco pode ter concentração analítica de ácido maior, embora a fração ionizada seja menor. Indicadores ácido-base, como fenolftaleína, mudam de aparência dentro de faixas de pH, não fornecendo sozinhos o valor exato de pH. A escala de pH é logarítmica e depende da atividade dos íons hidrônio.\n\nSais também podem alterar pH por hidrólise dos íons. Uma solução aquosa de um sal derivado de ácido fraco e base forte pode ser básica, dependendo das espécies presentes. Assim, “ácido + base produz sal e água” é esquema útil, mas não autoriza concluir que toda solução de sal seja neutra ou que toda neutralização alcance exatamente pH 7.",
        "example": "Para neutralizar 0,10 mol de HCl com NaOH, a estequiometria HCl:NaOH é 1:1, portanto são necessários 0,10 mol de NaOH. Se a base estiver a 0,50 mol/L, o volume teórico é V=n/C=0,10/0,50=0,20 L, ou 200 mL, desprezando reações secundárias e incertezas.",
        "pitfall": "Não use a palavra “forte” como sinônimo de “concentrado”. Força corresponde à extensão da ionização ou dissociação relevante; concentração expressa quantidade por volume da solução.",
        "steps": [
          "Balanceie a equação e determine a razão molar entre ácido e base.",
          "Converta mol e concentração em volume quando o enunciado fornecer dados.",
          "Analise se a força dos reagentes e a hidrólise do sal influenciam o pH final."
        ]
      },
      {
        "level": "advanced",
        "title": "Brønsted–Lowry, pares conjugados e óxidos",
        "explanation": "A teoria de Brønsted–Lowry amplia a análise: ácido é doador de próton H⁺ e base é aceitadora de próton. Na reação NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, a amônia atua como base ao receber H⁺ da água, formando NH₄⁺, embora sua fórmula não contenha o grupo OH. A água atua como ácido nessa reação. Um par conjugado é formado por espécies que diferem em um próton, como NH₄⁺/NH₃ e H₂O/OH⁻. Uma mesma espécie pode atuar como ácido ou base dependendo do parceiro, comportamento chamado anfiprótico quando pertinente.\n\nÓxidos podem ser classificados segundo comportamento em reações. CO₂ é óxido ácido em diversos contextos e pode reagir com base; CaO é óxido básico e reage com água formando Ca(OH)₂, liberando energia. Al₂O₃ é um exemplo de óxido anfótero, capaz de reagir com ácidos e bases sob condições adequadas. Existem também óxidos frequentemente classificados como neutros no esquema escolar, como CO, que não devem ser tratados como se tivessem todas as propriedades dos óxidos ácidos ou básicos.\n\nAs classificações são modelos, e a química real exige meio, temperatura, concentração e espécies participantes. Em aplicações ambientais, CO₂ dissolvido contribui ao equilíbrio ácido-base da água, mas o efeito não pode ser deduzido unicamente de uma fórmula. A leitura de equações deve preservar massa e carga e distinguir reação de um óxido com água de sua classificação geral.",
        "example": "Na equação NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, identifique quem doa o próton: H₂O transforma-se em OH⁻, portanto é ácido. NH₃ recebe o próton e torna-se NH₄⁺, portanto é base. Os pares conjugados são H₂O/OH⁻ e NH₄⁺/NH₃.",
        "pitfall": "Não conclua que NH₃ não pode ser base por não apresentar OH na fórmula. Essa substância funciona como base de Brønsted–Lowry e produz OH⁻ ao reagir com água.",
        "steps": [
          "Identifique transferência de próton e nomeie ácido e base na reação.",
          "Associe cada espécie ao par conjugado que difere por um próton.",
          "Classifique óxidos pelo comportamento em reações, reconhecendo exceções e condições."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual classificação é correta para HCl(aq), NaOH(aq), NaCl(s) e CO₂(g), nessa ordem?",
        "options": [
          "Ácido, base, sal e óxido.",
          "Base, ácido, óxido e sal.",
          "Sal, óxido, ácido e base.",
          "Óxido, sal, base e ácido."
        ],
        "correctIndex": 0,
        "hint": "Considere ionização em água, hidróxido, composto iônico e óxido molecular.",
        "solution": "A alternativa A está correta: HCl comporta-se como ácido aquoso, NaOH é hidróxido básico, NaCl é um sal iônico e CO₂ é óxido. As demais permutam as classes sem considerar fórmulas e comportamento químico."
      },
      {
        "level": "intermediate",
        "prompt": "Quantos litros de NaOH 0,50 mol/L são necessários para reagir com 0,10 mol de HCl, numa neutralização 1:1?",
        "options": [
          "0,05 L",
          "0,20 L",
          "0,50 L",
          "5,0 L"
        ],
        "correctIndex": 1,
        "hint": "Use a razão HCl:NaOH de 1:1 e V=n/C.",
        "solution": "A alternativa B está correta: a neutralização HCl + NaOH usa 0,10 mol de NaOH, e V=0,10/0,50=0,20 L. As outras alternativas não correspondem à estequiometria e ao cálculo de concentração fornecidos."
      },
      {
        "level": "advanced",
        "prompt": "Em NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, qual espécie age como base de Brønsted–Lowry?",
        "options": [
          "H₂O, por doar próton.",
          "OH⁻, por formar NH₄⁺.",
          "NH₃, por receber próton.",
          "NH₄⁺, por se transformar em água."
        ],
        "correctIndex": 2,
        "hint": "A base recebe H⁺ e se converte em ácido conjugado.",
        "solution": "A alternativa C está correta: NH₃ recebe um próton e se converte em NH₄⁺, enquanto H₂O o doa e passa a OH⁻. A base pode não conter OH em sua fórmula original."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Equilíbrio em sistemas homogêneos e heterogêneos",
    "objective": "Explicar equilíbrio químico dinâmico e constante de equilíbrio, escrever expressões Kc e analisar quociente reacional, Le Châtelier e o papel das fases em sistemas homogêneos e heterogêneos.",
    "prerequisites": [
      "Reações reversíveis",
      "Concentração em mol/L",
      "Cinética química",
      "Coeficientes estequiométricos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Equilíbrio é dinâmico, não interrupção da reação",
        "explanation": "Uma reação reversível pode ocorrer nos sentidos direto e inverso. Em recipiente fechado e sob condições adequadas, o sistema pode atingir equilíbrio químico: as velocidades das reações direta e inversa ficam iguais, de modo que as concentrações macroscópicas permanecem aproximadamente constantes. Isso não significa que reagentes e produtos tenham concentrações iguais; significa que suas taxas líquidas de transformação se compensam.\n\nConsidere N₂O₄(g) ⇌ 2 NO₂(g). À medida que N₂O₄ se transforma em NO₂, a reação inversa pode se tornar mais relevante conforme a composição muda. No equilíbrio, moléculas continuam reagindo, mas a concentração observada pode se estabilizar. O equilíbrio depende de temperatura e da composição inicial; em sistemas abertos com remoção constante de produto, outra situação pode ocorrer.\n\nQuando todas as espécies relevantes estão na mesma fase, o equilíbrio é homogêneo. Quando há fases diferentes, como sólido e gás, ele é heterogêneo. A distinção é importante porque atividades de sólidos e líquidos puros são tratadas de forma diferente na expressão termodinâmica de equilíbrio. Para não confundir, a classificação precisa considerar as espécies e estados físicos declarados na equação.",
        "example": "Em um recipiente de N₂O₄/NO₂, um sensor indica concentração de NO₂ constante após certo tempo. Isso é compatível com equilíbrio dinâmico se as condições de temperatura e volume estiverem fixas. Não se conclui que nenhuma molécula de NO₂ está sendo consumida: a reação inversa continua ocorrendo.",
        "pitfall": "Evite afirmar que equilíbrio exige quantidades iguais de todos os participantes. A condição é igualdade de velocidades direta e inversa, não igualdade numérica das concentrações.",
        "steps": [
          "Identifique se a equação admite reação direta e inversa.",
          "Distinga estabilização macroscópica de cessação molecular.",
          "Classifique as fases para reconhecer equilíbrio homogêneo ou heterogêneo."
        ]
      },
      {
        "level": "intermediate",
        "title": "Kc, expoentes e quociente reacional",
        "explanation": "Para uma reação genérica aA + bB ⇌ cC + dD entre espécies em solução ou gases, uma expressão escolar de Kc pode ser escrita [C]^c[D]^d/([A]^a[B]^b) para as espécies presentes na fase pertinente, em condições de temperatura fixa. Os expoentes correspondem aos coeficientes da equação balanceada. A constante resulta da composição de equilíbrio; não se calcula Kc com concentrações iniciais, a menos que coincidam com a composição de equilíbrio.\n\nPara H₂(g) + I₂(g) ⇌ 2 HI(g), Kc=[HI]²/([H₂][I₂]). Se em equilíbrio as concentrações fossem [H₂]=0,20 mol/L, [I₂]=0,20 mol/L e [HI]=0,80 mol/L, no modelo escolar Kc=0,80²/(0,20×0,20)=16. A magnitude de Kc indica predominância relativa de produtos ou reagentes sob a reação e temperatura especificadas, não a velocidade necessária para alcançar a composição.\n\nO quociente reacional Qc usa a mesma expressão, mas com concentrações de um instante qualquer. Se Qc<Kc, a reação líquida tende a avançar no sentido direto até reequilibrar, sob hipóteses apropriadas; se Qc>Kc, tende ao inverso. Esse critério é mais rigoroso do que aplicar uma lista de regras sem olhar o sistema.",
        "example": "Para H₂+I₂⇌2HI, com [H₂]=0,20, [I₂]=0,20 e [HI]=0,80 mol/L em equilíbrio, Kc=16. Se outra mistura sob a mesma temperatura apresentar [H₂]=[I₂]=1,0 e [HI]=1,0, então Qc=1, inferior a 16; a transformação líquida tende inicialmente a formar mais HI.",
        "pitfall": "Não use concentrações iniciais como se fossem concentrações de equilíbrio. E não copie expoentes de uma lei de velocidade cinética: em Kc eles são dados pela estequiometria da reação global.",
        "steps": [
          "Balanceie a equação e escreva as espécies presentes na expressão.",
          "Use exclusivamente as concentrações apropriadas ao instante considerado.",
          "Compare Qc e Kc para prever o sentido líquido de ajuste."
        ]
      },
      {
        "level": "advanced",
        "title": "Le Châtelier, temperatura, pressão e fases",
        "explanation": "O princípio de Le Châtelier descreve a resposta de um sistema em equilíbrio a perturbações: o sistema tende a ajustar sua composição de modo a se opor parcialmente ao efeito imposto. A interpretação exige cuidado com o tipo de perturbação. Adicionar reagente pode alterar Q e favorecer formação de produto; aumentar pressão por compressão em equilíbrio gasoso pode favorecer o lado com menor quantidade de mols gasosos, quando essa quantidade difere. Se os dois lados têm a mesma soma de coeficientes de gases ideais, não se pode inferir deslocamento pela regra simples da pressão.\n\nA temperatura é especial porque altera o próprio valor da constante de equilíbrio. Numa reação exotérmica no sentido direto, elevar temperatura tende a favorecer o sentido endotérmico inverso; em reação endotérmica, o oposto pode ocorrer. Catalisador acelera o estabelecimento do equilíbrio ao afetar os caminhos cinéticos, mas não altera K numa mesma temperatura. Em sistemas heterogêneos, uma fase sólida pura presente em quantidade suficiente costuma ter atividade unitária; acrescentar mais sólido puro não altera a expressão K por si só.\n\nConsidere CaCO₃(s) ⇌ CaO(s) + CO₂(g). Num modelo idealizado de fases sólidas puras em equilíbrio, Kp está associado à pressão parcial de CO₂, sem termos explícitos de CaCO₃ e CaO, desde que as fases necessárias estejam presentes. Retirar todo um sólido pode mudar as condições do equilíbrio, portanto a simplificação não significa que a existência física dos sólidos seja irrelevante.",
        "example": "Para N₂(g)+3H₂(g)⇌2NH₃(g), a compressão a temperatura fixa favorece, no modelo ideal, o lado de dois mols gasosos em vez de quatro: o lado de NH₃. Já um catalisador pode acelerar o ajuste, mas não desloca a composição de equilíbrio a temperatura constante.",
        "pitfall": "Não conclua que aumentar pressão sempre produz mais produto: depende da quantidade de espécies gasosas e do modo de perturbar o sistema. Não inclua sólidos puros como concentrações variáveis em Kc.",
        "steps": [
          "Identifique a perturbação e se ela altera Q, K ou ambos.",
          "Conte mols gasosos para compressão, examine ΔH para mudança de temperatura.",
          "Reconheça fases puras e limites do modelo ao escrever a expressão de equilíbrio."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em um equilíbrio químico dinâmico, o que acontece com as velocidades da reação direta e inversa?",
        "options": [
          "Ambas se tornam zero.",
          "A velocidade inversa é sempre maior.",
          "A velocidade direta iguala a inversa.",
          "As concentrações de reagentes e produtos precisam ser iguais."
        ],
        "correctIndex": 2,
        "hint": "Velocidades iguais explicam concentrações macroscópicas constantes.",
        "solution": "A alternativa C está correta: no equilíbrio dinâmico, as velocidades direta e inversa se igualam, embora ocorram transformações moleculares. Não é necessário que as concentrações dos participantes sejam iguais."
      },
      {
        "level": "intermediate",
        "prompt": "Para H₂+I₂⇌2HI, com [H₂]=[I₂]=0,20 e [HI]=0,80 mol/L no equilíbrio, qual é Kc?",
        "options": [
          "4",
          "8",
          "12",
          "16"
        ],
        "correctIndex": 3,
        "hint": "Calcule [HI]²/([H₂][I₂]).",
        "solution": "A alternativa D está correta: 0,80²/(0,20×0,20)=0,64/0,04=16. Os demais valores surgem de omissão do expoente do HI ou de operações que não seguem a expressão balanceada."
      },
      {
        "level": "advanced",
        "prompt": "Em N₂(g)+3H₂(g)⇌2NH₃(g), o que tende a ocorrer após compressão a temperatura constante, no modelo de gases ideais?",
        "options": [
          "O equilíbrio desloca-se para o lado com menos mols gasosos, favorecendo NH₃.",
          "A constante K sempre aumenta.",
          "O equilíbrio se desloca obrigatoriamente para os reagentes.",
          "A reação deixa de ser reversível."
        ],
        "correctIndex": 0,
        "hint": "Compare quatro mols gasosos do lado esquerdo com dois do direito.",
        "solution": "A alternativa A está correta: a compressão pode favorecer o lado de menor número de mols gasosos, no caso os produtos. K não muda apenas com a pressão a temperatura fixa no modelo ideal."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Lei de Coulomb. Campo elétrico",
    "objective": "Aplicar conservação e quantização de carga, Lei de Coulomb e superposição vetorial; determinar campo elétrico de cargas puntiformes e relacionar linhas de campo à força e à direção física.",
    "prerequisites": [
      "Vetores",
      "Potências de dez",
      "Proporcionalidade inversa",
      "Princípios da eletrostática"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Carga elétrica, atração, repulsão e força de Coulomb",
        "explanation": "A carga elétrica é propriedade física da matéria que determina interações eletromagnéticas. No modelo elementar, cargas de mesmo sinal se repelem e de sinais opostos se atraem. A carga de um corpo resulta da soma das cargas dos seus constituintes; em muitos processos cotidianos, eletrização envolve transferência de elétrons, não criação espontânea de carga. O princípio da conservação afirma que a carga total de um sistema isolado permanece constante.\n\nPara duas cargas puntiformes estacionárias separadas por distância r no vácuo, a intensidade da força elétrica é F=k|q₁q₂|/r², com k≈9,0×10⁹ N·m²/C² no modelo do vácuo. Essa relação mostra dependência inversa com o quadrado da distância: dobrar r reduz a intensidade a um quarto se as cargas forem mantidas. A direção da força é ao longo da reta que liga as cargas e o sentido depende da atração ou repulsão.\n\nUma carga puntiforme é idealização apropriada quando dimensões dos corpos são pequenas frente à separação ou quando o problema trata de distribuição concentrada. Em materiais e configurações complexas, distribuições espaciais e propriedades do meio importam. É necessário converter microcoulombs para coulombs: 1 μC = 10⁻⁶ C.",
        "example": "Duas cargas de +2 μC e −3 μC separadas por 0,30 m no vácuo atraem-se. A força tem módulo F=(9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/(0,30²)=0,60 N. O sinal informa atração; o valor calculado é módulo, portanto positivo.",
        "pitfall": "Não trate cargas negativas como força de módulo negativo. A fórmula de intensidade usa módulos; atração ou repulsão é tratada pelo sentido vetorial da força.",
        "steps": [
          "Converta cargas para coulombs e distâncias para metros.",
          "Calcule o módulo por F=k|q₁q₂|/r².",
          "Determine atração ou repulsão pela combinação dos sinais."
        ]
      },
      {
        "level": "intermediate",
        "title": "O campo elétrico descreve força por unidade de carga",
        "explanation": "O campo elétrico E em um ponto é definido como força elétrica por unidade de carga de prova positiva suficientemente pequena para não modificar de forma relevante a configuração, E=F/q₀. Para uma carga pontual Q no vácuo, o módulo do campo a uma distância r é E=k|Q|/r². Sua unidade pode ser N/C, equivalente a V/m em contextos eletrostáticos. O campo aponta para fora de uma carga positiva e para a carga negativa.\n\nDiferentemente de uma força específica, o campo existe como característica da configuração fonte mesmo quando nenhuma carga de prova é colocada no ponto. Ao colocar uma carga q nesse campo, F=qE em forma vetorial: para q positiva, a força acompanha o campo; para q negativa, é oposta. É crucial separar a direção do campo da força exercida sobre carga negativa, para não inverter o resultado.\n\nAs linhas de campo são recurso representacional: a tangente indica direção local, e a densidade de linhas em diagramas pode sugerir intensidade relativa conforme convenção de desenho. Linhas não são trilhas materiais que partículas obrigatoriamente percorrem. Em campo uniforme ideal, linhas são paralelas e igualmente espaçadas, como aproximação em região central entre placas paralelas extensas.",
        "example": "Uma carga Q=+4 μC cria a 0,20 m um campo de módulo E=(9×10⁹)(4×10⁻⁶)/(0,20²)=9,0×10⁵ N/C, dirigido para fora de Q. Se uma carga de prova negativa fosse colocada ali, sua força seria dirigida para Q, contrária ao campo.",
        "pitfall": "Não desenhe linhas de campo como trajetórias certas de elétrons em movimento. O campo indica força local, enquanto movimento real depende também de massa, velocidade inicial e outras forças.",
        "steps": [
          "Calcule E a partir da carga fonte e da distância.",
          "Defina direção do campo conforme sinal da carga fonte.",
          "Se houver carga de prova, use F=qE e trate seu sinal vetorialmente."
        ]
      },
      {
        "level": "advanced",
        "title": "Superposição vetorial e limitações dos diagramas",
        "explanation": "O campo resultante de múltiplas cargas é soma vetorial das contribuições individuais. Se dois campos apontam no mesmo sentido, seus módulos somam-se; se têm sentidos opostos numa mesma linha, subtraem-se em módulo. Em duas ou três dimensões, a soma exige componentes vetoriais. Essa propriedade decorre da linearidade eletrostática no meio e regime considerados e evita tratar toda intensidade como número escalar aditivo.\n\nConsidere duas cargas positivas iguais nas extremidades de um segmento. No ponto médio, cada uma produz campo de mesma intensidade, porém em sentidos opostos; o campo resultante é zero. Isso não significa ausência de forças entre as cargas nem que a energia potencial elétrica no ponto médio seja necessariamente zero. Campo e potencial são grandezas diferentes: campo é vetorial; potencial é escalar.\n\nO princípio de superposição também deve ser usado ao identificar onde campos se anulam. Para cargas de sinais contrários, no segmento entre elas os campos apontam no mesmo sentido e não se cancelam. Cargas com configurações assimétricas exigem cálculos e verificação de regiões possíveis, evitando encontrar soluções algébricas fora do domínio físico do problema.",
        "example": "Duas cargas de +1 μC estão em x=−0,10 m e x=+0,10 m. No ponto x=0, cada carga gera módulo E=(9×10⁹)(1×10⁻⁶)/(0,10²)=9×10⁵ N/C, mas os sentidos são opostos. A soma vetorial produz campo resultante zero no ponto médio.",
        "pitfall": "Não confunda campo elétrico resultante nulo em um ponto com potencial elétrico nulo. Duas cargas positivas geram potenciais de mesmo sinal que podem se somar mesmo onde os campos se cancelam.",
        "steps": [
          "Determine o campo individual de cada carga no ponto escolhido.",
          "Desenhe vetores com sentido físico e some-os por componentes.",
          "Confronte o resultado com simetria, sinais e região espacial do problema."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Se a distância entre duas cargas puntiformes fixas dobra, como varia o módulo da força de Coulomb no vácuo?",
        "options": [
          "Dobra.",
          "Cai à metade.",
          "Cai a um quarto.",
          "Quadruplica."
        ],
        "correctIndex": 2,
        "hint": "A força é inversamente proporcional ao quadrado da distância.",
        "solution": "A alternativa C está correta: F é proporcional a 1/r², então dobrar r divide a força por 2²=4. As outras opções tratam a dependência como linear ou diretamente proporcional."
      },
      {
        "level": "intermediate",
        "prompt": "O campo elétrico criado por carga pontual positiva aponta, no modelo eletrostático:",
        "options": [
          "Para fora da carga.",
          "Para a carga.",
          "Sempre para cima.",
          "Sempre na direção da velocidade da carga de prova."
        ],
        "correctIndex": 0,
        "hint": "O sentido é definido pela força sobre carga de prova positiva.",
        "solution": "A alternativa A está correta: campo de carga fonte positiva aponta radialmente para fora. Para uma carga fonte negativa, aponta para dentro; a força numa carga de prova negativa inverteria o sentido."
      },
      {
        "level": "advanced",
        "prompt": "Duas cargas positivas idênticas ocupam extremos de um segmento. Qual é o campo resultante exatamente no ponto médio?",
        "options": [
          "Duas vezes o campo individual.",
          "Zero, por cancelamento de vetores opostos.",
          "Maior que em qualquer outro ponto.",
          "Zero apenas se as cargas forem negativas."
        ],
        "correctIndex": 1,
        "hint": "Os módulos no ponto médio são iguais, mas os sentidos opostos.",
        "solution": "A alternativa B está correta: duas fontes positivas simétricas geram campos de iguais módulos e sentidos opostos no ponto médio. A soma vetorial é zero, embora os potenciais elétricos possam se somar."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Evidências da evolução biológica",
    "objective": "Comparar evidências fósseis, anatômicas, moleculares, biogeográficas e observacionais da evolução; diferenciar homologia e analogia e interpretar hipóteses de ancestralidade com dados.",
    "prerequisites": [
      "Hereditariedade e mutações",
      "Populações e espécies",
      "Tempo geológico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Evolução como descendência com modificações",
        "explanation": "Evolução biológica descreve alterações herdáveis em populações ao longo de gerações, incluindo mudanças na frequência de variantes genéticas e processos de diversificação de linhagens. Não significa transformação deliberada de um indivíduo para se adaptar durante sua vida. Espécies atuais compartilham ancestrais em diferentes profundidades do tempo evolutivo, e a reconstrução dessas relações depende de múltiplas linhas de evidência que podem ser avaliadas independentemente.\n\nFósseis preservam vestígios de organismos antigos, como ossos mineralizados, pegadas e impressões, conforme condições de preservação. A sucessão de fósseis em camadas e a datação por métodos apropriados permitem situar organismos no tempo. O registro fóssil não é completo: preservação é rara e desigual, e lacunas não demonstram ausência de transformação evolutiva. A informação mais forte surge da combinação entre idade, anatomia e contexto geológico.\n\nEvidências atuais também incluem modificações observadas em populações, como mudanças de frequências genéticas sob seleção natural em organismos de gerações rápidas. A evolução não possui objetivo necessário de perfeição; características podem aumentar sucesso reprodutivo em certo ambiente e ter custos em outro. A descrição científica deve distinguir hipótese, mecanismo e observação.",
        "example": "Compare fósseis de espécies em camadas datadas de períodos distintos e características anatômicas mensuráveis. Se uma série de formas apresenta combinação de características de grupos conhecidos, o registro pode sustentar hipóteses de relações evolutivas, mas não comprova que cada fóssil seja ancestral direto do seguinte.",
        "pitfall": "Não diga que indivíduos evoluem geneticamente apenas porque exercitam determinado órgão. Evolução populacional envolve herança e reprodução ao longo de gerações, não transformação voluntária em vida.",
        "steps": [
          "Identifique o tipo de evidência: fóssil, observação ou informação hereditária.",
          "Considere datação, contexto e condições de preservação.",
          "Relacione evidências a hipóteses de descendência comum sem supor sequências perfeitas."
        ]
      },
      {
        "level": "intermediate",
        "title": "Homologia, analogia e parentesco evolutivo",
        "explanation": "Estruturas homólogas têm origem evolutiva compartilhada, embora possam exercer funções diferentes. Membros anteriores de humanos, morcegos e baleias apresentam padrões ósseos correspondentes associados à ancestralidade comum, apesar de adaptação ao manuseio, voo ou natação. Essa semelhança na organização é mais informativa do que afirmar apenas que todas as estruturas se movimentam. Homologia pode ser examinada em anatomia, desenvolvimento e sequências moleculares.\n\nEstruturas análogas cumprem funções semelhantes, mas não necessariamente possuem a mesma origem evolutiva próxima. Asas de insetos e asas de aves permitem voo, porém não têm equivalência estrutural completa como asas herdadas de um ancestral alado comum desses grupos. A evolução convergente pode produzir soluções funcionais semelhantes sob pressões ambientais comparáveis. Isso não invalida a ancestralidade remota compartilhada por seres vivos, apenas distingue a origem da característica específica comparada.\n\nEm biologia molecular, comparar sequências de DNA e proteínas pode fornecer evidências de parentesco, desde que sejam identificadas regiões comparáveis, homologia dos genes e limites da análise. Não basta afirmar que organismos “têm DNA” para demonstrar proximidade: é necessário examinar padrões de similaridade, diferenças e métodos filogenéticos.",
        "example": "O braço humano e a nadadeira anterior da baleia possuem ossos correspondentes como úmero, rádio e ulna, reorganizados para funções distintas. São exemplos de homologia. Já o voo de insetos e aves ilustra analogia funcional quanto às asas, que têm origens estruturais muito diferentes.",
        "pitfall": "Não use apenas semelhança funcional para afirmar homologia. Características análogas podem surgir independentemente por convergência, enquanto homologia envolve ancestralidade de determinada estrutura.",
        "steps": [
          "Compare organização anatômica e origem evolutiva das estruturas.",
          "Separe função semelhante de origem compartilhada.",
          "Integre evidências moleculares e anatômicas para inferir parentesco."
        ]
      },
      {
        "level": "advanced",
        "title": "Biogeografia, árvores filogenéticas e convergência de evidências",
        "explanation": "A biogeografia estuda distribuição espacial de organismos e suas relações com história geológica, dispersão, isolamento e evolução. Espécies de ilhas podem apresentar parentesco com populações continentais próximas e diversificação após colonização, mas padrões concretos dependem de tempo, barreiras e processos ecológicos. A distribuição atual, sozinha, não revela toda a trajetória: continentes se movem e espécies podem migrar ou desaparecer localmente.\n\nÁrvores filogenéticas representam hipóteses sobre relações de ancestralidade. Nós internos indicam ancestrais comuns inferidos e ramos expressam linhagens; a disposição visual de pontas à esquerda ou direita não define quais espécies seriam “mais evoluídas”. Dois grupos-irmãos compartilham ancestral comum mais recente entre si do que com grupos externos, sob a árvore apresentada. A robustez de uma hipótese cresce quando diferentes dados coerentes, como genes, morfologia e fósseis, sustentam relações semelhantes.\n\nEvidência molecular deve ser interpretada cuidadosamente. Similaridade de sequências pode resultar de ancestralidade, conservação funcional ou outros processos; análises filogenéticas exigem alinhamento e modelos adequados. Populações e linhagens não evoluem em uma escada orientada ao ser humano. Conclusões devem explicitar incertezas, métodos e novas evidências que poderiam modificar a árvore.",
        "example": "Uma árvore hipotética apresenta (A,(B,C)): B e C compartilham nó ancestral mais recente entre si do que com A, portanto são grupos-irmãos na representação. Girar o nó e trocar as posições gráficas de B e C não altera essa relação evolutiva.",
        "pitfall": "Não leia árvores filogenéticas como classificação do organismo mais antigo ao mais avançado. As pontas representam linhagens comparadas e a ordem horizontal do desenho pode ser alterada sem modificar a ancestralidade.",
        "steps": [
          "Interprete nós e ramos segundo ancestralidade compartilhada.",
          "Compare explicações biogeográficas com fósseis e dados moleculares.",
          "Reconheça incertezas e evite conclusões de progresso evolutivo obrigatório."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual afirmação descreve corretamente o registro fóssil como evidência da evolução?",
        "options": [
          "Todos os organismos mortos necessariamente fossilizam.",
          "Os fósseis formam registro completo de toda espécie que existiu.",
          "Fósseis eliminam a necessidade de datação geológica.",
          "Fósseis mostram vestígios de organismos passados, embora a preservação seja incompleta."
        ],
        "correctIndex": 3,
        "hint": "A fossilização depende de condições específicas de preservação.",
        "solution": "A alternativa D está correta: o registro preserva vestígios e permite comparar organismos ao longo do tempo, mas é incompleto. As demais generalizam fossilização e descartam o contexto geológico necessário."
      },
      {
        "level": "intermediate",
        "prompt": "O braço humano e a nadadeira anterior de baleia possuem arranjo ósseo correspondente, mas funções diferentes. Isso exemplifica:",
        "options": [
          "Analogia sem ancestralidade compartilhada da estrutura.",
          "Homologia de estruturas com origem evolutiva comum.",
          "Ausência de qualquer evidência evolutiva.",
          "Mutação exclusivamente adquirida durante a vida de cada indivíduo."
        ],
        "correctIndex": 1,
        "hint": "Compare origem estrutural, não apenas função atual.",
        "solution": "A alternativa B está correta: a correspondência anatômica dos membros anteriores indica homologia, apesar das funções distintas. A alternativa A confundiria com analogia funcional; C e D negam o conceito de origem evolutiva."
      },
      {
        "level": "advanced",
        "prompt": "Em uma árvore filogenética representada por (A,(B,C)), qual relação é sustentada?",
        "options": [
          "A é necessariamente mais evoluída que B.",
          "C descende diretamente de B, por estar à direita.",
          "B e C compartilham ancestral comum mais recente entre si do que com A.",
          "Todas as linhagens surgiram por transformação direta umas nas outras."
        ],
        "correctIndex": 2,
        "hint": "Os ramos B e C encontram-se no nó mais recente.",
        "solution": "A alternativa C está correta: B e C formam grupo-irmão na árvore indicada, compartilhando nó ancestral mais recente. A posição gráfica não estabelece hierarquia de evolução nem descendência direta entre pontas."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topicStart": "Poliedros e corpos redondos - cálculo de áreas, volume e capacidade",
    "objective": "Distinguir área superficial, volume e capacidade em prismas, cilindros, pirâmides, cones e esferas; deduzir fórmulas e resolver aplicações com unidades e relações de semelhança.",
    "prerequisites": [
      "Áreas de figuras planas",
      "Potências e radicais",
      "Conversões de unidades"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Prismas, cilindros e significado de volume",
        "explanation": "Volume mede o espaço ocupado por um sólido tridimensional, normalmente em unidades cúbicas, como cm³ e m³. Área superficial mede a extensão de sua superfície externa, em unidades quadradas; capacidade indica quanto pode caber em um recipiente, podendo ser dada em litros. Esses conceitos são distintos: um cilindro pode ter volume interno em litros e área de revestimento em m². A conversão importante é 1 L = 1 dm³, e portanto 1000 L = 1 m³.\n\nPara um prisma reto com área da base Ab e altura h, V=Ab×h. Um paralelepípedo retângulo de lados a, b e c tem V=abc. Para cilindro circular reto, a base possui área πr², resultando V=πr²h. A área lateral do cilindro é 2πrh; para cilindro fechado com duas bases, a área total é 2πrh+2πr². Definir se existem tampas é essencial em problemas de material de fabricação.\n\nEm sólidos semelhantes, volume varia com cubo do fator de escala linear. Isso explica por que duplicar todas as dimensões de um recipiente aumenta volume oito vezes, sem que o peso ou o custo necessariamente sejam multiplicados pelo mesmo fator se o material e a espessura forem alterados.",
        "example": "Uma caixa mede 0,50 m × 0,40 m × 0,30 m internamente. V=0,50×0,40×0,30=0,060 m³, equivalente a 60 L. Se a pergunta fosse área externa da caixa fechada, seria necessário somar as áreas das seis faces, não usar 60 L.",
        "pitfall": "Não confunda cm² com cm³ nem calcule capacidade multiplicando apenas duas medidas. Volume exige três dimensões ou a área de base multiplicada pela altura.",
        "steps": [
          "Determine se o problema pede área, volume interno ou capacidade.",
          "Escolha fórmula conforme a geometria e as dimensões fornecidas.",
          "Converta unidades cúbicas e litros somente após obter a grandeza correta."
        ]
      },
      {
        "level": "intermediate",
        "title": "Pirâmides, cones e esferas",
        "explanation": "Uma pirâmide com área da base Ab e altura perpendicular h possui V=Abh/3. Para cone circular reto, V=πr²h/3. O fator 1/3 diferencia esses sólidos de prismas e cilindros com a mesma base e altura. A altura deve ser perpendicular ao plano da base; a geratriz do cone é segmento inclinado e não deve substituir h na fórmula de volume, salvo após aplicar relação geométrica pertinente.\n\nA esfera de raio r possui volume V=4πr³/3 e área superficial A=4πr². O raio deve ser metade do diâmetro. A esfera não apresenta faces planas como um poliedro, e o cone possui superfície curva, o que justifica distinguir corpos redondos de prismas e pirâmides. A escolha da fórmula requer reconhecer a figura descrita, independentemente de desenho fora de escala.\n\nProblemas práticos podem pedir apenas área lateral de cone para cobrir sua superfície sem base: Al=πrg, com g geratriz. A área total de cone circular reto com base fechada soma πrg+πr². Cálculos com π podem ser deixados em forma exata quando solicitado ou aproximados com valor fornecido no enunciado.",
        "example": "Um cone tem raio 3 cm e altura perpendicular 4 cm. Seu volume é V=π×3²×4/3=12π cm³. Pela relação pitagórica, a geratriz mede √(3²+4²)=5 cm; a área lateral é π×3×5=15π cm². Volume e área usam medidas diferentes.",
        "pitfall": "Não use geratriz no lugar da altura de cone ou pirâmide ao calcular volume. A geratriz é útil para certas áreas laterais, não substitui perpendicularidade.",
        "steps": [
          "Identifique base, raio, altura perpendicular e geratriz conforme sólido.",
          "Calcule volume com fator 1/3 quando for cone ou pirâmide.",
          "Para áreas curvas, distinga superfície lateral de superfície total."
        ]
      },
      {
        "level": "advanced",
        "title": "Seções, semelhança e interpretação de capacidade",
        "explanation": "A relação entre comprimento, área e volume de sólidos semelhantes é fundamental: ao ampliar cada medida linear por k, áreas multiplicam-se por k² e volumes por k³. Se um cilindro tem raio e altura dobrados, seu volume passa a oito vezes o original porque r² contribui fator quatro e h contribui fator dois. Dobrar somente a altura, mantendo raio, dobra o volume; dobrar somente o raio, mantendo altura, quadruplica-o.\n\nA capacidade útil de um recipiente pode ser menor que o volume externo, devido à espessura das paredes e ao espaço não preenchido. Para tanques, reservatórios e embalagens, a fórmula geométrica ideal nem sempre representa a quantidade efetivamente armazenada. É necessário saber se dimensões são internas ou externas e se o tanque está completamente cheio. Para converter, 1 m³ corresponde a 1000 L; 1 cm³ corresponde a 1 mL.\n\nEm questões compostas, subtraia volumes de cavidades ou some volumes de partes sem sobreposição. Se uma escavação tem formato de prisma com um cilindro removido, determine volumes com unidades coerentes e considere se o cilindro atravessa toda a profundidade. A validade de uma resposta depende tanto da aritmética quanto da geometria apresentada.",
        "example": "Um tanque cilíndrico tem raio interno 1 m e altura útil 2 m, com V=2π m³≈6283 L. Se o raio passa a 2 m, mantendo altura, V=8π m³≈25133 L, quatro vezes maior. Se raio e altura duplicassem simultaneamente, o volume seria oito vezes maior.",
        "pitfall": "Não trate aumento de 100% no raio como aumento de 100% no volume. A dependência quadrática do raio e linear da altura precisam ser analisadas separadamente.",
        "steps": [
          "Determine quais dimensões variaram e quais permaneceram constantes.",
          "Aplique k² para área e k³ para volume em sólidos semelhantes.",
          "Converta capacidade e diferencie medidas internas de externas antes de concluir."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma caixa de dimensões internas 0,50 m × 0,40 m × 0,30 m tem capacidade teórica de:",
        "options": [
          "6 litros",
          "60 litros",
          "600 litros",
          "0,060 litro"
        ],
        "correctIndex": 1,
        "hint": "Multiplique as dimensões para obter m³ e use 1 m³=1000 L.",
        "solution": "A alternativa B está correta: V=0,50×0,40×0,30=0,060 m³, equivalente a 60 L. As outras aplicam conversão decimal incorreta entre metro cúbico e litro."
      },
      {
        "level": "intermediate",
        "prompt": "Um cone circular reto tem raio 3 cm e altura 4 cm. Qual seu volume?",
        "options": [
          "12π cm³",
          "36π cm³",
          "15π cm³",
          "48π cm³"
        ],
        "correctIndex": 0,
        "hint": "Use V=πr²h/3, não a geratriz.",
        "solution": "A alternativa A está correta: V=π×3²×4/3=12π cm³. B esquece o fator um terço; C corresponde à área lateral com geratriz 5 cm, não ao volume."
      },
      {
        "level": "advanced",
        "prompt": "Ao dobrar apenas o raio de um cilindro, mantendo altura constante, seu volume:",
        "options": [
          "Dobra.",
          "Fica igual.",
          "Quadruplica.",
          "Aumenta oito vezes."
        ],
        "correctIndex": 2,
        "hint": "No cilindro, V=πr²h; raio aparece ao quadrado.",
        "solution": "A alternativa C está correta: substituir r por 2r multiplica r² por quatro, portanto o volume quadruplica. O fator oito só ocorreria ao dobrar raio e altura conjuntamente."
      }
    ]
  }
];
