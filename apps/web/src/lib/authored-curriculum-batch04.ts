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
  }
] as const;
