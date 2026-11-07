import type {TopicSeed} from './authored-stage19-seed.ts';
/** Etapa 25: matematica aplicada, trigonometria e geometria, com exemplos originais. */
export const stage25Math:TopicSeed[]=[
 {
  "subject": "Matemática",
  "topic": "Amostragem e interpretação de pesquisas",
  "objective": "Distinguir população, amostra, seleção probabilística e viés, interpretando proporções e incerteza sem extrapolar uma pesquisa.",
  "chapters": [
   [
    "População, amostra e viés de seleção",
    "A população é o conjunto de unidades sobre o qual se deseja concluir; a amostra é o subconjunto observado. Amostragem por conveniência ou respostas voluntárias pode super-representar perfis interessados, mesmo com muitas respostas. Para estimar uma proporção com validade, é necessário observar como unidades foram selecionadas, quem ficou de fora e o período da coleta. Tamanho por si só não corrige viés.",
    "Uma enquete recebida por 300 seguidores de um clube não representa automaticamente todos os 4.000 moradores do bairro: frequentadores podem ter preferências distintas.",
    "Uma pesquisa com muitas respostas sempre representa bem uma população, independentemente de quem pôde responder.",
    "Uma escola ouviu 20 estudantes que saíam da biblioteca. É legítimo estimar hábitos de toda a escola?",
    "Examine o local de coleta e a chance de participação.",
    "Não necessariamente: o local favorece estudantes que frequentam a biblioteca; é preciso amostragem mais representativa para inferir sobre a escola.",
    "A quantidade de entrevistados não elimina a seleção enviesada; importa o mecanismo que gerou a amostra."
   ],
   [
    "Amostra aleatória e estratificação",
    "Na amostragem aleatória simples, cada conjunto de unidades de mesmo tamanho tem a mesma chance de escolha; em estratificação, a população é dividida em grupos e sorteios são feitos em cada um. Alocação proporcional pode preservar a distribuição de grupos. Quando frações amostrais diferem entre estratos, estimar proporções globais pode exigir ponderação por tamanhos populacionais, não média simples dos percentuais.",
    "Uma escola tem 100 estudantes na série A e 200 na B. Para uma amostra proporcional de 60, sorteiam-se 20 da A e 40 da B, em condições de cobertura adequada.",
    "Dividir a mesma quantidade de entrevistas entre grupos de tamanhos diferentes sempre produz estimativa global sem necessidade de pesos.",
    "Se 30% de 300 estudantes são da série A, quantos devem ser sorteados nela para amostra proporcional de 80?",
    "Multiplique o tamanho da amostra pela fração do estrato.",
    "A alocação proporcional é 0,30×80=24 da série A; os outros 56 vêm dos demais estudantes, idealmente também sorteados.",
    "A estratificação proporcional preserva o peso dos grupos; uma escolha igual por grupo mudaria a composição."
   ],
   [
    "Estimativa e margem de incerteza",
    "Uma proporção amostral não é identidade com a proporção populacional. Sob amostragem aproximadamente independente e aleatória, a variabilidade da proporção pode ser aproximada por raiz[p(1−p)/n] e uma margem aproximada de 95% costuma usar cerca de 1,96 erros-padrão. Essa conta não inclui viés de não resposta, falhas no questionário nem efeitos de desenho complexo; não garante que cada intervalo contenha a verdade.",
    "Em amostra aleatória idealizada de 400 pessoas, p=0,50 dá erro-padrão 0,025 e margem aproximada de 4,9 pontos percentuais, não certeza absoluta.",
    "Um intervalo aproximado de 95% significa 95% de probabilidade de a proporção fixa mudar de valor entre os limites.",
    "Em modelo binomial com p amostral 0,5 e n=100, qual o erro-padrão aproximado?",
    "Use raiz[p(1−p)/n].",
    "Raiz(0,5×0,5/100)=raiz(0,0025)=0,05, ou cinco pontos percentuais para o erro-padrão, antes de multiplicar pela margem desejada.",
    "A incerteza quantifica variação do método sob hipóteses; não transforma um levantamento enviesado em pesquisa representativa."
   ]
  ],
  "situation": [
   "Um grêmio divulga que 80% dos estudantes aprovam uma mudança depois de colher 50 respostas voluntárias por rede social. A escola, porém, possui 1.000 alunos de turnos diferentes.",
   "Esse percentual permite afirmar que oito de cada dez alunos aprovam a mudança? Como aprimorar a coleta para decidir?",
   "Não. As respostas podem favorecer quem viu o formulário e se motivou a participar. É necessário definir a população, sortear participantes por turno ou estrato, monitorar não respostas e comunicar a incerteza da estimativa."
  ],
  "links": [
   [
    "Matemática",
    "Probabilidade condicional",
    "A probabilidade de seleção e as diferenças entre grupos permitem avaliar como a amostra representa a população."
   ],
   [
    "Matemática",
    "Variância e desvio padrão",
    "A dispersão e o erro-padrão mostram por que estimativas variam mesmo em amostras escolhidas corretamente."
   ]
  ]
 },
 {
  "subject": "Matemática",
  "topic": "Ciclo trigonométrico",
  "objective": "Interpretar ângulos orientados em radianos, coordenadas seno e cosseno, sinais por quadrante e soluções periódicas.",
  "chapters": [
   [
    "Ângulos e coordenadas no círculo unitário",
    "O ciclo trigonométrico é uma circunferência de raio 1 com centro na origem do plano cartesiano. Para um ângulo orientado θ a partir do semieixo positivo de x, o ponto correspondente tem coordenadas (cosθ, senθ). Uma volta completa mede 360° ou 2π radianos; metade da volta mede π radianos. O raio unitário permite ler seno e cosseno como projeções, não como lados isolados de triângulos.",
    "O ângulo π/2 radiano, equivalente a 90°, chega ao ponto (0,1): cosseno zero e seno um.",
    "Um radiano é igual a um grau, pois ambos são maneiras de medir o mesmo ângulo.",
    "Qual a medida em radianos de um ângulo de 180 graus?",
    "Use a equivalência 360°=2π rad.",
    "180° corresponde a π radianos, exatamente metade de uma volta orientada.",
    "Graus e radianos medem o mesmo ângulo com escalas diferentes; misturar escalas causa respostas inválidas."
   ],
   [
    "Quadrantes e ângulos de referência",
    "Os sinais de seno e cosseno decorrem das coordenadas: no segundo quadrante senθ>0 e cosθ<0; no terceiro, ambos são negativos; no quarto, seno negativo e cosseno positivo. O ângulo de referência agudo permite usar valores notáveis com sinais adequados. A tangente é senθ/cosθ, logo não está definida quando cosθ=0. Esse raciocínio substitui decorar listas desconectadas.",
    "O ângulo 210° fica no terceiro quadrante, com referência 30°: seno=-1/2 e cosseno=-√3/2.",
    "O seno de 210° é positivo porque o ângulo contém uma parcela de 30°.",
    "Determine o cosseno de 150° com base no círculo trigonométrico.",
    "Veja o quadrante e a referência de 30°.",
    "150° está no segundo quadrante: cos150°=−cos30°=−√3/2.",
    "O valor absoluto vem do ângulo de referência; o sinal depende da coordenada no quadrante."
   ],
   [
    "Periodicidade e múltiplas soluções",
    "O mesmo ponto do círculo reaparece ao acrescentar 2π radianos, portanto seno e cosseno possuem período 2π. Uma igualdade como senθ=1/2 admite várias soluções no conjunto dos reais, mas apenas duas no intervalo [0,2π): π/6 e 5π/6. Para resolver equações trigonométricas, é obrigatório declarar domínio e acrescentar múltiplos inteiros do período quando cabível.",
    "Se cosθ=1/2 no intervalo [0,2π), as soluções são π/3 e 5π/3; nos reais acrescenta-se 2kπ a cada uma.",
    "Uma equação trigonométrica tem sempre uma única solução porque a calculadora retorna apenas o ângulo principal.",
    "Quais soluções de senθ=0 para θ no intervalo [0,2π)?",
    "Identifique interseções do ciclo com eixo horizontal.",
    "θ=0 e θ=π; o valor 2π representa a mesma posição de zero e está excluído pelo intervalo semiaberto.",
    "As soluções dependem do intervalo escolhido e da periodicidade, não só da primeira resposta da calculadora."
   ]
  ],
  "situation": [
   "Um simulador de roda-gigante usa θ em radianos para indicar a posição de uma cabine no círculo de raio 1. Um estudante inseriu 180 no campo que esperava radianos.",
   "Por que a posição calculada ficou inesperada e qual valor representa meia-volta na unidade correta?",
   "O campo interpreta 180 como 180 radianos, não 180°. A meia-volta exige θ=π radianos. As coordenadas esperadas são (cosπ,senπ)=(-1,0), relativas ao centro da roda."
  ],
  "links": [
   [
    "Matemática",
    "Identidades e equações trigonométricas",
    "As identidades e equações trigonométricas são compreendidas por coordenadas e simetrias no círculo."
   ],
   [
    "Matemática",
    "Lei dos senos e lei dos cossenos",
    "Os valores trigonométricos usados em triângulos estendem-se a ângulos orientados no ciclo."
   ]
  ]
 },
 {
  "subject": "Matemática",
  "topic": "Cones",
  "objective": "Diferenciar raio, altura e geratriz de cones retos e aplicar corretamente fórmulas de volume e áreas em situações com unidades.",
  "chapters": [
   [
    "Seção axial e geratriz de um cone reto",
    "Um cone circular reto possui base circular de raio r, vértice alinhado ao centro da base e altura h perpendicular ao plano da base. A geratriz g liga o vértice à borda da base. Sua seção axial forma um triângulo isósceles, que pode ser dividido em triângulos retângulos; assim g²=r²+h². Essa relação não deve ser imposta automaticamente a cones oblíquos, cuja geometria lateral difere.",
    "Num cone circular reto de raio 3 cm e altura 4 cm, a geratriz é raiz(3²+4²)=5 cm, por Pitágoras.",
    "A altura e a geratriz são sempre a mesma medida porque ambas partem do vértice.",
    "Qual a geratriz de cone reto com raio de 5 cm e altura de 12 cm?",
    "Aplique Pitágoras à metade da seção axial.",
    "g=raiz(5²+12²)=raiz169=13 cm, distinta da altura vertical de 12 cm.",
    "A geratriz é inclinada; a altura é perpendicular à base, salvo no caso degenerado sem raio."
   ],
   [
    "Volume do cone comparado ao cilindro",
    "Para cone circular reto de base com área πr² e altura h, o volume é V=πr²h/3. Um cilindro com a mesma base e altura comporta três vezes esse volume, o que permite verificar resultados. O raio entra ao quadrado; dobrar raio mantendo altura quadruplica volume. Antes de converter capacidade para litros, calcule em unidades cúbicas coerentes: 1.000 cm³=1 L.",
    "Para r=3 cm e h=4 cm, V=π×9×4/3=12π cm³, cerca de 37,7 mL no modelo geométrico.",
    "O volume do cone é πr²h porque sua base e sua altura são iguais às de um cilindro.",
    "Qual o volume de cone reto com r=2 cm e h=9 cm?",
    "Calcule área da base e divida por três.",
    "V=π×2²×9/3=12π cm³; seria 36π cm³ no cilindro correspondente.",
    "O fator um terço é fundamental e deve ser mantido quando base e altura coincidem com as do cilindro."
   ],
   [
    "Área lateral, área total e planificação",
    "A superfície lateral do cone circular reto se abre em setor circular de raio g, cujo arco tem o mesmo comprimento da circunferência da base, 2πr. Da proporcionalidade entre arco e circunferência de raio g, a área lateral é Al=πrg. A área total inclui a base, At=πrg+πr², se ela realmente fizer parte da superfície solicitada. Não se deve confundir material para revestir apenas a lateral com material para fechar o fundo.",
    "Um cone reto r=3 cm, g=5 cm tem Al=15π cm² e At=24π cm², pois a base acrescenta 9π cm².",
    "A área de papel para um chapéu sem fundo deve incluir obrigatoriamente a base circular.",
    "Qual a área lateral de cone reto com r=4 cm e g=6 cm?",
    "Use área lateral, não área total.",
    "Al=π×4×6=24π cm²; adicionar 16π da base daria 40π cm², área de cone fechado.",
    "A situação física determina quais superfícies são cobertas; é necessário ler se existe fundo."
   ]
  ],
  "situation": [
   "Uma oficina fabrica um funil em formato de cone circular reto, com raio superior de 6 cm, altura 10 cm e sem tampa circular na parte larga. Deseja estimar a capacidade e o metal da lateral.",
   "Qual volume interno geométrico e qual expressão da área lateral seriam usados, antes de perdas de fabricação?",
   "O volume ideal é π×6²×10/3=120π cm³. A geratriz vale raiz(6²+10²)=raiz136 cm; a área lateral é π×6×raiz136 cm². O fundo aberto não entra na área lateral."
  ],
  "links": [
   [
    "Matemática",
    "Esferas",
    "A comparação de volumes e superfícies de sólidos curvos consolida a leitura de raio, área e capacidade."
   ],
   [
    "Matemática",
    "Polígonos regulares",
    "A aproximação da base circular por polígonos regulares ajuda a interpretar medidas de contorno e área."
   ]
  ]
 },
 {
  "subject": "Matemática",
  "topic": "Polígonos regulares",
  "objective": "Calcular ângulos, perímetro e área de polígonos regulares usando triangulação, ângulos centrais e apótema.",
  "chapters": [
   [
    "Lados e ângulos congruentes",
    "Um polígono regular convexo possui todos os lados de mesmo comprimento e ângulos internos congruentes. Para n≥3, a soma dos internos é (n−2)×180°; cada ângulo interno mede [(n−2)×180°]/n e cada ângulo externo, entendido como mudança de direção no contorno, mede 360°/n. Igualdade apenas dos lados não basta: há polígonos equiláteros não equiângulos.",
    "Num hexágono regular, a soma interna é 720°, cada interno é 120° e cada externo é 60°.",
    "Se os lados de um quadrilátero são iguais, ele obrigatoriamente tem quatro ângulos de 90 graus.",
    "Quanto mede cada ângulo interno de um octógono regular?",
    "Use a soma interna de seis triângulos.",
    "(8−2)×180°/8=1080°/8=135° para cada ângulo interno.",
    "Um losango pode ter lados iguais e ângulos diferentes; regularidade exige igualdade de lados e ângulos."
   ],
   [
    "Ângulo central, apótema e área",
    "Traçar segmentos do centro até os vértices de polígono regular divide-o em n triângulos isósceles, cada qual com ângulo central de 360°/n. O apótema a é a distância perpendicular do centro a um lado. Somando áreas de triângulos de base igual a cada lado e altura a, a área total fica A=(P×a)/2, com P o perímetro. Essa expressão exige polígono regular e apótema, não qualquer distância interna.",
    "Hexágono regular de lado 2 cm tem perímetro 12 cm e apótema √3 cm; a área é 12√3/2=6√3 cm².",
    "O apótema corresponde ao raio do círculo que passa pelos vértices e sempre mede o lado do polígono.",
    "Qual a área de um polígono regular de perímetro 40 cm e apótema 5 cm?",
    "Some áreas dos triângulos centrais.",
    "A=P×a/2=40×5/2=100 cm², porque cada triângulo tem altura igual ao apótema.",
    "O apótema mede a distância até a reta do lado, não o segmento do centro a um vértice."
   ],
   [
    "Medidas e aproximação de circunferências",
    "Polígonos regulares inscritos em circunferência de raio R possuem vértices sobre ela; à medida que o número de lados aumenta, perímetros e áreas podem aproximar comprimento 2πR e área πR². Essa aproximação precisa distinguir raio circunscrito e apótema, que não são iguais para n finito. Com n lados, cada triângulo central tem área R² sen(2π/n)/2, permitindo somar A=nR² sen(2π/n)/2.",
    "Um quadrado inscrito em circunferência de raio 1 tem lado √2 e área 2, menor que π, área do círculo; oito ou mais lados aproximam melhor a borda.",
    "Um polígono regular inscrito tem a mesma área de sua circunferência, pois todos os seus vértices estão na borda.",
    "Para hexágono regular inscrito em círculo de raio 4 cm, quanto vale o lado e o perímetro?",
    "Cada setor central mede 60 graus.",
    "O hexágono se divide em seis triângulos equiláteros de lado 4 cm; o perímetro é 6×4=24 cm.",
    "A igualdade entre raio e lado é propriedade do hexágono regular inscrito, não de todos os polígonos."
   ]
  ],
  "situation": [
   "Um paisagista desenha canteiro hexagonal regular de lado 2 m e precisa comprar material para o contorno e cobertura do chão, sem usar a área de um círculo por engano.",
   "Quais perímetro e área do canteiro e que hipótese geométrica torna as contas válidas?",
   "O perímetro é 6×2=12 m. O apótema é √3 m e a área A=P×a/2=6√3 m² (aprox. 10,39 m²). As fórmulas pressupõem hexágono realmente regular."
  ],
  "links": [
   [
    "Matemática",
    "Lei dos senos e lei dos cossenos",
    "O ângulo central e a triangulação permitem calcular diagonais e lados com relações trigonométricas."
   ],
   [
    "Matemática",
    "Cones",
    "As bases circulares dos cones podem ser aproximadas por polígonos regulares para interpretar a medida de área."
   ]
  ]
 }
];
