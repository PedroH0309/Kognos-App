import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Aulas originais Kognos, não oficiais, sem homologação docente. */
export const provaoDepthBatch17Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Tratamento de água",
    "objective": "Analisar etapas físicas e químicas do tratamento de água, justificar a função de cada operação e avaliar limites de potabilidade e monitoramento.",
    "prerequisites": [
      "Misturas e separação",
      "Soluções aquosas",
      "Microrganismos e saúde pública"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Coagulação, floculação e decantação",
        "explanation": "A água captada em rios contém partículas suspensas, substâncias dissolvidas e microrganismos. Na coagulação, reagentes como sais de alumínio ou ferro, sob condições controladas de pH, reduzem a estabilidade elétrica de partículas coloidais. A floculação utiliza mistura mais lenta para favorecer choques e formação de agregados maiores. Na decantação, esses flocos sedimentam por gravidade, reduzindo a turbidez antes da filtração. São etapas distintas: não basta adicionar coagulante e esperar que todas as substâncias dissolvidas desapareçam. A dosagem precisa ser ajustada à água bruta e monitorada; excesso de reagente também pode prejudicar o processo. A turbidez é um indicador operacional, não uma medida direta de ausência de patógenos. Uma estação pode apresentar água visualmente transparente e ainda exigir desinfecção e análises microbiológicas. O raciocínio deve identificar o contaminante e a propriedade física ou química explorada em cada etapa.",
        "example": "Água com partículas coloidais recebe coagulante e mistura rápida; depois mistura lenta forma flocos e decantação remove sólidos. Identifique sucessivamente neutralização de cargas, agregação e sedimentação, sem afirmar que sais dissolvidos foram retirados. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não confunda aparência observável com mecanismo ou grandeza medida; separe definição e inferência.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Filtração, desinfecção e controle",
        "explanation": "Após a decantação, filtros de areia e outros meios granulares retêm partículas remanescentes por mecanismos de transporte, adesão e peneiramento. A filtração não é equivalente à desinfecção. A aplicação controlada de cloro ou outros desinfetantes reduz a viabilidade de microrganismos, e um residual de desinfetante pode proteger a rede de distribuição contra recontaminação. A eficiência depende de concentração, tempo de contato, temperatura, pH e características da água. Em alguns sistemas, correções de pH e fluoretação são realizadas conforme normas e políticas locais. A simples presença de cloro não prova potabilidade: análises físico-químicas e microbiológicas verificam parâmetros diferentes. Água subterrânea pode exigir outra sequência de operações, pois sua composição difere da água superficial. Para escolher um processo, compare o tipo de impureza, a escala e o padrão de qualidade pretendido, em vez de decorar uma sequência universal de etapas.",
        "example": "Se o filtro reduz turbidez mas a análise detecta coliformes, a água não está aprovada. A etapa de desinfecção deve ser avaliada por dose, contato e análise microbiológica; aparência limpa não substitui medição. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não suponha que uma relação de um caso valha sem verificar as condições de aplicação.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Limites, micropoluentes e distribuição",
        "explanation": "O tratamento convencional foi projetado principalmente para reduzir sólidos, matéria orgânica e riscos microbiológicos. Não remove necessariamente todos os pesticidas, sais dissolvidos ou compostos farmacêuticos. Carvão ativado pode adsorver certos compostos orgânicos; membranas e osmose reversa removem classes adicionais de contaminantes, mas exigem energia, manutenção e manejo do rejeito. Fervura pode inativar muitos agentes biológicos, mas não elimina metais dissolvidos e pode concentrá-los pela evaporação. A água tratada também pode sofrer contaminação em reservatórios e tubulações danificadas; por isso a potabilidade depende da captação até o ponto de consumo. Indicadores como turbidez, cloro residual, pH e testes microbiológicos respondem a perguntas diferentes e devem ser interpretados em conjunto. Um resultado dentro do limite para um parâmetro não autoriza afirmar que todos os demais foram atendidos. A avaliação deve respeitar normas vigentes e evidência laboratorial.",
        "example": "Se uma amostra contém sal dissolvido, decantação e filtro de areia não bastam. Compare remoção de sólidos suspensos com dessalinização por membranas e inclua o destino do concentrado como limitação técnica. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não generalize a partir de um exemplo; examine limites, evidências e explicações alternativas.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual operação favorece a formação de agregados maiores após a coagulação?",
        "options": [
          "Evaporação",
          "Floculação",
          "Cloração",
          "Fluoretação"
        ],
        "correctIndex": 1,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "A floculação usa mistura controlada para aproximar partículas desestabilizadas e formar flocos maiores, facilitando sua sedimentação. A cloração atua sobretudo na desinfecção. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "intermediate",
        "prompt": "Uma água filtrada e transparente pode conter microrganismos patogênicos?",
        "options": [
          "Não, transparência garante esterilidade",
          "Sim, porque filtração não substitui verificação e desinfecção",
          "Não, toda filtração remove vírus",
          "Sim, apenas se estiver salgada"
        ],
        "correctIndex": 1,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "A redução de turbidez não comprova ausência de patógenos. A desinfecção e os testes microbiológicos são necessários conforme o processo e os padrões aplicáveis. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "advanced",
        "prompt": "Qual processo é mais adequado para remover grande parte dos sais dissolvidos da água?",
        "options": [
          "Decantação simples",
          "Floculação apenas",
          "Osmose reversa, com gestão do rejeito",
          "Peneiramento grosso"
        ],
        "correctIndex": 2,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "Membranas de osmose reversa podem separar muitos íons dissolvidos, diferentemente de peneiras, floculação e decantação voltadas a partículas. O concentrado produzido exige manejo. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Velocidade e Aceleração: escalar média e instantânea",
    "objective": "Distinguir deslocamento e distância, velocidade média e instantânea e aceleração vetorial em problemas com unidades e referenciais explícitos.",
    "prerequisites": [
      "Grandezas e unidades SI",
      "Vetores e sinais",
      "Funções e gráficos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Distância, deslocamento e velocidade média",
        "explanation": "Distância percorrida é o comprimento total da trajetória e não pode ser negativa. Deslocamento é a diferença entre posição final e inicial, podendo ser positivo, negativo ou nulo em um eixo escolhido. Velocidade vetorial média é deslocamento dividido pelo intervalo de tempo, enquanto rapidez escalar média é distância total dividida pelo tempo. Se alguém caminha 100 m para leste e retorna 100 m para oeste em 50 s, percorre 200 m e tem rapidez média de 4 m/s, mas deslocamento zero e velocidade vetorial média nula. O sinal da velocidade depende do eixo orientado, não indica automaticamente aumento ou diminuição da rapidez. Converter 72 km/h para m/s requer dividir por 3,6, obtendo 20 m/s. Para resolver problemas, indique o referencial, a trajetória, o intervalo e se o enunciado pede grandeza escalar ou vetorial. A confusão entre distância e deslocamento é particularmente grave em movimentos de ida e volta.",
        "example": "Um atleta percorre 300 m para norte e 100 m para sul em 100 s. Distância=400 m e rapidez média=4 m/s; deslocamento=200 m norte e velocidade vetorial média=2 m/s norte. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não confunda aparência observável com mecanismo ou grandeza medida; separe definição e inferência.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Velocidade instantânea e aceleração",
        "explanation": "Velocidade instantânea corresponde ao limite da razão entre deslocamento e tempo quando o intervalo tende a zero; em gráfico posição-tempo, é a inclinação da tangente. A aceleração média é a variação da velocidade vetorial dividida pelo tempo, a=Δv/Δt, e a aceleração instantânea é a derivada temporal da velocidade. Em movimento retilíneo com aceleração constante, v=v₀+at. Um carro que passa de 4 m/s a 16 m/s em 3 s apresenta aceleração média (16−4)/3=4 m/s². Aceleração positiva não significa necessariamente aumento da rapidez: se a velocidade for negativa e a aceleração positiva, o corpo pode desacelerar até parar. Em trajetória curva, mesmo com rapidez constante, existe aceleração porque a direção da velocidade muda. Gráficos velocidade-tempo exigem distinguir inclinação, que representa aceleração, e área algébrica, que representa deslocamento. O valor da aceleração só é constante se o problema ou a evidência sustentar essa hipótese.",
        "example": "Para v inicial −10 m/s e v final −4 m/s em 2 s, a=(−4−(−10))/2=+3 m/s². A aceleração é positiva, mas o módulo da velocidade caiu de 10 para 4 m/s. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não suponha que uma relação de um caso valha sem verificar as condições de aplicação.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Aceleração centrípeta e interpretação de gráficos",
        "explanation": "No movimento circular uniforme, o módulo da velocidade permanece constante, mas o vetor velocidade gira continuamente. A aceleração centrípeta aponta para o centro da trajetória e tem módulo v²/r; não é uma nova força, mas o efeito da componente resultante radial. Um veículo a 10 m/s numa curva de raio 50 m tem aceleração centrípeta de 100/50=2 m/s². Se o raio dobra com velocidade fixa, essa aceleração cai à metade; se a velocidade dobra com raio fixo, ela quadruplica. Em gráficos de velocidade por tempo, áreas acima do eixo contam como deslocamentos positivos e abaixo como negativos, enquanto a distância total soma módulos das áreas. Aceleração variável exige integrar ou trabalhar com intervalos suficientemente pequenos, e a expressão v=v₀+at não deve ser aplicada com a constante a inventada. Uma trajetória curva pode combinar aceleração tangencial, que altera rapidez, e radial, que altera direção. Identificar essas componentes evita tratar toda aceleração como frenagem.",
        "example": "Em uma curva de raio 25 m, um veículo a 5 m/s tem ac=5²/25=1 m/s². Se aumentar para 10 m/s, ac=10²/25=4 m/s², mantendo o raio. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não generalize a partir de um exemplo; examine limites, evidências e explicações alternativas.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Após ir 80 m para leste e voltar 80 m em 40 s, a velocidade vetorial média é:",
        "options": [
          "4 m/s leste",
          "0 m/s",
          "2 m/s oeste",
          "8 m/s"
        ],
        "correctIndex": 1,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "A posição final coincide com a inicial, então Δx=0 e velocidade vetorial média=0/40=0 m/s. A rapidez média seria 160/40=4 m/s. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "intermediate",
        "prompt": "Um móvel passa de 5 m/s a 17 m/s em 4 s. A aceleração média é:",
        "options": [
          "12 m/s²",
          "5,5 m/s²",
          "3 m/s²",
          "48 m/s²"
        ],
        "correctIndex": 2,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "A variação de velocidade é 17−5=12 m/s. Dividindo pelo intervalo de 4 s, a aceleração média é 3 m/s², não a variação isolada. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "advanced",
        "prompt": "Se a rapidez em uma curva de raio fixo dobra, a aceleração centrípeta:",
        "options": [
          "Dobra",
          "Cai à metade",
          "Permanece igual",
          "Quadruplica"
        ],
        "correctIndex": 3,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "Como ac=v²/r, substituir v por 2v produz (2v)²/r=4v²/r. A direção continua voltada ao centro, mesmo que a rapidez seja constante durante a curva. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Noções básicas de reprodução assexuada e sexuada dos animais",
    "objective": "Comparar mecanismos de reprodução animal, origem da variabilidade genética e limites de generalizações sobre fecundação e desenvolvimento.",
    "prerequisites": [
      "Mitose e meiose",
      "DNA e cromossomos",
      "Ciclos de vida"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Reprodução assexuada e clones",
        "explanation": "Na reprodução assexuada, um único indivíduo pode originar descendentes sem fusão de gametas. Brotamento ocorre em alguns cnidários, como hidras, e fragmentação seguida de regeneração é observada em certos invertebrados, como planárias. A reprodução por partenogênese envolve desenvolvimento de óvulo sem fecundação e possui mecanismos genéticos diversos; não deve ser confundida automaticamente com produção de clones idênticos. Descendentes de reprodução assexuada tendem a apresentar grande semelhança genética, mas mutações e diferenças ambientais podem produzir variações. Regenerar uma parte do corpo não significa necessariamente que toda espécie possa formar um novo indivíduo a partir de qualquer fragmento. A vantagem potencial é multiplicar-se sem encontrar parceiro; a desvantagem pode ser menor recombinação genética entre descendentes, dependendo do mecanismo. A escolha entre estratégias não é uma hierarquia universal de evolução, mas uma resposta a histórias de vida e ambientes.",
        "example": "Uma hidra forma um broto por divisões celulares; o broto cresce e se separa. Identifique ausência de fusão de gametas e compare com regeneração de planárias, que depende da capacidade de reconstrução corporal. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não confunda aparência observável com mecanismo ou grandeza medida; separe definição e inferência.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Meiose, gametas e fecundação",
        "explanation": "Na reprodução sexuada típica, gametas haploides são formados por meiose e sua fusão restaura a diploidia do zigoto. A meiose reduz o número de conjuntos cromossômicos e cria combinações novas por segregação independente e recombinação, enquanto a fecundação combina material genético de dois gametas. Fecundação externa é comum em muitos animais aquáticos, mas não ocorre em todos; fecundação interna é frequente em vários grupos terrestres, sem ser exclusiva deles. O desenvolvimento embrionário pode ocorrer em ovos depositados no ambiente ou no interior do corpo materno, e essas classificações não são equivalentes ao local da fecundação. Um indivíduo diploide 2n=8 pode produzir gametas com n=4, que ao se unirem originam zigoto 2n=8. A reprodução sexuada não garante descendentes mais adaptados: aumenta combinações possíveis, cuja vantagem depende de seleção e condições ambientais.",
        "example": "Em espécie com 2n=12, a meiose produz gametas com n=6. Na fecundação, 6 cromossomos de cada gameta formam zigoto 2n=12; a mitose posterior mantém esse número nas células somáticas. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não suponha que uma relação de um caso valha sem verificar as condições de aplicação.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Ciclos complexos e custo reprodutivo",
        "explanation": "Alguns animais alternam fases ou estratégias reprodutivas em seu ciclo de vida. Em certas espécies de cnidários, pólipos podem se multiplicar assexuadamente, enquanto medusas produzem gametas; não se deve generalizar esse padrão a todos os cnidários. A partenogênese em insetos pode gerar machos haploides em sistemas haplodiploides, como ocorre em muitos himenópteros, mas outros mecanismos de determinação sexual existem. A reprodução envolve custos energéticos de gametas, corte, cuidado parental e dispersão, e a seleção natural atua sobre sucesso reprodutivo ao longo do tempo, não apenas sobre quantidade de filhotes. A fecundação externa pode depender fortemente de sincronia e água, enquanto a interna frequentemente requer estruturas e comportamentos especializados. Comparações precisam considerar sobrevivência dos descendentes, ambiente e variabilidade genética, evitando afirmar que uma estratégia é sempre superior. Dados de uma espécie não bastam para inferir toda a diversidade animal.",
        "example": "Num ciclo com pólipo assexuado e medusa sexuada, localize a produção de brotos no pólipo e de gametas na medusa; a fecundação forma zigoto, cujo desenvolvimento origina nova fase. Não confunda alternância de formas com meiose em todas as etapas. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não generalize a partir de um exemplo; examine limites, evidências e explicações alternativas.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual exemplo caracteriza reprodução assexuada em animais?",
        "options": [
          "Fusão de espermatozoide e óvulo",
          "Brotamento em hidras",
          "Fecundação cruzada",
          "Formação de zigoto por gametas"
        ],
        "correctIndex": 1,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "No brotamento, um novo indivíduo se desenvolve a partir do organismo parental sem fusão de gametas. Fecundação e formação de zigoto por gametas são características de reprodução sexuada. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "intermediate",
        "prompt": "Em espécie animal diploide 2n=10, gametas formados por meiose típica possuem:",
        "options": [
          "20 cromossomos",
          "10 cromossomos",
          "5 cromossomos",
          "Nenhum cromossomo"
        ],
        "correctIndex": 2,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "A meiose reduz o número de conjuntos cromossômicos à metade: 2n=10 corresponde a n=5 nos gametas. A fecundação restaura a condição diploide. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação sobre partenogênese é correta?",
        "options": [
          "Sempre produz clones geneticamente idênticos",
          "É obrigatoriamente fecundação externa",
          "Ocorre apenas em mamíferos",
          "É desenvolvimento de óvulo sem fecundação e admite mecanismos distintos"
        ],
        "correctIndex": 3,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "A partenogênese é definida pelo desenvolvimento sem fecundação, mas os processos genéticos variam. Por isso não é correto presumir identidade genética absoluta nem restringi-la a mamíferos. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Mercantilismo e colonização",
    "objective": "Relacionar práticas mercantilistas, formação de impérios coloniais e circuitos atlânticos, distinguindo interesses econômicos, coerção e resistências.",
    "prerequisites": [
      "Expansão marítima europeia",
      "Formação de monarquias",
      "Escravidão e comércio atlântico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Mercantilismo como conjunto de práticas",
        "explanation": "Mercantilismo é uma categoria usada para descrever práticas econômicas de monarquias europeias entre os séculos XVI e XVIII, como protecionismo, monopólios, incentivo a manufaturas e busca de receitas comerciais. Não foi uma doutrina única aplicada igualmente por todos os governos. O metalismo valorizava a acumulação de metais preciosos, mas as políticas também procuravam fortalecer arrecadação, navegação e capacidade militar. Uma balança comercial favorável significava exportações superiores às importações em determinado recorte, embora fluxos de capitais, tributos e contrabando tornassem a economia real mais complexa. Na Inglaterra, os Atos de Navegação favoreceram interesses marítimos nacionais; na França, medidas associadas a Colbert apoiaram manufaturas e tarifas. Tais exemplos não devem ser confundidos com livre-comércio contemporâneo. A relação entre Estado e comerciantes foi marcada por alianças e conflitos, não por controle uniforme e absoluto da economia.",
        "example": "Uma Coroa eleva tarifas de tecidos importados e subsidia oficinas locais. Identifique a proteção da produção interna, o possível aumento de receitas e os custos para consumidores; isso é política mercantilista, não prova de resultado econômico garantido. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não confunda aparência observável com mecanismo ou grandeza medida; separe definição e inferência.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Exclusivo colonial e trabalho compulsório",
        "explanation": "O chamado exclusivo colonial procurava reservar circuitos de comércio das colônias a agentes autorizados pela metrópole. Na América portuguesa, açúcar, mineração e outros produtos se articularam a mercados atlânticos e ao tráfico transatlântico de africanos escravizados. A coerção sobre trabalhadores indígenas e africanos foi constitutiva de muitas atividades coloniais, e sua análise não pode reduzir pessoas a fatores produtivos. Monopólios e restrições legais conviveram com contrabando, comércio interno e negociações entre autoridades e elites locais. Uma colônia não funcionava como unidade econômica isolada: redes de crédito, transporte, abastecimento e interesses regionais ligavam diferentes territórios. A produção açucareira dependia de terras, engenhos, conhecimento técnico e trabalho escravizado, enquanto o ouro demandou estruturas de fiscalização e circulação interna distintas. Interpretar o sistema exige observar normas, práticas efetivas e resistências dos grupos submetidos à dominação.",
        "example": "Compare uma norma que exige venda de açúcar a comerciantes autorizados com registros de contrabando. A primeira expressa o exclusivo pretendido; os segundos revelam limites de fiscalização e estratégias dos agentes locais. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não suponha que uma relação de um caso valha sem verificar as condições de aplicação.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Crises, reformas e resistência colonial",
        "explanation": "A colonização europeia provocou deslocamentos populacionais, transformações ambientais e violência contra sociedades indígenas e africanas, mas também encontrou resistências políticas, culturais e militares. Quilombos, fugas, revoltas e preservação de práticas culturais demonstram que populações escravizadas não foram agentes passivos. No século XVIII, reformas fiscais e administrativas procuraram ampliar receitas metropolitanas em vários impérios, gerando tensões com grupos coloniais. A Inconfidência Mineira e a Conjuração Baiana tiveram composições sociais e projetos distintos; não podem ser tratadas como movimentos idênticos nem como independências já realizadas. A primeira se articulou sobretudo a setores de elite em Minas Gerais; a segunda envolveu participação popular mais ampla e demandas de igualdade social. Comparar fontes exige considerar autoria, interesse e silêncios documentais, sobretudo porque muitos registros foram produzidos por autoridades coloniais. O fim formal de monopólios não eliminou automaticamente desigualdades herdadas da escravidão e da concentração fundiária.",
        "example": "Ao comparar Inconfidência Mineira e Conjuração Baiana, identifique participantes, demandas e contexto fiscal. Registre diferenças sociais e propostas antes de concluir que ambas defendiam exatamente o mesmo projeto. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não generalize a partir de um exemplo; examine limites, evidências e explicações alternativas.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual prática se associa ao mercantilismo?",
        "options": [
          "Eliminação de todas as tarifas",
          "Proteção de manufaturas e comércio sob políticas régias",
          "Sufrágio universal",
          "Proibição de qualquer intervenção estatal"
        ],
        "correctIndex": 1,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "Medidas protecionistas, monopólios e incentivos comerciais caracterizaram muitas políticas mercantilistas. Elas variavam entre monarquias e não constituíam uma doutrina uniforme. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "intermediate",
        "prompt": "O exclusivo colonial pretendia:",
        "options": [
          "Reservar circuitos comerciais a agentes autorizados pela metrópole",
          "Garantir livre-comércio irrestrito",
          "Eliminar contrabando por definição",
          "Abolir a escravidão atlântica"
        ],
        "correctIndex": 0,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "O exclusivo buscava controlar transações coloniais em benefício de grupos autorizados. A existência de contrabando mostra limites práticos, e o sistema coexistiu com trabalho escravizado. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "advanced",
        "prompt": "Qual comparação entre Inconfidência Mineira e Conjuração Baiana é mais adequada?",
        "options": [
          "Ambas tiveram composição social idêntica",
          "Ambas conquistaram independência imediata",
          "A baiana teve participação popular mais ampla e propostas sociais distintas",
          "Nenhuma se relacionou a tensões coloniais"
        ],
        "correctIndex": 2,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "A Conjuração Baiana envolveu participação social mais ampla e pautas de igualdade diferentes das predominantes na Inconfidência Mineira. Nenhum desses movimentos conquistou independência imediata. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Óxidos e a chuva ácida",
    "objective": "Explicar formação e efeitos da deposição ácida por óxidos de enxofre e nitrogênio, com equações, limites e medidas de mitigação.",
    "prerequisites": [
      "Óxidos e nomenclatura",
      "Reações químicas e balanceamento",
      "pH e equilíbrio ácido-base"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Óxidos atmosféricos e acidez",
        "explanation": "A chuva natural apresenta acidez moderada devido principalmente ao CO₂ atmosférico dissolvido, que participa de equilíbrios envolvendo ácido carbônico. O problema da deposição ácida intensificada está ligado sobretudo a emissões de SO₂ e óxidos de nitrogênio, frequentemente designados NOₓ, provenientes de combustão e processos industriais. Na atmosfera, transformações químicas e fotoquímicas podem formar ácidos sulfúrico e nítrico, incorporados a gotas ou depositados na forma seca. Não é correto atribuir toda chuva ácida apenas ao dióxido de carbono ou afirmar que qualquer chuva de pH inferior a 7 representa poluição excepcional. O valor de referência de aproximadamente 5,6 para chuva pouco poluída é uma aproximação que varia com condições naturais. A identificação das fontes depende de composição de combustíveis, temperatura de combustão, meteorologia e medições ambientais. O fenômeno pode atingir áreas distantes das fontes emissoras por transporte atmosférico.",
        "example": "O SO₂ liberado por combustão pode ser oxidado a SO₃; depois SO₃+H₂O→H₂SO₄. Identifique emissão, transformação e incorporação em água; não confunda SO₂ diretamente com o ácido final. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não confunda aparência observável com mecanismo ou grandeza medida; separe definição e inferência.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Reações, materiais e ecossistemas",
        "explanation": "Uma rota simplificada de oxidação é 2SO₂+O₂→2SO₃, seguida de SO₃+H₂O→H₂SO₄. Para óxidos de nitrogênio, reações atmosféricas podem conduzir à formação de HNO₃, mas as rotas reais dependem de radicais, luz e outras espécies químicas. A deposição ácida pode aumentar a mobilização de alumínio em solos, reduzir a disponibilidade de nutrientes e afetar organismos aquáticos sensíveis. Em monumentos de calcário, o carbonato de cálcio reage com ácidos, contribuindo para desgaste; uma equação ilustrativa é CaCO₃+2H⁺→Ca²⁺+CO₂+H₂O. A velocidade de degradação depende de composição do material, umidade e exposição. Nem todo lago acidifica igualmente, pois rochas e solos com capacidade de tamponamento neutralizam parte da carga ácida. Comparar locais requer considerar emissões e capacidade química de neutralização, não apenas a distância de uma fábrica.",
        "example": "Para CaCO₃+2H⁺→Ca²⁺+CO₂+H₂O, um mol de carbonato consome dois mols de H⁺. Se houver 0,20 mol de H⁺ disponível, o máximo teórico consumido é 0,10 mol de CaCO₃. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não suponha que uma relação de um caso valha sem verificar as condições de aplicação.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Prevenção, monitoramento e atribuição",
        "explanation": "A redução de emissões de SO₂ pode envolver combustíveis com menor teor de enxofre e sistemas de dessulfurização dos gases; emissões de NOₓ podem ser reduzidas com controle de combustão e tecnologias catalíticas apropriadas. A calagem de um lago ou solo ácido pode elevar o pH local, mas não elimina a fonte regional de poluentes e pode produzir efeitos ecológicos adicionais. Medições de pH, sulfato, nitrato e deposição ao longo do tempo são mais informativas que uma observação isolada de chuva. O pH é logarítmico: uma redução de uma unidade representa aumento aproximado de dez vezes na atividade de H⁺, em condições comparáveis, e não uma alteração linear de 1%. No entanto, pH sozinho não quantifica toda a carga ácida nem o efeito ecológico, pois o tamponamento importa. Poluentes podem atravessar fronteiras, exigindo coordenação regional. A análise causal deve combinar inventários de emissões, circulação atmosférica e evidências químicas, sem atribuir qualquer dano ambiental automaticamente à chuva ácida.",
        "example": "Compare amostras de pH 5 e pH 4: em aproximação ideal, a segunda apresenta atividade de H⁺ dez vezes maior. Isso não implica automaticamente dano dez vezes maior, pois tamponamento e ecologia variam. O resultado depende das condições e do contexto explicitados; confira a interpretação e não estenda o exemplo a situações que exigem outras hipóteses.",
        "pitfall": "Não generalize a partir de um exemplo; examine limites, evidências e explicações alternativas.",
        "steps": [
          "Identifique dados, termos e fenômeno relevante.",
          "Execute o raciocínio específico com as relações apropriadas.",
          "Verifique condições, unidades ou evidências e interprete o resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual grupo de emissões contribui diretamente para deposição ácida intensificada?",
        "options": [
          "SO₂ e NOₓ",
          "Apenas N₂ e O₂",
          "Somente argônio",
          "Hélio e neônio"
        ],
        "correctIndex": 0,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "Dióxido de enxofre e óxidos de nitrogênio participam de transformações que formam ácidos fortes na atmosfera. Os demais gases listados não explicam esse mecanismo principal. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "intermediate",
        "prompt": "Quantos mols de H⁺ reagem com 0,5 mol de CaCO₃ pela equação CaCO₃+2H⁺→Ca²⁺+CO₂+H₂O?",
        "options": [
          "0,25 mol",
          "0,5 mol",
          "1,0 mol",
          "2,0 mol"
        ],
        "correctIndex": 2,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "A proporção estequiométrica é 1 mol de CaCO₃ para 2 mol de H⁺. Logo 0,5 mol de carbonato consome 1,0 mol de H⁺ se a reação ocorrer como representada. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      },
      {
        "level": "advanced",
        "prompt": "Entre chuvas de pH 5 e pH 4, a de pH 4 tem atividade de H⁺ aproximadamente:",
        "options": [
          "Duas vezes menor",
          "Dez vezes maior",
          "Igual",
          "Cem vezes menor"
        ],
        "correctIndex": 1,
        "hint": "Compare as definições e confira os dados e as condições do enunciado.",
        "solution": "A escala de pH é logarítmica; diminuir uma unidade corresponde a aumentar a atividade de H⁺ por fator aproximado de dez. O impacto ambiental depende também de tamponamento e outros fatores. A alternativa correta depende dessas condições; os demais distratores confundem conceitos, processos ou proporções e não satisfazem o problema."
      }
    ]
  }
];
