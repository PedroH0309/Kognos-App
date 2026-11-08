import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Aulas originais Kognos, não oficiais, sem homologação docente. */
export const provaoDepthBatch23Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Indicadores, condutibilidade elétrica, reação com metais, reação de neutralização",
    "objective": "Relacionar evidências de acidez e basicidade a indicadores, condutividade e reações de neutralização, com estequiometria e limites experimentais.",
    "prerequisites": [
      "Íons em solução",
      "Ácidos e bases",
      "Conservação de massa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Indicadores e pH",
        "explanation": "Indicadores ácido-base são substâncias cujas formas protonada e desprotonada apresentam propriedades ópticas diferentes. Fenolftaleína costuma ser incolor em meio ácido e rosa em meio suficientemente básico, mas a transição ocorre numa faixa de pH, não em um valor único universal. Papel indicador universal compara uma escala de cores e fornece estimativa aproximada, sujeita a iluminação e interferências. O pH está relacionado à atividade de íons hidrogênio em solução aquosa e não mede diretamente a concentração total de ácido adicionado. Um ácido fraco pode ter concentração analítica alta e dissociação parcial; um ácido forte, em condições diluídas, dissocia-se quase completamente. A identificação por cor exige considerar faixa de viragem, composição da amostra e possíveis pigmentos interferentes. A água pura a 25 °C tem pH aproximadamente 7, mas o ponto neutro depende da temperatura. O resultado de um indicador deve ser interpretado como evidência química delimitada, não como prova de composição exata da solução.",
        "example": "Uma solução torna fenolftaleína rosa. Conclua que o pH está na faixa básica de viragem, não que a concentração de NaOH seja necessariamente 1 mol/L; para isso seria preciso titulação e medidas adicionais. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Não substitua uma observação pela conclusão: identifique o mecanismo que a justifica.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Condutividade e neutralização",
        "explanation": "A condução elétrica em soluções aquosas ocorre principalmente pelo movimento de íons. Solução de NaCl conduz por conter Na⁺ e Cl⁻; solução aquosa de sacarose, apesar de dissolver bem, produz poucos íons e conduz muito menos em condições comparáveis. Condutividade depende da concentração, mobilidade iônica, temperatura e geometria da célula de medida. Em neutralização entre ácido forte e base forte, uma equação molecular típica é HCl+NaOH→NaCl+H₂O; a equação iônica líquida idealizada é H⁺+OH⁻→H₂O. O produto salino pode permanecer dissolvido e conduzir corrente, portanto neutralizar não significa tornar a solução isolante. A proporção estequiométrica deve respeitar o número de prótons neutralizáveis e hidroxilas disponíveis. Se 0,10 mol de HCl reage com 0,10 mol de NaOH, as quantidades são estequiometricamente equivalentes. Em titulações com ácidos fracos, o pH no ponto de equivalência não precisa ser 7, porque os íons do sal podem reagir com a água.",
        "example": "Misture teoricamente 25 mL de HCl 0,20 mol/L com NaOH 0,10 mol/L. Há 0,0050 mol de HCl; são necessários 0,0050 mol de NaOH, ou 0,050 L=50 mL para equivalência. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Não confunda relações entre grandezas distintas; verifique a hipótese de aplicação.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Metais, reatividade e limites",
        "explanation": "Alguns metais reagem com ácidos liberando hidrogênio gasoso, mas isso depende do metal, do ácido e das condições. A reação Zn+2HCl→ZnCl₂+H₂ é exemplo de oxirredução em que zinco se oxida e H⁺ se reduz. Cobre metálico não desloca H₂ de ácido clorídrico diluído nas condições comuns, pois sua posição na série de reatividade é distinta. Ácidos oxidantes podem reagir com cobre por mecanismos diferentes, sem necessariamente produzir hidrogênio. Não se deve realizar essas reações com produtos domésticos ou em recipientes fechados: gases, calor e substâncias corrosivas podem gerar acidentes. Para 0,20 mol de Zn, a estequiometria ideal indica 0,20 mol de H₂ se houver HCl suficiente; são exigidos 0,40 mol de HCl. Reações químicas podem produzir evidências macroscópicas semelhantes, como bolhas, sem terem o mesmo mecanismo. A análise correta combina reagentes identificados, equação balanceada e condições experimentais controladas.",
        "example": "Para Zn+2HCl→ZnCl₂+H₂, 0,10 mol de Zn exige 0,20 mol de HCl e gera no máximo 0,10 mol de H₂. A conta é apenas teórica e não autoriza reproduzir a reação fora de laboratório. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Evite generalizar além das condições e evidências disponíveis; explicite limitações.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A fenolftaleína rosa em solução aquosa indica principalmente:",
        "options": [
          "Presença obrigatória de 1 mol/L de NaOH",
          "pH na faixa básica de viragem do indicador",
          "Ausência de qualquer sal",
          "Que a solução é água pura"
        ],
        "correctIndex": 1,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "A cor rosa corresponde à forma predominante do indicador em faixa básica. Não permite identificar a base nem determinar concentração exata sem outras medidas. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      },
      {
        "level": "intermediate",
        "prompt": "Qual volume de NaOH 0,20 mol/L neutraliza 20 mL de HCl 0,10 mol/L?",
        "options": [
          "5 mL",
          "10 mL",
          "20 mL",
          "40 mL"
        ],
        "correctIndex": 1,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "HCl contém 0,020×0,10=0,0020 mol. Pela proporção 1:1, NaOH exige 0,0020 mol; V=n/C=0,0020/0,20=0,010 L, ou 10 mL. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      },
      {
        "level": "advanced",
        "prompt": "Na reação Zn+2HCl→ZnCl₂+H₂, 0,30 mol de Zn requer:",
        "options": [
          "0,15 mol de HCl",
          "0,30 mol de HCl",
          "0,60 mol de HCl",
          "1,20 mol de HCl"
        ],
        "correctIndex": 2,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "A equação balanceada mostra proporção 1:2 entre Zn e HCl. Logo 0,30 mol de Zn requer 0,60 mol de HCl, se houver condições para reação completa. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Representação gráfica, em função do tempo, do espaço, da velocidade escalar e da aceleração",
    "objective": "Interpretar inclinações e áreas de gráficos de posição, velocidade e aceleração sem confundir grandezas vetoriais e escalares.",
    "prerequisites": [
      "Funções e gráficos",
      "Velocidade e aceleração",
      "Unidades SI"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Gráfico posição-tempo",
        "explanation": "Um gráfico de posição x em função do tempo t descreve a localização de um móvel em um referencial escolhido. Em um intervalo, a inclinação da reta secante é Δx/Δt, velocidade média nesse intervalo; no limite de intervalos pequenos, a inclinação da tangente representa velocidade instantânea. Uma reta crescente corresponde a velocidade positiva constante; uma reta decrescente, a velocidade negativa constante; uma linha horizontal indica posição constante. Curvatura do gráfico revela mudança da inclinação, portanto mudança de velocidade. O valor da posição no eixo vertical não deve ser confundido com distância percorrida: um móvel pode passar por x=0 depois de longa trajetória. Para x(t)=2+3t em metros e segundos, a posição inicial é 2 m e a velocidade é 3 m/s. Em um gráfico com eixos não uniformes, estimar inclinação visual sem considerar escalas produz erro. A interpretação deve explicitar referencial, unidades e intervalo analisado.",
        "example": "Para pontos (t=1 s,x=5 m) e (t=4 s,x=14 m), a inclinação é (14−5)/(4−1)=3 m/s. Essa é a velocidade média no intervalo, e será instantânea também se o gráfico for retilíneo. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Não substitua uma observação pela conclusão: identifique o mecanismo que a justifica.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Gráfico velocidade-tempo",
        "explanation": "Em gráfico de velocidade vetorial unidimensional v versus t, a inclinação representa aceleração média ou instantânea, conforme se use secante ou tangente. A área algébrica sob a curva representa deslocamento: áreas abaixo do eixo t contam negativamente. A distância total percorrida exige somar módulos das áreas quando há inversão do sentido. Uma velocidade constante de −4 m/s por 5 s produz deslocamento −20 m, mas distância 20 m. Se v aumenta linearmente de 2 a 8 m/s em 3 s, a aceleração constante é (8−2)/3=2 m/s² e o deslocamento é a área do trapézio, [(2+8)/2]×3=15 m. Uma velocidade positiva que diminui não corresponde a movimento retrógrado; significa que o móvel ainda avança no sentido positivo, porém desacelera. O cruzamento de v=0 pode indicar inversão de sentido, mas deve-se verificar como a curva prossegue. A inclinação não deve ser confundida com a área.",
        "example": "Para v(t) crescente linearmente de 0 a 12 m/s em 4 s, a=(12−0)/4=3 m/s². O deslocamento é área triangular 4×12/2=24 m, não 48 m. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Não confunda relações entre grandezas distintas; verifique a hipótese de aplicação.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Gráfico aceleração-tempo",
        "explanation": "Em gráfico a versus t, a área algébrica sob a curva é a variação de velocidade, Δv. Aceleração constante de −2 m/s² durante 3 s altera a velocidade em −6 m/s. Se a velocidade inicial é +10 m/s, a final será +4 m/s, ainda no sentido positivo. Aceleração nula não implica necessariamente repouso, apenas velocidade constante em referencial inercial. Para reconstruir posição a partir de aceleração, são necessárias condições iniciais de velocidade e posição e integração sucessiva; uma área sob a curva a(t) não fornece diretamente distância. Em movimentos curvos, gráficos escalares do módulo da velocidade podem omitir mudanças de direção, portanto a aceleração vetorial pode existir mesmo com rapidez constante. Medições experimentais com ruído exigem cuidado ao derivar curvas, porque pequenas flutuações podem produzir grandes variações de inclinação. Os gráficos são modelos dos dados e não dispensam análise de incerteza e unidades.",
        "example": "Aceleração constante −3 m/s² por 2 s produz Δv=−6 m/s. Se v inicial=8 m/s, v final=2 m/s; não houve inversão de sentido nesse intervalo. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Evite generalizar além das condições e evidências disponíveis; explicite limitações.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "No gráfico posição-tempo retilíneo, a inclinação representa:",
        "options": [
          "Aceleração",
          "Velocidade",
          "Distância total",
          "Força resultante"
        ],
        "correctIndex": 1,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "A inclinação Δx/Δt é a velocidade média e, para reta, também a velocidade instantânea. A posição é o valor vertical, não a inclinação. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      },
      {
        "level": "intermediate",
        "prompt": "Velocidade constante −5 m/s por 4 s gera deslocamento:",
        "options": [
          "+20 m",
          "−20 m",
          "−1,25 m",
          "0 m"
        ],
        "correctIndex": 1,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "O deslocamento é a área algébrica vΔt=(−5)×4=−20 m. A distância percorrida, por outro lado, é 20 m. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      },
      {
        "level": "advanced",
        "prompt": "Aceleração constante de 3 m/s² durante 5 s altera a velocidade em:",
        "options": [
          "3 m/s",
          "5 m/s",
          "8 m/s",
          "15 m/s"
        ],
        "correctIndex": 3,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "A área sob o gráfico aceleração-tempo é Δv=aΔt=3×5=15 m/s. Sem velocidade inicial, não se pode determinar a velocidade final absoluta. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Alternativas energéticas e soluções contra as ameaças ao equilíbrio dos ecossistemas",
    "objective": "Comparar fontes de energia e estratégias de conservação com base em impactos de ciclo de vida, ecossistemas e limites de mitigação.",
    "prerequisites": [
      "Fluxos de energia",
      "Ciclos biogeoquímicos",
      "Impactos ambientais"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Fontes renováveis e não renováveis",
        "explanation": "Fontes renováveis, como solar, eólica e hidráulica, dependem de fluxos naturais que se recompõem em escalas humanas, mas isso não significa ausência de impacto. Usinas hidrelétricas podem fragmentar rios e alterar sedimentos, migração de peixes e regimes de inundação; parques eólicos exigem planejamento para reduzir colisões de fauna e conflitos de uso do solo; painéis fotovoltaicos envolvem mineração, fabricação e descarte. Combustíveis fósseis concentram energia química acumulada ao longo de milhões de anos e sua combustão emite CO₂ e outros poluentes. Biomassa pode ser renovável quando manejada adequadamente, mas desmatamento e mudanças de uso do solo podem anular benefícios climáticos. Energia nuclear apresenta emissões operacionais baixas de CO₂, porém exige gestão de rejeitos radioativos e avaliação de riscos. Comparações devem considerar eletricidade gerada, disponibilidade regional, impactos sociais e horizonte temporal. Uma fonte não deve ser classificada como sustentável apenas pelo nome da tecnologia.",
        "example": "Compare uma usina solar com uma térmica fóssil pela emissão por kWh ao longo do ciclo de vida, uso do solo e resíduos. Não compare apenas a emissão durante operação, que omite fabricação e combustível. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Não substitua uma observação pela conclusão: identifique o mecanismo que a justifica.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Eficiência, armazenamento e biodiversidade",
        "explanation": "Reduzir demanda energética por eficiência pode evitar impactos sem exigir nova geração. Uma lâmpada LED de 10 W que substitui lâmpada de 60 W por 5 h diárias economiza (60−10)×5=250 Wh por dia, ou 0,25 kWh, sob uso equivalente. Para redes com solar e eólica, armazenamento, interconexão, gestão da demanda e fontes complementares ajudam a equilibrar geração variável e consumo. Baterias exigem extração de materiais e logística de reciclagem; não devem ser tratadas como armazenamento sem custo ambiental. A conservação de corredores ecológicos, recuperação de matas ciliares e proteção de nascentes pode reduzir impactos de obras e atividades econômicas, mas resultados dependem da paisagem e da espécie. Medidas de compensação não substituem automaticamente evitar danos na origem. Avaliar uma política requer indicadores de emissões, qualidade da água, diversidade de espécies, custos e acesso à energia. Um único indicador positivo não prova sustentabilidade global.",
        "example": "Uma escola substitui 20 lâmpadas de 60 W por LED de 10 W, usadas 4 h/dia. Economia diária=(20×50 W)×4 h=4000 Wh=4 kWh; em 30 dias, 120 kWh, se o uso for igual. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Não confunda relações entre grandezas distintas; verifique a hipótese de aplicação.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: Avaliação de ciclo de vida e justiça ambiental",
        "explanation": "A avaliação de ciclo de vida acompanha extração de matérias-primas, fabricação, transporte, operação e fim de vida, comparando impactos por unidade funcional, como 1 kWh de eletricidade entregue. Emissões de gases de efeito estufa são importantes, mas não capturam sozinhas consumo de água, toxicidade, ocupação do solo e impactos sobre biodiversidade. Projetos energéticos podem beneficiar centros urbanos e impor custos a comunidades rurais ou tradicionais; processos de consulta e distribuição de benefícios são parte da análise de justiça ambiental. A localização importa: geração solar em telhados pode evitar parte de novas áreas ocupadas, enquanto grandes instalações demandam planejamento territorial. A reciclagem reduz demanda por alguns materiais, mas tem perdas e custos energéticos. A melhor solução costuma combinar eficiência, diversificação de fontes, proteção ecológica e governança, não apostar numa tecnologia sem restrições. Dados de uma região não podem ser generalizados sem considerar clima, matriz energética e infraestrutura.",
        "example": "Duas tecnologias têm emissões de ciclo de vida de 40 e 400 g CO₂e/kWh, respectivamente. Para 1000 kWh, totalizam 40 kg e 400 kg CO₂e; compare também água, território e resíduos antes de escolher. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Evite generalizar além das condições e evidências disponíveis; explicite limitações.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual afirmação sobre fontes renováveis é correta?",
        "options": [
          "Não provocam impactos ambientais",
          "Podem causar impactos apesar de se renovarem",
          "Sempre dispensam armazenamento",
          "São todas combustíveis fósseis"
        ],
        "correctIndex": 1,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "A renovabilidade da fonte não elimina impactos sobre ecossistemas, materiais e território. A avaliação depende da tecnologia e do local. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      },
      {
        "level": "intermediate",
        "prompt": "Trocar 10 lâmpadas de 50 W por 10 de 10 W, usadas 5 h/dia, economiza diariamente:",
        "options": [
          "0,2 kWh",
          "1 kWh",
          "2 kWh",
          "20 kWh"
        ],
        "correctIndex": 2,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "A potência economizada é 10×(50−10)=400 W. Em cinco horas, 400×5=2000 Wh=2 kWh por dia, supondo iluminação equivalente. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      },
      {
        "level": "advanced",
        "prompt": "Uma avaliação de ciclo de vida de energia deve incluir:",
        "options": [
          "Somente operação da usina",
          "Apenas o preço da eletricidade",
          "Apenas a emissão local de fumaça",
          "Extração, fabricação, operação e descarte por unidade funcional"
        ],
        "correctIndex": 3,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "O ciclo de vida cobre etapas desde matérias-primas até fim de vida e usa unidade funcional comparável, como 1 kWh entregue. Uma etapa isolada pode ocultar impactos relevantes. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "O Império Romano: crise e derrocada no Ocidente",
    "objective": "Examinar transformações do Império Romano tardio, fatores políticos, militares e econômicos e continuidades após 476, sem explicações monocausais.",
    "prerequisites": [
      "República e Império Romano",
      "Migrações e fronteiras",
      "Leitura crítica de fontes"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos: Transformações do século III",
        "explanation": "No século III, o Império Romano enfrentou sucessões imperiais instáveis, disputas militares, pressões em fronteiras e dificuldades fiscais em diferentes regiões. O termo crise do século III sintetiza processos diversos e não significa que todas as cidades ou províncias entraram simultaneamente em colapso. O exército tornou-se ator central na disputa pelo poder, enquanto inflação, mudanças monetárias e arrecadação afetaram relações entre Estado e sociedade. A divisão administrativa posterior e as reformas de Diocleciano buscaram estabilizar governo e defesa, mas criaram novos arranjos de autoridade e custos. A expansão da cidadania romana no século III e a diversidade cultural do império mostram que a população não era homogênea. Para analisar a crise, é preciso distinguir evidências arqueológicas, moedas, leis e relatos de cronistas, que podem refletir interesses políticos. Uma causa única, como corrupção ou invasões, não explica por si só três séculos de mudanças. O Império do Oriente continuou após a deposição do último imperador ocidental.",
        "example": "Uma moeda com menor teor de metal precioso pode indicar política monetária e pressão fiscal, mas não prova sozinha que toda a economia imperial entrou em ruína. Compare séries de moedas e registros regionais. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Não substitua uma observação pela conclusão: identifique o mecanismo que a justifica.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: Reformas, cristianização e fronteiras",
        "explanation": "Diocleciano instituiu a tetrarquia para organizar o governo de um território extenso; Constantino posteriormente consolidou poder e apoiou mudanças políticas e religiosas, incluindo a tolerância legal ao cristianismo no início do século IV. A cristianização foi gradual e não extinguiu de imediato práticas religiosas anteriores. A capital oriental em Constantinopla fortaleceu redes administrativas e militares no Mediterrâneo oriental. Nas fronteiras, povos chamados germânicos pelos romanos estabeleceram relações variadas com o império, incluindo comércio, serviço militar, tratados, migração e guerra. Grupos como visigodos não eram blocos imutáveis nem exclusivamente invasores externos. Em 410, Roma foi saqueada por tropas de Alarico, evento simbólico importante, mas o governo ocidental já enfrentava processos políticos prolongados. A ideia de que o cristianismo isoladamente destruiu Roma ignora complexidade de reformas e conflitos. O historiador deve distinguir a cronologia dos acontecimentos de interpretações retrospectivas de decadência.",
        "example": "Compare 313, marco de tolerância religiosa associado a Constantino e Licínio, com 410, saque de Roma. A distância temporal e as diferentes causas mostram por que não se deve tratar cristianização e saque como evento único. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Não confunda relações entre grandezas distintas; verifique a hipótese de aplicação.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: 476 e continuidades pós-romanas",
        "explanation": "O ano 476 costuma marcar a deposição de Rômulo Augústulo por Odoacro e é usado como convenção para o fim do Império Romano do Ocidente. Não significa que instituições, leis, estradas, línguas e redes comerciais desapareceram de um dia para outro. Governos sucessores utilizaram elementos da administração romana e negociaram com elites locais, enquanto o Império Romano do Oriente permaneceu ativo por muitos séculos. A expressão queda de Roma descreve transformação política de longa duração e varia conforme a região analisada. Arqueologia mostra tanto rupturas quanto continuidades em padrões de povoamento, cerâmica, moeda e comércio. O conceito de Antiguidade Tardia enfatiza transformações culturais e institucionais, evitando representar o período apenas como decadência. Comparar o Ocidente e o Oriente exige considerar recursos fiscais, organização militar, geografia e redes de poder. A data convencional é útil para organizar cronologias, mas não substitui explicação histórica multicausal.",
        "example": "Se uma cidade manteve uso de aquedutos após 476, isso não nega a deposição imperial, mas evidencia continuidade material. Distinga ruptura da autoridade central ocidental e permanência de práticas romanas. Confira a unidade, o contexto e a condição de validade antes de extrapolar o resultado.",
        "pitfall": "Evite generalizar além das condições e evidências disponíveis; explicite limitações.",
        "steps": [
          "Identifique a pergunta, os dados e o conceito relevante.",
          "Aplique as relações e compare as alternativas plausíveis.",
          "Verifique unidades, condições e interpretação do resultado."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual fator integrou a chamada crise do século III romano?",
        "options": [
          "Estabilidade absoluta de sucessões",
          "Disputas militares e instabilidade imperial",
          "Extinção do Império Oriental em 476",
          "Revolução Industrial"
        ],
        "correctIndex": 1,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "A instabilidade política e militar foi componente importante da crise do século III. Os efeitos variaram por região e não justificam explicação única para mudanças posteriores. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      },
      {
        "level": "intermediate",
        "prompt": "A tetrarquia de Diocleciano buscava principalmente:",
        "options": [
          "Abolir todas as províncias",
          "Eliminar o exército",
          "Organizar o governo e a sucessão em território extenso",
          "Criar a República Romana"
        ],
        "correctIndex": 2,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "A tetrarquia dividia responsabilidades de governo e defesa entre governantes, buscando estabilidade. Não foi retorno à República nem eliminação do aparato militar. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      },
      {
        "level": "advanced",
        "prompt": "A data de 476 é melhor entendida como:",
        "options": [
          "Desaparecimento instantâneo de toda cultura romana",
          "Fim do Império Romano do Oriente",
          "Início da Revolução Francesa",
          "Marco convencional da deposição do último imperador ocidental"
        ],
        "correctIndex": 3,
        "hint": "Leia os dados e confronte cada alternativa com o conceito específico.",
        "solution": "476 marca convencionalmente a deposição de Rômulo Augústulo no Ocidente. Instituições e práticas romanas persistiram, e o império oriental continuou existindo. As alternativas restantes confundem o mecanismo, a definição ou a proporção e por isso não resolvem o caso."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Soluções aquosas: conceito e classificação",
    "objective": "Distinguir soluções aquosas de misturas heterogêneas, classificar estados de saturação por dados de solubilidade e interpretar concentração e condutividade com modelos de partículas e cálculos verificáveis.",
    "prerequisites": [
      "Substâncias e misturas homogêneas",
      "Íons, moléculas e polaridade da água",
      "Razões, proporções e unidades de volume"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceito: soluto, solvente e dissolução",
        "explanation": "Uma solução aquosa é uma mistura homogênea na escala macroscópica em que a água funciona como solvente, isto é, o meio que dispersa as partículas dos componentes dissolvidos. O soluto pode ser sólido, líquido ou gasoso: açúcar, etanol e oxigênio dissolvido são exemplos com naturezas diferentes. A homogeneidade não torna a solução uma substância pura, pois a composição pode variar entre amostras. Quando o cloreto de sódio se dissolve, o retículo cristalino se desfaz e íons Na⁺ e Cl⁻ são hidratados por moléculas de água; não surgem moléculas individuais de NaCl neutras em proporção 1:1 na solução diluída. Já a sacarose se dispersa principalmente como moléculas neutras, sem liberar quantidade significativa de íons. Em ambos os casos a solução pode ser transparente: transparência isolada não prova pureza. Água e óleo, em condições comuns, formam duas fases porque suas interações não favorecem miscibilidade total. A classificação 'aquosa' descreve o solvente, não a concentração nem o caráter ácido ou básico.",
        "example": "Adicione 5 g de açúcar a 100 g de água e suponha dissolução completa e ausência de evaporação. O sistema tem uma fase visível e massa total de 105 g. A água é solvente, a sacarose é soluto e a mistura não ganhou uma fórmula química única.",
        "pitfall": "Uma fase macroscópica não significa uma única espécie química; transparência também não demonstra pureza ou ausência de íons.",
        "steps": [
          "Identifique a água como solvente e os demais componentes como possíveis solutos.",
          "Verifique se há uma ou mais fases nas condições descritas.",
          "Distinga dissociação iônica, dissolução molecular e separação de fases."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicação: insaturada, saturada e supersaturada",
        "explanation": "Solubilidade é a quantidade máxima de soluto que permanece dissolvida em determinada quantidade de solvente em equilíbrio e sob condições especificadas. Se uma substância X apresenta solubilidade de 20 g por 100 g de água a 25 °C, 150 g de água comportam até 30 g dissolvidos no equilíbrio nessa temperatura. Com 15 g dissolvidos, a solução está insaturada; com 30 g, saturada. Ao adicionar 35 g e aguardar equilíbrio, o sistema pode conter 30 g dissolvidos e 5 g de sólido residual. A presença de resíduo torna o sistema global heterogêneo, mas a fase líquida segue uma solução saturada. Uma solução supersaturada é preparada sob condições especiais, por exemplo após dissolução a maior temperatura seguida de resfriamento cuidadoso. Ela é metastável e pode cristalizar com perturbação; não se confunde com excesso de sólido depositado. A solubilidade de muitos sólidos aumenta com a temperatura, mas existem exceções; em gases, frequentemente diminui quando a temperatura aumenta. Não se pode comparar valores sem conhecer pressão, temperatura e unidade de referência.",
        "example": "Para X com solubilidade de 20 g/100 g de água a 25 °C, o limite em 150 g é 20×150/100=30 g. Acrescentar 35 g pode deixar 5 g sólidos após equilíbrio, enquanto a solução líquida contém 30 g e permanece saturada.",
        "pitfall": "Não substitua a massa de solvente pela massa da solução em unidades g/100 g de água; sólido remanescente não é prova de supersaturação.",
        "steps": [
          "Leia a temperatura e a unidade da solubilidade fornecida.",
          "Calcule a massa máxima dissolvida proporcional à massa de solvente.",
          "Compare a massa adicionada com o limite e determine o estado da fase líquida."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento: concentração, eletrólitos e limites",
        "explanation": "Diluída e concentrada são classificações relativas à quantidade de soluto, não equivalentes a insaturada e saturada. Uma solução concentrada pode ser insaturada quando há grande capacidade de dissolução, enquanto uma solução diluída pode estar saturada se a substância for pouco solúvel. A concentração molar C=n/V divide a quantidade de matéria, em mol, pelo volume final da solução, em litros. Uma solução de 0,20 mol/L e volume final de 0,500 L contém 0,100 mol de soluto. Para NaCl, com massa molar aproximada de 58,5 g/mol, essa quantidade corresponde a 5,85 g. Na preparação volumétrica, o volume final é aferido depois de dissolver o soluto, não é automaticamente igual ao volume de água inicialmente usado. Sais solúveis como NaCl dão origem a íons móveis e normalmente aumentam a condutividade elétrica, dependente também de temperatura e concentração. Sacarose dissolvida gera poucas espécies carregadas e conduz muito menos nas mesmas condições. Ácidos fracos ionizam parcialmente, por isso condutividade, concentração e grau de ionização não devem ser confundidos com uma única propriedade.",
        "example": "Para obter 500 mL de NaCl 0,20 mol/L, converta 500 mL em 0,500 L. Calcule n=CV=0,20×0,500=0,100 mol e m=0,100×58,5=5,85 g. Dissolva o sal e complete com água até o volume final de 500 mL.",
        "pitfall": "Não confunda concentração em mol/L com massa por litro, nem suponha que adicionar soluto a 500 mL de água resulte exatamente em 500 mL de solução.",
        "steps": [
          "Converta o volume final desejado para litros.",
          "Calcule n=CV e transforme quantidade de matéria em massa por m=nM.",
          "Interprete as limitações de volume final, temperatura e dissociação iônica."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual descrição representa corretamente uma solução aquosa de NaCl completamente dissolvido?",
        "options": [
          "Mistura heterogênea de cristais suspensos",
          "Mistura homogênea de íons Na⁺ e Cl⁻ hidratados",
          "Substância pura formada só por H₂O",
          "Mistura de água e óleo em duas fases"
        ],
        "correctIndex": 1,
        "hint": "Considere as partículas após a dissolução do cristal.",
        "solution": "NaCl se dissocia em íons Na⁺ e Cl⁻ que ficam dispersos e hidratados pela água, formando mistura homogênea. A dissolução completa não deixa cristais suspensos; a solução contém água e íons, não é substância pura."
      },
      {
        "level": "intermediate",
        "prompt": "O soluto X dissolve até 20 g por 100 g de água a 25 °C. Após adicionar 35 g a 150 g de água e atingir equilíbrio, qual massa de sólido pode restar?",
        "options": [
          "0 g",
          "15 g",
          "5 g",
          "35 g"
        ],
        "correctIndex": 2,
        "hint": "Primeiro calcule a quantidade máxima dissolvida nos 150 g de água.",
        "solution": "A solubilidade permite 20×150/100=30 g dissolvidos. A massa adicionada foi 35 g; a diferença, 35−30=5 g, pode permanecer como sólido. A fase líquida encontra-se saturada, não supersaturada."
      },
      {
        "level": "advanced",
        "prompt": "Qual massa de NaCl (M=58,5 g/mol) prepara 500 mL de solução 0,20 mol/L?",
        "options": [
          "5,85 g",
          "2,93 g",
          "11,7 g",
          "58,5 g"
        ],
        "correctIndex": 0,
        "hint": "Calcule n=CV com V em litros; depois m=nM.",
        "solution": "Converta 500 mL para 0,500 L. Então n=0,20×0,500=0,100 mol e m=0,100×58,5=5,85 g. Esse cálculo usa volume final da solução, medido após dissolução, e não necessariamente o volume inicial de água."
      }
    ]
  }
];
