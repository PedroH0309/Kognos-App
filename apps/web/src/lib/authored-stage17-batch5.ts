import type {Stage17Spec} from './authored-lessons-stage17.ts';
export const stage17Batch5:Stage17Spec[]=[
  {
    "subject": "Português",
    "topic": "Tema, tese e ideia central",
    "objective": "Distinguir assunto, ideia principal de parágrafo e posicionamento argumentativo, analisando como exemplos sustentam uma tese.",
    "sections": [
      {
        "title": "Tema é o assunto delimitado do texto",
        "explanation": "Tema é o recorte de assunto que orienta uma produção ou leitura. Um texto sobre 'desafios do transporte público para estudantes' não trata de transporte em qualquer sentido: restringe público e problema. Em leitura, identifique palavras recorrentes, objetivos do gênero e o que se discute ao longo dos parágrafos, sem confundir uma frase ilustrativa com o tema geral. Uma notícia pode abordar alteração de uma linha de ônibus como acontecimento central, enquanto um artigo de opinião discute se horários insuficientes dificultam acesso à escola. O tema também não é necessariamente título: títulos podem ser metafóricos, provocativos ou incompletos. Para interpretar uma questão, reconstrua o assunto em uma frase clara e observe o alcance do texto, evitando generalizações que ultrapassam o que foi apresentado.",
        "example": "Se um artigo discute a falta de ônibus à noite e suas consequências para estudantes, o tema pode ser 'mobilidade noturna de estudantes', não simplesmente 'tecnologia'.",
        "pitfall": "Confundir um exemplo secundário com o tema do texto ou reduzir o assunto a palavra tão ampla que perde o recorte.",
        "steps": [
          "Observe assunto recorrente e público ou situação delimitada no texto.",
          "Formule o tema em uma expressão que preserve as restrições realmente apresentadas."
        ]
      },
      {
        "title": "Ideia central organiza cada unidade de sentido",
        "explanation": "A ideia central de um parágrafo é o conteúdo essencial desenvolvido por suas frases, que podem incluir explicação, consequência e exemplos. Nem sempre corresponde literalmente à primeira frase, especialmente em textos narrativos e de divulgação científica. Para identificá-la, pergunte o que todas as informações daquele trecho ajudam a mostrar e que detalhes poderiam ser retirados sem perder a mensagem principal. Uma descrição de horários, filas e dificuldade de retorno pode desenvolver a ideia de que transporte insuficiente limita oportunidades, mesmo sem usar essas palavras. Em questões de múltipla escolha, alternativas podem citar fatos verdadeiros do texto que não constituem o centro de sua argumentação. O leitor precisa distinguir informação explícita, inferência e síntese coerente, evitando acrescentar avaliação própria ao resumo do autor.",
        "example": "Um parágrafo menciona ônibus a cada sessenta minutos, longas esperas e estudantes saindo cedo de atividades. Sua ideia central pode ser dificuldade de permanência escolar devido ao transporte.",
        "pitfall": "Escolher um exemplo isolado como síntese de todo o parágrafo ou interpretar a ideia central por opinião pessoal sem apoio no texto.",
        "steps": [
          "Agrupe exemplos e consequências sob a relação que os conecta.",
          "Teste se a sua síntese explica todas as frases relevantes sem inventar conteúdo."
        ]
      },
      {
        "title": "Tese é uma posição que precisa de fundamentação",
        "explanation": "Tese é o posicionamento central defendido em textos argumentativos, geralmente expresso por uma afirmação discutível. Pode aparecer explicitamente na introdução ou ser construída ao longo do texto, e não se confunde com o tema: 'transporte público' é assunto amplo, enquanto 'horários noturnos insuficientes restringem acesso a cursos' é tese possível. Uma tese pode ser sustentada por explicações causais, comparações, exemplos e dados pertinentes; sem justificativa, permanece apenas declaração. Em gêneros informativos, não se deve forçar toda passagem a ter tese persuasiva. Ao ler criticamente, separe o que o autor afirma, o que oferece como evidência e quais limitações reconhece. Uma tese com afirmações absolutas como 'todos' ou 'nunca' pode exigir evidências difíceis de fornecer; formulá-la com precisão torna o argumento mais defensável.",
        "example": "Tese: 'Ampliar horários de bibliotecas pode melhorar acesso de estudantes que trabalham'. A discussão deve explicar demandas e condições, não apenas elogiar livros.",
        "pitfall": "Dizer que tese e tema são sinônimos ou confundir preferência sem argumento com posição já demonstrada.",
        "steps": [
          "Localize a proposição defendida, distinguindo-a do assunto e de exemplos.",
          "Verifique se cada justificativa contribui para defender a proposição sem extrapolar dados."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a diferença entre assunto geral e tema delimitado de uma reportagem?",
        "hint": "Tema pode especificar público, lugar ou problema.",
        "solution": "Assunto é campo amplo; tema delimita exatamente o que será discutido, como desafios do transporte para estudantes noturnos."
      },
      {
        "level": "basic",
        "prompt": "A primeira frase de todo parágrafo é obrigatoriamente sua ideia central?",
        "hint": "Observe gêneros e organização variável dos textos.",
        "solution": "Não. Em diferentes gêneros, a ideia pode ser construída em outras posições e reconhecida pelo conjunto de frases."
      },
      {
        "level": "intermediate",
        "prompt": "Um texto descreve filas e espera do ônibus escolar. Qual síntese é mais apropriada que apenas 'filas'?",
        "hint": "Reúna os detalhes por relação central.",
        "solution": "A ideia central pode ser dificuldade de acesso escolar ligada à demora do transporte, se isso corresponder ao conjunto das informações."
      },
      {
        "level": "intermediate",
        "prompt": "Transforme o tema 'bibliotecas públicas' em uma tese argumentativa específica.",
        "hint": "Indique uma posição discutível com causa ou consequência.",
        "solution": "Uma tese possível é: 'Horários restritos de bibliotecas dificultam o acesso de estudantes que trabalham', sujeita a fundamentação."
      },
      {
        "level": "advanced",
        "prompt": "Um artigo apresenta dados sobre horários e defende ampliá-los. Quais partes são evidência e tese?",
        "hint": "Separe registros de horários da recomendação central.",
        "solution": "Os horários documentados servem como evidência; a posição de que o serviço deve ser ampliado constitui a tese argumentativa."
      },
      {
        "level": "advanced",
        "prompt": "Por que 'todo estudante odeia leitura' é tese fraca sem evidências?",
        "hint": "Termos universais exigem suporte muito amplo.",
        "solution": "A generalização absoluta é difícil de demonstrar e ignora diferentes experiências; uma tese precisa de recorte e sustentação proporcional."
      }
    ],
    "everyday": {
      "context": "Um estudante resume artigo sobre transporte escolar dizendo apenas 'o assunto é ônibus', enquanto a autora defende que horários noturnos insuficientes prejudicam acesso a cursos.",
      "question": "Como diferenciar tema, ideia central do texto e tese defendida?",
      "answer": "O tema é mobilidade dos estudantes; a ideia central resume a relação de horários e acesso; a tese é a posição específica de que horários insuficientes geram barreiras.",
      "connections": [
        {
          "subject": "Redação",
          "topic": "Formulação de tese",
          "reason": "A redação argumentativa exige transformar tema delimitado numa posição específica que possa ser justificada."
        },
        {
          "subject": "Português",
          "topic": "Fato, opinião e ponto de vista",
          "reason": "Identificar posições e dados ajuda a separar tese argumentativa de informações verificáveis."
        }
      ]
    }
  },
  {
    "subject": "Português",
    "topic": "Coerência e progressão textual",
    "objective": "Analisar continuidade temática, relações lógicas e progressão de informações em textos, reconhecendo contradições e digressões.",
    "sections": [
      {
        "title": "Coerência é construção de sentido global",
        "explanation": "Um texto coerente permite ao leitor compreender relações entre suas ideias sem contradições injustificadas. Não depende apenas de gramática correta ou da presença de conectivos: frases corretas isoladamente podem formar conjunto sem direção temática. Uma notícia sobre mudança de horário escolar deve situar data, serviço e consequências de modo consistente; se declara abertura às 8 horas e depois diz que sempre começa às 10 sob as mesmas condições, aparece contradição que precisa ser explicada. Coerência também depende do gênero e do conhecimento compartilhado: um texto ficcional pode apresentar situações impossíveis no mundo real, mas manter lógica interna. Ao avaliar um trecho, identifique o tema, as relações de causa, sequência e contraste e as informações que devem permanecer compatíveis. Erros de coerência não se resolvem somente adicionando 'portanto'.",
        "example": "Um aviso afirma 'a biblioteca ficará aberta até 20 h na sexta' e depois diz 'na sexta fecha às 17 h', sem explicar exceção. Os horários se contradizem no mesmo contexto.",
        "pitfall": "Confundir coerência com ausência de criatividade ou supor que muitos conectivos garantem relações lógicas válidas.",
        "steps": [
          "Releia as afirmações centrais e verifique se tempo, sujeitos e condições permanecem compatíveis.",
          "Identifique onde uma afirmação exige explicação, restrição ou correção para evitar contradição."
        ]
      },
      {
        "title": "Progressão acrescenta informação pertinente",
        "explanation": "Um texto progride quando novas frases acrescentam explicações, exemplos, consequências ou contrapontos relacionados ao que já foi apresentado. Repetir continuamente a tese sem evidência pode criar sensação de circularidade; introduzir tópico sem ligação provoca digressão. Em um parágrafo de redação sobre saneamento, iniciar com ausência de esgoto e passar a publicidade de roupas sem relação clara interrompe a progressão. Relações entre frases podem ser marcadas por conectivos adequados, mas a escolha de 'porém', 'porque' ou 'assim' deve corresponder a oposição, causa ou consequência real. A retomada de termos por pronomes e expressões equivalentes contribui para continuidade sem repetir palavras de forma mecânica. Pergunte qual função cada sentença exerce em relação à anterior e à tese do texto.",
        "example": "Após afirmar que ônibus escassos aumentam espera, explicar que estudantes perdem aulas e apresentar horários da linha desenvolve o mesmo argumento com informação nova.",
        "pitfall": "Adicionar 'além disso' antes de um assunto desconectado ou repetir o mesmo enunciado com sinônimos sem avançar explicação.",
        "steps": [
          "Atribua uma função a cada frase: tese, causa, exemplo, consequência ou contraponto.",
          "Elimine repetições vazias e reorganize ideias que não sustentam o tema principal."
        ]
      },
      {
        "title": "Revisão de conectivos, referências e contradições",
        "explanation": "A revisão de um texto exige observar relações explícitas e implícitas. Um pronome pode gerar ambiguidade quando retoma dois referentes possíveis; nesse caso, é melhor explicitar o nome. Conectivos também podem indicar lógica incorreta: 'o transporte ficou mais rápido, portanto o tempo aumentou' contradiz uma expectativa se não houver condição adicional que explique a afirmação. Em narrativas, tempos verbais precisam ser relacionados para ordenar acontecimentos; em argumentações, as conclusões devem acompanhar evidências. A coerência é sensível ao contexto: 'o ônibus atrasou, mas chegou antes da prova' pode ser perfeitamente consistente. Em questões de prova, não basta identificar palavras coesivas; examine se a estrutura liga ideias de maneira compreensível. A revisão deve preservar voz e objetivo do texto, não transformá-lo em sequência de fórmulas genéricas.",
        "example": "Na frase 'Ana avisou Bia quando ela chegou', o pronome ela pode ser ambíguo. Reescrever 'quando Ana chegou' elimina uma possível dúvida de referência.",
        "pitfall": "Tratar qualquer contraste como contradição ou não perceber referências ambíguas que impedem entender quem realizou a ação.",
        "steps": [
          "Cheque o referente de cada pronome e a relação lógica indicada pelos conectivos.",
          "Reescreva condições implícitas e elimine contradições reais sem apagar contrastes legítimos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que torna um conjunto de frases globalmente coerente?",
        "hint": "Observe compatibilidade e relações de sentido.",
        "solution": "As ideias precisam manter relações interpretáveis e condições consistentes, não apenas apresentar palavras gramaticalmente corretas."
      },
      {
        "level": "basic",
        "prompt": "Por que repetir a tese sem novos argumentos prejudica progressão textual?",
        "hint": "Progressão exige acrescentar algo relevante.",
        "solution": "A repetição não desenvolve raciocínio; o texto precisa apresentar razões, exemplos ou consequências ligados à tese."
      },
      {
        "level": "intermediate",
        "prompt": "Um aviso diz que serviço fecha às 17 e às 20 no mesmo dia sem explicação. Qual problema?",
        "hint": "Observe dados incompatíveis no mesmo contexto.",
        "solution": "Há aparente contradição temporal que exige esclarecer exceção ou corrigir uma das informações."
      },
      {
        "level": "intermediate",
        "prompt": "Quando usar 'porém' seria melhor que 'porque'?",
        "hint": "Um expressa contraste; o outro, explicação causal.",
        "solution": "'Porém' introduz oposição ou contraste; 'porque' introduz explicação de causa, dependendo da estrutura da frase."
      },
      {
        "level": "advanced",
        "prompt": "Por que 'Ana falou com Bia quando ela chegou' pode precisar de revisão?",
        "hint": "O referente de ela não está definido.",
        "solution": "O pronome pode retomar Ana ou Bia. Especificar quem chegou torna a referência clara e melhora coerência."
      },
      {
        "level": "advanced",
        "prompt": "Uma redação trata de saneamento e passa a moda sem ligação. Qual revisão seria adequada?",
        "hint": "Analise relação com a tese e digressão.",
        "solution": "O trecho deve demonstrar vínculo real com saneamento ou ser retirado, pois uma digressão sem função prejudica progressão."
      }
    ],
    "everyday": {
      "context": "Uma turma revisa texto sobre transporte coletivo. O autor repete três vezes a mesma opinião, insere propaganda de roupas e usa 'portanto' antes de uma conclusão sem relação lógica.",
      "question": "Quais mudanças de coerência e progressão tornam o argumento compreensível?",
      "answer": "É preciso retirar digressões, substituir repetições por evidências e usar conectivos somente quando causa, consequência ou contraste forem sustentados.",
      "connections": [
        {
          "subject": "Português",
          "topic": "Coesão referencial",
          "reason": "Referências bem construídas permitem identificar sujeitos e ideias retomadas sem ambiguidades desnecessárias."
        },
        {
          "subject": "Redação",
          "topic": "Desenvolvimento e tópico frasal",
          "reason": "Parágrafos precisam acrescentar justificativas ligadas à tese e manter unidade de argumento ao longo da redação."
        }
      ]
    }
  },
  {
    "subject": "Literatura",
    "topic": "Romantismo: romance urbano, regional e indianista",
    "objective": "Comparar tendências do romance romântico brasileiro e discutir suas representações de sociedade, território e identidade nacional.",
    "sections": [
      {
        "title": "Romance urbano e relações sociais",
        "explanation": "O romance urbano romântico do século XIX pode explorar relações amorosas, vida familiar, prestígio, mobilidade social e convenções de comportamento, especialmente em ambientes citadinos. Personagens e conflitos são construções literárias, não documentos neutros de como todas as famílias viviam. José de Alencar, em obras como Senhora e Lucíola, é autor importante para estudar diferentes relações entre dinheiro, reputação e sentimentos, embora cada romance exija análise própria. A narrativa pode idealizar personagens e também expor contradições do grupo social representado. O leitor deve observar narrador, contexto de publicação, posição dos personagens e papel do ambiente urbano. O adjetivo 'urbano' descreve tendência do espaço e das relações narradas, não a ausência de questões de classe ou de conflitos fora da cidade.",
        "example": "Numa narrativa fictícia, o casamento entre famílias de rendas diferentes pode revelar tensão entre afeto e expectativas sociais; o conflito não prova que todos os casamentos da época funcionavam assim.",
        "pitfall": "Classificar qualquer romance passado numa cidade como Romantismo urbano ou tratar narradores como fontes históricas sem mediação.",
        "steps": [
          "Observe como relações sociais e espaços urbanos organizam os conflitos dos personagens.",
          "Diferencie temas idealizados e críticas que o texto apresenta por meio da voz narrativa."
        ]
      },
      {
        "title": "Romance regionalista e paisagem cultural",
        "explanation": "O regionalismo romântico representou paisagens, hábitos, atividades e personagens associados a diferentes regiões brasileiras, ajudando a construir imagens de território e identidade no século XIX. Obras como O Gaúcho e O Sertanejo, de José de Alencar, participam de um conjunto heterogêneo e não podem ser usadas como descrição literal de todas as populações representadas. O meio pode interferir no comportamento e no deslocamento dos personagens, mas não define sozinho o valor ou a personalidade das pessoas. O narrador escolhe o que mostrar e pode idealizar costumes, privilegiar certos tipos sociais e silenciar outros. Comparar representação literária com estudos de História e Geografia ajuda a reconhecer a diferença entre imagem simbólica de região e descrição empiricamente verificada. O regionalismo exige leitura de linguagem, perspectiva e contexto, não mera identificação de um nome geográfico.",
        "example": "Um romance que descreve estradas, distâncias e atividades do sertão pode tornar o ambiente parte do enredo, mas a representação seleciona experiências e não funciona como censo regional.",
        "pitfall": "Tratar uma personagem rural como representante fiel de toda região ou concluir que toda ficção regionalista é documentário.",
        "steps": [
          "Identifique como paisagem e costumes alteram ações e conflitos da narrativa.",
          "Pergunte quais experiências são valorizadas ou omitidas pela perspectiva do narrador."
        ]
      },
      {
        "title": "Indianismo e a invenção de símbolos nacionais",
        "explanation": "No Romantismo brasileiro, romances indianistas buscaram representar personagens indígenas e episódios de formação simbólica da nação, frequentemente idealizando figuras heroicas e relações com colonizadores. Obras como O Guarani e Iracema, de José de Alencar, são importantes para investigar procedimentos literários e visões históricas do século XIX. O indianismo não equivale à voz de todos os povos indígenas, e suas imagens podem projetar expectativas de escritores não indígenas sobre culturas diversas. A construção de um herói pode ajudar a consolidar símbolos nacionais, mas também produzir estereótipos e silenciamentos. Uma análise crítica identifica o ponto de vista, a linguagem, o que é inventado e o que depende de pesquisa histórica. O leitor deve evitar usar a ficção como prova de comportamento universal de sociedades indígenas.",
        "example": "Uma personagem indígena romantizada como heroína perfeita pode expressar ideal nacional de um autor oitocentista, sem representar a diversidade real de mulheres indígenas.",
        "pitfall": "Confundir indianismo romântico com produção artística indígena autoral ou repetir idealizações literárias como fatos históricos sobre povos reais.",
        "steps": [
          "Analise quem narra e quem define a imagem de identidade nacional na obra.",
          "Compare representação indianista com informações históricas e vozes indígenas de autoria própria."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual espaço caracteriza com frequência o romance urbano romântico?",
        "hint": "Considere relações sociais em cidades.",
        "solution": "Ambientes e convenções sociais citadinos frequentemente organizam conflitos de amor, reputação e classe no romance urbano."
      },
      {
        "level": "basic",
        "prompt": "O que torna o espaço importante no romance regionalista?",
        "hint": "O meio pode integrar costumes e conflitos da narrativa.",
        "solution": "Paisagens e práticas locais participam da organização do enredo, sem que a obra seja registro neutro de toda uma região."
      },
      {
        "level": "intermediate",
        "prompt": "Cite uma obra de José de Alencar associada ao indianismo.",
        "hint": "Considere Iracema ou O Guarani.",
        "solution": "Iracema e O Guarani são obras indianistas importantes de José de Alencar, cada uma com procedimentos próprios."
      },
      {
        "level": "intermediate",
        "prompt": "Por que Senhora pode ser discutido na perspectiva do romance urbano?",
        "hint": "Considere dinheiro, relações sociais e reputação.",
        "solution": "A narrativa explora relações de classe, casamento e prestígio num contexto urbano, permitindo análise crítica de valores sociais."
      },
      {
        "level": "advanced",
        "prompt": "Por que não se deve tratar personagem indianista como retrato de todos os povos indígenas?",
        "hint": "A obra foi construída por autor com perspectiva situada.",
        "solution": "A personagem resulta de escolhas de idealização e projeto nacional, não de representação universal de povos culturalmente diversos."
      },
      {
        "level": "advanced",
        "prompt": "Como História e Literatura podem dialogar sem que romance vire fonte neutra?",
        "hint": "Compare contexto, narrador e fontes históricas.",
        "solution": "A ficção informa imaginários e valores de seu contexto, enquanto fatos históricos exigem crítica documental e comparação de fontes."
      }
    ],
    "everyday": {
      "context": "Num trabalho sobre identidade nacional, alunos analisam romances urbanos, regionalistas e indianistas e afirmam que todos descrevem fielmente o Brasil do século XIX porque apresentam ambientes diferentes.",
      "question": "Como a perspectiva do narrador altera a interpretação de cidade, região e povos indígenas?",
      "answer": "Os romances selecionam experiências, podem idealizar personagens e construir símbolos nacionais; são representações literárias situadas, não documentação completa da sociedade.",
      "connections": [
        {
          "subject": "Literatura",
          "topic": "Romantismo: poesia e gerações",
          "reason": "As tendências da prosa dialogam com a busca romântica por identidade, subjetividade e imagens de nação."
        },
        {
          "subject": "História",
          "topic": "Povos indígenas antes da colonização",
          "reason": "A história e diversidade dos povos indígenas ajudam a questionar idealizações criadas por narrativas indianistas do século XIX."
        }
      ]
    }
  },
  {
    "subject": "Literatura",
    "topic": "Simbolismo",
    "objective": "Identificar musicalidade, sugestão e imagens sensoriais na poesia simbolista, contextualizando sua diferença de estéticas anteriores sem reduzir interpretação a rótulos.",
    "sections": [
      {
        "title": "Sugestão e subjetividade em vez de descrição direta",
        "explanation": "A poesia simbolista, difundida no fim do século XIX, frequentemente explora atmosfera, subjetividade, mistério e imagens que sugerem sentidos sem apresentar explicação objetiva direta. No Brasil, Cruz e Sousa e Alphonsus de Guimaraens são nomes importantes, com trajetórias e obras diversas. Não se deve afirmar que todo simbolista escreve da mesma maneira ou que qualquer texto com símbolos pertence necessariamente ao movimento. Uma imagem como 'a noite veste silêncio' pode sugerir estado emocional, mas sua interpretação depende do conjunto de versos, ritmo e contexto. A linguagem pode ser menos referencial, convidando o leitor a construir relações entre sensações e imagens. Isso não significa ausência de significado nem obrigação de encontrar um código único escondido em cada palavra.",
        "example": "Numa frase original de estudo, 'A névoa sussurra passos invisíveis' combina personificação e sugestão sensorial, recursos compatíveis com uma leitura simbolista.",
        "pitfall": "Interpretar cada símbolo como mensagem com tradução universal ou identificar o movimento por uma única palavra abstrata.",
        "steps": [
          "Identifique imagens e sensações sugeridas, indicando onde aparecem no texto.",
          "Explique o efeito construído pelo conjunto, não uma tradução fixa de cada figura."
        ]
      },
      {
        "title": "Musicalidade, sinestesia e recursos sonoros",
        "explanation": "Aliterações, assonâncias, ritmo e repetições podem contribuir para uma musicalidade expressiva, enquanto a sinestesia aproxima percepções de sentidos diferentes, como 'som áspero' ou 'cor quente'. Esses recursos também existem em outras escolas, portanto não constituem prova isolada de autoria simbolista. O estudo deve examinar como som e imagem trabalham juntos para produzir atmosfera, atenção a sentimentos ou deslocamento de percepção. Comparar sons de palavras exige ler a sequência completa e reconhecer que grafia e pronúncia nem sempre coincidem de modo simples. Há poemas simbolistas com organização métrica elaborada; a experimentação de sentido não exige ausência de forma. No vestibular, uma explicação forte aponta palavras específicas e descreve o efeito, evitando dizer apenas 'o poema é musical'.",
        "example": "Na frase inventada 'Sinos suaves sopram sobre a sala', a repetição do som /s/ pode intensificar sensação de sussurro, conforme leitura e contexto.",
        "pitfall": "Confundir sinestesia com qualquer metáfora ou afirmar que repetir consoantes torna automaticamente um texto simbolista.",
        "steps": [
          "Localize quais sentidos sensoriais estão combinados em uma imagem do texto.",
          "Relacione repetições sonoras ao ambiente poético sem presumir um efeito obrigatório."
        ]
      },
      {
        "title": "Contexto histórico e leitura crítica dos autores",
        "explanation": "O Simbolismo conviveu com transformações sociais e estéticas da virada para o século XX, não sendo mera fuga universal de toda questão histórica. A obra de Cruz e Sousa, poeta negro em sociedade marcada por racismo e pós-abolição, exige cuidado com contexto de circulação, críticas e interpretações; sua poesia não se reduz a uma única experiência social. Ler o período demanda reconhecer diferenças entre projeto literário, biografia e voz poética, sem atribuir automaticamente ao autor todo sentimento expresso no eu lírico. A comparação com Naturalismo pode mostrar contrastes de procedimentos: atenção a descrição de condições materiais em determinadas narrativas versus sugestão e musicalidade em certa poesia. Porém críticas sociais e subjetividade podem aparecer além dessas divisões, que são ferramentas de estudo e não fronteiras absolutas.",
        "example": "Um poema com atmosfera de sonho pode ter sido escrito em contexto de tensões sociais reais; sua linguagem não prova desinteresse completo do poeta pela sociedade.",
        "pitfall": "Confundir eu lírico com biografia literal ou afirmar que qualquer escola literária trata exclusivamente de um conjunto de temas.",
        "steps": [
          "Situe obra e autor em contexto sem reduzir poesia à vida pessoal.",
          "Compare técnicas de sugestão e descrição sem impor exclusividade temática a movimentos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que significa sugestão na interpretação de um poema simbolista?",
        "hint": "O sentido é construído por imagens e sensações.",
        "solution": "A linguagem pode evocar atmosferas e ideias sem descrevê-las literalmente, pedindo leitura do conjunto de imagens."
      },
      {
        "level": "basic",
        "prompt": "Cite um recurso sonoro que contribui para musicalidade poética.",
        "hint": "Pense na repetição de consoantes ou vogais.",
        "solution": "Aliteração, assonância ou ritmo podem criar efeitos sonoros, dependendo de palavras e contexto de leitura."
      },
      {
        "level": "intermediate",
        "prompt": "Por que 'som áspero' pode exemplificar sinestesia?",
        "hint": "Combina percepção auditiva e tátil.",
        "solution": "A expressão reúne uma referência sonora com sensação tátil, cruzando domínios dos sentidos."
      },
      {
        "level": "intermediate",
        "prompt": "Uma aliteração prova que o poema é simbolista?",
        "hint": "Recursos também aparecem em outras escolas.",
        "solution": "Não. A classificação depende de contexto, conjunto de procedimentos e obra, pois aliteração não é exclusiva do Simbolismo."
      },
      {
        "level": "advanced",
        "prompt": "Por que não se deve identificar sempre eu lírico e autor?",
        "hint": "Voz poética é construção textual.",
        "solution": "O eu lírico é voz construída na obra e não constitui automaticamente relato factual de experiências do autor."
      },
      {
        "level": "advanced",
        "prompt": "Compare descrição material naturalista e sugestão simbolista sem generalizar.",
        "hint": "Movimentos possuem tendências, não regras absolutas.",
        "solution": "Obras naturalistas podem enfatizar meio social e procedimentos descritivos; poemas simbolistas podem acentuar imagens e musicalidade, com exceções."
      }
    ],
    "everyday": {
      "context": "Uma turma lê um poema com repetições sonoras e imagens de cores que parecem produzir sons. Um estudante tenta transformar cada palavra em um código fixo para achar um único sentido obrigatório.",
      "question": "Como musicalidade e sugestão podem criar interpretações sem exigir dicionário universal de símbolos?",
      "answer": "Repetição sonora, sinestesia e imagens constroem atmosfera no conjunto do poema; a interpretação deve ser justificada pelo texto, sem símbolos de tradução universal.",
      "connections": [
        {
          "subject": "Arte",
          "topic": "Música: ritmo, melodia, harmonia e timbre",
          "reason": "A organização de sons e ritmo oferece analogias úteis para analisar a musicalidade verbal da poesia."
        },
        {
          "subject": "Literatura",
          "topic": "Naturalismo brasileiro",
          "reason": "O contraste entre descrição e sugestão ajuda a comparar procedimentos estéticos sem atribuir temas exclusivos a um período."
        }
      ]
    }
  }
];
