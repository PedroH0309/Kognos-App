import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original subject-specific aprofundamento, not teacher-certified. */
export const provaoDepthBatch02Science:readonly DeepTopicSpec[]=[
  {
    "subject": "Biologia",
    "topicStart": "Sucessão ecológica",
    "objective": "Explicar sucessão primária e secundária, colonização, facilitação, inibição, diversidade, dinâmica temporal, resiliência e limites da noção de comunidade clímax.",
    "prerequisites": [
      "Comunidade e ecossistema",
      "Fatores bióticos e abióticos",
      "Processos de colonização"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Primária ou secundária: o ponto de partida importa",
        "explanation": "Sucessão ecológica é a mudança na composição e nas interações de comunidades ao longo do tempo. A sucessão primária ocorre em substratos sem solo desenvolvido, como uma área recém-exposta por atividade vulcânica. Líquens e microrganismos podem iniciar processos de alteração da rocha e acúmulo de matéria orgânica; novas espécies estabelecem-se quando condições permitem. Não há uma sequência de espécies universal em todos os climas.\n\nNa sucessão secundária, a área já abrigou comunidade e pode conservar solo, sementes e raízes após incêndio ou abandono agrícola. Essa herança biológica tende a tornar certas etapas mais rápidas, mas o resultado depende da intensidade da perturbação, umidade e espécies disponíveis. A distinção essencial é a história do local e o estado inicial do substrato, não simplesmente presença ou ausência de árvores.\n\nA palavra pioneira designa espécies capazes de colonizar determinadas condições, não organismos inferiores. Uma área de campo natural não precisa virar floresta para ser um ecossistema legítimo.",
        "example": "Compare rocha recém-exposta após erupção com pasto abandonado onde solo e sementes permanecem. A rocha exige construção de solo, característica de sucessão primária. Já o pasto pode ser colonizado por espécies remanescentes, caracterizando secundária.",
        "pitfall": "Não classifique automaticamente qualquer terreno com vegetação pequena como primário. A presença de solo e comunidade anterior altera o processo, e campos naturais não são florestas incompletas.",
        "steps": [
          "Reconstitua o histórico do local e verifique se havia solo desenvolvido.",
          "Identifique organismos pioneiros e quais condições tornam a colonização possível.",
          "Compare os fatores que aceleram ou limitam a mudança ecológica."
        ]
      },
      {
        "level": "intermediate",
        "title": "Facilitação, competição e perturbações",
        "explanation": "As espécies de uma comunidade modificam o ambiente que as cerca. Plantas pioneiras podem reduzir erosão, acumular serapilheira e gerar sombra; quando isso facilita a instalação de outras espécies, temos facilitação. Se as primeiras espécies ocupam recursos e dificultam a entrada de outras, ocorre inibição. Alguns organismos toleram condições existentes e se estabelecem independentemente da ação direta de pioneiros.\n\nNuma clareira florestal, espécies dependentes de luz direta podem crescer rapidamente; ao formarem cobertura, espécies tolerantes à sombra ganham oportunidades. Mas em ambientes secos o mesmo sombreamento pode alterar evaporação e competição por água, produzindo efeitos distintos. Os mecanismos variam no tempo e podem atuar simultaneamente. Modelos de sucessão ajudam a interpretar, não funcionam como roteiro infalível.\n\nDistúrbios como enchentes, incêndios e tempestades podem abrir novas clareiras e gerar mosaicos de estágios numa mesma paisagem. Riqueza de espécies e biomassa não crescem monotonicamente em todas as etapas; medidas dependem de escala, duração e história do ecossistema.",
        "example": "Uma clareira recebe luz intensa e é colonizada por plantas heliófilas. Quando elas sombreiam o solo, podem favorecer plântulas tolerantes à sombra. Se raízes densas consumirem água e impedirem novas plantas, entretanto, o efeito passa a incluir inibição.",
        "pitfall": "Não simplifique toda sucessão a capim → arbusto → árvore → floresta. Clima, solos e perturbações permitem trajetórias alternativas e comunidades abertas persistentes.",
        "steps": [
          "Descreva qual recurso ou condição ambiental foi alterado pelas primeiras espécies.",
          "Avalie se a alteração favorece ou impede estabelecimento de outras populações.",
          "Considere perturbações e a possibilidade de múltiplas trajetórias ecológicas."
        ]
      },
      {
        "level": "advanced",
        "title": "Clímax, resiliência e restauração",
        "explanation": "A concepção clássica de clímax descrevia uma comunidade relativamente estável ao final de certa trajetória de sucessão. Hoje se reconhece que ecossistemas são dinâmicos: alterações climáticas, migração, eventos extremos e ação humana podem redirecionar mudanças. Não existe necessariamente uma composição final única para cada área. A estabilidade precisa ser descrita por variáveis e períodos concretos.\n\nResistência refere-se à manutenção de características diante de uma perturbação; resiliência é a capacidade de absorver impacto e reorganizar processos importantes. Uma área pode resistir a seca curta, mas recuperar-se lentamente após grande perda de solo. Mesmo quando árvores voltam a crescer, diversidade, decomposição, infiltração e conexões com outros habitats podem não ter sido restabelecidas.\n\nA restauração ecológica é avaliada por indicadores, não apenas por contagem de mudas plantadas. É necessário acompanhar sobrevivência, regeneração natural, composição de espécies, recuperação do solo e condições hídricas. Comparar duas áreas exige dados de período e método equivalentes.",
        "example": "Em um reflorestamento foram plantadas 800 mudas, mas somente 100 sobreviveram e o solo permaneceu compactado. Em outro, 300 mudas tiveram alta sobrevivência e favoreceram regeneração espontânea. A quantidade inicialmente plantada, isoladamente, não mede recuperação funcional.",
        "pitfall": "Não confunda abundância de árvores com recuperação integral da biodiversidade; tampouco considere clímax um estado imutável. Uma avaliação rigorosa depende de indicadores ecológicos múltiplos.",
        "steps": [
          "Defina critérios observáveis de resistência, resiliência e recuperação.",
          "Compare indicadores em períodos equivalentes e avalie a história de distúrbios.",
          "Evite declarar restauração concluída com base em uma única variável."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Após abandono agrícola, o terreno conserva solo e sementes. Qual sucessão é esperada?",
        "options": [
          "Secundária, pois a área já possuía comunidade e solo.",
          "Primária, pois a lavoura deixou de existir.",
          "Nenhuma, pois a terra já foi utilizada.",
          "Apenas uma sucessão em rocha nua."
        ],
        "correctIndex": 0,
        "hint": "O solo remanescente é a pista decisiva.",
        "solution": "A alternativa A caracteriza sucessão secundária: solo e legados biológicos permanecem de uma ocupação anterior. Sucessão primária exige substrato sem solo formado, e a mudança da comunidade não cessa com o abandono agrícola."
      },
      {
        "level": "intermediate",
        "prompt": "Plantas pioneiras criam sombra que permite o crescimento de outras espécies. Isso exemplifica:",
        "options": [
          "Dissipação de energia trófica.",
          "Facilitação durante a sucessão.",
          "Ausência de interação.",
          "Obrigatória substituição por predadores."
        ],
        "correctIndex": 1,
        "hint": "A primeira espécie tornou mais provável a colonização seguinte.",
        "solution": "A opção B está correta: o sombreamento beneficia espécies que antes não toleravam luz direta. As outras não representam o mecanismo descrito de mudança nas condições ambientais."
      },
      {
        "level": "advanced",
        "prompt": "Uma área reflorestada tem muitas árvores, mas solo degradado e baixa diversidade. Qual conclusão é defensável?",
        "options": [
          "A recuperação ecológica está definitivamente concluída.",
          "A comunidade alcançou estado imutável.",
          "Apenas o número de árvores não comprova restauração funcional.",
          "Toda sucessão terminou pela alta biomassa."
        ],
        "correctIndex": 2,
        "hint": "Considere solo, interações e regeneração além da cobertura.",
        "solution": "A alternativa C é correta: indicadores como solo, diversidade e regeneração devem ser verificados. As demais deduzem estabilidade e restauração de um único parâmetro, o que não é suficiente."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Herança de grupos sanguíneos na espécie humana",
    "objective": "Interpretar alelos Iᴬ, Iᴮ e i, genótipos ABO, codominância, cruzamentos mendelianos e o modelo Rh, diferenciando probabilidade escolar de transfusão clínica.",
    "prerequisites": [
      "Genótipo e fenótipo",
      "Meiose",
      "Probabilidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "ABO: alelos múltiplos e codominância",
        "explanation": "No modelo escolar do sistema ABO existem três alelos principais numa população: Iᴬ, Iᴮ e i. Cada indivíduo diploide herda dois alelos. Iᴬ e Iᴮ são codominantes, podendo ser expressos juntos em pessoas de fenótipo AB. O alelo i é recessivo em relação aos outros dois. Alelos múltiplos, portanto, não significam que cada pessoa possua três cópias do gene.\n\nOs genótipos do fenótipo A são IᴬIᴬ e Iᴬi; do B, IᴮIᴮ e Iᴮi; do AB, IᴬIᴮ; do O, ii. Conhecer apenas o fenótipo A não informa se a pessoa é homozigota ou heterozigota. As letras correspondem a diferenças na expressão de antígenos na superfície das hemácias; exames laboratoriais usam reagentes e testes, não uma estimativa baseada no aspecto do sangue.\n\nPara resolver questões, determine alelos genitores, gametas possíveis e combinações dos descendentes. Não confunda dominante com “mais comum” nem interprete codominância como mistura intermediária dos fenótipos.",
        "example": "Cruzamento Iᴬi × Iᴮi produz quatro combinações com igual probabilidade mendeliana: IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B) e ii (O). A chance teórica é de 25% para cada fenótipo nesse cruzamento particular.",
        "pitfall": "Não confunda quatro fenótipos com quatro alelos. São três variantes principais no modelo e duas por pessoa; Iᴬ e Iᴮ se expressam juntos no fenótipo AB.",
        "steps": [
          "Determine o genótipo possível de cada fenótipo ABO.",
          "Separe os alelos transmitidos em cada tipo de gameta.",
          "Combine gametas e agrupe resultados por fenótipo."
        ]
      },
      {
        "level": "intermediate",
        "title": "Punnett e probabilidades não garantem uma sequência",
        "explanation": "O quadro de Punnett combina gametas possíveis e permite calcular proporções genotípicas esperadas. Para Iᴬi × ii, os gametas do primeiro são Iᴬ ou i, enquanto o segundo só produz i; por isso, metade dos descendentes teoricamente será Iᴬi, tipo A, e metade ii, tipo O. Em IᴬIᴬ × ii, todos os descendentes esperados são Iᴬi, tipo A. Não basta dizer “pais com fenótipo A”: é necessário conhecer seus genótipos.\n\nEm Iᴬi × Iᴬi, as combinações possíveis são IᴬIᴬ, Iᴬi, Iᴬi e ii. A probabilidade genotípica é 25%, 50% e 25%, respectivamente, enquanto a fenotípica é 75% do tipo A e 25% do tipo O. A independência dos eventos em nascimentos diferentes não significa que quatro filhos necessariamente incluirão um tipo O.\n\nEsses modelos ajudam a excluir certas hipóteses em casos simples, mas não determinam paternidade. Variantes raras, problemas técnicos e outros fatores limitam inferências; exames específicos de DNA e acompanhamento profissional são necessários para conclusões clínicas ou familiares.",
        "example": "Dois indivíduos Iᴬi podem ter criança do tipo O, pois ambos podem transmitir i. Multiplique as probabilidades 1/2 × 1/2 = 1/4 = 25%. Uma família com três filhos A ainda pode ter um quarto filho A; os eventos não seguem rodízio obrigatório.",
        "pitfall": "Probabilidade não é promessa de resultado exato em famílias pequenas. Também não se deve usar tipagem ABO isolada para estabelecer identidade genética ou paternidade.",
        "steps": [
          "Liste os gametas possíveis de cada genitor sem combinar alelos dentro do mesmo gameta.",
          "Monte quadro e distinga genótipos de fenótipos.",
          "Relacione a chance calculada às hipóteses do modelo e seu caráter probabilístico."
        ]
      },
      {
        "level": "advanced",
        "title": "Modelo Rh e restrições da compatibilidade clínica",
        "explanation": "O antígeno D do sistema Rh pode estar presente nas hemácias, em caso geralmente denominado Rh positivo, ou ausente, em caso Rh negativo. O ensino básico representa presença do antígeno por alelo D dominante e ausência por d recessivo. Nesse modelo, DD e Dd têm fenótipo positivo; dd é negativo. A genética clínica real envolve várias variantes e a simplificação não explica todas as situações.\n\nPara Dd × Dd, a proporção teórica de genótipos é um DD, dois Dd e um dd, isto é, 25% de Rh negativo. Na gestação, certas incompatibilidades imunológicas podem ser relevantes e são acompanhadas por profissionais. O quadro de Punnett não substitui exames ou protocolos preventivos.\n\nTransfusões exigem compatibilidade entre componente utilizado, antígenos ABO/Rh e outros sistemas eritrocitários, além de testes laboratoriais. A expressão escolar “O negativo, doador universal” é uma aproximação referente a hemácias e não autorização para transfundir sem verificação. Diferencie sempre a pergunta teórica sobre herança de uma decisão médica real.",
        "example": "No modelo Dd × dd, os gametas do primeiro são D ou d, e o segundo só produz d. Metade das combinações é Dd (Rh+) e metade dd (Rh−). Se o enunciado incluir ABO, os sistemas devem ser tratados conforme hipóteses genéticas explicitadas.",
        "pitfall": "Não conclua compatibilidade clínica apenas por cruzamentos teóricos. A tipagem, provas de compatibilidade e possíveis antígenos adicionais são fundamentais para decisão real de transfusão.",
        "steps": [
          "Identifique se o exercício trata de herança Rh simplificada ou de transfusão real.",
          "Resolva cruzamentos D/d quando o modelo for declarado.",
          "Evite extrapolar probabilidades mendelianas para decisões clínicas sem exames."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma pessoa IᴬIᴮ tem qual fenótipo ABO?",
        "options": [
          "A",
          "B",
          "AB",
          "O"
        ],
        "correctIndex": 2,
        "hint": "Os alelos Iᴬ e Iᴮ são codominantes.",
        "solution": "A opção C é correta: Iᴬ e Iᴮ são expressos simultaneamente, produzindo fenótipo AB. As opções A e B ignoram a codominância, enquanto O corresponde ao genótipo ii."
      },
      {
        "level": "intermediate",
        "prompt": "No cruzamento Iᴬi × ii, a chance teórica de filho do tipo O é:",
        "options": [
          "0%",
          "25%",
          "50%",
          "100%"
        ],
        "correctIndex": 2,
        "hint": "O segundo genitor sempre transmite o alelo i.",
        "solution": "A alternativa C está correta: metade dos gametas do primeiro genitor possui i, formando descendentes ii quando combinado ao outro genitor. Portanto, 50% é a probabilidade mendeliana nesse cruzamento."
      },
      {
        "level": "advanced",
        "prompt": "No modelo simplificado do fator Rh, Dd × Dd gera qual probabilidade de descendente Rh negativo?",
        "options": [
          "25%",
          "50%",
          "75%",
          "0%"
        ],
        "correctIndex": 0,
        "hint": "Apenas dd produz fenótipo negativo no modelo escolar.",
        "solution": "A opção A está correta: as quatro combinações são DD, Dd, Dd e dd; somente uma em quatro é Rh negativa. A interpretação clínica, porém, requer testes e não apenas esse modelo."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Cinética química",
    "objective": "Relacionar velocidade, energia de ativação, colisões efetivas, concentração, temperatura, superfície de contato, catalisadores e leis de velocidade experimentais.",
    "prerequisites": [
      "Transformações químicas",
      "Concentração",
      "Temperatura"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Como medir a velocidade de uma reação",
        "explanation": "A cinética química estuda a rapidez das transformações e os fatores que alteram essa rapidez. A combustão de certos combustíveis pode ser rápida enquanto a formação de ferrugem ocorre lentamente; a quantidade de energia liberada pela reação não é a mesma grandeza que sua velocidade. Podemos medir velocidade acompanhando concentração de reagente consumido ou produto formado durante intervalo conhecido.\n\nA teoria das colisões considera que partículas precisam encontrar-se com orientação adequada e energia suficiente para alcançar uma configuração de transição. Nem toda colisão é efetiva. Energia de ativação descreve uma barreira associada à rota reacional e não se confunde com a energia global liberada ou absorvida.\n\nSe um reagente diminui de 0,60 para 0,20 mol/L em vinte segundos, seu desaparecimento médio tem módulo 0,40/20=0,020 mol L⁻¹ s⁻¹. Em reações com coeficientes diferentes, comparar velocidades de espécies exige normalização estequiométrica quando se busca a velocidade da reação como um todo.",
        "example": "Numa solução, [A] passa de 1,00 para 0,70 mol/L em 15 s. A variação é −0,30 mol/L, e o módulo da rapidez média de consumo é 0,30/15 = 0,020 mol L⁻¹ s⁻¹. Isso não prova que a velocidade foi constante.",
        "pitfall": "Não associe reação exotérmica necessariamente à maior velocidade. Uma reação pode liberar energia e ainda ter uma barreira cinética elevada, exigindo condições específicas.",
        "steps": [
          "Identifique a espécie cuja concentração mudou.",
          "Calcule o módulo da variação e divida pelo tempo.",
          "Diferencie velocidade média, energia de ativação e variação de entalpia."
        ]
      },
      {
        "level": "intermediate",
        "title": "Fatores que alteram a frequência de colisões efetivas",
        "explanation": "Em muitos sistemas, elevar a temperatura aumenta a fração de partículas com energia suficiente para superar a barreira de ativação, acelerando reações. Entretanto, o aumento quantitativo depende do mecanismo e não há regra universal segundo a qual dez graus sempre duplicam a velocidade. Concentração, pressão de gases, superfície de sólidos e agitação podem alterar disponibilidade e encontros entre reagentes, mas a força de cada efeito precisa de dados.\n\nA lei de velocidade experimental como v=k[A]²[B] relaciona rapidez a concentrações em condições definidas. Os expoentes são ordens de reação e, em geral, não podem ser simplesmente copiados dos coeficientes da equação global. Se a reação é de segunda ordem em A e dobramos somente [A], a velocidade prevista quadruplica. Se a ordem em A fosse zero, variar sua concentração não alteraria a expressão da velocidade dentro das condições do modelo.\n\nUma superfície maior de sólido pode oferecer mais pontos de reação: um comprimido efervescente pulverizado frequentemente reage mais rapidamente em água que um bloco de mesma massa. Isso não significa maior quantidade final de gás obrigatoriamente, pois quantidade depende da massa disponível e da estequiometria.",
        "example": "Para v=k[A]², mantendo k constante, elevar [A] de 0,10 para 0,20 mol/L produz v₂/v₁=(0,20/0,10)²=4. A velocidade quadruplica. Se o exercício não fornecesse essa lei experimental, não seria possível presumir a ordem dois.",
        "pitfall": "Não copie expoentes diretamente da equação balanceada para a lei de velocidade. Só etapas elementares sob condições específicas permitem certas inferências diretas sobre molecularidade.",
        "steps": [
          "Determine qual variável mudou e quais foram mantidas fixas.",
          "Aplique expoentes da lei de velocidade experimental fornecida.",
          "Diferencie rapidez de transformação e quantidade final de produtos."
        ]
      },
      {
        "level": "advanced",
        "title": "Catalisadores mudam caminhos, não a energia final",
        "explanation": "Um catalisador fornece rota reacional alternativa, muitas vezes de menor energia de ativação, acelerando uma transformação. Ele pode participar de etapas intermediárias e regenerar-se ao final do ciclo catalítico. A diferença de energia entre reagentes e produtos continua determinada pelos estados inicial e final; não se altera apenas porque o caminho mudou.\n\nNuma reação reversível, um catalisador acelera a chegada ao equilíbrio sem alterar a constante de equilíbrio termodinâmica na mesma temperatura. Um gráfico de energia potencial contra coordenada de reação deve mostrar barreira menor para a rota catalisada, com os mesmos níveis inicial e final. Um gráfico de concentração contra tempo representa outra informação, e não se deve chamar sua inclinação de energia de ativação.\n\nA equação de Arrhenius k=Aexp(−Ea/RT) é modelo útil para analisar dependência da constante com temperatura em intervalo especificado. A energia de ativação Ea e a temperatura absoluta T influenciam o fator exponencial, mas resultados numéricos requerem valores e hipóteses coerentes. Não confunda aceleração cinética com deslocamento de equilíbrio.",
        "example": "Num gráfico de energia, reagentes têm 50 kJ e produtos 20 kJ; a variação global é −30 kJ. Se um catalisador reduz a barreira direta de 80 para 40 kJ, o valor −30 kJ permanece. A reação é mais rápida, mas sua entalpia global não mudou.",
        "pitfall": "Não afirme que catalisador torna espontânea qualquer reação em qualquer condição. Ele muda cinética, enquanto espontaneidade e posição de equilíbrio dependem da termodinâmica.",
        "steps": [
          "Compare níveis energéticos inicial e final para calcular variação global.",
          "Identifique o pico de energia da rota reacional e como o catalisador o altera.",
          "Separe energia de ativação, velocidade e constante de equilíbrio."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A concentração de A cai de 0,60 para 0,20 mol/L em 20 segundos. Qual é a rapidez média de consumo?",
        "options": [
          "0,020 mol L⁻¹ s⁻¹",
          "0,040 mol L⁻¹ s⁻¹",
          "0,80 mol L⁻¹ s⁻¹",
          "0,20 mol L⁻¹ s⁻¹"
        ],
        "correctIndex": 0,
        "hint": "Use |Δ[A]|/Δt.",
        "solution": "A opção A está correta: o consumo é 0,40 mol/L dividido por 20 s, produzindo 0,020 mol L⁻¹ s⁻¹. As demais não correspondem à variação medida ou dividem incorretamente o intervalo."
      },
      {
        "level": "intermediate",
        "prompt": "Se v=k[A]² e apenas a concentração de A dobra, a velocidade passa a ser:",
        "options": [
          "Metade.",
          "Igual.",
          "Quatro vezes maior.",
          "Duas vezes maior."
        ],
        "correctIndex": 2,
        "hint": "O expoente dois se aplica à razão de concentrações.",
        "solution": "A alternativa C está correta: dobrar A numa lei de segunda ordem multiplica a velocidade por 2²=4, mantidos k e demais fatores. As outras respostas ignoram a ordem experimental."
      },
      {
        "level": "advanced",
        "prompt": "Qual propriedade um catalisador altera sem modificar a diferença de entalpia global?",
        "options": [
          "A composição do elemento químico.",
          "A energia dos produtos obrigatoriamente.",
          "O valor da constante de equilíbrio em temperatura fixa.",
          "O mecanismo e a barreira de energia de ativação."
        ],
        "correctIndex": 3,
        "hint": "Catalisador atua no percurso, não nos estados energéticos finais.",
        "solution": "A alternativa D é correta: catalisadores permitem vias alternativas de menor barreira, preservando a energia relativa dos reagentes e produtos e a constante de equilíbrio na mesma temperatura."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Reações de oxirredução e números de oxidação",
    "objective": "Determinar números de oxidação, identificar oxidação, redução e agentes, analisar semirreações e reconhecer os papéis de ânodo e cátodo em pilhas.",
    "prerequisites": [
      "Íons",
      "Carga elétrica",
      "Balanceamento de equações"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Nox e transferência de elétrons",
        "explanation": "O número de oxidação, ou nox, é uma atribuição formal de cargas que ajuda a rastrear alterações eletrônicas em reações. Em substâncias simples como Fe(s) e O₂, o nox é zero. Em íons monoatômicos ele coincide com a carga: Na⁺ tem +1 e Cl⁻ tem −1. Em muitos compostos, hidrogênio possui +1 e oxigênio −2, mas existem exceções como hidretos metálicos e peróxidos.\n\nA soma de todos os nox multiplicados pela quantidade de átomos deve igualar a carga total da espécie. Em H₂SO₄, os dois H contribuem +2 e os quatro O contribuem −8; logo S vale +6 para que a molécula seja neutra. O número de oxidação é ferramenta contábil e não significa necessariamente carga elétrica real localizada naquele átomo em ligação covalente.\n\nOxidação corresponde ao aumento de nox; redução, à diminuição. Reações redox envolvem os dois processos de modo associado. É possível identificar oxidação em reações sem participação de oxigênio, contrariando a associação simplista com ferrugem.",
        "example": "Na reação Zn + Cu²⁺ → Zn²⁺ + Cu, Zn vai de 0 a +2 e oxida; Cu²⁺ vai de +2 para zero e reduz. A transferência formal de dois elétrons do zinco para o cobre é compatível com a conservação das cargas dos dois lados.",
        "pitfall": "O oxigênio não possui sempre nox −2; em peróxidos costuma ser −1. Nunca aplique valores memorizados sem considerar a fórmula, carga e possíveis exceções.",
        "steps": [
          "Determine nox de substâncias simples e íons monoatômicos.",
          "Use a soma dos números de oxidação para encontrar valores desconhecidos.",
          "Compare valores antes e depois da reação para identificar os processos."
        ]
      },
      {
        "level": "intermediate",
        "title": "Quem oxida, quem reduz e quem é agente",
        "explanation": "O agente oxidante provoca a oxidação do outro reagente e, portanto, sofre redução. O agente redutor favorece a redução do parceiro e, por isso, sofre oxidação. O nome do agente descreve a transformação que ele causa, não a transformação que recebe: essa distinção é central para resolver questões.\n\nConsidere Mg + 2H⁺ → Mg²⁺ + H₂. O magnésio metálico tem nox zero e termina com +2, perdendo dois elétrons: é agente redutor. Os íons H⁺ passam de +1 a zero em H₂, recebendo esses dois elétrons e atuando como agente oxidante. As semirreações Mg → Mg²⁺ + 2e⁻ e 2H⁺ + 2e⁻ → H₂ explicitam o balanço eletrônico.\n\nUma reação redox deve conservar simultaneamente átomos e carga. Em equações mais complexas, o método das semirreações permite igualar elétrons perdidos e recebidos antes de somar. Identificar um agente apenas porque contém oxigênio pode levar a erro; examine as variações de nox em cada espécie.",
        "example": "Na equação 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu, alumínio libera seis elétrons no total; três íons Cu²⁺ recebem seis elétrons. Logo, Al se oxida e é agente redutor, enquanto Cu²⁺ se reduz e é agente oxidante.",
        "pitfall": "Não confunda agente oxidante com espécie oxidada. Oxidante recebe elétrons e é reduzido; redutor fornece elétrons e é oxidado, considerando o mecanismo de transferência adequado.",
        "steps": [
          "Calcule nox relevantes antes e após a transformação.",
          "Identifique qual espécie aumenta o nox e qual o diminui.",
          "Classifique os agentes pelo efeito que causam no outro reagente."
        ]
      },
      {
        "level": "advanced",
        "title": "Pilha, eletrólise e direção das transferências",
        "explanation": "Em uma pilha galvânica, uma reação redox espontânea pode gerar corrente elétrica ao separar semirreações em eletrodos conectados externamente. No ânodo ocorre oxidação; no cátodo ocorre redução. Numa pilha convencional de Daniell, Zn(s) → Zn²⁺ + 2e⁻ no ânodo e Cu²⁺ + 2e⁻ → Cu(s) no cátodo. Elétrons percorrem o fio externo do Zn ao Cu.\n\nA ponte salina não serve como fio de elétrons: ela permite transporte de íons, ajudando a manter eletroneutralidade das soluções. Sem esse balanço, acumulariam-se cargas que dificultariam a continuidade da reação. Potenciais padrão de redução podem auxiliar previsões sob condições padrão, mas valores experimentais em outras concentrações ou temperaturas exigem consideração adicional.\n\nEm eletrólise, uma fonte externa força transformação não espontânea. Oxidação continua sendo definida pelo ânodo e redução pelo cátodo, mas os sinais dos eletrodos mudam em relação a pilhas galvânicas convencionais. Por isso, memorizar sinais sem reconhecer o tipo de célula é insuficiente.",
        "example": "Numa pilha Zn/Cu, a placa de Zn pode perder massa por formar Zn²⁺ e o cátodo de Cu ganhar massa por deposição de cobre. Os elétrons movem-se pelo fio, enquanto íons migram pelo eletrólito e ponte salina para manter balanço de cargas.",
        "pitfall": "Em pilhas e eletrólise, ânodo é local de oxidação independentemente do sinal elétrico. Também não confunda fluxo eletrônico no circuito metálico com movimento de íons na solução.",
        "steps": [
          "Separe semirreações e identifique onde ocorrem oxidação e redução.",
          "Trace caminho dos elétrons no circuito e dos íons nas soluções.",
          "Determine se a célula é galvânica ou eletrolítica antes de atribuir sinais."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é o nox do enxofre em H₂SO₄, considerando H=+1 e O=−2?",
        "options": [
          "+4",
          "+6",
          "−2",
          "0"
        ],
        "correctIndex": 1,
        "hint": "A soma dos valores na molécula neutra deve ser zero.",
        "solution": "A opção B está correta: 2(+1)+S+4(−2)=0, então S=+6. As demais escolhas não satisfazem a soma formal de cargas para essa molécula."
      },
      {
        "level": "intermediate",
        "prompt": "Na reação Mg + 2H⁺ → Mg²⁺ + H₂, qual espécie é o agente redutor?",
        "options": [
          "H₂",
          "H⁺",
          "Mg",
          "Mg²⁺"
        ],
        "correctIndex": 2,
        "hint": "Agente redutor perde elétrons e se oxida.",
        "solution": "A opção C está correta: Mg vai de nox zero a +2, fornecendo elétrons que permitem reduzir H⁺ a H₂. H⁺ é o agente oxidante, e não o redutor."
      },
      {
        "level": "advanced",
        "prompt": "Em uma pilha galvânica Zn/Cu, em qual eletrodo ocorre oxidação?",
        "options": [
          "No ânodo, constituído pelo Zn no modelo Daniell.",
          "No cátodo, constituído pelo Cu.",
          "Na ponte salina, por onde passam elétrons.",
          "Em ambos os eletrodos, sem redução."
        ],
        "correctIndex": 0,
        "hint": "Ânodo é onde ocorre oxidação por definição.",
        "solution": "A alternativa A está correta: Zn se oxida no ânodo e fornece elétrons ao circuito; Cu²⁺ é reduzido no cátodo. Ponte salina conduz íons e não é o local de passagem de elétrons do fio."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Comprimento de onda, período e frequência",
    "objective": "Distinguir período, frequência, comprimento de onda, amplitude e velocidade, calcular v=λf e interpretar mudanças ao passar por meios diferentes.",
    "prerequisites": [
      "Unidades de tempo e espaço",
      "Razões",
      "Movimentos periódicos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Como medir características de uma onda",
        "explanation": "Ondas são perturbações que propagam energia sem transporte líquido contínuo de matéria ao longo de todo o percurso. Ondas mecânicas precisam de meio material; ondas eletromagnéticas podem propagar-se no vácuo. Para descrever uma onda periódica, usamos amplitude, período, frequência, comprimento de onda e velocidade de propagação. Essas grandezas não são sinônimas.\n\nPeríodo T é o tempo entre duas oscilações equivalentes; frequência f é a quantidade de oscilações por segundo, em hertz. A relação é f=1/T. Comprimento de onda λ mede distância entre pontos equivalentes consecutivos de um padrão espacial, como cristas sucessivas. Se o gráfico usa tempo no eixo horizontal, a distância entre cristas informa T, não λ.\n\nAmplitude representa afastamento máximo de uma grandeza oscilante em relação ao equilíbrio. Em muitos sistemas relaciona-se à energia transportada, mas não determina sozinha a frequência. Compare sempre unidades: segundos para período, hertz para frequência, metros para comprimento de onda e m/s para velocidade.",
        "example": "Uma boia oscila cinco vezes em dez segundos; T=10/5=2 s e f=5/10=0,5 Hz. Se duas cristas consecutivas no espaço estão separadas de 3 m, então λ=3 m. Com dados espaciais e temporais já é possível calcular v.",
        "pitfall": "Não leia distância entre cristas de um gráfico temporal como comprimento de onda. Confira os eixos: tempo permite obter período; posição espacial permite obter comprimento de onda.",
        "steps": [
          "Identifique se o fenômeno é mecânico ou eletromagnético.",
          "Leia os eixos e determine período ou distância entre cristas corretamente.",
          "Converta frequência e período usando f=1/T."
        ]
      },
      {
        "level": "intermediate",
        "title": "A relação v = λf e as unidades",
        "explanation": "Uma crista de onda percorre um comprimento de onda λ durante um período T. Isso resulta em v=λ/T=λf. A relação de unidades confirma o cálculo: metro vezes s⁻¹ resulta em metro por segundo. Uma onda numa corda com comprimento de onda de 0,80 m e frequência 5 Hz propaga-se a 4 m/s sob as condições do problema.\n\nSe a fonte dobrar a frequência e a velocidade no meio permanecer constante, o comprimento de onda cai à metade. Por exemplo, a uma velocidade de 4 m/s, f=10 Hz dá λ=0,40 m. Em exercícios sobre som, a velocidade depende das condições do meio, como sua composição e temperatura; usar um valor universal em qualquer situação pode produzir erro.\n\nA velocidade de propagação da onda não é necessariamente a velocidade com que cada partícula material oscila. Numa corda, os pontos podem mover-se transversalmente enquanto a perturbação avança ao longo dela. Essa distinção evita interpretações equivocadas de gráficos e animações.",
        "example": "Uma onda sonora de frequência 440 Hz propaga-se com velocidade aproximada de 340 m/s no meio informado. A relação λ=340/440 fornece cerca de 0,773 m. Se a velocidade mudar, o comprimento de onda muda para a mesma frequência.",
        "pitfall": "A relação v=λf não autoriza concluir que maior frequência implica maior velocidade: em muitos meios a velocidade é determinada por propriedades do meio, e o comprimento de onda se ajusta.",
        "steps": [
          "Identifique v, λ e f em unidades coerentes.",
          "Isole a grandeza requerida e substitua valores.",
          "Verifique se a velocidade é fixa ou foi alterada por mudança do meio."
        ]
      },
      {
        "level": "advanced",
        "title": "Mudança de meio, superposição e limites do modelo",
        "explanation": "Ao atingir uma interface entre meios, uma onda pode ser refletida e transmitida. Para uma interface estacionária usual, a frequência transmitida permanece determinada pela fonte; a velocidade pode mudar e com ela o comprimento de onda. Se f=10 Hz e v cai de 4 para 2 m/s, λ passa de 0,40 para 0,20 m, mas o período continua 0,10 s.\n\nO princípio de superposição descreve, em regime linear adequado, a soma dos deslocamentos causados por ondas sobrepostas. Interferência construtiva e destrutiva dependem de fase e amplitude. Ondas estacionárias ocorrem em condições específicas de superposição e contorno. Não é correto dizer que toda sobreposição sempre aumenta amplitude ou que toda onda de grande amplitude tem frequência elevada.\n\nNa propagação eletromagnética, a velocidade no vácuo é aproximadamente 3,0×10⁸ m/s. Em materiais pode haver dispersão, absorção e atenuação; frequência, fase e comprimento exigem interpretação conforme o modelo. Uma amplitude decrescente não prova diminuição de frequência.",
        "example": "Uma onda com frequência de 4 Hz passa de meio A com velocidade 12 m/s para B com 8 m/s. Os comprimentos são 3 m e 2 m, respectivamente; o período continua 0,25 s. Assim, menor comprimento de onda não significa maior frequência nesta situação.",
        "pitfall": "Não confunda frequência com comprimento de onda quando velocidade muda. Em interfaces comuns a frequência permanece, enquanto λ se altera; em meios dispersivos é preciso considerar condições mais detalhadas.",
        "steps": [
          "Determine quais grandezas são impostas pela fonte e quais dependem do meio.",
          "Calcule λ=v/f separadamente em cada meio.",
          "Distingua mudanças de amplitude, fase e velocidade de mudanças de frequência."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma onda tem período de 0,25 s. Qual sua frequência?",
        "options": [
          "0,25 Hz",
          "2 Hz",
          "4 Hz",
          "25 Hz"
        ],
        "correctIndex": 2,
        "hint": "Frequência é o inverso do período.",
        "solution": "A alternativa C está correta: f=1/0,25=4 Hz. A confunde frequência com período e as outras opções não realizam a inversão corretamente."
      },
      {
        "level": "intermediate",
        "prompt": "Uma onda com λ=1,5 m e f=8 Hz possui velocidade:",
        "options": [
          "12 m/s",
          "5,33 m/s",
          "9,5 m/s",
          "0,1875 m/s"
        ],
        "correctIndex": 0,
        "hint": "Use v=λf.",
        "solution": "A alternativa A está correta: v=1,5×8=12 m/s. As demais realizam combinações matemáticas que não correspondem à equação fundamental da ondulatória."
      },
      {
        "level": "advanced",
        "prompt": "Uma onda passa a meio em que a velocidade é metade, sem alterar frequência. O comprimento de onda:",
        "options": [
          "Dobra.",
          "Não muda.",
          "Fica nulo.",
          "Cai à metade."
        ],
        "correctIndex": 3,
        "hint": "λ=v/f com frequência fixa.",
        "solution": "A alternativa D é correta: com f constante, λ varia proporcionalmente à velocidade. Uma redução de 50% em v produz redução de 50% em λ, sem alterar o período temporal."
      }
    ]
  }
];
