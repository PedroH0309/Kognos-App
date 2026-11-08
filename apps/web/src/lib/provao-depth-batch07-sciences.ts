import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Seventh batch: original chemistry, biology and physics with worked examples and objective tests. */
export const provaoDepthBatch07Sciences:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Geometria molecular",
    "objective": "Prever geometrias moleculares simples a partir de regiões eletrônicas ao redor do átomo central, distinguir pares ligantes e não ligantes e relacionar ângulos, polaridade e limites do modelo VSEPR.",
    "prerequisites": [
      "Ligações covalentes",
      "Estruturas de Lewis",
      "Pares de elétrons",
      "Eletronegatividade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Pares eletrônicos explicam formas tridimensionais",
        "explanation": "As moléculas possuem disposição espacial e não podem ser entendidas apenas pela sequência escrita de seus símbolos. O modelo de repulsão dos pares de elétrons da camada de valência, chamado VSEPR, prevê geometria aproximada a partir do número de regiões eletrônicas ao redor de um átomo central. Uma ligação simples, dupla ou tripla é considerada uma região para essa contagem; pares não ligantes também ocupam região. Com duas regiões e sem pares livres centrais, o arranjo é linear, com ângulo próximo de 180°. Com três regiões, o arranjo eletrônico tende a ser trigonal plano, com ângulos próximos de 120°. Com quatro regiões, um arranjo eletrônico tetraédrico é comum, com ângulos ideais próximos de 109,5°. O objetivo é diminuir repulsões entre regiões no modelo. Não conte um átomo por ligação múltipla como se representasse duas ou três direções de ligação diferentes. A geometria molecular considera posições dos átomos, enquanto a geometria eletrônica considera também pares não ligantes. Em moléculas simples, essa diferença é decisiva para prever a forma e a polaridade.",
        "example": "Para CO₂, escreva O=C=O. Há duas regiões de densidade eletrônica ao redor do carbono central, correspondentes às duas ligações duplas, sem pares livres no carbono. O arranjo é linear e o ângulo O–C–O é 180°. Contar quatro pares de elétrons ligantes como quatro direções levaria à geometria incorreta.",
        "pitfall": "Não confunda ligação dupla com duas regiões geométricas independentes. No VSEPR, a ligação dupla conta como uma região ao redor do centro, embora possa influenciar ângulos reais.",
        "steps": [
          "Desenhe a estrutura de Lewis verificando elétrons de valência.",
          "Conte regiões ligantes e não ligantes do átomo central.",
          "Associe duas, três ou quatro regiões ao arranjo eletrônico apropriado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Pares não ligantes alteram a geometria molecular",
        "explanation": "Moléculas com a mesma quantidade de regiões eletrônicas podem ter geometrias moleculares diferentes quando há pares não ligantes centrais. CH₄ apresenta quatro ligações ao redor do carbono e nenhuma região livre central: sua forma molecular é tetraédrica. NH₃ possui três ligações N–H e um par não ligante, totalizando quatro regiões: o arranjo eletrônico é tetraédrico, mas a forma dos átomos é piramidal trigonal. H₂O possui duas ligações O–H e dois pares livres no oxigênio: as quatro regiões também se organizam aproximadamente de modo tetraédrico, mas a forma molecular é angular. Os ângulos reais diferem do valor ideal devido às interações entre regiões, por exemplo cerca de 107° no NH₃ e 104,5° na água. A distinção entre arranjo eletrônico e geometria molecular é mais confiável que decorar uma figura por fórmula. A teoria fornece aproximações para muitas moléculas de elementos representativos; espécies com ressonância, metais de transição ou geometrias mais complexas podem exigir modelos adicionais.",
        "example": "Compare CH₄, NH₃ e H₂O: os três centros apresentam quatro regiões eletrônicas, porém o número de pares livres cresce de zero a um e dois. Assim as formas moleculares são tetraédrica, piramidal trigonal e angular, respectivamente. O termo tetraédrico para a distribuição de regiões não significa que os três tenham quatro átomos periféricos.",
        "pitfall": "Não classifique a molécula de água como linear por possuir dois átomos de hidrogênio, nem como tetraédrica molecular por possuir quatro regiões eletrônicas. A geometria dos átomos é angular.",
        "steps": [
          "Determine quantos pares livres pertencem ao átomo central.",
          "Diferencie arranjo de regiões eletrônicas da posição real dos átomos.",
          "Explique a forma prevista e possíveis desvios de ângulos ideais."
        ]
      },
      {
        "level": "advanced",
        "title": "Forma, dipolos e polaridade resultante",
        "explanation": "A polaridade molecular não depende apenas da presença de ligações polares: o formato da molécula determina como os vetores de dipolo de cada ligação se combinam. Em CO₂, as ligações C=O são polares, mas a geometria linear e simétrica leva ao cancelamento dos dipolos no modelo, resultando numa molécula sem dipolo permanente. Em H₂O, as ligações O–H são polares e a estrutura angular impede cancelamento completo, levando a dipolo molecular resultante. Por isso, a água tem comportamento de interação diferente do CO₂. Em BF₃, a forma trigonal plana simétrica também permite cancelamento dos dipolos, enquanto no NH₃ a pirâmide trigonal gera dipolo resultante. A análise requer reconhecer simetria e direção das ligações e não pode ser reduzida à contagem de tipos de átomos. A relação entre estrutura e propriedades pode influenciar solubilidade e interações intermoleculares, mas a previsão quantitativa exige considerar temperatura, tamanho molecular e outros efeitos. O VSEPR não determina sozinho propriedades termodinâmicas completas, nem representa orbitais quânticos exatos.",
        "example": "No CO₂, represente dois vetores de dipolo C→O em sentidos opostos ao longo de uma linha; seus módulos iguais se cancelam. Na água, as ligações O–H formam ângulo próximo de 104,5°, então seus dipolos não se anulam, resultando em polaridade molecular. Ambos possuem ligações covalentes polares, mas geometrias distintas.",
        "pitfall": "Não afirme que toda molécula com ligações polares é polar. É indispensável somar vetorialmente os dipolos segundo a geometria e verificar simetria.",
        "steps": [
          "Determine geometria com pares livres, não apenas fórmula.",
          "Identifique polaridade aproximada das ligações por eletronegatividade.",
          "Some conceitualmente os vetores de dipolo e interprete a simetria molecular."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na molécula CO₂, quantas regiões eletrônicas existem ao redor do carbono central e qual é a geometria molecular?",
        "options": [
          "Quatro regiões; tetraédrica.",
          "Duas regiões; linear.",
          "Três regiões; trigonal plana.",
          "Duas regiões; angular."
        ],
        "correctIndex": 1,
        "hint": "Cada ligação dupla é uma região para o VSEPR.",
        "solution": "A alternativa B está correta: duas ligações duplas C=O correspondem a duas regiões em torno do C, gerando molécula linear. As outras opções contam múltiplas ligações incorretamente ou atribuem pares livres inexistentes."
      },
      {
        "level": "intermediate",
        "prompt": "Qual alternativa descreve corretamente H₂O no modelo VSEPR?",
        "options": [
          "Geometria molecular linear, porque há dois H.",
          "Geometria molecular tetraédrica com quatro H.",
          "Geometria molecular angular, pois o O tem dois pares livres.",
          "Geometria molecular trigonal plana, pois há três átomos."
        ],
        "correctIndex": 2,
        "hint": "A posição dos átomos difere da disposição de todas as regiões eletrônicas.",
        "solution": "A alternativa C está correta: o oxigênio central possui duas ligações e dois pares livres, resultando em geometria molecular angular. O arranjo eletrônico aproximado é tetraédrico, mas não existem quatro átomos periféricos."
      },
      {
        "level": "advanced",
        "prompt": "Por que CO₂ é considerado apolar apesar das ligações C=O polares?",
        "options": [
          "Os dipolos das duas ligações se cancelam pela geometria linear e simétrica.",
          "Não existem diferenças de eletronegatividade entre carbono e oxigênio.",
          "O carbono sempre possui carga elétrica nula em qualquer molécula.",
          "Todas as moléculas lineares são necessariamente apolares."
        ],
        "correctIndex": 0,
        "hint": "Considere a soma vetorial de dipolos iguais e opostos.",
        "solution": "A alternativa A está correta: os dipolos da molécula linear CO₂ anulam-se. B ignora ligações polares; C generaliza carga sem contexto; D é falsa, pois moléculas lineares assimétricas podem ter dipolo resultante."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Metabolismo energético: energia para a vida",
    "objective": "Relacionar ATP, fotossíntese, quimiossíntese, respiração aeróbia e fermentação, distinguir processos e organelas e interpretar o papel do oxigênio e a origem do gás liberado na fotossíntese.",
    "prerequisites": [
      "Células e organelas",
      "Reações químicas e energia",
      "Compostos orgânicos",
      "Ecologia trófica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "ATP e a captura de energia em organismos vivos",
        "explanation": "Metabolismo reúne reações químicas de síntese e degradação que sustentam processos celulares. ATP atua como molécula intermediária em muitas transferências de energia; sua hidrólise, acoplada a outras reações, pode favorecer atividades celulares. Não é correto dizer que ATP é a única forma de armazenamento de energia: glicogênio, lipídios e outros compostos também armazenam energia química em escalas e funções distintas. A fotossíntese oxigênica em plantas e algas converte energia luminosa em energia química, produzindo compostos orgânicos a partir de CO₂ e água. O esquema simplificado 6CO₂+6H₂O+energia luminosa→C₆H₁₂O₆+6O₂ ajuda a visualizar balanço global, mas omite intermediários e não deve ser confundido com um único passo molecular. Nas reações luminosas, cloroplastos utilizam luz e água para produzir ATP e NADPH e liberar O₂; na fixação do carbono, o ciclo de Calvin usa ATP e NADPH para incorporar CO₂ a moléculas orgânicas. O oxigênio gasoso liberado deriva da água, não diretamente do CO₂.",
        "example": "Imagine uma folha iluminada, recebendo água pelas raízes e CO₂ pelos estômatos. Nos tilacoides, a fotólise da água contribui para liberação de O₂ e produção de moléculas energéticas; no estroma, a fixação de carbono incorpora CO₂ em compostos orgânicos. A folha também realiza respiração celular, mesmo quando fotossintetiza.",
        "pitfall": "Não afirme que plantas só respiram à noite ou que o oxigênio fotossintético vem diretamente do dióxido de carbono. Fotossíntese e respiração são processos distintos que podem ocorrer na mesma célula.",
        "steps": [
          "Identifique entrada de energia luminosa e moléculas reagentes.",
          "Separe reações luminosas da fixação de carbono.",
          "Reconheça ATP e NADPH como intermediários energéticos e O₂ como derivado da água."
        ]
      },
      {
        "level": "intermediate",
        "title": "Respiração aeróbia e fermentação: rotas distintas",
        "explanation": "Respiração aeróbia em células eucarióticas envolve glicólise no citosol, etapas de oxidação de moléculas derivadas de piruvato e ciclo do ácido cítrico associados à matriz mitocondrial, e cadeia transportadora de elétrons na membrana interna da mitocôndria. No processo, a energia química de moléculas orgânicas contribui para produzir ATP e gradiente de prótons. O oxigênio funciona como aceptor final de elétrons na cadeia respiratória aeróbia, formando água. A equação global idealizada da oxidação de glicose é C₆H₁₂O₆+6O₂→6CO₂+6H₂O+energia; não descreve cada etapa isoladamente. Na fermentação, a glicólise pode continuar com regeneração de NAD⁺ por reações que recebem elétrons do NADH, sem utilizar cadeia respiratória aeróbia. A fermentação lática produz lactato em vários sistemas; a alcoólica pode produzir etanol e CO₂ em leveduras. O rendimento de ATP diretamente associado à glicólise é menor do que a extração aeróbia completa de energia, sob as condições típicas do modelo escolar. Fermentação não significa necessariamente atividade exclusiva em animais, nem toda respiração utiliza oxigênio — há respiração anaeróbia com outros aceptores em certos microrganismos.",
        "example": "Uma levedura em meio com açúcar e condições favoráveis pode realizar fermentação alcoólica, formando etanol e CO₂. O CO₂ produzido pode fazer a massa do pão crescer. Em presença de oxigênio e condições apropriadas, a mesma levedura pode usar respiração aeróbia. É a rota metabólica efetiva, e não apenas a espécie, que determina os produtos.",
        "pitfall": "Não confunda fermentação com respiração anaeróbia por outros aceptores nem diga que todas as células sem oxigênio produzem etanol. As rotas variam entre organismos e condições.",
        "steps": [
          "Localize a glicólise no citosol e a oxidação aeróbia mitocondrial em eucariotos.",
          "Identifique o papel do oxigênio como aceptor final na respiração aeróbia.",
          "Compare produtos e regeneração de NAD⁺ nas fermentações lática e alcoólica."
        ]
      },
      {
        "level": "advanced",
        "title": "Quimiossíntese, rendimento e balanço ecológico",
        "explanation": "Quimiossíntese é produção de matéria orgânica a partir de carbono inorgânico utilizando energia obtida de reações químicas, como a oxidação de compostos reduzidos de enxofre, ferro ou nitrogênio, em certos procariotos. Não depende de luz como fonte direta de energia; por isso é relevante em ecossistemas com pouca ou nenhuma iluminação, embora as condições ambientais variem. Bactérias e arqueias quimioautotróficas não seguem necessariamente todas a mesma rota bioquímica. A disponibilidade de substratos químicos e aceptores de elétrons condiciona a produtividade. Em fotossíntese, ATP e NADPH gerados na etapa fotoquímica alimentam fixação de carbono; já na respiração o fluxo de elétrons contribui à fosforilação oxidativa. O número de ATP por glicose não deve ser apresentado como constante universal, porque depende de organismo, transporte de equivalentes redutores e condições. No nível ecológico, produtores autotróficos convertem energia em matéria orgânica que alimenta teias tróficas, mas diferentes produtores utilizam fontes energéticas distintas. A matéria participa de ciclos biogeoquímicos; energia flui e é dissipada em processos irreversíveis, exigindo suprimento contínuo.",
        "example": "Em um ambiente profundo sem luz, microrganismos podem oxidar compostos reduzidos de enxofre e usar a energia liberada para fixar CO₂. Isso é quimioautotrofia: a fonte de carbono é inorgânica, e a energia vem de transformações químicas, não de luz. Em uma planta iluminada, a luz alimenta a produção de ATP e NADPH para fixação de carbono.",
        "pitfall": "Não classifique automaticamente qualquer microrganismo que vive no escuro como quimiossintetizante. A identificação depende de sua fonte de energia e de carbono, não apenas do ambiente.",
        "steps": [
          "Identifique fonte de energia e fonte de carbono separadamente.",
          "Compare fotossíntese, quimiossíntese, respiração e fermentação pelas entradas e saídas.",
          "Considere limites quantitativos de rendimento e implicações para fluxos ecológicos."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na fotossíntese oxigênica, a fonte direta do O₂ liberado é principalmente:",
        "options": [
          "A água utilizada nas reações luminosas.",
          "O carbono presente no CO₂.",
          "A glicose já produzida pelo cloroplasto.",
          "O oxigênio livre absorvido dos estômatos."
        ],
        "correctIndex": 0,
        "hint": "A fotólise da água participa da liberação de oxigênio.",
        "solution": "A alternativa A está correta: o O₂ liberado na fotossíntese oxigênica deriva da água. O CO₂ fornece carbono para compostos orgânicos; a glicose não é a fonte imediata do gás."
      },
      {
        "level": "intermediate",
        "prompt": "Qual processo permite a regeneração de NAD⁺ em uma fermentação lática típica?",
        "options": [
          "A oxidação do oxigênio atmosférico.",
          "A produção direta de luz pelo piruvato.",
          "A transferência de elétrons do NADH para formar lactato a partir de piruvato.",
          "A duplicação do DNA na mitocôndria."
        ],
        "correctIndex": 2,
        "hint": "Fermentação mantém a glicólise ao recuperar NAD⁺.",
        "solution": "A alternativa C está correta: a redução do piruvato a lactato reoxida NADH a NAD⁺, permitindo continuidade da glicólise. As outras opções não correspondem ao mecanismo fermentativo."
      },
      {
        "level": "advanced",
        "prompt": "Qual alternativa descreve um organismo quimioautotrófico?",
        "options": [
          "Usa obrigatoriamente luz como fonte de energia e matéria orgânica como carbono.",
          "Obtém energia de oxidação de compostos inorgânicos e fixa carbono de CO₂.",
          "Produz ATP apenas por ingestão de outros seres vivos.",
          "Realiza exclusivamente fermentação alcoólica."
        ],
        "correctIndex": 1,
        "hint": "Separe fonte energética da fonte de carbono.",
        "solution": "A alternativa B está correta: quimioautotróficos podem obter energia de reações químicas de compostos inorgânicos e usar CO₂ como fonte de carbono. Os demais itens confundem autotrofia com fotoheterotrofia ou processos fermentativos."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Calor como forma de energia em trânsito. Capacidade térmica, calor específico e calor latente",
    "objective": "Distinguir calor, temperatura e energia interna; calcular calor sensível Q=mcΔT, capacidade térmica C=mc e calor latente Q=mL; interpretar gráficos de aquecimento e trocas térmicas.",
    "prerequisites": [
      "Escalas termométricas",
      "Conservação de energia",
      "Massas e unidades de medida"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Calor, temperatura e a equação do calor sensível",
        "explanation": "Temperatura é uma grandeza relacionada ao estado térmico de um sistema; calor é energia transferida devido a uma diferença de temperatura. Um objeto não 'tem calor' como propriedade armazenada, mas possui energia interna. Quando duas amostras da mesma substância recebem a mesma energia, a maior massa costuma sofrer menor variação de temperatura, dadas condições comparáveis. O calor específico c é a quantidade de energia necessária por unidade de massa e por variação de temperatura numa condição definida, com unidades como J/(kg·K). A capacidade térmica C de um corpo é a razão entre calor transferido e variação de temperatura num regime em que essa razão é apropriada, e para corpo homogêneo sem mudança de fase pode ser C=mc. O calor sensível é dado por Q=mcΔT, sendo ΔT=Tfinal−Tinicial. O sinal é positivo para calor recebido se a temperatura aumenta, sob convenção usual. A equação depende de calor específico aproximadamente constante no intervalo e ausência de transformação de fase; não serve automaticamente para qualquer mudança de estado.",
        "example": "Água de massa 0,50 kg é aquecida de 20 °C para 30 °C. Usando c≈4200 J/(kg·°C), Q=0,50×4200×10=21.000 J. O aumento de 10 °C equivale a aumento de 10 K. Se a massa fosse 1,0 kg com mesmas condições, seria necessário o dobro de energia.",
        "pitfall": "Não confunda capacidade térmica total de um corpo (J/K) com calor específico do material (J/kg·K). A primeira depende da massa; o segundo descreve propriedade por unidade de massa.",
        "steps": [
          "Defina sistema, massa, temperatura inicial e final.",
          "Verifique ausência de mudança de estado e escolha calor específico coerente.",
          "Calcule Q=mcΔT, interpretando sinal e unidade."
        ]
      },
      {
        "level": "intermediate",
        "title": "Mudança de fase: calor latente e patamares térmicos",
        "explanation": "Durante mudança de fase de uma substância pura sob pressão fixa, parte da energia fornecida pode alterar a organização intermolecular sem elevar a temperatura enquanto a transição ocorre. Esse processo é chamado calor latente, aproximado por Q=mL para massa m e calor latente específico L. Por exemplo, na fusão do gelo a 0 °C e pressão próxima à atmosférica, energia pode ser absorvida enquanto gelo e água coexistem em equilíbrio. Após a fusão completa, o aquecimento da água líquida volta a elevar temperatura, e o calor sensível passa a ser usado. O gráfico temperatura versus energia recebida apresenta trechos inclinados, relacionados a aquecimento de fase única, e patamares, associados a transições nas condições ideais; materiais mistos e pressões variáveis podem apresentar comportamento mais complexo. Para resolver problema de gelo inicialmente abaixo de zero que termina como água aquecida, divida em etapas: aquecer gelo, fundir, aquecer água. Cada etapa usa calor específico ou latente apropriado. Somar temperaturas diretamente ou aplicar Q=mcΔT durante fusão levaria a erro.",
        "example": "Um bloco de gelo de 0,20 kg está a 0 °C e funde completamente, usando Lf≈334.000 J/kg. Energia de fusão: Q=mL=0,20×334.000=66.800 J. A temperatura não aumenta durante a fase de fusão idealizada; para aquecer a água resultante até 10 °C, ainda seria necessário Q=0,20×4200×10=8400 J. Total: 75.200 J.",
        "pitfall": "Não conclua que temperatura constante significa ausência de absorção de energia. Em mudanças de fase, energia pode ser transferida mesmo enquanto o termômetro permanece no mesmo valor.",
        "steps": [
          "Divida o processo em trechos de aquecimento e mudança de fase.",
          "Use Q=mcΔT em fase única e Q=mL na transição.",
          "Some as energias de cada etapa e verifique a temperatura final."
        ]
      },
      {
        "level": "advanced",
        "title": "Equilíbrio térmico e calorimetria com conservação de energia",
        "explanation": "Quando corpos a temperaturas diferentes interagem em sistema termicamente isolado, o calor perdido por um pode ser recebido pelos outros, de acordo com conservação de energia. Uma forma escolar é somar os calores de cada corpo e impor ΣQ=0, usando Q positivo para recebimento e negativo para perda. A condição requer considerar também o calorímetro, mudanças de fase, perdas e eventuais reações quando relevantes. A temperatura de equilíbrio não é a média aritmética simples se massas ou capacidades térmicas diferem. Para duas porções da mesma substância sem mudança de fase e sem perdas, a temperatura final é média ponderada pelas massas e capacidades térmicas: Tf=(m₁c₁T₁+m₂c₂T₂)/(m₁c₁+m₂c₂). Em situações com mudança de fase, determine primeiro se a energia disponível é suficiente para fundir ou vaporizar completamente uma amostra; só depois calcule temperatura final. A classificação de sistemas isolados é idealização e experimentos reais podem exigir correção de perdas para o ambiente.",
        "example": "Misture 0,20 kg de água a 80 °C com 0,30 kg de água a 20 °C, desprezando o recipiente e perdas. Como c é o mesmo, Tf=(0,20×80+0,30×20)/(0,20+0,30)=(16+6)/0,50=44 °C. O calor perdido pela porção quente é 0,20×c×(44−80), igual em módulo ao ganho da fria, 0,30×c×(44−20).",
        "pitfall": "Não faça média simples (80+20)/2=50 °C quando as massas diferem. O equilíbrio depende da capacidade térmica de cada parte, e perdas externas devem ser consideradas quando informadas.",
        "steps": [
          "Delimite sistema e sinal de calor recebido ou cedido.",
          "Escreva a soma dos calores e equacione o balanço energético.",
          "Resolva temperatura final e confirme que está fisicamente entre as temperaturas iniciais."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "0,50 kg de água recebe calor e passa de 20 °C para 30 °C. Com c=4200 J/(kg·°C), quanto recebe?",
        "options": [
          "2100 J",
          "42.000 J",
          "21.000 J",
          "8400 J"
        ],
        "correctIndex": 2,
        "hint": "Use Q=mcΔT com ΔT=10 °C.",
        "solution": "A alternativa C está correta: Q=0,50×4200×10=21.000 J. As outras opções ignoram a massa, a variação de temperatura ou usam fatores inadequados."
      },
      {
        "level": "intermediate",
        "prompt": "Quanto calor é necessário para fundir 0,20 kg de gelo a 0 °C, usando Lf=334.000 J/kg?",
        "options": [
          "66.800 J",
          "16.700 J",
          "334.000 J",
          "668 J"
        ],
        "correctIndex": 0,
        "hint": "Na fusão use Q=mL, não Q=mcΔT.",
        "solution": "A alternativa A está correta: 0,20×334.000=66.800 J. O aquecimento sensível não é a etapa dominante aqui, pois o gelo já está na temperatura de fusão no modelo."
      },
      {
        "level": "advanced",
        "prompt": "Misturam-se 0,20 kg de água a 80 °C e 0,30 kg de água a 20 °C, sem perdas. Qual a temperatura de equilíbrio?",
        "options": [
          "50 °C",
          "60 °C",
          "35 °C",
          "44 °C"
        ],
        "correctIndex": 3,
        "hint": "Use média ponderada pelas massas porque a substância é a mesma.",
        "solution": "A alternativa D está correta: Tf=(0,20×80+0,30×20)/(0,20+0,30)=44 °C. A média simples de 50 °C ignora que a porção fria tem maior massa."
      }
    ]
  }
];
