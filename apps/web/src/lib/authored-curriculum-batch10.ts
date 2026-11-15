import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch10:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Potências, radicais e notação científica",
    "objective": "Aplicar propriedades de potências com hipóteses explícitas, simplificar radicais reais e operar em notação científica, verificando domínio, sinal, normalização e unidades.",
    "prerequisites": [
      "Operações com inteiros e frações",
      "Fatoração numérica",
      "Ordem das operações e valor posicional decimal"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Base, expoente, sinal e condições de validade",
        "explanation": "Para expoente inteiro positivo n, a potência a^n representa um produto de n fatores iguais a a, não a multiplicação de a por n. Parênteses delimitam a base: (-5)^2 = 25, enquanto -5^2 = -(5^2) = -25 pela ordem das operações. Com base não nula e expoentes inteiros, valem a^m · a^n = a^(m+n), a^m/a^n = a^(m-n), (a^m)^n = a^(mn), (ab)^n = a^n b^n e (a/b)^n = a^n/b^n, com b também não nulo na divisão. Ao ampliar essas regras para outros expoentes, é preciso conferir domínio; não são licenças para usar qualquer base e expoente real sem restrições. Para a diferente de zero, a^0 = 1 e a^(-n) = 1/a^n. Expoente negativo indica inverso, não resultado necessariamente negativo. Zero elevado a inteiro positivo vale zero; zero elevado a expoente negativo exige divisão por zero e não está definido. Nesta aula de operações elementares, não se atribui valor a 0^0. Em um produto de bases diferentes com o mesmo expoente inteiro, pode-se reunir as bases: 2^3 · 7^3 = (2·7)^3. Isso difere da regra de somar expoentes, que exige a mesma base. Uma potência não se distribui automaticamente sobre soma: (2+4)^2 = 36, enquanto 2^2+4^2 = 20. Antes de simplificar, identifique a estrutura da operação; depois verifique sinal e restrições. Cancelamentos algébricos também não autorizam recuperar valores excluídos pelo denominador original.",
        "steps": [
          "Marque a base completa, incluindo parênteses e sinais.",
          "Identifique produto, quociente ou potência de potência.",
          "Confira denominadores e restrições para expoentes negativos ou zero.",
          "Aplique a propriedade adequada e verifique o resultado por outra forma."
        ],
        "example": "Cálculo autoral: 5^(-2) · 5^4 = 5^2 = 25, pois -2+4 = 2. Também é possível escrever (1/25)·625 = 25. As duas formas confirmam que o expoente negativo inicial indica inverso e não sinal negativo do produto. Nenhuma divisão por zero ocorre, pois a base é 5.",
        "pitfall": "Somar bases e expoentes ao mesmo tempo, confundir -a^2 com (-a)^2 ou usar a^0 = 1 sem excluir a = 0."
      },
      {
        "level": "intermediate",
        "title": "Raízes reais, equivalências e simplificação",
        "explanation": "No radical de índice n, o número ou expressão sob o sinal é o radicando; o sinal de raiz não se chama radicando. Para índice par, a raiz principal real exige radicando não negativo e tem resultado não negativo. Por isso, √(a^2) = |a| para todo a real: √((-7)^2) = 7, e não -7. Isso não contradiz que a equação y^2 = 49 tenha duas soluções, 7 e -7; o símbolo √49 designa apenas a raiz principal 7. Raízes de índice ímpar admitem radicandos negativos, como a raiz cúbica de -125 igual a -5. Para raízes quadradas reais, √(ab) = √a · √b com a e b não negativos; no quociente exige-se ainda b positivo. Não aplique essas decomposições a fatores negativos como se suas raízes reais existissem. Para simplificar √108, fatorar 108 = 36·3 permite obter 6√3. Termos com o mesmo radical podem ser reduzidos pela soma dos coeficientes; a expressão √2+√5 é uma soma válida, mas não se reduz somando os radicandos. Em 1/√5, multiplicar numerador e denominador por √5 produz √5/5 sem alterar o valor. Um denominador binomial pode usar conjugado, desde que os fatores e denominadores envolvidos sejam válidos. Para a positivo, a^(m/n) corresponde à raiz n-ésima de a^m, com n inteiro positivo, e expoentes negativos exigem inverso. Bases negativas com expoentes racionais pedem tratamento do domínio e da fração; as propriedades para bases positivas não devem ser estendidas sem cuidado a toda expressão.",
        "steps": [
          "Identifique índice, radicando e domínio real.",
          "Extraia fatores que sejam potências perfeitas do índice.",
          "Reduza termos semelhantes sem somar radicandos diferentes.",
          "Confira a equivalência, os sinais e denominadores excluídos."
        ],
        "example": "Exemplo autoral de domínio: para t = -6, a expressão √(t^2) resulta em √36 = 6 = |t|. Já a equação z^2 = 36 admite z = 6 e z = -6. Comparar expressão e equação esclarece por que não se coloca automaticamente um sinal ± diante do valor de uma raiz principal.",
        "pitfall": "Confundir sinal radical e radicando, afirmar √(a^2) = a para qualquer real ou dizer que uma soma de radicais distintos é proibida."
      },
      {
        "level": "advanced",
        "title": "Notação científica, operações e unidades",
        "explanation": "Para um número real não nulo, a notação científica normalizada tem forma a × 10^n, com 1 ≤ |a| < 10 e n inteiro. Se o número é negativo, o coeficiente também é negativo; a condição usa seu módulo. Zero pode ser escrito como zero, mas não satisfaz essa forma normalizada com coeficiente de módulo pelo menos 1. Ao converter, escolha o coeficiente e verifique reconstruindo o valor original, em vez de decorar apenas um movimento da vírgula. Por exemplo, 0,000072 = 7,2 × 10^-5 e -930000 = -9,3 × 10^5. Na multiplicação, multiplique coeficientes e some expoentes; na divisão, divida coeficientes e subtraia expoentes, exigindo divisor não nulo. Normalize novamente se o coeficiente sair da faixa. Para somar ou subtrair, reescreva com a mesma potência de dez antes de operar os coeficientes: não some expoentes como em um produto. Uma representação como 42 × 10^3 pode ser numericamente correta, embora não esteja normalizada; representações equivalentes não devem ser chamadas simplesmente de números diferentes. Em problemas de grandezas, acompanhe as unidades: dividir massa por massa de cada unidade pode fornecer uma contagem idealizada. Conversões precisam corresponder à dimensão; elevar uma medida de comprimento ao quadrado também eleva seu fator de conversão. Notação científica não aumenta a precisão de uma medida, e muitos algarismos escritos não demonstram maior exatidão. Diferencie dados exatos de modelo e medidas que exigem arredondamento, deixando as hipóteses explícitas.",
        "steps": [
          "Escreva cada valor com unidade e potência de dez.",
          "Escolha a operação exigida pela relação entre grandezas.",
          "Opere coeficientes e expoentes segundo essa operação.",
          "Normalize o coeficiente e confira unidade, escala e precisão."
        ],
        "example": "Cálculo autoral: (4,5 × 10^6) + (2,0 × 10^5) = (4,5 + 0,20) × 10^6 = 4,7 × 10^6. Primeiro igualam-se as potências; o expoente 6 não é somado a 5. Reconstruindo os valores, 4500000 + 200000 = 4700000, o que confirma a escala do resultado.",
        "pitfall": "Somar expoentes em uma soma, esquecer de normalizar ou tratar duas escritas equivalentes como valores diferentes apenas porque uma não está normalizada."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Questão autoral: calcule [(-2)^3 · 2^5]/2^4, respeitando os parênteses e a ordem das operações. Qual é o valor?",
        "hint": "Calcule o sinal de (-2)^3 e compare as potências de 2 do numerador e do denominador.",
        "options": [
          "16",
          "-64",
          "-16",
          "-2"
        ],
        "correctIndex": 2,
        "solution": "C: (-2)^3 = -8, 2^5 = 32 e 2^4 = 16; assim, (-8·32)/16 = -16. Também se pode escrever -2^(3+5-4) = -2^4 = -16. A perde o sinal negativo; B não coincide com -256/16; D também não satisfaz a divisão. Não é necessário inventar uma origem única para os dois últimos erros para verificar que são incorretos."
      },
      {
        "level": "intermediate",
        "prompt": "Questão autoral no conjunto dos reais: simplifique √75 - √12 + √27, usando as raízes quadradas principais. Qual alternativa é equivalente?",
        "hint": "Fatore cada radicando em um quadrado perfeito vezes 3 e depois opere os coeficientes.",
        "options": [
          "6√3",
          "√90",
          "10√3",
          "6√6"
        ],
        "correctIndex": 0,
        "solution": "A: √75 = 5√3, √12 = 2√3 e √27 = 3√3. Portanto, (5-2+3)√3 = 6√3. B soma e subtrai radicandos como se a raiz se distribuísse sobre a operação; 75-12+27 = 90, mas a equivalência não vale. C troca a subtração por adição dos coeficientes. D modifica o radical sem uma operação equivalente. Todos os radicandos originais são positivos."
      },
      {
        "level": "advanced",
        "prompt": "Modelo autoral idealizado: uma amostra de massa 6,4 × 10^-3 g contém unidades idênticas de massa 8,0 × 10^-9 g cada, sem outros componentes. Trate os dados como exatos no modelo. Qual contagem está escrita em notação científica normalizada?",
        "hint": "Divida a massa total pela massa de cada unidade, confira cancelamento de g e normalize o coeficiente.",
        "options": [
          "0,8 × 10^6 unidades",
          "8,0 × 10^-6 unidades",
          "8,0 × 10^12 unidades",
          "8,0 × 10^5 unidades"
        ],
        "correctIndex": 3,
        "solution": "D: N = (6,4/8,0) × 10^[-3-(-9)] = 0,8 × 10^6 = 8,0 × 10^5 unidades. A tem o mesmo valor, mas não está normalizada, pois o coeficiente é menor que 1; o enunciado exige a forma normalizada. B e C têm escalas diferentes da razão calculada. A unidade g cancela; não se trata de descobrir a massa de um material real nem de inferir precisão experimental."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Ortografia, acentuação e pontuação",
    "objective": "Revisar grafias em contexto, aplicar critérios de acentuação do português brasileiro e justificar escolhas de pontuação por relações sintáticas e efeitos de sentido.",
    "prerequisites": [
      "Sílaba tônica e divisão silábica",
      "Classes de palavras e relações básicas entre sujeito, verbo e complemento",
      "Leitura de períodos em contexto"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Grafia, contexto e consulta orientada",
        "explanation": "Ortografia reúne convenções de escrita, e sua aprendizagem exige relacionar regularidades, história e usos registrados. Não existe correspondência de uma letra para cada som: em português, um mesmo som pode ter grafias diferentes e uma letra pode representar sons distintos conforme o contexto. Para revisar, identifique a palavra e sua função, consulte um vocabulário atualizado quando necessário e não substitua automaticamente a grafia pela pronúncia de uma região. A norma ortográfica não torna uma variedade oral inferior nem permite julgar a capacidade de uma pessoa. Muitas dúvidas são resolvidas pela relação de sentido: mau opõe-se a bom, enquanto mal pode opor-se a bem; mas articula contraste, e mais pode indicar quantidade ou intensidade. Essas substituições são pistas de revisão, não explicam todos os usos possíveis de cada forma. Também é preciso distinguir por que, por quê, porque e porquê. Por que pode introduzir uma pergunta direta ou indireta e também corresponder a pelo qual e suas flexões. Por quê é usado com o quê tônico no final do enunciado interrogativo, como em uma pergunta que termina pedindo a razão. Porque pode introduzir causa ou justificativa. Porquê é substantivo, equivalente a motivo, e admite plural. A escolha não depende apenas da presença do sinal de interrogação, pois perguntas indiretas não precisam dele. Hífen também exige examinar o processo de formação. Em anti-inflamatório, a repetição da vogal na fronteira com o prefixo justifica o hífen; em antirrugas, não há hífen e duplica-se o r. Casos específicos impedem transformar essa observação em regra universal: consulte a formação e o registro atual. Na revisão de texto, separe dúvida lexical, flexão, acento e pontuação: problemas diferentes podem exigir consultas diferentes.",
        "steps": [
          "Localize a palavra e a relação de sentido no período.",
          "Teste substituições pertinentes sem tomá-las como regras universais.",
          "Diferencie pergunta direta, indireta, causa e substantivo.",
          "Consulte registro atualizado e confira a frase depois da correção."
        ],
        "example": "Trecho autoral: “O equipamento estava em mau estado e funcionava mal.” Na primeira ocorrência, a oposição pertinente é bom estado; na segunda, funcionava bem. A escolha acompanha a função no contexto. Isso não autoriza trocar toda ocorrência de mal por mau nem avaliar a pessoa que produziu uma grafia diferente.",
        "pitfall": "Escolher grafia apenas pelo som ou afirmar que por que só aparece quando há ponto de interrogação."
      },
      {
        "level": "intermediate",
        "title": "Acento gráfico, tonicidade e exceções",
        "explanation": "Sílaba tônica é a de maior proeminência na palavra; acento gráfico é uma marca da escrita. Uma palavra pode ter sílaba tônica sem receber acento gráfico. Classificam-se como oxítonas as de última sílaba tônica, paroxítonas as de penúltima e proparoxítonas as de antepenúltima. Todas as proparoxítonas recebem acento. Entre as regras de oxítonas estão terminações a, e e o, seguidas ou não de s, e em e ens, conforme os casos previstos no Acordo. Paroxítonas como fácil, tórax e álbum têm terminações que justificam acento; não se resolve toda a acentuação apenas dizendo que a palavra é paroxítona. Ditongos abertos ei e oi tônicos de paroxítonas não recebem o acento que se usava em grafias antigas, como em ideia e jiboia; isso não retira o acento de herói, oxítona. Em hiatos, i e u tônicos podem receber acento sob condições específicas, como em saída e baú; não é correto acentuar qualquer encontro de vogais. Rainha não recebe esse acento, e o contexto de ditongo anterior nas paroxítonas também exige atenção. Distinções preservadas incluem pôde, pretérito, em oposição a pode, presente, e pôr, verbo, em oposição a por, preposição. Têm e vêm distinguem o plural das formas tem e vem; nem todo acento pode ser explicado por uma única regra de terminação. O sinal grave em uma construção com crase não indica, por si só, sílaba tônica e exige análise da construção. Para revisar uma forma, combine tonicidade, terminação, encontros vocálicos e casos particulares, recorrendo a fonte atualizada em vez de aplicar uma lista sem condições.",
        "steps": [
          "Identifique a sílaba tônica antes de procurar a marca gráfica.",
          "Confira terminação e grupo de acentuação.",
          "Analise hiato, ditongo e casos diferenciais pertinentes.",
          "Verifique a forma atual sem generalizar uma mudança a todas as palavras."
        ],
        "example": "Comparação autoral: “Ontem a equipe pôde testar; hoje ela pode revisar.” O circunflexo diferencia o pretérito pôde do presente pode, e não aparece porque a frase é passada como um todo. Alterar o tempo do verbo exige rever a forma correspondente; a identificação depende do contexto verbal e da regra específica.",
        "pitfall": "Confundir sílaba tônica e acento, retirar o acento de toda palavra com ditongo aberto ou marcar qualquer sequência de vogais como hiato acentuado."
      },
      {
        "level": "advanced",
        "title": "Pontuação, estrutura e escolhas de sentido",
        "explanation": "Pontuação organiza relações sintáticas e discursivas; não é uma transcrição automática de pausas para respirar. Na ordem direta, não se separa sujeito e verbo por uma vírgula apenas porque o sujeito é longo. Uma expressão intercalada pode aparecer entre eles com sinais que a isolem; nesse caso, as vírgulas delimitam a intercalação, não uma fronteira obrigatória entre sujeito e predicado. Vocativos, apostos explicativos e elementos deslocados exigem análise da função. Termos coordenados podem ser separados, enquanto a relação entre verbo e complemento não admite uma vírgula arbitrária. Nas orações adjetivas, a pontuação pode distinguir restrição de explicação: sem vírgulas, a oração pode delimitar um subconjunto do referente; isolada, apresenta uma informação adicional sobre o referente já identificado. A interpretação precisa do contexto e não permite descobrir fatos do mundo apenas pelo sinal. A vírgula antes de e não é sempre proibida nem sempre obrigatória: examine estrutura, sujeitos, intercalações e relações de sentido. Dois-pontos podem introduzir explicação, enumeração ou fala; ponto e vírgula pode organizar segmentos coordenados e listas com vírgulas internas. O ponto final encerra uma unidade, mas decidir entre períodos curtos e longos envolve clareza e encadeamento. Aspas podem marcar citação ou distanciamento, e travessões podem introduzir fala ou intercalação conforme a construção. Não se atribui fala real a uma pessoa sem fonte apenas colocando aspas. Ao revisar, compare alternativas e explicite o que muda no agrupamento da informação. Uma escolha admissível em determinado gênero não é garantia de adequação em qualquer texto.",
        "steps": [
          "Identifique sujeito, verbo, complementos e termos intercalados.",
          "Distinga restrição, explicação, enumeração e chamamento.",
          "Compare o sentido produzido por duas pontuações possíveis.",
          "Confira clareza, contexto e gênero sem aplicar regra absoluta de pausa."
        ],
        "example": "Trecho autoral: “Lia, confira a legenda.” Lia é vocativo: a frase chama a pessoa a quem se dirige a orientação. Em “Lia confere a legenda”, o nome funciona como sujeito do verbo e não pede uma vírgula só por estar no início. A diferença decorre da relação sintática e comunicativa, e não da contagem de palavras.",
        "pitfall": "Inserir vírgula por cansaço, proibir toda vírgula antes de e ou acreditar que sinais isolados comprovem a verdade de uma informação."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Trecho autoral para revisão: “Não entendi ___ a sessão terminou. A organização explicou que foi ___ faltou energia. Ainda quero saber o ___ da falha.” Qual sequência completa adequadamente as lacunas?",
        "hint": "Identifique pergunta indireta, relação causal e a palavra usada como substantivo depois do artigo.",
        "options": [
          "porque / por que / por quê",
          "por quê / porquê / porque",
          "por que / porque / porquê",
          "porquê / por quê / por que"
        ],
        "correctIndex": 2,
        "solution": "C: por que introduz a pergunta indireta equivalente a por qual motivo; porque apresenta a causa; porquê é substantivo equivalente a motivo e vem determinado pelo artigo o. A inverte os dois primeiros usos e trata o substantivo como expressão separada; B e D também confundem função substantiva, pergunta indireta e causa. Não há ponto de interrogação na primeira frase, mas isso não muda sua relação de pergunta indireta."
      },
      {
        "level": "intermediate",
        "prompt": "Questão autoral: qual conjunto registra as quatro formas adequadas à ortografia brasileira vigente, considerando ideia como substantivo, herói como substantivo, saúde como substantivo e têm como terceira pessoa do plural de ter?",
        "hint": "Confira paroxítona com ditongo aberto, oxítona, hiato e a distinção entre singular e plural de ter.",
        "options": [
          "idéia / herói / saúde / têm",
          "ideia / herói / saúde / têm",
          "ideia / heroi / saúde / têm",
          "ideia / herói / saude / tem"
        ],
        "correctIndex": 1,
        "solution": "B reúne as formas corretas. Ideia não tem o antigo acento do ditongo aberto ei na paroxítona; herói é oxítona e conserva o acento; saúde tem u tônico em hiato na condição pertinente; têm marca o plural solicitado. A mantém grafia antiga em idéia, C retira indevidamente o acento de herói e D elimina os de saúde e do plural têm. O contexto especifica o valor de cada palavra."
      },
      {
        "level": "advanced",
        "prompt": "Compare dois enunciados autorais: I. “Os inscritos que entregaram o formulário receberam confirmação.” II. “Os inscritos, que entregaram o formulário, receberam confirmação.” Na leitura padrão, qual análise distingue restrição e explicação sem inventar dados sobre inscrições reais?",
        "hint": "Observe se a oração seleciona um subconjunto ou acrescenta informação ao referente apresentado no contexto.",
        "options": [
          "I seleciona os inscritos caracterizados pela entrega; II apresenta a entrega como informação explicativa sobre o grupo referido, sem que a pontuação comprove fatos externos.",
          "I e II provam obrigatoriamente que nenhuma pessoa entregou o formulário, independentemente do texto.",
          "As vírgulas de II são exigidas apenas porque todo sujeito com mais de duas palavras deve ser separado do verbo.",
          "A oração de I é um vocativo, pois qualquer expressão com que chama diretamente o leitor."
        ],
        "correctIndex": 0,
        "solution": "A distingue o valor restritivo de I e o explicativo de II na leitura proposta. Em I, a entrega delimita os inscritos dos quais se faz a afirmação; em II, a oração isolada comenta o grupo referido. B contradiz o texto e inventa fatos; C usa uma regra inexistente de tamanho do sujeito; D confunde oração adjetiva e chamamento. A análise linguística não verifica um cadastro real."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Pré-modernismo",
    "objective": "Compreender o Pré-modernismo como recorte heterogêneo da literatura brasileira, relacionar autores e obras a problemas históricos e analisar procedimentos de linguagem sem inventar unidade estética ou autoria de trechos.",
    "prerequisites": [
      "Narrador, personagem e voz poética",
      "Realismo, Naturalismo, Parnasianismo e Simbolismo em linhas gerais",
      "Primeira República e desigualdades sociais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Recorte histórico e diversidade estética",
        "explanation": "Pré-modernismo é uma designação crítica usada para estudar produções brasileiras do início do século XX que não formam uma escola homogênea com programa único. A delimitação didática frequente entre 1902 e 1922 aproxima obras distintas e situa continuidades e tensões anteriores ao Modernismo de 1922; essas datas são marcos de estudo, não uma ordem que todos os escritores tenham seguido ou uma mudança instantânea em toda a literatura. No período convivem recursos de tradições diversas, além de diferentes formas de representar a vida brasileira. A atenção a conflitos sociais e a sujeitos afastados da imagem oficial de progresso não exige que todos os textos usem linguagem coloquial, verso livre ou o mesmo projeto político. Também não se deve reduzir o recorte a regionalismo rural: cidades, instituições, relações raciais e experiências de exclusão integram questões relevantes de leitura. Uma inovação temática pode coexistir com forma tradicional; perceber essa coexistência é mais produtivo do que procurar uma lista obrigatória de características em cada página. O prefixo pré não torna cada obra um ensaio imperfeito para uma literatura futura: os textos têm problemas e soluções próprios. Para estudar uma obra, articule contexto, gênero, ponto de vista e procedimentos de linguagem. Um assunto social, sozinho, não comprova data, autoria ou pertencimento estético. Ao construir uma linha do tempo, diferencie publicação em periódico, primeira edição em livro e reedição, pois confundi-las produz datas aparentemente contraditórias.",
        "steps": [
          "Situe o recorte como ferramenta crítica, não programa assinado por todos.",
          "Identifique continuidades e mudanças sem exigir uniformidade.",
          "Relacione contexto e recursos efetivamente presentes no texto.",
          "Confira o tipo de publicação antes de comparar datas."
        ],
        "example": "Comparação autoral de situações de leitura: um estudo descreve prosa de conflito urbano; outro examina poesia de forma regular e vocabulário pouco habitual. Ambos podem ser discutidos em um recorte histórico amplo sem que isso prove estilo idêntico. O ponto de comparação precisa ser declarado, em vez de transformar proximidade cronológica em identidade estética.",
        "pitfall": "Tratar o Pré-modernismo como escola uniforme, impor verso livre a todos ou dizer que cada obra existe apenas como preparação para 1922."
      },
      {
        "level": "intermediate",
        "title": "Autores, obras e problemas de representação",
        "explanation": "Em Os sertões, publicado em 1902, Euclides da Cunha constrói uma interpretação da campanha de Canudos, articulando descrição, reflexão e narrativa do conflito. A obra não é um relatório neutro sem elaboração literária: sua organização e sua linguagem participam da representação do sertão e da violência. Interpretar criticamente uma obra também exige situar categorias científicas e sociais de seu tempo, sem transformar determinismos históricos em explicações científicas atuais. Em Lima Barreto, a análise de instituições, preconceitos e projetos de país pode ser examinada por meio de personagens, narrador e ironia. Triste fim de Policarpo Quaresma circulou em folhetins em 1911 e foi editado em livro em 1915; a trajetória de idealização patriótica e confronto com a realidade institucional não equivale a uma celebração simples do poder. Monteiro Lobato publicou Urupês em 1918. Sua representação do mundo rural e a circulação de seus textos permitem discutir imagens do país, mas não autorizam tomar uma personagem como retrato natural de toda população. Estereótipos e posições de um autor precisam ser analisados criticamente, e não naturalizados como verdade sobre grupos sociais. Augusto dos Anjos publicou Eu em 1912. A presença de vocabulário científico, imagens de decomposição e questões existenciais pode coexistir com formas métricas e estróficas tradicionais. Essa combinação mostra por que usar termos incomuns não significa abandonar toda construção formal anterior. Os autores citados não esgotam o período, nem suas obras são intercambiáveis; compare problemas específicos e sustente a análise com o texto.",
        "steps": [
          "Associe cada obra ao autor e ao contexto pertinente.",
          "Diferencie interpretação literária e relato pretensamente neutro.",
          "Examine ponto de vista, ironia, vocabulário e construção formal.",
          "Contextualize categorias históricas e questione estereótipos."
        ],
        "example": "Exemplo autoral de comparação documental: uma ficha registra Triste fim de Policarpo Quaresma no Jornal do Commercio em 1911, enquanto outra registra edição em livro de 1915. Não é necessário escolher uma como erro: são suportes e momentos diferentes. A comparação esclarece circulação da obra, sem inventar uma nova data de escrita ou atribuir um trecho fictício a Lima Barreto.",
        "pitfall": "Confundir 1911 e 1915 como se fossem o mesmo tipo de publicação, igualar narrador e autor ou naturalizar uma representação como verdade de todo grupo."
      },
      {
        "level": "advanced",
        "title": "Leitura comparativa com evidências e limites",
        "explanation": "Uma análise avançada precisa mostrar como um texto produz efeitos, em vez de substituir leitura por nomes de períodos. Comece identificando quem fala, o que é observado e qual tensão organiza o trecho. Uma ironia pode surgir da distância entre uma afirmação aparentemente elogiosa e os acontecimentos narrados; para sustentá-la, aponte as pistas concretas. Isso não permite concluir que toda fala de uma personagem expresse diretamente a opinião biográfica do autor. Em uma comparação, escolha eixos como projeto de país, conflito social, espaço, focalização ou combinação de léxico e forma. Preserve diferenças: denúncia social não exige sempre o mesmo narrador, e uma estrutura regular não elimina toda inovação temática. Ao aproximar Pré-modernismo e Modernismo, examine continuidades e rupturas específicas, sem usar a Semana de 1922 como certificado automático de tudo o que veio antes ou depois. Data é uma informação relevante, mas não substitui descrição de procedimentos. Trechos autorais feitos para exercício podem demonstrar um recurso, porém não servem como citação documental de um escritor histórico. Da mesma maneira, uma referência a ciência num poema pode operar como imagem, contraste ou questão filosófica, e não como demonstração experimental. Evite diagnosticar a pessoa autora a partir da voz poética ou generalizar uma experiência literária para uma população. Uma interpretação deve ser compatível com o conjunto de pistas e reconhecer o que permanece indeterminado. Concluir menos, com evidência melhor, é preferível a inventar intenção, fato histórico ou autoria para preencher uma classificação.",
        "steps": [
          "Delimite o eixo de comparação e a voz enunciadora.",
          "Aponte recursos e contrastes concretos do trecho.",
          "Relacione contexto e forma sem reduzir um ao outro.",
          "Separe evidência textual, hipótese interpretativa e informação externa verificável."
        ],
        "example": "Microtexto inteiramente autoral: “No catálogo da cidade, a ponte parecia concluída; na margem, a água ainda interrompia a travessia.” O contraste entre representação oficial e condição observada sustenta uma leitura crítica do anúncio. Isso não transforma o microtexto em fragmento de Os sertões nem prova que pertença historicamente ao Pré-modernismo: ele foi criado apenas para estudar o procedimento.",
        "pitfall": "Atribuir um texto criado para exercício a escritor real, classificar apenas pelo tema ou interpretar imagem científica como prova de laboratório."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma comparação autoral de estudos literários, uma obra combina forma tradicional e imagens pouco usuais; outra explora crítica de instituições por meio da prosa. Um comentário conclui que elas não podem integrar o recorte pré-modernista porque não possuem estilo idêntico. Qual avaliação é adequada?",
        "hint": "Diferencie recorte crítico heterogêneo e escola literária com programa estético uniforme.",
        "options": [
          "O comentário está correto porque todo texto pré-modernista precisa usar verso livre e a mesma voz narrativa.",
          "O comentário impõe uma unidade inexistente: o recorte pode aproximar produções diversas, cuja classificação exige contexto e análise específica.",
          "As duas descrições bastam para provar que os textos foram escritos pela mesma pessoa em 1922.",
          "Qualquer tema social demonstra automaticamente que uma obra foi publicada exatamente em 1902."
        ],
        "correctIndex": 1,
        "solution": "B reconhece heterogeneidade sem transformar descrições genéricas em prova suficiente de pertencimento. A inventa forma obrigatória; C deduz autoria e data sem evidência; D trata tema como calendário. É necessário situar as obras e analisar seus procedimentos, e não exigir que toda produção do recorte tenha um mesmo estilo."
      },
      {
        "level": "intermediate",
        "prompt": "Trecho inteiramente autoral, sem atribuição a escritor histórico: “O balcão anunciava atendimento igual. Quando o trabalhador mostrou o formulário, o funcionário perguntou primeiro quem o recomendara.” Qual interpretação se apoia no contraste apresentado?",
        "hint": "Relacione a promessa de igualdade ao critério de acesso efetivamente introduzido no atendimento descrito.",
        "options": [
          "O texto demonstra que a recomendação pessoal nunca interfere na situação narrada.",
          "O trecho é uma citação documental comprovada de Lima Barreto apenas porque menciona um funcionário.",
          "A presença de um formulário prova que não há conflito entre promessa pública e prática institucional.",
          "O contraste permite uma leitura crítica da distância entre atendimento anunciado como igual e uma prática que solicita recomendação pessoal."
        ],
        "correctIndex": 3,
        "solution": "D articula anúncio e prática, sustentando a leitura crítica com duas pistas explícitas. A ignora a pergunta sobre recomendação. B inventa autoria documental que o enunciado nega. C elimina o conflito sem fundamento. A interpretação é compatível com o trecho, mas não demonstra a biografia de um escritor, uma data histórica ou a totalidade das instituições de um país."
      },
      {
        "level": "advanced",
        "prompt": "Duas notas autorais de leitura descrevem: I. poesia com organização formal regular e vocabulário científico; II. narrativa que problematiza uma imagem idealizada do país. Qual conclusão evita usar essas descrições como rótulos automáticos de autoria ou escola?",
        "hint": "Reflita sobre coexistência de recursos, eixos comparativos e informações que ainda faltam para uma classificação histórica.",
        "options": [
          "Os dois textos precisam ser da mesma escola e do mesmo autor, porque qualquer inovação elimina diferenças.",
          "A nota I prova que toda poesia científica é um relatório experimental sem construção estética.",
          "As notas permitem comparar relações entre linguagem e representação, mas forma regular não exclui inovação, e faltam dados para atribuir autoria e classificação histórica precisas.",
          "A nota II comprova uma data exata de publicação, pois criticar uma imagem do país só foi possível em um único ano."
        ],
        "correctIndex": 2,
        "solution": "C preserva o que a descrição permite analisar e o que exige mais evidência. Forma regular e inovação podem coexistir, e o tema da nação não fornece sozinho autoria ou data. A transforma aproximação em identidade; B confunde uso literário de léxico e relatório experimental; D inventa exclusividade temporal. A comparação deve explicitar seu eixo e apoiar inferências em informações verificáveis."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Gêneros e critérios específicos por banca",
    "objective": "Interpretar a situação de escrita, distinguir gênero e tipo textual e planejar revisões segundo documentos e comandos específicos de cada processo seletivo, sem universalizar um modelo ou prometer nota.",
    "prerequisites": [
      "Tese, argumento e progressão textual",
      "Coerência e coesão",
      "Leitura de comandos e textos de apoio"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Situação de comunicação antes da fórmula",
        "explanation": "Uma proposta de redação estabelece uma situação de escrita: assunto e recorte temático, finalidade, interlocutor, papel de quem escreve, gênero e condições de realização. Ler esses elementos antes de escolher uma estrutura evita produzir um texto correto em abstrato e inadequado ao comando. Gênero textual relaciona práticas de comunicação e convenções de composição; tipo ou sequência textual descreve formas de organização, como argumentar, narrar, descrever ou explicar. Uma carta pode argumentar e narrar acontecimentos, e a presença de um parágrafo narrativo não transforma automaticamente qualquer texto em conto. Na dissertação argumentativa, desenvolver e sustentar um ponto de vista é central; em outros gêneros, o modo de dirigir-se ao leitor e organizar o texto precisa corresponder à situação indicada. Não basta acrescentar saudação a uma dissertação para cumprir toda proposta de carta. Também não há quantidade universal de parágrafos, lista de conectivos obrigatória ou repertório que assegure nota máxima em todos os processos seletivos. Diferencie uma convenção do gênero e uma instrução particular da prova: marcas de identificação, escolha de opção e uso de pseudônimo dependem das regras explícitas, e não devem ser inventadas. Nunca acrescente nome real ou assinatura apenas porque uma atividade menciona carta. Ao planejar, registre o que é exigido, o que é permitido e o que falta conferir. Um tema semelhante em duas provas não demonstra que ambas peçam o mesmo texto ou usem a mesma grade de correção.",
        "steps": [
          "Identifique finalidade, leitor, papel e recorte temático.",
          "Separe gênero solicitado e sequências que podem compô-lo.",
          "Confira restrições da folha e instruções de identificação.",
          "Planeje a composição a partir do comando, sem fórmula universal."
        ],
        "example": "Proposta inteiramente autoral de treino: produzir um artigo de opinião para um jornal escolar sobre ampliação dos espaços de leitura. O planejamento precisa indicar posição, razões e relação com o público da escola. Um relato de visita à biblioteca pode integrar um argumento, mas narrar a visita sem discutir a questão não atende automaticamente à finalidade do artigo.",
        "pitfall": "Copiar um modelo de dissertação para qualquer gênero, acrescentar assinatura real por conta própria ou tratar o número de parágrafos como regra de toda banca."
      },
      {
        "level": "intermediate",
        "title": "Comparar documentos com edição e escopo explícitos",
        "explanation": "Critérios precisam ser vinculados ao processo seletivo e à edição consultada; o nome da organizadora não identifica sozinho todas as exigências de todos os exames que ela realiza. Como comparação documental datada, a orientação institucional do Enem 2026 pede texto dissertativo-argumentativo em modalidade escrita formal, defesa de ponto de vista e proposta de intervenção social respeitosa dos direitos humanos. Essa exigência de intervenção não deve ser transferida automaticamente para toda redação. O Guia de Provas FUVEST 2027 admite proposta com mais de um gênero e determina optar por um na folha; informa nota zero se a escolha não for feita. Entre seus eixos estão compreensão do tema e uso da coletânea com autoria, adequação à modalidade escolhida, progressão/coerência/coesão e convenções de escrita. Como caso de comparação de uma edição anterior, o Manual do Candidato Unesp 2026, organizado pela Vunesp, apresenta dissertação argumentativa e critérios de tema, estrutura/coerência, língua e coesão, além de dizer que a conclusão não precisa ter proposta de intervenção. Esse documento de 2026 não substitui o manual de outra edição nem se transforma em regra eterna de toda prova Vunesp. A utilidade da comparação é aprender a localizar diferenças que mudam o projeto do texto. Antes de uma prova, confira o documento vigente e o comando efetivo, incluindo eventuais retificações. Se uma informação não foi confirmada, não invente peso, limite de linhas, gênero obrigatório ou consequência de anulação; registre a dúvida e consulte a fonte institucional.",
        "steps": [
          "Anote organizadora, processo, edição e documento.",
          "Localize gênero, critérios e instruções específicas.",
          "Compare diferenças sem transportar obrigações automaticamente.",
          "Confira atualizações e resolva divergências pela fonte vigente."
        ],
        "example": "Situação autoral: uma estudante organiza duas fichas. Na do Enem 2026 registra a intervenção articulada ao problema; na da FUVEST 2027 registra verificar gêneros oferecidos e assinalar a opção na folha. Essa organização não significa que as duas redações terão a mesma conclusão. As fichas orientam a leitura do comando, sem substituir os documentos ou antecipar o tema de uma prova.",
        "pitfall": "Chamar uma regra do Enem de obrigação de todas as bancas ou usar manual de uma edição como prova automática da regra de outra."
      },
      {
        "level": "advanced",
        "title": "Planejamento, uso da coletânea e revisão por critérios",
        "explanation": "Depois de identificar as condições de escrita, transforme critérios em perguntas de revisão: o texto enfrenta o recorte proposto? A organização corresponde ao gênero? As ideias avançam e se relacionam? As referências contribuem para a análise? O registro é adequado? A revisão precisa examinar o texto produzido, e não apenas contar conectivos ou nomes de pensadores. Uma coletânea fornece materiais para interpretar e relacionar; copiar trechos sem elaboração não demonstra autoria. Ao mencionar uma fonte, preserve seu sentido e identifique a informação de modo compatível com o gênero e as instruções. Não fabrique citação, dado ou pesquisa para parecer convincente. Mobilizar um conhecimento externo só é útil se sua relação com o argumento for explicada; a simples menção a um autor não garante qualidade. Em atividades de adaptação, mantenha o problema discutido e modifique o projeto conforme leitor e finalidade, em vez de trocar apenas o título. Uma resposta pode ter argumentos pertinentes e ainda falhar no gênero ou em uma instrução essencial. Por isso, separe adequação ao comando, organização, desenvolvimento e linguagem, mas observe como esses aspectos interagem. Um exercício de múltipla escolha verifica uma decisão de leitura ou planejamento, não substitui escrever, revisar e receber avaliação contextual de uma redação inteira. O retorno do aplicativo ou de uma IA não constitui nota oficial nem homologação docente. As verificações desta aula servem para melhorar decisões justificadas; o resultado de uma prova depende do texto, da proposta e da avaliação segundo seus critérios próprios.",
        "steps": [
          "Converta cada critério aplicável em pergunta sobre o texto.",
          "Revise uso produtivo e fiel das fontes sem cópia ou invenção.",
          "Confira coerência entre gênero, leitor e organização.",
          "Releia o comando e as instruções finais sem prometer pontuação."
        ],
        "example": "Trecho autoral de revisão: “A praça perdeu bancos; logo, ninguém mais lê no bairro.” O fato descrito não sustenta sozinho a conclusão universal. Uma revisão pode delimitar o efeito observado e explicar a relação com acesso a espaços de leitura, sem inventar pesquisa. Melhorar a inferência é uma decisão concreta; apenas acrescentar um conectivo ou uma citação famosa não corrige o salto.",
        "pitfall": "Confundir correção automática com nota oficial, usar repertório sem relação ou acreditar que copiar a coletânea demonstra autoria."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Proposta inteiramente autoral de treino, sem vínculo com prova real: escreva uma carta de solicitação ao conselho de uma biblioteca para ampliar o horário, apresentando razões e uma medida viável. A atividade não pede identificação pessoal. Qual planejamento atende melhor à situação?",
        "hint": "Considere quem recebe, o que se solicita e como as razões apoiam a medida, sem inventar assinatura obrigatória.",
        "options": [
          "Narrar apenas uma viagem de férias, sem mencionar horário, biblioteca ou destinatário.",
          "Escrever qualquer dissertação decorada e acrescentar nome completo, pois toda carta de prova exige assinatura real.",
          "Listar autores famosos sem explicar relação com o pedido, pois repertório por si só garante atendimento ao comando.",
          "Dirigir o pedido ao conselho, justificar a ampliação e formular uma medida pertinente, seguindo as instruções sem acrescentar identificação pessoal."
        ],
        "correctIndex": 3,
        "solution": "D articula destinatário, finalidade, razões e medida ao comando dado. A abandona o recorte; B universaliza uma identificação que a atividade não pede e supõe que qualquer dissertação baste; C substitui desenvolvimento por nomes. O cenário é autoral e não permite atribuir a uma banca real uma regra sobre carta, assinatura ou pontuação."
      },
      {
        "level": "intermediate",
        "prompt": "Uma estudante compara orientações institucionais do Enem 2026, o Guia FUVEST 2027 e o Manual Unesp 2026, tratados como documentos de edições específicas. Qual conclusão é sustentada sem generalizar critérios para qualquer prova?",
        "hint": "Diferencie a intervenção exigida no Enem, a escolha de opção da FUVEST e os limites de usar um manual de outra edição.",
        "options": [
          "A intervenção do Enem não vira obrigação universal; na FUVEST 2027 deve-se observar a escolha indicada na folha, e o caso Unesp 2026 não dispensa consultar o documento vigente de outra edição.",
          "Como todas avaliam escrita, as três exigem necessariamente a mesma conclusão com intervenção e os mesmos pesos numéricos.",
          "O manual Unesp 2026 demonstra automaticamente que nenhuma regra poderá mudar em qualquer edição futura de todos os processos Vunesp.",
          "Se a FUVEST oferecer opções, a pessoa candidata pode omitir a escolha na folha sem consequência, contrariando o guia citado."
        ],
        "correctIndex": 0,
        "solution": "A preserva o vínculo de cada informação ao documento e à edição. B transforma uma exigência particular em regra universal e inventa pesos iguais. C ignora o escopo temporal e institucional. D contradiz o guia FUVEST 2027, que prevê nota zero pela ausência da escolha. A comparação é documental e não antecipa gêneros ou temas específicos ainda não informados em um comando."
      },
      {
        "level": "advanced",
        "prompt": "Trecho autoral de plano de revisão: “Vou copiar a coletânea, inserir três nomes de filósofos e repetir conectivos; assim garanto a nota máxima, mesmo sem conferir o gênero solicitado.” Qual avaliação enfrenta os problemas do plano?",
        "hint": "Examine autoria, pertinência do repertório e adequação ao comando, sem reduzir qualidade à contagem de palavras ou nomes.",
        "options": [
          "O plano está demonstrado porque copiar é sempre o critério de autoria de todas as instituições.",
          "A quantidade de filósofos elimina qualquer necessidade de verificar tema, gênero e progressão.",
          "O plano não garante nota: deve-se atender ao gênero e ao tema, desenvolver relações e usar fontes de modo produtivo, sem substituir elaboração por cópia ou menções soltas.",
          "Repetir mais vezes o mesmo conectivo corrige automaticamente qualquer falha factual ou de gênero."
        ],
        "correctIndex": 2,
        "solution": "C identifica adequação, desenvolvimento e uso produtivo das fontes como problemas concretos a revisar. A iguala cópia e autoria; B inventa compensação automática por nomes; D atribui ao conectivo poder de corrigir conteúdo e gênero. O exercício não calcula uma nota real, pois isso exigiria texto completo, proposta e avaliação segundo a grade aplicável."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Discurso direto e indireto",
    "objective": "Interpretar e produzir relatos em inglês de afirmações, perguntas e pedidos, preservando referências e sentido, com mudanças de tempo e perspectiva justificadas pelo contexto.",
    "prerequisites": [
      "Pronomes e referências pessoais",
      "Tempos simples, contínuos e perfeitos",
      "Ordem de afirmações e perguntas em inglês"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Relatar sentido e identificar referências",
        "explanation": "No discurso direto, apresenta-se uma fala como citação; no indireto, seu conteúdo é integrado a outra construção e pode ser resumido. Uma citação real exige fidelidade e fonte; os diálogos desta aula são inteiramente autorais. Para relatar, identifique quem falou, a quem e quem produz o novo relato. Pronomes não seguem uma tabela automática: I pode tornar-se she, he, they ou continuar I, dependendo da identidade das pessoas e da perspectiva. O mesmo vale para my, your e our. Em uma afirmação relatada, say pode introduzir uma oração com that, muitas vezes omitido. Na construção tell someone that, a pessoa é complemento: told us that. Para mencionar o destinatário com say, usa-se, por exemplo, said to us; não se usa said us como equivalente dessa construção. Essa distinção não significa que todo uso possível de tell tenha a mesma estrutura. Expressões como here, this, today e tomorrow precisam continuar apontando para o lugar, objeto ou dia pretendido. Podem mudar quando a referência muda, mas podem permanecer se ainda forem adequadas. Um relato não é uma substituição mecânica de todas as palavras por termos supostamente mais distantes. Antes de escolher a forma, recupere o referente e a situação. Uma frase gramatical pode atribuir a fala ou o objeto à pessoa errada, e uma fala relatada não demonstra sozinha que seu conteúdo seja verdadeiro.",
        "steps": [
          "Identifique falante original, destinatário e pessoa que relata.",
          "Associe cada pronome e expressão ao referente pretendido.",
          "Escolha um padrão adequado de say ou tell.",
          "Confira se o novo relato preserva conteúdo e perspectiva."
        ],
        "example": "Diálogo autoral: Theo e Nina dizem a Rui, referindo-se a um projeto dos dois: “We built our model.” Mais tarde, Rui relata a outra pessoa: “They said that they had built their model.” They e their remetem à dupla, não a qualquer grupo mencionado depois. O relato não prova a qualidade do modelo; informa o que a dupla afirmou.",
        "pitfall": "Trocar I sempre por he, inventar o gênero ou destinatário do relato ou impor here → there quando o lugar de referência continua o mesmo."
      },
      {
        "level": "intermediate",
        "title": "Backshift e ordem das perguntas relatadas",
        "explanation": "Backshift é um recuo de tempo verbal frequente quando se relata uma fala a partir de um verbo no passado. Em padrões usuais, present simple pode passar a past simple, present continuous a past continuous e present perfect a past perfect. Past simple pode ser relatado com past perfect para explicitar anterioridade, mas a escolha depende do contexto; past perfect já não precisa de um recuo adicional. Não conclua que uma frase no presente após said seja sempre errada: conteúdo ainda verdadeiro ou relevante pode manter o tempo. Perguntas relatadas normalmente usam ordem de oração declarativa, com sujeito antes do verbo, em vez da inversão da pergunta direta. Em perguntas de sim ou não, if ou whether pode introduzir o conteúdo; em perguntas com where, why, when ou how, preserva-se a palavra interrogativa pertinente. Não se mantém do ou did apenas como auxiliar de pergunta dentro dessa oração. Isso não elimina o verbo lexical do quando ele faz parte do sentido. Compare estrutura e referência, não apenas uma palavra solta. Uma frase como “She asked where the room was” relata uma pergunta; se a frase completa for declarativa, não termina com ponto de interrogação por conter asked. Já uma pergunta completa que inclui uma oração subordinada pode ter interrogação. A função da frase inteira importa, portanto não se deve proibir esse sinal em qualquer estrutura que contenha discurso indireto.",
        "steps": [
          "Identifique a relação temporal e a relevância atual da fala.",
          "Decida se o recuo é adequado ao relato solicitado.",
          "Diferencie pergunta sim/não e pergunta com palavra interrogativa.",
          "Monte a oração subordinada sem inversão de pergunta direta."
        ],
        "example": "Conversa inteiramente autoral: uma visitante pergunta a uma recepcionista “Is the exhibition open?” Em relato posterior com recuo, a recepcionista pode dizer “She asked whether the exhibition was open.” Whether introduz a pergunta de sim ou não, e the exhibition vem antes de was. Não se conclui dessa fala, sozinha, se a exposição estava realmente aberta.",
        "pitfall": "Manter where was the room dentro de uma afirmação relatada, conservar did como auxiliar interrogativo ou exigir recuo em todo relato sem observar contexto."
      },
      {
        "level": "advanced",
        "title": "Pedidos, modalização e fidelidade ao relato",
        "explanation": "A função de uma fala nem sempre coincide com sua forma superficial. Uma pergunta com can ou could pode funcionar como pedido, e um relato pode explicitar essa função usando ask someone to do something. Ordens e instruções também podem ser relatadas com tell someone to do something; na negativa, not precede o infinitivo: told someone not to do something. Isso não significa que toda ordem aceite eliminar to sem outra construção. Outros verbos de relato têm padrões próprios, como suggest doing something ou suggest that someone do something; não se transfere para suggest o padrão de tell sem conferir sua estrutura. A escolha do verbo altera o compromisso atribuído: sugerir, prometer, admitir e ordenar não são atos idênticos. Modais também dependem de sentido e referência: will pode passar a would e can a could em um relato com recuo, mas não existe uma troca única obrigatória para toda ocorrência. O relato deve preservar obrigação, possibilidade ou inferência, e não transformar uma sugestão em ordem. Conteúdo ainda atual pode ser relatado no presente, sem que a presença de said torne a frase automaticamente incorreta. Um verbo passado no relato também não prova, sozinho, que a situação tenha deixado de existir no presente. Para revisar, compare participantes, tempo, modalidade, função e informações efetivamente fornecidas. Não invente motivo, local ou data para forçar uma alternativa, nem trate paráfrase como citação literal de pessoa real.",
        "steps": [
          "Identifique se a fala afirma, pergunta, pede, sugere ou ordena.",
          "Selecione verbo e padrão de complementação compatíveis.",
          "Confira negação, modalidade e referência temporal.",
          "Compare o sentido relatado com o original sem acrescentar fatos."
        ],
        "example": "Instrução autoral: um técnico diz a uma equipe “Do not open the sealed container.” Ao relatar a instrução, um integrante pode escrever “The technician told us not to open the sealed container.” Not to open preserva a proibição. Escrever “suggested that we open” atribuiria outro ato e inverteria o conteúdo, sem apoio na fala original.",
        "pitfall": "Usar told us to do not, trocar sugestão por ordem ou afirmar que um passado no relato prova que o conteúdo já não é verdadeiro."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cenário inteiramente autoral: Mara diz a Hugo “I have the spare keys.” Hugo relata essa afirmação a outra pessoa, referindo-se a Mara por she e adotando backshift. Qual opção preserva a referência e o padrão de say?",
        "hint": "I designa Mara na fala original; o relato pedido usa she, verbo said e recuo de have para had.",
        "options": [
          "Mara said me that she had the spare keys.",
          "Mara said that I had the spare keys.",
          "Mara said that she had the spare keys.",
          "Mara said that he had the spare keys."
        ],
        "correctIndex": 2,
        "solution": "C usa said that, she para Mara e had conforme o recuo solicitado. A usa said me em lugar de uma construção adequada como said to me ou told me. B atribui as chaves à pessoa que relata, e D usa he apesar da referência explicitamente indicada. A questão exige esse recuo no exercício; não afirma que toda fala atual obrigue a trocar have por had."
      },
      {
        "level": "intermediate",
        "prompt": "Diálogo inteiramente autoral: Mina pergunta a Omar, referindo-se ao caderno dele: “Where is your notebook?” Omar relata depois a outra pessoa, usando I/my para si e adotando backshift. Qual frase tem a ordem e as referências adequadas?",
        "hint": "A oração com where em um relato declarativo usa sujeito antes do verbo; your do original refere-se a Omar.",
        "options": [
          "Mina asked where was my notebook.",
          "Mina asked where your notebook was.",
          "Mina asked where did my notebook was.",
          "Mina asked where my notebook was."
        ],
        "correctIndex": 3,
        "solution": "D mantém where, usa my para o caderno de Omar e coloca my notebook antes de was. A conserva inversão interrogativa; B troca o possuidor pelo interlocutor atual; C mistura did e was numa estrutura inadequada. A frase completa relata a pergunta e é declarativa. O contexto fornece os participantes para não inventar a quem your se refere."
      },
      {
        "level": "advanced",
        "prompt": "Cenário inteiramente autoral: há poucos instantes, Nora afirmou “The library closes at eight.” O horário continua válido, e quem relata deseja apresentá-lo como informação atual: “Nora said that the library closes at eight.” Qual avaliação considera contexto e tempo verbal?",
        "hint": "Backshift é frequente, mas a validade atual do conteúdo permite escolhas que uma tabela automática não explica.",
        "options": [
          "O presente closes é possível nesse contexto de informação ainda válida; said não obriga recuo em toda situação.",
          "A frase é sempre agramatical, porque qualquer ocorrência de said proíbe um verbo no presente.",
          "O presente demonstra que Nora nunca pronunciou a frase, mesmo com a fala explicitamente fornecida.",
          "A frase prova que o horário mudou e que a biblioteca deixou de fechar às oito, sem outra informação."
        ],
        "correctIndex": 0,
        "solution": "A reconhece que o conteúdo atual pode manter closes após said. B transforma recuo frequente em obrigação universal. C contradiz o cenário sem fundamento; D inventa mudança de horário. Uma versão com closed também pode ser possível em outro enquadramento, mas isso não torna a versão apresentada inválida nem prova cessação do fato. A questão avalia o relato, não um horário real."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Artigos e contrações em espanhol",
    "objective": "Escolher artigos definidos e indefinidos em contexto, distinguir lo e él e aplicar al/del com atenção às condições de nomes próprios e substantivos femininos iniciados por a tônico.",
    "prerequisites": [
      "Substantivos e adjetivos em espanhol",
      "Gênero e número gramaticais",
      "Preposições a e de e referência em contexto"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Referência, gênero e número",
        "explanation": "Em espanhol, os artigos definidos incluem el, la, los e las; os indefinidos incluem un, una, unos e unas. Não se usa a forma portuguesa uns como plural espanhol de un. A escolha se relaciona à informação que quem fala supõe compartilhada: um referente pode estar identificado por menção anterior, conhecimento comum ou situação, e o artigo definido também pode aparecer em referência genérica. Portanto, definido não significa apenas algo já escrito uma vez, e indefinido não é sinônimo automático de qualquer coisa desconhecida no mundo. Na leitura, examine como o sintagma nominal apresenta o referente naquele contexto. Gênero e número precisam ser aprendidos com o substantivo e suas construções; a terminação isolada não resolve todos os casos. Em espanhol, mapa é masculino e mano é feminino: el mapa e la mano, com plurais los mapas e las manos. Diferenças em relação ao português não justificam traduzir artigo por artigo sem conferir a construção. Nem todo substantivo precisa vir sempre precedido de artigo: certos usos predicativos de profissão, por exemplo, podem ocorrer sem ele, e acrescentar modificadores pode alterar a construção. O objetivo é observar condições e sentido, não memorizar que toda palavra de uma classe exige a mesma forma em qualquer frase. Em textos de leitura, recuperar o referente ajuda a acompanhar retomadas e contrastes; a escolha de artigo participa dessa organização, mas não informa sozinha todas as propriedades do objeto mencionado.",
        "steps": [
          "Identifique o substantivo e o referente pretendido.",
          "Confira gênero e número sem depender só da terminação.",
          "Observe informação compartilhada, introdução e retomada.",
          "Releia a construção completa antes de traduzir ou escolher a forma."
        ],
        "example": "Microtexto inteiramente autoral: “Una estudiante dejó una carpeta en recepción. La estudiante volvió para recogerla.” Una apresenta uma participante, e la retoma a pessoa que o texto acabou de introduzir. A diferença ajuda a acompanhar a referência; não significa que o interlocutor conhecesse a estudante antes da conversa ou que toda palavra deva ter artigo.",
        "pitfall": "Escrever uns em espanhol, decidir gênero só pela terminação ou exigir artigo diante de todo substantivo em qualquer construção."
      },
      {
        "level": "intermediate",
        "title": "El diante de femininos e o valor de lo",
        "explanation": "Alguns substantivos femininos singulares iniciados por a tônico, inclusive com h inicial não pronunciado, recebem a forma el do artigo quando ele aparece imediatamente antes do nome, com poucas exceções. A forma não transforma o gênero do substantivo em masculino. Em el agua fría, o adjetivo permanece feminino; no plural usa-se las aguas frías. Se um adjetivo se interpõe, a construção muda: la mejor agua, e não uma generalização de el para tudo que começa com a. O caso exige som tônico e posição, não apenas a letra inicial. Demonstrativos não seguem automaticamente essa alternância: esta agua mantém feminino. Esse conjunto de observações evita interpretar a forma gráfica el como prova universal de gênero masculino. Lo, por sua vez, pode funcionar tradicionalmente como artigo neutro em construções como lo útil e lo que falta, referindo-se a uma qualidade, conteúdo ou situação. Não é a forma masculina para colocar diretamente antes de um substantivo como libro, nem possui plural los com esse mesmo valor neutro. Também existe lo pronome átono em outras construções, portanto é preciso analisar a função antes de classificá-lo. Já él, com acento, é pronome pessoal tônico; distingue-se do artigo el sem acento. Sem essa distinção, uma tradução pode trocar uma pessoa por um substantivo determinado ou aplicar indevidamente uma contração. Os exemplos devem ser lidos por inteiro, considerando concordância e referente, sem transformar aparência gráfica em equivalência de função.",
        "steps": [
          "Confira se o substantivo é feminino singular e começa por a tônico.",
          "Observe se o artigo está imediatamente antes do nome.",
          "Mantenha concordância feminina nos elementos pertinentes.",
          "Diferencie lo neutro, lo pronome e él pessoal pelo contexto."
        ],
        "example": "Comparação inteiramente autoral: “El aula luminosa está abierta; esta aula recibe talleres.” Aula continua feminino, como mostram luminosa e abierta, e o demonstrativo é esta. O texto descreve uma sala, sem criar regra de que todo feminino ou todo demonstrativo iniciado por a passe a masculino. O fato de haver el não basta para concluir mudança de gênero.",
        "pitfall": "Concluir que agua virou masculino, escrever este agua por analogia ou usar lo como artigo diretamente diante de libro."
      },
      {
        "level": "advanced",
        "title": "Al, del e os limites da contração escrita",
        "explanation": "Na escrita padrão, a preposição a seguida do artigo el normalmente forma al, e de seguida do artigo el forma del. O resultado é uma unidade gráfica de preposição e artigo, não uma regra para fundir toda sequência que comece por essas letras. As combinações a la, de la, a los, de los e con la permanecem separadas; não se deve inventar con la como uma palavra contraída nem transportar automaticamente formas portuguesas para para el. Há condições importantes: quando El faz parte de um nome próprio, conserva-se a separação na escrita, como em referências ao país El Salvador. O mesmo cuidado vale para artigo que inicia o título de uma obra. Não basta ver uma letra maiúscula em início de frase ou qualquer nome próprio depois de el; é preciso verificar se o artigo integra o nome. A escrita e a realização oral também não são idênticas: a ausência de contração gráfica nesses casos não exige que toda pessoa pronuncie vogais separadas artificialmente. Com o pronome pessoal él, não se produz al ou del: a él e de él mantêm o acento e a referência pessoal. Além disso, al e del podem preceder substantivos femininos do caso estudado, como al agua; isso não altera o gênero do nome. Para resolver, identifique primeiro preposição, função de el ou él e relação com nome próprio. A decisão resulta dessa análise, não de substituir qualquer a el ou de el por uma forma única sem contexto.",
        "steps": [
          "Separe a preposição e a função da palavra seguinte.",
          "Diferencie artigo el, pronome él e El integrado em nome próprio.",
          "Aplique al ou del nos casos pertinentes à escrita padrão.",
          "Confira concordância e não importe contrações de outra língua."
        ],
        "example": "Situação inteiramente autoral: “El informe del museo llegó a él.” Del reúne de e o artigo que determina museo; a él aponta para uma pessoa e não vira al. A frase permite comparar funções diferentes sem afirmar que qualquer ocorrência de el tenha acento, nem que toda expressão com preposição deva sofrer contração.",
        "pitfall": "Contrair de él como del, escrever conla ou supor que a regra dispensa conferir se El integra um nome próprio."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Trecho inteiramente autoral: “Veo ___ mapa en la pared y ___ mano dibujada en una esquina.” Use artigos definidos singulares, considerando mapa e mano como substantivos nas acepções comuns. Qual sequência é adequada?",
        "hint": "A terminação -a ou -o não determina sozinha o gênero; confira o gênero lexical dos dois substantivos.",
        "options": [
          "la / el",
          "lo / la",
          "el / la",
          "los / las"
        ],
        "correctIndex": 2,
        "solution": "C: mapa é masculino, portanto el mapa; mano é feminino, portanto la mano. A inverte os gêneros. B usa lo diretamente antes de mapa como se fosse artigo masculino de substantivo. D emprega plurais apesar do comando e dos substantivos singulares. A decisão se apoia na concordância lexical, sem generalizar que toda palavra terminada em a seja feminina."
      },
      {
        "level": "intermediate",
        "prompt": "Complete o trecho inteiramente autoral respeitando a concordância padrão: “___ agua está fría; ___ aguas del lago también están frías; ___ agua parece limpia.” Na última lacuna, use um demonstrativo feminino singular. Qual sequência é adequada?",
        "hint": "Agua continua feminino; observe artigo singular imediatamente antes do nome, plural e demonstrativo.",
        "options": [
          "el / las / esta",
          "el / los / este",
          "la / los / esta",
          "lo / las / este"
        ],
        "correctIndex": 0,
        "solution": "A: el aparece imediatamente antes de agua no singular por seu a tônico; o nome permanece feminino, como mostram fría e limpia. O plural é las aguas, e o demonstrativo é esta. B masculiniza plural e demonstrativo; C usa la nesse contato direto e los no plural; D confunde lo com artigo de nome e usa este. A forma el, nesse caso, não torna agua um substantivo masculino."
      },
      {
        "level": "advanced",
        "prompt": "Trecho inteiramente autoral para escrita padrão: “Voy ___ mercado; regreso ___ Salvador; hablo ___ él.” A segunda oração refere-se ao país cujo nome é El Salvador, com El integrante do nome; a última refere-se a uma pessoa. Qual sequência preserva essas funções?",
        "hint": "Compare a + artigo el comum, de + El integrado ao nome do país e de + pronome pessoal él.",
        "options": [
          "a el / del / de",
          "al / del / del",
          "a la / de El / del",
          "al / de El / de"
        ],
        "correctIndex": 3,
        "solution": "D produz “Voy al mercado; regreso de El Salvador; hablo de él.” A primeira contração reúne a e o artigo comum; no nome do país mantém-se de El; diante do pronome usa-se de él. A separa indevidamente a el mercado e contrai o nome próprio. B contrai nome e pronome; C troca o artigo de mercado e contrai él. Nenhuma opção altera o nome ou o referente especificado no enunciado."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Impulso, quantidade de movimento e colisões",
    "objective": "Aplicar o teorema do impulso e a conservação vetorial da quantidade de movimento com sistema e intervalo explícitos, distinguindo tipos de colisão e fases em que a energia mecânica pode ser conservada.",
    "prerequisites": [
      "Velocidade e força como vetores",
      "Segunda e terceira leis de Newton",
      "Energia cinética e potencial gravitacional",
      "Conversões de massa, tempo e velocidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Impulso, variação de momento e sinal",
        "explanation": "Na mecânica newtoniana, a quantidade de movimento de uma partícula de massa m é p = mv, uma grandeza vetorial. Em um eixo, o sinal da velocidade determina o sinal da componente de p; duas partículas com módulos iguais podem ter momentos opostos. Impulso de uma força em um intervalo é a integral temporal dessa força. Sem cálculo integral, pode-se obter a componente do impulso pela área algébrica sob a curva força versus tempo, com regiões abaixo do eixo contribuindo negativamente. O impulso resultante satisfaz J_resultante = Δp. Para massa constante, Δp = m(vf-vi), e não m vezes a soma dos módulos das velocidades. Se a força é constante, J = FΔt; se varia, J = F_média Δt com média temporal no mesmo intervalo. Essa média não é necessariamente a força máxima nem a média aritmética de quaisquer duas medidas escolhidas. A unidade N·s equivale a kg·m/s, mas não a joule. Impulso e trabalho são distintos: o primeiro envolve força e tempo, e o segundo envolve força e deslocamento. Em uma frenagem, escolher o sentido inicial como positivo pode produzir impulso negativo sem tempo negativo. Para um sistema de partículas com fronteiras definidas, a variação do momento total é determinada pelo impulso externo resultante. Antes de aplicar uma fórmula, declare eixo, intervalo, sistema e se a força informada é resultante ou apenas uma das forças. Isso evita atribuir ao contato uma mudança que também depende de outras interações não desprezíveis.",
        "steps": [
          "Defina eixo, sistema e intervalo de interesse.",
          "Calcule momento inicial e final com sinais.",
          "Determine impulso resultante ou área algébrica de força-tempo.",
          "Use força média no mesmo intervalo e confira unidades."
        ],
        "example": "Modelo autoral autossuficiente: uma força resultante cresce linearmente de 0 a 8 N em 0,5 s, sempre no sentido positivo. A área triangular vale J = 8·0,5/2 = 2 N·s. Para massa constante de 0,4 kg, inicialmente em repouso, vf = 2/0,4 = 5 m/s. A média é 4 N; usar o pico de 8 N durante todo o intervalo duplicaria o impulso.",
        "pitfall": "Usar força de pico como média, somar módulos em vez de subtrair velocidades com sinal ou confundir N·s e joule."
      },
      {
        "level": "intermediate",
        "title": "Conservação no sistema e tipos de colisão",
        "explanation": "A quantidade de movimento total de um sistema conserva-se entre dois instantes quando o impulso externo resultante nesse intervalo é nulo; uma aproximação pode desprezá-lo se for pequeno diante das mudanças analisadas. Colisão curta, por si só, não prova essa condição: é necessário verificar forças, direções e escala do intervalo. Forças internas de interação trocam momento entre os corpos e, no modelo newtoniano usual, suas contribuições ao momento total se compensam; isso não significa que cada corpo mantenha sua velocidade. Em uma dimensão, a conservação escreve-se m1v1i+m2v2i = m1v1f+m2v2f. Na colisão elástica, conserva-se também a energia cinética total do sistema; não necessariamente a energia de cada corpo. Em uma colisão perfeitamente inelástica com agregação, os corpos passam a mover-se com velocidade comum, obtida pelo momento total dividido pela massa total, sob a condição de impulso externo desprezível. A energia cinética de translação pode diminuir e converter-se em energia interna e outras formas; a energia total não desaparece. Inelástica não significa que os corpos necessariamente fiquem unidos em todo caso. Para impactos passivos unidimensionais apropriados, o coeficiente de restituição relaciona velocidades relativas de afastamento e aproximação: e = (v2f-v1f)/(v1i-v2i), com convenção e geometria compatíveis. Valores entre 0 e 1 descrevem o modelo usual sem liberação adicional de energia interna; não é uma lei que proíba toda interação superelástica. Um único dado de conservação pode não determinar todas as incógnitas: identifique quais condições adicionais o enunciado fornece.",
        "steps": [
          "Verifique o impulso externo antes de conservar momento.",
          "Registre velocidades com sinais e massa total.",
          "Use a condição elástica, agregação ou outra relação fornecida.",
          "Compare energias sem confundir cinética e energia total."
        ],
        "example": "Exemplo autoral: dois carrinhos de 1 kg colidem frontalmente de modo elástico em pista horizontal ideal, com um a 2 m/s e outro inicialmente parado. Após a interação e separação, as velocidades são 0 e 2 m/s. O momento total é 2 kg·m/s antes e depois, e a energia cinética total é 2 J. A conservação não exige que cada carrinho preserve sua velocidade inicial.",
        "pitfall": "Conservar energia cinética numa agregação inelástica, conservar momento sem verificar impulso externo ou afirmar que qualquer colisão inelástica une os corpos."
      },
      {
        "level": "advanced",
        "title": "Componentes vetoriais e separação de etapas",
        "explanation": "Em uma colisão bidimensional, conserve o momento por componentes nas direções em que o impulso externo puder ser desprezado. Somar módulos de momentos perpendiculares não fornece seu vetor resultante. Depois de encontrar vx e vy, obtenha o módulo da velocidade por √(vx²+vy²) e a direção pelo quociente das componentes, conferindo quadrante e eixo de referência. A existência de conservação não elimina a necessidade de conhecer tipo de interação e outras condições para determinar todos os movimentos finais. Outro cuidado aparece em problemas com etapas diferentes. Em um modelo de pêndulo de impacto, um pequeno corpo atinge horizontalmente um bloco suspenso inicialmente no ponto mais baixo e fica preso. Durante a colisão muito breve, despreza-se o impulso externo horizontal, conservando-se essa componente do momento para achar a velocidade imediatamente posterior. Não se conserva a energia cinética durante o engaste. Na subida posterior, se não houver dissipação relevante e o vínculo não realizar trabalho, a energia mecânica do conjunto e da Terra pode ser conservada: a energia cinética inicial dessa etapa converte-se em aumento de potencial gravitacional. Assim, h = v_conjunto²/(2g), com v_conjunto calculada após o impacto, não a velocidade do corpo antes de atingir o bloco. A tensão e a gravidade alteram o momento durante a oscilação, portanto não se deve estender a conservação do momento da colisão para toda a subida. Marcar os instantes de início e fim de cada etapa ajuda a selecionar a lei adequada e a explicitar limites da idealização, sem tratar toda situação real como sistema isolado.",
        "steps": [
          "Decomponha velocidades e impulsos nas direções relevantes.",
          "Confira conservação por componente e condições adicionais.",
          "Separe impacto e movimento posterior em etapas.",
          "Aplique energia apenas no trecho em que as hipóteses a permitem."
        ],
        "example": "Modelo autoral no plano horizontal: carrinho de 2 kg tem velocidade (3,0) m/s e outro de 1 kg tem (0,6) m/s; eles se unem com impulso externo horizontal desprezível. O momento inicial é (6,6) kg·m/s e a massa total é 3 kg, logo vf = (2,2) m/s. Seu módulo é 2√2 m/s e a direção é 45° a partir de +x em direção a +y. Não se soma 6+6 para obter o módulo vetorial.",
        "pitfall": "Conservar energia desde antes do engaste até a altura máxima ou estender conservação do momento horizontal da colisão a toda a oscilação."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo autoral: um veículo de massa 1000 kg reduz sua velocidade de 8 m/s para 5 m/s, mantendo o sentido positivo de um eixo, no intervalo de 0,2 s. Qual é o impulso resultante nesse eixo e a força resultante média no mesmo intervalo?",
        "hint": "Use Δp = m(vf-vi), com o sentido inicial positivo, e depois F_média = Δp/Δt.",
        "options": [
          "3000 N·s; 15000 N.",
          "-3000 N·s; -600 N.",
          "-13000 N·s; -65000 N.",
          "-3000 N·s; -15000 N."
        ],
        "correctIndex": 3,
        "solution": "D: J = 1000(5-8) = -3000 N·s e F_média = -3000/0,2 = -15000 N. A perde o sinal em um eixo definido. B multiplica o impulso pelo intervalo em vez de dividi-lo, além de não corresponder à unidade de força pela operação. C usa o negativo da soma das velocidades, 1000(5+8), em lugar da diferença. A força é média resultante, não valor de pico ou força isolada do freio."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo autoral em uma dimensão, positivo para a direita: m1 = 2 kg move-se com v1 = +3 m/s; m2 = 1 kg move-se com v2 = -1 m/s. Eles ficam unidos numa colisão com impulso externo desprezível. Qual é a velocidade comum e a perda de energia cinética de translação?",
        "hint": "Some momentos com sinais e divida pela massa total; compare K antes e depois da agregação.",
        "options": [
          "7/3 m/s para a direita; perda de 4/3 J.",
          "5/3 m/s para a direita; perda de 16/3 J.",
          "5 m/s para a direita; perda de 0 J.",
          "5/3 m/s para a esquerda; perda de 0 J."
        ],
        "correctIndex": 1,
        "solution": "B: pi = 2·3+1·(-1) = 5 kg·m/s; vf = 5/3 m/s para a direita. Ki = 2·9/2+1·1/2 = 19/2 J; Kf = 3(5/3)²/2 = 25/6 J. A perda é 19/2-25/6 = 16/3 J. A soma módulos e erra a energia; C não divide pela massa total e afirma perda nula; D inverte a direção e também nega a perda. Essa redução cinética não é destruição da energia total."
      },
      {
        "level": "advanced",
        "prompt": "Modelo autoral de pêndulo de impacto: um pequeno corpo de massa 0,02 kg chega horizontalmente com velocidade 150 m/s e fica preso em um bloco de massa 0,98 kg, suspenso por um fio ideal inextensível de 1 m e inicialmente em repouso no ponto mais baixo. Despreze o impulso externo horizontal no choque breve. Na subida seguinte, despreze dissipação e considere g = 10 m/s². Qual é a elevação máxima do conjunto acima desse ponto?",
        "hint": "Calcule a velocidade comum por momento horizontal no choque; só depois converta sua energia cinética em potencial.",
        "options": [
          "0,45 m.",
          "22,50 m.",
          "3,00 m.",
          "0,09 m."
        ],
        "correctIndex": 0,
        "solution": "A: durante o choque, 0,02·150 = (0,02+0,98)v, logo v = 3 m/s. Na subida ideal, (1/2)Mv² = Mgh, então h = 9/20 = 0,45 m. B resulta de conservar indevidamente toda a energia cinética anterior ao engaste: 225 J divididos por Mg = 10 N dão 22,5 m. C e D não satisfazem as duas relações calculadas. Momento foi usado apenas no impacto e energia mecânica apenas na subida posterior."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Ligações, geometria e polaridade molecular",
    "objective": "Relacionar modelos de ligação e estrutura, construir contagens de Lewis, distinguir geometria eletrônica e molecular e avaliar polaridade pela soma vetorial de contribuições sob hipóteses explícitas.",
    "prerequisites": [
      "Elétrons de valência e íons",
      "Eletronegatividade",
      "Vetores e noção de ângulo",
      "Conservação de carga"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Modelos de ligação e organização da matéria",
        "explanation": "Ligações químicas são interpretadas por modelos que relacionam distribuição eletrônica, interações e estabilidade. No modelo iônico, cátions e ânions são mantidos por interações eletrostáticas; a fórmula de um sólido iônico simples expressa proporção entre íons, não necessariamente uma molécula isolada. Para obter essa proporção, a soma das cargas precisa corresponder à carga total indicada. Falar em transferência de elétrons é uma representação da formação de íons, não toda a descrição da energia e da estrutura do retículo. Na ligação covalente, elétrons compartilhados participam da interação entre átomos. Uma ligação pode ter distribuição desigual de densidade eletrônica; eletronegatividade ajuda a discutir seu caráter polar, mas um limite numérico único não separa sem exceções todas as substâncias em categorias absolutas. Ligações metálicas podem ser representadas por estruturas com elétrons deslocalizados, contribuindo para propriedades de condução e deformação de muitos metais. Esses modelos não autorizam deduzir toda propriedade a partir de uma palavra. Há sólidos covalentes em rede, como o diamante, que não devem ser tratados como conjuntos de moléculas pequenas com fracas interações entre elas. Da mesma forma, um composto iônico com íon poliatômico pode conter ligações covalentes dentro desse íon. É necessário distinguir ligação dentro de uma entidade e interações entre entidades. Solubilidade, fusão e condução dependem da estrutura e das condições; não é correto afirmar que todo composto covalente seja gás, insolúvel ou sempre isolante em qualquer contexto.",
        "steps": [
          "Identifique as entidades e a estrutura descritas.",
          "Relacione modelo de ligação e distribuição eletrônica.",
          "Confira carga e proporção sem inventar moléculas isoladas.",
          "Examine propriedades com suas condições, sem regra absoluta."
        ],
        "example": "Modelo autoral de composição: íons Mg2+ e O2− combinam-se em proporção 1:1 para carga total nula, representada por MgO. Isso informa a proporção do composto no modelo iônico; não desenha uma molécula isolada nem determina sozinho solubilidade ou ponto de fusão. Uma amostra sólida requer considerar a organização coletiva do retículo.",
        "pitfall": "Chamar toda unidade de fórmula iônica de molécula, confundir ligação e interação entre moléculas ou atribuir a todos os covalentes as mesmas propriedades."
      },
      {
        "level": "intermediate",
        "title": "Lewis e duas descrições de geometria",
        "explanation": "Uma estrutura de Lewis é um modelo de contagem e distribuição de elétrons de valência, com pares ligantes e não ligantes. Some os elétrons dos átomos e ajuste a contagem pela carga: cargas negativas acrescentam elétrons e positivas os retiram. Distribua ligações e pares, verificando a contagem total e as condições do modelo. Hidrogênio é tratado com dueto; o octeto é útil em muitos casos, mas não é regra sem exceção para todo átomo e espécie. Carga formal é uma contabilidade, não uma medida direta de carga real: calcula-se pela valência do átomo isolado menos elétrons não ligantes e metade dos ligantes. Formas de ressonância representam contribuições para uma distribuição eletrônica; não são moléculas alternando mecanicamente entre desenhos. No modelo VSEPR, regiões de densidade eletrônica ao redor do centro tendem a uma organização que reduz repulsões. Uma ligação múltipla conta como uma região para essa classificação, não uma região por traço de Lewis. Duas regiões dão arranjo linear; três, trigonal plano; quatro, tetraédrico; cinco, bipiramidal trigonal; seis, octaédrico, nos modelos ideais. Geometria eletrônica considera regiões ligantes e pares livres; geometria molecular descreve posições dos átomos. Assim, a existência de quatro regiões não obriga quatro átomos ligados ao centro. Pares livres podem mudar a forma molecular e os ângulos. Os ângulos ideais orientam o modelo, mas não substituem medidas nem tornam todas as espécies com a mesma contagem idênticas.",
        "steps": [
          "Conte elétrons de valência ajustando a carga total.",
          "Distribua pares e ligações conferindo o balanço.",
          "Conte regiões ao redor do centro, com múltipla como uma região.",
          "Separe arranjo eletrônico e forma definida pelos átomos."
        ],
        "example": "Descrição autoral de Lewis para CO2: carbono central ligado por duas ligações duplas, O=C=O; cada oxigênio tem dois pares livres. Há 16 elétrons de valência no total, e as duas ligações múltiplas definem duas regiões ao redor do carbono. A geometria molecular é linear no modelo, sem precisar de uma figura omitida. Não se contam quatro regiões porque aparecem quatro traços de ligação.",
        "pitfall": "Contar cada traço de ligação dupla como região separada, ignorar pares livres ou tratar octeto e ângulos ideais como leis sem exceção."
      },
      {
        "level": "advanced",
        "title": "Polaridade depende de distribuição e forma",
        "explanation": "Polaridade de uma ligação e polaridade de uma molécula não são a mesma pergunta. Uma molécula pode conter ligações polares e ter momento dipolar resultante nulo por sua distribuição espacial. Para analisar, combine estrutura e geometria com a soma vetorial das contribuições no modelo adotado, mantendo uma convenção consistente. Somar apenas módulos elimina a informação de direção e pode gerar resultado errado. A existência de pares livres pode estar associada à forma, mas não substitui examinar toda a distribuição; tampouco a mera contagem de tipos de elemento resolve toda espécie. Uma organização simétrica de contribuições equivalentes pode anulá-las, enquanto a troca de ligantes exige reavaliar a equivalência. No modelo de duas contribuições de mesmo módulo μ com ângulo θ entre seus vetores, o módulo da soma é μ_resultante = √(μ²+μ²+2μ²cosθ). Para 180°, as contribuições opostas iguais se cancelam; para outro ângulo, não se deve presumir cancelamento. D pode representar debye, unidade usada para momento dipolar, sem indicar carga líquida da molécula. Uma entidade eletricamente neutra pode ser polar; carga total nula não significa ausência de separação de cargas. Modelos de soma de ligações são simplificações da distribuição eletrônica e não autorizam inventar valores experimentais. Polaridade ajuda a discutir interações, mas solubilidade e temperaturas de mudança de fase também dependem de outras condições. Antes de concluir, explicite geometria, equivalência das contribuições e limite da idealização.",
        "steps": [
          "Diferencie polaridade de ligação e da molécula inteira.",
          "Confira geometria e equivalência das contribuições.",
          "Some vetores sem substituir direção por módulo.",
          "Separe previsão do modelo, carga total e medida experimental."
        ],
        "example": "Análise autoral de BF3 no modelo trigonal plano ideal: três ligações equivalentes distribuem-se simetricamente em torno do boro. Suas contribuições dipolares se cancelam, embora cada ligação B–F seja polar. A presença de ligações polares não basta para classificar a molécula como polar. O exemplo não afirma que toda geometria trigonal plana com quaisquer ligantes tenha cancelamento.",
        "pitfall": "Concluir polaridade apenas da eletronegatividade, somar módulos sem direção ou igualar molécula neutra a molécula necessariamente apolar."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo autoral de um sólido iônico formado por cátions Ca2+ e ânions F−, com carga total nula. Qual descrição apresenta a proporção mínima correta e evita tratá-la automaticamente como molécula isolada?",
        "hint": "Equilibre +2 com cargas -1 e diferencie unidade de fórmula e entidade molecular isolada.",
        "options": [
          "CaF, pois +2 e -1 se cancelam em proporção 1:1.",
          "CaF2, representando proporção de íons em um retículo no modelo, sem exigir moléculas isoladas de CaF2.",
          "Ca2F, pois dois cátions positivos são neutralizados por qualquer único ânion.",
          "F2Ca2, que necessariamente representa uma molécula covalente porque toda fórmula escrita corresponde a molécula."
        ],
        "correctIndex": 1,
        "solution": "B usa um Ca2+ para dois F−: +2+2(-1)=0, com proporção mínima 1:2. A deixa carga +1; C deixa +3; D não apresenta a proporção mínima neutra e inventa uma conclusão molecular. A fórmula de um composto iônico informa composição, e a descrição do sólido depende do retículo; não se deve atribuir moléculas discretas apenas pela escrita da fórmula."
      },
      {
        "level": "intermediate",
        "prompt": "Questão autoral: para NH3 neutro, considere elétrons de valência N = 5 e H = 1. No modelo de Lewis usual há três ligações simples N–H e um par livre no N. Quais são a geometria eletrônica e a geometria molecular, nessa ordem, no modelo VSEPR?",
        "hint": "Conte regiões de densidade, incluindo o par livre, e depois descreva apenas as posições dos átomos.",
        "options": [
          "Trigonal plana e trigonal plana, pois pares livres nunca entram na contagem.",
          "Tetraédrica e piramidal trigonal, pois há quatro regiões eletrônicas e três átomos ligados ao centro.",
          "Linear e angular, porque três ligações simples contam como duas regiões.",
          "Octaédrica e tetraédrica, pois cada elétron de valência corresponde a um átomo ligado."
        ],
        "correctIndex": 1,
        "solution": "B: a contagem é 5+3·1=8 elétrons, distribuídos em três pares ligantes e um par livre no modelo. São quatro regiões, com arranjo eletrônico tetraédrico; as posições de três H formam geometria molecular piramidal trigonal. A descarta o par livre, C erra o número de regiões e D confunde elétrons com átomos. O ângulo real não é imposto como igual ao tetraédrico ideal."
      },
      {
        "level": "advanced",
        "prompt": "Modelo vetorial inteiramente autoral: duas contribuições dipolares têm, cada uma, módulo 1,5 D e formam ângulo de 120° entre seus vetores. Despreze outras contribuições e use cos120° = -1/2. Em comparação, no arranjo linear com 180° elas têm os mesmos módulos e sentidos opostos. Quais são os módulos resultantes, respectivamente?",
        "hint": "Use o módulo da soma vetorial, não a soma dos módulos; confira o cancelamento no caso linear oposto.",
        "options": [
          "3,0 D; 3 D.",
          "0,0 D; 3 D.",
          "1,5 D; 0 D.",
          "2,25 D; 1 D."
        ],
        "correctIndex": 2,
        "solution": "C: μ_resultante² = 1,5²+1,5²+2·1,5²(-1/2) = 2,25 D², logo μ_resultante = 1,5 D. No caso de vetores iguais e opostos, a soma é zero. A soma módulos e ignora direções; B inverte conclusões de cancelamento; D trata um valor quadrático como módulo e ainda deixa resíduo no caso oposto. Trata-se de modelo dado, não medida experimental de uma molécula real."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Mitose e meiose",
    "objective": "Comparar mitose e meiose relacionando replicação, segregação e ploidia, acompanhar cromossomos e cromátides em modelos explícitos e distinguir diversidade potencial de produtos de uma única divisão.",
    "prerequisites": [
      "DNA, gene e cromossomo",
      "Noções de célula e núcleo eucariótico",
      "Pares homólogos e alelos",
      "Potências de base dois"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Replicação não equivale a mudar a ploidia",
        "explanation": "Cromossomos eucarióticos associam DNA e proteínas. No modelo de contagem usual, um cromossomo replicado, antes da separação das cromátides-irmãs, continua sendo contado como um cromossomo, embora tenha duas cromátides. Cromossomos homólogos correspondem a exemplares de um mesmo tipo de cromossomo em um conjunto diploide e podem portar alelos diferentes; não são simplesmente as duas cópias recém-produzidas pela replicação. Ploidia diz respeito ao número de conjuntos cromossômicos, e não à quantidade total de DNA. No ciclo celular clássico, G1 antecede a fase S, em que o DNA é replicado, e G2 antecede a divisão. A replicação duplica a quantidade de DNA, mas não transforma automaticamente 2n em 4n. Na mitose usual, prófase envolve condensação, metáfase organização dos cromossomos no fuso, anáfase separação das cromátides-irmãs e telófase reorganização dos núcleos. Quando as irmãs se separam, passam a ser contadas como cromossomos-filhos; por isso, contagens dependem do instante e de considerar a célula inteira ou cada núcleo em formação. Citocinese divide o citoplasma e deve ser distinguida da divisão nuclear. No modelo sem erros e com citocinese, a mitose preserva a ploidia das células descendentes; pode ocorrer em células haploides ou diploides. Crescimento e renovação celular são aplicações, mas isso não significa que toda célula de um organismo se divida continuamente ou que mutações e erros sejam impossíveis.",
        "steps": [
          "Separe homólogos e cromátides-irmãs.",
          "Defina instante e unidade de contagem.",
          "Acompanhe replicação e segregação sem igualar DNA e ploidia.",
          "Diferencie divisão nuclear e citocinese."
        ],
        "example": "Situação autoral de estudo: em uma região de crescimento de uma raiz, células proliferam e fornecem descendentes que podem crescer e diferenciar-se. A mitose participa da continuidade dos conjuntos cromossômicos nesse modelo. A presença de muitos cromossomos condensados em uma observação não permite concluir que toda a raiz esteja sempre em mitose ou que o crescimento se reduza apenas ao número de divisões.",
        "pitfall": "Contar as duas cromátides ligadas como dois cromossomos antes de sua separação, confundir homólogos com irmãs ou chamar toda replicação de duplicação de ploidia."
      },
      {
        "level": "intermediate",
        "title": "Duas divisões meióticas após uma replicação",
        "explanation": "No modelo meiótico diploide clássico, uma replicação de DNA antecede duas divisões nucleares. Na prófase I ocorre pareamento dos homólogos, e a recombinação pode envolver cromátides não irmãs de cromossomos homólogos. Na metáfase I, pares homólogos organizam-se em relação ao fuso; na anáfase I, os homólogos se separam, enquanto as cromátides-irmãs permanecem associadas no modelo usual. Isso reduz o número de conjuntos: após a primeira divisão e citocinese, cada célula tem um exemplar de cada par ainda duplicado. A meiose II separa as cromátides-irmãs; não há nova fase S entre as duas divisões. Ao final do processo ideal com citocinese, há quatro produtos celulares haploides, mas não é correto afirmar que em todo ciclo de vida sejam quatro gametas funcionais equivalentes. Em plantas, por exemplo, a meiose pode produzir esporos, e a formação de gametas integra outra etapa do ciclo. Para acompanhar DNA, pode-se usar C como quantidade relativa correspondente a um conjunto haploide não replicado: uma célula diploide típica em G1 é 2n/2C; após S, 2n/4C; após meiose I, cada produto é n/2C; após meiose II, n/1C. Essa notação exige declarar o modelo e a unidade de comparação. A permanência de cromossomos duplicados após a primeira divisão não impede que o produto já seja haploide. Compare eventos de segregação e não apenas a aparência de um desenho ou a palavra divisão.",
        "steps": [
          "Marque a única replicação antes da meiose I.",
          "Acompanhe pareamento e separação de homólogos.",
          "Separe a redução de conjuntos da separação das irmãs.",
          "Registre por célula ploidia, cromossomos e quantidade relativa de DNA."
        ],
        "example": "Comparação autoral de organização: na metáfase mitótica usual, cromossomos duplicados alinham-se de modo que as irmãs possam seguir para polos opostos. Na metáfase I, a organização dos homólogos em pares prepara a separação desses homólogos. A semelhança visual de cromossomos duplicados não torna os dois eventos equivalentes, pois a unidade que segrega na divisão seguinte é diferente.",
        "pitfall": "Dizer que a meiose I separa irmãs, colocar uma segunda replicação entre I e II ou chamar n/2C de diploide apenas porque seus cromossomos estão duplicados."
      },
      {
        "level": "advanced",
        "title": "Variabilidade e limites das contagens",
        "explanation": "A diversidade associada à meiose envolve mecanismos distintos. A orientação dos pares homólogos pode produzir combinações diferentes de origem cromossômica; no modelo de n pares com segregação independente, desconsiderando recombinação, há 2^n combinações potenciais de conjuntos em produtos haploides ao longo de muitas meioses. Essa contagem não diz que uma única meiose produza 2^n células: duas divisões sucessivas com citocinese usual produzem quatro produtos. Também não significa que todos os produtos de um mesmo processo sejam necessariamente quatro genótipos diferentes. Crossing-over pode gerar novas combinações de alelos em cromátides, sem criar obrigatoriamente um novo alelo por esse mecanismo. A recombinação não torna toda característica independente; genes ligados precisam ser analisados considerando localização e eventos entre eles. A fecundação acrescenta outra combinação de conjuntos, e não deve ser confundida com uma etapa da meiose. Erros de segregação podem alterar a distribuição cromossômica, mas uma imagem isolada ou um exercício não autoriza diagnosticar alguém nem prever individualmente uma condição de saúde. Para analisar um resultado, explicite o evento e as hipóteses, distinguindo cromossomos, cromátides, conjuntos e produtos celulares. Um modelo simplificado pode ser útil sem descrever todos os organismos ou tipos de gametogênese. A revisão de uma solução deve perguntar o que foi contado, em qual instante, em cada célula ou no conjunto do processo e ao longo de quantos eventos. Isso evita transformar uma potência de possibilidades em produção celular de uma única divisão.",
        "steps": [
          "Identifique se a pergunta conta células, cromossomos ou combinações.",
          "Separe segregação independente, recombinação e fecundação.",
          "Declare o que o modelo inclui e desconsidera.",
          "Confira limites da conclusão sem inferir diagnósticos ou universalidade."
        ],
        "example": "Modelo autoral de alelos ligados: um homólogo carrega M e R, e o outro m e r, em dois loci. Uma troca recíproca entre cromátides não irmãs, com ponto entre os loci, pode originar combinações M-r e m-R nas cromátides participantes. Isso reorganiza alelos existentes no modelo; não demonstra criação obrigatória de um novo alelo nem elimina a ligação física de todos os genes do cromossomo.",
        "pitfall": "Confundir 2^n possibilidades com número de células de uma meiose, afirmar que crossing-over sempre cria alelo novo ou generalizar todos os ciclos de vida pelo mesmo modelo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Modelo autoral diploide com 2n = 8, sem erros de segregação. Imediatamente após a fase S e antes da separação de cromátides-irmãs, quantos cromossomos e cromátides há no núcleo?",
        "hint": "A replicação duplica o DNA e forma irmãs, mas os cromossomos duplicados ainda são contados por suas unidades associadas.",
        "options": [
          "16 cromossomos duplicados; 32 cromátides.",
          "4 cromossomos duplicados; 8 cromátides.",
          "16 cromossomos simples; 16 cromátides.",
          "8 cromossomos duplicados; 16 cromátides."
        ],
        "correctIndex": 3,
        "solution": "D: os oito cromossomos tornam-se duplicados, cada um com duas cromátides, totalizando dezesseis cromátides. A duplica indevidamente o número cromossômico e ainda o de cromátides. B aplica redução que não ocorreu na fase S. C trata replicação como separação das irmãs. No modelo, a célula continua 2n, embora a quantidade de DNA tenha duplicado."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo autoral com célula inicial diploide 2n = 6 e meiose sem erros. Em cada uma das duas células, imediatamente após a meiose I com citocinese e antes da meiose II, sem nova replicação, qual é a contagem?",
        "hint": "Na primeira divisão separam-se homólogos; cada exemplar recebido ainda possui suas duas cromátides.",
        "options": [
          "3 cromossomos duplicados; 6 cromátides por célula.",
          "6 cromossomos duplicados; 12 cromátides por célula.",
          "3 cromossomos simples; 3 cromátides por célula.",
          "12 cromossomos simples; 12 cromátides por célula."
        ],
        "correctIndex": 0,
        "solution": "A: de cada par homólogo, cada célula recebe um cromossomo ainda duplicado. Como n = 3, há três cromossomos e seis cromátides em cada produto, já haploide. B mantém a contagem diploide replicada por célula. C antecipa a separação de irmãs da meiose II. D não corresponde à segregação descrita. Não existe uma segunda replicação entre as divisões neste modelo."
      },
      {
        "level": "advanced",
        "prompt": "Modelo autoral com n = 3 pares homólogos na célula diploide inicial: ignore crossing-over e suponha segregação independente. Compare o número de combinações potenciais de origem cromossômica em produtos haploides ao longo de muitas meioses com o número de produtos celulares de uma única meiose completa, com duas divisões e citocinese usuais. Quais são esses números, respectivamente?",
        "hint": "Uma contagem usa duas possibilidades por par; a outra acompanha quantas células resultam de duas divisões sucessivas.",
        "options": [
          "4 combinações potenciais; 8 produtos celulares.",
          "8 combinações potenciais; 8 produtos celulares.",
          "8 combinações potenciais; 4 produtos celulares.",
          "3 combinações potenciais; 2 produtos celulares."
        ],
        "correctIndex": 2,
        "solution": "C: as possibilidades são 2^3 = 8 ao longo de eventos independentes no modelo, enquanto uma meiose completa gera quatro produtos celulares, não oito. A troca os tipos de contagem; B transforma possibilidades em produção de um único evento; D usa o número de pares e apenas uma divisão. Não se afirma que uma única meiose produza todas as combinações nem que seus quatro produtos sejam sempre quatro genótipos diferentes."
      }
    ]
  }
];

export const authoredCurriculumBatch10ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Potências, radicais e notação científica",
    "contentSha256": "ae6aa2e4c2319906bae58b409f4b17ab9a136c6d6879397061bc0b53e3308602",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/elementary-algebra-2e/pages/6-2-use-multiplication-properties-of-exponents",
      "https://openstax.org/books/elementary-algebra-2e/pages/6-7-integer-exponents-and-scientific-notation",
      "https://openstax.org/books/intermediate-algebra-2e/pages/8-1-simplify-expressions-with-roots",
      "https://openstax.org/books/intermediate-algebra-2e/pages/8-3-simplify-rational-exponents"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "O cálculo de [(-2)^3 · 2^5]/2^4 resulta em -16, considerando (-2)^3 = -8, 2^5 = 32 e 2^4 = 16, divisão -256/16 = -16. A alternativa correta C corresponde a -16, enquanto A (16) erra o sinal negativo, B (-64) não coincide com -256/16 e D (-2) resulta de divisão incorreta. A explicação do gabarito está adequada."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Simplificação de √75 - √12 + √27 = 6√3, pois √75 = 5√3, √12 = 2√3, √27 = 3√3, soma (5-2+3)√3 = 6√3. A alternativa A está correta. A alternativa B (√90) resulta de somar radicandos indevidamente (75-12+27=90). A alternativa C (10√3) troca a subtração por adição dos coeficientes. A alternativa D (6√6) modifica o radical sem operação equivalente. Todos os radicandos são positivos, válidos para raiz quadrada."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Contagem de unidades: (6,4×10^-3 g)/(8,0×10^-9 g) = (6,4/8,0)×10^[-3-(-9)] = 0,8×10^6 = 8,0×10^5. A alternativa D (8,0×10^5) está normalizada corretamente. A alternativa A (0,8×10^6) tem valor numérico igual mas coeficiente <1, violando a exigência de normalização. B e C têm escalas diferentes da razão calculada. A unidade g cancela, trata-se de modelo exato."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Ortografia, acentuação e pontuação",
    "contentSha256": "160b430633808fdd9fc144ca8c23bbecfab00ad7a6df4709501d35847000a978",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.academia.org.br/nossa-lingua/vocabulario-ortografico",
      "https://www.academia.org.br/sites/default/files/conteudo/o_acordo_ortogr_fico_da_lngua_portuguesa_anexoi_e_ii.pdf",
      "https://www12.senado.leg.br/manualdecomunicacao/estilos/por-que-por-que-porque-porque",
      "https://www12.senado.leg.br/manualdecomunicacao/estilos/virgula",
      "https://www12.senado.leg.br/manualdecomunicacao/estilos/ponto-e-virgula"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A resolução independente identifica que a primeira lacuna requer 'por que' para pergunta indireta sem interrogação inicial ('Não entendi por que a sessão terminou'), a segunda usa 'porque' como conectivo causal ('explicou que foi porque faltou energia'), e a terceira emprega 'porquê' como substantivo depois do artigo ('saber o porquê da falha'). A escolha sintática, e não a presença de interrogação, determina a alternativa correta, conforme a explicação da aula sobre funções da língua."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "A alternativa B (índice 1) reúne ideia sem o antigo acento do ditongo aberto ei na paroxítona, herói oxítona acentuada, saúde com u tônico em hiato e têm, terceira pessoa do plural de ter. A mantém o acento antigo em idéia; C omite o de herói; D contém duas omissões, em saude e no plural tem. Saúde divide-se sa-ú-de e é paroxítona; seu acento não é o de proparoxítona."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A análise independente distingue que na sentença I ('Os inscritos que entregaram o formulário') a oração restringe o subconjunto de inscritos caracterizados pela entrega, enquanto na II ('Os inscritos, que entregaram o formulário') as vírgulas isolam a entrega como informação adicional sobre o grupo já identificado, sem que a pontuação comprove fatos externos. A alternativa correta identifica essa distinção sem inventar dados sobre inscrições reais."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Pré-modernismo",
    "contentSha256": "75bdbad04d6c00a51f3eb7bcbc6eb49ed9c91864976f163609a54dc14e4e7af7",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.academia.org.br/academicos/euclides-da-cunha/biografia",
      "https://literaturabrasileira.ufsc.br/documentos?id=134398",
      "https://digital.bbm.usp.br/handle/bbm/4608",
      "https://www2.iel.unicamp.br/webdocs/iel/monteirolobato/outros/listagem_anexo_1.pdf",
      "https://www.scielo.br/j/rieb/a/q6ssYWLX6nw6fkPmSdzH3ks/?lang=pt",
      "https://www.monteirolobato.com/data-linha-do-tempo/1918-1925-lobato-editor/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A alternativa correta identifica que o comentário impõe unidade inexistente, coerente com o princípio do recorte heterogêneo e a não-exigência de estilo uniforme, conforme a explicação da seção básica sobre continuidades e tensões sem uniformidade obrigatória, diferentemente de opções que inventam forma padrão ou autor/data sem evidência."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A alternativa correta fundamenta a leitura crítica no contraste explícito entre o anúncio de atendimento igual e a prática que solicita recomendação pessoal, alinhando-se ao destaque da seção intermediária sobre a distância entre promessa e realidade institucional no fluxo de atendimento, ao contrário de opções que ignoram a contradição ou inventam autoria documental."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "A alternativa correta reconhece que as notas permitem comparação de recursos de linguagem e representação, mas que forma regular não exclui inovação e faltam dados para classificação histórica automática, consistindo com a abordagem avançada sobre evidências verificáveis e limites da inferência sobre autoria e escola literária, diferentemente de opções que reduzem inovação a identidade estética ou data única."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Gêneros e critérios específicos por banca",
    "contentSha256": "a9e979429d9d59a016bbe68e61a1e95df04e8880407e99247f91c3695d115523",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante",
      "https://www.fuvest.br/wp-content/uploads/fuvest2027-guia-provas.pdf",
      "https://www.fuvest.br/arquivos/vestibular/fuvest2027-resolucao-DOE.pdf",
      "https://documento.vunesp.com.br/documento/stream/NzI0MDI2OA==",
      "https://www.vunesp.com.br/VNSP2514"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "A opção D dirige o pedido ao conselho, justifica a ampliação com razões e propõe medida viável, sem adicionar identificação pessoal, conforme explicitamente declarado como não pedido na atividade. As outras opções falham: A narra viagem de férias sem abordar o tema; B universaliza assinatura e muda de gênero para dissertação decorada; C substitui desenvolvimento por nomes famosos sem relação com o pedido."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A opção A sustenta conclusão correta ao preservar o vínculo de cada informação ao documento e à edição, diferenciando exigências específicas do Enem, FUVEST e Unesp sem transferir obrigações automáticas. A opção B transfere erroneamente regra universal e pesos iguais para todas as bancas. A opção C ignora o escopo temporal e institucional do manual Unesp 2026. A opção D contradiz o guia FUVEST 2027, que prevê nota zero pela ausência da escolha indicada na folha."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "A opção C identifica adequadamente que o plano não garante nota: deve-se atender ao gênero e ao tema, desenvolver relações e usar fontes de modo produtivo, sem substituir elaboração por cópia ou menções soltas. A opção A equivocadamente iguala cópia a autoria de todas as instituições. A opção B inventa compensação automática por nomes de filósofos. A opção D atribui ao conectivo poder de corrigir conteúdo e gênero, o que é infundado."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Discurso direto e indireto",
    "contentSha256": "b98ff4b61467d13137ae56b4882a4b536f28ef6ec0ae80c39fe0de05249b8338",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-statements",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-questions",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/reported-speech",
      "https://www.pearson.com/content/dam/one-dot-com/one-dot-com/english/SampleMaterials/Secondary/Focus/BritishEnglish/Focus-BrE3_StudentsBook_U1-GrammarFocus.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Análise da estrutura de relato de afirmação: a opção C ('Mara said that she had the spare keys') é correta pois utiliza a estrutura 'said that' adequada, o pronome 'she' referencia corretamente Mara (como especificado na tarefa) e o verbo 'had' realiza o backshift esperado de 'have' no discurso indireto. As outras opções falham: A usa 'said me' inadequado, B atribui 'I' ao repassador em vez de Mara, D usa 'he' sem referência apropriada ao gênero de Mara."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Análise da estrutura de relato de pergunta: a opção D ('Mina asked where my notebook was') é correta pois mantém a ordem sujeito-verbo ('my notebook was') própria do discurso indireto (sem inversão interrogativa), usa 'my' para referenciar o caderno de Omar (como exigido pela tarefa) e realiza o backshift de 'is' para 'was'. A opção B incorretamente mantém 'your' referente ao original de Omar em vez de mudar para 'my', e a opção C mistura estruturas incompatíveis com 'did' e 'was'."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Análise do relato de informação atual: a opção A é correta pois reconhece que o presente 'closes' é aceitável quando o conteúdo ainda é verdadeiro e válido, conforme o cenário ('O horário continua válido'), e que 'said' não impõe recuo obrigatório em todas as situações. As outras opções são inválidas: B impõe regra universal absoluta contraditória ao texto, C contradiz o cenário sem fundamento, D inventa mudança de horário não presente no enunciado."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Artigos e contrações em espanhol",
    "contentSha256": "05e8e3ab1479a293cb4259c36a09dd4aeac12881b00ac0684a0f831aee5f8ff5",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.rae.es/gtg/art%C3%ADculo",
      "https://www.rae.es/dpd/el",
      "https://www.rae.es/dpd/lo",
      "https://www.rae.es/dpd/%C3%A9l",
      "https://www.rae.es/dpd/al",
      "https://www.rae.es/dpd/del",
      "https://www.academiaecuatorianadelalengua.org/cuidado-con-la-contraccion-del-en-nombres-propios/",
      "https://www.fundeu.es/recomendacion/la-y-el-en-nombres-femeninos-agua-aguila/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "C (índice2) fornece el mapa e la mano, ambos no singular. Mapa é masculino apesar da terminação -a, e mano é feminino apesar da terminação -o. A inverte os gêneros; B emprega lo diretamente diante de mapa como artigo de substantivo; D usa plurais contra o comando. Mano é a forma espanhola analisada, não a palavra portuguesa mão; a terminação não basta para determinar gênero."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A (índice0) fornece el agua, las aguas e esta agua. Agua não tem acento gráfico em espanhol e permanece feminino. A forma el, imediatamente antes desse nome singular iniciado por a tônico, é variante do artigo feminino, não contração nem transformação do nome em masculino. B usa los/este, C usa la no contato direto e los no plural, D confunde lo e este. O texto exige demonstrativo feminino singular e mantém fría/limpia."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "D (índice3) produz al mercado, de El Salvador e de él. Al reúne a e o artigo comum; El integra o nome próprio do país e não se contrai na escrita; él é pronome tônico, mantendo-se de él. A separa a el mercado indevidamente e contrai o nome do país, mas seu de final já forma corretamente de él com o enunciado. B contrai nome e pronome; C erra la com mercado e del antes de él. As três lacunas devem ser avaliadas junto às palavras fornecidas."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Impulso, quantidade de movimento e colisões",
    "contentSha256": "18bcad056ea2dc278549340befb6daf8700c88467e6dbdc57c220ab5f55d2eeb",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/university-physics-volume-1/pages/9-1-linear-momentum",
      "https://openstax.org/books/university-physics-volume-1/pages/9-2-impulse-and-collisions",
      "https://openstax.org/books/university-physics-volume-1/pages/9-3-conservation-of-linear-momentum",
      "https://openstax.org/books/university-physics-volume-1/pages/9-4-types-of-collisions",
      "https://openstax.org/books/university-physics-volume-1/pages/9-5-collisions-in-multiple-dimensions"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "J = 1000(5-8) = -3000 N·s e F_média = -3000/0,2 = -15000 N, alternativa D (índice3). A perde o sinal. Em B, -600 resulta de multiplicar -3000 por 0,2, não de dividir; sua força está errada. C usa -1000(5+8) = -13000 e divide por 0,2 para -65000, confundindo soma e diferença de velocidades. O eixo e intervalo definidos resolvem sinais e média."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "pi = 2·3+1·(-1) = 5 kg·m/s; vf = 5/3 m/s para a direita. Ki = 19/2 J, Kf = 25/6 J e perda = 16/3 J, alternativa B (índice1). A usa módulos no momento, chegando a 7/3 e à perda equivocada 4/3, não perda nula. C usa 5 m/s sem dividir pela massa total e nega perda; D inverte direção e também afirma perda nula. Energia total não é destruída pela perda de energia cinética de translação."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Cálculo independente de duas etapas: velocidade após choque v = m1v1/(m1+m2) = 0,02·150/(0,02+0,98) = 3 m/s e elevação h = v²/(2g) = 9/20 = 0,45 m. Opção 22,50 m resulta de conservação indevida de energia cinética anterior ao engaste (225 J / (Mg = 10 N)). Opções 3,00 m e 0,09 m não satisfazem ambas as relações calculadas. A alternativa correta 0,45 m está no índice 0."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Ligações, geometria e polaridade molecular",
    "contentSha256": "f11f182f05b0105a3f5bc9331cb884597d279762fe25850b7f94e7d10fda307e",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/7-1-ionic-bonding",
      "https://openstax.org/books/chemistry-2e/pages/7-2-covalent-bonding",
      "https://openstax.org/books/chemistry-2e/pages/7-3-lewis-symbols-and-structures",
      "https://openstax.org/books/chemistry-2e/pages/7-4-formal-charges-and-resonance",
      "https://openstax.org/books/chemistry-2e/pages/7-5-strengths-of-ionic-and-covalent-bonds",
      "https://openstax.org/books/chemistry-2e/pages/7-6-molecular-structure-and-polarity",
      "https://openstax.org/books/chemistry-2e/pages/10-5-the-solid-state-of-matter"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "B: CaF2 tem proporção1:2 e carga +2+2(-1)=0, representando o retículo no modelo, sem exigir moléculas isoladas. A deixa +1, C deixa +3, e D (F2Ca2) deixa +2 e não fornece proporção mínima neutra. Além disso, D infere covalência e molécula simplesmente da fórmula, o que não é sustentado. A análise não precisa alegar inexistência absoluta de qualquer espécie molecular em outro contexto."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "B: NH3 neutro possui 5+3·1=8 elétrons de valência, com três pares ligantes e um livre no modelo dado. Quatro regiões implicam geometria eletrônica tetraédrica; os três H definem a molecular piramidal trigonal. A ignora o par livre; C conta indevidamente três ligações como duas regiões; D confunde número de elétrons e átomos ligados. Não se impõe ao ângulo real o valor tetraédrico ideal."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "A alternativa C aplica corretamente a fórmula do módulo resultante de vetores dipolares: μ² = 1,5²+1,5²+2·1,5²·cos120° = 2,25, logo μ = 1,5 D. No caso linear de 180° com sentidos opostos, a soma vetorial dá zero. As outras alternativas cometem erros de soma modular, inversão de conclusões ou tratamento de valores quadráticos como módulos, ignorando a dependência angular."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Mitose e meiose",
    "contentSha256": "03af7c8f05f74756bf406f3de0777e0d4adea5b47932a70882245f736304e3b8",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/biology-2e/pages/10-1-cell-division",
      "https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle",
      "https://openstax.org/books/biology-2e/pages/11-1-the-process-of-meiosis",
      "https://openstax.org/books/biology-2e/pages/11-2-sexual-reproduction",
      "https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance",
      "https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Análise independente: na célula diploide 2n=8 após fase S e antes da separação de cromátides-irmãs, os 8 cromossomos duplicados formam 16 cromátides; opção D (índice 3) está correta pois mantém a contagem cromossômica enquanto reconhece a duplicação de DNA, ao contrário da A que duplica indevidamente, B que aplica redução prematura ou C que equivale replicação à separação."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Análise independente: na meiose com 2n=6, após meiose I e citocinese, cada célula filha recebe 3 cromossomos (ainda duplicados) e 6 cromátides; opção A (índice 0) está correta pois reflete a segregação de homólogos sem nova replicação, ao contrário de B que mantém contagem diploide, C que antecipa a separação de irmãs ou D que não corresponde ao modelo descrito."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Análise independente: com n=3 pares homólogos e segregação independente sem crossing-over, há 2^3=8 combinações cromossômicas potenciais ao longo de múltiplas meioses; opção C (índice 2) está correta pois diferencia corretamente possibilidades de eventos múltiplos dos 4 produtos de uma única meiose, ao contrário de A que confunde os contadores, B que iguala possibilidades à produção celular ou D que usa base errada."
      }
    ]
  }
] as const;
