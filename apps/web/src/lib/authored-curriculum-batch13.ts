import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch13:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Funções afim, quadrática e modular",
    "objective": "Analisar leis, gráficos e imagens de funções afins, quadráticas e modulares, calculando taxas, extremos e soluções com domínio e condições de validade explícitos.",
    "prerequisites": [
      "Equações e inequações reais",
      "Plano cartesiano e intervalos",
      "Produtos notáveis e sinais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Função, domínio e variação afim",
        "explanation": "Uma função associa a cada elemento de seu domínio um único valor no contradomínio. Imagem é o conjunto dos valores efetivamente obtidos; não precisa coincidir com o contradomínio escolhido. Uma expressão algébrica não dispensa indicar o domínio. Nesta aula, chamamos afim a função de lei f(x)=ax+b, com a e b reais, incluindo o caso constante a=0; quando a≠0, a lei tem primeiro grau. O gráfico no domínio real completo é uma reta não vertical. O coeficiente a é a taxa de variação: entre entradas distintas, a=[f(x2)−f(x1)]/(x2−x1). Não é a razão a/b. O termo b é f(0), se zero pertencer ao domínio. Para a>0 a função é crescente, para a<0 decrescente e para a=0 constante. Se o domínio é ℝ e a≠0, a imagem é ℝ; se a=0, a imagem é {b}. Um contexto pode restringir entradas a um intervalo ou a quantidades inteiras, mudando o gráfico admissível e a imagem. Variação afim não é sempre proporcionalidade direta: esta corresponde à lei f(x)=ax, com termo independente zero. Para determinar uma lei não conhecida, use a taxa calculada de dois pontos e substitua um deles para obter b; depois confira ambos. Uma reta vertical não define y como função de x nesse sentido, pois um mesmo x teria mais de uma saída. Previsões com uma lei ajustada a dados exigem limites de contexto, não uma extrapolação obrigatória para qualquer entrada.",
        "steps": [
          "Identifique domínio, saídas possíveis e convenção da lei.",
          "Calcule a taxa pela diferença de saídas dividida pela de entradas.",
          "Substitua um ponto para determinar o termo independente.",
          "Confira os dados e as restrições antes de interpretar gráfico e imagem."
        ],
        "example": "Exemplo autoral: g(x)=−2x+9 em [1,4]. Como a<0, os valores decrescem de g(1)=7 a g(4)=1; a imagem é [1,7]. A lei tem domínio real possível, mas a função descrita foi restringida ao intervalo. Não é correto declarar automaticamente imagem ℝ nessa situação nem usar g(0) como valor permitido do contexto.",
        "pitfall": "Confundir imagem e domínio, calcular taxa como a/b ou tratar toda função afim como proporcionalidade direta."
      },
      {
        "level": "intermediate",
        "title": "Quadrática: raízes, vértice e imagem",
        "explanation": "Uma função quadrática tem lei f(x)=ax²+bx+c com coeficientes reais e a≠0. No domínio real completo, seu gráfico é uma parábola: a>0 indica concavidade para cima e mínimo; a<0 indica concavidade para baixo e máximo. O vértice tem coordenadas h=−b/(2a) e k=f(h), e o eixo de simetria é x=h. A forma f(x)=a(x−h)²+k mostra o extremo porque (x−h)²≥0. O valor extremo é k, enquanto h é a entrada em que ele ocorre: não confunda essas duas grandezas. No domínio ℝ, a imagem é [k,+∞) para a>0 e (−∞,k] para a<0. Se o domínio for restrito, é preciso verificar se h é admissível e comparar os valores nas fronteiras; não basta citar o vértice da parábola inteira. Raízes são entradas que zeram f, encontradas por fatoração ou pela fórmula x=[−b±√Δ]/(2a), onde Δ=b²−4ac. Para coeficientes reais, Δ>0 dá duas raízes reais distintas, Δ=0 uma raiz real dupla e Δ<0 nenhuma raiz real. Isso não elimina a função: uma parábola pode não cortar o eixo horizontal. O ponto (0,c) pertence ao gráfico quando zero está no domínio. Para estudar sinais, combine raízes e concavidade, verificando intervalos; não suponha que o sinal de a seja o sinal de todos os valores. Modelos de área ou lucro podem usar leis quadráticas, mas seus domínios e unidades precisam ser definidos antes de interpretar o extremo.",
        "steps": [
          "Identifique a, b e c, com a diferente de zero.",
          "Calcule vértice e reescreva por quadrado completo quando útil.",
          "Determine raízes, sinais e imagem no domínio efetivo.",
          "Em restrições, compare vértice admissível e fronteiras."
        ],
        "example": "Exemplo autoral: p(x)=2(x−1)²+3 tem mínimo 3 em x=1 no domínio ℝ e não possui zeros reais, pois todos os valores são pelo menos 3. Se o domínio mudar para [2,4], x=1 deixa de ser admissível: p cresce nesse intervalo, com mínimo p(2)=5 e máximo p(4)=21. A imagem passa a [5,21].",
        "pitfall": "Apresentar a entrada do vértice como valor máximo, ou usar o extremo da parábola inteira sem conferir o domínio restringido."
      },
      {
        "level": "advanced",
        "title": "Módulo, definição por partes e condições",
        "explanation": "O módulo |u| representa a distância real entre u e zero: |u|=u quando u≥0 e |u|=−u quando u<0. Seu valor nunca é negativo. A função básica f(x)=|x| tem domínio ℝ, imagem [0,+∞) e gráfico em V; em escalas iguais nos eixos, os ramos têm inclinações 1 e −1. Para g(x)=a|x−h|+k com a≠0 e domínio ℝ, o vértice é (h,k); a>0 dá imagem [k,+∞) e a<0 dá (−∞,k]. Logo nem toda função que contém módulo tem somente valores não negativos: uma translação vertical ou multiplicação negativa pode mudar isso. Para retirar módulo de uma expressão, localize seus zeros e resolva por partes conforme seu sinal. Em |u|=c, se c<0 não há solução; se c=0, exige-se u=0; se c>0, resolvem-se u=c ou u=−c. Para |u|≤c com c≥0, vale −c≤u≤c; para |u|≥c com c>0, vale u≤−c ou u≥c. A troca entre interseção e união muda a resposta. Se o lado direito depender de x, sua não negatividade deve ser conferida antes de aceitar candidatos; elevar ao quadrado pode criar soluções que falham na igualdade original. Em |x²−d|, o sinal da expressão interna decide quais trechos são preservados ou refletidos, em vez de simplesmente apagar um sinal negativo. Ao final, confira fronteiras, igualdade e o domínio inicial.",
        "steps": [
          "Determine onde a expressão interna muda de sinal.",
          "Escolha a definição por partes ou a equivalência adequada.",
          "Distinga união e interseção e confira o lado direito.",
          "Verifique candidatos e fronteiras na expressão original."
        ],
        "example": "Exemplo autoral: q(x)=|x+4|−2 tem vértice (−4,−2) e imagem [−2,+∞), mostrando que uma função com módulo pode ter valores negativos. Para q(x)=0, |x+4|=2 fornece x=−2 ou x=−6; a substituição em ambos retorna zero. Trata-se de uma lei diferente da inequação proposta nas atividades.",
        "pitfall": "Apagar o módulo sem casos, aceitar lado direito negativo ou trocar a interseção de condições de ≤ pela união correspondente a ≥."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Exercício autoral: uma função afim real satisfaz f(2) = 7 e f(5) = 16. Qual lei atende simultaneamente aos dois dados?",
        "hint": "Calcule a diferença entre saídas e entre entradas; obtenha a taxa e depois o termo independente, conferindo os dois pontos.",
        "options": [
          "f(x) = 3x - 1.",
          "f(x) = 1x + 5.",
          "f(x) = 2x + 3.",
          "f(x) = 3x + 1."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a=(16−7)/(5−2)=9/3=3 e 7=3·2+b implica b=1. Assim, f(2)=7 e f(5)=16. A dá f(2)=5; B dá f(5)=10; C dá f(5)=13. Conferir apenas um ponto não determina se uma alternativa satisfaz todos os dados; a solução usa a mesma lei nas duas entradas."
      },
      {
        "level": "intermediate",
        "prompt": "Exercício autoral: para f(x) = -x^2 + 6x - 5 com domínio ℝ, qual alternativa informa corretamente o valor máximo, a entrada em que é atingido e a imagem?",
        "hint": "Complete o quadrado ou calcule as duas coordenadas do vértice; o valor de f no vértice não é a mesma grandeza que sua entrada.",
        "options": [
          "Máximo 4, atingido em x = 3; imagem (-∞, 4].",
          "Máximo 3, atingido em x = 4; imagem (-∞, 3].",
          "Mínimo 4, atingido em x = 3; imagem [4, +∞).",
          "Máximo 4, atingido em x = 3; imagem [0, 4]."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: f(x)=−(x−3)²+4. Como o quadrado é não negativo, f(x)≤4 e a igualdade ocorre em x=3. Valores arbitrariamente negativos são possíveis no domínio ℝ, logo a imagem é (−∞,4]. B troca entrada e valor; C inverte a concavidade e o extremo; D impõe uma restrição de saída inexistente. As raízes 1 e 5 não limitam o domínio aos valores entre elas."
      },
      {
        "level": "advanced",
        "prompt": "Exercício autoral em ℝ: qual conjunto resolve |2x - 3| ≤ 5, incluindo as fronteiras quando cabíveis?",
        "hint": "Escreva a desigualdade dupla correspondente a uma distância de no máximo 5 e mantenha a interseção das condições.",
        "options": [
          "(-∞, -1] ∪ [4, +∞).",
          "(-1, 4).",
          "[-1, 4].",
          "[0, 4]."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: |2x−3|≤5 equivale a −5≤2x−3≤5; somar 3 e dividir por 2 dá −1≤x≤4. Nos extremos, o módulo vale exatamente 5, portanto eles pertencem ao conjunto. A corresponde à região externa; B exclui indevidamente as fronteiras; D impõe x≥0 sem hipótese que o autorize. Por exemplo, x=−1 é válido e x=5 não satisfaz a desigualdade."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Concordância, regência e crase",
    "objective": "Revisar concordância nominal e verbal, relações de regência e emprego do acento grave na escrita formal brasileira, considerando sentido, estrutura e casos de variação.",
    "prerequisites": [
      "Núcleo do sujeito e complemento",
      "Classes de palavras e preposições",
      "Artigos e pronomes demonstrativos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Concordância: identificar o termo de referência",
        "explanation": "Concordância relaciona flexões de palavras que desempenham funções ligadas na oração. Na verbal, o verbo geralmente se ajusta ao sujeito em número e pessoa; na nominal, artigos, adjetivos e outros elementos variáveis se relacionam ao substantivo em gênero e número. A análise não consiste em copiar o plural da palavra mais próxima: em uma expressão com núcleo singular e complemento plural, é preciso identificar o núcleo e a construção. Com sujeito composto anteposto ligado por e, emprega-se normalmente o plural. Há casos particulares e possibilidades de concordância que dependem de estrutura e sentido, como expressões partitivas acompanhadas de plural; não se pode converter toda variação admitida em erro. Haver com sentido de existir é impessoal na norma-padrão e fica no singular, inclusive transmitindo a impessoalidade ao auxiliar de uma locução: deve haver, e não devem haver nesse uso. Existir tem sujeito e concorda com ele. Fazer indicando tempo decorrido também é impessoal. Isso não torna todo uso de haver impessoal: como auxiliar em um tempo composto, pode flexionar com o sujeito. Na concordância nominal, anexo como adjetivo varia, enquanto a locução em anexo é invariável. Para revisar, localize cada relação separadamente antes de corrigir uma frase inteira. O foco é a escrita formal solicitada no contexto; diferenças em usos cotidianos não justificam julgar a capacidade intelectual de quem fala.",
        "steps": [
          "Localize sujeito e núcleo, sem decidir apenas por proximidade.",
          "Diferencie verbo pessoal, uso impessoal e auxiliar de tempo composto.",
          "Reconheça adjetivos variáveis e locuções invariáveis.",
          "Verifique casos particulares antes de rejeitar uma construção admitida."
        ],
        "example": "Exemplos autorais: A lista de oficinas mudou mantém mudou no singular por se referir a lista; As listas mudaram exige plural. Em Os mapas estão anexos, o adjetivo varia; em Os mapas estão em anexo, a locução fica invariável. São relações diferentes, que não se resolvem contando quantas palavras plurais aparecem na frase.",
        "pitfall": "Concordar por proximidade com um complemento plural, pluralizar haver existencial ou flexionar a locução em anexo."
      },
      {
        "level": "intermediate",
        "title": "Regência e sentido dos complementos",
        "explanation": "Regência é a relação entre um termo regente e o complemento que se liga a ele, com ou sem preposição segundo a construção e o sentido. Quando o regente é verbo, falamos em regência verbal; quando é um nome, como substantivo ou adjetivo, em regência nominal. Não se deve afirmar que todo complemento começa por preposição, nem importar uma regra geral de a pessoal de outra língua para o português. Na escrita formal, gostar se constrói com de, confiar pode selecionar em, e acesso costuma ligar-se ao complemento por a. Essas relações não são apenas associações visuais: ajudam a definir papéis e sentidos. Preferir pode aparecer com um complemento direto ou, numa comparação explícita entre duas opções, com o segundo introduzido por a. Nesta construção formal comparativa, use preferir X a Y, sem substituir a relação por mais X do que Y. A ausência da segunda opção não torna toda frase com preferir incompleta: a preferência pode ser expressa sem comparação explicitada. Regências variam com sentido, registro e história da língua; dicionários e gramáticas registram construções que não cabem numa regra única para qualquer uso. Se um complemento estiver representado por pronome relativo, conserve a preposição exigida pelo regente quando cabível: um termo ligado por de pode exigir de que. Em uma revisão, preserve o sentido pretendido e confira o verbete na acepção correta, em vez de supor que inserir qualquer preposição resolve a frase. A regência também prepara a análise da crase: primeiro é preciso saber se existe preposição a.",
        "steps": [
          "Identifique o regente e o sentido usado.",
          "Determine se o complemento exige preposição e qual.",
          "Em comparação com preferir, relacione claramente as duas opções.",
          "Preserve a preposição em construções com relativos quando necessária."
        ],
        "example": "Frase autoral: Este é o assunto de que a equipe gosta. O de liga o complemento ao verbo gostar, mesmo com a reorganização por meio do relativo. Em A equipe tem acesso ao arquivo, acesso seleciona a e arquivo admite o artigo o, resultando em ao. A relação regencial existe também com nomes, não apenas com verbos.",
        "pitfall": "Tratar qualquer preposição como equivalente, apagar a exigida diante de relativo ou supor que preferir sempre precisa de dois complementos explícitos."
      },
      {
        "level": "advanced",
        "title": "Crase: regência, artigo e demonstrativos",
        "explanation": "Crase é uma fusão de vogais; no uso estudado aqui, envolve a preposição a e outro a, como o artigo a/as ou a vogal inicial de aquele, aquela e aquilo. O acento grave indica essa ocorrência na escrita: à, às, àquele, àquela, àquilo. Não é o nome de qualquer acento e não aparece automaticamente diante de toda palavra feminina. Em uma construção com complemento feminino determinado, confirme tanto a preposição selecionada quanto o artigo admitido; a troca por termo masculino comparável pode revelar ao, mas funciona como apoio à análise, não como teste mecânico que preserve sempre o sentido. Diante de infinitivo, normalmente não há artigo feminino: a estudar não recebe acento grave. Em referência a aquele documento, a fusão pode ser marcada mesmo com substantivo masculino depois do demonstrativo. Locuções consagradas como à noite e às vezes exigem atenção própria; a explicação não deve reduzi-las a uma regra de direção para lugares. Há casos facultativos relacionados à presença opcional de artigo, como diante de certos possessivos femininos acompanhados de substantivo e nomes próprios femininos, conforme o contexto. Não se transforma uma possibilidade em erro obrigatório. Em sequências com a seguido de plural sem artigo, a marca não surge apenas porque o nome é feminino: a propostas difere de às propostas. Compare ainda A direção comprou a mesa, com artigo sem preposição, e A direção se referiu à mesa, com a preposição e o artigo. Analise regência, determinação e sentido juntos para justificar a grafia, em vez de memorizar uma lista de palavras que sempre receberiam crase.",
        "steps": [
          "Identifique se o regente pede preposição a.",
          "Confira artigo, demonstrativo ou locução e sua forma.",
          "Diferencie ausência, exigência e possibilidade de artigo no contexto.",
          "Justifique a grafia mantendo o sentido e a estrutura da frase."
        ],
        "example": "Par autoral: A comissão analisou a proposta contém a como artigo do objeto de analisou; A comissão se referiu à proposta reúne a exigido por referir-se e o artigo de proposta. A palavra proposta aparece nas duas frases, mas isso não obriga a mesma grafia, pois a relação sintática mudou.",
        "pitfall": "Acentuar todo a antes de feminino, proibir àquele só porque vem um nome masculino depois ou ignorar casos em que o artigo é facultativo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Revisão autoral de um aviso, segundo a norma-padrão escrita: qual alternativa combina corretamente o uso existencial de haver ou existir e a concordância de anexo com tabelas?",
        "hint": "Diferencie haver impessoal de existir pessoal e confira o gênero e o número do adjetivo, sem alterar o sentido de existência.",
        "options": [
          "Devem haver revisões; as tabelas seguem anexas.",
          "Deve existir revisões; as tabelas seguem anexas.",
          "Deve haver revisões; as tabelas seguem anexas.",
          "Deve haver revisões; as tabelas segue anexo."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: haver existencial é impessoal e mantém deve no singular; seguem concorda com tabelas e anexas é adjetivo feminino plural. A pluraliza o auxiliar indevidamente; B usa existir, que precisa concordar com revisões, exigindo devem existir; D quebra a concordância verbal e nominal. A locução em anexo seria invariável, mas não é a forma empregada nas alternativas."
      },
      {
        "level": "intermediate",
        "prompt": "Caso autoral: uma leitora compara a edição impressa e a versão digital de uma publicação. Qual frase exprime sua preferência conforme a construção comparativa formal preferir X a Y?",
        "hint": "Conserve o primeiro complemento direto e introduza o segundo por a; na segunda opção determinada, confira também a presença de artigo feminino.",
        "options": [
          "Prefiro a edição impressa à versão digital.",
          "Prefiro mais a edição impressa do que a versão digital.",
          "Prefiro a edição impressa de versão digital.",
          "Prefiro a edição impressa a versão digital."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a edição impressa é o primeiro complemento direto; à versão digital reúne a preposição a e o artigo a. B emprega uma construção diferente da formal solicitada; C troca a preposição e a relação; D omite o acento grave na fusão exigida com o segundo termo feminino determinado. O exercício delimita a escrita formal e o sentido pretendido, sem afirmar que toda frase com preferir precise exibir duas opções."
      },
      {
        "level": "advanced",
        "prompt": "Frase autoral com lacunas: O comunicado se refere ___quele relatório e convida a equipe ___ participar da revisão. Qual preenchimento e justificativa são adequados à escrita formal?",
        "hint": "A primeira lacuna está antes de demonstrativo iniciado por a; a segunda precede infinitivo. Não decida apenas pelo gênero da palavra relatório.",
        "options": [
          "a; à — toda ocorrência antes de infinitivo deve receber acento grave.",
          "a; a — um demonstrativo nunca pode participar de crase.",
          "à; à — a preposição a sempre recebe acento, independentemente do termo seguinte.",
          "à; a — escreve-se àquele pela fusão com o demonstrativo e a participar sem artigo feminino."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: referir-se exige a e aquele inicia-se por a, formando àquele; antes de participar, o a não se une a artigo feminino, ficando sem acento. A acentua indevidamente o infinitivo e omite a primeira fusão; B nega a possibilidade com demonstrativo; C acentua toda preposição a. O nome masculino relatório não impede àquele, pois a fusão envolve o demonstrativo."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Literatura africana de língua portuguesa",
    "objective": "Reconhecer a pluralidade de literaturas africanas de língua portuguesa e interpretar relações entre linguagem, memória, contexto e vozes literárias, distinguindo autor, narrador e representação.",
    "prerequisites": [
      "Narrador e eu lírico",
      "Contexto de produção e interpretação textual",
      "Diferença entre ficção e documento histórico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Literaturas no plural: línguas, histórias e formas",
        "explanation": "A expressão literaturas africanas de língua portuguesa reúne produções diversas; não designa um único estilo nem representa toda a literatura do continente africano. Neste percurso, estudamos especialmente Angola, Moçambique, Cabo Verde, Guiné-Bissau e São Tomé e Príncipe. Compartilhar o português como língua de escrita não apaga diferenças históricas, sociais ou linguísticas entre esses espaços, nem a diversidade interna de cada um. A formação dessas literaturas se relaciona à colonização e às disputas pela representação de experiências locais, mas não se reduz a um tema único de resistência ou a um calendário idêntico de escolas europeias. Escritores podem explorar memória, vida urbana, relações familiares, gênero, pertencimento e invenção da linguagem. O português convive com outras línguas e práticas culturais; marcas dessa convivência podem participar da elaboração literária sem constituir defeito de escrita. A presença de fala, canto, repetição ou narrativa transmitida entre gerações pode estabelecer relações entre oralidade e escrita. Isso precisa ser demonstrado no texto: não se deve atribuir oralidade a qualquer obra apenas pela origem africana de quem a escreveu. Também é inadequado presumir que toda pessoa de um país compartilhe a experiência de uma personagem. Identificar autoria e contexto abre caminhos de leitura; não substitui observar gênero, forma, enunciação e escolhas de palavras. O recorte desta aula é introdutório e não esgota autores, períodos ou línguas desses países.",
        "steps": [
          "Reconheça o recorte geográfico e linguístico sem confundi-lo com todo o continente.",
          "Diferencie características compartilhadas e histórias específicas.",
          "Observe a elaboração textual de vozes e referências culturais.",
          "Evite deduzir estilo ou visão de mundo apenas da nacionalidade."
        ],
        "example": "Situação autoral de estudo: uma biblioteca organiza prateleiras para romance angolano, poesia guineense e narrativas cabo-verdianas. A língua de escrita permite aproximá-las, enquanto gêneros, situações históricas e escolhas formais exigem leituras particulares. A organização pode favorecer comparação sem transformar os três conjuntos em um estilo uniforme.",
        "pitfall": "Tratar África como um país, confundir língua portuguesa com exclusividade linguística ou usar nacionalidade como explicação suficiente de uma obra."
      },
      {
        "level": "intermediate",
        "title": "Um percurso de obras e questões de leitura",
        "explanation": "Um repertório inicial pode associar obras a perguntas, sem converter títulos em resumos definitivos. Em Angola, Mayombe, de Pepetela, é um romance relacionado à luta pela independência contra o colonialismo português. Situar esse contexto evita confundi-lo automaticamente com a guerra civil posterior à independência. A representação literária de conflitos envolve composição de personagens e perspectivas, não uma transcrição neutra de acontecimentos. Em Moçambique, Niketche: uma história de poligamia, de Paulina Chiziane, permite investigar relações de gênero, desigualdade e construção de experiências femininas. Uma personagem não fala obrigatoriamente por todas as mulheres, e a obra não deve ser tomada como manual de costumes de uma população inteira. Em Cabo Verde, Chiquinho, de Baltasar Lopes, acompanha o percurso do protagonista em uma realidade marcada por dificuldades socioeconômicas e secas; o contexto ilumina a leitura sem dispensar o exame de como a narrativa foi organizada. Na Guiné-Bissau, No fundo do canto, de Odete Semedo, oferece um caminho para estudar memória poética e conflitos da história recente do país. Em São Tomé e Príncipe, Conceição Lima integra o repertório de autoria poética a pesquisar, ampliando o percurso para além dos romances e dos dois países continentais mais lembrados. Esses cinco pontos de entrada não representam todos os autores nem autorizam atribuir o mesmo tema a cada literatura nacional. Para aprofundar, consulte uma edição identificada da obra e estudos críticos, separando informação bibliográfica, contexto e interpretação sustentada por passagens. Esta apresentação não reproduz os livros nem substitui sua leitura.",
        "steps": [
          "Associe corretamente autoria, obra e espaço literário.",
          "Delimite o contexto histórico sem trocar conflitos distintos.",
          "Formule uma pergunta sobre vozes, relações sociais ou memória.",
          "Confira a hipótese na obra, sem transformar sinopse em análise integral."
        ],
        "example": "Ficha autoral de comparação: o eixo de leitura de Mayombe pode envolver libertação colonial e conflitos representados pela ficção; o de No fundo do canto pode relacionar memória e história recente na poesia. A comparação aproxima problemas, mas conserva a diferença entre romance e poesia e entre os contextos angolano e guineense.",
        "pitfall": "Inventar títulos ou dados biográficos, trocar guerra de libertação por guerra civil ou transformar uma personagem em retrato de todas as pessoas do país."
      },
      {
        "level": "advanced",
        "title": "Interpretar vozes e memória com evidências",
        "explanation": "Na análise de um texto, comece por identificar quem enuncia e em qual situação: autor empírico, narrador de ficção, personagem e eu lírico não são categorias equivalentes. Uma voz em primeira pessoa pode ser construída, e uma lembrança narrada não se torna automaticamente registro autobiográfico de quem publicou a obra. Examine a organização temporal, as mudanças de perspectiva, a presença de fala citada e os efeitos da escolha lexical. Quando uma narrativa incorpora lembranças contadas por outra pessoa, pode criar uma relação entre transmissão oral e escrita; explique o efeito observado em vez de apenas nomear oralidade. Repetições podem marcar insistência, ritmo ou disputa de sentidos, mas seu valor depende da passagem. Contextos de colonização e de formação nacional ajudam a formular perguntas sobre poder e pertencimento; não permitem decidir de antemão o sentido de qualquer palavra de toda obra africana. Uma leitura responsável distingue hipótese e evidência: a passagem sustenta certa relação, mas não necessariamente uma generalização sobre um país ou sobre o continente. Compare interpretações perguntando qual delas explica mais detalhes sem contradizer o texto. Se a questão trouxer apenas um fragmento, respeite esse limite e não invente eventos do restante do livro. A linguagem literária pode recriar e questionar memórias coletivas sem funcionar como prova documental de cada fato mencionado. Ao estudar obras protegidas por direitos autorais, identifique edição e autoria e use meios autorizados de acesso; um exemplo didático inventado deve ser apresentado como tal, sem atribuição falsa a escritores reais.",
        "steps": [
          "Identifique as instâncias de voz sem igualá-las ao autor.",
          "Localize palavras e recursos formais que sustentem a interpretação.",
          "Relacione contexto e texto sem impor uma conclusão pronta.",
          "Delimite o alcance da evidência e reconheça o que o fragmento não demonstra."
        ],
        "example": "Microtexto autoral do Kognos, sem atribuição a escritor existente: Guardei no caderno a história que meu tio contava. Ao relê-la, percebi que minhas palavras haviam mudado o caminho da lembrança. O contraste entre contar, guardar por escrito e reler permite discutir recriação da memória; não prova que a história seja um documento fiel ou autobiografia de um autor real.",
        "pitfall": "Confundir eu lírico com autor, usar contexto como substituto da evidência textual ou atribuir um microtexto didático a uma obra real."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Caso autoral: um clube aproxima obras de Angola, Moçambique, Cabo Verde, Guiné-Bissau e São Tomé e Príncipe escritas em português. Qual princípio orienta melhor essa leitura comparativa?",
        "hint": "Uma língua compartilhada pode aproximar obras sem apagar diferenças de contexto, gênero e composição.",
        "options": [
          "Todas as obras pertencem necessariamente ao mesmo gênero e seguem um único estilo africano.",
          "A língua de escrita permite aproximações, mas cada obra e contexto precisam ser examinados em sua particularidade.",
          "A nacionalidade basta para determinar o sentido de qualquer passagem, dispensando a leitura.",
          "O conjunto corresponde a toda a literatura produzida no continente africano, em qualquer língua."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: o recorte linguístico aproxima produções sem apagar suas diferenças. A impõe uniformidade de gênero e estilo; C substitui a análise por nacionalidade; D confunde um recorte com todas as literaturas do continente. A comparação deve observar forma, vozes e contextos específicos, sem negar a diversidade interna de cada país."
      },
      {
        "level": "intermediate",
        "prompt": "Atividade autoral de repertório: uma ficha situa Mayombe, de Pepetela, na luta pela independência de Angola contra o colonialismo português. Qual conclusão respeita essa informação e a natureza literária do romance?",
        "hint": "Diferencie contexto de libertação, guerra civil posterior e composição ficcional de uma reprodução documental automática.",
        "options": [
          "O romance se situa obrigatoriamente na guerra civil posterior à independência, pois qualquer conflito angolano é o mesmo.",
          "A informação prova que todas as personagens correspondem literalmente a pessoas reais e concordam entre si.",
          "O livro representa todas as literaturas africanas e permite dispensar as demais obras do repertório.",
          "A luta anticolonial contextualiza a leitura, mas ainda é necessário analisar como personagens e perspectivas são construídas."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a ficha delimita a luta pela independência, e a análise literária precisa investigar a representação desse contexto. A troca conflitos históricos distintos; B inventa correspondência literal e concordância entre personagens; C generaliza indevidamente a partir de um romance. Contextualizar não converte ficção em relato documental neutro."
      },
      {
        "level": "advanced",
        "prompt": "Microtexto autoral do Kognos, não retirado de obra africana: Minha avó repetia o relato à janela. Quando o escrevi, conservei sua pausa, mas troquei o começo; agora duas vozes habitavam a página. Qual interpretação é sustentada pelo fragmento?",
        "hint": "Observe repetia, escrevi, pausa, troquei e duas vozes; limite a conclusão às relações efetivamente representadas.",
        "options": [
          "A passagem relaciona transmissão oral e recriação escrita da lembrança, sem demonstrar que a voz narrativa seja o autor real.",
          "O fragmento comprova que todos os escritores de um continente usam exatamente a mesma técnica narrativa.",
          "O relato foi copiado sem alteração, pois escrever impede qualquer mudança na história recebida.",
          "A voz narrativa é necessariamente uma escritora real identificável, e cada fato corresponde à sua biografia."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a fala recebida é registrada e modificada; pausa e duas vozes tornam visível a relação entre transmissão e elaboração escrita. B extrapola para todos os escritores sem evidência; C contradiz troquei o começo; D confunde narrador e autor e inventa uma identificação biográfica. O microtexto foi criado para a atividade, sem imitar nem citar obra existente."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Planejamento e projeto de texto",
    "objective": "Construir, testar e revisar um projeto de texto adequado ao comando de escrita, articulando recorte, tese ou finalidade, argumentos, progressão e fechamento.",
    "prerequisites": [
      "Leitura de comando e coletânea",
      "Diferença entre assunto e tema",
      "Parágrafo, coerência e coesão"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Do comando ao recorte e à direção do texto",
        "explanation": "Planejar é decidir o que o texto precisa realizar antes de investir na versão final. O projeto registra uma direção e as relações entre as partes; pode ser revisto quando o desenvolvimento revela um problema. Comece pela situação de escrita: qual gênero foi solicitado, para quem se escreve, com que finalidade e dentro de quais limites? Depois identifique o assunto amplo e o recorte efetivo. Um comando sobre obstáculos ao acesso de trabalhadores noturnos a bibliotecas não se resolve apenas elogiando a importância da leitura: ele exige tratar de acesso e de um grupo delimitado. Na dissertação argumentativa, formule uma tese, uma resposta defensável ao problema, que será sustentada no desenvolvimento. Tese não é uma palavra-chave isolada nem a repetição do título; também não precisa ser uma frase grandiosa. Em outros gêneros, o projeto pode exigir voz de uma personagem, interlocutor específico ou sequência narrativa; não imponha a eles automaticamente a mesma organização da dissertação. A proposta concreta e o regulamento vigente orientam essas escolhas. No Enem 2026, o Inep pede texto dissertativo-argumentativo formal e intervenção social respeitosa dos direitos humanos; essas exigências não são uma regra de toda banca e todo gênero. A Fuvest admite múltiplos gêneros nas suas propostas, tornando indispensável conferir a opção solicitada. No rascunho de planejamento, escreva o recorte em palavras próprias, liste ideias possíveis e selecione as que realmente ajudam a cumprir a tarefa. Se uma ideia não responde ao comando, sua aparência sofisticada não justifica incluí-la.",
        "steps": [
          "Identifique gênero, finalidade, destinatário e limites do comando.",
          "Diferencie assunto amplo e recorte solicitado.",
          "Formule uma direção de escrita, como tese no texto argumentativo.",
          "Selecione ideias pertinentes e confira as regras da edição da prova."
        ],
        "example": "Comando didático autoral: discuta obstáculos ao acesso de trabalhadores noturnos a bibliotecas municipais. Projeto possível: defender que o funcionamento deve considerar horários e comunicação dos serviços. Planejar somente uma história geral dos livros deixaria de explicar os obstáculos pedidos, ainda que o texto contivesse informações verdadeiras.",
        "pitfall": "Usar tese pronta sem recorte, confundir assunto com problema ou transferir regras de uma prova para todos os gêneros e exames."
      },
      {
        "level": "intermediate",
        "title": "Mapa de argumentos: função, sustentação e ordem",
        "explanation": "Para planejar a argumentação, dê uma função a cada parte: que ponto ela precisa estabelecer e como contribui para a posição defendida? Uma afirmação deve ser acompanhada de sustentação e de explicação da relação com a tese. A sustentação pode envolver raciocínio, informação verificável ou exemplo identificado como hipotético; nenhum deles dispensa examinar limites. Não invente percentuais nem os atribua a instituições reais para tornar um argumento convincente. Um dado sobre um grupo não prova automaticamente o mesmo comportamento em todos os grupos, e correlação não estabelece sozinha uma causa. Teste o encadeamento perguntando por que uma ideia prepara a próxima. A ordem pode partir de uma definição necessária, apresentar um problema e examinar suas consequências, ou confrontar uma objeção; não existe obrigação universal de começar pelo argumento mais fraco. Um roteiro com duas partes que repetem o mesmo motivo não cria progressão apenas por receber conectivos diferentes. Anote a contribuição específica de cada bloco e reorganize os que se sobrepõem. Em vez de tratar o parágrafo como recipiente obrigatório de uma única frase ou de um número fixo de linhas, construa unidade de foco: explicações e exemplos devem trabalhar juntos. O projeto precisa caber no espaço disponível e dar condições de desenvolver o que promete. Uma lista extensa de nomes e assuntos, sem ligação entre eles, costuma deixar menos espaço para demonstrar o raciocínio. A escolha de repertório deve responder ao problema, sem funcionar como decoração ou citação de autoridade que encerra a discussão.",
        "steps": [
          "Atribua uma contribuição específica a cada bloco do desenvolvimento.",
          "Relacione afirmação, sustentação e explicação sem inventar evidências.",
          "Defina uma ordem que torne as dependências do raciocínio compreensíveis.",
          "Elimine repetições e ajuste o projeto ao espaço e à tarefa."
        ],
        "example": "Planejamento autoral sobre acesso ao acervo digital de uma escola: primeiro bloco examina barreiras de conexão e disponibilização; segundo analisa orientação para localizar e avaliar materiais. Os pontos contribuem de modos diferentes para a tese de que oferecer arquivos não garante seu aproveitamento. Não se apresentou uma estatística real nem se provou que todas as escolas tenham as mesmas barreiras.",
        "pitfall": "Confundir lista de opiniões com argumento desenvolvido, repetir a mesma razão com outro conectivo ou fabricar uma estatística para preencher uma lacuna."
      },
      {
        "level": "advanced",
        "title": "Testar o projeto e revisar a versão escrita",
        "explanation": "Antes de redigir, submeta o projeto a uma leitura crítica: cada parte responde ao recorte? A tese prometeu mais do que os argumentos podem demonstrar? Há uma objeção relevante ou uma condição que precisa ser reconhecida? Considerar limites não obriga adotar uma posição intermediária entre quaisquer opiniões; uma tese firme também pode ser fundamentada, e uma frase aparentemente equilibrada pode permanecer vaga. Escolha relações e qualificações conforme a evidência, não para agradar por neutralidade. Planeje o fechamento como consequência do percurso: o leitor deve perceber como o desenvolvimento sustenta a resposta ao problema. Quando a proposta exigir intervenção, como no Enem, relacione-a aos obstáculos discutidos e respeite os direitos humanos. Não acrescente uma solução decorada que não enfrente nenhum problema analisado, nem trate intervenção como exigência de todo gênero. Durante a escrita, o plano pode ser alterado: se faltar sustentação para uma alegação, reduza seu alcance, busque informação quando houver possibilidade ou reorganize o argumento. Na revisão, faça um roteiro inverso, anotando a função de cada parágrafo que de fato foi escrito. Compare esse mapa com a intenção inicial e procure saltos, promessas não cumpridas e repetições. Depois confira relações de coesão, referências de pronomes, grafia e adequação ao comando. Acrescentar portanto não transforma oposição em consequência, e aumentar a variedade de palavras não corrige contradições. O objetivo é produzir um texto que realize sua finalidade de maneira compreensível e sustentada, sem depender de uma fórmula de quantidade fixa de parágrafos ou palavras.",
        "steps": [
          "Teste pertinência, limites e possíveis objeções à direção escolhida.",
          "Planeje um fechamento decorrente do desenvolvimento e adequado ao gênero.",
          "Ajuste o plano quando a escrita revelar falta de sustentação.",
          "Compare o roteiro inverso com o comando e revise lógica e expressão."
        ],
        "example": "Revisão autoral de um projeto sobre devolução de livros: a tese promete combater atrasos, mas os dois parágrafos apenas celebram a leitura. O roteiro inverso revela a distância entre promessa e execução. Uma correção é desenvolver causas pertinentes e ações relacionadas, se exigidas; outra é reformular a tese dentro do comando. Trocar apenas o último conectivo não resolve a falta de relação.",
        "pitfall": "Achar que qualquer posição moderada é bem argumentada, manter uma tese sem sustentação ou usar conectivos para esconder saltos lógicos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Proposta didática autoral: discuta como ampliar o acesso de estudantes de cursos noturnos aos serviços de uma biblioteca escolar. Qual direção argumentativa atende mais diretamente ao recorte?",
        "hint": "Procure a relação entre acesso, serviços da biblioteca e estudantes do período noturno, sem substituir o problema por elogio genérico.",
        "options": [
          "Narrar a origem da escrita, sem estabelecer relação com o funcionamento da biblioteca ou o público indicado.",
          "Enumerar livros famosos, sem discutir condições de acesso ou serviços para estudantes noturnos.",
          "Defender horários e canais de atendimento compatíveis com o período noturno, explicando como enfrentam barreiras de acesso.",
          "Defender exclusivamente a criação de áreas esportivas, sem relação com biblioteca, seus serviços ou o grupo solicitado."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a direção articula os elementos do recorte e permite desenvolver por que horários e atendimento importam para o acesso. A e B mantêm proximidade com livros ou escrita, mas omitem o problema delimitado; D muda o objeto. A alternativa não prova que uma política específica funcione em qualquer escola: oferece um projeto pertinente a ser argumentado."
      },
      {
        "level": "intermediate",
        "prompt": "Caso autoral: um projeto defende reduzir o desperdício de papel na secretaria escolar. Os dois blocos previstos repetem que imprimir consome folhas. Qual revisão melhora a progressão sem inventar evidências?",
        "hint": "Busque contribuições distintas à tese, com relações explícitas e sem estatísticas atribuídas a fontes inexistentes.",
        "options": [
          "Manter a repetição, trocando apenas o conectivo inicial do segundo bloco por ademais.",
          "Distinguir a análise de impressões desnecessárias da discussão de procedimentos para evitá-las, explicando a contribuição de cada parte.",
          "Inserir um percentual inventado e atribuí-lo a uma universidade para dar aparência de sustentação.",
          "Acrescentar a biografia de um escritor sem relacioná-la ao desperdício ou à tese."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: o primeiro bloco pode caracterizar o problema e o segundo examinar procedimentos relacionados, criando contribuições distintas. A muda a superfície sem acrescentar raciocínio; C fabrica evidência e autoria institucional; D dispersa o foco. A sugestão é uma possibilidade de organização, sem impor a todo texto uma ordem fixa nem apresentar dados reais não verificados."
      },
      {
        "level": "advanced",
        "prompt": "Situação autoral de revisão: a tese afirma que todo projeto escolar digital melhora a participação. O desenvolvimento só mostra que um projeto hipotético pode ampliar canais de comunicação, se houver acesso e orientação. Qual ajuste resolve melhor a diferença entre tese e sustentação?",
        "hint": "Compare os quantificadores todo e pode, as condições apresentadas e aquilo que um caso hipotético realmente demonstra.",
        "options": [
          "Conservar todo e acrescentar portanto, pois o conectivo torna o caso hipotético prova universal.",
          "Apagar as condições de acesso e orientação para que a promessa pareça mais abrangente.",
          "Inventar uma pesquisa nacional de resultado unânime, sem fonte verificável, para confirmar a tese.",
          "Restringir a tese à possibilidade condicionada discutida e explicar os limites do exemplo, mantendo a pertinência ao comando."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: o material sustenta uma possibilidade sob condições, sem demonstrar a generalização todo. Restringir a tese e explicitar limites alinha a promessa à argumentação. A confia ao conectivo uma prova inexistente; B retira condições relevantes sem fundamento; C inventa evidência. O exemplo é hipotético e não deve ser apresentado como levantamento de escolas reais."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Inferência de sentidos em inglês",
    "objective": "Inferir sentidos lexicais, atitudes e informações implícitas em textos curtos em inglês, justificando a interpretação por pistas e distinguindo apoio textual de especulação.",
    "prerequisites": [
      "Vocabulário e estrutura básica da oração em inglês",
      "Conectores e referências pronominais",
      "Distinção entre informação explícita e hipótese"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Pistas locais para construir um sentido",
        "explanation": "Inferir é construir uma interpretação a partir de pistas do texto e de conhecimentos pertinentes, em vez de apenas localizar uma frase que já enuncia a resposta. Ao encontrar uma palavra desconhecida em inglês, leia a oração inteira e as frases vizinhas. A classe da palavra, o complemento e as relações entre ideias ajudam a limitar sentidos possíveis. Uma explicação entre vírgulas pode esclarecer o termo; exemplos podem indicar sua categoria; contraste e comparação podem mostrar como ele se relaciona a uma palavra conhecida. Não é preciso traduzir tudo para formular uma hipótese inicial. Teste uma paráfrase simples e confira se ela preserva a situação descrita, o tempo verbal e a relação lógica. Na frase autoral The path was narrow, so the walkers moved in single file, a passagem de uma pessoa atrás da outra ajuda a entender narrow como estreito naquele contexto. Não se conclui que o caminho fosse necessariamente perigoso, escuro ou fechado. Uma pista pode permitir apenas um sentido aproximado; reconhecer essa limitação é melhor que inventar uma tradução exata. Palavras com sentidos diferentes em outros contextos não precisam manter sempre a mesma equivalência em português. Conectores também não são códigos mecânicos: while pode indicar simultaneidade ou contraste, e a relação precisa ser examinada na frase. Em estudo fora da prova, um dicionário pode confirmar a hipótese; a consulta não substitui verificar a acepção utilizada na passagem.",
        "steps": [
          "Leia a unidade de sentido ao redor do termo.",
          "Reconheça função gramatical e pistas de explicação, exemplo ou relação.",
          "Teste uma paráfrase compatível com o contexto.",
          "Separe o sentido apoiado de detalhes que continuam desconhecidos."
        ],
        "example": "Trecho autoral: The hall was vacant: every chair was empty and nobody was waiting inside. A explicação após os dois-pontos sustenta desocupado ou vazio como sentido de vacant. Ela não informa o preço do salão, a causa da ausência de pessoas ou se o local ficará assim no futuro.",
        "pitfall": "Escolher a primeira tradução lembrada, ignorar a relação entre orações ou acrescentar uma causa que o texto não forneceu."
      },
      {
        "level": "intermediate",
        "title": "Atitude, finalidade e ironia com apoio textual",
        "explanation": "Além de palavras isoladas, o leitor pode inferir a atitude construída pela voz do texto e a finalidade de uma mensagem. Diferencie informar sobre um procedimento, recomendar uma ação e avaliar uma situação. Adjetivos, verbos, repetições e contrastes podem sustentar aprovação, reserva, crítica ou entusiasmo, mas não revelam automaticamente todos os sentimentos pessoais de quem escreveu. O gênero ajuda a formular expectativas, sem fixar um tom obrigatório: uma instrução pode conter crítica, assim como um texto informativo pode selecionar expressões avaliativas. Na leitura de ironia verbal, a interpretação pode resultar do contraste entre uma expressão aparentemente elogiosa e uma situação que a desmente; uma palavra positiva sozinha não prova ironia. Compare o elogio literal com os fatos apresentados e prefira a leitura que explique a relação entre eles. Também é preciso respeitar o alcance de marcadores como may, might, some e not all: possibilidade não equivale a certeza, alguns não significa todos e nem todos não significa nenhum. Esses detalhes influenciam tanto a inferência quanto a eliminação de alternativas. Uma resposta pode repetir palavras do trecho e ainda mudar seu sentido ao trocar o agente, o grau de certeza ou a relação de causa. Justifique a atitude ou finalidade por elementos identificáveis, sem impor uma opinião pessoal sobre o tema. Se houver apenas uma fala de personagem, não a atribua automaticamente ao autor real ou à posição de todo o texto.",
        "steps": [
          "Identifique quem fala e o que a mensagem procura realizar.",
          "Localize expressões avaliativas e contrastes com os fatos.",
          "Confira ironia, modalização e quantificadores no contexto completo.",
          "Elimine alternativas que mudem voz, finalidade ou grau de certeza."
        ],
        "example": "Diálogo autoral: The printer broke just before the deadline. Great timing, said Leo, looking at the blank pages. Great timing contrasta com a falha perto do prazo e sustenta uma leitura irônica de insatisfação. O texto não prova que Leo odeie toda tecnologia nem que tenha causado o defeito.",
        "pitfall": "Chamar todo elogio de ironia, impor um tom pelo gênero ou transformar uma possibilidade expressa por may em certeza."
      },
      {
        "level": "advanced",
        "title": "Conectar pistas sem ultrapassar a evidência",
        "explanation": "Inferências mais amplas relacionam informações distribuídas pelo texto. Primeiro estabeleça o que foi afirmado; depois formule uma conclusão e liste quais pistas a sustentam. Compare-a com outras explicações possíveis. Uma hipótese plausível no mundo não é automaticamente a melhor resposta sobre um trecho. Se uma janela está aberta, por exemplo, isso não demonstra sozinho quem a abriu ou com que intenção. A passagem pode fornecer pistas adicionais, mas a conclusão deve crescer apenas na medida desse apoio. Diferencie contradição e ausência de informação: uma alternativa pode ser errada porque contraria o texto ou porque inventa um detalhe que ele não permite confirmar. Observe referências pronominais, sequência temporal e relações entre ações; um acontecimento anterior pode ajudar a explicar outro sem provar uma regra universal. Quando a pergunta pede a interpretação mais sustentada, escolha a que integra as pistas e exige menos suposições adicionais relevantes. Isso não significa escolher sempre a frase mais curta ou cautelosa: a força da resposta depende do texto. Em alusões culturais e comparações entre textos, conhecimentos externos podem ser necessários, mas não autorizam atribuir ao trecho uma intenção que ele não sinaliza. Nesta aula, as atividades trazem toda a passagem necessária e não dependem de conhecer uma obra externa. Ao justificar, diferencie o que o texto diz do que ele sugere e do que permanece desconhecido. Essa disciplina permite revisar uma inferência sem tratar a leitura como adivinhação da biografia ou da mente do autor.",
        "steps": [
          "Reúna informações explícitas e identifique sua relação.",
          "Formule uma conclusão e associe cada parte a uma pista.",
          "Compare explicações alternativas e suposições adicionais.",
          "Diferencie informação contrariada, inferência apoiada e detalhe não demonstrado."
        ],
        "example": "Narrativa autoral: The gate was locked. Eva checked the notice, turned away and called the office. Pode-se inferir que o aviso influenciou a ação de Eva, considerando a sequência, mas não determinar seu conteúdo exato ou afirmar que o escritório atendeu à ligação. Uma interpretação não precisa preencher todas as lacunas da narrativa.",
        "pitfall": "Tratar ausência de informação como falsidade demonstrada, inventar intenções precisas ou transformar uma pista ambígua em prova conclusiva."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Trecho autoral: The instructions were concise: they explained the whole procedure in just three short sentences. No contexto, concise caracteriza instruções que são:",
        "hint": "A explicação após os dois-pontos relaciona a extensão das instruções à apresentação do procedimento; não introduza uma avaliação que ela não fornece.",
        "options": [
          "Breves e diretas na apresentação do procedimento.",
          "Deliberadamente falsas sobre todas as etapas.",
          "Extensas, repetindo a explicação em muitas páginas.",
          "Escritas necessariamente em uma língua desconhecida do leitor."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: three short sentences e explained the whole procedure apoiam brevidade e apresentação direta, sentido contextual de concise. B inventa falsidade; C contradiz a curta extensão; D acrescenta uma língua não informada. Ser breve não comprova sozinho a verdade de cada instrução, e a resposta não precisa fazer essa alegação."
      },
      {
        "level": "intermediate",
        "prompt": "Diálogo autoral: The bus left ten minutes early, leaving us at the stop. How considerate of them! Maya said, staring at the empty road. Qual leitura da fala de Maya é mais sustentada?",
        "hint": "Compare considerate com a consequência de a saída antecipada deixar o grupo no ponto, sem atribuir sentimentos ou atos não mencionados.",
        "options": [
          "Um elogio literal ao cuidado de esperar todos os passageiros no ponto.",
          "Uma afirmação de que Maya decidiu abandonar o grupo antes da partida.",
          "Uma crítica irônica à falta de consideração sugerida pela saída antecipada.",
          "Uma promessa de que o próximo ônibus chegará exatamente em dez minutos."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: o elogio aparente considerate contrasta com o grupo deixado no ponto, sustentando ironia crítica. A atribui espera que a situação desmente; B inventa a saída de Maya; D transforma ten minutes early em previsão de outro ônibus. O trecho não demonstra que o motorista pretendesse prejudicar alguém, e essa intenção não é necessária à leitura."
      },
      {
        "level": "advanced",
        "prompt": "Trecho autoral: In our small survey, some students said the new timetable might help them attend the reading club. We have not yet checked whether attendance has changed. Qual conclusão respeita o alcance das informações?",
        "hint": "Considere small survey, some, might e a ausência de verificação da frequência; diferencie expectativa e resultado medido.",
        "options": [
          "A frequência de todos os estudantes já aumentou, como demonstrado por um acompanhamento concluído.",
          "Nenhum estudante considera possível participar, pois ainda não existe medição da frequência.",
          "A pesquisa comprova que todo clube de leitura de qualquer escola terá aumento de frequência.",
          "Parte dos estudantes consultados vê uma possibilidade de ajuda, mas o efeito na frequência ainda não foi verificado."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: some delimita o grupo que expressou a expectativa, might marca possibilidade e a segunda frase explicita a falta de verificação da frequência. A troca expectativa por aumento medido para todos; B contradiz o relato de possibilidade; C generaliza um pequeno levantamento para qualquer escola. A pesquisa é fictícia, criada para a atividade, sem atribuição a instituição real."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Presente do indicativo em espanhol",
    "objective": "Conjugar verbos regulares e irregulares frequentes no presente do indicativo e interpretar seus valores temporais, considerando sujeito, tratamento e variação linguística.",
    "prerequisites": [
      "Pronomes pessoais em espanhol",
      "Infinitivo e grupos em -ar, -er e -ir",
      "Concordância verbal e marcadores temporais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Pessoa, grupo verbal e concordância",
        "explanation": "O presente do indicativo pode apresentar uma situação atual ou habitual; seu uso não se limita a uma ação que acontece exatamente neste segundo. Para conjugar um verbo regular, reconheça o infinitivo, retire -ar, -er ou -ir e acrescente a terminação adequada ao sujeito. Na ordem yo, tú, él/ella/usted, nosotros/nosotras, vosotros/vosotras, ellos/ellas/ustedes, as terminações regulares são: -ar: -o, -as, -a, -amos, -áis, -an; -er: -o, -es, -e, -emos, -éis, -en; -ir: -o, -es, -e, -imos, -ís, -en. Observe especialmente a primeira pessoa plural e a forma de vosotros: essas posições distinguem -er e -ir. O acento escrito faz parte da forma correta, não é um detalhe a descartar. Usted refere-se ao interlocutor, mas exige terceira pessoa gramatical; ustedes também concorda com terceira pessoa, no plural. Vosotros é usado em parte do mundo hispanofalante; em outras variedades, como as americanas, ustedes atende ao plural de interlocutores também em relações informais. Não converta a divisão em uma regra de que todo espanhol da Espanha usa sempre vosotros ou de que ustedes é sempre formal. Há ainda variedades com vos, cujo paradigma não deve ser confundido com o de vosotros. Nesta primeira tabela, seguimos tú e apresentamos o voseo como variação a reconhecer, sem exigir que uma única tabela descreva todos os usos regionais. Como em português, o sujeito pode não estar expresso: a flexão e o contexto ajudam a identificá-lo.",
        "steps": [
          "Localize o sujeito expresso ou recuperável pelo contexto.",
          "Identifique o grupo do infinitivo e confira se é regular.",
          "Aplique a terminação e verifique os acentos.",
          "Diferencie pessoa do interlocutor, pessoa gramatical e variedade de tratamento."
        ],
        "example": "Frases autorais: Yo trabajo en el archivo; nosotras aprendemos juntas; vosotros compartís los materiales. As terminações mudam com grupo e pessoa. Em Ustedes preparan el encuentro, o verbo está na terceira pessoa plural, mesmo quando se fala diretamente aos participantes.",
        "pitfall": "Aplicar a mesma terminação a -er e -ir em todas as pessoas, usar segunda pessoa com usted ou tratar uma variedade regional como único espanhol correto."
      },
      {
        "level": "intermediate",
        "title": "Irregularidades: observar formas e limites do padrão",
        "explanation": "Nem todo verbo conserva a raiz e as terminações esperadas de um modelo regular. Algumas irregularidades atingem determinadas pessoas; outras formam paradigmas próprios. Em entender, encontramos entiendo, entiendes, entiende, entendemos, entendéis, entienden: há e→ie nas formas de yo, tú e terceiras pessoas, mas não em nosotros e vosotros. Em pedir, a alternância e→i aparece em pido, pides, pide e piden, enquanto pedimos e pedís conservam e. Jugar apresenta u→ue em juego e juegan, entre outras formas, mas conserva u em jugamos e jugáis; não se trata de o→u. Esses padrões são úteis para certos grupos, mas não autorizam mudar qualquer vogal de qualquer verbo ou transferir a mesma regra para todos os tempos. Há irregularidades específicas de primeira pessoa, como hago de hacer, e combinações de mudanças, como tengo e tienes de tener. Compare ainda os paradigmas frequentes: ser tem soy, eres, es, somos, sois, son; ir tem voy, vas, va, vamos, vais, van; estar tem estoy, estás, está, estamos, estáis, están. O contraste mostra por que não basta afirmar que um verbo inteiro muda da mesma maneira em cada pessoa. Consulte o paradigma quando o padrão for desconhecido e pratique em frases que indiquem claramente o sujeito. Uma forma pode coincidir com a de outro tempo: o contexto é necessário para interpretar, não apenas a aparência da palavra. As formas de vos têm distribuição própria; não aplique automaticamente a elas a alternância apresentada para tú.",
        "steps": [
          "Reconheça se a irregularidade está na raiz, na terminação ou em formas específicas.",
          "Compare yo, tú e terceiras pessoas com nosotros e vosotros nos padrões estudados.",
          "Mantenha distintas as mudanças e→ie, e→i e u→ue.",
          "Confira o paradigma antes de generalizar para outro verbo, tempo ou tratamento."
        ],
        "example": "Exemplos autorais: Yo pido una explicación, pero nosotros pedimos dos ejemplos. A mudança e→i ocorre em pido e não em pedimos. Em Yo hago la lista y ellas hacen las fichas, hago não permite prever uma forma inventada como ellas hagon: a flexão correta depende da pessoa e do paradigma.",
        "pitfall": "Excluir yo da mudança de raiz, aplicar a alternância a nosotros/vosotros ou inventar conjugações por semelhança com o português."
      },
      {
        "level": "advanced",
        "title": "Forma presente e tempo da situação",
        "explanation": "Identificar o presente do indicativo é reconhecer uma forma verbal; determinar quando ocorre a situação exige também ler o contexto. Um estado pode incluir o momento de fala sem começar nele, e um hábito pode ser apresentado no presente mesmo que não esteja acontecendo durante a conversa. Marcadores de frequência e expressões temporais ajudam a interpretar esses valores, mas não operam como fórmulas independentes do restante da frase. O presente também pode referir-se ao futuro em agendas, planos ou compromissos contextualizados, e pode narrar acontecimentos passados com efeito de aproximação. Portanto, a presença de mañana não obriga toda frase a usar uma forma de futuro, e um presente narrativo não converte um fato passado em fato cronologicamente atual. Examine a situação de enunciação e o marcador temporal para decidir o valor. Também não confunda presente simples com uma única construção possível para ação em curso: estar seguido de gerúndio pode explicitar progressão, mas essa comparação não exige substituir todo presente simples. Em orações subordinadas, a escolha entre indicativo e subjuntivo depende da construção e do sentido; não é correto anunciar que um conector temporal exige sempre presente do indicativo. Para a leitura, separe três perguntas: qual é a forma, com quem ela concorda e que valor assume na passagem? A resposta deve conservar o que o texto informa, sem deduzir grau de formalidade só pelo tempo verbal. Tratamento, contexto cultural e situação comunicativa precisam ser considerados em conjunto.",
        "steps": [
          "Identifique a forma verbal sem concluir automaticamente o tempo do acontecimento.",
          "Observe marcadores e contexto de fala, hábito, plano ou narrativa.",
          "Diferencie presente simples e construção progressiva quando pertinente.",
          "Justifique o valor contextual sem criar regra universal para conectores ou tratamentos."
        ],
        "example": "Par autoral: Cada viernes visitamos el museo descreve uma rotina; El próximo viernes visitamos el museo, ya tenemos las entradas apresenta um plano futuro. A forma visitamos é igual nas duas frases, mas os marcadores e o contexto mudam a referência temporal. Esses exemplos foram criados para a aula.",
        "pitfall": "Traduzir todo presente como ação instantânea, proibir seu uso com referência futura ou exigir indicativo automaticamente depois de qualquer conector temporal."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Frases autorais no presente do indicativo: Nosotras ___ en la escuela y ustedes ___ cerca de la biblioteca. Complete com comer e vivir, mantendo os sujeitos indicados.",
        "hint": "Diferencie a primeira pessoa plural de -er e a terceira pessoa plural exigida por ustedes; não troque os sujeitos.",
        "options": [
          "comen; vivimos.",
          "comemos; vivís.",
          "comemos; viven.",
          "coméis; vive."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: nosotras exige comemos, primeira pessoa plural de comer; ustedes exige viven, terceira pessoa plural de vivir. A usa terceira pessoa no primeiro espaço e primeira no segundo; B combina o primeiro corretamente com uma forma de vosotros no segundo; D usa coméis para vosotros e vive no singular. Os verbos são regulares, mas pessoa e número continuam decisivos."
      },
      {
        "level": "intermediate",
        "prompt": "Atividade autoral: qual par completa Yo ___ la explicación y nosotros también la ___ com entender no presente do indicativo? Considere o paradigma com yo e nosotros.",
        "hint": "Compare a alternância vocálica de entender na primeira pessoa singular com a raiz preservada na primeira pessoa plural.",
        "options": [
          "entiendo; entendemos.",
          "entendo; entiendemos.",
          "entiendes; entendéis.",
          "entiende; entienden."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: entiendo tem a alternância e→ie, enquanto entendemos conserva e na primeira pessoa plural. B cria formas que não correspondem ao paradigma solicitado; C fornece tú e vosotros; D fornece terceiras pessoas singular e plural. A mudança não pode ser excluída de yo nem estendida automaticamente a nosotros."
      },
      {
        "level": "advanced",
        "prompt": "Frase autoral dita antes do dia seguinte: Mañana viajamos a otra ciudad; los billetes ya están comprados. Qual análise de viajamos respeita a forma e o contexto?",
        "hint": "Separe a flexão verbal da referência temporal indicada por mañana e pelo planejamento explicitado na segunda oração.",
        "options": [
          "É uma forma de futuro simples, pois qualquer ocorrência de mañana altera a conjugação escrita.",
          "Descreve necessariamente uma viagem que ocorre exatamente durante a fala, sem referência ao dia seguinte.",
          "É uma forma obrigatória de passado e contradiz a compra já realizada dos bilhetes.",
          "É presente do indicativo empregado com referência futura, em um plano contextualizado."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: viajamos é presente do indicativo neste contexto, com mañana situando a viagem no dia seguinte e os bilhetes comprados reforçando o plano. A confunde valor temporal com forma de futuro simples; B ignora o marcador; C impõe passado e uma contradição inexistente. A forma viajamos também pode coincidir com passado em outros contextos, mas não é a leitura sustentada aqui."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Hidrostática e pressão",
    "objective": "Calcular pressão, variação hidrostática, efeitos de uma prensa ideal e empuxo, distinguindo referências de pressão, unidades e condições de equilíbrio.",
    "prerequisites": [
      "Forças e equilíbrio",
      "Densidade e unidades de área e volume",
      "Proporções e conservação de energia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Pressão, profundidade e referência de medida",
        "explanation": "Hidrostática estuda fluidos em repouso. A pressão média sobre uma área é p=Fnormal/A; quando a pressão é uniforme, essa relação permite obter a força normal por F=pA. Se variar na superfície, não se deve aplicar o valor de um ponto a toda a área sem justificativa. No SI, 1 Pa=1 N/m². Como 1 cm=0,01 m, 1 cm²=0,0001 m²: a conversão de área envolve o quadrado, e não somente o fator cem do comprimento. Pressão é escalar; a força de pressão sobre uma superfície tem direção perpendicular a ela. Em um mesmo ponto de um fluido estático comum, a pressão não depende da orientação da superfície imaginada. Num líquido de densidade ρ constante, sob gravidade uniforme, a pressão a uma profundidade h abaixo de um nível de referência é p=p0+ρgh, em que p0 é a pressão nesse nível. A diferença aumenta com h; a pressão total não é diretamente proporcional a h quando p0 é diferente de zero. Pressão absoluta toma o vácuo como referência; a manométrica toma a pressão atmosférica local, de modo que pman=pabs−patm. Se a superfície estiver aberta ao ar, p0=patm; se houver outra pressão aplicada, não se substitui automaticamente p0 pela atmosférica. Pontos à mesma altura em um mesmo líquido conectado e em equilíbrio têm a mesma pressão sob essas condições, independentemente do formato do recipiente. Em camadas de densidades diferentes, some as contribuições de cada espessura; um único valor de ρ não descreve automaticamente todas elas.",
        "steps": [
          "Identifique força normal, área e referência de pressão.",
          "Converta área ao quadrado e use unidades compatíveis.",
          "Defina profundidade e condições para p=p0+ρgh.",
          "Diferencie pressão absoluta, diferença hidrostática e leitura manométrica."
        ],
        "example": "Caso autoral: líquido com ρ=800 kg/m³ em tanque aberto, patm=100000 Pa, g=10 m/s². A 0,75 m abaixo da superfície, a diferença é 800·10·0,75=6000 Pa; a pressão absoluta é 106000 Pa e a manométrica é 6000 Pa. Os números são hipóteses didáticas, não medições reais.",
        "pitfall": "Converter cm² como cm, tratar p0+ρgh como proporcionalidade direta ou somar pressão atmosférica quando o problema pede apenas a leitura manométrica."
      },
      {
        "level": "intermediate",
        "title": "Pascal: variação transmitida e balanço da prensa",
        "explanation": "O princípio de Pascal descreve a transmissão de uma variação de pressão aplicada a um fluido confinado, no modelo de equilíbrio. A variação chega ao fluido e às paredes sem redução nesse modelo; isso não significa que a pressão absoluta seja igual em alturas diferentes, pois a diferença hidrostática continua existindo. Em uma prensa ideal com pistões na mesma altura, líquido incompressível, ausência de atrito e condições externas equivalentes, pode-se relacionar as forças efetivas por F1/A1=F2/A2. As forças precisam ser as que produzem as diferenças de pressão consideradas; pesos dos pistões ou pressões externas diferentes não podem ser ignorados se forem relevantes no problema. Quando A2>A1, a saída pode exercer força maior, mas o aparelho não produz energia adicional. Para um deslocamento no qual não haja vazamento e o volume se conserve, A1d1=A2d2. Com áreas constantes, o pistão maior percorre distância menor, e o trabalho ideal de entrada corresponde ao de saída: F1d1=F2d2. A razão entre áreas pode ser calculada em cm² se ambas estiverem na mesma unidade; para obter pressão em pascais, converta a área para m². Se forem fornecidos raios ou diâmetros, lembre que a área circular cresce com o quadrado da dimensão linear. Na análise real, é necessário considerar perdas, deformações e compressibilidade conforme a situação; não invente uma eficiência universal ou uma redução sempre ligeiramente pequena. Antes de usar a fórmula, explicite o modelo e confira se o balanço de volume e trabalho é compatível com a resposta.",
        "steps": [
          "Verifique alturas, pressões externas e forças efetivas nos pistões.",
          "Use a razão de áreas sob as hipóteses do modelo ideal.",
          "Relacione deslocamentos pela conservação de volume.",
          "Confira trabalho de entrada e saída sem atribuir energia extra à prensa."
        ],
        "example": "Prensa didática autoral com áreas 5 cm² e 40 cm², pistões no mesmo nível e demais hipóteses ideais: força de entrada 30 N permite saída de 240 N. Se a entrada avança 16 cm, a saída recua 2 cm, pois 5·16=40·2. Os trabalhos têm módulo 4,8 J em ambos os lados; não houve multiplicação de energia.",
        "pitfall": "Igualar forças em vez de pressões, usar a razão de diâmetros como razão de áreas ou multiplicar força e deslocamento simultaneamente sem conservar energia."
      },
      {
        "level": "advanced",
        "title": "Empuxo, flutuação e peso aparente",
        "explanation": "A distribuição de pressão do fluido sobre um corpo pode produzir uma resultante para cima, o empuxo. No modelo de um corpo rodeado pelo fluido em equilíbrio, sob gravidade uniforme, o princípio de Arquimedes relaciona seu módulo ao peso do fluido deslocado: E=ρfluido·g·Vdeslocado. Para um corpo parcialmente imerso, Vdeslocado é o volume imerso, não necessariamente o volume total. Use a densidade do fluido nessa expressão; a do objeto serve para calcular sua massa ou comparar comportamentos sob condições especificadas. O empuxo não é automaticamente igual ao peso do corpo. Se ele flutua em equilíbrio, sem outros apoios e desprezando o empuxo do ar, E=P; daí Vimerso/Vtotal=ρmédia do corpo/ρfluido, quando os volumes e densidades do modelo se mantêm. Em imersão total, a comparação entre E e P ajuda a analisar a tendência de movimento, mas o balanço precisa incluir outras forças. Um objeto mantido em repouso por fio vertical preso acima sofre peso para baixo, empuxo para cima e tração para cima; nessas condições T+E−P=0, e a leitura do dinamômetro ideal é T=P−E. Essa leitura é um peso aparente, não uma diminuição da massa ou da gravidade local. Se o resultado exigir tração negativa, a configuração suposta de um fio puxando para cima não mantém aquele equilíbrio. A fórmula de Arquimedes requer atenção em contatos vedados com o fundo ou situações que impeçam a pressão de atuar como no corpo rodeado pelo líquido. Converta 1 L=0,001 m³ antes de multiplicar densidade em kg/m³.",
        "steps": [
          "Identifique o volume efetivamente deslocado e a densidade do fluido.",
          "Calcule empuxo e peso como grandezas distintas.",
          "Inclua tração, apoio ou outras forças quando existirem.",
          "Confira equilíbrio, sentido das forças e validade da configuração."
        ],
        "example": "Corpo didático autoral flutua em líquido de densidade 900 kg/m³, com densidade média de 450 kg/m³. Sem outros apoios e desprezando o empuxo do ar, metade do volume fica imersa, pois 450/900=0,5. Não se conclui que metade da massa desapareceu; o empuxo equilibra o peso com o volume deslocado correspondente.",
        "pitfall": "Usar volume total em imersão parcial, substituir densidade do fluido pela do corpo ou afirmar que um dinamômetro menor demonstra perda de massa."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Caso autoral: uma força normal de 120 N atua uniformemente sobre uma área de 40 cm². Qual é a pressão média em pascais?",
        "hint": "Converta cm² para m² antes de dividir a força; elevar o fator de comprimento ao quadrado é essencial.",
        "options": [
          "3 Pa.",
          "30000 Pa.",
          "300 Pa.",
          "4800 Pa."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: 40 cm²=40·10⁻⁴ m²=0,004 m²; p=120/0,004=30000 Pa. A divide diretamente por 40, sem converter a unidade de área; C não corresponde à conversão quadrática; D também não satisfaz F/A nas unidades pedidas. O enunciado informa distribuição uniforme, permitindo associar essa pressão ao valor em toda a área considerada."
      },
      {
        "level": "intermediate",
        "prompt": "Prensa autoral ideal: pistões no mesmo nível, líquido incompressível, sem vazamentos ou atrito, pesos desprezíveis e mesma pressão externa. A1 = 4 cm², A2 = 100 cm², F1 = 60 N e d1 = 25 cm. Quais são o módulo da força de saída F2 e o deslocamento de saída d2, sob conservação de volume?",
        "hint": "Use a razão das áreas para a força e a razão inversa para o deslocamento; confira o trabalho transferido.",
        "options": [
          "F2 = 60 N e d2 = 25 cm.",
          "F2 = 1500 N e d2 = 25 cm.",
          "F2 = 240 N e d2 = 6,25 cm.",
          "F2 = 1500 N e d2 = 1 cm."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: A2/A1=100/4=25; F2=60·25=1500 N. Conservação de volume dá d2=4·25/100=1 cm. O trabalho é 60·0,25=15 J na entrada e 1500·0,01=15 J na saída. A ignora a diferença entre áreas; B multiplica força sem reduzir deslocamento; C mantém volume e trabalho nos números propostos, mas usa uma razão de força 4 em vez da razão correta de áreas 25."
      },
      {
        "level": "advanced",
        "prompt": "Corpo autoral de massa 3 kg e volume 2 L está totalmente imerso em água, sem tocar o fundo, mantido em repouso por fio vertical preso acima. Considere ρ = 1000 kg/m³ e g = 10 m/s², despreze a massa do fio e outros efeitos. Quais são o empuxo e a tração?",
        "hint": "Converta litros para m³, calcule o peso do fluido deslocado e faça o balanço das três forças verticais.",
        "options": [
          "Empuxo de 20 N para cima e tração de 10 N para cima.",
          "Empuxo de 30 N para cima e tração de 0 N.",
          "Empuxo de 20 N para cima e tração de 30 N para cima.",
          "Empuxo de 10 N para baixo e tração de 20 N para cima."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: 2 L=0,002 m³; E=1000·10·0,002=20 N para cima. P=3·10=30 N para baixo, então T=P−E=10 N para cima. B iguala empuxo ao peso sem respeitar o volume deslocado; C desconsidera o empuxo no equilíbrio; D inverte seu sentido e não equilibra o peso. A massa continua 3 kg; a tração é a leitura de peso aparente nesta configuração."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Reações e balanceamento",
    "objective": "Interpretar equações e balancear reações moleculares e iônicas, conservando átomos e carga, reduzindo coeficientes e reconhecendo os limites da representação simbólica.",
    "prerequisites": [
      "Símbolos e fórmulas químicas",
      "Íons, carga elétrica e número de oxidação",
      "Proporções e equações lineares"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Equação química e conservação de átomos",
        "explanation": "Uma reação química transforma espécies por rearranjos de átomos e elétrons; no tratamento usual de reações químicas, conserva-se a quantidade de cada elemento, sem converter um elemento em outro. A equação representa reagentes à esquerda e produtos à direita. Seu balanceamento ajusta as proporções indicadas por coeficientes, sem mudar as fórmulas das espécies especificadas. Um coeficiente multiplica a fórmula inteira: 3 H2O corresponde a seis átomos de H e três de O. Um índice dentro da fórmula faz parte da identidade da espécie; substituir H2O por H2O2 muda a substância e não é um ajuste de coeficiente. Conte os átomos de cada elemento separadamente, inclusive os grupos entre parênteses quando houver. O coeficiente omitido vale um. Pela inspeção, ajuste uma espécie de cada vez e reconte todos os elementos após cada mudança. Frações podem ser usadas como etapa intermediária; ao final, multiplique todos os coeficientes pelo mesmo fator para obter inteiros, se essa for a forma solicitada. Para representar a proporção inteira mínima, divida-os pelo máximo divisor comum: uma equação com todos os coeficientes dobrados continua conservando átomos, mas não apresenta os menores inteiros. O balanceamento sozinho não prova que a reação ocorrerá, nem informa automaticamente sua velocidade, o rendimento ou as condições de execução. Estados físicos e condições indicados na equação ajudam a descrevê-la; não transforme um exercício de representação em instrução para realizar uma mistura.",
        "steps": [
          "Identifique reagentes e produtos sem alterar suas fórmulas.",
          "Conte cada elemento multiplicando índices pelos coeficientes.",
          "Ajuste coeficientes e reconte a equação inteira.",
          "Converta e reduza a inteiros mínimos quando solicitado."
        ],
        "example": "Análise simbólica autoral: em 2 Mg + O2 → 2 MgO, há dois átomos de magnésio e dois de oxigênio em cada lado. A escrita 4 Mg + 2 O2 → 4 MgO também conserva átomos, mas seus coeficientes têm divisor comum dois. A primeira forma registra a proporção inteira mínima, sem constituir um procedimento experimental.",
        "pitfall": "Modificar índices das fórmulas, esquecer que o coeficiente multiplica todos os átomos ou rejeitar uma equação conservativa apenas por ela não estar reduzida."
      },
      {
        "level": "intermediate",
        "title": "Classificar e organizar o balanceamento",
        "explanation": "Classificar uma reação e balanceá-la são tarefas relacionadas, mas distintas. Síntese e decomposição descrevem padrões de formação ou desdobramento; deslocamento e dupla troca descrevem outros padrões usuais. Precipitação envolve formação de sólido a partir de espécies dissolvidas; uma reação ácido-base pode envolver transferência de próton; uma reação de oxidação-redução envolve variação de números de oxidação. As classificações podem se sobrepor e não autorizam prever que qualquer par de substâncias reagirá apenas porque uma troca de símbolos pode ser desenhada. Identidades, estados e condições precisam ser conhecidos. Quando a inspeção ficar difícil, atribua uma incógnita a cada coeficiente, e não a cada elemento. Escreva uma igualdade para conservar cada elemento e resolva o sistema respeitando coeficientes positivos para as espécies na posição indicada. Uma variável pode fixar a escala; elimine denominadores e reduza a proporção quando possível. Não confunda número de moléculas com número total de átomos, nem proporção em mol com proporção em massa. Em combustão completa de um hidrocarboneto, com produtos CO2 e H2O especificados, conserve primeiro C e H e depois confira O; outros produtos podem ocorrer em condições diferentes, mas não são criados livremente durante o balanceamento de uma equação já definida. Na escrita iônica, espécies aquosas dissociadas podem ser mostradas separadamente; íons espectadores iguais nos dois lados podem ser cancelados. A equação iônica líquida ainda deve conservar todos os elementos e a carga, sem remover uma espécie que realmente participa da transformação.",
        "steps": [
          "Separe classificação, identidade das espécies e ajuste de proporções.",
          "Atribua uma variável a cada coeficiente e escreva as igualdades de conservação.",
          "Resolva a razão, elimine denominadores e confira o divisor comum.",
          "Em equações iônicas, cancele apenas espectadores e conserve também a carga."
        ],
        "example": "Modelagem simbólica autoral: para a KClO3 → b KCl + c O2, a conservação fornece a=b e 3a=2c. Escolher a=2 produz b=2 e c=3, proporção inteira mínima. O padrão é decomposição, mas as igualdades não dizem como executar a reação nem medem sua rapidez ou rendimento.",
        "pitfall": "Atribuir incógnitas aos elementos em vez dos coeficientes, converter diretamente coeficiente em massa ou confundir desenho de dupla troca com garantia de reação."
      },
      {
        "level": "advanced",
        "title": "Carga e elétrons no método das semirreações",
        "explanation": "No balanceamento de uma equação iônica, igualdade de átomos é necessária, mas não suficiente: a soma algébrica das cargas deve coincidir nos dois lados. Uma espécie neutra tem carga total zero, mesmo contendo átomos com números de oxidação diferentes. Oxidação corresponde à perda de elétrons e aumento de número de oxidação; redução corresponde ao ganho e diminuição. Os elétrons cedidos e recebidos se compensam na reação global. Para o método das semirreações em meio ácido aquoso, separe oxidação e redução; balanceie elementos diferentes de H e O, ajuste O com H2O, H com H+ e carga com elétrons. Multiplique semirreações inteiras para igualar o número de elétrons, some e cancele espécies iguais. Em meio básico, uma estratégia é obter primeiro a forma ácida, adicionar OH- em ambos os lados na quantidade que neutralize H+, formar água e simplificar. A equação final deve ser compatível com o meio e não conservar H+ livre apenas porque apareceu na etapa intermediária. Recontar átomos e cargas é indispensável: igualar somente elétrons não detecta todo erro de multiplicação. O número de oxidação é uma ferramenta formal, não a carga real de cada átomo em uma molécula covalente. Uma equação global não revela por si só o mecanismo ou a ordem de reação; seus coeficientes não devem ser transferidos automaticamente para uma lei de velocidade. Uma reação reversível também pode ser balanceada: o balanço de matéria não depende de supor conversão completa em um único sentido.",
        "steps": [
          "Identifique espécies oxidadas e reduzidas e o meio especificado.",
          "Balanceie cada semirreação em átomos e carga.",
          "Iguale elétrons multiplicando todos os termos necessários.",
          "Some, simplifique e confira novamente elementos, carga e meio."
        ],
        "example": "Par simbólico autoral: Sn^2+ → Sn^4+ + 2 e- e Ce^4+ + e- → Ce^3+. A segunda semirreação deve ser multiplicada inteira por dois. A soma é Sn^2+ + 2 Ce^4+ → Sn^4+ + 2 Ce^3+: um Sn e dois Ce em cada lado, carga total +10 em ambos e nenhum elétron na equação global. Não se especifica procedimento de laboratório.",
        "pitfall": "Balancear átomos sem carga, multiplicar só parte da semirreação, deixar elétrons na reação global ou exigir irreversibilidade para que exista balanceamento."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Exercício simbólico autoral: para Al + HCl → AlCl3 + H2, qual sequência traz os menores inteiros positivos dos coeficientes, na ordem em que as espécies aparecem?",
        "hint": "Conserve Al, H e Cl separadamente; uma sequência pode conservar átomos e ainda não estar reduzida.",
        "options": [
          "1, 3, 1, 1.",
          "4, 12, 4, 6.",
          "2, 6, 2, 3.",
          "2, 3, 2, 3."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: 2 Al + 6 HCl → 2 AlCl3 + 3 H2 tem Al=2, Cl=6 e H=6 em cada lado. A não conserva H; D não conserva Cl nem H. B conserva os elementos, mas todos os coeficientes são o dobro da proporção mínima, por isso não atende ao pedido de menores inteiros positivos. Não se alterou nenhum índice de fórmula."
      },
      {
        "level": "intermediate",
        "prompt": "Exercício simbólico autoral: na equação de combustão completa C2H6 + O2 → CO2 + H2O, com esses produtos especificados, qual sequência fornece os menores coeficientes inteiros positivos na ordem apresentada?",
        "hint": "Use a, b, c e d: a conservação de C dá 2a=c; a de H dá 6a=2d; confira o total de O no final.",
        "options": [
          "2, 7, 4, 6.",
          "1, 3, 2, 3.",
          "2, 6, 4, 6.",
          "2, 7, 4, 3."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: 2 C2H6 + 7 O2 → 4 CO2 + 6 H2O conserva C=4, H=12 e O=14 em ambos os lados, com coeficientes sem divisor comum maior que um. B tem seis O à esquerda e sete à direita; C tem doze contra catorze; D não conserva H nem O. A relação é entre quantidades de espécies, e não uma igualdade entre suas massas individuais."
      },
      {
        "level": "advanced",
        "prompt": "Exercício simbólico autoral em meio ácido: balanceie Cr2O7^2- + H+ + I- → Cr^3+ + I2 + H2O. Qual sequência fornece os menores coeficientes inteiros positivos na ordem indicada, conservando átomos e carga?",
        "hint": "O dicromato é reduzido e o iodeto oxidado. Confira sete oxigênios, o hidrogênio da água e a carga total, além dos elétrons transferidos.",
        "options": [
          "1, 7, 6, 2, 3, 7.",
          "1, 14, 3, 2, 3, 7.",
          "1, 14, 6, 2, 6, 7.",
          "1, 14, 6, 2, 3, 7."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: Cr2O7^2- + 14 H+ + 6 I- → 2 Cr^3+ + 3 I2 + 7 H2O. Há dois Cr, sete O, catorze H e seis I em cada lado; a carga à esquerda é −2+14−6=+6 e à direita 2·(+3)=+6. Os dois Cr passam de +6 a +3 e recebem seis elétrons; seis I passam de −1 a zero e cedem seis. A falha em H e carga; B falha em I e carga; C falha em I, embora conservar carga sozinha não detecte esse erro."
      }
    ]
  }
];

export const authoredCurriculumBatch13ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Funções afim, quadrática e modular",
    "contentSha256": "c295b3665f22d85ac3524acd4ed87b06e0d87fc8af0b380a3bc81eed7c1c15c7",
    "draftMethod": "Autoria, álgebra e teste RED Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/college-algebra-2e/pages/3-2-domain-and-range",
      "https://openstax.org/books/college-algebra-2e/pages/4-1-linear-functions",
      "https://openstax.org/books/college-algebra-2e/pages/5-1-quadratic-functions",
      "https://openstax.org/books/college-algebra-2e/pages/3-6-absolute-value-functions"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "D, índice 3: a=(16−7)/(5−2)=3 e b=7−3·2=1. Para A, 3x−1 dá f(2)=5 e f(5)=14, falhando em ambos. B, x+5, dá 7 e 10; C, 2x+3, dá 7 e 13, atendendo somente ao primeiro dado. Apenas 3x+1 fornece simultaneamente 7 e 16. Correção desta descrição dos distratores pelo principal, com a crítica original preservada."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Funcao quadratica f(x)=-x^2+6x-5 no dominio R: reescrita por quadrado completo como -(x-3)^2+4, vértice (3,4), maximo 4 atingido em x=3, imagem (-inf,4]. A alternativa B troca entrada e valor, C inverte concavidade e extremo (minimo instead of maximo), e D impõe restrição de imagem [0,4] inexistente. O gabarito A esta matematicamente verificado."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Inequacao |2x-3|<=5 em R: equivalente a desigualdade composta -5<=2x-3<=5, resultando em -1<=x<=4. O conjunto solucao e [-1,4] com inclusao das fronteiras (nos extremos o modulo vale exatamente 5). A alternativa A representa |2x-3|>=5, B exclui indevidamente as fronteiras e D impõe restrição arbitria x>=0. O gabarito C esta matematicamente verificado."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Concordância, regência e crase",
    "contentSha256": "924f5085d7b90368ad8bd50baefd81eeaec829a86171ac18db2eaeea9b766a17",
    "draftMethod": "Autoria e análise gramatical Codex após rejeição factual de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://funag.gov.br/manual/index.php?title=Concord%C3%A2ncia_verbal",
      "https://ead.stf.jus.br/cursos/concordancia-verbal/Aula%205/aula5.html",
      "https://www12.senado.leg.br/manualdecomunicacao/estilos/anexo",
      "https://bd.tjmg.jus.br/bitstreams/d82f53d5-0c46-4469-bc60-164b747bbb15/download",
      "https://www12.senado.leg.br/manualdecomunicacao/estilos/crase"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Opcao C 'Deve haver revisoes; as tabelas seguem anexas' e correta: haver existencial e impessoal, mantem 'deve' no singular; 'seguem' concorda com 'tabelas' (plural) e 'anexas' concorda feminino plural com 'tabelas'. Opcao A 'devem haver' pluraliza indevidamente o auxiliar impersonal. Opcao B usa 'existir' que exige concordancia com o sujeito 'revisoes'. Opcao D quebra concordancia verbal e nominal."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Opcao A 'Prefiro a edição impressa à versão digital' segue a construcao formal preferir X a Y: 'a edição impressa' como complemento direto, 'à versão digital' com crase (fusao preposicao 'a' + artigo 'a' antes de 'versão' feminino). Opcao B usa 'do que' construcao diferente. Opcao C troca preposicao por 'de'. Opcao D omite acento grave exigido na fusao."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Opcao D 'à; a': primeira lacuna 'àquele' por fusao da preposicao 'a' com demonstrativo 'aquele' (que inicia em 'a'), independencia do genero do nome 'relatório'. Segunda lacuna 'a' sem crase antes do infinitivo 'participar' sem artigo feminino. Opcao A acentua indevidamente infinitivo e omite primeira fusao. Opcao B nega crase com demonstrativo. Opcao C acentua toda preposicao 'a' independentemente do contexto."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Literatura africana de língua portuguesa",
    "contentSha256": "daedaff8cb6c8170958d2a08ce7666146d33b1a5b8ff0e63359f956c8e0ba473",
    "draftMethod": "Autoria e conferência bibliográfica Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.instituto-camoes.pt/sobre/comunicacao/noticias/literaturas-africanas-de-lingua-portuguesa",
      "https://repositorio.unilab.edu.br/jspui/handle/123456789/6146",
      "https://periodicos.ufmg.br/index.php/cesp/article/view/65964",
      "https://pnlcv.cv/chiquinho/",
      "https://periodicos.unb.br/index.php/cerrados/article/view/45818",
      "https://www.uccla.pt/noticias/uccla-apoia-projeto-cancoes-para-abreviar-distancias-uma-viagem-pela-lingua-portuguesa"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Basic task: compared Lusophone African literatures in club scenario; verified option B (index 1) as correct since linguistic shared language enables approximation without erasing contextual particularities, directly contradicting A's genre uniformity mandate, C's national determination claim dispensing reading, and D's continental literature scope confusion; resolution independently confirmed and exceeds 80 characters in independent analysis"
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Intermediate task situating Pepetela's Mayombe in Angola's anti-colonial struggle; verified correct option D (index 3) that anti-colonial context contextualizes reading but doesn't convert fiction to neutral documentary, while requiring analysis of character and perspective construction; option A incorrectly obligatorily situates post-independence civil war, option B falsely proves literal real-person character concordance, and option C inappropriately dispenses other African literatures from single novel representation; resolution independently confirmed and exceeds 80 characters"
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Advanced microtext interpretation task with original Kognos text not from African work; verified correct option A (index 0) that oral transmission and written re-creation of memory are related but don't demonstrate narrative voice as real author, while respecting the created microtext's explicit modification of 'the beginning'; option B extrapolates to all continent writers without evidence, C contradicts 'troquei o começo,' and D confuses narrator and author with biographical identification - resolution independently confirmed and exceeds 80 characters"
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Planejamento e projeto de texto",
    "contentSha256": "1153f0a051dd009e39ba45318022deec477f5ded05a485f1d68d80fe4f503cc0",
    "draftMethod": "Autoria e verificação de comandos Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante",
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/enem-2026-cartilha-da-redacao-esta-disponivel",
      "https://www.fuvest.br/fuvest-2027-fuvest-anuncia-mudancas-para-as-proximas-edicoes-do-seu-vestibular/",
      "https://owl.purdue.edu/owl/general_writing/the_writing_process/developing_an_outline/how_to_outline.html",
      "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A alternativa 2 defende horários e canais de atendimento compatíveis com o período noturno e explica como enfrentam barreiras de acesso, impactando diretamente o recorte de ampliar acesso de estudantes noturnos a serviços bibliotecários, enquanto as outras opções omitem o problema delimitado ou mudam de objeto."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A alternativa 1 distingue a análise de impressões desnecessárias da discussão de procedimentos para evitá-las, atribuindo contribuições específicas a cada bloco e evitando a repetição presente no enunciado, ao contrário de manter a repetição (opção 0), inventar percentual (opção 2) ou inserir biografia unrelated (opção 3)."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A alternativa 3 restringe a tese à possibilidade condicionada discutida e explica os limites do exemplo hipotético, alinhando a promessa universal 'todo projeto escolar digital melhora a participação' à sustentação condicionada, ao contrário de conservar 'todo' com conectivo ilógico (opção 0), retirar condições (opção 1) ou inventar pesquisa (opção 2)."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Inferência de sentidos em inglês",
    "contentSha256": "bcf851120986b17c891596a6ad1efa6dea9bf223671b0390bf2c133e301602cb",
    "draftMethod": "Autoria e análise linguística Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.teachingenglish.org.uk/professional-development/teachers/teaching-knowledge-database/d-h/inference",
      "https://africa.teachingenglish.org.uk/classroom/activities/vocabulary-in-context"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "No excerpt, 'concise' is defined by the phrase 'three short sentences' and 'explained the whole procedure', which directly supports 'brief and direct in presenting the procedure' as the contextual meaning; option B invents deliberate falsity, option C contradicts the short extent, option D adds an unspecified language constraint unsupported by text."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Maya's 'How considerate of them!' after the bus leaves ten minutes early, leaving the group at the stop, is sarcastic; the praise 'considerate' contrasts with the negative consequence, sustaining an ironic criticism; option A takes it literally, option B attributes an unsupported decision by Maya, option D predicts an unscheduled bus not mentioned."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Conferência do principal: some students informa que estudantes consultados expressaram a expectativa, sem demonstrar que nenhum dos demais concorda; some não equivale a not all. Might help indica possibilidade, e a segunda frase nega que a alteração na frequência tenha sido verificada. D, índice3, respeita esses limites. A inventa aumento medido universal; B contradiz a expectativa relatada; C generaliza indevidamente para todas as escolas. O parecer original está preservado."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Presente do indicativo em espanhol",
    "contentSha256": "af21c26a099adadb53020ee8909a0112009447308079ba2a6551e3ccebd55214",
    "draftMethod": "Autoria e conferência linguística Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.rae.es/dpd/ayuda/modelos-de-conjugacion-verbal",
      "https://www.rae.es/dpd/usted",
      "https://www.rae.es/dpd/voseo",
      "https://www.rae.es/gtg/presente-de-indicativo"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Conferência e correção da justificativa pelo principal, mantendo o parecer original: C, índice 2: nosotras exige comemos, primeira pessoa plural de comer; ustedes exige viven, terceira pessoa plural de vivir. A usa terceira pessoa no primeiro espaço e primeira no segundo; B combina o primeiro corretamente com uma forma de vosotros no segundo; D usa coméis para vosotros e vive no singular. Os verbos são regulares, mas pessoa e número continuam decisivos."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Conferência e correção da justificativa pelo principal, mantendo o parecer original: A, índice 0: entiendo tem a alternância e→ie, enquanto entendemos conserva e na primeira pessoa plural. B cria formas que não correspondem ao paradigma solicitado; C fornece tú e vosotros; D fornece terceiras pessoas singular e plural. A mudança não pode ser excluída de yo nem estendida automaticamente a nosotros."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Conferência e correção da justificativa pelo principal, mantendo o parecer original: D, índice 3: viajamos é presente do indicativo neste contexto, com mañana situando a viagem no dia seguinte e os bilhetes comprados reforçando o plano. A confunde valor temporal com forma de futuro simples; B ignora o marcador; C impõe passado e uma contradição inexistente. A forma viajamos também pode coincidir com passado em outros contextos, mas não é a leitura sustentada aqui."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Hidrostática e pressão",
    "contentSha256": "645436c630f669e9feac5bc535ad6922d99c766adf8f87a4ed51f1a56e91368d",
    "draftMethod": "Autoria, cálculos e teste RED Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/college-physics/pages/11-3-pressure",
      "https://openstax.org/books/college-physics/pages/11-4-variation-of-pressure-with-depth-in-a-fluid",
      "https://openstax.org/books/college-physics-ap-courses-2e/pages/11-5-pascals-principle",
      "https://openstax.org/books/college-physics/pages/11-6-gauge-pressure-absolute-pressure-and-pressure-measurement",
      "https://openstax.org/books/college-physics/pages/11-7-archimedes-principle"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Na tarefa de pressão média, converte-se 40 cm² para 0,004 m² (fator quadrático de 0,01) e calcula-se p = F/A = 120/0,004 = 30000 Pa. A alternativa 30000 Pa (índice 1) é correta; 3 Pa e 300 Pa resultam de erros de conversão de unidades (não elevar ao quadrado ou converter linearmente); 4800 Pa resulta de multiplicar força por área. O gabarito index 1 coincide com o cálculo independente."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Na tarefa da prensa ideal, usa-se a razão de áreas A2/A1 = 100/4 = 25 para encontrar F2 = F1·(A2/A1) = 60·25 = 1500 N. Pela conservação de volume A1d1 = A2d2, obtém-se d2 = d1·(A1/A2) = 25·4/100 = 1 cm. O trabalho de entrada 60·0,25 = 15 J iguala o trabalho de saída 1500·0,01 = 15 J. A alternativa F2=1500 N e d2=1 cm (índice 3) é correta; a alternativa com deslocamento 25 cm ignora conservação de volume; a alternativa com F2=240 N usa razão de área incorreta (4 em vez de 25). O gabarito index 3 corresponde ao cálculo independente."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Na tarefa de empuxo e tração, converte-se 2 L para 0,002 m³ e calcula-se empuxo E = ρ·g·V = 1000·10·0,002 = 20 N para cima. O peso do corpo é P = m·g = 3·10 = 30 N para baixo. Pelo equilíbrio T + E − P = 0, tem-se T = P − E = 10 N para cima. A alternativa empuxo 20 N para cima e tração 10 N para cima (índice 0) é correta; a alternativa B ignora o volume deslocado e iguala empuxo ao peso; a alternativa C desconsidera o empuxo; a alternativa D inverte sentidos. O gabarito index 0 coincide com a derivação independente."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Reações e balanceamento",
    "contentSha256": "b3e5a397936bc721854e43f715c17337b37a1d3385b794ccb302861aa0e56a63",
    "draftMethod": "Autoria, balanços de átomos/carga e teste RED Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations",
      "https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions",
      "https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Conferência do principal: C, índice2, tem coeficientes 2,6,2,3, com Al2/H6/Cl6 dos dois lados e MDC1. B, 4,12,4,6, também conserva todos os átomos, mas MDC2 e portanto não atende ao pedido de menores inteiros positivos. A, 1,3,1,1, falha em H; D, 2,3,2,3, falha em H e Cl. Na ordem significa associar coeficientes às espécies indicadas, não exigir números consecutivos. Parecer original preservado."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "O exercício intermediário de combustão completa C2H6 + O2 → CO2 + H2O, alternativa A (2,7,4,6) conserva C=4, H=12 e O=14 em ambos os lados, com coeficientes sem divisor comum maior que um, enquanto as demais falham na conservação de pelo menos um elemento."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "O exercício avançado de balanceio iónico Cr2O7^2- + H+ + I- → Cr^3+ + I2 + H2O, alternativa D (1,14,6,2,3,7) conserva dois Cr, sete O, catorze H e seis I em cada lado, com carga total +6 em ambos os lados, e equaliza seis elétrons na transformação redox em meio ácido."
      }
    ]
  }
] as const;
