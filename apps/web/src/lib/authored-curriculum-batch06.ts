import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch06:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Geometria e medidas",
    "objective": "Calcular e distinguir perímetros, áreas, volumes e superfícies, usar semelhança em recipientes e analisar distâncias e transformações com unidades, hipóteses e ordem explícitas.",
    "prerequisites": [
      "Operações com números reais, potências e raízes",
      "Noções de ângulo reto, figuras planas e sólidos",
      "Teorema de Pitágoras e proporcionalidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Áreas e perímetros de figuras planas",
        "explanation": "O cálculo de área e perímetro constitui a base da geometria métrica. Para triângulos, a área é dada por A = (b × h) / 2, onde b é a base e h a altura relativa a essa base; o perímetro é a soma dos três lados. Em quadriláteros, o retângulo tem área A = b × h e perímetro P = 2(b + h); o quadrado, caso particular, tem A = l² e P = 4l. O paralelogramo usa a mesma fórmula do retângulo (base × altura), mas a altura é a distância perpendicular entre as bases paralelas. O trapézio tem área A = (B + b) × h / 2, onde B e b são as bases paralelas. Para o círculo, a área é A = π × r² e o perímetro (comprimento da circunferência) é C = 2πr = πd, com r raio e d diâmetro. A constante π (pi) aproxima-se de 3,14159; em cálculos aproximados pode-se adotar 3,14 ou 22/7 quando indicado, sem tratar essas aproximações como o valor exato. É fundamental identificar qual medida corresponde à base e qual à altura, pois a altura deve ser perpendicular à base escolhida. Em figuras compostas, decompõe-se a figura em partes elementares, calcula-se cada área e soma-se (ou subtrai-se, no caso de regiões vazadas). O uso correto de unidades é indispensável: área em unidades quadradas (m², cm²) e perímetro em unidades lineares (m, cm). Converter unidades exige considerar a dimensão: 1 m = 100 cm, mas 1 m² = 10.000 cm². Figuras com a mesma área podem ter perímetros diferentes. Em triângulos retângulos, os catetos formam o ângulo reto e a hipotenusa é oposta a ele; Pitágoras relaciona seus comprimentos por a² + b² = c². A soma dos ângulos internos de um triângulo plano é 180°. Em figuras semelhantes com razão linear positiva k, comprimentos e perímetros multiplicam-se por k, enquanto áreas se multiplicam por k².",
        "steps": [
          "Identifique a figura geométrica e selecione a fórmula de área correspondente.",
          "Meça ou determine a base e a altura (perpendicular à base) com a mesma unidade.",
          "Substitua os valores na fórmula e execute as operações respeitando a ordem de precedência.",
          "Expresse o resultado com a unidade quadrada adequada (m², cm², etc.).",
          "Para o perímetro, some todos os comprimentos dos lados usando unidade linear."
        ],
        "example": "Modelo hipotético: um triângulo isósceles tem lados iguais de 25 m e base de 30 m. A altura à base divide-a em dois segmentos de 15 m: h = √(25² − 15²) = 20 m. Sua área é 30×20/2 = 300 m² e seu perímetro é 25+25+30 = 80 m. As medidas são compatíveis, e área e perímetro têm unidades diferentes.",
        "pitfall": "Confundir altura com lado oblíquo em triângulos e paralelogramos, usando o lado inclinado em vez da distância perpendicular à base."
      },
      {
        "level": "intermediate",
        "title": "Volumes e áreas superficiais de sólidos geométricos",
        "explanation": "A extensão tridimensional exige fórmulas de volume e área total da superfície. Para prismas retos (incluindo paralelepípedos e cubos), o volume é V = Ab × h, onde Ab é a área da base e h a altura do prisma; a área total é a soma das áreas de todas as faces. No cubo de aresta a: V = a³, At = 6a². No paralelepípedo de dimensões a, b, c: V = a × b × c, At = 2(ab + ac + bc). O cilindro reto de raio r e altura h tem volume V = πr²h e área total At = 2πr² + 2πrh (duas bases circulares mais área lateral). O cone reto de raio r, altura h e geratriz g = √(r² + h²) tem V = (πr²h) / 3 e At = πr² + πrg (base mais lateral). A esfera de raio r tem V = (4/3)πr³ e At = 4πr². A pirâmide de base poligonal com área Ab e altura h tem V = (Ab × h) / 3; a área total soma a base e as faces triangulares laterais. Em sólidos compostos, calcula-se cada componente e soma-se os volumes; para a área superficial, atenta-se para faces internas que não ficam expostas. Unidades: volume em unidades cúbicas (m³, cm³, litros — 1 L = 1 dm³ = 1000 cm³); área em unidades quadradas. A conversão entre unidades cúbicas exige cuidado: 1 m³ = 1000 dm³ = 1 000 000 cm³. Antes de transferir líquido, compare o volume inicial com a capacidade do destino e informe posição, medidas internas e ausência de perdas quando essas forem hipóteses. Um cone parcialmente cheio com vértice para baixo forma um cone semelhante ao recipiente: raio da superfície e altura do líquido variam na mesma razão, e o volume varia com o cubo dessa razão. Não se pode manter o raio da borda como se fosse o raio de toda altura parcial.",
        "steps": [
          "Classifique o sólido e escreva as fórmulas de volume e área total.",
          "Identifique todas as medidas lineares necessárias (raio, altura, aresta, geratriz) na mesma unidade.",
          "Calcule a área da base se for prisma, cilindro, cone ou pirâmide.",
          "Aplique a fórmula de volume substituindo os valores numéricos.",
          "Para a área total, some as áreas de todas as faces externas, excluindo faces de contato em sólidos compostos."
        ],
        "example": "Modelo hipotético de cilindro reto fechado, com raio 5 cm e altura 12 cm: V = π×5²×12 = 300π cm³; a superfície total é 2π×5² + 2π×5×12 = 170π cm². Com π aproximado por 3,14, os valores são 942 cm³ e 533,8 cm². Se faltar a tampa, a superfície de material deve excluir uma base.",
        "pitfall": "Esquecer de elevar o raio ao quadrado na base do cilindro ou do cone, ou usar a altura em vez da geratriz na área lateral do cone."
      },
      {
        "level": "advanced",
        "title": "Geometria analítica e transformações no plano cartesiano",
        "explanation": "A geometria analítica permite tratar problemas métricos por meio de coordenadas. A distância entre dois pontos A(x₁, y₁) e B(x₂, y₂) é d = √[(x₂ - x₁)² + (y₂ - y₁)²], derivada do Teorema de Pitágoras. O ponto médio de AB tem coordenadas M((x₁ + x₂)/2, (y₁ + y₂)/2). A inclinação (coeficiente angular) de uma reta que passa por A e B é m = (y₂ - y₁)/(x₂ - x₁), desde que x₁ ≠ x₂; retas verticais têm inclinação indefinida. Duas retas não verticais distintas com a mesma inclinação são paralelas; duas retas verticais distintas também são paralelas. Retas não verticais são perpendiculares se o produto das inclinações é -1; uma vertical e uma horizontal também são perpendiculares. A equação da reta na forma ponto-inclinação: y - y₁ = m(x - x₁). Transformações geométricas preservam ou alteram medidas: translação (deslocamento) preserva distâncias, ângulos, áreas e orientação; rotação em torno de um ponto preserva distâncias e ângulos, e a orientação no plano, inclusive com ângulo negativo; reflexão em uma reta preserva distâncias e ângulos, inverte orientação; homotetia (dilatação) com razão k diferente de zero multiplica distâncias por |k| e áreas por k², preservando ângulos; em sólidos semelhantes, volumes se multiplicam por |k|³. Composições de transformações aplicam-se sequencialmente. No plano cartesiano, uma translação por vetor (a, b) mapeia (x, y) → (x + a, y + b); rotação de 90° no sentido anti-horário em torno da origem: (x, y) → (-y, x); reflexão no eixo x: (x, y) → (x, -y); homotetia de centro na origem e razão k: (x, y) → (kx, ky). O sinal do ângulo indica o sentido da rotação, não uma reflexão. Em geral, mudar a ordem de uma rotação e de uma translação muda o resultado; aplique cada regra à imagem obtida na etapa anterior.",
        "steps": [
          "Determine as coordenadas dos pontos relevantes do problema.",
          "Aplique a fórmula da distância ou do ponto médio conforme a necessidade.",
          "Calcule a inclinação de retas para verificar paralelismo ou perpendicularismo.",
          "Escreva a equação da reta na forma adequada (ponto-inclinação ou geral).",
          "Para transformações, aplique a regra de coordenadas correspondente a cada vértice da figura."
        ],
        "example": "Os vértices de um triângulo são A(1, 2), B(4, 6) e C(7, 2). A distância AB = √[(4-1)² + (6-2)²] = √(9+16) = 5. Após translação pelo vetor (3, -1), os novos vértices são A'(4, 1), B'(7, 5), C'(10, 1). A área permanece inalterada.",
        "pitfall": "Inverter a ordem das coordenadas na fórmula da distância ou esquecer o sinal negativo na inclinação de retas decrescentes, bem como confundir a razão de homotetia com seu inverso."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um jardim retangular hipotético mede 18 m por 12 m. Um caminho externo de largura uniforme 1 m contorna todo o jardim, formando com ele um retângulo maior, inclusive nos cantos. Qual é a área do caminho?",
        "hint": "As duas dimensões externas crescem 2 m, pois o caminho aparece em ambos os lados. Subtraia a área interna da externa, sem contar cantos duas vezes.",
        "solution": "B calcula a área externa (18+2)×(12+2) = 280 m² e subtrai 18×12 = 216 m², obtendo 64 m². A usa perímetro interno vezes largura, 60×1 = 60 m², e omite os quatro cantos. C soma a largura apenas uma vez a cada dimensão: 19×13 − 216 = 31 m², portanto não satisfaz o caminho informado. D conta apenas os quatro quadrados dos cantos, ignorando as faixas laterais.",
        "options": [
          "60 m².",
          "64 m².",
          "31 m².",
          "4 m²."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Um cilindro reto de raio interno 3 cm contém água até altura 4 cm. Toda a água é transferida sem perdas para um cone reto vazio, com vértice para baixo, raio interno da borda 6 cm e altura interna 12 cm. O líquido forma um cone semelhante ao recipiente. Qual a altura final da água, arredondada a uma casa decimal?",
        "hint": "O volume inicial é 36π cm³. Compare à capacidade do cone e use r/h = 6/12 para o cone formado pela água, sem manter r = 6 na altura parcial.",
        "solution": "D calcula a capacidade 144π cm³, maior que os 36π transferidos, sem transbordamento. Pela semelhança, r = h/2 e V = π(h/2)²h/3 = πh³/12. Igualando a 36π, h³ = 432, logo h ≈ 7,5595 cm, arredondado para 7,6 cm. A corresponde à altura 3 cm obtida ao usar indevidamente o raio fixo 6 cm no volume parcial. B toma metade da altura, mas h = 6 cm daria V = 18π cm³, metade do volume transferido. C usa o cone cheio, embora o volume transferido seja apenas um quarto da capacidade.",
        "options": [
          "3,0 cm.",
          "6,0 cm.",
          "12,0 cm.",
          "7,6 cm."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Um triângulo hipotético tem vértices A(2, 3), B(8, 3) e C(5, 9). Aplica-se rotação de 90° no sentido anti-horário em torno da origem e depois translação pelo vetor (4, −2). Quais são as coordenadas finais do vértice C?",
        "hint": "A rotação leva (x,y) a (−y,x). Aplique a translação à imagem já rotacionada, pois a ordem das operações é parte do enunciado.",
        "solution": "C aplica rotação a C(5,9), obtendo (−9,5); a translação soma (4,−2), dando (−5,3). A inverte a ordem: translada para (9,7) e rotaciona para (−7,9). B faz rotação horária: (9,−5), seguida da translação para (13,−7). D mostra apenas a imagem rotacionada, sem a translação. Rotação e translação preservam distâncias e orientação no plano, embora sua composição dependa da ordem.",
        "options": [
          "(−7, 9).",
          "(13, −7).",
          "(−5, 3).",
          "(−9, 5)."
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Leitura, inferência e interpretação textual",
    "objective": "Distinguir informações expressas e inferidas, analisar pistas, vozes e efeitos de sentido e avaliar o alcance de interpretações e argumentos em textos autorais de diferentes funções.",
    "prerequisites": [
      "Leitura de frases e relações entre períodos",
      "Noções de referência pronominal, conectivos e modalização",
      "Distinção entre gênero de circulação e sequência narrativa, expositiva ou argumentativa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Texto, contexto e recuperação de informações",
        "explanation": "Ler envolve relacionar o que está expresso, conhecimentos pertinentes e condições de produção e circulação. Avisos, relatos, notícias e artigos de opinião têm finalidades e formas que ajudam a orientar a leitura, mas não determinam uma posição fixa para toda informação importante. Gêneros de texto não são a mesma coisa que sequências narrativas, expositivas ou argumentativas; um gênero pode combinar várias sequências. Para localizar uma informação, identifique quem faz o quê, quando, em que lugar e sob quais condições. Uma resposta pode parafrasear o texto sem repetir literalmente todas as palavras, desde que preserve o sentido e as restrições. Recupere antecedentes de pronomes, elipses e substituições lexicais para não atribuir uma ação ao participante errado. Quantificadores e modalizadores também mudam o alcance: alguns não equivale a todos; pode ocorrer não equivale a ocorrerá. Conectivos articulam contraste, causa, condição, concessão e conclusão, mas a relação depende do trecho completo. Diferencie assunto geral e afirmação central, e procure as informações nos pontos em que o texto efetivamente as apresenta. Um exemplo ilustra uma ideia, sem se tornar obrigatoriamente a tese do autor. A leitura pode exigir retorno a trechos anteriores e comparação de partes; não há obrigação universal de sublinhar, numerar ou ler numa única ordem. O procedimento deve servir ao objetivo. Ao escolher uma alternativa, confira se ela preserva agente, tempo, quantidade, condição e grau de certeza, em vez de aceitar apenas porque contém palavras do texto.",
        "steps": [
          "Identifique finalidade, participantes e contexto de circulação.",
          "Localize a informação com suas condições e recupere referentes.",
          "Compare paráfrases pelo sentido, incluindo quantificadores e modalizadores.",
          "Confronte a alternativa com o conjunto do trecho, não só com uma palavra repetida."
        ],
        "example": "Aviso autoral hipotético: A visita ao jardim ocorrerá sábado, se não chover; o ponto de encontro é o portão oeste. A localização está expressa, mas a realização depende da condição meteorológica. Resumir como a visita certamente ocorrerá sábado elimina uma restrição relevante, embora repita o dia correto. Outro exemplo autoral: A guia recebeu a turma; ela indicou o trajeto. Nesse contexto, ela retoma a guia, não a turma. A recuperação do referente acompanha a concordância e a relação entre as ações.",
        "pitfall": "Eliminar uma condição expressa ao parafrasear, trocar agente ou horário ou deduzir a tese apenas pela posição de um parágrafo."
      },
      {
        "level": "intermediate",
        "title": "Inferências, pressupostos e ironia no contexto",
        "explanation": "Inferir é construir uma conclusão que não está diretamente enunciada, apoiando-se em pistas e conhecimentos pertinentes. Nem toda inferência é uma consequência lógica necessária; algumas são interpretações mais prováveis no contexto e podem ser revistas com novas informações. O essencial é explicitar a ligação entre pistas e conclusão, sem introduzir pressupostos arbitrários ou tornar uma hipótese mais forte que os dados. Em Clara voltou a estudar, a expressão voltou a apresenta como pano de fundo uma experiência anterior de estudo; o enunciado não informa automaticamente a causa da interrupção. Em alguns convidados chegaram, uma leitura conversacional pode sugerir que nem todos chegaram, mas essa sugestão pode ser cancelada por uma continuação como na verdade, todos. É preciso distinguir o que a frase assegura e o que o contexto sugere. Ironia pode produzir distanciamento, crítica ou avaliação por contraste entre palavras e situação; não se limita a trocar toda frase pelo seu contrário. Aspas podem marcar citação, termo específico ou distanciamento, e não provam ironia isoladamente. Observe combinações de contexto, escolha lexical e construção do trecho. Também não se pode concluir que uma ausência é um silêncio deliberado sem outras evidências. Um narrador, personagem ou entrevistado pode sustentar uma posição que não corresponde automaticamente à do autor da obra ou à voz responsável pela matéria. Reconhecer quem fala e como essa fala é apresentada ajuda a evitar inferências de adesão onde há apenas relato, crítica ou contraste. A leitura de nem todos no exemplo de alguns é uma implicatura conversacional: uma sugestão contextual cancelável, não o conteúdo literalmente afirmado. A experiência anterior associada a voltou a é uma pressuposição na leitura usual, que tende a permanecer mesmo se a frase for negada: Clara não voltou a estudar. Essa comparação não transforma a pressuposição em regra inflexível de todo uso possível; contexto e usos especiais também devem ser considerados.",
        "steps": [
          "Identifique a pista e formule uma conclusão com o alcance que ela sustenta.",
          "Separe pressuposto, afirmação expressa e sugestão dependente do contexto.",
          "Analise ironia por relações do trecho, sem tomar aspas como prova isolada.",
          "Diferencie a voz citada da posição de quem a apresenta."
        ],
        "example": "Diálogo autoral hipotético: alguém chega duas horas depois do horário combinado e ouve Que pontualidade exemplar!, enquanto os demais apontam o relógio. O contexto sustenta leitura irônica de crítica ao atraso. A mesma frase, dita após uma chegada no horário e sem esse contraste, poderia ser elogio literal.",
        "pitfall": "Exigir que toda inferência seja uma dedução inevitável, identificar ironia por aspas isoladas ou confundir a fala de um personagem com a opinião do autor."
      },
      {
        "level": "advanced",
        "title": "Argumentos, relações entre textos e limites de conclusão",
        "explanation": "Interpretar criticamente exige avaliar como partes e vozes compõem o sentido global. Coerência envolve relações construídas entre informações, contexto e conhecimentos relevantes; não se reduz à presença de conectivos nem à concordância do leitor com a opinião expressa. Reconstrua a afirmação defendida, as razões oferecidas e o caminho entre elas. Um dado pode apoiar uma comparação e ainda não demonstrar a causa alegada; um exemplo específico pode ilustrar uma possibilidade sem provar que ela ocorre sempre. Ao ler uma pesquisa resumida, observe autoria real, recorte, amostra, método e limitações informadas, sem preencher ausências com estatísticas ou garantias inventadas. Uma generalização universal exige mais sustentação que a descrição de um grupo delimitado. A menção a uma autoridade pode ser pertinente no domínio em questão, mas não torna a conclusão infalível; um recurso emocional também não é automaticamente uma falácia, pois seu papel depende do argumento. Intertextualidade envolve relações com outros textos, por citação, paráfrase, alusão ou transformação, entre outras formas. Uma referência pode apoiar, questionar ou parodiar a formulação anterior: reconhecer a relação é diferente de supor adesão. Se dois trechos são fornecidos, compare o que se conserva, se modifica e com que efeito. Quando uma interpretação depende de repertório externo, separe esse conhecimento do que o excerto permite afirmar. Avaliar limites de evidência não equivale a declarar que todo resultado observado é falso; pode significar apenas que a conclusão extrapolou o que foi apresentado.",
        "steps": [
          "Reconstrua tese, razões e passagem para a conclusão.",
          "Compare alcance dos dados e força da afirmação, incluindo causalidade e generalização.",
          "Identifique a função da referência a outro texto, sem supor adesão automática.",
          "Diferencie resultado descrito, limite da interpretação e dado externo necessário."
        ],
        "example": "Dois enunciados autorais hipotéticos dialogam: o primeiro diz Ler abre portas; o segundo, escrito explicitamente em resposta ao primeiro, retoma sua frase: Ler abre portas, mas precisamos garantir que todos cheguem até elas. A segunda formulação retoma a primeira e acrescenta uma condição de acesso. A retomada não é simples repetição sem mudança de sentido, nem permite atribuir os trechos a um autor real.",
        "pitfall": "Confundir discordância pessoal com incoerência, tratar toda emoção ou autoridade como falácia ou negar um dado apenas porque ele não sustenta uma conclusão universal."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Aviso autoral hipotético: As inscrições para a oficina poderão ser feitas na terça e na quinta, em qualquer um desses dois dias, das 14h às 17h, mediante apresentação do comprovante de matrícula. Qual paráfrase preserva as condições expressas?",
        "hint": "Confira os dias, o intervalo de horário e a exigência de documento; não acrescente abertura em dias ou horários não informados.",
        "solution": "D conserva os dois dias disponíveis como alternativas de inscrição, o horário das 14h às 17h e o comprovante de matrícula. A amplia para todos os dias. B retira a condição documental explícita. C troca o intervalo da tarde por um da manhã. O aviso não exige que a mesma pessoa se inscreva duas vezes: explicita em qualquer um desses dois dias. A paráfrase preserva as condições de sentido.",
        "options": [
          "A inscrição ocorre em qualquer dia da semana, das 14h às 17h, com comprovante.",
          "Na terça e na quinta, das 14h às 17h, a inscrição dispensa comprovante.",
          "Na terça e na quinta, das 8h às 11h, é possível inscrever-se com comprovante.",
          "É possível inscrever-se na terça ou na quinta, das 14h às 17h, apresentando comprovante de matrícula."
        ],
        "correctIndex": 3
      },
      {
        "level": "intermediate",
        "prompt": "Trecho autoral hipotético: O atendimento começou duas horas depois do anunciado. Diante da fila sem orientação, uma usuária comentou: Excelente organização! Nenhum problema à vista. Considerando a situação descrita, qual interpretação da fala tem maior sustentação?",
        "hint": "Confronte as palavras de elogio com atraso e desorientação. Verifique qual interpretação se apoia na situação sem acrescentar propostas ou responsabilidades não mencionadas.",
        "solution": "B interpreta o contraste como crítica irônica à organização. A lê apenas o elogio literal e ignora as pistas do contexto. C inventa uma proposta de encerrar o serviço. D atribui à usuária a responsabilidade por criar a fila, fato não informado. A leitura se apoia no conjunto da situação, não em uma marca isolada.",
        "options": [
          "A usuária elogia literalmente a ausência de atrasos e de dificuldade na fila.",
          "A usuária critica ironicamente a organização, pelo contraste entre o elogio e a situação descrita.",
          "A usuária propõe que o serviço seja encerrado de modo permanente.",
          "A usuária reconhece ter criado pessoalmente a fila e causado o atraso."
        ],
        "correctIndex": 1
      },
      {
        "level": "advanced",
        "prompt": "Argumento autoral hipotético, sem referência a pesquisa real: Em doze turmas voluntárias de uma cidade, a média de leitura aumentou após uma oficina. Logo, a oficina foi a única causa do aumento e garantirá o mesmo efeito em toda turma do país. Não são fornecidos grupo de comparação ou critérios de amostragem. Qual avaliação respeita o alcance das informações?",
        "hint": "Diferencie a mudança observada da atribuição de causa exclusiva e da promessa de um efeito universal.",
        "solution": "A reconhece o resultado descrito, mas identifica duas extrapolações: causa exclusiva sem comparação suficiente e garantia universal sem sustentação para todas as turmas. B inventa um número mínimo fixo de participantes que resolveria automaticamente o método. C descarta o resultado porque a escola deve produzir piora, regra sem fundamento. D assume garantia nacional apenas porque houve aumento local. Não é necessário negar a mudança observada para apontar esses limites.",
        "options": [
          "O aumento relatado não basta para provar causa exclusiva ou garantir o mesmo efeito em todas as turmas do país.",
          "A causalidade e a garantia universal estariam automaticamente provadas se fossem treze turmas em vez de doze.",
          "O relato é necessariamente falso, pois qualquer oficina de leitura sempre reduz a média.",
          "O aumento local, por si só, garante que toda turma brasileira terá o mesmo resultado."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Barroco e Arcadismo",
    "objective": "Comparar contextos, temas e procedimentos do Barroco e do Arcadismo na produção colonial, relacionando recursos expressivos e convenções literárias sem usar traços isolados ou biografia como prova automática de sentido.",
    "prerequisites": [
      "Contexto geral da América portuguesa nos séculos XVII e XVIII",
      "Distinção entre autor, voz poética e personagem",
      "Noções de metáfora, oposição de ideias e convenção literária"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Barroco: tensões, linguagem e formas de intervenção",
        "explanation": "Barroco é uma categoria histórica e crítica aplicada a produções diversas, não um nome que todos os autores do século XVII usassem para se definir. Na América portuguesa, a produção seiscentista se relaciona à sociedade colonial escravista, à vida religiosa, ao mundo açucareiro e às hierarquias de poder; não cabe explicar todo esse período pela mineração que ganharia relevo mais tarde. Prosopopeia, de Bento Teixeira, publicada em 1601, costuma funcionar como marco didático da periodização, sem significar que toda escrita posterior pertença a uma única estética. Na poesia atribuída a Gregório de Matos, há produção amorosa, religiosa e satírica, com problemas de transmissão e atribuição manuscrita que recomendam cautela ao identificar a autoria de versos. Fugacidade, vaidade, desejo, culpa e salvação são temas recorrentes, sem excluir sátira e crítica de costumes. Antítese aproxima termos ou ideias contrastantes; paradoxo formula uma tensão aparentemente contraditória; metáfora aproxima sentidos por uma relação figurada. A ocorrência de uma dessas figuras não basta para datar um poema. Cultismo e conceptismo são distinções didáticas entre trabalho expressivo da linguagem e elaboração engenhosa de ideias e argumentos; podem coexistir e não opõem obrigatoriamente texto longo e texto curto. Na prosa de Antônio Vieira, sermões articulam referências religiosas, analogias e argumentação em situações de intervenção. Nem todo texto religioso repete apenas dogmas, e nem toda sátira representa uma posição democrática ou anticolonial moderna: é preciso ler seus alvos e critérios no contexto.",
        "steps": [
          "Localize o texto no contexto colonial, sem reduzir o século XVII à mineração.",
          "Identifique a voz, o tema e o alvo, sem atribuição de versos sem fonte.",
          "Explique a função da figura no trecho, além de nomeá-la.",
          "Compare elaboração verbal e argumentativa como procedimentos que podem coexistir."
        ],
        "example": "Verso autoral hipotético, sem atribuição a poeta histórico: Trago o dia nos olhos e a noite no peito. O contraste dia/noite e a formulação figurada constroem uma diferença entre aparência e experiência interior. Esse efeito pode ser discutido sem afirmar que uma única antítese prova autoria ou pertencimento exclusivo ao Barroco.",
        "pitfall": "Atribuir versos inventados a Gregório, localizar toda produção barroca na mineração ou identificar um período apenas pela presença de metáfora ou antítese."
      },
      {
        "level": "intermediate",
        "title": "Arcadismo: ideal pastoril, convenções e obras",
        "explanation": "O Arcadismo do século XVIII dialoga com modelos clássicos e propostas de moderação e clareza, em um contexto de debates iluministas e transformações políticas e culturais. A idealização do campo, o ambiente agradável e a figura do pastor são convenções literárias; não provam que o autor vivia de pastoreio nem que o espaço representado seja uma descrição fiel da vida rural. Locus amoenus indica um lugar idealmente agradável; fugere urbem remete ao afastamento da cidade; aurea mediocritas valoriza uma condição moderada e equilibrada, não mediocridade no sentido depreciativo atual. Carpe diem é convite a aproveitar o tempo presente e não pertence exclusivamente a essa escola, pois tem uma história anterior e aparece em contextos diferentes. A simplicidade pode ser um efeito de elaboração retórica sofisticada, e regularidade métrica também ocorre em outros períodos. Obras de Cláudio Manuel da Costa, de 1768, é um marco didático do Arcadismo no Brasil. Em Marília de Dirceu, cuja primeira edição é de 1792, Tomás Antônio Gonzaga desenvolve poesia amorosa com convenções pastoris e experiências que não se reduzem a uma única chave. Cartas Chilenas, tradicionalmente atribuídas a Gonzaga, são sátira política e não devem ser confundidas com uma declaração literal de todas as liras amorosas. Na épica, O Uraguai, de Basílio da Gama, publicado em 1769, e Caramuru, de Santa Rita Durão, de 1781, apresentam projetos e perspectivas distintos sobre a América e a colonização. Mencionar indígenas ou paisagens americanas não torna todo poema equivalente a uma defesa anticolonial contemporânea.",
        "steps": [
          "Distinga cenário pastoril convencional de documento da vida rural.",
          "Relacione os tópicos latinos aos sentidos no texto, sem exclusividade automática.",
          "Identifique obra e gênero sem transferir o sentido de uma para todas as outras.",
          "Compare perspectivas da produção colonial, sem igualar todos os projetos épicos."
        ],
        "example": "Trecho autoral hipotético: Deixo o ruído da praça e descanso à sombra, junto à fonte tranquila. O afastamento do espaço agitado e o refúgio campestre permitem discutir fugere urbem e locus amoenus. A descrição não prova, sozinha, que seu autor histórico fosse pastor, proprietário rural ou participante de uma conspiração.",
        "pitfall": "Interpretar o pastor como profissão comprovada do autor, traduzir aurea mediocritas como falta de talento ou presumir independência política em todo tema americano."
      },
      {
        "level": "advanced",
        "title": "Comparar textos sem apagar continuidades e limites",
        "explanation": "Barroco e Arcadismo ajudam a organizar repertórios, mas não são caixas sem sobreposição nem uma escala em que uma literatura mais simples supera obrigatoriamente outra. Desejo, passagem do tempo e formas clássicas podem aparecer nos dois contextos com funções distintas. Um soneto regular não é automaticamente árcade, e um poema de paisagem não deixa de conter tensões. Compare como o recurso participa da construção de sentido: oposição pode dramatizar conflito, enquanto equilíbrio ou cenário ideal podem produzir um efeito de moderação, sem que essas sejam as únicas possibilidades. Também é necessário distinguir o enunciador de um texto e sua pessoa biográfica. A participação de um autor em acontecimentos políticos pode ser contexto relevante, mas não transforma cada verso em código conspiratório. Para sustentar essa leitura, seriam necessárias marcas do texto e outras evidências. Da mesma forma, uma crítica de abuso de um governante não equivale necessariamente a recusa de toda ordem colonial ou da escravidão. A circulação manuscrita, o patrocínio, a censura e os públicos de leitura influenciam produção e transmissão, sem explicar mecanicamente cada escolha. Textos atuais podem reinterpretar essas obras, mas uma interpretação precisa separar o contexto colonial, a história editorial e a pergunta contemporânea. Quando os exemplos são criados para estudo, devem ser identificados como autorais hipotéticos: nenhum exercício precisa inventar uma citação para ilustrar um procedimento. A análise mais consistente reúne contexto, forma e sentido, mantendo limites do que se sabe e do que o trecho permite concluir.",
        "steps": [
          "Compare a função de recursos semelhantes em passagens diferentes.",
          "Evite decidir a escola apenas pela métrica, pela paisagem ou por uma figura.",
          "Use biografia e contexto como evidência pertinente, sem converter tudo em alegoria.",
          "Separe texto, transmissão e leitura atual, justificando cada inferência."
        ],
        "example": "Duas passagens autorais hipotéticas falam do tempo: uma contrapõe glória e ruína; outra convida ao descanso moderado diante da brevidade da vida. O tema comum não elimina diferenças de construção. Para comparar, é preciso examinar vocabulário, relações entre imagens e posição da voz, sem inventar autoria histórica.",
        "pitfall": "Ler toda lira de Gonzaga como mensagem conspiratória, usar um único traço para fechar a classificação ou tomar uma leitura atual como intenção histórica comprovada."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Trechos autorais hipotéticos: I — Entre a glória que procuro e a ruína que temo, minha voz se divide. II — Junto à fonte tranquila, o pastor prefere o descanso moderado ao tumulto da cidade. Qual comparação se sustenta nos elementos fornecidos, sem atribuir autoria histórica?",
        "hint": "No primeiro, examine as ideias contrapostas; no segundo, observe o cenário e o ideal de moderação, sem tratar esses recursos como exclusivos de um período.",
        "solution": "C identifica a tensão por oposição em I e a idealização pastoril e moderada em II. A inverte esses elementos. B transforma o cenário literário em prova biográfica. D inventa uma autoria não fornecida. A comparação pode dialogar com repertórios barrocos e árcades, mas os trechos são didáticos e não permitem atribuição a autores reais.",
        "options": [
          "I descreve apenas uma paisagem tranquila, e II organiza um conflito entre glória e ruína.",
          "II comprova que o autor trabalhava profissionalmente como pastor.",
          "I constrói tensão por oposição; II apresenta cenário pastoril idealizado e moderação.",
          "Os dois trechos foram necessariamente escritos por Gregório de Matos."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Em uma paráfrase didática autoral de aurea mediocritas, a voz poética valoriza uma vida suficiente e equilibrada, afastada tanto da ostentação quanto da ambição sem medida. Qual leitura corresponde ao tópico nesse contexto?",
        "hint": "A expressão se refere ao ideal de moderação; não use o sentido atual depreciativo de medíocre como falta de talento.",
        "solution": "A identifica moderação e equilíbrio. B aplica o sentido depreciativo de mediocridade sem considerar o tópico clássico. C afirma ostentação máxima, contrária ao enunciado. D transforma uma convenção literária em prova de igualdade material efetiva entre todos os habitantes da colônia, conclusão que o texto não sustenta.",
        "options": [
          "Valorização de uma condição moderada e equilibrada.",
          "Defesa da ausência de talento e de qualquer elaboração poética.",
          "Afirmação de que a felicidade exige riqueza e ostentação ilimitadas.",
          "Comprovação de que a sociedade colonial já oferecia igualdade material universal."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Um comentário autoral hipotético afirma: como Gonzaga esteve envolvido no processo da Inconfidência Mineira, toda imagem pastoril de Marília de Dirceu deve ser um código de conspiração. Qual avaliação distingue contexto biográfico e evidência interpretativa?",
        "hint": "Um acontecimento biográfico pode orientar perguntas, mas não determina automaticamente o sentido de cada passagem de uma obra.",
        "solution": "D reconhece a relevância do contexto e exige evidências para a interpretação de cada imagem. A transforma biografia em causa única e regra universal de leitura. B proíbe qualquer contextualização, exagero contrário. C conclui que um recurso pastoral elimina toda possibilidade de conteúdo político, o que também é uma regra automática injustificada.",
        "options": [
          "A biografia prova, sem exame do texto, que toda passagem tem exatamente esse sentido conspiratório.",
          "Nenhuma informação de contexto pode ter qualquer relevância para interpretar literatura.",
          "A presença de pastor e natureza torna impossível qualquer discussão de política em um texto.",
          "O contexto é relevante, mas não basta para atribuir sentido conspiratório a toda imagem sem outras evidências."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Coesão, coerência e progressão",
    "objective": "Revisar textos autorais articulando referentes, relações de sentido e desenvolvimento temático, distinguindo conectivos de coerência e escolhendo reescritas que preservem informações e limites argumentativos.",
    "prerequisites": [
      "Leitura de períodos e parágrafos",
      "Noções de pronome, elipse, repetição e conectivo",
      "Identificação de tema e afirmação defendida em texto argumentativo"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Referentes e ligações: escolher recursos pela função",
        "explanation": "Coesão compreende recursos linguísticos que articulam elementos do texto. Pronomes, elipses, repetição lexical, substituições e conectivos podem orientar relações, mas precisam de contexto para funcionar. Uma retomada deve permitir reconhecer a que se refere. Em uma frase com duas pessoas, sua pode indicar mais de um possuidor; repetir o nome relevante pode melhorar a clareza sem ser um defeito de estilo. Elipse é omissão de elemento recuperável: em A equipe analisou os dados e apresentou o relatório, o sujeito da segunda ação pode ser recuperado. Uma substituição lexical não é livre troca por qualquer palavra parecida: pesquisadora, equipe e instituição podem apontar para participantes diferentes. Repetição de um termo central também pode manter precisão e unidade; não é obrigatório eliminar toda repetição com sinônimos. Conectivos indicam relações como adição, contraste, causa, condição e conclusão. Portanto não cria uma conclusão válida apenas por estar entre duas frases. Embora introduz concessão, reconhecendo um conteúdo que não impede o outro; porque apresenta explicação ou causa conforme o uso; se pode estabelecer condição. O recurso escolhido precisa expressar a relação efetivamente construída, e não apenas parecer sofisticado. Textos podem produzir relações compreensíveis de forma implícita; não há exigência de um conectivo no início de cada período ou parágrafo. Na revisão, pergunte qual referente e qual relação o leitor consegue recuperar, em vez de contar palavras de ligação.",
        "steps": [
          "Identifique o referente que cada pronome ou expressão deve recuperar.",
          "Troque uma retomada ambígua por nomeação explícita quando necessário.",
          "Verifique se a substituição conserva o participante e o sentido.",
          "Escolha ou retire conectivos pela relação que expressam no trecho."
        ],
        "example": "Revisão autoral hipotética: A comissão entregou o parecer à direção. Ela solicitou ajustes. Se quem solicitou foi a direção, a retomada pode ficar mais precisa como A direção solicitou ajustes. Repetir esse nome evita a ambiguidade que a tentativa de variar palavras havia criado.",
        "pitfall": "Eliminar toda repetição sem avaliar o referente, usar sinônimos que mudam o participante ou inserir portanto como se ele provasse a conclusão."
      },
      {
        "level": "intermediate",
        "title": "Coerência e avanço temático em parágrafos",
        "explanation": "Coerência envolve a construção de sentido entre partes, contexto e conhecimentos pertinentes; não se resume à superfície de pronomes e conectivos. Uma sequência pode ter ligações formais e ainda concluir algo que suas premissas não sustentam. Contradições devem ser avaliadas com seus parâmetros: afirmar horários diferentes para o mesmo serviço, no mesmo dia e condição, difere de relatar vozes opostas ou mudança de horário em outra data. Progressão significa manter vínculos e acrescentar informação relevante; não exige trocar totalmente de assunto a cada parágrafo. Em uma organização de tema constante, o mesmo tópico recebe informações novas. No encadeamento linear, algo apresentado como novo pode tornar-se ponto de partida do enunciado seguinte. Na derivação, um tópico geral se desdobra em aspectos relacionados. Esses padrões são recursos de análise e planejamento, não moldes obrigatórios para todo gênero. Um parágrafo pode desenvolver uma ideia por explicação, exemplo, comparação ou consequência, desde que a relação seja sustentada. A simples reformulação da mesma frase pode esclarecer, mas, se ocupar todo o desenvolvimento sem acrescentar razões, limita o avanço. A tese e a frase-tópico não precisam ocupar uma posição universal: apresentá-las cedo pode ajudar em certos projetos, mas é preciso analisar a organização escolhida. Planeje o que cada parte faz para o argumento e como retoma o que já foi discutido.",
        "steps": [
          "Resuma a função de cada parágrafo no projeto de texto.",
          "Diferencie retomada com informação nova de repetição que não desenvolve.",
          "Verifique parâmetros antes de afirmar contradição.",
          "Articule subtemas e exemplos ao ponto em discussão, sem ordem universal obrigatória."
        ],
        "example": "Sequência autoral hipotética: A praça recebeu uma biblioteca. A biblioteca oferece empréstimos e encontros. Os encontros reúnem leitores de bairros diferentes. Cada informação retomada serve de ponto de partida para um acréscimo, sem trocar abruptamente o tema nem repetir apenas a primeira frase.",
        "pitfall": "Chamar qualquer mudança de assunto de progressão, proibir retomadas de tema ou exigir tese e frase-tópico sempre na mesma posição."
      },
      {
        "level": "advanced",
        "title": "Revisão global, concessão e limites de conclusão",
        "explanation": "Uma revisão global começa pelo que o texto procura sustentar e pelo que cada parte efetivamente fornece. Confira se o argumento seleciona informações pertinentes, explica relações e preserva o alcance das evidências. Ao resumir ou concluir, não transforme possibilidade em garantia nem associação em causa exclusiva. Uma conclusão pode sintetizar, responder ao problema ou explicitar implicações; não precisa sempre subir a um nível abstrato, projetar o futuro ou repetir integralmente a introdução. Também não é obrigatório inserir um contra-argumento em todo texto: quando ele é pertinente ao projeto, deve ser apresentado com fidelidade. Conceder um ponto não exige abandoná-lo imediatamente nem inventar uma evidência superior para refutá-lo. É possível reconhecer um limite e ajustar a tese. Em Embora a medida amplie o horário, o acesso ainda depende de transporte, a concessão reconhece um benefício sem apagar a dificuldade. Pontuação e escolhas de ligação ajudam a tornar relações legíveis, mas não corrigem ausência de sustentação. Expressões como nesse sentido não são operadores de nível superior por natureza; sua utilidade depende do que retomam. Na revisão local, verifique referentes, paralelismo e precisão; na global, observe unidade e desenvolvimento. Uma boa reescrita preserva as informações que o problema exige e corrige a relação ou o alcance inadequado, sem acrescentar estatísticas, leis ou garantias não fornecidas. O objetivo é conduzir o leitor por um percurso compreensível, com escolhas justificadas pelo texto.",
        "steps": [
          "Reconstrua a tese e confira a sustentação oferecida por cada parte.",
          "Ajuste o alcance da conclusão aos dados e condições disponíveis.",
          "Use concessão ou contraponto quando contribuírem para o projeto, preservando as posições.",
          "Revise referentes e ligações sem acrescentar fatos para fabricar coerência."
        ],
        "example": "Reescrita autoral hipotética: As oficinas são gratuitas; logo, qualquer pessoa consegue participar. Revisão: A gratuidade reduz uma barreira, mas horários e condições de acesso ainda precisam ser considerados. A nova versão preserva o benefício e retira a garantia excessiva, sem afirmar um resultado não observado.",
        "pitfall": "Usar fórmulas de conclusão ou conectivos como enfeite, exigir refutação em qualquer concessão ou fabricar dados para justificar um salto argumentativo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Texto autoral hipotético: Lara avisou Célia de que sua oficina mudaria de sala. Sabe-se que a oficina é de Lara. Qual reescrita elimina a ambiguidade do possessivo sem trocar as pessoas ou o conteúdo do aviso?",
        "hint": "A informação a preservar é quem avisou quem e de quem é a oficina; nomear o possuidor pode ser mais claro que manter sua.",
        "solution": "B explicita de Lara e conserva Lara como emissora do aviso e Célia como destinatária. A atribui a oficina a Célia. C troca quem avisou quem. D mantém o possessivo ambíguo e não resolve o problema pedido. Não há proibição de repetir o nome quando isso esclarece a referência.",
        "options": [
          "Lara avisou Célia de que a oficina de Célia mudaria de sala.",
          "Lara avisou Célia de que a oficina de Lara mudaria de sala.",
          "Célia avisou Lara de que a oficina de Lara mudaria de sala.",
          "Lara avisou Célia de que sua oficina mudaria de sala."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Início de parágrafo autoral hipotético: A biblioteca passou a abrir aos sábados para ampliar o acesso. Qual continuação acrescenta especificamente uma limitação de acesso relacionada à medida, mantendo o foco temático?",
        "hint": "A questão pede um acréscimo sobre uma condição que ainda dificulta usar o serviço, e não apenas repetir que a abertura amplia acesso.",
        "solution": "D acrescenta a limitação do transporte sem abandonar o tópico de acesso à biblioteca. A apenas reformula a ampliação anunciada, sem a limitação solicitada. B muda para um evento sem relação fornecida. C afirma eliminação de todas as barreiras, contrariando a função pedida e sem evidência no trecho. A escolha decorre da relação solicitada, não de uma regra de que todo parágrafo precise conter contraste.",
        "options": [
          "Abrir aos sábados amplia o acesso porque permite acesso no sábado.",
          "Em outra cidade, uma equipe venceu um campeonato sem relação com a biblioteca.",
          "Por isso, todas as barreiras de participação desapareceram automaticamente.",
          "Entretanto, a falta de transporte nesse dia ainda dificulta a chegada de parte dos usuários."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Texto autoral hipotético: A equipe abriu 40 vagas e recebeu 60 inscrições. Portanto, todas as inscrições serão atendidas nessa oferta de 40 vagas. Sem dados sobre ampliação de vagas ou desistências, qual revisão preserva as quantidades e corrige a conclusão?",
        "hint": "Compare demanda e capacidade na oferta informada. O conectivo conclusivo não resolve a diferença entre 60 inscrições e 40 vagas.",
        "solution": "A preserva 40 vagas e 60 inscrições, reconhecendo que a demanda excede a oferta e que os dados não garantem atendimento de todos. B troca 40 por 60 vagas, inventando ampliação. C altera o número de inscrições e apaga a diferença. D mantém a conclusão excessiva usando outro conectivo, sem corrigir a relação entre informação e conclusão.",
        "options": [
          "A oferta de 40 vagas é menor que as 60 inscrições; esses dados não permitem garantir atendimento de todos nessa oferta.",
          "A equipe abriu 60 vagas para 60 inscrições, portanto todos serão atendidos.",
          "A equipe recebeu apenas 40 inscrições para 40 vagas, sem diferença entre demanda e oferta.",
          "A equipe abriu 40 vagas e recebeu 60 inscrições; assim, todos serão necessariamente atendidos nessa oferta."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Gêneros e textos multimodais",
    "objective": "Interpretar finalidade, público e relações entre palavras, composição e dados em gêneros em inglês, fundamentando inferências e distinguindo destaque visual de evidência.",
    "prerequisites": [
      "Leitura básica de enunciados em inglês e modais",
      "Noções de título, legenda, imagem e finalidade comunicativa",
      "Porcentagens e leitura de escalas com dados fornecidos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Propósito, público e modos de construção de sentido",
        "explanation": "Um texto pode combinar palavras, imagens, organização espacial, sons e gestos. A leitura multimodal observa como esses recursos participam do sentido em vez de tratar tudo que não é palavra como decoração. Um aviso impresso, um anúncio, uma tirinha e um vídeo podem mobilizar combinações diferentes; multimodalidade não é exclusiva da internet. Em inglês, identifique propósito e público: um convite pode usar Join us, um aviso pode instruir Keep the gate closed e um anúncio pode tentar persuadir com uma promessa. A mesma fotografia pode receber sentidos diferentes conforme título e legenda. Uma imagem de uma praça cheia, acompanhada de Welcome to our meeting, apresenta uma situação; com No room for anyone else, enfatiza um limite. Essas formulações autorais não provam a ocorrência real do evento. Texto e imagem podem complementar, repetir parcialmente ou produzir contraste; não precisam sempre entrar em conflito nem formar ironia. Observe o que cada recurso efetivamente permite concluir. Cor, tamanho e posição podem criar destaque, mas seus significados dependem do contexto cultural e do conjunto. Uma palavra em vermelho não prova urgência verdadeira ou fraude, e uma fotografia atraente não demonstra que a promessa publicitária foi cumprida. Quando o material é apresentado por uma descrição acessível, use as informações fornecidas e não invente elementos fora dela.",
        "steps": [
          "Identifique propósito, público e recursos efetivamente apresentados.",
          "Localize imperativos e expressões de convite ou instrução em inglês.",
          "Relacione palavras e descrição visual sem supor oposição obrigatória.",
          "Separe representação e destaque de prova factual do que foi anunciado."
        ],
        "example": "Descrição autoral hipotética: um cartaz apresenta um livro aberto ao lado de Open a new chapter: join our reading group. A imagem reforça o tema de leitura e a expressão new chapter também sugere uma nova experiência. Não é necessário concluir que se trata de uma página literal nem identificar um livro real ausente da descrição.",
        "pitfall": "Tratar fotografia como prova automática de uma promessa, supor que toda relação entre palavra e imagem é irônica ou inferir elemento visual não fornecido."
      },
      {
        "level": "intermediate",
        "title": "Gêneros, legendas e dados com escopo definido",
        "explanation": "Gênero se relaciona a práticas e finalidades de comunicação; formato e meio dizem respeito a formas de apresentação e circulação, com fronteiras que podem se sobrepor. Um anúncio pode circular em cartaz ou vídeo, e um carrossel pode servir a divulgação, venda ou relato. Não basta dizer que é um post para saber seu objetivo. Memes podem reutilizar referências e construir humor ou comentários, sem depender sempre de um único modelo visual. Infográficos e painéis organizam dados com títulos, legendas, ícones e gráficos; não são corretos apenas por parecerem técnicos. Ao ler números em inglês, confira count, percentage, sample e respondents: contagem, porcentagem, amostra e respondentes. Leia eixo, unidade e período antes de comparar. A legenda pode limitar um título amplo com termos como preliminary, voluntary ou only this group. Majority significa mais da metade; não equivale a all. A frase 60% of respondents preferred mornings descreve uma preferência dos respondentes, sem demonstrar causa de resultados ou representar necessariamente toda população. A presença de referência permite procurar uma fonte, mas DOI, logotipo ou aparência profissional não garantem por si que o dado foi descrito fielmente. No audiovisual, som, montagem e legendas também importam; uma transcrição parcial não permite reconstruir com certeza toda imagem ou música omitida. Compare o que está disponível e explicite limites da inferência.",
        "steps": [
          "Diferencie propósito comunicativo e forma de circulação.",
          "Leia título, números, unidades e qualificações da legenda em conjunto.",
          "Calcule proporções com a base informada e preserve o grupo observado.",
          "Verifique atribuição e acesso à fonte sem tratar um símbolo como certificado de verdade."
        ],
        "example": "Painel autoral hipotético: Volunteers at one school; 12 of 20 respondents chose the afternoon; caption: Optional survey, one class only. O valor é 60% dos respondentes dessa turma. A legenda limita o alcance: não se pode concluir que 60% de todas as escolas ou de todos os estudantes prefiram a tarde.",
        "pitfall": "Confundir maioria com totalidade, número de respondentes com população inteira ou legenda qualificadora com um detalhe que pode ser ignorado."
      },
      {
        "level": "advanced",
        "title": "Enquadramento e avaliação crítica de gráficos e mensagens",
        "explanation": "A leitura crítica confronta afirmações e evidências sem presumir que toda persuasão seja engano. Um título pode destacar uma interpretação, enquanto escala, recorte e período mostram o alcance dos dados. Em gráfico de barras, a extensão da barra representa magnitude; iniciar a base acima de zero pode exagerar proporções visuais. Isso não torna a intenção do autor automaticamente conhecida, mas exige cuidado na comparação. Outros gráficos têm convenções próprias: não se impõe a mesma regra de leitura a qualquer linha, mapa ou diagrama. Verifique os valores em vez de medir apenas a aparência. Se uma contagem vai de 50 para 55, o aumento é 5 em 50, ou 10%, e não duplicação. Em inglês, doubled significa que o valor final é duas vezes o inicial. Uma fotografia pode criar proximidade ou emoção e ainda não comprovar a origem ou causa de um problema. Antes de chamar um conteúdo de desinformação deliberada, é preciso mais que cor forte ou uma legenda dramática; intenção, falsidade, contexto e circulação são questões distintas. Compare autoria identificável, possibilidade de conferir a fonte, método e consistência entre alegação e dados. Também separe publicidade, opinião e descrição de resultados. Uma resposta bem fundamentada pode reconhecer que um texto chama atenção de forma eficaz e apontar, ao mesmo tempo, que seus números não sustentam a conclusão. A análise deve descrever o recurso, explicar seu possível efeito e indicar a evidência relevante, sem inventar dados de uma imagem não mostrada.",
        "steps": [
          "Compare a frase do título com os valores e a base de cálculo.",
          "Identifique o tipo de gráfico e o efeito de escala pertinente a ele.",
          "Separe efeito persuasivo, verdade da alegação e intenção do produtor.",
          "Fundamente a avaliação em elementos fornecidos e fontes conferíveis."
        ],
        "example": "Gráfico de barras autoral hipotético: Attendance goes from 50 to 55; vertical axis starts at 49. A diferença visual pode parecer grande, mas a contagem aumentou 10%. A escala recortada ajuda a explicar o efeito visual e não basta para concluir que o produtor tinha intenção deliberada de enganar.",
        "pitfall": "Inferir confiabilidade pela aparência, chamar toda emoção de falsidade ou aceitar doubled sem conferir se o valor final é o dobro do inicial."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Accessible description of an original hypothetical poster: a bicycle is parked beside a library. Large text says Leave the car at home. Ride with us on Sunday. Smaller text says Meet by the library at 9 a.m. Which interpretation is supported by the words and the described image?",
        "hint": "Relacione os imperativos Leave e Ride ao convite, e use a legenda para lugar e horário; não acrescente preço ou venda que não aparecem.",
        "solution": "B reconhece um convite para passeio de bicicleta no domingo, com encontro junto à biblioteca às 9h. A inventa venda de automóveis. C troca domingo por todos os dias e altera o horário. D ignora o convite e trata a fotografia como única informação. A imagem reforça o tema; não comprova a realização do evento.",
        "options": [
          "The poster advertises cars for sale at the library.",
          "The poster invites people to cycle on Sunday and meet by the library at 9 a.m.",
          "The poster requires everyone to cycle every day at 9 p.m.",
          "The poster contains no invitation because only the picture can communicate meaning."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Original hypothetical infographic, fully described: title Meeting preferences; data Eighteen of thirty respondents preferred morning meetings; caption Voluntary survey in one club, not a population estimate. Which inference respects both the data and the caption?",
        "hint": "Dezoito de trinta correspondem a 60%; preserve a referência aos respondentes de um clube, sem converter preferência em causa de desempenho.",
        "solution": "D calcula 18/30 = 60%, uma maioria dos respondentes daquele clube, e mantém o limite declarado. A generaliza para todos. B inverte numerador e denominador e supera 100%. C inventa um efeito causal da preferência sobre o desempenho, que o painel não mediu.",
        "options": [
          "All people everywhere prefer morning meetings.",
          "Thirty of eighteen respondents, or more than 100%, preferred mornings.",
          "Morning meetings caused higher performance for 60% of all students.",
          "A majority of the thirty respondents preferred mornings, but the result is not a population estimate."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Accessible description of an original hypothetical bar chart: attendance is 40 in Week 1 and 44 in Week 2; the vertical axis starts at 38. Its headline says Participation doubled. Which assessment follows from the supplied values and scale?",
        "hint": "Calcule (44−40)/40 e compare doubled com a duplicação real. A escala de barras pode afetar a aparência, sem mudar os valores nem provar intenção.",
        "solution": "C calcula aumento de 4/40 = 10%, com razão final/inicial 1,1, e não 2. O eixo iniciado em 38 pode ampliar a diferença percebida entre as barras. A confunde aumento de 4 com 100%. B toma a altura visual como substituta dos valores. D inventa que uma escala alterada muda a contagem real. A avaliação não exige atribuir intenção ao autor.",
        "options": [
          "Attendance rose by 100% because four more people attended.",
          "The headline is proved solely because the second bar looks much taller.",
          "Attendance rose by 10%; the truncated bar axis can magnify the visual difference, but the data do not show doubling.",
          "Starting the axis at 38 changes the real attendance from 44 to 80."
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Diversidade cultural hispano-americana",
    "objective": "Interpretar textos em espanhol sobre diversidade cultural hispano-americana, reconhecer variações linguísticas e analisar pertencimentos, contato e participação sem estereótipos ou generalizações nacionais.",
    "prerequisites": [
      "Leitura de espanhol e uso de pistas contextuais",
      "Noções de língua, cultura e identidade",
      "Distinção entre exemplo local e afirmação sobre toda uma população"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Um recorte cultural com pluralidade interna",
        "explanation": "Hispano-América e América Latina não são termos equivalentes. No uso linguístico-cultural usual, o primeiro recorte se relaciona à América de língua espanhola; o segundo é mais amplo e inclui, por exemplo, o Brasil de língua portuguesa. Mesmo onde o espanhol é amplamente usado, a vida cultural não se reduz a uma língua, uma origem ou um costume. Povos indígenas, populações afrodescendentes, diferentes processos migratórios, desigualdades e histórias locais participam de formações culturais variadas. Nenhum país tem apenas uma voz ou uma prática que represente todos os moradores. Festas, literatura, música, artes visuais, experiências urbanas e rurais podem expressar pertencimentos e disputas. Aprender sobre diversidade exige ler quem fala e em que contexto, em vez de transformar uma celebração ou comida em essência nacional. Um texto pode valorizar uma tradição e também defender sua transformação. Em um enunciado autoral como Nuestra fiesta cambia porque también cambia el barrio, a palavra también relaciona mudança da festa e do bairro: não afirma perda automática de cultura. Compare termos de alcance como algunas comunidades, muchas personas e todo el país. Uma observação sobre um grupo delimitado não descreve necessariamente todos os habitantes. Identifique ainda de quem é a perspectiva: voz de um narrador, entrevista ou instituição não equivale à opinião de toda sociedade. A leitura cultural fundamentada reconhece diferenças internas e conexões com outros lugares, sem exigir que pessoas mantenham práticas imutáveis para serem consideradas autênticas.",
        "steps": [
          "Identifique o recorte e evite usar Hispano-América e América Latina como sinônimos exatos.",
          "Localize quem fala, de qual grupo e em qual situação.",
          "Preserve quantificadores e limites geográficos das afirmações.",
          "Compare tradição e mudança sem presumir perda automática de pertencimento."
        ],
        "example": "Texto autoral hipotético: En nuestro barrio, unas familias conservan la música de sus abuelos y otras incorporan nuevos ritmos; organizamos juntos el encuentro. O trecho descreve variação dentro de um bairro e ação compartilhada. Não afirma que todo um país tenha uma única música nem que incorporar ritmos elimine memória.",
        "pitfall": "Tratar uma prática como essência de todo país, confundir os dois recortes continentais ou presumir que mudança cultural prova ausência de autenticidade."
      },
      {
        "level": "intermediate",
        "title": "Variação do espanhol e leitura contextual",
        "explanation": "O espanhol apresenta variações de pronúncia, vocabulário e formas de tratamento. Uma variedade não é linguisticamente inferior apenas por diferir da referência usada em outra região. O seseo, geral na Hispano-América e aceito nas normas cultas correspondentes, realiza c diante de e/i e z com o som associado a s; assim, casa e caza podem ter a mesma pronúncia, embora a escrita e os significados permaneçam diferentes. Não é correto descrever ceceo como padrão geral do Caribe nem deduzir um sistema inteiro de pronúncia ouvindo apenas uma palavra. O voseo americano pode envolver vos e formas verbais como vos tenés ou vos sabés, com distribuição e combinações regionais; não se resume a um hábito de um só país nem torna todos os falantes de um território iguais. Tú tienes exemplifica outra forma de tratamento, sem estabelecer superioridade automática. A escolha entre tratamentos e registros depende também de relações sociais e situação. No vocabulário, guagua pode designar ônibus em algumas regiões e bebê em outras, entre outros sentidos registrados. O contexto precisa decidir: bilhete, parada e trajeto favorecem a leitura de transporte, enquanto canciones de cuna pode favorecer bebê. Uma palavra isolada não comprova nacionalidade, etnia ou intenção do falante. Consulte a acepção e as marcas de uso em dicionários pertinentes, mantendo abertura para variação interna e mudança. Para compreender um texto, relacione pronome, verbo, léxico e situação em vez de decorar uma lista rígida que trate países como blocos homogêneos.",
        "steps": [
          "Reconheça variação como recurso de comunidades e contextos, sem hierarquia automática.",
          "Distinga som, grafia e significado no seseo.",
          "Observe tratamentos e formas verbais sem transformar um traço em passaporte nacional.",
          "Escolha a acepção pelo contexto e confira marcas de uso em fontes linguísticas."
        ],
        "example": "Diálogo autoral hipotético: ¿Vos tenés el programa del festival? — Sí, y también el mapa. Vos tenés é uma construção voseante possível; a forma, sozinha, não permite identificar com certeza a cidade ou nacionalidade dos participantes. A resposta trata do programa e do mapa, sem informar essas identidades.",
        "pitfall": "Chamar seseo de erro, atribuir ceceo a todo o Caribe ou usar um único vocábulo como prova da nacionalidade de alguém."
      },
      {
        "level": "advanced",
        "title": "Contato de línguas, direitos e participação cultural",
        "explanation": "A diversidade hispano-americana inclui línguas indígenas vivas e comunidades multilíngues, não apenas diferenças regionais do espanhol. Nomes abrangentes podem reunir variantes e autodenominações diversas; por isso catálogos como o do INALI, no México, distinguem recortes e referências das comunidades. Não se deve apresentar qualquer frase inventada como exemplo autêntico de uma língua que não foi conferida. Contato pode envolver empréstimos lexicais, alternância de línguas e mudanças em variedades, mas classificar um caso requer observar contexto e padrões, não supor que uma palavra determine uma gramática inteira. Usar mais de uma língua não demonstra deficiência intelectual ou incapacidade de aprender. Transmissão entre gerações, materiais, espaços de uso e reconhecimento social podem influenciar continuidade de uma língua. Uma proposta de educação bilíngue deve considerar participação e necessidades dos falantes, sem presumir uma solução igual para todas as comunidades. A análise cultural também precisa distinguir visibilidade e poder de decisão: exibir imagens de um povo não comprova que ele participou da curadoria ou concordou com o uso. A defesa da diversidade se articula a direitos humanos; não exige congelar costumes nem aprovar qualquer violência como tradição. Em textos em espanhol, conectivos e negações delimitam posições: aprender español no significa abandonar nuestra lengua rejeita uma equivalência entre aprender uma língua e renunciar a outra. Isso não prova que a preservação esteja garantida; descreve a posição defendida. Compare o enunciado, as condições concretas e o alcance de cada inferência.",
        "steps": [
          "Reconheça línguas e autodenominações sem inventar dados ou exemplos gramaticais.",
          "Observe contexto antes de classificar empréstimo ou alternância linguística.",
          "Diferencie presença simbólica e participação nas decisões.",
          "Leia negações e limites para separar posição defendida e resultado garantido."
        ],
        "example": "Texto autoral hipotético: Queremos publicar el relato en ambas lenguas. Para hacerlo, invitaremos a las personas mayores y a los jóvenes a revisar la versión. O texto apresenta um projeto participativo e bilíngue. Não garante que todas as divergências foram resolvidas ou que a transmissão da língua esteja assegurada por uma publicação.",
        "pitfall": "Inventar uma frase quéchua e chamá-la de espanhol de contato, considerar bilinguismo deficiência ou tratar tradução isolada como garantia de continuidade cultural."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Texto autoral hipotético: En nuestra ciudad no existe una sola manera de celebrar. Algunas familias mantienen prácticas antiguas; otras las transforman y muchas combinan referencias. ¿Qué interpretación respeta el alcance del texto?",
        "hint": "Observe no existe una sola, algunas e muchas; o trecho fala de diversidade interna, sem afirmar que todos seguem o mesmo padrão.",
        "solution": "C reconhece maneiras diversas de celebrar na cidade. A contradiz a negação de uma única maneira. B amplia o caso local para todos os países, sem base. D identifica transformação com desaparecimento automático de cultura, relação que o trecho não afirma. As marcas de quantificação impedem a leitura homogênea.",
        "options": [
          "Todas las familias celebran exactamente de la misma manera.",
          "El texto describe necesariamente las costumbres de todos los países americanos.",
          "En la ciudad conviven prácticas distintas, conservadas, transformadas o combinadas.",
          "Cualquier transformación elimina automáticamente la cultura de la comunidad."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Diálogo autoral hipotético: La guagua sale de esta parada a las ocho. Compra el billete antes de subir; el trayecto hasta el centro dura veinte minutos. En este contexto, ¿qué sentido de guagua está mejor sustentado?",
        "hint": "Parada, billete, subir e trayecto se articulam ao campo do transporte; escolha o sentido pelo contexto, não por uma nacionalidade presumida.",
        "solution": "A é a acepção de veículo de transporte coletivo, sustentada por parada, bilhete e trajeto. B é outro sentido regional registrado, mas não corresponde às ações e objetos do diálogo. C e D não atendem ao campo semântico e à situação apresentada. O trecho não permite concluir com certeza qual é o país dos falantes.",
        "options": [
          "Un vehículo de transporte colectivo.",
          "Un bebé que escucha canciones de cuna.",
          "Un instrumento de cuerda usado en un concierto.",
          "Una montaña que separa dos regiones."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Texto autoral hipotético: Aprender español no significa abandonar nuestra lengua. Queremos ampliar oportunidades y mantener la transmisión a los niños; para ello necesitamos materiales y participación de la comunidad. ¿Qué análisis recoge la posición y sus límites?",
        "hint": "Relacione a negação da equivalência com os objetivos e condições declaradas; não transforme necessidade de apoio em garantia de resultado.",
        "solution": "D reconhece a busca de oportunidades e continuidade da língua, associada a materiais e participação. A inverte a negação e faz do espanhol abandono obrigatório. B elimina o apoio que o texto declara necessário. C atribui um resultado universal já garantido a uma posição e a um projeto, sem evidência. O trecho sustenta intenção e condições, não previsão certa.",
        "options": [
          "El texto afirma que aprender español obliga a abandonar la otra lengua.",
          "El texto sostiene que los materiales y la participación no tienen importancia.",
          "La declaración garantiza por sí sola que todas las lenguas serán transmitidas para siempre.",
          "El texto busca compatibilizar nuevas oportunidades y transmisión de la lengua, con apoyo material y participación."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Grandezas, unidades e análise dimensional",
    "objective": "Expressar grandezas e conversões com unidades coerentes, verificar homogeneidade dimensional e construir relações e grupos adimensionais reconhecendo o que a análise não determina.",
    "prerequisites": [
      "Álgebra, potências e raízes",
      "Proporções e notação científica",
      "Noção de medida e operações com unidades"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Grandezas, unidades e fatores de conversão",
        "explanation": "Uma medida de grandeza é expressa por um valor numérico associado a uma unidade. Comprimento é uma grandeza; metro é uma unidade; 3 é um valor numérico possível em uma medida como 3 m. Trocar a unidade muda o número que expressa a medida, preservando a grandeza. O SI tem sete unidades de base: metro (m), quilograma (kg), segundo (s), ampere (A), kelvin (K), mol (mol) e candela (cd), associadas a comprimento, massa, tempo, corrente elétrica, temperatura termodinâmica, quantidade de substância e intensidade luminosa. Unidades derivadas combinam essas bases: velocidade em m/s, aceleração em m/s², força em kg·m/s², chamada newton (N), e energia em kg·m²/s², chamada joule (J). Grandeza, unidade e dimensão não são sinônimos. Prefixos como quilo (10³), centi (10⁻²), mili (10⁻³) e micro (10⁻⁶) indicam fatores, e o símbolo distingue maiúsculas de minúsculas. Símbolos de unidade não recebem plural nem ponto de abreviação. Na conversão, use fatores equivalentes a um: 1 km = 1000 m e 1 h = 3600 s. Se a unidade aparece elevada a uma potência, o fator também recebe essa potência: 1 cm² = 10⁻⁴ m² e 1 cm³ = 10⁻⁶ m³. Para temperatura, a escala exige atenção: 20 °C corresponde a 293,15 K, enquanto uma diferença de 20 °C tem o mesmo valor numérico de 20 K. A conversão entre valores de temperatura não é simples multiplicação de prefixo.",
        "steps": [
          "Identifique grandeza, unidade inicial e unidade solicitada.",
          "Multiplique por fatores equivalentes, cancelando unidades sem apagar potências.",
          "Eleve o fator quando converter áreas ou volumes.",
          "Diferencie valor de temperatura e diferença de temperatura."
        ],
        "example": "Modelo de conversão: 2,5 cm³ correspondem a 2,5×(10⁻² m)³ = 2,5×10⁻⁶ m³. Aplicar apenas 10⁻² daria uma conversão de comprimento, incompatível com o volume. O valor pode também ser escrito como 0,0000025 m³, mantendo a mesma grandeza.",
        "pitfall": "Converter cm² como se fosse cm, confundir massa e força ou somar 273,15 a uma diferença de temperaturas em vez de ao valor Celsius correspondente."
      },
      {
        "level": "intermediate",
        "title": "Dimensão, homogeneidade e limites da verificação",
        "explanation": "A dimensão descreve a dependência de uma grandeza em relação às grandezas de base. Usaremos M para massa, L para comprimento e T para tempo nas relações mecânicas. A velocidade tem dimensão LT⁻¹; aceleração, LT⁻²; força, MLT⁻²; energia, ML²T⁻². Pressão é força por área e tem dimensão ML⁻¹T⁻², cuja unidade coerente é o pascal, Pa = N/m². Dimensões obedecem às regras de expoentes: multiplicar soma expoentes e dividir os subtrai. Em uma equação física homogênea, os termos somados e os dois lados da igualdade têm dimensões compatíveis. Isso permite detectar, por exemplo, uma soma indevida entre velocidade e comprimento. Constantes numéricas puras, como 2 ou π, não alteram dimensões, mas um coeficiente físico pode ter dimensão: na lei F = kx, k tem dimensão MT⁻². Homogeneidade é condição de compatibilidade, não prova suficiente de uma lei. Tanto mv² quanto mv²/2 têm dimensão de energia; a análise sozinha não escolhe o coeficiente correto da energia cinética clássica. Grandezas distintas também podem ter a mesma dimensão, como energia e momento de uma força, sem serem a mesma coisa. Em funções como seno ou exponencial, o argumento deve ser adimensional no uso físico correspondente; a notação e o significado da variável precisam ser conhecidos. Confira sempre as unidades do coeficiente e as hipóteses do modelo antes de substituir números.",
        "steps": [
          "Escreva cada dimensão como potências das bases escolhidas.",
          "Some ou subtraia expoentes ao multiplicar ou dividir grandezas.",
          "Compare termos de soma e lados da igualdade.",
          "Use o resultado para detectar incompatibilidade, sem concluir validade física completa."
        ],
        "example": "Na expressão s = v0t + at², v0t tem dimensão LT⁻¹×T = L, e at² tem LT⁻²×T² = L. A equação é homogênea. Isso não prova que o coeficiente do segundo termo seja correto para um modelo de aceleração constante: dimensões não distinguem at² de at²/2.",
        "pitfall": "Dizer que mesma dimensão prova mesma grandeza ou lei correta, ou tratar todo coeficiente escrito por uma letra como número adimensional."
      },
      {
        "level": "advanced",
        "title": "Deduzir potências e formar grupos adimensionais",
        "explanation": "A análise pode restringir a forma de uma relação quando as variáveis e hipóteses são explicitadas. Suponha que um período τ dependa apenas da massa m e de uma constante elástica k de dimensão MT⁻², na forma τ = C m^a k^b, com C adimensional. O lado direito tem dimensão M^(a+b) T^(−2b). Igualar a T exige a+b = 0 e −2b = 1; portanto b = −1/2 e a = 1/2, dando τ = C√(m/k). A análise não revela C = 2π: esse valor vem da dinâmica do oscilador ideal, não das dimensões. Se houver outras variáveis relevantes, como amortecimento, a hipótese inicial precisa ser revista. Grupos adimensionais são combinações com expoentes finais nulos. No número de Reynolds, Re = ρvL/μ, densidade tem ML⁻³, velocidade LT⁻¹, comprimento L e viscosidade dinâmica ML⁻¹T⁻¹. Numerador e denominador têm a mesma dimensão; Re é de dimensão um. Comparar grupos pode ajudar a estudar semelhança entre sistemas, mas não prova que todo modelo represente o fenômeno real ou que um único valor determine o regime em qualquer geometria. A escolha de variáveis e a comparação com dados continuam essenciais. Mudar unidades não é a mesma coisa que mudar fisicamente o tamanho de um sistema: a coerência dimensional preserva a forma de uma relação na conversão, enquanto uma mudança física pode alterar parâmetros e hipóteses. Ao deduzir potências ou comparar números adimensionais, registre o que foi assumido e o que ainda depende de teoria ou experiência.",
        "steps": [
          "Liste as variáveis supostas relevantes e suas dimensões.",
          "Expresse a relação por potências e iguale expoentes de cada base.",
          "Separe a dependência dimensional de constantes e funções ainda desconhecidas.",
          "Forme grupos com expoentes nulos e avalie limites da semelhança física."
        ],
        "example": "Modelo hipotético de período τ dependente só de comprimento l e aceleração g: τ = C l^a g^b. Como [g] = LT⁻², resulta L^(a+b)T^(−2b) = T; logo a = 1/2 e b = −1/2. A forma é C√(l/g), mas C e condições de validade não são determinadas apenas por esse cálculo.",
        "pitfall": "Deduzir 2π só por dimensões, omitir variável fisicamente relevante ou confundir troca de unidade com garantia de semelhança entre sistemas de tamanhos diferentes."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num exercício hipotético, uma velocidade é 54 km/h e uma área é 250 cm². Quais são seus valores em m/s e m², respectivamente?",
        "hint": "A velocidade usa 1000 m por km e 3600 s por hora. A área usa o quadrado de 10⁻² m por cm, não o fator linear.",
        "solution": "B calcula 54×1000/3600 = 15 m/s e 250×10⁻⁴ = 0,025 m². A converte a velocidade corretamente, mas aplica fator linear à área. C transforma a velocidade por fator dez inadequado. D combina os dois erros. O valor da área cai por 10.000 ao passar de cm² para m².",
        "options": [
          "15 m/s e 2,5 m².",
          "15 m/s e 0,025 m².",
          "5,4 m/s e 0,025 m².",
          "5,4 m/s e 2,5 m²."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "No modelo hidrostático p = p0 + ρgh, use M para massa, L para comprimento e T para tempo. Densidade ρ tem dimensão ML⁻³ e g é aceleração. Qual é a dimensão comum de p, p0 e ρgh?",
        "hint": "Pressão é força por área. No produto ρgh, some os expoentes de densidade, aceleração e comprimento.",
        "solution": "D obtém ML⁻³×LT⁻²×L = ML⁻¹T⁻², a dimensão de pressão. A é dimensão de força, sem dividir por área. B é dimensão de energia. C altera indevidamente o expoente temporal de −2 para −1. A igualdade de dimensões verifica homogeneidade, sem provar por si todas as hipóteses hidrostáticas.",
        "options": [
          "MLT⁻².",
          "ML²T⁻².",
          "ML⁻¹T⁻¹.",
          "ML⁻¹T⁻²."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Em um modelo hipotético, Re = ρvL/μ, com densidade ρ = 1000 kg/m³, velocidade v = 0,30 m/s, comprimento L = 0,020 m e viscosidade dinâmica μ = 0,0010 Pa·s. Sabendo que Pa = kg·m⁻¹·s⁻², qual valor e dimensão resultam para Re? Não se pede classificação do regime de escoamento.",
        "hint": "Multiplique os três fatores do numerador e divida por μ; compare a unidade do numerador com Pa·s para verificar o cancelamento.",
        "solution": "C calcula 1000×0,30×0,020 = 6 e 6/0,0010 = 6000. A unidade do numerador é kg·m⁻¹·s⁻¹, igual a Pa·s, portanto Re é adimensional. A erra o valor por fator mil. B divide incorretamente por 0,1 em vez de 0,0010. D mantém indevidamente a unidade de viscosidade após a divisão. O resultado não define sozinho um limite universal de turbulência.",
        "options": [
          "6, adimensional.",
          "60, adimensional.",
          "6000, adimensional.",
          "6000 Pa·s."
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Química ambiental",
    "objective": "Relacionar transformações químicas a qualidade da água e impactos no ar e no solo, distinguir indicadores e mecanismos e calcular neutralização e cargas removidas sob hipóteses explícitas.",
    "prerequisites": [
      "Concentração, mol e massa molar",
      "Conservação de átomos e balanceamento de equações",
      "Noções de ácido-base, oxidação e redução e conversão de unidades"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Indicadores da água, concentração e demanda de oxigênio",
        "explanation": "Química ambiental estuda espécies, transformações e transporte no ambiente, relacionando condições e processos aos efeitos observados. Uma substância pode ocorrer naturalmente e ainda causar impacto em concentração ou contexto inadequados; natural não significa sempre inofensivo. Qualidade da água não se resume a aparência, pH ou um único número. pH expressa condição ácido-base; no modelo diluído, pH = −log[H3O+]. Uma redução de uma unidade corresponde a aumento de dez vezes na concentração de hidrônio nesse modelo, e não a uma diferença percentual linear. Oxigênio dissolvido, OD, é oxigênio molecular presente na água, diferente dos átomos de oxigênio ligados na molécula H2O. Demanda bioquímica de oxigênio, DBO, expressa consumo de oxigênio por atividade biológica em condições de ensaio definidas, frequentemente relacionado à matéria orgânica biodegradável. Ela não é a quantidade de oxigênio já dissolvido. Uma demanda elevada pode contribuir para reduzir OD se o consumo superar reposição, com consequências para organismos aeróbios. DQO é uma medida de equivalente de oxigênio ligada à oxidação química nas condições do método; não identifica sozinha todos os compostos, nem deve ser usada com limites universais para diagnosticar a origem industrial ou a toxicidade de uma amostra. Nutrientes em excesso podem favorecer eutrofização e aumentar consumo de oxigênio na respiração e decomposição. Avalie indicador, unidade, condições de ensaio e contexto, sem converter uma razão isolada em prova de segurança, causa única ou ausência de contaminantes.",
        "steps": [
          "Identifique a espécie ou parâmetro medido e sua unidade.",
          "Separe OD disponível e DBO como demanda em ensaio.",
          "Relacione entrada de matéria e nutrientes ao consumo e reposição de oxigênio.",
          "Compare indicadores com contexto, sem declarar qualidade integral por um número."
        ],
        "example": "Modelo hipotético de comparação: soluções diluídas têm [H3O+] de 10⁻⁵ mol/L e 10⁻⁶ mol/L. Seus pH são 5 e 6, respectivamente, e a primeira tem dez vezes a concentração de hidrônio. Isso não informa, por si, quais outros contaminantes existem nem a adequação de cada água para consumo.",
        "pitfall": "Confundir DBO com OD, chamar água transparente de comprovadamente potável ou inferir toxicidade e origem de um efluente por uma razão isolada sem condições do método."
      },
      {
        "level": "intermediate",
        "title": "Atmosfera, acidificação e reações com balanço",
        "explanation": "Processos ambientais diferentes precisam de mecanismos distintos. Gases como CO2, CH4 e N2O participam do efeito estufa, relacionado à interação com radiação infravermelha; o efeito natural e sua intensificação não se confundem com a perda de ozônio estratosférico. Na estratosfera, ozônio contribui para proteção contra radiação ultravioleta. Próximo à superfície, O3 pode ser poluente secundário formado em reações envolvendo óxidos de nitrogênio e compostos orgânicos voláteis sob luz solar. A mesma fórmula química não implica o mesmo papel em todos os lugares. Deposição ácida pode envolver ácidos produzidos a partir de SO2 e NOx; não é equivalente a todo efeito climático do CO2. A absorção de CO2 pelo oceano altera equilíbrios ácido-base e pode diminuir pH e disponibilidade de carbonato, afetando processos de formação de estruturas de carbonato de cálcio. Acidificar significa tornar mais ácido em relação à condição anterior, sem exigir que o pH final seja menor que 7. A análise quantitativa exige equações balanceadas. Na reação idealizada CaCO3 + 2 H+ → Ca2+ + CO2 + H2O, átomos e carga se conservam: um mol de carbonato consome dois mols de H+. H+ é uma notação simplificada para o próton solvatado no meio aquoso. Essa proporção permite calcular uma quantidade estequiométrica ideal, mas não determina sozinha a resposta de um rio real: equilíbrio, outras espécies, mistura e condições do sistema importam. Separar os mecanismos evita propor uma única medida como solução automática de qualquer impacto.",
        "steps": [
          "Identifique a espécie, a região ambiental e o mecanismo pertinente.",
          "Distinga efeito estufa, ozônio e deposição ou acidificação.",
          "Confira balanço de elementos e carga antes de usar coeficientes.",
          "Use proporções molares nas hipóteses do modelo, sem extrapolar para um tratamento real completo."
        ],
        "example": "Na representação simplificada CO2 + H2O ⇌ HCO3− + H+, ambos os lados têm um carbono, três oxigênios e dois hidrogênios, e a carga total é zero. A equação ajuda a discutir uma etapa de equilíbrio; não significa que todo CO2 dissolvido se converta integralmente em H+ ou que o oceano já tenha pH abaixo de 7.",
        "pitfall": "Trocar ozônio estratosférico por poluição fotoquímica, chamar qualquer acidificação de pH final abaixo de 7 ou calcular estequiometria com equação sem balanço de carga."
      },
      {
        "level": "advanced",
        "title": "Tratamento, destino de resíduos e balanço de carga",
        "explanation": "Prevenir geração e reduzir liberações pode ser mais eficaz que apenas transferir um contaminante de lugar. Processos de tratamento têm funções distintas: coagulação e floculação favorecem agregação de partículas; sedimentação e filtração separam materiais nas condições do sistema; desinfecção atua sobre microrganismos, sem garantir remoção de toda substância química. Adsorção envolve retenção na superfície de um material e não é sinônimo de absorção no seu interior. Processos biológicos e químicos podem transformar compostos, com produtos e limites que precisam ser acompanhados. Metais, como elementos, não desaparecem por biodegradação: podem mudar de forma química ou de compartimento. No solo, mobilidade e exposição dependem de espécie, concentração, pH e interações; a mera redução de uma concentração em água não prova que toda carga foi destruída. Para um fluxo de vazão Q, a carga por tempo é produto da vazão e da concentração, com unidades compatíveis. Se Q está em m³/d e C em mg/L, Q×C/1000 fornece kg/d, pois 1 m³ contém 1000 L e 1 kg contém um milhão de mg. Mantida a mesma vazão de entrada e saída, a remoção aparente do parâmetro no fluxo aquoso é Q(Centrada − Csaída)/1000. A eficiência relativa usa a carga de entrada como base, não a carga remanescente. Se houver diluição ou variação de vazão, compare cargas em cada corrente, não apenas concentrações. Avaliar resíduos e lodos integra o balanço: uma boa análise registra para onde materiais foram e quais transformações ocorreram, sem declarar ausência de impacto por uma etapa isolada.",
        "steps": [
          "Associe cada etapa ao alvo e ao mecanismo de separação ou transformação.",
          "Converta concentração e vazão para obter massa por tempo.",
          "Compare cargas com a vazão de cada corrente e calcule a eficiência pela entrada.",
          "Inclua resíduos e produtos no destino dos materiais, sem confundir remoção de um fluxo com desaparecimento."
        ],
        "example": "Modelo hipotético de mesma vazão: 200 m³/d entram com 30 mg/L de um parâmetro e saem com 15 mg/L. A carga passa de 6 para 3 kg/d, com redução de 3 kg/d e 50%. O cálculo não informa sozinho se a diferença foi transformada, retida em lodo ou transferida a outro compartimento.",
        "pitfall": "Comparar só concentrações quando a vazão muda, dividir a remoção pela carga de saída ou dizer que todo material retirado da água deixou de existir."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em um cenário hipotético, um corpo de água apresenta DBO elevada e baixo oxigênio dissolvido. Sem outros dados sobre composição e fontes, qual interpretação distingue os dois parâmetros e evita conclusão excessiva?",
        "hint": "DBO expressa demanda de consumo nas condições do ensaio; OD indica oxigênio disponível na água. Nenhum dos dois identifica sozinho todos os contaminantes.",
        "solution": "C separa demanda e disponibilidade e reconhece risco para organismos aeróbios quando o consumo supera a reposição. A confunde DBO com reserva disponível. B transforma transparência em prova integral de qualidade. D atribui fonte industrial e substância específica sem análise suficiente. O cenário não permite uma identificação química completa.",
        "options": [
          "DBO elevada significa que há obrigatoriamente grande reserva de OD para os organismos.",
          "A água é comprovadamente potável se estiver visualmente transparente.",
          "Demanda elevada pode contribuir para baixo OD, mas esses dados não identificam sozinhos todas as fontes e substâncias.",
          "Os dois valores provam que uma indústria específica liberou um único metal identificado."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "No modelo estequiométrico ideal CaCO3 + 2 H+ → Ca2+ + CO2 + H2O, pretende-se consumir 0,20 mol de H+ com CaCO3 puro. Adote massa molar do CaCO3 igual a 100 g/mol e reação completa segundo essa equação. Qual massa é requerida no modelo?",
        "hint": "Um mol de CaCO3 consome dois mols de H+. Calcule os mols necessários antes de multiplicar pela massa molar.",
        "solution": "A usa n(CaCO3) = 0,20/2 = 0,10 mol e massa = 0,10×100 = 10 g. B usa proporção 1:1 indevida. C divide novamente por dois, produzindo 5 g, que consumiriam apenas 0,10 mol de H+. D inverte a proporção: 0,20×2×100 = 40 g. É um cálculo de modelo, sem garantir a resposta de qualquer corpo de água real.",
        "options": [
          "10 g.",
          "20 g.",
          "5 g.",
          "40 g."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Um fluxo aquoso hipotético tem vazão constante de entrada e saída de 500 m³/d. A concentração de um parâmetro passa de 80 mg/L na entrada para 20 mg/L na saída, sem diluição nem correntes não contabilizadas. Qual carga foi removida do fluxo aquoso por dia e qual é a eficiência relativa à entrada?",
        "hint": "Calcule as cargas inicial e final com Q×C/1000 em kg/d e use (entrada−saída)/entrada para a eficiência, sem concluir destino não informado.",
        "solution": "D calcula carga de entrada 500×80/1000 = 40 kg/d e de saída 500×20/1000 = 10 kg/d. A remoção é 30 kg/d e a eficiência é 30/40×100 = 75%. A informa carga e fração remanescentes. B mantém remoção correta, mas usa 25%, que é a fração da saída. C apresenta massa removida maior que a carga de entrada. O balanço não demonstra por si destruição de toda a matéria retirada.",
        "options": [
          "10 kg/d e 25%.",
          "30 kg/d e 25%.",
          "60 kg/d e 75%.",
          "30 kg/d e 75%."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Bioquímica celular e biomoléculas",
    "objective": "Relacionar estrutura e função de biomoléculas, compreender a ação de enzimas e interpretar modelos explícitos de cinética e acoplamento energético, sem transformar simplificações em regras universais.",
    "prerequisites": [
      "Átomos, ligações e polaridade",
      "Organização básica da célula",
      "Proporções e operações com números negativos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Água, biomoléculas e relação entre estrutura e função",
        "explanation": "A bioquímica celular relaciona composição, organização e transformações da matéria viva. Água e íons participam do meio celular; água é polar, estabelece ligações de hidrogênio e dissolve muitos solutos iônicos ou polares, mas não é solvente universal. Essa limitação ajuda a entender a organização de membranas. Entre as principais famílias orgânicas estão carboidratos, lipídios, proteínas e ácidos nucleicos. Carboidratos incluem monossacarídeos e cadeias de açúcares com funções energéticas e estruturais. A fórmula (CH2O)n descreve muitos açúcares simples, mas não define todos os carboidratos e derivados. Amido e celulose contêm unidades de glicose, porém diferem nas ligações e na organização, o que altera propriedades e o reconhecimento enzimático. Lipídios são diversos e não constituem todos polímeros de uma unidade repetitiva. Triacilgliceróis participam de reservas; fosfolipídios de membrana são anfipáticos, com região hidrofílica e regiões hidrofóbicas. Proteínas são cadeias de aminoácidos: sequência é estrutura primária, padrões locais como hélices pertencem à secundária, dobramento tridimensional de uma cadeia à terciária; estrutura quaternária existe quando há associação de mais de uma cadeia polipeptídica. Nem toda proteína apresenta esse último nível. DNA e RNA são polímeros de nucleotídeos, compostos por base, açúcar e fosfato; diferem em componentes e organização e participam do armazenamento e da expressão da informação. Há também RNA catalítico. ATP é um nucleotídeo com três fosfatos que participa de transferências e acoplamentos energéticos; não deve ser confundido com um polímero de reserva semelhante ao amido. A função depende da estrutura e do contexto celular, não apenas de uma lista de elementos.",
        "steps": [
          "Identifique a família e suas unidades ou componentes sem presumir que todo lipídio seja polímero.",
          "Relacione polaridade e regiões anfipáticas à interação com água.",
          "Compare ligações, dobramento e associação de cadeias antes de atribuir função.",
          "Distinga nucleotídeo isolado, ácido nucleico e reserva de carboidrato."
        ],
        "example": "Descrição original: uma molécula possui uma região que interage com água e duas caudas que interagem pouco com ela. Esse arranjo é compatível com um fosfolipídio anfipático de membrana. Não basta chamá-lo inteiramente apolar; a coexistência das regiões ajuda a explicar sua organização em meio aquoso.",
        "pitfall": "Tratar água como solvente de qualquer substância, todos os lipídios como inteiramente apolares ou toda proteína como portadora de estrutura quaternária."
      },
      {
        "level": "intermediate",
        "title": "Catálise, condições do meio e modelo de saturação",
        "explanation": "Enzimas aceleram reações por uma via com menor barreira de ativação. Não alteram a variação de energia livre entre reagentes e produtos nem o equilíbrio da reação; aceleram sua aproximação nas condições pertinentes. A maioria é proteica, mas existem RNAs catalíticos. O sítio ativo e as interações com substratos ajudam a explicar especificidade; ajuste induzido descreve mudanças conformacionais na interação, e não uma peça rígida que serve indistintamente a qualquer molécula. Temperatura e pH afetam atividade, e a resposta depende da enzima e das condições: elevar temperatura não aumenta atividade indefinidamente. Desnaturação pode modificar o dobramento sem exigir ruptura da sequência de ligações peptídicas. Algumas enzimas precisam de cofatores, como íons ou moléculas orgânicas; regulação e inibição não seguem um único mecanismo universal. Para determinadas reações, nas condições de medição e no intervalo em que o modelo se aplica, uma relação de velocidade inicial pode ser escrita v = Vmax[S]/(Km + [S]). [S] e Km devem ter unidades de concentração compatíveis. Vmax é a velocidade limite do modelo para aquela quantidade de enzima e condição; com [S] = Km, v = Vmax/2. Km não é uma medida universal de afinidade, pois não é em geral uma constante de equilíbrio de ligação. A equação não descreve todas as enzimas, nem toda regulação ou conjunto de substratos. Antes de calcular, identifique que o enunciado autoriza esse modelo, mantenha suas condições e confira que 0 < v < Vmax quando os parâmetros e a concentração são positivos e finitos. Um resultado numérico não demonstra que qualquer sistema biológico obedeça à mesma equação.",
        "steps": [
          "Separe barreira de ativação, velocidade e equilíbrio químico.",
          "Leia as condições de temperatura, pH e quantidade de enzima.",
          "Use a equação apenas no modelo declarado, com unidades compatíveis.",
          "Confira a velocidade limite e evite transformar Km em afinidade universal."
        ],
        "example": "Exemplo hipotético distinto: um ensaio descrito pelo modelo tem Vmax = 80 µmol/min, Km = 2 mmol/L e [S] = 2 mmol/L. A velocidade é 80×2/(2+2) = 40 µmol/min, metade da velocidade limite. Isso decorre dos parâmetros fornecidos, não da suposição de que todas as enzimas se comportam assim.",
        "pitfall": "Afirmar que a enzima torna qualquer reação termodinamicamente favorável, que calor sempre aumenta sua atividade ou que a equação de saturação e Km valem para todos os sistemas."
      },
      {
        "level": "advanced",
        "title": "Metabolismo, ATP e interpretação do acoplamento",
        "explanation": "Metabolismo reúne transformações organizadas em vias: no balanço global, catabolismo degrada moléculas e pode fornecer energia e intermediários; anabolismo constrói componentes com consumo de recursos. Isso não significa que cada etapa de uma via tenha o mesmo sinal de variação de energia livre. ATP participa do acoplamento entre processos por mecanismos celulares, como transferência de fosfato e intermediários compartilhados. Romper uma ligação isoladamente exige energia; a hidrólise completa do ATP pode ter variação de energia livre negativa porque se consideram reagentes, produtos e condições, e não uma ligação cuja quebra por si liberaria energia. Quando duas transformações estão efetivamente acopladas em uma proporção definida, suas variações de energia livre se somam para avaliar o processo global naquela condição. ΔG negativo indica favorecimento termodinâmico no sentido considerado, sem garantir rapidez nem explicar sozinho o mecanismo. O valor depende das condições e não deve ser confundido automaticamente com um valor padrão tabelado. Na glicólise, uma glicose origina dois piruvatos e, no balanço usual da via, dois ATP líquidos e dois NADH no citosol; quatro ATP são produzidos e dois foram investidos. A fermentação pode regenerar NAD+ e permitir continuidade da glicólise, sem fornecer ATP adicional na etapa fermentativa clássica. Na respiração aeróbia de células eucarióticas, a cadeia na membrana mitocondrial interna transfere elétrons até o O2 e contribui para o gradiente usado pela ATP sintase. Procariontes não possuem mitocôndrias e podem usar sua membrana plasmática em processos respiratórios. Não há rendimento fixo de 38 ATP aplicável a toda célula: transporte, vias, acoplamento e condições importam. Interprete sempre o modelo e o balanço fornecidos, sem converter esta explicação em orientação clínica ou alimentar.",
        "steps": [
          "Identifique os processos e as condições a que cada ΔG se refere.",
          "Verifique acoplamento real e proporção antes de somar variações.",
          "Distinga favorecimento termodinâmico e velocidade de reação.",
          "Separe ATP bruto e líquido e reconheça os limites de rendimentos simplificados."
        ],
        "example": "Modelo original: um processo requer +12 kJ/mol e uma transformação a ele efetivamente acoplada, na proporção 1:1 e nas mesmas condições, apresenta −20 kJ/mol. A soma é −8 kJ/mol. O processo global fica termodinamicamente favorecido nesse modelo, mas apenas colocar reagentes juntos não demonstra o mecanismo de acoplamento nem a velocidade.",
        "pitfall": "Somar processos sem acoplamento, dizer que a quebra isolada de ligação libera energia ou usar quatro ATP brutos da glicólise como saldo líquido."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma comparação conceitual, amido e celulose são formados por unidades de glicose, mas possuem diferentes tipos de ligações e organização das cadeias. Qual conclusão é adequada?",
        "hint": "A composição em unidades não determina sozinha a estrutura tridimensional nem o reconhecimento por uma enzima.",
        "solution": "B reconhece que ligações e organização podem alterar propriedades e reconhecimento enzimático, mesmo quando o monossacarídeo é o mesmo. A ignora a estrutura. C confunde ambos os carboidratos com proteínas. D supõe que água rompa instantaneamente qualquer ligação glicosídica, sem condições ou catálise que sustentem essa conclusão.",
        "options": [
          "Ter unidades de glicose garante estrutura, propriedades e digestibilidade idênticas.",
          "Diferentes ligações e organização podem alterar propriedades e reconhecimento enzimático.",
          "Ambos são proteínas, pois suas cadeias contêm aminoácidos de glicose.",
          "Toda ligação das duas moléculas é instantaneamente rompida apenas por contato com água."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Um ensaio hipotético segue o modelo v = Vmax[S]/(Km + [S]), sob temperatura e quantidade de enzima fixas. Foram fornecidos Vmax = 120 µmol/min, Km = 2 mmol/L e [S] = 6 mmol/L. Qual velocidade inicial o modelo prevê?",
        "hint": "Some Km e [S] no denominador, multiplique Vmax pela concentração e mantenha as unidades de velocidade.",
        "solution": "D calcula v = 120×6/(2+6) = 720/8 = 90 µmol/min. A usa metade de Vmax, válida se [S] = Km, condição ausente. B multiplica Vmax por [S]/Km e omite a soma no denominador, obtendo 360. C usa a velocidade limite como se já fosse atingida em concentração finita. O resultado é menor que 120 e pertence ao modelo declarado.",
        "options": [
          "60 µmol/min.",
          "360 µmol/min.",
          "120 µmol/min.",
          "90 µmol/min."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Em um modelo hipotético, duas transformações estão efetivamente acopladas na proporção 1:1, nas mesmas condições: a primeira tem ΔG = +15 kJ/mol e a segunda tem ΔG = −25 kJ/mol. Qual conclusão descreve o processo global nessas condições?",
        "hint": "Some as variações com seus sinais. Um resultado negativo informa favorecimento termodinâmico, mas não determina a velocidade.",
        "solution": "A soma +15 + (−25) = −10 kJ/mol, favorecendo termodinamicamente o processo global no modelo acoplado. Isso não garante velocidade nem decorre de simplesmente misturar reagentes. B soma módulos e perde os sinais. C inverte o sinal do saldo. D ignora a transformação favorável e o acoplamento declarado.",
        "options": [
          "ΔG total = −10 kJ/mol; favorável termodinamicamente no modelo acoplado.",
          "ΔG total = +40 kJ/mol; a soma dos módulos determina o sentido.",
          "ΔG total = +10 kJ/mol; o saldo impede o processo no modelo.",
          "ΔG total = +15 kJ/mol; o acoplamento declarado não participa do balanço."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Tempo histórico, fontes e historiografia",
    "objective": "Distinguir cronologia, temporalidades e periodização, interrogar fontes em função de uma pergunta e comparar interpretações historiográficas com critérios de evidência, contexto e revisão.",
    "prerequisites": [
      "Noções de passado e presente",
      "Leitura de descrições e comparação de argumentos",
      "Distinção entre afirmação, indício e conclusão"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Cronologia, ritmos de mudança e recortes históricos",
        "explanation": "Cronologia ajuda a ordenar acontecimentos e localizar relações de anterioridade, simultaneidade e posterioridade. Uma linha do tempo é útil, mas não explica por si por que algo aconteceu: vir depois não significa resultar necessariamente do fato anterior. Tempo histórico envolve ritmos de mudança e permanência em sociedades e dimensões diferentes. Uma decisão administrativa pode ocorrer em um dia; sua aplicação, conflitos e mudanças nas práticas podem se estender por anos, enquanto certas desigualdades persistem. Não se trata de dispensar datas, e sim de articular datas e processos. Ao discutir duração social, Fernand Braudel destacou a importância de relacionar acontecimentos, conjunturas e estruturas de longa duração. Essa perspectiva não impõe uma tabela universal de quantos anos cada categoria deve conter, nem transforma toda estrutura em algo imóvel. Periodização é a construção de recortes e marcos a partir de critérios e problemas de pesquisa. Um marco político pode ser pertinente para uma questão e insuficiente para outra; mudanças econômicas, culturais ou ambientais não precisam coincidir com ele. A divisão europeia em Idades não deve ser aplicada como sequência natural e uniforme a todas as sociedades. Também é necessário explicitar o calendário e a convenção usados quando se comparam datas. Em vez de assumir progresso inevitável, pergunte o que mudou, o que permaneceu, para quem e em qual escala. Uma transformação pode ampliar oportunidades de um grupo e produzir perdas para outro.",
        "steps": [
          "Ordene os fatos sem confundir sequência e explicação causal.",
          "Identifique permanências e mudanças na dimensão que está sendo estudada.",
          "Declare o critério do marco e o alcance do recorte adotado.",
          "Compare ritmos e grupos sem impor uma sequência universal de progresso."
        ],
        "example": "Situação hipotética: uma norma municipal muda em certo ano, mas registros dos anos seguintes mostram que a prática anterior continuou em parte dos bairros. A data da norma é um marco relevante, porém não demonstra transformação imediata e homogênea. Investigar a aplicação permite relacionar acontecimento e processo.",
        "pitfall": "Afirmar que uma data altera automaticamente todas as práticas ou que um recorte europeu descreve o percurso obrigatório de qualquer sociedade."
      },
      {
        "level": "intermediate",
        "title": "Vestígios, perguntas e crítica das fontes",
        "explanation": "Uma fonte pode ser texto, objeto, imagem, mapa, registro sonoro, testemunho oral ou vestígio digital. Ela se torna evidência quando é interrogada e relacionada a uma pergunta com justificativa. Primária e secundária não são simplesmente sinônimos de antiga e recente: uma pesquisa posterior pode ser interpretação secundária de um evento e, ao mesmo tempo, fonte primária para estudar a produção intelectual da época em que foi escrita. Um depoimento recolhido décadas depois pode testemunhar experiência e elaboração da memória, exigindo análise de distância temporal, condições da entrevista e outras evidências. Para avaliar procedência e autenticidade, investigue autoria, data, suporte, circulação, integridade e trajetória do documento; para avaliar o conteúdo, examine finalidade, público, vocabulário, afirmações e silêncios. Esses procedimentos podem ser chamados de crítica externa e interna, mas se articulam na investigação, sem uma fronteira mecânica. Um documento oficial não é automaticamente neutro, e uma fonte pessoal não é automaticamente inútil. Séries documentais são construídas ou examinadas segundo critérios de comparação: cartas, inventários e registros pessoais também podem compor séries. Continuidade perfeita não é requisito para que uma série seja estudada; lacunas e mudanças de categorias precisam ser explicitadas. Confrontar fontes não é contar votos: vários relatos podem repetir a mesma origem, e divergências podem revelar posições e condições diferentes. Registre o que o material sustenta e o que permanece incerto.",
        "steps": [
          "Formule a pergunta antes de decidir a função de cada fonte.",
          "Verifique procedência, integridade, autoria, suporte e circulação.",
          "Interprete conteúdo, destinatário e finalidade em contexto.",
          "Confronte evidências, dependências e lacunas sem exigir neutralidade absoluta."
        ],
        "example": "Exemplo original: um anúncio de comércio e uma carta privada descrevem a mesma rua de maneiras distintas. O anúncio pode enfatizar vantagens para atrair clientes; a carta pode registrar experiências de um morador. O pesquisador compara datas, públicos, posições e outros vestígios, em vez de descartar um tipo inteiro ou assumir que ambos descrevem toda a população.",
        "pitfall": "Classificar apenas pela idade do documento, presumir que todo diário é não seriável ou tomar três cópias do mesmo relato como três confirmações independentes."
      },
      {
        "level": "advanced",
        "title": "Historiografia, interpretação e usos do passado",
        "explanation": "Historiografia pode designar a produção escrita da história e o estudo crítico de como essa produção formula problemas, seleciona evidências e constrói explicações. Comparar obras exige examinar perguntas, conceitos, escalas, fontes, procedimentos e contextos de produção; uma lista de nomes e escolas não substitui essa análise. Perspectivas de duração, como a discutida por Braudel no âmbito dos Annales, ampliam o olhar para processos que não se esgotam no evento isolado. Investigações podem também reduzir a escala, acompanhar trajetórias e relações locais ou analisar práticas e representações. Esses recortes não pertencem de modo exclusivo a uma única escola e podem se combinar; uma série de preços não identifica por si a filiação teórica de um autor. Diferentes interpretações não tornam qualquer afirmação igualmente válida: é necessário explicar a relação entre evidência e conclusão, considerar contraevidências, citar a origem dos materiais e reconhecer limites. Revisar uma explicação com novas fontes ou perguntas é parte da pesquisa; inventar documentos ou suprimir evidência contrária não é uma revisão legítima. Memórias individuais e coletivas selecionam experiências e atribuem sentidos, podendo ser objetos e fontes da investigação histórica. Isso não faz da memória sinônimo de mentira, nem torna a escrita acadêmica automaticamente livre de perspectivas. Monumentos, exposições e comemorações também podem ser examinados quanto a escolhas e silêncios. Contextualizar uma ação do passado significa investigar condições e categorias de seus agentes, sem presumir que todos pensavam igual ou que compreender equivalha a justificar.",
        "steps": [
          "Compare problema, escala, conceitos e uso de fontes nas interpretações.",
          "Separe diferença de enfoque e incompatibilidade de afirmações factuais.",
          "Avalie evidências e contraevidências e preserve a rastreabilidade das referências.",
          "Analise memória e usos públicos em seus contextos sem equiparar toda perspectiva a falsificação."
        ],
        "example": "Cenário hipotético: uma obra explica uma mobilização por alterações nos salários; outra acompanha redes de vizinhança por cartas e atas. Para compará-las, investigue se tratam da mesma questão, quais evidências sustentam cada argumento e se os enfoques podem se complementar. O tipo de documento, sozinho, não autoriza atribuir cada obra a uma escola fechada.",
        "pitfall": "Deduzir uma escola pelo tipo de fonte, confundir pluralidade interpretativa com licença para inventar fatos ou tratar contextualização como aprovação moral automática."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em um cenário hipotético, uma lei altera a organização do trabalho em um ano, mas documentos de anos posteriores indicam permanência de parte das práticas anteriores em diferentes localidades. Qual interpretação é mais adequada?",
        "hint": "Separe a data de uma decisão dos ritmos de sua aplicação e procure o alcance das evidências apresentadas.",
        "solution": "C distingue o marco legal e o processo social: pode haver aplicação desigual e permanências que exigem investigação. A presume mudança imediata de todas as práticas. B descarta datas que seguem relevantes para localizar o marco. D transforma permanências em prova de que nada mudou, ignorando a coexistência entre continuidades e transformações.",
        "options": [
          "A data da lei prova que todas as práticas mudaram naquele mesmo dia.",
          "A permanência de práticas torna qualquer data irrelevante para a pesquisa.",
          "O marco legal e as mudanças nas práticas podem ter ritmos diferentes, a investigar em cada contexto.",
          "A existência de qualquer permanência prova que nenhuma transformação ocorreu."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Um livro publicado em 1970 interpreta acontecimentos de 1820. Uma pesquisa atual investiga como historiadores de 1970 representavam o passado. Para essa pergunta atual, qual uso do livro é metodologicamente adequado?",
        "hint": "A função da fonte depende da pergunta, não apenas do intervalo entre publicação e acontecimento narrado.",
        "solution": "A usa o livro como evidência primária da produção historiográfica de 1970, interrogando conceitos, escolhas e contexto. Ele pode ser interpretação secundária dos eventos de 1820, mas a pergunta atual se refere à representação produzida em 1970. B e C impõem classificação fixa pela idade ou formato. D dispensa crítica por confundir publicação com neutralidade.",
        "options": [
          "Analisá-lo como fonte primária para estudar a representação historiográfica produzida em 1970.",
          "Recusá-lo como fonte primária de qualquer pesquisa, pois narra acontecimentos anteriores.",
          "Classificá-lo como primário de 1820 apenas porque é um livro impresso.",
          "Usá-lo como descrição neutra, dispensando exame de conceitos e contexto de publicação."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Duas obras sustentam explicações diferentes para um processo histórico. A primeira apresenta uma conclusão com documentos citados; a segunda propõe outra leitura e indica novas fontes e evidências que contrariam parte da conclusão anterior. Qual procedimento permite avaliar essa divergência?",
        "hint": "Pluralidade de interpretações exige exame do vínculo entre pergunta, evidências e argumento, sem escolher apenas pela antiguidade ou novidade.",
        "solution": "D permite conferir as fontes, a pertinência dos argumentos e os limites de ambas as obras, inclusive a contraevidência. Uma nova interpretação não vence só por ser mais recente, como em A. B transforma a anterioridade em autoridade irrevogável. C trata toda divergência como equivalência automática e abandona critérios de evidência. A avaliação pode justificar revisão, manutenção parcial ou rejeição de conclusões.",
        "options": [
          "Escolher a obra mais recente apenas pela data, sem conferir suas fontes.",
          "Manter integralmente a primeira conclusão porque foi publicada antes.",
          "Declarar as duas explicações igualmente válidas sem examinar evidências.",
          "Comparar perguntas, fontes, argumentos e contraevidências antes de avaliar as conclusões."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Escalas e representações espaciais",
    "objective": "Ler representações espaciais, calcular distâncias e áreas sob escala declarada, avaliar projeções e redimensionamento e distinguir escala cartográfica de agregação de dados, sem inferências individuais indevidas.",
    "prerequisites": [
      "Razões, proporções e potências",
      "Conversões entre centímetros, metros e quilômetros",
      "Leitura de legendas e comparação de conjuntos de dados"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Escala, legenda e medida de distâncias",
        "explanation": "Mapas são representações seletivas, construídas para determinados objetivos. Antes de medir, leia título, legenda, orientação, fonte, data e escala. A legenda informa o significado dos símbolos; uma cor não tem sentido universal independente dela. A escala numérica 1:n expressa a razão entre comprimentos representados e correspondentes no terreno, usando a mesma unidade. No modelo de escala constante, D = d×n: se d está em centímetros, D sai em centímetros e só depois é convertido. Para 1 cm no mapa, n/100 dá metros e n/100000 dá quilômetros; essas divisões não são fórmulas para qualquer comprimento sem considerar d. O menor denominador representa maior escala: 1:10000 é maior que 1:100000. Mantidos formato e condições de representação, maior escala permite mostrar área menor com mais detalhe; ampliar uma imagem pronta não cria informação que não existia. A escala gráfica relaciona um segmento desenhado e distâncias indicadas. Se o mapa e a barra forem redimensionados juntos, uniformemente nas duas direções, a barra mantém a relação com a representação; números de escala e frases como 1 cm equivale a 500 m precisam de atualização. Esticar só a largura ou copiar a barra separadamente invalida essa regra simples. A distância medida por um segmento entre dois lugares não é automaticamente distância por estrada nem tempo de viagem. Em mapas de grande extensão, a escala efetiva pode variar conforme posição e direção; uma medida precisa exige considerar a projeção e o sistema de referência, não apenas o denominador nominal.",
        "steps": [
          "Leia título, legenda, data, orientação e finalidade antes de interpretar símbolos.",
          "Multiplique o comprimento pelo denominador usando a mesma unidade.",
          "Converta a unidade final e diferencie linha reta, trajeto e tempo.",
          "Confira redimensionamento e limites da escala nominal antes de usar uma régua."
        ],
        "example": "Exemplo original sob escala constante: na escala 1:80000, um segmento de 2,5 cm representa 200000 cm, isto é, 2 km. Se uma estrada entre os pontos faz curvas, essa conta do segmento reto não fornece automaticamente o comprimento percorrido pela estrada nem a duração da viagem.",
        "pitfall": "Interpretar 1:n como unidades diferentes, medir um mapa redimensionado com a escala numérica antiga ou concluir que uma ampliação aumenta o detalhe real dos dados."
      },
      {
        "level": "intermediate",
        "title": "Áreas, redimensionamento e propriedades das projeções",
        "explanation": "Uma escala de comprimentos se aplica a duas dimensões no cálculo de área. Em uma representação plana com escala uniforme 1:n e sem distorção relevante para o exercício, A real = A representada×n², mantendo unidades quadradas. Como 1 km = 100000 cm, 1 km² = 10000000000 cm². Elevar o denominador ao quadrado sem elevar o fator de conversão da unidade produz erro. Uma ampliação uniforme por fator k multiplica comprimentos por k e áreas desenhadas por k²; o denominador da nova escala numérica é n/k. A área do terreno continua a mesma. Essas relações geométricas não eliminam distorções de projeção em um mapa real. Projeções transformam uma superfície curva em representação plana e não preservam simultaneamente todas as propriedades em toda a extensão. Projeções conformes preservam ângulos localmente, sem garantir igualdade de áreas; projeções equivalentes preservam proporções de áreas, mas podem alterar formas. Equidistância se refere a distâncias particulares previstas pela projeção, não a todos os pares de pontos. Mercator é conforme e Mollweide é equivalente; escolher uma não torna a outra universalmente errada. Para comparar áreas, uma projeção equivalente pode ser pertinente; para outra finalidade, serão relevantes outras propriedades, a localização e a extensão do território. Registre sistema, projeção e unidade em vez de concluir precisão pela aparência de um mapa.",
        "steps": [
          "Confira a hipótese de escala uniforme e use n² para áreas.",
          "Converta unidades quadradas com o quadrado do fator linear.",
          "Na ampliação, use k para comprimento, k² para área desenhada e n/k para a escala.",
          "Escolha a propriedade pertinente da projeção e reconheça suas limitações."
        ],
        "example": "Exemplo distinto: uma área de 3 cm² em um desenho com escala uniforme 1:20000 corresponde a 3×20000² = 1200000000 cm² = 0,12 km². Se o desenho e sua barra forem ampliados uniformemente por fator 2, a área desenhada passa a 12 cm² e a escala a 1:10000; 12×10000² fornece a mesma área do terreno.",
        "pitfall": "Multiplicar área apenas por n, supor que uma projeção equivalente preserve todos os ângulos ou que a ampliação física altere a área real representada."
      },
      {
        "level": "advanced",
        "title": "Escala de análise, agregação e limites da inferência",
        "explanation": "Escala cartográfica e escala de análise não são a mesma coisa. A primeira relaciona medida representada e terreno; a segunda diz respeito ao recorte e ao nível em que um fenômeno é investigado, como bairro, município ou região. Mudar o zoom da mesma imagem não refaz por si uma agregação estatística. O problema da unidade areal modificável, conhecido pela sigla MAUP, envolve a sensibilidade de resultados ao modo de reunir dados em unidades espaciais. O efeito de escala compara níveis de agregação, como pequenos setores reunidos em distritos; o efeito de zoneamento compara delimitações diferentes em um nível comparável. Tais mudanças podem alterar médias, correlações e padrões aparentes, mas não há lei que obrigue toda correlação a cair continuamente quando as unidades ficam menores. Para investigar a sensibilidade, mantenha definições e período comparáveis e explicite como os dados foram agregados. Relações entre médias de grupos também não provam a mesma relação entre indivíduos: essa passagem sem evidência individual é uma falácia ecológica. Mapas temáticos exigem ainda distinguir contagem absoluta, proporção e densidade; população maior não significa necessariamente densidade maior, que depende da área. Classes de legenda e fronteiras de unidades são escolhas de representação e análise, não prova de que o fenômeno muda abruptamente na fronteira. Comparações em outras unidades e métodos adequados podem esclarecer a robustez, sem prometer uma técnica que elimine automaticamente todo problema ou autorizar procura seletiva de um resultado desejado.",
        "steps": [
          "Identifique se a mudança envolve representação visual ou unidade de análise.",
          "Separe nível de agregação e alteração de limites em nível comparável.",
          "Mantenha definições e período e examine sensibilidade a escolhas espaciais.",
          "Evite inferir atributos individuais por médias e diferencie contagem, taxa e densidade."
        ],
        "example": "Cenário hipotético: um conjunto de pontos é agregado em duas divisões da mesma região, ambas com quatro zonas, mas com limites diferentes. Mudar esses limites pode redistribuir os totais por zona mesmo sem alterar nenhum ponto. Trata-se de examinar zoneamento, e não de concluir que os moradores ou os fatos mudaram entre os dois mapas.",
        "pitfall": "Chamar qualquer mudança de zoom de MAUP, exigir queda monotônica da correlação ou atribuir a cada indivíduo o comportamento médio observado em seu distrito."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em um exercício com escala constante 1:200.000, um segmento reto tem comprimento de 4 cm no mapa, sem redimensionamento. Qual distância no terreno corresponde a esse segmento?",
        "hint": "Calcule primeiro em centímetros e depois use 100000 cm por quilômetro; não interprete o segmento como tempo de viagem.",
        "solution": "B calcula 4×200000 = 800000 cm e divide por 100000 para obter 8 km. A, C e D apresentam respectivamente um décimo, dez vezes e um centésimo dessa distância; não correspondem à conversão correta. O resultado descreve o segmento sob a escala declarada, sem informar trajeto por estrada ou tempo de viagem.",
        "options": [
          "0,8 km.",
          "8 km.",
          "80 km.",
          "0,08 km."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Em uma representação plana de escala uniforme 1:25.000, uma região ocupa área de 16 cm². Desconsidere distorções. Depois ocorre ampliação uniforme para 200% do tamanho linear original. Qual é a área real da região e qual escala numérica deve indicar a cópia ampliada?",
        "hint": "A área real usa o quadrado do denominador. A ampliação linear por dois duplica os comprimentos e divide o denominador da escala por dois.",
        "solution": "D obtém 16×25000² = 10000000000 cm² = 1 km². A ampliação tem fator k = 2, e a nova escala é 1:12.500. A área desenhada passa a 16×2² = 64 cm²; 64×12500² confirma a área real inalterada. A mantém o denominador antigo. B altera indevidamente a área real junto com o desenho. C multiplica o denominador em vez de dividi-lo.",
        "options": [
          "1 km² e 1:25.000.",
          "4 km² e 1:12.500.",
          "1 km² e 1:50.000.",
          "1 km² e 1:12.500."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Em uma análise hipotética, os mesmos registros de um período são inicialmente agregados em 100 setores e depois em 20 distritos que reúnem esses setores. As definições das duas variáveis permanecem iguais, mas a correlação entre médias muda. Qual interpretação é adequada?",
        "hint": "Observe a mudança de nível de agregação e separe relações entre médias de relações entre pessoas.",
        "solution": "A identifica uma comparação de níveis de agregação compatível com o efeito de escala do MAUP e preserva o limite de inferência individual. B confunde uma análise de dados agregados com mudança apenas visual. C escolhe um nível como verdade universal sem justificativa. D transforma médias de grupo em comportamento de cada pessoa. A mudança observada também não autoriza uma regra universal sobre o sentido de toda correlação.",
        "options": [
          "O resultado é sensível ao nível de agregação; as médias não demonstram por si a mesma relação entre indivíduos.",
          "A diferença só pode ser efeito de zoom da imagem, sem relação com agregação.",
          "A correlação dos distritos é necessariamente a verdadeira em qualquer escala.",
          "A associação entre médias prova que cada pessoa segue exatamente a mesma relação."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Racionalismo e empirismo",
    "objective": "Comparar teses racionalistas e empiristas sobre origem e justificação do conhecimento, reconstruir argumentos de Descartes, Locke, Leibniz e Hume e distinguir demonstração, experiência e expectativa indutiva.",
    "prerequisites": [
      "Distinção entre crença, argumento e conclusão",
      "Noções de experiência sensível e raciocínio",
      "Leitura de hipóteses e identificação de generalizações"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Origem das ideias e justificação das crenças",
        "explanation": "Epistemologia investiga o conhecimento, suas fontes, condições e limites. Perguntar de onde veio uma ideia não é exatamente o mesmo que perguntar por que uma afirmação deve ser aceita. Uma figura observada pode sugerir uma conjectura matemática, mas medições de alguns desenhos e uma demonstração têm alcances diferentes. No debate moderno, racionalismo e empirismo designam famílias de posições, com divergências internas. Em linhas gerais, racionalistas como Descartes e Leibniz reconhecem papel de princípios ou recursos intelectuais que não se reduzem a generalizar sensações; isso não significa dispensar toda experiência em qualquer investigação. Empiristas como Locke e Hume dão à experiência papel central na origem dos conteúdos mentais, sem dispensar raciocínio, comparação e inferência. Para Locke, sensação e reflexão são fontes de ideias: sensação refere-se à experiência de objetos externos; reflexão, à experiência das operações da própria mente, como perceber, duvidar e querer. Rejeitar ideias ou princípios inatos não é negar a existência de capacidades mentais. De outro lado, disposições inatas não precisam ser entendidas como uma criança já afirmando conscientemente todas as proposições. Leibniz distingue o estímulo da experiência e o fundamento de verdades necessárias: muitos casos concordantes não demonstram, por si, necessidade universal. Ao comparar autores, evite transformar uma oposição sobre fontes e fundamentos em caricaturas de razão sem mundo ou experiência sem pensamento. A distinção entre conhecer a priori e a posteriori se refere à dependência da justificação em relação à experiência pertinente, não simplesmente à idade em que alguém aprendeu palavras.",
        "steps": [
          "Separe a aquisição de um conceito e a justificação de uma afirmação.",
          "Identifique o papel atribuído à experiência e aos recursos intelectuais.",
          "Em Locke, distinga sensação e reflexão sem excluir operações mentais.",
          "Compare teses específicas, evitando atribuir a toda corrente a posição de um só autor."
        ],
        "example": "Exemplo autoral: observar vários quadrados pode motivar uma conjectura sobre uma propriedade geométrica. Justificá-la por uma demonstração a partir de definições e premissas não é o mesmo que medir alguns desenhos. A experiência pode estimular a pergunta sem ser o único fundamento da prova apresentada.",
        "pitfall": "Afirmar que todo racionalista despreza observações, que todo empirista rejeita raciocínio ou que conhecer a priori significa nascer repetindo uma frase."
      },
      {
        "level": "intermediate",
        "title": "Dúvida cartesiana e investigação lockeana",
        "explanation": "Nas primeiras Meditações, Descartes suspende assentimento ao que admite dúvida para buscar um fundamento seguro. Duvidar metodicamente não equivale a demonstrar que toda crença é falsa nem a encerrar a investigação em ceticismo definitivo. Enganos dos sentidos, sonho e hipótese de um enganador ampliam o alcance do exame. Mesmo supondo engano, o exercício de pensar não pode ocorrer sem que exista quem pensa enquanto o exerce. O cogito é uma certeza nessa situação reflexiva; não é uma conclusão obtida pela observação externa do corpo e não demonstra, sozinho, toda a realidade do mundo físico. A sequência posterior do argumento cartesiano precisa ser examinada, em vez de declarar que qualquer pensamento pessoal é verdadeiro. Locke, no Ensaio sobre o entendimento humano, critica princípios inatos e investiga como ideias simples provenientes da experiência fornecem material para operações de combinação, comparação e abstração. Assim, a mente não é apenas um recipiente que recebe passivamente um mundo já explicado: ela trabalha sobre os materiais recebidos. A reflexão também é experiência, e não uma reserva de ideias prontas independente dela. Comparar essas propostas exige identificar o problema e o procedimento: uma busca cartesiana de certeza frente à dúvida e uma investigação lockeana sobre alcance e origem das ideias não são apenas dois slogans opostos. Não se deve transferir automaticamente para ambos uma classificação kantiana posterior de juízos, nem apresentar um único método como prática exclusiva de todos os autores agrupados em cada corrente.",
        "steps": [
          "Reconstrua a finalidade e as etapas da dúvida nas primeiras Meditações.",
          "Distinga suspensão de assentimento, falsidade demonstrada e certeza do pensar.",
          "Em Locke, identifique materiais da experiência e operações sobre ideias.",
          "Compare argumentos sem substituir a análise por rótulos ou categorias posteriores."
        ],
        "example": "Situação hipotética, sem citação literal: alguém imagina que está sendo enganado sobre o ambiente. Na linha argumentativa das primeiras Meditações, o próprio ato de duvidar confirma a existência de quem o exerce enquanto pensa. Isso não basta, sem outros argumentos, para concluir que cada detalhe percebido no ambiente corresponde ao mundo exterior.",
        "pitfall": "Tratar dúvida metódica como prova de falsidade de tudo, tomar o cogito como garantia de qualquer opinião ou confundir reflexão lockeana com ideias inatas."
      },
      {
        "level": "advanced",
        "title": "Hume, necessidade e limites da inferência indutiva",
        "explanation": "Na Investigação sobre o entendimento humano, Hume distingue impressões, mais vívidas, e ideias, menos vívidas, discutindo a relação entre experiência e pensamento. Distingue também relações de ideias e questões de fato. Uma relação aritmética pode ser examinada sem investigar a existência de determinados objetos; já uma afirmação sobre o que ocorrerá amanhã não se transforma em demonstração apenas pela repetição de casos passados. A análise humeana de causalidade e indução pergunta o que autoriza passar do observado ao não observado. Presumir que o futuro seguirá o passado porque isso funcionou no passado pressupõe justamente a continuidade que se pretende justificar. Costume e hábito ajudam a explicar nossa expectativa, sem converter a repetição em necessidade lógica demonstrada. Isso não significa que toda previsão seja falsa ou que Hume simplesmente ordene abandonar a vida prática e a investigação. Leibniz, em outro percurso, sustenta que exemplos sensíveis não bastam para fundamentar necessidade universal e atribui à razão recursos que a experiência pode despertar. A semelhança parcial de uma crítica a generalizações não torna os dois autores equivalentes: seus projetos e fundamentos diferem. Para ler um problema atual, pergunte se está em discussão origem de um conceito, validade dedutiva ou apoio empírico a uma previsão. Um experimento pode oferecer evidência relevante, sem que o seu sucesso torne uma lei logicamente necessária. A força do debate está em reconstruir limites e justificativas, não em classificar toda ciência como racionalismo e toda observação como empirismo. Desdobramentos posteriores reformulam os problemas; não é correto atribuir automaticamente a um autor moderno qualquer tese contemporânea com nome parecido.",
        "steps": [
          "Identifique se o argumento trata de relação de ideias ou questão de fato.",
          "Localize a passagem de casos observados para casos não observados.",
          "Examine se a justificativa da uniformidade pressupõe o que quer provar.",
          "Distinga crítica da necessidade, falsidade de previsões e abandono da prática."
        ],
        "example": "Modelo autoral: um equipamento respondeu do mesmo modo em dez ensaios. A frase responderá assim em todo ensaio futuro extrapola o conjunto observado. Os resultados podem apoiar uma expectativa sob condições definidas, mas a repetição, sozinha, não fornece uma demonstração lógica de uniformidade eterna.",
        "pitfall": "Dizer que Hume nega toda verdade matemática, que repetição prova necessidade ou que questionar o fundamento da indução equivale a demonstrar falsidade de toda previsão."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma descrição da posição de Locke afirma que ideias podem provir tanto da experiência com objetos externos quanto da experiência das operações da própria mente. Como interpretar essa segunda fonte?",
        "hint": "Reflexão, nesse contexto, também pertence à experiência; não se confunde com uma coleção pronta de ideias inatas.",
        "solution": "C identifica a reflexão como experiência das operações mentais, ao lado da sensação. A introduz ideias prontas independentes da experiência, contrariando a tese apresentada. B exclui a reflexão, apesar de o enunciado incluí-la. D transforma a origem das ideias em garantia automática de verdade, conclusão que não decorre dessa classificação.",
        "options": [
          "É um conjunto de proposições prontas e inatas, independente de qualquer experiência.",
          "É impossível em Locke, pois somente objetos externos podem fornecer ideias.",
          "É a reflexão sobre operações mentais, entendida como fonte de experiência.",
          "É uma garantia de que toda opinião formada na mente é necessariamente verdadeira."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Na linha argumentativa das primeiras Meditações de Descartes, uma pessoa admite hipoteticamente estar enganada sobre tudo que percebe, mas continua duvidando. Qual conclusão corresponde ao papel do cogito nesse momento?",
        "hint": "Examine o que o próprio ato de duvidar pressupõe, sem acrescentar garantias sobre cada objeto exterior.",
        "solution": "A reconhece a existência de quem pensa enquanto exerce a dúvida, mesmo sob a hipótese de engano. B vai além do argumento ao validar todas as percepções. C confunde duvidar do corpo com provar inexistência de qualquer pensante. D substitui a certeza reflexiva por uma contagem empírica de observações. O cogito não demonstra sozinho cada aspecto do mundo externo.",
        "options": [
          "A existência de quem pensa é certa enquanto exerce o pensamento, mesmo sob a hipótese de engano.",
          "Todas as percepções externas passam automaticamente a ser verdadeiras.",
          "A hipótese de engano demonstra que não existe ninguém pensando.",
          "A certeza só surge depois de contar quantas vezes os sentidos acertaram."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Um argumento afirma: o futuro repetirá o passado porque, nos casos passados, confiar nessa repetição funcionou. Qual crítica se aproxima do problema humeano da indução?",
        "hint": "Verifique se usar sucessos passados para garantir casos futuros já pressupõe a continuidade que está sendo defendida.",
        "solution": "D mostra que o argumento usa a passagem do passado ao futuro para justificar essa mesma passagem, sem fornecer uma demonstração não circular de necessidade. A trata repetição como prova lógica suficiente. B confunde crítica da justificação com prova de falsidade de toda previsão. C nega a distinção humeana ao converter relações aritméticas em simples previsão de eventos.",
        "options": [
          "Qualquer número de sucessos passados demonstra logicamente necessidade universal futura.",
          "A crítica demonstra que toda previsão futura será falsa.",
          "Toda relação aritmética é apenas previsão contingente de eventos futuros.",
          "O argumento pressupõe a continuidade que tenta justificar ao usar o passado como garantia do futuro."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Socialização, instituições e família",
    "objective": "Analisar a socialização ao longo da vida, distinguir posições, papéis, instituições e organizações e investigar diversidade familiar e práticas de cuidado sem determinismo ou classificação jurídica automática.",
    "prerequisites": [
      "Noções de cultura, normas e grupos sociais",
      "Leitura de situações hipotéticas",
      "Distinção entre descrição e julgamento de valor"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Socialização e participação ao longo da vida",
        "explanation": "Socialização é o processo pelo qual pessoas aprendem e reelaboram linguagens, normas, valores e formas de participar da vida social. Ocorre em interações e não apenas quando alguém dá uma ordem ou uma aula. Família, cuidadores, escola, pares, trabalho, religião e meios de comunicação podem atuar como agentes, com mensagens nem sempre concordantes. A socialização primária costuma designar aprendizagens iniciais e vínculos fundamentais da infância; a secundária envolve inserção em outros contextos e aprendizagem de papéis e conhecimentos mais específicos. Essa distinção não cria duas caixas separadas por uma data exata, nem significa que a secundária só ocorra em organizações formais. Uma pessoa também aprende códigos em um grupo informal ou ambiente digital. Aprendizagens iniciais são importantes, mas não determinam de modo irreversível toda trajetória: mudanças de contexto, interação e reflexão podem transformar práticas. Ressocialização envolve reorganização relevante de padrões, expectativas e identidades, em condições que podem incluir coerção, mas não se limitam a ela ou a instituições totais. Não é sinônimo de qualquer novo detalhe aprendido. Agentes sociais não transmitem uma cultura única e perfeitamente uniforme. Na interação, pessoas podem reproduzir, negociar e contestar expectativas; crianças e adolescentes também participam da construção de sentidos e de culturas de pares. O olhar sociológico examina condições, oportunidades e relações de poder, sem explicar toda conduta por uma única influência familiar ou presumir que indivíduos sejam cópias passivas do meio.",
        "steps": [
          "Identifique agentes e situações concretas de aprendizagem social.",
          "Distinga aprendizagens iniciais e inserção em outros contextos sem fronteira rígida.",
          "Examine continuidade e mudança ao longo da trajetória.",
          "Reconheça interpretação e participação dos sujeitos, além das expectativas recebidas."
        ],
        "example": "Cenário original: ao ingressar em um grupo de música, uma pessoa adulta aprende formas de organizar ensaios e combina novas regras de participação com os colegas. A aprendizagem fora da infância e da família mostra continuidade da socialização. A negociação das regras evidencia participação ativa, em vez de simples cópia de ordens.",
        "pitfall": "Reduzir socialização à infância, afirmar que toda aprendizagem inicial é irreversível ou que só organizações formais podem socializar."
      },
      {
        "level": "intermediate",
        "title": "Posições, papéis e instituições em situações concretas",
        "explanation": "Status, em análise sociológica, pode significar posição em relações sociais, como estudante ou coordenador; não indica necessariamente prestígio ou renda. Papel é o conjunto de expectativas associado a uma posição. A mesma pessoa ocupa diferentes posições e lida com expectativas de vários interlocutores. Estas não determinam mecanicamente tudo que ela faz e podem ser negociadas ou contestadas. Na distinção didática usual, conflito de papéis envolve demandas incompatíveis vinculadas a posições diferentes, enquanto tensão de papel envolve exigências difíceis de conciliar dentro da mesma posição. Não basta citar duas tarefas ou qualidades: rigor e empatia, por exemplo, não são necessariamente incompatíveis. É preciso mostrar a situação que torna as demandas conflitantes, como prazos simultâneos e recursos insuficientes. Posições atribuídas e conquistadas distinguem modos de atribuição e acesso, mas conquista não significa ausência de condições sociais ou igualdade de oportunidades. Instituições sociais envolvem padrões relativamente duradouros de normas, práticas e relações, como educação, economia e família. Não são todas justas, consensuais ou imutáveis; podem reproduzir desigualdades e ser transformadas por conflitos. Uma organização é uma coletividade concreta com participantes, objetivos e regras, como determinada escola. Ela pode realizar práticas da instituição educacional, sem ser equivalente a toda a educação. O termo instituição também tem usos cotidianos para organizações; na análise, declare o sentido e evite confundir um prédio com o conjunto de relações e normas.",
        "steps": [
          "Identifique a posição e as expectativas, sem confundir status com riqueza.",
          "Verifique se a incompatibilidade envolve posições diferentes ou uma só.",
          "Descreva o obstáculo concreto antes de afirmar conflito ou tensão.",
          "Distinga padrões institucionais e organizações particulares e examine poder e mudança."
        ],
        "example": "Situação hipotética: uma pessoa é estudante e trabalha em uma loja. Uma prova e um turno obrigatório são marcados para o mesmo horário, sem possibilidade de presença nos dois lugares. Há demandas incompatíveis de posições diferentes, um exemplo de conflito de papéis, não mera diferença de opinião sobre a mesma tarefa.",
        "pitfall": "Tratar duas qualidades compatíveis como conflito necessário, interpretar todo status como prestígio ou confundir uma escola específica com a instituição educação inteira."
      },
      {
        "level": "advanced",
        "title": "Diversidade familiar, cuidado e critérios de pesquisa",
        "explanation": "Família pode ser estudada como instituição, conjunto de vínculos e práticas cotidianas. Formas de filiação, união, residência, autoridade e cuidado variam historicamente e entre contextos. Arranjos monoparentais, recompostos, extensos e com casais do mesmo gênero não devem ser automaticamente classificados como falha de socialização por diferirem de um modelo tomado como padrão. Também não se pode concluir igualdade de recursos ou ausência de conflito apenas pela composição do grupo. A abordagem das práticas familiares, associada a David H. J. Morgan, chama atenção para atividades pelas quais relações são vividas e sustentadas, como cuidar, organizar rotinas e manter contato. Isso amplia a análise para além de uma lista de moradores, sem afirmar que qualquer atividade de cuidado seja por si idêntica a todo vínculo de parentesco. Parentes podem morar em casas diferentes, enquanto pessoas sem parentesco podem compartilhar um domicílio. Critérios de pesquisa, categorias censitárias e reconhecimento jurídico não são necessariamente equivalentes; resultados exigem explicitar qual definição foi utilizada. Investigar a divisão do cuidado demanda perguntar quem faz quais tarefas, com que tempo e recursos, se há remuneração e como trabalho, serviços públicos e outras redes participam. Agência de crianças não equivale a recomendar que assumam responsabilidades de adultos. Na comparação de famílias, considere condições sociais e trajetórias em vez de atribuir resultados automaticamente ao gênero, à biologia ou à forma de união. Estatísticas sobre mudança familiar precisam de fonte, período, território e definição, sem importar tendências de um país como se fossem dados brasileiros universais.",
        "steps": [
          "Declare a definição de família e de domicílio utilizada na pesquisa.",
          "Observe vínculos, rotinas e divisão do cuidado sem hierarquizar arranjos por composição.",
          "Relacione práticas e condições de trabalho, serviços, tempo e poder.",
          "Separe achado sociológico, categoria estatística e conclusão jurídica ou causal."
        ],
        "example": "Exemplo hipotético: dois parentes vivem em casas diferentes e se alternam no acompanhamento de um familiar, enquanto colegas sem parentesco dividem outro endereço. Contar moradores de cada domicílio não descreve sozinho a rede de cuidado. A pesquisa precisa esclarecer se estuda coabitação, parentesco, práticas ou outra dimensão.",
        "pitfall": "Equiparar família e endereço, deduzir reconhecimento jurídico por uma observação sociológica ou atribuir qualidade do cuidado automaticamente à composição do grupo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em um grupo informal, adolescentes aprendem regras de convivência com colegas, discutem propostas e modificam uma regra que consideram injusta. Qual interpretação é adequada?",
        "hint": "Considere aprendizagem fora de organizações formais e a possibilidade de negociar, e não apenas obedecer, expectativas.",
        "solution": "B reconhece pares como agentes e a participação ativa na aprendizagem e revisão de práticas. A limita socialização à família e infância. C exige organização formal, apesar da aprendizagem descrita. D atribui irreversibilidade a toda regra e nega a mudança que o cenário informa. Não é necessário classificar qualquer revisão de regra como ressocialização integral.",
        "options": [
          "Não há socialização, porque ela termina necessariamente na primeira infância.",
          "Há socialização entre pares com interpretação e negociação ativa de regras.",
          "Só haveria socialização se o grupo se tornasse uma organização formal.",
          "Toda regra aprendida é irreversível, portanto a mudança descrita é impossível."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Em um cenário hipotético, uma coordenadora recebe, na mesma função, duas ordens: conduzir presencialmente duas reuniões distintas no mesmo horário, sem substituição ou possibilidade de remarcação. Na distinção didática entre conflito de papéis e tensão de papel, qual descrição é adequada?",
        "hint": "O enunciado situa as duas demandas na mesma posição e explicita por que são incompatíveis.",
        "solution": "D identifica tensão dentro de uma posição: as duas exigências da coordenação são incompatíveis nas condições explicitadas. A inventa outra posição não mencionada. B confunde incompatibilidade de ordens claras com falta de definição. C ignora que a simultaneidade, sem substituição ou remarcação, impede presença em ambas. A classificação usa a distinção didática declarada no enunciado.",
        "options": [
          "Conflito entre a posição de coordenadora e uma posição familiar não mencionada.",
          "Apenas ausência de definição das ordens, pois nenhum horário foi estabelecido.",
          "Ausência de qualquer incompatibilidade, porque ocupar uma posição garante cumprir todas as ordens.",
          "Tensão de papel: exigências incompatíveis vinculadas à mesma posição de coordenadora."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Uma pesquisa hipotética quer compreender redes de cuidado familiar. Os participantes relatam ajuda regular de parentes que moram em outros endereços, além de convivência com colegas sem parentesco no mesmo domicílio. Qual procedimento é mais adequado?",
        "hint": "Endereço e vínculo familiar são dimensões distintas; explicitar o critério ajuda a não excluir relações relevantes.",
        "solution": "A permite observar a rede de cuidado e distinguir parentesco, coabitação e práticas. B equipara família a endereço e exclui vínculos descritos. C trata coabitação como prova automática de parentesco. D transforma a observação sociológica em conclusão jurídica sem base. O procedimento não presume que toda ajuda tenha o mesmo significado nem garante direitos legais por si.",
        "options": [
          "Explicitar os critérios e investigar vínculos e práticas de cuidado além da lista de moradores de cada domicílio.",
          "Excluir todos os parentes de outros endereços, pois família é sempre idêntica ao domicílio.",
          "Presumir que todos os colegas coabitantes tenham parentesco entre si.",
          "Concluir automaticamente que toda pessoa que ajuda possui o mesmo reconhecimento jurídico de filiação."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Artes visuais, música, dança e teatro",
    "objective": "Identificar recursos de artes visuais, música, dança e teatro, comparar sua organização em descrições autossuficientes e relacionar escolhas formais, adaptação, contexto e acesso sem atribuir intenção ou história sem evidência.",
    "prerequisites": [
      "Leitura de descrições e distinção entre observar e interpretar",
      "Noções de espaço, tempo, contraste e repetição",
      "Reconhecimento de contextos de produção e circulação cultural"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Artes visuais e música: recursos e organização",
        "explanation": "Analisar arte envolve perceber escolhas e relacioná-las a sentidos possíveis, sem reduzir uma obra a adivinhar o que o autor pensou. Nas artes visuais, linha, forma, cor, claro-escuro, textura e espaço são recursos de descrição. Observe como contrastes, repetições, proporções e relações entre partes orientam a atenção. Equilíbrio visual não exige simetria perfeita, e textura pode ser material ou sugerida por marcas e imagens. Um significado não decorre automaticamente de uma cor: vermelho, por exemplo, precisa ser interpretado com composição e contexto. Na música, altura se refere à percepção de grave e agudo, não a som forte ou fraco. Intensidade ou dinâmica envolve contrastes de força sonora; duração e ritmo dizem respeito à organização temporal, incluindo silêncios; timbre ajuda a distinguir qualidades sonoras de instrumentos, vozes e modos de produzir som. Andamento se refere à velocidade de referência da execução, sem ser sinônimo de todo o ritmo. Melodia, harmonia e textura são outras dimensões de análise, mas uma prática musical não precisa apresentar todas elas segundo um único modelo de tradição ocidental. Uma frase pode manter suas alturas e ritmo enquanto muda de timbre ou dinâmica. Categorias como repetição e contraste atravessam linguagens, porém operam com materiais diferentes: repetir linhas numa imagem não é literalmente produzir uma melodia. Descreva primeiro o que o material disponibiliza e depois apresente a interpretação com seus indícios, sem tomar preferência pessoal como prova de superioridade cultural.",
        "steps": [
          "Descreva linhas, cores, texturas e relações espaciais sem supor sentido universal.",
          "Separe altura, dinâmica, timbre, duração e andamento na descrição sonora.",
          "Localize repetição, variação e contraste em seus materiais próprios.",
          "Justifique interpretações com recursos observados e contexto, além do gosto pessoal."
        ],
        "example": "Descrição original autossuficiente: uma composição visual apresenta formas escuras repetidas e uma forma clara isolada; um trecho musical repete a mesma frase em uma flauta e depois em outra fonte sonora. A imagem permite discutir contraste e repetição; o trecho permite discutir mudança de timbre sem concluir que as notas necessariamente mudaram.",
        "pitfall": "Confundir agudo com forte, timbre com velocidade, equilíbrio com simetria obrigatória ou uma cor isolada com emoção e intenção comprovadas."
      },
      {
        "level": "intermediate",
        "title": "Dança e teatro: corpo, ação, tempo e espaço",
        "explanation": "Na dança, corpo, ações, espaço, tempo e qualidades de movimento ajudam a descrever a organização coreográfica. Partes do corpo podem iniciar movimentos; níveis, direções e trajetórias organizam o espaço; pausas, duração e relações temporais organizam o tempo. Qualidades podem ser sustentadas, abruptas, leves ou intensas, conforme o contexto da descrição. Solo, grupo, aproximações, distâncias e contatos também compõem relações. Uma dança pode dialogar com música, silêncio ou outros sons: não é apenas ilustração de uma melodia nem exige movimentos virtuosos idênticos para todos os corpos. No teatro, atuação e ação cênica articulam corpos, vozes, gestos, objetos e relação com o público. Cenografia, figurino, luz e som podem produzir sentidos, sem serem meras decorações. A iluminação pode selecionar uma área ou alterar relações de visibilidade; figurinos podem sugerir diferenças e transformações, sem garantir uma identidade fora da cena. Há montagens narrativas com personagens e conflitos, mas esses não são requisitos rígidos de toda experiência teatral. Texto falado, palco italiano e cenário realista tampouco são obrigatórios. Dança e teatro podem compartilhar recursos corporais e se integrar, sem que todo corpo filmado prove por si a presença de todas as linguagens. Ao analisar, descreva o procedimento disponível e o que ele sustenta: o uso de um espaço aberto não determina automaticamente participação comunitária, autoria coletiva, gratuidade ou uma posição política específica.",
        "steps": [
          "Na dança, identifique ações, níveis, trajetórias, tempo e qualidades descritas.",
          "No teatro, examine atuação, espaço e relações entre luz, som, objetos e público.",
          "Diferencie recurso observado e conclusão sobre intenção ou autoria.",
          "Reconheça combinações e diferenças sem impor fala, narrativa ou modelo corporal único."
        ],
        "example": "Cenário hipotético: intérpretes atravessam uma diagonal lentamente, param juntos e retomam com movimentos breves. A descrição sustenta análise de trajetória, duração, pausa e contraste de qualidade. Em uma cena teatral distinta, uma cadeira deslocada e uma mudança de luz podem redefinir o espaço ficcional sem um cenário realista completo.",
        "pitfall": "Exigir música para toda dança, fala e personagem fixo para todo teatro ou inferir coautoria apenas porque moradores de uma comunidade atuam."
      },
      {
        "level": "advanced",
        "title": "Encontros entre linguagens, contexto e acesso",
        "explanation": "Obras podem relacionar imagem, som, movimento e cena por repetição, contraste, simultaneidade e alternância. Não existe uma separação universal e rígida em que hibridismo, intermidialidade e multimídia sejam sempre categorias exclusivas ou uma delas signifique falta de elaboração artística. Descrever o procedimento concreto costuma ser mais produtivo que escolher um rótulo sem justificativa. Na adaptação ou transposição entre linguagens, decisões recriam aspectos de uma obra: um texto pode orientar sequência, imagens ou relações de uma encenação. Não é necessário perder toda narração no teatro, nem preservar cada palavra para manter uma relação com o material de partida. A comparação exige saber qual fonte foi usada e quais escolhas foram efetivamente apresentadas. Contexto inclui autoria, colaboração, período, público, espaços de circulação e condições materiais. A presença de entrevistas pode sustentar procedimentos documentais, mas o uso palavra por palavra, a edição e a autoria não devem ser presumidos. Financiamento público ou privado, isoladamente, não prova qualidade, autonomia ou intenção. Em manifestações culturais de grupos e comunidades, identifique participantes e fontes sem transformar toda prática em representação fixa de um povo. Acesso também integra produção e recepção: descrição verbal de elementos visuais, legendas de fala e sons pertinentes, interpretação em língua de sinais, condições físicas e mediação podem atender necessidades diferentes. Um recurso não resolve sozinho todas as barreiras. Uma análise fundamentada articula o que a obra faz, os indícios disponíveis e as condições de participação, reconhecendo o que não foi informado.",
        "steps": [
          "Descreva como materiais de diferentes linguagens se articulam.",
          "Na adaptação, compare escolhas observáveis com a fonte explicitada.",
          "Examine autoria, colaboração, circulação e limites dos dados de contexto.",
          "Considere diferentes barreiras e recursos de acesso sem presumir solução universal."
        ],
        "example": "Exemplo inteiramente hipotético: uma equipe cria cena a partir de uma narrativa original e decide manter um narrador enquanto transforma descrições de ambiente em luz e objetos. A adaptação não perde obrigatoriamente a narração: ela a reorganiza. Para analisar autoria e participação, ainda é necessário saber como cada integrante colaborou.",
        "pitfall": "Inventar uma obra ou participação histórica, chamar atores automaticamente de coautores ou tratar financiamento e uso de tecnologia como provas de valor artístico."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Descrição hipotética de um trecho musical: as mesmas alturas e durações são repetidas pelo mesmo instrumento, mas na segunda execução o som é mais forte. Qual recurso mudou explicitamente?",
        "hint": "Separe forte/fraco de grave/agudo, da duração e da fonte sonora descritos como mantidos.",
        "solution": "C identifica a dinâmica, ligada ao contraste entre mais forte e mais fraco. A diz que alturas ficaram mais agudas, embora tenham sido mantidas. B muda durações que o enunciado declara iguais. D presume troca de instrumento não ocorrida. O enunciado não obriga concluir mudança de emoção ou intenção específica.",
        "options": [
          "Altura: todas as notas ficaram necessariamente mais agudas.",
          "Duração: cada nota passou necessariamente a durar o dobro.",
          "Dinâmica: houve contraste de intensidade sonora entre as execuções.",
          "Instrumentação: foi obrigatoriamente substituído o instrumento."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Em uma descrição coreográfica original, um grupo se desloca em diagonal, faz uma pausa coletiva e retoma com movimentos mais rápidos em nível baixo. Não há gravação ou imagem a consultar. Qual análise se apoia nos dados fornecidos?",
        "hint": "Localize trajetória, pausa, velocidade e nível, sem inventar objetos, autoria ou conteúdo verbal.",
        "solution": "A articula espaço e tempo da dança a partir de diagonal, pausa, rapidez e nível baixo. B exige fala, que não foi informada e não é requisito da dança. C inventa troca de instrumentos sem dados sonoros. D presume autoria comunitária por haver grupo, conclusão que não decorre do número de intérpretes. A descrição é suficiente para identificar os recursos solicitados.",
        "options": [
          "A trajetória diagonal e o nível baixo organizam o espaço; pausa e retomada rápida organizam o tempo.",
          "A descrição prova um diálogo falado obrigatório para que exista dança.",
          "A retomada rápida demonstra que um violino foi substituído por um tambor.",
          "A presença de grupo prova que todos os moradores da região escreveram a coreografia."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Uma equipe adapta uma narrativa original para a cena e informa que manteve um narrador, converteu descrições de ambiente em objetos e luz e selecionou trechos do texto. Qual conclusão é sustentada?",
        "hint": "Compare o procedimento relatado com afirmações universais sobre adaptação, qualidade e autoria.",
        "solution": "D reconhece recriação e reorganização de recursos, inclusive a manutenção possível da narração. A impõe uma perda obrigatória negada pelo próprio caso. B transforma seleção em transcrição integral sem base. C faz um julgamento de qualidade a partir de um recurso isolado. Não é necessário atribuir uma obra histórica ou escola para analisar as escolhas descritas.",
        "options": [
          "Toda adaptação teatral elimina necessariamente qualquer narrador.",
          "Selecionar trechos significa manter integralmente cada palavra da narrativa.",
          "O uso de luz prova, sozinho, qualidade superior a qualquer outra adaptação.",
          "A adaptação reorganiza recursos e pode manter a narração enquanto recria descrições por outros meios."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Práticas corporais e sociedade",
    "objective": "Relacionar práticas corporais, cultura e participação social, reconhecer barreiras de acesso e analisar representações e projetos com evidências, sem reduzir corpos a desempenho ou presumir causas e benefícios automáticos.",
    "prerequisites": [
      "Noções de cultura, participação e desigualdade",
      "Leitura de situações hipotéticas",
      "Distinção entre evidência, hipótese e promessa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Movimento, cultura e sentidos das práticas",
        "explanation": "O corpo tem dimensões biológicas e também é vivido por meio de relações, aprendizagens e significados históricos e culturais. Jogos, brincadeiras, danças, lutas, ginásticas, esportes e práticas de aventura podem ser investigados como práticas corporais. Regras, gestos, músicas, objetos, maneiras de ensinar e sentidos de participação não são iguais em todos os lugares. Na definição da OMS, atividade física envolve movimento produzido por músculos esqueléticos com gasto de energia. Essa definição destaca uma dimensão, enquanto a análise de práticas corporais destaca sentidos e formas de organização social; elas podem se referir à mesma experiência e não são categorias que se excluem. Uma prática em academia também tem contexto cultural, assim como uma brincadeira comunitária também envolve esforço corporal. Não se deve chamar a primeira de apenas biológica nem a segunda de independente do corpo material. Educação Física pode articular vivência, compreensão e reflexão sobre essas dimensões, em vez de reduzir aprendizagem a gasto calórico, recorde ou seleção de quem tem melhor desempenho. Regras podem variar segundo finalidade e contexto, como competição formal, aprendizagem ou encontro recreativo. Conhecer uma versão não autoriza chamá-la de forma única e autêntica de toda uma comunidade. Ao estudar práticas de um grupo, identifique origem e participantes quando houver fonte e reconheça transformações, sem inventar ancestralidades ou considerar a cultura parada no tempo.",
        "steps": [
          "Identifique a prática e os sentidos atribuídos pelos participantes.",
          "Relacione dimensões corporais e culturais sem tratá-las como opostas.",
          "Compare regras, contextos e objetivos antes de julgar uma variação.",
          "Valorize aprendizagem e participação, além de desempenho e gasto energético."
        ],
        "example": "Cenário hipotético: um grupo adapta um jogo de perseguição para um espaço menor, combina zonas de pausa e discute a origem das versões que conhece. A análise pode tratar de deslocamento e esforço, mas também de regras, memória e decisões coletivas. Modificar regras não significa automaticamente destruir toda relação cultural da prática.",
        "pitfall": "Opor cultura e biologia, atribuir uma origem sem fonte ou considerar só a competição oficial uma prática corporal legítima."
      },
      {
        "level": "intermediate",
        "title": "Acesso, diferenças e condições de participação",
        "explanation": "Participar de uma prática depende de mais que interesse ou esforço individual. Custos, transporte, horários, segurança, informação, espaço, equipamentos e acolhimento podem facilitar ou dificultar acesso. Normas de gênero, racismo e barreiras para pessoas com deficiência também precisam ser examinados, sem presumir que integrantes de um grupo tenham desejos ou capacidades idênticos. Marcadores sociais podem se combinar de maneiras específicas: conhecer uma diferença de participação não demonstra sozinho a contribuição causal de cada fator. É necessário investigar condições e ouvir participantes, inclusive quem não conseguiu entrar ou permanecer. Uma instalação anunciada como aberta não garante acesso efetivo se o trajeto é inviável, a comunicação exclui pessoas ou os horários não atendem o público. A participação pode exigir adaptação de materiais, regras, espaço, comunicação e formas de acompanhamento, mantendo objetivos de aprendizagem e condições de segurança. Oferecer exatamente o mesmo recurso a todos não resolve sempre barreiras diferentes. Ao mesmo tempo, adaptar não equivale a presumir incapacidade ou separar alguém sem conhecer suas necessidades e preferências. A Educação Física escolar pode ampliar repertório e oportunidades, em articulação com outras redes; não é solução automática de toda desigualdade. Avaliar um projeto exige observar entrada, permanência, experiências e distribuição das oportunidades, em vez de contar apenas matrículas ou declarar inclusão por existir um equipamento.",
        "steps": [
          "Mapeie barreiras materiais, comunicacionais e de acolhimento no contexto informado.",
          "Escute participantes e não participantes sem atribuir preferências naturais a grupos.",
          "Relacione adaptações a objetivos, necessidades e segurança.",
          "Distinga participação efetiva, oferta nominal e conclusão causal não demonstrada."
        ],
        "example": "Situação original: uma oficina é gratuita, mas acontece quando o transporte coletivo já terminou. Pessoas interessadas de outro bairro relatam que não conseguem voltar para casa. A gratuidade retira um custo, mas não resolve a barreira de horário e deslocamento; a equipe precisa investigar alternativas com o público.",
        "pitfall": "Explicar uma diferença apenas por talento natural, presumir que gratuidade elimine toda barreira ou declarar o efeito de cada marcador por uma comparação isolada."
      },
      {
        "level": "advanced",
        "title": "Mídia, consumo e avaliação de projetos e eventos",
        "explanation": "A mídia seleciona quais práticas, pessoas e resultados recebem visibilidade e como são apresentados. Uma cobertura pode ampliar repertório e referências, mas também reforçar estereótipos ao destacar aparência ou vida pessoal e ignorar a realização esportiva. Compare linguagem, imagens, tempo e critérios de destaque; não suponha neutralidade automática nem uma intenção única em toda publicação. Publicidade e mercados ligados a esporte, lazer e exercício podem financiar atividades e facilitar circulação de produtos, mas consumo não é requisito universal para participar, nem aparência de um corpo comprova saúde, caráter ou competência. Eventos e obras esportivas também precisam de análise contextual. Promessas de legado não bastam: investigue custo total, manutenção, quem poderá usar o espaço, horários, acessibilidade, impactos e continuidade das atividades. Um projeto pode ter benefícios e problemas diferentes para grupos distintos; não se conclui que todo evento causa desenvolvimento ou que todo evento é necessariamente inútil. A Carta Internacional da UNESCO e seus materiais de Educação Física de qualidade destacam participação, inclusão, avaliação e condições de oferta; esses princípios ajudam a formular perguntas, sem substituir a apuração de um caso concreto. Na avaliação, defina objetivos verificáveis, acompanhe resultados e torne explícitos fontes, período e limites. Uma comparação de números antes e depois não isola sozinha todas as causas de mudança. Práticas comunitárias, escola, programas públicos e iniciativas privadas podem ser estudados quanto ao que fazem e a quem atendem, evitando usar o tipo de financiamento como prova suficiente de qualidade ou justiça.",
        "steps": [
          "Analise escolhas de linguagem e destaque, sem confundir imagem e prova de saúde ou valor.",
          "Separe publicidade, promessa e resultado verificável.",
          "Avalie custo total, manutenção, uso posterior e distribuição de oportunidades.",
          "Use evidências e acompanhamento para comparar objetivos, resultados e limites."
        ],
        "example": "Projeto hipotético: uma pista será entregue após um festival, mas o anúncio não informa manutenção, horários de abertura nem equipe de atividades. A pista pode ter uso social, porém a promessa ainda não prova continuidade ou acesso. Perguntar por plano, responsáveis e monitoramento permite uma análise melhor que apoiar ou rejeitar todo evento por princípio.",
        "pitfall": "Tomar visibilidade ou obra pronta como garantia de participação, usar aparência como diagnóstico ou aceitar dados inventados como pesquisa e conclusão de causalidade."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma turma investiga versões de um jogo de roda, conversa com participantes e adapta regras ao espaço e aos objetivos da aula. Qual interpretação relaciona melhor prática corporal e cultura?",
        "hint": "Considere significados, regras e aprendizagem sem opor esforço corporal e contexto social.",
        "solution": "C articula gestos, regras, memória e participação como dimensões culturais da experiência corporal. A reduz a análise ao gasto energético. B considera legítimo apenas o modelo federado. D trata cultura como imutável e ignora que adaptações podem ser discutidas com objetivos explícitos. O cenário não atribui origem histórica específica sem fonte.",
        "options": [
          "Somente o gasto energético importa, sem relevância de regras ou significados.",
          "A atividade só tem valor cultural se for modalidade de federação internacional.",
          "A prática reúne movimento, significados e regras que podem ser discutidos e contextualizados.",
          "Qualquer adaptação elimina necessariamente todo sentido cultural do jogo."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Uma oficina hipotética é gratuita. Pessoas interessadas relatam que o último ônibus parte antes do encerramento, dificultando seu retorno ao bairro. Qual análise é sustentada?",
        "hint": "Gratuidade e viabilidade de transporte são condições diferentes; leia o obstáculo efetivamente relatado.",
        "solution": "A identifica a barreira de horário e transporte sem negar que gratuidade ajude em outro aspecto. B presume que ausência de taxa resolva qualquer obstáculo. C atribui falta de interesse apesar do interesse relatado. D transforma uma situação específica em prova de incapacidade de todo um grupo. Investigar alternativas com participantes é compatível com o cenário.",
        "options": [
          "A gratuidade não elimina a barreira de horário e transporte relatada; é preciso investigar alternativas com o público.",
          "Ser gratuita garante automaticamente que qualquer pessoa consiga frequentar e voltar para casa.",
          "O problema demonstra ausência de interesse, independentemente do relato das pessoas.",
          "O obstáculo prova incapacidade natural de todos os moradores do bairro para a prática."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Um anúncio promete que um evento deixará uma instalação esportiva para uso coletivo, mas não informa manutenção, horários, acessibilidade nem acompanhamento posterior. Qual procedimento permite avaliar melhor a promessa de legado?",
        "hint": "Separe anúncio e evidência de uso contínuo; busque objetivos, responsabilidades e resultados verificáveis.",
        "solution": "D solicita os dados pertinentes para examinar continuidade e distribuição das oportunidades. A toma visibilidade como garantia. B conclui inutilidade de todo evento sem analisar o caso. C usa uma fotografia como prova de funcionamento permanente. Pedir plano e acompanhamento não determina previamente apoiar ou rejeitar a proposta, nem substitui sua avaliação concreta.",
        "options": [
          "Aceitar o legado como comprovado porque o evento terá divulgação.",
          "Concluir que nenhum evento esportivo pode produzir qualquer benefício.",
          "Considerar uma fotografia da instalação suficiente para provar uso contínuo de toda a comunidade.",
          "Examinar plano de uso, custos, manutenção, condições de acesso, responsáveis e acompanhamento dos resultados."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Força, movimento e energia",
    "objective": "Descrever movimento em um referencial, identificar forças e sistemas e resolver situações idealizadas com leis de Newton, trabalho, energia e potência, declarando condições e unidades.",
    "prerequisites": [
      "Operações com números e potências",
      "Conversões de unidades de comprimento e tempo",
      "Leitura de sentidos opostos e distinção entre massa e velocidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Posição, deslocamento e mudanças do movimento",
        "explanation": "Para descrever movimento, escolha um referencial: uma pessoa sentada pode estar em repouso em relação ao banco de um veículo e em movimento em relação à rua. Posição indica onde um corpo está nesse referencial; em uma linha orientada, deslocamento é posição final menos inicial. Distância percorrida soma os comprimentos do trajeto e não é sempre igual ao módulo do deslocamento. Se há ida e volta ao mesmo ponto, o deslocamento total pode ser zero mesmo com distância positiva. Velocidade média usa deslocamento dividido pelo intervalo de tempo; rapidez média usa distância percorrida pelo intervalo. Em uma dimensão, um sinal negativo informa sentido no eixo escolhido, não necessariamente diminuição da rapidez. Aceleração descreve mudança da velocidade por tempo, e não a própria velocidade; um objeto pode ter velocidade diferente de zero e aceleração zero. A direção da velocidade também importa: mudar de direção pode envolver aceleração mesmo sem mudar a rapidez. No SI, posição e distância são medidas em metros, tempo em segundos, velocidade em m/s e aceleração em m/s². Uma força é uma interação descrita por módulo, direção e sentido; não é sinônimo de velocidade nem uma quantidade que precisa estar sempre no sentido do movimento. Para estudar uma situação, separe o que foi informado sobre trajetória e tempo do que foi informado sobre forças. Um relato de movimento não identifica sozinho todas as interações que o produziram.",
        "steps": [
          "Declare o referencial e o sentido positivo antes de usar sinais.",
          "Separe posição final, deslocamento e distância total percorrida.",
          "Calcule razões com unidades e intervalos de tempo compatíveis.",
          "Distinga velocidade, mudança de velocidade e força."
        ],
        "example": "Exemplo original: em uma linha, alguém avança 8 m e retorna 3 m em um intervalo total de 5 s. A distância é 11 m, o deslocamento é +5 m, a rapidez média é 2,2 m/s e a velocidade média é +1 m/s. As duas médias respondem a perguntas diferentes e não informam a velocidade em cada instante.",
        "pitfall": "Dividir apenas o trecho de ida pelo tempo total, confundir retorno com distância negativa ou afirmar que aceleração zero exige velocidade zero."
      },
      {
        "level": "intermediate",
        "title": "Forças, corpo escolhido e leis de Newton",
        "explanation": "Nas situações clássicas descritas em um referencial inercial, a força resultante é a soma vetorial das forças que atuam sobre o corpo escolhido. Forças no mesmo eixo podem ser somadas com sinais definidos; em sentidos opostos, seus módulos não são simplesmente adicionados. A primeira lei relaciona resultante nula à manutenção de velocidade constante, incluindo repouso, e não à inexistência de qualquer força. Para massa constante, a segunda lei é F resultante = m×a; uma resultante não nula determina a direção e o sentido da aceleração, que podem diferir dos da velocidade. Massa é medida em kg, força em N e aceleração em m/s². O peso é a força gravitacional exercida sobre o corpo, com módulo mg no modelo próximo da superfície terrestre. A normal é força de contato perpendicular à superfície; seu módulo não é sempre mg, mas pode ser igual em uma mesa horizontal sem outras componentes verticais nem aceleração vertical. Na terceira lei, forças de uma mesma interação têm módulos iguais e sentidos opostos e atuam em corpos diferentes. Peso e normal sobre um mesmo bloco não são esse par. Se analisamos dois blocos juntos, a força de contato entre eles é interna; ao isolar um deles, ela precisa entrar em seu diagrama. Por isso a força aplicada ao conjunto não é automaticamente a força de contato. Declare ainda se atrito e resistência do ar são considerados; omiti-los de uma situação real sem autorização pode alterar o resultado.",
        "steps": [
          "Escolha o corpo ou conjunto e liste as forças externas correspondentes.",
          "Represente direções e sentidos, incluindo peso e contato quando pertinentes.",
          "Aplique a segunda lei com massa e unidades corretas.",
          "Para encontrar contato, isole um corpo sem confundir ação e reação no mesmo diagrama."
        ],
        "example": "Situação hipotética: um carrinho de 3 kg recebe 14 N horizontais para a direita e resistência de 2 N para a esquerda, com forças verticais equilibradas. A resultante horizontal é 12 N e a aceleração é 12/3 = 4 m/s² para a direita. A conta usa resultante, não apenas a força aplicada de 14 N.",
        "pitfall": "Tratar peso e normal como ação e reação, supor que normal sempre vale mg ou aplicar a força externa total a cada bloco como se agisse isoladamente sobre todos."
      },
      {
        "level": "advanced",
        "title": "Trabalho, energia mecânica e potência em modelos",
        "explanation": "Trabalho mecânico descreve transferência de energia associada à ação de uma força e ao deslocamento. Para uma força constante no mesmo eixo do deslocamento de uma partícula, W = F×d com sinais coerentes: mesmo sentido produz trabalho positivo, sentido oposto produz negativo; força perpendicular ao deslocamento realiza trabalho nulo nesse modelo. A forma geral para força constante usa o ângulo entre força e deslocamento, e não qualquer ângulo desenhado. A unidade de trabalho e energia é o joule, J. A energia cinética é K = mv²/2; dobrar a rapidez quadruplica K para a mesma massa. O teorema trabalho-energia relaciona a soma dos trabalhos à variação de K da partícula. A energia potencial gravitacional pertence à interação entre corpo e Terra; próximo da superfície, com g aproximadamente constante, sua variação é mg vezes a mudança de altura. O nível zero pode ser escolhido, mas deve ser mantido no balanço. Energia mecânica soma cinética e potenciais consideradas. Ela se conserva em modelos apropriados sem transferência líquida por processos dissipativos ou outras ações externas relevantes; energia total não é destruída quando energia mecânica diminui, podendo haver transferência e mudança de forma, como aumento de energia interna. Não se deve chamar o trabalho do atrito sempre negativo em qualquer sistema: o efeito depende do contato e do movimento considerados. Na subida vertical ideal sem ar, K diminui enquanto potencial aumenta; no ponto mais alto a velocidade é zero por um instante, mas a gravidade e a aceleração não são zero. Potência média é energia transferida ou trabalho dividido pelo tempo correspondente, medida em watts, J/s; não é uma quantidade de energia nem prova isolada de rendimento.",
        "steps": [
          "Defina o sistema, o nível de referência e as hipóteses do balanço.",
          "Separe trabalho, energia cinética e variação de energia potencial.",
          "Verifique se há dissipação ou outras transferências antes de conservar energia mecânica.",
          "Se houver tempo fornecido, calcule potência com unidade de energia por tempo."
        ],
        "example": "Exemplo original: um corpo de 2 kg cai do repouso por 5 m, sem ar, com g = 10 m/s². A redução da potencial é 100 J e o ganho de cinética é 100 J; 2×v²/2 = 100 leva a v = 10 m/s. Transferir 100 J em 4 s corresponderia a potência média de 25 W, mas o tempo dessa queda não foi declarado como 4 s.",
        "pitfall": "Confundir sinal do trabalho do peso e variação da potencial, afirmar ausência de gravidade no ponto mais alto ou confundir redução de energia mecânica com destruição de energia."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um bloco permanece em repouso sobre uma mesa horizontal em um referencial inercial. Sobre ele atuam apenas o peso e a força normal, com módulos iguais e sentidos verticais opostos. Qual conclusão é adequada?",
        "hint": "Equilíbrio de forças no mesmo corpo não significa ausência de forças nem caracteriza o par de ação e reação.",
        "solution": "B reconhece resultante zero e distingue o par de forças de uma interação, que atua em corpos diferentes. A nega forças explicitamente descritas. C chama peso e normal no mesmo bloco de ação e reação. D exige aceleração não nula apesar de resultante zero e repouso. A reação ao peso envolve a força gravitacional do bloco sobre a Terra, não a normal.",
        "options": [
          "Não existe qualquer força sobre o bloco, pois ele está em repouso.",
          "A resultante é nula, mas peso e normal não formam um par de ação e reação entre si.",
          "Peso e normal formam ação e reação porque atuam no mesmo corpo.",
          "O bloco deve acelerar verticalmente porque recebe duas forças."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Dois blocos A (6 kg) e B (4 kg) estão em contato sobre mesa horizontal sem atrito, com A à esquerda de B. Uma força horizontal de 50 N é aplicada somente em A para a direita, e ambos aceleram juntos. Qual é o módulo da força de contato que A exerce em B?",
        "hint": "Calcule a aceleração da massa conjunta e depois isole B, cuja única força horizontal é o contato de A.",
        "solution": "D usa massa total 6+4 = 10 kg e aceleração 50/10 = 5 m/s². Em B, a força de contato é 4×5 = 20 N. B, 30 N, é o módulo da resultante sobre A, não o contato solicitado. C confunde força aplicada ao conjunto com contato sobre B. A não corresponde à aplicação da segunda lei nas condições fornecidas. A reação de B sobre A tem 20 N para a esquerda.",
        "options": [
          "12 N.",
          "30 N.",
          "50 N.",
          "20 N."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Um objeto de 3 kg é lançado verticalmente para cima com velocidade inicial de 12 m/s. Após o lançamento, atua apenas o peso; despreze o ar, use um referencial inercial e g = 10 m/s² constante. Qual é a altura máxima acima do ponto de lançamento?",
        "hint": "No ponto mais alto a velocidade é zero. Igualar energia cinética inicial ao aumento da potencial permite calcular a altura sem exigir massa igual a 1 kg.",
        "solution": "A calcula K inicial = 3×12²/2 = 216 J e aumento de potencial = 3×10×h. Logo h = 216/30 = 7,2 m, ou v inicial²/(2g). B omite o fator 2 no denominador. C usa v/g, que tem unidade de tempo, não de altura. D divide mais uma vez por dois. No topo a velocidade zera momentaneamente, mas a aceleração gravitacional continua para baixo.",
        "options": [
          "7,2 m.",
          "14,4 m.",
          "1,2 m.",
          "3,6 m."
        ],
        "correctIndex": 0
      }
    ]
  }
];

export const authoredCurriculumBatch06ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Geometria e medidas",
    "contentSha256": "6d1937eccdbb774e751a353a01747bd70ee2d6f153fb07d85a3b00f0f48910d8",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem",
      "https://openstax.org/books/prealgebra-2e/pages/9-5-solve-geometry-applications-circles-and-irregular-figures",
      "https://openstax.org/books/prealgebra-2e/pages/9-6-solve-geometry-applications-volume-and-surface-area",
      "https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-1-the-rectangular-coordinate-systems-and-graphs",
      "https://glencoe.mheducation.com/sites/dl/free/0328887054/628391/qr_3_se_use_to_split_only.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Jardim 18×12 m com caminho externo 1 m: retângulo externo (18+2)×(12+2)=20×14=280 m²; interno=216 m²; diferença=64 m². Opção A (60) usa perímetro×largura omitindo 4 cantos (4 m²). Opção C (31) soma largura uma única vez por dimensão (19×13−216). Opção D (4) conta apenas os cantos. Gabarito B (64) está correto e distractores são explicados com precisão."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Cilindro r=3 cm, h=4 cm → V=36π cm³. Cone receptor R=6 cm, H=12 cm → capacidade=144π cm³ (sem transbordo). Por semelhança r/h=6/12=1/2 → r=h/2. Volume do cone de água: V=π(h/2)²h/3=πh³/12. Igualando a 36π: h³=432 → h=∛432≈7,5595→7,6 cm. Opção A (3,0) usa raio fixo 6 cm indevidamente. Opção B (6,0) é metade da altura mas dá volume 18π (metade do real). Opção C (12,0) assume cone cheio. Gabarito D (7,6) está correto."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Rotação 90° anti-horário na origem: (x,y)→(−y,x). C(5,9)→(−9,5). Translação por (4,−2): (−9+4, 5−2)=(−5,3). Opção A (−7,9) inverte a ordem (translada primeiro). Opção B (13,−7) usa rotação horária (y,−x). Opção D (−9,5) omite a translação. Gabarito C (−5,3) está correto e a explicação de cada distrator reflete o erro geométrico correspondente."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Leitura, inferência e interpretação textual",
    "contentSha256": "8b7bc8f8d0a4b6e608602de4b367043040ff1a31099378047f6002cee0c51caa",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_about_fiction/index.html",
      "https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/evaluation_during_reading.html",
      "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/research_and_evidence.html",
      "https://dt.dge.mec.pt/index.php?id=n476"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "O aviso original restringe inscrições a terça OU quinta (alternativas), horário 14h–17h, e exige comprovante. Opção A amplia para 'qualquer dia da semana'; B remove a exigência documental; C altera o horário para 8h–11h. Apenas D preserva todos os elementos: dois dias como alternativas, intervalo vespertino e documento. A paráfrase substitui 'em qualquer um desses dois dias' por 'na terça ou na quinta', mantendo a lógica disjuntiva."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "O contexto descreve atraso de duas horas e fila sem orientação; a fala 'Excelente organização! Nenhum problema à vista' contrasta frontalmente com a situação. A leitura literal (A) ignora as pistas contextuais. C inventa proposta de encerramento não mencionada. D atribui à usuária a criação da fila, fato ausente. B identifica corretamente a ironia como crítica sustentada pelo contraste entre enunciado elogioso e situação caótica, sem recorrer a marcas isoladas como aspas."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "O argumento hipotético extrai duas conclusões não suportadas: (1) causalidade exclusiva da oficina sem grupo de controle ou critérios de amostragem, (2) garantia de efeito idêntico em 'toda turma do país' a partir de 12 turmas voluntárias em uma cidade. A reconhece o aumento observado, mas aponta as duas extrapolações metodológicas. B inventa número mágico (13 turmas). C cria regra universal falsa ('sempre reduz a média'). D assume generalização nacional sem base. A avaliação respeita o alcance dos dados sem negar o resultado descrito."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Barroco e Arcadismo",
    "contentSha256": "39f6d1367e2fb913c181d595d14926e640f6d88e3227c27f6b37437a96f3c5f9",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://digital.bbm.usp.br/handle/bbm/4060",
      "https://bdlb.bn.gov.br/acervo/handle/20.500.12156.3/9996",
      "https://digital.bbm.usp.br/handle/bbm/8500",
      "https://digital.bbm.usp.br/handle/bbm/4606?locale=en",
      "https://digital.bbm.usp.br/handle/bbm/4357",
      "https://www.bbm.usp.br/pt-br/exposi%C3%A7%C3%B5es/200-livros-para-pensar-o-brasil/lista-completa-200-livros-para-pensar-o-brasil/",
      "https://bndigital.bn.gov.br/dossies/rede-da-memoria-virtual-brasileira/literatura/literatura-colonial/",
      "https://jornal.usp.br/cultura/para-entender-a-poesia-de-gregorio-de-matos-e-preciso-saber-quem-foi-ele/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Trecho I opõe glória/ruína (tensão por oposição/antítese); trecho II mostra pastor em locus amoenus preferindo descanso moderado (fugere urbem + aurea mediocritas). Opção C captura essa comparação sem atribuição histórica. A inverte os trechos. B comete falácia biográfica. D inventa autoria de Gregório de Matos."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Paráfrase didática define aurea mediocritas como 'vida suficiente e equilibrada, afastada da ostentação e ambição sem medida'. Opção A corresponde exatamente. B projeta sentido depreciativo moderno. C afirma o contrário. D extrai conclusão sociológica não sustentada pelo tópico literário."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Comentário hipotético propõe que envolvimento de Gonzaga na Inconfidência torna toda imagem pastoril código conspiratório. Opção D distingue corretamente: contexto biográfico orienta perguntas, mas não determina sentido automático sem evidências textuais. A universaliza biografia como prova única. B nega qualquer relevância contextual. C cria regra automática de exclusão política pela presença de pastor/natureza."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Coesão, coerência e progressão",
    "contentSha256": "830d9da8375d68c755a52987f2f4a99b20b7f293a29cb40527dd9b6d900919e5",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://owl.purdue.edu/owl/general_writing/mechanics/transitions_and_transitional_devices/index.html",
      "https://owl.purdue.edu/owl/general_writing/academic_writing/paragraphs_and_paragraphing/index.html",
      "https://owl.purdue.edu/owl/general_writing/the_writing_process/proofreading/steps_for_revising.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "O enunciado fixa que a oficina é de Lara; a opção B ('oficina de Lara') elimina a ambiguidade de 'sua' mantendo Lara como emissora e Célia como destinatária. A atribui a oficina a Célia, contradizendo a premissa. C inverte os papéis de quem avisa. D mantém o possessivo ambíguo. A resolução independe de preferência estilística: a repetição do nome próprio é o recurso padrão para desambiguar posse em português quando há dois possuidores possíveis."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "O parágrafo inicia com medida de ampliação (abrir aos sábados). A continuação pedida deve acrescentar limitação de acesso relacionada a essa medida, mantendo o foco. D introduz 'falta de transporte nesse dia' como entrave real, ligado ao tema acesso. A apenas repete a ampliação. B muda de assunto sem relação. C afirma eliminação total de barreiras, contradizendo a função de limitação e sem evidência. O conectivo 'Entretanto' sinaliza a concessão/limitação, mas a escolha decorre da relação semântica solicitada, não de regra formal."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "O texto original afirma 40 vagas e 60 inscrições e conclui que todos serão atendidos — conclusão inválida pois demanda > oferta. A preserva as quantidades (40 e 60), reconhece que a demanda excede a oferta e que os dados não garantem atendimento universal. B altera para 60 vagas, inventando ampliação não declarada. C altera para 40 inscrições, apagando o excesso. D mantém os números mas preserva a conclusão excessiva trocando apenas o conectivo ('assim'), sem corrigir a relação lógica. A restrição 'sem dados sobre ampliação ou desistências' impede inferir atendimento total."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Gêneros e textos multimodais",
    "contentSha256": "33ca5385e3b4a55de1664f361b88f01c724c099620070b620424845ee0b74a6e",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/writing-guide/pages/18-1-mixing-genres-and-modes",
      "https://openstax.org/books/writing-guide/pages/18-3-glance-at-genre-genre-audience-purpose-organization",
      "https://openstax.org/books/writing-guide/pages/17-3-glance-at-genre-relationship-between-image-and-rhetoric",
      "https://analysisfunction.civilservice.gov.uk/support/communicating-analysis/introduction-to-data-visualisation-e-learning/module-5-bar-charts/",
      "https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/evaluation_during_reading.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A descrição acessível fornece imagem (bicicleta junto à biblioteca) e texto em dois tamanhos: imperativos 'Leave the car at home. Ride with us on Sunday' e informação 'Meet by the library at 9 a.m.'. Opção B sintetiza corretamente o convite para pedalar no domingo com encontro às 9h junto à biblioteca. Opção A introduz venda de automóveis inexistente. Opção C substitui 'Sunday' por 'every day' e '9 a.m.' por '9 p.m.'. Opção D contradiz a presença de linguagem imperativa de convite no texto. O gabarito 1 (B) é inequivocamente correto e os distractores são bem fundamentados."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Dados: 18 de 30 respondentes preferiram manhãs → 18/30 = 60% (maioria, >50%). Legenda: 'Voluntary survey in one club, not a population estimate' restringe escopo aos respondentes daquele clube. Opção D: 'A majority of the thirty respondents preferred mornings, but the result is not a population estimate' — calcula corretamente 60%, usa 'majority' próprio (>50%), preserva 'thirty respondents' e incorpora limitação da legenda. Opção A generaliza para 'all people everywhere'. Opção B inverte numerador/denominador (30/18 > 100%). Opção C inventa causalidade 'caused higher performance' não medida. Gabarito 3 (D) é único que respeita dados e legenda."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Valores fornecidos: Week 1 = 40, Week 2 = 44. Aumento absoluto = 4; aumento percentual = 4/40 = 10%; razão final/inicial = 44/40 = 1,1 (não 2, logo não 'doubled'). Eixo vertical inicia em 38 (truncado), o que pode ampliar diferença visual entre barras sem alterar contagens reais. Manchete 'Participation doubled' é falsa segundo os dados. Opção C: 'Attendance rose by 10%; the truncated bar axis can magnify the visual difference, but the data do not show doubling' — cálculo correto, reconhece efeito de escala truncada, não atribui intenção ao autor. Opção A confunde +4 pessoas com +100%. Opção B toma altura visual como prova. Opção D afirma que eixo altera contagem real (44→80), absurdo. Gabarito 2 (C) é tecnicamente exato."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Diversidade cultural hispano-americana",
    "contentSha256": "bdfab1cd075b4d65c58b7d2d45c720a5fadd934fbe439a40a4925ff9467942f8",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.rae.es/dpd/seseo",
      "https://www.rae.es/dpd/voseo",
      "https://dle.rae.es/guagua",
      "https://www.inali.gob.mx/sitios/clin-inali/",
      "https://www.unesco.org/en/legal-affairs/unesco-universal-declaration-cultural-diversity"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "O enunciado 'En nuestra ciudad no existe una sola manera de celebrar. Algunas familias mantienen prácticas antiguas; otras las transforman y muchas combinan referências' usa quantificadores 'no existe una sola', 'algunas', 'otras', 'muchas' que delimitam o alcance à cidade e à diversidade interna. A opção C ('En la ciudad conviven prácticas distintas, conservadas, transformadas o combinadas') espelha exatamente essa leitura. A contradiz a negação inicial; B generaliza indevidamente para 'todos los países'; D impõe uma consequência (eliminação automática da cultura) que o texto não afirma."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "O diálogo 'La guagua sale de esta parada a las ocho. Compra el billete antes de subir; el trayecto hasta el centro dura veinte minutos' fornece cotexto de transporte: 'parada', 'billete', 'subir', 'trayecto', 'centro', 'minutos'. Esses itens léxicos selecionam a acepção de veículo coletivo (opção A). A opção B (bebê) é sentido atestado noutros contextos (ex.: 'canciones de cuna'), mas incompatível com as ações de comprar bilhete e fazer trajeto. C e D são semanticamente alheios. O texto não permite inferir nacionalidade dos falantes, conforme ensina a lição."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "O texto 'Aprender español no significa abandonar nuestra lengua. Queremos ampliar oportunidades y mantener la transmisión a los niños; para ello necesitamos materiales y participación de la comunidad' contém uma negação de equivalência ('no significa'), dois objetivos coordenados ('ampliar oportunidades' e 'mantener la transmisión') e uma condição declarada ('necesitamos materiales y participación'). A opção D captura a posição (compatibilizar) e seus limites (depende de apoio material e participação). A inverte a negação; B nega a condição explicitada; C transforma intenção condicional em garantia universal e eterna, o que o texto não sustenta."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Grandezas, unidades e análise dimensional",
    "contentSha256": "4861105efdbfa5ba2250d79e408a3b81840066db7c53da90192cf3a300f6cca4",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.bipm.org/en/publications/si-brochure",
      "https://openstax.org/books/university-physics-volume-1/pages/1-2-units-and-standards",
      "https://openstax.org/books/university-physics-volume-1/pages/1-3-unit-conversion",
      "https://openstax.org/books/university-physics-volume-1/pages/1-4-dimensional-analysis"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Velocidade: 54 km/h = 54×1000/3600 = 15 m/s correto. Área: 250 cm² = 250×(10⁻²)² = 250×10⁻⁴ = 0,025 m² correto. Opção B é a única com ambos valores certos; A erra área (fator linear), C erra velocidade (fator 10), D erra ambos."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "ρ = ML⁻³, g = LT⁻², h = L → ρgh = ML⁻³·LT⁻²·L = ML⁻¹T⁻². Pressão = força/área = MLT⁻²/L² = ML⁻¹T⁻². Opção D confere; A é força, B é energia, C tem expoente temporal errado (−1 em vez de −2)."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Numerador: 1000×0,30×0,020 = 6 kg·m⁻¹·s⁻¹. Denominador: 0,0010 Pa·s = 0,0010 kg·m⁻¹·s⁻¹. Quociente = 6000 adimensional. Opção C correta; A erra por 10³, B divide por 0,1, D mantém unidade indevida."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Química ambiental",
    "contentSha256": "0757d22c51870c12bf42a818a40cac9c4966aa1886a7815974a2b6e7de6a8495",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.usgs.gov/water-science-school/science/biochemical-oxygen-demand-bod-and-water",
      "https://www.epa.gov/acidrain/what-acid-rain",
      "https://www.epa.gov/ground-level-ozone-pollution/ground-level-ozone-basics",
      "https://www.epa.gov/ghgemissions/overview-greenhouse-gases",
      "https://www.noaa.gov/education/resource-collections/ocean-coasts/ocean-acidification",
      "https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh",
      "https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry",
      "https://www.cdc.gov/drinking-water/about/how-water-treatment-works.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Opção C é a única que distingue corretamente DBO (demanda de consumo em ensaio) de OD (oxigênio dissolvido disponível), admite que demanda elevada pode contribuir para baixo OD quando consumo excede reposição, e evita conclusão excessiva ao declarar que os dados não identificam sozinhos todas as fontes e substâncias. A trata DBO como reserva, B infere potabilidade de transparência, D atribui indústria e metal específicos sem base analítica."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Estequiometria da equação CaCO3 + 2H+ → Ca2+ + CO2 + H2O mostra 1 mol CaCO3 consumindo 2 mol H+. Para 0,20 mol H+, n(CaCO3)=0,10 mol; massa=0,10×100=10 g. Opção B usa razão 1:1 (20 g), C divide novamente por 2 (5 g, consumiria só 0,10 mol H+), D inverte a razão (0,20×2×100=40 g). Cálculo válido apenas no modelo idealizado."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Carga entrada = 500×80/1000 = 40 kg/d; carga saída = 500×20/1000 = 10 kg/d; remoção = 30 kg/d; eficiência = (40-10)/40×100 = 75%. Opção A reporta carga de saída (10 kg/d) e fração remanescente (25%). B acerta remoção mas usa 25% (fração de saída, não eficiência). C apresenta remoção 60 kg/d > carga de entrada (impossível). Balanço não prova destruição da matéria removida."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Bioquímica celular e biomoléculas",
    "contentSha256": "718e6944b36a3f8daef014453d9428e632d4c226ee7638a464b238b9287ee720",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/biology-2e/pages/2-2-water",
      "https://openstax.org/books/biology-2e/pages/3-2-carbohydrates",
      "https://openstax.org/books/biology-2e/pages/3-3-lipids",
      "https://openstax.org/books/biology-2e/pages/3-4-proteins",
      "https://openstax.org/books/biology-2e/pages/3-5-nucleic-acids",
      "https://openstax.org/books/biology-2e/pages/6-5-enzymes",
      "https://openstax.org/books/biology-2e/pages/7-2-glycolysis",
      "https://openstax.org/books/biology-2e/pages/7-4-oxidative-phosphorylation",
      "https://iubmb.qmul.ac.uk/kinetics/ek4t6.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A opção B afirma que diferentes ligações e organização podem alterar propriedades e reconhecimento enzimático mesmo com mesmo monossacarídeo, o que é bioquimicamente correto (α vs β-glicosídicas). A ignora estrutura tridimensional. C comete erro categorial (carboidratos ≠ proteínas). D assume hidrólise espontânea instantânea sem catálise, o que é falso."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Aplicando v = Vmax[S]/(Km+[S]) com Vmax=120, Km=2, [S]=6: v = 120×6/(2+6) = 720/8 = 90 µmol/min. A (60) seria válida só se [S]=Km. B (360) omite a soma no denominador (usa Vmax×[S]/Km). C (120) confunde velocidade limite com velocidade em [S] finita. Resultado 90 < Vmax, consistente."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Acoplamento 1:1 nas mesmas condições: ΔG_total = +15 + (−25) = −10 kJ/mol. Saldo negativo indica favorecimento termodinâmico no modelo, sem garantir velocidade. B soma módulos (+40) ignorando sinais. C inverte sinal (+10). D ignora a segunda transformação e o acoplamento declarado."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Tempo histórico, fontes e historiografia",
    "contentSha256": "b8432506188e005cc1c40c7caa7b4b86208e99a31438be0aa9f0c9e7eb2773f1",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.archives.gov/education/lessons/worksheets",
      "https://www.historians.org/resource/statement-on-standards-of-professional-conduct/",
      "https://www.historians.org/wp-content/uploads/2024/05/AP-Histories-Historical-Thinking-Skills.pdf",
      "https://www.persee.fr/doc/ahess_0395-2649_1958_num_13_4_2781",
      "https://www.historybenchmarks.ca/primary-source-evidence",
      "https://www.historybenchmarks.ca/continuity-and-change",
      "https://www.historybenchmarks.ca/historical-perspectives"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A opção C é a única que articula marco legal e processo social com ritmos diferentes, exigindo investigação contextual — coerente com a explicação básica sobre separação entre data da decisão e aplicação desigual. A assume causalidade imediata e universal da data; B descarta a relevância do marco cronológico; D comete falácia de generalização a partir de permanências parciais, ignorando coexistência de mudança e continuidade."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A opção A usa corretamente o livro de 1970 como fonte primária da historiografia daquela época, pois a pergunta atual investiga representações produzidas em 1970 — aplicação direta do princípio de que a função da fonte depende da pergunta. B e C impõem classificação fixa por antiguidade ou formato, contradizendo o texto. D dispensa crítica ao confundir publicação com neutralidade, violando o procedimento de exame de conceitos e contexto."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A opção D é o único procedimento que exige comparação sistemática de perguntas, fontes, argumentos e contraevidências antes de avaliar conclusões, alinhado à explicação avançada sobre pluralidade interpretativa não equivaler a validade automática. A escolhe por recência sem conferir fontes; B transforma anterioridade em autoridade irrevogável; C iguala explicações divergentes sem critério de evidência, abandonando a avaliação historiográfica."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Escalas e representações espaciais",
    "contentSha256": "f672c2707f9cc7dde22950bb127cc56c7d711c5f83dabd625be1c4e4301c8803",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://ftp.ibge.gov.br/Censos/Censo_Demografico_2010/metodologia/anexos/anexo_5_1_guia_ensmedio.pdf",
      "https://www.usgs.gov/educational-resources/map-projections-working-manual",
      "https://www.giss.nasa.gov/tools/gprojector/help/projections/",
      "https://learn.arcgis.com/en/projects/choose-the-right-projection/",
      "https://support.esri.com/en-us/gis-dictionary/modifiable-areal-unit-problem",
      "https://gistbok-ltb.ucgis.org/current/concept/FC-07-026"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Escala 1:200.000, segmento 4 cm: D = 4 × 200.000 = 800.000 cm. Conversão: 1 km = 100.000 cm → 800.000 / 100.000 = 8 km. Opção B (8 km) está correta. A (0,8 km) seria dividir por 1.000.000 em vez de 100.000; C (80 km) multiplicaria por 10; D (0,08 km) dividiria por 10.000.000. O enunciado especifica 'sem redimensionamento' e 'segmento reto', evitando confusão com trajeto ou tempo."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Área real = 16 cm² × 25.000² = 16 × 625.000.000 = 10.000.000.000 cm² = 1 km² (já que 1 km² = 10¹⁰ cm²). Ampliação uniforme 200% → fator linear k = 2. Nova escala: denominador n/k = 25.000/2 = 12.500 → 1:12.500. Área desenhada ampliada = 16 × k² = 16 × 4 = 64 cm². Verificação: 64 × 12.500² = 64 × 156.250.000 = 10.000.000.000 cm² = 1 km² (inalterada). Opção D coincide. A mantém escala antiga; B quadruplica indevidamente a área real, de 1 para 4 km²; C dobra denominador em vez de dividir."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Cenário: mesmos registros, mesmo período, agregação de 100 setores para 20 distritos (reunião de setores) → mudança de nível de agregação (efeito de escala do MAUP). Definições de variáveis iguais, correlação entre médias muda. Interpretação adequada: resultado sensível ao nível de agregação; médias de grupos não demonstram a mesma relação entre indivíduos (evita falácia ecológica). B confunde com zoom visual; C elege um nível como verdade universal; D comete falácia ecológica atribuindo comportamento de grupo a cada pessoa. Texto da seção avançada suporta explicitamente a opção A."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Racionalismo e empirismo",
    "contentSha256": "bc3060a41e88bee39f7d1982d20ec1107b14c9c57cbe6a757962018142fc0a34",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.earlymoderntexts.com/assets/pdfs/descartes1641_1.pdf",
      "https://www.earlymoderntexts.com/assets/pdfs/locke1690book1.pdf",
      "https://www.earlymoderntexts.com/assets/pdfs/locke1690book2_1.pdf",
      "https://www.earlymoderntexts.com/assets/pdfs/hume1748_1.pdf",
      "https://www.earlymoderntexts.com/assets/pdfs/leibniz1705book1.pdf",
      "https://openstax.org/books/introduction-philosophy/pages/7-3-justification"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Opção C é a única que captura a reflexão lockeana como experiência das operações mentais. A descreve inatismo (rejeitado por Locke), B nega a reflexão (contraria o enunciado), D confunde origem com garantia de verdade (não decorre da classificação). Índice 2 confirmado."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Opção A expressa o cogito: existência do pensante certa durante o ato de duvidar, mesmo sob hipótese de engano. B valida percepções externas (além do cogito), C nega existência do pensante (contradiz o argumento), D substitui certeza reflexiva por contagem empírica. Índice 0 confirmado."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Opção D identifica a circularidade humeana: usar sucessos passados para garantir o futuro pressupõe a continuidade que se quer provar. A afirma que repetição demonstra necessidade (o que Hume critica), B diz que previsões são falsas (Hume não nega expectativa prática), C confunde relações de ideias com previsões contingentes. Índice 3 confirmado."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Socialização, instituições e família",
    "contentSha256": "a5fa9bc581f7a29552af11e17a95fb2922cde545d70abb7930e4e355279d5476",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/introduction-sociology-3e/pages/5-1-theories-of-self-development",
      "https://openstax.org/books/introduction-sociology-3e/pages/5-3-agents-of-socialization",
      "https://openstax.org/books/introduction-sociology-3e/pages/5-4-socialization-across-the-life-course",
      "https://openstax.org/books/introduction-sociology-3e/pages/4-3-social-constructions-of-reality",
      "https://openstax.org/books/introduction-sociology-3e/pages/14-1-what-is-marriage-what-is-a-family",
      "https://openstax.org/books/introduction-sociology-3e/pages/14-2-variations-in-family-life",
      "https://link.springer.com/book/10.1057/9780230304680"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "O cenário descreve adolescentes em grupo informal aprendendo e negociando regras. A opção B capta socialização entre pares com participação ativa. A, C, D são posições que o texto refuta explicitamente: socialização não termina na infância, não exige organização formal, regras não são irreversíveis. A solução explica cada distrator corretamente."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Cenário situa duas ordens incompatíveis na mesma posição (coordenadora), mesmo horário, sem substituição ou remarcação. Isso é tensão de papel por definição didática do texto. A inventa posição familiar inexistente. B ignora que horários foram estabelecidos. C faz afirmação absurda. A solução resolve independentemente e justifica cada opção."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Participantes relatam cuidado de parentes em outros endereços e coabitação com não-parentes. Opção A segue o texto: explicitar critérios e investigar vínculos/práticas além da lista de moradores. B equipara família a domicílio (pitfall explícito). C presume parentesco por coabitação (pitfall). D salta de observação sociológica para conclusão jurídica (pitfall). Solução conferida e correta."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Artes visuais, música, dança e teatro",
    "contentSha256": "d5d274a9c590c30aff4f9e87878d0ea493a43323a19af6c5b7a2985ca2f3dd02",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.getty.edu/education/teachers/building_lessons/elements_art.pdf",
      "https://www.getty.edu/education/teachers/building_lessons/principles_design.pdf",
      "https://musictheory.pugetsound.edu/mt21c/The-Elements-of-Music.html",
      "https://www.elementsofdance.org/",
      "https://www.elementsofdance.org/space.html",
      "https://www.rsc.org.uk/about-us/how-we-make-theatre/costume",
      "https://www.rsc.org.uk/your-visit/access",
      "https://resource.download.wjec.co.uk/vtc/2015-16/15-16_26/eng/index.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "O enunciado fixa alturas, durações e instrumento idênticos, alterando apenas 'o som é mais forte'; portanto, o recurso explícito é dinâmica (intensidade). A confunde altura com intensidade; B altera duração declarada igual; D inventa troca de instrumento não ocorrida. A resolução independe de conhecimento externo, usando só o texto."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A descrição fornece diagonal (trajetória/espaço), pausa coletiva (tempo), retomada rápida (velocidade/tempo) e nível baixo (espaço); A articula exatamente esses elementos. B exige fala, não informada e não requisito de dança; C inventa dados sonoros (violino/tambor) inexistentes; D infere autoria comunitária apenas pelo número de intérpretes, conclusão não decorrente do texto."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "O caso relata: manteve narrador, converteu descrições de ambiente em objetos/luz, selecionou trechos. D reconhece reorganização de recursos com possível manutenção da narração. A afirma perda obrigatória de narrador, contradita pelo caso; B iguala seleção a transcrição integral, sem base; C julga qualidade superior apenas pelo uso de luz, inferência inválida. A análise usa só o procedimento descrito."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Práticas corporais e sociedade",
    "contentSha256": "e2a4b5531ae7d7ee8a0e750d1b7fb765f833639cd9b49d9a9f1293683b774a6e",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
      "https://www.unesco.org/en/quality-physical-education",
      "https://www.unesco.org/en/legal-affairs/international-charter-physical-education-physical-activity-and-sport",
      "https://www.unesco.org/en/articles/towards-victory-gender-equality",
      "https://www.olympics.com/ioc/gender-equality/portrayal-guidelines"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Opção C articula movimento, significados, regras, memória e participação como dimensões culturais discutíveis e contextualizáveis. A reduz a análise a gasto energético (reducionismo biológico). B legitima apenas modelo federado (essencialismo institucional). D trata adaptação como destruição necessária de sentido cultural (cultura como imutável). Gabarito 2 está correto e distractores mapeiam conceitos do pitfall da seção basic."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Opção A identifica barreira de horário e transporte sem negar que gratuidade ajude em outro aspecto — leitura fiel do cenário. B presume que ausência de taxa resolva qualquer obstáculo (igualdade formal ≠ equidade). C atribui falta de interesse apesar do relato explícito de interesse (desconsidera evidência). D transforma obstáculo situacional em prova de incapacidade natural de todo grupo (essencialismo biológico). Gabarito 0 está correto."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Opção D solicita dados pertinentes para examinar continuidade e distribuição de oportunidades (plano, custos, manutenção, acesso, responsáveis, acompanhamento). A toma visibilidade/divulgação como garantia de legado. B conclui inutilidade universal de todo evento sem analisar o caso. C usa fotografia como prova de funcionamento permanente e universal. Gabarito 3 está correto e distractores correspondem ao pitfall da seção advanced."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Força, movimento e energia",
    "contentSha256": "dbf292255962114cb5e2e207c4a9aff68d64c04a5d5cee522db74846537a91bf",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/college-physics-2e/pages/2-1-displacement",
      "https://openstax.org/books/college-physics-2e/pages/2-2-vectors-scalars-and-coordinate-systems",
      "https://openstax.org/books/college-physics-2e/pages/4-3-newtons-second-law-of-motion-concept-of-a-system",
      "https://openstax.org/books/college-physics-2e/pages/4-4-newtons-third-law-of-motion-symmetry-in-forces",
      "https://openstax.org/books/college-physics-2e/pages/7-2-kinetic-energy-and-the-work-energy-theorem",
      "https://openstax.org/books/college-physics-2e/pages/7-3-gravitational-potential-energy",
      "https://openstax.org/books/college-physics-2e/pages/7-7-power"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Bloco em repouso sobre mesa: forças são peso (Terra-bloco) e normal (mesa-bloco). Resultante nula (equilíbrio), mas peso e normal atuam no mesmo corpo → não são par ação-reação (3ª lei exige corpos diferentes). A reação ao peso é a força gravitacional do bloco sobre a Terra. Opção B é a única correta; A nega forças existentes, C confunde 3ª lei, D ignora resultante nula."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Sistema A+B: massa total 10 kg, F=50 N → a = 5 m/s². Isolando B (4 kg), única força horizontal é contato de A → F_contato = m_B·a = 4×5 = 20 N. Opção D correta. B (30 N) é resultante sobre A (6×5), não contato. C (50 N) é força externa no conjunto. A (12 N) não decorre da 2ª lei nas condições dadas."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Lançamento vertical: K_inicial = ½·3·12² = 216 J. No topo v=0 → toda K vira U: mgh = 216 → h = 216/(3·10) = 7,2 m. Equivalentemente h = v₀²/(2g) = 144/20 = 7,2 m. B (14,4 m) omite fator 2 no denominador (v₀²/g). C (1,2 m) usa v₀/g (unidade de tempo). D (3,6 m) divide por 2 novamente (v₀²/4g)."
      }
    ]
  }
] as const;
