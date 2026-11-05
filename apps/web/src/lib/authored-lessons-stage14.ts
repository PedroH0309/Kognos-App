/** Etapa 14 — conteúdo escrito especificamente para cada assunto.
 * Exemplos são didáticos e não constituem fatos estatísticos aferidos.
 * Nenhuma aula é gerada durante o acesso do estudante.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson,CourseLevel,CourseSection,CourseTask} from './course-content.ts';
import type {EverydayContext} from './everyday-lesson-contexts.ts';
import {examBlueprints} from './exam-blueprints.ts';

type Chapter={title:string;explanation:string;example:string;pitfall:string};
type Practice={level:CourseLevel;prompt:string;hint:string;solution:string};
type Spec={
 subject:string;topic:string;objective:string;
 sections:Chapter[];tasks:Practice[];
 everyday:Pick<EverydayContext,'context'|'question'|'answer'|'connections'>;
};
const specs:Spec[] = [
  {
    "subject": "Matemática",
    "topic": "Média aritmética e ponderada",
    "objective": "Calcular e interpretar médias simples e ponderadas, justificando pesos e evitando generalizações a partir de um único valor.",
    "sections": [
      {
        "title": "Média simples e o significado do resultado",
        "explanation": "A média aritmética simples é a soma das observações dividida pela quantidade de valores. Ela descreve uma medida central, mas não representa obrigatoriamente o valor de cada indivíduo do grupo. Para as notas 5, 7, 8 e 10, a média é (5+7+8+10)/4=7,5. Antes de calcular, identifique unidade, período, população observada e possíveis valores ausentes. Uma média pode esconder variação: tempos de deslocamento 10, 10, 10 e 50 minutos produzem média 20, mesmo com três pessoas gastando só dez minutos. A interpretação responsável compara a média com distribuição e, quando necessário, mediana. Em questões de prova, a operação correta deve responder ao que efetivamente foi perguntado, não apenas à presença da palavra 'média'.",
        "example": "Uma equipe levou 12, 18, 20 e 30 minutos até a escola em quatro dias. A soma foi 80 minutos e a média 80/4=20. Não se pode afirmar que todos os percursos levaram 20 minutos.",
        "pitfall": "Tratar a média como descrição de cada observação ou esquecer de dividir pela quantidade de valores realmente considerados."
      },
      {
        "title": "Pesos diferentes exigem média ponderada",
        "explanation": "Quando os valores têm quantidades ou importâncias diferentes, utiliza-se a média ponderada: soma dos produtos valor×peso dividida pela soma dos pesos. Uma nota 6 com peso 2 e uma nota 9 com peso 3 produzem (6×2+9×3)/(2+3)=39/5=7,8, em vez de 7,5. Pesos podem representar frequência, número de pessoas ou critérios de avaliação; não são escolhidos por preferência do aluno. Para porcentagens que somam 100%, usar os percentuais convertidos em frações é equivalente a dividir pela soma dos pesos. Quando grupos têm tamanhos diferentes, calcular simplesmente a média de suas médias pode distorcer o resultado. O denominador é tão importante quanto o numerador: deve representar o total de pesos coerente com a pergunta.",
        "example": "Uma loja vende 2 cadernos a R$ 12 e 8 a R$ 15. O valor médio por item vendido é (2×12+8×15)/10=R$ 14,40, e não R$ 13,50.",
        "pitfall": "Fazer a média simples de médias de grupos de tamanhos diferentes sem levar em conta a quantidade de elementos."
      },
      {
        "title": "Como avaliar médias publicadas em pesquisas",
        "explanation": "Em reportagens e gráficos, é essencial conferir quais pessoas ou objetos foram incluídos, como a amostra foi escolhida e se os pesos são apropriados. Duas escolas com média de desempenho semelhante podem ter distribuições muito distintas, e isso importa para planejar apoio pedagógico. Uma média elevada não prova que todos obtiveram resultados elevados; nem uma média baixa permite concluir que ninguém foi bem. Quando uma pesquisa apresenta renda média, valores extremos podem elevar o resultado sem alterar a condição da maioria. Questões de ENEM e vestibulares frequentemente testam leitura crítica de estatísticas, não apenas fórmula. Para combinar grupos, multiplique a média de cada grupo pelo seu tamanho, some as contribuições e divida pelo total de participantes; depois discuta o alcance dos dados.",
        "example": "Uma turma de 10 alunos tem média 6; outra, de 30 alunos, tem média 8. A média conjunta é (10×6+30×8)/40=7,5. A média simples de 6 e 8 daria 7, que não representa os 40 estudantes.",
        "pitfall": "Supor que uma média é prova de causalidade ou atribuir o resultado de uma amostra pequena a toda a população."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Calcule a média aritmética de 6, 8, 10 e 12.",
        "hint": "Some os quatro números e divida por quatro.",
        "solution": "A soma é 36 e existem quatro observações. Portanto, a média aritmética é 36/4=9. O valor central não precisa coincidir com um dos elementos."
      },
      {
        "level": "basic",
        "prompt": "As viagens demoraram 15, 25 e 35 minutos. Qual foi a média?",
        "hint": "Considere três trajetos com o mesmo peso.",
        "solution": "A soma dos tempos é 75 minutos. A média é 75/3=25 minutos, embora nenhum dos outros dois percursos tenha exatamente esse tempo."
      },
      {
        "level": "intermediate",
        "prompt": "Uma atividade de nota 7 tem peso 2 e outra de nota 9 tem peso 3. Qual a média ponderada?",
        "hint": "Use produtos nota×peso e soma dos pesos 5.",
        "solution": "A soma ponderada é 7×2+9×3=14+27=41. Dividindo por 5, a média é 8,2. A nota de peso 3 influencia mais o resultado."
      },
      {
        "level": "intermediate",
        "prompt": "Uma papelaria vende 3 itens por R$ 10 e 7 por R$ 20. Determine o preço médio unitário.",
        "hint": "O total arrecadado deve ser dividido pelo número de itens.",
        "solution": "A receita é 3×10+7×20=170 reais para dez itens. Logo o valor médio por item é R$ 17, e não R$ 15, que ignoraria as frequências."
      },
      {
        "level": "advanced",
        "prompt": "Uma turma de 10 alunos tem média 6; outra de 30 tem média 8. Calcule a média conjunta.",
        "hint": "Multiplique cada média pelo tamanho da turma.",
        "solution": "A soma representada é 10×6+30×8=300. Dividindo por 40 alunos, a média conjunta é 7,5. Fazer (6+8)/2=7 ignora tamanhos distintos."
      },
      {
        "level": "advanced",
        "prompt": "Os valores 10, 10, 10 e 50 têm média 20. Explique por que ela pode ocultar a realidade do grupo.",
        "hint": "Compare média, mediana e distribuição.",
        "solution": "A média é 80/4=20, mas três dos quatro valores são 10. A mediana é 10, mostrando que a média foi puxada para cima pelo valor extremo 50."
      }
    ],
    "everyday": {
      "context": "Duas turmas fazem a mesma avaliação: dez estudantes obtiveram média 6 e trinta estudantes, média 8. Um mural anuncia média geral 7 porque somou as duas médias e dividiu por dois.",
      "question": "Por que esse resultado não representa os quarenta estudantes e qual é a média correta?",
      "answer": "As turmas têm tamanhos diferentes. A média conjunta é (10×6+30×8)/(10+30)=300/40=7,5, pois cada grupo precisa contribuir conforme seu número de estudantes.",
      "connections": [
        {
          "subject": "Matemática",
          "topic": "Probabilidade condicional",
          "reason": "Ambos os conteúdos exigem escolher o universo de referência correto antes de dividir ou interpretar percentuais."
        },
        {
          "subject": "Redação",
          "topic": "Repertório sociocultural produtivo",
          "reason": "Dados usados para fundamentar teses precisam ser interpretados com contexto e representatividade."
        }
      ]
    }
  },
  {
    "subject": "Física",
    "topic": "Potência e consumo de energia elétrica",
    "objective": "Calcular consumo elétrico em kWh e estimar custo com potência e tempo, distinguindo energia, potência e tarifas reais.",
    "sections": [
      {
        "title": "Watts, quilowatts e quilowatt-hora",
        "explanation": "Potência é a taxa de transformação ou transferência de energia, P=ΔE/Δt. No SI, a potência é medida em watts, sendo 1 W=1 joule por segundo. A energia elétrica de uma conta residencial costuma ser expressa em quilowatt-hora, que é unidade de energia, não de potência. Um equipamento de 1000 W possui potência de 1 kW e, se mantiver essa potência durante duas horas, consumirá 2 kWh. Um quilowatt-hora corresponde a 3,6 milhões de joules. A comparação entre equipamentos exige observar duração de uso, pois um aparelho menos potente pode consumir mais energia se permanecer ligado por muito tempo. A potência nominal no rótulo nem sempre é a potência efetiva em todos os modos; termostatos e controles variam o consumo durante o uso.",
        "example": "Uma lâmpada de 10 W durante 100 horas consome 1 kWh. Um secador de 1000 W por 30 minutos usa 0,5 kWh. Maior potência não significa obrigatoriamente maior consumo num intervalo escolhido.",
        "pitfall": "Tratar W e kWh como equivalentes ou esquecer de converter minutos para horas e watts para quilowatts."
      },
      {
        "title": "Como estimar o consumo e o valor cobrado",
        "explanation": "Se a potência é aproximadamente constante, a energia em kWh é E=P(kW)×t(h). Um equipamento de 1500 W equivale a 1,5 kW; usado por duas horas, consome 3 kWh no modelo. Sob tarifa hipotética de R$ 0,80 por kWh, essa energia custaria R$ 2,40. Não se deve apresentar esse cálculo como fatura real: impostos, componentes tarifários, bandeiras, taxas e mudanças de consumo podem alterar a cobrança. Aparelhos com termostato, ciclos e regulagem de velocidade variam a potência média. Para comparar eficiência, considere a mesma tarefa executada, e não apenas dois números de watts isolados. Um consumo previsto é uma estimativa cujas hipóteses precisam ser declaradas.",
        "example": "Um ventilador de 75 W utilizado por oito horas consome 0,075×8=0,6 kWh. Com preço hipotético de R$ 1/kWh, a parcela estimada de energia é R$ 0,60.",
        "pitfall": "Multiplicar a potência máxima de aparelho que liga e desliga por 24 horas e afirmar que a estimativa é medição exata."
      },
      {
        "title": "Relações de potência e decisões seguras",
        "explanation": "Em certos circuitos, a potência elétrica pode ser calculada por P=U·I, com U a tensão no elemento e I a corrente através dele. Para resistores ideais, também valem P=RI² e P=U²/R, associadas à lei de Ohm. Essas equações exigem condições de aplicação e não são instruções para manipular tomadas. Uma boa análise de consumo identifica finalidade, potência média durante a utilização e tempo acumulado. A economia de energia depende da combinação desses fatores, da eficiência e do uso responsável, não de truques eletrônicos caseiros. Questões sobre consumo podem integrar porcentagens e gráficos, mas a grandeza física deve permanecer identificada: potência em W ou kW, tempo em h, energia em kWh e custo na moeda informada.",
        "example": "Se um equipamento hipotético de iluminação mantém 12 W durante cinco horas, E=0,012×5=0,06 kWh. Se outra luminária equivalente usa 8 W no mesmo período, consome 0,04 kWh; isso compara energia para serviço semelhante.",
        "pitfall": "Concluir que uma potência baixa necessariamente produz maior eficiência ou tentar verificar fórmulas em instalações energizadas."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma lâmpada de 20 W fica ligada por 5 horas. Qual o consumo em kWh?",
        "hint": "Converta 20 watts para 0,020 quilowatt antes de multiplicar pelo tempo.",
        "solution": "E=0,020×5=0,10 kWh. Os watts representam potência; o resultado em kWh representa energia acumulada durante as cinco horas."
      },
      {
        "level": "basic",
        "prompt": "Explique a diferença entre 1 kW e 1 kWh.",
        "hint": "Uma unidade é taxa de energia e a outra é energia.",
        "solution": "1 kW equivale a potência de 1000 W. 1 kWh equivale à energia transformada por potência constante de 1 kW durante uma hora, ou 3,6 MJ."
      },
      {
        "level": "intermediate",
        "prompt": "Um aparelho de 1000 W funciona durante 45 minutos. Calcule o consumo.",
        "hint": "45 minutos=0,75 hora.",
        "solution": "A potência é 1 kW e o tempo 0,75 h. O consumo idealizado é E=1×0,75=0,75 kWh, assumindo potência constante."
      },
      {
        "level": "intermediate",
        "prompt": "Para 2,5 kWh e tarifa hipotética de R$ 0,90/kWh, qual a parcela estimada de energia?",
        "hint": "Multiplique consumo por preço unitário.",
        "solution": "2,5×0,90=R$ 2,25. O valor não inclui outros componentes de uma conta real de energia, como tributos ou tarifas adicionais."
      },
      {
        "level": "advanced",
        "prompt": "Compare 2000 W durante 15 minutos com 500 W durante duas horas. Qual consome mais?",
        "hint": "Converta potência e tempo em kW e h.",
        "solution": "O primeiro consome 2×0,25=0,5 kWh; o segundo, 0,5×2=1,0 kWh. Portanto, o menos potente consumiu mais por operar durante mais tempo."
      },
      {
        "level": "advanced",
        "prompt": "Por que potência nominal de um equipamento com termostato pode superestimar o consumo diário?",
        "hint": "Observe ciclos ligados e desligados.",
        "solution": "Um termostato pode interromper o aquecimento em parte do período. Multiplicar a potência máxima por todas as horas supõe atividade constante que pode não ocorrer."
      }
    ],
    "everyday": {
      "context": "Uma família compara um ventilador de 80 W ligado por oito horas a um aparelho de 1200 W usado durante trinta minutos. A pessoa que lê o rótulo pensa que o mais potente sempre consome mais.",
      "question": "Qual equipamento usou mais energia nos períodos descritos, supondo potência constante?",
      "answer": "O ventilador consome 0,080×8=0,64 kWh; o segundo equipamento, 1,2×0,5=0,60 kWh. O ventilador consumiu ligeiramente mais porque funcionou por mais tempo.",
      "connections": [
        {
          "subject": "Física",
          "topic": "Conservação da energia mecânica",
          "reason": "Energia e potência são grandezas diferentes: uma descreve quantidade transferida e a outra a taxa dessa transformação."
        },
        {
          "subject": "Matemática",
          "topic": "Porcentagem e juros",
          "reason": "Tarifas, reajustes e comparações de custos exigem interpretar preços e variações proporcionais."
        }
      ]
    }
  },
  {
    "subject": "Química",
    "topic": "pH e pOH",
    "objective": "Aplicar escala logarítmica de pH a modelos aquosos e calcular pOH sob condições indicadas, diferenciando concentração e segurança química.",
    "sections": [
      {
        "title": "pH e a escala logarítmica",
        "explanation": "O pH é relacionado à atividade dos íons oxônio em solução aquosa. Em exercícios com soluções diluídas, costuma-se aproximar pH=−log[H₃O⁺], usando concentração em mol/L como aproximação de atividade. Uma unidade a menos no pH corresponde, nessas condições comparáveis, a dez vezes mais concentração de íons oxônio. Portanto, a diferença de pH 3 para pH 5 corresponde a fator 100, e não a duas vezes mais. A escala não é obrigatoriamente limitada de 0 a 14 em toda situação; condições concentradas podem produzir valores fora desse intervalo. O pH por si só também não determina se um produto é seguro, pois risco envolve composição, exposição e outras propriedades. Distinguir definição, aproximação e interpretação ajuda a resolver questões sem inventar resultados laboratoriais.",
        "example": "Em soluções hipotéticas com [H₃O⁺]=10⁻³ mol/L e 10⁻⁵ mol/L, os pH aproximados são 3 e 5. A primeira contém aproximadamente cem vezes mais íons oxônio por volume comparável.",
        "pitfall": "Tratar a diferença de duas unidades como diferença linear ou declarar segurança de uma substância apenas pelo pH."
      },
      {
        "title": "pOH, neutralidade e influência da temperatura",
        "explanation": "Em soluções aquosas a aproximadamente 25 °C, o produto iônico da água é frequentemente aproximado por Kw=10⁻¹⁴, e a relação escolar usual é pH+pOH≈14. O pOH é −log[OH⁻] na aproximação de concentração. Nessas condições, uma solução aquosa neutra tem pH próximo de 7; valores abaixo são associados a maior acidez e acima a maior basicidade. Porém Kw depende da temperatura, de modo que a neutralidade não corresponde necessariamente a pH exato de 7 em toda temperatura. Força ácida e concentração não são sinônimos: a força se relaciona ao comportamento de dissociação ou ionização, enquanto concentração mede quantidade presente por volume. Resolver exercícios requer verificar quais hipóteses o enunciado oferece.",
        "example": "A 25 °C, uma solução hipotética com pOH=4 apresenta pH≈10, sendo básica na aproximação escolar. Se pH=6, o pOH aproximado é 8.",
        "pitfall": "Usar pH+pOH=14 como identidade exata para qualquer temperatura ou confundir ácido fraco com solução necessariamente diluída."
      },
      {
        "title": "Diluição e limites dos modelos de ácido-base",
        "explanation": "Diluir altera concentrações, mas a mudança do pH depende das espécies e dos equilíbrios presentes. No caso idealizado de ácido forte monoprótico suficientemente diluído e completamente dissociado, reduzir a concentração por fator dez pode aumentar o pH em cerca de uma unidade, enquanto o modelo for adequado. Ácidos fracos e soluções tamponadas respondem de modo diferente; não se deve aplicar a regra automaticamente. Indicadores mudam de cor em faixas de pH e medidores requerem calibração para resultados confiáveis. O aluno pode analisar tabelas fornecidas numa prova sem manipular substâncias reais. Misturar produtos de limpeza para testar acidez é perigoso e não constitui experimento escolar apropriado. O conceito químico deve ajudar a interpretar dados, não a produzir práticas sem orientação.",
        "example": "Para HCl idealizado a 25 °C, soluções diluídas com concentrações 10⁻² e 10⁻³ mol/L podem ter pH aproximado 2 e 3, desde que a dissociação e as aproximações do modelo sejam válidas.",
        "pitfall": "Afirmar que toda diluição multiplica o pH por dez ou tentar determinar o pH de misturas reais apenas pela fórmula simplificada."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Calcule pH para [H₃O⁺]=10⁻⁴ mol/L num modelo diluído.",
        "hint": "Use pH=−log₁₀[H₃O⁺].",
        "solution": "pH≈−log₁₀(10⁻⁴)=4. A classificação é ácida em comparação à neutralidade aproximada de pH 7 a 25 °C."
      },
      {
        "level": "basic",
        "prompt": "Qual tem mais íons oxônio: pH 3 ou pH 5, nas mesmas condições?",
        "hint": "Compare diferenças de duas unidades logarítmicas.",
        "solution": "A solução com pH 3 tem concentração de H₃O⁺ cerca de 10²=100 vezes maior que aquela de pH 5, segundo o modelo."
      },
      {
        "level": "intermediate",
        "prompt": "A 25 °C, calcule pOH de solução com pH 9.",
        "hint": "Use pH+pOH≈14.",
        "solution": "pOH≈14−9=5. Nesse modelo, a solução é básica porque apresenta pH acima da neutralidade aproximada a 25 °C."
      },
      {
        "level": "intermediate",
        "prompt": "Uma solução tem pOH 3 a 25 °C. Qual pH e classificação?",
        "hint": "A 25 °C, use a relação aproximada pH+pOH=14.",
        "solution": "pH≈14−3=11. Assim, a solução é básica nas condições de equilíbrio aquoso assumidas no exercício."
      },
      {
        "level": "advanced",
        "prompt": "Por que pH 2 não significa apenas uma unidade linear a mais de acidez que pH 3?",
        "hint": "Cada unidade da escala de pH corresponde a um fator dez no modelo aproximado.",
        "solution": "A diferença de uma unidade corresponde a fator dez na concentração aproximada de H₃O⁺. Portanto, a comparação é multiplicativa, não uma diferença aditiva."
      },
      {
        "level": "advanced",
        "prompt": "Explique por que neutralidade nem sempre corresponde a pH igual a 7.",
        "hint": "Observe a dependência de Kw com a temperatura.",
        "solution": "A autoionização da água muda com a temperatura e altera o pH neutro. O valor 7 é aproximação associada a cerca de 25 °C."
      }
    ],
    "everyday": {
      "context": "Em uma atividade didática, dois frascos de solução aquosa são descritos com pH 3 e pH 5. Um estudante acha que a primeira solução possui somente duas vezes mais íons oxônio.",
      "question": "Como interpretar corretamente uma diferença de duas unidades na escala logarítmica?",
      "answer": "Sob o modelo de soluções diluídas comparáveis, pH 3 indica concentração de H₃O⁺ aproximadamente cem vezes maior que pH 5, porque cada unidade representa fator dez.",
      "connections": [
        {
          "subject": "Química",
          "topic": "Concentração comum e molaridade",
          "reason": "O pH aproximado utiliza a concentração de uma espécie química por volume, expressa em mol/L no modelo."
        },
        {
          "subject": "Ciências",
          "topic": "Reações químicas no cotidiano",
          "reason": "O comportamento ácido-base se relaciona a reações e espécies em solução, mas indícios visuais não substituem medidas confiáveis."
        }
      ]
    }
  },
  {
    "subject": "Biologia",
    "topic": "Imunidade, vacinas e soros",
    "objective": "Compreender defesas inatas e adaptativas e comparar resposta induzida por vacina com recebimento de anticorpos prontos, sem extrapolações médicas.",
    "sections": [
      {
        "title": "Barreiras, células e reconhecimento de antígenos",
        "explanation": "O sistema imunológico reúne barreiras físicas, células e moléculas que protegem o organismo. A pele e certas secreções ajudam a impedir a entrada de agentes; células fagocitárias e processos inflamatórios integram respostas inatas. Linfócitos B e T participam da imunidade adaptativa, na qual populações celulares reconhecem antígenos e podem criar resposta específica. Anticorpos são proteínas produzidas por células derivadas de linfócitos B e exercem funções de reconhecimento e participação na defesa. A resposta imune não se reduz a anticorpos, e sua presença num exame não significa proteção absoluta. O modelo didático distingue fases, mas processos reais dependem de interações complexas entre células, tecidos e condições de saúde. Em provas, convém separar imunidade inata, adaptativa, ativa e passiva.",
        "example": "A pele íntegra limita a entrada de microrganismos e constitui barreira inata. Uma resposta específica de linfócitos após contato com antígeno exemplifica a participação da imunidade adaptativa.",
        "pitfall": "Afirmar que somente anticorpos defendem o organismo ou que encontrar anticorpos garante proteção completa e permanente."
      },
      {
        "title": "Vacinas e formação de memória imunológica",
        "explanation": "Vacinas apresentam antígenos ou instruções para produzi-los de acordo com diferentes tecnologias, estimulando respostas imunes que podem gerar memória específica. Em contato posterior com o agente, componentes da resposta adaptativa podem reagir de modo mais rápido ou eficaz. A proteção varia conforme vacina, doença, esquema de doses e características da pessoa; vacinas podem reduzir risco de doença grave e, em alguns casos, de infecção e transmissão, em intensidades distintas. Não existe uma porcentagem de proteção idêntica para todas. Campanhas e calendários de imunização seguem orientações sanitárias atualizadas, não fórmulas universais de uma aula de biologia. A noção de proteção coletiva depende da doença e da circulação do agente. O aluno deve relacionar mecanismo de memória e finalidade preventiva sem prometer ausência total de doença.",
        "example": "Um modelo escolar descreve uma vacina que estimula linfócitos específicos e forma células de memória. Em exposição futura, o sistema pode responder com maior rapidez, sem que isso garanta que nenhum sintoma ocorrerá.",
        "pitfall": "Confundir vacinação com tratamento imediato de qualquer infecção ou supor que uma dose gera proteção absoluta para toda a vida."
      },
      {
        "title": "Anticorpos prontos: imunização passiva",
        "explanation": "Soros imunológicos e outras preparações de anticorpos podem ser administrados em indicações específicas para fornecer anticorpos já prontos. Isso caracteriza imunização passiva: a proteção ou ação pode ocorrer de maneira mais imediata, mas geralmente é temporária e não produz o mesmo tipo de memória que a imunização ativa. Não se deve equiparar todos os soros, pois indicação, riscos, composição e protocolos diferem. Em situações de exposição a agentes ou toxinas, a conduta cabe a serviços de saúde, não a decisões com base num quadro escolar. O contraste conceitual é quem produziu os anticorpos e qual duração esperada, sem equiparar duração a garantia de eficácia. Nas questões, identificar a relação entre antígeno, linfócitos, memória e anticorpos prontos resolve a maioria dos exemplos clássicos.",
        "example": "Se alguém recebe anticorpos específicos previamente produzidos, o caso ilustra imunização passiva. Se recebe vacina para estimular sua própria resposta, ilustra imunização ativa, sob protocolos próprios.",
        "pitfall": "Achar que soros e vacinas são sinônimos ou que anticorpos prontos sempre induzem memória imune duradoura."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cite uma defesa inata e um componente da resposta adaptativa.",
        "hint": "Pense em barreira física e linfócitos.",
        "solution": "A pele íntegra é barreira inata. Linfócitos B e T integram respostas adaptativas específicas, que podem formar memória imunológica."
      },
      {
        "level": "basic",
        "prompt": "O que significa memória imunológica no contexto de uma vacina?",
        "hint": "Compare respostas ao primeiro e ao contato posterior.",
        "solution": "Trata-se de uma capacidade da resposta adaptativa de reconhecer um antígeno anteriormente encontrado e responder de forma diferenciada e muitas vezes mais rápida."
      },
      {
        "level": "intermediate",
        "prompt": "Compare imunização ativa e passiva quanto à origem dos anticorpos.",
        "hint": "No primeiro caso o organismo responde; no segundo recebe moléculas prontas.",
        "solution": "A ativa estimula o próprio sistema imunológico e pode gerar memória. A passiva oferece anticorpos prontos e normalmente tem efeito temporário."
      },
      {
        "level": "intermediate",
        "prompt": "Por que uma vacina não implica que nenhuma pessoa vacinada ficará doente?",
        "hint": "Considere eficácia variável e tipo de proteção.",
        "solution": "O grau de proteção varia com a vacina, o agente e o indivíduo. Algumas vacinas reduzem principalmente a doença grave, sem impedir todas as infecções."
      },
      {
        "level": "advanced",
        "prompt": "Um estudante diz que detectar anticorpos prova imunidade absoluta. Qual o problema dessa conclusão?",
        "hint": "A imunidade possui vários mecanismos.",
        "solution": "A presença isolada de anticorpos não mostra toda a proteção. Respostas celulares, agente específico e contexto clínico também importam para avaliar eficácia."
      },
      {
        "level": "advanced",
        "prompt": "Por que uma aula não pode orientar qual soro deve ser usado num acidente real?",
        "hint": "Protocolos específicos exigem avaliação profissional.",
        "solution": "Soros têm indicações, riscos e modos de uso que dependem do acidente e da avaliação de serviços de saúde. O conteúdo escolar explica mecanismos, não substitui atendimento."
      }
    ],
    "everyday": {
      "context": "Um mural escolar compara uma campanha de vacinação de rotina a informações sobre soros usados em atendimentos específicos. Um estudante conclui que ambos sempre produzem memória duradoura.",
      "question": "Qual a diferença entre estimular a defesa do próprio organismo e receber anticorpos já preparados?",
      "answer": "A vacinação busca ativar a resposta imune e pode formar memória; a administração de anticorpos prontos caracteriza imunização passiva e costuma oferecer efeito temporário. Indicações reais exigem avaliação profissional.",
      "connections": [
        {
          "subject": "Filosofia",
          "topic": "Argumentação e falácias",
          "reason": "A avaliação de afirmações de saúde exige distinguir evidências de generalizações e identificar raciocínios equivocados."
        },
        {
          "subject": "Sociologia",
          "topic": "Trabalho e divisão social",
          "reason": "Campanhas de imunização dependem de atividades coordenadas de diversos profissionais e instituições de saúde."
        }
      ]
    }
  },
  {
    "subject": "Português",
    "topic": "Checagem de fontes e desinformação",
    "objective": "Avaliar autoria, data, evidências, contexto e circulação de informações, distinguindo fato, opinião, hipótese e manipulação.",
    "sections": [
      {
        "title": "Antes de compartilhar: quem afirma, quando e com base em quê?",
        "explanation": "Uma mensagem pode parecer verdadeira porque tem imagem, números, linguagem técnica ou muitas curtidas. Nenhum desses sinais prova a afirmação. Na checagem, identifique quem publicou, se há autoria ou instituição verificável, qual é a data e se o texto apresenta fontes primárias ou apenas reproduz a fala de alguém. Examine o enunciado exato: uma promessa, previsão, dado medido e opinião não possuem o mesmo estatuto. Também é necessário verificar se informação antiga está sendo usada como se fosse atual. Compartilhamentos em massa podem ampliar uma afirmação falsa sem acrescentar evidências. A checagem responsável consulta documentos pertinentes, pesquisa se outras fontes independentes confirmam o mesmo fato e reconhece quando o material disponível não basta para concluir. Não se deve inferir falsidade apenas porque o conteúdo contraria opiniões pessoais.",
        "example": "Um post diz 'A biblioteca fechou hoje', mas a única foto mostra a porta fechada à noite e não tem data. A imagem não comprova encerramento das atividades no dia em questão; é preciso verificar comunicados e horário oficial.",
        "pitfall": "Tomar aparência profissional, número de curtidas ou presença de um logotipo como garantia de veracidade sem identificar fonte e contexto."
      },
      {
        "title": "Imagens, gráficos e citações fora de contexto",
        "explanation": "Conteúdos enganosos podem misturar elementos verdadeiros com conclusões indevidas. Um gráfico sem eixo identificado pode exagerar pequenas diferenças; uma fotografia real acompanhada de legenda errada pode atribuir um acontecimento ao local ou à data incorretos; uma citação cortada pode inverter o sentido do pronunciamento original. A análise deve localizar o material primário, verificar unidade de medida, período, base de comparação e recorte. Num vídeo, observe se há edição que remove perguntas ou respostas relevantes. A tecnologia permite criar imagens sintéticas, mas a possibilidade de manipulação não autoriza declarar qualquer imagem falsa sem investigação. Interpretações devem indicar o que o registro efetivamente sustenta e quais hipóteses permanecem abertas. Em provas, distinguir informação explícita de inferência é parte central desse trabalho.",
        "example": "Um gráfico mostra aumento de 90 para 95 atendimentos, mas o eixo vertical começa em 89, tornando a diferença visual enorme. O aumento real é de 5 atendimentos; representar a escala de outro modo mudaria a impressão sem alterar os dados.",
        "pitfall": "Concluir que todo gráfico com eixo truncado mente automaticamente ou deixar de conferir se a fonte define período, unidade e população representada."
      },
      {
        "title": "Como justificar uma verificação sem reproduzir boatos",
        "explanation": "Uma checagem clara descreve a alegação, indica qual evidência seria necessária, examina documentos e apresenta conclusão proporcional ao que foi verificado. Nem toda afirmação pode ser rotulada imediatamente como verdadeira ou falsa: algumas estão descontextualizadas, são incompletas ou não dispõem de evidência suficiente. Ao escrever sobre desinformação, evite repetir frases enganosas como se fossem fatos e diferencie erro de interpretação, engano deliberado e sátira; a intenção de quem publica nem sempre é demonstrável. A educação midiática envolve também responsabilidade ética: não divulgar dados privados, respeitar pessoas envolvidas e recorrer a fontes primárias quando possível. A conexão com redação e filosofia aparece ao exigir que a conclusão realmente decorra de premissas verificáveis, não de impressão ou autoridade aparente.",
        "example": "Se uma corrente afirma que uma prova foi cancelada, procure edital e comunicado atualizado do órgão responsável. Na ausência de confirmação, a formulação adequada é 'não encontrei evidência oficial da alteração', em vez de divulgar cancelamento como fato.",
        "pitfall": "Afirmar certeza absoluta quando a fonte não responde à questão ou confundir ausência de prova com prova de que algo jamais aconteceu."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma postagem anônima anuncia suspensão de aulas sem data. Cite dois elementos a verificar.",
        "hint": "Considere autoria e comunicado atual.",
        "solution": "É necessário conferir quem publicou a mensagem e se existe comunicado oficial atualizado da escola. A ausência de data impede confirmar o período alegado."
      },
      {
        "level": "basic",
        "prompt": "Por que muitas curtidas não comprovam que uma notícia seja verdadeira?",
        "hint": "Popularidade e evidência são coisas diferentes.",
        "solution": "Curtidas medem interação com a postagem, não validação de dados. A afirmação precisa ser confrontada com evidências, fontes identificadas e contexto."
      },
      {
        "level": "intermediate",
        "prompt": "Uma foto de rua alagada é publicada como registro de hoje, mas não possui data. Que conclusão é possível?",
        "hint": "A imagem sozinha não mostra quando foi feita.",
        "solution": "A fotografia pode registrar alagamento, mas não permite confirmar que ocorreu hoje. É preciso verificar data, localização e eventual fonte original."
      },
      {
        "level": "intermediate",
        "prompt": "Um gráfico começa o eixo em 99 e apresenta valores 100 e 102. O que deve ser observado?",
        "hint": "Considere escala e valores absolutos.",
        "solution": "O recorte do eixo pode ampliar a diferença visual. É necessário ler valores, unidade e contexto: houve variação de 2 unidades, não crescimento gigantesco implícito no desenho."
      },
      {
        "level": "advanced",
        "prompt": "Uma fonte diz 'não há dados suficientes'. Por que não se deve traduzir por 'está provado que é falso'?",
        "hint": "Compare incerteza com evidência contrária.",
        "solution": "Falta de evidência suficiente significa que a alegação não pôde ser confirmada. Isso é diferente de encontrar evidências consistentes de que o fato não ocorreu."
      },
      {
        "level": "advanced",
        "prompt": "Um vídeo real foi cortado antes da pergunta respondida. Como isso pode mudar a interpretação?",
        "hint": "Reintroduza contexto e sequência de falas.",
        "solution": "Sem a pergunta, a resposta pode parecer afirmar algo diferente do sentido original. Para analisar, consulte o trecho completo e verifique se a edição alterou a relação entre pergunta e resposta."
      }
    ],
    "everyday": {
      "context": "Um grupo de mensagens espalha que a prova de amanhã foi cancelada. A postagem contém um símbolo parecido com o da escola, mas não apresenta autor nem data e nenhum estudante viu comunicado oficial.",
      "question": "Quais verificações devem ocorrer antes de tratar o cancelamento como fato?",
      "answer": "É preciso consultar o canal oficial atualizado da escola, conferir data e autoria e distinguir uma imagem semelhante a logotipo de confirmação institucional. Sem essas evidências, a alegação permanece não comprovada.",
      "connections": [
        {
          "subject": "Português",
          "topic": "Informações explícitas e inferências",
          "reason": "Uma imagem ou frase isolada não sustenta inferências sobre datas, responsáveis e eventos não declarados."
        },
        {
          "subject": "Filosofia",
          "topic": "Argumentação e falácias",
          "reason": "Popularidade, emoção e autoridade aparente não substituem premissas confiáveis para sustentar uma conclusão."
        }
      ]
    }
  },
  {
    "subject": "Literatura",
    "topic": "Modernismo: primeira geração",
    "objective": "Relacionar rupturas estéticas e propostas culturais do primeiro Modernismo brasileiro a linguagem, contexto e projetos de identidade nacional.",
    "sections": [
      {
        "title": "1922, ruptura e experimentação na linguagem",
        "explanation": "A Semana de Arte Moderna de 1922, realizada em São Paulo, é um marco convencional do modernismo brasileiro, mas não inaugurou sozinha todas as mudanças culturais do país. Artistas e escritores questionaram padrões acadêmicos e buscaram novas maneiras de representar experiências urbanas, linguagens e identidades brasileiras. Na chamada primeira geração modernista, destacam-se experimentação formal, versos livres, humor, coloquialidade e crítica a convenções literárias anteriores. Nem todo texto modernista abandona rima ou métrica, assim como nem todo verso livre pertence ao Modernismo. A análise deve reconhecer efeitos produzidos pelas escolhas linguísticas e conectá-los ao contexto de modernização, disputas culturais e desigualdade. A leitura não se resume a decorar nomes de manifestos: exige observar o que uma construção faz o leitor perceber.",
        "example": "Num poema original para estudo, 'A cidade acorda antes do relógio / ônibus discutem com a neblina', o cotidiano urbano, a metáfora e o verso livre podem ilustrar recursos de experimentação, sem constituir citação de um autor modernista histórico.",
        "pitfall": "Afirmar que a Semana de 1922 foi o único evento de criação do modernismo ou que qualquer ausência de rima prova filiação a uma escola."
      },
      {
        "title": "Oswald de Andrade, Mário de Andrade e visões de Brasil",
        "explanation": "Mário de Andrade e Oswald de Andrade desempenharam papéis centrais em debates modernistas, mas tiveram projetos artísticos distintos. A valorização crítica de expressões da fala brasileira e a investigação de tradições culturais aparecem em variados textos do período; não representam uma essência nacional uniforme. O Manifesto da Poesia Pau-Brasil, de 1924, e o Manifesto Antropófago, de 1928, ligados a Oswald, propõem relações originais com influências externas e culturas brasileiras. A ideia de antropofagia cultural não trata de ingestão literal: funciona como metáfora de apropriação e transformação crítica de referências. Ao estudar essas propostas, investigue quem é representado e quem permanece silenciado. A identidade nacional é construção histórica disputada, não dado natural que um movimento artístico possa definir definitivamente.",
        "example": "Uma obra imaginária combina ritmo de publicidade urbana com expressões de fala regional para questionar padrões europeus de prestígio. A mistura pode servir para discutir experimentação cultural, sem dizer que representa todas as regiões brasileiras.",
        "pitfall": "Interpretar antropofagia modernista literalmente ou tomar projetos culturais de escritores como retratos fiéis e completos dos diferentes povos do Brasil."
      },
      {
        "title": "Leitura crítica de poesia, prosa e contexto",
        "explanation": "Para interpretar texto modernista, observe disposição dos versos, registro de linguagem, ironia, enumerações e referências ao cotidiano. A presença de humor pode funcionar como crítica de convenções sociais, mas é preciso demonstrar o efeito com pistas do texto. Modernismo não equivale a escrever sem regras ou a rejeitar toda tradição: autores retomaram formas e repertórios antigos para transformá-los em outros contextos. A comparação com Realismo e Romantismo ajuda a perceber deslocamentos de foco, sem criar fronteiras rígidas: crítica social existe também fora do Modernismo. O período foi heterogêneo, com tensões políticas, artísticas e sociais, exigindo análise por obra e autor. Num vestibular, uma resposta sólida indica o recurso utilizado, o efeito e sua relação com um assunto, evitando atribuir autoria de versos inventados.",
        "example": "Um narrador fictício descreve uma placa oficial com linguagem solene e o diálogo informal de quem espera atendimento na fila. O contraste de registros pode revelar ironia sobre burocracia e hierarquias, exemplificando uma leitura de linguagem e sociedade.",
        "pitfall": "Concluir que experimentalismo significa ausência de sentido ou atribuir a qualquer escritor modernista exatamente a mesma posição política."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Por que a Semana de 1922 é chamada marco, e não origem única do modernismo?",
        "hint": "Transformações artísticas não acontecem num único dia.",
        "solution": "A Semana teve visibilidade simbólica e reuniu propostas de renovação, mas experiências de ruptura já existiam e a consolidação do movimento envolveu processos e autores distintos."
      },
      {
        "level": "basic",
        "prompt": "Cite duas características frequentes da primeira geração modernista na literatura.",
        "hint": "Considere linguagem cotidiana e forma poética.",
        "solution": "Uso de linguagem coloquial e experimentação formal, como verso livre e humor crítico, são características frequentes. Não aparecem obrigatoriamente em toda obra."
      },
      {
        "level": "intermediate",
        "prompt": "O que significa antropofagia cultural no debate modernista, sem leitura literal?",
        "hint": "Pense em transformar influências recebidas.",
        "solution": "Trata-se de metáfora para apropriar e reelaborar criticamente referências culturais, criando respostas próprias. Não significa prática literal de canibalismo."
      },
      {
        "level": "intermediate",
        "prompt": "Um poema usa fala cotidiana e um verso longo sem rima. Ele é obrigatoriamente modernista?",
        "hint": "Característica isolada não basta para classificação.",
        "solution": "Não. Esses recursos aparecem em produções de diferentes períodos. É necessário analisar conjunto de procedimentos, contexto e vínculos da obra antes de classificar."
      },
      {
        "level": "advanced",
        "prompt": "Por que buscar identidade nacional na arte não garante representação de todos os grupos sociais?",
        "hint": "Considere quem escreve e quem é retratado.",
        "solution": "Projetos de identidade são construções situadas e podem valorizar certas experiências enquanto silenciam outras. A análise precisa confrontar formas e perspectivas, sem tratá-las como universais."
      },
      {
        "level": "advanced",
        "prompt": "Compare uso de crítica social em Realismo e primeiro Modernismo sem afirmar que só um movimento critica a sociedade.",
        "hint": "Diferencie procedimentos sem criar exclusividade temática.",
        "solution": "Narrativas realistas frequentemente exploram contradições psicológicas e sociais, enquanto modernistas podem intensificar experimentação de linguagem e humor. Crítica social pode existir em ambos, com formas variadas."
      }
    ],
    "everyday": {
      "context": "Em uma exposição de arte escolar, um poema usa linguagem de conversa, humor e versos sem rima para descrever o trânsito de uma cidade. Um visitante diz que o texto 'não é literatura' porque não segue o modelo de poemas solenes.",
      "question": "Que transformação estética do Modernismo ajuda a compreender a escolha de linguagem cotidiana e de verso livre?",
      "answer": "A primeira geração modernista questionou convenções e explorou formas e registros de linguagem diferentes, incluindo fala brasileira e cotidiano urbano. A avaliação depende do efeito produzido, não só da presença de rima.",
      "connections": [
        {
          "subject": "Literatura",
          "topic": "Realismo brasileiro",
          "reason": "A comparação entre movimentos ajuda a identificar procedimentos diferentes de crítica social sem reduzir cada período a uma única técnica."
        },
        {
          "subject": "Arte",
          "topic": "Arte e tecnologia",
          "reason": "Mudanças de formas e meios de expressão mostram como a linguagem artística se transforma em diálogo com seu contexto."
        }
      ]
    }
  },
  {
    "subject": "Redação",
    "topic": "Contra-argumentação",
    "objective": "Reconhecer e responder objeções de modo fiel e fundamentado, sem caricaturar posições alternativas ou afastar-se da tese.",
    "sections": [
      {
        "title": "O que é uma objeção pertinente?",
        "explanation": "Contra-argumentar é considerar uma possível objeção à tese e responder a ela com razões adequadas. Isso não significa abandonar o ponto de vista nem criar um adversário imaginário fácil de derrotar. Uma objeção pertinente apresenta limite, condição ou custo real de uma proposta. Por exemplo, ao defender maior uso de bibliotecas, alguém pode observar que ampliar horários exige orçamento e trabalhadores; a objeção não prova que a ampliação seja inútil, mas revela aspecto que a argumentação precisa enfrentar. Antes de responder, formule a posição contrária de modo fiel, evitando exageros como 'quem discorda não liga para educação'. Em textos de vestibular, o espaço é limitado: contra-argumentação só deve ser incluída quando acrescenta compreensão e fortalece a defesa central, não para preencher linhas.",
        "example": "Tese: ampliar acesso a laboratórios escolares. Objeção plausível: custos de equipamento e manutenção. Resposta: priorizar adequações por etapas, com planejamento e formação de profissionais. O texto reconhece o limite e propõe um encaminhamento.",
        "pitfall": "Transformar uma objeção razoável numa posição absurda para responder mais facilmente, criando a falácia do espantalho."
      },
      {
        "title": "Estrutura: reconhecer, analisar e responder",
        "explanation": "Uma forma didática de construir contra-argumentação é apresentar a objeção com precisão, avaliar o que ela acerta e responder apontando dados, distinções ou soluções. Conectivos concessivos como 'embora' e 'ainda que' podem introduzir o reconhecimento, enquanto 'entretanto' ou 'contudo' organizam a resposta, mas a relação lógica deve ser real. Uma concessão não elimina automaticamente a tese. Evite citar números sem fonte ou prometer efeitos garantidos; o argumento pode ser consistente usando mecanismos bem descritos e limites assumidos. Se a objeção é correta e decisiva contra uma proposta específica, uma boa redação pode ajustar a própria tese em vez de insistir em afirmação indefensável. O objetivo é demonstrar raciocínio, não vencer uma discussão por artifício retórico.",
        "example": "'Embora a ampliação do transporte escolar exija recursos, o diagnóstico de rotas e horários pode orientar prioridades de atendimento.' A objeção de custo é reconhecida sem abandonar a análise de barreiras de acesso.",
        "pitfall": "Inserir 'por outro lado' sem apresentar outro lado real ou responder à objeção com afirmação que não se relaciona ao problema levantado."
      },
      {
        "title": "Precisão, repertório e coerência do texto inteiro",
        "explanation": "A contra-argumentação deve dialogar com a tese, os argumentos desenvolvidos e a conclusão. Em tema sobre acesso digital, reconhecer limitações de infraestrutura é diferente de afirmar que tecnologia não tem valor; uma boa resposta indica quais usos, condições e públicos estão sendo considerados. Referências históricas, pesquisas e conceitos podem ajudar, desde que sejam pertinentes e verificáveis. A resposta deve respeitar o princípio de não generalização: um exemplo isolado não refuta uma tendência ampla, assim como uma tendência estatística não explica todas as experiências individuais. Releia o parágrafo e pergunte: a objeção foi apresentada com fidelidade? A resposta enfrenta seu ponto central? O leitor entende a relação com a tese? Se o parágrafo criar novos problemas sem solução, simplifique e priorize o argumento principal.",
        "example": "Tese: oferecer opções de leitura digital na escola. Objeção: parte dos estudantes não tem internet fora da escola. Resposta: manter acesso presencial e materiais offline. A proposta é ajustada para enfrentar a limitação sem desconsiderá-la.",
        "pitfall": "Supor que citar um pensador famoso, sem explicar o conceito nem responder ao problema, seja refutação suficiente."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Explique o que diferencia uma objeção pertinente de um ataque pessoal.",
        "hint": "Uma trata do argumento, outra da pessoa.",
        "solution": "Uma objeção pertinente discute limites ou evidências da proposta; ataque pessoal desvia para características de quem a defende sem demonstrar que a tese é inadequada."
      },
      {
        "level": "basic",
        "prompt": "Numa proposta para ampliar horários da biblioteca, qual é uma objeção plausível?",
        "hint": "Considere recursos e funcionamento.",
        "solution": "A necessidade de equipe e orçamento para horário ampliado é uma objeção pertinente. Ela permite planejar viabilidade em vez de declarar que bibliotecas não são úteis."
      },
      {
        "level": "intermediate",
        "prompt": "Complete uma concessão coerente: 'Embora a medida tenha custos, ...'.",
        "hint": "Responda ao custo com prioridade ou planejamento.",
        "solution": "Uma possibilidade é: 'Embora a medida tenha custos, o levantamento das necessidades pode orientar sua implementação gradual'. O texto reconhece o limite e propõe mecanismo."
      },
      {
        "level": "intermediate",
        "prompt": "Por que 'Quem discorda de transporte público odeia estudantes' é uma resposta ruim?",
        "hint": "Verifique se há caricatura da objeção.",
        "solution": "A frase atribui motivação extrema sem evidência e não responde a custos, rotas ou alternativas. É espantalho e não fortalece o argumento sobre acesso."
      },
      {
        "level": "advanced",
        "prompt": "Responda a uma objeção de falta de internet à oferta de conteúdo escolar digital.",
        "hint": "Reconheça limitação e proponha alternativa concreta.",
        "solution": "O acesso digital pode ampliar opções, mas desigualdade de conectividade exige material offline e apoio presencial. Assim, o argumento preserva a utilidade sem ignorar o grupo excluído."
      },
      {
        "level": "advanced",
        "prompt": "Quando uma objeção deveria levar à revisão da tese em vez de simples refutação?",
        "hint": "Considere evidência realmente incompatível com o enunciado principal.",
        "solution": "Quando evidências consistentes mostram que a tese é ampla demais ou pressupõe condição falsa, é melhor restringir ou reformular a afirmação do que insistir nela sem justificativa."
      }
    ],
    "everyday": {
      "context": "Uma turma propõe ampliar a biblioteca para o período noturno. Parte dos estudantes apoia a medida; outros lembram que haveria custos de pessoal e segurança. A discussão vira troca de acusações.",
      "question": "Como reconhecer a objeção de custos e responder sem abandonar a ideia nem ridicularizar quem discorda?",
      "answer": "A objeção é pertinente porque ampliar horário depende de recursos. Uma resposta pode propor diagnóstico da demanda, avaliação de custos e ampliação gradual, mantendo a tese condicionada à viabilidade.",
      "connections": [
        {
          "subject": "Português",
          "topic": "Coesão sequencial e conectivos",
          "reason": "Conectivos de concessão e contraste organizam o reconhecimento de uma objeção e a resposta sem quebrar a lógica."
        },
        {
          "subject": "Filosofia",
          "topic": "Argumentação e falácias",
          "reason": "Evitar ataques pessoais e espantalhos torna a refutação intelectualmente válida e proporcional à evidência."
        }
      ]
    }
  },
  {
    "subject": "Inglês",
    "topic": "Orações condicionais em inglês",
    "objective": "Interpretar condição e consequência em zero, first, second e third conditionals, evitando confundir hipótese, regra geral e contrafactual.",
    "sections": [
      {
        "title": "Condição e resultado: zero e first conditional",
        "explanation": "Orações condicionais apresentam uma condição e uma consequência, frequentemente ligadas por 'if'. O chamado zero conditional descreve relações gerais ou habituais, com present simple nas duas partes em muitos usos: 'If water reaches its boiling point under the specified pressure, it boils'. Esse exemplo requer condições físicas explícitas, pois o ponto de ebulição muda com a pressão. O first conditional costuma tratar possibilidade futura: 'If it rains tomorrow, we will cancel the match'. É comum usar present simple depois de 'if' e 'will' na oração principal, sem que essa seja a única organização possível da linguagem real. O enunciado não confirma que vai chover; apenas apresenta o que ocorrerá se chover. Interpretação de placas e avisos depende de perceber quando a condição não foi satisfeita.",
        "example": "'If you submit the form today, we will review it tomorrow' não confirma que o formulário foi enviado. Estabelece consequência futura condicionada ao envio no dia indicado.",
        "pitfall": "Tratar 'if' como prova de que o fato ocorreu ou traduzir uma condição como acontecimento já confirmado."
      },
      {
        "title": "Second conditional e hipóteses menos reais",
        "explanation": "O second conditional frequentemente expressa situação imaginada, improvável ou distante do presente: 'If I had more time, I would study French'. O uso do simple past na oração com 'if' não descreve necessariamente passado cronológico; ajuda a marcar distância hipotética. A oração principal usa com frequência 'would' mais verbo base. Em construções com 'be', aparece frequentemente 'If I were', especialmente em registro formal, embora ocorram variações. A diferença entre first e second conditional não é uma porcentagem exata de chance: depende da perspectiva do falante e do contexto. Para analisar uma frase, identifique se ela trata plano aberto ao futuro, regra geral ou imaginação sobre situação diferente da atual.",
        "example": "'If I knew the answer, I would explain it' sugere que o falante não sabe a resposta no contexto presente. 'If I learn the answer, I will explain it' apresenta possibilidade futura.",
        "pitfall": "Interpretar 'if I had' sempre como relato de algo que aconteceu no passado ou traduzir 'would' como obrigação."
      },
      {
        "title": "Third conditional e alternativas ao passado",
        "explanation": "O third conditional permite imaginar resultado diferente para algo passado: 'If I had left earlier, I would have caught the bus'. A forma mais ensinada usa past perfect na oração de condição e 'would have' + particípio no resultado. O falante pressupõe, no exemplo, que não saiu antes e não pegou o ônibus, embora contextos reais possam ser mais complexos. É importante não inverter causa e consequência nem confundir 'had left' com past simple. Condicionais são instrumentos discursivos para regras, planos e reflexão retrospectiva, não fórmulas de tradução palavra a palavra. Textos argumentativos podem usar condicionais para ponderar riscos e benefícios, mas a relação causal alegada ainda precisa de evidência.",
        "example": "'If the student had checked the date, they would have arrived on time' imagina uma verificação anterior que não aconteceu e um resultado passado diferente, conforme a situação descrita.",
        "pitfall": "Usar 'would have' na oração com 'if' como padrão obrigatório ou tomar cenário contrafactual como relato factual."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em 'If you study, you learn more', qual relação está sendo expressa?",
        "hint": "Observe a condição e o resultado habitual.",
        "solution": "A frase apresenta relação condicional geral ou habitual: estudar é colocado como condição para aprender mais. O enunciado não informa se alguém específico estudou."
      },
      {
        "level": "basic",
        "prompt": "Complete: 'If it rains tomorrow, we ___ stay home' usando future result.",
        "hint": "A oração principal pode usar will.",
        "solution": "Uma construção adequada é 'we will stay home'. A oração com if apresenta possibilidade futura, não chuva já confirmada."
      },
      {
        "level": "intermediate",
        "prompt": "Compare 'If I have money, I will travel' e 'If I had money, I would travel'.",
        "hint": "Diferencie possibilidade futura e cenário hipotético.",
        "solution": "A primeira apresenta condição futura possível. A segunda imagina uma situação diferente ou distante da atual, frequentemente sugerindo que o falante não dispõe do dinheiro."
      },
      {
        "level": "intermediate",
        "prompt": "Por que 'If I knew' não é obrigatoriamente passado cronológico?",
        "hint": "O second conditional marca distância hipotética.",
        "solution": "Nesse padrão, a forma passada pode indicar irrealidade ou distância em relação ao presente. É a função discursiva, e não só a forma verbal, que orienta a leitura."
      },
      {
        "level": "advanced",
        "prompt": "Explique a ordem dos eventos em 'If I had left earlier, I would have caught the bus'.",
        "hint": "O resultado é alternativa imaginada para um passado concluído.",
        "solution": "A frase imagina que uma saída mais cedo poderia ter levado ao ônibus, mas apresenta cenário contrário ao ocorrido no contexto. Usa past perfect e would have + particípio."
      },
      {
        "level": "advanced",
        "prompt": "Traduza o sentido sem afirmar fato: 'If the lab is open, students can enter'.",
        "hint": "Não sabemos se o laboratório está aberto.",
        "solution": "'Se o laboratório estiver aberto, os estudantes poderão entrar'. A permissão depende da condição; a frase não confirma o estado atual do laboratório."
      }
    ],
    "everyday": {
      "context": "Uma escola envia um aviso em inglês: 'If the library closes early, students will receive a notification'. Alguns alunos concluem que a biblioteca já vai fechar, embora o aviso não confirme isso.",
      "question": "O que a estrutura com 'if' realmente informa sobre o fechamento e a notificação?",
      "answer": "A frase apresenta uma possibilidade e sua consequência: caso a biblioteca feche mais cedo, haverá notificação. Não afirma que o fechamento ocorrerá.",
      "connections": [
        {
          "subject": "Inglês",
          "topic": "Verbos modais",
          "reason": "Modais ajudam a expressar possibilidade, obrigação e aconselhamento, complementando as condições de um aviso."
        },
        {
          "subject": "Português",
          "topic": "Coesão sequencial e conectivos",
          "reason": "A lógica de condição e consequência aparece também em estruturas com 'se', 'caso' e 'portanto' em português."
        }
      ]
    }
  },
  {
    "subject": "História",
    "topic": "Redemocratização e Constituição de 1988",
    "objective": "Compreender a transição política brasileira após a ditadura militar, a Assembleia Constituinte e a ampliação de direitos na Constituição de 1988, distinguindo previsão jurídica de efetivação.",
    "sections": [
      {
        "title": "Abertura política e mobilização pela democracia",
        "explanation": "A transição brasileira do regime militar para a ordem democrática foi um processo gradual e disputado, que envolveu mobilização de movimentos sociais, entidades profissionais, sindicatos, estudantes, grupos pela anistia e setores políticos diversos. A campanha Diretas Já, em 1983–1984, reuniu manifestações por eleições presidenciais diretas, mas a proposta de emenda Dante de Oliveira não alcançou os votos necessários na Câmara dos Deputados em 1984. A eleição presidencial de 1985 ocorreu pelo Colégio Eleitoral, de maneira indireta; Tancredo Neves foi eleito, mas adoeceu e não tomou posse, e José Sarney assumiu a Presidência. É importante distinguir o retorno ao governo civil da consolidação das instituições democráticas, que exigiu mudanças legais e continuou sendo objeto de debate. A história desse período não resulta da ação isolada de uma liderança.",
        "example": "Uma linha do tempo pode registrar Diretas Já em 1983–1984, eleição presidencial indireta em 1985, Assembleia Constituinte instalada em 1987 e promulgação da Constituição em 1988. Cada marco representa uma etapa institucional diferente.",
        "pitfall": "Afirmar que as manifestações de 1984 produziram imediatamente eleição presidencial direta em 1985 ou confundir posse de um governo civil com realização plena de todos os direitos."
      },
      {
        "title": "Constituinte, direitos e organização do Estado",
        "explanation": "A Assembleia Nacional Constituinte, instalada em 1987, elaborou a Constituição promulgada em 5 de outubro de 1988. Conhecida como Constituição Cidadã, ela consolidou fundamentos democráticos, ampliou direitos e garantias e estruturou competências dos poderes e entes federativos. Direitos sociais, participação política e princípios para políticas públicas ganharam centralidade, incluindo disposições sobre saúde e educação. A Constituição estabeleceu a saúde como direito de todos e dever do Estado, base para a organização do Sistema Único de Saúde, cuja regulamentação foi desenvolvida posteriormente. O voto é obrigatório para eleitores de 18 a 70 anos alfabetizados, com exceções previstas, e facultativo para determinados grupos, como pessoas analfabetas, maiores de 70 anos e jovens de 16 e 17 anos, conforme as regras constitucionais. Discutir cidadania exige ler dispositivos e sua aplicação histórica.",
        "example": "Uma escola debate direito à educação. A Constituição fornece normas e deveres estatais, mas a existência do direito escrito não prova que todos os estudantes tenham escola acessível e condições materiais iguais em qualquer município.",
        "pitfall": "Confundir promulgação de um direito com sua implementação imediata e uniforme ou atribuir à Constituição normas detalhadas de serviços que dependem de regulamentação."
      },
      {
        "title": "Direitos formais, participação e permanências",
        "explanation": "A democratização não apaga automaticamente desigualdades históricas, disputas de memória e desafios de participação. O período posterior a 1988 envolve eleições diretas, debates sobre políticas sociais, direitos de grupos diversos e atuação de instituições de fiscalização e representação. Para avaliar um direito, diferencie garantia constitucional, legislação infraconstitucional, implementação administrativa e acesso efetivo. Uma pesquisa sobre uma unidade de saúde, por exemplo, precisa verificar se existe serviço, atendimento disponível, qualidade, transporte e recursos, não apenas citar o texto legal. Comparar experiências de grupos e regiões ajuda a evitar generalizações. A leitura crítica também deve considerar que a Constituição pode ser emendada por procedimentos específicos, portanto normas e políticas públicas podem mudar ao longo do tempo sem que a origem histórica de 1988 perca relevância.",
        "example": "Um município pode reconhecer formalmente direitos de acessibilidade e ainda possuir prédios públicos com barreiras físicas. A análise histórica e cívica distingue norma, fiscalização e execução, sem concluir que o direito é inexistente por causa da falha de implementação.",
        "pitfall": "Afirmar que a Constituição sozinha resolveu problemas de representação, saúde ou educação ou que direitos sociais dependem exclusivamente da vontade de quem os utiliza."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em que data foi promulgada a Constituição brasileira conhecida como Cidadã?",
        "hint": "Considere o mês de outubro de 1988.",
        "solution": "A Constituição foi promulgada em 5 de outubro de 1988. O texto resultou de processo constituinte iniciado em 1987, no contexto da redemocratização."
      },
      {
        "level": "basic",
        "prompt": "O movimento Diretas Já defendia qual mudança política no início dos anos 1980?",
        "hint": "Diferencie eleição direta e escolha por colégio eleitoral.",
        "solution": "Defendia eleições diretas para presidente da República. A eleição presidencial de 1985 ainda ocorreu de modo indireto, pelo Colégio Eleitoral."
      },
      {
        "level": "intermediate",
        "prompt": "Por que a vitória da campanha Diretas Já não deve ser descrita como eleição direta de 1985?",
        "hint": "A emenda não recebeu aprovação suficiente.",
        "solution": "A proposta de emenda para eleição direta não foi aprovada em 1984; em 1985, a escolha ocorreu indiretamente. O movimento foi importante na mobilização democrática sem produzir aquela eleição direta imediata."
      },
      {
        "level": "intermediate",
        "prompt": "Explique a relação entre Constituição de 1988 e direito à saúde.",
        "hint": "Separe direito constitucional e sistema organizado.",
        "solution": "A Constituição reconheceu saúde como direito de todos e dever do Estado, fundamento da organização do SUS. A prestação concreta do serviço depende também de regulamentação e implementação."
      },
      {
        "level": "advanced",
        "prompt": "Um estudante diz que uma lei garante igualdade de acesso, logo todos já têm atendimento igual. Avalie.",
        "hint": "Distinga texto normativo de condições reais.",
        "solution": "A garantia jurídica define deveres e direitos, mas não prova execução uniforme. É preciso verificar infraestrutura, recursos, distâncias, gestão e condições materiais de acesso."
      },
      {
        "level": "advanced",
        "prompt": "Compare o fim do governo militar e a consolidação democrática como processos históricos.",
        "hint": "Considere 1985, 1987 e 1988.",
        "solution": "O retorno ao governo civil ocorreu em 1985; a elaboração e promulgação da Constituição entre 1987 e 1988 estruturaram uma nova ordem jurídica. A efetivação democrática continuou sujeita a disputas."
      }
    ],
    "everyday": {
      "context": "Durante uma visita a uma unidade de saúde, estudantes discutem por que o atendimento público é apresentado como direito e por que a distância até a unidade ainda pode dificultar o acesso de algumas famílias.",
      "question": "O que a Constituição de 1988 garante e por que isso não elimina imediatamente todas as barreiras de atendimento?",
      "answer": "A Constituição reconhece a saúde como direito de todos e dever do Estado. A efetivação exige regulamentação, recursos, profissionais, infraestrutura e acesso territorial; o direito formal não resolve sozinho essas condições.",
      "connections": [
        {
          "subject": "História",
          "topic": "Abolição e pós-abolição",
          "reason": "Os dois processos históricos mostram a importância de diferenciar reconhecimento jurídico e igualdade material efetiva."
        },
        {
          "subject": "Geografia",
          "topic": "Segregação socioespacial",
          "reason": "A distribuição territorial de equipamentos e transportes ajuda a compreender por que um direito legal pode ter acesso desigual."
        }
      ]
    }
  },
  {
    "subject": "Geografia",
    "topic": "Mudanças climáticas globais",
    "objective": "Explicar a intensificação antrópica do efeito estufa, distinguir variabilidade meteorológica de tendência climática e comparar mitigação com adaptação.",
    "sections": [
      {
        "title": "Efeito estufa natural e intensificação humana",
        "explanation": "O efeito estufa é processo físico natural pelo qual gases atmosféricos absorvem e emitem radiação infravermelha, contribuindo para a temperatura da superfície terrestre. A presença desse mecanismo é importante para a vida; o problema climático contemporâneo relaciona-se à intensificação causada principalmente por emissões humanas de gases como dióxido de carbono e metano e por mudanças no uso da terra. Combustão de combustíveis fósseis, desmatamento e certas atividades agropecuárias têm participações diferentes conforme local e período. O clima é descrito por padrões de longo prazo, diferentemente do tempo meteorológico de um dia. Uma tarde fria não refuta tendência de aquecimento global; também não se deve atribuir automaticamente todo evento extremo a uma única causa sem estudo específico.",
        "example": "Uma cidade pode ter uma semana com temperaturas abaixo da média histórica e ainda experimentar tendência de aquecimento em séries de décadas. A comparação exige observações de longo prazo e métodos estatísticos adequados.",
        "pitfall": "Afirmar que o efeito estufa é inteiramente artificial ou que um episódio frio elimina evidências de mudanças climáticas."
      },
      {
        "title": "Sistemas climáticos, impactos e desigualdades",
        "explanation": "Mudanças na temperatura média global podem influenciar precipitação, ondas de calor, disponibilidade de água e riscos de eventos extremos, mas os efeitos variam por região e por tipo de fenômeno. Processos de circulação atmosférica, correntes oceânicas, relevo e uso do solo influenciam condições locais. Além de perigos físicos, o risco depende da exposição e da vulnerabilidade das populações: comunidades sem infraestrutura de drenagem, moradia segura ou acesso a serviços podem sofrer mais danos diante de evento similar. O conhecimento geográfico combina observações, modelos e dados de múltiplas fontes; ele não autoriza previsões exatas sobre cada cidade sem informação adicional. Em provas, conecte o mecanismo climático ao tipo de impacto e reconheça que desigualdade social altera as consequências.",
        "example": "Duas áreas da mesma cidade podem receber chuva intensa semelhante, mas a presença de encostas ocupadas, drenagem insuficiente ou áreas impermeabilizadas altera a exposição a deslizamentos e alagamentos.",
        "pitfall": "Concluir que todo lugar terá o mesmo tipo de mudança climática ou que fenômenos extremos possuem impacto independente da ocupação territorial."
      },
      {
        "title": "Mitigação, adaptação e avaliação de propostas",
        "explanation": "Mitigação reúne medidas para reduzir emissões de gases de efeito estufa ou ampliar remoção de carbono da atmosfera; adaptação busca diminuir danos e aumentar capacidade de lidar com impactos climáticos já existentes ou esperados. Melhorar eficiência energética e diminuir emissões de transportes são exemplos de mitigação quando realmente reduzem gases; revisar drenagem e sistemas de alerta pode ser adaptação. Algumas iniciativas oferecem ambos os benefícios, mas não se deve usar os termos como sinônimos. Uma proposta deve apresentar responsável, mecanismo e indicadores realistas, além de reconhecer limitações de custo, escala e contexto. As decisões envolvem ciência, planejamento público e participação social, sendo inadequado atribuir responsabilidade igual a populações que emitem quantidades muito diferentes e possuem meios de ação desiguais.",
        "example": "Um município pode melhorar a drenagem de áreas sujeitas a inundações como adaptação e investir em ônibus com menores emissões por passageiro como mitigação, desde que a comparação de impactos seja efetivamente demonstrada.",
        "pitfall": "Chamar qualquer obra de mitigação sem mostrar redução de emissões ou prometer que uma medida local elimina o aquecimento global."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Explique por que o efeito estufa não é um fenômeno inteiramente ruim.",
        "hint": "Considere sua função natural no balanço de energia da Terra.",
        "solution": "O efeito estufa natural contribui para manter temperaturas compatíveis com a vida. A preocupação atual envolve sua intensificação por atividades humanas que aumentam concentrações de gases."
      },
      {
        "level": "basic",
        "prompt": "Uma frente fria isolada refuta o aquecimento global? Justifique.",
        "hint": "Separe tempo meteorológico e clima.",
        "solution": "Não. Uma frente fria descreve condições de curto prazo numa região. Tendências climáticas são avaliadas por séries e observações de longo prazo, em escala adequada."
      },
      {
        "level": "intermediate",
        "prompt": "Classifique revisão de drenagem urbana e redução de emissões do transporte como adaptação ou mitigação.",
        "hint": "Uma reduz impactos; outra atua na causa climática.",
        "solution": "Revisar drenagem para enfrentar chuvas intensas é adaptação. Reduzir emissões por transporte é mitigação, quando a política efetivamente diminui gases."
      },
      {
        "level": "intermediate",
        "prompt": "Por que duas comunidades expostas à mesma chuva podem apresentar danos diferentes?",
        "hint": "Analise exposição e vulnerabilidade.",
        "solution": "Ocupação de áreas de risco, qualidade da moradia, drenagem e recursos de resposta alteram a vulnerabilidade. O fenômeno físico não determina sozinho o dano social."
      },
      {
        "level": "advanced",
        "prompt": "Uma campanha afirma que plantar dez árvores resolverá o aquecimento do planeta. Avalie.",
        "hint": "Compare escala da medida e causas globais.",
        "solution": "Árvores podem oferecer benefícios locais e contribuir para remoção de carbono, mas dez árvores não anulam emissões globais nem resolvem causas estruturais. Escala e manutenção importam."
      },
      {
        "level": "advanced",
        "prompt": "Por que atribuir a causa de um alagamento específico apenas às mudanças climáticas é precipitado?",
        "hint": "Considere impermeabilização, drenagem e estudo de atribuição.",
        "solution": "O alagamento depende de precipitação, ocupação e infraestrutura local, entre outros fatores. Avaliar contribuição da mudança climática exige dados e análise especializada, não apenas coincidência temporal."
      }
    ],
    "everyday": {
      "context": "Duas ruas de uma cidade recebem uma chuva intensa semelhante. Uma delas apresenta alagamento recorrente e a outra tem boa drenagem. Um vídeo atribui toda a diferença exclusivamente ao aquecimento global.",
      "question": "Que fatores locais precisam ser considerados e como distinguir adaptação urbana de redução de emissões?",
      "answer": "Impermeabilização, ocupação e drenagem podem explicar parte da diferença. Melhorar a drenagem é adaptação; reduzir emissões de gases estufa é mitigação. A contribuição climática para eventos exige análise.",
      "connections": [
        {
          "subject": "Ciências",
          "topic": "Ciclos da água e do carbono",
          "reason": "O ciclo hidrológico e o ciclo do carbono ajudam a explicar precipitação e circulação de carbono em sistemas naturais."
        },
        {
          "subject": "Geografia",
          "topic": "Segregação socioespacial",
          "reason": "Diferenças de infraestrutura e vulnerabilidade territorial influenciam como eventos climáticos afetam a população."
        }
      ]
    }
  },
  {
    "subject": "Ciências",
    "topic": "Ciclos da água e do carbono",
    "objective": "Representar etapas do ciclo da água e do ciclo do carbono, distinguindo circulação da matéria, transferência de energia e mudanças humanas nos fluxos.",
    "sections": [
      {
        "title": "O ciclo da água no ambiente",
        "explanation": "A água circula entre oceanos, corpos d'água, solo, seres vivos e atmosfera por processos como evaporação, transpiração, condensação, precipitação, infiltração e escoamento superficial. A evaporação transforma água líquida em vapor, enquanto a condensação forma gotículas sob condições adequadas; nenhuma dessas mudanças altera a identidade química H₂O. A evapotranspiração reúne componentes da evaporação e da transpiração da vegetação. Nem toda chuva infiltra no solo, pois impermeabilização, intensidade da precipitação, relevo e características do terreno influenciam destinos da água. O ciclo não significa percurso idêntico para toda molécula nem garantia de água potável em qualquer etapa. O consumo humano, a qualidade da água e o abastecimento dependem de outros processos de tratamento, captação e gestão.",
        "example": "Depois de uma chuva, parte da água de um jardim infiltra no solo, parte escoa para uma calçada e parte pode voltar à atmosfera posteriormente por evaporação e transpiração. A proporção depende das condições locais.",
        "pitfall": "Afirmar que toda água precipitada chega aos rios ou que a evaporação remove automaticamente todos os contaminantes de qualquer sistema real."
      },
      {
        "title": "Carbono: fotossíntese, respiração e decomposição",
        "explanation": "O carbono está presente no dióxido de carbono atmosférico, na matéria orgânica, em águas e sedimentos, em rochas e em combustíveis fósseis. Na fotossíntese, organismos produtores incorporam carbono inorgânico em moléculas orgânicas, usando energia luminosa. Respiração, decomposição e combustão podem devolver CO₂ ao ambiente em quantidades e condições diferentes. O carbono também circula por trocas entre atmosfera e oceanos, além de processos geológicos de longo prazo. A matéria circula entre reservatórios, mas a energia capturada na fotossíntese flui e se dissipa; não é reciclada do mesmo modo. Em uma cadeia alimentar, o carbono da biomassa pode passar de produtores a consumidores e decompositores, conectando ecologia e química. É essencial não imaginar um único circuito rápido e fechado para todo átomo de carbono.",
        "example": "Uma planta incorpora carbono do CO₂ em matéria orgânica; quando partes da planta são consumidas e posteriormente decompostas, parte desse carbono pode retornar ao ambiente como CO₂ por processos metabólicos.",
        "pitfall": "Afirmar que o carbono circula apenas por animais e plantas, sem oceanos e rochas, ou confundir reciclagem de matéria com reciclagem de energia."
      },
      {
        "title": "Alterações humanas e relações entre ciclos",
        "explanation": "Desmatamento, impermeabilização urbana, mudanças na agricultura e combustão de combustíveis fósseis alteram fluxos dos ciclos da água e do carbono. Reduzir cobertura vegetal pode modificar evapotranspiração, infiltração, escoamento e armazenamento de carbono, mas a magnitude depende do ecossistema e de condições locais. Emissão de CO₂ pela queima de carbono fóssil desloca carbono armazenado por longos períodos para a atmosfera. A conexão com mudanças climáticas exige compreender balanços em escala de tempo e múltiplos gases, não atribuir cada chuva a um único processo. Projetos locais de conservação do solo e vegetação podem oferecer benefícios, mas não equivalem à restauração integral do sistema global. Na análise de problemas, distinga processos físicos, químicos e biológicos e reconheça a escala envolvida em cada um.",
        "example": "Numa área hipotética de solo anteriormente permeável que recebe pavimento, menos água pode infiltrar e mais escoar superficialmente durante chuva intensa. Isso modifica caminhos locais da água sem suspender o ciclo hidrológico global.",
        "pitfall": "Concluir que a urbanização interrompe o ciclo da água ou que uma intervenção isolada consegue normalizar todos os fluxos de carbono."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cite três processos do ciclo da água e descreva a direção de um deles.",
        "hint": "Considere evaporação, condensação e precipitação.",
        "solution": "Evaporação, condensação e precipitação são processos do ciclo. Na evaporação, água líquida passa para o estado gasoso, podendo alcançar a atmosfera."
      },
      {
        "level": "basic",
        "prompt": "Qual processo incorpora carbono do CO₂ em matéria orgânica de plantas?",
        "hint": "Ocorre em organismos produtores sob energia luminosa.",
        "solution": "A fotossíntese incorpora carbono inorgânico em compostos orgânicos. Não significa que todo carbono de uma planta venha diretamente do solo."
      },
      {
        "level": "intermediate",
        "prompt": "Por que uma calçada impermeável pode aumentar o escoamento durante chuva?",
        "hint": "Compare infiltração no solo com pavimento.",
        "solution": "O pavimento pode reduzir a infiltração e favorecer água escoando pela superfície. A magnitude depende de declividade, chuva e drenagem disponível."
      },
      {
        "level": "intermediate",
        "prompt": "Explique como decompositores participam do ciclo do carbono.",
        "hint": "Eles transformam matéria orgânica e respiram.",
        "solution": "Decompositores utilizam matéria orgânica e podem liberar CO₂ por metabolismo, transformando carbono de resíduos em formas que seguem circulando no ambiente."
      },
      {
        "level": "advanced",
        "prompt": "Por que energia e carbono não devem ser descritos como ciclos idênticos num ecossistema?",
        "hint": "Matéria se conserva e energia pode ser dissipada como calor.",
        "solution": "Átomos de carbono podem circular entre reservatórios; energia entra, sofre transformações e é dissipada, sem retornar integralmente à forma inicial por reciclagem."
      },
      {
        "level": "advanced",
        "prompt": "Relacione a queima de combustíveis fósseis a uma mudança no ciclo do carbono.",
        "hint": "Pense em carbono geológico armazenado por longos períodos.",
        "solution": "A combustão transfere carbono antes armazenado em reservatórios geológicos para formas atmosféricas, inclusive CO₂, alterando fluxos e contribuindo para intensificação do efeito estufa."
      }
    ],
    "everyday": {
      "context": "Durante uma chuva forte, a água desaparece rapidamente num jardim de terra, mas escorre pela calçada pavimentada. A turma também investiga como as plantas do jardim participam do ciclo do carbono.",
      "question": "Qual é a relação entre infiltração, evapotranspiração e fotossíntese sem confundir ciclo da água com ciclo do carbono?",
      "answer": "O solo pode permitir infiltração, e plantas contribuem para transpiração e fotossíntese. A água circula por mudanças físicas e fluxos; o carbono é incorporado em matéria orgânica e retorna por processos biológicos e químicos.",
      "connections": [
        {
          "subject": "Geografia",
          "topic": "Mudanças climáticas globais",
          "reason": "A circulação de água e de carbono se relaciona a padrões climáticos, emissões e respostas ambientais em diferentes escalas."
        },
        {
          "subject": "Ciências",
          "topic": "Cadeias e teias alimentares",
          "reason": "A fotossíntese incorpora carbono em produtores, que alimentam níveis tróficos, enquanto decompositores participam da reciclagem de matéria."
        }
      ]
    }
  },
  {
    "subject": "Sociologia",
    "topic": "Indústria cultural e cultura de massa",
    "objective": "Analisar produção, circulação e consumo de bens culturais em larga escala, diferenciando crítica social, audiência, algoritmos e possibilidades de apropriação ativa.",
    "sections": [
      {
        "title": "Cultura de massa e a ideia de indústria cultural",
        "explanation": "A noção de indústria cultural é associada à crítica de Theodor Adorno e Max Horkheimer sobre produção padronizada de bens culturais em sociedades capitalistas. O conceito destaca como interesses econômicos, publicidade e formatos repetidos podem influenciar consumo e percepção. Não significa que toda obra popular seja artisticamente inferior ou que todas as pessoas sejam receptoras passivas sem capacidade crítica. Cultura de massa designa circulação de produtos culturais para públicos amplos, enquanto a indústria cultural é uma perspectiva crítica específica sobre a lógica de produção e distribuição. Para analisar música, séries ou publicidade, é útil perguntar quem produz, quem financia, por quais meios circula e que padrões se repetem. A crítica sociológica deve observar evidências e relações de mercado, não simplesmente desqualificar gostos pessoais.",
        "example": "Uma plataforma apresenta séries com formatos semelhantes e publicidade integrada. A repetição pode ser analisada como estratégia de mercado e expectativa de audiência, mas a qualidade de cada obra exige exame independente.",
        "pitfall": "Usar o termo 'indústria cultural' apenas como insulto para manifestações populares ou imaginar que consumo em massa determina opinião igual em todos os indivíduos."
      },
      {
        "title": "Audiência, publicidade e algoritmos",
        "explanation": "Meios de comunicação selecionam o que circula por decisões editoriais, contratos comerciais e modelos de recomendação. Em plataformas digitais, sistemas de recomendação utilizam sinais de comportamento e objetivos configurados para ordenar conteúdos; não se deve supor que um algoritmo único controla todas as pessoas ou que cada recomendação decorre de intenção consciente de manipular. Publicidade procura atrair atenção, gerar reconhecimento ou estimular consumo, mas seus efeitos dependem de contexto e público. Os produtos também podem expressar identidades coletivas, produzir crítica social e ser reinterpretados por espectadores. Uma análise sociológica consistente diferencia propriedade da empresa, modelo de negócio, forma estética e interpretação do usuário, sem confundir popularidade com valor cultural universal.",
        "example": "Dois estudantes recebem recomendações diferentes de vídeos porque seu histórico de uso e configurações não são idênticos. Isso ilustra seleção mediada por plataformas, mas não prova que suas preferências serão determinadas inteiramente por essa seleção.",
        "pitfall": "Afirmar que todo conteúdo recomendado é necessariamente propaganda paga ou que a tecnologia elimina autonomia de todos os usuários."
      },
      {
        "title": "Produção cultural, desigualdade e leitura crítica",
        "explanation": "A circulação cultural envolve acesso a equipamentos, conectividade, tempo, formação artística e condições de distribuição. Artistas independentes podem usar plataformas para alcançar públicos, mas enfrentam concorrência e assimetrias de visibilidade. Públicos não são homogêneos: podem resistir, criar releituras e transformar significados de obras e mensagens. Em pesquisas, a quantidade de visualizações é um dado de alcance, não medida direta de qualidade artística, compreensão ou concordância. É importante separar conceito sociológico de julgamento moral do consumo e relacionar obras ao seu contexto histórico. O aluno pode examinar como uma tendência se dissemina, como patrocinadores influenciam a apresentação e que espaços restam para diversidade cultural, sem inventar receitas financeiras nem intenções secretas de produtores.",
        "example": "Uma canção local pode atingir público amplo por compartilhamentos, embora o destaque comercial de determinada playlist também dependa de contratos e regras da plataforma. Para explicar o caso seria necessário identificar fontes, não supor números.",
        "pitfall": "Confundir alcance com aprovação crítica ou declarar que público amplo impede criatividade e expressão de identidades."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "A quais pensadores se associa o conceito de indústria cultural?",
        "hint": "Considere a tradição crítica da Escola de Frankfurt.",
        "solution": "A expressão está associada especialmente a Theodor Adorno e Max Horkheimer, que analisaram a produção cultural nas relações de mercado capitalistas."
      },
      {
        "level": "basic",
        "prompt": "Por que uma música popular não pode ser classificada como artisticamente ruim só por alcançar público grande?",
        "hint": "Popularidade e qualidade estética não são medidas equivalentes.",
        "solution": "O alcance informa circulação e audiência, mas não determina qualidade ou significado. É necessário analisar a obra e seus contextos sem desqualificar o público."
      },
      {
        "level": "intermediate",
        "prompt": "Cite duas dimensões que ajudam a estudar uma série numa plataforma de streaming.",
        "hint": "Pense em financiamento e circulação.",
        "solution": "É relevante investigar financiamento e modelo de distribuição, além de padrões estéticos e publicidade. Esses aspectos explicam condições de produção sem substituir análise da obra."
      },
      {
        "level": "intermediate",
        "prompt": "Por que recomendações algorítmicas não significam que todos terão os mesmos interesses?",
        "hint": "Há diferentes sinais de uso e interpretações.",
        "solution": "Sistemas podem considerar dados e configurações variados; usuários também interpretam e escolhem de modos diferentes. Recomendar não garante aceitação nem comportamento uniforme."
      },
      {
        "level": "advanced",
        "prompt": "Uma marca afirma que um vídeo com milhões de visualizações prova apoio de todos. Avalie.",
        "hint": "Visualização não é concordância.",
        "solution": "O número de visualizações mede exposição ou acesso segundo regras da plataforma, não aprovação universal. Pessoas podem assistir por crítica, curiosidade ou outros motivos."
      },
      {
        "level": "advanced",
        "prompt": "Como analisar indústria cultural sem afirmar que públicos são totalmente passivos?",
        "hint": "Considere releituras, críticas e criação independente.",
        "solution": "A investigação pode reconhecer interesses econômicos e padronização, mas também observar resistência, interpretações diversas e produção independente de obras culturais."
      }
    ],
    "everyday": {
      "context": "Um vídeo musical aparece repetidamente nas recomendações de muitos estudantes. Um colega conclui que ele é o melhor de todos os tempos porque acumulou milhões de visualizações.",
      "question": "Por que alcance de mercado, circulação algorítmica e qualidade cultural não devem ser tratados como a mesma coisa?",
      "answer": "Visualizações mostram alcance segundo critérios da plataforma, não qualidade estética nem concordância. A sociologia examina produção, financiamento, recomendação e recepção sem desqualificar automaticamente obras populares.",
      "connections": [
        {
          "subject": "Arte",
          "topic": "Arte e tecnologia",
          "reason": "As ferramentas digitais afetam criação, edição e circulação, enquanto a análise artística examina efeitos estéticos e autoria."
        },
        {
          "subject": "Português",
          "topic": "Checagem de fontes e desinformação",
          "reason": "Números de interação e autoridade aparente precisam ser interpretados antes de sustentar conclusões sobre qualidade ou apoio."
        }
      ]
    }
  },
  {
    "subject": "Espanhol",
    "topic": "Subjuntivo em espanhol",
    "objective": "Identificar funções do presente do subjuntivo em desejo, dúvida, finalidade e hipótese, distinguindo-o do indicativo em enunciados contextualizados.",
    "sections": [
      {
        "title": "Indicativo e subjuntivo: atitude diante da informação",
        "explanation": "Em espanhol, os modos verbais ajudam a indicar como o falante apresenta uma situação. O indicativo frequentemente introduz fatos afirmados ou apresentados como conhecidos: “Sé que la biblioteca abre hoy”. O subjuntivo aparece em diversos contextos de desejo, dúvida, possibilidade, avaliação e dependência: “Espero que la biblioteca abra mañana”. Não se trata de afirmar que todo subjuntivo expressa evento impossível; ele pode referir-se também a acontecimentos futuros possíveis ou a fatos avaliados pelo falante. Muitas construções exigem atenção à oração principal, à conjunção “que” e ao sujeito da subordinada. A forma “abre” é indicativo no exemplo; “abra” é presente do subjuntivo. A leitura precisa observar intenção e contexto, pois traduzir cada verbo isoladamente não revela a relação entre certeza, expectativa e hipótese.",
        "example": "“La profesora dice que el examen es mañana” apresenta o calendário como informação afirmada. “La profesora espera que el examen sea mañana” registra uma expectativa, não uma confirmação do dia da prova.",
        "pitfall": "Declarar que o subjuntivo indica sempre mentira ou impossibilidade, ou escolher o modo pela tradução isolada da palavra 'que'."
      },
      {
        "title": "Formação do presente e construções frequentes",
        "explanation": "Para muitos verbos regulares, o presente do subjuntivo pode ser construído a partir da primeira pessoa do presente do indicativo, retirando a terminação -o e acrescentando terminações específicas: hablar → hable, hables, hable, hablemos, habléis, hablen; comer → coma, comas, coma, comamos, comáis, coman; vivir → viva, vivas, viva, vivamos, viváis, vivan. Há verbos irregulares, como ser → sea, estar → esté, ir → vaya, haber → haya e saber → sepa. Desejos com “ojalá” frequentemente usam subjuntivo: “Ojalá lleguen a tiempo”. Expressões como “es importante que” podem introduzir avaliação e exigir subjuntivo. O estudo não consiste em decorar uma conjugação sem situação: a função da frase determina por que aquela forma foi escolhida.",
        "example": "“Es necesario que los alumnos entreguen el formulario” usa “entreguen” após expressão de necessidade. Já “Los alumnos entregan el formulario todos los viernes” apresenta hábito com indicativo.",
        "pitfall": "Escrever “espero que viene” onde a construção de desejo pede “espero que venga”, ignorando a seleção de modo pela oração principal."
      },
      {
        "title": "Dúvida, negação e conectores com referência futura",
        "explanation": "Em contextos frequentes, “creo que” afirmativo costuma selecionar indicativo quando se apresenta uma crença como afirmação: “Creo que está aquí”. Já “no creo que” pode selecionar subjuntivo: “No creo que esté aquí”, indicando negação ou dúvida da proposição. Essas são tendências sintáticas importantes, mas usos regionais e contextuais exigem análise cuidadosa. Conjunções de finalidade como “para que” tipicamente introduzem subjuntivo: “Estudia para que puedas aprender”. Com “cuando” referindo-se a evento futuro ainda não realizado, é comum usar presente do subjuntivo: “Cuando llegues, avísame”; em hábitos, o indicativo pode aparecer: “Cuando llego, aviso”. O contraste mostra que modo e tempo atuam juntos para organizar o sentido do enunciado. Em provas, observe a situação comunicativa antes de marcar a alternativa.",
        "example": "“Cuando llega el autobús, todos suben” pode descrever rotina. “Cuando llegue el autobús, subiremos” projeta a chegada ainda futura. O uso de “llega” e “llegue” altera a referência temporal da frase.",
        "pitfall": "Afirmar que ‘cuando’ sempre exige subjuntivo ou interpretar todo subjuntivo como uma ação já realizada no passado."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em “Espero que Ana venga”, qual forma verbal está no subjuntivo e por quê?",
        "hint": "O verbo principal expressa desejo ou expectativa.",
        "solution": "“Venga” é presente do subjuntivo de venir. O falante manifesta expectativa sobre a chegada de Ana, não confirma que ela já aconteceu."
      },
      {
        "level": "basic",
        "prompt": "Complete “Ojalá ellos ___ a tiempo” com o presente do subjuntivo de llegar.",
        "hint": "A forma de ellos/ellas termina em -en.",
        "solution": "A forma adequada é “lleguen”: “Ojalá ellos lleguen a tiempo”. “Ojalá” introduz um desejo, que nesse contexto pede subjuntivo."
      },
      {
        "level": "intermediate",
        "prompt": "Compare “Sé que el examen es mañana” e “Espero que el examen sea mañana”.",
        "hint": "Uma frase afirma informação e outra apresenta expectativa.",
        "solution": "“Es” no indicativo apresenta o exame amanhã como informação conhecida; “sea” no subjuntivo indica esperança, sem confirmar oficialmente a data."
      },
      {
        "level": "intermediate",
        "prompt": "Complete “Estudia para que tú ___ aprobar” com o verbo poder.",
        "hint": "O presente do subjuntivo de poder para tú é puedas.",
        "solution": "A frase é “Estudia para que tú puedas aprobar”. “Para que” indica a finalidade de estudar, e “puedas” está no subjuntivo."
      },
      {
        "level": "advanced",
        "prompt": "Explique o contraste entre “Cuando llega el tren, salimos” e “Cuando llegue el tren, saldremos”.",
        "hint": "Compare hábito e referência ao futuro.",
        "solution": "A primeira pode descrever uma rotina com indicativo. A segunda refere-se a chegada futura ainda não ocorrida e usa subjuntivo “llegue” com consequência futura."
      },
      {
        "level": "advanced",
        "prompt": "Por que não se deve afirmar que todo subjuntivo descreve acontecimento impossível?",
        "hint": "Ele pode expressar desejos futuros plausíveis.",
        "solution": "O modo pode aparecer em expectativas, finalidades e eventos futuros perfeitamente possíveis. Ele marca a relação discursiva do falante com a proposição, não impossibilidade universal."
      }
    ],
    "everyday": {
      "context": "Um aluno lê dois comunicados de uma escola hispanofalante: “Sabemos que la clase es el lunes” e “Esperamos que la clase sea el lunes”. Ele pensa que ambos confirmam a mesma data.",
      "question": "Qual dos avisos afirma o calendário e qual apresenta apenas expectativa?",
      "answer": "“Sabemos que ... es” apresenta a segunda-feira como informação conhecida. “Esperamos que ... sea” expressa desejo ou expectativa, sem comprovar que a aula foi confirmada.",
      "connections": [
        {
          "subject": "Espanhol",
          "topic": "Conectores argumentativos em espanhol",
          "reason": "Modo verbal e conectores definem como uma informação se relaciona a hipóteses, finalidades e argumentos."
        },
        {
          "subject": "Inglês",
          "topic": "Orações condicionais em inglês",
          "reason": "As duas línguas usam recursos gramaticais diferentes para separar fatos afirmados de situações futuras condicionais ou hipotéticas."
        }
      ]
    }
  },
  {
    "subject": "Filosofia",
    "topic": "Filosofia da ciência",
    "objective": "Analisar observação, hipótese, evidência, teste e revisão do conhecimento científico, distinguindo explicação rigorosa de certeza absoluta ou autoridade pessoal.",
    "sections": [
      {
        "title": "O que diferencia uma hipótese de uma conclusão sustentada",
        "explanation": "Uma hipótese científica é uma proposta de explicação ou relação que precisa ser confrontada com observações, raciocínios e métodos adequados. A ciência não começa sempre pelo mesmo procedimento e não existe uma sequência universal de passos idêntica para todas as disciplinas. Algumas investigações usam experimentos controlados; outras trabalham com observações astronômicas, modelos matemáticos, documentos ou registros históricos da natureza. O essencial é formular perguntas claras, explicitar critérios e tornar os resultados avaliáveis pela comunidade competente. Uma correlação entre dois fenômenos não demonstra automaticamente causalidade; fatores não medidos podem explicar a associação. Um experimento isolado não resolve necessariamente toda uma controvérsia. A filosofia da ciência examina tanto como se produz evidência quanto os limites de sua interpretação.",
        "example": "Uma escola observa mais erros em dias quentes. Isso permite formular hipótese de que temperatura afete atenção, mas não comprova causalidade: duração da prova, ventilação e outras condições precisam ser consideradas.",
        "pitfall": "Tratar qualquer opinião formulada como hipótese científica já confirmada, ou imaginar que toda área deve usar exatamente o mesmo desenho experimental."
      },
      {
        "title": "Teste crítico, falsificabilidade e revisão",
        "explanation": "Karl Popper destacou a importância de formular teorias que possam, em princípio, ser confrontadas com observações capazes de refutá-las. A ideia de falsificabilidade é critério filosófico influente, não descrição completa de todas as práticas científicas. Um resultado incompatível com uma previsão exige examinar também condições de teste, instrumentos e hipóteses auxiliares, sem permitir que qualquer teoria seja protegida indefinidamente de críticas. A confirmação repetida aumenta confiança em certas condições, mas não prova logicamente que uma generalização universal jamais terá exceções. A revisão por pares pode detectar falhas, porém não substitui replicação, transparência e novas evidências. Conhecimento científico é revisável e isso não o torna equivalente a palpite sem fundamento.",
        "example": "Uma hipótese afirma que determinado material sempre flutua em água em condições especificadas. Encontrar um caso confiável em que afunda exige revisar a afirmação ou as condições. Não basta ignorar a observação discordante.",
        "pitfall": "Afirmar que só é ciência aquilo que foi imediatamente refutado ou que revisão de teoria prova inutilidade de todas as evidências anteriores."
      },
      {
        "title": "Modelos, incerteza e responsabilidade pública",
        "explanation": "Modelos científicos simplificam aspectos do mundo para responder perguntas específicas. Um modelo de queda sem resistência do ar é útil em certas condições, mas não descreve igualmente uma folha e uma esfera caindo em todas as situações. O valor do modelo depende de sua capacidade explicativa, de previsões adequadas e do reconhecimento de limites. Medidas incluem incertezas e escolhas metodológicas, que devem ser comunicadas de modo proporcional; 'há margem de erro' não significa que qualquer resultado seja arbitrário. Em debates públicos, evidência deve ser avaliada por método, fontes e compatibilidade com conhecimentos estabelecidos, não apenas por prestígio de quem fala. A filosofia da ciência se conecta à educação midiática ao exigir cuidado com extrapolações, alegações absolutas e uso descontextualizado de números.",
        "example": "Um modelo que usa consumo constante de energia prevê custo aproximado de um aparelho. Se o termostato alterna períodos ligados e desligados, o modelo precisa ser ajustado para prever melhor a situação real.",
        "pitfall": "Confundir simplificação declarada com fraude ou considerar que a presença de incerteza torna todas as conclusões igualmente prováveis."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual a diferença entre formular hipótese e demonstrar conclusão com evidências?",
        "hint": "Uma hipótese ainda precisa ser testada.",
        "solution": "A hipótese propõe explicação investigável. Uma conclusão sustentada depende de evidências e métodos que permitam avaliar a proposta, respeitando limites do estudo."
      },
      {
        "level": "basic",
        "prompt": "Uma correlação entre calor e erros escolares comprova causalidade direta?",
        "hint": "Outras condições podem afetar os resultados.",
        "solution": "Não. A associação sugere pergunta de pesquisa, mas outras variáveis precisam ser investigadas antes de atribuir relação causal."
      },
      {
        "level": "intermediate",
        "prompt": "Explique de modo simples o critério de falsificabilidade associado a Popper.",
        "hint": "Considere o que poderia contradizer uma teoria.",
        "solution": "Uma proposta é falsificável quando há observações concebíveis que poderiam demonstrar sua inadequação. Isso não é o único aspecto da ciência e depende de condições de teste claras."
      },
      {
        "level": "intermediate",
        "prompt": "Por que revisão por pares não é garantia de que um estudo nunca será corrigido?",
        "hint": "Novas evidências podem surgir depois da publicação.",
        "solution": "A revisão pode identificar problemas antes da publicação, mas não elimina todas as falhas. Replicação, novos dados e crítica metodológica continuam necessários."
      },
      {
        "level": "advanced",
        "prompt": "Um modelo de energia supõe potência constante, embora o equipamento use termostato. Como avaliar o resultado?",
        "hint": "Veja a hipótese e a situação real.",
        "solution": "O cálculo pode fornecer estimativa sob condição explicitada, mas não medição exata do consumo com termostato. Ajustar o modelo exige dados do perfil real de potência."
      },
      {
        "level": "advanced",
        "prompt": "Por que uma afirmação científica ser revisável não a torna um simples palpite?",
        "hint": "Distinga revisão com evidências e opinião sem método.",
        "solution": "Conclusões científicas dependem de procedimentos, dados e crítica pública. A possibilidade de revisão faz parte do controle de qualidade e não equivale à ausência de fundamentação."
      }
    ],
    "everyday": {
      "context": "Uma turma observa que estudantes cometem mais erros numa tarde quente. Um colega anuncia que a temperatura foi a única causa, embora ninguém tenha registrado horário, ventilação ou dificuldade das atividades.",
      "question": "Que diferença existe entre observar associação e demonstrar uma relação causal por investigação?",
      "answer": "A observação sugere hipótese, mas não isola causalidade. É necessário controlar ou analisar outras variáveis, esclarecer métodos e avaliar resultados antes de concluir que o calor foi a única causa.",
      "connections": [
        {
          "subject": "Filosofia",
          "topic": "Argumentação e falácias",
          "reason": "Investigar causas requer reconhecer inferências inválidas, como assumir causalidade apenas por coincidência ou sequência."
        },
        {
          "subject": "Português",
          "topic": "Checagem de fontes e desinformação",
          "reason": "Uma afirmação científica divulgada ao público precisa apresentar fonte, método e limites em vez de certeza sem base."
        }
      ]
    }
  },
  {
    "subject": "Arte",
    "topic": "Música: ritmo, melodia, harmonia e timbre",
    "objective": "Distinguir parâmetros e organizações da linguagem musical por ritmo, melodia, harmonia e timbre, relacionando escolhas sonoras a contextos culturais.",
    "sections": [
      {
        "title": "Ritmo: organização de durações e acentos",
        "explanation": "Ritmo envolve organização temporal de sons e silêncios, durações, acentos e padrões de repetição ou variação. Pulsação é referência regular percebida em determinadas músicas, enquanto ritmo pode combinar durações diferentes sobre essa referência ou mesmo apresentar organização sem pulsação evidente. Andamento descreve a velocidade de ocorrência das pulsações, não a intensidade sonora. Uma sequência de palmas regulares pode representar a pulsação de uma atividade, enquanto passos alternados, pausas e acentos formam padrão rítmico. Há muitas tradições musicais com formas próprias de medir e sentir tempo; não se deve tratar notação ocidental como descrição de toda prática cultural. A análise pode observar onde há pausa, repetição, deslocamento de acento e contraste de durações, sem exigir reprodução de uma obra protegida.",
        "example": "Numa atividade original, quatro batidas igualmente espaçadas sustentam dois padrões: uma sequência acentua a primeira e a terceira, outra destaca a segunda e a quarta. A pulsação pode permanecer, mas a sensação rítmica muda.",
        "pitfall": "Confundir ritmo com velocidade ou afirmar que toda música possui batidas regulares exatamente iguais."
      },
      {
        "title": "Melodia e harmonia desempenham papéis diferentes",
        "explanation": "Melodia é organização de alturas e durações percebida como linha musical, com movimentos, repetições e pausas. Harmonia envolve relações entre sons simultâneos e suas sucessões, estudadas de maneiras variadas nas tradições musicais. Em uma canção com voz e acompanhamento, a linha vocal pode funcionar como melodia enquanto acordes e outras relações sustentam organização harmônica; porém música pode existir sem acompanhamento harmônico baseado em acordes. Altura musical não é volume: sons graves e agudos diferem em frequência, enquanto intensidade depende de outra dimensão acústica. A análise deve reconhecer que categorias ocidentais são ferramentas entre outras e que não há uma única regra de beleza ou combinação correta para todas as culturas. Comparar melodias curtas originais e ambientes sonoros permite perceber direção e repetição sem copiar obras.",
        "example": "Uma pessoa canta uma sequência inventada de três alturas ascendentes e depois retorna à altura inicial: isso descreve contorno melódico. Um instrumento que sustenta sons simultâneos pode modificar a percepção harmônica sem alterar essa sequência.",
        "pitfall": "Chamar qualquer mudança de volume de 'melodia mais aguda' ou afirmar que música só existe quando há acordes."
      },
      {
        "title": "Timbre, instrumentos e repertórios culturais",
        "explanation": "Timbre é uma qualidade perceptiva que permite distinguir fontes sonoras mesmo quando altura e intensidade são semelhantes, envolvendo composição espectral, ataque, decaimento e outros aspectos do som. Uma flauta e um violino podem tocar notas com frequência fundamental semelhante, mas apresentar características sonoras diferentes. O timbre também muda com técnica de execução, material, acústica do ambiente e recursos de gravação. Em produções digitais, efeitos podem transformar características sonoras e criar novas possibilidades expressivas; reconhecer esses recursos não significa que instrumentos acústicos sejam superiores ou inferiores. Analisar música em contexto envolve escolhas estéticas, usos sociais e tradições, sem atribuir todo um estilo a uma única comunidade. Ritmo, melodia, harmonia e timbre interagem, mas são dimensões analíticas diferentes.",
        "example": "Dois instrumentos executam a mesma nota musical em intensidade parecida, mas um apresenta ataque percussivo e outro som sustentado. O contraste ajuda a reconhecer timbres, mesmo sem mudança na altura fundamental.",
        "pitfall": "Confundir timbre com volume ou presumir que instrumentos iguais produzirão exatamente o mesmo timbre em qualquer execução."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual dimensão musical organiza durações, pausas e acentos ao longo do tempo?",
        "hint": "Pense em pulsação e padrões temporais.",
        "solution": "É o ritmo, que organiza durações, silêncios e acentos. Ele não é simplesmente a velocidade de execução de uma música."
      },
      {
        "level": "basic",
        "prompt": "Qual a diferença entre som mais agudo e som mais alto em volume?",
        "hint": "Uma característica é altura e outra, intensidade.",
        "solution": "Agudo e grave dizem respeito à altura musical, relacionada a frequências; volume se relaciona à intensidade sonora. São dimensões distintas."
      },
      {
        "level": "intermediate",
        "prompt": "Uma linha vocal apresenta notas que sobem e descem. Que aspecto está em destaque?",
        "hint": "Considere sucessão de alturas.",
        "solution": "A sucessão de alturas e durações constitui um contorno melódico. A análise diz respeito à melodia, sem depender de acordes de acompanhamento."
      },
      {
        "level": "intermediate",
        "prompt": "Uma flauta e um violino tocam nota semelhante e mesma intensidade. Por que podem soar diferentes?",
        "hint": "Considere ataque e espectro sonoro.",
        "solution": "Os instrumentos possuem timbres diferentes, relacionados à composição espectral e à evolução temporal do som, mesmo com altura fundamental semelhante."
      },
      {
        "level": "advanced",
        "prompt": "Por que ritmo e andamento não são sinônimos?",
        "hint": "Um se refere à organização temporal; outro, à velocidade.",
        "solution": "O andamento indica rapidez da pulsação quando presente; o ritmo organiza durações, acentos e silêncios. Padrões rítmicos distintos podem ocorrer no mesmo andamento."
      },
      {
        "level": "advanced",
        "prompt": "Uma peça musical não apresenta acordes ocidentais. Isso significa que não é música?",
        "hint": "Considere diversidade de tradições sonoras.",
        "solution": "Não. A organização musical varia entre culturas e pode privilegiar melodia, ritmo, timbre ou outras relações. A presença de acordes não define universalmente o que é música."
      }
    ],
    "everyday": {
      "context": "Na escola, dois grupos apresentam uma mesma sequência de batidas em velocidades semelhantes, mas um acentua o começo de cada conjunto e outro acentua o meio. Os colegas acham que só mudou o volume.",
      "question": "Qual componente da linguagem musical explica a mudança de acentos sem alteração obrigatória do andamento?",
      "answer": "O padrão rítmico mudou: a organização dos acentos altera a percepção do tempo. Andamento descreve rapidez, e intensidade descreve volume; essas dimensões não são equivalentes.",
      "connections": [
        {
          "subject": "Arte",
          "topic": "Fotografia, cinema e audiovisual",
          "reason": "A organização de som e silêncio participa do tempo narrativo em filmes e pode modificar a interpretação das imagens."
        },
        {
          "subject": "Arte",
          "topic": "Arte e tecnologia",
          "reason": "Gravação e edição digital transformam timbres e padrões sonoros, mostrando como ferramentas influenciam processos criativos."
        }
      ]
    }
  },
  {
    "subject": "Educação Física",
    "topic": "Capacidades físicas e treinamento",
    "objective": "Identificar capacidades físicas e princípios gerais de adaptação, progressão e recuperação sem transformar conceitos escolares em prescrição de exercícios individuais.",
    "sections": [
      {
        "title": "Força, resistência, velocidade e flexibilidade",
        "explanation": "Capacidades físicas são dimensões do desempenho corporal, como força muscular, resistência cardiorrespiratória ou muscular, velocidade e flexibilidade, estudadas em conjunto com coordenação e outras competências de movimento. Força envolve produção de tensão pelos músculos; resistência relaciona-se à manutenção de atividades ao longo do tempo; velocidade envolve rapidez de ações em certas tarefas; flexibilidade refere-se à amplitude de movimento em articulações sob condições específicas. Não existe uma capacidade universalmente mais importante em todas as modalidades. Uma partida coletiva pode exigir força, deslocamento, leitura tática e cooperação. Avaliar o desempenho de uma pessoa requer considerar experiência, contextos e condições individuais. A educação física escolar desenvolve entendimento e participação, não julgamento de valor por padrões corporais.",
        "example": "Um estudante consegue sustentar caminhada confortável por período longo, enquanto outro realiza deslocamentos curtos mais rápidos. Isso não estabelece quem é 'melhor fisicamente' em todas as tarefas; as exigências e capacidades avaliadas diferem.",
        "pitfall": "Confundir força com velocidade ou usar aparência corporal para atribuir qualidade física sem observação adequada."
      },
      {
        "title": "Especificidade, progressão e recuperação",
        "explanation": "A adaptação a práticas corporais depende da relação entre estímulo, recuperação e características individuais. O princípio da especificidade indica que a melhora tende a estar relacionada às exigências treinadas; aprimorar um movimento não garante melhora equivalente em qualquer outro. Progressão significa ajustar demandas ao longo do tempo, respeitando limites e segurança, sem exigir aumento contínuo e ilimitado. O repouso e a recuperação fazem parte da adaptação, e dor não deve ser tratada como prova obrigatória de eficiência. As recomendações de prática variam por idade, condição de saúde, objetivo e acompanhamento; uma aula conceitual não define cargas, repetições ou intensidade apropriadas para um indivíduo. Na escola, planejamento responsável valoriza autonomia, percepção de esforço e participação inclusiva.",
        "example": "Uma atividade de caminhada regularmente praticada pode favorecer determinadas adaptações, mas isso não garante melhora automática em coordenação específica de uma modalidade que não foi exercitada.",
        "pitfall": "Afirmar que mais intensidade sempre é melhor ou que a ausência de dor prova falta de efeito de uma prática corporal."
      },
      {
        "title": "Desempenho, ética e condições de acesso",
        "explanation": "Resultados de práticas corporais dependem de possibilidades materiais, espaços, transporte, tempo livre, segurança e oportunidades de aprendizagem. Um estudante com menos acesso a quadras ou equipamentos não deve ser considerado menos dedicado apenas por apresentar pouca experiência. Avaliações escolares precisam distinguir aquisição de habilidades de rendimento competitivo; adaptações podem ser necessárias para participação de pessoas com condições diferentes. No esporte de alto rendimento, as regras e os controles específicos possuem finalidades próprias, mas não devem ser importados automaticamente para qualquer aula de educação física. Em projetos comunitários, é importante oferecer modalidades diversas e acompanhamento seguro, sem criar promessas de saúde ou estética universais. O foco deve recair sobre desenvolvimento progressivo e respeito aos participantes.",
        "example": "Uma escola oferece apenas corrida de velocidade, deixando de lado atividades de equilíbrio, coordenação, resistência e jogos. Ampliar propostas permite desenvolver repertório corporal mais variado e diminuir exclusões por perfil inicial.",
        "pitfall": "Classificar estudantes como incapazes por um único teste ou presumir que todos têm acesso a treinamento e recuperação iguais."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Cite duas capacidades físicas e diga o que cada uma descreve.",
        "hint": "Escolha entre força, velocidade, resistência ou flexibilidade.",
        "solution": "Força envolve produção de tensão muscular; resistência relaciona-se à capacidade de manter atividade ao longo do tempo. São aspectos diferentes do desempenho."
      },
      {
        "level": "basic",
        "prompt": "Por que velocidade e resistência não são a mesma capacidade?",
        "hint": "Compare esforço curto e manutenção prolongada.",
        "solution": "Velocidade envolve rapidez em movimentos ou deslocamentos; resistência descreve manutenção de esforços por duração relevante. Uma pessoa pode apresentar desempenhos diferentes em cada tarefa."
      },
      {
        "level": "intermediate",
        "prompt": "Explique o princípio da especificidade no treinamento.",
        "hint": "A adaptação depende do tipo de exigência treinada.",
        "solution": "Adaptações tendem a corresponder às demandas das práticas realizadas. Melhorar numa tarefa não garante melhora proporcional em qualquer outra atividade."
      },
      {
        "level": "intermediate",
        "prompt": "Por que recuperação faz parte do processo de adaptação?",
        "hint": "Estímulo e descanso se relacionam.",
        "solution": "A recuperação permite respostas do organismo após o esforço e ajuda a evitar excesso de demanda. Aumento contínuo de carga sem descanso não é princípio seguro."
      },
      {
        "level": "advanced",
        "prompt": "Uma avaliação usa apenas corrida de 50 metros para julgar toda a aptidão física. Qual o problema?",
        "hint": "Uma tarefa mede aspectos restritos.",
        "solution": "A corrida curta pode avaliar componentes de velocidade, mas não resume resistência, flexibilidade, coordenação e outras capacidades. O julgamento global seria inadequado."
      },
      {
        "level": "advanced",
        "prompt": "Por que um programa escolar de atividades deve considerar acessibilidade e preferências?",
        "hint": "Barreiras diferentes afetam participação real.",
        "solution": "Espaço, equipamentos, segurança e condições dos participantes influenciam oportunidades. Adaptar propostas amplia aprendizagem e evita excluir pessoas por um único padrão de rendimento."
      }
    ],
    "everyday": {
      "context": "Uma escola mede apenas o tempo de corrida curta e anuncia que os alunos mais rápidos têm a melhor aptidão física. Alguns estudantes se destacam em resistência e coordenação, mas não aparecem no resultado.",
      "question": "Por que um teste de velocidade isolado não avalia todas as capacidades físicas de uma pessoa?",
      "answer": "Velocidade é apenas uma dimensão. Força, resistência, flexibilidade, coordenação e exigências específicas precisam ser consideradas; o resultado de uma corrida curta não define aptidão global nem valor pessoal.",
      "connections": [
        {
          "subject": "Educação Física",
          "topic": "Atividade física e saúde",
          "reason": "Compreender esforço, prática cotidiana e recuperação evita confundir desempenho competitivo com condição geral de saúde."
        },
        {
          "subject": "Educação Física",
          "topic": "Preconceito e inclusão no esporte",
          "reason": "Diversificar critérios e adaptar atividades reduz exclusão de estudantes com experiências e capacidades diferentes."
        }
      ]
    }
  }
];
const lookup=new Map(specs.map(s=>[s.subject+'\0'+s.topic,s]));
export const stage14Topics=specs.map(({subject,topic})=>({subject,topic}));
export const stage14EverydayContexts:readonly EverydayContext[]=specs.map(s=>({subject:s.subject,topic:s.topic,...s.everyday}));
export function stage14Lesson(topic:CurriculumTopic):CourseLesson|null{
 const data=lookup.get(topic.subject+'\0'+topic.topic);
 if(!data)return null;
 const levels:CourseLevel[]=['basic','intermediate','advanced'];
 const sections:CourseSection[]=data.sections.map((section,i)=>({
  ...section,level:levels[i],
  explanation:(i===0?'Aula específica do Kognos; revisão docente pendente.\n\n':'')+section.explanation,
  steps:[
   'Interprete as informações do problema cotidiano e identifique a questão central.',
   'Aplique as definições e o procedimento do capítulo ao exemplo apresentado.',
   'Confira o resultado, suas condições de validade e o erro comum descrito.'
  ]
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
