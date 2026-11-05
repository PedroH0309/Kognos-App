import type {Stage17Spec} from './authored-lessons-stage17.ts';
export const stage17Batch7:Stage17Spec[]=[
  {
    "subject": "Espanhol",
    "topic": "Presente do indicativo em espanhol",
    "objective": "Reconhecer usos do presente do indicativo em rotinas, fatos afirmados e ações atuais, conjugando verbos regulares e irregulares em contextos.",
    "sections": [
      {
        "title": "Hablar, comer e vivir no presente",
        "explanation": "O presente do indicativo espanhol expressa hábitos, situações que o falante apresenta como atuais e, em certos contextos, verdades gerais ou eventos planejados. Verbos regulares em -ar, -er e -ir apresentam padrões de conjugação próprios: hablo, hablas, habla, hablamos, habláis, hablan; como, comes, come, comemos, coméis, comen; vivo, vives, vive, vivimos, vivís, viven. As formas de vosotros são comuns em muitas variedades da Espanha, enquanto ustedes é utilizado amplamente no plural em regiões da América. A conjugação deve concordar com pessoa e número, e nem todo sujeito precisa ser escrito porque a forma verbal frequentemente já o identifica. Uma frase no presente não comprova a veracidade do acontecimento relatado: gramática indica como o falante apresenta a informação, não sua checagem.",
        "example": "'Nosotros estudiamos los lunes' descreve rotina do grupo. 'Ellos estudian los lunes' usa terminação de terceira pessoa plural e mantém o mesmo tipo de referência habitual.",
        "pitfall": "Confundir terminações de -ar e -er ou afirmar que todo país hispanofalante utiliza vosotros como plural informal corrente.",
        "steps": [
          "Identifique infinitivo, pessoa e número antes de escolher a terminação correta.",
          "Verifique se o enunciado descreve rotina, situação atual ou outra função do presente."
        ]
      },
      {
        "title": "Irregularidades e mudanças de radical",
        "explanation": "Muitos verbos frequentes são irregulares no presente: ser apresenta soy, eres, es; estar apresenta estoy, estás, está; ir apresenta voy, vas, va. Alguns verbos mostram mudanças vocálicas em parte do paradigma, como pensar→pienso, piensas, piensa, pensamos e poder→puedo, puedes, puede, podemos. Essas alterações não devem ser impostas automaticamente a todas as formas nem a todos os verbos de mesma terminação. Verbos com irregularidade em yo, como tener→tengo e hacer→hago, exigem atenção ao padrão específico. O uso de ser e estar depende de sentido e construção e não se reduz sem exceções à fórmula de permanente versus temporário: localização, características e estados apresentam convenções que precisam ser aprendidas em exemplos. Para compreensão de textos, observe expressão completa e função comunicativa.",
        "example": "'Yo tengo clase hoy' usa primeira pessoa irregular de tener; 'Nosotros tenemos clase hoy' conserva forma regular no radical para essa pessoa.",
        "pitfall": "Afirmar que qualquer verbo em -er muda a vogal do radical ou traduzir ser e estar somente por duração da característica.",
        "steps": [
          "Identifique a irregularidade como padrão do verbo e da pessoa, não da terminação isolada.",
          "Compare formas dentro de uma frase para escolher a conjugação compatível com o sujeito."
        ]
      },
      {
        "title": "Presente em avisos, rotinas e variedade linguística",
        "explanation": "O presente pode descrever cronogramas, instruções e hábitos, como 'La biblioteca abre a las ocho' ou 'Mañana tenemos examen'. A referência futura é determinada pelo contexto e por marcadores como mañana, sem que toda forma presente signifique acontecimento exatamente agora. Registros podem variar regionalmente, inclusive no tratamento informal entre tú e vos, como 'tú tienes' e 'vos tenés' em certas variedades. A diferença não autoriza tratar uma forma de espanhol americano como erro: a análise respeita a norma de uso da comunidade e a finalidade do texto. Ao ler mensagens escolares, pergunte se o aviso informa rotina ou evento específico e qual fonte confirma a data. Uma expressão afirmativa não garante que a informação esteja atualizada. A conjugação serve à interpretação de pessoas, tempos e contextos concretos.",
        "example": "'Mañana tenemos una reunión' utiliza presente para um encontro futuro programado; o advérbio mañana impede interpretar a reunião como evento já ocorrido.",
        "pitfall": "Concluir que presente só descreve o segundo da fala ou tratar formas legítimas de voseo como falta de gramática.",
        "steps": [
          "Interprete marcadores de tempo junto com a flexão verbal no aviso.",
          "Reconheça a variedade de tratamento antes de julgar se a frase está adequada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Complete 'Yo ___ español' com hablar no presente.",
        "hint": "A primeira pessoa de hablar termina em -o.",
        "solution": "A forma é hablo: 'Yo hablo español', apresentando habilidade ou uso atual de língua."
      },
      {
        "level": "basic",
        "prompt": "Complete 'Nosotros ___ en la escuela' com vivir no presente.",
        "hint": "Para nosotros, viver utiliza -imos em espanhol.",
        "solution": "A forma é vivimos: 'Nosotros vivimos en la escuela' seria gramatical, embora seu conteúdo dependa do contexto."
      },
      {
        "level": "intermediate",
        "prompt": "Qual forma corresponde a yo do verbo tener?",
        "hint": "É uma irregularidade específica na primeira pessoa.",
        "solution": "A forma é tengo; em 'Yo tengo un libro', ela expressa posse no presente."
      },
      {
        "level": "intermediate",
        "prompt": "Corrija 'Ellos habla español' para concordância adequada.",
        "hint": "Use terceira pessoa do plural de hablar.",
        "solution": "A forma adequada é 'Ellos hablan español', porque o sujeito ellos está no plural."
      },
      {
        "level": "advanced",
        "prompt": "Em 'Mañana tenemos examen', o presente indica que a prova já aconteceu?",
        "hint": "Observe o marcador temporal mañana.",
        "solution": "Não. O presente está sendo usado para evento futuro programado; a frase não descreve um acontecimento concluído."
      },
      {
        "level": "advanced",
        "prompt": "Por que 'vos tenés' não deve ser corrigido como erro universal para 'tú tienes'?",
        "hint": "Existem variedades com voseo e tuteo.",
        "solution": "Ambas são formas legítimas em variedades diferentes; a escolha depende de região, interlocutores e padrão adotado."
      }
    ],
    "everyday": {
      "context": "Uma estudante recebe aviso em espanhol 'Mañana tenemos examen'. Ela pensa que 'tenemos' no presente significa que a prova ocorreu hoje e ignora o marcador 'mañana'.",
      "question": "Como o contexto temporal modifica a interpretação do presente do indicativo?",
      "answer": "Mañana significa amanhã; o presente pode anunciar evento futuro programado, portanto não informa que a prova aconteceu hoje.",
      "connections": [
        {
          "subject": "Espanhol",
          "topic": "Subjuntivo em espanhol",
          "reason": "Contrastar indicativo e subjuntivo ajuda a separar afirmações apresentadas como dadas de desejos e hipóteses."
        },
        {
          "subject": "Espanhol",
          "topic": "Variação linguística e voseo",
          "reason": "Formas como vos tenés e tú tienes mostram que conjugação e tratamento também variam regionalmente."
        }
      ]
    }
  },
  {
    "subject": "Espanhol",
    "topic": "Diversidade cultural hispânica",
    "objective": "Analisar diversidade cultural de comunidades hispanofalantes, reconhecendo história, plurilinguismo e representações sem homogeneizar países.",
    "sections": [
      {
        "title": "Mundo hispanofalante não equivale a cultura única",
        "explanation": "A língua espanhola é utilizada em diferentes países e comunidades, mas não determina que seus falantes compartilhem uma cultura homogênea. Países hispânicos possuem histórias diversas de colonização, migração, povos originários, escravidão, circulação de artes e processos sociais contemporâneos. Além do espanhol, inúmeras regiões utilizam línguas indígenas e outras línguas históricas, com situações institucionais e níveis de reconhecimento diferentes. Uma celebração comum em determinado lugar não deve ser atribuída automaticamente a todo continente ou a qualquer falante de espanhol. Ao estudar imagens, músicas e relatos, identifique localização, autoria, data e finalidade, evitando usar sotaque ou comida como resumo definitivo de um povo. A diversidade existe também dentro de uma mesma cidade, por fatores de geração, condições de vida e identidades sociais.",
        "example": "Uma feira cultural pode apresentar expressões artísticas e gastronômicas de diferentes regiões do México e do Peru sem afirmar que elas representam todos os moradores desses países.",
        "pitfall": "Confundir compartilhar idioma com compartilhar hábitos idênticos ou reduzir um país a única festa ou alimento popular.",
        "steps": [
          "Identifique país, comunidade e origem da fonte antes de descrever tradição cultural.",
          "Diferencie idioma compartilhado de experiências históricas e sociais diversas."
        ]
      },
      {
        "title": "Plurilinguismo, identidade e representações",
        "explanation": "Em partes da América Latina, línguas como quéchua, guarani, aimará e diversas línguas maias fazem parte de experiências culturais, embora sua distribuição, situação oficial e número de falantes variem. Na Espanha, catalão, galego e basco também possuem presença histórica e diferentes regimes linguísticos regionais. Isso mostra que país de língua espanhola não é necessariamente sociedade monolíngue. É inadequado inferir origem étnica, escolaridade ou competência a partir de uma língua ou sotaque. Fotografias e campanhas turísticas podem enfatizar certas paisagens e símbolos para atrair visitantes, sem oferecer retrato completo da população. Analisar autoria, seleção e contexto ajuda a identificar estereótipos e reconhecer que comunidades são agentes de produção cultural, não objetos passivos de exposição.",
        "example": "Um anúncio turístico pode destacar um festival regional e usar a frase 'a cultura do país', mas isso não significa que todas as pessoas compartilhem aquela prática.",
        "pitfall": "Tratar línguas indígenas como simples dialetos inferiores ao espanhol ou transformar imagem turística em censo cultural.",
        "steps": [
          "Localize quais línguas e comunidades estão efetivamente referidas no texto.",
          "Examine quem escolheu as imagens e quais experiências a representação deixou de fora."
        ]
      },
      {
        "title": "Cultura contemporânea e leitura intercultural",
        "explanation": "A produção cultural contemporânea de comunidades hispanofalantes inclui cinema, música, literatura, arte digital, esportes e formas de participação pública diversas. Artistas podem misturar idiomas e linguagens, sem perder legitimidade cultural por utilizar tecnologia ou referências internacionais. Uma leitura intercultural busca compreender contextos e diferenças de sentido em vez de classificar expressões como exóticas ou mais autênticas apenas pela aparência tradicional. A circulação comercial pode ampliar públicos e também selecionar representações específicas; números de visualizações não medem qualidade nem aprovação universal. Ao analisar texto de espanhol numa prova, observe o gênero, o vocabulário regional e a finalidade comunicativa, preservando perspectiva do produtor da mensagem. O reconhecimento de diversidade não exige concordar com qualquer prática: debates sobre direitos e desigualdades continuam possíveis com respeito e fundamento.",
        "example": "Uma série feita por equipe de país hispanofalante pode combinar referências locais e formatos internacionais; a mistura não a torna automaticamente menos representativa da experiência dos criadores.",
        "pitfall": "Afirmar que cultura legítima deve permanecer sem mudanças ou que sucesso comercial representa a opinião de toda a sociedade.",
        "steps": [
          "Considere a autoria e o gênero antes de apresentar uma produção cultural como nacional.",
          "Discuta representatividade e alcance da obra sem impor autenticidade única ou juízo de superioridade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que países hispanofalantes não possuem necessariamente uma cultura única?",
        "hint": "Idioma e história cultural são dimensões diferentes.",
        "solution": "Compartilhar espanhol não elimina línguas, trajetórias, práticas e diferenças sociais próprias de distintas comunidades."
      },
      {
        "level": "basic",
        "prompt": "Cite uma língua da América Latina que convive historicamente com o espanhol.",
        "hint": "Considere quéchua ou guarani.",
        "solution": "Quéchua e guarani são exemplos de línguas presentes em partes da América Latina, com diferentes situações de uso e reconhecimento."
      },
      {
        "level": "intermediate",
        "prompt": "O que há de problemático em afirmar que uma festa representa todos os habitantes de um país?",
        "hint": "Há diversidade interna de comunidades e práticas.",
        "solution": "Uma festa pode ser regional ou específica de grupos; tratá-la como universal apaga experiências de outras populações."
      },
      {
        "level": "intermediate",
        "prompt": "Por que um anúncio turístico não deve ser lido como retrato cultural completo?",
        "hint": "Publicidade escolhe imagens para finalidades próprias.",
        "solution": "O anúncio seleciona símbolos e paisagens para atrair atenção, omitindo outras práticas e condições de vida."
      },
      {
        "level": "advanced",
        "prompt": "Uma produção artística mistura espanhol e língua indígena. Isso diminui sua legitimidade cultural?",
        "hint": "Plurilinguismo pode ser expressão de identidade.",
        "solution": "Não. A mistura pode refletir experiências reais de artistas e comunidades, sem que exista padrão cultural puro obrigatório."
      },
      {
        "level": "advanced",
        "prompt": "Como estudar diferenças culturais sem etnocentrismo?",
        "hint": "Considere contexto e vozes dos produtores.",
        "solution": "É necessário identificar autoria, história e significados locais, sem usar costumes próprios como medida universal de superioridade."
      }
    ],
    "everyday": {
      "context": "Uma turma prepara mural de países hispanofalantes e decide colocar o mesmo prato, sotaque e festa em todas as páginas porque todos usam espanhol. Outra pessoa questiona a simplificação.",
      "question": "Por que compartilhar idioma não significa ter a mesma trajetória cultural e linguística?",
      "answer": "Cada país e comunidade possui histórias, línguas e práticas diversas. O mural deve situar fontes e origens específicas em vez de inventar cultura única.",
      "connections": [
        {
          "subject": "Espanhol",
          "topic": "Variação linguística e voseo",
          "reason": "Variações regionais de tratamento mostram diversidade dentro do próprio uso da língua espanhola."
        },
        {
          "subject": "Sociologia",
          "topic": "Cultura e etnocentrismo",
          "reason": "O estudo de práticas culturais exige evitar estereótipos e comparar perspectivas sem impor hierarquias."
        }
      ]
    }
  },
  {
    "subject": "Filosofia",
    "topic": "Platão e a teoria das ideias",
    "objective": "Compreender distinções platônicas entre mundo sensível e conhecimento inteligível, analisando alegoria da caverna e problemas de definição.",
    "sections": [
      {
        "title": "O que a teoria das Formas procura explicar",
        "explanation": "Na filosofia de Platão, a investigação de conhecimento e realidade inclui distinção entre objetos sensíveis, que mudam e podem ser percebidos, e Formas ou Ideias inteligíveis, relacionadas a princípios estáveis como justiça, beleza e igualdade. A apresentação escolar frequentemente fala em 'dois mundos', mas essa expressão é simplificação que exige leitura cuidadosa dos diálogos. A questão é como reconhecer algo como justo quando ações e opiniões particulares divergem e mudam. As Formas não são pensamentos privados ou ideias passageiras que alguém inventa; na abordagem platônica, constituem realidades inteligíveis investigadas filosoficamente. A proposta se relaciona a discussões sobre matemática, definição e educação, sem se confundir com descrição científica de dimensões físicas invisíveis. O aluno deve distinguir tese filosófica de fato experimental comprovado.",
        "example": "Duas figuras desenhadas podem ser aproximadamente circulares sem coincidirem com a definição geométrica ideal de círculo, comparação útil para introduzir a diferença platônica entre exemplos e forma inteligível.",
        "pitfall": "Afirmar que Platão defendia um universo paralelo físico fotografável ou que Formas são preferências pessoais de qualquer indivíduo.",
        "steps": [
          "Formule o problema de definir um conceito a partir de exemplos imperfeitos.",
          "Diferencie investigação filosófica sobre conhecimento de hipótese física experimental."
        ]
      },
      {
        "title": "Alegoria da caverna e educação crítica",
        "explanation": "Na República, a alegoria da caverna apresenta prisioneiros que tomam sombras por realidade e descreve processo difícil de mudança de perspectiva por educação. A interpretação relaciona imagens sensíveis, conhecimento, formação e responsabilidade, mas não exige traduzir cada elemento para um objeto contemporâneo fixo. A saída da caverna simboliza esforço intelectual e transformação de critérios de compreensão, enquanto o retorno envolve tensão entre quem questiona e quem permanece preso a aparências. Não significa que toda experiência sensorial seja inútil nem que qualquer pessoa que discorde de nós esteja 'na caverna'. O pensamento filosófico exige argumentos e exame de pressupostos, não a apropriação da alegoria como insulto a interlocutores. A leitura de um fragmento deve observar a sequência narrativa e os problemas conceituais que ela ilustra.",
        "example": "Uma pessoa confunde popularidade de um boato com verdade; a comparação com sombras ajuda a questionar aparências, mas checagem de fatos exige evidências concretas além da analogia.",
        "pitfall": "Transformar a alegoria em prova de que opiniões próprias são superiores ou reduzir os prisioneiros a grupos sociais reais sem justificativa.",
        "steps": [
          "Identifique que relação a imagem das sombras estabelece entre aparência e conhecimento.",
          "Discuta o papel da educação sem classificar pessoas discordantes como incapazes por definição."
        ]
      },
      {
        "title": "Definições, diálogo e limites da interpretação",
        "explanation": "Os diálogos platônicos trabalham perguntas como 'o que é justiça?' e examinam respostas aparentemente intuitivas, mostrando que listar ações consideradas justas não equivale necessariamente a estabelecer definição coerente de justiça. Muitas obras utilizam Sócrates como personagem, o que exige cautela para distinguir o Sócrates histórico da construção literária e filosófica de Platão. Um argumento sobre essência pode ser contestado por diferentes tradições, e o estudo deve apresentar essa proposta como posição filosófica situada, não consenso universal. Ao analisar uma definição, teste se ela é circular, se exclui casos relevantes ou se inclui exemplos contraditórios. O aprendizado conecta filosofia a lógica, ética e leitura crítica: uma palavra compartilhada pode esconder sentidos diferentes. A boa resposta explica o problema conceitual antes de apenas decorar o termo 'mundo inteligível'.",
        "example": "Definir justiça como 'fazer o justo' é circular e não esclarece critério. Perguntar o que torna uma ação justa aproxima o estudante da investigação de conceitos.",
        "pitfall": "Confundir o personagem Sócrates dos diálogos com registro literal de todas as falas do Sócrates histórico.",
        "steps": [
          "Teste definições por exemplos, contraexemplos e possíveis circularidades.",
          "Diferencie posição platônica de outras perspectivas sobre conhecimento e realidade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual contraste é central na exposição escolar da teoria das Ideias de Platão?",
        "hint": "Considere sensível e inteligível.",
        "solution": "A distinção contrapõe objetos percebidos pelos sentidos e Formas inteligíveis relacionadas a conceitos estáveis na filosofia platônica."
      },
      {
        "level": "basic",
        "prompt": "O que as sombras simbolizam na alegoria da caverna em leitura introdutória?",
        "hint": "Pense em aparências confundidas com realidade.",
        "solution": "As sombras podem representar aparências tomadas como conhecimento suficiente, enquanto o percurso aponta a investigação crítica."
      },
      {
        "level": "intermediate",
        "prompt": "Por que desenhar círculos imperfeitos pode ajudar a explicar Formas platônicas?",
        "hint": "Compare exemplos concretos e definição geométrica.",
        "solution": "Os desenhos variam e possuem imperfeições, enquanto a definição ideal é estável, analogia útil para a distinção filosófica."
      },
      {
        "level": "intermediate",
        "prompt": "A alegoria autoriza dizer que qualquer pessoa que discorde está 'na caverna'?",
        "hint": "Metáfora não substitui argumento.",
        "solution": "Não. A alegoria permite discutir educação e aparências, mas não demonstra inferioridade intelectual de interlocutores."
      },
      {
        "level": "advanced",
        "prompt": "Por que 'justiça é fazer o justo' constitui definição problemática?",
        "hint": "A explicação repete o termo definido.",
        "solution": "A definição é circular e não estabelece critério para distinguir ações justas de injustas."
      },
      {
        "level": "advanced",
        "prompt": "Por que Sócrates nos diálogos não é automaticamente registro histórico literal?",
        "hint": "Platão compôs obras filosóficas com personagens.",
        "solution": "Os diálogos são construções literárias e argumentativas de Platão; sua relação com o Sócrates histórico exige análise de fontes."
      }
    ],
    "everyday": {
      "context": "Uma turma discute por que dois desenhos diferentes podem representar o mesmo conceito de círculo e por que diferentes pessoas definem justiça de modos conflitantes.",
      "question": "Como a distinção platônica entre exemplos sensíveis e Formas ajuda a formular esse problema?",
      "answer": "Platão distingue casos percebidos, sujeitos a diferenças, de princípios inteligíveis usados para definir o que algo é, como círculo ideal ou justiça.",
      "connections": [
        {
          "subject": "Filosofia",
          "topic": "Sócrates e os sofistas",
          "reason": "O exame de definições e o diálogo crítico ajudam a contextualizar o personagem Sócrates e seus problemas filosóficos."
        },
        {
          "subject": "Filosofia",
          "topic": "Indução e dedução",
          "reason": "A análise da relação entre exemplos particulares e conceitos gerais se conecta a modos de formular e justificar conclusões."
        }
      ]
    }
  },
  {
    "subject": "Filosofia",
    "topic": "Ética e moral",
    "objective": "Distinguir normas morais e investigação ética, avaliar dilemas por razões e consequências e identificar limites de relativismo e regras rígidas.",
    "sections": [
      {
        "title": "Moral vivida e reflexão ética",
        "explanation": "Moral pode designar conjuntos de normas, valores e costumes que orientam comportamentos em comunidades, enquanto ética é frequentemente apresentada como investigação crítica sobre por que certas ações devem ser consideradas corretas, justas ou boas. A distinção é útil, mas não universal em toda tradição filosófica; autores podem empregar os termos de maneiras próximas ou diferentes. Cumprir uma norma social não significa que ela seja automaticamente justa, assim como discordar de um costume não prova superioridade moral de uma pessoa. Analisar um dilema exige identificar participantes, consequências, deveres e critérios explicitados. Uma regra pode ter objetivo de proteção e ainda produzir efeito injusto numa situação concreta; discutir isso requer argumentos, não apenas preferência pessoal. Questões de prova pedem frequentemente diferenciação entre descrição do costume e justificação de conduta.",
        "example": "Uma escola proíbe celulares durante todas as aulas; avaliar a regra eticamente exige perguntar por objetivos, efeitos e possíveis necessidades de acessibilidade, não apenas citá-la.",
        "pitfall": "Confundir existência de costume com prova de justiça ou afirmar que ética é só obedecer sem questionamento.",
        "steps": [
          "Identifique quais normas estão em jogo e quem é afetado por cada decisão.",
          "Formule razões que possam ser discutidas publicamente, em vez de apresentar só gosto pessoal."
        ]
      },
      {
        "title": "Deveres, consequências e virtudes como perspectivas",
        "explanation": "Diferentes correntes éticas destacam aspectos diversos. Em abordagens deontológicas, deveres e princípios podem limitar o que é permitido fazer, independentemente de vantagem imediata. Perspectivas consequencialistas avaliam efeitos das ações, embora não se reduzam necessariamente a 'qualquer meio serve se o resultado for bom'. Éticas das virtudes enfatizam caráter, hábitos e capacidades desenvolvidas na vida social. Uma situação pode gerar tensão: preservar confidencialidade e prevenir dano podem parecer deveres concorrentes, exigindo análise de contexto. Não existe fórmula simples que resolva todo conflito, e a apresentação escolar não deve transformar pensadores em caricaturas. Para avaliar uma resposta, explicite qual critério foi usado e examine objeções e efeitos de aplicá-lo a outras situações semelhantes.",
        "example": "Num projeto escolar, divulgar publicamente nome de estudante que errou pode ter alegada finalidade de correção, mas viola preocupações de respeito e produz possíveis danos sociais.",
        "pitfall": "Afirmar que ética das consequências permite qualquer ação, ou que ética do dever ignora toda complexidade do contexto.",
        "steps": [
          "Nomeie o critério ético principal empregado em cada justificativa apresentada.",
          "Teste limites da regra com situações comparáveis e possíveis objeções."
        ]
      },
      {
        "title": "Pluralidade moral, direitos e diálogo argumentativo",
        "explanation": "Comunidades possuem normas diferentes, mas reconhecer pluralidade cultural não exige aceitar violência ou discriminação como automaticamente legítimas. Debates éticos podem relacionar direitos fundamentais, autonomia, dignidade, efeitos sobre vulneráveis e responsabilidade de agentes. É importante distinguir investigação do sentido de uma prática e aprovação moral dela. A ética também envolve humildade sobre evidências: se não sabemos todas as consequências, uma recomendação deve declarar incertezas relevantes. No ambiente digital, compartilhar informação privada de outra pessoa pode violar confiança mesmo quando o autor da postagem considera a divulgação interessante. Em questões de cidadania, identifique quem decide, quem suporta custos e que argumentos justificam a regra. Uma análise sólida evita tanto relativismo automático quanto imposição arbitrária da experiência pessoal como medida universal.",
        "example": "Uma turma debate divulgar imagem constrangedora de colega para 'alertar os outros'. A análise considera consentimento, dignidade, consequências e alternativas menos invasivas.",
        "pitfall": "Tratar pluralidade cultural como autorização irrestrita para causar dano ou considerar opinião própria argumento suficiente sobre direitos.",
        "steps": [
          "Diferencie compreender o contexto de aprovar a prática moral avaliada.",
          "Reconheça direitos e possíveis consequências sem expor dados privados de pessoas reais."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual a distinção didática entre moral e ética?",
        "hint": "Uma descreve normas; a outra questiona justificações.",
        "solution": "Moral costuma indicar normas e costumes, enquanto ética examina criticamente fundamentos das ações; os termos variam conforme autores."
      },
      {
        "level": "basic",
        "prompt": "Uma norma existir há muito tempo prova que é justa?",
        "hint": "Tradição e justificação não são equivalentes.",
        "solution": "Não. A longevidade de uma regra não demonstra automaticamente legitimidade moral; seus efeitos e razões precisam ser examinados."
      },
      {
        "level": "intermediate",
        "prompt": "Que aspecto costuma ser central numa ética consequencialista?",
        "hint": "Observe resultados de ações.",
        "solution": "Ela avalia consequências moralmente relevantes das ações, conforme critérios específicos da corrente."
      },
      {
        "level": "intermediate",
        "prompt": "Como uma ética deontológica orientaria discussão de quebra de promessa?",
        "hint": "Considere deveres e princípios.",
        "solution": "Ela enfatizaria obrigações e justificações sobre manter compromissos, analisando eventuais conflitos de deveres."
      },
      {
        "level": "advanced",
        "prompt": "Por que análise de dilema deve considerar quem suporta os custos de uma decisão?",
        "hint": "Impactos podem ser distribuídos desigualmente.",
        "solution": "Porque pessoas afetadas podem enfrentar riscos e restrições diferentes, e uma justificação precisa considerar essas consequências e direitos."
      },
      {
        "level": "advanced",
        "prompt": "Compreender prática cultural equivale sempre a aprová-la?",
        "hint": "Método interpretativo e avaliação moral diferem.",
        "solution": "Não. É possível compreender significado e contexto de uma prática e ainda debater seus efeitos à luz de direitos e argumentos éticos."
      }
    ],
    "everyday": {
      "context": "Uma escola quer divulgar fotos de alunos que cometeram erros para intimidar outros, alegando que isso diminuirá problemas de comportamento. Alguns estudantes questionam a exposição pública.",
      "question": "Que critérios éticos ajudam a avaliar a proposta além da possível eficácia pretendida?",
      "answer": "É necessário examinar dignidade, consentimento, direitos, consequências e alternativas menos invasivas; uma finalidade alegada não justifica automaticamente qualquer meio.",
      "connections": [
        {
          "subject": "Filosofia",
          "topic": "Contratualismo: Hobbes, Locke e Rousseau",
          "reason": "Conceitos de direitos e legitimidade política ajudam a avaliar limites de regras impostas a uma comunidade."
        },
        {
          "subject": "Sociologia",
          "topic": "Cultura e etnocentrismo",
          "reason": "Reconhecer diversidade de normas morais exige interpretação contextual sem abandonar debates fundamentados sobre direitos."
        }
      ]
    }
  }
];
