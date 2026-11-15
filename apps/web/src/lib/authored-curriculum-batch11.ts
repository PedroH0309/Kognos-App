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
  }
] as const;
