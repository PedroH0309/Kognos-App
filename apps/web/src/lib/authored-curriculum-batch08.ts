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
  }
] as const;
