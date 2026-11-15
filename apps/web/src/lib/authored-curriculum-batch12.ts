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
  }
] as const;
