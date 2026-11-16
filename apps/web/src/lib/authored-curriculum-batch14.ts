import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch14:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Funções exponencial e logarítmica",
    "objective": "Analisar domínio, imagem e monotonicidade de exponenciais e logaritmos, usar propriedades com suas condições e resolver equações e inequações verificando candidatos.",
    "prerequisites": [
      "Potências e expoentes reais",
      "Domínio e imagem de funções",
      "Equações e inequações elementares"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Base, variação multiplicativa e gráfico",
        "explanation": "A função exponencial básica f(x)=b^x, com b>0 e b≠1, tem domínio ℝ e imagem (0,+∞). A base positiva permite expoentes reais, e b=1 produziria uma função constante. Não confunda b^x com x^b: a posição da variável muda o tipo de função. Se b>1, b^x é crescente; se 0<b<1, é decrescente. Em ambos os casos, b^0=1, portanto o gráfico passa por (0,1). O eixo y=0 é assíptota horizontal: o valor se aproxima de zero sem alcançá-lo para x finito. Para b>1 isso ocorre quando x tende a −∞; para 0<b<1, quando x tende a +∞. A direção do limite não é igual nos dois casos. Em f(x)=A·b^x+k, com A≠0, a assíptota passa a ser y=k. Se A>0, a imagem é (k,+∞); se A<0, é (−∞,k), e a multiplicação negativa inverte a monotonicidade. Em A·b^(x−h)+k, o parâmetro h desloca horizontalmente: h positivo leva o gráfico básico para a direita. Para modelar uma quantidade positiva com valor inicial Q₀ e fator constante por período, pode-se usar Q(t)=Q₀·b^t. Fator 1,08 corresponde a aumento de 8% por período, enquanto 0,92 corresponde a redução de 8%. O modelo pressupõe esse comportamento no intervalo estudado; não garante crescimento ilimitado de uma população ou retorno de um investimento real.",
        "steps": [
          "Identifique base, posição da variável e eventuais transformações.",
          "Determine monotonicidade considerando base e sinal do coeficiente.",
          "Calcule domínio, imagem, ponto inicial e assíptota sem confundir o caso básico com o transformado.",
          "Interprete o fator por período e explicite os limites de um modelo aplicado."
        ],
        "example": "Modelo autoral: Q(t)=80·(1,25)^t, com t inteiro não negativo em períodos, descreve uma quantidade fictícia. Q(0)=80 e Q(2)=125. O fator é 1,25, aumento de 25% por período; não são 25 unidades fixas. Já g(x)=−2·3^x+6, em domínio real, é decrescente, tem imagem (−∞,6) e g(0)=4.",
        "pitfall": "Afirmar que toda exponencial transformada é positiva, que base maior que um sempre basta para crescimento com coeficiente negativo ou que o limite zero ocorre sempre em −∞."
      },
      {
        "level": "intermediate",
        "title": "Logaritmo como inversa e propriedades condicionadas",
        "explanation": "Para x>0, b>0 e b≠1, y=log_b(x) significa b^y=x. O logaritmo pergunta qual expoente produz o argumento; não é divisão entre x e b. A função logarítmica básica é inversa de b^x: seu domínio é (0,+∞), sua imagem é ℝ, e o gráfico passa por (1,0) e (b,1). Tem assíptota vertical x=0 e é crescente para b>1 ou decrescente para 0<b<1. O fato de o argumento ser positivo não torna o resultado necessariamente positivo: log₂(1/4)=−2. Em log_b(u(x)), exija u(x)>0; por exemplo, log₂(x−5) só existe nos reais para x>5, com assíptota x=5. Para argumentos positivos M e N, valem log_b(MN)=log_b(M)+log_b(N) e log_b(M/N)=log_b(M)−log_b(N). Para M>0 e r real, log_b(M^r)=r·log_b(M). Não existe regra análoga que transforme o logaritmo de uma soma na soma dos logaritmos. Essas condições importam: log_b(x²) existe para x≠0, mas 2log_b(x) exige x>0; para x≠0, a forma válida é 2log_b(|x|). A mudança de base é log_b(M)=log_c(M)/log_c(b), com M>0, b>0, c>0 e bases diferentes de 1. ln designa base e; quando se adota log sem índice como base 10, isso deve estar claro. Usar calculadora não dispensa verificar domínio e evitar arredondamentos prematuros.",
        "steps": [
          "Traduza logaritmo para potência e confira as condições da base e do argumento.",
          "Determine o domínio da expressão inteira, mantendo todas as restrições.",
          "Aplique produto, quociente ou potência somente nas condições válidas.",
          "Se mudar de base, preserve numerador e denominador e confira o resultado."
        ],
        "example": "Cálculo autoral: log₅(125)−log₅(5)=log₅(25)=2. Outra expressão, log₂(x−2), tem domínio x>2 e vale zero quando x−2=1, isto é, x=3. A condição x>2 deve acompanhar qualquer transformação; ela não pode desaparecer porque o cálculo posterior produziu um número real.",
        "pitfall": "Confundir argumento positivo com logaritmo positivo, distribuir log sobre soma ou expandir log(x²) como 2log(x) para x negativo."
      },
      {
        "level": "advanced",
        "title": "Equações, inequações e conferência das condições",
        "explanation": "Equações exponenciais com a mesma base b>0, b≠1 permitem igualar expoentes: b^u=b^v equivale a u=v. Se as bases não puderem ser convenientemente igualadas, aplicar um logaritmo aos dois lados positivos pode ajudar. Em 4^x=7, por exemplo, x=ln(7)/ln(4); não se troca essa razão por ln(7/4). Em equações logarítmicas, registre primeiro o domínio de cada argumento e depois use as propriedades. A equação algébrica obtida pode admitir candidatos excluídos pelo domínio original. Mesmo quando o produto de dois argumentos negativos é positivo, os logaritmos originais continuam sem definição real; por isso, condensar uma soma não autoriza ampliar o domínio. Em inequações, a monotonicidade determina o sentido. Para b>1, b^u≥b^v equivale a u≥v; para 0<b<1, equivale a u≤v. A mesma inversão vale ao comparar logaritmos de mesma base menor que um, mantendo os argumentos positivos. Considere log_(1/2)(x+2)≥log_(1/2)(5): o domínio exige x>−2 e a base decrescente fornece x+2≤5; a solução é −2<x≤3. O extremo −2 fica fora porque tornaria o argumento zero. O extremo 3 entra porque produz igualdade. Uma resposta adequada combina transformação algébrica, domínio e fronteiras. Ao interpretar um modelo, restrições do contexto, como tempo não negativo ou contado em períodos inteiros, também precisam ser aplicadas, sem confundir domínio matemático de uma função com valores admissíveis em uma situação.",
        "steps": [
          "Registre o domínio e as restrições do contexto antes de transformar.",
          "Use bases iguais ou logaritmos com lados positivos e propriedades válidas.",
          "Em inequações, determine se a função é crescente ou decrescente.",
          "Interseccione condições e confira candidatos e extremos no enunciado original."
        ],
        "example": "Exemplo autoral: log₂(x−4)=3 exige x>4 e fornece x−4=8, portanto x=12; substituir retorna log₂(8)=3. Em outro caso, 4^(x+2)=64=4³ leva a x+2=3 e x=1. São equações distintas das atividades e não dependem de figura nem de tabela externa.",
        "pitfall": "Aceitar raiz fora do domínio, manter o sentido de uma comparação com base entre zero e um ou esquecer a interseção e os extremos abertos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em um exercício autoral, f(x)=5·(1/2)^x + 2 é considerada para x real. Qual alternativa descreve sua monotonicidade, domínio e imagem?",
        "hint": "A potência é positiva e decrescente; multiplique por cinco e só depois aplique o deslocamento vertical de duas unidades.",
        "options": [
          "Crescente, domínio ℝ e imagem (2,+∞).",
          "Decrescente, domínio ℝ e imagem (2,+∞).",
          "Decrescente, domínio (0,+∞) e imagem ℝ.",
          "Decrescente, domínio ℝ e imagem [2,+∞)."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: como 0<1/2<1 e o coeficiente 5 é positivo, a função é decrescente. O expoente aceita todo real; 5·(1/2)^x é sempre positivo e assume todos os valores positivos, então somar 2 dá imagem (2,+∞). A erra o sentido; C troca domínio e imagem; D inclui 2, que é limite, mas nunca valor para x finito. f(0)=7 e y=2 é a assíptota."
      },
      {
        "level": "intermediate",
        "prompt": "Resolva nos reais a equação autoral log₃(x−1) + log₃(x−3) = 1, respeitando o domínio original.",
        "hint": "As duas condições de positividade precisam valer juntas. Após combinar os logaritmos, confira cada raiz na equação inicial.",
        "options": [
          "x = 0 ou x = 4.",
          "x = 0.",
          "x = 4.",
          "Não há solução real."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: x−1>0 e x−3>0 exigem x>3. Nesse domínio, log₃((x−1)(x−3))=1 leva a (x−1)(x−3)=3. Expandindo, x²−4x+3=3, portanto x(x−4)=0 e os candidatos são 0 e 4. Só 4 está no domínio, e log₃(3)+log₃(1)=1+0=1. A e B aceitam 0, que torna negativos os dois argumentos; D descarta a solução válida."
      },
      {
        "level": "advanced",
        "prompt": "Determine a solução real da inequação autoral (1/3)^(2x−1) ≥ 27.",
        "hint": "Escreva 27 como potência de 1/3 e use o fato de que a base entre zero e um define uma função decrescente.",
        "options": [
          "x ≤ −1.",
          "x ≥ −1.",
          "x < −1.",
          "x ≤ 2."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: 27=(1/3)^(−3). Como a função exponencial de base 1/3 é decrescente, a comparação equivale a 2x−1≤−3. Então 2x≤−2 e x≤−1. Em x=−1, o expoente é −3 e os lados são iguais, logo a fronteira entra. B não inverte o sentido; C exclui a igualdade; D inclui valores que falham, como x=0, quando o lado esquerdo vale 3<27."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Vozes verbais e colocação pronominal",
    "objective": "Analisar vozes verbais, distinguir funções de se e revisar a posição de pronomes átonos em construções da escrita formal, preservando sentido e reconhecendo a variação de registro.",
    "prerequisites": [
      "Sujeito e complementos verbais",
      "Transitividade em contexto",
      "Tempos verbais e pronomes pessoais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Voz verbal e reorganização da informação",
        "explanation": "A análise da voz verbal relaciona a construção do verbo ao sujeito e aos participantes do acontecimento. Em uma ação transitiva simples, a voz ativa apresenta o sujeito como agente: em um exemplo autoral, a equipe organizou a mostra. Na passiva analítica correspondente, a mostra foi organizada pela equipe, o antigo objeto direto passa a sujeito paciente. O auxiliar ser mantém o tempo e o modo da construção, concordando com o novo sujeito; o particípio concorda com ele em gênero e número. Assim, a equipe organizará as mostras corresponde a as mostras serão organizadas pela equipe, e não a foram organizadas. O agente da passiva pode ser expresso ou omitido: a mostra foi organizada não identifica quem organizou. Isso não prova que ninguém agiu. A transformação preserva a relação básica entre participantes, mas muda a organização da informação e pode alterar o foco do texto. Não se deve dizer que ativa e passiva têm sempre o mesmo efeito discursivo, nem que a passiva sempre serve para esconder responsabilidade. Em construções reflexivas, o sujeito participa como agente e paciente, como Lia se penteou; em Lia e Rui se cumprimentaram, a leitura recíproca indica uma ação de um em relação ao outro. Nem todo se marca reflexividade, e nem toda frase ativa descreve uma ação voluntária: em Lia recebeu uma mensagem, ela não é a autora do envio. A análise sintática não se reduz a decidir quem parece mais ativo no mundo.",
        "steps": [
          "Localize sujeito, verbo e complementos na construção concreta.",
          "Na transposição regular, reconheça o objeto direto que pode passar a sujeito paciente.",
          "Preserve tempo e modo e faça a concordância do auxiliar e do particípio.",
          "Compare foco e informação expressa sem inventar intenção ou agente omitido."
        ],
        "example": "Par autoral: as pesquisadoras catalogaram a coleção e a coleção foi catalogada pelas pesquisadoras. O pretérito perfeito é mantido no auxiliar foi; catalogada concorda com coleção, feminino singular. Na forma a coleção foi catalogada, o agente não está expresso, mas não se conclui que a catalogação ocorreu sem pessoas envolvidas.",
        "pitfall": "Trocar o tempo na transposição, fazer o particípio concordar com o agente ou afirmar que toda voz ativa exige sujeito voluntário e toda passiva esconde responsabilidade."
      },
      {
        "level": "intermediate",
        "title": "Se apassivador, indeterminação e concordância",
        "explanation": "Na análise tradicional da escrita formal, o se pode funcionar como partícula apassivadora junto a um verbo com transitividade direta. Em uma frase autoral como restauram-se mapas, mapas é sujeito paciente plural e o verbo fica no plural: a relação pode ser expressa por mapas são restaurados. A posição depois do verbo não transforma automaticamente o termo em objeto direto. Em necessita-se de apoio, no sentido de precisar de algo, a construção tem complemento introduzido por de; o se funciona como índice de indeterminação do sujeito, e o verbo permanece na terceira pessoa do singular. De apoio não é sujeito paciente que imponha plural. Essa distinção exige olhar a regência e o significado do verbo no contexto, além da presença do pronome. A simples pergunta há se? não resolve a classificação. Compare também Ana se observou no espelho, com leitura reflexiva, e as colegas se abraçaram, com leitura recíproca no contexto. Há ainda verbos pronominais, como arrepender-se, que não se analisam automaticamente como passivas. Uma tentativa de transposição deve preservar a relação expressa, e não produzir uma frase artificial apenas para justificar um rótulo. Os padrões ensinados aqui são um recorte da análise normativa e não uma afirmação de que toda ocorrência real da língua se organize do mesmo modo. Para revisar, identifique o termo que controla a concordância e diferencie sujeito paciente plural de complemento preposicionado; não use a quantidade de pessoas mencionadas como critério isolado.",
        "steps": [
          "Examine a transitividade e a regência do verbo no sentido usado.",
          "Teste a leitura passiva sem alterar a relação de sentido.",
          "Na passiva sintética, faça o verbo concordar com o sujeito paciente.",
          "Na construção indeterminada com complemento preposicionado, mantenha o singular e não classifique o complemento como sujeito."
        ],
        "example": "Exemplos autorais: selecionam-se imagens equivale, na leitura passiva, a imagens são selecionadas; o plural é controlado por imagens. Já depende-se de autorizações tem sujeito indeterminado: de autorizações é complemento do verbo depender, e a pluralidade desse complemento não exige dependem-se.",
        "pitfall": "Tratar todo se como apassivador, classificar um complemento preposicionado como sujeito ou usar singular em uma passiva sintética de sujeito plural na revisão normativa."
      },
      {
        "level": "advanced",
        "title": "Posição dos pronomes e registro de escrita",
        "explanation": "Colocação pronominal é a posição de pronomes pessoais átonos em relação ao verbo. Próclise coloca o pronome antes, como não me avisaram; ênclise, depois, como avisaram-me; mesóclise o intercala à forma de futuro, como avisar-me-ão. Esses exemplos autorais mostram posições, não uma regra que permita trocar todas livremente. Na escrita formal de orientação normativa, palavras negativas sem pausa que as separe do verbo, como não e nunca, exigem próclise: nunca te procuraram. Outros contextos de atração incluem orações subordinadas desenvolvidas e interrogativas com palavra interrogativa, mas é preciso analisar a construção e possíveis pausas. Com futuro do presente ou do pretérito, a orientação tradicional admite próclise ou mesóclise, não ênclise diretamente à forma flexionada de futuro. Em entregarei, por exemplo, entregar-lhe-ei ilustra mesóclise sem fator de atração; com não, escreve-se não lhe entregarei. Não se usa não entregar-lhe-ei como se o futuro anulasse a atração. Em início de período, a orientação formal tradicional favorece a ênclise quando o verbo admite essa posição: conte-me a notícia. No uso brasileiro, a próclise inicial ocorre amplamente; reconhecê-la não autoriza desqualificar o falante. A revisão precisa explicitar o registro solicitado. Nas locuções, há regras próprias: o pronome não fica enclítico ao particípio; tinha-me informado ilustra ligação ao auxiliar. Com infinitivos, podem existir mais de uma posição válida conforme a construção. Por isso, não se deve estender mecanicamente uma regra de verbo simples a toda locução nem afirmar que a mesóclise seja obrigatória na conversa cotidiana.",
        "steps": [
          "Identifique pronome átono, verbo e presença de locução.",
          "Examine palavras de atração e pausas no registro formal solicitado.",
          "Com futuro, diferencie próclise e mesóclise de ênclise inadequada à forma flexionada.",
          "Releia sentido e contexto, reconhecendo variação de uso sem julgar a pessoa que fala."
        ],
        "example": "Revisão autoral: alguém escreve nunca avisaram-me sobre a mudança em um texto de orientação normativa. A negativa nunca, sem pausa, pede nunca me avisaram sobre a mudança. Em outra frase, conte-me o resultado ilustra a ênclise em início de período, sem transformar essa convenção de escrita em julgamento sobre todas as conversas brasileiras.",
        "pitfall": "Aplicar mesóclise apesar de negativa atrativa, anexar pronome a particípio ou tratar uma convenção da escrita formal como medida da capacidade de um falante."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "No par autoral, transforme As revisoras corrigiram os textos para a voz passiva analítica, preservando o tempo e os participantes. Qual forma é adequada?",
        "hint": "O antigo objeto passa a sujeito paciente plural masculino. Preserve o pretérito perfeito no auxiliar e confira a concordância do particípio.",
        "options": [
          "Os textos serão corrigidos pelas revisoras.",
          "As revisoras foram corrigidas pelos textos.",
          "Os textos foi corrigido pelas revisoras.",
          "Os textos foram corrigidos pelas revisoras."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: os textos passa a sujeito paciente; foram preserva o pretérito perfeito com concordância plural, e corrigidos concorda com textos. Pelas revisoras conserva o agente. A troca o tempo para futuro; B inverte os participantes da ação; C erra a concordância de auxiliar e particípio. A transposição reorganiza o foco, sem afirmar identidade de todos os efeitos discursivos."
      },
      {
        "level": "intermediate",
        "prompt": "Considere duas frases autorais na análise normativa: Publicam-se cadernos. Necessita-se de revisores. Qual interpretação explica a concordância?",
        "hint": "Examine o uso direto de publicar e o complemento com de na construção necessitar de algo ou alguém.",
        "options": [
          "Nas duas frases, se é reflexivo e os termos finais são agentes expressos.",
          "Na primeira, cadernos é sujeito paciente plural; na segunda, de revisores é complemento e se indetermina o sujeito.",
          "Nas duas frases, os substantivos plurais exigem que os verbos fiquem obrigatoriamente no plural.",
          "Na primeira, cadernos é objeto indireto, e na segunda, de revisores é sujeito paciente plural."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: publicam-se cadernos tem leitura passiva equivalente a cadernos são publicados, com sujeito paciente plural. Em necessita-se de revisores, no sentido informado, há complemento preposicionado e sujeito indeterminado; o verbo fica no singular. A inventa reflexividade e agentes; C ignora a função de complemento na segunda; D troca as funções sintáticas. A presença de se ou de substantivo plural, isoladamente, não resolve a análise."
      },
      {
        "level": "advanced",
        "prompt": "Em um exercício autoral de escrita formal segundo a orientação normativa tradicional, qual análise e forma respeitam a negativa não e o futuro do presente de entregar?",
        "hint": "Verifique se a palavra negativa está diretamente ligada à oração, sem pausa, e se o pronome fica antes ou dentro da forma de futuro.",
        "options": [
          "A negativa obriga a mesóclise: Não entregar-lhe-ei o formulário.",
          "O futuro exige ênclise diretamente à forma flexionada: Não entregarei-lhe o formulário.",
          "A negativa, sem pausa, exige próclise: Não lhe entregarei o formulário.",
          "A colocação de lhe é proibida com qualquer verbo no futuro, mesmo quando o destinatário está expresso no contexto."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: não é fator de próclise no contexto dado, portanto não lhe entregarei é a forma adequada à orientação solicitada. A usa mesóclise apesar da atração; B anexa pronome à forma flexionada de futuro, posição rejeitada nessa orientação; D inventa proibição geral de lhe com futuro. O julgamento está delimitado ao registro formal indicado, sem classificar os falantes por suas variedades de uso."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Literatura indígena e afro-brasileira",
    "objective": "Distinguir autoria, representação e ponto de vista nas literaturas indígenas e afro-brasileiras, relacionando diversidade, memória, elaboração formal e condições de circulação sem reduzir obras a estereótipos.",
    "prerequisites": [
      "Autor, narrador e personagem",
      "Gêneros literários",
      "Contexto e evidências de interpretação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Quem escreve, quem fala e quem é representado",
        "explanation": "Literaturas indígenas e afro-brasileiras participam da literatura brasileira por trajetórias diversas, sem formar uma única voz ou se limitar a um tema obrigatório. Autoria identifica quem produz a obra; narrador é a instância que conta uma narrativa; personagem participa do mundo narrado. Essas posições podem dialogar com experiências vividas, mas não são automaticamente a mesma pessoa. A presença de uma personagem indígena em um livro não demonstra autoria indígena, assim como uma personagem negra não basta para classificar uma obra como afro-brasileira. Na literatura indígena contemporânea, a produção de escritores e coletivos indígenas afirma a possibilidade de elaborar suas experiências e perspectivas, em espaços urbanos e não urbanos. É importante distingui-la do indianismo de autores não indígenas que construíram representações de indígenas, especialmente no Romantismo. A distinção não elimina a necessidade de analisar cada obra e seu contexto; apenas impede tomar uma representação externa como se fosse testemunho de todos os povos. Nas discussões da literatura afro-brasileira, a autoria também se articula a escolhas de linguagem, perspectiva, temas e circulação. Não se classifica um texto pela aparência que alguém supõe para seu autor nem se atribui uma identidade à pessoa com base em um detalhe do enredo. O primeiro passo é conferir informações autorais e editoriais e depois sustentar a interpretação no texto. Reconhecer desigualdades históricas de publicação e reconhecimento não transforma essas produções em documentos sem invenção ou sem valor estético.",
        "steps": [
          "Diferencie autoria, narrador e personagens sem presumir identidade entre eles.",
          "Verifique informações autorais e editoriais em fontes identificadas.",
          "Distinga representação externa e produção de autores e coletivos indígenas.",
          "Relacione contexto a escolhas textuais sem reduzir obra ou pessoa a um estereótipo."
        ],
        "example": "Situação editorial autoral e hipotética: um catálogo reúne um romance de autor não indígena com personagens indígenas e um livro assinado por uma escritora indígena. A semelhança de assunto não apaga a diferença de autoria. Antes de comparar as perspectivas, é preciso ler como cada narrativa constrói suas vozes; a ficha não permite declarar que qualquer delas representa todos os povos.",
        "pitfall": "Deduzir autoria pela personagem, confundir narrador e pessoa real ou tratar indígenas e afro-brasileiros como grupos internamente uniformes."
      },
      {
        "level": "intermediate",
        "title": "Literaturas indígenas, oralidade e contemporaneidade",
        "explanation": "A escrita indígena pode dialogar com narrativas orais, memória familiar, línguas, territórios e experiências contemporâneas. Esse diálogo não é uma passagem obrigatória do atrasado ao moderno: oralidade e escrita são formas de expressão que podem coexistir e se transformar. Uma obra pode recriar ritmos de fala, modos de endereçamento e maneiras de organizar o tempo, e também experimentar outros recursos. Nem todo texto indígena precisa apresentar um ancião, uma floresta ou um mito; a exigência de um cenário considerado autêntico pelo leitor é um estereótipo. Também não há uma língua indígena única ou uma cosmologia comum a todos os povos. Daniel Munduruku se apresenta como escritor e educador do povo Munduruku, com produção em diferentes gêneros; Vozes ancestrais é um dos títulos informados em seu site. Eliane Potiguara apresenta, entre suas publicações, Metade cara, metade máscara. Esses nomes apontam caminhos de leitura, não uma lista completa nem autorização para reproduzir livros. A produção individual pode dialogar com memórias coletivas, e publicações coletivas também têm autoria e condições de circulação a reconhecer. Ao analisar um texto, observe quem se dirige a quem, como o espaço ganha sentido e quais marcas aproximam ou afastam tempos e vozes. Uma referência ao passado não prova que o povo exista apenas no passado. O uso de tecnologias ou a vida urbana não retira automaticamente o pertencimento de uma pessoa. A interpretação deve evitar tanto a idealização de uma cultura imutável quanto a ideia de que a escrita substitui ou invalida a tradição oral.",
        "steps": [
          "Reconheça a diversidade de povos, contextos e projetos de escrita.",
          "Analise recursos de memória, endereçamento, ritmo e organização temporal presentes no texto.",
          "Diferencie diálogo com oralidade de cópia automática de uma fala ou regra obrigatória de estilo.",
          "Consulte autoria e publicação sem transformar o texto em retrato universal de um povo."
        ],
        "example": "Microtexto autoral do Kognos, sem atribuição cultural ou imitação de escritor: No arquivo, encontrei o nome antigo da rua. Em casa, ouvi outro nome, guardado nas lembranças da família. A justaposição de arquivo e memória mostra duas formas de registrar o espaço. Isso permite uma análise do recurso narrativo, mas não autoriza inferir a identidade étnica do autor nem apresentar o fragmento como tradição de um povo.",
        "pitfall": "Exigir floresta ou mito como prova de identidade, tomar oralidade como ausência de elaboração ou concluir que morar na cidade elimina pertencimento indígena."
      },
      {
        "level": "advanced",
        "title": "Literatura afro-brasileira, memória e escolhas de forma",
        "explanation": "A crítica da literatura afro-brasileira discute como experiências, perspectivas e formas de expressão participam da construção literária e questionam exclusões do cânone, isto é, do conjunto de obras consagradas e transmitidas como referência. Eduardo de Assis Duarte propõe articular temática, autoria, ponto de vista, linguagem e público. Trata-se de uma proposta crítica, não de um teste mecânico em que uma marca isolada decide tudo ou de uma regra universal sem debate. A atenção às experiências negras não restringe autores a escrever apenas sobre escravidão ou sofrimento: memória, afetos, cotidiano, imaginação e muitos outros assuntos podem participar de projetos distintos. No romance Úrsula, publicado em 1859, Maria Firmina dos Reis constrói personagens negros com experiências e vozes relevantes para a crítica à escravização; a análise exige observar a elaboração narrativa, e não apenas a data da obra. Conceição Evaristo relaciona a noção de escrevivência à escrita atravessada por experiências individuais e coletivas, especialmente de mulheres negras. Isso não faz toda ficção sua equivaler a uma transcrição documental nem obriga a identificar cada narradora com a autora. A série Cadernos Negros é um espaço importante de publicação; Olhos d’água, de Evaristo, é uma coletânea de contos, mostrando que os modos de produção e circulação também entram no estudo. Ao comparar obras, examine quem tem voz, quais imagens se repetem, como se constrói o tempo e a quem o texto se dirige. Contexto histórico e elaboração estética precisam dialogar: reconhecer a denúncia social não dispensa analisar metáforas, composição, ritmo ou focalização.",
        "steps": [
          "Use uma proposta crítica de forma articulada, sem transformar um fator em prova automática.",
          "Observe como linguagem e perspectiva constroem pessoas e experiências no texto.",
          "Relacione memória e criação sem reduzir ficção a autobiografia literal.",
          "Compare gêneros, épocas e circulação, mantendo a diversidade dos projetos literários."
        ],
        "example": "Fragmento analítico autoral do Kognos, sem atribuição a obra ou comunidade: No registro apareciam apenas iniciais; na lembrança dos vizinhos, cada pessoa tinha nome e história. A oposição entre iniciais e nomes pode produzir crítica ao apagamento de trajetórias. Essa hipótese se apoia na composição verbal do fragmento, sem classificá-lo automaticamente como afro-brasileiro nem deduzir a biografia de quem o escreveu.",
        "pitfall": "Reduzir literatura afro-brasileira a um tema obrigatório, usar escrevivência como sinônimo de cópia literal da vida ou dispensar análise de forma por reconhecer denúncia social."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Ficha editorial autoral e hipotética: a obra A foi escrita por autor não indígena e tem personagem indígena; a obra B é assinada por uma escritora indígena. Qual conclusão respeita os limites das informações?",
        "hint": "A ficha informa autoria e representação; ela não demonstra que uma obra fale por todos os povos nem substitui a leitura de suas perspectivas.",
        "options": [
          "A presença da personagem prova que A tem autoria indígena, independentemente da ficha.",
          "A escritora de B precisa viver fora de qualquer cidade para que sua autoria seja reconhecida.",
          "A e B exigem distinção entre representação e autoria, e suas perspectivas precisam ser analisadas sem presumir voz universal.",
          "A ficha demonstra que as duas obras possuem necessariamente narrador e autora como a mesma pessoa real."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a ficha diferencia quem escreve e quem é representado; comparar as perspectivas ainda exige leitura das obras. A substitui autoria por tema; B impõe um requisito espacial estereotipado; D confunde instância narrativa e pessoa real sem evidência. As letras A e B identificam obras hipotéticas, sem atribuir textos inventados a escritores ou comunidades reais."
      },
      {
        "level": "intermediate",
        "prompt": "Microtexto original do Kognos, sem atribuição a escritor ou povo: Minha avó guardava os nomes da praça; eu os escrevi no caderno, mas continuei voltando para ouvi-la. Qual leitura se apoia no fragmento?",
        "hint": "Observe a relação entre escrever e continuar ouvindo. O fragmento não informa a identidade étnica de quem o produziu.",
        "options": [
          "Escrita e escuta aparecem em convivência na construção da memória; o trecho não basta para determinar a identidade étnica da autoria.",
          "A escrita apagou toda escuta, como comprova a expressão continuei voltando para ouvi-la.",
          "A presença de uma avó prova que o texto pertence necessariamente a uma única cultura indígena universal.",
          "A primeira pessoa demonstra que cada acontecimento é registro documental da vida do autor real."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: escrever os nomes não interrompe a escuta, pois o narrador continua voltando para ouvir a avó. A convivência é sustentada por duas ações explícitas. B contradiz a continuidade; C transforma um elemento narrativo em identificação étnica e inventa cultura única; D toma a primeira pessoa como garantia documental. O exercício analisa forma e memória sem imitar uma tradição ou autenticar uma identidade."
      },
      {
        "level": "advanced",
        "prompt": "Em uma comparação autoral de estudos, Úrsula, romance de Maria Firmina dos Reis publicado em 1859, é aproximado de Olhos d’água, coletânea de contos de Conceição Evaristo. Qual orientação de análise é adequada?",
        "hint": "Diferencie épocas e gêneros e relacione experiências, ponto de vista e elaboração formal, sem transformar memória em prova de identidade entre autora e narradora.",
        "options": [
          "Concluir que ambos são diários documentais, pois qualquer literatura de experiência exclui ficção.",
          "Ignorar linguagem e composição, porque reconhecer um tema social encerra toda análise literária.",
          "Afirmar que toda obra afro-brasileira deve tratar exclusivamente de escravidão e apresentar o mesmo narrador.",
          "Comparar perspectivas, memória e recursos formais considerando diferenças de gênero e contexto, sem reduzir ficção a autobiografia literal."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a comparação pode articular temas, perspectivas e recursos de composição, respeitando romance e contos, seus contextos e projetos. A erra os gêneros e exclui invenção; B dispensa indevidamente forma; C impõe tema e narrador obrigatórios a uma produção diversa. A noção de escrevivência não autoriza identificar automaticamente narradora e autora nem converter toda obra em diário. Não é necessário conhecer um trecho ausente para responder ao critério proposto."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Formulação de tese",
    "objective": "Formular uma posição argumentativa pertinente ao recorte, delimitá-la ao que pode ser sustentado e revisar sua relação com razões, evidências e objeções.",
    "prerequisites": [
      "Leitura do comando de escrita",
      "Tema e recorte temático",
      "Diferença entre afirmação e justificativa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Do assunto à posição que o texto vai defender",
        "explanation": "Em um texto argumentativo, a tese é a posição central a ser sustentada ao longo do raciocínio. Tema indica o assunto; problema ou questão delimita o que se discute; tese apresenta uma resposta ou interpretação que o texto pretende defender. Dizer o assunto é mobilidade apenas nomeia um campo. Perguntar como melhorar o acesso ao transporte coletivo delimita uma discussão. Defender que melhorar esse acesso exige integrar horários e pontos de atendimento, porque a existência de linhas não garante conexão entre trajetos, já propõe uma direção argumentativa. Essa formulação autoral ainda precisa de sustentação: ser uma tese não faz uma afirmação ser verdadeira por si mesma. Uma tese pode avaliar uma situação, explicar relações ou defender uma ação, conforme o gênero e o comando; não precisa começar por eu acho nem mencionar uma solução em toda situação. Também não basta transformar uma pergunta em uma frase afirmativa vaga. A posição deve se relacionar ao recorte inteiro, ao público e à finalidade de escrita. Nas orientações do Inep para a redação do Enem 2026, o ponto de vista deve ser defendido com argumentos consistentes, organizados com coerência e coesão; essa referência não impõe a mesma estrutura a todos os gêneros e exames. Antes de escrever, reconheça se a tarefa realmente pede argumentação e quais condições apresenta. Uma frase sobre a importância de algo pode ser ponto de partida, mas precisa ganhar conteúdo específico: o que se avalia, em qual âmbito e por quais relações isso merece ser defendido?",
        "steps": [
          "Identifique assunto, recorte, gênero e comando de escrita.",
          "Transforme a questão em uma posição que possa ser discutida e sustentada.",
          "Diferencie a tese de uma pergunta ou simples anúncio de tema.",
          "Verifique se a posição atende ao recorte sem tratar sua formulação como prova de verdade."
        ],
        "example": "Transformação autoral: o anúncio vou falar sobre filas no refeitório não traz posição. Uma tese possível é a organização das filas do refeitório precisa considerar horários das turmas e capacidade de atendimento, pois tratar apenas a disciplina individual não explica todos os gargalos. A frase delimita uma hipótese a defender; não relata uma pesquisa real nem dispensa análise das condições.",
        "pitfall": "Confundir tema com tese, usar uma afirmação genérica que serviria a qualquer proposta ou supor que uma posição está demonstrada apenas por estar escrita com segurança."
      },
      {
        "level": "intermediate",
        "title": "Delimitação, razões e alcance da afirmação",
        "explanation": "Uma tese útil ao projeto de texto tem alcance compatível com a discussão que será desenvolvida. Palavras como todo, sempre, nunca, único e resolve completamente ampliam o compromisso de prova; devem ser usadas apenas quando essa abrangência puder ser sustentada. Trocar essas palavras por pode ou em determinadas condições não é um truque para dispensar razões: as condições precisam estar claras e a possibilidade também pede explicação. Distinga a posição central das razões que a sustentam. Na formulação autoral melhorar a sinalização interna favorece a orientação de visitantes quando há informações legíveis e rotas coerentes, a posição relaciona sinalização e orientação; a legibilidade e a coerência delimitam a afirmação. O desenvolvimento deve explicar por que esses elementos importam, e não apenas repetir a frase com sinônimos. Um exemplo hipotético ilustra uma possibilidade, mas não se transforma em estatística ou prova de resultado geral. Uma evidência real precisa de origem verificável e de uma ligação explícita com a tese; citar um nome conhecido sem explicar pertinência não cria sustentação. Também é necessário separar correlação de causa: observar dois fatos juntos não demonstra, por si só, que um produziu o outro. Na revisão, pergunte se os termos são precisos, se a relação defendida é compreensível e se há razões distintas a desenvolver. Não existe obrigação universal de anunciar exatamente dois argumentos, de usar sempre causas ou de restringir a tese a uma quantidade fixa de palavras. A organização deve servir à tarefa e ao raciocínio.",
        "steps": [
          "Marque quantificadores e promessas para reconhecer o alcance assumido.",
          "Delimite objeto e condições sem esvaziar a posição.",
          "Liste razões pertinentes e explique como sustentam a tese.",
          "Diferencie evidência verificável, hipótese e exemplo didático."
        ],
        "example": "Revisão autoral: toda exposição escolar garante aprendizagem pode ser substituída por uma exposição escolar pode favorecer a compreensão quando articula explicações legíveis e participação orientada. A segunda versão não prova o resultado, mas permite examinar mecanismos e condições definidos. Um caso imaginado ajuda a ilustrá-los e não deve ser apresentado como pesquisa de eficácia.",
        "pitfall": "Usar um caso como prova de todo um universo, esconder condições para parecer convincente ou listar razões sem explicar sua ligação com a posição central."
      },
      {
        "level": "advanced",
        "title": "Revisar a tese diante do desenvolvimento e de objeções",
        "explanation": "A tese inicial pode mudar quando o autor analisa razões, evidências e limitações. Revisá-la não significa abandonar o projeto: pode tornar mais precisa a relação entre o que se defende e o que o texto efetivamente demonstra. Ao reler, compare a posição anunciada, a contribuição dos parágrafos e a conclusão. Se o desenvolvimento só sustenta uma possibilidade condicionada, uma conclusão que promete resultado universal rompe a coerência. Se um argumento contradiz a tese, é necessário explicar o limite, reformular a posição ou substituir o argumento por outro pertinente; um conectivo de conclusão não resolve sozinho a contradição. Considerar uma objeção relevante pode ajudar a delimitar a defesa sem fingir que todos os lados têm a mesma força. Por exemplo, reconhecer limites de infraestrutura não exige abandonar qualquer proposta de atendimento digital: pode justificar uma tese que combine canais, em vez de impor uma solução exclusiva. A objeção deve ser apresentada com fidelidade, e não caricaturada para parecer fácil de refutar. Em textos argumentativos escolares, explicitar a posição cedo pode facilitar a leitura, mas não se deve transformar a última frase da introdução em lugar obrigatório de toda tese em qualquer gênero. Do mesmo modo, uma proposta de intervenção integra exigências específicas, como as orientações do Enem consultadas, sem tornar toda tese uma receita de política pública. O critério é manter uma direção clara e sustentada, adequada à proposta, com conclusão que decorra do percurso. Não invente números, citações ou resultados para salvar uma afirmação excessiva: ajuste o texto ao que pode ser defendido.",
        "steps": [
          "Compare tese inicial, desenvolvimento e conclusão para localizar descompassos.",
          "Considere uma objeção pertinente e explicite como ela afeta o alcance da posição.",
          "Revise a tese e os argumentos em conjunto, mantendo pertinência ao comando.",
          "Confira se a conclusão não amplia a afirmação além da sustentação apresentada."
        ],
        "example": "Caso autoral: um texto começa defendendo que reuniões escolares devem ser exclusivamente presenciais, mas desenvolve razões sobre encontros presenciais e reconhece que certos responsáveis não conseguem comparecer. Uma revisão possível é defender momentos presenciais articulados a outras formas de participação, explicando funções e limites de cada canal. A revisão precisa aparecer no texto inteiro, sem prometer acesso perfeito nem criar pesquisa inexistente.",
        "pitfall": "Manter uma tese refutada pelo próprio desenvolvimento, usar conclusão mais abrangente que as razões ou tratar objeção como inimigo fictício que não precisa ser analisado com fidelidade."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Proposta autoral: discuta a preservação das áreas de convivência de uma escola. Qual formulação funciona melhor como tese pertinente, a ser sustentada?",
        "hint": "Procure uma posição específica sobre o recorte, em vez de anúncio de assunto, pergunta sem resposta ou mudança de tema.",
        "options": [
          "Como são chamadas as áreas de convivência da escola?",
          "Este texto falará sobre escolas e sobre coisas importantes.",
          "A preservação das áreas de convivência requer participação dos usuários e manutenção planejada, pois o cuidado depende de decisões de uso e de conservação.",
          "A circulação de mercadorias entre países deve ser estudada sem qualquer relação com áreas escolares."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: a formulação assume uma posição sobre a preservação das áreas, indica fatores pertinentes e abre um percurso de sustentação. Não está provada só por ser específica: o texto precisará explicar essas relações. A formula apenas pergunta; B anuncia assunto vago; D muda o recorte. A escolha não exige aceitar qualquer plano de manutenção como eficaz em toda escola."
      },
      {
        "level": "intermediate",
        "prompt": "Caso autoral: a tese afirma que toda campanha de coleta seletiva elimina completamente o lixo escolar. O texto só descreve um ponto de coleta hipotético e não examina separação, participação nem destino dos resíduos. Qual revisão é mais consistente?",
        "hint": "Compare a promessa universal com o alcance do material apresentado e reconheça os aspectos ainda não sustentados.",
        "options": [
          "Reformular a posição como possibilidade condicionada e desenvolver participação, separação e destinação, sem tratar o ponto hipotético como prova de eliminação total.",
          "Preservar toda e completamente, porque uma descrição hipotética demonstra resultados em qualquer escola.",
          "Atribuir um percentual inventado de eficácia a uma universidade para encerrar a necessidade de argumento.",
          "Substituir o tema por uma lista de nomes famosos sem explicar relação com resíduos ou coleta."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a tese promete mais do que o desenvolvimento sustenta. Delimitar o alcance e analisar condições permite um argumento pertinente, sem garantir resultado nem confundir exemplo e evidência. B mantém generalização sem apoio; C fabrica dado e fonte; D abandona o recorte. A reformulação precisa vir acompanhada de raciocínio e, quando usada, evidência verificável, não apenas da palavra possibilidade."
      },
      {
        "level": "advanced",
        "prompt": "Em um projeto autoral sobre atendimento de matrículas, a tese inicial defende substituir todo atendimento orientado por um canal digital. O desenvolvimento reconhece barreiras de acesso e necessidade de apoio a alguns usuários. Qual encaminhamento resolve melhor o descompasso?",
        "hint": "A objeção relevante pode levar a uma posição mais precisa. A conclusão precisa respeitar os limites que o próprio texto reconhece.",
        "options": [
          "Ignorar as barreiras e concluir que todos já têm condições idênticas, sem acrescentar evidência.",
          "Conservar a substituição total e remover apenas o conectivo que introduz a objeção.",
          "Declarar que reconhecer limites proíbe qualquer uso de canais digitais, mesmo sem analisar alternativas.",
          "Rever a tese para defender articulação de canais e apoio conforme as condições de acesso, ajustando argumentos e conclusão ao alcance dessa posição."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: a revisão incorpora a limitação reconhecida e permite sustentar uma proposta de articulação, sem prometer solução única ou acesso garantido. A apaga uma condição já admitida; B muda a superfície e conserva a contradição; C salta para proibição total que não decorre dos dados. Considerar objeções pode qualificar a posição; não obriga nem a ignorá-las nem a abandonar qualquer possibilidade digital."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Cognatos e falsos cognatos em inglês",
    "objective": "Usar semelhanças entre inglês e português como hipóteses de leitura e distinguir correspondências de sentido, falsos amigos e diferenças de contexto sem confundir aparência com origem etimológica.",
    "prerequisites": [
      "Leitura de frases simples em inglês",
      "Identificação de substantivos, verbos e adjetivos",
      "Uso de contexto e dicionário"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Semelhança útil não é tradução automática",
        "explanation": "Ao ler em inglês, uma forma familiar pode ajudar a construir uma hipótese de sentido. Memory e memória, por exemplo, aproximam-se tanto na forma quanto em usos ligados à lembrança; a história de memory remete ao latim memoria por mediação francesa. Em sentido linguístico, cognatos têm relação de origem; palavras não se tornam cognatas apenas porque suas letras se parecem. No ensino de leitura, é comum chamar de cognatos transparentes os pares cuja forma e sentido ajudam o leitor a reconhecer uma correspondência. Essa estratégia precisa ser confirmada na frase. Uma relação histórica não garante que todos os usos atuais de duas palavras coincidam, e uma grafia semelhante não demonstra sozinha a relação histórica. Mesmo um par útil pode variar em pronúncia, combinação com outras palavras e sentidos disponíveis. O inglês não é descendente do português nem uma língua românica apenas por compartilhar vocabulário de origem latina: empréstimos e trajetórias históricas explicam parte dessas aproximações. Durante a leitura, identifique o assunto, a função da palavra e os termos ao redor antes de escolher uma tradução. Em um enunciado autoral como This device has more memory than the old one, memory se refere a capacidade de armazenamento do dispositivo, não a uma lembrança pessoal. O par continua útil, mas o sentido é selecionado pelo contexto. Não é necessário conhecer toda etimologia para entender cada frase; se a questão é de compreensão, a prioridade é verificar a interpretação no texto e consultar uma fonte lexical quando necessário.",
        "steps": [
          "Reconheça a palavra familiar como hipótese, sem decidir apenas pela grafia.",
          "Observe assunto, função gramatical e relações com as demais palavras.",
          "Escolha o sentido que se ajusta ao trecho inteiro.",
          "Separe confirmação de sentido de afirmações sobre origem histórica."
        ],
        "example": "Frase original do Kognos: The device needs extra memory to store the files. A relação com store the files seleciona memória como armazenamento do dispositivo. Não se traduz como recordação de um acontecimento apenas porque memory também pode aparecer nesse sentido em outros textos. A frase é didática, sem copiar um manual ou anunciar especificação de produto real.",
        "pitfall": "Usar aparência como prova de origem comum, tratar toda correspondência como identidade de usos ou escolher o primeiro significado sem ler a frase."
      },
      {
        "level": "intermediate",
        "title": "Falsos amigos e pistas de sentido",
        "explanation": "Falsos amigos são palavras de línguas diferentes cuja semelhança de forma ou som pode induzir uma equivalência inadequada. Em materiais escolares brasileiros, a expressão falsos cognatos costuma ser usada com esse sentido prático. Convém separar a questão semântica da histórica: dois falsos amigos podem ter origem relacionada, e não é necessário provar origens diferentes para reconhecer o risco de tradução. Actual frequentemente indica real ou efetivo, especialmente em contraste com estimativa ou aparência; não se traduz automaticamente por atual. Eventually pode indicar um desfecho em momento posterior, e não a frequência ocasional associada a eventualmente em muitos contextos portugueses. Pretend, no sentido de simular, corresponde a fingir ou fazer de conta, e não simplesmente a pretender realizar algo. Library, em contextos de consulta e empréstimo, é biblioteca, não livraria; também pode designar coleções, inclusive em usos técnicos. Essas correspondências são orientações de leitura, não uma lista de traduções únicas para qualquer ocorrência. Em uma frase autoral como The children pretended the carpet was an island, o contexto de brincadeira sustenta fizeram de conta que o tapete era uma ilha. Não há um plano de transformar fisicamente o tapete. Em vez de decorar proibições absolutas, use contrastes, ações e relações temporais para conferir o sentido. Um dicionário pode apresentar várias acepções; escolha a compatível com a frase, sem transportar automaticamente para o texto todas as definições do verbete.",
        "steps": [
          "Localize o par que pode produzir uma equivalência enganosa.",
          "Procure contrastes, ações e relações temporais que ajudem a selecionar sentido.",
          "Teste uma paráfrase no lugar da tradução presumida.",
          "Consulte a acepção contextual e evite transformar exemplos em proibições universais."
        ],
        "example": "Texto original do Kognos: The children pretended the bench was a boat, but nobody planned to move it to the river. Pretended descreve faz de conta; planned nomeia um plano, negado no caso. A diferença aparece nas ações e no contraste, sem exigir que o leitor invente uma intenção de transportar o banco.",
        "pitfall": "Traduzir actual por atual em contraste com estimativa, eventually por ocasionalmente em uma sequência com desfecho ou pretend por planejar quando há simulação."
      },
      {
        "level": "advanced",
        "title": "Correspondências parciais, polissemia e verificação",
        "explanation": "As relações de sentido entre línguas podem ser parciais: uma equivalência funciona em determinado uso e falha em outro. Uma regra com nunca pode ser tão enganosa quanto traduzir só pela aparência. Sensible costuma significar sensato ou razoável em avaliações de decisões, mas o inglês também registra sentidos relacionados a percepção e consciência. Por isso, não se deve ensinar que jamais pode se aproximar de sensível sem examinar a acepção. Actual também tem usos que não cabem em uma oposição escolar rígida entre real e temporal; o contraste concreto da frase deve orientar a leitura. Polissemia é a existência de vários sentidos relacionados de uma palavra; isso não faz cada sentido um cognato técnico novo. Comparar usos diferentes de uma única palavra inglesa, sem indicar um par em português, não demonstra uma relação de cognatos entre línguas. Um procedimento útil é formular duas hipóteses, testá-las nas pistas do trecho e rejeitar a que contradiz informações expressas. Em Choosing a smaller bag was a sensible decision because the shelf was narrow, o adjetivo avalia a decisão como sensata diante da largura disponível. Não descreve a capacidade da bolsa de sentir. A tradução também depende de gênero e registro: nem sempre reproduzir a mesma classe de palavra produz uma frase natural em português. Ao justificar uma questão de leitura, cite a pista pertinente e explique a relação, em vez de afirmar que toda palavra parecida é verdadeira ou falsa. A investigação etimológica responde a outra pergunta e requer fontes próprias quando for de fato necessária.",
        "steps": [
          "Reconheça quando a palavra apresenta mais de uma acepção.",
          "Teste hipóteses de sentido contra as pistas e o gênero do texto.",
          "Diferencie polissemia dentro de uma língua de relação histórica entre palavras de línguas distintas.",
          "Justifique a leitura contextual sem criar regras com sempre ou nunca não sustentadas."
        ],
        "example": "Frase original do Kognos: Choosing a quieter room was a sensible decision because the recording needed less noise. Sensible avalia uma escolha adequada à finalidade; a justificativa sobre ruído sustenta sensata. Isso não elimina os demais sentidos dicionarizados da palavra nem transforma a frase em prova de que toda decisão de usar sala silenciosa funciona para qualquer atividade.",
        "pitfall": "Chamar qualquer polissemia de cognato técnico, afirmar que falsos amigos precisam ter origens diferentes ou substituir uma tradução automática por outra regra absoluta."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Frase original do Kognos: Her excellent memory helped her recall the instructions. Qual leitura de memory é sustentada pelo contexto?",
        "hint": "A expressão recall the instructions relaciona a palavra à lembrança de instruções, sem exigir inferência sobre dispositivo eletrônico.",
        "options": [
          "Um estabelecimento de venda de livros, demonstrado apenas pela aparência da palavra.",
          "Memória como capacidade de lembrar, compatível com recordar as instruções.",
          "Uma promessa de que a pessoa nunca esqueceu nem esquecerá qualquer informação.",
          "O nome de uma peça eletrônica obrigatoriamente instalada no corpo da personagem."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: recall the instructions seleciona o sentido de capacidade de lembrar. A inventa um estabelecimento; C transforma uma qualidade mencionada em garantia universal; D impõe leitura técnica que o contexto não exige. Memory e memória ajudam a formular a hipótese, mas é a relação com recordar instruções que a sustenta nesta frase. O enunciado não apresenta avaliação clínica da pessoa."
      },
      {
        "level": "intermediate",
        "prompt": "Texto original do Kognos, com números hipotéticos: The estimated cost was 40; the actual cost was 55. Como interpretar actual nesse contraste?",
        "hint": "A comparação opõe estimativa e valor efetivo; não informa uma oposição entre antigo e atual.",
        "options": [
          "Atual, porque o texto compara obrigatoriamente dois períodos históricos diferentes.",
          "Possível, pois o segundo valor ainda é apresentado como simples hipótese futura.",
          "Ocasional, porque actual indica a frequência com que houve custos.",
          "Real ou efetivo, em contraste com o valor estimado de 40."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: estimated e actual contrastam previsão e valor efetivo. A introduz períodos que o trecho não fornece; B transforma o segundo custo em hipótese futura; C atribui frequência a um adjetivo que qualifica cost nesse contexto. A leitura é contextual e não afirma que todo uso de actual, em qualquer frase, tenha uma única tradução possível."
      },
      {
        "level": "advanced",
        "prompt": "Frase original do Kognos: After three failed attempts, the team eventually repaired the clock. Qual interpretação preserva o sentido de eventually e os limites da informação?",
        "hint": "Considere a sequência de tentativas e o desfecho expresso por repaired. Não troque resultado posterior por frequência ocasional.",
        "options": [
          "Depois das tentativas frustradas, a equipe acabou consertando o relógio; não se informa a duração exata do processo.",
          "A equipe apenas consertava relógios ocasionalmente, sem que se informe resultado para este relógio.",
          "A palavra garante que todas as futuras tentativas da equipe darão certo imediatamente.",
          "O texto afirma que nenhuma tentativa ocorreu antes de o relógio ser consertado."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: eventually apresenta o desfecho posterior às três tentativas frustradas; repaired afirma o conserto desse relógio. O tempo exato não é fornecido. B troca sequência e resultado por frequência e omite o conserto; C inventa sucesso futuro imediato; D contradiz after three failed attempts. O leitor pode justificar a interpretação pelas pistas sem afirmar que eventually exige sempre uma demora longa ou três tentativas."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Tempos do passado em espanhol",
    "objective": "Reconhecer formas e valores de pretéritos do indicativo em espanhol e interpretar aspecto, relação com o presente e anterioridade sem impor marcadores temporais como regras universais.",
    "prerequisites": [
      "Pronomes e pessoas verbais",
      "Infinitivo e particípio",
      "Leitura de frases simples em espanhol"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Perfecto simple e imperfecto: forma e perspectiva",
        "explanation": "Este recorte estuda quatro tempos do indicativo úteis à leitura de acontecimentos passados: pretérito perfecto simple, também chamado indefinido; imperfecto; perfecto compuesto; e pluscuamperfecto. Não é uma lista de todas as formas e usos verbais do espanhol. No perfecto simple, a situação é apresentada de modo perfectivo, como um todo delimitado. Isso não exige ação curta: estudió durante cinco años apresenta um período longo como um todo. Para verbos regulares em -ar, o paradigma de hablar é hablé, hablaste, habló, hablamos, hablasteis, hablaron; para -er, comí, comiste, comió, comimos, comisteis, comieron; para -ir, viví, viviste, vivió, vivimos, vivisteis, vivieron. A ordem corresponde a yo, tú, él/ella/usted, nosotros/nosotras, vosotros/vosotras e ellos/ellas/ustedes. Acentos distinguem formas como hablo e habló. O imperfecto focaliza uma situação passada sem apresentar seus limites no próprio tempo verbal: pode servir a descrição, hábito ou ação em desenvolvimento. No paradigma regular, hablar forma hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban; comer forma comía, comías, comía, comíamos, comíais, comían, e vivir segue as mesmas terminações de comer. Não concluir o evento na forma verbal não prova que ele jamais tenha terminado no mundo. Em um relato autoral como El pasillo estaba oscuro cuando llegó la directora, estaba fornece uma condição de fundo e llegó apresenta um acontecimento. Esse é um uso narrativo frequente, não um papel obrigatório de cada tempo em todo texto.",
        "steps": [
          "Identifique pessoa, verbo e tempo solicitado, sem confiar só no marcador temporal.",
          "Reconheça terminações e acentuação de formas regulares.",
          "Diferencie apresentação perfectiva de perspectiva imperfectiva.",
          "Interprete a contribuição de cada forma no relato, sem inventar duração ou desfecho."
        ],
        "example": "Relato original do Kognos: Durante dos años, Nora trabajó en el archivo. Cada mañana revisaba fichas y atendía consultas. Trabajó apresenta o período de dois anos como um todo; revisaba e atendía descrevem hábitos nesse quadro. O uso perfectivo não torna o trabalho instantâneo, nem o imperfecto prova que as ações continuem acontecendo hoje.",
        "pitfall": "Usar terminações de -er para todo verbo em -ar, eliminar acentos ou reduzir perfecto simple a ação curta e imperfecto a ação que nunca terminou."
      },
      {
        "level": "intermediate",
        "title": "Perfecto compuesto e variação de uso",
        "explanation": "O pretérito perfecto compuesto se forma com o presente do auxiliar haber e um particípio: he, has, ha, hemos, habéis, han, seguidos de formas como hablado, comido ou vivido. O auxiliar carrega pessoa e número; o particípio, nesse tempo composto, não concorda com o gênero ou o plural do sujeito. Assim, ellas han escrito, e não han escritas. Participios irregulares incluem abierto, escrito, hecho e visto; não se substituem por palavras portuguesas como aberto ou feito. Os usos do perfecto compuesto relacionam o passado a um intervalo que chega ao presente ou a uma experiência e a seus efeitos, com variação importante entre áreas hispanofalantes. Em parte do espanhol europeu, hoy he enviado el mensaje é frequente para uma ação no dia atual. Hoy envié el mensaje também é normal em muitas variedades americanas. Por isso, hoy, este año, ya ou nunca não funcionam como senhas que obriguem uma única forma em todos os países e contextos. O contraste com o perfecto simple depende de como se organiza o intervalo e das convenções da variedade, além da intenção discursiva. Tampouco toda ligação possível com o presente exige uma forma composta. Ao ler, reconheça a estrutura e analise o valor no contexto, em vez de corrigir automaticamente uma variedade por outra. Se um exercício pede uma forma específica, essa instrução precisa estar explícita; se pede interpretação de um texto existente, use as formas que ele realmente apresenta e não invente uma regra para substituí-las.",
        "steps": [
          "Identifique haber no presente e o particípio da construção.",
          "Confira concordância do auxiliar e invariabilidade do particípio com haber.",
          "Analise a relação temporal no texto e a variedade quando informada.",
          "Evite impor escolha universal apenas pela presença de hoy, ya ou outro marcador."
        ],
        "example": "Exemplos originais do Kognos: Hoy he preparado las notas e Hoy preparé las notas podem ocorrer em variedades diferentes. O marcador hoy, isoladamente, não permite declarar a segunda frase incorreta. Em Hemos abierto el sobre, aberto é a tradução portuguesa de abierto, não a forma espanhola que deve entrar no tempo composto.",
        "pitfall": "Escrever haver ou feito dentro da estrutura espanhola, flexionar o particípio com haber ou exigir perfecto compuesto sempre que aparecer hoy."
      },
      {
        "level": "advanced",
        "title": "Pluscuamperfecto e ordenação do relato",
        "explanation": "O pretérito pluscuamperfecto de indicativo situa uma situação concluída antes de outro ponto de referência no passado, que pode estar expresso ou ser recuperado do contexto. Sua formação usa haber no imperfecto: había, habías, había, habíamos, habíais, habían, seguido de particípio. Habíamos terminado significa tínhamos terminado, sem que seja necessário traduzir cada forma por um único tempo português em todo contexto. Em uma frase autoral como Cuando empezó la reunión, Clara ya había enviado el informe, o envio é anterior ao início da reunião. A ordem em que se mencionam os fatos não se confunde com a ordem em que ocorreram: a oração sobre o início pode aparecer primeiro, embora o envio seja anterior. O tempo não indica sozinho quanto tempo separou os eventos nem que o primeiro causou o segundo. O contexto também pode estabelecer sequências com outras construções; o pluscuamperfecto não é uma peça obrigatória em toda frase que contém dois acontecimentos passados. Também se deve distinguir había enviado, indicativo, de hubiera enviado, pluscuamperfecto de subjuntivo: compartilhar um particípio não torna as formas o mesmo tempo. Não é necessário estudar toda oração condicional para reconhecer essa diferença. Na leitura de uma narrativa, marque pontos de referência e relações como anterioridade, simultaneidade e sucessão. O imperfecto pode mostrar uma situação em curso quando surge um evento perfectivo, sem provar que a primeira foi definitivamente interrompida. A forma verbal oferece uma perspectiva temporal, e não um relato completo de tudo que aconteceu antes e depois.",
        "steps": [
          "Identifique a forma de haber e diferencie indicativo de subjuntivo.",
          "Localize o ponto passado usado como referência.",
          "Ordene os fatos pelos tempos e pelas relações explícitas, não só pela ordem das orações.",
          "Separe anterioridade de duração, causa e obrigatoriedade de construção."
        ],
        "example": "Relato original do Kognos: Al revisar la carpeta, descubrimos que el equipo ya había corregido el índice. Había corregido situa a correção antes da descoberta na revisão. A frase não informa a duração da correção, não diz que toda a pasta estava sem erros e não permite trocar anterioridade por prova automática de causa.",
        "pitfall": "Confundir había com hubiera, concluir que o fato mencionado primeiro ocorreu primeiro ou tratar anterioridade como garantia de causa e duração."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "No paradigma do espanhol, qual forma corresponde à primeira pessoa do singular do pretérito perfecto simple do verbo regular estudiar?",
        "hint": "Use o padrão regular de -ar e confira a acentuação. A pergunta pede uma forma verbal específica, não qualquer frase possível no passado.",
        "options": [
          "estudié",
          "estudió",
          "estudiaba",
          "estudiemos"
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: estudiar segue o padrão de hablar, com a terminação -é em yo estudié. B, estudió, é terceira pessoa do singular do mesmo tempo; C, estudiaba, é imperfecto, podendo corresponder a primeira ou terceira pessoa singular; D, estudiemos, é presente do subjuntivo ou forma de exortação em contexto próprio. A seleção depende de pessoa e tempo pedidos, sem impor um marcador temporal universal."
      },
      {
        "level": "intermediate",
        "prompt": "Relato original do Kognos: Cuando sonó el timbre, Inés leía una revista. Qual interpretação de sonó e leía respeita o texto?",
        "hint": "Diferencie o acontecimento apresentado como um todo da leitura vista em desenvolvimento naquele momento. Não invente o destino da revista depois.",
        "options": [
          "Os dois verbos estão no futuro e provam que o sinal ainda não tocou.",
          "Leía prova que Inés jamais terminou a leitura em qualquer momento posterior.",
          "Sonó apresenta um acontecimento, e leía situa a leitura em curso naquele quadro, sem informar por si só se foi concluída depois.",
          "A forma sonó obriga que todo o relato dure exatamente um segundo."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: sonó está no perfecto simple e apresenta o toque do sinal; leía está no imperfecto e focaliza a leitura em desenvolvimento nesse momento. A erra os tempos; B transforma ausência de delimitação na forma verbal em nunca terminar; D inventa duração exata. A frase não afirma que Inés abandonou definitivamente a revista nem relata o desfecho da leitura."
      },
      {
        "level": "advanced",
        "prompt": "Frase original do Kognos: Cuando abrió la tienda, el equipo ya había organizado los materiales. Qual relação temporal está expressa?",
        "hint": "Localize o ponto passado abriu a loja e a situação apresentada por había organizado, sem confundir ordem das orações e ordem dos fatos.",
        "options": [
          "A organização só poderia ocorrer depois da abertura, porque sua oração aparece por último.",
          "A organização dos materiais é anterior ao ponto passado da abertura; a frase não fornece a duração exata entre os fatos.",
          "Os materiais foram organizados apenas no futuro em relação ao momento em que o narrador fala.",
          "Había organizado é pluscuamperfecto de subjuntivo e prova que nenhum material foi organizado."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: ya había organizado é pluscuamperfecto de indicativo e coloca a organização antes da abertura mencionada. A usa ordem textual como ordem cronológica e inverte a relação; C transforma uma anterioridade passada em futuro; D confunde había com uma forma de subjuntivo e inventa negação. A frase não diz quanto tempo antes ocorreu a organização nem que ela causou a abertura."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Termologia e escalas termométricas",
    "objective": "Distinguir temperatura, calor e energia interna, interpretar equilíbrio térmico e converter valores e intervalos de temperatura entre escalas, incluindo uma escala linear definida por referências.",
    "prerequisites": [
      "Razões e equações de primeiro grau",
      "Leitura de unidades",
      "Diferença entre grandeza e valor numérico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Temperatura, calor e equilíbrio",
        "explanation": "Termologia estuda fenômenos térmicos, e a termometria trata da medida de temperatura. Temperatura caracteriza o estado térmico; calor é energia em transferência por diferença de temperatura. Um corpo tem energia interna, mas não armazena uma quantidade de calor como se fosse uma substância. Temperatura também não mede sozinha a energia total de qualquer corpo: quantidade de material, composição e estado físico importam. Dois sistemas podem ter a mesma temperatura e energias internas diferentes. Na transferência espontânea por contato térmico, a energia flui do sistema de maior para o de menor temperatura, nas condições usuais consideradas, até o equilíbrio quando o conjunto pode alcançá-lo sem interferências externas que mantenham a diferença. Estar à mesma temperatura não exige mesma massa nem mesmo material. A lei zero expressa que, se dois sistemas estão em equilíbrio térmico com um terceiro, estão em equilíbrio térmico entre si. Esse princípio permite comparar temperaturas por um sistema termométrico. O termômetro usa uma propriedade que responde de modo conhecido à temperatura, como resistência elétrica; a leitura e a interação com o sistema precisam respeitar o método de medida. Sensação tátil não é medida suficiente: materiais à mesma temperatura podem trocar energia com a pele de modos distintos. A descrição é conceitual e não um convite para testar superfícies quentes ou frias. O kelvin, símbolo K, é a unidade SI de temperatura termodinâmica e não usa símbolo de grau. Zero kelvin corresponde a −273,15 °C; isso não deve ser descrito como calor armazenado igual a zero nem como anulação de toda energia e de todo movimento possível em qualquer sistema físico.",
        "steps": [
          "Identifique se o problema trata de temperatura, energia interna ou transferência por calor.",
          "Compare temperaturas e condições de interação sem confundir massa com estado térmico.",
          "Use a lei zero para analisar equilíbrio por referência a um terceiro sistema.",
          "Registre a unidade de temperatura corretamente e diferencie medida de sensação."
        ],
        "example": "Caso autoral: dois blocos de massas diferentes estão, separadamente, em equilíbrio térmico com um mesmo sistema de referência estável. Pela lei zero, suas temperaturas são iguais. Isso não permite concluir que suas energias internas sejam iguais, nem que um deles contenha mais calor: faltam dados de material e estado, e calor nomeia transferência.",
        "pitfall": "Tratar calor como conteúdo armazenado, deduzir energia interna apenas da temperatura ou considerar a sensação de contato uma medida universal e suficiente."
      },
      {
        "level": "intermediate",
        "title": "Converter temperatura e converter intervalo",
        "explanation": "Celsius, Fahrenheit e kelvin podem expressar a mesma temperatura com números diferentes. Denotando por C, F e K os valores numéricos nessas unidades, usam-se F=(9/5)C+32 e K=C+273,15. As inversas são C=(5/9)(F−32) e C=K−273,15. A notação apenas simplifica os valores numéricos: não afirma que o símbolo da unidade K seja uma variável em uma equação dimensional. A diferença de origem das escalas exige o termo constante. Por exemplo, 10 °C correspondem a 50 °F e 283,15 K. A temperatura de 0 °C não é ausência de temperatura: corresponde a 273,15 K. Já um intervalo ou variação é a diferença entre dois valores, ΔT=Tfinal−Tinicial. Ao subtrair as conversões, as constantes desaparecem: a variação em kelvin tem o mesmo valor numérico da variação em graus Celsius, e a variação em graus Fahrenheit é 9/5 da variação em graus Celsius. Assim, um aumento de 12 °C equivale a um aumento de 12 K e 21,6 °F, sem somar 273,15 ou 32 ao intervalo. O sinal também importa: resfriar pode produzir variação negativa sem que a temperatura final seja negativa em kelvin. Não confunda comparar números de escalas distintas com comparar estados térmicos: 20 °C não são menores que 15 °F apenas porque 20 e 15 parecem próximos; converta para uma unidade comum. Em problemas didáticos, use 273,15 quando não houver aproximação explicitamente autorizada, e informe a unidade de cada resultado.",
        "steps": [
          "Identifique se o dado é uma temperatura ou uma variação.",
          "Para temperatura, aplique a conversão com a origem correta de cada escala.",
          "Para variação, elimine o deslocamento constante e mantenha o fator de escala.",
          "Confira sinal, unidade e eventual aproximação autorizada."
        ],
        "example": "Cálculo autoral: uma amostra fictícia passa de 8 °C a 20 °C. As temperaturas em kelvin são 281,15 K e 293,15 K, mas a variação é 12 K. Em Fahrenheit, passa de 46,4 °F a 68 °F; a diferença é 21,6 °F. Converter o valor inicial e o final confirma a regra de intervalos sem aplicar um deslocamento duas vezes.",
        "pitfall": "Somar 273,15 a uma variação, esquecer o 32 ao converter uma temperatura Fahrenheit ou comparar números de escalas diferentes sem compatibilizá-las."
      },
      {
        "level": "advanced",
        "title": "Escala linear e coerência das referências",
        "explanation": "Uma escala termométrica didática pode ser relacionada a outra por uma função afim quando a linearidade é uma hipótese explícita do problema. Se X₁ corresponde a C₁ e X₂ corresponde a C₂, com referências distintas, a relação é (X−X₁)/(X₂−X₁)=(C−C₁)/(C₂−C₁). A igualdade compara posições relativas entre os dois pontos fornecidos. Ela não exige que o zero de uma escala coincida com o da outra. A regra de três direta X/C só é válida em uma relação proporcional sem deslocamento de origem; em geral, é preciso encontrar coeficiente e termo constante. Para uma escala autoral Y que marca −20 °Y em 0 °C e 180 °Y em 100 °C, obtém-se Y=2C−20; em 30 °C, a leitura é 40 °Y. Não se trata de um termômetro real nem de uma definição oficial de unidade, mas de um modelo algébrico. Para conferir, substitua os dois pares de referência e depois o resultado encontrado. Dois pontos permitem determinar a função afim assumida; não demonstram que qualquer instrumento físico tenha resposta linear em todo intervalo. A extrapolação além das referências depende da validade do modelo. Também é necessário separar referências históricas de uma escala de sua definição metrológica atual: o kelvin é definido no SI pela fixação do valor da constante de Boltzmann, e não hoje por uma receita de congelar água. Quando se usa água como referência física, pressão e pureza influenciam mudanças de estado. Por isso, os valores fornecidos em um exercício não autorizam prometer a mesma leitura de ebulição em qualquer lugar nem prescrever calibração doméstica com substâncias ou equipamentos desconhecidos.",
        "steps": [
          "Anote os pares correspondentes e confirme a hipótese de linearidade.",
          "Use diferenças em relação às origens ou determine a função afim.",
          "Resolva a leitura pedida sem impor zeros coincidentes.",
          "Confira referências e resultado e explicite os limites de interpolação ou extrapolação."
        ],
        "example": "Modelo autoral: Y=2C−20 satisfaz Y=−20 quando C=0 e Y=180 quando C=100. Para Y=70, resolvemos 70=2C−20, obtendo C=45 °C. A conferência 2·45−20=70 valida o cálculo; uma regra direta que ignore −20 falharia nas referências. O exemplo usa escala e valores distintos dos propostos na atividade.",
        "pitfall": "Aplicar proporcionalidade direta quando há deslocamento de origem, afirmar que dois pontos provam linearidade física universal ou confundir referência didática com definição atual do SI."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma temperatura hipotética de 27 °C deve ser expressa em kelvin e em graus Fahrenheit. Sem arredondar 273,15 para 273, qual par é correto?",
        "hint": "Use os valores numéricos K=C+273,15 e F=(9/5)C+32. O dado é temperatura, não intervalo.",
        "options": [
          "27 K e 80,6 °F.",
          "300,15 K e 27 °F.",
          "300,15 K e 80,6 °F.",
          "−246,15 K e 48,6 °F."
        ],
        "correctIndex": 2,
        "solution": "C, índice 2: 27+273,15=300,15 K; (9/5)·27+32=48,6+32=80,6 °F. A mantém incorretamente 27 em kelvin; B mantém 27 em Fahrenheit; D subtrai o deslocamento kelvin e omite 32 no resultado Fahrenheit. K não leva símbolo de grau, e os dois valores corretos representam a mesma temperatura, sem alterar o estado físico da situação hipotética."
      },
      {
        "level": "intermediate",
        "prompt": "Em um modelo autoral, a temperatura aumenta em 45 °F. Qual é esse aumento em graus Celsius e em kelvin, respectivamente?",
        "hint": "Um aumento é um intervalo. Use ΔC=(5/9)ΔF e ΔK=ΔC, sem deslocamentos de origem.",
        "options": [
          "25 °C e 25 K.",
          "25 °C e 298,15 K.",
          "7,22 °C e 280,37 K.",
          "81 °C e 81 K."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a variação Celsius é 45·5/9=25 °C, e o mesmo intervalo vale 25 K. B soma indevidamente 273,15 a uma variação; C trata 45 °F como temperatura absoluta na escala Fahrenheit, usando (45−32)·5/9; D aplica o fator 9/5 no sentido inverso. Nenhuma dessas informações permite calcular a temperatura final sem conhecer o valor inicial."
      },
      {
        "level": "advanced",
        "prompt": "Uma escala didática X é linear: marca 30 °X quando a temperatura é 0 °C e 180 °X quando é 100 °C. Qual temperatura Celsius corresponde à leitura de 90 °X?",
        "hint": "Compare as diferenças em relação aos pontos de referência. Os zeros das escalas não coincidem.",
        "options": [
          "50 °C.",
          "60 °C.",
          "90 °C.",
          "40 °C."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: (90−30)/(180−30)=(C−0)/(100−0). Assim, 60/150=C/100 e C=40 °C. Equivalentemente, X=1,5C+30, e 1,5·40+30=90. A decorre da razão direta 90·100/180, que ignora a origem; B usa a diferença 60 como se os intervalos tivessem mesma unidade; C mantém a leitura sem conversão. As duas referências conferem o modelo assumido, sem provar resposta física universal de instrumentos."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Mol, massas e estequiometria",
    "objective": "Relacionar massa, quantidade de matéria e entidades e usar equações balanceadas para calcular proporções, reagente limitante, excesso, pureza e rendimento em modelos didáticos.",
    "prerequisites": [
      "Fórmulas químicas e balanceamento",
      "Razões e porcentagens",
      "Unidades de massa e notação científica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Da fórmula à massa molar e às entidades",
        "explanation": "Quantidade de matéria é uma grandeza cuja unidade SI é o mol. Um mol corresponde exatamente a 6,02214076×10²³ entidades elementares especificadas, valor numérico da constante de Avogadro, cuja unidade é mol⁻¹. É necessário dizer quais entidades se contam: átomos, moléculas, íons ou unidades de fórmula, conforme o sistema. Um mol de moléculas de água não é um mol de átomos no total: cada molécula H₂O reúne três átomos, portanto um mol de moléculas contém três mols de átomos, sendo dois de hidrogênio e um de oxigênio. Em sólidos iônicos como NaCl, usar unidade de fórmula evita tratar todo cristal como conjunto de moléculas isoladas de NaCl. Massa molar M relaciona massa m e quantidade n pela expressão n=m/M, com unidades compatíveis, como g e g/mol. Para calculá-la a partir da fórmula, multiplique a contribuição de cada elemento por seu índice e some. Usando os valores didáticos H=1, C=12 e O=16 em g/mol, H₂O tem M=18 g/mol e C₂H₆O tem M=46 g/mol. Esses números são aproximações fornecidas para o exercício, não todos valores exatos da natureza. Para contar entidades, use N=n·Nₐ e especifique o que está sendo contado. Mesmo número de mols não implica mesma massa para substâncias diferentes. A massa de uma entidade em unidade de massa atômica também não é a massa de um mol em gramas, embora os números se relacionem na aproximação usual. O cálculo precisa preservar a distinção entre grandeza, unidade e objeto da contagem.",
        "steps": [
          "Leia a fórmula e identifique as entidades e seus índices.",
          "Calcule a massa molar com os valores de referência fornecidos.",
          "Converta massa em mol por n=m/M, com unidades compatíveis.",
          "Se necessário, converta mol em entidades e diferencie moléculas de átomos totais."
        ],
        "example": "Exemplo autoral: usando M(H₂O)=18 g/mol, 9 g de água correspondem a 9/18=0,5 mol de moléculas. Como cada molécula tem três átomos, há 1,5 mol de átomos no total, distribuídos em 1 mol de H e 0,5 mol de O. As contagens são relacionadas, mas não representam a mesma entidade.",
        "pitfall": "Usar mol como sinônimo de massa, esquecer índices na massa molar ou contar moléculas e átomos totais como se fossem a mesma entidade."
      },
      {
        "level": "intermediate",
        "title": "Proporções da reação e reagente limitante",
        "explanation": "Os coeficientes de uma equação química balanceada estabelecem proporções entre quantidades de matéria, não diretamente entre massas em gramas. Na equação autoral de cálculo C₂H₄+3O₂→2CO₂+2H₂O, 1 mol de C₂H₄ consome 3 mol de O₂ e permite obter 2 mol de CO₂ e 2 mol de H₂O, no modelo de reação completa descrito. A proporção em massa exige converter cada quantidade por sua própria massa molar. Se mais de um reagente tem quantidade disponível informada, não se pode presumir excesso de todos. Compare n de cada reagente dividido por seu coeficiente; o menor quociente determina o avanço máximo da reação considerada. A quantidade de produto é esse avanço multiplicado pelo coeficiente do produto. O excesso se calcula subtraindo da quantidade inicial a quantidade efetivamente consumida, e não subtraindo massas de substâncias diferentes sem uma relação estequiométrica. Se os quocientes são iguais, os reagentes estão na proporção estequiométrica e não há excesso no modelo ideal. Depois, confira que as quantidades remanescentes não sejam negativas e que átomos de cada elemento sejam conservados no conjunto. Esse tratamento supõe a reação e as condições informadas: reações concorrentes, equilíbrio e rendimento real exigem análise adicional. Para gases, não adote um volume molar fixo em qualquer temperatura e pressão; relações de volume precisam de condições e modelo compatíveis. As fórmulas aqui servem à interpretação quantitativa no papel, sem instruções de executar reações.",
        "steps": [
          "Confira o balanceamento e converta dados para mol quando necessário.",
          "Use os coeficientes como proporções entre quantidades de matéria.",
          "Compare n/coeficiente para todos os reagentes disponíveis.",
          "Calcule produto e excesso e verifique conservação e não negatividade."
        ],
        "example": "Modelo autoral: pela equação C₂H₄+3O₂→2CO₂+2H₂O, há inicialmente 2 mol de C₂H₄ e 9 mol de O₂. Os quocientes são 2/1=2 e 9/3=3, então C₂H₄ limita o processo. Formam-se teoricamente 4 mol de CO₂ e 4 mol de H₂O, consumindo 6 mol de O₂ e deixando 3 mol desse reagente. O exemplo é um cálculo hipotético, não um procedimento de combustão.",
        "pitfall": "Aplicar coeficientes diretamente a gramas de substâncias distintas, escolher o limitante apenas pela menor massa ou usar todo reagente em excesso para calcular produto."
      },
      {
        "level": "advanced",
        "title": "Pureza e rendimento são etapas diferentes",
        "explanation": "Pureza em massa indica a fração da amostra correspondente à substância de interesse. Se a fração é p, a massa disponível dessa substância é mtotal·p; 80% corresponde a p=0,80, não a 80 na multiplicação. Para aplicar essa correção, o problema deve informar como as impurezas se comportam. Não se presume que sejam sempre inertes em qualquer processo real. Nos modelos em que não participam da reação nem alteram o produto pedido, a massa pura é convertida em mol e entra na relação balanceada. A quantidade teórica de produto é o máximo calculado pela reação especificada e pelo reagente limitante, sem perdas ou processos paralelos. Rendimento percentual compara quantidade efetivamente obtida e teórica da mesma espécie: rendimento=(obtido/teórico)·100%. Se o rendimento é r como fração, a quantidade obtida é r vezes a teórica. Numerador e denominador precisam representar a mesma grandeza com unidades compatíveis. Pureza não se confunde com rendimento: uma altera a quantidade inicial da substância útil; o outro relaciona produto obtido e produto previsto. A sequência de cálculo ajuda a não aplicar uma correção duas vezes nem comparar produto com massa total de reagente como se fossem a mesma base. Um resultado aparente acima de 100% pede investigar umidade, impureza do produto, medidas ou hipóteses; não prova criação de matéria. A análise matemática não substitui controle experimental e não fornece roteiro de preparação, aquecimento ou coleta de gases.",
        "steps": [
          "Identifique a base da pureza e as hipóteses sobre impurezas.",
          "Calcule massa pura, mols e produto teórico pelo limitante.",
          "Aplique o rendimento à quantidade teórica do produto, com unidades iguais.",
          "Confira a base de cada porcentagem e se a resposta respeita o modelo."
        ],
        "example": "Cálculo autoral, sem instrução experimental: em 2Mg+O₂→2MgO, uma amostra hipotética de 120 g contém 75% de Mg e impurezas inertes no modelo; O₂ está em excesso. Usando M(Mg)=24 e M(MgO)=40 g/mol, os 90 g de Mg correspondem a 3,75 mol e a 150 g teóricos de MgO. Se o produto puro obtido fosse 120 g, o rendimento seria 120/150·100%=80%, distinto da pureza inicial de 75%.",
        "pitfall": "Comparar produto com massa total da amostra sem estequiometria, trocar a base de pureza pela de rendimento ou corrigir duas vezes uma mesma quantidade."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Dados autorais: 22 g de CO₂, com massa molar de 44 g/mol. Qual par indica a quantidade de CO₂ e a quantidade total de átomos nessa amostra?",
        "hint": "Primeiro calcule n=m/M. Cada molécula CO₂ contém um átomo de carbono e dois de oxigênio.",
        "options": [
          "0,5 mol de CO₂ e 0,5 mol de átomos no total.",
          "0,5 mol de CO₂ e 1,5 mol de átomos no total.",
          "2 mol de CO₂ e 6 mol de átomos no total.",
          "22 mol de CO₂ e 44 mol de átomos no total."
        ],
        "correctIndex": 1,
        "solution": "B, índice 1: 22/44=0,5 mol de CO₂. Cada molécula reúne três átomos, logo há 0,5·3=1,5 mol de átomos no total, sendo 0,5 mol de C e 1 mol de O. A confunde contagem de moléculas e átomos; C usa a razão inversa M/m; D toma massa em gramas como mol e não respeita o total de três átomos por molécula. Não é necessário usar um valor arredondado de Avogadro para responder em mol."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo autoral: 2Al + 3Cl₂ → 2AlCl₃. Há 4 mol de Al e 3 mol de Cl₂ disponíveis. Considerando apenas essa reação completa até esgotar o limitante, qual par informa produto teórico e excesso remanescente?",
        "hint": "Compare 4/2 e 3/3 antes de multiplicar pelo coeficiente do produto. Depois subtraia o consumo do reagente que sobra.",
        "options": [
          "4 mol de AlCl₃, sem Al em excesso.",
          "3 mol de AlCl₃, com 1 mol de Cl₂ em excesso.",
          "2 mol de AlCl₃, com 2 mol de Cl₂ em excesso.",
          "2 mol de AlCl₃, com 2 mol de Al em excesso."
        ],
        "correctIndex": 3,
        "solution": "D, índice 3: os quocientes são 4/2=2 para Al e 3/3=1 para Cl₂, que é limitante. O avanço máximo 1 produz 2 mol de AlCl₃, consumindo 2 mol de Al e 3 mol de Cl₂; restam 2 mol de Al. A exigiria 6 mol de Cl₂; B excede o produto permitido pelo cloro disponível; C atribui excesso ao reagente inteiramente consumido. Conferir Al e Cl nos produtos e no remanescente conserva os átomos."
      },
      {
        "level": "advanced",
        "prompt": "Modelo autoral: uma amostra de 250 g contém 80% em massa de CaCO₃ e impurezas inertes. Para CaCO₃ → CaO + CO₂, considere M(CaCO₃)=100 g/mol, M(CO₂)=44 g/mol e rendimento de 75% sobre o CO₂ teórico. Qual massa de CO₂ é obtida?",
        "hint": "Calcule a massa pura antes da relação molar 1:1 e aplique o rendimento ao produto teórico, sem mudar a base das porcentagens.",
        "options": [
          "66 g.",
          "88 g.",
          "110 g.",
          "165 g."
        ],
        "correctIndex": 0,
        "solution": "A, índice 0: a massa pura é 250·0,80=200 g, que corresponde a 2 mol de CaCO₃. A relação 1:1 fornece 2 mol de CO₂, ou 88 g teóricos. Aplicando 75%, obtêm-se 88·0,75=66 g. B ignora o rendimento; C usa toda a amostra como pura e fornece 110 g teóricos; D supera até os 110 g teóricos da amostra indevidamente tratada como pura. O caso é quantitativo e não prescreve como realizar a reação."
      }
    ]
  }
];

export const authoredCurriculumBatch14ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Funções exponencial e logarítmica",
    "contentSha256": "93bbe02ee39889c023ebe79c451c7c84d6a94e9c1541d34e25242eff2ac7b104",
    "draftMethod": "Autoria e recálculo Codex com OpenStax consultado; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-1-exponential-functions",
      "https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-3-logarithmic-functions",
      "https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-4-graphs-of-logarithmic-functions",
      "https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-5-logarithmic-properties",
      "https://openstax.org/books/algebra-and-trigonometry-2e/pages/6-6-exponential-and-logarithmic-equations"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Analise da funcao f(x)=5*(1/2)^x+2: base 1/2 entre 0 e 1 implica decrescente; coeficiente 5>0 preserva sinal; dominio todos os reais; imagem (2,+inf) pois (1/2)^x nunca atinge 0; alternativa 1 correta, outras erram sentido, dominio ou imagem."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Equacao log3(x-1)+log3(x-3)=1: dominio exige x>3; combinacao leva a (x-1)(x-3)=3, candidatos 0 e 4; apenas 4 satisfaz x>3 e verificacao na equacao original dava 1+0=1; alternativa 2 correta, x=0 torna argumentos negativos."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Inequacao (1/3)^(2x-1)>=27: escreve-se 27=(1/3)^(-3); base 1/3 <1 faz funcao decrescente, inverta sentido da desigualdade: 2x-1<=-3, entao x<=-1; fronteira -1 incluida pois igualdade; alternativa 0 correta, B inverte errado, C exclui igualdade, D inclui valores falhos."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Vozes verbais e colocação pronominal",
    "contentSha256": "2041d7f6be4086ed8e1b9dfa5afe32422a0bf89bee12044f0dc3a52b259d55c4",
    "draftMethod": "Autoria e análise sintática Codex com fontes institucionais consultadas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://curriculo.sedu.es.gov.br/curriculo/wp-content/uploads/2024/11/2a-EM-RPE-35a-SEMANA-f.pdf",
      "https://portal.ifro.edu.br/images/Jornalismo/03-Marco-2022/31-03/Manual_de_Reda%C3%A7%C3%A3o_Oficial_do_IFRO_-_Ebook_2021_1.pdf",
      "https://funag.gov.br/manual/index.php?title=Coloca%C3%A7%C3%A3o_pronominal",
      "https://www.trf3.jus.br/emag/emagconecta/conexaoemag-lingua-portuguesa/colocacao-pronominal-iii-mesoclise-e-enclise?no_cache=1&sword_list%5B0%5D=cert"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Conferência do agente principal: D, índice 3: os textos passa a sujeito paciente; foram preserva o pretérito perfeito com concordância plural, e corrigidos concorda com textos. Pelas revisoras conserva o agente. A troca o tempo para futuro; B inverte os participantes da ação; C erra a concordância de auxiliar e particípio. A transposição reorganiza o foco, sem afirmar identidade de todos os efeitos discursivos."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Analise de concordancia em duas frases: 'Publicam-se cadernos' tem leitura passiva equivalente ('cadernos sao publicados') com sujeito paciente plural. 'Necessita-se de revisores' usa se como indeterminador, 'de revisores' e complemento preposicional, verbo permanece singular. Opcao 0 afirma erradamente que 'se' e reflexivo em ambas. Opcao 2 ignora que 'necessita-se' e singular. Opcao 3 atribui funcoes sinteticas incorretas. A interpretacao correta e a opcao 1, conforme gabarito."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Regras de escrita formal normativa com negativa 'nao' e futuro do presente 'entregarei': 'nao' sem pausa atrai pronome para prereclise, resultando em 'nao lhe entregarei'. Opcao 0 incorretamente impõe mesoclise apesar da atracao. Opcao 1 anexa 'lhe' diretamente ala forma flexionada (enclise), posicao rejeitada nessa orientacao formal. Opcao 3 inventa proibicao geral de 'lhe' com futuro, que nao tem base normativa. A forma adequada e a opcao 2, conforme gabarito."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Literatura indígena e afro-brasileira",
    "contentSha256": "0c75821457fbac3e292b87a2cd3e8337e1d84ccbe6bb3851b8087a233efccddd",
    "draftMethod": "Autoria e análise literária Codex com fontes autorais e pesquisa consultadas; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://danielmunduruku.com/",
      "https://www.elianepotiguara.org.br/",
      "https://www.scielo.br/j/edur/a/t89qs8VFNXD66bM5Jg3NM5J/?format=html&lang=pt",
      "https://periodicos.unb.br/index.php/estudos/article/view/9430",
      "https://periodicos.unb.br/index.php/estudos/article/view/9430/8332",
      "https://www.letras.ufmg.br/literafro/arquivos/autoras/MariaFirminaArtigoJuliano.pdf",
      "https://www.itaucultural.org.br/ocupacao/conceicao-evaristo/escrevivencia/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A alternativa A afirma erroneamente que a presença de personagem indígena prova autoria indígena, contradizendo explicitamente a lição de que 'a presença de uma personagem indígena em um livro não demonstra autoria indígena'. A alternativa B impõe requisito espacial estereotipado sobre vida urbana, também rejeitado na lição ao afirmar que 'o uso de tecnologias ou a vida urbana não retira automaticamente o pertencimento'. A alternativa C corretamente exige distinção entre representação e autoria sem presumir voz universal, alinhando-se ao objetivo da lição. A alternativa D confunde instância narrativa com pessoa real, o que a lição desaconelha como 'deduzir autoria pela personagem, confundir narrador e pessoa real'."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A alternativa A corretamente identifica que escrita e escuta aparecem em convivência na construção da memória, e o fragmento 'não basta para determinar a identidade étnica da autoria', o que corresponde ao ensinamento de que 'nem todo texto indígena precisa apresentar um ancião, uma floresta ou um mito' e que a identidade étnica não pode ser inferida apenas do conteúdo. A alternativa B contradiz a lição ao afirmar que a escrita 'apagou toda escuta', quando o texto mostra convivência entre ambas as ações. A alternativa C inventa cultura indígena universal, o que a lição rejeita ao afirmar 'também não há uma língua indígena única ou uma cosmologia comum a todos os povos'. A alternativa D toma primeira pessoa como garantia documental, o que a lição desaconelha ao distinguir elaboração literária de registro documental literal."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A alternativa A incorretamente conclui que ambas as obras são diários documentais, quando a lição afirma que 'escrevivência não faz toda ficção sua equivaler a uma transcrição documental'. A alternativa B dispensa indevidamente a análise de linguagem e composição, contradizendo a lição que diz que 'reconhecer a denúncia social não dispensa analisar metáforas, composição, ritmo ou focalização'. A alternativa C impõe tema e narrador obrigatórios a produção diversa, o que a lição rejeita ao afirmar que 'atendimento às experiências negras não restringe autores a escrever apenas sobre escravidão ou sofrimento'. A alternativa D corretamente orienta comparação de perspectivas, memória e recursos formais considerando diferenças de gênero e contexto sem reduzir ficção a autobiografia literal, alinhando-se ao critério proposto na lição."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Formulação de tese",
    "contentSha256": "ce3df2b0bd28c11b8996b46c7c6c5bd19819d0f1be29d38252cf08022dcab144",
    "draftMethod": "Autoria e análise argumentativa Codex com Inep e Purdue consultados; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante",
      "https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/enem-2026-cartilha-da-redacao-esta-disponivel",
      "https://owl.purdue.edu/owl/general_writing/the_writing_process/thesis_statement_tips.html",
      "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/organizing_your_argument.html"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A alternativa C formula tese pertinente sobre preservação de áreas escolares com fatores concretos e discutíveis (participação de usuários, manutenção planejada, dependência de decisões de uso e conservação), sustentando um percurso de argumentação; A permanece como pergunta sem posição, B é anúncio vago sobre escolas, D transfere o recorte para circulação de mercadorias entre países, completamente alheio ao tema proposto."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A alternativa A reformula corretamente a tese universal absoluta 'elimina completamente' como possibilidade condicionada, desenvolvendo os aspectos não sustentados no desenvolvimento (participação, separação, destinação de resíduos); B mantém generalização sem apoio empírico, C fabrica percentual inventado de eficácia, D abandona completamente o recorte de resíduos escolares."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Conferência do agente principal: D, índice 3: a revisão incorpora a limitação reconhecida e permite sustentar uma proposta de articulação, sem prometer solução única ou acesso garantido. A apaga uma condição já admitida; B muda a superfície e conserva a contradição; C salta para proibição total que não decorre dos dados. Considerar objeções pode qualificar a posição; não obriga nem a ignorá-las nem a abandonar qualquer possibilidade digital."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Cognatos e falsos cognatos em inglês",
    "contentSha256": "4782be4c5b8fa30d2d858192aeda5f01417f60accdad014c3a7e261330993572",
    "draftMethod": "Autoria e análise lexical Codex com British Council e Merriam-Webster consultados; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.teachingenglish.org.uk/professional-development/teachers/teaching-knowledge-database/d-h/false-friends?page=1",
      "https://www.merriam-webster.com/dictionary/cognate",
      "https://www.merriam-webster.com/dictionary/memory",
      "https://www.merriam-webster.com/dictionary/actual",
      "https://www.merriam-webster.com/dictionary/eventually",
      "https://www.merriam-webster.com/dictionary/pretend",
      "https://www.merriam-webster.com/dictionary/library",
      "https://www.merriam-webster.com/dictionary/sensible"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "No nível basic, a frase 'Her excellent memory helped her recall the instructions' sustenta 'memory' como capacidade de lembrar (opção 1) pela relação direta com 'recall the instructions'. A dica explícita confirma que não há inferência sobre dispositivo eletrônico. As outras opções (0, 2, 3) representam interpretações erradas baseadas apenas na aparência da palavra ou significados técnicos desconexos do contexto. O gabarito index 1 está correto e coerente com o objetivo da lição sobre cognatos e falsos amigos."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "No nível intermediate, a frase 'The estimated cost was 40; the actual cost was 55' contrasta previsão e valor efetivo. A opção 3 ('Real ou efetivo, em contraste com o valor estimado de 40') está correta pois 'actual' aqui significa o custo real ocorrido, não 'atual' no sentido temporal. A dica confirma: 'A comparação opõe estimativa e valor efetivo; não informa uma oposição entre antigo e atual'. As outras options (0, 1, 2) interpretam erradamente 'actual' como referência a períodos históricos, hipótese futura ou frequência, todas inconsistentes com a estrutura da frase."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Conferência do agente principal: A, índice 0: eventually apresenta o desfecho posterior às três tentativas frustradas; repaired afirma o conserto desse relógio. O tempo exato não é fornecido. B troca sequência e resultado por frequência e omite o conserto; C inventa sucesso futuro imediato; D contradiz after three failed attempts. O leitor pode justificar a interpretação pelas pistas sem afirmar que eventually exige sempre uma demora longa ou três tentativas."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Tempos do passado em espanhol",
    "contentSha256": "28a2a3fbee533c2977f7e62313bf4a218cc7fb82f57499002b996b44a5630193",
    "draftMethod": "Autoria e conferência morfológica e temporal Codex com RAE-ASALE consultada; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://www.rae.es/gtg/pret%C3%A9rito-perfecto-simple",
      "https://www.rae.es/gtg/pret%C3%A9rito-imperfecto-de-indicativo",
      "https://www.rae.es/gtg/pret%C3%A9rito-perfecto-compuesto-de-indicativo",
      "https://www.rae.es/gtg/pret%C3%A9rito-pluscuamperfecto-de-indicativo",
      "https://dle.rae.es/comer",
      "https://www.rae.es/dpd/ayuda/modelos-de-conjugacion-verbal"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 0,
        "reasoning": "Conferência do agente principal: A, índice 0: estudiar segue o padrão de hablar, com a terminação -é em yo estudié. B, estudió, é terceira pessoa do singular do mesmo tempo; C, estudiaba, é imperfecto, podendo corresponder a primeira ou terceira pessoa singular; D, estudiemos, é presente do subjuntivo ou forma de exortação em contexto próprio. A seleção depende de pessoa e tempo pedidos, sem impor um marcador temporal universal."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Conferência do agente principal: C, índice 2: sonó está no perfecto simple e apresenta o toque do sinal; leía está no imperfecto e focaliza a leitura em desenvolvimento nesse momento. A erra os tempos; B transforma ausência de delimitação na forma verbal em nunca terminar; D inventa duração exata. A frase não afirma que Inés abandonou definitivamente a revista nem relata o desfecho da leitura."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "Conferência do agente principal: B, índice 1: ya había organizado é pluscuamperfecto de indicativo e coloca a organização antes da abertura mencionada. A usa ordem textual como ordem cronológica e inverte a relação; C transforma uma anterioridade passada em futuro; D confunde había com uma forma de subjuntivo e inventa negação. A frase não diz quanto tempo antes ocorreu a organização nem que ela causou a abertura."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Termologia e escalas termométricas",
    "contentSha256": "bcdcab06d86fb054e249e9763b0529d36f054ccbdd67319d35fab2912bb18c04",
    "draftMethod": "Autoria e recálculo Codex com OpenStax e NIST consultados; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/college-physics-2e/pages/13-1-temperature",
      "https://openstax.org/books/college-physics-2e/pages/14-1-heat",
      "https://www.nist.gov/pml/owm/si-units-temperature",
      "https://www.nist.gov/pml/special-publication-330/sp-330-section-2"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Conversão de 27 °C para kelvin: K = 27 + 273,15 = 300,15 K. Conversão para Fahrenheit: F = (9/5)·27 + 32 = 48,6 + 32 = 80,6 °F. A alternativa 0 mantém 27 K, incorreta pois não converte. A alternativa 1 mantém 27 °F, incorreta pois não converte nem aplica fator. A alternativa 3 resulta em −246,15 K (27 − 273,15) e 48,6 °F (9/5·27 sem +32), ambas erradas. A alternativa 2 oferece o par correto 300,15 K e 80,6 °F, confirmando os cálculos e o fato de K não usar símbolo de grau. O gabarito correto é o índice 2."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "O enunciado descreve um aumento (variação) de 45 °F, não uma temperatura absoluta. A variação em Celsius é ΔC = (5/9)·ΔF = (5/9)·45 = 25 °C. A variação em Kelvin é ΔK = ΔC = 25 K, pois escalas de intervalo têm o mesmo tamanho de grau. A alternativa B comete o erro de somar 273,15 a uma variação, transformando intervalo em temperatura. A alternativa C trata 45 °F como temperatura absoluta, usando (45−32)·5/9 ≈ 7,22 °C. A alternativa D inverte o fator, multiplicando por 9/5 ao invés de 5/9. O gabarito correto é o índice 0, que apresenta 25 °C e 25 K."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A escala didática X é affine: marca 30 °X em C=0 e 180 °X em C=100, dando a função X = 1,5·C + 30. Para leitura X=90, resolvemos 90 = 1,5·C + 30, obtendo C = (90−30)/1,5 = 60/1,5 = 40 °C. A alternativa A decorre da razão direta 90·100/180 = 50, ignorando o deslocamento de origem 30. A alternativa B usa a diferença 60 como se os intervalos tivessem mesma unidade sem considerar a origem. A alternativa C mantém a leitura 90 sem conversão para Celsius. O gabarito correto é o índice 3, correspondendo a 40 °C."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Mol, massas e estequiometria",
    "contentSha256": "38b2e83f174782b8d6f34e78c162c78303c009c603646349f55f3a8b78f98f23",
    "draftMethod": "Autoria e recálculo Codex com OpenStax e NIST consultados; crítica independente Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept",
      "https://openstax.org/books/chemistry-2e/pages/4-3-reaction-stoichiometry",
      "https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields",
      "https://www.nist.gov/pml/special-publication-330/sp-330-section-2"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Task 1 básico: cálculo n=m/M=22/44=0,5 mol CO₂; cada molécula CO₂ tem 3 átomos (1 C + 2 O) → 1,5 mol átomos no total; alternativa 1 apresenta 0,5 mol CO₂ e 1,5 mol átomos, correta; alternativa 0 erra ao afirmar 0,5 mol átomos totais (deveria ser 1,5); alternativa 2 usa razão inversa M/m (2 mol em vez de 0,5); alternativa 3 trata massa em gramas como mol direto (22 mol, incorreto). Resolução independente confirma o índice 1."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "Task 2 intermediário: equação 2Al+3Cl₂→2AlCl₃; quocientes de avanço: Al=4/2=2, Cl₂=3/3=1; Cl₂ é o limitante (menor quociente); avanço máximo=1 produz 2 mol AlCl₃; Al consumido=2 mol; Al remanescente=4-2=2 mol; alternativa 3 indica 2 mol AlCl₃ com 2 mol Al em excesso, correta; alternativa 1 atribui excesso a Cl₂ (errado, pois é o limitante); alternativa 2 também atribui excesso a Cl₂; alternativa 0 ignora o limitante e diz 4 mol AlCl₃. Recálculo independente confirma o índice 3."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Task 3 avançado: amostra 250g com 80% em massa de CaCO₃ e impurezas inertes → massa pura=250×0,80=200g; n(CaCO₃)=200/100=2 mol; relação molar 1:1 CaCO₃→CO₂ → 2 mol CO₂ teórico; massa teórica=2×44=88g; aplicar rendimento 75%: 88×0,75=66g; alternativa 0 indica 66g, correta; alternativa 1 (88g) ignora o rendimento sobre o teórico; alternativa 2 (110g) usa massa total da amostra (250g) como se fosse pura CaCO₃; alternativa 3 (165g) excede mesmo o teórico sem justificativa. Recálculo independente confirma o índice 0."
      }
    ]
  }
] as const;
