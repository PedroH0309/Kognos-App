import type {Stage17Spec} from './authored-lessons-stage17.ts';
export const stage17Batch3:Stage17Spec[]=[
  {
    "subject": "Química",
    "topic": "Modelos atômicos",
    "objective": "Comparar modelos científicos do átomo e explicar como experimentos modificaram interpretações de sua estrutura, sem tratar desenhos escolares como imagens literais.",
    "sections": [
      {
        "title": "De Dalton a Thomson: explicações mudam com evidências",
        "explanation": "John Dalton, no início do século XIX, propôs um modelo com átomos como unidades fundamentais para explicar regularidades nas combinações químicas, mesmo sem conhecer partículas subatômicas. Seu modelo teve limitações posteriormente identificadas, entre elas a existência de isótopos e partículas menores. Investigações com raios catódicos contribuíram para J. J. Thomson identificar o elétron, mostrando que o átomo possuía componentes eletricamente carregados. O modelo associado a Thomson descrevia cargas negativas distribuídas numa estrutura de carga positiva, frequentemente ilustrada como 'pudim de passas'. Essas imagens são representações conceituais, não fotografias. O valor do modelo está em explicar certas evidências e permitir novas perguntas, e sua revisão não significa que toda a química anterior foi inútil.",
        "example": "Uma equação química pode continuar usando proporções de átomos mesmo depois da descoberta do elétron; o modelo posterior amplia a explicação interna sem eliminar toda a conservação de matéria.",
        "pitfall": "Afirmar que Dalton conhecia prótons e elétrons ou que o desenho de Thomson reproduz fielmente o interior observado do átomo.",
        "steps": [
          "Relacione cada modelo ao tipo de evidência disponível quando foi proposto.",
          "Diferencie limites históricos de um modelo de sua utilidade para certas perguntas."
        ]
      },
      {
        "title": "Rutherford e a concentração de massa no núcleo",
        "explanation": "O espalhamento de partículas alfa em lâminas metálicas muito finas forneceu evidências importantes sobre a estrutura atômica. Na interpretação associada a Rutherford, a maioria das partículas atravessava a folha e uma pequena fração desviava fortemente, sugerindo que a carga positiva e grande parte da massa se concentravam em região muito pequena: o núcleo. A maior parte do volume atômico não era preenchida por matéria nuclear compacta. Isso não demonstra, por si, que elétrons seguem trajetórias clássicas estáveis como planetas; modelos posteriores foram necessários para explicar espectros e estabilidade atômica. A representação de um núcleo cercado por elétrons ajuda a organizar a ideia, mas exageros de escala em desenhos são inevitáveis. Uma resposta de prova deve vincular observações a conclusões limitadas, sem inventar dados de um experimento específico.",
        "example": "No modelo de Rutherford, grandes desvios de poucas partículas alfa são coerentes com colisões próximas a um centro concentrado de carga positiva, enquanto muitas atravessam.",
        "pitfall": "Atribuir a Rutherford descoberta de órbitas quânticas modernas ou interpretar o desenho escolar com núcleo enorme como escala real.",
        "steps": [
          "Identifique o padrão de espalhamento e explique por que sugere centro de carga concentrada.",
          "Separe a conclusão sobre o núcleo das perguntas ainda abertas sobre elétrons."
        ]
      },
      {
        "title": "Bohr e a descrição quântica contemporânea",
        "explanation": "Bohr introduziu níveis de energia quantizados em um modelo que explicava aspectos do espectro do hidrogênio, com transições associadas a absorção ou emissão de energia. O modelo de órbitas é útil em algumas situações introdutórias, mas não descreve com precisão átomos multieletrônicos complexos. A teoria quântica moderna emprega estados, orbitais e probabilidades para representar a distribuição dos elétrons; um orbital não é trajetória circular percorrida como estrada. Modelos atômicos convivem em atividades escolares porque resolvem perguntas de profundidade diferente. Ao ver camadas eletrônicas num exercício, entenda que se trata de simplificação do comportamento eletrônico, não imagem de elétrons parados em anéis. Um bom estudo compara problemas explicados por cada teoria e a evidência usada para construir a próxima.",
        "example": "A emissão de luz em certas frequências pelo hidrogênio pode ser associada a diferenças entre níveis energéticos, e não a qualquer quantidade arbitrária de energia.",
        "pitfall": "Afirmar que orbitais são órbitas planetárias ou que os níveis do hidrogênio se aplicam sem ajustes a todos os elementos.",
        "steps": [
          "Diferencie níveis energéticos discretos da ideia de trajetória eletrônica clássica.",
          "Explique por que o modelo quântico amplia limites do esquema de Bohr."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual partícula foi identificada em pesquisas associadas a Thomson?",
        "hint": "Pense na carga negativa que compõe átomos.",
        "solution": "O elétron foi identificado por investigações com raios catódicos; isso mostrou que átomos não eram indivisíveis."
      },
      {
        "level": "basic",
        "prompt": "Que aspecto da matéria o modelo inicial de Dalton procurava explicar?",
        "hint": "Considere proporções em combinações químicas.",
        "solution": "O modelo explicava regularidades de combinação e conservação de átomos em reações, sem descrição subatômica moderna."
      },
      {
        "level": "intermediate",
        "prompt": "O que desvios fortes de poucas partículas alfa sugeriram no modelo de Rutherford?",
        "hint": "Considere a distribuição da carga positiva.",
        "solution": "Sugeriram concentração de carga positiva e massa em núcleo muito pequeno, com grande parte do volume fora desse centro."
      },
      {
        "level": "intermediate",
        "prompt": "Por que o modelo de Thomson não era descrição definitiva do átomo?",
        "hint": "Evidências posteriores mostraram estrutura nuclear.",
        "solution": "Os resultados de espalhamento e outras observações exigiram representar um núcleo concentrado, ausente no esquema de Thomson."
      },
      {
        "level": "advanced",
        "prompt": "Que fenômeno o modelo de Bohr ajudou a explicar para hidrogênio?",
        "hint": "Pense nas linhas de emissão e absorção.",
        "solution": "A existência de linhas espectrais específicas pode ser interpretada por transições entre níveis quantizados de energia."
      },
      {
        "level": "advanced",
        "prompt": "Por que orbital da mecânica quântica não é a mesma coisa que órbita clássica?",
        "hint": "Probabilidade não descreve trajetória fixa.",
        "solution": "O orbital descreve estado e distribuição de probabilidade eletrônica, e não caminho circular definido de um corpo planetário."
      }
    ],
    "everyday": {
      "context": "Ao observar desenhos sucessivos de Dalton, Thomson, Rutherford e Bohr num livro, um estudante pensa que cientistas fotografaram diretamente o átomo e depois simplesmente mudaram sua aparência.",
      "question": "Por que os esquemas representam modelos explicativos que evoluíram com novas evidências?",
      "answer": "Cada modelo descreve certas observações e possui limites. Descoberta do elétron, espalhamento alfa e espectros exigiram explicações sucessivamente mais elaboradas.",
      "connections": [
        {
          "subject": "Química",
          "topic": "Reações químicas e balanceamento",
          "reason": "A conservação de átomos e proporções químicas permanece útil mesmo quando modelos de estrutura atômica evoluem."
        },
        {
          "subject": "Filosofia",
          "topic": "Filosofia da ciência",
          "reason": "A revisão de modelos com novas evidências ilustra natureza provisória, criticável e explicativa do conhecimento científico."
        }
      ]
    }
  },
  {
    "subject": "Química",
    "topic": "Ligação covalente",
    "objective": "Explicar o compartilhamento eletrônico em ligações covalentes, interpretar estruturas de Lewis simples e reconhecer limites da regra do octeto.",
    "sections": [
      {
        "title": "Compartilhar elétrons para estabilizar estruturas",
        "explanation": "A ligação covalente é descrita, em modelos introdutórios, pelo compartilhamento de pares de elétrons entre átomos, frequentemente elementos não metálicos. A ligação resulta de distribuição eletrônica e energia do sistema, não de decisão consciente dos átomos em 'querer' estabilidade. Na molécula H₂, cada hidrogênio contribui com um elétron para o par compartilhado; em H₂O, ligações entre O e H envolvem pares compartilhados, enquanto oxigênio também possui pares não ligantes na estrutura de Lewis usual. A regra do octeto é ferramenta escolar útil em muitos casos, mas hidrogênio segue dueto e moléculas como BF₃ ou espécies com elétrons ímpares exigem tratamento diferente. Um desenho de traço representa par compartilhado e não fio material ligando esferas. A análise deve distinguir molécula, átomo e ligação.",
        "example": "Na molécula de água, dois pares compartilhados formam duas ligações O−H, enquanto o oxigênio possui dois pares não ligantes no esquema de Lewis básico.",
        "pitfall": "Afirmar que todo átomo obrigatoriamente completa oito elétrons ou imaginar que uma linha de Lewis corresponde a um objeto físico rígido.",
        "steps": [
          "Identifique elétrons de valência e quantos pares podem ser compartilhados no modelo.",
          "Desenhe ligações e pares não ligantes sem impor octeto absoluto em toda espécie."
        ]
      },
      {
        "title": "Estruturas de Lewis e multiplicidade da ligação",
        "explanation": "Para moléculas simples, estruturas de Lewis distribuem elétrons de valência entre ligações e pares isolados. A ligação simples corresponde a um par compartilhado, dupla a dois, tripla a três pares em representações usuais. Em O₂, a estrutura elementar pode ser desenhada com ligação dupla; em N₂, com tripla, respeitando o número total de elétrons de valência. Essas estruturas são modelos e não captam por si toda a distribuição quântica dos elétrons, especialmente quando há ressonância ou espécies com elétrons desemparelhados. O número de pares compartilhados influencia propriedades de ligações, mas não deve ser usado isoladamente para prever todas as características de uma substância. Ao construir estrutura, conte elétrons disponíveis, organize átomos e verifique a soma final, em vez de simplesmente desenhar oito pontos sem cálculo.",
        "example": "A fórmula N₂ pode ser representada por N≡N com uma ligação tripla no modelo de Lewis, enquanto H₂ é H−H com um par compartilhado.",
        "pitfall": "Confundir dois traços com duas moléculas diferentes ou esquecer de contabilizar elétrons de valência nos pares não ligantes.",
        "steps": [
          "Conte elétrons de valência disponíveis antes de definir ligações simples, duplas ou triplas.",
          "Revise a soma de elétrons representados e anote limitações quando a espécie não segue octeto."
        ]
      },
      {
        "title": "Ligação e polaridade não são a mesma coisa",
        "explanation": "Numa ligação covalente entre átomos com diferentes eletronegatividades, a distribuição de densidade eletrônica pode ser desigual, originando polaridade da ligação. Entretanto, a polaridade de uma molécula inteira depende também da geometria e da soma vetorial dos dipolos de suas ligações. Água é exemplo comum de molécula polar, enquanto CO₂, apesar de possuir ligações C=O polares, é globalmente apolar em seu estado molecular linear porque os dipolos se compensam. Isso demonstra que descobrir a ligação não basta para prever solubilidade, temperatura de ebulição ou outras propriedades sem considerar interações e estrutura. Comparações devem distinguir ligação covalente, moléculas e redes covalentes, além de não equiparar automaticamente polaridade a presença de íons livres. A linguagem do modelo precisa estar vinculada à organização espacial.",
        "example": "CO₂ apresenta duas ligações C=O polares, mas a geometria linear faz com que a soma dos dipolos de ligação seja nula, produzindo molécula apolar.",
        "pitfall": "Afirmar que toda molécula com ligação polar é polar ou que moléculas covalentes são obrigatoriamente pequenas e gasosas.",
        "steps": [
          "Identifique se as ligações possuem distribuição eletrônica assimétrica no modelo.",
          "Considere a geometria molecular para interpretar a polaridade resultante, sem inferir só por uma ligação."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que caracteriza a ligação covalente em modelos escolares?",
        "hint": "Pense em pares de elétrons compartilhados.",
        "solution": "É uma ligação representada por compartilhamento de pares eletrônicos entre átomos, conforme estrutura e energia do sistema."
      },
      {
        "level": "basic",
        "prompt": "Quantos pares são representados numa ligação covalente simples?",
        "hint": "Uma linha em Lewis representa um par.",
        "solution": "Uma ligação simples representa um par de elétrons compartilhados na estrutura de Lewis convencional."
      },
      {
        "level": "intermediate",
        "prompt": "Na estrutura usual de H₂O, quantas ligações O−H e quantos pares não ligantes há no oxigênio?",
        "hint": "Conte dois hidrogênios e os elétrons de valência do oxigênio.",
        "solution": "Há duas ligações O−H e dois pares não ligantes no átomo de oxigênio no modelo de Lewis."
      },
      {
        "level": "intermediate",
        "prompt": "Por que N₂ pode ser representado com ligação tripla?",
        "hint": "Considere três pares compartilhados entre nitrogênios.",
        "solution": "A representação N≡N utiliza três pares de elétrons compartilhados, compatíveis com a contagem de valência no modelo."
      },
      {
        "level": "advanced",
        "prompt": "Por que a regra do octeto não explica perfeitamente toda espécie covalente?",
        "hint": "Pense em hidrogênio e moléculas deficientes em elétrons.",
        "solution": "Há espécies com dueto, octeto incompleto, expandido ou número ímpar de elétrons; a regra é simplificação útil, não lei universal."
      },
      {
        "level": "advanced",
        "prompt": "Por que CO₂ é globalmente apolar apesar de ter ligações polares?",
        "hint": "Considere a geometria linear e o cancelamento de dipolos.",
        "solution": "Os dipolos das duas ligações C=O se opõem na geometria linear e se compensam, dando momento dipolar total nulo."
      }
    ],
    "everyday": {
      "context": "Uma estudante observa que a água e o dióxido de carbono possuem ligações covalentes e conclui que ambas as moléculas devem ter exatamente a mesma polaridade.",
      "question": "Como a geometria e a distribuição dos elétrons ajudam a interpretar a diferença?",
      "answer": "A água possui geometria angular e dipolo resultante; o CO₂ é linear e os dipolos se anulam. Ligações covalentes não garantem a mesma polaridade.",
      "connections": [
        {
          "subject": "Ciências",
          "topic": "Reações químicas no cotidiano",
          "reason": "Identificar quais espécies participam de uma transformação exige conhecer fórmulas e tipos de ligação sem confundi-los com a própria reação."
        },
        {
          "subject": "Química",
          "topic": "pH e pOH",
          "reason": "A estrutura e interações das espécies em solução ajudam a analisar comportamentos ácido-base além de rótulos de ligação."
        }
      ]
    }
  },
  {
    "subject": "Biologia",
    "topic": "Respiração celular",
    "objective": "Explicar a transformação de energia química da matéria orgânica em ATP, distinguindo glicólise, ciclo do ácido cítrico e cadeia respiratória.",
    "sections": [
      {
        "title": "Energia química, ATP e diferença em relação à respiração pulmonar",
        "explanation": "Respiração celular é um conjunto de processos metabólicos que transferem energia de moléculas orgânicas para ATP, utilizado em trabalho celular. Não deve ser confundida com ventilação pulmonar, que movimenta gases no sistema respiratório: a respiração celular acontece em células, inclusive plantas. Na oxidação aeróbia de glicose, produtos finais globais incluem CO₂ e água, e parte da energia liberada é capturada em ATP enquanto outra parte se dissipa como calor. A equação simplificada C₆H₁₂O₆+6O₂→6CO₂+6H₂O+energia oculta uma rede de reações, não uma combustão explosiva única. Organismos podem usar substratos diferentes da glicose, e certas células obtêm energia em vias sem oxigênio. Uma resposta cuidadosa diferencia liberação de energia, transferência para ATP e destino do carbono.",
        "example": "Uma planta realiza fotossíntese para incorporar carbono quando há condições adequadas, mas também utiliza respiração celular para produzir ATP de que suas células precisam.",
        "pitfall": "Afirmar que plantas respiram somente à noite ou que ATP é produzido apenas por oxigênio entrando diretamente numa célula.",
        "steps": [
          "Diferencie ventilação pulmonar, trocas gasosas e processos metabólicos intracelulares.",
          "Identifique o papel de ATP como intermediário energético, não combustível inalado."
        ]
      },
      {
        "title": "Glicólise e ciclo do ácido cítrico",
        "explanation": "Na glicólise, que ocorre no citosol, uma molécula de glicose é transformada em produtos como piruvato, com produção líquida de pequenas quantidades de ATP e redução de transportadores de elétrons. Em células eucarióticas com oxidação aeróbia, o piruvato pode ser convertido em acetil-CoA, que participa do ciclo do ácido cítrico na matriz mitocondrial. O ciclo libera CO₂ e produz transportadores reduzidos que abastecem etapas posteriores da respiração. Esses processos não devem ser confundidos com fabricação direta de todo ATP da célula; grande parte, em condições típicas aeróbias, associa-se à fosforilação oxidativa. A localização pode diferir em procariontes, que não possuem mitocôndrias, mas realizam vias energéticas em seus compartimentos celulares. As etapas são interdependentes e reguladas.",
        "example": "Na glicólise, o piruvato resulta de transformações da glicose e energia pode ser conservada em ATP e NADH; isso ocorre no citosol, não dentro de tilacoides.",
        "pitfall": "Dizer que a glicólise só existe em animais ou que todo ATP da respiração é fabricado no ciclo do ácido cítrico.",
        "steps": [
          "Organize as etapas por substrato, produtos principais e compartimento em célula eucariótica.",
          "Diferencie produção direta de ATP e geração de transportadores de elétrons para fases seguintes."
        ]
      },
      {
        "title": "Cadeia transportadora, oxigênio e limites da contagem de ATP",
        "explanation": "Na fosforilação oxidativa em mitocôndrias, elétrons de transportadores reduzidos passam por componentes da cadeia respiratória, associados à formação de gradiente de prótons através de membrana interna. A ATP sintase utiliza parte desse gradiente para sintetizar ATP. O oxigênio atua como aceptor final de elétrons na respiração aeróbia típica, formando água, mas não significa que cada molécula de oxigênio vire imediatamente uma molécula de ATP. A quantidade total de ATP obtida por glicose varia conforme tipo celular, transporte e condições, por isso valores escolares fixos são aproximações históricas e não universais. Fermentação regenera transportadores necessários para manter glicólise sem cadeia aeróbia completa e rende menos ATP nesse modelo. Respiração celular conecta biologia, química e ciclos ambientais.",
        "example": "Um músculo em esforço intenso pode recorrer a maior participação de glicólise com fermentação láctica, sem que o processo produza o mesmo saldo energético da oxidação aeróbia completa.",
        "pitfall": "Afirmar que toda glicose rende quantidade idêntica de ATP em qualquer célula ou confundir oxigênio com combustível energético direto.",
        "steps": [
          "Explique como transporte de elétrons e gradiente de prótons se relacionam à ATP sintase.",
          "Interprete balanços de ATP como valores dependentes das hipóteses e dos sistemas celulares."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a função geral do ATP no metabolismo celular?",
        "hint": "Pense na transferência de energia para atividades da célula.",
        "solution": "ATP é intermediário energético utilizado em reações e atividades celulares, sendo continuamente produzido e consumido."
      },
      {
        "level": "basic",
        "prompt": "Em que compartimento ocorre a glicólise em células eucarióticas?",
        "hint": "Não é o mesmo local do ciclo do ácido cítrico.",
        "solution": "A glicólise ocorre no citosol, enquanto etapas posteriores da oxidação aeróbia podem ocorrer nas mitocôndrias."
      },
      {
        "level": "intermediate",
        "prompt": "Por que plantas também realizam respiração celular?",
        "hint": "Fotossíntese e uso de ATP cumprem funções diferentes.",
        "solution": "Células vegetais precisam de ATP para suas atividades, e a respiração celular participa dessa produção mesmo em organismos fotossintetizantes."
      },
      {
        "level": "intermediate",
        "prompt": "Qual o papel dos transportadores NADH e FADH₂ na respiração aeróbia?",
        "hint": "Levam elétrons a etapas posteriores.",
        "solution": "Eles transportam elétrons de reações anteriores à cadeia respiratória, apoiando a formação do gradiente usado na síntese de ATP."
      },
      {
        "level": "advanced",
        "prompt": "Por que o oxigênio é importante na cadeia respiratória aeróbia típica?",
        "hint": "É o aceptor final de elétrons.",
        "solution": "O oxigênio recebe elétrons no término da cadeia e participa da formação de água, permitindo continuidade do transporte eletrônico."
      },
      {
        "level": "advanced",
        "prompt": "Por que não devemos fixar a mesma quantidade exata de ATP por glicose para todos os tipos celulares?",
        "hint": "O rendimento depende de transporte, condições e sistemas.",
        "solution": "As vias e custos de transporte variam entre organismos e células; números didáticos dependem de simplificações, não de valor universal."
      }
    ],
    "everyday": {
      "context": "Uma turma estuda uma planta exposta à luz. Um aluno afirma que, como a planta faz fotossíntese, não precisa mais de respiração celular para suas atividades.",
      "question": "Por que fotossíntese e respiração celular são processos diferentes e complementares?",
      "answer": "Fotossíntese usa luz para fixar carbono em matéria orgânica; respiração celular transfere energia química de substratos para ATP, necessário às atividades das células vegetais.",
      "connections": [
        {
          "subject": "Biologia",
          "topic": "Fotossíntese e quimiossíntese",
          "reason": "Comparar fixação de carbono com oxidação de substratos evita confundir formação de biomassa e produção de ATP."
        },
        {
          "subject": "Ciências",
          "topic": "Ciclos da água e do carbono",
          "reason": "A liberação de CO₂ e a incorporação de carbono em matéria orgânica integram fluxos biogeoquímicos distintos."
        }
      ]
    }
  },
  {
    "subject": "Biologia",
    "topic": "Duplicação do DNA",
    "objective": "Descrever replicação semiconservativa do DNA e os papéis complementares de helicase, DNA polimerase e mecanismos de correção.",
    "sections": [
      {
        "title": "Estrutura complementar e replicação semiconservativa",
        "explanation": "O DNA apresenta duas cadeias complementares, com pareamento A−T e C−G em modelos usuais, permitindo que cada fita sirva de referência para síntese de outra. Na replicação semiconservativa, cada molécula filha conserva uma fita da molécula original e incorpora uma fita recém-sintetizada. Isso não significa que o DNA seja copiado como uma fotografia indivisível; há separação local das cadeias, incorporação de nucleotídeos e ação coordenada de proteínas. A duplicação ocorre antes da divisão celular em ciclos nos quais uma célula precisa transmitir DNA às descendentes, e não novamente entre as divisões meióticas I e II. Em seres vivos, mecanismos de replicação variam em detalhes, mas a complementaridade é fundamento comum. A precisão é elevada, sem eliminar possibilidade de erros e mutações.",
        "example": "Uma fita modelo com sequência 5′-ATGC-3′ orienta cadeia complementar 3′-TACG-5′; as direções antiparalelas são parte da estrutura do DNA.",
        "pitfall": "Afirmar que cada molécula filha recebe duas fitas totalmente novas ou que complementaridade significa cadeias com letras idênticas.",
        "steps": [
          "Identifique as bases complementares e a orientação antiparalela dos filamentos.",
          "Explique como cada fita original serve de molde à síntese de uma nova fita."
        ]
      },
      {
        "title": "Enzimas e direção da síntese",
        "explanation": "A helicase participa da separação local das fitas de DNA, enquanto DNA polimerases sintetizam novas cadeias adicionando nucleotídeos à extremidade 3′, de modo que a síntese ocorre em direção 5′→3′. Em muitos sistemas, a DNA polimerase exige um iniciador, produzido por mecanismos associados à primase, para começar a extensão. Como as duas fitas molde são antiparalelas, há formação de uma fita líder mais contínua e de uma fita tardia com fragmentos posteriormente unidos por ligase. A descrição escolar simplifica um conjunto extenso de proteínas de replicação e processos de coordenação. Não se deve confundir a DNA polimerase da duplicação com RNA polimerase da transcrição; elas trabalham com produtos diferentes. A fidelidade também depende de seleção de nucleotídeos e mecanismos de revisão.",
        "example": "A formação de fragmentos de Okazaki na fita tardia decorre da direção obrigatória 5′→3′ da síntese, apesar das fitas molde orientadas em sentidos opostos.",
        "pitfall": "Supor que DNA polimerase constrói novas fitas nos dois sentidos ou que helicase é a enzima que une fragmentos.",
        "steps": [
          "Assinale a direção 5′→3′ da cadeia nova antes de representar fitas líder e tardia.",
          "Distinga abertura das fitas, síntese de nucleotídeos e união dos fragmentos por suas funções."
        ]
      },
      {
        "title": "Fidelidade, mutações e relação com ciclo celular",
        "explanation": "Erros de replicação podem ocorrer, embora DNA polimerases e sistemas de correção reduzam sua frequência em muitos organismos. Se um erro não é corrigido, pode originar alteração na sequência do DNA e, sob determinadas condições, ser transmitido às células descendentes. Nem toda mutação produz doença ou alteração perceptível; efeitos dependem da posição, tipo de mudança e contexto biológico. A replicação deve ser relacionada à etapa S do ciclo celular e à posterior distribuição de cromossomos, distinguindo duplicação de DNA de aumento do número de conjuntos cromossômicos. Um cromossomo duplicado apresenta cromátides-irmãs, mas a contagem cromossômica por centrômero não necessariamente dobra na fase S. Em provas, essa distinção evita confusões entre número de moléculas de DNA e número de cromossomos.",
        "example": "Uma célula que entra na fase S replica seu DNA, mas não se transforma automaticamente em tetraploide; cada cromossomo duplicado permanece associado a duas cromátides.",
        "pitfall": "Afirmar que toda mutação é prejudicial ou que duplicação do DNA significa duplicação imediata da ploidia da célula.",
        "steps": [
          "Separe alteração de sequência, quantidade de DNA e número de conjuntos cromossômicos.",
          "Conecte o resultado da replicação à segregação do material durante mitose ou meiose."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na replicação semiconservativa, o que cada molécula filha conserva?",
        "hint": "Uma fita deriva da molécula original.",
        "solution": "Cada DNA filho conserva uma fita original como molde e apresenta uma fita nova complementar produzida por síntese."
      },
      {
        "level": "basic",
        "prompt": "Qual base pareia com adenina no DNA comum?",
        "hint": "Considere a regra A−T.",
        "solution": "No DNA de dupla fita usual, adenina forma par complementar com timina, enquanto citosina pareia com guanina."
      },
      {
        "level": "intermediate",
        "prompt": "Em que direção a DNA polimerase sintetiza a nova cadeia?",
        "hint": "A adição ocorre na extremidade 3′.",
        "solution": "A cadeia nova é sintetizada em direção 5′→3′ por adição de nucleotídeos à extremidade 3′."
      },
      {
        "level": "intermediate",
        "prompt": "Por que há fragmentos de Okazaki na fita tardia?",
        "hint": "As fitas molde são antiparalelas e síntese é 5′→3′.",
        "solution": "A síntese em direção fixa sobre fitas antiparalelas exige produção descontínua de trechos que serão unidos."
      },
      {
        "level": "advanced",
        "prompt": "O DNA duplicado significa que uma célula diploide passa imediatamente a tetraploide?",
        "hint": "Diferencie massa de DNA e conjuntos de cromossomos.",
        "solution": "Não. A quantidade de DNA aumenta na fase S, mas a ploidia em conjuntos cromossômicos não dobra automaticamente."
      },
      {
        "level": "advanced",
        "prompt": "Toda mudança na sequência do DNA causa doença? Explique.",
        "hint": "Mutação tem efeitos variados e depende de contexto.",
        "solution": "Não. Mutações podem ser neutras, benéficas ou prejudiciais conforme sequência, condições e efeitos sobre funções biológicas."
      }
    ],
    "everyday": {
      "context": "Uma turma observa um modelo de DNA antes da mitose e conclui que a célula duplicada possui dois conjuntos extras de cromossomos porque passou a ter o dobro de DNA.",
      "question": "Por que duplicar moléculas de DNA não equivale a dobrar imediatamente a ploidia?",
      "answer": "Após a fase S, cromossomos possuem cromátides-irmãs duplicadas, mas a célula mantém a mesma quantidade de conjuntos cromossômicos até a segregação apropriada.",
      "connections": [
        {
          "subject": "Biologia",
          "topic": "Ciclo celular e mitose",
          "reason": "A replicação ocorre antes da mitose e a distribuição das cromátides explica a transmissão da informação genética."
        },
        {
          "subject": "Biologia",
          "topic": "Meiose",
          "reason": "A duplicação antecede a meiose I e não se repete integralmente antes da segunda divisão meiótica."
        }
      ]
    }
  }
];
