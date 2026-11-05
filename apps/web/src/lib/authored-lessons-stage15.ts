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
    "topic": "Progressão geométrica",
    "objective": "Reconhecer sequências multiplicativas, utilizar termo geral e soma finita e interpretar porcentagens sucessivas sem extrapolar modelos.",
    "sections": [
      {
        "title": "Razão e termo geral de uma PG",
        "explanation": "Progressão geométrica é uma sequência em que cada termo após o primeiro é obtido multiplicando o anterior por uma razão constante q. Na sequência 3, 6, 12, 24, a razão é 2, pois 6/3=12/6=24/12. O termo geral é aₙ=a₁qⁿ⁻¹ para índices inteiros positivos. A diferença entre termos não é constante, ao contrário do que ocorre na progressão aritmética. Razões entre zero e um descrevem redução multiplicativa; razões negativas podem alternar sinais e exigem atenção ao significado da grandeza. Em situações cotidianas, crescimento por taxas sucessivas pode ser representado por PG sob hipóteses explícitas, mas uma população ou empreendimento não cresce necessariamente assim para sempre. Identifique a unidade de cada termo e o intervalo que separa os índices.",
        "example": "Um sistema fictício duplica uma coleção de 4 arquivos a cada rodada: 4, 8, 16, 32. Na quinta rodada, a₅=4×2⁴=64 arquivos. Não se soma quatro a cada etapa, porque os aumentos absolutos são 4, 8, 16 e assim por diante.",
        "pitfall": "Usar aₙ=a₁+(n−1)q, que seria estrutura aditiva, ou chamar qualquer sequência crescente de progressão geométrica.",
        "steps": [
          "Compare quocientes consecutivos para confirmar que a razão multiplicativa se mantém.",
          "Identifique a₁, q e o índice pedido, lembrando o expoente n−1."
        ]
      },
      {
        "title": "Porcentagens sucessivas e soma de termos",
        "explanation": "Uma variação percentual recorrente aplica um fator multiplicativo ao valor atualizado: aumento de 10% corresponde a multiplicar por 1,10; redução de 20%, por 0,80. Portanto, dois descontos de 10% não correspondem a desconto total de 20% sobre a base original, pois o segundo incide sobre o valor já reduzido. Quando a questão pede a soma dos primeiros n termos, com q≠1, usa-se Sₙ=a₁(qⁿ−1)/(q−1); se q=1, Sₙ=n·a₁. É fundamental distinguir o termo de uma rodada do total acumulado. A fórmula de soma se aplica a um número finito de parcelas e não depende de supor crescimento ilimitado. Taxas de juros, pagamentos e quantidades armazenadas exigem cuidado com o significado de cada etapa.",
        "example": "Uma quantia hipotética de R$ 100 sofre desconto de 10% e depois outro de 10%. Passa de 100 para 90 e de 90 para 81 reais. O desconto total é de R$ 19, ou 19%, não 20%.",
        "pitfall": "Somar percentuais sucessivos como se todos incidissem sobre a mesma base ou confundir o último termo com a soma acumulada.",
        "steps": [
          "Converta cada percentual em fator multiplicativo e aplique-o ao valor atualizado.",
          "Quando precisar do total de várias parcelas, calcule Sₙ, não somente aₙ."
        ]
      },
      {
        "title": "Limites e interpretação de modelos exponenciais",
        "explanation": "Uma PG pode representar variação multiplicativa em situações idealizadas, mas seu uso não comprova que uma tendência continuará sem restrições. Se q>1 e os termos são positivos, há crescimento progressivamente maior; se 0<q<1, os termos positivos diminuem, aproximando-se de zero. Quando q é negativo, sinais alternam e talvez não façam sentido para grandezas como população. Recursos, capacidade física, mudanças de taxa e custos podem impedir projeções indefinidas. Em problemas financeiros, diferencie capital, crescimento de saldo e depósito periódico; são grandezas que podem seguir padrões diferentes. Em questões de vestibular, explicite hipóteses, limite de tempo e unidade da resposta. O modelo permite calcular valores coerentes com a regra adotada, mas não garante acontecimentos futuros.",
        "example": "Se 200 inscrições aumentassem 50% em cada uma de três etapas, o modelo produziria 200, 300, 450 e 675. Trata-se de projeção hipotética, não previsão oficial de matrículas.",
        "pitfall": "Interpretar qualquer resultado de uma PG como previsão garantida ou usar contagens fracionárias como número exato de pessoas.",
        "steps": [
          "Declare por quantas etapas a taxa constante está sendo suposta.",
          "Verifique se os resultados respeitam limites materiais e o sentido da grandeza."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A sequência 2, 6, 18, 54 é uma PG? Determine a razão.",
        "hint": "Divida os termos consecutivos para verificar o mesmo quociente.",
        "solution": "Sim. 6/2=18/6=54/18=3, logo a razão constante é q=3 e os valores seguem progressão geométrica."
      },
      {
        "level": "basic",
        "prompt": "Calcule o quinto termo de uma PG com a₁=4 e q=2.",
        "hint": "Use a₅=a₁q⁴.",
        "solution": "a₅=4×2⁴=4×16=64. A sequência é 4, 8, 16, 32, 64, confirmando o valor calculado."
      },
      {
        "level": "intermediate",
        "prompt": "Um valor inicial de R$ 100 cai 10% em duas etapas. Qual o final?",
        "hint": "Multiplique por 0,90 duas vezes.",
        "solution": "O valor fica 100×0,90×0,90=R$ 81. A redução acumulada foi de 19%, não 20%."
      },
      {
        "level": "intermediate",
        "prompt": "Qual a soma dos quatro primeiros termos da PG 3, 6, 12, 24?",
        "hint": "Some diretamente ou use a fórmula Sₙ.",
        "solution": "S₄=3+6+12+24=45. Pela fórmula, 3(2⁴−1)/(2−1)=45, o mesmo resultado."
      },
      {
        "level": "advanced",
        "prompt": "Numa PG de razão positiva, a₂=12 e a₄=108. Ache q e a₁.",
        "hint": "A razão entre a₄ e a₂ é q².",
        "solution": "q²=108/12=9, então q=3 pela condição de positividade. Assim a₁=12/3=4."
      },
      {
        "level": "advanced",
        "prompt": "Por que não é correto projetar indefinidamente que uma população dobre a cada ano?",
        "hint": "Considere recursos, condições e taxa não constante.",
        "solution": "O crescimento por PG é uma hipótese matemática. Recursos, condições ambientais e mudanças demográficas podem alterar a taxa; a fórmula não garante a projeção."
      }
    ],
    "everyday": {
      "context": "Uma escola simula cópias de segurança cujo total de arquivos dobra a cada etapa: 4, 8, 16. Um aluno supõe que os próximos termos serão 20 e 24 porque a primeira diferença foi quatro.",
      "question": "Por que essa continuação é inadequada e qual será o quinto termo se a duplicação continuar?",
      "answer": "A razão é 2, não uma diferença constante. Os termos seguintes são 32 e 64 arquivos; a₅=4×2⁴=64 sob a hipótese de duplicação a cada etapa.",
      "connections": [
        {
          "subject": "Matemática",
          "topic": "Progressão aritmética",
          "reason": "Comparar diferença fixa com multiplicação fixa ajuda a escolher o modelo correto para uma sequência."
        },
        {
          "subject": "Matemática",
          "topic": "Porcentagem e juros",
          "reason": "Taxas percentuais repetidas são convertidas em fatores multiplicativos, produzindo uma PG sob taxa constante."
        }
      ]
    }
  },
  {
    "subject": "Física",
    "topic": "Calor sensível e capacidade térmica",
    "objective": "Calcular transferências térmicas e capacidade térmica com Q=mcΔT, diferenciando temperatura, calor e mudança de fase.",
    "sections": [
      {
        "title": "Calor e temperatura não são sinônimos",
        "explanation": "Temperatura caracteriza o estado térmico de um sistema e se relaciona ao equilíbrio térmico. Calor, na Física, é energia em trânsito devido a uma diferença de temperatura, não uma substância guardada dentro do corpo. Em certas condições, um objeto pode receber energia por calor e ter sua temperatura elevada; durante mudança de fase, essa energia pode ser empregada sem variação de temperatura no modelo ideal. O chamado calor sensível descreve transferência energética acompanhada de mudança de temperatura sem transformação de fase. Para comparar duas situações, identifique a massa, o material, a temperatura inicial e a final, além de condições ambientais. Um objeto pequeno muito quente não possui necessariamente maior quantidade de energia térmica do que um corpo enorme mais frio. A linguagem cotidiana não deve substituir a identificação das grandezas.",
        "example": "Uma panela com água e uma colher podem estar a 60 °C, mas exigem quantidades distintas de energia para elevar suas temperaturas devido a diferenças de massa e calor específico.",
        "pitfall": "Confundir calor com temperatura ou supor que todo corpo mais quente sempre contém maior energia total do que qualquer corpo mais frio.",
        "steps": [
          "Identifique qual sistema recebe ou cede energia por diferença de temperatura.",
          "Verifique se há ou não mudança de estado antes de usar o cálculo de calor sensível."
        ]
      },
      {
        "title": "Q=mcΔT e unidades de calor específico",
        "explanation": "Quando o calor específico do material pode ser tratado como constante num intervalo, a transferência de calor sensível é representada por Q=m·c·ΔT. A variação térmica é ΔT=Tfinal−Tinicial, e c descreve energia por unidade de massa e por unidade de variação de temperatura. Se a massa estiver em quilogramas, c pode ser expresso em J/(kg·°C), produzindo Q em joules. Para diferenças de temperatura, um incremento de 1 °C equivale a incremento de 1 K. Se a temperatura do corpo diminui, ΔT é negativo e o sinal do Q convencionalmente indica energia cedida pelo corpo. Calcule com unidades coerentes, porque massa em gramas com c dado por quilograma produz erro de mil vezes. O modelo não descreve sozinho mudanças de fase nem efeitos de variações importantes de calor específico.",
        "example": "Para 2 kg de água, adotando c≈4200 J/(kg·°C) e aquecimento de 20 para 25 °C, Q=2×4200×5=42.000 J, sem mudança de fase.",
        "pitfall": "Aplicar temperatura final no lugar da variação ou misturar massa em gramas com unidade por quilograma.",
        "steps": [
          "Converta massa e calor específico para unidades compatíveis.",
          "Calcule ΔT e determine o sinal da energia transferida."
        ]
      },
      {
        "title": "Capacidade térmica do corpo e trocas térmicas",
        "explanation": "A capacidade térmica de um corpo é C=Q/ΔT nas condições do modelo e, para material aproximadamente homogêneo com calor específico constante, C=m·c. A unidade pode ser J/°C ou J/K. O calor específico caracteriza propriedade por massa, enquanto a capacidade térmica considera o corpo inteiro. Assim, duas porções do mesmo material em massas diferentes possuem o mesmo c aproximado, mas capacidades térmicas diferentes. Em um sistema isolado ideal, a energia cedida por um corpo pode ser recebida por outro, sem troca líquida com o ambiente; numa experiência real, recipiente e ar também participam. Ao discutir equilíbrio térmico, declare se perdas são desprezadas. A temperatura final da mistura depende de massas, materiais e condições, não da simples média das temperaturas em todo caso.",
        "example": "Um bloco de 0,5 kg com c=800 J/(kg·°C) possui C=400 J/°C; elevar sua temperatura em 3 °C exige aproximadamente 1200 J.",
        "pitfall": "Confundir C de um objeto com c de um material ou ignorar o calor absorvido pelo recipiente.",
        "steps": [
          "Calcule a capacidade do corpo multiplicando massa por calor específico.",
          "Em misturas, enumere o que recebe ou cede energia e indique as perdas ignoradas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Defina calor e diferencie-o de temperatura.",
        "hint": "Uma grandeza descreve transferência de energia por diferença térmica.",
        "solution": "Calor é energia transferida devido a diferença de temperatura; temperatura caracteriza o estado térmico. Não são grandezas equivalentes."
      },
      {
        "level": "basic",
        "prompt": "Um objeto passa de 18 °C para 27 °C. Qual a variação de temperatura?",
        "hint": "Subtraia temperatura inicial da final.",
        "solution": "ΔT=27−18=9 °C, que equivale a variação de 9 K em termos de intervalo de temperatura."
      },
      {
        "level": "intermediate",
        "prompt": "Determine Q para 1 kg, c=500 J/(kg·°C) e aquecimento de 4 °C.",
        "hint": "Use Q=mcΔT com as unidades fornecidas.",
        "solution": "Q=1×500×4=2000 J, assumindo calor específico constante e nenhuma mudança de fase."
      },
      {
        "level": "intermediate",
        "prompt": "Calcule a capacidade térmica de 2 kg de material com c=900 J/(kg·°C).",
        "hint": "Use C=m·c.",
        "solution": "C=2×900=1800 J/°C. Essa é a capacidade do corpo inteiro, não o calor específico por quilograma."
      },
      {
        "level": "advanced",
        "prompt": "Massas de 1 kg e 3 kg do mesmo material recebem o mesmo Q. Qual sofre maior ΔT?",
        "hint": "Use ΔT=Q/(mc).",
        "solution": "Para o mesmo Q e c, a porção de 1 kg aquece três vezes mais que a de 3 kg, no modelo sem perdas."
      },
      {
        "level": "advanced",
        "prompt": "Por que Q=mcΔT não basta para descrever gelo derretendo e depois vaporizando?",
        "hint": "Há etapas de mudança de estado físico.",
        "solution": "A equação descreve variação térmica sem transição de fase. Fusão e vaporização exigem considerar energia latente e condições apropriadas."
      }
    ],
    "everyday": {
      "context": "Duas panelas aquecem volumes diferentes de água, iniciando na mesma temperatura. Uma possui aproximadamente um litro e a outra dois litros, com perdas desprezadas no modelo escolar.",
      "question": "Se ambas receberem a mesma quantidade de energia, por que a temperatura não deverá aumentar igualmente?",
      "answer": "Com mesma substância e calor específico, Q=mcΔT mostra que a massa duas vezes maior terá aproximadamente metade da variação de temperatura, mantidas as hipóteses.",
      "connections": [
        {
          "subject": "Física",
          "topic": "Conservação da energia mecânica",
          "reason": "Ambas as aulas tratam de transformação e transferência de energia, exigindo identificar o sistema em análise."
        },
        {
          "subject": "Ciências",
          "topic": "Estados físicos e mudanças de estado",
          "reason": "Calor latente em mudanças de fase não é descrito apenas por Q=mcΔT, que vale para aquecimento sem mudança de fase."
        }
      ]
    }
  },
  {
    "subject": "Química",
    "topic": "Equilíbrio químico e constantes",
    "objective": "Reconhecer o equilíbrio químico dinâmico, construir expressões de Kc para reações balanceadas e interpretar perturbações sem confundir velocidades e concentrações.",
    "sections": [
      {
        "title": "O equilíbrio continua reagindo",
        "explanation": "Uma transformação química reversível pode ocorrer nos sentidos direto e inverso. No equilíbrio químico, sob condições adequadas e constantes, as duas velocidades tornam-se iguais, de modo que concentrações macroscópicas se mantêm constantes com o tempo. Isso não significa que as moléculas pararam de reagir ou que as concentrações de reagentes e produtos sejam idênticas. Uma reação pode atingir equilíbrio com quantidade de produto muito maior ou muito menor que a de reagente. A interpretação depende do sistema e de suas condições, como temperatura e eventual perda de substâncias. Em recipientes abertos, a saída de produtos gasosos pode impedir a mesma situação de equilíbrio de um sistema fechado. Nas provas, procure as duas direções da reação e diferencie velocidade de composição antes de fazer qualquer cálculo de constante.",
        "example": "Em uma reação hipotética A ⇌ B, [A] pode estabilizar em 0,20 mol/L e [B] em 0,80 mol/L, sem contradição: o equilíbrio exige velocidades iguais, não concentrações iguais.",
        "pitfall": "Definir equilíbrio como cessação completa das reações ou como mistura obrigatoriamente composta por partes iguais.",
        "steps": [
          "Identifique a reação reversível e as condições que precisam permanecer constantes.",
          "Analise velocidades direta e inversa sem exigir concentrações iguais."
        ]
      },
      {
        "title": "A expressão de Kc vem dos coeficientes da reação",
        "explanation": "Para uma reação homogênea aA+bB⇌cC+dD, a expressão escolar de Kc é [C]^c[D]^d/([A]^a[B]^b), usando concentrações de equilíbrio sob aproximações adequadas. Os expoentes correspondem aos coeficientes estequiométricos da equação balanceada. Na descrição termodinâmica rigorosa, constantes são expressas por atividades; o uso direto de concentrações é uma simplificação didática frequentemente adequada às questões. Sólidos puros e líquidos puros não entram explicitamente nas expressões usuais, pois suas atividades são consideradas constantes. Um valor elevado de Kc indica favorecimento relativo de produtos nas condições indicadas, não conversão garantida de 100%. A constante varia com a temperatura, enquanto valores iniciais de concentração não podem ser substituídos como se fossem resultados de equilíbrio. Sempre identifique estados físicos e balanceie a equação.",
        "example": "Para H₂(g)+I₂(g)⇌2HI(g), Kc=[HI]²/([H₂][I₂]). Se as concentrações de equilíbrio forem 0,40, 0,20 e 0,10 mol/L, respectivamente, Kc=0,16/(0,02)=8, no modelo.",
        "pitfall": "Esquecer os coeficientes como expoentes ou incluir sólidos puros na expressão de Kc em exercício escolar.",
        "steps": [
          "Balanceie a reação e escreva as espécies adequadas em produtos sobre reagentes.",
          "Use somente concentrações de equilíbrio para substituir números na expressão."
        ]
      },
      {
        "title": "Mudanças no equilíbrio e limites da regra qualitativa",
        "explanation": "Perturbações de concentração, temperatura e pressão podem deslocar a composição de um sistema em equilíbrio. O princípio de Le Chatelier prevê qualitativamente tendências de resposta em muitas situações, mas a aplicação exige identificar a natureza da perturbação. Aumentar a concentração de um reagente pode favorecer seu consumo, dependendo da reação. Em equilíbrio gasoso ideal, uma compressão que altera o volume tende a favorecer o lado com menos mols gasosos, se os números diferirem; não basta afirmar que maior pressão favorece sempre produtos. Temperatura modifica K e, no modelo qualitativo, o aumento pode favorecer o sentido endotérmico. Catalisadores aceleram caminhos de reação e a chegada ao equilíbrio, mas não alteram sua composição final nem o valor de K na mesma temperatura. O raciocínio deve separar transformação cinética de alteração termodinâmica.",
        "example": "Uma reação hipotética apresenta dois mols de gases no lado reagente e um no produto. Uma redução de volume a temperatura constante pode favorecer o lado com menos mols gasosos sob aproximação ideal.",
        "pitfall": "Afirmar que qualquer catalisador aumenta K ou que comprimir um sistema gasoso sempre favorece os produtos.",
        "steps": [
          "Conte mols gasosos e identifique exatamente qual variável foi modificada.",
          "Conclua o sentido provável da resposta sem confundir rapidez da reação com posição do equilíbrio."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O equilíbrio químico significa que as duas reações foram interrompidas?",
        "hint": "Considere as velocidades nos dois sentidos.",
        "solution": "Não. O equilíbrio é dinâmico: as reações continuam com velocidades direta e inversa iguais, mantendo as concentrações macroscópicas constantes."
      },
      {
        "level": "basic",
        "prompt": "Equilíbrio exige a mesma concentração de reagentes e produtos?",
        "hint": "Igualdade de velocidades é diferente de igualdade de quantidades.",
        "solution": "Não. A composição pode favorecer reagentes ou produtos; o requisito cinético é igualdade das velocidades opostas nas condições de equilíbrio."
      },
      {
        "level": "intermediate",
        "prompt": "Escreva Kc para N₂(g)+3H₂(g)⇌2NH₃(g).",
        "hint": "Os coeficientes entram como expoentes.",
        "solution": "Kc=[NH₃]²/([N₂][H₂]³), utilizando concentrações de equilíbrio dentro da aproximação da atividade por concentração."
      },
      {
        "level": "intermediate",
        "prompt": "Para A⇌B, [A]=0,20 e [B]=0,60 mol/L no equilíbrio. Determine Kc.",
        "hint": "A expressão é [B]/[A].",
        "solution": "Kc=0,60/0,20=3 na temperatura e nas condições do enunciado. O número não indica que a reação parou."
      },
      {
        "level": "advanced",
        "prompt": "Explique por que um catalisador não muda a posição do equilíbrio.",
        "hint": "Ele influencia os caminhos cinéticos, não a constante termodinâmica.",
        "solution": "Um catalisador acelera os sentidos direto e inverso, podendo reduzir o tempo até o equilíbrio, mas não modifica K nem a composição final em temperatura fixa."
      },
      {
        "level": "advanced",
        "prompt": "Numa reação gasosa com igual número de mols de gás em ambos os lados, comprimir favorece obrigatoriamente produtos?",
        "hint": "Compare mols gasosos antes de concluir.",
        "solution": "Não. Se ambos os lados têm o mesmo total de mols gasosos, uma compressão ideal pode não favorecer um deles. A reação e as condições precisam ser avaliadas."
      }
    ],
    "everyday": {
      "context": "Em um laboratório supervisionado, as concentrações de substâncias de uma reação reversível ficam constantes após algum tempo. A turma conclui que as moléculas não estão mais reagindo.",
      "question": "Por que a estabilidade observada não significa ausência de reações microscópicas?",
      "answer": "Porque a reação direta e a inversa continuam, mas apresentam velocidades iguais. O equilíbrio mantém a composição macroscópica apesar de processos contínuos.",
      "connections": [
        {
          "subject": "Química",
          "topic": "Cálculo estequiométrico",
          "reason": "Os coeficientes da equação balanceada determinam expoentes nas expressões de constantes de equilíbrio."
        },
        {
          "subject": "Química",
          "topic": "pH e pOH",
          "reason": "Equilíbrios entre espécies em solução contribuem para compreender a concentração de íons e o comportamento ácido-base."
        }
      ]
    }
  },
  {
    "subject": "Biologia",
    "topic": "Fotossíntese e quimiossíntese",
    "objective": "Comparar formas autotróficas de fixação de carbono por luz ou energia química, interpretando a origem do oxigênio e os limites das equações simplificadas.",
    "sections": [
      {
        "title": "Fotossíntese fixa carbono utilizando luz",
        "explanation": "Na fotossíntese oxigênica, plantas, algas e cianobactérias captam energia luminosa e utilizam CO₂ para incorporar carbono em matéria orgânica. A equação global simplificada 6CO₂+6H₂O→C₆H₁₂O₆+6O₂, com energia luminosa, mostra o balanço geral, mas não todas as etapas e os produtos metabólicos imediatos. O oxigênio liberado vem da água, não do CO₂. Nas plantas, cloroplastos contêm estruturas e pigmentos que participam das transformações. A formação de matéria orgânica ajuda a sustentar cadeias alimentares, mas a planta também realiza respiração celular: um processo não elimina o outro. A taxa fotossintética depende de luminosidade, água, CO₂, temperatura e outros fatores, portanto não cresce indefinidamente com qualquer um deles isoladamente. É importante diferenciar origem da energia e origem dos átomos incorporados.",
        "example": "Uma planta cultivada sob condições adequadas pode incorporar átomos de carbono do CO₂ atmosférico na biomassa. Isso não significa que toda sua massa venha de nutrientes minerais do solo.",
        "pitfall": "Dizer que plantas não respiram durante o dia ou que o oxigênio molecular liberado provém do CO₂.",
        "steps": [
          "Localize luz como fonte energética e CO₂ como origem de carbono fixado.",
          "Diferencie a origem do O₂ liberado e a composição simplificada dos produtos."
        ]
      },
      {
        "title": "Reações luminosas e ciclo de Calvin",
        "explanation": "Nas plantas, reações fotoquímicas ocorrem associadas às membranas dos tilacoides, onde a energia luminosa possibilita produção de ATP e poder redutor, incluindo NADPH; na fotossíntese oxigênica, a água é fonte de elétrons e o O₂ pode ser liberado. O ciclo de Calvin ocorre no estroma e utiliza ATP e NADPH na fixação de carbono do CO₂ em compostos orgânicos. O termo escolar 'fase escura' pode sugerir incorretamente que o ciclo exige ausência de luz: ele não usa fótons diretamente da mesma forma que as reações fotoquímicas, mas depende de seus produtos e não é necessariamente noturno. O aumento de luz pode elevar atividade fotossintética até que outros fatores se tornem limitantes. Em provas, a função das etapas importa mais do que decorar nomes isolados.",
        "example": "Se a luz aumenta num cultivo com água disponível, a atividade fotossintética pode responder até que CO₂, temperatura ou outra condição limite o processo; o ganho não é ilimitado.",
        "pitfall": "Afirmar que o ciclo de Calvin ocorre somente à noite ou que mais luz sempre gera mais fotossíntese sem limite.",
        "steps": [
          "Identifique tilacoides e seus produtos energéticos nas reações fotoquímicas.",
          "Associe estroma e fixação de CO₂ ao ciclo de Calvin."
        ]
      },
      {
        "title": "Quimiossíntese e autotrofia sem luz",
        "explanation": "Certos microrganismos autotróficos conseguem obter energia a partir da oxidação de substâncias inorgânicas e utilizá-la para fixar carbono inorgânico. Em linguagem escolar, essa produção é chamada quimiossíntese, embora as rotas metabólicas variem entre organismos. A fonte de energia pode estar associada a compostos de nitrogênio, enxofre ou ferro, não à absorção de luz. Isso ajuda a explicar como algumas redes ecológicas podem sustentar produção primária em ambientes sem iluminação. Porém nem todo microrganismo que vive em lugar escuro é quimioautotrófico: muitos são consumidores ou decompositores. Não é correto tratar fotossíntese e quimiossíntese como reações idênticas que apenas trocam fonte de luz por outra fonte; organismos, substratos e subprodutos são diversos. A distinção essencial envolve energia para fixar carbono.",
        "example": "Uma bactéria nitrificante pode liberar energia ao oxidar certas espécies inorgânicas de nitrogênio, utilizando-a em processos que sustentam autotrofia, sem necessidade de luz solar.",
        "pitfall": "Confundir quimiossíntese com fermentação ou afirmar que qualquer bactéria presente em escuridão fixa carbono.",
        "steps": [
          "Identifique a reação química que fornece energia ao organismo.",
          "Compare com a captação luminosa na fotossíntese e examine a origem do carbono."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a principal fonte de energia da fotossíntese de plantas?",
        "hint": "Considere energia absorvida por pigmentos.",
        "solution": "É a energia luminosa, convertida em energia química nas etapas fotoquímicas e usada para apoiar a fixação de carbono."
      },
      {
        "level": "basic",
        "prompt": "O O₂ liberado na fotossíntese oxigênica tem origem em qual substância?",
        "hint": "Pense na quebra e oxidação da água.",
        "solution": "O oxigênio liberado provém da água que fornece elétrons; CO₂ fornece o carbono incorporado em compostos orgânicos."
      },
      {
        "level": "intermediate",
        "prompt": "Para que servem ATP e NADPH das reações luminosas?",
        "hint": "Relacione energia e poder redutor ao carbono.",
        "solution": "Fornecem energia e poder redutor para etapas da fixação de CO₂, incluindo o ciclo de Calvin nos cloroplastos."
      },
      {
        "level": "intermediate",
        "prompt": "Por que a expressão 'fase escura' pode induzir erro sobre o ciclo de Calvin?",
        "hint": "Ele não exige escuridão e depende de ATP e NADPH.",
        "solution": "O ciclo não utiliza fótons diretamente nas mesmas reações, mas depende de produtos gerados na fase fotoquímica. Não ocorre obrigatoriamente no escuro."
      },
      {
        "level": "advanced",
        "prompt": "Diferencie as fontes de energia de fotossíntese e quimiossíntese.",
        "hint": "Luz versus oxidação de compostos inorgânicos.",
        "solution": "A fotossíntese utiliza energia luminosa, enquanto quimioautótrofos podem obter energia de reações de oxidação de substâncias inorgânicas para fixar carbono."
      },
      {
        "level": "advanced",
        "prompt": "Por que elevar a luminosidade não garante aumento indefinido da fotossíntese?",
        "hint": "Outras condições tornam-se limitantes.",
        "solution": "Água, CO₂, temperatura e processos metabólicos limitam a taxa. Um único fator abundante não elimina as demais restrições."
      }
    ],
    "everyday": {
      "context": "Uma aula compara uma planta que recebe luz com microrganismos que podem produzir matéria orgânica usando energia de reações químicas, mesmo num ambiente sem iluminação.",
      "question": "Por que nem todo organismo autotrófico precisa de luz e que elemento ambos podem incorporar à matéria orgânica?",
      "answer": "Plantas fotossintetizantes captam luz, enquanto quimioautótrofos podem aproveitar energia de oxidações inorgânicas. Em ambos os casos, carbono inorgânico pode ser fixado em compostos orgânicos.",
      "connections": [
        {
          "subject": "Ciências",
          "topic": "Cadeias e teias alimentares",
          "reason": "A produção primária por organismos autotróficos sustenta relações de alimentação em muitas comunidades."
        },
        {
          "subject": "Ciências",
          "topic": "Ciclos da água e do carbono",
          "reason": "A incorporação de carbono por produtores participa do ciclo do carbono, e a água integra as reações da fotossíntese."
        }
      ]
    }
  },
  {
    "subject": "História",
    "topic": "Primeira República brasileira",
    "objective": "Examinar instituições, economia e conflitos da Primeira República (1889–1930), relacionando voto, coronelismo, oligarquias e contestação social sem apagar diferenças regionais.",
    "sections": [
      {
        "title": "República proclamada e participação limitada",
        "explanation": "A República brasileira foi proclamada em 15 de novembro de 1889, encerrando a monarquia. A Constituição de 1891 instituiu regime republicano federativo e presidencialista, com transformações nas relações entre União e estados. Isso não significou sufrágio universal: mulheres não tinham direito de votar nas eleições nacionais, analfabetos foram excluídos e a participação política era limitada por outras condições e práticas. A fase de 1889 a 1930 é chamada Primeira República, embora não tenha sido politicamente homogênea. O novo arranjo favoreceu disputas entre elites regionais e reorganizou relações de poder, sem eliminar desigualdades herdadas do Império. Ao avaliar cidadania, diferencie mudança na forma de governo, regras eleitorais e possibilidade concreta de participação de diferentes grupos sociais.",
        "example": "Um comunicado de 1891 poderia anunciar uma Constituição republicana, mas isso não permitiria concluir que toda a população adulta passou a participar diretamente das eleições.",
        "pitfall": "Confundir proclamação da República com implantação imediata de eleições inclusivas ou supor que o período inteiro teve governos idênticos.",
        "steps": [
          "Identifique 1889 como mudança institucional e 1891 como novo marco constitucional.",
          "Compare direitos políticos formais e exclusões efetivas do eleitorado."
        ]
      },
      {
        "title": "Coronelismo, economia e acordos políticos",
        "explanation": "O coronelismo foi analisado historicamente como sistema de relações entre poderes locais, dependências sociais e estruturas políticas, especialmente em contextos rurais. Práticas como pressão sobre eleitores, controle de recursos e negociação de apoios ajudaram a sustentar determinados grupos. A expressão 'política do café com leite' é uma simplificação didática de arranjos e disputas entre oligarquias, principalmente ligadas a São Paulo e Minas Gerais, sem descrever toda sucessão presidencial como acordo automático entre apenas dois estados. A economia cafeeira teve grande importância, mas outras atividades regionais coexistiram. O voto aberto e mecanismos de pressão contribuíam para limitar autonomia eleitoral, porém experiências variavam por município. Compreender o sistema exige relacionar instituições, economia e dependências, evitando tratar toda a população como agente passivo.",
        "example": "Em um município hipotético, um grande proprietário condiciona oportunidades de trabalho ao apoio de determinado candidato. O exemplo ajuda a discutir coerção e poder local sem afirmar que ocorreu exatamente assim em todos os municípios.",
        "pitfall": "Interpretar 'café com leite' como lei constitucional ou considerar que coronelismo significa apenas a existência de um fazendeiro rico.",
        "steps": [
          "Relacione dependência local, votação e negociação entre níveis de poder.",
          "Diferencie expressões históricas simplificadoras de instituições e situações concretas."
        ]
      },
      {
        "title": "Revoltas, trabalho e crise do regime",
        "explanation": "A Primeira República foi marcada por diferentes mobilizações e conflitos. A Revolta da Vacina, em 1904, no Rio de Janeiro, ocorreu num contexto de reformas urbanas, medidas sanitárias autoritárias e tensões políticas; não deve ser descrita simplesmente como recusa geral à ciência. A Revolta da Chibata, em 1910, denunciou violência e castigos na Marinha. Greves operárias, incluindo as mobilizações de 1917, relacionaram-se a condições de trabalho e organização de trabalhadores. Movimento tenentista e disputas entre grupos políticos também marcaram os anos 1920. A ruptura de 1930 encerrou a Primeira República e abriu nova configuração de poder, sem equivaler a revolução social uniforme para toda a população. Estudar esses acontecimentos permite perceber disputas por direitos, participação e poder que não cabem na imagem de regime sem oposição.",
        "example": "Um estudante que pesquisa a greve geral de 1917 deve relacionar mobilização, reivindicações laborais e contexto urbano, em vez de deduzir que o Brasil inteiro parou exatamente da mesma forma.",
        "pitfall": "Atribuir todas as revoltas às mesmas causas ou apresentar a passagem de 1930 como solução automática de conflitos sociais.",
        "steps": [
          "Identifique quem participou de cada movimento e quais reivindicações apresentou.",
          "Compare as diferentes causas antes de relacioná-las à crise institucional de 1930."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em quais anos começou e terminou, convencionalmente, a Primeira República brasileira?",
        "hint": "Associe a Proclamação e a ruptura de 1930.",
        "solution": "O período é convencionalmente delimitado de 1889, Proclamação da República, a 1930, momento de ruptura do arranjo político e ascensão do novo governo."
      },
      {
        "level": "basic",
        "prompt": "A Constituição de 1891 instituiu voto universal para toda população adulta?",
        "hint": "Lembre-se de exclusões, como analfabetismo e gênero.",
        "solution": "Não. A participação eleitoral era limitada: mulheres não votavam nas eleições nacionais e analfabetos estavam excluídos, entre outras restrições."
      },
      {
        "level": "intermediate",
        "prompt": "Explique o coronelismo sem reduzi-lo à existência de um proprietário rural.",
        "hint": "Considere dependência social e poder político.",
        "solution": "Coronelismo envolvia relações de influência e negociação política local, dependência econômica e mecanismos de controle eleitoral, variando conforme o contexto."
      },
      {
        "level": "intermediate",
        "prompt": "Por que 'política do café com leite' não explica toda a sucessão presidencial?",
        "hint": "É uma síntese de disputas mais amplas.",
        "solution": "A expressão destaca articulações de elites, sobretudo paulistas e mineiras, mas outras regiões, grupos e conflitos também influenciaram escolhas políticas."
      },
      {
        "level": "advanced",
        "prompt": "Por que a Revolta da Vacina de 1904 não deve ser explicada apenas como oposição a vacinas?",
        "hint": "Considere reformas urbanas e formas de imposição estatal.",
        "solution": "O episódio envolveu medidas sanitárias coercitivas, reformas urbanas e tensões sociais e políticas. Reduzi-lo a rejeição à ciência elimina aspectos essenciais do contexto."
      },
      {
        "level": "advanced",
        "prompt": "Relacione greves de 1917 e a crise da Primeira República sem igualar os dois acontecimentos.",
        "hint": "Diferencie trabalhadores e conflitos políticos.",
        "solution": "As greves revelaram reivindicações e organização de trabalhadores num regime com tensões sociais. A crise de 1930 incluiu também disputas entre elites e militares, com causas e atores variados."
      }
    ],
    "everyday": {
      "context": "Durante uma visita a um museu, uma turma observa que o Brasil era república desde 1889, mas mulheres e pessoas analfabetas não participavam das eleições nacionais do período como os estudantes imaginavam.",
      "question": "Por que mudar de monarquia para república não significou automaticamente participação política universal?",
      "answer": "A Proclamação mudou a forma de governo, mas regras eleitorais e relações de poder continuaram restringindo participação. Direitos políticos dependem de instituições e lutas históricas.",
      "connections": [
        {
          "subject": "História",
          "topic": "Redemocratização e Constituição de 1988",
          "reason": "Comparar arranjos constitucionais ajuda a perceber mudanças de cidadania e participação entre períodos diferentes."
        },
        {
          "subject": "História",
          "topic": "Era Vargas",
          "reason": "A ruptura de 1930 abriu outro período de organização estatal e trabalhista, sem apagar conflitos anteriores."
        }
      ]
    }
  },
  {
    "subject": "Geografia",
    "topic": "Urbanização brasileira",
    "objective": "Interpretar o processo histórico de urbanização do Brasil, suas relações com industrialização, migração e redes urbanas e desigualdades de infraestrutura.",
    "sections": [
      {
        "title": "Urbanização como mudança populacional e espacial",
        "explanation": "Urbanização envolve aumento da proporção de população residente em áreas classificadas como urbanas e transformações na organização de cidades e redes de serviços. No Brasil, ganhou força ao longo do século XX, em associação a industrialização, mudanças no campo, atividades econômicas e migrações internas. A definição estatística de área urbana depende de critérios administrativos e metodológicos do país; por isso, comparar porcentagens históricas exige observar fontes e classificações. Urbanização não significa que todas as cidades cresceram no mesmo ritmo nem que o campo desapareceu. A cidade reúne moradia, trabalho, transporte e serviços, e pode expandir-se fisicamente enquanto o acesso a oportunidades permanece desigual. Em vestibulares, é essencial diferenciar crescimento absoluto de população urbana, proporção urbana e expansão territorial da mancha construída.",
        "example": "Um município pode ter população urbana aumentando de 20 mil para 30 mil pessoas, enquanto a população rural cai. Para dizer se houve aumento da proporção urbana, também precisamos da população total em cada data.",
        "pitfall": "Tratar toda urbanização como industrialização ou concluir que cidades passam a oferecer serviços de qualidade uniforme pelo simples crescimento populacional.",
        "steps": [
          "Distinga aumento numérico de moradores urbanos de aumento da proporção urbana.",
          "Identifique fatores econômicos e migratórios sem declarar causa única."
        ]
      },
      {
        "title": "Industrialização, migrações e redes de cidades",
        "explanation": "O crescimento de atividades industriais e de serviços atraiu trabalhadores para centros urbanos, junto a mudanças na estrutura agrária e à busca por oportunidades. Correntes migratórias tiveram diferentes origens e destinos; não se deve afirmar que toda migração no século XX foi do Nordeste para São Paulo, nem que apenas fatores econômicos atuaram. Cidades possuem conexões de comércio, serviços, trabalho e transportes, formando redes urbanas com diferentes graus de centralidade. Uma pessoa pode morar num município e deslocar-se diariamente para trabalhar ou estudar em outro, situação de mobilidade pendular que não implica mudança definitiva de residência. A metropolização envolve integração de atividades e infraestrutura em grandes aglomerações, com limites institucionais variados. Analisar mapas ajuda a entender funções e fluxos, sem equiparar tamanho populacional a qualidade de vida.",
        "example": "Uma estudante mora numa cidade e viaja diariamente à cidade vizinha para estudar. O deslocamento é pendular, diferente de migração permanente; a relação revela conexões numa rede urbana.",
        "pitfall": "Chamar qualquer viagem diária de migração ou supor que toda cidade grande possua melhores oportunidades para todos.",
        "steps": [
          "Classifique fluxos conforme duração e mudança ou não da residência.",
          "Observe serviços e conexões entre municípios para interpretar rede urbana."
        ]
      },
      {
        "title": "Infraestrutura, desigualdade e planejamento",
        "explanation": "Urbanização rápida, políticas habitacionais insuficientes e desigualdade de renda podem contribuir para áreas com diferentes níveis de acesso a saneamento, transporte e moradia segura. Isso não significa que periferias sejam homogêneas ou que seus moradores sejam responsáveis por deficiências de infraestrutura. A segregação socioespacial descreve padrões de distribuição desigual de grupos e serviços, enquanto a urbanização é processo histórico mais amplo de crescimento e organização urbana. A impermeabilização do solo e a ocupação de áreas de risco podem agravar problemas de drenagem, dependendo de relevo e chuvas. Propostas de planejamento devem relacionar diagnóstico, órgão responsável e efeito esperado, sem prometer que uma obra isolada resolverá todos os problemas. Para avaliar uma política, compare acesso efetivo a serviços, e não apenas presença de equipamentos num mapa.",
        "example": "Uma biblioteca está a 3 km de dois bairros, mas apenas um possui linha de ônibus frequente. A distância é igual, porém o acesso real difere por rede e tempo de deslocamento.",
        "pitfall": "Confundir crescimento urbano com melhoria social automática ou responsabilizar moradores por ausência histórica de serviços públicos.",
        "steps": [
          "Relacione infraestrutura e ocupação do território a problemas específicos.",
          "Proponha soluções proporcionais aos dados disponíveis e à competência dos agentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que significa urbanização em termos de população e território?",
        "hint": "Considere proporção urbana e organização das cidades.",
        "solution": "Urbanização envolve crescimento da participação da população em áreas urbanas e transformações das cidades. O conceito não é sinônimo de industrialização."
      },
      {
        "level": "basic",
        "prompt": "O deslocamento diário para estudar em outra cidade é necessariamente migração?",
        "hint": "A pessoa muda de residência permanentemente?",
        "solution": "Não. Quando a pessoa continua morando na origem e se desloca periodicamente, trata-se de mobilidade pendular, distinta de migração com mudança de residência."
      },
      {
        "level": "intermediate",
        "prompt": "Por que crescimento absoluto da população urbana não comprova sozinho aumento de sua proporção?",
        "hint": "É preciso conhecer o total da população.",
        "solution": "A proporção depende da população urbana dividida pela população total. Ambas podem crescer em ritmos diferentes, alterando ou não a porcentagem urbana."
      },
      {
        "level": "intermediate",
        "prompt": "Cite duas relações históricas importantes para entender a urbanização brasileira no século XX.",
        "hint": "Pense em produção e fluxos populacionais.",
        "solution": "Industrialização e expansão de serviços, além de migrações internas e transformações no campo, contribuíram para o crescimento e reorganização de centros urbanos."
      },
      {
        "level": "advanced",
        "prompt": "Duas áreas têm mesma distância até hospital, mas tempos diferentes de acesso. O que investigar?",
        "hint": "Olhe transporte e acessibilidade, não só quilômetros.",
        "solution": "É necessário avaliar frequência, preço, rotas, condições viárias, acessibilidade e horários. Proximidade geográfica não garante acesso efetivo igual."
      },
      {
        "level": "advanced",
        "prompt": "Explique por que crescimento urbano acelerado não causa sempre o mesmo problema em toda cidade.",
        "hint": "Considere relevo, planejamento e infraestrutura.",
        "solution": "Impactos dependem de políticas públicas, organização territorial, renda, relevo e infraestrutura. Não existe uma consequência idêntica e inevitável para todos os municípios."
      }
    ],
    "everyday": {
      "context": "Dois bairros de um município estão na mesma distância em linha reta da escola. Um tem transporte frequente e outro apresenta longas esperas, embora a cidade tenha crescido nas últimas décadas.",
      "question": "Por que o crescimento urbano não significa necessariamente que todos os estudantes passaram a ter igual acesso aos serviços?",
      "answer": "Urbanização altera população e organização espacial, mas transportes, equipamentos e políticas podem distribuir oportunidades de forma desigual. Distância não é sinônimo de acesso efetivo.",
      "connections": [
        {
          "subject": "Geografia",
          "topic": "Segregação socioespacial",
          "reason": "A distribuição desigual de transportes, moradia e serviços ajuda a analisar os efeitos sociais de diferentes padrões de urbanização."
        },
        {
          "subject": "História",
          "topic": "Revolução Industrial",
          "reason": "Mudanças na produção e no trabalho contribuíram para transformações urbanas, em ritmos distintos nos diferentes países."
        }
      ]
    }
  },
  {
    "subject": "Sociologia",
    "topic": "Marx: classes sociais e conflito",
    "objective": "Analisar classes sociais e relações de produção em Marx, relacionando propriedade dos meios de produção, trabalho assalariado, conflito e formas de alienação.",
    "sections": [
      {
        "title": "Classes sociais e relações de produção",
        "explanation": "Na análise de Karl Marx, classes sociais são compreendidas pela posição dos grupos nas relações de produção, e não apenas por faixas de renda. No capitalismo, a burguesia se caracteriza, no modelo teórico, pela propriedade dos meios de produção, enquanto o proletariado depende da venda de sua força de trabalho. Empresas e trabalhadores reais apresentam configurações complexas, com autônomos, trabalhadores do setor público, cooperativas e outras posições; a tipologia ajuda a examinar relações estruturais, não a rotular qualquer pessoa pela aparência. Trabalho, capital, propriedade e controle de decisões produtivas são elementos centrais. A relação entre classes pode incluir cooperação no processo produtivo e conflito de interesses sobre remuneração, condições de trabalho e apropriação de resultados. Compreender o conceito exige olhar instituições e organização econômica, sem reduzir todas as identidades humanas à classe.",
        "example": "Numa fábrica hipotética, trabalhadores recebem salários por sua atividade, enquanto proprietários decidem investimentos e retêm resultados financeiros conforme contratos e leis. O exemplo permite distinguir trabalho assalariado de propriedade dos meios de produção.",
        "pitfall": "Definir classe marxiana apenas pela quantidade de dinheiro no banco ou supor que cada trabalhador possui exatamente a mesma condição.",
        "steps": [
          "Identifique quem controla os meios de produção e quem depende de vender força de trabalho.",
          "Diferencie posição estrutural na produção de renda individual ou estilo de vida."
        ]
      },
      {
        "title": "Valor, exploração e mais-valia como conceitos teóricos",
        "explanation": "Marx desenvolveu uma crítica da produção capitalista utilizando conceitos como mercadoria, trabalho socialmente necessário, valor e mais-valia. Em sua teoria, a força de trabalho é adquirida mediante salário, e o processo produtivo pode gerar valor superior ao valor pago por essa força de trabalho. A diferença teórica está associada à mais-valia e constitui ponto central de sua explicação da exploração capitalista. Não é correto identificar mais-valia simplesmente com o lucro contábil de qualquer empresa: preços, custos, circulação e categorias econômicas precisam ser distinguidos. Tampouco se obtém uma medida rigorosa de exploração dividindo faturamento pelo salário de uma pessoa. A teoria marxiana é uma perspectiva analítica influente, debatida e reinterpretada, que deve ser apresentada como teoria, não como lei econômica aceita sem controvérsia por todas as escolas.",
        "example": "Uma loja vende produtos cuja receita supera parte das despesas com salários, mas esse fato isolado não permite calcular 'mais-valia' diretamente. Seria necessário distinguir receita, custos, trabalho e as categorias da teoria de Marx.",
        "pitfall": "Confundir faturamento com valor criado no trabalho ou tratar toda diferença entre preço de venda e salário como cálculo suficiente da mais-valia.",
        "steps": [
          "Separe força de trabalho, processo produtivo e resultados econômicos na exposição da teoria.",
          "Não confunda categorias de Marx com indicadores contábeis simples e sem contexto."
        ]
      },
      {
        "title": "Alienação, conflitos e transformações no trabalho",
        "explanation": "A alienação em Marx envolve relações pelas quais o trabalhador pode perder controle sobre o produto, o processo e sentidos de sua atividade em determinadas formas de organização do trabalho. O conceito não significa apenas estar entediado ou distraído, embora experiências de falta de autonomia possam ajudar a introduzir o problema. A divisão técnica de tarefas, a propriedade e a organização hierárquica influenciam condições concretas, mas seus efeitos variam historicamente. Sindicatos, legislação, negociação coletiva, automação e plataformas digitais modificam conflitos e possibilidades de ação, sem eliminar necessariamente diferenças de poder. Uma leitura sociológica cuidadosa pergunta quem decide, quais condições existem e quais interesses estão em disputa, evitando atribuir motivação única a todo empregador ou empregado. O conceito pode ser comparado à divisão do trabalho em Durkheim, reconhecendo questões teóricas diferentes.",
        "example": "Numa tarefa fictícia, uma pessoa repete uma pequena etapa de produção sem acompanhar o resultado completo nem participar de decisões. Isso pode ilustrar dimensões da alienação, mas não prova que todas as ocupações industriais funcionem desse modo.",
        "pitfall": "Usar alienação apenas como sinônimo de falta de concentração ou afirmar que qualquer atividade repetitiva é necessariamente alienada no mesmo sentido.",
        "steps": [
          "Examine autonomia, relação com o produto e controle do processo de trabalho.",
          "Compare análises de conflito com análises de interdependência, sem tratá-las como equivalentes."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Na teoria de Marx, o que distingue burguesia e proletariado?",
        "hint": "Considere propriedade dos meios de produção e venda da força de trabalho.",
        "solution": "Na tipologia marxiana do capitalismo, burguesia controla meios de produção e proletariado depende principalmente da venda de força de trabalho; não se trata apenas de diferença de renda."
      },
      {
        "level": "basic",
        "prompt": "Por que classe social em Marx não é simplesmente uma faixa de salário?",
        "hint": "A posição na produção inclui propriedade e controle.",
        "solution": "O conceito se relaciona às relações de produção, como propriedade dos meios e dependência do salário. Pessoas com rendas próximas podem ocupar posições estruturais distintas."
      },
      {
        "level": "intermediate",
        "prompt": "Explique mais-valia sem confundi-la com o lucro contábil.",
        "hint": "Considere valor produzido e valor da força de trabalho.",
        "solution": "Na crítica de Marx, mais-valia é conceito ligado à diferença entre valor criado pelo trabalho e valor da força de trabalho. Não é automaticamente o lucro informado num balanço."
      },
      {
        "level": "intermediate",
        "prompt": "Como a divisão das tarefas pode relacionar-se à alienação segundo Marx?",
        "hint": "Considere controle sobre processo e produto.",
        "solution": "Quando o trabalhador tem pouco controle sobre produto, decisões e processo, podem aparecer dimensões da alienação descrita por Marx. A análise depende de condições concretas."
      },
      {
        "level": "advanced",
        "prompt": "Por que faturamento de uma empresa menos salários não calcula rigorosamente mais-valia?",
        "hint": "Distinga receita, custos e conceitos teóricos.",
        "solution": "O faturamento incorpora transações e preços e não equivale diretamente a valor produzido. A teoria requer categorias específicas e não se resume à subtração de despesas salariais."
      },
      {
        "level": "advanced",
        "prompt": "Compare conflito de classes em Marx com interdependência do trabalho em Durkheim.",
        "hint": "São enfoques diferentes sobre relações sociais.",
        "solution": "Marx destaca relações de propriedade e conflitos de interesse na produção; Durkheim examina divisão de funções e formas de solidariedade. Um enfoque não reduz o outro a erro."
      }
    ],
    "everyday": {
      "context": "Um grupo estuda uma plataforma de entregas. Algumas pessoas controlam o serviço e definem regras, enquanto outras realizam entregas e recebem pagamentos variáveis. Um colega diz que a diferença é apenas de salários.",
      "question": "Por que uma análise marxiana pergunta também quem controla os meios e as condições de produção?",
      "answer": "Porque classe e conflito, na teoria de Marx, envolvem propriedade, controle e dependência do trabalho, além da remuneração. O exemplo não autoriza classificar toda pessoa da plataforma de modo automático.",
      "connections": [
        {
          "subject": "Sociologia",
          "topic": "Trabalho e divisão social",
          "reason": "O trabalho pode ser analisado pela distribuição de funções e também por propriedade, autonomia e relações de poder."
        },
        {
          "subject": "História",
          "topic": "Revolução Industrial",
          "reason": "A industrialização e a expansão do trabalho assalariado ajudam a contextualizar o desenvolvimento histórico da crítica de Marx."
        }
      ]
    }
  },
  {
    "subject": "Filosofia",
    "topic": "Contratualismo: Hobbes, Locke e Rousseau",
    "objective": "Comparar os modelos filosóficos de contrato social em Hobbes, Locke e Rousseau, distinguindo estado de natureza, legitimidade política e limites de poder.",
    "sections": [
      {
        "title": "Contrato social: uma hipótese sobre legitimidade",
        "explanation": "Teorias contratualistas procuram justificar a formação e a legitimidade da autoridade política a partir de uma situação concebida sem governo civil. O chamado estado de natureza é uma construção filosófica distinta em cada autor, não um período histórico documentado de modo idêntico. Thomas Hobbes, John Locke e Jean-Jacques Rousseau utilizaram essa hipótese para discutir liberdade, segurança, direitos e obrigação política, chegando a modelos diferentes. Não se deve afirmar que os três defenderam a mesma forma de Estado ou que uma sociedade real assinou literalmente um contrato único. A comparação exige identificar que problema cada autor tenta resolver e qual autoridade considera legítima. A teoria oferece instrumentos para avaliar decisões políticas, mas não substitui história institucional nem a leitura de leis existentes.",
        "example": "Numa escola que precisa estabelecer regras de uso comum, os estudantes podem debater por que aceitar limites individuais. A analogia introduz legitimidade e acordo, mas uma sala de aula não reproduz literalmente o contrato social dos filósofos.",
        "pitfall": "Tratar estado de natureza como relato histórico comprovado ou afirmar que todos os contratualistas chegaram às mesmas conclusões.",
        "steps": [
          "Separe o problema de convivência da solução política defendida por cada autor.",
          "Compare as hipóteses filosóficas sem transformá-las em fatos arqueológicos."
        ]
      },
      {
        "title": "Hobbes e Locke: segurança e limites do governo",
        "explanation": "Para Hobbes, no estado de natureza sem autoridade comum eficaz, a insegurança e o conflito são riscos centrais. A instituição de poder soberano forte é proposta como saída para garantir paz, embora a discussão sobre obrigações e autodefesa seja mais complexa do que uma fórmula de obediência irrestrita. Locke desenvolve outra concepção: indivíduos possuem direitos naturais, com destaque para vida, liberdade e propriedade, e o governo civil deve protegê-los. Quando a autoridade viola sistematicamente os fins para os quais foi constituída, Locke admite resistência sob condições de sua teoria. Isso não permite atribuir a ambos defesa do mesmo absolutismo nem considerar Locke idêntico às democracias constitucionais atuais. São propostas formuladas em contextos históricos e políticos diferentes, que exigem análise de seus argumentos.",
        "example": "Se uma autoridade cria regra para reduzir conflitos, Hobbes favorece pensar a necessidade de poder comum eficaz; Locke leva a perguntar se a regra protege direitos e se o governo permanece limitado por sua finalidade.",
        "pitfall": "Resumir Hobbes como defesa de violência e Locke como ausência de Estado, apagando a estrutura de seus modelos.",
        "steps": [
          "Identifique qual problema a autoridade soberana enfrenta na teoria de Hobbes.",
          "Em Locke, examine o papel dos direitos naturais e dos limites de legitimidade do governo."
        ]
      },
      {
        "title": "Rousseau, vontade geral e participação",
        "explanation": "Rousseau desenvolve uma crítica às desigualdades e propõe pensar associação política em que cidadãos, como corpo coletivo, participem da elaboração de regras legítimas. No Contrato Social, a soberania está ligada ao povo e à vontade geral, conceito que não deve ser confundido automaticamente com a soma de preferências particulares ou com a opinião de qualquer governante que diga representá-la. Sua teoria exige distinguir interesse comum, leis gerais e facções ou interesses privados. Rousseau não oferece simplesmente a mesma solução que Hobbes ou Locke; as diferenças aparecem no sentido de liberdade e na origem da autoridade legítima. O debate contemporâneo pode usar essas categorias para examinar participação e direitos, mas instituições atuais não são cópias perfeitas de nenhum desses modelos. É importante contextualizar também tensões e limites de cada teoria.",
        "example": "Em decisão sobre regras gerais de uma comunidade, a pergunta inspirada em Rousseau é se o procedimento e o conteúdo da lei podem expressar interesse comum, e não apenas benefício de um grupo influente.",
        "pitfall": "Confundir vontade geral com opinião de maioria momentânea ou supor que o governante pode alegá-la sem qualquer participação e limite.",
        "steps": [
          "Distinga interesse comum de soma de interesses particulares.",
          "Compare soberania popular em Rousseau com os modelos de autoridade de Hobbes e Locke."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O estado de natureza é um fato histórico idêntico nos três contratualistas?",
        "hint": "Pense em experimento filosófico, não relatório histórico.",
        "solution": "Não. É uma construção teórica usada de modos diferentes para discutir legitimidade política, direitos e autoridade."
      },
      {
        "level": "basic",
        "prompt": "Qual problema central Hobbes procura enfrentar ao justificar o Estado?",
        "hint": "Considere insegurança e ausência de autoridade comum.",
        "solution": "Hobbes destaca riscos de conflito e insegurança na ausência de poder comum eficaz; o soberano é concebido como forma de garantir paz."
      },
      {
        "level": "intermediate",
        "prompt": "Qual é o papel dos direitos naturais na teoria política de Locke?",
        "hint": "Lembre vida, liberdade e propriedade.",
        "solution": "Em Locke, a autoridade civil deve proteger direitos naturais e tem legitimidade vinculada a esse objetivo, admitindo-se resistência sob condições de violação."
      },
      {
        "level": "intermediate",
        "prompt": "Por que vontade geral em Rousseau não é mera soma de gostos individuais?",
        "hint": "Diferencie interesse comum e preferências particulares.",
        "solution": "A vontade geral é conceito relativo ao interesse comum e à soberania popular; não equivale automaticamente à soma dos desejos privados de cada cidadão."
      },
      {
        "level": "advanced",
        "prompt": "Compare o papel do soberano em Hobbes e os limites do governo em Locke.",
        "hint": "Analise segurança e proteção de direitos.",
        "solution": "Hobbes enfatiza poder comum capaz de manter paz; Locke subordina governo à proteção dos direitos naturais e admite contestação de abusos conforme sua teoria."
      },
      {
        "level": "advanced",
        "prompt": "Por que não é correto dizer que as democracias atuais copiam integralmente Rousseau?",
        "hint": "Instituições históricas possuem outras influências.",
        "solution": "O modelo de soberania e vontade geral de Rousseau influencia debates, mas democracias atuais combinam instituições e tradições distintas, com procedimentos não idênticos ao seu projeto."
      }
    ],
    "everyday": {
      "context": "Uma escola discute novas regras para uso compartilhado de espaços. Alguns estudantes priorizam autoridade para evitar conflitos; outros exigem garantias de direitos e participação nas decisões.",
      "question": "Como os modelos de Hobbes, Locke e Rousseau orientariam perguntas diferentes sobre essas regras?",
      "answer": "Hobbes destaca segurança e autoridade comum; Locke, proteção dos direitos e limites do governo; Rousseau, soberania coletiva e interesse comum. Os modelos não devem ser confundidos com regras escolares literais.",
      "connections": [
        {
          "subject": "Filosofia",
          "topic": "Argumentação e falácias",
          "reason": "Comparar as premissas dos autores exige examinar se cada conclusão sobre autoridade decorre do modelo apresentado."
        },
        {
          "subject": "História",
          "topic": "Redemocratização e Constituição de 1988",
          "reason": "A reflexão sobre legitimidade e direitos pode ser relacionada à organização constitucional, sem igualar teorias clássicas a instituições brasileiras atuais."
        }
      ]
    }
  },
  {
    "subject": "Português",
    "topic": "Variação regional, social e histórica",
    "objective": "Reconhecer variedades linguísticas e adequação ao contexto, diferenciando diferenças de uso, norma-padrão e preconceito linguístico.",
    "sections": [
      {
        "title": "A língua varia conforme pessoas e situações",
        "explanation": "Uma língua não é usada de maneira idêntica por todas as pessoas. Há variação regional, relacionada ao espaço geográfico; social, ligada a redes de convivência e condições socioculturais; histórica, associada a transformações ao longo do tempo; e situacional, vinculada a interlocutores e gêneros. Vocabulário, pronúncia e construções podem mudar sem impedir comunicação entre falantes. Uma palavra cotidiana de determinada região pode ter equivalente em outra, e uma expressão familiar pode não ser esperada num documento jurídico. Diferença linguística não indica inferioridade intelectual nem deficiência moral. Para interpretar um enunciado, pergunte quem fala, com quem, em qual situação, para qual finalidade e por qual meio. Esse procedimento permite estudar língua como prática social, não apenas como coleção de erros a corrigir.",
        "example": "Em regiões distintas do Brasil, pessoas podem empregar 'mandioca', 'aipim' ou 'macaxeira' para denominar o mesmo alimento em determinados contextos; a escolha lexical revela repertórios, não inteligência.",
        "pitfall": "Chamar um sotaque regional de incapacidade de falar ou presumir que todos os moradores de uma região usam exatamente as mesmas palavras.",
        "steps": [
          "Identifique interlocutores, situação e finalidade de uma fala antes de julgá-la.",
          "Separe variação lexical, pronúncia e organização das frases."
        ]
      },
      {
        "title": "Norma-padrão, convenções e adequação",
        "explanation": "A norma-padrão é um conjunto de convenções codificadas para determinados usos formais, especialmente na escrita, mas não representa integralmente o português falado por uma pessoa ou grupo. Aprender a utilizá-la pode ampliar oportunidades em gêneros como redações de vestibular, relatórios e requerimentos. Isso não exige desqualificar variedades populares ou expressões informais: há adequação ou inadequação ao contexto e há convenções exigidas por certos exames. Um diálogo por aplicativo, uma apresentação acadêmica e uma crônica podem empregar registros diferentes por escolhas comunicativas legítimas. Ao revisar um texto escolar, vale perguntar se a construção atende à situação e às regras da tarefa, explicando alterações sem tratar a variedade habitual do aluno como inferior. É necessário distinguir norma formal de padrões reais de uso, que também variam historicamente.",
        "example": "Numa mensagem a um amigo, 'tô chegando' pode ser adequado; num requerimento administrativo, 'estou a caminho' pode corresponder melhor ao registro esperado. A diferença está na finalidade comunicativa.",
        "pitfall": "Confundir norma-padrão com único modo legítimo de falar e usar correção escolar para discriminar sotaques ou classes sociais.",
        "steps": [
          "Determine se a situação requer registro informal, semiformal ou convenções de escrita formal.",
          "Revise a adequação ao gênero sem equiparar uma variedade a inferioridade humana."
        ]
      },
      {
        "title": "Mudança histórica e combate ao preconceito",
        "explanation": "Línguas mudam com contatos culturais, tecnologia, migração e transformações sociais. Palavras antigas podem ganhar novos sentidos; neologismos surgem e expressões antes frequentes podem cair em desuso. A mudança não significa necessariamente empobrecimento: é característica de sistemas vivos de comunicação. O preconceito linguístico ocorre quando modos de falar são tratados como sinais de menor valor das pessoas ou de certos grupos, ignorando condições históricas e sociais do uso. Em debates públicos, é importante diferenciar a análise de uma frase num contexto formal da desqualificação do falante. Nenhuma regra escolar isolada permite concluir caráter, competência profissional ou origem exata de uma pessoa. No vestibular, reconhecer variedades exige interpretar situações e perceber que textos literários podem representar falas diversas como recurso de construção de personagens.",
        "example": "Um anúncio antigo pode empregar palavras e grafias que hoje parecem incomuns. A comparação com anúncios atuais informa mudanças linguísticas e culturais, não prova que falantes de uma época eram menos competentes.",
        "pitfall": "Supor que toda mudança na língua é corrupção ou inferir escolaridade individual somente pelo modo como uma pessoa se expressa.",
        "steps": [
          "Compare exemplos históricos considerando a época e o meio em que circulavam.",
          "Ao identificar variação, evite transformá-la em estereótipo sobre um grupo social."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O uso de 'aipim', 'mandioca' e 'macaxeira' exemplifica qual fenômeno?",
        "hint": "Considere diferentes repertórios regionais.",
        "solution": "É exemplo de variação lexical regional em determinados contextos. As formas não tornam uma pessoa mais competente que outra."
      },
      {
        "level": "basic",
        "prompt": "Por que diferentes sotaques não indicam níveis diferentes de inteligência?",
        "hint": "Língua e valor pessoal não são a mesma coisa.",
        "solution": "Sotaques são formas de variação fonética social e histórica. Não fornecem medida de inteligência nem justificam hierarquizar falantes."
      },
      {
        "level": "intermediate",
        "prompt": "Explique a diferença entre fala informal e norma-padrão num requerimento oficial.",
        "hint": "Considere gênero e finalidade da escrita.",
        "solution": "Um requerimento costuma exigir convenções formais, enquanto a fala cotidiana pode ser apropriada em interações informais. Adequação depende da situação."
      },
      {
        "level": "intermediate",
        "prompt": "Uma crônica reproduz fala regional. Isso é necessariamente erro do escritor?",
        "hint": "Considere caracterização e efeito expressivo.",
        "solution": "Não. A variedade pode ser recurso literário para representar vozes e situações. Sua função deve ser analisada no texto, sem corrigir automaticamente toda diferença."
      },
      {
        "level": "advanced",
        "prompt": "Por que corrigir uma redação formal não autoriza afirmar que a fala cotidiana do aluno é inferior?",
        "hint": "Separe convenção de julgamento sobre pessoas.",
        "solution": "Uma avaliação verifica adequação a normas do gênero exigido. Essa tarefa não estabelece inferioridade da variedade usada em outras situações."
      },
      {
        "level": "advanced",
        "prompt": "Uma palavra antiga desapareceu do uso comum. Isso prova que a língua piorou?",
        "hint": "Mudança e perda de qualidade não são equivalentes.",
        "solution": "Não. Variações de frequência e sentido fazem parte da mudança histórica; avaliar qualidade exigiria critério específico, não mera comparação nostálgica."
      }
    ],
    "everyday": {
      "context": "Uma escola recebe duas versões de um aviso: uma mensagem entre colegas usa 'tô chegando' e um comunicado oficial usa 'estou a caminho'. Alguém diz que a primeira forma prova falta de inteligência.",
      "question": "Como explicar a diferença de registro sem tratar quem fala de forma informal como menos capaz?",
      "answer": "As duas expressões podem cumprir funções em contextos diferentes. A norma-padrão atende a convenções de escrita formal, enquanto a forma informal pode ser adequada na conversa cotidiana; nenhuma mede inteligência.",
      "connections": [
        {
          "subject": "Português",
          "topic": "Coesão referencial",
          "reason": "A clareza de quem ou do que se fala também depende de escolhas linguísticas adequadas ao gênero e aos interlocutores."
        },
        {
          "subject": "Literatura",
          "topic": "Narrador e foco narrativo",
          "reason": "Narradores e personagens podem empregar registros diferentes para construir perspectiva, voz e contexto social."
        }
      ]
    }
  },
  {
    "subject": "Literatura",
    "topic": "Naturalismo brasileiro",
    "objective": "Identificar características do Naturalismo na literatura brasileira, relacionando narrador, meio social e explicações científicas de época sem validar determinismos pseudocientíficos.",
    "sections": [
      {
        "title": "Naturalismo e contexto do século XIX",
        "explanation": "O Naturalismo brasileiro costuma ser associado à publicação de O Cortiço, de Aluísio Azevedo, em 1890, entre outras obras da época. O movimento relaciona-se a debates científicos e sociais do século XIX e costuma enfatizar condições de vida, conflitos coletivos e influências atribuídas ao meio, à hereditariedade e a relações materiais sobre personagens. Essas ideias aparecem em construções ficcionais e não devem ser aceitas automaticamente como verdades científicas contemporâneas. Naturalismo e Realismo possuem proximidades, incluindo crítica social e atenção a comportamentos, mas não formam conjuntos perfeitamente separados. Uma obra pode empregar narrador observador, descrição minuciosa e personagens em contextos de desigualdade, construindo determinados efeitos de interpretação. Ao ler um trecho, identifique procedimentos literários concretos antes de classificar a escola.",
        "example": "Um romance imaginário descreve condições de moradia e relações entre moradores para construir retrato coletivo. A descrição pode sugerir influência do ambiente, mas permanece escolha artística do autor.",
        "pitfall": "Afirmar que Naturalismo é ciência comprovada ou que uma obra se torna naturalista apenas por apresentar pessoas em situação de pobreza.",
        "steps": [
          "Observe o papel da descrição do meio e da coletividade na narrativa.",
          "Contextualize as ideias científicas do século XIX sem tratá-las como conclusões atuais."
        ]
      },
      {
        "title": "Meio, hereditariedade e determinismo como ideias literárias",
        "explanation": "Parte da ficção naturalista explorou a hipótese de que comportamentos seriam fortemente determinados por ambiente, herança biológica e condições sociais. Essas representações podem revelar como escritores de seu tempo dialogavam com correntes como o positivismo e discursos cientificistas. Entretanto, atribuir automaticamente características morais ou intelectuais a herança, raça ou grupo social constitui generalização inadequada e pode reproduzir teorias discriminatórias historicamente difundidas. O leitor deve distinguir como a obra representa pessoas daquilo que estudos científicos atuais sustentam. Em análise literária, a referência a determinismo pode ser pista de escola estética, mas não valida a explicação usada. Descrições do espaço e de corpos também podem ser criticadas quanto à perspectiva do narrador e a estereótipos.",
        "example": "Um narrador fictício afirma que todos os moradores de determinada rua agem igualmente por causa do clima. A afirmação indica visão determinista do narrador, não uma lei científica sobre aquelas pessoas.",
        "pitfall": "Reproduzir determinismo racial ou social de narradores como se fosse explicação biologicamente válida para comportamentos humanos.",
        "steps": [
          "Identifique generalizações feitas pelo narrador e que evidências o texto oferece.",
          "Separe o contexto intelectual da obra de interpretações científicas atuais."
        ]
      },
      {
        "title": "Coletividade, narrador e crítica social",
        "explanation": "Uma narrativa naturalista pode construir ambientes densos com múltiplos personagens, fazendo do espaço e das relações de trabalho elementos relevantes do enredo. Em O Cortiço, a moradia coletiva tem papel central na organização narrativa, permitindo observar tensões econômicas, exploração e hierarquias representadas no século XIX. Não se deve ler o romance como levantamento estatístico de toda população brasileira ou tomar suas descrições como fatos sem mediação. O narrador seleciona imagens, enfatiza corpos e ações e organiza julgamentos que precisam ser analisados criticamente. A proximidade com o Realismo aparece na crítica a relações sociais, enquanto a ênfase em tendências deterministas e em certos procedimentos descritivos pode diferenciá-los para fins escolares. A análise mais produtiva pergunta como a linguagem constrói o problema e quais visões de sociedade estão em disputa.",
        "example": "Uma sequência de cenas inventadas mostra trabalhadores compartilhando moradia e enfrentando cobranças de aluguel. A organização do espaço pode apoiar leitura de desigualdade sem provar que cada pessoa da época viveu assim.",
        "pitfall": "Confundir narrador com autor ou reduzir a obra inteira à documentação fiel de um ambiente urbano.",
        "steps": [
          "Descreva o espaço narrativo e como ele afeta relações entre personagens.",
          "Compare recursos de crítica social no Naturalismo e no Realismo sem impor fronteiras rígidas."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual romance de 1890 é marco comum do Naturalismo brasileiro?",
        "hint": "Considere a obra de Aluísio Azevedo.",
        "solution": "O Cortiço, de Aluísio Azevedo, publicado em 1890, é referência importante do Naturalismo brasileiro, sem resumir sozinho toda a produção do movimento."
      },
      {
        "level": "basic",
        "prompt": "O que significa determinismo no debate sobre Naturalismo?",
        "hint": "Pense em explicações por meio e herança.",
        "solution": "É tendência de apresentar comportamentos como fortemente condicionados por fatores externos e hereditários. Na obra, essa visão deve ser analisada historicamente, não validada automaticamente."
      },
      {
        "level": "intermediate",
        "prompt": "Por que um narrador naturalista não é equivalente a um pesquisador neutro?",
        "hint": "O texto literário envolve escolhas de linguagem.",
        "solution": "A narração seleciona acontecimentos e descrições e constrói efeitos estéticos e julgamentos. Mesmo com aparência de observação, é representação ficcional."
      },
      {
        "level": "intermediate",
        "prompt": "Como o espaço coletivo pode participar do enredo em romances naturalistas?",
        "hint": "Considere relações de convivência e trabalho.",
        "solution": "A moradia e as condições materiais podem estruturar conflitos entre personagens e produzir crítica social, sem serem cenário puramente decorativo."
      },
      {
        "level": "advanced",
        "prompt": "Por que não se deve repetir explicações raciais deterministas de obras oitocentistas como ciência atual?",
        "hint": "São discursos historicamente situados e potencialmente discriminatórios.",
        "solution": "A representação literária revela ideias de época, mas não constitui evidência científica válida sobre grupos. A análise crítica separa contexto, estereótipos e conhecimento contemporâneo."
      },
      {
        "level": "advanced",
        "prompt": "Compare Naturalismo e Realismo sem afirmar que só um aborda desigualdade.",
        "hint": "Observe diferenças de procedimentos, não exclusividade de temas.",
        "solution": "Ambos podem abordar contradições sociais; textos naturalistas frequentemente intensificam atenção ao meio e a explicações deterministas, que devem ser contextualizadas criticamente."
      }
    ],
    "everyday": {
      "context": "Uma turma lê uma descrição de moradia coletiva num romance do século XIX. Um narrador atribui atitudes de personagens ao ambiente em que vivem, e colegas concluem que o livro comprova uma lei científica.",
      "question": "Como reconhecer uma perspectiva naturalista sem transformar a ficção e o determinismo da época em ciência atual?",
      "answer": "A obra pode usar descrição do meio e uma visão determinista para construir personagens. Isso é procedimento literário historicamente situado, não evidência científica universal.",
      "connections": [
        {
          "subject": "Literatura",
          "topic": "Realismo brasileiro",
          "reason": "Os dois movimentos compartilham interesse por crítica social, mas a ênfase naturalista em certas explicações deterministas requer análise específica."
        },
        {
          "subject": "Sociologia",
          "topic": "Marx: classes sociais e conflito",
          "reason": "Condições de trabalho e desigualdade podem ser estudadas estruturalmente sem reduzir pessoas a características biológicas supostas."
        }
      ]
    }
  },
  {
    "subject": "Redação",
    "topic": "Desenvolvimento e tópico frasal",
    "objective": "Planejar parágrafos argumentativos com tópico frasal, fundamentação e análise, mantendo relação explícita entre tese, evidências e conclusão.",
    "sections": [
      {
        "title": "Tópico frasal define a função do parágrafo",
        "explanation": "O tópico frasal é uma frase ou conjunto curto de enunciados que apresenta a ideia central de um parágrafo de desenvolvimento. Numa redação argumentativa, ele ajuda a mostrar qual aspecto da tese será defendido em seguida. Não precisa ser sempre a primeira frase em qualquer gênero, mas a abertura explícita costuma facilitar a leitura em textos escolares. Um tópico frasal não é apenas repetir o tema geral: deve enunciar uma relação discutível e específica. Se a tese afirma que barreiras de transporte e informação dificultam acesso a bibliotecas, um parágrafo pode desenvolver insuficiência de transporte e outro comunicação de horários. Assim, cada bloco contribui com função própria para a demonstração. O texto evita digressões quando cada informação apresentada pode ser vinculada à ideia principal do parágrafo.",
        "example": "Para a tese 'dificuldades de transporte limitam o acesso a serviços culturais', um tópico frasal possível é: 'A baixa frequência de ônibus pode tornar inviável a ida a bibliotecas em determinados horários'.",
        "pitfall": "Usar um tópico frasal tão amplo quanto 'a sociedade tem problemas', sem indicar qual relação o parágrafo irá demonstrar.",
        "steps": [
          "Identifique o argumento específico do parágrafo antes de escrever exemplos.",
          "Verifique se a ideia central ajuda realmente a sustentar a tese da introdução."
        ]
      },
      {
        "title": "Fundamentar não é apenas citar um dado ou autor",
        "explanation": "Um parágrafo argumentativo precisa desenvolver uma razão que justifique sua afirmação. Exemplos, conceitos e dados podem apoiar o raciocínio, mas devem ser pertinentes e contextualizados. Dizer que um filósofo famoso 'falou sobre sociedade' não demonstra relação específica com o problema; citar porcentagem sem fonte ou população definida também não fornece boa evidência. A fundamentação deve explicar o mecanismo pelo qual a causa apresentada produz ou agrava uma consequência, reconhecendo limites e condições. O leitor precisa entender por que o exemplo foi escolhido e como ele sustenta a afirmação. Uma organização útil é tópico frasal, explicação, evidência contextualizada e análise que retorna ao argumento; trata-se de orientação de escrita, não fórmula obrigatória para qualquer gênero. Não invente estatísticas para parecer convincente.",
        "example": "Frase inicial: 'A irregularidade de horários pode reduzir o acesso à biblioteca'. Fundamentação: 'Quem depende do último ônibus pode não conseguir voltar após o fechamento, mesmo que o serviço esteja disponível'.",
        "pitfall": "Acumular exemplos sem explicar sua relação com a tese ou apresentar estatística hipotética como resultado de pesquisa real.",
        "steps": [
          "Para cada evidência, explique de modo explícito que aspecto do argumento ela sustenta.",
          "Distinga um exemplo hipotético, que ilustra um mecanismo, de um dado empírico verificado."
        ]
      },
      {
        "title": "Coesão e fechamento do desenvolvimento",
        "explanation": "O desenvolvimento precisa mostrar progressão: uma frase esclarece a anterior ou adiciona fundamento novo. Conectivos de causa, consequência, oposição e exemplificação podem tornar essas relações visíveis, mas só funcionam quando o raciocínio já está coerente. O fechamento de parágrafo pode indicar a consequência do argumento ou ligá-lo à tese, sem repetir literalmente a primeira frase. Em uma redação sobre acesso a equipamentos públicos, não convém abrir tópico sobre transporte e terminar com discussão desconectada de redes sociais. A revisão pode perguntar: qual é a ideia deste parágrafo? Qual evidência foi apresentada? Foi analisada? O encerramento retorna à tese? Se duas frases introduzem argumentos incompatíveis, talvez devam ser reorganizadas em blocos diferentes. A clareza não depende de palavras difíceis, mas de encadeamento demonstrável entre afirmações e justificativas.",
        "example": "Após explicar a baixa frequência de ônibus, um fechamento coerente seria: 'Desse modo, a existência da biblioteca não basta para assegurar seu uso por quem enfrenta barreiras de mobilidade'.",
        "pitfall": "Achar que muitos conectivos substituem coerência ou iniciar um parágrafo sobre uma causa e terminar em assunto sem ligação.",
        "steps": [
          "Leia as frases em sequência e nomeie a função lógica de cada uma.",
          "Reescreva a conclusão local para retomar apenas a causa efetivamente analisada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que é tópico frasal num parágrafo de desenvolvimento?",
        "hint": "Procure a ideia central que será explicada.",
        "solution": "É o enunciado que apresenta o argumento principal do parágrafo, orientando a justificativa e a seleção de exemplos."
      },
      {
        "level": "basic",
        "prompt": "Por que 'a sociedade tem muitos problemas' é tópico frasal pouco útil?",
        "hint": "Falta recorte específico da tese.",
        "solution": "A frase é genérica e não indica qual causa ou relação será demonstrada. Um bom tópico frasal delimita a função do desenvolvimento."
      },
      {
        "level": "intermediate",
        "prompt": "Transforme 'transporte' em tópico frasal sobre acesso a bibliotecas.",
        "hint": "Declare uma relação causal plausível.",
        "solution": "Uma possibilidade é: 'A baixa frequência de transporte coletivo pode limitar o acesso de estudantes a bibliotecas públicas'. A frase pode ser fundamentada depois."
      },
      {
        "level": "intermediate",
        "prompt": "Por que citar uma pesquisa sem apresentar população e data pode enfraquecer o texto?",
        "hint": "Falta contexto para interpretar a informação.",
        "solution": "Sem identificar origem, público e período, o leitor não consegue avaliar alcance e pertinência dos números. A citação isolada não substitui análise."
      },
      {
        "level": "advanced",
        "prompt": "Um parágrafo afirma que transporte dificulta leitura, mas só desenvolve publicidade online. Qual a falha?",
        "hint": "Compare tópico inicial e justificativas.",
        "solution": "O parágrafo perde unidade argumentativa porque as explicações não demonstram o mecanismo indicado no tópico frasal. Deve retomar transporte ou criar bloco distinto."
      },
      {
        "level": "advanced",
        "prompt": "Crie fechamento coerente para parágrafo que explicou demora de ônibus até serviços culturais.",
        "hint": "Retome a implicação da barreira estudada.",
        "solution": "Uma conclusão possível é: 'Assim, ampliar equipamentos culturais sem considerar o deslocamento pode manter desigualdades de acesso'. Ela deriva da justificativa apresentada."
      }
    ],
    "everyday": {
      "context": "Um estudante escreve redação defendendo mais acesso a bibliotecas. O primeiro parágrafo fala de transporte, publicidade, internet e merenda sem esclarecer como essas ideias sustentam a tese.",
      "question": "Como o tópico frasal ajuda a escolher quais explicações pertencem ao parágrafo?",
      "answer": "O tópico frasal delimita o argumento; se o foco é transporte, as evidências devem explicar deslocamento e acesso. Outros aspectos podem formar novos parágrafos, se contribuírem para a tese.",
      "connections": [
        {
          "subject": "Redação",
          "topic": "Formulação de tese",
          "reason": "O desenvolvimento precisa decompor a posição central em argumentos específicos, sem substituir ou abandonar a tese."
        },
        {
          "subject": "Português",
          "topic": "Coesão sequencial e conectivos",
          "reason": "As relações entre explicação, exemplo e conclusão exigem progressão lógica, não apenas conectivos decorativos."
        }
      ]
    }
  },
  {
    "subject": "Inglês",
    "topic": "Voz passiva em inglês",
    "objective": "Interpretar voz ativa e passiva em inglês, formar estruturas com be e particípio e identificar quando o agente pode ser omitido sem alterar a informação essencial.",
    "sections": [
      {
        "title": "Quem pratica e quem recebe a ação",
        "explanation": "Na voz ativa, o sujeito costuma exercer o papel de agente em frases transitivas simples: 'The school published the notice'. Na voz passiva correspondente, o objeto da ativa torna-se sujeito gramatical: 'The notice was published by the school'. A estrutura básica é uma forma adequada do verbo 'be' seguida de past participle. O agente pode aparecer introduzido por 'by', mas nem sempre é necessário ou conhecido. A escolha de voz altera o foco informacional, sem mudar obrigatoriamente o acontecimento descrito. É preciso preservar tempo verbal: 'publishes' corresponde, no presente simples, a 'is published'; 'published' no passado corresponde a 'was published'. Nem todo verbo intransitivo admite passiva natural, porque não há objeto direto para assumir a posição de sujeito.",
        "example": "Ativa: 'Students clean the classroom'. Passiva: 'The classroom is cleaned by students'. O destaque passa do grupo que realiza a ação ao local que a recebe.",
        "pitfall": "Usar 'is clean' como equivalente universal de 'is cleaned', confundindo adjetivo de estado com estrutura passiva.",
        "steps": [
          "Identifique agente, verbo e objeto da frase ativa.",
          "Promova o objeto para sujeito e preserve o tempo com be + particípio."
        ]
      },
      {
        "title": "Presente, passado e futuro em construções passivas",
        "explanation": "A voz passiva combina um auxiliar adequado ao tempo e aspecto verbal com o particípio principal. No presente simples: 'The forms are checked'. No passado simples: 'The forms were checked'. No futuro com will: 'The forms will be checked'. No present perfect: 'The forms have been checked'. O particípio de verbos irregulares exige atenção: write→written, make→made, see→seen. Sujeito e auxiliar devem concordar: 'The report is published' e 'The reports are published'. Em negativas e perguntas, os auxiliares recebem a modificação: 'The result was not announced' e 'Was the result announced?'. Traduzir palavra por palavra pode esconder que a passiva é usada para dar centralidade ao procedimento ou ao objeto, como em relatórios e notícias.",
        "example": "Para 'Someone wrote the report yesterday', a versão passiva possível é 'The report was written yesterday'. 'Written' é particípio irregular e 'was' preserva passado simples.",
        "pitfall": "Escrever 'was wrote' em vez de 'was written' ou manter auxiliar no singular quando sujeito passivo é plural.",
        "steps": [
          "Selecione o auxiliar pelo tempo e número do sujeito passivo.",
          "Verifique o particípio principal, especialmente em verbos irregulares."
        ]
      },
      {
        "title": "Agente omitido e responsabilidade no texto",
        "explanation": "Em manchetes e textos científicos, o agente pode ser desconhecido, irrelevante para a finalidade ou deliberadamente omitido: 'The samples were analyzed' informa o procedimento, mas não quem o realizou. A omissão não prova fraude, embora possa dificultar responsabilização em certos contextos. Para interpretar criticamente, pergunte se o texto fornece fonte, método e autoria quando esses dados são necessários. Nem toda ocorrência de be + palavra terminada em -ed é uma passiva inequívoca: particípios também podem funcionar como adjetivos, e o contexto decide. A escolha estilística deve servir ao propósito: ativa pode deixar responsabilidades claras; passiva pode priorizar processo ou resultado. Em questões de vestibular, compare as informações mantidas e o que foi retirado ou deslocado de foco.",
        "example": "'The data were collected in June' destaca a coleta e a data. Se a reportagem precisa atribuir responsabilidade, acrescentar 'by the research team' pode ser relevante, desde que essa autoria tenha sido verificada.",
        "pitfall": "Concluir que toda passiva procura ocultar culpados ou que a retirada do agente altera automaticamente o tempo verbal do fato.",
        "steps": [
          "Determine se a identidade do agente é necessária para interpretar a afirmação.",
          "Examine se a voz passiva enfatiza resultado, procedimento ou omite informação relevante."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Transforme 'The school publishes the timetable' em voz passiva no presente simples.",
        "hint": "Use is + particípio do verbo publish.",
        "solution": "'The timetable is published by the school.' O cronograma torna-se sujeito, e o auxiliar is preserva o presente simples."
      },
      {
        "level": "basic",
        "prompt": "Qual é o particípio de write na frase passiva 'The letter was ___'?",
        "hint": "Não use o simple past wrote.",
        "solution": "A forma correta é 'written': 'The letter was written'. A estrutura exige particípio, não o passado simples do verbo irregular."
      },
      {
        "level": "intermediate",
        "prompt": "Passe 'Students cleaned the classroom' para voz passiva no passado.",
        "hint": "Use was + cleaned, considerando classroom singular.",
        "solution": "'The classroom was cleaned by students'. O passado é preservado por was e o objeto da ativa torna-se sujeito."
      },
      {
        "level": "intermediate",
        "prompt": "Como traduzir o foco de 'The report will be published tomorrow'?",
        "hint": "Observe will be + particípio.",
        "solution": "A frase destaca que o relatório será publicado amanhã. O agente responsável não foi informado, mas o futuro e o evento estão claros."
      },
      {
        "level": "advanced",
        "prompt": "Por que 'The forms were checked' não revela quem verificou os formulários?",
        "hint": "O complemento com by pode ser omitido.",
        "solution": "A frase está na voz passiva e não inclui agente introduzido por by. Pode ser necessário consultar a fonte se a identidade for relevante."
      },
      {
        "level": "advanced",
        "prompt": "Explique por que 'The door is closed' pode ser ambígua entre estado e passiva.",
        "hint": "Considere closed como adjetivo ou particípio.",
        "solution": "Dependendo do contexto, closed descreve condição da porta ou resultado de ação. Nem toda combinação de be com particípio é claramente passiva sem contexto."
      }
    ],
    "everyday": {
      "context": "Um aviso internacional informa: 'The exam dates were changed'. Os alunos entendem que as datas foram alteradas, mas tentam descobrir qual instituição realizou a alteração.",
      "question": "Por que a frase comunica a mudança sem identificar quem a realizou?",
      "answer": "Ela usa voz passiva: 'the exam dates' é sujeito que recebe a ação, 'were changed' preserva passado, e o agente não aparece. A origem da decisão exige outra informação.",
      "connections": [
        {
          "subject": "Inglês",
          "topic": "Present perfect e past perfect",
          "reason": "A comparação mostra como auxiliares e particípios organizam relações de tempo, mesmo em construções diferentes da passiva."
        },
        {
          "subject": "Português",
          "topic": "Informações explícitas e inferências",
          "reason": "Omissão de agente não autoriza inventar quem realizou a ação; é necessário distinguir informação declarada de suposição."
        }
      ]
    }
  },
  {
    "subject": "Espanhol",
    "topic": "Variação linguística e voseo",
    "objective": "Compreender diversidade regional do espanhol, distinguindo voseo, tuteo e formas de tratamento sem considerar variedades americanas inferiores à norma peninsular.",
    "sections": [
      {
        "title": "O espanhol tem variedades legítimas",
        "explanation": "O espanhol é utilizado em países e comunidades com trajetórias históricas e sociais distintas, portanto não há uma única pronúncia ou repertório de palavras usado uniformemente por todos os falantes. Variações regionais podem envolver vocabulário, sons, construções e formas de tratamento. O tuteo usa tú em muitos contextos informais; o voseo utiliza vos em diversas regiões da América, com conjugação que varia por localidade. O uso de usted pode marcar formalidade, respeito ou proximidade em situações diferentes. A escolha depende de relações sociais e do contexto, não de superioridade ou inferioridade de um país. Em provas, o primeiro passo é identificar interlocutor e região quando informada; uma palavra como 'ordenador' ou 'computadora' pode revelar uso regional, mas não identifica com certeza a nacionalidade de uma pessoa.",
        "example": "Em certas variedades rioplatenses, '¿Vos tenés tiempo?' corresponde aproximadamente a 'Você tem tempo?'. Em outras regiões, '¿Tú tienes tiempo?' é forma informal usual.",
        "pitfall": "Tratar uma conjugação com vos como erro gramatical ou afirmar que todos os países latino-americanos usam exatamente o mesmo tratamento.",
        "steps": [
          "Identifique o pronome e a relação entre interlocutores antes de julgar o registro.",
          "Considere diversidade regional sem generalizar a todos os falantes de um país."
        ]
      },
      {
        "title": "Voseo e tuteo: conjugação e contexto",
        "explanation": "Em variedades como a rioplatense, o voseo pode aparecer em 'vos sos', 'vos tenés', 'vos hablás', 'vos vivís' e imperativos como 'hablá'. Esses exemplos não constituem regra única para todo voseo: há variedades que usam vos com flexões diferentes ou combinam pronome e formas verbais de outras maneiras. No tuteo, são comuns 'tú eres', 'tú tienes', 'tú hablas' e 'tú vives'. Ambas as formas podem ser adequadas em suas comunidades. A interpretação depende da frase real, pois a mesma forma ortográfica pode ter funções diferentes conforme variedade. Na produção escolar, o estudante deve usar conjugação coerente com a variedade trabalhada, sem misturar padrões por desconhecimento e sem estigmatizar interlocutores que escolhem outro tratamento.",
        "example": "Num diálogo informal rioplatense inventado, 'Vos hablás muy rápido' usa pronome vos e forma hablás. A versão com tuteo seria 'Tú hablas muy rápido', sem que uma seja universalmente melhor.",
        "pitfall": "Supor que todo voseo usa a mesma terminação ou converter vos automaticamente em vosotros, que possui outra distribuição e função.",
        "steps": [
          "Observe a flexão verbal que acompanha vos no exemplo regional apresentado.",
          "Compare com tú mantendo pessoa gramatical e intenção comunicativa."
        ]
      },
      {
        "title": "Usted, ustedes e competência intercultural",
        "explanation": "O tratamento com usted e ustedes é importante para leitura de anúncios, formulários, entrevistas e comunicações institucionais. Em grande parte da América hispanofalante, ustedes é forma plural corrente tanto em situações formais quanto informais; na Espanha, vosotros e vosotras aparecem em muitas variedades informais, enquanto ustedes tem outros usos. Mesmo dentro de cada país existem diferenças sociais e regionais. Entender variedades ajuda a não interpretar tratamento formal como hostilidade ou linguagem informal como falta de educação. Gênero textual, idade dos interlocutores, normas locais e contexto institucional influenciam escolhas. Para questões de vestibular, classifique marcas regionais com base no texto e evite inferir caráter, escolaridade ou nacionalidade exata a partir de uma única forma linguística.",
        "example": "Um aviso de curso escrito 'Ustedes pueden inscribirse hasta el viernes' dirige-se a várias pessoas. A presença de ustedes não permite concluir sozinha se o público é tratado com formalidade.",
        "pitfall": "Confundir ustedes com tratamento obrigatoriamente cerimonioso em qualquer país ou inferir nacionalidade de alguém apenas pelo uso de vos.",
        "steps": [
          "Separe pluralidade dos interlocutores de eventual grau de formalidade.",
          "Verifique a variedade e o gênero antes de interpretar escolha de pronome."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em '¿Vos tenés tiempo?', que forma de tratamento aparece?",
        "hint": "Observe pronome usado no enunciado.",
        "solution": "A frase usa voseo, com vos e uma conjugação frequente em variedades rioplatenses. Não é erro de espanhol."
      },
      {
        "level": "basic",
        "prompt": "Em que o tuteo e o voseo podem diferir?",
        "hint": "Compare pronomes e flexões verbais.",
        "solution": "Tuteo utiliza tú em contextos informais; voseo utiliza vos em diferentes variedades americanas, frequentemente com flexões específicas."
      },
      {
        "level": "intermediate",
        "prompt": "Transforme 'Vos hablás español' para tuteo informal corrente.",
        "hint": "Use tú e o verbo hablas.",
        "solution": "Uma versão com tuteo é 'Tú hablas español'. A ideia é semelhante, mas muda a forma de tratamento e a flexão verbal."
      },
      {
        "level": "intermediate",
        "prompt": "Por que 'ustedes' não indica necessariamente formalidade máxima em toda a América?",
        "hint": "Pense no plural usado em diferentes regiões.",
        "solution": "Em muitas variedades americanas, ustedes é o plural corrente para diferentes graus de formalidade. Sua presença isolada não determina a relação social."
      },
      {
        "level": "advanced",
        "prompt": "É correto afirmar que todo falante que usa vos é argentino?",
        "hint": "O voseo existe em várias regiões.",
        "solution": "Não. O voseo também ocorre em outras áreas hispanofalantes, com variações de frequência e conjugação; a forma não identifica uma nacionalidade exata."
      },
      {
        "level": "advanced",
        "prompt": "Por que não se deve corrigir 'vos sos' para 'tú eres' como se a primeira estivesse errada?",
        "hint": "Considere normas regionais diferentes.",
        "solution": "'Vos sos' é construção legítima em variedades que empregam voseo, enquanto 'tú eres' corresponde a tuteo. A adequação depende do contexto e da variedade."
      }
    ],
    "everyday": {
      "context": "Numa troca de mensagens, uma estudante recebe '¿Vos tenés el material?' de colega hispanofalante. Outro estudante afirma que é erro, porque aprendeu somente '¿Tú tienes el material?' no livro.",
      "question": "Como explicar as duas formas sem hierarquizar falantes ou países?",
      "answer": "São formas de tratamento de variedades distintas: voseo com vos tenés e tuteo com tú tienes. Ambas podem ser adequadas conforme região e relação entre interlocutores.",
      "connections": [
        {
          "subject": "Espanhol",
          "topic": "Tempos do passado em espanhol",
          "reason": "Variedades regionais podem influenciar escolhas de formas verbais, incluindo usos de pretéritos em contextos diferentes."
        },
        {
          "subject": "Português",
          "topic": "Variação regional, social e histórica",
          "reason": "Comparar voseo e tuteo com variantes brasileiras mostra que variação linguística não significa inferioridade de falantes."
        }
      ]
    }
  },
  {
    "subject": "Arte",
    "topic": "Arte barroca brasileira",
    "objective": "Interpretar elementos formais, materiais e contextos do Barroco produzido no Brasil colonial, diferenciando patrimônio artístico, religiosidade e relações sociais.",
    "sections": [
      {
        "title": "Barroco no Brasil: forma e contexto colonial",
        "explanation": "A arte barroca presente no Brasil colonial se desenvolveu em contextos e períodos variados, especialmente entre os séculos XVII e XVIII e em continuidades posteriores, envolvendo arquitetura, escultura, pintura e decoração de igrejas. Características recorrentes podem incluir movimento visual, ornamentação, contrastes de luz e sombra, linhas curvas e composições dramáticas, mas não aparecem sempre do mesmo modo em toda obra. Relações com a Igreja Católica e com encomendas de grupos locais foram relevantes, sem esgotar as funções culturais da produção. O estudo exige distinguir arquitetura externa, talha interna, pintura de teto e escultura: são materiais e técnicas distintos. Uma igreja muito ornamentada não prova sozinha que toda a arte de uma cidade seguiu a mesma estética. O Barroco brasileiro não deve ser visto como simples cópia passiva da Europa, pois oficinas, artistas e contextos locais produziram adaptações.",
        "example": "Em uma igreja colonial hipotética, uma talha dourada com linhas curvas e composição dinâmica pode orientar o olhar para o altar. O efeito visual depende da organização do espaço e dos materiais.",
        "pitfall": "Classificar qualquer decoração antiga como barroca ou afirmar que todas as obras coloniais possuíam ornamentação idêntica.",
        "steps": [
          "Identifique forma, material e função do elemento artístico observado.",
          "Relacione o objeto ao contexto de encomenda e circulação sem supor origem única."
        ]
      },
      {
        "title": "Minas Gerais, oficinas e autoria artística",
        "explanation": "Em Minas Gerais, o crescimento de centros urbanos ligados à mineração contribuiu para encomendas de edifícios religiosos e obras de arte, envolvendo diferentes artistas, artesãos e trabalhadores. Antônio Francisco Lisboa, conhecido como Aleijadinho, é figura central na historiografia do período, mas atribuições de obras podem exigir documentação e análise especializada; não é correto atribuir a ele toda escultura religiosa antiga de Minas. Pintores como Manuel da Costa Ataíde também contribuíram para repertórios visuais importantes, em técnicas e projetos específicos. As obras resultavam frequentemente de trabalho de oficinas e participação de múltiplas pessoas, muitas vezes invisibilizadas em registros históricos. A vida colonial envolveu desigualdades e escravidão, que não devem ser apagadas por uma apresentação apenas celebratória do patrimônio. A análise relaciona estética, materiais, encomenda e condições sociais.",
        "example": "Uma visita a um conjunto de igrejas em Minas pode comparar pintura de teto, talha e escultura, perguntando por autoria documentada, material empregado e organização dos trabalhadores envolvidos.",
        "pitfall": "Atribuir automaticamente a Aleijadinho qualquer igreja barroca mineira ou estudar patrimônio sem considerar a sociedade colonial em que foi produzido.",
        "steps": [
          "Observe dados de autoria e técnica antes de identificar o artista.",
          "Analise o papel das oficinas e das relações sociais nas encomendas."
        ]
      },
      {
        "title": "Preservação do patrimônio e leitura crítica",
        "explanation": "Patrimônio artístico envolve objetos e espaços que diferentes grupos atribuem valor histórico e cultural, sujeitos a conservação, estudo e interpretação. Observar uma igreja colonial pode revelar escolhas de composição, luz e materiais, mas também permite perguntar quem teve acesso ao espaço, quem financiou a obra e quem executou trabalhos. Conservação e restauro exigem metodologias especializadas para evitar perdas ou alterações indevidas; não basta repintar um objeto para torná-lo 'como novo'. Museus e espaços históricos podem apresentar diferentes versões de um mesmo passado, destacando alguns atores e omitindo outros. O aluno deve separar descrição visual de inferência sobre intenção do artista e usar fontes quando fizer afirmações sobre datas e autoria. A relação com outras artes ajuda a perceber que contraste e movimento visual não pertencem apenas a um estilo histórico.",
        "example": "Uma visita escolar compara fotos antigas e atuais do interior de uma igreja. Identificar alterações materiais pode ajudar a discutir conservação, sem atribuir automaticamente cada diferença a restauração malfeita.",
        "pitfall": "Tratar patrimônio como objeto congelado sem história ou concluir autoria e intenção somente a partir de aparência visual.",
        "steps": [
          "Descreva características visuais antes de formular interpretações históricas.",
          "Busque informações documentadas sobre autoria, conservação e usos do espaço."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cite duas características visuais frequentemente associadas ao Barroco.",
        "hint": "Considere movimento, contraste e ornamentação.",
        "solution": "Contrastes de luz e sombra e ornamentação dinâmica são características frequentes, embora sua presença varie entre obras e contextos."
      },
      {
        "level": "basic",
        "prompt": "Por que uma pintura de teto e uma talha de madeira não são a mesma técnica?",
        "hint": "Compare suportes e materiais.",
        "solution": "A pintura utiliza pigmentos aplicados sobre suporte, enquanto a talha envolve trabalho de entalhe em material como madeira; ambas podem compor um mesmo espaço."
      },
      {
        "level": "intermediate",
        "prompt": "Qual cuidado é necessário ao atribuir obra colonial a Aleijadinho?",
        "hint": "A semelhança visual não basta como prova.",
        "solution": "É preciso consultar documentação e análise especializada; atribuir todas as esculturas antigas de Minas a um artista apaga oficinas e outros produtores."
      },
      {
        "level": "intermediate",
        "prompt": "Como a mineração em Minas Gerais se relacionou à produção artística colonial?",
        "hint": "Considere expansão urbana e encomendas.",
        "solution": "O crescimento de centros urbanos e recursos ligados à mineração contribuiu para encomendas religiosas e artísticas, em contextos sociais desiguais."
      },
      {
        "level": "advanced",
        "prompt": "Por que uma visita a patrimônio colonial também deve abordar a escravidão?",
        "hint": "A produção artística ocorreu numa sociedade com trabalho desigual.",
        "solution": "Porque financiamento, trabalho e circulação de obras faziam parte de relações coloniais que incluíam escravidão e hierarquias sociais, relevantes para interpretar a produção."
      },
      {
        "level": "advanced",
        "prompt": "Explique a diferença entre descrever a forma de uma igreja e inferir intenção de seu autor.",
        "hint": "Uma observação direta não prova intenção.",
        "solution": "É possível descrever curvas e contrastes observáveis; atribuir intenção específica a determinado artista exige documentação e análise contextual adicionais."
      }
    ],
    "everyday": {
      "context": "Em visita escolar a uma igreja colonial mineira, estudantes observam talhas douradas, pinturas no teto e esculturas. Um colega afirma que todas as peças foram feitas pelo mesmo artista por parecerem semelhantes.",
      "question": "Que elementos devem ser examinados para interpretar estilo, materiais e autoria sem fazer atribuições precipitadas?",
      "answer": "É preciso distinguir técnicas e suportes, descrever a composição e consultar documentos sobre autoria e oficinas. Semelhança visual isolada não prova que todas as obras são da mesma pessoa.",
      "connections": [
        {
          "subject": "Arte",
          "topic": "Elementos visuais: ponto, linha, cor, forma e textura",
          "reason": "Linhas curvas, contraste, textura e composição ajudam a descrever obras barrocas sem depender só do rótulo histórico."
        },
        {
          "subject": "Arte",
          "topic": "Arte e tecnologia",
          "reason": "Materiais, ferramentas e técnicas de oficinas mostram como recursos tecnológicos participam da criação e da conservação artística."
        }
      ]
    }
  }
];
const lookup=new Map(specs.map(s=>[s.subject+'\0'+s.topic,s]));
export const stage15Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage15EverydayContexts:readonly EverydayContext[]=specs.map(s=>({subject:s.subject,topic:s.topic,...s.everyday}));
export function stage15Lesson(topic:CurriculumTopic):CourseLesson|null{
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
