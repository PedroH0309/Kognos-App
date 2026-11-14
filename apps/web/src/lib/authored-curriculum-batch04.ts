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
  }
] as const;
