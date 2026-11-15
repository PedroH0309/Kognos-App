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
  }
] as const;
