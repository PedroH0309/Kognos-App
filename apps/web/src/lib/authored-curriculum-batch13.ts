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
  },
  {
    "subject": "Biologia",
    "topic": "Hereditariedade, mutações e biotecnologia",
    "objective": "Relacionar transmissão de variantes, efeitos de mutações e finalidades de técnicas biotecnológicas, reconhecendo condições e limites sem determinismo genético.",
    "prerequisites": [
      "DNA, genes e cromossomos",
      "Meiose, gametas e fecundação",
      "Síntese de proteínas e leitura em trincas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Herança, variantes e ambiente",
        "explanation": "Hereditariedade envolve a transmissão de informação genética entre gerações. Genes ocupam regiões do material genético; variantes de um mesmo gene podem ser chamadas de alelos. Em um modelo diploide autossômico simples, um indivíduo recebe um alelo de cada progenitor em determinado locus. Na meiose, os alelos se separam na formação de gametas, e a fecundação reúne contribuições; recombinação e segregação podem gerar novas combinações sem necessariamente criar novos alelos. O genótipo descreve a constituição genética considerada; o fenótipo corresponde a características observáveis, resultantes de relações entre constituição genética, desenvolvimento e ambiente. Nem toda característica depende de apenas um gene com dois alelos e dominância completa. Dominante não significa mais frequente, melhor ou mais forte; descreve uma relação de expressão fenotípica em um modelo e contexto. Uma mutação pode introduzir uma variante nova, em vez de apenas recombinar variantes existentes. Na reprodução sexuada humana, uma alteração restrita a células somáticas, como certas células da pele, não passa aos descendentes por gametas; uma variante presente na linhagem germinativa pode ser transmitida, sem que isso obrigue todos os descendentes a recebê-la. Essa distinção não deve ser transformada em regra sobre toda forma de reprodução: organismos que se multiplicam a partir de tecidos vegetativos têm outras possibilidades de transmissão. Conhecer uma variante não determina automaticamente todas as características de uma pessoa, nem permite hierarquizar indivíduos ou grupos.",
        "steps": [
          "Defina o locus e o modelo de herança em análise.",
          "Diferencie transmissão de alelos, recombinação e origem de variantes.",
          "Relacione genótipo e ambiente ao fenótipo sem reduzir tudo a um gene.",
          "Identifique a linhagem celular e a forma de reprodução antes de concluir transmissão."
        ],
        "example": "Situação autoral: duas mudas geneticamente iguais são cultivadas sob condições diferentes e desenvolvem alturas distintas. O resultado é compatível com influência ambiental no fenótipo; não demonstra que a mudança de altura tenha alterado obrigatoriamente a sequência do DNA. Identidade genética considerada não equivale a destino fenotípico idêntico.",
        "pitfall": "Confundir dominante com superior, proporção genética com certeza por família ou qualquer mudança adquirida com variante transmitida por gametas."
      },
      {
        "level": "intermediate",
        "title": "Mutações: posição, tipo e consequência",
        "explanation": "Mutações são alterações da sequência de DNA, que podem surgir em processos de replicação ou por ação de agentes mutagênicos, entre outras causas. Seus efeitos dependem do local, do tipo de alteração e do contexto; não são necessariamente prejudiciais nem surgem dirigidas para atender a uma necessidade do organismo. Algumas variantes são neutras em certo contexto, outras afetam sobrevivência ou reprodução. Uma substituição troca uma base; uma inserção acrescenta bases e uma deleção remove bases. Em uma região codificante lida em trincas, inserções ou deleções cujo tamanho não é múltiplo de três podem deslocar o quadro de leitura a partir da alteração. Remover três bases preserva o agrupamento posterior nesse modelo, mas não garante que a proteína mantenha sua função: a identidade de um aminoácido, uma região reguladora ou outros sinais relevantes podem ser afetados. Substituições em regiões codificantes podem conservar o aminoácido, trocar um aminoácido ou gerar uma parada prematura, conforme a sequência; fora delas, podem afetar regulação ou não apresentar efeito detectado. Um códon de parada sinaliza término da tradução e não representa um aminoácido comum no código genético padrão. Retirá-lo não equivale simplesmente a retirar um aminoácido. Uma classificação da mudança descreve parte do problema, mas não estabelece diagnóstico ou consequência clínica individual. Para analisar um exercício, explicite fita, direção, ponto de início e condições do modelo, em vez de converter toda alteração de DNA na mesma previsão sobre a proteína.",
        "steps": [
          "Localize a alteração e identifique substituição, inserção ou deleção.",
          "Defina se o trecho é codificante e como a leitura foi estabelecida.",
          "Confira o tamanho da alteração e a preservação ou mudança de quadro.",
          "Distinga efeito na sequência, função e consequência no organismo."
        ],
        "example": "Modelo autoral de sequência codificante lida a partir da primeira base: ATG CAA GGT. A substituição de uma base em CAA por CTA conserva o número de bases e o agrupamento em trincas; isso não demonstra função inalterada. A análise de quais aminoácidos seriam codificados exigiria aplicar o código genético, e não apenas contar as letras.",
        "pitfall": "Dizer que toda deleção desloca o quadro, que preservar o quadro garante função ou que um códon de parada codifica um aminoácido a ser removido."
      },
      {
        "level": "advanced",
        "title": "Biotecnologia: distinguir copiar, ler e modificar",
        "explanation": "Biotecnologia emprega organismos, células ou componentes biológicos em finalidades técnicas; não se restringe à edição de DNA, incluindo usos tradicionais como fermentação. Nas técnicas de material genético, diferencie finalidades. PCR amplifica um segmento de DNA: gera cópias para análise, selecionando o trecho por iniciadores e síntese repetida. Sequenciamento identifica a ordem das bases; ele não modifica automaticamente o genoma que está sendo estudado. Clonagem molecular produz cópias de fragmentos e pode empregar vetores, como plasmídeos; não equivale à clonagem reprodutiva de um organismo inteiro. Engenharia genética pode alterar DNA por inserções, remoções ou mudanças de bases. Um organismo transgênico recebeu artificialmente sequência de DNA de outra espécie; nem toda edição consiste em inserir material de outra espécie. Sistemas baseados em CRISPR foram adaptados de mecanismos bacterianos e podem direcionar modificações; o resultado pretendido precisa ser verificado, pois a técnica não garante precisão ou efeito funcional por seu nome. Benefícios e riscos dependem do organismo, da alteração, da finalidade e do contexto, não de uma oposição simples entre natural e artificial. Ao ler uma alegação, pergunte qual técnica foi empregada, o que foi medido e o que continua sem demonstração. Produzir cópias ou observar uma sequência não prova correção de uma variante, função de uma proteína, segurança ambiental ou eficácia terapêutica. Discussões éticas incluem finalidade, consequências, consentimento e proteção de dados quando houver pessoas envolvidas. Esta aula trabalha conceitos e casos hipotéticos; não interpreta exames pessoais, coleta informação de saúde ou apresenta protocolo de edição genética.",
        "steps": [
          "Identifique se a finalidade é amplificar, determinar sequência, clonar ou modificar.",
          "Separe resultado molecular de efeito funcional e de aplicação prática.",
          "Confira evidências de resultado pretendido e efeitos não pretendidos.",
          "Analise finalidade e consequências sem presumir segurança ou perigo universais."
        ],
        "example": "Caso autoral: uma equipe hipotética amplifica um fragmento e depois determina sua sequência. Ela pode comparar a ordem das bases obtida com uma referência, mas essas operações não demonstram que o DNA das células originais tenha sido corrigido. Também não equivalem à criação de um organismo clonado; as técnicas respondem a perguntas diferentes.",
        "pitfall": "Confundir PCR com edição, sequenciamento com terapia ou toda modificação genética com transgenia; deduzir precisão e segurança apenas do nome da técnica."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Caso autoral sobre reprodução sexuada humana: uma variante é detectada apenas em uma linhagem de células da pele de uma pessoa, sem presença na linhagem germinativa segundo as hipóteses do exercício. Qual conclusão é adequada?",
        "hint": "Diferencie células somáticas e linhagem que pode contribuir para os gametas, sem acrescentar certeza de transmissão.",
        "options": [
          "A variante será transmitida obrigatoriamente a todos os descendentes, por estar em qualquer célula do corpo.",
          "A alteração transforma automaticamente todos os genes de todos os gametas da pessoa.",
          "A variante prova superioridade biológica da pessoa em relação a indivíduos sem ela.",
          "A variante somática descrita não é transmitida por gametas nessa situação; isso não define toda forma de reprodução dos organismos."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: o caso delimita uma alteração somática sem presença na linhagem germinativa, no contexto de reprodução sexuada humana. Não há via de transmissão por gametas nas hipóteses dadas. A universaliza transmissão; B inventa modificação de todos os gametas; C atribui hierarquia sem fundamento. A conclusão respeita o caso e não exclui outras formas de transmissão em organismos com reprodução vegetativa."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo autoral: a fita codificante 5′-ATGAAACCCGGG-3′ é lida em trincas desde a primeira base, sem processamento adicional. A remove apenas a base da posição 4; B remove as posições 4 a 6. Qual comparação é correta sobre o quadro posterior à alteração?",
        "hint": "Agrupe a sequência em trincas e compare remover uma base com remover três; não confunda preservar o quadro com garantir a função da proteína.",
        "options": [
          "A e B preservam obrigatoriamente a mesma proteína e sua função, pois ambas são deleções.",
          "A desloca o quadro a partir da alteração; B preserva o quadro, sem garantir função proteica inalterada.",
          "A preserva o quadro e B o desloca, pois três é sempre incompatível com leitura em trincas.",
          "A e B tornam obrigatoriamente todas as bases restantes códons de parada."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: o original agrupa ATG AAA CCC GGG. A gera ATG AAC CCG GG, mudando o agrupamento após a retirada de uma base; B gera ATG CCC GGG e mantém o quadro posterior ao retirar três bases. Preservar quadro não garante a mesma sequência proteica nem função. A promete identidade funcional sem apoio; C inverte os efeitos; D inventa paradas sem aplicar o código. Os grupos finais dependem do modelo explicitado, e as letras isoladas não autorizam diagnóstico."
      },
      {
        "level": "advanced",
        "prompt": "Caso autoral: uma equipe anuncia que amplificou por PCR um trecho de DNA e confirmou sua sequência. Sem evidência adicional de modificação das células originais, qual afirmação respeita o que foi realizado?",
        "hint": "Diferencie copiar e ler um trecho de modificar um genoma e comprovar resultado funcional.",
        "options": [
          "Foram produzidas cópias e analisada uma sequência; isso não demonstra edição corretiva do genoma original nem sua segurança.",
          "A PCR corrigiu necessariamente todas as variantes em todas as células do organismo.",
          "Determinar a sequência prova que a equipe clonou um organismo inteiro geneticamente idêntico.",
          "A ausência de um procedimento de edição prova que o fragmento analisado não contém qualquer variante."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: amplificação e leitura permitem obter e analisar cópias, mas não comprovam modificação das células originais nem efeitos funcionais ou segurança de uma aplicação. B atribui edição universal à PCR; C confunde análise de fragmento com clonagem reprodutiva; D transforma ausência de edição em ausência de variantes, uma conclusão sem relação necessária. O caso é hipotético e não apresenta teste clínico individual."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Brasil colonial e escravidão",
    "objective": "Relacionar administração, atividades econômicas e escravização na América portuguesa, reconhecendo diversidade regional, ação dos sujeitos e limites das fontes históricas.",
    "prerequisites": [
      "Expansão marítima e colonização",
      "Diferença entre fonte histórica e interpretação",
      "Trabalho compulsório, comércio e poder"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Colonização, administração e economias conectadas",
        "explanation": "A expressão Brasil colonial é uma forma de estudar a América portuguesa, sem presumir que o território, a sociedade e o Estado nacional atuais já existissem prontos. A colonização se desenvolveu sobre espaços ocupados por povos indígenas diversos, envolvendo conquista, alianças, violência e transformação de relações econômicas. No século XVI, a Coroa distribuiu capitanias hereditárias a donatários para promover ocupação e exploração sob autoridade portuguesa. A criação do governo-geral em 1548, com a chegada de Tomé de Sousa em 1549, buscou maior coordenação; não extinguiu imediatamente todas as capitanias hereditárias. A administração reuniu autoridades régias e poderes locais, com interesses que podiam convergir ou entrar em conflito. A produção de açúcar articulou lavouras, beneficiamento, financiamento e comércio atlântico. Engenho pode designar o conjunto produtivo, além da instalação de moagem; não se trata apenas de uma plantação. A mineração, intensificada entre o fim do século XVII e o XVIII, ampliou movimentos populacionais, abastecimento e fiscalização, sem fazer desaparecer a produção agrícola. Gado, alimentos, transportes e comércio interno também sustentavam a sociedade colonial. A orientação exportadora de atividades importantes não significa ausência de trocas locais nem sucessão de ciclos em que uma atividade apaga por completo as outras. Para interpretar esse conjunto, relacione trabalho, circulação de mercadorias, poder e diferenças de tempo e região, evitando reduzir três séculos a uma estrutura imóvel.",
        "steps": [
          "Delimite espaço e período sem projetar o Estado atual sobre a colônia.",
          "Diferencie capitanias, coordenação régia e atuação local.",
          "Relacione produção exportadora a trabalho, transporte e abastecimento.",
          "Observe coexistências e mudanças em vez de ciclos que eliminariam toda atividade anterior."
        ],
        "example": "Situação didática autoral: um engenho vende açúcar para o comércio atlântico e compra alimentos e animais de outros produtores. O caso mostra que exportação pode depender de circuitos internos de abastecimento. Ele não prova que todos os engenhos comprassem os mesmos produtos nem que desaparecessem os interesses metropolitanos.",
        "pitfall": "Supor território nacional pronto, extinção imediata das capitanias pelo governo-geral ou inexistência de mercado interno por causa da exportação."
      },
      {
        "level": "intermediate",
        "title": "Escravização indígena e tráfico atlântico",
        "explanation": "A escravidão colonial era uma relação de coerção e poder que transformava pessoas em propriedade sob a ordem vigente e submetia seu trabalho e sua vida a controle violento. Povos indígenas foram escravizados e também submetidos a outras formas de trabalho e domínio; normas restritivas, disputas e exceções não produziram uma proteção uniforme nem encerraram imediatamente a prática. A expansão da escravização de africanos se relacionou a redes mercantis atlânticas, interesses de colonizadores e negociantes e transformações regionais na demanda de trabalho. Não resulta de uma suposta inferioridade natural de indígenas nem de uma aptidão biológica de africanos para o cativeiro. Pessoas trazidas da África tinham origens, línguas e conhecimentos diversos, e não compunham uma população culturalmente homogênea. O tráfico envolvia captura, deslocamento forçado, comércio e violência; a participação de agentes em diferentes pontos da rede não reduz o papel dos interesses coloniais nem torna livre a escolha dos escravizados. A presença africana cresceu de maneiras desiguais conforme lugar e atividade, coexistindo com trabalho indígena e com trabalhadores livres. O trabalho escravizado não se limitou aos canaviais: alcançou mineração, serviços, transporte e ambientes urbanos. Também não se deve identificar toda a população negra da colônia com condição cativa, pois existiam pessoas libertas e livres, ainda em uma sociedade profundamente hierarquizada. Reconhecer essa complexidade não suaviza a violência estrutural; permite examinar de modo mais preciso como ela operava e era contestada.",
        "steps": [
          "Identifique quem controlava trabalho e condição jurídica, sem naturalizar a coerção.",
          "Considere coexistência de formas de trabalho e diferenças regionais.",
          "Relacione tráfico e escravização a redes e interesses históricos.",
          "Reconheça diversidade de origens e condições sem apagar a violência do sistema."
        ],
        "example": "Comparação autoral de conceitos: uma restrição da Coroa à escravização indígena e uma denúncia de captura podem ser analisadas conjuntamente para investigar distância entre norma e prática. A existência da regra não prova cumprimento universal; a denúncia também precisa ser situada e confrontada com outras evidências, sem ser convertida automaticamente em descrição de todo o território.",
        "pitfall": "Explicar escravidão por traços naturais de um povo, tratar africanos como grupo homogêneo ou confundir proibição escrita com desaparecimento imediato da prática."
      },
      {
        "level": "advanced",
        "title": "Resistências, sujeitos e leitura crítica de fontes",
        "explanation": "Pessoas escravizadas não aceitaram passivamente a ordem colonial. Fugas, formação de quilombos, enfrentamentos e construção de vínculos de apoio compuseram resistências, com formas e objetivos variados. Quilombos não eram todos iguais nem necessariamente isolados: podiam manter relações de troca, conflito e negociação com populações ao redor. Palmares, na região da Serra da Barriga, tornou-se uma referência de resistência e reuniu experiências culturais e políticas que não se resumem a uma aldeia uniforme. Reconhecer ação histórica não significa negar a desigualdade de forças ou afirmar que toda negociação era livre e sem coerção. Para estudar esse universo, pergunte quem produziu o documento, para qual destinatário, com que finalidade e em quais circunstâncias. Uma ordem de captura revela intenção repressiva, mas não prova sozinha que a operação foi executada como planejado. Um registro de venda pode indicar circulação de mercadorias, sem quantificar toda a economia de uma região. Textos de autoridades frequentemente descrevem fugitivos pela perspectiva de quem procurava controlá-los; suas categorias devem ser analisadas, não assumidas como verdade neutra sobre as pessoas. Cruze fontes escritas, vestígios materiais e estudos, distinguindo testemunho, hipótese e interpretação. A memória pública de Palmares e da escravidão é também construída em outros tempos; um monumento atual não é uma fotografia direta da vida colonial. A ruptura de um vínculo político com a metrópole não equivale, por si, ao fim das hierarquias e relações de trabalho, e o estudo das continuidades exige seguir seus processos específicos.",
        "steps": [
          "Reconheça formas diversas de resistência e seus contextos.",
          "Identifique produtor, finalidade e perspectiva de cada fonte.",
          "Separe intenção registrada, ação executada e alcance da evidência.",
          "Relacione outras fontes e distinga história colonial de memória posterior."
        ],
        "example": "Exercício metodológico autoral: comparar uma planta administrativa, uma lista de mercadorias e vestígios de moradia pode revelar aspectos diferentes de um mesmo espaço colonial. A planta mostra uma representação de organização; não registra necessariamente todo o uso real do lugar. A combinação de fontes ajuda a formular hipóteses sem fingir que cada documento responde a todas as perguntas.",
        "pitfall": "Retratar escravizados como passivos, todo quilombo como isolado ou o vocabulário de uma autoridade repressora como descrição neutra das pessoas."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Caso autoral de revisão: uma ficha diz que a criação do governo-geral em 1548 extinguiu imediatamente todas as capitanias hereditárias e eliminou poderes locais. Qual correção é historicamente adequada?",
        "hint": "Diferencie uma tentativa de coordenação e centralização da substituição total e instantânea de instituições.",
        "options": [
          "A ficha está correta, pois uma nova autoridade eliminava automaticamente qualquer forma anterior de administração.",
          "O governo-geral buscou coordenação régia, mas capitanias e poderes locais continuaram existindo, com relações e conflitos próprios.",
          "A correção é afirmar que os donatários se tornaram soberanos independentes de Portugal.",
          "A mudança encerrou a colonização e aboliu de imediato qualquer forma de trabalho compulsório."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: a coordenação régia não significou extinção instantânea das capitanias hereditárias nem de poderes locais. A confunde criação institucional com eliminação total; C atribui soberania independente aos donatários; D inventa fim da colonização e do trabalho compulsório. A análise deve distinguir os objetivos da medida e o funcionamento histórico das instituições."
      },
      {
        "level": "intermediate",
        "prompt": "Atividade autoral: qual explicação relaciona de forma adequada a expansão do trabalho africano escravizado na América portuguesa e a presença de trabalho indígena?",
        "hint": "Procure uma relação histórica entre interesses e redes, sem transformar diferenças humanas em aptidões naturais para a escravidão.",
        "options": [
          "Africanos teriam nascido naturalmente destinados ao cativeiro, por isso não havia interesses econômicos envolvidos.",
          "Os povos indígenas nunca foram submetidos a trabalho compulsório na colonização portuguesa.",
          "Toda mudança foi instantânea e idêntica em todas as regiões, sem coexistência de formas de trabalho.",
          "A expansão ligou-se a redes e interesses do tráfico e da produção, com ritmos regionais e coexistência de trabalho indígena e outras relações."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a explicação articula redes mercantis, demanda de trabalho e diferenças de tempo e espaço. A naturaliza e racializa uma relação histórica de violência; B apaga a escravização indígena; C inventa uniformidade e substituição instantânea. A coerção não se explica por aptidão biológica de um povo, e reconhecer coexistências não diminui a centralidade da escravidão."
      },
      {
        "level": "advanced",
        "prompt": "Composição didática autoral, não documento de arquivo: Texto A relata o pedido de uma autoridade para capturar fugitivos; Texto B menciona trocas de alimentos com um quilombo. Qual interpretação respeita o alcance desses fragmentos?",
        "hint": "Diferencie pedido e execução e considere que uma relação de troca não exclui coerção ou resistência.",
        "options": [
          "A indica intenção repressiva; B sugere relações de troca. É preciso cruzar evidências, sem concluir execução do pedido nem isolamento absoluto do quilombo.",
          "O pedido de A comprova automaticamente que toda a captura ocorreu e não houve resistência.",
          "B prova que todo quilombo era isolado e incapaz de manter relações com outras populações.",
          "As trocas citadas em B demonstram que a escravidão deixou de envolver violência em toda a colônia."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: o pedido registra intenção, e as trocas são indício de relação com outros agentes no caso composto. Não demonstram sozinhos execução da captura nem ausência de conflitos. B transforma solicitação em resultado garantido; C contradiz o contato descrito; D generaliza trocas para negar violência estrutural. Os fragmentos são inventados para a atividade e não devem ser atribuídos a um arquivo ou personagem real."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Urbanização e redes urbanas",
    "objective": "Distinguir urbanização, crescimento e expansão física, interpretar relações entre cidades e avaliar desigualdades de acesso a oportunidades com indicadores adequados.",
    "prerequisites": [
      "População absoluta e relativa",
      "Porcentagens e pontos percentuais",
      "Fluxos, território e serviços"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Urbanização, população e forma do espaço",
        "explanation": "Urbanização é um processo de transformação da organização social e territorial ligado às cidades. Na dimensão demográfica, a taxa ou grau de urbanização expressa a parcela da população que reside em áreas classificadas como urbanas: população urbana dividida pela população total, multiplicada por cem. Crescimento urbano em número de habitantes e aumento dessa participação não são a mesma coisa. A população urbana pode crescer enquanto sua parcela no total diminui, caso o total cresça proporcionalmente mais. Também não confunda esse percentual com a parcela do território coberta por edificações: população e área física são grandezas diferentes. A expansão da mancha urbanizada descreve formas construídas e sua continuidade; um perímetro administrativo não coincide necessariamente com toda a ocupação observada. Para comparar dados, confira classificação, recorte territorial, data e denominador, pois mudanças de delimitação podem influenciar os resultados. No Brasil, industrialização, mudanças no campo, migrações e concentração de atividades e serviços participaram da urbanização, sem explicar todos os lugares por uma causa única. O espaço rural não desaparece quando a população urbana se torna predominante, e relações entre campo e cidade continuam relevantes. Um indicador agregado descreve uma dimensão do processo, mas não informa sozinho a qualidade das moradias, o acesso a infraestrutura ou a distribuição de oportunidades. Ao dizer que uma taxa passou de um valor a outro, diferencie mudança em pontos percentuais de variação relativa sobre a taxa inicial.",
        "steps": [
          "Separe população urbana, população total e área urbanizada.",
          "Calcule a participação com denominador e classificação explícitos.",
          "Compare números absolutos, percentuais e pontos percentuais.",
          "Relacione o indicador a processos históricos sem extrair dele toda a qualidade urbana."
        ],
        "example": "Exemplo autoral: um território tem 8000 moradores urbanos entre 10000 residentes, taxa de 80%. Outro tem 12000 urbanos entre 20000 residentes, taxa de 60%. O segundo possui mais moradores urbanos em número, mas menor participação urbana. Os dois casos são fictícios e não correspondem a municípios reais nem permitem comparar infraestrutura.",
        "pitfall": "Confundir percentual de habitantes com percentual de área, crescimento absoluto com aumento de participação ou pontos percentuais com variação percentual relativa."
      },
      {
        "level": "intermediate",
        "title": "Redes, centralidades e integração entre municípios",
        "explanation": "Uma rede urbana reúne cidades e relações de circulação de pessoas, bens, informação e decisões. Centralidade expressa a capacidade de um centro oferecer funções e influenciar outras localidades; não é simplesmente sua posição no mapa ou seu número de habitantes. Uma cidade pode atrair usuários de serviços especializados, enquanto depende de outro centro para funções diferentes. Hierarquia não significa que só existam deslocamentos entre cidades de classes imediatamente vizinhas, nem que todos os fluxos passem obrigatoriamente pela capital estadual. Na REGIC 2018, o IBGE analisou hierarquia e regiões de influência considerando gestão e oferta de equipamentos e serviços; seus cinco níveis principais são Metrópoles, Capitais Regionais, Centros Sub-Regionais, Centros de Zona e Centros Locais. Trata-se do recorte da pesquisa indicada, não de uma lista de grandezas populacionais fixas e universais. A unidade de análise pode reunir municípios fortemente integrados, em vez de tratar cada limite municipal como um nó isolado. Deslocamentos frequentes para trabalho e estudo ajudam a perceber essa integração e não equivalem, por si, à mudança permanente de residência. Conurbação envolve continuidade física entre manchas urbanizadas; integração funcional também pode ocorrer sem continuidade construída completa. Uma região metropolitana instituída administrativamente não demonstra sozinha que toda a sua área esteja conurbada. Ao interpretar mapa ou descrição de fluxos, identifique o que as ligações representam e o período observado, sem transformar uma seta em prova de dependência para todas as atividades.",
        "steps": [
          "Identifique os centros e a natureza dos fluxos entre eles.",
          "Relacione centralidade a funções e serviços, sem reduzi-la à população.",
          "Diferencie deslocamento frequente e migração de residência.",
          "Separe continuidade física, integração funcional e recorte administrativo."
        ],
        "example": "Rede didática autoral: moradores de Vila Norte estudam em Cidade Lago e retornam para casa; empresas de ambas contratam serviços de Centro Vale. Os fluxos revelam relações de estudo e de serviços, mas não demonstram que os três núcleos formem uma mancha construída contínua, nem que todas as funções se concentrem em um único centro.",
        "pitfall": "Ordenar influência somente por população, considerar deslocamento diário uma migração permanente ou confundir região administrativa com conurbação integral."
      },
      {
        "level": "advanced",
        "title": "Desigualdades e acesso a oportunidades",
        "explanation": "As relações entre cidades e os deslocamentos dentro delas são vividos de modo desigual. Segregação socioespacial envolve distribuição desigual de grupos e condições de acesso, relacionada a renda, mercado de terras e moradia, infraestrutura e decisões públicas, entre outros processos. Não se explica por uma suposta incapacidade natural dos moradores de um bairro. Acessibilidade urbana é a facilidade de alcançar oportunidades como emprego, escola, atendimento e lazer; depende tanto de transporte e conexão quanto da localização das pessoas e atividades. Duas moradias à mesma distância em linha reta de um serviço podem ter acessos diferentes por barreiras físicas, trajetos disponíveis, frequência, custo e condições de deslocamento. A velocidade média dos veículos mede uma característica da circulação, mas não demonstra sozinha inclusão de quem caminha, usa bicicleta ou transporte coletivo. Para avaliar uma proposta, defina oportunidades consideradas, tempo e custo admissíveis, modos de transporte e grupos comparados. Médias de uma cidade podem esconder diferenças entre bairros e horários. Uma nova ligação pode reduzir certa viagem sem resolver todas as necessidades; compare antes e depois e investigue outros fatores antes de atribuir qualquer mudança exclusivamente à intervenção. Planejamento pode combinar localização de serviços, moradia e transporte, e suas consequências devem ser avaliadas segundo os objetivos e as pessoas afetadas. Um mapa de fluxos ou um índice de urbanização não demonstra automaticamente segurança, sustentabilidade ou justiça na distribuição de oportunidades.",
        "steps": [
          "Identifique quais grupos, lugares e oportunidades estão sendo comparados.",
          "Considere tempo, custo, conexões e modos além da distância geométrica.",
          "Use indicadores adequados e observe diferenças escondidas pelas médias.",
          "Avalie efeitos e limites da proposta sem prometer solução universal."
        ],
        "example": "Situação autoral: dois bairros ficam a quatro quilômetros de uma escola. Um tem rota contínua e serviço frequente; outro exige uma travessia longa e espera maior. A mesma distância não implica o mesmo acesso. Uma avaliação precisa incluir o caminho viável e as condições de uso, sem atribuir os resultados a características naturais dos moradores.",
        "pitfall": "Confundir velocidade de automóveis com acesso de toda a população, usar a média para negar desigualdades locais ou afirmar causalidade apenas porque algo mudou depois da obra."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Dados autorais fictícios, com a mesma classificação urbana nos dois momentos: no primeiro, 2000 residentes urbanos de 5000 totais; no segundo, 3000 urbanos de 10000 totais. Qual comparação das taxas é correta?",
        "hint": "Calcule urbanos/total em cada momento e compare participação e número absoluto separadamente.",
        "options": [
          "De 40% para 60%; a taxa necessariamente aumenta sempre que há mais moradores urbanos.",
          "De 20% para 30%; basta dividir sempre a população urbana pelo total do segundo momento.",
          "De 40% para 30%; a população urbana aumenta em número e perde participação no total.",
          "De 60% para 70%; a taxa urbana é a fração rural restante em cada momento."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: 2000/5000·100=40% e 3000/10000·100=30%. Há mil moradores urbanos a mais, mas redução de dez pontos percentuais na participação; a queda relativa da taxa é 10/40=25%, uma medida diferente. A confunde aumento absoluto com participação; B troca o denominador inicial; D usa a parcela rural como se fosse urbana. Os números são hipotéticos, sem atribuição a um censo real."
      },
      {
        "level": "intermediate",
        "prompt": "Rede fictícia: a Cidade A recebe moradores de outras localidades para serviços especializados e decisões empresariais. A Cidade B tem mais habitantes, mas a descrição não informa oferta comparável dessas funções. Qual conclusão é sustentada?",
        "hint": "Considere funções e relações descritas, sem transformar tamanho populacional em critério único ou atribuir uma classe oficial sem pesquisa.",
        "options": [
          "B obrigatoriamente influencia mais localidades em todas as funções apenas por ter mais habitantes.",
          "A apresenta indícios de centralidade nas funções citadas; isso não permite classificar toda a rede apenas pelo tamanho populacional.",
          "As relações descritas provam que A e B possuem continuidade física de edificações em todo o espaço entre elas.",
          "Receber usuários de serviços significa necessariamente que todos migraram de residência de forma permanente."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: a atração para serviços e decisões é indício de centralidade funcional, e a comparação exige informações sobre relações e oferta. A impõe população como critério único; C inventa conurbação sem informação sobre a mancha construída; D confunde deslocamentos de usuários com mudança permanente. O caso não autoriza atribuir às cidades fictícias uma classe específica da REGIC."
      },
      {
        "level": "advanced",
        "prompt": "Caso autoral: uma proposta afirma que elevar a velocidade média dos carros garante, sozinho, melhor acesso de todos os bairros a escolas e empregos. Qual avaliação enfrenta melhor o limite dessa afirmação?",
        "hint": "Acesso inclui oportunidades alcançáveis por pessoas que usam modos diferentes e enfrentam custos e tempos distintos.",
        "options": [
          "Aceitar a garantia para todos, pois a velocidade de carros descreve integralmente as condições de quem caminha.",
          "Examinar apenas a distância em linha reta e ignorar rotas, custos e horários.",
          "Usar exclusivamente a média municipal para concluir que não existem diferenças entre bairros.",
          "Comparar oportunidades acessíveis por tempo, custo e diferentes modos e grupos, além da velocidade média de veículos."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a avaliação relaciona oportunidades e condições de deslocamento para grupos e modos diversos. A universaliza uma métrica de automóveis; B ignora a rede e barreiras; C apaga diferenças que uma média pode esconder. Melhorar certa velocidade pode ajudar alguns trajetos, mas não comprova sozinho a garantia de acesso universal afirmada no caso."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Mito e filosofia",
    "objective": "Comparar funções de narrativas míticas e investigação filosófica, reconhecer transformações na tradição grega e avaliar razões sem reduzir mito a mentira ou filosofia a certeza infalível.",
    "prerequisites": [
      "Narrativa, explicação e argumento",
      "Contextualização histórica",
      "Tese, razão e objeção"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Distinguir formas de dar sentido sem caricaturas",
        "explanation": "Mitos podem organizar narrativamente origens, relações com o sagrado, valores e experiências de uma coletividade. No estudo de tradições antigas, o termo não equivale simplesmente ao uso cotidiano de mito como informação falsa a ser desmentida. Uma narrativa pode ter importância simbólica e cultural sem funcionar como demonstração de uma hipótese física. A investigação filosófica, por sua vez, formula perguntas e procura explicitar conceitos, razões e dificuldades: o que a tese quer dizer, por que aceitá-la e quais objeções a atingem? A comparação didática entre mythos e logos ajuda a perceber modos de justificar e comunicar, mas não deve se tornar uma oposição entre pessoas incapazes de pensar e pessoas superiores. Narrar não impede toda reflexão, e apresentar um argumento não garante que ele seja válido ou que suas premissas sejam verdadeiras. Também não basta negar uma tradição para produzir filosofia: a negação pode continuar sem sustentação. Ao analisar uma passagem, identifique o problema que ela enfrenta, os recursos usados e a forma pela qual pede adesão do leitor. Um relato de origem pode apelar a personagens e acontecimentos extraordinários; um argumento pode relacionar afirmações e consequências que podem ser discutidas. Esses recursos podem aparecer combinados. A distinção serve à leitura crítica, não a classificar povos como atrasados ou a declarar que uma única cultura possui toda capacidade racional.",
        "steps": [
          "Identifique o problema e a função do relato ou da explicação.",
          "Reconheça recursos narrativos e razões apresentadas.",
          "Diferencie importância simbólica e demonstração de uma tese.",
          "Evite confundir argumentação, verdade garantida e superioridade cultural."
        ],
        "example": "Comparação autoral, sem atribuição a tradição real: uma narrativa conta que uma ponte nasceu do pacto entre seres extraordinários; um debate pergunta quando uma travessia pode ser considerada justa e quais razões sustentam a resposta. Os dois textos podem tratar de relações humanas, mas organizam sua comunicação de maneiras diferentes. Não se trata de reproduzir um mito ou de comprovar a história de uma ponte existente.",
        "pitfall": "Definir mito apenas como mentira, filosofia como qualquer opinião pessoal ou distinção entre discursos como hierarquia natural entre povos."
      },
      {
        "level": "intermediate",
        "title": "Transformações na tradição grega e limites do esquema",
        "explanation": "Na tradição grega, pensadores dos séculos VI e V a.C. investigaram princípios da natureza e formas de compreender o mundo, abrindo questões que atravessariam a história da filosofia ocidental. O recorte não afirma que antes deles ninguém raciocinava, nem que toda reflexão humana se originou isoladamente em um só povo. Contatos entre sociedades e práticas de discussão compõem o contexto; a vida das cidades gregas incluiu debates sobre organização e justiça, sem que isso garanta participação igual para todas as pessoas. A passagem do mito à filosofia é uma fórmula didática para transformações de perguntas e justificações, não uma data em que todos abandonaram crenças ou todas as narrativas desapareceram. Os relatos antigos associam Tales de Mileto à água como princípio; Anaximandro é relacionado ao ápeiron, o indefinido. O interesse está em perguntar o que fundamenta uma explicação e como as diferenças entre propostas podem ser examinadas, sem converter essas ideias em resultados atuais da química. As informações preservadas sobre muitos desses pensadores dependem de fragmentos e testemunhos posteriores, exigindo cautela na atribuição de frases e intenções. O termo pré-socrático também é uma classificação posterior, não prova de que cada autor tenha vivido inteiramente antes de Sócrates. Além disso, Platão empregou mitos nos seus diálogos: narrativa e reflexão filosófica não se excluíram de modo definitivo. Uma leitura histórica cuidadosa distingue esquemas úteis, fontes disponíveis e debates que não se resolvem por uma sucessão linear entre erro e verdade.",
        "steps": [
          "Situe o recorte grego sem confundi-lo com a totalidade do pensamento humano.",
          "Compare perguntas e princípios sem tratá-los como ciência contemporânea.",
          "Diferencie fragmento, testemunho posterior e reconstrução interpretativa.",
          "Reconheça continuidades e usos filosóficos de narrativas, inclusive em Platão."
        ],
        "example": "Ficha comparativa autoral: ao estudar Tales e Anaximandro, registrar água e ápeiron é um início, mas a leitura precisa perguntar como cada princípio pretende explicar a natureza e por quais fontes conhecemos a proposta. Uma lista de nomes não prova que os autores rejeitaram toda dimensão divina nem permite atribuir-lhes uma frase sem referência.",
        "pitfall": "Imaginar substituição instantânea de todas as crenças, igualar pré-socrático a anterior em toda cronologia ou tratar testemunho posterior como texto autógrafo preservado."
      },
      {
        "level": "advanced",
        "title": "Examinar teses, razões e papel das narrativas",
        "explanation": "Para avaliar filosoficamente uma tese, reconstrua seu significado e as razões oferecidas. Pergunte se os termos mantêm o mesmo sentido, se a conclusão decorre do que foi afirmado e se há uma objeção relevante. Um nome prestigioso, a antiguidade de uma narrativa ou a quantidade de pessoas que concordam não substituem automaticamente a justificação. Isso não torna todo testemunho inútil: é preciso avaliar competência, contexto e relação da fonte com a questão, sem transferir autoridade ilimitada. Uma narrativa pode sugerir um problema, mostrar consequências imagináveis e convidar à reflexão; sua força pedagógica não equivale a prova de cada evento que descreve. Da mesma forma, um exemplo criado para discutir justiça não deve ser apresentado como acontecimento documentado. Ao comparar mito e filosofia, examine a função concreta do recurso, em vez de procurar uma palavra mágica que classifique todo texto. Uma objeção bem formulada procura testar a tese; discordar por insulto não cumpre esse papel. Também não se exige que toda questão filosófica seja encerrada por experimento, nem que qualquer resposta abstrata seja infalível. Quando faltarem razões, reconheça o limite e proponha uma pergunta mais precisa. Na leitura de um diálogo, separe a fala de uma personagem, a estratégia do texto e a interpretação sobre o autor. Essa atenção evita atribuições indevidas e permite discutir como argumentos e narrativas se relacionam sem apagar suas diferenças.",
        "steps": [
          "Reformule tese e razões de modo fiel.",
          "Examine termos, relações e possíveis objeções.",
          "Diferencie função ilustrativa de uma narrativa e prova de uma afirmação.",
          "Registre limites e evite atribuir falas ou histórias inventadas a filósofos reais."
        ],
        "example": "Problema autoral: uma assembleia fictícia afirma que só uma família deve usar um poço porque sempre foi assim. A investigação pode perguntar se antiguidade basta para justificar exclusividade e quais critérios poderiam valer para todos os usuários. Questionar a razão apresentada não obriga aceitar qualquer alternativa sem examiná-la, nem afirma que essa assembleia tenha existido na Grécia.",
        "pitfall": "Trocar argumento por prestígio ou insulto, tratar ilustração como prova histórica ou supor que uma dúvida transforma automaticamente qualquer conclusão em verdadeira."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Atividade autoral de comparação: qual afirmação evita uma oposição simplista entre mito e filosofia?",
        "hint": "Considere funções narrativas e exigência de razões, sem supor que um tipo de discurso torne pessoas naturalmente superiores.",
        "options": [
          "Todo mito é apenas uma mentira deliberada, sem importância cultural ou simbólica.",
          "Narrativas míticas podem organizar sentidos e valores; a investigação filosófica examina conceitos e razões, sem garantir infalibilidade.",
          "Toda opinião individual é uma demonstração filosófica, mesmo sem explicar seus motivos.",
          "Todo argumento é verdadeiro apenas porque usa palavras abstratas e não conta uma história."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: a afirmação reconhece função narrativa e investigação por razões, sem definir mito como fraude ou filosofia como certeza automática. A reduz o mito a mentira deliberada; C dispensa justificação; D confunde aparência abstrata com verdade. A comparação exige analisar como cada texto funciona, sem transformar diferenças em superioridade natural de pessoas ou povos."
      },
      {
        "level": "intermediate",
        "prompt": "Caso autoral: um resumo diz que o nascimento da filosofia na tradição grega fez desaparecer imediatamente todas as narrativas míticas, que nunca mais foram usadas por filósofos. Qual avaliação é adequada?",
        "hint": "Compare a imagem de ruptura total com a presença de mitos nos diálogos de Platão e com a complexidade das transformações históricas.",
        "options": [
          "O resumo é correto, pois qualquer filósofo é, por definição, incapaz de usar narrativa.",
          "O único erro é que as narrativas desapareceram de todas as culturas exatamente no mesmo dia.",
          "O resumo exagera a ruptura: houve transformações nas explicações, mas narrativas persistiram e Platão também empregou mitos em sua obra.",
          "O resumo demonstra que a filosofia nunca examinou razões ou diferenças entre explicações."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a transformação não foi uma eliminação instantânea e universal, e o uso de mitos em Platão impede a generalização de que filósofos nunca os empregaram. A impõe proibição inexistente; B universaliza ainda mais o erro; D nega a investigação por razões sem fundamento. Reconhecer continuidade não elimina diferenças entre recursos narrativos e argumentação."
      },
      {
        "level": "advanced",
        "prompt": "Composição autoral, não citação antiga: um debatedor afirma que uma regra é justa apenas porque foi repetida durante muitas gerações. Qual intervenção examina filosoficamente a justificação apresentada?",
        "hint": "Teste se o motivo dado sustenta a justiça da regra; não substitua a tese por outra aceita apenas por prestígio ou antiguidade.",
        "options": [
          "Repetir a mesma frase mais alto, pois intensidade de voz prova justiça.",
          "Aceitar automaticamente a regra, pois duração e justiça são sempre equivalentes.",
          "Rejeitar a regra só pela idade e aceitar qualquer regra recente sem exame.",
          "Perguntar por que a repetição tornaria a regra justa e avaliar critérios e objeções aplicáveis ao caso."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a intervenção investiga a ligação entre o motivo e a tese e abre espaço para critérios e objeções. A confunde intensidade com razão; B assume a equivalência que precisaria justificar; C troca aceitação automática do antigo por aceitação automática do recente. O exercício não determina sozinho qual regra é justa e não atribui o debate a personagem histórico."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Globalização e questões socioambientais",
    "objective": "Relacionar interdependências globais, cadeias produtivas e impactos socioambientais desiguais, avaliando propostas segundo evidências, distribuição de benefícios e participação.",
    "prerequisites": [
      "Instituições, poder e desigualdade",
      "Produção, consumo e circulação",
      "Diferença entre evidência e generalização"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Interdependências e escalas da globalização",
        "explanation": "Globalização reúne processos de conexão e interdependência entre sociedades por circulação de bens, capitais, pessoas, informações e práticas culturais. Suas dimensões econômicas, políticas, tecnológicas e culturais se relacionam, mas não avançam no mesmo ritmo nem atingem todos de modo igual. Conexões de longa distância são anteriores à internet; tecnologias digitais e transportes participam de intensificações e reorganizações, sem eliminar barreiras materiais, fronteiras ou diferenças de acesso. Uma cadeia produtiva pode distribuir projeto, extração, componentes, montagem e venda por lugares distintos. Isso não significa que o valor, o poder de decisão e as condições de trabalho se distribuam igualmente. A etiqueta do último lugar de montagem tampouco descreve toda a origem dos insumos. No plano cultural, circulação de músicas, imagens e ideias pode envolver apropriações e reelaborações locais; não se deduz uniformidade completa apenas por haver um produto difundido. Estados, empresas, organizações e movimentos sociais continuam atuando, cooperando e disputando regras; interdependência não equivale a um governo mundial único nem ao desaparecimento da capacidade política nacional. Para analisar um caso, pergunte quais agentes se conectam, quais recursos circulam, que infraestrutura permite o fluxo e quem define suas condições. Uma conexão pode criar possibilidades e dependências ao mesmo tempo. A explicação sociológica deve identificar relações e conflitos em situações concretas, sem transformar todo comércio em benefício garantido ou todo intercâmbio em dano inevitável.",
        "steps": [
          "Identifique os agentes, os fluxos e as escalas envolvidos.",
          "Relacione etapas produtivas sem presumir distribuição igual de valor ou poder.",
          "Observe infraestrutura, barreiras e acesso desigual às conexões.",
          "Diferencie interdependência de uniformidade cultural ou fim dos Estados."
        ],
        "example": "Cadeia fictícia autoral: um equipamento é projetado em um país, utiliza componentes de outros, recebe montagem em um terceiro e é vendido em vários mercados. A descrição mostra divisão de etapas e relações entre lugares, mas não informa por si quem recebe mais renda, quais empregos foram gerados ou se houve dano ambiental específico.",
        "pitfall": "Reduzir globalização à internet, presumir que o mundo se tornou sem fronteiras ou concluir igualdade cultural e econômica apenas pela existência de conexões."
      },
      {
        "level": "intermediate",
        "title": "Produção, ambiente e vulnerabilidade social",
        "explanation": "Questões socioambientais envolvem relações entre processos físicos e biológicos e a organização social de produção, consumo, moradia e decisão. Para analisar um produto, considere extração de materiais, fabricação, energia, transporte, uso e destinação final, definindo os limites da análise. Um impacto não desaparece porque ocorreu longe do consumidor, e reduzir uma etapa não demonstra automaticamente redução no conjunto. O uso de recursos pode gerar efeitos distribuídos de modo desigual entre grupos e territórios. Quem obtém o benefício econômico pode não ser quem suporta a poluição ou a perda de meios de vida; essa diferença precisa ser investigada, não presumida em qualquer caso. Na análise de desastres, um fenômeno físico não explica sozinho a extensão dos danos: exposição, moradia, infraestrutura, acesso a informação e capacidade de resposta influenciam a vulnerabilidade. Uma chuva semelhante pode produzir consequências diferentes em lugares com condições sociais distintas. Isso não significa que todo dano seja evitável ou que qualquer diferença observada tenha uma causa única. Relacione dados ambientais, condições de vida e decisões, distinguindo uma hipótese de um nexo demonstrado. Mudanças climáticas, perda de biodiversidade, poluição e resíduos se articulam, mas não são nomes intercambiáveis para o mesmo problema. Responsabilidade também não se resume a escolha individual nem desaparece por envolver estruturas: indivíduos, empresas e instituições atuam em posições e escalas diferentes. Comparações exigem critério, período e base de medida antes de atribuir culpa, benefício ou eficácia.",
        "steps": [
          "Defina etapas e limites da análise de produção e consumo.",
          "Investigue onde aparecem benefícios e impactos e quais grupos são afetados.",
          "Diferencie fenômeno físico, exposição e vulnerabilidade social.",
          "Compare evidências sem reduzir problemas distintos a uma causa ou solução única."
        ],
        "example": "Situação autoral: uma embalagem usa menos material, mas passa a ser transportada por outro percurso e tem destino final diferente. A redução de material é uma informação relevante, porém insuficiente para declarar que todos os impactos diminuíram. É necessário explicitar quais efeitos e etapas foram comparados, sem inventar uma porcentagem ambiental universal.",
        "pitfall": "Medir apenas uma etapa e concluir resultado global, naturalizar danos como iguais para todos ou confundir redução de resíduos com solução automática de todo problema climático."
      },
      {
        "level": "advanced",
        "title": "Governança, participação e transição justa",
        "explanation": "Problemas que atravessam fronteiras exigem relacionar decisões locais, nacionais e internacionais, sem supor que uma escala substitui todas as outras. Governança envolve formas de coordenação e disputa entre atores; reconhecer um compromisso ou um selo não prova que a prática correspondente foi cumprida. Examine objetivos, critérios, acompanhamento e possibilidade de contestação. Uma transição para atividades de menor impacto pode reorganizar trabalho, renda e usos do território. A ideia de transição justa chama atenção para essas consequências, incluindo trabalho, proteção social e diálogo; não basta anunciar um benefício ambiental agregado e presumir que ninguém terá perdas. Participação efetiva requer que os grupos afetados tenham informação e possibilidade de influenciar decisões, em vez de serem apenas mencionados no discurso. A análise pode perguntar quem decide, quem paga, quem recebe os benefícios e como os resultados serão verificados. Reconhecer responsabilidades e capacidades diferentes não implica atribuir exatamente o mesmo comportamento a todos os países, comunidades ou indivíduos de uma categoria. Propostas podem combinar regulação, inovação, cooperação e mudanças de consumo, com limitações e conflitos que precisam ser examinados no contexto. Uma crítica bem sustentada distingue descrição de um problema, avaliação por critérios e recomendação; não transforma uma preferência institucional em lei científica inevitável. Compare alternativas e considere efeitos não pretendidos, evitando escolher automaticamente pela palavra sustentável. A aula apresenta instrumentos de análise sociológica, sem afirmar que uma política específica já resolveu todos os impactos ou impor requisitos jurídicos universais a situações não delimitadas.",
        "steps": [
          "Identifique atores, escalas e critérios da proposta.",
          "Examine distribuição de benefícios, custos e condições de trabalho.",
          "Verifique participação, acompanhamento e possibilidade de contestação.",
          "Compare alternativas e limites sem usar rótulo ou promessa como prova de eficácia."
        ],
        "example": "Projeto fictício autoral: uma cidade pretende substituir uma atividade poluente e anuncia uma redução estimada de emissões. Uma análise de transição justa acrescenta perguntas sobre trabalhadores, alternativas de renda, moradores afetados e acompanhamento do resultado. Essas perguntas não negam o objetivo ambiental; examinam como alcançá-lo e como distribuir consequências.",
        "pitfall": "Tratar toda iniciativa sustentável como automaticamente justa, confundir anúncio com execução ou transformar responsabilidades diferenciadas em julgamento uniforme de todas as pessoas de um grupo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Caso autoral: um produto tem projeto em um país, componentes em outros e montagem final em um terceiro. Qual leitura é sustentada por essa descrição?",
        "hint": "A distribuição de etapas indica relações entre lugares, mas não fornece automaticamente a divisão de valor, poder ou impactos.",
        "options": [
          "Há uma cadeia com etapas conectadas internacionalmente; o local de montagem não descreve sozinho toda a produção nem sua distribuição de benefícios.",
          "Todo o valor foi criado obrigatoriamente apenas no país da montagem final.",
          "A descrição prova que todas as fronteiras políticas deixaram de existir.",
          "Todos os trabalhadores envolvidos recebem necessariamente a mesma renda e têm as mesmas condições."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: etapas distribuídas e conectadas caracterizam interdependência produtiva; para avaliar renda, decisões e efeitos seria necessário obter outras informações. B atribui toda a produção a uma etapa; C inventa desaparecimento de fronteiras; D deduz igualdade não informada. O caso é fictício e não identifica empresas, países ou percentuais reais."
      },
      {
        "level": "intermediate",
        "prompt": "Cenário autoral: dois bairros enfrentam chuva intensa semelhante. Um dispõe de drenagem, moradias protegidas e alertas acessíveis; o outro tem carências nesses aspectos. Qual análise incorpora a dimensão socioambiental sem inventar resultados medidos?",
        "hint": "Relacione fenômeno físico e condições sociais, sem afirmar que os danos foram iguais ou que um único fator explica qualquer desastre.",
        "options": [
          "A chuva demonstra que infraestrutura e condições de moradia nunca influenciam vulnerabilidade.",
          "A diferença prova inferioridade natural dos moradores do segundo bairro.",
          "Condições de infraestrutura, moradia e informação podem produzir vulnerabilidades diferentes; os danos efetivos ainda exigem verificação.",
          "A semelhança da chuva garante exatamente o mesmo dano a cada pessoa, independentemente das condições descritas."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: o cenário oferece condições relevantes para vulnerabilidade desigual, mas não apresenta medição de danos. A exclui relações sociais sem fundamento; B naturaliza uma desigualdade; D supõe efeitos idênticos apesar das diferenças de proteção e exposição. Reconhecer vulnerabilidade não permite inventar um número de vítimas, uma causa única ou culpa individual."
      },
      {
        "level": "advanced",
        "prompt": "Caso autoral: uma proposta promete reduzir emissões e afirma que isso garante, por si, uma transição justa. Qual análise examina adequadamente essa garantia?",
        "hint": "Considere o objetivo ambiental e também quem participa, quem suporta custos e como trabalhadores e comunidades serão afetados.",
        "options": [
          "Aceitar a garantia sem examinar trabalho, renda ou participação, pois um benefício agregado exclui qualquer perda.",
          "Rejeitar automaticamente toda redução de emissões, sem considerar as alternativas e seus efeitos.",
          "Verificar apenas se o projeto usa a palavra sustentável em sua comunicação.",
          "Avaliar a redução e sua comprovação, a distribuição de consequências, o trabalho, a proteção social e a participação dos grupos afetados."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: justiça da transição exige examinar consequências sociais e processo de decisão, além do objetivo ambiental e das evidências de sua realização. A transforma benefício agregado em ausência garantida de perdas; B rejeita o objetivo sem análise; C substitui verificação por rótulo. O exercício usa critérios analíticos e não afirma que toda proposta tenha exatamente os mesmos efeitos ou requisitos legais."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Teatro: dramaturgia, atuação e encenação",
    "objective": "Analisar relações entre organização dramatúrgica, escolhas de atuação e composição da encenação, distinguindo fala, rubrica, personagem e recursos cênicos em exemplos autorais.",
    "prerequisites": [
      "Narrativa e diálogo",
      "Corpo, voz e espaço como linguagens",
      "Diferença entre descrição e interpretação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Dramaturgia e leitura do texto cênico",
        "explanation": "Dramaturgia envolve a organização de ações, relações e materiais de uma criação teatral. Pode haver um texto escrito antes dos ensaios ou um processo em que escrita e cena se transformam em colaboração. Nesta aula, o texto dramático escrito é um ponto de entrada: identifique quem fala, para quem, em qual situação e que mudanças acontecem. Falas e rubricas cumprem funções diferentes. As falas são atribuídas a personagens ou vozes; rubricas, também chamadas didascálias, indicam aspectos da cena, como movimento, pausa, espaço, som ou iluminação. Frequentemente aparecem entre parênteses ou com destaque gráfico, mas a formatação pode variar. Uma rubrica não é automaticamente uma frase pronunciada pela personagem, e sua presença não proíbe adaptações justificadas no processo de encenação. A ação pode envolver um desejo, um impedimento, uma espera ou uma transformação na relação; conflito dramático não significa necessariamente briga física. Atos e cenas organizam muitos textos, sem constituir uma estrutura obrigatória para toda forma de teatro. Monólogo e diálogo também não esgotam as possibilidades: silêncio, gestos e ações podem participar da composição. A obra pode ser lida e discutida, além de representada; a finalidade cênica não torna sua leitura impossível ou sem valor. Ao interpretar, separe o que está escrito do que uma montagem específica escolhe acrescentar ou alterar.",
        "steps": [
          "Reconheça personagens, vozes, situação e relações.",
          "Diferencie fala e indicação cênica sem depender apenas da aparência gráfica.",
          "Observe ação e transformação sem exigir confronto físico.",
          "Identifique a organização proposta e suas possibilidades de encenação."
        ],
        "example": "Microcena autoral: Lia: Guardei o último mapa. [Davi deixa uma mochila junto à porta e espera.] Davi: Então precisamos decidir o caminho. A frase entre colchetes indica ação e espera; não é fala de Davi. O mapa cria uma situação para a relação entre as personagens, sem exigir que uma discussão violenta aconteça.",
        "pitfall": "Ler toda rubrica como fala, confundir conflito com agressão ou exigir uma estrutura única e texto verbal prévio para toda criação teatral."
      },
      {
        "level": "intermediate",
        "title": "Atuação: ações, corpo, voz e relação",
        "explanation": "Atuação não se reduz a memorizar falas ou reproduzir uma emoção com um gesto fixo. O trabalho pode construir ações e relações por presença, corpo, voz, ritmo, pausa, olhar e deslocamento no espaço. Pergunte o que uma personagem tenta realizar em uma situação e como responde ao que outra faz. Uma mesma frase pode adquirir sentidos diferentes conforme contexto, entonação e ação: não existe uma equivalência universal entre um único gesto e um sentimento. Volume e velocidade não substituem intenção, escuta e clareza. Na análise de uma apresentação, descreva o recurso observado e explique que leitura ele permite, em vez de afirmar conhecer os sentimentos reais do artista. Personagem e pessoa que atua são instâncias distintas; uma fala ficcional não demonstra uma opinião pessoal do intérprete. Ensaiar permite comparar escolhas e modificar a construção em diálogo com outras funções da equipe. A improvisação pode ser um caminho de pesquisa e organização, sem significar ausência de atenção ou de critérios; diferentes processos utilizam graus distintos de planejamento. Para uma comparação didática, mantenha alguns elementos constantes e observe como uma mudança de pausa ou posição altera relações. O estudo aqui é conceitual e de leitura: não exige imitar um artista existente, forçar a voz, executar esforço físico ou revelar experiências pessoais. A expressividade não depende de um corpo padrão; diferentes modos de participação e recursos podem compor a cena.",
        "steps": [
          "Identifique a ação ou relação que está sendo construída.",
          "Observe corpo, voz, ritmo, pausas e resposta aos parceiros.",
          "Relacione a escolha ao contexto sem impor um código emocional único.",
          "Distinga personagem, intérprete e interpretações possíveis do público."
        ],
        "example": "Comparação autoral: na frase Você chegou, uma personagem pode manter distância e fazer uma pausa antes de chegou, ou aproximar-se e falar de modo contínuo. Com o restante da situação explicitado, essas escolhas podem sugerir reserva ou acolhimento. Nenhuma delas comprova o estado emocional real de quem atua nem determina uma resposta idêntica de todo espectador.",
        "pitfall": "Confundir atuação com gritar ou decorar, atribuir uma emoção fixa a todo gesto ou transformar a fala de personagem em confissão pessoal do artista."
      },
      {
        "level": "advanced",
        "title": "Encenação: escolhas que se articulam",
        "explanation": "Encenação articula atuação, espaço, tempo e outros materiais para construir uma experiência teatral. Direção pode coordenar uma interpretação em colaboração com artistas e equipes; a divisão de funções varia entre processos, e não se deve pressupor um único criador que determine isoladamente tudo. Cenografia organiza relações espaciais e materiais; figurino participa da apresentação dos corpos e personagens; iluminação pode selecionar áreas e produzir contrastes; som e música podem criar ritmo, ambiente ou contraponto. Esses elementos não são necessariamente decoração de um texto que já teria sentido único. Uma montagem pode manter as palavras e modificar a relação entre as personagens ao reorganizar distâncias, pausas ou luz. A plateia também participa da situação de recepção: disposição, visibilidade e possibilidades de acompanhamento influenciam a experiência. Recursos de acessibilidade, como legendagem e audiodescrição em contextos apropriados, ampliam formas de acompanhar a criação e precisam dialogar com suas escolhas; não se exige coletar diagnósticos para discutir necessidades de acesso. Ao comparar versões, identifique o que mudou, o que permaneceu e qual efeito a descrição sustenta. Não invente som, gesto ou intenção que não tenham sido informados. A encenação pode sustentar interpretações diversas; uma hipótese precisa explicar os recursos observados, não declarar que toda luz baixa significa tristeza ou que um figurino define sozinho a moral de uma personagem. Todos os casos desta aula são escritos de forma suficiente para análise, sem depender de uma gravação ou imagem externa.",
        "steps": [
          "Mapeie atuação, espaço, luz, som e materiais indicados.",
          "Explique como os elementos se relacionam, em vez de apenas listá-los.",
          "Considere condições de recepção e acesso sem pressupor público uniforme.",
          "Compare escolhas e sustente hipóteses pelos recursos efetivamente descritos."
        ],
        "example": "Montagens autorais hipotéticas: uma conversa pode ocorrer com duas cadeiras próximas e luz compartilhada, ou com cadeiras afastadas e zonas de luz separadas. A segunda organização torna a separação espacial mais marcada, sem provar automaticamente ódio entre as personagens. Analisar encenação é relacionar escolhas e efeitos possíveis, mantendo o limite da descrição.",
        "pitfall": "Tratar cenografia, luz e som como adereços sem função expressiva, atribuir intenção não informada ou garantir o mesmo efeito a toda plateia."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Microcena autoral: Nara: A sala está pronta. [Ivo fecha o caderno, olha a janela e permanece em silêncio.] Ivo: Falta uma escolha. Qual análise do trecho entre colchetes é adequada?",
        "hint": "Diferencie a indicação sobre ações e silêncio das palavras atribuídas às personagens.",
        "options": [
          "É obrigatoriamente uma fala longa que Nara deve pronunciar literalmente.",
          "É uma prova de que o ator real fechou um caderno fora da ficção e revelou sua vida pessoal.",
          "É uma rubrica com indicações de ação e silêncio, distinta das falas de Nara e Ivo.",
          "É apenas uma lista de autores reais e não contém nenhuma indicação cênica."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: fechar o caderno, olhar a janela e permanecer em silêncio são indicações cênicas, enquanto as falas aparecem atribuídas às personagens. A transforma a rubrica em fala de Nara; B confunde situação ficcional e vida real; D ignora as ações descritas. O microtexto é criação do Kognos, sem reprodução ou atribuição a peça existente."
      },
      {
        "level": "intermediate",
        "prompt": "Situação autoral: duas versões conservam a fala Pode entrar. Na primeira, a personagem abre espaço junto à porta e fala sem pausa; na segunda, bloqueia a passagem e demora antes de responder. Qual leitura considera escolhas de atuação e contexto?",
        "hint": "Observe a relação entre palavras, ação e pausa; não deduza sentimentos reais do intérprete nem um código universal de gestos.",
        "options": [
          "A relação entre fala, espaço e pausa pode alterar a leitura da permissão; as escolhas não comprovam a emoção pessoal de quem atua.",
          "Como as palavras são iguais, corpo e pausa não podem ter qualquer efeito na situação.",
          "Bloquear uma porta comprova que o intérprete real odeia o público em toda apresentação.",
          "As duas versões exigem gritos para que a fala possa ser considerada atuação teatral."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: o gesto e a demora podem tensionar a permissão verbal, enquanto abrir passagem pode reforçá-la no caso descrito. B elimina a função de corpo e tempo; C inventa emoção pessoal e generaliza; D reduz atuação a volume. A análise se refere à situação ficcional e permite leituras sustentadas, sem garantir resposta idêntica de todo espectador."
      },
      {
        "level": "advanced",
        "prompt": "Caso autoral: a equipe mantém as falas de uma cena, mas muda a disposição do público, separa as personagens em áreas de luz e substitui silêncio por um som recorrente. O que se pode afirmar sobre essa mudança?",
        "hint": "Encenação organiza diferentes materiais; conservar palavras não significa conservar toda a experiência cênica.",
        "options": [
          "Nada mudou na encenação, pois apenas as palavras podem construir sentido no teatro.",
          "A mudança demonstra necessariamente que o texto original foi apagado e substituído por outro.",
          "As escolhas garantem que toda pessoa da plateia terá exatamente o mesmo sentimento.",
          "A encenação foi reorganizada por espaço, luz e som, podendo alterar a experiência mesmo com as falas preservadas."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: foram alterados elementos expressivos e condições de recepção da montagem, embora as falas permaneçam. A restringe sentido às palavras; B contradiz a preservação informada; C garante uniformidade de reação sem fundamento. É preciso analisar a articulação concreta dos recursos, sem inventar qual som foi usado ou atribuir uma emoção obrigatória às áreas de luz."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Práticas corporais de aventura",
    "objective": "Reconhecer características de práticas de aventura urbanas e na natureza e analisar decisões de participação, gestão de riscos e cuidado com espaços e pessoas.",
    "prerequisites": [
      "Cultura corporal e formas de lazer",
      "Relação entre movimento e ambiente",
      "Cooperação e respeito às diferenças"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Aventura como relação corporal com o ambiente",
        "explanation": "Práticas corporais de aventura exploram desafios de movimento na interação com um ambiente que apresenta incertezas. A experiência pode envolver equilíbrio, deslocamento, orientação e decisões, mas não é definida por buscar o maior perigo possível. A BNCC distingue, segundo o ambiente, práticas urbanas e na natureza. Skate, patins e parkour aparecem associados a espaços urbanos; corrida orientada e outras práticas em ambientes naturais ilustram a segunda vertente. Essa organização é um critério didático, não uma prova de que toda modalidade só possa ser recriada em um único lugar. O contexto, a proposta e as condições efetivas importam. Uma bicicleta pode participar de usos cotidianos, de esporte e de aventura; o objeto sozinho não determina a finalidade. Nem toda prática de aventura é competição formal ou exige desempenho extremo. Na escola, propostas podem ser adaptadas e simuladas, considerando espaço disponível, orientação e características dos participantes. Estudar uma descrição, discutir um mapa ou comparar decisões são dimensões de aprendizagem, sem equivaler a dominar uma técnica corporal apenas por ler sobre ela. Reconhecer o patrimônio público e natural também integra a experiência: o espaço não é um obstáculo sem dono que possa ser danificado. A relação entre desafio, cuidado e participação é mais útil para compreender a aventura do que a promessa de provar coragem diante de colegas ou de um vídeo.",
        "steps": [
          "Identifique a relação entre movimento, desafio e ambiente.",
          "Reconheça o critério urbano ou natureza no contexto estudado.",
          "Diferencie finalidade da prática e simples presença de um equipamento.",
          "Considere adaptação pedagógica, cuidado e respeito aos espaços."
        ],
        "example": "Comparação autoral de propostas descritas: um estudo de deslocamentos em um espaço urbano preparado e uma análise de orientação por referências de um ambiente natural podem tratar de aventura por relações diferentes com o meio. Nenhum dos casos autoriza reproduzir obstáculos de um vídeo nem demonstra domínio técnico apenas porque a turma conhece os nomes das práticas.",
        "pitfall": "Definir aventura como perigo máximo, classificar toda bicicleta da mesma maneira ou confundir conhecer uma modalidade com estar preparado para executá-la."
      },
      {
        "level": "intermediate",
        "title": "Ler condições e gerir riscos",
        "explanation": "Gestão de riscos envolve identificar perigos, considerar consequências possíveis e decidir se as condições permitem determinada proposta. Risco controlado não significa risco inexistente. Ambiente, clima, estado de equipamentos, organização, orientação e experiência dos participantes podem alterar as condições, e uma situação antes adequada pode deixar de ser. Uma proteção específica pode reduzir certas consequências sem eliminar todos os perigos; não existe um item que dispense avaliação, técnica e organização. As exigências variam conforme atividade e local, portanto não se escolhe equipamento apenas pela aparência ou por uma lista genérica. Na prática real, orientação qualificada e respeito a regras e advertências do espaço precisam acompanhar a avaliação. Uma decisão responsável pode ser adaptar, adiar ou interromper, em vez de manter um objetivo para demonstrar bravura. O planejamento também considera comunicação, acesso a apoio e possibilidades de participação, sem transformar uma informação isolada em garantia de segurança. Para analisar um caso escolar escrito, explicite o que mudou e qual consequência isso tem para a decisão; não tente solucionar uma situação técnica apenas supondo que alguém experiente dispensa os demais cuidados. Publicidade e vídeos podem omitir preparação, contexto e repetição: a imagem de sucesso não mostra a frequência de falhas nem torna uma ação adequada a qualquer pessoa. Esta aula oferece análise conceitual, sem fornecer instruções de manobras, cordas, resgate ou escolha de percurso real.",
        "steps": [
          "Identifique perigos e mudanças nas condições informadas.",
          "Considere pessoas, ambiente, organização e equipamento em conjunto.",
          "Reavalie a proposta sem tratar proteção ou experiência como garantia total.",
          "Reconheça que adaptar, adiar ou interromper pode fazer parte do cuidado."
        ],
        "example": "Caso autoral: uma atividade planejada para um espaço preparado encontra condições do piso diferentes das avaliadas inicialmente. A existência de um plano anterior não resolve a mudança. A equipe precisa reavaliar com a orientação responsável e pode modificar ou suspender a proposta; o enunciado não fornece dados para declarar o local seguro nem ensinar uma técnica de travessia.",
        "pitfall": "Supor que coragem, experiência ou equipamento isolado eliminam risco, manter um plano apesar de mudanças ou aprender uma manobra perigosa apenas por reprodução de vídeo."
      },
      {
        "level": "advanced",
        "title": "Participação, convivência e conservação",
        "explanation": "Uma proposta educativa de aventura pode valorizar cooperação, autonomia e reconhecimento de diferenças sem ordenar pessoas por coragem ou aparência. Participar não deve significar aceitar exposição indesejada para evitar humilhação. A organização pode prever funções e formas de envolvimento adequadas ao contexto, com orientação e possibilidades de adaptação. Para discutir necessidades de acesso, foque condições funcionais e preferências de participação, sem exigir que uma pessoa revele diagnóstico de saúde. Inclusão não é apenas oferecer a todos um desafio idêntico e presumir condições iguais. No ambiente natural, visitação e conservação precisam ser articuladas: respeitar áreas e regras de uso, destinar resíduos de forma adequada, evitar perturbar a fauna e considerar outros usuários ajuda a reduzir impactos. As permissões e condições variam por local, e nem toda área oferece estrutura para qualquer prática. Um atalho pode parecer conveniente e ainda produzir dano; a duração mais curta não é critério suficiente para uma decisão. No espaço urbano, preserve equipamentos e patrimônio e considere circulação e segurança de outras pessoas, sem tratar a cidade como cenário livre de relações sociais. Ao avaliar uma proposta, reúna finalidade de aprendizagem, participação, cuidado e efeitos sobre o lugar; não aceite o rótulo ecológico como prova de ausência de impacto. As decisões pedem contexto e acompanhamento, não uma competição para maximizar risco ou uma lista de exigências universais independente da modalidade.",
        "steps": [
          "Observe se a proposta respeita participação e diferenças sem coerção.",
          "Planeje formas de envolvimento e adaptações com orientação responsável.",
          "Relacione uso do espaço a conservação e convivência.",
          "Avalie limites e efeitos da proposta em vez de confiar apenas em rótulos."
        ],
        "example": "Situação autoral: uma turma analisa uma proposta que premia quem termina primeiro e expõe publicamente quem prefere outra função. Reformular os critérios para valorizar decisões, cooperação e participação pode mudar a experiência educativa. Isso não transforma qualquer adaptação em tecnicamente adequada: as condições e a orientação continuam necessárias.",
        "pitfall": "Confundir igualdade com exigência idêntica para todos, constranger alguém a se expor ou afirmar que uma atividade chamada ecológica não causa impactos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Ficha autoral: uma unidade de estudo apresenta skate em espaço urbano preparado e corrida orientada em ambiente natural. Qual interpretação respeita o critério de classificação e a finalidade educativa?",
        "hint": "O ambiente ajuda a organizar o estudo, mas não prova perigo obrigatório, competição ou adequação automática a qualquer participante.",
        "options": [
          "As duas práticas só podem ser reconhecidas como aventura se dispensarem toda organização e cuidado.",
          "A distinção urbano/natureza considera o ambiente, e a proposta deve examinar desafios, condições e possibilidades de participação.",
          "O uso de qualquer equipamento garante que todas as pessoas já dominam a prática.",
          "As duas atividades exigem competição profissional como única finalidade possível na escola."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: o ambiente é o critério didático informado, e os desafios precisam ser relacionados às condições e à participação. A equipara aventura a ausência de cuidado; C transforma equipamento em domínio automático; D impõe finalidade profissional única. A ficha é descritiva e não orienta execução nem avalia a segurança de um local real."
      },
      {
        "level": "intermediate",
        "prompt": "Caso autoral: antes de uma atividade, a equipe constata mudança relevante nas condições do espaço avaliadas no planejamento. Um participante diz que usar proteção elimina a necessidade de reavaliar. Qual análise é adequada?",
        "hint": "Diferencie reduzir certos riscos de eliminar todos e considere que planejamento depende das condições efetivas.",
        "options": [
          "A presença de proteção garante risco zero em qualquer ambiente e situação.",
          "Se o plano foi escrito anteriormente, nenhuma mudança posterior pode alterar sua validade.",
          "O participante mais confiante pode dispensar orientação e todas as regras do local.",
          "É necessário reavaliar as condições com a orientação responsável; proteção isolada não garante adequação e pode ser preciso adaptar, adiar ou interromper."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a mudança exige nova avaliação, e proteção não elimina todos os perigos nem substitui organização e orientação. A promete risco zero; B congela o plano apesar das condições; C transforma confiança em competência universal. O caso não apresenta informações suficientes para escolher uma técnica ou afirmar que continuar é seguro."
      },
      {
        "level": "advanced",
        "prompt": "Situação autoral: uma proposta se anuncia ecológica, mas incentiva atalhos em área frágil, deixa resíduos e ridiculariza quem solicita outra forma de participação. Qual revisão integra melhor os objetivos educativos?",
        "hint": "Observe impactos e convivência, em vez de aceitar o rótulo ecológico ou medir sucesso apenas por velocidade.",
        "options": [
          "Rever o uso do espaço e os resíduos e organizar participação respeitosa e orientada, sem constranger colegas nem presumir impacto zero.",
          "Manter tudo, pois a palavra ecológica prova que os resíduos não geram impacto.",
          "Premiar quem corta mais caminho e constrange colegas, pois rapidez substitui cuidado.",
          "Exigir divulgação de diagnósticos pessoais para permitir qualquer adaptação ou diálogo."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: conservação e convivência precisam aparecer nas ações e na organização, com respeito à participação e orientação. B usa rótulo como prova; C incentiva impacto e coerção; D exige informação sensível sem necessidade para a análise das formas de participação. A solução não prescreve percurso ou técnica: redefine critérios educativos e de cuidado no caso hipotético."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Propriedades da matéria",
    "objective": "Relacionar massa, volume e densidade, distinguir propriedades extensivas e intensivas e interpretar transformações e mudanças de estado com suas condições de validade.",
    "prerequisites": [
      "Operações com números decimais",
      "Razão entre grandezas",
      "Leitura de unidades e estados físicos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Massa, volume e densidade com unidades",
        "explanation": "Matéria tem massa e ocupa espaço. Isso inclui gases, mesmo quando não os vemos. Massa e volume são grandezas diferentes: massa se expressa, por exemplo, em quilogramas ou gramas; volume, em metros cúbicos, centímetros cúbicos ou litros. Peso é uma força gravitacional e sua unidade no SI é o newton; não é outro nome científico para massa. Para comparar amostras, não basta afirmar que uma é pesada: é necessário dizer qual grandeza e qual unidade estão sendo consideradas. A densidade média é a razão entre massa e volume, escrita como ρ = m/V. Se uma amostra homogênea tem 90 g e ocupa 30 cm³, sua densidade é 3 g/cm³. Uma amostra maior pode ter mais massa sem apresentar densidade maior. Antes de dividir, compatibilize as unidades. Um quilograma corresponde a 1000 g; 1 cm³ equivale a 1 mL; 1 L equivale a 1000 cm³. Como 1 cm é 0,01 m, elevar a conversão ao cubo fornece 1 cm³ = 0,000001 m³, e não 0,01 m³. Assim, 1 g/cm³ equivale a 1000 kg/m³. O número muda com a unidade, mas a grandeza representada permanece a mesma. A densidade também precisa de contexto: a composição, a fase, a temperatura e a pressão podem influenciá-la. Não se deve tratar um valor tabelado sem condições como identidade universal de qualquer porção de um material.",
        "steps": [
          "Identifique massa e volume e anote as unidades.",
          "Converta as unidades antes de dividir, lembrando o cubo na unidade de volume.",
          "Calcule ρ = m/V e mantenha a unidade no resultado.",
          "Compare valores apenas com unidades e condições compatíveis."
        ],
        "example": "Cálculo autoral: uma amostra homogênea fictícia tem 72 g e 24 cm³. A razão 72/24 resulta em 3 g/cm³. Em SI, são 0,072 kg e 0,000024 m³; a divisão fornece 3000 kg/m³. Os dois resultados representam a mesma densidade, sem identificar automaticamente uma substância real.",
        "pitfall": "Dividir massa por volume com unidades incompatíveis, converter cm³ como se fosse cm ou confundir maior massa com maior densidade."
      },
      {
        "level": "intermediate",
        "title": "O que muda quando muda a quantidade",
        "explanation": "Uma propriedade extensiva depende da quantidade de material considerada; massa e volume são exemplos. Uma propriedade intensiva não depende simplesmente dessa quantidade; temperatura e densidade de uma amostra homogênea são exemplos, quando composição e condições físicas são mantidas. Se duas porções iguais do mesmo material, à mesma temperatura, pressão e fase, são reunidas sem reação ou mudança dessas condições, massa e volume se somam e a razão entre eles permanece igual. Isso não autoriza somar volumes de quaisquer líquidos diferentes e presumir resultado exato, nem concluir que comprimir um gás deixa sua densidade inalterada. O critério intensivo mantém condições comparáveis. Propriedade física pode ser caracterizada sem alterar a identidade química das substâncias: densidade, dureza, condutividade e temperaturas de mudança de estado são exemplos. Propriedade química descreve a capacidade de participar de transformação química, como combustibilidade. São dois critérios distintos: intensiva/extensiva pergunta sobre quantidade; física/química pergunta sobre identidade química. Uma propriedade pode ser física e intensiva ao mesmo tempo. Para caracterizar um material, combine evidências e condições, em vez de tomar uma característica isolada como prova única. Dois materiais diferentes podem compartilhar uma densidade em determinada condição, e aparência semelhante também não demonstra composição igual. Medidas têm limites de precisão; a comparação requer unidades, método e contexto, sem que isso impeça cálculos em um modelo didático com valores fornecidos.",
        "steps": [
          "Pergunte se a propriedade depende da quantidade nas condições mantidas.",
          "Separe o critério intensiva/extensiva do critério física/química.",
          "Compare massa e volume conjuntamente, sem alterar composição ou fase em silêncio.",
          "Use um conjunto de propriedades para caracterizar, reconhecendo limites de identificação."
        ],
        "example": "Modelo autoral: duas porções de um material homogêneo têm, cada uma, 45 g e 15 cm³ nas mesmas condições. Ao reuni-las sem transformação ou alteração dessas condições, obtêm-se 90 g e 30 cm³. A densidade continua 3 g/cm³. Outro material poderia apresentar esse valor; só a razão não prova identidade química.",
        "pitfall": "Afirmar que intensivo significa imutável em qualquer temperatura ou pressão, ou que uma única densidade identifica com certeza qualquer substância."
      },
      {
        "level": "advanced",
        "title": "Transformações, estados e energia",
        "explanation": "Na transformação física, podem mudar forma, tamanho ou estado sem que isso, por si, altere a identidade química das substâncias. Na transformação química, novas substâncias são formadas. Triturar um sólido não equivale a queimá-lo: a fragmentação e a combustão têm naturezas diferentes. Sólido, líquido e gás são estados comuns; não são os únicos estados possíveis da matéria. Um gás ocupa o volume disponível do recipiente e tem massa, enquanto um sólido conserva aproximadamente sua forma e seu volume nas condições usuais consideradas. A passagem entre estados não significa desaparecimento da matéria. Fusão é passagem de sólido para líquido; solidificação, o sentido inverso. Vaporização leva de líquido a gás e pode ocorrer por evaporação, na superfície, ou por ebulição, com formação de bolhas no líquido. Condensação é a passagem de gás para líquido; sublimação é a passagem direta entre sólido e gás no sentido sólido para gás. Na curva idealizada de aquecimento de uma substância pura, a pressão constante e sem decomposição, a temperatura pode permanecer constante durante a mudança de estado com coexistência das fases. Isso não significa ausência de transferência de energia: o calor recebido está associado à mudança de estado, e não a uma elevação de temperatura naquele trecho. Calor é energia em transferência por diferença de temperatura, não uma substância armazenada no corpo. A pressão influencia a temperatura de ebulição; não se pode afirmar que qualquer água ferve sempre no mesmo valor. Misturas exigem análise própria, portanto o patamar de uma substância pura não é regra universal para todo material.",
        "steps": [
          "Verifique se há alteração de identidade química, além da aparência.",
          "Identifique os estados inicial e final e a mudança correspondente.",
          "Leia as condições de pureza, pressão e coexistência de fases.",
          "Diferencie temperatura constante de ausência de transferência de energia."
        ],
        "example": "Descrição autoral, sem gráfico externo: durante a fusão de uma substância pura, em equilíbrio e a pressão constante, a temperatura permanece no valor de fusão enquanto coexistem sólido e líquido, embora receba energia. Depois que todo sólido funde, aquecer o líquido pode elevar sua temperatura. Essa descrição não é um roteiro para aquecer materiais desconhecidos.",
        "pitfall": "Concluir que temperatura constante significa calor zero, que toda mudança visível é reação química ou que a ebulição de qualquer material ocorre sempre na mesma temperatura."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Dados autorais: uma amostra homogênea tem massa de 0,2 kg e volume de 100 cm³ nas condições informadas. Qual par expressa corretamente sua densidade nas duas unidades?",
        "hint": "Converta 0,2 kg em gramas para a primeira razão e lembre que 1 cm³ equivale a um milionésimo de m³ para a razão em SI.",
        "options": [
          "2 g/cm³, equivalente a 2 kg/m³.",
          "0,002 g/cm³, equivalente a 2 kg/m³.",
          "200 g/cm³, equivalente a 200000 kg/m³.",
          "2 g/cm³, equivalente a 2000 kg/m³."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: 0,2 kg são 200 g, e 200/100 = 2 g/cm³. Em SI, 100 cm³ são 0,0001 m³; 0,2/0,0001 = 2000 kg/m³. A acerta a primeira razão, mas erra a conversão para SI; B usa 0,2 como se fosse massa em gramas; C aumenta a razão em cem vezes. As duas unidades de uma alternativa precisam representar a mesma densidade calculada."
      },
      {
        "level": "intermediate",
        "prompt": "Em um modelo autoral, triplica-se a quantidade de um material homogêneo, mantendo composição, fase, temperatura e pressão, sem reação. Qual relação é correta?",
        "hint": "Compare m/V antes e depois: quando numerador e denominador são multiplicados pelo mesmo fator, a razão não muda.",
        "options": [
          "Massa e volume triplicam; a densidade permanece igual nas condições indicadas.",
          "Massa, volume e densidade triplicam necessariamente porque toda propriedade é extensiva.",
          "A massa triplica, mas o volume fica obrigatoriamente igual sem qualquer alteração de condições.",
          "O volume triplica e a massa permanece igual porque massa é uma propriedade intensiva."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: massa e volume são extensivos nesse modelo e triplicam, enquanto 3m/(3V) = m/V. B trata densidade como extensiva; C mantém volume sem fundamento nas condições dadas; D classifica massa incorretamente e altera apenas o denominador. O resultado não afirma que a densidade seja imune a mudanças de temperatura, pressão, composição ou fase."
      },
      {
        "level": "advanced",
        "prompt": "Descrição autoral: uma substância pura recebe calor durante a ebulição idealizada, a pressão constante, sem decomposição e com líquido e vapor coexistindo. A temperatura permanece constante. Qual conclusão é adequada?",
        "hint": "O enunciado já informa transferência de energia. Analise a mudança de estado, em vez de confundir temperatura com calor.",
        "options": [
          "A temperatura constante prova que nenhuma energia foi transferida, contrariando os dados.",
          "A coexistência de líquido e vapor demonstra obrigatoriamente formação de novas substâncias.",
          "A energia recebida pode estar associada à mudança de estado; temperatura constante nesse trecho não significa calor zero.",
          "A descrição prova que todas as misturas e substâncias fervem na mesma temperatura, independentemente da pressão."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: nas condições idealizadas dadas, a transferência de energia acompanha a vaporização enquanto coexistem líquido e vapor, sem exigir elevação de temperatura. A contradiz o recebimento de calor; B confunde mudança de estado com reação; D transforma um caso condicionado em regra universal e ignora a pressão e a composição. Não há necessidade de consultar figura ou realizar aquecimento para responder."
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
  },
  {
    "subject": "Biologia",
    "topic": "Hereditariedade, mutações e biotecnologia",
    "contentSha256": "54ef1efd366aa62ba38795e4739f4681f4686a713757ae13f16e215416fe2718",
    "draftMethod": "Autoria, análise de sequência e teste RED Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.genome.gov/genetics-glossary/Mutation",
      "https://www.genome.gov/genetics-glossary/Frameshift-Mutation",
      "https://www.genome.gov/genetics-glossary/Genetic-Engineering",
      "https://www.genome.gov/genetics-glossary/Polymerase-Chain-Reaction-PCR",
      "https://www.genome.gov/genetics-glossary/CRISPR",
      "https://www.genome.gov/genetics-glossary/Transgenic",
      "https://www.genome.gov/genetics-glossary/Phenotype",
      "https://openstax.org/books/biology-2e/pages/18-1-understanding-evolution",
      "https://openstax.org/books/biology-2e/pages/17-1-biotechnology"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Na situacao de variante detectada apenas em linhagem somatica (celulas da pele) sem presencia na linhagem germinativa, na reproducao sexuada humana, a variante nao tem via de transmitancia por gametas. A opcao A atribui transmissao obrigatoria a todos os descendentes, incorretamente. A opcao B inventa manipulacao automatica de todos os gametas. A opcao C atribuir hierarquia biologica sem fundamento. A opcao D corretamente limita a conclusao ao caso descrito, noting that the distinction does not define all reproduction forms, alinhando-se ao texto da aula sobre nao transformar a distincao em regra universal para todas as formas de reproducao (comprimento significativo acima de 80 caracteres)."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Conferência e correção da justificativa pelo principal, com parecer original preservado: B, índice 1: o original agrupa ATG AAA CCC GGG. A gera ATG AAC CCG GG, mudando o agrupamento após a retirada de uma base; B gera ATG CCC GGG e mantém o quadro posterior ao retirar três bases. Preservar quadro não garante a mesma sequência proteica nem função. A promete identidade funcional sem apoio; C inverte os efeitos; D inventa paradas sem aplicar o código. Os grupos finais dependem do modelo explicitado, e as letras isoladas não autorizam diagnóstico."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A amplificacao por PCR produz copias de um segmento de DNA e o sequenciamento determina a ordem das bases; nenhuma das duas tecnicas modifica automaticamente o genoma das celulas originais. A opcao B incorretamente atribui edicao corretiva universal ao PCR. A opcao C confunde analise de fragmento com clonagem reprodutiva de organismo inteiro. A opcao D transforma ausencia de procedimento de edicao em ausencia de variantes, que e conclusao sem relacionamento necessario. A opcao A e a unica que respeita fielmente o que a PCR e o sequenciamento realmente realizam (ou nao realizam) (comprimento significativo acima de 80 caracteres)."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Brasil colonial e escravidão",
    "contentSha256": "8bdde76302a3aa3c0e12e0d1420d308cf27ddcde8ca06fdb412cb0a652633985",
    "draftMethod": "Autoria e análise histórica Codex com fontes públicas consultadas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://multi.rio/index.php/historia-do-brasil/america-portuguesa/80-ocupa%C3%A7%C3%A3o-litor%C3%A2nea/8728-o-governo-geral",
      "https://multi.rio/index.php/historia-do-brasil/rio-de-janeiro/2416",
      "https://multi.rio/index.php/historia-do-brasil/america-portuguesa/8735",
      "https://multi.rio/index.php/historia-do-brasil/rio-de-janeiro/2435",
      "https://multi.rio/index.php/historia-do-brasil/america-portuguesa/8733",
      "https://multi.rio/index.php/historia-do-brasil/rio-de-janeiro/50-a-cidade-do-rio-de-janeiro-sob-a-%C3%B3rbita-de-portugal/2439-as-minas-gerais-os-caminhos-e-os-descaminhos-do-ouro",
      "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/institucional/memoria/memoria-fazendaria/arrecadacao-de-impostos-no-brasil-colonial",
      "https://www.gov.br/mdh/pt-br/navegue-por-temas/memoria-e-verdade-da-escravidao/acao/lugares-de-memoria/quilombo-dos-palmares"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Na tarefa básica, a alternativa B correta porque o texto da aula afirma explicitamente que o governo-geral 'buscou maior coordenação; não extinguiu imediatamente todas as capitanias hereditárias', diferentemente da alternativa A que afirma eliminação automática."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Na tarefa intermediária, a alternativa D correta porque articoliza redes mercantis, demanda de trabalho e diferenças regionais, ao contrário da alternativa A que naturaliza a escravidão por traços naturais, conforme alertam as 'pitfalls' do módulo."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Na tarefa avançada, a alternativa A correta porque diferencia intenção registrada de execução comprovada, alinhando-se ao princípio metodológico da aula de que 'uma ordem de captura revela intenção repressiva, mas não prova sozinha que a operação foi executada'."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Urbanização e redes urbanas",
    "contentSha256": "15cefcbaba4bf559c77e6d51db167e3c3ad72f4b200afe5d727c992bf7393aaf",
    "draftMethod": "Autoria, razões percentuais e teste RED Codex com fontes públicas consultadas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.ibge.gov.br/biblioteca/visualizacao/livros/liv102138.pdf",
      "https://www.ibge.gov.br/apps/areas_urbanizadas/pdf/Informativo_Areas_Urbanizadas_do_Brasil_2019.pdf",
      "https://www.ibge.gov.br/geociencias/organizacao-do-territorio/redes-e-fluxos-geograficos/15798-regioes-de",
      "https://www.ibge.gov.br/geociencias/organizacao-do-territorio/divisao-regional/15782-arranjos-populacionais-e-concentracoes-urbanas-do-brasil.html?=&t=o-que-e",
      "https://ipea.gov.br/acessooportunidades/",
      "https://www.ipea.gov.br/acessooportunidades/sobre/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Cálculo: 2000/5000·100=40% e 3000/10000·100=30%. A taxa cai de 40% para 30%, redução de 10 pontos percentuais. Embora haja mil moradores urbanos a mais, a participação relativa diminui. A alternativa correta identifica esse aumento absoluto versus perda de participação, enquanto as outras erradamente assumem que mais moradores urbanos sempre aumenta a taxa (A), usam denominador errado (B) ou confundem com parcela rural (D)."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Conferência e correção da justificativa pelo principal, com parecer original preservado: B, índice 1: a atração para serviços e decisões é indício de centralidade funcional, e a comparação exige informações sobre relações e oferta. A impõe população como critério único; C inventa conurbação sem informação sobre a mancha construída; D confunde deslocamentos de usuários com mudança permanente. O caso não autoriza atribuir às cidades fictícias uma classe específica da REGIC."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A avaliação deve comparar oportunidades acessíveis por tempo, custo e diferentes modos (caminhada, bicicleta, transporte coletivo) e grupos de população, não se restringir à velocidade média de veículos. A alternativa correta adota essa abordagem multifatorial; as outras universalizam métricas de automóveis (A), ignoram rede e barreiras (B) ou apagam diferenças entre bairros usando média municipal (C)."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Mito e filosofia",
    "contentSha256": "c4c463574074d75cfa6250145301a615ae6638883882bd205b8cc08942794ade",
    "draftMethod": "Autoria e conferência histórico-conceitual Codex com fontes acadêmicas consultadas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://plato.stanford.edu/entries/presocratics/",
      "https://plato.stanford.edu/entries/plato-myths/",
      "https://plato.stanford.edu/entries/ancient-political/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A alternativa de índice 1 evita oposição simplista entre mito e filosofia ao reconhecer que narrativas míticas podem organizar sentidos e valores, enquanto a investigação filosófica examina conceitos e razões sem garantia de infalibilidade. Esta resolução independente demonstra compreensão da distinção entre importância simbólica e demonstração de tese, ao contrário da opção 0 que reduz mito a mentira deliberada sem importância cultural, da opção 2 que equivale qualquer opinião a demonstração filosófica sem explicação de motivos, e da opção 3 que confunde verdade com uso de palavras abstratas. Cada alternativa foi analisada isoladamente para verificar a capacidade de distinguir funções diferentes dos tipos de discurso."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "A alternativa de índice 2 avalia o resumo de forma adequada ao apontar que a transformação não foi ruptura instantânea e universal, narrativas persistiram e Platão empregou mitos em suas obras, conforme evidência histórica e o próprio texto da aula que afirma 'Platão empregou mitos nos seus diálogos: narrativa e reflexão filosófica não se excluíram de modo definitivo'. As outras opções falham: a 0 atribui capacidade narrativa impossível a filósofos por definição, a 1 universaliza o erro para todas as culturas no mesmo dia (algo que o resumo não afirma) e a 3 nega que a filosofia examine razões ou diferenças entre explicações, o que é fundamental ao método filosófico segundo o próprio conteúdo da aula."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A alternativa de índice 3 representa a intervenção filosófica adequada ao questionar por que a repetição tornaria a regra justa e avaliar critérios e objeções aplicáveis, em vez de aceitar ou rejeitar automaticamente baseada apenas na duração ou recência. As opções 0, 1 e 2 representam falácias identificadas na própria aula: a) apelo à intensidade de voz como prova de justiça, b) equivalência automática entre duração e justiça, c) rejeição automática baseada apenas na idade da regra. A resolução independente confirma a capacidade de identificar a intervenção que investiga a ligação entre motivo e tese, abrindo espaço para critérios e objeções, conforme objetivo avançado da aula."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Globalização e questões socioambientais",
    "contentSha256": "aa58d60a58ff9b5323eda70e0650258594efd016e5259c473e0b9a137f2e6a5a",
    "draftMethod": "Autoria e análise sociológica Codex após rejeição de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/introduction-sociology-3e/pages/18-2-globalization-and-the-economy",
      "https://openstax.org/books/introduction-sociology-3e/pages/8-3-global-implications-of-media-and-technology",
      "https://www.wto.org/english/res_e/statis_e/miwi_e/miwi_e.htm",
      "https://www.unep.org/en/publications/report/global-resources-outlook-2024",
      "https://www.unep.org/en/what-we-do/sustainable-development-goals/why-do-sustainable-development-goals-matter/goal-10",
      "https://www.ilo.org/publications/guidelines-just-transition-towards-environmentally-sustainable-economies",
      "https://www.ipcc.ch/site/assets/uploads/2023/03/Doc4_Approved_AR6_SYR_SPM.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "A alternativa correta reconhece a interdependência produtiva internacional sem atribuir distribuição automática de benefícios; as outras opções fazem inferências não suportadas (atribuição exclusiva de valor, desaparecimento de fronteiras, igualdade não informada de trabalhadores), conforme o gabarito e a explicação da questão."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "A alternativa correta relaciona condições de infraestrutura e moradia à vulnerabilidade social sem inventar resultados medidos; as outras opções excluem relações sociais, naturalizam desigualdade ou supõem danos idênticos apesar das diferenças de proteção e exposição, conforme o gabarito e a explicação da questão."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A alternativa correta examina a redução de emissões juntamente com distribuição de consequências, trabalho e participação dos grupos afetados, conforme critérios de transição justa; as outras opções aceitam garantias sem exame, rejeitam reduções automaticamente, ou substituem verificação por rótulo, conforme o gabarito e a explicação da questão."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Teatro: dramaturgia, atuação e encenação",
    "contentSha256": "ab68ef94e401027f19b4c8905b6c8100f6274a54d300fa764891951f7bef20a1",
    "draftMethod": "Autoria e análise de cenas Codex com fontes educacionais e de instituições teatrais consultadas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://portal.educacao.go.gov.br/fundamental_dois/teatro-1-corte-texto-dramatico/",
      "https://www.rsc.org.uk/about-us/how-we-make-theatre/voice",
      "https://www.rsc.org.uk/learn/schools-and-teachers/teacher-resources/rehearsal-room-approaches-to-shakespeare",
      "https://www.rsc.org.uk/your-visit/access/assisted-performances/?from=footer",
      "https://www.ba.gov.br/fundacaocultural/noticias/2026-05/40092/funceb-promove-oficina-de-criacao-de-texto-e-cena-em-processo-colaborativo",
      "https://www.itaucultural.org.br/secoes/noticias/itau-cultural-promove-curso-de-criacao-dramaturgica-e-encenacao-teatral"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A diferenciatura correta entre a rubrica [Ivo fecha o caderno, olha a janela e permanece em silêncio] e as falas atribuídas às personagens demonstra compreensão da estrutura diálogo/ação no teatro, confirmando o índice 2 como a única opção que respeita a distinção entre indicação cênica e fala verbal"
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A leitura da relação entre fala 'Pode entrar', gesto de porta e pausa suspensiva, rejeitando deduções sobre emoções pessoais do intérprete, alinha-se ao índice 0 que preserva a análise situacional sem imposições psicológicas não informadas"
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A constatação de que reorganização de espaço, luz e som altera experiência cênica mesmo com falas preservadas confirma o índice 3, que reconhece a articulação de múltiplos materiais encenográficos sem garantir reação uniforme ou atribuir intenções não informadas"
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Práticas corporais de aventura",
    "contentSha256": "b53d3830e7a9a90b320c4c45985973d1310b963b4219644f08f5825ad5e1e08a",
    "draftMethod": "Autoria e análise educacional Codex com fontes curriculares e de conservação consultadas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf",
      "https://www.referencialcurriculardoparana.pr.gov.br/Educacao-Fisica-9o-Ano",
      "https://sme.goiania.go.gov.br/conexaoescola/ensino_fundamental/educacao-fisica-praticas-corporais-de-aventura-como-se-divertir-sem-riscos/",
      "https://www.gov.br/icmbio/pt-br/centrais-de-conteudo/publicacoes/publicacoes-diversas/Uso-publico/DiretrizesparaVisitaoemUnidadedeConservao.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A alternativa correta identifica que o ambiente (urbano vs. natureza) é o critério de classificação didática proposto pela BNCC, e que a proposta educativa deve examinar desafios, condições e possibilidades de participação, conforme a explicação da seção básica sobre aventura como relação corporal com o ambiente incerto."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A alternativa correta estabelece que mudanças nas condições do espaço exigem reavaliação junto à orientação responsável, e que a presença de proteção sozinha não garante adequação da proposta, podendo ser necessário adaptar, adiar ou interromper a atividade, conforme a seção intermediária sobre gestão de riscos."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A alternativa correta propõe rever o uso do espaço e a destinação de resíduos, organizar participação respeitosa e orientada sem constranger colegas ou presumir impacto zero, integrando os conceitos de conservação e convivência da seção avançada sobre participação, convivência e conservação em ambientes naturais e urbanos."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Propriedades da matéria",
    "contentSha256": "08c24307d8ad5d8f7e013848baac854bd6af8b9353d4b260c9e2e5bc528fd079",
    "draftMethod": "Autoria e conferência conceitual e numérica Codex com OpenStax consultado; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/1-2-phases-and-classification-of-matter",
      "https://openstax.org/books/chemistry-2e/pages/1-3-physical-and-chemical-properties",
      "https://openstax.org/books/chemistry-2e/pages/1-4-measurements",
      "https://openstax.org/books/chemistry-2e/pages/10-3-phase-transitions"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "O cálculo da densidade requer conversão de unidades: 0,2 kg equivalem a 200 g, divisão por 100 cm³ dá 2 g/cm³; em SI, 0,2 kg divididos por 0,0001 m³ dão 2000 kg/m³; a alternativa D apresenta ambas as razões corretamente e de forma consistente; as alternativas A, B e C contêm erros de conversão ou raciocínio incorreto sobre a razão massa/volume, resolução independente confirma."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Ao triplicar a quantidade de material homogêneo mantendo condições iguais, massa e volume triplem, mas a densidade, sendo razão m/V, permanece inalterada pois 3m/(3V)=m/V; as alternativas erradas tratam densidade como extensiva (B), mantêm volume sem alteração de condições (C) ou classificam massa como intensiva (D); a resolução independente confirma a correção da alternativa A."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Na ebulição idealizada com pressão constante e coexistência líquido-vapor, temperatura permanece constante mas energia é transferida para a mudança de estado (calor latente), não significando calor zero; a conclusão correta reconhece essa associação sem confundir temperatura com calor; as alternativas erradas afirmam ausência de energia (A), reação química (B) ou regra universal independende de pressão (D); a resolução independente valida a alternativa C."
      }
    ]
  }
] as const;
