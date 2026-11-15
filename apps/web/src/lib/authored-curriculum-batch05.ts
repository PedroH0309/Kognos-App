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
  }
] as const;
