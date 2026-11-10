import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Aulas originais Kognos, não oficiais, sem homologação docente. */
export const provaoDepthBatch41Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Biologia",
    "topicStart": "Níveis de organização da vida; classificação e nomenclatura binomial de Lineu; categorias…",
    "objective": "Distinguir níveis biológicos, nomes científicos e parentesco evolutivo sem confundir hierarquias ecológicas e taxonômicas.",
    "prerequisites": [
      "Leitura de dados e fontes da disciplina",
      "Conceitos introdutórios da área",
      "Interpretação de relações e condições de validade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Organização da vida",
        "explanation": "A célula constitui unidade estrutural dos seres vivos celulares. Em organismos multicelulares, células especializadas podem compor tecidos, que se articulam em órgãos e sistemas; entretanto, organismos unicelulares não apresentam tecidos e órgãos da mesma maneira. Na escala ecológica, população designa indivíduos da mesma espécie em área e intervalo definidos, comunidade reúne populações diferentes e ecossistema inclui fatores abióticos e suas interações. A biosfera engloba regiões da Terra com vida. O número de indivíduos não transforma uma população em comunidade: cem árvores da mesma espécie continuam pertencendo a uma população, ainda que sua área contenha outros seres vivos. É necessário definir escala espacial, período de amostragem e conceito operacional de espécie antes de comparar comunidades. O conceito biológico de espécie por isolamento reprodutivo não funciona universalmente para organismos assexuados ou fósseis.",
        "example": "Em um lago, 40 tilápias de uma espécie formam parte de uma população; tilápias, algas e insetos compõem parte da comunidade; acrescentando água, luz e nutrientes estudamos o ecossistema. Classifique cada componente antes de inferir relações.",
        "pitfall": "Não confunda população com comunidade nem atribua tecidos a organismos unicelulares.",
        [
                  "Separe os 40 indivíduos de tilápia como uma população da mesma espécie.",
                  "Inclua algas e insetos para formar a comunidade de populações diferentes.",
                  "Acrescente luz, água e nutrientes abióticos para classificar o sistema como ecossistema."
        ]
      },
      {
        "level": "intermediate",
        "title": "Classificação e binômios",
        "explanation": "A hierarquia taxonômica escolar costuma organizar domínio, reino, filo, classe, ordem, família, gênero e espécie. O nome binomial reúne gênero com inicial maiúscula e epíteto específico em minúscula, geralmente em itálico: Homo sapiens. O epíteto isolado não identifica a espécie, pois pode reaparecer em diferentes gêneros. A classificação reflete hipóteses de parentesco apoiadas em morfologia, genética e outras evidências; mudanças metodológicas podem reorganizar táxons. Um sistema tradicional de cinco reinos tem valor histórico, mas não representa sozinho a diversidade microbiana conhecida. A taxonomia não é uma escala de superioridade: pertencer a um grupo com mais espécies não torna seus integrantes mais evoluídos. Espécies do mesmo gênero compartilham classificação próxima, mas continuam espécies distintas. Nomes populares variam entre regiões e não substituem nomenclatura científica padronizada.",
        "example": "Compare Panthera leo e Panthera tigris: o primeiro termo identifica o mesmo gênero, e o segundo distingue espécies. Escreva os dois nomes com gênero maiúsculo e epíteto minúsculo. A semelhança do gênero não implica cruzamento fértil entre as espécies.",
        "pitfall": "Não trate o epíteto específico isolado como nome científico completo nem confunda gênero com espécie.",
        [
                  "Divida Panthera leo em gênero Panthera e epíteto leo.",
                  "Compare Panthera tigris: gênero igual, epíteto diferente, logo espécies distintas.",
                  "Aplique inicial maiúscula apenas ao gênero e itálico ao binômio completo."
        ]
      },
      {
        "level": "advanced",
        "title": "Filogenias e ancestrais",
        "explanation": "Uma árvore filogenética representa hipóteses de ancestralidade comum. A proximidade entre táxons depende do ancestral compartilhado mais recente, identificado por nós, e não da posição horizontal dos nomes na folha. Um clado reúne um ancestral e todos os seus descendentes reconhecidos na hipótese. Características semelhantes podem decorrer de homologia, por herança de ancestral comum, ou analogia, por evolução independente. Dados moleculares e fósseis ajudam a testar essas alternativas, mas árvores continuam modelos revisáveis. Girar ramos em torno de um nó não altera a topologia; portanto, a ordem visual das pontas não deve ser lida como uma escada de progresso. O comprimento dos ramos somente representa tempo ou quantidade de mudanças quando a legenda ou a escala do diagrama indicar isso. Bactérias atuais e mamíferos atuais são igualmente produtos de longas histórias evolutivas, sem hierarquia de perfeição.",
        "example": "Na árvore ((A,B),C), identifique primeiro o nó que reúne A e B; depois localize o nó que liga esse par a C. A e B têm ancestral comum mais recente entre si. Girar o ramo de A e B não modifica o parentesco.",
        "pitfall": "Não interprete a ponta mais à direita como organismo mais evoluído nem confunda analogia com homologia.",
        [
                  "Localize o nó interno que une A e B em ((A,B),C).",
                  "Compare esse nó com o nó mais antigo que reúne A, B e C.",
                  "Conclua que A e B compartilham ancestral mais recente, mesmo após girar ramos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Peixes, algas, água e luz em interação constituem:",
        "options": [
          "Uma espécie",
          "Uma população",
          "Um ecossistema",
          "Um órgão"
        ],
        "correctIndex": 2,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "Ecossistema inclui comunidade biológica e componentes físicos e químicos em interação. Uma população abrange indivíduos de uma mesma espécie e não inclui água e luz como integrantes vivos."
      },
      {
        "level": "intermediate",
        "prompt": "Qual nome segue a nomenclatura binomial?",
        "options": [
          "sapiens",
          "Homo sapiens",
          "Homo",
          "Homo sapiens sapiens"
        ],
        "correctIndex": 1,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "O nome binomial de uma espécie combina o gênero Homo, com inicial maiúscula, e o epíteto específico sapiens, em minúscula: Homo sapiens. A opção com três termos acrescenta um epíteto subespecífico, portanto não é um binômio. Gênero ou epíteto isolados não identificam corretamente a espécie. Na apresentação tipográfica, os dois termos são normalmente grafados em itálico."
      },
      {
        "level": "advanced",
        "prompt": "Na árvore ((A,B),C), qual par é mais próximo?",
        "options": [
          "A e C",
          "B e C",
          "Todos são iguais",
          "A e B"
        ],
        "correctIndex": 3,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "A e B compartilham nó ancestral mais recente entre si do que com C. A ordem gráfica das pontas pode ser girada sem mudar o parentesco representado."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Fisiologia humana básica: Compreensão dos principais sistemas do corpo humano e sua relação com…",
    "objective": "Relacionar circulação, hematose e regulação renal do meio interno distinguindo transporte, difusão e excreção.",
    "prerequisites": [
      "Leitura de dados e fontes da disciplina",
      "Conceitos introdutórios da área",
      "Interpretação de relações e condições de validade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Circulação e coração",
        "explanation": "O sistema cardiovascular transporta oxigênio, nutrientes, sinais hormonais e produtos metabólicos por meio de sangue, vasos e coração. Na circulação pulmonar, o ventrículo direito envia sangue aos pulmões e o átrio esquerdo recebe o retorno; na circulação sistêmica, o ventrículo esquerdo envia sangue aos tecidos e o átrio direito recebe o retorno. Artérias são definidas por transportar sangue para fora do coração, e veias por trazê-lo de volta: a artéria pulmonar carrega sangue relativamente pobre em oxigênio. Capilares oferecem superfícies delgadas de troca, enquanto hemoglobina transporta grande parte do O₂ nas hemácias. O débito cardíaco é produto da frequência cardíaca pelo volume sistólico, portanto frequência isolada não determina volume bombeado. A pressão e o fluxo variam entre compartimentos, e as trocas de substâncias dependem de gradientes. A circulação não produz oxigênio nem substitui a ventilação pulmonar.",
        "example": "Com frequência de 75 batimentos/min e volume sistólico de 70 mL/batimento, o débito é 75×70=5250 mL/min ou 5,25 L/min. Verifique as unidades e ressalve que a estimativa supõe volume sistólico aproximadamente constante.",
        "pitfall": "Não classifique artérias por oxigenação; use o sentido do fluxo em relação ao coração.",
        [
                  "Multiplique 75 batimentos/min por 70 mL/batimento e cancele a unidade batimento.",
                  "Obtenha 5250 mL/min e divida por 1000 para chegar a 5,25 L/min.",
                  "Confira que o resultado é um débito estimado, condicionado a volume sistólico estável."
        ]
      },
      {
        "level": "intermediate",
        "title": "Ventilação e hematose",
        "explanation": "A ventilação pulmonar movimenta ar entre o ambiente e os alvéolos; a hematose envolve difusão de O₂ e CO₂ pela barreira alvéolo-capilar. Na inspiração tranquila, a contração do diafragma aumenta volume torácico e reduz a pressão alveolar em relação à atmosférica. A expiração tranquila costuma resultar do recuo elástico, sem exigir contração muscular ativa intensa. A difusão dos gases depende de gradientes de pressão parcial, superfície disponível e espessura da barreira. Hemoglobina liga parte significativa do oxigênio transportado, enquanto grande parcela do CO₂ circula na forma de bicarbonato. A ventilação é diferente da respiração celular, processo metabólico de produção de ATP. Um alvéolo bem ventilado mas mal perfundido realiza troca ineficiente, demonstrando que circulação e ventilação precisam funcionar de modo integrado. Mudanças de CO₂ e pH participam da regulação nervosa da ventilação.",
        "example": "Se a pressão parcial alveolar de O₂ é 100 mmHg e a do sangue que chega é 40 mmHg, a diferença inicial de 60 mmHg favorece passagem do alvéolo ao sangue. Compare as pressões e identifique o sentido da difusão.",
        "pitfall": "Não confunda entrada de ar nos pulmões com a difusão através da parede alveolar.",
        [
                  "Anote PO₂ alveolar de 100 mmHg e PO₂ do sangue de 40 mmHg.",
                  "Calcule gradiente inicial 100−40=60 mmHg.",
                  "Conclua difusão de O₂ do alvéolo para o sangue enquanto o gradiente persistir."
        ]
      },
      {
        "level": "advanced",
        "title": "Filtração e homeostase renal",
        "explanation": "Os rins regulam água, eletrólitos, equilíbrio ácido-base e excreção de produtos nitrogenados. O filtrado glomerular inicial contém água e solutos pequenos, enquanto células e grandes proteínas são normalmente retidas em grande parte na circulação. Ao longo do néfron, a reabsorção devolve substâncias ao sangue e a secreção acrescenta substâncias ao fluido tubular. A urina final não equivale ao filtrado inicial, pois grande volume de água e diversos solutos são recuperados. ADH participa da regulação de reabsorção hídrica, mas os resultados dependem de osmolaridade, volemia e outros sinais. A filtração exige perfusão renal e pressões adequadas; alterações circulatórias podem modificar o processo. O rim possui ainda funções endócrinas, mostrando que a homeostase depende de múltiplos sistemas. Uma alteração isolada de volume urinário não é diagnóstico suficiente, pois ingestão hídrica, temperatura e outros fatores interferem.",
        "example": "Em um modelo com 180 L de filtrado por dia e 1,5 L de urina final, o volume líquido recuperado é 178,5 L. Subtraia os volumes e destaque que solutos apresentam taxas de reabsorção diferentes.",
        "pitfall": "Não trate filtrado glomerular como urina pronta nem suponha que tudo o que foi filtrado será eliminado.",
        [
                  "Registre 180 L/dia filtrados e 1,5 L/dia excretados em urina.",
                  "Subtraia 180−1,5=178,5 L/dia de água recuperada no modelo.",
                  "Não interprete a diferença como recuperação idêntica de todos os solutos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual vaso sai do ventrículo direito?",
        "options": [
          "Aorta",
          "Artéria pulmonar",
          "Veia cava",
          "Veia pulmonar"
        ],
        "correctIndex": 1,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "A artéria pulmonar conduz sangue do ventrículo direito aos pulmões. A definição de artéria depende do fluxo para fora do coração, independentemente da oxigenação."
      },
      {
        "level": "intermediate",
        "prompt": "O oxigênio atravessa a barreira alvéolo-capilar principalmente por:",
        "options": [
          "Transporte ativo",
          "Osmose",
          "Difusão",
          "Contração arterial"
        ],
        "correctIndex": 2,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "O O₂ difunde-se conforme diferença de pressão parcial entre alvéolo e sangue. A ventilação mantém condições para troca, mas não bombeia diretamente O₂ pela membrana."
      },
      {
        "level": "advanced",
        "prompt": "A recuperação de água do filtrado renal é denominada:",
        "options": [
          "Reabsorção tubular",
          "Filtração glomerular",
          "Excreção urinária",
          "Ventilação"
        ],
        "correctIndex": 0,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "A reabsorção tubular transfere água e solutos do fluido tubular para o sangue. Filtração forma o filtrado e excreção corresponde ao material eliminado."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Ideias evolucionistas de J. B. Lamarck, C. Darwin, A. R. Wallace; ideias fixistas; Teoria…",
    "objective": "Distinguir explicações históricas e mecanismos atuais de evolução sem atribuir intenção à variação hereditária.",
    "prerequisites": [
      "Leitura de dados e fontes da disciplina",
      "Conceitos introdutórios da área",
      "Interpretação de relações e condições de validade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fixismo e Lamarck",
        "explanation": "Perspectivas fixistas sustentavam que espécies não mudavam historicamente, embora existissem diferentes formulações religiosas e naturalistas. Lamarck, no início do século XIX, propôs uma visão transformista em que ambiente e hábitos contribuiriam para mudanças e em que caracteres adquiridos pelo uso ou desuso poderiam ser transmitidos. Essa hipótese de herança não explica de modo geral a genética moderna, mas a importância histórica de Lamarck inclui defender transformação das espécies num contexto anterior ao desenvolvimento da genética cromossômica. Comparar teorias requer separar a constatação de transformação ao longo do tempo do mecanismo específico proposto. A história da ciência não deve ser descrita como mera sequência de erros pessoais: evidências e métodos disponíveis mudaram. O exemplo tradicional do pescoço das girafas é simplificação didática, não descrição completa da obra de Lamarck. A crítica atual ao mecanismo de uso e desuso não significa negar que condições ambientais afetem o desenvolvimento de indivíduos.",
        "example": "Compare duas hipóteses: uma afirma que esticar um órgão durante a vida altera características herdadas pelos filhos; outra considera variações herdáveis já presentes antes de mudanças ambientais. A primeira corresponde a mecanismo lamarckista histórico, a segunda permite raciocínio seletivo.",
        "pitfall": "Não atribua a Lamarck conhecimento de DNA e mutações dirigidas nem reduza sua contribuição a uma caricatura.",
        [
                  "Identifique na primeira hipótese a transmissão de mudança adquirida pelo uso do órgão.",
                  "Na segunda hipótese, identifique variação herdável preexistente na população.",
                  "Compare: herança de caracteres adquiridos é explicação histórica lamarckista; seleção atua sobre variações herdáveis."
        ]
      },
      {
        "level": "intermediate",
        "title": "Darwin, Wallace e seleção",
        "explanation": "Darwin e Wallace formularam independentemente explicações por seleção natural, apresentadas conjuntamente em 1858. Indivíduos de uma população diferem em características, algumas herdáveis; em determinado ambiente, certas variantes podem aumentar sobrevivência e sucesso reprodutivo. Se portadores deixam em média mais descendentes viáveis, variantes associadas podem aumentar em frequência entre gerações. A seleção não tem intenção nem objetivo de produzir organismos perfeitos. Uma característica vantajosa num ambiente pode ser desvantajosa em outro, e mutações não surgem porque os indivíduos necessitam delas. A aptidão biológica envolve reprodução relativa, não força física ou longevidade isoladas. Darwin também reuniu evidências de ancestralidade comum, e a integração com a genética mendeliana ocorreu posteriormente. Seleção artificial difere porque humanos escolhem reprodutores conforme objetivos próprios; seleção natural depende de condições ecológicas e diferenças de reprodução.",
        "example": "Se portadores da variante A deixam em média três descendentes férteis e portadores de a deixam um, A pode aumentar em frequência, caso a diferença seja herdável e se mantenha. A vantagem é contextual e não demonstra surgimento dirigido de A.",
        "pitfall": "Não diga que indivíduos evoluem geneticamente por esforço consciente durante a vida.",
        [
                  "Compare três descendentes férteis por portador de A com um por portador de a.",
                  "Estabeleça que a diferença de sucesso reprodutivo pode elevar A se a característica for herdável.",
                  "Evite concluir que o ambiente criou A por necessidade: seleção altera frequências existentes."
        ]
      },
      {
        "level": "advanced",
        "title": "Síntese moderna e deriva",
        "explanation": "A síntese evolutiva moderna integrou seleção, mutação, recombinação e genética de populações. Mutações introduzem variantes e podem ser neutras, vantajosas ou prejudiciais conforme o ambiente; recombinação reorganiza variantes existentes. Deriva genética é alteração aleatória de frequências alélicas, particularmente importante em populações pequenas, sem exigir vantagem reprodutiva. Fluxo gênico transporta alelos entre populações, e isolamento reprodutivo pode contribuir para divergência e especiação. Nem toda característica observada é adaptação, pois acaso, restrições históricas e desenvolvimento também influenciam organismos. Resistência bacteriana a antibióticos ilustra seleção: variantes resistentes podem existir antes da exposição, e o tratamento favorece sua frequência ao eliminar competidores suscetíveis. O antibiótico não precisa induzir uma mutação específica para cada célula. Para distinguir mecanismos, examine tamanho populacional, padrões de reprodução e evidências de vantagem consistente.",
        "example": "Em 100 bactérias, cinco são resistentes antes do tratamento. Após exposição, sobrevivem quatro resistentes e uma suscetível: 4/5=80% dos sobreviventes são resistentes, contra 5% inicialmente. A frequência mudou por seleção no exemplo, não por necessidade dirigida.",
        "pitfall": "Não confunda toda alteração de frequências gênicas com seleção; deriva e migração também alteram populações.",
        [
                  "Calcule a frequência resistente inicial: 5/100=5%.",
                  "Calcule a frequência resistente entre sobreviventes: 4/(4+1)=80%.",
                  "Compare 5% e 80% sem atribuir mutação dirigida ao tratamento."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual ideia caracteriza o transformismo histórico de Lamarck?",
        "options": [
          "Imutabilidade de todas as espécies",
          "Herança de caracteres adquiridos pelo uso",
          "Mutações de DNA dirigidas",
          "Deriva genética universal"
        ],
        "correctIndex": 1,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "Lamarck propôs transformação e atribuiu importância ao uso, desuso e transmissão de caracteres adquiridos. A herança genética moderna não sustenta esse mecanismo como explicação geral."
      },
      {
        "level": "intermediate",
        "prompt": "Seleção natural exige:",
        "options": [
          "Mutações escolhidas",
          "Reprodução idêntica",
          "Variação herdável associada ao sucesso reprodutivo",
          "Busca de perfeição"
        ],
        "correctIndex": 2,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "A seleção depende de diferenças herdáveis que afetam reprodução em determinado ambiente. Não envolve vontade individual, intenção evolutiva nem garantia de progresso."
      },
      {
        "level": "advanced",
        "prompt": "Flutuação aleatória de alelos em população pequena é:",
        "options": [
          "Deriva genética",
          "Seleção artificial",
          "Herança por uso",
          "Convergência"
        ],
        "correctIndex": 0,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "Deriva genética é alteração estocástica de frequências alélicas, mais evidente em populações pequenas. Não requer que a variante favorecida seja adaptativamente superior."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Evolução humana (Hominídeos)",
    "objective": "Interpretar evolução humana como processo ramificado e analisar fósseis, genética e migrações sem hierarquias raciais.",
    "prerequisites": [
      "Leitura de dados e fontes da disciplina",
      "Conceitos introdutórios da área",
      "Interpretação de relações e condições de validade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Ancestralidade compartilhada",
        "explanation": "Humanos pertencem à ordem Primates e compartilham ancestrais com outros grandes primatas. A evolução humana não é uma escada que começa em chimpanzés atuais e termina em Homo sapiens: linhagens distintas coexistiram, divergiram e muitas se extinguiram. Humanos e chimpanzés vivos descendem de ancestrais compartilhados extintos, sem relação direta de descendência entre as espécies atuais. Hominidae, na classificação moderna, inclui grandes primatas; hominíneos designa frequentemente a linhagem humana após separação do ancestral compartilhado com chimpanzés. Bipedalismo, alterações dentárias e mudanças de proporções corporais surgiram em mosaico, não num único momento. Estimativas cronológicas derivam de fósseis e genética e possuem incertezas. Um osso fragmentário pode apoiar inferências sobre locomoção, mas não revelar sozinho organização social ou linguagem. Árvores evolutivas devem apresentar ramificações e não setas de progresso inevitável.",
        "example": "Em um cladograma com chimpanzés e humanos em pontas atuais distintas, identifique o nó ancestral comum. Conclua parentesco evolutivo e não descendência direta do chimpanzé vivo. Considere que a data do nó é estimada por evidências.",
        "pitfall": "Não afirme que humanos descendem de chimpanzés atuais nem que evolução tem direção obrigatória.",
        [
                  "Identifique humanos e chimpanzés como ramos terminais atuais separados.",
                  "Localize o nó de ancestralidade compartilhada, anterior às duas linhagens.",
                  "Conclua parentesco comum, não descendência direta do chimpanzé atual."
        ]
      },
      {
        "level": "intermediate",
        "title": "Fósseis e cultura material",
        "explanation": "Fósseis de Australopithecus e Homo oferecem informações sobre anatomia e mudanças de linhagens, mas relações precisas de várias espécies permanecem debatidas. Estratigrafia e métodos de datação situam achados em contextos temporais, enquanto ferramentas e marcas de corte permitem estudar comportamentos. Encontrar ferramentas próximas a fósseis não demonstra automaticamente que uma espécie específica as fabricou: associação contextual e cronológica precisa ser avaliada. O aumento do volume craniano não foi uniforme nem constitui medida única de capacidade cultural. Diferentes linhagens podem ter coexistido e compartilhado ambientes, exigindo evitar narrativas lineares de substituição. Homo sapiens surgiu na África há centenas de milhares de anos, muito antes do desenvolvimento da agricultura e das cidades. Preservação desigual produz lacunas no registro arqueológico; ausência de fósseis em uma região não prova ausência de populações. Interpretações devem distinguir observação material de hipóteses comportamentais.",
        "example": "Ao encontrar uma lâmina de pedra próxima a restos fósseis, determine primeiro estratigrafia e idade da camada; depois examine marcas de uso e associação espacial. Só então avalie hipóteses de autoria, sem atribuir a ferramenta automaticamente à espécie presente.",
        "pitfall": "Não equipare cérebro maior a superioridade evolutiva nem associe toda ferramenta a Homo sapiens.",
        [
                  "Verifique se ferramenta e fóssil pertencem à mesma camada estratigráfica não perturbada.",
                  "Examine datação, marcas de uso e associação espacial dos vestígios.",
                  "Só atribua autoria à espécie com evidências adicionais; proximidade isolada é insuficiente."
        ]
      },
      {
        "level": "advanced",
        "title": "Dispersões e mistura genética",
        "explanation": "Evidências genéticas e arqueológicas sustentam origem africana de Homo sapiens e dispersões por diferentes regiões, com movimentos populacionais complexos. Houve encontros e mistura genética com linhagens como neandertais e denisovanos em parte da história humana. A presença de segmentos genéticos dessas linhagens em populações atuais não significa que todos tenham a mesma proporção ou que um grupo seja mais evoluído. A variação humana atual é contínua e resulta de migrações, seleção, deriva e história demográfica; categorias raciais sociais não correspondem a subespécies biológicas humanas discretas. Características como pigmentação e persistência da lactase possuem histórias evolutivas específicas e não fundamentam hierarquias intelectuais ou culturais. Genética não determina isoladamente linguagem, instituições ou valores de uma população. Estudos devem integrar evidências moleculares, arqueológicas e históricas, com atenção a incertezas e representatividade das amostras. Dispersão humana não ocorreu necessariamente em uma única onda.",
        "example": "Compare amostras hipotéticas com 2% e 0,5% de segmentos de ancestralidade neandertal. A diferença é 1,5 ponto percentual, mas não implica maior ou menor evolução. Interprete como sinal de histórias demográficas e misturas distintas.",
        "pitfall": "Não converta ancestralidade genética em hierarquia racial nem reduza dispersões a uma migração única.",
        [
                  "Subtraia 2%−0,5%=1,5 ponto percentual de diferença entre amostras.",
                  "Interprete as porcentagens como sinais possíveis de histórias de mistura distintas.",
                  "Não transforme proporção de ancestralidade em escala de evolução ou valor biológico."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Humanos e chimpanzés atuais:",
        "options": [
          "Descendem diretamente uns dos outros",
          "Não possuem parentesco",
          "Compartilham ancestrais comuns extintos",
          "São a mesma espécie"
        ],
        "correctIndex": 2,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "Humanos e chimpanzés vivos pertencem a linhagens distintas, ligadas por ancestrais comuns. A evolução é ramificada e não uma fila de espécies atuais."
      },
      {
        "level": "intermediate",
        "prompt": "A autoria de uma ferramenta fóssil requer:",
        "options": [
          "Associação contextual robusta",
          "Maior volume craniano",
          "Somente material de pedra",
          "Agricultura no local"
        ],
        "correctIndex": 0,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "Atribuir ferramentas a uma espécie exige estratigrafia, datação e associação arqueológica suficiente. Proximidade simples não identifica o fabricante com segurança."
      },
      {
        "level": "advanced",
        "prompt": "Segmentos genéticos neandertais em pessoas atuais indicam:",
        "options": [
          "Ausência de migrações",
          "Identidade de todos os grupos",
          "Superioridade biológica",
          "Mistura histórica entre linhagens"
        ],
        "correctIndex": 3,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "A presença de segmentos compartilhados sustenta episódios de cruzamento entre linhagens humanas. Proporções variam e não estabelecem graus de evolução."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "A democracia ateniense e a cidadania em Roma",
    "objective": "Comparar instituições e exclusões políticas de Atenas e Roma sem projetar direitos modernos sobre sociedades antigas.",
    "prerequisites": [
      "Leitura de dados e fontes da disciplina",
      "Conceitos introdutórios da área",
      "Interpretação de relações e condições de validade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Democracia ateniense",
        "explanation": "Na Atenas clássica, cidadãos masculinos adultos participavam de instituições como Assembleia, Conselho dos Quinhentos e tribunais populares. A democracia era em parte direta porque cidadãos presentes deliberavam e votavam medidas sem depender apenas de representantes eleitos. Mulheres, escravizados e estrangeiros residentes, chamados metecos, não tinham os mesmos direitos políticos, embora participassem da vida econômica e social. A experiência ateniense não representava todas as cidades gregas, e suas instituições mudaram ao longo do tempo, inclusive com interrupções oligárquicas. Sorteio de certos cargos e rotatividade distribuíam funções entre cidadãos, enquanto estrategos eram eleitos. Comparar Atenas com democracias contemporâneas exige distinguir deliberação pública histórica de sufrágio universal, garantias individuais e representação moderna. Uma assembleia numerosa não significa participação de todos os habitantes. Fontes preservadas frequentemente expressam perspectivas masculinas de grupos com poder e devem ser contextualizadas.",
        "example": "Se 300 entre 500 cidadãos presentes aprovam uma medida, a maioria é 300/500=60% dos votantes. Não conclua que 60% de todos os habitantes concordavam, pois grupos inteiros estavam excluídos da participação política.",
        "pitfall": "Não confunda democracia direta ateniense com sufrágio universal ou participação de toda população.",
        [
                  "Divida 300 votos favoráveis pelos 500 cidadãos presentes.",
                  "Multiplique 0,6 por 100 e obtenha 60% dos votantes presentes.",
                  "Não extrapole a 60% de toda a população: mulheres, escravizados e metecos eram excluídos."
        ]
      },
      {
        "level": "intermediate",
        "title": "República e cidadania romana",
        "explanation": "Na República romana, Senado, magistraturas e assembleias distribuíam funções políticas de maneira desigual. Conflitos entre patrícios e plebeus contribuíram para mudanças institucionais, e tribunos da plebe podiam exercer veto em circunstâncias determinadas. O Senado possuía grande influência política, mas a República romana não era equivalente à democracia direta ateniense. A cidadania romana combinava direitos e deveres jurídicos variáveis segundo época, sexo e condição social. Mulheres podiam possuir direitos patrimoniais em determinados contextos, mas não participavam das magistraturas políticas como cidadãos masculinos. Pessoas escravizadas eram excluídas da cidadania, embora a manumissão pudesse alterar status jurídico conforme condições específicas. A expansão territorial transformou relações de cidadania e alianças com comunidades conquistadas. Fontes letradas preservadas privilegiam elites e não representam igualmente experiências de todos os grupos. Instituições antigas não devem ser tratadas como parlamentos modernos com sufrágio universal.",
        "example": "Compare Senado e tribunato da plebe: o primeiro tinha prestígio e influência decisória; o segundo podia vetar certas medidas em defesa de plebeus. Identifique as funções antes de afirmar que ambos representavam igualmente toda a população.",
        "pitfall": "Não equipare a República romana a um parlamento contemporâneo nem atribua igualdade política a escravizados.",
        [
                  "Identifique o Senado como órgão de prestígio e influência na República.",
                  "Identifique o tribuno da plebe como magistrado com prerrogativa de veto em certas situações.",
                  "Compare funções e limites sem atribuir sufrágio universal a Roma."
        ]
      },
      {
        "level": "advanced",
        "title": "Expansão jurídica da cidadania",
        "explanation": "A cidadania romana mudou ao longo da República e do Império, por incorporação de comunidades, negociações e decisões jurídicas. Em 212 d.C., a Constitutio Antoniniana, associada a Caracala, ampliou cidadania à grande maioria dos habitantes livres do Império, com exceções debatidas. A medida pertence ao período imperial e não pode ser atribuída à República romana. Ampliação do status jurídico não significou igualdade social, econômica ou direito universal de participação política. Em Atenas clássica, a cidadania política estava associada à pólis e era restrita; em Roma imperial, o estatuto tornou-se instrumento de integração de territórios extensos. Termos como cidadão, república e democracia mudaram de sentido historicamente, exigindo atenção à cronologia e ao contexto institucional. Comparações devem identificar quais direitos eram concretamente exercidos, por quais grupos e sob quais limitações. Uma lei de 212 d.C. não descreve automaticamente o funcionamento da política romana cinco séculos antes.",
        "example": "Ordene três referências: democracia ateniense no século V a.C., República romana convencionalmente entre 509 e 27 a.C., e edito de Caracala em 212 d.C. A cronologia mostra que o edito pertence ao Império e não à República.",
        "pitfall": "Não confunda cidadania jurídica imperial com voto universal nem coloque o edito de 212 d.C. na República.",
        [
                  "Posicione Atenas clássica no século V a.C. na linha do tempo.",
                  "Posicione a República romana entre 509 e 27 a.C., segundo a periodização convencional.",
                  "Posicione o edito de Caracala em 212 d.C. e conclua que pertence ao Império."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quem era excluído da cidadania política ateniense?",
        "options": [
          "Todos os homens adultos",
          "Mulheres, escravizados e metecos",
          "Todos os proprietários",
          "Todos os nascidos na Ática"
        ],
        "correctIndex": 1,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "A cidadania política ateniense era restrita a cidadãos masculinos com requisitos específicos. Mulheres, escravizados e metecos não exerciam os mesmos direitos políticos, embora integrassem a sociedade."
      },
      {
        "level": "intermediate",
        "prompt": "Qual instituição romana podia exercer veto em defesa da plebe?",
        "options": [
          "Conselho dos Quinhentos",
          "Eclésia",
          "Tribunato da plebe",
          "Consulado vitalício"
        ],
        "correctIndex": 2,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "Tribunos da plebe podiam vetar certas decisões e defender interesses plebeus. A instituição pertence à história republicana romana, não à organização ateniense."
      },
      {
        "level": "advanced",
        "prompt": "A Constitutio Antoniniana de 212 d.C. pertence ao:",
        "options": [
          "Império Romano",
          "Reino macedônico",
          "Período republicano inicial",
          "Século V a.C."
        ],
        "correctIndex": 0,
        "hint": "Consulte o mecanismo e o exemplo resolvido desta etapa.",
        "solution": "O edito de Caracala foi promulgado no Império e ampliou cidadania a grande parte dos habitantes livres. Não corresponde a sufrágio universal nem a igualdade social."
      }
    ]
  }
];
