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
