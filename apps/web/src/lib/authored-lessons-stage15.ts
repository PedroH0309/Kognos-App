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
