import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral original, não oficial e sem homologação docente. */
export const provaoDepthBatch29Virology:readonly DeepTopicSpec[]=[
  {
    "subject": "Biologia",
    "topicStart": "Vírus: reconhecimento das características e sua importância em contextos relacionados à saúde e…",
    "objective": "Reconhecer estrutura e diversidade viral, explicar etapas de multiplicação e ciclos lítico e lisogênico e diferenciar prevenção, antibióticos e antivirais por mecanismo, interpretando dados de saúde de modo crítico.",
    "prerequisites": [
      "DNA, RNA, proteínas e organização celular",
      "Noções básicas de multiplicação e interação patógeno-hospedeiro",
      "Porcentagens e razões entre grupos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Estrutura viral, material genético e dependência de célula hospedeira",
        "explanation": "Vírus são agentes infecciosos acelulares constituídos por material genético envolto em estruturas proteicas e, em algumas famílias, por um envelope derivado de membranas celulares. O genoma de cada vírus pode ser de DNA ou de RNA, de fita simples ou dupla conforme a família; não se deve imaginar que todo vírus possui simultaneamente um genoma de DNA e outro de RNA. O capsídeo é um envoltório proteico formado por subunidades, e o conjunto de ácido nucleico e capsídeo costuma ser chamado nucleocapsídeo. Alguns vírus envelopados exibem proteínas de superfície que reconhecem estruturas nas células que infectam. Diferentemente das células bacterianas, partículas virais não possuem ribossomos próprios nem realizam síntese proteica autônoma: dependem do maquinário da célula hospedeira para produzir proteínas e gerar novas partículas. Essa dependência torna inadequado aplicar diretamente critérios de metabolismo celular aos vírions isolados. O tamanho, a forma, o tipo de genoma e o tropismo variam enormemente entre vírus, e nenhum desses atributos isolados permite concluir se todos causam doença grave. O reconhecimento de receptores, a disponibilidade de fatores celulares e as defesas do hospedeiro contribuem para determinar quais células podem ser infectadas.",
        "example": "Compare uma bactéria e um vírus hipotético: a bactéria contém membrana, citoplasma e ribossomos, podendo sintetizar suas proteínas; o vírus contém RNA encapsidado e só produz proteínas após usar ribossomos da célula infectada. A presença de capsídeo não equivale à presença de organização celular.",
        "pitfall": "Não chamar capsídeo de parede celular, nem supor que vírus sejam pequenas bactérias dotadas de ribossomos ou que qualquer contato com o vírus cause necessariamente doença.",
        "steps": [
          "Identifique genoma, capsídeo e eventual envelope.",
          "Compare a organização viral à de células procarióticas.",
          "Relacione reconhecimento celular e dependência do metabolismo do hospedeiro."
        ]
      },
      {
        "level": "intermediate",
        "title": "Etapas de multiplicação viral e diferenças entre ciclos",
        "explanation": "A multiplicação de muitos vírus pode ser analisada como sequência de adesão ao receptor, entrada ou injeção do genoma, expressão e replicação do material genético, montagem e liberação de partículas. As etapas exatas diferem por tipo de genoma, por família viral e pela célula hospedeira; não existe uma única rota igual para todos. Um bacteriófago que infecta bactéria pode seguir um ciclo lítico, com produção de partículas e lise da célula, ou um caminho temperado no qual o genoma pode permanecer associado ao hospedeiro por certo período, frequentemente integrado ao cromossomo bacteriano como profago. Um ciclo lisogênico não equivale à produção imediata de novas partículas em larga escala; alterações ambientais podem induzir a passagem para uma etapa lítica. Para vírus animais, a liberação pode ocorrer por lise ou brotamento, e envelope não determina automaticamente o modo de saída. A integração do genoma não é requisito universal para qualquer vírus de RNA. O número de partículas produzidas não equivale ao número de células inicialmente infectadas, e a presença de material genético viral em uma amostra não informa isoladamente a quantidade de partículas infectantes. O raciocínio sobre infecção requer distinguir entrada, replicação, persistência, resposta celular e transmissão entre organismos.",
        "example": "Uma cultura tem 200 bactérias e 25% delas recebem genoma de um bacteriófago temperado em certa etapa. O número inicial de células afetadas é 0,25×200=50, mas isso não permite prever quantos vírions infecciosos serão produzidos. No estado lisogênico, o genoma pode persistir sem lise imediata.",
        "pitfall": "Não confundir ciclo lisogênico com lise imediata nem equiparar detecção de ácido nucleico viral ao número de partículas infectantes produzidas.",
        "steps": [
          "Identifique tipo de hospedeiro e entrada do material genético.",
          "Diferencie replicação lítica, persistência e eventual integração.",
          "Não deduza automaticamente a quantidade de vírions a partir de células positivas."
        ]
      },
      {
        "level": "advanced",
        "title": "Antibióticos, antivirais, vacinas e interpretação de dados",
        "explanation": "O tratamento e a prevenção de infecções virais precisam reconhecer diferenças entre vírus e bactérias. Antibióticos agem sobre alvos celulares bacterianos, como síntese da parede ou componentes de ribossomos, e não atuam diretamente sobre a multiplicação dos vírus; seu uso só se justifica em contextos específicos, como infecções bacterianas concomitantes, após avaliação profissional. Medicamentos antivirais podem interferir em etapas próprias de certos vírus, como entrada, replicação do genoma ou maturação; não constituem uma cura universal para todas as infecções virais. Vacinas induzem respostas imunes específicas e contribuem para prevenir infecções ou reduzir desfechos, mas o efeito depende do patógeno, do produto, da população, do tempo e do desfecho avaliado. Medidas de prevenção também variam conforme via de transmissão, por exemplo respiratória, fecal-oral, sanguínea ou vetorial. Para interpretar uma comparação numérica, calcule proporções com denominadores equivalentes e evite inferir causalidade de um estudo observacional sem controlar diferenças entre grupos. A redução relativa de risco não é igual à diferença absoluta em pontos percentuais. A compreensão científica da transmissão e da prevenção depende de dados epidemiológicos e condições reais, não do pressuposto de que todo vírus se transmite do mesmo modo.",
        "example": "Em um levantamento hipotético, 8 de 80 pessoas no grupo A e 24 de 80 no B apresentam certo desfecho. Riscos observados: 10% e 30%; diferença absoluta: 20 pontos percentuais; risco relativo: 10/30=1/3. A redução relativa observada é cerca de 66,7%, mas associação isolada não comprova causalidade.",
        "pitfall": "Não usar antibióticos como tratamento direto de vírus, nem interpretar redução relativa de risco como pontos percentuais ou como garantia individual de proteção.",
        "steps": [
          "Distinga alvos celulares bacterianos e etapas de replicação viral.",
          "Selecione prevenção conforme via de transmissão e evidências.",
          "Calcule riscos com denominadores explícitos e reconheça confundidores."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma característica que diferencia vírions de bactérias é que os vírions:",
        "options": [
          "Possuem ribossomos próprios para sintetizar proteínas",
          "Realizam divisão binária como células",
          "Dependem de células hospedeiras para a síntese de proteínas virais",
          "Têm obrigatoriamente DNA e RNA juntos no mesmo genoma"
        ],
        "correctIndex": 2,
        "hint": "Verifique a estrutura do agente, a etapa de replicação e o denominador de cada proporção.",
        "solution": "Os vírions não possuem ribossomos próprios e dependem do maquinário da célula hospedeira para expressão de proteínas. Seu genoma pode ser DNA ou RNA, dependendo da família viral, mas não precisa conter ambos como genomas independentes."
      },
      {
        "level": "intermediate",
        "prompt": "Sobre um bacteriófago temperado em estado lisogênico, é correto afirmar que:",
        "options": [
          "Toda bactéria infectada sofre lise instantânea",
          "O material genético viral pode persistir no hospedeiro sem lise imediata",
          "O vírus já é uma bactéria com parede celular",
          "A célula hospedeira perde obrigatoriamente todo seu DNA"
        ],
        "correctIndex": 1,
        "hint": "Verifique a estrutura do agente, a etapa de replicação e o denominador de cada proporção.",
        "solution": "No estado lisogênico, o genoma de um fago temperado pode persistir na bactéria, por exemplo como profago integrado, sem ocorrer lise imediata. Isso é diferente do ciclo lítico, que produz partículas e pode romper a célula."
      },
      {
        "level": "advanced",
        "prompt": "Em dois grupos hipotéticos, um desfecho ocorre em 8/80 e 24/80 pessoas. A diferença absoluta de risco é:",
        "options": [
          "66,7 pontos percentuais",
          "10 pontos percentuais",
          "30 pontos percentuais",
          "20 pontos percentuais"
        ],
        "correctIndex": 3,
        "hint": "Verifique a estrutura do agente, a etapa de replicação e o denominador de cada proporção.",
        "solution": "As proporções são 8/80=10% e 24/80=30%; a diferença absoluta é de 20 pontos percentuais. Uma redução relativa de cerca de 66,7% é outra medida, e uma associação observacional não estabelece causalidade sozinha."
      }
    ]
  }
];
