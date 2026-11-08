import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original language, philosophy and social studies modules. */
export const provaoDepthBatch02LanguagesSociety:readonly DeepTopicSpec[]=[
  {
    "subject": "Português",
    "topicStart": "Figuras de Linguagem",
    "objective": "Distinguir figuras semânticas, sintáticas e sonoras, explicar efeitos de metáfora, metonímia, comparação, ironia, hipérbole e antítese e interpretar recursos expressivos em textos de gêneros diferentes.",
    "prerequisites": [
      "Sentido literal e figurado",
      "Contexto e enunciador",
      "Leitura de gêneros textuais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Sentido figurado depende do contexto",
        "explanation": "As figuras de linguagem são recursos expressivos que modificam a forma habitual de apresentar uma ideia ou explorar relações entre palavras. Não funcionam como um código com resposta única fora do contexto: é necessário analisar quem fala, para quem, com que finalidade e em qual gênero. Uma metáfora aproxima campos de sentido sem apresentar uma comparação explícita, como “a memória é um arquivo”, expressão que não afirma literalmente que a mente seja um equipamento.\n\nA comparação explícita pode utilizar “como”, “tal qual” e outras formas equivalentes: “o tempo passou como um raio”. Metonímia ocorre quando um termo substitui outro por relação de contiguidade, autoria, parte-todo ou associação contextual; “li Machado de Assis” costuma significar ler obras do autor, não a pessoa. Esses recursos podem aparecer em poemas, notícias, propaganda, debates e conversas.\n\nPara distinguir recursos, identifique se há aproximação semântica por semelhança ou substituição por associação real. Um mesmo trecho pode produzir mais de um efeito expressivo, mas a resposta precisa ter evidência linguística. Reconhecer figura não basta: explique qual sentido constrói e por que esse efeito é adequado ao texto.",
        "example": "No anúncio fictício “A cidade acordou cedo”, o município não é um corpo humano que desperta. O verbo “acordou” atribui comportamento humano a uma coletividade ou espaço e pode sugerir movimentação de habitantes. Interpretar o efeito depende da notícia e do contexto.",
        "pitfall": "Não classifique qualquer frase com “como” automaticamente como comparação poética; o termo pode introduzir outras relações sintáticas. Identifique o sentido e a função no enunciado.",
        "steps": [
          "Localize a expressão cujo sentido não é apenas literal.",
          "Explique a relação entre palavras ou campos de significado.",
          "Conecte a escolha expressiva ao propósito do gênero textual."
        ]
      },
      {
        "level": "intermediate",
        "title": "Ironia, antítese, hipérbole e personificação",
        "explanation": "A ironia ocorre quando o enunciado, em contexto, produz sentido avaliativo diferente ou contrário ao seu conteúdo literal. Ao dizer “que ótimo!” diante de uma situação evidentemente frustrante, o falante pode manifestar crítica. Não existe ironia apenas porque há uma palavra positiva: entonação, situação e pistas discursivas são fundamentais para interpretá-la.\n\nA hipérbole intensifica uma ideia por exagero, como “esperei mil anos”, sem declarar duração real. A antítese aproxima ideias opostas para salientar contraste, como “alegria e tristeza conviviam”; já o paradoxo coloca em relação termos aparentemente incompatíveis num mesmo raciocínio. Personificação ou prosopopeia atribui propriedades humanas a seres não humanos ou objetos, como “o vento sussurrava”. Essas distinções requerem leitura atenta e não memorização de palavras soltas.\n\nUma notícia pode empregar ironia em título opinativo e uma propaganda pode usar hipérbole para persuadir. Em questões objetivas, o gabarito deve considerar trecho, intenção e efeito, sem tratar a figura como recurso necessariamente enganoso ou erro gramatical.",
        "example": "Considere “Depois de esperar duas horas pelo ônibus, Ana disse: ‘Serviço maravilhoso!’”. A situação de demora e a avaliação negativa implícita tornam plausível a ironia. Se uma pessoa dissesse a mesma frase após atendimento excelente, não haveria razão para marcar ironia.",
        "pitfall": "Não confunda antítese, que opõe ideias, com qualquer expressão contendo negação. Também não identifique ironia ignorando contexto e intenção comunicativa.",
        "steps": [
          "Leia a situação completa e anote pistas de avaliação do enunciador.",
          "Diferencie exagero, contraste, incompatibilidade aparente e humanização.",
          "Justifique a figura com elementos textuais observáveis."
        ]
      },
      {
        "level": "advanced",
        "title": "Figuras combinadas e análise crítica dos efeitos",
        "explanation": "Recursos expressivos podem se combinar. Em “a cidade chorou rios de saudade”, há atribuição de comportamento humano à cidade e intensificação hiperbólica; conforme o contexto, outros efeitos podem ser discutidos. A classificação de um único recurso não esgota a leitura. Em literatura, imagens figuradas constroem atmosfera, narrador e perspectivas; em publicidade, podem favorecer memorização e associação emocional.\n\nAliteração é repetição expressiva de sons consonantais, enquanto assonância envolve sons vocálicos. Onomatopeia procura imitar certos sons por recursos linguísticos, mas depende de convenções da língua. Esses recursos não precisam estar presentes em todo texto poético; podem também ocorrer em slogans e narrativas. Uma leitura que ignore o ritmo sonoro perde elementos significativos da construção do sentido.\n\nUma análise bem fundamentada identifica a expressão, distingue a leitura literal da figurada, classifica a estratégia quando possível e discute seu impacto no tema e no interlocutor. Evite transformar interpretação em opinião solta: em perguntas de prova, é necessário indicar o trecho que sustenta o efeito alegado.",
        "example": "Um slogan original diz: “Seu futuro não cabe em uma gaveta”. A frase não afirma uma impossibilidade física sobre objetos: utiliza imagem metafórica para sugerir que oportunidades e escolhas excedem classificações rígidas. A análise depende da proposta publicitária e do público.",
        "pitfall": "Uma metáfora não torna automaticamente uma afirmação verdadeira nem prova que uma empresa cumpre a promessa expressa em propaganda. É preciso separar efeito retórico de evidência factual.",
        "steps": [
          "Identifique trechos de sentido figurado e o efeito no leitor.",
          "Diferencie recursos semânticos, sonoros e sintáticos quando presentes.",
          "Relacione a escolha expressiva ao propósito sem tratar persuasão como prova."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em “Li Machado de Assis durante as férias”, a expressão pode exemplificar:",
        "options": [
          "Metonímia: autor no lugar de sua obra.",
          "Hipérbole que duplica a leitura.",
          "Antítese entre escritor e livro.",
          "Onomatopeia de páginas."
        ],
        "correctIndex": 0,
        "hint": "A pessoa é usada como referência aos livros que escreveu.",
        "solution": "A alternativa A está correta: o nome do autor substitui obras relacionadas a ele, por associação de autoria. As outras figuras não descrevem o mecanismo presente no enunciado."
      },
      {
        "level": "intermediate",
        "prompt": "Após perder o ônibus, alguém afirma: “Excelente pontualidade!”. No contexto, o principal recurso é:",
        "options": [
          "Comparação.",
          "Personificação.",
          "Ironia.",
          "Assonância."
        ],
        "correctIndex": 2,
        "hint": "A fala literal positiva contrasta com a experiência negativa.",
        "solution": "A alternativa C é correta: a avaliação positiva é usada de modo crítico, em contraste com o atraso observado. As outras opções não explicam a discrepância entre palavras e contexto."
      },
      {
        "level": "advanced",
        "prompt": "No slogan “Seu futuro não cabe em uma gaveta”, qual interpretação é mais sustentada?",
        "options": [
          "A frase é instrução literal para guardar documentos.",
          "Há metáfora sugerindo que possibilidades não devem ser limitadas a categorias rígidas.",
          "A frase afirma cientificamente o tamanho físico do futuro.",
          "Há apenas uma datação histórica sem efeito figurado."
        ],
        "correctIndex": 1,
        "hint": "Interprete a imagem da gaveta em relação à ideia abstrata de futuro.",
        "solution": "A alternativa B está correta: a imagem espacial funciona como metáfora de limitações impostas a escolhas. As outras leituras tomam literalmente a expressão ou ignoram seu efeito persuasivo."
      }
    ]
  },
  {
    "subject": "Português",
    "topicStart": "Regência nominal e regência verbal",
    "objective": "Identificar exigências de complementos e preposições ligadas a verbos e nomes, distinguir transitividade e mudança de sentido, analisar crase quando aplicável e respeitar contexto e registro.",
    "prerequisites": [
      "Predicação verbal",
      "Preposições e artigos",
      "Funções sintáticas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Regência: a relação de um núcleo com seu complemento",
        "explanation": "Regência é a relação sintático-semântica pela qual um verbo ou um nome se liga a complementos, frequentemente com exigência de preposição. Em “gostar de música”, a preposição “de” introduz complemento pedido pelo verbo no uso apresentado. Em “necessidade de descanso”, a relação depende do substantivo “necessidade”, caracterizando regência nominal. Identificar o núcleo da relação é o primeiro passo.\n\nUm mesmo verbo pode assumir sentidos e regências diferentes: “assistir ao filme”, no sentido de ver, costuma ser construído com “a” na norma-padrão tradicional; “assistir o paciente”, no sentido de prestar assistência, pode ser transitivo direto. A análise depende de sentido, variedade linguística e registro exigido pela questão. Não basta decorar uma lista de verbos com uma única preposição para todos os usos.\n\nA forma de um complemento também depende do artigo e do contexto. Em “gosto da música”, temos a combinação de preposição de e artigo a. Em “preciso de música”, pode não haver artigo definido. Regência é diferente de concordância: concordância envolve flexões de gênero, número e pessoa, enquanto regência trata da forma de ligação entre termos.",
        "example": "Compare “Ela precisava de ajuda” com “Ela encontrou ajuda”. O verbo precisar, nesse sentido, pede complemento introduzido por de; encontrar é usado diretamente. Trocar a construção sem analisar o verbo produz estruturas que podem divergir da norma-padrão.",
        "pitfall": "Não conclua que todo complemento preposicionado é objeto indireto sem identificar a construção. Preposições podem introduzir adjuntos e outras relações sintáticas, além de complementos.",
        "steps": [
          "Localize o verbo ou nome central e interprete seu sentido.",
          "Verifique se há complemento exigido e qual preposição o introduz.",
          "Diferencie a regência de flexões de concordância."
        ]
      },
      {
        "level": "intermediate",
        "title": "Verbos com sentidos e regências distintos",
        "explanation": "Verbos como aspirar, visar, implicar e assistir podem variar de construção conforme o sentido. “Aspirar o perfume” significa sorver ou respirar; “aspirar ao cargo” pode significar desejar. “Visar ao sucesso”, no sentido de ter como objetivo, é tradição de regência ensinada na norma-padrão escolar, embora usos reais variem conforme região e registro. Para resolver questões, considere tanto a estrutura do enunciado quanto a norma solicitada.\n\nO verbo preferir costuma estabelecer comparação direta em construções como “prefiro chá a café”, em vez de “prefiro mais chá do que café” quando se exige a formulação tradicional da norma-padrão. Já “obedecer às regras” usa preposição a e, quando há artigo feminino plural, ocorre a fusão indicada por crase. A presença da crase decorre de regência e artigo, não de simples ocorrência de palavra feminina.\n\nNo português brasileiro, usos variam ao longo do tempo, e a descrição de variedades não se confunde com prescrição escolar. Uma questão de reescrita segundo a norma-padrão precisa ser resolvida conforme essa finalidade. É importante reconhecer contextos em que duas estruturas podem aparecer e saber justificar o critério aplicado, em vez de atribuir erro intelectual a falantes de outras variedades.",
        "example": "Compare “A criança aspirou o perfume” e “Ela aspira ao cargo”. No primeiro caso o verbo indica respirar algo, com objeto direto; no segundo significa desejar, com preposição a na norma-padrão. A mudança de sentido explica a mudança de regência.",
        "pitfall": "Não decore que “aspirar sempre exige a preposição a” ou que toda regência é invariável. O sentido e a variedade são decisivos, especialmente em usos contemporâneos.",
        "steps": [
          "Identifique o significado do verbo no contexto da frase.",
          "Compare as construções aceitas no registro pedido.",
          "Justifique o uso ou ausência de preposição e artigo."
        ]
      },
      {
        "level": "advanced",
        "title": "Crase e análise do contexto sintático",
        "explanation": "O acento grave em à representa, em numerosos casos, a fusão da preposição a exigida por um termo regente com o artigo feminino a, ou com certos demonstrativos. Em “obedeceu à professora”, o verbo requer a, e o substantivo feminino admite artigo a. Em “obedeceu a regras”, a ausência de artigo específico pode impedir a fusão, conforme a construção. A crase não ocorre só porque a palavra seguinte é feminina.\n\nPara reconhecer a estrutura, identifique se a preposição é necessária e se existe artigo. Um teste útil em casos simples é substituir o substantivo feminino por masculino correspondente: se aparece “ao”, é plausível que no feminino haja “à”, mas o teste não resolve sozinho todas as construções. Há locuções, nomes próprios e situações de uso facultativo que exigem atenção especial.\n\nRegência pode afetar precisão de sentido. Em “o relatório de que necessitamos”, o relativo se liga ao verbo necessitar, que exige de; escrever “o relatório que necessitamos” não segue a construção tradicional estudada. Em textos longos, localizar o termo regente mesmo quando está distante do complemento permite revisar adequadamente relações sintáticas sem trocar palavras arbitrariamente.",
        "example": "Analise “O projeto a que nos referimos foi aprovado”. O verbo referir-se rege a, então o relativo que aparece precedido por a: “a que”. Se o complemento fosse substantivo feminino com artigo, como “a proposta à qual nos referimos”, há fusão de preposição e artigo ou pronome adequado à construção.",
        "pitfall": "Não aplique crase diante de todo substantivo feminino ou depois de qualquer verbo. Ela depende de relações gramaticais específicas e do registro adotado, e nem sempre ocorre em frases preposicionadas.",
        "steps": [
          "Identifique primeiro a exigência de preposição do verbo ou nome.",
          "Verifique se o termo seguinte admite artigo a ou forma demonstrativa apropriada.",
          "Revise a construção inteira, incluindo relativos e distância entre núcleo e complemento."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual frase demonstra corretamente regência nominal com preposição?",
        "options": [
          "Ela tem necessidade de descanso.",
          "Ela encontrou o descanso.",
          "Os colegas estudaram bastante.",
          "Ele correu no parque."
        ],
        "correctIndex": 0,
        "hint": "Procure um nome que exija complemento preposicionado.",
        "solution": "A alternativa A contém substantivo “necessidade” seguido de complemento introduzido por “de”. As outras têm construções verbais ou adjuntos, não a relação nominal específica solicitada."
      },
      {
        "level": "intermediate",
        "prompt": "Segundo a norma-padrão escolar, qual frase usa aspirar no sentido de desejar?",
        "options": [
          "Ela aspirou ao perfume da flor.",
          "Ela aspirava o cargo de diretora.",
          "Ela aspirava ao cargo de diretora.",
          "Ela aspirou a poeira do chão."
        ],
        "correctIndex": 2,
        "hint": "Diferencie respirar de desejar.",
        "solution": "A alternativa C está correta na norma-padrão: aspirar ao cargo indica desejar. B omite a preposição tradicional desse sentido; A e D apresentam contextos de respirar ou sorver, com outra estrutura."
      },
      {
        "level": "advanced",
        "prompt": "Em “O estudante obedeceu ___ regras do laboratório”, com artigo definido plural, qual preenchimento é adequado?",
        "options": [
          "a",
          "as",
          "à",
          "às"
        ],
        "correctIndex": 3,
        "hint": "O verbo pede preposição a e o artigo plural é as.",
        "solution": "A alternativa D está correta: obedecer exige a e “regras” aparece com artigo as, formando às. As outras opções omitem elemento da fusão ou usam número inadequado."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topicStart": "Compreensão da relação entre conteúdos de diferentes textos",
    "objective": "Comparar informações e perspectivas em textos ingleses, identificar concordâncias, contradições, fontes, datas e relação entre imagem, legenda e conteúdo verbal.",
    "prerequisites": [
      "Skimming e scanning",
      "Vocabulário contextual",
      "Marcadores de contraste"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Comparar textos exige encontrar as ideias centrais",
        "explanation": "A leitura comparativa em inglês procura relações entre dois ou mais textos sobre mesmo assunto. Primeiro faça skimming para identificar tema, gênero, autor, propósito e público de cada material. Depois use scanning para localizar dados específicos. Perguntas podem pedir pontos de acordo, oposição ou complementaridade: two texts may discuss climate policy, but one emphasizes costs and the other presents benefits.\n\nUma diferença importante é entre factual claim, opinião e interpretação. Textos com números não são automaticamente verdadeiros se omitirem fonte, data ou metodologia. Notícias, cartas, infográficos e anúncios podem organizar informações de maneiras diferentes. A pergunta costuma indicar se deseja comparação de ideias explícitas ou inferência sustentada.\n\nMarcadores de sentido ajudam a reconhecer relação: however indica contraste, in addition acrescenta argumento, therefore introduz conclusão e according to atribui informação a uma fonte. Ler essas expressões em seu contexto impede interpretar como discordância o que é apenas acréscimo.",
        "example": "Texto A: “The city expanded bike lanes to reduce traffic.” Texto B: “New bike lanes improved access, but some residents worry about parking.” Ambos tratam de ciclovias; B acrescenta uma preocupação ausente de A. Não se pode afirmar que B nega a expansão.",
        "pitfall": "Não conclua que textos diferentes se contradizem apenas porque destacam aspectos distintos. Eles podem ser complementares e adotar perspectivas distintas sem discordar dos fatos apresentados.",
        "steps": [
          "Identifique gênero, autor, público e objetivo em cada texto.",
          "Localize a ideia central e evidências relevantes.",
          "Classifique relação como concordância, contraste ou complemento."
        ]
      },
      {
        "level": "intermediate",
        "title": "Contraste, inferência e confiabilidade da fonte",
        "explanation": "Duas fontes podem utilizar expressões diferentes para descrever o mesmo fenômeno. Recognize paraphrases: “rose” pode corresponder a “increased”; “despite” sinaliza oposição entre expectativa e resultado. Para comparar, não basta alinhar palavras semelhantes: identifique referentes, períodos e grandezas. “Sales increased in March” e “Sales decreased in April” podem ser verdadeiros simultaneamente porque falam de meses diferentes.\n\nA confiabilidade de um texto depende de autoria, evidências, método, atualização e possíveis interesses, não só de uma linguagem formal. Em uma análise de anúncio publicitário, promessas são parte de persuasão; em relatório, valores precisam de unidade e contexto. Um gráfico pode representar porcentagem enquanto a legenda textual apresenta números absolutos: eles respondem a perguntas diferentes.\n\nInferir uma relação exige explicitar a evidência. Se um texto informa “More people cycle after new lanes” e outro “Traffic remains heavy at rush hour”, não se prova que as ciclovias falharam. A comparação pode mostrar melhoria de um indicador com persistência de outro problema.",
        "example": "Texto A informa que 40% dos alunos usam ônibus; texto B informa que 120 estudantes de uma escola o utilizam. Sem saber o total de alunos da escola B, não é possível concluir que o uso de ônibus é maior ou menor do que no texto A.",
        "pitfall": "Não compare porcentagens e quantidades absolutas diretamente sem verificar bases. Também não transforme uma expressão de preocupação em evidência de que um evento necessariamente ocorreu.",
        "steps": [
          "Compare o período, unidade, base e referente de cada dado.",
          "Procure paráfrases e conectivos que indiquem relação semântica.",
          "Justifique conclusões com informação explícita ou inferência delimitada."
        ]
      },
      {
        "level": "advanced",
        "title": "Texto, imagem e multimodalidade",
        "explanation": "Em questões multimodais, fotos, mapas, charges e gráficos não funcionam como decoração: fornecem informações que podem reforçar, contrastar ou questionar o texto verbal. A imagem pode representar período ou local diferente daquele mencionado na manchete; a legenda ajuda a estabelecer contexto. Compare não só o que aparece, mas quem selecionou e organizou os elementos.\n\nA leitura crítica precisa distinguir descrição e julgamento. Uma charge pode usar ironia e metáfora visual para criticar determinada política, sem descrever literalmente um fato. Um gráfico de linhas mostra tendência segundo seus eixos, mas não necessariamente explica causalidade. Quando uma matéria afirma que um evento provocou outro, verifique se o dado visual realmente demonstra relação causal ou apenas coincidência temporal.\n\nPara selecionar a alternativa correta, elimine opções com generalizações como always, never, everyone e only se os textos não fornecerem evidência para elas. Perguntas sobre propósito comunicativo podem exigir reconhecer intenção persuasiva, informativa ou crítica. O objetivo é articular evidências verbais e visuais sem importar suposições externas.",
        "example": "Uma reportagem escrita diz “Rainfall decreased by 10% this year”, e um gráfico mostra barras mensais de dois anos. Para conferir a afirmação, é necessário comparar totais anuais nas mesmas unidades; uma única barra de mês não demonstra o percentual global.",
        "pitfall": "Não interprete cores, tamanho de figuras ou imagens isoladas como prova sem conhecer legenda, escala e fonte. Uma representação visual seleciona informações e pode ocultar parte do contexto.",
        "steps": [
          "Verifique legendas, unidades, fonte e período de cada elemento visual.",
          "Compare o que o texto afirma com o que a imagem ou gráfico realmente mostra.",
          "Evite atribuir causalidade ou universalidade sem evidências presentes nos materiais."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Text A says a school opened a library. Text B says it opened a library and extended study hours. Their relation is mainly:",
        "options": [
          "Contradictory.",
          "Complementary.",
          "Unrelated.",
          "Exactly opposite."
        ],
        "correctIndex": 1,
        "hint": "One text adds information to the other.",
        "solution": "A alternativa B é correta: o segundo texto acrescenta informação compatível à abertura da biblioteca. Não há oposição explícita nem ausência de assunto comum."
      },
      {
        "level": "intermediate",
        "prompt": "Text A: “Sales increased in March.” Text B: “Sales decreased in April.” What follows?",
        "options": [
          "The sources must be false.",
          "Sales never changed.",
          "Both statements may be true because they refer to different months.",
          "The same month had opposite trends."
        ],
        "correctIndex": 2,
        "hint": "Note the time references.",
        "solution": "A alternativa C está correta: aumentos em março e quedas em abril podem ocorrer em momentos diferentes. As demais ignoram a indicação temporal das afirmações."
      },
      {
        "level": "advanced",
        "prompt": "A text claims a citywide annual decrease in rainfall, but a graph shows only one month. What is the best evaluation?",
        "options": [
          "The monthly graph alone does not confirm an annual citywide trend.",
          "The graph proves every month had the same change.",
          "Any rainfall graph demonstrates causation.",
          "The annual claim must always be true because it contains a percentage."
        ],
        "correctIndex": 0,
        "hint": "Check whether graph period and scale match the claim.",
        "solution": "A alternativa A é correta: um único mês não permite verificar o total anual de toda a cidade. As demais extrapolam informação limitada e confundem percentuais com comprovação de tendências."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topicStart": "Direitos Humanos",
    "objective": "Analisar fundamentos filosóficos, universalidade, dignidade, igualdade, direitos e obrigações, distinguir dimensões de direitos e examinar tensões entre princípios e sua efetivação histórica.",
    "prerequisites": [
      "Ética e política",
      "Norma e valor",
      "Cidadania"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Dignidade e direitos não são favores individuais",
        "explanation": "Direitos humanos são reivindicações normativas de proteção e liberdade reconhecidas em diferentes tradições jurídicas e filosóficas. A ideia de dignidade orienta muitos documentos contemporâneos ao reconhecer valor de cada pessoa independentemente de características, origem ou condição social. Isso não significa que todos os direitos sejam aplicados do mesmo modo em todas as sociedades ou que sua implementação esteja concluída.\n\nA Declaração Universal dos Direitos Humanos, adotada pela Assembleia Geral da ONU em 1948, reuniu princípios e direitos após experiências históricas de guerra e perseguição. Ela é uma declaração e não se confunde com todos os tratados posteriores nem produz automaticamente políticas públicas em cada país. Direitos são discutidos em relação a obrigações de Estados, instituições e, em alguns contextos, de outros agentes.\n\nA universalidade pretende que ninguém seja excluído da proteção por pertencer a determinado grupo. Igualdade jurídica exige considerar normas e práticas; situações históricas de discriminação mostram que proclamar igualdade e efetivá-la são tarefas distintas. A reflexão filosófica investiga fundamentos e consequências dessas afirmações, sem limitar-se à memorização de artigos.",
        "example": "Um município declara acesso igual a serviços, mas parte da população não consegue chegar a unidades de saúde por ausência de transporte. A norma afirma igualdade formal; a efetivação pode exigir medidas que removam obstáculos concretos. Esse contraste é tema filosófico e político.",
        "pitfall": "Não considere direitos humanos privilégios concedidos somente a quem pertence à maioria ou concorda com o governo. Universalidade aponta para proteção de todas as pessoas, inclusive dissidentes.",
        "steps": [
          "Defina dignidade, universalidade e igualdade em linguagem clara.",
          "Diferencie princípio declarado, obrigação institucional e implementação concreta.",
          "Examine quem se beneficia e quais barreiras persistem."
        ]
      },
      {
        "level": "intermediate",
        "title": "Liberdades, direitos sociais e conflitos de deveres",
        "explanation": "Direitos de liberdade e participação incluem proteção contra arbitrariedades, expressão e organização política; direitos sociais contemplam condições de vida como saúde, educação e proteção social. Essa classificação ajuda a estudar, mas não deve ser tratada como separação absoluta: a liberdade de participar do debate público pode depender de acesso efetivo à educação e comunicação.\n\nO exercício de direitos envolve responsabilidades públicas e limites definidos por normas, especialmente quando direitos de pessoas diferentes entram em tensão. Liberdade de expressão, por exemplo, não é justificativa automática para discriminação ou ameaça, e limitar falas exige critérios jurídicos e debate sobre proporcionalidade, finalidade legítima e proteção de direitos. A análise filosófica examina argumentos, não apenas escolhe um direito favorito.\n\nÉ possível comparar igualdade formal, que aplica regra de modo uniforme, e esforços de igualdade material, que consideram obstáculos desiguais para permitir acesso efetivo. O debate não se resolve dizendo que todos são idênticos. Pergunte se uma medida corrige barreira real, preserva autonomia e respeita direitos de outros grupos.",
        "example": "Uma escola oferece um único formato de prova, mas estudantes com diferentes necessidades de acesso podem requerer recursos adaptados. Garantir condições de participação pode exigir tratamentos procedimentais distintos sem negar igualdade de dignidade. A discussão deve avaliar critérios e evidências.",
        "pitfall": "Não reduza direitos sociais a favores opcionais nem liberdades civis a licenças ilimitadas. Direitos possuem fundamentos, instituições e relações com outras proteções.",
        "steps": [
          "Identifique quais direitos e agentes estão envolvidos no caso.",
          "Distingua conflito real de falsa oposição entre liberdade e igualdade.",
          "Justifique medidas pela proteção de direitos e por critérios proporcionais."
        ]
      },
      {
        "level": "advanced",
        "title": "Universalismo, pluralidade e responsabilidade institucional",
        "explanation": "A pretensão universal dos direitos humanos convive com diversidade cultural, histórica e política. A filosofia investiga se há fundamentos compartilháveis para proibir violência e arbitrariedade sem apagar identidades e formas de vida distintas. Relativismo descritivo, que reconhece práticas variadas, não implica aceitar moralmente qualquer prática; universalismo, por sua vez, não autoriza impor a cultura de um grupo como padrão de humanidade.\n\nA efetivação depende de instituições e mecanismos verificáveis: legislação, judiciário, políticas de acesso, fiscalização, organizações civis e participação social. Nenhum documento isolado garante automaticamente proteção. Para avaliar uma política, investigue se as pessoas afetadas podem acessar direitos, apresentar reclamações e obter reparação. Desigualdades persistentes tornam insuficiente examinar apenas a redação de uma norma.\n\nUma análise crítica pode comparar princípios de tratados, jurisprudência e práticas sociais, mas deve evitar citações de normas sem verificar texto e data. A pergunta central é como proteger dignidade em contextos de conflito real. Uma sociedade pode avançar na formulação normativa e ainda enfrentar violações graves, de modo que progresso jurídico e material não são equivalentes.",
        "example": "Um país adota norma contra discriminação e cria canal de denúncia, mas as queixas não são investigadas. A existência formal de regra e canal não demonstra efetivação: indicadores de acesso, apuração e reparação seriam necessários para avaliar a proteção.",
        "pitfall": "Não confunda universalidade dos direitos com uniformização cultural obrigatória. É necessário argumentar sobre dignidade, proteção de pessoas e participação, sem apagar diferenças sociais.",
        "steps": [
          "Compare fundamentos normativos e práticas institucionais concretas.",
          "Analise conflito de direitos com critérios de proporcionalidade e proteção.",
          "Examine evidências de acesso, fiscalização e reparação antes de concluir efetivação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual princípio central é associado à universalidade dos direitos humanos?",
        "options": [
          "Proteção restrita à maioria política.",
          "Proteção de todas as pessoas, independentemente de pertencimento a grupos.",
          "Direitos somente para cidadãos economicamente ativos.",
          "Direitos concedidos somente por governantes individuais."
        ],
        "correctIndex": 1,
        "hint": "A universalidade não permite exclusão por identidade ou condição social.",
        "solution": "A alternativa B está correta: universalidade pretende extensão de proteção a todas as pessoas. As demais vinculam direitos a condições arbitrárias e contrariam esse princípio."
      },
      {
        "level": "intermediate",
        "prompt": "Uma política de acesso igual ignora que parte da população não possui transporte ao serviço. O caso ilustra:",
        "options": [
          "Que igualdade formal sempre garante acesso real.",
          "Que direitos sociais são apenas preferências pessoais.",
          "A diferença entre norma formal e condições concretas de efetivação.",
          "Que não deve existir avaliação de políticas públicas."
        ],
        "correctIndex": 2,
        "hint": "Compare enunciado da regra e obstáculos vividos.",
        "solution": "A alternativa C é correta: tratamento formal idêntico pode não remover barreiras de acesso. A, B e D confundem reconhecimento de direitos com condições materiais de exercício."
      },
      {
        "level": "advanced",
        "prompt": "Uma lei antidiscriminação é publicada, mas denúncias não são apuradas. Qual conclusão é mais rigorosa?",
        "options": [
          "A efetivação ainda depende de fiscalização, acesso e reparação.",
          "A existência da lei comprova eliminação de todas as violações.",
          "Direitos deixaram de exigir qualquer responsabilidade institucional.",
          "A proteção universal é incompatível com mecanismos de apuração."
        ],
        "correctIndex": 0,
        "hint": "Uma norma é condição importante, mas sua aplicação precisa ser examinada.",
        "solution": "A alternativa A reconhece a diferença entre proteção formal e prática institucional. As outras concluem efetivação sem evidência ou descartam instrumentos de proteção necessários."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topicStart": "Movimentos sociais e novas formas de participação política",
    "objective": "Explicar ação coletiva, repertórios de mobilização, identidade e reivindicações, diferenciar movimentos de partidos e instituições e analisar efeitos de redes digitais na participação política.",
    "prerequisites": [
      "Cidadania e direitos",
      "Instituições políticas",
      "Desigualdade social"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "O que caracteriza um movimento social",
        "explanation": "Movimentos sociais são formas de ação coletiva em que grupos organizam demandas, identidades e práticas para transformar ou preservar aspectos da vida social. Podem reivindicar direitos, acesso a serviços, reconhecimento ou mudanças nas políticas públicas. Não se resumem a manifestações de rua: também incluem redes locais, associações, campanhas, formação política e negociação com instituições.\n\nUm movimento não é automaticamente um partido político. Partidos buscam disputar representação em instituições eleitorais, enquanto movimentos podem agir dentro ou fora dessas arenas, dialogando, pressionando ou criticando governos e partidos. A participação social envolve diferentes repertórios, como assembleias, petições, paralisações, ocupações e campanhas informativas, conforme contexto e legislação.\n\nPara analisar uma mobilização, identifique o problema denunciado, atores, recursos disponíveis, formas de organização e resposta institucional. Nem todo grupo participante compartilha todas as opiniões, e diferenças internas podem produzir disputas sobre estratégias. O estudo sociológico evita julgar eficácia apenas pela quantidade de pessoas reunidas num evento isolado.",
        "example": "Moradores de um bairro organizam reuniões, coletam assinaturas e apresentam reivindicação por água tratada à prefeitura. Isso é ação coletiva orientada por demanda social, mesmo sem candidatos eleitorais ou grande manifestação pública. A mobilização pode envolver negociação e monitoramento.",
        "pitfall": "Não reduza movimentos sociais a desordem ou a organizações formalmente registradas. Eles podem ser pacíficos e institucionalizados ou surgir em redes informais, com grande diversidade interna.",
        "steps": [
          "Identifique reivindicação, atores e público afetado.",
          "Descreva os recursos e repertórios de mobilização usados.",
          "Diferencie ação coletiva de disputa eleitoral partidária."
        ]
      },
      {
        "level": "intermediate",
        "title": "Recursos, oportunidades e repertórios de ação",
        "explanation": "A eficácia de uma mobilização depende de fatores como organização, recursos materiais, acesso à informação, alianças, legitimidade e condições políticas. Um contexto que permite assembleias e acesso a órgãos públicos pode facilitar certa estratégia; sob repressão, grupos podem adotar formas distintas de organização. Não há relação mecânica entre número de participantes e sucesso, porque decisões públicas envolvem instituições, interesses e tempo.\n\nO conceito de repertório de ação descreve formas relativamente reconhecíveis de protesto, negociação e participação disponíveis em determinado período histórico. Petições, greves, manifestações e campanhas digitais podem se combinar. A mesma tecnologia pode ampliar divulgação e expor participantes a vigilância, desinformação ou assédio. Plataformas não substituem automaticamente organização social nem garantem mudanças institucionais.\n\nA interpretação sociológica considera também disputas de enquadramento: um movimento pode apresentar uma reivindicação como questão de direitos, segurança ou justiça ambiental. Diferentes grupos podem interpretar o mesmo problema de maneiras distintas. Para avaliar resultados, compare propostas, decisões governamentais, implementação e efeitos sociais ao longo do tempo.",
        "example": "Uma campanha digital reúne muitas assinaturas por acessibilidade. A coleta pode sensibilizar autoridades, mas a conquista efetiva requer que medidas sejam aprovadas, financiadas e implementadas. Visualizações e curtidas não equivalem a rampas construídas ou transporte adaptado.",
        "pitfall": "Não confunda visibilidade nas redes com impacto social comprovado. Mudanças dependem de decisões, recursos e implementação, e números digitais podem não representar adesão fora da plataforma.",
        "steps": [
          "Examine recursos, oportunidades políticas e alianças disponíveis.",
          "Diferencie circulação de mensagens e mudanças institucionais efetivas.",
          "Escolha indicadores de resultado, não apenas de alcance ou engajamento."
        ]
      },
      {
        "level": "advanced",
        "title": "Redes digitais, reconhecimento e efeitos de longo prazo",
        "explanation": "Movimentos contemporâneos podem articular redes locais e transnacionais usando mensagens, vídeos e plataformas digitais. A velocidade de circulação favorece convocação e divulgação, mas algoritmos, assimetrias de acesso e campanhas de desinformação podem distorcer a representação de opiniões. A análise precisa considerar quem controla plataformas, como informações são verificadas e quem está ausente do debate digital.\n\nA participação política não se limita à eleição periódica: consultas públicas, conselhos, movimentos e associações contribuem para pautas e fiscalização, conforme desenho institucional. Contudo, participar de um espaço consultivo não significa possuir poder decisório final, e mecanismos podem ter regras de representação e acesso diferentes. Avaliar inclusão exige observar quem consegue participar e quais demandas são efetivamente consideradas.\n\nPara estudar consequências, combine história, dados e depoimentos com critérios: um movimento pode alterar legislação, cultura pública ou redes de solidariedade, sem obter sua meta inicial completamente. Resultados são multicausais. Comparar períodos e processos evita atribuir toda transformação a uma postagem viral ou evento isolado.",
        "example": "Um movimento ambiental obtém lei municipal de proteção de nascente, mas a implementação não recebe orçamento. A campanha pode ter conseguido mudança normativa, porém o efeito material depende de fiscalização e recursos. É necessário distinguir conquista legislativa de recuperação ambiental efetiva.",
        "pitfall": "Não apresente todo movimento como unânime ou automaticamente benéfico; analise demandas, métodos, evidências e direitos envolvidos. Tampouco reduza resultados a número de seguidores em plataformas.",
        "steps": [
          "Observe como redes digitais e instituições formais interagem no caso.",
          "Compare participação consultiva, negociação e poder decisório efetivo.",
          "Avalie efeitos normativos e materiais por indicadores verificáveis."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Moradores organizam reuniões e petição para reivindicar saneamento. O caso exemplifica:",
        "options": [
          "Exclusivamente uma campanha eleitoral partidária.",
          "Uma ação coletiva organizada em torno de uma demanda social.",
          "Somente consumo individual de informações.",
          "Um processo que não envolve participação social."
        ],
        "correctIndex": 1,
        "hint": "A ação busca reivindicação coletiva junto a instituições.",
        "solution": "A alternativa B identifica ação coletiva com demanda social explícita. As demais restringem indevidamente participação a eleições ou ignoram a mobilização comunitária."
      },
      {
        "level": "intermediate",
        "prompt": "Uma campanha digital obtém 100 mil curtidas. Qual inferência é mais rigorosa?",
        "options": [
          "As 100 mil curtidas comprovam implementação de política.",
          "Curtidas garantem que todos os participantes votaram igualmente.",
          "Engajamento indica visibilidade, mas efeitos concretos exigem outros dados.",
          "Uma campanha digital não pode influenciar decisões sob nenhuma condição."
        ],
        "correctIndex": 2,
        "hint": "Distinga alcance online e resultado institucional.",
        "solution": "A alternativa C está correta: visibilidade não comprova mudança de lei ou implementação de serviços. As demais confundem engajamento com consequências ou negam possíveis impactos."
      },
      {
        "level": "advanced",
        "prompt": "Um movimento consegue aprovação de lei ambiental, mas não há fiscalização. Qual avaliação é adequada?",
        "options": [
          "A conquista normativa ocorreu, mas efetivação material ainda exige recursos e acompanhamento.",
          "A aprovação elimina automaticamente a degradação.",
          "A fiscalização nunca integra políticas públicas.",
          "Não houve qualquer resultado porque leis não têm relevância social."
        ],
        "correctIndex": 0,
        "hint": "Compare mudança de norma e sua implementação.",
        "solution": "A alternativa A distingue resultado legislativo de implementação; os outros enunciados atribuem eficácia automática ou negam importância de instrumentos jurídicos."
      }
    ]
  }
];
