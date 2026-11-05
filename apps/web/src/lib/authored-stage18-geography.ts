import type {LessonBlueprint} from './authored-lesson-blueprint.ts';
export const stage18Geography:LessonBlueprint[]=[
  {
    "subject": "Geografia",
    "topic": "Projeções cartográficas",
    "objective": "Reconhecer distorções de áreas, formas e distâncias em mapas planos e comparar projeções conforme a finalidade.",
    "chapters": [
      [
        "A esfera não vira plano sem distorção",
        "Projeção cartográfica é transformação matemática que representa uma superfície terrestre curva numa superfície plana. Não é possível preservar simultaneamente todas as propriedades geométricas em mapa mundial. Diferentes projeções priorizam área, forma, direção ou determinadas distâncias, gerando distorções com distribuição desigual. Comparar dois mapas exige observar o tipo de projeção e a região de interesse.",
        "Em projeção cilíndrica conforme de Mercator, regiões em latitudes altas aparecem com áreas muito ampliadas em relação às próximas do Equador.",
        "Todo mapa-múndi plano mostra áreas e formas dos continentes sem qualquer distorção.",
        "Pergunte qual propriedade a projeção procura preservar antes de avaliar seu uso.",
        "Por que a Groenlândia pode parecer enorme em certos mapas?",
        "Considere ampliação de áreas em altas latitudes.",
        "Algumas projeções, como Mercator, ampliam visualmente regiões de altas latitudes para preservar ângulos localmente.",
        "Toda projeção plana da superfície terrestre introduz distorções; a escolha depende do uso cartográfico."
      ],
      [
        "Conforme não significa equivalente",
        "Projeções conformes preservam ângulos locais sob condições matemáticas, sendo úteis a certos usos de navegação; equivalentes preservam proporções de áreas, mas deformam outras propriedades. Uma projeção equidistante preserva distâncias em linhas ou direções específicas, não todas as distâncias globais. As categorias descrevem compromissos cartográficos, sem indicar mapa automaticamente mais verdadeiro.",
        "Comparar área da África e Europa exige cuidado se o mapa exagera regiões distantes do Equador.",
        "Uma projeção conforme preserva obrigatoriamente a área real de todos os países.",
        "Leia legendas e objetivo da representação antes de comparar dimensões.",
        "Qual propriedade é priorizada por projeções equivalentes?",
        "Pense em área, não forma.",
        "As projeções equivalentes preservam proporcionalidade de áreas, ainda que formas e ângulos possam ficar distorcidos.",
        "Conformidade refere-se a ângulos locais; não garante áreas corretas em todas as regiões."
      ],
      [
        "Escolher projeção implica escolher pergunta",
        "Mapas temáticos de população ou desmatamento podem exigir comparações de superfície, enquanto mapas de rotas têm outras necessidades. Além da projeção, escala, simbologia, dados e fonte influenciam interpretação. Um mapa não torna invisível toda a realidade, mas cada representação seleciona características para a pergunta proposta. Evite concluir extensão exata apenas pelo desenho do país.",
        "Um mapa global de áreas florestais precisa permitir comparação de superfície, favorecendo escolhas cartográficas adequadas a esse indicador.",
        "Existe uma projeção única ideal para qualquer pesquisa, rota e comparação geográfica.",
        "Explicite a pergunta geográfica antes de escolher o tipo de mapa.",
        "Por que projeção adequada a navegação pode não ser melhor para comparar territórios?",
        "Propriedades preservadas são diferentes.",
        "Uma projeção pode favorecer orientação e ângulos, mas deformar área; a comparação territorial requer outra prioridade.",
        "Projeção universal perfeita não existe, pois preservar uma propriedade frequentemente produz distorções em outras."
      ]
    ],
    "situation": [
      "Dois mapas-múndi representam o mesmo planeta, mas num deles a Groenlândia parece quase do tamanho da África. Uma turma conclui que os mapas retratam territórios diferentes.",
      "Como a projeção altera a aparência e o que deve ser consultado para comparar áreas corretamente?",
      "A projeção modifica representação de áreas e formas. Compare usando projeção apropriada à área e dados cartográficos, não apenas aparência visual."
    ],
    "links": [
      [
        "Geografia",
        "Escalas cartográficas",
        "Escala, projeção e propósito de mapa afetam a interpretação de distância e tamanho representados."
      ],
      [
        "Geografia",
        "Mapas temáticos e geotecnologias",
        "A projeção escolhida deve ser adequada à variável temática e à forma de comparação no mapa."
      ]
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Mapas temáticos e geotecnologias",
    "objective": "Ler legendas, classes, fontes e escalas de mapas temáticos e reconhecer limites de sensoriamento remoto e SIG.",
    "chapters": [
      [
        "Mapas temáticos precisam de variáveis definidas",
        "Um mapa temático representa distribuição espacial de variável como densidade populacional, precipitação ou uso do solo. A legenda indica classes ou símbolos; cores não significam intensidade automaticamente sem chave de leitura. A forma de agrupar faixas influencia padrões percebidos. Comparar taxas exige população de referência e data, não só valores absolutos entre municípios.",
        "Mapa de casos de doença por município pode parecer mais intenso em cidades populosas se mostrar contagens, não taxas por habitante.",
        "A cor mais escura sempre representa dado maior, independentemente da legenda ou da escala.",
        "Identifique variável, unidade, ano e intervalo de cada classe cartográfica.",
        "Um mapa mostra casos totais de uma doença. Podemos comparar diretamente risco entre municípios?",
        "Risco depende da população de referência.",
        "Não necessariamente. Seria preciso considerar taxas e critérios comparáveis, pois números absolutos refletem também tamanhos de população.",
        "Valores absolutos não revelam sozinhos frequência relativa; legenda e denominador da taxa importam."
      ],
      [
        "SIG integra camadas espaciais",
        "Sistemas de informações geográficas (SIG) armazenam e analisam camadas de dados localizados, como ruas, relevo, áreas verdes e escolas. Sobrepor camadas pode ajudar a investigar acessibilidade, mas não cria automaticamente precisão maior que os dados de origem. Escalas e datas diferentes podem produzir conclusões enganosas. Um mapa é instrumento de análise, não prova causal automática entre variáveis coincidentes.",
        "Uma prefeitura pode sobrepor localização de escolas e rede de ônibus para identificar possíveis barreiras de acesso.",
        "Se duas variáveis aparecem próximas num mapa, uma necessariamente causou a outra.",
        "Confira se camadas têm referência espacial, período e precisão compatíveis.",
        "Por que sobrepor escolas e linhas de ônibus pode ser útil?",
        "Observe conexões e distâncias.",
        "A análise pode indicar cobertura e possíveis áreas mal atendidas, embora tempos e condições reais ainda precisem ser medidos.",
        "Proximidade espacial ou correlação visual não demonstra causalidade sem outras evidências e mecanismos."
      ],
      [
        "Sensoriamento remoto e validação",
        "Imagens de satélite registram respostas de sensores a radiação e podem ajudar a monitorar vegetação, água e áreas urbanas. Elas não são fotografias sem interpretação: nuvens, resolução, data, algoritmos de classificação e verificação em campo influenciam resultados. Séries temporais devem manter métodos comparáveis. Diferenciar solo exposto de área urbanizada exige classes e validação.",
        "Uma imagem com nuvens pode ocultar parte da vegetação; comparar imagens de épocas diferentes exige reconhecer cobertura e resolução.",
        "Toda imagem de satélite mostra fielmente cada árvore e elimina qualquer necessidade de verificação.",
        "Observe data, resolução e presença de nuvens antes de comparar imagens.",
        "Por que uma classificação automática de vegetação deve ser validada?",
        "Sensores e algoritmos podem confundir classes.",
        "O resultado pode conter erros por resolução, nuvens, sazonalidade ou assinaturas espectrais semelhantes; validação melhora a confiabilidade.",
        "Sensoriamento remoto produz medidas indiretas com incertezas, não visão completa e infalível do terreno."
      ]
    ],
    "situation": [
      "Uma plataforma apresenta um mapa colorido de 'áreas verdes' da cidade, sem data ou legenda de classes. Estudantes tentam concluir quais bairros perderam vegetação desde o ano passado.",
      "Quais informações faltam antes de comparar o mapa com outros períodos?",
      "Faltam data, legenda, método de classificação, resolução e dados comparáveis; sem isso, a mudança aparente pode ser efeito do método."
    ],
    "links": [
      [
        "Geografia",
        "Projeções cartográficas",
        "A projeção e o sistema de referência interferem na sobreposição de camadas e nas comparações de área."
      ],
      [
        "Geografia",
        "Urbanização brasileira",
        "Mapas de serviços e expansão territorial ajudam a investigar padrões da urbanização sem confundir correlação com causa."
      ]
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Climas do Brasil e do mundo",
    "objective": "Distinguir tempo e clima, reconhecer fatores geográficos e interpretar padrões climáticos sem generalizar eventos isolados.",
    "chapters": [
      [
        "Clima depende de séries de longo prazo",
        "Tempo meteorológico descreve condições atmosféricas observadas em curto prazo; clima sintetiza padrões e variabilidade em períodos longos. Temperatura, precipitação, umidade e ventos são elementos climáticos, mas nenhum dia isolado define todo clima regional. Classificações climáticas utilizam critérios e médias, portanto limites podem variar por metodologia.",
        "Uma semana fria em cidade tropical não modifica sozinha sua classificação climática de longo prazo.",
        "Um dia de chuva intensa prova que o clima da cidade é sempre úmido em todos os meses.",
        "Compare períodos e não apenas um evento meteorológico.",
        "É correto refutar uma tendência climática global por causa de frente fria local?",
        "Considere escalas de tempo distintas.",
        "Não. Um episódio de tempo local não substitui análise de séries climáticas longas em escalas adequadas.",
        "Clima não é estado diário fixo, e episódios específicos podem ocorrer mesmo quando a tendência de longo prazo é diferente."
      ],
      [
        "Latitude, altitude e circulação",
        "Latitude influencia distribuição média da radiação solar, altitude frequentemente associa-se à redução de temperatura e massas de ar influenciam variações regionais. Maritimidade, continentalidade, relevo e vegetação também afetam condições locais. A influência de um fator depende de outros e não permite inferir clima exato de um ponto apenas pela latitude. No Brasil coexistem padrões amazônicos, semiáridos, tropicais e subtropicais, entre outros.",
        "Cidades em latitudes semelhantes podem ter temperaturas distintas se uma está em grande altitude e outra ao nível do mar.",
        "Cidades na mesma latitude possuem necessariamente temperatura e regime de chuva iguais.",
        "Analise combinação de fatores geográficos antes de classificar clima.",
        "Por que uma cidade serrana pode ser mais fria que outra litorânea na mesma latitude?",
        "Considere altitude e influência oceânica.",
        "A diferença de altitude e condições locais influencia temperatura média, mesmo com latitude semelhante.",
        "Latitude não age isoladamente; altitude, relevo, massas de ar e proximidade do oceano modificam condições."
      ],
      [
        "Padrões regionais e mudanças",
        "Climas do Brasil e do mundo possuem sazonalidades e variabilidade distintas, que afetam agricultura, infraestrutura e acesso à água. Mudança climática de longo prazo pode alterar médias e extremos, mas a atribuição de um evento específico requer dados e análise adequada. Interpretar climogramas exige ler unidades, escalas dos eixos, meses e séries usadas. Não extrapole informação de uma estação para um estado inteiro.",
        "Um climograma pode mostrar meses de maior precipitação sem indicar que chuva ocorre diariamente em todos eles.",
        "Um climograma com média mensal de chuva informa exatamente quantos dias choverá no mês.",
        "Compare variáveis e meses, mantendo unidades e período da série.",
        "Qual informação essencial se lê num climograma de temperatura e chuva?",
        "Observe eixos, meses e médias.",
        "O gráfico apresenta a distribuição mensal média de temperatura e precipitação conforme sua legenda, permitindo reconhecer sazonalidade.",
        "Médias mensais não especificam dias de chuva ou extremos futuros; descrevem resumos estatísticos."
      ]
    ],
    "situation": [
      "Uma família viaja para região serrana na mesma latitude da cidade litorânea em que mora e encontra temperatura menor. Um estudante afirma que isso seria impossível.",
      "Quais fatores além da latitude ajudam a explicar diferenças climáticas locais?",
      "Altitude, relevo, maritimidade e circulação atmosférica influenciam o clima; latitude sozinha não define temperatura e precipitação."
    ],
    "links": [
      [
        "Geografia",
        "Mudanças climáticas globais",
        "Padrões climáticos de longo prazo são necessários para analisar tendências e impactos do aquecimento global."
      ],
      [
        "Ciências",
        "Ciclos da água e do carbono",
        "Evaporação, condensação e precipitação ajudam a relacionar fenômenos atmosféricos e circulação da água."
      ]
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Biomas e formações vegetais",
    "objective": "Reconhecer biomas como conjuntos ecológicos com variações internas, influenciados por clima, solo, relevo e uso do território.",
    "chapters": [
      [
        "Bioma não é uma paisagem idêntica em todos os pontos",
        "Bioma é conceito de grande conjunto ecológico com condições climáticas e formações biológicas relacionadas, dependendo da classificação adotada. No Brasil, Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa e Pantanal são biomas de referência, mas apresentam heterogeneidade interna. O nome do bioma não determina espécie e paisagem únicas em cada lugar.",
        "O Cerrado inclui diferentes fitofisionomias, com áreas abertas e formações mais densas, não apenas um tipo de árvore.",
        "Toda área de um bioma possui exatamente a mesma vegetação e biodiversidade.",
        "Compare clima, solos e tipos de vegetação antes de generalizar uma região.",
        "A Caatinga ocorre apenas em locais sem qualquer planta?",
        "Considere adaptações ao ambiente semiárido.",
        "Não. A Caatinga abriga plantas e organismos adaptados a regimes de chuva e estiagem variáveis, com diversidade biológica.",
        "Biomas abrangem mosaicos de habitats e formas de vida; não são superfícies uniformes ou vazias."
      ],
      [
        "Adaptação e relações ecológicas",
        "Vegetação responde a disponibilidade hídrica, solo, temperatura, fogo e interações ecológicas. Algumas espécies possuem características que favorecem sobrevivência em certos ambientes, mas não é adequado explicar toda formação vegetal por um fator único. O fogo pode ter papéis ecológicos distintos conforme regime e ecossistema, e queimadas antrópicas descontroladas causam danos significativos.",
        "Raízes profundas podem favorecer acesso à água em algumas plantas, mas isso não define sozinho a fisionomia de uma região.",
        "O solo é o único fator que determina qualquer formação vegetal, independentemente do clima.",
        "Observe fatores combinados e interações locais.",
        "Por que vegetações em áreas de clima semelhante podem diferir?",
        "Considere solo, relevo e histórico ecológico.",
        "Diferenças de solo, relevo, uso da terra e interações ecológicas podem alterar comunidades mesmo sob clima parecido.",
        "Vegetação resulta de múltiplas condições, não de uma única variável invariável em todas as paisagens."
      ],
      [
        "Conservação e pressão humana",
        "Desmatamento, fragmentação, mudanças de uso da terra e alterações climáticas podem afetar biodiversidade e serviços ecossistêmicos, mas impactos variam conforme escala e bioma. Preservar área não é apenas contar árvores: conectividade, qualidade de habitat e processos ecológicos também importam. Políticas devem respeitar comunidades locais e evidências de uso do território.",
        "Dois fragmentos florestais isolados podem manter espécies diferentes de uma área contínua, mesmo somando superfície semelhante.",
        "Plantar algumas árvores exóticas substitui integralmente qualquer ecossistema nativo perdido.",
        "Avalie composição, conectividade e histórico além da área total.",
        "Por que conservar apenas pequenos fragmentos isolados pode ser insuficiente?",
        "Considere movimento de espécies e fluxo genético.",
        "A fragmentação pode limitar deslocamentos e trocas entre populações; conectividade e qualidade do habitat são relevantes.",
        "Replantio isolado não reproduz automaticamente estrutura, espécies e funções de um bioma complexo."
      ]
    ],
    "situation": [
      "Uma reportagem chama o Cerrado de região uniforme e diz que bastaria plantar uma única espécie de árvore para recompor qualquer área degradada.",
      "O que a diversidade interna do bioma e as relações ecológicas mostram sobre essa afirmação?",
      "O Cerrado possui várias formações e espécies; recuperação depende de solo, clima, composição nativa, conectividade e histórico local."
    ],
    "links": [
      [
        "Ciências",
        "Cadeias e teias alimentares",
        "A biodiversidade de biomas inclui relações entre produtores, consumidores e decompositores que sustentam processos ecológicos."
      ],
      [
        "Geografia",
        "Mudanças climáticas globais",
        "Alterações climáticas e no uso da terra podem modificar vulnerabilidades e condições dos biomas brasileiros."
      ]
    ]
  }
];
