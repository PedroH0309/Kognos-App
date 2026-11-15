import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch12:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Produtos notáveis e fatoração",
    "objective": "Expandir produtos notáveis e fatorar expressões por fator comum, agrupamento, quadrados e cubos, verificando identidades pela distributiva e preservando restrições em simplificações racionais.",
    "prerequisites": [
      "Distributiva e operações com monômios",
      "Potências de números reais",
      "Denominadores não nulos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Produtos notáveis pela distributiva",
        "explanation": "Um produto notável é uma multiplicação com estrutura recorrente que pode ser reconhecida e justificada pela distributiva. Para números reais a e b, (a+b)^2 = a^2+2ab+b^2, pois (a+b)(a+b) gera a^2, ab, ba e b^2. Os dois produtos mistos se somam. Analogamente, (a-b)^2 = a^2-2ab+b^2: o último termo é positivo porque resulta de (-b)(-b). Já (a+b)(a-b) = a^2-b^2, uma vez que os termos mistos se cancelam. Não confunda quadrado de uma diferença com diferença de quadrados. Na leitura das fórmulas, a e b podem representar monômios ou expressões inteiras; é preciso identificar o bloco completo. Por exemplo, elevar um coeficiente ao quadrado e esquecer a variável ou o termo misto produz outra expressão. O cubo da soma é (a+b)^3 = a^3+3a^2b+3ab^2+b^3; o cubo da diferença tem sinais alternados: (a-b)^3 = a^3-3a^2b+3ab^2-b^3. Essas identidades podem ser obtidas multiplicando o quadrado pelo mesmo binômio. Uma substituição numérica pode detectar um erro, mas confirmar alguns valores não demonstra uma identidade para todos os reais. A distributiva fornece a justificativa geral. Antes de memorizar sinais, acompanhe de onde vêm cada potência e cada produto misto.",
        "steps": [
          "Identifique os dois blocos e a operação entre eles.",
          "Use a distributiva para justificar os termos mistos.",
          "Calcule sinais, coeficientes e potências de cada termo.",
          "Confira se a forma final corresponde à estrutura original."
        ],
        "example": "Exemplo autoral: (2t+7)^2 = (2t)^2+2·(2t)·7+7^2 = 4t^2+28t+49. Para t=1, ambos os lados valem 81, o que serve de conferência pontual; a validade geral vem da distributiva. O termo 28t não pode ser omitido só porque há um quadrado envolvendo uma soma.",
        "pitfall": "Distribuir indevidamente a potência sobre uma soma, como se (a+b)^2 fosse sempre a^2+b^2, ou perder o sinal positivo de b^2 no quadrado da diferença."
      },
      {
        "level": "intermediate",
        "title": "Fator comum, agrupamento e padrões quadráticos",
        "explanation": "Fatorar é escrever uma soma algébrica como produto de fatores, preservando seu valor. A distributiva funciona no sentido inverso: ac+bc = c(a+b). Procure primeiro fatores numéricos e variáveis comuns a todos os termos. Em polinômios, o expoente comum de uma variável é o menor entre os termos em que ela precisa estar presente. Retirar um fator exige dividir cada parcela por ele; uma parcela não desaparece sem deixar seu quociente. Quando não há fator comum global útil, agrupar termos pode produzir um fator binomial comum. É necessário que os grupos deixem exatamente o mesmo bloco, podendo retirar um sinal negativo quando apropriado. Nem toda soma de quatro termos admite uma fatoração simples por qualquer agrupamento. Reconhecer diferença de quadrados e trinômio quadrado perfeito amplia as estratégias: a^2-b^2 = (a-b)(a+b), e a^2±2ab+b^2 = (a±b)^2. Para ser quadrado perfeito, não basta que os extremos sejam quadrados: o termo central deve ser o dobro do produto das bases, com o sinal adequado. Também pode ser preciso combinar métodos, retirando fator comum antes de identificar um padrão. O conjunto de coeficientes importa: x^2+1 não tem fatores lineares reais, embora tenha uma fatoração no conjunto complexo. Aqui trabalhamos sobre os reais, e conferir a expansão dos fatores é uma maneira direta de validar a igualdade.",
        "steps": [
          "Procure fator comum em todas as parcelas.",
          "Teste agrupamentos que produzam um bloco comum.",
          "Reconheça diferença de quadrados ou trinômio quadrado perfeito.",
          "Expanda os fatores obtidos e compare todos os coeficientes."
        ],
        "example": "Exemplo autoral: 8a^2-18 = 2(4a^2-9) = 2(2a-3)(2a+3). Primeiro sai o fator comum 2; depois aparece diferença de quadrados. Multiplicar os fatores devolve 8a^2-18. A soma 4a^2+9 não poderia receber a mesma fatoração real, pois (2a-3)(2a+3) produz uma diferença.",
        "pitfall": "Reconhecer apenas os extremos de um trinômio e ignorar o termo central ou aplicar a fórmula da diferença de quadrados a uma soma."
      },
      {
        "level": "advanced",
        "title": "Cubos e simplificação com domínio",
        "explanation": "As identidades de cubos também permitem fatorar: a^3-b^3 = (a-b)(a^2+ab+b^2) e a^3+b^3 = (a+b)(a^2-ab+b^2). Multiplicar os fatores mostra o cancelamento dos termos mistos. Essas formas não são o cubo de um binômio: (a-b)^3 contém quatro termos antes da redução, enquanto a^3-b^3 é uma diferença de dois cubos. Verifique se ambos os termos são realmente cubos e se algum fator comum deve ser retirado antes. A fatoração ajuda a simplificar frações algébricas, mas o cancelamento só vale entre fatores multiplicativos não nulos. Não é válido cortar parcelas de uma soma apenas por apresentarem a mesma letra. Antes de transformar uma fração, registre os zeros do denominador original. Se um fator for cancelado, esses valores continuam fora do domínio original: a forma reduzida pode ser definida em pontos nos quais a expressão inicial não era. Assim, igualdade de expressões deve ser enunciada no domínio em que as operações usadas são válidas. Quando uma questão envolve resolver uma equação racional, candidatos encontrados depois de multiplicar ou cancelar fatores precisam respeitar as restrições iniciais. Fatoração não cria autorização para dividir por zero. Uma boa resolução mostra o padrão reconhecido, a fatoração, os cancelamentos justificados e as exclusões que acompanham a forma final.",
        "steps": [
          "Diferencie soma de cubos, diferença de cubos e cubo de binômio.",
          "Registre zeros do denominador antes de simplificar.",
          "Fatore numerador e denominador e cancele somente fatores não nulos.",
          "Mantenha as exclusões originais junto à expressão reduzida."
        ],
        "example": "Exemplo autoral: u^3+64 = u^3+4^3 = (u+4)(u^2-4u+16). A expansão cancela -4u^2 com 4u^2 e 16u com -16u, deixando u^3+64. A fatoração é identidade para todo u real e não deve ser confundida com (u+4)^3, que teria termos mistos.",
        "pitfall": "Cancelar termos de uma soma ou reintroduzir no domínio um valor que anulava o denominador original depois de remover um fator."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Exercício autoral: para x real, qual polinômio é identicamente igual a (3x - 4)^2?",
        "hint": "Multiplique (3x - 4) por si mesmo e reúna os dois produtos mistos antes de escolher.",
        "options": [
          "9x^2 + 16.",
          "9x^2 - 12x + 16.",
          "9x^2 - 24x + 16.",
          "9x^2 - 16."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: (3x)^2 - 2·(3x)·4 + 4^2 = 9x^2 - 24x + 16. A omite o termo misto; B apresenta -12x em vez da soma dos dois produtos -12x; D é uma diferença de quadrados, não o quadrado da diferença. A distributiva demonstra a identidade para todo x real."
      },
      {
        "level": "intermediate",
        "prompt": "Exercício autoral: qual produto é identicamente igual a 6x^2 + 15x + 4xy + 10y para todos os reais x e y?",
        "hint": "Agrupe as duas primeiras parcelas e as duas últimas e procure o mesmo fator binomial.",
        "options": [
          "(3x + 2y)(2x + 5).",
          "(3x + 2y)(2x - 5).",
          "(3x + 2y)(2x + 10).",
          "(3x + y)(2x + 5)."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: 3x(2x+5) + 2y(2x+5) = (3x+2y)(2x+5). Expandir produz exatamente 6x^2+15x+4xy+10y. B troca os sinais dos termos com 5; C produz 30x e 20y; D produz 2xy e 5y. Portanto, as outras expressões não são identidades iguais ao polinômio dado, embora possam coincidir em valores particulares."
      },
      {
        "level": "advanced",
        "prompt": "Exercício autoral: simplifique (x^3 - 125)/(x^2 - 25) para x real, preservando o domínio da expressão original. Qual resultado é correto?",
        "hint": "Use diferença de cubos no numerador e diferença de quadrados no denominador; registre ambas as exclusões antes de cancelar.",
        "options": [
          "(x^2 + 5x + 25)/(x + 5), com apenas x ≠ -5.",
          "(x^2 + 5x + 25)/(x + 5), com x ≠ 5 e x ≠ -5.",
          "x - 5, com x ≠ 5 e x ≠ -5.",
          "(x^2 - 5x + 25)/(x - 5), com x ≠ 5 e x ≠ -5."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: x^3-125 = (x-5)(x^2+5x+25) e x^2-25 = (x-5)(x+5). Cancelar x-5 é válido no domínio original, que exclui 5 e -5. A perde a exclusão de 5; C não resulta dessas fatorações; D usa sinais e denominador de outro padrão. A expressão reduzida não torna a fração original definida em x=5."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Sintaxe da oração e do período",
    "objective": "Analisar funções sintáticas e relações de coordenação e subordinação, distinguindo locuções verbais, sujeitos e complementos e relacionando estrutura, pontuação e sentido na gramática escolar brasileira.",
    "prerequisites": [
      "Classes de palavras",
      "Verbos e formas nominais",
      "Leitura contextual de enunciados"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Oração, sujeito, predicado e complementos",
        "explanation": "Na análise escolar, uma oração se organiza em torno de um verbo ou locução verbal; não precisa comunicar um pensamento completo sozinha, pois pode integrar outra construção. Período simples contém uma oração, e período composto contém mais de uma. Contar palavras com forma verbal não basta: auxiliar e verbo principal podem formar uma unidade, como numa locução de voz passiva. O sujeito se relaciona sintaticamente com o predicado e não deve ser definido apenas como quem pratica a ação. Na voz passiva, pode designar quem recebe o processo. Sua posição também varia: um sujeito depois do verbo continua sendo sujeito. Há sujeito expresso, sujeito recuperável pela flexão ou pelo contexto, sujeito indeterminado e oração sem sujeito, conforme a construção. Haver no sentido de existir é impessoal na norma-padrão e não seleciona sujeito; não se trata apenas de um sujeito que ficou escondido. Predicado não é sinônimo de predicativo: predicativo atribui uma característica ao sujeito ou ao objeto, enquanto o predicado é uma unidade maior. Na análise tradicional, objetos completam verbos; o objeto direto não exige preposição e o indireto é regido por ela, sem que toda expressão preposicionada seja objeto indireto. Complemento nominal se liga a nome, adjetivo ou advérbio; adjuntos especificam nomes ou circunstâncias. Aposto pode explicar um termo, e vocativo chama um interlocutor sem funcionar por isso como sujeito. Examine relações, e não apenas a aparência das palavras.",
        "steps": [
          "Localize os núcleos verbais e reconheça locuções.",
          "Identifique sujeito e predicado sem confundir posição e função.",
          "Relacione complementos ao verbo ou ao nome que os seleciona.",
          "Diferencie predicativo, adjuntos, aposto e vocativo pela construção."
        ],
        "example": "Exemplo autoral: Em Aline entregou o mapa ao guia, Aline é sujeito, o mapa é objeto direto e ao guia é objeto indireto, na análise tradicional. Em O mapa foi entregue por Aline, o mapa passa a sujeito paciente e por Aline indica o agente da passiva. A função sujeito não pode ser reduzida a praticar uma ação.",
        "pitfall": "Tomar qualquer nome antes do verbo como sujeito, confundir sujeito paciente e objeto ou chamar predicado inteiro de predicativo."
      },
      {
        "level": "intermediate",
        "title": "Coordenação e funções das subordinadas",
        "explanation": "No período composto, coordenação articula orações sem que uma desempenhe função sintática interna na outra. Isso não elimina as relações de sentido entre elas. A classificação tradicional distingue coordenadas assindéticas, sem conjunção, e sindéticas aditivas, adversativas, alternativas, conclusivas e explicativas. Um conectivo deve ser examinado em contexto: decorar uma lista não determina todas as suas leituras. Na subordinação, uma oração se integra a uma estrutura maior, desempenhando função substantiva, adjetiva ou adverbial. Subordinadas substantivas podem funcionar como sujeito, objetos, complemento nominal, predicativo ou aposto. Muitas são introduzidas por que ou se integrantes; substituir por isso é uma pista em casos adequados, não prova que qualquer que seja conjunção integrante. As adjetivas relativas caracterizam um antecedente, e o relativo também exerce função dentro da subordinada. As adverbiais expressam relações como tempo, causa, condição, concessão, finalidade, consequência, comparação, conformidade ou proporção. Causa não é sinônimo de consequência: uma apresenta o motivo; a outra, o resultado. Concessão contrapõe um obstáculo a um fato sem impedir necessariamente sua realização. A análise combina núcleo verbal, ligação e função; uma oração não deixa de ser subordinada só porque pode ser eliminada deixando uma frase aceitável. É importante separar dependência sintática e possibilidade de compreender isoladamente algumas palavras.",
        "steps": [
          "Delimite orações considerando núcleos e locuções verbais.",
          "Verifique se uma oração exerce função na estrutura maior.",
          "Identifique a relação de sentido e a classificação escolar adequada.",
          "Confira o conectivo no contexto, sem decidir apenas por uma palavra."
        ],
        "example": "Exemplo autoral: A equipe revisou o roteiro, mas adiou a gravação articula oposição por coordenação adversativa. Em A equipe adiou a gravação porque o estúdio fechou, a oração iniciada por porque apresenta a causa do adiamento. O conectivo e a estrutura sustentam a análise, sem transformar toda explicação possível numa única categoria automática.",
        "pitfall": "Afirmar que coordenadas não têm relação de sentido ou classificar uma oração apenas pelo conectivo, ignorando sua função e o contexto."
      },
      {
        "level": "advanced",
        "title": "Períodos mistos, relativas e pontuação",
        "explanation": "Um período pode combinar coordenação e subordinação. A classificação é relacional: uma oração pode servir de base a uma subordinada e estar coordenada com outra. Desenhar mentalmente os encaixes ajuda a não chamar toda a sequência de uma única oração. Orações reduzidas apresentam verbo em forma nominal, como infinitivo, gerúndio ou particípio, e podem ter funções equivalentes às desenvolvidas. Nem toda forma nominal abre uma oração independente, pois é preciso distinguir uma locução verbal de uma estrutura encaixada. Na gramática escolar brasileira, a relativa adjetiva restritiva delimita o conjunto referido pelo antecedente e se integra a ele sem vírgulas de isolamento. A explicativa acrescenta informação sobre um referente apresentado como identificado e é isolada por vírgulas. A mudança pode alterar o sentido, mas não autoriza descobrir um número exato de pessoas ou objetos quando o contexto não o fornece. Pontuação não é simples transcrição de pausas: observe relações sintáticas. Não se separa sujeito e verbo ou verbo e complemento por uma vírgula arbitrária; trechos intercalados podem exigir pares de sinais que devem ser reconhecidos como tais. Antepor uma adverbial desenvolvida costuma exigir vírgula para marcar sua delimitação. Na revisão de um período longo, localize o núcleo principal, os encaixes e as coordenações e então confira a referência dos pronomes e a relação de sentido. As nomenclaturas podem variar entre tradições gramaticais; aqui usamos a terminologia escolar brasileira e exemplos sem depender de disputas classificatórias marginais.",
        "steps": [
          "Mapeie quais orações se coordenam e quais se encaixam.",
          "Distinga locução verbal de oração com forma nominal.",
          "Compare restrição e informação explicativa nas relativas.",
          "Revise pontuação e referência preservando o sentido pretendido."
        ],
        "example": "Exemplo autoral: As caixas que têm etiqueta serão abertas delimita as caixas pelo critério da etiqueta. Em As caixas, que têm etiqueta, serão abertas, a relativa apresenta uma informação adicional sobre as caixas já referidas. As frases não informam sozinhas a quantidade total de caixas; esse número dependeria de outro dado do contexto.",
        "pitfall": "Transformar diferença entre restritiva e explicativa em contagem obrigatória de referentes ou tratar toda forma verbal como nova oração, inclusive dentro de locução."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Enunciado autoral: Os avisos foram enviados pela secretaria. Na análise escolar, qual identificação está correta?",
        "hint": "Observe quem recebe o processo na voz passiva e trate foram enviados como unidade verbal, em vez de contar palavras isoladas.",
        "options": [
          "Pela secretaria é sujeito; os avisos é agente da passiva.",
          "Foram é sujeito e enviados é objeto direto.",
          "Os avisos é objeto direto porque não pratica a ação.",
          "Os avisos é sujeito paciente; foram enviados forma locução verbal numa oração."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: os avisos é sujeito paciente, e foram enviados forma a locução da passiva, em uma oração. Pela secretaria expressa o agente da passiva, não o sujeito. A inverte funções; B atribui funções nominais indevidas às formas verbais; C define sujeito apenas pela ação e ignora a construção passiva. A função não depende de a entidade ser agente."
      },
      {
        "level": "intermediate",
        "prompt": "Frase autoral: Espero que a equipe retorne. Qual função a oração que a equipe retorne exerce em relação a espero, na análise tradicional?",
        "hint": "Verifique se o trecho completa o verbo e se seria possível substituí-lo por isso sem preposição exigida.",
        "options": [
          "Oração adjetiva que modifica o substantivo equipe como antecedente externo.",
          "Oração subordinada substantiva objetiva direta, completando espero.",
          "Oração coordenada alternativa, marcada por uma escolha entre duas ações.",
          "Oração subordinada adverbial causal, apresentando o motivo de uma volta já comprovada."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: espero seleciona o conteúdo expresso pela oração, que pode ser retomado em Espero isso; trata-se de subordinada substantiva objetiva direta. A toma equipe, que está dentro da subordinada, como antecedente externo; C inventa alternativa; D confunde conteúdo esperado e causa. A frase não afirma que a volta já ocorreu."
      },
      {
        "level": "advanced",
        "prompt": "Período autoral: Quando a biblioteca abriu, Joana entrou e escolheu um livro. Qual análise descreve a organização das orações?",
        "hint": "Conte os núcleos abriu, entrou e escolheu; examine a relação introduzida por quando e a ligação entre as duas ações de Joana.",
        "options": [
          "Três orações: uma subordinada adverbial temporal e duas articuladas por coordenação aditiva, combinando subordinação e coordenação.",
          "Uma oração, porque todas as ações aparecem dentro de um único período.",
          "Duas orações, porque quando e e são verbos auxiliares da mesma locução.",
          "Três orações exclusivamente coordenadas adversativas, pois quando indica oposição."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: abriu, entrou e escolheu organizam três orações. Quando a biblioteca abriu tem valor temporal em relação à sequência; Joana entrou e escolheu um livro articula duas ações por coordenação aditiva. B confunde período e oração; C chama conectivos de verbos e inventa locução; D ignora a subordinação temporal e atribui oposição indevida."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Literatura brasileira contemporânea",
    "objective": "Ler a pluralidade da literatura brasileira contemporânea relacionando procedimentos de prosa e poesia, memória, representação e circulação, sem tratar o período como escola única nem confundir voz textual e autoria.",
    "prerequisites": [
      "Narrador, personagem e eu lírico",
      "Gêneros literários",
      "Relações entre texto e contexto"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Contemporâneo: pluralidade e recortes históricos",
        "explanation": "Literatura brasileira contemporânea não designa uma escola única com manifesto e características obrigatórias. O termo depende do recorte crítico: pode abranger processos da segunda metade do século XX e da produção mais recente, com limites discutidos e permanências de tradições anteriores. Indicar o recorte é mais preciso que fixar uma data universal para toda obra. Romance, conto, crônica, poesia e formas híbridas coexistem; vida urbana, memória, desigualdade, experiências íntimas e questões de pertencimento podem receber tratamentos diferentes. Ser recente não significa obrigatoriamente usar internet, verso livre ou narrador em primeira pessoa. Autores que escrevem no mesmo período não formam por isso um grupo homogêneo. Quarto de despejo, de Carolina Maria de Jesus, publicado em 1960, articula escrita de diário e experiência social; sua obra não se reduz a esse livro nem a simples documento sem elaboração. Feliz ano novo, coletânea de contos de Rubem Fonseca lançada em 1975, permite discutir prosa urbana e tensões sociais. Ponciá Vicêncio, romance de Conceição Evaristo de 2003, e Olhos d’água, contos de 2014, integram outra trajetória, na qual memória e experiência negra têm importância. Essas referências não esgotam o campo nem oferecem um molde aplicável a cada texto. Uma boa leitura parte da forma efetiva da obra e situa seu contexto sem reduzir literatura à biografia ou a uma lista de temas.",
        "steps": [
          "Explicite o recorte histórico usado para contemporâneo.",
          "Identifique gênero e procedimentos efetivos do texto.",
          "Relacione obra e contexto sem impor um padrão único.",
          "Diferencie exemplos de trajetórias e inventário completo do campo."
        ],
        "example": "Situação autoral de estudo: um catálogo fictício reúne um conto urbano em terceira pessoa e um poema sobre memória familiar. Os textos podem dialogar com questões contemporâneas sem ter o mesmo narrador, gênero ou programa estético. Comparar suas escolhas produz uma leitura mais precisa que procurar uma característica obrigatória para toda a época.",
        "pitfall": "Classificar toda produção contemporânea como um único movimento ou transformar a data de publicação em prova de uma técnica narrativa obrigatória."
      },
      {
        "level": "intermediate",
        "title": "Procedimentos de prosa e poesia",
        "explanation": "Na prosa, observe quem narra, de que posição conhece os acontecimentos e como organiza o tempo. Primeira pessoa não prova autobiografia, e terceira pessoa não garante conhecimento ilimitado nem neutralidade. Cortes temporais, fragmentos, alternância de vozes e mistura de registros podem produzir efeitos, mas não aparecem obrigatoriamente em toda obra contemporânea. Um narrador pode revelar limites e contradições; compreender uma fala de personagem não significa atribuí-la automaticamente como opinião do autor. Na poesia, examine ritmo, som, disposição, imagens e modos de enunciação. Verso livre não equivale a ausência de trabalho formal, e falar do cotidiano não elimina ambiguidades e escolhas de linguagem. Parte da poesia marginal dos anos 1970 articulou produção artesanal e circulação independente, com o mimeógrafo como um dos meios importantes. A antologia 26 poetas hoje, organizada por Heloisa Buarque de Hollanda em 1976, ajudou a reunir parte dessa produção. Marginal, nesse contexto histórico, se refere também a relações com circuitos editoriais; não é sinônimo automático de escrita sem valor ou de toda literatura periférica posterior. Livros artesanais, editoras, jornais, saraus e suportes digitais oferecem condições de encontro com leitores, sem determinar sozinhos o valor de uma obra. Para interpretar, descreva um recurso concreto, mostre onde ele aparece e explique seu efeito no conjunto, em vez de aplicar um rótulo solto.",
        "steps": [
          "Identifique voz, perspectiva e organização temporal.",
          "Descreva recursos de ritmo, imagem e linguagem na poesia.",
          "Relacione suporte e circulação sem reduzir o texto ao meio.",
          "Sustente cada efeito interpretado por elementos apresentados."
        ],
        "example": "Microtexto autoral fictício: Na primeira página, a personagem já saiu da cidade. Na segunda, retorna a lembrança da véspera, quando ainda arrumava a mala. A ordem do relato não coincide com a cronologia dos acontecimentos. O recuo temporal precisa ser interpretado no conjunto e não prova que toda narrativa contemporânea seja fragmentada.",
        "pitfall": "Confundir narrador e autor ou dizer que versos livres e circulação artesanal dispensam elaboração estética."
      },
      {
        "level": "advanced",
        "title": "Memória, representação e legitimidade",
        "explanation": "A análise de representação pergunta quem fala, quem é visto, quais perspectivas recebem espaço e como se constroem as personagens. O acesso a editoras, crítica, ensino e espaços de circulação não foi distribuído de modo igual; discutir reconhecimento não implica reduzir qualidade literária a origem social ou identidade. Escritas de mulheres, pessoas negras, indígenas e de diferentes regiões e experiências ampliam perguntas sobre o campo, sem formar uma voz única de cada grupo. Conceição Evaristo formula a escrevivência em relação à experiência, memória e dimensão coletiva da escrita negra, especialmente de mulheres; não se trata de chamar qualquer primeira pessoa de escrevivência nem de negar invenção e trabalho literário. A presença de experiência vivida não exige equivalência literal entre autora, narradora e personagem em toda obra. Também importa observar mediações editoriais: seleção, títulos, paratextos e recepção participam da circulação, como mostram discussões sobre os manuscritos e as edições de Carolina Maria de Jesus. Não é preciso supor que toda edição falsifique uma obra; examine cada processo e suas evidências. Uma interpretação crítica pode reconhecer dimensão social e ao mesmo tempo analisar linguagem, estrutura e ponto de vista. Ao comparar textos, preserve diferenças e evite usar uma personagem como representante de todas as pessoas de um grupo. Os fragmentos desta aula são inteiramente próprios e fictícios: não são citações, imitações de estilo nem amostras documentais de uma escritora real.",
        "steps": [
          "Examine posição de fala e construção das personagens.",
          "Relacione experiência, invenção e trabalho de linguagem.",
          "Investigue circulação e mediações sem pressupor conclusões universais.",
          "Evite generalizar a partir de uma personagem ou atribuir fragmentos fictícios a autores reais."
        ],
        "example": "Caso autoral: numa narrativa inventada, duas irmãs descrevem de modos diferentes a mesma casa. Uma associa o portão ao acolhimento; outra, às restrições que viveu ali. A comparação permite discutir memória e perspectiva sem decidir que uma voz representa todas as mulheres ou que as duas versões são depoimentos da pessoa que escreveu o texto.",
        "pitfall": "Transformar identidade em garantia de uma voz coletiva uniforme ou tomar escrevivência como cópia literal da vida sem criação literária."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um material fictício afirma: Todo texto brasileiro contemporâneo pertence a uma escola única e obrigatoriamente usa narrador em primeira pessoa. Qual avaliação é adequada?",
        "hint": "Distinga um recorte histórico amplo de um programa estético único e confira a força da palavra todo.",
        "options": [
          "A afirmação é correta porque uma data recente determina um único narrador.",
          "A afirmação é correta porque conto e poema têm sempre o mesmo narrador autobiográfico.",
          "A afirmação é incorreta apenas para obras publicadas antes da invenção da internet.",
          "A afirmação é indevida: coexistem gêneros, projetos e perspectivas, sem obrigação de primeira pessoa."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: contemporâneo é um recorte crítico amplo e discutido, com diversidade de gêneros e projetos; não impõe uma pessoa narrativa. A deriva técnica de uma data; B iguala gêneros e autobiografia; C inventa a internet como fronteira universal. A resposta reconhece diversidade sem declarar que nenhuma obra possa usar primeira pessoa."
      },
      {
        "level": "intermediate",
        "prompt": "Fragmento fictício autoral do Kognos: Eu conto esta reunião como a lembro; do que aconteceu no corredor depois, só conheço a versão de Rui. Qual leitura se apoia no trecho?",
        "hint": "Observe o limite de conhecimento explicitado por quem narra, sem identificar esse eu com uma pessoa real.",
        "options": [
          "O uso de eu comprova que o autor real participou da reunião.",
          "O narrador declara limites de memória e acesso aos fatos; isso não prova autobiografia nem falsidade de toda a narrativa.",
          "O trecho demonstra narrador onisciente que viu diretamente todos os acontecimentos.",
          "A referência a outra versão elimina qualquer possibilidade de trabalho literário."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: o eu explicita lembrar a reunião e depender de outra versão para o corredor, limitando seu conhecimento. A confunde narrador e autor; C contraria a informação de acesso indireto; D confunde mediação e ausência de elaboração. A limitação não autoriza decidir sozinho que todo o relato é falso ou autobiográfico."
      },
      {
        "level": "advanced",
        "prompt": "Uma proposta de leitura diz: Toda narrativa em primeira pessoa é escrevivência, e qualquer personagem de Conceição Evaristo reproduz literalmente a biografia da autora. Qual correção é necessária?",
        "hint": "Considere a relação entre experiência e criação e a especificidade do conceito atribuído à escritora.",
        "options": [
          "Escrevivência relaciona experiência, memória e dimensão coletiva na formulação de Evaristo; primeira pessoa não basta para defini-la nem impõe identidade literal entre autora e personagem.",
          "Basta substituir toda narrativa por todo poema para tornar a afirmação universalmente correta.",
          "É preciso eliminar a invenção literária de qualquer análise que envolva memória coletiva.",
          "A experiência de uma personagem permite concluir que todas as pessoas negras tiveram exatamente a mesma trajetória."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a correção respeita a especificidade da formulação de Evaristo sem confundir vida, criação e voz textual. B apenas troca uma generalização por outra; C exclui indevidamente elaboração; D transforma uma personagem em trajetória universal. Relacionar experiência e memória não equivale a exigir reprodução literal de cada fato biográfico."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Leitura da proposta e recorte temático",
    "objective": "Interpretar comandos de escrita, distinguir assunto, tema e posição argumentativa e selecionar um recorte pertinente à tarefa, ao gênero e aos textos de apoio sem substituir a proposta por um tema decorado.",
    "prerequisites": [
      "Compreensão de enunciados",
      "Gêneros e interlocução",
      "Diferença entre informação e argumento"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Assunto, tema e tarefa de escrita",
        "explanation": "Ler uma proposta exige identificar mais que uma palavra recorrente. Assunto é um campo amplo; tema é a delimitação sobre a qual se deve escrever; tarefa indica o que fazer com esse conteúdo. Um comando pode pedir analisar, comparar, defender uma posição, narrar ou dirigir uma solicitação a alguém. Os verbos não são intercambiáveis: enumerar informações não cumpre necessariamente uma tarefa de comparação ou defesa. Marque os termos que delimitam problema, grupo, espaço, tempo e relação entre elementos, quando esses recortes estiverem presentes. Nem toda proposta explicita todos eles, e não cabe inventar uma obrigação ausente. Diferencie também exigência e sugestão: uma pergunta de apoio pode ajudar a pensar, enquanto um item obrigatório precisa ser atendido. O recorte que você escolhe deve aprofundar a proposta sem apagar suas condições centrais. Tese é a posição defendida num texto argumentativo, não o simples nome do assunto. Uma frase que apenas repete o tema pode anunciar o campo, mas ainda precisa de uma ideia a sustentar. Em outros gêneros, o projeto pode organizar conflito narrativo, explicação ou solicitação, conforme o comando. Antes de redigir, faça uma paráfrase curta da tarefa e confira cada termo com o enunciado; ela serve como instrumento de trabalho, não como fórmula obrigatória a copiar na introdução.",
        "steps": [
          "Localize o verbo que determina a tarefa.",
          "Destaque as delimitações efetivamente presentes.",
          "Diferencie assunto, tema e posição ou projeto de escrita.",
          "Reformule a tarefa e confira se nenhuma condição central foi apagada."
        ],
        "example": "Exemplo autoral: o assunto amplo alimentação pode ser delimitado numa proposta fictícia para comparar formas de reduzir desperdício em feiras locais. Listar alimentos preferidos não realiza essa comparação. Um projeto pertinente poderia comparar organização de estoques e redistribuição, explicando critérios e limites sem inventar dados de resultados reais.",
        "pitfall": "Reconhecer apenas o assunto e escrever um texto decorado que ignora o problema, a relação solicitada ou a delimitação do enunciado."
      },
      {
        "level": "intermediate",
        "title": "Gênero, interlocutor e uso dos apoios",
        "explanation": "A proposta pode definir quem escreve, a quem se dirige, com qual finalidade e em qual espaço o texto circularia. Esses elementos ajudam a escolher organização, registro e recursos de interlocução. Uma carta, um artigo de opinião e uma narrativa não se tornam o mesmo gênero apenas por tratarem do mesmo assunto. As exigências variam entre provas e edições: consulte o enunciado e os documentos oficiais correspondentes. Como contraste documentado, a apresentação do Enem 2026 solicita texto dissertativo-argumentativo e proposta de intervenção; a prova de Redação da Fuvest 2026 apresentou escolha entre dissertação argumentativa e carta, sob uma coletânea comum. Esses exemplos datados não devem virar regra universal de todos os exames. Leia os apoios distinguindo tese, informação, exemplo e perspectiva. Dois textos podem concordar em um ponto e divergir em outro; não é necessário fingir que expressam uma opinião única. Usar a coletânea não equivale a copiar frases nem a trocar poucas palavras mantendo um resumo sem desenvolvimento. Selecione elementos relevantes à sua tarefa, relacione-os e explique sua função no raciocínio. Uma referência externa só ajuda quando é pertinente e corretamente apresentada; nome famoso ou citação decorada não substitui a leitura do comando. Sem conhecer uma fonte, não invente estatística, autoria, pesquisa ou trecho para dar aparência de autoridade.",
        "steps": [
          "Identifique papel de quem escreve, destinatário e finalidade.",
          "Confira gênero e exigências da edição indicada.",
          "Compare as perspectivas dos textos de apoio.",
          "Relacione informações ao projeto sem copiar ou fabricar evidências."
        ],
        "example": "Caso autoral: uma atividade pede uma resenha para leitores de um jornal escolar sobre uma exposição fictícia. O projeto precisa apresentar e avaliar aspectos da exposição para esse público. Uma lista de pedidos ao prefeito, mesmo sobre cultura, mudaria a interlocução e a finalidade. A adequação resulta do conjunto da situação de escrita.",
        "pitfall": "Aplicar a todas as propostas o modelo de uma única prova ou substituir desenvolvimento próprio por cópia de apoios e repertório sem vínculo com a tarefa."
      },
      {
        "level": "advanced",
        "title": "Recorte pertinente e conferência do projeto",
        "explanation": "Depois de compreender a proposta, escolha um eixo que permita desenvolvê-la dentro do espaço disponível. Recortar não é abandonar parte obrigatória do tema: é organizar uma abordagem que mantenha o problema central e suas relações. Num texto argumentativo, formule uma posição discutível e selecione razões que a sustentem; cada argumento precisa mostrar sua ligação com o tema, não apenas mencionar uma palavra em comum. Se há perspectivas diferentes nos apoios, examine o que cada uma permite afirmar e seus limites. Um exemplo local pode ilustrar uma questão mais ampla, mas não prova sozinho a situação de todo um país. Diferencie inferência apoiada, hipótese a discutir e dado comprovado. Durante o planejamento, pergunte se o leitor reconheceria a tarefa original sem depender do título. Repetir termos do tema não corrige parágrafos que desenvolvem outra questão. Uma verificação útil compara comando e projeto: gênero, interlocução, recortes, ideia central e função de cada parte. Essa checagem pode revelar excesso de generalidade, redução indevida ou argumento sem conexão. Se perceber uma lacuna, reformule a tese ou o encadeamento antes de tentar esconder o problema com conectivos e frases prontas. Critérios e consequências de afastamento do tema dependem do documento específico; esta aula trabalha o princípio de pertinência sem prometer nota ou transportar penalidades de uma banca para outra. A conferência continua na revisão final, quando o texto pronto pode ter se afastado do plano inicial.",
        "steps": [
          "Escolha um eixo de desenvolvimento preservando a tarefa inteira.",
          "Relacione cada argumento à posição e ao recorte.",
          "Declare limites das evidências e das inferências.",
          "Compare o texto final com o comando e corrija afastamentos."
        ],
        "example": "Situação autoral: um plano sobre preservação de praças históricas promete discutir manutenção e participação comunitária, mas seus parágrafos tratam apenas de turismo internacional. A presença das palavras praça e patrimônio não resolve o desvio. O autor precisa desenvolver as relações solicitadas, apoiando as propostas em razões pertinentes e sem dados inventados.",
        "pitfall": "Tratar recorte como autorização para ignorar uma condição central ou usar palavras do tema como disfarce para parágrafos que respondem a outra pergunta."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Proposta fictícia autoral: analise os desafios para a preservação de acervos sonoros em museus brasileiros. Qual projeto preserva o tema e a tarefa?",
        "hint": "Mantenha o patrimônio sonoro, o espaço institucional e a análise dos desafios; não basta mencionar música em geral.",
        "options": [
          "Enumerar apenas as canções favoritas do autor, sem discutir preservação ou museus.",
          "Analisar obstáculos de conservação e acesso a registros sonoros nesses museus, explicando sua relação com a preservação.",
          "Narrar uma viagem a museus estrangeiros sem relação com acervos sonoros ou o Brasil.",
          "Defender que o assunto obrigatório é apenas o gosto musical dos visitantes."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: o projeto mantém acervos sonoros, museus brasileiros e análise de desafios, relacionando conservação e acesso ao problema. A troca o tema por preferência pessoal; C remove recortes centrais; D redefine indevidamente o assunto obrigatório. O exemplo não atribui a um museu real um problema não verificado nem exige usar estatísticas ausentes."
      },
      {
        "level": "intermediate",
        "prompt": "Comando fictício autoral: escreva uma carta aberta da associação de moradores à prefeitura, defendendo a continuidade de oficinas culturais gratuitas no bairro. Qual escolha atende à situação de escrita?",
        "hint": "Confira quem fala, quem é destinatário, o gênero e a finalidade, em vez de preservar apenas a palavra cultura.",
        "options": [
          "Uma receita culinária sem destinatário, porque qualquer gênero cumpre o comando se citar o bairro.",
          "Um relato íntimo dirigido apenas ao próprio diário, sem discutir a continuidade das oficinas.",
          "Uma dissertação que apaga a associação e a prefeitura e discute somente entretenimento pago em outro país.",
          "Uma carta aberta em nome da associação, dirigida à prefeitura, com razões para manter as oficinas gratuitas no bairro."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a escolha mantém o papel da associação, o destinatário, o gênero público e a defesa da continuidade das oficinas. A ignora a tarefa e o gênero; B substitui interlocução e finalidade; C elimina as condições centrais. Defender a manutenção requer razões, sem precisar inventar uma pesquisa real ou supor regras de uma prova específica."
      },
      {
        "level": "advanced",
        "prompt": "Proposta e apoios fictícios autorais: discuta barreiras ao acesso noturno de jovens a um centro cultural. Um apoio destaca horário de fechamento e outro destaca transporte. Qual uso dos apoios evita reduzir indevidamente o recorte?",
        "hint": "Relacione as duas dimensões ao acesso pedido e não converta relatos de apoio em estatísticas universais.",
        "options": [
          "Copiar as duas falas integralmente e dispensar qualquer relação com uma posição própria.",
          "Ignorar acesso e período noturno e escrever apenas que cultura sempre é importante.",
          "Examinar como horário e transporte podem se combinar como barreiras ao acesso noturno, construindo uma posição e declarando os limites dos apoios.",
          "Afirmar, sem dado fornecido, que exatamente todos os jovens do país enfrentam o mesmo problema e pelo mesmo motivo."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a abordagem relaciona as duas dimensões ao recorte de acesso noturno e organiza uma posição sem extrapolar os apoios. A troca elaboração por cópia; B perde as delimitações; D inventa universalidade e uma causa única. Os apoios são fictícios e permitem discutir relações, não apresentar uma estatística nacional comprovada."
      }
    ]
  }
];

export const authoredCurriculumBatch12ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Produtos notáveis e fatoração",
    "contentSha256": "ed67dca5a1c5ab46abd5f2a9179285f9a168ac43905e54817d72c6daf90adc51",
    "draftMethod": "Autoria e verificação algébrica Codex; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=14&tipo=1",
      "https://openstax.org/books/elementary-algebra-2e/pages/7-1-greatest-common-factor-and-factor-by-grouping",
      "https://openstax.org/books/elementary-algebra-2e/pages/7-4-factor-special-products"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "The expansion of (3x-4)^2 using the formula (a-b)^2 = a^2 - 2ab + b^2 yields 9x^2 - 24x + 16, confirming index 2 is correct as the only option with the proper middle term -24x resulting from -2·(3x)·4, while option B incorrectly omits the factor of 2 producing -12x and option D represents a difference of squares rather than a squared binomial."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Factoring 6x^2+15x+4xy+10y by grouping gives 3x(2x+5)+2y(2x+5)=(3x+2y)(2x+5), confirming index 0 as the only option that expands exactly to the given polynomial, while options B and C introduce sign errors and incorrect constants, and option D has wrong middle terms 2xy and 5y."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "A diferença de cubos fatora x^3-125=(x-5)(x^2+5x+25), e a diferença de quadrados dá x^2-25=(x-5)(x+5). A forma reduzida é (x^2+5x+25)/(x+5), mantendo x≠5 e x≠-5, logo índice1. A opção A perde a exclusão5; C não preserva a identidade; D usa sinal negativo em5x e denominadorx-5, incompatíveis com a fatoração e o cancelamento corretos. O valor5 continua fora do domínio original, ainda que a expressão reduzida tenha valor nesse ponto."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Sintaxe da oração e do período",
    "contentSha256": "1d83317d87cedf8f5f3e9faca1af1fcf6884ffc4a2520c30e3ea007e7a5155ff",
    "draftMethod": "Autoria e conferência Codex; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/haver-e-oracao-subordinada/37546",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/predicativo-do-sujeitopredicativo-do-objecto/7379",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/locucoes-verbais/2790",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/coodenacao-e-subordinacao-na-mesma-frase/34749",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/oracoes-reduzidas/3339",
      "https://estudoautonomo.dge.mec.pt/sites/default/files/2025-10/gta-42_portugues.o-ano_tema-8_frase-complexa-e-tipos-de-oracoes.pdf",
      "https://ead.stj.jus.br/pluginfile.php/105436/mod_resource/content/10/assets/files/1dica-13.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Análise de voz passiva em 'Os avisos foram enviados pela secretaria': 'os avisos' é sujeito paciente, 'foram enviados' é locução verbal, 'pela secretaria' é agente. As alternativas 0, 1 e 2 incorretamente atribuem funções sintáticas (agente, sujeito, objeto direto), enquanto a alternativa 3 identifica corretamente o sujeito paciente e a estrutura locucional verbal."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Em 'Espero que a equipe retorne', a oração 'que a equipe retorne' funciona como subordinada substantiva objetiva direta do verbo 'espero', podendo ser substituída por 'isso'. As outras opções incorretamente classificam como adjetiva, coordenada ou causal, funções que não correspondem à relação de seleção entre 'espero' e seu complemento."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "No 'Quando a biblioteca abriu, Joana entrou e escolheu um livro', há três oralções: uma subordinada adverbial temporal ('quando a biblioteca abriu') e duas principais coordenadas aditivamente ('Joana entrou' e 'escolheu um livro'). As opções 1, 2 e 3 erradamente reduzem a uma única oração, chamam conectivos de verbos ou atribuem oposição adversativa a 'quando'."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Literatura brasileira contemporânea",
    "contentSha256": "8bdcf3b9b7452ab577b37d70594b8411790acd2904817ac577ed2d02a6b03c42",
    "draftMethod": "Autoria Codex; referências de acervos, pesquisa e catálogo editorial conferidas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.periodicos.unb.br/index.php/estudos/about",
      "https://www.itaucultural.org.br/ocupacao/conceicao-evaristo/escrevivencia/",
      "https://ims.com.br/2021/08/18/icone-de-um-brasil-insubmisso/",
      "https://books.google.com/books/about/Feliz_ano_novo.html?hl=pt-BR&id=ZNROvgJMrogC",
      "https://periodicos.ufpb.br/index.php/graphos/article/view/67089"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "A alternativa D é correta pois o texto da aula afirma explicitamente que 'Literatura brasileira contemporânea não designa uma escola única com manifesto e características obrigatórias' e classifica como 'pitfall' classificar toda produção contemporânea como um único movimento. As opções A, B e C contêm inverdades: A afirma que data recente determina narrador único, B iguala gêneros e autobiografia automaticamente, C limita a incorreção a obras pré-internet, quando o problema é estrutural ao conceito de contemporâneo."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A alternativa B é correta pois o fragmento do narrador explícita limita seu conhecimento: 'Eu conto esta reunião como a lembro' e 'só conheço a versão de Rui' para o corredor. Isso demonstra limiar de memória e acesso indireto, não autobiografia. As opções A e C inverterm o sentindo ao atribuírem participação autoral ou onisciência, enquanto D confunde mediação literária com ausência de elaboração, o que a aula rejeita explicitamente."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A alternativa A é correta pois o texto da aula define escrevivência de Conceição Evaristo como 'relação à experiência, memória e dimensão coletiva da escrita negra, especialmente de mulheres' e alerta que 'não se trata de chamar qualquer primeira pessoa de escrevivência nem de negar invenção e trabalho literário'. As outras opções criam generalizações universalizantes (B), excluem indevidamente a elaboração literária (C) ou transformam personagem em representante universal de grupo (D), tudo o que a aula explicitly rejeita."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Leitura da proposta e recorte temático",
    "contentSha256": "c7822ddbde40985fd25e616b2cfbf7702b084240af10b502370d5a233bd665d8",
    "draftMethod": "Autoria Codex; comandos oficiais e princípios de escrita conferidos; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante",
      "https://www.fuvest.br/fuvest2026-fase2-dia1-abordagem-esperada-redacao.pdf",
      "https://www.fuvest.br/wp-content/uploads/fuvest2026_guia-provas-programas.pdf",
      "https://writingcenter.unc.edu/tips-and-tools/understanding-assignments/",
      "https://writingcenter.unc.edu/tips-and-tools/argument/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Verification that option 1 correctly analyzes conservation obstacles and access to sound archives in Brazilian museums while preserving the task of examining preservation challenges, unlike distractor options that enumerate personal favorites, narrate foreign visits, or redefine the subject as musical taste."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Verification that option 3 correctly fulfills the open letter task from the residents' association to the city hall defending continuity of free cultural workshops, unlike distractors that are recipes, diary entries, or essays about paid entertainment in other countries."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Verification that option 2 examines how hour and transportation can combine as barriers to nighttime access to a cultural center, building a position and declaring the limits of the supports, unlike distractors that copy supports without position, ignore the nighttime access scope, or make unsupported universal claims about all youths nationwide."
      }
    ]
  }
] as const;
