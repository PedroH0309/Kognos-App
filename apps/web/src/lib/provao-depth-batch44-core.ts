import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral original Kognos; não oficial; revisão docente pendente. */
export const provaoDepthBatch44Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Interações do tipo íon-dipolo",
    "objective": "Explicar a hidratação de íons e a dependência da energia de solvatação da carga e do raio.",
    "prerequisites": [
      "Polaridade molecular",
      "Cargas elétricas",
      "Dissolução de sais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Orientação de dipolos",
        "explanation": "Uma interação íon–dipolo ocorre entre a carga de um cátion ou ânion e a distribuição assimétrica de cargas parciais de uma molécula polar. A água tem geometria angular: o oxigênio possui carga parcial negativa e os hidrogênios, positiva. Ao redor de Na⁺, a extremidade do oxigênio tende a apontar para o íon; em torno de Cl⁻, orientam-se preferencialmente hidrogênios. Não se forma, por isso, uma nova ligação covalente entre o íon e cada molécula de água. A intensidade da atração depende da carga do íon, do tamanho efetivo e da orientação e distância dos dipolos. O movimento térmico mantém a camada de hidratação dinâmica. A dissolução exige considerar simultaneamente ruptura da rede cristalina, separação de moléculas do solvente e formação de novas interações. Portanto, observar atração íon–dipolo não basta para afirmar que qualquer sal se dissolve ilimitadamente.",
        "example": "Em NaCl(s) colocado em água, identifique Na⁺ e Cl⁻; marque o polo Oδ⁻ voltado a Na⁺ e Hδ⁺ voltado a Cl⁻; conclua que ambas as espécies podem ser hidratadas.",
        "pitfall": "A água não transforma automaticamente Na⁺ em átomo neutro.",
        "steps": ["Determine o sinal do íon e os polos δ⁻ e δ⁺ da molécula angular de água.","Oriente Oδ⁻ para Na⁺ e Hδ⁺ para Cl⁻ e identifique as interações íon–dipolo.","Distinga hidratação dinâmica de neutralização elétrica e de ligação covalente."]
      },
      {
        "level": "intermediate",
        "title": "Competição energética",
        "explanation": "O processo de dissolução de um sólido iônico envolve custos e ganhos energéticos. Separar íons do retículo cristalino demanda energia; a solvatação libera energia quando novas interações se estabelecem. A entalpia de solução pode ser positiva ou negativa, e sua direção espontânea depende também da entropia, conforme ΔG=ΔH−TΔS. Uma substância pode dissolver mesmo com ΔH positivo se o termo entrópico compensar o custo, nas condições estudadas. Íons pequenos e muito carregados frequentemente apresentam forte hidratação, mas também podem integrar retículos muito estáveis. Comparar somente a carga é insuficiente para prever solubilidade. A água, por ser polar e ter elevada permissividade relativa, reduz a atração eletrostática efetiva entre cargas separadas em comparação ao vácuo. Em solventes apolares, a solvatação de íons isolados costuma ser desfavorável.",
        "example": "Se um processo apresenta ΔH=+5 kJ/mol e TΔS=+8 kJ/mol, calcule ΔG=5−8=−3 kJ/mol; a dissolução é termodinamicamente favorecida nesse estado.",
        "pitfall": "Não confunda sinal de ΔH com sinal de ΔG.",
        "steps": ["Registre ΔH=+5 kJ/mol e TΔS=+8 kJ/mol com a mesma base molar.","Substitua os termos com sinais explícitos na equação ΔG=ΔH−TΔS: (+5)−(+8)=−3 kJ/mol.","Interprete ΔG negativo como favorecimento termodinâmico, não velocidade de dissolução."]
      },
      {
        "level": "advanced",
        "title": "Seletividade da solvatação",
        "explanation": "A interação íon–dipolo ajuda a interpretar mobilidade iônica, condução elétrica e seletividade de solvatação. Soluções aquosas de eletrólitos fortes contêm íons móveis e podem conduzir corrente, diferentemente de um cristal iônico rígido, no qual os íons não migram livremente. Contudo, concentração, temperatura e mobilidade afetam a condutividade: o número de portadores não é o único fator. A energia de hidratação de íons com alta densidade de carga pode ser muito intensa; por isso, o raio do íon hidratado não coincide necessariamente com seu raio cristalográfico. Em membranas biológicas, canais iônicos podem exigir remoção parcial da água de hidratação e compensá-la com interações no canal. O balanço energético explica por que seletividade não depende apenas do diâmetro geométrico. Ao discutir um sal pouco solúvel, é necessário considerar o produto de solubilidade e as atividades em soluções não ideais.",
        "example": "Compare NaCl sólido e NaCl aquoso: no sólido, cargas estão presas à rede; em solução, íons hidratados migram em campo elétrico, justificando condução.",
        "pitfall": "Não iguale raio hidratado ao raio do íon isolado.",
        "steps": ["Compare a mobilidade dos íons na rede de NaCl(s) e na solução aquosa.","Relacione a condução da solução ao deslocamento de Na⁺(aq) e Cl⁻(aq).","Considere a hidratação, a concentração e a mobilidade antes de prever condutividade."]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Ao hidratar Na⁺ em água, qual polo molecular tende a se orientar para o cátion?",
        "options": [
          "Oxigênio com carga parcial negativa",
          "Hidrogênio com carga parcial positiva",
          "Ambos os polos são apolares",
          "O íon vira uma molécula de água"
        ],
        "correctIndex": 0,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "O cátion atrai o polo δ⁻ da água, situado próximo ao oxigênio. A orientação favorece a estabilização eletrostática, sem neutralizar a carga do sódio."
      },
      {
        "level": "intermediate",
        "prompt": "Se ΔH=+5 kJ/mol e TΔS=+8 kJ/mol, qual é ΔG?",
        "options": [
          "+13 kJ/mol",
          "+3 kJ/mol",
          "−3 kJ/mol",
          "−13 kJ/mol"
        ],
        "correctIndex": 2,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "Pela relação ΔG=ΔH−TΔS, temos +5−8=−3 kJ/mol. O sinal negativo indica favorecimento termodinâmico nas condições fornecidas, embora não determine a rapidez."
      },
      {
        "level": "advanced",
        "prompt": "Por que NaCl aquoso conduz corrente melhor que o cristal sólido?",
        "options": [
          "Porque elétrons livres surgem nos cristais",
          "Porque os íons hidratados podem migrar",
          "Porque as moléculas de água viram prótons livres",
          "Porque a ligação iônica se converte em metálica"
        ],
        "correctIndex": 1,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "No sólido, os íons ocupam posições da rede e não transportam carga através do material. Em água, os íons dissociados possuem mobilidade e respondem ao campo elétrico."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Solubilidade e temperatura de ebulição",
    "objective": "Distinguir equilíbrio de solubilidade e ebulição e analisar efeitos de temperatura e pressão.",
    "prerequisites": [
      "Mudanças de estado",
      "Pressão de vapor",
      "Soluções"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Duas grandezas diferentes",
        "explanation": "Solubilidade descreve a quantidade máxima de soluto que pode permanecer dissolvida em determinada quantidade de solvente, sob condições especificadas e em equilíbrio com uma fase não dissolvida. Já a temperatura de ebulição é aquela em que a pressão de vapor do líquido iguala a pressão externa. São propriedades diferentes: uma se refere ao equilíbrio entre soluto dissolvido e não dissolvido; a outra, ao equilíbrio entre líquido e vapor. A solubilidade de muitos sólidos aumenta com a temperatura, mas existem exceções; não é correto transformar essa tendência em lei universal. Para gases em água, o aquecimento frequentemente reduz a solubilidade, embora a pressão parcial do gás também seja determinante. Uma solução saturada pode conter sólido residual e ainda estar em equilíbrio dinâmico. A curva de solubilidade deve ser lida com suas unidades, geralmente gramas de soluto por 100 g de água.",
        "example": "Se a curva informa 40 g de sal por 100 g de água a 30 °C, em 200 g de água o limite é 80 g; 90 g adicionados deixam 10 g sem dissolver no equilíbrio.",
        "pitfall": "Não confunda 40 g/100 g de água com 40% em massa da solução.",
        "steps": ["Identifique a substância dissolvida e a grandeza solicitada no problema de solubilidade.","Separe massa máxima dissolvida em uma temperatura da temperatura de ebulição da solução.","Confira se a mistura está saturada e se a pressão foi mantida constante."]
      },
      {
        "level": "intermediate",
        "title": "Elevação ebuliométrica",
        "explanation": "Um soluto não volátil diminui a pressão de vapor do solvente em solução ideal diluída. Para que a pressão de vapor alcance a pressão externa, é necessária temperatura mais alta; esse efeito é a elevação ebuliométrica. Em modelo diluído, ΔTb=Kb·m·i, onde m é molalidade, Kb é constante do solvente e i é fator de van ’t Hoff. O fator i aproxima o número efetivo de partículas em solução, podendo divergir da contagem estequiométrica devido a associações e não idealidade. A fórmula não deve ser aplicada sem verificar volatilidade do soluto, concentração e comportamento da solução. A adição de sal não garante aumento ilimitado da temperatura de ebulição, pois a solubilidade e a composição impõem limites. Em altitude elevada, a menor pressão externa reduz a temperatura de ebulição, mesmo para água pura.",
        "example": "Para 1 mol de glicose não eletrolítica em 2 kg de água, m=0,5 mol/kg; com Kb=0,512 °C·kg/mol e i=1, ΔTb=0,256 °C.",
        "pitfall": "Não use molaridade em lugar de molalidade na equação.",
        "steps": ["Determine a molalidade do soluto e a constante ebuliométrica do solvente.","Calcule ΔTb=Kb·m·i, justificando o fator de van 't Hoff adotado.","Some ΔTb à temperatura de ebulição do solvente puro na mesma pressão."]
      },
      {
        "level": "advanced",
        "title": "Gases e pressão",
        "explanation": "A solubilidade de gases merece análise separada da dos sólidos. Em soluções diluídas e sem reação química relevante, a lei de Henry relaciona a concentração do gás dissolvido à sua pressão parcial sobre o líquido, com constante definida segundo convenção e temperatura. Abrir uma garrafa de bebida carbonatada reduz a pressão parcial de CO₂ sobre o líquido; a solução torna-se supersaturada em relação às novas condições e o gás pode escapar em bolhas. Aquecer também tende a favorecer a saída de muitos gases dissolvidos. Em ecossistemas aquáticos, menor concentração de oxigênio dissolvido pode prejudicar organismos, mas a disponibilidade real depende também de circulação, fotossíntese e consumo biológico. Não confunda ponto de ebulição com a temperatura em que bolhas de gás dissolvido aparecem: a liberação de CO₂ pode ocorrer muito abaixo da ebulição da água.",
        "example": "Uma bebida fechada retém CO₂ sob pressão. Ao abrir, diminui a pressão parcial; parte do CO₂ sai da solução, mesmo a 20 °C, sem a água ferver.",
        "pitfall": "Bolhas de CO₂ não demonstram que a água atingiu sua temperatura de ebulição.",
        "steps": ["Identifique gás, solvente, temperatura e pressão parcial antes de usar Henry.","Aplique a proporcionalidade de Henry apenas no regime diluído e na temperatura fixa.","Explique por que aquecer ou reduzir a pressão pode favorecer liberação do gás."]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A 30 °C dissolvem-se no máximo 40 g de sal em 100 g de água. Em 200 g de água, adicionam-se 90 g. Quanto sobra?",
        "options": [
          "50 g",
          "10 g",
          "20 g",
          "0 g"
        ],
        "correctIndex": 1,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "O limite escala proporcionalmente: 40×2=80 g. Dos 90 g adicionados, 80 g dissolvem e 10 g permanecem como sólido, assumindo equilíbrio e ausência de reações."
      },
      {
        "level": "intermediate",
        "prompt": "Glicose: 1 mol em 2 kg de água; Kb=0,512 e i=1. Qual ΔTb?",
        "options": [
          "1,024 °C",
          "0,512 °C",
          "0,256 °C",
          "2,000 °C"
        ],
        "correctIndex": 2,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "A molalidade é 1/2=0,5 mol/kg. Aplicando ΔTb=Kbmi, obtemos 0,512×0,5×1=0,256 °C para solução ideal diluída. Não use molaridade em lugar de molalidade na equação. A conclusão depende das condições descritas no enunciado, sem extrapolação para sistemas diferentes."
      },
      {
        "level": "advanced",
        "prompt": "Por que uma bebida gaseificada libera CO₂ ao ser aberta?",
        "options": [
          "A pressão parcial de CO₂ cai",
          "A água necessariamente ferve",
          "O gás vira sal insolúvel",
          "A massa de CO₂ aumenta"
        ],
        "correctIndex": 0,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "Abrir a embalagem diminui a pressão parcial de CO₂ acima do líquido. A concentração anterior pode exceder o novo equilíbrio, levando à saída do gás."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Interações da água com outras substâncias",
    "objective": "Explicar solvatação, miscibilidade e limites da regra semelhante dissolve semelhante.",
    "prerequisites": [
      "Polaridade",
      "Ligações de hidrogênio",
      "Solubilidade"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Água como solvente",
        "explanation": "A molécula de água apresenta geometria angular e dipolo permanente, permitindo interações dipolo–dipolo, ligações de hidrogênio e hidratação de íons. Isso favorece dissolução de várias substâncias polares e iônicas, mas não torna a água solvente universal. O etanol mistura-se com água em todas as proporções usuais porque seu grupo hidroxila pode formar ligações de hidrogênio com a água, embora possua parte apolar. Já hidrocarbonetos como óleo mineral possuem interações predominantemente dispersivas e pouca afinidade com água; a mistura tende a separar-se em fases. A frase 'semelhante dissolve semelhante' é uma heurística, não uma lei quantitativa: temperatura, composição, entropia e forças entre todas as espécies importam. Dissolver não significa necessariamente reagir; sacarose se dispersa molecularmente sem precisar formar novos produtos químicos.",
        "example": "Compare três amostras: NaCl em água libera íons hidratados; etanol forma mistura homogênea molecular; óleo tende a produzir duas fases. Classifique os processos antes de discutir energia.",
        "pitfall": "Não atribua toda solubilidade à presença de ligações covalentes com água.",
        "steps": ["Reconheça grupos polares, apolares e possibilidades de ligação de hidrogênio.","Compare interações soluto–água com interações que precisam ser rompidas.","Conclua sobre tendência de dissolução sem afirmar miscibilidade universal."]
      },
      {
        "level": "intermediate",
        "title": "Miscibilidade e emulsão",
        "explanation": "Dois líquidos são miscíveis quando podem formar uma única fase nas proporções consideradas. Água e etanol são miscíveis, mas água e óleo tipicamente apresentam baixa miscibilidade. Agitação pode fragmentar óleo em gotículas e formar dispersão temporária, sem converter a mistura em solução molecular verdadeira. Surfactantes possuem região hidrofílica e região hidrofóbica; adsorvem-se na interface e podem estabilizar emulsões, reduzindo a tendência à coalescência. Uma emulsão continua sendo um sistema disperso e pode apresentar instabilidade ao longo do tempo. A tensão superficial da água resulta de forças coesivas e influencia molhamento, formação de gotas e capilaridade. Detergentes alteram fenômenos interfaciais, mas não fazem o óleo transformar-se quimicamente em água. Em laboratório, a identificação de uma ou duas fases após repouso é evidência útil, porém não mede por si só a composição molecular de cada fase.",
        "example": "Misture água e óleo: duas fases aparecem após repouso. Agite com detergente: gotículas menores persistem por mais tempo; identifique uma emulsão estabilizada, não uma reação de neutralização.",
        "pitfall": "Espuma e turbidez não provam dissolução molecular completa.",
        "steps": ["Identifique se os líquidos são miscíveis e se há fase dispersa e contínua.","Diferencie mistura homogênea de emulsão estabilizada por surfactante.","Avalie se a separação de fases decorre do balanço das interações moleculares."]
      },
      {
        "level": "advanced",
        "title": "Competição de interações",
        "explanation": "A solubilidade depende de um balanço de interações soluto–soluto, solvente–solvente e soluto–solvente, além da entropia de mistura. A presença de grupos capazes de fazer ligações de hidrogênio pode elevar a afinidade pela água, mas o aumento da cadeia carbônica frequentemente reduz a miscibilidade de moléculas orgânicas. Assim, álcoois de cadeia curta são mais miscíveis que homólogos de cadeia longa, em condições comparáveis. Em moléculas anfifílicas, a auto-organização em micelas pode aprisionar compostos hidrofóbicos, aumentando sua dispersão aparente sem alterar sua polaridade intrínseca. Em sistemas biológicos, bicamadas lipídicas organizam caudas apolares voltadas para o interior e cabeças polares em contato com a água. A organização não é simplesmente 'repulsão' entre água e óleo; emerge do balanço de energia livre e das interações no conjunto. Não extrapole solubilidade sem especificar temperatura e concentração.",
        "example": "Compare etanol e 1-octanol: ambos possuem –OH, mas o segundo tem cadeia apolar maior. Preveja menor miscibilidade em água para 1-octanol, justificando o balanço estrutural.",
        "pitfall": "Ter um grupo –OH não garante miscibilidade total.",
        "steps": ["Liste interações água–água, soluto–soluto e água–soluto.","Analise o custo de romper interações e o ganho ao formar novas atrações.","Considere entropia e temperatura antes de concluir espontaneidade da mistura."]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual mistura tende a formar uma fase homogênea em proporções usuais?",
        "options": [
          "Água e óleo mineral",
          "Água e areia",
          "Água e etanol",
          "Água e parafina sólida"
        ],
        "correctIndex": 2,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "Etanol possui grupo –OH que interage por ligações de hidrogênio com água, permitindo miscibilidade. Os outros exemplos apresentam fase insolúvel ou baixa miscibilidade."
      },
      {
        "level": "intermediate",
        "prompt": "Após agitar água, óleo e detergente, a mistura permanece turva. Qual descrição é adequada?",
        "options": [
          "O óleo virou água",
          "Formou-se uma emulsão estabilizada",
          "O detergente criou um sal de cozinha",
          "A água perdeu polaridade"
        ],
        "correctIndex": 1,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "O surfactante estabiliza gotículas dispersas ao atuar na interface. A turbidez pode indicar dispersão coloidal; não prova solução molecular nem transformação química do óleo."
      },
      {
        "level": "advanced",
        "prompt": "Entre etanol e 1-octanol, qual tende a ser menos miscível em água?",
        "options": [
          "Ambos necessariamente iguais",
          "Etanol, por ser menor",
          "Nenhum contém grupo polar",
          "1-octanol, pela cadeia apolar maior"
        ],
        "correctIndex": 3,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "Embora ambos contenham hidroxila, a cadeia carbônica longa do 1-octanol aumenta a contribuição hidrofóbica e reduz sua miscibilidade em água relativamente ao etanol."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Soluções aquosas: conceito e classificação",
    "objective": "Classificar soluções aquosas por composição, saturação e condução sem confundir concentração e solubilidade.",
    "prerequisites": [
      "Misturas homogêneas",
      "Quantidade de matéria",
      "Íons"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito e constituintes",
        "explanation": "Solução aquosa é uma mistura homogênea em escala molecular ou iônica cujo solvente é a água. Soluto é o componente dissolvido, mas a classificação não depende apenas de ser sólido: gases como CO₂ e líquidos como etanol também podem atuar como solutos. Uma solução pode conter mais de um soluto, e 'homogênea' significa que não se observam fases distintas nas condições consideradas, não que todas as moléculas sejam idênticas. Dissolução pode envolver dispersão molecular, como glicose, ou formação de íons móveis, como NaCl. Soluções aquosas de compostos covalentes também podem conduzir corrente se houver ionização, como ocorre com muitos ácidos. A aparência transparente não prova ausência de soluto: soluções concentradas podem ser incolores. Concentração descreve quantidade por volume ou massa; não é sinônimo de saturação, que depende do limite de solubilidade.",
        "example": "Dissolva 10 g de glicose em 100 g de água: a massa final é 110 g, desprezando perdas; a fração mássica da glicose é 10/110≈0,0909, ou 9,09%.",
        "pitfall": "Não use massa do solvente como denominador da porcentagem em massa da solução.",
        "steps": ["Classifique solvente, soluto e fase homogênea de cada amostra aquosa.","Calcule a concentração com a definição e as unidades fornecidas.","Diferencie concentração de solubilidade e de quantidade total de solução."]
      },
      {
        "level": "intermediate",
        "title": "Saturação e diluição",
        "explanation": "Uma solução insaturada contém menos soluto dissolvido que o limite de equilíbrio nas condições dadas. A saturada atinge esse limite; a supersaturada contém mais soluto dissolvido do que o equilíbrio permitiria e é metaestável, podendo cristalizar quando perturbada. Essas categorias só fazem sentido com temperatura, pressão e composição especificadas. Ao diluir uma solução por adição de água sem perda de soluto, a quantidade de matéria do soluto permanece constante: C1V1=C2V2 quando as concentrações são molares e os volumes referem-se aos estados inicial e final. A equação não se aplica diretamente a misturas com reação, precipitação ou variação da quantidade de soluto. A diluição reduz concentração, mas não transforma automaticamente uma solução saturada em supersaturada; normalmente a afasta da saturação, salvo outras mudanças de condições.",
        "example": "Para 100 mL de NaCl 2,0 mol/L diluídos até 500 mL, calcule C2=2,0×100/500=0,40 mol/L; os mols de NaCl permanecem 0,20.",
        "pitfall": "Não some volumes sem considerar o volume final medido.",
        "steps": ["Compare a massa de soluto presente com o limite de solubilidade na temperatura dada.","Na diluição sem reação ou precipitação, aplique C1V1=C2V2.","Verifique conservação do soluto e não confunda solução saturada com concentrada."]
      },
      {
        "level": "advanced",
        "title": "Eletrólitos e interpretação",
        "explanation": "Eletrólitos geram portadores de carga em solução aquosa. NaCl é eletrólito forte porque os íons do sólido se separam na dissolução; ácido acético é eletrólito fraco porque apenas parte das moléculas ioniza em equilíbrio, nas condições usuais. Glicose dissolve-se molecularmente e não produz concentração significativa de íons por si só. A condutividade elétrica depende da concentração de íons, suas cargas e mobilidades, além da temperatura. Portanto, a comparação entre soluções exige controle de concentração e geometria de medida. Uma solução concentrada de eletrólito fraco não pode ser automaticamente classificada como melhor condutora que uma diluída de eletrólito forte. Ácidos e bases podem alterar o pH e produzir íons, mas pH isolado não determina condutividade. Em soluções reais, interações entre íons fazem atividades diferirem de concentrações, especialmente em meios concentrados.",
        "example": "Compare soluções 0,1 mol/L de glicose e NaCl: a primeira mantém moléculas neutras; a segunda contém Na⁺ e Cl⁻ móveis e deve conduzir muito melhor, sob condições equivalentes.",
        "pitfall": "Não confunda eletrólito forte com solução necessariamente concentrada.",
        "steps": ["Verifique se o soluto forma íons móveis ao dissolver em água.","Diferencie dissociação de sal e ionização de moléculas, sem presumir grau idêntico.","Relacione condutividade ao número e à mobilidade dos íons, não apenas à massa dissolvida."]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "10 g de glicose são dissolvidos em 100 g de água. Qual porcentagem em massa de glicose?",
        "options": [
          "10,00%",
          "9,09%",
          "11,00%",
          "0,91%"
        ],
        "correctIndex": 1,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "A massa da solução é 110 g. A fração mássica é 10/110=0,0909, correspondente a aproximadamente 9,09%, e não 10%. Não use massa do solvente como denominador da porcentagem em massa da solução. A conclusão depende das condições descritas no enunciado, sem extrapolação para sistemas diferentes."
      },
      {
        "level": "intermediate",
        "prompt": "100 mL de solução 2,0 mol/L são diluídos até 500 mL. Qual a concentração final?",
        "options": [
          "10 mol/L",
          "1,0 mol/L",
          "0,40 mol/L",
          "0,04 mol/L"
        ],
        "correctIndex": 2,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "Sem perda de soluto, C1V1=C2V2. Portanto C2=2,0×100/500=0,40 mol/L; o volume usado é o volume final. Não some volumes sem considerar o volume final medido. A conclusão depende das condições descritas no enunciado, sem extrapolação para sistemas diferentes."
      },
      {
        "level": "advanced",
        "prompt": "Qual solução tende a conduzir mais corrente em condições comparáveis?",
        "options": [
          "NaCl aquoso 0,1 mol/L",
          "Glicose aquosa 0,1 mol/L",
          "Água com sacarose sem íons",
          "Água destilada ideal"
        ],
        "correctIndex": 0,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "O NaCl dissocia-se em Na⁺ e Cl⁻ móveis, produzindo portadores de carga. A glicose e a sacarose dissolvem-se como moléculas neutras. Não confunda eletrólito forte com solução necessariamente concentrada. A conclusão depende das condições descritas no enunciado, sem extrapolação para sistemas diferentes."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "A eletrosfera e o diagrama de Linus Pauling",
    "objective": "Construir configurações eletrônicas de átomos e íons e distinguir ordem energética de ocupação.",
    "prerequisites": [
      "Número atômico",
      "Subníveis s p d f",
      "Princípio de Pauli"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Subníveis e capacidade",
        "explanation": "O modelo de distribuição eletrônica escolar organiza elétrons em níveis e subníveis caracterizados por números quânticos. Um orbital comporta no máximo dois elétrons de spins opostos, conforme o princípio de exclusão de Pauli. O subnível s contém um orbital e comporta dois elétrons; p contém três e comporta seis; d contém cinco e comporta dez; f contém sete e comporta catorze. O diagrama de Linus Pauling apresenta uma ordem aproximada de preenchimento energético, como 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p. Essa sequência é útil para muitos átomos neutros no estado fundamental, mas não deve ser confundida com a ordem numérica simples das camadas. O número atômico Z fornece a quantidade de elétrons apenas para o átomo neutro. A distribuição eletrônica descreve um modelo quântico de ocupação e não trajetórias planetárias fixas ao redor do núcleo.",
        "example": "Para oxigênio neutro, Z=8: preencha 1s² (2), 2s² (mais 2), 2p⁴ (mais 4). Confira a soma 2+2+4=8 elétrons.",
        "pitfall": "Não coloque oito elétrons no subnível 2p: sua capacidade máxima é seis.",
        "steps": ["Identifique número atômico e quantidade de elétrons do átomo neutro.","Preencha subníveis respeitando capacidades s², p⁶, d¹⁰ e f¹⁴.","Confira a soma dos expoentes e o princípio de exclusão de Pauli."]
      },
      {
        "level": "intermediate",
        "title": "Hund e exceções",
        "explanation": "Em orbitais de mesma energia dentro de um subnível, a regra de Hund orienta a ocupação inicial com elétrons desemparelhados de spins paralelos antes do pareamento, no estado fundamental idealizado. No nitrogênio, 2p³ corresponde a um elétron em cada um dos três orbitais p. A regra de Aufbau, frequentemente ilustrada pelas diagonais de Pauling, fornece uma aproximação energética, mas átomos como cromo e cobre apresentam configurações fundamentais que diferem da previsão mecânica mais simples: Cr é [Ar]3d⁵4s¹ e Cu é [Ar]3d¹⁰4s¹. Essas exceções envolvem diferenças energéticas pequenas e interações eletrônicas; não são justificadas apenas por 'querer estabilidade' sem contexto. A configuração permite prever elétrons de valência e propriedades periódicas de modo aproximado, porém não determina sozinha toda reatividade. Para cátions de metais de transição, a retirada costuma ocorrer primeiro do subnível ns, mesmo que ns tenha sido preenchido antes de (n−1)d.",
        "example": "Para N, Z=7, obtenha 1s²2s²2p³. Distribua os três elétrons 2p em orbitais distintos antes de emparelhar; há três desemparelhados.",
        "pitfall": "Não trate a diagonal como regra infalível para todos os elementos.",
        "steps": ["Distribua elétrons em orbitais degenerados isoladamente antes de emparelhar.","Aplique a regra de Hund e confira spins e número de elétrons.","Diferencie regra de preenchimento simplificada de exceções energéticas reais."]
      },
      {
        "level": "advanced",
        "title": "Átomos e íons",
        "explanation": "Para determinar a configuração de um íon, conte elétrons usando Z e carga. Um cátion de carga +2 possui dois elétrons a menos que o átomo neutro; um ânion −1 possui um a mais. No ferro neutro, Z=26, a configuração usual é [Ar]3d⁶4s². Para Fe²⁺, retiram-se primeiro os dois elétrons 4s, resultando em [Ar]3d⁶. Para Fe³⁺, retira-se mais um do 3d, obtendo [Ar]3d⁵. Isso evidencia que ordem de preenchimento e ordem de remoção não são inversões automáticas simples. Em espécies isoeletrônicas, como Na⁺ e Ne, a quantidade de elétrons é igual, mas a carga nuclear é diferente, influenciando o tamanho e a atração eletrônica. Configurações de átomos isolados no estado fundamental não descrevem integralmente moléculas, sólidos ou estados excitados. A identificação de elétrons de valência requer atenção ao grupo químico e aos subníveis envolvidos.",
        "example": "Fe neutro tem 26 elétrons e [Ar]3d⁶4s²; Fe²⁺ tem 24. Remova 4s² e obtenha [Ar]3d⁶, preservando o núcleo [Ar].",
        "pitfall": "Não remova 3d antes de 4s ao formar Fe²⁺.",
        "steps": ["Determine a carga do íon e ajuste o total de elétrons em relação ao átomo neutro.","Escreva a configuração eletrônica e remova ou acrescente elétrons no subnível adequado.","Para cátions de metais de transição, examine a remoção de ns antes de (n−1)d."]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a configuração do oxigênio neutro (Z=8)?",
        "options": [
          "1s²2s²2p⁴",
          "1s²2s²2p⁶",
          "1s²2p⁶",
          "1s²2s⁴2p²"
        ],
        "correctIndex": 0,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "Oito elétrons são distribuídos em 1s², 2s² e 2p⁴, respeitando capacidades dos subníveis e somando 2+2+4=8. Não coloque oito elétrons no subnível 2p: sua capacidade máxima é seis. A conclusão depende das condições descritas no enunciado, sem extrapolação para sistemas diferentes."
      },
      {
        "level": "intermediate",
        "prompt": "Na configuração fundamental do nitrogênio (Z=7), quantos elétrons 2p ficam desemparelhados?",
        "options": [
          "Zero",
          "Um",
          "Dois",
          "Três"
        ],
        "correctIndex": 3,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "O nitrogênio apresenta 1s²2s²2p³. Pela regra de Hund, os três orbitais p recebem inicialmente um elétron cada, totalizando três desemparelhados."
      },
      {
        "level": "advanced",
        "prompt": "Qual configuração corresponde a Fe²⁺, partindo de Fe neutro [Ar]3d⁶4s²?",
        "options": [
          "[Ar]3d⁴4s²",
          "[Ar]3d⁶",
          "[Ar]3d⁵4s¹",
          "[Ar]3d⁸"
        ],
        "correctIndex": 1,
        "hint": "Releia a definição e confronte as condições de validade antes de decidir.",
        "solution": "Na formação de Fe²⁺, removem-se primeiro os dois elétrons 4s do ferro neutro, deixando [Ar]3d⁶. A ordem de remoção não segue simplesmente o inverso da ordem escrita."
      }
    ]
  }
];
