import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Conteúdo original Kognos, não oficial e sem homologação docente. */
export const provaoDepthBatch43Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Propriedades coligativas: conceitos e aspectos qualitativos",
    "objective": "Prever mudanças de pressão de vapor, ebulição, congelamento e osmose pela quantidade de partículas dissolvidas, explicitando hipóteses de diluição e não volatilidade.",
    "prerequisites": [
      "Soluções e concentração molal",
      "Mudanças de fase e equilíbrio líquido-vapor",
      "Dissociação iônica e quantidade de matéria"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Partículas e pressão de vapor",
        "explanation": "Uma propriedade coligativa depende, no modelo ideal diluído, principalmente do número de partículas de soluto em relação ao solvente, e não de sua identidade química. Ao dissolver um soluto não volátil em água, parte das posições da superfície passa a estar associada à solução; a fração molar do solvente diminui e sua pressão de vapor de equilíbrio fica abaixo da pressão da água pura à mesma temperatura. A forma idealizada da lei de Raoult é p = x_solvente × p°; ela pressupõe solução suficientemente ideal, solvente volátil e soluto não volátil. Dissolver glicose produz moléculas; dissolver NaCl, quando dissociado, produz íons Na⁺ e Cl⁻, aproximadamente duas partículas por fórmula unitária em diluição adequada. O fator de van ’t Hoff i resume o número efetivo de partículas, mas pode ser menor que o valor inteiro por associação iônica. Não se pode deduzir a pressão exata de uma solução concentrada só contando partículas.",
        "example": "Compare duas soluções aquosas diluídas: 0,10 mol de glicose em 1 kg de água fornece cerca de 0,10 mol de partículas; 0,10 mol de NaCl fornece aproximadamente 0,20 mol de íons. Primeiro conte as unidades dissolvidas, depois considere dissociação, e por fim compare o abaixamento relativo da pressão de vapor, maior no segundo caso ideal.",
        "pitfall": "Não confundir massa de soluto com quantidade de partículas: massas iguais de substâncias diferentes podem corresponder a números de mols diferentes.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Ebulição e congelamento",
        "explanation": "Um líquido entra em ebulição quando sua pressão de vapor alcança a pressão externa. Como o soluto não volátil reduz a pressão de vapor, é preciso aquecer mais a solução para atingir essa condição: ocorre elevação ebulioscópica. O congelamento também é deslocado: a solução líquida permanece termodinamicamente favorecida até temperatura menor que a do solvente puro, fenômeno denominado depressão crioscópica. Para soluções diluídas ideais, ΔTb = i Kb m e ΔTf = i Kf m, em que m é molalidade, Kb e Kf são constantes do solvente e i representa partículas efetivas. As relações não descrevem automaticamente soluções saturadas, misturas com solutos voláteis ou sistemas em que ocorrem reações e mudanças de fase complexas. Sal em gelo altera o equilíbrio e pode ajudar a derreter gelo, mas não significa que a mistura se aqueceu espontaneamente. Na análise de dados, use sempre a mesma pressão externa ao comparar pontos de ebulição.",
        "example": "Para água, Kf≈1,86 °C·kg/mol. Uma solução ideal de glicose 0,50 mol/kg tem ΔTf≈1×1,86×0,50=0,93 °C; logo congela aproximadamente a −0,93 °C. Para NaCl idealmente dissociado, i≈2 e ΔTf≈1,86 °C; portanto congela por volta de −1,86 °C. Confira que os valores são aproximações diluídas.",
        "pitfall": "Não interpretar a depressão do ponto de congelamento como redução da temperatura atual: ela desloca a temperatura de equilíbrio da transição.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Osmose e limites da idealidade",
        "explanation": "Uma membrana semipermeável permite, no modelo clássico, passagem de solvente e restringe a passagem de determinadas espécies dissolvidas. Quando separa soluções com diferentes concentrações efetivas de partículas impermeantes, a tendência de fluxo de água é da região com menor concentração dessas partículas para a de maior concentração, até que diferenças de pressão e potencial químico equilibrem o sistema. A pressão osmótica ideal obedece π≈iMRT, em que M é molaridade e T é temperatura absoluta. O cálculo pressupõe solução diluída, membrana seletiva e comportamento aproximadamente ideal; células vivas possuem canais, transporte ativo e solutos permeantes que exigem modelos adicionais. Uma solução isotônica produz efeito osmótico líquido semelhante ao meio celular, mas isotonicidade não é sinônimo de igualdade de todas as concentrações químicas. A osmose reversa aplica pressão superior à osmótica para forçar fluxo de solvente no sentido oposto, princípio usado em dessalinização.",
        "example": "Considere glicose 0,10 mol/L a 300 K e R=0,082 L·atm/(mol·K). Como i=1, π≈0,10×0,082×300=2,46 atm. Primeiro converta a temperatura para kelvin, depois use a concentração de partículas impermeantes e confira a unidade atm. Uma membrana permeável à glicose invalidaria essa estimativa de pressão osmótica efetiva.",
        "pitfall": "Não tratar toda membrana como perfeitamente semipermeável nem equiparar pressão osmótica ideal a pressão sanguínea ou turgor sem contexto fisiológico.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em duas soluções ideais de mesma molalidade, qual produz maior redução da pressão de vapor da água?",
        "options": [
          "Glicose sem dissociação",
          "NaCl completamente dissociado",
          "Água destilada sem soluto",
          "Ambas necessariamente idênticas"
        ],
        "correctIndex": 1,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "NaCl dissociado gera aproximadamente duas partículas por unidade dissolvida; glicose gera uma. Pela contagem coligativa ideal, mais partículas reduzem mais a fração molar do solvente e sua pressão de vapor."
      },
      {
        "level": "intermediate",
        "prompt": "Uma solução ideal aquosa de glicose 0,50 mol/kg tem Kf=1,86 °C·kg/mol. Qual é o ponto de congelamento aproximado?",
        "options": [
          "+0,93 °C",
          "−1,86 °C",
          "−0,93 °C",
          "+1,86 °C"
        ],
        "correctIndex": 2,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "Para glicose i=1: ΔTf=iKfm=1×1,86×0,50=0,93 °C. A água pura congela a 0 °C na pressão de referência; a solução congela aproximadamente a −0,93 °C."
      },
      {
        "level": "advanced",
        "prompt": "Para glicose 0,10 mol/L a 300 K, com R=0,082 L·atm/(mol·K), qual pressão osmótica ideal?",
        "options": [
          "0,246 atm",
          "24,6 atm",
          "2,46 atm",
          "246 atm"
        ],
        "correctIndex": 2,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "A glicose não se dissocia, então i=1. Aplicando π=iMRT, temos 1×0,10×0,082×300=2,46 atm. A estimativa vale para solução diluída e membrana que retenha a glicose."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Noção de monômeros e polímeros",
    "objective": "Diferenciar monômeros, unidades repetitivas e macromoléculas, identificando mecanismos de adição e condensação, materiais e impactos de reciclagem.",
    "prerequisites": [
      "Ligações covalentes",
      "Funções orgânicas",
      "Conservação de átomos e equações químicas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Monômero, repetição e cadeia",
        "explanation": "Polímero é uma substância formada por macromoléculas constituídas de numerosas unidades estruturais repetidas, conectadas predominantemente por ligações covalentes. Um monômero é molécula capaz de participar da formação dessas cadeias; a unidade repetitiva do polímero nem sempre corresponde ao monômero intacto. No polietileno, moléculas de eteno CH₂=CH₂ têm sua ligação dupla convertida em ligações simples durante a polimerização, originando segmentos –CH₂–CH₂–. O número médio de unidades, chamado grau de polimerização, afeta massa molar e frequentemente propriedades mecânicas. Uma amostra comercial não contém necessariamente cadeias de comprimento idêntico: há distribuição de massas molares. Polímeros podem ser naturais, como celulose e proteínas, ou sintéticos, como polietileno e PET. Plástico não é sinônimo de todo polímero; a classificação envolve formulação, processamento e aplicação. Também não é correto afirmar que toda macromolécula seja biodegradável.",
        "example": "Represente três moléculas de eteno como 3 CH₂=CH₂. Abra a ligação π de cada dupla e conecte os carbonos em sequência para obter um segmento –CH₂–CH₂–CH₂–CH₂–CH₂–CH₂–. Conte seis carbonos e doze hidrogênios nos dois lados: não há eliminação de pequena molécula na adição idealizada.",
        "pitfall": "Não chamar qualquer mistura de moléculas pequenas de polímero: a formação de cadeias covalentes é essencial ao conceito.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Adição e condensação",
        "explanation": "Na polimerização por adição de monômeros vinílicos, a ligação dupla carbono-carbono fornece sítio reativo para o crescimento de cadeia; em uma representação global ideal, n CH₂=CH₂ → (–CH₂–CH₂–)n. O mecanismo real pode envolver iniciação, propagação e terminação por radicais, íons ou catalisadores, com consequências para distribuição de comprimentos e ramificação. Já a formação de muitos poliésteres e poliamidas envolve reações entre grupos funcionais, como ácido carboxílico e álcool ou amina, frequentemente com liberação de água; por isso são exemplos escolares de condensação. Entretanto, a distinção entre crescimento em cadeia e crescimento por etapas é mais precisa do que supor que toda polimerização por etapas necessariamente elimine água. A estrutura do monômero condiciona funcionalidade: espécies bifuncionais favorecem cadeias lineares, enquanto maior funcionalidade pode produzir redes. É preciso verificar reagentes e produtos antes de afirmar o mecanismo.",
        "example": "Considere ácido dicarboxílico HOOC–R–COOH e diol HO–R'–OH. Uma ligação éster surge quando um grupo –COOH reage com –OH, liberando H₂O; identifique a ligação –COO– formada, contabilize os átomos de água e explique que a repetição dessas etapas pode construir poliéster.",
        "pitfall": "Não afirmar que toda polimerização libera água: o polietileno por adição não gera H₂O na equação global.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Estrutura, propriedades e descarte",
        "explanation": "As propriedades de um polímero dependem de sua estrutura e processamento, não apenas do nome químico. Cadeias lineares ou pouco ramificadas podem empacotar melhor, aumentando regiões cristalinas; ramificações e ligações cruzadas alteram mobilidade, resistência e possibilidade de fusão. Termoplásticos amolecem ao aquecer dentro de faixas adequadas e podem ser remoldados; termofixos reticulados não simplesmente fundem e voltam ao estado inicial. A transição vítrea indica mudança de mobilidade segmentar em regiões amorfas, distinta da fusão de cristais. PET usado em garrafas e PE de embalagens exigem fluxos de reciclagem e identificação separados; contaminação, aditivos e degradação limitam reaproveitamento. Biodegradabilidade depende de estrutura química e condições ambientais, não da origem renovável da matéria-prima. Microplásticos podem surgir por fragmentação de objetos maiores e sua presença não comprova biodegradação completa. Uma avaliação ambiental compara ciclo de vida, coleta e destinação real.",
        "example": "Compare uma tampa de PE e uma garrafa de PET: identifique primeiro os códigos de resina, depois separe os materiais para rotas de reciclagem apropriadas e avalie contaminação. Aquecer indiscriminadamente os dois juntos não produz um material uniforme: composição e temperaturas de processamento diferem.",
        "pitfall": "Não confundir material de fonte vegetal com material automaticamente biodegradável nem supor reciclagem infinita sem perda de qualidade.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na formação ideal de polietileno a partir de eteno, qual transformação ocorre?",
        "options": [
          "Eliminação obrigatória de água",
          "Conversão da dupla C=C em ligações de cadeia",
          "Ruptura de todos os enlaces C–H",
          "Formação de ligações metálicas"
        ],
        "correctIndex": 1,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "A polimerização de adição usa a insaturação do eteno: a ligação π da dupla se transforma em conectividade covalente entre unidades –CH₂–CH₂–, sem água como subproduto obrigatório."
      },
      {
        "level": "intermediate",
        "prompt": "Uma reação entre diácido e diol forma poliéster. Qual ligação caracteriza a cadeia?",
        "options": [
          "Ligação éster –COO–",
          "Ligação iônica Na–Cl",
          "Ligação metálica entre carbonos",
          "Ponte dissulfeto –S–S– obrigatória"
        ],
        "correctIndex": 0,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "O grupo carboxila do diácido reage com a hidroxila do diol, formando ligação éster –COO– e frequentemente liberando água. A repetição entre monômeros bifuncionais constrói a cadeia."
      },
      {
        "level": "advanced",
        "prompt": "Qual afirmação sobre polímeros e descarte é correta?",
        "options": [
          "Todo bioplástico biodegrada em água fria",
          "Termofixos sempre fundem reversivelmente",
          "Reciclagem depende da resina e da contaminação",
          "Todo polímero natural é termoplástico"
        ],
        "correctIndex": 2,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "A identificação da resina, dos aditivos e da contaminação determina viabilidade de reciclagem. Origem renovável não garante biodegradação, e redes termofixas não fundem reversivelmente como termoplásticos."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Sistemas conservativos e não conservativos",
    "objective": "Distinguir forças conservativas de dissipativas usando trabalho em trajetórias, energia potencial e balanço de energia mecânica.",
    "prerequisites": [
      "Trabalho como produto escalar",
      "Energia cinética e potencial",
      "Diagramas de forças"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Trabalho e trajetória",
        "explanation": "Uma força é conservativa em uma região quando seu trabalho entre dois pontos independe do caminho percorrido, sob as condições do modelo. Isso equivale a trabalho total nulo em qualquer percurso fechado admissível nessa região e permite definir energia potencial U tal que Wconservativa = −ΔU. Próximo à superfície terrestre, com campo gravitacional uniforme, Ugrav=mgh e o trabalho do peso na descida de altura h é +mgh; na subida é −mgh. A força elástica ideal de mola obedece F=−kx e possui Uel=kx²/2. O sinal do trabalho deve ser obtido da componente da força ao longo do deslocamento, não apenas da existência de movimento. Em campo gravitacional que varia muito com a distância, a expressão mgh é aproximação local e deve ser substituída pelo potencial apropriado. A força normal pode realizar trabalho nulo em algumas trajetórias, mas trabalho nulo em um único caso não basta para classificar uma força como conservativa.",
        "example": "Uma esfera de 2 kg desce verticalmente 3 m, com g=10 m/s². Primeiro calcule ΔU=mg(hf−hi)=2×10×(−3)=−60 J. Depois use Wpeso=−ΔU=+60 J. Se a esfera retornar à altura inicial, a soma dos trabalhos do peso no percurso fechado será zero.",
        "pitfall": "Não deduzir conservatividade de uma única medição de trabalho nulo; a independência de trajetória é o critério.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Atrito e balanço mecânico",
        "explanation": "Atrito cinético usualmente se opõe ao deslizamento relativo e transforma energia mecânica em energia interna e outras formas. Em uma superfície horizontal com força de atrito cinético constante f, o trabalho é Watr=−fd para deslocamento de módulo d. Se o objeto percorre caminho mais longo entre os mesmos pontos, a energia dissipada pode aumentar: o trabalho depende da trajetória e não existe energia potencial escalar global do atrito cinético com a mesma interpretação das forças conservativas. O teorema trabalho-energia fornece ΔK = ΣW. Separando forças conservativas, Δ(K+U)=Wnão conservativo, desde que as energias e trabalhos relevantes estejam incluídos. Esse balanço não significa violação da conservação total da energia: a parcela perdida de energia mecânica aparece como aquecimento, deformação e outras formas. Em movimento com rolamento sem deslizamento, o atrito estático pode ter trabalho nulo em modelos ideais; não é correto afirmar que todo atrito sempre dissipa a mesma energia.",
        "example": "Um bloco parte com K=100 J e desliza 5 m sob atrito cinético de 8 N em piso horizontal. Calcule Watr=−8×5=−40 J. Como não há variação de U no modelo, Kfinal=100−40=60 J. Se a massa fosse 2 kg, vfinal seria √(2K/m)=√60≈7,75 m/s.",
        "pitfall": "Não escrever energia mecânica inicial igual à final quando existe trabalho dissipativo externo ao conjunto de energias potenciais modeladas.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Escolha do sistema e energia total",
        "explanation": "A conservação de energia depende de definir claramente fronteiras do sistema. Para bloco e Terra com gravidade conservativa, uma queda ideal sem resistência mantém K+U constante; ao incluir ar, parte da energia mecânica vai para movimento e aquecimento do ar. Se o sistema inclui bloco, Terra e ar, a energia total permanece conservada, embora a energia mecânica do bloco não. A presença de força não conservativa não implica necessariamente diminuição da energia mecânica: uma força aplicada por motor pode realizar trabalho positivo e aumentá-la. Em gráficos de energia, identifique referências arbitrárias para U e compare diferenças, não valores absolutos isolados. Uma mola ideal armazena energia recuperável; uma deformação plástica apresenta histerese e dissipação. Em sistemas com restrições móveis ou forças dependentes do tempo, a interpretação exige cuidado com trabalho de agentes externos. O critério correto é analisar trabalho e transferências, não rotular todo movimento com resistência como 'sem conservação de energia'.",
        "example": "Um carrinho desce de uma plataforma perdendo 50 J de energia potencial; um motor fornece +20 J e o atrito realiza −15 J. Aplique ΔK=−ΔU+Wmotor+Watrito=50+20−15=55 J. Se K inicial era 5 J, K final será 60 J; a energia mecânica aumenta 5 J apesar da dissipação.",
        "pitfall": "Não confundir conservação da energia total com conservação de K+U de um subsistema que troca energia com o ambiente.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um corpo retorna à mesma altura após um trajeto fechado. Qual trabalho realiza o peso uniforme?",
        "options": [
          "+mgh",
          "−mgh",
          "Zero",
          "Depende apenas da velocidade final"
        ],
        "correctIndex": 2,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "O peso é conservativo em campo uniforme: Wpeso=−ΔU. Como a altura final coincide com a inicial, ΔU=0 e o trabalho total do peso é zero, independentemente do caminho."
      },
      {
        "level": "intermediate",
        "prompt": "Um bloco com 100 J de energia cinética sofre atrito de 8 N ao longo de 5 m. Qual energia cinética final?",
        "options": [
          "140 J",
          "60 J",
          "40 J",
          "20 J"
        ],
        "correctIndex": 1,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "O trabalho do atrito é W=−fd=−8×5=−40 J. Sem outras forças realizando trabalho, ΔK=−40 J e Kfinal=100−40=60 J."
      },
      {
        "level": "advanced",
        "prompt": "Carrinho perde 50 J de U; motor fornece 20 J e atrito retira 15 J. Qual ΔK?",
        "options": [
          "+55 J",
          "+85 J",
          "−35 J",
          "+15 J"
        ],
        "correctIndex": 0,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "Pelo balanço ΔK=−ΔU+Wmotor+Watrito. Com ΔU=−50 J, temos ΔK=50+20−15=+55 J. O trabalho positivo do motor pode superar a dissipação."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Nível sonoro. Decibel. Efeito Doppler",
    "objective": "Interpretar níveis sonoros logarítmicos e deslocamento Doppler com fonte e observador em movimento, explicitando limites do modelo clássico.",
    "prerequisites": [
      "Frequência e comprimento de onda",
      "Logaritmos decimais",
      "Velocidade relativa e propagação do som"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Intensidade e escala decibel",
        "explanation": "Intensidade sonora I é potência média transportada por unidade de área perpendicular à propagação, medida em W/m². Para uma onda aproximadamente esférica sem perdas significativas, a potência se distribui por área 4πr² e a intensidade decai aproximadamente com 1/r². O nível de intensidade sonora é β=10 log10(I/I0), com referência convencional I0=10⁻¹² W/m². Essa escala é logarítmica: multiplicar a intensidade por 10 acrescenta 10 dB, e dobrá-la acrescenta aproximadamente 3 dB. O decibel não é unidade de potência absoluta e duas fontes de 60 dB independentes e comparáveis não somam aritmeticamente 120 dB. Nível de pressão sonora, mais comum em medições ambientais, usa outra definição envolvendo pressão eficaz e referência apropriada; não se deve misturar fórmulas sem indicar a grandeza. A percepção de volume depende de frequência, duração e sensibilidade auditiva, portanto dB e sensação subjetiva não são equivalentes.",
        "example": "Se I=10⁻⁶ W/m², divida pela referência 10⁻¹² e obtenha razão 10⁶. Em seguida β=10 log10(10⁶)=60 dB. Se a intensidade subir a 10⁻⁵ W/m², a razão passa a 10⁷ e o nível será 70 dB: dez vezes mais intensidade, não dez vezes a sensação de volume.",
        "pitfall": "Não somar decibéis como números lineares nem confundir nível de intensidade com nível de pressão sem referência.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Combinação de fontes e distância",
        "explanation": "Para fontes independentes de mesma intensidade, as intensidades médias podem ser somadas antes de aplicar o logaritmo: Itotal=I1+I2. Assim, duas fontes de 60 dB, cada uma com I=10⁻⁶ W/m² na mesma referência, geram 2×10⁻⁶ W/m² e βtotal≈63 dB, sob hipóteses de independência e condições comparáveis. Para uma fonte pontual isotrópica no campo livre, dobrar a distância reduz a intensidade a um quarto, correspondendo a cerca de −6 dB. Paredes, reflexão, absorção atmosférica e direcionalidade podem alterar fortemente esse resultado. Em medições reais, a ponderação A, indicada por dB(A), aproxima a sensibilidade auditiva por frequência e não deve ser tratada como idêntica a dB sem ponderação. Uma exposição sonora não pode ser julgada apenas pelo pico de intensidade: duração e espectro também importam. Quando a questão fornece níveis de várias fontes, transforme em intensidades ou use a diferença logarítmica antes de combinar.",
        "example": "Duas caixas independentes produzem 60 dB cada em um ponto. Converta cada nível: I=10⁻¹²×10⁶=10⁻⁶ W/m². Some I=2×10⁻⁶; então β=10log10(2×10⁶)=10(0,301+6)≈63,0 dB. O cálculo não vale para interferência coerente arbitrária.",
        "pitfall": "Não usar 60+60=120 dB: a operação física correta é somar intensidades, não seus logaritmos.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Doppler para som",
        "explanation": "O efeito Doppler é a alteração da frequência observada quando há movimento relativo entre fonte e observador em relação ao meio de propagação. Para som em meio estacionário, com velocidades colineares, uma convenção útil é fobs=femit(v±vo)/(v∓vs): no numerador use sinal que aumenta a frequência quando o observador se aproxima; no denominador use sinal que aumenta a frequência quando a fonte se aproxima. As velocidades vo e vs são medidas em relação ao ar e a fórmula clássica pressupõe velocidades subsônicas e propagação aproximadamente uniforme. Aproximação eleva frequência percebida; afastamento a reduz. O movimento da fonte altera o espaçamento das frentes de onda no meio, enquanto o observador móvel altera a taxa de encontro com frentes. Isso explica por que os dois movimentos não são intercambiáveis em todas as situações. Para luz, o efeito Doppler exige tratamento relativístico em velocidades relevantes e não depende de meio material como o som.",
        "example": "Uma ambulância emite 600 Hz e aproxima-se de observador parado a 20 m/s; considere v=340 m/s no ar. Como a fonte se aproxima, use fobs=600×340/(340−20)=637,5 Hz. Verifique que o denominador ficou menor e a frequência aumentou, coerente com a aproximação.",
        "pitfall": "Não escolher sinais apenas pela palavra 'movimento': determine aproximação ou afastamento e quem se move em relação ao meio.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A intensidade sonora cresce de 10⁻⁶ para 10⁻⁵ W/m². Qual mudança no nível?",
        "options": [
          "+10 dB",
          "+1 dB",
          "+100 dB",
          "−10 dB"
        ],
        "correctIndex": 0,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "A razão das intensidades é 10. Pela definição Δβ=10log10(10)=+10 dB. A escala é logarítmica, portanto multiplicar a intensidade por dez não multiplica o nível por dez."
      },
      {
        "level": "intermediate",
        "prompt": "Duas fontes independentes de 60 dB cada atuam no mesmo ponto. Qual nível aproximado?",
        "options": [
          "120 dB",
          "66 dB",
          "63 dB",
          "30 dB"
        ],
        "correctIndex": 2,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "Cada fonte possui intensidade I0×10⁶. Somando duas intensidades independentes resulta 2I; o aumento é 10log10(2)≈3 dB. Logo o nível conjunto é aproximadamente 63 dB."
      },
      {
        "level": "advanced",
        "prompt": "Fonte de 600 Hz aproxima-se a 20 m/s de observador parado; som a 340 m/s. Frequência recebida?",
        "options": [
          "565 Hz",
          "600 Hz",
          "620 Hz",
          "637,5 Hz"
        ],
        "correctIndex": 3,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "Para fonte aproximando-se, f'=f v/(v−vs)=600×340/(340−20)=637,5 Hz. A redução do espaçamento entre frentes eleva a frequência percebida; o modelo pressupõe ar estacionário."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Segurança na aquisição, armazenagem e utilização de produtos químicos domésticos de produtos…",
    "objective": "Interpretar perigos de produtos domésticos, incompatibilidades de misturas e medidas preventivas sem prescrever experimentos perigosos.",
    "prerequisites": [
      "Concentração e diluição",
      "Ácidos, bases e oxidantes",
      "Leitura de rótulos e pictogramas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Perigo, exposição e rótulo",
        "explanation": "Segurança química começa por diferenciar perigo intrínseco de risco de exposição. Uma substância corrosiva pode causar lesão ao entrar em contato com tecidos; o risco efetivo depende de concentração, quantidade, via de contato, duração e medidas de controle. Rótulos informam composição, concentração quando aplicável, advertências, primeiros cuidados e condições de armazenamento. Pictogramas padronizados comunicam classes de perigo, mas não substituem leitura integral das instruções do fabricante. Produtos de limpeza podem conter ácidos, bases, oxidantes ou tensoativos, com funções e incompatibilidades distintas. A compra responsável considera procedência, embalagem íntegra e adequação ao uso previsto; transferir produto para garrafa de bebida aumenta risco de ingestão acidental. A hierarquia de prevenção privilegia evitar a exposição e usar produto menos perigoso quando possível, antes de depender exclusivamente de equipamentos de proteção. Crianças e animais devem permanecer afastados de locais de guarda, e a ventilação deve seguir as instruções de uso.",
        "example": "Compare duas embalagens: uma apresenta rótulo original com composição, uso e advertências; a outra é uma garrafa de refrigerante contendo líquido de limpeza sem identificação. Primeiro avalie possibilidade de confusão e ingestão, depois rastreabilidade e instruções. A opção segura é conservar o produto na embalagem original, fechada e fora do alcance infantil.",
        "pitfall": "Não confundir ausência de odor forte com ausência de perigo: exposição relevante pode ocorrer mesmo sem cheiro perceptível.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Incompatibilidades e armazenamento",
        "explanation": "Misturar produtos de limpeza é uma prática perigosa porque componentes podem reagir e liberar gases tóxicos, calor ou substâncias irritantes. Água sanitária, que contém hipoclorito, não deve ser misturada com ácidos nem com produtos contendo amônia; essas combinações podem gerar espécies gasosas prejudiciais. A orientação segura é nunca improvisar misturas e usar cada produto isoladamente conforme rótulo, sem testar reações para observar resultados. Ácidos desincrustantes, bases fortes e oxidantes precisam ser armazenados de modo a evitar vazamentos e contato acidental; a compatibilidade de armazenamento depende de formulação e recomendações específicas. Recipientes devem ficar fechados, identificados e protegidos de calor excessivo quando o fabricante assim determinar. Não se deve usar embalagem alimentar como substituta. Na limpeza de superfícies, o aumento arbitrário da concentração não implica maior eficiência e pode aumentar dano à superfície e à saúde. Caso haja exposição, seguir as orientações do rótulo e buscar atendimento apropriado, evitando neutralizações caseiras sobre pele.",
        "example": "Uma pessoa pretende usar água sanitária e desincrustante ácido no mesmo banheiro. Identifique o hipoclorito como oxidante e o desincrustante como potencial fonte de acidez. A decisão correta é não misturar, não aplicar simultaneamente e seguir instruções individuais; não é necessário nem seguro produzir gases para comprovar a incompatibilidade.",
        "pitfall": "Não tentar neutralizar uma exposição química na pele com outro produto doméstico: isso pode agravar a lesão e gerar calor.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Diluição, descarte e prevenção",
        "explanation": "Diluir um produto somente é apropriado quando o rótulo prevê essa prática e especifica proporção, recipiente e procedimento. Na linguagem quantitativa, C1V1=C2V2 representa conservação de quantidade de soluto em diluição sem reação, mas não autoriza misturas químicas nem substitui recomendações de segurança. Concentrações expressas em porcentagem, g/L e ppm usam bases diferentes; a conversão exige densidade quando se passa de fração em massa para volume. O descarte depende de composição e regulamentação local: despejar solventes, pesticidas ou resíduos concentrados em ralos pode contaminar água e prejudicar sistemas de tratamento. Embalagens vazias também podem conter resíduos e não devem ser reutilizadas para alimentos. Em incidentes com vapores irritantes, afastar-se da área e procurar orientação de emergência é mais seguro que tentar identificar o gás pelo cheiro. A prevenção inclui inventário simples, segregação de incompatíveis e redução de estoques domésticos desnecessários.",
        "example": "Um rótulo autoriza preparar 1 L de solução a partir de concentrado 4% para obter 1%, sem reação. Calcule V1=(1%×1000 mL)/4%=250 mL de concentrado; complete até 1000 mL somente conforme instruções do fabricante. A conta é de diluição, não permissão para misturar com outros limpadores.",
        "pitfall": "Não aplicar C1V1=C2V2 a reações entre produtos nem assumir que descarte em pia é seguro para qualquer substância.",
        "steps": [
          "Identifique as grandezas, conceitos e hipóteses explicitados no caso.",
          "Aplique o raciocínio ou a relação quantitativa em etapas verificáveis.",
          "Confira unidades, condições de validade e interpretação da conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual prática reduz o risco de ingestão acidental de limpador doméstico?",
        "options": [
          "Guardar em garrafa de suco",
          "Retirar rótulos para economizar espaço",
          "Manter embalagem original identificada e fechada",
          "Misturar com aromatizante"
        ],
        "correctIndex": 2,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "Manter o produto na embalagem original preserva informações de perigo, uso e primeiros cuidados e evita confusão com bebidas. Recipientes alimentares e rótulos ausentes aumentam a chance de exposição acidental."
      },
      {
        "level": "intermediate",
        "prompt": "Qual orientação é correta sobre água sanitária e desincrustante ácido?",
        "options": [
          "Misturá-los para melhorar a limpeza",
          "Nunca misturá-los, devido a reações perigosas",
          "Aquecer ambos antes de usar",
          "Testar a mistura em recipiente fechado"
        ],
        "correctIndex": 1,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "Hipoclorito em meio ácido pode liberar gases tóxicos. A medida preventiva é não misturar produtos e seguir cada rótulo separadamente, sem realizar experimentos domésticos de reação."
      },
      {
        "level": "advanced",
        "prompt": "Rótulo permite diluir 4% para 1%, obtendo 1 L. Qual volume de concentrado?",
        "options": [
          "25 mL",
          "100 mL",
          "400 mL",
          "250 mL"
        ],
        "correctIndex": 3,
        "hint": "Retome as hipóteses, a definição e o exemplo resolvido do capítulo antes de comparar as alternativas.",
        "solution": "Na diluição autorizada, C1V1=C2V2. Assim V1=1%×1000 mL/4%=250 mL. O restante do volume é completado conforme instruções; a equação não autoriza combinar produtos diferentes."
      }
    ]
  }
];
