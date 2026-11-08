import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Five original subject-specific modules; non-official and pending teacher review. */
export const provaoDepthBatch11Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Lei de Lavoisier e Lei de Proust",
    "objective": "Compreender leis ponderais e conservação com cálculos, exemplos, condições de validade e interpretação crítica de erros.",
    "prerequisites": [
      "Balanceamento",
      "Massa molar"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conservação de massa",
        "explanation": "Em uma reação química comum, os átomos são reorganizados, não criados nem destruídos. A lei de Lavoisier afirma que a massa total de um sistema fechado permanece constante durante a reação. É essencial delimitar o sistema: numa combustão em recipiente aberto, oxigênio entra e gases podem sair, de modo que pesar apenas combustível e cinzas não testa corretamente a conservação. Em recipiente fechado, a massa de todos os reagentes deve igualar a soma das massas dos produtos e de quaisquer reagentes que sobraram. Essa lei também fundamenta o balanceamento: a quantidade de átomos de cada elemento precisa ser igual nos dois lados da equação. Coeficientes podem ser alterados, mas índices de fórmulas não, pois mudariam as substâncias. A comparação de massas deve incluir gases e precipitados, mesmo que não sejam visíveis. Reações nucleares requerem tratamento de massa-energia mais amplo; aqui tratamos transformações químicas ordinárias.",
        "example": "Num recipiente fechado, 12 g de carbono reagem com 32 g de oxigênio, formando CO₂. Somamos 12+32=44 g; como não há perda de matéria, formam-se 44 g de produto. Se houver 40 g de oxigênio inicialmente, 8 g sobram e a massa final total é 52 g.",
        "pitfall": "Não ignore gases liberados ou reagentes em excesso ao comparar massas.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para conservação de massa.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Composição definida",
        "explanation": "A lei de Proust estabelece que uma amostra de um composto puro apresenta proporções fixas entre as massas dos elementos constituintes. Para água, H₂O, usando massas atômicas aproximadas H=1 e O=16, a razão de massas hidrogênio:oxigênio é 2:16, ou 1:8. Uma amostra de 18 g contém 2 g de hidrogênio e 16 g de oxigênio; uma amostra de 36 g contém 4 g e 32 g. A proporção não significa que qualquer mistura inicial desses elementos será inteiramente consumida: se um reagente estiver em excesso, parte dele sobra. Para identificar o reagente limitante, compare quantidades disponíveis com a razão exigida pelo composto. CO e CO₂ têm proporções diferentes porque são substâncias distintas, mesmo sendo formadas pelos mesmos elementos. Misturas de água e sal, por sua vez, não obedecem a uma composição fixa única. A aplicação exige distinguir composto puro, mistura e reagentes antes da reação.",
        "example": "Com 2 g de H₂ e 20 g de O₂, a formação de água consome apenas 16 g de O₂. A massa de água é 2+16=18 g e sobram 4 g de oxigênio. A massa total final continua 22 g, incluindo a sobra.",
        "pitfall": "Não aplique a proporção de um composto puro a uma mistura variável.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para composição definida.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Balanços e dados reais",
        "explanation": "Lavoisier e Proust respondem a perguntas distintas: a primeira lei estabelece conservação da massa total, enquanto a segunda caracteriza a proporção de elementos num composto puro. Dados experimentais podem divergir do valor teórico por umidade, impurezas, reação incompleta, perdas de coleta ou instrumentos mal calibrados. O rendimento de um produto isolado pode ser inferior ao teórico sem que a conservação seja violada: outros materiais permanecem no sistema ou foram perdidos na etapa de coleta. Para resolver problemas, balanceie a equação, converta massas em mol, use a razão estequiométrica e converta o resultado novamente em massa. Verifique a fronteira do sistema e diferencie massa total final de massa do produto desejado. Se os resultados violarem a proporção fixa, investigue se a amostra é realmente pura ou se algum reagente não reagiu. A interpretação química exige evidência e não apenas repetir uma fórmula numérica.",
        "example": "Uma amostra de 36 g de água pura contém 4 g de H e 32 g de O: 4:32=1:8. Se o relatório informa 4 g de H e 28 g de O totalmente consumidos para formar apenas água, falta oxigênio para reagir com todo o hidrogênio; o registro precisa de revisão.",
        "pitfall": "Não confunda rendimento inferior a 100% com desaparecimento de matéria.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para balanços e dados reais.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em sistema fechado, 8 g de A reagem com 12 g de B. A massa total final é:",
        "options": [
          "4 g",
          "12 g",
          "20 g",
          "96 g"
        ],
        "correctIndex": 2,
        "hint": "Some as massas.",
        "solution": "A alternativa C é correta: 8+12=20 g, pela conservação de massa. A reação reorganiza os átomos e não elimina matéria do sistema fechado. As alternativas A, B e D não representam a soma das massas fornecidas."
      },
      {
        "level": "intermediate",
        "prompt": "Água pura tem razão H:O de 1:8. Para 3 g de H, são necessários:",
        "options": [
          "24 g de O",
          "8 g de O",
          "3 g de O",
          "11 g de O"
        ],
        "correctIndex": 0,
        "hint": "Multiplique 3 por 8.",
        "solution": "A alternativa A é correta: 3×8=24 g de oxigênio para reagir com 3 g de hidrogênio, formando 27 g de água se ambos forem consumidos. A razão deve ser aplicada às massas dos elementos, não à contagem de moléculas."
      },
      {
        "level": "advanced",
        "prompt": "Com 2 g de H e 20 g de O, formando água, sobra:",
        "options": [
          "0 g de O",
          "2 g de O",
          "4 g de O",
          "18 g de O"
        ],
        "correctIndex": 2,
        "hint": "Use a razão 1:8.",
        "solution": "A alternativa C é correta: 2 g de hidrogênio consomem 16 g de oxigênio; dos 20 g iniciais, sobram 4 g e formam-se 18 g de água. As demais alternativas ignoram a quantidade de oxigênio efetivamente consumida."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Potência elétrica. Efeito joule. Consumo de energia elétrica. O quilowatt-hora",
    "objective": "Compreender potência e energia com cálculos, exemplos, condições de validade e interpretação crítica de erros.",
    "prerequisites": [
      "Corrente e tensão",
      "Resistência elétrica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Potência elétrica",
        "explanation": "Potência expressa a taxa de transferência de energia: P=E/Δt. Para um aparelho elétrico em regime simples, P=UI, com U em volts e I em ampères, resultando em watts. Um watt corresponde a um joule por segundo. Essa relação descreve a potência instantânea quando tensão e corrente são medidas no mesmo instante; em situações com variação temporal, a energia total depende da integral da potência ao longo do tempo. Um aparelho de maior potência não necessariamente consome mais energia no mês: é preciso considerar quantas horas opera. Equipamentos com termostato alternam períodos ligados e desligados, e a potência indicada na etiqueta pode ser nominal ou máxima. Corrente não é energia, e tensão não é potência. Converta unidades antes de calcular: 1 kW=1000 W, 1 h=3600 s e 1 kWh=3,6 milhões de joules. Essa distinção permite interpretar corretamente contas de luz e comparar dispositivos.",
        "example": "Um aparelho recebe 120 V e corrente de 2 A: P=120×2=240 W. Em 10 segundos transfere E=240×10=2400 J. Em uma hora de funcionamento contínuo, consome 0,24 kWh, pois 240 W=0,24 kW. A conta pressupõe tensão e corrente constantes durante o intervalo.",
        "pitfall": "Não confunda potência em watts com energia em joules ou quilowatt-hora.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para potência elétrica.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Efeito Joule",
        "explanation": "O efeito Joule descreve o aquecimento associado à corrente elétrica em materiais resistivos. Para resistor ôhmico de resistência aproximadamente constante, U=RI e P=UI levam a P=RI² e P=U²/R. A interpretação depende da variável mantida fixa: com corrente fixa, aumentar R aumenta P; com tensão fixa, aumentar R reduz P. Aparentes contradições decorrem de ignorar essa condição. Fios de transmissão dissipam potência aproximadamente I²R, razão pela qual a transmissão em alta tensão pode reduzir perdas para uma mesma potência transportada. A resistência de materiais reais varia com temperatura, e componentes eletrônicos nem sempre obedecem linearmente à lei de Ohm. A energia elétrica pode transformar-se em calor, luz ou movimento; a fração útil depende do aparelho. Ao resolver questões, escolha uma fórmula compatível com as grandezas dadas e confira a unidade do resultado.",
        "example": "Resistor de 10 Ω com corrente de 2 A dissipa P=10×2²=40 W. A tensão é U=RI=20 V e P=UI=40 W confirma. Mantendo 20 V, se a resistência dobrar para 20 Ω, P=20²/20=20 W. O resultado de 20 W é metade do anterior porque a tensão ficou fixa.",
        "pitfall": "Não diga que maior resistência sempre produz maior aquecimento sem especificar a tensão ou corrente.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para efeito joule.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Consumo e custo",
        "explanation": "O quilowatt-hora é unidade de energia, não de potência. Para um equipamento com potência constante, E(kWh)=P(kW)×t(h). Se o consumo varia, divida o período em intervalos e some a energia de cada um. Para calcular custo aproximado com tarifa única, multiplique kWh pela tarifa informada; a fatura real pode incluir tributos, bandeiras e encargos. Um chuveiro consome energia conforme potência selecionada e duração dos banhos; uma geladeira depende dos ciclos do compressor e das condições ambientais. Eficiência energética compara energia útil e energia recebida, mas não garante consumo mensal baixo se o aparelho ficar ligado por muito tempo. Em problemas, compare cenários com serviço equivalente e identifique oportunidades reais de economia. Ao converter, 1500 W equivalem a 1,5 kW, não a 1500 kW. Também não confunda kWh com kW/h, unidade de variação de potência por tempo.",
        "example": "Aquecedor de 1500 W usado 2 horas por dia durante 20 dias: tempo total=40 h; potência=1,5 kW; energia=1,5×40=60 kWh. Com tarifa hipotética R$0,80/kWh, custo de energia estimado=R$48.",
        "pitfall": "Não trate o custo simples calculado como fatura completa nem omita conversão de W para kW.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para consumo e custo.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A 12 V e 3 A, a potência é:",
        "options": [
          "4 W",
          "15 W",
          "36 W",
          "48 W"
        ],
        "correctIndex": 2,
        "hint": "Use P=UI.",
        "solution": "A alternativa C está correta: P=12×3=36 W. A multiplicação de tensão em volts pela corrente em ampères fornece potência em watts. As demais opções não resultam da multiplicação das grandezas fornecidas."
      },
      {
        "level": "intermediate",
        "prompt": "Um resistor de 5 Ω com 2 A dissipa:",
        "options": [
          "10 W",
          "20 W",
          "5 W",
          "50 W"
        ],
        "correctIndex": 1,
        "hint": "Use P=RI².",
        "solution": "A alternativa B está correta: P=5×(2²)=20 W. A corrente aparece ao quadrado, por isso multiplicar simplesmente 5×2 daria resultado incorreto."
      },
      {
        "level": "advanced",
        "prompt": "Um aparelho de 2 kW ligado por 3 h consome:",
        "options": [
          "6 kWh",
          "0,67 kWh",
          "6000 kWh",
          "5 kW"
        ],
        "correctIndex": 0,
        "hint": "Multiplique kW por horas.",
        "solution": "A alternativa A está correta: 2×3=6 kWh. A unidade kWh representa energia, enquanto kW isolado representa potência. As alternativas restantes não satisfazem a relação energia=potência×tempo."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Ciclos biogeoquímicos: água, oxigênio, carbono e nitrogênio",
    "objective": "Compreender ciclos da matéria com cálculos, exemplos, condições de validade e interpretação crítica de erros.",
    "prerequisites": [
      "Ecologia",
      "Fotossíntese e respiração"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Ciclo da água",
        "explanation": "O ciclo hidrológico movimenta água entre oceanos, atmosfera, rios, lagos, solo, aquíferos, gelo e organismos. Evaporação e transpiração levam vapor à atmosfera; condensação participa da formação de nuvens, e precipitação devolve água à superfície. Parte da água infiltra e recarrega reservatórios subterrâneos, enquanto outra parte escoa, evapora ou fica armazenada. A trajetória não precisa seguir uma sequência única: diferentes parcelas de água podem permanecer por tempos muito distintos em cada reservatório. Impermeabilização do solo tende a aumentar o escoamento superficial e reduzir infiltração em certas condições, contribuindo para alagamentos. Desmatamento altera evapotranspiração e estabilidade do solo, com efeitos dependentes do clima e da escala. O ciclo conserva a matéria, mas não garante água potável ilimitada: contaminação e distribuição desigual restringem disponibilidade para consumo. É essencial distinguir circulação de água, qualidade da água e tempo de renovação.",
        "example": "Uma chuva de 20 mm sobre 1 m² corresponde a 20 litros. Se 30% infiltrarem, 6 litros entram no solo; os 14 restantes podem escoar, evaporar ou ficar armazenados. Não se pode afirmar que tudo virou escoamento sem dados adicionais.",
        "pitfall": "Não confunda precipitação total com recarga de aquíferos.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para ciclo da água.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Carbono e oxigênio",
        "explanation": "O carbono circula entre atmosfera, oceanos, seres vivos, solos e reservatórios geológicos. Fotossíntese fixa carbono de CO₂ em moléculas orgânicas usando energia luminosa; respiração e decomposição devolvem carbono, muitas vezes na forma de CO₂. A combustão de combustíveis fósseis desloca carbono de estoques geológicos para a atmosfera. Na fotossíntese oxigênica, o O₂ liberado provém da água, não diretamente do CO₂; organismos fotossintetizantes também respiram. Oceanos absorvem e liberam CO₂, e reações de carbonato e bicarbonato afetam o armazenamento de carbono. O balanço climático depende de emissões e remoções líquidas, e não apenas da existência de florestas. Estoque e fluxo são conceitos diferentes: um reservatório pode conter grande massa de carbono e trocar pequena fração por ano. Em provas, acompanhe a origem dos átomos e evite pensar que a matéria desaparece durante respiração ou combustão.",
        "example": "Na equação global simplificada 6 CO₂+6 H₂O → C₆H₁₂O₆+6 O₂, seis átomos de carbono provenientes do CO₂ integram a glicose. A equação resume o balanço, mas não representa todas as etapas bioquímicas da fotossíntese.",
        "pitfall": "Não afirme que plantas apenas produzem O₂: elas também realizam respiração.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para carbono e oxigênio.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Nitrogênio e eutrofização",
        "explanation": "O N₂ atmosférico possui ligação tripla estável e não é diretamente assimilado pela maioria dos seres vivos. Microrganismos fixadores convertem N₂ em formas nitrogenadas aproveitáveis; processos industriais e descargas elétricas também geram nitrogênio reativo. A nitrificação transforma amônio em nitrito e depois nitrato sob condições apropriadas, enquanto a assimilação incorpora nitrogênio em biomoléculas. A amonificação devolve nitrogênio orgânico como amônio. Em ambientes pobres em oxigênio, a desnitrificação pode transformar nitrato em gases como N₂ e N₂O. Fertilizantes aumentam disponibilidade de nutrientes, mas excesso transportado para lagos pode estimular proliferação de algas. Quando a biomassa morre, decompositores consomem oxigênio dissolvido e podem provocar hipóxia. Umidade, pH, oxigênio e comunidades microbianas alteram as taxas dos processos. A interpretação exige reconhecer que o nitrogênio circula entre diferentes formas químicas, não apenas entre locais.",
        "example": "Em um lago que recebe excesso de nitrato, a produção de algas pode crescer. Depois, a decomposição da biomassa consome O₂, reduzindo sua disponibilidade para peixes. A sequência descreve eutrofização, não toxicidade direta universal do nitrato.",
        "pitfall": "Não atribua fixação de N₂ a todas as plantas; ela depende de organismos e processos específicos.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para nitrogênio e eutrofização.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A passagem de água líquida para vapor chama-se:",
        "options": [
          "Condensação",
          "Evaporação",
          "Precipitação",
          "Infiltração"
        ],
        "correctIndex": 1,
        "hint": "Identifique a mudança de fase.",
        "solution": "A alternativa B está correta: evaporação transforma água líquida em vapor. Condensação realiza a mudança inversa e precipitação transporta água atmosférica à superfície."
      },
      {
        "level": "intermediate",
        "prompt": "Qual afirmação sobre fotossíntese é correta?",
        "options": [
          "Incorpora carbono do CO₂ em compostos orgânicos.",
          "Consome CO₂ na respiração aeróbia.",
          "O O₂ liberado vem diretamente do CO₂.",
          "Não ocorre em organismos aquáticos."
        ],
        "correctIndex": 0,
        "hint": "Acompanhe os átomos de carbono.",
        "solution": "A alternativa A está correta: fotossíntese incorpora carbono do CO₂ na matéria orgânica. O oxigênio liberado na fotossíntese oxigênica tem origem na água."
      },
      {
        "level": "advanced",
        "prompt": "Qual processo devolve nitrogênio gasoso à atmosfera a partir de nitrato?",
        "options": [
          "Fotossíntese",
          "Nitrificação",
          "Amonificação",
          "Desnitrificação"
        ],
        "correctIndex": 3,
        "hint": "Procure a redução do nitrato.",
        "solution": "A alternativa D está correta: desnitrificação microbiana pode reduzir nitrato e liberar gases nitrogenados, especialmente em ambientes com pouco oxigênio."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Primeira República: política, economia e movimentos sociais",
    "objective": "Compreender primeira república com cálculos, exemplos, condições de validade e interpretação crítica de erros.",
    "prerequisites": [
      "Proclamação da República",
      "Abolição da escravidão"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Constituição e poder local",
        "explanation": "A Primeira República brasileira estendeu-se de 1889 a 1930. A Constituição de 1891 organizou uma república federativa presidencialista, separou formalmente Estado e Igreja e ampliou a autonomia estadual. Isso não produziu sufrágio universal: mulheres, analfabetos e outros grupos ficaram excluídos pelas regras políticas da época. A participação eleitoral era atravessada por desigualdades e pressões em contextos locais. O coronelismo designa relações entre chefes políticos, dependência econômica e controle de votos, articuladas a alianças estaduais e federais. A chamada política dos governadores envolvia acordos entre lideranças estaduais e governo central, mas não eliminou disputas entre oligarquias. O período conheceu mobilizações de trabalhadores, militares e populações rurais, mostrando que a sociedade não era passiva. Para interpretar o regime, separe instituições escritas das práticas efetivas e reconheça diferenças regionais. República é uma forma de governo, não sinônimo automático de democracia inclusiva.",
        "example": "Um chefe político rural oferece emprego e favores em troca de apoio eleitoral. O caso ilustra dependência e influência política local associadas ao coronelismo, mas não demonstra que todos os eleitores fossem controlados nem que o fenômeno tivesse intensidade igual em todo o país.",
        "pitfall": "Não confunda a proclamação republicana com direito universal ao voto.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para constituição e poder local.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Café, cidades e conflitos",
        "explanation": "A economia cafeeira foi central nas exportações da Primeira República, especialmente no Sudeste, mas coexistiu com outras produções agrícolas e industrialização inicial. Ferrovias, imigração e serviços urbanos se articularam à expansão econômica. O Convênio de Taubaté de 1906 buscou sustentar preços do café diante de problemas de superprodução, por meio de mecanismos de compra e financiamento de estoques. Trabalhadores urbanos organizaram associações e greves por salários e condições de vida; a greve geral de 1917 em São Paulo é um marco relevante. No campo, Canudos na Bahia (1896–1897) e Contestado na região disputada entre Paraná e Santa Catarina (1912–1916) envolveram questões de terra, religião, poder e repressão, mas não foram movimentos idênticos. A Revolta da Vacina de 1904 no Rio de Janeiro envolveu reformas urbanas, medidas sanitárias coercitivas e tensões sociais; reduzi-la a simples oposição à ciência ignora o contexto. A análise histórica precisa reconhecer múltiplas causas e atores.",
        "example": "Compare Canudos, encerrado em 1897 na Bahia, e Contestado, ocorrido entre 1912 e 1916 no Sul. Ambos sofreram repressão estatal, mas suas localizações, lideranças e conjunturas foram distintas. A comparação não autoriza chamá-los de um único movimento.",
        "pitfall": "Não reduza revoltas complexas a uma causa única ou confunda exportação cafeeira com ausência de indústria.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para café, cidades e conflitos.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Crise e ruptura de 1930",
        "explanation": "O pacto oligárquico enfrentou conflitos entre elites estaduais, setores militares e movimentos de oposição. O tenentismo, com levantes em 1922 e 1924 e a Coluna Prestes, expressou críticas políticas diversas, sem constituir partido único de programa homogêneo. A crise mundial de 1929 agravou dificuldades do setor cafeeiro e tensões econômicas, mas não foi a única causa da ruptura. A eleição presidencial de 1930, a Aliança Liberal, o assassinato de João Pessoa e disputas sucessórias integraram o processo que levou à deposição de Washington Luís e impediu a posse de Júlio Prestes. Getúlio Vargas assumiu o governo em 1930, encerrando a Primeira República, mas o Estado Novo foi instaurado somente em 1937. Para explicar o processo, distinga fatores estruturais de longa duração, acontecimentos imediatos e justificativas utilizadas por agentes políticos. A sequência temporal importa: movimentos tenentistas já existiam antes da crise de 1929, e o autoritarismo de 1937 não começou automaticamente em 1930.",
        "example": "Organize a cronologia: 1922, levante dos 18 do Forte; 1929, crise econômica internacional; 1930, ruptura política e chegada de Vargas ao governo. A sequência demonstra que a oposição ao regime precedia a crise mundial, embora esta tenha intensificado tensões.",
        "pitfall": "Não confunda a ruptura de 1930 com a instauração do Estado Novo em 1937.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para crise e ruptura de 1930.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual Constituição estruturou a Primeira República?",
        "options": [
          "1824",
          "1891",
          "1937",
          "1988"
        ],
        "correctIndex": 1,
        "hint": "Procure a primeira Constituição republicana.",
        "solution": "A alternativa B está correta: a Constituição de 1891 instituiu a organização republicana federativa e presidencialista. A de 1824 era imperial; 1937 e 1988 são posteriores."
      },
      {
        "level": "intermediate",
        "prompt": "O Convênio de Taubaté de 1906 relacionou-se à:",
        "options": [
          "Abolição da escravidão.",
          "Criação do voto feminino.",
          "Valorização do café.",
          "Criação da Constituição de 1988."
        ],
        "correctIndex": 2,
        "hint": "Considere o mercado exportador.",
        "solution": "A alternativa C está correta: o acordo buscou sustentar preços do café em contexto de superprodução, por meio de mecanismos de compra e financiamento de estoques."
      },
      {
        "level": "advanced",
        "prompt": "A ruptura de 1930 resultou principalmente de:",
        "options": [
          "Conflitos políticos internos agravados por dificuldades econômicas.",
          "Apenas da crise mundial de 1929.",
          "Implantação imediata do Estado Novo.",
          "Ausência de oposição antes de 1929."
        ],
        "correctIndex": 0,
        "hint": "Compare conflitos anteriores e posteriores a 1929.",
        "solution": "A alternativa A está correta: disputas oligárquicas, tenentismo, oposição e crise econômica contribuíram para a ruptura. O Estado Novo só foi instaurado em 1937."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Produto iônico da água e escalas de pH e pOH",
    "objective": "Compreender ph e poh com cálculos, exemplos, condições de validade e interpretação crítica de erros.",
    "prerequisites": [
      "Logaritmos",
      "Equilíbrio químico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Autoionização da água",
        "explanation": "A água sofre autoionização em pequena extensão: 2 H₂O ⇌ H₃O⁺+OH⁻. Em exercícios escolares de soluções aquosas diluídas, costuma-se representar [H⁺] como abreviação da concentração hidrogeniônica, embora prótons isolados não existam em água. O produto iônico é aproximado por Kw=[H₃O⁺][OH⁻]; a descrição termodinâmica rigorosa utiliza atividades. A 25 °C, Kw≈10⁻¹⁴ e, em água pura, [H₃O⁺]=[OH⁻]≈10⁻⁷ mol/L. A neutralidade significa igualdade dessas concentrações, não ausência de íons. Kw varia com a temperatura, portanto pH neutro igual a 7 não é uma regra universal independente de temperatura. Em soluções concentradas, as atividades podem diferir significativamente das concentrações. Para calcular, identifique a temperatura e confira se a aproximação diluída é apropriada. Uma solução ácida possui maior atividade hidrogeniônica que a solução neutra sob condições comparáveis; uma básica apresenta maior atividade de hidróxido.",
        "example": "Se [H₃O⁺]=10⁻⁵ mol/L a 25 °C, então [OH⁻]≈10⁻¹⁴/10⁻⁵=10⁻⁹ mol/L. A solução é ácida porque a concentração hidrogeniônica supera a de hidróxido. Em água pura, ambas seriam aproximadamente 10⁻⁷ mol/L.",
        "pitfall": "Não interprete neutralidade como ausência de H₃O⁺ e OH⁻.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para autoionização da água.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Escala logarítmica",
        "explanation": "O pH é definido rigorosamente em termos da atividade do íon hidrogênio, mas no modelo escolar diluído aproxima-se pH≈−log₁₀[H₃O⁺]. Analogamente, pOH≈−log₁₀[OH⁻]. A 25 °C, pH+pOH≈14, desde que as aproximações de atividade e Kw sejam apropriadas. Uma diferença de uma unidade de pH representa fator dez na atividade hidrogeniônica, não variação linear. Assim, pH 3 indica aproximadamente cem vezes mais atividade de H⁺ que pH 5, em condições comparáveis. A faixa 0–14 é comum no ensino introdutório, mas não é limite absoluto para todas as soluções. O cálculo exige logaritmo decimal e atenção à notação científica: −log(10⁻⁴)=4. Se a concentração não for potência exata de dez, use propriedades de logaritmos ou calculadora. Valores de pH não são quantidades de matéria e não devem ser somados para calcular misturas.",
        "example": "Com [H₃O⁺]=10⁻³ mol/L, pH≈3. A 25 °C, pOH≈11 e [OH⁻]≈10⁻¹¹ mol/L. Comparando pH 3 e pH 5, a razão de concentrações aproximadas é 10⁻³/10⁻⁵=100. A comparação usa a aproximação de atividades por concentrações em soluções diluídas.",
        "pitfall": "Não trate diferenças de pH como diferenças lineares de concentração.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para escala logarítmica.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      },
      {
        "level": "advanced",
        "title": "Diluição e neutralização",
        "explanation": "Diluir uma solução ideal de ácido forte monoprótico reduz sua concentração e aumenta o pH, desde que a dissociação seja praticamente completa e a autoionização da água seja desprezível. Na diluição sem reação, conserva-se a quantidade de soluto: C₁V₁=C₂V₂. Para diluições extremas, a contribuição da água passa a importar e a aproximação simples falha. Em neutralizações, primeiro use estequiometria para identificar excesso de ácido ou base; depois avalie equilíbrios das espécies restantes. Misturar ácido forte e base forte em proporções estequiométricas adequadas produz solução aproximadamente neutra a 25 °C, mas ácido fraco e base forte podem gerar solução básica devido à hidrólise do sal. Indicadores mudam de cor em faixas específicas de pH, não fornecendo medida exata por si só. É fundamental distinguir concentração analítica, atividade e condições de temperatura para não generalizar uma regra escolar além de seu domínio de validade.",
        "example": "HCl ideal 0,01 mol/L diluído dez vezes passa a 0,001 mol/L. Admitindo dissociação completa, pH inicial≈2 e final≈3. O aumento de uma unidade decorre da redução da concentração hidrogeniônica por fator dez.",
        "pitfall": "Não presuma que toda neutralização gera pH exatamente 7.",
        "steps": [
          "Identifique dados, unidades e hipóteses relevantes para diluição e neutralização.",
          "Aplique a relação conceitual ao exemplo e confira cada etapa do raciocínio.",
          "Verifique o resultado, o domínio de validade e os erros comuns."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A 25 °C, se [H₃O⁺]=10⁻⁴ mol/L, o pH é:",
        "options": [
          "4",
          "10",
          "14",
          "0,0001"
        ],
        "correctIndex": 0,
        "hint": "Use −log₁₀.",
        "solution": "A alternativa A está correta: pH≈−log₁₀(10⁻⁴)=4. O valor 10 seria pOH aproximado sob condições padrão de 25 °C. Os demais valores confundem pH, pOH e concentração."
      },
      {
        "level": "intermediate",
        "prompt": "A 25 °C, se pH=5, pOH é aproximadamente:",
        "options": [
          "5",
          "7",
          "9",
          "14"
        ],
        "correctIndex": 2,
        "hint": "Use pH+pOH≈14.",
        "solution": "A alternativa C está correta: pOH≈14−5=9. A relação depende da temperatura, pois Kw não é constante em todas as temperaturas. Não se deve assumir que pH e pOH sejam iguais em toda solução."
      },
      {
        "level": "advanced",
        "prompt": "Ao diluir dez vezes HCl 0,01 mol/L, o pH aproximado muda de:",
        "options": [
          "2 para 1",
          "3 para 2",
          "7 para 14",
          "2 para 3"
        ],
        "correctIndex": 3,
        "hint": "Concentração final 10⁻³ mol/L.",
        "solution": "A alternativa D está correta: a concentração cai de 10⁻² para 10⁻³ mol/L e o pH sobe de 2 para 3, nas hipóteses usuais de ácido forte diluído."
      }
    ]
  }
];
