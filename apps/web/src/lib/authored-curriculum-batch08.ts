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
  }
] as const;
