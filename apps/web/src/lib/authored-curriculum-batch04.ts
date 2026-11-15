import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch04:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Funções e gráficos",
    "objective": "Relacionar domínio, imagem e representações de funções; interpretar crescimento, zeros, taxas e extremos em modelos afins e quadráticos e reconhecer diferenças de comportamento em outras famílias de gráficos.",
    "prerequisites": [
      "Conjunto dos números reais e operações",
      "Plano cartesiano e coordenadas",
      "Equações do 1º e 2º grau",
      "Noção de variável dependente e independente"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Definição e elementos de uma função",
        "explanation": "Uma função é uma relação entre dois conjuntos, denominados domínio e contradomínio, na qual a cada elemento do domínio associa-se exatamente um elemento do contradomínio. O domínio é o conjunto de todos os valores possíveis para a variável independente (geralmente x), enquanto o contradomínio é o conjunto de chegada declarado, que deve conter as saídas da regra, mesmo quando nem todos os seus elementos são atingidos. A imagem, também chamada de alcance, é o subconjunto do contradomínio formado pelos valores efetivamente assumidos pela função; ou seja, para cada x no domínio, existe um único y = f(x) na imagem. A notação f: A → B indica que f é uma função de A (domínio) em B (contradomínio). Para que uma relação seja função, o teste da linha vertical no gráfico deve ser satisfeito: cada entrada do domínio deve ter exatamente um ponto no gráfico; uma reta vertical não pode encontrar duas saídas para a mesma entrada. Funções podem ser representadas de várias formas: por meio de tabela de valores, diagrama de setas, expressão algébrica (como f(x) = 2x + 3) ou gráfico no plano cartesiano. O conceito de variável independente e dependente é central: x é a entrada que escolhemos livremente (respeitando o domínio), e y é a saída determinada univocamente pela regra da função. O domínio pode ser restringido por condições matemáticas e pelo contexto. Nos reais, 1/(x − 2) exige x diferente de 2, e a raiz quadrada de x − 3 exige x maior ou igual a 3. Se a entrada contar objetos, valores fracionários podem não ter sentido. Num gráfico, confira eixos, unidades, intervalos e pontos incluídos ou excluídos; uma tabela com poucos pontos não determina necessariamente uma única regra em todas as entradas.",
        "steps": [
          "Identifique os conjuntos domínio e contradomínio a partir da definição da função ou do contexto do problema.",
          "Verifique se a regra de associação atribui exatamente uma imagem a cada elemento do domínio (critério de funcionalidade).",
          "Determine a imagem (alcance) encontrando todos os valores y = f(x) para x no domínio.",
          "Represente a função por tabela, diagrama de setas, expressão algébrica ou gráfico no plano cartesiano.",
          "Verifique restrições algébricas e do contexto; distinga dados de uma tabela de uma regra válida para todo o domínio."
        ],
        "example": "Considere a função f: ℝ → ℝ definida por f(x) = 2x − 1. O domínio é ℝ. Para x = 3, a imagem é f(3) = 2·3 − 1 = 5. O par ordenado (3, 5) pertence ao gráfico. A imagem (alcance) é ℝ, pois para qualquer y ∈ ℝ existe x = (y+1)/2 tal que f(x) = y.",
        "pitfall": "Confundir contradomínio com imagem: o contradomínio é o conjunto de chegada declarado na definição, enquanto a imagem é o subconjunto efetivamente atingido; nem todo elemento do contradomínio precisa ser imagem de algum x."
      },
      {
        "level": "intermediate",
        "title": "Funções do 1º grau: equação, gráfico e propriedades",
        "explanation": "Uma função afim tem a forma f(x) = ax + b, com a e b reais. Se a for diferente de zero, é do primeiro grau; a = 0 produz uma função constante. O coeficiente angular a representa a taxa de variação constante: para cada aumento de 1 unidade em x, y varia a unidades. O coeficiente linear b é o valor de y quando x = 0, ou seja, a interseção do gráfico com o eixo y (ponto (0; b)). A interseção com o eixo x (zero da função) ocorre quando f(x) = 0, resultando em x = −b/a, ponto (−b/a; 0). Para domínio real completo, o gráfico é uma reta não vertical. A equação reduzida (ou forma inclinação-interceptação) é y = ax + b. A equação ponto-inclinação, útil quando se conhece um ponto (x₀; y₀) e a inclinação a, é y − y₀ = a(x − x₀). A equação geral da reta é Ax + By + C = 0, com A, B não simultaneamente nulos; dela obtém-se a = −A/B (se B ≠ 0). No plano cartesiano com eixos ortogonais na mesma escala, duas retas não verticais distintas são paralelas quando suas inclinações são iguais; duas retas com inclinações definidas são perpendiculares quando o produto delas é −1. Uma reta horizontal e uma vertical também são perpendiculares, mas a vertical não representa y como função de x nem possui coeficiente angular real definido. Funções do 1º grau modelam fenômenos de variação constante: movimento uniforme, custos lineares, conversão de escalas lineares. Para a diferente de zero, a positivo indica crescimento e a negativo, decrescimento. A taxa média entre entradas distintas é a diferença das saídas dividida pela diferença das entradas; no modelo afim ela é sempre a. Em um modelo de custo, b pode representar parcela fixa e a custo por unidade, desde que as unidades e o intervalo de validade sejam explícitos. Não extrapole automaticamente a reta para quantidades impossíveis.",
        "steps": [
          "Identifique os coeficientes a e b na expressão f(x) = ax + b e interprete seus significados geométricos.",
          "Calcule as interseções com os eixos: com y em (0; b) e com x resolvendo ax + b = 0.",
          "Determine a equação da reta dadas duas condições (dois pontos, ponto e inclinação, inclinação e intercepto y).",
          "Analise posicionamento relativo de retas (paralelismo, perpendicularismo, interseção)."
        ],
        "example": "A função f(x) = −3x + 6 tem coeficiente angular a = −3 (decrescente) e coeficiente linear b = 6. Intercepta o eixo y em (0; 6). O zero é x = −6/(−3) = 2, ponto (2; 0). A reta perpendicular a essa que passa pela origem tem inclinação 1/3, equação y = (1/3)x.",
        "pitfall": "Confundir função afim constante com primeiro grau, trocar variação de y por variação de x ou aplicar a fórmula da perpendicular a uma reta vertical sem coeficiente angular definido."
      },
      {
        "level": "advanced",
        "title": "Parábolas, transformações e comparação de comportamentos",
        "explanation": "Uma função do 2º grau (ou função quadrática) tem a forma f(x) = ax² + bx + c, com a, b, c ∈ ℝ e a ≠ 0. Seu gráfico é uma parábola com eixo de simetria vertical. O sinal de a determina a concavidade: a > 0 (concavidade para cima, vértice é mínimo) ou a < 0 (concavidade para baixo, vértice é máximo). As coordenadas do vértice V(xᵥ; yᵥ) são xᵥ = −b/(2a) e yᵥ = −Δ/(4a), onde Δ = b² − 4ac é o discriminante. As raízes (zeros da função, interseções com o eixo x) são as soluções de ax² + bx + c = 0, dadas por x = (−b ± √Δ)/(2a). Se Δ > 0, duas raízes reais distintas (parábola corta eixo x em dois pontos); Δ = 0, uma raiz real dupla (parábola tangente ao eixo x); Δ < 0, nenhuma raiz real (parábola não intercepta eixo x). A interseção com o eixo y é (0; c). A forma canônica (ou forma vértice) é f(x) = a(x − xᵥ)² + yᵥ, útil para identificar vértice e construir gráfico por translações. Funções quadráticas modelam movimento uniformemente variado, área de retângulos com perímetro fixo, lucro máximo em modelos econômicos simples, trajetória de projéteis (aproximação sem resistência do ar). Quando o domínio é todo ℝ, a imagem depende da concavidade: se a > 0, Im(f) = [yᵥ; +∞); se a < 0, Im(f) = (−∞; yᵥ]. Restrições de domínio podem mudar imagem e extremos: se o vértice ficar fora do intervalo permitido, compare os pontos admissíveis e suas fronteiras. Acrescentar k a f(x) desloca o gráfico verticalmente; f(x − h) desloca-o h unidades à direita quando h é positivo. A função módulo |x| é x para x maior ou igual a zero e −x para x menor que zero, e pode exigir análise por trechos. Na exponencial b^x, b positivo e diferente de 1, a variação multiplicativa é constante para incrementos unitários: b maior que 1 gera crescimento, e b entre 0 e 1 gera decrescimento; as saídas são positivas e o gráfico passa por (0; 1). Isso difere de somar sempre a mesma quantidade no modelo afim. A função logarítmica log_b(x), definida para x positivo, inverte essa relação: log_b(y) = x equivale a b^x = y. Seu gráfico passa por (1; 0) e pode ser comparado à exponencial trocando os eixos de entrada e saída. Comportamentos periódicos, como os de seno e cosseno, repetem valores após um período e não devem ser modelados por crescimento indefinido. Para escolher uma família, compare as condições e padrões do problema; aparência de poucos pontos ou crescimento rápido, sozinhos, não provam um modelo.",
        "steps": [
          "Calcule o discriminante Δ e determine o número e natureza das raízes reais.",
          "Encontre as coordenadas do vértice usando xᵥ = −b/(2a) e yᵥ = f(xᵥ) ou yᵥ = −Δ/(4a).",
          "Identifique a concavidade pelo sinal de a e esboce o gráfico marcando vértice, raízes (se existirem) e intercepto y.",
          "Converta entre forma padrão, forma canônica e forma fatorada (quando Δ ≥ 0) para resolver problemas de otimização ou modelagem.",
          "Confronte diferenças constantes, razões constantes, mudanças por trechos e periodicidade, respeitando o domínio de cada modelo."
        ],
        "example": "Para f(x) = −2x² + 8x − 5: a = −2 (< 0, concavidade para baixo, máximo). Δ = 64 − 40 = 24 > 0, duas raízes reais. xᵥ = −8/(−4) = 2; yᵥ = f(2) = −8 + 16 − 5 = 3. Vértice V(2; 3). Raízes: x = (−8 ± √24)/(−4) = 2 ∓ √6/2. Intercepto y: (0; −5). Imagem: (−∞; 3]. Forma canônica: f(x) = −2(x − 2)² + 3.",
        "pitfall": "Esquecer que o vértice fornece valor máximo apenas quando a < 0 e mínimo quando a > 0; inverter a condição leva a conclusões opostas em problemas de otimização. Restrição do domínio pode retirar o vértice do conjunto permitido e alterar a imagem; não use automaticamente a imagem de domínio real completo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma função f: ℝ → ℝ é definida por f(x) = 4x − 7. Qual das alternativas abaixo representa corretamente a imagem de 2 por essa função e a interseção do gráfico com o eixo y?",
        "hint": "Calcule f(2) substituindo x por 2 na expressão algébrica. A interseção com o eixo y ocorre quando x = 0.",
        "solution": "A é correta: f(2) = 4 × 2 − 7 = 1, e f(0) = −7, logo o intercepto y é (0; −7). B erra tanto o valor da função quanto o sinal do intercepto. C apresenta f(2) = 15, que não satisfaz a substituição, embora acerte o intercepto. D acerta f(2), mas troca o sinal do intercepto. Cada alternativa deve ser conferida nos dois critérios; calcular apenas a imagem de 2 não resolve a comparação.",
        "options": [
          "f(2) = 1 e intercepto y em (0; −7)",
          "f(2) = −1 e intercepto y em (0; 7)",
          "f(2) = 15 e intercepto y em (0; −7)",
          "f(2) = 1 e intercepto y em (0; 7)"
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Num plano cartesiano com eixos ortogonais na mesma escala, a reta y = ax + b passa por (1; 3) e (4; −3). Qual é o coeficiente angular da reta perpendicular a ela que passa pela origem?",
        "hint": "Primeiro determine a e b usando os dois pontos. O coeficiente angular da reta perpendicular é o inverso do oposto de a.",
        "solution": "A inclinação da primeira reta é (−3 − 3)/(4 − 1) = −2. Como as inclinações das duas retas perpendiculares têm produto −1 nas condições dadas, −2m = −1 e m = 1/2, alternativa A. B usa o inverso sem trocar o sinal; C troca só o sinal da inclinação inicial; D mantém a inclinação da reta original. Pela origem, a perpendicular tem equação y = x/2. O intercepto da reta original é 5, mas ele não entra na relação entre inclinações.",
        "options": [
          "1/2",
          "−1/2",
          "2",
          "−2"
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Num modelo fictício válido para x real entre 0 e 10, uma empresa representa lucro L(x), em mil reais, por L(x) = −x² + 10x − 16. A entrada x mede produção e venda em milhares de unidades. Em qual intervalo desse domínio o lucro do modelo é estritamente positivo?",
        "hint": "Lucro positivo significa L(x) > 0. Resolva a inequação quadrática −x² + 10x − 16 > 0. Encontre as raízes e use a concavidade da parábola.",
        "solution": "L(x) = −(x − 2)(x − 8). Os zeros são 2 e 8, e, por a = −1 ser negativo, a parábola fica acima do eixo x entre esses zeros: 2 < x < 8, alternativa A. Em 2 e 8 o lucro é zero, portanto C inclui valores que não atendem a lucro estritamente positivo. B e D selecionam regiões externas às raízes, onde o lucro é negativo dentro do domínio considerado; D também inclui os zeros. A conclusão vale para o modelo e o intervalo declarados, sem prometer esse resultado em uma empresa real.",
        "options": [
          "2 < x < 8",
          "x < 2 ou x > 8",
          "2 ≤ x ≤ 8",
          "x ≤ 2 ou x ≥ 8"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Gêneros e linguagens",
    "objective": "Distinguir gênero, sequência textual e suporte; analisar recursos verbais e não verbais, hibridismo e adequação à situação comunicativa com exemplos autorais e evidências do próprio texto.",
    "prerequisites": [
      "Identificação de quem fala, para quem e com qual finalidade",
      "Leitura de textos curtos e descrições de elementos visuais",
      "Distinção entre informação explícita e inferência"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Situação comunicativa, gênero e sequência textual",
        "explanation": "Gêneros são formas socialmente reconhecidas de interação por textos, relacionadas a propósitos, participantes, contextos e modos de organização. Convite, notícia, receita, entrevista e carta de leitor não se distinguem apenas pelo assunto: uma mesma festa pode ser tema de convite, relato ou notícia. As convenções criam expectativas, mas mudam historicamente e admitem variações. Identificar um gênero requer combinar finalidade, composição, escolhas de linguagem e situação de circulação. O suporte é o meio material ou ambiente de apresentação, como papel, mural ou página digital; ele influencia a leitura, mas não determina sozinho o gênero. Um site pode publicar uma notícia, um poema e um anúncio. Também é preciso distinguir gênero de sequências textuais: narração organiza acontecimentos; descrição apresenta características; exposição desenvolve informações e conceitos; argumentação sustenta posições; injunção orienta ações. Um mesmo gênero pode combinar sequências. Uma reportagem pode narrar um episódio, descrever um lugar e explicar um processo; não é obrigatório que toda reportagem siga exatamente a mesma abertura ou ordem. Textos orais e escritos também integram gêneros: debate e entrevista oral possuem regras de participação, turnos e finalidades. A análise mais útil pergunta o que o texto faz naquela situação, para quem e com quais recursos, em vez de procurar uma única palavra que sirva como etiqueta automática.",
        "steps": [
          "Identifique participantes, destinatário, finalidade e situação de circulação.",
          "Observe composição e escolhas de linguagem e compare-as às expectativas do gênero.",
          "Distinga o gênero do assunto e do suporte onde o texto aparece.",
          "Reconheça sequências que podem coexistir no mesmo texto, justificando pela organização."
        ],
        "example": "Comparação autoral fictícia: um convite diz “Venha à roda de leitura no sábado, às 10h”; uma notícia registra “A roda de leitura reuniu moradores na manhã de sábado”. O assunto é semelhante, mas o primeiro procura convocar participantes e o segundo relata um acontecimento. Ambos podem circular no mesmo mural ou site sem se tornarem o mesmo gênero.",
        "pitfall": "Classificar apenas pelo tema ou suporte, exigir uma estrutura rígida para todos os textos ou confundir a sequência narrativa com um gênero único."
      },
      {
        "level": "intermediate",
        "title": "Linguagens, multimodalidade e adequação",
        "explanation": "A linguagem verbal usa palavras faladas ou escritas. Imagens, gestos, sinais sonoros e organização espacial também podem produzir sentidos, e textos frequentemente articulam mais de um desses recursos. Multimodalidade envolve essa articulação: a posição de uma palavra, a relação com uma imagem, o ritmo de uma fala ou uma pausa podem mudar a leitura. Não é um fenômeno exclusivo da internet; cartazes impressos e situações presenciais também combinam recursos. Num anúncio, a imagem pode reforçar, complementar ou contradizer a frase. Uma descrição de recursos visuais precisa apontar essas relações e não tratar toda ilustração como enfeite. Em uma apresentação oral, entonação e gesto participam da construção do tom; não se deve deduzir automaticamente sinceridade ou falsidade de um gesto isolado. Adequação linguística depende de público, finalidade e relação entre participantes. Linguagem informal não é, por si, defeito, e formalidade não garante verdade. Uma orientação de segurança, um diálogo entre amigos e uma exposição de pesquisa podem exigir escolhas distintas de vocabulário, explicitação e organização. A passagem para um novo suporte pode exigir reorganização: um áudio não oferece as mesmas pistas de navegação de uma página com títulos e links. Legendas, descrições e organização clara podem ampliar acesso à mensagem; ao analisá-las, considere quem consegue perceber e compreender cada recurso.",
        "steps": [
          "Liste recursos verbais, visuais, sonoros ou gestuais efetivamente fornecidos.",
          "Explique se eles se reforçam, se complementam ou entram em tensão.",
          "Relacione registro e organização ao público e à finalidade, sem equiparar formalidade a credibilidade.",
          "Examine o que muda ao passar de um suporte a outro e quais recursos favorecem compreensão e acesso."
        ],
        "example": "Cartaz fictício descrito: uma campanha escreve “Cada gota conta” ao lado do desenho de uma torneira pingando sobre um recipiente quase vazio. A frase enfatiza valor e atenção, enquanto a cena concretiza desperdício e escassez. Ler só as palavras ou só o desenho deixa de explicar a relação construída entre os dois recursos.",
        "pitfall": "Afirmar que multimodalidade surgiu somente com redes sociais ou avaliar a mensagem ignorando a relação entre palavras, imagem, som, disposição e público."
      },
      {
        "level": "advanced",
        "title": "Hibridismo, intertextualidade e leitura crítica",
        "explanation": "Gêneros podem incorporar recursos associados a outros gêneros. Um poema pode adotar aparência de anúncio, e uma campanha pode usar a composição de uma carta. Esse hibridismo não se resolve apenas contando formatos: é preciso observar a finalidade predominante e o efeito da combinação. Intertextualidade envolve relações entre textos, por citação, alusão, retomada ou transformação; reconhecer uma referência exige evidência e repertório, não a invenção de uma fonte. Nem toda semelhança temática é citação de um texto específico. A circulação também muda a leitura: um trecho retirado de uma narrativa pode parecer declaração factual quando é publicado sem contexto. Autoria identificada, data e fonte ajudam a investigar o uso, mas não dispensam analisar conteúdo e evidências. Um perfil conhecido pode compartilhar um erro; um texto bem diagramado pode carecer de sustentação. Separar afirmação, justificativa e informação verificável permite avaliar credibilidade sem tratar um gênero inteiro como verdadeiro ou falso por natureza. Na comparação entre versões, observe títulos, cortes, legendas, marcas de opinião e informações omitidas. Uma leitura crítica deve distinguir o que o texto afirma, o que demonstra e o que permanece incerto. Ao produzir ou compartilhar, preserve o contexto necessário, reconheça autoria e não apresente um exemplo fictício como estudo ou notícia comprovada. O objetivo é sustentar interpretações e escolhas de circulação por razões explícitas, sem reduzir a análise a rótulos como formal, digital ou científico.",
        "steps": [
          "Identifique a finalidade predominante e os recursos de outros gêneros incorporados ao texto.",
          "Distinga referência efetivamente reconhecível de mera semelhança ou hipótese de influência.",
          "Compare versões e contexto para avaliar o efeito de cortes, títulos e legendas.",
          "Confronte afirmações e evidências e preserve autoria e contexto ao produzir ou compartilhar."
        ],
        "example": "Texto literário autoral fictício: “Receita para uma tarde tranquila: uma janela aberta, duas lembranças leves e uma pausa sem pressa.” A organização lembra uma receita, mas seus ingredientes e finalidade são metafóricos. A leitura pode explicar a combinação de forma injuntiva e efeito poético sem tratá-la como instrução culinária literal nem atribuí-la a um escritor real.",
        "pitfall": "Tomar a aparência de um gênero como garantia de finalidade ou verdade, inventar uma fonte para explicar uma alusão ou compartilhar ficção como comprovação factual."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Compare dois textos autorais fictícios publicados no mesmo site comunitário: I — “Participe da feira de trocas no domingo, às 9h. Traga livros em bom estado.” II — “A feira de trocas reuniu moradores no domingo e recebeu livros doados.” Qual análise distingue finalidade e suporte?",
        "hint": "O site é comum aos dois textos; observe o que cada um procura fazer com o destinatário e como apresenta o acontecimento.",
        "solution": "B distingue convocação e relato: I convida e orienta uma participação futura, enquanto II apresenta um acontecimento como realizado. O mesmo site é suporte para textos com finalidades diferentes. A usa tema comum como prova de gênero idêntico; C transforma suporte em gênero; D toma presença de um horário como prova de estrutura narrativa, ignorando a convocação. A análise precisa combinar situação, finalidade e organização.",
        "options": [
          "Como ambos mencionam a feira, precisam ter o mesmo gênero e a mesma finalidade.",
          "I procura convocar e orientar participação; II relata um acontecimento, embora ambos circulem no mesmo suporte.",
          "O site define sozinho um gênero único para qualquer texto nele publicado.",
          "Informar um horário torna obrigatoriamente I uma narrativa de um acontecimento já ocorrido."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Considere um cartaz fictício descrito integralmente: a frase “Conectados o tempo todo?” aparece acima do desenho de pessoas sentadas lado a lado, cada uma olhando para sua própria tela, sem se olhar. Qual interpretação articula os recursos fornecidos sem fazer inferências clínicas?",
        "hint": "Relacione a pergunta verbal à situação descrita e distinga reflexão sobre relações sociais de diagnóstico sobre as pessoas representadas.",
        "solution": "C articula a pergunta e a cena para sugerir uma tensão entre conexão por aparelhos e interação presencial. A ignora que o desenho participa do sentido; B inventa diagnóstico que imagem e texto não permitem; D impõe significado literal único para conectados. A leitura proposta é sustentada pela relação entre recursos, sem provar que toda tecnologia isole pessoas nem que os personagens tenham uma condição de saúde específica.",
        "options": [
          "O desenho é necessariamente decorativo e não participa da mensagem.",
          "O cartaz comprova um diagnóstico médico de cada pessoa representada.",
          "A pergunta e a cena podem problematizar a diferença entre conexão por aparelhos e interação presencial.",
          "A palavra conectados só pode designar fios elétricos, independentemente do contexto."
        ],
        "correctIndex": 2
      },
      {
        "level": "advanced",
        "prompt": "Leia este poema autoral fictício: “Comunicado aos guarda-chuvas: ficam convocados a dançar na primeira chuva. Assina: o vento.” Qual interpretação considera finalidade e hibridismo sem inventar autoria externa?",
        "hint": "Observe a retomada de marcas de um comunicado e a atribuição de ações e assinatura a elementos que, no mundo literal, não ocupam esses papéis institucionais.",
        "solution": "D reconhece marcas de comunicado em convocação e assinatura, combinadas à personificação e ao efeito poético. A toma a linguagem institucional como prova de ato oficial. B supõe que um poema não possa incorporar convenções de outro gênero. C inventa autoria histórica ausente do enunciado. O texto não precisa ser uma ordem administrativa real para mobilizar sua forma; a combinação participa da criação de sentido literário.",
        "options": [
          "A presença de convocação comprova que se trata de um ato administrativo oficial real.",
          "Um poema não pode incorporar convenções de outros gêneros em sua composição.",
          "O enunciado permite atribuir a autoria a um escritor histórico específico sem outra fonte.",
          "O poema retoma convenções de comunicado e as transforma por personificação e finalidade poética."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Estrutura dissertativo-argumentativa",
    "objective": "Organizar uma defesa de ponto de vista com introdução, desenvolvimento e conclusão articulados; avaliar argumentos, coesão e fechamento sem confundir uma estratégia de escrita com regra universal de prova.",
    "prerequisites": [
      "Identificação de tema, problema e posição defendida",
      "Leitura de justificativas e exemplos",
      "Noções de parágrafo e relações de causa, oposição e conclusão"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Tema, recorte e posição na introdução",
        "explanation": "Um texto dissertativo-argumentativo desenvolve uma posição sobre um problema, articulando razões para que o leitor possa avaliá-la. O tema é o campo discutido; o recorte delimita o aspecto que será tratado; a tese expressa a posição sustentada. Dizer que o assunto é transporte não define ainda o que se defenderá sobre acesso, organização ou prioridades. A introdução pode apresentar o problema, situar o recorte e tornar a direção argumentativa reconhecível. Uma frase declarativa específica costuma ajudar quem está aprendendo, mas sua posição exata e o número de frases não são leis universais. Perguntas podem apresentar um problema ou produzir efeito retórico; a presença de uma pergunta não dispensa uma posição identificável no conjunto do texto. Contextualizar também não significa inserir qualquer data, citação ou estatística: a informação precisa ser verdadeira, pertinente e relacionada à defesa. Se não há dado verificado, é melhor desenvolver uma razão clara que inventar uma pesquisa ou atribuição. Planeje o alcance da tese de acordo com o espaço e o que consegue sustentar. Expressões como todos, nunca e somente ampliam a exigência de prova e podem tornar frágil uma afirmação antes razoável. Na preparação para uma avaliação, examine gênero, tema, destinatário, situação e instruções atuais. Esta aula ensina uma forma de argumentar; não afirma que toda edição de todo exame peça exatamente o mesmo gênero ou modelo de parágrafos.",
        "steps": [
          "Separe assunto geral, problema delimitado e posição que pretende defender.",
          "Confira se a tese responde ao recorte e pode ser sustentada no espaço disponível.",
          "Conecte contextualização à posição, retirando dados ou citações sem verificação.",
          "Leia o comando concreto e trate modelos de introdução como estratégias, não obrigações universais."
        ],
        "example": "Exemplo autoral fictício: tema amplo, espaços públicos; recorte, acesso à praça do bairro; tese, melhorar iluminação e acesso físico pode ampliar oportunidades de uso, desde que a comunidade participe das decisões. A posição é mais delimitada que dizer apenas que praças são importantes e permite organizar razões sobre barreiras e participação.",
        "pitfall": "Confundir mencionar o tema com defender uma posição, inserir estatística inventada ou adotar uma frase pronta que não se conecte ao problema proposto."
      },
      {
        "level": "intermediate",
        "title": "Desenvolvimento: explicar, sustentar e relacionar",
        "explanation": "O desenvolvimento transforma uma posição inicial em defesa examinável. Cada parágrafo precisa contribuir para uma função reconhecível, como explicar um mecanismo, apresentar evidência, comparar alternativas ou responder a uma objeção. Uma estrutura útil combina uma ideia central, sua explicação, informação ou exemplo pertinente e uma ligação com a tese. Essa sequência é recurso de planejamento, não molde obrigatório de quatro frases. O número de parágrafos depende do projeto e das condições da tarefa: repetir uma fórmula de dois argumentos não garante qualidade. Um exemplo torna uma ideia concreta, mas um caso isolado não comprova automaticamente uma regra para todas as pessoas. Uma citação só ajuda quando é compreendida e relacionada à análise; mencionar um nome conhecido sem explicar a pertinência não substitui fundamentação. Conectivos também não criam por si uma relação lógica: escrever portanto exige que a conclusão decorra das razões anteriores, e embora apresenta concessão, não uma consequência. Evite repetir a mesma afirmação com sinônimos e chamar isso de novo argumento. Pergunte qual informação o parágrafo acrescenta e por que ela sustenta a posição. Considere ainda a força e os limites da inferência: estar mais tempo conectado a um sistema não demonstra sozinho produtividade, satisfação ou qualidade de vida. Uma objeção pode levar a qualificar a tese, reconhecer uma condição ou explicar por que a defesa continua razoável. Assim, progressão significa acrescentar e relacionar conteúdo relevante, preservando a coerência da posição.",
        "steps": [
          "Defina a função de cada parágrafo e a contribuição nova em relação à tese.",
          "Explique a passagem entre razão, exemplo ou dado e conclusão, sem saltos indevidos.",
          "Escolha conectivos pela relação efetivamente construída e confira referências e retomadas.",
          "Examine objeções e limites e retire repetições que não acrescentem sustentação."
        ],
        "example": "Análise autoral fictícia: se a tese defende horários mais variados numa biblioteca, um parágrafo pode explicar como um horário único exclui quem trabalha naquele período. Outro pode examinar limites de equipe e propor um piloto de horários alternados. O segundo acrescenta condição de viabilidade e responde a uma objeção, em vez de repetir que acesso é importante.",
        "pitfall": "Trocar explicação por enumeração de exemplos, usar conectivos incompatíveis ou concluir sobre um resultado que o dado apresentado não mede."
      },
      {
        "level": "advanced",
        "title": "Conclusão, propostas e revisão global",
        "explanation": "A conclusão fecha o percurso argumentativo e permite ao leitor reconhecer a posição à luz do que foi desenvolvido. Pode sintetizar a relação central, explicitar uma consequência ou apontar uma condição de encaminhamento coerente. Evite resolver o problema por uma afirmação inteiramente nova que não foi sustentada. Retomar a tese não exige copiá-la palavra por palavra; a retomada deve incorporar o caminho percorrido. Quando a tarefa exige proposta de intervenção, vincule-a ao problema e aos argumentos: indique o que se pretende fazer, quem pode atuar, como a ação seria organizada e que finalidade ela busca. Detalhes de público, procedimentos ou acompanhamento ajudam a tornar a proposta compreensível. Uma ação de conscientização pode ser pertinente quando seu funcionamento e sua relação com o problema são explicados; não há uma lista de verbos que transforme automaticamente toda proposta em válida ou inválida. Resultado esperado também não é resultado comprovado: um projeto pode buscar ampliar acesso sem garantir eliminar qualquer desigualdade. Na redação do Enem, a orientação institucional de 2026 prevê proposta de intervenção social relacionada ao problema e respeito aos direitos humanos. Essa exigência específica não deve ser estendida sem verificação a qualquer outra proposta de redação. Esta aula não atribui notas nem certifica atendimento integral a uma rubrica. Na revisão global, confira adequação ao comando, consistência da tese, evidências, progressão entre parágrafos, relações dos conectivos e fechamento. Corrigir apenas ortografia não resolve um salto argumentativo; revisar conteúdo e linguagem exige leituras com objetivos distintos.",
        "steps": [
          "Relacione o fechamento aos argumentos efetivamente desenvolvidos, sem acrescentar uma prova decisiva inexistente.",
          "Quando houver proposta, explicite ação, responsáveis possíveis, organização e finalidade em relação ao problema.",
          "Separe intenção de efeito e comprovação de resultado e respeite as condições do comando.",
          "Releia o conjunto para conferir tese, progressão, referências, linguagem e coerência da conclusão."
        ],
        "example": "Fechamento autoral fictício: depois de discutir falta de espaços de convivência e desigualdade de acesso, um texto propõe que a associação de bairro organize encontros em locais acessíveis, ouça demandas e registre participação para revisar horários. A ação se relaciona ao diagnóstico, mas o texto não deve prometer que a simples realização dos encontros eliminará todo isolamento social.",
        "pitfall": "Exigir a mesma proposta em toda dissertação, atribuir nota automática por um verbo isolado ou apresentar um efeito desejado como se já estivesse comprovado."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num exercício autoral fictício sobre acesso à leitura, compare as posições: I — “A leitura é importante.” II — “Ampliar o empréstimo de livros em pontos próximos aos moradores pode reduzir barreiras de deslocamento.” Qual análise distingue melhor menção ampla e tese delimitada?",
        "hint": "Observe qual formulação explicita uma relação que pode ser defendida por razões e examinada no desenvolvimento, sem prometer resolver todos os problemas.",
        "solution": "B reconhece que II delimita uma medida e uma razão para defendê-la, enquanto I permanece ampla e pouco orienta o desenvolvimento. A exige uma estatística que não é condição obrigatória de toda tese. C transforma uma possibilidade delimitada em garantia universal. D confunde o assunto com uma posição específica. A formulação II ainda precisa de sustentação e exame de limites, mas oferece uma direção argumentativa mais clara.",
        "options": [
          "Nenhuma tese pode ser formulada sem apresentar uma estatística na mesma frase.",
          "II delimita uma medida e sua relação com uma barreira; I apenas afirma uma importância geral.",
          "II comprova que a medida eliminará qualquer dificuldade de leitura para todas as pessoas.",
          "I e II são idênticas porque citar o mesmo assunto já define a mesma posição."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Num texto autoral fictício que defende horários flexíveis de atendimento, um parágrafo afirma: “O sistema ficou aberto por mais horas; portanto, todos os usuários ficaram satisfeitos.” O único dado apresentado é o total de horas de abertura. Qual revisão melhora a sustentação?",
        "hint": "O dado mede duração de funcionamento, mas a conclusão envolve a experiência de todos os usuários; examine o salto entre essas duas informações.",
        "solution": "C identifica a falta de base para a satisfação universal e propõe adequar a conclusão à evidência. A troca o conectivo sem corrigir o salto de inferência. B fortalece a mesma afirmação sem justificá-la. D transforma um número arbitrário de parágrafos em solução. Horas adicionais podem ampliar oportunidades de acesso, mas satisfação requer informação própria; a expressão todos torna a conclusão ainda mais exigente.",
        "options": [
          "Trocar portanto por embora e manter a mesma conclusão como definitivamente provada.",
          "Acrescentar com certeza antes de todos, sem apresentar outra evidência.",
          "Qualificar a conclusão e buscar dados sobre a experiência dos usuários, sem confundir horas de abertura com satisfação de todos.",
          "Adicionar um terceiro parágrafo idêntico, pois uma quantidade fixa de parágrafos garante validade."
        ],
        "correctIndex": 2
      },
      {
        "level": "advanced",
        "prompt": "Num exercício autoral fictício, o desenvolvimento identifica falta de informação sobre atividades culturais do bairro. A conclusão propõe: “O centro cultural deve divulgar uma agenda semanal em mural acessível e canais digitais, com linguagem clara e indicação de horários, para facilitar o conhecimento das atividades.” Qual avaliação é sustentada pelo texto, sem atribuir nota automática de exame?",
        "hint": "Relacione a ação ao problema apresentado e diferencie finalidade declarada de resultado efetivamente demonstrado.",
        "solution": "D identifica ação, responsável e meios relacionados à barreira informacional, mas reconhece que facilitar conhecimento é uma finalidade, ainda não um resultado comprovado. A ignora a ligação explícita entre diagnóstico e divulgação. B garante a eliminação de qualquer barreira, inclusive as que a proposta não aborda. C declara uma pontuação sem conhecer rubrica, texto completo ou avaliação. É possível discutir aperfeiçoamentos, como acesso por diferentes públicos, sem converter a análise didática em certificação de nota.",
        "options": [
          "A proposta não tem nenhuma relação com o problema de informação descrito.",
          "A agenda garante eliminar imediatamente toda barreira econômica, física e cultural do bairro.",
          "O trecho permite certificar uma nota específica em qualquer exame, independentemente da rubrica.",
          "A proposta relaciona ação, responsável e meios ao problema, mas seu efeito esperado não equivale a resultado já comprovado."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Estratégias de leitura e inferência",
    "objective": "Escolher estratégias de leitura em inglês segundo a tarefa, inferir vocabulário por evidências contextuais e comparar interpretações de relações, modalização e ironia sem extrapolar o texto.",
    "prerequisites": [
      "Reconhecimento de frases e ordem básica de palavras em inglês",
      "Identificação de sujeitos, verbos e referências pronominais",
      "Leitura de conectivos frequentes como but, because e if"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Leitura global, busca localizada e releitura",
        "explanation": "Uma estratégia de leitura deve responder à tarefa. Skimming é uma leitura panorâmica para construir uma hipótese de assunto, organização e finalidade; scanning é a busca orientada de informação específica, como nome, horário ou condição. Ler título e partes salientes pode ajudar, mas não garante que a tese esteja na primeira ou última frase. Essas estratégias são pontos de partida flexíveis: uma questão sobre tom ou argumento pode exigir reler relações entre vários trechos. Não existe uma duração única de leitura nem uma sequência obrigatória que funcione para toda pessoa e todo texto. Observe gênero e situação: um aviso pode trazer a informação principal numa condição breve, enquanto uma narrativa pode revelar um contraste somente depois. Localizar uma palavra da pergunta também não basta; é preciso ler a frase e suas restrições. Se um aviso diz open on weekdays except Tuesday, o termo weekdays não autoriza incluir terça-feira. Marque mentalmente negações, exceções, sujeitos e referências temporais, conferindo a diferença entre informação explícita e conclusão inferida. Tradução pode ajudar em certos pontos, mas traduzir uma palavra isolada sem considerar sua função e o contexto pode produzir um sentido inadequado. Ao responder, retorne à passagem que sustenta a opção, e não apenas à alternativa que repete mais palavras do texto.",
        "steps": [
          "Leia a pergunta e identifique se ela pede ideia global, dado específico ou inferência.",
          "Faça uma hipótese de organização e localize passagens relevantes sem transformar pistas em regras rígidas.",
          "Releia a informação com condições, exceções, negações e referências temporais.",
          "Compare a resposta ao trecho que a sustenta, preservando sujeito e alcance."
        ],
        "example": "Aviso autoral fictício: “The workshop is free, but registration is required. Doors open at 8:30; the session begins at 9.” Para localizar o início da atividade, a busca encontra 9, não 8:30. A leitura do contraste também impede concluir que a entrada seja automática por ser gratuita: há exigência de inscrição.",
        "pitfall": "Escolher uma opção apenas porque repete palavras do texto ou ignorar a diferença entre horário de abertura e início de uma atividade."
      },
      {
        "level": "intermediate",
        "title": "Pistas lexicais, coesão e limites da inferência",
        "explanation": "Inferir uma palavra desconhecida significa construir uma hipótese sustentada pelo entorno, não adivinhar livremente. Uma explicação pode ser introduzida por that is ou in other words; exemplos por such as; contraste por but, unlike ou whereas. Em um trecho autoral como “The room was dim, that is, there was very little light”, a reformulação ajuda a entender dim como pouco iluminado. A classe gramatical também importa: uma palavra que modifica um substantivo pode nomear uma característica, enquanto um verbo indica ação ou estado na estrutura. Pronomes e retomadas ligam partes do texto: em “The files arrived yesterday. They were incomplete”, they retoma files, e o adjetivo descreve os arquivos, não o momento de chegada. Pistas podem aparecer perto ou longe da palavra; não existe uma distância fixa máxima de duas ou três frases. Releia tanto quanto a tarefa exigir e teste a hipótese na passagem e no conjunto. Repetição e palavras de um mesmo campo de sentido ajudam, mas não tornam todos esses termos sinônimos intercambiáveis. Cognatos são pistas, não garantias: actually frequentemente significa de fato, não atualmente. Um dicionário pode ajudar a conferir acepções, mas a escolha final continua dependendo do uso. Se o contexto não decidir entre sentidos, reconheça a limitação; uma questão bem construída precisa fornecer informação suficiente para distinguir a resposta das alternativas.",
        "steps": [
          "Identifique a função gramatical da palavra e procure definição, exemplo, contraste ou reformulação.",
          "Resolva referências pronominais e relações entre frases antes de interpretar a passagem.",
          "Formule uma hipótese e teste se ela preserva gramática, coerência e contexto global.",
          "Diferencie sentido apoiado pelo trecho de associação por semelhança com o português."
        ],
        "example": "Trecho autoral fictício: “Unlike the crowded main hall, the small room was deserted: no visitors had entered it that morning.” O contraste com crowded e a explicação no visitors sustentam deserted como vazio de pessoas naquele contexto. A frase não afirma que o lugar tenha sido abandonado permanentemente ou destruído.",
        "pitfall": "Tratar todas as palavras do mesmo campo como sinônimos, confiar apenas num cognato ou acrescentar permanência e intensidade que o trecho não informa."
      },
      {
        "level": "advanced",
        "title": "Relações implícitas, modalização e ironia",
        "explanation": "Uma leitura inferencial articula pistas para interpretar o que o texto sustenta sem enunciar integralmente. Diferencie possibilidade, obrigação e certeza: may ou might podem expressar possibilidade, enquanto must pode marcar obrigação ou uma conclusão forte conforme o contexto. Alguns e todos, pode e vai, se e porque também alteram o alcance de uma paráfrase. Inferir uma relação causal exige mais que dois fatos aparecerem juntos; uma sequência temporal não demonstra sozinha que um evento causou o outro. Em argumentos, pergunte qual premissa conecta a razão à conclusão e se o texto efetivamente autoriza essa ponte. Nem todo texto pretende oferecer prova dedutiva, e uma inferência de leitura não precisa ser a única explicação imaginável de qualquer situação: ela precisa ser a interpretação melhor sustentada entre as alternativas e as evidências fornecidas. A ironia pode surgir do contraste entre elogio literal e uma situação que o enfraquece, mas aspas ou uma expressão isolada não provam ironia em todo contexto. Num trecho autoral como “The sign promised a quiet room. A loudspeaker played advertisements every five minutes. Perfect silence, apparently”, a última frase contrasta com o ruído relatado e pode ser lida como crítica. Uma paráfrase adequada preserva esse contraste sem inventar o motivo dos responsáveis nem generalizar sobre todos os lugares semelhantes. Volte ao texto para distinguir opinião atribuída a uma personagem, posicionamento do narrador e informação factual apresentada no cenário.",
        "steps": [
          "Compare sujeitos, quantificadores, negações, condições e modalizadores da alternativa com o original.",
          "Identifique a passagem que sustenta a inferência e examine se ela exige uma premissa não fornecida.",
          "Analise tom e possíveis contrastes entre formulação literal e contexto, evitando sinais automáticos de ironia.",
          "Prefira a interpretação sustentada pelo conjunto e recuse causas, intenções ou generalizações acrescentadas."
        ],
        "example": "Trecho autoral fictício: “The notice says the path may close if heavy rain returns. Today it is open.” A leitura preserva uma possibilidade condicionada: chuva forte pode levar a fechamento, mas o texto não anuncia fechamento certo nem diz que o caminho já está fechado. A paráfrase não pode trocar may por will sem mudar a mensagem.",
        "pitfall": "Transformar possibilidade em certeza, tratar associação como prova causal ou atribuir ironia e intenção somente por uma palavra fora de contexto."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Leia este aviso autoral fictício: “The reading desk normally closes at 6 p.m. On Fridays, however, it closes at 4 p.m. Book returns remain available in the outside box.” Qual é o horário de fechamento do balcão às sextas-feiras?",
        "hint": "Localize a referência a Fridays e leia o contraste introduzido por however; o funcionamento da caixa externa não é o horário do balcão.",
        "solution": "A é correta: a oração On Fridays, however, it closes at 4 p.m. apresenta a exceção ao horário normal de 6 p.m. B repete o horário habitual, ignorando a exceção. C inventa um horário não fornecido. D confunde a disponibilidade da caixa externa para devoluções com funcionamento contínuo do balcão. A localização de um dado precisa ser acompanhada da leitura de suas condições e do referente de cada informação.",
        "options": [
          "Às 16h, conforme a exceção informada para Fridays.",
          "Às 18h, sem considerar a exceção das sextas-feiras.",
          "Às 20h, horário que não aparece no aviso.",
          "O balcão permanece aberto 24 horas porque existe uma caixa externa."
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Trecho autoral fictício: “The archive had a sparse collection: just three short letters, with no photographs or diaries. The team hoped to add more material later.” Qual sentido de sparse é mais sustentado pelo contexto?",
        "hint": "A explicação depois dos dois-pontos e a intenção de acrescentar material ajudam a avaliar a quantidade disponível, não uma qualidade física das cartas.",
        "solution": "C corresponde à coleção com poucos itens: o texto explicita apenas três cartas e ausência de fotografias ou diários, além da esperança de acrescentar material. A contradiz essa descrição ao pressupor abundância. B introduz uma classificação linguística das cartas que não é informada. D confunde quantidade de material com certeza de destruição por incêndio, evento ausente do trecho. A inferência permanece limitada ao acervo descrito.",
        "options": [
          "Uma coleção abundante e completa de documentos de todos os tipos.",
          "Uma coleção composta obrigatoriamente por cartas em várias línguas.",
          "Uma coleção com poucos itens disponíveis, conforme a explicação apresentada.",
          "Uma coleção certamente destruída por um incêndio recente."
        ],
        "correctIndex": 2
      },
      {
        "level": "advanced",
        "prompt": "Texto autoral fictício: “The new app promised to make borrowing a book simple. It then asked for four passwords and required users to visit two offices. Simplicity at its finest.” Qual interpretação da última frase é mais sustentada pelo conjunto?",
        "hint": "Compare o elogio literal à simplicidade com as exigências descritas; não acrescente uma causa ou generalização que o texto não forneça.",
        "solution": "B identifica a ironia sustentada pelo contraste entre a promessa de simplicidade e o procedimento com várias exigências. A isola o elogio final e ignora esse contexto. C estende uma crítica particular a todos os aplicativos, o que o texto não autoriza. D atribui a situação a esquecimento de senhas pelos usuários, causa não apresentada. A leitura crítica pode reconhecer o tom sem inventar identidade, intenção administrativa ou resultado de um estudo real.",
        "options": [
          "O narrador elogia literalmente a simplicidade, e as exigências anteriores são irrelevantes para o tom.",
          "O elogio final funciona como crítica irônica à distância entre a promessa e as exigências descritas.",
          "O texto demonstra que todos os aplicativos existentes prejudicam necessariamente qualquer serviço.",
          "O trecho prova que os usuários esqueceram suas senhas e por isso tiveram de visitar os escritórios."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Trovadorismo e Humanismo",
    "objective": "Distinguir convenções da poesia trovadoresca galego-portuguesa e manifestações do Humanismo em Portugal, relacionando forma, voz, contexto, crônica histórica, poesia palaciana e teatro sem confundir períodos ou inventar citações.",
    "prerequisites": [
      "Distinção entre autor, voz lírica, narrador e personagem",
      "Noções de verso, estrofe, repetição e diálogo",
      "Leitura de contextos históricos sem tratar períodos como blocos homogêneos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Cantigas: voz, interlocução e construção formal",
        "explanation": "A poesia trovadoresca galego-portuguesa se desenvolveu na Idade Média peninsular, sobretudo entre o final do século XII e meados do XIV, em contextos de corte e apresentação musical. Circulou por diferentes reinos e chegou até nós em testemunhos manuscritos; não se limita ao território de Portugal atual. Entre os conjuntos preservados estão os cancioneiros da Ajuda, da Biblioteca Nacional e da Vaticana, que não têm necessariamente a mesma composição. Nas cantigas de amor, uma voz masculina frequentemente expressa sofrimento e serviço diante de uma senhora idealizada; nas de amigo, a voz feminina apresenta relações amorosas, ausências e encontros, dialogando por vezes com mãe, amigas ou elementos naturais. Voz lírica não é biografia: não se pode deduzir o sexo do autor a partir dela. Na sátira, escárnio e maldizer se diferenciam principalmente pelo modo de crítica, mais ambíguo e indireto no primeiro e mais explícito no segundo; identificar um nome isoladamente não substitui examinar o funcionamento do texto. Refrão é um segmento repetido; paralelismo relaciona estruturas semelhantes com variações. Uma cantiga de refrão contém esse segmento recorrente, enquanto uma cantiga de mestria não tem refrão. Essas classificações formais não coincidem automaticamente com gêneros: não se deve afirmar que toda cantiga de amor seja de mestria ou toda repetição seja uma prova suficiente de cantiga de amigo.",
        "steps": [
          "Identifique voz e interlocutor sem confundi-los com a identidade de quem compôs.",
          "Relacione situação amorosa ou estratégia satírica às convenções, considerando mais de uma pista.",
          "Separe classificação de gênero e presença ou ausência de refrão.",
          "Observe repetições e variações e explique como participam do sentido e da apresentação."
        ],
        "example": "Comparação didática autoral: duas estrofes podem repetir a mesma frase final e variar imagens de espera nos versos anteriores. A frase recorrente funciona como refrão; as construções semelhantes com variação permitem analisar paralelismo. Isso não autoriza atribuir o exercício a um trovador real nem concluir o gênero sem examinar voz e situação.",
        "pitfall": "Definir mestria como presença de refrão, confundir voz feminina com autoria feminina ou classificar sátira apenas pela existência de um nome próprio."
      },
      {
        "level": "intermediate",
        "title": "Humanismo, poesia palaciana e permanências",
        "explanation": "No estudo escolar da literatura portuguesa, Humanismo designa um período de transformações entre tradições medievais e novas formas de pensar e representar a experiência humana, particularmente no século XV e no início do XVI. A periodização organiza o estudo, mas não descreve uma troca instantânea de todas as crenças, formas e instituições. Atenção à ação humana, observação social e interesse por registros históricos podem coexistir com referências cristãs e estruturas de corte. Não é adequado afirmar que a religião simplesmente desapareceu. A poesia palaciana conserva temas amorosos e satíricos, explorando recursos da palavra em situações de convívio cortesão. O Cancioneiro Geral, compilado por Garcia de Resende e publicado em 1516, reúne composições de diferentes autores; o organizador não é autor de todos os poemas. A relação com a música se altera em comparação à tradição trovadoresca, e o trabalho verbal ganha destaque, com jogos de linguagem, antíteses, trocadilhos e formas como mote e glosa. O mote oferece um núcleo retomado e desenvolvido pela glosa. Redondilha maior designa verso de sete sílabas poéticas, e menor, de cinco; a contagem poética segue convenções de pronúncia e vai até a última sílaba tônica, não se confunde com contar mecanicamente sílabas escritas. Convém distinguir essas manifestações da introdução e expansão de formas italianizantes associadas ao Classicismo; estudar Humanismo não equivale a deslocar toda a aula para sonetos camonianos.",
        "steps": [
          "Situe a periodização como instrumento de estudo e procure mudanças junto a permanências.",
          "Diferencie compilação de autoria individual ao considerar o Cancioneiro Geral.",
          "Observe temas herdados e o trabalho verbal, identificando a relação entre mote e desenvolvimento.",
          "Distinga medidas e convenções poéticas sem inventar escansão ou atribuições de versos."
        ],
        "example": "Exercício autoral contemporâneo: um texto apresenta o mote “A pressa esquece o caminho” e depois desenvolve imagens de passos, desvios e reencontro. A análise pode acompanhar a retomada do núcleo e suas transformações, como exercício da relação entre mote e glosa. O exemplo não é documento do século XVI nem comprova uma métrica determinada.",
        "pitfall": "Tratar Humanismo como abandono completo da religião, atribuir toda coletânea a seu compilador ou apresentar um exercício atual como poema histórico."
      },
      {
        "level": "advanced",
        "title": "Crônica histórica e teatro: documentos, vozes e crítica",
        "explanation": "Duas manifestações importantes para estudar a produção portuguesa do período são a crônica histórica e o teatro. Fernão Lopes, ligado à guarda das escrituras da Torre do Tombo em 1418 e depois ao ofício de cronista régio, escreveu crônicas de reinados portugueses. Sua narrativa articula documentação, organização dos acontecimentos, construção de cenas e participação de diferentes atores, inclusive coletivos. Valorizar investigação documental não significa neutralidade absoluta: seleção, perspectiva e contexto político também participam do relato. Uma crônica histórica pode ser estudada como fonte e como construção narrativa, exigindo comparação e análise, não aceitação literal de toda afirmação. No teatro de Gil Vicente, cenas, tipos sociais, comicidade e alegorias permitem representar e criticar comportamentos. Uma personagem pode condensar traços de um grupo ou vício; isso não a torna retrato exato de todas as pessoas desse grupo. Alegoria organiza uma representação que remete a valores ou ideias além da ação literal. Nos autos, referências religiosas e julgamento moral podem coexistir com sátira social; crítica a um clérigo ou nobre não prova, por si, rejeição de toda religião ou de qualquer ordem social. Farsas e outros modos de composição também integram sua produção. Ao comparar textos, observe quem fala, qual situação organiza a ação, como o público é levado a avaliar comportamentos e quais convenções foram mobilizadas. Os exemplos didáticos desta aula são contemporâneos e autorais; não reproduzem falas, poemas ou cenas de obras históricas existentes.",
        "steps": [
          "Diferencie documento consultado, voz narrativa e interpretação na crônica histórica.",
          "Observe seleção de acontecimentos e participação de indivíduos e grupos sem presumir neutralidade total.",
          "Relacione ação cênica, personagem-tipo, comicidade e alegoria à crítica de comportamentos.",
          "Avalie continuidades religiosas e sociais junto à crítica, evitando conclusões universais a partir de um caso."
        ],
        "example": "Cena didática autoral fictícia: uma personagem chamada Vaidade exibe um espelho enorme, mas se recusa a ouvir qualquer outra voz. O nome e o objeto ajudam a construir uma alegoria de comportamento; a cena pode produzir crítica sem descrever uma pessoa histórica específica. Ela ilustra um recurso de leitura, não constitui trecho de Gil Vicente.",
        "pitfall": "Confundir documentação com ausência de perspectiva ou tomar a crítica de um comportamento como prova de que uma obra rejeita toda instituição e crença de sua época."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num exercício contemporâneo autoral que retoma convenções medievais, uma voz feminina conversa com a mãe sobre a espera por notícias do amado. As estrofes repetem a mesma frase final. Qual análise distingue adequadamente voz, gênero e forma?",
        "hint": "Relacione a situação às convenções da cantiga de amigo, reconheça o refrão e separe a voz construída da identidade de quem escreveu o exercício.",
        "solution": "B relaciona voz feminina e situação amorosa a convenções da cantiga de amigo e identifica a frase final recorrente como refrão, sem deduzir autoria. A confunde voz lírica com identidade do autor. C define mestria de modo invertido: mestria não tem refrão. D ignora a situação amorosa para classificar como sátira apenas pela interlocução. A identificação resulta de pistas combinadas, e o enunciado deixa claro que o material é atual, não manuscrito medieval.",
        "options": [
          "A voz feminina comprova que o autor do texto atual ou de toda cantiga semelhante é mulher.",
          "O exercício retoma convenções da cantiga de amigo e usa refrão, sem permitir deduzir a identidade do autor pela voz.",
          "A frase recorrente comprova que se trata de cantiga de mestria, definida pela presença obrigatória de refrão.",
          "Conversar com a mãe transforma necessariamente o texto em sátira de maldizer."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Um comentário didático afirma: “No Humanismo português, toda referência religiosa desapareceu, e Garcia de Resende escreveu sozinho todos os poemas do Cancioneiro Geral de 1516.” Qual revisão enfrenta os dois problemas?",
        "hint": "Diferencie mudanças culturais de ruptura total e organização de uma coletânea de autoria de cada composição nela reunida.",
        "solution": "C corrige as duas generalizações: mudanças e atenção à experiência humana coexistiram com referências religiosas, e Resende compilou uma coletânea de diferentes autores. A mantém o erro sobre religião. B mantém a autoria única. D transfere a obra para um gênero e autoria que não correspondem ao que está em análise. A revisão não nega o papel de Resende nem as transformações do período; delimita o que essas informações permitem afirmar.",
        "options": [
          "A religião realmente desapareceu, embora o Cancioneiro Geral reúna diferentes autores.",
          "Referências religiosas permaneceram, mas Resende é necessariamente o autor de todos os poemas reunidos.",
          "O período envolve mudanças e permanências religiosas, e Resende organizou uma coletânea com composições de diferentes autores.",
          "O Cancioneiro Geral é uma crônica régia escrita por Fernão Lopes, sem composições poéticas."
        ],
        "correctIndex": 2
      },
      {
        "level": "advanced",
        "prompt": "Compare dois fragmentos didáticos autorais, sem atribuição histórica: I — “A narrativa reuniu cartas e relatos, mas escolheu acompanhar sobretudo os grupos que defendiam a nova autoridade.” II — “Em cena, a personagem Cobiça carrega sacos e exige recompensa até para ouvir quem pede ajuda.” Qual interpretação combina leitura da narrativa e do recurso teatral sem generalizar?",
        "hint": "Uso de documentos não elimina seleção e perspectiva; nome e ações da personagem podem construir uma alegoria de comportamento.",
        "solution": "D reconhece seleção e ponto de vista em I, mesmo havendo fontes, e a representação alegórica de um comportamento em II. A transforma documentação em neutralidade absoluta. B reduz a cena a um retrato histórico comprovado de todas as pessoas de um grupo. C declara que alegoria impede crítica, embora nome e ação possam justamente construí-la. Os fragmentos ilustram procedimentos de leitura e não são trechos de Fernão Lopes ou Gil Vicente.",
        "options": [
          "I é automaticamente neutro porque utiliza documentos, independentemente da seleção narrativa.",
          "II comprova como se comportavam todas as pessoas de um grupo histórico real, sem qualquer outra evidência.",
          "A presença de uma alegoria em II impede qualquer leitura de crítica a comportamentos.",
          "I permite discutir seleção e perspectiva; II constrói uma alegoria por nome e ação, sem provar um retrato universal."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Cognatos, falsos cognatos e contexto",
    "objective": "Usar semelhanças entre português e espanhol como pistas, verificar falsos amigos e acepções pelo contexto e distinguir diferenças lexicais, gramaticais e regionais sem inventar regras de formação ou tradução única.",
    "prerequisites": [
      "Leitura de frases simples em espanhol",
      "Identificação de substantivos, adjetivos, verbos e artigos",
      "Distinção entre semelhança gráfica e sentido numa situação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Semelhança, origem e hipótese de leitura",
        "explanation": "Português e espanhol compartilham muitas palavras de origem relacionada, mas proximidade entre as línguas não permite traduzir por substituição automática de letras. Em sentido histórico, cognatos são palavras de origem comum; reconhecer essa origem exige informação linguística, não apenas aparência. No ensino de leitura, a semelhança formal e um sentido próximo podem ajudar a levantar hipóteses: información e informação, cultural e cultural permitem compreender muitas passagens quando a sintaxe e o contexto confirmam o uso. Correspondências como -ción e -ção aparecem em diversos pares, mas não são uma máquina para inventar toda palavra espanhola a partir de uma portuguesa. Mesmo palavras relacionadas podem desenvolver acepções, registros e combinações diferentes. O método é partir da frase: identifique a função da palavra, observe o que ela modifica ou complementa e teste uma interpretação. Em um texto sobre organização de atividades, información pode tratar de dados ou orientações oferecidos ao público; não se transforma em uma ação de informar só porque as palavras compartilham uma família. Uma hipótese lexical também precisa respeitar o argumento do texto. Se uma alternativa preserva a aparência da palavra mas muda sujeito, negação ou relação entre fatos, ela pode estar errada. Use semelhanças para ampliar compreensão e reserve a conferência em dicionário ou fonte adequada para sentidos e formas que o contexto não resolva.",
        "steps": [
          "Localize a palavra na frase e reconheça sua função gramatical.",
          "Use a semelhança com o português como hipótese inicial, sem inventar uma regra universal de transformação.",
          "Teste o sentido com complementos, modificadores e tema da passagem.",
          "Confira acepções e origem quando forem necessárias, distinguindo-as da simples aparência."
        ],
        "example": "Trecho autoral fictício: “El centro publicó información sobre las actividades culturales del mes.” A semelhança de información com informação e de culturales com culturais ajuda a entender o assunto, mas a relação entre publicou e sobre as atividades confirma a leitura. O trecho não informa que todas as atividades sejam gratuitas ou obrigatórias.",
        "pitfall": "Transformar uma correspondência frequente em regra sem exceções ou tratar palavras parecidas como garantia de que toda a alternativa preserve o sentido."
      },
      {
        "level": "intermediate",
        "title": "Falsos amigos e diferenças de sentido no uso",
        "explanation": "Falsos amigos são palavras de forma semelhante que podem conduzir a sentidos inadequados quando uma língua é lida pela outra. A expressão falsos cognatos aparece com esse uso em materiais escolares, mas diferença de sentido não comprova, por si, origem histórica diferente. A leitura deve avaliar a acepção concreta e não depender de listas absolutas. Em espanhol, polvo pode designar poeira ou pó, enquanto o animal chamado polvo em português é pulpo. No contexto de limpeza, “quitar el polvo” se refere a retirar poeira, não a remover um animal. Rojo, quando nomeia uma cor, corresponde a vermelho, não ao roxo do português. Exquisito pode indicar qualidade ou sabor muito apreciados; numa avaliação elogiosa de comida, traduzi-lo automaticamente por esquisito como estranho pode inverter o tom. Esses exemplos não autorizam declarar que cada palavra possui uma só acepção em toda variedade e registro. Também não se deve importar uma armadilha de outra língua sem verificar o par estudado: éxito e êxito podem compartilhar o sentido de sucesso em espanhol e português. Quando houver sobreposição parcial de acepções, o importante é identificar qual delas está em uso, e não forçar toda ocorrência para uma categoria fixa. Definições, exemplos, contraste e consequências descritas na frase ajudam a selecionar o sentido. A consulta a dicionário deve considerar marcas de região, registro e classe gramatical.",
        "steps": [
          "Reconheça uma possível interferência do português e proponha uma interpretação alternativa.",
          "Procure pistas de avaliação, ação, contraste ou explicação na passagem espanhola.",
          "Verifique se o sentido escolhido preserva o tom e as relações da frase.",
          "Evite classificações absolutas quando houver várias acepções ou diferenças entre variedades."
        ],
        "example": "Trecho autoral fictício: “Después de abrir las ventanas, encontraron polvo sobre los libros y lo retiraron con un paño.” Livros, limpeza e pano sustentam a acepção poeira. A hipótese do animal marinho não se ajusta à sequência descrita, embora a escrita coincida com a palavra portuguesa para esse animal.",
        "pitfall": "Traduzir exquisito por estranho em qualquer contexto, confundir polvo com pulpo ou chamar éxito de falso amigo de êxito por influência do inglês."
      },
      {
        "level": "advanced",
        "title": "Polissemia, gênero e variação sem respostas artificiais",
        "explanation": "Uma palavra pode assumir sentidos diferentes na mesma língua, e palavras próximas entre línguas podem se sobrepor apenas em determinados usos. Firma, em espanhol, pode designar uma assinatura ou uma empresa; documentos, pessoas que assinam, contratos e ações da organização ajudam a distinguir as ocorrências. O português também conhece firma em mais de um uso, portanto a diferença não pode ser resumida a uma tradução única para todas as frases. A gramática oferece outras pistas, mas exige atenção ao sentido. La leche é feminino e el viaje é masculino em espanhol; em português, o leite é masculino e a viagem, feminino. Essa diferença de gênero não transforma automaticamente as palavras em termos de significado oposto. Artigos e concordância precisam acompanhar a estrutura da língua em que o texto foi produzido. Há também variação regional: coche, auto e carro podem ser usados para automóvel em diferentes contextos e variedades, sem que a existência de um torne os outros sempre errados. Escolher uma tradução depende de público, situação, registro e acepção, não de uma lista que atribua exclusividade absoluta a cada país. Em questões de alternativa única, duas formulações igualmente corretas não devem ser distinguidas por uma preferência inventada. Para responder, compare cada opção ao contexto completo e elimine mudanças de sentido ou relações não autorizadas, preservando número, referência e tom. Se a frase não fornece a informação necessária para escolher entre acepções possíveis, reconheça a ambiguidade em vez de inventar uma regra para resolvê-la.",
        "steps": [
          "Identifique a acepção pelo contexto e compare outras possibilidades da mesma palavra.",
          "Use artigo e concordância como pistas, distinguindo gênero gramatical e significado lexical.",
          "Considere variedade e registro sem declarar incorreta uma forma válida apenas por preferência.",
          "Exija evidência que diferencie as alternativas e reconheça ambiguidades reais de tradução."
        ],
        "example": "Comparação autoral fictícia: em “Firme aquí antes de entregar el formulario”, a ação solicitada é assinar num lugar indicado; em “La firma abrió una nueva sede”, a organização abre uma unidade. A mesma família lexical participa de contextos diferentes, e a leitura precisa acompanhar ação, sujeito e complemento.",
        "pitfall": "Impor uma única tradução a todas as ocorrências, confundir gênero com sentido oposto ou inventar uma preferência regional para desempatar duas respostas válidas."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Trecho autoral fictício: “La biblioteca ofrece información sobre el horario y las actividades culturales.” Qual leitura usa adequadamente as semelhanças com o português sem acrescentar dados?",
        "hint": "Identifique o que a biblioteca oferece e a relação de sobre com os assuntos da informação, preservando o alcance da frase.",
        "solution": "A preserva a relação: há informações sobre horário e atividades culturais. B confunde a existência de informação com uma obrigação de participação. C acrescenta gratuidade não informada. D inventa que a biblioteca está fechada. Palavras semelhantes ajudam a reconhecer o tema, mas só a frase completa permite avaliar o que foi efetivamente afirmado e o que uma alternativa introduz por conta própria.",
        "options": [
          "A biblioteca oferece informações sobre o horário e as atividades culturais.",
          "A biblioteca exige que todas as pessoas participem das atividades culturais.",
          "O texto garante que todas as atividades sejam gratuitas.",
          "A passagem informa que a biblioteca está fechada permanentemente."
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Texto autoral fictício: “Probamos el postre y nos gustó muchísimo. Era exquisito; volveríamos solo para comerlo otra vez.” Qual interpretação de exquisito preserva o tom da passagem?",
        "hint": "Relacione a palavra às expressões nos gustó muchísimo e comerlo otra vez; as avaliações ao redor orientam a acepção.",
        "solution": "C preserva o elogio: no contexto, exquisito indica sabor ou qualidade muito apreciados. A transfere automaticamente a ideia de estranho do português e contradiz a avaliação. B introduz um problema sanitário não mencionado. D confunde apreciação da sobremesa com indicação de preço, que o trecho não fornece. A leitura depende das expressões de satisfação e intenção de repetir a experiência, não apenas da aparência da palavra.",
        "options": [
          "A sobremesa foi considerada estranha e desagradável pelas pessoas do texto.",
          "A palavra comprova que a sobremesa estava imprópria para consumo.",
          "A sobremesa foi muito apreciada, com avaliação elogiosa de sabor ou qualidade.",
          "O termo informa necessariamente que a sobremesa tinha o menor preço do local."
        ],
        "correctIndex": 2
      },
      {
        "level": "advanced",
        "prompt": "Compare frases autorais fictícias: I — “La firma anunció nuevos puestos de trabajo.” II — “El formulario está completo, pero falta tu firma al final.” Qual interpretação acompanha o contexto de cada ocorrência de firma?",
        "hint": "No primeiro caso, o sujeito anuncia empregos; no segundo, algo falta no fim de um formulário. A mesma palavra pode ter mais de uma acepção.",
        "solution": "B distingue empresa em I e assinatura em II. O anúncio de postos de trabalho aponta para uma organização; no formulário, a frase solicita a marca de quem assina. A inverte as acepções. C fixa assinatura nas duas ocorrências, ignorando a ação organizacional da primeira. D fixa empresa nas duas, ignorando o contexto do formulário. O português também admite firma em usos variados; o exercício avalia seleção contextual, não uma tradução única obrigatória.",
        "options": [
          "I significa assinatura, e II significa empresa, independentemente das ações descritas.",
          "I remete a uma empresa, e II remete à assinatura de uma pessoa no formulário.",
          "As duas ocorrências precisam significar assinatura porque a palavra tem uma única acepção.",
          "As duas ocorrências precisam significar empresa porque o contexto não pode alterar a leitura."
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Trabalho e energia",
    "objective": "Calcular trabalho e variações de energia em modelos de massa constante, distinguir conservação de energia total e mecânica e resolver balanços com gravidade, mola, atrito, potência e rendimento.",
    "prerequisites": [
      "Forças e leis de Newton",
      "Deslocamento, velocidade e unidades do SI",
      "Equações de primeiro e segundo grau e cosseno de ângulos usuais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Trabalho: força, deslocamento e sinal",
        "explanation": "No modelo de partícula, o trabalho de uma força constante é W = Fd cos θ, em que θ é o ângulo entre a força e o deslocamento analisado. Ele é escalar e se mede em joules: 1 J equivale a 1 N·m. Uma componente da força no sentido do deslocamento contribui com trabalho positivo; no sentido contrário, com trabalho negativo; perpendicularmente, com trabalho nulo. O sinal descreve a transferência nessa interação e não um julgamento de esforço ou qualidade. Para concluir se a energia cinética aumenta ou diminui, considere a soma dos trabalhos, não apenas uma força isolada. Se o corpo desliza numa superfície horizontal fixa e a normal é vertical, ela não realiza trabalho nesse deslocamento horizontal. Isso não autoriza afirmar que toda força normal sempre tenha trabalho nulo: a relação com o deslocamento do ponto de aplicação precisa ser examinada. Também não se deve concluir que uma força constante em módulo produza o mesmo trabalho em qualquer direção. Para forças que variam ao longo do percurso, divida o movimento em trechos adequados ou use a área algébrica de um gráfico da componente paralela da força em função da posição, quando ele for fornecido. A área abaixo do eixo contribui negativamente. Declare o referencial e as condições do modelo, pois deslocamento e energia cinética podem mudar entre referenciais, mantendo a relação consistente nos referenciais inerciais.",
        "steps": [
          "Identifique força e deslocamento no intervalo e referencial escolhidos.",
          "Use o ângulo entre esses vetores e calcule cada trabalho com seu sinal.",
          "Some as contribuições para interpretar o trabalho total e confira J = N·m.",
          "Se a força variar, acompanhe sua componente paralela ao longo do percurso, sem aplicar uma força inicial a todo o deslocamento."
        ],
        "example": "Modelo autoral: uma força de 15 N faz 30 graus com um deslocamento horizontal de 4 m. Usando a aproximação cos 30° ≈ 0,866, o trabalho dessa força é aproximadamente 15 × 4 × 0,866 = 51,96 J. O resultado se refere à força indicada; outras forças ainda precisam ser consideradas para determinar o trabalho total.",
        "pitfall": "Usar um ângulo que não seja o de força com deslocamento ou concluir sobre o trabalho total a partir de uma única contribuição."
      },
      {
        "level": "intermediate",
        "title": "Teorema trabalho–energia e energias potenciais",
        "explanation": "Para uma partícula de massa constante, em um referencial inercial, a energia cinética é Ec = mv²/2 e o trabalho total das forças é sua variação: Wtotal = Ec final − Ec inicial. Essa relação não exige que cada força seja constante, mas o cálculo do trabalho deve respeitar sua variação. Próximo à superfície da Terra, com g tratado como constante, a energia potencial gravitacional do sistema corpo–Terra pode ser escrita como mgh, escolhendo um nível de referência. O valor absoluto depende dessa escolha; diferenças de altura determinam diferenças de potencial nesse modelo. Uma altura negativa em relação ao nível escolhido não é, por si, erro físico. Para uma mola ideal que obedece à lei de Hooke, a energia elástica é kx²/2, em que x mede deformação em relação ao comprimento natural, e não necessariamente em relação ao equilíbrio de um sistema com carga. Ao incluir os potenciais, o trabalho das forças conservativas correspondentes é −ΔEp. Assim, Em = Ec + Ep pode ser acompanhado por ΔEm igual ao trabalho das demais forças, nas condições desse modelo. A energia mecânica permanece constante quando esse trabalho restante é nulo; isso pode ocorrer com forças de vínculo que não realizam trabalho. Atrito cinético e arrasto podem reduzir a parcela mecânica, transferindo energia para outras formas. Não se trata de destruição de energia total. Defina o sistema e evite contabilizar duas vezes o mesmo efeito, como incluir simultaneamente a variação de um potencial e o trabalho da força conservativa correspondente no mesmo lado do balanço.",
        "steps": [
          "Defina sistema, referencial, estados inicial e final e referência de energia potencial.",
          "Calcule Ec = mv²/2, gravidade com g constante e deformação em relação ao comprimento natural da mola.",
          "Escolha entre trabalho total igual a ΔEc ou balanço de energia mecânica com trabalhos restantes.",
          "Inclua perdas mecânicas sem duplicar o peso ou a força elástica quando seus potenciais já aparecem."
        ],
        "example": "Modelo autoral: um bloco de 0,5 kg passa a deslizar a 4 m/s numa mesa horizontal e para após 2 m somente pelo atrito. Sua energia cinética inicial é 4 J, então o trabalho do atrito é −4 J. Com g = 10 m/s² e normal igual a mg, 4 = μ × 0,5 × 10 × 2 fornece μ = 0,4. A energia mecânica diminui; a total não é destruída.",
        "pitfall": "Medir deformação a partir de um equilíbrio que não coincide com o comprimento natural, contar o peso e seu potencial duas vezes ou exigir que toda altura de referência seja positiva."
      },
      {
        "level": "advanced",
        "title": "Balanços em etapas, potência e rendimento",
        "explanation": "Em situações com várias transformações, acompanhe estados e transferências em vez de escolher uma fórmula apenas pelo nome do objeto. Um bloco pode perder energia potencial gravitacional, adquirir cinética, comprimir uma mola e transferir parte da energia mecânica ao ambiente por atrito. No modelo de massa constante sem rotação, escreva Em inicial + Wrestante = Em final, incluindo nos potenciais apenas as forças conservativas que decidiu representar dessa maneira. Se o atrito cinético tiver módulo constante e atuar contra o deslocamento relativo numa superfície fixa, seu trabalho sobre o bloco é −fd no trecho considerado. Na compressão máxima de uma mola, a velocidade pode ser zero naquele instante sem que o corpo permaneça parado depois; examine as forças para discutir o movimento seguinte. A potência média associada a um trabalho é W/Δt, em watts, com 1 W = 1 J/s. Para uma força, a potência instantânea é o produto escalar da força pela velocidade do ponto de aplicação: Fv cos θ. Média e valor instantâneo não são automaticamente iguais quando força ou velocidade variam. Num processo em que energia útil é uma parcela da energia de entrada, rendimento é η = Eútil/Eentrada; use o mesmo intervalo e uma definição clara de útil. Um modelo ideal pode usar η = 1, enquanto perdas especificadas reduzem essa fração. Não some uma perda por atrito novamente se ela já foi incluída como trabalho restante. Sistemas com entrada ou saída de massa, rotação ou outros modos de armazenamento exigem termos adicionais; o balanço simplificado só vale para as hipóteses declaradas.",
        "steps": [
          "Divida o processo em estados e localize cada transferência e forma de armazenamento.",
          "Escreva o balanço com as hipóteses do modelo e resolva somente raízes fisicamente admissíveis.",
          "Para potência, identifique intervalo, trabalho útil e diferença entre média e instante.",
          "Para rendimento, relacione energia útil e de entrada sem contar a mesma perda duas vezes."
        ],
        "example": "Modelo autoral: um equipamento ergue 30 kg por 4 m em 5 s, com velocidades inicial e final iguais, g = 10 m/s² e rendimento de 80%. O ganho de potencial é 1.200 J e a potência útil média, 240 W. A energia de entrada é 1.200/0,8 = 1.500 J, portanto a potência média de entrada é 300 W; os 300 J restantes não integram o ganho útil declarado.",
        "pitfall": "Usar a forma simplificada em sistema aberto sem novos termos, confundir energia e potência ou afirmar que rendimento ideal precisa ser estritamente menor que 100%."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um bloco de 3 kg já desliza numa superfície horizontal fixa e é empurrado por uma força horizontal de 20 N. Atuam também peso, normal e atrito cinético, com coeficiente 0,25. Ele percorre 5 m no sentido do movimento. Use g = 10 m/s². Qual é o trabalho do atrito nesse trecho?",
        "hint": "Não há aceleração vertical, portanto N = mg. A força de atrito tem módulo μN e sentido contrário ao deslocamento do bloco.",
        "solution": "A normal é 3 × 10 = 30 N, e o atrito tem módulo 0,25 × 30 = 7,5 N. Seu trabalho é −7,5 × 5 = −37,5 J, alternativa A. B e D têm módulos incompatíveis com μmgd, e C troca o sinal apesar da oposição ao movimento. A força aplicada de 20 N contribui para o trabalho total, mas o enunciado pede apenas a contribuição do atrito.",
        "options": [
          "−37,5 J",
          "−150 J",
          "37,5 J",
          "−75 J"
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Um corpo de 0,8 kg é lançado verticalmente para cima a 15 m/s. Despreze o ar e considere g = 10 m/s² constante. Qual é a altura máxima em relação ao ponto de lançamento?",
        "hint": "No ponto mais alto a velocidade vertical é zero. Iguale a energia cinética inicial ao ganho de energia potencial gravitacional.",
        "solution": "A energia cinética inicial é 0,8 × 15²/2 = 90 J. No topo ela se converte em ganho de potencial: 90 = 0,8 × 10 × h, portanto h = 11,25 m, alternativa A. B é o dobro desse resultado e não satisfaz o balanço. C repete o número da velocidade, mas isso não a converte em altura. D também não atende a mgh = 90 J. O valor é uma diferença de altura em relação ao lançamento.",
        "options": [
          "11,25 m",
          "22,5 m",
          "15,0 m",
          "9,0 m"
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "No instante em que toca uma mola ideal não deformada, um bloco de 2 kg se move a 6 m/s. Durante a compressão numa superfície horizontal fixa, há atrito cinético de coeficiente 0,50; k = 400 N/m e g = 10 m/s². Antes disso, num trecho sem atrito, um equipamento preparou esse movimento em 3 s, com rendimento de 80%, tendo como energia útil apenas a energia cinética do bloco no contato. Despreze rotação e outras perdas na compressão. Quais são a compressão máxima e a potência média de entrada do equipamento na preparação?",
        "hint": "Calcule a energia cinética no contato. Ela se divide entre mola e atrito durante a compressão; para a preparação, relacione essa energia útil ao rendimento e ao intervalo de 3 s.",
        "solution": "No contato, Ec = 2 × 6²/2 = 36 J, e o atrito durante a compressão vale 0,50 × 2 × 10 = 10 N. Então 36 = 200x² + 10x, cuja raiz positiva é 0,40 m: 32 J na mola e 4 J associados ao atrito. Na preparação, a energia de entrada é 36/0,80 = 45 J, e a potência média de entrada é 45/3 = 15 W. B acerta os dois resultados. A erra a compressão; C se aproxima da compressão sem atrito e usa a potência útil de 12 W como entrada; D multiplica a energia útil por 0,80 em vez de dividir, produzindo 9,6 W.",
        "options": [
          "0,30 m e 15 W",
          "0,40 m e 15 W",
          "0,42 m e 12 W",
          "0,40 m e 9,6 W"
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Ligações químicas",
    "objective": "Relacionar modelos de ligação iônica, covalente e metálica a estruturas e propriedades; usar elétrons de valência, Lewis, geometria e polaridade para interpretar interações e comparações entre substâncias.",
    "prerequisites": [
      "Elétrons de valência, íons e tabela periódica",
      "Diferença entre átomo, molécula e rede de partículas",
      "Noções de estado físico, dissolução e condução elétrica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Modelos de ligação e estrutura das substâncias",
        "explanation": "Ligações químicas descrevem interações que estabilizam conjuntos de átomos ou íons, envolvendo a organização dos elétrons, especialmente os de valência. No modelo iônico, cátions e ânions se atraem e podem formar redes cristalinas, como no NaCl. A fórmula expressa a proporção entre íons; não se deve imaginar necessariamente moléculas isoladas de NaCl no cristal. Na ligação covalente, pares de elétrons participam do compartilhamento entre átomos. Isso pode ocorrer em moléculas, como H₂O, ou em redes extensas, como o diamante; portanto, covalente não é sinônimo de molecular nem de baixo ponto de fusão. O modelo metálico considera elétrons deslocalizados numa estrutura de centros metálicos e ajuda a explicar condução e deformação dos materiais, sem reduzir todos os metais a propriedades idênticas. A eletronegatividade ajuda a discutir distribuição desigual de densidade eletrônica numa ligação, mas não existe um único número que classifique sem exceções qualquer substância em qualquer condição. Caráter iônico e covalente são modelos e tendências, cuja aplicação deve ser confrontada com estrutura e propriedades. No sólido iônico comum, os íons não se deslocam livremente pela rede para transportar corrente; fundido, ou dissolvido quando há íons móveis em solução, o material pode conduzir. Nem todo sal se dissolve igualmente em água. Da mesma forma, uma solução condutora não prova sozinha que a substância inicial era um sólido iônico, pois substâncias moleculares também podem formar íons ao reagir com água.",
        "steps": [
          "Identifique constituintes e organização: moléculas, rede iônica, rede covalente ou estrutura metálica.",
          "Relacione o modelo à participação dos elétrons sem usar um limiar numérico como regra universal.",
          "Ao analisar condução, verifique quais cargas podem mover-se e em qual estado ou solução.",
          "Evite transferir propriedades de uma substância para toda uma classe sem considerar a estrutura."
        ],
        "example": "Comparação didática: no cristal de NaCl, a organização é uma rede de íons, enquanto em H₂ há moléculas com ligação covalente entre dois átomos. No diamante, a rede covalente se estende pelo sólido. Os três casos mostram por que identificar o tipo de interação não dispensa perguntar como as partículas se organizam.",
        "pitfall": "Chamar todo sólido covalente de molecular, afirmar que todo sal é solúvel ou concluir o tipo de ligação apenas por uma propriedade isolada."
      },
      {
        "level": "intermediate",
        "title": "Lewis, domínios eletrônicos e polaridade molecular",
        "explanation": "Estruturas de Lewis representam elétrons de valência e ajudam a acompanhar ligações e pares não ligantes. Some os elétrons disponíveis e ajuste a contagem quando houver carga: carga negativa acrescenta elétrons e positiva retira. Distribua os elétrons segundo uma estrutura coerente, reconhecendo que a regra do octeto é útil em muitos casos, mas possui exceções e não prova sozinha a estrutura de toda espécie. Para moléculas simples, o modelo de repulsão dos domínios eletrônicos, conhecido por VSEPR, organiza regiões de densidade ao redor de um átomo central. Uma ligação simples, dupla ou tripla conta como um domínio nessa análise, e cada par livre também conta como um. Dois domínios sem pares livres no central levam a arranjo linear; três, a trigonal plano; quatro, a tetraédrico. Geometria eletrônica inclui pares livres, enquanto geometria molecular descreve posições dos átomos. Em NH₃, três ligações e um par livre no nitrogênio correspondem a arranjo eletrônico tetraédrico e forma molecular piramidal trigonal. Em H₂O, duas ligações e dois pares livres no oxigênio produzem forma angular. Não se atribui o mesmo ângulo exato a toda molécula de uma classe. Polaridade de ligação também não é polaridade da molécula: os dipolos precisam ser combinados conforme a geometria. No CO₂ linear, ligações C=O são polares, mas suas contribuições opostas se cancelam no modelo de molécula simétrica; em H₂O, a forma angular não permite esse cancelamento.",
        "steps": [
          "Conte elétrons de valência e considere a carga antes de construir a representação de Lewis.",
          "Conte domínios ao redor do central, tratando ligação múltipla como um domínio.",
          "Separe arranjo eletrônico e posição dos átomos para nomear a geometria molecular.",
          "Avalie a soma das contribuições dipolares na geometria, sem inferir polaridade apenas pela presença de ligação polar."
        ],
        "example": "Exemplo didático: em CH₄, o carbono participa de quatro ligações simples e não possui par livre na estrutura usual. Os quatro domínios produzem forma tetraédrica; com ligantes iguais e distribuição simétrica, as contribuições se cancelam e a molécula é apolar. A conclusão exige geometria e equivalência dos ligantes, não apenas contar letras da fórmula.",
        "pitfall": "Contar uma ligação dupla como dois domínios, confundir arranjo eletrônico com forma molecular ou afirmar que qualquer molécula com ligação polar é polar."
      },
      {
        "level": "advanced",
        "title": "Interações entre partículas e propriedades observáveis",
        "explanation": "É preciso distinguir ligações que organizam uma molécula e interações entre moléculas. Na ebulição de uma substância molecular que não se decompõe, a separação entre moléculas aumenta sem que seja necessário quebrar todas as suas ligações covalentes internas. Forças de dispersão de London estão presentes em sistemas moleculares, inclusive apolares, e dependem de fatores como polarizabilidade e contato entre partículas. Moléculas polares também podem apresentar atrações entre dipolos permanentes. No tratamento escolar usual, ligações de hidrogênio são reconhecidas quando hidrogênio ligado a N, O ou F interage com um sítio aceptor adequado de outra molécula ou da própria estrutura. Apenas possuir hidrogênio na fórmula não basta. O grupo O–H permite que moléculas de etanol formem essas interações entre si; um éter pode aceitar ligação de hidrogênio da água, mas, sem H ligado a N, O ou F, não oferece o mesmo papel de doador entre suas próprias moléculas. Comparar temperaturas de ebulição exige considerar conjunto das interações, tamanho, forma e pressão, e não uma hierarquia absoluta que torne qualquer ligação de hidrogênio sempre dominante sobre dispersão de qualquer outra substância. Dissolução também envolve balanço entre interações do soluto, do solvente e das novas combinações, além das condições do sistema. A expressão semelhante dissolve semelhante é orientação qualitativa, não garantia universal de solubilidade. Para redes iônicas, covalentes e metais, a estrutura extensa exige análise própria; não se pode aplicar diretamente uma regra de moléculas pequenas a todos os sólidos.",
        "steps": [
          "Diferencie ligações internas de uma molécula e interações entre partículas da substância.",
          "Identifique dispersão, polaridade e possíveis papéis de doador e aceptor em ligações de hidrogênio.",
          "Compare substâncias em condições compatíveis, considerando tamanho e forma junto às interações.",
          "Explique propriedades por um conjunto de evidências e reconheça os limites de regras qualitativas."
        ],
        "example": "Comparação didática: H₂O e H₂S têm formas angulares, mas isso não as torna equivalentes em todas as interações. No tratamento usual, O–H permite extensa associação por ligações de hidrogênio entre moléculas de água, enquanto H₂S não apresenta esse mesmo padrão. Geometria é uma informação relevante, mas não substitui a análise da natureza dos átomos e das interações.",
        "pitfall": "Tratar toda mudança de estado como quebra de ligações covalentes, considerar CH₄ doador típico de ligação de hidrogênio por conter H ou transformar uma tendência de solubilidade em regra sem exceções."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Considere NaCl sólido em condições ambientes e NaCl puro fundido, sem outras substâncias. No modelo escolar de condução por íons, qual diferença explica a condução muito maior no material fundido?",
        "hint": "A existência de cargas e a possibilidade de elas se deslocarem são questões diferentes; a fusão não transforma automaticamente o sal em sódio metálico e gás cloro.",
        "solution": "B relaciona a condução aos íons móveis no material fundido, enquanto no sólido comum eles permanecem organizados em posições da rede. A nega incorretamente a existência de cargas nos íons do cristal. C transforma a fusão numa reação de formação de elementos, não descrita. D atribui o transporte do fundido apenas a elétrons livres de um metal, modelo inadequado ao sal. A composição iônica e a mobilidade precisam ser analisadas juntas.",
        "options": [
          "O cristal não contém partículas com carga elétrica, e só a fusão cria cátions e ânions.",
          "No fundido, os íons podem deslocar-se; no sólido comum, sua mobilidade na rede é muito limitada.",
          "A fusão produz necessariamente sódio metálico e gás cloro, que explicam toda condução.",
          "NaCl fundido conduz exclusivamente por um mar de elétrons metálicos, sem participação de íons."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Para H₂O neutra, considere seis elétrons de valência do oxigênio e um de cada hidrogênio. Na estrutura usual de Lewis, o O faz duas ligações simples e possui dois pares livres. Qual é a geometria molecular e a polaridade compatível com essa descrição?",
        "hint": "Há quatro domínios ao redor do O, mas apenas dois são posições de átomos ligados; a forma dos átomos não coincide com o nome do arranjo de todos os domínios.",
        "solution": "C distingue arranjo eletrônico e forma molecular: os quatro domínios se organizam aproximadamente de modo tetraédrico, mas as posições dos três átomos formam uma molécula angular, cujas contribuições dipolares não se cancelam. A supõe geometria linear que não corresponde aos dois pares livres. B chama o arranjo eletrônico de geometria molecular e atribui cancelamento inadequado. D troca a descrição pela de três ligações e um par livre, ausente no enunciado.",
        "options": [
          "Linear e apolar, porque toda molécula com dois átomos ligados ao central é linear.",
          "Tetraédrica e apolar, pois os quatro domínios correspondem obrigatoriamente a quatro átomos ligados.",
          "Angular e polar, com duas ligações e dois pares livres no oxigênio central.",
          "Piramidal trigonal e polar, com três ligações e um par livre no oxigênio."
        ],
        "correctIndex": 2
      },
      {
        "level": "advanced",
        "prompt": "Compare etanol, CH₃CH₂OH, e éter dimetílico, CH₃OCH₃, ambos de fórmula molecular C₂H₆O. No tratamento escolar usual, qual diferença permite ao etanol formar ligações de hidrogênio entre suas próprias moléculas de modo que o éter puro não reproduz?",
        "hint": "Observe onde o hidrogênio está ligado, além da presença de oxigênio; ter um sítio aceptor não é o mesmo que possuir um grupo doador adequado.",
        "solution": "D identifica o O–H do etanol como grupo doador e a ausência de H ligado a N, O ou F no éter, para esse padrão de interação entre moléculas próprias. O éter pode aceitar ligação de hidrogênio da água, o que não o torna doador no líquido puro. A confunde fórmula molecular com estrutura. B inventa ligação iônica e C supõe que qualquer C–H desempenhe o mesmo papel. A distinção contribui para explicar propriedades, sem dispensar outras interações e condições na comparação.",
        "options": [
          "A fórmula molecular igual obriga as duas substâncias a apresentar exatamente a mesma organização e todas as mesmas interações.",
          "O etanol é obrigatoriamente uma rede iônica, enquanto o éter não contém elétrons de valência.",
          "Qualquer hidrogênio ligado a carbono no éter substitui sempre o papel do grupo O–H nas ligações de hidrogênio usuais.",
          "O etanol possui O–H doador; o éter não possui esse doador entre moléculas próprias, embora seu O possa aceitar interação com água."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Genética e hereditariedade",
    "objective": "Relacionar genes, alelos e expressão às formas de herança; resolver cruzamentos e probabilidades com hipóteses explícitas e interpretar ligação, recombinação e limites de conclusões sobre fenótipos.",
    "prerequisites": [
      "DNA, cromossomos e meiose",
      "Probabilidade simples, proporções e porcentagens",
      "Distinção entre hipótese de um modelo e determinação de uma característica real"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Genes, alelos e segregação nos cruzamentos",
        "explanation": "Genes são regiões do material genético relacionadas à produção de produtos funcionais, como RNA e, em muitos casos, proteínas. Alelos são variantes de um mesmo locus. No modelo diploide nuclear usual de um locus autossômico, o indivíduo possui duas cópias, que podem apresentar alelos iguais ou diferentes: homozigose e heterozigose. Essa descrição não deve ser estendida sem ajustes a todo organismo, organela ou situação cromossômica. Na meiose, a segregação dos cromossomos homólogos ajuda a explicar por que cada gameta recebe uma cópia daquele par no modelo. Em Aa, com segregação regular, os gametas A e a têm probabilidades iguais. Genótipo descreve a constituição considerada; fenótipo é a característica expressa, que pode depender de outros genes, regulação e ambiente. Dominância completa significa que o heterozigoto apresenta, para o caráter estudado, o mesmo fenótipo do homozigoto dominante; não significa que o alelo seja melhor, mais frequente ou sempre benéfico. Em Aa × Aa, a combinação aleatória dos gametas fornece probabilidades 1/4 AA, 1/2 Aa e 1/4 aa. Sob dominância completa e condições equivalentes de viabilidade, a proporção fenotípica esperada é 3:1. Ela é uma expectativa probabilística, não promessa de que todo conjunto de quatro descendentes terá exatamente três de um tipo e um de outro. Antes de calcular, declare símbolos, padrão de expressão e hipóteses do cruzamento.",
        "steps": [
          "Defina o locus, os alelos e o padrão de expressão indicado no problema.",
          "Liste os gametas e suas probabilidades segundo o modelo de segregação.",
          "Combine gametas e diferencie proporções genotípicas e fenotípicas.",
          "Trate resultados como probabilidades e valores esperados, não garantias de contagem exata."
        ],
        "example": "Modelo autoral: numa planta hipotética, A é completamente dominante sobre a para a característica indicada. Em AA × aa, o primeiro progenitor fornece apenas A e o segundo apenas a; todos os genótipos esperados são Aa. A conclusão depende do modelo e não afirma que toda característica de qualquer planta siga essa relação de dominância.",
        "pitfall": "Confundir dominância com frequência ou superioridade, ou interpretar uma probabilidade de 25% como obrigação de ocorrer exatamente uma vez a cada quatro descendentes."
      },
      {
        "level": "intermediate",
        "title": "Padrões de expressão, genealogias e probabilidade condicional",
        "explanation": "A segregação dos alelos não exige dominância completa. Na dominância incompleta, o heterozigoto tem fenótipo intermediário nas condições do modelo; na codominância, características dos dois alelos são reconhecíveis no heterozigoto. Uma população pode ter múltiplos alelos para um locus, sem que cada indivíduo diploide tenha todos eles. Dois ou mais genes podem influenciar um caráter, e interações como epistasia alteram a passagem de genótipo a fenótipo. Genes em cromossomos diferentes podem segregar independentemente; genes muito afastados num mesmo cromossomo também podem exibir frequências próximas da independência, mas isso não prova que estejam em cromossomos distintos. Em herança ligada ao X, a constituição de cromossomos sexuais do modelo modifica os genótipos possíveis; uma regra autossômica não pode ser aplicada sem adaptação. Herança mitocondrial tem lógica própria e, no padrão humano usual, transmissão materna, sem garantir expressão idêntica em todos os descendentes. Genealogias ou heredogramas organizam relações entre gerações e características, mas um desenho isolado nem sempre permite determinar uma única hipótese. Sob modelo autossômico recessivo, penetrância completa, sem novas mutações ou outras explicações, dois progenitores com fenótipo dominante e um descendente aa devem ser Aa. Para um novo descendente com fenótipo dominante de Aa × Aa, a probabilidade de ser heterozigoto é 2/3: exclui-se aa e restam três combinações equiprováveis: AA, Aa e aA, sendo as duas últimas o mesmo genótipo heterozigoto. O condicionamento muda o conjunto de possibilidades. Esses exercícios não constituem diagnóstico de pessoas reais nem autorizam inferir relações familiares fora das hipóteses fornecidas.",
        "steps": [
          "Identifique se o modelo é autossômico, ligado a cromossomo sexual ou de outra transmissão.",
          "Teste os genótipos contra todas as relações descritas e explicite penetrância, mutações e viabilidade quando relevantes.",
          "Para eventos independentes, multiplique probabilidades; para alternativas excludentes, some.",
          "Se houver uma condição, restrinja o universo antes de calcular e não use a probabilidade anterior sem ajuste."
        ],
        "example": "Modelo autoral de dominância incompleta: duas flores heterozigotas Rr apresentam cor intermediária, enquanto RR e rr têm cores distintas. Em Rr × Rr, as probabilidades genotípicas 1:2:1 também correspondem a três fenótipos na mesma proporção. O fenótipo intermediário não significa que os alelos tenham se misturado e perdido a possibilidade de segregar.",
        "pitfall": "Aplicar 3:1 a qualquer padrão, deduzir um modo de herança por uma única pista ou esquecer de excluir possibilidades incompatíveis com a condição do enunciado."
      },
      {
        "level": "advanced",
        "title": "Ligação, recombinação, mutação e expressão",
        "explanation": "Genes próximos num mesmo cromossomo tendem a ser transmitidos juntos, fenômeno chamado ligação gênica. Crossing over entre cromátides não irmãs de cromossomos homólogos na meiose pode gerar combinações recombinantes. Num cruzamento-teste adequado, classes de descendentes permitem estimar os gametas de um heterozigoto, distinguindo arranjos parentais e recombinantes. A frequência observada é a quantidade de recombinantes dividida pelo total. A probabilidade teórica de recombinação não ultrapassa 50% no modelo usual; flutuações amostrais podem produzir estimativas diferentes. Esse valor não equivale diretamente a distância física em pares de bases. Em intervalos pequenos ou numa aproximação didática que desconsidere eventos não detectados, 1% de recombinação corresponde a cerca de 1 centimorgan. Eventos duplos podem restaurar a combinação dos marcadores externos, de modo que frequência entre extremos e soma de distâncias adjacentes não precisam coincidir. Num teste de três pontos, comparar classes parentais e duplas recombinantes permite identificar o marcador central, desde que se reconheçam as classes e as hipóteses de viabilidade. Mutações são mudanças no material genético: podem alterar bases, segmentos ou organização cromossômica. Nem toda mudança de sequência modifica um aminoácido ou produz efeito observável, e nem toda mutação é prejudicial. Alterações somáticas e da linhagem germinativa têm consequências diferentes para transmissão entre gerações. Expressão também é regulada: possuir um alelo não significa produzir o mesmo RNA ou proteína em toda célula e condição. Muitos fenótipos envolvem múltiplos genes e ambiente; uma medida de variação numa população não fornece uma porcentagem genética para o destino de um indivíduo.",
        "steps": [
          "Identifique arranjos parentais e recombinantes e confira o total observado.",
          "Calcule frequência e interprete mapas como estimativas genéticas, distinguindo distância física.",
          "Em três pontos, determine o marcador central e conte eventos duplos em cada intervalo correspondente.",
          "Relacione variantes, expressão e ambiente, evitando tratar toda mutação ou genótipo como resultado individual inevitável."
        ],
        "example": "Cruzamento-teste autoral fictício de dois loci: 320 AB, 320 ab, 80 Ab e 80 aB, sendo AB e ab parentais. São 160 recombinantes entre 800, ou 20%. Na aproximação didática sem eventos não detectados, estima-se 20 cM; isso não significa 20 pares de bases nem garante uma relação fixa entre distância genética e física.",
        "pitfall": "Somar classes sem verificar o total, converter frequência diretamente em distância física ou inferir destino individual a partir de uma estimativa populacional."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num modelo didático de plantas diploides, R é completamente dominante sobre r para sementes lisas, e rr produz sementes rugosas. Em Rr × rr, com segregação regular, fecundação aleatória e viabilidade equivalente, qual é o número esperado de descendentes rugosos entre 120?",
        "hint": "O primeiro progenitor fornece R ou r com probabilidades iguais; o segundo fornece apenas r. Valor esperado não significa contagem obrigatória numa amostra real.",
        "solution": "Rr × rr produz probabilidade de 1/2 para Rr e 1/2 para rr. Logo, o número esperado de sementes rugosas é 120 × 1/2 = 60, alternativa A. B usa 1/4, proporção que não corresponde a esse cruzamento. C equivale a 1/3 e D a 3/4, também incompatíveis com os gametas dados. O resultado é expectativa do modelo; uma amostra observada pode apresentar flutuação sem que isso, isoladamente, invalide a herança descrita.",
        "options": [
          "60",
          "30",
          "40",
          "90"
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Numa genealogia simulada, um caráter autossômico tem dominância completa de A sobre a, penetrância completa e viabilidade equivalente. Dois progenitores com fenótipo dominante tiveram um descendente aa. Admita ausência de novas mutações. Sabe-se que um novo descendente tem fenótipo dominante. Qual a probabilidade de seu genótipo ser Aa?",
        "hint": "O descendente aa permite inferir os genótipos parentais no modelo. Depois restrinja as combinações às compatíveis com o fenótipo dominante do novo descendente.",
        "solution": "Os dois progenitores devem ser Aa para fornecer a e ainda expressar o fenótipo dominante. Em Aa × Aa, as combinações equiprováveis são AA, Aa, aA e aa. Condicionando ao fenótipo dominante, exclui-se aa: duas das três combinações restantes são heterozigotas, portanto 2/3, alternativa A. B usa a probabilidade não condicionada de aa; C mantém 1/2 sem aplicar a condição; D exclui indevidamente a possibilidade AA. O cálculo pertence ao cenário simulado, sem diagnóstico ou inferência sobre famílias reais.",
        "options": [
          "2/3",
          "1/4",
          "1/2",
          "1"
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Num cruzamento-teste fictício de três loci ligados, as classes reconstruídas de gametas são ABC: 350; abc: 350; Abc: 60; aBC: 60; ABc: 80; abC: 80; AbC: 10; aBc: 10. Considere ABC e abc parentais, AbC e aBc duplos recombinantes, viabilidade equivalente e ausência de eventos não detectados. Use a aproximação didática de 1% de recombinação por intervalo para 1 cM. Qual ordem e quais distâncias entre loci adjacentes são compatíveis?",
        "hint": "Compare cada classe dupla à parental correspondente para identificar o locus central. Depois conte recombinantes em cada par adjacente, incluindo eventos duplos nos dois intervalos.",
        "solution": "Comparar ABC com AbC e abc com aBc mostra mudança apenas de B/b, logo B é central: A–B–C ou a ordem inversa. O total é 1.000. Para A–B, recombinam Abc, aBC, AbC e aBc: 60 + 60 + 10 + 10 = 140, ou 14%. Para B–C, contam ABc, abC, AbC e aBc: 80 + 80 + 10 + 10 = 180, ou 18%. A é correta na aproximação dada. B coloca C no centro; C omite os eventos duplos nos dois intervalos; D usa valores que não correspondem a esses pares adjacentes. São estimativas de mapa genético, não distância física em bases.",
        "options": [
          "A–B–C; A–B = 14 cM e B–C = 18 cM",
          "A–C–B; A–C = 14 cM e C–B = 18 cM",
          "A–B–C; A–B = 12 cM e B–C = 16 cM",
          "A–B–C; A–B = 28 cM e B–C = 32 cM"
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Industrialização e trabalho",
    "objective": "Analisar mudanças e permanências na produção e nas relações de trabalho, relacionando industrialização, conflitos sociais, direitos historicamente disputados e modelos de organização produtiva, com leitura crítica de fontes.",
    "prerequisites": [
      "Noções de sociedade agrária, comércio e urbanização",
      "Diferença entre trabalho livre remunerado e trabalho escravizado",
      "Leitura de fontes com atenção a autoria, contexto e finalidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Industrialização: tecnologia e relações sociais",
        "explanation": "A industrialização iniciada na Grã-Bretanha no século XVIII envolveu mudanças articuladas na produção, nas fontes de energia, nos investimentos, nos transportes e nas relações sociais. Não foi um acontecimento instantâneo nem resultado de uma única invenção. Máquinas e uso crescente de energia hidráulica e a vapor ampliaram possibilidades de produzir, mas sua difusão dependeu de capital, mercados, conhecimentos, recursos e decisões políticas. No artesanato, o trabalhador costuma dominar várias etapas do produto; na manufatura, a divisão de tarefas pode reunir trabalho predominantemente manual; na maquinofatura, máquinas assumem papel central no processo. Esses modelos são instrumentos de comparação: oficinas, produção doméstica e fábricas coexistiram, sem uma substituição completa em uma data única. Trabalho assalariado já existia antes das fábricas modernas; a industrialização ampliou e reorganizou sua presença em muitos contextos. O controle dos meios de produção e da jornada podia concentrar-se no empregador, enquanto trabalhadores dependiam da remuneração para viver e negociavam em condições desiguais. Relógios, horários e supervisão passaram a regular fortemente o ritmo de muitas atividades. A expansão industrial também se conectou a redes coloniais e escravistas: a pesquisa do Science and Industry Museum sobre comerciantes de Manchester evidencia vínculos entre tecidos britânicos, comércio com o Brasil e produtos do trabalho escravizado. Assim, trabalho assalariado em uma região não demonstra que toda a cadeia produtiva fosse livre. A análise deve distinguir períodos, setores e posições sociais, incluindo mulheres e crianças, sem converter uma experiência local na história de todos os trabalhadores.",
        "steps": [
          "Localize o período e o espaço e separe industrialização de uma invenção isolada.",
          "Compare divisão de tarefas, ferramentas, máquinas e controle do processo de trabalho.",
          "Identifique quem controla recursos e horários e como a remuneração se relaciona à subsistência.",
          "Observe coexistências e conexões comerciais, inclusive relações coloniais e escravistas."
        ],
        "example": "Situação hipotética para comparação: numa cidade, uma oficina produz calçados manualmente, famílias costuram peças em casa para um comerciante e uma fábrica concentra máquinas e operários. A fábrica pode ampliar a produção e impor horários, sem provar que as outras formas desapareceram ou que todos passaram a trabalhar sob o mesmo contrato.",
        "pitfall": "Explicar a industrialização apenas pela máquina a vapor, supor que o salário foi inventado na fábrica ou confundir trabalho livre remunerado com igualdade de poder entre as partes."
      },
      {
        "level": "intermediate",
        "title": "Conflitos, organização e conquista de direitos",
        "explanation": "A expansão das fábricas e das cidades colocou em disputa salários, jornadas, segurança, moradia e participação política. Em numerosos contextos, jornadas extensas e trabalho infantil integraram condições duras de vida, mas horas, remuneração e formas de proteção variaram no tempo e entre setores. Não se deve atribuir um mesmo número de horas a todo o século XIX. Trabalhadores atuaram por associações, auxílio mútuo, greves, mobilização política e outras formas de resistência, frequentemente enfrentando repressão. O ludismo incluiu ataques organizados a máquinas no início do século XIX britânico, ligados a conflitos sobre trabalho e subsistência; não equivale simplesmente a ignorância ou rejeição de qualquer tecnologia. O cartismo articulou reivindicações de reforma política e ampliação da representação. Essas experiências não formam uma escada obrigatória em que uma resistência supostamente irracional se transforma em organização apenas depois. Leis foram conquistadas em disputas e tiveram alcance e fiscalização limitados. O Parlamento britânico destaca que a lei fabril de 1833 ampliou a regulação do trabalho infantil em setores têxteis e criou inspetores, mas sua aplicação enfrentou dificuldades. Isso não estabeleceu, de uma vez, direitos idênticos para toda a população trabalhadora. No Brasil, atividades industriais e trabalho assalariado coexistiram com a escravidão, abolida legalmente em 1888; as desigualdades raciais persistiram depois. A formação operária reuniu trabalhadores de diversas origens e não pode ser reduzida à imigração europeia. A greve de 1917 em São Paulo é um marco importante: a pesquisa da FGV relaciona carestia, reivindicações de trabalho e organizações já atuantes. Não é correto apresentá-la como a primeira greve brasileira nem como explosão sem organização anterior.",
        "steps": [
          "Distingua condições de vida, reivindicações econômicas e demandas políticas.",
          "Interprete resistências conforme o contexto, evitando julgar toda ação como simples aversão às máquinas.",
          "Ao ler uma lei histórica, pergunte quem era abrangido e como se fiscalizava o cumprimento.",
          "Relacione o caso brasileiro à escravidão, à diversidade dos trabalhadores e a organizações anteriores às grandes greves."
        ],
        "example": "Exercício de leitura histórica: uma fonte relata que uma lei limitou trabalho infantil em determinadas fábricas, mas faltavam agentes para inspecioná-las. A conclusão adequada distingue norma e efetivação. A existência da lei é mudança relevante, porém não comprova que todas as crianças de todos os setores deixaram imediatamente de trabalhar.",
        "pitfall": "Confundir aprovação de uma lei com cumprimento integral, afirmar ausência absoluta de organização antes de uma greve ou apagar trabalhadores negros e brasileiros da história operária."
      },
      {
        "level": "advanced",
        "title": "Organização produtiva e análise crítica das transformações",
        "explanation": "Taylorismo, fordismo e produção enxuta ajudam a comparar estratégias de organização, mas não são etapas que todos os países e empresas percorreram de maneira uniforme. Na administração científica de Frederick Taylor, sistematizada em obra de 1911, a gerência estuda tarefas, define métodos e padrões e orienta a execução. A separação entre planejamento e execução e o estudo dos tempos ajudam a compreender a busca de controle e produtividade; o discurso do próprio Taylor sobre cooperação deve ser lido como proposta de um autor situado, não como prova de harmonia permanente entre classes. O fordismo associa-se à produção em grande escala de bens padronizados e à linha móvel de montagem: a Ford combinou técnicas e conhecimentos anteriores em seu sistema de 1913, sem inventar sozinha toda divisão do trabalho. A linha pode elevar a produtividade e também impor ritmos repetitivos. O Sistema Toyota de Produção enfatiza fluxo sincronizado e produção conforme a necessidade, conhecidos como just-in-time, além de jidoka, que permite detectar anormalidades e interromper o processo, e melhorias contínuas. Reduzir estoques e desperdícios não significa eliminar qualquer estoque em todas as circunstâncias. A descrição oficial da empresa informa seus objetivos declarados; avaliar efeitos sobre trabalhadores exige outras evidências e contexto. Esses modelos podem coexistir e combinar-se. Automação e plataformas digitais introduzem outras possibilidades de coordenação, avaliação e distribuição de tarefas, mas a tecnologia, sozinha, não determina remuneração, autonomia ou direitos. A comparação histórica deve examinar propriedade, controle do ritmo, qualificação, negociação e distribuição dos ganhos. Não cabe presumir que todo trabalho por aplicativo tenha um único regime jurídico ou aplicar regras inventadas a todas as plataformas.",
        "steps": [
          "Identifique o mecanismo descrito: estudo e padronização de tarefas, linha móvel ou sincronização do fluxo.",
          "Separe objetivos declarados por gestores de efeitos sociais que precisam de evidências.",
          "Compare controle do ritmo, autonomia e distribuição dos ganhos sem presumir progresso social automático.",
          "Reconheça combinações entre modelos e evite conclusões jurídicas universais sobre novas formas de trabalho."
        ],
        "example": "Caso hipotético: uma fábrica combina linha móvel com reposição de componentes conforme o consumo e autoriza interromper a linha diante de defeitos. Não é necessário escolher uma etiqueta exclusiva: há elementos de produção em linha e de fluxo puxado com controle de qualidade. Para discutir condições de trabalho, ainda seria preciso investigar jornadas, remuneração e participação dos trabalhadores.",
        "pitfall": "Confundir just-in-time com estoque sempre igual a zero, tratar a descrição de uma empresa como avaliação social neutra ou assumir que aumento de produtividade garante automaticamente melhores condições de vida."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma situação hipotética, uma fábrica mecanizada cresce enquanto oficinas artesanais e famílias que produzem para comerciantes continuam trabalhando na mesma região. Qual interpretação é sustentada por essa descrição?",
        "hint": "Separe o crescimento de uma forma de produção da alegação de desaparecimento de todas as outras; observe exatamente o que o caso informa.",
        "solution": "B reconhece a coexistência explicitamente descrita: a mecanização pode expandir-se sem eliminar imediatamente oficinas e produção doméstica. A contradiz o enunciado ao afirmar substituição completa. C transforma a fábrica na origem de todo trabalho remunerado, inferência sem apoio e historicamente inadequada. D conclui igualdade de condições a partir de proximidade geográfica, que não informa contratos, jornadas ou poder de negociação.",
        "options": [
          "A mecanização já eliminou inteiramente qualquer atividade artesanal nessa região.",
          "Formas distintas de organização da produção coexistem durante o processo de industrialização.",
          "Todo trabalho remunerado da história surgiu exclusivamente nessa fábrica mecanizada.",
          "A localização na mesma região garante condições e contratos idênticos para todos."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Uma síntese didática, baseada na pesquisa da FGV sobre São Paulo em 1917, relaciona a greve à piora das condições de vida e de trabalho e à atuação de organizações operárias anteriores à paralisação. Qual explicação respeita essa relação histórica?",
        "hint": "O texto apresenta condições materiais e organização coletiva em interação; não afirma um único fator nem atribui a todos os trabalhadores a mesma origem.",
        "solution": "C articula agravamento das condições de vida e ação coletiva previamente construída, como apresenta a síntese. A elimina a organização anterior expressamente informada. B transforma uma experiência localizada em desaparecimento nacional e imediato dos conflitos, sem evidência. D reduz os trabalhadores a uma única origem e faz uma generalização que nem o texto nem a diversidade histórica sustentam. O caso exige explicar relações entre condições e atuação dos sujeitos.",
        "options": [
          "O movimento ocorreu sem qualquer associação ou atuação operária anterior.",
          "A greve encerrou imediatamente todos os conflitos de trabalho em todo o Brasil.",
          "Dificuldades de subsistência e de trabalho interagiram com redes e organizações operárias já existentes.",
          "Somente pessoas de uma única origem nacional participaram de toda a formação operária brasileira."
        ],
        "correctIndex": 2
      },
      {
        "level": "advanced",
        "prompt": "Num caso hipotético, uma empresa adota reposição conforme o consumo, mantém estoques pequenos de componentes e permite interromper a linha ao detectar defeitos. Seu anúncio afirma que isso melhora a eficiência. Qual análise combina identificação do modelo e crítica da fonte?",
        "hint": "Considere fluxo conforme a demanda, estoques explicitamente existentes e interrupção diante de anormalidades. O anúncio revela a posição da empresa, mas não mede sozinho todas as consequências sociais.",
        "solution": "A relaciona o fluxo puxado e a parada diante de defeitos a elementos do Sistema Toyota e distingue uma intenção empresarial de evidência sobre todos os efeitos sociais. B contradiz os estoques pequenos, que existem no caso, e transforma uma tendência em regra absoluta. C ignora os mecanismos descritos e reduz qualquer fábrica ao artesanato. D infere condições de trabalho ideais somente do anúncio, sem investigar jornadas, remuneração, autonomia ou participação.",
        "options": [
          "Há elementos de just-in-time e jidoka; avaliar efeitos sobre trabalhadores requer evidências além do anúncio empresarial.",
          "O caso demonstra que just-in-time exige estoque exatamente zero em qualquer empresa e situação.",
          "A existência de componentes e controle de qualidade prova ausência de máquinas e de organização industrial.",
          "A declaração de eficiência comprova, sozinha, remuneração ideal e autonomia plena de todos os trabalhadores."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Clima e ambiente",
    "objective": "Distinguir tempo e clima, interpretar temperatura e precipitação, relacionar fatores e sistemas atmosféricos à diversidade climática brasileira e analisar mudanças ambientais, riscos, mitigação e adaptação com limites explícitos dos dados.",
    "prerequisites": [
      "Localização por latitude e noções de altitude e relevo",
      "Leitura de médias, porcentagens e séries temporais",
      "Noções do ciclo da água e de ocupação do espaço"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Tempo, clima e interpretação de dados",
        "explanation": "Tempo atmosférico é o estado da atmosfera em determinado lugar e momento, descrito por elementos como temperatura, umidade, pressão, ventos e precipitação. Clima envolve padrões e variabilidade dessas condições ao longo de períodos extensos. Uma tarde fria não refuta uma tendência de aquecimento de décadas, assim como um dia quente não basta para caracterizar o clima de uma região. Normais climatológicas são referências calculadas para períodos padronizados, usualmente de trinta anos; o INMET publica, entre outras, a referência 1991–2020. Uma normal não significa que todos os anos tenham valores iguais à média. Para comparar registros, examine período, localização, instrumentos, unidade e frequência de medição. A amplitude térmica anual, no uso escolar com médias mensais, é a diferença entre a maior e a menor média mensal; ela não equivale à diferença entre extremos absolutos de dias isolados. Em um climograma, normalmente aparecem médias mensais de temperatura e totais mensais de chuva, em eixos com unidades diferentes. A soma dos totais mensais fornece a chuva anual; uma média de doze médias mensais só representa a média anual segundo uma convenção de pesos que deve estar clara. Não confunda milímetros de precipitação com porcentagem de dias chuvosos. Fatores como latitude, altitude, relevo, distância do mar, vegetação e circulação atmosférica ajudam a explicar diferenças espaciais. Em geral, a altitude favorece temperaturas menores em comparações adequadas, e a influência marítima pode moderar a amplitude, mas nenhum fator isolado determina todos os elementos de qualquer local. Classificações climáticas sintetizam padrões com critérios próprios; não basta uma temperatura ou um mês chuvoso para atribuir qualquer classe completa.",
        "steps": [
          "Separe observação pontual, padrão sazonal e tendência de longo prazo.",
          "Confira período, unidade e significado de cada número antes de comparar lugares.",
          "Calcule amplitude com valores comparáveis e some precipitações apenas quando os períodos não se sobrepõem.",
          "Relacione padrões a vários fatores, evitando transformar uma tendência geográfica em regra sem exceções."
        ],
        "example": "Dados hipotéticos: uma localidade tem maior média mensal de 27 °C e menor de 19 °C. A amplitude térmica anual das médias mensais é 27 − 19 = 8 °C. Isso não informa sua máxima absoluta, sua chuva anual nem a temperatura de todos os dias; cada conclusão exigiria outros dados.",
        "pitfall": "Usar um dia isolado para definir o clima, confundir média com extremo ou somar valores de temperatura como se fossem totais mensais de chuva."
      },
      {
        "level": "intermediate",
        "title": "Diversidade brasileira, circulação e água",
        "explanation": "A diversidade climática brasileira resulta da grande extensão territorial e da interação entre circulação atmosférica, relevo, oceanos e superfícies continentais. Em síntese escolar, há áreas equatoriais quentes e úmidas, extensas áreas tropicais com sazonalidade de chuvas, o semiárido de chuvas escassas e irregulares e áreas subtropicais com maior contraste térmico sazonal. Esses padrões não tornam todo o Norte igualmente chuvoso nem todo o Nordeste seco: o litoral, o interior e as áreas elevadas apresentam diferenças relevantes. Frentes, transporte de umidade, convecção e sistemas de convergência ajudam a explicar episódios e regimes de chuva. A Zona de Convergência Intertropical, ZCIT, relaciona-se ao encontro dos ventos alísios em baixas latitudes e seu deslocamento sazonal influencia chuvas em partes do Norte e Nordeste. A Zona de Convergência do Atlântico Sul, ZCAS, é outro sistema: uma faixa persistente de nuvens e precipitação, geralmente orientada de noroeste para sudeste, da região amazônica ao Atlântico Sul, importante sobretudo no período quente e chuvoso em partes do Centro-Oeste e Sudeste. Não é um sinônimo de ZCIT nem se explica pela identificação de qualquer dia de chuva intensa. El Niño e La Niña envolvem condições do Pacífico tropical e mudanças na circulação, com efeitos que variam por região, época e interação com outros sistemas; não garantem chuva ou seca em toda cidade brasileira. No balanço de água, precipitação é entrada importante; evaporação e transpiração retiram água para a atmosfera, enquanto infiltração, armazenamento e escoamento redistribuem a água. A evapotranspiração potencial representa uma demanda sob condições definidas de água disponível; a evapotranspiração real pode ser limitada pela falta de água no solo. Portanto, demanda atmosférica elevada pode coexistir com perda real de água reduzida num solo muito seco. A evapotranspiração de referência da FAO usa uma superfície padronizada e não é uma medida direta de toda paisagem real.",
        "steps": [
          "Localize a região e considere sazonalidade, relevo e circulação antes de generalizar um clima.",
          "Distinga ZCIT, ZCAS e frentes, sem atribuir qualquer chuva a um único sistema por exclusão.",
          "Ao avaliar El Niño ou La Niña, procure recorte regional e temporal e reconheça efeitos probabilísticos.",
          "Separe oferta de água, demanda evaporativa e evapotranspiração efetivamente realizada."
        ],
        "example": "Cenário hipotético: durante um mês de 30 dias, um episódio identificado por análise meteorológica produz 160 mm em quatro dias e os demais dias somam 240 mm. O total mensal é 400 mm; o episódio corresponde a 160/400 = 40% da chuva, embora ocupe apenas 4/30 dos dias. Frequência de dias e volume de chuva são medidas diferentes.",
        "pitfall": "Definir ZCAS apenas pelo número de dias chuvosos, dizer que El Niño produz o mesmo efeito em todo o país ou limitar a evapotranspiração potencial pela água real do solo como se os conceitos fossem idênticos."
      },
      {
        "level": "advanced",
        "title": "Mudança climática, ambiente e gestão do risco",
        "explanation": "O efeito estufa natural ocorre porque gases atmosféricos absorvem e emitem radiação infravermelha e influenciam o balanço de energia terrestre. Ele não deve ser confundido com o buraco na camada de ozônio nem tratado como um fenômeno que precisaria desaparecer: sua intensificação por atividades humanas é parte central da mudança climática atual. O IPCC atribui inequivocamente o aquecimento global observado à atividade humana, principalmente às emissões de gases de efeito estufa. Combustíveis fósseis e mudanças no uso da terra participam dessas emissões. Variabilidade natural continua existindo, mas não explica sozinha a tendência recente de aquecimento global. Projeções climáticas analisam respostas a condições e trajetórias de emissões; não são previsões exatas do tempo de uma cidade em uma data futura. Uma projeção deve informar cenário, período, referência e incerteza. Não se pode multiplicar uma variação de temperatura por um número universal e deduzir chuva ou evapotranspiração sem os dados e o modelo adequados. Mudanças locais, como impermeabilização e redução de cobertura vegetal, também alteram escoamento e condições térmicas. Ilha de calor urbana e aquecimento global têm escalas e mecanismos relacionados, porém distintos: um não explica integralmente o outro. Risco climático envolve o perigo físico, a exposição de pessoas e bens e a vulnerabilidade, ligada às condições sociais e à capacidade de resposta. Uma mesma chuva pode ter impactos muito diferentes conforme ocupação, drenagem, relevo e proteção social. Mitigação busca reduzir emissões ou ampliar remoções de gases de efeito estufa; adaptação busca reduzir danos e vulnerabilidades diante dos efeitos do clima. Transporte de baixa emissão pode contribuir para mitigação, enquanto alerta e planejamento para enchentes são medidas de adaptação. Algumas ações contribuem para ambas, mas seus efeitos e limites precisam ser avaliados, sem prometer eliminar todo risco.",
        "steps": [
          "Distinga efeito estufa natural, sua intensificação e fenômenos de escala local.",
          "Leia cenário, horizonte e referência de uma projeção e preserve os intervalos e limites dos dados.",
          "Analise perigo, exposição e vulnerabilidade em conjunto, incluindo desigualdades sociais.",
          "Classifique ações pela finalidade e avalie possíveis benefícios conjuntos e limites."
        ],
        "example": "Caso hipotético: dois bairros recebem chuva semelhante, mas um possui moradias em área inundável e drenagem insuficiente, enquanto o outro tem menor exposição e infraestrutura adequada. A diferença de danos não permite concluir que a chuva foi diferente: exposição e vulnerabilidade também importam. Alertas e planejamento territorial reduzem riscos, enquanto reduzir emissões atua na mitigação.",
        "pitfall": "Confundir um cenário com previsão diária certa, atribuir todo desastre apenas à chuva ou supor que adaptação dispensa reduzir emissões e garante ausência de perdas."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma série hipotética de médias mensais de temperatura de um ano tem maior média de 29 °C e menor de 21 °C. No mesmo local, um dia isolado registrou máxima de 35 °C e mínima de 18 °C. Qual é a amplitude anual das médias mensais informadas?",
        "hint": "O cálculo pedido usa a maior e a menor média mensal, e não os extremos observados num único dia nem a soma de temperaturas.",
        "solution": "C usa as duas médias mensais comparáveis: 29 − 21 = 8 °C. A apresenta 35 − 18 = 17 °C, amplitude diária dos extremos mencionados, que responde outra pergunta. B apresenta a soma 29 + 21 = 50 °C, sem representar amplitude. D apresenta 35 − 21 = 14 °C e mistura máxima diária com média mensal. A escolha das medidas deve corresponder ao período e ao conceito solicitado.",
        "options": [
          "17 °C, usando a máxima e a mínima daquele dia isolado.",
          "50 °C, somando as duas médias mensais extremas.",
          "8 °C, subtraindo a menor média mensal da maior.",
          "14 °C, comparando a máxima diária com a menor média mensal."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Em um mês hipotético de 31 dias, uma análise meteorológica identificou seis dias de ZCAS em uma estação. Nesses seis dias caíram 210 mm; nos demais 25 dias, 200 mm. Qual afirmação interpreta corretamente a participação do episódio no total mensal?",
        "hint": "A parcela de chuva exige comparar milímetros com milímetros, usando como denominador a chuva de todos os dias do mês; a parcela de dias é outra razão.",
        "solution": "A soma as parcelas sem sobreposição: 210 + 200 = 410 mm, e calcula 210/410 × 100 ≈ 51,2%. B calcula 6/31 × 100 ≈ 19,4%, que é a parcela de dias, não a de precipitação. C usa 210/200 × 100 = 105%, comparação com a outra parcela e não com o total. D toma os 200 mm dos demais dias como se fossem o episódio, invertendo as categorias. A identificação da ZCAS foi fornecida pela análise, não inferida só da quantidade de chuva.",
        "options": [
          "Cerca de 51,2% da chuva mensal ocorreu nos seis dias identificados de ZCAS.",
          "Cerca de 19,4% da chuva mensal, porque seis dos 31 dias pertencem ao episódio.",
          "Exatamente 105% do total mensal, pois a parcela do episódio deve ser dividida somente pelos outros dias.",
          "A parcela da ZCAS foi de 200 mm, pois esse é o total registrado nos demais dias."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Num município hipotético, o plano A amplia transporte coletivo de baixa emissão para reduzir gases de efeito estufa. O plano B melhora alertas de enchentes e reduz ocupação em áreas expostas para diminuir danos. Sem presumir efeitos adicionais, qual distinção descreve as finalidades declaradas?",
        "hint": "Observe o objetivo de cada medida: atuar sobre emissões que contribuem para o aquecimento ou reduzir exposição e danos diante dos efeitos do clima.",
        "solution": "D identifica a redução de emissões do plano A como mitigação e a redução de riscos do plano B como adaptação. As medidas podem ter benefícios adicionais, mas isso não altera as finalidades explicitadas. A inverte os conceitos. B afirma que alertas reduzem diretamente todas as emissões, algo que o caso não informa. C promete eliminar qualquer risco, conclusão que não decorre de planejamento ou infraestrutura. Não há garantia de ausência de danos nem autorização para dispensar uma das frentes.",
        "options": [
          "A é adaptação por reduzir emissões; B é mitigação por alertar para enchentes.",
          "Ambos eliminam diretamente todas as emissões do município, inclusive as não relacionadas ao transporte.",
          "O plano B garante ausência de qualquer dano futuro e torna desnecessário avaliar vulnerabilidades.",
          "A tem finalidade de mitigação; B tem finalidade de adaptação, sem garantia de eliminar todo risco."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Filosofia antiga e ética clássica",
    "objective": "Relacionar investigação racional, conhecimento e vida boa na filosofia antiga; distinguir a ética de Sócrates, Platão e Aristóteles e comparar escolas helenísticas sem reduzir suas propostas a slogans contemporâneos.",
    "prerequisites": [
      "Noções de pólis e contexto da Grécia antiga",
      "Distinção entre argumento e afirmação sem justificativa",
      "Conceitos iniciais de ética, virtude e vida coletiva"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Da investigação da natureza ao exame da vida",
        "explanation": "A filosofia antiga reúne problemas diversos sobre natureza, conhecimento, vida coletiva e ação humana; não constitui uma doutrina única nem se reduz à ética. Pensadores chamados pré-socráticos investigaram princípios e transformações da natureza por argumentos distintos. A passagem para a argumentação filosófica não significou o desaparecimento instantâneo dos mitos. Sofistas atuaram na educação e no debate público da pólis, discutindo linguagem, convenções e vida política; não é adequado atribuir a todos uma única tese. Sócrates é conhecido por fontes como os diálogos de Platão, e distinguir personagem literária e pessoa histórica evita tratar cada fala de um diálogo como registro literal. O exame socrático interroga definições, pede razões e confronta consequências: enumerar exemplos de coragem não é ainda definir o que torna tais ações corajosas. Em vários diálogos, conhecimento e virtude estão estreitamente ligados, e agir mal é relacionado à ignorância do bem; isso deve ser compreendido como posição filosófica em discussão, não como descoberta científica sobre qualquer comportamento. Platão relaciona ética, política e educação. Na República, a justiça é investigada pela comparação entre cidade e alma. A razão, a dimensão impetuosa ou irascível e os apetites desempenham funções distintas; a justiça envolve uma ordenação adequada entre elas. A temperança não é simplesmente a virtude isolada do apetite: envolve concordância sobre a direção racional. A Forma do Bem orienta a relação entre conhecimento e vida justa no projeto platônico. A distinção entre opinião e conhecimento não autoriza dizer que toda experiência sensível seja inútil ou que aprender seja decorar opiniões de autoridade. Interpretar essas propostas exige reconstruir argumentos e reconhecer seu contexto político, inclusive exclusões da cidadania antiga, sem identificá-las automaticamente com instituições atuais.",
        "steps": [
          "Identifique qual problema está em discussão: natureza, conhecimento, definição moral ou organização política.",
          "Reconstrua perguntas e razões do exame socrático, distinguindo exemplo e definição.",
          "Na República, relacione partes da alma, educação e justiça sem atribuir cada virtude mecanicamente a uma parte isolada.",
          "Considere autoria, forma dialógica e contexto antes de converter uma fala em tese histórica universal."
        ],
        "example": "Diálogo hipotético e autoral: alguém define coragem como enfrentar qualquer perigo; outra pessoa pergunta se arriscar a vida sem propósito também seria coragem. A objeção testa a definição e exige distinguir coragem de imprudência. O exemplo ilustra um procedimento de exame, sem ser citação de Sócrates ou Platão.",
        "pitfall": "Tratar todos os filósofos antigos ou sofistas como uma escola única, chamar uma paráfrase de citação literal ou confundir questionar uma definição com negar qualquer possibilidade de conhecimento."
      },
      {
        "level": "intermediate",
        "title": "Aristóteles: vida boa, hábito e deliberação",
        "explanation": "Na ética de Aristóteles, eudaimonia costuma ser traduzida por felicidade ou florescimento e designa uma vida de atividade conforme a excelência, não um sentimento passageiro ou a simples posse de bens. O estudo da ética tem finalidade prática: importa formar disposições para agir bem. Virtudes do caráter são desenvolvidas por hábitos e educação, mas não por repetição mecânica de qualquer conduta. Virtudes intelectuais envolvem aprendizagem e experiência. A prudência, ou phronesis, é relevante para deliberar sobre a ação em situações concretas e não se confunde com habilidade de obter qualquer objetivo, inclusive injusto. A doutrina do meio-termo descreve a excelência em relação a excessos e faltas, considerando circunstâncias e orientação racional. Não é a média aritmética entre duas quantidades nem uma autorização para negociar uma dose moderada de toda injustiça: Aristóteles reconhece ações cuja própria caracterização já implica erro, sem um meio virtuoso correspondente. Coragem, por exemplo, não é ignorar riscos nem recuar sempre; importa responder de modo adequado ao perigo e ao fim da ação. A disposição virtuosa inclui conhecer o que se faz, escolher a ação por ela mesma e agir com caráter estável; apenas produzir um resultado exterior aparentemente correto não demonstra todo esse processo. Educação, amizade, instituições e condições materiais também entram na discussão da vida boa. A ética aristotélica não equivale à ideia de que qualquer privação externa seja irrelevante. Sua articulação com a política deve ser lida criticamente em um contexto que legitimou hierarquias e exclusões, como a escravidão e restrições à participação política das mulheres. Reconhecer esses limites históricos não exige reduzir toda sua filosofia a eles nem importar sua concepção de cidadania como norma para o presente.",
        "steps": [
          "Diferencie vida boa como atividade duradoura de prazer momentâneo ou simples acumulação de bens.",
          "Relacione hábito, escolha e deliberação na formação do caráter.",
          "Aplique o meio-termo a circunstâncias e razões, sem calcular uma média universal.",
          "Reconheça que há ações sem meio virtuoso e examine criticamente o contexto político da teoria."
        ],
        "example": "Caso hipotético: uma pessoa relata uma falha importante numa atividade coletiva, escolhendo momento, palavras e destinatários para corrigi-la sem humilhar ninguém. A avaliação não depende apenas de falar pouco ou muito; exige considerar veracidade, finalidade e circunstâncias. Uma medida aritmética de palavras não determina por si só a ação adequada.",
        "pitfall": "Reduzir virtude a hábito automático, prudência a oportunismo ou meio-termo a uma quantidade intermediária que tornaria virtuosa qualquer ação."
      },
      {
        "level": "advanced",
        "title": "Escolas helenísticas e comparação de critérios éticos",
        "explanation": "No período helenístico e em desenvolvimentos posteriores no mundo romano, escolas filosóficas discutiram como viver bem em contextos de transformação política. Isso não significa que a vida coletiva tenha desaparecido ou que todas as escolas ensinassem isolamento. Para os estoicos, a virtude tem valor decisivo para a vida boa; riqueza, saúde e reputação não são bens morais no mesmo sentido. Chamar algo de indiferente nesse vocabulário não significa proibir cuidado com a saúde ou ação em favor de outras pessoas: há coisas preferíveis e deveres nas relações sociais. Em Epicteto, distinguir o que depende de nós e o que não depende orienta o exame de juízos e escolhas; não promete controle físico de todos os acontecimentos nem exige passividade diante da injustiça. A crítica às paixões perturbadoras também não equivale a uma ordem simples de não sentir qualquer afeto. Epicuro toma o prazer como referência, mas não propõe satisfazer todo impulso imediatamente. Uma vida prudente avalia consequências das escolhas e dos desejos, incluindo tranquilidade e ausência de dor; amizades e necessidades simples têm importância. Um prazer pode ser recusado se trouxer perturbações maiores, e uma dificuldade pode ser enfrentada por uma consequência melhor. O ceticismo pirrônico, associado a Pirro e desenvolvido em textos de Sexto Empírico, exercita a suspensão do juízo diante da oposição entre argumentos sem decisão estabelecida. Isso difere de afirmar dogmaticamente que nada pode ser conhecido; seguir aparências e práticas cotidianas não equivale a provar uma teoria definitiva sobre a realidade. Comparar escolas exige identificar o critério de cada uma, e não transformar todas em técnica moderna de produtividade ou tratamento clínico. A comparação com problemas atuais é possível quando apresentada como aplicação interpretativa, sem atribuir aos antigos respostas literais sobre situações que não conheceram.",
        "steps": [
          "Identifique o critério da escola: virtude, prazer prudentemente avaliado ou suspensão do juízo em disputas.",
          "Diferencie indiferente moral estoico de ausência de cuidado ou responsabilidade social.",
          "No epicurismo, analise consequências e tipos de desejo, sem igualar prazer a excesso contínuo.",
          "Na leitura cética, distinga suspender uma conclusão de declarar uma impossibilidade universal de conhecer."
        ],
        "example": "Comparação hipotética e autoral: diante de uma promessa de fama, uma leitura estoica pergunta pela justiça das escolhas, uma epicurista avalia desejos e consequências para a tranquilidade, e uma cética pode examinar argumentos opostos antes de concluir sobre o valor prometido. O caso compara critérios; não inventa uma fala histórica nem afirma que as escolas sempre recomendariam a mesma decisão.",
        "pitfall": "Reduzir estoicismo a insensibilidade, epicurismo a consumo sem limites e ceticismo à certeza de que nada se sabe, apagando diferenças entre critérios e métodos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num diálogo hipotético, Lia afirma: ser justo é obedecer a qualquer ordem. Rui pergunta: e se a ordem exigir prejudicar injustamente alguém? Qual procedimento filosófico a pergunta de Rui ilustra?",
        "hint": "A pergunta apresenta uma dificuldade para a definição inicial e convida a examinar sua coerência; ela não prova sozinha uma definição alternativa completa.",
        "solution": "B descreve o exame de uma definição por suas consequências, procedimento compatível com a investigação socrática. A considera a autoridade suficiente e elimina justamente a pergunta apresentada. C confunde objeção localizada com prova de impossibilidade de conhecer qualquer coisa. D inventa um resultado experimental inexistente no diálogo. O caso permite revisar a definição inicial, sem constituir citação histórica ou demonstração de toda uma teoria da justiça.",
        "options": [
          "Aceitar qualquer ordem como justa apenas porque veio de uma autoridade.",
          "Testar uma definição moral por uma consequência que coloca sua adequação em dúvida.",
          "Demonstrar definitivamente que nenhum conhecimento humano é possível.",
          "Medir experimentalmente uma lei física sobre a velocidade de execução de ordens."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Um estudante diz que, na ética aristotélica, qualquer conduta se torna virtuosa quando praticada em quantidade intermediária. Qual correção expressa adequadamente os limites da doutrina do meio-termo?",
        "hint": "Considere a diferença entre medida aritmética e resposta racional às circunstâncias, bem como ações cuja própria caracterização já envolve erro.",
        "solution": "D distingue meio relativo às circunstâncias de média numérica e reconhece que nem toda ação admite meio virtuoso. A transforma a ética em cálculo fixo, que a teoria não oferece. B dispensa escolha e razões, aspectos relevantes da virtude. C torna todo ato virtuoso apenas por repetição, confundindo formação de hábitos adequados com automatismo. O meio-termo não serve para justificar uma dose moderada de qualquer injustiça.",
        "options": [
          "O meio-termo é sempre a metade matemática da maior quantidade disponível.",
          "O resultado exterior basta para a virtude, sem qualquer escolha ou consideração das razões.",
          "Qualquer comportamento repetido muitas vezes se torna automaticamente virtuoso.",
          "O meio depende de circunstâncias e razão, e há ações que não admitem um meio virtuoso."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Três formulações didáticas e autorais propõem: I — riqueza não substitui o valor moral de uma escolha justa; II — um prazer pode ser recusado se trouxer perturbações maiores; III — diante de argumentos contrapostos sem decisão estabelecida, suspende-se o juízo. Qual associação é mais adequada aos critérios estudados?",
        "hint": "Localize o papel da virtude no estoicismo, das consequências prazerosas ou perturbadoras no epicurismo e da suspensão no ceticismo pirrônico.",
        "solution": "A associa I à prioridade da virtude estoica, II à avaliação prudente das consequências no epicurismo e III à suspensão pirrônica. B troca epicurismo e estoicismo, além de atribuir suspensão metódica à ética aristotélica sem apoio. C reduz os critérios à satisfação imediata e à riqueza, negando as formulações. D converte suspensão do juízo em certeza dogmática e apaga as diferenças entre as escolas. As frases são paráfrases didáticas originais, não citações de obras antigas.",
        "options": [
          "I: estoicismo; II: epicurismo; III: ceticismo pirrônico.",
          "I: epicurismo; II: estoicismo; III: doutrina aristotélica do meio-termo.",
          "I, II e III defendem que riqueza e satisfação imediata são sempre o único critério moral.",
          "As três escolas afirmam a mesma certeza definitiva de que todo conhecimento é impossível."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Durkheim, Marx e Weber",
    "objective": "Distinguir problemas, métodos e conceitos de Durkheim, Marx e Weber e aplicá-los a situações sociais com evidências e hipóteses explícitas, sem reduzir os autores a oposição rígida entre sociedade e indivíduo.",
    "prerequisites": [
      "Noções de sociologia e pesquisa empírica",
      "Contexto de industrialização e capitalismo",
      "Diferença entre descrição, explicação e julgamento moral"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Durkheim: fatos sociais, solidariedade e regulação",
        "explanation": "Durkheim, Marx e Weber são referências clássicas para investigar transformações da modernidade, mas não formaram uma escola única nem esgotam as origens da sociologia. Marx desenvolveu uma crítica da economia política antes da consolidação da sociologia como disciplina universitária; Durkheim e Weber participaram de sua institucionalização com propostas distintas. Para Durkheim, maneiras coletivas de agir, pensar e sentir podem ser estudadas como fatos sociais: possuem existência que não se reduz à decisão de um indivíduo e exercem pressão sobre condutas. Exterioridade, coercitividade e generalidade devem ser articuladas; algo não se torna fato social apenas por ocorrer muitas vezes. Língua, normas escolares e regras jurídicas são exemplos que antecedem a participação de uma pessoa e são aprendidos na socialização. Tratar fatos sociais como coisas é uma orientação de investigação: definir o objeto, afastar explicações baseadas apenas em impressões e procurar evidências, sem afirmar que pessoas sejam objetos sem ação. Na análise da solidariedade, a mecânica se associa à semelhança e à força de crenças compartilhadas, enquanto a orgânica se relaciona à diferenciação e à interdependência da divisão do trabalho. São distinções analíticas, não sinônimos de máquinas e organismos biológicos nem uma garantia de que sociedades modernas sejam sempre harmoniosas. A divisão do trabalho pode apresentar formas problemáticas. Anomia envolve insuficiência ou desajuste da regulação social; não é simplesmente falta de amizades nem ausência de qualquer norma em toda a sociedade. Explicar padrões coletivos também não exige negar experiências individuais: uma relação estatística entre grupos não determina a história de cada pessoa. A pesquisa deve distinguir integração e regulação e verificar suas condições, sem usar conceitos como diagnóstico automático de indivíduos.",
        "steps": [
          "Defina o fenômeno coletivo e procure normas e instituições que ultrapassem a vontade individual.",
          "Articule exterioridade, pressão social e difusão, evitando definir fato social só pela frequência.",
          "Compare solidariedade por semelhança e por interdependência sem pressupor ausência de conflitos.",
          "Diferencie problema de regulação de isolamento individual e não transfira diretamente médias coletivas a cada pessoa."
        ],
        "example": "Caso hipotético: novos estudantes encontram horários, critérios de avaliação e uma língua de ensino que não criaram sozinhos. Podem negociar mudanças, mas enfrentam expectativas e consequências por descumprimento. O caso permite investigar exterioridade e coerção das normas, sem afirmar que qualquer regra seja justa ou imutável.",
        "pitfall": "Confundir fato social com qualquer ocorrência frequente, solidariedade orgânica com harmonia garantida ou anomia com um sentimento individual de solidão."
      },
      {
        "level": "intermediate",
        "title": "Marx: produção, classes e exploração",
        "explanation": "Na análise de Marx, compreender uma sociedade exige investigar como as pessoas produzem sua vida material e como se organizam as relações de produção. Forças produtivas incluem recursos, técnicas e capacidades de trabalho; relações de produção envolvem propriedade, controle e apropriação do que é produzido. Não se trata de afirmar que uma máquina explique sozinha toda política, cultura ou mudança histórica. No capitalismo, a posição de classe relaciona-se ao controle dos meios de produção e à necessidade de vender força de trabalho, sem reduzir todas as trajetórias sociais a duas descrições individuais idênticas. Força de trabalho é a capacidade de trabalhar, comprada por determinado período; seu uso na produção pode gerar valor novo maior que o valor correspondente à sua reprodução, expresso no salário sob as hipóteses do modelo. A mais-valia é esse excedente apropriado pelo capital. Ela não é simplesmente a receita de vendas, qualquer diferença entre dois preços ou todo o valor de uma mercadoria, pois materiais e meios de produção também transferem valor ao produto. Numa representação didática, valor total = capital constante transferido + capital variável + mais-valia. A taxa de mais-valia compara mais-valia com capital variável; não é a taxa de lucro, cuja base inclui o capital considerado na análise. Trata-se de reconstruir uma teoria do valor e da exploração, não de afirmar que todo preço observado se deduza diretamente de um cálculo escolar. A alienação envolve relações em que o trabalhador não controla plenamente produto e processo de sua atividade, e não apenas estar aborrecido no emprego. O fetichismo da mercadoria descreve como relações entre pessoas assumem aparência de propriedades e relações entre coisas; não significa simplesmente gostar de comprar. Luta de classes envolve conflitos de interesses nas relações sociais, podendo assumir formas econômicas e políticas variadas, sem tornar qualquer resultado histórico automático.",
        "steps": [
          "Identifique quem controla meios de produção e como o trabalho e os produtos são apropriados.",
          "Distinga trabalho efetivamente realizado e força de trabalho vendida por um período.",
          "No modelo numérico, separe valor transferido, valor novo, salário e excedente, identificando a base de cada taxa.",
          "Use alienação e fetichismo como conceitos de relações sociais, sem reduzi-los a emoções ou preferências de consumo."
        ],
        "example": "Modelo didático hipotético: uma produção transfere 300 unidades de valor de materiais e equipamentos e acrescenta 180 de valor novo. Se 60 correspondem ao capital variável, a mais-valia é 180 − 60 = 120; o total é 480. A taxa de mais-valia é 120/60 = 200%, diferente de comparar 120 com todo o capital adiantado. Os números ilustram a teoria, sem representar uma empresa real ou recomendação financeira.",
        "pitfall": "Chamar receita total de mais-valia, confundir taxa de exploração com taxa de lucro ou tratar relações materiais como causa mecânica única de todo acontecimento social."
      },
      {
        "level": "advanced",
        "title": "Weber: sentido, causalidade e formas de dominação",
        "explanation": "Para Weber, a sociologia procura compreender interpretativamente a ação social e explicar causalmente seu desenvolvimento e seus efeitos. Compreender sentidos não é apenas sentir empatia nem abandonar evidências e causalidade. Uma ação é social quando seu sentido se orienta pela conduta de outras pessoas; duas pessoas realizarem movimentos parecidos por acaso não basta. Seus tipos analíticos incluem ação racional referente a fins, com cálculo de meios e consequências; racional referente a valores, orientada pela convicção no valor da conduta; afetiva, ligada a estados emocionais; e tradicional, apoiada no costume. Condutas concretas podem misturar orientações. Tipo ideal é uma construção que acentua traços para comparação, e não uma média estatística nem um exemplo moralmente perfeito. Na análise da dominação legítima, Weber distingue legitimidade apoiada na tradição, no reconhecimento de qualidades carismáticas e na crença em regras legalmente estabelecidas e competências dos cargos. Legitimidade nesse uso diz respeito à crença que sustenta obediência, sem certificar justiça moral. A burocracia apresenta traços como competências definidas, hierarquia, registros e impessoalidade; não é sinônimo de qualquer atraso administrativo nem garantia universal de eficiência e ausência de abuso. A racionalização envolve transformações de regras, cálculo e formas de organizar a vida, sem uma história em que tradição e valores desapareçam completamente. Weber também distingue dimensões de estratificação, como situação de classe no mercado, prestígio dos grupos de status e organização para influenciar poder. Ao investigar religião e capitalismo, não afirma que uma crença tenha sido sua causa única. Comparar os três clássicos exige relacionar perguntas distintas: Durkheim investiga instituições e regulação, Marx relações de produção e conflito, Weber sentidos e relações de poder, sem excluir outras dimensões de cada obra. Aplicações contemporâneas precisam de evidências; chamar um algoritmo de burocracia não prova, por si só, toda uma relação de dominação ou exploração.",
        "steps": [
          "Pergunte qual sentido orienta a ação em relação a outras pessoas e busque evidências para a interpretação.",
          "Compare orientações de ação sem presumir tipos puros em cada conduta real.",
          "Diferencie tipo ideal de ideal moral e crença de legitimidade de aprovação ética.",
          "Ao combinar autores, explicite conceitos, hipóteses e dados, sem transformar analogias em conclusões automáticas."
        ],
        "example": "Caso hipotético: uma servidora atende por critérios gerais e competência do cargo, enquanto usuários obedecem por reconhecer a validade das regras. Isso permite analisar traços de dominação racional-legal. Se uma pessoa a segue por devoção pessoal excepcional, o fundamento da crença pode envolver carisma; a posição no organograma não resolve sozinha a interpretação.",
        "pitfall": "Opor compreensão a toda explicação causal, confundir tipo ideal com modelo perfeito ou supor que legitimidade sociológica prove justiça e que toda regra escrita elimine conflitos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Numa situação hipotética, uma estudante ingressa em uma escola cujos horários e critérios de avaliação existiam antes de sua matrícula. Descumpri-los pode trazer sanções, embora estudantes possam organizar propostas de mudança. Qual leitura se aproxima do conceito durkheimiano de fato social?",
        "hint": "Considere anterioridade coletiva e pressão sobre a conduta; a possibilidade de mudança não elimina a existência de normas sociais.",
        "solution": "C identifica exterioridade e pressão das normas sem concluir que sejam eternas ou necessariamente justas. A reduz a regra à criação individual da estudante, contrariando sua existência anterior. B supõe imutabilidade, que não decorre do conceito. D confunde frequência de matrícula com definição suficiente de fato social e ignora a organização normativa descrita. A análise investiga instituições e efeitos coletivos sem negar a possibilidade de ação e transformação.",
        "options": [
          "Os critérios foram criados exclusivamente pela vontade individual da nova estudante.",
          "Normas sociais são necessariamente imutáveis, e nenhuma mobilização pode alterá-las.",
          "As normas ultrapassam a decisão individual e pressionam condutas, embora possam ser transformadas coletivamente.",
          "A frequência de matrículas, sozinha, define qualquer regra como fato social, independentemente de sua existência coletiva."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Em um modelo marxiano didático e hipotético, o capital constante transferido ao produto é 240 unidades de valor e o valor novo criado é 120. Desse valor novo, 40 correspondem ao capital variável. Qual é a mais-valia e sua taxa em relação ao capital variável?",
        "hint": "O valor novo já exclui o valor transferido pelos materiais e equipamentos. Subtraia o capital variável do valor novo e use o capital variável como base da taxa.",
        "solution": "A calcula mais-valia = 120 − 40 = 80 e taxa = 80/40 × 100 = 200%. B confunde todo o valor novo com excedente e divide 120 por 40. C usa 240 + 120 = 360, valor total do produto, como mais-valia. D calcula corretamente 80, mas usa 240 + 40 = 280 como base, obtendo cerca de 28,6%, que não é a taxa solicitada. As hipóteses ilustram relações conceituais do modelo e não são dados de mercado ou de uma empresa real.",
        "options": [
          "Mais-valia de 80 unidades; taxa de mais-valia de 200%.",
          "Mais-valia de 120 unidades; taxa de mais-valia de 300%.",
          "Mais-valia de 360 unidades; taxa de mais-valia de 900%.",
          "Mais-valia de 80 unidades; taxa de mais-valia de aproximadamente 28,6%."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Em entrevistas hipotéticas, Iara afirma que escolheu uma ação por dever moral, mesmo sem vantagem pessoal, e Paulo relata ter comparado custos e meios para atingir uma meta. Uma pesquisa weberiana pretende compreender esses sentidos e investigar seus efeitos. Qual interpretação é adequada?",
        "hint": "Distinga orientação por convicção de valor e cálculo de meios para fins. Considere que interpretar sentidos e explicar efeitos podem integrar a mesma pesquisa.",
        "solution": "D associa o relato de Iara à orientação racional referente a valores e o de Paulo à orientação racional referente a fins, preservando a possibilidade de explicação causal. A troca as duas orientações. B torna tipos analíticos avaliações morais de pessoas, finalidade que eles não têm. C exclui causalidade da abordagem compreensiva, contrariando sua proposta metodológica. Os relatos permitem uma hipótese interpretativa, a ser conferida com contexto e evidências, sem garantir que toda conduta real seja um tipo puro.",
        "options": [
          "Iara descreve cálculo de meios para fins; Paulo descreve convicção incondicional em um valor.",
          "Tipo ideal significa que Iara é moralmente perfeita e Paulo é necessariamente injusto.",
          "Compreender os sentidos impede investigar causas, desenvolvimento e efeitos das ações.",
          "Iara aproxima-se da orientação por valores e Paulo da orientação por fins; a pesquisa também pode buscar explicação causal."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "História da arte e patrimônio cultural",
    "objective": "Relacionar formas artísticas a contextos, técnicas e instituições, comparar mudanças de linguagem em um panorama histórico e distinguir preservação material e salvaguarda de práticas culturais com participação de seus detentores.",
    "prerequisites": [
      "Noções de tempo histórico e diversidade cultural",
      "Elementos visuais como linha, cor, volume e composição",
      "Distinção entre descrição de uma obra e interpretação de seus sentidos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Ler arte historicamente: forma, função e contexto",
        "explanation": "História da arte investiga produções, práticas, modos de circulação e interpretações em diferentes sociedades. Não é uma escala em que povos antigos seriam incapazes e o presente representaria aperfeiçoamento obrigatório. Pinturas rupestres, objetos cerâmicos, esculturas, edifícios, imagens religiosas e performances podem ter funções e significados que não coincidem com a ideia atual de obra exposta em museu. Para analisá-los, pergunte sobre materiais, técnica, autoria quando conhecida, função, público e condições de produção. Ausência de assinatura não significa ausência de conhecimento ou criação. Na Antiguidade, convenções de representação podiam expressar hierarquia, ritual ou poder; a falta de semelhança fotográfica não prova erro técnico. Na Europa medieval, imagens e arquitetura religiosas participaram de experiências de culto, ensino e organização social, mas a produção não foi uniforme nem exclusivamente religiosa. No Renascimento europeu, o estudo da Antiguidade e da figura humana articulou-se a novas encomendas, oficinas e debates sobre conhecimento. A perspectiva linear usa relações geométricas para construir profundidade a partir de um ponto de vista; linhas paralelas em certas direções podem ser representadas como convergentes para pontos de fuga. Não é a única forma legítima de representar espaço. Perspectiva atmosférica cria profundidade por variações de cor, contraste e nitidez. No barroco, composições dinâmicas, contrastes de luz e efeitos de envolvimento podem intensificar narrativas religiosas ou políticas, com grandes diferenças regionais. A pintura ilusionista de teto pode sugerir arquitetura e céu além da superfície real; não se confunde, só por isso, com perspectiva atmosférica. Esses recortes europeus não organizam toda a produção do mundo: tradições africanas, asiáticas, indígenas e americanas têm temporalidades e critérios próprios, atravessados por encontros e relações de poder.",
        "steps": [
          "Descreva materiais, organização visual e função antes de atribuir valor ou sentido.",
          "Localize produção e circulação no tempo e no espaço, reconhecendo lacunas de autoria e documentação.",
          "Compare convenções de representação sem usar realismo como medida universal de qualidade.",
          "Distinga recursos de profundidade e contextualize estilos como recortes históricos, não regras de todas as culturas."
        ],
        "example": "Descrição hipotética e autoral: numa imagem ritual, uma figura ocupa espaço maior que outras, embora todas estejam lado a lado. O tamanho pode indicar importância simbólica, sem pretender representar distância física. Antes de julgar a proporção como erro, é necessário investigar função, convenções e contexto da produção.",
        "pitfall": "Tratar arte como evolução linear rumo à fotografia, supor que toda produção antiga tinha a mesma finalidade ou chamar qualquer efeito de profundidade de uma única técnica."
      },
      {
        "level": "intermediate",
        "title": "Arte no Brasil, modernismos e experiências contemporâneas",
        "explanation": "A história da arte no Brasil inclui produções indígenas anteriores à colonização e tradições vivas que não devem ser reduzidas ao passado. A colonização articulou encomendas religiosas e civis, circulação de modelos europeus e trabalho de artistas e artesãos de diversas origens em relações desiguais, inclusive escravistas. Talha em madeira, escultura e pintura participaram de ambientes barrocos e rococós, com variações locais; não houve uma única forma de arte colonial. No século XIX, academias e salões contribuíram para definir formação, gêneros e reconhecimento, enquanto outras produções permaneciam fora desses circuitos. Na arte moderna, transformações de cor, forma, espaço e materiais questionaram convenções de representação. No cubismo, fragmentação e articulação de pontos de vista problematizaram a representação de objetos por uma única visão; na abstração, relações entre formas, cores e ritmos podem organizar a obra sem obrigação de representar objetos reconhecíveis. Modernismo não significa apenas pintar temas brasileiros nem abolir qualquer relação com tradições. A Semana de Arte Moderna de 1922, em São Paulo, foi um marco de debates, sem criar do nada todas as experiências modernas ou representar igualmente todas as regiões e grupos. O modernismo brasileiro desenvolveu projetos diferentes de relação entre linguagem, identidade, cultura popular e circulação internacional. Museus, crítica, colecionadores e exposições também influenciam o que ganha visibilidade. A primeira Bienal de São Paulo ocorreu em 1951, num pavilhão provisório na Esplanada do Trianon, conforme seu arquivo institucional, e ampliou circuitos de encontro e legitimação. Na produção contemporânea, instalações podem organizar espaço e experiência do público; performances podem usar ação e duração como parte da obra; trabalhos conceituais podem enfatizar uma proposta ou procedimento. Pintura e escultura continuam presentes: novos meios não as extinguem. Nem toda obra participativa permite tocar livremente objetos; sua proposta e orientações precisam ser verificadas.",
        "steps": [
          "Reconheça diversidade e continuidade de produções indígenas, afro-brasileiras, populares e institucionais.",
          "Relacione mudanças de linguagem a contextos e circuitos, sem confundir modernismo com um tema obrigatório.",
          "Compare representação, fragmentação e abstração por seus procedimentos, não por suposta facilidade de execução.",
          "Na arte contemporânea, observe espaço, ação, tempo e proposta, respeitando condições de participação."
        ],
        "example": "Projeto hipotético e autoral: uma artista dispõe sons e objetos num percurso, de modo que a posição do visitante altera a experiência. A análise considera relações espaciais e temporais da instalação, não apenas o objeto mais bonito. Fotografar uma parte pode documentar um aspecto, mas não reproduz automaticamente toda a experiência proposta.",
        "pitfall": "Confundir arte moderna com tudo o que foi feito recentemente, afirmar que 1922 criou sozinho o modernismo ou chamar abstração de ausência de escolhas formais."
      },
      {
        "level": "advanced",
        "title": "Patrimônio, memória e decisões de preservação",
        "explanation": "Patrimônio cultural envolve referências de memória e identidade atribuídas por grupos sociais a bens, práticas e lugares. Não é sinônimo de tudo o que é caro, antigo ou oficialmente reconhecido, nem se limita a palácios e obras de artistas consagrados. A dimensão material inclui edificações, conjuntos, documentos, objetos e outros suportes; a imaterial envolve saberes, modos de fazer, celebrações, formas de expressão e lugares ligados a práticas coletivas. As dimensões se relacionam: um instrumento é material, mas sua fabricação, execução e transmissão podem integrar saberes e práticas imateriais. No Brasil, o Iphan apresenta o tombamento como instrumento de proteção de bens materiais e o registro como instrumento de reconhecimento de bens imateriais, articulado a ações de salvaguarda. Tombamento não é sinônimo automático de transferência de propriedade ao Estado, e registro não transforma uma prática viva em objeto que deva permanecer idêntico para sempre. Documentação, apoio à transmissão, acesso a materiais e participação dos detentores podem ser tão relevantes quanto conservar um objeto. Um prédio restaurado sem considerar moradores, usos e acessibilidade pode gerar conflitos; valorização turística não garante benefícios distribuídos a todos. A educação patrimonial envolve investigar referências com as comunidades, ouvindo versões, identificando ausências e discutindo escolhas de memória. Museus também selecionam, classificam e exibem, e seus acervos têm histórias de aquisição que podem suscitar debates sobre procedência e restituição. Reconhecer diversidade não dispensa conferir autoria, origem e contexto; copiar ou divulgar conhecimentos restritos sem diálogo pode desrespeitar seus detentores. Uma proposta de preservação deve explicitar o que se deseja manter, para quem e com quais efeitos, incluindo condições de continuidade da prática. Assim, conservar não se reduz a congelar e mudar não significa necessariamente destruir uma referência cultural.",
        "steps": [
          "Identifique os grupos para os quais o bem ou a prática tem valor de referência e investigue sua história.",
          "Distinga suporte material, saberes e práticas, reconhecendo suas relações.",
          "Compare tombamento e registro sem concluir transferência automática de propriedade ou congelamento cultural.",
          "Avalie participação, transmissão, acesso e efeitos sociais junto à conservação física."
        ],
        "example": "Situação hipotética: uma festa comunitária depende de músicos, preparação de alimentos, espaço de encontro e transmissão entre gerações. Guardar uma roupa antiga pode conservar um objeto importante, mas não garante sozinho a continuidade da celebração. Ouvir os participantes e apoiar condições de realização trata dimensões que o armazenamento do objeto não resolve.",
        "pitfall": "Confundir patrimônio com preço ou antiguidade, trocar tombamento e registro ou preservar apenas fachadas sem considerar usos, pessoas e continuidade cultural."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma descrição hipotética de pintura informa que linhas de um piso convergem para um ponto de fuga e que objetos são organizados geometricamente para sugerir profundidade a partir de uma posição de observação. Qual recurso é diretamente descrito?",
        "hint": "O enunciado informa construção geométrica e ponto de fuga; não menciona profundidade obtida por perda de nitidez nem a presença de tinta metálica.",
        "solution": "C identifica perspectiva linear, pois a descrição enfatiza construção geométrica do espaço e ponto de fuga. A descreve perspectiva atmosférica, que usaria alterações de cor, contraste e nitidez e não é o recurso informado. B é uma técnica de aplicação de ouro, sem relação necessária com o mecanismo descrito. D é um processo de impressão, não a organização espacial apresentada. Identificar o recurso não basta para atribuir autoria ou data exata à pintura hipotética.",
        "options": [
          "Perspectiva atmosférica, definida exclusivamente pela redução de nitidez com a distância.",
          "Talha dourada, porque qualquer representação de piso exige madeira revestida de ouro.",
          "Perspectiva linear, com organização geométrica do espaço e ponto de fuga.",
          "Xilogravura, pois toda convergência de linhas prova impressão por matriz de madeira."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Em uma proposta artística hipotética, uma ação realizada durante vinte minutos envolve movimentos e sons diante do público. Seu registro em vídeo documenta o evento, mas a ação e sua duração integram a obra. Qual interpretação se aproxima da linguagem descrita?",
        "hint": "Observe o papel da ação e do tempo, sem concluir que a existência de vídeo converta automaticamente todo o trabalho em pintura ou elimine outras linguagens.",
        "solution": "A reconhece a ação e sua duração como elementos de uma performance, sem confundir o registro com reprodução integral da experiência. B supõe que somente quadros possam ser arte e ignora o enunciado. C transforma qualquer documentação em prova de ausência de criação. D diz que novas linguagens extinguiram pintura e escultura, generalização não sustentada. O contexto e a proposta importam; duração de vinte minutos, sozinha, não definiria qualquer evento como obra artística.",
        "options": [
          "A proposta mobiliza ação e duração, elementos que podem integrar uma performance artística.",
          "A atividade só pode ser pintura de cavalete, porque arte exige necessariamente um quadro fixo.",
          "O registro em vídeo demonstra que nenhuma escolha artística ocorreu na ação.",
          "A existência dessa proposta comprova que pintura e escultura deixaram de existir."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Uma comunidade hipotética deseja preservar tanto um prédio de referência quanto um modo de fazer transmitido entre gerações. Qual proposta distingue adequadamente dimensões e instrumentos de preservação, sem prometer resultados automáticos?",
        "hint": "Separe conservação de um suporte material e continuidade de um saber coletivo. Considere proteção, documentação, transmissão e participação dos detentores.",
        "solution": "D distingue a proteção material do prédio, para a qual tombamento pode ser instrumento pertinente, e a dimensão imaterial do modo de fazer, cujo reconhecimento e salvaguarda demandam participação e continuidade. A inverte os instrumentos. B confunde proteção com transferência automática de propriedade. C presume que guardar um objeto e proibir toda mudança assegura transmissão, o que apaga práticas e pessoas. A proposta exige estudo e diálogo; não declara que o caso fictício já recebeu reconhecimento oficial.",
        "options": [
          "Tombar exclusivamente a técnica imaterial e registrar apenas a parede do prédio como celebração.",
          "Proteger o prédio significa transferir automaticamente sua propriedade ao Estado, sem outro procedimento.",
          "Guardar uma peça pronta e proibir qualquer mudança garante sozinho a continuidade de todo saber.",
          "Investigar proteção material do prédio e reconhecimento e salvaguarda do saber, com participação da comunidade e apoio à transmissão."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Esporte, jogos e cultura corporal",
    "objective": "Interpretar jogos e esportes como práticas culturais, comparar regras e lógicas de participação e analisar diversidade, acessibilidade, competição, mídia e acesso sem reduzir a cultura corporal ao rendimento.",
    "prerequisites": [
      "Experiências de participação ou observação de jogos",
      "Noções de regras, cooperação e competição",
      "Leitura crítica de textos, anúncios e dados simples"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Jogos, esportes e sentidos da cultura corporal",
        "explanation": "Práticas corporais são construídas e transmitidas socialmente: gestos, regras, materiais e modos de participar recebem sentidos em diferentes grupos e épocas. Cultura corporal não é apenas uma lista de exercícios nem um padrão de corpo considerado ideal. Envolve jogos, esportes, danças, lutas, ginásticas e outras manifestações, articulando movimento, expressão, convivência e conhecimento. Jogos podem ter regras negociadas pelos participantes e variar conforme espaço e finalidade; esportes costumam apresentar maior institucionalização, regras formalizadas e formas organizadas de comparação de desempenho. Essa distinção não significa que jogos sejam sempre sem competição ou que esportes só possam ser praticados profissionalmente. A mesma modalidade pode ser vivida no lazer, na escola ou em competições de rendimento, com objetivos e condições diferentes. No contexto educativo, aprender envolve compreender decisões, experimentar estratégias e conviver, não apenas selecionar quem já apresenta melhor desempenho. Um jogo cooperativo propõe metas comuns e pode avaliar realização coletiva; em jogos de oposição, adversários disputam resultados sob regras. Cooperação e oposição podem coexistir, como em equipes que colaboram internamente e enfrentam outra equipe. Regras ajudam a tornar desafios compreensíveis, mas precisam ser adequadas ao contexto e discutidas com segurança e participação. Modificar tamanho da quadra, tempo, material ou forma de pontuar numa atividade escolar não apaga automaticamente o vínculo com uma modalidade; é preciso esclarecer quais objetivos se mantêm e o que muda. Resultado esportivo também não mede o valor de uma pessoa: desempenho depende de aprendizagem, oportunidades e condições, além das características da tarefa.",
        "steps": [
          "Identifique finalidade, participantes, regras, materiais e espaço da prática.",
          "Compare regras institucionalizadas e combinações locais sem hierarquizar jogos e esportes.",
          "Observe onde existem cooperação, oposição e decisões compartilhadas.",
          "Avalie adaptações conforme o objetivo educativo, participação e condições de segurança."
        ],
        "example": "Situação hipotética: um grupo joga bola numa praça com duas equipes e combina que todos devem receber um passe antes da finalização. Há competição entre equipes e cooperação dentro delas. A regra local altera as decisões e pode ampliar participação, mas precisa ser observada para verificar se de fato funciona para todos.",
        "pitfall": "Afirmar que jogos nunca têm regras ou competição, que todo esporte exige profissionalização ou que vencer autoriza desrespeitar participantes."
      },
      {
        "level": "intermediate",
        "title": "Lógicas esportivas, diversidade e memória cultural",
        "explanation": "Uma forma de comparar esportes é observar sua lógica de ação. Em provas de marca, resultados como tempo, distância ou carga permitem comparação sob condições definidas; em práticas de precisão, importa atingir ou aproximar um alvo. Em jogos de rede ou parede, busca-se enviar um objeto de modo que o adversário tenha dificuldade de devolvê-lo segundo as regras. Nos de invasão, equipes procuram avançar e alcançar uma meta enquanto protegem seu espaço. Em campo e taco, alternam-se ações de rebater, percorrer trajetos e defender; nos técnico-combinatórios, sequências e execuções são avaliadas por critérios; nos de combate, há confronto direto regulado. Essas categorias são instrumentos de análise, não substituem regras de cada modalidade e admitem especificidades. O voleibol de quadra, por exemplo, difere de um jogo de invasão porque as equipes ocupam campos separados pela rede durante as jogadas usuais. Conhecer a lógica permite transferir perguntas táticas, como criar espaços ou escolher trajetórias, sem supor técnicas iguais em todos os esportes. Práticas populares e tradicionais também preservam e recriam memórias. Brincadeiras podem circular com nomes e regras diferentes; investigar sua história requer ouvir participantes e consultar fontes, em vez de inventar uma origem única para cada gesto. A roda de capoeira, reconhecida pelo Iphan como patrimônio cultural brasileiro em 2008, articula jogo, luta, música, dança e transmissão de saberes de matrizes africanas recriadas no Brasil. Reduzi-la a exercício físico ou apenas a confronto apaga dimensões importantes. Reconhecer contribuições indígenas, africanas e de outros grupos não autoriza tratar culturas como uniformes, imóveis ou disponíveis para apropriação sem respeito aos seus detentores.",
        "steps": [
          "Compare o objetivo motor e a interação com adversários para identificar a lógica de uma prática.",
          "Use categorias como ferramentas, preservando diferenças de regras e técnicas.",
          "Ao investigar tradições, diferencie memória, hipótese e informação documentada.",
          "Valorize participantes e mestres como sujeitos da transmissão cultural, sem reduzir manifestações a rendimento."
        ],
        "example": "Exemplo de leitura tática: no voleibol, enviar a bola a um espaço desprotegido do campo adversário pode dificultar a devolução. Como a rede separa os campos durante a jogada usual, ocupar espaços no próprio lado e escolher a trajetória da bola são problemas diferentes de avançar fisicamente até uma meta dentro do campo adversário.",
        "pitfall": "Classificar apenas pelo uso de uma bola, chamar toda luta de violência sem regras ou atribuir histórias e consensos a pesquisadores que não foram consultados."
      },
      {
        "level": "advanced",
        "title": "Participação, acessibilidade e leitura crítica da mídia",
        "explanation": "O acesso a jogos e esportes depende de condições materiais e sociais: espaços, transporte, custo, tempo, equipamentos, informação, acolhimento e acessibilidade podem favorecer ou restringir a participação. Sexo, gênero, raça, deficiência ou aparência não justificam impedir alguém de aprender ou presumir suas capacidades. A Carta Internacional da UNESCO defende oportunidades inclusivas de educação física e esporte. Na prática educativa, discutir barreiras com quem participa ajuda a escolher adaptações funcionais: bola sonora quando adequada, sinalização compreensível, materiais com contraste, rotas acessíveis ou diferentes formas de comunicar regras. Não existe uma adaptação única que resolva toda necessidade, e presença física na quadra não comprova participação significativa. As escolhas devem respeitar autonomia e privacidade; não é necessário exigir exposição de diagnóstico para conversar sobre uma barreira de acesso. Competição pode favorecer aprendizagem quando há respeito a regras, adversários e arbitragem, mas também pode produzir exclusão se o único critério for selecionar vencedores. Espetáculo esportivo e publicidade dão visibilidade a determinadas práticas e corpos, relacionando-se a audiência, patrocínio e consumo. Um anúncio não prova que comprar um produto garanta desempenho ou pertencimento. Analisar cobertura exige delimitar veículos, período, categorias e método: contar minutos permite descrever aquela amostra, não demonstrar sozinho as preferências de toda a população ou a causa comercial de uma ausência. Compare representação, fontes e estereótipos, distinguindo observação e inferência. Propostas de ampliação do acesso podem combinar espaços públicos, diversidade de atividades e participação comunitária, mas seus resultados devem ser acompanhados. Não se confunde o direito de participar com obrigação de atingir um padrão corporal ou consumir equipamentos caros.",
        "steps": [
          "Identifique barreiras de acesso com os próprios participantes e preserve escolhas e privacidade.",
          "Proponha adaptações compatíveis com objetivo, segurança e participação efetiva.",
          "Na análise de mídia, delimite amostra e separe dados observados de hipóteses sobre causas e público.",
          "Questione promessas de consumo e padrões corporais sem transformar diferenças em incapacidade."
        ],
        "example": "Anúncio hipotético e autoral: um tênis é apresentado com a frase quem usa já é campeão. A imagem de um atleta e a promessa de pertencimento podem estimular consumo, mas não demonstram que o produto garanta vitória. Analisar a mensagem exige separar recurso persuasivo, características verificáveis do produto e resultados esportivos que dependem de várias condições.",
        "pitfall": "Exigir diagnóstico público como condição de inclusão, presumir capacidade por aparência ou transformar uma amostra de programação em prova da preferência de toda a população."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em um jogo escolar hipotético, duas equipes disputam pontos e cada uma planeja passes entre seus integrantes. Antes de começar, combinam uma adaptação de pontuação para ampliar a participação e avaliam seus efeitos durante a atividade. Qual leitura é mais adequada?",
        "hint": "A disputa entre equipes pode coexistir com ações cooperativas e com negociação pedagógica das regras; observe a finalidade informada.",
        "solution": "B reconhece oposição entre equipes, cooperação nos passes e possibilidade de adaptar regras para o objetivo educativo. A nega a cooperação explicitamente descrita. C confunde mudança pedagógica combinada com ausência de qualquer regra. D transforma vitória em medida de valor pessoal, o que não decorre da atividade. A adaptação precisa ser acompanhada para verificar seus efeitos, sem garantir inclusão apenas por ter sido proposta.",
        "options": [
          "A presença de disputa impede qualquer cooperação entre participantes.",
          "Competição entre equipes e cooperação interna coexistem, e a adaptação pode ser avaliada pelo objetivo educativo.",
          "Modificar uma regra combinada significa necessariamente jogar sem regra alguma.",
          "A equipe vencedora demonstra que seus integrantes têm maior valor como pessoas."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Em duas práticas hipotéticas, A consiste em lançar objetos para aproximá-los de um alvo e B consiste em avançar coletivamente por um campo compartilhado para alcançar a meta adversária e proteger a própria. Qual associação de lógicas é coerente?",
        "hint": "Observe a finalidade da ação e a relação espacial entre participantes; a presença de um objeto não basta para classificar qualquer modalidade.",
        "solution": "C identifica precisão na aproximação do alvo em A e invasão no avanço e defesa de metas em B. A troca as finalidades. B chama as duas de marca sem informar comparação por tempo, distância percorrida ou carga, e D as classifica como rede apesar de não haver separação desse tipo no enunciado. As categorias ajudam a ler o problema motor, mas não revelam sozinhas todas as regras de uma modalidade real.",
        "options": [
          "A é invasão; B é precisão, porque toda meta representa apenas lançamento individual.",
          "A e B são necessariamente provas de marca, sem interação com adversários ou alvos.",
          "A apresenta lógica de precisão; B apresenta lógica de invasão.",
          "A e B são jogos de rede com campos obrigatoriamente separados por uma rede."
        ],
        "correctIndex": 2
      },
      {
        "level": "advanced",
        "prompt": "Uma pesquisa escolar hipotética observa uma única grade esportiva de 200 minutos: 150 de modalidade X e 50 de modalidade Y. Nenhum outro veículo ou dia foi analisado. Qual conclusão os dados sustentam sem extrapolação?",
        "hint": "Calcule a participação de X nos minutos observados e preserve o limite da amostra; a grade não é pesquisa de preferência ou prática esportiva da população.",
        "solution": "A calcula 150/200 × 100 = 75% e limita a conclusão à amostra. B troca minutos de programação por porcentagem de pessoas, sem ter entrevistado a população. C inventa uma causa exclusiva não investigada. D conclui que uma prática inexiste por não aparecer no recorte, confundindo ausência de cobertura e ausência de atividade. Outras questões sobre escolha editorial, financiamento ou interesses do público exigiriam fontes e métodos adicionais.",
        "options": [
          "X ocupa 75% do tempo observado nessa grade; o recorte não mede sozinho a preferência da população.",
          "Exatamente 75% de toda a população pratica X, pois a grade representa automaticamente todos os habitantes.",
          "A única causa da diferença é obrigatoriamente a falta de interesse por Y, já demonstrada pelos minutos.",
          "Qualquer prática ausente dessa grade deixou de existir na comunidade."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Mudanças de estado e transformações",
    "objective": "Identificar mudanças de estado, relacioná-las a energia e pressão, distinguir transformações físicas e químicas por sua composição e interpretar evidências e conservação de massa em sistemas delimitados.",
    "prerequisites": [
      "Noções de matéria, partículas e substância",
      "Leitura de massa, temperatura e unidades de energia",
      "Operações de multiplicação, soma e subtração"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Estados físicos e caminhos das transformações",
        "explanation": "Sólido, líquido e gasoso são estados físicos comuns da matéria, relacionados à organização, à interação e ao movimento de suas partículas. No modelo escolar de um sólido, as partículas permanecem próximas e vibram em torno de posições; não ficam completamente imóveis. Um líquido tem volume aproximadamente definido em condições usuais e toma a forma da parte do recipiente que ocupa, enquanto um gás se expande pelo espaço disponível e é muito mais compressível. Essas descrições são modelos com condições de aplicação, não a afirmação de que líquidos nunca variem de volume. Fusão é a passagem de sólido a líquido; solidificação é o caminho inverso. Vaporização é a passagem de líquido a gasoso, e condensação ou liquefação designa o caminho inverso nesse contexto. Sublimação é a passagem direta de sólido a gasoso, e deposição ou ressublimação é a passagem direta de gasoso a sólido. Evaporação ocorre na superfície e pode acontecer abaixo da temperatura de ebulição; a roupa seca sem que a água precise ferver. Na ebulição, formam-se bolhas de vapor no interior do líquido em condições apropriadas de pressão e temperatura. O vapor de água é invisível; a nuvem esbranquiçada vista perto de água quente contém pequenas gotículas, portanto não deve ser identificada como gás visível. Mudança de estado não exige formar uma nova substância: gelo e água líquida continuam sendo água. Também não se confunde estado físico com fase de um sistema: dois líquidos que não se misturam podem formar duas fases líquidas. A descrição de uma transformação deve indicar o estado inicial, o final e as condições, sem supor que toda alteração observável seja uma reação química.",
        "steps": [
          "Identifique estados inicial e final para nomear a mudança sem inverter a direção.",
          "Distinga evaporação superficial de ebulição com formação de vapor no líquido.",
          "Use o modelo de partículas sem afirmar imobilidade no sólido ou expansão nula no líquido.",
          "Separe estado físico, número de fases e composição da substância."
        ],
        "example": "Exemplo cotidiano: água líquida colocada em uma forma pode solidificar quando perde energia em condições adequadas no congelador. Antes e depois, continua sendo água; o caminho observado é líquido para sólido. A mudança não autoriza afirmar que as partículas ficaram imóveis nem que o volume permaneceu necessariamente idêntico.",
        "pitfall": "Trocar condensação por evaporação, dizer que o vapor de água é a nuvem branca ou concluir que duas fases significam obrigatoriamente dois estados físicos diferentes."
      },
      {
        "level": "intermediate",
        "title": "Energia, temperatura e condições da mudança de estado",
        "explanation": "Calor é energia transferida em razão de diferença de temperatura, e não uma substância guardada dentro de um corpo. Aquecer pode elevar a temperatura ou produzir mudança de estado. No modelo de uma substância pura em equilíbrio, sob pressão constante, a temperatura permanece no valor de transição durante a coexistência das fases envolvidas. A energia recebida pode alterar sua organização e interações sem elevar a temperatura nesse intervalo; isso não significa que não haja transferência de energia. Fusão, vaporização e sublimação exigem absorção de energia nas condições consideradas; os processos inversos liberam energia. Para uma massa m que muda completamente de estado na temperatura de transição, a quantidade de energia em módulo pode ser calculada por Q = mL, com L sendo o calor latente específico informado para a substância e as condições. Massa em gramas exige L em joules por grama para obter Q em joules. Se a amostra começar em outra temperatura, também será necessário considerar energia para aquecê-la até a transição; a fórmula de mudança de estado sozinha não representa todas as etapas. Num gráfico de aquecimento, é preciso ler eixos e condições antes de interpretar trechos inclinados ou patamares. Não se deve inventar um gráfico ausente nem presumir que todo patamar prove pureza. Misturas geralmente podem mudar de estado ao longo de intervalos, mas há comportamentos particulares, como misturas eutéticas na fusão e azeotrópicas na ebulição sob condições definidas. A pressão também importa: a água pura ferve aproximadamente a 100 °C sob pressão de uma atmosfera, e não em qualquer lugar. Pressão externa menor reduz sua temperatura de ebulição; pressão maior pode elevá-la. Assim, uma temperatura característica sempre precisa ser vinculada às condições.",
        "steps": [
          "Confira substância, pressão, temperatura inicial e mudança de estado solicitada.",
          "Determine se há apenas transição ou também aquecimento ou resfriamento fora dela.",
          "Multiplique massa por calor latente com unidades compatíveis e interprete absorção ou liberação.",
          "Ao ler dados ou curvas, preserve as hipóteses e evite generalizações sobre todas as misturas."
        ],
        "example": "Modelo didático: para fundir completamente 30 g de gelo já a 0 °C, sob condições em que a fusão se dá nessa temperatura, adote L = 334 J/g e despreze perdas. A energia absorvida é 30 × 334 = 10.020 J. Esse valor não inclui aquecer o gelo se ele estivesse inicialmente abaixo de 0 °C nem aquecer a água depois da fusão.",
        "pitfall": "Aplicar Q = mL ao aquecimento inteiro sem separar etapas, supor que toda mudança de estado mantenha temperatura constante sem condições ou usar 100 °C como regra universal de ebulição."
      },
      {
        "level": "advanced",
        "title": "Transformações físicas, reações e conservação de massa",
        "explanation": "Uma transformação física altera aspectos como estado, forma ou distribuição sem formar novas substâncias por reação química. Fundir gelo e fragmentar um material são exemplos; fragmentação pode ser difícil de desfazer e ainda assim continuar física. Uma transformação química envolve formação de substâncias com composição ou estrutura química diferente, como na combustão ou na formação de ferrugem. Reversibilidade, rapidez, aparência dramática ou necessidade de aquecer não são critérios suficientes para distinguir as duas. Em uma chama de vela, por exemplo, podem coexistir processos: a cera funde, vaporiza e parte reage com o oxigênio na combustão. O fenômeno precisa ser analisado por etapas, sem afirmar que o simples derretimento já é a reação. Alteração de cor, liberação de gás, formação de sólido ou mudança de temperatura podem ser indícios, mas cada sinal requer contexto. Bolhas também surgem na ebulição de água sem formação de nova substância; uma mudança de cor pode decorrer de mistura ou diluição. A conclusão sobre uma reação depende do conjunto de evidências e da identificação de produtos e condições. Nas transformações físicas e nas reações químicas usuais, a massa se conserva quando se considera todo o sistema e não há troca de matéria com o ambiente, dentro da precisão relevante. Um sistema fechado para matéria pode trocar energia e ainda permitir essa análise de massa. Se gás escapa de um recipiente aberto, a balança pode registrar redução, sem que matéria tenha deixado de existir: ela passou para o ambiente. Se uma reação incorpora oxigênio do ar, a massa dos produtos recolhidos pode superar a de um reagente inicialmente pesado. Delimitar recipiente, conteúdo e trocas evita comparar partes diferentes como se fossem o mesmo sistema. Exemplos de sistemas fechados são modelos de interpretação; não são instruções para aquecer ou provocar reações que gerem pressão em recipientes selados.",
        "steps": [
          "Pergunte se houve formação de novas substâncias ou somente alteração física.",
          "Considere evidências em conjunto, sem usar bolhas ou cor como prova isolada universal.",
          "Defina quais materiais e recipientes entram na massa comparada e identifique trocas com o ambiente.",
          "Explique ganhos ou perdas aparentes pela entrada ou saída de matéria, preservando o sistema escolhido."
        ],
        "example": "Situação hipotética de pesagem: um processo em recipiente aberto produz gás que deixa o conjunto. Se a balança registra menos massa ao final, não é correto concluir destruição de matéria. Para comparar massas totais, seria necessário contabilizar também o gás transferido para o ambiente, sem transformar o exemplo em procedimento de laboratório.",
        "pitfall": "Definir reação apenas pela irreversibilidade, afirmar que qualquer bolha indica nova substância ou comparar massa de um reagente com massa de produtos que incorporaram material do ambiente."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma situação hipotética, pequenas gotículas de água aparecem na superfície externa de uma garrafa fria e fechada, em ambiente com vapor de água no ar. Qual transformação explica diretamente a formação dessas gotas?",
        "hint": "A água considerada vem do ar e passa a gotículas na superfície fria; identifique o estado inicial e o final, sem supor vazamento da garrafa.",
        "solution": "B identifica condensação: água no estado gasoso presente no ar passa ao estado líquido nas condições da superfície fria. A inverte o caminho e descreve vaporização. C exigiria passagem direta de sólido a gás, que não foi relatada. D trata o processo como formação de uma nova substância, quando a mudança descrita preserva a identidade da água. O fechamento da garrafa não impede a condensação da água externa.",
        "options": [
          "Vaporização da água do ar, passando de líquido para gasoso.",
          "Condensação da água do ar, passando de gasoso para líquido.",
          "Sublimação de gelo externo, passando diretamente de sólido para gás.",
          "Reação química que transforma o vidro da garrafa em uma nova substância chamada água."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Num modelo ideal, 80 g de gelo puro já estão a 0 °C, sob pressão constante em que a fusão ocorre nessa temperatura. Adote calor latente de fusão L = 334 J/g e despreze perdas. Qual energia é absorvida para fundir completamente o gelo, sem aquecer a água depois?",
        "hint": "A amostra já está na temperatura de transição e o pedido termina ao completar a fusão. Use massa em gramas e o calor latente em joules por grama.",
        "solution": "D aplica Q = mL: 80 × 334 = 26.720 J. A usa 8 g e fica dez vezes abaixo. B toma o valor para apenas 1 g como se fosse toda a amostra. C usa 160 g, o dobro da massa fornecida. Não é necessário acrescentar aquecimento inicial ou final, pois as condições delimitam apenas a fusão. A temperatura constante no modelo não significa energia absorvida igual a zero.",
        "options": [
          "2.672 J",
          "334 J",
          "53.440 J",
          "26.720 J"
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Em um modelo hipotético, recipiente e conteúdo têm juntos 200 g antes de uma reação química que forma gás. Não há troca de matéria durante a reação. Depois, uma abertura permite que exatamente 12 g de gás saiam, sem outra troca de matéria. Qual é a massa do conjunto logo após a reação ainda fechada e após a saída do gás, respectivamente?",
        "hint": "Primeiro considere o sistema completo sem saída de matéria; depois subtraia apenas a massa que efetivamente atravessa o limite do sistema.",
        "solution": "C mantém 200 g enquanto toda a matéria permanece no conjunto e calcula 200 − 12 = 188 g após a saída do gás. A antecipa uma perda antes de ocorrer troca de matéria. B ignora os 12 g transferidos ao ambiente. D soma a massa de gás como se tivesse sido criada além dos reagentes, contrariando a conservação. A diferença de leitura na segunda etapa não representa destruição de matéria, pois o gás passou a fazer parte do ambiente.",
        "options": [
          "188 g e 188 g, porque formar gás destrói imediatamente 12 g de matéria.",
          "200 g e 200 g, mesmo depois de 12 g de matéria saírem do conjunto.",
          "200 g e 188 g, considerando a conservação na etapa fechada e a saída posterior de matéria.",
          "212 g e 200 g, porque o gás é massa nova criada além dos reagentes iniciais."
        ],
        "correctIndex": 2
      }
    ]
  }
];

export const authoredCurriculumBatch04ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Funções e gráficos",
    "contentSha256": "6b172ba1f7cdc580de9c23faec0d34862153ff201028b3ab0cabb713c9f01a4c",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/precalculus-2e/pages/1-1-functions-and-function-notation",
      "https://openstax.org/books/precalculus-2e/pages/1-2-domain-and-range",
      "https://openstax.org/books/precalculus-2e/pages/3-2-quadratic-functions",
      "https://openstax.org/books/precalculus-2e/pages/4-1-exponential-functions"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "Questão básica: f(x)=4x-7. f(2)=4·2-7=8-7=1. Intercepto y: f(0)=-7 → ponto (0,-7). Alternativa A coincide exatamente. B erra ambos os sinais. C acerta intercepto mas f(2)=15 está incorreto (seria 4·2+7). D acerta f(2) mas inverte sinal do intercepto. Resolução independente confirma índice 0 como único correto nos dois critérios simultâneos."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Questão intermediária: reta passa por (1,3) e (4,-3). Inclinação a = (-3-3)/(4-1) = -6/3 = -2. Reta perpendicular tem inclinação m tal que (-2)·m = -1 → m = 1/2. Como passa pela origem, equação é y = x/2. Alternativa A = 1/2. B = -1/2 (inverso sem trocar sinal). C = 2 (oposto da inclinação original, sem tomar o inverso). D = -2 (inclinação original). Resolução independente confirma índice 0."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Questão avançada: L(x) = -x²+10x-16, domínio [0,10], L(x)>0. Fatoração: -(x²-10x+16) = -(x-2)(x-8). Zeros em x=2 e x=8. Coeficiente quadrático -1 < 0 → concavidade para baixo → parábola acima do eixo x entre as raízes. Logo 2 < x < 8. Alternativa A = intervalo aberto correto. B = regiões externas (lucro negativo). C = inclui zeros onde lucro=0 (não estritamente positivo). D = regiões externas mais zeros. Resolução independente confirma índice 0."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Gêneros e linguagens",
    "contentSha256": "853e1e80eeecb6949ce188d2be65368b39e5e5634111f2c669e4452b5c8e52d5",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://periodicos.ufmg.br/index.php/revistainterfaces/article/view/18964"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Texto I usa imperativos (Participe, Traga) e referência temporal futura (domingo) para convocar ação; Texto II usa pretérito (reuniu, recebeu) para relatar fato consumado. Mesmo suporte (site) hospeda gêneros distintos: convite/injunção vs notícia/relato. Opção B é única que articula finalidade e suporte corretamente; A confunde tema com gênero; C reifica suporte como gênero; D toma marcador temporal como prova de narrativa."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Cartaz combina pergunta verbal (Conectados o tempo todo?) com imagem de pessoas fisicamente próximas mas absortas em telas individuais. Opção C articula os dois recursos para sugerir tensão irônica entre conexão digital e interação presencial, sem diagnóstico clínico. A ignora função semiótica da imagem; B inventa patologia não evidenciada; D reduz polissemia de 'conectados' a sentido literal único."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Poema mobiliza marcas de comunicado oficial (cabeçalho 'Comunicado', fórmula 'ficam convocados', fecho 'Assina:') mas aplica a entidades personificadas (guarda-chuvas, vento) com finalidade poética metafórica. Opção D reconhece hibridismo de gênero e transformação por personificação. A toma forma por ato real; B nega possibilidade de hibridismo em poesia; C inventa autoria histórica inexistente no enunciado."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Estrutura dissertativo-argumentativa",
    "contentSha256": "7fd957c3f657f940e639d4ff097de6558771c90be24544ff250f2d992b3c463c",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Opção B distingue corretamente: II apresenta medida concreta (ampliar empréstimo em pontos próximos) e relação causal com barreira específica (deslocamento), enquanto I é afirmação genérica sem direção argumentativa. A exige estatística como condição obrigatória, o que a aula rejeita. C transforma possibilidade ('pode reduzir') em garantia universal ('eliminará qualquer dificuldade'), violando o alerta contra quantificadores universais. D confunde assunto (leitura) com posição defendida."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "O parágrafo comete salto inferencial: 'mais horas de abertura' não mede 'satisfação de todos os usuários'; 'portanto' exige conclusão decorrente das premissas, e 'todos' é quantificador universal que demanda evidência para cada caso. Opção C propõe qualificar a conclusão e buscar dados de experiência, corrigindo o erro. A troca conectivo sem resolver o salto. B adiciona 'com certeza' sem evidência. D propõe parágrafo idêntico extra, confundindo quantidade com validade."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A proposta identifica ação (divulgar agenda), responsável (centro cultural), meios (mural acessível e canais digitais) e finalidade (facilitar conhecimento) ligados ao problema diagnosticado (falta de informação). Porém, 'facilitar o conhecimento' é finalidade declarada, não resultado comprovado; a aula alerta que efeito esperado ≠ efeito demonstrado. Opção D capta essa distinção. A nega relação que existe. B garante eliminação de barreiras não abordadas (econômica, física, cultural). C atribui nota automática, contradizendo a aula."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Estratégias de leitura e inferência",
    "contentSha256": "8f5f632a37396638d8ce35d98a696b5d0536e66586125fb65d02df110ee8597a",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://learnenglish.britishcouncil.org/free-resources/reading"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "O aviso estabelece regra geral (fecha às 18h) e exceção introduzida por 'however' para Fridays (fecha às 16h). A opção A lê a exceção; B ignora 'however'; C inventa horário; D confunde caixa externa (devoluções) com funcionamento do balcão. Gabarito 0 é incontestável."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "O trecho define 'sparse' pela explicação após dois-pontos: 'just three short letters, with no photographs or diaries' e pela expectativa de 'add more material later'. Opção C captura 'poucos itens disponíveis'; A contradiz o texto; B introduz classificação linguística inexistente; D inventa incêndio. Gabarito 2 é o único sustentado."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "A promessa de simplicidade contrasta com 'four passwords' e 'two offices'; 'Simplicity at its finest' funciona como ironia crítica. Opção B identifica o contraste; A isola o elogio final; C generaliza para 'todos os aplicativos'; D atribui causa (esquecimento de senhas) não presente. Gabarito 1 é a interpretação melhor sustentada."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Trovadorismo e Humanismo",
    "contentSha256": "b3f9a25fbd344db63b845fa89e76be1b20a7d47760236a85ce66707b0ec0b818",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://cantigas.fcsh.unl.pt/sobreascantigas.asp",
      "https://ensina.rtp.pt/artigo/fernao-lopes-o-oficio-de-escrever-a-historia/",
      "https://ensina.rtp.pt/explicador/cancioneiro-geral-de-garcia-de-resende/",
      "https://estudoautonomo.dge.mec.pt/sites/default/files/2025-05/gta-27_portugues.o-ano_tema-06_subtema-1_-gil-vicente-o-homem-e-a-obra-1.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A opção B identifica corretamente convenções da cantiga de amigo (voz feminina, espera, diálogo com mãe) e a presença de refrão (frase final recorrente), sem deduzir autoria. A confunde voz com autor; C inverte definição de mestria (mestria não tem refrão); D classifica erroneamente como sátira por causa da interlocução com a mãe, que é convenção de cantiga de amigo."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "A opção C corrige as duas generalizações falsas: o Humanismo envolve mudanças e permanências religiosas (não desaparecimento total) e Resende organizou coletânea de múltiplos autores (não escreveu sozinho). A mantém erro sobre religião; B mantém autoria única; D troca gênero e autor (crônica de Fernão Lopes)."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A opção D reconhece que o fragmento I, embora use documentos (cartas, relatos), permite discutir seleção e perspectiva narrativa (não neutralidade automática). No fragmento II, o nome 'Cobiça' e a ação constroem alegoria de comportamento, sem comprovar retrato universal de grupo histórico. A assume neutralidade por usar documentos; B generaliza personagem como prova histórica; C inverte função da alegoria (diz que impede crítica, quando a constrói)."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Cognatos, falsos cognatos e contexto",
    "contentSha256": "1956083f8ad4aaa680613f48998d98705fe20c52ed07c4649385912db74aff5c",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://dle.rae.es/exquisito",
      "https://dle.rae.es/polvo",
      "https://dle.rae.es/pulpo",
      "https://dle.rae.es/rojo",
      "https://dle.rae.es/%C3%A9xito",
      "https://dle.rae.es/firma",
      "https://dle.rae.es/leche",
      "https://dle.rae.es/viaje"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "A opção A traduz fielmente 'ofrece información sobre el horario y las actividades culturais' sem adicionar obrigação (B), gratuidade (C) ou fechamento (D); o gabarito e a explicação dos distractores estão corretos e baseados no texto."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "O contexto 'nos gustó muchísimo' e 'volveríamos solo para comerlo otra vez' confirma avaliação elogiosa; exquisito significa 'excelente/saboroso', não 'estranho' (A), 'imprópria' (B) nem 'menor preço' (D). Gabarito e resolução independentes conferem."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "Em I, 'La firma anunció nuevos puestos' indica organização/empresa; em II, 'falta tu firma al final' indica assinatura. A opção B distingue corretamente as acepções; A inverte, C e D forçam sentido único. Resolução independente valida o gabarito."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Trabalho e energia",
    "contentSha256": "2657d6c9d83077816ae547efe7be31e7e6f10343b6bc0834b06c71c69d702523",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/college-physics-2e/pages/7-1-work-the-scientific-definition",
      "https://openstax.org/books/college-physics-2e/pages/7-2-kinetic-energy-and-the-work-energy-theorem",
      "https://openstax.org/books/college-physics-2e/pages/7-3-gravitational-potential-energy",
      "https://openstax.org/books/college-physics-2e/pages/7-7-power"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "Cálculo independente: N = mg = 3 kg × 10 m/s² = 30 N; fatrito = μN = 0,25 × 30 N = 7,5 N; W = −fatrito × d = −7,5 N × 5 m = −37,5 J. Alternativa A corresponde. B (−150 J) seria μmgd com μ=1 ou d=20 m; C (37,5 J) inverte sinal ignorando oposição ao deslocamento; D (−75 J) dobra o módulo do atrito ou da distância. O enunciado pede apenas o trabalho do atrito, não o total."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Cálculo independente: Ec_inicial = ½ × 0,8 kg × (15 m/s)² = 0,4 × 225 = 90 J. No topo v=0, Ec_final=0. Conservação: Ec_inicial = ΔEp = mgh → h = 90 J / (0,8 kg × 10 m/s²) = 90/8 = 11,25 m. Alternativa A. B (22,5 m) dobra o resultado, possivelmente usando v²/g sem o ½; C (15,0 m) confunde velocidade com altura; D (9,0 m) não satisfaz mgh = 90 J."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "Cálculo independente: No contato Ec = ½ × 2 × 6² = 36 J. Durante compressão: fatrito = μmg = 0,5 × 2 × 10 = 10 N. Balanço: 36 = ½kx² + fatrito·x = 200x² + 10x → 200x²+10x−36=0 → Δ=100+28800=28900=170² → x = (−10+170)/400 = 0,40 m. Preparação: E_útil = 36 J, η=0,8 → E_entrada = 36/0,8 = 45 J. P_média_entrada = 45 J / 3 s = 15 W. Alternativa B. A erra compressão (0,30 m); C usa compressão sem atrito (√(36/200)≈0,42 m) e potência útil (12 W) como entrada; D multiplica por 0,8 (28,8 J) em vez de dividir, dando 9,6 W."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Ligações químicas",
    "contentSha256": "c8ed92a8cac33f010869d26567f593bcfde77820faa08809c0696799aaaafcd8",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/7-1-ionic-bonding",
      "https://openstax.org/books/chemistry-2e/pages/7-3-lewis-symbols-and-structures",
      "https://openstax.org/books/chemistry-2e/pages/7-6-molecular-structure-and-polarity",
      "https://openstax.org/books/chemistry-2e/pages/10-1-intermolecular-forces"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Opção B está correta: a fusão libera os íons Na⁺ e Cl⁻ da rede cristalina, permitindo seu deslocamento e condução; no sólido, embora existam cargas, elas estão fixas em posições de rede. A nega a existência de íons no cristal (falso). C descreve eletrólise/descomposição, não fusão simples. D atribui condução metálica (mar de elétrons) a um sal iônico fundido, modelo errado."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Opção C está correta: O central tem 4 domínios (2 ligações + 2 pares livres) → arranjo eletrônico tetraédrico; geometria molecular é angular (posições dos 3 átomos). Dipolos das ligações O–H não se cancelam → molécula polar. A assume linearidade ignorando pares livres. B confunde arranjo eletrônico com geometria molecular e erro de polaridade. D descreve NH₃ (3 ligações + 1 par livre), não H₂O."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Opção D está correta: etanol tem grupo O–H, onde H ligado a O atua como doador de ligação de hidrogênio entre moléculas próprias; éter dimetílico (CH₃–O–CH₃) tem oxigênio como aceptor, mas nenhum H ligado a N, O ou F, logo não doa ligações de hidrogênio no líquido puro. A ignora isomeria estrutural. B afirma rede iônica e ausência de elétrons de valência, absurdo. C equipara C–H a O–H como doador, contrário à regra escolar (só H em N/O/F)."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Genética e hereditariedade",
    "contentSha256": "58d375711545883e43f386a72177ad6596104beab304b0057d17c672ffbc929f",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/biology-2e/pages/12-1-mendels-experiments-and-the-laws-of-probability",
      "https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits",
      "https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance",
      "https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage",
      "https://openstax.org/books/biology-2e/pages/16-1-regulation-of-gene-expression",
      "https://openstax.org/books/biology-2e/pages/15-1-the-genetic-code"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "Rr × rr produz gametas R/r (1/2 cada) e r (1); genótipos esperados 1/2 Rr (liso) e 1/2 rr (rugoso); valor esperado em 120 = 60 rugosos. Alternativa A=60 correta. B=30 seria 1/4 (próprio de Aa×Aa), C=40 seria 1/3, D=90 seria 3/4; nenhuma corresponde aos gametas deste cruzamento. O enunciado deixa claro que é expectativa do modelo, não contagem obrigatória."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Filho aa com pais de fenótipo dominante em autossômico recessivo, penetrância completa, sem novas mutações → pais obrigatoriamente Aa. Novo filho com fenótipo dominante em Aa×Aa: universo AA, Aa, aA, aa equiprováveis; condiciona a fenótipo dominante (exclui aa) → 3 combinações, 2 heterozigotas → 2/3. Alternativa A=2/3 correta. B=1/4 é prob. incondicional de aa. C=1/2 ignora condicionamento. D=1 exclui AA indevidamente."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Total 1000 gametas. Parentais ABC(350) e abc(350). Duplos recombinantes AbC(10) e aBc(10) diferem dos parentais apenas no alelo B/b → B é locus central (ordem A–B–C). Intervalo A–B: recombinantes simples Abc(60)+aBC(60) + duplos AbC(10)+aBc(10) = 140 → 14%. Intervalo B–C: recombinantes simples ABc(80)+abC(80) + duplos AbC(10)+aBc(10) = 180 → 18%. Alternativa A compatível. B troca locus central. C omite duplos (12 e 16). D usa 28 e 32, que não são as distâncias adjacentes pedidas: 28% é a frequência entre os marcadores externos e 32 cM é a soma das estimativas dos dois intervalos. Distâncias são estimativas genéticas (cM), não físicas."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Industrialização e trabalho",
    "contentSha256": "ffa69264caa10e3c3c0858f329d6ad50ce2d81939e6fe4881393bb866d1d6da9",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://blog.scienceandindustrymuseum.org.uk/langworthy-brothers/",
      "https://www.parliament.uk/about/living-heritage/transformingsociety/livinglearning/19thcentury/overview/factoryact/",
      "https://atlas.fgv.br/verbetes/greve-geral-de-1917",
      "https://www.gutenberg.org/ebooks/6435",
      "https://www.thehenryford.org/collections/explore/articles/ford-methods-and-the-ford-shops",
      "https://global.toyota/en/company/vision-and-philosophy/production-system/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "O enunciado descreve fábrica mecanizada crescendo enquanto oficinas artesanais e produção doméstica continuam na mesma região. A opção B afirma coexistência de formas distintas de organização produtiva durante a industrialização, correspondendo exatamente ao cenário descrito. A opção A contradiz o texto ao alegar eliminação completa do artesanato. A opção C faz inferção histórica sem apoio ao tornar a fábrica origem exclusiva de todo trabalho remunerado. A opção D infere igualdade de condições apenas da proximidade geográfica, sem informação sobre contratos, jornadas ou poder de negociação."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "A síntese baseada na pesquisa da FGV relaciona a greve de 1917 à piora das condições de vida e trabalho e à atuação de organizações operárias anteriores. A opção C articula agravamento das condições de subsistência e ação coletiva previamente construída, respeitando a interação entre fatores materiais e organização. A opção A nega a organização anterior expressamente informada. A opção B transforma experiência localizada em fim imediato e nacional de conflitos, sem evidência. A opção D homogeneiza a origem dos trabalhadores em única nacionalidade, contrariando a diversidade histórica e o próprio texto."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "O caso hipotético descreve reposição conforme consumo (fluxo puxado), estoques pequenos de componentes e autorização para interromper a linha ante defeitos (jidoka), com anúncio empresarial de ganho de eficiência. A opção A identifica corretamente elementos do Sistema Toyota de Produção e distingue a intenção declarada da empresa da necessidade de evidências independentes para avaliar efeitos sobre trabalhadores. A opção B contradiz o enunciado ao transformar 'estoques pequenos' em regra absoluta de estoque zero. A opção C ignora os mecanismos descritos e reduz a fábrica a artesanato. A opção D infere condições ideais de trabalho apenas do anúncio, sem investigar jornadas, remuneração, autonomia ou participação."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Clima e ambiente",
    "contentSha256": "7d575a5d76e4103077b56a92810d494faf528d884022ce6309b75ce66e480309",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://portal.inmet.gov.br/servicos/normais-climatol%C3%B3gicas",
      "https://portal.inmet.gov.br/noticias/zona-de-convergencia-do-atlantico-sul-zcas",
      "https://www.fao.org/4/X0490E/x0490e04.htm",
      "https://www.ipcc.ch/report/ar6/syr/summary-for-policymakers/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Questão pede amplitude anual das médias mensais: maior média 29 °C, menor 21 °C → 29−21=8 °C. Alternativa A (17 °C) usa máxima/mínima diária (35−18), respondendo amplitude diária. B (50 °C) soma as médias, sem sentido de amplitude. D (14 °C) mistura máxima diária (35) com menor média mensal (21), incomparáveis. Gabarito C é o único que usa as duas médias mensais comparáveis do mesmo período."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Total mensal = 210 mm (6 dias ZCAS) + 200 mm (25 dias demais) = 410 mm. Participação do episódio = 210/410 ≈ 51,2%. Alternativa B confunde fração de dias (6/31 ≈ 19,4%) com fração de chuva. C usa denominador errado (210/200 = 105%), comparando episódio apenas aos demais dias. D inverte categorias atribuindo 200 mm à ZCAS. Gabarito A calcula corretamente mm/mm sobre o total do mês sem sobreposição."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Plano A visa reduzir emissões de GEE (transporte baixa emissão) → finalidade de mitigação. Plano B visa reduzir danos por enchentes (alertas, menor ocupação em área exposta) → finalidade de adaptação. Alternativa A inverte os conceitos. B afirma que alertas eliminam 'todas as emissões', não suportado pelo enunciado. C promete 'ausência de qualquer dano futuro' e dispensa avaliação de vulnerabilidade, promessa infundada. D descreve corretamente as finalidades declaradas sem garantir eliminação total de risco."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Filosofia antiga e ética clássica",
    "contentSha256": "8b1af277207322d27600089fc5fa501719fc348cb57f3f50753c9494b107d33b",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://plato.stanford.edu/entries/plato-ethics-politics/",
      "https://plato.stanford.edu/entries/aristotle-ethics/",
      "https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html",
      "https://classics.mit.edu/Epicurus/menoec.html",
      "https://classics.mit.edu/Epictetus/epicench.html",
      "https://plato.stanford.edu/entries/skepticism-ancient/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A pergunta de Rui apresenta contraexemplo que testa a definição 'ser justo é obedecer a qualquer ordem' ao mostrar consequência injusta (prejudicar alguém), procedimento característico do elênco socrático: examinar definições por suas consequências sem provar teoria alternativa, nem recorrer a autoridade, nem demonstrar impossibilidade de conhecimento, nem medir lei física."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A doutrina aristotélica do meio-termo (Ética a Nicômaco II.6) estabelece que a virtude é meio relativo a nós, determinado pela razão como o prudente faria, não média aritmética; Aristóteles lista ações (adultério, furto, homicídio) cuja própria descrição implica erro, sem meio virtuoso; a virtude requer conhecimento, escolha e caráter estável, não resultado exterior nem repetição mecânica."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "I corresponde ao estoicismo: virtude como único bem, riqueza como indiferente (preferível mas não bem moral); II ao epicurismo: avaliação hedônica prudente que recusa prazer se traz perturbação maior à ataraxia (Carta a Meneceu); III ao pirronismo: epoché perante argumentos equipolentes, não certeza dogmática de impossibilidade de conhecer; outras opções trocam escolas ou caricaturam."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Durkheim, Marx e Weber",
    "contentSha256": "ad8b821b395a14049450df0aacfc05714d5337059b2e9c5d96ba1ae856b074f0",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://classiques.uqam.ca/classiques/Durkheim_emile/regles_methode/regles_methode_tdm.html",
      "https://openstax.org/books/introduction-sociology-3e/pages/4-2-theoretical-perspectives-on-society",
      "https://www.marxists.org/archive/marx/works/1867-c1/ch06.htm",
      "https://www.marxists.org/archive/marx/works/1867-c1/ch09.htm",
      "https://plato.stanford.edu/entries/weber/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A opção C captura corretamente exterioridade (normas anteriores à estudante), pressão sobre condutas (sanções por descumprimento) e possibilidade de transformação coletiva (propostas de mudança), sem imputar imutabilidade ou criação individual. A nega anterioridade coletiva; B imputa imutabilidade inexistente no conceito; D confunde frequência de matrículas com definição de fato social, ignorando a organização normativa descrita."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "O modelo fornece: capital constante (c) = 240; valor novo = v + s = 120; capital variável (v) = 40. Mais-valia (s) = valor novo − v = 120 − 40 = 80. Taxa de mais-valia = s/v = 80/40 = 200%. A está correta. B toma todo o valor novo (120) como mais-valia e calcula 120/40 = 300%. C soma c + valor novo (360) como mais-valia. D acerta a mais-valia (80) mas usa base errada (c+v = 280), resultando ~28,6%, que seria taxa de lucro, não taxa de mais-valia solicitada."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Iara relata ação por dever moral sem vantagem pessoal → orientação racional referente a valores (Wertrational). Paulo relata comparação de custos e meios para meta → orientação racional referente a fins (Zweckrational). A pesquisa weberiana combina compreensão interpretativa (Verstehen) e explicação causal. D associa corretamente e preserva a explicação causal. A inverte as duas orientações. B confunde tipo ideal (construção analítica) com perfeição moral. C opõe compreensão a causalidade, contrariando a proposta metodológica weberiana de integrar ambas."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "História da arte e patrimônio cultural",
    "contentSha256": "7b24306a77efefd5305428b354ffe666317068435d44753b14fdcaf5c93c312a",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://resources.metmuseum.org/resources/metpublications/pdf/The_Art_of_Renaissance_Europe_A_Resource_for_Educators.pdf",
      "https://bienal.org.br/exposicoes/1a-bienal-de-sao-paulo/",
      "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material",
      "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-imaterial",
      "https://www.gov.br/iphan/pt-br/patrimonio-cultural/educacao-patrimonial/inventarios-participativos/inventarios-participativos",
      "https://www.moma.org/collection/terms/cubism/multiple-perspectives",
      "https://www.moma.org/interactives/moma_through_time/1960/making-space-for-a-new-type-of-art",
      "https://mam.org.br/wp-content/uploads/2022/04/mam-modernoondemodernoquando-catalogo-com-ad.pdf",
      "https://www.metmuseum.org/ko/essays/baroque-rome"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "O enunciado descreve explicitamente 'linhas convergem para um ponto de fuga' e 'organização geométrica para sugerir profundidade a partir de uma posição de observação', que são a definição canônica de perspectiva linear. A opção A descreve perspectiva atmosférica (redução de nitidez), não mencionada. B (talha dourada) e D (xilogravura) são técnicas de execução/material, não recursos de representação espacial. A resolução independe do gabarito: a descrição textual mapeia diretamente à definição de perspectiva linear."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A proposta hipotética centra-se em 'ação realizada durante vinte minutos', 'movimentos e sons diante do público' e afirma que 'a ação e sua duração integram a obra', o que define performance artística. O registro em vídeo é explicitamente separado como documentação. B impõe pintura como única arte (falso). C inverte a lógica: registro não anula escolha artística. D generaliza indevidamente que novas linguagens extinguem as anteriores. A resposta correta identifica a linguagem sem overclaims."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "O cenário apresenta duas demandas: preservar 'prédio de referência' (bem material) e 'modo de fazer transmitido entre gerações' (bem imaterial/saber). A opção D propõe investigar proteção material do prédio (tombamento como instrumento cabível) e reconhecimento/salvaguarda do saber (registro com participação e apoio à transmissão), sem automatismos. A inverte os instrumentos (tombar imaterial, registrar parede). B confunde tombamento com transferência obrigatória de propriedade. C reduz salvaguarda a guardar objeto e proibir mudanças, apagando a dimensão viva e os detentores."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Esporte, jogos e cultura corporal",
    "contentSha256": "5c92b9f7900818690437a572b1635c6fa61ed2eab73bfead886967c515789810",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.unesco.org/en/legal-affairs/international-charter-physical-education-physical-activity-and-sport",
      "https://bcr.iphan.gov.br/bens-culturais/roda-de-capoeira/",
      "https://basenacionalcomum.mec.gov.br/images/BNCC_20dez_site.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "O enunciado descreve disputa entre equipes (oposição) e passes planejados internamente (cooperação), além de adaptação combinada para ampliar participação. Opção B é a única que reconhece a coexistência oposição/cooperação e a avaliação pedagógica da adaptação. A nega cooperação descrita. C confunde mudança combinada com ausência de regra. D transforma vitória em mérito pessoal, extrapolando o contexto educativo."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Prática A (lançar para aproximar de alvo) define lógica de precisão; prática B (avançar em campo compartilhado para meta adversária defendendo a própria) define lógica de invasão. Opção C associa corretamente. A inverte as lógicas. B classifica ambas como marca sem critério de tempo/distância/carga. D impõe separação por rede inexistente no enunciado."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Grade de 200 min: 150 min modalidade X = 75% do tempo observado nessa amostra. Opção A calcula corretamente e restringe conclusão ao recorte. B comete falácia ecológica (minutos → população). C inventa causa única não investigada. D confunde ausência de cobertura com inexistência da prática. Todas as demais extrapolam os dados."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Mudanças de estado e transformações",
    "contentSha256": "c0c63ce37a1cae029952badea8feb89f0381d1106fdf94304929ccae39af1305",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/10-3-phase-transitions",
      "https://openstax.org/books/chemistry-2e/pages/1-3-physical-and-chemical-properties",
      "https://openstax.org/books/chemistry-2e/pages/4-1-writing-and-balancing-chemical-equations",
      "https://openstax.org/books/college-physics-2e/pages/14-3-phase-change-and-latent-heat"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Gotículas em garrafa fria fechada provêm de vapor de água do ar (gasoso) que condensa na superfície fria (líquido); opção B descreve exatamente condensação gasoso→líquido. A inverte a direção (vaporização), C invoca sublimação de gelo não relatado, D propõe reação química absurda transformando vidro em água. O fechamento da garrafa não afeta a condensação externa."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Gelo a 0 °C funde completamente sob pressão constante; energia absorvida Q = mL = 80 g × 334 J/g = 26.720 J. Opção D corresponde. A usa 8 g (dez vezes menor), B usa massa unitária 1 g, C usa 160 g (dobro). O enunciado delimita apenas a fusão, sem aquecimento antes ou depois, e a temperatura constante no modelo não implica energia zero."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Sistema fechado (recipiente + conteúdo = 200 g) conserva massa durante a reação: 200 g logo após. Ao abrir, 12 g de gás saem; massa final = 200 − 12 = 188 g. Opção C reflete as duas etapas. A antecipa perda inexistente na etapa fechada e iguala as massas. B ignora a saída de 12 g. D soma 12 g como massa nova criada, violando conservação. A redução de leitura não é destruição de matéria, é transferência para o ambiente."
      }
    ]
  }
] as const;
