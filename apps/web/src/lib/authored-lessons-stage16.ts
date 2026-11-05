/** Etapa 15 — aulas específicas e problemas cotidianos, sem geração ao ler.
 * Conteúdo original redigido pelo assistente, ainda sem revisão docente.
 * Os cenários são didáticos; dados hipotéticos não são fatos documentados.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseLevel,CourseSection,CourseTask} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {examBlueprints} from './exam-blueprints.ts';

type Chapter={title:string;explanation:string;example:string;pitfall:string;steps:[string,string]};
type Practice={level:CourseLevel;prompt:string;hint:string;solution:string};
type Spec={subject:string;topic:string;objective:string;sections:[Chapter,Chapter,Chapter];tasks:Practice[];everyday:Pick<EverydayContext,'context'|'question'|'answer'|'connections'>};
const specs:Spec[] = [
  {
    "subject": "Matemática",
    "topic": "Regra de três simples",
    "objective": "Resolver problemas de proporcionalidade direta e inversa por meio de grandezas, unidades e justificativas, distinguindo regras de três de relações que não são proporcionais.",
    "sections": [
      {
        "title": "Reconheça grandezas proporcionais antes de calcular",
        "explanation": "Regra de três simples é um procedimento para determinar um valor desconhecido quando duas grandezas mantêm relação de proporcionalidade. Na proporcionalidade direta, multiplicar uma grandeza por um fator multiplica a outra pelo mesmo fator, mantendo constante a razão y/x para x diferente de zero. Em uma receita proporcional, dobrar porções requer dobrar ingredientes, se a composição for mantida. Mas nem toda relação cotidiana é proporcional: preço de corrida de aplicativo pode incluir taxa fixa, e temperatura em graus Celsius não varia proporcionalmente à energia em todas as circunstâncias. Antes de escrever números em colunas, identifique quais grandezas estão envolvidas, suas unidades, as condições que permanecem iguais e a hipótese de proporção. Conferir se zero de uma grandeza implicaria zero da outra pode ajudar, mas não substitui conhecer o contexto.",
        "example": "Se 3 cadernos idênticos custam R$ 27 sem desconto ou taxa fixa, o preço por unidade é R$ 9. Para 5 cadernos, o modelo direto fornece 5×9=R$ 45.",
        "pitfall": "Montar uma regra de três automaticamente para qualquer problema com quatro números, mesmo quando existe valor fixo ou relação não proporcional.",
        "steps": [
          "Nomeie as duas grandezas e as unidades; registre quais condições do problema foram mantidas.",
          "Verifique se a razão entre as grandezas é constante antes de usar multiplicação cruzada."
        ]
      },
      {
        "title": "Proporção direta e resolução com unidade",
        "explanation": "Em grandezas diretamente proporcionais, uma tabela pode ser representada por y=kx, com k constante. A regra de três usa equivalência de razões: a/b=c/x, com denominadores não nulos, implica ax=bc e permite resolver x. É possível trabalhar por taxa unitária sem multiplicação cruzada, o que facilita a interpretação do resultado. Por exemplo, se 4 litros de tinta cobrem hipoteticamente 28 m² com espessura constante, a taxa é 7 m² por litro e 10 litros cobririam 70 m² nas mesmas condições. Ao resolver, mantenha quantidades correspondentes na mesma posição e confira a coerência: ao aumentar a quantidade adquirida, o total de preço não deve diminuir sem desconto. A resposta precisa apresentar a unidade correta, e a precisão deve respeitar os dados do exercício.",
        "example": "Em um problema hipotético, 6 metros do mesmo tecido custam R$ 90. A taxa é 90/6=R$ 15 por metro; 8 metros custam 8×15=R$ 120, supondo preço linear.",
        "pitfall": "Inverter a ordem dos termos de uma das razões e obter um resultado que contraria a direção esperada da grandeza.",
        "steps": [
          "Organize a tabela com grandezas correspondentes e calcule a taxa unitária quando possível.",
          "Resolva a proporção e compare o resultado com o comportamento esperado antes de responder."
        ]
      },
      {
        "title": "Proporção inversa e os limites da regra",
        "explanation": "Duas grandezas são inversamente proporcionais quando, sob condições adequadas, o produto xy permanece constante. Em uma tarefa com volume fixo de trabalho e produtividade individual igual, aumentar a quantidade de trabalhadores pode diminuir o tempo necessário, se não houver obstáculos de coordenação. Se 4 máquinas idênticas terminam um lote em 12 horas, 6 máquinas terminariam em 8 horas no modelo ideal, pois 4×12=6×8=48 máquinas-hora. Na inversa não se igualam razões na mesma orientação da proporcionalidade direta; é necessário usar o produto constante ou inverter uma das razões. Situações reais possuem pausas, diferenças de eficiência, escalas e custos adicionais, que podem invalidar a proporcionalidade. A análise correta distingue modelo matemático de previsão operacional garantida e identifica condições antes de calcular.",
        "example": "Em exercício idealizado, 3 torneiras idênticas enchem um tanque em 10 horas. Com 5 torneiras do mesmo tipo funcionando simultaneamente, o tempo seria (3×10)/5=6 horas.",
        "pitfall": "Achar que toda relação em que uma grandeza aumenta e a outra diminui é inversamente proporcional, sem verificar produto constante.",
        "steps": [
          "Verifique se o produto das grandezas é constante sob a hipótese apresentada no enunciado.",
          "Monte xy=k, resolva o valor desconhecido e explicite as condições de eficiência assumidas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Dois quilos de fruta custam R$ 18 sem taxas. Quanto custam cinco quilos nas mesmas condições?",
        "hint": "Determine primeiro o preço de um quilo.",
        "solution": "O preço por quilo é 18/2=R$ 9. Para cinco quilos, 5×9=R$ 45. A relação é direta porque o preço unitário foi considerado constante."
      },
      {
        "level": "basic",
        "prompt": "Três ingressos de igual preço custam R$ 60. Determine o valor de sete ingressos.",
        "hint": "Calcule a taxa por ingresso e multiplique por sete.",
        "solution": "Cada ingresso custa 60/3=R$ 20. Sete ingressos custam 7×20=R$ 140, supondo o mesmo preço para todas as unidades."
      },
      {
        "level": "intermediate",
        "prompt": "Quatro litros de tinta cobrem 28 m². Quantos litros cobrem 49 m², mantendo rendimento?",
        "hint": "Use o rendimento 28/4 em metros quadrados por litro.",
        "solution": "Cada litro cobre 7 m². Para 49 m², são necessários 49/7=7 litros. A proporção é direta sob a hipótese de rendimento constante."
      },
      {
        "level": "intermediate",
        "prompt": "Quatro máquinas concluem uma tarefa em 12 horas. Em quanto tempo seis máquinas iguais fariam o mesmo serviço idealizado?",
        "hint": "Na proporção inversa, número de máquinas vezes horas é constante.",
        "solution": "4×12=6×t, então t=48/6=8 horas. O resultado exige máquinas equivalentes, trabalho fixo e ausência de limitações de coordenação."
      },
      {
        "level": "advanced",
        "prompt": "Uma corrida custa R$ 8 de taxa fixa mais R$ 2 por quilômetro. Pode-se usar regra de três direta para distância e preço total?",
        "hint": "Verifique o preço de uma corrida com distância zero.",
        "solution": "Não. A relação é P=8+2d; a taxa fixa impede que P/d seja constante. Para 5 km, P=18, e não o resultado de uma proporção direta simples."
      },
      {
        "level": "advanced",
        "prompt": "Duas equipes levam 15 e 10 dias para serviço igual. Conclua se o número de pessoas é proporcional inversamente ao tempo sem saber as produtividades.",
        "hint": "A comparação exige eficiência equivalente por pessoa.",
        "solution": "Não é possível concluir apenas pelos dias. A proporcionalidade inversa requer produtividade por pessoa semelhante e o mesmo trabalho; sem essas hipóteses, a regra de três pode ser inadequada."
      }
    ],
    "everyday": {
      "context": "Uma papelaria vende pacotes de folhas pelo mesmo preço por unidade. Um estudante pretende comprar mais pacotes e outro calcula um serviço de transporte que também inclui taxa fixa por entrega.",
      "question": "Por que o preço das folhas pode ser tratado por proporção direta, mas o transporte com taxa fixa não?",
      "answer": "O preço das folhas varia com quantidade a uma taxa constante. No transporte, P=taxa fixa+valor variável, portanto a razão entre preço e quantidade não permanece constante.",
      "connections": [
        {
          "subject": "Matemática",
          "topic": "Razões, escalas e proporcionalidade",
          "reason": "Reconhecer razões constantes é a condição conceitual para escolher corretamente uma regra de três."
        },
        {
          "subject": "Matemática",
          "topic": "Média aritmética e ponderada",
          "reason": "Comparar preços unitários e quantidades também exige saber quando uma razão representa adequadamente o conjunto de observações."
        }
      ]
    }
  },
  {
    "subject": "Física",
    "topic": "Movimento uniformemente variado",
    "objective": "Analisar movimentos retilíneos de aceleração constante, calcular posição e velocidade e interpretar sinais e gráficos em contextos de trânsito.",
    "sections": [
      {
        "title": "Aceleração constante não significa velocidade constante",
        "explanation": "No movimento retilíneo uniformemente variado (MUV), a aceleração é constante ao longo do intervalo analisado e, por isso, a velocidade varia linearmente com o tempo. A aceleração média no intervalo é a=(v−v₀)/Δt e coincide com a instantânea quando é constante. No Sistema Internacional, velocidade é expressa em m/s, tempo em segundos e aceleração em m/s². A equação v=v₀+at permite calcular velocidade após certo tempo. O sinal depende do eixo escolhido: uma aceleração negativa não significa sempre desaceleração, porque um corpo com velocidade negativa e aceleração negativa pode aumentar a rapidez. Em deslocamento urbano real, a aceleração pode mudar com tráfego, frenagens e irregularidades; o MUV descreve uma aproximação apropriada a trechos delimitados, não todo o trajeto.",
        "example": "Um carrinho parte com velocidade de 2 m/s e acelera de modo constante a 3 m/s² durante 4 s em sentido positivo. Ao final, v=2+3×4=14 m/s, sob o modelo.",
        "pitfall": "Confundir aceleração negativa com perda obrigatória de rapidez ou aplicar equações de aceleração constante a um percurso inteiro com várias mudanças.",
        "steps": [
          "Escolha o sentido positivo do eixo e converta velocidades para m/s quando necessário.",
          "Identifique v₀, a e Δt antes de calcular v=v₀+aΔt e verificar o sinal."
        ]
      },
      {
        "title": "Posição, deslocamento e área sob o gráfico",
        "explanation": "Para aceleração constante em uma dimensão, a posição pode ser obtida por s=s₀+v₀t+(at²)/2, considerando t desde a condição inicial. O deslocamento é Δs=s−s₀ e pode ter sinal, enquanto a distância percorrida é não negativa e pode ser diferente do módulo do deslocamento quando há inversão do sentido. Em um gráfico velocidade versus tempo, a área algébrica sob a curva representa deslocamento; áreas abaixo do eixo contam negativamente. O gráfico v×t de MUV é uma reta cuja inclinação é a aceleração, enquanto o gráfico posição×tempo é parabólico quando a aceleração não é nula. A interpretação precisa distinguir unidades da posição, deslocamento e velocidade e observar se o objeto mudou de sentido no intervalo.",
        "example": "Um veículo parte do repouso com a=2 m/s² em linha reta por 3 s. O deslocamento é 0×3+(2×3²)/2=9 m. No gráfico v×t, a área triangular é 3×6/2=9 m.",
        "pitfall": "Interpretar área geométrica sempre positiva como deslocamento quando a velocidade fica negativa, ou confundir distância percorrida com deslocamento.",
        "steps": [
          "Use s=s₀+v₀t+(at²)/2 para obter posição relativa ao referencial escolhido.",
          "Verifique se ocorreu inversão do sentido antes de identificar deslocamento com distância."
        ]
      },
      {
        "title": "Frenagem e equação sem o tempo",
        "explanation": "Quando a aceleração é constante, é possível eliminar o tempo entre as equações e obter v²=v₀²+2aΔs, conhecida como equação de Torricelli. Em frenagem idealizada, se o eixo positivo acompanha o movimento inicial, a aceleração contrária aparece negativa e a velocidade final pode chegar a zero. A distância calculada não corresponde automaticamente à distância total de parada de um veículo real, pois o tempo de reação do condutor, condições do pavimento, pneus e outros fatores acrescentam trajetos e alteram a desaceleração. A fórmula também não fornece sinal de velocidade diretamente, pois aparece v²; direção e momento do movimento exigem análise adicional. Em interpretação de acidentes ou segurança viária, é fundamental distinguir cálculo didático de diagnóstico real e evitar estimativas sem dados.",
        "example": "Um veículo a 20 m/s freia com aceleração constante de −5 m/s² até parar. Com 0=20²+2(−5)Δs, obtém-se Δs=40 m, desconsiderando reação do motorista e variações.",
        "pitfall": "Anunciar a distância de frenagem de um modelo ideal como distância total real de parada, sem incluir tempo de reação e condições externas.",
        "steps": [
          "Separe distância de reação e trecho de frenagem quando a questão envolver parada de veículo.",
          "Use v²=v₀²+2aΔs com os sinais coerentes e cheque a plausibilidade física."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um objeto parte do repouso com a=2 m/s² por 5 s. Qual velocidade final?",
        "hint": "Calcule v=v₀+at com v₀=0.",
        "solution": "v=0+2×5=10 m/s, no sentido positivo escolhido e supondo aceleração constante durante os cinco segundos."
      },
      {
        "level": "basic",
        "prompt": "Uma velocidade passa de 4 para 16 m/s em 3 s, com aceleração constante. Calcule a.",
        "hint": "Use a=(v−v₀)/Δt.",
        "solution": "a=(16−4)/3=4 m/s². A variação da velocidade foi de 12 m/s durante três segundos."
      },
      {
        "level": "intermediate",
        "prompt": "Um carrinho parte do repouso e acelera a 2 m/s² durante 4 s. Qual deslocamento?",
        "hint": "Use Δs=v₀t+at²/2.",
        "solution": "Δs=0×4+(2×4²)/2=16 m. O resultado depende da aceleração constante e do referencial de movimento retilíneo."
      },
      {
        "level": "intermediate",
        "prompt": "Um corpo com v₀=5 m/s e a=1 m/s² desloca-se por 3 s. Determine Δs.",
        "hint": "Substitua na equação do deslocamento.",
        "solution": "Δs=5×3+(1×3²)/2=15+4,5=19,5 m. A velocidade inicial contribui para o deslocamento juntamente com a aceleração."
      },
      {
        "level": "advanced",
        "prompt": "Um veículo a 20 m/s freia com a=−5 m/s² até parar. Calcule distância de frenagem ideal.",
        "hint": "Use 0=v₀²+2aΔs.",
        "solution": "0=400−10Δs, então Δs=40 m. Esse valor não inclui a distância percorrida durante reação do motorista."
      },
      {
        "level": "advanced",
        "prompt": "Se velocidade inicial e aceleração forem negativas num eixo, a rapidez pode aumentar? Justifique.",
        "hint": "Rapidez é o módulo da velocidade.",
        "solution": "Sim. Por exemplo, v₀=−2 m/s e a=−1 m/s² produzem v=−3 m/s após um segundo, aumentando o módulo de 2 para 3 m/s."
      }
    ],
    "everyday": {
      "context": "Um carro em uma simulação educacional viaja a 20 m/s e começa a frear com desaceleração constante de módulo 5 m/s². O programa mostra que são necessários quarenta metros durante a frenagem.",
      "question": "Como a fórmula da aceleração constante produz quarenta metros e por que a parada real pode exigir mais?",
      "answer": "De v²=v₀²+2aΔs: 0=400−10Δs, logo Δs=40 m. A distância real inclui reação do condutor e condições que podem alterar a desaceleração.",
      "connections": [
        {
          "subject": "Física",
          "topic": "Velocidade média e instantânea",
          "reason": "O MUV descreve como a velocidade instantânea varia; seu valor não equivale à velocidade média em qualquer intervalo."
        },
        {
          "subject": "Física",
          "topic": "Leis de Newton",
          "reason": "A resultante das forças explica a aceleração que é tratada como constante nos modelos idealizados de MUV."
        }
      ]
    }
  },
  {
    "subject": "Química",
    "topic": "Reações químicas e balanceamento",
    "objective": "Distinguir transformação química de mudança física, reconhecer conservação dos átomos e balancear equações simples sem alterar fórmulas das substâncias.",
    "sections": [
      {
        "title": "Reconheça a reação sem se apoiar em um único indício",
        "explanation": "Uma reação química transforma espécies em outras por reorganização de átomos e ligações. Mudança de cor, formação de gás, precipitado, variação de temperatura ou emissão luminosa podem acompanhar certas reações, mas não são provas isoladas e universais de transformação química. A dissolução de açúcar em água pode alterar a aparência do sistema sem produzir uma nova substância nas condições comuns. Já a oxidação de ferro envolve processos químicos que formam novos compostos, em condições apropriadas. Uma equação química representa reagentes antes da seta e produtos depois, informando uma transformação proposta ou observada. Para interpretá-la, é necessário reconhecer fórmulas e estados físicos quando fornecidos; a equação não registra automaticamente velocidade, energia ou mecanismo detalhado. Experimentos reais devem seguir orientação e segurança, não depender de misturas improvisadas.",
        "example": "Na formação idealizada de água, hidrogênio molecular reage com oxigênio molecular: H₂+O₂→H₂O, ainda sem balanceamento. A seta expressa transformação de reagentes em produto.",
        "pitfall": "Afirmar que toda bolha demonstra reação química ou que dissolução sempre produz uma nova espécie química diferente.",
        "steps": [
          "Descreva quais substâncias estão antes e depois e quais evidências de transformação o enunciado oferece.",
          "Evite inferir o produto de uma reação apenas pela cor ou aparência sem informações químicas."
        ]
      },
      {
        "title": "Conservação de átomos e coeficientes",
        "explanation": "No balanceamento de uma reação química comum, os átomos de cada elemento devem aparecer em igual número antes e depois da seta, respeitando conservação da matéria nos limites da reação. Ajustam-se coeficientes estequiométricos, números escritos antes das fórmulas, sem alterar os índices internos dessas fórmulas. Para H₂+O₂→H₂O, a forma balanceada é 2H₂+O₂→2H₂O, com quatro átomos de H e dois de O em cada lado. Transformar H₂O em H₂O₂ para facilitar números mudaria a identidade da espécie e não seria apenas balanceamento. Coeficientes representam proporções de unidades ou quantidades de matéria, não massas diretamente iguais entre substâncias diferentes. A inspeção começa pelos elementos menos repetidos e segue com conferência de todos os átomos, até os coeficientes inteiros mínimos se solicitados.",
        "example": "Na reação N₂+H₂→NH₃, usamos N₂+3H₂→2NH₃. Há dois átomos de nitrogênio e seis de hidrogênio em cada lado, preservando fórmulas.",
        "pitfall": "Alterar índices químicos em vez de coeficientes ou tentar conservar número de moléculas em vez de átomos de cada elemento.",
        "steps": [
          "Conte os átomos de cada elemento nos dois lados e ajuste somente coeficientes.",
          "Reconte todos os elementos para verificar conservação e reduza coeficientes proporcionais quando cabível."
        ]
      },
      {
        "title": "Da equação balanceada aos cálculos químicos",
        "explanation": "Uma equação balanceada fornece razões de quantidade de matéria entre reagentes e produtos. Na reação 2H₂+O₂→2H₂O, dois mols de H₂ correspondem estequiometricamente a um mol de O₂ e dois mols de H₂O, caso a reação siga esse balanço. Isso não significa que misturas reais sempre apresentem conversão total; reagente limitante, rendimento, equilíbrio e condições influenciam a quantidade efetiva. É preciso distinguir coeficiente de mol de massa molar: dois mols de hidrogênio molecular não têm a mesma massa que um mol de oxigênio, embora satisfaçam a proporção indicada. O procedimento de vestibular consiste em balancear, identificar a razão molar e só depois converter massas e volumes quando necessário. Reações com íons e cargas exigem ainda conservação da carga em equações adequadas; o modelo simples de contagem de átomos é ponto de partida.",
        "example": "Se 3 mol de O₂ reagirem completamente com H₂ em excesso na equação 2H₂+O₂→2H₂O, a proporção indica até 6 mol de H₂O pelo balanço estequiométrico.",
        "pitfall": "Usar coeficientes como razão direta entre massas em gramas ou garantir rendimento de 100% em situações experimentais reais.",
        "steps": [
          "Comece com equação balanceada e destaque a proporção molar relevante.",
          "Declare condições de reagentes suficientes e rendimento antes de prever produto obtido."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual elemento da equação pode ser alterado ao balancear: coeficiente ou índice da fórmula?",
        "hint": "Mudar a fórmula altera a identidade da substância.",
        "solution": "O coeficiente colocado antes da fórmula pode ser alterado. Os índices integram a fórmula química e não devem ser mudados no balanceamento."
      },
      {
        "level": "basic",
        "prompt": "Balanceie H₂+O₂→H₂O sem modificar fórmulas.",
        "hint": "Iguale a quantidade de oxigênio primeiro.",
        "solution": "2H₂+O₂→2H₂O. Existem quatro átomos de H e dois de O de cada lado da equação."
      },
      {
        "level": "intermediate",
        "prompt": "Balanceie N₂+H₂→NH₃ e explique a razão de H₂ para NH₃.",
        "hint": "Use dois NH₃ para conservar nitrogênio.",
        "solution": "N₂+3H₂→2NH₃. A razão estequiométrica entre H₂ e NH₃ é 3:2 em mols de substâncias."
      },
      {
        "level": "intermediate",
        "prompt": "Balanceie Fe+O₂→Fe₂O₃ utilizando menores coeficientes inteiros.",
        "hint": "Use duas unidades de Fe₂O₃ para tornar oxigênios pares.",
        "solution": "4Fe+3O₂→2Fe₂O₃. Ambos os lados têm quatro átomos de ferro e seis átomos de oxigênio."
      },
      {
        "level": "advanced",
        "prompt": "Para 2H₂+O₂→2H₂O, quantos mols de água podem formar-se de 3 mol de O₂ com H₂ em excesso?",
        "hint": "A proporção O₂:H₂O é 1:2.",
        "solution": "O balanço indica 3×2=6 mol de H₂O, assumindo reação completa e H₂ suficiente, sem perdas ou processos concorrentes."
      },
      {
        "level": "advanced",
        "prompt": "Por que dois mols de H₂ e um mol de O₂ não significam massas iguais?",
        "hint": "Cada substância possui massa molar distinta.",
        "solution": "Coeficientes expressam proporções de quantidade de matéria; as massas dependem da massa molar de H₂ e O₂, que são diferentes."
      }
    ],
    "everyday": {
      "context": "Durante uma aula, um cartaz mostra a reação de formação da água escrita como H₂+O₂→H₂O. Um estudante tenta resolver a falta de oxigênio acrescentando um índice ao produto, criando H₂O₂.",
      "question": "Por que modificar o índice cria outra substância e qual é o balanceamento correto da formação de água?",
      "answer": "Índices fazem parte das fórmulas e mudam a espécie. A equação correta é 2H₂+O₂→2H₂O, conservando os átomos de cada elemento.",
      "connections": [
        {
          "subject": "Química",
          "topic": "Cálculo estequiométrico",
          "reason": "O cálculo de quantidades de reagentes e produtos depende das proporções da equação previamente balanceada."
        },
        {
          "subject": "Química",
          "topic": "Equilíbrio químico e constantes",
          "reason": "Coeficientes estequiométricos também determinam expoentes em expressões escolares de constantes de equilíbrio."
        }
      ]
    }
  },
  {
    "subject": "Biologia",
    "topic": "Meiose",
    "objective": "Descrever as duas divisões da meiose, explicar redução da ploidia, segregação de alelos e variabilidade genética, distinguindo-a da mitose.",
    "sections": [
      {
        "title": "Por que a reprodução sexuada utiliza redução cromossômica",
        "explanation": "Em organismos com ciclo de vida diploide, a meiose é divisão celular especializada que gera células com número reduzido de conjuntos cromossômicos, fundamental para produção de gametas em animais. A duplicação do DNA ocorre na intérfase anterior à meiose I, e não entre as duas divisões meióticas. Em uma célula humana diploide típica com 46 cromossomos, gametas formados normalmente possuem 23 cromossomos, embora falhas de segregação possam produzir alterações. Um cromossomo duplicado possui duas cromátides-irmãs e ainda conta como um cromossomo segundo o critério de centrômero. Durante a fecundação, gametas haploides unem-se e restauram a condição diploide no zigoto, no modelo humano típico. As fases meióticas precisam ser compreendidas pela separação de cromossomos homólogos e cromátides, não pela memorização isolada de nomes.",
        "example": "Uma célula diploide hipotética com 2n=6 possui três pares de cromossomos homólogos. Em uma meiose regular, cada célula final haploide terá n=3 cromossomos.",
        "pitfall": "Contar cromátides como cromossomos independentes em toda fase ou afirmar que DNA é duplicado novamente antes da meiose II.",
        "steps": [
          "Diferencie cromossomo homólogo, cromátide-irmã e conjunto haploide antes de contar estruturas.",
          "Identifique a duplicação do DNA na intérfase anterior à primeira divisão meiótica."
        ]
      },
      {
        "title": "Meiose I: homólogos se separam",
        "explanation": "Na prófase I, cromossomos homólogos podem emparelhar-se e ocorrer crossing-over, troca de segmentos entre cromátides de homólogos, aumentando combinações genéticas. Na metáfase I, pares homólogos alinham-se de modo cuja orientação pode variar, contribuindo para assortimento independente em cromossomos não ligados. Na anáfase I, os homólogos se separam, reduzindo o número de conjuntos cromossômicos por polo, enquanto as cromátides-irmãs geralmente permanecem associadas até a segunda divisão. Por isso a meiose I é chamada reducional. As células resultantes podem ser geneticamente diferentes mesmo antes da separação das cromátides. O processo é organizado por proteínas e estruturas celulares; a descrição escolar esquemática não implica que todos os organismos reproduzam exatamente o mesmo cronograma.",
        "example": "Numa célula com dois pares de homólogos, a orientação independente dos pares na metáfase I permite diferentes combinações maternas e paternas nos polos, antes de considerar recombinação.",
        "pitfall": "Confundir separação de homólogos na meiose I com separação de cromátides-irmãs, característica predominante da meiose II.",
        "steps": [
          "Na prófase I, identifique pareamento dos homólogos e possibilidade de recombinação.",
          "Na anáfase I, destaque a separação de homólogos para explicar a redução de ploidia."
        ]
      },
      {
        "title": "Meiose II e diversidade genética dos gametas",
        "explanation": "Na meiose II, em termos esquemáticos semelhantes à mitose, cromátides-irmãs se separam, gerando células haploides com cromossomos não duplicados ao término da divisão. Em organismos animais, uma meiose pode produzir quatro produtos haploides, mas o desenvolvimento de gametas apresenta diferenças: na espermatogênese e na ovogênese humanas não se obtêm necessariamente quatro gametas funcionais equivalentes. A diversidade entre gametas deriva de recombinação, orientação independente de pares e, na reprodução sexuada, combinação de gametas na fecundação. A não disjunção, quando cromossomos ou cromátides não se separam adequadamente, pode alterar números cromossômicos; não é objetivo normal da meiose. Comparar mitose e meiose requer observar número de divisões, separação de estruturas e resultados genéticos, sem prometer que todos os gametas são distintos em qualquer organismo.",
        "example": "Num esquema ideal de célula 2n=4, a meiose I reduz a dois conjuntos de n=2; a meiose II separa cromátides, originando quatro células haploides no modelo simplificado.",
        "pitfall": "Afirmar que mitose e meiose produzem sempre células geneticamente idênticas ou que a ovogênese humana forma quatro óvulos funcionais equivalentes.",
        "steps": [
          "Na anáfase II, identifique separação das cromátides-irmãs e formação de células haploides.",
          "Compare produtos finais com mitose e conecte o processo à segregação de alelos na genética."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quantos cromossomos há normalmente em um gameta humano e numa célula somática diploide típica?",
        "hint": "A meiose reduz os conjuntos cromossômicos pela metade.",
        "solution": "Gametas humanos normalmente apresentam 23 cromossomos, enquanto células somáticas diploides típicas apresentam 46 cromossomos."
      },
      {
        "level": "basic",
        "prompt": "A duplicação do DNA ocorre entre a meiose I e a meiose II?",
        "hint": "Considere a intérfase anterior à meiose I.",
        "solution": "Não. O DNA é duplicado antes da meiose I; não há nova replicação completa entre as divisões I e II."
      },
      {
        "level": "intermediate",
        "prompt": "O que se separa predominantemente na anáfase I da meiose?",
        "hint": "Compare homólogos com cromátides-irmãs.",
        "solution": "Separam-se cromossomos homólogos, com as cromátides-irmãs geralmente ainda associadas, permitindo a redução dos conjuntos cromossômicos."
      },
      {
        "level": "intermediate",
        "prompt": "Que evento da prófase I contribui para novas combinações genéticas?",
        "hint": "Pense em troca de segmentos entre cromátides homólogas.",
        "solution": "O crossing-over pode trocar segmentos entre cromátides de cromossomos homólogos, gerando combinações de variantes genéticas."
      },
      {
        "level": "advanced",
        "prompt": "Por que meiose I é reducional e meiose II é frequentemente chamada equacional?",
        "hint": "Observe número de conjuntos de cromossomos e separação de cromátides.",
        "solution": "A meiose I separa homólogos e reduz a ploidia; a II separa cromátides-irmãs sem nova redução de conjuntos cromossômicos, em condições normais."
      },
      {
        "level": "advanced",
        "prompt": "Explique como a meiose se relaciona à primeira lei de Mendel.",
        "hint": "Cada gameta recebe geralmente um alelo de cada par autossômico.",
        "solution": "A separação de cromossomos homólogos durante a meiose explica a segregação dos alelos de um locus em gametas, fundamento celular do modelo mendeliano simples."
      }
    ],
    "everyday": {
      "context": "Em uma oficina de genética, a turma monta modelos de cromossomos para compreender por que os filhos recebem combinações de material hereditário de dois genitores. Alguém diz que os gametas carregam 46 cromossomos.",
      "question": "Qual é a função da meiose na formação de gametas humanos e em qual etapa separam-se os homólogos?",
      "answer": "A meiose reduz a ploidia: gametas humanos normalmente têm 23 cromossomos. Os homólogos separam-se na anáfase I; cromátides-irmãs separam-se predominantemente na divisão II.",
      "connections": [
        {
          "subject": "Biologia",
          "topic": "Primeira lei de Mendel",
          "reason": "A segregação dos alelos prevista por Mendel tem fundamento na separação dos cromossomos homólogos durante a meiose."
        },
        {
          "subject": "Biologia",
          "topic": "Ciclo celular e mitose",
          "reason": "Comparar mitose e meiose permite distinguir conservação da ploidia, redução cromossômica e diversidade genética."
        }
      ]
    }
  },
  {
    "subject": "História",
    "topic": "Tráfico atlântico e resistências",
    "objective": "Explicar o tráfico atlântico de africanos escravizados, seu caráter coercitivo e o protagonismo das resistências, distinguindo proibição do tráfico e abolição da escravidão.",
    "sections": [
      {
        "title": "Tráfico transatlântico e deslocamento forçado",
        "explanation": "O tráfico transatlântico de africanos escravizados conectou interesses comerciais, governos e redes de aprisionamento e venda de pessoas, com violência, coerção e deslocamento forçado. O Brasil foi importante destino desse tráfico ao longo de séculos; pessoas escravizadas trabalharam em plantações, mineração, atividades urbanas e muitos outros serviços. Não se deve tratar africanos como um grupo homogêneo: vinham de regiões com línguas, culturas e experiências diversas, e não participaram dessas viagens por escolha livre. Registros de portos e transações permitem reconstruir parte das redes comerciais, mas não retratam de maneira integral a vida e a resistência de cada pessoa. Para uma leitura histórica responsável, diferencie números de embarques, processos de exploração e experiências que a documentação pode silenciar.",
        "example": "Um registro de embarcação no século XIX pode informar origem e destino de um trajeto, mas não comprova sozinho as experiências particulares de todas as pessoas deslocadas.",
        "pitfall": "Chamar o tráfico de imigração voluntária ou supor que toda pessoa africana escravizada possuía exatamente a mesma história.",
        "steps": [
          "Identifique quem foi submetido ao deslocamento forçado e quais interesses sustentavam o comércio.",
          "Compare o que o documento registra com vivências e relações de poder que ele pode omitir."
        ]
      },
      {
        "title": "Quilombos, negociações e diferentes resistências",
        "explanation": "Pessoas escravizadas protagonizaram muitas formas de resistência, incluindo fugas, formação de quilombos, revoltas, negociações, ações judiciais em determinadas circunstâncias e redes de apoio comunitário. Quilombos não eram todos iguais e se constituíram em diferentes épocas e regiões, com formas variadas de organização. Palmares é referência importante, mas não resume sozinho a história dessas experiências. A preservação e recriação de práticas culturais, a organização familiar e estratégias para obter maior autonomia também devem ser estudadas com atenção ao contexto e às fontes. É incorreto imaginar que somente grandes confrontos armados representaram resistência; nem todas as estratégias deixaram documentação abundante. Uma análise histórica deve perguntar quem participou, quais condições enfrentava e quais resultados podem ser de fato demonstrados.",
        "example": "Uma carta sobre fuga de pessoas escravizadas revela um episódio de resistência, mas é necessário cruzá-la com outras fontes para compreender redes de apoio e desdobramentos.",
        "pitfall": "Descrever escravizados como totalmente passivos ou afirmar que todos os quilombos seguiram o mesmo modelo de organização.",
        "steps": [
          "Classifique resistências coletivas e individuais sem reduzir a história a revoltas famosas.",
          "Considere limites das fontes antes de deduzir motivações particulares e trajetórias completas."
        ]
      },
      {
        "title": "As leis de 1831, 1850 e 1888 não dizem a mesma coisa",
        "explanation": "A lei de 1831 proibiu a importação de africanos escravizados no Brasil, mas foi amplamente descumprida, e o tráfico clandestino persistiu. A Lei Eusébio de Queirós de 1850 estabeleceu repressão mais efetiva ao tráfico atlântico destinado ao Brasil, contribuindo para seu encerramento. Nenhuma das duas leis extinguiu automaticamente a escravidão dentro do território brasileiro; o fim jurídico dessa instituição ocorreu em 13 de maio de 1888, com a Lei Áurea. A história dessas transformações inclui pressões internacionais, mudanças econômicas, resistências de pessoas escravizadas e mobilização abolicionista. Não é adequado apresentar a abolição como concessão generosa de uma única liderança. A mudança da lei não assegurou, por si só, igualdade material a quem havia sido escravizado.",
        "example": "Numa linha do tempo, 1831 corresponde à proibição inicial da importação, 1850 à repressão mais eficaz ao tráfico transatlântico e 1888 à abolição jurídica.",
        "pitfall": "Afirmar que a Lei de 1850 libertou todas as pessoas escravizadas ou que a proibição de 1831 foi inteiramente cumprida.",
        "steps": [
          "Organize a linha do tempo distinguindo tráfico atlântico e escravidão interna.",
          "Relacione transformações jurídicas ao protagonismo de pessoas escravizadas e movimentos abolicionistas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que o tráfico atlântico de africanos escravizados não deve ser descrito como migração voluntária?",
        "hint": "Considere coerção, aprisionamento e perda de liberdade.",
        "solution": "O tráfico envolvia aprisionamento, comercialização de pessoas e deslocamento forçado. Não se tratou de decisão livre de migração."
      },
      {
        "level": "basic",
        "prompt": "Cite duas formas de resistência de pessoas escravizadas no Brasil.",
        "hint": "Pense em organizações coletivas e ações individuais.",
        "solution": "Fugas e formação de quilombos são exemplos; revoltas, negociações e ações judiciais também ocorreram em contextos diferentes."
      },
      {
        "level": "intermediate",
        "prompt": "O que mudou entre a lei de 1831 e a Lei Eusébio de Queirós de 1850?",
        "hint": "Uma proibição foi largamente descumprida; a outra trouxe repressão mais eficaz.",
        "solution": "A lei de 1831 proibiu a importação de africanos escravizados, mas teve aplicação insuficiente; a de 1850 estabeleceu medidas mais eficazes de repressão ao tráfico atlântico."
      },
      {
        "level": "intermediate",
        "prompt": "Por que o fim do tráfico em 1850 não significou o fim da escravidão brasileira?",
        "hint": "As medidas regulavam atividades distintas.",
        "solution": "O tráfico atlântico se referia à entrada de pessoas escravizadas, enquanto a escravidão interna continuou legal até 1888."
      },
      {
        "level": "advanced",
        "prompt": "Uma lista portuária traz quantidade de pessoas desembarcadas. Por que ela não revela toda a história do tráfico?",
        "hint": "Registros administrativos não documentam integralmente experiências pessoais.",
        "solution": "A lista pode revelar fluxos comerciais, mas não descreve completamente as condições de coerção, trajetórias, relações e resistências das pessoas afetadas."
      },
      {
        "level": "advanced",
        "prompt": "Explique por que resistências devem ser incluídas ao estudar a abolição.",
        "hint": "Mudanças legais resultam de processos históricos de conflito.",
        "solution": "Pessoas escravizadas e libertas atuaram por diversas formas de resistência e organização, contribuindo para pressões e transformações que antecederam 1888."
      }
    ],
    "everyday": {
      "context": "Uma turma visita um memorial e encontra três datas: 1831, 1850 e 1888. O guia afirma que todas significam o fim da escravidão e que a liberdade dependeu somente de uma decisão política.",
      "question": "O que cada data representa e por que a participação das pessoas escravizadas precisa fazer parte da explicação?",
      "answer": "1831 foi a proibição inicial da importação, pouco cumprida; 1850 trouxe repressão mais eficaz ao tráfico atlântico; 1888 extinguiu a escravidão. Resistências contribuíram para o processo histórico.",
      "connections": [
        {
          "subject": "História",
          "topic": "Abolição e pós-abolição",
          "reason": "A trajetória até a Lei Áurea e as dificuldades posteriores mostram a diferença entre fim do tráfico e direitos efetivos."
        },
        {
          "subject": "Literatura",
          "topic": "Naturalismo brasileiro",
          "reason": "Textos do fim do século XIX precisam ser situados nas hierarquias sociais do período escravista e pós-abolição."
        }
      ]
    }
  },
  {
    "subject": "Geografia",
    "topic": "Escalas cartográficas",
    "objective": "Ler escalas gráficas e numéricas, converter distâncias e interpretar diferenças entre distância reta e deslocamento real sobre uma rede urbana.",
    "sections": [
      {
        "title": "O que significa escala em um mapa",
        "explanation": "Escala cartográfica é a razão entre uma distância representada no mapa e a distância correspondente na superfície terrestre, medidas na mesma unidade. Na escala 1:100.000, um centímetro no mapa representa cem mil centímetros, isto é, um quilômetro no terreno, quando se considera a distância cartográfica adequada. A escrita 1:100.000 não significa que cada centímetro represente cem mil quilômetros. Escala é uma redução proporcional num modelo, não o tamanho físico de um arquivo digital nem a qualidade da impressão. Antes de calcular, identifique se a escala é numérica ou gráfica e se a medida foi feita entre pontos em linha reta ou ao longo de um trajeto. Como a Terra é curva e os mapas utilizam projeções, distorções e condições de uso precisam ser consideradas em trabalhos mais exigentes. Em provas escolares, os exercícios usualmente indicam uma escala para uma distância determinada.",
        "example": "Em um mapa de escala 1:50.000, a distância de 2 cm entre dois pontos equivale a 100.000 cm, ou 1 km, na representação cartográfica proposta.",
        "pitfall": "Multiplicar comprimentos que estão em unidades diferentes sem converter ou interpretar o denominador da escala como quilômetros diretamente.",
        "steps": [
          "Registre a medida no mapa e o denominador da escala com unidades coerentes.",
          "Converta o resultado de centímetros do terreno para metros ou quilômetros quando necessário."
        ]
      },
      {
        "title": "Escala grande e escala pequena",
        "explanation": "Na cartografia, uma escala grande possui denominador menor, por exemplo 1:10.000; uma escala pequena utiliza denominador maior, como 1:5.000.000. Isso ocorre porque 1/10.000 é uma fração maior que 1/5.000. Mapas em escalas grandes permitem, em geral, representar áreas menores com mais detalhes locais; escalas pequenas abrangem territórios extensos e generalizam objetos. O nível de detalhamento também depende do propósito, da simbologia e dos dados, não apenas do número. Quando um mapa impresso é ampliado ou reduzido por cópia, a escala numérica original deixa de corresponder às novas medidas se não for recalculada. Uma barra de escala ampliada junto com o desenho pode preservar a possibilidade de medir. Em telas digitais, o zoom e a atualização da escala exigem atenção para não usar valores de uma visualização anterior.",
        "example": "Um plano de bairro em 1:5.000 mostra quarteirões com mais detalhe que um mapa regional em 1:1.000.000, que cobre uma área maior e simplifica representações.",
        "pitfall": "Concluir que 1:1.000.000 é maior do que 1:5.000 apenas porque o denominador é numericamente maior.",
        "steps": [
          "Compare os valores das frações antes de decidir qual escala é maior.",
          "Observe como a escala escolhida modifica área representada e detalhes úteis ao objetivo."
        ]
      },
      {
        "title": "Distância no mapa não é tempo de viagem",
        "explanation": "Uma medida em linha reta entre dois locais não representa necessariamente a distância percorrida por ruas, estradas ou trilhas. Pontes, curvas, rios, relevo, semáforos, paradas e modos de transporte podem alterar comprimento e duração de um trajeto. Um mapa em escala 1:100.000 pode indicar que escola e biblioteca estão separadas por 3 km em linha reta, mas o itinerário do ônibus pode ter distância maior. Para estimar tempo, seriam necessários dados de velocidade, esperas e rede de transporte, além da distância efetivamente percorrida. Mapas também podem representar áreas por projeções que preservam certas propriedades e distorcem outras, especialmente em escalas globais. Em uma resposta precisa, indique qual distância foi medida e evite prometer uma duração de viagem apenas pela escala.",
        "example": "Uma biblioteca está a 4 cm da escola num mapa 1:100.000, indicando 4 km em linha reta. A rota por avenidas pode ser mais longa e não se pode deduzir a duração da viagem sem dados adicionais.",
        "pitfall": "Tratar distância cartográfica reta como itinerário obrigatório e converter quilômetros diretamente em minutos sem velocidade ou informação de trajeto.",
        "steps": [
          "Diferencie distância em linha reta de distância ao longo de ruas e estradas.",
          "Não anuncie tempo de percurso sem informações de velocidade, paradas e acesso."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em escala 1:100.000, quanto representa 1 cm no terreno?",
        "hint": "Converta 100.000 centímetros em quilômetros.",
        "solution": "1 cm do mapa representa 100.000 cm no terreno, equivalentes a 1 km na distância cartográfica correspondente."
      },
      {
        "level": "basic",
        "prompt": "Qual é a escala maior: 1:10.000 ou 1:500.000?",
        "hint": "Compare as frações, não apenas os denominadores.",
        "solution": "A escala 1:10.000 é maior porque sua fração é maior; costuma permitir representação local com mais detalhes."
      },
      {
        "level": "intermediate",
        "prompt": "Um mapa 1:50.000 apresenta 4 cm entre dois pontos. Calcule a distância real.",
        "hint": "Multiplique 4 cm pelo denominador da escala.",
        "solution": "A distância é 4×50.000=200.000 cm, ou 2 km, segundo o modelo de escala apresentado."
      },
      {
        "level": "intermediate",
        "prompt": "Uma distância de 6 km será representada em escala 1:200.000. Qual comprimento no mapa?",
        "hint": "Seis quilômetros equivalem a 600.000 centímetros.",
        "solution": "No mapa, a distância é 600.000/200.000=3 cm, respeitando unidades iguais antes de aplicar a escala."
      },
      {
        "level": "advanced",
        "prompt": "Uma cópia impressa amplia o mapa ao dobro. A antiga escala numérica continua válida?",
        "hint": "O desenho mudou de tamanho e a razão também.",
        "solution": "Não. A escala numérica precisa ser recalculada, porque as medidas no papel mudaram. Uma barra gráfica ampliada proporcionalmente continua permitindo leitura."
      },
      {
        "level": "advanced",
        "prompt": "Dois pontos estão a 3 km em linha reta. Pode-se afirmar que o ônibus percorre exatamente 3 km?",
        "hint": "Trajetos podem exigir curvas, desvios e pontos de parada.",
        "solution": "Não. A distância reta é apenas uma medida espacial; o itinerário pela rede viária pode ser maior e depende das ruas disponíveis."
      }
    ],
    "everyday": {
      "context": "Um estudante mede 3 cm entre uma escola e um parque num mapa 1:100.000 e afirma que o ônibus percorre exatamente 3 km e que chegará em três minutos.",
      "question": "O que a escala realmente permite concluir e quais informações faltam sobre o transporte?",
      "answer": "A escala indica 3 km de distância cartográfica entre os pontos. A rota real pode ser mais longa e o tempo depende de velocidade, paradas e trânsito.",
      "connections": [
        {
          "subject": "Geografia",
          "topic": "Coordenadas geográficas",
          "reason": "As coordenadas permitem localizar pontos, enquanto a escala relaciona medidas desenhadas a distâncias reais."
        },
        {
          "subject": "Geografia",
          "topic": "Segregação socioespacial",
          "reason": "A distribuição de redes e serviços mostra por que distância geográfica e acesso efetivo não são a mesma coisa."
        }
      ]
    }
  },
  {
    "subject": "Português",
    "topic": "Fato, opinião e ponto de vista",
    "objective": "Identificar afirmações verificáveis, opiniões e diferentes perspectivas em textos, avaliando evidências e evitando generalizações sem contexto.",
    "sections": [
      {
        "title": "Informação verificável e avaliação não são sinônimos",
        "explanation": "Uma afirmação factual descreve um acontecimento ou estado que, em princípio, pode ser confrontado com evidências. A frase 'A biblioteca fecha às 17 horas' permite consultar calendário ou aviso oficial; 'A biblioteca fecha cedo demais' apresenta avaliação, dependente das necessidades de quem fala. Uma afirmação verificável não é automaticamente verdadeira: pode conter erro ou informação desatualizada. Da mesma forma, uma opinião não precisa ser mera preferência sem fundamento; pode ser sustentada por dados e critérios explícitos. A leitura crítica identifica o que é afirmado, o que é interpretado e que tipo de comprovação seria relevante. Em provas de língua portuguesa, números, citações e tom seguro não bastam para distinguir verdade, avaliação ou certeza. É preciso examinar a estrutura completa da frase e o contexto em que circula.",
        "example": "Um relatório informa: 'A praça recebeu novos bancos em agosto'. Uma pessoa comenta: 'A praça ficou muito mais acolhedora'. A primeira alegação é verificável; a segunda envolve avaliação da experiência.",
        "pitfall": "Tratar toda afirmação com número como fato confirmado ou declarar que opiniões nunca podem apresentar fundamentos sólidos.",
        "steps": [
          "Localize expressões que descrevem acontecimentos e outras que avaliam sua qualidade.",
          "Indique qual fonte permitiria confirmar cada alegação factual e qual critério sustenta a avaliação."
        ]
      },
      {
        "title": "Ponto de vista e escolhas do autor",
        "explanation": "Ponto de vista é a perspectiva a partir da qual alguém seleciona, organiza e interpreta fatos. Dois textos sobre o mesmo acontecimento podem destacar aspectos distintos sem necessariamente se contradizerem: um informa o aumento de horários de uma unidade de saúde, outro ressalta dificuldades de deslocamento até ela. Isso exige observar título, fontes citadas, personagens incluídos e informações omitidas. A seleção de conteúdo não prova intenção de manipular; tal intenção demanda evidências adicionais. Expressões como 'segundo o levantamento' atribuem informação a uma fonte, enquanto 'é evidente' reivindica segurança sem necessariamente fornecê-la. A leitura cuidadosa compara o conteúdo que os textos efetivamente apresentam, não características presumidas de seus autores. A identificação de perspectivas é importante em reportagens, editoriais, anúncios e também em narrativas literárias com narradores pouco confiáveis.",
        "example": "Uma notícia destaca que uma escola ampliou biblioteca; outra destaca que ela ainda não abre à noite. Ambas podem ter dados corretos e enfoques diferentes, a verificar pelas fontes.",
        "pitfall": "Concluir que perspectivas distintas são sempre mentiras ou atribuir interesses ocultos ao autor sem provas suficientes.",
        "steps": [
          "Compare títulos, fontes e aspectos do evento escolhidos por cada texto.",
          "Separe desacordos de interpretação de contradições factuais que podem ser verificadas."
        ]
      },
      {
        "title": "Como usar evidências sem ampliar indevidamente uma conclusão",
        "explanation": "Dados permitem sustentar interpretações apenas dentro de seu alcance. Se seis entre dez entrevistados preferem certo serviço, é possível descrever 60% daquela amostra, mas não afirmar automaticamente preferência de toda uma cidade. Fatos verificáveis, análises e recomendações exercem funções distintas no argumento: 'os dados mostram' descreve uma fonte, 'isso sugere' apresenta inferência e 'a escola deveria' introduz recomendação. Uma conclusão justa reconhece tamanho de amostra, período, forma de coleta e eventuais limitações. O objetivo não é tratar todas as opiniões como igualmente fundamentadas: algumas possuem respaldo metodológico e outras não. Em redações de vestibular, o estudante deve distinguir observação e interpretação, evitando cifras inventadas ou citações sem origem para tornar o texto mais convincente.",
        "example": "Numa pesquisa hipotética com 30 estudantes, 18 preferem avisos digitais. A fração é 18/30=60%, mas o resultado descreve apenas os participantes dessa pesquisa.",
        "pitfall": "Generalizar o resultado de um pequeno grupo para milhões de pessoas ou confundir popularidade com validade de uma afirmação.",
        "steps": [
          "Identifique tamanho, seleção e período da amostra antes de transformar dados em argumentos.",
          "Escreva uma conclusão proporcional às informações, marcando o que ainda é hipótese."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Classifique: 'A loja abre às 9 horas' e 'A loja abre tarde demais'.",
        "hint": "Uma frase permite verificar horário; a outra avalia.",
        "solution": "A primeira é uma afirmação factual verificável em informações de funcionamento. A segunda expressa opinião sobre a adequação do horário."
      },
      {
        "level": "basic",
        "prompt": "Uma afirmação verificável pode estar incorreta? Dê uma razão.",
        "hint": "Verificabilidade não significa confirmação.",
        "solution": "Sim. A frase 'a prova será amanhã' pode ser contrariada pelo calendário oficial, mesmo que seu conteúdo seja verificável."
      },
      {
        "level": "intermediate",
        "prompt": "Duas reportagens destacam lados diferentes de uma reforma escolar. Isso prova que uma mentiu?",
        "hint": "Verifique dados e possíveis contradições.",
        "solution": "Não. Enquadramentos diferentes podem coexistir sem falsidade; é necessário investigar informações factuais e omissões importantes."
      },
      {
        "level": "intermediate",
        "prompt": "Por que ouvir apenas dez alunos não basta para definir a opinião de todos os estudantes brasileiros?",
        "hint": "Amostra reduzida e não representativa.",
        "solution": "Os dez alunos representam apenas o conjunto entrevistado. Sem amostragem adequada, extrapolar para o país inteiro não tem fundamento."
      },
      {
        "level": "advanced",
        "prompt": "Uma pesquisa afirma 'a maioria aprovou', mas não informa participantes. O que está faltando?",
        "hint": "Procure método, tamanho e população de referência.",
        "solution": "Faltam número de participantes, seleção, período e pergunta aplicada. Sem isso, não é possível avaliar o alcance da conclusão."
      },
      {
        "level": "advanced",
        "prompt": "Um texto usa 'é óbvio que' para justificar uma alegação. Isso substitui evidência?",
        "hint": "A expressão de convicção não demonstra o fato.",
        "solution": "Não. A segurança retórica de quem escreve não substitui dados, documentação ou raciocínio válido a favor da alegação."
      }
    ],
    "everyday": {
      "context": "Duas pessoas observam que a biblioteca municipal fecha às 17 horas. Uma considera o horário suficiente; outra afirma que estudantes do turno noturno podem perder acesso.",
      "question": "Qual informação pode ser conferida oficialmente e quais avaliações exigem critérios ou dados sobre usuários?",
      "answer": "O horário é informação verificável. Julgar se é suficiente é avaliação; investigar possíveis prejuízos requer conhecer horários e necessidades dos estudantes.",
      "connections": [
        {
          "subject": "Português",
          "topic": "Checagem de fontes e desinformação",
          "reason": "Diferenciar alegações verificáveis de interpretações ajuda a escolher fontes e evidências adequadas."
        },
        {
          "subject": "Redação",
          "topic": "Contra-argumentação",
          "reason": "Reconhecer pontos de vista diferentes permite responder a objeções sem tratar opiniões como provas definitivas."
        }
      ]
    }
  },
  {
    "subject": "Literatura",
    "topic": "Barroco brasileiro",
    "objective": "Analisar antítese, paradoxo, cultismo e conceptismo na literatura barroca colonial, contextualizando autores, gêneros e efeitos retóricos.",
    "sections": [
      {
        "title": "Contrastes e tensões da linguagem barroca",
        "explanation": "O Barroco literário no território brasileiro costuma ser estudado a partir de produções do século XVII, em diálogo com condições religiosas, políticas e estéticas do período colonial. Textos podem explorar contrastes entre corpo e espírito, desejo e moral, aparência e essência, usando antíteses, paradoxos, hipérboles e imagens elaboradas. Essas características não são exclusivas do Barroco e precisam ser reconhecidas no funcionamento do texto, não só em listas decoradas. A ideia de literatura brasileira do período também exige cuidado: a sociedade colonial não correspondia ao país independente atual, e obras circulavam sob tradições culturais e instituições do mundo português. Para compreender uma passagem, destaque palavras que produzem tensão e explique seu efeito na perspectiva do eu lírico ou da voz discursiva. O exercício de leitura deve separar interpretação literária de comprovação histórica sobre pessoas reais.",
        "example": "Num verso original para estudo, 'Procuro a paz, mas carrego a guerra no pensamento', o contraste entre paz e guerra ajuda a expressar conflito interior, sem ser citação histórica.",
        "pitfall": "Classificar qualquer poema com oposição de palavras como Barroco ou atribuir uma identidade nacional contemporânea automaticamente a textos coloniais.",
        "steps": [
          "Sublinhe termos e imagens que realmente constroem oposições no trecho apresentado.",
          "Explique como o contraste contribui para o conflito, sem classificar a obra por um único recurso."
        ]
      },
      {
        "title": "Cultismo, conceptismo e formas de persuasão",
        "explanation": "O cultismo é frequentemente descrito como elaboração expressiva de palavras, imagens, sonoridades e jogos de linguagem; o conceptismo destaca encadeamentos de ideias, raciocínios e argumentos. Trata-se de categorias didáticas que podem coexistir numa mesma composição, não de regras que separam rigidamente escritores. Gregório de Matos é figura associada à poesia de temática religiosa, amorosa e satírica na Bahia colonial, embora a autoria de peças específicas possa exigir investigação. Padre Antônio Vieira se destacou por sermões cuja linguagem religiosa e retórica articulava argumentos, imagens e interesses de seu contexto. Um sermão tem finalidade de persuasão e não é documento neutro da sociedade colonial. Em vestibulares, a boa resposta indica o recurso da passagem e como ele orienta o leitor, em vez de apenas nomear conceptismo sem apresentar o raciocínio observado.",
        "example": "Uma fala fictícia pergunta repetidamente por que alguém condena o luxo e, ao mesmo tempo, o pratica. O encadeamento das perguntas conduz um argumento crítico, ilustrando raciocínio persuasivo.",
        "pitfall": "Tratar cultismo como texto sem pensamento ou conceptismo como linguagem que nunca utiliza metáforas e imagens.",
        "steps": [
          "Identifique o encadeamento das razões, perguntas retóricas e eventuais jogos de palavras.",
          "Explique se os recursos atuam juntos na persuasão e no efeito expressivo do texto."
        ]
      },
      {
        "title": "Sátira e contexto histórico precisam ser lidos criticamente",
        "explanation": "A sátira é recurso capaz de destacar contradições sociais por ironia, ridicularização e exagero. Em textos barrocos, pode incidir sobre costumes, hierarquias, religiosidade e autoridades, mas exige análise de quem fala, de quem é criticado e do público ao qual se dirige. Uma voz satírica pode questionar injustiças e também reproduzir estereótipos de seu tempo; não é necessário aceitar seus julgamentos para compreender a construção literária. A sociedade colonial incluía relações de escravidão e diferentes posições de poder, que não podem ser apagadas quando se usa uma obra como repertório histórico. Da mesma forma, personagens e imagens de um poema não constituem amostra estatística de uma cidade. A comparação entre textos e arte visual barroca é produtiva quando destaca semelhanças de efeito e diferenças de linguagem entre palavra, escultura e pintura.",
        "example": "Um poema satírico inventado descreve uma autoridade que elogia simplicidade e ostenta roupas caras. O contraste produz crítica de hipocrisia, sem demonstrar que todos os administradores coloniais agiam assim.",
        "pitfall": "Tratar exagero poético como descrição literal de pessoas históricas ou adotar preconceitos da voz do texto como critérios atuais.",
        "steps": [
          "Localize o alvo da sátira e a contradição que organiza o efeito humorístico ou crítico.",
          "Contextualize as relações sociais antes de generalizar o conteúdo poético como fato histórico."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que é antítese e como aparece frequentemente em textos barrocos?",
        "hint": "Considere a aproximação de sentidos opostos.",
        "solution": "Antítese aproxima termos ou ideias opostos para destacar tensões, como paz e conflito, recurso frequente mas não exclusivo do Barroco."
      },
      {
        "level": "basic",
        "prompt": "Cite um tipo de tensão temática frequentemente estudado no Barroco.",
        "hint": "Pense em corpo e espiritualidade.",
        "solution": "A oposição entre desejo material e valores espirituais é tema recorrente em diferentes obras barrocas, embora não seja obrigatório em todas."
      },
      {
        "level": "intermediate",
        "prompt": "Diferencie cultismo de conceptismo sem separá-los rigidamente.",
        "hint": "Um enfatiza trabalho verbal e outro o raciocínio.",
        "solution": "Cultismo destaca imagens e jogos de linguagem; conceptismo enfatiza relações argumentativas entre ideias. Ambos podem coexistir."
      },
      {
        "level": "intermediate",
        "prompt": "Por que sermões de Vieira podem ser analisados como textos persuasivos?",
        "hint": "Observe organização de argumentos e interlocutores.",
        "solution": "Sermões visam orientar ideias e condutas mediante recursos retóricos, exemplos e raciocínios, exigindo análise de finalidade e público."
      },
      {
        "level": "advanced",
        "prompt": "Por que um poema satírico sobre um governante não prova como agiam todos os governantes?",
        "hint": "É preciso distinguir representação e dados históricos.",
        "solution": "A sátira trabalha seleção, ironia e exagero. A conclusão sobre todas as autoridades exigiria fontes documentais e um recorte histórico adequado."
      },
      {
        "level": "advanced",
        "prompt": "Compare oposição num poema barroco e contraste numa igreja barroca.",
        "hint": "Diferencie palavra de composição visual.",
        "solution": "O poema pode empregar antíteses verbais; a igreja pode usar luz, linhas e ornamentação para contrastes visuais. Efeitos podem dialogar, mas técnicas não são idênticas."
      }
    ],
    "everyday": {
      "context": "Uma exposição escolar apresenta um texto com palavras opostas como luz e sombra ao lado de uma fotografia de igreja colonial com forte contraste de iluminação. Um aluno declara que se trata da mesma técnica.",
      "question": "Qual é a relação entre os efeitos de contraste nas duas obras e por que suas linguagens são diferentes?",
      "answer": "Na literatura, o contraste pode ser construído por antíteses e organização verbal; na arte visual, por luz, forma e espaço. Há aproximação de efeito, não identidade de técnica.",
      "connections": [
        {
          "subject": "Arte",
          "topic": "Arte barroca brasileira",
          "reason": "A composição visual barroca permite comparar contrastes de luz e forma com tensões expressas pela linguagem verbal."
        },
        {
          "subject": "Literatura",
          "topic": "Realismo brasileiro",
          "reason": "Comparar escolas mostra maneiras diferentes de construir crítica social, ironia e perspectiva narrativa."
        }
      ]
    }
  },
  {
    "subject": "Redação",
    "topic": "Leitura da proposta e recorte temático",
    "objective": "Ler o comando de produção textual, delimitar tema e gênero e construir um recorte argumentativo coerente antes de planejar tese e desenvolvimento.",
    "sections": [
      {
        "title": "Tema, comando e gênero são dimensões diferentes",
        "explanation": "Em uma prova de redação, o tema indica o assunto delimitado; o comando define a tarefa e pode incluir exigências de gênero, objetivo, público, extensão ou perspectiva. Textos motivadores oferecem contexto, mas não autorizam copiar trechos sem elaboração nem substituir o que o enunciado pede. Uma proposta sobre 'desafios de acesso à leitura nas escolas públicas brasileiras' não equivale a um tema amplo sobre importância dos livros, porque possui recortes de problema, espaço e instituição. Antes de escrever, identifique substantivos e expressões restritivas do comando, distinguindo o centro da discussão de exemplos secundários. Em vestibulares diferentes, gêneros e critérios podem variar; aplicar automaticamente o formato do ENEM a qualquer produção é erro. A primeira etapa é registrar em palavras próprias o problema específico e o tipo de resposta solicitado, sem acrescentar um assunto que não está autorizado pelo enunciado.",
        "example": "Se o tema é 'desafios do transporte escolar em áreas rurais', falar apenas de trânsito em grandes capitais afasta o texto da população e da dificuldade delimitadas.",
        "pitfall": "Tratar palavras isoladas do tema como autorização para discutir qualquer assunto vagamente relacionado ou ignorar gênero solicitado.",
        "steps": [
          "Sublinhe o problema central, o recorte espacial ou social e a tarefa expressa no comando.",
          "Reformule o tema numa pergunta objetiva para verificar se você compreendeu a proposta."
        ]
      },
      {
        "title": "Como construir um recorte argumentativo produtivo",
        "explanation": "Recortar o tema significa escolher um aspecto pertinente e suficientemente específico para desenvolver argumentos dentro do espaço disponível. Uma tese precisa responder ao problema indicado, e não apenas repetir palavras do comando. Para um tema sobre acesso a equipamentos culturais, por exemplo, é possível priorizar mobilidade e disponibilidade de horários, se essas causas forem plausíveis e relacionadas ao recorte. Escolher muitos problemas sem ligação costuma gerar texto superficial. A seleção exige distinguir causa, consequência e proposta de ação: a falta de transporte pode ser causa, a dificuldade de frequentar bibliotecas uma consequência, e a revisão de linhas uma possível intervenção. O recorte deve permitir uso de exemplos e conceitos verificáveis; não precisa ser o único caminho legítimo, mas deve manter coerência entre introdução, desenvolvimento e conclusão.",
        "example": "No tema hipotético 'barreiras à leitura pública em cidades médias', a tese pode focar horários restritos e dificuldade de deslocamento, em vez de tentar discutir todos os problemas da educação brasileira.",
        "pitfall": "Defender tese tão genérica que qualquer exemplo parece caber ou criar recorte não presente na proposta e perder o assunto central.",
        "steps": [
          "Escolha uma ou duas relações plausíveis que respondam diretamente à pergunta da proposta.",
          "Separe as relações em argumentos que possam ser desenvolvidos com evidências e exemplos próprios."
        ]
      },
      {
        "title": "Fuga ao tema, tangenciamento e revisão",
        "explanation": "Fuga ao tema ocorre quando o texto deixa de abordar o assunto solicitado; tangenciamento ocorre quando se aproxima apenas de aspectos periféricos, sem enfrentar adequadamente o núcleo. As classificações e consequências são específicas de cada exame, portanto não se deve anunciar pontuações universais sem consultar edital e matriz. Na revisão, compare a tese e cada parágrafo com a formulação original do tema. Se a proposta discute 'desinformação científica em redes sociais', uma redação sobre tecnologia em geral pode tangenciar sem explicar circulação de informação científica. Os textos motivadores ajudam a compreender o cenário, mas não representam automaticamente fontes que devam ser reproduzidas. Uma checagem final deve identificar: qual questão foi respondida? Quais causas e consequências foram analisadas? O gênero e o público foram respeitados? O repertório usado realmente explica o problema? Essas perguntas ajudam a manter foco e profundidade.",
        "example": "Um parágrafo inteiro que elogia aplicativos, sem relacioná-los à circulação de boatos científicos indicada na proposta, deve ser reescrito para demonstrar vínculo com o problema.",
        "pitfall": "Achar que mencionar uma palavra do tema basta para evitar fuga, mesmo sem explicar a questão central da proposta.",
        "steps": [
          "Releia o comando ao lado da tese e de cada tópico frasal para identificar desvios.",
          "Corte ou reformule trechos sem relação demonstrável com a questão central e o gênero exigido."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em tema sobre transporte escolar rural, citar só trânsito de metrópoles mantém o recorte?",
        "hint": "Compare o espaço e a população pedidos no tema.",
        "solution": "Não. O trânsito urbano pode ser contexto, mas não responde por si às dificuldades do transporte de estudantes em áreas rurais."
      },
      {
        "level": "basic",
        "prompt": "Qual a diferença entre tema e gênero numa proposta de redação?",
        "hint": "Um é assunto; o outro, forma comunicativa pedida.",
        "solution": "Tema é o problema ou assunto delimitado; gênero é o tipo textual solicitado, como artigo de opinião ou carta, com finalidades e convenções específicas."
      },
      {
        "level": "intermediate",
        "prompt": "Formule uma pergunta orientadora para 'desafios do acesso a bibliotecas públicas por jovens'.",
        "hint": "Transforme o tema num problema delimitado.",
        "solution": "Uma possibilidade é: 'Quais barreiras dificultam que jovens utilizem bibliotecas públicas e como enfrentá-las?'. A pergunta mantém público, serviço e problema."
      },
      {
        "level": "intermediate",
        "prompt": "Diferencie causa e consequência no enunciado 'ônibus pouco frequentes dificultam acesso à leitura'.",
        "hint": "Pergunte o que produz a dificuldade e qual efeito decorre.",
        "solution": "A baixa frequência de ônibus é causa possível; a redução do acesso à leitura e à biblioteca é consequência a ser analisada."
      },
      {
        "level": "advanced",
        "prompt": "Explique por que falar sobre tecnologia em geral pode tangenciar tema sobre desinformação científica online.",
        "hint": "A questão central é a circulação de informação científica enganosa.",
        "solution": "Tecnologia é um campo amplo; sem investigar conteúdos, meios de difusão e efeitos da desinformação científica, o texto não enfrenta o recorte exigido."
      },
      {
        "level": "advanced",
        "prompt": "Uma redação cita dados interessantes que não se ligam à tese. É melhor mantê-los pelo impacto?",
        "hint": "Repertório só ajuda se sustentar o argumento central.",
        "solution": "Não. Dados desconectados prejudicam progressão e foco. É melhor explicar relação pertinente ou retirar a referência para desenvolver o que o comando exige."
      }
    ],
    "everyday": {
      "context": "Um estudante recebe proposta sobre acesso de jovens a bibliotecas públicas, mas prepara um texto inteiro sobre os benefícios gerais da leitura. A introdução parece adequada, porém os parágrafos não discutem acesso.",
      "question": "Como reformular o recorte para desenvolver o problema solicitado sem mudar completamente o tema?",
      "answer": "É preciso destacar os obstáculos de acesso, como transporte e horários, e organizar tese e parágrafos em torno dessas causas, usando leitura como contexto, não como substituto do problema.",
      "connections": [
        {
          "subject": "Redação",
          "topic": "Formulação de tese",
          "reason": "A tese precisa responder ao recorte definido pelo comando, orientando quais argumentos entram na redação."
        },
        {
          "subject": "Redação",
          "topic": "Desenvolvimento e tópico frasal",
          "reason": "Cada tópico frasal deve aprofundar uma relação ligada à questão central delimitada na proposta."
        }
      ]
    }
  },
  {
    "subject": "Inglês",
    "topic": "Passado simples e contínuo",
    "objective": "Distinguir eventos concluídos, ações em andamento e acontecimentos que interrompem outras atividades utilizando simple past e past continuous.",
    "sections": [
      {
        "title": "Simple past e fatos concluídos",
        "explanation": "O simple past apresenta frequentemente ações e estados situados num momento anterior ao presente. Em afirmações com verbos regulares, a terminação -ed é comum, enquanto os irregulares têm formas próprias: go→went, see→saw e write→wrote. Nas perguntas e negativas com verbos comuns, o auxiliar did marca o passado e o verbo principal permanece na forma base: 'Did you go?' e 'I did not go'. O verbo be apresenta formas como was e were e não usa essa mesma construção. Expressões como yesterday, last week e in 2020 ajudam a localizar eventos, mas o contexto é determinante. Não é correto afirmar que o simple past só descreve ações curtas: 'She lived there for ten years' também utiliza simple past. Na leitura, identifique quem realizou a ação, quando e qual aspecto do tempo foi enfatizado.",
        "example": "'The team finished the project last Friday' informa que o projeto foi concluído na sexta-feira passada. 'Did the team finish it?' pergunta pelo mesmo evento, usando finish na forma base depois de did.",
        "pitfall": "Escrever 'did went' em pergunta, misturando duas marcas de passado, ou tratar a forma simples como ação necessariamente instantânea.",
        "steps": [
          "Localize o marcador temporal e identifique o acontecimento narrado como concluído.",
          "Use o verbo no passado em afirmativas e sua forma base depois de did em perguntas."
        ]
      },
      {
        "title": "Past continuous e ação em andamento",
        "explanation": "O past continuous combina was ou were com verbo terminado em -ing e costuma representar ação em andamento num momento passado: 'At eight, I was studying'. A forma não confirma por si só quando a ação começou ou terminou, apenas que ela se encontrava em curso no instante descrito. Em 'They were playing when the rain started', o jogo fornece o cenário e o início da chuva é evento situado nesse cenário. Também é possível descrever ações simultâneas sem interrupção: 'While she was cooking, he was reading'. A escolha de was e were depende do sujeito, e as regras de escrita de -ing podem exigir ajustes em verbos como run→running. A leitura deve diferenciar aspecto durativo de causa: eventos próximos no tempo não mantêm necessariamente relação causal. O modelo básico serve para interpretar narrativas, avisos e experiências no passado.",
        "example": "'At noon, the students were rehearsing' destaca ensaio em andamento ao meio-dia; a frase não informa se o ensaio começou às 11 horas nem se terminou às 13 horas.",
        "pitfall": "Confundir past continuous com present continuous ou afirmar que todo -ing representa atividade interrompida.",
        "steps": [
          "Identifique o instante passado usado como referência e a ação que estava em curso.",
          "Escolha was ou were de acordo com o sujeito e aplique -ing corretamente."
        ]
      },
      {
        "title": "When, while e organização temporal",
        "explanation": "When e while podem relacionar eventos e atividades em narrativas; não são fórmulas que exigem sempre o mesmo tempo verbal. 'I was reading when the lights went out' representa leitura em andamento e queda de energia ocorrendo durante ela. 'While I was reading, my sister was cooking' apresenta simultaneidade. O simple past pode destacar ocorrência ou sequência; o past continuous costuma oferecer fundo durativo, mas o sentido exato depende de contexto e escolhas narrativas. É importante separar descrição temporal de explicação causal: as luzes não apagaram necessariamente porque alguém lia. Para interpretar textos, destaque os verbos, identifique quais acontecimentos foram concluídos e quais foram mostrados como ações em curso, sem inventar início e fim ausentes. Essa análise se conecta a inferências e ao uso de tempos compostos no inglês.",
        "example": "'While the bus was moving, the driver heard a noise' relata o veículo em movimento quando um ruído foi ouvido; o enunciado não demonstra o que causou o som.",
        "pitfall": "Interpretar when sempre como explicação de causa ou atribuir ao past continuous horários de início e término não informados.",
        "steps": [
          "Distinga evento de fundo e ocorrência pontual na frase completa.",
          "Cheque se o texto realmente sustenta qualquer conclusão sobre causalidade ou duração total."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Complete 'Yesterday I ___ to school' com o simple past de go.",
        "hint": "Go possui forma irregular.",
        "solution": "A forma correta é went: 'Yesterday I went to school'. Yesterday situa o evento no passado."
      },
      {
        "level": "basic",
        "prompt": "Complete 'At nine, she ___ studying' com was ou were.",
        "hint": "O sujeito she exige singular.",
        "solution": "A forma é was: 'At nine, she was studying'. A ação é apresentada como em andamento naquele momento passado."
      },
      {
        "level": "intermediate",
        "prompt": "Corrija 'Did he went to the library?' para formar pergunta.",
        "hint": "Após did, use o verbo na forma base.",
        "solution": "A forma correta é 'Did he go to the library?'. Did já marca o passado da pergunta."
      },
      {
        "level": "intermediate",
        "prompt": "Interprete 'I was reading when the phone rang' quanto à ordem das ações.",
        "hint": "Uma atividade estava em curso quando ocorreu outra.",
        "solution": "A leitura estava em andamento quando o telefone tocou. A frase não afirma que a leitura provocou o toque."
      },
      {
        "level": "advanced",
        "prompt": "Crie frase com duas ações simultâneas: I/study e my sister/cook.",
        "hint": "Utilize while e formas no past continuous.",
        "solution": "'While I was studying, my sister was cooking.' Ambas as ações são mostradas em andamento no mesmo intervalo."
      },
      {
        "level": "advanced",
        "prompt": "A frase 'They were walking at six' informa quando a caminhada começou?",
        "hint": "Veja o aspecto em andamento no momento de referência.",
        "solution": "Não. Ela indica que a caminhada estava ocorrendo às seis, mas não especifica início ou término."
      }
    ],
    "everyday": {
      "context": "Um estudante lê a mensagem 'I was studying when the power went out'. Ele interpreta que a pessoa já havia concluído o estudo e que o estudo causou o apagão.",
      "question": "O que estava acontecendo e qual evento ocorreu durante a atividade, segundo os tempos verbais?",
      "answer": "Was studying descreve estudo em curso. Went out descreve a queda de energia que ocorreu naquele momento. Não se informa término do estudo nem relação causal.",
      "connections": [
        {
          "subject": "Inglês",
          "topic": "Present perfect e past perfect",
          "reason": "A comparação entre tempos ajuda a compreender anterioridade, duração e conclusão de acontecimentos em narrativas."
        },
        {
          "subject": "Português",
          "topic": "Informações explícitas e inferências",
          "reason": "Entender o tempo verbal ajuda a separar informações explicitamente narradas de inferências não justificadas."
        }
      ]
    }
  },
  {
    "subject": "Espanhol",
    "topic": "Futuro e condicional em espanhol",
    "objective": "Interpretar e construir formas de futuro e condicional em espanhol, diferenciando previsões, planos, hipóteses e pedidos corteses.",
    "sections": [
      {
        "title": "Futuro simples e expressões de plano",
        "explanation": "O futuro simples espanhol pode ser formado com infinitivo e terminações como -é, -ás, -á, -emos, -éis e -án, por exemplo hablaré, comerás e vivirán. Alguns verbos têm radical irregular: tener→tendré, salir→saldré e poder→podré. A perífrase ir a + infinitivo também exprime futuro, intenção ou planejamento, como 'Voy a estudiar mañana', mas os usos das duas construções não se reduzem a uma regra única de distância temporal. O futuro simples pode ainda transmitir suposição em determinados contextos. Em leitura, identifique quem fala, se anuncia compromisso real ou expectativa e se há calendário ou dado de apoio. Uma previsão não equivale a fato confirmado. A construção precisa concordar com o sujeito e deve ser interpretada no gênero: anúncio de aula, notícia, plano e conversa não comunicam exatamente o mesmo grau de certeza.",
        "example": "'Mañana visitaré la biblioteca' usa futuro simples para um plano anunciado. 'Voy a visitar la biblioteca' utiliza perífrase com ir a, que também pode indicar intenção de visita futura.",
        "pitfall": "Afirmar que toda frase no futuro confirma que o evento acontecerá ou que ir a sempre se refere apenas às próximas horas.",
        "steps": [
          "Localize o momento futuro e identifique se o enunciado expressa plano, previsão ou suposição.",
          "Conjugue o verbo pelo sujeito, verificando radicais irregulares quando necessário."
        ]
      },
      {
        "title": "Condicional simples e situações hipotéticas",
        "explanation": "O condicional simples utiliza geralmente terminações -ía, -ías, -ía, -íamos, -íais e -ían acrescentadas ao infinitivo, com radicais irregulares semelhantes aos do futuro em vários verbos: tener→tendría e poder→podría. A construção frequentemente expressa hipóteses, consequências dependentes de condição e pedidos educados: 'Me gustaría participar' apresenta desejo, e '¿Podrías ayudarme?' pode formular solicitação cortês. É importante não confundir condicional com passado cronológico apenas porque a forma termina em -ía. Em frases como 'Si tuviera tiempo, estudiaría más', a hipótese aparece com imperfecto de subjuntivo na oração com si e condicional na consequência. A escolha verbal precisa respeitar a relação de sentido; nem todo si exige condicional e nem todo condicional anuncia situação impossível.",
        "example": "'Si tuviera más tiempo, leería cada día' apresenta situação imaginada e consequência. '¿Podrías enviar el archivo?' funciona como pedido cortês em um contexto comum.",
        "pitfall": "Traduzir condicional como evento passado realizado ou usar automaticamente 'si tendría' no modelo escolar de hipótese irreal.",
        "steps": [
          "Identifique se a forma expressa consequência hipotética, desejo ou cortesia.",
          "Diferencie a oração de condição com si da oração que apresenta a consequência."
        ]
      },
      {
        "title": "Futuro, hipótese e responsabilidade na interpretação",
        "explanation": "Em comunicados e textos argumentativos, diferença entre 'se hará', 'se haría' e 'se va a hacer' pode alterar o grau de compromisso informado. O condicional também aparece em certos registros jornalísticos para atribuir informação ainda não confirmada, mas isso depende do contexto e não deve ser entendido como marca universal de boato. Uma redação precisa distinguir promessa, possibilidade e resultado condicionado: 'El curso empezará el lunes' anuncia início; 'El curso empezaría si hubiera inscripciones suficientes' condiciona o acontecimento. Para não exagerar uma fonte, leia advérbios, verbos e condições adjacentes. Os usos regionais e os gêneros podem apresentar diferentes preferências sem que uma única construção determine toda a certeza do falante. Ao responder provas, cite a palavra ou oração que sustenta a interpretação da hipótese.",
        "example": "Um aviso hipotético diz 'El taller se realizará si hay suficientes participantes'. O início depende de uma condição: o texto não confirma por si que já houve inscrições suficientes.",
        "pitfall": "Confundir anúncio condicionado com confirmação e transformar probabilidades comunicadas em fatos ocorridos.",
        "steps": [
          "Sublinhe a condição que precisa ser cumprida para o evento acontecer.",
          "Reescreva a conclusão em português sem atribuir certeza maior que a expressa no original."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Complete 'Mañana yo ___ (estudiar)' no futuro simples.",
        "hint": "Adicione -é ao infinitivo estudar em espanhol.",
        "solution": "A forma é estudiaré: 'Mañana yo estudiaré'. O enunciado anuncia uma ação futura."
      },
      {
        "level": "basic",
        "prompt": "Qual é o futuro simples de tener para yo?",
        "hint": "O radical do verbo é irregular: tendr-.",
        "solution": "A forma é tendré. No futuro, tener apresenta radical tendr- mais a terminação -é."
      },
      {
        "level": "intermediate",
        "prompt": "Explique a função de '¿Podrías ayudarme?' num diálogo.",
        "hint": "O condicional pode tornar o pedido mais cortês.",
        "solution": "A frase frequentemente funciona como solicitação educada, não como relato de uma ajuda que ocorreu no passado."
      },
      {
        "level": "intermediate",
        "prompt": "Interprete 'Si tuviera tiempo, viajaría' sem afirmar que a viagem aconteceu.",
        "hint": "A oração com si estabelece uma hipótese.",
        "solution": "O falante imagina viajar caso tivesse tempo. A frase não afirma que a viagem foi realizada."
      },
      {
        "level": "advanced",
        "prompt": "Compare 'El curso empezará' com 'El curso empezaría si hubiera alumnos'.",
        "hint": "Uma frase anuncia futuro; a outra condiciona o resultado.",
        "solution": "A primeira apresenta início futuro; a segunda o deixa dependente de uma condição, portanto não confirma realização."
      },
      {
        "level": "advanced",
        "prompt": "Por que uma manchete em condicional não deve ser lida automaticamente como fato confirmado?",
        "hint": "A forma pode indicar distância informativa ou hipótese.",
        "solution": "O condicional pode expressar informação ainda atribuída ou incerta em determinados gêneros. É preciso verificar fontes e contexto antes de afirmar o evento."
      }
    ],
    "everyday": {
      "context": "Uma escola publica dois avisos em espanhol: 'El curso comenzará en diciembre' e 'El curso comenzaría si hubiera inscripciones suficientes'. Um aluno considera os dois compromissos equivalentes.",
      "question": "Como futuro e condicional diferenciam anúncio de acontecimento e consequência dependente de hipótese?",
      "answer": "Comenzará anuncia início futuro. Comenzaría si hubiera inscripciones suficientes condiciona o início à quantidade de inscrições; não confirma que a condição será cumprida.",
      "connections": [
        {
          "subject": "Espanhol",
          "topic": "Subjuntivo em espanhol",
          "reason": "Construções condicionais hipotéticas usam formas do subjuntivo na oração introduzida por si em padrões específicos."
        },
        {
          "subject": "Inglês",
          "topic": "Orações condicionais em inglês",
          "reason": "Comparar condições em duas línguas ajuda a distinguir fato, possibilidade e consequência hipotética."
        }
      ]
    }
  },
  {
    "subject": "Filosofia",
    "topic": "Indução e dedução",
    "objective": "Distinguir argumentos dedutivos e indutivos, avaliar validade e força da evidência e reconhecer limites de generalizações a partir de exemplos.",
    "sections": [
      {
        "title": "Dedução e relação necessária entre premissas",
        "explanation": "Um argumento dedutivo pretende que a conclusão decorra necessariamente das premissas, se a estrutura for válida. 'Todos os materiais da caixa A são recicláveis; este material veio da caixa A; logo, é reciclável' apresenta uma forma dedutiva cuja validade pode ser avaliada independentemente da verdade concreta das premissas. Um argumento é válido quando não há situação possível em que todas as suas premissas sejam verdadeiras e sua conclusão falsa. Para ser sólido, além de válido, precisa ter premissas verdadeiras. Por isso, uma conclusão correta não torna qualquer raciocínio válido, assim como uma forma válida pode partir de premissa empiricamente falsa. A dedução pode ocorrer com regras gerais, condicionais e relações matemáticas; é necessário reconstruir o enunciado com precisão para não acrescentar pressupostos que não foram expressos.",
        "example": "Se todos os livros de uma estante são emprestáveis e um volume pertence àquela estante, então ele é emprestável, desde que as premissas usadas sejam verdadeiras no contexto.",
        "pitfall": "Confundir validade lógica com verdade das premissas ou presumir que qualquer conclusão verdadeira foi demonstrada corretamente.",
        "steps": [
          "Identifique explicitamente quais frases funcionam como premissas e qual é a conclusão.",
          "Pergunte se haveria cenário com premissas verdadeiras e conclusão falsa para testar validade."
        ]
      },
      {
        "title": "Indução e evidências que sustentam probabilidades",
        "explanation": "Na indução, observações particulares apoiam generalizações ou previsões que não são logicamente necessárias. Observar que vários ônibus de uma linha chegaram atrasados pode aumentar a plausibilidade de novos atrasos, mas não demonstra que o próximo ônibus necessariamente atrasará. A força de um argumento indutivo depende de quantidade e qualidade de dados, representatividade, condições comparáveis e explicações alternativas. Uma amostra grande ainda pode estar enviesada se incluir somente uma faixa de horário; uma amostra pequena e bem descrita pode apoiar conclusão restrita, mas não universal. O raciocínio indutivo é importante em ciência, pesquisa social e decisões cotidianas, sem ser equivalente a palpite arbitrário. O leitor deve distinguir probabilidade, frequência observada e certeza, especialmente quando uma propaganda generaliza opiniões de poucos clientes.",
        "example": "Se oito de dez viagens observadas num horário específico atrasaram, é possível descrever o histórico daquela amostra, mas não garantir que todas as viagens futuras atrasarão.",
        "pitfall": "Afirmar que observações repetidas tornam a conclusão indutiva absolutamente certa ou ignorar viés na seleção dos casos.",
        "steps": [
          "Identifique a população observada e como os exemplos foram selecionados.",
          "Formule conclusão proporcional à evidência, mencionando incerteza relevante."
        ]
      },
      {
        "title": "Comparação crítica e limites de inferência",
        "explanation": "Dedução e indução são ferramentas diferentes, não formas de pensamento em que uma é sempre superior. A dedução permite verificar necessidade lógica dada uma estrutura; a indução ajuda a ampliar conhecimento empírico com risco controlado de erro. Uma previsão sobre chuva pode apoiar-se em observações e modelos e ainda ser incerta, enquanto a dedução de uma regra matemática pode ser necessária dentro de suas premissas. Também há argumentos inválidos que parecem convincentes: afirmar 'Se chove, a rua molha; a rua molhou; logo, choveu' ignora outras causas possíveis. Esse erro é chamado afirmação do consequente. Avaliar raciocínios exige examinar conectivos, universo de referência, critérios e relação entre premissas e conclusão, evitando a ilusão de que confiança verbal ou autoridade substitui argumento. Em vestibulares, reconstruir a forma do argumento costuma esclarecer a alternativa correta.",
        "example": "Uma rua molhada pode resultar de chuva, limpeza ou vazamento. A conclusão de que necessariamente choveu não decorre apenas da condição 'se chover, a rua molha'.",
        "pitfall": "Concluir que todos os argumentos com 'se' são válidos ou considerar toda incerteza indutiva equivalente à ausência de evidência.",
        "steps": [
          "Reescreva o argumento numa forma lógica simples e procure explicações alternativas.",
          "Diferencie impossibilidade lógica de erro de previsão ou limitação dos dados observados."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que caracteriza um argumento dedutivo válido?",
        "hint": "Considere necessidade entre premissas e conclusão.",
        "solution": "Não é possível ter premissas verdadeiras e conclusão falsa na forma do argumento; a validade é uma relação lógica."
      },
      {
        "level": "basic",
        "prompt": "Observar três ônibus atrasados garante que o quarto atrasará?",
        "hint": "Uma amostra não garante um evento futuro.",
        "solution": "Não. O raciocínio indutivo pode apoiar uma expectativa, mas não torna a previsão logicamente necessária."
      },
      {
        "level": "intermediate",
        "prompt": "Diferencie validade e solidez num argumento dedutivo.",
        "hint": "Uma trata da estrutura; a outra também da verdade.",
        "solution": "Um argumento válido tem forma que preserva verdade das premissas para a conclusão; um argumento sólido é válido e possui premissas verdadeiras."
      },
      {
        "level": "intermediate",
        "prompt": "Por que amostragem enviesada prejudica generalização indutiva?",
        "hint": "Considere quem ficou fora dos dados.",
        "solution": "A seleção pode representar apenas parte específica da população; generalizar resultados para todos sem justificativa reduz a força da inferência."
      },
      {
        "level": "advanced",
        "prompt": "Analise: 'Se chove, a rua molha. A rua está molhada. Logo, choveu'.",
        "hint": "Busque outras explicações para rua molhada.",
        "solution": "A inferência é inválida: a rua pode estar molhada por limpeza ou vazamento. Trata-se de afirmação do consequente."
      },
      {
        "level": "advanced",
        "prompt": "Uma previsão apoiada por muitos dados é sempre dedutiva? Explique.",
        "hint": "Força empírica não é necessidade lógica.",
        "solution": "Não. Uma conclusão pode ser fortemente sustentada por dados e ainda permanecer indutiva e revisável; a dedução exige relação de necessidade entre premissas."
      }
    ],
    "everyday": {
      "context": "Uma estudante vê o ônibus chegar atrasado em cinco manhãs e afirma que amanhã ele obrigatoriamente atrasará. Outro colega tenta provar a previsão apenas dizendo que ela 'sempre está certa'.",
      "question": "A conclusão sobre amanhã é dedutiva ou indutiva e o que seria necessário para avaliá-la melhor?",
      "answer": "É uma previsão indutiva, não necessária. Seria útil examinar amostra maior, horários, condições e causas dos atrasos; a confiança de quem fala não substitui evidências.",
      "connections": [
        {
          "subject": "Filosofia",
          "topic": "Argumentação e falácias",
          "reason": "Reconhecer erros de inferência e premissas insuficientes é essencial para distinguir argumentos persuasivos de argumentos bem construídos."
        },
        {
          "subject": "Filosofia",
          "topic": "Filosofia da ciência",
          "reason": "A ciência utiliza inferências a partir de dados e modelos, exigindo transparência metodológica e conclusões revisáveis."
        }
      ]
    }
  },
  {
    "subject": "Sociologia",
    "topic": "Cultura e etnocentrismo",
    "objective": "Interpretar cultura como produção social plural e identificar etnocentrismo, relativismo metodológico e desigualdades de poder sem naturalizar preconceitos.",
    "sections": [
      {
        "title": "Cultura não é apenas arte ou erudição",
        "explanation": "Em Sociologia, cultura inclui práticas, valores, conhecimentos, símbolos, crenças, técnicas e modos de organização aprendidos e compartilhados socialmente. O termo não se limita a livros, museus ou escolaridade elevada. Alimentação, festas, linguagens, modos de trabalhar e formas de convivência são dimensões culturais, mas não são praticadas uniformemente por todas as pessoas de um grupo. Culturas transformam-se com contato, conflitos, tecnologias e mudanças históricas. Descrever uma prática como cultural não significa que seja biologicamente determinada nem que todos os seus participantes concordem com ela. Para analisar uma situação, pergunte quem participa, em qual contexto, quais significados atribui e quais relações de poder influenciam sua circulação. Essa abordagem evita reduzir pessoas a estereótipos de origem e permite reconhecer diversidade interna em comunidades.",
        "example": "Uma receita de família pode reunir ingredientes trazidos por migrações e técnicas locais. Essa combinação ilustra transformação cultural, sem representar obrigatoriamente todas as famílias de uma região.",
        "pitfall": "Achar que cultura é sinônimo de refinamento intelectual ou afirmar que cada povo possui hábitos idênticos e permanentes.",
        "steps": [
          "Identifique práticas, símbolos e conhecimentos presentes numa situação social concreta.",
          "Verifique se sua descrição reconhece diversidade entre pessoas e transformações históricas."
        ]
      },
      {
        "title": "Etnocentrismo e interpretação da diferença",
        "explanation": "Etnocentrismo ocorre quando uma pessoa ou grupo avalia costumes de outros a partir dos próprios padrões como se estes fossem medida universal de valor. Estranhar uma prática não significa automaticamente discriminar, mas considerá-la inferior só por ser diferente pode expressar julgamento etnocêntrico. A análise sociológica procura compreender significados no contexto em que práticas se desenvolveram, sem presumir que a sociedade observada seja homogênea. O relativismo cultural, como orientação metodológica, ajuda a suspender julgamentos precipitados para investigar práticas e perspectivas; não exige aprovar toda conduta nem abandonar princípios de direitos humanos. Questões envolvendo violência, desigualdade e direitos requerem exame ético e histórico específico. Comparar costumes deve levar em conta quem tem poder para definir o que parece normal, civilizado ou legítimo em situações concretas.",
        "example": "Um estudante ridiculariza o alimento tradicional de outra comunidade por não fazer parte da sua rotina. Uma investigação cultural perguntaria pelo significado, história e preparo, não pela superioridade do gosto pessoal.",
        "pitfall": "Confundir esforço de compreensão sociológica com obrigação de concordar com qualquer prática, ou usar 'diferente' como equivalente a 'inferior'.",
        "steps": [
          "Identifique qual padrão próprio está sendo usado para avaliar o comportamento de terceiros.",
          "Reformule o julgamento como pergunta contextualizada sobre origem, significado e diversidade."
        ]
      },
      {
        "title": "Respeito, direitos e circulação cultural",
        "explanation": "O contato entre culturas ocorre por migração, comércio, redes sociais, escola e inúmeros outros meios, podendo gerar trocas criativas e também assimetrias de poder. É necessário distinguir conhecer e valorizar práticas de povos diferentes de apresentar suas produções como se fossem objetos sem autores, história ou direitos. Em debates escolares, uma pessoa pode descrever sua própria experiência sem ser tomada como representante única de todo um grupo. O respeito intercultural exige reconhecer sujeitos, condições de produção e contextos de uso; também é legítimo discutir práticas à luz de direitos fundamentais sem hostilizar uma população inteira. Para analisar representações em mídia e publicidade, observe se aparecem vozes da comunidade ou apenas estereótipos externos. O estudo de cultura contribui para leitura crítica da linguagem, arte e relações sociais.",
        "example": "Uma exposição escolar sobre celebrações locais pode convidar participantes a explicar significados e autorizações de uso de imagens, evitando generalizar uma entrevista para toda a comunidade.",
        "pitfall": "Apresentar uma pessoa como porta-voz obrigatória de todos que compartilham sua origem ou utilizar símbolos culturais sem respeito ao contexto.",
        "steps": [
          "Diferencie troca cultural, representação e apropriação sem atribuir intenções ocultas sem dados.",
          "Inclua perspectivas dos grupos envolvidos e avalie eventuais impactos sobre direitos e reconhecimento."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que cultura não pode ser reduzida à frequência a museus ou à leitura de livros?",
        "hint": "Considere práticas e conhecimentos cotidianos.",
        "solution": "Porque cultura abrange práticas, valores, linguagens e conhecimentos socialmente aprendidos, presentes em muitos contextos além da arte erudita."
      },
      {
        "level": "basic",
        "prompt": "O que caracteriza um julgamento etnocêntrico?",
        "hint": "Observe qual padrão é tratado como universal.",
        "solution": "É avaliar práticas de outros grupos pelo próprio padrão e considerá-las inferiores apenas por não corresponderem a ele."
      },
      {
        "level": "intermediate",
        "prompt": "Uma turma ridiculariza um alimento tradicional por desconhecê-lo. Como investigar sem etnocentrismo?",
        "hint": "Pergunte pela história e significados no contexto.",
        "solution": "É adequado conhecer os ingredientes, a história, os sentidos e as pessoas envolvidas, em vez de transformar estranhamento em hierarquia cultural."
      },
      {
        "level": "intermediate",
        "prompt": "Relativismo cultural metodológico significa que toda prática deve ser aprovada?",
        "hint": "Compreender não equivale a concordar com qualquer conduta.",
        "solution": "Não. O método incentiva análise contextual e suspensão de juízos precipitados, sem eliminar debate sobre direitos, violência e responsabilidade."
      },
      {
        "level": "advanced",
        "prompt": "Por que uma entrevista não representa necessariamente todos os membros de uma comunidade?",
        "hint": "Há diversidade interna de pessoas e experiências.",
        "solution": "Uma entrevista apresenta a perspectiva de uma pessoa em determinado contexto; generalizar ao grupo inteiro exige evidências e atenção à diversidade."
      },
      {
        "level": "advanced",
        "prompt": "Como analisar uso de uma tradição cultural numa campanha publicitária?",
        "hint": "Considere autoria, contexto e representação.",
        "solution": "É necessário examinar quem produziu a campanha, como a tradição é retratada, a participação da comunidade e os riscos de estereótipos ou exploração."
      }
    ],
    "everyday": {
      "context": "Numa feira cultural da escola, estudantes apresentam comidas e celebrações de diferentes comunidades. Alguns colegas afirmam que uma tradição é 'atrasada' porque não se parece com os costumes de suas famílias.",
      "question": "Por que considerar o próprio costume como medida universal é etnocentrismo e como investigar a tradição de maneira sociológica?",
      "answer": "O julgamento impõe um padrão local como superior. Uma análise sociológica procura história, significados, participantes e contexto, sem transformar diferença em inferioridade.",
      "connections": [
        {
          "subject": "Português",
          "topic": "Variação regional, social e histórica",
          "reason": "A diversidade de modos de falar é parte de práticas sociais e não pode ser usada para hierarquizar grupos humanos."
        },
        {
          "subject": "Sociologia",
          "topic": "Indústria cultural e cultura de massa",
          "reason": "A circulação comercial de conteúdos pode modificar representações culturais e ampliar ou limitar a visibilidade de certos grupos."
        }
      ]
    }
  },
  {
    "subject": "Arte",
    "topic": "Arte indígena",
    "objective": "Interpretar expressões artísticas de diferentes povos indígenas no Brasil, relacionando materiais, usos, autoria e contextos sem generalizações ou apropriação indevida.",
    "sections": [
      {
        "title": "Diversidade de povos e linguagens artísticas",
        "explanation": "A expressão 'arte indígena' reúne manifestações de muitos povos com histórias, línguas, técnicas e sistemas de conhecimento distintos. Não corresponde a um único estilo visual nem se limita a objetos antigos expostos em museus. Pinturas corporais, grafismos, cerâmicas, cestarias, cantos, narrativas, performances e produções contemporâneas podem exercer funções estéticas, sociais, territoriais, espirituais e políticas que variam segundo o povo e o contexto. Um grafismo não possui significado universal apenas por apresentar linhas geométricas; é necessário conhecer sua autoria e as condições em que pode ser compartilhado. O estudo não deve separar arbitrariamente arte de vida cotidiana sem considerar interpretações dos próprios produtores. Observar os materiais e formas é importante, mas não substitui a escuta dos sujeitos que criam e utilizam as obras, nem autoriza afirmar que todos os indígenas vivem da mesma maneira.",
        "example": "Uma cesta produzida por artesã de uma comunidade específica pode reunir conhecimentos de coleta, preparação de fibras, desenho e usos sociais. Ela não deve ser apresentada como modelo único para todos os povos.",
        "pitfall": "Tratar povos indígenas como grupo homogêneo, associar suas obras somente ao passado ou inventar sentidos para grafismos sem fonte.",
        "steps": [
          "Descreva primeiro materiais, técnicas e características observáveis do objeto ou imagem.",
          "Identifique o povo e a autoria quando houver dados confiáveis, evitando interpretações universais."
        ]
      },
      {
        "title": "Grafismos, materiais e significados situados",
        "explanation": "Linhas, formas, repetições e contrastes são elementos visuais analisáveis em diferentes produções artísticas, mas seus significados dependem de tradições específicas, autoria e situações de uso. Materiais como fibras vegetais, argila, pigmentos e madeira podem exigir conhecimentos ambientais e técnicos detalhados, transmitidos e transformados entre gerações. Não se deve presumir que qualquer símbolo visto numa fotografia seja livre para cópia comercial, especialmente quando possui uso ritual ou comunitário restrito. A análise escolar pode comparar composição, textura e ritmo visual sem reproduzir conteúdos que a própria comunidade não autoriza divulgar. A preservação de materiais não é equivalente à preservação de conhecimentos: terra, acesso ao ambiente, língua e continuidade das práticas podem ser fundamentais. Respeitar propriedade intelectual e consentimento faz parte do trabalho artístico e de pesquisa.",
        "example": "Ao analisar uma pintura corporal fotografada com autorização, a turma pode descrever contraste e repetição de formas. Para afirmar seus significados simbólicos, precisa de explicação da comunidade ou fonte responsável.",
        "pitfall": "Atribuir significado sagrado a todo desenho geométrico ou considerar uma imagem encontrada online automaticamente disponível para uso comercial.",
        "steps": [
          "Diferencie descrição formal de interpretação simbólica que depende de fonte e consentimento.",
          "Verifique se o material pode ser reproduzido e como a autoria deve ser reconhecida."
        ]
      },
      {
        "title": "Arte contemporânea, autoria e representação",
        "explanation": "Artistas indígenas contemporâneos participam de exposições, audiovisual, literatura, instalações e mídias digitais, combinando materiais e linguagens diversas. Descrever essa produção como 'menos autêntica' por usar tecnologia reproduz uma ideia equivocada de culturas imutáveis. Obras podem dialogar com defesa de territórios, memória, cotidiano, política e experimentação estética, sem que todos os artistas escolham os mesmos temas. A instituição que exibe uma obra deve, quando possível, apresentar autoria e contexto de produção em vez de enquadrá-la apenas como curiosidade exótica. Estudantes podem elaborar projetos inspirados em procedimentos de observação e composição, mas precisam distinguir diálogo artístico respeitoso de cópia indevida de símbolos específicos. A leitura crítica considera também quem seleciona o acervo e quais vozes participam da mediação cultural. A diversidade indígena pertence ao presente, não somente aos livros sobre colonização.",
        "example": "Uma exposição contemporânea pode reunir vídeo, desenho e fotografia realizados por artistas indígenas identificados. O uso de recursos digitais não elimina sua autoria ou relação com experiências culturais.",
        "pitfall": "Afirmar que a cultura indígena deixou de existir quando artistas utilizam celular, fotografia ou outras tecnologias contemporâneas.",
        "steps": [
          "Considere autoria e escolhas estéticas de cada obra sem reduzir o artista a representante de todos os povos.",
          "Analise como museus e plataformas contextualizam as produções e reconhecem seus criadores."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que 'arte indígena' não designa um único estilo compartilhado por todos os povos?",
        "hint": "Existem diferentes povos, línguas e histórias.",
        "solution": "Porque abrange produções de comunidades diversas, com técnicas e significados específicos, sem uma linguagem estética única e universal."
      },
      {
        "level": "basic",
        "prompt": "Cite dois materiais possíveis em produções artísticas indígenas sem atribuí-los a todos os povos.",
        "hint": "Considere fibras, argila e madeira.",
        "solution": "Fibras vegetais e argila são exemplos possíveis; seu uso varia entre comunidades e não determina que todos produzam objetos iguais."
      },
      {
        "level": "intermediate",
        "prompt": "Uma foto mostra grafismo sem identificação. Podemos afirmar seu significado espiritual exato?",
        "hint": "Faltam autoria, contexto e explicação da comunidade.",
        "solution": "Não. É possível descrever formas observáveis, mas interpretação simbólica exige informação contextual e fonte confiável."
      },
      {
        "level": "intermediate",
        "prompt": "Por que uma obra indígena criada em vídeo digital pode ser expressão cultural contemporânea legítima?",
        "hint": "Tecnologia não elimina identidade cultural.",
        "solution": "Porque culturas se transformam e artistas escolhem diversos meios de expressão. Usar tecnologia não torna uma obra menos autêntica."
      },
      {
        "level": "advanced",
        "prompt": "Qual cuidado é necessário ao reproduzir símbolos culturais em produto comercial?",
        "hint": "Considere direitos, autorização e contexto.",
        "solution": "É necessário investigar autoria, usos permitidos e consentimento quando cabível; encontrar imagem na internet não concede direito irrestrito de exploração."
      },
      {
        "level": "advanced",
        "prompt": "Como uma exposição pode evitar tratar artistas indígenas apenas como curiosidade exótica?",
        "hint": "Dê espaço a autoria, contexto e voz dos produtores.",
        "solution": "A apresentação pode identificar artistas e povos, oferecer contextualização construída com participação responsável e reconhecer sua atuação contemporânea."
      }
    ],
    "everyday": {
      "context": "Uma turma prepara exposição sobre produções de povos indígenas e encontra um grafismo na internet sem autoria. Alguns estudantes querem usá-lo na marca de uma loja, afirmando que todo desenho indígena é de domínio público.",
      "question": "Que informações e cuidados são necessários antes de atribuir significado ao grafismo ou utilizá-lo comercialmente?",
      "answer": "É necessário verificar povo, autoria, significado e condições de uso, inclusive autorizações pertinentes. A descrição visual não garante interpretação simbólica nem permissão comercial.",
      "connections": [
        {
          "subject": "Arte",
          "topic": "Arte e tecnologia",
          "reason": "Artistas indígenas contemporâneos podem utilizar ferramentas digitais sem que a tecnologia diminua a legitimidade de sua expressão."
        },
        {
          "subject": "Sociologia",
          "topic": "Cultura e etnocentrismo",
          "reason": "A análise precisa reconhecer diversidade cultural e evitar atribuir inferioridade ou significados universais a práticas de outros grupos."
        }
      ]
    }
  },
  {
    "subject": "Educação Física",
    "topic": "Jogos e brincadeiras tradicionais",
    "objective": "Analisar jogos e brincadeiras como práticas culturais com regras negociáveis, aprendizagem coletiva, memória social e participação inclusiva.",
    "sections": [
      {
        "title": "Brincadeiras são práticas culturais, não apenas passatempos",
        "explanation": "Jogos e brincadeiras tradicionais circulam entre famílias, escolas e comunidades, transmitindo e transformando regras, cantigas, movimentos e modos de cooperação. Esconde-esconde, amarelinha, rodas e outros exemplos apresentam variações conforme local, idade, espaço e grupo; não existe necessariamente um modelo universal de cada brincadeira. Algumas possuem objetivo de competição, outras de expressão, exploração ou colaboração. Conhecer origem e memória de uma prática ajuda a valorizar repertórios culturais, mas é inadequado afirmar autoria exata ou uma procedência única sem fonte histórica. A educação física pode usar brincadeiras para desenvolver coordenação, tomada de decisão e convivência, sem reduzir participantes à velocidade ou ao desempenho. O modo de organizar o espaço também influencia segurança e acesso: regras podem ser adaptadas para incluir diferentes capacidades e contextos.",
        "example": "Uma turma de diferentes bairros compara duas versões de amarelinha, com desenhos e regras distintos. A variação ilustra transmissão e transformação cultural, não uma versão 'certa' e outra 'errada'.",
        "pitfall": "Afirmar que toda brincadeira possui regra única em qualquer lugar ou considerar jogos não competitivos menos educativos.",
        "steps": [
          "Peça aos participantes que descrevam regras locais antes de decidir como realizar a atividade.",
          "Observe quais movimentos, cooperações e escolhas são mobilizados pelo jogo."
        ]
      },
      {
        "title": "Regras, negociação e inclusão na participação",
        "explanation": "Regras organizam turnos, objetivos e limites, mas em muitos jogos recreativos podem ser negociadas para adaptar espaço, idade, segurança e participação. Uma adaptação deve preservar elementos da experiência sem excluir alguém por deficiência, diferença de habilidade ou pouca familiaridade com a prática. Por exemplo, ampliar o tempo de resposta, modificar a distância de lançamento ou utilizar materiais acessíveis pode permitir envolvimento efetivo, dependendo da situação. Isso não significa impor a mesma adaptação a todas as pessoas: é necessário ouvir os participantes. Disputas sobre regras também oferecem oportunidade de discutir cooperação e resolução de conflitos. Em vez de afirmar que uma criança 'não sabe brincar' porque utiliza outra versão, é produtivo comparar combinações e decidir coletivamente quais orientações valerão naquela partida.",
        "example": "Num jogo de arremesso recreativo, o grupo pode combinar diferentes distâncias de lançamento para ampliar participação, mantendo o objetivo compartilhado e respeitando segurança.",
        "pitfall": "Confundir regra negociável de brincadeira escolar com ausência de regras ou adaptar atividade sem escutar quem será diretamente afetado.",
        "steps": [
          "Identifique o que a regra organiza e quais barreiras surgem para participantes diferentes.",
          "Negocie mudanças específicas e confira se elas tornam a participação mais efetiva."
        ]
      },
      {
        "title": "Memória social, espaços públicos e direito ao brincar",
        "explanation": "Brincadeiras podem formar parte da memória de grupos e circular por relatos de diferentes gerações, modificando-se ao longo do tempo. O acesso ao brincar depende também de espaços seguros, tempo disponível, convivência e condições do ambiente. Praças, pátios, ruas e espaços comunitários oferecem oportunidades diferentes, e a ausência de local adequado não deve ser atribuída exclusivamente à vontade individual. Pesquisas escolares podem registrar variantes de jogos por entrevistas com consentimento e contexto, sem concluir que uma experiência representa toda uma comunidade. Comparar regras antigas e atuais permite perceber transformações culturais e efeitos de tecnologias, urbanização e rotina, sem declarar que brincadeiras contemporâneas são necessariamente inferiores às de épocas passadas. A educação física pode articular diversidade cultural e inclusão por meio dessas práticas, respeitando autonomia e segurança.",
        "example": "Uma pesquisa escolar pode perguntar a familiares quais brincadeiras conheciam, registrar variações e compará-las com as atuais, deixando claro que os relatos descrevem experiências particulares.",
        "pitfall": "Idealizar o passado como época em que todos brincavam igualmente ou tratar falta de espaço público como falha moral dos estudantes.",
        "steps": [
          "Registre a origem e o contexto dos relatos utilizados para reconstruir memórias de jogos.",
          "Analise barreiras de acesso a espaços e proponha adaptações compatíveis com cada comunidade."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que brincadeiras tradicionais podem ter regras diferentes entre regiões?",
        "hint": "Pense em transmissão cultural e adaptações locais.",
        "solution": "Porque regras e materiais podem ser modificados em comunidades e épocas distintas, sem que uma versão seja obrigatoriamente a única legítima."
      },
      {
        "level": "basic",
        "prompt": "Cite uma dimensão educativa de um jogo que não dependa de vencer.",
        "hint": "Considere cooperação e tomada de decisões.",
        "solution": "Brincadeiras podem desenvolver cooperação, coordenação, negociação de regras e convivência mesmo quando não há vencedor definido."
      },
      {
        "level": "intermediate",
        "prompt": "Como adaptar um jogo escolar para incluir alguém com necessidade de maior tempo de resposta?",
        "hint": "Negocie condições que preservem a participação.",
        "solution": "O grupo pode ampliar o tempo disponível ou modificar a dinâmica, ouvindo a pessoa envolvida e verificando se a participação se torna efetiva."
      },
      {
        "level": "intermediate",
        "prompt": "Por que uma variante local de amarelinha não é automaticamente erro?",
        "hint": "A brincadeira não possui necessariamente uma norma universal.",
        "solution": "Jogos tradicionais podem apresentar versões legítimas conforme comunidade, espaço e época. O grupo deve combinar qual conjunto de regras utilizará."
      },
      {
        "level": "advanced",
        "prompt": "Uma entrevista com um familiar permite afirmar que todos de sua geração brincavam do mesmo jeito?",
        "hint": "Uma lembrança não representa uma população inteira.",
        "solution": "Não. A entrevista descreve experiência individual ou localizada; generalizações exigem outras fontes e análise de diferenças sociais e regionais."
      },
      {
        "level": "advanced",
        "prompt": "Explique como a urbanização pode afetar oportunidades de brincar sem determinar o comportamento de todos.",
        "hint": "Considere disponibilidade e segurança dos espaços.",
        "solution": "Mudanças no uso de praças, ruas e pátios podem ampliar ou restringir opções, mas as experiências variam conforme infraestrutura, tempo e relações comunitárias."
      }
    ],
    "everyday": {
      "context": "Durante uma aula, estudantes de bairros diferentes propõem regras diferentes para a mesma brincadeira. O grupo decide que uma versão está errada e deixa de fora colegas que não conseguem acompanhar o ritmo.",
      "question": "Como a origem cultural das regras e a possibilidade de adaptação ajudam a organizar um jogo acessível?",
      "answer": "As regras podem variar entre comunidades. O grupo pode negociar uma versão comum e ajustar ritmo, espaço ou materiais para incluir participantes, sem tratar diferenças como incapacidade.",
      "connections": [
        {
          "subject": "Educação Física",
          "topic": "Preconceito e inclusão no esporte",
          "reason": "Ajustar condições de participação e evitar julgamentos de habilidade amplia inclusão em jogos e práticas corporais."
        },
        {
          "subject": "Sociologia",
          "topic": "Cultura e etnocentrismo",
          "reason": "A variedade de regras e costumes mostra como práticas culturais mudam e não devem ser hierarquizadas por familiaridade pessoal."
        }
      ]
    }
  },
  {
    "subject": "Ciências",
    "topic": "Circuitos elétricos simples",
    "objective": "Explicar corrente, tensão e resistência em circuitos de baixa tensão, interpretar ligações em série e paralelo e aplicar a lei de Ohm em exercícios sem orientar manipulação de rede elétrica.",
    "sections": [
      {
        "title": "Para existir corrente é necessário caminho fechado",
        "explanation": "Num circuito elétrico básico, uma fonte estabelece diferença de potencial entre terminais e pode promover corrente quando há caminho condutor fechado. Corrente elétrica mede a taxa de passagem de carga, em ampères (A); tensão, em volts (V), expressa diferença de potencial elétrico; resistência, em ohms (Ω), relaciona oposição à corrente em materiais e componentes sob condições apropriadas. Uma bateria, fios e lâmpada podem formar um circuito didático, mas abrir o interruptor interrompe o caminho e, no modelo simples, a lâmpada apaga. A corrente não é 'gasta' pela lâmpada no sentido de deixar de existir como carga: energia elétrica é transferida para luz e calor, enquanto cargas circulam. Circuitos reais incluem propriedades dos materiais, resistência interna e condições de segurança. A análise escolar deve ocorrer com esquemas ou kits adequados de baixa tensão sob supervisão, nunca por experiências com tomadas.",
        "example": "Em um esquema com bateria e uma pequena lâmpada, fechar o interruptor completa o caminho, permitindo corrente; abrir o interruptor interrompe o fluxo e a lâmpada apaga no modelo.",
        "pitfall": "Afirmar que a carga elétrica desaparece ao atravessar uma lâmpada ou experimentar circuitos com tomadas para comprovar conceitos escolares.",
        "steps": [
          "Localize fonte, condutores, receptor e interruptor no esquema antes de calcular grandezas.",
          "Verifique se há caminho fechado e diferencie fluxo de carga de transferência de energia."
        ]
      },
      {
        "title": "Lei de Ohm e unidades do modelo",
        "explanation": "Para um resistor ôhmico sob condições em que sua resistência é aproximadamente constante, a lei de Ohm relaciona tensão, corrente e resistência por U=R·I. Se um resistor de 6 Ω recebe diferença de potencial de 12 V, a corrente idealizada é I=12/6=2 A. Essa equação não permite tratar qualquer componente eletrônico como resistor de R constante: lâmpadas incandescentes, diodos e outras peças podem apresentar relações não lineares. Valores do exercício devem ser acompanhados de unidade correta e do componente a que se referem. A tensão da fonte não é energia total consumida; potência pode ser calculada por P=U·I em contextos apropriados, e energia depende do tempo de funcionamento. A corrente elétrica possui direção convencional adotada, distinta do movimento dos elétrons metálicos. Em provas, é essencial explicitar simplificações e resistências consideradas.",
        "example": "Num resistor ideal de 10 Ω, uma tensão de 5 V produziria I=0,5 A, assumindo comportamento ôhmico e condições constantes de temperatura.",
        "pitfall": "Aplicar U=RI com resistência fixa a qualquer dispositivo sem verificar condições ou confundir volt, ampère e watt.",
        "steps": [
          "Identifique a qual resistor e a qual trecho do circuito se referem U, I e R.",
          "Use U=RI somente no modelo indicado e confira as unidades de cada grandeza."
        ]
      },
      {
        "title": "Série e paralelo não respondem do mesmo modo",
        "explanation": "Em um circuito em série ideal, os componentes são atravessados pela mesma corrente e a resistência equivalente de resistores é soma das resistências: Req=R1+R2. Se um componente abre o circuito e não há caminho alternativo, todos os demais deixam de receber corrente. Em uma associação em paralelo, cada ramo fica submetido à mesma diferença de potencial entre os nós de conexão, enquanto a corrente total é soma das correntes dos ramos. Para resistores em paralelo, 1/Req=1/R1+1/R2; a resistência equivalente de resistores positivos é menor que a menor resistência do conjunto. Em instalações reais, fios, fontes e dispositivos podem introduzir outros fatores. A comparação esclarece por que circuitos com caminhos independentes podem continuar funcionando quando um ramo falha, sem orientar intervenções em redes domésticas. Segurança e dimensionamento elétrico são responsabilidade técnica.",
        "example": "Dois resistores de 4 Ω em série resultam Req=8 Ω; em paralelo, Req=2 Ω, no modelo ideal. A forma de ligação altera a corrente total para mesma tensão da fonte.",
        "pitfall": "Supor que tensão e corrente são iguais em todos os elementos de série e paralelo, ou tentar verificar associações usando a fiação da casa.",
        "steps": [
          "Identifique quais componentes compartilham corrente no mesmo caminho e quais compartilham tensão entre nós.",
          "Calcule a resistência equivalente segundo a ligação e verifique se o resultado é coerente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que acontece com a corrente num circuito didático simples quando o interruptor abre?",
        "hint": "Um caminho completo é necessário para a corrente.",
        "solution": "O circuito fica interrompido e, no modelo básico com um único caminho, deixa de circular corrente pela lâmpada."
      },
      {
        "level": "basic",
        "prompt": "Qual unidade corresponde a corrente elétrica, tensão e resistência?",
        "hint": "Diferencie A, V e Ω.",
        "solution": "Corrente é medida em ampères (A); tensão em volts (V); resistência em ohms (Ω). São grandezas diferentes."
      },
      {
        "level": "intermediate",
        "prompt": "Um resistor ôhmico de 6 Ω recebe 12 V. Calcule a corrente.",
        "hint": "Use I=U/R para resistor ideal.",
        "solution": "I=12/6=2 A, supondo resistência constante no intervalo considerado e fonte idealizada."
      },
      {
        "level": "intermediate",
        "prompt": "Dois resistores de 3 Ω e 5 Ω são ligados em série. Qual Req?",
        "hint": "Some resistências na ligação em série.",
        "solution": "Req=3+5=8 Ω. No modelo ideal, a mesma corrente percorre ambos os resistores."
      },
      {
        "level": "advanced",
        "prompt": "Dois resistores de 4 Ω são ligados em paralelo. Calcule Req.",
        "hint": "Use 1/Req=1/4+1/4.",
        "solution": "1/Req=2/4=1/2, então Req=2 Ω. A resistência equivalente fica abaixo de 4 Ω."
      },
      {
        "level": "advanced",
        "prompt": "Por que uma lâmpada que apaga em um ramo paralelo não precisa apagar todas as outras?",
        "hint": "Há caminhos independentes para corrente.",
        "solution": "Se os ramos restantes continuarem ligados à fonte, eles podem receber corrente por outros caminhos. Isso difere de um circuito simples em série."
      }
    ],
    "everyday": {
      "context": "Uma turma utiliza apenas diagramas e um kit didático seguro de baixa tensão. Em um esquema, duas lâmpadas estão no mesmo caminho; em outro, cada uma está num ramo independente.",
      "question": "Por que uma lâmpada desconectada pode interromper tudo na série, mas não necessariamente todos os ramos em paralelo?",
      "answer": "Na série existe um único caminho de corrente, que se interrompe quando um componente abre o circuito. Em paralelo, outros ramos podem permanecer fechados e alimentados.",
      "connections": [
        {
          "subject": "Física",
          "topic": "Potência e consumo de energia elétrica",
          "reason": "Corrente e tensão permitem calcular potência de componentes no modelo apropriado, conectando circuito a consumo energético."
        },
        {
          "subject": "Ciências",
          "topic": "Formas e transformações de energia",
          "reason": "Lâmpadas transformam energia elétrica em luz e energia térmica, sem consumir a própria carga elétrica que circula."
        }
      ]
    }
  }
];
const lookup=new Map(specs.map(s=>[s.subject+'\0'+s.topic,s]));
export const stage16Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage16EverydayContexts:readonly EverydayContext[]=specs.map(s=>({subject:s.subject,topic:s.topic,...s.everyday}));
export function stage16Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=lookup.get(topic.subject+'\0'+topic.topic);
 if(!data)return null;
 const levels:CourseLevel[]=['basic','intermediate','advanced'];
 const sections:CourseSection[]=data.sections.map((section,i)=>({
  ...section,level:levels[i],
  explanation:(i===0?'Aula específica do Kognos; revisão docente pendente.\n\n':'')+section.explanation
 }));
 const sourceUrls=[...new Set(topic.exams.map(e=>examBlueprints[e]?.sourceUrl).filter((u):u is string=>Boolean(u?.startsWith('https://'))))];
 const tasks:CourseTask[]=data.tasks.map(t=>({...t}));
 return {
  kind:'lesson',id:topic.id,subject:topic.subject,topic:topic.topic,exams:topic.exams,
  objective:data.objective,prerequisites:[],sections,tasks,videos:[],
  authorship:'Kognos — aula autoral específica; sem homologação docente',
  license:'Conteúdo preparatório original do Kognos, não oficial',
  sourceUrls,review:'introductory'
 };
}
