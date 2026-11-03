import type {LearningLesson} from './learning-catalog.ts';
import type {DemoQuestion} from './demo-questions.ts';

/** Original Kognos preparatory mini-lessons. Repository LICENSE applies.
 * Editorial orientation, not official questions or exhaustive syllabus coverage.
 * See docs/learning-catalog.md for provenance and verification limits. */
const entries: (LearningLesson & {exercise: DemoQuestion})[] = [
  {
    "id": "math-ratios",
    "subject": "Matemática",
    "topic": "Razões, escalas e proporcionalidade",
    "prerequisites": [
      "math-percentages"
    ],
    "objective": "Resolver relações diretas e inversas entre grandezas.",
    "explanation": "Duas grandezas são diretamente proporcionais quando sua razão é constante; são inversamente proporcionais quando seu produto é constante. Antes de montar a proporção, pergunte se dobrar uma grandeza dobra ou reduz a outra pela metade. Nem toda relação crescente é proporcional.",
    "workedExample": "Se 3 cadernos iguais custam R$ 18, cada um custa R$ 6 e 5 custam R$ 30. Já dobrar o número de trabalhadores igualmente produtivos reduz pela metade o tempo para uma tarefa divisível.",
    "commonMistake": "Aplicar regra de três direta a uma relação inversa.",
    "check": "Por que o custo por unidade precisa ser constante?",
    "minutes": 12,
    "questionId": "q21",
    "exercise": {
      "id": "q21",
      "subject": "Matemática",
      "topic": "Razões, escalas e proporcionalidade",
      "difficulty": "Intermediária",
      "prompt": "Quatro máquinas iguais concluem um lote em 6 horas. Oito máquinas, com produtividade constante, precisam de quanto tempo?",
      "options": [
        "12 h",
        "3 h",
        "6 h",
        "2 h"
      ],
      "correct": 1,
      "explanation": "O trabalho total é 4 × 6 = 24 máquina-horas. Com 8 máquinas, o tempo é 24/8 = 3 h."
    }
  },
  {
    "id": "math-quadratic",
    "subject": "Matemática",
    "topic": "Funções afim, quadrática e modular",
    "prerequisites": [
      "math-functions"
    ],
    "objective": "Relacionar raízes e vértice ao gráfico de uma função quadrática.",
    "explanation": "Na função f(x)=ax²+bx+c, com a diferente de zero, o gráfico é uma parábola. O sinal de a determina a concavidade. As raízes são as interseções com o eixo x e o vértice tem abscissa −b/(2a). O valor absoluto, ou módulo, mede distância até zero e nunca é negativo.",
    "workedExample": "Para f(x)=x²−4x+3, a fatoração (x−1)(x−3) revela raízes 1 e 3. O vértice está em x=2 e f(2)=−1: é o mínimo, pois a é positivo.",
    "commonMistake": "Tratar o vértice como uma raiz obrigatória.",
    "check": "Como a concavidade indica máximo ou mínimo?",
    "minutes": 12,
    "questionId": "q22",
    "exercise": {
      "id": "q22",
      "subject": "Matemática",
      "topic": "Funções afim, quadrática e modular",
      "difficulty": "Intermediária",
      "prompt": "Qual é o valor mínimo de f(x)=x²−6x+8?",
      "options": [
        "0",
        "−3",
        "−1",
        "8"
      ],
      "correct": 2,
      "explanation": "O vértice está em x=3. Substituindo: 9−18+8=−1, mínimo porque a=1 é positivo."
    }
  },
  {
    "id": "math-sequences",
    "subject": "Matemática",
    "topic": "Progressões aritmética e geométrica",
    "prerequisites": [
      "math-equations"
    ],
    "objective": "Distinguir crescimento por diferença constante e por razão constante.",
    "explanation": "Na PA, cada termo resulta da soma de uma razão r: an=a1+(n−1)r. Na PG, multiplica-se pela razão q: an=a1×q^(n−1). O primeiro termo corresponde a n=1. Verifique as diferenças e os quocientes antes de escolher o modelo.",
    "workedExample": "Na PA 4, 7, 10, a razão é 3 e o quinto termo vale 4+4×3=16. Na PG 4, 8, 16, a razão é 2 e o quinto termo vale 4×2⁴=64.",
    "commonMistake": "Usar n multiplicações quando o primeiro termo já é conhecido.",
    "check": "Como reconhecer uma PG observando três termos?",
    "minutes": 12,
    "questionId": "q23",
    "exercise": {
      "id": "q23",
      "subject": "Matemática",
      "topic": "Progressões aritmética e geométrica",
      "difficulty": "Intermediária",
      "prompt": "Uma PG começa com 3 e tem razão 2. Qual é seu quarto termo?",
      "options": [
        "12",
        "18",
        "48",
        "24"
      ],
      "correct": 3,
      "explanation": "Do primeiro ao quarto termo são três multiplicações por 2: 3×2³=24."
    }
  },
  {
    "id": "math-geometry",
    "subject": "Matemática",
    "topic": "Geometria plana e semelhança",
    "prerequisites": [
      "math-ratios"
    ],
    "objective": "Usar semelhança e Pitágoras para determinar medidas.",
    "explanation": "Triângulos semelhantes têm ângulos correspondentes iguais e lados correspondentes proporcionais. Se a razão dos comprimentos é k, a das áreas é k². Em triângulos retângulos, o quadrado da hipotenusa é a soma dos quadrados dos catetos. A hipotenusa é oposta ao ângulo reto.",
    "workedExample": "Uma escada forma um triângulo retângulo com catetos de 3 m e 4 m. Seu comprimento é √(9+16)=5 m. Ao duplicar todas as medidas, a área fica quatro vezes maior.",
    "commonMistake": "Somar os catetos para obter a hipotenusa.",
    "check": "Por que dobrar os lados quadruplica a área?",
    "minutes": 12,
    "questionId": "q24",
    "exercise": {
      "id": "q24",
      "subject": "Matemática",
      "topic": "Geometria plana e semelhança",
      "difficulty": "Intermediária",
      "prompt": "Dois triângulos semelhantes têm razão entre lados de 3. Qual é a razão entre suas áreas?",
      "options": [
        "9",
        "3",
        "6",
        "27"
      ],
      "correct": 0,
      "explanation": "A área varia com o quadrado da razão linear: 3²=9."
    }
  },
  {
    "id": "math-statistics",
    "subject": "Matemática",
    "topic": "Estatística descritiva e medidas de dispersão",
    "prerequisites": [
      "math-percentages"
    ],
    "objective": "Comparar média, mediana e amplitude em conjuntos de dados.",
    "explanation": "A média soma os valores e divide pela quantidade; a mediana é o centro dos dados ordenados. A amplitude é a diferença entre máximo e mínimo. Valores extremos afetam fortemente a média, por isso ela pode não representar bem um grupo desigual. Leia também a escala dos gráficos.",
    "workedExample": "Nas notas 4, 6, 6, 8, 16, a média é 40/5=8, a mediana é 6 e a amplitude é 12. A nota 16 eleva a média sem alterar o valor central.",
    "commonMistake": "Calcular a mediana sem ordenar os dados.",
    "check": "Qual medida você usaria para reduzir o efeito de um valor extremo?",
    "minutes": 12,
    "questionId": "q25",
    "exercise": {
      "id": "q25",
      "subject": "Matemática",
      "topic": "Estatística descritiva e medidas de dispersão",
      "difficulty": "Intermediária",
      "prompt": "Qual é a mediana dos valores 9, 2, 5, 4 e 20?",
      "options": [
        "8",
        "9",
        "5",
        "4"
      ],
      "correct": 2,
      "explanation": "Ordenando os dados: 2, 4, 5, 9, 20. O terceiro valor, 5, é a mediana."
    }
  },
  {
    "id": "pt-cohesion",
    "subject": "Português",
    "topic": "Coesão, coerência e progressão temática",
    "prerequisites": [
      "pt-reading"
    ],
    "objective": "Reconhecer como conectivos e retomadas organizam um texto.",
    "explanation": "Coesão é a ligação linguística entre partes do texto, feita por pronomes, conectivos e substituições. Coerência é a construção de sentido compatível com o contexto. Progressão temática acrescenta informações sem perder o assunto. Um conectivo adequado deve preservar a relação lógica pretendida.",
    "workedExample": "Em “O transporte atrasou; por isso, a reunião começou depois”, o segundo fato aparece como consequência. Trocar “por isso” por “embora” altera a relação e exige reorganizar a frase.",
    "commonMistake": "Escolher um conectivo apenas para evitar repetição, sem verificar o sentido.",
    "check": "Qual relação a expressão “porém” costuma indicar?",
    "minutes": 12,
    "questionId": "q26",
    "exercise": {
      "id": "q26",
      "subject": "Português",
      "topic": "Coesão, coerência e progressão temática",
      "difficulty": "Intermediária",
      "prompt": "Em “Estudou bastante; contudo, não foi aprovado”, contudo expressa:",
      "options": [
        "Causa",
        "Oposição",
        "Finalidade",
        "Adição"
      ],
      "correct": 1,
      "explanation": "“Contudo” introduz um contraste com a expectativa de aprovação após o estudo."
    }
  },
  {
    "id": "pt-language",
    "subject": "Português",
    "topic": "Variação linguística e norma-padrão",
    "prerequisites": [
      "pt-reading"
    ],
    "objective": "Analisar variedades linguísticas sem confundir diferença com inferioridade.",
    "explanation": "A língua varia conforme região, grupo social, época e situação comunicativa. A norma-padrão é uma referência para certos usos formais, não uma descrição de toda fala real. Adequação depende de quem fala, para quem e com qual finalidade. O preconceito linguístico desvaloriza pessoas por sua variedade.",
    "workedExample": "Uma mensagem a um amigo pode usar abreviações. Num requerimento, a escrita formal facilita a comunicação institucional. A mudança de registro não torna um falante mais ou menos inteligente.",
    "commonMistake": "Considerar toda fala informal um erro que prova falta de capacidade.",
    "check": "Como o público influencia a escolha de registro?",
    "minutes": 12,
    "questionId": "q27",
    "exercise": {
      "id": "q27",
      "subject": "Português",
      "topic": "Variação linguística e norma-padrão",
      "difficulty": "Intermediária",
      "prompt": "Qual análise considera adequação linguística?",
      "options": [
        "Toda variedade regional é incorreta",
        "A fala informal não tem regras",
        "Registro formal é obrigatório entre amigos",
        "O registro pode mudar conforme o contexto"
      ],
      "correct": 3,
      "explanation": "Adequação considera situação, interlocutor e finalidade, sem hierarquizar a capacidade dos falantes."
    }
  },
  {
    "id": "pt-figures",
    "subject": "Português",
    "topic": "Semântica e figuras de linguagem",
    "prerequisites": [
      "pt-reading"
    ],
    "objective": "Distinguir metáfora, comparação e ironia pelo contexto.",
    "explanation": "Na metáfora, um sentido é transferido por associação: “tempo é dinheiro”. Na comparação, a aproximação costuma ser marcada por “como”. A ironia depende de um contraste entre o enunciado e a situação; sua interpretação exige pistas contextuais. A figura não é apenas uma palavra isolada.",
    "workedExample": "“A cidade acordou” atribui comportamento humano à cidade, produzindo personificação. “Ela corre como o vento” marca uma comparação pela expressão “como”.",
    "commonMistake": "Identificar ironia sem observar a situação e o tom do texto.",
    "check": "O que distingue metáfora de comparação explícita?",
    "minutes": 12,
    "questionId": "q28",
    "exercise": {
      "id": "q28",
      "subject": "Português",
      "topic": "Semântica e figuras de linguagem",
      "difficulty": "Intermediária",
      "prompt": "Em “As estrelas sorriam na noite”, qual recurso predomina?",
      "options": [
        "Personificação",
        "Pleonasmo",
        "Eufemismo",
        "Antítese"
      ],
      "correct": 0,
      "explanation": "Sorrir é uma ação humana atribuída às estrelas, caracterizando personificação."
    }
  },
  {
    "id": "pt-syntax",
    "subject": "Português",
    "topic": "Sintaxe da oração e do período",
    "prerequisites": [
      "pt-grammar"
    ],
    "objective": "Identificar sujeito e relações entre orações.",
    "explanation": "O sujeito se relaciona ao predicado e pode aparecer depois do verbo. Orações coordenadas mantêm independência sintática; subordinadas exercem uma função em outra oração. Para analisar, localize os verbos, identifique seus complementos e observe os conectivos sem depender apenas da ordem das palavras.",
    "workedExample": "Em “Chegaram os estudantes”, o sujeito é “os estudantes”, apesar de estar após o verbo. Em “Espero que você venha”, “que você venha” completa o sentido de “espero”.",
    "commonMistake": "Supor que a primeira expressão da frase sempre é sujeito.",
    "check": "Como encontrar o sujeito numa oração em ordem invertida?",
    "minutes": 12,
    "questionId": "q29",
    "exercise": {
      "id": "q29",
      "subject": "Português",
      "topic": "Sintaxe da oração e do período",
      "difficulty": "Intermediária",
      "prompt": "Na oração “Faltaram três alunos”, o sujeito é:",
      "options": [
        "Indeterminado",
        "Faltaram",
        "Três alunos",
        "Inexistente"
      ],
      "correct": 2,
      "explanation": "“Três alunos” é o sujeito posposto; o verbo concorda com ele no plural."
    }
  },
  {
    "id": "physics-heat",
    "subject": "Física",
    "topic": "Calorimetria e mudanças de estado",
    "prerequisites": [
      "physics-energy"
    ],
    "objective": "Calcular calor sensível e distinguir temperatura de energia transferida.",
    "explanation": "Temperatura caracteriza o estado térmico; calor é energia transferida por diferença de temperatura. Sem mudança de fase, Q=mcΔT. Durante uma mudança de fase de substância pura a pressão constante, pode haver transferência de calor sem variação de temperatura: Q=mL.",
    "workedExample": "Para aquecer 100 g de água de 20 °C a 30 °C, usando c=1 cal/(g·°C), Q=100×1×10=1.000 cal. Isso não mede o calor latente de vaporização.",
    "commonMistake": "Usar Q=mcΔT durante toda mudança de fase.",
    "check": "Como uma substância pode receber calor sem aquecer?",
    "minutes": 12,
    "questionId": "q30",
    "exercise": {
      "id": "q30",
      "subject": "Física",
      "topic": "Calorimetria e mudanças de estado",
      "difficulty": "Intermediária",
      "prompt": "Quanto calor aquece 200 g de água em 5 °C, com c=1 cal/(g·°C), sem mudança de fase?",
      "options": [
        "40 cal",
        "1.000 cal",
        "200 cal",
        "5 cal"
      ],
      "correct": 1,
      "explanation": "Sem mudança de fase, usamos calor sensível: Q=mcΔT=200×1×5=1.000 cal."
    }
  },
  {
    "id": "physics-circuits",
    "subject": "Física",
    "topic": "Circuitos elétricos e resistores",
    "prerequisites": [
      "physics-energy"
    ],
    "objective": "Relacionar tensão, corrente e resistência em um resistor ôhmico.",
    "explanation": "A corrente é a taxa de passagem de carga elétrica. Num resistor ôhmico com temperatura constante, U=Ri. A potência dissipada é P=Ui. Em série, a corrente é a mesma e as resistências se somam; em paralelo, os ramos têm a mesma tensão.",
    "workedExample": "Um resistor de 6 Ω submetido a 12 V recebe corrente de 2 A. A potência é 12×2=24 W. Duas resistências iguais em paralelo reduzem a resistência equivalente à metade.",
    "commonMistake": "Confundir corrente com energia consumida ou somar resistores em paralelo como se estivessem em série.",
    "check": "Qual grandeza é comum aos ramos em paralelo?",
    "minutes": 12,
    "questionId": "q31",
    "exercise": {
      "id": "q31",
      "subject": "Física",
      "topic": "Circuitos elétricos e resistores",
      "difficulty": "Intermediária",
      "prompt": "Qual corrente passa por um resistor de 10 Ω submetido a 20 V?",
      "options": [
        "200 A",
        "0,5 A",
        "10 A",
        "2 A"
      ],
      "correct": 3,
      "explanation": "Pela relação U=Ri, a corrente é i=20/10=2 A."
    }
  },
  {
    "id": "physics-waves",
    "subject": "Física",
    "topic": "Ondas, som e acústica",
    "prerequisites": [
      "physics-motion"
    ],
    "objective": "Relacionar velocidade de propagação, frequência e comprimento de onda.",
    "explanation": "Ondas transportam energia sem transporte líquido de matéria ao longo de todo o percurso. A relação v=λf conecta velocidade, comprimento e frequência. O som precisa de meio material; a luz pode se propagar no vácuo. Ao mudar de meio, a frequência de uma onda transmitida é determinada pela fonte.",
    "workedExample": "Uma onda de 5 Hz com comprimento de 2 m se propaga a 10 m/s. Se a velocidade diminuir para 5 m/s em outro meio, mantendo a frequência, o comprimento passa a 1 m.",
    "commonMistake": "Afirmar que som se propaga no vácuo como a luz.",
    "check": "Se a velocidade é constante, o que ocorre com λ quando f dobra?",
    "minutes": 12,
    "questionId": "q32",
    "exercise": {
      "id": "q32",
      "subject": "Física",
      "topic": "Ondas, som e acústica",
      "difficulty": "Intermediária",
      "prompt": "Uma onda tem frequência de 20 Hz e comprimento de 3 m. Qual sua velocidade?",
      "options": [
        "60 m/s",
        "6,7 m/s",
        "23 m/s",
        "17 m/s"
      ],
      "correct": 0,
      "explanation": "Usando v=λf, temos v=3×20=60 m/s."
    }
  },
  {
    "id": "physics-optics",
    "subject": "Física",
    "topic": "Óptica geométrica e instrumentos",
    "prerequisites": [
      "physics-waves"
    ],
    "objective": "Explicar reflexão e refração usando raios de luz.",
    "explanation": "Na reflexão, o raio retorna ao meio de origem e os ângulos de incidência e reflexão, medidos em relação à normal, são iguais. Na refração, a luz muda de velocidade ao entrar em outro meio e pode mudar de direção. O índice n=c/v mede quanto a velocidade no meio é menor que no vácuo.",
    "workedExample": "Um raio que incide num espelho a 30° da normal é refletido a 30° da normal, ou 60° da superfície. Um lápis na água parece deslocado por causa da refração.",
    "commonMistake": "Medir o ângulo em relação à superfície quando a fórmula usa a normal.",
    "check": "Por que um objeto submerso pode parecer mais próximo da superfície?",
    "minutes": 12,
    "questionId": "q33",
    "exercise": {
      "id": "q33",
      "subject": "Física",
      "topic": "Óptica geométrica e instrumentos",
      "difficulty": "Intermediária",
      "prompt": "Um raio incide a 40° da normal num espelho plano. O ângulo de reflexão é:",
      "options": [
        "50°",
        "80°",
        "40°",
        "90°"
      ],
      "correct": 2,
      "explanation": "A lei da reflexão iguala os ângulos de incidência e reflexão medidos em relação à normal."
    }
  },
  {
    "id": "chem-mixtures",
    "subject": "Química",
    "topic": "Matéria, transformações e separação de misturas",
    "prerequisites": [],
    "objective": "Escolher processos de separação a partir de propriedades físicas.",
    "explanation": "Misturas contêm mais de uma substância. Filtração separa sólidos não dissolvidos de fluidos; decantação explora diferenças de densidade; destilação explora volatilidade e temperaturas de ebulição. Dissolver sal em água não cria uma nova substância, e filtrar não remove o sal dissolvido.",
    "workedExample": "Para separar areia, sal e água, filtre primeiro a areia. Depois destile a solução para recuperar água e deixar o sal no recipiente. Evaporar também recupera o sal, mas perde a água para o ambiente.",
    "commonMistake": "Usar filtração para separar sal dissolvido.",
    "check": "Qual propriedade permite separar água e óleo por decantação?",
    "minutes": 12,
    "questionId": "q34",
    "exercise": {
      "id": "q34",
      "subject": "Química",
      "topic": "Matéria, transformações e separação de misturas",
      "difficulty": "Intermediária",
      "prompt": "Para recuperar água líquida de uma solução de sal, qual método é adequado?",
      "options": [
        "Peneiração",
        "Destilação simples",
        "Imantação",
        "Filtração comum"
      ],
      "correct": 1,
      "explanation": "A água vaporiza e é condensada, enquanto o sal não volátil permanece no recipiente."
    }
  },
  {
    "id": "chem-stoichiometry",
    "subject": "Química",
    "topic": "Mol, massas e estequiometria",
    "prerequisites": [
      "chem-atoms"
    ],
    "objective": "Usar coeficientes balanceados para comparar quantidades em mol.",
    "explanation": "O mol expressa quantidade de matéria. Na equação balanceada, os coeficientes dão proporções em mol, não diretamente em gramas. Primeiro balanceie, converta massas usando n=m/M e depois aplique a proporção. Se houver dois reagentes, verifique qual acaba primeiro.",
    "workedExample": "Em 2 H₂ + O₂ → 2 H₂O, 2 mol de H₂ reagem com 1 mol de O₂ e formam 2 mol de água. Com O₂ em excesso, 4 mol de H₂ produzem 4 mol de água, ou 72 g usando M=18 g/mol.",
    "commonMistake": "Interpretar os coeficientes como massas em gramas.",
    "check": "Por que balancear deve vir antes da proporção?",
    "minutes": 12,
    "questionId": "q35",
    "exercise": {
      "id": "q35",
      "subject": "Química",
      "topic": "Mol, massas e estequiometria",
      "difficulty": "Intermediária",
      "prompt": "Em N₂ + 3 H₂ → 2 NH₃, 6 mol de H₂, com N₂ em excesso, formam:",
      "options": [
        "2 mol de NH₃",
        "6 mol de NH₃",
        "3 mol de NH₃",
        "4 mol de NH₃"
      ],
      "correct": 3,
      "explanation": "A proporção é 3 mol de H₂ para 2 mol de NH₃. Dobrando H₂ para 6 mol, formam-se 4 mol de NH₃."
    }
  },
  {
    "id": "chem-equilibrium",
    "subject": "Química",
    "topic": "Equilíbrio químico e pH",
    "prerequisites": [
      "chem-solutions"
    ],
    "objective": "Compreender equilíbrio dinâmico e a escala de pH.",
    "explanation": "No equilíbrio, as reações direta e inversa têm velocidades iguais, mas as concentrações não precisam ser iguais. Alterações no sistema podem deslocar sua composição. Em soluções diluídas, pH≈−log[H⁺]; a 25 °C, pH 7 corresponde à neutralidade e valores menores indicam acidez.",
    "workedExample": "Se [H⁺]=10⁻³ mol/L, pH≈3. Uma solução de pH 3 tem concentração de H⁺ aproximadamente dez vezes maior que outra de pH 4; a escala é logarítmica.",
    "commonMistake": "Dizer que a reação para no equilíbrio ou que uma unidade de pH representa diferença aditiva.",
    "check": "O que se iguala num equilíbrio químico?",
    "minutes": 12,
    "questionId": "q36",
    "exercise": {
      "id": "q36",
      "subject": "Química",
      "topic": "Equilíbrio químico e pH",
      "difficulty": "Intermediária",
      "prompt": "Uma solução diluída tem [H⁺]=10⁻⁵ mol/L. Seu pH aproximado é:",
      "options": [
        "5",
        "−5",
        "9",
        "10"
      ],
      "correct": 0,
      "explanation": "Aplicando a definição para a solução diluída: pH≈−log(10⁻⁵)=5."
    }
  },
  {
    "id": "chem-organic",
    "subject": "Química",
    "topic": "Química orgânica: funções e nomenclatura",
    "prerequisites": [
      "chem-bonds"
    ],
    "objective": "Reconhecer grupos funcionais em compostos orgânicos simples.",
    "explanation": "Funções orgânicas agrupam compostos com grupos característicos. Álcool apresenta hidroxila ligada a carbono saturado; ácido carboxílico contém carboxila; éster apresenta o grupo R–COO–R'. A posição e a vizinhança dos átomos importam: nem toda molécula com OH é um álcool.",
    "workedExample": "CH₃CH₂OH é etanol, um álcool. CH₃COOH é ácido etanoico: seu OH integra uma carboxila. Apesar de ambos terem oxigênio e hidrogênio, pertencem a funções diferentes.",
    "commonMistake": "Classificar um ácido carboxílico como álcool só porque contém OH.",
    "check": "Qual grupo identifica um ácido carboxílico?",
    "minutes": 12,
    "questionId": "q37",
    "exercise": {
      "id": "q37",
      "subject": "Química",
      "topic": "Química orgânica: funções e nomenclatura",
      "difficulty": "Intermediária",
      "prompt": "A molécula CH₃COOH pertence a qual função?",
      "options": [
        "Éter",
        "Cetona",
        "Ácido carboxílico",
        "Alceno"
      ],
      "correct": 2,
      "explanation": "O grupo –COOH é a carboxila, característica dos ácidos carboxílicos."
    }
  },
  {
    "id": "bio-division",
    "subject": "Biologia",
    "topic": "Mitose e meiose",
    "prerequisites": [
      "bio-cells"
    ],
    "objective": "Comparar divisão celular, ploidia e variabilidade.",
    "explanation": "Na mitose, uma divisão geralmente conserva a ploidia e origina duas células geneticamente semelhantes, salvo alterações. Na meiose, duas divisões após uma replicação reduzem a ploidia. A separação de homólogos ocorre na meiose I; cromátides se separam na meiose II. Recombinação e segregação ampliam a variabilidade.",
    "workedExample": "Uma célula diploide com 2n=8 pode gerar, por mitose, duas células com 8 cromossomos. Ao completar a meiose, os produtos haploides têm n=4, e não 2.",
    "commonMistake": "Dividir o número de cromossomos pela metade em cada etapa da meiose.",
    "check": "Por que a meiose é relevante para a reprodução sexuada?",
    "minutes": 12,
    "questionId": "q38",
    "exercise": {
      "id": "q38",
      "subject": "Biologia",
      "topic": "Mitose e meiose",
      "difficulty": "Intermediária",
      "prompt": "Uma célula 2n=12 completa a meiose. Quantos cromossomos tem cada produto haploide?",
      "options": [
        "12",
        "6",
        "24",
        "3"
      ],
      "correct": 1,
      "explanation": "A meiose reduz a ploidia de 2n=12 para n=6."
    }
  },
  {
    "id": "bio-protein",
    "subject": "Biologia",
    "topic": "DNA, RNA e síntese proteica",
    "prerequisites": [
      "bio-genetics"
    ],
    "objective": "Relacionar transcrição e tradução à expressão gênica.",
    "explanation": "Na transcrição, uma sequência de DNA orienta a produção de RNA. Na tradução, o ribossomo lê códons do RNA mensageiro e organiza aminoácidos com auxílio de RNA transportador. O código é degenerado: diferentes códons podem indicar o mesmo aminoácido. Nem toda mudança no DNA altera a proteína.",
    "workedExample": "Se uma troca de base muda um códon para outro que indica o mesmo aminoácido, a sequência da proteína pode permanecer igual. Isso mostra por que mutação e mudança de característica não são sinônimos.",
    "commonMistake": "Dizer que o ribossomo traduz diretamente o DNA.",
    "check": "Qual molécula leva ao ribossomo a sequência que será traduzida?",
    "minutes": 12,
    "questionId": "q39",
    "exercise": {
      "id": "q39",
      "subject": "Biologia",
      "topic": "DNA, RNA e síntese proteica",
      "difficulty": "Intermediária",
      "prompt": "Na tradução, o ribossomo lê diretamente:",
      "options": [
        "DNA nuclear",
        "Lipídios",
        "RNA mensageiro",
        "Glicogênio"
      ],
      "correct": 2,
      "explanation": "O ribossomo lê os códons do RNA mensageiro para organizar a sequência de aminoácidos."
    }
  },
  {
    "id": "bio-evolution",
    "subject": "Biologia",
    "topic": "Evolução e seleção natural",
    "prerequisites": [
      "bio-genetics"
    ],
    "objective": "Explicar seleção natural sem atribuir intenção aos organismos.",
    "explanation": "Populações apresentam variações hereditárias. Em determinado ambiente, algumas variantes favorecem sobrevivência e reprodução, tornando-se mais frequentes ao longo das gerações. O ambiente não produz uma mutação dirigida pela necessidade. Indivíduos são selecionados, mas a mudança evolutiva é observada na população.",
    "workedExample": "Uma população bacteriana pode conter variantes resistentes antes do antibiótico. O tratamento elimina muitas sensíveis e favorece a reprodução das resistentes; não ensina cada bactéria a resistir.",
    "commonMistake": "Afirmar que um organismo muda porque precisa ou quer se adaptar.",
    "check": "Por que resistência bacteriana é um fenômeno populacional?",
    "minutes": 12,
    "questionId": "q40",
    "exercise": {
      "id": "q40",
      "subject": "Biologia",
      "topic": "Evolução e seleção natural",
      "difficulty": "Intermediária",
      "prompt": "Após um antibiótico, aumenta a proporção de bactérias resistentes porque:",
      "options": [
        "Todas decidem se adaptar",
        "O medicamento cria sempre a mutação necessária",
        "Bactérias sensíveis viram vírus",
        "Variantes resistentes deixam mais descendentes"
      ],
      "correct": 3,
      "explanation": "A seleção favorece variantes resistentes existentes ou surgidas por mutação não dirigida, aumentando sua frequência."
    }
  },
  {
    "id": "bio-vaccines",
    "subject": "Biologia",
    "topic": "Imunologia e vacinas",
    "prerequisites": [
      "bio-cells"
    ],
    "objective": "Distinguir memória imunológica e imunização passiva.",
    "explanation": "Vacinas apresentam antígenos ou instruções para produzi-los e estimulam resposta adaptativa e memória. Soros fornecem anticorpos prontos, com efeito temporário, sem gerar a mesma memória por si. A proteção e o esquema de doses dependem da vacina; vacinação não significa impossibilidade absoluta de infecção.",
    "workedExample": "Na comparação didática, uma vacina prepara o sistema imune para reconhecer um agente; um soro antiofídico fornece anticorpos contra componentes do veneno. São intervenções com mecanismos e indicações distintos.",
    "commonMistake": "Dizer que vacina é antibiótico ou que soro e vacina funcionam igualmente.",
    "check": "Qual processo explica uma resposta mais rápida após nova exposição?",
    "minutes": 12,
    "questionId": "q41",
    "exercise": {
      "id": "q41",
      "subject": "Biologia",
      "topic": "Imunologia e vacinas",
      "difficulty": "Intermediária",
      "prompt": "A memória imunológica estimulada por vacinas envolve principalmente:",
      "options": [
        "Linfócitos de memória",
        "Hemácias de memória",
        "Anticorpos prontos injetados em toda vacina",
        "Plaquetas específicas"
      ],
      "correct": 0,
      "explanation": "Linfócitos de memória participam de respostas adaptativas mais rápidas em exposições futuras."
    }
  },
  {
    "id": "bio-photosynthesis",
    "subject": "Biologia",
    "topic": "Fotossíntese",
    "prerequisites": [
      "bio-cells"
    ],
    "objective": "Relacionar luz, fixação de carbono e produção de matéria orgânica.",
    "explanation": "Na fotossíntese oxigênica, energia luminosa sustenta a produção de compostos orgânicos a partir de CO₂. A água fornece elétrons e o O₂ liberado vem de sua quebra. Em plantas, o processo ocorre nos cloroplastos. Plantas também respiram, tanto no claro quanto no escuro.",
    "workedExample": "Ao formar açúcares, a planta incorpora carbono do CO₂ atmosférico. A maior parte do carbono de sua biomassa não vem do solo; raízes fornecem água e nutrientes minerais.",
    "commonMistake": "Afirmar que plantas só respiram à noite ou que toda biomassa vem do solo.",
    "check": "De onde vem o carbono dos açúcares produzidos pela planta?",
    "minutes": 12,
    "questionId": "q42",
    "exercise": {
      "id": "q42",
      "subject": "Biologia",
      "topic": "Fotossíntese",
      "difficulty": "Intermediária",
      "prompt": "O carbono incorporado em açúcares na fotossíntese vem principalmente de:",
      "options": [
        "O₂",
        "CO₂",
        "Sais de ferro",
        "Água"
      ],
      "correct": 1,
      "explanation": "O CO₂ é fixado em compostos orgânicos; água e sais não são a fonte desse carbono."
    }
  },
  {
    "id": "hist-sources",
    "subject": "História",
    "topic": "Tempo histórico, fontes e historiografia",
    "prerequisites": [],
    "objective": "Interpretar fontes considerando autoria, contexto e finalidade.",
    "explanation": "Fontes históricas podem ser escritas, orais, materiais e visuais. Elas não são retratos neutros do passado: foram produzidas em determinadas circunstâncias. O historiador compara registros, investiga silêncios e formula interpretações justificadas por evidências. Uma fonte parcial ainda pode ser útil.",
    "workedExample": "Um anúncio de jornal do século XIX pode revelar práticas comerciais e valores de seus autores. Cruzá-lo com leis e relatos ajuda a distinguir a intenção do anúncio das experiências de diferentes grupos.",
    "commonMistake": "Descartar uma fonte por ter ponto de vista ou aceitá-la como verdade completa.",
    "check": "Que perguntas você faria sobre a autoria de uma fonte?",
    "minutes": 12,
    "questionId": "q43",
    "exercise": {
      "id": "q43",
      "subject": "História",
      "topic": "Tempo histórico, fontes e historiografia",
      "difficulty": "Intermediária",
      "prompt": "Ao analisar um discurso político antigo, o procedimento mais adequado é:",
      "options": [
        "Aceitar tudo literalmente",
        "Ignorar o público do discurso",
        "Investigar contexto, autoria e finalidade",
        "Usar somente a opinião atual"
      ],
      "correct": 2,
      "explanation": "Contextualizar e cruzar evidências permite examinar o discurso como fonte situada historicamente."
    }
  },
  {
    "id": "hist-enlightenment",
    "subject": "História",
    "topic": "Iluminismo e revoluções modernas",
    "prerequisites": [
      "hist-sources"
    ],
    "objective": "Relacionar críticas ao absolutismo e projetos de organização política.",
    "explanation": "Pensadores iluministas valorizaram razão e debate crítico, mas não defenderam todos o mesmo projeto. Houve críticas aos privilégios e ao poder arbitrário. As revoluções modernas dialogaram com essas ideias de formas diferentes, e declarações universais de direitos conviveram com exclusões concretas.",
    "workedExample": "A defesa de separação de poderes buscava limitar concentração política. Ao comparar direitos proclamados e participação efetiva, percebe-se que mulheres e pessoas escravizadas muitas vezes permaneceram excluídas.",
    "commonMistake": "Tratar o Iluminismo como um movimento homogêneo que realizou imediatamente igualdade universal.",
    "check": "Por que declarar um direito não garante sua aplicação?",
    "minutes": 12,
    "questionId": "q44",
    "exercise": {
      "id": "q44",
      "subject": "História",
      "topic": "Iluminismo e revoluções modernas",
      "difficulty": "Intermediária",
      "prompt": "A separação de poderes busca principalmente:",
      "options": [
        "Concentrar decisões num monarca",
        "Eliminar todas as leis",
        "Impedir qualquer participação política",
        "Limitar a concentração do poder"
      ],
      "correct": 3,
      "explanation": "A distribuição de funções e controles entre poderes pretende conter o arbítrio e a concentração política."
    }
  },
  {
    "id": "hist-abolition",
    "subject": "História",
    "topic": "Abolição e República brasileira",
    "prerequisites": [
      "hist-colony"
    ],
    "objective": "Compreender a abolição como processo de luta e distinguir liberdade legal de igualdade social.",
    "explanation": "A escravidão foi enfrentada por fugas, revoltas, organização coletiva e mobilizações abolicionistas. A Lei Áurea de 1888 aboliu juridicamente a escravidão no Brasil, mas não criou uma política ampla de acesso à terra e reparação. A República de 1889 não eliminou automaticamente hierarquias sociais e raciais.",
    "workedExample": "Uma pessoa liberta passou a ter liberdade legal, mas podia continuar enfrentando barreiras de trabalho, moradia e educação. A mudança de regime político deve ser analisada junto das continuidades sociais.",
    "commonMistake": "Apresentar a abolição como dádiva isolada ou como fim imediato do racismo.",
    "check": "Qual diferença existe entre liberdade jurídica e igualdade de oportunidades?",
    "minutes": 12,
    "questionId": "q45",
    "exercise": {
      "id": "q45",
      "subject": "História",
      "topic": "Abolição e República brasileira",
      "difficulty": "Intermediária",
      "prompt": "Qual afirmação sobre 1888 é adequada?",
      "options": [
        "A abolição legal não garantiu inclusão social plena",
        "A escravidão permaneceu legal",
        "Todos receberam terras automaticamente",
        "O racismo desapareceu"
      ],
      "correct": 0,
      "explanation": "A lei aboliu a escravidão, mas a inclusão econômica e social não foi assegurada de modo amplo."
    }
  },
  {
    "id": "hist-wars",
    "subject": "História",
    "topic": "Guerras mundiais e totalitarismos",
    "prerequisites": [
      "hist-industry"
    ],
    "objective": "Relacionar crises, disputas imperialistas e regimes autoritários sem reduzir tudo a uma causa.",
    "explanation": "As guerras mundiais envolveram disputas territoriais, alianças e conflitos políticos. No entreguerras, crises econômicas e sociais favoreceram movimentos autoritários. Fascismo e nazismo promoveram repressão, propaganda e nacionalismo agressivo; o nazismo teve no racismo e no antissemitismo elementos centrais.",
    "workedExample": "A crise de 1929 não explica sozinha a ascensão nazista: é preciso considerar instituições, elites, propaganda, violência política e efeitos da Primeira Guerra. Causas históricas se articulam.",
    "commonMistake": "Atribuir acontecimentos complexos a uma única causa inevitável.",
    "check": "Como propaganda e repressão podem atuar juntas num regime autoritário?",
    "minutes": 12,
    "questionId": "q46",
    "exercise": {
      "id": "q46",
      "subject": "História",
      "topic": "Guerras mundiais e totalitarismos",
      "difficulty": "Intermediária",
      "prompt": "Uma característica central do nazismo foi:",
      "options": [
        "Pluralismo partidário protegido",
        "Antissemitismo e perseguição racial de Estado",
        "Defesa de igualdade racial",
        "Recusa da propaganda"
      ],
      "correct": 1,
      "explanation": "O nazismo institucionalizou racismo e antissemitismo, culminando em perseguições e genocídio."
    }
  },
  {
    "id": "hist-democracy",
    "subject": "História",
    "topic": "Ditadura militar e redemocratização",
    "prerequisites": [
      "hist-sources"
    ],
    "objective": "Identificar restrições de direitos e processos de reconstrução democrática no Brasil.",
    "explanation": "A ditadura militar brasileira iniciada em 1964 restringiu direitos, perseguiu opositores e censurou manifestações. A redemocratização resultou de disputas e mobilizações sociais, não de um único ato. A Constituição de 1988 ampliou garantias e direitos, cuja efetivação segue dependendo de instituições e participação.",
    "workedExample": "O movimento Diretas Já mobilizou setores pela eleição presidencial direta. A transição teve etapas: a eleição presidencial de 1985 foi indireta, e as eleições diretas para presidente retornaram em 1989.",
    "commonMistake": "Confundir a mobilização por eleições diretas com sua realização imediata em 1985.",
    "check": "Por que a Constituição é importante para limitar o poder do Estado?",
    "minutes": 12,
    "questionId": "q47",
    "exercise": {
      "id": "q47",
      "subject": "História",
      "topic": "Ditadura militar e redemocratização",
      "difficulty": "Intermediária",
      "prompt": "A Constituição de 1988 se associa principalmente a:",
      "options": [
        "Institucionalização do AI-5",
        "Fim das eleições",
        "Ampliação de direitos na redemocratização",
        "Proibição de sindicatos"
      ],
      "correct": 2,
      "explanation": "A Constituição de 1988 consolidou garantias civis, políticas e sociais no processo de redemocratização."
    }
  },
  {
    "id": "geo-relief",
    "subject": "Geografia",
    "topic": "Relevo, solos e recursos naturais",
    "prerequisites": [
      "geo-maps"
    ],
    "objective": "Relacionar intemperismo, erosão e conservação do solo.",
    "explanation": "Intemperismo altera rochas no local; erosão remove e transporta materiais. Água, vento e gravidade participam desses processos. Solos resultam de interações entre rocha, clima, organismos, relevo e tempo. Retirar cobertura vegetal pode aumentar escoamento superficial e perda de solo.",
    "workedExample": "Numa encosta desmatada, chuvas fortes podem remover partículas antes protegidas por raízes e vegetação. Cultivo em curvas de nível e cobertura do solo ajudam a reduzir perdas, sem eliminar todos os riscos.",
    "commonMistake": "Usar intemperismo e erosão como sinônimos.",
    "check": "Como a vegetação modifica o escoamento da chuva?",
    "minutes": 12,
    "questionId": "q48",
    "exercise": {
      "id": "q48",
      "subject": "Geografia",
      "topic": "Relevo, solos e recursos naturais",
      "difficulty": "Intermediária",
      "prompt": "A remoção e o transporte de partículas do solo caracterizam:",
      "options": [
        "Intemperismo apenas",
        "Solidificação",
        "Fotossíntese",
        "Erosão"
      ],
      "correct": 3,
      "explanation": "Erosão envolve remoção e transporte; intemperismo é alteração do material no local."
    }
  },
  {
    "id": "geo-water",
    "subject": "Geografia",
    "topic": "Hidrografia e recursos hídricos",
    "prerequisites": [
      "geo-climate"
    ],
    "objective": "Interpretar bacias hidrográficas e efeitos da ocupação urbana.",
    "explanation": "Uma bacia hidrográfica reúne a área drenada por um rio e seus afluentes, delimitada por divisores de água. Infiltração, evaporação e escoamento integram o ciclo hidrológico. Impermeabilização e ocupação de várzeas alteram a resposta às chuvas. Disponibilidade hídrica também depende de qualidade e acesso.",
    "workedExample": "Ao pavimentar extensas áreas, reduz-se a infiltração e a água chega mais rapidamente aos canais. Áreas permeáveis e proteção de margens podem reduzir impactos, junto de planejamento e infraestrutura.",
    "commonMistake": "Atribuir toda enchente apenas ao volume de chuva.",
    "check": "Como uma ação a montante pode afetar moradores a jusante?",
    "minutes": 12,
    "questionId": "q49",
    "exercise": {
      "id": "q49",
      "subject": "Geografia",
      "topic": "Hidrografia e recursos hídricos",
      "difficulty": "Intermediária",
      "prompt": "A impermeabilização urbana tende a:",
      "options": [
        "Aumentar o escoamento superficial",
        "Aumentar toda infiltração",
        "Eliminar enchentes",
        "Impedir evaporação em toda bacia"
      ],
      "correct": 0,
      "explanation": "Pavimentos dificultam a infiltração e favorecem o escoamento superficial mais rápido."
    }
  },
  {
    "id": "geo-population",
    "subject": "Geografia",
    "topic": "População, migração e demografia",
    "prerequisites": [
      "geo-maps"
    ],
    "objective": "Distinguir crescimento vegetativo e saldo migratório.",
    "explanation": "Crescimento vegetativo é a diferença entre nascimentos e mortes. O saldo migratório é a diferença entre entradas e saídas. A variação total resulta dos dois componentes. Transição demográfica descreve mudanças históricas nas taxas, com ritmos diferentes entre países; não é uma previsão automática.",
    "workedExample": "Uma cidade registra 800 nascimentos, 500 mortes, 200 entradas e 350 saídas. O crescimento vegetativo é 300, o saldo migratório é −150 e a população aumenta em 150 pessoas.",
    "commonMistake": "Confundir população absoluta com densidade demográfica ou ignorar a migração.",
    "check": "Uma população pode diminuir mesmo com mais nascimentos que mortes?",
    "minutes": 12,
    "questionId": "q50",
    "exercise": {
      "id": "q50",
      "subject": "Geografia",
      "topic": "População, migração e demografia",
      "difficulty": "Intermediária",
      "prompt": "Uma cidade tem crescimento vegetativo de 400 e saldo migratório de −600. Sua população varia em:",
      "options": [
        "+1.000",
        "−200",
        "+200",
        "−1.000"
      ],
      "correct": 1,
      "explanation": "A variação total é 400−600=−200 pessoas."
    }
  },
  {
    "id": "geo-urban",
    "subject": "Geografia",
    "topic": "Urbanização e redes urbanas",
    "prerequisites": [
      "geo-population"
    ],
    "objective": "Analisar urbanização, mobilidade e segregação socioespacial.",
    "explanation": "Urbanização é o aumento da participação da população urbana, não apenas expansão física de uma cidade. Redes urbanas conectam centros por fluxos de pessoas, serviços e informações. A segregação distribui desigualmente moradia e infraestrutura e pode ampliar distâncias entre casa, trabalho e serviços.",
    "workedExample": "Quando empregos se concentram no centro e moradia acessível cresce longe dele, muitos trabalhadores enfrentam deslocamentos longos. Transporte coletivo e distribuição de serviços influenciam o acesso à cidade.",
    "commonMistake": "Confundir cidade grande com cidade que oferece acesso igual a todos.",
    "check": "Como a localização de serviços afeta o tempo cotidiano de deslocamento?",
    "minutes": 12,
    "questionId": "q51",
    "exercise": {
      "id": "q51",
      "subject": "Geografia",
      "topic": "Urbanização e redes urbanas",
      "difficulty": "Intermediária",
      "prompt": "O aumento da proporção de moradores urbanos caracteriza:",
      "options": [
        "Êxodo urbano obrigatório",
        "Redução da população total",
        "Urbanização",
        "Desindustrialização obrigatória"
      ],
      "correct": 2,
      "explanation": "Urbanização mede o peso crescente da população urbana no conjunto, ainda que outros processos variem."
    }
  },
  {
    "id": "geo-global",
    "subject": "Geografia",
    "topic": "Globalização e divisão internacional do trabalho",
    "prerequisites": [
      "geo-urban"
    ],
    "objective": "Relacionar cadeias produtivas e desigualdade de valor agregado.",
    "explanation": "A globalização intensifica conexões econômicas e informacionais, mas seus benefícios e custos são distribuídos de forma desigual. Cadeias produtivas repartem etapas entre territórios. Controlar tecnologia, marcas e finanças pode concentrar renda, mesmo quando a fabricação ocorre em outros países.",
    "workedExample": "Um aparelho pode ser projetado num país, usar minerais de vários territórios e ser montado em outro. O preço final não é distribuído igualmente entre trabalhadores, fornecedores e detentores da marca.",
    "commonMistake": "Supor que produzir mais unidades significa necessariamente reter mais renda.",
    "check": "Qual diferença existe entre montar um produto e controlar sua tecnologia?",
    "minutes": 12,
    "questionId": "q52",
    "exercise": {
      "id": "q52",
      "subject": "Geografia",
      "topic": "Globalização e divisão internacional do trabalho",
      "difficulty": "Intermediária",
      "prompt": "Uma cadeia produtiva global se caracteriza por:",
      "options": [
        "Todas as etapas obrigatoriamente locais",
        "Ausência de transportes",
        "Fim das desigualdades",
        "Etapas distribuídas entre diferentes territórios"
      ],
      "correct": 3,
      "explanation": "Cadeias globais articulam etapas e fornecedores em vários territórios por fluxos materiais e informacionais."
    }
  },
  {
    "id": "geo-biomes",
    "subject": "Geografia",
    "topic": "Vegetação e biomas do Brasil",
    "prerequisites": [
      "geo-climate"
    ],
    "objective": "Relacionar vegetação, clima e pressões sobre biomas brasileiros.",
    "explanation": "Biomas reúnem conjuntos de ecossistemas com características amplas de clima, vegetação e fauna. Não são internamente uniformes. Cerrado, Caatinga, Amazônia, Mata Atlântica, Pantanal e Pampa apresentam adaptações e dinâmicas próprias. Conservação exige considerar água, solo, biodiversidade e populações locais.",
    "workedExample": "Na Caatinga, a perda de folhas na estação seca pode reduzir a perda de água. Isso é uma adaptação à sazonalidade, não prova de que o bioma seja sem vida ou dispensável.",
    "commonMistake": "Tratar vegetação seca como vegetação morta ou todos os biomas como florestas.",
    "check": "Como sazonalidade da chuva influencia a vegetação?",
    "minutes": 12,
    "questionId": "q53",
    "exercise": {
      "id": "q53",
      "subject": "Geografia",
      "topic": "Vegetação e biomas do Brasil",
      "difficulty": "Intermediária",
      "prompt": "A perda sazonal de folhas em muitas plantas da Caatinga ajuda a:",
      "options": [
        "Reduzir a perda de água",
        "Eliminar as raízes",
        "Impedir qualquer reprodução",
        "Transformar plantas em animais"
      ],
      "correct": 0,
      "explanation": "A redução de folhas diminui a superfície de transpiração durante períodos de escassez de água."
    }
  },
  {
    "id": "lit-genres",
    "subject": "Literatura",
    "topic": "Gêneros literários e recursos estilísticos",
    "prerequisites": [],
    "objective": "Distinguir voz lírica, narrador e construção dramática.",
    "explanation": "O gênero lírico privilegia uma voz que expressa experiências e percepções; o narrativo constrói acontecimentos mediados por narrador; o dramático organiza ações e falas para encenação. Essas categorias podem se combinar. Narrador e eu lírico são construções textuais, não equivalem automaticamente ao autor.",
    "workedExample": "Se um poema diz “eu caminho sem destino”, esse “eu” é uma voz construída. Não é possível concluir apenas pelo verso que o autor real viveu o acontecimento.",
    "commonMistake": "Usar a biografia do autor como explicação automática de toda voz textual.",
    "check": "Qual diferença existe entre narrador e autor?",
    "minutes": 12,
    "questionId": "q54",
    "exercise": {
      "id": "q54",
      "subject": "Literatura",
      "topic": "Gêneros literários e recursos estilísticos",
      "difficulty": "Intermediária",
      "prompt": "A voz que se expressa num poema é chamada de:",
      "options": [
        "Editor",
        "Leitor implícito",
        "Eu lírico",
        "Personagem histórica obrigatória"
      ],
      "correct": 2,
      "explanation": "Eu lírico é a voz construída no poema, distinta da pessoa real que o escreveu."
    }
  },
  {
    "id": "lit-realism",
    "subject": "Literatura",
    "topic": "Realismo e Naturalismo",
    "prerequisites": [
      "lit-genres"
    ],
    "objective": "Comparar crítica social, análise psicológica e determinismo na literatura.",
    "explanation": "O Realismo frequentemente examina relações sociais, interesses e contradições por meio da construção narrativa. O Naturalismo enfatiza condicionamentos do meio e da hereditariedade sob influência científica de sua época. São tendências, não listas rígidas que substituem a leitura. Narradores podem ser parciais e pouco confiáveis.",
    "workedExample": "Um narrador que se justifica e acusa outras personagens pode revelar seus próprios interesses. Em vez de aceitar sua versão, compare ações, omissões e contradições internas do relato.",
    "commonMistake": "Confundir a fala de um narrador com a posição definitiva da obra.",
    "check": "Como uma contradição do narrador muda sua leitura?",
    "minutes": 12,
    "questionId": "q55",
    "exercise": {
      "id": "q55",
      "subject": "Literatura",
      "topic": "Realismo e Naturalismo",
      "difficulty": "Intermediária",
      "prompt": "A análise de um narrador pouco confiável exige:",
      "options": [
        "Aceitar sua versão integralmente",
        "Ignorar suas contradições",
        "Confundi-lo com o autor",
        "Confrontar sua versão com pistas do texto"
      ],
      "correct": 3,
      "explanation": "Contradições, silêncios e ações permitem questionar a versão apresentada pelo narrador."
    }
  },
  {
    "id": "lit-modernism",
    "subject": "Literatura",
    "topic": "Modernismo: fases e autores",
    "prerequisites": [
      "lit-genres"
    ],
    "objective": "Reconhecer experimentação formal e debates sobre identidade no modernismo.",
    "explanation": "Modernismos envolveram rupturas e continuidades, linguagem cotidiana, experimentação e disputas sobre identidade. No Brasil, a Semana de 1922 é um marco, mas não esgota o movimento nem representa todas as regiões. Diferentes fases e autores abordam questões sociais, subjetivas e culturais de modos distintos.",
    "workedExample": "Um poema com versos livres e fala cotidiana pode romper expectativas de métrica regular e linguagem solene. Para interpretar o efeito, relacione a forma ao tema e à posição da voz no texto.",
    "commonMistake": "Afirmar que toda produção modernista rejeita qualquer tradição ou segue uma fórmula única.",
    "check": "Que efeito a linguagem cotidiana pode produzir num poema?",
    "minutes": 12,
    "questionId": "q56",
    "exercise": {
      "id": "q56",
      "subject": "Literatura",
      "topic": "Modernismo: fases e autores",
      "difficulty": "Intermediária",
      "prompt": "Um recurso associado à experimentação modernista é:",
      "options": [
        "Verso livre e linguagem cotidiana",
        "Obrigatoriedade de sonetos",
        "Proibição de temas brasileiros",
        "Ausência de qualquer crítica social"
      ],
      "correct": 0,
      "explanation": "Versos livres e registros cotidianos aparecem em experiências modernistas, embora não definam todas as obras."
    }
  },
  {
    "id": "writing-thesis",
    "subject": "Redação",
    "topic": "Projeto de texto e tese",
    "prerequisites": [],
    "objective": "Formular uma tese delimitada e organizar argumentos pertinentes.",
    "explanation": "O tema define um campo de discussão; a tese é a posição que o texto sustenta. Planejar envolve delimitar o problema, escolher argumentos e ordenar seu desenvolvimento. Uma tese precisa ser defendível e responder ao recorte da proposta. Evite prometer discutir mais do que consegue desenvolver.",
    "workedExample": "Tema: mobilidade urbana. Tese possível: ampliar transporte coletivo confiável favorece acesso ao trabalho. O desenvolvimento pode discutir tempo de deslocamento e desigualdade territorial com evidências pertinentes.",
    "commonMistake": "Repetir o tema sem formular uma posição.",
    "check": "Como você transformaria um assunto amplo em uma tese específica?",
    "minutes": 12,
    "questionId": "q57",
    "exercise": {
      "id": "q57",
      "subject": "Redação",
      "topic": "Projeto de texto e tese",
      "difficulty": "Intermediária",
      "prompt": "Qual enunciado apresenta uma tese argumentativa?",
      "options": [
        "Mobilidade urbana é um tema",
        "Este texto falará de transporte",
        "Transporte coletivo confiável amplia o acesso a oportunidades",
        "Existem ônibus e trens"
      ],
      "correct": 2,
      "explanation": "A frase propõe uma relação que pode ser defendida por argumentos e evidências, em vez de apenas nomear o tema."
    }
  },
  {
    "id": "writing-evidence",
    "subject": "Redação",
    "topic": "Argumentos, repertório e evidências",
    "prerequisites": [
      "writing-thesis"
    ],
    "objective": "Integrar exemplos e repertório à defesa de uma tese.",
    "explanation": "Um argumento explica por que a tese é plausível. Repertório e evidências sustentam essa explicação quando são relevantes e interpretados. Citar um pensador ou dado sem conexão com o problema não substitui raciocínio. Diferencie exemplo ilustrativo de prova suficiente e não invente estatísticas.",
    "workedExample": "Para defender acessibilidade, explique como barreiras físicas limitam participação e relacione um exemplo concreto à tese. Uma referência a direitos ganha função quando você mostra a distância entre a garantia e a realidade descrita.",
    "commonMistake": "Inserir citações decorativas ou números sem origem verificável.",
    "check": "Que frase ligaria seu exemplo ao argumento central?",
    "minutes": 12,
    "questionId": "q58",
    "exercise": {
      "id": "q58",
      "subject": "Redação",
      "topic": "Argumentos, repertório e evidências",
      "difficulty": "Intermediária",
      "prompt": "O uso produtivo de repertório exige:",
      "options": [
        "Uma citação em todo período",
        "Ligação explicada com a tese",
        "Um número inventado convincente",
        "Apenas o nome de uma autoridade"
      ],
      "correct": 1,
      "explanation": "Repertório fortalece o argumento quando sua pertinência é explicada e sua informação é confiável."
    }
  },
  {
    "id": "writing-intervention",
    "subject": "Redação",
    "topic": "Proposta de intervenção e direitos humanos (ENEM)",
    "prerequisites": [
      "writing-evidence"
    ],
    "objective": "Planejar uma intervenção articulada ao problema discutido.",
    "explanation": "Na preparação para a redação do ENEM, organize uma ação com agente, meio de execução, finalidade e detalhamento, respeitando direitos humanos. A proposta deve responder às causas discutidas, e não surgir desconectada na conclusão. Confira os critérios oficiais da edição; outras bancas podem pedir gêneros e conclusões diferentes.",
    "workedExample": "Se o texto discute barreiras de acesso à biblioteca, uma proposta pode atribuir à gestão municipal a ampliação do atendimento por horários estendidos, com consulta aos usuários, para atender trabalhadores e estudantes.",
    "commonMistake": "Afirmar que toda banca exige a mesma proposta de intervenção do ENEM.",
    "check": "Como o agente escolhido tem capacidade de executar a ação?",
    "minutes": 12,
    "questionId": "q59",
    "exercise": {
      "id": "q59",
      "subject": "Redação",
      "topic": "Proposta de intervenção e direitos humanos (ENEM)",
      "difficulty": "Intermediária",
      "prompt": "Qual item torna uma intervenção mais concreta?",
      "options": [
        "“Todos devem melhorar”",
        "“O problema acabará”",
        "“É preciso conscientizar”, sem explicação",
        "Definir agente, ação e meio de execução"
      ],
      "correct": 3,
      "explanation": "Especificar quem faz, o que faz e como executa torna a proposta operacional e permite relacioná-la ao problema."
    }
  },
  {
    "id": "en-reading",
    "subject": "Inglês",
    "topic": "Estratégias de leitura e inferência",
    "prerequisites": [],
    "objective": "Usar título, contexto e pistas linguísticas para compreender textos em inglês.",
    "explanation": "Skimming busca a ideia geral; scanning localiza informações específicas. Antes de traduzir cada palavra, observe gênero, título, cognatos e conectores. Inferências devem apoiar-se no texto. Uma palavra desconhecida pode ser compreendida pela função e pelo contexto, sem interromper toda a leitura.",
    "workedExample": "Em um aviso “Library closed on Monday”, procurar o dia de fechamento é scanning. Identificar que se trata de um aviso de funcionamento é compreensão global do gênero.",
    "commonMistake": "Traduzir palavra por palavra e perder a finalidade do texto.",
    "check": "Quando você usaria scanning em uma página de horários?",
    "minutes": 12,
    "questionId": "q60",
    "exercise": {
      "id": "q60",
      "subject": "Inglês",
      "topic": "Estratégias de leitura e inferência",
      "difficulty": "Intermediária",
      "prompt": "No aviso “The museum is closed on Tuesdays”, em que dia o museu fecha?",
      "options": [
        "Terça-feira",
        "Quinta-feira",
        "Sábado",
        "Domingo"
      ],
      "correct": 0,
      "explanation": "Tuesdays significa terças-feiras; o aviso informa o dia em que o museu não abre."
    }
  },
  {
    "id": "en-cognates",
    "subject": "Inglês",
    "topic": "Vocabulário contextual e cognatos",
    "prerequisites": [
      "en-reading"
    ],
    "objective": "Reconhecer semelhanças úteis e evitar falsos cognatos.",
    "explanation": "Cognatos semelhantes ao português podem ajudar, mas algumas palavras têm sentidos diferentes dos aparentes. “Actually” geralmente significa “na verdade”; “currently” indica “atualmente”. O contexto é decisivo: não atribua significado só pela aparência nem suponha que uma tradução sirva em todos os usos.",
    "workedExample": "Em “Actually, the meeting is tomorrow”, o falante corrige ou esclarece: “Na verdade, a reunião é amanhã”. Não está dizendo que a reunião ocorre atualmente.",
    "commonMistake": "Traduzir actually como atualmente em qualquer contexto.",
    "check": "Que pistas mostram que uma palavra está corrigindo uma informação?",
    "minutes": 12,
    "questionId": "q61",
    "exercise": {
      "id": "q61",
      "subject": "Inglês",
      "topic": "Vocabulário contextual e cognatos",
      "difficulty": "Intermediária",
      "prompt": "Em “Actually, I disagree”, actually significa:",
      "options": [
        "Atualmente",
        "Eventualmente",
        "Na verdade",
        "Rapidamente"
      ],
      "correct": 2,
      "explanation": "Nesse contexto, actually introduz esclarecimento ou contraste: “Na verdade, eu discordo”."
    }
  },
  {
    "id": "en-connectors",
    "subject": "Inglês",
    "topic": "Pronomes, conectores e relações semânticas",
    "prerequisites": [
      "en-reading"
    ],
    "objective": "Interpretar relações de contraste, causa e conclusão em inglês.",
    "explanation": "Conectores orientam a relação entre ideias. “However” costuma marcar contraste; “because”, causa; “therefore”, conclusão ou consequência. Pronomes retomam referentes que precisam ser identificados no contexto. A posição da palavra ajuda, mas não substitui a leitura do trecho completo.",
    "workedExample": "Em “It was raining; however, they continued”, a chuva cria uma expectativa de interrupção que é contrariada. “They” retoma as pessoas mencionadas antes, se o contexto as identificar.",
    "commonMistake": "Tratar however e therefore como equivalentes.",
    "check": "Qual diferença de sentido existe entre because e however?",
    "minutes": 12,
    "questionId": "q62",
    "exercise": {
      "id": "q62",
      "subject": "Inglês",
      "topic": "Pronomes, conectores e relações semânticas",
      "difficulty": "Intermediária",
      "prompt": "Em “She was tired; however, she finished”, however indica:",
      "options": [
        "Adição",
        "Contraste",
        "Causa",
        "Tempo"
      ],
      "correct": 1,
      "explanation": "However introduz contraste: apesar do cansaço, ela concluiu a tarefa."
    }
  },
  {
    "id": "es-reading",
    "subject": "Espanhol",
    "topic": "Leitura e interpretação em espanhol",
    "prerequisites": [],
    "objective": "Identificar informação explícita e finalidade em textos curtos.",
    "explanation": "A leitura em espanhol usa pistas de gênero, título e contexto. A proximidade com o português ajuda, mas pode produzir interpretações precipitadas. Localize primeiro a informação solicitada e confira negações, horários e sujeitos. Inferências precisam de apoio textual, como em qualquer língua.",
    "workedExample": "Em “La entrada es gratuita los domingos”, o texto informa gratuidade aos domingos. Não permite concluir que todos os outros dias tenham o mesmo preço ou que o local abra diariamente.",
    "commonMistake": "Usar semelhança entre línguas para ignorar restrições do enunciado.",
    "check": "Que limite temporal aparece na expressão los domingos?",
    "minutes": 12,
    "questionId": "q63",
    "exercise": {
      "id": "q63",
      "subject": "Espanhol",
      "topic": "Leitura e interpretação em espanhol",
      "difficulty": "Intermediária",
      "prompt": "“La biblioteca abre a las nueve” informa que ela abre:",
      "options": [
        "Às oito",
        "Ao meio-dia",
        "À noite obrigatoriamente",
        "Às nove"
      ],
      "correct": 3,
      "explanation": "A las nueve significa às nove; sem mais contexto, não se deve inventar outra informação sobre o horário."
    }
  },
  {
    "id": "es-cognates",
    "subject": "Espanhol",
    "topic": "Cognatos, falsos cognatos e contexto",
    "prerequisites": [
      "es-reading"
    ],
    "objective": "Distinguir palavras semelhantes com sentidos diferentes.",
    "explanation": "Algumas palavras espanholas parecem portuguesas, mas têm outros sentidos: “embarazada” significa grávida, “apellido” é sobrenome e “oficina” costuma significar escritório. O contexto confirma o uso. Memorizar listas ajuda, mas interpretar a frase evita traduções automáticas equivocadas.",
    "workedExample": "Num formulário, “nombre y apellido” solicita nome e sobrenome. Traduzir apellido por apelido levaria ao preenchimento incorreto, apesar da semelhança sonora.",
    "commonMistake": "Escolher o significado pela aparência sem ler a situação.",
    "check": "O que um formulário pede no campo apellido?",
    "minutes": 12,
    "questionId": "q64",
    "exercise": {
      "id": "q64",
      "subject": "Espanhol",
      "topic": "Cognatos, falsos cognatos e contexto",
      "difficulty": "Intermediária",
      "prompt": "Em espanhol, “apellido” significa:",
      "options": [
        "Sobrenome",
        "Apelido informal",
        "Profissão",
        "Endereço"
      ],
      "correct": 0,
      "explanation": "Apellido é sobrenome; o apelido informal pode ser chamado de apodo."
    }
  },
  {
    "id": "es-connectors",
    "subject": "Espanhol",
    "topic": "Conectivos, pronomes e estruturas verbais",
    "prerequisites": [
      "es-reading"
    ],
    "objective": "Reconhecer conectores de oposição e causa em espanhol.",
    "explanation": "“Pero” e “sin embargo” introduzem contraste; “porque” apresenta causa ou explicação. “Aunque” pode introduzir concessão. Para interpretar, observe quais ideias são ligadas e a expectativa que uma delas cria. Não basta reconhecer cada palavra isoladamente.",
    "workedExample": "Em “Estudió mucho; sin embargo, no aprobó”, a segunda informação contraria a expectativa de aprovação. O conector funciona como “no entanto”, e não como expressão de causa.",
    "commonMistake": "Ler sin embargo como se introduzisse uma justificativa causal.",
    "check": "Qual expectativa é contrariada depois de sin embargo?",
    "minutes": 12,
    "questionId": "q65",
    "exercise": {
      "id": "q65",
      "subject": "Espanhol",
      "topic": "Conectivos, pronomes e estruturas verbais",
      "difficulty": "Intermediária",
      "prompt": "“Quería salir, pero llovía” apresenta uma relação de:",
      "options": [
        "Finalidade",
        "Adição",
        "Contraste",
        "Conclusão"
      ],
      "correct": 2,
      "explanation": "Pero equivale a mas e estabelece contraste entre a vontade de sair e a chuva."
    }
  },
  {
    "id": "phil-arguments",
    "subject": "Filosofia",
    "topic": "Introdução à filosofia e argumentação",
    "prerequisites": [],
    "objective": "Distinguir pergunta filosófica, tese e justificativa.",
    "explanation": "Filosofar envolve examinar conceitos, pressupostos e razões, não apenas expressar preferências. Um argumento apresenta premissas que sustentam uma conclusão. É possível questionar tanto a verdade das premissas quanto a ligação entre elas e a conclusão. Discordância precisa ser acompanhada de razões.",
    "workedExample": "Em “Toda decisão justa deve ouvir os afetados; esta decisão os afeta; portanto, eles devem ser ouvidos”, as duas primeiras afirmações funcionam como premissas. Podemos investigar se a primeira é aceitável.",
    "commonMistake": "Tratar opinião pessoal como argumento suficiente.",
    "check": "Como você distingue uma conclusão das razões que a sustentam?",
    "minutes": 12,
    "questionId": "q66",
    "exercise": {
      "id": "q66",
      "subject": "Filosofia",
      "topic": "Introdução à filosofia e argumentação",
      "difficulty": "Intermediária",
      "prompt": "Em um argumento, as premissas são:",
      "options": [
        "Insultos ao interlocutor",
        "Razões oferecidas para sustentar a conclusão",
        "Sempre perguntas sem resposta",
        "A opinião mais popular"
      ],
      "correct": 1,
      "explanation": "Premissas são enunciados usados como razões para apoiar uma conclusão."
    }
  },
  {
    "id": "phil-ethics",
    "subject": "Filosofia",
    "topic": "Ética, moral e justiça",
    "prerequisites": [
      "phil-arguments"
    ],
    "objective": "Comparar avaliação de consequências e avaliação de deveres.",
    "explanation": "A reflexão ética examina critérios para agir e justificar normas. Abordagens consequencialistas avaliam resultados; abordagens deontológicas destacam deveres e limites da ação. Nenhuma se resume a agir por impulso. Dilemas exigem explicitar valores, pessoas afetadas e conflitos entre critérios.",
    "workedExample": "Ao discutir uma mentira para evitar sofrimento, uma análise pode focar efeitos previsíveis; outra pode perguntar se mentir viola um dever de respeito. A comparação esclarece o critério, sem resolver todo caso por uma frase.",
    "commonMistake": "Confundir ética com mera obediência a qualquer costume existente.",
    "check": "Qual critério você usa ao avaliar uma ação pelos seus efeitos?",
    "minutes": 12,
    "questionId": "q67",
    "exercise": {
      "id": "q67",
      "subject": "Filosofia",
      "topic": "Ética, moral e justiça",
      "difficulty": "Intermediária",
      "prompt": "Uma análise centrada nas consequências pergunta principalmente:",
      "options": [
        "Qual regra é mais antiga?",
        "Quem tem mais poder?",
        "Qual costume é local?",
        "Quais efeitos a ação produz nos envolvidos?"
      ],
      "correct": 3,
      "explanation": "O foco consequencialista é avaliar resultados da ação, considerando os afetados segundo a teoria adotada."
    }
  },
  {
    "id": "phil-logic",
    "subject": "Filosofia",
    "topic": "Lógica, falácias e linguagem",
    "prerequisites": [
      "phil-arguments"
    ],
    "objective": "Identificar validade dedutiva e falácias de relevância.",
    "explanation": "Um argumento dedutivo válido não pode ter premissas verdadeiras e conclusão falsa ao mesmo tempo. Validade diz respeito à estrutura, não garante que as premissas sejam verdadeiras. Ataques à pessoa e apelos à popularidade podem desviar da avaliação das razões. Contexto importa para identificar uma falácia.",
    "workedExample": "“Todos os mamíferos são animais; cães são mamíferos; logo, cães são animais” é válido. Já rejeitar uma tese porque seu autor é antipático não examina o conteúdo da tese.",
    "commonMistake": "Confundir conclusão verdadeira com argumento necessariamente válido.",
    "check": "Por que atacar a pessoa não refuta por si só sua tese?",
    "minutes": 12,
    "questionId": "q68",
    "exercise": {
      "id": "q68",
      "subject": "Filosofia",
      "topic": "Lógica, falácias e linguagem",
      "difficulty": "Intermediária",
      "prompt": "“Sua ideia é falsa porque você é desagradável” exemplifica:",
      "options": [
        "Ataque à pessoa",
        "Modus ponens",
        "Definição precisa",
        "Demonstração matemática"
      ],
      "correct": 0,
      "explanation": "A avaliação da pessoa substitui a análise das razões da ideia, caracterizando ataque pessoal irrelevante."
    }
  },
  {
    "id": "soc-classics",
    "subject": "Sociologia",
    "topic": "Durkheim, Marx e Weber",
    "prerequisites": [],
    "objective": "Comparar enfoques clássicos sem reduzir autores a slogans.",
    "explanation": "Durkheim analisa fatos sociais e formas de solidariedade; Marx examina relações de produção, classes e conflitos; Weber investiga ação social e os sentidos atribuídos pelos agentes. São enfoques com problemas e métodos próprios, não explicações mutuamente substituíveis de qualquer situação.",
    "workedExample": "Uma greve pode ser estudada pelas relações entre capital e trabalho, pelas normas coletivas ou pelos sentidos que os participantes atribuem à ação. Cada recorte formula perguntas diferentes sobre o mesmo evento.",
    "commonMistake": "Atribuir os mesmos conceitos indistintamente aos três autores.",
    "check": "Que pergunta sobre trabalho seria coerente com cada enfoque?",
    "minutes": 12,
    "questionId": "q69",
    "exercise": {
      "id": "q69",
      "subject": "Sociologia",
      "topic": "Durkheim, Marx e Weber",
      "difficulty": "Intermediária",
      "prompt": "O conceito de ação social orientada por sentidos é central em:",
      "options": [
        "Durkheim",
        "Comte",
        "Weber",
        "Newton"
      ],
      "correct": 2,
      "explanation": "Weber enfatiza a compreensão dos sentidos que orientam a ação social dos indivíduos."
    }
  },
  {
    "id": "soc-culture",
    "subject": "Sociologia",
    "topic": "Cultura, identidade e diversidade",
    "prerequisites": [],
    "objective": "Distinguir estranhamento cultural e julgamento etnocêntrico.",
    "explanation": "Cultura inclui práticas, valores, símbolos e conhecimentos compartilhados e transformados socialmente. Etnocentrismo toma a própria cultura como medida universal de superioridade. Compreender práticas em seu contexto não impede reflexão crítica sobre direitos e relações de poder. Identidades são históricas e plurais.",
    "workedExample": "Um costume alimentar diferente pode parecer estranho a quem o observa. Investigar ambiente, história e significados explica a prática melhor que declarar seus participantes inferiores.",
    "commonMistake": "Confundir diferença cultural com inferioridade natural.",
    "check": "Como compreender uma prática sem tratá-la como universal?",
    "minutes": 12,
    "questionId": "q70",
    "exercise": {
      "id": "q70",
      "subject": "Sociologia",
      "topic": "Cultura, identidade e diversidade",
      "difficulty": "Intermediária",
      "prompt": "Julgar todas as culturas pela própria como padrão superior caracteriza:",
      "options": [
        "Etnocentrismo",
        "Pesquisa de campo necessariamente",
        "Pluralismo",
        "Mobilidade social"
      ],
      "correct": 0,
      "explanation": "Etnocentrismo coloca a cultura do observador como referência superior para julgar outras."
    }
  },
  {
    "id": "soc-inequality",
    "subject": "Sociologia",
    "topic": "Estratificação e desigualdade social",
    "prerequisites": [
      "soc-classics"
    ],
    "objective": "Relacionar oportunidades individuais e estruturas sociais.",
    "explanation": "Estratificação organiza posições desiguais quanto a renda, poder e prestígio. Desigualdade não é apenas diferença individual: instituições e heranças sociais afetam acesso a educação, trabalho e moradia. Mobilidade é mudança de posição, cuja possibilidade varia conforme o contexto. Indicadores diferentes captam dimensões diferentes.",
    "workedExample": "Dois estudantes com esforço semelhante podem ter tempos de estudo distintos se um precisa trabalhar e enfrenta transporte longo. A análise sociológica examina essas condições sem negar escolhas individuais.",
    "commonMistake": "Explicar toda desigualdade exclusivamente por mérito ou esforço pessoal.",
    "check": "Que condições além da renda influenciam oportunidades educacionais?",
    "minutes": 12,
    "questionId": "q71",
    "exercise": {
      "id": "q71",
      "subject": "Sociologia",
      "topic": "Estratificação e desigualdade social",
      "difficulty": "Intermediária",
      "prompt": "Uma análise estrutural da desigualdade considera:",
      "options": [
        "Apenas talento individual",
        "Instituições e condições de acesso a recursos",
        "Somente sorte pessoal",
        "Ausência de contexto histórico"
      ],
      "correct": 1,
      "explanation": "Instituições, recursos e condições históricas moldam oportunidades e posições sociais."
    }
  },
  {
    "id": "art-reading",
    "subject": "Arte",
    "topic": "Linguagens artísticas e leitura de imagens",
    "prerequisites": [],
    "objective": "Analisar elementos visuais e seus efeitos na construção de sentido.",
    "explanation": "Ler uma imagem envolve composição, cor, contraste, enquadramento, material e contexto. O sentido não depende só do tema representado. É útil descrever o que está visível antes de interpretar e distinguir evidência de hipótese. A mesma imagem pode adquirir usos distintos conforme circulação e público.",
    "workedExample": "Num cartaz, uma figura central ampliada e cores contrastantes podem direcionar a atenção. A interpretação deve explicar como esses elementos se relacionam com texto, finalidade e contexto de circulação.",
    "commonMistake": "Atribuir um significado universal a toda cor ou ignorar a composição.",
    "check": "Como enquadramento e escala mudam a importância de um elemento?",
    "minutes": 12,
    "questionId": "q72",
    "exercise": {
      "id": "q72",
      "subject": "Arte",
      "topic": "Linguagens artísticas e leitura de imagens",
      "difficulty": "Intermediária",
      "prompt": "Para fundamentar uma interpretação visual, convém:",
      "options": [
        "Ignorar a imagem",
        "Usar apenas gosto pessoal",
        "Examinar composição e contexto",
        "Procurar sempre um único símbolo universal"
      ],
      "correct": 2,
      "explanation": "Elementos formais e contexto sustentam interpretações verificáveis da imagem."
    }
  },
  {
    "id": "art-heritage",
    "subject": "Arte",
    "topic": "História da arte e patrimônio cultural",
    "prerequisites": [
      "art-reading"
    ],
    "objective": "Distinguir patrimônio material e imaterial e discutir preservação.",
    "explanation": "Patrimônio cultural envolve bens e práticas reconhecidos por sua importância social. Pode ser material, como edifícios, ou imaterial, como saberes, festas e formas de expressão. Preservar práticas vivas requer participação de seus detentores, não apenas registrá-las ou congelá-las. Reconhecimento envolve escolhas e disputas.",
    "workedExample": "Restaurar um edifício e apoiar a transmissão de um saber artesanal são ações diferentes. No segundo caso, mestres e comunidades precisam participar das decisões sobre continuidade e transformação da prática.",
    "commonMistake": "Reduzir patrimônio a prédios antigos ou excluir a comunidade da preservação.",
    "check": "Por que um registro em vídeo não substitui a transmissão de um saber?",
    "minutes": 12,
    "questionId": "q73",
    "exercise": {
      "id": "q73",
      "subject": "Arte",
      "topic": "História da arte e patrimônio cultural",
      "difficulty": "Intermediária",
      "prompt": "Qual exemplo corresponde principalmente a patrimônio imaterial?",
      "options": [
        "Uma ponte de pedra",
        "Um palácio",
        "Uma escultura de bronze",
        "Um saber tradicional transmitido entre gerações"
      ],
      "correct": 3,
      "explanation": "Saberes e práticas transmitidos socialmente integram o patrimônio imaterial, mesmo usando objetos materiais."
    }
  },
  {
    "id": "art-modern",
    "subject": "Arte",
    "topic": "Arte brasileira e modernismo",
    "prerequisites": [
      "art-reading"
    ],
    "objective": "Relacionar experimentação artística e debates sobre cultura brasileira.",
    "explanation": "O modernismo artístico brasileiro reuniu diferentes projetos de renovação e reflexão sobre identidade. Apropriações de repertórios locais e internacionais produziram tensões e escolhas formais. A análise deve perguntar quem representa, quem é representado e como, evitando transformar um movimento diverso numa imagem única do país.",
    "workedExample": "Uma pintura pode simplificar formas e reorganizar proporções para produzir um efeito expressivo. Esse procedimento não indica falta de habilidade: pode ser uma escolha que questiona a representação acadêmica.",
    "commonMistake": "Julgar toda deformação intencional como erro técnico.",
    "check": "Como uma escolha formal pode expressar uma crítica cultural?",
    "minutes": 12,
    "questionId": "q74",
    "exercise": {
      "id": "q74",
      "subject": "Arte",
      "topic": "Arte brasileira e modernismo",
      "difficulty": "Intermediária",
      "prompt": "A simplificação intencional de formas numa obra pode ser:",
      "options": [
        "Uma estratégia expressiva",
        "Sempre falta de habilidade",
        "Prova de ausência de sentido",
        "Uma obrigação de toda arte"
      ],
      "correct": 0,
      "explanation": "Alterar formas e proporções pode constituir uma decisão estética com efeitos expressivos e críticos."
    }
  },
  {
    "id": "pe-culture",
    "subject": "Educação Física",
    "topic": "Esporte, jogos e cultura corporal",
    "prerequisites": [],
    "objective": "Distinguir práticas corporais e compreender suas dimensões culturais.",
    "explanation": "Jogos, esportes, danças e lutas são práticas corporais com regras, sentidos e histórias. Esportes institucionalizados costumam ter regras padronizadas; jogos podem adaptar regras ao grupo. A participação pode envolver lazer, competição, expressão e cooperação. Nenhuma prática tem um único significado para todos.",
    "workedExample": "Uma turma adapta uma queimada para permitir diferentes formas de deslocamento. A mudança preserva um desafio coletivo e amplia participação, mostrando que regras de um jogo podem ser negociadas.",
    "commonMistake": "Reduzir toda prática corporal a competição profissional.",
    "check": "Como adaptar uma regra sem perder o objetivo do jogo?",
    "minutes": 12,
    "questionId": "q75",
    "exercise": {
      "id": "q75",
      "subject": "Educação Física",
      "topic": "Esporte, jogos e cultura corporal",
      "difficulty": "Intermediária",
      "prompt": "Uma característica frequente dos jogos recreativos é:",
      "options": [
        "Regras internacionais obrigatórias",
        "Possibilidade de adaptar regras ao grupo",
        "Exclusão de cooperação",
        "Exigência de atletas profissionais"
      ],
      "correct": 1,
      "explanation": "Jogos recreativos podem negociar regras conforme participantes, espaço e objetivos."
    }
  },
  {
    "id": "pe-health",
    "subject": "Educação Física",
    "topic": "Corpo, movimento e saúde",
    "prerequisites": [
      "pe-culture"
    ],
    "objective": "Analisar saúde como processo influenciado por condições individuais e sociais.",
    "explanation": "Saúde envolve dimensões físicas, mentais e sociais. Movimento corporal pode integrar uma rotina de cuidado, mas oportunidades dependem de segurança, tempo, acessibilidade e condições materiais. Aparência não permite diagnosticar saúde. Em avaliações escolares, diferencie conceitos gerais de prescrições individuais.",
    "workedExample": "Dois bairros podem oferecer oportunidades distintas de lazer se apenas um possui espaços seguros e acessíveis. Analisar essa diferença mostra como ambiente e políticas públicas influenciam práticas corporais.",
    "commonMistake": "Associar automaticamente um tipo de corpo a saúde ou doença.",
    "check": "Que condições do bairro facilitam uma vida ativa?",
    "minutes": 12,
    "questionId": "q76",
    "exercise": {
      "id": "q76",
      "subject": "Educação Física",
      "topic": "Corpo, movimento e saúde",
      "difficulty": "Intermediária",
      "prompt": "Qual análise evita reduzir saúde à aparência?",
      "options": [
        "Todo corpo magro é saudável",
        "Um padrão estético serve para todos",
        "A aparência substitui avaliação",
        "Saúde envolve condições físicas, sociais e mentais"
      ],
      "correct": 3,
      "explanation": "Saúde é multidimensional; aparência isolada não permite avaliar a condição de uma pessoa."
    }
  },
  {
    "id": "pe-society",
    "subject": "Educação Física",
    "topic": "Práticas corporais e sociedade",
    "prerequisites": [
      "pe-culture"
    ],
    "objective": "Identificar barreiras sociais e possibilidades de participação nas práticas corporais.",
    "explanation": "Gênero, renda, deficiência e acesso a espaços podem influenciar participação em esportes e lazer. Inclusão exige examinar regras, infraestrutura e atitudes, sem presumir incapacidade. A mídia também constrói padrões de corpo e visibilidade desigual das modalidades. Analise quem participa e quem fica de fora.",
    "workedExample": "Uma atividade pode oferecer bola sonora, orientação espacial e regras acordadas para ampliar acesso. A adaptação precisa considerar os participantes reais e o objetivo da prática, sem impor uma solução única.",
    "commonMistake": "Tratar inclusão como mera presença sem condições de participação.",
    "check": "Qual barreira poderia ser removida numa atividade que você conhece?",
    "minutes": 12,
    "questionId": "q77",
    "exercise": {
      "id": "q77",
      "subject": "Educação Física",
      "topic": "Práticas corporais e sociedade",
      "difficulty": "Intermediária",
      "prompt": "Uma prática corporal inclusiva procura:",
      "options": [
        "Adaptar condições para participação efetiva",
        "Manter toda barreira por tradição",
        "Separar pessoas automaticamente",
        "Valorizar só o melhor desempenho"
      ],
      "correct": 0,
      "explanation": "Inclusão envolve remover barreiras e construir condições reais de participação."
    }
  },
  {
    "id": "science-matter",
    "subject": "Ciências",
    "topic": "Matéria, substâncias e misturas",
    "prerequisites": [],
    "objective": "Distinguir substância, mistura e transformação química.",
    "explanation": "Substâncias têm composição química definida; misturas reúnem substâncias em proporções variáveis. Uma mistura homogênea apresenta uma fase observável, mas não é necessariamente uma substância pura. Transformações químicas formam novas substâncias; mudanças de estado alteram a organização física.",
    "workedExample": "Água com sal totalmente dissolvido pode apresentar uma fase e continuar sendo mistura. Gelo derretendo continua sendo água: a mudança de estado, por si, não forma uma substância diferente.",
    "commonMistake": "Classificar qualquer material transparente como puro.",
    "check": "Uma mistura pode ter apenas uma fase visível?",
    "minutes": 12,
    "questionId": "q78",
    "exercise": {
      "id": "q78",
      "subject": "Ciências",
      "topic": "Matéria, substâncias e misturas",
      "difficulty": "Intermediária",
      "prompt": "Água com açúcar completamente dissolvido é:",
      "options": [
        "Elemento químico",
        "Substância pura",
        "Mistura homogênea",
        "Mistura obrigatoriamente com duas fases"
      ],
      "correct": 2,
      "explanation": "Há água e açúcar, mas uma fase observável: trata-se de mistura homogênea."
    }
  },
  {
    "id": "science-earth",
    "subject": "Ciências",
    "topic": "Terra, Lua e Sistema Solar",
    "prerequisites": [],
    "objective": "Relacionar rotação, translação e inclinação do eixo terrestre.",
    "explanation": "A rotação da Terra explica a alternância de dia e noite. As estações resultam da inclinação do eixo combinada com a translação, que altera a incidência solar em cada hemisfério. A distância ao Sol não explica a oposição das estações entre hemisférios. Fases da Lua dependem da geometria de iluminação.",
    "workedExample": "Quando o hemisfério sul recebe incidência solar mais direta e dias mais longos, ocorre seu verão, enquanto o norte vive o inverno. Os dois hemisférios estão praticamente à mesma distância do Sol.",
    "commonMistake": "Explicar o verão apenas pela proximidade ao Sol.",
    "check": "Por que os hemisférios têm estações opostas?",
    "minutes": 12,
    "questionId": "q79",
    "exercise": {
      "id": "q79",
      "subject": "Ciências",
      "topic": "Terra, Lua e Sistema Solar",
      "difficulty": "Intermediária",
      "prompt": "A alternância cotidiana de dia e noite resulta principalmente da:",
      "options": [
        "Translação da Lua",
        "Rotação da Terra",
        "Mudança de distância ao Sol",
        "Precessão a cada 24 horas"
      ],
      "correct": 1,
      "explanation": "A rotação faz diferentes regiões da superfície terrestre se voltarem para o Sol ao longo do dia."
    }
  },
  {
    "id": "science-ecology",
    "subject": "Ciências",
    "topic": "Ecologia, biomas e sustentabilidade",
    "prerequisites": [],
    "objective": "Relacionar cadeias alimentares, decomposição e uso de recursos.",
    "explanation": "Produtores incorporam energia em matéria orgânica; consumidores obtêm matéria e energia ao se alimentar; decompositores participam da reciclagem de nutrientes. Energia flui e parte se dissipa como calor, enquanto elementos químicos circulam. Sustentabilidade exige considerar consumo, resíduos e capacidade dos ecossistemas.",
    "workedExample": "Numa cadeia capim → gafanhoto → ave, a energia disponível diminui entre níveis. Fungos e bactérias decompõem restos e devolvem nutrientes ao ambiente, mas não devolvem toda energia à base da cadeia.",
    "commonMistake": "Dizer que energia é reciclada exatamente como nutrientes.",
    "check": "Qual papel dos decompositores na disponibilidade de nutrientes?",
    "minutes": 12,
    "questionId": "q80",
    "exercise": {
      "id": "q80",
      "subject": "Ciências",
      "topic": "Ecologia, biomas e sustentabilidade",
      "difficulty": "Intermediária",
      "prompt": "Decompositores contribuem diretamente para:",
      "options": [
        "Criar energia do nada",
        "Eliminar o ciclo da matéria",
        "Impedir toda decomposição",
        "Reciclar nutrientes de restos orgânicos"
      ],
      "correct": 3,
      "explanation": "A decomposição disponibiliza nutrientes; energia não é reciclada integralmente e parte se dissipa como calor."
    }
  }
];

export const expandedLessons: LearningLesson[] = entries.map(({exercise,...lesson})=>lesson);
export const expandedQuestions: DemoQuestion[] = entries.map(entry=>entry.exercise);
