import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Batch 1: individually authored disciplinary teaching with explicit A–D distractors. */
export const provaoDepthScienceAndHistory:readonly DeepTopicSpec[]=[
  {
    "subject": "Biologia",
    "topicStart": "Pirâmides ecológicas",
    "objective": "Interpretar e comparar pirâmides de energia, biomassa e números; justificar por que seus formatos podem diferir; aplicar eficiência de transferência e reconhecer limites de inferências sobre teias alimentares.",
    "prerequisites": [
      "Produtores, consumidores e decompositores",
      "Cadeias e teias alimentares",
      "Unidades de energia e massa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Três maneiras de representar uma cadeia alimentar",
        "explanation": "Uma pirâmide ecológica é um gráfico por níveis tróficos. O nível dos produtores costuma ficar na base; os consumidores primários vêm acima e os secundários, em seguida. A largura de cada faixa depende da grandeza representada. Por isso, antes de interpretar o desenho, descubra o que está no eixo: número de indivíduos, biomassa ou energia por unidade de tempo. Uma figura alta e estreita não informa, sozinha, que há poucos animais nem que o ecossistema está ameaçado.\n\nA pirâmide de números registra quantos organismos pertencem a cada nível numa área estudada. Uma única árvore pode sustentar centenas de insetos; nesse caso, a faixa dos produtores pode ser menor que a dos consumidores primários. Isso não significa que insetos tenham mais energia do que a árvore, pois contar indivíduos não equivale a medir sua massa ou sua energia.\n\nA pirâmide de biomassa representa a massa de material biológico por área ou volume, geralmente massa seca. Em campos e florestas, produtores costumam acumular mais biomassa do que consumidores. Mas em parte dos sistemas aquáticos o fitoplâncton se reproduz e é consumido rapidamente: uma pequena biomassa instantânea de produtores pode sustentar um estoque maior de consumidores. É necessário distinguir estoque no instante medido de produção ao longo de um período.",
        "example": "Imagine uma árvore com 500 lagartas. Uma pirâmide de números pode apresentar um único produtor na base e 500 consumidores primários acima. Se as lagartas forem predadas por 20 aves, os níveis teriam 1, 500 e 20 indivíduos. Seria incorreto desenhar as mesmas proporções para biomassa ou energia sem medições adicionais.",
        "pitfall": "Não conclua que qualquer pirâmide invertida viola a conservação de energia. O formato invertido pode ocorrer em números ou biomassa instantânea; são grandezas distintas da energia transferida por tempo.",
        "steps": [
          "Identifique produtores e consumidores e desenhe os níveis na ordem trófica.",
          "Leia a unidade do gráfico: indivíduos, g/m² ou kJ/m²/ano.",
          "Considere se a medição é um estoque momentâneo ou um fluxo durante um intervalo."
        ]
      },
      {
        "level": "intermediate",
        "title": "Energia flui e diminui entre níveis tróficos",
        "explanation": "A produção primária transforma energia externa em energia química incorporada à matéria orgânica. Ao longo de uma cadeia, parte da energia assimilada é usada no metabolismo e dissipada como calor; outra parte não é consumida ou não é assimilada. Por isso, a transferência de energia para o próximo nível é menor do que a entrada do nível anterior. A pirâmide de energia, quando corretamente expressa como fluxo por área e tempo, tem a base mais larga do que os níveis superiores.\n\nO valor de 10% frequentemente usado em exercícios é uma simplificação didática. A eficiência ecológica varia com dieta, metabolismo, ambiente, período e definição de energia contabilizada. Nunca aplique 10% automaticamente quando o enunciado fornecer taxas diferentes. E não confunda esse fluxo energético com os ciclos da matéria: carbono, água e outros elementos podem circular; energia precisa de aporte contínuo para sustentar processos.\n\nPara resolver um problema numérico, anote a energia inicial e multiplique sucessivamente pela fração informada. Se os produtores disponibilizam 8.000 kJ/m²/ano e a eficiência indicada entre cada nível é 15%, os consumidores primários receberiam 1.200 kJ/m²/ano; os secundários receberiam 180 kJ/m²/ano. A unidade permanece porque estamos calculando o fluxo disponível em cada nível no mesmo período.",
        "example": "Em um exercício, a cadeia capim → gafanhoto → sapo tem 6.000 kJ/m²/ano disponíveis nos produtores, com eficiência de 12% em cada transferência. Para o gafanhoto: 6.000 × 0,12 = 720 kJ/m²/ano. Para o sapo: 720 × 0,12 = 86,4 kJ/m²/ano. Multiplicar uma única vez e responder 720 para o sapo ignora a segunda transferência.",
        "pitfall": "Não interprete a largura de uma pirâmide de energia como quantidade de indivíduos. Cada faixa representa energia disponível ou transferida numa unidade e período definidos, e não o tamanho da população.",
        "steps": [
          "Registre a grandeza e a eficiência indicada pelo exercício.",
          "Converta porcentagens para frações antes de calcular cada transferência.",
          "Multiplique em sequência e confira a unidade do fluxo em todos os níveis."
        ]
      },
      {
        "level": "advanced",
        "title": "Biomassa, produção e limitações dos modelos",
        "explanation": "Uma pirâmide de biomassa retrata o estoque de matéria viva num determinado instante, enquanto a produtividade informa a taxa de formação de biomassa ou fixação energética. A distinção explica a aparente inversão observada em algumas cadeias aquáticas: o fitoplâncton pode ter renovação rápida mesmo apresentando biomassa pequena numa amostragem. A relação entre biomassa e produtividade depende da taxa de crescimento e do tempo de permanência dos organismos no sistema.\n\nA produtividade primária bruta (PPB) corresponde à energia química fixada pelos produtores. Uma parte é consumida na respiração dos próprios produtores; o restante é a produtividade primária líquida: PPL = PPB − respiração. A PPL não equivale automaticamente à energia assimilada pelos herbívoros. Uma fração pode ser armazenada, ficar indisponível, morrer e entrar na cadeia dos detritos.\n\nPara examinar dados reais, confira se a pirâmide considera massa seca, massa úmida, calorias ou contagem de indivíduos, além da área e da duração da coleta. Teias alimentares são ainda mais complexas do que cadeias: um predador pode comer organismos de níveis diferentes. Por isso, pirâmides didáticas simplificam fluxos e não bastam, isoladamente, para prever a evolução de todas as populações de um ecossistema.",
        "example": "Dois lagos apresentam fitoplâncton com biomassa instantânea de 20 g/m². No lago A, o estoque se renova em um dia; no lago B, a renovação leva dez dias. Apesar de igual biomassa medida, a produção ao longo de vários dias pode ser muito diferente. Não é possível deduzir a produtividade apenas pela largura da faixa.",
        "pitfall": "Confundir PPL com PPB superestima o que resta após a respiração. Confundir estoque de biomassa com taxa de produção leva a interpretações incorretas de ecossistemas aquáticos.",
        "steps": [
          "Determine se o dado representa estoque ou taxa; observe o intervalo da medição.",
          "Se houver PPB e respiração, calcule PPL antes de discutir energia potencialmente disponível.",
          "Identifique o que o modelo não informa sobre detritos, dieta alternativa e variações ambientais."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma única árvore sustenta 300 insetos herbívoros. Qual afirmação descreve corretamente a pirâmide de números?",
        "options": [
          "Ela pode ter base com um indivíduo e faixa superior com 300 indivíduos.",
          "Ela precisa ter base de energia menor que a dos consumidores.",
          "Ela mede obrigatoriamente biomassa em quilogramas.",
          "Ela prova que a árvore fornece menos energia do que os insetos."
        ],
        "correctIndex": 0,
        "hint": "Número de indivíduos não é o mesmo que energia ou biomassa.",
        "solution": "A alternativa A está correta: um único produtor pode sustentar muitos consumidores em termos de contagem. A alternativa B mistura números com energia; C troca a unidade; D infere energia sem medi-la. Pirâmides de números podem ser invertidas."
      },
      {
        "level": "intermediate",
        "prompt": "Produtores disponibilizam 4.000 kJ/m²/ano. Se cada transferência tem eficiência hipotética de 20%, quanta energia chega aos consumidores secundários?",
        "options": [
          "800 kJ/m²/ano",
          "160 kJ/m²/ano",
          "4.000 kJ/m²/ano",
          "32 kJ/m²/ano"
        ],
        "correctIndex": 1,
        "hint": "Há duas transferências: produtores → primários → secundários.",
        "solution": "A alternativa B está correta: 4.000 × 0,20 = 800 para consumidores primários; 800 × 0,20 = 160 para secundários. A alternativa A considera apenas um passo; C ignora perdas; D aplica uma transferência extra."
      },
      {
        "level": "advanced",
        "prompt": "Por que a pirâmide de biomassa de um sistema aquático pode apresentar produtores com estoque menor do que os consumidores?",
        "options": [
          "Porque a energia é criada pelos consumidores.",
          "Porque a produtividade dos produtores é necessariamente nula.",
          "Porque produtores de renovação rápida podem ter pouca biomassa instantânea.",
          "Porque os consumidores sempre realizam fotossíntese."
        ],
        "correctIndex": 2,
        "hint": "Diferencie estoque medido em um instante de taxa de renovação.",
        "solution": "A alternativa C está correta: o fitoplâncton pode produzir continuamente e ser consumido rapidamente, mantendo estoque pequeno. As demais negam o fluxo de energia ou atribuem processos incorretos aos consumidores. Biomassa instantânea não mede diretamente produtividade."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Equações químicas e balanceamento",
    "objective": "Representar reagentes e produtos, interpretar coeficientes estequiométricos, balancear reações por conservação dos átomos e relacionar proporções molares sem alterar índices de fórmulas.",
    "prerequisites": [
      "Símbolos químicos",
      "Diferença entre elemento, átomo e molécula",
      "Contagem simples e proporções"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "A equação representa a conservação dos átomos",
        "explanation": "Uma transformação química reorganiza átomos: ligações podem ser rompidas e formadas, mas a contagem de átomos de cada elemento se conserva numa reação química usual em sistema fechado. Na equação, reagentes aparecem à esquerda da seta e produtos à direita. A seta indica a transformação, não é sinal de igualdade matemática entre substâncias. Símbolos como (s), (l), (g) e (aq) indicam estados físicos ou solução aquosa quando relevantes.\n\nO número pequeno à direita de um símbolo na fórmula é o índice: H₂O possui dois átomos de hidrogênio e um de oxigênio por molécula. Já o número antes da fórmula é o coeficiente: 2 H₂O representa duas moléculas ou duas unidades de quantidade de matéria dessa espécie, somando quatro átomos de H e dois de O. Alterar um índice muda a substância; alterar coeficiente muda a quantidade representada.\n\nPara balancear, conte separadamente átomos de cada elemento nos dois lados e ajuste apenas coeficientes inteiros positivos. Não é preciso igualar a quantidade de moléculas; o que precisa coincidir é a quantidade de átomos de cada elemento. Uma equação ajustada representa proporções, não garante por si só que uma reação ocorra em qualquer temperatura.",
        "example": "Na reação H₂ + O₂ → H₂O, o reagente tem dois átomos de oxigênio na molécula O₂, enquanto o produto tem apenas um em cada H₂O. Ajuste 2 H₂O para obter dois átomos de oxigênio nos produtos; agora há quatro H à direita, então ajuste 2 H₂ à esquerda. Resultado: 2 H₂ + O₂ → 2 H₂O.",
        "pitfall": "Não substitua H₂O por H₂O₂ para equilibrar oxigênio. H₂O₂ é peróxido de hidrogênio, outra substância. Só os coeficientes são modificados no balanceamento.",
        "steps": [
          "Escreva corretamente as fórmulas dos reagentes e produtos, sem mudar índices.",
          "Conte os átomos de cada elemento dos dois lados.",
          "Ajuste coeficientes e reconte até obter conservação completa."
        ]
      },
      {
        "level": "intermediate",
        "title": "Balanceamento por inspeção e proporções",
        "explanation": "O método por tentativa organizada começa pelos elementos que aparecem em menos espécies. Quando um grupo de átomos permanece intacto nos dois lados, pode ser útil tratá-lo temporariamente como bloco; ao final, a contagem deve ser feita por elemento. Oxigênio e hidrogênio, que frequentemente aparecem em vários compostos, costumam ficar para o fim, mas isso é uma estratégia, não uma lei.\n\nConsidere a combustão completa do etanol: C₂H₆O + O₂ → CO₂ + H₂O. Primeiro, dois átomos de carbono exigem 2 CO₂. Os seis hidrogênios exigem 3 H₂O. Os produtos somam 4 + 3 = 7 átomos de oxigênio; o próprio etanol já fornece um, então faltam seis, correspondentes a 3 O₂. A equação fica C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O. A verificação final encontra C=2, H=6 e O=7 em ambos os lados.\n\nOs coeficientes representam relações entre quantidades em mol. Na combustão acima, um mol de etanol reage, em condições de reação completa, com três mols de oxigênio e forma dois mols de dióxido de carbono e três mols de água. Essas proporções não são automaticamente massas iguais, porque massas molares diferem.",
        "example": "Para a reação Fe + O₂ → Fe₂O₃, escolha inicialmente 2 Fe₂O₃, produzindo quatro Fe e seis átomos de O. Assim, use 4 Fe e 3 O₂ nos reagentes. Resultado: 4 Fe + 3 O₂ → 2 Fe₂O₃. Conte: Fe=4 dos dois lados; O=6 dos dois lados. Reescrever Fe₂O₃ como FeO estaria errado.",
        "pitfall": "Uma equação balanceada não exige mesmo número de moléculas: na reação do óxido de ferro, sete unidades reagentes tornam-se duas unidades produto. A conservação se dá elemento por elemento.",
        "steps": [
          "Balanceie primeiro elementos presentes em poucas fórmulas.",
          "Se houver grupos ou coeficientes fracionários, simplifique para os menores inteiros quando possível.",
          "Faça a verificação final por elemento; só depois interprete relações em mol."
        ]
      },
      {
        "level": "advanced",
        "title": "Estequiometria e alcance da representação",
        "explanation": "A equação balanceada fornece razões molares que permitem prever quantidades teóricas de produtos. O procedimento deve começar pela conversão de massas em mol, usando n = m/M, onde m é a massa da amostra e M a massa molar. Depois se aplica a relação entre coeficientes e, quando solicitado, converte-se novamente para massa com m = n×M. Esse raciocínio pressupõe que o reagente necessário esteja disponível, que a reação siga a equação adotada e que a conversão considerada seja completa.\n\nSe houver dois reagentes com quantidades conhecidas, compare quanto cada um permitiria produzir; o menor potencial de produto identifica o reagente limitante. Excesso de reagente não significa massa perdida: é parte que não reage na proporção ideal. Rendimento real pode ser menor que o teórico por reação incompleta, reações paralelas e perdas operacionais; isso precisa ser informado, não presumido pela equação.\n\nEstados físicos, condições experimentais e espécies químicas importam. A equação, sozinha, não explica mecanismo, rapidez nem espontaneidade; tampouco mostra necessariamente o papel do catalisador ou as etapas intermediárias. Em provas, confira se pedem balanceamento, proporção de mol, excesso, rendimento ou massa conservada. Uma resposta numérica sem unidade e sem hipótese pode estar correta na conta e errada na interpretação.",
        "example": "Na reação N₂ + 3 H₂ → 2 NH₃, suponha 2 mol de N₂ e 3 mol de H₂. Os 3 mol de H₂ bastam para reagir com apenas 1 mol de N₂, produzindo teoricamente 2 mol de NH₃ e deixando 1 mol de N₂ em excesso. Não é correto calcular 4 mol de NH₃ apenas porque havia 2 mol de N₂ inicialmente.",
        "pitfall": "Não confunda reagente limitante com o que tem menor massa ou menor quantidade de mol isoladamente: compare cada quantidade com o coeficiente estequiométrico.",
        "steps": [
          "Converta massas em mol e interprete os coeficientes como proporções molares.",
          "Para reagentes múltiplos, verifique o limitante comparando as possibilidades de produto.",
          "Apresente resultado teórico, unidade e hipóteses de conversão e rendimento."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é o balanceamento correto para H₂ + O₂ → H₂O?",
        "options": [
          "H₂ + O₂ → H₂O₂",
          "2 H₂ + O₂ → 2 H₂O",
          "H₂ + 2 O₂ → 2 H₂O",
          "2 H₂ + 2 O₂ → H₂O"
        ],
        "correctIndex": 1,
        "hint": "Conserve H e O sem alterar os índices de cada substância.",
        "solution": "A alternativa B conserva quatro átomos de H e dois de O em cada lado. A muda a substância produzida; C apresenta H insuficiente; D deixa excesso de oxigênio nos reagentes. Nunca modifique índices para balancear."
      },
      {
        "level": "intermediate",
        "prompt": "Quais coeficientes inteiros mínimos balanceiam Fe + O₂ → Fe₂O₃, nessa ordem?",
        "options": [
          "2, 3, 1",
          "4, 3, 2",
          "3, 4, 2",
          "4, 2, 3"
        ],
        "correctIndex": 1,
        "hint": "Encontre um múltiplo comum de dois oxigênios em O₂ e três em Fe₂O₃.",
        "solution": "A resposta B corresponde a 4 Fe + 3 O₂ → 2 Fe₂O₃. Ela apresenta quatro átomos de ferro e seis de oxigênio nos dois lados. As outras combinações não conservam simultaneamente ambos os elementos."
      },
      {
        "level": "advanced",
        "prompt": "Na reação N₂ + 3 H₂ → 2 NH₃, há 2 mol de N₂ e 3 mol de H₂. Qual produção teórica de NH₃ é possível?",
        "options": [
          "2 mol; H₂ é limitante.",
          "4 mol; N₂ é limitante.",
          "3 mol; todos os reagentes são consumidos.",
          "1 mol; N₂ é limitante."
        ],
        "correctIndex": 0,
        "hint": "Três mols de H₂ reagem com um mol de N₂ e formam dois mols de NH₃.",
        "solution": "A alternativa A está correta: H₂ é o reagente limitante, pois 3 mol de H₂ permitem reação de apenas 1 mol de N₂, gerando 2 mol de NH₃. Os 1 mol adicionais de N₂ ficam em excesso. A alternativa B ignora o limitante."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Escalas termométricas. As escalas Celsius",
    "objective": "Distinguir temperatura e calor, converter valores e intervalos entre Celsius, Fahrenheit e Kelvin, interpretar a origem dos pontos de referência e evitar confusões em variações térmicas.",
    "prerequisites": [
      "Proporcionalidade direta",
      "Equações lineares",
      "Diferença entre grandeza física e unidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Temperatura não é o mesmo que calor",
        "explanation": "Temperatura é uma grandeza que caracteriza o estado térmico de um sistema e determina o sentido espontâneo da transferência de energia por calor entre corpos em contato térmico. Calor é energia transferida em razão de uma diferença de temperatura; não é uma substância armazenada no corpo. Dois corpos podem ter temperaturas iguais e energias internas diferentes porque possuem massas e composições distintas.\n\nA escala Celsius é usual no cotidiano brasileiro. A escala Kelvin, unidade do Sistema Internacional, tem zero no limite denominado zero absoluto. Para diferenças termométricas comuns, T(K) = t(°C) + 273,15; a variação de 1 K equivale à variação de 1 °C, embora as temperaturas absolutas tenham origens diferentes. Kelvin não recebe símbolo de grau. Uma temperatura de 0 °C corresponde a 273,15 K; isso não significa ausência de energia interna.\n\nA escala Fahrenheit é utilizada em alguns países. No intervalo entre os pontos tradicionais de fusão do gelo e ebulição da água sob pressão atmosférica padrão, 0 °C corresponde a 32 °F e 100 °C corresponde a 212 °F. Como a diferença é 180 divisões Fahrenheit contra 100 divisões Celsius, o fator de conversão para variações é 9/5.",
        "example": "Um termômetro marca 25 °C. Em Kelvin, 25 + 273,15 = 298,15 K. Para uma variação de 10 °C, a variação é 10 K, não 283,15 K; somar 273,15 serve para converter uma temperatura absoluta, não a diferença entre medições.",
        "pitfall": "Evite dizer que um corpo possui muito calor. Ele possui energia interna e temperatura; calor designa energia em trânsito pela diferença de temperatura entre sistemas.",
        "steps": [
          "Identifique se o dado é temperatura medida ou variação de temperatura.",
          "Escolha a escala de destino e escreva a relação entre as unidades.",
          "Aplique o deslocamento de origem apenas em conversões absolutas, não em diferenças."
        ]
      },
      {
        "level": "intermediate",
        "title": "A transformação entre Celsius e Fahrenheit",
        "explanation": "Uma conversão entre escalas lineares pode ser obtida comparando dois pontos conhecidos. Para Celsius e Fahrenheit, os pontos são (0 °C, 32 °F) e (100 °C, 212 °F). A razão entre variações é (212−32)/(100−0) = 180/100 = 9/5. Assim, F = (9/5)C + 32. A inversa é C = (5/9)(F−32). Como a escala Fahrenheit tem outra origem, multiplicar apenas por 9/5 não converte valores absolutos corretamente.\n\nO procedimento fica mais claro com um exemplo: para converter 20 °C, multiplique 20 por 1,8, obtendo 36, e some 32, chegando a 68 °F. Na volta, subtraia 32 de 68, obtendo 36, e multiplique por 5/9, retornando a 20 °C. Essa verificação cruzada reduz erros com sinais. Em °C = −40 e °F = −40 as escalas coincidem numericamente, mas essa igualdade é uma consequência algébrica da função, não uma regra geral.\n\nProblemas que envolvem aquecimento exigem cuidado: subir de 20 °C para 30 °C é aumentar 10 °C ou 10 K, equivalente a 18 °F de diferença. Se o exercício pergunta a temperatura final em °F, converta os 30 °C para 86 °F; se pergunta somente a variação, o resultado é 18 °F de aumento.",
        "example": "Uma cidade registra 95 °F. Calcule C = (5/9)×(95−32) = (5/9)×63 = 35 °C. Para conferir, F = (9/5)×35 + 32 = 63 + 32 = 95 °F. Ignorar a subtração de 32 levaria a aproximadamente 52,8 °C, um erro evidente.",
        "pitfall": "Diferença de temperatura e temperatura final não são a mesma pergunta. O termo +32 aparece na conversão de medidas, mas desaparece no cálculo da variação entre dois instantes.",
        "steps": [
          "Anote F = 1,8 C + 32 e isole a variável solicitada.",
          "Para Fahrenheit → Celsius, subtraia 32 antes de multiplicar por 5/9.",
          "Verifique o resultado voltando à unidade original e distinga valores de diferenças."
        ]
      },
      {
        "level": "advanced",
        "title": "Kelvin, intervalos e interpretação física",
        "explanation": "O kelvin é uma escala termodinâmica cujo zero é associado ao limite inferior da temperatura absoluta. O deslocamento em relação ao Celsius é exato na definição moderna: T/K = t/°C + 273,15. Temperaturas negativas em Celsius podem ser positivas em kelvin; por exemplo, −10 °C é 263,15 K. Valores negativos em kelvin não descrevem temperaturas termodinâmicas ordinárias de sistemas em equilíbrio na escala usual estudada no ensino médio.\n\nQuando um problema traz temperatura inicial e final, faça as contas distinguindo temperatura absoluta e variação. Um aquecimento de 250 K até 280 K significa aumento de 30 K, que corresponde a aumento de 30 °C e de 54 °F. Isso não exige calcular dois valores Fahrenheit absolutos, embora seja possível. Ao converter valores para fórmulas como a lei dos gases ideais, deve-se utilizar a temperatura absoluta em kelvin, não o número em Celsius.\n\nO comportamento térmico de uma substância não pode ser descrito apenas pelo número da temperatura. Transferência de energia também depende da capacidade térmica, da massa, do estado físico e de possíveis mudanças de fase. Medir 100 °C não significa necessariamente que qualquer líquido ferva: a temperatura de ebulição depende da substância e da pressão externa. A Física conecta equações, hipóteses e fenômeno observado.",
        "example": "Uma amostra sobe de 15 °C para 45 °C. Inicialmente, T = 288,15 K; ao final, 318,15 K. A variação é 30 K. Em Fahrenheit, ΔF = (9/5)×30 = 54 °F. Já a temperatura final é (9/5)×45 + 32 = 113 °F. Compare: 54 °F é aumento, 113 °F é leitura final.",
        "pitfall": "Inserir graus Celsius em uma equação de gases que usa T absoluta pode invalidar o resultado. Temperatura, intervalo e pressão são grandezas com papel e unidades distintos.",
        "steps": [
          "Antes de substituir em fórmulas físicas, verifique se elas exigem temperatura absoluta.",
          "Para intervalos, aplique ΔK=Δ°C e Δ°F=(9/5)Δ°C, sem deslocamentos.",
          "Teste a interpretação física: estado da matéria, pressão, trocas de calor e limites do modelo."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual temperatura em kelvin corresponde a 27 °C?",
        "options": [
          "27 K",
          "246,15 K",
          "300,15 K",
          "327,15 K"
        ],
        "correctIndex": 2,
        "hint": "Para uma medida absoluta, some 273,15 à temperatura Celsius.",
        "solution": "A alternativa C está correta: 27 + 273,15 = 300,15 K. A não transforma a escala; B subtrai o deslocamento; D usa um deslocamento inadequado. Kelvin deve ser indicado sem o símbolo °."
      },
      {
        "level": "intermediate",
        "prompt": "Quanto vale 86 °F em graus Celsius?",
        "options": [
          "20 °C",
          "30 °C",
          "54 °C",
          "47,8 °C"
        ],
        "correctIndex": 1,
        "hint": "Calcule (86−32)×5/9.",
        "solution": "A alternativa B corresponde a (86−32)×5/9 = 54×5/9 = 30 °C. A ignora parte da conversão; C esquece o fator 5/9; D multiplica a leitura Fahrenheit diretamente por 5/9."
      },
      {
        "level": "advanced",
        "prompt": "Um corpo passa de 20 °C para 35 °C. Qual é a variação em Fahrenheit?",
        "options": [
          "15 °F",
          "27 °F",
          "95 °F",
          "59 °F"
        ],
        "correctIndex": 1,
        "hint": "Converta a diferença de 15 °C usando o fator 9/5, sem somar 32.",
        "solution": "A alternativa B está correta: ΔC = 35−20 = 15 °C; ΔF = (9/5)×15 = 27 °F. 95 °F seria a temperatura final de 35 °C, não sua variação. O +32 é omitido ao converter intervalos."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topicStart": "Porcentagem, taxas e índices",
    "objective": "Interpretar porcentagens como razões centesimais, calcular descontos e aumentos sucessivos, distinguir pontos percentuais de variação relativa e analisar taxas e índices em situações econômicas e sociais.",
    "prerequisites": [
      "Frações e números decimais",
      "Multiplicação e divisão",
      "Razões e proporcionalidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Porcentagem é uma razão sobre cem",
        "explanation": "A expressão p% significa p partes em cada 100 unidades da mesma grandeza: 25% = 25/100 = 0,25. Para obter 25% de 200 reais, calcule 0,25×200 = 50 reais. Uma porcentagem sempre precisa de base: 20% de 80 e 20% de 300 são quantidades diferentes. Sem saber a que total a taxa se refere, uma notícia dizendo que houve aumento de 20% fica incompleta.\n\nDesconto e aumento atuam sobre um valor de referência. Desconto de 15% significa conservar 85% do preço, isto é, multiplicar por 0,85. Aumento de 15% significa multiplicar por 1,15. O fator multiplicativo reduz erros quando há vários passos. Para descobrir a porcentagem correspondente a uma parte, use parte/total ×100%, respeitando unidade e total positivo.\n\nÉ importante reconhecer situações que não são descontos. Uma taxa de acerto de 70% significa 70 respostas corretas em 100 tentativas, e um índice apresentado como 120, com base 100, sinaliza aumento de 20% em relação à base, segundo a definição do índice. O significado do indicador deve ser lido em seu contexto; porcentagem não é por si só sinônimo de imposto ou juros.",
        "example": "Uma mochila custa R$ 160. Desconto de 25%: 160×0,25 = R$ 40. Preço final: 160−40 = R$ 120, ou diretamente 160×0,75 = R$ 120. A verificação deve mostrar que o novo preço é menor e que 120 corresponde a 75% do preço original.",
        "pitfall": "Não calcule porcentagens sobre um valor diferente daquele informado como base. Um desconto de 25% de R$ 160 não é 25 reais; porcentagem e quantidade monetária têm unidades distintas.",
        "steps": [
          "Converta a taxa para decimal dividindo por 100.",
          "Identifique claramente a base de comparação.",
          "Multiplique o valor pela taxa ou pelo fator final e confira a unidade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Variações sucessivas: por que somar taxas falha",
        "explanation": "Quando uma taxa incide sobre o valor atualizado, a base muda. Se um preço de R$ 100 aumenta 20% e depois diminui 20%, ele vai a R$ 120 e volta a R$ 96, não aos R$ 100 iniciais. Os fatores multiplicativos são 1,20 e 0,80; o produto é 0,96. Isso representa queda líquida de 4% em relação ao preço inicial.\n\nSe duas variações sucessivas ocorrem, represente a primeira por 1+a e a segunda por 1+b, com a e b expressos em decimal e negativos para reduções. O fator total é (1+a)(1+b), não 1+a+b em geral. Por exemplo, dois aumentos de 10% geram fator 1,1×1,1=1,21, aumento total de 21%. Essa regra aparece em reajustes de salário, preços, crescimento populacional e juros compostos quando a taxa e o período são definidos.\n\nTambém é essencial distinguir pontos percentuais de variação relativa. Se a aprovação passa de 40% para 50%, houve aumento de 10 pontos percentuais, mas crescimento relativo de (50−40)/40 = 25%. Os valores respondem a perguntas diferentes, e ambos podem estar corretos se o contexto for explicado.",
        "example": "Um produto custa R$ 250, tem desconto de 10% e depois desconto de 20% sobre o preço já reduzido. Preço após o primeiro: 250×0,90 = R$ 225; após o segundo: 225×0,80 = R$ 180. A redução total é R$ 70, equivalente a 28% do original, não a 30%.",
        "pitfall": "Somar descontos sucessivos ignora a mudança da base. Também não chame aumento de 10 pontos percentuais de aumento relativo de 10% quando a taxa original era diferente de 100%.",
        "steps": [
          "Registre a base usada em cada etapa e transforme taxas em fatores.",
          "Multiplique os fatores na ordem dos eventos.",
          "Compare o resultado final ao valor inicial para calcular a variação total."
        ]
      },
      {
        "level": "advanced",
        "title": "Taxas, índices e análise crítica de dados",
        "explanation": "Uma taxa descreve uma relação entre grandezas conforme uma definição: taxa de incidência pode considerar pessoas e período, taxa de crescimento compara valores em dois instantes, e taxa de juros exige identificar o período de capitalização. Um índice condensa variações relativas a uma base de referência, frequentemente convencionalmente igual a 100. Comparações só são válidas quando as bases, os períodos e os métodos de coleta são compatíveis.\n\nPara calcular a variação percentual de uma grandeza de valor inicial V0 para V1, use (V1−V0)/V0×100%, desde que V0 seja diferente de zero. Valores negativos podem representar queda; a mesma fórmula não deve ser utilizada mecanicamente para bases nulas. Uma queda de 30% exige aumento de aproximadamente 42,86% para retornar ao valor inicial: se 100 cai para 70, voltar a 100 requer 30/70×100%, não 30%.\n\nEm problemas sobre inflação ou índices, diferencie aumento nominal e aumento real. Se um salário sobe 8% enquanto um índice de preços cresce 5% no mesmo período e com a mesma base de comparação, o fator de poder de compra aproximado é 1,08/1,05 ≈ 1,02857, crescimento real de cerca de 2,86%. Simplesmente subtrair 8−5 = 3 pontos percentuais dá aproximação, não a relação multiplicativa exata.",
        "example": "Uma renda passa de R$ 2.000 para R$ 2.160, enquanto os preços aumentam 5%. O aumento nominal é 160/2.000 = 8%. O crescimento do poder de compra calculado pela razão dos fatores é 1,08/1,05 − 1 ≈ 0,02857, ou 2,86%. Não é correto dizer que a renda real cresceu exatamente 8%.",
        "pitfall": "Comparar índices sem conhecer a base ou misturar períodos produz conclusões inadequadas. Um índice de 120 é maior que 110, mas essa comparação só possui sentido com a mesma base e metodologia.",
        "steps": [
          "Identifique a definição do indicador, base, período e unidades.",
          "Use fatores para comparar variações sucessivas e deflacionar valores quando requerido.",
          "Interprete o resultado distinguindo variação absoluta, pontos percentuais e porcentagem relativa."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma camiseta de R$ 180 recebe desconto de 20%. Qual é o preço final?",
        "options": [
          "R$ 144",
          "R$ 160",
          "R$ 36",
          "R$ 216"
        ],
        "correctIndex": 0,
        "hint": "Um desconto de 20% conserva 80% do preço inicial.",
        "solution": "A alternativa A está correta: 180×0,80 = R$ 144. A alternativa C dá o valor do desconto, não o preço final; B subtrai apenas 20 reais; D representa aumento de 20%."
      },
      {
        "level": "intermediate",
        "prompt": "Um produto sofre aumento de 10% e depois outro aumento de 10%. Qual é a variação total sobre o preço original?",
        "options": [
          "20%",
          "21%",
          "10%",
          "0%"
        ],
        "correctIndex": 1,
        "hint": "Multiplique 1,10 por 1,10 e subtraia 1 do resultado.",
        "solution": "A resposta B está correta: 1,1×1,1 = 1,21, que significa aumento total de 21%. A alternativa A soma taxas sem atualizar a base; C considera um único reajuste; D ignora ambos."
      },
      {
        "level": "advanced",
        "prompt": "Uma taxa de aprovação passa de 40% para 50%. Como descrever corretamente a mudança?",
        "options": [
          "Aumentou 10% em termos relativos.",
          "Aumentou 25 pontos percentuais.",
          "Aumentou 10 pontos percentuais e 25% em termos relativos.",
          "Aumentou 50 pontos percentuais."
        ],
        "correctIndex": 2,
        "hint": "Subtraia as taxas para pontos percentuais; divida a diferença pela taxa inicial para variação relativa.",
        "solution": "A alternativa C está correta: 50−40=10 pontos percentuais; em termos relativos 10/40=0,25=25%. Os distratores confundem variação absoluta de taxa com crescimento relativo, que usam referências diferentes."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Iluminismo e Liberalismo",
    "objective": "Situar o Iluminismo na Europa moderna, comparar propostas de Montesquieu, Voltaire e Rousseau, relacionar crítica ao absolutismo e ideias liberais e discutir limites históricos da cidadania.",
    "prerequisites": [
      "Antigo Regime e absolutismo",
      "Sociedade de ordens",
      "Expansão comercial e cultura letrada"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Iluminismo: razão, crítica e circulação de ideias",
        "explanation": "O Iluminismo reuniu correntes intelectuais europeias que se fortaleceram nos séculos XVII e XVIII e valorizavam a investigação racional, a crítica de autoridades e o debate sobre governo, religião, educação e direitos. Não foi um movimento único ou homogêneo: seus autores discordavam sobre religião, organização política e distribuição de poder. A metáfora das luzes expressava a aspiração de submeter costumes e instituições a exame crítico, não a ideia de que pessoas de épocas anteriores eram incapazes de pensar.\n\nA circulação dessas ideias dependia de condições materiais e sociais: expansão da imprensa, livros, enciclopédias, academias, salões e redes de correspondência. A Encyclopédie organizada por Diderot e d’Alembert procurou reunir e divulgar conhecimentos, mas sua circulação alcançava grupos específicos numa sociedade com desigualdades educacionais. Discutir o Iluminismo requer identificar quem podia ler, publicar e participar de debates públicos.\n\nNo Antigo Regime, o poder monárquico podia ser sustentado por justificativas religiosas e privilégios jurídicos. Iluministas contestaram diferentes aspectos dessas instituições, valorizando em graus variados tolerância, liberdade e reformas. Isso não implica que todos defendessem democracia universal, igualdade social plena ou fim imediato de estruturas coloniais.",
        "example": "Pense em uma lei criada por decisão exclusiva do monarca, sem controle institucional. Uma crítica inspirada na ideia de limitação do poder questionaria como impedir abusos e proteger direitos. Outra crítica poderia enfatizar liberdade de culto. Ambas são debates iluministas possíveis, mas tratam de questões distintas.",
        "pitfall": "Não confunda valorização da razão com abandono absoluto da religião; vários pensadores mantiveram convicções religiosas. Também não atribua a todo iluminista as mesmas posições sobre participação política.",
        "steps": [
          "Localize o processo na Europa moderna e identifique a relação com o Antigo Regime.",
          "Separe críticas ao poder, propostas de direitos e modos de difusão do conhecimento.",
          "Considere divergências internas e quem estava excluído dos espaços de debate."
        ]
      },
      {
        "level": "intermediate",
        "title": "Montesquieu, Voltaire e Rousseau: argumentos diferentes",
        "explanation": "Montesquieu analisou formas de governo e defendeu a importância de distribuir funções e limitar o poder por mecanismos institucionais. O objetivo era reduzir o risco de arbitrariedade; a divisão e o equilíbrio entre funções legislativa, executiva e judiciária influenciariam posteriormente constituições, embora arranjos históricos concretos variem. Não significa que três órgãos devam atuar sem controle recíproco.\n\nVoltaire criticou intolerâncias e defendeu liberdades civis, especialmente de expressão e consciência em muitos de seus escritos. Suas posições políticas não são idênticas às de Rousseau: tolerância religiosa e combate ao fanatismo não exigem a mesma teoria sobre soberania popular. Rousseau, por sua vez, refletiu sobre o contrato social e a ideia de que a soberania pertence ao corpo político, articulada à vontade geral, cuja interpretação exige cuidado para não equipará-la à simples soma de vontades particulares.\n\nCompare os autores por perguntas, não por slogans. Para Montesquieu, o problema central inclui como impedir concentração de poder; para Voltaire, que práticas sustentam intolerância; para Rousseau, como uma coletividade pode instituir leis legítimas para si mesma. As propostas foram produzidas em contextos específicos do século XVIII e não se transformaram automaticamente em instituições democráticas contemporâneas.",
        "example": "Uma constituição prevê que o parlamento produza leis, o governo administre e tribunais julguem conflitos, com controles entre instituições. Esse desenho dialoga com ideias de limitação do poder associadas a Montesquieu. Seria incorreto afirmar que a própria existência de órgãos separados garante democracia ou igualdade de direitos.",
        "pitfall": "Reduzir Rousseau à ideia de eleição periódica ou Montesquieu à ausência de interação entre poderes apaga diferenças entre teorias e experiências históricas.",
        "steps": [
          "Identifique o problema político que cada autor procura enfrentar.",
          "Associe tese e conceito principal sem transformar um autor em representante de todo o Iluminismo.",
          "Compare aplicações e limites em instituições concretas, distinguindo influência de implementação direta."
        ]
      },
      {
        "level": "advanced",
        "title": "Liberalismo, revoluções e contradições históricas",
        "explanation": "Liberalismo é uma tradição plural de ideias políticas e econômicas; no contexto moderno, correntes liberais criticaram privilégios de nascimento e arbitrariedade estatal, defendendo diferentes formas de liberdade individual, direitos de propriedade, representação e limitação do poder. Não é correto equipará-lo automaticamente a democracia social, sufrágio universal ou ausência completa de Estado. Formas históricas de liberalismo divergiram quanto a participação política e políticas econômicas.\n\nAs ideias de direitos, constitucionalismo e soberania circularam nas transformações do final do século XVIII, incluindo processos como a Independência dos Estados Unidos e a Revolução Francesa. Esses acontecimentos tiveram causas sociais, fiscais, políticas e internacionais, além de influências intelectuais: ideias não produzem revoluções por si só. O conceito de cidadania se transformou, mas direitos proclamados frequentemente coexistiram com exclusões de mulheres, pessoas escravizadas e grupos sem propriedade.\n\nUma análise histórica rigorosa confronta princípios declarados e práticas efetivas. A defesa de liberdade pode coexistir com exploração colonial e desigualdades; por isso, pergunte sempre quem era considerado cidadão, quem podia votar e quais direitos eram protegidos. É possível reconhecer o impacto duradouro dessas ideias e, simultaneamente, examinar suas limitações e contradições sem anacronismos.",
        "example": "A Declaração dos Direitos do Homem e do Cidadão, de 1789, proclamou princípios gerais de liberdade e igualdade jurídica no contexto revolucionário francês, mas a participação política das mulheres não se tornou automaticamente equivalente à dos homens. Comparar a norma declarada às formas de exclusão revela uma contradição histórica relevante.",
        "pitfall": "Evite explicar a Revolução Francesa apenas pela leitura de filósofos. Crise fiscal, conflitos de ordens, disputas políticas e mobilização social também participaram do processo. Direitos proclamados não significam aplicação universal imediata.",
        "steps": [
          "Separe ideias políticas, conjunturas econômicas e mobilizações coletivas.",
          "Contraste declarações normativas com critérios reais de cidadania e participação.",
          "Explique mudanças e permanências considerando diferentes grupos e recortes históricos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual alternativa melhor caracteriza o Iluminismo europeu?",
        "options": [
          "Foi uma corrente uniforme que aboliu a monarquia em toda a Europa.",
          "Reuniu debates que valorizavam razão, crítica institucional e circulação do conhecimento, sem total unanimidade.",
          "Defendia que apenas a religião podia explicar os fenômenos naturais.",
          "Surgiu exclusivamente após a Revolução Industrial do século XIX."
        ],
        "correctIndex": 1,
        "hint": "Procure a resposta que reconhece ideias em comum e divergências entre autores.",
        "solution": "A alternativa B está correta: o movimento incluiu diferentes projetos e críticas ao Antigo Regime. A inventa unanimidade e consequências políticas generalizadas; C contradiz o debate racional; D situa o processo em período inadequado."
      },
      {
        "level": "intermediate",
        "prompt": "Qual associação entre pensador e ideia está correta?",
        "options": [
          "Montesquieu — mecanismos institucionais para limitar concentração de poder.",
          "Voltaire — soberania da vontade geral em Rousseau.",
          "Rousseau — defesa de privilégios hereditários como base da igualdade.",
          "Diderot — abandono da circulação pública de conhecimento."
        ],
        "correctIndex": 0,
        "hint": "Diferencie divisão de poderes, tolerância religiosa e soberania popular.",
        "solution": "A alternativa A associa Montesquieu ao problema de limitar o poder por mecanismos institucionais. A vontade geral está ligada a Rousseau, não a Voltaire; os demais distratores contradizem as propostas descritas e o papel da Encyclopédie."
      },
      {
        "level": "advanced",
        "prompt": "Por que a proclamação de direitos no final do século XVIII não significou cidadania universal imediata?",
        "options": [
          "Porque todos os direitos foram revogados no mesmo dia.",
          "Porque direitos políticos dependiam apenas da alfabetização técnica.",
          "Porque ideias iluministas proibiam constituições escritas.",
          "Porque princípios jurídicos coexistiram com exclusões por gênero, condição social e escravidão."
        ],
        "correctIndex": 3,
        "hint": "Compare princípios proclamados e quem de fato tinha acesso a direitos políticos.",
        "solution": "A alternativa D é correta: a expansão de princípios jurídicos não eliminou automaticamente desigualdades e restrições à participação. Os outros itens simplificam ou inventam causas. O exame histórico deve considerar grupos, normas e práticas."
      }
    ]
  }
];
