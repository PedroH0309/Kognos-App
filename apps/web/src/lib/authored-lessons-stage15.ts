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
