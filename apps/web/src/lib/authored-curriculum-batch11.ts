import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch11:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Equações, inequações e sistemas",
    "objective": "Resolver equações lineares e racionais, analisar sinais em inequações lineares, quadráticas e racionais e resolver e classificar sistemas lineares de duas incógnitas, preservando domínio e verificando soluções.",
    "prerequisites": [
      "Operações com números reais e frações",
      "Distributiva e fatoração de polinômios",
      "Plano cartesiano e pares ordenados"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Equivalência e domínio na resolução de equações",
        "explanation": "Uma equação afirma igualdade entre expressões; resolver significa encontrar todos os valores do domínio que tornam essa igualdade verdadeira. Uma expressão isolada não possui conjunto solução até receber uma condição. Na equação linear ax + b = c, com a diferente de zero, subtrair b dos dois lados e dividir por a resulta em x = (c − b)/a. Em transformações mais gerais, preserve equivalência: adicionar o mesmo valor aos dois lados ou multiplicar por uma constante não nula não altera as soluções. Dividir por uma expressão com incógnita exige excluir seus zeros ou analisar casos, e elevar ao quadrado pode introduzir candidatos que não satisfazem a igualdade inicial. Em uma equação racional, o denominador original nunca pode ser zero. Fatorar e cancelar um fator comum não recupera valores excluídos: a expressão simplificada pode parecer definida onde a original não era. Registre primeiro as restrições e depois confira candidatos no enunciado original. Uma equação pode ter uma solução, nenhuma ou muitas; obter uma igualdade sempre verdadeira dentro do domínio difere de obter contradição. Por exemplo, 0x = 0 é satisfeita por todos os reais, enquanto 0x = 7 não tem solução real. A verificação final distingue candidato algébrico e solução válida, além de detectar erros de sinal e de distributiva. Em problemas com significado concreto, podem existir ainda restrições como contagens inteiras ou medidas não negativas, que precisam ser declaradas.",
        "steps": [
          "Defina o domínio e exclua zeros de denominadores.",
          "Simplifique cada lado com distributiva e termos semelhantes.",
          "Transforme a igualdade por operações justificadas.",
          "Substitua candidatos na equação original e nas restrições."
        ],
        "example": "Exemplo autoral de equação linear: 3(2x − 1) = 15 implica 6x − 3 = 15, depois 6x = 18 e x = 3. A conferência é 3(6 − 1) = 15. Já passar diretamente de 3(2x − 1) para 6x − 1 mudaria a expressão, pois a distributiva atua também sobre o termo constante.",
        "pitfall": "Cancelar um fator e admitir o zero do denominador original, dividir por incógnita sem verificar zero ou tratar um candidato de transformação não equivalente como solução conferida."
      },
      {
        "level": "intermediate",
        "title": "Inequações e análise de sinais",
        "explanation": "Uma inequação compara expressões por menor, maior ou suas versões com igualdade. A solução frequentemente é um conjunto de intervalos, não um único número. Somar o mesmo valor aos dois lados preserva o sentido; multiplicar ou dividir por número negativo inverte a desigualdade. Assim, −2x > 6 equivale a x < −3. Para multiplicar por expressão de sinal desconhecido, é necessário separar casos ou escolher outro método; não se pode manter o sinal automaticamente. Em uma inequação polinomial ou racional, leve os termos para comparar uma única expressão com zero, fatore quando possível e localize raízes do numerador e zeros do denominador. Esses pontos dividem a reta em intervalos nos quais fatores contínuos sem novos zeros mantêm o sinal. Avalie os fatores ou escolha um ponto de cada intervalo. Uma raiz do numerador pode entrar quando há igualdade permitida, desde que a expressão esteja definida; zero do denominador nunca entra, mesmo com ≥ ou ≤. Para uma quadrática ax² + bx + c com a diferente de zero, raízes reais e sinal de a orientam a análise. Havendo duas raízes distintas, o sinal entre elas é contrário ao de a e, fora, acompanha a. Raiz dupla não provoca a mesma troca de sinal, e ausência de raízes reais exige examinar o sinal da expressão. Colchetes indicam inclusão de extremidade e parênteses, exclusão; infinito não é um número a ser incluído. Escrever os intervalos deve respeitar tanto a comparação quanto o domínio.",
        "steps": [
          "Organize uma expressão comparada com zero.",
          "Marque raízes e pontos de indefinição separadamente.",
          "Analise sinais em cada intervalo sem multiplicar por sinal desconhecido.",
          "Inclua apenas extremidades permitidas pela comparação e pelo domínio."
        ],
        "example": "Exemplo autoral de inequação quadrática: (x − 2)(x − 5) ≤ 0 tem pontos críticos 2 e 5. Para x < 2, ambos os fatores são negativos e o produto é positivo; entre 2 e 5, os sinais são diferentes e o produto é negativo; acima de 5, ambos positivos. Como os zeros são admitidos, a solução é 2 ≤ x ≤ 5. Não há denominador nem ponto indefinido neste exemplo.",
        "pitfall": "Multiplicar por expressão de sinal desconhecido sem separar casos, incluir polo por causa de ≥ ou ≤ ou alternar sinais mecanicamente em uma raiz de multiplicidade par."
      },
      {
        "level": "advanced",
        "title": "Sistemas lineares e compatibilidade",
        "explanation": "Resolver um sistema significa satisfazer todas as suas equações simultaneamente. Em duas incógnitas, uma solução é um par ordenado; não basta que cada coordenada isoladamente resolva uma das linhas. Para sistemas lineares 2 × 2, substituição isola uma incógnita em uma equação e a insere na outra. Eliminação combina múltiplos das equações para remover um termo, preservando operações reversíveis; trocar uma equação por sua soma com um múltiplo da outra é diferente de apenas descartar uma restrição. Depois de encontrar uma coordenada, recupere a outra e verifique ambas. As retas correspondentes podem se cruzar em um ponto, ser paralelas distintas ou coincidir, representando respectivamente solução única, nenhuma ou infinitas soluções nos reais. Essa classificação pressupõe equações que realmente representem retas; linhas degeneradas como 0x + 0y = c devem ser analisadas diretamente. Para ax + by = c e dx + ey = f, determinante ae − bd diferente de zero garante solução única; determinante zero exige investigar compatibilidade e não significa automaticamente ausência de solução. Em sistemas com parâmetros, identifique antes valores que anulam divisores ou mudam a classificação. As soluções de problemas contextualizados ainda precisam atender às unidades e restrições do modelo. Sistemas não lineares não se reduzem à classificação por duas retas e exigem análise própria. A verificação simultânea continua sendo necessária, mesmo quando a resolução parece produzir um par simples.",
        "steps": [
          "Registre as duas equações e as restrições do modelo.",
          "Escolha substituição ou eliminação com operações válidas.",
          "Analise contradição, identidade ou solução única.",
          "Verifique o par em todas as equações originais."
        ],
        "example": "Sistema autoral com parâmetro real k: x + y = 4 e 2x + 2y = k. O dobro da primeira equação tem lado direito 8. Se k = 8, as linhas são equivalentes e todo par com x + y = 4 resolve; se k é diferente de 8, há contradição e nenhuma solução. Determinante zero não distingue sozinho esses dois casos.",
        "pitfall": "Aceitar um par que satisfaz apenas uma linha, declarar sistema impossível só porque seu determinante é zero ou dividir por parâmetro sem analisar o valor que o anula."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Exercício autoral nos reais: (x^2 - 9)/(x - 3) = 6. Use a fatoração fornecida x² − 9 = (x − 3)(x + 3), mantendo o domínio da equação original. Qual é o conjunto solução?",
        "hint": "O denominador original exclui um valor. Após cancelar o fator permitido, confira se o candidato obtido pertence ao domínio.",
        "options": [
          "Apenas x = 3, porque a simplificação permite recuperar o ponto excluído.",
          "Todos os reais diferentes de 3, pois toda equação racional é uma identidade.",
          "Apenas x = -3, porque todo zero do numerador resolve qualquer igualdade.",
          "Nenhum número real; conjunto solução vazio."
        ],
        "correctIndex": 3,
        "solution": "D: o domínio exige x ≠ 3. Nele, cancelar x − 3 produz x + 3 = 6, cujo único candidato é 3, excluído da equação original. Portanto não há solução real. A ignora o domínio; B confunde simplificação com identidade; C faz o numerador zero, mas para x = −3 o quociente vale zero, não seis. O cancelamento não define retroativamente a expressão no ponto em que seu denominador era zero."
      },
      {
        "level": "intermediate",
        "prompt": "Exercício autoral nos reais: resolva (x - 1)/(x + 2) ≥ 0, preservando os pontos em que o quociente não está definido.",
        "hint": "O numerador zera em 1 e o denominador em -2. Compare os sinais nos três intervalos e trate cada extremidade conforme sua função.",
        "options": [
          "-2 ≤ x ≤ 1.",
          "x < -2 ou x ≥ 1.",
          "x ≤ -2 ou x > 1.",
          "Somente x > -2, sem analisar o numerador."
        ],
        "correctIndex": 1,
        "solution": "B: se x < −2, numerador e denominador são negativos e o quociente é positivo; entre −2 e 1, os sinais diferem e ele é negativo; para x > 1, ambos são positivos. x = 1 zera o numerador e entra por causa de ≥, enquanto x = −2 é indefinido e sai sempre. A escolhe região de sinal oposto e inclui polo; C troca as inclusões; D admite valores de quociente negativo e não resolve a comparação."
      },
      {
        "level": "advanced",
        "prompt": "Sistema autoral de equações lineares nos reais: 2x + 3y = 19; 4x - y = 3. Qual par satisfaz simultaneamente as duas equações?",
        "hint": "Isole y na segunda equação e substitua na primeira; depois confira os dois valores nas duas linhas.",
        "options": [
          "x = 5; y = 2.",
          "x = 3; y = 1.",
          "x = 2; y = 5.",
          "x = 4; y = -1."
        ],
        "correctIndex": 2,
        "solution": "C: a segunda linha dá y = 4x − 3. Substituindo, 2x + 3(4x − 3) = 19 implica 14x = 28, então x = 2 e y = 5. Conferindo: 4 + 15 = 19 e 8 − 5 = 3. A dá 16 e 18 nos lados esquerdos; B dá 9 e 11; D dá 5 e 17. Nenhum desses pares atende às duas igualdades, e o determinante −14 diferente de zero confirma unicidade neste sistema."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Morfologia e classes de palavras",
    "objective": "Distinguir estrutura, flexão e formação de palavras e classificar usos em contexto pela tradição gramatical escolar brasileira, combinando critérios de forma, sentido e distribuição.",
    "prerequisites": [
      "Palavra e enunciado",
      "Noções de singular, plural e concordância",
      "Diferença entre palavra e função de um grupo na oração"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Estrutura, flexão e formação de palavras",
        "explanation": "A morfologia estuda a estrutura e os processos que envolvem palavras, incluindo flexão, formação e classificação. Morfema é uma unidade de forma associada a informação lexical ou gramatical; não equivale obrigatoriamente a sílaba nem a uma letra isolada. O radical participa da base de significado lexical em uma família de palavras. Afixos podem aparecer antes ou depois de uma base, como prefixos e sufixos, mas uma sequência de letras não é automaticamente um afixo em qualquer palavra em que apareça. Na distinção escolar usual, flexão expressa relações gramaticais em formas de uma palavra, enquanto derivação participa da formação de outra palavra. Em livro e livros, a diferença marca número; em livro e livreiro, há formação lexical por sufixação. Derivação não precisa sempre mudar a classe gramatical, e não é correto dizer que não tenha relação alguma com a sintaxe. Composição reúne bases, como em guarda-chuva, sem ser o mesmo processo de simplesmente acrescentar a marca de plural. As fronteiras e análises morfológicas podem ser discutidas por teorias distintas. Para esta aula, interessa justificar a análise pelas relações entre formas, significados e usos. Não se deve identificar processos apenas pelo tamanho da palavra ou supor que toda terminação seja uma desinência com o mesmo valor. A comparação precisa estabelecer que parte se mantém, o que se acrescenta ou se altera e qual informação resulta dessa diferença.",
        "steps": [
          "Compare formas e palavras de uma mesma família.",
          "Separe unidade de sentido e divisão silábica.",
          "Identifique informação gramatical ou formação lexical.",
          "Justifique o processo sem reduzir análise a letras finais."
        ],
        "example": "Comparação autoral: em útil e inútil, o elemento in- participa da formação de uma palavra com sentido de negação em relação à base. A presença de letras semelhantes em outro vocábulo não demonstra, por si, o mesmo prefixo. Em úteis, a relação é de número no paradigma de útil, e não criação obrigatória de outra classe de palavra.",
        "pitfall": "Igualar morfema a sílaba, chamar todo acréscimo de letra de flexão ou afirmar que a derivação sempre muda a classe gramatical."
      },
      {
        "level": "intermediate",
        "title": "Classes nominais e verbo no contexto",
        "explanation": "A tradição escolar brasileira costuma trabalhar dez classes: substantivo, artigo, adjetivo, numeral, pronome, verbo, advérbio, preposição, conjunção e interjeição. Outras descrições usam agrupamentos diferentes, como determinantes; isso não significa que uma lista seja a única organização possível em toda teoria ou país. Substantivos podem nomear entidades, processos, estados e conceitos e funcionar como núcleos de grupos nominais; definir apenas como nome de ser concreto seria insuficiente. Adjetivos caracterizam ou estabelecem relações referentes ao nome e podem aparecer em diferentes funções sintáticas. Artigos definidos e indefinidos participam da determinação de nomes e concordam conforme a construção. Numerais expressam noções como quantidade, ordem, multiplicação e fração, a depender do uso. Pronomes podem substituir ou acompanhar nomes, estabelecer referência a participantes e relacionar informações; não são apenas palavras que evitam repetição. Verbos apresentam categorias como tempo, modo, pessoa e número no paradigma, podendo expressar ação, estado, processo ou fenômeno. Uma forma verbal isolada não obriga classificar todo o grupo em que ocorre sem considerar o contexto. Classes chamadas variáveis não apresentam todas as mesmas flexões: nem todo adjetivo distingue gênero na forma, e nem todo substantivo possui os mesmos padrões de variação. Classe de palavra e função sintática são perguntas diferentes; substantivo não é sinônimo de sujeito, e adjetivo não é sempre adjunto. Combine critérios morfológicos, semânticos e distribucionais, em vez de adivinhar apenas pelo significado geral.",
        "steps": [
          "Declare a convenção gramatical adotada.",
          "Identifique o nome e elementos que o determinam ou caracterizam.",
          "Observe a forma verbal e suas relações no enunciado.",
          "Diferencie classe da palavra e função sintática na oração."
        ],
        "example": "Frase autoral: “Ela comprou três cadernos verdes”. Ela é pronome pessoal; comprou é verbo; três é numeral; cadernos é substantivo; verdes é adjetivo. O grupo três cadernos verdes exerce uma função na oração, mas isso não torna todas as suas palavras membros de uma única classe. A análise do grupo e a classificação das palavras se complementam.",
        "pitfall": "Definir substantivo somente por ser concreto, limitar verbo a ação, chamar todo termo ligado a nome de adjetivo ou confundir uma classe inteira com uma função sintática."
      },
      {
        "level": "advanced",
        "title": "Classes invariáveis e mudanças de classificação",
        "explanation": "Advérbios podem modificar verbos, adjetivos, outros advérbios ou ter alcance sobre um enunciado, conforme a construção e a descrição adotada. Não se restringem aos terminados em -mente nem apenas a lugar e tempo. Em seu uso adverbial, uma forma como meio, com sentido de um pouco, é invariável na norma de referência, enquanto meia, como numeral fracionário ligado a um nome feminino, pode concordar com ele. Preposições estabelecem relações entre termos e podem integrar complementos ou outras construções; conjunções conectam termos ou orações e contribuem para relações de sentido ou subordinação. Interjeições e expressões interjetivas podem produzir efeitos de chamada, reação ou emoção no contexto, sem que toda frase emotiva seja formada por uma única interjeição. Essas classes são chamadas invariáveis na classificação usual, mas formas graficamente semelhantes podem pertencer a classes diferentes em usos distintos. A pode funcionar como artigo, pronome ou preposição; classifique a ocorrência, não apenas a sequência de letras. Que pode retomar um antecedente como pronome relativo ou introduzir oração completiva como conjunção integrante. Testes de substituição ajudam quando respeitam a estrutura e o sentido; não são receitas mecânicas para qualquer frase. Em “Informaram que o portão fechou”, que introduz o conteúdo informado; em “O portão que fechou era lateral”, retoma portão e participa da oração relativa. Não trate diferenças de terminologia entre gramáticas como autorização para classificar sem justificar: explicite a convenção e as relações observáveis.",
        "steps": [
          "Identifique o elemento modificado ou ligado pela palavra.",
          "Compare usos semelhantes em construções diferentes.",
          "Use flexão e substituições como indícios, com limites.",
          "Explique a classificação da ocorrência pela estrutura e pelo sentido."
        ],
        "example": "Exemplo autoral de três ocorrências: “A pesquisadora chegou; o colega a cumprimentou; depois ela começou a trabalhar”. A primeira ocorrência de a é artigo ligado a pesquisadora; a segunda é pronome pessoal referente à pessoa cumprimentada; a terceira é preposição na construção começou a trabalhar. A grafia igual não fornece uma única classe para todas as ocorrências.",
        "pitfall": "Flexionar meio adverbial para concordar com um adjetivo, atribuir uma só classe a toda ocorrência de a ou que, ou aplicar um teste de substituição sem respeitar a construção."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Comparação autoral pela distinção escolar entre flexão e formação lexical: flor → flores; flor → florista. Qual análise é adequada?",
        "hint": "Observe a diferença entre indicar plural e formar outra palavra, que pode continuar pertencendo à mesma classe.",
        "options": [
          "As duas relações são obrigatoriamente flexão de número, sem formação lexical.",
          "Flores marca plural de flor; florista exemplifica derivação por sufixação, sem exigir mudança de classe.",
          "Flores e florista são necessariamente verbos, pois acrescentam letras ao nome.",
          "Florista resulta apenas de composição entre dois substantivos autônomos chamados flor e ista."
        ],
        "correctIndex": 1,
        "solution": "B: flores é a forma plural de flor, enquanto florista exemplifica formação de outra palavra com o sufixo -ista. Essa derivação pode manter a classe substantivo; mudança de classe não é requisito universal. A apaga a formação lexical, C atribui classe verbal sem apoio e D trata o sufixo como se fosse outro substantivo autônomo. Acrescentar letras não basta para identificar o processo: importa a relação de forma, sentido e uso."
      },
      {
        "level": "intermediate",
        "prompt": "Frase autoral: “As duas pesquisadoras brasileiras revisaram seus textos”. Pela tradição gramatical escolar brasileira, classifique, nesta ordem, As, duas, pesquisadoras, brasileiras, revisaram e seus.",
        "hint": "Diferencie determinação, quantidade, nome, caracterização, verbo e referência possessiva, sem confundir essas classes com funções sintáticas.",
        "options": [
          "Artigo; numeral; substantivo; adjetivo; verbo; pronome possessivo.",
          "Pronome pessoal; verbo; adjetivo; substantivo; artigo; preposição.",
          "Preposição; advérbio; verbo; interjeição; numeral; conjunção.",
          "Substantivo; artigo; pronome; verbo; adjetivo; numeral ordinal."
        ],
        "correctIndex": 0,
        "solution": "A: As determina o nome; duas indica quantidade; pesquisadoras é substantivo; brasileiras caracteriza esse nome; revisaram é forma verbal; seus é pronome possessivo que acompanha textos na classificação adotada. B, C e D atribuem classes incompatíveis às relações da frase: duas não é verbo ou advérbio, revisaram não é artigo, numeral ou adjetivo e seus não é preposição, conjunção ou numeral ordinal. A referência exata de seus depende do contexto, mas isso não altera a classificação pedida."
      },
      {
        "level": "advanced",
        "prompt": "Frase autoral para a norma de referência: “A maquete ficou meio torta; usamos meia folha de papel para ajustá-la”. Qual é a análise de meio e meia nessas ocorrências?",
        "hint": "Compare um modificador do adjetivo com uma expressão fracionária ligada ao substantivo folha.",
        "options": [
          "Ambos são artigos e precisam concordar obrigatoriamente com papel.",
          "Meio é sempre numeral, de modo que meio torta deve obrigatoriamente virar meia torta.",
          "Meia é advérbio invariável; por isso a expressão meia folha deve obrigatoriamente virar meio folha.",
          "Meio modifica torta como advérbio invariável; meia indica metade e funciona como numeral fracionário ligado a folha."
        ],
        "correctIndex": 3,
        "solution": "D: meio expressa um pouco ou parcialmente em relação ao adjetivo torta, funcionando como advérbio invariável na norma indicada. Meia expressa metade de uma folha e concorda com o substantivo feminino no uso de numeral fracionário. A confunde ambos com artigos e aponta referente inadequado; B universaliza o uso numeral; C inverte a análise e produz uma concordância incompatível com o contexto. A grafia semelhante não dispensa examinar o elemento modificado e o sentido."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Modernismo: fases e autores",
    "objective": "Relacionar fases convencionais do Modernismo brasileiro a projetos e obras diferentes, reconhecer procedimentos de renovação e interpretar textos sem reduzir autores, regiões e trajetórias a uma data ou fórmula única.",
    "prerequisites": [
      "Verso e prosa",
      "Narrador e eu lírico",
      "Relação entre contexto histórico e forma literária"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Primeiras propostas e limites do marco de 1922",
        "explanation": "O Modernismo brasileiro reúne projetos de renovação artística e debates sobre linguagem, cultura e representação do país. Uma periodização escolar usual distingue primeira fase de 1922 a 1930, segunda de 1930 a 1945 e uma terceira a partir de 1945, com limites finais e agrupamentos variáveis conforme a história literária. Esses recortes ajudam a organizar o estudo, mas não criam uma mudança simultânea em todos os autores. A Semana de Arte Moderna, realizada em São Paulo em fevereiro de 1922, é um marco importante; não representa o nascimento de toda experiência moderna no território nem a participação igual de todas as regiões e grupos sociais. Mário de Andrade e Oswald de Andrade são referências de propostas iniciais, mas não devem ser confundidos entre si ou tratados como portadores de um programa uniforme. Experimentação com verso livre, humor, paródia, oralidade e fragmentação pode contestar convenções acadêmicas, sem significar ausência de elaboração. No Manifesto Antropófago, publicado em 1928, Oswald trabalha a antropofagia como imagem cultural de apropriação e transformação, e não como ordem literal de prática corporal ou rejeição de qualquer contato estrangeiro. Debates sobre identidade nacional incluem tensões e contradições; representar uma cultura não autoriza falar por todos os seus integrantes. Um procedimento isolado, como linguagem cotidiana, não permite identificar automaticamente autoria, fase ou participação na Semana. Leia forma, projeto e contexto em conjunto, sem converter um marco em explicação exclusiva.",
        "steps": [
          "Use a periodização como recorte de estudo.",
          "Diferencie marco paulistano e experiências pelo país.",
          "Relacione renovação formal e debates culturais.",
          "Analise antropofagia como proposta metafórica, não identidade entre todos os projetos."
        ],
        "example": "Fragmento inteiramente autoral, sem atribuição histórica: “O bonde dobra. A placa promete pressa. Na esquina, ninguém sai do lugar”. A aproximação entre trânsito e promessa pode produzir ironia e fragmentação de uma cena cotidiana. Esses recursos ajudam a discutir experimentação, mas não provam que o fragmento seja de Mário ou Oswald nem que tenha sido escrito em 1922.",
        "pitfall": "Confundir Mário e Oswald, apresentar toda renovação como surgida em uma única semana ou tratar verso livre e oralidade como falta de trabalho formal."
      },
      {
        "level": "intermediate",
        "title": "Poesia e prosa na fase de 1930 a 1945",
        "explanation": "O recorte de 1930 a 1945 reúne ampliações e transformações do Modernismo, sem apagar diferenças entre gêneros e autores. A poesia não desaparece diante do romance social: Alguma poesia, de Carlos Drummond de Andrade, foi publicada em 1930 e ajuda a situar uma trajetória poética que articula experiência individual, ironia e relações com o mundo. Não se deve reduzir toda a produção posterior do poeta ao primeiro livro ou a um único tema. Na prosa, Graciliano Ramos publica Vidas secas em 1938, romance que acompanha uma família de retirantes e relações de privação e poder. Um espaço regional não equivale a cenário exótico sem conflitos nem permite explicar tudo por clima e fatalidade. A elaboração literária envolve foco narrativo, ritmo, escolhas lexicais e formas de representar pensamentos e silêncios. Literatura social não é mera transcrição documental: constrói perspectivas sobre experiências, e o narrador não pode ser igualado automaticamente ao autor. Nem todo texto da época é romance regional, nem todos os romances usam o mesmo narrador, linguagem ou orientação política. O contexto histórico contribui para formular perguntas, mas não determina mecanicamente cada recurso formal. Na leitura de um trecho, procure como ações, objetos, vozes e contrastes produzem relações entre indivíduo e sociedade. A data de publicação situa uma obra; a análise de sua organização sustenta a interpretação de seus efeitos e não deve ser substituída por uma etiqueta cronológica.",
        "steps": [
          "Diferencie poesia e prosa no mesmo recorte histórico.",
          "Relacione obras a trajetórias, não a uma fórmula para todos os autores.",
          "Observe narrador, linguagem e construção de conflitos.",
          "Evite reduzir desigualdades à paisagem ou à vontade isolada da personagem."
        ],
        "example": "Caso autoral de leitura de forma: em uma narrativa fictícia, a palavra para designar um direito aparece no discurso do chefe, mas some quando a personagem tenta reivindicá-lo. O contraste entre vozes pode produzir crítica a uma relação de poder. Isso é uma construção textual; não constitui citação de Vidas secas nem prova, por si, de que o narrador concorde com o chefe.",
        "pitfall": "Afirmar que entre 1930 e 1945 só existe romance regional, tomar crítica social por simples documento ou explicar relações de exploração unicamente pelo ambiente natural."
      },
      {
        "level": "advanced",
        "title": "Novos caminhos e fronteiras da terceira fase",
        "explanation": "A chamada terceira fase, em torno do pós-1945, reúne caminhos distintos e não deve ser confundida integralmente com uma única geração poética. João Cabral de Melo Neto publica O engenheiro em 1945 e desenvolve uma poesia frequentemente discutida pelo trabalho construtivo, pela atenção à materialidade e pelo rigor de organização; isso não autoriza dizer que sua obra não tenha dimensão social ou que toda poesia posterior siga o mesmo projeto. Guimarães Rosa publica Sagarana em 1946 e Grande sertão: veredas em 1956, articulando espaços do sertão a invenção de linguagem, oralidade trabalhada e problemas de experiência e narração. Não se trata de gravar a fala regional sem transformação artística. Clarice Lispector explora percepção, interioridade e modos de narrar; seu romance de estreia Perto do coração selvagem saiu em 1943, antes do corte convencional de 1945. Esse dado mostra por que associar uma autora a debates do terceiro momento não permite alterar datas ou supor que toda sua produção começou após aquela fronteira. Introspecção não significa ausência automática de mundo social, assim como invenção vocabular não identifica sozinha Guimarães Rosa. Compare processos concretos, distinguindo procedimentos, obras e trajetórias. As relações entre continuidade e ruptura não cabem em oposições rígidas como primeira fase sem técnica, segunda sem poesia e terceira sem sociedade. A leitura crítica usa os rótulos como instrumentos e permite revisá-los diante de documentação e análise.",
        "steps": [
          "Confira a data da obra, sem ajustá-la a uma fase.",
          "Diferencie geração poética e conjunto da produção posterior.",
          "Analise construção, oralidade e interioridade em seus contextos.",
          "Compare continuidades e diferenças sem atribuir autor por um traço isolado."
        ],
        "example": "Comparação autoral de procedimentos, sem imitação de escritores: um texto reorganiza sons e palavras para construir uma paisagem verbal; outro faz uma ação breve se prolongar na percepção de uma personagem. A diferença permite examinar linguagem e temporalidade narrativa. Não basta para identificar autores, datar os textos ou afirmar que um não possa ter preocupação social.",
        "pitfall": "Deslocar a estreia de Clarice para depois de 1945, igualar toda a terceira fase à geração poética de 45 ou tratar oralidade literária como reprodução sem trabalho de criação."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma ficha bibliográfica autoral de estudo informa: Alguma poesia, de Carlos Drummond de Andrade, 1930; Vidas secas, de Graciliano Ramos, 1938. Considerando o recorte convencional de 1930 a 1945 apresentado na aula, qual conclusão é adequada?",
        "hint": "Compare os gêneros e as datas, sem concluir que todas as obras ou autores do período sejam idênticos.",
        "options": [
          "A fase contém somente prosa e, portanto, a informação sobre Drummond deve ser apagada.",
          "As duas obras são o mesmo romance regional escrito em colaboração.",
          "O recorte reúne poesia e prosa, com projetos distintos; não se reduz a um único gênero ou fórmula.",
          "A data de uma obra prova que todos os seus versos ou capítulos não têm elaboração formal."
        ],
        "correctIndex": 2,
        "solution": "C: o conjunto exemplifica a presença de poesia e prosa no mesmo recorte, sem tornar seus projetos equivalentes. A nega a poesia que a ficha informa; B confunde obras, autores e gêneros; D transforma cronologia em julgamento sem análise da forma. Datas ajudam a situar, mas não substituem a leitura nem limitam toda a trajetória de Drummond ou de Graciliano a um único livro."
      },
      {
        "level": "intermediate",
        "prompt": "Fragmento inteiramente autoral, não extraído de escritor histórico: “O depósito estava cheio. Mesmo assim, a família recebeu menos; o pagamento dependia da conta que o proprietário se recusava a mostrar”. Qual leitura tem apoio no fragmento?",
        "hint": "Relacione disponibilidade de recursos, distribuição e controle de informação, sem inventar uma causa natural exclusiva.",
        "options": [
          "O contraste entre depósito cheio e recebimento menor, junto à conta ocultada, permite investigar uma relação social de poder e distribuição desigual.",
          "O fragmento prova que não existem recursos e que apenas a falta de chuva explica a situação.",
          "A frase demonstra necessariamente que o narrador e o proprietário têm a mesma opinião.",
          "A menção a uma família permite identificar com certeza o autor e o ano de publicação."
        ],
        "correctIndex": 0,
        "solution": "A: o texto contrapõe estoque e acesso, além de indicar controle da informação pelo proprietário. Isso sustenta uma leitura de relações sociais, sem exigir identificar autor real ou negar toda outra dimensão possível. B contradiz o depósito cheio e inventa causa climática; C confunde representação e adesão do narrador; D atribui autoria e data sem evidências. O trecho é original do exercício, e não uma passagem de Graciliano Ramos."
      },
      {
        "level": "advanced",
        "prompt": "Caso autoral de organização do estudo: um resumo associa Clarice Lispector a debates da chamada terceira fase e conclui que Perto do coração selvagem só pode ter sido publicado depois de 1945. A referência bibliográfica consultada registra 1943. Qual revisão é correta?",
        "hint": "Uma associação historiográfica não autoriza substituir a data documentada de uma obra; trajetórias e recortes podem se sobrepor.",
        "options": [
          "Mudar a referência para 1946 sem nova evidência, para que o livro caiba no esquema.",
          "Concluir que todo o Modernismo começou em 1943 e que não houve propostas anteriores.",
          "Descartar qualquer estudo de fases, pois uma fronteira convencional torna toda interpretação impossível.",
          "Manter 1943 e explicar que a periodização é um recorte, sem obrigar toda a trajetória da autora a começar depois de 1945."
        ],
        "correctIndex": 3,
        "solution": "D: preserva a informação bibliográfica e reconhece que fases são instrumentos historiográficos com fronteiras discutíveis. A altera documentação para servir ao esquema; B transforma a data de uma obra em início de todo o movimento; C passa do limite de uma classificação à recusa de qualquer análise. A associação de Clarice a certos caminhos da ficção não muda a estreia de 1943 nem reduz sua obra a um único procedimento."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Planejamento, escrita, revisão e reescrita",
    "objective": "Planejar um texto conforme proposta, gênero e interlocução, desenvolver argumentos com apoio verificável e revisar e reescrever conteúdo, organização e linguagem sem confundir correção superficial com solução de problemas de sentido.",
    "prerequisites": [
      "Tema, tese e argumento",
      "Parágrafo e relações entre ideias",
      "Diferença entre dado, exemplo e afirmação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Do comando ao plano de escrita",
        "explanation": "Planejar começa por compreender a tarefa: qual recorte temático, finalidade, gênero, interlocutor e condições de produção foram pedidos? Um texto pode falar do assunto geral e ainda deixar de responder ao recorte. Anote as exigências e formule a pergunta que a escrita precisa enfrentar. Levante possibilidades por lista, esquema ou escrita exploratória, depois selecione ideias relevantes e sustentáveis. Não é necessário usar a mesma técnica em todas as situações. Em uma argumentação, uma tese provisória apresenta o ponto de vista que será desenvolvido, em vez de apenas anunciar que o assunto é importante. Relacione cada razão a um apoio e explique como esse apoio contribui para a conclusão; uma citação decorada ou um número sem origem não cumpre automaticamente esse papel. Diferencie dado verificado, hipótese de trabalho e exemplo hipotético identificado. Organize uma sequência em que cada parte acrescente algo ao projeto, evitando parágrafos que repitam a mesma ideia com sinônimos. Introdução, desenvolvimento e conclusão são funções textuais, não uma quantidade fixa de parágrafos válida para todo gênero e toda prova. Durante a escrita, o plano pode ser revisto se a análise revelar uma tese excessiva ou uma relação não sustentada. Essa mudança não é falha por si: o planejamento orienta sem dispensar reflexão. Reserve oportunidades de reler e ajustar dentro do tempo disponível, sem transformar uma divisão pessoal de minutos em regra oficial ou garantia de nota.",
        "steps": [
          "Identifique recorte, gênero, interlocutor e restrições.",
          "Levante e selecione ideias com apoio verificável.",
          "Formule uma tese provisória adequada à tarefa.",
          "Organize funções das partes e revise o plano quando necessário."
        ],
        "example": "Planejamento autoral em tema diferente dos exercícios: para discutir preservação de um acervo sonoro comunitário, um roteiro pode separar risco de perda dos registros, condições de acesso e participação de seus detentores. Cada parte pede explicação e apoio próprio. Repetir três vezes que preservar a memória é importante não desenvolveria os três aspectos.",
        "pitfall": "Confundir tema geral com resposta ao recorte, usar repertório sem conexão ou impor número fixo de parágrafos e minutos como exigência de toda avaliação."
      },
      {
        "level": "intermediate",
        "title": "Rascunho, progressão e revisão do argumento",
        "explanation": "Escrever um rascunho transforma o plano em relações que um leitor possa acompanhar. Um parágrafo argumentativo precisa desenvolver sua função: apresentar uma ideia, sustentá-la e explicar sua ligação com o ponto de vista, sem que essa sequência seja uma fórmula obrigatória para qualquer gênero. Observe o alcance das palavras: todos, sempre e somente podem tornar uma tese mais forte do que os dados permitem. Um exemplo mostra uma possibilidade ou um caso; não comprova sozinho frequência nacional ou causa exclusiva. Conectivos indicam relações, mas escrever portanto não transforma uma sequência em consequência válida. Para revisar a organização, descreva em poucas palavras o que cada parágrafo efetivamente faz, não apenas o que você pretendia que fizesse. Esse esquema posterior, às vezes chamado roteiro reverso, pode revelar repetição, salto, ausência de justificativa ou uma parte que não responde à tese. É possível reorganizar, cortar, acrescentar explicação ou reformular o ponto de vista, dependendo do problema. Não invente uma fonte para manter uma frase vistosa: retire a alegação ou substitua por informação cuja origem e alcance possam ser conferidos. Peça a um leitor, quando houver possibilidade, que indique onde perdeu a relação entre ideias. Uma sugestão externa deve ser avaliada pelo projeto e pelas evidências, e não seguida mecanicamente. Revisão estrutural e revisão de linguagem podem se alternar, mas corrigir acentos não resolve uma contradição de conteúdo.",
        "steps": [
          "Explique como o apoio sustenta cada afirmação.",
          "Confira quantificadores, causas e conclusões.",
          "Resuma a função real de cada parágrafo do rascunho.",
          "Reorganize ou reescreva onde a relação não estiver sustentada."
        ],
        "example": "Revisão autoral de sequência: um rascunho sobre alagamentos descreve impermeabilização em um parágrafo e repete a mesma descrição no seguinte, sem discutir a manutenção da drenagem prometida na tese. Um roteiro reverso evidencia repetição e lacuna. A solução pode ser desenvolver a relação omitida com dados pertinentes, em vez de só trocar palavras no parágrafo repetido.",
        "pitfall": "Achar que conectivos criam lógica por si, usar um caso como estatística universal ou trocar vocabulário sem corrigir lacunas e contradições."
      },
      {
        "level": "advanced",
        "title": "Reescrita e conferência da versão final",
        "explanation": "Reescrever deve responder ao diagnóstico de revisão. Se a tese excede as evidências, qualificá-la é diferente de apenas trocar uma palavra rara por outra. Se há contradição, examine qual afirmação precisa ser retirada ou reformulada; manter as duas sob um conectivo elegante não elimina o conflito. Compare a versão anterior e a nova para conferir se a alteração resolveu o problema e não introduziu outro, como um referente ambíguo ou uma conclusão não prevista. Depois, examine períodos, concordância, pontuação, ortografia, palavras repetidas ou ausentes e legibilidade. Ler em voz alta pode ajudar quando for viável, mas não é requisito de acessibilidade nem condição possível em toda prova; uma leitura silenciosa por frases ou outras ferramentas permitidas também pode apoiar a conferência. Verifique referências, citações e a distinção entre voz própria e informação de terceiros, sem fabricar autoria. Na notícia oficial da redação do ENEM 2026, o Inep explicita o texto dissertativo-argumentativo e competências que incluem intervenção respeitando direitos humanos. Isso não torna essa exigência regra de qualquer gênero em outro processo. No Guia FUVEST 2027 consultado, quando há opção entre gêneros, é preciso observar a escolha indicada na folha; não transfira um modelo sem ler a proposta. Consulte a edição e as instruções aplicáveis, distinguindo estratégia de escrita e regra de avaliação. A versão final deve responder ao comando e sustentar suas relações de sentido, sem promessa de pontuação automática por um molde.",
        "steps": [
          "Faça mudanças correspondentes ao problema identificado.",
          "Compare versões e teste sentido, referências e alcance.",
          "Confira linguagem e apresentação com meios acessíveis.",
          "Retome o comando e as regras da edição antes da entrega."
        ],
        "example": "Caso autoral de conferência final: após mover um parágrafo sobre uma praça para antes de outro sobre um centro cultural, o pronome esse passa a ter referente duvidoso. Nomear explicitamente a praça ou o centro resolve a ambiguidade produzida pela reorganização. Revisar a versão nova continua necessário, mesmo quando a mudança melhorou a sequência geral.",
        "pitfall": "Confundir reescrita com substituição de sinônimos, esquecer de revisar efeitos de uma alteração ou aplicar a regra de um exame a toda situação de escrita."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Proposta inteiramente autoral de treino: argumentar sobre barreiras de acesso à leitura em bibliotecas públicas. Qual plano mantém o recorte e prevê desenvolvimento, sem inventar pesquisa?",
        "hint": "Observe se o roteiro enfrenta condições de acesso e distingue afirmações que precisam de apoio de declarações vagas sobre importância.",
        "options": [
          "Repetir que ler é bom em todos os parágrafos, sem examinar barreira alguma.",
          "Copiar uma estatística sem origem e afirmar que ela vale para todas as cidades.",
          "Narrar somente uma viagem pessoal sem relacioná-la ao acesso à leitura.",
          "Examinar como horários, deslocamento e condições de uso podem criar barreiras, selecionando apoio verificável e explicando a relação de cada aspecto com o recorte."
        ],
        "correctIndex": 3,
        "solution": "D: mantém o foco em condições de acesso e prevê razões, apoio e explicação. A permanece em apreciação genérica; B fabrica alcance e autoridade de um dado; C não relaciona o relato ao recorte. O plano proposto não afirma que toda biblioteca tenha as mesmas barreiras: esses aspectos precisam ser investigados e sustentados, e não transformados automaticamente em um diagnóstico nacional."
      },
      {
        "level": "intermediate",
        "prompt": "Dados fictícios apenas para este exercício: uma nova rota de transporte atende três bairros de uma cidade com vinte bairros. Um rascunho conclui: “A rota existe; portanto, todos os bairros têm acesso a ela”. Qual revisão corrige a inferência sem inventar informação?",
        "hint": "Compare o alcance do dado sobre três bairros com a afirmação sobre todos os vinte, em vez de trocar apenas o conectivo.",
        "options": [
          "Manter todos e substituir portanto por logo, pois isso amplia a cobertura da rota.",
          "Afirmar que os três bairros informados são atendidos e que os dados não demonstram cobertura de todos os vinte.",
          "Trocar vinte por três sem avisar, para que a conclusão pareça correta.",
          "Acrescentar uma pesquisa inexistente confirmando atendimento universal."
        ],
        "correctIndex": 1,
        "solution": "B: ajusta a conclusão ao dado fornecido e explicita o limite. A troca o conectivo sem resolver o salto; C altera o conjunto de dados para sustentar a frase; D fabrica autoridade. A existência de uma rota não implica cobertura de toda a cidade. A revisão atua sobre a relação entre evidência e conclusão, e não apenas sobre a aparência da coesão."
      },
      {
        "level": "advanced",
        "prompt": "Parágrafo inteiramente fictício: “Como a oficina é gratuita, ninguém enfrenta custo para participar. No caso descrito, o deslocamento custa R$ 12 por participante”. Qual reescrita resolve o conflito entre gratuidade da atividade e custo de acesso, sem apagar o dado?",
        "hint": "Separe o preço da oficina do gasto de deslocamento e evite uma afirmação universal que a segunda informação contraria.",
        "options": [
          "Embora a oficina seja gratuita, o deslocamento de R$ 12 por participante pode constituir uma barreira de acesso no caso descrito.",
          "A oficina é gratuita; consequentemente, o deslocamento de R$ 12 não é um custo para ninguém.",
          "Retirar apenas a vírgula depois de gratuita, mantendo a afirmação ninguém enfrenta custo.",
          "Declarar que a oficina custa R$ 12, embora o texto informe que a atividade é gratuita."
        ],
        "correctIndex": 0,
        "solution": "A: distingue a gratuidade da oficina do custo para chegar a ela e qualifica a possível barreira sem atribuí-la a todas as situações. B mantém a contradição por meio de um conectivo; C altera pontuação sem resolver conteúdo; D transfere o valor do transporte ao preço da atividade, mudando indevidamente a informação. Os valores e a situação são hipotéticos, não dados atribuídos a uma instituição real."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Uso de língua inglesa em contextos socioculturais",
    "objective": "Interpretar funções comunicativas, registros e variedades do inglês em situações contextualizadas, negociar sentidos sem estereótipos e avaliar o alcance de mensagens em gêneros sociais.",
    "prerequisites": [
      "Leitura de frases curtas em inglês",
      "Pronomes e verbos modais frequentes",
      "Finalidade e interlocutor de um texto"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Situação, interlocutor e função comunicativa",
        "explanation": "Uma frase participa de uma situação social: quem fala ou escreve, para quem, por qual canal e com que finalidade? Entender palavras não basta para identificar se a pessoa pede ajuda, oferece algo, convida, informa ou discorda. Uma pergunta com can ou could pode funcionar como pedido de ação, e não apenas como pergunta sobre capacidade. Em um pedido, could e would podem atenuar a formulação; can e will também podem fazer pedidos, em geral mais diretos. Não há uma palavra que garanta cortesia em qualquer contexto: tom, relação entre participantes, urgência e convenções locais também contam. Formalidade não é sinônimo de inteligência nem de correção absoluta. Uma conversa entre colegas e uma solicitação institucional podem exigir escolhas diferentes. Saudação, forma de tratamento, explicitação do motivo e encerramento ajudam a construir a relação, mas Hello não torna toda mensagem automaticamente adequada e Hey não é universalmente ofensivo. Compare a ação esperada com a resposta: se alguém solicita envio de um arquivo, responder apenas que sabe usar o computador pode deixar o pedido sem atendimento. Quando a intenção estiver incerta, peça esclarecimento em vez de atribuir uma intenção hostil por causa de uma única expressão. Na leitura, use as pistas disponíveis; não invente nacionalidade, hierarquia ou intimidade que o texto não informa.",
        "steps": [
          "Identifique participantes, canal e finalidade.",
          "Relacione a forma da frase à ação esperada.",
          "Observe grau de formalidade e pistas de cortesia.",
          "Peça esclarecimento quando houver ambiguidade relevante."
        ],
        "example": "Diálogo autoral: em uma recepção, uma visitante pergunta “May I leave this folder here?” e recebe “Yes, on the desk”. O contexto sustenta um pedido de permissão para deixar a pasta, não uma previsão sobre o mês de maio. A resposta indica autorização e lugar; o significado de may foi identificado pela interação.",
        "pitfall": "Traduzir isoladamente um modal, achar que toda pergunta testa capacidade ou transformar uma saudação em regra universal de respeito."
      },
      {
        "level": "intermediate",
        "title": "Variedades e construção compartilhada de sentido",
        "explanation": "O inglês circula em comunidades diversas, com variações de vocabulário, pronúncia, grafia e gramática. Inglês britânico e estadunidense não esgotam essa diversidade: há, por exemplo, variedades indianas, nigerianas e singapurenses. Esses nomes não tornam todos os habitantes de um país falantes idênticos; diferenças regionais, sociais, de situação e trajetórias individuais também importam. Uma forma pouco familiar para você não demonstra falta de inteligência de quem a usa. Da mesma maneira, não é possível estabelecer toda a identidade de alguém por uma palavra ou um sotaque. Uma atividade pode pedir uma convenção específica de escrita, mas essa condição da tarefa não cria uma hierarquia de valor entre pessoas. Em interações entre falantes com repertórios diferentes, o objetivo inclui tornar a mensagem compreensível: reformular, explicar um termo, pedir repetição ou confirmar uma informação pode ser mais produtivo que imitar um sotaque idealizado. Pode-se perguntar “What do you mean by that term?” para esclarecer um termo, ou confirmar o ponto específico que gerou dúvida. Faça a pergunta sem pressupor que o outro está errado. Quando várias línguas fazem parte da experiência de alguém, esse repertório pode ajudar a negociar sentidos; não é necessário tratar cada cultura como um bloco fechado. Interpretação intercultural combina atenção às diferenças e disposição para rever a primeira leitura, sem reduzir uma pessoa a uma regra sobre seu país.",
        "steps": [
          "Reconheça a diversidade além de dois padrões nacionais.",
          "Separe familiaridade da forma e compreensão da mensagem.",
          "Localize a dúvida e solicite esclarecimento específico.",
          "Confirme o sentido sem presumir identidade ou capacidade."
        ],
        "example": "Situação autoral: numa equipe internacional, a coordenadora diz “The draft is due next Wednesday”. Um participante pergunta “Do you mean the 18th?” e ela confirma a data. A confirmação evita depender de interpretações diferentes de next Wednesday; não exige adivinhar a origem dos participantes nem eliminar seus sotaques.",
        "pitfall": "Usar uma variedade como prova de inferioridade, deduzir nacionalidade de uma expressão ou fingir compreensão para evitar uma pergunta de esclarecimento."
      },
      {
        "level": "advanced",
        "title": "Gênero, público e alcance das afirmações",
        "explanation": "Ler criticamente em inglês envolve identificar quem publica, qual público procura alcançar e o que pretende que o leitor pense ou faça. Um convite, uma notícia, um anúncio e um comentário podem falar do mesmo assunto com funções diferentes. Expressões avaliativas apresentam uma posição, mas não comprovam que todos compartilham dela. Procure a evidência e o seu alcance: um relato individual não descreve automaticamente toda uma comunidade, e uma contagem de respostas de um grupo não representa toda a população sem informações adicionais. Observe também modalidade e condições. Em uma previsão como “The exhibition may reopen in July”, may apresenta possibilidade, não reabertura confirmada. O modal tem outros usos, portanto não substitua a análise da frase por uma tradução única. Uma condição introduzida por if delimita o que é proposto: retirar a condição pode tornar uma promessa mais forte do que o texto permite. Compare o que foi efetivamente dito com a inferência solicitada; não atribua religião, opinião política ou traço moral ao autor apenas por uma expressão figurada. Contexto pode sustentar uma leitura, mas contexto ausente não deve ser preenchido por estereótipo. Ao responder a um texto, você pode reformular a mensagem e distinguir informação, avaliação e hipótese, preservando essas marcas de alcance. Os textos curtos desta aula treinam essas operações; não certificam nível de proficiência nem domínio de todas as interações culturais.",
        "steps": [
          "Identifique gênero, público e ação pretendida.",
          "Diferencie informação, avaliação e hipótese.",
          "Examine modais, condições e alcance da evidência.",
          "Escolha a inferência sustentada sem acrescentar estereótipos."
        ],
        "example": "Aviso autoral: “If enough volunteers register, we will add a second reading group.” O anúncio associa a abertura de outro grupo à inscrição de voluntários suficientes. Recontá-lo como segundo grupo já confirmado elimina a condição. O aviso, por si, não informa o número de inscrições nem a opinião de todos os moradores.",
        "pitfall": "Transformar possibilidade em confirmação, apagar uma condição ou tratar um comentário como opinião universal de uma cultura."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Diálogo inteiramente autoral: durante o preparo de uma reunião, Jo escreve a Pat: “Could you send the updated agenda before noon, please?” Pat responde: “Sure, I will send it now”. Que função a pergunta de Jo desempenha nesse contexto?",
        "hint": "Observe o arquivo solicitado, o prazo e a resposta que promete uma ação, em vez de interpretar could isoladamente.",
        "options": [
          "Investigar exclusivamente se Pat já sabia ler agendas na infância.",
          "Confirmar que a reunião já terminou e dispensar qualquer envio.",
          "Pedir que Pat envie a pauta atualizada antes do meio-dia.",
          "Oferecer a Pat uma agenda que Jo já enviou, sem solicitar ação."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: o contexto e a resposta mostram um pedido de envio, com objeto e prazo explícitos. A toma could como passado de capacidade e ignora a interação; B acrescenta fim da reunião inexistente; D troca pedido por oferta e pressupõe envio já realizado. A leitura não depende de adivinhar nacionalidade ou grau de intimidade entre Jo e Pat."
      },
      {
        "level": "intermediate",
        "prompt": "Situação inteiramente autoral: numa equipe que usa inglês, uma participante não compreende um termo usado por outro integrante. O texto não informa país, sotaque nem formação de ninguém. Qual resposta ajuda a negociar o sentido sem acrescentar estereótipos?",
        "hint": "Busque uma pergunta específica sobre a mensagem, sem diagnosticar competência geral nem atribuir origem ao interlocutor.",
        "options": [
          "“Could you explain what that term means in this task?”",
          "“Your country must use English incorrectly, so the term has no meaning.”",
          "“An unfamiliar term proves that the speaker cannot reason.”",
          "“There is no need to clarify; every variety always uses every word identically.”"
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: pede explicação contextual e permite confirmar o significado necessário à tarefa. B inventa país e uma avaliação geral; C confunde familiaridade linguística com capacidade de raciocínio; D elimina indevidamente a possibilidade de variação. A pergunta não afirma que o termo esteja errado e não exige eliminar a variedade do participante."
      },
      {
        "level": "advanced",
        "prompt": "Comunicado fictício, criado para a atividade: “The community cinema may offer a morning session next month. The schedule is not confirmed.” Qual interpretação preserva o alcance da mensagem?",
        "hint": "Relacione may à frase seguinte sobre a programação ainda não confirmada; não acrescente aprovação de toda a comunidade.",
        "options": [
          "A sessão matinal está definitivamente agendada, sem qualquer incerteza.",
          "O texto prova que todos os moradores desejam a sessão matinal.",
          "A programação foi cancelada definitivamente e nenhuma sessão é possível.",
          "A sessão matinal é uma possibilidade para o próximo mês, ainda sem confirmação."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: may indica possibilidade nesse enunciado, e a segunda frase explicita a falta de confirmação. A transforma possibilidade em certeza; B inventa opinião universal sem pesquisa ou depoimentos; C confunde ausência de confirmação com cancelamento definitivo. O comunicado é original e fictício, sem atribuição a um cinema ou instituição real."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Pronomes pessoais e tratamento em espanhol",
    "objective": "Relacionar pronomes pessoais a participantes e funções sintáticas, escolher formas de tratamento contextualizadas e aplicar concordância, combinações e colocação pronominal em espanhol.",
    "prerequisites": [
      "Pessoa e número verbal",
      "Sujeito e complementos do verbo",
      "Leitura de enunciados curtos em espanhol"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Participantes, sujeito e tratamento",
        "explanation": "Pronomes pessoais situam participantes do discurso: primeira pessoa inclui quem fala; segunda designa o interlocutor; terceira remete ao que se fala. Formas de sujeito incluem yo, tú, vos, él, ella, usted, nosotros/nosotras, vosotros/vosotras, ellos/ellas e ustedes. Ello é uma forma neutra de uso restrito, não o plural de él. Usted e ustedes designam interlocutores, mas exigem concordância verbal de terceira pessoa: usted trabaja e ustedes trabajan. Não substitua essas palavras por você, o senhor ou a senhora dentro de uma frase que deve permanecer em espanhol. Tú e vos podem ser formas de proximidade, conforme a variedade; usted é frequentemente associado a formalidade ou distância, mas as relações sociais não se deixam reduzir a uma regra por idade ou profissão. Na maior parte da Espanha, vosotros/vosotras aparece no tratamento plural informal; em áreas como Canárias e no uso americano corrente, ustedes atende também ao plural informal. Ustedes continua plural, mesmo quando inclui pessoas com quem há intimidade. O voseo americano apresenta diversidade: um padrão rioplatense de presente tem vos hablás, vos tenés e vos vivís; não projete esse paradigma a toda comunidade voseante. O sujeito pode ser omitido quando recuperável, embora explicitação possa desfazer ambiguidade ou marcar contraste. Escolher pronome inclui interpretar o contexto, e não apenas traduzir uma tabela portuguesa.",
        "steps": [
          "Identifique quem fala, quem recebe e de quem se fala.",
          "Escolha número e tratamento conforme o contexto fornecido.",
          "Conjugue usted e ustedes na terceira pessoa.",
          "Reconheça variação regional sem transformar tendência em regra universal."
        ],
        "example": "Exemplos autorais de contraste: “Nosotras preparamos el cartel; ustedes organizan la sala”. Nosotras inclui a falante em um grupo feminino; ustedes designa vários interlocutores e combina com organizan. Uma instrução em contexto americano não precisa ser formal só por conter ustedes.",
        "pitfall": "Escrever você como pronome espanhol, tratar ustedes como singular ou impor um único sistema de tratamento a todos os países e relações."
      },
      {
        "level": "intermediate",
        "title": "Formas tônicas, átonas e funções",
        "explanation": "A forma depende da função na oração. Compare yo como sujeito com mí após certas preposições: para mí, de mí; no tuteo, para ti, de ti. Com con, empregam-se comigo em português e conmigo em espanhol; para o interlocutor de tuteo, contigo. Não conclua que toda preposição exige mí ou ti: entre tú y yo é uma construção diferente, e segundo a função também há exceções com según. No voseo, aparecem formas como con vos e para vos. Entre os átonos estão me, te, nos, os, lo, la, los, las, le, les e se. Me, te, nos e os podem exercer funções de complemento direto ou indireto; não possuem marca própria de gênero. No sistema geral baseado em função, lo/la/los/las retomam complemento direto com as distinções pertinentes, enquanto le/les marcam indireto sem distinguir masculino e feminino. Identificar pessoa humana não basta para chamar um complemento de indireto: a preposição a também pode introduzir objeto direto de pessoa. Há variação de uso, inclusive leísmo com condições de aceitação; por isso não trate todo le de pessoa como agramatical nem apague a distinção de funções. Quando le ou les precede lo, la, los ou las, a forma é se: a troca não transforma o destinatário em reflexivo. Se não mostra o número do destinatário, que pode ser esclarecido pelo contexto ou por complemento. Analise o que foi entregue e a quem, em vez de adivinhar pela ordem das pessoas mencionadas.",
        "steps": [
          "Separe sujeito, complemento preposicional e clítico.",
          "Identifique o referente e a função do complemento.",
          "Escolha forma e número sem atribuir gênero a le/les.",
          "Substitua le/les por se antes de lo/la/los/las."
        ],
        "example": "Transformação autoral: “Envío las fotografías a mis primas” pode ser retomada como “Se las envío”. Las retoma as fotografias; se corresponde a les, destinatário plural esclarecido por a mis primas. A terminação plural de las vem das fotografias, não do número das primas.",
        "pitfall": "Usar apenas a pergunta a quem para identificar função, flexionar le por gênero ou fazer o pronome do objeto mudar de número para marcar o destinatário."
      },
      {
        "level": "advanced",
        "title": "Colocação e interpretação dos clíticos",
        "explanation": "Na escrita corrente, o clítico normalmente precede uma forma simples conjugada de indicativo ou subjuntivo: o bloco é escrito separado do verbo. Com infinitivo e gerúndio simples, aparece unido à forma verbal; no imperativo afirmativo, também se une, com a acentuação exigida pela palavra resultante. O imperativo negativo pede posição anterior: com a ordem de tuteo, compáralo contrasta com no lo compares. Em certas perífrases, há duas posições possíveis para o bloco: “Voy a revisarlas” e “Las voy a revisar” preservam o mesmo objeto. Isso não torna válida uma separação arbitrária entre a preposição e o infinitivo; “Voy a las revisar” não corresponde a essas construções. A mobilidade não se estende a toda sequência de verbos: é preciso analisar a construção concreta, não decorar que um pronome pode ir em qualquer lugar. Com tempos compostos usuais de haber, o clítico antecede o auxiliar, não se prende normalmente ao particípio. Ao combinar pronomes, mantenha o bloco e a ordem compatível com as funções; na combinação de indireto e direto aqui estudada, o indireto precede o direto. Se pode ter valores diferentes: em “Se las envío”, substitui les; em contexto de autocuidado pode ser reflexivo; com sujeito plural e ações mútuas pode ser recíproco; em outras construções marca impessoalidade ou passiva. Nem todo se é pronome reflexivo, e a mesma sequência curta pode exigir contexto para decidir. Revise forma, função, referente e colocação em conjunto.",
        "steps": [
          "Localize a forma verbal e o tipo de construção.",
          "Escolha próclise ou ênclise e confira a grafia.",
          "Mantenha o bloco de clíticos sem separação arbitrária.",
          "Determine o valor de se pelo contexto e pela estrutura."
        ],
        "example": "Par autoral de tuteo: ao pedir uma cópia para si, alguém diz “Tráemela mañana”; ao proibir o mesmo envio, diz “No me la traigas mañana”. Me indica o destinatário e la retoma a cópia. A oposição afirmativo/negativo muda a colocação; a acentuação de tráemela deve ser conferida.",
        "pitfall": "Escrever clítico separado depois de infinitivo, unir ao particípio por analogia ou classificar todo se como ação praticada sobre si mesmo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma instrução autoral determina usar explicitamente ustedes para falar com várias pessoas. Qual frase apresenta a concordância verbal geral correspondente?",
        "hint": "O interlocutor é plural, mas ustedes pede terceira pessoa gramatical do plural; não segunda pessoa do singular ou do plural.",
        "options": [
          "Ustedes prepara la exposición.",
          "Ustedes preparan la exposición.",
          "Ustedes preparáis la exposición.",
          "Ustedes preparas la exposición."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: ustedes combina com preparan, terceira pessoa plural. A usa singular de terceira pessoa; C traz a forma de segunda pessoa plural associada a vosotros no sistema aqui estudado; D usa segunda pessoa singular. O exercício fixa a concordância geral com ustedes e não pede julgar todas as variedades locais nem deduzir formalidade pela idade dos destinatários."
      },
      {
        "level": "intermediate",
        "prompt": "Frase inteiramente autoral: “Entrego el sobre a las coordinadoras”. Para retomar simultaneamente el sobre e a las coordinadoras com clíticos, qual forma preserva o objeto singular e o destinatário plural, segundo a combinação geral estudada?",
        "hint": "Identifique o objeto entregue e lembre a mudança de les antes de lo; o número do envelope não muda pelo número das destinatárias.",
        "options": [
          "Les lo entrego.",
          "Se los entrego.",
          "Lo se entrego.",
          "Se lo entrego."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: lo retoma el sobre, masculino singular; les, correspondente às coordenadoras, torna-se se antes de lo. A mantém a sequência les lo que deve ser substituída; B pluraliza o objeto apesar do envelope singular; C inverte o bloco. Se é invariable e o contexto mantém o destinatário plural; não significa que as coordenadoras entreguem algo a si mesmas."
      },
      {
        "level": "advanced",
        "prompt": "Na perífrase autoral “Voy a guardarlas”, las retoma unas carpetas. Qual reformulação mantém o mesmo objeto e emprega a outra posição possível do bloco pronominal nessa construção?",
        "hint": "Procure o clítico antes do verbo conjugado, sem separá-lo entre a e guardar nem trocar o gênero ou o número das pastas.",
        "options": [
          "Las voy a guardar.",
          "Voy a las guardar.",
          "Voy a guardar las.",
          "Los voy a guardar."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: Las voy a guardar equivale a Voy a guardarlas nessa perífrase e preserva o objeto feminino plural. B introduz o clítico entre preposição e infinitivo; C o escreve separado depois do infinitivo em vez de unido; D altera o referente para masculino plural. A possibilidade conferida para ir a + infinitivo não autoriza deslocamento irrestrito em toda combinação de verbos."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Gravitação e movimentos orbitais",
    "objective": "Aplicar gravitação, campo, energia e leis de Kepler em modelos newtonianos, distinguindo altitude e raio orbital, condições de validade e órbitas circulares e elípticas.",
    "prerequisites": [
      "Força resultante e movimento circular",
      "Conservação de energia e momento angular",
      "Potências, raízes e unidades SI"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Força, campo e distância ao centro",
        "explanation": "No modelo newtoniano, duas massas puntiformes se atraem com módulo F = Gm1m2/r², sendo r a distância entre elas e G a constante gravitacional, em N·m²/kg². Para corpos esfericamente simétricos não sobrepostos, a interação externa pode ser calculada como se cada massa estivesse em seu centro. Assim, o resultado não exige que toda altitude seja muito maior que o raio de um planeta esférico. Para formas irregulares próximas, a aproximação puntiforme pode falhar e é necessário considerar a distribuição de massa. As forças do par têm o mesmo módulo e sentidos opostos, mas atuam em corpos diferentes; não se anulam na equação de movimento de um único corpo. O campo gravitacional devido a uma massa esférica M, em ponto externo, tem módulo g = GM/r² e aponta para o centro. Ele se mede em N/kg, equivalente a m/s², e não depende da massa de teste. Na altura h acima de uma superfície de raio R, use r = R + h, não apenas h. G não é a aceleração local g: esta varia com posição e distribuição de massa. Se várias fontes atuam, some campos vetorialmente. Dobrar a distância mantendo massas reduz o módulo da força a um quarto; dobrar uma massa mantendo a outra e a distância duplica o módulo. Essas relações são do modelo clássico, adequado quando seus limites de campo e velocidade são respeitados, e não substituem correções relativísticas quando necessárias.",
        "steps": [
          "Defina as massas e a validade do modelo esférico ou puntiforme.",
          "Use a distância ao centro com unidades consistentes.",
          "Calcule módulo e direção da força ou do campo.",
          "Separe ação e reação e confira proporcionalidades."
        ],
        "example": "Modelo autoral: um planeta esférico de raio R produz campo superficial g0. A uma altitude h = 2R, a distância ao centro é 3R; portanto g = g0/9. Usar 2R no denominador daria g0/4 e confundiria a altitude com o raio de posição. Nenhum valor de um planeta real é necessário.",
        "pitfall": "Usar altitude como distância ao centro, confundir G com g ou somar ação e reação como se atuassem no mesmo satélite."
      },
      {
        "level": "intermediate",
        "title": "Órbita circular, período e queda livre",
        "explanation": "Considere um satélite de massa m desprezível em comparação com M, sem arrasto ou propulsão, no campo externo esférico, e um referencial aproximadamente inercial em que M está em repouso. Em órbita circular, a gravitação fornece a força resultante radial: GMm/r² = mv²/r. Não some uma força centrípeta extra à gravidade; centrípeta descreve a resultante necessária. Resulta v = √(GM/r) e T = 2πr/v = 2π√(r³/GM). A velocidade é tangente e a aceleração aponta ao centro. O módulo de v permanece constante nessa órbita, mas a direção muda, de modo que há aceleração. A massa m se cancela na equação, e dois satélites ideais no mesmo raio requerem o mesmo módulo de velocidade. Entre órbitas circulares em torno do mesmo M, a de maior raio tem menor velocidade e maior período; isso não significa que toda manobra para chegar a ela dispense energia. Um objeto em órbita está em queda livre, sob gravidade diferente de zero. A sensação de ausência de apoio dos ocupantes não demonstra desaparecimento do campo. Uma órbita geoestacionária ainda exige direção prógrada, plano equatorial e período compatível com a rotação sideral terrestre; ter trajetória circular ou servir à comunicação não basta. Se as duas massas forem comparáveis, apenas escolher o centro de massa como origem não torna √(GM/r) a fórmula para a velocidade individual: é preciso distinguir separação relativa e órbita de cada corpo.",
        "steps": [
          "Confira hipóteses de massa central dominante e órbita circular.",
          "Iguale gravitação e resultante centrípeta.",
          "Obtenha velocidade e período com r = R + h.",
          "Interprete aceleração, queda livre e limites do referencial."
        ],
        "example": "Comparação autoral sem repetir os dados das tarefas: duas órbitas circulares ideais no mesmo campo têm raios r e 9r. A relação v2/v1 = 1/3 vem da raiz inversa do raio; T2/T1 = 27 vem de 9 elevado a 3/2. Velocidade angular e velocidade linear não devem ser confundidas.",
        "pitfall": "Acrescentar força centrípeta como interação extra, concluir gravidade zero por falta de apoio ou aplicar velocidade individual de massa pequena a um sistema binário comparável."
      },
      {
        "level": "advanced",
        "title": "Elipses, energia e leis de Kepler",
        "explanation": "No problema isolado de dois corpos, o movimento relativo ligado com momento angular não nulo é elíptico, com o caso circular como particular. Na aproximação de massa central dominante, essa massa ocupa um foco da elipse, não seu centro geométrico. A segunda lei de Kepler afirma áreas iguais em tempos iguais; é velocidade areolar constante, não angular constante numa elipse excêntrica. O momento angular se conserva porque a força é central. Nos extremos da elipse, velocidade e raio são perpendiculares e rp·vp = ra·va. O semieixo maior é a = (rp + ra)/2 e não a distância instantânea. Com μ = GM, T² = 4π²a³/μ; para massas comparáveis, o movimento relativo usa G(M + m) e a referente à separação, não o semieixo individual sem ajuste. A energia potencial, escolhida zero no infinito, é U = -GMm/r. Essa negatividade depende da convenção; a diferença de energia não depende da escolha do zero. Para órbita elíptica com M dominante, E = -GMm/(2a) permanece constante e v² = μ(2/r - 1/a). Energia cinética e potencial variam ao longo da elipse. A velocidade de escape ideal no raio r é √(2μ/r), com energia total zero e ausência de outras forças; não é a velocidade circular √(μ/r). Alcance de escape não elimina gravidade. Modelos desprezam perturbações, atmosfera e correções relativísticas quando sua precisão não as exige. Verifique hipóteses antes de comparar períodos de sistemas com massas centrais diferentes.",
        "steps": [
          "Identifique semieixo maior, distâncias extremas e massa central.",
          "Use áreas ou momento angular para comparar velocidades.",
          "Calcule energia e velocidade com a mesma referência de potencial.",
          "Compare períodos apenas com a constante gravitacional do sistema apropriado."
        ],
        "example": "Cálculo autoral em sistema diferente das tarefas: uma elipse ideal tem rp = 3L e ra = 5L. Então a = 4L e vp/va = 5/3, pela conservação do momento angular nos extremos. A constância das áreas não autoriza concluir que os dois trechos de mesmo ângulo durem o mesmo tempo.",
        "pitfall": "Colocar a massa central no centro da elipse, confundir área e ângulo ou aplicar a proporcionalidade de Kepler entre sistemas com diferentes massas sem ajuste."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo autoral: duas pequenas esferas esfericamente simétricas, de massas 4 kg e 9 kg, estão com distância entre centros de 0,6 m e não se sobrepõem. Calcule o módulo da força entre elas. Use G = 6,67 × 10^-11 N·m²/kg².",
        "hint": "Multiplique as massas e divida pelo quadrado da distância entre centros, distinguindo 0,6 de seu quadrado.",
        "options": [
          "6,67 × 10^-10 N.",
          "2,40 × 10^-9 N.",
          "4,00 × 10^-9 N.",
          "6,67 × 10^-9 N."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: F = 6,67 × 10^-11 × 4 × 9 / 0,36 = 6,67 × 10^-9 N. A é dez vezes menor; B corresponde aproximadamente a usar denominador 1 em vez de 0,36; C corresponde aproximadamente a dividir por 0,6, sem elevar ao quadrado. Os valores são de um exercício próprio, sem representar medição de laboratório ou dispositivo real."
      },
      {
        "level": "intermediate",
        "prompt": "Planeta fictício esférico com μ = 8 × 10^12 m³/s² e R = 1 × 10^6 m. Satélite de massa desprezível descreve órbita circular a h = 1 × 10^6 m, sem arrasto ou propulsão. Quais são sua velocidade e seu período?",
        "hint": "Some R e h para obter r; calcule √(μ/r), depois o comprimento 2πr dividido pela velocidade.",
        "options": [
          "2000 m/s; 2000π s.",
          "2828 m/s; aproximadamente 707π s.",
          "4000 m/s; 1000π s.",
          "2000 m/s; 1000π s."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: r = R + h = 2 × 10^6 m, v = √(8 × 10^12 / 2 × 10^6) = 2000 m/s. T = 2π × 2 × 10^6 / 2000 = 2000π s. B calcula velocidade e período usando h como raio; C duplica indevidamente a velocidade para o raio correto; D usa apenas metade da circunferência no tempo de uma volta. A força centrípeta é fornecida pela gravitação."
      },
      {
        "level": "advanced",
        "prompt": "Satélite fictício de massa 50 kg, desprezível diante da massa central, em campo com μ = 8 × 10^12 m³/s². A elipse tem distância de periastro rp = 2 × 10^6 m e de apoastro ra = 6 × 10^6 m. Sem outras forças e com U zero no infinito, quais são E e a razão das velocidades nos extremos?",
        "hint": "Calcule a = (rp + ra)/2, use E = -μm/(2a) e conserve r·v nos dois extremos onde a velocidade é perpendicular ao raio.",
        "options": [
          "E = +5 × 10^7 J; v_periastro/v_apoastro = 3.",
          "E = -5 × 10^7 J; v_periastro/v_apoastro = 3.",
          "E = -5 × 10^7 J; v_periastro/v_apoastro = 1/3.",
          "E = -1 × 10^8 J; v_periastro/v_apoastro = 1."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: a = 4 × 10^6 m e E = -(8 × 10^12 × 50)/(2 × 4 × 10^6) = -5 × 10^7 J. De rp·vp = ra·va, vp/va = ra/rp = 3. A tem sinal incompatível com a elipse ligada nessa convenção; C inverte a razão; D usa rp no lugar de a na energia e ainda afirma velocidades iguais numa elipse excêntrica. Energia constante não significa velocidade constante."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Interações intermoleculares",
    "objective": "Identificar interações entre partículas a partir da estrutura e relacionar polaridade, polarizabilidade e formação de novas interações a propriedades de líquidos e misturas, respeitando condições de comparação.",
    "prerequisites": [
      "Ligações covalentes e polaridade molecular",
      "Íons e cargas parciais",
      "Mudanças de estado e temperatura"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Estrutura e tipos de interação",
        "explanation": "Uma ligação covalente mantém átomos na molécula; interações intermoleculares atuam entre moléculas. Na vaporização usual de uma substância molecular sem decomposição, as moléculas se afastam sem exigir rompimento de todas as ligações covalentes internas. A dispersão de London decorre de flutuações correlacionadas das distribuições eletrônicas, com dipolos instantâneos e induzidos; existe também entre moléculas polares, não só entre apolares. Polarizabilidade indica facilidade de deformar a nuvem eletrônica. Moléculas com dipolo permanente apresentam ainda interações dipolo–dipolo, dependentes da orientação. A geometria deve entrar na análise: ter ligações polares não garante dipolo resultante diferente de zero. Nos exemplos escolares mais usuais de ligação de hidrogênio, um H ligado a O, N ou F interage com um sítio aceptor adequado, como um par eletrônico disponível. Não basta a molécula conter H e O em lugares quaisquer; identifique doador e aceptor. Essa regra didática cobre os casos aqui estudados, sem pretender esgotar a definição de toda ligação de hidrogênio. Íons em solvente polar podem estabelecer interações íon–dipolo. Não descreva um sólido iônico como coleção de moléculas independentes unidas apenas por dispersão. As contribuições coexistem: dizer que uma delas ajuda a explicar uma propriedade não significa que as demais desapareceram.",
        "steps": [
          "Distinga ligação interna e interação entre partículas.",
          "Determine geometria e dipolo molecular.",
          "Reconheça dispersão, dipolos e possíveis doadores e aceptores.",
          "Considere íons quando existirem, sem inventar moléculas no retículo."
        ],
        "example": "Análise autoral: uma molécula de acetona tem grupo C=O e pode aceitar ligação de hidrogênio de uma molécula de água, que oferece O–H. Ela não apresenta grupo O–H ou N–H para doar esse tipo usual de interação. As ligações de hidrogênio com a água não apagam as contribuições de dispersão.",
        "pitfall": "Afirmar que London só existe em apolares ou que qualquer hidrogênio já permite ligação de hidrogênio entre moléculas iguais."
      },
      {
        "level": "intermediate",
        "title": "Propriedades e comparação controlada",
        "explanation": "Para comparar temperaturas de ebulição, fixe a pressão externa: a ebulição ocorre quando a pressão de vapor de equilíbrio alcança essa pressão. Atrações mais intensas tendem a dificultar a separação das partículas e reduzir a pressão de vapor a uma mesma temperatura, mas a previsão exige considerar o conjunto de interações e a estrutura. Não use uma escala universal em que qualquer molécula polar necessariamente supera qualquer apolar; uma nuvem muito polarizável e a forma molecular podem tornar a dispersão decisiva. Em famílias de estrutura comparável, aumentar tamanho e polarizabilidade costuma intensificar dispersão; entre isômeros, alterações de forma e contato também podem modificar o resultado. Essas tendências não fornecem sozinhas um valor numérico exato. A viscosidade mede resistência ao escoamento e depende de interações, tamanho, forma e temperatura; densidade maior não é sua definição. Em muitos líquidos, aquecer reduz viscosidade, sem significar que todas as interações desapareceram. Coesão refere-se à atração entre partículas do próprio líquido; adesão envolve o contato com outro material. A tensão superficial se relaciona ao custo de ampliar a superfície e não constitui uma película sólida de moléculas imóveis. Uma comparação precisa indicar quais propriedades e condições foram mantidas, em vez de concluir que maior ebulição implica necessariamente maior viscosidade em qualquer par.",
        "steps": [
          "Fixe a propriedade, temperatura ou pressão da comparação.",
          "Examine todas as contribuições, tamanho e forma.",
          "Use tendências como justificativa qualitativa, não como cálculo exato.",
          "Diferencie ebulição, pressão de vapor, viscosidade e tensão superficial."
        ],
        "example": "Cenário autoral: dois líquidos fictícios X e Y estão em equilíbrio com seus vapores a 25 °C; o dado fornecido é pX < pY. Isso permite dizer que X tem menor pressão de vapor nessas condições. Não informa, sozinho, qual líquido é mais denso nem autoriza calcular sua viscosidade. As letras não correspondem a uma tabela real.",
        "pitfall": "Comparar ebulição em pressões diferentes sem ajuste ou transformar uma classificação de força em hierarquia universal para todas as moléculas e propriedades."
      },
      {
        "level": "advanced",
        "title": "Misturas, solvatação e limites da previsão",
        "explanation": "Dissolver envolve reorganizar interações: separar partículas do soluto e do solvente demanda energia, enquanto estabelecer contatos soluto–solvente pode liberar energia. O balanço e a dispersão de matéria participam da viabilidade da mistura; por isso somente dizer que existe uma atração favorável não garante solubilidade ilimitada. Semelhante dissolve semelhante é um guia inicial, não lei sem exceções. Um composto pode ter uma região polar e outra pouco polar: o equilíbrio entre essas partes afeta sua interação com água. Um aceptor de ligação de hidrogênio pode interagir com a água mesmo sem doar entre moléculas iguais; essa possibilidade também não garante miscibilidade total. Na hidratação de um cátion, o lado parcialmente negativo da água tende a se orientar para o íon; para um ânion, a orientação favorável envolve o lado parcialmente positivo. Formar íon–dipolo não prova que todo sal seja muito solúvel: é preciso considerar o retículo e o balanço completo. Agitação pode aumentar a rapidez de dissolução, mas não torna necessariamente maior a solubilidade de equilíbrio a temperatura fixa. Diferencie quantidade já dissolvida, limite de solubilidade e velocidade do processo. Leia os dados de temperatura, composição e pressão quando forem relevantes. Interações explicam mecanismos e tendências, mas uma previsão quantitativa exige dados e um modelo com hipóteses próprias, em vez de inventar uma relação linear universal entre força e entalpia.",
        "steps": [
          "Identifique as interações que se desfazem e as que se formam.",
          "Analise regiões polares e apolares sem regra absoluta.",
          "Distinga orientação de solvatação e garantia de solubilidade.",
          "Separe velocidade de dissolução e equilíbrio nas condições indicadas."
        ],
        "example": "Hipótese autoral: um sólido e água, mantidos à mesma temperatura, chegam ao mesmo limite de dissolução em dois recipientes; um foi agitado e chegou antes. O dado distingue rapidez e estado final. Não demonstra que a agitação tenha elevado o limite de equilíbrio nem que toda dissolução libere calor.",
        "pitfall": "Garantir dissolução de qualquer sal só pela atração íon–dipolo ou confundir dissolver mais depressa com aumentar o limite de solubilidade."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Para esta análise escolar autoral, considere metanol CH3OH e clorometano CH3Cl, ambos moleculares e polares. Qual afirmação identifica corretamente as interações usuais entre moléculas iguais, sem excluir dispersão?",
        "hint": "Examine se há H ligado a O, N ou F; diferencie ser polar de poder doar ligação de hidrogênio no modelo estudado.",
        "options": [
          "Metanol tem dispersão e pode formar ligações de hidrogênio entre suas moléculas; clorometano apresenta dispersão e dipolo–dipolo, sem o doador usual O–H/N–H/F–H.",
          "Só clorometano possui dispersão, porque a ligação de hidrogênio a elimina no metanol.",
          "Ambos são apolares porque suas fórmulas contêm carbono.",
          "Clorometano forma a mesma rede usual de ligações de hidrogênio só porque contém hidrogênio."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: o O–H do metanol permite doação e o oxigênio fornece sítio aceptor; London continua presente. CH3Cl tem dipolo permanente e dispersão, mas não o grupo doador usual indicado. B exclui uma contribuição que coexiste; C ignora a polaridade fornecida; D trata qualquer H como doador equivalente. A afirmação não calcula nem hierarquiza universalmente pontos de ebulição."
      },
      {
        "level": "intermediate",
        "prompt": "Dados fictícios autorais: líquidos moleculares A e B têm a mesma temperatura de ebulição quando medidos, respectivamente, a 60 kPa e 100 kPa. Isso basta para concluir que suas interações são idênticas?",
        "hint": "A condição de ebulição depende da pressão externa; compare quais variáveis foram diferentes nas duas medições.",
        "options": [
          "Sim: temperatura de ebulição nunca depende da pressão externa.",
          "Sim: pressões diferentes provam igualdade de todos os dipolos moleculares.",
          "Não: a comparação foi feita sob pressões diferentes e não demonstra igualdade de interações.",
          "Não: os dados obrigam a concluir que A não tem interação entre moléculas."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a temperatura de ebulição depende da pressão, e as duas medições não ocorreram na mesma condição. A nega essa dependência; B transforma diferença experimental em identidade molecular sem fundamento; D conclui ausência de interação sem suporte. Uma análise das forças exige estrutura e comparação apropriada, não apenas uma temperatura obtida sob pressões distintas."
      },
      {
        "level": "advanced",
        "prompt": "Num modelo autoral de hidratação de Na+ por moléculas de água, qual conclusão é adequada sem prometer solubilidade ilimitada de qualquer sal?",
        "hint": "Relacione carga positiva do cátion às cargas parciais da água e separe atração local do balanço global da dissolução.",
        "options": [
          "Os hidrogênios parcialmente positivos são atraídos por Na+ como polos opostos.",
          "O oxigênio parcialmente negativo tende a se orientar para Na+, formando interação íon–dipolo; dissolução ainda depende do balanço das interações e das condições.",
          "A atração Na+–água prova que todo composto iônico dissolve em qualquer quantidade.",
          "Hidratação significa quebrar obrigatoriamente as ligações O–H de toda a água."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: a orientação do lado parcialmente negativo do oxigênio favorece a atração ao cátion. A troca a orientação favorável por cargas do mesmo sinal; C ignora retículo e demais fatores; D confunde reorganização entre partículas com rompimento obrigatório de ligações covalentes da água. O modelo explica uma interação local, sem dados de solubilidade para um sal específico."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "DNA, RNA e síntese proteica",
    "objective": "Distinguir estruturas e funções de DNA e RNA, transcrever sequências orientadas e interpretar tradução, processamento e alterações de códons com o código fornecido e limites explícitos.",
    "prerequisites": [
      "Células procarióticas e eucarióticas",
      "Nucleotídeos e aminoácidos",
      "Complementaridade de bases"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Moléculas, bases e funções",
        "explanation": "DNA e RNA são ácidos nucleicos constituídos por nucleotídeos, com açúcar, fosfato e base nitrogenada. No DNA, o açúcar é desoxirribose e as bases usuais são A, T, C e G; no RNA, ribose e A, U, C e G. O DNA celular normalmente tem duas fitas antiparalelas: uma orientada 5′ para 3′ acompanha outra orientada 3′ para 5′, com complementaridade A–T e C–G. As ligações que conectam nucleotídeos ao longo de uma fita não são as mesmas interações que unem bases complementares entre fitas. RNA costuma ser fita simples, mas pode dobrar-se e formar regiões pareadas; não o descreva como incapaz de estrutura tridimensional. O DNA contém informação utilizada na produção de RNAs, e nem todo gene corresponde a uma proteína: há genes cujo produto funcional é RNA. O RNA mensageiro apresenta a sequência lida na tradução; o transportador participa do reconhecimento de códons e entrega aminoácidos; o ribossômico integra a estrutura e a atividade catalítica do ribossomo. Há ainda RNAs de regulação e de processamento. DNA não é uma proteína e não entrega diretamente aminoácidos ao ribossomo. Em eucariotos, além do DNA nuclear, mitocôndrias e, quando presentes, cloroplastos possuem DNA; portanto todo DNA fica no núcleo é uma generalização inadequada. Compare estrutura e função sem supor que uma sequência curta identifique um organismo ou determine sozinha um traço complexo.",
        "steps": [
          "Identifique açúcar e bases sem trocar T e U.",
          "Observe orientação e complementaridade das fitas.",
          "Diferencie as funções dos principais tipos de RNA.",
          "Separe informação genética e produto funcional."
        ],
        "example": "Exemplo autoral de orientação: a fita de DNA 5′-ACGT-3′ tem complementar antiparalela 3′-TGCA-5′. Se for necessário escrever a complementar começando por sua extremidade 5′, ela deve ser lida no sentido inverso. Inverter a ordem de apresentação e complementar as bases são operações diferentes.",
        "pitfall": "Chamar DNA de proteína, negar dobramento ao RNA ou supor que qualquer gene necessariamente seja traduzido em proteína."
      },
      {
        "level": "intermediate",
        "title": "Transcrição e processamento de RNA",
        "explanation": "Na transcrição, a RNA polimerase utiliza uma fita de DNA como molde. O molde é lido no sentido 3′→5′, e o RNA é sintetizado 5′→3′. Para as bases usuais, A no molde corresponde a U no RNA; T a A; C a G; G a C. A fita codificante, apresentada no mesmo sentido 5′→3′ do transcrito, coincide com ele na região considerada, com T no DNA e U no RNA. Assim, trocar T por U diretamente no molde seria erro: essa troca direta serve à fita codificante, respeitada a orientação. Diferentes genes podem usar fitas diferentes como molde; não atribua para sempre a uma das fitas de um cromossomo esse papel. Replicação copia DNA para DNA; transcrição produz RNA a partir de DNA; tradução interpreta uma sequência de RNA em aminoácidos. Na expressão de genes nucleares de eucariotos, muitos pré-mRNAs recebem cap 5′, cauda poli-A e splicing. No splicing, íntrons são removidos do transcrito e éxons retidos são unidos, sem recortar automaticamente o DNA. Éxons podem incluir regiões não traduzidas, portanto éxon não significa apenas trecho que vira aminoácidos. Processamentos podem começar durante a transcrição, e splicing alternativo pode gerar transcritos distintos de um mesmo gene. Em bactérias, a ausência de envoltório nuclear permite acoplamento de transcrição e tradução; não transfira a separação núcleo/citoplasma para toda célula. O produto RNA também pode exercer função sem tradução.",
        "steps": [
          "Leia qual fita foi fornecida e marque suas extremidades.",
          "Obtenha RNA complementar e antiparalelo ao molde.",
          "Diferencie transcrição, replicação e tradução.",
          "Aplique processamento ao RNA no contexto celular indicado."
        ],
        "example": "Modelo autoral diferente das tarefas: se a fita codificante de um trecho é 5′-ATG CAA TGA-3′, o RNA correspondente é 5′-AUG CAA UGA-3′. Essa troca direta usa a codificante. Se o enunciado fornecesse a molde, seria necessário complementar e conferir o sentido em vez de fazer a mesma substituição.",
        "pitfall": "Complementar a fita codificante como se fosse molde ou afirmar que splicing corta éxons do DNA e que todo nucleotídeo retido será traduzido."
      },
      {
        "level": "advanced",
        "title": "Tradução, códons e efeitos de alterações",
        "explanation": "Na tradução, o ribossomo lê o mRNA em sentido 5′→3′, em trincas chamadas códons, dentro de um quadro de leitura estabelecido na iniciação. O tRNA tem anticódon que pareia de forma antiparalela ao códon e recebe seu aminoácido por ação de enzimas de carregamento; o aminoácido não é criado pelo próprio anticódon. O ribossomo reúne os aminoácidos em cadeia, com participação catalítica de RNA. No código padrão, há 64 códons: 61 especificam aminoácidos e três, UAA, UAG e UGA, sinalizam parada. Parada não é um aminoácido adicional; fatores de liberação participam da terminação. AUG codifica metionina e frequentemente inicia tradução no contexto apropriado; nem todo AUG interno inaugura outra proteína. Em bactérias, a iniciação tem particularidades, como metionina formilada no tRNA iniciador. O código é degenerado: diferentes códons podem especificar o mesmo aminoácido, e isso não significa que um mesmo códon padrão signifique qualquer aminoácido. Há exceções ao código padrão em certos sistemas; use a tabela e as hipóteses do exercício. Substituir uma base pode manter o aminoácido, trocá-lo ou criar parada, dependendo da posição e da sequência. Inserções ou deleções na região traduzida que não sejam múltiplas de três podem deslocar o quadro a jusante; não conclua um efeito funcional específico sem informação. Transcrição reversa de RNA em DNA existe e não equivale a copiar informação de proteína para RNA. Os exercícios abaixo usam trechos fictícios sem processamento ou recodificação, para isolar as operações indicadas.",
        "steps": [
          "Fixe início e quadro de leitura fornecidos.",
          "Leia cada códon na tabela do exercício.",
          "Conte apenas aminoácidos antes da primeira parada no quadro.",
          "Compare a sequência e evite presumir efeito funcional sem evidência."
        ],
        "example": "Contagem autoral abstrata: um trecho de leitura fornecido contém cinco códons que especificam aminoácidos e, em seguida, um códon de parada no mesmo quadro. O produto inicial tem cinco resíduos, não seis; nessa cadeia linear há quatro ligações peptídicas. Não foi dado o comprimento de UTRs, que não deve ser incluído na conta.",
        "pitfall": "Contar stop como aminoácido, reiniciar em todo AUG ou afirmar que qualquer substituição altera obrigatoriamente a sequência e a função da proteína."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Trecho fictício autoral de DNA, sem íntrons ou edição: fita codificante 5′-ATG GCT TAA-3′. Qual RNA corresponde a essa região, escrito no sentido 5′→3′?",
        "hint": "O enunciado identifica a fita codificante, não a molde. Preserve a ordem no sentido indicado e troque T por U.",
        "options": [
          "5′-UAC CGA AUU-3′.",
          "5′-ATG GCT TAA-3′.",
          "5′-AUG GCU UAA-3′.",
          "5′-AAU UCG GUA-3′."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a sequência da codificante no mesmo sentido do transcrito coincide com a do RNA, com T substituído por U: AUG GCU UAA. A complementa indevidamente a codificante; B mantém timina no lugar de uracila; D inverte a ordem do RNA correto. Não se pede aqui identificar uma espécie nem supor que todo trecho transcrito seja região traduzida de um gene real."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo autoral sem íntrons, edição ou recodificação: fita molde 3′-TAC CCG ATT-5′. Escreva o RNA 5′→3′ e traduza a partir do AUG inicial até a parada. Use exclusivamente a tabela fornecida: AUG=Met; GGC=Gly; UAA=stop.",
        "hint": "Complemente o molde com RNA antiparalelo; depois separe as trincas no quadro inicial. O códon de parada não adiciona aminoácido.",
        "options": [
          "5′-AUG GGC UAA-3′; Met–Gly, dois aminoácidos antes da parada.",
          "5′-UAC CCG AUU-3′; Met–Gly, dois aminoácidos antes da parada.",
          "5′-AUG GGC UAA-3′; Met–Gly–stop, três aminoácidos.",
          "5′-AAU CGG GUA-3′; Gly–Met, dois aminoácidos antes da parada."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: o molde 3′-TAC CCG ATT-5′ gera RNA 5′-AUG GGC UAA-3′. Pela tabela fornecida e pelo início fixado, AUG especifica Met, GGC especifica Gly e UAA termina; são dois aminoácidos. B troca apenas T por U no molde; C conta stop como aminoácido; D inverte indevidamente o sentido da sequência correta e não aplica a tabela no quadro indicado. A cadeia fictícia não representa uma proteína funcional real."
      },
      {
        "level": "advanced",
        "prompt": "Sequência fictícia autoral lida desde o AUG: 5′-AUG UAC GAA UGA-3′. Uma substituição troca UAC por UAU. Não há edição ou recodificação. Tabela fornecida: AUG=Met; UAC=UAU=Tyr; GAA=Glu; UGA=stop. Qual conclusão compara corretamente os produtos iniciais?",
        "hint": "Compare códons antes e depois da substituição e diferencie sequência de RNA, sequência de aminoácidos e efeito funcional não fornecido.",
        "options": [
          "A troca adiciona obrigatoriamente um aminoácido, porque qualquer base nova alonga a cadeia.",
          "UAU torna-se um códon de parada, mesmo que a tabela o associe a Tyr.",
          "A sequência do RNA fica idêntica, pois dois códons podem especificar Tyr.",
          "Os dois produtos têm a mesma sequência inicial de aminoácidos Met–Tyr–Glu, embora a sequência do RNA seja alterada."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: UAC e UAU especificam Tyr na tabela; a cadeia inicial continua Met–Tyr–Glu e UGA indica parada. O RNA mudou em uma base. A confunde substituição e inserção; B contraria a tabela; C confunde redundância do código com identidade de nucleotídeos. A igualdade dessa sequência não demonstra, por si, igualdade de toda regulação ou de todo efeito funcional em um organismo."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Iluminismo e revoluções modernas",
    "objective": "Relacionar projetos iluministas e revoluções modernas sem causalidade única, comparando limitação do poder, soberania, independência e participação efetiva em contextos históricos distintos.",
    "prerequisites": [
      "Absolutismo e sociedade de ordens",
      "Colonização e escravidão atlântica",
      "Distinção entre fonte, interpretação e contexto"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Razão crítica e projetos políticos diversos",
        "explanation": "Iluminismo designa um conjunto diverso de debates, especialmente do século XVIII, com antecedentes no século XVII e circulação em vários espaços. A valorização da investigação, da razão e da crítica à autoridade herdada não produziu um programa político único. Nem todo pensador foi ateu, nem todos defenderam o mesmo governo ou a mesma extensão de participação. Locke, importante referência anterior, relacionou legitimidade ao consentimento e à proteção de direitos, entre eles vida, liberdade e propriedade; isso permite discutir limites do governo, sem converter sua teoria em defesa de qualquer Estado posterior. Montesquieu examinou formas de governo e o perigo de concentração: distinguir funções legislativas, executivas e judiciais e estabelecer limites ajuda a conter o arbítrio. Não significa que cada instituição possa agir sem regras ou que os poderes não mantenham relações. Rousseau discutiu soberania do corpo de cidadãos e vontade geral ligada ao interesse comum, que não é simplesmente a soma de conveniências privadas. Há tensões e interpretações distintas dessa formulação; não a use como autorização automática a qualquer decisão de um governante que diga representar o povo. Redes de leitura e debate difundiram e transformaram ideias, com condições de acesso desiguais. Para estudar um argumento, identifique problema, conceito e projeto de cada autor, evitando reunir todos sob uma frase inventada ou interpretar o Iluminismo como consenso pronto sobre a democracia atual.",
        "steps": [
          "Situe autor, obra ou argumento no tempo.",
          "Identifique a autoridade ou o privilégio criticado.",
          "Diferencie consentimento, limites institucionais e vontade geral.",
          "Compare projetos sem inventar unanimidade entre pensadores."
        ],
        "example": "Comparação autoral, sem citação literal: um argumento pergunta por que o governo é legítimo e quando pode ser resistido; outro examina como a distribuição institucional limita o abuso. As perguntas podem dialogar, mas não são idênticas. A primeira se aproxima do problema do consentimento em Locke; a segunda, da limitação institucional em Montesquieu.",
        "pitfall": "Atribuir a todos os iluministas um mesmo projeto, confundir crítica à intolerância com ateísmo obrigatório ou transformar conceitos em frases supostamente citadas."
      },
      {
        "level": "intermediate",
        "title": "Revoluções e mudanças de poder em contextos distintos",
        "explanation": "Revoluções modernas devem ser explicadas por conflitos e condições próprias, não como execução inevitável de um livro. Na Inglaterra do século XVII, disputas entre Coroa e Parlamento culminaram em mudanças como a Revolução de 1688–1689. O Bill of Rights de 1689 consolidou limites e liberdades parlamentares; isso não aboliu a monarquia nem instituiu participação política igual de toda a população. Sua cronologia precede a atuação de vários pensadores franceses do século XVIII, de modo que não pode ser apresentada como simples consequência de obras posteriores. Nas Treze Colônias britânicas, a Declaração de Independência adotada em 4 de julho de 1776 justificou ruptura política por direitos e consentimento dos governados. A independência não correspondeu a abolição geral imediata da escravidão. Na França, crise financeira, privilégios da sociedade de ordens, conflitos de representação e mobilizações se articularam em 1789. A convocação dos Estados Gerais e a formação da Assembleia Nacional mostram disputa sobre quem podia falar pela nação. A Declaração de 26 de agosto de 1789 proclamou direitos e soberania nacional, mas o processo revolucionário passou por fases e disputas, sem instituições e eleitorado constantes. Comparar os casos exige diferenciar limitação da Coroa, independência colonial e transformação da ordem social e política; ideias circulam, mas não anulam conflitos materiais, guerra ou escolhas dos participantes.",
        "steps": [
          "Organize a cronologia sem inverter causa e consequência.",
          "Identifique conflitos e agentes de cada processo.",
          "Diferencie independência, mudança de regime e limitação de poder.",
          "Relacione ideias e condições sem causa única ou resultado inevitável."
        ],
        "example": "Sequência autoral de leitura histórica: um estudante encontra um registro parlamentar inglês de 1689 e uma formulação francesa do século XVIII. A presença de temas semelhantes permite comparar argumentos, mas a data impede afirmar que o documento anterior foi produzido por influência direta daquela formulação posterior. Relação intelectual não dispensa cronologia.",
        "pitfall": "Chamar todas as revoluções de acontecimentos idênticos, supor que independência significa abolição ou explicar uma mudança anterior como consequência de um texto posterior."
      },
      {
        "level": "advanced",
        "title": "Direitos proclamados, exclusões e revolução haitiana",
        "explanation": "Uma declaração de igualdade é fonte de um projeto político e de disputas de legitimidade; não comprova que toda pessoa tenha passado a votar, exercer cargo ou viver sem coerção. Na experiência francesa, o sufrágio de 1791 foi censitário e indireto, com requisitos de participação; não é rigoroso resumi-lo como voto de todos nem como acesso exclusivo de uma pequena elite sem examinar as condições. Em1792 houve ampliação do sufrágio masculino para a eleição da Convenção, enquanto o Diretório restabeleceu restrições censitárias em 1795. Essa trajetória não foi ampliação contínua e universal; mulheres permaneceram sem o mesmo direito eleitoral nacional. A ação política feminina não desaparece por isso: participação em mobilizações e acesso ao voto são dimensões diferentes. Em Saint-Domingue, colônia francesa no Caribe, a revolta de pessoas escravizadas iniciada em 1791 abriu um processo de guerra, alianças e mudanças que conduziu à independência do Haiti em 1804. Não foi simples presente da metrópole ou cópia passiva da França: a luta contra a escravidão e o poder colonial tornou central a agência dos revoltosos. Entre lideranças e etapas distintas, Toussaint Louverture e Jean-Jacques Dessalines não devem ser tratados como a mesma pessoa ou como protagonistas de todos os momentos. A reação de dirigentes escravistas dos Estados Unidos à revolução haitiana evidencia tensões entre linguagem da liberdade e interesses sociais. Analise quem é incluído, quem reivindica e que instituições efetivam ou restringem direitos, sem concluir que exclusões tornam todas as transformações inexistentes.",
        "steps": [
          "Separe texto normativo, prática e disputa social.",
          "Examine requisitos eleitorais em cada etapa.",
          "Reconheça sujeitos escravizados e colonizados como agentes.",
          "Compare transformações e continuidades sem progresso automático."
        ],
        "example": "Método autoral: ao estudar uma mobilização de mulheres, uma pesquisa encontra presença em protestos e ausência de direito eleitoral equivalente. Não há contradição entre os dois dados: ser agente político é mais amplo que ter voto reconhecido. A conclusão deve conservar as duas informações, em vez de apagar a ação ou inventar igualdade eleitoral.",
        "pitfall": "Converter direito proclamado em acesso universal imediato, apresentar conquistas como dádiva ou reduzir a revolução haitiana a uma repetição sem sujeitos próprios."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Problema hipotético autoral: uma autoridade acumula fazer leis, executá-las e julgar sua própria conduta, sem controle. Uma crítica propõe distribuir funções e estabelecer limites institucionais para conter o arbítrio. Com qual problema político essa crítica mais diretamente dialoga?",
        "hint": "Identifique o mecanismo institucional proposto, sem confundi-lo com herança de poder ou concentração em nome de uma vontade pessoal.",
        "options": [
          "Legitimação de todo poder hereditário como necessariamente ilimitado.",
          "Eliminação de qualquer regra comum e de toda função de julgamento.",
          "Garantia de que uma pessoa jamais poderá abusar só por afirmar falar pelo povo.",
          "Limitação da concentração do poder, associada à reflexão de Montesquieu."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: o mecanismo de distribuir funções e limitar concentração se relaciona ao problema enfrentado por Montesquieu. A justifica o que a crítica contesta; B confunde controle do poder e ausência de regras; C transforma declaração pessoal de representação em garantia de não abuso. O enunciado é uma síntese própria de treino, não uma citação do autor nem a descrição de um regime histórico específico."
      },
      {
        "level": "intermediate",
        "prompt": "Síntese autoral de três marcos históricos: Bill of Rights inglês, 1689; Declaração de Independência das Treze Colônias, 1776; Declaração francesa de direitos, 1789. Qual comparação preserva cronologia e diferenças entre os processos?",
        "hint": "Diferencie limite à Coroa, ruptura colonial e transformação da ordem francesa; um texto posterior não pode ser causa direta de um documento anterior.",
        "options": [
          "Os três documentos aboliram imediatamente toda forma de escravidão e criaram eleitorados universais idênticos.",
          "Os marcos são distintos e podem ser comparados em torno de poder e direitos; o inglês precede os outros dois e não é efeito direto das declarações posteriores.",
          "A declaração francesa de 1789 produziu diretamente o documento inglês de 1689, cem anos antes.",
          "A independência das colônias em 1776 restaurou o poder ilimitado da Coroa britânica sobre elas."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: reconhece temas em circulação e diferenças institucionais sem inverter o tempo. A atribui consequências universais inexistentes aos três casos; C faz o posterior causar diretamente o anterior; D inverte o sentido da ruptura independentista. Comparar permite analisar relações, mas não transforma processos distintos em cópias com o mesmo eleitorado e os mesmos resultados sociais."
      },
      {
        "level": "advanced",
        "prompt": "Comparação autoral: declarações modernas formularam direitos, mas a escravidão e exclusões políticas persistiram em vários contextos; em Saint-Domingue, uma revolta iniciada em 1791 integrou o processo que levou ao Haiti independente em 1804. Qual interpretação é sustentada?",
        "hint": "Considere a diferença entre proclamação e efetivação e o papel dos próprios sujeitos que enfrentavam escravidão e domínio colonial.",
        "options": [
          "Direitos foram objeto de disputa; a revolução haitiana evidencia ação de pessoas escravizadas contra limites da ordem colonial, sem garantir realização automática de igualdade em todo lugar.",
          "A linguagem de liberdade demonstra que a escravidão já não existia no início da revolta haitiana.",
          "A independência do Haiti foi um presente sem conflito, concedido por unanimidade pelos senhores coloniais.",
          "A existência de exclusões prova que nenhuma alteração de poder ocorreu em qualquer revolução moderna."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: articula limites da efetivação e agência dos revoltosos, sem negar transformações nem prometer igualdade automática. B troca ideal por realidade já concluída; C apaga conflito e sujeitos históricos; D transforma permanências em ausência de qualquer mudança. O Haiti não é tratado como simples cópia da França, e suas etapas não são atribuídas indistintamente a uma única liderança."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Vegetação e biomas do Brasil",
    "objective": "Distinguir bioma, formação vegetal e cobertura atual, reconhecer a diversidade dos seis biomas continentais brasileiros e interpretar mudanças de paisagem com escala, sazonalidade e origem dos dados explícitas.",
    "prerequisites": [
      "Clima, relevo e disponibilidade de água",
      "Leitura de legenda e escala de mapas",
      "Vegetação nativa e uso da terra"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Bioma, formação vegetal e cobertura da terra",
        "explanation": "Na classificação continental brasileira adotada nesta aula, os seis biomas são Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal. O país também possui ecossistemas costeiros e marinhos, que não devem ser apagados por essa lista. Bioma é uma unidade ampla que integra vida e condições ambientais em escala regional; não se reduz a uma única espécie ou a uma fotografia. Formação vegetal descreve características da vegetação, como predomínio de árvores, arbustos ou herbáceas. Um mesmo bioma pode conter formações florestais, savânicas e campestres em combinações diferentes. Cobertura da terra informa o que ocupa uma área no momento observado; uso da terra envolve atividades humanas relacionadas a ela. Uma lavoura num território de determinado bioma não constitui automaticamente um novo bioma. Mapas de limites regionais e mapas de remanescentes atuais respondem a perguntas diferentes. Verifique legenda, data, escala e método antes de comparar. Vegetação aberta pode ser nativa: campo não é necessariamente floresta destruída, e aumentar o número de árvores não equivale sempre a restaurar o ambiente original. Clima, solo, relevo, disponibilidade de água e história ambiental ajudam a explicar a distribuição das formações. Há transições e diversidade interna; limites cartográficos são representações em uma escala, não muros que tornem toda paisagem idêntica de um lado e completamente diferente do outro.",
        "steps": [
          "Leia qual unidade o mapa representa.",
          "Diferencie bioma e formação vegetal.",
          "Separe limites regionais e cobertura atual datada.",
          "Reconheça campos nativos sem pressupor degradação."
        ],
        "example": "Situação cartográfica autoral: um mapa regional delimita o Cerrado, e outro, do mesmo local e data indicada, mostra mata de galeria, campo nativo e lavoura. O primeiro classifica uma unidade ampla; o segundo discrimina coberturas. A diversidade da legenda não exige transformar cada mancha num bioma diferente.",
        "pitfall": "Confundir campo nativo com área desmatada ou interpretar mudança de cobertura como substituição imediata da identidade do bioma."
      },
      {
        "level": "intermediate",
        "title": "Diversidade dos seis biomas continentais",
        "explanation": "A Amazônia brasileira concentra extensas florestas tropicais, mas possui ambientes distintos: a presença e o regime de inundação ajudam a diferenciar paisagens florestais, e não se deve supor que toda área fique permanentemente alagada. A Mata Atlântica apresenta grande diversidade de formações e ambientes associados, incluindo florestas, restingas, manguezais e campos de altitude; não é apenas uma faixa de floresta idêntica ao longo de toda a costa. No Cerrado, no Brasil Central e em áreas de outras regiões, coexistem formações campestres, savânicas e florestais. Campo limpo e mata de galeria ilustram diferenças internas de estrutura e disponibilidade de água; cerrado sentido restrito não é sinônimo de toda a variedade do bioma. Na Caatinga, predominantemente associada ao Semiárido, muitas plantas perdem folhas durante a estação seca e retomam atividade com as chuvas; há árvores, arbustos, herbáceas e espécies suculentas, e a paisagem não é um deserto sem biodiversidade. O Pampa, na porção brasileira localizada no Rio Grande do Sul, tem destaque para campos nativos e também outras formações; não confunda toda pastagem plantada com campo nativo. O Pantanal, em Mato Grosso e Mato Grosso do Sul no recorte brasileiro, apresenta mosaico de vegetação e forte influência do pulso de inundação. Nem toda sua área permanece coberta de água ao mesmo tempo. Associe localização e processos sem reduzir cada bioma a uma única imagem ou característica absoluta.",
        "steps": [
          "Relacione localização geral e dinâmica ambiental.",
          "Reconheça formações diferentes no mesmo bioma.",
          "Diferencie campos nativos e pastagens plantadas.",
          "Examine o regime de água e sua variação no tempo."
        ],
        "example": "Comparação autoral: dois registros de uma mesma área de Caatinga, feitos em épocas seca e chuvosa, mostram diferenças de folhas e coloração. Antes de afirmar desaparecimento e retorno de um bioma inteiro, considere a fenologia e confira se houve conversão de uso. A sazonalidade oferece uma hipótese a ser verificada, não prova automática de ausência de impacto.",
        "pitfall": "Afirmar que Caatinga não tem vida, que Amazônia e Pantanal ficam integralmente alagados ou que cada bioma só admite uma formação vegetal."
      },
      {
        "level": "advanced",
        "title": "Monitoramento e conservação de paisagens",
        "explanation": "Mudanças de cobertura precisam ser interpretadas com método. Uma diferença visual entre imagens pode decorrer de conversão real, de sazonalidade, da inundação, de nuvens ou de critérios de classificação; examine séries comparáveis e validação, em vez de chamar qualquer mancha clara de desmatamento. Sensoriamento remoto permite acompanhar formações florestais e não florestais e pode ser combinado com observações de campo. Quando se apresenta percentual de perda ou remanescente, informe recorte, data, classe e base de comparação: área total do bioma, cobertura original estimada e área já ocupada não são denominadores intercambiáveis. Mais vegetação arbórea em imagem não basta para comprovar recuperação da biodiversidade: uma plantação homogênea pode substituir um campo nativo. Nos campos do Pampa, conservar a vegetação nativa e suas funções exige reconhecer seu valor próprio, sem tratar todo ambiente aberto como falha a corrigir com árvores. Na Mata Atlântica, áreas remanescentes fragmentadas pedem análise da qualidade e das relações entre habitats, além de mera soma de área. No Pantanal, alterações no regime hídrico e no uso da paisagem precisam ser examinadas junto da sazonalidade. Conservação não se resume a escolher o bioma com maior número de árvores; é preciso identificar os processos e as formações que se pretende manter e recuperar. As decisões também envolvem populações e usos do território, sem pressupor que toda presença humana cause o mesmo efeito ou que uma solução única sirva a todos os lugares.",
        "steps": [
          "Compare datas, sensores, classes e condições sazonais.",
          "Informe denominador e recorte de qualquer indicador.",
          "Verifique se a cobertura corresponde ao habitat nativo.",
          "Relacione conservação e dinâmica local sem solução universal."
        ],
        "example": "Caso autoral: um relatório conta cobertura arbórea maior após implantar árvores em um campo nativo e conclui que a biodiversidade necessariamente aumentou. A conclusão excede o indicador: ele mede árvores, não composição de espécies ou conservação do campo. É necessário examinar o ambiente de referência e os dados ecológicos antes de avaliar o resultado.",
        "pitfall": "Tratar plantação de árvores como recuperação universal ou comparar percentuais de recortes e datas diferentes como se medissem a mesma coisa."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo autoral de leitura da paisagem: uma área de campo limpo do Cerrado foi identificada como vegetação nativa, com predomínio herbáceo. Qual conclusão respeita a distinção entre bioma e formação vegetal?",
        "hint": "Um bioma pode reunir mais de uma formação; a presença de vegetação aberta não obriga supor que antes havia floresta no local.",
        "options": [
          "A ausência de árvores prova que a área nunca pertenceu a nenhum bioma.",
          "Campo limpo é uma formação que pode integrar o Cerrado; o dado de vegetação nativa não autoriza chamá-la automaticamente de floresta destruída.",
          "Todo campo limpo é um sétimo bioma continental separado na classificação estudada.",
          "Vegetação herbácea só pode existir em pastagem plantada por pessoas."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: campo limpo é formação campestre que pode integrar o bioma Cerrado; o enunciado identifica sua condição nativa. A confunde bioma e presença de árvores; C troca formação por unidade continental; D nega campos naturais. Reconhecer vegetação nativa não elimina a necessidade de monitoramento, mas impede supor uma floresta original apenas pela aparência aberta."
      },
      {
        "level": "intermediate",
        "prompt": "Quadro de revisão inteiramente autoral. Qual associação preserva características gerais dos biomas sem impor homogeneidade a todas as suas áreas?",
        "hint": "Use localização e processos: campos no Sul, resposta sazonal à água e pulsos de inundação, evitando palavras como todo e permanente.",
        "options": [
          "Pampa: somente floresta tropical densa; Caatinga: deserto sem plantas; Pantanal: água permanente em toda a extensão.",
          "Cerrado: apenas floresta sem formações campestres; Mata Atlântica: cobertura homogênea sem ambientes associados.",
          "Amazônia: toda a vegetação permanentemente submersa; Pampa: qualquer lavoura de todo o país.",
          "Pampa: destaque de campos nativos no recorte brasileiro do RS; Caatinga: muitas plantas com resposta à estação seca; Pantanal: mosaico sob influência do pulso de inundação."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: as três associações são gerais e admitem diversidade interna. A inventa exclusividade florestal e ausência de vida, além de inundação integral permanente; B apaga formações e ambientes; C generaliza submersão e confunde lavoura com bioma. Reconhecimento por processos deve ser combinado com localização e dados; uma característica isolada numa fotografia não substitui a análise."
      },
      {
        "level": "advanced",
        "prompt": "Cenário cartográfico autoral: um mapa M delimita os biomas numa escala regional. Um mapa N mostra, com legenda própria, a cobertura da terra em 2025. N registra lavouras e remanescentes dentro do limite de um bioma de M. Qual interpretação é adequada?",
        "hint": "Os mapas respondem a perguntas distintas; uma classe de uso ou cobertura não equivale automaticamente a outro limite regional de bioma.",
        "options": [
          "M e N necessariamente se contradizem, porque um bioma não pode conter área convertida em lavoura.",
          "As lavouras de N viraram automaticamente um novo bioma continental, sem depender do critério de M.",
          "M representa uma delimitação regional e N a cobertura datada; a conversão pode ser estudada dentro dos limites de M, conferindo escalas e métodos.",
          "N prova que toda a biodiversidade permaneceu idêntica, mesmo sem dados de espécies ou habitat."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: os produtos podem ser complementares. É possível mapear cobertura atual e mudanças dentro de uma unidade regional, respeitando legenda, escala e método. A exige homogeneidade inexistente; B confunde conversão e novo bioma; D infere conservação de biodiversidade sem indicador apropriado. Os mapas M e N são hipotéticos, sem imagem ausente necessária para resolver o exercício."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Lógica, falácias e linguagem",
    "objective": "Reconstruir premissas e conclusão, distinguir verdade, validade e solidez e avaliar inferências formais e falácias em linguagem contextualizada, sem usar rótulos como substituto de análise.",
    "prerequisites": [
      "Enunciado e argumento",
      "Diferença entre evidência e opinião",
      "Leitura de negação e conectivos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Proposições, premissas e conclusão",
        "explanation": "Um argumento apresenta razões para sustentar uma conclusão. As razões são premissas; a conclusão é a afirmação que se pretende justificar. Não é necessário haver briga ou muitas pessoas para existir argumento. Um conjunto de frases sobre o mesmo tema pode apenas descrever uma situação, sem relação de apoio. Na análise introdutória clássica, trabalhamos com enunciados declarativos aos quais se atribui verdade ou falsidade no contexto. Perguntas e ordens, tomadas como tais, não são proposições declarativas nesse uso. Ainda que não saibamos se um enunciado é verdadeiro, ele pode ser avaliado como afirmação; desconhecimento não o transforma em pergunta. Expressões como portanto e porque podem ajudar a localizar funções, mas não garantem que a inferência esteja correta. Uma mesma proposição pode ser conclusão de uma etapa e premissa de outra. Reescreva o argumento sem mudar o que ele afirma e indique quando precisar de uma premissa implícita: acrescentar por conta própria uma razão controversa pode transformar o argumento em outro. A linguagem natural também exige atenção a termos vagos, ambiguidades e quantificadores. Todos não significa alguns, e uma palavra repetida pode mudar de sentido. Avaliar o apoio entre enunciados é uma tarefa diferente de descobrir se cada informação realmente ocorreu, embora ambas importem para uma boa argumentação.",
        "steps": [
          "Localize o que o texto pretende sustentar.",
          "Liste as razões oferecidas como premissas.",
          "Diferencie afirmação, pergunta e ordem.",
          "Explicite ambiguidades e pressupostos sem alterar o argumento."
        ],
        "example": "Argumento autoral: “O arquivo deve ser preservado, pois reúne os únicos registros disponíveis dessa pesquisa”. A recomendação de preservação é a conclusão; a singularidade dos registros é a razão oferecida. Para avaliar se essa razão basta, é preciso examinar também critérios de preservação e a verdade da informação, sem supor que a palavra pois já prove o resultado.",
        "pitfall": "Confundir argumento com discussão hostil ou aceitar uma conclusão só porque o texto contém portanto."
      },
      {
        "level": "intermediate",
        "title": "Validade, solidez e contramodelos",
        "explanation": "Na dedução clássica aqui estudada, um argumento é válido quando não há caso em que todas as premissas sejam verdadeiras e a conclusão falsa. Validade não afirma que suas premissas são de fato verdadeiras. Um argumento sólido é válido e tem premissas verdadeiras. Uma conclusão verdadeira pode resultar de um raciocínio inválido; encontrar sua verdade isoladamente não prova a validade. Use P e Q para representar proposições. Na interpretação material, P→Q só é falsa com P verdadeira e Q falsa; esse conectivo não expressa sozinho uma causa física nem toda nuance do se cotidiano. Modus ponens tem forma P→Q; P; logo Q. Modus tollens tem forma P→Q; não Q; logo não P. As duas formas preservam verdade sob premissas verdadeiras. Já concluir P apenas de P→Q e Q é afirmar o consequente: P falsa e Q verdadeira torna as duas premissas verdadeiras, mas a conclusão falsa. Negar o antecedente, concluindo não Q de P→Q e não P, também não é regra válida. Uma tabela com as quatro combinações de P e Q pode testar esses casos. Um contramodelo basta para refutar validade; exemplos favoráveis isolados não a garantem. Esse critério é de consequência dedutiva: uma inferência indutiva procura apoio ampliativo, sem a mesma garantia lógica, e deve ser examinada segundo força da evidência e condições.",
        "steps": [
          "Separe validade da verdade factual das premissas.",
          "Fixe a interpretação dos conectivos usados.",
          "Procure premissas verdadeiras com conclusão falsa.",
          "Diferencie forma dedutiva e apoio indutivo."
        ],
        "example": "Modelo autoral: todos os objetos da caixa K são de bronze; toda peça de bronze conduz eletricidade; portanto todos os objetos da caixa K conduzem eletricidade. A passagem é dedutivamente válida na leitura universal dada. Sem inspecionar a caixa, porém, não se estabeleceu a verdade da primeira premissa nem a solidez do argumento.",
        "pitfall": "Concluir validade a partir de uma conclusão verdadeira ou confundir um condicional com sua recíproca."
      },
      {
        "level": "advanced",
        "title": "Falácias e precisão na linguagem",
        "explanation": "Falácia é uma deficiência de raciocínio a ser demonstrada, não um nome que vence a discussão. Em uma falácia formal, uma estrutura inválida pode ser identificada independentemente do tema. Na análise informal, examine relevância, suficiência, pressupostos e contexto das razões. Um ataque a traço pessoal sem relação com a tese não refuta o argumento: é o uso falacioso do ad hominem. Isso não torna toda avaliação de credibilidade irrelevante; conflito de interesse, competência e acesso aos dados podem importar para testemunhos, sem substituir exame da evidência. Espantalho atribui ao oponente uma posição distorcida e mais fácil de atacar. Falso dilema apresenta alternativas como se esgotassem possibilidades quando não as esgotam. Generalização apressada excede o que os casos sustentam. Post hoc transforma sucessão temporal em prova suficiente de causalidade; a ordem dos acontecimentos pode ser informação relevante, mas não basta sozinha. Petição de princípio toma como apoio aquilo que precisava justificar, produzindo circularidade. Equívoco pode explorar sentidos diferentes do mesmo termo, como legal significando permitido por lei em uma premissa e agradável em outra. Não é a mera ambiguidade de uma palavra que configura a falha: é seu uso para sustentar a passagem sem conservar o sentido pertinente. Referir uma autoridade competente pode integrar um argumento, mas fama ou cargo fora do tema não garantem verdade. Ao criticar, indique a razão que falta ou a passagem indevida e considere se a conclusão poderia ser sustentada por outra evidência. Uma falácia no argumento não prova automaticamente que sua conclusão é falsa.",
        "steps": [
          "Reconstrua a posição antes de criticá-la.",
          "Mostre a deficiência concreta entre razão e conclusão.",
          "Confira sentidos dos termos e alternativas omitidas.",
          "Diferencie rejeição de uma inferência e prova de falsidade da tese."
        ],
        "example": "Exemplo autoral de circularidade: “Este procedimento é o mais confiável porque nenhum outro merece tanta confiança; e sei disso porque ele é o mais confiável”. A repetição não acrescenta critério ou evidência independente. Identificar o círculo não demonstra que o procedimento seja ruim: mostra que essa justificativa não estabeleceu sua superioridade.",
        "pitfall": "Chamar toda discordância de falácia, proibir qualquer testemunho especializado ou tomar falha de argumento como prova automática da tese contrária."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Texto autoral: “A entrada lateral foi interditada; por isso, a equipe deve orientar visitantes para a entrada principal”. Qual análise identifica corretamente conclusão e razão oferecida, sem julgar ainda se a recomendação é suficiente?",
        "hint": "Separe a informação usada como apoio da recomendação introduzida por por isso.",
        "options": [
          "A razão é orientar visitantes; a conclusão é que a entrada lateral jamais existiu.",
          "O texto não contém argumento porque não há insultos entre interlocutores.",
          "A conclusão é orientar visitantes para a entrada principal; a interdição lateral é a razão oferecida.",
          "A presença de por isso garante, por si, que toda a informação é verdadeira e que não falta nenhuma condição."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a interdição é apresentada como apoio à recomendação de orientar para outra entrada. A inverte funções e inventa inexistência; B confunde argumento e briga; D transforma marcador linguístico em garantia de verdade e suficiência. A questão identifica funções sem verificar acesso, segurança ou outras condições do caso fictício."
      },
      {
        "level": "intermediate",
        "prompt": "Na lógica proposicional clássica, com → material, analise a forma P → Q; Q; logo P. Qual caso é um contramodelo que demonstra sua invalidade?",
        "hint": "É preciso que as duas premissas sejam verdadeiras ao mesmo tempo que a conclusão seja falsa. Não basta tornar uma premissa falsa.",
        "options": [
          "P verdadeira e Q falsa: assim a primeira premissa é falsa, o que por si refuta validade.",
          "P falsa e Q verdadeira: premissas verdadeiras e conclusão falsa.",
          "P verdadeira e Q verdadeira: conclusão verdadeira é prova de invalidade.",
          "P falsa e Q falsa: a segunda premissa falsa prova que nenhuma forma pode ser válida."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: com P falsa e Q verdadeira, P→Q é verdadeira na interpretação material, Q é verdadeira e a conclusão P é falsa. Isso basta como contramodelo da afirmação do consequente. A torna o condicional falso; C tem conclusão verdadeira; D torna Q falsa. Esses três casos não satisfazem o critério solicitado. A forma válida modus ponens requer P como segunda premissa e conclui Q, não a inversão apresentada."
      },
      {
        "level": "advanced",
        "prompt": "Discussão fictícia autoral: Lia apresenta dados e método para avaliar os horários de uma biblioteca. Rui responde apenas: “O relatório deve ser rejeitado porque não gosto da roupa de Lia”. Qual avaliação examina a relação entre razão e conclusão?",
        "hint": "Observe se a característica citada é relevante para dados e método; não conclua automaticamente a verdade da proposta de Lia.",
        "options": [
          "A preferência sobre roupa refuta necessariamente todos os dados apresentados.",
          "A rejeição de Rui prova que Lia está certa em tudo, sem necessidade de conferir método.",
          "Nenhuma crítica sobre fonte, método ou credibilidade poderia ser relevante em qualquer debate.",
          "O traço pessoal citado não refuta dados e método; o ataque é irrelevante nesse argumento, e o relatório ainda precisa ser avaliado por evidências."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a preferência de Rui sobre roupa não sustenta a rejeição do relatório, caracterizando ataque pessoal irrelevante no contexto. A aceita a falsa relação; B transforma falácia numa prova automática da tese contrária; C proíbe avaliações que podem ser pertinentes. O diagnóstico atinge essa justificativa de Rui, sem conferir por si a verdade dos dados ou a qualidade do relatório."
      }
    ]
  }
];

export const authoredCurriculumBatch11ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Equações, inequações e sistemas",
    "contentSha256": "2e9dc32a44841d67d30d718768e222303129e183920ae4848d399c2e62e3f45c",
    "draftMethod": "Autoria e conferência pelo Codex com referências matemáticas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/intermediate-algebra-2e/pages/2-1-use-a-general-strategy-to-solve-linear-equations",
      "https://openstax.org/books/intermediate-algebra-2e/pages/2-5-solve-linear-inequalities",
      "https://openstax.org/books/intermediate-algebra-2e/pages/7-4-solve-rational-equations",
      "https://openstax.org/books/intermediate-algebra-2e/pages/7-6-solve-rational-inequalities",
      "https://openstax.org/books/intermediate-algebra-2e/pages/9-8-solve-quadratic-inequalities",
      "https://openstax.org/books/intermediate-algebra-2e/pages/4-1-solve-systems-of-linear-equations-with-two-variables"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "A equação racional (x^2-9)/(x-3)=6 tem domínio restrito a x≠3, pois o denominador não pode ser zero. Fatorando o numerador como (x-3)(x+3) e cancelando o fator comum x-3 (válido somente para x≠3), a igualdade reduz-se a x+3=6, cujo único candidato é x=3. Contudo, este valor está excluído pelo domínio original, de modo que a equação não possui solução real sobre os números reais. A alternativa D correta reflete esse raciocínio; A ignora a restrição de domínio, B equivocadamente trata a equação como identidade válida para todos os reais distintos de 3, e C confunde o zero do numerador com solução da igualdade, olvidando que o quociente valeria 0 e não 6 no ponto x=-3."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Na inequação (x-1)/(x+2)≥0, identifica-se o zero do numerador em x=1 e o polo (ponto de indefinição) em x=-2. Esses dois valores dividem a reta em três intervalos: menor que -2, entre -2 e 1, e maior que 1. Testando sinais: quando x<-2, numerador e denominador são negativos, fazendo o quociente positivo; entre -2 e 1, o numerador é negativo e o denominador positivo, resultando em quociente negativo; para x>1, ambos são positivos e o quociente é positivo. Como a comparação é ≥, o ponto x=1 (onde o numerador se anula) é incluído na solução, enquanto x=-2 é sempre excluído por tornar a expressão indefinida. Portanto o conjunto solução é x<-2 ou x≥1, correspondendo exatamente à alternativa B. A alternativa A incorretamente inclui o polo -2 e seleciona a região de sinal oposto; C troca as inclusões dos extremos; D não realiza a análise de sinais do numerador."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Para o sistema linear 2x+3y=19 e 4x-y=3, isola-se y na segunda equação obtendo y=4x-3. Substituindo na primeira: 2x+3(4x-3)=19 implanta 2x+12x-9=19, então 14x=28 e x=2. Recuperando y=4(2)-3=5. A conferência nas originais dá 2(2)+3(5)=4+15=19 e 4(2)-5=8-5=3, satisfeito. As demais opções A(5,2), B(3,1) e D(4,-1) não satisfazem simultaneamente as duas equações (verificando-se os lados esquerdos). O determinante da matriz de coeficientes é (2)(-1)-(3)(4)=-2-12=-14≠0, o que confirma unicidade da solução. Assim, a alternativa C com par (2,5) está correta."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Morfologia e classes de palavras",
    "contentSha256": "e3a4436aa855d734f52e69caa44de4b47e2154258d023e34edbe85da50372b93",
    "draftMethod": "Autoria e conferência pelo Codex com referências acadêmicas e linguísticas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.libras.ufsc.br/colecaoLetrasLibras/eixoFormacaoBasica/morfologia/scos/cap17824/11.html",
      "https://www.libras.ufsc.br/colecaoLetrasLibras/eixoFormacaoBasica/morfologia/scos/cap17824/10.html",
      "https://www.libras.ufsc.br/colecaoLetrasLibras/eixoFormacaoBasica/morfologia/scos/cap17824/12.html",
      "https://www.libras.ufsc.br/colecaoLetrasLibras/eixoFormacaoBasica/morfologia/scos/cap18039/1.html",
      "https://www.libras.ufsc.br/colecaoLetrasLibras/eixoFormacaoBasica/morfologia/scos/cap18012/14.html",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/pronomes-artigos-preposicoes-e-adverbios/25711",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/conjuncao-integrantepronome-relativo/3557",
      "https://scon.stj.jus.br/docs_intranet/comunicacao/interna/Manual_atualizado.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Análise da relação flor→flores como flexão numérica do paradigma versus flor→florista como derivação sufixal com o sufixo -ista; opção 1 corrretamente identifica Flores como marca de plural de flor e florista como formação por sufixo -ista sem exigir mudança de classe; as outras opções incorretamente classificam como flexão universal, verbal ou composição entre substantivos autônomos."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Classificação das palavras em ordem: 'As' (artigo definido), 'duas' (numeral cardinal), 'pesquisadoras' (substantivo), 'brasileiras' (adjetivo), 'revisaram' (verbo), 'seus' (pronome possessivo); opção 0 corresponde a esta sequência exata conforme a tradição gramatical escolar; as outras opções atribuem classes incompatíveis como pronome pessoal a 'As', preposição a 'seus' ou verbo a 'duas'."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Análise de 'meio' em 'meio torta' como advérbio invariável modificando adjetivo versus 'meia' em 'meia folha' como numeral fracionário ligado a substantivo feminino; opção 3 descreve corretamente esta distinção baseada no elemento modificado e no sentido; as outras opções incorretamente tratam ambos como artigos, universalizam uso numeral ou invertem a análise de concordância."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Modernismo: fases e autores",
    "contentSha256": "1bd65fe23e4f799b996ce18bde8ab2707203fd752160406f40e2bb76a7fc57d9",
    "draftMethod": "Autoria e conferência pelo Codex com fontes acadêmicas e de acervos; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.ieb.usp.br/semana-de-arte-moderna-cinquentenario/",
      "https://icaa.mfah.org/s/en/item/771303",
      "https://graciliano.com.br/obra/vidas-secas-1938/",
      "https://ims.com.br/publicacao/alguma-poesia-o-livro-em-seu-tempo/",
      "https://site.claricelispector.ims.com.br/livro/perto-do-coracao-selvagem/",
      "https://www.academia.org.br/artigos/guimaraes-rosa-1956",
      "https://www.academia.org.br/academicos/joao-cabral-de-melo-neto/biografia",
      "https://www.museudacidade.prefeitura.sp.gov.br/dialogos-no-museu-modernismo-em-uma-abordagem-critica/",
      "https://jornal.usp.br/artigos/centenario-da-semana-de-arte-moderna-de-1922-e-saude-no-brasil/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Analise da tarefa basica sobre recorte 1930-1945 com obras de Drummond (poesia, 1930) e Graciliano (prosa, 1938): a opcao A afirma erroneamente que a fase contem apenas prosa, contradizendo o conteudo da aula que inclui poesia e menciona Drummond. A opcao B dita indevidamente que as obras sao o mesmo romance regional escrito em colaboração, ignorando diferencas de autor, genero e data. A opcao C e correta pois o recorte efetivamente reúne poesia e prosa com projetos distintos, sem reducao a um unico genero ou formula, conforme a aula diferencia generos e autores e apresenta ambas as obras como exemplos no mesmo recorte historico. A opcao D reduz indevidamente a forma ao valor cronologico, contradizendo a explicacao da aula sobre situacao cronologica vs. limitacao de analise critica. O indice 2 deriva da eliminacao das alternativas incorretas e corroboracao da opcao C com o texto da aula."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Analise da tarefa intermediaria com fragmento sobre deposito cheio e familia que recebe menos: a opcao A e correta pois o contraste entre estoque e acesso, com controle da informacao pelo proprietario, suporta leitura de relacoes sociais de poder e distribuicao desigual, sem invocar causa natural exclusiva, conforme o hint da tarefa. A opcao B esta errada pois contradiz o proprio fragmento ao dizer que nao ha recursos (deposito cheio) e inventa causa climatica ausente do texto. A opcao C esta errada pois nao ha evidencia no fragmento de que narrador e proprietario tenham mesma opiniao; pelo contrario, o proprietario se recusa a mostrar a conta. A opcao D esta errada pois o enunciado da tarefa declara explicitamente o fragmento como autral, nao extraido de escritor historico, impossificando identificacao certa de autor ou ano de publicacao. O indice 0 deriva do fragmento indicar relacoes sociais de poder como leitura mais suportada, enquanto as outras opcoes violam elementos do texto ou do enunciado da tarefa."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Analise da tarefa avancada sobre associacao de Clarice Lispector a debates da terceira fase com data documentada de 1943 para Perto do coracao selvagem, anterior ao corte convencional de 1945: a opcao A esta errada pois mudar referencia para 1946 sem nova evidencia nao e autorizado, conforme o hint que diz que associacao historiografica nao autoriza substituir data documentada de uma obra. A opcao B esta errada pois concluir que todo o Modernismo começou em 1943 nao deriva do caso especifico e ignora propostas anteriores conhecidas, como as da Semana de 1922. A opcao C esta errada pois Descartar qualquer estudo de fases por uma fronteira convencional e postura extrema nao e suportada pela aula, que trata periodizacao como instrumento historiografico util com fronteiras discutiveis, nao como regra absoluta. A opcao D esta correta pois mantem a data documentada (1943) e explica que a periodizacao e um recorte historiografico sem obrigar toda a trajectoria da autora a comecar depois de 1945, alinhando-se ao hint sobre sobreposicao de trajetorias e recortes. O indice 3 deriva da preferencia pela preservacao da informacao bibliografica e reconhecimento da periodicidade como instrumento, em vez de alteracoes para servir ao esquema ou conclusoes extremas."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Planejamento, escrita, revisão e reescrita",
    "contentSha256": "cc1405a58e8a5938901fb75961da9212353247425285ec970ffd0a3c23d9b444",
    "draftMethod": "Autoria e conferência pelo Codex com fontes oficiais e centros universitários de escrita; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://writingcenter.unc.edu/tips-and-tools/brainstorming/",
      "https://writingcenter.unc.edu/tips-and-tools/thesis-statements/",
      "https://www.uis.edu/learning-hub/writing-resources/handouts/learning-hub/reverse-outlines",
      "https://nps.edu/web/gwc/revision",
      "https://owl.purdue.edu/owl/general_writing/the_writing_process/proofreading/proofreading_for_errors.html",
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/enem-2026-cartilha-da-redacao-esta-disponivel",
      "https://www.fuvest.br/wp-content/uploads/fuvest2027-guia-provas.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "A alternativa 3 examina barreiras verificáveis (horários, deslocamento, condições de uso) e relaciona cada aspecto ao recorte proposto, cumprindo a tarefa de manter o foco e sustentar desenvolvimento com apoio verificável. A alternativa 0 repetiria ideia geral sobre leitura sem examinar barreiras; a 1 fabricaria estatística sem origem e afirmação universal; a 2 narraria experiência pessoal desconectada do recorte sobre bibliotecas públicas."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "B, índice 1: ajusta a conclusão ao dado fornecido, três bairros atendidos em um total de vinte, e reconhece que não há demonstração de cobertura universal. A, índice 0, troca o conectivo sem corrigir a inferência; C, índice 2, altera indevidamente o dado de vinte para três; D, índice 3, fabrica pesquisa inexistente. Os dados são explicitamente fictícios."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A alternativa 0 distingue a gratuidade da oficina do custo para chegar a ela e qualifica a possível barreira de acesso ao caso descrito, sem atribuí-la a todas as situações. A alternativa 1 mantém a contradição lógica por meio de conectivo \"consequentemente\"; a 2 altera apenas pontuação após \"gratuita\" sem resolver o conflito de conteúdo; a 3 declara indevidamente que a oficina custa R$ 12, transferindo indevidamente o valor do transporte ao preço da atividade e apagando a informação da gratuidade."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Uso de língua inglesa em contextos socioculturais",
    "contentSha256": "8dbe61eab74bc60f648cdf7f6e50fcb2720468a15caca761259085959bcee0d3",
    "draftMethod": "Autoria Codex com conferência em fontes oficiais de ensino de inglês e acadêmicas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/requests-offers-invitations",
      "https://www.teachingenglish.org.uk/professional-development/teachers/understanding-learners/intercultural-learning-1",
      "https://www.teachingenglish.org.uk/professional-development/teachers/teaching-knowledge-database/d-h/englishes",
      "https://owl.purdue.edu/owl/multilingual/world_englishes/index.html",
      "https://www.coe.int/en/web/common-european-framework-reference-languages/plurilingualism-and-pluriculturalism",
      "https://rm.coe.int/cefr-companion-volume-with-new-descriptors-2020/16809ea0d4",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/probability"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A pergunta 'Could you send the updated agenda before noon, please?' tem função de pedido de ação com objeto e prazo explícitos. A resposta correta (índice 2) identifica essa função de pedido, não traduzindo 'could' isoladamente como pergunta de capacidade ou inferindo competência infantil. O contexto comunicação (Jo→Pat, arquivos, prazo do meio-dia) sustenta a interpretação de pedido de envio, não investigação de histórico ou confirmação de fim de reunião."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Na Task 2, a participante não compreende um termo e o texto não informa país, sotaque nem formação. A resposta correta (índice 0) 'Could you explain what that term means in this task?' ajuda a negociar significado sem diagnosticar competência geral nem atribuir origem ao interlocutor, cumprindo o objetivo de clarificação sem estereótipos. As alternativas erradas inventam país, confundem familiaridade linguística com raciocínio ou eliminam variação indevidamente."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Na Task 3, o comunicado 'The community cinema may offer a morning session next month. The schedule is not confirmed.' usa 'may' para indicar possibilidade. A interpretação correta (índice 3) reconhece essa possibilidade sem transformá-la em certeza, respeitando a segunda frase sobre falta de confirmação. As opções erradas transformam possibilidade em certeza, inventam desejos universais sem pesquisa ou confundem ausência de confirmação com cancelamento definitivo."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Pronomes pessoais e tratamento em espanhol",
    "contentSha256": "5ba1dcf19ffad7936d6acbcde3620be4e6d17e6435019c53cc94df03b3918c86",
    "draftMethod": "Autoria e conferência Codex com RAE/ASALE, UCM e Academia Dominicana; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.rae.es/dpd/usted",
      "https://www.rae.es/dpd/voseo",
      "https://www.rae.es/dpd/pronombres%20personales%20%C3%A1tonos",
      "https://www.ucm.es/plataformaele/pronombres",
      "https://www.rae.es/dpd/pronombres%20personales%20t%C3%B3nicos",
      "https://www.rae.es/dpd/se",
      "https://www.rae.es/dpd/vosotros",
      "https://www.rae.es/dpd/le%C3%ADsmo",
      "https://academia.org.do/2018/12/04/temas-idiomaticos-7/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Na tarefa basica, a instrucao pede usar explicitamente ustedes para falar com varias pessoas. A alternativa 'Ustedes preparan' usa terceira pessoa plural correta, enquanto 'prepara' e singular, 'preparais' e forma vosotros e 'preparas' e tuteo informal - todas inadequadas para o contexto solicitado."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Na tarefa intermediaria, identifica-se el sobre (objeto direto singular masculino) e a las coordenadoras (indireto plural). A forma correta 'Se lo entrego' usa 'se' (substituto de 'les' antes de 'lo') + 'lo' (singular masculino). Opcoes erradas mantem 'les', invertem ordem ou usam numero plural incorreto para o envelope."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A, índice 0: Las voy a guardar conserva las, referente a unas carpetas, e emprega próclise ao verbo conjugado nessa perífrase. B, índice 1, introduz las entre a e guardar; C, índice 2, separa o clítico depois do infinitivo em vez de uni-lo; D, índice 3, altera o gênero para masculino. A mobilidade vale para essa construção e não é irrestrita entre verbos."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Gravitação e movimentos orbitais",
    "contentSha256": "337c6cced6b79bcf1f2e630e1ab3a7efaa44186a67cdcbae01ac8b3adb13153c",
    "draftMethod": "Autoria e cálculos Codex, conferidos com OpenStax e NASA; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/university-physics-volume-1/pages/13-1-newtons-law-of-universal-gravitation",
      "https://openstax.org/books/university-physics-volume-1/pages/13-2-gravitation-near-earths-surface",
      "https://openstax.org/books/university-physics-volume-1/pages/13-3-gravitational-potential-energy-and-total-energy",
      "https://openstax.org/books/university-physics-volume-1/pages/13-4-satellite-orbits-and-energy",
      "https://openstax.org/books/university-physics-volume-1/pages/13-5-keplers-laws-of-planetary-motion",
      "https://science.nasa.gov/solar-system/orbits-and-keplers-laws/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Cálculo F = 6,67e-11 × 4 × 9 / 0,6² = 6,67e-11 × 36 / 0,36 = 6,67e-9 N. A (6,67×10^-10) é 10x menor, possivelmente erro de G ou fator omitido. B (2,40×10^-9) usa denominador 1 em vez de 0,36. C (4,00×10^-9) divide por 0,6 sem elevar ao quadrado. D é o resultado correto."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Cálculo r = R + h = 2×10^6 m, v = √(8×10^12/2×10^6) = √(4×10^6) = 2000 m/s. T = 2πr/v = 2000π s. B usa h como raio indevidamente. C duplica indevidamente a velocidade para o raio correto. D usa apenas metade da circunferência no tempo de uma volta."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "Cálculo a = (rp+ra)/2 = 4×10^6 m, E = -μm/2a = -(8×10^12×50)/(2×4×10^6) = -5×10^7 J. Relação vp/va = ra/rp = 6×10^6/2×10^6 = 3 pela conservação do momento angular. A tem sinal incompatível com elipse ligada. C inverte a razão. D usa rp no lugar de a na energia e afirma velocidades iguais em elipse excêntrica."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Interações intermoleculares",
    "contentSha256": "07f037a5266ac0bb7863aece8cfc2dec7b13349bb6a9b4d00675d359886d0097",
    "draftMethod": "Autoria e conferência Codex em referências acadêmicas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/10-1-intermolecular-forces",
      "https://openstax.org/books/chemistry-2e/pages/10-2-properties-of-liquids",
      "https://openstax.org/books/chemistry-2e/pages/10-3-phase-transitions",
      "https://openstax.org/books/chemistry-2e/pages/11-1-the-dissolution-process",
      "https://openstax.org/books/chemistry-2e/pages/11-3-solubility",
      "https://openstax.org/books/organic-chemistry/pages/2-12-noncovalent-interactions-between-molecules"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "A alternativa correta (índice 0) identifica que o metanol possui dispersão e pode formar ligações de hidrogênio devido ao grupo O–H, enquanto o clorometano apresenta dispersão e dipolo–dipolo mas não possui o doador usual O–H/N–H/F–H. A alternativa 1 erradamente afirma que a ligação de hidrogênio elimina a dispersão no metanol, o que contradiz que a dispersão existe em todas as moléculas. A alternativa 2 ignora a polaridade das moléculas ao afirmar que ambas são apolares apenas por conter carbono. A alternativa 3 trata incorretamente qualquer átomo de hidrogênio como doador de ligação de hidrogênio. A resolução independente deste item confirma o índice 0 como correto."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "A comparação de temperaturas de ebulição realizadas a pressões diferentes (60 kPa para o líquido A e 100 kPa para o líquido B) não demonstra igualdade de interações moleculares, pois a temperatura de ebulição depende da pressão externa. A alternativa 0 nega incorretamente a dependência da pressão sobre o ponto de ebulição. A alternativa 1 transforma diferença experimental em identidade molecular sem fundamentação teórica. A alternativa 3 conclui inadequadamente que o líquido A não possui interações entre moléculas apenas pela estrutura da comparação. A resolução independente confirma o índice 2 como correto."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "No modelo de hidratação de Na+ por água, o lado parcialmente negativo (pares de elétrons no oxigênio) tende a se orientar para o cátion, formando interação íon–dipolo, mas a solubilidade depende do balanço entre a energia de rede do sal e a energia de hidratação. A alternativa 0 inverte a direção da atração esperada (os hidrogênios parcialmente positivos seriam repelidos pelo cátion, não atraídos). A alternativa 2 afirma incorretamente que a atração prova solubilidade ilimitada para qualquer sal. A alternativa 3 confunde hidratação com quebra obrigatória de ligações O–H da água. A resolução independente confirma o índice 1 como correto."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "DNA, RNA e síntese proteica",
    "contentSha256": "e79a4e9e7beaa35cf751b13dd13cbd672caeb7922bb8d721284be450bbd7c1fe",
    "draftMethod": "Autoria e conferência Codex com NHGRI e referências acadêmicas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid-DNA",
      "https://www.genome.gov/genetics-glossary/Ribonucleic-Acid-RNA",
      "https://www.genome.gov/genetics-glossary/Translation",
      "https://www.genome.gov/genetics-glossary/Genetic-Code",
      "https://openstax.org/books/biology-2e/pages/15-1-the-genetic-code",
      "https://openstax.org/books/biology-2e/pages/15-2-prokaryotic-transcription",
      "https://openstax.org/books/biology-2e/pages/15-3-eukaryotic-transcription",
      "https://openstax.org/books/biology-2e/pages/15-4-rna-processing-in-eukaryotes",
      "https://openstax.org/books/biology-2e/pages/15-5-ribosomes-and-protein-synthesis"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "C, índice2: a fita codificante5′-ATG GCT TAA-3′ corresponde ao RNA5′-AUG GCU UAA-3′ no mesmo sentido. A complementa indevidamente a codificante; B mantém timina; D inverte o RNA correto. Trata-se de gabarito de atividade autoral Kognos, sem caráter oficial das provas. Orientação e identidade da fita, não mera troca indiscriminada de bases, determinam a operação."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A, índice0: o molde3′-TAC CCG ATT-5′ é lido3′→5′ e dá RNA5′-AUG GGC UAA-3′. Por trinca, TAC→AUG, CCG→GGC e ATT→UAA; não há timina no RNA. A tabela fornecida traduz Met–Gly antes da parada. B apenas troca T por U no molde; C conta stop como aminoácido; D inverte a sequência e não aplica a tabela no quadro fixado."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "D, índice3: a substituição muda a terceira base do códon UAC, produzindo UAU; ambos especificam tirosina(Tyr) na tabela. A cadeia inicial mantém Met–Tyr–Glu e o RNA muda. A confunde substituição e inserção; B contraria a tabela; C confunde identidade de aminoácidos e de nucleotídeos. Não é possível concluir igualdade de toda regulação ou efeito funcional apenas dessa sequência."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Iluminismo e revoluções modernas",
    "contentSha256": "88b31cac1c3574b242f74cdc2b830d2781e37df0f7da711966b66d7fa8f5639d",
    "draftMethod": "Autoria e conferência Codex em arquivos e instituições históricas e acadêmicas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://plato.stanford.edu/entries/locke-political/",
      "https://plato.stanford.edu/entries/montesquieu/",
      "https://plato.stanford.edu/entries/rousseau/",
      "https://www.parliament.uk/about/living-heritage/evolutionofparliament/parliamentaryauthority/revolution/overview/billofrights/",
      "https://www.archives.gov/milestone-documents/declaration-of-independence",
      "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000697056",
      "https://history.state.gov/milestones/1784-1800/haitian-rev",
      "https://www.elections.interieur.gouv.fr/comprendre-elections/pourquoi-je-vote/limportance-du-droit-de-vote",
      "https://www.chateauversailles.fr/decouvrir/histoire/les-grandes-dates/serment-jeu-paume"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "A critica sobre distribuicao de funcoes e limites instituicionais corresponde diretamente à teoria montesquieuiana da separacao de poderes, enquanto as outras opcoes representam concepcoes opostas: poder hereditario ilimitado (opcao 0), eliminacao de regras e funcoes de julgamento (opcao 1), e garantia contra abuso de retorica popular (opcao 2) — nenhuma corresponde ao problema de distribuicao institucional posto."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A opcao correta reconhece a diferenca entre os tres marcos em torno de poder e direitos com respeto cronologico adequado (ingles precedendo os outros dois), enquanto as outras opcoes contem erros fatuais: a opcao 0 afirma abolicao imediata da escravidou e eleitorados universais identicos (fatoide), a opcao 2 inverte a causalidade cronologica (declaracao francesa produzindo documento ingles anterior), e a opcao 3 afirma que independencia restaurou poder absolutista da Coroa (contradiz o conceito de independencia)."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A opcao correta articula a disputa sobre direitos com a acao dos proprios sujeitos escravizados, evitando tanto a garantia automatica de igualdade quanto a negociacao de transformacoes historicas; as outras opcoes contem imprecisoes: a opcao 1 afirma que a linguagem de liberdade demonstra que a escravidencia nao existia no inicio da revolta haitiana (fato historicamente inveridico), a opcao 2 descreve independenca como presente sem conflito concedido por senhores coloniais (ignorando a violencia da revolucion), e a opcao 3 generaliza que exclusoes provam que nenhuma alteracao de poder ocorreu em nenhuma revolucion (absolutismo infundado)."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Vegetação e biomas do Brasil",
    "contentSha256": "7da208bbebd713e6a720881ea9fc6e34c1ae19d5b3e598675006252dbd964ea6",
    "draftMethod": "Autoria e conferência Codex com instituições ambientais e científicas brasileiras; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://geoftp.ibge.gov.br/informacoes_ambientais/estudos_ambientais/biomas/documentos/Sintese_Descricao_Biomas.pdf",
      "https://www.gov.br/mma/pt-br/assuntos/biodiversidade-e-biomas",
      "https://www.gov.br/insa/pt-br/semiarido-brasileiro",
      "https://www.webambiente.cnptia.embrapa.br/webambiente/wiki/doku.php?id=webambiente:ff_cerrado_campo_limpo",
      "https://www.gov.br/icmbio/pt-br/assuntos/unidade-de-conservacao/unidades-de-biomas/mata-atlantica/mata-atlantica",
      "https://www.gov.br/inpe/pt-br/area-conhecimento/unidade-sul/sensoriamento-remoto",
      "https://sema.rs.gov.br/camposdosul"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A alternativa correta reconhece que campo limpo é formação nativa do Cerrado, distinguindo bioma (unidade regional ampla) de formação vegetal (predomínio herbáceo/arbustivo); as outras inverterm a relação bioma/árvore, criam sétimo bioma continental inexistente na classificação brasileira ou negam a existência de campos nativos não desmatados."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A alternativa correta preserva características gerais dos biomas sem impor homogeneidade a todas as áreas, detalhando destaque de campos nativos no Pampa (RS), resposta da Caatinga à estação seca e mosaico do Pantanal sob pulso de inundação; as outras opções incorretamente generalizam exclusividade florestal, ausência de vida ou inundação permanente integral que contradizem a diversidade biomeânica."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "A alternativa correta interpreta mapas M e N como produtos complementares - delimitação regional e cobertura datada - permitindo estudar conversão dentro dos limites de M considerando escala e método; as outras estabelecem contraditória automática entre bioma e lavoura, conversão instantânea a novo bioma continental sem critério, ou prova de conservação de biodiversidade sem dados de espécies ou habitat."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Lógica, falácias e linguagem",
    "contentSha256": "a8c0d769e949888c0cec46ad7a080b1a7c9acaea5b4684a3cc26c4c241310226",
    "draftMethod": "Autoria e conferência Codex em referências acadêmicas de lógica; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/introduction-philosophy/pages/5-3-arguments",
      "https://openstax.org/books/introduction-philosophy/pages/5-4-types-of-inferences",
      "https://openstax.org/books/introduction-philosophy/pages/5-5-informal-fallacies",
      "https://iep.utm.edu/val-snd/",
      "https://plato.stanford.edu/entries/fallacies/",
      "https://plato.stanford.edu/entries/logic-propositional/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "O texto 'A entrada lateral foi interditada; por isso, a equipe deve orientar visitantes para a entrada principal' usa 'por isso' como marcador de conclusão; a conclusão é orientar visitantes para a entrada principal, e a razão oferecida é a interdição lateral. A opção 2 corresponde corretamente a essa atribuição, enquanto a opção 0 inverte funções e inventa não-existência, a opção 1 erradamente afirma ausência de argumento por falta de insultos, e a opção 3 trata 'por isso' como garantia de verdade absoluta, o que é um erro lógico."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Na forma P → Q; Q; logo P, um contramodelo que demonstra invalidade requer que ambas as premissas (P→Q e Q) sejam verdadeiras simultaneamente enquanto a conclusão P seja falsa. Isso ocorre quando P é falsa e Q é verdadeira, caso em que P→Q é verdadeira na interpretação material (falso → verdadeiro é verdadeiro), Q é verdadeiro e P é falso. A opção 1 descreve exatamente esse cenário; a opção 0 torna o condicional falso, a opção 2 tem conclusão verdadeira, e a opção 3 torna a premissa Q falsa."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "No exemplo de Lia e Rui, a rejeição baseada apenas na preferência de Rui por roupa alheia não refuta os dados e método apresentados por Lia; trata-se de ataque pessoal irrelevante (ad hominem). A opção 3 examina corretamente essa relação, afirmando que o traço pessoal citado não invalida os argumentos e o relatório ainda necessita avaliação por evidências. As outras opções incorretamente afirmam que a preferência refuta todos os dados (0), prova que Lia está certa em tudo (1), ou proíbem qualquer crítica relevante (2)."
      }
    ]
  }
] as const;
