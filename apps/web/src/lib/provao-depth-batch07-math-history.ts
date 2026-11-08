import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Seventh batch: original combinatorics/probability and world history instruction. */
export const provaoDepthBatch07MathHistory:readonly DeepTopicSpec[]=[
  {
    "subject": "Matemática",
    "topicStart": "Probabilidade da união e da intersecção de dois ou mais eventos",
    "objective": "Representar espaço amostral, eventos, união e interseção, aplicar inclusão-exclusão e multiplicação condicional e distinguir independência de exclusividade com exemplos resolvidos.",
    "prerequisites": [
      "Frações e proporções",
      "Conjuntos e diagramas de Venn",
      "Princípio multiplicativo de contagem"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Evento, união e interseção: traduzindo a pergunta",
        "explanation": "Probabilidade parte de experimento ou modelo com conjunto de resultados possíveis chamado espaço amostral Ω. Um evento A é um subconjunto de Ω; a união A∪B reúne resultados que pertencem a A ou a B, incluindo aqueles que pertencem a ambos; a interseção A∩B reúne apenas os resultados comuns aos dois eventos. Em linguagem cotidiana, \"ou\" inclusivo corresponde a união, enquanto \"e\" normalmente aponta para interseção. Se resultados são equiprováveis e o espaço é finito, P(A)=n(A)/n(Ω). Essa fórmula de contagem não vale automaticamente quando resultados têm probabilidades distintas; nesse caso, somam-se as probabilidades individuais de resultados envolvidos. Diagramas de Venn ajudam a visualizar sobreposição, mas as probabilidades dependem dos dados e hipóteses, não da área desenhada do círculo num esboço qualquer. Antes de calcular, liste os resultados possíveis com clareza e marque a condição indicada pelo enunciado. Eventos podem ser diferentes sem serem incompatíveis. Por exemplo, um número par pode ser simultaneamente maior que três, de modo que \"par\" e \"maior que três\" possuem interseção não vazia.",
        "example": "No lançamento de dado honesto de seis faces, defina A={2,4,6}, resultados pares, e B={4,5,6}, resultados maiores que três. Então A∪B={2,4,5,6}, com probabilidade 4/6=2/3; A∩B={4,6}, com probabilidade 2/6=1/3. Observe que o número 4 pertence aos dois eventos.",
        "pitfall": "Não confunda a união A∪B com dois grupos sem sobreposição. Se um resultado pertence a A e a B, ele deve ser contado uma única vez no evento união.",
        "steps": [
          "Defina Ω e verifique se seus resultados são equiprováveis.",
          "Escreva A e B explicitamente como conjuntos de resultados.",
          "Calcule união e interseção sem duplicar elementos comuns."
        ]
      },
      {
        "level": "intermediate",
        "title": "Inclusão-exclusão: corrigir a contagem dupla",
        "explanation": "Para quaisquer eventos A e B no mesmo espaço de probabilidade, P(A∪B)=P(A)+P(B)−P(A∩B). O termo subtraído corrige os resultados pertencentes simultaneamente a A e a B, que teriam sido contados duas vezes. Se os eventos são mutuamente exclusivos, sua interseção tem probabilidade zero, e a expressão reduz-se à soma. Isso não significa que todo par de eventos diferentes seja exclusivo. Para conjuntos de três eventos, o princípio se amplia com somas das probabilidades individuais, subtração das interseções par a par e adição da interseção tripla, quando necessário. A regra pode ser visualizada em diagramas de Venn, mas o uso correto exige valores consistentes entre si. Uma probabilidade negativa ou acima de 1 indica erro no cálculo ou dados impossíveis sob as hipóteses. Em pesquisa, por exemplo, pessoas podem participar de duas atividades; somar percentuais de participantes sem corrigir sobreposição infla a proporção que pratica pelo menos uma atividade. Sempre confira se a pergunta quer \"A ou B\", \"ambos\", \"exatamente um\" ou \"nenhum\".",
        "example": "Uma pesquisa com 100 estudantes registra 60 que gostam de Matemática, 45 que gostam de Física e 25 que gostam de ambas. Como 60+45 conta os 25 estudantes duas vezes, a quantidade que gosta de pelo menos uma das duas é 60+45−25=80. A probabilidade de selecionar alguém desse grupo é 80/100=0,80.",
        "pitfall": "Não suponha que P(A∪B)=P(A)+P(B) se A e B puderem acontecer juntos. A interseção deve ser subtraída para remover a dupla contagem.",
        "steps": [
          "Identifique a sobreposição P(A∩B) a partir dos dados.",
          "Substitua em P(A∪B)=P(A)+P(B)−P(A∩B).",
          "Verifique limites entre zero e um e interprete o evento solicitado."
        ]
      },
      {
        "level": "advanced",
        "title": "Independência, condicionamento e eventos sucessivos",
        "explanation": "Eventos A e B são independentes quando P(A∩B)=P(A)P(B), ou quando a ocorrência de um não altera a probabilidade do outro, sob condições apropriadas. Eventos mutuamente exclusivos, por outro lado, não podem acontecer simultaneamente. Dois eventos com probabilidades positivas não podem ser ao mesmo tempo independentes e mutuamente exclusivos: a interseção zero contradiz o produto positivo. A probabilidade condicional P(B|A)=P(A∩B)/P(A), para P(A)>0, mede a chance de B considerando A como informação dada. Assim, em geral P(A∩B)=P(A)P(B|A); somente se forem independentes podemos usar P(A)P(B). Em retiradas sem reposição, probabilidades podem mudar: numa urna com três bolas vermelhas e duas azuis, retirar uma vermelha primeiro altera a composição para a segunda retirada. Com reposição, o modelo de independência pode ser apropriado em condições usuais. A resposta deve explicitar se a ordem importa e se há reposição. Em situações com muitos eventos, uma árvore de probabilidades ou uma tabela de contingência pode ser mais útil que uma fórmula decorada.",
        "example": "Urna com três bolas vermelhas e duas azuis, retiradas sucessivas sem reposição. A chance de retirar duas vermelhas é P(V₁)×P(V₂|V₁)=(3/5)×(2/4)=6/20=3/10. Usar (3/5)² erraria porque a probabilidade da segunda retirada cai para 2/4 após a primeira vermelha.",
        "pitfall": "Não confunda independência com exclusividade. Dois resultados sucessivos sem reposição podem ser dependentes, embora ambos sejam possíveis; eventos exclusivos não podem ocorrer juntos.",
        "steps": [
          "Identifique se há reposição e qual informação é condicionada.",
          "Use P(A∩B)=P(A)P(B|A), aplicando independência só quando justificada.",
          "Compare o resultado com uma árvore de possibilidades ou contagem direta."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Num dado justo, A={2,4,6} e B={4,5,6}. Qual é P(A∩B)?",
        "options": [
          "1/6",
          "1/3",
          "2/3",
          "5/6"
        ],
        "correctIndex": 1,
        "hint": "A interseção contém somente os resultados presentes nos dois eventos.",
        "solution": "A alternativa B está correta: A∩B={4,6}, dois resultados entre seis equiprováveis, então P=2/6=1/3. As outras opções contam um só caso, a união ou casos fora da interseção."
      },
      {
        "level": "intermediate",
        "prompt": "Entre 100 alunos, 60 gostam de Matemática, 45 de Física e 25 de ambas. Quantos gostam de pelo menos uma?",
        "options": [
          "80",
          "105",
          "25",
          "55"
        ],
        "correctIndex": 0,
        "hint": "Use inclusão-exclusão para não contar os mesmos alunos duas vezes.",
        "solution": "A alternativa A está correta: 60+45−25=80 alunos. O resultado 105 somaria a interseção duas vezes; 25 é apenas a quantidade que gosta de ambas."
      },
      {
        "level": "advanced",
        "prompt": "Uma urna contém 3 bolas vermelhas e 2 azuis. Qual é a chance de duas vermelhas em duas retiradas sem reposição?",
        "options": [
          "9/25",
          "6/25",
          "3/10",
          "3/5"
        ],
        "correctIndex": 2,
        "hint": "Na segunda retirada, restam duas vermelhas entre quatro bolas.",
        "solution": "A alternativa C está correta: (3/5)×(2/4)=6/20=3/10. As outras opções não atualizam a composição da urna ou correspondem a eventos diferentes."
      }
    ]
  },
  {
    "subject": "História",
    "topicStart": "Revolução Industrial",
    "objective": "Interpretar transformações produtivas, energia, fábrica e trabalho na Revolução Industrial, relacionar condições britânicas do século XVIII a urbanização e mudanças sociais e analisar respostas e impactos ambientais.",
    "prerequisites": [
      "Expansão comercial e colonial",
      "Mercantilismo",
      "Artesanato e manufatura"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Da oficina à fábrica: uma transformação histórica",
        "explanation": "A Revolução Industrial foi um processo de profundas transformações na produção, no trabalho e nas fontes de energia que ganhou impulso na Grã-Bretanha a partir da segunda metade do século XVIII. Não corresponde a um dia de invenção da fábrica nem a uma substituição imediata de todos os artesãos. A produção têxtil mecanizada, o uso crescente do carvão mineral, o desenvolvimento de máquinas e a reorganização de transportes contribuíram para ampliar a capacidade produtiva. Condições britânicas como redes comerciais, acesso a carvão, capitais, transformações agrárias e instituições tiveram papel, mas não explicam o fenômeno por um único fator isolado. Na manufatura, tarefas podiam ser divididas entre trabalhadores sem predominância de máquinas motorizadas; no sistema fabril, máquinas, horários, disciplina e concentração de operários reorganizaram o processo. A mecanização não significou automaticamente melhores condições de trabalho. Mulheres, homens e crianças participaram de setores industriais em situações muitas vezes precárias, com jornadas extensas e riscos. Interpretar uma gravura de fábrica exige observar maquinário, espaços, fontes de energia e trabalhadores, perguntando quem produziu a imagem e por qual motivo.",
        "example": "Compare três formas de fabricar tecido: artesão que tece em oficina, manufatura que divide etapas entre trabalhadores e fábrica que reúne máquinas e operários sob controle do proprietário. As três podem coexistir historicamente. A diferença está na organização do trabalho, concentração de capital e grau de mecanização, não apenas no tamanho do edifício.",
        "pitfall": "Não reduza a Revolução Industrial à invenção de uma única máquina nem suponha que artesanato desapareceu imediatamente. Foi um processo desigual, com ritmos diferentes entre regiões e setores.",
        "steps": [
          "Situe tempo, lugar e fontes de energia no início do processo.",
          "Diferencie artesanato, manufatura e sistema fabril.",
          "Identifique mudanças no ritmo de produção e nas relações de trabalho."
        ]
      },
      {
        "level": "intermediate",
        "title": "Urbanização, proletariado e conflitos sociais",
        "explanation": "A expansão industrial influenciou crescimento urbano e a formação de um grupo amplo de trabalhadores assalariados dependentes da venda de sua força de trabalho. Migrações do campo para áreas industriais relacionaram-se a transformações agrárias, novas oportunidades e dificuldades de sobrevivência, mas variaram conforme região e período. Cidades cresceram sem infraestrutura equivalente para toda a população; aglomerações, moradia precária e doenças compuseram parte dos problemas de saneamento. A disciplina fabril introduziu controle de horário, ritmo de máquina e divisão de tarefas, alterando a autonomia de trabalhadores em comparação com algumas formas de produção anteriores. A resistência assumiu expressões diferentes: quebra de máquinas associada ao ludismo em circunstâncias específicas, organização sindical, greves e reivindicações legais por redução de jornada e proteção ao trabalho. Esses movimentos não podem ser tratados como simples hostilidade irracional à tecnologia: protestos envolviam salários, desemprego, condições e poder de negociação. Ao ler estatísticas, separe crescimento da produção de distribuição de renda e condições de vida. Uma economia pode produzir mais bens enquanto trabalhadores enfrentam longas jornadas e insegurança.",
        "example": "Um gráfico hipotético mostra produção têxtil dobrando durante algumas décadas, enquanto relatos descrevem jornadas prolongadas nas fábricas. Os dados não se contradizem: produtividade agregada e condições dos operários são dimensões diferentes. Para avaliar melhora social, seria necessário examinar salários reais, moradia, saúde e direitos trabalhistas.",
        "pitfall": "Não interprete aumento da produção como prova de melhoria imediata e uniforme para todos. Também não reduza o ludismo a oposição genérica ao conhecimento científico sem examinar condições de trabalho.",
        "steps": [
          "Relacione fábricas à migração e expansão das cidades.",
          "Analise jornadas, remuneração, trabalho infantil e condições sanitárias.",
          "Compare reivindicações trabalhistas e mudanças legais no tempo."
        ]
      },
      {
        "level": "advanced",
        "title": "Expansão industrial, imperialismo e consequências ambientais",
        "explanation": "A industrialização espalhou-se por diferentes regiões em ondas e ritmos distintos, alterando infraestrutura, tecnologia e relações econômicas internacionais. Ferrovias, navios a vapor e mecanismos de comunicação contribuíram para transportar matérias-primas e mercadorias em escalas ampliadas. A busca por mercados e recursos foi um dos elementos que se articulou ao imperialismo de países industrializados no século XIX, mas colonialismo, poder estatal e violência têm histórias anteriores e próprias. O crescimento da exploração de carvão e, posteriormente, outras fontes fósseis produziu transformações ambientais e urbanas, como poluição atmosférica e emissões de gases de efeito estufa. Não é adequado projetar automaticamente padrões energéticos atuais sobre todas as fábricas do século XVIII; a matriz energética e a tecnologia mudaram ao longo de diferentes fases. As mudanças no trabalho contribuíram para conflitos e reformas, inclusive formação de associações, leis e correntes socialistas e liberais com respostas distintas à questão social. Uma análise histórica completa distingue invenção técnica, uso comercial, distribuição dos ganhos e ação política. Não existe relação automática segundo a qual uma máquina provoque crescimento ou igualdade sem considerar quem a controla e quais instituições regulam seu uso.",
        "example": "Uma ferrovia do século XIX pode reduzir tempo de transporte de carvão e tecidos, conectando regiões industriais a portos. Isso amplia mercados e estimula mineração, mas também cria conflitos por trabalho, uso da terra e impactos ambientais. Avaliar o efeito histórico exige observar economia, infraestrutura, atores sociais e política imperial.",
        "pitfall": "Não atribua toda desigualdade industrial ao uso de máquinas isoladamente. Tecnologia, propriedade, instituições, comércio imperial e organização política atuaram conjuntamente, com efeitos diferentes sobre grupos sociais.",
        "steps": [
          "Construa cronologia das expansões industriais e das tecnologias de transporte.",
          "Relacione interesses econômicos e imperialismo sem explicação monocausal.",
          "Avalie ganhos produtivos e custos sociais e ambientais usando fontes comparáveis."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual transformação está associada ao começo da Revolução Industrial britânica?",
        "options": [
          "Predomínio imediato de computadores digitais.",
          "Fim completo do artesanato em toda a Europa.",
          "Mecanização de setores como o têxtil e expansão do sistema fabril.",
          "Substituição instantânea de todos os combustíveis por eletricidade."
        ],
        "correctIndex": 2,
        "hint": "Considere mecanização, uso de carvão e organização fabril.",
        "solution": "A alternativa C está correta: mecanização e concentração fabril contribuíram para as mudanças produtivas na Grã-Bretanha a partir do século XVIII. As demais apresentam tecnologias posteriores ou generalizações falsas."
      },
      {
        "level": "intermediate",
        "prompt": "Por que aumento da produção fabril não comprova, sozinho, melhoria nas condições de vida dos operários?",
        "options": [
          "Porque as fábricas nunca produziram mercadorias.",
          "Porque produtividade e distribuição dos ganhos são indicadores diferentes.",
          "Porque não existiram conflitos trabalhistas no século XIX.",
          "Porque toda urbanização ocorreu sem migração."
        ],
        "correctIndex": 1,
        "hint": "Compare produção total com salários, jornadas e saúde.",
        "solution": "A alternativa B está correta: crescimento do volume produzido não informa distribuição de renda, condições de trabalho ou infraestrutura urbana. As outras opções negam fenômenos históricos conhecidos."
      },
      {
        "level": "advanced",
        "prompt": "Qual relação é historicamente defensável entre industrialização e imperialismo no século XIX?",
        "options": [
          "A industrialização foi o único motivo de todo colonialismo na história.",
          "A expansão fabril eliminou a competição entre potências.",
          "A tecnologia garantiu benefícios iguais em colônias e metrópoles.",
          "A procura por matérias-primas e mercados contribuiu para estratégias imperialistas em conjunto com fatores políticos e militares."
        ],
        "correctIndex": 3,
        "hint": "Identifique interesses econômicos sem ignorar poder estatal e violência.",
        "solution": "A alternativa D está correta: produção e mercados integraram disputas imperialistas, mas decisões políticas, força militar e contextos coloniais também foram importantes. As outras opções reduzem processos complexos a explicações absolutas."
      }
    ]
  }
];
