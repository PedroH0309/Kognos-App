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
  }
] as const;
