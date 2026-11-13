/**
 * Cinco aulas editoriais originais ENEM, profundas e não homologadas por docente.
 * Títulos são do catálogo Kognos, NÃO habilidades oficiais do Inep.
 * Não há clonagem por prova; fonte única em memória com IDs históricos estáveis.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseSection,CourseTask} from './course-content.ts';
import {examBlueprints} from './exam-blueprints.ts';

export type EnemDeepTopicSpec = {subject:string;topic:string;objective:string;prerequisites:string[];sections:CourseSection[];tasks:CourseTask[]};
export const authoredEnemDeepBatch01: readonly EnemDeepTopicSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Análise combinatória",
    "objective": "Resolver contagens finitas identificando quando a ordem importa, quando há repetição e como impor restrições sem contar o mesmo resultado duas vezes.",
    "prerequisites": [
      "Multiplicação de números naturais",
      "Fatoriais e produtos consecutivos",
      "Operações com conjuntos e princípio aditivo"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Princípios aditivo e multiplicativo",
        "explanation": "Problemas de contagem perguntam quantas configurações diferentes satisfazem regras, não exigem listar cada caso. O primeiro passo é definir com precisão o que diferencia dois resultados: uma senha é uma sequência ordenada; uma equipe é um conjunto de pessoas; um roteiro pode depender da ordem das visitas. Pelo princípio aditivo, alternativas mutuamente exclusivas somam-se: se uma viagem só pode ocorrer por 3 linhas de ônibus ou por 2 de trem, existem 5 escolhas. Pelo princípio multiplicativo, etapas sucessivas e independentes no sentido das escolhas disponíveis multiplicam-se: duas opções de camiseta e três de calça produzem 2 × 3 = 6 combinações. Essa regra continua válida quando a quantidade disponível em cada etapa depende da escolha anterior, desde que se explicitem os ramos da árvore de possibilidades. Uma senha de três algarismos distintos tem 10 escolhas para a primeira posição, 9 para a segunda e 8 para a terceira; há 720 sequências, incluindo as que começam com zero. Já para um número de três algarismos, a primeira posição não pode ser zero: 9 × 9 × 8 = 648. Distinguir a restrição do enunciado evita uma contagem intuitiva e errada.",
        "steps": [
          "Defina exatamente o objeto contado e se a posição importa.",
          "Separe casos exclusivos para somar e etapas sucessivas para multiplicar.",
          "Atualize o número de escolhas quando uma seleção impede outra."
        ],
        "example": "Uma lanchonete permite escolher 1 de 4 pães e 1 de 3 recheios. Cada pão combina com os três recheios; portanto, são 4 × 3 = 12 lanches. Não se somam 4 + 3, porque cada pedido contém duas etapas.",
        "pitfall": "Somar quantidades de etapas sucessivas ou esquecer que um primeiro algarismo não pode ser zero em números de três dígitos."
      },
      {
        "level": "intermediate",
        "title": "Permutações, arranjos e combinações",
        "explanation": "Uma permutação organiza todos os n elementos distintos: existem n! ordens, com n! = n × (n−1) × … × 1. Se duas posições trocadas representam resultados diferentes, a ordem importa. Quando selecionamos e ordenamos apenas p elementos entre n sem repetição, utilizamos arranjos A(n,p) = n!/(n−p)!. Quando escolhemos um grupo de p elementos sem registrar a ordem, usamos combinações C(n,p) = n!/[p!(n−p)!]. A diferença é concreta: presidente e vice de uma comissão são cargos distintos; escolher duas pessoas para compor uma dupla não depende de quem foi citado primeiro. Com 6 estudantes, a escolha de presidente e vice produz 6 × 5 = 30 pares ordenados; uma dupla de representantes possui 6 × 5/2 = 15 possibilidades. A divisão por p! corrige as p! ordenações indevidamente contadas no grupo. Na permutação com elementos repetidos, palavras como ARARA exigem dividir por fatoriais das repetições: 5!/(3!2!) = 10 arranjos distintos. Antes de aplicar uma fórmula, pergunte se há repetição, se todos participam e se trocar posições altera o resultado. Fórmulas sem essas condições não substituem o raciocínio combinatório.",
        "steps": [
          "Teste se trocar duas posições muda a configuração.",
          "Identifique seleção de todos, seleção ordenada ou grupo sem ordem.",
          "Calcule fatorial e elimine sobrecontagens por simetria ou repetição."
        ],
        "example": "Uma turma de 7 alunos precisa escolher três participantes sem papéis definidos. Existem C(7,3)=7!/(3!4!)=35 trios. Se fossem três cargos diferentes, seriam 7×6×5=210 arranjos.",
        "pitfall": "Usar arranjo para uma comissão sem cargos, multiplicando indevidamente pelo número de ordens possíveis."
      },
      {
        "level": "advanced",
        "title": "Restrições, complemento e dupla contagem",
        "explanation": "Contagens realistas trazem restrições: pelo menos uma pessoa de um grupo, dois objetos que não podem ficar juntos ou números com certas propriedades. Em vez de decorar fórmulas para cada cenário, decomponha o universo em casos disjuntos e use o complemento quando a condição desejada for mais difícil de contar diretamente. Se uma senha de quatro dígitos pode repetir algarismos, há 10⁴ resultados; as senhas sem qualquer 7 têm 9⁴, de modo que as com pelo menos um 7 são 10⁴−9⁴=3439. O método vale porque “ter algum 7” e “não ter nenhum 7” são conjuntos complementares dentro do mesmo universo. Para situações com duas condições, a inclusão–exclusão impede que a interseção seja contada duas vezes: |A∪B|=|A|+|B|−|A∩B|. Num grupo de 20 pessoas, 12 praticam vôlei, 9 basquete e 4 ambos; 12+9−4=17 praticam ao menos um esporte. Se o enunciado envolve probabilidade, a contagem fornece numerador e denominador, mas é preciso confirmar que os resultados são equiprováveis. Ao final, faça uma checagem de ordem de grandeza: o número de configurações sob restrições não pode exceder o total irrestrito.",
        "steps": [
          "Identifique o universo irrestrito e as restrições exatas.",
          "Prefira complemento ou casos disjuntos quando simplificarem a contagem.",
          "Use inclusão–exclusão para interseções e confira limites do resultado."
        ],
        "example": "Entre números de dois algarismos, existem 90 possibilidades. Os múltiplos de 5 são 18 (10,15,…,95); portanto, há 90−18=72 números de dois algarismos que não são múltiplos de 5.",
        "pitfall": "Subtrair eventos sem delimitar o universo ou somar dois conjuntos que possuem elementos em comum."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quantos códigos de duas letras distintas podem ser criados com as letras A, B, C e D, considerando a ordem?",
        "options": [
          "6",
          "8",
          "12",
          "16"
        ],
        "correctIndex": 2,
        "hint": "A primeira posição admite quatro letras e a segunda três, pois não há repetição.",
        "solution": "C é correta: 4×3=12 códigos. Se a ordem não importasse, seriam apenas seis duplas; aqui AB e BA são diferentes."
      },
      {
        "level": "intermediate",
        "prompt": "De um grupo de 8 estudantes, quantas comissões de 2 pessoas podem ser escolhidas sem cargos?",
        "options": [
          "16",
          "28",
          "56",
          "64"
        ],
        "correctIndex": 1,
        "hint": "Uma comissão não muda quando seus integrantes trocam a ordem de citação.",
        "solution": "B é correta: C(8,2)=8×7/2=28. O produto 56 contaria cada dupla duas vezes; 16 e 64 não respeitam a seleção sem repetição."
      },
      {
        "level": "advanced",
        "prompt": "Uma urna possui 10 bilhetes numerados de 0 a 9. Quantas sequências de três bilhetes com reposição apresentam pelo menos um 0?",
        "options": [
          "100",
          "243",
          "271",
          "729"
        ],
        "correctIndex": 2,
        "hint": "Conte todas as sequências e subtraia aquelas em que o zero nunca aparece.",
        "solution": "C é correta: são 10³=1000 sequências totais e 9³=729 sem zero; 1000−729=271. O uso de reposição permite zero em várias posições."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Leitura e construção de gráficos",
    "objective": "Interpretar e construir representações gráficas adequadas, examinando escalas, unidades, proporções, distribuições e possíveis distorções visuais.",
    "prerequisites": [
      "Razões, porcentagens e proporções",
      "Leitura de tabelas",
      "Identificação de variáveis e unidades"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Eixos, escalas, variáveis e leitura de valores",
        "explanation": "Um gráfico transforma dados em uma representação que facilita comparações, mas só é interpretável quando seus elementos são explicitados. Comece pelo título, pelo universo pesquisado, pela fonte, pelo período de coleta e pelas unidades. Um eixo horizontal pode representar tempo, categorias ou intervalos; o vertical geralmente indica frequência, intensidade ou outra medida. É indispensável notar se a escala é linear, se os intervalos entre marcas são constantes e se o zero está incluído. Um gráfico de temperatura ao longo de um dia pode começar em 18 °C para tornar visível uma oscilação pequena; isso não altera os números, mas exagera visualmente a variação quando se compara o tamanho das barras. Em gráficos de linhas, cada ponto representa um par ordenado e a inclinação indica taxa de mudança. Uma linha que vai de 20 a 32 unidades em quatro horas ganhou 12 unidades, ou 3 unidades por hora em média; a taxa não descreve necessariamente cada intervalo. Valores absolutos e relativos respondem a perguntas diferentes: subir de 10 para 15 representa aumento absoluto de 5 e crescimento relativo de 50%, não de 5%. O leitor precisa distinguir a informação efetivamente mostrada daquela que o gráfico não permite inferir, como a causa da mudança.",
        "steps": [
          "Leia título, fonte, eixos, período, unidade e legenda antes da curva.",
          "Observe origem, intervalo e continuidade da escala.",
          "Calcule diferenças absolutas e porcentagens com base explícita."
        ],
        "example": "Um gráfico registra consumo de 80 kWh em abril e 100 kWh em maio. O aumento absoluto é 20 kWh, e o relativo é 20/80=25%. A base da porcentagem é abril, não maio.",
        "pitfall": "Concluir causalidade a partir de duas curvas que variam juntas ou calcular porcentagem usando como base o valor final."
      },
      {
        "level": "intermediate",
        "title": "Escolha do gráfico e construção a partir de dados",
        "explanation": "A representação adequada depende da pergunta e do tipo de variável. Barras horizontais ou colunas são úteis para comparar categorias como meios de transporte usados por estudantes. Gráficos de linhas representam séries temporais com observações ordenadas, evitando sugerir continuidade entre categorias sem relação de sequência. Setores ilustram partes de um todo, desde que as classes sejam mutuamente exclusivas e totalizem 100%; um setor correspondente a 25% ocupa 90° do círculo. Histogramas diferem de gráficos de barras: agregam observações quantitativas em intervalos contíguos, e sua interpretação depende da amplitude das classes. Um diagrama de dispersão relaciona pares de observações, mas não prova causa e efeito. Para construir um gráfico de colunas a partir da tabela de uma pesquisa, mantenha categorias completas, unidade uniforme e alturas proporcionais à frequência. Se uma escola entrevistou 40 pessoas e 16 usam bicicleta, a frequência relativa é 16/40=0,40, ou 40%. Na construção, escolha escala que abranja o valor máximo, indique a amostra e não esconda categorias de baixa frequência. Gráficos são modelos seletivos: sempre deixe explícito o que ficou fora dos dados ou da agregação.",
        "steps": [
          "Classifique as variáveis como categorias, tempo ou medidas quantitativas.",
          "Escolha representação coerente e converta valores, percentuais ou ângulos.",
          "Desenhe escala uniforme, legenda e fonte sem omitir categorias."
        ],
        "example": "Em uma pesquisa de 50 pessoas, 20 preferem ônibus, 15 bicicleta e 15 caminhada. O gráfico de setores apresenta 40%, 30% e 30%, correspondendo a 144°, 108° e 108°; a soma é 360°.",
        "pitfall": "Usar gráfico de setores para grupos que se sobrepõem ou desenhar barras com alturas não proporcionais aos dados."
      },
      {
        "level": "advanced",
        "title": "Distorções, distribuições e interpretação crítica",
        "explanation": "Gráficos podem induzir conclusões indevidas sem apresentar valores numericamente falsos. Um eixo vertical truncado torna pequenas variações aparentes saltos enormes; um pictograma que dobra altura e largura de uma figura quadruplica sua área, exagerando o crescimento percebido. Também é perigoso mudar o intervalo de classes de um histograma ou omitir informações sobre a amostra. Para comparar cidades de populações diferentes, frequências absolutas de atendimentos hospitalares são menos informativas que taxas por habitante, desde que a definição do atendimento seja equivalente. Uma média pode ocultar assimetria: na sequência 2, 2, 2, 2 e 12, a média é 4, enquanto a mediana é 2. A dispersão e a presença de valores extremos influenciam a interpretação. Em séries temporais, escolha o período adequado: dois meses de crescimento não demonstram tendência permanente. Ao ler um gráfico, teste a conclusão contra o denominador, a escala, a origem dos dados e possíveis fatores de confusão. Em questões do ENEM, compare evidências e descarte afirmações mais fortes do que o que o gráfico efetivamente demonstra. Uma representação confiável é legível, proporcional e transparente sobre seus limites.",
        "steps": [
          "Investigue cortes de eixo, pictogramas e mudanças de escala.",
          "Compare valores absolutos com taxas e medidas de tendência central.",
          "Diferencie descrição sustentada, correlação e inferência causal não demonstrada."
        ],
        "example": "Duas escolas registraram 30 e 60 faltas, mas possuem 100 e 400 estudantes. As taxas são 30% e 15% de uma falta por aluno, respectivamente, se cada falta representar uma pessoa única. Só o número absoluto sugeriria a conclusão oposta.",
        "pitfall": "Confundir o maior número bruto com a maior taxa ou interpretar uma diferença de escala como crescimento proporcional real."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma produção passou de 40 para 50 unidades. Qual foi o crescimento percentual em relação ao valor inicial?",
        "options": [
          "10%",
          "20%",
          "25%",
          "50%"
        ],
        "correctIndex": 2,
        "hint": "Divida o aumento absoluto pelo valor inicial, não pelo valor final.",
        "solution": "C é correta: (50−40)/40=10/40=0,25=25%. O aumento absoluto foi de 10 unidades; isso não equivale a 10%."
      },
      {
        "level": "intermediate",
        "prompt": "Qual representação é mais adequada para mostrar a evolução mensal da temperatura média de uma cidade durante um ano?",
        "options": [
          "Gráfico de linhas com meses ordenados",
          "Gráfico de setores sem indicação de tempo",
          "Pictograma com áreas arbitrárias",
          "Tabela sem qualquer unidade"
        ],
        "correctIndex": 0,
        "hint": "A questão envolve uma sequência temporal em que interessa a trajetória dos valores.",
        "solution": "A é correta: linhas mostram a variação ao longo de meses ordenados. Setores representam partes de um todo e não a evolução temporal; pictogramas sem proporção distorcem a leitura."
      },
      {
        "level": "advanced",
        "prompt": "Uma cidade A possui 200 ocorrências em 10 mil moradores e B tem 300 ocorrências em 30 mil moradores. Que cidade tem maior taxa por mil habitantes?",
        "options": [
          "B: 30 por mil",
          "As duas: 20 por mil",
          "A: 20 por mil",
          "B: 10 por mil e por isso é maior"
        ],
        "correctIndex": 2,
        "hint": "Calcule ocorrências dividido por moradores e multiplique por mil.",
        "solution": "C é correta: A apresenta 200/10000×1000=20 por mil; B apresenta 300/30000×1000=10 por mil. A possui taxa maior apesar do total bruto menor."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Funções da linguagem",
    "objective": "Reconhecer o efeito dominante das funções da linguagem e justificar sua presença por marcas textuais, destinatário e situação comunicativa.",
    "prerequisites": [
      "Elementos da comunicação: emissor, receptor, código, canal e contexto",
      "Reconhecimento de gênero textual",
      "Figuras de linguagem e usos da norma"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Comunicação e seis funções da linguagem",
        "explanation": "Uma situação de comunicação envolve alguém que enuncia, um destinatário, uma mensagem, um código compartilhado, um canal de contato e um contexto a que se pode fazer referência. As funções da linguagem descrevem qual desses elementos ganha maior destaque no texto; elas não formam caixas exclusivas. Na função referencial, predomina a transmissão de informação sobre um assunto, frequente em relatórios científicos e notícias factuais. Na emotiva ou expressiva, sobressai a atitude do enunciador, como em um diário que registra saudade ou entusiasmo. A função conativa ou apelativa procura influenciar o destinatário: imperativos e vocativos aparecem em avisos, publicidade e campanhas. A função fática verifica, estabelece ou mantém o contato, como “Alô, está me ouvindo?”. A metalinguística usa a língua para explicar o próprio código: “Substantivo nomeia seres, objetos ou ideias” é um exemplo didático. A função poética enfatiza a elaboração da mensagem, incluindo ritmo, paralelismo e jogos sonoros, mesmo fora de poemas. Um slogan pode simultaneamente apresentar uma informação e persuadir; a tarefa de leitura é identificar a função predominante segundo marcas concretas, não apenas decorar a classificação de um gênero.",
        "steps": [
          "Identifique quem fala, para quem, por qual canal e com que objetivo.",
          "Procure marcas textuais: imperativos, expressões subjetivas, definições ou recursos formais.",
          "Defina a função predominante e cite o indício que sustenta sua escolha."
        ],
        "example": "Na frase “Doe sangue hoje: sua decisão pode salvar vidas”, o imperativo “Doe” dirige um pedido de ação ao leitor. Predomina a função conativa, embora haja informação sobre a importância da doação.",
        "pitfall": "Afirmar que toda notícia é apenas referencial ou que toda poesia é exclusivamente poética sem considerar marcas de linguagem."
      },
      {
        "level": "intermediate",
        "title": "Gênero, intenção e sobreposição de funções",
        "explanation": "O mesmo tema pode ser desenvolvido por diferentes finalidades comunicativas. Compare “A temperatura será de 28 °C” com “Que calor insuportável!”: a primeira frase oferece um dado verificável, enquanto a segunda exprime a experiência do enunciador. Porém, enunciados reais combinam funções. Em “Você sabe como reduzir o desperdício? Feche a torneira”, a pergunta cria contato e o imperativo orienta a conduta. Ao analisar anúncios, observe verbos no imperativo, pronomes de segunda pessoa, promessas e apelos afetivos, sem assumir que todo recurso expressivo é necessariamente poético. Na linguagem acadêmica, a função referencial é frequente, mas expressões que definem termos específicos ativam a metalinguística. Um diálogo telefônico pode usar “Certo, entendi” para manter o canal aberto, funcionando de modo fático, mesmo quando troca informações práticas. A análise deve diferenciar finalidade principal do suporte: usar um aplicativo não define função; um texto publicado nele pode narrar uma experiência, explicar uma regra ou convocar uma campanha. Em questão objetiva, elimine alternativas que atribuem à função dominante um indício ausente da mensagem e escolha aquela que articula forma linguística, interlocutor e finalidade.",
        "steps": [
          "Leia a mensagem isoladamente antes de presumir a função pelo gênero.",
          "Reconheça funções secundárias quando há recursos mistos.",
          "Justifique a predominância pelo objetivo central e por marcas observáveis."
        ],
        "example": "Um professor escreve “Metáfora é uma comparação implícita entre ideias” no quadro. Mesmo em uma aula informativa, o enunciado explica uma categoria do próprio código verbal; prevalece a função metalinguística.",
        "pitfall": "Confundir o meio de circulação com a intenção do enunciado ou classificar pela emoção do leitor, não pelas marcas do texto."
      },
      {
        "level": "advanced",
        "title": "Função poética e leitura crítica de mensagens multimodais",
        "explanation": "A função poética destaca o modo como a mensagem é organizada. Repetição de sons, ambiguidades intencionais, paralelismo sintático e imagens inesperadas podem produzir um efeito estético ou memorável. Essa função aparece em letras de campanhas, slogans, títulos e mensagens visuais, não apenas em textos literários. Em “O tempo corre, a cidade não dorme”, a personificação e o ritmo constroem um efeito que chama atenção para a expressão. Em cartazes multimodais, palavras, cores, tamanho das letras e disposição dos elementos podem reforçar um convite ao consumo ou uma denúncia. Isso não significa que toda imagem seja poética: se um gráfico foi escolhido para comunicar quantidades, a dimensão referencial pode predominar. Interpretar a função requer distinguir composição estética de propósito persuasivo, frequentemente presentes ao mesmo tempo. Outro cuidado é perceber quando uma mensagem critica seu próprio meio, como um anúncio que ironiza fórmulas da publicidade. Nesse caso, a metalinguagem pode aparecer associada ao efeito poético. O leitor deve sustentar a resposta em evidências: um recurso visual impactante não prova, sozinho, que a função conativa desapareceu. Em avaliações, a alternativa melhor não é a que apenas nomeia a figura de linguagem, mas a que explica por que ela contribui para o efeito comunicativo de uma mensagem situada.",
        "steps": [
          "Reconheça escolhas expressivas que valorizam a forma da mensagem.",
          "Relacione palavras, imagens, tipografia e organização à finalidade principal.",
          "Mostre como uma função pode reforçar outra sem confundir predominância."
        ],
        "example": "Um cartaz traz “Re-pense. Re-use. Re-crie.” em letras repetidas e ritmo marcado, ao lado de uma instrução de reciclagem. A repetição explora a função poética, enquanto a chamada à ação mantém forte função conativa.",
        "pitfall": "Chamar todo uso de repetição de função emotiva ou ignorar a finalidade pública de um cartaz por causa do efeito estético."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na frase “Por favor, desligue a luz ao sair da sala”, qual função predomina?",
        "options": [
          "Referencial",
          "Metalinguística",
          "Conativa",
          "Poética"
        ],
        "correctIndex": 2,
        "hint": "Observe a forma verbal usada para dirigir um pedido ao leitor.",
        "solution": "C é correta: “desligue” é imperativo destinado a orientar a conduta do interlocutor. Não há definição do código nem predomínio da elaboração estética."
      },
      {
        "level": "intermediate",
        "prompt": "Ao afirmar “O verbo pode variar em tempo, modo e pessoa”, um livro de gramática enfatiza qual função?",
        "options": [
          "Fática",
          "Metalinguística",
          "Emotiva",
          "Conativa"
        ],
        "correctIndex": 1,
        "hint": "O texto fala da própria linguagem e de suas categorias.",
        "solution": "B é correta: a mensagem utiliza a língua para explicar uma propriedade da língua. A função referencial também existe como transmissão de informação, mas o destaque é a explicação do código."
      },
      {
        "level": "advanced",
        "prompt": "Um slogan repete sons e palavras de forma ritmada para ser lembrado. Que função ganha relevo por esse recurso?",
        "options": [
          "Poética",
          "Fática",
          "Referencial",
          "Emotiva"
        ],
        "correctIndex": 0,
        "hint": "Considere qual aspecto da mensagem se torna objeto de atenção: seu conteúdo, canal ou construção.",
        "solution": "A é correta: ritmo e repetição trabalham a forma da mensagem, destacando a função poética. Uma intenção persuasiva pode coexistir, mas não é o recurso perguntado."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Imunologia e vacinas",
    "objective": "Explicar imunidade inata e adaptativa, funcionamento das vacinas e proteção coletiva, distinguindo prevenção de tratamento.",
    "prerequisites": [
      "Estrutura básica de células e proteínas",
      "Noções de vírus e bactérias",
      "Introdução a tecidos e sistema circulatório"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Barreiras e imunidade inata",
        "explanation": "O organismo dispõe de defesas que começam antes do contato com anticorpos específicos. Pele íntegra, muco, cílios das vias respiratórias, secreções e condições químicas de certas superfícies reduzem a entrada de agentes infecciosos. Se um microrganismo ultrapassa essas barreiras, mecanismos inatos respondem rapidamente. Células como neutrófilos e macrófagos podem reconhecer padrões comuns a diferentes invasores, realizar fagocitose e produzir sinais químicos que coordenam a inflamação. Vermelhidão, calor, dor e inchaço podem decorrer do aumento do fluxo sanguíneo e da mobilização de células de defesa, mas a inflamação nem sempre significa infecção. O sistema complemento, constituído por proteínas circulantes, também contribui para a defesa e a sinalização. A imunidade inata não depende de ter encontrado exatamente aquele microrganismo antes, embora sua atividade possa ser modulada por experiências anteriores. Febre é uma resposta sistêmica que pode ocorrer em infecções, mas não identifica sozinha seu agente nem substitui avaliação clínica. Em provas, diferencie os componentes físicos, químicos e celulares da defesa. A barreira cutânea não “produz anticorpos para todo vírus”, e os fagócitos não substituem a resposta adaptativa: as duas linhas de defesa se comunicam e se complementam.",
        "steps": [
          "Identifique porta de entrada e barreiras presentes no tecido.",
          "Descreva fagocitose, sinais inflamatórios e recrutamento celular.",
          "Diferencie reconhecimento geral e reconhecimento específico do antígeno."
        ],
        "example": "Uma farpa introduz material estranho sob a pele. Células locais liberam mediadores, o fluxo sanguíneo aumenta e fagócitos chegam à região. Essa reação inicial é típica da imunidade inata, antes da produção de uma resposta específica.",
        "pitfall": "Confundir inflamação com a presença obrigatória de bactéria ou supor que anticorpos constituem a primeira barreira física de defesa."
      },
      {
        "level": "intermediate",
        "title": "Antígenos, linfócitos e memória adaptativa",
        "explanation": "A resposta adaptativa envolve receptores capazes de reconhecer antígenos específicos. Linfócitos B podem diferenciar-se em plasmócitos que secretam anticorpos; estes reconhecem estruturas determinadas e podem neutralizar partículas ou facilitar sua eliminação. Linfócitos T auxiliares coordenam respostas e T citotóxicos podem destruir células infectadas, especialmente em certas infecções virais. As células apresentadoras de antígeno participam da ativação e conectam respostas inatas à adaptação. Após uma primeira exposição, populações de células de memória podem persistir, possibilitando resposta mais rápida e eficaz em contatos posteriores. Essa memória varia entre agentes, formas de exposição, idade e condições imunológicas; não se deve supor proteção absoluta ou vitalícia para qualquer doença. Imunidade ativa ocorre quando o organismo monta sua própria resposta a antígenos, seja por infecção, seja por vacinação. Imunidade passiva ocorre ao receber anticorpos prontos, como os maternos transferidos ao bebê ou determinados soros, e tende a oferecer proteção mais imediata, porém limitada no tempo. A especificidade permite entender por que uma resposta contra um antígeno não equivale a proteção universal contra patógenos diferentes. Em exercícios, use o tempo da resposta e a origem dos anticorpos como critérios principais para distinguir os mecanismos.",
        "steps": [
          "Associe antígeno específico ao reconhecimento por linfócitos.",
          "Relacione plasmócitos, anticorpos e linfócitos T às diferentes funções.",
          "Distinga memória adaptativa, proteção ativa e recebimento passivo de anticorpos."
        ],
        "example": "Uma pessoa recebe soro com anticorpos específicos após uma exposição de risco. Ela recebe moléculas prontas e, por isso, o mecanismo é passivo. A vacinação, em contraste, busca induzir resposta ativa e memória.",
        "pitfall": "Afirmar que soros e vacinas são equivalentes porque ambos envolvem moléculas ligadas à imunidade."
      },
      {
        "level": "advanced",
        "title": "Vacinação, esquemas e proteção coletiva",
        "explanation": "Vacinas apresentam ao sistema imune antígenos ou instruções para produzi-los de modo controlado, visando induzir resposta e memória sem exigir a doença natural. Existem plataformas distintas: agentes inativados, componentes proteicos, vetores e materiais genéticos, entre outras. As respostas diferem entre vacinas e indivíduos, e doses de reforço podem ser necessárias para ampliar ou recuperar proteção. Vacinar não significa garantir que nenhuma infecção ocorrerá; o objetivo e a eficácia precisam ser avaliados para cada produto e desfecho, como infecção, doença sintomática ou formas graves. Quando uma parcela suficientemente grande de uma população está protegida contra um agente transmissível, a circulação desse agente pode diminuir, beneficiando também pessoas não imunizadas. O limiar necessário depende de contagiosidade, eficácia, duração da proteção e padrões de contato; não existe porcentagem única que sirva a todas as doenças. Nem todo patógeno permite proteção coletiva relevante apenas por vacinação. A interpretação de gráficos de campanhas exige diferenciar cobertura vacinal de incidência e evitar concluir causalidade sem considerar outros fatores. Ao tratar de informação sanitária, use fontes oficiais e atualizadas: calendários e recomendações específicas podem mudar. O estudo aqui descreve princípios biológicos, não uma prescrição individual de vacinação.",
        "steps": [
          "Reconheça vacina como estímulo à imunidade ativa, não como antibiótico.",
          "Interprete proteção individual e coletiva com atenção a eficácia e transmissão.",
          "Distinga cobertura vacinal, incidência da doença e necessidade de esquemas específicos."
        ],
        "example": "Em um município, a cobertura de uma vacina eficaz contra determinada doença transmissível aumenta. A transmissão pode cair porque há menos pessoas suscetíveis, mas o resultado depende de contato, eficácia e agente; não se pode afirmar eliminação garantida da doença.",
        "pitfall": "Tratar vacinas como cura de infecções já instaladas ou prometer imunidade total e permanente para qualquer vacina."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual componente é característico da resposta imune inata inicial a um ferimento contaminado?",
        "options": [
          "Macrófagos recrutados e inflamação",
          "Plasmócitos específicos já produzidos pelo ferimento",
          "Memória exclusiva adquirida no mesmo instante",
          "Anticorpos transferidos por um soro"
        ],
        "correctIndex": 0,
        "hint": "Pense nas células e mecanismos que respondem antes da ativação clonal específica.",
        "solution": "A é correta: fagócitos e mediadores inflamatórios fazem parte da defesa inata inicial. Plasmócitos e memória específica pertencem à resposta adaptativa; soro é imunidade passiva."
      },
      {
        "level": "intermediate",
        "prompt": "Uma pessoa recebe anticorpos prontos após exposição a uma toxina. Qual classificação descreve a proteção?",
        "options": [
          "Ativa natural com memória duradoura",
          "Ativa artificial por vacinação",
          "Inata inespecífica",
          "Passiva por transferência de anticorpos"
        ],
        "correctIndex": 3,
        "hint": "A pessoa produziu os anticorpos ou recebeu as moléculas já fabricadas?",
        "solution": "D é correta: anticorpos prontos caracterizam imunização passiva. A proteção pode ser rápida, mas não equivale à produção de memória ativa induzida por vacina."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação sobre proteção coletiva por vacinação é cientificamente adequada?",
        "options": [
          "Toda vacina impede 100% das infecções",
          "O efeito depende do agente, eficácia e padrões de contato",
          "A mesma taxa de cobertura elimina qualquer patógeno",
          "Vacinas agem como antibióticos após o início da doença"
        ],
        "correctIndex": 1,
        "hint": "Não existe limiar universal de proteção para todas as doenças.",
        "solution": "B é correta: a redução da transmissão depende de características do patógeno, da vacina e dos contatos. As demais alternativas afirmam garantias universais ou confundem prevenção com tratamento."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Orientação, coordenadas e cartografia",
    "objective": "Localizar pontos com latitude e longitude, interpretar orientação e escalas, e avaliar efeitos de projeções e escolhas cartográficas.",
    "prerequisites": [
      "Pontos cardeais e geometria elementar",
      "Frações e razão",
      "Noções de globo terrestre e fusos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Orientação e coordenadas geográficas",
        "explanation": "Para localizar um ponto na Terra, a cartografia usa referências convencionadas. A orientação cardinal distingue norte, sul, leste e oeste; a rosa dos ventos acrescenta direções intermediárias. É importante não confundir direção no mapa com direção física sem consultar a seta do norte: mapas podem ser desenhados com diferentes orientações. A rede geográfica utiliza paralelos e meridianos imaginários. Latitude mede o afastamento angular em relação ao Equador, variando de 0° a 90° norte ou sul. Longitude mede a posição angular em relação ao meridiano de Greenwich, de 0° a 180° leste ou oeste. Assim, 23°S, 46°O descreve uma posição no hemisfério sul e a oeste de Greenwich, sem informar sua altitude. Dois locais podem compartilhar latitude e diferir muito de clima, pois correntes marítimas, altitude e continentalidade também atuam. Para leitura de cartas, identifique se os números estão em graus decimais ou graus, minutos e segundos. Um grau é dividido em 60 minutos e cada minuto em 60 segundos; 20°30' representa 20,5°, e não 20,30°. Coordenadas não são uma ferramenta de distância linear direta: o comprimento de um grau de longitude varia com a latitude. A precisão da localização depende também de escala e sistema de referência.",
        "steps": [
          "Verifique o norte indicado e identifique a rede de paralelos e meridianos.",
          "Leia primeiro a latitude (N/S), depois a longitude (L/O).",
          "Interprete a notação angular e não confunda latitude com altitude."
        ],
        "example": "O ponto A está em 15°S, 45°O. Ele está ao sul do Equador e a oeste de Greenwich. Um ponto B em 15°N, 45°O tem longitude igual, mas fica no hemisfério norte.",
        "pitfall": "Ler 30°O como latitude ou tratar Greenwich como o paralelo que separa norte e sul."
      },
      {
        "level": "intermediate",
        "title": "Escala cartográfica e projeções",
        "explanation": "A escala é a relação entre uma distância representada e a correspondente no terreno. Na escala numérica 1:100 000, 1 cm no papel corresponde a 100 000 cm na realidade, ou 1 km. Se dois pontos distam 4,5 cm no mapa, a separação aproximada é 4,5 km, desde que a medição respeite a projeção e o contexto da carta. Escala grande significa denominador pequeno e maior detalhamento, como 1:10 000, útil em ruas; escala pequena significa denominador grande e maior área representada, como 1:10 000 000. A escala gráfica permanece utilizável quando a imagem é ampliada ou reduzida uniformemente, porque a barra sofre a mesma transformação; a escala numérica impressa pode deixar de corresponder ao tamanho após essa reprodução. Projetar uma superfície aproximadamente esférica em um plano exige deformações de área, ângulo, distância ou direção. Projeções conformes preservam ângulos localmente, mas não áreas globais; equivalentes conservam áreas relativas, mas deformam formas. A projeção de Mercator amplia as dimensões visuais de regiões em latitudes elevadas. Não há mapa plano perfeito para todos os fins; avalie qual propriedade interessa à tarefa. Legenda, orientação e convenções importam tanto quanto a projeção.",
        "steps": [
          "Converta a escala para unidades compatíveis antes de calcular.",
          "Distinga escala grande (detalhada) de escala pequena (abrangente).",
          "Avalie quais propriedades a projeção preserva e quais distorce."
        ],
        "example": "Na escala 1:250 000, 3 cm medidos no mapa representam 750 000 cm, ou 7,5 km. O cálculo envolve 3×250000 e a divisão por 100000 para converter centímetros em quilômetros.",
        "pitfall": "Dizer que 1:1 000 000 é escala maior que 1:10 000 ou comparar áreas de mapas sem considerar a projeção."
      },
      {
        "level": "advanced",
        "title": "Mapas temáticos, localização e leitura crítica",
        "explanation": "Mapas temáticos apresentam fenômenos específicos, como distribuição de renda, chuva, biomas ou densidade demográfica. A legenda estabelece o significado de cores, padrões e símbolos; sem ela, a inferência é frágil. Um mapa coroplético colore áreas administrativas conforme classes numéricas. Se usa valores absolutos de população, regiões maiores ou mais populosas podem parecer mais importantes, mesmo quando a intensidade por habitante é menor. Por isso, taxas e indicadores padronizados costumam ser mais apropriados para comparar territórios de tamanhos diferentes. As classes escolhidas também influenciam a percepção: intervalos iguais, quantis e limiares substantivos podem destacar padrões distintos sem que nenhum número tenha sido alterado. Mapas de pontos localizam ocorrências, mas sua precisão pode ser limitada ou generalizada por privacidade. Para pensar criticamente, verifique a data, a fonte, a escala, o recorte territorial e o método de classificação. Um mapa que retrata a temperatura média de cinco décadas não serve, sozinho, para prever a máxima da próxima semana. Também é necessário distinguir correlação espacial de causalidade: áreas urbanas mais quentes podem ter diversos fatores associados, como pavimentação, relevo e cobertura vegetal. O mapa é uma representação construída para uma pergunta, não uma fotografia neutra do território.",
        "steps": [
          "Verifique fenômeno, período, fonte, legenda e unidade do indicador.",
          "Compare valores padronizados quando áreas ou populações diferem.",
          "Avalie efeito das classes, escala e projeção sobre a conclusão."
        ],
        "example": "Um mapa compara 100 ocorrências em um bairro de 1 000 moradores com 200 em outro de 10 000. As taxas são 100 e 20 por mil moradores, respectivamente: o bairro com menos ocorrências brutas apresenta maior intensidade relativa.",
        "pitfall": "Usar a cor mais escura como prova de maior risco individual quando o indicador representado é apenas um total absoluto."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um ponto está em 10°N e 70°O. Qual posição relativa está correta?",
        "options": [
          "Sul do Equador, leste de Greenwich",
          "Norte do Equador, oeste de Greenwich",
          "Norte do Equador, leste de Greenwich",
          "Sobre o Equador e Greenwich"
        ],
        "correctIndex": 1,
        "hint": "N e O descrevem hemisférios relativos a duas linhas de referência distintas.",
        "solution": "B é correta: latitude norte situa o ponto acima do Equador; longitude oeste situa-o a oeste de Greenwich. As coordenadas não informam altitude."
      },
      {
        "level": "intermediate",
        "prompt": "Em um mapa na escala 1:200 000, uma estrada mede 5 cm. Qual distância aproximada ela representa?",
        "options": [
          "1 km",
          "5 km",
          "10 km",
          "100 km"
        ],
        "correctIndex": 2,
        "hint": "Multiplique a medida pela escala e converta 100 000 cm em 1 km.",
        "solution": "C é correta: 5×200000=1 000 000 cm=10 km. A conversão exige dois passos e não depende da área do mapa."
      },
      {
        "level": "advanced",
        "prompt": "Uma representação temática colore municípios por total de casos de uma doença. Para comparar risco relativo entre municípios de populações distintas, o mais adequado é:",
        "options": [
          "Usar exclusivamente a cor do maior total",
          "Ignorar a população porque todos são municípios",
          "Comparar só a área desenhada de cada município",
          "Calcular taxas por população com a mesma definição de caso"
        ],
        "correctIndex": 3,
        "hint": "A mesma quantidade de casos pode representar riscos diferentes conforme o tamanho da população.",
        "solution": "D é correta: taxas padronizadas permitem comparação mais informativa. Totais, áreas ou cores sem denominadores podem induzir interpretações equivocadas."
      }
    ]
  }
];
const byTopic = new Map(authoredEnemDeepBatch01.map(spec => [spec.subject+'\\0'+spec.topic,spec] as const));

/** Only verified literal subject/title identity is eligible. No fuzzy match. */
export function deepEnemLesson(topic:CurriculumTopic):CourseLesson|null {
 const spec=byTopic.get(topic.subject+'\\0'+topic.topic);
 if(!spec||!topic.exams.includes('enem'))return null;
 return {
  kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,
  exams:[...topic.exams],objective:spec.objective,prerequisites:[...spec.prerequisites],
  sections:spec.sections,tasks:spec.tasks,videos:[],
  authorship:'Kognos — conteúdo original autoral; revisão pedagógica humana pendente',
  license:'Material preparatório autoral do Kognos; não oficial do ENEM nem homologado pelo Inep',
  sourceUrls:[...new Set(topic.exams.map(exam=>examBlueprints[exam].sourceUrl).filter(url=>url.startsWith('https://')))],
  review:'introductory',syllabusScope:'Orientação editorial Kognos sobre '+spec.topic+'; conferir competências e habilidades na matriz Inep.'
 };
}
