import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original Kognos teaching; non-official, without teacher certification. */
export const provaoDepthBatch38Core:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Segurança na aquisição, armazenagem e utilização de produtos químicos domésticos de produtos…",
    "objective": "Interpretar e resolver situações específicas de Segurança de produtos domésticos com condições de validade, comparações e análise de erros.",
    "prerequisites": [
      "Conceitos e vocabulário básicos de Química",
      "Leitura de dados e exemplos contextualizados",
      "Verificação de hipóteses e unidades"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos e definições — Segurança de produtos domésticos",
        "explanation": "No nível conceitual, identifique os termos e os processos antes de executar qualquer procedimento. A definição precisa impede aplicar uma regra fora do domínio. Perigo é propriedade intrínseca; risco depende de exposição, concentração, tempo e via de contato. A água sanitária pode conter hipoclorito e jamais deve ser misturada a produtos ácidos ou amoniacais, pois há risco de gases tóxicos. Rótulos, pictogramas, embalagem original, ventilação e guarda fora do alcance reduzem exposição. A identificação por cheiro não é método seguro. Uma porcentagem em massa deve ser interpretada pela massa total da solução, não pelo volume sem densidade. A diluição matemática pressupõe conservação do soluto sem reação, portanto não autoriza misturar produtos. Descarte e resposta a acidentes dependem da composição e de orientações especializadas. A comparação de cenários deve separar perigo, probabilidade e gravidade, evitando testar misturas. A interpretação de uma questão objetiva exige eliminar alternativas por evidências explícitas e não por semelhança verbal. A conclusão deve corresponder à situação estudada, com linguagem específica e precisão conceitual.",
        "example": "Uma solução didática inerte de 10 g/L precisa produzir 200 mL a 2 g/L. Pela conservação de soluto, V₁=2×200/10=40 mL, completando a 200 mL. O cálculo não vale para substâncias que reagem entre si. Identifique os termos do enunciado e confira a correspondência entre a situação e a regra empregada.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicações e exemplos — Segurança de produtos domésticos",
        "explanation": "No nível de aplicação, decomponha o problema em dados, operações e interpretação. Compare duas situações com condições diferentes para verificar se a conclusão se mantém. Perigo é propriedade intrínseca; risco depende de exposição, concentração, tempo e via de contato. A água sanitária pode conter hipoclorito e jamais deve ser misturada a produtos ácidos ou amoniacais, pois há risco de gases tóxicos. Rótulos, pictogramas, embalagem original, ventilação e guarda fora do alcance reduzem exposição. A identificação por cheiro não é método seguro. Uma porcentagem em massa deve ser interpretada pela massa total da solução, não pelo volume sem densidade. A diluição matemática pressupõe conservação do soluto sem reação, portanto não autoriza misturar produtos. Descarte e resposta a acidentes dependem da composição e de orientações especializadas. A comparação de cenários deve separar perigo, probabilidade e gravidade, evitando testar misturas. Ao conferir o resultado, volte à definição, aos dados e ao contexto; valores numericamente corretos podem ser inadequados se as unidades, o domínio ou a finalidade forem diferentes.",
        "example": "Uma solução didática inerte de 10 g/L precisa produzir 200 mL a 2 g/L. Pela conservação de soluto, V₁=2×200/10=40 mL, completando a 200 mL. O cálculo não vale para substâncias que reagem entre si. Compare com um segundo caso de dados distintos e confira se as mesmas hipóteses ainda se aplicam.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento e exceções — Segurança de produtos domésticos",
        "explanation": "No aprofundamento, investigue exceções, hipóteses e limites do modelo, evitando generalizações automáticas a partir de um único exemplo. Perigo é propriedade intrínseca; risco depende de exposição, concentração, tempo e via de contato. A água sanitária pode conter hipoclorito e jamais deve ser misturada a produtos ácidos ou amoniacais, pois há risco de gases tóxicos. Rótulos, pictogramas, embalagem original, ventilação e guarda fora do alcance reduzem exposição. A identificação por cheiro não é método seguro. Uma porcentagem em massa deve ser interpretada pela massa total da solução, não pelo volume sem densidade. A diluição matemática pressupõe conservação do soluto sem reação, portanto não autoriza misturar produtos. Descarte e resposta a acidentes dependem da composição e de orientações especializadas. A comparação de cenários deve separar perigo, probabilidade e gravidade, evitando testar misturas. Uma resposta rigorosa explicita o que se sabe, o que foi inferido e o que não pode ser concluído. Comparações entre casos precisam manter constantes as variáveis relevantes e declarar incertezas.",
        "example": "Uma solução didática inerte de 10 g/L precisa produzir 200 mL a 2 g/L. Pela conservação de soluto, V₁=2×200/10=40 mL, completando a 200 mL. O cálculo não vale para substâncias que reagem entre si. Reexamine o resultado e indique uma condição em que não seria válido generalizar a conclusão.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "O que diferencia risco de perigo?",
        "options": [
          "O risco depende também das condições de exposição",
          "A mistura de produtos é sempre segura",
          "A identificação pelo cheiro é recomendada",
          "O rótulo dispensa avaliação do contexto"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "Perigo é uma propriedade capaz de causar dano, enquanto risco considera exposição e condições reais. Portanto a primeira opção é correta, pois inclui concentração, duração e via de contato."
      },
      {
        "level": "intermediate",
        "prompt": "Uma solução inerte de 10 g/L deve produzir 200 mL a 2 g/L. Qual volume inicial?",
        "options": [
          "40 mL",
          "20 mL",
          "100 mL",
          "200 mL"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "Conservação do soluto sem reação: C₁V₁=C₂V₂, logo V₁=2×200/10=40 mL. A expressão é válida para uma diluição inerte, não para produtos incompatíveis."
      },
      {
        "level": "advanced",
        "prompt": "Qual é uma medida preventiva correta?",
        "options": [
          "Manter embalagem original identificada",
          "Misturar água sanitária com ácido",
          "Cheirar produto desconhecido",
          "Guardar produto em garrafa de bebida"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "A embalagem original contém identificação e instruções, reduzindo ingestão acidental e confusão. Misturar produtos incompatíveis ou identificá-los pelo cheiro é inseguro."
      }
    ]
  },
  {
    "subject": "Português",
    "topicStart": "Norma ortográfica. Relação entre escrita e oralidade",
    "objective": "Interpretar e resolver situações específicas de Ortografia e variação com condições de validade, comparações e análise de erros.",
    "prerequisites": [
      "Conceitos e vocabulário básicos de Português",
      "Leitura de dados e exemplos contextualizados",
      "Verificação de hipóteses e unidades"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos e definições — Ortografia e variação",
        "explanation": "No nível conceitual, identifique os termos e os processos antes de executar qualquer procedimento. A definição precisa impede aplicar uma regra fora do domínio. A ortografia do português não reproduz todos os sons de cada variedade oral. O fonema /s/ pode aparecer como s, ss, c ou ç, enquanto x assume valores sonoros diferentes conforme a palavra. A norma escrita estabiliza convenções, mas variações de pronúncia e concordância não indicam inferioridade intelectual. Acentuação depende de tonicidade e estrutura vocálica: saída contém í tônico em hiato, enquanto ideia não recebe o antigo acento em paroxítona com ditongo aberto. Homófonos exigem contexto: sessão é período de atividade, seção é divisão e cessão é transferência. A distinção entre por que, porque, por quê e porquê depende da função sintática. Revisão crítica deve preservar sentido e diferenciar grafia convencional, efeito estilístico e registro. A interpretação de uma questão objetiva exige eliminar alternativas por evidências explícitas e não por semelhança verbal. A conclusão deve corresponder à situação estudada, com linguagem específica e precisão conceitual.",
        "example": "Na frase 'A seção de cinema organizou uma sessão sobre cessão de direitos', substitua cada palavra por divisão, encontro e transferência. As paráfrases demonstram que a pronúncia semelhante não resolve a grafia sem contexto. Identifique os termos do enunciado e confira a correspondência entre a situação e a regra empregada.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicações e exemplos — Ortografia e variação",
        "explanation": "No nível de aplicação, decomponha o problema em dados, operações e interpretação. Compare duas situações com condições diferentes para verificar se a conclusão se mantém. A ortografia do português não reproduz todos os sons de cada variedade oral. O fonema /s/ pode aparecer como s, ss, c ou ç, enquanto x assume valores sonoros diferentes conforme a palavra. A norma escrita estabiliza convenções, mas variações de pronúncia e concordância não indicam inferioridade intelectual. Acentuação depende de tonicidade e estrutura vocálica: saída contém í tônico em hiato, enquanto ideia não recebe o antigo acento em paroxítona com ditongo aberto. Homófonos exigem contexto: sessão é período de atividade, seção é divisão e cessão é transferência. A distinção entre por que, porque, por quê e porquê depende da função sintática. Revisão crítica deve preservar sentido e diferenciar grafia convencional, efeito estilístico e registro. Ao conferir o resultado, volte à definição, aos dados e ao contexto; valores numericamente corretos podem ser inadequados se as unidades, o domínio ou a finalidade forem diferentes.",
        "example": "Na frase 'A seção de cinema organizou uma sessão sobre cessão de direitos', substitua cada palavra por divisão, encontro e transferência. As paráfrases demonstram que a pronúncia semelhante não resolve a grafia sem contexto. Compare com um segundo caso de dados distintos e confira se as mesmas hipóteses ainda se aplicam.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento e exceções — Ortografia e variação",
        "explanation": "No aprofundamento, investigue exceções, hipóteses e limites do modelo, evitando generalizações automáticas a partir de um único exemplo. A ortografia do português não reproduz todos os sons de cada variedade oral. O fonema /s/ pode aparecer como s, ss, c ou ç, enquanto x assume valores sonoros diferentes conforme a palavra. A norma escrita estabiliza convenções, mas variações de pronúncia e concordância não indicam inferioridade intelectual. Acentuação depende de tonicidade e estrutura vocálica: saída contém í tônico em hiato, enquanto ideia não recebe o antigo acento em paroxítona com ditongo aberto. Homófonos exigem contexto: sessão é período de atividade, seção é divisão e cessão é transferência. A distinção entre por que, porque, por quê e porquê depende da função sintática. Revisão crítica deve preservar sentido e diferenciar grafia convencional, efeito estilístico e registro. Uma resposta rigorosa explicita o que se sabe, o que foi inferido e o que não pode ser concluído. Comparações entre casos precisam manter constantes as variáveis relevantes e declarar incertezas.",
        "example": "Na frase 'A seção de cinema organizou uma sessão sobre cessão de direitos', substitua cada palavra por divisão, encontro e transferência. As paráfrases demonstram que a pronúncia semelhante não resolve a grafia sem contexto. Reexamine o resultado e indique uma condição em que não seria válido generalizar a conclusão.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em 'A ___ de cinema começa às 20h', qual palavra usar?",
        "options": [
          "sessão",
          "seção",
          "cessão",
          "sesão"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "Sessão significa período de exibição ou reunião. Seção é divisão e cessão é ato de transferir algo. O contexto do cinema e horário determina a grafia."
      },
      {
        "level": "intermediate",
        "prompt": "Qual palavra tem í tônico em hiato?",
        "options": [
          "saída",
          "ideia",
          "plateia",
          "assembleia"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "Saída apresenta hiato sa-í-da, com í tônico acentuado. Ideia, plateia e assembleia não recebem acento antigo em ditongo aberto de paroxítonas."
      },
      {
        "level": "advanced",
        "prompt": "Em 'Não sei ___ ele saiu', qual forma cabe?",
        "options": [
          "por que",
          "porque",
          "porquê",
          "por quê"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "A construção é interrogativa indireta e equivale a 'não sei por qual motivo'. Porque introduz explicação, porquê é substantivo e por quê ocorre em posição final."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topicStart": "Gráfico de funções expressas por uma sentença",
    "objective": "Interpretar e resolver situações específicas de Funções e gráficos com condições de validade, comparações e análise de erros.",
    "prerequisites": [
      "Conceitos e vocabulário básicos de Matemática",
      "Leitura de dados e exemplos contextualizados",
      "Verificação de hipóteses e unidades"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos e definições — Funções e gráficos",
        "explanation": "No nível conceitual, identifique os termos e os processos antes de executar qualquer procedimento. A definição precisa impede aplicar uma regra fora do domínio. O gráfico de uma função é o conjunto de pares (x,f(x)) com x no domínio, não necessariamente uma linha contínua. Para f(x)=2x−3, os pontos (0,−3), (1,−1) e (2,1) pertencem à reta, mas domínio finito produz somente pontos isolados. Em f(x)=ax+b, a indica variação de y por unidade de x, enquanto b=f(0) se zero pertence ao domínio. A interseção entre duas tarifas ocorre igualando as expressões e conferindo restrições físicas. Para uma quadrática ax²+bx+c, a concavidade depende do sinal de a, e o vértice tem x=−b/(2a). Uma parábola com a negativo possui máximo no vértice se este pertence ao domínio. Escalas dos eixos alteram aparência, não relação algébrica. A interpretação deve separar instante do máximo e valor máximo. A interpretação de uma questão objetiva exige eliminar alternativas por evidências explícitas e não por semelhança verbal. A conclusão deve corresponder à situação estudada, com linguagem específica e precisão conceitual.",
        "example": "Para h(t)=−t²+4t no intervalo [0,4], calcule o vértice em t=2 e h(2)=4. Confira h(1)=h(3)=3 e raízes 0 e 4; o valor máximo é 4, mas o instante do máximo é 2. Identifique os termos do enunciado e confira a correspondência entre a situação e a regra empregada.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicações e exemplos — Funções e gráficos",
        "explanation": "No nível de aplicação, decomponha o problema em dados, operações e interpretação. Compare duas situações com condições diferentes para verificar se a conclusão se mantém. O gráfico de uma função é o conjunto de pares (x,f(x)) com x no domínio, não necessariamente uma linha contínua. Para f(x)=2x−3, os pontos (0,−3), (1,−1) e (2,1) pertencem à reta, mas domínio finito produz somente pontos isolados. Em f(x)=ax+b, a indica variação de y por unidade de x, enquanto b=f(0) se zero pertence ao domínio. A interseção entre duas tarifas ocorre igualando as expressões e conferindo restrições físicas. Para uma quadrática ax²+bx+c, a concavidade depende do sinal de a, e o vértice tem x=−b/(2a). Uma parábola com a negativo possui máximo no vértice se este pertence ao domínio. Escalas dos eixos alteram aparência, não relação algébrica. A interpretação deve separar instante do máximo e valor máximo. Ao conferir o resultado, volte à definição, aos dados e ao contexto; valores numericamente corretos podem ser inadequados se as unidades, o domínio ou a finalidade forem diferentes.",
        "example": "Para h(t)=−t²+4t no intervalo [0,4], calcule o vértice em t=2 e h(2)=4. Confira h(1)=h(3)=3 e raízes 0 e 4; o valor máximo é 4, mas o instante do máximo é 2. Compare com um segundo caso de dados distintos e confira se as mesmas hipóteses ainda se aplicam.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento e exceções — Funções e gráficos",
        "explanation": "No aprofundamento, investigue exceções, hipóteses e limites do modelo, evitando generalizações automáticas a partir de um único exemplo. O gráfico de uma função é o conjunto de pares (x,f(x)) com x no domínio, não necessariamente uma linha contínua. Para f(x)=2x−3, os pontos (0,−3), (1,−1) e (2,1) pertencem à reta, mas domínio finito produz somente pontos isolados. Em f(x)=ax+b, a indica variação de y por unidade de x, enquanto b=f(0) se zero pertence ao domínio. A interseção entre duas tarifas ocorre igualando as expressões e conferindo restrições físicas. Para uma quadrática ax²+bx+c, a concavidade depende do sinal de a, e o vértice tem x=−b/(2a). Uma parábola com a negativo possui máximo no vértice se este pertence ao domínio. Escalas dos eixos alteram aparência, não relação algébrica. A interpretação deve separar instante do máximo e valor máximo. Uma resposta rigorosa explicita o que se sabe, o que foi inferido e o que não pode ser concluído. Comparações entre casos precisam manter constantes as variáveis relevantes e declarar incertezas.",
        "example": "Para h(t)=−t²+4t no intervalo [0,4], calcule o vértice em t=2 e h(2)=4. Confira h(1)=h(3)=3 e raízes 0 e 4; o valor máximo é 4, mas o instante do máximo é 2. Reexamine o resultado e indique uma condição em que não seria válido generalizar a conclusão.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Para f(x)=2x−3, qual ponto pertence ao gráfico?",
        "options": [
          "(2,1)",
          "(1,2)",
          "(0,3)",
          "(2,2)"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "Substituindo x=2, f(2)=4−3=1, então (2,1) satisfaz a expressão. Os demais pares não atendem à equação da função. A justificativa depende das condições expressas no enunciado, e a resposta é verificada pelo procedimento apresentado, não por semelhança verbal entre alternativas."
      },
      {
        "level": "intermediate",
        "prompt": "Onde C₁(d)=4d+7 e C₂(d)=5d+2 se cruzam?",
        "options": [
          "d=5",
          "d=2",
          "d=7",
          "d=0"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "Igualando 4d+7=5d+2, isolamos d=5. Substituição confirma C₁(5)=27 e C₂(5)=27, com distância não negativa. A justificativa depende das condições expressas no enunciado, e a resposta é verificada pelo procedimento apresentado, não por semelhança verbal entre alternativas."
      },
      {
        "level": "advanced",
        "prompt": "Qual máximo de h(t)=−t²+4t em [0,4]?",
        "options": [
          "4 em t=2",
          "2 em t=4",
          "0 em t=2",
          "8 em t=0"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "O vértice é t=−4/(2×−1)=2 e h(2)=4. A parábola abre para baixo, portanto esse é o valor máximo no intervalo físico considerado. A justificativa depende das condições expressas no enunciado, e a resposta é verificada pelo procedimento apresentado, não por semelhança verbal entre alternativas."
      }
    ]
  },
  {
    "subject": "Matemática",
    "topicStart": "Sistema Internacional de Medidas: principais unidades e conversões",
    "objective": "Interpretar e resolver situações específicas de Unidades e conversões com condições de validade, comparações e análise de erros.",
    "prerequisites": [
      "Conceitos e vocabulário básicos de Matemática",
      "Leitura de dados e exemplos contextualizados",
      "Verificação de hipóteses e unidades"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Conceitos e definições — Unidades e conversões",
        "explanation": "No nível conceitual, identifique os termos e os processos antes de executar qualquer procedimento. A definição precisa impede aplicar uma regra fora do domínio. O SI estabelece unidades de base como metro, segundo, quilograma, ampere, kelvin, mol e candela. Prefixos decimais alteram escalas: quilo é 10³, centi é 10⁻² e mili é 10⁻³. Ao converter áreas, eleve o fator linear ao quadrado: 1 m²=10000 cm²; para volumes, ao cubo: 1 m³=1000000 cm³=1000 L. A velocidade em km/h é convertida para m/s dividindo por 3,6. O quilowatt-hora é energia, não potência: 1 kWh=3,6 milhões de joules. Celsius e Kelvin diferem por deslocamento de origem, não por fator multiplicativo. Análise dimensional evita somar metros a segundos ou confundir volume com área. Dimensões internas de uma caixa, não necessariamente externas, determinam capacidade. A conversão preserva a grandeza física mesmo quando muda o valor numérico. A interpretação de uma questão objetiva exige eliminar alternativas por evidências explícitas e não por semelhança verbal. A conclusão deve corresponder à situação estudada, com linguagem específica e precisão conceitual.",
        "example": "Uma caixa interna mede 2 m×0,5 m×0,4 m: volume=0,4 m³=400 L. Conferindo em centímetros, 200×50×40=400000 cm³; dividindo por 1000 cm³/L, obtemos os mesmos 400 L. Identifique os termos do enunciado e confira a correspondência entre a situação e a regra empregada.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      },
      {
        "level": "intermediate",
        "title": "Aplicações e exemplos — Unidades e conversões",
        "explanation": "No nível de aplicação, decomponha o problema em dados, operações e interpretação. Compare duas situações com condições diferentes para verificar se a conclusão se mantém. O SI estabelece unidades de base como metro, segundo, quilograma, ampere, kelvin, mol e candela. Prefixos decimais alteram escalas: quilo é 10³, centi é 10⁻² e mili é 10⁻³. Ao converter áreas, eleve o fator linear ao quadrado: 1 m²=10000 cm²; para volumes, ao cubo: 1 m³=1000000 cm³=1000 L. A velocidade em km/h é convertida para m/s dividindo por 3,6. O quilowatt-hora é energia, não potência: 1 kWh=3,6 milhões de joules. Celsius e Kelvin diferem por deslocamento de origem, não por fator multiplicativo. Análise dimensional evita somar metros a segundos ou confundir volume com área. Dimensões internas de uma caixa, não necessariamente externas, determinam capacidade. A conversão preserva a grandeza física mesmo quando muda o valor numérico. Ao conferir o resultado, volte à definição, aos dados e ao contexto; valores numericamente corretos podem ser inadequados se as unidades, o domínio ou a finalidade forem diferentes.",
        "example": "Uma caixa interna mede 2 m×0,5 m×0,4 m: volume=0,4 m³=400 L. Conferindo em centímetros, 200×50×40=400000 cm³; dividindo por 1000 cm³/L, obtemos os mesmos 400 L. Compare com um segundo caso de dados distintos e confira se as mesmas hipóteses ainda se aplicam.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      },
      {
        "level": "advanced",
        "title": "Aprofundamento e exceções — Unidades e conversões",
        "explanation": "No aprofundamento, investigue exceções, hipóteses e limites do modelo, evitando generalizações automáticas a partir de um único exemplo. O SI estabelece unidades de base como metro, segundo, quilograma, ampere, kelvin, mol e candela. Prefixos decimais alteram escalas: quilo é 10³, centi é 10⁻² e mili é 10⁻³. Ao converter áreas, eleve o fator linear ao quadrado: 1 m²=10000 cm²; para volumes, ao cubo: 1 m³=1000000 cm³=1000 L. A velocidade em km/h é convertida para m/s dividindo por 3,6. O quilowatt-hora é energia, não potência: 1 kWh=3,6 milhões de joules. Celsius e Kelvin diferem por deslocamento de origem, não por fator multiplicativo. Análise dimensional evita somar metros a segundos ou confundir volume com área. Dimensões internas de uma caixa, não necessariamente externas, determinam capacidade. A conversão preserva a grandeza física mesmo quando muda o valor numérico. Uma resposta rigorosa explicita o que se sabe, o que foi inferido e o que não pode ser concluído. Comparações entre casos precisam manter constantes as variáveis relevantes e declarar incertezas.",
        "example": "Uma caixa interna mede 2 m×0,5 m×0,4 m: volume=0,4 m³=400 L. Conferindo em centímetros, 200×50×40=400000 cm³; dividindo por 1000 cm³/L, obtemos os mesmos 400 L. Reexamine o resultado e indique uma condição em que não seria válido generalizar a conclusão.",
        "pitfall": "Erro frequente: aplicar uma fórmula ou regra sem considerar o contexto, as unidades, o domínio e as exceções relevantes.",
        "steps": [
          "Identifique a hipótese e os dados.",
          "Aplique o procedimento demonstrado.",
          "Confira a conclusão e as limitações."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Quanto vale 1 m² em cm²?",
        "options": [
          "10000 cm²",
          "100 cm²",
          "1000 cm²",
          "100000 cm²"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "Como 1 m=100 cm, a conversão de área exige elevar o fator ao quadrado: 1 m²=(100 cm)²=10000 cm², não apenas 100. A justificativa depende das condições expressas no enunciado, e a resposta é verificada pelo procedimento apresentado, não por semelhança verbal entre alternativas."
      },
      {
        "level": "intermediate",
        "prompt": "Quanto vale 72 km/h em m/s?",
        "options": [
          "20 m/s",
          "72 m/s",
          "2 m/s",
          "259,2 m/s"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "Divida por 3,6, pois 1000 m/km e 3600 s/h atuam em sentidos opostos na razão: 72÷3,6=20 m/s. A justificativa depende das condições expressas no enunciado, e a resposta é verificada pelo procedimento apresentado, não por semelhança verbal entre alternativas."
      },
      {
        "level": "advanced",
        "prompt": "Um aparelho de 500 W durante 2 h consome:",
        "options": [
          "1 kWh",
          "500 kWh",
          "0,25 kWh",
          "1000 kWh"
        ],
        "correctIndex": 0,
        "hint": "Verifique a definição e a operação do exemplo.",
        "solution": "Converta 500 W em 0,5 kW e multiplique pelo tempo de 2 h: 0,5×2=1 kWh. Trata-se de energia, equivalente a 3,6 milhões de joules. A justificativa depende das condições expressas no enunciado, e a resposta é verificada pelo procedimento apresentado, não por semelhança verbal entre alternativas."
      }
    ]
  }
];
