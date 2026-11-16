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
  },
  {
    "subject": "Inglês",
    "topic": "Skimming e scanning",
    "objective": "Usar skimming para construir uma visão geral e scanning para localizar informações em textos ingleses, confirmando contexto, condições e relações de sentido por leitura atenta sem adotar uma ordem universal de prova.",
    "prerequisites": [
      "Vocabulário básico de avisos e horários",
      "Reconhecimento de títulos e parágrafos",
      "Negação e conectivos comuns em inglês"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Skimming: propósito e visão geral",
        "explanation": "Skimming é uma leitura orientada à ideia geral de um texto. Em vez de traduzir imediatamente cada palavra, o leitor procura reconhecer assunto, propósito, organização e linhas principais. Título, subtítulos, início e fim de parágrafos, palavras recorrentes e marcas de gênero podem ajudar, conforme o texto. Não é uma regra de ler apenas a primeira frase de cada parágrafo: a ideia central pode aparecer em outra posição ou depender do conjunto. Pergunte se o texto informa, convida, defende uma posição, descreve ou instrui. Uma notícia e um anúncio podem usar o mesmo vocabulário com finalidades distintas. Em questões de gist ou main idea, a resposta deve abranger o conteúdo relevante sem promover um detalhe isolado a tema de tudo. Hipóteses baseadas no título precisam ser confrontadas com o corpo, pois títulos podem ser ambíguos ou expressivos. Não conhecer um termo secundário não impede necessariamente entender a proposta geral, mas uma palavra central desconhecida pode exigir inferência contextual ou consulta durante o estudo. Skimming é um recurso para orientar a leitura, não garantia de compreensão completa nem uma proibição de voltar a trechos. Para um texto curto ou uma tarefa que exija precisão integral, pode ser adequado ler com atenção desde o início. A finalidade deve orientar a escolha, em vez de uma promessa universal de velocidade.",
        "steps": [
          "Defina se procura assunto geral, propósito ou posição central.",
          "Observe organização e pistas recorrentes.",
          "Formule uma síntese que cubra o conjunto.",
          "Volte ao corpo para confirmar ou corrigir a hipótese."
        ],
        "example": "Aviso fictício autoral: Share your garden surplus. Bring extra vegetables to our neighbourhood exchange and take what you need. A leitura geral indica um convite à troca de excedentes de horta na comunidade. Vegetables é parte do conteúdo, mas o propósito não é ensinar uma receita nem vender obrigatoriamente todos os produtos.",
        "pitfall": "Decidir a ideia central apenas pelo título ou tomar um detalhe reconhecido como resumo de todo o texto."
      },
      {
        "level": "intermediate",
        "title": "Scanning: alvo específico e contexto",
        "explanation": "Scanning é a busca orientada de uma informação específica, como nome, dia, horário, requisito ou local. Antes de procurar, determine qual dado responde à pergunta. Em inglês, uma tarefa com when pede informação temporal; where aponta para lugar, enquanto who procura pessoa ou grupo, sempre conforme a frase completa. Use pistas visuais e linguísticas para chegar ao trecho relevante, sem supor que a repetição exata de uma palavra garanta a resposta. O texto pode usar sinônimos ou reformular a informação: free of charge pode indicar ausência de cobrança, e admission pode tratar de entrada. Depois de localizar o trecho, leia a frase e as condições próximas com cuidado. Um aviso pode apresentar horário de abertura, início de atividade, último acesso e fechamento, cada qual respondendo a pergunta diferente. Datas e números também precisam de unidade, referência e identificação: um número de sala não é automaticamente uma duração. Em tabelas, alinhe corretamente linha e coluna; em textos corridos, acompanhe a que evento cada dado se liga. Scanning não equivale a escolher o primeiro número visto ou ignorar not, only, except e unless, que podem restringir a informação. Se o alvo não aparece, não fabrique uma resposta a partir de conhecimento externo. A localização é uma etapa; a confirmação do sentido exige leitura atenta do trecho relevante.",
        "steps": [
          "Especifique o dado solicitado antes de procurar.",
          "Busque pistas e possíveis reformulações.",
          "Associe o dado ao evento ou referente correto.",
          "Leia condições, negações e exceções ao redor do trecho."
        ],
        "example": "Programa fictício autoral: Photography: Room 4, starts at 11:00. Painting: Room 7, starts at 15:00. Se a pergunta pede a sala de Painting, o alvo é Room 7. O número 15:00 informa o início dessa atividade; não deve ser escolhido como local. A leitura exige associar cada dado à categoria correta.",
        "pitfall": "Encontrar uma palavra ou número e responder sem conferir a qual evento, condição ou coluna ele pertence."
      },
      {
        "level": "advanced",
        "title": "Combinar estratégias e verificar inferências",
        "explanation": "Skimming, scanning e leitura detalhada podem se complementar, mas a sequência depende da finalidade e da dificuldade do material. Um panorama pode orientar a busca; uma pergunta específica também pode levar diretamente a um trecho, que será lido com atenção e relacionado ao conjunto. Não há uma ordem obrigatória para toda prova nem garantia de que o mesmo procedimento seja o melhor para todas as pessoas e textos. Ao verificar uma alternativa, diferencie o que está explicitamente informado, o que pode ser inferido e o que não tem apoio. Uma paráfrase precisa manter condições e quantificadores: some não vira all, may não vira must, e not all não significa none. Conectivos como although sinalizam contraste; unless introduz uma condição de exceção em muitos contextos. Não é necessário decorar tradução única de cada palavra, mas compreender sua função no trecho. Leia também se a pergunta pede ideia central, propósito ou um detalhe; a mesma informação pode ser verdadeira e ainda assim não responder ao item. Em textos de divulgação, localizar uma alegação não comprova sua verdade fora do texto: ler o que o autor afirma e verificar a evidência externa são operações relacionadas, mas diferentes. Durante o estudo, justifique a resposta indicando pistas específicas e explique por que os distratores alteram ou extrapolam o sentido. Se uma leitura rápida produzir contradição, retorne ao trecho em vez de defender a primeira impressão apenas porque uma palavra-chave parecia coincidir.",
        "steps": [
          "Escolha a estratégia de acordo com a pergunta e o material.",
          "Confirme condições, quantificadores e conectivos.",
          "Separe afirmação textual, inferência apoiada e extrapolação.",
          "Justifique a alternativa e revise hipóteses contraditas pelo texto."
        ],
        "example": "Frase fictícia autoral: The walk will take place unless heavy rain is forecast. A realização depende de uma exceção ligada à previsão de chuva forte. O texto não permite concluir que qualquer nuvem cancele o passeio nem que ele ocorrerá em todas as condições. Encontrar walk é insuficiente sem compreender unless e heavy rain.",
        "pitfall": "Trocar possibilidade por obrigação, alguns por todos ou aplicar uma estratégia de leitura como receita universal sem verificar o sentido."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Texto fictício autoral: Repair and share. At our community workshop, neighbours learn to mend small household items and exchange practical knowledge. The project aims to reduce waste and bring people together. Qual é a ideia geral?",
        "hint": "Relacione a atividade, a finalidade ambiental e a aproximação entre pessoas; não escolha apenas um detalhe inventado.",
        "options": [
          "Uma oficina comunitária de reparos e troca de conhecimentos busca reduzir resíduos e aproximar moradores.",
          "Uma loja exige que todos comprem objetos novos e parem de consertar.",
          "Um manual ensina detalhadamente cada peça de todos os eletrodomésticos.",
          "O projeto afirma que toda forma de resíduo desaparecerá imediatamente."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: o texto associa aprender a reparar e compartilhar conhecimento às finalidades de reduzir resíduos e aproximar pessoas. B contradiz repair e reduce waste; C transforma uma apresentação geral em manual inexistente; D troca uma finalidade por garantia universal e imediata. A síntese cobre o conjunto sem inventar resultados já comprovados."
      },
      {
        "level": "intermediate",
        "prompt": "Agenda fictícia autoral: Guided tours: Monday at 10:00 and Friday at 14:00. Booking closes on Thursday at 18:00. The visitor centre opens daily at 09:00. A que horas começa a visita guiada de sexta-feira?",
        "hint": "Localize Friday e confira o horário ligado a guided tours; diferencie início da visita, prazo de reserva e abertura do centro.",
        "options": [
          "09:00, o horário de abertura diária do centro.",
          "18:00, o prazo de reserva de quinta-feira.",
          "14:00, o início da visita guiada de sexta-feira.",
          "10:00, o início da visita guiada de segunda-feira."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: Friday at 14:00 associa a sexta-feira ao início da visita guiada. A informa abertura do centro; B é o encerramento das reservas na quinta; D corresponde à visita de segunda. Scanning ajuda a encontrar Friday, mas a confirmação exige relacionar dia, evento e horário, sem selecionar o primeiro número do aviso."
      },
      {
        "level": "advanced",
        "prompt": "Aviso fictício autoral: Although entry is free, visitors must book a timed ticket. The last entry is at 16:30; the building closes at 17:00. Uma pessoa conclui que pode entrar às 16:50 sem reservar, pois a entrada é gratuita e o prédio fecha às 17:00. Qual avaliação respeita o aviso?",
        "hint": "Examine must book e a diferença entre last entry e closes; gratuidade não remove condições explícitas.",
        "options": [
          "A conclusão é correta: free cancela toda obrigação expressa depois de although.",
          "A conclusão é correta porque fechamento e último horário de entrada são necessariamente iguais.",
          "O aviso proíbe toda entrada gratuita e não apresenta horário de último acesso.",
          "A conclusão é indevida: a reserva é obrigatória e o último acesso é às 16:30, mesmo com fechamento às 17:00."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: must book exige reserva, e last entry at 16:30 fixa o último acesso antes do fechamento. Although contrapõe gratuidade e exigência de reserva, sem cancelar a segunda informação. A ignora obrigação; B confunde horários diferentes; C nega free e last entry. O texto não autoriza chegar às 16:50 sem reserva apenas por ainda não serem 17:00."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Possessivos e demonstrativos em espanhol",
    "objective": "Empregar possessivos e demonstrativos em espanhol conforme referência, posição e concordância, interpretando relações de pertencimento e proximidade e resolvendo ambiguidades sem transportar automaticamente o uso do português.",
    "prerequisites": [
      "Gênero e número de substantivos",
      "Pessoas do discurso",
      "Leitura de situações em espanhol"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Possessivos: referência e concordância",
        "explanation": "Possessivos relacionam uma pessoa do discurso a algo ou alguém, podendo indicar pertencimento, vínculo ou outra relação, e não somente propriedade material. Antes do substantivo, usam-se mi/mis, tu/tus e su/sus, além de nuestro/nuestra/nuestros/nuestras e vuestro/vuestra/vuestros/vuestras. Mi, tu e su não variam em gênero, mas apresentam plural conforme o nome: mi cuaderno e mis carpetas. A escolha da pessoa remete ao possuidor; o número e, nas formas variáveis, o gênero concordam com o elemento referido como possuído. Por isso, sus não prova vários possuidores: uma pessoa pode ter várias agendas. Su pode remeter a él, ella, usted, ellos, ellas ou ustedes, conforme o contexto. Formas tônicas incluem mío/mía/míos/mías, tuyo/tuya/tuyos/tuyas e suyo/suya/suyos/suyas. Elas podem aparecer depois do substantivo ou em predicação, como numa construção com ser. Nuestro e vuestro também têm usos antes e depois do nome. Em espanhol geral, mi carpeta já determina o nome, sem transportar automaticamente o artigo do português a minha pasta; existem usos regionais com artigo, que não devem ser tratados como inexistentes. Para escolher a forma num exercício, identifique quem é o referente pessoal e qual é o gênero e número do nome, em vez de ajustar o possessivo ao gênero de quem possui.",
        "steps": [
          "Identifique a pessoa a que o vínculo se refere.",
          "Determine gênero e número do nome possuído.",
          "Confira se a posição pede forma antes ou depois do substantivo.",
          "Use o contexto para interpretar su e sus sem inferir número de possuidores."
        ],
        "example": "Exemplo autoral: um homem e uma mulher podem dizer por igual Nuestra bicicleta es nueva quando a bicicleta é compartilhada por ambos. Nuestra concorda com bicicleta, feminino singular, e não revela que todo o grupo de possuidores seja feminino. Trocar para bicicletas exige Nuestras bicicletas son nuevas.",
        "pitfall": "Concordar o possessivo com quem possui em vez do nome referido ou concluir que sus sempre indica vários possuidores."
      },
      {
        "level": "intermediate",
        "title": "Demonstrativos e a situação de referência",
        "explanation": "As séries este/esta/estos/estas, ese/esa/esos/esas e aquel/aquella/aquellos/aquellas ajudam a identificar referentes em relação à situação de fala e ao discurso. Concordam em gênero e número com o nome. Este marca proximidade com quem fala; no modelo de três graus, ese pode indicar proximidade com quem escuta, enquanto aquel assinala afastamento de ambos. Essa descrição é um modelo útil, não uma régua universal em metros: em variedades americanas, ese também pode marcar distância e aquel assumir usos evocadores. Demonstrativos podem remeter a tempo, lembranças e trechos do discurso, sem depender exclusivamente de posição física. O contexto precisa tornar a escolha pertinente. As formas neutras esto, eso e aquello não têm plural e podem retomar uma situação, ideia ou algo ainda não nomeado; não acompanham diretamente um substantivo como determinantes. Para apontar um objeto nomeado, escolha a forma concordante. Um substantivo feminino iniciado por a tônico continua feminino com demonstrativo: usa-se esta aula, apesar da construção com artigo el aula. Quando o nome não aparece, a tradição escolar pode falar em pronome demonstrativo; análises atuais também reconhecem um nome tácito em muitos usos masculinos e femininos. Essa diferença de nomenclatura não altera a necessidade de interpretar referência e concordância. Comparar com o português pode ajudar, mas traduções isoladas não substituem a leitura da situação.",
        "steps": [
          "Localize quem fala, quem escuta e o referente.",
          "Considere distância, tempo e retomada textual conforme o contexto.",
          "Concorde formas variáveis com o substantivo.",
          "Diferencie neutros sem nome expresso e demonstrativos que acompanham nomes."
        ],
        "example": "Situação autoral: uma pessoa segura uma bússola e diz Esta brújula funciona bien. Esta concorda com brújula, feminino singular, e a cena sustenta a proximidade com quem fala. Depois de uma explicação inteira, Eso requiere práctica pode retomar o conteúdo explicado, sem significar um substantivo masculino omitido obrigatório.",
        "pitfall": "Usar esto diretamente antes de um substantivo ou transformar as três séries demonstrativas numa medida física idêntica em todas as variedades."
      },
      {
        "level": "advanced",
        "title": "Retomadas, ambiguidades e grafia",
        "explanation": "Possessivos e demonstrativos precisam ser lidos numa rede de referências. Uma mesma frase com su pode permitir mais de um possuidor plausível; se o contexto não decide, a análise deve reconhecer a ambiguidade. Reescrever com de mais o nome ou um pronome adequado pode explicitar a relação. Não escolha automaticamente a pessoa mencionada por último: proximidade no texto é uma pista possível, não uma regra infalível. Formas tônicas após ser concordam com o nome retomado, e o artigo não é obrigatório em toda predicação: uma construção como son mías pode ser suficiente, enquanto las mías permite retomar um grupo nominal num contexto apropriado. Na comparação com o português, diferencie mi possessivo e mí pronome após preposição, assim como tu possessivo e tú pronome pessoal. Os acentos de mío e suas formas seguem a grafia correspondente; não devem ser apagados por confusão com mi. Quanto aos demonstrativos, escrevem-se este, ese e aquel e suas variantes sem acento nos usos sem risco de ambiguidade. A segunda edição do Dicionário pan-hispânico de dúvidas admite acento facultativo em certos usos tradicionalmente pronominais se quem escreve percebe ambiguidade; não ensine que todos os usos sem substantivo exigem acento. Esto, eso e aquello nunca recebem esse acento. Em situações de estudo, prefira tornar o referente claro por contexto ou reescrita. Dominar essas formas é interpretar quem ou o que é retomado, e não apenas preencher lacunas por semelhança gráfica.",
        "steps": [
          "Mapeie os referentes possíveis de cada forma.",
          "Reconheça ambiguidades que o contexto não resolve.",
          "Reescreva a relação explicitamente quando necessário.",
          "Confira concordância e grafia, distinguindo mi/mí e tu/tú."
        ],
        "example": "Caso autoral: Carmen dejó su cuaderno junto al de Iván pode exigir contexto para identificar de quem é o caderno. Se a intenção for indicar o caderno de Carmen, uma versão explícita com el cuaderno de Carmen remove essa dúvida. A leitura não deve declarar que su sempre retoma o nome mais próximo apenas por uma posição linear.",
        "pitfall": "Resolver su pela última pessoa citada sem conferir contexto ou exigir acento em todo demonstrativo usado sem substantivo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Contexto fictício autoral: quem fala tem várias pastas e quer dizer minhas pastas. Complete em espanhol geral: ___ carpetas están ordenadas.",
        "hint": "Carpetas é feminino plural, mas a forma curta de primeira pessoa varia em número, sem receber o acento do pronome mí.",
        "options": [
          "Mi carpetas están ordenadas.",
          "Mí carpetas están ordenadas.",
          "Mis carpetas están ordenadas.",
          "Mías carpetas están ordenadas."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: mis é o possessivo curto de primeira pessoa diante de carpetas, plural. A mantém singular; B usa mí, pronome tônico com outra função, e também não concorda em número; D coloca a forma tônica mías na posição em que a construção geral pede mis. O exercício informa o vínculo com quem fala e não depende do gênero dessa pessoa."
      },
      {
        "level": "intermediate",
        "prompt": "Situação fictícia autoral: quem fala aponta cartas perto do interlocutor, num contexto que adota o modelo de três graus de distância. As cartas pertencem ao grupo de quem fala. Complete: ___ cartas son ___.",
        "hint": "As formas precisam concordar com cartas; o contexto situa o referente junto a quem escuta e a posse é de nosotros/nosotras.",
        "options": [
          "Ese cartas son nuestro.",
          "Esas cartas son nuestras.",
          "Esas cartas son nuestros.",
          "Eso cartas son nuestra."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: esas marca, no modelo fornecido, o referente perto do interlocutor e concorda com cartas, feminino plural; nuestras também concorda com cartas. A usa formas singulares; C troca o gênero do possessivo; D tenta usar o neutro eso como determinante de cartas e deixa nossa relação no singular. O modelo foi explicitado, sem negar usos regionais diferentes."
      },
      {
        "level": "advanced",
        "prompt": "Caso autoral: Sergio habló con Marta sobre su agenda. Sem mais contexto, su pode ser ambíguo. A intenção informada agora é referir-se à agenda de Marta. Qual reescrita torna essa posse explícita?",
        "hint": "Use o nome da pessoa indicada pela intenção, sem transformar su numa forma com referente único obrigatório.",
        "options": [
          "Sergio habló con Marta sobre la agenda de Marta.",
          "Sergio habló con Marta sobre la agenda de Sergio.",
          "Sergio habló con Marta sobre mí agenda.",
          "Sergio habló con Marta sobre suyo agenda."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: la agenda de Marta explicita o vínculo que o contexto adicional determina. B atribui a agenda a Sergio e muda a intenção; C usa indevidamente mí antes do nome; D usa forma tônica masculina numa construção que não corresponde a su agenda nem concorda com agenda. A frase inicial não obriga su a ter um único referente sem contexto."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Estática, torque e equilíbrio",
    "objective": "Aplicar equilíbrio de forças e torques a modelos planos de corpos rígidos em repouso, calculando braços perpendiculares e reações e distinguindo atrito estático, estabilidade e limites das hipóteses adotadas.",
    "prerequisites": [
      "Vetores e componentes de forças",
      "Peso e força normal",
      "Seno de ângulos notáveis e equações lineares"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Equilíbrio de translação e rotação",
        "explanation": "A Estática analisa condições de repouso de sistemas sob ação de forças. Para um corpo rígido permanecer em equilíbrio estático num referencial inercial, a resultante das forças externas e o torque resultante devem ser nulos, com o corpo inicialmente em repouso nesse referencial. No problema plano, escrevemos ΣFx=0, ΣFy=0 e Στ=0 em relação a um polo escolhido. Resultante de forças zero, sozinha, não exclui aceleração de rotação. Um par de forças iguais e opostas em linhas diferentes pode formar um binário, com força resultante zero e torque não nulo. Tampouco aceleração zero prova velocidade zero: as condições de equilíbrio dinâmico precisam ser distinguidas do repouso inicial da situação estática. Comece isolando o corpo analisado e identificando forças externas. Peso, contato dos apoios, tração e atrito devem ser associados ao corpo correto. Um par de ação e reação atua em corpos diferentes, de modo que não pode ser cancelado automaticamente no diagrama de um único corpo. Num cabo ideal, a tração atua ao longo dele; um apoio pode exercer componentes determinadas pelo modelo de vínculo. A normal é perpendicular à superfície e não é sempre igual ao peso, pois outras forças e a geometria podem alterar a equação vertical. Atribua sentidos às incógnitas e interprete um valor negativo como indicação de sentido oposto ao escolhido, verificando se o contato ou vínculo permite essa reação.",
        "steps": [
          "Escolha o corpo e o referencial de análise.",
          "Liste forças externas e pontos ou linhas de aplicação.",
          "Separe componentes e adote sentidos positivos.",
          "Exija equilíbrio de forças e torques e confira a hipótese de repouso."
        ],
        "example": "Modelo autoral: duas forças horizontais de 2 N, opostas e com linhas paralelas separadas por 0,7 m, atuam num corpo livre. A resultante é zero, mas o binário tem módulo 2·0,7=1,4 N·m. Sem outro torque externo compensador, esse arranjo não mantém equilíbrio estático, apesar do cancelamento das forças.",
        "pitfall": "Verificar apenas a soma das forças ou cancelar ação e reação no diagrama de um único corpo."
      },
      {
        "level": "intermediate",
        "title": "Torque e reações de apoio",
        "explanation": "O torque de uma força em relação a um ponto mede seu efeito rotacional e depende do polo e da linha de ação. Em módulo, τ=rFsenθ, onde r liga o polo ao ponto de aplicação e θ é o ângulo entre esse vetor e a força. Também se usa τ=Fd, com d sendo a distância perpendicular do polo à linha de ação. Portanto, r só pode ser usado diretamente como braço quando a força é perpendicular a ele. Uma força cuja linha passa pelo polo tem torque zero em relação a esse polo, mesmo se seu módulo for grande. No plano, escolha um sentido positivo, por exemplo anti-horário, e some torques com sinais coerentes. A unidade é N·m; embora tenha a mesma dimensão de energia, torque não é trabalho e não se costuma escrever seu valor em joules. A escolha do polo pode eliminar torques de reações desconhecidas que passem por ele, sem eliminar essas forças da equação de translação. Numa barra uniforme em campo gravitacional uniforme, o peso pode ser representado no centro geométrico; cargas extras entram nos respectivos pontos. Barras não uniformes exigem informação sobre o centro de massa. Resolva as equações e confira também o torque em outro polo quando isso ajudar a detectar erros. Ter vários apoios não garante que só as equações da Estática determinem todas as reações: certos sistemas exigem informações adicionais sobre deformação. A solução depende de um modelo de vínculos explícito.",
        "steps": [
          "Escolha um polo que simplifique as incógnitas.",
          "Calcule a distância perpendicular ou o seno correto.",
          "Some torques com sinal e inclua todos os pesos.",
          "Use também equilíbrio de forças e verifique os resultados."
        ],
        "example": "Exemplo autoral: uma haste ideal recebe força perpendicular de 18 N a 0,2 m do polo, com tendência anti-horária. Adotando esse sentido positivo, o torque é +3,6 N·m. Deslocar a força ao longo da mesma linha de ação mantém o braço perpendicular; mudar a linha pode alterar o torque, mesmo sem mudar o módulo da força.",
        "pitfall": "Confundir distância até o ponto de aplicação com braço perpendicular ou remover uma força da equação vertical só porque seu torque é zero no polo escolhido."
      },
      {
        "level": "advanced",
        "title": "Atrito, centro de massa e estabilidade",
        "explanation": "Em contatos sem deslizamento, o atrito estático se ajusta à tendência de movimento relativo, até um limite descrito no modelo de Coulomb por |f_s|≤μ_sN. A igualdade dá o valor máximo, não o valor obrigatório de toda situação de repouso. Determine primeiro o atrito necessário ao equilíbrio e depois confira o limite. Se ele for ultrapassado, a hipótese de repouso por esse modelo falha; não basta manter uma solução algébrica impossível. A direção do atrito deve se opor à tendência de deslizamento relativo no contato, não a uma ideia genérica de movimento de todo o sistema. O centro de massa resume a distribuição de massa; em campo gravitacional uniforme, o peso resultante pode ser aplicado ali para o cálculo de torque. Num corpo apoiado sujeito apenas ao peso e à reação de uma base horizontal, a posição da projeção do centro de massa em relação à base ajuda a avaliar a possibilidade de apoio e tombamento. Esse critério não resolve sozinho casos com cabos, adesão ou outras forças. Equilíbrio e estabilidade são conceitos diferentes: após pequeno deslocamento, uma configuração estável tende a produzir efeito restaurador; uma instável tende a afastar-se, e uma indiferente admite posições próximas sem tendência restauradora. Um corpo pode satisfazer as equações exatamente e ainda assim ter equilíbrio instável. Declare hipóteses como corpo rígido, contato mantido e ausência de tombamento ao usar um modelo apenas translacional; exercícios ideais não constituem projeto de estrutura real.",
        "steps": [
          "Calcule o atrito exigido pelas equações de equilíbrio.",
          "Compare-o ao limite estático e confira contato mantido.",
          "Relacione peso, centro de massa e base no modelo adotado.",
          "Diferencie equilíbrio exato e resposta a uma perturbação."
        ],
        "example": "Modelo autoral: um objeto ideal está equilibrado sobre um ponto com seu centro de massa exatamente acima do apoio. O peso pode ter torque zero nessa posição; se um pequeno desvio produzir torque que aumente o desvio, o equilíbrio é instável. A igualdade de torques na posição inicial não garante retorno após perturbação nem segurança de um objeto real.",
        "pitfall": "Usar sempre f_s=μ_sN, confundir equilíbrio com estabilidade ou aplicar um critério simplificado de tombamento a uma estrutura com forças e vínculos não considerados."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo autoral plano: uma força de 30 N atua num ponto a uma distância de 0,4 m do polo. O vetor do polo ao ponto e a força formam ângulo de 30°. Qual é o módulo do torque? Use sen30°=0,5.",
        "hint": "Calcule rFsenθ, pois a distância de 0,4 m não é o braço perpendicular inteiro para o ângulo informado.",
        "options": [
          "12 N·m.",
          "6 N·m.",
          "3 N·m.",
          "30 N·m."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: τ=0,4·30·0,5=6 N·m. O braço perpendicular é 0,4·0,5=0,2 m. A usa rF sem o seno; C não resulta do produto correto; D confunde o módulo da força com o torque. O enunciado fornece o ângulo entre r e F, portanto não é preciso supor uma força perpendicular ou uma figura externa."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo autoral: barra rígida uniforme horizontal de comprimento 4 m e peso 100 N, apoiada nas duas extremidades por reações verticais para cima, recebe carga de 200 N vertical para baixo a 1 m da extremidade esquerda. Em equilíbrio estático e campo gravitacional uniforme, quais são as reações?",
        "hint": "O peso da barra atua a 2 m da esquerda. Some torques em torno da extremidade esquerda e depois use o equilíbrio vertical.",
        "options": [
          "Esquerda: 150 N; direita: 150 N, ambas para cima.",
          "Esquerda: 100 N; direita: 200 N, ambas para cima.",
          "Esquerda: 300 N; direita: 0 N, ambas para cima.",
          "Esquerda: 200 N; direita: 100 N, ambas para cima."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: tomando a esquerda como polo, R_d·4-100·2-200·1=0, logo R_d=100 N. Na vertical, R_e+R_d=300 N, portanto R_e=200 N. A e B somam 300 N, mas não satisfazem os torques; C também falha no balanço de momentos. A distribuição de reações não é igual porque a carga extra não está no centro. Todos os dados necessários foram descritos."
      },
      {
        "level": "advanced",
        "prompt": "Modelo autoral translacional, sem tombamento: bloco inicialmente parado de peso 50 N sobre plano horizontal tem μ_s = 0,4 e recebe força horizontal de 15 N para a direita. Não há outras forças verticais nem tendência de rotação considerada. Qual é o atrito estático e o repouso é possível nesse modelo?",
        "hint": "A normal vale 50 N nas hipóteses dadas. Compare o atrito necessário para cancelar a força horizontal com μ_sN, sem impor que todo atrito estático seja máximo.",
        "options": [
          "Atrito de 15 N para a esquerda, abaixo do limite de 20 N; o repouso é possível.",
          "Atrito de 20 N para a esquerda obrigatoriamente; resultante horizontal de 5 N mantém repouso.",
          "Atrito nulo, pois não existe atrito quando o bloco está parado.",
          "Atrito de 15 N para a direita, somando-se à força aplicada para produzir equilíbrio."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: N=50 N, f_s,max=0,4·50=20 N e o equilíbrio exige f_s=15 N para a esquerda. Como 15<20, o repouso é possível no modelo declarado. B impõe máximo indevido e aceita resultante não nula; C ignora atrito estático; D soma forças no mesmo sentido. O exercício exclui tombamento e não pretende avaliar a estabilidade de um bloco real sem sua geometria."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Funções inorgânicas",
    "objective": "Reconhecer ácidos, bases, sais e óxidos no contexto de modelos escolares, relacionando fórmulas, nomes, neutralização e comportamento em água sem confundir classificação, força, solubilidade e pH.",
    "prerequisites": [
      "Íons e cargas",
      "Fórmulas químicas e número de oxidação",
      "Conservação de átomos no balanceamento"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Ácidos e bases: modelos e meio aquoso",
        "explanation": "As funções inorgânicas agrupam substâncias segundo características químicas, ajudando a interpretar fórmulas e reações. A classificação depende de um modelo, não de sabor, aparência ou do nome cotidiano de um produto. Na abordagem de Arrhenius em água, ácidos produzem H3O+ na ionização e bases como os hidróxidos fornecem OH− por dissociação da parte dissolvida. H+ é uma abreviação comum da espécie ácida no tratamento aquoso, não um próton livre isolado na solução. HCl em água exemplifica ácido clorídrico; NaOH é hidróxido de sódio. A presença de H numa fórmula não basta para torná-la ácido de Arrhenius, e a simples ocorrência das letras OH não identifica qualquer composto como hidróxido. A abordagem de Brønsted–Lowry é mais ampla: ácido doa próton e base o recebe, em uma reação. NH3 pode receber próton da água e produzir OH− sem conter o grupo OH na fórmula; isso mostra por que não se deve declarar que toda base, em qualquer modelo, é um hidróxido. Força se relaciona à extensão de ionização ou reação no meio considerado; concentração é a quantidade de soluto por volume de solução, e solubilidade limita a dissolução nas condições dadas. Uma base pouco solúvel não é automaticamente fraca, e um ácido diluído não é automaticamente fraco. As propriedades devem ser avaliadas com atenção à espécie, ao meio e às condições. Esta aula interpreta modelos e fórmulas sem propor provar substâncias ou realizar misturas.",
        "steps": [
          "Identifique o modelo ácido-base e o meio.",
          "Examine a espécie que se forma ou o próton transferido.",
          "Separe força, concentração e solubilidade.",
          "Use fórmulas e contexto, sem recorrer a testes por sabor ou contato."
        ],
        "example": "Modelo autoral: duas fichas descrevem o mesmo ácido em soluções com quantidades dissolvidas diferentes por litro. A segunda está mais diluída, mas isso não muda por si só a identidade da espécie nem permite redefinir sua força apenas pelo volume. É necessário separar concentração da extensão da reação de ionização no meio.",
        "pitfall": "Classificar qualquer fórmula com H como ácido, qualquer sequência OH como base ou usar diluído como sinônimo de fraco."
      },
      {
        "level": "intermediate",
        "title": "Sais, nomenclatura e neutralização",
        "explanation": "Sais são compostos iônicos formados por cátions e ânions e, na classificação escolar, podem ser relacionados à substituição de hidrogênios ionizáveis de um ácido por cátions. Não são apenas o sal de cozinha, e podem conter cátion amônio, sem metal. Fórmulas de unidades eletricamente neutras precisam equilibrar cargas: Ca2+ e Cl− exigem CaCl2, não CaCl. Na nomenclatura usual, combinam-se o nome do ânion e o do cátion; quando necessário, o número de oxidação do metal é indicado, como cloreto de ferro(III) para FeCl3. Hidróxidos recebem nome de hidróxido mais o cátion; muitos ácidos têm nomes tradicionais, como ácido nítrico para HNO3 e ácido sulfúrico para H2SO4. A neutralização entre ácido e hidróxido pode formar sal e água, com proporções determinadas pelos hidrogênios neutralizados e grupos hidróxido disponíveis. Neutralização completa e parcial não são a mesma coisa: um ácido com mais de um hidrogênio ionizável pode originar hidrogenossais quando a neutralização é parcial. Não determine número de hidrogênios ionizáveis apenas contando todo H da fórmula, pois a estrutura importa. Para balancear, altere coeficientes, nunca os índices internos das espécies para forçar uma igualdade. Conservar átomos não prova sozinho que toda reação escrita ocorre nas condições propostas, mas é requisito de uma equação correta. A palavra neutralização também não garante que qualquer solução final tenha pH exatamente 7.",
        "steps": [
          "Identifique cátions, ânions e suas cargas.",
          "Escreva a fórmula neutra e o nome correspondente.",
          "Distinga neutralização completa e parcial.",
          "Balanceie por coeficientes preservando as fórmulas das espécies."
        ],
        "example": "Exemplo autoral: o íon Al3+ combinado com nitrato NO3− forma Al(NO3)3, pois três nitratos compensam a carga +3. Os parênteses indicam três grupos inteiros NO3, e não três oxigênios no total. O nome nitrato de alumínio corresponde à combinação, sem supor que a mera escrita de uma fórmula determine toda condição de preparo.",
        "pitfall": "Alterar o índice de uma fórmula durante o balanceamento ou assumir proporção 1:1 para toda reação entre ácido e hidróxido."
      },
      {
        "level": "advanced",
        "title": "Óxidos e limites das generalizações",
        "explanation": "Na classificação escolar, óxidos comuns são compostos binários com oxigênio como elemento mais eletronegativo, em geral com número de oxidação −2; peróxidos e outras espécies de oxigênio exigem distinções próprias. Compostos de oxigênio com flúor não devem ser encaixados nessa regra como óxidos comuns. A nomenclatura pode indicar proporção por prefixos, como dióxido de carbono para CO2, ou número de oxidação, conforme a espécie. O comportamento ácido-base permite distinguir óxidos básicos, ácidos, anfóteros e neutros em contextos apropriados. CaO exemplifica óxido básico; CO2, óxido ácido; ZnO e Al2O3 podem comportar-se de modo anfótero, reagindo com ácidos ou bases conforme as condições. CO e NO são exemplos escolares de óxidos neutros nesse critério, o que não significa ausência de toda reatividade química. Nem todo óxido metálico é básico e nem todo óxido de não metal é ácido. Também não se deve exigir reação direta com água de todo óxido para reconhecer seu comportamento. Quanto aos sais em água, os íons podem participar de equilíbrios ácido-base, chamados hidrólise nesse tratamento. Uma solução de sal pode ser ácida, básica ou aproximadamente neutra, conforme as espécies, concentração e temperatura. NH4+ atua como ácido ao transferir próton para água; um ânion derivado de ácido fraco pode atuar como base. Classificação da substância e pH da solução são níveis distintos de análise. Identifique a reação e os equilíbrios relevantes em vez de concluir pH pela palavra sal.",
        "steps": [
          "Confira composição e espécie de oxigênio antes de nomear um óxido.",
          "Relacione classificação ácido-base ao comportamento e às condições.",
          "Examine os íons do sal e sua reação com água.",
          "Evite concluir neutralidade, força ou reatividade apenas por uma classe."
        ],
        "example": "Modelo autoral: duas fichas classificam ZnO e CO2 como óxidos. Isso não os torna equivalentes em comportamento: o primeiro admite caráter anfótero e o segundo é ácido no tratamento escolar. A classificação informa um padrão de reação, sem autorizar concluir que ambos se dissolvem do mesmo modo ou reagem igualmente com qualquer substância.",
        "pitfall": "Dizer que todo sal produz pH 7, todo óxido metálico é básico ou óxido neutro é uma substância absolutamente inerte."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Situação de estudo autoral: no tratamento escolar de Arrhenius em água e das funções inorgânicas, qual sequência classifica HCl(aq), NaOH, KCl e CO2, nessa ordem?",
        "hint": "Examine ácido em água, hidróxido, composto iônico salino e composto binário de oxigênio, sem usar apenas a presença de uma letra.",
        "options": [
          "Base, ácido, óxido e sal.",
          "Sal, óxido, ácido e base.",
          "Óxido, sal, base e ácido.",
          "Ácido, base, sal e óxido."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: HCl(aq) exemplifica ácido, NaOH é hidróxido classificado como base, KCl é sal e CO2 é óxido. As outras sequências trocam classes incompatíveis com essas fórmulas e o meio indicado. A classificação não afirma que toda substância com H é ácida nem que o pH de qualquer solução salina seja 7."
      },
      {
        "level": "intermediate",
        "prompt": "Exercício autoral: na representação ideal de neutralização completa de H3PO4 por NaOH, formando Na3PO4 e água, qual equação conserva os átomos sem alterar os índices das fórmulas?",
        "hint": "Cada fosfato PO4^3− exige três Na+ no sal indicado; ajuste coeficientes e conte H, Na, P e O nos dois lados.",
        "options": [
          "H3PO4 + NaOH → Na3PO4 + H2O.",
          "H3PO4 + 2 NaOH → Na3PO4 + 2 H2O.",
          "H3PO4 + 3 NaOH → Na3PO4 + 3 H2O.",
          "2 H3PO4 + 3 NaOH → Na3PO4 + 3 H2O."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: um H3PO4 requer três NaOH na neutralização completa representada, formando um Na3PO4 e três H2O. Há 6 H, 3 Na, 1 P e 7 O em cada lado. A e B não fornecem três Na e não conservam os demais balanços; D duplica P e o grupo fosfato apenas à esquerda. A representação estequiométrica completa não garante pH 7 na solução final."
      },
      {
        "level": "advanced",
        "prompt": "Análise autoral: uma solução de NH4Cl em água apresenta transferência de próton de NH4+ para H2O, formando H3O+ e NH3; considere desprezível a hidrólise de Cl− nesse modelo. Qual conclusão é adequada?",
        "hint": "A classificação NH4Cl como sal não impede reação ácido-base de um de seus íons com a água.",
        "options": [
          "A solução é obrigatoriamente neutra porque todo sal contém um metal e tem pH 7.",
          "O sal pode produzir solução ácida pela reação de NH4+ com água; ser sal não garante neutralidade.",
          "NH4+ é incapaz de doar próton porque todo cátion é quimicamente inerte.",
          "A reação transforma H3O+ em um átomo de sódio e elimina a conservação da matéria."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: NH4+ doa próton à água e gera H3O+, favorecendo caráter ácido da solução sob as hipóteses dadas. A inventa metal obrigatório e pH universal; C atribui inércia a todos os cátions; D inventa transformação de elemento sem base. NH4Cl continua classificado como sal, enquanto o comportamento de seus íons explica por que essa classificação não implica neutralidade."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Genética mendeliana",
    "objective": "Interpretar segregação e distribuição independente em modelos mendelianos, distinguindo genótipo, fenótipo e dominância e calculando probabilidades de cruzamentos com hipóteses e limites explícitos.",
    "prerequisites": [
      "Meiose e formação de gametas",
      "Frações e probabilidades",
      "Cromossomos homólogos e fecundação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Alelos, genótipos e segregação",
        "explanation": "Mendel investigou padrões de herança em cruzamentos de ervilhas, formulando explicações com fatores hereditários antes de a base cromossômica ser conhecida. A interpretação atual relaciona esses fatores a genes e alelos, sem afirmar que Mendel observou moléculas de DNA. Alelos são variantes numa região genética; em um modelo diploide autossômico, um indivíduo tem dois alelos no locus considerado, um recebido de cada progenitor. Homozigoto tem alelos iguais nesse locus, e heterozigoto tem diferentes. Genótipo descreve a constituição genética considerada; fenótipo é a característica observável, que pode depender do genótipo e do ambiente. No modelo de dominância completa de A sobre a, AA e Aa apresentam o mesmo fenótipo, e aa apresenta o recessivo. Dominante não significa mais frequente, melhor, mais saudável ou transmitido com maior probabilidade por esse motivo. A primeira lei, ou segregação dos alelos, descreve a separação dos dois alelos na formação de gametas. No modelo sem distorção de segregação, Aa produz gametas A e a em proporções esperadas iguais; cada gameta leva um alelo desse locus, não a dupla Aa. A fecundação reúne alelos dos dois gametas. A notação com letras é uma convenção do problema: não implica que o gene inteiro desapareça no heterozigoto nem que todo caráter real siga dominância completa. Leia as hipóteses antes de associar letras e fenótipos.",
        "steps": [
          "Identifique locus, alelos e modelo de dominância.",
          "Diferencie genótipo e fenótipo.",
          "Determine quais alelos cada gameta pode receber.",
          "Reúna alelos na fecundação sem atribuir valor biológico à letra maiúscula."
        ],
        "example": "Modelo autoral de planta fictícia: R é dominante completo sobre r para uma característica. As plantas RR e Rr podem ter o mesmo fenótipo e genótipos diferentes. Uma observação da característica dominante, sem cruzamento ou outra informação genética, não decide sozinha se a planta é RR ou Rr. A letra R não garante maior frequência na população.",
        "pitfall": "Tratar dominante como superior ou mais comum, ou colocar dois alelos do mesmo locus diploide em cada gameta do modelo."
      },
      {
        "level": "intermediate",
        "title": "Cruzamentos e probabilidades, não cotas",
        "explanation": "O quadro de Punnett organiza combinações de gametas e permite calcular proporções esperadas sob hipóteses como gametas equiprováveis, fecundação aleatória e ausência de diferenças de sobrevivência que alterem a contagem. Um homozigoto produz um tipo de gameta para o locus considerado; um heterozigoto produz dois no modelo de segregação usual. As células do quadro representam combinações, não uma ordem obrigatória de nascimento. A proporção genotípica 1:2:1 de um cruzamento entre dois heterozigotos pode corresponder à proporção fenotípica 3:1 quando há dominância completa e expressão prevista no modelo. Essas proporções são expectativas de probabilidade: quatro descendentes não precisam incluir exatamente um de cada classe do quadro. Para eventos independentes, a ocorrência anterior não obriga compensação nos seguintes. A regra do produto calcula a ocorrência conjunta de eventos independentes; a soma simples vale para alternativas mutuamente exclusivas. No cruzamento-teste, cruza-se um indivíduo de fenótipo dominante e genótipo desconhecido com um homozigoto recessivo. Um descendente recessivo pode mostrar que o progenitor dominante forneceu o alelo recessivo, sob hipóteses de expressão completa, filiação indicada e ausência de mutações. Já não observar recessivos em uma amostra pequena não prova automaticamente homozigose. É preciso distinguir possibilidade, evidência e certeza lógica dentro do modelo. Não use esses exercícios como diagnóstico ou inferência sobre pessoas reais.",
        "steps": [
          "Liste gametas possíveis e suas probabilidades.",
          "Combine os gametas dos dois progenitores.",
          "Conte genótipos antes de agrupar fenótipos.",
          "Interprete proporções como expectativas e declare limites de amostras pequenas."
        ],
        "example": "Exemplo autoral ideal: uma planta CC cruzada com cc produz somente Cc no locus considerado, porque cada combinação reúne um C do primeiro progenitor e um c do segundo. Isso mostra por que uma previsão vem dos gametas possíveis, e não de dividir arbitrariamente o número de descendentes entre letras maiúsculas e minúsculas.",
        "pitfall": "Converter probabilidade em número garantido numa família pequena ou considerar ausência de recessivos como prova automática de homozigose."
      },
      {
        "level": "advanced",
        "title": "Segunda lei, ligação gênica e limites do modelo",
        "explanation": "A segunda lei, ou distribuição independente, descreve combinações de alelos de loci distintos na formação de gametas quando a segregação de um não condiciona a do outro. Para dois loci heterozigotos independentes, surgem quatro tipos de gametas em proporções esperadas iguais. Isso se relaciona ao comportamento dos cromossomos na meiose. Genes próximos no mesmo cromossomo podem apresentar ligação gênica, alterando as frequências de combinações; recombinação pode produzir combinações novas, e loci suficientemente afastados podem comportar-se aproximadamente como independentes. Portanto, não aplique automaticamente a multiplicação de probabilidades de loci sem verificar a hipótese. A proporção fenotípica 9:3:3:1 de um cruzamento diíbrido entre heterozigotos exige, além de independência, dominância completa em ambos os loci e ausência de interações que alterem o agrupamento fenotípico, entre outras condições do modelo. Dominância incompleta, codominância e epistasia podem modificar fenótipos e proporções sem exigir que os alelos deixem de segregar. Em uma população podem existir mais de dois alelos para um gene, embora um indivíduo diploide autossômico tenha dois nesse locus. Muitas características dependem de vários genes e do ambiente; não é adequado atribuir automaticamente inteligência, comportamento ou toda característica humana a um único par de letras. Para resolver um exercício de vários loci, defina o genótipo solicitado, os gametas necessários e a independência assumida, distinguindo probabilidade de genótipo e de fenótipo.",
        "steps": [
          "Identifique loci e a hipótese de distribuição independente.",
          "Enumere os gametas necessários ao genótipo pedido.",
          "Combine probabilidades somente nas condições adequadas.",
          "Verifique dominância, ligação e interação antes de usar proporções fenotípicas prontas."
        ],
        "example": "Modelo autoral: em CcDd × CcDd, com loci independentes e dominância completa em ambos, o fenótipo C_D_ tem probabilidade 3/4·3/4=9/16. Se uma interação entre genes agrupar fenótipos de outro modo, essa proporção pode mudar. O cálculo genético não autoriza aplicar 9:3:3:1 a qualquer par de características sem conferir as hipóteses.",
        "pitfall": "Aplicar 9:3:3:1 a qualquer cruzamento de dois genes ou confundir mudança de fenótipo com desaparecimento da segregação dos alelos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo autoral diploide: no cruzamento Aa × Aa, A tem dominância completa sobre a. Considere segregação igual, fecundação aleatória e igual sobrevivência dos genótipos. Qual é a probabilidade do fenótipo recessivo por descendente?",
        "hint": "Enumere AA, Aa, aA e aa e não transforme as combinações possíveis numa ordem obrigatória para grupos pequenos.",
        "options": [
          "1/2 por descendente, pois toda letra minúscula já basta para o fenótipo recessivo.",
          "1/4 por descendente, sem garantir um recessivo em cada grupo de quatro.",
          "3/4 por descendente, porque AA também é recessivo.",
          "Um recessivo obrigatório a cada quatro nascimentos, sem variação possível."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: a combinação aa ocorre em uma de quatro combinações equiprováveis, dando 1/4. AA e os dois heterozigotos apresentam fenótipo dominante nesse modelo. A conta heterozigotos como recessivos; C troca fenótipos; D transforma probabilidade em cota determinística. A proporção esperada não exige um recessivo em cada conjunto de quatro descendentes."
      },
      {
        "level": "intermediate",
        "prompt": "Cruzamento-teste fictício autoral: um progenitor de fenótipo dominante, com genótipo AA ou Aa, é cruzado com aa e produz ao menos um descendente recessivo aa. Considere filiação indicada, expressão completa e ausência de mutação. Qual genótipo é compatível para o progenitor dominante?",
        "hint": "O descendente aa recebeu um a de cada progenitor; confira qual das duas possibilidades do progenitor dominante fornece esse alelo.",
        "options": [
          "AA, porque o progenitor aa pode fornecer sozinho os dois alelos do descendente.",
          "aa, porque qualquer fenótipo dominante tem obrigatoriamente dois alelos recessivos.",
          "AA ou Aa sem distinção, pois o descendente aa não informa nada nesse modelo.",
          "Aa: o descendente aa exige um alelo a de cada progenitor, sob as hipóteses dadas."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: o progenitor aa fornece a, e o outro a precisa vir do progenitor de fenótipo dominante. Entre AA e Aa, apenas Aa pode fornecê-lo. A atribui os dois alelos de um locus ao mesmo progenitor; B contradiz o fenótipo declarado e as possibilidades; C ignora a informação do descendente. A conclusão vale nas hipóteses explícitas e não é uma inferência clínica sobre uma família real."
      },
      {
        "level": "advanced",
        "prompt": "Modelo autoral: no cruzamento AaBb × aabb, os loci são autossômicos e têm distribuição independente, gametas equiprováveis e igual sobrevivência dos genótipos. Qual é a probabilidade de um descendente Aabb?",
        "hint": "O progenitor aabb só fornece ab; identifique qual gameta do outro progenitor forma Aa no primeiro locus e bb no segundo.",
        "options": [
          "1/16 para Aabb, pois todo cruzamento de dois loci tem dezesseis gametas por progenitor.",
          "9/16 para Aabb, usando obrigatoriamente a primeira classe de 9:3:3:1.",
          "1/4 para Aabb, pois o primeiro progenitor deve fornecer Ab.",
          "1 para Aabb, porque qualquer gameta do primeiro progenitor produz esse genótipo."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: AaBb produz AB, Ab, aB e ab, cada qual com 1/4 sob independência. Aabb resulta de Ab combinado com ab do progenitor aabb, logo 1/4. A confunde combinações e tipos de gametas; B aplica proporção de outro cruzamento e de fenótipos; D ignora os outros genótipos possíveis. A resposta é de genótipo e não exige uma regra universal sobre fenótipos."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Revolução Industrial e trabalho",
    "objective": "Relacionar industrialização, organização fabril e conflitos do trabalho, interpretando causas múltiplas, fontes históricas e limites da legislação sem supor progresso uniforme ou automático.",
    "prerequisites": [
      "Manufatura e produção artesanal",
      "Comércio atlântico e escravização",
      "Leitura de fontes e cronologia histórica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Industrialização como transformação histórica",
        "explanation": "A primeira Revolução Industrial começou na Grã-Bretanha no século XVIII e se expandiu de modo desigual. Não foi uma única invenção nem uma troca instantânea de todas as oficinas por fábricas. A mecanização têxtil, o uso da energia hidráulica e a expansão da força a vapor transformaram ritmos e escalas de produção. A disponibilidade de carvão e os aperfeiçoamentos de motores importaram, mas máquinas exigiam investimento, manutenção, trabalhadores, matérias-primas e compradores. Redes de comércio, transporte, crédito e decisões políticas também compunham o processo. Por isso, uma lista de inventores não explica sozinha a industrialização. Watt aperfeiçoou motores a vapor; não criou sozinho a industrialização nem foi o primeiro a construir um motor desse tipo. A passagem do trabalho doméstico disperso para a concentração fabril podia reunir máquinas e trabalhadores sob direção empresarial, embora formas antigas e novas continuassem coexistindo. A burguesia comercial já existia antes desse processo: a indústria ampliou o peso de proprietários industriais, em vez de inventar toda a burguesia. Ao interpretar uma mudança, distinga condição favorável, inovação e consequência. A presença de carvão, por exemplo, não obriga qualquer região a industrializar-se. É preciso investigar como recursos, conhecimentos, relações sociais e mercados se articularam em um lugar e período determinados.",
        "steps": [
          "Localize região e período, sem impor cronologia única ao mundo.",
          "Identifique energia, produção e organização do trabalho.",
          "Relacione técnica a investimento, comércio e relações sociais.",
          "Diferencie condição favorável de causa única e inevitável."
        ],
        "example": "Comparação didática autoral, sem dados de uma fábrica real: uma oficina recebe um motor, mas não dispõe de peças, capital ou compradores regulares. Outra combina equipamento, manutenção e encomendas. A diferença mostra por que ter uma máquina não basta para explicar a expansão sustentada da produção, sem negar a importância da inovação técnica.",
        "pitfall": "Atribuir toda a industrialização a Watt ou supor que possuir carvão automaticamente produz o mesmo desenvolvimento em qualquer sociedade."
      },
      {
        "level": "intermediate",
        "title": "Relações de trabalho e circuitos globais",
        "explanation": "Na organização fabril, trabalhadores assalariados vendem sua força de trabalho, e proprietários controlam instalações, equipamentos e decisões produtivas. Isso altera a autonomia sobre o ritmo, os horários e a sequência das tarefas. Divisão do trabalho e mecanização podem reduzir a autonomia de certos ofícios e criar outras especializações; não significam que todos os trabalhadores perderam exatamente a mesma qualificação. Homens, mulheres e crianças participaram da produção em condições desiguais. Ruído, poeira, acidentes, jornadas longas e insegurança de renda integraram experiências industriais, mas variavam por setor, região e período. Crescimento urbano e moradias precárias devem ser examinados em relação a emprego, infraestrutura e renda, sem afirmar que toda cidade ou toda família viveu uma história idêntica. As fábricas estavam ligadas a circuitos que ultrapassavam suas paredes: a indústria algodoeira britânica se articulou a matérias-primas produzidas com trabalho escravizado e a relações coloniais de poder e comércio. Assalariamento fabril e escravização são relações distintas; sua conexão econômica não as torna juridicamente iguais. Esse vínculo também impede contar uma história de liberdade universal produzida automaticamente pela mecanização. Para analisar uma fonte, pergunte quem a produziu, com qual objetivo e que experiência ela documenta. Um regulamento empresarial revela expectativas de disciplina, mas não demonstra sozinho que todos obedeciam; um relato individual informa uma experiência sem representar por si toda a classe trabalhadora.",
        "steps": [
          "Identifique quem controla meios de produção e horários.",
          "Compare experiências sem transformar um caso em regra universal.",
          "Relacione produção fabril a matérias-primas e trabalho em outras regiões.",
          "Diferencie prescrição de regulamento, relato de experiência e prática comprovada."
        ],
        "example": "Situação fictícia autoral: um regulamento exige entrada ao toque de sino, enquanto uma carta imaginária de um trabalhador relata atrasos frequentes por problemas de transporte. O regulamento permite estudar a disciplina desejada pela direção; a carta sugere uma experiência e um conflito. Nenhum dos dois, sozinho, mede o cumprimento de horários de toda a indústria.",
        "pitfall": "Equiparar assalariamento e escravização ou tratar uma norma empresarial como prova de obediência efetiva de todos os trabalhadores."
      },
      {
        "level": "advanced",
        "title": "Resistência, direitos e mudanças posteriores",
        "explanation": "Trabalhadores não foram apenas destinatários passivos das mudanças. Associações, sindicatos, greves e campanhas políticas disputaram salários, tempo de trabalho, representação e condições de vida, enfrentando repressão e diferentes restrições. O ludismo envolveu ataques a equipamentos no início do século XIX em conflitos sobre emprego, remuneração e organização produtiva. Reduzi-lo à ignorância de pessoas que odiavam qualquer tecnologia apaga interesses e circunstâncias históricas. Também não se deve transformar todos os movimentos em um grupo único com o mesmo programa. A legislação resultou de disputas e teve alcance e execução limitados. O Factory Act britânico de 1833 criou restrições ao trabalho infantil em estabelecimentos têxteis abrangidos e instituiu inspetores; não eliminou imediatamente todo trabalho infantil, nem protegeu de modo igual todos os setores. A existência de uma lei e sua aplicação são perguntas diferentes, que exigem fontes e indicadores específicos. Na segunda metade do século XIX, a expansão do aço, da eletricidade, da indústria química e de novas redes de transporte e comunicação caracteriza processos chamados de Segunda Revolução Industrial. Essas mudanças não apagaram imediatamente o vapor ou outras fontes de energia e chegaram em ritmos diferentes a países e regiões. Aumento de produtividade descreve produção em relação a recursos empregados; não demonstra sozinho como a renda foi distribuída ou se a jornada diminuiu. Avaliar condições de vida exige considerar preços, salários, moradia, saúde, direitos e participação política, evitando tanto um progresso inevitável quanto a ideia de ausência de qualquer mudança.",
        "steps": [
          "Reconheça trabalhadores como agentes históricos e compare suas reivindicações.",
          "Diferencie criação de lei, abrangência e fiscalização.",
          "Localize mudanças da segunda industrialização sem supor substituição total de tecnologias.",
          "Separe produtividade de distribuição de renda e conquista de direitos."
        ],
        "example": "Cenário autoral hipotético: duas regiões ampliam a produção com equipamentos novos. Em uma, há negociação sobre jornada e fiscalização; na outra, esses mecanismos são frágeis. O crescimento produtivo comum não permite concluir que ambas tiveram os mesmos direitos ou condições de vida. Seria necessário investigar relações políticas e dados de cada região.",
        "pitfall": "Concluir que máquinas garantem direitos ou que a aprovação de uma lei significa cumprimento imediato e universal."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Situação hipotética autoral: uma região britânica do século XVIII reúne mecanização têxtil, acesso a energia, investimentos e redes de comércio. Qual interpretação explica melhor a expansão industrial descrita?",
        "hint": "Relacione fatores técnicos e sociais, distinguindo uma condição favorável de uma causa que produza sozinha todo o processo.",
        "options": [
          "A energia disponível torna dispensáveis trabalhadores, manutenção e compradores.",
          "Uma única invenção explica o processo, independentemente do comércio e do investimento.",
          "A combinação de técnica, energia, capital e mercados ajuda a explicar o processo, sem torná-lo inevitável.",
          "A presença de máquinas prova que todas as oficinas do mundo foram substituídas no mesmo momento."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: o caso reúne condições técnicas, econômicas e sociais cuja articulação ajuda a explicar a expansão. A elimina elementos necessários; B transforma uma inovação em causa única; D extrapola uma situação regional para uma substituição mundial simultânea. A interpretação considera os fatores fornecidos sem inventar uma lei universal de desenvolvimento."
      },
      {
        "level": "intermediate",
        "prompt": "Caso didático autoral: uma fábrica britânica compra algodão produzido por pessoas escravizadas em outra região e emprega trabalhadores assalariados no processamento. O que essa relação permite concluir?",
        "hint": "Diferencie as relações de trabalho em cada etapa e observe a conexão econômica entre lugares distintos.",
        "options": [
          "Produção industrial assalariada podia estar economicamente ligada à escravização, sem que as duas relações fossem juridicamente idênticas.",
          "Todos os assalariados da fábrica eram juridicamente escravizados porque processavam esse algodão.",
          "A mecanização da fábrica demonstra que não existia coerção nas etapas anteriores de fornecimento.",
          "O caso prova que todas as fábricas de qualquer setor e época tinham exatamente a mesma cadeia produtiva."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a cadeia descrita conecta relações distintas de exploração e trabalho. B confunde conexão econômica com identidade jurídica; C apaga a escravização explicitada no enunciado; D generaliza um caso para todos os setores e épocas. O raciocínio não equipara assalariamento e escravidão nem considera a fábrica isolada das regiões fornecedoras."
      },
      {
        "level": "advanced",
        "prompt": "Exercício autoral: um estudo encontra a criação de limites legais ao trabalho infantil em estabelecimentos têxteis britânicos abrangidos pelo Factory Act de 1833. Também identifica dificuldades de inspeção e descumprimento. Qual conclusão é sustentada?",
        "hint": "Uma norma pode representar mudança política sem que sua aplicação seja imediata ou universal; considere as duas evidências.",
        "options": [
          "A lei demonstra que todo trabalho infantil desapareceu em todos os setores no mesmo ano.",
          "O descumprimento prova que não houve nenhuma alteração legal nem disputa política.",
          "A existência de inspetores torna desnecessária qualquer investigação sobre condições efetivas.",
          "A lei representou uma intervenção com alcance delimitado, cuja execução precisa ser investigada separadamente."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a criação de restrições é uma mudança legal, enquanto as dificuldades de fiscalização exigem examinar sua realização prática. A universaliza alcance e efeito; B nega a mudança explicitamente encontrada; C trata fiscalização formal como garantia automática. As evidências sustentam distinguir norma, abrangência e aplicação, sem declarar a lei inexistente ou plenamente cumprida."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "População, migração e demografia",
    "objective": "Interpretar distribuição e mudanças populacionais, calculando densidade e balanço demográfico e distinguindo fluxos migratórios, taxas, estrutura etária e projeções.",
    "prerequisites": [
      "Razão e porcentagem",
      "Leitura de tabelas e gráficos",
      "Território e escala geográfica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "População, distribuição e indicadores",
        "explanation": "Demografia estuda o tamanho, a composição e a dinâmica das populações. População absoluta é o número de pessoas residentes no recorte e na data indicados. Densidade demográfica relaciona esse número à área: D = P/A, por exemplo em habitantes por quilômetro quadrado. A densidade é uma média territorial; não afirma que cada quilômetro quadrado tenha a mesma quantidade de moradores. Um território muito populoso pode ter densidade menor que outro de população menor se sua área for suficientemente maior. Antes de comparar, confira datas, unidades, limites territoriais e critérios de residência. Mudanças de fronteira ou de metodologia podem prejudicar uma comparação simples. Natalidade se refere aos nascimentos, mortalidade aos óbitos e fecundidade à reprodução; a taxa bruta de natalidade não é o mesmo indicador que o número médio de filhos por mulher. Taxas brutas anuais de natalidade e mortalidade costumam dividir os eventos do ano pela população do meio do período e multiplicar por mil. Já uma variação percentual entre dois totais pode usar a população inicial como base, conforme o enunciado. Não troque esses denominadores sem aviso. Para converter uma mesma razão entre porcentagem e por mil, lembre que 1% equivale a 10‰. Indicadores descrevem populações em contextos específicos; não medem valor humano nem autorizam classificar povos como superiores ou inferiores.",
        "steps": [
          "Identifique população, área, recorte e data.",
          "Calcule densidade dividindo pessoas por área compatível.",
          "Diferencie quantidade absoluta, porcentagem e taxa por mil.",
          "Confira o denominador e os limites da comparação."
        ],
        "example": "Exemplo hipotético autoral: Vale tem 2400 residentes em 80 km², logo 30 hab/km²; Porto tem 1800 em 20 km², logo 90 hab/km². Vale tem mais moradores, mas Porto tem maior densidade média. Nenhuma dessas médias informa por si como as moradias se distribuem dentro de cada território.",
        "pitfall": "Confundir mais populoso com mais densamente povoado, ou apresentar uma razão por mil como se tivesse o mesmo valor numérico em porcentagem."
      },
      {
        "level": "intermediate",
        "title": "Balanço populacional e migração",
        "explanation": "Para um território e período fixos, o balanço demográfico relaciona o total final ao inicial: P_final = P_inicial + nascimentos − óbitos + entradas migratórias − saídas migratórias. A diferença entre nascimentos e óbitos é o saldo natural ou vegetativo; entradas menos saídas dão o saldo migratório. São quantidades de pessoas quando os dados estão em números absolutos. Um saldo positivo não significa ausência de saídas, e saldo zero não significa que ninguém se deslocou: entradas e saídas podem ser grandes e iguais. A mesma pessoa é emigrante em relação ao lugar de saída e imigrante em relação ao de chegada. Migração interna muda a residência dentro de um país; migração internacional cruza sua fronteira. A mudança pode ser temporária ou permanente. Deslocar-se diariamente para trabalhar sem trocar de residência habitual não equivale à mudança residencial considerada nesse balanço. As motivações podem combinar trabalho, estudo, vínculos familiares, violência e condições ambientais; nem toda mudança resulta de escolha livre ou de um único fator econômico. Deslocamento forçado pode ocorrer dentro do próprio país, sem cruzar fronteira internacional. Não deduza nacionalidade, situação jurídica ou motivo de uma pessoa apenas de um saldo agregado. No cálculo, mantenha o mesmo território e intervalo: migrar entre dois municípios altera cada total municipal, mas, por si, não muda o total do país que contém ambos. A equação supõe dados comparáveis e ausência de alterações territoriais ou ajustes de contagem não informados.",
        "steps": [
          "Fixe território e intervalo e separe quatro componentes.",
          "Calcule nascimentos menos óbitos e entradas menos saídas.",
          "Some ambos os saldos ao total inicial.",
          "Interprete fluxos e escalas sem inferir motivos individuais a partir da soma."
        ],
        "example": "Caso autoral: em um período, um município recebe 70 pessoas que passam a residir nele e registra 70 saídas de residentes. Seu saldo migratório é zero, embora haja 140 movimentos contabilizados. Isso não diz que os motivos de entrada e saída foram iguais nem que não existiu migração.",
        "pitfall": "Somar entradas sem descontar saídas, excluir migração do crescimento total ou tratar saldo zero como ausência de movimento."
      },
      {
        "level": "advanced",
        "title": "Estrutura etária, transição e projeção",
        "explanation": "Uma pirâmide etária organiza a população por grupos de idade e pelas categorias de sexo apresentadas na fonte. Observe se as barras representam números absolutos ou percentuais e confira as larguras dos intervalos. Uma base relativamente estreita e maior participação de idades elevadas ajudam a descrever uma estrutura envelhecida, mas não identificam sozinhas todas as causas. Nascimentos, sobrevivência, migração seletiva por idade e a história de gerações anteriores podem influenciar a forma do gráfico. A transição demográfica é um modelo histórico de mudanças dos níveis de mortalidade e natalidade: a queda da mortalidade com natalidade ainda elevada amplia o saldo natural; a redução posterior da natalidade pode diminuir esse saldo. O modelo não exige calendários idênticos nem explica sozinho toda trajetória. Populações podem continuar crescendo após queda da fecundidade por sua composição etária e por migração; crescimento natural negativo pode coexistir com crescimento total positivo se as entradas líquidas forem suficientes. Taxa bruta de mortalidade é influenciada pela estrutura etária, de modo que compará-la isoladamente não mede a qualidade dos serviços de saúde. Projeções dependem de hipóteses sobre fecundidade, mortalidade e migração; não são contagens do futuro nem certezas sem condições. Ao analisar políticas, dados de um único ano não provam automaticamente causa e efeito. Uma maior participação de pessoas em idade de trabalhar tampouco garante emprego ou desenvolvimento: educação, condições de trabalho e instituições importam. Interprete tendências com contexto e incertezas, sem responsabilizar indivíduos por mudanças coletivas.",
        "steps": [
          "Leia eixos, unidades, categorias e intervalos etários.",
          "Diferencie descrição da estrutura e explicação causal.",
          "Considere migração e história das gerações junto ao saldo natural.",
          "Identifique hipóteses de projeções e evite promessas determinísticas."
        ],
        "example": "Comparação hipotética autoral: duas localidades têm igual participação de pessoas de 20 a 39 anos, mas uma recebeu novos residentes nessa faixa e a outra tem gerações numerosas nascidas ali. O gráfico pode ser semelhante apesar de trajetórias diferentes. Para explicar sua forma, seriam necessários registros de nascimentos, óbitos e migração.",
        "pitfall": "Deduzir uma causa única da forma da pirâmide ou tratar projeção condicional como certeza, sem conferir hipóteses e escala."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Dados hipotéticos autorais: um município tem 6000 habitantes em uma área de 40 km², na mesma data de referência. Qual é a densidade demográfica e seu limite de interpretação?",
        "hint": "Divida o total de habitantes pela área e diferencie média territorial de distribuição efetiva em cada quilômetro quadrado.",
        "options": [
          "150 hab/km²; todos os quilômetros quadrados têm obrigatoriamente 150 moradores.",
          "6000 hab/km²; população absoluta e densidade sempre são iguais.",
          "0,0067 hab/km²; a área deve ser dividida pelo número de habitantes.",
          "150 hab/km²; a média não prova distribuição uniforme."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: 6000/40=150 hab/km². A calcula a mesma média, mas conclui uniformidade sem evidência; B ignora a divisão pela área; C inverte a razão, obtendo área por pessoa, e usa unidade incompatível. A densidade permite comparar médias, desde que recortes e datas sejam compatíveis, sem localizar cada residência."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo autoral com território fixo e registros completos: população inicial de 1000 residentes; no período, 20 nascimentos, 8 óbitos, 30 entradas e 10 saídas migratórias. Sem ajustes de contagem, qual é o balanço e a variação percentual usando a população inicial como base?",
        "hint": "Calcule separadamente nascimentos menos óbitos e entradas menos saídas; depois divida a variação total pelo total inicial e multiplique por 100.",
        "options": [
          "Saldo natural: 12; saldo migratório: 40; população final: 1052; variação sobre a inicial: 5,2%.",
          "Saldo natural: 12; saldo migratório: 20; população final: 1032; variação sobre a inicial: 3,2%.",
          "Saldo natural: 12; saldo migratório: 20; população final: 1032; variação sobre a inicial: 32%.",
          "Saldo natural: 28; saldo migratório: 20; população final: 1048; variação sobre a inicial: 4,8%."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: saldo natural=20−8=12; migratório=30−10=20; variação=32; total final=1000+32=1032. A variação sobre a base inicial é 32/1000·100=3,2%. A soma saídas a entradas; C confunde 32 por mil com 32%; D soma óbitos aos nascimentos. A base inicial foi explicitada e não deve ser trocada pelo total final ou pela população do meio do ano."
      },
      {
        "level": "advanced",
        "prompt": "Exercício hipotético autoral: no mesmo território e período, há saldo natural de -20 pessoas e saldo migratório de 35 pessoas, sem mudanças de limites ou ajustes de contagem. Qual é a variação do total de residentes?",
        "hint": "O crescimento total soma os dois saldos; um saldo natural negativo não obriga queda se houver entradas líquidas suficientes.",
        "options": [
          "Aumento de 15 pessoas; as entradas líquidas superam a perda natural no período.",
          "Queda de 20 pessoas; migração não participa do total de residentes.",
          "Aumento de 55 pessoas; o sinal negativo do saldo natural deve ser descartado.",
          "Total invariável; qualquer combinação de saldos diferentes se anula automaticamente."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: −20+35=15 pessoas. O saldo migratório positivo supera o natural negativo, permitindo crescimento total. B ignora migração; C transforma perda em ganho; D supõe cancelamento sem igualdade de módulos. A conta é em pessoas, não em taxa: sem uma base populacional não se calcula uma porcentagem única nem se deduz uma causa individual para os deslocamentos."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Filosofia contemporânea e tecnologia",
    "objective": "Distinguir perspectivas contemporâneas sobre experiência, liberdade e racionalidade e analisar tecnologias com argumentos sobre fins, valores, autonomia e responsabilidade.",
    "prerequisites": [
      "Argumento, premissa e conclusão",
      "Ética e conhecimento",
      "Modernidade e transformações sociais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Pluralidade de problemas e perspectivas",
        "explanation": "A filosofia contemporânea reúne tradições e debates diversos, não uma doutrina única compartilhada por todos os autores. Neste recorte introdutório, estudamos experiência, liberdade e crítica social como caminhos para interrogar a tecnologia. A fenomenologia, associada a Husserl e desenvolvida por outros pensadores, investiga estruturas da experiência e como algo aparece à consciência. Intencionalidade, nesse contexto, significa que a consciência é consciência de algo; não equivale simplesmente a um plano ou desejo deliberado. Perspectivas existencialistas, como as de Sartre e Beauvoir, destacam existência concreta, escolhas e responsabilidade em situações históricas e sociais. Liberdade situada não significa poder realizar qualquer desejo sem limites nem culpar alguém por toda condição que sofre. A teoria crítica ligada à Escola de Frankfurt articula filosofia e investigação social para examinar dominação e possibilidades de emancipação. Seus autores e gerações também divergem entre si. Esses caminhos podem formular perguntas diferentes sobre uma mesma situação: como uma interface é vivida, quais escolhas ela permite ou restringe e quais interesses orientam seu funcionamento. A aproximação é didática e não torna as tradições sinônimas. Para interpretar um texto, localize o problema, reconstrua a tese e examine as razões apresentadas. Saber o nome de um autor não substitui a leitura do argumento; uma preferência pessoal só se torna uma posição discutível com justificativas e abertura a objeções.",
        "steps": [
          "Identifique problema, tese e razões, antes de associar um rótulo.",
          "Diferencie intencionalidade fenomenológica de intenção como plano.",
          "Relacione escolha e responsabilidade às condições concretas.",
          "Compare perspectivas sem atribuir uma opinião única à filosofia contemporânea."
        ],
        "example": "Situação fictícia autoral: diante de um mapa digital, uma pessoa percebe a cidade sobretudo como rotas e tempos de viagem. Uma análise da experiência pode perguntar como essa mediação muda o que chama sua atenção. Outra análise pode discutir se ela dispõe de transporte e opções reais. São perguntas relacionadas, sem que uma resposta substitua automaticamente a outra.",
        "pitfall": "Tratar fenomenologia como simples planejamento de ações ou entender liberdade situada como ausência de condições e limites sociais."
      },
      {
        "level": "intermediate",
        "title": "Técnica, racionalidade e fins",
        "explanation": "Tecnologia envolve artefatos, conhecimentos, práticas e sistemas organizados; sua análise filosófica vai além de avaliar se um aparelho funciona. Uma questão instrumental pergunta pelos meios eficientes para alcançar um fim. Uma questão normativa pergunta se esse fim é justificável e quem pode participar de sua definição. Calcular o caminho mais rápido pode ser tecnicamente útil, mas a rapidez não resolve por si se o caminho é acessível ou se impõe custos injustos a outras pessoas. Horkheimer e Adorno criticam o predomínio de uma razão reduzida ao cálculo e ao controle, quando a reflexão sobre fins e emancipação é enfraquecida. Isso é uma interpretação filosófica, não uma prova de que todo cálculo ou toda ciência deva ser abandonado. Heidegger, por outro caminho, interroga a técnica moderna como modo de revelar e ordenar o mundo, no qual os entes podem aparecer sobretudo como recursos disponíveis. Sua questão não se reduz à existência de aparelhos perigosos nem coincide integralmente com a teoria crítica. Outros debates sobre tecnologia examinam como projetos incorporam valores e favorecem certas ações, por exemplo ao tornar algumas escolhas mais fáceis do que outras. Reconhecer valores no projeto não exige atribuir consciência ou culpa moral ao objeto. Também não implica que todos os usos e efeitos estejam determinados de uma vez por todas: contexto, instituições, usuários e possibilidade de transformação importam. Compare argumentos concretos, evitando tanto neutralidade absoluta presumida quanto condenação universal da técnica.",
        "steps": [
          "Separe eficiência dos meios e justificação dos fins.",
          "Reconstrua o alvo específico da crítica à razão instrumental.",
          "Diferencie a pergunta de Heidegger das perguntas da teoria crítica.",
          "Investigue escolhas de projeto, contexto e alternativas possíveis."
        ],
        "example": "Caso autoral: um sistema de inscrições pode ordenar pedidos por rapidez de envio ou reservar atendimento presencial para quem não tem conexão. A escolha envolve objetivos e critérios, além de velocidade computacional. Discutir qual projeto é justificável exige explicitar inclusão, custos e acesso, sem concluir que qualquer solução digital é por definição justa ou injusta.",
        "pitfall": "Transformar sucesso técnico em justificação ética ou reduzir toda crítica da tecnologia à proposta de destruir aparelhos e abandonar a razão."
      },
      {
        "level": "advanced",
        "title": "Autonomia, decisões e responsabilidade",
        "explanation": "Nos debates atuais sobre sistemas automatizados, distinguir descrição e avaliação evita saltos indevidos. Dizer que um programa classifica muitos casos por minuto informa desempenho sob certas condições. Concluir que ele deve decidir sozinho exige premissas adicionais sobre legitimidade, erros, direitos e consequências. Dados e critérios podem reproduzir desigualdades, e uma elevada precisão média não demonstra que os erros estejam igualmente distribuídos entre grupos. Explicação, possibilidade de contestação e participação das pessoas afetadas são questões relevantes, mas nenhum mecanismo isolado garante justiça em toda situação. Autonomia humana inclui condições de compreender e avaliar opções; a existência de um botão não prova uma escolha informada quando alternativas estão ocultas ou incompreensíveis. Responsabilidade pode envolver quem projeta, contrata, implementa e utiliza um sistema, de acordo com seu papel e poder de decisão. Distribuí-la não significa dissolvê-la automaticamente nem atribuí-la exclusivamente à máquina. Há debates filosóficos sobre agência e estatuto moral de sistemas artificiais; não se deve apresentar como consenso que uma resposta linguística prova consciência. Para construir um argumento, explicite o caso, os valores em tensão, a proposta e a justificativa. Considere objeções e alternativas, como revisão humana efetiva e mudanças nos critérios. As situações desta aula são hipotéticas e não estabelecem regras jurídicas vigentes nem descrevem produtos reais. A conclusão deve ter alcance compatível com as evidências, sem substituir análise filosófica por confiança automática ou medo genérico da inovação.",
        "steps": [
          "Distinga afirmação de desempenho e conclusão normativa.",
          "Pergunte quem define critérios, recebe benefícios e suporta riscos.",
          "Examine autonomia, distribuição de erros e possibilidade de contestar.",
          "Proponha uma conclusão justificada e responda a uma objeção relevante."
        ],
        "example": "Exemplo fictício autoral: um recomendador exibe somente obras semelhantes às já selecionadas. Uma análise pode reconhecer sua utilidade para encontrar preferências e perguntar se o projeto reduz o contato com perspectivas diferentes. Para avaliar a proposta de ampliar diversidade, explicite o valor defendido e examine efeitos, sem afirmar que todo usuário é incapaz de escolha.",
        "pitfall": "Deduzir justiça de uma média de acertos ou concluir que a automação elimina toda responsabilidade de pessoas e instituições."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma leitura introdutória autoral de fenomenologia, a expressão intencionalidade da consciência indica que uma experiência é experiência de algo. Qual interpretação preserva esse sentido?",
        "hint": "Compare a direção da experiência para algo com o uso cotidiano de intenção como plano deliberado.",
        "options": [
          "Toda experiência depende de um plano consciente detalhado feito antecipadamente.",
          "Perceber uma árvore envolve uma consciência dirigida a algo, mesmo sem um plano deliberado de observá-la.",
          "Intencionalidade significa que a consciência produz materialmente todas as árvores.",
          "Somente atividades realizadas com objetivo econômico podem ser experiências conscientes."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: a percepção é dirigida à árvore como algo experimentado; esse sentido não exige planejamento deliberado. A confunde o termo filosófico com plano; C transforma direção da experiência em criação material do objeto; D impõe um requisito econômico inexistente na definição. A resposta não resolve por si todas as questões sobre a existência do mundo exterior."
      },
      {
        "level": "intermediate",
        "prompt": "Caso autoral: uma instituição afirma que um sistema deve ser adotado porque conclui tarefas mais rapidamente, sem discutir finalidade, pessoas afetadas ou alternativas. Qual pergunta explicita o problema da razão reduzida ao cálculo instrumental?",
        "hint": "A crítica não precisa negar a utilidade de medir tempo; ela pergunta se escolher meios eficientes basta para justificar os fins.",
        "options": [
          "Como aumentar ainda mais a velocidade, tratando a finalidade como indiscutível?",
          "Como provar que nenhum conhecimento científico tem qualquer utilidade?",
          "Como atribuir vontade e consciência ao equipamento apenas por ele funcionar?",
          "O fim perseguido é justificável, para quem, e que consequências e alternativas devem ser consideradas?"
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a pergunta abre a avaliação dos fins e de suas implicações, além da eficiência dos meios. A mantém o fim fora de discussão; B converte uma crítica delimitada em rejeição universal da ciência; C atribui consciência sem argumento. A crítica não conclui que rapidez seja sempre ruim: ela mostra por que esse critério isolado não justifica a decisão."
      },
      {
        "level": "advanced",
        "prompt": "Situação hipotética autoral: um seletor automatizado tem alta precisão média, mas o relatório não informa erros por grupo nem oferece explicação ou contestação aos afetados. Qual conclusão é filosoficamente justificada pelos dados disponíveis?",
        "hint": "Diferencie uma medida global de desempenho das informações necessárias para avaliar justiça, autonomia e responsabilidade.",
        "options": [
          "A precisão média, sozinha, não demonstra justiça; é preciso examinar critérios, distribuição dos erros, contestação e responsabilidades.",
          "A precisão média prova que o sistema jamais prejudica qualquer pessoa ou grupo.",
          "A ausência de explicação demonstra que a máquina tem consciência e intenção de discriminar.",
          "A automação elimina a responsabilidade de todas as pessoas que projetam e usam o sistema."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: uma medida agregada não decide sozinha se critérios e efeitos são justos. A conclusão pede investigação compatível com as lacunas, sem afirmar discriminação comprovada nesse caso. B converte média em garantia individual; C infere consciência e intenção sem evidência; D apaga os papéis humanos e institucionais. A análise distingue insuficiência de informação de uma condenação automática de qualquer automação."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Gênero, raça e relações sociais",
    "objective": "Analisar gênero e raça como relações sociais históricas, distinguindo categorias, estereótipos e discriminação e aplicando uma perspectiva interseccional à interpretação de situações e dados.",
    "prerequisites": [
      "Socialização e instituições",
      "Desigualdade e relações de poder",
      "Leitura de dados e argumentos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Categorias, identidades e socialização",
        "explanation": "Na análise sociológica, gênero envolve normas, papéis, identidades e relações de poder construídos em contextos sociais. Não é sinônimo simples de características corporais nem de orientação sexual. Sexo designa características biológicas consideradas nas classificações corporais; sua existência não torna inevitáveis as ocupações, capacidades ou posições políticas atribuídas a alguém. Identidade de gênero diz respeito à identificação da pessoa, e expressão de gênero à forma como ela se apresenta, sem que aparência determine automaticamente identidade ou orientação. Há debates sobre definições e formas de classificação, e os conceitos devem ser usados com clareza e respeito à diversidade. Normas são aprendidas em famílias, escolas, meios de comunicação e outras instituições; podem ser reproduzidas, negociadas e contestadas. Socialização não é uma programação que faz todos os indivíduos agirem igual. Raça, por sua vez, funciona como classificação social que atribui significados a diferenças percebidas e se relaciona a hierarquias históricas. Não corresponde a uma divisão da humanidade em tipos biológicos superiores ou inferiores. Ser uma construção social não significa ser imaginária ou sem efeitos: classificações podem influenciar acesso a oportunidades e tratamento institucional. Etnia enfatiza pertencimentos e referências culturais, como história, língua e práticas compartilhadas; não é sinônimo automático de raça ou nacionalidade. As categorias e seus significados variam historicamente e não autorizam inferir a capacidade ou a experiência de uma pessoa a partir do grupo em que é classificada.",
        "steps": [
          "Diferencie características corporais, normas, identidade, expressão e orientação.",
          "Localize como papéis são ensinados e contestados.",
          "Distingua raça, etnia e nacionalidade no contexto analisado.",
          "Examine efeitos sociais sem naturalizar hierarquias ou uniformizar indivíduos."
        ],
        "example": "Caso hipotético autoral: uma escola distribui tarefas de organização apenas às meninas e reparos apenas aos meninos. Essa regra expressa uma expectativa social sobre papéis, não uma demonstração das capacidades de cada estudante. A análise pode perguntar como a divisão é ensinada e o que acontece quando estudantes a questionam.",
        "pitfall": "Tratar papéis sociais como destinos biológicos ou concluir que uma classificação social não produz consequências reais."
      },
      {
        "level": "intermediate",
        "title": "Estereótipos, discriminação e instituições",
        "explanation": "Estereótipo é uma generalização simplificadora sobre um grupo que apaga diferenças internas. Mesmo uma descrição aparentemente elogiosa pode impor expectativas rígidas. Preconceito envolve julgamentos prévios e disposições dirigidos a grupos; discriminação se refere a tratamentos e práticas que produzem desvantagens em razão de características ou classificações sociais. Não se deve reduzir toda desigualdade a uma opinião consciente de um indivíduo. Racismo pode operar em relações interpessoais e em mecanismos institucionais e históricos que reproduzem desvantagens associadas à classificação racial. Sexismo relaciona hierarquias e discriminação a gênero. Uma regra formulada com palavras aparentemente neutras pode produzir barreiras desiguais em um contexto concreto; investigar seu funcionamento requer observar critérios, acesso, execução e resultados. Isso não significa que qualquer diferença estatística prove sozinha a intenção de cada participante. No Brasil, escravização e exclusões posteriores integram a história das desigualdades raciais; identificar esses processos não equivale a atribuir a mesma trajetória a toda pessoa de um grupo. A análise estrutural pergunta como instituições, recursos e práticas se articulam para reproduzir padrões ao longo do tempo, reconhecendo também mudança e contestação. Ao ler relatos, preserve seu contexto e não transforme um depoimento em retrato de todas as pessoas. Ao ler uma tabela, confira população estudada, período, categorias e método. Diferencie a evidência de um padrão agregado das conclusões que exigem comparar mecanismos específicos ou investigar causas.",
        "steps": [
          "Identifique a generalização ou o tratamento descrito.",
          "Diferencie julgamento, prática e mecanismo institucional.",
          "Investigue efeitos e contexto sem exigir sempre uma declaração explícita de hostilidade.",
          "Separe padrão agregado, hipótese causal e experiência individual."
        ],
        "example": "Exemplo autoral fictício: uma seleção exige presença em uma única faixa de horário e não oferece alternativa. Um estudo pode investigar se pessoas responsáveis por cuidados familiares enfrentam barreiras específicas e se a exigência é necessária. A regra deve ser analisada no contexto; seu texto genérico não demonstra por si ausência de efeitos desiguais.",
        "pitfall": "Supor que discriminação depende sempre de insulto explícito ou, no extremo oposto, inferir toda intenção individual de uma diferença entre médias."
      },
      {
        "level": "advanced",
        "title": "Interseccionalidade, dados e transformação social",
        "explanation": "A interseccionalidade, formulada por Kimberlé Crenshaw em sua crítica de 1989 a abordagens de discriminação, examina como relações como raça e gênero se articulam em situações específicas. Considerar apenas a experiência de alguns homens de um grupo racial ou de algumas mulheres de outro pode deixar de perceber problemas vividos por mulheres negras. Não se trata de uma conta que soma pontos de sofrimento nem de uma regra que determina antecipadamente a mesma experiência para todos. Classe, território, deficiência e outros fatores podem modificar condições e oportunidades. Uma análise interseccional identifica mecanismos e contexto, em vez de apenas listar identidades. Dados desagregados podem revelar padrões ocultos em uma média geral, mas exigem amostras adequadas, categorias claras e proteção de informações pessoais. Comparar a proporção de pessoas que acessam uma oportunidade requer denominadores compatíveis; números absolutos diferentes não bastam para medir chances. Movimentos negros, feministas e outros movimentos sociais contestam exclusões e formulam reivindicações, com diversidade interna de objetivos e estratégias. Políticas de acesso, permanência, formação e enfrentamento de barreiras podem ser discutidas segundo o problema que buscam resolver. Avaliar uma política exige distinguir objetivo, implementação e efeitos, ouvir grupos afetados e examinar alternativas e evidências. A simples existência da política não prova que toda desigualdade terminou. Estas ferramentas sociológicas não substituem a análise de normas jurídicas específicas: uma proposta de avaliação não é apresentada aqui como requisito legal universal. A conclusão deve explicar o alcance dos dados sem reduzir sujeitos a categorias nem apagar relações de poder.",
        "steps": [
          "Identifique relações que se articulam e o mecanismo concreto.",
          "Compare grupos e denominadores adequados, observando limites dos dados.",
          "Diferencie objetivo, execução e resultado de uma política.",
          "Reconheça agência e diversidade interna dos movimentos e pessoas afetadas."
        ],
        "example": "Tabela didática fictícia: dois grupos tiveram dez inscrições aprovadas, mas um contava com vinte candidaturas e o outro com cem. As proporções são diferentes, embora os totais aprovados sejam iguais. Esse contraste orienta novas perguntas sobre acesso e seleção; sozinho não identifica causas nem autoriza expor dados individuais das pessoas participantes.",
        "pitfall": "Reduzir interseccionalidade a uma soma fixa de desvantagens ou considerar que números agregados comprovam, sem investigação, um mecanismo causal específico."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Situação hipotética autoral: uma família afirma que uma profissão é inadequada para mulheres porque todas teriam a mesma incapacidade natural para exercê-la. Qual análise sociológica é sustentada?",
        "hint": "Diferencie evidência sobre uma habilidade de uma generalização que transforma pertencimento de gênero em destino obrigatório.",
        "options": [
          "A afirmação naturaliza um papel e generaliza capacidades; é preciso examinar aprendizagem, oportunidades e diferenças individuais.",
          "A afirmação comprova cientificamente que todas as mulheres têm a mesma capacidade profissional.",
          "Uma expectativa familiar não pode ter qualquer relação com socialização ou oportunidades.",
          "Toda norma familiar é idêntica em todas as sociedades, independentemente de história e contexto."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: o caso apresenta uma generalização naturalizante, sem evidência sobre cada pessoa. A análise investiga formação, oportunidades e diferenças internas. B trata a alegação como comprovação; C exclui a família da socialização; D impõe universalidade sem fundamento. A resposta não diagnostica capacidades individuais nem afirma que corpos e habilidades sejam indistintos em todos os aspectos."
      },
      {
        "level": "intermediate",
        "prompt": "Caso fictício autoral: uma instituição declara oferecer atendimento igual, mas mantém uma prática que exclui repetidamente pessoas racializadas de um serviço. Qual investigação é mais adequada?",
        "hint": "Compare a declaração geral com o funcionamento concreto e seus efeitos, sem depender apenas de encontrar um insulto explícito.",
        "options": [
          "Encerrar a análise: a declaração de igualdade garante ausência de qualquer barreira.",
          "Atribuir automaticamente a mesma intenção consciente a todos os funcionários, sem examinar a prática.",
          "Examinar critérios, execução, registros e efeitos da prática, inclusive mecanismos institucionais de exclusão.",
          "Concluir que categorias socialmente construídas nunca influenciam acesso a serviços."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a investigação examina como a instituição funciona e quais efeitos produz, permitindo avaliar mecanismos e evidências. A confunde declaração com prática; B atribui intenções iguais sem pesquisa; D ignora efeitos de classificações sociais. A análise institucional não exige insulto explícito, mas também não dispensa demonstração do mecanismo e cuidado com as conclusões."
      },
      {
        "level": "advanced",
        "prompt": "Exercício autoral: um relatório analisa separadamente gênero e raça, tomando apenas mulheres brancas como referência da experiência feminina e apenas homens negros como referência da experiência negra. Qual contribuição da interseccionalidade responde a esse limite?",
        "hint": "Pergunte quais experiências podem desaparecer quando cada eixo é representado por apenas uma parte das pessoas que o compõem.",
        "options": [
          "Somar um ponto fixo por identidade, determinando a experiência de qualquer pessoa sem pesquisar o contexto.",
          "Investigar como raça e gênero se articulam nas experiências de mulheres negras, sem presumir uniformidade do grupo.",
          "Eliminar raça e gênero da pesquisa, pois toda categoria social é sem consequência.",
          "Concluir que as experiências dos dois grupos escolhidos descrevem necessariamente todas as mulheres negras."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: a perspectiva investiga a articulação de relações que pode ficar invisível no recorte de eixo único, sem substituir pesquisa por identidade presumida. A cria uma aritmética fixa de sofrimento; C apaga relações relevantes; D universaliza experiências de partes dos grupos. O argumento identifica uma lacuna analítica e propõe investigá-la, sem decretar o mesmo resultado para toda pessoa."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Música: ritmo, melodia, harmonia e timbre",
    "objective": "Distinguir organização temporal, linha melódica, relações harmônicas e qualidade timbral, analisando combinações e mudanças em descrições musicais completas sem exigir áudio externo.",
    "prerequisites": [
      "Sons e silêncios",
      "Comparação entre grave e agudo",
      "Sequência, repetição e contraste"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Ritmo, pulso e andamento",
        "explanation": "Ritmo é a organização de sons e silêncios no tempo, incluindo durações, entradas e acentos. Pulso é uma referência de batidas percebidas; andamento indica sua velocidade. Um mesmo padrão de durações pode ser executado mais depressa ou mais devagar sem mudar suas proporções. Batidas por minuto, ou BPM, só ficam claras quando se sabe qual unidade está sendo contada. Sessenta batidas por minuto correspondem a uma batida por segundo; dobrar esse número reduz à metade o intervalo entre batidas regulares. Compasso organiza tempos em grupos segundo uma referência métrica: na notação usual, 3/4 contém três tempos de semínima e 4/4 contém quatro. Isso não informa sozinho quantas notas haverá, porque cada tempo pode ser subdividido ou ocupado por uma nota prolongada ou pausa. Acentos e síncopes podem contrastar com a organização métrica esperada; não se deve chamar qualquer ritmo diferente de erro. Também existem práticas com maior liberdade temporal, sem um pulso regular evidente. A notação e os conceitos desta aula são ferramentas de análise, sobretudo de repertórios que usam essa organização, e não condições para que toda cultura produza música válida. Para comparar descrições, separe quantidade de tempos, posição dos eventos e velocidade. Aumentar a intensidade sonora torna um trecho mais forte; não significa automaticamente torná-lo mais rápido ou mais agudo.",
        "steps": [
          "Identifique a unidade usada como pulso e a velocidade indicada.",
          "Localize grupos de tempos e durações de sons e pausas.",
          "Diferencie ritmo, compasso, andamento e intensidade.",
          "Analise acentos e contrastes sem impor um único padrão a toda música."
        ],
        "example": "Padrão autoral escrito: em um grupo de quatro tempos, um som dura dois tempos e os dois sons seguintes duram um tempo cada. A soma é quatro, mas há três ataques de notas. Executar o grupo lentamente ou rapidamente altera sua duração em segundos, sem exigir que a relação 2:1:1 entre as durações seja mudada.",
        "pitfall": "Confundir quantidade de notas com quantidade de tempos ou supor que mudar o BPM obrigatoriamente altera o compasso."
      },
      {
        "level": "intermediate",
        "title": "Melodia e harmonia: linhas e relações",
        "explanation": "Melodia é uma linha musical percebida como sequência organizada de alturas e durações. Seu desenho pode subir, descer ou repetir notas; contorno é o percurso relativo, e extensão é a distância entre a nota mais grave e a mais aguda. Uma linha pode ser cantada ou tocada, passar entre instrumentos ou repetir uma altura com diferentes durações. Altura se relaciona à percepção de grave e agudo; não se confunde com volume. Harmonia examina relações entre alturas combinadas e sua organização ao longo do trecho. Acordes e suas sucessões são recursos importantes em muitos repertórios, mas nem toda música exige acompanhamento em acordes ou o mesmo sistema tonal. Na harmonia tonal, funções como tônica e dominante descrevem relações em uma tonalidade; uma lista de notas sem contexto não autoriza inferir toda a função ou intenção expressiva. Uma tríade pode ser formada por fundamental, terça e quinta; fundamental do acorde não é sempre a tônica da tonalidade. Uma melodia pode permanecer reconhecível quando o acompanhamento muda, embora sua percepção e as relações harmônicas se transformem. Também pode manter o contorno em uma transposição, que desloca as alturas por um mesmo intervalo. Observe que sequência e simultaneidade são modos de focalizar a análise, não universos isolados: uma melodia tem ritmo e pode sugerir relações harmônicas, e acordes podem ser apresentados em notas sucessivas. Interpretar música exige considerar o conjunto e suas convenções, sem afirmar que todo acorde maior comunica alegria ou toda passagem menor expressa tristeza de modo universal.",
        "steps": [
          "Descreva o contorno e as durações da linha principal.",
          "Diferencie altura, intensidade e identidade da fonte.",
          "Observe notas combinadas e sucessões harmônicas.",
          "Relacione função e expressão ao contexto, sem fórmulas emocionais universais."
        ],
        "example": "Exemplo autoral simbólico: uma linha apresenta Sol–Lá–Si–Lá em alturas ascendentes e depois descendente. Se a linha for repetida com outro acompanhamento, as quatro notas e seu contorno podem ser preservados, enquanto as relações com as notas de apoio mudam. A descrição permite comparar melodia e harmonia sem supor uma gravação externa.",
        "pitfall": "Chamar a fundamental de qualquer acorde de tônica da tonalidade ou reduzir harmonia a uma regra obrigatória idêntica em todas as tradições."
      },
      {
        "level": "advanced",
        "title": "Timbre, textura e escuta comparativa",
        "explanation": "Timbre é a qualidade sonora que ajuda a distinguir fontes e modos de produzir som, mesmo quando altura e intensidade percebidas são semelhantes. Forma do instrumento, material, vibração, registro e modo de execução podem influenciar essa qualidade. O início do som, sua sustentação e seu término também participam da percepção. Não há correspondência simples em que um material ou uma família instrumental garanta sempre uma única cor sonora. Um mesmo instrumento pode produzir qualidades distintas com mudanças de articulação e técnica, e uma síntese pode aproximar características de diferentes fontes. Por isso, reconhecer um timbre não prova de modo infalível qual objeto foi usado. Textura diz respeito à organização e à relação entre linhas e camadas: uma única linha sem acompanhamento difere de uma linha apoiada por acordes ou de várias linhas com relativa independência. Textura não é sinônimo de timbre: mudar o instrumento de uma linha pode alterar a qualidade sonora sem acrescentar uma nova linha. Já acrescentar outra linha pode mudar a organização do conjunto, ainda que as fontes sejam parecidas. Para comparar duas versões, controle o que a descrição mantém igual e identifique o que foi alterado: ritmo, andamento, alturas, acompanhamento, timbre ou combinação de elementos. Sem ouvir uma gravação, não é possível afirmar qual versão real é mais brilhante ou reconhecer seu instrumento por experiência auditiva; porém é possível raciocinar sobre condições explicitadas em um caso escrito. Uma análise bem sustentada descreve evidências e limites, em vez de atribuir automaticamente a toda pessoa a mesma emoção ou audição.",
        "steps": [
          "Identifique quais parâmetros são iguais nas versões comparadas.",
          "Distinga fonte, técnica, altura, intensidade e qualidade sonora.",
          "Separe mudança timbral de mudança no número e na relação entre linhas.",
          "Formule uma interpretação compatível com a descrição e declare limites de escuta."
        ],
        "example": "Situação autoral: uma linha é tocada por cordas primeiro com arco e depois com as cordas dedilhadas. Se notas e durações forem mantidas, a mudança de produção e ataque pode modificar o timbre e a articulação sem exigir outra sequência melódica. A descrição não pretende reproduzir áudio nem garantir que todo ouvinte identifique a técnica sem contexto.",
        "pitfall": "Tratar timbre como sinônimo de frequência fundamental, ou confundir a troca da fonte sonora de uma linha com a adição de outra linha musical."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo escrito autoral: um padrão mantém as mesmas durações relativas e o mesmo agrupamento de tempos. A execução passa de 60 para 120 batidas por minuto, contando a mesma unidade de pulso. Qual mudança é necessariamente indicada?",
        "hint": "Compare a velocidade do pulso, mantendo separados andamento, agrupamento métrico e intensidade sonora.",
        "options": [
          "O compasso necessariamente muda de três para quatro tempos.",
          "O volume sonoro necessariamente dobra e todas as notas se tornam mais agudas.",
          "O intervalo entre pulsos regulares passa de 1 segundo para 0,5 segundo; o andamento aumenta.",
          "O padrão deixa de conter ritmo, pois ritmo só existe a 60 batidas por minuto."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: 60/60=1 segundo por pulso e 60/120=0,5 segundo por pulso. A mesma unidade passa a ocorrer duas vezes mais frequentemente. A modifica o agrupamento sem evidência; B confunde velocidade com intensidade e altura; D impõe uma restrição inexistente. As durações relativas e o agrupamento foram mantidos no modelo, embora a duração absoluta da execução diminua."
      },
      {
        "level": "intermediate",
        "prompt": "Caso autoral totalmente descrito: uma voz apresenta Dó–Ré–Mi, uma nota após a outra; ao mesmo tempo, um teclado sustenta o conjunto Dó–Mi–Sol. O que a descrição permite distinguir?",
        "hint": "Focalize a linha sucessiva da voz e as alturas combinadas que a acompanham, sem transformar essas funções em uma regra para toda música.",
        "options": [
          "A voz apresenta uma linha melódica, e o conjunto de notas do teclado participa do acompanhamento harmônico.",
          "O teclado não pode participar de harmonia porque seus sons são simultâneos.",
          "A voz não pode apresentar melodia porque também possui durações e ritmo.",
          "A presença de Dó no teclado prova que toda a obra, não fornecida, está obrigatoriamente em Dó maior."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a descrição explicita uma linha sucessiva de alturas na voz e um conjunto sustentado que participa da harmonia. B nega justamente a combinação apresentada; C trata ritmo e melodia como incompatíveis; D infere a tonalidade de toda uma obra de informações insuficientes. A conclusão distingue o papel das camadas, sem supor que só exista harmonia com notas atacadas simultaneamente."
      },
      {
        "level": "advanced",
        "prompt": "Comparação hipotética autoral: uma versão usa flauta e outra usa clarinete para a mesma linha, mantendo alturas, durações, andamento e intensidade percebida semelhantes, sem acrescentar vozes. Qual análise é adequada?",
        "hint": "Distingua qualidade da fonte de organização temporal, alturas e número de linhas; não presuma escuta de um áudio não fornecido.",
        "options": [
          "A troca prova que as notas passaram obrigatoriamente de graves para agudas.",
          "A troca obriga a existência de várias melodias independentes simultâneas.",
          "Mesmas alturas e durações garantem que não possa haver qualquer diferença de qualidade sonora.",
          "A fonte pode alterar o timbre sem exigir mudança da linha melódica nem adição de outra voz."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: fontes diferentes podem apresentar qualidades timbrais distintas, mantendo a linha descrita. A inventa mudança de altura; B acrescenta vozes que o caso exclui; C reduz identidade sonora a alturas e durações. Não é necessário reconhecer por audição uma gravação inexistente nem garantir que toda diferença será identificada infalivelmente por qualquer ouvinte."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Ginásticas e práticas de condicionamento",
    "objective": "Distinguir finalidades das ginásticas, capacidades físicas e variáveis de organização do exercício, analisando práticas de condicionamento com inclusão, autonomia e crítica a promessas universais.",
    "prerequisites": [
      "Cultura corporal e participação",
      "Diferença entre objetivo e resultado",
      "Leitura crítica de informações sobre o corpo"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Ginásticas e suas finalidades",
        "explanation": "As ginásticas reúnem práticas corporais com histórias, objetivos e organizações diferentes. Na classificação educacional da BNCC, a ginástica geral ou para todos valoriza expressão, exploração de movimentos, aprendizagem compartilhada e participação não competitiva. As ginásticas de condicionamento orientam exercícios à manutenção ou melhoria da condição física, com planejamento de sessões. As de conscientização corporal enfatizam percepção e atenção ao próprio corpo. Essa classificação ajuda a comparar finalidades, mas não transforma cada gesto em propriedade exclusiva de um grupo. Um movimento pode aparecer em práticas com objetivos distintos. Ginásticas competitivas, como a artística e a rítmica, possuem regras e critérios de avaliação esportiva, distinguindo-se de uma proposta escolar que não organiza disputa por desempenho. Atividade física é um conceito mais amplo, relacionado a movimento corporal com gasto de energia, inclusive em deslocamentos e tarefas cotidianas. Exercício físico é uma prática planejada e estruturada com objetivos de manutenção ou desenvolvimento de capacidades. Nem todo movimento cotidiano é um programa de exercício. Para reconhecer condicionamento, pergunte o que se pretende desenvolver e como a prática é organizada, em vez de decidir apenas pela presença de música, aparelhos ou suor. Aprender esses conceitos não exige reproduzir acrobacias ou seguir um treino por conta própria. A compreensão da cultura corporal inclui observar, analisar, comparar e participar de propostas adequadas com orientação.",
        "steps": [
          "Identifique a finalidade e a organização da prática descrita.",
          "Diferencie participação expressiva, condicionamento, conscientização e competição.",
          "Distinga atividade física cotidiana de exercício planejado.",
          "Reconheça que o mesmo movimento pode assumir sentidos diferentes."
        ],
        "example": "Comparação fictícia autoral: uma turma cria uma apresentação coletiva sem ranking; outra estuda como sessões são organizadas para desenvolver capacidades; uma terceira observa percepções corporais em uma proposta orientada. As finalidades ajudam a analisar as práticas, sem supor que um único gesto ou equipamento determine toda sua classificação.",
        "pitfall": "Definir qualquer movimento como ginástica de condicionamento ou considerar toda ginástica uma competição de acrobacias."
      },
      {
        "level": "intermediate",
        "title": "Capacidades e variáveis do planejamento",
        "explanation": "Capacidades físicas são recursos do movimento, e uma prática pode solicitar várias ao mesmo tempo. Força envolve produzir tensão para atuar contra resistências; resistência muscular envolve sustentar ou repetir ações ao longo do esforço. Aptidão cardiorrespiratória se relaciona à sustentação de esforços com participação integrada dos sistemas de transporte e uso de oxigênio. Flexibilidade envolve amplitude de movimento, e equilíbrio se relaciona ao controle da postura. Essas capacidades não se resumem ao tamanho dos músculos nem a uma aparência corporal considerada ideal. No planejamento, frequência indica quantas sessões ocorrem em um intervalo; duração indica quanto tempo; intensidade descreve a exigência; tipo identifica a prática e as tarefas propostas. Repetições, séries, resistências e intervalos também podem compor a organização, conforme o objetivo. Aumentar o tempo não significa necessariamente aumentar a intensidade. A mesma tarefa externa pode representar esforços relativos diferentes para pessoas diferentes; portanto, não é adequado concluir que todos vivenciam uma sessão da mesma forma. Objetivos, experiências anteriores e condições individuais orientam adaptações e progressão, com atenção à recuperação. Uma tarefa que enfatiza uma capacidade não garante desenvolver igualmente todas as outras. Estas variáveis são estudadas aqui para compreender e avaliar descrições de práticas, não para estabelecer doses, cargas ou um plano individual. Copiar uma rotina divulgada na mídia sem considerar seu contexto confunde informação geral e orientação adequada para uma pessoa concreta.",
        "steps": [
          "Reconheça capacidades solicitadas sem reduzi-las à aparência.",
          "Separe frequência, duração, intensidade e tipo.",
          "Considere que o esforço relativo pode variar entre pessoas.",
          "Relacione objetivos, adaptação, progressão e recuperação à orientação qualificada."
        ],
        "example": "Ficha didática hipotética: um planejamento altera apenas o número de sessões em uma semana, mantendo o tempo por sessão e as tarefas. A variável diretamente modificada é a frequência. Isso não demonstra que a intensidade por sessão aumentou nem estabelece que o novo número seja apropriado para qualquer estudante.",
        "pitfall": "Confundir mais sessões ou mais minutos com maior intensidade, ou imaginar que uma mesma carga externa produz esforço relativo idêntico para todos."
      },
      {
        "level": "advanced",
        "title": "Inclusão, avaliação e mídia",
        "explanation": "Uma proposta escolar de condicionamento deve favorecer aprendizagem e participação, considerando diferentes habilidades, preferências e necessidades. Inclusão não exige que todos executem movimentos idênticos, com a mesma amplitude ou resistência; adaptações podem preservar objetivos de aprendizagem. Também não se reduz a deixar alguém apenas observando por exclusão automática: diferentes formas de participação podem ser construídas com o professor. Comparar o progresso de uma pessoa em condições adequadas não equivale a publicar um ranking de corpos ou atribuir valor pessoal ao desempenho. Resultados de uma tarefa dependem de suas condições e não comprovam sozinhos a saúde global de alguém. A crítica à mídia pergunta que objetivos, evidências e interesses sustentam mensagens sobre corpo e exercício. Promessas de resultados rápidos, garantidos e iguais para qualquer pessoa ignoram diferenças e podem incentivar excesso ou práticas inadequadas. Mais esforço não é sempre melhor, e dor não é requisito que se deva buscar para validar uma atividade. A análise deve reconhecer limites e a importância de orientação responsável, sem ensinar uso de medicamentos ou suplementos como atalhos. Esta aula é conceitual: seus casos não prescrevem execução de movimentos, tratamento, dieta ou carga individual. Em uma avaliação pedagógica, podem ser examinados compreensão das variáveis, cooperação, respeito e capacidade de propor alternativas acessíveis. O cuidado com o corpo inclui autonomia informada, convívio e condições reais de acesso, em vez de uma obrigação de atingir um único padrão estético.",
        "steps": [
          "Investigue barreiras de acesso e possibilidades de adaptação com o professor.",
          "Diferencie aprendizagem e cooperação de ranking corporal.",
          "Examine evidências e limites de promessas divulgadas na mídia.",
          "Avalie o alcance dos resultados sem diagnosticar saúde ou prescrever treinos."
        ],
        "example": "Cenário autoral: uma turma discute se deve avaliar apenas quem produz o maior resultado em uma tarefa. Outra proposta considera compreensão do objetivo, análise de variáveis, colaboração e progresso contextualizado. O debate permite examinar aprendizagem e inclusão sem exigir que todos tenham as mesmas condições ou exponham informações pessoais de saúde.",
        "pitfall": "Usar aparência ou um resultado isolado como diagnóstico de saúde, ou confundir inclusão com a exigência de execução idêntica para todas as pessoas."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Caso hipotético autoral: uma proposta descreve sessões planejadas de exercícios, organizadas para desenvolver capacidades físicas, com objetivos e variáveis definidos. Qual finalidade aparece como central nessa descrição?",
        "hint": "Observe o objetivo declarado, sem classificar a prática apenas pelo uso de música, aparelhos ou pela presença de movimentos repetidos.",
        "options": [
          "Uma competição oficial de ginástica artística, demonstrada apenas pela palavra sessão.",
          "Uma apresentação obrigatoriamente sem qualquer objetivo físico ou planejamento.",
          "Uma ginástica de condicionamento, pela organização voltada ao desenvolvimento de capacidades.",
          "Uma atividade sem gasto de energia, porque toda prática planejada deixa de ser atividade física."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: objetivos de capacidades e organização de sessões caracterizam a finalidade de condicionamento indicada. A inventa competição e modalidade; B nega os objetivos explícitos; D trata exercício e atividade física como excludentes. O caso não determina quais exercícios ou cargas seriam adequados a uma pessoa e não exige executá-los."
      },
      {
        "level": "intermediate",
        "prompt": "Ficha conceitual autoral: dois participantes realizam a mesma tarefa externa durante o mesmo tempo, mas relatam exigências de esforço diferentes. Qual interpretação é adequada?",
        "hint": "Diferencie a tarefa externa da intensidade relativa vivenciada por uma pessoa, sem atribuir diagnóstico a um relato isolado.",
        "options": [
          "A mesma tarefa garante intensidade relativa idêntica, independentemente das pessoas.",
          "A diferença prova, sem outras informações, uma doença em um dos participantes.",
          "O tempo igual demonstra que frequência semanal e intensidade são a mesma variável.",
          "A exigência relativa pode variar; a descrição não basta para diagnosticar saúde ou prescrever ajustes individuais."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: uma tarefa externa comum não garante o mesmo esforço relativo. A desconsidera diferenças; B transforma informação insuficiente em diagnóstico; C confunde tempo, frequência e intensidade. A análise reconhece o limite da descrição e a necessidade de orientação contextualizada, em vez de estabelecer uma carga ou classificar a saúde dos participantes."
      },
      {
        "level": "advanced",
        "prompt": "Exercício autoral de leitura crítica: uma publicidade promete que uma única rotina produzirá o mesmo corpo em todas as pessoas em poucos dias e exige suportar dor para comprovar resultado. Qual avaliação é sustentada?",
        "hint": "Examine promessa universal, diferenças individuais e a ideia de sofrimento obrigatório, sem criar outro protocolo de treino.",
        "options": [
          "A promessa ignora diferenças e limites; aprendizagem e cuidado exigem análise crítica e orientação responsável, sem buscar dor como requisito.",
          "A exigência de dor é suficiente para comprovar cientificamente a eficácia e a segurança da rotina.",
          "A promessa garante que adaptações e recuperação se tornam desnecessárias para qualquer pessoa.",
          "O anúncio demonstra que o único objetivo válido de toda ginástica é padronizar a aparência."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: promessas iguais para todos desconsideram contexto e diferenças, e dor não é requisito a buscar como validação. B transforma sofrimento em prova; C elimina cuidados sem fundamento; D reduz finalidades diversas à padronização estética. A resposta avalia criticamente o anúncio, sem prescrever exercícios, doses ou tratamento."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Terra, Lua e Sistema Solar",
    "objective": "Relacionar componentes do Sistema Solar e movimentos da Terra e da Lua à alternância de dias e noites, estações, fases e eclipses, interpretando modelos com limites explícitos.",
    "prerequisites": [
      "Luz, iluminação e sombra",
      "Esfera, eixo e órbita",
      "Comparação entre escalas de tempo"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Corpos, órbitas e movimentos",
        "explanation": "O Sistema Solar inclui o Sol e corpos ligados a ele pela gravidade: planetas, planetas anões, satélites naturais e pequenos corpos, como asteroides e cometas. O Sol é uma estrela, e a Terra é um planeta; a Lua é o satélite natural da Terra. Os oito planetas, na ordem de suas órbitas a partir do Sol, são Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno. Plutão é classificado como planeta anão, e não como um dos oito planetas dessa lista. Essa ordem não significa que estejam alinhados no espaço nem igualmente separados. A luz visível pela qual observamos a Lua e muitos outros corpos é principalmente luz solar refletida; ver um astro brilhante não basta para classificá-lo como estrela. Rotação é o movimento em torno do próprio eixo; translação é o movimento orbital em torno de outro corpo ou do centro de massa do sistema. A rotação terrestre ajuda a explicar a alternância de iluminação solar em um lugar, e a órbita da Terra em torno do Sol se relaciona ao ano. Um dia solar médio tem cerca de 24 horas e um ano cerca de 365 dias e um quarto; são aproximações, não uma regra de calendário sem exceções. A Lua também gira e orbita: apresentar aproximadamente a mesma face à Terra não significa não ter rotação. Diagramas didáticos frequentemente alteram tamanhos e distâncias para permitir a visualização; é preciso distinguir representação e escala real.",
        "steps": [
          "Classifique Sol, Terra e Lua e reconheça os demais componentes.",
          "Diferencie rotação e movimento orbital.",
          "Relacione dia e ano aos movimentos adequados.",
          "Confira escala e posição sem imaginar alinhamento fixo dos planetas."
        ],
        "example": "Modelo conceitual autoral: marque um ponto numa esfera terrestre e mantenha uma fonte luminosa distante em posição fixa enquanto a esfera gira. O ponto alterna entre regiões iluminada e não iluminada sem que seja necessário apagar a fonte. Trata-se de uma representação de dias e noites, com simplificações de escala e iluminação.",
        "pitfall": "Explicar a noite pelo apagamento do Sol ou afirmar que a Lua não gira porque apresenta aproximadamente a mesma face à Terra."
      },
      {
        "level": "intermediate",
        "title": "Fases lunares e eclipses",
        "explanation": "Fora das situações de eclipse, aproximadamente metade da Lua recebe iluminação solar direta. Da Terra, vemos frações diferentes dessa região iluminada conforme mudam as posições relativas de Sol, Terra e Lua. A sequência das fases não é causada pela sombra terrestre cobrindo a Lua toda semana. Na Lua nova, a direção aparente da Lua fica próxima à do Sol, e sua face voltada à Terra recebe pouca iluminação solar direta. Na cheia, ela aparece aproximadamente na direção oposta à do Sol no céu, permitindo ver a face quase toda iluminada. Nos quartos, cerca de metade do disco aparente está iluminada; a palavra quarto não significa que vemos somente um quarto do disco lunar. Entre essas posições, a aparência muda gradualmente. O ciclo de uma Lua nova à seguinte dura aproximadamente 29,5 dias, diferente dos cerca de 27,3 dias de uma volta orbital em relação às estrelas distantes, porque a Terra também avança em sua órbita. Eclipses exigem alinhamentos específicos: num eclipse solar, a Lua pode ocultar o Sol para observadores em parte da Terra; num lunar, a Lua atravessa a sombra terrestre. A órbita lunar é inclinada em relação ao plano orbital da Terra, por isso nem toda Lua nova produz eclipse solar nem toda cheia produz eclipse lunar. A face distante da Lua não é uma metade permanentemente sem iluminação: também passa por dia e noite. A orientação visual do crescente depende da perspectiva do observador, de modo que letras desenhadas no céu não são regra universal de fase.",
        "steps": [
          "Identifique a fonte de iluminação e o observador.",
          "Compare posições relativas e fração iluminada do disco aparente.",
          "Diferencie fases regulares e passagem por sombra em um eclipse.",
          "Considere inclinação orbital e perspectiva antes de generalizar."
        ],
        "example": "Descrição autoral de modelo: uma Lua colocada aproximadamente de lado em relação à direção Terra–Sol pode mostrar ao observador terrestre metade do disco iluminada. Isso ajuda a interpretar um quarto lunar. A representação não precisa supor que a sombra da Terra cobriu metade da Lua nem que só existe iluminação na face voltada para nós.",
        "pitfall": "Confundir fases com sombra terrestre ou deduzir que toda Lua cheia necessariamente entra na sombra da Terra."
      },
      {
        "level": "advanced",
        "title": "Estações, perspectiva e limites dos modelos",
        "explanation": "As estações resultam principalmente da inclinação do eixo terrestre combinada com a translação e a manutenção aproximada de sua orientação ao longo de um ano. O eixo é inclinado cerca de 23,4 graus em relação à perpendicular ao plano orbital, não em relação ao próprio plano. Isso modifica a incidência dos raios solares e a duração do período iluminado em diferentes latitudes. Perto do solstício de dezembro, o hemisfério Sul está inclinado em direção ao Sol: em latitudes médias austrais, os dias são mais longos e a incidência é mais direta do que no inverno local. No hemisfério Norte ocorre a situação sazonal oposta. Em junho, a configuração se inverte. A distância Terra–Sol varia ao longo da órbita, mas não explica essa oposição simultânea das estações entre hemisférios. Não é correto atribuir o verão de um hemisfério apenas a estar mais próximo do Sol. Solstícios e equinócios são referências astronômicas; suas consequências de iluminação variam com latitude, e condições meteorológicas de um dia não são determinadas somente pela estação. A observação de um movimento aparente também exige atenção ao referencial: o deslocamento diário do Sol no céu não prova, sozinho, que ele orbita a Terra. Um modelo útil deve relacionar posição, iluminação, escala e período sem transformar uma simplificação em fato literal. Uma figura com órbita muito alongada pode exagerar distâncias, e círculos desenhados no papel não demonstram que todos os movimentos ocorrem num único plano. Esta análise é conceitual e não requer olhar diretamente para o Sol; observação solar necessita procedimentos e proteção específicos.",
        "steps": [
          "Localize hemisfério, latitude e posição sazonal.",
          "Relacione inclinação e órbita à incidência e duração do dia.",
          "Diferencie estação astronômica, distância e tempo meteorológico.",
          "Avalie referencial e limites de escala de cada representação."
        ],
        "example": "Caso hipotético autoral: dois estudantes em latitudes médias, um no Norte e outro no Sul, comparam o mesmo período de junho. O modelo prevê maior duração de luz diurna no Norte e menor no Sul. Como os dois estão no mesmo planeta e momento orbital, uma explicação baseada apenas na distância Terra–Sol não resolve a diferença entre suas estações.",
        "pitfall": "Medir a inclinação de 23,4 graus em relação ao plano orbital, ou explicar estações opostas apenas pela variação da distância ao Sol."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo autoral da Terra esférica: um ponto da superfície alterna entre iluminação solar e ausência dela enquanto o planeta gira, mantendo o Sol como fonte luminosa. Qual movimento explica essa alternância diária?",
        "hint": "Diferencie o giro em torno do próprio eixo da volta orbital relacionada ao ano, sem supor que a fonte luminosa se apaga.",
        "options": [
          "A órbita da Lua apaga o Sol todas as noites em todo o planeta.",
          "A rotação da Terra muda a orientação do ponto em relação à iluminação solar.",
          "A translação terrestre completa uma volta em 24 horas e substitui a rotação.",
          "O Sol deixa de produzir energia toda vez que o ponto fica na região noturna."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: com a rotação, o ponto muda sua orientação em relação à iluminação e alterna dia e noite no modelo. A transforma o ciclo diário em ocultação lunar universal; C troca os períodos e movimentos; D supõe o apagamento da estrela. A explicação é uma representação simplificada e não afirma que todas as latitudes tenham igual duração diária de luz em qualquer época."
      },
      {
        "level": "intermediate",
        "prompt": "Situação didática autoral: vista da Terra, a Lua aparece em direção aproximadamente oposta à do Sol e está fora da sombra terrestre. Qual interpretação é adequada?",
        "hint": "Considere quanto da região iluminada fica voltada ao observador e se existe condição de sombra para um eclipse lunar.",
        "options": [
          "É necessariamente um eclipse lunar total, mesmo com a Lua fora da sombra da Terra.",
          "É Lua nova: a face voltada à Terra precisa estar sem iluminação direta nessa posição.",
          "A Lua passou a produzir luz visível como uma estrela, dispensando iluminação solar.",
          "A Lua está na fase cheia ou próxima dela, e a descrição não indica eclipse lunar."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a oposição aparente permite ver quase toda a face iluminada, característica da cheia ou de uma posição próxima, sem exigir passagem pela sombra. A contradiz a condição fora da sombra; B usa a geometria da nova em posição oposta; C troca reflexão por produção estelar de luz. Uma Lua cheia não implica automaticamente eclipse, devido à geometria orbital."
      },
      {
        "level": "advanced",
        "prompt": "Comparação autoral: perto do solstício de dezembro, o hemisfério Sul está inclinado em direção ao Sol. Para localidades de latitudes médias nos dois hemisférios, qual explicação das estações é adequada?",
        "hint": "Relacione incidência dos raios e duração do período iluminado, observando que os hemisférios vivem situações opostas no mesmo momento orbital.",
        "options": [
          "A inclinação favorece verão astronômico no Sul e inverno no Norte; a distância Terra–Sol sozinha não explica essa oposição.",
          "Os dois hemisférios necessariamente têm verão porque o planeta está na mesma distância do Sol.",
          "As estações dependem apenas de o Sol se apagar por mais horas no Norte.",
          "A Terra interrompe sua rotação no Sul durante o verão, enquanto continua girando no Norte."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a inclinação altera a incidência e a duração da iluminação em sentidos sazonais opostos, favorecendo verão austral e inverno boreal. B ignora a geometria dos hemisférios; C inventa apagamento solar; D divide indevidamente a rotação de um mesmo planeta. A resposta descreve a referência astronômica sem garantir a temperatura ou o tempo meteorológico de uma cidade em um dia específico."
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
  },
  {
    "subject": "Inglês",
    "topic": "Skimming e scanning",
    "contentSha256": "81d93a6084f33631830b7d6ef2d02100ac3a538a9c2cab431e8d75dbfc315148",
    "draftMethod": "Autoria e conferência Codex com fontes de ensino de leitura; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.teachingenglish.org.uk/professional-development/teachers/knowing-subject/theories-reading-part-2",
      "https://learnenglishteens.britishcouncil.org/exams/reading-exams/how-read-text",
      "https://learninglab.rmit.edu.au/university-essentials/study-essentials/reading-skills/skimming-and-scanning/",
      "https://www.open.edu/openlearn/mod/oucontent/view.php?id=88998&section=_unit3.2",
      "https://www.open.edu/openlearn/mod/oucontent/view.php?id=88998&section=_unit3.2.3"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "O prompt pede a ideia geral do texto sobre oficina comunitária de reparos e troca de conhecimentos. A alternativa 0 resume corretamente a atividade, a finalidade ambiental de reduzir resíduos e a aproximação entre pessoas, conforme o texto. A opção 1 contradiz o repair e o reduce waste, a opção 2 transforma uma apresentação geral em manual detalhado inexistente, e a opção 3 afirma garantia universal de desaparecimento imediato de resíduos, não presente no texto. A resolução independente confirma que a síntese deve abranger o conjunto sem promover detalhe isolado."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "O prompt pergunta a hora de início da visita guiada de sexta-feira. O texto indica 'Guided tours: Monday at 10:00 and Friday at 14:00'. A alternativa 2 corresponde corretamente a '14:00, o início da visita guiada de sexta-feira'. A alternativa 0 refere-se ao horário de abertura diária do centro (09:00), a alternativa 1 ao prazo de reserva de quinta-feira (18:00) e a alternativa 3 ao início da visita de segunda-feira (10:00). O scanning exige associar o dia Friday ao evento guided tours e ao horário 14:00, sem selecionar o primeiro número visto ou confundir com outras informações do aviso."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "O prompt avalia uma conclusão sobre aviso de entrada gratuita e reserva obrigatória. O texto diz 'Although entry is free, visitors must book a timed ticket. The last entry is at 16:30; the building closes at 17:00'. A alternativa 3 é correta porque 'must book' exige reserva e 'last entry at 16:30' fixa o último acesso antes do fechamento, mesmo que o prédio feche às 17:00. A alternativa 0 incorretamente afirma que free cancela toda obrigação após although, a alternativa 1 erroneamente suppõe que fechamento e last entry são necessariamente iguais, e a alternativa 2 nega indevidamente a existência do last entry e da condição de reserva."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Possessivos e demonstrativos em espanhol",
    "contentSha256": "62ddee0025ff9027c0598c8431ad80fcc8b4683d8f1ad5a57a3260a330fc4865",
    "draftMethod": "Autoria Codex; conferência RAE/ASALE e UOC; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.rae.es/gtg/posesivo",
      "https://www.rae.es/gtg/determinante-posesivo",
      "https://www.rae.es/gtg/demostrativo",
      "https://www.rae.es/gtg/pronombre-demostrativo",
      "https://www.rae.es/dpd/este",
      "https://www.rae.es/dpd/tilde",
      "https://www.uoc.edu/es/servicios/lengua-estilo/criterios/gramatica/determinantes"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Carpetas é feminino plural e a construção usa o possessivo curto prenominal de primeira pessoa: Mis carpetas están ordenadas, índice2. Mi não recebe plural na opção0; mí da opção1 é pronome tônico, não possessivo determinante; mías na opção3 não ocupa essa posição prenominal no espanhol geral do exercício. A concordância depende de carpetas, não do gênero do possuidor."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "No exercício intermediário, o modelo de três graus posiciona 'esa' como indicação de proximidade com o interlocutor (quem escuta), enquanto 'este' marca proximidade com quem fala. As cartas (feminino plural) pertencem ao grupo de quem fala, exigindo possessivo 'nuestras' (feminino plural). A alternativa 'Esas cartas son nuestras' usa 'esas' para proximidade com o interlocutor e 'nuestras' para concordância em gênero e número, sendo a única opção grammaticalmente correta e semanticamente consistente com o contexto."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A intenção informada é a agenda de Marta. Sergio habló con Marta sobre la agenda de Marta explicita esse vínculo e corresponde ao índice0. B, de Sergio, também é explícita, mas muda o possuidor e não cumpre a intenção. C usa mí indevidamente como determinante. D, suyo agenda, é inadequada nessa posição e não concorda com agenda; não é apenas um problema de ambiguidade. A frase inicial com su, isolada, pode permitir diferentes referentes."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Estática, torque e equilíbrio",
    "contentSha256": "835ccc7e3cf459c8b2a6f9a2b214a9e9105a88b474ed559406c3c49766ae4dd6",
    "draftMethod": "Autoria e conferência algébrica Codex; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/university-physics-volume-1/pages/12-1-conditions-for-static-equilibrium",
      "https://openstax.org/books/university-physics-volume-1/pages/12-2-examples-of-static-equilibrium",
      "https://openstax.org/books/university-physics-volume-1/pages/10-6-torque",
      "https://openstax.org/books/university-physics-volume-1/pages/6-2-friction",
      "https://openstax.org/books/college-physics-2e/pages/9-1-the-first-condition-for-equilibrium",
      "https://openstax.org/books/college-physics-2e/pages/9-3-stability"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A fórmula dá τ=rFsenθ=0,4·30·0,5=6 N·m, índice1. O braço perpendicular é0,2m, diferente da distância0,4m até o ponto. A alternativa12Nm ignora o seno;3Nm não coincide com o produto correto, sem ser necessário inventar como o aluno teria obtido esse número;30Nm confunde o valor da força com torque. Os dados descrevem o ângulo entre r e F e dispensam uma figura externa."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Selecionando o polo na extremidade esquerda, calculam-se os torques horários: 200 N · 1 m + 100 N · 2 m = 400 N·m. A reação da direita R_d deve satisfazer R_d · 4 m = 400 N·m, logo R_d = 100 N. Na vertical, R_e + R_d = 300 N, portanto R_e = 200 N. A alternativa 'Esquerda: 200 N; direita: 100 N' (índice 3) é a única que satisfaz simultaneamente o equilíbrio de forças e de torques. As outras falham no balanço de momentos ou na soma de forças verticais."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Nas hipóteses do modelo (plano horizontal, sem outras forças verticais), a força normal N equivale ao peso, 50 N. O limite do atrito estático é f_s,max = μ_s N = 0,4 · 50 = 20 N. Para equilíbrio horizontal, o atrito estático deve ser 15 N sentido contrário à força aplicada (para a esquerda). Como 15 N < 20 N, o repouso é possível no modelo declarado. A alternativa 'Atrito de 15 N para a esquerda, abaixo do limite de 20 N; o repouso é possível' (índice 0) está correta. As demais opções incorretamente impõem atrito máximo, ignoram o atrito estático ou invertem o sentido do atrito."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Funções inorgânicas",
    "contentSha256": "da27e7df57fe43ddeec38cd11d27043c7175ca38204058254a1673ff6b3f727a",
    "draftMethod": "Autoria Codex; conferência conceitual e estequiométrica; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/2-7-chemical-nomenclature",
      "https://openstax.org/books/chemistry-2e/pages/14-1-bronsted-lowry-acids-and-bases",
      "https://openstax.org/books/chemistry-2e/pages/14-4-hydrolysis-of-salts",
      "https://openstax.org/books/chemistry-2e/pages/4-2-classifying-chemical-reactions",
      "https://www.lsi.usp.br/~ramc/quimica_arquivos/Apostila%202.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "A sequência ácido, base, sal e óxido corresponde corretamente a HCl(aq) como ácido de Arrhenius, NaOH como hidróxido de sódio, KCl como sal iônico e CO2 como óxido binário, conforme definido na seção básica e consistente com o modelo Arrhenius em água, as distratores sendo classificações incompatíveis com fórmulas e meio indicado."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Índice2: H3PO4+3NaOH e Na3PO4+3H2O têm, cada lado, H6,Na3,P1,O7. Na alternativaA, esquerda H4/Na1 contra direita H2/Na3; naB, esquerda H5/Na2 contra direita H4/Na3; naD, esquerda H9/P2/O11 contra direita H6/P1/O7, com Na3 em ambos. Os erros são nos coeficientes propostos: nenhuma dessas alternativas altera os índices internos. O balanceamento correto conserva todos os átomos sem modificar fórmulas e não afirma pH final7."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "NH4+ doa próton à água gerando H3O+, conferindo caráter ácido à solução de NH4Cl segundo o modelo Brønsted–Lowry; a alternativa A erroneamente posta que todo sal contém um metal e apresenta pH universal 7, ignorando que NH4Cl não tem cátion metálico e que a classificação de sal não garante neutralidade, conforme a explicação avançada sobre hidrólise iônica e distinção entre classificação da substância e pH da solução."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Genética mendeliana",
    "contentSha256": "d7f297a2abf1bc52c5f14576f97dfc6c9acce19dd47001d863aa0467a7f518fc",
    "draftMethod": "Autoria e enumeração genética Codex; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/biology-2e/pages/12-1-mendels-experiments-and-the-laws-of-probability",
      "https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits",
      "https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance",
      "https://www.genome.gov/genetics-glossary/Mendelian-Inheritance",
      "https://www.genome.gov/genetics-glossary/Allele",
      "https://www.genome.gov/genetics-glossary/genotype",
      "https://www.genome.gov/genetics-glossary/Phenotype"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Cada progenitor Aa produz gametas A e a com probabilidade1/2 por tipo. As quatro combinações AA,Aa,aA,aa têm1/4cada; somenteaa é recessivo sob dominância completa. O índice1 expressa1/4 por descendente sem cota de nascimentos. A toma uma única letraa como suficiente para fenótipo recessivo; C chamaAA de recessivo; D impõe contagem garantida em grupo pequeno. Não confundir probabilidade de gameta e de combinação."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "No cruzamento-teste entre dominante (AA ou Aa) × recessivo (aa), a ocência de qualquer descendente recessivo (aa) implica necessariamente que o progenitor dominante é heterocigoto Aa, pois um progenitor AA não poderia transmitir alelo recessivo algum. A opção AA contradiz a informação do descendente recessivo; a opção aa ignora o fenótipo dominante declarado; a opção sem distinção ignora a lógica do cruzamento-teste."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Sob distribuição independente, AaBb produzAB,Ab,aB,ab com1/4cada, enquanto aabb só produzab. Aabb exigeAb×ab, logo1/4 e índice2. A inventa dezesseis gametas por progenitor; B aplica9/16 de classefenotípica de outrocruzamento; D supõe que qualquer gameta produzAabb. Os outros gametas originamAaBb,aaBb ouaabb. A conta é de genótipo nas condições expressas, não proporção universal de fenótipos."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Revolução Industrial e trabalho",
    "contentSha256": "bc62b8016e3c7c74e8af0005bd239beff67a19fb70e2114251f82ecaad9eb116",
    "draftMethod": "Autoria Codex após rejeição factual de rascunho Claude Code; nova crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://historicengland.org.uk/content/docs/education/explorer/teachers-kit-steam-power-pdf/",
      "https://blog.sciencemuseum.org.uk/remembering-james-watt/",
      "https://www.scienceandindustrymuseum.org.uk/sites/default/files/2021-12/SIM_LargePrintBook_TextilesGallery_UpperLevel_Book1-compressed.pdf",
      "https://www.parliament.uk/about/living-heritage/transformingsociety/tradeindustry/industrycommunity/overview/textileindustries/",
      "https://www.parliament.uk/about/living-heritage/transformingsociety/livinglearning/19thcentury/overview/factoryact/",
      "https://www.gedling.gov.uk/leisure-culture-and-parks/parks-and-green-spaces/luddites",
      "https://openstax.org/books/world-history-volume-2/pages/9-1-the-second-industrial-revolution"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A alternativa correta (C, índice 2) é a única que reconhece a articulação combinada de técnica, energia, capital e mercados sem pretender causalidade única ou resultado automático, alinhando-se ao objetivo da aula de interpretar causas múltiplas sem supor progresso uniforme ou automático na industrialização."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A alternativa correta (A, índice 0) é a única que distingue corretamente relações econômicas conexas de identidade jurídica entre assalariamento e escravização, conforme o foco da aula em conflitos do trabalho e organização fabril, diferenciando prescrição de prática real."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A alternativa correta (D, índice 3) é a única que distingue adequadamente a criação normativa de sua aplicação prática, reconhecendo limitações de fiscalização e abrangência, em linha com o objetivo da aula sobre limites da legislação sem supor progresso automático ou eliminação imediata de práticas."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "População, migração e demografia",
    "contentSha256": "2ff955332211162c818ecceaee2b536ff8faf1792841eaaea20a3580c4439c11",
    "draftMethod": "Autoria e cálculos Codex após rejeição de rascunhos Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://wmr-educatorstoolkit.iom.int/glossary",
      "https://desapublications.un.org/file/20622/download",
      "https://anuario.ibge.gov.br/2024/glossario-2024.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "A densidade demográfica é calculada dividindo população pela área: 6000/40=150 hab/km². A alternativa correta (índice 3) fornece o valor numérico correto e observa que a média não prova distribuição uniforme, alinhando-se ao pitfall e à explicação sobre média territorial. As outras opções contêm erros de cálculo, unidade invertida ou afirmação falsa de uniformidade."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Calcula-se saldo natural: 20-8=12; saldo migratório: 30-10=20; população final: 1000+12+20=1032; variação percentual sobre a população inicial: (32/1000)*100=3,2%. A alternativa de índice 1 apresenta todos esses valores corretos. As outras opções apresentam erros nos saldos, no total final ou na porcentagem (32% instead of 3,2%)."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "O crescimento total é a soma do saldo natural (-20) e do saldo migratório (+35), resultando em aumento de 15 pessoas. A alternativa de índice 0 expressa corretamente esse resultado e o raciocínio de que as entradas líquidas superam a perda natural. As outras opções ignoram a migração, descartam o sinal negativo ou somam módulos absolutamente."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Filosofia contemporânea e tecnologia",
    "contentSha256": "c514dce81520913f16190582dff8e212b6f0d313bd2ce986516bdb738e229738",
    "draftMethod": "Autoria e conferência conceitual Codex; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://plato.stanford.edu/entries/phenomenology/",
      "https://plato.stanford.edu/entries/existentialism/",
      "https://plato.stanford.edu/entries/critical-theory/",
      "https://plato.stanford.edu/entries/heidegger/",
      "https://plato.stanford.edu/entries/technology/",
      "https://plato.stanford.edu/entries/ethics-ai/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A alternativa B preserva o sentido fenomenológico de intencionalidade como consciência dirigida ao objeto, sem exigir plano deliberado prévio; A confunde o termo com planejamento intencional, C transforma direção da experiência em criação material e D impõe requisito econômico inexistente, tornando-as distrators filosoficamente inadequados."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A alternativa D formula a pergunta normativa essencial sobre a justificabilidade dos fins tecnológicos e suas consequências, ao contrário de A que acelera sem questionar finalidade, B que rejeita toda ciência e C que atribui consciência ao equipamento sem fundamentação; a crítica busca explicitar inclusão, custos e acesso além da velocidade computacional."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A alternativa A corretamente limita o valor da precisão média agregada, exigindo análise de critérios, distribuição de erros, contestação e responsabilidade; B converte média em garantia individual injustificada, C infere consciência e intenção discriminatória sem evidência e D apaga papéis humanos e institucionais, tornando-se distrators logicamente inválidos."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Gênero, raça e relações sociais",
    "contentSha256": "6b5653ed7642d4991c66cd8f6aea041a23def13917b546345833d94cfa28e016",
    "draftMethod": "Autoria Codex após rejeição editorial de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.genome.gov/genetics-glossary/Race",
      "https://plato.stanford.edu/entries/feminism-gender/",
      "https://plato.stanford.edu/entries/discrimination/",
      "https://openstax.org/books/introduction-sociology-3e/pages/11-3-prejudice-discrimination-and-racism",
      "https://openstax.org/books/introduction-sociology-3e/pages/12-1-sex-gender-identity-and-expression",
      "https://openstax.org/books/introduction-sociology-3e/pages/11-1-racial-ethnic-and-minority-groups",
      "https://ideas.wharton.upenn.edu/wp-content/uploads/2018/07/Crenshaw-1989.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "A alternativa correta é A porque a afirmação da família naturaliza papéis de gênero e generaliza capacidades sem evidência sobre cada mulher; a análise sociológica exige examinar formação, oportunidades e diferenças individuais, não aceitar generalizações como destinos biológicos. As demais alternativas apresentam erros: B trata a alegação como comprovação científica; C nega qualquer relação da expectativa familiar com socialização; D impõe universalidade incondicional das normas familiares, o que contradiza a variabilidade histórica e contextual."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "A alternativa correta é C porque a investigação adequada deve examinar critérios, execução, registros e efeitos da prática de exclusão, incluindo mecanismos institucionais, em vez de encerrar a análise prematuramente ou atribuir intenções conscientes idênticas a todos os funcionários. A alternativa A encerra a análise baseada apenas na declaração de igualdade, B atribui intenções iguais sem pesquisa empírica e D nega o impacto das categorias socialmente construídas no acesso a serviços, o que contradiz a sociologia crítica."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "A alternativa correta é B porque a contribuição da interseccionalidade consiste em investigar como raça e gênero se articulam nas experiências de mulheres negras, sem presumir uniformidade dentro do grupo. A alternativa A reduz a interseccionalidade a aritmética fixa de desvantagens; C apaga relações sociais relevantes; D universaliza a partir de recortes parcial dos grupos, exatamente o limite que a interseccionalidade busca superar ao perguntar quais experiências ficam invisíveis."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Música: ritmo, melodia, harmonia e timbre",
    "contentSha256": "558f013f662a4777d784313f25d7f914ac50b39982b04849c8ef58237031b18d",
    "draftMethod": "Autoria e conferência musical Codex após rejeição factual de rascunho Claude Code; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.open.edu/openlearn/mod/oucontent/view.php?id=102472&section=2",
      "https://www.open.edu/openlearn/mod/oucontent/view.php?id=102472&section=3",
      "https://www.open.edu/openlearn/mod/oucontent/view.php?id=102472&section=4",
      "https://www.open.edu/openlearn/mod/oucontent/view.php?id=102598&section=1",
      "https://www.open.edu/openlearn/mod/oucontent/view.php?id=102599&section=1",
      "https://www.open.edu/openlearn/mod/oucontent/view.php?id=102598&section=2",
      "https://www.open.edu/openlearn/mod/glossary/print.php?fullsearch=0&hook=ALL&id=103806&mode=&offset=0&pagelimit=0&sortkey=&sortorder="
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Ao dobrar o BPM mantendo a mesma unidade de pulso, o intervalo entre pulsos halves de 1 segundo para 0,5 segundo; o agrupamento métrico e as durações relativas permanecem inalterados, de modo que a única mudança necessariamente indicada é o aumento do andamento, correspondendo à alternativa C."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A descrição apresenta claramente uma linha sucessiva de alturas na voz (melodia) e um conjunto sustentado de notas no teclado (acompanhamento harmônico), de modo que a alternativa A distingue corretamente os papéis das camadas, enquanto as outras opções fazem inferências inválidas ou negam a combinação apresentada."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A comparação entre flauta e clarinete mantendo alturas, durações, andamento e intensidade semelhantes demonstra que a fonte sonora pode alterar o timbre sem exigir mudança da linha melódica nem adição de vozes, de modo que a alternativa D é a análise adequada, enquanto as outras opções introduzem mudanças ou restrições não presentes no caso."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Ginásticas e práticas de condicionamento",
    "contentSha256": "c2fbde8120e487f697fa5041e98bb04cc45d823f68bfaf4d8484e6bb247a0e3c",
    "draftMethod": "Autoria e conferência educacional Codex; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://basenacionalcomum.mec.gov.br/images/BNCC_EI_EF_110518_versaofinal_site.pdf",
      "https://ninho.inca.gov.br/jspui/bitstream/123456789/6567/1/guia_atividade_fisica_populacao_brasileira.pdf",
      "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
      "https://www.cdc.gov/physical-activity-basics/measuring/index.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A descrição enfatiza sessões planejadas de exercícios organizadas para desenvolver capacidades físicas. A alternativa 2 identifica corretamente essa finalidade como ginástica de condicionamento, conforme a definição da aula de que o condicionamento visa manutenção ou melhoria da condição física por meio de sessões planejadas. As alternativas 0, 1 e 3 são distractores: a 0 incorretamente associa 'sessão' a ginástica artística competitiva; a 1 nega o objetivo físico e o planejamento explicitados; a 3 incorre na definição de atividade física, contradizendo a distinção da aula entre atividade física e exercício planejado."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "O enunciado apresenta dois participantes realizando a mesma tarefa externa pelo mesmo tempo, mas relatando exigências de esforço diferentes. A alternativa 3 adequa-se ao reconhecer que a exigência relativa pode variar e a descrição não basta para diagnosticar saúde ou prescrever ajustes individuais, alinhando-se ao princípio da aula de que a mesma tarefa pode representar esforços relativos diferentes para pessoas diferentes. As alternativas 0, 1 e 2 são distractores: a 0 falsa garantia de intensidade relativa idêntica independentemente das pessoas; a 1 incorretamente diagnostica doença a partir de informação insuficiente; a 2 confunde o tempo da tarefa com frequência semanal e variáveis de intensidade."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "O exercício propõe a análise crítica de anúncio que promete corpo uniforme em todas as pessoas em poucos dias e exige dor para comprovar resultado. A alternativa 0 avalia corretamente que a promessa ignora diferenças e limites, e que aprendizagem e cuidado exigem análise crítica e orientação responsável, sem buscar dor como requisito, conforme as diretrizes da aula sobre crítica à mídia. As alternativas 1, 2 e 3 são distractores: a 1 eleva a exigência de dor a prova científica de eficácia; a 2 elimina adaptações e recuperação necessárias; a 3 reduz finalidades diversas da ginástica ao padrão estético de aparência."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Terra, Lua e Sistema Solar",
    "contentSha256": "3f88207a87eea0491b5a89255354cff27b1fd8d04dd2a271e613f0509572a065",
    "draftMethod": "Autoria e conferência astronômica Codex; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://science.nasa.gov/solar-system/solar-system-facts/",
      "https://science.nasa.gov/earth/facts/",
      "https://science.nasa.gov/moon/moon-phases/",
      "https://spaceplace.nasa.gov/seasons/en/",
      "https://spaceplace.nasa.gov/eclipses/en/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A rotação da Terra em torno do próprio eixo alterna a orientação de um ponto na superfície em relação à fonte solar, explicando a alternância dia/noite em 24 horas, enquanto a translação orbital leva cerca de 365 dias e a órbita lunar não causa apagamento solar noturno. Essa distinção evita a confusão entre movimento diário e anual."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Com a Lua em direção aproximadamente oposta ao Sol e fora da sombra terrestre, a face iluminada voltada à Terra corresponde à fase cheia ou próxima; a ausência de passagem pela sombra descarta eclipse lunar, e a posição não corresponde à Lua nova (que ficaria entre Terra e Sol)."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A inclinação axial de 23,4° combinada com a translação orbital cria estações opostas nos hemisférios no mesmo momento orbital; a variação da distância Terra-Sol é insuficiente e não explica a sazonalidade diferenciada, sendo a inclinação o fator determinante."
      }
    ]
  }
] as const;
