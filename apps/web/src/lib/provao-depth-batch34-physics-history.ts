import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Kognos: aulas originais, não oficiais, pendentes de revisão docente. */
export const provaoDepthBatch34PhysicsHistory:readonly DeepTopicSpec[]=[
  {
    "subject": "Física",
    "topicStart": "Sistemas conservativos e não conservativos",
    "objective": "Distinguir trabalho de forças conservativas e não conservativas, calcular energia mecânica, dissipação e velocidade em sistemas com e sem atrito.",
    "prerequisites": [
      "Leis de Newton e trabalho de força",
      "Energia cinética e energia potencial gravitacional",
      "Unidades de energia e resolução de equações"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Forças conservativas, potenciais e conservação mecânica",
        "explanation": "Uma força é dita conservativa quando seu trabalho entre duas posições independe do caminho percorrido e, num percurso fechado, o trabalho total dessa força é zero. Nas condições de campo gravitacional aproximadamente uniforme, a força peso é conservativa e pode ser associada à energia potencial U_g=mgh. O trabalho do peso entre alturas h_i e h_f é W_peso=mg(h_i−h_f), sinal positivo na descida e negativo na subida. A energia cinética é K=mv²/2, e a energia mecânica E_m=K+U_g pode permanecer constante quando o sistema recebe trabalho apenas de forças conservativas, sem perdas mecânicas ou suprimento externo. A energia potencial depende da escolha de nível de referência, mas diferenças de potencial e previsões físicas permanecem consistentes. Essa conservação não significa velocidade constante: na queda, a energia potencial diminui enquanto a cinética aumenta. Para usar esse modelo, delimite o sistema físico, explicite a altura de referência e verifique se há atrito, resistência do ar, motores ou trabalho externo relevante.",
        "example": "Um corpo de 2 kg parte do repouso a 5 m de altura e desce até 2 m, com g=10 m/s² e sem atrito: energia inicial=2·10·5=100 J. No ponto final, U=40 J, então K=60 J. De K=mv²/2, v²=60 e v≈7,75 m/s. A velocidade cresce apesar de E_m continuar 100 J.",
        "pitfall": "Conservação de energia mecânica não implica conservação separada de energia potencial, nem ausência de aceleração.",
        "steps": [
          "Identifique o problema, os dados e a hipótese que autoriza o modelo.",
          "Reconstrua a resolução em etapas, anotando conceitos e unidades.",
          "Avalie uma exceção relevante e explique por que a alternativa errada falha."
        ]
      },
      {
        "level": "intermediate",
        "title": "Forças dissipativas, atrito e trabalho não conservativo",
        "explanation": "Atrito cinético e resistência do ar, sob modelos usuais, são forças não conservativas: o trabalho realizado depende do percurso e costuma retirar energia mecânica do movimento, convertendo-a em energia interna e outras formas. Para atrito cinético de módulo constante f oposto ao deslocamento retilíneo s, W_atrito=−fs. A variação da energia mecânica de um sistema, quando as demais forças relevantes são conservativas, pode ser escrita ΔE_m=W_não conservativo. Isso não viola a conservação de energia total: a energia mecânica reduzida aparece em graus de liberdade internos, aquecimento ou no ambiente. A força normal pode realizar trabalho nulo em deslocamentos tangenciais, mas classificá-la em geral como conservativa seria inadequado; seu papel depende do vínculo e da geometria. Em superfícies horizontais, escolha primeiro se há mudança na energia potencial e se a força aplicada adiciona trabalho. A massa e o percurso devem estar em unidades compatíveis para obter joules, e a energia cinética final não pode ser negativa no modelo físico adotado.",
        "example": "Um bloco de 3 kg move-se a 6 m/s sobre piso horizontal e sofre atrito constante de 6 N por 4 m, sem outras forças com trabalho não nulo. K_i=3·36/2=54 J; W_atrito=−6·4=−24 J; K_f=30 J. Logo v_f=√(2·30/3)=√20≈4,47 m/s. O bloco não parou nesse percurso.",
        "pitfall": "Não escreva W_atrito=+fs para atrito contrário ao deslocamento, nem diga que a energia simplesmente desapareceu.",
        "steps": [
          "Identifique o problema, os dados e a hipótese que autoriza o modelo.",
          "Reconstrua a resolução em etapas, anotando conceitos e unidades.",
          "Avalie uma exceção relevante e explique por que a alternativa errada falha."
        ]
      },
      {
        "level": "advanced",
        "title": "Balanço de energia, trajetórias e condições de validade",
        "explanation": "O teste mais direto da natureza conservativa é comparar trabalhos entre os mesmos pontos por caminhos diferentes. No campo gravitacional uniforme, subir 2 m verticalmente ou por uma rampa longa exige o mesmo aumento de energia potencial gravitacional mgΔh, desde que não haja trabalho dissipativo relevante. Em uma rampa com atrito, o trabalho do peso continua dependendo apenas da diferença de altura, mas o trabalho total e a energia cinética final dependem do comprimento e das condições de contato. Um motor acrescenta trabalho ao sistema e um freio transforma energia mecânica em outras formas; assim, os modelos com motor ou resistência devem usar balanço energético, não E_m inicial = E_m final automaticamente. Para uma volta completa, o trabalho resultante de uma força conservativa é nulo, mas atrito pode realizar trabalho líquido negativo. O teorema trabalho–energia cinética sempre liga o trabalho da força resultante a ΔK no modelo clássico, mesmo quando a energia mecânica não se conserva. Escolher as equações requer distinguir força resultante, forças conservativas, forças não conservativas e fronteira do sistema.",
        "example": "Uma caixa de 4 kg sobe 2 m com g=10 m/s². A variação de U_g é +80 J tanto na subida vertical quanto numa rampa sem atrito. Se a rampa possui atrito que dissipa 25 J, o trabalho externo mínimo numa subida lenta passa a 80+25=105 J, explicitando a hipótese de velocidade inicial e final iguais.",
        "pitfall": "Não aplique conservação da energia mecânica à trajetória com atrito sem incluir o trabalho dissipativo no balanço.",
        "steps": [
          "Identifique o problema, os dados e a hipótese que autoriza o modelo.",
          "Reconstrua a resolução em etapas, anotando conceitos e unidades.",
          "Avalie uma exceção relevante e explique por que a alternativa errada falha."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um corpo de 2 kg desce 3 m sem atrito, com g=10 m/s². O trabalho do peso é:",
        "options": [
          "−60 J",
          "+60 J",
          "0 J",
          "+6 J"
        ],
        "correctIndex": 1,
        "hint": "Compare as grandezas ou evidências e utilize a relação discutida no nível.",
        "solution": "Na descida, W_peso=mg(h_i−h_f)=2·10·3=+60 J. O peso realiza trabalho positivo, aumentando a energia cinética."
      },
      {
        "level": "intermediate",
        "prompt": "Um bloco perde 24 J de energia mecânica por atrito, sem outros trabalhos não conservativos. ΔE_m vale:",
        "options": [
          "+24 J",
          "0 J",
          "−24 J",
          "−48 J"
        ],
        "correctIndex": 2,
        "hint": "Compare as grandezas ou evidências e utilize a relação discutida no nível.",
        "solution": "A força dissipativa realiza trabalho negativo de 24 J e a energia mecânica diminui na mesma quantidade; a energia total permanece conservada."
      },
      {
        "level": "advanced",
        "prompt": "Dois caminhos sem atrito elevam a mesma massa à mesma altura. O trabalho do peso:",
        "options": [
          "É maior no caminho mais longo",
          "Depende da velocidade de subida",
          "É igual nos dois, pois só depende da variação de altura",
          "É sempre positivo na subida"
        ],
        "correctIndex": 2,
        "hint": "Compare as grandezas ou evidências e utilize a relação discutida no nível.",
        "solution": "No modelo de gravidade uniforme, W_peso=−mgΔh e independe do comprimento do trajeto, característica conservativa."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "A Constituição de 1988: a promoção e proteção de direitos",
    "objective": "Contextualizar a Assembleia Constituinte e a Constituição de 1988, distinguir garantias civis, políticas e sociais e examinar limites da efetivação dos direitos.",
    "prerequisites": [
      "Ditadura civil-militar brasileira e redemocratização",
      "Separação de Poderes e cidadania",
      "Diferença entre norma jurídica e prática social"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Da abertura política à Assembleia Constituinte",
        "explanation": "A Constituição de 1988 foi promulgada em 5 de outubro de 1988 após a Assembleia Nacional Constituinte instalada em 1987, em um processo de redemocratização que sucedeu o regime autoritário iniciado em 1964. A transição política brasileira foi negociada e desigual: eleições, mobilizações sociais, debates públicos e disputas entre grupos com projetos diferentes marcaram o período. A campanha Diretas Já, em 1983–1984, articulou demandas pelo voto direto para presidente, embora a emenda então proposta não tenha sido aprovada. A nova Constituição ampliou o reconhecimento formal de direitos e redefiniu a organização institucional do Estado brasileiro. A participação de movimentos sociais, sindicatos, associações e grupos representativos foi importante para levar temas à Constituinte, mas isso não significa consenso social em torno de todas as normas. A expressão 'Constituição Cidadã', associada a Ulysses Guimarães, destaca a centralidade dos direitos, embora a efetivação deles dependa de políticas, financiamento e controle democrático posteriores.",
        "example": "Monte a sequência: 1964 início do regime autoritário; 1984 mobilização das Diretas Já; 1985 instalação do governo civil pós-ditadura; 1987 abertura da Constituinte; 5/10/1988 promulgação. A ordem permite concluir que a Constituição surgiu no processo de transição, não como evento isolado em 1988.",
        "pitfall": "Não atribua a promulgação da Constituição à campanha Diretas Já de 1984 nem confunda Constituinte de 1987 com golpe de 1964.",
        "steps": [
          "Identifique o problema, os dados e a hipótese que autoriza o modelo.",
          "Reconstrua a resolução em etapas, anotando conceitos e unidades.",
          "Avalie uma exceção relevante e explique por que a alternativa errada falha."
        ]
      },
      {
        "level": "intermediate",
        "title": "Direitos fundamentais, organização do Estado e participação",
        "explanation": "A Constituição de 1988 consolida o Brasil como Estado democrático de direito e organiza a Federação em União, estados, Distrito Federal e municípios, com competências próprias. Reconhece direitos individuais e coletivos, direitos sociais e mecanismos de participação política, e prevê independência e harmonia entre Executivo, Legislativo e Judiciário. O texto constitucional reconhece saúde e educação como direitos sociais, e o artigo 196 caracteriza a saúde como direito de todos e dever do Estado; o Sistema Único de Saúde foi estruturado à luz dessas diretrizes. Direitos políticos envolvem regras de alistamento, voto e elegibilidade, com distinções por idade e condições previstas na Constituição. A ampliação formal da cidadania não elimina desigualdades no acesso efetivo a serviços. Artigos e políticas precisam ser analisados em conjunto, evitando concluir que a simples inclusão de um direito no texto tenha resolvido sua realização. A proteção constitucional também abrange direitos coletivos específicos de povos indígenas e outras comunidades, o que exige atenção a trajetórias históricas anteriores à promulgação.",
        "example": "Considere duas afirmações: 'a Constituição reconhece o direito à saúde' e 'todos receberam atendimento adequado imediatamente em 1988'. A primeira se refere a uma garantia normativa documentável; a segunda exige indicadores históricos, orçamento e evidências de acesso. Reconhecer o direito não prova realização automática.",
        "pitfall": "Não confunda previsão constitucional de um direito com sua concretização universal imediata, nem trate os Poderes como subordinados entre si.",
        "steps": [
          "Identifique o problema, os dados e a hipótese que autoriza o modelo.",
          "Reconstrua a resolução em etapas, anotando conceitos e unidades.",
          "Avalie uma exceção relevante e explique por que a alternativa errada falha."
        ]
      },
      {
        "level": "advanced",
        "title": "Direitos indígenas, controle institucional e avaliação de fontes",
        "explanation": "O artigo 231 da Constituição reconhece aos povos indígenas seus direitos originários sobre as terras que tradicionalmente ocupam, em termos constitucionais que não representam concessão histórica inaugural do Estado em 1988. O reconhecimento articula-se ao respeito a suas organizações sociais, costumes, línguas, crenças e tradições. Interpretar esse avanço requer conhecer a longa história de expropriação, resistência e disputas territoriais, sem descrever os povos indígenas como grupo homogêneo. O Estado democrático de direito prevê controles recíprocos entre instituições, acesso à Justiça e discussão pública sobre decisões e políticas. Em questões de História, diferencie fonte primária (o texto constitucional, atas e discursos de época) de interpretação historiográfica que avalia efeitos posteriores. Uma notícia atual sobre conflito por direitos não prova que a Constituição 'não vale', tampouco um artigo escrito demonstra que violações não ocorrem. Compare data, autoria, interesse e evidências; avalie conquistas normativas e desafios práticos como dimensões simultâneas do processo histórico.",
        "example": "Ao analisar uma reportagem sobre direitos territoriais, 1) localize a previsão do art. 231; 2) identifique o conflito e os sujeitos envolvidos na reportagem; 3) separe 'direito constitucional reconhecido' de 'cumprimento observado' e verifique fontes para cada conclusão. A leitura evita inferências absolutas.",
        "pitfall": "Não interprete 'direitos originários' como criação de propriedade indígena apenas em 1988 ou como prova automática de ausência de conflitos.",
        "steps": [
          "Identifique o problema, os dados e a hipótese que autoriza o modelo.",
          "Reconstrua a resolução em etapas, anotando conceitos e unidades.",
          "Avalie uma exceção relevante e explique por que a alternativa errada falha."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A Constituição brasileira atualmente vigente foi promulgada em:",
        "options": [
          "1964",
          "1985",
          "1988",
          "1994"
        ],
        "correctIndex": 2,
        "hint": "Compare as grandezas ou evidências e utilize a relação discutida no nível.",
        "solution": "A Assembleia Constituinte iniciou os trabalhos em 1987, e a Constituição foi promulgada em 5 de outubro de 1988, no contexto da redemocratização."
      },
      {
        "level": "intermediate",
        "prompt": "Qual análise distingue corretamente norma e realidade social?",
        "options": [
          "A existência do direito garante atendimento igual em toda situação",
          "O direito à saúde está previsto, mas sua efetivação depende de instituições e políticas",
          "A Constituição não trata de direitos sociais",
          "O Poder Legislativo executa sozinho todos os serviços de saúde"
        ],
        "correctIndex": 1,
        "hint": "Compare as grandezas ou evidências e utilize a relação discutida no nível.",
        "solution": "Direitos constitucionais são garantias normativas; seu cumprimento concreto exige organização institucional, recursos e acompanhamento social."
      },
      {
        "level": "advanced",
        "prompt": "Segundo o art. 231, os direitos indígenas às terras tradicionalmente ocupadas são:",
        "options": [
          "Originários, reconhecidos pela Constituição",
          "Criados apenas com a assinatura de 1988",
          "Reservados exclusivamente a grupos sem língua própria",
          "Automaticamente inexistentes quando há conflito"
        ],
        "correctIndex": 0,
        "hint": "Compare as grandezas ou evidências e utilize a relação discutida no nível.",
        "solution": "O dispositivo reconhece direitos originários e protege elementos de organização social, tradições e territórios, sem eliminar disputas históricas."
      }
    ]
  }
];
