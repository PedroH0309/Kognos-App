import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch05:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Probabilidade e estatística",
    "objective": "Organizar e interpretar dados, calcular medidas de centro e dispersão, resolver probabilidades com hipóteses explícitas e distinguir condicionamento, independência, repetição de ensaios e limites de inferências sobre populações.",
    "prerequisites": [
      "Razões, porcentagens e operações com frações",
      "Leitura de tabelas, eixos e unidades",
      "Conjuntos, contagem e potência de números"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Dados, frequências e medidas descritivas",
        "explanation": "Estatística começa pela pergunta, pela população de interesse e por como os dados foram obtidos. População é o conjunto sobre o qual se quer estudar uma característica; amostra é uma parte observada. Uma variável pode ser qualitativa, como categoria de transporte, ou quantitativa, como tempo de viagem. Frequência absoluta conta ocorrências; frequência relativa divide a contagem pelo total pertinente. Uma porcentagem precisa indicar sua base. A média aritmética soma valores e divide pelo número de observações; em uma tabela de frequências, multiplique cada valor por sua frequência antes de somar e divida pela soma das frequências. Não divida automaticamente pelo número de linhas da tabela. Média ponderada usa pesos: soma dos produtos valor × peso dividida pela soma dos pesos. Mediana exige ordenar os dados: com quantidade ímpar é o valor central; com quantidade par, no tratamento escolar quantitativo usual, é a média dos dois valores centrais. Moda é o valor de maior frequência, podendo haver mais de uma ou nenhuma moda destacada quando as frequências empatam. As medidas respondem a perguntas diferentes e não são obrigatoriamente valores observados. Valores extremos podem alterar bastante a média; mediana e moda não têm o mesmo comportamento. Para dispersão, amplitude é máximo menos mínimo. A variância populacional é a média dos quadrados dos desvios em relação à média, e o desvio padrão é sua raiz, na unidade original. Quando se usa a variância amostral estimadora usual, o denominador é n − 1, e não n; identifique o conceito pedido. Grupos com a mesma média podem ter dispersões distintas. Ao ler gráficos, confira unidades, escala, período, categorias e tamanhos dos grupos. Barras, linhas e histogramas têm usos diferentes; um eixo truncado pode destacar diferenças visuais sem alterar os números. Antes de comparar porcentagens ou médias, verifique se as bases e os pesos são compatíveis.",
        "steps": [
          "Identifique população, amostra, variável e método de coleta, distinguindo dado e inferência.",
          "Some frequências e aplique pesos para calcular média sem confundir linhas e observações.",
          "Ordene os dados para mediana e compare frequências para moda.",
          "Calcule e interprete dispersão conforme a definição solicitada e leia eixos e bases dos gráficos."
        ],
        "example": "Dados hipotéticos: os conjuntos 4, 4, 4 e 2, 4, 6 têm média 4. No primeiro, a variância populacional é zero. No segundo, os desvios são −2, 0 e 2; os quadrados somam 8 e a variância é 8/3. A igualdade das médias não torna os conjuntos igualmente dispersos nem informa como foram selecionados.",
        "pitfall": "Tirar média simples de médias de grupos com tamanhos diferentes, localizar mediana sem ordenar ou chamar desvio padrão de porcentagem sem justificar a unidade."
      },
      {
        "level": "intermediate",
        "title": "Espaço amostral, contagem e regras de probabilidade",
        "explanation": "Um experimento aleatório tem resultados possíveis descritos por um espaço amostral; evento é um conjunto desses resultados. Probabilidades ficam entre 0 e 1. Em um espaço finito com resultados elementares equiprováveis, P(A) é a quantidade de resultados favoráveis dividida pela quantidade total. Se os resultados não têm chances iguais, contar categorias não basta: é necessário usar as probabilidades correspondentes. O complemento de A tem probabilidade 1 − P(A), recurso útil para pelo menos um: calcule 1 menos a chance de nenhum quando o modelo permitir. Para a união, o ou inclusivo, P(A ou B) = P(A) + P(B) − P(A e B); a subtração evita contar a interseção duas vezes. Se os eventos são mutuamente exclusivos, a interseção é vazia e sua probabilidade é zero. Para uma sequência, a regra geral é P(A e B) = P(A) × P(B dado A), quando o condicionamento está definido. Não se multiplicam sempre as duas probabilidades originais: o primeiro resultado pode alterar as condições do segundo. Numa urna bem misturada, sem reposição, a quantidade total e a composição se alteram após a retirada. Com reposição, novas retiradas uniformes e independentes mantêm a composição, mas a palavra reposição não prova por si só independência de qualquer mecanismo arbitrário. A contagem também exige atenção à ordem. Se cada escolha de uma etapa permite um número definido de continuações, pode-se usar o princípio multiplicativo. Para escolher k elementos distintos de n sem importar a ordem, a combinação C(n,k) = n!/[k!(n−k)!] elimina repetições de ordenação; fatorial é o produto dos inteiros positivos até o número indicado, com 0! = 1. Diferencie selecionar um grupo de atribuir cargos diferentes. Defina o procedimento de sorteio antes de contar e confira se não somou casos sobrepostos.",
        "steps": [
          "Descreva o mecanismo e verifique equiprobabilidade antes de usar razão de contagens.",
          "Distinga união, interseção e complemento, cuidando de sobreposições.",
          "Em etapas sucessivas, atualize a probabilidade conforme reposição, composição e informação anterior.",
          "Decida se ordem importa e conte grupos ou sequências de acordo com o experimento."
        ],
        "example": "Modelo didático: um dado comum honesto tem seis faces equiprováveis. Números pares são 2, 4 e 6; números maiores que 3 são 4, 5 e 6. A união contém 2, 4, 5 e 6 e tem probabilidade 4/6 = 2/3. Somar 3/6 e 3/6 sem descontar 4 e 6 contaria a interseção duas vezes.",
        "pitfall": "Contar categorias como se fossem equiprováveis sem verificar o sorteio, somar eventos sobrepostos ou manter a mesma composição depois de retirar um objeto sem reposição."
      },
      {
        "level": "advanced",
        "title": "Condicionamento, ensaios repetidos e limites das conclusões",
        "explanation": "Probabilidade condicional restringe o universo à informação dada: P(A dado B) = P(A e B)/P(B), com P(B) maior que zero. Em geral, P(A dado B) não é P(B dado A). Saber que uma peça é defeituosa pode alterar a probabilidade de sua origem; para inverter a condição, considere todos os caminhos que produzem o defeito. Se origens formam grupos sem sobreposição que cobrem a produção, some probabilidade da origem × probabilidade do defeito naquela origem e use essa soma como base. Essa é uma aplicação da probabilidade total e do raciocínio de Bayes, não uma regra de trocar letras. Independência significa P(A e B) = P(A)P(B); quando as condições são definidas, saber B não altera a chance de A. Independência não é exclusão mútua: dois eventos disjuntos de probabilidades positivas não são independentes, pois sua interseção vale zero e o produto é positivo. Na contagem de sucessos em n ensaios independentes com duas categorias e probabilidade constante p, o modelo binomial fornece P(X = k) = C(n,k)p^k(1−p)^(n−k). A média esperada é np e a variância é np(1−p), mas a expectativa não promete que cada sequência tenha exatamente esse resultado. A fórmula não se aplica automaticamente a uma seleção sem reposição de população pequena. Frequência observada e probabilidade do modelo também são conceitos diferentes. Em pesquisas, amostras grandes podem continuar enviesadas se houver seleção inadequada, não resposta ou pergunta tendenciosa. Uma associação observada entre duas variáveis não prova sozinha causalidade; outras condições ou seleção podem explicar parte da relação. Estimar uma população exige examinar método e incerteza, sem anunciar uma margem de erro universal a partir do tamanho da amostra. Uma conclusão correta explicita o que os números permitem e o que ainda depende de dados ou hipóteses.",
        "steps": [
          "Identifique a informação condicionante e use apenas o universo correspondente no denominador.",
          "Para inverter a condição, reúna todos os caminhos possíveis e separe probabilidade da origem e do resultado.",
          "Verifique independência e probabilidade constante antes de usar o modelo binomial.",
          "Separe expectativa e resultado garantido, associação e causalidade, tamanho da amostra e qualidade de seleção."
        ],
        "example": "Modelo hipotético de ensaios: três lançamentos independentes de uma moeda honesta têm oito sequências equiprováveis. Exatamente duas caras aparecem em CCK, CKC e KCC, usando K para coroa, portanto a chance é 3/8. A binomial reproduz 3 × (1/2)² × (1/2) = 3/8. A expectativa de 1,5 cara não significa que algum ensaio precise produzir meia cara.",
        "pitfall": "Inverter condicionais sem mudar a base, confundir exclusão com independência, aplicar binomial sem suas hipóteses ou concluir causalidade e representatividade apenas de uma associação ou de uma amostra grande."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma tabela hipotética registra os valores 2, 5 e 11 com frequências absolutas 3, 2 e 1, respectivamente. Considerando as seis observações individuais, quais são a média aritmética e a mediana?",
        "hint": "Expanda ou posicione as observações conforme suas frequências: há seis valores, e a mediana usa a terceira e a quarta posições depois da ordenação.",
        "solution": "C calcula a soma ponderada 2×3 + 5×2 + 11×1 = 27 e divide por 6, obtendo média 4,5. A sequência ordenada é 2, 2, 2, 5, 5, 11; a mediana é (2 + 5)/2 = 3,5. A ignora frequências e usa somente três categorias. B confunde mediana com moda 2. D divide a soma ponderada pelo número de categorias e erra a posição central. Média e mediana não precisam coincidir nem estar entre os valores observados.",
        "options": [
          "Média 6 e mediana 5.",
          "Média 4,5 e mediana 2.",
          "Média 4,5 e mediana 3,5.",
          "Média 9 e mediana 5."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Uma urna contém quatro bolas azuis e três vermelhas. Duas bolas são retiradas sucessivamente sem reposição, com escolha uniforme entre as bolas disponíveis em cada retirada. Qual é a probabilidade de ambas serem azuis?",
        "hint": "A chance da primeira azul usa sete bolas. Se ela for azul, restam três azuis entre seis bolas para a segunda retirada.",
        "solution": "A aplica a regra de etapas: (4/7) × (3/6) = 12/42 = 2/7. B mantém 4/7 nas duas retiradas e corresponderia ao modelo uniforme independente com reposição, que não foi descrito. C considera só a primeira retirada. D não corresponde ao produto das probabilidades atualizadas. Também se pode contar grupos: C(4,2)/C(7,2) = 6/21 = 2/7, pois a seleção de pares é uniforme nesse mecanismo.",
        "options": [
          "2/7",
          "16/49",
          "4/7",
          "1/7"
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Num modelo hipotético, 10% das peças vêm da máquina A e 90% da B. Entre as peças de A, 20% são defeituosas; entre as de B, 2% são defeituosas. As origens cobrem a produção sem sobreposição. Uma peça é escolhida uniformemente da produção e sabe-se que é defeituosa. Qual é a probabilidade de ter vindo de A?",
        "hint": "Calcule a parcela da produção que é defeituosa em cada origem e divida a parcela defeituosa de A pela soma das duas parcelas defeituosas.",
        "solution": "D calcula P(A e defeito) = 0,10×0,20 = 0,02 e P(B e defeito) = 0,90×0,02 = 0,018. Entre todas as defeituosas, a fração de A é 0,02/(0,02+0,018) = 20/38 = 10/19, cerca de 52,63%. A usa a proporção de origem antes de saber do defeito. B usa a taxa de defeito de A e inverte o condicionamento. C usa apenas a parcela conjunta no total da produção. A origem menos frequente pode responder por mais da metade das defeituosas devido às taxas distintas.",
        "options": [
          "10%",
          "20%",
          "2%",
          "10/19, aproximadamente 52,63%"
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Argumentação e coesão",
    "objective": "Analisar tese, razões e evidências, interpretar retomadas e relações entre enunciados e revisar argumentos para preservar clareza, progressão e força inferencial sem depender de fórmulas fixas.",
    "prerequisites": [
      "Compreensão de textos e distinção entre tema e posicionamento",
      "Noções de pronomes, conjunções e pontuação",
      "Identificação de informações explícitas e inferências"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Tese, razões e sustentação do ponto de vista",
        "explanation": "Argumentar é sustentar ou contestar uma posição por razões dirigidas a interlocutores em uma situação de comunicação. Tema é o assunto em discussão; tese é uma posição que se procura defender. A tese pode aparecer no início, ser construída ao longo do texto, ficar implícita ou ser formulada na conclusão. Portanto, a última frase não deixa de ser tese apenas por concluir um raciocínio, e não existe obrigação geral de que todo texto argumentativo tenha a mesma sequência de parágrafos. Argumentos podem mobilizar exemplos, comparações, dados, causas, consequências ou conhecimentos de uma área. Para avaliá-los, pergunte como cada informação apoia a posição: apresentar um número ou um nome conhecido não explica sozinho a ligação com a conclusão. Um dado verificável exige origem e contexto; um exemplo hipotético pode esclarecer raciocínio, mas não deve ser apresentado como pesquisa real. Um caso particular também não comprova automaticamente uma afirmação sobre todas as pessoas. Há diferenças entre descrever um fato, avaliá-lo e propor uma ação. O fato de uma medida produzir certo efeito não basta, sem critérios adicionais, para concluir que seja obrigatória em qualquer contexto. O leitor precisa reconhecer objetivos, valores, condições e possíveis custos. O posicionamento se relaciona ao público e ao gênero: artigo de opinião, carta argumentativa, debate e publicidade podem organizar razões e recursos de modos distintos. Analisar argumentação não é apenas concordar com o autor; é reconstruir suas relações e avaliar pertinência e limites. Uma conclusão pode retomar, qualificar ou delimitar a posição, sem precisar copiar literalmente uma frase anterior.",
        "steps": [
          "Formule o tema como assunto e a tese como posição específica, procurando-a no texto inteiro.",
          "Separe razões, exemplos, dados, avaliações e propostas, sem transformar todo detalhe em tese.",
          "Explicite a ponte entre informação e conclusão, verificando hipóteses e critérios.",
          "Considere público, gênero e finalidade antes de impor ordem ou número fixo de parágrafos."
        ],
        "example": "Texto hipotético e autoral: A escola deveria divulgar os horários de atendimento em linguagem clara. Uma pessoa que não encontra o horário pode perder a oportunidade de ser atendida. A proposta defende a divulgação; a razão explica um obstáculo de acesso. O caso sustenta a pertinência da clareza, sem inventar uma pesquisa ou afirmar que ela resolva todo problema de atendimento.",
        "pitfall": "Separar tese e conclusão como categorias incompatíveis, exigir posição sempre na primeira frase ou tratar número inventado como evidência real."
      },
      {
        "level": "intermediate",
        "title": "Retomadas, conectivos e progressão do texto",
        "explanation": "Coesão envolve recursos que articulam partes do texto, como pronomes, expressões nominais, repetições, relações lexicais, elipses e conectivos. Coerência diz respeito à construção de sentido em uma situação; muitos conectivos não garantem que as ideias sejam compatíveis ou que o argumento seja suficiente. Na referenciação, uma expressão pode retomar uma palavra, um grupo ou uma ideia anterior. Não se escolhe o antecedente apenas por ser o substantivo mais próximo: gênero, número, sentido e contexto precisam convergir. Quando duas leituras permanecem plausíveis, reescrever o nome pode ser melhor que substituir tudo por pronomes. Repetição pode preservar precisão; sinônimos aparentes podem alterar sentido e não são substitutos automáticos em qualquer contexto. Elipse é omissão recuperável, que não deve exigir adivinhar uma informação essencial. Conectivos orientam relações: além disso pode acrescentar uma razão; porém pode introduzir contraste; portanto encaminha conclusão; embora apresenta concessão. Uma relação concessiva reconhece uma condição que poderia favorecer conclusão oposta e mantém a conclusão principal. Não se decide o valor de uma palavra isolada de sua construção: como pode introduzir comparação, causa ou conformidade em contextos diferentes. Pontuação ajuda a delimitar unidades e relações, mas não torna equivalentes todas as substituições entre vírgula, ponto e dois-pontos. Progressão exige manter um fio e acrescentar informação: retomar o mesmo tema com aspectos novos é diferente de repetir a mesma frase. Também se pode desenvolver um elemento antes apresentado como informação nova, ou distribuir subtemas de um assunto amplo. Ao revisar, observe continuidade referencial, relação entre argumentos e avanço do raciocínio, sem declarar que qualquer pronome produz automaticamente progressão linear.",
        "steps": [
          "Localize o que cada expressão retoma e teste se há mais de um referente plausível.",
          "Interprete o conectivo na frase e no encadeamento, preservando a relação pretendida.",
          "Avalie se repetição, substituição ou elipse esclarece ou altera o sentido.",
          "Verifique o que cada período acrescenta e como se liga à tese, além de contar conectivos."
        ],
        "example": "Texto hipotético e autoral: O arquivo recebeu cartas antigas. Esses documentos foram catalogados. A catalogação permitiu organizar a consulta. A expressão esses documentos retoma cartas; a catalogação transforma uma ação antes informada em ponto de partida do período seguinte. A análise acompanha o conteúdo, não apenas a presença de um demonstrativo.",
        "pitfall": "Supor que todo pronome retome o nome mais próximo, trocar conectivos como se fossem enfeites ou chamar repetição sem informação nova de progressão bem construída."
      },
      {
        "level": "advanced",
        "title": "Concessão, refutação e revisão crítica das inferências",
        "explanation": "Uma argumentação pode apresentar objeções e respondê-las, reconhecer limites ou aceitar parte de uma posição sem concordar integralmente com ela. Concessão não é contradição obrigatória: embora uma ação tenha custos, o autor pode defendê-la por outros benefícios, desde que explique os critérios. Refutar exige responder ao argumento relevante, e não apenas repetir a tese com mais força. Analogia pode esclarecer uma relação, mas precisa considerar diferenças importantes entre os casos. Referência a especialista pode ser pertinente quando sua competência e a evidência correspondem ao problema; o prestígio de um nome não substitui demonstração, e uma fonte não deve ser inventada. Algumas falhas tornam a passagem das razões à conclusão inadequada: ataque pessoal desvia do mérito para características sem pertinência; homem de palha altera a proposta alheia para combatê-la; falsa dicotomia apresenta opções como únicas sem justificar exclusão de alternativas; generalização apressada extrapola evidência insuficiente. É preciso mostrar o erro no trecho, e não apenas aplicar um rótulo por discordar da conclusão. Crítica à confiabilidade de uma fonte pode ser relevante quando examina competência, conflito de interesse ou método com justificativa; não é automaticamente um ataque pessoal falacioso. Também diferencie relação temporal e causal: um evento ocorrer depois de outro não prova que o primeiro causou o segundo. Modalizadores como pode, provavelmente, necessariamente e sempre alteram a força de uma afirmação; trocar um pelo outro muda o compromisso assumido. Na revisão, confira se evidências e quantificadores combinam, se a objeção foi representada com fidelidade e se os recursos de coesão expressam a relação de fato defendida. Clareza textual e solidez argumentativa devem trabalhar juntas: uma frase bem conectada ainda pode concluir mais do que os dados permitem.",
        "steps": [
          "Reconstrua a objeção com fidelidade e identifique o ponto a que a resposta se dirige.",
          "Examine a relevância e os limites de analogias, autoridades e evidências.",
          "Mostre a passagem inadequada nas inferências antes de nomear uma falácia.",
          "Revise conectivos e modalizadores para que a força da conclusão corresponda ao apoio disponível."
        ],
        "example": "Discussão hipotética e autoral: uma pessoa propõe ampliar o horário de uma biblioteca; a resposta afirma que ela quer obrigar todo morador a estudar de madrugada. A resposta alterou a proposta antes de criticá-la, pois ampliar disponibilidade não é impor uso. A análise identifica a distorção, sem concluir que a proposta original seja automaticamente viável ou a melhor opção.",
        "pitfall": "Chamar qualquer crítica a uma fonte de ad hominem, tratar objeção como inimiga a caricaturar ou usar portanto para encobrir conclusão que não decorre das razões."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Leia o texto hipotético e autoral: Alguns estudantes chegam à escola antes de a sala de leitura abrir. Nesse intervalo, não conseguem usar seu acervo. Por isso, a escola deveria avaliar a abertura antecipada da sala. Qual alternativa expressa a proposta central defendida?",
        "hint": "A posição pode ser formulada na conclusão. Distinga os fatos usados como razão da ação que o texto propõe avaliar.",
        "solution": "B identifica a proposta de avaliar abertura antecipada, formulada no desfecho. A é uma informação apresentada como motivo, não a proposta. C amplia o texto para abertura permanente sem qualquer restrição, que não foi defendida. D inventa obrigação de leitura e não corresponde ao argumento. A posição estar na conclusão não a impede de funcionar como tese; o texto não comprova sozinho custos, equipe ou viabilidade da medida.",
        "options": [
          "Alguns estudantes chegam antes de a sala abrir.",
          "A escola deveria avaliar a abertura antecipada da sala de leitura.",
          "A escola deve manter todos os espaços abertos permanentemente, sem qualquer avaliação.",
          "Todos os estudantes são obrigados a ler antes da primeira aula."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "No texto hipotético e autoral Embora o equipamento seja antigo, ele continua adequado à atividade, qual análise preserva a relação entre as duas informações?",
        "hint": "A oração inicial admite uma condição que poderia levar à expectativa de inadequação; o período mantém outra conclusão sobre o uso do equipamento.",
        "solution": "D identifica concessão: reconhece-se a antiguidade, mas mantém-se a adequação, contrariando uma expectativa possível. A transforma a idade em causa afirmada da adequação, que não é o vínculo construído. B atribui finalidade inexistente e C troca a relação por consequência necessária. O pronome ele retoma equipamento nesse contexto, mas o núcleo da pergunta é a relação introduzida por embora, não uma regra fixa sobre todo equipamento antigo.",
        "options": [
          "Causa: o equipamento é adequado necessariamente porque é antigo.",
          "Finalidade: o equipamento ficou antigo com o objetivo de ser adequado.",
          "Consequência necessária: a antiguidade obriga todo equipamento a ser adequado.",
          "Concessão: a antiguidade é reconhecida sem impedir a adequação afirmada."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Num debate hipotético e autoral, uma pessoa afirma: Perguntei a dois colegas, ambos preferem estudar à noite; portanto, todos os estudantes da cidade aprendem melhor nesse horário. Qual crítica atinge diretamente a passagem das informações à conclusão?",
        "hint": "Observe o tamanho e o modo de seleção do grupo, a troca de preferência por aprendizagem e o alcance do termo todos.",
        "solution": "A mostra duas extrapolações: duas preferências não estabelecem resultado de aprendizagem nem representam necessariamente todos os estudantes da cidade. B toma o conectivo como prova lógica, mas ele apenas marca a conclusão pretendida. C exige aceitar qualquer conclusão que mencione pessoas e D altera a posição criticada, introduzindo proibição de estudo não afirmada. Não é necessário conhecer o melhor horário real para perceber que a evidência apresentada não sustenta a universalidade.",
        "options": [
          "Há generalização insuficientemente sustentada e troca de preferência declarada por desempenho de aprendizagem.",
          "O uso de portanto torna qualquer conclusão obrigatoriamente verdadeira.",
          "Mencionar dois colegas já garante amostra representativa e prova causal para toda a cidade.",
          "O autor propôs proibir todo estudo noturno, e somente essa proibição deve ser discutida."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Classicismo e Quinhentismo",
    "objective": "Distinguir o Classicismo português e os escritos quinhentistas ligados à colonização da América, analisando formas líricas e épicas, finalidades informativas e catequéticas e perspectivas de representação sem confundir simultaneidade e identidade estética.",
    "prerequisites": [
      "Contexto do Renascimento e da expansão marítima portuguesa",
      "Noções de verso, estrofe, rima e voz poética",
      "Leitura de textos com atenção a autoria, destinatário e finalidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Classicismo e renovação da lírica portuguesa",
        "explanation": "Classicismo é uma denominação para produções vinculadas à renovação renascentista e à valorização de modelos da Antiguidade greco-latina, em contextos europeus específicos. Em Portugal, no século XVI, a circulação de formas italianas, associada a autores como Sá de Miranda, participou da renovação poética. Isso não eliminou formas anteriores nem significou que todos os poetas seguissem uma receita única. Medida nova designa, nesse estudo, a valorização de formas como o verso decassílabo e o soneto, em contraste com a tradição das redondilhas, também cultivadas no período. O soneto de modelo italiano costuma organizar catorze versos em dois quartetos e dois tercetos; não existe um único esquema de rimas obrigatório para toda realização. Decassílabo tem dez sílabas poéticas, contadas até a última sílaba tônica do verso. A contagem não coincide sempre com a divisão gramatical: encontros vocálicos entre palavras podem permitir fusão na leitura, enquanto a sinalefa não deve ser inventada entre qualquer par de palavras iniciado por consoante. Ritmo depende também da distribuição de acentos, não apenas do total de sílabas. A lírica de Camões articula tradições diversas e explora amor, passagem do tempo, mudança, experiência e desconcerto do mundo. Idealização e desejo, razão e sentimento podem entrar em tensão; a presença de contradições expressivas não torna o poema um erro lógico a corrigir. O eu lírico é uma construção do texto e não se identifica automaticamente com o autor biográfico. Valorizar equilíbrio e modelos clássicos tampouco significa ausência de conflito, cristianismo ou formas tradicionais. Para interpretar, relacione escolhas formais e construção de sentidos, em vez de reconhecer o período apenas por uma lista de palavras.",
        "steps": [
          "Localize a produção no Renascimento português e diferencie renovação de ruptura total com a tradição.",
          "Reconheça organização de estrofes e versos sem presumir um único esquema de rimas.",
          "Na métrica, conte até a última tônica e justifique encontros vocálicos sem inventar fusões impossíveis.",
          "Relacione voz, imagens e tensões temáticas, separando eu lírico e biografia."
        ],
        "example": "Comparação hipotética e autoral: dois poemas têm catorze versos e dois quartetos seguidos de dois tercetos, mas usam rimas diferentes. Ambos podem dialogar com a forma soneto. Já conhecer apenas o número de versos não prova autoria de Camões, data de composição ou identidade completa de seus sentidos.",
        "pitfall": "Chamar todo poema do século XVI de soneto, transformar o eu lírico em relato biográfico literal ou aplicar sinalefa automaticamente entre palavras sem encontro vocálico."
      },
      {
        "level": "intermediate",
        "title": "Camões épico: narrativa, mitologia e reflexão",
        "explanation": "Os Lusíadas, publicados em 1572, pertencem à tradição épica: uma narrativa em verso apresenta feitos associados a um herói coletivo, o povo português, em diálogo com modelos antigos. A obra organiza-se em dez cantos, com estrofes de oito versos decassílabos e esquema de oitava-rima ABABABCC. Reconhecer essa estrutura externa não dispensa ler vozes e relações do relato. A viagem de Vasco da Gama à Índia constitui um eixo narrativo ao qual se articulam episódios da história portuguesa, intervenções de deuses greco-latinos e reflexões do poeta. A narração não precisa seguir uma cronologia simples do começo ao fim: relatos dentro da narrativa ampliam o tempo representado. Na proposição, anunciam-se matéria e propósito do canto; a invocação pede inspiração; a dedicatória dirige-se ao rei D. Sebastião; a narrativa e as intervenções reflexivas desenvolvem diferentes planos. A presença de mitologia não equivale a um relatório histórico literal nem prova abandono da cultura cristã: elementos antigos e referências cristãs participam de uma construção literária renascentista. Exaltação dos feitos portugueses também não significa elogio uniforme de toda ação e de toda personagem. Vozes e comentários podem problematizar ambição, recompensas, riscos e condutas. É preciso distinguir narrador, personagens e intervenções do poeta e perguntar a quem se atribui cada avaliação. Ler criticamente o projeto épico implica reconhecer sua ligação à expansão portuguesa e examinar seus valores, sem apagar o contexto de conquista nem reduzir a obra a documento neutro. A comparação com a lírica deve considerar gênero e organização: uma voz que reflete sobre amor num soneto e uma narrativa épica coletiva podem compartilhar recursos, sem serem a mesma forma textual.",
        "steps": [
          "Reconheça narrativa épica e herói coletivo, distinguindo-os de uma confissão lírica.",
          "Separe estrutura externa, como cantos e oitavas, de planos e funções internas da obra.",
          "Identifique quem narra, quem fala e a quem pertence uma avaliação.",
          "Interprete mitologia, exaltação e crítica como escolhas literárias situadas, sem leitura documental ingênua."
        ],
        "example": "Situação hipotética e autoral: um narrador anuncia feitos de uma coletividade e, durante o relato, uma personagem questiona os custos da busca de fama. A coexistência das vozes não permite atribuir automaticamente ao narrador cada fala da personagem nem concluir que a obra só elogie ou só condene o empreendimento. É preciso examinar posição e função de cada intervenção.",
        "pitfall": "Confundir canto com estrofe, narrador com toda personagem ou construção épica com reprodução literal e imparcial de acontecimentos históricos."
      },
      {
        "level": "advanced",
        "title": "Quinhentismo: informação, catequese e olhar colonial",
        "explanation": "No estudo da literatura ligada ao Brasil, Quinhentismo costuma designar escritos do século XVI associados ao contato e à colonização, com finalidades informativas e religiosas importantes. A simultaneidade com o Classicismo português não transforma toda carta, relato ou peça catequética em soneto classicista. Os dois recortes envolvem questões, gêneros e condições de produção diferentes. A Carta de Pero Vaz de Caminha, datada de 1º de maio de 1500 e dirigida ao rei D. Manuel, integra a documentação do contato português com a terra e seus habitantes. Descrição não é ausência de perspectiva: seleção de aspectos, comparações e expectativas revelam posições e interesses do observador. Conhecer o destinatário ajuda a interpretar o que se informa e com que finalidade. A chamada literatura de informação inclui relatos de viajantes e colonizadores; a produção catequética busca transmitir ensinamentos religiosos e integrar-se ao projeto missionário. José de Anchieta produziu textos de diferentes gêneros e línguas e elaborou a Arte de gramática da língua mais usada na costa do Brasil, publicada em 1595. O estudo linguístico deve ser contextualizado nas relações de contato, aprendizagem e catequização, sem concluir que todas as línguas e culturas indígenas eram uma só ou que suas formas de expressão não existiam antes da escrita colonial. Teatro e poesia missionários podem mobilizar recursos locais para fins de conversão; isso não elimina desigualdade de poder nem torna a representação automaticamente neutra. Escritos coloniais são fontes relevantes, mas não equivalem à voz direta de todos os povos descritos. Expressões como primeira literatura precisam ser delimitadas à tradição escrita e à periodização adotada, sem apagar narrativas, cantos e saberes indígenas. A leitura comparativa investiga forma, destinatário, finalidade e posição de enunciação, preservando diferenças sem hierarquizar culturas pelo uso da escrita alfabética.",
        "steps": [
          "Diferencie simultaneidade histórica e identidade de gênero ou projeto estético.",
          "Em cartas e relatos, identifique autor, destinatário e interesses que orientam a descrição.",
          "Contextualize produção missionária, uso de línguas e finalidade catequética nas relações coloniais.",
          "Distinga testemunho do observador e voz dos povos representados, sem apagar tradições anteriores e atuais."
        ],
        "example": "Documento hipotético e autoral: um viajante escreve a um governante sobre madeira, água e possibilidades de ocupação, comparando costumes locais aos de sua própria sociedade. As escolhas indicam finalidade informativa e uma perspectiva situada. A descrição não deve ser tratada como fala dos habitantes nem como prova de que os costumes observados precisavam ser substituídos.",
        "pitfall": "Confundir Quinhentismo com uma escola homogênea de sonetos, tomar todo relato colonial como neutro ou supor ausência de expressões indígenas antes da chegada portuguesa."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma análise de poema hipotético informa catorze versos organizados em dois quartetos e dois tercetos. Nenhum autor ou data foi identificado. Qual conclusão é justificada por essa informação?",
        "hint": "A organização permite reconhecer uma forma usual, mas não prova sozinha quem escreveu, quando escreveu ou todos os seus temas.",
        "solution": "B reconhece organização típica do soneto de modelo italiano e preserva os limites dos dados. A atribui autoria e século apenas pela estrutura, inferência insuficiente. C descreve a oitava de oito versos, incompatível com o total informado. D torna soneto e tema amoroso equivalentes, ignorando a diversidade temática da forma. A identificação formal é um ponto de partida para interpretar, não uma assinatura automática de Camões.",
        "options": [
          "A estrutura prova que o texto foi escrito por Camões no século XVI.",
          "A organização corresponde à forma usual do soneto italiano, sem provar autoria ou data.",
          "O poema possui necessariamente uma única oitava de oito versos.",
          "Todo texto com essa forma fala exclusivamente de amor e não admite outros temas."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Ao estudar Os Lusíadas, uma turma registra dez cantos, estrofes de oito versos decassílabos e rimas ABABABCC. Qual distinção interpreta corretamente essas informações?",
        "hint": "Canto é uma divisão ampla da obra; estrofe e verso correspondem a outros níveis. Uma mesma letra indica correspondência de rima, e não identidade obrigatória de palavras.",
        "solution": "D distingue cantos, oitavas e versos e reconhece a disposição das rimas. A confunde os dez cantos com dez versos no poema inteiro. B atribui catorze versos a cada oitava, confundindo-a com o total usual de um soneto. C trata letras de rima como obrigação de repetir palavras, o que o esquema não determina. Estrutura externa não resume o conteúdo: viagem, história, mitologia e reflexão articulam-se na narrativa.",
        "options": [
          "Os dez cantos significam que a obra inteira tem somente dez versos.",
          "Cada oitava possui catorze versos, como o total usual de um soneto.",
          "ABABABCC obriga a usar exatamente a mesma palavra em todos os versos de letra igual.",
          "Os cantos são divisões amplas; cada oitava tem oito versos, organizados pelo esquema de rimas indicado."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Uma síntese didática compara dois conjuntos do século XVI: A reúne poesia portuguesa ligada a modelos renascentistas; B reúne cartas de viajantes sobre a América e textos missionários voltados à catequese. Qual comparação evita confundir os recortes históricos?",
        "hint": "Estar no mesmo século não torna iguais as finalidades, os gêneros e as posições de quem escreve; considere também os povos representados pelos relatos.",
        "solution": "A distingue o recorte classicista português e as finalidades informativas e catequéticas estudadas no Quinhentismo, sem tratar o século como estilo único. B transforma toda carta em soneto e C presume neutralidade de relatos produzidos por observadores situados. D apaga expressões e saberes indígenas anteriores à escrita colonial. A comparação deve examinar forma, público e propósito, e não usar a presença de escrita europeia como medida de valor cultural.",
        "options": [
          "A e B podem ser contemporâneos e ter gêneros, finalidades e perspectivas diferentes, a serem analisados em contexto.",
          "Toda carta de B é obrigatoriamente um soneto classicista porque foi produzida no mesmo século de A.",
          "Todos os relatos de B são neutros e reproduzem diretamente a voz de cada povo descrito.",
          "A escrita de B demonstra que nenhum povo da América possuía narrativas, cantos ou saberes antes do contato."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Argumentos, repertório e evidências",
    "objective": "Construir argumentos articulando posição, razões, repertório e evidências; selecionar referências pertinentes, atribuir fontes com fidelidade e limitar conclusões ao alcance dos dados e das condições de produção.",
    "prerequisites": [
      "Distinção entre tema, tese e argumento",
      "Leitura de proporções, porcentagens e bases de comparação",
      "Noções de citação, paráfrase e autoria"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Da posição à justificativa: como funciona um argumento",
        "explanation": "Um argumento procura sustentar uma posição por razões e por uma relação que torna essas razões pertinentes à conclusão. Não basta reunir uma opinião e um dado sem explicar a ligação. A posição pode descrever, avaliar ou propor uma ação, e cada finalidade exige apoio adequado. Uma afirmação sobre quantas pessoas usam um serviço pode precisar de levantamento empírico; uma defesa de prioridade pública envolve também critérios e valores. Nenhum número resolve sozinho todas as escolhas. Evidências incluem registros, observações, documentos e resultados de pesquisa, mas sua função depende da pergunta e do método. Uma entrevista pode ajudar a compreender uma experiência, sem estimar automaticamente sua frequência na população. Um texto literário pode oferecer uma interpretação sobre relações sociais, sem funcionar como medição da vida de todos. Repertório é o conjunto de conhecimentos e referências mobilizados: acontecimentos históricos, conceitos, obras culturais e práticas sociais, entre outros. Repertório e evidência não são caixas sempre separadas: uma obra pode ser evidência do modo como seu próprio discurso representa algo, mas não comprova por si só a distribuição de um fenômeno externo. Ao escrever, indique a afirmação que deseja apoiar, apresente a informação relevante e explique a conexão, incluindo condições e limites. Exemplificação ilustra; analogia compara relações; explicação causal precisa de apoio para o mecanismo; referência a uma autoridade requer pertinência de sua competência e da afirmação. Não há obrigação universal de usar todos esses recursos, estatísticas e leis no mesmo parágrafo. A força está na adequação do apoio ao argumento, não na quantidade de nomes citados ou no prestígio aparente de uma instituição.",
        "steps": [
          "Defina a posição e o tipo de afirmação que precisa sustentar.",
          "Escolha informação ou referência adequada à pergunta, separando frequência, experiência e interpretação.",
          "Explique por que a informação apoia a posição e sob quais condições.",
          "Evite usar nomes, números ou leis como substitutos da ligação argumentativa."
        ],
        "example": "Parágrafo hipotético e autoral: O aviso de atendimento deveria informar também como chegar ao local. Conhecer apenas o horário não permite planejar o trajeto quando a entrada fica em outra rua. A razão identifica uma condição prática de acesso e explica a proposta; ela não exige inventar percentual de usuários nem garante que o novo aviso resolva toda dificuldade.",
        "pitfall": "Achar que toda defesa exige estatística oficial, chamar qualquer obra de prova sobre toda a população ou acumular referências sem explicitar seu papel."
      },
      {
        "level": "intermediate",
        "title": "Selecionar, contextualizar e atribuir repertório",
        "explanation": "Uma referência funciona quando o escritor compreende o que ela diz e mostra sua pertinência ao problema. Antes de usar um acontecimento, conceito ou obra, verifique autoria quando conhecida, contexto, significado e relação com o argumento. Proximidade de uma palavra não garante pertinência: mencionar mar em um poema não demonstra, sozinho, qualquer tese sobre poluição oceânica. Referências antigas podem ser produtivas quando a mediação é explicada; referências recentes também podem ser irrelevantes. O uso de repertório não precisa seguir uma lista fixa de autores e não autoriza adaptar falas para parecer que alguém afirmou exatamente o que o texto deseja. Citação direta reproduz palavras de uma fonte e exige fidelidade e atribuição; paráfrase reformula uma ideia com palavras próprias e também precisa reconhecer sua origem. Se não há certeza sobre uma frase literal, não a coloque entre aspas como fala real. Identifique edição, tradução ou data quando isso for relevante para compreender a referência, sem inventar detalhe bibliográfico. Em uma proposta de prova, textos de apoio devem ser lidos e usados conforme suas orientações, sem transformar o trabalho em cópia ou supor regras idênticas entre exames. Uma norma expressa direitos, deveres ou objetivos, mas sua existência não comprova cumprimento integral. Uma obra cultural pode ser analisada por personagens, conflitos, voz e linguagem, sem reduzir ficção a reportagem nem tratá-la como enfeite. Também se pode estabelecer um contraponto: mostrar em que aspecto uma referência se aproxima do caso e em que aspecto não serve como equivalência. Ao integrar o repertório, apresente o elemento necessário, interprete-o e conecte-o à tese. O leitor deve conseguir compreender essa função mesmo que não conheça a obra inteira.",
        "steps": [
          "Confirme o conteúdo da referência e selecione somente o aspecto que será analisado.",
          "Diferencie reprodução literal, paráfrase, interpretação e informação hipotética.",
          "Explique aproximações e diferenças entre referência e problema, evitando analogia automática.",
          "Revise atribuição, aspas e dados bibliográficos, preservando autoria e orientações da tarefa."
        ],
        "example": "Situação hipotética: um estudante analisa um conto autoral usado em aula no qual uma personagem evita uma praça por receio de não pertencer ao grupo que a ocupa. A interpretação pode discutir pertencimento e usos do espaço, mas deve examinar elementos do conto. Não pode afirmar que a personagem mede quantas pessoas reais deixam de frequentar todas as praças.",
        "pitfall": "Inventar citação famosa, confundir paráfrase com ideia sem autoria ou usar o nome de uma obra sem explicar sua relação com a tese."
      },
      {
        "level": "advanced",
        "title": "Conferir evidências, bases de comparação e contrapontos",
        "explanation": "Avaliar uma evidência exige mais que reconhecer o logotipo da fonte. Pergunte quem produziu, quando, com qual definição, universo, método e possibilidade de verificação. Atualidade importa conforme a afirmação: um registro antigo pode ser fonte adequada sobre seu período, mas não demonstrar a situação presente. Uma amostra de conveniência não se torna representativa apenas por ser grande. Taxa, número absoluto e porcentagem não são intercambiáveis: quando o total observado muda, mais casos podem coexistir com proporção menor. Pontos percentuais expressam a diferença entre porcentagens, enquanto variação percentual compara essa diferença à base inicial. Antes de combinar números, confira se categorias, recortes e períodos são compatíveis. Uma tendência antes e depois de uma ação não prova sozinha que a ação foi sua causa; outras mudanças e seleção dos grupos podem interferir. Opinião sobre uma política também não mede diretamente sua eficácia. Relatos qualitativos precisam de contexto e não devem ser descartados apenas por não terem números, mas suas conclusões precisam respeitar a pergunta investigada. Contra-argumentar envolve representar uma objeção de modo fiel e responder ao seu ponto relevante; escolher uma versão obviamente absurda não substitui enfrentar limites reais. Evidências contrárias podem levar a restringir a tese ou reconhecer condições de validade. Selecionar apenas resultados favoráveis e ocultar diferenças importantes enfraquece a análise. Fontes independentes e métodos diferentes podem complementar-se, desde que não sejam repetição da mesma notícia. Na versão final, confira cada número, sua base e sua atribuição, e substitua uma falsa precisão por formulação honesta quando não dispuser da fonte. Dados hipotéticos servem para exercícios claramente identificados; não devem ser enviados ao leitor como pesquisas reais.",
        "steps": [
          "Registre fonte, período, universo e método antes de usar uma informação como apoio.",
          "Calcule taxas com suas bases e diferencie porcentagem, pontos percentuais e números absolutos.",
          "Examine alternativas à explicação causal e evidências que possam limitar a tese.",
          "Revise a fidelidade das objeções e retire atribuições ou precisões que não consegue verificar."
        ],
        "example": "Cenário hipotético: depois de uma campanha de divulgação, uma biblioteca registra mais visitas. No mesmo período, uma nova linha de ônibus passou a atender o local. A sequência temporal não basta para atribuir todo o aumento à campanha; investigar acesso, calendário, método de registro e outros fatores ajuda a delimitar a explicação.",
        "pitfall": "Confundir aumento de casos com aumento de taxa, atribuir causalidade a qualquer sequência temporal ou citar instituição real como autora de dado inventado."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um texto defende que um formulário deveria apresentar instruções claras sobre os documentos exigidos. Qual desenvolvimento oferece uma razão pertinente sem inventar pesquisa ou prometer solução total?",
        "hint": "Procure uma ligação explícita entre informação oferecida e planejamento do usuário; a ausência de número não torna uma razão necessariamente inválida.",
        "solution": "C explica um mecanismo pertinente: saber quais documentos reunir pode reduzir tentativas feitas sem a documentação necessária. A inventa aprovação científica total sem fonte. B apresenta o prestígio de uma pessoa sem explicar a relação com o formulário. D conclui que toda desigualdade desaparece, indo muito além da medida. A razão escolhida sustenta uma contribuição possível, sem garantir resultados universais nem substituir avaliação concreta do serviço.",
        "options": [
          "Uma pesquisa não identificada comprovou que formulários claros resolvem 100% de todos os problemas sociais.",
          "Um autor famoso gostava de escrever, portanto qualquer formulário atual já é adequado.",
          "Instruções claras ajudam o usuário a reunir documentos antes do atendimento, podendo evitar tentativas sem a documentação necessária.",
          "Mudar a redação de um formulário elimina automaticamente toda desigualdade de acesso a serviços."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Considere este microtexto fictício e autoral criado para o exercício: Na assembleia do bairro, Lia ficou na porta. Havia cadeiras vazias, mas ela não sabia se sua opinião seria ouvida. Um estudante o usa para discutir participação. Qual integração respeita o alcance da referência?",
        "hint": "O microtexto permite analisar a experiência representada e a diferença entre lugar disponível e acolhimento, mas não é levantamento estatístico da população.",
        "solution": "B analisa elementos presentes: cadeiras disponíveis e dúvida sobre ser ouvida, construindo uma relação com pertencimento e participação. A transforma ficção em estatística universal e C atribui o texto a autor real não informado. D rejeita qualquer análise de ficção por ela não medir população, confundindo interpretação cultural e evidência quantitativa. A leitura proposta é uma interpretação argumentada, sem provar como todas as assembleias reais funcionam.",
        "options": [
          "O microtexto comprova que exatamente 80% dos habitantes nunca participam de qualquer assembleia.",
          "A cena permite discutir como disponibilidade física de lugar não garante percepção de acolhimento e escuta.",
          "A frase foi escrita por um filósofo célebre, mesmo que nenhuma autoria real tenha sido informada.",
          "Como é ficção, o texto não pode ser interpretado nem relacionado a qualquer problema de participação."
        ],
        "correctIndex": 1
      },
      {
        "level": "advanced",
        "prompt": "Dados inteiramente hipotéticos de dois levantamentos usam a mesma definição de caso. No primeiro, foram 40 casos entre 100 participantes; no segundo, 60 entre 200. Os participantes não formam necessariamente amostra representativa da cidade. Qual conclusão respeita números e alcance?",
        "hint": "Divida casos pelo total de cada levantamento. Compare as taxas em pontos percentuais e não confunda a amostra observada com todos os moradores.",
        "solution": "D calcula 40/100 = 40% e 60/200 = 30%, queda de 10 pontos percentuais, embora o número de casos cresça de 40 para 60. A confunde aumento absoluto com aumento da taxa. B toma 60 como porcentagem sem considerar 200 participantes. C inventa representatividade e causa não informadas. Os dados descrevem os dois levantamentos; não provam sozinhos uma tendência municipal nem o efeito de uma intervenção.",
        "options": [
          "A taxa subiu necessariamente porque 60 casos são mais que 40.",
          "A taxa do segundo levantamento é 60%, independentemente do total de participantes.",
          "Os números provam a causa da mudança e representam obrigatoriamente toda a cidade.",
          "A taxa caiu de 40% para 30%, diferença de 10 pontos percentuais, enquanto o total de casos aumentou."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Vocabulário contextual e cognatos",
    "objective": "Usar semelhanças lexicais, estrutura da frase e pistas discursivas para interpretar vocabulário em inglês, distinguindo falsos amigos, polissemia e limites da inferência sem transformar traduções em equivalências universais.",
    "prerequisites": [
      "Leitura de frases simples em inglês",
      "Noções de substantivo, verbo, adjetivo e advérbio",
      "Identificação de negação, contraste e informação explícita"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Semelhança de palavras como hipótese de leitura",
        "explanation": "Na leitura em inglês, palavras próximas de formas portuguesas podem oferecer pontos de apoio: information, cultural, natural e different permitem levantar hipóteses de sentido em muitos contextos. Isso não significa que toda aparência semelhante garanta tradução idêntica. Em sentido linguístico, cognatos se relacionam à origem das palavras; no ensino de leitura, fala-se também em cognatos transparentes e falsos cognatos para discutir semelhanças úteis ou enganosas. É importante não confundir parentesco histórico com identidade de todos os sentidos atuais. A tarefa prática é verificar a palavra na frase. Terminações como -tion e -al podem ajudar a reconhecer famílias, mas não funcionam como tradutores automáticos nem determinam a pronúncia portuguesa da forma inglesa. Observe também a classe gramatical e a posição: cultural pode caracterizar events, enquanto culture pode nomear um campo de práticas e conhecimentos. Prefixos e sufixos oferecem pistas quando a formação é reconhecível: unhappy contrasta com happy e reusable se relaciona a uso repetido. Nem toda palavra pode ser dividida livremente em partes, e o mesmo conjunto de letras pode ter outra história ou função. Ler palavras vizinhas, verbo, determinantes e complementos ajuda a testar o sentido. Em public information about local events, information não informa por si só quais eventos ou horários estão disponíveis; é necessário continuar a leitura. Uma compreensão parcial pode ser suficiente para a pergunta, sem exigir traduzir cada palavra ou autorizar inventar detalhes. Registre novos itens com uma frase e um sentido contextual, e não apenas com uma equivalência isolada. Assim, o vocabulário reconhecido serve de apoio à compreensão, preservando o que o texto afirma e o que ainda precisa de confirmação.",
        "steps": [
          "Use semelhança lexical para formular uma hipótese, sem decidir pela aparência isolada.",
          "Observe classe gramatical, posição e combinações com outras palavras.",
          "Teste pistas de formação apenas quando elas se aplicarem à palavra encontrada.",
          "Releia a frase e registre o sentido contextual, separando informação dada e detalhe não informado."
        ],
        "example": "Trecho hipotético e autoral: The cultural center shares information about local festivals. Visitors can read the schedule at the entrance. Cultural, information e local ajudam na orientação inicial. A segunda frase acrescenta onde consultar a programação; reconhecer cognatos na primeira não permitiria inventar datas ou dizer que todos os eventos são gratuitos.",
        "pitfall": "Transformar uma terminação em regra universal de tradução, pronunciar toda palavra inglesa como portuguesa ou usar cognatos para preencher informações que não aparecem no texto."
      },
      {
        "level": "intermediate",
        "title": "Falsos amigos e palavras com mais de um sentido",
        "explanation": "Falsos amigos são semelhanças entre línguas que podem induzir uma leitura inadequada em determinado uso. No inglês corrente, actually frequentemente corrige uma expectativa ou enfatiza o que é de fato o caso; não equivale automaticamente a atualmente, para o que currently pode ser adequado conforme a frase. Pretend costuma indicar fingir ou representar como se algo fosse verdadeiro, inclusive em brincadeira ou encenação; não é a escolha automática para pretender no sentido de planejar. Library pode indicar biblioteca ou coleção de recursos, e não deve ser traduzida como livraria apenas pela semelhança. Sensible, ao avaliar uma decisão, pode significar sensato ou razoável, sem equivaler necessariamente a sensível. Esses alertas não são proibição de examinar outros sentidos em outras construções. Realize mostra por que listas binárias são limitadas: pode significar perceber ou dar-se conta, mas também concretizar um objetivo ou realizar uma ambição. O complemento e o contexto orientam a escolha. Resume como verbo, em um contexto de atividade interrompida, pode significar retomar; o substantivo résumé, também grafado resume em certos usos, pode indicar currículo e também síntese em contextos específicos. Grafia, função e pronúncia devem ser consultadas conforme a necessidade, sem declarar que uma forma tenha um único significado para sempre. Substituir a palavra por uma hipótese em português pode ajudar, mas uma frase aparentemente plausível ainda pode estar errada; a confirmação exige relação com o conjunto do texto. Quando duas leituras continuam possíveis e a distinção importa, consulte um dicionário confiável e compare os sentidos e as construções, em vez de escolher sempre a primeira entrada.",
        "steps": [
          "Identifique a palavra suspeita e a função que desempenha na frase.",
          "Compare os sentidos possíveis com complementos, contraste, tempo e finalidade do trecho.",
          "Em palavras polissêmicas, evite reduzir toda ocorrência ao mesmo equivalente português.",
          "Se o contexto não decidir o ponto relevante, consulte a entrada e a construção apropriadas."
        ],
        "example": "Trechos hipotéticos e autorais: A) The debate will resume once the audio problem is fixed. B) The applicant attached a resume describing previous jobs. Em A, retomar uma atividade interrompida corresponde ao verbo. Em B, o objeto anexado é um currículo no contexto de candidatura. Uma tradução única baseada apenas nas letras não atende aos dois casos.",
        "pitfall": "Traduzir actually como atualmente sem verificar o uso, dizer que realize nunca pode significar concretizar ou tratar a primeira tradução de dicionário como obrigatória em todos os contextos."
      },
      {
        "level": "advanced",
        "title": "Inferir sentido com pistas e preservar limites",
        "explanation": "Inferência lexical combina hipóteses com evidências linguísticas, não adivinhação livre. Definições, reformulações, exemplos, contraste e consequências podem restringir o sentido. Em uma frase com that is ou in other words, o autor pode explicar uma expressão; such as pode introduzir exemplos. However orienta contraste, e therefore pode apresentar consequência ou conclusão. Esses recursos precisam ser interpretados no encadeamento real: o conectivo não garante sozinho a verdade do argumento. Negação e modalidade também mudam a leitura. Em did not realize, o reconhecimento é negado; em may realize a goal, a realização é uma possibilidade, não um fato já confirmado. Para testar uma alternativa de sentido, preserve sujeitos, tempo, grau de certeza e relação entre informações. Uma paráfrase que troca sometimes por always altera o alcance, mesmo que várias palavras pareçam sinônimas. Colocações, como combinações de verbo e complemento, ajudam a distinguir acepções, sem serem provas absolutas fora do contexto. Também é preciso reconhecer insuficiência: saber que uma sala estava crowded permite entender que havia muitas pessoas, mas não calcular quantas estavam presentes sem outro dado. Um trecho pode sustentar um sentido aproximado suficiente para a compreensão e ainda não permitir decidir uma tradução técnica exata. A consulta ao dicionário pode confirmar grafia, classe, acepções e usos, mas a escolha final continua ligada à frase. O bom leitor explica qual pista sustenta a hipótese e por que as alternativas não se ajustam; não transforma uma associação pessoal em informação do autor nem atribui a toda prova um tipo fixo de vocabulário ou distrator.",
        "steps": [
          "Localize o trecho suficiente para a pergunta e identifique pistas explícitas ou relações discursivas.",
          "Teste hipóteses preservando negação, modalidade, tempo e quantificadores.",
          "Elimine leituras incompatíveis com o complemento ou a informação ao redor, sem acrescentar fatos.",
          "Declare o limite da inferência quando faltar contexto e use consulta lexical quando necessário."
        ],
        "example": "Trecho hipotético e autoral: The old room was cramped: only a narrow passage remained between the desks. The new room offers much more space. A passagem estreita e o contraste com mais espaço sustentam cramped como apertado no contexto. O texto não fornece medidas da sala, causa da mudança ou número exato de ocupantes, e a interpretação não deve criá-los.",
        "pitfall": "Preservar o substantivo mas inverter a negação, transformar possibilidade em certeza ou inferir quantidade e causa exatas apenas de uma descrição qualitativa."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Leia o trecho hipotético e autoral: The museum offers information about temporary exhibitions. The dates change during the year. Qual leitura de temporary é compatível com as duas frases?",
        "hint": "A semelhança com temporário é uma hipótese apoiada pela informação de que as datas mudam; não acrescente gratuidade ou permanência que o trecho não afirma.",
        "solution": "C interpreta temporary como temporárias, compatível com exposições e datas que mudam. A afirma permanência, que contraria a caracterização. B troca o assunto por temperatura, baseando-se em semelhança parcial de letras. D acrescenta entrada gratuita para todas as exposições, informação ausente. O cognato auxilia, mas a segunda frase ajuda a confirmar a leitura e a delimitar o que pode ser concluído.",
        "options": [
          "As exposições são permanentes e suas datas nunca mudam.",
          "O texto informa exclusivamente a temperatura das salas do museu.",
          "O museu informa sobre exposições temporárias, cujas datas variam ao longo do ano.",
          "A entrada em qualquer exposição é gratuita, como demonstrado pela palavra temporary."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "No trecho hipotético e autoral During the drama rehearsal, Leo pretended to be a reporter. He was playing a role, qual sentido de pretended é sustentado pelo contexto?",
        "hint": "Rehearsal e playing a role situam a ação numa encenação; o verbo não informa um plano profissional futuro nem uma reportagem efetivamente publicada.",
        "solution": "A corresponde a fingiu ou representou ser repórter numa encenação. B toma pretend por planejar uma carreira e ignora o ensaio. C transforma o papel interpretado em profissão comprovada, sem apoio. D introduz publicação de reportagem, que não consta do trecho. A leitura depende de drama rehearsal e playing a role; fingir aqui faz parte de atuação e não implica necessariamente intenção de enganar fora da cena.",
        "options": [
          "Fingiu ou representou ser repórter durante uma encenação.",
          "Planejou obrigatoriamente seguir carreira de repórter no futuro.",
          "Comprovou que já trabalhava profissionalmente como repórter.",
          "Publicou uma reportagem real durante o ensaio."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Compare os trechos hipotéticos e autorais: I — After reading the notice, Jo realized that the workshop had moved. II — Through years of practice, Jo realized her ambition to become a violin maker. Qual combinação traduz realized de acordo com cada contexto?",
        "hint": "No primeiro, há reconhecimento de uma informação; no segundo, a ambição é alcançada após prática. O mesmo verbo não exige um único equivalente português.",
        "solution": "D distingue percebeu ou se deu conta em I e concretizou ou realizou sua ambição em II. A impõe concretização à descoberta de que a oficina mudou. B reduz a ambição alcançada a mera percepção, apagando o processo de realização informado. C acrescenta negação aos dois trechos, que não existe. A polissemia é resolvida pelos complementos e pela situação, sem declarar que realize sempre tem um dos dois sentidos independentemente do contexto.",
        "options": [
          "I: concretizou a mudança da oficina; II: concretizou sua ambição.",
          "I: percebeu a mudança; II: apenas percebeu que tinha uma ambição, sem realizá-la.",
          "I e II: não percebeu nem realizou qualquer coisa, pois o verbo exige negação.",
          "I: percebeu que a oficina havia mudado; II: concretizou sua ambição de fabricar violinos."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Conectivos, pronomes e estruturas verbais",
    "objective": "Interpretar relações expressas por conectivos, acompanhar referentes e funções dos pronomes e reconhecer tempo, modo e aspecto em estruturas verbais espanholas, com exemplos contextualizados e atenção à variedade linguística.",
    "prerequisites": [
      "Leitura de frases simples em espanhol",
      "Noções de sujeito, complemento e classes de palavras",
      "Formas básicas de presente, passado e futuro"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conectivos: relação de sentido e forma sonora",
        "explanation": "Conectivos articulam informações, e sua escolha depende da relação de sentido e da construção. Y costuma acrescentar elementos; o apresenta alternativas, que nem sempre são mutuamente exclusivas. Antes do som vocálico inicial /i/, a conjunção y normalmente assume a forma e, como em madres e hijas. A regra não exige que a sílaba seja tônica e depende do som, não apenas da letra. Quando há o início de um ditongo como em hielo, mantém-se y no uso correspondente: agua y hielo. Há construções especiais, como uma pergunta iniciada por ¿Y Inés?, e palavras de pronúncia variável exigem atenção ao modo de dizer. A conjunção o passa a u antes do som inicial /o/, inclusive quando se escreve h antes da vogal: minutos u horas. Não é regra de trocar o por u diante de qualquer vogal, nem de exigir tonicidade. Pero introduz contraste; sino pode substituir um elemento anteriormente negado, como em No es lunes, sino martes. Quando a correção contrapõe orações com verbos em forma pessoal, usa-se sino que na construção geral atual: No llamó, sino que escribió. Há outros usos de sino, como no solo... sino también, de modo que não se deve proibir qualquer ocorrência fora de uma única frase-modelo. Porque pode apresentar causa, para que finalidade, aunque concessão, si condição e cuando relação temporal, conforme o contexto. Comparemos Se quedó porque llovía e Se quedó para que pudiéramos hablar: a primeira explica motivo e a segunda apresenta finalidade. Os conectivos não são palavras intercambiáveis para decorar: alterar um deles pode mudar o raciocínio. A pontuação ajuda a delimitar relações e grupos, mas uma vírgula não substitui a leitura do período completo.",
        "steps": [
          "Identifique a relação: adição, alternativa, contraste, causa, finalidade, condição ou tempo.",
          "Para y/e e o/u, considere o som inicial da palavra seguinte e as condições da construção.",
          "Diferencie contraste com pero e correção com sino ou sino que no contexto.",
          "Leia as duas partes do período para verificar se a ligação preserva o sentido pretendido."
        ],
        "example": "Trechos hipotéticos e autorais: El equipo preparó mapas e instrucciones. Podemos reunirnos hoy u otro día. No faltó material, sino tiempo. O primeiro usa e antes do som /i/ de instrucciones; o segundo usa u antes do /o/ de otro, sem depender de acento tônico; o terceiro corrige o elemento negado.",
        "pitfall": "Inverter y/e e o/u, decidir só pela tonicidade ou traduzir todo sino por um único uso português sem examinar a construção."
      },
      {
        "level": "intermediate",
        "title": "Pronomes, complementos e continuidade referencial",
        "explanation": "Pronomes e expressões relativas ajudam a acompanhar pessoas, objetos e ideias. Sujeitos como yo, tú, él, ella, nosotros e ustedes nem sempre precisam aparecer, pois a forma verbal e o contexto podem recuperá-los; explicitá-los também pode criar contraste. Usted e ustedes se referem a interlocutores, mas se combinam com formas verbais de terceira pessoa. Vosotros e vos pertencem a variedades legítimas do espanhol, com formas próprias; não se deve presumir que toda região use o mesmo tratamento. Em exemplos de variedades, tú tienes e vos tenés podem dirigir-se a uma pessoa, enquanto ustedes tienen e vosotros tenéis podem dirigir-se a um grupo. O voseo atual não se reduz ao tratamento formal arcaico com vos. No esquema básico de complementos, lo, la, los e las podem retomar objeto direto, e le ou les objeto indireto. Há variação de uso, incluindo leísmo, que exige contexto e não se resolve aplicando uma regra única a toda comunidade. Na combinação de dois pronomes em casos como dar algo a alguém, o indireto vem antes do direto: me lo, te la, nos los. Le e les assumem se diante de lo, la, los e las: a partir de Doy el cuaderno a Elena, podem-se construir Le doy el cuaderno e Se lo doy, mantendo contexto para identificar a destinatária. Se nessa combinação não expressa necessariamente reflexividade. Em outros casos, se pode participar de reflexividade, de verbos pronominais ou de construções como Se venden entradas e Se vive bien; esses usos não são todos equivalentes. No uso geral, clíticos precedem muitas formas conjugadas, como Se lo entrego; ligam-se ao infinitivo, gerúndio e imperativo afirmativo em contextos como entregárselo, entregándoselo e entrégaselo. No imperativo negativo, ficam antes: No se lo entregues. Perífrases admitem alternativas em muitos casos, como Lo voy a leer e Voy a leerlo, sem autorizar mover pronomes livremente em toda construção. Relativos conectam uma informação a um antecedente: La autora que llegó admite que referido a pessoa; con quien e con la que podem introduzir outras relações. Cuyo, cuja forma varia, é determinante relativo possessivo e concorda com o possuído: el escritor cuyas novelas leí. Demonstrativos como este, ese e aquel situam referências no espaço ou no discurso; esto, eso e aquello são neutros e podem retomar ideias, não se empregando esto diretamente antes de libro no lugar de este libro.",
        "steps": [
          "Identifique o referente e a função de cada forma, considerando tratamento e variedade.",
          "Na substituição de complementos, diferencie o que é entregue e a quem, preservando a ordem e a mudança le/les para se diante do direto.",
          "Observe forma verbal, polaridade e construção antes de escolher posição dos clíticos.",
          "Em relativos e demonstrativos, confira antecedente, concordância e retomada de ideias, sem proibir que para pessoas."
        ],
        "example": "Trecho hipotético e autoral: Conocí a una investigadora cuyas cartas conserva el museo. Hablé con ella sobre esos documentos. Cuyas concorda com cartas, o elemento possuído; ella retoma investigadora e esos documentos retoma as cartas no encadeamento. A pessoa mais próxima na frase não decide sozinha todo referente.",
        "pitfall": "Usar le lo na combinação padrão, duplicar um complemento sem observar a estrutura da frase ou afirmar que todo se é reflexivo e que o relativo que nunca pode referir-se a pessoas."
      },
      {
        "level": "advanced",
        "title": "Tempo, modo, aspecto e construções verbais",
        "explanation": "Formas verbais expressam tempo, pessoa, modo e perspectiva sobre a ação. Canté apresenta um evento passado delimitado, enquanto cantaba pode descrever hábito ou situação em curso no passado; he cantado usa auxiliar haber e particípio. A distribuição do passado simples e composto varia entre regiões e contextos: não se deve transferir mecanicamente as preferências do português. Haber auxiliar acompanha o sujeito, como hemos leído; no uso existencial impessoal, o padrão geral mantém singular, como hay o había varias opciones. Ser e estar também não se reduzem a permanente e temporário: identificação, caracterização, estado e localização entram em construções distintas, e es listo e está listo podem indicar, respectivamente, inteligência e prontidão. Indicativo e subjuntivo não equivalem simplesmente a real e irreal. Desejos, avaliações, negações, relações temporais e o modo de apresentar informação participam da escolha: Me alegra que estés aquí pode avaliar uma presença real, sem expressar dúvida sobre ela. Em Quiero que vengas, o subjuntivo integra o desejo referente a outra pessoa; em uma expressão de ação do mesmo sujeito, Quiero viajar pode usar infinitivo. Para um evento futuro em subordinada temporal sem antecedente expresso, Cuando llegues, te avisaré usa presente de subjuntivo; numa descrição habitual, Cuando llego, saludo al equipo usa indicativo. Na condicional aberta Si puedo, participaré, a condição emprega indicativo; na hipótese Si pudiera, participaría, o imperfeito de subjuntivo combina-se com condicional. Para hipótese passada não realizada, Si hubiera sabido, habría ayudado é uma construção possível, sem excluir todas as outras combinações admitidas. O condicional também pode servir a cortesia ou futuro visto de um ponto passado. Não se usa automaticamente condicional depois de si em todas essas construções; a função de si e o sentido do período importam. Perífrases combinam formas para indicar perspectivas como intenção ou previsão em ir a + infinitivo, ação em curso em estar + gerundio, repetição em volver a + infinitivo, cessação em dejar de + infinitivo e recência em acabar de + infinitivo no contexto apropriado. Estoy leyendo não é o mesmo que Voy a leer ou He dejado de leer. Interpretar depende da construção completa e do contexto; não exige decorar uma tradução fixa para cada forma nem chamar todo evento futuro de certeza. Em leitura de voz, La carta fue escrita por Ana apresenta passiva com ser e particípio, enquanto Se venden entradas exemplifica passiva com se e concordância com entradas; Se vive bien não apresenta esse mesmo sujeito paciente. Construções modais como tener que + infinitivo podem expressar obrigação e poder + infinitivo pode indicar possibilidade ou capacidade, conforme o contexto. Reconhecer a forma não dispensa interpretar quem age, quem é afetado e qual compromisso modal o enunciado assume.",
        "steps": [
          "Reconheça pessoa e perspectiva temporal, diferenciando evento delimitado, hábito e construção composta.",
          "Interprete modo verbal na construção, sem reduzir subjuntivo a dúvida ou evento falso.",
          "Compare condição aberta, hipótese e relação temporal futura, preservando as formas adequadas ao sentido.",
          "Identifique a perífrase e sua contribuição de duração, início, repetição, cessação ou projeção, sem substituir forma não finita arbitrariamente."
        ],
        "example": "Mensagens hipotéticas e autorais: A) Estoy revisando las notas. B) Voy a revisar las notas. C) He dejado de revisar las notas. Em A, a revisão é apresentada em curso; em B, há projeção de revisão, sem o mesmo valor progressivo; em C, apresenta-se cessação. A semelhança do verbo principal não torna iguais as três perspectivas.",
        "pitfall": "Tratar todo subjuntivo como fato duvidoso, formar si tendría para a hipótese padrão que exige si tuviera ou confundir vou fazer, estou fazendo e deixei de fazer."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Complete o texto hipotético e autoral segundo a construção padrão: Marta preparó té ___ infusiones. No compró café, ___ cacao. Qual sequência mantém a adição antes do som /i/ e a correção do elemento negado?",
        "hint": "A primeira lacuna vem antes de infusiones, iniciada pelo som vocálico /i/; na segunda, contrapõem-se nomes após negação, sem novo verbo em forma pessoal.",
        "solution": "C usa e antes de infusiones e sino para substituir café por cacao no segmento negado. A mantém y no contexto em que ocorre a mudança para e. B usa u, forma de o diante do som /o/, não a conjunção de adição solicitada. D introduz sino que sem uma oração com novo verbo pessoal, inadequado à construção apresentada. O som inicial, e não a tonicidade isolada, orienta a primeira escolha.",
        "options": [
          "y / sino",
          "u / pero",
          "e / sino",
          "e / sino que"
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "No texto hipotético e autoral Marta entrega la carta a Luis. Luego, Marta se la entrega antes de salir, qual análise de se la na segunda frase preserva os referentes dados?",
        "hint": "Identifique a destinatária ou destinatário do ato e o objeto entregue. A forma se pode substituir le quando vem antes de la, sem tornar a ação necessariamente reflexiva.",
        "solution": "A identifica se como forma de le diante de la, retomando Luis como destinatário no contexto, enquanto la retoma la carta. B troca objeto e destinatário. C atribui reflexividade obrigatória apesar de Luis estar indicado como destinatário, e D toma la por artigo diante de verbo, ignorando seu papel de complemento. A frase retoma a entrega; o contexto fornece referentes que a combinação isolada nem sempre revelaria.",
        "options": [
          "Se retoma Luis como destinatário, substituindo le diante de la; la retoma la carta.",
          "Se retoma a carta como objeto direto e la retoma Luis como destinatário masculino.",
          "Se prova obrigatoriamente que Marta entrega a carta a si mesma, ignorando o contexto.",
          "La é apenas artigo do verbo entrega e não retoma nenhum complemento."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Um falante usa o padrão geral para formular uma hipótese presente: Si yo ___ más tiempo, ___ otro curso. O contexto não afirma que ele tenha esse tempo. Qual par completa adequadamente a construção hipotética com imperfeito de subjuntivo e condicional simples?",
        "hint": "A própria pergunta delimita a construção: a condição usa imperfeito de subjuntivo, e a consequência usa condicional simples; não escolha apenas por semelhança com o português.",
        "solution": "D usa tuviera, imperfeito de subjuntivo, e haría, condicional simples, conforme a hipótese e a construção solicitadas. A emprega tendría na condição, fora do padrão delimitado. B troca as funções de condição e consequência. C usa presente e futuro para uma condicional aberta, diferente da construção pedida, embora essa combinação possa ser correta em outro contexto. A análise não transforma uma escolha deste exercício em proibição de todas as variedades ou usos de si.",
        "options": [
          "tendría / haría",
          "tendría / hiciera",
          "tengo / haré",
          "tuviera / haría"
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Eletricidade cotidiana",
    "objective": "Relacionar corrente, tensão e resistência em circuitos ideais; distinguir potência, energia, fator de potência e rendimento; calcular consumo e custo em modelos explícitos de uso cotidiano, sem tratar contas escolares como projetos de instalação.",
    "prerequisites": [
      "Razões, proporções e operações com unidades",
      "Conversão entre minutos e horas e entre watts e quilowatts",
      "Noções de energia e representação textual de circuitos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Carga, corrente, tensão e associações de resistores",
        "explanation": "Corrente elétrica representa fluxo de carga: numa descrição média, I = ΔQ/Δt, em amperes, equivalentes a coulombs por segundo. A corrente não é uma quantidade de energia que o aparelho consome; cargas circulam enquanto energia é transferida e transformada. Tensão é diferença de potencial entre dois pontos, relacionada à energia transferida por unidade de carga, e mede-se em volts. Resistência relaciona tensão e corrente em um componente. Para um resistor ôhmico nas condições consideradas, U = RI descreve proporcionalidade com resistência constante; temperatura e características do material podem alterar o comportamento, e nem todo aparelho é resistor ôhmico. Num circuito ideal de corrente contínua, uma fonte mantém a tensão, fios ideais não apresentam queda de potencial e o modelo deve informar como os elementos se conectam. Resistores em série estão no mesmo caminho sem ramificação entre eles: a corrente é a mesma, as quedas de tensão se somam e a resistência equivalente é a soma das resistências. Em paralelo, os ramos ligam-se aos mesmos dois nós e têm a mesma tensão; a corrente total é a soma das correntes nos ramos e 1/Req = 1/R1 + 1/R2 para dois resistores. Conexão não se define pelo desenho parecer horizontal ou vertical, mas pelos nós e caminhos. Em uma associação paralela de resistências positivas, a equivalente é menor que cada resistência individual. A expressão circuito aberto descreve interrupção do caminho, não ausência obrigatória de tensão entre todos os pontos. Um curto-circuito oferece um caminho de resistência muito baixa e pode produzir corrente elevada, limitada pelas condições reais da fonte e dos condutores. Esses conceitos servem à análise de modelos; não autorizam construir ou modificar ligações em rede elétrica doméstica.",
        "steps": [
          "Identifique a grandeza e sua unidade, distinguindo fluxo de carga e transferência de energia.",
          "Verifique se o componente é tratado como ôhmico e se as condições mantêm a resistência adotada.",
          "Reconheça série por caminho comum e paralelo por dois nós comuns.",
          "Calcule a equivalente e depois tensões e correntes, conferindo conservação de carga e soma das quedas."
        ],
        "example": "Modelo hipotético: resistores de 12 Ω e 6 Ω estão em paralelo numa fonte ideal de 12 V. As correntes são 12/12 = 1 A e 12/6 = 2 A; a fonte fornece 3 A. A equivalente é 12/3 = 4 Ω, menor que 6 Ω. O cálculo compara ramos entre os mesmos dois nós e não descreve montagem em tomada.",
        "pitfall": "Confundir corrente com energia consumida, aplicar U = RI a qualquer aparelho sem hipóteses ou usar a mesma tensão em cada resistor de uma associação em série."
      },
      {
        "level": "intermediate",
        "title": "Potência, energia e leitura de grandezas em corrente alternada",
        "explanation": "Potência é taxa de transformação ou transferência de energia, P = ΔE/Δt; watt equivale a joule por segundo. Energia não é potência: um aparelho de maior potência pode consumir menos energia no período se funcionar por menos tempo. Para potência constante, E = Pt. Potência em quilowatts multiplicada por tempo em horas fornece energia em quilowatt-hora; 1 kWh = 3.600.000 J. Minutos precisam ser convertidos em horas, e 1000 W correspondem a 1 kW. Na corrente contínua de um modelo ideal, a potência elétrica recebida pode ser calculada por P = UI. Para resistor ôhmico, também se obtêm P = RI² e P = U²/R, sempre nas condições do modelo e sem trocar a tensão do componente pela tensão total de outro trecho. Na rede alternada, tensão e corrente variam no tempo. Valores eficazes, ou RMS, não são valores de pico. Para uma carga puramente resistiva, a potência média é Uef Ief. Em uma carga geral de corrente alternada monofásica, define-se potência aparente S = Uef Ief, em volt-ampere, e fator de potência FP = P/S para o receptor considerado, com P sendo potência ativa média em watts. Assim, P = S × FP; não se calcula toda corrente apenas por P/Uef quando FP é diferente de 1. No modelo senoidal, o fator de potência relaciona-se ao cosseno da defasagem; outras formas de onda exigem cuidado e não se resumem sempre a esse ângulo. Fator de potência não é rendimento: relaciona potência ativa e aparente, sem informar diretamente que fração da energia recebida vira o efeito útil desejado. Para energia ativa em um período, use a potência ativa média e o tempo apropriado. A potência indicada numa placa também pode ser nominal ou variar durante a operação; o enunciado deve esclarecer o valor utilizado.",
        "steps": [
          "Separe watts ou quilowatts de joules ou quilowatt-hora.",
          "Converta tempo e potência antes de multiplicar, verificando se o valor é constante ou médio.",
          "Em corrente alternada, distinga valor eficaz, potência aparente, potência ativa e fator de potência.",
          "Use a potência ativa de entrada para calcular energia recebida, sem substituí-la automaticamente por potência útil ou aparente."
        ],
        "example": "Estimativa hipotética: uma lâmpada recebe potência ativa constante de 12 W e funciona cinco horas por dia durante 30 dias. A energia é 0,012 × 5 × 30 = 1,8 kWh. O resultado não é 1,8 kW, pois se trata de energia acumulada; a potência de entrada já foi informada e não precisa ser dividida novamente pelo rendimento.",
        "pitfall": "Tratar kWh como potência, multiplicar watts por minutos como se obtivesse kWh ou confundir potência ativa com aparente e fator de potência com rendimento."
      },
      {
        "level": "advanced",
        "title": "Consumo, rendimento e limites das estimativas cotidianas",
        "explanation": "Uma estimativa de consumo deve delimitar período, tempo efetivo de funcionamento e o significado da potência. Se uma máquina liga e desliga ou modula sua operação, multiplicar a potência máxima por todas as horas pode ser inadequado; use potência média medida ou um ciclo de funcionamento explicitamente modelado. A energia útil é a parte associada ao efeito desejado. Num modelo de conversão com rendimento η = Eútil/Eentrada, pode-se calcular Eentrada = Eútil/η, desde que a energia fornecida inicialmente seja útil. Se o problema já fornece potência elétrica de entrada, primeiro calcule a energia recebida por Pentrada × t; dividir de novo por η contaria perdas duas vezes. Comparar equipamentos exige o mesmo serviço útil e condições comparáveis: apenas menor potência nominal não garante menor consumo para qualquer tarefa. Em bombas de calor, o coeficiente de desempenho compara calor transferido e energia elétrica fornecida; pode superar 1 porque há energia térmica transferida do ambiente, não criação de energia nem rendimento de conversão comum acima de 100%. Para um modelo simples de cobrança, custo variável = energia ativa em kWh × preço hipotético em reais por kWh. Uma conta real pode incluir componentes que esse modelo não representa; não se devem inventar impostos, horários ou regras gerais de tarifação. Se o exercício oferece preços diferentes por período, some os custos de cada parcela, sem calcular uma média simples que ignore durações e consumo. Também não se conclui que alterar o fator de potência de um aparelho reduza automaticamente sua energia ativa por uma proporção igual. A leitura de corrente e potência ajuda a compreender sobrecarga e aquecimento, mas dimensionar instalação depende de condições e requisitos técnicos específicos. Não se usa uma margem universal de 80% como autorização para selecionar fios e proteções. Fusíveis, disjuntores, dispositivos diferenciais e aterramento têm funções distintas; nenhum número de exercício deve servir de instrução para intervir em circuitos energizados.",
        "steps": [
          "Defina o serviço, a potência de entrada e o tempo efetivo ou ciclo de uso.",
          "Aplique rendimento somente à relação útil/entrada correspondente, sem descontar perdas duas vezes.",
          "Calcule custo pelo preço e pelo recorte explicitamente fornecidos, preservando limites de uma estimativa didática.",
          "Separe compreensão física e projeto de instalação; não deduza proteção ou segurança por uma regra numérica isolada."
        ],
        "example": "Modelo hipotético de ciclo: um equipamento recebe 100 W quando seu motor está ligado e zero no restante do tempo; adote funcionamento ligado em 40% das horas, durante 24 horas por dia por 30 dias. A potência média desse modelo é 40 W e a energia é 0,040 × 24 × 30 = 28,8 kWh. O cálculo não promete representar qualquer geladeira real nem inclui outros consumos não modelados.",
        "pitfall": "Dividir por rendimento uma energia de entrada já calculada, comparar serviços úteis diferentes ou apresentar preço e regra de proteção hipotéticos como especificação real de instalação."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num circuito ideal de corrente contínua, uma fonte de 20 V alimenta dois resistores ôhmicos de 6 Ω e 4 Ω em série, sem outros elementos ou ramificações. Qual é a corrente no circuito e a queda de tensão no resistor de 6 Ω?",
        "hint": "Some as resistências em série para obter a corrente comum; depois aplique U = RI ao resistor pedido, sem atribuir a ele toda a tensão da fonte.",
        "solution": "B calcula Req = 6 + 4 = 10 Ω e I = 20/10 = 2 A. A queda no resistor de 6 Ω é 6×2 = 12 V; no de 4 Ω, 8 V, somando 20 V. A aplica toda a tensão ao primeiro resistor e ignora o segundo. C mantém a corrente correta mas atribui os 20 V a apenas um elemento. D imporia 5 A e queda de 30 V no resistor de 6 Ω, incompatíveis com a resistência total de 10 Ω e a fonte de 20 V. Não há necessidade de uma figura para identificar o único caminho informado.",
        "options": [
          "Aproximadamente 3,33 A e 20 V.",
          "2 A e 12 V.",
          "2 A e 20 V.",
          "5 A e 30 V."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Um receptor monofásico hipotético opera com tensão eficaz de 200 V, potência aparente de 800 VA e fator de potência 0,75, todos constantes. Em 10 h de funcionamento, qual é a corrente eficaz e a energia ativa recebida?",
        "hint": "A corrente é S/Uef; a potência ativa é S×FP. Converta essa potência para kW antes de multiplicar pelas horas.",
        "solution": "A calcula Ief = 800/200 = 4 A e P = 800×0,75 = 600 W = 0,6 kW. Em 10 h, E = 0,6×10 = 6 kWh. B usa P/Uef como corrente, ignorando o fator de potência. C usa a potência aparente como se fosse ativa no cálculo de energia, e D combina os dois erros. O fator de potência foi usado para relacionar P e S, não como rendimento útil da máquina.",
        "options": [
          "4 A e 6 kWh.",
          "3 A e 6 kWh.",
          "4 A e 8 kWh.",
          "3 A e 8 kWh."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Num modelo hipotético, a máquina A recebe potência elétrica de entrada constante de 1,2 kW por 4 h ao dia durante 10 dias, com rendimento útil de 75%. A máquina B presta exatamente o mesmo serviço útil total com rendimento de 90%. Adote preço fictício uniforme de R$ 0,80/kWh apenas para a energia de entrada. Quanta energia B recebe e qual a economia em relação a A nesse modelo?",
        "hint": "Calcule a entrada de A por potência e tempo, depois a energia útil por seu rendimento. A entrada de B é essa mesma energia útil dividida por 0,90.",
        "solution": "D calcula entrada de A = 1,2×4×10 = 48 kWh e energia útil = 48×0,75 = 36 kWh. B recebe 36/0,90 = 40 kWh para o mesmo serviço. A diferença de entrada é 8 kWh e a economia fictícia é 8×0,80 = R$ 6,40. A confunde a energia útil com entrada de B. B ignora o maior rendimento ao manter 48 kWh. C divide novamente a entrada de A pelo rendimento e produz 64 kWh, contando perdas duas vezes. Não há preço real ou previsão de fatura nessa comparação.",
        "options": [
          "36 kWh e R$ 9,60.",
          "48 kWh e R$ 0,00.",
          "64 kWh e aumento de R$ 12,80.",
          "40 kWh e R$ 6,40."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Soluções e concentração",
    "objective": "Caracterizar soluções e solubilidade, distinguir as bases das unidades de concentração e resolver conversões, diluições e misturas pela conservação do soluto sob hipóteses explícitas.",
    "prerequisites": [
      "Conceitos de mistura, substância, mol e massa molar",
      "Proporções, porcentagens e operações com unidades",
      "Conversão entre g, mg, kg, mL e L"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Solução, solubilidade e base da concentração",
        "explanation": "Solução é uma mistura homogênea, cuja composição é uniforme na escala considerada. Não se restringe a um sólido dissolvido em água: há soluções com componentes de diferentes estados, e o solvente não é sempre água. Em uma solução aquosa usual, a água é solvente e os componentes dissolvidos são solutos. A identificação de solvente e soluto considera proporções e convenções do sistema; não depende apenas de qual material foi acrescentado primeiro. Dissolver envolve interações entre partículas e pode produzir aquecimento ou resfriamento. Um soluto molecular pode permanecer como moléculas dispersas. Ao dissolver um sal iônico, como NaCl, a rede cristalina se separa em íons solvatados; não se trata de quebrar moléculas discretas de NaCl do cristal. Solubilidade é um limite de concentração de equilíbrio para um soluto e um solvente em condições especificadas. Uma solução saturada está nesse limite; uma insaturada, abaixo dele; uma supersaturada contém mais soluto dissolvido que o equilíbrio permite e não é o estado estável correspondente. Diluída e concentrada são comparações de quantidade relativa, não sinônimos de insaturada e saturada. Temperatura e, especialmente para gases, pressão podem alterar solubilidade. Não é correto afirmar que aquecer sempre aumenta a dissolução de qualquer soluto. Para quantificar composição, a concentração em massa por volume usa C = massa do soluto/volume final da solução. Se a massa está em gramas e o volume em litros, C sai em g/L. O denominador não é necessariamente o volume inicial de água: dissolução e mistura podem alterar volume. Também se deve distinguir quantidade dissolvida e sólido não dissolvido; a massa total despejada num recipiente pode superar a massa que efetivamente integra a solução.",
        "steps": [
          "Identifique componentes, fase homogênea e condições do sistema.",
          "Diferencie concentração comparativa e limite de solubilidade nas condições dadas.",
          "Use apenas a quantidade efetivamente dissolvida quando o problema tratar da solução.",
          "Calcule massa por volume final com unidades compatíveis, sem trocar solução por solvente."
        ],
        "example": "Modelo hipotético: 8 g de um soluto estão completamente dissolvidos em 400 mL de solução, sem perdas. O volume é 0,400 L, portanto C = 8/0,400 = 20 g/L. O resultado não informa sozinho se a solução está saturada, pois seria necessário conhecer a solubilidade nas condições consideradas.",
        "pitfall": "Usar volume de água inicial como se fosse obrigatoriamente o volume final, chamar toda solução concentrada de saturada ou contar precipitado como soluto dissolvido."
      },
      {
        "level": "intermediate",
        "title": "Unidades de concentração e conversões com dados suficientes",
        "explanation": "Unidades de concentração precisam de uma base definida. Porcentagem m/m indica massa de soluto por 100 unidades de massa de solução, como gramas por 100 g; porcentagem m/v, no uso convencional, indica gramas de soluto por 100 mL de solução; porcentagem v/v compara o volume indicado de um componente com o volume final, observadas as condições de medida. Não é correto tratar essas notações como intercambiáveis ou afirmar que toda razão massa/volume seja adimensional. Como 1 g = 1000 mg e 1 L = 1000 mL, 1 g/L = 1 mg/mL. Também 1% m/v corresponde a 10 g/L. Molaridade, ou concentração em quantidade de matéria, é c = n/V, com n em mol e V em litros de solução. Como n = massa/massa molar, uma concentração em g/L dividida pela massa molar em g/mol fornece mol/L. Molalidade tem outra base: mol de soluto por quilograma de solvente, sem usar massa de toda a solução nem seu volume. Fração em massa divide massa do componente pela massa total; fração molar divide seu número de mols pela soma dos mols dos componentes. Para converter base de massa em base de volume, pode ser necessária densidade da solução, relacionando sua massa total e seu volume. A densidade do soluto puro não substitui automaticamente esse dado. Partes por milhão em massa correspondem a uma parte de massa por um milhão de partes de solução, como mg/kg. A aproximação entre mg/L e ppm em massa depende de densidade próxima de 1 kg/L e não é identidade universal. Volumes e concentrações que os utilizam podem variar com temperatura; em sistema sem perda ou reação, frações em massa e molalidade não variam só por expansão térmica. Concentração analítica, neste contexto, expressa a quantidade total do composto introduzido por volume final, independentemente de sua distribuição entre espécies dissolvidas. Para NaCl a 0,200 mol/L, isso representa 0,200 mol de unidades de fórmula por litro; em um modelo de dissociação completa, cada íon teria 0,200 mol/L, e a soma seria 0,400 mol/L, sem mudar a concentração analítica do sal.",
        "steps": [
          "Escreva qual quantidade pertence ao numerador e ao denominador da unidade pedida.",
          "Converta massa e volume antes de calcular e use massa molar quando passar de g para mol.",
          "Para molalidade, separe massa de solvente da massa total de solução.",
          "Só faça conversões entre bases distintas quando densidade ou outros dados necessários estiverem disponíveis."
        ],
        "example": "Modelo hipotético com 100 g de solução: 15 g são soluto e 85 g são solvente. A composição é 15% m/m. Sem volume ou densidade, não se pode concluir que seja 15% m/v ou calcular uma molaridade numérica. Já a massa de solvente usada numa eventual molalidade seria 0,085 kg, não 0,100 kg.",
        "pitfall": "Confundir molaridade e molalidade, usar 100 g de solução como 100 mL sem dado de densidade ou converter todo mg/L em ppm em massa sem considerar a base."
      },
      {
        "level": "advanced",
        "title": "Diluição, mistura e limites dos modelos",
        "explanation": "Diluir é reduzir concentração por adição de solvente, mantendo a quantidade do soluto considerado quando não há reação, perda, precipitação ou outra transformação que a altere. Em uma diluição que conserva os mols de soluto, c1V1 = c2V2; se a grandeza conservada é massa do mesmo soluto e C está em massa por volume, C1V1 = C2V2 também pode ser usada. O volume final precisa ser conhecido ou calculado de acordo com as hipóteses, sem presumir aditividade de todos os líquidos. V1 e V2 são os volumes inicial e final de solução, respectivamente; nenhum deles é, por definição, o volume de solvente acrescentado. Na mistura de soluções do mesmo soluto, some suas quantidades: nfinal = c1V1 + c2V2. Depois divida pelo volume final informado ou legitimamente obtido. A média simples das concentrações só atende a condições particulares, como volumes iguais e aditivos, sem alterações de soluto; não é regra para toda mistura. Se os solutos reagem entre si, a estequiometria deve ser analisada antes da concentração final da espécie remanescente. Se há evaporação apenas do solvente, sem perda de soluto, a quantidade dissolvida pode permanecer até um limite, enquanto a concentração aumenta; saturação e precipitação podem impedir manter toda a massa dissolvida. Relações com propriedades também dependem do modelo: em soluções suficientemente diluídas e próximas do comportamento ideal, efeitos coligativos se relacionam ao número efetivo de partículas, não simplesmente à massa pesada. Dissociação e associação podem mudar esse número. O fator de van't Hoff, i, representa o efeito do número de partículas no modelo coligativo; não é uma regra universal de multiplicação por um inteiro. Mesmo quando o modelo ideal permite usar i vezes a concentração analítica como concentração efetiva de partículas, esse produto não redefine a concentração analítica do composto. Quanto maior a exigência de precisão, mais importam temperatura, composição, interações e definição da espécie. Um cálculo escolar é válido quando suas hipóteses e unidades correspondem ao sistema descrito.",
        "steps": [
          "Identifique qual quantidade e qual espécie se conservam e quais processos podem alterá-las.",
          "Calcule massa ou mols de cada parcela antes de misturar ou diluir.",
          "Use volume final da solução, sem soma automática de volumes nem média simples indevida.",
          "Confira solubilidade, reação, perdas e limites de idealidade antes de extrapolar a fórmula."
        ],
        "example": "Modelo de evaporação: uma solução contém 3 g de soluto não volátil em 100 mL. Se apenas solvente se perde, o volume final é informado como 60 mL e todo o soluto permanece dissolvido, C passa de 30 g/L para 3/0,060 = 50 g/L. O aumento da concentração não criou soluto; depende da permanência dos 3 g na solução.",
        "pitfall": "Aplicar diluição quando o soluto reage ou precipita, tirar média simples de concentrações com volumes diferentes ou usar volume anterior à adição final de solvente."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num modelo hipotético, 12 g de soluto estão completamente dissolvidos em volume final de 200 mL de solução. Qual é a concentração em g/L e em % m/v?",
        "hint": "Converta 200 mL em litros para g/L. Para % m/v, identifique quantos gramas correspondem a 100 mL da solução, não a 100 g.",
        "solution": "B calcula C = 12/0,200 = 60 g/L. Em 100 mL, a massa correspondente é 6 g, portanto 6% m/v. A esquece a diferença entre o volume informado e um litro. C usa 0,020 L, dez vezes menor que 0,200 L. D divide indevidamente a concentração por dez. Sem densidade, não é possível substituir esse resultado por uma porcentagem m/m equivalente.",
        "options": [
          "12 g/L e 1,2% m/v.",
          "60 g/L e 6% m/v.",
          "600 g/L e 60% m/v.",
          "6 g/L e 0,6% m/v."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Uma solução hipotética contém 5,85 g de NaCl totalmente dissolvidos em volume final de 500 mL. Adote massa molar do NaCl igual a 58,5 g/mol. Qual é a concentração analítica de NaCl em mol/L, sem convertê-la em concentração total de íons?",
        "hint": "Calcule a quantidade de NaCl pela massa dividida pela massa molar e depois divida por 0,500 L. A dissociação não duplica a quantidade analítica de NaCl informada.",
        "solution": "D calcula n = 5,85/58,5 = 0,100 mol e c = 0,100/0,500 = 0,200 mol/L. A informa apenas n como se o volume fosse um litro. B toma a massa 5,85 como mols antes de dividir por 0,500 L. C multiplica por dois para contar partículas iônicas num modelo de dissociação completa, mas a pergunta pede concentração analítica de NaCl, não soma das concentrações dos íons.",
        "options": [
          "0,100 mol/L.",
          "11,7 mol/L.",
          "0,400 mol/L.",
          "0,200 mol/L."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "No mesmo modelo de temperatura, misturam-se 150 mL de solução aquosa de NaCl a 0,40 mol/L e 250 mL de solução de NaCl a 0,10 mol/L. Acrescenta-se água até volume final informado de 500 mL. Todo o sal permanece dissolvido, sem reação ou perda. Qual é a concentração analítica final?",
        "hint": "Some os mols provenientes das duas parcelas e use o volume final de 0,500 L. Não é necessário presumir volume aditivo para chegar ao volume final, pois ele foi fornecido.",
        "solution": "C calcula n1 = 0,40×0,150 = 0,060 mol e n2 = 0,10×0,250 = 0,025 mol. O total é 0,085 mol, portanto cfinal = 0,085/0,500 = 0,170 mol/L. A usa média simples de concentrações apesar dos volumes distintos e da adição final de água. B divide pelo total numérico de 0,400 L das parcelas anteriores, ignorando o volume final informado. D apresenta a quantidade em mol como se fosse concentração em um litro.",
        "options": [
          "0,250 mol/L.",
          "0,2125 mol/L.",
          "0,170 mol/L.",
          "0,085 mol/L."
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Ecologia e impactos ambientais",
    "objective": "Relacionar populações, comunidades e ecossistemas, interpretar fluxo de energia e ciclos da matéria e explicar impactos ambientais com mecanismos, evidências e limites das medidas de conservação.",
    "prerequisites": [
      "Fotossíntese, respiração e decomposição",
      "Leitura de proporções, tabelas e relações de causa e efeito",
      "Distinção entre seres vivos e componentes físicos do ambiente"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Organização ecológica, populações e relações",
        "explanation": "Ecologia investiga relações dos organismos entre si e com o ambiente. Uma população reúne indivíduos da mesma espécie em uma área e período; comunidade reúne populações de espécies diferentes. Ecossistema inclui a comunidade e os componentes abióticos com suas interações: água, luz, solo e temperatura não são populações. Ecossistema não tem tamanho fixo obrigatório; pode ser delimitado conforme a pergunta do estudo. Bioma é um conjunto regional amplo de ecossistemas com características ambientais e biológicas relacionadas; biosfera abrange as regiões do planeta onde existe vida. Habitat indica onde um organismo vive; nicho envolve condições, recursos e interações associados à sua existência, e não apenas seu endereço. Densidade populacional é número de indivíduos por área ou volume. O tamanho de uma população varia com nascimentos, mortes, imigração e emigração. Recursos limitados e interações podem restringir crescimento; capacidade de suporte é uma propriedade do sistema e de suas condições, não uma constante eterna. Na competição, organismos disputam recursos limitados e ambos podem ter custos. Na predação e herbivoria há consumo de outros organismos ou partes deles; no parasitismo, o parasita se beneficia em prejuízo do hospedeiro. Mutualismo beneficia os participantes, enquanto comensalismo descreve benefício de um sem efeito relevante detectado no outro, no contexto considerado. Essas classificações não significam que a natureza busque equilíbrio moral ou que toda interação tenha intensidade invariável. Mudanças nas condições podem alterar resultados e abundâncias.",
        "steps": [
          "Delimite espécie, área e período da população estudada.",
          "Distinga comunidade de ecossistema pela inclusão dos fatores abióticos.",
          "Relacione habitat, recursos e interações sem reduzir nicho a um local.",
          "Identifique entradas e saídas de indivíduos e os efeitos das relações ecológicas."
        ],
        "example": "Em um modelo hipotético, uma população de 80 indivíduos tem 12 nascimentos, 7 mortes, 4 imigrantes e 9 emigrantes no período. O tamanho final é 80 + 12 − 7 + 4 − 9 = 80. Houve renovação e movimento de indivíduos, embora o saldo seja zero; isso não prova ausência de processos ecológicos.",
        "pitfall": "Chamar um conjunto de espécies de população, incluir água como parte da comunidade ou supor que saldo populacional zero signifique que ninguém nasceu ou morreu."
      },
      {
        "level": "intermediate",
        "title": "Teias alimentares, energia e ciclos da matéria",
        "explanation": "Em uma cadeia alimentar, a seta do alimento para o consumidor indica transferência de matéria e energia. Produtores sintetizam matéria orgânica a partir de fontes inorgânicas; na fotossíntese usam luz, e há quimioautótrofos que obtêm energia de reações químicas. Consumidores usam matéria orgânica de outros organismos. Decompositores, como muitos fungos e bactérias, atuam sobre restos e resíduos de vários níveis, devolvendo nutrientes a processos do ambiente; não ocupam apenas o último elo de uma fila. Uma teia reúne várias relações alimentares: um onívoro pode participar de mais de um nível trófico. Energia flui pelos processos e parte é dissipada como calor; ela não é reciclada pelos decompositores. A matéria circula entre reservatórios e organismos, mas um ecossistema local pode importar e exportar matéria. Não se deve interpretar ciclo como um circuito local perfeitamente fechado. Pirâmides de energia usam energia transferida ou produzida por área e tempo e não se invertem entre níveis sucessivos. Pirâmides de biomassa medem estoque em determinado momento e podem ser invertidas, como em certos sistemas aquáticos com renovação rápida de produtores. A eficiência de transferência não é universalmente 10%; use o valor informado, quando o exercício estabelecer um modelo. No ciclo do carbono, fotossíntese incorpora carbono inorgânico, enquanto respiração, decomposição e combustão podem devolver CO2. No nitrogênio, fixação converte N2 em formas assimiláveis; nitrificação transforma amônio em nitrito e nitrato; desnitrificação pode devolver N2 à atmosfera. Plantas não utilizam diretamente todo o N2 atmosférico como nutriente. O fósforo circula por rochas, solo, água e organismos, sem uma fase gasosa importante no modelo escolar usual.",
        "steps": [
          "Leia o sentido das setas e identifique a fonte de matéria de cada consumidor.",
          "Separe fluxo de energia de circulação de elementos químicos.",
          "Confira se o gráfico mede energia por tempo ou estoque de biomassa.",
          "Use a eficiência informada e relacione cada transformação ao ciclo correto."
        ],
        "example": "Modelo hipotético: produtores disponibilizam 800 unidades de energia por área e tempo, com transferência de 15% ao consumidor primário e 20% deste ao secundário. Chegam 120 e depois 24 unidades, respectivamente. Aplicar automaticamente 10% em cada etapa produziria outro resultado e ignoraria as hipóteses fornecidas.",
        "pitfall": "Reciclar energia no desenho de uma teia, tratar decompositores como consumidores apenas do topo ou aplicar a regra dos 10% a todo ecossistema real."
      },
      {
        "level": "advanced",
        "title": "Mecanismos de impacto e conservação com evidências",
        "explanation": "Um impacto deve ser explicado por mecanismo e escala, não apenas por um rótulo de dano. O excesso de nutrientes que chega a um corpo de água pode favorecer crescimento de algas e outros produtores. A respiração e a decomposição da matéria orgânica podem elevar o consumo de oxigênio e causar hipóxia: essa sequência caracteriza um mecanismo de eutrofização. Não significa que algas jamais produzam oxigênio ou que toda água esverdeada tenha a mesma causa. Alguns contaminantes persistentes podem se acumular no organismo ao longo do tempo, processo chamado bioacumulação; quando suas concentrações aumentam entre níveis tróficos, fala-se em biomagnificação. Isso não acontece igualmente com toda substância e depende de propriedades químicas, assimilação e eliminação. Perda e fragmentação de habitat podem reduzir áreas disponíveis, conectividade e fluxo gênico e aumentar efeitos de borda. Espécies introduzidas são chamadas exóticas em relação à região; nem toda exótica se torna invasora, mas algumas se estabelecem e causam impactos. Sobre-exploração e mudanças climáticas podem interagir com pressões locais, tornando insuficiente avaliar cada fator isoladamente. Efeito estufa natural participa das condições térmicas da Terra; sua intensificação pelo aumento de gases de efeito estufa não se confunde com a destruição do ozônio estratosférico. Conservação inclui proteger áreas, reduzir fontes de pressão e restaurar processos e habitats. Corredores podem favorecer deslocamento e conectividade, mas não garantem solução universal; efeitos dependem de espécies e paisagem. Restauração não equivale a substituir uma floresta diversa por qualquer plantação. Para avaliar uma medida, defina indicadores, condição inicial, comparação adequada e tempo de acompanhamento. Correlação isolada não demonstra causalidade; dados hipotéticos não devem ser apresentados como medição real de uma bacia ou instituição.",
        "steps": [
          "Ligue a pressão ambiental ao processo ecológico e ao efeito observado.",
          "Distinga nutrientes, contaminantes persistentes e perda de habitat.",
          "Escolha medidas que reduzam a causa e considere efeitos combinados e limitações.",
          "Compare indicadores antes e depois com controles pertinentes, sem transformar associação em prova causal automática."
        ],
        "example": "Em uma paisagem hipotética, dois fragmentos florestais mantêm a mesma área total após a abertura de uma estrada, mas o deslocamento de uma espécie entre eles cai. Área total preservada não prova conectividade preservada. Uma passagem de fauna pode ser avaliada por uso e sobrevivência, com acompanhamento; sua simples construção não demonstra recuperação de todos os processos.",
        "pitfall": "Usar área plantada como prova suficiente de biodiversidade restaurada, dizer que todo contaminante se magnifica ou atribuir efeitos locais a uma única causa sem evidência."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um estudo hipotético registra as populações de plantas, aves e insetos de um parque e analisa suas interações com luz, água e solo. Qual nível inclui explicitamente todos esses componentes?",
        "hint": "Comunidade reúne populações, enquanto a inclusão das interações com fatores abióticos amplia o nível considerado.",
        "solution": "C é ecossistema, pois inclui seres vivos, fatores abióticos e suas interações. A seria um conjunto de indivíduos da mesma espécie. B inclui as populações de espécies diferentes, mas não engloba por si só o componente abiótico. D descreve uma unidade regional ampla e não é o nome solicitado para a integração descrita no parque.",
        "options": [
          "População.",
          "Comunidade.",
          "Ecossistema.",
          "Bioma."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Em uma cadeia hipotética, produtores disponibilizam 2.000 kJ por metro quadrado por ano. A transferência dos produtores aos consumidores primários é de 12%; destes aos secundários, de 25%. Qual energia chega aos consumidores secundários no modelo?",
        "hint": "Calcule a parcela transferida em cada etapa sucessiva. A segunda porcentagem incide sobre a energia dos primários, não sobre os produtores.",
        "solution": "B resulta de 2.000 × 0,12 = 240 e 240 × 0,25 = 60 kJ por metro quadrado por ano. A corresponde aos primários, sem aplicar a segunda transferência. C aplica apenas 25% à energia dos produtores. D impõe 10% em duas etapas, embora o enunciado tenha fornecido eficiências diferentes.",
        "options": [
          "240 kJ por metro quadrado por ano.",
          "60 kJ por metro quadrado por ano.",
          "500 kJ por metro quadrado por ano.",
          "20 kJ por metro quadrado por ano."
        ],
        "correctIndex": 1
      },
      {
        "level": "advanced",
        "prompt": "Em um lago hipotético, o aporte de nutrientes aumenta, ocorre proliferação de algas e a decomposição posterior eleva o consumo de oxigênio. O lago apresenta hipóxia e mortandade de peixes. Qual interpretação e medida atuam de modo mais direto sobre o mecanismo descrito?",
        "hint": "Identifique a entrada que desencadeia a sequência e diferencie excesso de nutrientes de concentração de substâncias persistentes ao longo da teia.",
        "solution": "D reconhece a eutrofização e reduz a entrada de nutrientes que sustenta o processo, por exemplo com tratamento adequado dos efluentes que os transportam. A confunde esse mecanismo com biomagnificação e ignora sua causa. B elimina consumidores sem reduzir a carga e ainda atribui a eles exclusividade da respiração. C confunde perda de ozônio com processo aquático e propõe acréscimo do fator que agravou o problema.",
        "options": [
          "É biomagnificação; retirar apenas predadores elimina a carga de nutrientes.",
          "É respiração exclusiva de peixes; eliminar peixes controla a causa do aporte.",
          "É destruição do ozônio; acrescentar nutrientes recupera o oxigênio dissolvido.",
          "É eutrofização; reduzir o aporte de nutrientes atua sobre a causa descrita."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Cidadania e direitos",
    "objective": "Distinguir direitos civis, políticos e sociais, analisar mudanças e exclusões na cidadania brasileira e comparar reconhecimento jurídico, participação e acesso efetivo a direitos.",
    "prerequisites": [
      "Cronologia geral do Brasil entre Império e República",
      "Noções de Constituição, Estado e democracia",
      "Leitura de fontes e comparação de contextos históricos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Dimensões da cidadania e limites do sufrágio no século XIX",
        "explanation": "Cidadania envolve pertencimento político, direitos, deveres e formas de participação na vida coletiva. Direitos civis se relacionam a liberdades e garantias, como expressão e proteção jurídica; direitos políticos, à participação no poder, inclusive voto e candidatura; direitos sociais, a condições de vida e proteção, como educação e saúde. Essa distinção ajuda a analisar processos, mas não estabelece uma sequência universal obrigatória nem separa direitos que, na prática, se sustentam mutuamente. Na história brasileira, o reconhecimento formal de igualdade conviveu com exclusões. O Império manteve a escravidão e um sistema eleitoral restrito, com critérios de renda e eleições inicialmente indiretas. O requisito censitário dizia respeito à renda; não se deve confundi-lo com um censo demográfico. A Constituição de 1824 não criou uma proibição geral de voto dos analfabetos: essa exclusão foi estabelecida pela reforma eleitoral de 1881, a Lei Saraiva. Essa reforma introduziu eleição direta e título eleitoral, mas manteve exigência de renda e restringiu o eleitorado. Por isso, eleição direta não significa automaticamente sufrágio universal. A Constituição de 1891 suprimiu a exigência censitária de renda, mas manteve outras barreiras, inclusive aos analfabetos, e o voto feminino não foi reconhecido nacionalmente naquele momento. O fim de uma restrição não elimina todas as formas de exclusão. A abolição da escravidão em 1888 foi uma ruptura fundamental da ordem jurídica, mas não tornou automaticamente igualitário o acesso à terra, renda, educação ou participação. Para interpretar uma fonte, pergunte quem tinha o direito, em que condições e quais grupos permaneciam excluídos.",
        "steps": [
          "Classifique a dimensão do direito sem supor uma cronologia universal.",
          "Compare regras e grupos incluídos ou excluídos em cada momento.",
          "Distinga voto direto, critério de renda e exigência de alfabetização.",
          "Separe transformação jurídica de acesso efetivo às condições de cidadania."
        ],
        "example": "Duas reformas hipotéticas mostram a diferença: uma elimina votação em dois graus, mas mantém renda mínima; outra elimina renda mínima, mas preserva barreiras de alfabetização. Ambas alteram regras importantes, porém nenhuma, só por isso, permite concluir que todas as pessoas adultas foram incluídas.",
        "pitfall": "Dizer que voto direto e universal são sinônimos, que a Constituição de 1824 já proibiu genericamente o voto dos analfabetos ou que o fim da renda mínima eliminou todas as exclusões."
      },
      {
        "level": "intermediate",
        "title": "Conquistas, restrições e redemocratização no século XX",
        "explanation": "A ampliação da cidadania brasileira não foi uma marcha sem recuos. Mobilizações de mulheres, trabalhadores e outros grupos participaram das disputas por direitos; mudanças legais não devem ser explicadas apenas como dádiva de governantes. O Código Eleitoral de 1932 reconheceu nacionalmente o voto feminino e instituiu a Justiça Eleitoral e o voto secreto. Isso não incluiu os analfabetos no eleitorado, nem tornou imediatamente iguais todas as condições de participação. A Constituição de 1934 incorporou o sufrágio feminino. A expansão da legislação trabalhista e a CLT de 1943 fortaleceram direitos sociais para segmentos do trabalho, com limites de cobertura no período. Essa expansão coexistiu com o autoritarismo do Estado Novo, de 1937 a 1945: uma conquista social não prova, por si, liberdade política plena. Na ordem constitucional de 1946 havia eleições presidenciais diretas e voto secreto, mas persistia a exclusão eleitoral dos analfabetos. Não é correto transportar o Colégio Eleitoral da ditadura para todo o período anterior. A ditadura iniciada em 1964 restringiu direitos, cassou mandatos e empregou censura e repressão; a redemocratização resultou de processos e disputas sociais e institucionais. O reconhecimento do voto dos analfabetos ocorreu na Emenda Constitucional nº 25, de 1985, antes da Constituição de 1988. Esta consolidou a regra de voto facultativo para analfabetos e incluiu a possibilidade de voto aos 16 e 17 anos. A eleição presidencial direta de 1989 encerrou o longo intervalo sem escolha direta do presidente pelo eleitorado. Distinguir essas datas evita atribuir toda conquista a um único texto constitucional.",
        "steps": [
          "Relacione mobilização social e mudança institucional sem apagar os sujeitos envolvidos.",
          "Diferencie reconhecimento do voto feminino de inclusão eleitoral de todos os adultos.",
          "Compare expansão social e restrições políticas em regimes distintos.",
          "Organize os marcos de 1932, 1946, 1964, 1985, 1988 e 1989 sem fundi-los."
        ],
        "example": "Uma mulher alfabetizada adulta em 1955 podia participar das eleições presidenciais diretas, atendidas as regras de alistamento. Outra mulher adulta, analfabeta, encontrava a barreira da alfabetização. O contraste mostra que o reconhecimento do voto feminino não havia removido todas as exclusões políticas.",
        "pitfall": "Afirmar que não existia eleição presidencial direta sob a Constituição de 1946 ou que os analfabetos só obtiveram direito ao voto pela primeira vez em 1988."
      },
      {
        "level": "advanced",
        "title": "Direito formal, participação e efetividade",
        "explanation": "A Constituição de 1988 organiza um Estado Democrático de Direito e reconhece um amplo conjunto de direitos. A análise histórica precisa distinguir a previsão normativa das condições concretas de exercício. Igualdade perante a lei é indispensável, mas não informa sozinha se todas as pessoas conseguem acesso à justiça, educação ou serviços públicos. Uma política pode ampliar cobertura e ainda enfrentar desigualdades territoriais e sociais; avaliar isso exige indicadores pertinentes e fontes identificadas, sem inventar estatísticas. O exercício da cidadania também ultrapassa a eleição periódica: associações, reivindicações coletivas, debate público e fiscalização de políticas integram a vida democrática, observadas as garantias e regras correspondentes. No sistema constitucional brasileiro, plebiscito e referendo são instrumentos de consulta: o primeiro antecede a decisão política submetida à consulta e o segundo examina posteriormente um ato normativo ou administrativo. Iniciativa popular permite apresentar proposição legislativa mediante requisitos legais, e não aprovar automaticamente uma lei sem tramitação. Em eleições, direito de votar e direito de candidatar-se são distintos. O voto facultativo dos analfabetos não elimina a inelegibilidade prevista constitucionalmente para esse grupo. Também é errado afirmar que toda pessoa pode votar ou candidatar-se sem condições: há regras de nacionalidade, idade e alistamento, entre outras. Na comparação de fontes, separe o que diz a norma, a interpretação do autor e o resultado observado. Debater prioridades de políticas não autoriza inventar decisões judiciais ou afirmar que qualquer demanda individual será automaticamente acolhida. Reconhecer limites e conflitos ajuda a estudar a efetividade de direitos sem transformar uma explicação histórica em promessa de resultado jurídico.",
        "steps": [
          "Identifique a norma e o período antes de comparar práticas sociais.",
          "Diferencie reconhecimento jurídico, acesso efetivo e evidência usada na avaliação.",
          "Separe votar, candidatar-se, consultar o eleitorado e propor uma lei.",
          "Analise participação e desigualdade com fontes, sem fabricar estatísticas ou precedentes."
        ],
        "example": "Em uma situação hipotética, uma lei prevê acesso a um serviço, mas moradores de bairros afastados enfrentam deslocamentos que dificultam utilizá-lo. A existência da norma e o obstáculo de acesso podem ser verdadeiros ao mesmo tempo. Avaliar a efetividade exige observar disponibilidade e atendimento, sem concluir que o direito deixou de existir por causa da dificuldade.",
        "pitfall": "Tratar aprovação de um direito como prova de acesso integral, confundir iniciativa popular com aprovação automática ou concluir que poder votar significa poder disputar qualquer cargo."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A Lei Saraiva, de 1881, introduziu eleições diretas no Império e manteve critérios de renda, além de excluir analfabetos do eleitorado. Qual conclusão distingue corretamente forma de eleição e alcance da participação?",
        "hint": "Voto direto indica como se escolhe o representante; sufrágio universal trata do alcance da inclusão eleitoral.",
        "solution": "C distingue os critérios: a escolha direta dispensou o sistema eleitoral em graus, mas não removeu renda e alfabetização como barreiras. A confunde eleição direta com participação universal. B atribui à reforma a eliminação de uma exigência que o enunciado informa ter sido mantida. D confunde o século XIX com o reconhecimento nacional do voto feminino em 1932.",
        "options": [
          "O voto direto tornou automaticamente universal a participação adulta.",
          "A reforma eliminou a exigência de renda como condição eleitoral.",
          "A eleição tornou-se direta sem que isso significasse sufrágio universal.",
          "A reforma reconheceu nacionalmente o voto feminino."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Qual sequência descreve corretamente o voto dos analfabetos na transição democrática brasileira?",
        "hint": "Identifique o marco de 1985 e sua relação com a Constituição promulgada três anos depois.",
        "solution": "A identifica a Emenda Constitucional nº 25 de 1985 como marco de reconhecimento do voto dos analfabetos e a Constituição de 1988 como consolidação de sua facultatividade. B antecipa essa inclusão para 1946, que mantinha a exclusão. C ignora a mudança de 1985. D confunde o reconhecimento do voto feminino em 1932 com uma inclusão dos analfabetos que não ocorreu naquele código.",
        "options": [
          "Reconhecimento em 1985 pela Emenda nº 25 e voto facultativo consolidado em 1988.",
          "Inclusão em 1946 e revogação dessa inclusão em 1985.",
          "Primeiro reconhecimento em 1988, sem marco anterior em 1985.",
          "Inclusão dos analfabetos pelo Código Eleitoral de 1932."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Uma campanha hipotética afirma que, porque a Constituição permite voto facultativo aos analfabetos, eles também podem candidatar-se aos cargos eletivos nas mesmas condições. Qual avaliação está correta segundo a distinção constitucional entre votar e ser eleito?",
        "hint": "Direito de votar e elegibilidade são dimensões distintas: conferir um deles não dispensa a regra aplicável ao outro.",
        "solution": "D separa o voto facultativo da inelegibilidade constitucional dos analfabetos. A confunde capacidade eleitoral ativa com possibilidade de candidatura. B nega indevidamente o direito de votar. C inventa uma exceção por aprovação em plebiscito, instrumento que não substitui os requisitos constitucionais de elegibilidade.",
        "options": [
          "A conclusão é válida, pois todo eleitor tem elegibilidade irrestrita.",
          "A conclusão é falsa porque analfabetos não podem votar.",
          "A candidatura passa a ser válida se aprovada em plebiscito local.",
          "A conclusão confunde voto facultativo com elegibilidade; analfabetos são inelegíveis."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Urbanização e globalização",
    "objective": "Distinguir urbanização e crescimento urbano, interpretar redes e fluxos da globalização e avaliar segregação, mobilidade e riscos com dados e critérios espaciais explícitos.",
    "prerequisites": [
      "Proporções, porcentagens e leitura de mapas",
      "Noções de atividades econômicas e migração",
      "Distinção entre população absoluta e participação relativa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Urbanização, crescimento urbano e integração espacial",
        "explanation": "Urbanização envolve a ampliação da importância das cidades na população e na organização social e econômica. Para comparar quantitativamente, o grau de urbanização é a parcela da população total classificada como urbana em um dado momento: população urbana dividida pela total, vezes 100. A expressão taxa de urbanização também é usada para esse indicador; por isso é necessário ler a definição e não impor uma nomenclatura única a toda fonte. Crescimento da população urbana é a variação de seu número de habitantes, que pode aumentar mesmo quando sua participação no total diminui. Migração, crescimento vegetativo e mudanças de classificação territorial podem contribuir para a variação observada. No Brasil, industrialização, transformações do campo, concentração fundiária, oferta desigual de serviços e movimentos populacionais participaram do processo histórico, com diferenças regionais. Não há uma única causa que explique toda migração, nem uma sequência idêntica para todos os países. Conurbação é a união física de manchas urbanizadas antes separadas, sem extinguir automaticamente limites municipais. Deslocamento pendular é o movimento recorrente entre locais de moradia e trabalho ou estudo, sem mudança permanente de residência por definição. Integração funcional pode existir entre cidades mesmo sem continuidade física completa. Município é unidade político-administrativa, enquanto cidade, área urbanizada e arranjo populacional são recortes distintos. A pesquisa sobre arranjos do IBGE considera contiguidade de áreas urbanizadas e deslocamentos para trabalho e estudo. Não confunda uma classificação estatística com a instituição legal de região metropolitana, nem suponha que qualquer agrupamento de cidades forme automaticamente uma nova unidade administrativa.",
        "steps": [
          "Identifique o recorte e a definição de urbano usada na fonte.",
          "Calcule separadamente população absoluta e proporção urbana.",
          "Distinga migração permanente de deslocamento pendular.",
          "Separe continuidade física, integração funcional e limites administrativos."
        ],
        "example": "Em um cenário hipotético, a população urbana passa de 30 mil para 40 mil, enquanto a população total passa de 50 mil para 80 mil. A população urbana cresceu, mas sua participação caiu de 60% para 50%. Não há contradição: os denominadores e as grandezas comparadas são diferentes.",
        "pitfall": "Deduzir aumento do grau de urbanização só porque aumentou o número de moradores urbanos, ou afirmar que conurbação funde juridicamente municípios."
      },
      {
        "level": "intermediate",
        "title": "Globalização, redes urbanas e funções de comando",
        "explanation": "Globalização articula territórios por fluxos de mercadorias, capitais, informações, tecnologias e pessoas. Integração não significa distribuição igual de infraestrutura e poder: redes são seletivas e podem aproximar pontos distantes enquanto mantêm barreiras para outros grupos. Cidades participam dessas redes com funções diferentes, como produção, logística, gestão empresarial, pesquisa e serviços especializados. Hierarquia urbana não pode ser lida apenas como uma lista de tamanho populacional. Na REGIC do IBGE, a centralidade se relaciona à gestão e à oferta de bens e serviços que atraem ou articulam outros centros. Uma cidade pode exercer influência regional relevante sem ser a mais populosa; centros menores também mantêm vínculos especializados com circuitos internacionais. Metrópole é um centro de forte articulação e influência urbana, enquanto metropolização envolve expansão e reorganização dessas funções e relações. Cidade global destaca funções de conexão e comando em redes mundiais, não apenas população muito numerosa. Dispersão de unidades produtivas pode coexistir com concentração de decisões e finanças em outros lugares. Uma cadeia produtiva pode reunir pesquisa, fabricação e distribuição em diferentes territórios; as vantagens capturadas e as condições de trabalho não são necessariamente iguais. Infraestrutura digital não eliminou distância física, transporte, fronteiras ou conflitos: depende de energia, equipamentos, conectividade e acesso. Ao interpretar um mapa de fluxos, confira o que a espessura da linha representa, qual período foi medido e se a ligação indica mercadorias, passageiros ou decisões. Uma conexão isolada não demonstra que todo o território atingiu o mesmo grau de integração ou renda.",
        "steps": [
          "Identifique o tipo de fluxo e os centros conectados no mapa.",
          "Distinga tamanho populacional de influência e funções urbanas.",
          "Localize decisões, produção e distribuição sem presumir coincidência espacial.",
          "Avalie integração desigual e dependência de infraestrutura material e digital."
        ],
        "example": "Uma empresa hipotética mantém decisões financeiras em uma metrópole, pesquisa em uma cidade universitária e montagem em outro país. A dispersão da fabricação não prova a dispersão do comando. Para estudar a rede, é preciso acompanhar tanto produtos quanto informações e decisões entre os locais.",
        "pitfall": "Medir toda centralidade só pelo número de habitantes, supor que apenas capitais participam de redes internacionais ou afirmar que internet tornou irrelevante a infraestrutura física."
      },
      {
        "level": "advanced",
        "title": "Segregação, acessibilidade e riscos urbanos",
        "explanation": "Segregação socioespacial envolve distribuição desigual de grupos, recursos e oportunidades no espaço. Preço da terra, mercado habitacional, discriminação, infraestrutura e decisões públicas contribuem para padrões que variam entre cidades; periferia não significa obrigatoriamente pobreza, e distância ao centro não explica sozinha todos os contrastes. Acessibilidade é a possibilidade de alcançar atividades e serviços, considerando tempo, custo, oferta e condições de uso; mobilidade descreve deslocamentos e condições de realizá-los. Uma obra que aumenta velocidade de veículos pode não melhorar acesso de quem depende de transporte coletivo ou enfrenta barreiras físicas. Expansão urbana dispersa pode alongar percursos e elevar custos de infraestrutura, mas os efeitos dependem da localização de moradia, emprego e serviços. Impermeabilização pode aumentar escoamento superficial; perda de vegetação, materiais e calor das atividades urbanas podem favorecer ilhas de calor. Isso não implica que toda cidade tenha o mesmo clima interno ou que uma única obra resolva inundações. Risco envolve ameaça, exposição e vulnerabilidade: um fenômeno físico não determina sozinho a distribuição de danos. Pessoas com menor acesso a moradia segura e infraestrutura podem enfrentar consequências mais graves. Problemas como transporte e drenagem frequentemente atravessam limites municipais e exigem coordenação em escala compatível. Avaliar uma intervenção inclui segurança, acesso ao trabalho, redes sociais e distribuição de custos e benefícios. Reduzir exposição a um perigo enquanto se ampliam deslocamentos e dificuldades de acesso demanda análise explícita; não basta contabilizar unidades habitacionais entregues. Políticas devem ser avaliadas por resultados acompanhados, com participação dos afetados e sem atribuir estatísticas inventadas a cidades reais.",
        "steps": [
          "Mapeie moradia, oportunidades, tempo e custo de acesso.",
          "Explique o mecanismo ambiental e as condições locais de exposição.",
          "Compare benefícios e encargos para grupos e municípios diferentes.",
          "Avalie resultados sociais e ambientais, sem trocar um indicador isolado por sucesso integral."
        ],
        "example": "Num modelo hipotético, uma nova via reduz o trajeto de carro, mas o serviço de ônibus fica mais raro e o tempo de acesso ao trabalho de seus usuários aumenta. Melhora para um modo de transporte não demonstra melhoria universal de acessibilidade. A avaliação precisa distinguir grupos, custos e oportunidades alcançadas.",
        "pitfall": "Naturalizar risco como destino inevitável da população pobre, tratar periferia como categoria social uniforme ou medir melhoria urbana apenas pela velocidade dos automóveis."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em um território hipotético de recorte e classificação constantes, a população urbana passa de 60 mil para 72 mil, e a população total passa de 100 mil para 150 mil. Qual interpretação distingue crescimento urbano e grau de urbanização?",
        "hint": "Calcule a população urbana como porcentagem do total nos dois momentos e compare isso ao aumento absoluto dos moradores urbanos.",
        "solution": "B calcula grau inicial 60/100 = 60% e final 72/150 = 48%: queda de 12 pontos percentuais, embora a população urbana tenha aumentado em 12 mil. A confunde a variação urbana absoluta com participação. C aplica o crescimento de 20% dos moradores urbanos diretamente ao grau inicial, ignorando o total. D nega o aumento absoluto informado.",
        "options": [
          "O grau de urbanização cresceu porque houve mais moradores urbanos.",
          "A população urbana cresceu, mas o grau caiu de 60% para 48%, queda de 12 pontos percentuais.",
          "O grau final é 72%, pois a população urbana cresceu 20%.",
          "A população urbana diminuiu, pois o grau de urbanização caiu."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Em uma rede hipotética, a cidade A tem 300 mil habitantes e concentra gestão de empresas e serviços especializados procurados por vários municípios. A cidade B tem 500 mil habitantes, mas exerce menor influência nesses fluxos. Qual conclusão é sustentada pelos dados?",
        "hint": "O enunciado compara funções e atração de fluxos, não apenas o número de moradores. Não há informação para classificar formalmente essas cidades na REGIC.",
        "solution": "D reconhece que influência e centralidade nos fluxos descritos não decorrem exclusivamente da população. A impõe ordem apenas demográfica. B elimina conexões que o enunciado afirma existirem. C atribui uma classe formal da REGIC sem levantamento e critérios suficientes; o exemplo é hipotético e não autoriza essa classificação específica.",
        "options": [
          "B necessariamente comanda A porque é mais populosa.",
          "A não pode influenciar outras cidades por ter menos de um milhão de habitantes.",
          "Os dados bastam para declarar A uma metrópole nacional oficial da REGIC.",
          "A pode ter maior centralidade nesses fluxos mesmo com população menor que B."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Um projeto hipotético reduz exposição de famílias a inundações ao transferi-las para moradias seguras. Porém, os novos locais ficam longe dos empregos e sem transporte adequado, aumentando tempo e custo de deslocamento. Qual avaliação considera os efeitos descritos sem negar a redução do perigo inicial?",
        "hint": "Separe segurança diante das inundações de acessibilidade ao trabalho e avalie a distribuição de benefícios e dificuldades.",
        "solution": "A reconhece a melhoria de segurança e a piora de acessibilidade, que devem ser consideradas conjuntamente. B transforma um benefício em prova de resultado integral. C ignora o acesso seguro à moradia e universaliza a preferência pela situação anterior. D supõe que distância não importa e que infraestrutura digital substitui qualquer deslocamento, o que não decorre do caso.",
        "options": [
          "Houve benefício de segurança, mas o prejuízo de acessibilidade precisa ser enfrentado na avaliação integrada.",
          "Eliminar a exposição à inundação prova que todos os efeitos sociais foram positivos.",
          "O aumento do deslocamento prova que reduzir risco de inundação é sempre indesejável.",
          "A distância aos empregos é irrelevante porque a globalização elimina a necessidade de transporte."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Filosofia medieval e modernidade",
    "objective": "Comparar problemas de fé e razão na filosofia medieval com debates modernos sobre conhecimento e legitimidade política, identificando continuidades e diferenças sem reduzir períodos a blocos uniformes.",
    "prerequisites": [
      "Noções de argumento, premissa e conclusão",
      "Ideias gerais de Platão e Aristóteles",
      "Contextualização da Idade Média, do Renascimento e da modernidade europeia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Pluralidade medieval e relações entre fé e razão",
        "explanation": "A filosofia medieval não se resume a uma única doutrina nem a um intervalo sem reflexão racional. Tradições cristãs, islâmicas e judaicas desenvolveram debates sobre conhecimento, ser, ética e política, dialogando com fontes antigas e entre si. Ibn Sina, Ibn Rushd e Maimônides foram pensadores, não apenas transmissores passivos de livros gregos. No mundo cristão, Agostinho, situado na Antiguidade tardia, tornou-se referência decisiva para o pensamento medieval. Sua reflexão relaciona interioridade, verdade e iluminação divina: a possibilidade de reconhecer verdades inteligíveis depende, em sua concepção, de uma luz da verdade que não se reduz à sensação corporal. Isso não equivale a afirmar que o estudante nada deve investigar. Tomás de Aquino distingue o conhecimento construído pela razão natural e a doutrina fundada na revelação. Algumas verdades sobre Deus podem ser investigadas racionalmente; mistérios como a Trindade não são demonstrados pela razão natural. A diferença de acesso não implica duas verdades contraditórias: na perspectiva tomista, verdade racional e verdade revelada não podem se opor em última instância. Tampouco há objetos sempre exclusivos: uma verdade alcançável pela razão pode também ser recebida pela fé. A escolástica é associada a formas de estudo e disputa argumentativa, com questões, objeções e respostas; não é sinônimo de proibição do debate. No problema dos universais, pergunta-se como termos e conceitos gerais se relacionam aos indivíduos. Ockham nega uma coisa universal comum existente fora da mente; conceitos podem significar muitos indivíduos. Isso não se reduz a dizer que só existem sons vazios. A economia explicativa associada à sua navalha não prova que qualquer explicação mais curta seja verdadeira.",
        "steps": [
          "Identifique a tradição e o problema, sem tratar toda a Idade Média como uniforme.",
          "Distinga sensação, investigação racional e fundamento religioso em cada autor.",
          "Separe diferença de acesso a uma verdade de contradição entre verdades.",
          "No debate dos universais, diferencie indivíduo, conceito geral e realidade extramental."
        ],
        "example": "Em um diálogo autoral hipotético, uma pessoa afirma que duas vias de acesso ao conhecimento devem ter métodos idênticos. Uma resposta inspirada no problema tomista distingue demonstração racional e aceitação pela revelação, sem concluir que a diferença de método autorize contradições. O exemplo é uma explicação didática, não uma citação de Tomás.",
        "pitfall": "Confundir filosofia medieval com ausência de razão, reduzir pensadores islâmicos e judeus a copiadores ou atribuir a Tomás duas verdades que podem se contradizer."
      },
      {
        "level": "intermediate",
        "title": "Método, experiência e condições do conhecimento moderno",
        "explanation": "A passagem à modernidade envolveu transformações institucionais, culturais e científicas, com rupturas e continuidades. Não aconteceu porque todos abandonaram a religião de uma vez, nem fez desaparecer conceitos de origem anterior. Descartes usa a dúvida metódica para procurar um fundamento seguro: pode questionar os sentidos e muitas crenças, mas o próprio ato de duvidar implica atividade de pensamento e existência de quem pensa nesse ato. O cogito não demonstra sozinho a existência de todos os objetos externos nem significa que só pessoas inteligentes existem. Seu projeto valoriza evidência, análise de problemas e ordem da investigação; o papel de Deus permanece importante na fundamentação cartesiana. Racionalismo e empirismo nomeiam orientações com diferenças internas, não times em que um nunca observa e outro nunca raciocina. Locke recusa ideias inatas e relaciona a formação das ideias à sensação e à reflexão sobre operações mentais; não limita toda experiência a enxergar objetos externos. Hume diferencia impressões mais vívidas e ideias e examina como passamos de experiências repetidas a expectativas causais. Observar um evento seguido de outro não revela uma ligação necessária que garanta logicamente toda ocorrência futura; o hábito ajuda a explicar a expectativa. Isso não significa que ele proíba a ciência ou diga que nada acontece. Kant pergunta pelas condições da experiência e do conhecimento: espaço e tempo são formas da sensibilidade, enquanto categorias do entendimento, como causalidade, organizam o que pode ser objeto de experiência. Conhecemos fenômenos nessas condições, sem acesso teórico às coisas em si como se fossem objetos dados do mesmo modo. A atividade do sujeito não é autorização para cada pessoa inventar livremente a realidade.",
        "steps": [
          "Localize o problema e o método antes de associar um texto a uma corrente.",
          "Diferencie dúvida como procedimento de uma conclusão de que nada pode ser conhecido.",
          "Separe experiência repetida e necessidade lógica na análise de causalidade.",
          "Em Kant, distinga formas da sensibilidade e categorias do entendimento."
        ],
        "example": "Num cenário autoral hipotético, um sinal luminoso precedeu várias vezes uma máquina ligar. Esperar nova ativação pode resultar da repetição observada, mas essa observação sozinha não é uma demonstração lógica de que toda ocorrência futura terá o mesmo resultado. A distinção ilustra o problema da inferência causal, sem reproduzir um exemplo do texto de Hume.",
        "pitfall": "Tratar empirismo como recusa de raciocínio, fazer do cogito uma prova imediata de todo o mundo exterior ou confundir sujeito transcendental com opinião individual arbitrária."
      },
      {
        "level": "advanced",
        "title": "Legitimidade política, contrato e limites das comparações",
        "explanation": "Na filosofia política moderna, teorias do contrato discutem a legitimidade do poder e as condições da vida comum. Estado de natureza é um recurso teórico que não deve ser tratado automaticamente como descrição de uma época histórica realmente observada. Hobbes analisa a insegurança onde falta um poder comum capaz de garantir a paz. A guerra não é apenas batalha ininterrupta: inclui disposição e insegurança duradouras. O pacto entre indivíduos autoriza um soberano, que não é simplesmente outro contratante nas mesmas condições. Esse soberano pode ser uma pessoa ou uma assembleia: a teoria não se reduz à afirmação de que só um monarca pode governar. Hobbes não elimina todo direito de autopreservação, por isso é falso dizer que ninguém pode resistir a uma ameaça direta à própria vida. Locke descreve liberdade e igualdade naturais sob uma lei de natureza, e não licença irrestrita para fazer qualquer coisa. A formação da sociedade política procura superar inconvenientes da aplicação privada dessa lei e proteger direitos; o governo se submete a uma relação de confiança e pode perder legitimidade quando a viola. A resistência não é sinônimo de oposição a qualquer decisão cotidiana. Rousseau, por sua vez, investiga uma associação em que a soberania pertence ao povo e a vontade geral se orienta ao interesse comum; ela não é simples soma de interesses privados ou qualquer vontade pessoal de quem governa. Esses autores não sustentam uma única doutrina de contrato nem justificam todos a mesma forma de soberania. O Iluminismo envolve crítica, debate sobre liberdade e uso da razão, mas não um consenso sem tensões ou uma igualdade social imediatamente realizada. Comparar autores exige explicitar o critério: origem da autoridade, representação, direitos, proteção ou condições de resistência. Um vocabulário semelhante não garante conclusões idênticas.",
        "steps": [
          "Diferencie hipótese filosófica de relato histórico no estado de natureza.",
          "Identifique quem pactua e o que é autorizado em cada teoria.",
          "Compare soberania, direitos e limites da obediência sem apagar exceções.",
          "Avalie a tese concreta do texto, sem usar rótulo de época como prova de consenso."
        ],
        "example": "Em um debate autoral hipotético, dois defensores do consentimento discordam: um privilegia um poder comum forte contra a insegurança; outro exige limites institucionais para proteger direitos. A palavra consentimento não resolve a discordância. É preciso examinar os limites do governo e a posição dos governados, em vez de chamar toda teoria contratualista de idêntica.",
        "pitfall": "Chamar estado de natureza de fase histórica obrigatória, dizer que Hobbes apaga toda autopreservação ou que vontade geral é qualquer preferência do governante."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma interpretação autoral hipotética, um estudante afirma: para Tomás de Aquino, se um mistério não pode ser demonstrado pela razão natural, isso prova que fé e razão admitem verdades contraditórias. Qual correção corresponde à posição tomista apresentada?",
        "hint": "Distinga uma verdade que excede a demonstração racional de uma afirmação contrária à razão. Diferentes vias não autorizam contradição.",
        "solution": "B distingue exceder o alcance demonstrativo da razão natural e contradizê-la. Na perspectiva tomista, a verdade não se opõe à verdade, embora nem todo conteúdo revelado seja racionalmente demonstrável. A inventa licença para a contradição. C apaga a distinção entre os modos de acesso. D nega que a razão natural possa investigar qualquer verdade sobre Deus, o que não corresponde à posição estudada.",
        "options": [
          "A ausência de demonstração prova que duas afirmações contraditórias são igualmente verdadeiras.",
          "Um mistério pode ultrapassar a razão natural sem que fé e razão sejam fontes de verdades contraditórias.",
          "Fé e razão têm necessariamente o mesmo método e o mesmo alcance demonstrativo.",
          "A razão natural é incapaz de investigar qualquer questão sobre Deus."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Em um texto autoral hipotético sobre Descartes, uma pessoa duvida da existência do mundo e conclui que pode duvidar até de que existe enquanto duvida. Qual análise identifica o limite dessa última afirmação no argumento do cogito?",
        "hint": "Examine o que o próprio ato de duvidar pressupõe naquele momento, sem acrescentar uma prova automática dos objetos externos.",
        "solution": "D identifica que duvidar é uma atividade de pensamento e, nesse ato, pressupõe a existência de quem pensa. A transforma o cogito em prova direta de todos os objetos. B confunde dúvida metódica com negação definitiva de toda verdade. C converte existência em prêmio por inteligência, condição que não integra o argumento.",
        "options": [
          "O cogito demonstra imediatamente que todas as percepções de objetos externos são verdadeiras.",
          "Duvidar prova que nenhuma verdade pode ser alcançada sob qualquer condição.",
          "Somente quem obtém respostas inteligentes existe, segundo o cogito.",
          "O próprio ato de duvidar implica pensamento e existência de quem pensa naquele ato."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Considere a tese autoral hipotética: como Hobbes defende um soberano forte, seu argumento elimina absolutamente toda possibilidade de defesa da própria vida contra uma ameaça direta. Qual avaliação preserva a nuance da teoria?",
        "hint": "A defesa do poder soberano deve ser comparada ao lugar da autopreservação; não confunda ausência de um direito geral de revolução com ausência de toda resistência.",
        "solution": "A identifica o limite da tese: Hobbes preserva a autopreservação e não exige renúncia absoluta à defesa da vida contra ameaça direta. B exagera a conclusão contrária, fazendo de qualquer insatisfação um direito de revolução. C confunde o soberano com parte contratante em condições idênticas. D atribui a Hobbes a concepção rousseauniana de vontade geral sem demonstrar o argumento.",
        "options": [
          "A tese é excessiva: Hobbes preserva a autopreservação, inclusive diante de ameaça direta à própria vida.",
          "A tese é falsa porque Hobbes autoriza revolução por qualquer discordância cotidiana com o soberano.",
          "A tese é verdadeira porque o soberano pactua exatamente nas mesmas condições que cada súdito.",
          "A tese é verdadeira porque Hobbes identifica toda vontade pessoal do soberano com a vontade geral de Rousseau."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Cultura, identidade e diversidade",
    "objective": "Analisar cultura como aprendizagem social dinâmica, identidade como relação de pertencimento e diversidade em contextos de desigualdade, distinguindo compreensão contextual, direitos e relações de poder.",
    "prerequisites": [
      "Noções de socialização, grupo e instituição",
      "Leitura de situações sociais e distinção entre descrição e julgamento",
      "Comparação entre evidência observada e generalização"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Cultura aprendida, símbolos e mudança",
        "explanation": "Cultura compreende saberes, valores, normas, símbolos, técnicas e práticas aprendidos e compartilhados socialmente. Não é sinônimo de escolaridade elevada, gosto refinado ou apenas produção artística: maneiras de organizar o trabalho e atribuir significado aos objetos também integram a análise cultural. A dimensão material inclui objetos e técnicas em uso; a imaterial envolve sentidos, conhecimentos, normas e valores. Elas se relacionam: um instrumento não tem significado social apenas por sua matéria física. Símbolos são elementos aos quais se atribuem significados compartilhados em contextos; um gesto pode assumir sentidos diferentes conforme a situação. Valores expressam referências do que se considera desejável; normas orientam condutas e podem ser formais ou informais, apoiadas por diferentes sanções. Socialização é o processo de aprendizagem e participação na vida social, envolvendo família, escola, pares, meios de comunicação e outras instituições. A transmissão cultural não é cópia sem mudança: pessoas interpretam e transformam repertórios. Também não é herança genética que determine automaticamente comportamento. Compartilhamento não implica consenso de todos: grupos têm conflitos e variações internas de geração, classe, religião e trajetória. No estudo da diversidade, não cabe classificar povos inteiros como se estivessem em uma única escada de superioridade cultural. A presença de um smartphone não torna alguém menos pertencente a um grupo tradicional nem comprova desaparecimento de sua cultura. Para analisar uma prática, descreva o contexto, seus sentidos para participantes e as relações que a sustentam, sem transformar uma observação local em regra sobre toda uma população.",
        "steps": [
          "Identifique práticas, objetos e significados no contexto observado.",
          "Diferencie valores, normas e símbolos sem tratá-los como herança biológica.",
          "Observe como repertórios são aprendidos e reinterpretados.",
          "Procure diferenças internas antes de generalizar sobre um grupo."
        ],
        "example": "Em uma associação hipotética de moradores, avisos antes transmitidos oralmente passam a circular também num aplicativo. A mudança de suporte não prova que os vínculos comunitários desapareceram. Pode haver continuidade de significados e transformação das formas de participação, cujos efeitos precisam ser observados.",
        "pitfall": "Confundir cultura com erudição, tratar grupos como homogêneos ou dizer que qualquer inovação tecnológica destrói automaticamente um pertencimento cultural."
      },
      {
        "level": "intermediate",
        "title": "Identidade, alteridade e desigualdades",
        "explanation": "Identidade envolve maneiras de reconhecer a si e aos outros por pertencimentos e diferenças socialmente produzidos. Uma pessoa pode mobilizar vínculos locais, profissionais, religiosos e outros em situações distintas; isso não significa que possa escolher sem restrições como será tratada. Reconhecimento, discriminação e instituições influenciam as possibilidades de afirmar pertencimentos. Alteridade é a relação com o outro, que não precisa ser convertida em hierarquia. Etnocentrismo ocorre quando referências do próprio grupo são tomadas como medida universal para julgar os demais. Relativizar metodologicamente uma prática significa procurar compreendê-la em seu contexto, em vez de declarar de antemão que o diferente é inferior. Não exige aceitar qualquer violência ou suspender toda crítica: a defesa da diversidade não autoriza violação de direitos humanos. Estereótipos simplificam grupos em características rígidas; preconceito envolve julgamentos prévios, e discriminação se manifesta em práticas de tratamento desigual. Raça é analisada como classificação social com efeitos reais, sem pressupor raças humanas biologicamente hierarquizadas; etnicidade envolve referências de história, pertencimento e cultura. Diferença cultural e desigualdade de recursos ou poder não são sinônimos, embora possam estar articuladas. A interseccionalidade, desenvolvida no debate feminista negro e associada ao trabalho de Kimberlé Crenshaw, examina como relações como racismo e sexismo interagem e podem produzir efeitos que análises separadas não captam. Ela não exige inventar um índice pela soma de identidades, nem concluir toda experiência apenas pela lista de categorias de uma pessoa. É necessário investigar mecanismos e evidências no contexto.",
        "steps": [
          "Identifique pertencimentos e quem pode reconhecê-los ou recusá-los socialmente.",
          "Separe compreensão contextual de aprovação moral automática.",
          "Distinga diferenças, estereótipos e práticas discriminatórias.",
          "Investigue interações entre mecanismos de desigualdade sem presumir trajetórias individuais."
        ],
        "example": "Em um caso autoral hipotético, uma instituição aceita homens de um grupo racial e mulheres de outro, mas rejeita especificamente mulheres do primeiro grupo. Examinar apenas homens e mulheres em conjunto ou apenas grupos raciais em conjunto pode ocultar o padrão combinado. A análise exige observar os cruzamentos, sem universalizar o caso para todas as instituições.",
        "pitfall": "Naturalizar desigualdades como traços biológicos, reduzir interseccionalidade a uma soma mecânica ou presumir que relativizar uma prática exige aprovar toda violação de direitos."
      },
      {
        "level": "advanced",
        "title": "Circulação cultural, participação e poder",
        "explanation": "Circulação de pessoas, produtos e informações favorece contatos, recombinações e disputas culturais. A globalização pode difundir padrões de consumo e, ao mesmo tempo, abrir espaço para releituras e afirmações locais. Nenhum desses processos autoriza concluir que todas as culturas se tornaram iguais ou que vivem isoladas. Hibridização descreve recombinações de elementos de diferentes trajetórias, sem pressupor mistura harmoniosa ou identidades originalmente puras. A análise precisa perguntar quem produz, decide, é reconhecido e recebe os benefícios. Uso de referências culturais pode envolver intercâmbio, colaboração, apropriação contestada ou exploração; esses termos não podem ser aplicados apenas porque houve contato entre grupos. Contexto, participação, autorização pertinente, atribuição e distribuição de benefícios ajudam a examinar relações concretas. Cultura não é um acervo congelado que um agente externo salva sozinho. Pessoas e coletivos que produzem práticas e expressões devem ser considerados sujeitos, com divergências internas e capacidade de decidir, e não apenas fontes de imagens exóticas. Salvaguardar uma expressão cultural envolve condições de continuidade e transmissão viva; não requer proibir toda mudança. Reconhecer diversidade também demanda distinguir presença simbólica e poder de participação: exibir uma imagem não prova que os representados controlam sua circulação ou recebem remuneração. A Declaração da UNESCO sobre Diversidade Cultural articula diversidade, diálogo e direitos humanos, sem autorizar que uma prática seja imposta a pessoas por tradição. Ao avaliar uma política ou contrato hipotético, separe a análise sociológica de uma conclusão jurídica automática: acesso público não significa domínio público, e um dado sobre visibilidade não basta para provar consentimento ou justiça na distribuição dos resultados.",
        "steps": [
          "Descreva circulação e recombinação sem presumir homogeneização total.",
          "Verifique participação, atribuição e benefícios a partir de evidências.",
          "Separe visibilidade dos produtores e controle sobre a representação.",
          "Avalie continuidade cultural com transformação e respeito a direitos."
        ],
        "example": "Em um projeto autoral hipotético, um grupo cultural produz uma exposição digital com curadoria compartilhada, identificação dos autores e decisões sobre circulação e receita. A presença de ferramentas digitais não apaga a trajetória do grupo. Para avaliar a colaboração, importam as condições negociadas e sua realização, não apenas a imagem promocional de diversidade.",
        "pitfall": "Confundir divulgação com consentimento, acesso público com domínio público ou preservação com proibição de toda mudança cultural."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em uma comunidade hipotética, jovens aprendem uma técnica artesanal com pessoas mais velhas e adaptam seus desenhos para novos usos. Qual interpretação corresponde ao conceito sociológico de cultura?",
        "hint": "Observe aprendizagem e transformação de significados, sem confundir transmissão social com reprodução genética ou imobilidade.",
        "solution": "C reconhece transmissão e reelaboração social: aprender a técnica e transformar usos integram processos culturais. A reduz cultura à herança biológica. B supõe imobilidade como condição para existir cultura. D limita cultura à escolaridade elevada e ignora práticas e saberes compartilhados.",
        "options": [
          "A técnica comprova que cultura é transmitida biologicamente entre gerações.",
          "A adaptação dos desenhos prova que a comunidade deixou de ter cultura.",
          "A aprendizagem e a reelaboração da técnica mostram uma cultura transmitida e transformada socialmente.",
          "A prática só poderia ser cultural se todos tivessem formação universitária."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Uma pesquisadora encontra uma prática pouco familiar e decide investigar seu contexto e os sentidos atribuídos pelos participantes antes de avaliá-la. Ela afirma que compreender não implica aprovar qualquer violência. Qual análise descreve esse procedimento?",
        "hint": "Diferencie tomar a própria cultura como medida universal de buscar compreensão contextual mantendo a discussão de direitos.",
        "solution": "A descreve relativização metodológica compatível com análise crítica e direitos humanos. B inverte o procedimento e torna o padrão do observador medida universal. C transforma contextualização em aprovação obrigatória, contrariando o enunciado. D troca investigação sociológica por determinismo biológico sem evidência.",
        "options": [
          "Compreensão contextual com possibilidade de crítica, sem hierarquização automática das culturas.",
          "Etnocentrismo, pois toda prática deve ser julgada apenas pelos costumes da pesquisadora.",
          "Aprovação moral obrigatória de toda violência desde que seja apresentada como tradição.",
          "Demonstração de que práticas sociais são determinadas exclusivamente por genes."
        ],
        "correctIndex": 0
      },
      {
        "level": "advanced",
        "prompt": "Em um cenário autoral hipotético, uma empresa usa comercialmente gravações de um coletivo cultural sem sua autorização e sem identificá-lo. A publicidade afirma que apenas dar visibilidade já garante uma relação justa. Qual avaliação considera as relações de poder descritas sem presumir um resultado judicial?",
        "hint": "Compare a promessa de exposição com participação, atribuição e controle sobre o uso, que o cenário informa terem sido desconsiderados.",
        "solution": "D identifica que visibilidade não supre automaticamente ausência de autorização e atribuição nem prova distribuição justa de benefícios. A transforma circulação em consentimento. B nega possibilidade de decisão dos produtores. C afirma um resultado jurídico específico sem informação suficiente, quando o problema pede análise da relação social descrita.",
        "options": [
          "A divulgação equivale automaticamente a consentimento, independentemente da posição dos produtores.",
          "Produtores culturais não podem participar de decisões quando sua produção circula digitalmente.",
          "O caso permite afirmar automaticamente qual será a sentença e o valor da indenização.",
          "A visibilidade não demonstra justiça na relação; participação, autorização e atribuição precisam ser consideradas."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Arte brasileira e modernismo",
    "objective": "Reconhecer contextos e escolhas formais do modernismo brasileiro, comparar propostas e desdobramentos e analisar criticamente representação e cânone a partir de obras e descrições autossuficientes.",
    "prerequisites": [
      "Noções de linha, cor, forma, composição e espaço",
      "Contexto da Primeira República e das transformações urbanas",
      "Distinção entre descrição, interpretação e informação histórica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Renovação estética e contexto da Semana de 1922",
        "explanation": "Arte brasileira abrange muitas tradições e períodos; não começou com o modernismo nem cabe numa única linguagem nacional. Nas primeiras décadas do século XX, artistas experimentaram modos de representar e organizar formas em diálogo com transformações urbanas e circulação internacional. Renovar não significava apenas escolher um tema brasileiro: podia envolver cor não naturalista, distorção expressiva, simplificação de volumes, fragmentação do espaço e questionamento de convenções acadêmicas. Uma escolha formal deve ser analisada na obra e em seu contexto, sem tratar qualquer deformação como erro de desenho ou toda obra moderna como abstrata. A exposição de Anita Malfatti de 1917 e sua recepção mostram que havia experiências e disputas anteriores a 1922. A Semana de Arte Moderna, no Theatro Municipal de São Paulo em fevereiro de 1922, reuniu exposição e apresentações de diferentes linguagens, com participação de figuras como Anita, Di Cavalcanti e Villa-Lobos. Seu valor histórico não exige imaginar adesão unânime, nem um manifesto único aceito por todos. Tarsila do Amaral tornou-se central no modernismo, mas não participou da Semana; estar ligada ao movimento não é o mesmo que ter exposto naquele evento. Também não se deve deduzir que todas as mulheres estiveram ausentes porque uma narrativa destaca principalmente homens. Na leitura visual, comece por relações observáveis de linha, cor, proporção, ritmo e espaço; depois relacione escolhas a temas e contexto. O rótulo de movimento não substitui evidências nem autoriza atribuir toda intenção possível ao artista.",
        "steps": [
          "Separe a história ampla da arte brasileira do marco modernista de 1922.",
          "Observe escolhas formais antes de avaliar realismo ou beleza como critérios únicos.",
          "Diferencie participação na Semana e vínculo posterior com o movimento.",
          "Relacione descrição e contexto sem transformar hipótese em intenção comprovada."
        ],
        "example": "Em uma descrição autoral hipotética de pintura, os rostos são alongados, as cores contrastam e o espaço parece comprimido. Esses elementos podem contribuir para intensidade expressiva. Não basta dizer que a pintura é ruim porque as proporções não imitam uma fotografia, nem identificar um autor real apenas por esses traços genéricos.",
        "pitfall": "Afirmar que a Semana inventou toda a arte moderna brasileira, atribuir sua participação a Tarsila ou julgar escolhas não naturalistas apenas como falta de habilidade."
      },
      {
        "level": "intermediate",
        "title": "Propostas, circulação e desdobramentos distintos",
        "explanation": "O modernismo brasileiro reuniu projetos e trajetórias diferentes, e não uma fórmula estética obedecida por todos. O Manifesto da Poesia Pau-Brasil, de Oswald de Andrade em 1924, propõe renovação com elaboração de referências brasileiras em diálogo com o exterior. Na pintura de Tarsila, simplificações, cores e reelaborações de paisagens e temas participam desse debate. O Manifesto Antropófago, de Oswald em 1928, usa a antropofagia como metáfora de absorção e transformação crítica de referências, em vez de cópia subordinada ou defesa de isolamento cultural absoluto. Abaporu, pintura de Tarsila de 1928, tem relação decisiva com a formulação desse projeto; não é uma obra exposta na Semana seis anos antes. Pau-Brasil e Antropofagia se relacionam, mas seus manifestos e contextos não são idênticos. A circulação de revistas, exposições e correspondência articula diferentes centros: a revista Verde, criada em Cataguases, Minas Gerais, em 1927, é um exemplo que impede reduzir toda experiência ao mesmo núcleo paulistano. Nos desdobramentos, a figuração pode abordar experiências sociais e dramáticas. Retirantes, de Candido Portinari, é de 1944 e integra uma produção posterior à Semana, não uma apresentação de 1922. Outros debates exploram abstração, geometria e participação. Os Bichos de Lygia Clark, iniciados em 1960 no contexto de sua trajetória neoconcreta, envolvem estruturas articuláveis e relação ativa com o participante. Não são mera continuação formal de uma pintura antropofágica: mudam materiais, problemas e modos de experiência. Divisões geracionais da literatura não devem ser transferidas mecanicamente para todas as artes.",
        "steps": [
          "Identifique manifesto, autor e momento sem fundir propostas distintas.",
          "Diferencie absorção crítica de imitação ou isolamento absoluto.",
          "Observe circulação regional e trajetórias posteriores a 1922.",
          "Compare forma, material e participação, sem impor a periodização de uma linguagem a todas."
        ],
        "example": "Uma comparação didática autoral pode contrastar uma pintura figurativa de tema social e um objeto articulável que envolve o participante. Tema reconhecível, composição, material e ação do público são critérios diferentes. A comparação não exige declarar que uma dessas experiências anulou a outra ou que ambas têm a mesma função.",
        "pitfall": "Localizar a revista Verde em Recife, incluir Retirantes ou Abaporu na exposição de 1922 ou chamar toda experiência posterior de repetição da Antropofagia."
      },
      {
        "level": "advanced",
        "title": "Representação, cânone e leitura crítica",
        "explanation": "Um cânone é uma seleção de artistas e obras que ganha centralidade por processos de crítica, ensino, acervos, mercado e exposição. Essa seleção pode ser revisada; não é uma lista neutra de tudo que foi produzido. Reconhecer a relevância da Semana não exige tratá-la como origem única ou triunfo inevitável. Da mesma forma, discutir limites de um projeto modernista não apaga automaticamente suas invenções formais. No debate sobre identidade nacional, é necessário perguntar quem representa, quem é representado e quem participa da definição dos sentidos. Referências a culturas indígenas ou afro-brasileiras em uma obra não provam, sozinhas, participação dos sujeitos retratados nas decisões. Também seria inadequado afirmar ausência absoluta de pessoas ou contribuições desses grupos de toda a arte moderna. Investigue trajetórias e contextos concretos, sem substituir pesquisa por generalizações. Leitura crítica combina descrição formal, fontes históricas e interpretação argumentada. Dizer que cores, escala ou composição produzem determinado efeito requer apontar como isso ocorre, e interpretações distintas precisam de sustentação, não de adivinhação da mente do autor. Uma exposição contemporânea pode pôr obras de épocas diferentes em diálogo sem torná-las equivalentes ou atribuir a um artista atual a intenção de outro. Participação, curadoria e acesso à palavra podem mudar o problema apresentado ao público. A descrição de uma montagem hipotética é uma proposta didática, não prova de que tal exposição ocorreu ou de que todos os seus participantes concordam. Rever o cânone amplia perguntas sobre repertório, autoria e poder, sem impor uma opinião uniforme a todos os povos ou grupos.",
        "steps": [
          "Identifique os agentes que selecionam e divulgam obras e narrativas.",
          "Compare presença de referências culturais e participação de seus produtores.",
          "Sustente interpretações por escolhas formais e fontes identificadas.",
          "Leia diálogos curatoriais com atenção a diferenças de época, autoria e posição."
        ],
        "example": "Uma curadoria autoral hipotética apresenta uma obra histórica sobre identidade nacional e uma criação atual acompanhada de comentário de sua autora. A segunda não precisa ilustrar passivamente a primeira. Comparar as falas e os modos de apresentação pode revelar disputa de sentidos, sem presumir que uma obra responde por todos os integrantes de um grupo.",
        "pitfall": "Confundir imagem de um grupo com participação nas decisões, tratar cânone como inventário completo ou atribuir uma mesma opinião a todos os povos indígenas."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Descrição autoral hipotética: uma pintura usa cores não naturalistas, simplifica volumes e comprime a profundidade para intensificar a cena. Qual procedimento analítico considera essas escolhas sem exigir uma imagem externa ao enunciado?",
        "hint": "O texto fornece relações formais; elas permitem discutir efeitos sem identificar automaticamente o autor nem julgar apenas pela semelhança fotográfica.",
        "solution": "B propõe relacionar cor, volume e espaço ao efeito expressivo descrito. A transforma representação fotográfica em único critério e chama toda diferença de erro. C identifica um autor sem evidência específica. D ignora dados que o enunciado oferece e presume que forma e interpretação não se relacionam.",
        "options": [
          "Concluir que toda diferença em relação a uma fotografia prova incapacidade técnica.",
          "Analisar como cor, simplificação dos volumes e espaço comprimido contribuem para a expressão.",
          "Atribuir a pintura a um artista real somente por conter cores não naturalistas.",
          "Desconsiderar escolhas formais porque apenas o título da obra pode produzir sentido."
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Em uma paráfrase didática autoral da proposta antropofágica, um criador absorve referências de procedências diversas e as transforma criticamente em uma elaboração própria. Qual interpretação corresponde a essa metáfora, sem tratá-la como citação literal do manifesto?",
        "hint": "Compare transformação e autonomia de elaboração com reprodução obediente ou isolamento que proíbe qualquer contato.",
        "solution": "D corresponde à absorção e transformação crítica proposta pela metáfora antropofágica. A troca transformação por imitação subordinada. B impõe pureza e isolamento absolutos. C interpreta literalmente a metáfora cultural como uma prescrição de comportamento físico, deslocando o sentido do problema.",
        "options": [
          "Copiar integralmente um modelo externo, mantendo-o como padrão obrigatório.",
          "Eliminar qualquer contato externo para manter uma cultura absolutamente pura.",
          "Converter a metáfora do manifesto em instrução literal de prática corporal.",
          "Transformar criticamente referências recebidas, em vez de apenas copiá-las ou proibir contato."
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Uma exposição autoral hipotética apresenta imagens históricas de uma comunidade e também obras atuais com textos escritos por artistas dessa comunidade. Um visitante afirma que ter sido representada nas imagens antigas já prova participação nas decisões de sua produção. Qual avaliação distingue representação e agência?",
        "hint": "A presença de uma imagem e o poder de decidir sobre sua criação são questões diferentes; o enunciado não informa quem decidiu na produção histórica.",
        "solution": "A distingue ser representado e participar da decisão: a primeira condição não comprova a segunda. B transforma retrato em prova automática de autoria. C nega que artistas atuais possam interpretar sua trajetória. D apaga diferenças de contexto e posição ao exigir uma opinião idêntica de toda a comunidade.",
        "options": [
          "A representação visual não prova, por si, participação nas decisões; essa agência precisa de evidências próprias.",
          "Ser retratado prova automaticamente autoria e controle sobre todas as decisões da obra.",
          "Somente críticos externos podem interpretar obras produzidas por artistas da comunidade.",
          "Todos os membros da comunidade devem ter a mesma opinião sobre as imagens históricas."
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Atividade física e qualidade de vida",
    "objective": "Distinguir atividade física, exercício e comportamento sedentário, interpretar diretrizes populacionais e avaliar relações com qualidade de vida considerando contexto, inclusão e limites das evidências.",
    "prerequisites": [
      "Leitura de duração, frequência e intensidade",
      "Noções de saúde como fenômeno influenciado por condições de vida",
      "Distinção entre associação estatística e causalidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Movimento, exercício e qualidade de vida",
        "explanation": "Atividade física envolve movimento corporal produzido pela musculatura esquelética com gasto de energia. Pode ocorrer no lazer, nos deslocamentos, nas tarefas domésticas e no trabalho. Exercício físico é uma forma planejada, estruturada e repetitiva de atividade física voltada a manter ou melhorar componentes da aptidão. Por isso, praticar atividade física não se limita a frequentar academia. Aptidão física se relaciona a capacidades como resistência cardiorrespiratória, força e outras que dependem do objetivo e da avaliação; não é sinônimo de um padrão estético. Comportamento sedentário é aquele realizado em vigília, sentado, reclinado ou deitado, com baixo gasto energético. Dormir não é incluído nessa definição por ser sono, e ficar parado em pé não corresponde automaticamente a essa postura sedentária. Inatividade física, no uso das diretrizes populacionais, significa não atingir os níveis recomendados de atividade: ela não é a mesma grandeza que tempo sedentário. Uma pessoa pode fazer exercícios e também permanecer muitas horas sentada ao longo do dia. Qualidade de vida envolve a percepção da pessoa sobre sua vida, seus objetivos e condições no contexto cultural em que vive. Aspectos físicos, psicológicos, relações sociais e ambiente importam; apenas aparência, peso ou desempenho esportivo não medem todo esse conjunto. Experiências corporais podem favorecer convivência e autonomia, mas oportunidades, segurança, prazer e condições materiais influenciam participação e resultados.",
        "steps": [
          "Identifique o contexto em que o movimento ocorre, além do lazer.",
          "Distinga atividade ampla de exercício planejado e repetitivo.",
          "Separe tempo sedentário em vigília de não atingir uma recomendação semanal.",
          "Considere capacidades, percepção e contexto sem reduzir qualidade de vida à aparência."
        ],
        "example": "Em um cenário autoral hipotético, uma pessoa faz uma sessão de exercícios planejados e passa grande parte do restante do dia sentada em estudo e transporte. O exercício realizado e o tempo sedentário podem coexistir. Classificar apenas a sessão como suficiente para descrever toda a rotina apagaria essa diferença.",
        "pitfall": "Confundir tempo sentado com inatividade semanal, incluir sono como comportamento sedentário ou avaliar saúde e qualidade de vida apenas por aparência física."
      },
      {
        "level": "intermediate",
        "title": "Interpretar recomendações sem transformar médias em garantias",
        "explanation": "Diretrizes de saúde pública organizam recomendações por grupos e condições, com base em conjuntos de evidências. Nas diretrizes da OMS de 2020 para adultos, a faixa aeróbia de referência é 150 a 300 minutos semanais de intensidade moderada, ou 75 a 150 de vigorosa, ou combinação equivalente. Há também recomendação de fortalecimento muscular em pelo menos dois dias por semana. O componente aeróbio não resume todas as orientações. Alguma atividade pode trazer benefícios mesmo abaixo da faixa: 150 minutos não é uma fronteira em que antes nada tem valor e depois a saúde esteja garantida. Os tempos podem ser acumulados na semana, e a mesma duração em intensidades diferentes não deve ser somada como se fosse automaticamente equivalente. Frequência é quantas vezes ocorre; duração é quanto tempo; intensidade indica o esforço; tipo é a prática realizada. As faixas para crianças e adolescentes são diferentes das adultas, portanto não se deve aplicar uma única quantidade a qualquer idade. Benefícios e adaptações dependem da regularidade e do contexto, e variam entre pessoas. Práticas aeróbias, de força e de equilíbrio têm exigências e finalidades que não são idênticas. Progressão e recuperação ajudam a organizar a experiência; não se infere sobrecarga crônica apenas de um número isolado de minutos. Preferências, condições de participação e adaptações funcionais contribuem para continuidade. Uma recomendação populacional orienta análise de grupos e não permite deduzir, sozinha, diagnóstico ou programa individual para uma pessoa do enunciado.",
        "steps": [
          "Identifique grupo, componente da recomendação e fonte datada.",
          "Some durações compatíveis, mantendo a intensidade e a semana explícitas.",
          "Separe frequência, duração, intensidade e tipo de prática.",
          "Leia a faixa como referência populacional, sem prometer resultado individual."
        ],
        "example": "Modelo hipotético de leitura de uma agenda adulta: quatro períodos de 35 minutos, todos moderados e na mesma semana, somam 140 minutos. O total está abaixo de 150, mas isso não significa ausência de benefício. Também não informa se houve fortalecimento muscular ou quanto tempo a pessoa ficou sentada.",
        "pitfall": "Tratar 150 minutos como garantia de saúde, somar minutos moderados e vigorosos sem equivalência ou aplicar a referência adulta indistintamente a crianças."
      },
      {
        "level": "advanced",
        "title": "Evidências, barreiras e promoção de oportunidades",
        "explanation": "Para relacionar atividade física e qualidade de vida, é preciso distinguir resultados observados e explicações causais. Um estudo transversal mede variáveis em um recorte de tempo; pode encontrar associação entre prática e percepção de bem-estar, mas não estabelece sozinho qual veio primeiro. Renda, acesso a espaços seguros, condições de trabalho e outros fatores podem influenciar ambas. Mesmo um estudo longitudinal requer análise de comparação, medidas e possíveis confundidores. Uma curva hipotética que cai após certo volume não prova automaticamente excesso de treinamento, nem fornece um limite universal para toda pessoa. Diagnosticar mecanismos hormonais a partir apenas desse desenho seria extrapolação. A participação também depende de oportunidades: tempo disponível, segurança, transporte, custo e acessibilidade podem facilitar ou dificultar práticas. Dizer apenas que todos devem ter força de vontade ignora essas condições. Ações em escola, comunidade e espaços públicos podem ampliar oportunidades, mas precisam considerar grupos, preferências e manutenção. Uma ciclovia ou praça não tem custo-efetividade superior garantida em qualquer município: uso, conexão, segurança, orçamento e contexto devem ser avaliados. Inclusão requer possibilidades reais de participação e adaptações funcionais, sem presumir incapacidade pela identidade ou exigir exposição pública de informações de saúde. Para avaliar um programa, acompanhe acesso, continuidade, experiência dos participantes e resultados pertinentes. Aumento de inscrições não prova, isoladamente, melhoria de toda a qualidade de vida; o indicador precisa corresponder à pergunta.",
        "steps": [
          "Identifique desenho do estudo e o que ele pode demonstrar.",
          "Examine temporalidade, comparação e variáveis que podem influenciar a associação.",
          "Mapeie barreiras de acesso e preferências sem responsabilização individual exclusiva.",
          "Avalie indicadores e manutenção das ações, com participação e acessibilidade."
        ],
        "example": "Em um projeto autoral hipotético, uma escola oferece práticas em horários variados e consulta estudantes sobre barreiras de participação. O número de inscrições cresce, mas a equipe também verifica frequência, acesso e experiência. O aumento de um indicador é um resultado relevante, sem provar sozinho melhora universal de bem-estar.",
        "pitfall": "Transformar associação transversal em diagnóstico de sobrecarga, declarar uma obra sempre mais custo-efetiva sem dados ou confundir inscrição com participação sustentada."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num cenário hipotético, uma pessoa participa de exercício planejado e repetitivo em três dias da semana, mas permanece várias horas por dia sentada em vigília, com baixo gasto energético. Qual afirmação distingue corretamente os conceitos, sem calcular se atingiu uma recomendação semanal?",
        "hint": "Exercício é uma categoria de atividade física; comportamento sedentário descreve outra característica da rotina e pode coexistir com sessões de exercício.",
        "solution": "C reconhece a coexistência descrita. A supõe que uma sessão apaga automaticamente todo tempo sedentário. B exclui indevidamente o exercício do conceito mais amplo de atividade física. D identifica sedentarismo com sono, embora o enunciado trate de vigília e a definição faça essa distinção.",
        "options": [
          "Praticar exercício elimina automaticamente qualquer comportamento sedentário no restante do dia.",
          "Exercício planejado não pertence à categoria de atividade física.",
          "A rotina pode combinar exercício físico e períodos de comportamento sedentário.",
          "As horas sentadas em vigília devem ser classificadas como sono."
        ],
        "correctIndex": 2
      },
      {
        "level": "intermediate",
        "prompt": "Uma agenda adulta hipotética registra três períodos de 40 minutos e dois de 20 minutos, todos aeróbios de intensidade moderada na mesma semana. Compare apenas o total aeróbio com o limite inferior de 150 minutos da faixa moderada da OMS de 2020. Qual resultado está correto?",
        "hint": "Multiplique a frequência pela duração em cada conjunto e some os minutos compatíveis; o cálculo não inclui componentes da rotina que não foram informados.",
        "solution": "B calcula 3×40 + 2×20 = 120 + 40 = 160 minutos. O total supera o limite inferior aeróbio em 10 minutos, sem permitir concluir que todas as recomendações foram atendidas. A conta somente o primeiro conjunto. C soma durações sem considerar frequências. D conta apenas um período de 20 além dos 120, omitindo o segundo.",
        "options": [
          "120 minutos, abaixo do limite inferior aeróbio em 30 minutos.",
          "160 minutos, acima do limite inferior aeróbio em 10 minutos.",
          "60 minutos, abaixo do limite inferior aeróbio em 90 minutos.",
          "140 minutos, abaixo do limite inferior aeróbio em 10 minutos."
        ],
        "correctIndex": 1
      },
      {
        "level": "advanced",
        "prompt": "Um levantamento transversal hipotético encontra associação entre maior atividade de lazer e maior satisfação com a vida. Não há medida anterior à prática nem controle de renda e acesso a espaços seguros. Qual conclusão respeita os limites dos dados?",
        "hint": "Verifique se o desenho permite estabelecer a ordem temporal e excluir fatores que influenciam tanto participação quanto satisfação.",
        "solution": "D reconhece uma associação sem atribuir causalidade isolada ou ignorar possíveis confundidores. A afirma causalidade exclusiva sem temporalidade e controle suficientes. B promete o mesmo resultado para cada pessoa a partir de um dado de grupo. C inventa ausência de qualquer influência ambiental, justamente quando acesso e renda não foram controlados.",
        "options": [
          "O estudo prova que a prática foi a única causa da satisfação observada.",
          "Cada participante terá obrigatoriamente a mesma melhora individual de satisfação.",
          "Os resultados provam que renda e ambiente jamais influenciam a relação.",
          "Há associação, mas o desenho não prova sozinho causalidade nem exclui influência de renda e acesso."
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Átomos e tabela periódica introdutória",
    "objective": "Identificar partículas, átomos e íons, interpretar número atômico, isótopos e massas médias e usar a organização da tabela periódica em previsões introdutórias com limites explícitos.",
    "prerequisites": [
      "Noções de matéria, substância e carga elétrica",
      "Adição, subtração e média ponderada",
      "Leitura de símbolos, porcentagens e linhas e colunas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Partículas, modelos e identidade do elemento",
        "explanation": "Átomos são unidades constituintes dos elementos químicos; um elemento é identificado pelo número de prótons de seus átomos. Isso não significa que uma partícula isolada tenha todas as propriedades de uma amostra macroscópica, como ponto de fusão ou condutividade. No modelo nuclear, prótons positivos e nêutrons sem carga elétrica líquida formam o núcleo; elétrons negativos ocupam a região eletrônica. O núcleo concentra quase toda a massa, e a região eletrônica responde pela maior parte da extensão do átomo. O isótopo mais comum do hidrogênio tem núcleo com um próton e nenhum nêutron: não é correto exigir nêutrons em todo núcleo. Em unidades da carga elementar, cada próton tem +1 e cada elétron −1. Um átomo neutro tem tantos elétrons quanto prótons. Ao perder ou ganhar elétrons, torna-se um íon: cátion tem carga positiva e ânion, negativa. Essa transformação eletrônica não muda o elemento, pois mantém o número de prótons. Alterar o número de prótons envolve transformação nuclear, não simples ionização química. Modelos científicos mudaram com evidências: Dalton trabalhava com átomos como unidades indivisíveis em seu modelo; Thomson incluiu elétrons; Rutherford introduziu um núcleo pequeno e positivo; Bohr propôs níveis de energia quantizados, com êxito particular para o hidrogênio. No tratamento atual, orbitais descrevem estados e distribuições de probabilidade, sem órbitas planetárias definidas. Diagramas de camadas ajudam na introdução, mas não são fotografias do movimento eletrônico.",
        "steps": [
          "Identifique prótons, nêutrons e elétrons e suas cargas.",
          "Use a igualdade de prótons e elétrons apenas para a espécie neutra.",
          "Ao formar íons, altere elétrons sem modificar automaticamente o núcleo.",
          "Leia modelos e diagramas conforme suas hipóteses e limites."
        ],
        "example": "Modelo didático: um átomo neutro com 9 prótons tem 9 elétrons. Ao receber um elétron, fica com 10 elétrons e carga −1, mantendo 9 prótons. O elemento não mudou, mas a espécie passou a ser um ânion. O número de nêutrons depende do isótopo e não pode ser deduzido apenas desse dado.",
        "pitfall": "Dizer que ionização muda o número de prótons, que todo núcleo tem nêutrons ou que desenhos de elétrons em órbitas são a descrição quântica atual."
      },
      {
        "level": "intermediate",
        "title": "Número atômico, isótopos e massa média",
        "explanation": "Número atômico Z é o número de prótons e define o elemento. Número de massa A é a contagem de prótons e nêutrons do núcleo: A = Z + n; portanto, n = A − Z. A é um inteiro sem unidade e não é a mesma grandeza que a massa medida de um átomo em unidade u. Na notação de um nuclídeo, o número de massa fica à esquerda acima do símbolo e Z à esquerda abaixo; a carga do íon aparece à direita acima. Como alternativa textual, informar elemento, A, Z e carga torna o enunciado autossuficiente. Se a carga em unidades elementares for q, o número de elétrons é Z − q: uma carga +2 indica dois elétrons a menos, enquanto −1 indica um a mais. Isótopos são átomos do mesmo elemento, com o mesmo Z e diferente número de nêutrons, portanto diferentes A. Ionização e diferença isotópica não são a mesma mudança. Isótopos costumam ter comportamento químico semelhante, mas diferenças de massa podem produzir efeitos isotópicos; não têm necessariamente a mesma estabilidade nuclear. A massa média de uma amostra é ponderada pelas abundâncias: soma-se cada massa isotópica multiplicada pela sua fração. A unidade u corresponde a um doze avos da massa de um átomo de carbono-12. Os valores médios tabulados não significam que um átomo individual tenha uma fração de nêutron. Abundâncias dependem da amostra, e usar A como massa em u é uma aproximação que precisa ser informada no modelo.",
        "steps": [
          "Calcule nêutrons por A − Z, sem usar a carga para alterar A.",
          "Calcule elétrons por Z − q e confira o sinal da carga.",
          "Compare Z e A para reconhecer isótopos do mesmo elemento.",
          "Na média, use massas isotópicas e frações de abundância com soma igual a um."
        ],
        "example": "Uma espécie com Z = 8, A = 18 e carga −2 tem 8 prótons, 10 nêutrons e 10 elétrons. Outra espécie neutra com Z = 8 e A = 16 é do mesmo elemento e um isótopo diferente, com 8 nêutrons e 8 elétrons. A comparação separa núcleo e carga eletrônica.",
        "pitfall": "Arredondar uma massa média para descobrir obrigatoriamente os nêutrons de todo átomo, ou tratar a carga do íon como mudança do número atômico."
      },
      {
        "level": "advanced",
        "title": "Ler a tabela: períodos, grupos e tendências",
        "explanation": "A tabela periódica atual ordena elementos por número atômico crescente. Grupos são colunas, numeradas de 1 a 18, e períodos são linhas. A repetição de padrões eletrônicos ajuda a explicar semelhanças químicas, mas elementos de um grupo não são idênticos. Metais alcalinos pertencem ao grupo 1, excluindo o hidrogênio dessa família metálica; alcalino-terrosos, ao grupo 2; halogênios, ao 17; gases nobres, ao 18. O hidrogênio exige atenção por suas propriedades próprias, e o hélio tem a primeira camada completa com dois elétrons, embora esteja no grupo 18. Para elementos representativos simples, a distribuição de elétrons do átomo neutro em estado fundamental auxilia a leitura: 2,8,1 corresponde a três camadas ocupadas e um elétron na camada externa; 2,8,7 tem três camadas e sete elétrons externos. Não se transfere uma regra simplificada de camadas sem ressalvas para todos os metais de transição e íons. No modelo introdutório, perder ou receber elétrons pode levar a uma configuração de gás nobre, mas a regra do octeto não explica todos os compostos nem afirma que átomos desejam algo. Metais, ametais e metaloides apresentam características distintas; propriedades como condução e maleabilidade devem ser analisadas em condições definidas, com exceções. Dentro de comparações apropriadas, raios tendem a aumentar ao descer um grupo e diminuir ao avançar em um período; energia de primeira ionização tende ao sentido oposto, com exceções. Raio depende de definição e não se deve misturar raio covalente de um elemento com raio de van der Waals de outro. Eletronegatividade caracteriza atração de elétrons em ligação, e não é o mesmo que energia para retirar um elétron de átomo gasoso. A posição ajuda a formular previsões, sem substituir condições e evidências do sistema.",
        "steps": [
          "Localize linha, coluna e número atômico sem ordenar por massa média.",
          "Para exemplos representativos simples, relacione distribuição neutra e elétrons externos.",
          "Use formação de íons como modelo limitado, não como regra universal de ligação.",
          "Compare tendências com propriedades e definições compatíveis, reconhecendo exceções."
        ],
        "example": "O lítio neutro tem Z = 3 e distribuição introdutória 2,1. Está no período 2 e grupo 1, na família dos metais alcalinos. Ao perder um elétron, Li+ fica com 2 elétrons; a carga muda sem transformar o núcleo em hélio, pois seus três prótons continuam presentes.",
        "pitfall": "Ordenar a tabela por massa média, tratar hidrogênio como metal alcalino, aplicar octeto a todo composto ou comparar raios definidos por critérios diferentes."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um átomo neutro hipotético possui 13 prótons e 14 nêutrons. Quais são seu número atômico Z, número de massa A e número de elétrons?",
        "hint": "Z conta prótons, A soma prótons e nêutrons, e a neutralidade exige igualdade de elétrons e prótons.",
        "solution": "D identifica Z = 13, A = 13 + 14 = 27 e 13 elétrons. A troca Z e A e usa nêutrons como elétrons. B confunde nêutrons com prótons para definir Z. C usa apenas os nêutrons como A e o total nuclear como elétrons. Nenhuma mudança de carga foi informada que permita alterar a condição de neutralidade.",
        "options": [
          "Z = 27, A = 13, 14 elétrons.",
          "Z = 14, A = 27, 13 elétrons.",
          "Z = 13, A = 14, 27 elétrons.",
          "Z = 13, A = 27, 13 elétrons."
        ],
        "correctIndex": 3
      },
      {
        "level": "intermediate",
        "prompt": "Em uma amostra hipotética, os únicos dois isótopos de um elemento têm massas de 10,0 u e 11,0 u, com abundâncias de 20% e 80%, respectivamente. Qual é a massa média ponderada dessa amostra?",
        "hint": "Transforme porcentagens em frações e pondere cada massa por sua abundância; não faça média simples de abundâncias diferentes.",
        "solution": "B calcula 10,0×0,20 + 11,0×0,80 = 2,0 + 8,8 = 10,8 u. A atribui pesos iguais aos dois isótopos. C considera apenas o isótopo menos abundante e D apenas o mais abundante. A média deve ficar entre 10,0 e 11,0 u e mais próxima de 11,0 u, coerente com a maior abundância desse isótopo.",
        "options": [
          "10,5 u.",
          "10,8 u.",
          "10,0 u.",
          "11,0 u."
        ],
        "correctIndex": 1
      },
      {
        "level": "advanced",
        "prompt": "No modelo introdutório, dois átomos neutros em estado fundamental têm distribuições por camadas 2,8,1 e 2,8,7. Para estes elementos representativos, qual afirmação relaciona corretamente posição e formação de íons com camada externa completa?",
        "hint": "As duas distribuições têm três camadas ocupadas; compare perder um elétron no primeiro e receber um no segundo sem mudar os núcleos.",
        "solution": "C identifica período 3 para ambos, grupo 1 para o primeiro e grupo 17 para o segundo. Na formação dos íons simples considerados, o primeiro perde um elétron e fica 2,8, com carga +1; o segundo recebe um e fica 2,8,8, com carga −1. A troca grupos e sinais. B confunde número de camadas com número de grupo. D supõe alteração nuclear para explicar uma mudança apenas eletrônica.",
        "options": [
          "O primeiro é do grupo 17 e ganha um elétron; o segundo é do grupo 1 e perde um.",
          "Ambos pertencem ao grupo 3 porque apresentam três camadas ocupadas.",
          "Ambos estão no período 3; o primeiro é do grupo 1 e forma +1, o segundo é do grupo 17 e forma −1.",
          "Formar esses íons exige mudar os números de prótons dos dois núcleos."
        ],
        "correctIndex": 2
      }
    ]
  }
];

export const authoredCurriculumBatch05ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Probabilidade e estatística",
    "contentSha256": "0d3906855a5f24f8460fa708091696c4a87d6586e98b5a15e58d7b34aed4c6af",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/introductory-statistics-2e/pages/2-5-measures-of-the-center-of-the-data",
      "https://openstax.org/books/introductory-statistics-2e/pages/2-7-measures-of-the-spread-of-the-data",
      "https://openstax.org/books/introductory-statistics-2e/pages/3-1-terminology",
      "https://openstax.org/books/introductory-statistics-2e/pages/3-2-independent-and-mutually-exclusive-events",
      "https://openstax.org/books/introductory-statistics-2e/pages/3-3-two-basic-rules-of-probability",
      "https://openstax.org/books/introductory-statistics-2e/pages/4-3-binomial-distribution",
      "https://openstax.org/books/introductory-statistics-2e/pages/1-2-data-sampling-and-variation-in-data-and-sampling"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Soma ponderada: 2×3 + 5×2 + 11×1 = 27, com seis observações; média = 27/6 = 4,5. Ordenação: 2, 2, 2, 5, 5, 11; mediana = (2+5)/2 = 3,5. C é a única opção compatível. A ignora frequências: (2+5+11)/3 = 6 e mediana das categorias = 5. B confunde mediana com a moda 2. D usa a soma ponderada dividida pelas três categorias, 27/3 = 9, e mediana 5. A e D representam erros diferentes."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Primeira azul: 4/7. Sem reposição, restam 3 azuis entre 6 bolas; segunda azul: 3/6=1/2. Produto: (4/7)×(3/6)=12/42=2/7. Alternativa por combinações: C(4,2)/C(7,2)=6/21=2/7. B=16/49 corresponde a (4/7)² com reposição; C=4/7 ignora segunda retirada; D=1/7 não corresponde a nenhum modelo coerente."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "P(A)=0,1; P(B)=0,9. P(defeito|A)=0,2; P(defeito|B)=0,02. P(A∩defeito)=0,02; P(B∩defeito)=0,018. P(defeito)=0,038. P(A|defeito)=0,02/0,038=20/38=10/19≈52,63%. A=10% é prior P(A); B=20% é P(defeito|A) invertido; C=2% é P(A∩defeito) no total. D é o único resultado do teorema de Bayes corretamente aplicado."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Argumentação e coesão",
    "contentSha256": "571cf7cc4cb75350e0a89cbe5199707844919431e4c9a0e2920b5517b1ed53a7",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/writing-guide/pages/10-1-making-a-case-defining-a-position-argument",
      "https://openstax.org/books/writing-guide/pages/10-5-writing-process-creating-a-position-argument",
      "https://openstax.org/books/writing-guide/pages/10-6-editing-focus-paragraphs-and-transitions",
      "https://openstax.org/books/writing-guide/pages/handbook",
      "https://owl.purdue.edu/owl/general_writing/academic_writing/logic_in_argumentative_writing/fallacies.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Texto apresenta fato (estudantes chegam cedo) + obstáculo (não usam acervo) → proposta (avaliar abertura antecipada). Opção B capta a tese formulada na conclusão. A é razão/premissa. C extrapola para 'todos espaços permanentemente sem avaliação' — não defendido. D inventa 'obrigados a ler' — inexistente no texto. Gabarito e explicação de distractores estão corretos."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "'Embora o equipamento seja antigo, ele continua adequado' estrutura concessão: admite condição (antiguidade) que sugeriria inadequação, mas mantém conclusão oposta (adequação). Opção D descreve exatamente essa relação. A interpreta 'embora' como causa (inversão lógica). B atribui finalidade teleológica absurda. C generaliza 'antiguidade obriga adequação' — contradição semântica. Análise do pronome 'ele' é acessória; foco na relação concessiva está correto."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Argumento: '2 colegas preferem noite → portanto todos aprendem melhor à noite'. Duas falhas inferenciais: (1) generalização apressada (amostra n=2, não representativa, para população 'todos da cidade'); (2) troca de categoria (preferência subjetiva ≠ desempenho de aprendizagem mensurável). Opção A nomeia ambas. B reifica 'portanto' como garantia lógica — falácia de tratamento de conectivo como prova. C afirma o oposto do erro (diz que 2 colegas 'garantem' representatividade). D introduz 'proibição de estudo noturno' — homem de palha não presente no enunciado. Crítica direta à inferência está em A."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Classicismo e Quinhentismo",
    "contentSha256": "dfa5f6a2602e529718e94220609d39b37c349713e8b63a47944ca587a5856f90",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://ensina.rtp.pt/artigo/luis-de-camoes-as-influencias-classicas/",
      "https://ensina.rtp.pt/explicador/poesia-lirica-de-luis-de-camoes/",
      "https://ensina.rtp.pt/explicador/os-lusiadas-de-luis-de-camoes/",
      "https://ensina.rtp.pt/artigo/primeira-edicao-dos-lusiadas/",
      "https://antt.dglab.gov.pt/wp-content/uploads/sites/17/2025/04/Carta-de-Pero-Vaz-de-Caminha-transcricao.pdf",
      "https://cedoch.fflch.usp.br/ficha001",
      "https://sme.goiania.go.gov.br/conexaoescola/eaja/quinhentismo/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A opção B identifica corretamente a forma soneto italiano sem inferir autoria, data ou tema exclusivo. A incorretamente atribui a Camões e século XVI só pela estrutura. C descreve oitava de 8 versos, incompatível com 14 versos totais. D equivale soneto a tema amoroso único, ignorando diversidade temática. A resolução independente confirma que a estrutura formal é condição necessária, não suficiente, para atribuições históricas ou temáticas."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A opção D distingue corretamente cantos (divisões amplas), oitavas (8 versos decassílabos) e o esquema ABABABCC como correspondência de sons de rima, não repetição lexical. A confunde 10 cantos com 10 versos totais. B atribui 14 versos à oitava, confundindo com soneto. C trata letras de rima como obrigatoriedade de palavra idêntica, o que o esquema não determina. A verificação independente da estrutura épica confirma a hierarquia: canto > oitava > verso."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A opção A reconhece contemporaneidade sem homogeneizar gêneros, finalidades e posições enunciativas. B força toda carta quinhentista a ser soneto classicista por coincidência secular. C presume neutralidade e voz direta dos povos descritos em relatos de observadores situados. D apaga saberes e expressões indígenas anteriores à escrita alfabética colonial. A análise independente confirma que o recorte Quinhentismo envolve carta, relato e texto missionário com destinatários e propósitos distintos do Classicismo lírico-épico português."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Argumentos, repertório e evidências",
    "contentSha256": "06abda5b3a22ee0c4d77fc94b1f37abc6b71abe0c4a5cd4a80ac32fffa8dc47c",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/writing-guide/pages/10-1-making-a-case-defining-a-position-argument",
      "https://openstax.org/books/writing-guide/pages/10-5-writing-process-creating-a-position-argument",
      "https://openstax.org/books/writing-guide/pages/11-5-writing-process-reasoning-supported-by-evidence",
      "https://openstax.org/books/introductory-statistics-2e/pages/1-2-data-sampling-and-variation-in-data-and-sampling"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Opção C apresenta mecanismo pertinente: instruções claras permitem reunir documentos antes, reduzindo tentativas sem documentação necessária. Não inventa pesquisa, não usa autoridade irrelevante (B), não promete resolução total de problemas sociais (A) nem eliminação automática de toda desigualdade (D). A razão é adequada ao argumento sem sobreclaim."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Opção B analisa elementos do microtexto ficcional (cadeiras vazias + dúvida sobre ser ouvida) para discutir diferença entre disponibilidade física e percepção de acolhimento. A inventa estatística universal (80%), C atribui autoria a filósofo célebre não informada, D rejeita qualquer interpretação de ficção confundindo análise cultural com evidência quantitativa."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Opção D calcula corretamente: 40/100=40%, 60/200=30%, queda de 10 pontos percentuais, enquanto casos absolutos sobem de 40 para 60. A confunde aumento absoluto com taxa, B ignora denominador (200) assumindo 60%, C alega causalidade e representatividade municipal não suportadas. Conclusão respeita números e alcance amostral declarado."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Vocabulário contextual e cognatos",
    "contentSha256": "8d274eba025c9d16ec824e3adab4caf2122f14800a5482e37208f9bc9fdbbd9f",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://dictionary.cambridge.org/grammar/british-grammar/actual-and-",
      "https://dictionary.cambridge.org/us/dictionary/english/pretend",
      "https://dictionary.cambridge.org/dictionary/english/realize",
      "https://dictionary.cambridge.org/dictionary/english/resume",
      "https://dictionary.cambridge.org/dictionary/english/sensible",
      "https://dictionary.cambridge.org/dictionary/english/library"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "O trecho 'The museum offers information about temporary exhibitions. The dates change during the year' sustenta 'temporárias' (C) pelo cognato e pela segunda frase; A contradiz 'dates change', B confunde com 'temperature', D introduz gratuidade ausente no texto."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Em 'During the drama rehearsal, Leo pretended to be a reporter. He was playing a role', 'pretended' significa fingir/representar na encenação (A); B troca por planejar carreira, C transforma papel em profissão comprovada, D adiciona publicação de reportagem inexistente no trecho."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Em I 'realized that the workshop had moved' indica percepção/descoberta; em II 'realized her ambition to become a violin maker' indica concretização após prática. D distingue corretamente; A impõe concretização à descoberta, B reduz a realização a percepção, C adiciona negação inexistente."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Conectivos, pronomes e estruturas verbais",
    "contentSha256": "c92c3b96d9fac5bd6fa08b68d4b73d5e07cb4d8e7d8a3d321f174199d10c8b6b",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.rae.es/dpd/y",
      "https://www.rae.es/dpd/o",
      "https://www.rae.es/dpd/sino",
      "https://www.rae.es/dpd/pronombres%20personales%20%C3%A1tonos",
      "https://www.rae.es/dpd/cuyo",
      "https://www.rae.es/dpd/cuando",
      "https://www.rae.es/dpd/si",
      "https://www.rae.es/dpd/haber",
      "https://www.rae.es/dpd/estar"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A lacuna 1 precede 'infusiones' (som inicial /i/), exigindo 'e' por regra fonológica; 'y' (opção A) viola a alternância. A lacuna 2 corrige elemento negado 'café' por 'cacao' sem novo verbo pessoal, pedindo 'sino'; 'sino que' (opção D) exige oração com verbo conjugado. Opção B usa 'u' (forma de 'o' antes de /o/), imprópria para adição. Opção C (e / sino) satisfaz ambas as condições."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Em 'Marta entrega la carta a Luis', 'la carta' é OD e 'a Luis' é OI. Na reprise 'se la entrega', a ordem clítica padrão é OI+OD; 'le' (OI) torna-se 'se' diante de 'la' (OD) por regra morfológica, não por reflexividade. Opção A identifica corretamente: 'se' retoma Luis (OI) e 'la' retoma 'la carta' (OD). Opção B inverte as funções. Opção C força leitura reflexiva ignorando o contexto. Opção D trata 'la' como artigo, não como pronome de OD."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A hipótese presente (segunda condicional) exige imperfeito de subjuntivo na protase ('si' + tivesse) e condicional simples na apódose. 'tuviera' (imperfeito subjuntivo de tener) e 'haría' (condicional de hacer) formam o par canônico. Opção A usa 'tendría' (condicional) na protase, inadequado. Opção B troca as formas. Opção C usa presente/futuro (condicional aberta), não hipótese. Opção D atende exatamente à construção delimitada no enunciado."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Eletricidade cotidiana",
    "contentSha256": "35decf49497b4e2b2d22a6dda6adedabc9c88c544a3add3e19fab2baea18c0cf",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/college-physics-2e/pages/20-1-current",
      "https://openstax.org/books/college-physics-2e/pages/20-2-ohms-law-resistance-and-simple-circuits",
      "https://openstax.org/books/college-physics-2e/pages/20-4-electric-power-and-energy",
      "https://openstax.org/books/college-physics-2e/pages/21-1-resistors-in-series-and-parallel",
      "https://openstax.org/books/college-physics-2e/pages/23-12-rlc-series-ac-circuits"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Circuito série: Req=6+4=10Ω, I=20/10=2A. Queda no resistor de 6Ω: U=RI=6×2=12V (o de 4Ω tem 8V, soma 20V). Opção B correta. A usa 20V/6Ω≈3,33A ignorando o segundo resistor. C mantém I=2A mas atribui 20V ao resistor de 6Ω violando U=RI. D resulta em 5A e 30V, incompatíveis com Req=10Ω e fonte 20V."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Ief=S/Uef=800/200=4A. P=S×FP=800×0,75=600W=0,6kW. E=P×t=0,6×10=6kWh. Opção A correta. B calcula I=P/Uef=600/200=3A ignorando que FP≠1. C usa S=800VA como potência ativa gerando 8kWh. D combina ambos erros. FP usado corretamente para P=S×FP, não como rendimento."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Entrada A=1,2×4×10=48kWh. Útil=48×0,75=36kWh. Entrada B=36/0,90=40kWh. Diferença=8kWh. Economia=8×0,80=R$6,40. Opção D correta. A confunde energia útil (36kWh) com entrada de B. B ignora rendimento maior mantendo 48kWh. C divide entrada de A por 0,75 novamente (48/0,75=64kWh) contando perdas em dobro."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Soluções e concentração",
    "contentSha256": "2e08554e2fc1f2b2abfa4d8b379c8fb5dbf910c7fd737b5295bdd3acb07be3a9",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/3-3-molarity",
      "https://openstax.org/books/chemistry-2e/pages/3-4-other-units-for-solution-concentrations",
      "https://openstax.org/books/chemistry-2e/pages/11-1-the-dissolution-process",
      "https://openstax.org/books/chemistry-2e/pages/11-3-solubility",
      "https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "C = 12 g / 0,200 L = 60 g/L. % m/v = gramas em 100 mL = 6 g/100 mL = 6% m/v. Opção B confere. A usa 12 g/L (esquece converter 200 mL para 0,2 L). C usa 0,020 L (dez vezes menor). D divide 60 por 10. Distratores explicados corretamente."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "n(NaCl) = 5,85 g / 58,5 g/mol = 0,100 mol. c = 0,100 mol / 0,500 L = 0,200 mol/L. Opção D confere. A apresenta apenas n (0,100 mol) como se volume fosse 1 L. B trata massa 5,85 como mols (5,85/0,5 = 11,7). C dobra para 0,400 contando íons, mas a pergunta pede concentração analítica de NaCl."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "n1 = 0,40 mol/L × 0,150 L = 0,060 mol. n2 = 0,10 mol/L × 0,250 L = 0,025 mol. n_total = 0,085 mol. c_final = 0,085 mol / 0,500 L = 0,170 mol/L. Opção C confere. A faz média simples (0,40+0,10)/2 = 0,25. B divide por 0,400 L (soma dos volumes iniciais) ignorando volume final 0,500 L. D apresenta n_total (0,085) como concentração."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Ecologia e impactos ambientais",
    "contentSha256": "d64428403da616e72afe40143862d04da839edeab3550310dda9a52009217d08",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/biology-2e/pages/45-1-population-demography",
      "https://openstax.org/books/biology-2e/pages/45-6-community-ecology",
      "https://openstax.org/books/biology-2e/pages/46-1-ecology-of-ecosystems",
      "https://openstax.org/books/biology-2e/pages/46-2-energy-flow-through-ecosystems",
      "https://openstax.org/books/biology-2e/pages/46-3-biogeochemical-cycles",
      "https://openstax.org/books/biology-2e/pages/47-3-threats-to-biodiversity",
      "https://openstax.org/books/biology-2e/pages/47-4-preserving-biodiversity"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A questão pede o nível que inclua explicitamente seres vivos (plantas, aves, insetos) e fatores abióticos (luz, água, solo) com suas interações. População (A) refere-se a uma única espécie. Comunidade (B) reúne populações de espécies diferentes, mas exclui o componente abiótico. Ecossistema (C) é a definição padrão que integra comunidade e fatores abióticos em interação. Bioma (D) é unidade regional ampla, não o nível de integração local descrito. O gabarito 2 (Ecossistema) está correto e os distractores são adequadamente explicados na solução."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Cálculo independente: produtores = 2.000 kJ/m²/ano. Transferência produtores → primários = 12% → 2.000 × 0,12 = 240 kJ/m²/ano (opção A, energia nos primários). Transferência primários → secundários = 25% → 240 × 0,25 = 60 kJ/m²/ano (opção B). Opção C (500) resulta de 25% aplicado diretamente aos 2.000, ignorando a etapa intermediária. Opção D (20) assume 10% em duas etapas (2.000 × 0,1 × 0,1), contradizendo as eficiências dadas no enunciado. Gabarito 1 (60) está correto."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "O enunciado descreve a sequência causal clássica de eutrofização: aumento de nutrientes → floração de algas → decomposição da matéria orgânica → consumo elevado de oxigênio → hipóxia → mortandade. Opção D identifica corretamente o mecanismo (eutrofização) e a medida que atua na causa (reduzir aporte de nutrientes, ex.: tratamento de efluentes). Opção A confunde com biomagnificação (contaminantes persistentes em teia trófica) e propõe medida irrelevante. Opção B atribui a hipóxia à respiração exclusiva de peixes e propõe eliminar peixes, sem reduzir a carga de nutrientes. Opção C confunde destruição da camada de ozônio (estratosfera) com processo aquático e propõe adicionar nutrientes, agravando o problema. Gabarito 3 está correto."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Cidadania e direitos",
    "contentSha256": "6d476d6248e4424db0510ee13272527a3423901ab1fd6a4b75d36a91d9f25c09",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.tse.jus.br/institucional/museu-do-voto/temas/eleicoes-nos-tempos-do-imperador",
      "https://www2.camara.leg.br/legin/fed/decret/1824-1899/decreto-3029-9-janeiro-1881-546079-publicacaooriginal-59786-pl.html",
      "https://www.tse.jus.br/servicos-eleitorais/glossario/termos/titulo-eleitoral/1o-titulo-eleitoral-1881",
      "https://www.tse.jus.br/jurisprudencia/julgados-historicos/assembleia-constituinte-1946",
      "https://www.tse.jus.br/comunicacao/noticias/2016/Novembro/constituicao-de-1985-garantiu-o-direito-ao-voto-aos-eleitores-analfabetos",
      "https://www.camara.leg.br/noticias/704228-veja-a-cronologia-do-voto-feminino-no-brasil/",
      "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
      "https://www2.camara.leg.br/a-camara/conheca/historia/a1republica.html/",
      "https://www.tse.jus.br/legislacao/codigo-eleitoral/leis-ordinarias/lei-nb0-9.709-de-18-de-novembro-de-1998",
      "https://www.tse.jus.br/servicos-eleitorais/glossario/termos/eleicao-direta",
      "https://www2.camara.leg.br/legin/fed/declei/1940-1949/decreto-lei-5452-1-maio-1943-415500-publicacaooriginal-1-pe.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Questão básica sobre Lei Saraiva: opção C ('A eleição tornou-se direta sem que isso significasse sufrágio universal') é a única que distingue corretamente FORMA de eleição (direta vs. graus) de ALCANCE (universal vs. restrito por renda e alfabetização). A confunde direto com universal; B contradiz o enunciado (renda mantida); D anacronismo (voto feminino só em 1932). Gabarito 2 confirmado independemente."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Questão intermediária sobre voto de analfabetos na transição: opção A ('Reconhecimento em 1985 pela Emenda nº 25 e voto facultativo consolidado em 1988') é historicamente precisa — EC 25/1985 (Art. 3) primeiro garantiu o exercício do voto a analfabetos; CF/1988 (Art. 14, §1) tornou facultativo. B inverte (1946 mantinha exclusão); C apaga marco de 1985; D confunde com voto feminino de 1932. Gabarito 0 confirmado independemente."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Questão avançada sobre voto facultativo vs. elegibilidade: opção D ('A conclusão confunde voto facultativo com elegibilidade; analfabetos são inelegíveis') reflete CF/1988 Art. 14 §1 (voto facultativo) e §4 (inelegibilidade dos analfabetos). A erra ao igualar capacidade eleitoral ativa e passiva; B nega direito de votar (falso, é facultativo); C inventa exceção via plebiscito que não existe na Constituição. Gabarito 3 confirmado independemente."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Urbanização e globalização",
    "contentSha256": "889f77ebb4af3df73377e51e882c3141801b7d0a22c2d82b21bd18fbdc22ab2a",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.ibge.gov.br/geociencias/organizacao-do-territorio/tipologias-do-territorio/15798-regioes-de-influencia-das-cidades.html",
      "https://www.ibge.gov.br/geociencias/organizacao-do-territorio/divisao-regional/15782-arranjos-populacionais-e-concentracoes-urbanas-do-brasil.html",
      "https://www.ibge.gov.br/biblioteca/visualizacao/livros/liv102138.pdf",
      "https://unhabitat.org/sites/default/files/2020/10/wcr_2020_report.pdf",
      "https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/desenvolvimento-urbano-e-metropolitano/cidade-protagonista-da-acao-climatica/arquivos/planosetorialcidades.pdf",
      "https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/adaptabrasil-lanca-painel-cidades-para-facilitar-a-consulta-sobre-risco-climatico"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Cálculo independente confirma: grau inicial 60/100=60%, final 72/150=48% (queda 12 p.p.), enquanto população urbana cresceu 12k. Opção B é a única que captura ambas as grandezas corretamente. A confunde absoluto com relativo; C aplica 20% ao grau; D nega o aumento absoluto."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Enunciado afirma que A (300k) concentra gestão/serviços especializados atraindo vários municípios, enquanto B (500k) exerce menor influência nesses fluxos. D é diretamente suportada: centralidade nesses fluxos não decorre só da população. A impõe ordem demográfica; B nega conexões declaradas; C atribui classe REGIC formal sem critérios em exemplo hipotético."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Cenário: redução de exposição a inundações (benefício de segurança) + novos locais distantes de empregos sem transporte adequado (prejuízo de acessibilidade). A reconhece ambos e pede avaliação integrada. B transforma benefício parcial em sucesso total; C universaliza indesejabilidade ignorando segurança; D afirma irrelevância da distância sem base no caso."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Filosofia medieval e modernidade",
    "contentSha256": "56086a7f8131a132b83aa54e32bf7c7fcd8ad0e87f8e3a288c30bf7408ec462e",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/introduction-philosophy/pages/4-3-jewish-christian-and-islamic-philosophy",
      "https://www.newadvent.org/summa/1001.htm",
      "https://plato.stanford.edu/entries/ockham/",
      "https://www.gutenberg.org/cache/epub/59/pg59-images.html",
      "https://www.gutenberg.org/cache/epub/9662/pg9662-images.html",
      "https://www.gutenberg.org/files/52821/52821-h/52821-h.htm",
      "https://www.gutenberg.org/cache/epub/3207/pg3207-images.html",
      "https://www.gutenberg.org/files/7370/7370-h/7370-h",
      "https://www.gutenberg.org/files/46333/46333-h/46333-h.htm"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A opção B reflete a doutrina tomista: verdades de fé podem exceder a razão natural (mistérios) sem contradizê-la, pois ambas têm origem em Deus. A opção A inventa licença para contradição (doutrina do 'duplo verdade' condenada em 1277). A opção C apaga a distinção metodológica entre demonstração e autoridade. A opção D nega que a razão natural alcance verdades sobre Deus, contra as Cinco Vias."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A opção D captura o núcleo do cogito: duvidar é pensar, e quem pensa existe naquele ato (\"cogito, ergo sum\"). A opção A confunde o fundamento subjetivo com prova imediata do mundo externo (questão superada apenas com a prova de Deus e a veracidade divina). A opção B transforma dúvida metódica em ceticismo definitivo. A opção C introduz critério de inteligência inexistente no argumento."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A opção A preserva a nuance: Hobbes autoriza soberano forte mas mantém o direito de autopreservação intransferível; resistência a ameaça direta de morte é lícita (Leviathan XXI.11). A opção B exagera atribuindo direito de revolução por discordância cotidiana. A opção C ignora que o soberano não é parte do pacto mas seu resultado. A opção D confunde a vontade do soberano hobbesiano com a vontade geral rousseauniana."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Cultura, identidade e diversidade",
    "contentSha256": "387da668c254c54622282b651f461fa9e93655f2c0f2f38bd4318a622216ece6",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/introduction-sociology-3e/pages/3-1-what-is-culture",
      "https://openstax.org/books/introduction-sociology-3e/pages/3-2-elements-of-culture",
      "https://openstax.org/books/introduction-sociology-3e/pages/11-1-racial-ethnic-and-minority-groups",
      "https://www.unesco.org/en/legal-affairs/unesco-universal-declaration-cultural-diversity",
      "https://chicagounbound.uchicago.edu/uclf/vol1989/iss1/8/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A opção C identifica corretamente transmissão social e reelaboração como processos culturais. A confunde cultura com herança biológica. B trata adaptação como perda de cultura (imobilismo). D restringe cultura a escolaridade universitária (erudição). O exemplo da seção (associação de moradores com app) é distinto do exercício (técnica artesanal)."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A opção A descreve relativização metodológica com capacidade crítica e respeito a direitos humanos, conforme o enunciado. B inverte para etnocentrismo (medida universal do observador). C transforma compreensão em aprovação obrigatória de violência, contraditando o texto. D introduz determinismo biológico inexistente no cenário. Exemplo da seção (instituição com cruzamento raça/gênero) difere do exercício (pesquisadora)."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A opção D avalia corretamente que visibilidade não supre ausência de autorização, atribuição e distribuição justa, sem presumir resultado judicial. A iguala divulgação a consentimento automático. B nega agência dos produtores. C afirma sentença e valor de indenização sem base fática. Exemplo da seção (exposição digital com curadoria compartilhada) é distinto do exercício (empresa usa gravações sem autorização)."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Arte brasileira e modernismo",
    "contentSha256": "281b4bc1fa1a367f4f85ff3c8b796c84e65a90a99829dde933cf032dc90f15fc",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://brasilianafotografica.bn.gov.br/?p=26620",
      "https://press.moma.org/wp-content/files_mf/tarsilaexpanded_final_290.pdf",
      "https://www.moma.org/artists/50079-oswald-de-andrade",
      "https://jornal.usp.br/artigos/tarsila-popular-e-antropofagica/",
      "https://literaturabrasileira.ufsc.br/documentos?id=222631",
      "https://masp.org.br/acervo/obra/retirantes",
      "https://mam.rio/artistas/lygia-clark/",
      "https://www.gov.br/funarte/pt-br/assuntos/noticias/todas-noticias/dia-internacional-da-mulher-funarte-homenageia-as-participantes-da-semana-de-arte-moderna-de-1922"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A opção B é a única que propõe análise das relações formais dadas (cor não naturalista, simplificação de volumes, espaço comprimido) em função do efeito expressivo, sem recorrer a critério fotográfico (A), atribuição de autoria por traço genérico (C) ou descarte dos dados formais (D). O enunciado fornece elementos observáveis que sustentam a interpretação expressiva."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A paráfrase didática descreve absorção e transformação crítica de referências. A opção D corresponde exatamente: 'Transformar criticamente referências recebidas, em vez de apenas copiá-las ou proibir contato.' A opção A descreve imitação subordinada (oposto), B descreve isolamento absoluto (oposto), C desloca a metáfora para prescrição corporal literal (leitura ingênua)."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "O enunciado opõe representação visual (estar nas imagens históricas) a agência decisória (participar das decisões de produção). A opção A distingue corretamente: representação não prova participação; agência requer evidências próprias. B confunde retrato com autoria automática. C nega capacidade interpretativa aos artistas da comunidade. D impõe consenso uniforme, apagando diferenças internas."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Atividade física e qualidade de vida",
    "contentSha256": "e917d96c57a360f9318bde43c701f999e56c0a20cfa4c7ca8baf954ae4b2deff",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
      "https://www.who.int/publications/i/item/9789240015128",
      "https://www.who.int/tools/whoqol",
      "https://bvsms.saude.gov.br/bvs/publicacoes/guia_atividade_fisica_populacao_brasileira.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A rotina descrita combina exercício planejado (3 dias/semana) e comportamento sedentário (horas sentada em vigília). Opção C é a única que reconhece a coexistência sem apagar o tempo sedentário (A), excluir exercício da atividade física (B) ou confundir vigília com sono (D). Cálculo de recomendação semanal não é solicitado nem necessário."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "3 períodos × 40 min = 120 min; 2 períodos × 20 min = 40 min; total aeróbio moderado = 160 min. Limite inferior OMS 2020 = 150 min. Diferença = +10 min. Opção B reflete o cálculo correto e a ressalva de que fortalecimento muscular não foi informado. A omite os 20 min, C ignora frequências, D omite o segundo período de 20 min."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Desenho transversal sem medida basal nem controle de renda/acesso permite apenas associação. Opção D enuncia associação sem causalidade isolada nem exclusão de confundidores. A atribui causalidade exclusiva sem temporalidade/controle; B generaliza efeito de grupo para indivíduo; C nega influência ambiental justamente quando variáveis não foram controladas."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Átomos e tabela periódica introdutória",
    "contentSha256": "9d3048c244247cb1eec462149c609092364875b9a702953143643f6c27d27929",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism",
      "https://openstax.org/books/chemistry-2e/pages/2-5-the-periodic-table",
      "https://openstax.org/books/chemistry-2e/pages/6-4-electronic-structure-of-atoms-electron-configurations",
      "https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Átomo neutro com 13 prótons e 14 nêutrons: Z=13 (prótons), A=13+14=27, elétrons=13 (neutralidade). Opção D correta. A troca Z/A e usa nêutrons como elétrons; B usa nêutrons para Z; C usa nêutrons como A e total nuclear como elétrons. Nenhuma alteração de carga informada."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Massa média = 10,0×0,20 + 11,0×0,80 = 2,0 + 8,8 = 10,8 u. Opção B correta. A faz média aritmética (pesos iguais); C e D usam apenas um isótopo. Resultado entre 10,0 e 11,0 u, mais próximo de 11,0 u pela maior abundância."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Configurações 2,8,1 e 2,8,7 indicam três camadas (período 3). Primeira: 1 elétron externo → grupo 1, perde 1e⁻ forma +1. Segunda: 7 elétrons externos → grupo 17, ganha 1e⁻ forma −1. Opção C correta. A inverte grupos e sinais; B confunde número de camadas com grupo; D supõe mudança nuclear para ionização."
      }
    ]
  }
] as const;
