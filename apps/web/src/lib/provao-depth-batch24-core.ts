import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Aulas originais Kognos; não oficiais e sem homologação docente. */
export const provaoDepthBatch24Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Origem, ocorrência e uso dos materiais",
    "objective": "Relacionar matérias-primas naturais, processamento industrial, propriedades e impactos ao longo do ciclo de vida de materiais. O estudante deve justificar hipóteses, interpretar evidências e comparar modelos sem confundir fenômenos distintos.",
    "prerequisites": [
      "Matéria e substância",
      "Recursos naturais",
      "Transformações físicas e químicas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Matérias-primas e materiais",
        "explanation": "Minério de ferro não é ferro metálico puro: contém minerais como hematita (Fe₂O₃) e impurezas. A transformação em aço exige extração, beneficiamento e redução química do óxido, seguida de controle da composição da liga. Já areia rica em sílica pode originar vidro mediante fusão com outros componentes, como carbonato de sódio e calcário. Petróleo é uma mistura complexa de hidrocarbonetos que fornece frações e matérias-primas petroquímicas; não é sinônimo de plástico pronto. Materiais naturais, como madeira, podem ser usados com pouco processamento, enquanto polímeros sintéticos demandam síntese. A origem geológica ou biológica não determina, sozinha, segurança, reciclabilidade ou resistência: essas propriedades dependem da composição e da estrutura. Compare matéria-prima, processo e produto para não confundir extração com fabricação. Defina cada espécie e observe se há mistura, reação ou apenas mudança física. A comparação precisa conservar a identidade das substâncias e declarar a escala analisada: partículas, amostra ou processo industrial. Quando uma propriedade for apresentada como tendência, identifique o ambiente, pois temperatura, concentração e composição podem modificar a conclusão.",
        "example": "Para produzir ferro a partir de hematita, escreva Fe₂O₃ + 3CO → 2Fe + 3CO₂. Conte Fe: dois átomos em ambos os lados; O: seis em ambos; C: três em ambos. A reação representa uma etapa idealizada da redução, não toda a operação siderúrgica. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Confundir composição e identidade química com propriedades ou aparência do material.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Propriedades e escolha técnica",
        "explanation": "A seleção de materiais depende de uma combinação de propriedades mensuráveis e condições de uso. Cobre é empregado em condutores porque possui alta condutividade elétrica e boa ductilidade; PVC pode revestir fios porque, em condições usuais, é isolante e processável. Alumínio combina baixa densidade relativa, boa resistência à corrosão pela camada superficial de óxido e maleabilidade. Aço costuma oferecer elevada resistência mecânica, mas sua corrosão depende da liga e do ambiente. Vidro é transparente em muitas formulações, porém frágil sob impacto; nem todo vidro resiste a choque térmico. Materiais compósitos podem reunir reforço fibroso e matriz polimérica para melhorar relação resistência/massa, mas dificultar separação para reciclagem. A escolha exige comparar desempenho, custo, durabilidade e riscos, não apenas dizer que um material é 'melhor'. Na resolução, separe dados conhecidos, hipótese do modelo e conclusão observável. O cálculo ou classificação só é válido se as unidades e as espécies forem consistentes; uma proporção química não substitui o conhecimento das condições reais do processo. Compare pelo menos uma alternativa e indique por que ela falha na situação descrita.",
        "example": "Para uma linha elétrica aérea, compare cobre e alumínio: o cobre conduz melhor por seção, mas o alumínio tem massa menor por comprimento. Passo 1: defina o critério; passo 2: compare condutividade e densidade; passo 3: considere estrutura e custo antes de escolher. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Aplicar uma regra sem verificar condições, unidades ou mecanismo envolvido.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Ciclo de vida e circularidade",
        "explanation": "A avaliação do ciclo de vida considera extração, processamento, transporte, uso e destinação final. Uma embalagem reutilizável pode reduzir resíduos por uso, mas sua fabricação e lavagem também consomem recursos; o resultado depende do número de reutilizações e da matriz energética. Reciclar alumínio geralmente demanda menos energia que produzi-lo a partir de minério, mas coleta, triagem e contaminação influenciam a eficiência. O símbolo de reciclável não garante que a infraestrutura local aceite o produto. Reutilização, reparo e redução de consumo são estratégias diferentes de reciclagem. Substituir plástico por vidro sem avaliar massa transportada e número de ciclos pode deslocar impactos em vez de eliminá-los. Em comparações ambientais, declare a unidade funcional — por exemplo, entregar mil litros de bebida — e as fronteiras da análise; sem isso, porcentagens isoladas podem induzir erro. Ao extrapolar para problemas novos, investigue o que permanece conservado, quais variáveis mudam e quais simplificações deixam de funcionar. Uma evidência isolada não demonstra mecanismo completo: confronte previsões com medições e diferencie uma regra aproximada de uma identidade física ou química.",
        "example": "Considere 100 garrafas que atendem a 1.000 usos: cada uma precisa realizar em média 10 ciclos. Primeiro divida usos por unidades; depois inclua perdas e lavagem; por fim compare com alternativas usando a mesma função, não apenas a massa da embalagem. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Generalizar um modelo idealizado para sistemas reais sem examinar exceções.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual afirmação distingue minério e metal produzido?",
        "options": [
          "Hematita é sempre ferro metálico puro",
          "Ferro metálico pode ser obtido pela redução de óxidos de ferro",
          "Petróleo já é um polímero sintético",
          "Vidro é extraído pronto da areia"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "Hematita contém óxido de ferro, não ferro metálico isolado. A redução remove oxigênio do composto para produzir ferro; as outras alternativas confundem matéria-prima, substância e produto industrial. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "intermediate",
        "prompt": "Por que PVC pode revestir um fio de cobre?",
        "options": [
          "Porque ambos são excelentes condutores",
          "Porque PVC transforma corrente em calor sem perdas",
          "Porque PVC atua como isolante e cobre como condutor",
          "Porque cobre é sempre menos denso que PVC"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "O núcleo de cobre conduz cargas, enquanto o revestimento de PVC reduz contato elétrico externo nas condições de projeto. A aplicação combina propriedades distintas e não exige que o isolante conduza corrente. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "advanced",
        "prompt": "O que torna válida uma comparação ambiental entre embalagens?",
        "options": [
          "Comparar só o preço de compra",
          "Comparar só a cor da embalagem",
          "Ignorar transporte e lavagem",
          "Fixar unidade funcional e fronteiras do ciclo de vida"
        ],
        "correctIndex": 3,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "A unidade funcional garante que as alternativas prestem o mesmo serviço; fronteiras explícitas evitam excluir etapas relevantes, como lavagem, transporte e descarte. Sem esses critérios, o resultado não é comparável. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Ocorrência e Importância da água para a vida",
    "objective": "Explicar distribuição de água, funções biológicas, potabilidade e impactos da disponibilidade hídrica. O estudante deve justificar hipóteses, interpretar evidências e comparar modelos sem confundir fenômenos distintos.",
    "prerequisites": [
      "Estados físicos",
      "Polaridade molecular",
      "Ciclo hidrológico"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Água no planeta e nos organismos",
        "explanation": "A água cobre grande parte da superfície terrestre, mas a maior parcela do volume global é salgada; da água doce, quantidades expressivas estão em geleiras e aquíferos, não diretamente disponíveis em rios. Por isso, abundância planetária não significa acesso universal a água potável. A molécula H₂O é angular e polar, permitindo interações por ligações de hidrogênio; essas interações ajudam a explicar calor específico elevado e capacidade de dissolver muitas substâncias iônicas e polares. Em células, a água funciona como meio de reações, transporte e regulação térmica. Ela não dissolve igualmente todas as substâncias: óleos apolares tendem a formar outra fase. A presença de água é condição importante para a vida conhecida, mas disponibilidade, composição química e qualidade variam conforme o ambiente. É essencial distinguir água doce, água tratada e água potável. Defina cada espécie e observe se há mistura, reação ou apenas mudança física. A comparação precisa conservar a identidade das substâncias e declarar a escala analisada: partículas, amostra ou processo industrial. Quando uma propriedade for apresentada como tendência, identifique o ambiente, pois temperatura, concentração e composição podem modificar a conclusão.",
        "example": "Considere 1.000 L de água hipotética com 97% salgada: 970 L são salgados e 30 L não salgados. Primeiro converta porcentagem em fração; depois multiplique pelo volume; por fim observe que os 30 L não são automaticamente potáveis. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Confundir composição e identidade química com propriedades ou aparência do material.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Osmose, transporte e temperatura",
        "explanation": "Membranas semipermeáveis permitem passagem seletiva de água; em osmose, a água tende a migrar para o lado com menor potencial químico da água, frequentemente associado a maior concentração efetiva de solutos não permeantes. Uma hemácia em solução fortemente hipotônica pode absorver água e sofrer lise; em solução hipertônica, perde água e encolhe. Esses efeitos dependem da permeabilidade da membrana e da composição da solução, não apenas do nome do soluto. O alto calor específico da água ajuda a moderar oscilações de temperatura em organismos e ambientes aquáticos, mas não impede aquecimento. Evaporação remove energia térmica da superfície, mecanismo usado no suor; a eficiência depende da umidade e da ventilação. Água também transporta nutrientes e resíduos no sangue, seiva e fluidos extracelulares, com mecanismos distintos em cada organismo. Na resolução, separe dados conhecidos, hipótese do modelo e conclusão observável. O cálculo ou classificação só é válido se as unidades e as espécies forem consistentes; uma proporção química não substitui o conhecimento das condições reais do processo. Compare pelo menos uma alternativa e indique por que ela falha na situação descrita.",
        "example": "Em duas soluções separadas por membrana permeável apenas à água, A tem 0,10 mol/L e B 0,30 mol/L de soluto não permeante. Identifique B como mais concentrada; preveja fluxo líquido inicial de A para B; ressalve que o equilíbrio depende da pressão e dos volumes. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Aplicar uma regra sem verificar condições, unidades ou mecanismo envolvido.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Potabilidade e saneamento",
        "explanation": "Água visualmente transparente pode conter microrganismos patogênicos, metais ou compostos dissolvidos; aparência não comprova potabilidade. Em tratamento convencional, coagulação e floculação agregam partículas, decantação e filtração removem sólidos e desinfecção reduz agentes infecciosos. A sequência concreta depende da qualidade da fonte e da tecnologia disponível. Ferver água pode inativar muitos patógenos, mas não elimina metais dissolvidos e pode concentrar contaminantes não voláteis. Esgoto sem tratamento aumenta carga orgânica e nutrientes, podendo favorecer eutrofização: proliferação de algas, decomposição e redução do oxigênio dissolvido. Escassez hídrica envolve distribuição desigual, infraestrutura, poluição e demanda, não apenas ausência de chuva. Avaliar segurança exige parâmetros microbiológicos e químicos e referência a normas vigentes, não uma única observação. Ao extrapolar para problemas novos, investigue o que permanece conservado, quais variáveis mudam e quais simplificações deixam de funcionar. Uma evidência isolada não demonstra mecanismo completo: confronte previsões com medições e diferencie uma regra aproximada de uma identidade física ou química.",
        "example": "Após chuva, uma amostra fica turva. Passo 1: identifique partículas suspensas; passo 2: indique filtração como remoção física possível; passo 3: explique que filtrar não garante eliminação de patógenos e que a desinfecção e análises continuam necessárias. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Generalizar um modelo idealizado para sistemas reais sem examinar exceções.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que água doce não é necessariamente potável?",
        "options": [
          "Porque toda água doce contém sal demais",
          "Porque potabilidade depende também de contaminantes químicos e biológicos",
          "Porque água potável não pode conter minerais",
          "Porque água doce não existe em aquíferos"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "Água doce descreve salinidade relativamente baixa; potabilidade requer segurança microbiológica e química. Água doce pode conter patógenos ou contaminantes, e minerais em níveis adequados não impedem potabilidade. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "intermediate",
        "prompt": "Uma célula em solução fortemente hipertônica tende a:",
        "options": [
          "Ganhar água e romper imediatamente",
          "Produzir água por fotossíntese",
          "Perder água por osmose",
          "Manter sempre o mesmo volume"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "Em uma solução externa hipertônica de solutos não permeantes, o fluxo líquido de água tende a sair da célula, reduzindo seu volume. A resposta depende de membrana e condições, não de um efeito universal instantâneo. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação sobre ferver água está correta?",
        "options": [
          "Remove obrigatoriamente metais dissolvidos",
          "Garante ausência de todo contaminante químico",
          "É equivalente à filtração de partículas",
          "Pode inativar patógenos, mas não remove metais dissolvidos"
        ],
        "correctIndex": 3,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "O aquecimento adequado reduz muitos agentes infecciosos, porém não retira contaminantes não voláteis dissolvidos. A segurança completa exige conhecer a fonte e os riscos presentes. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Representação de substâncias e de transformações químicas",
    "objective": "Interpretar fórmulas, coeficientes, estados físicos e conservação de átomos em equações químicas. O estudante deve justificar hipóteses, interpretar evidências e comparar modelos sem confundir fenômenos distintos.",
    "prerequisites": [
      "Átomos e elementos",
      "Fórmulas químicas",
      "Conservação de massa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Fórmulas, índices e coeficientes",
        "explanation": "Uma fórmula química informa a composição de uma espécie: H₂O indica dois átomos de hidrogênio e um de oxigênio por molécula, enquanto NaCl expressa proporção 1:1 de íons em um sólido iônico, não uma molécula isolada de sal. Índices subscritos pertencem à identidade da fórmula; coeficientes à frente representam quantidades relativas de unidades formulares ou moléculas. Assim, 2H₂O indica duas unidades de água, contendo quatro átomos de H e dois de O no total. Alterar H₂O para H₂O₂ muda a substância; ajustar coeficientes não muda as espécies químicas. Símbolos (s), (l), (g) e (aq) identificam estados ou solução aquosa e ajudam a interpretar evidências de precipitação e desprendimento gasoso. Equações são modelos da transformação, não fotografias de cada etapa microscópica. Defina cada espécie e observe se há mistura, reação ou apenas mudança física. A comparação precisa conservar a identidade das substâncias e declarar a escala analisada: partículas, amostra ou processo industrial. Quando uma propriedade for apresentada como tendência, identifique o ambiente, pois temperatura, concentração e composição podem modificar a conclusão.",
        "example": "Em 3CO₂, conte três moléculas, três átomos de C e seis de O. Primeiro leia o índice ₂ como dois oxigênios por molécula; depois multiplique pelo coeficiente 3; por fim não transforme CO₂ em CO₃. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Confundir composição e identidade química com propriedades ou aparência do material.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Balanceamento por conservação",
        "explanation": "Balancear uma equação significa escolher coeficientes que conservem a quantidade de átomos de cada elemento, pois reações químicas comuns reorganizam átomos sem criar ou destruir núcleos. Na combustão completa do metano, CH₄ + 2O₂ → CO₂ + 2H₂O: carbono 1=1, hidrogênio 4=4 e oxigênio 4=4. Comece pelos elementos que aparecem em menos espécies, deixe oxigênio ou hidrogênio para depois quando conveniente e verifique todos ao final. Coeficientes podem ser multiplicados por um mesmo fator sem mudar a proporção estequiométrica, mas normalmente escolhem-se os menores inteiros positivos. A equação balanceada não prova que a reação ocorrerá espontaneamente nem informa sua velocidade; essas questões exigem termodinâmica e cinética. Também não garante rendimento de 100% em sistemas reais. Na resolução, separe dados conhecidos, hipótese do modelo e conclusão observável. O cálculo ou classificação só é válido se as unidades e as espécies forem consistentes; uma proporção química não substitui o conhecimento das condições reais do processo. Compare pelo menos uma alternativa e indique por que ela falha na situação descrita.",
        "example": "Balanceie Al + O₂ → Al₂O₃. Passo 1: use 2Al₂O₃ para obter seis oxigênios; passo 2: use 3O₂; passo 3: ajuste para 4Al. Resultado: 4Al + 3O₂ → 2Al₂O₃. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Aplicar uma regra sem verificar condições, unidades ou mecanismo envolvido.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Estequiometria e interpretação crítica",
        "explanation": "Coeficientes fornecem razões em quantidade de matéria, não necessariamente em massa ou volume para qualquer condição. Em 2H₂ + O₂ → 2H₂O, dois mol de H₂ reagem com um mol de O₂ para formar dois mol de água, assumindo reação completa e reagentes nas proporções adequadas. A massa se conserva: 4 g de H₂ com 32 g de O₂ podem gerar 36 g de H₂O em um sistema fechado ideal. Se houver reagente limitante, a quantidade de produto depende dele; excesso de reagente permanece. Equações iônicas líquidas podem omitir íons espectadores para destacar a mudança química, mas devem conservar carga elétrica além dos átomos. Uma reação que produz gás pode parecer perder massa em recipiente aberto porque matéria escapou; isso não viola conservação em um sistema fechado. Sempre diferencie observação experimental, representação e hipótese de rendimento. Ao extrapolar para problemas novos, investigue o que permanece conservado, quais variáveis mudam e quais simplificações deixam de funcionar. Uma evidência isolada não demonstra mecanismo completo: confronte previsões com medições e diferencie uma regra aproximada de uma identidade física ou química.",
        "example": "Para 6 mol de H₂ e 2 mol de O₂, compare a razão requerida 2:1: 2 mol de O₂ consomem 4 mol de H₂ e formam 4 mol de H₂O. Restam 2 mol de H₂; portanto O₂ é o limitante, se a reação ocorrer completamente. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Generalizar um modelo idealizado para sistemas reais sem examinar exceções.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que muda ao trocar H₂O por H₂O₂?",
        "options": [
          "Somente o coeficiente estequiométrico",
          "A identidade química da espécie",
          "Somente o estado físico",
          "A quantidade de água sem alterar fórmula"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "Índices subscritos definem a composição da espécie: H₂O e H₂O₂ são substâncias distintas. Para representar duas moléculas de água, escreva 2H₂O, mantendo a fórmula. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "intermediate",
        "prompt": "Qual é o balanceamento correto de Al + O₂ → Al₂O₃?",
        "options": [
          "Al + O₂ → Al₂O₃",
          "2Al + O₂ → 2Al₂O₃",
          "4Al + 3O₂ → 2Al₂O₃",
          "2Al + 3O₂ → Al₂O₃"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "A alternativa correta conserva quatro átomos de alumínio e seis de oxigênio em cada lado. As demais deixam pelo menos um elemento com contagem desigual. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "advanced",
        "prompt": "Em 2H₂ + O₂ → 2H₂O, com 6 mol H₂ e 2 mol O₂, o máximo teórico de água é:",
        "options": [
          "2 mol",
          "6 mol",
          "8 mol",
          "4 mol"
        ],
        "correctIndex": 3,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "Dois mol de O₂ exigem quatro mol de H₂ e formam quatro mol de água. O oxigênio limita a reação e sobram dois mol de hidrogênio, supondo conversão completa. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Elementos químicos e Classificação Periódica: história, organização, representação e",
    "objective": "Interpretar número atômico, períodos, grupos e tendências periódicas com base na estrutura eletrônica. O estudante deve justificar hipóteses, interpretar evidências e comparar modelos sem confundir fenômenos distintos.",
    "prerequisites": [
      "Prótons e elétrons",
      "Configuração eletrônica",
      "Carga nuclear"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Número atômico e organização",
        "explanation": "A tabela periódica moderna ordena elementos pelo número atômico Z, isto é, quantidade de prótons no núcleo, e não pela massa atômica crescente. Mendeleev organizou elementos segundo propriedades e massas conhecidas, deixando lacunas e prevendo características; a compreensão posterior do número atômico explicou anomalias dessa organização. Em um átomo neutro, número de elétrons é igual a Z; em um íon, a quantidade de elétrons muda, mas Z e identidade do elemento permanecem. Linhas horizontais são períodos e colunas verticais são grupos. Elementos do mesmo grupo frequentemente exibem propriedades químicas relacionadas devido a padrões de elétrons de valência, embora exceções sejam relevantes, especialmente em metais de transição. Isótopos têm mesmo Z e diferentes números de nêutrons; a massa atômica tabulada é média ponderada das abundâncias isotópicas naturais, não a massa de um átomo individual. Defina cada espécie e observe se há mistura, reação ou apenas mudança física. A comparação precisa conservar a identidade das substâncias e declarar a escala analisada: partículas, amostra ou processo industrial. Quando uma propriedade for apresentada como tendência, identifique o ambiente, pois temperatura, concentração e composição podem modificar a conclusão.",
        "example": "Para Z=17 e A=35, determine 17 prótons e 18 nêutrons; se o átomo for neutro, 17 elétrons. Primeiro use Z para prótons; depois A−Z para nêutrons; finalmente considere a carga antes de contar elétrons. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Confundir composição e identidade química com propriedades ou aparência do material.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Períodos, grupos e valência",
        "explanation": "Elementos representativos de um mesmo grupo frequentemente possuem configuração de valência semelhante: sódio e potássio têm um elétron na camada mais externa e tendem a formar cátions +1 em muitos compostos. Cloro e bromo pertencem ao grupo 17 e frequentemente formam ânions −1 em sais iônicos, mas podem apresentar diferentes estados de oxidação em compostos covalentes. Ao avançar num período, aumenta a carga nuclear e, de maneira geral, diminui o raio atômico efetivo, pois os elétrons adicionados ocupam a mesma camada principal e a atração nuclear efetiva cresce. Ao descer um grupo, novas camadas eletrônicas tendem a aumentar o raio. Essas são tendências gerais, não fórmulas que substituam dados experimentais. Metais, ametais e semimetais ocupam regiões características; sua classificação não garante comportamento idêntico em todas as reações. Na resolução, separe dados conhecidos, hipótese do modelo e conclusão observável. O cálculo ou classificação só é válido se as unidades e as espécies forem consistentes; uma proporção química não substitui o conhecimento das condições reais do processo. Compare pelo menos uma alternativa e indique por que ela falha na situação descrita.",
        "example": "Compare Na (Z=11) e K (Z=19): ambos têm um elétron de valência em configuração fundamental; K ocupa período mais baixo e tem raio atômico geralmente maior. Identifique grupo, compare número de camadas e só então conclua. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Aplicar uma regra sem verificar condições, unidades ou mecanismo envolvido.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Energia de ionização e exceções",
        "explanation": "Energia de primeira ionização é a energia necessária para remover um elétron de um átomo isolado no estado gasoso. Ela tende a aumentar da esquerda para a direita em um período e diminuir ao descer um grupo, mas subníveis, repulsão entre elétrons e configurações especialmente estáveis produzem exceções. Afinidade eletrônica e eletronegatividade não são a mesma grandeza: a primeira envolve variação energética ao adicionar elétron a espécie gasosa, enquanto a segunda descreve tendência relativa de atrair densidade eletrônica em ligação. O flúor tem eletronegatividade elevada, mas não se deve inferir que toda substância com flúor seja iônica. Gases nobres possuem camadas de valência completas nas configurações usuais e baixa reatividade relativa; alguns formam compostos em condições específicas. Use tendências para formular previsões fundamentadas, depois confronte-as com estrutura eletrônica e evidências. Ao extrapolar para problemas novos, investigue o que permanece conservado, quais variáveis mudam e quais simplificações deixam de funcionar. Uma evidência isolada não demonstra mecanismo completo: confronte previsões com medições e diferencie uma regra aproximada de uma identidade física ou química.",
        "example": "Compare Na e Mg no mesmo período: Mg geralmente tem maior primeira energia de ionização devido à maior atração nuclear efetiva. Defina a grandeza para átomos gasosos, identifique o período e ressalve que tendências possuem exceções. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Generalizar um modelo idealizado para sistemas reais sem examinar exceções.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que define a identidade de um elemento químico?",
        "options": [
          "Número de nêutrons",
          "Número de prótons",
          "Massa da amostra",
          "Quantidade de moléculas"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "O número atômico Z é o número de prótons e define o elemento. Isótopos podem ter nêutrons diferentes sem mudar a identidade química. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "intermediate",
        "prompt": "Qual tendência geral ocorre ao descer um grupo da tabela periódica?",
        "options": [
          "O número atômico diminui",
          "Todos os elementos ficam gasosos",
          "O raio atômico tende a aumentar",
          "A camada de valência desaparece"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "Ao descer um grupo, níveis eletrônicos adicionais tendem a aumentar o tamanho do átomo. A tendência é geral e pode exigir análise detalhada em casos específicos. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "advanced",
        "prompt": "A primeira energia de ionização corresponde a:",
        "options": [
          "Energia liberada na fusão de um sólido",
          "Energia de ligação entre duas moléculas",
          "Massa do elétron removido",
          "Energia para retirar elétron de átomo gasoso"
        ],
        "correctIndex": 3,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "A definição refere-se à remoção de um elétron de um átomo isolado no estado gasoso. Não equivale à eletronegatividade nem à energia de mudança de fase. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Características gerais das ligações químicas: ligação covalente, ligação iônica e ligação metálica",
    "objective": "Comparar modelos de ligação, propriedades e limitações de classificações simples de substâncias. O estudante deve justificar hipóteses, interpretar evidências e comparar modelos sem confundir fenômenos distintos.",
    "prerequisites": [
      "Elétrons de valência",
      "Íons e cargas",
      "Tabela periódica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Ligação iônica e rede cristalina",
        "explanation": "Uma ligação iônica envolve atração eletrostática entre espécies de cargas opostas; em sólidos como NaCl, íons Na⁺ e Cl⁻ formam uma rede cristalina tridimensional, não moléculas discretas NaCl independentes. O modelo de transferência eletrônica ajuda a compreender a formação de íons, mas o sólido resulta de um conjunto de interações eletrostáticas. A fórmula NaCl expressa a proporção mínima de cargas balanceadas; MgCl₂ indica um cátion Mg²⁺ para dois ânions Cl⁻. Compostos iônicos costumam ter altos pontos de fusão e são frágeis sob deformação porque o deslocamento de planos pode aproximar íons de mesma carga. No estado sólido, íons não se deslocam livremente e a condução elétrica é geralmente baixa; fundidos ou dissolvidos em água, muitos conduzem. Nem todo composto iônico é solúvel em água e nem toda ligação entre metal e ametal é puramente iônica. Defina cada espécie e observe se há mistura, reação ou apenas mudança física. A comparação precisa conservar a identidade das substâncias e declarar a escala analisada: partículas, amostra ou processo industrial. Quando uma propriedade for apresentada como tendência, identifique o ambiente, pois temperatura, concentração e composição podem modificar a conclusão.",
        "example": "Monte MgCl₂: Mg tende a formar Mg²⁺ e Cl tende a formar Cl⁻. Para neutralidade, são necessários dois Cl⁻ por Mg²⁺. Some as cargas +2−1−1=0; escreva MgCl₂, sem transformar o índice em coeficiente. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Confundir composição e identidade química com propriedades ou aparência do material.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Ligação covalente e geometria",
        "explanation": "Na ligação covalente, átomos compartilham densidade eletrônica em orbitais de ligação; H₂ é exemplo de ligação entre átomos iguais, enquanto HCl apresenta compartilhamento polarizado em direção ao cloro. Compartilhamento não significa que elétrons estejam sempre igualmente distribuídos: diferenças de eletronegatividade e geometria molecular determinam polaridade de ligações e da molécula. CO₂ tem ligações C=O polares, mas geometria linear simétrica, resultando em momento dipolar molecular aproximadamente nulo. H₂O é angular e polar. Substâncias covalentes podem formar moléculas discretas, como CO₂, ou redes covalentes extensas, como diamante e sílica; estas últimas não devem ser tratadas como sólidos moleculares de baixo ponto de fusão. A regra do octeto ajuda em muitos casos representativos, mas há exceções como BF₃, radicais e espécies hipervalentes. Na resolução, separe dados conhecidos, hipótese do modelo e conclusão observável. O cálculo ou classificação só é válido se as unidades e as espécies forem consistentes; uma proporção química não substitui o conhecimento das condições reais do processo. Compare pelo menos uma alternativa e indique por que ela falha na situação descrita.",
        "example": "Compare H₂O e CO₂: desenhe H–O–H angular e O=C=O linear; identifique polaridade das ligações; some qualitativamente os vetores dipolares. Em H₂O não se cancelam, em CO₂ cancelam-se pela simetria. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Aplicar uma regra sem verificar condições, unidades ou mecanismo envolvido.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Ligação metálica e propriedades",
        "explanation": "Metais são modelados por uma rede de núcleos e elétrons deslocalizados; a descrição moderna envolve bandas eletrônicas e permite explicar condutividade, brilho e, em muitos casos, maleabilidade. Diferentemente de um sólido iônico típico, camadas de átomos metálicos podem deslizar sem que surja uma repulsão rígida entre planos de íons de mesma carga da mesma maneira. Ligas metálicas, como aço e bronze, alteram resistência, dureza e corrosão em relação aos metais puros; não são necessariamente compostos com proporção fixa. A condução elétrica dos metais ocorre no estado sólido, ao contrário do comportamento típico de cristais iônicos. Nem todo material condutor é metal: grafite possui elétrons deslocalizados em suas camadas. Modelos iônico, covalente e metálico são idealizações úteis, e muitos materiais exibem caráter de ligação misto; não classifique apenas pela presença de um símbolo metálico. Ao extrapolar para problemas novos, investigue o que permanece conservado, quais variáveis mudam e quais simplificações deixam de funcionar. Uma evidência isolada não demonstra mecanismo completo: confronte previsões com medições e diferencie uma regra aproximada de uma identidade física ou química.",
        "example": "Compare fio de cobre e cristal de NaCl seco: o cobre conduz por portadores eletrônicos móveis; no NaCl sólido, íons estão presos na rede. Ao fundir NaCl, íons móveis podem conduzir; a mudança não transforma a ligação em metálica. Confira a representação, as condições assumidas e a justificativa de cada passo antes de generalizar o resultado.",
        "pitfall": "Generalizar um modelo idealizado para sistemas reais sem examinar exceções.",
        "steps": [
          "Identifique espécies, dados e condições de contorno do caso concreto.",
          "Resolva usando o modelo químico explicitado e verifique cada etapa.",
          "Confira conservação, hipóteses e limites da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual fórmula neutraliza Mg²⁺ e Cl⁻?",
        "options": [
          "MgCl",
          "MgCl₂",
          "Mg₂Cl",
          "Mg₂Cl₃"
        ],
        "correctIndex": 1,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "Um cátion Mg²⁺ exige dois ânions Cl⁻ para soma de cargas zero. A proporção mínima é MgCl₂, não uma molécula discreta de sal. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "intermediate",
        "prompt": "Por que CO₂ é apolar como molécula apesar das ligações C=O polares?",
        "options": [
          "Porque não possui elétrons",
          "Porque carbono é metal",
          "Porque a geometria linear cancela os dipolos",
          "Porque toda ligação dupla é apolar"
        ],
        "correctIndex": 2,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "Os vetores dipolares das duas ligações C=O são opostos e se cancelam na geometria linear simétrica. Polaridade molecular depende da geometria além da polaridade das ligações. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      },
      {
        "level": "advanced",
        "prompt": "Qual material costuma conduzir eletricidade no estado sólido?",
        "options": [
          "NaCl cristalino seco",
          "Sacarose cristalina",
          "Gelo puro",
          "Cobre metálico"
        ],
        "correctIndex": 3,
        "hint": "Identifique a definição e teste cada alternativa contra o mecanismo apresentado na aula.",
        "solution": "No cobre há elétrons móveis que transportam carga elétrica. NaCl sólido tem íons fixos, enquanto sacarose e gelo puro são maus condutores nas condições usuais. As outras opções contradizem a definição, a conservação ou as condições da situação; por isso não são equivalentes ao gabarito indicado."
      }
    ]
  }
];
