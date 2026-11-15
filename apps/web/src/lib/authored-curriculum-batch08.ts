import type {AuthoredLessonSpec} from './authored-lesson-quality.ts';
export const authoredCurriculumBatch08:readonly AuthoredLessonSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Razões, escalas e proporcionalidade",
    "objective": "Interpretar razões e taxas, reconhecer modelos de proporcionalidade e aplicar escalas e balanços com unidades, condições de validade e critério de quantidade mínima explícitos.",
    "prerequisites": [
      "Operações com frações e decimais",
      "Porcentagem e resolução de equação simples",
      "Conversões de comprimento e massa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Razões, taxas e modelos direto e inverso",
        "explanation": "Uma comparação por quociente precisa de ordem, denominador não nulo e significado das grandezas. Para comparar comprimentos, converta-os para a mesma unidade: a razão de 2 m para 50 cm é 200/50 = 4, e não 2/50. Uma taxa pode comparar grandezas diferentes, como produção por hora; nesse caso as unidades fazem parte do resultado. Se uma receita idealizada mantém 300 g de farinha para 200 g de açúcar, farinha:açúcar = 3:2, enquanto açúcar:farinha = 2:3 responde a outra pergunta. Inverter uma razão de forma consistente não é erro por si; trocar a ordem sem mudar a interpretação é que causa problema. A proporção a/b = c/d, com b e d não nulos, permite concluir ad = bc. Antes de montar produtos cruzados, justifique que a igualdade de razões representa a situação. Em um modelo direto y = kx, o quociente y/x é constante para x não nulo; no inverso y = k/x, o produto xy é constante. Nos contextos positivos usuais, dobrar uma grandeza dobra a outra no primeiro modelo e reduz a outra à metade no segundo. Crescer junto não basta para demonstrar proporcionalidade: y = 10 + 2x cresce com x, mas y/x não é constante. Tampouco toda relação de oposição é inversamente proporcional. Preços com taxa fixa, produção com interrupções e equipes que se atrapalham podem exigir outros modelos. Declare o que permanece constante e confira a resposta na relação original, incluindo unidades e sentido da comparação.",
        "steps": [
          "Defina a ordem da comparação e garanta denominador não nulo.",
          "Converta unidades de mesma natureza e mantenha unidades das taxas.",
          "Justifique y = kx ou xy = k antes de aplicar regra de três.",
          "Confira o resultado na relação original, sem usar apenas aumenta/diminui."
        ],
        "example": "Modelo autoral: um tanque recebe água a vazão constante de 4 L/min, sem saída. O volume acrescentado em t minutos é 4t, diretamente proporcional ao tempo. Se já havia 10 L, o volume total é 10 + 4t e não é diretamente proporcional a t. Confundir volume total com acrescentado altera o modelo.",
        "pitfall": "Tratar toda relação crescente como proporcional, inverter só uma razão ou comparar metros com centímetros sem converter."
      },
      {
        "level": "intermediate",
        "title": "Escalas lineares, áreas e mudanças de tamanho",
        "explanation": "Uma escala linear de redução 1:n compara comprimento representado e correspondente real na mesma unidade. Em escala 1:50.000, 1 cm corresponde a 50.000 cm = 500 m. Se a medida no desenho é d, o comprimento real é nd; para representar um comprimento real, divida-o por n. Essas operações devem manter unidades compatíveis e respeitar a precisão da medida. Em figuras semelhantes sob fator linear uniforme, áreas variam com o quadrado do fator e volumes com o cubo. Assim, uma maquete em escala linear 1:100 tem razão de volumes 1:1.000.000 se todas as dimensões forem reduzidas uniformemente; isso não autoriza aplicar a razão linear diretamente a uma área. Em mapas, uma única escala deve ser usada dentro das condições da representação; projeções podem introduzir distorções e não se supõe uma razão exata única para qualquer distância global. Uma escala gráfica é uma barra com indicação da distância correspondente. Quando mapa e barra são ampliados pelo mesmo fator uniforme, a comparação com a barra acompanha o redimensionamento. A inscrição numérica impressa 1:n não se atualiza sozinha: se o desenho duplica os comprimentos, o novo denominador é n/2. A barra não resolve deformação desigual nos eixos, recorte que a exclui ou redimensionamento separado da legenda. Antes de medir uma cópia, verifique o que foi redimensionado. Escala e precisão são aspectos diferentes: converter corretamente uma medida aproximada não transforma o resultado em valor infinitamente exato.",
        "steps": [
          "Coloque representação e realidade na mesma unidade para interpretar 1:n.",
          "Use dreal = n·ddesenho e converta a unidade de saída.",
          "Em semelhança uniforme, aplique o quadrado para área e o cubo para volume.",
          "Após ampliação, confira fator comum, barra e denominador numérico."
        ],
        "example": "Exemplo autoral: um quadrado de lado 3 cm numa planta 1:200 representa lado de 6 m e área de 36 m². A área de 9 cm² multiplicada por 200² dá 360.000 cm², equivalentes aos mesmos 36 m². Uma ampliação uniforme ao dobro produziria lado desenhado de 6 cm e escala numérica 1:100, sem mudar o terreno.",
        "pitfall": "Multiplicar área só por n, manter escala numérica antiga após ampliação ou presumir que uma barra separadamente redimensionada continua válida."
      },
      {
        "level": "advanced",
        "title": "Taxas compostas e concentração: conservar a grandeza correta",
        "explanation": "Problemas com várias grandezas precisam de um modelo explícito. Se máquinas idênticas mantêm a mesma taxa de produção por hora e não há interferência, perdas ou interrupções, a produção é taxa × número de máquinas × horas por dia × dias. A quantidade de máquinas necessária para uma meta é direta em relação à meta e inversa em relação às horas e dias disponíveis, mantendo os demais fatores. Na realidade, rendimento pode mudar; a conta não demonstra que toda fábrica se comporta assim. Se a quantidade de máquinas precisa ser inteira e o cálculo resulta não inteiro, o critério de mínimo para atingir a meta exige arredondar para cima, não para o inteiro mais próximo. Em trabalho conjunto, podem-se somar taxas de tarefas por hora quando as contribuições são independentes e compatíveis; não se somam diretamente os tempos individuais. Em soluções, porcentagem em massa é 100 vezes massa de soluto dividida pela massa da solução. Homogeneidade indica uniformidade no material, não concentração constante depois de qualquer operação. Adicionar solvente ou retirar apenas solvente muda o denominador enquanto conserva o soluto, se não há reação, perda ou arraste. Evaporar água pode aumentar a fração em massa, mas falar em solução final exige que o soluto continue dissolvido nas condições finais. Misturar soluções exige acompanhar quantidade de soluto e a base da concentração. Uma média ponderada pelos volumes só cabe quando a unidade de concentração e o volume final tornam essa expressão válida; não serve indiscriminadamente para toda porcentagem ou mistura com contração. O caminho seguro é definir a quantidade conservada, fazer o balanço e depois calcular a nova razão.",
        "steps": [
          "Escreva a taxa por máquina-hora ou tarefa-hora com hipóteses.",
          "Relacione produção, equipamentos e tempo sem presumir proporcionalidade universal.",
          "Se a pergunta pede quantidade inteira mínima, confira arredondamento para cima.",
          "Em concentração, acompanhe soluto e solução com a mesma base de massa ou volume.",
          "Verifique perdas, reação e permanência em solução antes de interpretar o resultado."
        ],
        "example": "Modelo autoral: um equipamento produz 7 peças por hora. Para produzir ao menos 100 peças em 3 horas, são necessários 100/(7·3) ≈ 4,76 equipamentos equivalentes; com equipamentos inteiros idênticos, o mínimo é 5, pois 4 entregariam 84 peças e 5 entregariam 105. Isso depende da taxa constante e ausência de interferência dadas.",
        "pitfall": "Somar tempos em lugar de taxas, arredondar mínimo para baixo ou confundir massa de solvente com massa total da solução."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um mapa idealizado tem escala 1:150 000 uniforme no trecho medido. Dois povoados estão separados por 4,5 cm no mapa. Qual é a distância correspondente em quilômetros?",
        "hint": "Multiplique a medida em centímetros pelo denominador e use 100.000 cm para cada quilômetro.",
        "options": [
          "67,5 km",
          "0,675 km",
          "6,75 km",
          "675 km"
        ],
        "correctIndex": 2,
        "solution": "C: 4,5·150.000 = 675.000 cm; dividindo por 100.000 cm/km, obtêm-se 6,75 km. A é dez vezes maior; B é dez vezes menor; D é cem vezes maior que o valor correto. O denominador exige unidades iguais antes da conversão final. A resposta corresponde à medida e à escala fornecidas, sem presumir validade uniforme de qualquer mapa em todo o globo."
      },
      {
        "level": "intermediate",
        "prompt": "Uma solução aquosa idealizada tem concentração 12% em massa. Se evaporarmos 50 g de água de 300 g dessa solução, sem reação, arraste ou perda de sal, qual será a concentração final? Considere todo o sal dissolvido na temperatura final.",
        "hint": "Conserve a massa de sal, mas atualize a massa total da solução depois da retirada de água.",
        "options": [
          "14,4% m/m",
          "12% m/m",
          "10% m/m",
          "16% m/m"
        ],
        "correctIndex": 0,
        "solution": "A: a massa de sal é 0,12·300 = 36 g. Restam 300 - 50 = 250 g de solução; a porcentagem é 100·36/250 = 14,4% m/m. B mantém a concentração inicial apesar da retirada de solvente. C e D não são a razão entre 36 g e 250 g e não satisfazem o balanço fornecido. A homogeneidade inicial não garante concentração constante depois da evaporação. O cálculo usa ausência de perdas e permanência do sal dissolvido explicitadas."
      },
      {
        "level": "advanced",
        "prompt": "6 máquinas idênticas, operando 10 horas por dia, produzem 1.800 peças em 5 dias. Qual é o número mínimo de máquinas para produzir 2.880 peças em 6 dias, com jornada de 8 horas por dia? Assuma produtividade individual constante, sem interferência, perdas ou interrupções.",
        "hint": "Calcule peças por máquina-hora e a capacidade de uma máquina no novo período; depois verifique o mínimo inteiro.",
        "options": [
          "8 máquinas",
          "9 máquinas",
          "12 máquinas",
          "10 máquinas"
        ],
        "correctIndex": 3,
        "solution": "D: a taxa individual é 1.800/(6·10·5) = 6 peças por máquina-hora. No novo período, cada máquina produz 6·8·6 = 288 peças. A meta requer 2.880/288 = 10 máquinas. Com 8 seriam 2.304 peças; com 9, 2.592, abaixo da meta. Com 12 seriam 3.456 peças, suficientes mas sem atender ao pedido de quantidade mínima. O modelo é dado no enunciado e não prova produtividade linear em toda situação real."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Variação linguística e norma-padrão",
    "objective": "Reconhecer variação sistemática e adequação a situações comunicativas, distinguir norma-padrão de usos cultos e revisar construções específicas sem transformar convenção de escrita em julgamento da pessoa.",
    "prerequisites": [
      "Noções de sujeito e concordância",
      "Distinção entre situação comunicativa, gênero e registro",
      "Leitura de exemplos autorais na fala e na escrita"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Variação e contexto: a língua não é uniforme",
        "explanation": "Uma língua apresenta diferenças sistemáticas entre regiões, grupos, períodos e situações, e também dentro do repertório de uma mesma pessoa. Variação não significa ausência de gramática: formas usadas por uma comunidade podem seguir regularidades diferentes das prescrições de um modelo escolar. A análise pode considerar pronúncia, vocabulário e organização de palavras e frases. Diferenças regionais são chamadas diatópicas; sociais, diastráticas; de situação ou estilo, diafásicas; mudanças ao longo do tempo podem ser examinadas no eixo diacrônico. Esses recortes podem se combinar, e um único exemplo não permite identificar automaticamente cidade, etnia, renda ou escolaridade de quem fala. Também não se deve tomar uma região inteira como se todos pronunciassem e conjugassem do mesmo modo. Uma pessoa pode modificar registro conforme interlocutor, propósito e suporte. Fala não é sinônimo de informalidade: uma conferência pode ser oral e formal; escrita não é sinônimo de formalidade: uma conversa por mensagens pode ser informal. Em um contexto, duas expressões podem referir-se a uma situação próxima e produzir efeitos distintos de familiaridade, distância ou identidade. Investigue esses efeitos no enunciado, sem supor que todas as formas sejam intercambiáveis em qualquer lugar. Reconhecer variação não exige chamar todo lapso de digitação de variante comunitária, nem permite explicar uma forma por diagnóstico ou capacidade intelectual. O objetivo é descrever padrões e escolhas em situações, distinguindo evidência de estereótipo.",
        "steps": [
          "Observe a forma linguística e o contexto em que aparece.",
          "Identifique o recorte de variação sem tratá-lo como classificação exclusiva.",
          "Separe modalidade oral/escrita de grau de formalidade.",
          "Evite deduzir toda a identidade do falante a partir de uma marca isolada."
        ],
        "example": "Dois enunciados autorais: Cheguei de ônibus e Vim de busão podem remeter ao mesmo meio de transporte em um contexto, mas a segunda escolha pode produzir maior familiaridade. Isso não permite localizar com certeza a origem ou medir a inteligência de quem a usa, nem prova que as frases sejam idênticas em todos os efeitos de sentido.",
        "pitfall": "Reduzir cada região a um sotaque único, chamar toda fala de informal ou deduzir grupo social e capacidade intelectual de uma forma isolada."
      },
      {
        "level": "intermediate",
        "title": "Norma-padrão, usos cultos e revisão precisa",
        "explanation": "Norma-padrão é um modelo de referência codificado em descrições e prescrições, empregado em práticas de escrita e ensino; não é transcrição exata da fala de uma comunidade inteira. Norma culta é uma designação técnica para usos efetivos de grupos com escolarização formal elevada, com diferenças regionais e situacionais. Culta não significa moralmente superior, mais inteligente ou única variedade com regras. Os termos podem ter usos distintos entre autores, mas não devem ser equiparados automaticamente. Registro formal também não equivale a uma lista de palavras difíceis: adequação envolve clareza, propósito, interlocução e convenções do gênero. Uma mensagem formal pode manter vocabulário simples. Para revisar, identifique qual regra ou escolha está em questão e a referência adotada. Na concordância escrita exemplificada por Os relatórios chegaram, o verbo acompanha o sujeito plural; em O relatório chegou, acompanha o singular. Isso permite comparar construções sem chamar o produtor de um texto de incapaz. Também é preciso evitar regras inventadas: em usos pessoais como Maria chegou e A Maria chegou, o artigo antes do nome pode variar; sua ausência não constitui por si falha obrigatória de norma. A expressão a gente costuma selecionar verbo na terceira pessoa do singular no padrão de concordância: a gente chegou. Ela pode referir-se a mais de uma pessoa sem exigir chegamos nessa construção. Preferir nós chegamos em determinado manual ou tarefa pode ser escolha de registro, não demonstração de que toda ocorrência de a gente seja agramatical. Ensinar o padrão amplia recursos de atuação; não requer apagar toda a variedade de origem.",
        "steps": [
          "Diferencie modelo normativo e usos reais de grupos escolarizados.",
          "Identifique o objetivo da revisão antes de trocar formas indiscriminadamente.",
          "Confira sujeito e concordância no caso específico.",
          "Distinga regra gramatical, variação admitida e preferência de estilo."
        ],
        "example": "Comparação autoral: a gente chegou e nós chegamos podem remeter a um grupo de pessoas no contexto, mas cada construção seleciona sua forma verbal na convenção exemplificada. Trocar apenas o sujeito ou apenas o verbo sem observar a relação pode produzir combinação diferente da solicitada. Uma preferência de registro por nós não demonstra que a gente chegou não tenha concordância normativa.",
        "pitfall": "Tratar norma culta e norma-padrão como termos sempre idênticos, proibir artigo zero antes de qualquer nome ou confundir preferência por nós com inexistência de concordância padrão em a gente chegou."
      },
      {
        "level": "advanced",
        "title": "Adequação e preconceito: analisar texto sem hierarquizar pessoas",
        "explanation": "Preconceito linguístico ocorre quando avaliações de uma forma de falar são usadas para desqualificar pessoas e grupos, atribuindo-lhes ignorância, inferioridade ou incapacidade sem fundamento. Isso não é o mesmo que explicar uma convenção de escrita solicitada em uma tarefa ou discutir efeitos de uma escolha textual. É possível ensinar concordância e ampliar repertório sem humilhar o falante. Uma devolutiva precisa pode indicar o trecho, a regra adotada e uma alternativa de reescrita, preservando conteúdo e propósito. Não se deve atribuir a uma comunidade uma variedade inventada nem apresentar um exemplo fabricado como fala real de um povo. Nesta aula, os exemplos e cenários são autorais e não documentam pesquisa de campo. Também é necessário distinguir gêneros e registros: um informe objetivo não se torna editorial só porque usa linguagem formal, pois editorial envolve posição argumentativa institucional em determinado contexto. Da mesma forma, um texto informal pode ser claro e coerente, e uma frase padronizada pode ser inadequada por ofender o interlocutor ou alterar informação. Ao comparar versões, observe o que foi mantido, o que mudou e a quem o texto se dirige. Uma tarefa pode exigir padrão escrito e um registro definido, mas isso não torna todas as outras formas inúteis ou inferiores. Questões de leitura não autorizam inventar a intenção do autor nem regras universais sobre como todas as provas cobram língua. O domínio de diferentes recursos ajuda a escolher, compreender e revisar com critérios, sem usar prestígio social como medida da humanidade ou da capacidade de alguém.",
        "steps": [
          "Localize se a avaliação trata de uma construção ou desqualifica a pessoa.",
          "Nomeie a convenção e proponha reescrita preservando informação e propósito.",
          "Compare gênero, registro e situação sem reduzir gênero a formalidade.",
          "Leia formas linguísticas sem estereotipar comunidades ou inventar dados de fala."
        ],
        "example": "Situação autoral: um informativo comunica Sala dois: reunião às nove horas. O texto pode ser breve e padronizado sem constituir opinião editorial. Se uma revisão muda para reunião às dez, a escolha pode parecer formal, mas altera um dado. Adequar registro não dispensa fidelidade ao conteúdo nem autoriza julgar a origem social do redator.",
        "pitfall": "Confundir explicação gramatical com insulto, chamar todo texto formal de editorial ou elogiar uma reescrita que muda o fato informado."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Mensagens autorais da mesma pessoa: a um amigo, Me manda o arquivo quando puder?; em solicitação institucional, Você poderia enviar o arquivo, por favor? Considerando somente os dados, qual análise é sustentada?",
        "hint": "A mesma pessoa pode ajustar escolhas à situação; as mensagens não demonstram origem geográfica ou inteligência.",
        "options": [
          "A segunda mensagem prova que a pessoa mudou de região.",
          "As mensagens comprovam diferença de capacidade intelectual entre dois grupos.",
          "As escolhas podem variar conforme interlocução e propósito; os dados não identificam origem regional nem superioridade de quem escreve.",
          "A primeira mensagem é necessariamente incompreensível por ser menos formal."
        ],
        "correctIndex": 2,
        "solution": "C interpreta ajuste de registro da mesma pessoa às situações informadas, sem extrapolar identidade ou valor intelectual. A inventa mudança regional. B trata dois registros da mesma pessoa como evidência de hierarquia entre grupos. D confunde menor formalidade com incompreensibilidade. O caso não prova uma equivalência absoluta entre todas as expressões em qualquer contexto; permite observar escolhas situacionais."
      },
      {
        "level": "intermediate",
        "prompt": "Duas frases autorais em usos pessoais de nome próprio: Maria chegou cedo e A Maria chegou cedo. Sem manual particular ou contexto que imponha outra escolha, qual avaliação é adequada sobre o artigo antes do nome?",
        "hint": "Uma forma admitida pode variar regional e estilisticamente sem que a outra seja erro obrigatório.",
        "options": [
          "Somente A Maria é possível; a ausência de artigo viola obrigatoriamente a norma em qualquer uso de nome.",
          "Somente Maria é possível; artigo diante de pessoa é sempre proibido.",
          "As frases provam que a pessoa com artigo é mais escolarizada.",
          "A presença ou ausência de artigo pode ser admitida nesse uso; não se estabelece erro obrigatório ou superioridade do falante apenas por essa diferença."
        ],
        "correctIndex": 3,
        "solution": "D reconhece a variação admitida no contexto pessoal apresentado e evita transformar uma preferência em regra universal. A torna o artigo obrigatório em todo caso. B o proíbe sempre. C infere escolaridade de um traço isolado sem evidência. A análise se limita às frases e às condições dadas, sem afirmar que artigos sejam sempre facultativos em qualquer sintagma ou expressão."
      },
      {
        "level": "advanced",
        "prompt": "Cenário autoral: uma tarefa pede concordância nominal padrão na expressão as proposta novas. Qual devolutiva ensina a convenção solicitada sem preconceito e preserva o sentido de mais de uma proposta?",
        "hint": "Procure explicação sobre a construção, plural e reescrita, sem insultar a pessoa ou mudar a quantidade.",
        "options": [
          "A expressão prova que você não é capaz de pensar.",
          "Nesta tarefa, artigo, substantivo e adjetivo marcam o plural: as propostas novas. Vamos comparar as formas e aplicar a convenção ao texto.",
          "Apague o plural e escreva a proposta nova, pois quantidade não importa na revisão.",
          "Nunca use sua variedade de origem em nenhuma situação da vida."
        ],
        "correctIndex": 1,
        "solution": "B identifica a concordância pedida e oferece as propostas novas, preservando o plural e explicando a convenção sem julgar a pessoa. A transforma uma construção em insulto à capacidade intelectual. C muda mais de uma proposta para uma só e altera o sentido. D exige apagamento geral da variedade e ultrapassa a tarefa. Ensinar a norma solicitada e combater desqualificação social são objetivos compatíveis."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Realismo e Naturalismo",
    "objective": "Comparar procedimentos realistas e naturalistas, situar obras brasileiras e interpretar narrador, condicionamento social e ironia com apoio textual, sem transformar ficção em prova científica ou inventar enredos.",
    "prerequisites": [
      "Noções de narrador, personagem e autor",
      "Conhecimento introdutório do Romantismo",
      "Distinção entre contexto histórico, construção ficcional e interpretação"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Realismo e Naturalismo: tendências e marcos de leitura",
        "explanation": "Realismo e Naturalismo designam tendências e projetos literários do século XIX, com relações e diferenças que não cabem na oposição simples entre inventar e copiar a realidade. A representação de relações sociais, conflitos, interesses e contradições pode criticar idealizações, mas continua sendo construção por linguagem, seleção e ponto de vista. Não existe garantia de neutralidade porque a narrativa descreve detalhes cotidianos. No Brasil, 1881 é um marco convencional importante, ligado à publicação em livro de Memórias póstumas de Brás Cubas, de Machado de Assis, e de O mulato, de Aluísio Azevedo. Um marco de periodização não prova que antes ninguém representasse problemas sociais nem que todas as obras posteriores sigam a mesma fórmula. O cortiço, de Aluísio, foi publicado em 1890. O Naturalismo dialoga com teorias e pretensões científicas oitocentistas, destacando condicionamentos de ambiente e hereditariedade em certos projetos, como o romance experimental de Émile Zola. Isso não faz do romance um experimento controlado capaz de provar leis biológicas sobre pessoas reais. A associação de raça, meio e momento, presente em debates daquele século, não deve ser transformada em fórmula única de todo autor nem atribuída indistintamente como invenção de Zola. A leitura crítica distingue as concepções históricas mobilizadas e o conhecimento atual. Um texto pode denunciar exploração e também reproduzir estereótipos; a classificação por escola não decide sozinha como cada passagem funciona. Comece pelo procedimento efetivamente construído na obra.",
        "steps": [
          "Situe obra e data distinguindo marco convencional de início absoluto.",
          "Observe relações sociais e escolhas narrativas, sem chamar detalhe de neutralidade.",
          "Diferencie projeto literário cientificista de demonstração científica válida.",
          "Compare tendências sem presumir uniformidade entre todos os autores."
        ],
        "example": "Exemplo autoral de análise: um romance descreve negociações de aluguel, favores e prestígio entre moradores de uma cidade. Esse recorte pode sustentar crítica de relações sociais, mas não determina sozinho escola literária, neutralidade do narrador ou validade de qualquer teoria biológica. É preciso examinar a organização e o sentido do conjunto.",
        "pitfall": "Definir Realismo como fotografia imparcial, Naturalismo como ciência comprovada ou uma data convencional como ausência total de antecedentes."
      },
      {
        "level": "intermediate",
        "title": "Naturalismo: ambiente, coletividade e leitura crítica",
        "explanation": "Na leitura de uma narrativa naturalista, investigue como espaço, trabalho, relações de poder e descrições dos corpos condicionam trajetórias. Ambiente não é somente cenário decorativo: sua organização pode participar da explicação oferecida pelo narrador para ações e conflitos. Em O cortiço, a habitação coletiva e as relações econômicas permitem estudar exploração, circulação e disputas. Isso não autoriza reduzir todas as personagens a uma mesma causa nem declarar verdadeira uma hierarquia racial que apareça na representação. Uma comparação animalizante pode construir um efeito de leitura e deve ser analisada como escolha narrativa, com seu contexto e suas implicações; não prova que um grupo humano possua natureza inferior. Diferencie descrição da obra e adesão ao que uma voz afirma. O trabalho de interpretação exige observar quem enuncia o julgamento, que acontecimentos o sustentam ou tensionam e como o leitor é orientado. Um narrador pode explicar condutas por fatores físicos ou sociais e, ao mesmo tempo, revelar contradições e interesses. Nomear determinismo não resolve a análise: mostre no trecho a relação causal sugerida e discuta seu alcance. Também não se deve apresentar o tripé de um resumo escolar como lei que toda obra obrigatoriamente demonstra. Crítica social e reprodução de estereótipos podem coexistir e exigir discussão, em vez de uma resposta automática de absolvição ou condenação de toda a obra. Para resolver uma questão com fragmento fornecido, use as marcas presentes e não acrescente genealogia, diagnóstico ou destino de personagens que o material não informa.",
        "steps": [
          "Relacione espaço, trabalho e poder às trajetórias narradas.",
          "Identifique quem formula a explicação causal e com que marcas textuais.",
          "Analise animalização e estereótipos sem endossá-los como fatos biológicos.",
          "Sustente a interpretação no material fornecido, sem inventar enredo ou genealogia."
        ],
        "example": "Fragmento autoral hipotético, não extraído de um romance: o aluguel subia a cada mês, e os moradores aceitavam jornadas maiores para manter o quarto; o narrador relaciona essa pressão à exaustão e aos conflitos. Há um condicionamento social explicitado. O trecho não informa hereditariedade nem demonstra que todos agirão do mesmo modo para sempre.",
        "pitfall": "Usar determinismo como rótulo sem análise, validar racismo de uma representação ou inventar causas hereditárias quando o trecho só apresenta relações sociais."
      },
      {
        "level": "advanced",
        "title": "Machado: narrador, ironia e limites da confiança",
        "explanation": "A ficção machadiana permite analisar distância entre autor real, narrador e personagem, além de relações entre o que se afirma e os indícios oferecidos. Em Memórias póstumas de Brás Cubas, quem narra a partir da condição ficcional de morto é Brás Cubas. A designação de defunto autor pertence à construção dessa voz e não significa que Machado de Assis já estivesse morto ao escrever. Interpelações ao leitor, digressões e organização não linear participam da forma; não são simples defeitos a corrigir por uma cronologia rígida. Ironia pode surgir do contraste entre uma justificativa do narrador e consequências ou relações que sua própria exposição deixa perceber. Não se conclui, por isso, que toda frase seja falsa ou que exista uma única chave para qualquer obra. No conto A Cartomante, publicado inicialmente em 1884, Camilo recebe uma garantia tranquilizadora da cartomante; o desfecho contrasta com sua segurança. Rita está morta quando ele chega à casa de Vilela, e Vilela mata Camilo. O texto não narra uma profecia de morte natural de Vilela nem sua realização: esse enredo seria inventado. A oposição entre expectativa e desfecho pode ser estudada sem afirmar que o conto prova uma teoria geral sobre acaso, moralidade ou liberdade. Machado também discutiu Eça de Queirós e referências a Zola em sua crítica a O Primo Basílio; ler essa intervenção é diferente de atribuir-lhe adesão integral a todo programa experimental. Na análise, separe dado textual, hipótese interpretativa e afirmação sobre a posição pessoal do escritor.",
        "steps": [
          "Distinga autor real, narrador e personagem antes de atribuir um julgamento.",
          "Compare afirmações e indícios para sustentar a leitura de ironia.",
          "Confira o enredo na fonte primária, sem reproduzir resumos inventados.",
          "Diferencie interpretação de uma obra de tese universal atribuída ao escritor."
        ],
        "example": "Exemplo autoral hipotético: um narrador afirma ter favorecido uma pessoa por pura generosidade, mas conta em seguida que recebeu dela um benefício decisivo. O contraste permite questionar sua autoimagem, sem provar que cada palavra seja mentira nem identificar esse narrador com a opinião do autor real.",
        "pitfall": "Confundir Brás Cubas com Machado, concluir falsidade de tudo por haver ironia ou inventar uma profecia que não existe no conto."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um resumo escolar trata 1881 como marco brasileiro e afirma que o romance naturalista se relaciona a ideias científicas do século XIX. Qual avaliação evita extrapolação?",
        "hint": "Marco de periodização e projeto literário não equivalem a início absoluto de toda representação social ou comprovação científica.",
        "options": [
          "O marco prova que nenhum texto anterior abordava problemas sociais.",
          "Usar vocabulário científico transforma qualquer romance em experimento controlado.",
          "Todo romance publicado depois de 1881 deve seguir exatamente o mesmo modelo.",
          "O marco organiza uma periodização; a relação com ideias científicas não torna a ficção prova de leis biológicas reais."
        ],
        "correctIndex": 3,
        "solution": "D distingue periodização e construção literária de demonstração científica. A elimina antecedentes por uma data convencional. B confunde linguagem ou projeto cientificista com método experimental efetivamente controlado. C impõe uniformidade a todas as obras posteriores. Reconhecer um marco e uma influência histórica permite comparação, mas não dispensa ler procedimentos e diferenças de cada texto."
      },
      {
        "level": "intermediate",
        "prompt": "Fragmento autoral hipotético: o narrador associa a dependência de um emprego ao silêncio de uma personagem diante do patrão; o texto não fornece informação sobre ascendência ou hereditariedade. Qual análise se apoia no fragmento?",
        "hint": "Observe a relação social explicitada e não acrescente uma causa biológica ausente.",
        "options": [
          "O trecho sugere condicionamento pela dependência econômica; não demonstra hereditariedade nem destino universal.",
          "O trecho comprova que a personagem nasceu biologicamente inferior.",
          "O silêncio prova que todas as pessoas da mesma origem agirão assim em qualquer época.",
          "A referência a emprego elimina qualquer relação entre o meio social e a ação."
        ],
        "correctIndex": 0,
        "solution": "A identifica a ligação entre dependência de emprego e silêncio, sem inventar causa hereditária ou lei universal. B atribui inferioridade biológica sem informação e endossa uma hierarquia indevida. C universaliza uma ação particular para todo grupo e tempo. D nega a relação social que o fragmento estabelece. A interpretação lê um procedimento possível de condicionamento sem transformar o texto em experimento sobre pessoas reais."
      },
      {
        "level": "advanced",
        "prompt": "Fragmento autoral hipotético, não escrito por Machado: um narrador diz que jamais buscou prestígio; depois descreve como escolheu um casamento exclusivamente para receber homenagens e influência. Qual leitura da voz narrativa é sustentada?",
        "hint": "Compare a declaração de desinteresse e os motivos narrados; não confunda a voz ficcional com o autor real.",
        "options": [
          "A declaração inicial obriga o leitor a ignorar todos os indícios posteriores.",
          "O fragmento comprova a opinião pessoal do autor real sobre todo casamento.",
          "O contraste permite questionar a autoimagem do narrador e construir leitura irônica, sem afirmar que tudo o que ele diz é falso.",
          "A presença de primeira pessoa elimina qualquer possibilidade de crítica social."
        ],
        "correctIndex": 2,
        "solution": "C confronta declaração e motivos, sustentando uma leitura irônica da autoimagem com limites. A transforma o narrador em autoridade que dispensa leitura crítica. B atribui à pessoa do autor uma posição universal a partir de voz ficcional. D supõe que primeira pessoa impeça crítica social. O fragmento é autoral hipotético e não deve ser apresentado como citação de Machado ou passagem de obra existente."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Norma-padrão e revisão",
    "objective": "Revisar concordância, relações sintáticas, referências e escolhas de escrita conforme a tarefa, preservando conteúdo e distinguindo desvio, variante admitida e preferência editorial.",
    "prerequisites": [
      "Identificação de sujeito, verbo e complemento",
      "Noções de referência pronominal e pontuação",
      "Leitura do propósito e do registro solicitado na tarefa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Concordância com análise da construção",
        "explanation": "Revisar pela norma-padrão exige identificar a construção e a convenção solicitada, não apenas trocar toda forma menos frequente. Localize o sujeito e seu núcleo quando houver sujeito. Em As propostas chegaram, o verbo concorda com propostas; a distância entre núcleo e verbo não elimina essa relação. Haver com sentido de existir é impessoal na convenção escrita exemplificada por Havia dúvidas, mantendo-se na terceira pessoa do singular. Isso não significa que todo uso de haver seja impessoal: em Eles haviam chegado, haver é auxiliar de um tempo composto e concorda com eles. Existir, por sua vez, tem sujeito: Existiam dúvidas. Fazer indicando tempo decorrido é impessoal nesse uso: Faz dois anos que a equipe se reúne; já em As equipes fazem reuniões o verbo tem sujeito plural e outro sentido. A troca de um verbo por sinônimo pode alterar a construção sintática, por isso um teste de substituição não dispensa análise. Também existem variantes admitidas: com expressões partitivas como A maioria dos participantes, a concordância pode ocorrer no singular ou no plural, conforme construção e referência. Não se deve criar questão com as duas opções como se uma fosse obrigatoriamente incorreta. Diferencie modelo de referência para a tarefa e valor social do falante. Ensinar uma concordância solicitada não autoriza julgar a capacidade intelectual de quem escreveu outra forma. Na revisão, registre o motivo da mudança e volte ao período para conferir se ela preservou o sentido.",
        "steps": [
          "Localize sujeito e núcleo ou reconheça a construção impessoal.",
          "Verifique o sentido de haver e fazer, sem aplicar regra única a todo uso.",
          "Considere variantes admitidas antes de marcar uma forma como erro.",
          "Justifique a mudança e releia o período completo."
        ],
        "example": "Comparação autoral: A maioria dos participantes aprovou a proposta e A maioria dos participantes aprovaram a proposta podem expressar concordâncias admitidas no contexto partitivo. Uma tarefa pode preferir uma delas por orientação editorial, mas isso não prova que a outra seja sempre incorreta. Já a escolha de Existiam propostas mantém sujeito plural com existir.",
        "pitfall": "Impor singular obrigatório a todo partitivo, chamar qualquer haver de impessoal ou transportar a concordância de existir para haver existencial."
      },
      {
        "level": "intermediate",
        "title": "Regência, pontuação e referência em contexto",
        "explanation": "Uma revisão sintática examina relações entre termos. Regência envolve como um verbo ou nome se relaciona com complementos, inclusive preposições, conforme o sentido e o padrão adotado. Um recurso de conferência é consultar uma referência e comparar construções do mesmo sentido; substituir por qualquer sinônimo pode esconder diferença de regência. A crase, em casos como Entreguei o material à coordenação, reúne a preposição a e o artigo a. Existem também contrações com demonstrativos, como àquela, quando a construção exige a preposição. Não se usa acento grave antes de toda palavra feminina por ser feminina. Na pontuação, a vírgula não corresponde simplesmente a qualquer pausa de leitura. Em uma oração em ordem direta, não se separa sujeito e verbo com vírgula apenas porque o sujeito é longo. Isso não impede intercalações delimitadas por um par de vírgulas, como A equipe, segundo o relatório, concluiu o trabalho. Observe início e fim do segmento intercalado e o efeito de seu recorte. Orações e termos explicativos não se confundem automaticamente com restritivos; mudar pontuação pode mudar o alcance da referência. Pronomes e demonstrativos também pedem contexto: isso pode retomar uma proposição inteira, sem antecedente nominal único. Se o objetivo é distinguir duas pessoas ou duas propostas, nomeá-las de novo pode ser mais claro do que insistir em um pronome ambíguo. Não transforme uma estratégia de clareza em proibição universal de demonstrativos ou repetição de substantivos.",
        "steps": [
          "Examine sentido e complemento antes de decidir regência e preposição.",
          "Verifique os elementos que formam a contração, sem regra só de gênero.",
          "Identifique sujeito, verbo e possíveis intercalações para pontuar.",
          "Reconstrua o referente pretendido e explicite-o quando necessário."
        ],
        "example": "Exemplo autoral: A direção publicou um novo calendário. Isso alterou o planejamento. O demonstrativo pode retomar a publicação como fato, sem precisar ser trocado por ela. Já Entreguei o pedido à secretaria pode ser comparado a Entreguei o pedido ao setor para observar preposição e artigo, respeitando a construção de cada exemplo.",
        "pitfall": "Aplicar crase a toda palavra feminina, pôr vírgula apenas por pausa ou exigir que todo isso retome um único substantivo próximo."
      },
      {
        "level": "advanced",
        "title": "Passadas de revisão e preservação do conteúdo",
        "explanation": "Revisão pode ser organizada por passadas com objetivos definidos. Uma primeira leitura verifica se o texto responde à proposta, apresenta informação suficiente e mantém relações entre ideias. Outra pode examinar referências, concordância, regência e pontuação. Uma leitura final integra as alterações para perceber novos problemas criados pela própria revisão. Essa divisão é estratégia possível, não obrigação de toda pessoa ou de toda prova. Ler em voz alta, silenciosamente ou em outra ordem pode ajudar conforme a necessidade, mas nenhuma técnica garante detectar tudo; o tempo disponível e o modo de acesso devem ser considerados. Não existe duração universal de revisão que assegure resultado. Para cada intervenção, pergunte o que está sendo corrigido: uma infração à convenção pedida, uma ambiguidade, uma informação imprecisa ou só uma preferência de estilo. Trocar palavras por sinônimos não melhora necessariamente a frase e pode alterar regência ou sentido. Paralelismo pode facilitar leitura de enumerações, como ampliar vagas, rever horários e divulgar critérios, mas não obriga toda lista a usar sempre a mesma classe de palavra independentemente da construção. Preserve agentes, quantidades, datas, negações e graus de certeza. Tornar uma hipótese certa ou transferir uma ação a outra pessoa não é ajuste neutro de estilo. Quando há duas reescritas gramaticais possíveis, escolha segundo o propósito explicitado; não declare a outra universalmente errada. A revisão termina com conferência de que a versão final diz o que o autor pretende sustentar e atende às convenções adotadas, sem prometer que toda ambiguidade do mundo tenha sido eliminada.",
        "steps": [
          "Defina o foco de cada leitura conforme tarefa, acesso e tempo disponível.",
          "Classifique o motivo da mudança antes de reescrever.",
          "Confira paralelismo dentro da construção real e preserve relações de sentido.",
          "Releia a versão completa verificando agentes, datas, quantidades e certeza."
        ],
        "example": "Intervenção autoral: o texto diz que uma medida pode reduzir filas. Substituir pode reduzir por eliminará altera possibilidade para certeza e reduz abrangência de filas a eliminação total. Uma revisão pode melhorar a organização mantendo poderá reduzir filas, mas precisa conferir se a mudança de tempo verbal também corresponde ao sentido pretendido.",
        "pitfall": "Confundir preferência com erro, prometer revisão infalível por tempo fixo ou tornar uma afirmação mais categórica sem evidência."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual frase autoral segue a convenção de concordância padrão no sentido indicado, sem depender de preferência entre variantes partitivas?",
        "hint": "Haver existencial e fazer temporal são impessoais; existir concorda com seu sujeito.",
        "options": [
          "Haviam três sugestões na pauta.",
          "Fazem dois anos que a equipe se reúne.",
          "Havia três sugestões na pauta.",
          "Existe três sugestões na pauta."
        ],
        "correctIndex": 2,
        "solution": "C mantém haver com sentido existencial na terceira pessoa do singular: Havia três sugestões. A flexiona indevidamente esse haver para o plural. B usa fazem para tempo decorrido, construção impessoal que pede faz. D usa existe com sujeito plural três sugestões; nesse caso, existem é a concordância pedida. A análise se refere a esses sentidos, não afirma que haver ou fazer nunca possam aparecer no plural em outros usos."
      },
      {
        "level": "intermediate",
        "prompt": "A informação autoral é: os relatórios que foram entregues ontem chegaram hoje. Qual reescrita mantém a leitura restritiva, a concordância e a pontuação de uma oração simples em ordem direta?",
        "hint": "O sujeito é Os relatórios entregues ontem; não se acrescenta vírgula para separá-lo de chegaram.",
        "options": [
          "Os relatórios entregues ontem chegaram hoje.",
          "Os relatórios entregues ontem, chegaram hoje.",
          "Os relatórios entregues ontem chegou hoje.",
          "Os relatórios, entregues ontem chegaram hoje."
        ],
        "correctIndex": 0,
        "solution": "A mantém sujeito plural, verbo chegaram e o modificador restritivo entregues ontem, sem separar sujeito e verbo. B introduz uma vírgula indevida entre o sujeito inteiro e o predicado. C troca o verbo para singular. D abre uma intercalação sem fechamento e não mantém a organização restritiva pedida. A regra não proíbe todo par de vírgulas entre núcleo do sujeito e verbo: uma intercalação válida é construção diferente."
      },
      {
        "level": "advanced",
        "prompt": "Cenário autoral: Lia informou a Nara que a inscrição de Lia foi confirmada para o encontro de quinta-feira. Uma versão com sua inscrição ficou ambígua. Qual reescrita explicita a titular e preserva pessoa, confirmação e dia?",
        "hint": "Todas as condições contam: inscrição de Lia, confirmação afirmada e encontro na quinta-feira.",
        "options": [
          "Lia avisou Nara que a inscrição de Nara foi confirmada para o encontro de quinta-feira.",
          "Lia avisou Nara que talvez a inscrição de Lia seja confirmada para o encontro de quinta-feira.",
          "Lia avisou Nara que a inscrição de Lia foi confirmada para o encontro de sexta-feira.",
          "Lia avisou Nara que a inscrição de Lia foi confirmada para o encontro de quinta-feira."
        ],
        "correctIndex": 3,
        "solution": "D nomeia Lia como titular e mantém a confirmação e quinta-feira. A transfere a inscrição a Nara. B substitui confirmação por possibilidade. C altera o dia. As alternativas incorretas para o objetivo não precisam ser todas agramaticais: o problema editorial é que modificam informação que deveria ser preservada. Explicitar o referente resolve a ambiguidade indicada sem exigir proibição geral do possessivo sua em qualquer contexto."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Modais e condicionais",
    "objective": "Interpretar capacidade, permissão, obrigação e dedução em contexto e relacionar condições reais ou hipotéticas a consequências em diferentes tempos, sem transformar modelos frequentes em proibições universais.",
    "prerequisites": [
      "Conhecimento básico de tempos verbais simples (present, past, future)",
      "Familiaridade com estrutura sujeito + verbo + complemento",
      "Noção de frases afirmativas, negativas e interrogativas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Forma dos modais e sentido no contexto",
        "explanation": "Modais centrais como can, could, may, might, must, should, will e would acompanham outro verbo na forma base: She can swim, sem -s em can e sem to antes de swim. A negativa usa not e a pergunta pode inverter modal e sujeito: Can she swim? A expressão ought to mantém to; have to tem outro comportamento, como Does she have to go? Não aplique automaticamente a sintaxe de um modal central a toda expressão de necessidade. Um mesmo modal tem vários usos: can pode indicar capacidade ou permissão; could pode retomar capacidade passada, formular pedido ou possibilidade. May e might podem marcar possibilidade sem fornecer porcentagem fixa de probabilidade. Should pode expressar conselho ou expectativa. Must pode expressar obrigação ou uma conclusão que o falante considera forte: contexto, não só tradução de dicionário, distingue os usos. Em regras, must not ou mustn't indica proibição; don't have to e need not indicam ausência de necessidade, não proibição. Uma pessoa pode fazer algo opcional. Must e have to podem ambos expressar obrigação; a distinção didática entre exigência do falante e exigência externa é uma tendência de uso, não uma fronteira sem exceções. Para narrar uma obrigação passada cumprida, had to é construção comum; must have seguido de particípio costuma marcar dedução sobre o passado, não obrigação passada cumprida. Leia quem fala, em qual situação e com qual finalidade antes de decidir o sentido.",
        "steps": [
          "Reconheça o modal e a forma do verbo que ele acompanha.",
          "Use o contexto para distinguir capacidade, permissão, conselho, obrigação e dedução.",
          "Separe proibição de ausência de obrigação ao ler negativas.",
          "Confira se a referência temporal exige outra construção, como had to."
        ],
        "example": "Exemplos autorais: I can repair this radio informa capacidade no contexto de uma oficina; Can I open the window? pede permissão. You should save a backup oferece conselho, enquanto The backup must be on another disk pode expressar uma dedução se o falante estiver procurando o arquivo. A situação decide a leitura.",
        "pitfall": "Traduzir cada modal por uma única palavra, tratar don't have to como proibição ou inserir to após todo modal central."
      },
      {
        "level": "intermediate",
        "title": "Condições reais e hipóteses: modelos e referência temporal",
        "explanation": "Uma construção condicional relaciona condição e consequência; os nomes zero, first, second e third são modelos úteis de ensino, não uma lista de todas as frases possíveis. No zero conditional, presente nas duas orações pode descrever uma rotina ou regra geral: If the sensor detects movement, the light turns on. A validade depende da regra ou situação descrita, não de uma lei universal obrigatória. No first conditional, uma possibilidade futura costuma ser apresentada com if + present simple e will + verbo base na principal. Também podem aparecer outros modais ou um imperativo na consequência. No modelo neutro de previsão futura, não se acrescenta will à oração com if só porque o evento está no futuro; contudo, will e would podem aparecer nela com sentidos próprios, como disposição para colaborar. No second conditional, if + past simple e would + base apresentam uma hipótese remota no presente ou futuro; o passado gramatical não precisa localizar o acontecimento no passado. If I were é forma corrente em hipótese contrária à realidade; was também ocorre em certos registros e contextos, portanto não se deve condená-lo sem analisar a construção. No third conditional, if + past perfect e would have + particípio imaginam outro passado e outro resultado passado. Could ou might podem substituir would para marcar capacidade ou possibilidade, conforme a intenção. Leia os marcadores temporais e a situação antes de preencher uma lacuna. Quando if inicia a frase, costuma-se separar a oração condicional por vírgula; quando vem depois da principal, normalmente não é necessária.",
        "steps": [
          "Identifique quando se situam condição e consequência.",
          "Diferencie rotina, possibilidade futura e hipótese remota.",
          "Escolha o modelo pedido sem negar outras construções válidas.",
          "Releia a frase completa, incluindo marcadores de tempo e pontuação."
        ],
        "example": "Comparação autoral: If the parcel arrives tomorrow, I will collect it apresenta uma possibilidade futura. If I owned a larger van, I would carry the furniture imagina uma condição presente diferente. Em If you will wait here, I will fetch the key, will na oração com if pode indicar disposição para esperar; não é simples duplicação do futuro.",
        "pitfall": "Dizer que will nunca pode vir após if, interpretar todo past simple como tempo passado ou chamar qualquer combinação diferente do modelo de estrutura inexistente."
      },
      {
        "level": "advanced",
        "title": "Hipóteses mistas, deduções passadas e relatos",
        "explanation": "Em condicionais mistas, condição e consequência têm referências temporais diferentes. Uma condição passada imaginada pode ter resultado presente: if + past perfect, would + base, com um marcador como now. Também é possível imaginar uma característica atual ou duradoura e uma consequência passada: if + past simple, would have + particípio. Não basta comparar nomes de tempos verbais: pergunte em que momento se situa cada ideia e qual relação o falante propõe. Em outra construção, modal + have + particípio pode avaliar um acontecimento anterior. Must have indica uma dedução forte segundo as evidências do falante, sem garantir que a conclusão seja verdadeira. Might have e may have podem admitir um acontecimento passado como possível, sem afirmar que ele ocorreu ou deixou de ocorrer. Could have também depende do contexto: pode indicar possibilidade passada incerta ou uma oportunidade que não se realizou. Should have pode exprimir crítica a uma ação não realizada ou uma expectativa sobre o que já ocorreu; não é sempre arrependimento. Can't have e couldn't have podem expressar que o falante considera uma hipótese passada incompatível com as evidências. Não organize obrigação, conselho e probabilidade em uma única escala numérica. No discurso indireto, can pode passar a could e will a would; a escolha depende da referência temporal e de o conteúdo continuar válido. Must de obrigação frequentemente passa a had to, mas não é troca obrigatória em todo relato; must de dedução pode permanecer. Resolva questões pelo sentido e pelo contexto explicitado, sem exigir alteração mecânica de todo modal.",
        "steps": [
          "Marque separadamente o tempo da condição e o do resultado.",
          "Reconheça a diferença entre hipótese e dedução baseada em evidências.",
          "Não infira realização ou não realização apenas de might have.",
          "Ao relatar uma fala, preserve modalidade e referência temporal, considerando o contexto."
        ],
        "example": "Situação autoral: A porta estava trancada e há um comprovante de retirada assinado. Omar must have collected the equipment yesterday registra uma dedução forte, ainda sujeita a erro. Omar might have collected it admite uma possibilidade. Já Omar should have collected it pode criticar uma tarefa não cumprida, se esse for o contexto, ou expressar expectativa de cumprimento.",
        "pitfall": "Tratar might have como prova de que algo não ocorreu, must have como obrigação cumprida ou qualquer troca no discurso indireto como automática."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Aviso autoral de um clube: Visitors mustn't enter the storage room. You don't have to bring a printed ticket; the digital version is accepted. Qual interpretação preserva as duas orientações?",
        "hint": "Compare proibição de uma ação com dispensa de uma obrigação; opcional não significa proibido.",
        "options": [
          "É obrigatório entrar no depósito e proibido apresentar ingresso impresso.",
          "Entrar no depósito é proibido; levar ingresso impresso não é obrigatório.",
          "Entrar no depósito é opcional; levar ingresso impresso é obrigatório.",
          "O aviso apenas prevê que ninguém entrará no depósito e exige ingresso impresso."
        ],
        "correctIndex": 1,
        "solution": "B é a leitura correta: mustn't proíbe a entrada e don't have to dispensa a versão impressa, aceitando a digital. A inverte proibição em obrigação e cria outra proibição. C transforma uma vedação em opção e uma dispensa em exigência. D interpreta a regra como simples previsão e também inventa exigência. A frase não informa que o ingresso impresso seja proibido."
      },
      {
        "level": "intermediate",
        "prompt": "Cenário autoral: Eva não salvou o arquivo ontem e perdeu as alterações ontem. Ela imagina como ter salvado o arquivo teria evitado essa perda passada. Complete o third conditional padrão: If Eva ___ the file yesterday, she ___ the changes yesterday.",
        "hint": "A condição imaginada e sua consequência pertencem ao passado; use past perfect e would have + particípio.",
        "options": [
          "saves / will not lose",
          "saved / would not lose",
          "had saved / would not lose",
          "had saved / would not have lost"
        ],
        "correctIndex": 3,
        "solution": "D fornece had saved e would not have lost, com hipótese e consequência passadas. A é modelo de possibilidade futura, inadequado aos dois yesterday. B apresenta hipótese remota com resultado não marcado como passado pela construção solicitada. C pode participar de um condicional misto quando o resultado é presente ou futuro, mas não exprime a perda de ontem no modelo pedido. Ela não é uma estrutura universalmente inexistente; é inadequada a este recorte temporal."
      },
      {
        "level": "advanced",
        "prompt": "Texto autoral: Lia did not take the design course last year. She says: If I had taken that course last year, I would have better skills now. Qual análise preserva o sentido e a estrutura?",
        "hint": "Em would have better skills, have é verbo principal com complemento nominal, não auxiliar seguido de particípio.",
        "options": [
          "Condição passada não realizada e consequência presente imaginada; have é verbo principal.",
          "Condição futura provável e consequência passada comprovada; would marca certeza.",
          "Condição presente e consequência passada; have better skills é um particípio passado.",
          "Duas ações passadas efetivamente realizadas; a frase confirma conclusão do curso."
        ],
        "correctIndex": 0,
        "solution": "A identifica hipótese passada em had taken last year e resultado presente em would have better skills now. Have, seguido de better skills, significa ter e está na forma base após would; não forma would have + particípio. B troca os tempos e converte hipótese em certeza. C chama um grupo nominal de particípio e inverte as referências temporais. D contradiz did not take e trata cenário imaginado como fato. A frase exemplifica um condicional misto passado/presente."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Inferência e vocabulário em espanhol",
    "objective": "Inferir sentidos de palavras e expressões em espanhol combinando pistas textuais, morfologia e consulta lexical, distinguindo hipótese plausível, informação explícita e extrapolação sem apoio.",
    "prerequisites": [
      "Reconhecimento de substantivos, adjetivos e verbos",
      "Leitura de frases curtas em espanhol",
      "Noções de contexto, referência e conectores"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Semelhança lexical é pista, não garantia",
        "explanation": "Inferir vocabulário é formular uma hipótese de sentido apoiada em pistas e testá-la na frase e no texto. Português e espanhol compartilham muitos elementos, mas a semelhança de forma não garante equivalência de todos os sentidos. Pares como informação/información e liberdade/libertad ajudam a reconhecer palavras, sem autorizar a criação automática de uma forma espanhola para cada palavra portuguesa. Existem mudanças de radical e diferentes soluções lexicais; observar uma terminação não substitui verificar a palavra inteira. Não é necessário traduzir cada item para compreender a ideia principal, mas uma palavra decisiva pode exigir consulta. Leia quem faz a ação, o que recebe a ação e os termos que acompanham a palavra desconhecida. Um adjetivo que qualifica positivamente um alimento dificilmente terá o sentido negativo sugerido por uma semelhança gráfica casual. Em espanhol, exquisito pode elogiar a qualidade ou o gosto de algo; não deve ser traduzido automaticamente pelo português esquisito no sentido de estranho. Já rato pode indicar um intervalo de tempo: o sentido deve ser lido na construção, sem proibir outras acepções documentadas do mesmo vocábulo. A existência de falsos amigos não torna toda semelhança enganosa. O objetivo é aproveitar cognatos com verificação e reconhecer quando o contexto pede revisão. Se houver dicionário disponível, procure a acepção que combina com o uso e suas marcas; a primeira definição da lista não é necessariamente a adequada.",
        "steps": [
          "Leia a frase inteira antes de projetar uma tradução.",
          "Use semelhanças como hipóteses e identifique a classe da palavra.",
          "Confira a compatibilidade com verbos, complementos e avaliação no texto.",
          "Consulte a acepção pertinente quando a palavra for decisiva ou a dúvida persistir."
        ],
        "example": "Microtexto autoral: La sopa estaba exquisita; todos elogiaron su sabor. O elogio e sabor sustentam uma avaliação positiva da comida. Traduzir exquisita por estranha contrariaria essas pistas. A conclusão se limita à avaliação da sopa: o texto não informa preço, ingredientes ou premiação do restaurante.",
        "pitfall": "Inventar uma palavra por troca automática de sufixo, supor que toda semelhança garante tradução ou escolher uma acepção sem testar o contexto."
      },
      {
        "level": "intermediate",
        "title": "Morfologia e relações entre palavras",
        "explanation": "Prefixos, sufixos e famílias lexicais oferecem pistas, mas precisam estar efetivamente presentes na forma analisada. Em releer, re- pode sugerir repetição da leitura; em desconocer, des- participa de uma forma cujo sentido se confirma pelo contexto. Não conclua que todo segmento inicial parecido seja prefixo nem que todo prefixo tenha um único valor em todas as palavras. O sufixo -miento aparece em substantivos relacionados a ações ou resultados, como descubrimiento, ligado a descubrir. A tradução natural pode ser descoberta, sem reproduzir o mesmo sufixo em português. Entendimiento e conocimiento também permitem observar famílias lexicais, mas desenvolvimento pode corresponder a desarrollo, que não termina em -miento. Uma palavra pode ser substantivo de ação sem conter aquele sufixo específico. Para reconhecer a função sintática, observe determinantes e concordância: el descubrimiento ocupa posição nominal, enquanto descubrir pode funcionar como infinitivo verbal. A informação morfológica não conta toda a história do acontecimento: descoberta não significa necessariamente descoberta acidental, nem garante reconhecimento oficial, autoria exclusiva ou validação científica definitiva. Esses detalhes exigem outras pistas. O mesmo cuidado vale para relações semânticas: uma explicação introduzida por es decir pode reformular um termo, enquanto um contraste pode limitar uma hipótese de leitura. Separe o sentido lexical geral e os atributos efetivamente acrescentados pelo enunciado. Assim, a derivação apoia a leitura sem virar etimologia inventada ou tradução palavra por palavra.",
        "steps": [
          "Identifique segmentos reais e consulte a família lexical quando necessário.",
          "Verifique a classe e a função da palavra na frase.",
          "Combine a pista morfológica com reformulações e contrastes textuais.",
          "Não acrescente causa, acaso ou validação que o fragmento não oferece."
        ],
        "example": "Exemplo autoral: El desarrollo del taller fue lento, pero los participantes completaron la actividad. Desarrollo designa aqui o andamento da oficina. A palavra não termina em -miento e não deve ser descrita como se contivesse esse sufixo. Lento avalia o processo, mas não autoriza concluir que a atividade fracassou: a segunda oração informa sua conclusão.",
        "pitfall": "Atribuir um sufixo ausente a uma palavra, exigir a mesma terminação na tradução ou transformar um nome de ação em prova de validação e causa."
      },
      {
        "level": "advanced",
        "title": "Expressões, inferências e limites do texto",
        "explanation": "O vocabulário inclui unidades maiores que uma palavra. Algumas expressões têm sentido que não resulta de traduzir isoladamente cada componente. O contexto ajuda a decidir se a leitura é literal, figurada ou técnica. Uma rede pode designar conexões sociais, informáticas ou outro sistema, conforme os participantes e ações descritos. Não atribua registro coloquial ou formal apenas porque uma expressão tem várias palavras; combinações e locuções circulam em diferentes gêneros. Para inferir uma intenção ou consequência, reúna pistas e formule uma conclusão proporcional ao que elas sustentam. Informação explícita está escrita; uma inferência relaciona o enunciado a outras pistas, e uma extrapolação acrescenta algo sem apoio suficiente. Nem toda inferência comunicativa é uma dedução logicamente inevitável: novas informações podem alterar uma leitura plausível. Atenção a negações, sujeitos, datas e modalidade: puede ayudar não equivale a resolverá, nem proposta equivale a ação já executada. Um pronome deve ser interpretado com o contexto, sem escolher automaticamente o substantivo mais próximo se isso contrariar a construção. Ao comparar alternativas, identifique qual conserva as relações e qual acrescenta certeza, recursos, atores ou resultados. Se duas leituras forem compatíveis e o fragmento não as distinguir, reconheça a insuficiência de dados em vez de inventar uma intenção única. A consulta lexical pode esclarecer uma expressão, mas não cria informações ausentes no texto.",
        "steps": [
          "Reconheça a expressão completa e o domínio do fragmento.",
          "Relacione pistas lexicais, conectores, referências e modalidade.",
          "Separe o explícito da inferência sustentada e da extrapolação.",
          "Confira cada alternativa quanto a agentes, tempo e grau de certeza."
        ],
        "example": "Microtexto autoral: El barrio creó una red de apoyo; varias familias se turnan para acompañar a quienes viven solos. A segunda oração sustenta uma leitura social de red de apoyo, e não uma infraestrutura de computadores. O texto descreve colaboração, mas não informa que todas as pessoas do bairro participem ou que todos os problemas tenham sido resolvidos.",
        "pitfall": "Ler uma expressão fora do domínio, transformar possibilidade em certeza ou preencher lacunas de informação com estereótipos sobre países e falantes."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Microtexto autoral: El guía pidió al grupo esperar un rato en la recepción mientras preparaba las entradas. No trecho, un rato indica principalmente:",
        "hint": "Esperar e mientras preparaba orientam uma leitura temporal; não transfira automaticamente um sentido português.",
        "options": [
          "Um roedor específico que o grupo deveria procurar na recepção.",
          "Um documento de ingresso que já tinha sido entregue ao grupo.",
          "Um intervalo de tempo durante a preparação dos ingressos.",
          "A confirmação de que a visita foi cancelada definitivamente."
        ],
        "correctIndex": 2,
        "solution": "C é a leitura temporal compatível com esperar e a oração enquanto o guia preparava os ingressos. A transfere um sentido português inadequado ao contexto espanhol. B confunde o intervalo com o documento entradas e ainda diz que já fora entregue. D acrescenta um cancelamento que o fragmento não anuncia. A expressão não permite calcular uma duração exata em minutos."
      },
      {
        "level": "intermediate",
        "prompt": "Microtexto autoral: El descubrimiento de una fotografía antigua permitió a Ana reconocer la casa de su abuela. Qual interpretação de descubrimiento é sustentada sem acrescentar informação?",
        "hint": "Considere a relação com descubrir e a consequência declarada; não invente como ou por acaso a fotografia foi encontrada.",
        "options": [
          "A descoberta ou o encontro da fotografia, sem afirmar que tenha sido por acaso.",
          "A descoberta necessariamente acidental da fotografia, comprovada por sua antiguidade.",
          "A fabricação de uma fotografia nova que reproduziu a casa antiga.",
          "A validação científica definitiva de todas as lembranças da família."
        ],
        "correctIndex": 0,
        "solution": "A preserva o sentido nominal ligado a descubrir e não inventa a circunstância do encontro. B acrescenta necessariamente acidental; antiga caracteriza a fotografia e não prova acaso. C troca descoberta por fabricação e antiga por nova. D transforma o reconhecimento da casa em validação científica de todas as lembranças, informação ausente. O sufixo ajuda a reconhecer um nome de ação ou resultado, mas não garante causa ou método."
      },
      {
        "level": "advanced",
        "prompt": "Fragmento autoral: El comité propuso ampliar el horario. La medida puede facilitar el acceso, pero aún no ha sido aprobada. Qual alternativa preserva o estado da medida e o grau de certeza do efeito?",
        "hint": "Relacione propuso, puede e aún no ha sido aprobada, sem trocar proposta por execução nem possibilidade por resultado garantido.",
        "options": [
          "O horário já foi ampliado e o acesso melhorou para todas as pessoas.",
          "A proposta foi rejeitada definitivamente porque nunca poderia facilitar o acesso.",
          "A medida foi aprovada e eliminará com certeza todas as dificuldades de acesso.",
          "Há uma proposta ainda não aprovada, com possível efeito favorável sobre o acesso."
        ],
        "correctIndex": 3,
        "solution": "D conserva a proposta, a falta de aprovação até aquele momento e o efeito apenas possível de puede facilitar. A e C apresentam execução ou aprovação que o texto nega e universalizam resultados. B confunde ainda não aprovada com rejeitada definitivamente e troca possibilidade por impossibilidade. O fragmento não diz quando haverá decisão, quem será beneficiado nem que a medida resolveria toda dificuldade."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Leis de Newton e dinâmica",
    "objective": "Compreender e aplicar as três leis de Newton para analisar o movimento de corpos sob ação de forças, incluindo diagramas de corpo livre, atrito, sistemas de massas e referência inercial.",
    "prerequisites": [
      "Cinemática escalar (velocidade, aceleração, equações do movimento)",
      "Conceito de força como interação",
      "Unidades do SI (newton, quilograma, metro, segundo)",
      "Trigonometria básica para decomposição de vetores"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Três leis, sistemas e diagramas de forças",
        "explanation": "As leis de Newton relacionam interações e movimento dentro do domínio da mecânica clássica. Em um referencial inercial, a primeira lei afirma que resultante nula corresponde à manutenção da velocidade: repouso e movimento retilíneo uniforme são possibilidades. Não é necessária uma força resultante para manter velocidade constante. Para massa constante, a segunda lei se escreve ΣF = m a, uma igualdade vetorial: a aceleração tem direção e sentido da resultante, não necessariamente da velocidade. Cada componente satisfaz ΣFx = m ax e analogamente nos outros eixos. A força é medida em newtons: 1 N = 1 kg·m/s². Massa e peso diferem: perto da superfície terrestre, o peso tem módulo P = mg, enquanto a massa não se torna zero na ausência de apoio. A terceira lei descreve pares de interação: se A exerce uma força em B, B exerce em A uma força de mesmo módulo e sentido oposto. As duas atuam em corpos diferentes e não se anulam no diagrama de um único corpo. Para construir o diagrama de corpo livre, delimite o sistema e desenhe somente as forças que agem sobre ele, identificando o agente de cada uma. Peso e normal de um livro sobre uma mesa não são par de ação e reação: ambos atuam no livro e têm agentes diferentes. A reação ao peso do livro é a força gravitacional que ele exerce sobre a Terra; a reação à normal é a força que o livro exerce sobre a mesa. A Terra pode ser aproximação inercial adequada nos exercícios declarados; movimentos de rotação importam em outras escalas e situações.",
        "steps": [
          "Delimite o corpo ou sistema e escolha o referencial.",
          "Liste as interações e seus agentes no diagrama de corpo livre.",
          "Escolha eixos e some componentes com sinais consistentes.",
          "Aplique a segunda lei e distinga equilíbrio de pares de interação."
        ],
        "example": "Exemplo autoral: um livro de 2 kg permanece sobre uma mesa horizontal em repouso, com g = 10 m/s² e sem outras forças verticais. Seu peso é 20 N para baixo e a normal é 20 N para cima. A resultante no livro é zero. A igualdade dos módulos decorre do equilíbrio desse caso; não torna peso e normal um par da terceira lei.",
        "pitfall": "Somar uma reação que atua em outro corpo, confundir velocidade com aceleração ou exigir resultante não nula para manter movimento retilíneo uniforme."
      },
      {
        "level": "intermediate",
        "title": "Atrito, planos e vínculos entre corpos",
        "explanation": "O atrito de contato se opõe ao deslizamento relativo ou à tendência de deslizamento na superfície, não necessariamente à velocidade do centro de massa em qualquer referencial. No modelo de Coulomb, o atrito estático se ajusta até um limite: 0 ≤ fe ≤ μe N. Ele não vale sempre μe N. Havendo deslizamento, o modelo cinético usa fc = μc N em oposição ao deslizamento relativo. Coeficientes e condições de contato são dados do modelo; não são constantes universais de um material em toda situação. A normal é perpendicular à superfície e seu módulo deve ser obtido pela equação nessa direção. Em uma rampa fixa com apenas peso e contato, sem aceleração perpendicular ao plano, N = mg cos θ e a componente do peso ao longo do plano é mg sen θ. Outra força com componente perpendicular pode mudar N, mesmo sem ser vertical no referencial escolhido. Em sistemas ligados, escreva uma equação para cada corpo e use os vínculos reais. Uma corda leve, esticada e inextensível passando por uma única polia fixa ideal permite igualar módulos das acelerações nas duas extremidades e usar a mesma tração, nas condições usuais. Polias móveis ou vários trechos podem impor relações diferentes; não se generaliza a igualdade das acelerações para qualquer montagem. Ao somar equações do conjunto, as forças internas podem se cancelar; a tração volta a ser necessária quando isolamos um bloco. Verifique o sentido encontrado e se a hipótese de deslizamento corresponde ao enunciado.",
        "steps": [
          "Decida se há repouso relativo ou deslizamento no contato.",
          "Calcule a normal na direção perpendicular à superfície.",
          "Escreva a segunda lei para cada corpo com os sinais escolhidos.",
          "Use somente os vínculos da montagem descrita e confira tração e sentido."
        ],
        "example": "Situação autoral: bloco de 5 kg desce uma rampa fixa de 30°, com μc = 0,20, g = 10 m/s², sen 30° = 0,50 e cos 30° ≈ 0,866. N ≈ 43,3 N; o atrito cinético aponta para cima e vale 8,66 N. A resultante ao longo da descida é 25 − 8,66 = 16,34 N, logo a ≈ 3,27 m/s² para baixo da rampa.",
        "pitfall": "Usar atrito estático máximo em todo caso, tomar normal sempre igual a mg ou impor a mesma aceleração a qualquer sistema de polias."
      },
      {
        "level": "advanced",
        "title": "Curvas, referenciais e verificação do modelo",
        "explanation": "Mesmo com rapidez constante, a velocidade muda de direção em uma trajetória circular. No referencial inercial, a componente radial da aceleração é v²/R e a resultante radial deve ser m v²/R, dirigida ao centro. Centrípeta é o papel da resultante radial, não uma força extra a acrescentar junto às interações já desenhadas. Atrito, tração, gravidade ou normal podem contribuir conforme a situação. Se a rapidez variar, existe também componente tangencial de aceleração, além da radial. Em uma curva plana horizontal idealizada, com nenhuma outra força horizontal relevante e sem aceleração vertical, N = mg e o atrito estático lateral necessário é m v²/R. A curva sem deslizamento só é compatível com esse modelo quando esse valor não ultrapassa μe mg; daí v ≤ √(μe gR). O atrito efetivo pode ficar abaixo do máximo. Esse limite escolar não é recomendação de velocidade para vias reais, que envolvem pneus, pavimento, inclinação e outras condições. Em um referencial que apenas translada com aceleração a_ref, mantendo eixos paralelos e sem rotação em relação a um inercial, pode-se escrever ΣF_real − m a_ref = m a_relativa. O termo adicional é inercial, sem agente de interação. Referenciais girantes exigem outros termos; a fórmula de translação sozinha não os descreve. A descrição newtoniana é adequada ao regime clássico adotado e deixa de ser suficiente em problemas relativísticos ou quânticos. Confira unidades, condições de contato e vínculo antes de aceitar um resultado algébrico.",
        "steps": [
          "Identifique as interações que fornecem a resultante radial.",
          "Separe componente radial e tangencial quando a rapidez variar.",
          "Compare a força necessária ao limite disponível no modelo.",
          "Declare o referencial e os limites de validade da equação usada."
        ],
        "example": "Exemplo autoral: uma pessoa de 60 kg está sobre uma balança em elevador com aceleração de 2 m/s² para cima; adote g = 10 m/s². No referencial inercial, N − 600 = 60·2, logo N = 720 N. A balança responde à força de apoio, não a uma mudança da massa. No referencial do elevador, sem rotação, o termo inercial para baixo permite descrever o repouso relativo.",
        "pitfall": "Desenhar centrípeta como interação adicional, usar sempre atrito máximo ou aplicar a fórmula de translação a qualquer referencial girante."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Situação autoral: um bloco de massa 6 kg está sobre uma mesa horizontal sem atrito. Em referencial inercial, atuam forças horizontais de 30 N para a direita e 12 N para a esquerda; peso e normal se equilibram. Qual é sua aceleração?",
        "hint": "Some as forças horizontais com sinais opostos e divida a resultante pela massa.",
        "options": [
          "7 m/s² para a direita.",
          "3 m/s² para a direita.",
          "5 m/s² para a esquerda.",
          "0 m/s², pois forças opostas sempre se anulam."
        ],
        "correctIndex": 1,
        "solution": "B: escolhendo a direita positiva, a resultante é 30 − 12 = 18 N. Para 6 kg, a = 18/6 = 3 m/s² para a direita. A soma os módulos sem considerar sentidos e obtém 42/6 = 7. C ignora a força de 12 N, divide 30 por 6 e ainda inverte o sentido. D confunde oposição de sentidos com igualdade de módulos: as duas forças não se anulam e não são um par de ação e reação, pois atuam no mesmo bloco."
      },
      {
        "level": "intermediate",
        "prompt": "Montagem autoral: bloco A de 6 kg sobre mesa horizontal ligado ao bloco B de 4 kg pendente por corda leve, esticada e inextensível em uma única polia fixa ideal. A já desliza em direção à polia e B desce; μc = 0,20 e g = 10 m/s². Sem outras forças relevantes, quais são o módulo da aceleração e a tração?",
        "hint": "No bloco A, T − μc mA g = mA a; no B, mB g − T = mB a. Some para obter a e depois calcule T.",
        "options": [
          "4 m/s² e 24 N.",
          "2,8 m/s² e 40 N.",
          "2,8 m/s² e 28,8 N.",
          "5,2 m/s² e 19,2 N."
        ],
        "correctIndex": 2,
        "solution": "C: normal em A = 60 N e atrito cinético = 12 N, contrário ao deslizamento. As equações T − 12 = 6a e 40 − T = 4a dão 28 = 10a, logo a = 2,8 m/s² e T = 6·2,8 + 12 = 28,8 N. A ignora atrito. B acerta a aceleração, mas toma a tração como peso de B, embora B acelere. D pode resultar de somar atrito como ajuda à descida na equação do conjunto; seus números não satisfazem a equação correta de A. A hipótese cinética foi dada, não foi deduzida de coeficiente estático ausente."
      },
      {
        "level": "advanced",
        "prompt": "Modelo autoral: um carro de 1000 kg faz curva horizontal plana de raio 40 m com rapidez constante de 15 m/s. Apenas o atrito estático fornece a força horizontal; N = mg, μe = 0,70 e g = 10 m/s². A curva é compatível com ausência de deslizamento nesse modelo? Indique o atrito necessário e o máximo.",
        "hint": "Calcule m v²/R e compare com μe mg; não imponha que o atrito efetivo esteja sempre no máximo.",
        "options": [
          "Não: atrito necessário 7000 N e máximo 5625 N.",
          "Sim: atrito necessário 7000 N e máximo 7000 N, pois todo atrito estático é máximo.",
          "Não: atrito necessário 15000 N e máximo 7000 N.",
          "Sim: atrito necessário 5625 N e máximo 7000 N."
        ],
        "correctIndex": 3,
        "solution": "D: a resultante radial necessária é 1000·15²/40 = 5625 N. O limite de atrito estático é 0,70·1000·10 = 7000 N. Como 5625 < 7000, o contato pode fornecer a força requerida; o valor efetivo é 5625 N, não o máximo. A inverte os papéis dos valores. B iguala indevidamente todo atrito estático a seu limite. C usa 1000·15, sem o quadrado da velocidade e sem dividir pelo raio; essa expressão nem tem dimensão de força. O resultado vale para as condições idealizadas declaradas."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Estrutura atômica e modelos",
    "objective": "Relacionar evidências e limites de modelos atômicos, calcular composição de átomos e íons, aplicar números quânticos e interpretar configurações e transições eletrônicas no modelo declarado.",
    "prerequisites": [
      "Noções de carga elétrica e forças eletrostáticas",
      "Conceito de energia quantizada",
      "Notação científica e algarismos significativos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Evidências, modelos e contagem de partículas",
        "explanation": "Um modelo atômico representa aspectos da matéria e deve ser avaliado pelo que explica e por seus limites, sem tratar cada mudança como simples troca de desenho. Na teoria de Dalton, átomos de um elemento eram concebidos como iguais em massa e indivisíveis nas transformações consideradas. Elétrons e isótopos exigiram revisão dessas ideias; reações químicas comuns, contudo, continuam sendo descritas por rearranjos de átomos. As investigações de Thomson com raios catódicos em 1897 contribuíram para identificar o elétron; isso não deve ser confundido com a data da proposta de sua distribuição em carga positiva, apresentada depois. O espalhamento de partículas alfa estudado por Geiger e Marsden, interpretado por Rutherford, sustentou um núcleo pequeno com carga positiva e grande concentração de massa. Não mostrou trajetórias eletrônicas clássicas estáveis. Bohr introduziu estados estacionários e transições quantizadas, com bom resultado inicial para hidrogênio e espécies de um elétron, sem explicar adequadamente todos os átomos multieletrônicos. Na descrição atual, Z é o número de prótons e identifica o elemento; A conta prótons e nêutrons, logo N = A − Z. Um núcleo de hidrogênio-1 não tem nêutron, portanto nem todo núcleo contém ambos. Um átomo neutro tem Z elétrons. Um cátion de carga +q tem Z − q elétrons e um ânion de carga −q tem Z + q; ionização química não troca o número de prótons. Isótopos têm mesmo Z e diferentes números de nêutrons. Número de massa inteiro não é a massa isotópica medida nem a média de massas de uma amostra com abundâncias especificadas.",
        "steps": [
          "Associe uma evidência ao aspecto do modelo que ela permite revisar.",
          "Identifique Z, A e a carga antes de contar partículas.",
          "Calcule nêutrons por A − Z e elétrons pela carga.",
          "Diferencie identidade do elemento, isótopo e estado de ionização."
        ],
        "example": "Exemplo autoral: um núcleo com seis prótons e oito nêutrons tem Z = 6 e A = 14; pertence ao carbono-14. A espécie neutra possui seis elétrons. Carbono-12 tem o mesmo Z e outro número de nêutrons. A diferença isotópica não corresponde a ganhar ou perder elétrons.",
        "pitfall": "Confundir carga com mudança de prótons, considerar A uma média isotópica ou imaginar que o espalhamento revelou órbitas eletrônicas definidas."
      },
      {
        "level": "intermediate",
        "title": "Orbitais, números quânticos e configurações",
        "explanation": "Na descrição quântica, orbital é uma função de onda espacial usada para descrever um elétron; seu módulo ao quadrado fornece uma densidade de probabilidade na descrição adotada. Desenhos de regiões de alta probabilidade não são trajetórias nem recipientes com parede rígida. No tratamento introdutório por orbitais atômicos, n é inteiro positivo; l vai de 0 a n − 1; ml assume valores inteiros entre −l e +l; ms pode ser +1/2 ou −1/2. Os valores l = 0, 1, 2, 3 correspondem a s, p, d, f. Há 2l + 1 orbitais em cada subnível e cada orbital admite no máximo dois elétrons com spins opostos, conforme Pauli. Spin é propriedade quântica intrínseca, não uma pequena esfera girando literalmente. Para orbitais de mesma energia no modelo, a regra de Hund orienta ocupação separada com spins paralelos antes do emparelhamento no estado fundamental. O esquema de preenchimento crescente ajuda a construir configurações, mas não substitui dados para exceções. Em átomos multieletrônicos, a energia não depende apenas de n e a ordenação relativa depende da espécie e da ocupação. Por isso escrever 4s antes de 3d em um esquema de construção não prova que 4s esteja sempre abaixo em toda espécie. Na formação dos cátions usuais de ferro, removem-se primeiro os elétrons 4s: Fe neutro [Ar] 3d6 4s2, Fe2+ [Ar] 3d6 e Fe3+ [Ar] 3d5. Essas configurações não significam que Fe3+ seja universalmente mais estável em qualquer ambiente. Confira sempre se a soma dos expoentes corresponde ao número de elétrons.",
        "steps": [
          "Verifique os intervalos admitidos para n, l, ml e ms.",
          "Associe l ao subnível e conte orbitais e capacidade.",
          "Aplique Pauli e Hund no modelo de preenchimento declarado.",
          "Some elétrons e confira remoção ou adição para a espécie considerada."
        ],
        "example": "Exemplo autoral: nitrogênio neutro tem sete elétrons e configuração 1s2 2s2 2p3. No esquema de estado fundamental, os três elétrons 2p ocupam três orbitais separadamente com spins paralelos. A capacidade máxima do subnível p é seis, mas capacidade e ocupação real são contagens diferentes.",
        "pitfall": "Confundir orbital com órbita, admitir l = n, usar ml fora de −l a +l ou tomar uma ordem de preenchimento como hierarquia energética universal."
      },
      {
        "level": "advanced",
        "title": "Transições eletrônicas e leitura de tendências",
        "explanation": "Estados eletrônicos quantizados ajudam a explicar linhas de absorção e emissão. Se uma transição radiativa leva o átomo de energia Ei maior a Ef menor, um fóton pode ser emitido com energia Eγ = Ei − Ef > 0. Para absorver um fóton e passar a energia maior, o fóton deve fornecer a diferença correspondente, respeitadas as possibilidades de transição. Nem toda diferença imaginável garante uma transição com qualquer intensidade; o cálculo energético não substitui condições de interação. Use Eγ = hν = hc/λ, com energia, frequência e comprimento de onda em unidades consistentes. Uma energia maior corresponde a frequência maior e comprimento de onda menor. No modelo simples do hidrogênio, En ≈ −13,6/n² eV; valores negativos indicam estados ligados em relação ao limite de ionização escolhido como zero, não energia negativa de um fóton. Retirar o elétron de um estado ligado requer energia. Esse esquema não pode ser transportado sem mudança para todos os elétrons de átomos multieletrônicos. A configuração também ajuda a interpretar tendências periódicas: atração nuclear, ocupação e blindagem atuam juntas. Raio e energia de ionização apresentam tendências com exceções, não uma única função sempre crescente de Z. Em espécies isoeletrônicas comparáveis, maior carga nuclear tende a contrair a nuvem, mas raios tabulados dependem da definição e do ambiente. Um salto de energias de ionização sucessivas pode sugerir a remoção após a camada de valência; não identifica sozinho qualquer elemento e período. Diferencie energia de ionização gasosa, energia de uma linha espectral e tendência de uma ligação: são grandezas e processos diferentes.",
        "steps": [
          "Identifique os estados inicial e final e se há absorção ou emissão.",
          "Calcule a energia positiva do fóton pela diferença correta.",
          "Converta usando hν ou hc/λ com unidades compatíveis.",
          "Restrinja a conclusão ao modelo e aos dados fornecidos, sem regra periódica absoluta."
        ],
        "example": "Exemplo autoral: dois níveis idealizados têm energias −6,0 eV e −2,0 eV. A passagem do primeiro ao segundo por absorção exige 4,0 eV. O sinal de cada nível não torna o fóton negativo. A transição inversa, se radiativa e admitida, pode emitir um fóton de 4,0 eV; sem dados adicionais não se calcula sua intensidade.",
        "pitfall": "Trocar emissão por absorção pelo sinal negativo de um nível, usar a energia de um estado como energia do fóton ou universalizar o modelo de um elétron."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Espécie autoral para contagem: um íon de cálcio tem Z = 20, A = 40 e carga 2+. Quantos prótons, nêutrons e elétrons possui?",
        "hint": "Z conta prótons, A − Z conta nêutrons e a carga positiva indica falta de elétrons em relação ao átomo neutro.",
        "options": [
          "18 prótons, 22 nêutrons e 20 elétrons.",
          "20 prótons, 20 nêutrons e 22 elétrons.",
          "20 prótons, 20 nêutrons e 18 elétrons.",
          "20 prótons, 40 nêutrons e 18 elétrons."
        ],
        "correctIndex": 2,
        "solution": "C: são 20 prótons por Z, 40 − 20 = 20 nêutrons e 20 − 2 = 18 elétrons. A altera o núcleo para representar ionização, o que não corresponde à espécie indicada. B soma elétrons como se a carga fosse 2−. D toma A como número de nêutrons, embora A conte prótons mais nêutrons. Os dois elétrons perdidos não modificam Z ou A nesta descrição."
      },
      {
        "level": "intermediate",
        "prompt": "No modelo de números quânticos atômicos, qual conjunto na ordem (n; l; ml; ms) é admissível para um elétron? A vírgula decimal indica metade quando aparece 0,5.",
        "hint": "n deve ser inteiro positivo; 0 ≤ l ≤ n − 1; −l ≤ ml ≤ l inteiro; ms = ±0,5.",
        "options": [
          "(2; 2; 0; +0,5)",
          "(3; 2; −2; +0,5)",
          "(3; 2; 3; −0,5)",
          "(3; 1; 0; +1)"
        ],
        "correctIndex": 1,
        "solution": "B satisfaz n = 3, l = 2 permitido, ml = −2 dentro do intervalo de −2 a +2 e ms = +0,5. A tem l = n, fora do intervalo. C tem ml = 3 para l = 2, maior que o permitido. D usa ms = +1, embora a projeção de spin do elétron nesse modelo só possa ser ±0,5. Admitir um conjunto não determina sozinho o elemento, a ocupação completa nem a energia de todo átomo multieletrônico."
      },
      {
        "level": "advanced",
        "prompt": "Cálculo autoral com valores arredondados do modelo do hidrogênio: E3 = −1,51 eV e E2 = −3,40 eV. O elétron passa radiativamente de n = 3 para n = 2. Use hc = 1240 eV·nm. Qual descrição do fóton e do comprimento de onda é compatível?",
        "hint": "O estado inicial tem maior energia; calcule E3 − E2 e depois λ = hc/Eγ.",
        "options": [
          "Emissão de 1,89 eV; comprimento de onda aproximadamente 656 nm.",
          "Absorção de 1,89 eV; comprimento de onda aproximadamente 656 nm.",
          "Emissão de 4,91 eV; comprimento de onda aproximadamente 253 nm.",
          "Emissão de −1,89 eV; comprimento de onda aproximadamente −656 nm."
        ],
        "correctIndex": 0,
        "solution": "A: a passagem de −1,51 para −3,40 eV reduz a energia do átomo e emite um fóton de (−1,51) − (−3,40) = 1,89 eV. λ = 1240/1,89 ≈ 656 nm com os arredondamentos dados. B inverte o processo, C soma os módulos dos níveis em vez de calcular a diferença e D atribui energia e comprimento de onda negativos ao fóton. A precisão final decorre dos valores aproximados, não de uma medição espectroscópica nova."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Metabolismo e respiração celular",
    "objective": "Relacionar metabolismo, transferência de energia e etapas da respiração aeróbia, calcular balanços com premissas declaradas e distinguir fermentação, regulação e desacoplamento.",
    "prerequisites": [
      "Conceito de enzima e sítio ativo",
      "Noções de oxidação e redução em química",
      "Estrutura básica da mitocôndria",
      "Diferença entre reações endergônicas e exergônicas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Metabolismo, ATP e balanço da glicólise",
        "explanation": "Metabolismo reúne reações celulares conectadas em vias. Catabolismo degrada moléculas e pode fornecer energia e precursores; anabolismo constrói moléculas e exige recursos energéticos e matéria. Uma via catabólica não tem necessariamente todas as etapas isoladas favoráveis: o acoplamento e as condições da célula importam. ATP participa de transferências de energia livre e grupos químicos, mas não é fonte inesgotável nem reserva de longo prazo equivalente a gordura ou glicogênio. A hidrólise global ATP + água → ADP + fosfato pode liberar energia livre nas condições celulares; isso não significa que romper uma ligação, isoladamente, libere energia. Romper ligações requer energia, e a variação líquida depende de reagentes, produtos e ambiente. O valor bioquímico padrão de uma reação não deve ser confundido com seu valor intracelular, dependente das condições. Na glicólise usual, uma glicose de seis carbonos origina dois piruvatos de três carbonos no citosol. São investidos dois ATP e formados quatro, saldo líquido de dois ATP, além de dois NADH. A via não usa O2 diretamente e ocorre também em células sem mitocôndrias. Regenerar NAD+ permite manter sua etapa oxidativa. Na fermentação lática, piruvato recebe elétrons de NADH, formando lactato e regenerando NAD+; essa etapa não adiciona ATP ao saldo glicolítico. Fermentação e respiração anaeróbia não são sinônimos: esta utiliza uma cadeia transportadora com aceptor final diferente de O2. Nem todo metabolismo sem oxigênio se reduz a fermentação.",
        "steps": [
          "Identifique a transformação de matéria e sua relação com outras vias.",
          "Separe ATP consumido, produzido e saldo líquido.",
          "Localize glicólise no citosol e reconheça o papel de NAD+/NADH.",
          "Diferencie a regeneração de NAD+ da produção adicional de ATP."
        ],
        "example": "Exemplo autoral: em uma reação de fosforilação a nível de substrato, um intermediário transfere um grupo fosforila para ADP e forma ATP. Isso difere de usar uma membrana e seu gradiente eletroquímico para mover ATP sintase. Ambas podem formar ATP, mas o mecanismo e a fonte imediata de acoplamento são diferentes.",
        "pitfall": "Chamar quatro ATP brutos de quatro líquidos, atribuir ATP extra à formação de lactato ou afirmar que só quebrar uma ligação libera energia."
      },
      {
        "level": "intermediate",
        "title": "Oxidação da glicose e fosforilação oxidativa",
        "explanation": "Na respiração aeróbia de uma célula eucarionte típica, a glicólise citosólica é seguida pela oxidação do piruvato e pelo ciclo do ácido cítrico, predominantemente na matriz mitocondrial. Cada piruvato gera acetil-CoA, um CO2 e um NADH. Para uma glicose, são dois acetil-CoA e dois NADH nessa etapa. Duas voltas do ciclo produzem, no balanço usual, quatro CO2, seis NADH, dois equivalentes de FADH2 e dois ATP ou GTP equivalentes. O ciclo também fornece intermediários à biossíntese, portanto a contagem de oxidação completa exige declarar que não se desviam intermediários no modelo. Na membrana interna, elétrons percorrem transportadores até o O2, aceptor final reduzido a água. Complexos I, III e IV contribuem para bombear prótons da matriz ao espaço intermembranar; o complexo II não bombeia prótons. A energia do gradiente eletroquímico permite síntese de ATP com retorno de prótons pela ATP sintase. Não se trata de elétrons entrando diretamente nessa enzima para formar ATP. A membrana interna não permite passagem livre do NADH citosólico: sistemas de lançadeira transferem seus equivalentes redutores, não a molécula inteira por simples transporte. Com convenções aproximadas de 2,5 ATP por NADH e 1,5 por equivalente de FADH2, o balanço pode dar cerca de 30 ou 32 ATP por glicose conforme a lançadeira e demais premissas. É contabilidade de um modelo, não número exato medido em toda célula; vazamento de prótons, transporte e desvio de substratos afetam o resultado real.",
        "steps": [
          "Conte produtos por piruvato e por volta antes de converter para uma glicose.",
          "Associe cada etapa ao compartimento indicado para eucariontes.",
          "Distinga fluxo eletrônico, bombeamento de prótons e síntese de ATP.",
          "Declare rendimentos de equivalentes redutores e lançadeira antes de somar ATP."
        ],
        "example": "Exemplo autoral de balanço de carbono: uma glicose contém seis carbonos e gera dois piruvatos de três. A formação dos dois acetil-CoA libera dois CO2; o balanço das duas voltas do ciclo acrescenta quatro CO2. Isso fecha seis carbonos no modelo de oxidação completa, sem afirmar que os carbonos do acetil recém-chegado sejam necessariamente os eliminados logo na primeira volta.",
        "pitfall": "Bombear prótons no complexo II, transportar NADH citosólico livremente pela membrana interna ou apresentar rendimento convencional como constante universal."
      },
      {
        "level": "advanced",
        "title": "Regulação, gradiente e desacoplamento",
        "explanation": "O fluxo metabólico responde a disponibilidade de substratos, demanda de ATP, estado redox e regulação enzimática. Não há uma única chave que controle igualmente todas as células. Na glicólise de muitos contextos de mamíferos, ATP é substrato e também pode inibir PFK-1 em concentração elevada, enquanto AMP e outros sinais favorecem atividade conforme a condição e a isoforma. Citrato e pH podem influir; listas de reguladores precisam de contexto e não garantem sozinhas prever todo fluxo. Alterar uma concentração não prova mecanismo único sem controle experimental. A fosforilação oxidativa depende de gradiente, ADP, fosfato, substratos oxidáveis e O2. Quando o retorno de prótons pela ATP sintase diminui, o gradiente pode dificultar bombeamento adicional e reduzir transporte eletrônico; não se conclui que todo fluxo seja exatamente zero, pois há vazamentos e outros processos. Desacoplamento é perda da ligação eficiente entre transporte eletrônico e síntese de ATP, por exemplo quando prótons retornam por outra via. Com condições adequadas, pode aumentar consumo de O2 e reduzir produção de ATP por oxigênio consumido; não se garante que o consumo aumente sob qualquer limitação de substrato ou dano. O gradiente também serve a transportes, e parte da energia é dissipada como calor. Consumo de oxigênio não mede sozinho ATP produzido. Para calcular eficiência, numerador e denominador devem usar condições termodinâmicas compatíveis; misturar energia padrão da oxidação com valores celulares escolhidos não fornece uma eficiência real medida. A aula não fixa porcentagem universal nem transforma fenômenos de laboratório em recomendação de intervenção no organismo.",
        "steps": [
          "Declare o sistema e quais recursos ou variáveis estão controlados.",
          "Relacione demanda de ATP, regulação e fluxo sem causa única automática.",
          "Separe transporte eletrônico de produção de ATP ao interpretar resultados.",
          "Confira premissas e comparabilidade antes de calcular rendimento ou eficiência."
        ],
        "example": "Situação autoral: em ensaio de enzima isolada com pH e substratos controlados, elevar ATP pode reduzir a atividade de PFK-1 por efeito regulatório, embora ATP também seja substrato. Isso não prova que elevar ATP em um organismo inteiro produzirá a mesma variação proporcional da glicólise; outras etapas e regulações participam.",
        "pitfall": "Equiparar O2 consumido a ATP formado, afirmar que sem ADP todo fluxo necessariamente zera ou misturar condições padrão e celulares em eficiência apresentada como real."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Contagem autoral: considere apenas a glicólise de 3 moléculas de glicose, antes de fermentação ou processamento mitocondrial. Por glicose, investem-se 2 ATP e produzem-se 4 ATP, 2 NADH e 2 piruvatos. Qual é o balanço final desse conjunto?",
        "hint": "Multiplique o saldo líquido, não apenas a produção bruta, e conte NADH e piruvato na mesma base.",
        "options": [
          "12 ATP líquidos, 6 NADH e 6 piruvatos.",
          "6 ATP líquidos, 3 NADH e 3 piruvatos.",
          "0 ATP líquidos, 6 NADH e 6 piruvatos.",
          "6 ATP líquidos, 6 NADH e 6 piruvatos."
        ],
        "correctIndex": 3,
        "solution": "D: para três glicoses, consomem-se 6 ATP e formam-se 12, saldo 6. São produzidos 6 NADH e 6 piruvatos. A informa ATP bruto como líquido. B usa a contagem de NADH e piruvato por uma triose como se fosse por glicose. C zera um saldo positivo. O NADH aqui contado é produto da glicólise, não ATP já formado por cadeia respiratória; se houver fermentação posterior, sua reoxidação altera o balanço de NADH dessa etapa adicional."
      },
      {
        "level": "intermediate",
        "prompt": "Modelo autoral de oxidação completa de uma glicose, com lançadeira malato-aspartato e sem desvios: 10 NADH equivalentes alcançam a cadeia no nível de NADH, 2 FADH2 equivalentes e 4 ATP equivalentes por fosforilação a nível de substrato. Adote rendimento de 2,5 ATP por NADH e 1,5 ATP por FADH2, já incluindo as convenções do modelo. Qual é o total?",
        "hint": "Converta os equivalentes redutores e some os quatro ATP diretos, sem descontar novamente o investimento já incluído no saldo.",
        "options": [
          "28 ATP equivalentes no modelo.",
          "32 ATP equivalentes no modelo.",
          "38 ATP equivalentes no modelo.",
          "34 ATP equivalentes no modelo."
        ],
        "correctIndex": 1,
        "solution": "B: 10·2,5 + 2·1,5 + 4 = 25 + 3 + 4 = 32 ATP equivalentes no modelo declarado. A omite os quatro equivalentes por fosforilação a nível de substrato. C usa razões antigas de 3 e 2 em vez das fornecidas, obtendo 30 + 4 + 4 = 38. D pode resultar de contar seis ATP diretos, sem subtrair o investimento glicolítico já considerado no saldo de quatro. Não se conclui que toda célula produza exatamente esse número nem que o NADH citosólico atravesse livremente a membrana."
      },
      {
        "level": "advanced",
        "prompt": "Experimento didático hipotético, sem representar estudo real: mitocôndrias isoladas têm substrato, ADP, fosfato e O2 não limitantes. Um agente permite retorno de prótons sem passar pela ATP sintase. Após sua adição, observa-se menor gradiente, maior consumo de O2 e menor formação de ATP. Qual interpretação é coerente?",
        "hint": "A cadeia pode continuar consumindo O2 quando parte da energia do gradiente deixa de ser capturada pela ATP sintase.",
        "options": [
          "Desacoplamento: parte do retorno de prótons contorna a ATP sintase, reduzindo captura em ATP apesar do maior consumo de O2.",
          "Bloqueio completo do complexo IV: O2 deixa de ser reduzido, explicando seu maior consumo.",
          "Aumento obrigatório de ATP: qualquer aumento de O2 consumido garante aumento proporcional de ATP.",
          "Fermentação lática mitocondrial: ela passa a produzir todo ATP por fosforilação oxidativa."
        ],
        "correctIndex": 0,
        "solution": "A relaciona o caminho alternativo de prótons ao desacoplamento entre transporte de elétrons e síntese de ATP. B contradiz o maior consumo observado: bloqueio completo da redução de O2 não o explica. C ignora que consumir O2 e capturar energia em ATP são medidas distintas. D confunde fermentação, que regenera NAD+ sem cadeia respiratória, com fosforilação oxidativa. Os resultados valem para o ensaio hipotético controlado; não determinam rendimento exato nem efeito universal em organismo inteiro."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Feudalismo e mundo medieval",
    "objective": "Distinguir vínculos senhoriais, vassálicos e servis na Europa medieval, analisar poderes e representações sociais e explicar transformações sem supor um sistema uniforme ou transição inevitável.",
    "prerequisites": [
      "Noções de cronologia histórica e periodização da Idade Média",
      "Conceito de modo de produção e relações sociais de produção",
      "Conhecimento geográfico básico da Europa ocidental"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Terra, vínculos e diversidade de condições",
        "explanation": "Feudalismo é uma categoria construída posteriormente por historiadores e usada com sentidos diferentes: pode destacar vínculos entre senhores e vassalos ou, em análise mais ampla, formas de poder e apropriação do trabalho camponês. Não foi um código único aplicado igualmente a toda Europa medieval. A concentração de recursos fundiários e de poderes locais se articulou a monarquias, costumes e instituições que não desapareceram simplesmente. Senhorio é domínio de direitos e poderes sobre terras e pessoas; vassalagem designa vínculos de fidelidade, auxílio e conselho, frequentemente associados a benefícios ou feudos, sobretudo em meios aristocráticos. Essas relações não são idênticas à servidão camponesa. Campesinato incluía pessoas com condições jurídicas e posses diversas: proprietários, arrendatários, dependentes e servos, com diferenças locais e temporais. Servidão envolve restrições jurídicas e dependência pessoal; não se diagnostica automaticamente apenas pela presença de um pagamento ou de serviço agrícola. Corveia costuma designar trabalho obrigatório devido ao senhor; prestações em produto e cobranças por instalações também aparecem, mas seus nomes, valores e aplicação variavam. Um camponês juridicamente livre podia dever encargos, e um servo não era simplesmente um vassalo militar pobre. Também não se deve impor a todo tempo e lugar uma regra única sobre posse, casamento ou venda. A produção rural era central, mas subsistência não equivale a ausência completa de mercados, moeda ou circulação. Para interpretar uma situação, localize lugar, época, agentes, direitos e obrigações documentados.",
        "steps": [
          "Defina qual sentido de feudalismo está sendo utilizado.",
          "Separe vínculo vassálico de relação senhorial e condição servil.",
          "Identifique obrigações efetivamente descritas sem inventar estatuto jurídico.",
          "Considere diversidade regional, temporal e econômica."
        ],
        "example": "Quadro autoral para comparação, sem reproduzir documento histórico: uma pessoa promete conselho e auxílio militar a um senhor em relação a um benefício; outra cultiva uma parcela e deve prestações agrícolas. Ambos os vínculos podem envolver terra, mas não são por isso a mesma relação de vassalagem. O estatuto preciso exige informações adicionais.",
        "pitfall": "Classificar todo camponês como servo ou todo pagamento como servidão, confundir vassalagem com trabalho camponês ou tratar economia rural como isolamento absoluto."
      },
      {
        "level": "intermediate",
        "title": "Poderes, Igreja, cidades e representações",
        "explanation": "O poder medieval podia combinar jurisdições e lealdades sobrepostas. Reis, nobres, bispos, mosteiros e comunidades urbanas possuíam recursos e atribuições diferentes. Nem todo senhor cunhava moeda ou exercia todos os níveis de justiça; esses direitos dependiam de concessões, disputas e costumes. Fragmentação não significa ausência total de autoridade régia, nem monarquia medieval equivale ao Estado nacional contemporâneo. No Ocidente latino, instituições eclesiásticas tinham papel religioso, cultural, econômico e político: administravam propriedades, produziam escritos e participavam de relações de poder. O clero não era um bloco sem conflitos, e sua importância na escrita não significa monopólio absoluto de toda cultura ou alfabetização. A representação das três ordens, associando oração, guerra e trabalho a funções complementares, podia justificar hierarquias. Ela é uma visão normativa: não um censo completo, nem prova de que todos aceitassem a posição atribuída. Mulheres, comerciantes, artesãos, pobres e grupos religiosos diversos não se deixam reduzir sem problemas a três caixas fixas. O crescimento de cidades, feiras e redes de comércio em partes da Europa transformou relações sem extinguir de imediato dependências rurais. Autonomias urbanas e associações profissionais resultaram de negociações e conflitos, sem constituir liberdade igual para todos. Contatos com o Mediterrâneo, o mundo islâmico e Bizâncio já existiam antes das cruzadas; elas não criaram o comércio do nada. O mundo medieval era mais amplo que o feudalismo do Ocidente latino, incluindo trajetórias que não cabem naquele modelo.",
        "steps": [
          "Identifique quais poderes cada agente possui no caso concreto.",
          "Analise funções e conflitos internos das instituições religiosas.",
          "Leia as três ordens como representação social com finalidade.",
          "Relacione campo, cidade e redes de contato sem ruptura automática."
        ],
        "example": "Situação didática autoral: uma abadia aparece como proprietária de terras e produtora de manuscritos. Isso permite discutir suas dimensões econômica e cultural, mas não prova que todos os habitantes fossem monges, que só religiosos soubessem escrever ou que a abadia controlasse toda a região sem oposição.",
        "pitfall": "Transformar as três ordens em fotografia completa da população, atribuir os mesmos direitos a todo senhor ou inventar desaparecimento imediato da servidão pelo crescimento urbano."
      },
      {
        "level": "advanced",
        "title": "Crises, negociações e crítica de fontes",
        "explanation": "Fomes, epidemias, guerras e conflitos sociais marcaram partes da Europa nos séculos XIV e XV com intensidade desigual. A Peste Negra reduziu populações e alterou relações entre terra, trabalho e demanda, mas não tornou automaticamente todos os sobreviventes livres ou prósperos. Em certas regiões, escassez de trabalhadores favoreceu reivindicações por remuneração e condições; autoridades e proprietários reagiram com coerção e regulação. O Estatuto dos Trabalhadores inglês de 1351, após a ordenação de 1349, procurou regular salários e mobilidade, entre outras medidas. Isso revela uma tentativa normativa, não prova de cumprimento integral ou vitória de um único grupo. Revoltas e negociações não tiveram as mesmas causas e resultados em toda parte. A substituição de serviços por pagamentos, o arrendamento, o trabalho assalariado e a persistência de dependências coexistiram. Pagar renda em dinheiro não transfere automaticamente propriedade da terra e não basta para classificar uma sociedade inteira como capitalista. Monarquias ampliaram capacidades fiscais e administrativas por caminhos diferentes; não se deve atribuir o mesmo imposto, moeda ou exército a todos os reinos. Relações servis foram enfraquecidas, mantidas ou reforçadas em diferentes trajetórias; falar em transição exige explicitar lugar, escala e conceito. Ao ler uma fonte, separe o que prescreve, descreve ou reivindica. Identifique autoria, finalidade, data, público e mediação de tradução. Um contrato pode mostrar obrigações de um caso, sem representar todos os contratos; uma lei pode evidenciar conflito sem garantir o resultado desejado. Exemplos inventados para ensinar não são testemunhos de época nem base para estimativas históricas de lucro, produtividade ou mortalidade.",
        "steps": [
          "Situe a transformação no lugar e período pertinentes.",
          "Relacione condições demográficas a respostas políticas e sociais diversas.",
          "Diferencie mudança de obrigação, posse e forma de trabalho.",
          "Examine natureza e limites da fonte antes de generalizar."
        ],
        "example": "Fonte de referência, resumida em redação própria: na carta de Fulbert de Chartres a Guilherme da Aquitânia, datada de 1020 e disponibilizada no Internet Medieval Sourcebook, há deveres de auxílio e conselho e reciprocidade do senhor. A carta orienta como o vínculo deveria funcionar; não demonstra que toda relação efetiva cumprisse aqueles deveres. Não é transcrição nem contrato inventado.",
        "pitfall": "Confundir norma com cumprimento, tratar arrendamento como prova suficiente de capitalismo ou calcular lucros históricos com produção, unidades e custos não fornecidos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quadro didático autoral, sem transcrição histórica: em uma exploração rural, determinada família deve trabalhar alguns dias na reserva do senhor e também entregar parte da colheita. O quadro não informa sua condição jurídica. Qual conclusão é sustentada?",
        "hint": "Identifique as prestações descritas e o limite dos dados; elas não demonstram sozinhas o estatuto pessoal.",
        "options": [
          "A família é necessariamente escravizada e pode ser vendida separadamente da terra.",
          "A família é necessariamente vassala militar, pois qualquer obrigação pressupõe homenagem.",
          "Há prestação de trabalho obrigatório e em produto; falta informação para determinar seu estatuto jurídico preciso.",
          "A família é proprietária plena da reserva e não tem obrigações perante o senhor."
        ],
        "correctIndex": 2,
        "solution": "C identifica trabalho devido ao senhor e entrega em produto sem inventar estatuto jurídico. A atribui escravização e regra de venda ausentes. B confunde prestação camponesa com vínculo vassálico militar. D contradiz os encargos descritos e inventa propriedade plena. A diversidade de condições exige mais dados sobre dependência pessoal, direitos e costumes; conhecer obrigações não autoriza reduzir todo caso à mesma categoria."
      },
      {
        "level": "intermediate",
        "prompt": "Formulação didática autoral: uma representação ideal divide a sociedade entre os que oram, os que guerreiam e os que trabalham, afirmando que cada função sustenta as demais. Qual análise histórica é adequada?",
        "hint": "Uma representação que atribui funções pode justificar uma ordem social; não precisa ser um levantamento completo das práticas e grupos.",
        "options": [
          "É uma visão normativa que pode legitimar hierarquias, sem provar que toda a população caiba integralmente em três grupos.",
          "É um censo preciso de toda Europa e demonstra que não existiam comerciantes ou artesãos.",
          "É prova de que todos os camponeses aceitaram voluntariamente cada encargo sem conflitos.",
          "É um programa de igualdade jurídica contemporânea que elimina privilégios por nascimento."
        ],
        "correctIndex": 0,
        "solution": "A distingue representação ideal de descrição completa e reconhece uma possível função de legitimação. B transforma esquema em censo e apaga grupos. C supõe consentimento e ausência de conflito sem evidência. D projeta igualdade contemporânea sobre um discurso que distribui funções e posições hierárquicas. Analisar a representação não exige tomá-la como verdadeira nem presumir que todos a rejeitassem de modo uniforme."
      },
      {
        "level": "advanced",
        "prompt": "Síntese autoral baseada no registro do National Archives sobre o Estatuto dos Trabalhadores inglês de 1351: após a peste, autoridades buscaram limitar remuneração, regular deslocamentos e impor emprego a trabalhadores considerados aptos. Qual interpretação preserva o contexto e o limite da evidência?",
        "hint": "A norma permite examinar objetivos e conflitos; sozinha não prova aplicação integral nem consequência uniforme.",
        "options": [
          "A lei prova que a peste melhorou igualmente a vida de todos e aboliu toda dependência.",
          "O estatuto demonstra que não havia contratação remunerada nem tentativa de controlar salários.",
          "As medidas provam cumprimento absoluto e salários idênticos em toda Europa por vários séculos.",
          "A regulação revela reação à disputa por trabalho na Inglaterra, sem demonstrar por si só cumprimento integral ou fim universal da servidão."
        ],
        "correctIndex": 3,
        "solution": "D relaciona o registro a conflitos sobre trabalho no contexto inglês e distingue intenção normativa de resultado. A converte transformação desigual em benefício universal e inventa abolição total. B nega justamente os salários e a regulação descritos. C amplia indevidamente lugar e tempo e presume cumprimento perfeito. A fonte permite estudar tentativas de controle, mas efeitos concretos exigem outras evidências, como registros locais e práticas de contratação."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Relevo, solos e recursos naturais",
    "objective": "Relacionar relevo, formação e propriedades dos solos, distinguir processos erosivos e interpretar conservação e estimativas de perda sem confundir modelo, medição e exportação de sedimentos.",
    "prerequisites": [
      "Noções de intemperismo, clima e vegetação",
      "Leitura de unidades de área e taxas anuais",
      "Multiplicação, proporção e média ponderada"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Relevo e pedogênese: processos e diagnóstico",
        "explanation": "O relevo reúne formas da superfície produzidas por processos internos e externos, como tectonismo, intemperismo, erosão e deposição. Planalto não é sinônimo de terreno perfeitamente plano acima de uma altitude fixa, nem depressão exige estar abaixo do nível do mar: classificações usam posição relativa, formas e processos. Planícies estão associadas ao predomínio de acumulação sedimentar no recorte considerado. As formas atuais podem envolver histórias longas e retrabalhamento recente. Intemperismo altera e desagrega materiais no local; erosão envolve desprendimento e transporte, por água, vento e outros agentes. Pedogênese integra transformações minerais, matéria orgânica, organismos, circulação de água e organização de horizontes. Clima, organismos, relevo, material de origem e tempo interagem; não existe correspondência automática de um clima ou uma rocha a uma única classe de solo. Basalto, floresta e clima úmido não bastam para diagnosticar Latossolo. No SiBCS, a classificação depende de atributos e horizontes diagnósticos, conforme os critérios do sistema. B latossólico, B textural e B nítico são conceitos distintos; não se deve atribuir simplesmente um mesmo B textural a todos os Latossolos, Nitossolos e Argissolos. A cor superficial ou a profundidade isolada também não substitui exame de perfil e análises. Nem todo solo tem uma sequência completa e idêntica A, B, C, e sedimentos recentes podem apresentar estratificação sem que cada camada corresponda a um horizonte pedogenético. Conhecer o ambiente orienta hipóteses, enquanto diagnóstico exige evidências pertinentes.",
        "steps": [
          "Diferencie forma de relevo, posição relativa e processo predominante.",
          "Separe alteração local de remoção e transporte.",
          "Relacione os fatores de formação sem determinismo de clima ou rocha.",
          "Use atributos diagnósticos e perfil para classificar, reconhecendo dados ausentes."
        ],
        "example": "Cenário autoral: dois pontos sobre a mesma rocha basáltica e no mesmo clima apresentam perfis com espessuras e drenagem diferentes. Não se conclui que ambos pertençam à mesma ordem só pela rocha e pelo clima compartilhados. A comparação pede observar horizontes e atributos diagnósticos de cada perfil, além da posição na paisagem.",
        "pitfall": "Diagnosticar uma ordem de solo só por basalto, clima ou cor, confundir intemperismo com transporte ou reduzir planalto e depressão a limites fixos de altitude."
      },
      {
        "level": "intermediate",
        "title": "Propriedades, erosão e conservação de recursos",
        "explanation": "Textura descreve proporções de areia, silte e argila; estrutura se refere à organização das partículas em agregados. Porosidade, continuidade dos poros, compactação, matéria orgânica e mineralogia influenciam água, ar e resistência à erosão. Um solo argiloso bem agregado pode ter boa infiltração; não se deduz impermeabilidade apenas da textura. Fertilidade também não se determina só pela cor ou pela proporção de argila: requer propriedades químicas, biológicas e a finalidade considerada. Impacto de gotas, escoamento entre sulcos e fluxo concentrado podem remover solo. Sulcos e voçorocas não são etapas obrigatórias de uma mesma sequência em toda vertente; voçorocas podem ser estabilizadas e recuperadas com intervenções adequadas, embora haja perdas difíceis de reverter. Erosão eólica e movimentos de massa têm mecanismos diferentes da erosão hídrica em lâmina e sulcos. Cobertura do solo, rotação, menor revolvimento, cultivo em nível e terraços podem compor conservação, conforme condições locais e projeto. Nenhuma prática garante sozinha ausência de erosão, e valores de redução não devem ser inventados como se fossem resultados de campo. Solo, água, biodiversidade e recursos minerais têm ritmos de reposição diferentes. Formação de solo pode ser lenta diante de perdas aceleradas, limitando sua renovação na escala de vida humana; restaurar cobertura não recompõe instantaneamente todo perfil perdido. Uma bacia conecta usos e efeitos a montante e jusante. Planejar envolve observar infiltração, escoamento, qualidade da água, uso da terra e impactos sociais, sem presumir que uma estimativa única certifique conservação integral.",
        "steps": [
          "Analise textura junto com estrutura e poros, evitando diagnóstico por uma variável.",
          "Identifique o processo erosivo antes de selecionar uma intervenção.",
          "Combine práticas conforme o sistema e reconheça necessidade de monitoramento.",
          "Considere escala temporal e conexão entre solo, água e demais recursos."
        ],
        "example": "Cenário autoral: duas amostras têm textura argilosa, mas uma apresenta agregados estáveis e poros contínuos e a outra está compactada. A textura semelhante não permite atribuir igual infiltração às duas. Medidas de campo podem testar a diferença; o cenário não fornece taxas reais nem permite escolher uma dose de correção agrícola.",
        "pitfall": "Tratar todo solo argiloso como impermeável, declarar voçoroca inevitavelmente irreversível ou apresentar prática conservacionista como garantia sem verificar condições."
      },
      {
        "level": "advanced",
        "title": "Estimativa de perda e limites da escala",
        "explanation": "Na formulação multiplicativa de USLE/RUSLE usada neste exercício, A = R × K × LS × C × P estima perda média anual por erosão hídrica em lâmina e sulcos para as condições representadas. R descreve erosividade, K erodibilidade, LS comprimento e declividade, C cobertura e manejo, e P práticas de suporte. Adotando R em MJ·mm/(ha·h·ano) e K em t·h/(MJ·mm), com LS, C e P adimensionais, A fica em t/ha/ano. Unidades compatíveis são essenciais; não se combinam valores de sistemas diferentes sem conversão. Os fatores precisam de métodos, calibração e dados locais, não são constantes universais de uma classe de solo ou bioma. LS não cresce necessariamente de forma linear com comprimento nem por uma única lei exponencial de declividade. O software RUSLE2 tem procedimentos mais detalhados; a multiplicação escolar não é uma execução desse programa. O resultado não prevê sozinho uma chuva específica, voçorocas, erosão de margens, vento ou deslizamentos. Tampouco é automaticamente a massa de sedimento entregue na saída de uma bacia: deposição e conectividade alteram o transporte. Para áreas com taxas diferentes, massa anual estimada é soma de taxa vezes área e a taxa média é ponderada por área, não soma ou média simples sem pesos. Comparar A a um valor T fornecido pode servir ao exercício, mas T não é tolerância universal, comprovação de solo saudável ou autorização ambiental. Uma comparação de cenários depende de manter ou alterar explicitamente os fatores e não substitui medição ou planejamento técnico.",
        "steps": [
          "Confira processo, formulação e unidades dos fatores.",
          "Multiplique os valores fornecidos sem inventar calibração regional.",
          "Para várias áreas, some massas e use média ponderada das taxas.",
          "Separe estimativa de erosão, comparação dada e exportação real de sedimentos."
        ],
        "example": "Experimento algébrico autoral: mantendo R, K, LS e P fixos no modelo multiplicativo, reduzir C à metade reduz A à metade. Isso é relação matemática sob as premissas, não medição de que qualquer prática reduz exatamente metade da erosão real. Para converter essa taxa em massa, ainda é preciso conhecer a área representada.",
        "pitfall": "Somar taxas de áreas diferentes, aplicar fatores tabelados sem contexto, chamar a conta de simulação RUSLE2 ou igualar perda na vertente a exportação na saída da bacia."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Observação didática autoral: após alteração química de uma rocha, parte do material permanece no local; depois, água de chuva remove partículas e as deposita em uma área mais baixa. Qual análise distingue os processos sem inventar classificação do solo?",
        "hint": "Alteração no local, remoção e transporte e acumulação podem integrar a história da mesma paisagem.",
        "options": [
          "Intemperismo só ocorre quando todo material é transportado para outro lugar.",
          "Há intemperismo, seguido de erosão e deposição; o relato não determina sozinho a ordem do solo.",
          "A deposição prova que o solo é Latossolo e que não houve erosão a montante.",
          "A água transforma automaticamente todo depósito em solo com horizontes A, B e C completos."
        ],
        "correctIndex": 1,
        "solution": "B diferencia alteração no local, remoção e transporte e deposição sem deduzir uma classe pedológica não diagnosticada. A confunde intemperismo com transporte. C atribui Latossolo sem perfil e nega a erosão narrada. D trata deposição como formação instantânea de horizontes completos. A sequência foi dada neste cenário, mas não é uma cronologia obrigatória de todos os solos e paisagens."
      },
      {
        "level": "intermediate",
        "prompt": "Cálculo autoral em unidades compatíveis na formulação multiplicativa de RUSLE: R = 6500, K = 0,022, LS = 2,0, C = 0,04 e P = 0,5. Compare a estimativa A ao valor didático T = 10 t/ha/ano, sem tratá-lo como limite universal. Qual resultado corresponde aos dados?",
        "hint": "Use A = R × K × LS × C × P; compare apenas ao valor fornecido, sem afirmar que isso certifica conservação integral.",
        "options": [
          "11,44 t/ha/ano; acima do valor de comparação dado.",
          "2,86 t/ha/ano; abaixo do valor de comparação dado.",
          "5,72 t/ha/ano; abaixo do valor de comparação dado.",
          "22,88 t/ha/ano; acima do valor de comparação dado."
        ],
        "correctIndex": 2,
        "solution": "C: 6500·0,022·2,0·0,04·0,5 = 5,72 t/ha/ano e 5,72 < 10. A omite o fator P = 0,5. B divide o resultado correto por dois novamente. D multiplica o resultado correto por quatro sem apoio nos dados. Esses erros aritméticos não correspondem automaticamente a tipos reais de manejo. Estar abaixo do valor didático dado não comprova ausência de outros processos erosivos nem qualidade integral do solo."
      },
      {
        "level": "advanced",
        "prompt": "Agregação autoral de estimativas médias no mesmo período: zona X tem 10 ha com perda estimada de 4 t/ha/ano; zona Y tem 30 ha com perda estimada de 12 t/ha/ano. Considere cada taxa representativa de sua zona. Sem dados de deposição ou transporte até a saída, qual conclusão é correta?",
        "hint": "Calcule taxa vezes área em cada zona, some as massas e divida pela área total; exportação na saída exige outras informações.",
        "options": [
          "400 t/ano no conjunto e média 10 t/ha/ano; não determina o sedimento exportado na saída.",
          "400 t/ano no conjunto e média 8 t/ha/ano; é a média simples correta para áreas diferentes.",
          "640 t/ano no conjunto e média 16 t/ha/ano; basta somar as duas taxas.",
          "400 t/ano no conjunto e média 10 t/ha/ano; exatamente 400 t/ano necessariamente saem da bacia."
        ],
        "correctIndex": 0,
        "solution": "A: X contribui com 10·4 = 40 t/ano e Y com 30·12 = 360 t/ano; total 400 e área total 40 ha, logo média ponderada 10 t/ha/ano. B usa média simples (4 + 12)/2 = 8, ignorando pesos. C soma taxas e multiplica indevidamente 16 pela área total. D acerta a agregação, mas confunde erosão estimada nas zonas com exportação na saída. Deposição, fontes não representadas e conectividade exigem dados próprios."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Ética, moral e justiça",
    "objective": "Distinguir descrição de costumes e justificação normativa, comparar critérios de consequências, dever e virtude e analisar princípios de justiça sem aplicar teorias por rótulos ou contagem de beneficiados.",
    "prerequisites": [
      "Noções básicas de argumentação filosófica",
      "Conhecimento geral de história das ideias ocidentais",
      "Familiaridade com conceitos de norma, valor e dever"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Costumes, justificação e critérios de justiça",
        "explanation": "Ética e moral possuem usos diferentes e, em muitos textos, aparecem como sinônimos. Uma distinção didática possível chama moral ao conjunto de normas, valores e avaliações de um grupo e ética à reflexão crítica sobre sua justificação. Essa convenção ajuda nesta aula, mas não é uma regra linguística universal nem uma fronteira que todo filósofo sempre utilizou. Uma norma pode ser defendida e descumprida; moral não equivale simplesmente a tudo que as pessoas fazem. Descrever que um costume existe é diferente de justificar que deve ser seguido. Antiguidade, aprovação majoritária e legalidade não bastam sozinhas como demonstração de correção moral: é preciso examinar as razões e os critérios adotados. Isso também não significa que toda norma social seja errada ou que a reflexão se reduza a gosto privado. Uma argumentação apresenta premissas, considera objeções e procura coerência. Justiça pode envolver distribuição de recursos e encargos, reconhecimento, procedimentos, direitos e reparação, conforme a teoria e o problema. Igualdade, necessidade, contribuição e mérito são critérios que precisam de definição e justificativa; não se escolhe um automaticamente pelo nome. Tratar pessoas igualmente pode requerer reconhecer diferenças relevantes, sem tornar qualquer diferença uma justificativa de privilégio. Cumprimento de uma regra e legitimidade da própria regra são perguntas relacionadas, mas distintas. Na leitura filosófica, esclareça o vocabulário empregado pelo autor e se a conclusão é descritiva, normativa ou uma crítica a outro argumento.",
        "steps": [
          "Identifique como o texto define ética e moral, sem impor uma convenção universal.",
          "Separe descrição de prática, norma defendida e justificativa.",
          "Explicite o critério de justiça relevante e suas razões.",
          "Examine coerência, consequências e objeções sem reduzir tudo a preferência."
        ],
        "example": "Situação autoral: uma biblioteca tem o costume de pedir a devolução de livros em determinada data. Descrever que as pessoas seguem ou não o prazo é uma questão de prática; discutir se o prazo distribui acesso de forma justificável exige razões sobre disponibilidade, necessidade e alternativas. A existência do costume não encerra a avaliação.",
        "pitfall": "Afirmar que ética e moral nunca podem ser sinônimos, confundir norma com todo comportamento observado ou tratar legalidade como prova suficiente de justiça."
      },
      {
        "level": "intermediate",
        "title": "Consequências, dever e formação do caráter",
        "explanation": "Teorias éticas oferecem critérios de justificação que não devem ser confundidos com palavras de aprovação. No utilitarismo clássico de Bentham e Mill, a avaliação se vincula à felicidade ou ao bem-estar dos afetados de modo imparcial. Não é simplesmente fazer o que agrada à maioria nem contar pessoas beneficiadas: intensidade, duração, efeitos adversos e incerteza importam; Mill também distingue qualidades de prazeres. Suas discussões sobre justiça e direitos não se resumem a autorizar qualquer agressão à minoria por popularidade. Na ética de Kant, a máxima da ação deve poder ser querida como lei universal, e a humanidade deve ser tratada como fim, nunca meramente como meio. Isso não proíbe toda cooperação instrumental: ao contratar um serviço, pessoas podem colaborar para fins recíprocos sem reduzir uma delas a mero instrumento. Autonomia não equivale a fazer qualquer coisa desejada, e agir conforme o dever por interesse não é idêntico a agir por dever. Na ética aristotélica, virtudes se desenvolvem por práticas e escolhas orientadas pela razão prática; não são só traços inatos ou obediência mecânica. O meio relativo à situação não é média aritmética nem moderação de toda ação, pois há ações censuradas em si no argumento do autor. Aristóteles distingue formas de justiça, incluindo distribuição e correção, e sua discussão histórica não equivale a um programa contemporâneo de direitos iguais. Comparar teorias exige reconstruir razões e diferenças internas; não significa declarar que toda teoria precisa ser misturada com as demais para valer.",
        "steps": [
          "Identifique o fundamento do julgamento, além do rótulo favorável.",
          "Diferencie bem-estar agregado de votação e contagem de beneficiados.",
          "Examine máxima, dever e respeito à pessoa no argumento kantiano.",
          "Relacione escolha e formação de caráter na perspectiva aristotélica."
        ],
        "example": "Dilema autoral: uma pessoa cogita prometer ajuda sem pretender cumprir, para obter um favor. Uma análise kantiana examina a máxima de prometer falsamente e o respeito ao outro como agente. Isso é diferente de perguntar apenas se a mentira, nesse caso, gera mais vantagens imediatas para quem a conta. O cenário não reproduz fala de um docente nem julga toda promessa de qualquer contexto.",
        "pitfall": "Confundir utilidade com maioria, tratar pessoa como fim como proibição de todo serviço ou transformar a virtude aristotélica em média numérica universal."
      },
      {
        "level": "advanced",
        "title": "Justiça como equidade e deliberação fundamentada",
        "explanation": "Rawls propõe justiça como equidade para a estrutura básica da sociedade. A posição original e o véu de ignorância são dispositivos hipotéticos de representação, não um contrato histórico ou uma votação real em que todos esquecem todos os fatos. As partes desconhecem aspectos particulares que poderiam favorecer sua posição, mas dispõem de conhecimentos gerais pertinentes. Em sua formulação dos princípios, liberdades básicas iguais têm prioridade; desigualdades sociais e econômicas devem se ligar a posições abertas sob igualdade equitativa de oportunidades e favorecer ao máximo os menos favorecidos, com as condições da teoria. A igualdade equitativa de oportunidades tem prioridade sobre o princípio da diferença. Logo, melhorar a renda dos menos favorecidos não basta para justificar perda de liberdades básicas ou oportunidade apenas nominal. O princípio da diferença não significa igualdade numérica em toda distribuição nem simples maximização da soma social. Na razão pública, Rawls aborda a justificação de questões constitucionais essenciais e de justiça básica em uma democracia pluralista. Não é exigência de banir religião de toda conversa, nem de substituir deliberação por consenso científico; razões e evidências precisam ser articuladas a valores políticos e reciprocidade no âmbito pertinente. Posição original e razão pública têm funções diferentes e não devem virar a mesma receita para toda decisão cotidiana. Em questões de recursos, ambiente ou gerações futuras, esclareça quem é afetado, quais fatos são conhecidos e quais pressupostos normativos sustentam a escolha. Discordância razoável não prova que todas as respostas sejam igualmente justificadas, e evidências empíricas não determinam sozinhas o que deve contar como justo.",
        "steps": [
          "Identifique o objeto institucional e o caráter hipotético da posição original.",
          "Considere liberdades, oportunidades e diferença com suas prioridades.",
          "Distinga razão pública de contrato hipotético e de censura geral a doutrinas.",
          "Explicite fatos, critérios e objeções ao justificar uma decisão."
        ],
        "example": "Comparação autoral: duas regras institucionais oferecem as mesmas liberdades formais, mas uma mantém barreiras sociais que impedem acesso efetivo a posições. A avaliação rawlsiana não termina na frase as vagas estão abertas: igualdade equitativa de oportunidades exige examinar condições que vão além da proibição nominal de discriminação. Isso não equivale a garantir resultados idênticos a cada pessoa.",
        "pitfall": "Omitir igualdade equitativa de oportunidades, comprar liberdades com ganho agregado ou aplicar o véu de ignorância como votação real sem conhecimento algum."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cenário autoral: uma associação defende uma regra apenas porque ela é antiga e amplamente aceita. Considerando a distinção didática adotada nesta aula, qual avaliação é adequada?",
        "hint": "Reconhecer existência e aceitação de uma norma não substitui examinar sua justificação, e isso não torna toda tradição incorreta.",
        "options": [
          "A aceitação prova automaticamente que a regra é justa e dispensa razões.",
          "Por ser antiga, a regra é necessariamente injusta e deve ser rejeitada sem exame.",
          "Refletir criticamente consiste apenas em escolher o gosto individual mais intenso.",
          "O costume é um dado relevante, mas sua justificação pode ser examinada por argumentos e objeções."
        ],
        "correctIndex": 3,
        "solution": "D separa descrição e aceitação de uma norma de sua justificação. A toma popularidade como prova suficiente de justiça. B troca esse erro por rejeição automática de toda tradição. C reduz reflexão a preferência sem razões. A distinção didática não impõe que ética e moral nunca sejam sinônimos em outros textos, nem afirma que uma norma aceita seja sempre incorreta."
      },
      {
        "level": "intermediate",
        "prompt": "Escolha autoral para estudo: uma comunidade compara ampliar uma praça para muitas pessoas com melhoria pequena por pessoa ou adaptar um espaço de convivência para menos pessoas com melhoria maior por pessoa. Não há medidas dos efeitos ou de sua duração. Qual procedimento se aproxima do critério utilitarista, sem inventar qual projeto vence?",
        "hint": "Quantidade de pessoas é uma informação, mas não fornece sozinha a comparação de bem-estar de todos os afetados.",
        "options": [
          "Escolher sempre o projeto com mais pessoas, independentemente da intensidade e dos prejuízos.",
          "Comparar imparcialmente benefícios e prejuízos esperados, considerando magnitude, duração e incerteza, sem decidir só pelo número de pessoas.",
          "Escolher o projeto preferido pelo decisor, porque utilidade significa seu ganho particular.",
          "Dividir recursos igualmente em todo caso, porque utilitarismo exige igualdade numérica de toda distribuição."
        ],
        "correctIndex": 1,
        "solution": "B expressa a orientação às consequências para os afetados sem transformar contagem em resultado suficiente. A ignora magnitude e prejuízos; mais pessoas com ganho pequeno não garantem maior bem-estar total. C confunde imparcialidade utilitarista com interesse exclusivo do decisor. D impõe uma regra igualitária automática que não define o critério utilitarista. Sem dados adicionais, não se deduz qual projeto produz o melhor resultado."
      },
      {
        "level": "advanced",
        "prompt": "Proposta institucional autoral: uma reforma alega melhorar a renda dos menos favorecidos, mas restringe liberdades básicas de um grupo e mantém acesso a posições aberto apenas no papel, com barreiras de oportunidade. Qual análise é compatível com as prioridades da justiça como equidade de Rawls?",
        "hint": "O princípio da diferença não substitui a prioridade das liberdades básicas nem da igualdade equitativa de oportunidades.",
        "options": [
          "A melhora de renda torna a reforma automaticamente justa, quaisquer que sejam as outras condições.",
          "A reforma só precisa obter maioria simples; direitos e oportunidades não integram a teoria.",
          "A alegação de ganho de renda não basta: devem ser respeitadas liberdades básicas iguais e igualdade equitativa de oportunidades, com suas prioridades.",
          "Justiça exige apenas que todas as pessoas recebam valor monetário idêntico em toda situação."
        ],
        "correctIndex": 2,
        "solution": "C considera a articulação dos princípios e suas prioridades. A transforma o princípio da diferença em autorização para sacrificar condições anteriores. B reduz justiça a decisão majoritária. D confunde a teoria com igualdade aritmética universal. A questão não decide validade jurídica de uma reforma real: examina a coerência do argumento com a concepção filosófica indicada e com os dados hipotéticos fornecidos."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Trabalho e transformações produtivas",
    "objective": "Distinguir trabalho e emprego, comparar formas de organização produtiva e interpretar tecnologia, controle e produtividade sem determinismo ou inferências além dos dados.",
    "prerequisites": [
      "Noções de relações sociais e divisão de tarefas",
      "Leitura de descrições de processos de produção",
      "Razão, porcentagem e comparação de períodos"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Trabalho, emprego e relações sociais",
        "explanation": "Trabalho é mais amplo que emprego remunerado. Produzir bens e prestar serviços para outras pessoas ou para uso próprio pode incluir cuidado e tarefas domésticas sem pagamento. Em estatísticas de trabalho, emprego designa especificamente atividades por remuneração ou lucro, segundo definições e período de referência; isso não significa que quem esteja fora dessa categoria não realize trabalho socialmente necessário. Uma pessoa pode combinar atividades remuneradas e não remuneradas. Não se infere desemprego apenas por observar cuidado doméstico: procura e disponibilidade para emprego e outros critérios precisam ser considerados na classificação pertinente. A divisão social do trabalho distribui atividades entre grupos e ocupações; a divisão técnica organiza tarefas dentro de um processo. Elas não são necessariamente independentes de hierarquias de classe, gênero, raça e poder, mas diferenças sociais não podem ser diagnosticadas por um caso sem contexto. Na análise de Marx, força de trabalho é a capacidade de trabalhar, enquanto trabalho é sua atividade efetiva; os meios e objetos de trabalho integram o processo produtivo. Quem possui ou controla esses meios e quem decide ritmos, objetivos e destino dos produtos são perguntas sobre relações sociais, não apenas sobre ferramentas. Trabalho assalariado, produção autônoma, cooperação e atividades não remuneradas podem coexistir. Seu valor social não se resume ao salário recebido. Para analisar uma descrição, identifique atores, recursos, formas de remuneração e controle antes de aplicar um rótulo a toda a sociedade.",
        "steps": [
          "Identifique a atividade realizada, inclusive trabalho não remunerado.",
          "Diferencie emprego e demais formas de trabalho no conceito usado.",
          "Separe divisão de ocupações e divisão de tarefas no processo.",
          "Examine controle, propriedade e remuneração com dados suficientes."
        ],
        "example": "Situação autoral: duas oficinas usam ferramentas semelhantes, mas em uma os trabalhadores decidem coletivamente sobre produção e distribuição e, em outra, um proprietário contrata mão de obra e dirige o processo. A semelhança técnica não prova identidade das relações de propriedade e controle. O exemplo não informa desempenho ou renda de nenhuma delas.",
        "pitfall": "Equiparar falta de salário a ausência de trabalho, inferir desemprego sem seus critérios ou explicar relações sociais apenas pelo tipo de ferramenta."
      },
      {
        "level": "intermediate",
        "title": "Taylorismo, fordismo e produção enxuta",
        "explanation": "Taylor apresentou na administração científica a análise sistemática de tarefas, seleção e treinamento e maior separação entre planejamento gerencial e execução. Sua proposta de eficiência e cooperação deve ser lida também como formulação de um administrador, não como prova de que todos os trabalhadores se beneficiaram igualmente. Taylorismo não é simplesmente qualquer uso de máquina nem exige por definição uma linha móvel. No fordismo, padronização, peças intercambiáveis, divisão de operações e fluxo contínuo de montagem se articularam à produção em massa. A linha móvel desenvolvida na Ford em 1913 levou o trabalho até postos especializados e contribuiu para controlar a cadência; isso não autoriza dizer que Henry Ford inventou toda divisão do trabalho ou toda montagem já existente. No sistema Toyota, just-in-time busca produzir o necessário no momento e quantidade pertinentes ao fluxo, com coordenação entre etapas. Não significa estoque absolutamente zero em qualquer operação: a própria descrição da empresa prevê estoques mínimos e reposição. Jidoka envolve detectar anormalidades e interromper processos para tratar problemas; não é automação sem participação humana. Essas estratégias podem combinar padronização, equipes e fornecedores, mas autonomia, intensidade e distribuição de ganhos dependem da organização real. Terceirização não é sinônimo de just-in-time e não decorre obrigatoriamente de toda tecnologia. Modelos coexistem, são adaptados e sofrem resistência e negociação; não formam etapas universais que se substituem completamente na mesma data em todos os países e setores.",
        "steps": [
          "Identifique planejamento, execução e controle no processo descrito.",
          "Diferencie análise de tarefas e organização de uma linha móvel.",
          "Explique just-in-time e jidoka sem extremos de estoque zero e ausência humana.",
          "Compare modelos como formas adaptáveis, examinando efeitos e conflitos."
        ],
        "example": "Cenário autoral: uma etapa retira um pequeno lote da anterior, que repõe o consumido conforme o fluxo; se surgir defeito, a operação pode ser interrompida para investigação. A descrição ajuda a discutir reposição e detecção de problemas sem afirmar que não haja estoque ou que trabalhadores controlem todas as decisões estratégicas.",
        "pitfall": "Reduzir taylorismo a máquina, atribuir a Ford invenção de toda especialização, confundir just-in-time com estoque sempre zero ou presumir autonomia plena pela existência de equipes."
      },
      {
        "level": "advanced",
        "title": "Plataformas, produtividade e limites da evidência",
        "explanation": "Mudanças digitais podem reorganizar distribuição de tarefas, avaliação, remuneração e vigilância. Gestão algorítmica usa procedimentos computacionais para coordenar trabalho e aparece em plataformas e também em empresas tradicionais. Flexibilidade de acesso a tarefas não demonstra ausência de controle; avaliações, metas, preços e acesso a oportunidades podem ser definidos ou mediados por sistemas. A situação jurídica de cada relação exige contexto e regras aplicáveis; não se declara que todo trabalhador de aplicativo tem o mesmo vínculo em todo país. Informalidade, precariedade e trabalho por plataforma são conceitos relacionados em certos estudos, mas não sinônimos automáticos. Indicadores devem informar população, período, definição e método. Produtividade física do trabalho pode ser medida como unidades produzidas por trabalhador ou por hora, com limites de comparabilidade. Produção total maior não implica aumento igual dessa razão: o denominador e a jornada importam. Mesmo com horas comparáveis, uma mudança pode envolver equipamento, materiais, organização, qualidade dos produtos ou composição de tarefas. A razão não mede sozinha esforço pessoal, salário, bem-estar ou causa do resultado. Também não prova que ganhos tenham sido distribuídos igualmente. Na análise marxiana, mais-valia se relaciona ao valor criado pelo trabalho além do valor da força de trabalho; não deve ser identificada automaticamente com qualquer diferença entre receita e salário ou com um indicador físico de produtividade. Tecnologia pode eliminar, modificar e criar tarefas, mas dados de uma unidade em dois momentos não demonstram tendência universal de empregos. Uma análise fundamentada combina indicadores com condições de trabalho, controle, ação coletiva e instituições.",
        "steps": [
          "Descreva os mecanismos de coordenação e avaliação, além da etiqueta digital.",
          "Defina numerador, denominador, período e condições de comparabilidade.",
          "Calcule produção e produtividade sem confundi-las.",
          "Separe resultado observado, causa investigada e distribuição dos ganhos."
        ],
        "example": "Microcaso autoral: uma plataforma permite escolher horário de conexão, mas distribui tarefas por pontuação e pode alterar prioridades segundo avaliações. Há alguma escolha de horário e também coordenação externa. A descrição não informa renda líquida, vínculo jurídico ou efeitos em toda a população; isso exigiria outros dados e critérios.",
        "pitfall": "Chamar toda flexibilidade de autonomia plena, converter produção em salário ou explicar causalmente uma mudança só porque dois indicadores variaram juntos."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cenário autoral: Rosa prepara refeições e cuida de uma pessoa de sua própria família sem pagamento por essas atividades. O texto não informa outras ocupações, procura de emprego ou disponibilidade. Qual conclusão é sustentada?",
        "hint": "A atividade de cuidado pode ser trabalho sem constituir emprego por remuneração; não há dados para classificar toda a situação ocupacional de Rosa.",
        "options": [
          "Ela não realiza trabalho, pois nenhuma atividade sem salário pode ser trabalho.",
          "As atividades descritas são trabalho não remunerado; não se determina apenas por elas toda sua situação de emprego ou desemprego.",
          "Ela está necessariamente desempregada, mesmo sem informação sobre procura e disponibilidade.",
          "Toda atividade doméstica deve ser classificada como emprego assalariado formal."
        ],
        "correctIndex": 1,
        "solution": "B reconhece produção de serviços e cuidado sem remuneração e o limite de informação sobre Rosa. A reduz trabalho a salário. C infere desemprego sem os critérios e sem saber se ela exerce outra atividade. D inventa vínculo formal e remuneração que o cenário nega. A distinção estatística não desvaloriza cuidado nem presume que todas as atividades de uma pessoa pertençam à mesma categoria."
      },
      {
        "level": "intermediate",
        "prompt": "Processo autoral: uma fábrica padroniza um produto e usa peças intercambiáveis; o conjunto em montagem se desloca por uma linha e cada posto executa uma operação especializada. Qual análise identifica essa organização sem inventar seus efeitos sociais?",
        "hint": "Observe a combinação de padronização, divisão de operações e fluxo de montagem; o caso não informa salários ou aceitação dos trabalhadores.",
        "options": [
          "É produção artesanal integral por cada pessoa, sem divisão técnica de operações.",
          "É prova de just-in-time, porque qualquer linha móvel necessariamente elimina estoques.",
          "É uma organização associada ao fordismo; seus dados não bastam para concluir ganhos iguais ou ausência de conflito.",
          "É uma estrutura sem controle de ritmo, pois a linha móvel garante autonomia individual ilimitada."
        ],
        "correctIndex": 2,
        "solution": "C identifica a combinação associada ao fordismo e mantém limites da descrição. A contradiz os postos especializados. B toma linha móvel como prova de just-in-time e acrescenta estoque zero. D ignora que a linha pode organizar cadência e relações de controle. A identificação de um modelo não demonstra que as condições de trabalho, salários ou ganhos sejam iguais em toda fábrica que o adote."
      },
      {
        "level": "advanced",
        "prompt": "Dados didáticos fictícios da mesma unidade, em períodos comparáveis e com a mesma carga horária por trabalhador: antes: 1800 peças e 120 trabalhadores; depois: 2400 peças e 100 trabalhadores. Compare a produtividade física por trabalhador no período. Não há dados de salário, esforço ou decomposição de causas.",
        "hint": "Divida produção pelo número de trabalhadores em cada período e calcule a variação sobre a razão inicial, não sobre a produção total.",
        "options": [
          "De 15 para 24 peças por trabalhador no período: aumento de 60%; prova de que todos os salários subiram 60%.",
          "De 15 para 24 peças por trabalhador no período: aumento de 33,3%; igual ao crescimento da produção total.",
          "De 120 para 100 peças por trabalhador no período: queda de 16,7%; basta comparar a quantidade de trabalhadores.",
          "De 15 para 24 peças por trabalhador no período: aumento de 60%; isso não mede sozinho esforço, salário ou causa da mudança."
        ],
        "correctIndex": 3,
        "solution": "D: antes, 1800/120 = 15 peças por trabalhador; depois, 2400/100 = 24. A variação é (24 − 15)/15 = 0,60, ou 60%. A acerta a razão e a variação, mas inventa aumento salarial. B confunde crescimento da produção total (600/1800 ≈ 33,3%) com crescimento da produtividade. C usa número de trabalhadores no lugar da razão. Com jornadas comparáveis, a diferença continua sem provar intensidade individual, distribuição de ganhos ou qual fator causou a mudança."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Elementos visuais: ponto, linha, cor, forma e textura",
    "objective": "Reconhecer ponto, linha, cor, forma e textura, explicar suas relações na composição e sustentar interpretações com características e contexto, distinguindo descrição, hipótese e intenção documentada.",
    "prerequisites": [
      "Noções básicas de observação visual",
      "Familiaridade com vocabulário descritivo simples (grande, pequeno, claro, escuro, liso, rugoso)"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Marcas, formas, cores e superfícies",
        "explanation": "Elementos visuais são recursos para descrever e construir imagens e objetos; diferentes propostas pedagógicas os agrupam de maneiras distintas. Nesta aula destacamos ponto, linha, cor, forma e textura, sem afirmar que toda obra se reduza obrigatoriamente a cinco unidades isoladas. Um ponto visual é uma marca localizada e percebida como unidade em relação ao campo: pode ter tamanho, formato e material. Não se confunde com o ponto geométrico ideal sem dimensão. Uma linha pode ser traço, contorno ou direção sugerida; varia em espessura, continuidade, curvatura e orientação. A metáfora de ponto em movimento ajuda a construí-la, mas não define a origem de toda linha de toda obra. Forma pode designar a organização de uma figura; distinguimos figuras bidimensionais e volumes tridimensionais quando isso ajuda a análise. Contornos podem ser produzidos por traço ou por encontro de áreas de cor. Textura tátil é qualidade física da superfície e textura visual é a aparência representada ou percebida; uma fotografia pode mostrar rugosidade sem que o papel tenha esse relevo. Cor depende de luz, materiais e percepção: superfícies refletem parte da luz e telas também podem emitir luz. Matiz distingue famílias cromáticas, valor descreve claro/escuro e saturação a intensidade cromática no vocabulário empregado. Grafite e imagens sem matizes variados ainda permitem analisar valores. Um mesmo recurso pode atuar em várias dimensões, como linhas repetidas que também constroem textura e áreas tonais.",
        "steps": [
          "Descreva a marca em relação à escala e ao suporte.",
          "Diferencie traço, contorno, figura plana e volume.",
          "Separe qualidade física e aparência representada da superfície.",
          "Identifique matiz, claro/escuro e saturação sem reduzir cor apenas a matiz."
        ],
        "example": "Estudo autoral descrito por inteiro: em uma folha, pequenas marcas circulares se agrupam perto de uma borda e ficam mais espaçadas na outra. Cada marca pode ser percebida como ponto, e o conjunto permite comparar densidade e distribuição. Se uma fileira orientar o olhar, ela também pode sugerir uma direção linear sem ser um traço contínuo.",
        "pitfall": "Afirmar que ponto visual não tem tamanho, que todo contorno exige traço ou que uma imagem de rugosidade transfere automaticamente relevo ao suporte."
      },
      {
        "level": "intermediate",
        "title": "Contraste, organização e sistemas de cor",
        "explanation": "Os elementos se relacionam na composição. Repetições e variações podem construir ritmo; contraste de tamanho, valor, cor ou textura pode produzir ênfase. Equilíbrio envolve distribuição de pesos visuais e pode ser simétrico, assimétrico ou radial, sem depender só de igualdade numérica de objetos. Figura e fundo são relações perceptivas e podem ser ambíguas; não se reduz todo fundo a área sem informação. Linhas, bordas e alinhamentos podem orientar trajetos de leitura, mas não garantem que toda pessoa olhe os elementos na mesma ordem. Valor e saturação não são a mesma coisa: uma cor muito saturada não é necessariamente clara, e destacar um título pode depender da diferença claro/escuro em relação ao fundo. Cores complementares dependem do sistema e círculo adotados; não se chama amarelo de complementar do azul sem dizer qual modelo está em uso. Mistura de luz em RGB é aditiva: vermelho e verde podem produzir amarelo, e a combinação adequada dos três canais permite branco. Isso não equivale a misturar quaisquer tintas vermelha, verde e azul para obter branco. Pigmentos e impressão envolvem absorção seletiva e modelos subtrativos, com efeitos dos materiais; sistemas didáticos tradicionais de pintura não são idênticos ao RGB. Ao planejar comunicação visual, não dependa exclusivamente da distinção entre dois matizes para informar: texto, forma e posição também podem carregar a diferença. A análise deve considerar suporte, iluminação, reprodução e acesso às informações.",
        "steps": [
          "Identifique relações de repetição, contraste e distribuição.",
          "Diferencie claro/escuro de intensidade cromática.",
          "Declare o modelo ao falar de mistura e complementaridade.",
          "Verifique leitura usando também texto, forma e posição."
        ],
        "example": "Comparação autoral: a mesma figura retangular aparece em duas composições descritas: em uma, todos os retângulos têm tamanho e intervalo semelhantes; na outra, há um retângulo muito maior entre os pequenos. A primeira favorece repetição regular, e a segunda acrescenta contraste de escala. Não é necessário chamar uma delas de melhor sem saber o objetivo.",
        "pitfall": "Tomar saturação como claridade, misturar regras de luz e pigmento ou garantir significado e hierarquia universais a uma combinação de cores."
      },
      {
        "level": "advanced",
        "title": "Expressão, contexto e interpretação fundamentada",
        "explanation": "Descrever recursos formais é diferente de demonstrar o que uma obra significa ou o que seu autor quis dizer. Uma leitura pode propor relações entre marcas, materiais, espaço e contexto, mas deve indicar quais observações a sustentam. Cores podem adquirir sentidos diferentes em tradições e situações diferentes; não se reduz grandes regiões do mundo a um código fixo de branco, vermelho ou azul. Linhas curvas ou quebradas não revelam automaticamente emoção, idade ou condição de quem as produziu. Marcas irregulares podem resultar de escolha expressiva, ferramenta, suporte ou reprodução. Também não se deduz que toda forma geométrica seja racionalista ou toda forma orgânica pertença a uma escola específica. Textura pode integrar material, técnica e memória, mas superfície envelhecida não prova sozinha data ou narrativa de decadência. Observe se a textura é física, representada ou ambas e como participa da experiência da obra. Em instalações, luz, volume, som e deslocamento podem se articular; uma descrição precisa distingue o que está no cenário do que a interpretação acrescenta. Informações de autoria, materiais e contexto podem confirmar ou limitar hipóteses, sem tornar toda análise uma biografia. Estudos autorais podem variar um elemento predominante para comparar efeitos, reconhecendo que alterar cor pode também mudar contraste e figura-fundo. Quando o acesso se dá por descrição verbal ou reprodução, declare os limites: não afirme ter tocado material, visto imagem ou confirmado intenção que não foi apresentada. Argumentar sobre arte admite leituras diferentes, sem dispensar evidências e sem transformar rótulos de estilo em explicação completa.",
        "steps": [
          "Descreva primeiro características presentes ou fornecidas.",
          "Proponha sentidos e explicite as pistas de cada hipótese.",
          "Considere contexto e diferenças de suporte e reprodução.",
          "Separe interpretação possível e intenção ou dado documentado."
        ],
        "example": "Microcaso autoral: uma gravura descrita tem traços que oscilam de espessura. Pode-se analisar o contraste dessas marcas e comparar hipóteses de gesto ou ferramenta. Sem informação adicional, não se conclui qual era o estado emocional da pessoa nem qual instrumento exato foi usado. A hipótese deve permanecer proporcional às pistas.",
        "pitfall": "Atribuir significado único a toda cor, diagnosticar quem desenhou pelo traço ou inventar materiais, imagens e intenções ausentes da descrição."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Situação autoral: uma fotografia de parede áspera foi impressa sobre papel liso, sem relevo. A imagem mostra sulcos e irregularidades da parede. Qual descrição distingue corretamente aparência e suporte?",
        "hint": "A representação de uma superfície não implica que o suporte impresso tenha a mesma qualidade física.",
        "options": [
          "A aspereza da parede foi fisicamente transferida ao papel, mesmo sem relevo.",
          "Há textura visual representada; o papel liso não adquire por isso a textura tátil da parede.",
          "Não há textura visual, pois ela só existe em objetos tridimensionais tocáveis.",
          "A fotografia deixa de ter forma e valores porque representa uma superfície áspera."
        ],
        "correctIndex": 1,
        "solution": "B diferencia a rugosidade representada da superfície física do papel. A contradiz o suporte liso e confunde representação com transferência de material. C nega textura visual justamente por ela não ser relevo real no suporte. D apaga outros elementos que podem coexistir na fotografia. Uma impressão real pode ter textura própria; no cenário foi explicitado papel liso para isolar a distinção."
      },
      {
        "level": "intermediate",
        "prompt": "Cartaz autoral descrito integralmente: há um fundo muito escuro e, no centro, um título grande e muito claro; nenhuma relação específica de matizes é informada. Qual recurso sustenta diretamente o destaque do título na descrição?",
        "hint": "Claro e escuro dizem respeito ao valor; não invente matizes complementares ou repetição não fornecida.",
        "options": [
          "Complementaridade garantida entre azul e amarelo, embora esses matizes não tenham sido informados.",
          "Ausência de contraste, pois só a saturação poderia produzir destaque.",
          "Ritmo por repetição regular de vários títulos, mesmo havendo apenas um descrito.",
          "Ênfase pelo contraste de valor e escala entre título e fundo."
        ],
        "correctIndex": 3,
        "solution": "D usa as pistas fornecidas: título claro e grande em fundo escuro, combinação que pode favorecer ênfase. A inventa matizes e uma relação cromática sem modelo. B nega o contraste claro/escuro e o papel da escala. C cria repetição inexistente no cenário. Não se conclui uma ordem de leitura universal nem que o cartaz esteja completo para qualquer objetivo; a pergunta identifica o recurso descrito."
      },
      {
        "level": "advanced",
        "prompt": "Instalação didática fictícia sobre memória de um bairro, descrita sem imagem externa: pontos de luz marcam datas; fios conectam cartas em papéis retangulares claros e escuros; alguns papéis são lisos e outros fisicamente enrugados. Qual leitura articula os elementos sem inventar significado obrigatório ou intenção comprovada?",
        "hint": "Use marcas, conexões, formas, valores e superfícies descritos; diferencie leitura possível de código universal.",
        "options": [
          "Pontos, conexões lineares, recortes, valores e texturas podem relacionar registros e diferenças materiais, sustentando uma leitura de redes de memória sem provar uma intenção única.",
          "Os papéis escuros significam necessariamente luto em toda cultura e comprovam a morte de todas as pessoas que escreveram.",
          "Os fios demonstram que a instalação trata de uma guerra específica, embora nenhuma guerra tenha sido indicada.",
          "A rugosidade prova idade exata dos documentos e torna desnecessário qualquer dado de autoria, contexto ou material."
        ],
        "correctIndex": 0,
        "solution": "A reúne ponto, linha, forma, claro/escuro e textura a partir do cenário e qualifica a interpretação como possível. B inventa código universal e evento biográfico. C acrescenta guerra não informada. D transforma aparência física em datação exata sem evidência e dispensa contexto indevidamente. O caráter fictício foi explicitado: não se apresentam cartas reais, documentação de campo ou intenção confirmada de artista existente."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Esportes e suas regras",
    "objective": "Ler regras e distinguir objetivo, pontuação, ações permitidas e estratégia, comparar modalidades e elaborar adaptações pedagógicas explícitas sem confundi-las com regulamento oficial.",
    "prerequisites": [
      "Noções de jogo, cooperação e oposição",
      "Leitura de situações descritas e placares",
      "Distinção entre acordo escolar e regra de uma competição"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Para que servem regras e como consultá-las",
        "explanation": "Esportes possuem formas de prática, organização e regulamentação que permitem reconhecer objetivos e comparar desempenhos. As regras delimitam espaço, participantes, materiais, ações, pontuação, tempo e formas de resolver ocorrências; não se resumem a proibir movimentos. Uma regra sobre como marcar ponto é diferente de uma estratégia escolhida para tentar pontuar. No basquetebol, por exemplo, o objetivo é marcar na cesta adversária e impedir pontuação adversária dentro das condições do jogo, enquanto escolher determinada organização defensiva é decisão tática. Regulamentos podem variar entre entidades, categorias e formatos: basquete cinco contra cinco, três contra três e práticas escolares não devem ser tratados como se tivessem todas as mesmas regras. Também não se transfere uma regra do vôlei de quadra ao de praia sem consultar o documento correspondente. Para conferir uma situação, identifique modalidade, versão e contexto, localize a regra e suas exceções e confira se o regulamento da competição acrescenta condições. Esta aula usa referências FIBA 2026 para basquetebol cinco contra cinco e FIVB 2025–2028 para voleibol de quadra, sem substituir os manuais completos. Decisões de arbitragem precisam dos fatos relevantes; uma descrição parcial pode não permitir concluir sobre toda infração. Competir envolve respeito, comunicação e responsabilidade, e fair play não se reduz a aproveitar qualquer vantagem sem considerar regras ou participantes. Discordar de uma decisão não autoriza violência ou discriminação.",
        "steps": [
          "Identifique modalidade, categoria, formato e edição da referência.",
          "Separe objetivo, regra de execução e escolha estratégica.",
          "Localize condições e exceções antes de aplicar uma regra.",
          "Use procedimentos de comunicação e resolução de conflito compatíveis com a prática."
        ],
        "example": "Comparação autoral: uma equipe decide trocar a marcação individual por outra organização defensiva. Isso é uma escolha de estratégia dentro das regras, não uma alteração automática do valor de uma cesta. Se o grupo escolar mudar o alvo ou a pontuação, deve anunciar que está usando uma adaptação, em vez de atribuí-la à federação.",
        "pitfall": "Confundir tática com regra, aplicar edição ou formato errado ou presumir que uma adaptação escolar seja regra oficial de toda competição."
      },
      {
        "level": "intermediate",
        "title": "Comparação de basquetebol e voleibol de quadra",
        "explanation": "No basquetebol FIBA cinco contra cinco, duas equipes têm cinco jogadores em quadra por vez. A partida regular se divide em quatro quartos de dez minutos; o tempo de jogo não é a duração total no relógio da parede, pois há interrupções e intervalos. Em empate após o quarto período, podem ocorrer prorrogações de cinco minutos até o desempate. Um lance livre convertido vale um ponto; cestas de campo valem dois ou três conforme a zona e condições do arremesso. Avançar conduzindo a bola exige observar regras de drible e passos; nem todo contato é automaticamente falta, mas contatos e condutas fora dos limites podem ser sancionados. Essas noções não equivalem às regras NBA nem resolvem sozinhas todos os casos. No voleibol de quadra FIVB há seis jogadores de cada equipe em jogo. O objetivo é enviar a bola conforme as regras e vencer disputas, chamadas rallies, obtendo pontos. A equipe pode dar até três toques para devolver a bola, além do contato de bloqueio, que não conta nesse limite. Isso não torna legal qualquer forma de reter ou lançar a bola. A partida é vencida por quem ganha três sets. Os sets não decisivos vão a 25 pontos com dois de vantagem; havendo empate de dois sets para cada equipe, o quinto vai a 15, também com dois de vantagem. Pontuação, rodízio e ações de jogadores têm regras e exceções próprias; não se reduz o esporte à ideia de três toques sem examinar o restante. Comparar modalidades exige dizer qual quantidade está sendo contada: jogadores em jogo não são o total inscrito e pontos de um set não são sets vencidos.",
        "steps": [
          "Identifique participantes em jogo, objetivo e unidade de pontuação.",
          "Diferencie tempo de jogo e duração total de um evento.",
          "No voleibol, separe contatos da equipe, bloqueio, pontos e sets.",
          "Aplique o critério de vitória ao formato e momento da partida."
        ],
        "example": "Situação autoral de voleibol de quadra: um contato de bloqueio é seguido por três toques da equipe e devolução ao outro lado, sem outra infração descrita. O bloqueio não é contado como um dos três toques da equipe nessa regra. A conclusão se limita à contagem; não se inventa que a jogada foi necessariamente legal em todos os demais aspectos.",
        "pitfall": "Somar o bloqueio ao limite de três toques no vôlei de quadra, encerrar um set com só um ponto de vantagem ou confundir jogadores em quadra com toda a inscrição."
      },
      {
        "level": "advanced",
        "title": "Adaptação pedagógica, participação e avaliação",
        "explanation": "Aprender um esporte pode envolver jogos reduzidos e adaptações com propósito definido. Alterar espaço, material, alvo, número de participantes ou condição para pontuar muda demandas e oportunidades. A escolha deve manter objetivos de aprendizagem claros e permitir participação, sem tratar a forma escolar como cópia obrigatória de competição adulta. Antes de começar, registre regras de duração, pontuação, reinício, contatos permitidos, substituições e como resolver dúvidas. Mudar uma regra no meio apenas para favorecer um grupo compromete a compreensão do acordo. Uma adaptação pode preservar parte da lógica de cooperação e oposição e, ao mesmo tempo, modificar uma regra oficial; dizer isso explicitamente é mais rigoroso que inventar autorização da federação. Observar participação exige indicadores concretos, como variedade de pessoas envolvidas nas ações, clareza das orientações e oportunidade de exercer diferentes papéis. Só o placar não mede todo aprendizado, cooperação ou justiça. Escolhas funcionais, como instruções também por escrito, bola mais leve ou ajustes de espaço, podem ser combinadas sem exigir exposição pública de diagnósticos pessoais. Arbitragem, organização e registro também podem ser experiências de aprendizagem, sem substituir permanentemente a participação de alguém por papel periférico imposto. A inclusão não garante ausência de competição nem significa alterar uma regra de modo secreto. Após a prática, compare os efeitos ao objetivo e revise o acordo para a próxima rodada; não conclua que uma modificação funciona igualmente para todos os grupos sem observar resultados.",
        "steps": [
          "Defina qual aprendizagem e participação a adaptação pretende favorecer.",
          "Registre as regras completas antes da rodada e diferencie referência oficial e acordo local.",
          "Distribua papéis e recursos considerando escolhas funcionais sem exposição pessoal.",
          "Avalie indicadores além do placar e ajuste o próximo acordo com transparência."
        ],
        "example": "Proposta autoral para estudo: em um jogo de alvo com bola leve, o grupo reduz o espaço e compara quantas pessoas participam efetivamente das jogadas em duas rodadas. Isso permite investigar um efeito da mudança sem atribuir resultados reais ainda não observados. A regra adaptada e os critérios de comparação devem ser apresentados antes da atividade.",
        "pitfall": "Chamar regra inventada de oficial, medir toda aprendizagem só pela vitória ou exigir divulgação de informação de saúde para oferecer uma opção funcional."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cenário autoral: uma pessoa assiste a um jogo FIBA cinco contra cinco e a uma prática escolar de basquete com outra quantidade de participantes. Conclui que ambos precisam ter exatamente o mesmo regulamento em todos os aspectos. Qual análise é adequada?",
        "hint": "Identifique formato e contexto antes de transferir regras; uma adaptação explícita não muda automaticamente o regulamento federativo.",
        "options": [
          "Toda prática escolar precisa repetir integralmente o regulamento adulto, sem possibilidade de adaptação.",
          "Qualquer adaptação passa a valer automaticamente em toda competição oficial FIBA.",
          "Uma regra local elimina a necessidade de informar objetivo, pontuação e ações permitidas.",
          "É necessário conferir contexto e referência; a escola pode declarar adaptações sem apresentá-las como regulamento oficial."
        ],
        "correctIndex": 3,
        "solution": "D distingue referência oficial e acordo pedagógico. A transforma um formato competitivo em obrigação universal da escola. B atribui alcance federativo a uma decisão local. C elimina justamente as informações necessárias para compreender o jogo. A distinção não autoriza mudar regras de maneira secreta nem diz que toda adaptação seja adequada a qualquer objetivo."
      },
      {
        "level": "intermediate",
        "prompt": "Situação autoral sob as regras FIVB 2025–2028 de voleibol de quadra: em um set que não é o quinto decisivo, o placar estava 24–24 e a equipe A venceu o rally seguinte. Sem outra ocorrência, o set termina em 25–24?",
        "hint": "No set não decisivo, chegar a 25 não basta quando não se alcançou a diferença mínima de dois pontos.",
        "options": [
          "Sim, pois qualquer equipe encerra o set exatamente ao marcar 25, mesmo com vantagem de um.",
          "Não; 25–24 tem vantagem de um, e o jogo continua até alguma equipe atingir dois de vantagem, respeitado o mínimo do set.",
          "Não; é obrigatório zerar os placares e reiniciar um novo set em 0–0.",
          "Sim, porque esse rally equivale automaticamente a dois pontos em qualquer empate."
        ],
        "correctIndex": 1,
        "solution": "B: A passa a 25 e B permanece em 24, diferença de um. O set continua; se A ganhar o rally seguinte, por exemplo, 26–24 satisfaz a diferença de dois. A omite a condição de vantagem. C inventa reinício do set e D inventa valor duplo do rally. O quinto decisivo tem mínimo diferente, mas também exige dois pontos de vantagem; o enunciado delimitou set não decisivo."
      },
      {
        "level": "advanced",
        "prompt": "Cenário autoral: para um jogo escolar adaptado, o grupo reduz a altura do alvo e propõe que cada equipe envolva mais participantes na circulação da bola antes de pontuar. Não há dados de resultado ainda. Qual procedimento é mais coerente com aprendizagem e transparência?",
        "hint": "A adaptação precisa ser identificada, compreendida e avaliada; não se apresenta seu efeito como fato já comprovado.",
        "options": [
          "Anunciar as regras adaptadas e critérios de observação antes do jogo, combinar papéis e avaliar depois se ampliaram oportunidades de participação.",
          "Apresentar a proposta como nova regra FIBA oficial, mesmo sem documento que a estabeleça.",
          "Mudar a pontuação sem avisar durante o jogo sempre que uma equipe estiver perdendo.",
          "Concluir antes da prática que a mudança garante participação igual de todas as pessoas em qualquer grupo."
        ],
        "correctIndex": 0,
        "solution": "A torna explícita a adaptação e propõe observar seus efeitos sem inventar resultado. B atribui autoridade oficial inexistente. C altera unilateralmente o acordo e dificulta compreensão e comparação. D transforma objetivo em garantia universal antes de qualquer observação. A avaliação deve considerar participação e compreensão, além do placar, respeitando escolhas funcionais sem exigir exposição pessoal."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Células e seres vivos",
    "objective": "Explicar a organização celular dos seres vivos, distinguir tipos de células e níveis de organização e interpretar observações e escalas sem transformar limites do método em conclusões indevidas.",
    "prerequisites": [
      "Noções de organismo, ambiente e reprodução",
      "Leitura de descrições de estruturas",
      "Razão e conversão entre milímetro e micrômetro"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Células, organismos e teoria celular",
        "explanation": "A célula é uma unidade básica de organização e funcionamento dos seres vivos celulares. A teoria celular reúne a organização dos organismos em células, o papel delas nas funções vitais e a origem de novas células por divisão de células preexistentes nas condições de reprodução celular estudadas. Isso não é uma explicação completa para a origem das primeiras formas de vida. Um organismo unicelular realiza suas funções por uma célula; em organismos multicelulares, células se integram e podem se especializar. Células típicas possuem membrana plasmática, citoplasma, material genético e ribossomos. A membrana delimita e participa de trocas seletivas; citosol é a parte fluida do citoplasma, que inclui estruturas celulares; DNA armazena informação hereditária e ribossomos participam da síntese de proteínas. Especializações podem modificar esse quadro: hemácias maduras de mamíferos, por exemplo, perdem núcleo e outras estruturas, sem transformar a linhagem do organismo em procarionte. Não se deve usar um esquema ideal como se cada célula madura tivesse todas as mesmas partes. Vírus são entidades acelulares que dependem de células hospedeiras para se replicar; não são bactérias muito pequenas. Sua relação com definições de vida envolve critérios discutidos, não devendo a aula apresentar uma lista de características como resposta definitiva a toda questão. Também não se exige uso de oxigênio, movimento visível ou presença de clorofila de todo ser vivo. Para analisar uma amostra, diferencie estrutura, função e o que foi efetivamente observado.",
        "steps": [
          "Identifique se a descrição trata de célula, organismo ou entidade acelular.",
          "Relacione membrana, citoplasma, material genético e ribossomos às funções.",
          "Diferencie organismo unicelular e célula especializada de um multicelular.",
          "Reconheça o alcance da teoria celular e limites de esquemas típicos."
        ],
        "example": "Exemplo autoral: uma levedura é um organismo unicelular eucarionte, enquanto uma célula de um tecido de uma árvore integra um organismo multicelular. Ter apenas uma célula não define automaticamente uma bactéria, assim como pertencer a uma planta não significa que toda célula precise realizar fotossíntese.",
        "pitfall": "Equiparar unicelular a bactéria, chamar vírus de célula ou exigir as mesmas estruturas e estratégias metabólicas de todos os seres vivos e células maduras."
      },
      {
        "level": "intermediate",
        "title": "Tipos celulares e integração de funções",
        "explanation": "Bactérias e arqueias apresentam organização procariótica: não possuem núcleo delimitado por membrana. Isso não significa ausência de DNA, ribossomos, membrana ou organização interna. Bactérias e arqueias são grupos distintos e não devem ser reduzidos a uma mesma identidade. Células eucarióticas possuem organização com núcleo e compartimentos membranosos em sua descrição típica e ocorrem em animais, plantas, fungos e muitos organismos unicelulares. O núcleo abriga parte principal do DNA celular, mas mitocôndrias e plastídios também têm DNA próprio. Ribossomos produzem proteínas; retículo endoplasmático e complexo de Golgi participam de síntese, processamento e destino de moléculas, com funções distintas. Mitocôndrias participam da respiração e da síntese de ATP em muitas células eucarióticas, inclusive vegetais. Cloroplastos realizam fotossíntese nas células que os têm; não estão em toda célula de toda planta. Parede celular e membrana plasmática também não são a mesma estrutura. Células vegetais típicas apresentam parede com celulose; fungos possuem composição de parede diferente, e animais não apresentam essa parede. A presença de parede não basta para identificar planta. Em organismos multicelulares, diferenciação produz tipos celulares com expressão e funções distintas; isso não implica que toda diferença entre células decorra de DNA totalmente diferente. Tecidos, órgãos e sistemas descrevem níveis de integração em muitos organismos, mas não são uma sequência obrigatória de todo ser vivo. Funções dependem de redes de estruturas, não de organelas isoladas que trabalhem sem trocas ou regulação.",
        "steps": [
          "Diferencie núcleo delimitado de ausência de material genético.",
          "Associe grupos a tipos de organização sem confundir bactérias e arqueias.",
          "Relacione estruturas e funções, evitando exclusividade falsa de mitocôndrias ou cloroplastos.",
          "Situe células e níveis de integração conforme o organismo."
        ],
        "example": "Comparação autoral: uma célula de fungo e uma célula animal podem ter núcleo e mitocôndrias. A primeira pode apresentar parede, enquanto a segunda não tem parede celular. Essa diferença não torna o fungo uma planta; tipo de organização e composição da parede precisam ser interpretados com outros atributos.",
        "pitfall": "Dizer que procariontes não têm DNA, que só animais respiram em mitocôndrias ou que toda parede celular identifica uma planta."
      },
      {
        "level": "advanced",
        "title": "Observação, escala e conclusões proporcionais",
        "explanation": "Estudar células requer relacionar evidências e limites do método. Microscópios e técnicas de preparação revelam aspectos diferentes; uma imagem não mostra necessariamente tudo que existe no espécime. Coloração, contraste, espessura, resolução e preparo influem no que se distingue. Ampliação é razão entre dimensão da imagem e dimensão correspondente do objeto, medidas em unidades iguais. Resolução é a capacidade de distinguir detalhes próximos; ampliar uma imagem já obtida não cria detalhes que o método não registrou. Para converter, 1 mm corresponde a 1000 µm e 1 µm a 1000 nm. A razão de ampliação não tem unidade de comprimento. Uma barra de escala só acompanha corretamente redimensionamento se imagem e barra forem alteradas juntas de modo compatível; um número de ampliação impresso pode deixar de valer após redimensionar uma reprodução. Não deduza tipo celular apenas pelo tamanho nem conclua ausência de estrutura só porque ela não aparece em uma observação sem técnica apropriada. Distinguir hipótese e confirmação pode exigir outras observações, controles e métodos. Esquemas didáticos também não são fotografias nem reproduzem obrigatoriamente proporções reais. Ao comparar amostras, mantenha critérios de escala e preparo explícitos, evitando atribuir diferença de contraste diretamente a função ou identidade. Evidências sobre células se articulam a reprodução, hereditariedade e metabolismo, mas uma única imagem não determina todos esses processos ou a história evolutiva inteira de um organismo.",
        "steps": [
          "Identifique método, preparação e quais estruturas poderiam ser detectadas.",
          "Converta imagem e objeto para a mesma unidade antes de calcular ampliação.",
          "Separe aumento de tamanho aparente e resolução de detalhes.",
          "Formule conclusões compatíveis com a evidência e indique verificações adicionais."
        ],
        "example": "Situação autoral: uma micrografia de contraste baixo não permite identificar claramente o núcleo. Isso não demonstra por si que a célula seja procariótica: pode haver limitação de método ou preparação. Outra técnica e controles podem testar a hipótese, sem que se invente o resultado da nova observação.",
        "pitfall": "Dividir medidas com unidades diferentes, tomar ampliação como resolução ou transformar uma estrutura não observada em estrutura comprovadamente ausente."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Descrição didática autoral: uma população celular aumenta porque células já presentes se dividem, originando novas células. Qual relação com a teoria celular é sustentada, sem extrapolar para a origem da primeira vida?",
        "hint": "A origem de novas células em processos celulares atuais não é a mesma pergunta histórica sobre as primeiras formas de vida.",
        "options": [
          "Toda célula surge espontaneamente de matéria sem organização celular, como a descrição comprova.",
          "A divisão demonstra que todos os organismos são multicelulares com órgãos.",
          "A formação de novas células a partir de preexistentes é compatível com a teoria celular, sem resolver sozinha a origem da primeira vida.",
          "A divisão transforma obrigatoriamente cada célula em vírus acelular."
        ],
        "correctIndex": 2,
        "solution": "C corresponde ao processo narrado e reconhece seu alcance. A contradiz a presença de células anteriores e inventa geração espontânea. B generaliza multicelularidade e órgãos a partir de uma população celular. D confunde reprodução celular com origem de vírus. O cenário é uma descrição autoral, não relatório de um experimento que tenha demonstrado toda história da vida."
      },
      {
        "level": "intermediate",
        "prompt": "Cenário autoral: uma célula viva de raiz vegetal apresenta núcleo e mitocôndrias, mas não possui cloroplastos. Em condições compatíveis com respiração aeróbia, qual interpretação é adequada?",
        "hint": "Mitocôndrias também ocorrem em vegetais, e fotossíntese não é função de toda célula de uma planta.",
        "options": [
          "Pode participar de respiração mitocondrial sem realizar fotossíntese nessa célula; a ausência de cloroplastos não a torna animal.",
          "Não pode produzir ATP por nenhum processo, porque toda célula vegetal depende diretamente de um cloroplasto próprio.",
          "É obrigatoriamente procariótica, mesmo com núcleo delimitado informado.",
          "A presença de mitocôndrias demonstra que a raiz é um animal e não parte da planta."
        ],
        "correctIndex": 0,
        "solution": "A separa respiração mitocondrial e fotossíntese e mantém o contexto vegetal. B torna cloroplastos condição de toda produção de ATP e ignora os outros processos. C contradiz a organização nuclear descrita. D atribui mitocôndrias exclusivamente a animais, embora ocorram também em muitas células vegetais, fúngicas e de eucariontes unicelulares. A conclusão não fornece uma taxa de produção de ATP nem afirma que toda célula vegetal tenha a mesma atividade."
      },
      {
        "level": "advanced",
        "prompt": "Cálculo autoral de uma reprodução: uma célula de diâmetro real de 5 µm aparece com diâmetro na imagem de 2,5 mm. Essa reprodução não será redimensionada durante o cálculo. Qual é a ampliação linear e qual limite de interpretação deve ser mantido?",
        "hint": "Converta 2,5 mm para micrômetros e divida pelo diâmetro real; aumentar tamanho não cria resolução nova.",
        "options": [
          "0,5 vez; basta dividir 2,5 por 5 sem converter unidades.",
          "2500 vezes; o diâmetro real deve ser ignorado no cálculo.",
          "500 vezes; isso garante distinguir qualquer estrutura menor, independentemente do método.",
          "500 vezes; ampliação, por si só, não garante distinguir estruturas menores."
        ],
        "correctIndex": 3,
        "solution": "D: 2,5 mm = 2500 µm e ampliação linear = 2500/5 = 500. A ignora a conversão entre milímetros e micrômetros. B usa só o tamanho convertido da imagem, sem dividir pelo objeto. C acerta a razão, mas confunde aumento com resolução ilimitada. A ampliação é adimensional e só se aplica à reprodução e ao tamanho de exibição declarados; outras estruturas dependem de resolução, contraste e preparação."
      }
    ]
  }
];

export const authoredCurriculumBatch08ReviewRecords = [
  {
    "subject": "Matemática",
    "topic": "Razões, escalas e proporcionalidade",
    "contentSha256": "1b997837600158d89060a71bb52454551be393a1ce7a3fd4cb205eb19dd895f6",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/prealgebra-2e/pages/5-6-ratios-and-rate",
      "https://openstax.org/books/prealgebra-2e/pages/6-5-solve-proportions-and-their-applications",
      "https://openstax.org/books/elementary-algebra-2e/pages/8-9-use-direct-and-inverse-variation",
      "https://biblioteca.ibge.gov.br/visualizacao/livros/liv101675.pdf",
      "https://openstax.org/books/chemistry-2e/pages/3-4-other-units-for-solution-concentrations"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Multiplicando 4,5 cm pelo denominador 150.000 obtém-se 675.000 cm; convertendo para quilômetros dividindo por 100.000 cm/km resulta em 6,75 km, que corresponde à opção C (índice 2). Os distractores A (67,5), B (0,675) e D (675) representam erros comuns de potência de dez na conversão de unidades, cada um fora por fator de 10 ou 100."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A massa de soluto permanece 36 g (0,12 × 300 g) pois só água evapora; a nova massa da solução é 250 g (300 − 50 g). A concentração final é 100 × 36/250 = 14,4 % m/m, opção A (índice 0). O distrator B mantém a concentração inicial ignorando a retirada de solvente; C (10%) e D (16%) não correspondem à razão 36/250 e violam o balanço de massa explicitado."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A taxa individual é 1.800 peças / (6 máquinas × 10 h/dia × 5 dias) = 6 peças/máquina-hora. No novo cenário, cada máquina trabalha 8 h/dia × 6 dias = 48 h, produzindo 6 × 48 = 288 peças. Para 2.880 peças, são necessárias 2.880/288 = 10 máquinas (índice 3). Com 9 máquinas a produção seria 2.592 peças, abaixo da meta; 10 atinge exatamente; 12 excede sem ser o mínimo inteiro pedido."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Variação linguística e norma-padrão",
    "contentSha256": "5ed1886e1ebda7e91ac314e36565442ecd1df4575040b08c93d14d6308a92ece",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://ceale.fae.ufmg.br/glossarioceale/verbetes/variacao-linguistica",
      "https://www.ceale.fae.ufmg.br/glossarioceale/verbetes/preconceito-linguistico",
      "https://livrosabertos.fae.ufmg.br/wp-content/uploads/2022/04/Col_Alf.Let_.15_Variacao_Linguistica.pdf",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/artigo-definido-com-nomes-proprios/21809",
      "https://ciberduvidas.iscte-iul.pt/artigos/rubricas/idioma/concordancia-com-a-gente/5416"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A tarefa apresenta duas mensagens da mesma pessoa em situações distintas (informal com amigo vs. formal institucional). A opção C é a única que reconhece ajuste de registro por interlocução e propósito, sem extrapolar para origem geográfica (A), hierarquia intelectual entre grupos (B) ou incompreensibilidade automática do registro menos formal (D). A resolução independe do gabarito: o enunciado diz 'mesma pessoa', o que invalida A e B; D confunde informalidade com ininteligibilidade, o que a aula explicitamente rejeita."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "As frases 'Maria chegou cedo' e 'A Maria chegou cedo' ilustram variação do artigo anteposto a nome próprio em uso pessoal. A opção D corretamente afirma que a presença ou ausência do artigo pode ser admitida nesse contexto, sem estabelecer erro obrigatório ou superioridade do falante. A invalidações: A torna o artigo obrigatório em todo caso (falso); B o proíbe sempre (falso); C infere escolaridade de traço isolado sem evidência. A aula e a fonte Ciberdúvidas confirmam a variação admitida."
      },
      {
        "index": 2,
        "correctIndex": 1,
        "reasoning": "O cenário pede concordância nominal padrão em 'as proposta novas'. A opção B identifica a regra (artigo, substantivo e adjetivo no plural) e propõe 'as propostas novas', preservando o sentido de pluralidade e explicando a convenção sem julgar a pessoa. A transforma a construção em insulto à capacidade intelectual (preconceito linguístico). C altera o sentido ao mudar plural para singular ('a proposta nova'). D exige apagamento total da variedade de origem, ultrapassando a tarefa. A resolução confere a concordância nominal padrão ensinada na aula."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Realismo e Naturalismo",
    "contentSha256": "455080a1385b9bc0ad9f74a3d57265d24ea18cd7fddd5e6fd6a50eca0f46454d",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.academia.org.br/academicos/machado-de-assis/bibliografia",
      "https://www.academia.org.br/academicos/aluisio-azevedo/bibliografia",
      "https://pt.wikisource.org/wiki/A_Cartomante",
      "https://pt.wikisource.org/wiki/Critica_%28Machado_de_Assis%2C_1910%29/O_Primo_Bazilio",
      "https://bbm.usp.br/documents/93/PrimeirasEdicoesDeMachadoDeAssisBBM.pdf",
      "https://www.cervantesvirtual.com/obra-visor/memorias-postumas-de-bras-cubas--0/html/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Questão básica testa distinção entre marco de periodização e início absoluto, e entre vocabulário/projeto cientificista e comprovação científica. Opção D é a única que evita extrapolação: reconhece função organizadora do marco e limite da ficção. A, B, C cometem erros que a aula alerta: A elimina antecedentes, B confunde linguagem com método, C impõe uniformidade. Resolução independente confirma gabarito 3."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Questão intermediária apresenta fragmento com condicionamento econômico (dependência de emprego/silêncio) sem informação hereditária. Opção A lê o procedimento textual sem inventar causa biológica ou lei universal. B atribui inferioridade biológica sem informação que a demonstre, C universaliza ação particular, D nega relação social explicitada no trecho. Resolução independente confirma gabarito 0 alinhado aos passos da seção: relacionar espaço/trabalho/poder, identificar explicação causal no texto, não inventar genealogia."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "Questão avançada usa fragmento autoral hipotético (não-Machado) com narrador em primeira pessoa: declara desinteresse por prestígio, mas narra escolha de casamento por homenagens/influência. Opção C sustenta leitura irônica da autoimagem pelo contraste declaração/motivos, sem absolutizar falsidade nem identificar narrador com autor real. A torna narrador autoridade inquestionável, B confunde voz ficcional com opinião pessoal do escritor, D cria falso dilema primeira pessoa vs. crítica social. Resolução independente confirma gabarito 2 coerente com passos: distinguir autor/narrador, comparar afirmação/indícios, não inventar enredo."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Norma-padrão e revisão",
    "contentSha256": "a1a5cc19515468c3291e89d037a3618f9e3435b6c17681b7ff91acb966d971f6",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-maioria-dos-portugueses/702",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/existir-vs-haver/32545",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/fazer-para-exprimir-o-estado-do-tempo/22335",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/as-virgulas-num-sujeito-composto-e-o-predicado/31662",
      "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-crase-em-em-relacao-a-disciplina/31029",
      "https://www.umass.edu/writing-center/resources/flow-cohesion",
      "https://ceale.fae.ufmg.br/glossarioceale/verbetes/variacao-linguistica"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Item básico testa concordância de haver/existir/fazer nos sentidos indicados. Opção C ('Havia três sugestões na pauta') usa haver existencial na 3ª pessoa do singular — convenção padrão. Opção A flexiona haver para plural ('Haviam'), desvio nesse sentido. Opção B usa 'Fazem' para tempo decorrido, onde a norma pede 'Faz' (impessoal). Opção D usa 'Existe' com sujeito plural 'três sugestões', devendo ser 'Existem'. Gabarito 2 (C) está correto e a resolução explica cada distrator sem afirmar que haver/fazer nunca aparecem no plural em outros usos."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Item intermediário testa redução de oração restritiva, concordância e pontuação em ordem direta. Original: 'os relatórios que foram entregues ontem chegaram hoje'. Opção A ('Os relatórios entregues ontem chegaram hoje') mantém sujeito plural, verbo plural 'chegaram', modificador restritivo 'entregues ontem' sem vírgula — correto. Opção B insere vírgula indevida entre sujeito e predicado. Opção C troca verbo para singular 'chegou', discordância. Opção D abre intercalação com vírgula após 'relatórios' sem fechamento e altera a estrutura restritiva. Gabarito 0 (A) está correto; a resolução esclarece que intercalação válida usa par de vírgulas, não vírgula única."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Item avançado testa reescrita que resolva ambiguidade de 'sua inscrição' preservando titular (Lia), confirmação afirmada e dia (quinta-feira). Opção D ('Lia avisou Nara que a inscrição de Lia foi confirmada para o encontro de quinta-feira') explicita 'de Lia', mantém 'foi confirmada' (certeza) e 'quinta-feira' — atende a todas as condições. Opção A transfere inscrição para Nara (altera titular). Opção B substitui certeza por possibilidade ('talvez... seja confirmada'). Opção C altera o dia para sexta-feira. Gabarito 3 (D) está correto; a resolução nota que alternativas incorretas não precisam ser agramaticais — o problema editorial é modificarem informação que deveria ser preservada."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Modais e condicionais",
    "contentSha256": "b75c084c3c834d518616b8d98ec35dbeb4354bef392ee978a9699156592e8c6a",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-permission-obligation",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/suggestions-obligations",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second",
      "https://dictionary.cambridge.org/us/grammar/british-grammar/conditionals-if",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-third-mixed",
      "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-deductions-about-past",
      "https://digitallibrary.un.org/record/605858/files/United_Nations_Editorial_Manual.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A leitura correta (B) preserva mustn't = proibição de entrar no depósito e don't have to = dispensa do ingresso impresso (aceita-se o digital). A inverte mustn't em obrigação e cria proibição inexistente. C transforma vedação em opção e dispensa em exigência. D reduz a regra a previsão e inventa exigência de impresso. O gabarito e a solução conferem independentemente."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "O third conditional padrão exige if + past perfect (had saved) e would have + past participle (would not have lost) para hipótese e consequência ambas no passado. A (saves/will not lose) é first conditional, inadequada para 'yesterday'. B (saved/would not lose) é second conditional com consequência não marcada como passada. C (had saved/would not lose) é estrutura de mixed conditional (passado/presente), não expressa a perda de ontem no modelo pedido. D é a única que alinha os dois 'yesterday' com a forma gramatical requerida."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A frase 'If I had taken that course last year, I would have better skills now' combina had taken (past perfect = condição passada não realizada) com would have better skills (would + base verb 'have' = consequência presente imaginada). 'Have' aqui é verbo principal 'possuir', seguido de complemento nominal 'better skills', não auxiliar + particípio. B troca os tempos e trata hipótese como certeza. C classifica 'have better skills' como particípio passado e inverte referências. D contradiz 'did not take' e trata o imaginado como fato. A análise A é a única que preserva sentido e estrutura."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Inferência e vocabulário em espanhol",
    "contentSha256": "29d441344e64c9de49d8d3b138b63efc48988f903b97a01900805e47236e25fc",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://cvc.cervantes.es/ensenanza/biblioteca_ele/diccio_ele/diccionario/inferencia.htm",
      "https://cvc.cervantes.es/ensenanza/biblioteca_Ele/diccio_ele/diccionario/vocabulario.htm",
      "https://cvc.cervantes.es/ensenanza/biblioteca_ele/marco_complementario/capitulo_03.htm",
      "https://cvc.cervantes.es/ensenanza/biblioteca_ele/diccio_ele/diccionario/marcadoresdiscurso.htm",
      "https://dle.rae.es/desarrollo",
      "https://dle.rae.es/descubrimiento",
      "https://dle.rae.es/rato",
      "https://dle.rae.es/exquisito"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Un rato em 'esperar un rato mientras preparaba las entradas' indica intervalo temporal: 'esperar' seleciona duração, 'mientras preparaba' delimita o intervalo à preparação dos ingressos. A (roedor) transfere sentido português de 'rato' ignorando o cotexto e a construção temporal; B confunde 'rato' com 'entradas' e adiciona 'já entregue'; D inventa cancelamento inexistente. Gabarito C é única leitura compatível com sintaxe e semântica da frase."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "Descubrimiento (de descubrir + -miento) designa o achado/descoberta da fotografia; 'antiga' qualifica o objeto, não a circunstância do encontro. A preserva sentido nominal sem adicionar causalidade. B insere 'necessariamente acidental' sem base textual; C substitui 'descoberta' por 'fabricação' e 'antiga' por 'nova', invertendo o sentido; D extrapola 'reconhecer a casa' para 'validação científica de todas as lembranças', informação ausente. O sufixo -miento sinaliza nome de ação/resultado, não método ou causa."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "O fragmento combina 'propôs' (proposta, não execução), 'pode facilitar' (possibilidade, modalidade epistêmica fraca) e 'ainda não foi aprovada' (estado negativo temporário, não rejeição definitiva). D conserva os três elementos: proposta apresentada, ausência de aprovação até o momento, efeito favorável apenas possível. A e C afirmam execução/aprovação e universalizam benefício ('todas', 'eliminará com certeza'); B converte 'ainda não aprovada' em 'rejeitada definitivamente' e 'pode' em impossibilidade ('nunca poderia'). Texto não informa prazo de decisão, beneficiários específicos nem extensão total da melhoria."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Leis de Newton e dinâmica",
    "contentSha256": "d794b1f3c5e478f6443a31f0f40e0f6320937cd59057559f642e62c38d2fa2c8",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/university-physics-volume-1/pages/5-1-forces",
      "https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law",
      "https://openstax.org/books/university-physics-volume-1/pages/5-4-mass-and-weight",
      "https://openstax.org/books/university-physics-volume-1/pages/5-5-newtons-third-law",
      "https://openstax.org/books/university-physics-volume-1/pages/6-1-solving-problems-with-newtons-laws",
      "https://openstax.org/books/university-physics-volume-1/pages/6-2-friction",
      "https://openstax.org/books/university-physics-volume-1/pages/6-3-centripetal-force"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Bloco de 6 kg em mesa sem atrito: forças horizontais 30 N (dir.) e 12 N (esq.). Resultante = 18 N para a direita. a = 18/6 = 3 m/s² para a direita. Opção A soma módulos (42/6=7). C ignora 12 N e inverte sentido. D confunde forças opostas com anulação (não são par ação-reação, atuam no mesmo corpo)."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Bloco A (6 kg, μc=0,20) na horizontal ligado a B (4 kg) pendente. Normal em A = 60 N, atrito = 12 N contrário ao movimento. Equações: T−12=6a e 40−T=4a. Somando: 28=10a → a=2,8 m/s². T=6·2,8+12=28,8 N (confere: 40−28,8=11,2=4·2,8). A ignora atrito. B acerta a mas toma T=40 N (peso de B, errado pois B acelera). D pode vir de somar atrito ajudando a descida; valores não satisfazem equação de A."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "Carro 1000 kg, curva plana R=40 m, v=15 m/s, μe=0,70, g=10. Força radial necessária = m v²/R = 1000·225/40 = 5625 N. Atrito estático máximo = μe mg = 0,70·10000 = 7000 N. 5625 < 7000 → compatível, atrito efetivo = 5625 N (não o máximo). A inverte os valores. B iguala todo atrito estático ao limite. C usa 1000·15 (sem v² nem divisão por R), expressão sem dimensão de força."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Estrutura atômica e modelos",
    "contentSha256": "751742288fb5b356311af0601481b65d01ec44cf0ef6164f05b387ba57c0415c",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/chemistry-2e/pages/2-2-evolution-of-atomic-theory",
      "https://openstax.org/books/chemistry-2e/pages/2-3-atomic-structure-and-symbolism",
      "https://openstax.org/books/chemistry-2e/pages/6-2-the-bohr-model",
      "https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory",
      "https://openstax.org/books/chemistry-2e/pages/6-4-electronic-structure-of-atoms-electron-configurations",
      "https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "Íon Ca²⁺ com Z=20, A=40: prótons=Z=20; nêutrons=A-Z=20; elétrons=Z-carga=20-2=18. Alternativa C (20p, 20n, 18e) é a única compatível. A erra prótons e nêutrons; B inverte sinal da carga (22e seria ânion 2-); D toma A como nêutrons (40) em vez de A-Z."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Regras: n∈ℕ⁺; 0≤l≤n-1; -l≤ml≤l (inteiro); ms=±0,5. A: (2;2;0;+0,5) falha pois l=2 > n-1=1. B: (3;2;-2;+0,5) satisfaz todas (l=2≤2, ml=-2∈[-2,2], ms=+0,5). C: (3;2;3;-0,5) falha pois ml=3 > l=2. D: (3;1;0;+1) falha pois ms=+1 ∉ {+0,5,-0,5}. Apenas B é admissível."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Transição n=3→2: estado inicial E3=-1,51 eV (maior), final E2=-3,40 eV (menor) → emissão. E_fóton = E3 - E2 = (-1,51) - (-3,40) = 1,89 eV. λ = hc/E = 1240/1,89 ≈ 656 nm. A descreve emissão de 1,89 eV e 656 nm. B diz absorção (inverte processo). C usa soma dos módulos (4,91 eV) e λ≈253 nm. D atribui energia e comprimento de onda negativos ao fóton, fisicamente impossível."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Metabolismo e respiração celular",
    "contentSha256": "51a0ce7ab059ae2d5774566b103ef2adbb235ce4caafab6f75d24735d2422c5a",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://openstax.org/books/biology-2e/pages/6-1-energy-and-metabolism",
      "https://openstax.org/books/biology-2e/pages/6-4-atp-adenosine-triphosphate",
      "https://openstax.org/books/biology-2e/pages/7-2-glycolysis",
      "https://openstax.org/books/biology-2e/pages/7-3-oxidation-of-pyruvate-and-the-citric-acid-cycle",
      "https://openstax.org/books/biology-2e/pages/7-4-oxidative-phosphorylation",
      "https://openstax.org/books/biology-2e/pages/7-5-metabolism-without-oxygen",
      "https://openstax.org/books/biology-2e/pages/7-7-regulation-of-cellular-respiration",
      "https://www.ncbi.nlm.nih.gov/books/NBK526105/",
      "https://pmc.ncbi.nlm.nih.gov/articles/PMC10756037/"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Para 3 glicoses: investe 6 ATP, produz 12 ATP brutos → saldo 6 ATP líquidos. Produz 3×2=6 NADH e 3×2=6 piruvatos. Opção D confere. A usa bruto (12) como líquido. B conta NADH/piruvato como se fosse por triose (1,5 glicose). C zera saldo positivo incorretamente. Gabarito e explicação de distractores estão corretos."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Modelo declarado: 10 NADH × 2,5 = 25; 2 FADH2 × 1,5 = 3; 4 ATP substrato = 4; total = 32. Opção B confere. A omite os 4 ATP substrato (25+3=28). C usa razões antigas 3 e 2: 10×3 + 2×2 + 4 = 38. D (34) sugere contar 6 ATP diretos sem descontar investimento já no saldo de 4. Gabarito e explicação de distractores estão corretos."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Desacoplador permite H+ retornar sem ATP sintase → gradiente cai, cadeia acelera (maior O2 consumido), menos ATP capturado. Opção A descreve exatamente isso. B: bloqueio do complexo IV reduziria consumo de O2, não aumentaria. C: pressupõe que O2 consumido ∝ ATP formado, falso sob desacoplamento. D: fermentação lática não ocorre em mitocôndrias nem usa fosforilação oxidativa. Gabarito e explicação de distractores estão corretos."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Feudalismo e mundo medieval",
    "contentSha256": "68eb801494fcb7e0016cf2f8216ca7ce75f00f8aab6d1ccf026a5a23fe389ac0",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://sourcebooks.web.fordham.edu/sbook1i.asp",
      "https://sourcebooks.web.fordham.edu/source/fulbert1.asp",
      "https://openstax.org/books/world-history-volume-1/pages/13-1-the-post-roman-west-in-the-early-middle-ages",
      "https://openstax.org/books/world-history-volume-1/pages/13-2-the-seljuk-migration-and-the-call-from-the-east",
      "https://openstax.org/books/world-history-volume-1/pages/16-4-the-long-term-effects-of-global-transformation",
      "https://www.metmuseum.org/essays/monasticism-in-western-medieval-europe",
      "https://www.nationalarchives.gov.uk/explore-the-collection/explore-by-time-period/early-modern/plague/",
      "https://academic.oup.com/cornell-scholarship-online/book/45931/chapter-abstract/404344245"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A opção C é a única sustentada: o quadro descreve prestações de trabalho (corveia) e produto (renda em espécie) sem informar dependência pessoal, direitos de movimento, herança ou costume local; A inventa escravidão e venda separada da terra; B confunde obrigação camponesa com homenagem vassálica militar; D contradiz os encargos explícitos e inventa propriedade plena isenta."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A opção A identifica corretamente as três ordens como representação normativa com função de legitimação hierárquica, sem pretender exaustão populacional; B transforma esquema ideal em censo factual e apaga comerciantes/artesãos; C pressupõe consentimento unânime e ausência de conflitos sem evidência; D anacronicamente projeta programa igualitário contemporâneo sobre discurso medieval de complementaridade funcional."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A opção D situa a regulação no contexto inglês pós-Peste Negra, reconhece o conflito salarial e de mobilidade, e distingue intenção legislativa de efetividade real; A universaliza benefício desigual e inventa abolição total de dependências; B nega a própria existência de contratação remunerada que a lei busca controlar; C estende indevidamente espaço (toda Europa), tempo (séculos) e pressupõe cumprimento perfeito."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Relevo, solos e recursos naturais",
    "contentSha256": "5b6d01311d7ac6feb935b6ce85d1abd911f79681e9991ff47e73a22acf8bd840",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/18306-relevo-do-brasil.html",
      "https://www.infoteca.cnptia.embrapa.br/infoteca/handle/doc/1176834",
      "https://www.embrapa.br/en/web/solos/sibcs/horizontes-diagnosticos",
      "https://www.embrapa.br/en/web/solos/sibcs/propriedades-do-solo",
      "https://www.nrcs.usda.gov/sites/default/files/2022-10/RUSLE2%20Handbook_0.pdf",
      "https://www.nrcs.usda.gov/resources/tech-tools/water-erosion-rusle2",
      "https://www.fao.org/about/meetings/soil-erosion-symposium/key-messages/en/",
      "https://www.fao.org/land-water/soils/overview/en"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "Na tarefa básica, a opção correta (Índice 1) distingue intemperismo, erosão e deposição sem deduzir classe pedológica; as outras opções incorretamente afirmam que intemperismo requer transporte total, atribuem Latossolo sem perfil ou transformam depósito em solo instantaneamente, conforme explicação da solução."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "Na tarefa intermediária, a opção correta (Índice 2) resulta do cálculo 6500×0,022×2,0×0,04×0,5 = 5,72 t/ha/ano, abaixo do valor T=10. As outras opções representam erros aritméticos: omissão do fator P, divisão indevida e multiplicação exagerada sem fundamentação."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Na tarefa avançada, a opção correta (Índice 0) apresenta média ponderada de 10 t/ha/ano baseada em 10·4 + 30·12 = 400 t/ano sobre 40 ha; as alternativas erradas usam média simples (8), soma indevida de taxas (16) ou afirmam erroneamente que 400 t/ano necessariamente exportam da bacia."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Ética, moral e justiça",
    "contentSha256": "5a2b6b7f199991a0a096c5908fbc4b172ff7b930e5517a8e084bdc78f628087c",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.gutenberg.org/files/11224/11224-h/11224-h.htm",
      "https://www.gutenberg.org/files/5682/5682-h/5682-h.htm",
      "https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html",
      "https://classics.mit.edu/Aristotle/nicomachaen.5.v.html",
      "https://plato.stanford.edu/entries/rawls/",
      "https://plato.stanford.edu/entries/public-reason/",
      "https://chicagounbound.uchicago.edu/uclrev/vol64/iss3/1/",
      "https://liberalarts.tamu.edu/pols/wp-content/uploads/sites/20/2020/09/Rawls-A-Theory-of-Justice-3-22.pdf"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "No exercício básico, a alternativa D 'O costume é um dado relevante, mas sua justificação pode ser examinada por argumentos e objeções' é a única que separa descrição de aceitação de uma norma de sua justificação, alinhando-se à distinção central da aula entre prática e norma defendida, ao passo que A confunde aceitação com justiça, B rejeita toda tradição automaticamente e C reduz reflexão a gosto individual."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "No exercício intermediário, a alternativa B 'Comparar imparcialmente benefícios e prejuízos esperados, considerando magnitude, duração e incerteza, sem decidir só pelo número de pessoas' expressa corretamente a orientação utilitarista às consequências para os afetados sem transformar contagem em resultado suficiente, ao contrário de A que ignora magnitude e prejuízos, C que confunde imparcialidade com interesse do decisor e D que impõe igualdade numérica automática."
      },
      {
        "index": 2,
        "correctIndex": 2,
        "reasoning": "No exercício avançado, a alternativa C 'A alegação de ganho de renda não basta: devem ser respeitadas liberdades básicas iguais e igualdade equitativa de oportunidades, com suas prioridades' considera a articulação dos princípios rawlsianos e suas prioridades, ao passo que A transforma o princípio da diferença em autorização para sacrificar condições anteriores, B reduz justiça a decisão majoritária e D confunde teoria com igualdade aritmética universal."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Trabalho e transformações produtivas",
    "contentSha256": "60399aaa018d450d9e1923be36f74299d1c7939c8893baf32558c437d4685533",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://ilostat.ilo.org/blog/work-and-employment-are-not-synonyms/",
      "https://www.ilo.org/topics-and-sectors/care-economy",
      "https://www.marxists.org/archive/marx/works/1867-c1/ch07.htm",
      "https://www.gutenberg.org/cache/epub/6435/pg6435-images.html",
      "https://www.thehenryford.org/collections/explore/articles/detail/articles/2021/07/22/ford-methods-and-the-ford-shops",
      "https://global.toyota/en/company/vision-and-philosophy/production-system/",
      "https://www.ilo.org/publications/algorithmic-management-work-and-its-implications-different-contexts"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A atividade de cuidado sem pagamento configura trabalho não remunerado, mas não basta para determinar situação de emprego ou desemprego de Rosa, pois faltam dados sobre procura e disponibilidade de trabalho; a opção correta reconhece esse limite sem inferir categoricamente."
      },
      {
        "index": 1,
        "correctIndex": 2,
        "reasoning": "A organização com linha móvel, padronização e postos especializados é caracteristicamente associada ao fordismo, mas os dados do caso não permitem concluir sobre ganhos iguais ou ausência de conflito entre trabalhadores; a opção correta mantém esse limite analítico."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A produtividade por trabalhador passou de 15 para 24 peças (aumento de 60%), mas esse cálculo sozinho não mensura esforço, salário ou causas da mudança, conforme a lição alerta sobre não confundir produção total com produtividade relativa."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Elementos visuais: ponto, linha, cor, forma e textura",
    "contentSha256": "bd639a0e38e37c77044c0edf905cd95621ad714488376484d682f2ed7c51bce2",
    "draftMethod": "Claude Code; correções e conferência pelo Codex; nova crítica em sessão independente",
    "verifiedSourceUrls": [
      "https://www.getty.edu/education/teachers/building_lessons/elements_art.pdf",
      "https://www.getty.edu/education/teachers/building_lessons/principles_design.pdf",
      "https://www.getty.edu/education/k-12-learning/describe-listen-draw/vocabulary-for-describing-an-artwork/",
      "https://www.nga.gov/educational-resources/elements-art",
      "https://developer.mozilla.org/en-US/docs/Glossary/RGB"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 1,
        "reasoning": "A resposta correta B distingue textura visual representada da textura tátil do papel liso, evitando a inferência de que imagens de rugosidade transferem automaticamente relevo ao suporte, que é o conceito central e o principal alerta de pitfall da lição sobre marcas e superfícies."
      },
      {
        "index": 1,
        "correctIndex": 3,
        "reasoning": "A opção D identifica corretamente que o contraste de valor e escala entre o título claro e grande em fundo escuro sustentam o destaque, sem assumir matizes cromáticos não informados, alinhando-se ao aviso da lição para declarar o modelo ao falar de complementaridade e não confundir saturação com claridade."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "A resposta correta A articula uma possível leitura de rede de memória a partir dos elementos descritos (pontos, conexões lineares, recortes, valores e texturas), qualificando-a como interpretativa em vez de definitiva, resistindo aos três alertas de pitfall sobre código cultural universal, dedução biográfica e datação exata sem evidência."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Esportes e suas regras",
    "contentSha256": "d5a4d1866620f26b79ba76b13ce625a0eb49900ce10623766d0666701edd89cb",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://about.fiba.basketball/en/our-sport/official-basketball-rules",
      "https://about.fiba.basketball/en/services/resource-hub/downloads",
      "https://www.nz.basketball/wp-content/uploads/2026/07/documents-corporate-fiba-official-rules-2026-v1-1.pdf",
      "https://www.fivb.com/volleyball/the-game/official-volleyball-rules/",
      "https://www.fivb.com/wp-content/uploads/2025/01/FIVB-Volleyball_Rules2025_2028-EN-v05.pdf",
      "https://www.unesco.org/en/legal-affairs/international-charter-physical-education-physical-activity-and-sport"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 3,
        "reasoning": "Na tarefa básica, D distingue o regulamento oficial da adaptação pedagógica declarada. A impõe rigidez universal ao contexto escolar, B atribui alcance federativo a uma decisão local e C elimina informações necessárias para compreender o jogo. A identificação de contexto e referência não autoriza modificar regras secretamente."
      },
      {
        "index": 1,
        "correctIndex": 1,
        "reasoning": "Na tarefa intermediária, B aplica a vantagem mínima de dois pontos: 25–24 representa diferença de um e o set não decisivo continua; 26–24 seria um término possível. A ignora a vantagem, C inventa reinício do set e D inventa valor duplo do rally. O quinto decisivo tem mínimo diferente, mas não dispensa a vantagem de dois."
      },
      {
        "index": 2,
        "correctIndex": 0,
        "reasoning": "Na tarefa avançada, A anuncia regras adaptadas e critérios antes do jogo, combina papéis e propõe avaliar oportunidades de participação. B atribui autoridade oficial inexistente, C muda unilateralmente o acordo e D garante resultado universal antes de observar. A proposta é pedagógica e não um efeito já comprovado."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Células e seres vivos",
    "contentSha256": "ad9f6af7a56a41bf5814eb17c19e3162527642e345f35946e56fc3ceea1be055",
    "draftMethod": "Autoria e conferência principal pelo Codex com fontes verificadas; crítica independente pelo Claude Code via NVIDIA NIM",
    "verifiedSourceUrls": [
      "https://openstax.org/books/biology-2e/pages/4-1-studying-cells",
      "https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells",
      "https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells",
      "https://openstax.org/books/biology-2e/pages/21-1-viral-evolution-morphology-and-classification",
      "https://openstax.org/books/biology-2e/pages/1-1-the-science-of-biology"
    ],
    "humanPedagogicalReview": "pending",
    "questionChecks": [
      {
        "index": 0,
        "correctIndex": 2,
        "reasoning": "A alternativa C corresponde à relação sustentada pela teoria celular: novas células a partir de preexistentes, sem afirmar resolver a origem da primeira vida. A opção A defende geração espontânea, contradizendo a presença de células anteriores. A opção B generaliza indevidamente multicelularidade e órgãos a partir de divisão celular. A opção D confunde reprodução celular com origem de vírus, entidades acelulares."
      },
      {
        "index": 1,
        "correctIndex": 0,
        "reasoning": "A alternativa A separa corretamente respiração mitocondrial e fotossíntese, mantendo o contexto vegetal, visto que mitocôndrias ocorrem em células vegetais e a ausência de cloroplastos não implica animalidade. A alternativa B incorretamente torna cloroplastos condição única de produção de ATP, ignorando a respiração mitocondrial. A alternativa C contradiz o núcleo delimitado, característico de eucariotos. A alternativa D atribui mitocôndrias exclusivamente a animais, fato falso visto que ocorrem também em muitas células vegetais e fúngicas."
      },
      {
        "index": 2,
        "correctIndex": 3,
        "reasoning": "A alternativa D calcula corretamente a amplificação linear: 2,5 mm = 2500 µm, dividindo por 5 µm obtém-se 500 vezes. A alternativa A ignora a conversão de unidades entre milímetros e micrômetros. A alternativa B usa apenas o tamanho da imagem sem dividir pelo diâmetro real. A alternativa C acerta o valor numérico, porém incorretamente afirma que a ampliação garante distinguir qualquer estrutura menor, confundindo aumento com resolução, que depende de método, contraste e preparo."
      }
    ]
  }
] as const;
