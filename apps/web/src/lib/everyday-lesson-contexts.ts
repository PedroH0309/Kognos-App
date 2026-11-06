/** Contextos cotidianos específicos do Kognos, escritos e revisáveis tema a tema.
 * Não são relatos observados nem estatísticas oficiais: números em situações didáticas são hipotéticos.
 * Cada conexão aponta para um tema existente da biblioteca.
 */
import type {CourseLesson} from './course-content.ts';
import {stage13EverydayContexts} from './authored-lessons-stage13.ts';
import {stage14EverydayContexts} from './authored-lessons-stage14.ts';
import {stage15EverydayContexts} from './authored-lessons-stage15.ts';
import {stage16EverydayContexts} from './authored-lessons-stage16.ts';
import {stage17EverydayContexts} from './authored-lessons-stage17.ts';
import {stage18EverydayContexts} from './authored-lessons-stage18.ts';
import {stage19EverydayContexts} from './authored-lessons-stage19.ts';
import {stage20EverydayContexts} from './authored-lessons-stage20.ts';
import {stage21EverydayContexts} from './authored-lessons-stage21.ts';
import {stage22EverydayContexts} from './authored-lessons-stage22.ts';
import {stage23EverydayContexts} from './authored-lessons-stage23.ts';
import {stage24EverydayContexts} from './authored-lessons-stage24.ts';
import {stage25EverydayContexts} from './authored-lessons-stage25.ts';
import {stage26EverydayContexts} from './authored-lessons-stage26.ts';
export type ContextConnection={subject:string;topic:string;reason:string};
export type EverydayContext={subject:string;topic:string;context:string;question:string;answer:string;connections:readonly ContextConnection[]};
const earlierEverydayContexts:readonly EverydayContext[] = [
  {
    "subject": "Matemática",
    "topic": "Operações, divisibilidade e conjuntos numéricos",
    "context": "Um centro comunitário recebeu 18 cadernos e 24 lápis para montar o maior número possível de kits idênticos, sem sobrar nenhum item.",
    "question": "Quantos kits completos podem ser montados e quantos itens de cada tipo vão em cada kit?",
    "answer": "O maior número de kits é o MDC de 18 e 24: 6. Cada kit recebe 18÷6=3 cadernos e 24÷6=4 lápis. O problema usa divisibilidade, não o MMC.",
    "connections": [
      {
        "subject": "Matemática",
        "topic": "Razões, escalas e proporcionalidade",
        "reason": "A relação de 3 cadernos para 4 lápis pode ser preservada ao montar novos kits."
      },
      {
        "subject": "Matemática",
        "topic": "Progressão aritmética",
        "reason": "Se o estoque aumentar em uma quantidade fixa por entrega, é possível prever as próximas quantidades."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Razões, escalas e proporcionalidade",
    "context": "Uma receita para quatro pessoas usa 300 g de arroz. Para servir dez pessoas, mantendo a mesma porção individual, a cozinha precisa ajustar a quantidade.",
    "question": "Quantos gramas de arroz serão necessários e que condição torna o cálculo proporcional?",
    "answer": "300÷4=75 g por pessoa. Para dez pessoas, 75×10=750 g. A proporcionalidade direta vale se o consumo por pessoa permanecer o mesmo.",
    "connections": [
      {
        "subject": "Matemática",
        "topic": "Porcentagem e juros",
        "reason": "A mesma proporcionalidade ajuda a calcular reajustes e descontos em compras."
      },
      {
        "subject": "Geografia",
        "topic": "Coordenadas geográficas",
        "reason": "Em mapas, escalas transformam medidas desenhadas em distâncias do território."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Porcentagem e juros",
    "context": "Uma loja anuncia um notebook de R$ 1.200 com desconto de 15% no pagamento à vista. Outra oferta exibe parcelas, mas exige verificar juros e total pago.",
    "question": "Qual o valor à vista? Por que comparar somente o valor da parcela pode ser enganoso?",
    "answer": "15% de R$ 1.200 são R$ 180; o preço à vista é R$ 1.020. Para avaliar o parcelamento, é preciso somar os pagamentos e comparar o custo total, não apenas a parcela.",
    "connections": [
      {
        "subject": "Matemática",
        "topic": "Progressão aritmética",
        "reason": "Juros simples acrescentam valores periódicos que podem formar uma sequência aritmética."
      },
      {
        "subject": "Redação",
        "topic": "Repertório sociocultural produtivo",
        "reason": "O crédito e o consumo podem fundamentar argumentos sobre educação financeira sem inventar estatísticas."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Potências, radicais e notação científica",
    "context": "Em um exercício de laboratório, uma amostra hipotética contém 2,5 × 10⁶ partículas por mililitro. O pesquisador precisa estimar a contagem em 8 mL da mesma concentração.",
    "question": "Como escrever a quantidade total de partículas sem uma sequência longa de zeros?",
    "answer": "2,5×10⁶×8=20×10⁶=2,0×10⁷ partículas. A notação científica facilita multiplicações e indica ordem de grandeza; os dados são de um exemplo didático, não de uma medição real.",
    "connections": [
      {
        "subject": "Química",
        "topic": "Mol e constante de Avogadro",
        "reason": "O número de Avogadro conecta contagens microscópicas a quantidades expressas em mol."
      },
      {
        "subject": "Biologia",
        "topic": "Ciclo celular e mitose",
        "reason": "Representar grandes contagens é útil para interpretar crescimento celular em modelos."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Equações, inequações e sistemas",
    "context": "Um serviço de transporte hipotético cobra R$ 8 de tarifa fixa e mais R$ 2 por quilômetro. Uma pessoa dispõe de no máximo R$ 30 para a viagem.",
    "question": "Qual a maior distância que cabe no orçamento, segundo essa tarifa?",
    "answer": "Se x é a distância em km, 8+2x≤30. Então 2x≤22 e x≤11 km. A resposta depende do modelo informado, sem taxas adicionais.",
    "connections": [
      {
        "subject": "Física",
        "topic": "Velocidade média e instantânea",
        "reason": "Depois de determinar a distância, o tempo de deslocamento exige analisar a velocidade."
      },
      {
        "subject": "Matemática",
        "topic": "Função quadrática",
        "reason": "Compare um custo linear como esse com modelos em que a variável aparece ao quadrado."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Função quadrática",
    "context": "Uma escola planeja um canteiro retangular com 20 metros de cerca para todo o perímetro. É preciso escolher lados que aproveitem a maior área possível.",
    "question": "Se um lado mede x metros, como a área depende de x e que dimensão maximiza a área?",
    "answer": "Com perímetro 20, o outro lado mede 10−x, para 0<x<10. A área é A(x)=x(10−x)=−x²+10x; o vértice ocorre em x=5 e a área máxima é 25 m².",
    "connections": [
      {
        "subject": "Matemática",
        "topic": "Razões, escalas e proporcionalidade",
        "reason": "A planta do canteiro pode ser desenhada em escala antes da construção."
      },
      {
        "subject": "Geografia",
        "topic": "Coordenadas geográficas",
        "reason": "Representações espaciais dependem de medidas e referências, embora coordenadas não determinem a área por si sós."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Progressão aritmética",
    "context": "Uma pessoa planeja guardar R$ 30 no primeiro mês e aumentar o depósito mensal em R$ 10 durante cinco meses, sem considerar juros.",
    "question": "Quanto será depositado no quinto mês e qual o total acumulado pelos depósitos?",
    "answer": "Os depósitos são R$ 30, 40, 50, 60 e 70. O quinto vale R$ 70 e a soma é 5×(30+70)/2=R$ 250. Não confunda depósito mensal com saldo que renderia juros.",
    "connections": [
      {
        "subject": "Matemática",
        "topic": "Porcentagem e juros",
        "reason": "Com juros, o saldo acumulado pode evoluir de maneira diferente da sequência de depósitos."
      },
      {
        "subject": "Matemática",
        "topic": "Função quadrática",
        "reason": "Comparar gráficos permite distinguir variação linear discreta de relações quadráticas."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Probabilidade condicional",
    "context": "Em uma pesquisa hipotética com 100 estudantes, 40 usam ônibus e 12 desses 40 também costumam pedalar em outros trajetos.",
    "question": "Sabendo que o estudante usa ônibus, qual a probabilidade de também pedalar, nesta amostra?",
    "answer": "A condição restringe a amostra aos 40 usuários de ônibus. Dentre eles, 12 pedalam; logo P(pedala|ônibus)=12/40=30%. Não use 100 como denominador depois de condicionar.",
    "connections": [
      {
        "subject": "Português",
        "topic": "Informações explícitas e inferências",
        "reason": "Interpretações de pesquisas exigem separar o que os números mostram das conclusões não sustentadas."
      },
      {
        "subject": "Redação",
        "topic": "Repertório sociocultural produtivo",
        "reason": "Dados bem contextualizados podem sustentar um argumento sem extrapolar a amostra."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Informações explícitas e inferências",
    "context": "Um aviso da biblioteca diz: “A unidade passará a abrir aos sábados a partir do próximo mês, inicialmente em dois turnos.”",
    "question": "O aviso comprova que ela já funciona aos sábados? O que realmente se pode afirmar?",
    "answer": "Não. O texto anuncia uma mudança futura, com início no próximo mês e dois turnos inicialmente. Afirmar que o serviço já começou seria extrapolar a informação explícita.",
    "connections": [
      {
        "subject": "Português",
        "topic": "Coesão referencial",
        "reason": "Pronomes e expressões de retomada ajudam a reconhecer a que unidade um comunicado se refere."
      },
      {
        "subject": "Redação",
        "topic": "Formulação de tese",
        "reason": "Uma tese defensável exige distinguir fatos informados de hipóteses."
      }
    ]
  },
  {
    "subject": "Português",
    "topic": "Coesão referencial",
    "context": "Uma escola prepara um comunicado: “Marina conversou com Ana quando ela chegou.” Duas famílias entendem o horário de chegada de formas diferentes.",
    "question": "Por que o pronome “ela” gera dúvida e como reescrever a mensagem?",
    "answer": "“Ela” pode retomar Marina ou Ana. Se quem chegou foi Ana, escreva “Quando Ana chegou, Marina conversou com ela”. A substituição recupera o referente sem ambiguidade.",
    "connections": [
      {
        "subject": "Literatura",
        "topic": "Narrador e foco narrativo",
        "reason": "Identificar quem fala e a quem se refere muda a compreensão de uma narrativa."
      },
      {
        "subject": "Português",
        "topic": "Informações explícitas e inferências",
        "reason": "Evitar ambiguidades impede inferências incompatíveis em comunicados."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Narrador e foco narrativo",
    "context": "Uma mesma reunião escolar é descrita num diário por quem participou e, em seguida, num relato em terceira pessoa que informa o que outra pessoa pensava.",
    "question": "Como a escolha de narrador muda as informações a que o leitor tem acesso?",
    "answer": "O diário limita-se à perspectiva de seu narrador-personagem; a narrativa externa pode oferecer outras informações, dependendo da focalização. A pessoa que escreve a obra não é automaticamente seu narrador.",
    "connections": [
      {
        "subject": "Arte",
        "topic": "Fotografia, cinema e audiovisual",
        "reason": "O enquadramento de uma câmera, assim como o foco narrativo, seleciona o que o público vê."
      },
      {
        "subject": "Português",
        "topic": "Informações explícitas e inferências",
        "reason": "É importante separar fatos narrados de interpretações da voz que relata."
      }
    ]
  },
  {
    "subject": "Literatura",
    "topic": "Romantismo: poesia e gerações",
    "context": "Uma exposição escolar compara poemas que idealizam a paisagem brasileira, versos centrados na solidão e poesia que denuncia a escravidão no século XIX.",
    "question": "Que perspectivas românticas estão presentes e por que é inadequado tratar todos os poemas como retratos neutros da época?",
    "answer": "Os enfoques lembram, respectivamente, tendências nacionalistas/indianistas, ultrarromânticas e condoreiras. Cada poema emprega escolhas estéticas e posições históricas; nenhum substitui fontes críticas sobre a sociedade.",
    "connections": [
      {
        "subject": "História",
        "topic": "Era Vargas",
        "reason": "Compare projetos de identidade nacional construídos em períodos históricos distintos, sem equipará-los."
      },
      {
        "subject": "Redação",
        "topic": "Repertório sociocultural produtivo",
        "reason": "Um movimento literário só fortalece um argumento quando é contextualizado corretamente."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Formulação de tese",
    "context": "Numa redação sobre desperdício de alimentos na escola, um estudante escreve apenas: “Desperdício é ruim”. A frase não indica o que será defendido.",
    "question": "Como transformar essa ideia numa tese que organize dois argumentos verificáveis?",
    "answer": "Uma tese possível é: “A falta de planejamento das porções e de ações de conscientização contribui para o desperdício na escola”. Isso permite discutir gestão e hábitos sem inventar números.",
    "connections": [
      {
        "subject": "Redação",
        "topic": "Repertório sociocultural produtivo",
        "reason": "A tese ganha consistência quando cada eixo é sustentado por conhecimentos pertinentes."
      },
      {
        "subject": "Português",
        "topic": "Informações explícitas e inferências",
        "reason": "Não se pode transformar uma impressão sobre a escola em dado comprovado."
      }
    ]
  },
  {
    "subject": "Redação",
    "topic": "Repertório sociocultural produtivo",
    "context": "Ao defender melhorias no transporte público, uma redação menciona “a Revolução Industrial” sem explicar como essa referência contribui para a tese.",
    "question": "Como usar uma referência histórica sem transformá-la em ornamentação?",
    "answer": "Conecte a industrialização à expansão urbana e à organização de deslocamentos, reconhecendo as diferenças entre épocas. Depois explique como a infraestrutura de transporte influencia o acesso atual a serviços.",
    "connections": [
      {
        "subject": "História",
        "topic": "Revolução Industrial",
        "reason": "A transformação industrial ajuda a compreender a expansão histórica de centros urbanos."
      },
      {
        "subject": "Geografia",
        "topic": "Coordenadas geográficas",
        "reason": "Mapas permitem representar a distribuição espacial de serviços e trajetos, mas não demonstram causalidade sozinhos."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Skimming e scanning",
    "context": "Um folheto de oficina gratuita informa: “Free workshop. Registration required by Friday. Classes start Monday.” O aluno quer saber o assunto geral e o prazo.",
    "question": "Que estratégias resolvem cada necessidade sem traduzir tudo?",
    "answer": "Skimming identifica rapidamente que se trata de uma oficina gratuita; scanning localiza “by Friday” como prazo de inscrição. A palavra “required” confirma que a inscrição é obrigatória.",
    "connections": [
      {
        "subject": "Português",
        "topic": "Informações explícitas e inferências",
        "reason": "A atenção a condições e prazos é essencial também na leitura em português."
      },
      {
        "subject": "Espanhol",
        "topic": "Cognatos e falsos cognatos em espanhol",
        "reason": "Pistas lexicais são úteis, mas não autorizam tradução automática de palavras semelhantes."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topic": "Present perfect e past perfect",
    "context": "Um estudante escreve em seu diário: “I have studied English since 2022. Before the exchange began, I had already learned basic vocabulary.”",
    "question": "Qual verbo conecta o passado ao presente e qual marca um evento anterior a outro no passado?",
    "answer": "“Have studied” relaciona o início em 2022 à situação que continua até o momento de fala. “Had learned” indica aprendizagem anterior ao começo do intercâmbio.",
    "connections": [
      {
        "subject": "Espanhol",
        "topic": "Tempos do passado em espanhol",
        "reason": "Compare como línguas diferentes organizam anterioridade e períodos passados."
      },
      {
        "subject": "Literatura",
        "topic": "Narrador e foco narrativo",
        "reason": "Relatos em primeira pessoa apresentam acontecimentos a partir da perspectiva de quem narra."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Cognatos e falsos cognatos em espanhol",
    "context": "Ao preencher um formulário numa universidade hispanofalante, um visitante encontra a instrução “Escriba su apellido en la oficina de admisiones”.",
    "question": "O que “apellido” e “oficina” significam nesse contexto?",
    "answer": "“Apellido” significa sobrenome e “oficina” normalmente significa escritório ou setor administrativo. Traduzir por “apelido” e “oficina mecânica” distorceria a instrução.",
    "connections": [
      {
        "subject": "Inglês",
        "topic": "Skimming e scanning",
        "reason": "A leitura de formulários exige localizar informação e confirmar termos pelo contexto."
      },
      {
        "subject": "Português",
        "topic": "Informações explícitas e inferências",
        "reason": "O contexto ajuda a evitar conclusões baseadas em palavras isoladas."
      }
    ]
  },
  {
    "subject": "Espanhol",
    "topic": "Tempos do passado em espanhol",
    "context": "Duas pessoas contam uma viagem: “Cuando era niña, viajaba con mi familia. El año pasado viajé sola.” Elas discutem a diferença entre hábito e episódio único.",
    "question": "Por que os verbos “viajaba” e “viajé” descrevem experiências passadas de modos diferentes?",
    "answer": "“Viajaba” apresenta hábito ou repetição na infância (imperfecto); “viajé” situa uma viagem concluída no ano anterior (perfecto simple). O contexto temporal determina a diferença.",
    "connections": [
      {
        "subject": "Inglês",
        "topic": "Present perfect e past perfect",
        "reason": "Compare aspecto verbal e relações entre acontecimentos em outras línguas."
      },
      {
        "subject": "Literatura",
        "topic": "Narrador e foco narrativo",
        "reason": "Lembranças narradas em primeira pessoa revelam a seleção temporal feita pelo narrador."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Velocidade média e instantânea",
    "context": "Uma ciclista percorre 12 km entre casa e a escola em 30 minutos. Ela também precisa saber se o percurso teve paradas.",
    "question": "Qual foi a rapidez média e por que ela não revela a velocidade em cada instante?",
    "answer": "Como 30 minutos correspondem a 0,5 h, a rapidez média é 12/0,5=24 km/h. É possível ter parado ou acelerado em trechos; a média não descreve automaticamente o movimento instantâneo.",
    "connections": [
      {
        "subject": "Geografia",
        "topic": "Coordenadas geográficas",
        "reason": "Mapas ajudam a localizar o início, o destino e o percurso utilizado."
      },
      {
        "subject": "Física",
        "topic": "Leis de Newton",
        "reason": "Mudanças na velocidade exigem analisar a força resultante sobre o corpo."
      }
    ]
  },
  {
    "subject": "Física",
    "topic": "Leis de Newton",
    "context": "Um carrinho de supermercado com massa total de 10 kg recebe uma força horizontal resultante de 20 N, em um modelo sem outras forças horizontais não compensadas.",
    "question": "Qual aceleração resulta da força e por que ela não indica diretamente a velocidade final?",
    "answer": "Pela segunda lei, a=F/m=20/10=2 m/s². Para determinar a velocidade final é preciso conhecer a velocidade inicial e o tempo durante o qual a aceleração atua.",
    "connections": [
      {
        "subject": "Física",
        "topic": "Velocidade média e instantânea",
        "reason": "Aceleração altera a velocidade; a distinção entre média e instantânea ajuda a interpretar o movimento."
      },
      {
        "subject": "Matemática",
        "topic": "Função quadrática",
        "reason": "Sob aceleração constante, o modelo da posição envolve uma expressão quadrática no tempo."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Mol e constante de Avogadro",
    "context": "Em uma atividade de química, uma amostra de água pura tem massa de 18 g. Não é viável contar suas moléculas uma a uma.",
    "question": "Como a massa se relaciona com o mol e por que a contagem usa notação científica?",
    "answer": "A massa molar aproximada da água é 18 g/mol. Portanto, 18 g correspondem a cerca de 1 mol ou 6,022×10²³ moléculas de H₂O. A notação científica expressa esse número enorme sem perder a ordem de grandeza.",
    "connections": [
      {
        "subject": "Matemática",
        "topic": "Potências, radicais e notação científica",
        "reason": "Expoentes permitem expressar e operar contagens microscópicas."
      },
      {
        "subject": "Química",
        "topic": "Cálculo estequiométrico",
        "reason": "O mol é a ponte entre coeficientes de reação, partículas e massas."
      }
    ]
  },
  {
    "subject": "Química",
    "topic": "Cálculo estequiométrico",
    "context": "Em um problema didático sobre produção de água, a equação balanceada é 2H₂ + O₂ → 2H₂O. Há 4 mol de H₂ e oxigênio suficiente.",
    "question": "Quantos mols de água poderiam ser formados no modelo de reação completa?",
    "answer": "A razão entre H₂ e H₂O é 2:2, portanto 4 mol de H₂ podem produzir 4 mol de H₂O. O cálculo pressupõe reação completa, sem perdas, e não descreve um experimento doméstico.",
    "connections": [
      {
        "subject": "Química",
        "topic": "Mol e constante de Avogadro",
        "reason": "Converter mols em massas ou partículas requer massa molar e constante de Avogadro."
      },
      {
        "subject": "Ciências",
        "topic": "Reações químicas no cotidiano",
        "reason": "O balanceamento decorre da conservação dos átomos nas transformações químicas."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Membrana plasmática e transporte",
    "context": "Ao colocar sal sobre algumas folhas cortadas de verduras, pode aparecer líquido na superfície depois de algum tempo.",
    "question": "Como a diferença de concentração ajuda a explicar a movimentação de água e o que não se deve concluir automaticamente?",
    "answer": "O sal pode criar um ambiente externo hipertônico, favorecendo saída de água das células por osmose. A intensidade depende do tecido e das condições; o líquido observado não prova que todas as células se comportaram identicamente.",
    "connections": [
      {
        "subject": "Ciências",
        "topic": "Estados físicos e mudanças de estado",
        "reason": "Movimento de água por membranas não é a mesma coisa que evaporação ou condensação."
      },
      {
        "subject": "Biologia",
        "topic": "Ciclo celular e mitose",
        "reason": "O controle de trocas pela membrana é necessário para células em crescimento e divisão."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topic": "Ciclo celular e mitose",
    "context": "Depois de um ferimento superficial, tecidos envolvidos na reparação podem produzir novas células para substituir parte das células perdidas.",
    "question": "Por que a duplicação do DNA precisa ocorrer antes da mitose e qual é o resultado cromossômico típico?",
    "answer": "Na fase S, o DNA é replicado para que as cromátides sejam separadas durante a mitose. Se a segregação for correta, os novos núcleos conservam a ploidia original; reparação tecidual também envolve outros processos.",
    "connections": [
      {
        "subject": "Biologia",
        "topic": "Membrana plasmática e transporte",
        "reason": "Células em reparação dependem de trocas controladas de substâncias."
      },
      {
        "subject": "Matemática",
        "topic": "Potências, radicais e notação científica",
        "reason": "Modelos de crescimento celular podem usar potências, sem supor que populações cresçam indefinidamente."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Revolução Industrial",
    "context": "Uma etiqueta de roupa mostra uma cadeia de produção que envolve tecido, máquinas, transporte e venda. O estudante investiga como essa organização do trabalho se consolidou historicamente.",
    "question": "O que mudou com a industrialização e por que é inadequado atribuir a mudança a uma única invenção?",
    "answer": "A industrialização articulou mecanização, fábricas, energia, capital, comércio e mudanças nas relações de trabalho. A primeira fase britânica envolveu vários processos históricos; máquinas isoladas não explicam a transformação social.",
    "connections": [
      {
        "subject": "Sociologia",
        "topic": "Durkheim: fato social e solidariedade",
        "reason": "A especialização das funções produtivas ajuda a discutir divisão do trabalho e interdependência."
      },
      {
        "subject": "História",
        "topic": "Era Vargas",
        "reason": "A industrialização brasileira teve trajetórias e intervenções estatais em outra época e contexto."
      }
    ]
  },
  {
    "subject": "História",
    "topic": "Era Vargas",
    "context": "Ao consultar a origem de direitos trabalhistas, um estudante encontra a CLT de 1943 e percebe que ela reuniu normas num período autoritário do Brasil.",
    "question": "Como avaliar avanços na legislação sem confundir política social e democracia?",
    "answer": "A CLT sistematizou regras trabalhistas em 1943, com alcance desigual entre categorias. O Estado Novo, iniciado em 1937, restringiu liberdades políticas; legislação social não o tornou democrático.",
    "connections": [
      {
        "subject": "História",
        "topic": "Revolução Industrial",
        "reason": "Mudanças no trabalho industrial ajudam a compreender debates posteriores sobre proteção social."
      },
      {
        "subject": "Sociologia",
        "topic": "Weber: ação social e dominação",
        "reason": "A autoridade estatal e suas formas de legitimação podem ser analisadas sem confundir obediência e justiça."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Coordenadas geográficas",
    "context": "Um mapa digital registra um ponto pela latitude −23° e longitude −46°, na convenção de sinais. O usuário precisa identificar a localização relativa do ponto.",
    "question": "Em que hemisférios o ponto está e quais informações as coordenadas, isoladamente, não oferecem?",
    "answer": "Latitude negativa indica sul do Equador; longitude negativa, oeste de Greenwich. As coordenadas angulares não dizem, sozinhas, altitude, tempo de viagem nem condições das ruas.",
    "connections": [
      {
        "subject": "Geografia",
        "topic": "Fusos horários",
        "reason": "A longitude ajuda a entender diferenças de hora solar entre localidades."
      },
      {
        "subject": "Matemática",
        "topic": "Razões, escalas e proporcionalidade",
        "reason": "Escalas cartográficas relacionam distâncias no mapa com medidas no terreno."
      }
    ]
  },
  {
    "subject": "Geografia",
    "topic": "Fusos horários",
    "context": "Uma chamada remota é marcada para 20h numa localidade UTC−3; outra pessoa está em UTC+2, com os offsets fornecidos para essa data.",
    "question": "Que horas será para a segunda pessoa, inclusive a data relativa?",
    "answer": "A diferença é +2−(−3)=5 horas. Portanto, 20h em UTC−3 correspondem a 01h do dia seguinte em UTC+2, assumindo que os offsets informados sejam válidos.",
    "connections": [
      {
        "subject": "Geografia",
        "topic": "Coordenadas geográficas",
        "reason": "Meridianos ajudam a entender a origem geométrica das diferenças de hora solar."
      },
      {
        "subject": "Inglês",
        "topic": "Skimming e scanning",
        "reason": "Localizar horários e condições em avisos internacionais exige leitura pontual cuidadosa."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Sócrates e os sofistas",
    "context": "Numa discussão escolar sobre a proibição de celulares, um grupo apresenta argumentos muito persuasivos, mas ninguém explica o que entende por “uso responsável”.",
    "question": "Que tipo de pergunta permitiria investigar o conceito em vez de apenas escolher o discurso mais convincente?",
    "answer": "Uma pergunta socrática possível é “O que torna um uso responsável?”. Em seguida, compare definições e procure contraexemplos. A força retórica de um discurso não prova sua correção.",
    "connections": [
      {
        "subject": "Filosofia",
        "topic": "Aristóteles e a lógica",
        "reason": "Depois de definir conceitos, examine se as conclusões realmente seguem das premissas."
      },
      {
        "subject": "Português",
        "topic": "Informações explícitas e inferências",
        "reason": "Diferenciar evidência de interpretação é essencial no debate público."
      }
    ]
  },
  {
    "subject": "Filosofia",
    "topic": "Aristóteles e a lógica",
    "context": "Em uma campanha esportiva, lê-se o raciocínio: “Todos os atletas treinam. Carla treina. Logo, Carla é atleta”.",
    "question": "A conclusão decorre necessariamente das premissas apresentadas?",
    "answer": "Não. A premissa diz que atletas pertencem à classe de pessoas que treinam, não que todas as pessoas que treinam sejam atletas. O argumento afirma uma inclusão inversa sem justificativa.",
    "connections": [
      {
        "subject": "Filosofia",
        "topic": "Sócrates e os sofistas",
        "reason": "Perguntas e contraexemplos ajudam a testar conceitos e raciocínios."
      },
      {
        "subject": "Redação",
        "topic": "Formulação de tese",
        "reason": "Uma tese depende de premissas que realmente sustentem sua conclusão."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Durkheim: fato social e solidariedade",
    "context": "Na fila de uma cantina, estudantes geralmente aguardam a vez mesmo quando não há um aviso escrito. Quem passa à frente costuma receber reprovação.",
    "question": "Como a situação ajuda a reconhecer uma norma social e por que essa reprovação não depende de uma lei estatal?",
    "answer": "A regra compartilhada e a pressão do grupo exemplificam exterioridade e coerção social. Para Durkheim, sanções difusas podem orientar comportamentos sem envolver polícia ou lei formal.",
    "connections": [
      {
        "subject": "Sociologia",
        "topic": "Weber: ação social e dominação",
        "reason": "Além de observar a norma, é possível investigar que sentido os estudantes atribuem ao ato de respeitá-la."
      },
      {
        "subject": "História",
        "topic": "Revolução Industrial",
        "reason": "A organização do tempo e a disciplina em instituições também têm trajetórias históricas."
      }
    ]
  },
  {
    "subject": "Sociologia",
    "topic": "Weber: ação social e dominação",
    "context": "Duas pessoas participam da mesma campanha de reciclagem: uma por convicção ambiental; outra pretende melhorar a imagem do próprio negócio.",
    "question": "Por que a mesma atividade externa pode corresponder a diferentes orientações de ação social?",
    "answer": "No primeiro caso, a motivação descrita aproxima-se da ação orientada por valores; no segundo, da ação racional com relação a fins. São tipos ideais, e ações reais podem combinar motivos.",
    "connections": [
      {
        "subject": "Sociologia",
        "topic": "Durkheim: fato social e solidariedade",
        "reason": "Compare o sentido atribuído pelo indivíduo com normas e instituições compartilhadas."
      },
      {
        "subject": "Redação",
        "topic": "Repertório sociocultural produtivo",
        "reason": "Conceitos sociológicos podem fundamentar argumentos sobre participação coletiva se forem explicados."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Elementos visuais: ponto, linha, cor, forma e textura",
    "context": "Um cartaz de campanha escolar usa letras cinza-claro sobre fundo branco e uma ilustração muito detalhada. Muitos leitores têm dificuldade para localizar o horário.",
    "question": "Quais elementos visuais podem melhorar a hierarquia sem alterar a informação?",
    "answer": "Aumentar o contraste entre texto e fundo, criar destaque para o horário e reduzir elementos concorrentes pode facilitar a leitura. As decisões envolvem cor, forma, escala e composição.",
    "connections": [
      {
        "subject": "Arte",
        "topic": "Fotografia, cinema e audiovisual",
        "reason": "Enquadramento e contraste também direcionam a atenção em fotografia e vídeo."
      },
      {
        "subject": "Português",
        "topic": "Coesão referencial",
        "reason": "A comunicação visual e a linguagem verbal precisam indicar com clareza a que informação se referem."
      }
    ]
  },
  {
    "subject": "Arte",
    "topic": "Fotografia, cinema e audiovisual",
    "context": "Duas fotos do mesmo parque aparecem num jornal: uma mostra uma lixeira transbordando em close-up e outra mostra o parque inteiro com diferentes áreas.",
    "question": "Por que nenhuma delas, sozinha, permite concluir qual é a situação geral de limpeza do parque?",
    "answer": "Enquadramentos selecionam partes diferentes da cena. O close-up destaca uma ocorrência localizada e o plano amplo acrescenta contexto, mas ambos exigem mais evidências para generalizar.",
    "connections": [
      {
        "subject": "Arte",
        "topic": "Elementos visuais: ponto, linha, cor, forma e textura",
        "reason": "Linha, contraste e composição influenciam o percurso do olhar."
      },
      {
        "subject": "Literatura",
        "topic": "Narrador e foco narrativo",
        "reason": "A seleção visual de informações se aproxima da escolha de perspectiva numa narrativa."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Esportes coletivos e individuais",
    "context": "Numa aula de voleibol, um aluno executa bem o saque, mas a equipe perde pontos por falta de comunicação durante a recepção.",
    "question": "Qual é a diferença entre dominar um gesto técnico e tomar decisões táticas coletivas?",
    "answer": "O saque é uma habilidade técnica. Posicionamento, comunicação e escolha de quem recebe envolvem organização tática e cooperação. Um bom gesto individual não garante bom desempenho coletivo.",
    "connections": [
      {
        "subject": "Educação Física",
        "topic": "Preconceito e inclusão no esporte",
        "reason": "Organizar papéis e adaptações pode ampliar a participação de colegas com diferentes níveis."
      },
      {
        "subject": "Física",
        "topic": "Leis de Newton",
        "reason": "O movimento da bola envolve forças, mas a estratégia coletiva não se reduz à mecânica."
      }
    ]
  },
  {
    "subject": "Educação Física",
    "topic": "Preconceito e inclusão no esporte",
    "context": "Numa aula de futsal, estudantes com menos experiência ficam sempre como reservas, embora o objetivo seja aprender e participar.",
    "question": "Que mudança concreta pode ampliar a inclusão sem confundir aula escolar com competição profissional?",
    "answer": "Rodízio de participação, equipes equilibradas e regras adaptadas para iniciantes podem criar oportunidades reais de aprendizagem. É importante ouvir a turma e verificar se a adaptação funciona.",
    "connections": [
      {
        "subject": "Educação Física",
        "topic": "Esportes coletivos e individuais",
        "reason": "Entender regras e tática ajuda a adaptar atividades sem abandonar seus objetivos."
      },
      {
        "subject": "Sociologia",
        "topic": "Durkheim: fato social e solidariedade",
        "reason": "Normas informais de um grupo podem reforçar exclusão ou promover cooperação."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Estados físicos e mudanças de estado",
    "context": "Um copo com bebida gelada fica coberto de gotículas do lado de fora durante uma tarde úmida, mesmo sem vazamentos ou rachaduras no vidro.",
    "question": "A água atravessou o vidro ou houve outro processo físico?",
    "answer": "O vapor de água presente no ar pode se condensar ao entrar em contato com a superfície fria. As gotículas externas não precisam ter atravessado o vidro.",
    "connections": [
      {
        "subject": "Ciências",
        "topic": "Reações químicas no cotidiano",
        "reason": "Condensação é mudança física e deve ser diferenciada de formação de novas substâncias."
      },
      {
        "subject": "Biologia",
        "topic": "Membrana plasmática e transporte",
        "reason": "Movimentação de água entre células e meios externos envolve gradientes e membranas, não condensação."
      }
    ]
  },
  {
    "subject": "Ciências",
    "topic": "Reações químicas no cotidiano",
    "context": "Uma grade de ferro exposta à chuva apresenta ferrugem; ao lado, uma poça d'água evapora ao sol. Os fenômenos são observados no mesmo espaço.",
    "question": "Por que os dois fenômenos não devem ser classificados como a mesma transformação?",
    "answer": "A corrosão envolve reações que formam novas espécies químicas a partir do ferro, oxigênio e água. A evaporação transforma água líquida em vapor de H₂O, preservando sua identidade química.",
    "connections": [
      {
        "subject": "Ciências",
        "topic": "Estados físicos e mudanças de estado",
        "reason": "Evaporação e condensação preservam a identidade química da água."
      },
      {
        "subject": "Química",
        "topic": "Cálculo estequiométrico",
        "reason": "As reações químicas podem ser descritas por equações balanceadas e conservação de átomos."
      }
    ]
  }
];
export const everydayContexts:readonly EverydayContext[]=[...earlierEverydayContexts,...stage13EverydayContexts,...stage14EverydayContexts,...stage15EverydayContexts,...stage16EverydayContexts,...stage17EverydayContexts,...stage18EverydayContexts,...stage19EverydayContexts,...stage20EverydayContexts,...stage21EverydayContexts,...stage22EverydayContexts,...stage23EverydayContexts,...stage24EverydayContexts,...stage25EverydayContexts,...stage26EverydayContexts];
const bySubjectTopic=new Map(everydayContexts.map(item=>[item.subject+'\0'+item.topic,item]));
/** Never override published editorial lessons with an unrelated offline scenario. */
export function everydayContextFor(lesson:CourseLesson|null|undefined):EverydayContext|null{
 if(!lesson?.authorship.includes('aula autoral'))return null;
 return bySubjectTopic.get(lesson.subject+'\0'+lesson.topic)??null;
}
