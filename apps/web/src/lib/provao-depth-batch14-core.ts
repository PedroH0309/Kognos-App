import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original disciplinary content; teacher review pending. */
export const provaoDepthBatch14Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Potenciais-padrão de redução",
    "objective": "Calcular E° de pilhas e distinguir redução, oxidação, espontaneidade e limitações das condições-padrão.",
    "prerequisites": [
      "Oxirredução",
      "Semirreações",
      "Unidades elétricas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Tabelas e referência eletroquímica",
        "explanation": "Potenciais-padrão de redução são medidos relativamente ao eletrodo-padrão de hidrogênio, definido como zero. O valor tabelado corresponde à semirreação escrita como redução. Quanto mais positivo E°red, maior a tendência relativa da espécie de receber elétrons sob as condições-padrão consideradas. Em uma pilha galvânica espontânea, a redução acontece no cátodo e a oxidação no ânodo. Calcula-se E°cel=E°red(cátodo)−E°red(ânodo). Para Cu²⁺/Cu=+0,34 V e Zn²⁺/Zn=−0,76 V, a célula Zn/Cu fornece E°=+1,10 V. O sinal positivo indica espontaneidade termodinâmica da reação global como escrita, não velocidade elevada. Os elétrons percorrem o fio externo do ânodo ao cátodo; a ponte salina permite transporte iônico e mantém eletroneutralidade. Potencial é grandeza intensiva e não deve ser multiplicado pelos coeficientes estequiométricos.",
        "example": "Dados Cu²⁺/Cu=+0,34 V e Zn²⁺/Zn=−0,76 V: primeiro, identifique cobre como cátodo; segundo, identifique zinco como ânodo; terceiro, calcule 0,34−(−0,76)=1,10 V. Não some potenciais de redução diretamente.",
        "pitfall": "Não substitua a análise do mecanismo por um rótulo; identifique os dados, hipóteses e limites antes de responder.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Semirreações e energia livre",
        "explanation": "Para montar a reação global, escreva a oxidação no ânodo e a redução no cátodo, depois multiplique as equações para cancelar elétrons. O balanceamento deve conservar átomos e cargas. Na pilha Zn/Cu, Zn(s)→Zn²⁺+2e⁻ e Cu²⁺+2e⁻→Cu(s), portanto Zn+Cu²⁺→Zn²⁺+Cu. Se uma semirreação libera três elétrons e a outra consome dois, ajuste para seis elétrons sem multiplicar E°. A relação ΔG°=−nFE° liga força eletromotriz à variação de energia livre padrão: E° positivo implica ΔG° negativo para o sentido escrito. Se inverter a reação global, E° muda de sinal. Isso não autoriza prever velocidade de reação, pois barreiras cinéticas e passivação podem retardar processos favoráveis. A quantidade n representa elétrons transferidos na reação global corretamente balanceada, não o número de espécies presentes.",
        "example": "Dados Al³⁺/Al=−1,66 V e Cu²⁺/Cu=+0,34 V: primeiro, escreva 2Al→2Al³⁺+6e⁻; segundo, 3Cu²⁺+6e⁻→3Cu; terceiro, calcule E°=0,34−(−1,66)=2,00 V, sem triplicar os potenciais. O valor positivo confirma o sentido espontâneo padrão da reação.",
        "pitfall": "Não extrapole uma relação válida em condições específicas para qualquer situação; compare os mecanismos antes de aplicar a regra.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Concentração e equação de Nernst",
        "explanation": "Valores-padrão pressupõem estados-padrão convencionais, normalmente tabulados a 25 °C. Em condições não padronizadas, o quociente reacional Q influencia o potencial. A 25 °C, uma aproximação escolar é E=E°−(0,05916/n)log Q, com atividades aproximadas por concentrações em soluções suficientemente diluídas. Para Zn+Cu²⁺→Zn²⁺+Cu, Q=[Zn²⁺]/[Cu²⁺], pois sólidos puros não entram no quociente. Aumentar Zn²⁺ ou reduzir Cu²⁺ eleva Q e diminui E de equilíbrio. A tensão medida sob corrente pode ser menor por resistência interna e sobrepotenciais, que não estão representados na equação ideal. Temperatura, concentração e estado químico devem ser explicitados antes de comparar pilhas. Não confunda uma previsão termodinâmica de potencial com a capacidade de uma bateria entregar corrente elevada por longo período.",
        "example": "Para Zn/Cu com E°=1,10 V, n=2 e Q=100 a 25 °C: primeiro, log100=2; segundo, correção=(0,05916/2)×2=0,05916 V; terceiro, E≈1,041 V. O resultado usa atividades aproximadas por concentrações.",
        "pitfall": "Não confunda uma tendência ou modelo simplificado com garantia universal; considere exceções, contexto e limitações de medida.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma pilha Zn/Cu tem E°Cu=+0,34 V e E°Zn=−0,76 V. Qual é E°cel?",
        "options": [
          "−1,10 V",
          "+0,42 V",
          "+1,10 V",
          "−0,42 V"
        ],
        "correctIndex": 2,
        "hint": "Subtraia o potencial de redução do ânodo daquele do cátodo.",
        "solution": "A alternativa C está correta: Cu²⁺ reduz no cátodo e Zn oxida no ânodo. Logo E°cel=0,34−(−0,76)=1,10 V, valor positivo para a reação espontânea no sentido escolhido."
      },
      {
        "level": "intermediate",
        "prompt": "Ao multiplicar uma semirreação por três para balancear elétrons, seu E°:",
        "options": [
          "Triplica.",
          "Não muda.",
          "É dividido por três.",
          "Inverte automaticamente o sinal."
        ],
        "correctIndex": 1,
        "hint": "Potencial é intensivo, diferentemente da energia livre total.",
        "solution": "A alternativa B está correta: multiplicar a equação altera a quantidade de matéria e os elétrons, mas não o potencial. Somente inverter o sentido da semirreação altera o sinal do potencial associado."
      },
      {
        "level": "advanced",
        "prompt": "Em Zn/Cu a 25 °C, aumentar Q de 1 para 100 faz E:",
        "options": [
          "Aumentar 1,10 V.",
          "Permanecer igual.",
          "Ficar obrigatoriamente negativo.",
          "Diminuir aproximadamente 0,059 V."
        ],
        "correctIndex": 3,
        "hint": "Use Nernst com n=2 e log100=2.",
        "solution": "A alternativa D está correta: E=1,10−(0,05916/2)×2≈1,041 V. Portanto a diferença é uma redução aproximada de 0,059 V nas condições ideais consideradas."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Resistores. Primeira Lei de Ohm.",
    "objective": "Aplicar U=RI, calcular resistências equivalentes e distinguir resistividade de resistência e componentes ôhmicos de não ôhmicos.",
    "prerequisites": [
      "Corrente elétrica",
      "Diferença de potencial",
      "Unidades SI"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Lei de Ohm e resistividade",
        "explanation": "Resistência elétrica é a razão R=U/I entre tensão aplicada e corrente, quando I não é nula. Em um resistor ôhmico, mantidas as condições físicas, U é proporcional a I e a resistência permanece aproximadamente constante. Resistência é medida em ohms (Ω), tensão em volts e corrente em ampères. Dispositivos como diodos e lâmpadas incandescentes podem não obedecer à proporcionalidade em toda a faixa de operação. Para fio homogêneo de seção uniforme, a segunda lei de Ohm fornece R=ρL/A: resistividade ρ depende do material e temperatura, enquanto comprimento L e área A dependem da geometria. Duplicar L dobra R se todo o restante ficar constante; duplicar A reduz R à metade. A corrente convencional segue o sentido do potencial maior para o menor no circuito externo, embora elétrons metálicos se movam no sentido contrário. A temperatura pode modificar a resistividade e limitar o uso de modelos ideais.",
        "example": "Um resistor ôhmico recebe 12 V e conduz 0,50 A: primeiro, identifique U=12 V e I=0,50 A; segundo, aplique R=U/I; terceiro, calcule R=24 Ω. Para afirmar R constante em outras tensões, verifique comportamento ôhmico.",
        "pitfall": "Não substitua a análise do mecanismo por um rótulo; identifique os dados, hipóteses e limites antes de responder.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Série e paralelo",
        "explanation": "Resistores em série compartilham a mesma corrente, e suas quedas de tensão somam a tensão total. A resistência equivalente é Req=R1+R2+... . Resistores em paralelo estão ligados aos mesmos dois nós, compartilham a mesma diferença de potencial e dividem a corrente total. Vale 1/Req=1/R1+1/R2+...; para dois resistores, Req=R1R2/(R1+R2). A resistência equivalente paralela de resistores positivos é inferior à menor resistência individual. Em circuitos mistos, a proximidade no desenho não determina série ou paralelo: é preciso identificar nós e ramificações. A lei dos nós resulta da conservação de carga, e a soma algébrica de tensões em malhas decorre da conservação de energia. Esses modelos são adequados a circuitos concentrados e componentes ideais no nível escolar, não substituindo análise de elementos não lineares.",
        "example": "Resistores 6 Ω e 3 Ω em paralelo sob 12 V: primeiro, Req=6×3/(6+3)=2 Ω; segundo, I_total=12/2=6 A; terceiro, correntes de ramo são 2 A e 4 A, cuja soma confere os 6 A. O teste de conservação de corrente confirma a associação.",
        "pitfall": "Não extrapole uma relação válida em condições específicas para qualquer situação; compare os mecanismos antes de aplicar a regra.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Potência e limitações físicas",
        "explanation": "Potência elétrica dissipada por um resistor é P=UI. Para resistor que obedece a U=RI, também P=I²R e P=U²/R. A energia dissipada durante intervalo t com potência constante é E=Pt. Resistores reais possuem potência nominal e podem aquecer perigosamente se dissiparem acima do previsto. Em muitos metais, para variações moderadas de temperatura, R≈R0[1+α(T−T0)], em que α é coeficiente térmico aproximado. Uma lâmpada incandescente fria tem resistência diferente da resistência em operação e não pode ser modelada como resistor fixo em todas as tensões. A resistividade é uma propriedade material em condições definidas, enquanto resistência também depende da forma do condutor. Uma associação ideal não informa sozinha a temperatura final, que depende de dissipação térmica e ambiente. Evite misturar energia em joules com potência em watts e atenção às unidades ao calcular consumo.",
        "example": "Um fio de R=8 Ω é substituído por fio do mesmo material e temperatura, com comprimento e área ambos duplicados: primeiro, escreva R=ρL/A; segundo, calcule fator 2/2=1; terceiro, obtenha R_novo=8 Ω.",
        "pitfall": "Não confunda uma tendência ou modelo simplificado com garantia universal; considere exceções, contexto e limitações de medida.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um resistor recebe 12 V e conduz 0,5 A. Qual é sua resistência?",
        "options": [
          "6 Ω",
          "12 Ω",
          "24 Ω",
          "48 Ω"
        ],
        "correctIndex": 2,
        "hint": "Calcule R=U/I, mantendo as unidades coerentes.",
        "solution": "A alternativa C está correta: 12/0,5=24 Ω. A relação fornece a resistência no ponto de operação, enquanto a constância em outros pontos requer comportamento ôhmico."
      },
      {
        "level": "intermediate",
        "prompt": "Resistores de 6 Ω e 3 Ω em paralelo possuem Req:",
        "options": [
          "9 Ω",
          "2 Ω",
          "3 Ω",
          "18 Ω"
        ],
        "correctIndex": 1,
        "hint": "Use o produto dividido pela soma dos dois resistores.",
        "solution": "A alternativa B está correta: Req=6×3/(6+3)=18/9=2 Ω. O resultado é menor que a menor resistência individual, como deve ocorrer para dois resistores positivos em paralelo."
      },
      {
        "level": "advanced",
        "prompt": "Um fio mantém material e temperatura, mas dobra comprimento e área. Sua resistência:",
        "options": [
          "Dobra.",
          "Cai à metade.",
          "Quadruplica.",
          "Não muda."
        ],
        "correctIndex": 3,
        "hint": "Compare os fatores L e A na fórmula R=ρL/A.",
        "solution": "A alternativa D está correta: o comprimento dobrado multiplica R por dois, enquanto a área dobrada divide por dois. Os efeitos se cancelam se a resistividade não mudar."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Organização celular dos seres vivos",
    "objective": "Distinguir células procarióticas e eucarióticas e relacionar organelas, membranas, compartimentalização e exceções celulares.",
    "prerequisites": [
      "Teoria celular",
      "Biomoléculas",
      "Microscopia"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Procariontes e eucariontes",
        "explanation": "A teoria celular descreve células como unidades fundamentais de organização e funcionamento dos seres vivos celulares. Bactérias apresentam células procarióticas: o DNA ocupa uma região chamada nucleoide, sem envelope nuclear, mas há ribossomos e membrana plasmática. Eucariontes apresentam núcleo delimitado e organelas membranosas, como mitocôndrias, retículo endoplasmático e complexo golgiense. Ribossomos são estruturas não membranosas presentes em ambos os tipos. A membrana plasmática é uma bicamada lipídica com proteínas que regula trocas e participa de comunicação. Paredes celulares existem em muitas bactérias, plantas e fungos, mas sua composição difere: peptidoglicano, celulose e quitina, respectivamente. Vírus não são células procarióticas: não possuem organização celular própria. A ausência de organelas membranosas não significa ausência de processos bioquímicos complexos em procariontes. Identificar uma célula exige múltiplas características e contexto.",
        "example": "Uma imagem mostra nucleoide, ribossomos e membrana, sem envelope nuclear: primeiro, identifique DNA não delimitado; segundo, reconheça ribossomos; terceiro, classifique como célula procariótica, sem inferir espécie exata.",
        "pitfall": "Não substitua a análise do mecanismo por um rótulo; identifique os dados, hipóteses e limites antes de responder.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Vegetais e animais",
        "explanation": "Células vegetais e animais são eucarióticas e compartilham membrana plasmática, núcleo, ribossomos, mitocôndrias, retículo endoplasmático e complexo golgiense. Plantas geralmente apresentam parede celulósica e vacúolo central que contribui para turgor e armazenamento. Cloroplastos fazem fotossíntese em células fotossintetizantes, mas muitas células de raízes não os possuem. Células animais não apresentam parede celulósica ou cloroplastos e podem ter lisossomos envolvidos na digestão intracelular. Mitocôndrias participam da respiração celular aeróbia em plantas e animais; plantas respiram também durante a noite. Fotossíntese e respiração não são processos mutuamente exclusivos: a primeira forma moléculas orgânicas com energia luminosa, e a segunda pode utilizar substratos orgânicos para produção de ATP. Diagramas de livros simplificam tamanhos e proporções das organelas. A quantidade de organelas varia segundo função e estado celular.",
        "example": "Numa célula foliar iluminada: primeiro, cloroplastos captam energia luminosa; segundo, moléculas orgânicas podem alimentar respiração mitocondrial; terceiro, conclua que fotossíntese e respiração coexistem em plantas.",
        "pitfall": "Não extrapole uma relação válida em condições específicas para qualquer situação; compare os mecanismos antes de aplicar a regra.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Compartimentalização e microscopia",
        "explanation": "O retículo endoplasmático rugoso participa da produção de proteínas de secreção e membrana; o liso está envolvido em síntese lipídica e outras funções. O complexo golgiense modifica, organiza e direciona moléculas, enquanto lisossomos realizam digestão em muitos tipos celulares animais. A compartimentalização favorece condições químicas distintas dentro de uma célula, mas procariontes também possuem organização interna. Microscópios ópticos não resolvem todas as organelas; microscopia eletrônica revela detalhes finos, frequentemente com amostras fixadas e processadas. A interpretação de micrografias exige escala, contraste e conhecimento do tipo de corte. Uma célula sem núcleo visível não é automaticamente bacteriana: hemácias humanas maduras perdem o núcleo durante diferenciação, mas pertencem a organismo eucariótico. Não se deve confundir ausência de uma estrutura na imagem com ausência real da estrutura no organismo. Diferencie observação de inferência taxonômica.",
        "example": "Uma hemácia humana madura não apresenta núcleo: primeiro, registre a observação; segundo, considere sua origem de linhagem eucariótica animal; terceiro, rejeite a classificação como bactéria baseada apenas na ausência de núcleo.",
        "pitfall": "Não confunda uma tendência ou modelo simplificado com garantia universal; considere exceções, contexto e limitações de medida.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma bactéria típica apresenta:",
        "options": [
          "Ausência de DNA.",
          "Ausência de membrana.",
          "DNA em nucleoide sem envelope nuclear.",
          "Ausência de ribossomos."
        ],
        "correctIndex": 2,
        "hint": "A principal distinção é o envelope nuclear, não a existência de DNA.",
        "solution": "A alternativa C está correta: bactérias possuem DNA em nucleoide e apresentam membrana e ribossomos. A ausência de envelope nuclear distingue sua organização procariótica."
      },
      {
        "level": "intermediate",
        "prompt": "Qual afirmação sobre células vegetais é correta?",
        "options": [
          "Não realizam respiração.",
          "Podem possuir mitocôndrias e cloroplastos.",
          "Todas as células de raízes têm cloroplastos.",
          "A parede substitui a membrana."
        ],
        "correctIndex": 1,
        "hint": "Considere as funções diferentes da respiração e fotossíntese.",
        "solution": "A alternativa B está correta: células vegetais podem possuir mitocôndrias e cloroplastos. Nem toda célula vegetal possui cloroplastos, e a parede não substitui a membrana plasmática."
      },
      {
        "level": "advanced",
        "prompt": "Por que uma hemácia humana madura não é procarionte?",
        "options": [
          "Possui parede de peptidoglicano.",
          "Possui cloroplastos.",
          "Todo procarionte tem núcleo.",
          "Deriva de uma linhagem eucariótica animal."
        ],
        "correctIndex": 3,
        "hint": "A ausência de núcleo isolada não define a origem celular.",
        "solution": "A alternativa D está correta: hemácias maduras perdem o núcleo na diferenciação, mas derivam de células eucarióticas. A classificação requer considerar origem e características do organismo."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Expansão marítima e constituição do espaço atlântico",
    "objective": "Relacionar expansão ibérica, rotas e tratados, agência indígena e africana, conquista, escravização e impactos atlânticos.",
    "prerequisites": [
      "Comércio medieval",
      "Estados modernos",
      "Cronologia histórica"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Navegação ibérica e redes preexistentes",
        "explanation": "A expansão marítima europeia dos séculos XV e XVI envolveu interesses comerciais, apoio político das monarquias e conhecimentos náuticos acumulados por diferentes povos. Portugal articulou portos atlânticos, ilhas e viagens graduais pela costa africana, buscando mercadorias e rotas para o oceano Índico. A tomada de Ceuta em 1415 é um marco da expansão portuguesa, mas não significa criação das primeiras redes de comércio africanas. Embarcações, cartografia, conhecimento de correntes e ventos e instrumentos de orientação contribuíram em conjunto, sem existir uma única invenção responsável por todas as viagens. A passagem pelo Cabo da Boa Esperança em 1488 precedeu a chegada de Vasco da Gama à Índia em 1498. Sociedades africanas e asiáticas já possuíam redes mercantis e saberes marítimos próprios; descrevê-las como passivas distorce o processo histórico. Interesses religiosos e rivalidades políticas também influenciaram as expedições, além da busca por lucro.",
        "example": "Para organizar os marcos: primeiro, Ceuta em 1415 sinaliza expansão portuguesa; segundo, Bartolomeu Dias contorna o Cabo em 1488; terceiro, Vasco da Gama alcança a Índia por mar em 1498.",
        "pitfall": "Não substitua a análise do mecanismo por um rótulo; identifique os dados, hipóteses e limites antes de responder.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Colombo, tratados e conquista",
        "explanation": "A viagem de Colombo às Américas em 1492, patrocinada por Castela, intensificou conexões duradouras entre continentes, mas não representou descoberta de terras desabitadas. Povos indígenas viviam nas Américas havia milênios e desenvolveram sociedades diversas. O Tratado de Tordesilhas de 1494 procurou delimitar pretensões territoriais entre Portugal e Castela; não foi negociado com povos indígenas e não garantiu ocupação efetiva. A chegada da armada de Cabral ao litoral da atual Bahia em 1500 insere-se na expansão portuguesa pelo Atlântico sul, sem implicar controle imediato de todo o território. Conquista e colonização envolveram alianças, guerras, resistência indígena, epidemias e transformações sociais. A circulação de espécies e doenças entre continentes é frequentemente chamada intercâmbio colombiano, conceito que não deve apagar as assimetrias de poder. Documentos europeus são fontes importantes, mas apresentam perspectivas e silêncios que precisam ser confrontados com outras evidências.",
        "example": "Ordene os acontecimentos: primeiro, 1492 marca a viagem de Colombo; segundo, 1494 corresponde ao Tratado de Tordesilhas; terceiro, 1500 à chegada da armada de Cabral. Nenhuma data comprova ocupação homogênea.",
        "pitfall": "Não extrapole uma relação válida em condições específicas para qualquer situação; compare os mecanismos antes de aplicar a regra.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Tráfico atlântico e transformações",
        "explanation": "A constituição do espaço atlântico conectou circuitos mercantis, produção agrícola colonial, circulação de plantas e animais e deslocamentos humanos. O tráfico transatlântico de africanos escravizados envolveu captura, coerção, transporte forçado e exploração do trabalho, não migração voluntária. A escravização contribuiu para acumulação de riqueza em redes comerciais e plantations, ao mesmo tempo que provocou perdas humanas, resistência e profundas transformações em sociedades africanas e americanas. Pessoas indígenas e africanas foram agentes históricos que resistiram, negociaram e recriaram práticas culturais em condições de poder desiguais. O intercâmbio biológico alterou ambientes e populações, inclusive pela disseminação de doenças. Para compreender esses processos, historiadores confrontam mapas, registros comerciais, relatos coloniais e fontes produzidas por populações afetadas. Tratados entre monarquias não conferem legitimidade moral automática à conquista. Também não se pode tratar as consequências da expansão como progresso uniforme para todos os grupos.",
        "example": "Ao analisar registro de exportação de açúcar: primeiro, identifique o circuito mercantil; segundo, investigue relações de trabalho coercitivo; terceiro, confronte o registro com fontes sociais e demográficas para não reduzir pessoas a números.",
        "pitfall": "Não confunda uma tendência ou modelo simplificado com garantia universal; considere exceções, contexto e limitações de medida.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual fator favoreceu a expansão marítima portuguesa?",
        "options": [
          "Inexistência de comércio africano.",
          "Interesses comerciais e conhecimentos náuticos.",
          "Motor a vapor.",
          "Controle imediato de toda a América."
        ],
        "correctIndex": 1,
        "hint": "Considere economia e aprendizagem de navegação.",
        "solution": "A alternativa B está correta: interesses mercantis, apoio político e conhecimentos náuticos contribuíram para a expansão. As outras alternativas ignoram redes anteriores ou introduzem anacronismos."
      },
      {
        "level": "intermediate",
        "prompt": "O Tratado de Tordesilhas de 1494 foi:",
        "options": [
          "Um acordo entre Portugal e Castela.",
          "Um pacto assinado pelos povos indígenas.",
          "O início imediato da ocupação de todo o Brasil.",
          "Um tratado abolicionista."
        ],
        "correctIndex": 0,
        "hint": "Identifique os signatários e o objetivo diplomático.",
        "solution": "A alternativa A está correta: Portugal e Castela negociaram esferas de expansão. O tratado não incluiu consentimento indígena nem significou ocupação efetiva imediata."
      },
      {
        "level": "advanced",
        "prompt": "Por que o tráfico atlântico não deve ser chamado de migração voluntária?",
        "options": [
          "Ocorreu apenas no século XX.",
          "Não envolveu trabalho.",
          "Todas as viagens foram pacíficas.",
          "Envolveu escravização e transporte forçado."
        ],
        "correctIndex": 3,
        "hint": "Diferencie deslocamento compulsório de livre escolha.",
        "solution": "A alternativa D está correta: o tráfico envolveu captura, coerção e transporte forçado de pessoas escravizadas. Chamar esse processo de migração voluntária apaga a violência e a ausência de liberdade."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "As principais interações intermoleculares:",
    "objective": "Explicar forças de London, dipolo-dipolo e ligações de hidrogênio e prever tendências de ebulição e miscibilidade.",
    "prerequisites": [
      "Polaridade",
      "Geometria molecular",
      "Ligações covalentes"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Tipos de interações",
        "explanation": "Forças intermoleculares ajudam a explicar estados físicos, temperaturas de ebulição e solubilidade. Dispersão de London resulta de flutuações eletrônicas que geram dipolos temporários e ocorre em todas as moléculas, inclusive apolares. Moléculas polares podem apresentar interações dipolo-dipolo entre dipolos permanentes. Ligações de hidrogênio surgem, no modelo escolar, quando H ligado covalentemente a N, O ou F interage com pares eletrônicos disponíveis em átomos apropriados. A ligação de hidrogênio entre moléculas de água não é a ligação covalente O–H dentro de uma molécula. Moléculas capazes de formar ligação de hidrogênio também apresentam forças de London; categorias não são mutuamente exclusivas. O conjunto e intensidade de atrações, além de estrutura e massa, influenciam propriedades físicas. Não se deve afirmar que toda substância polar tem ponto de ebulição maior que qualquer substância apolar sem considerar tamanhos e polarizabilidade.",
        "example": "Compare CH4 e H2O: primeiro, CH4 é apolar e tem forças de London; segundo, H2O é polar e forma ligações de hidrogênio; terceiro, a água ferve em temperatura muito maior apesar de massa molar menor.",
        "pitfall": "Não substitua a análise do mecanismo por um rótulo; identifique os dados, hipóteses e limites antes de responder.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Polarizabilidade e estrutura",
        "explanation": "A dispersão de London geralmente cresce com polarizabilidade eletrônica e área efetiva de contato entre moléculas. Em séries homólogas comparáveis, cadeias maiores tendem a apresentar maior temperatura de ebulição; a ramificação frequentemente reduz área de contato e diminui ebulição entre isômeros. Entretanto massa molar isolada não determina a ordem de ebulição de substâncias diferentes, pois polaridade e ligações de hidrogênio também importam. A geometria influencia polaridade: CO2 tem ligações C=O polares, mas sua estrutura linear simétrica torna a molécula apolar; H2O é angular e polar. Vaporizar um líquido requer superar atrações intermoleculares, não quebrar indiscriminadamente ligações covalentes de cada molécula. A comparação deve ocorrer na mesma pressão, pois ebulição varia com pressão externa. Tendências precisam ser justificadas pela estrutura molecular e não apenas por palavras-chave.",
        "example": "Compare n-pentano e neopentano: primeiro, ambos têm fórmula C5H12; segundo, neopentano é mais compacto; terceiro, o n-pentano tende a ferver mais alto por maior área de contato e dispersão.",
        "pitfall": "Não extrapole uma relação válida em condições específicas para qualquer situação; compare os mecanismos antes de aplicar a regra.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Solubilidade e limitações da regra prática",
        "explanation": "Dissolução depende do balanço entre interações soluto-soluto, solvente-solvente e soluto-solvente, além de efeitos entrópicos. A regra prática semelhante dissolve semelhante é útil, mas não universal. Etanol e água misturam-se amplamente porque grupos hidroxila podem formar ligações de hidrogênio com a água; hidrocarbonetos apolares são pouco miscíveis com ela. Aumentar a cadeia hidrocarbonada de um álcool tende a reduzir sua miscibilidade com água, apesar de permanecer o grupo –OH. Solutos iônicos podem estabelecer interações íon-dipolo com solventes polares, e sua dissolução depende do balanço entre energia reticular e solvatação. Temperatura não aumenta obrigatoriamente a solubilidade de todo sólido, e a solubilidade de gases frequentemente responde de outra maneira. Para prever miscibilidade, observe estrutura completa, polaridade, capacidade de formar ligações e condições experimentais. Uma única ligação polar não torna toda molécula altamente solúvel em água.",
        "example": "Compare metanol e 1-octanol: primeiro, ambos possuem –OH; segundo, octanol tem cadeia hidrocarbonada longa; terceiro, metanol é muito mais miscível com água por menor fração apolar.",
        "pitfall": "Não confunda uma tendência ou modelo simplificado com garantia universal; considere exceções, contexto e limitações de medida.",
        "steps": [
          "Identifique a estrutura e os dados relevantes do problema.",
          "Aplique o conceito específico e descreva as etapas do raciocínio.",
          "Verifique as condições de validade e confira a conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual interação ocorre em todas as moléculas?",
        "options": [
          "Somente ligação de hidrogênio.",
          "Somente íon-dipolo.",
          "Dispersão de London.",
          "Somente dipolo permanente."
        ],
        "correctIndex": 2,
        "hint": "Considere flutuações eletrônicas em todas as nuvens moleculares.",
        "solution": "A alternativa C está correta: forças de London ocorrem em moléculas polares e apolares. Outras interações exigem condições estruturais específicas ou a presença de íons."
      },
      {
        "level": "intermediate",
        "prompt": "Por que n-pentano tende a ferver acima do neopentano?",
        "options": [
          "Tem massa molar maior.",
          "Possui maior área efetiva de contato.",
          "Forma ligações de hidrogênio.",
          "É um composto iônico."
        ],
        "correctIndex": 1,
        "hint": "Compare estruturas de isômeros com a mesma fórmula.",
        "solution": "A alternativa B está correta: ambos têm fórmula C5H12, mas a cadeia menos compacta do n-pentano favorece contatos dispersivos mais intensos e ebulição mais elevada."
      },
      {
        "level": "advanced",
        "prompt": "Por que metanol é mais miscível em água que 1-octanol?",
        "options": [
          "Metanol é iônico.",
          "Octanol não tem grupo –OH.",
          "Água é apolar.",
          "Octanol possui cadeia apolar longa."
        ],
        "correctIndex": 3,
        "hint": "Ambos possuem –OH; compare a parte hidrocarbonada.",
        "solution": "A alternativa D está correta: os dois álcoois podem formar ligações de hidrogênio, mas a longa cadeia apolar do octanol reduz a miscibilidade com água."
      }
    ]
  }
];
