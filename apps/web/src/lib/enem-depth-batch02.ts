/** Original preparatory lessons; generated with Claude Code and reviewed for
 * mathematical consistency. Human pedagogical review remains pending.
 * Editorial titles do not certify official ENEM skills or exam equivalence.
 */
import type {CurriculumTopic} from './curriculum-catalog.ts';
import type {CourseLesson} from './course-content.ts';
import type {EnemDeepTopicSpec} from './enem-depth-batch01.ts';
import {examBlueprints,type ExamId} from './exam-blueprints.ts';
import {courseId} from './curriculum-id.ts';

export const authoredEnemDeepBatch02:readonly EnemDeepTopicSpec[] = [
  {
    "subject": "Matemática",
    "topic": "Ângulos e retas paralelas",
    "objective": "Dominar a classificação de ângulos, relações entre ângulos complementares, suplementares e opostos pelo vértice, e aplicar propriedades de transversais em retas paralelas para resolver problemas geométricos e algébricos.",
    "prerequisites": [
      "Conceitos básicos de ponto, reta e plano",
      "Medida de ângulos em graus",
      "Operações com números inteiros e frações",
      "Noção de variável e equação do 1º grau"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Tipos de ângulos e relações fundamentais",
        "explanation": "Ângulos são formados por duas semirretas com mesma origem, chamada vértice. Classificam-se pela medida: agudos (0° < α < 90°), retos (exatamente 90°), obtusos (90° < α < 180°) e rasos (180°). Dois ângulos são complementares quando a soma de suas medidas é 90°; suplementares quando somam 180°. Ângulos opostos pelo vértice surgem quando duas retas se cruzam: são pares de ângulos não adjacentes, formados pelos prolongamentos opostos das semirretas, e sempre congruentes. A igualdade dos opostos pelo vértice decorre de duas retas concorrentes; a definição de complementares ou suplementares não exige interseção nem ângulos adjacentes. Para complementares, se um mede x, o outro mede 90° − x. Para suplementares, se um mede y, o outro mede 180° − y. Em opostos pelo vértice, as medidas são idênticas. Aplicam-se em projetos de arquitetura, navegação e resolução de equações geométricas. Medidas aproximadas podem esconder a igualdade exata; use os dados geométricos do enunciado para decidir qual relação é válida.",
        "steps": [
          "Identificar o vértice e as semirretas que formam cada ângulo",
          "Classificar cada ângulo pela medida: agudo, reto, obtuso ou raso",
          "Verificar se pares somam 90° (complementares) ou 180° (suplementares)",
          "Localizar pares de ângulos opostos pelo vértice em interseções de retas",
          "Aplicar as fórmulas 90° − x ou 180° − x para encontrar a medida desconhecida"
        ],
        "example": "Se ∠A = 37° e ∠B é seu complementar, então ∠B = 90° − 37° = 53°. Se ∠C = 112° e ∠D é seu suplementar, ∠D = 180° − 112° = 68°. Duas retas se cruzam formando ângulos de 42° e 138°; os opostos pelo vértice medem 42° e 138° respectivamente.",
        "pitfall": "Confundir complementares (soma 90°) com suplementares (soma 180°) ao montar a equação"
      },
      {
        "level": "intermediate",
        "title": "Transversal em retas paralelas e pares de ângulos",
        "explanation": "Quando uma reta transversal corta duas retas paralelas, formam-se oito ângulos que podem ser comparados por posição relativa. Ângulos correspondentes ocupam a mesma posição relativa em cada interseção e são congruentes. Ângulos alternos internos ficam entre as paralelas, em lados opostos da transversal, e são congruentes. Ângulos alternos externos ficam fora das paralelas, em lados opostos da transversal, e também são congruentes. Ângulos colaterais internos ficam entre as paralelas, do mesmo lado da transversal, e são suplementares (somam 180°). Ângulos colaterais externos ficam fora das paralelas, do mesmo lado da transversal, e são suplementares. Essas propriedades são teoremas que exigem a condição de retas paralelas; se as retas não forem paralelas, as congruências e suplementaridades não são garantidas. A recíproca também vale: se um par de correspondentes é congruente, as retas são paralelas. Aplicam-se em topografia, projeto de pontes e resolução de incógnitas em figuras geométricas. Limite: a identificação correta da posição relativa (interno/externo, mesmo lado/lados opostos) é essencial para classificar o par.",
        "steps": [
          "Marcar as retas paralelas e a transversal no desenho",
          "Identificar os oito ângulos numerando-os de 1 a 8",
          "Classificar cada par: correspondentes, alternos internos, alternos externos, colaterais internos, colaterais externos",
          "Aplicar congruência para correspondentes e alternos; suplementaridade para colaterais",
          "Montar equações com as incógnitas e resolver"
        ],
        "example": "As retas horizontais r e s, com r acima de s, são paralelas. Uma transversal t corta ambas. Na interseção superior, o ângulo interno à direita de t mede 65°. Na interseção inferior, o interno à esquerda de t é alterno interno a ele, logo mede 65°; o interno à direita é colateral interno a ele, logo mede 180° − 65° = 115°. As posições foram definidas em palavras, sem depender de uma numeração de desenho.",
        "pitfall": "Trocar alternos internos por colaterais internos e aplicar congruência onde deveria haver suplementaridade"
      },
      {
        "level": "advanced",
        "title": "Problemas algébricos com retas paralelas e transversais",
        "explanation": "Problemas avançados combinam as propriedades de ângulos em paralelas com álgebra: as medidas dos ângulos são expressões algébricas (ex.: 3x + 15, 5x − 25) e a relação geométrica (congruência ou suplementaridade) gera uma equação. A estratégia: identificar o par de ângulos envolvidos, escrever a igualdade ou soma 180° conforme o caso, resolver a equação do 1º grau e substituir para encontrar todas as medidas. Cuidado: a variável pode aparecer em ambos os ângulos do par (ex.: correspondentes 2x + 10 e 3x − 20 → 2x + 10 = 3x − 20) ou em apenas um (ex.: colaterais internos x + 30 e 110 → x + 30 + 110 = 180). Após encontrar x, verifique se as medidas resultantes são positivas e coerentes com a classificação do ângulo (agudo, obtuso). Em problemas com múltiplas transversais, aplique as propriedades em cada interseção separadamente e use ângulos opostos pelo vértice para propagar valores. A relação geométrica não depende do grau da expressão algébrica: aqui usamos expressões lineares, mas outros enunciados podem gerar equações quadráticas e exigir a rejeição de raízes que não produzam medidas válidas. Sem uma indicação de paralelismo, não se pode impor a igualdade de correspondentes apenas pela aparência do desenho.",
        "steps": [
          "Identificar quais retas são paralelas e qual a transversal relevante",
          "Classificar o par de ângulos cujas expressões algébricas são dadas",
          "Escrever a equação: igualdade para correspondentes/alternos; soma 180° para colaterais",
          "Resolver a equação linear para encontrar o valor da incógnita",
          "Substituir o valor nas expressões originais e conferir se as medidas fazem sentido geométrico"
        ],
        "example": "Retas r ∥ s, transversal t. ∠A = 4x − 10 e ∠B = 2x + 50 são correspondentes. Equação: 4x − 10 = 2x + 50 → 2x = 60 → x = 30. ∠A = 4(30) − 10 = 110°. ∠B = 2(30) + 50 = 110°. Verificação: 110° é obtuso, coerente. Ângulos colaterais internos com ∠A medem 70° (180° − 110°).",
        "pitfall": "Esquecer de somar 180° em colaterais e igualar as expressões diretamente, gerando valor incorreto de x"
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Duas retas distintas se cruzam. Um dos quatro ângulos mede 58°. Considerando os três ângulos restantes, sem exigir uma ordem, quais são suas medidas?",
        "hint": "Use a propriedade dos ângulos opostos pelo vértice e a suplementaridade de ângulos adjacentes.",
        "solution": "O oposto pelo vértice tem a mesma medida, 58°. Cada um dos dois adjacentes forma um ângulo raso com o conhecido, portanto mede 180° − 58° = 122°. Os três restantes são 58°, 122° e 122° (A). Incluindo o conhecido, a soma é 360°. B usa complemento; C deixa apenas um ângulo de 122°; D introduz ângulos retos que não são compatíveis com o dado.",
        "options": [
          "58°, 122° e 122°",
          "32°, 58° e 32°",
          "58°, 58° e 122°",
          "90°, 122° e 90°"
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Retas paralelas r e s são cortadas por uma transversal t. Dois ângulos colaterais internos têm medidas (3x + 12)° e (5x − 28)°. Determine o valor de x e a medida de cada ângulo.",
        "hint": "Ângulos colaterais internos são suplementares; some as expressões e iguale a 180°.",
        "solution": "Colaterais internos entre paralelas somam 180°: (3x + 12) + (5x − 28) = 180. Então 8x − 16 = 180, 8x = 196 e x = 24,5. As medidas são 85,5° e 94,5°, cuja soma é 180° (C). Substituir os valores de A, B e D nas expressões produz somas 160°, 176° e 208°, respectivamente; nenhuma satisfaz a relação geométrica.",
        "options": [
          "x = 22; 78° e 82°",
          "x = 24; 84° e 92°",
          "x = 24,5; 85,5° e 94,5°",
          "x = 28; 96° e 112°"
        ],
        "correctIndex": 2
      },
      {
        "level": "advanced",
        "prompt": "Duas retas paralelas r e s são cortadas pela mesma transversal t. Dois ângulos correspondentes medem (2x + 20)° e (3x − 10)°. Na interseção com r, um ângulo adjacente ao de (2x + 20)°, com lado não comum oposto, mede (4y − 20)°. Determine x e y.",
        "hint": "Primeiro iguale os ângulos correspondentes; depois use o par linear, cuja soma é 180°, para encontrar y.",
        "solution": "Correspondentes em paralelas são congruentes: 2x + 20 = 3x − 10, então x = 30 e o ângulo conhecido mede 80°. Seu adjacente no par linear mede 180° − 80° = 100°. Logo, 4y − 20 = 100, 4y = 120 e y = 30 (B). A e D não satisfazem a igualdade inicial; C produziria 110° no adjacente e uma soma de 190° em vez de 180°.",
        "options": [
          "x = 25; y = 30",
          "x = 30; y = 30",
          "x = 30; y = 32,5",
          "x = 35; y = 25"
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Áreas de figuras planas",
    "objective": "Calcular áreas de retângulo, paralelogramo, triângulo, trapézio e losango usando fórmulas corretas, converter unidades quadradas, aplicar fator k² em escalas e distinguir área de perímetro em problemas compostos.",
    "prerequisites": [
      "Multiplicação e divisão de números reais",
      "Noção de unidade de medida de comprimento (metro, centímetro)",
      "Propriedades básicas de quadriláteros e triângulos (lados, alturas, bases)",
      "Potenciação com expoente 2 para conversões quadráticas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Retângulo e paralelogramo: área, unidade quadrada e conversão",
        "explanation": "A área de um retângulo é o produto da base pela altura (A = b × h), pois o retângulo pode ser pavimentado por quadrados unitários lado a lado sem falhas nem sobreposições. O paralelogramo tem a mesma fórmula A = b × h, onde h é a altura relativa à base escolhida (segmento perpendicular à base que liga a base oposta). Isso vale porque todo paralelogramo pode ser recortado e rearranjado em um retângulo de mesma base e altura, preservando a área. A unidade de área é sempre o quadrado da unidade de comprimento: 1 m² = 1 m × 1 m. Para converter, usa-se o fator de conversão linear ao quadrado: 1 m = 100 cm ⇒ 1 m² = 10.000 cm²; 1 cm = 10 mm ⇒ 1 cm² = 100 mm². O erro frequente é multiplicar por 100 em vez de 10.000 ao ir de m² para cm². Antes de multiplicar, padronize as duas medidas: uma base em metros e uma altura em centímetros não produzem diretamente m². A altura é a distância perpendicular entre as retas que contêm as bases; o lado inclinado do paralelogramo costuma ser maior e não pode substituí-la.",
        "steps": [
          "Identificar a base e a altura perpendicular àquela base na figura",
          "Multiplicar base por altura mantendo as mesmas unidades lineares",
          "Se necessário, converter o resultado para a unidade quadrada pedida elevando o fator linear ao quadrado",
          "Verificar se a resposta está em unidade de área (m², cm²) e não de comprimento"
        ],
        "example": "Retângulo com base 12 m e altura 8 m. Área = 12 m × 8 m = 96 m². Em centímetros quadrados: 96 m² × 10.000 = 960.000 cm².",
        "pitfall": "Multiplicar por 100 ao converter m² para cm² em vez de 10.000"
      },
      {
        "level": "intermediate",
        "title": "Triângulo, trapézio e fator de escala k²",
        "explanation": "O triângulo é metade de um paralelogramo com mesma base e altura, logo A = (b × h) / 2. A altura deve ser perpendicular à base escolhida; em triângulos obtusângulos, a altura pode cair fora do triângulo, mas a fórmula permanece válida. O trapézio tem bases paralelas B (maior) e b (menor) e altura h entre elas; sua área é A = (B + b) × h / 2, obtida pela decomposição em dois triângulos ou pela média das bases vezes a altura. Em figuras semelhantes com fator de escala linear k (todas as distâncias multiplicadas por k), a área multiplica-se por k². Exemplo: se um retângulo dobra suas dimensões (k = 2), a área quadruplica (k² = 4). Isso vale para qualquer figura plana, não apenas polígonos. Condição de validade: a semelhança deve preservar ângulos e proporções entre todos os segmentos correspondentes. O fator deve atingir todas as dimensões: duplicar somente a base de um triângulo, mantendo a altura, duplica sua área; isso não é uma ampliação por semelhança.",
        "steps": [
          "Identificar qual fórmula se aplica conforme a figura (triângulo ou trapézio)",
          "Localizar a altura perpendicular à base ou às bases paralelas",
          "Aplicar a fórmula correspondente com medidas nas mesmas unidades",
          "Se houver escala, elevar o fator linear ao quadrado para obter o fator de área"
        ],
        "example": "Triângulo com base 14 cm e altura 10 cm. Área = (14 × 10) / 2 = 70 cm². Se ampliado por k = 3, nova área = 70 × 9 = 630 cm².",
        "pitfall": "Usar lado oblíquo como altura no triângulo ou trapézio em vez da perpendicular"
      },
      {
        "level": "advanced",
        "title": "Losango, diferenças área/perímetro e figuras compostas",
        "explanation": "O losango é um paralelogramo com quatro lados iguais; sua área pode ser calculada como A = (D × d) / 2, onde D e d são as diagonais (perpendiculares entre si), ou como base × altura. A fórmula das diagonais decorre da decomposição em quatro triângulos retângulos congruentes. Diferença fundamental: perímetro mede o contorno linear (soma dos lados, unidade: m, cm), área mede a superfície interna (unidade: m², cm²). Figuras com mesmo perímetro podem ter áreas muito diferentes (ex.: retângulo 1×9 tem P=20, A=9; quadrado 5×5 tem P=20, A=25). Em figuras compostas, decompõe-se em formas conhecidas, calcula-se cada área e soma-se (ou subtrai-se regiões). Cuidado: não somar perímetros internos de compartimentos; área total é soma das áreas das partes. As partes somadas devem preencher a região sem sobreposição; se houver um jardim ou abertura retirados do terreno, subtraia sua área uma única vez. Um desenho pode ajudar a nomear medidas ausentes, mas não deve ser medido com régua quando o enunciado não garante escala.",
        "steps": [
          "Decompor a figura composta em formas elementares (retângulos, triângulos, losangos, trapézios)",
          "Calcular a área de cada parte com a fórmula adequada e unidades consistentes",
          "Somar as áreas das partes para obter a área total",
          "Conferir se a questão pede área ou perímetro e não confundir as unidades"
        ],
        "example": "Losango com diagonais D = 16 cm e d = 12 cm. Área = (16 × 12) / 2 = 96 cm². Perímetro: lado = √(8² + 6²) = 10 cm ⇒ P = 40 cm.",
        "pitfall": "Somar perímetros das partes ao calcular área de figura composta ou usar lado do losango como altura"
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um terreno retangular mede 25 metros de comprimento por 18 metros de largura. Qual é a área desse terreno em centímetros quadrados?",
        "hint": "Converta metros para centímetros antes de multiplicar ou converta o resultado final elevando o fator 100 ao quadrado.",
        "solution": "Área em m² = 25 × 18 = 450 m². Como 1 m = 100 cm, cada quadrado de 1 m de lado contém 100 × 100 quadrados de 1 cm de lado: 1 m² = 10.000 cm². Logo, 450 × 10.000 = 4.500.000 cm² (A). B usa o fator linear 100; C usa 1.000; D usa 100.000. Nenhum desses fatores representa a conversão quadrática correta.",
        "options": [
          "4.500.000 cm²",
          "45.000 cm²",
          "450.000 cm²",
          "45.000.000 cm²"
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Um trapézio isósceles tem bases medindo 10 cm e 22 cm e altura 12 cm. Se todas as suas dimensões lineares forem triplicadas, qual será a nova área da figura?",
        "hint": "Calcule a área original com a fórmula do trapézio, depois aplique o fator k² = 3² = 9 sobre ela.",
        "solution": "A área original é (10 + 22) × 12 / 2 = 192 cm². Com todas as dimensões triplicadas, a área é multiplicada por 3² = 9: 192 × 9 = 1.728 cm² (B). A aplica somente o fator linear; C esquece a divisão por 2 da fórmula; D conserva a área original. O fato de o trapézio ser isósceles não altera essa relação.",
        "options": [
          "576 cm²",
          "1.728 cm²",
          "3.456 cm²",
          "192 cm²"
        ],
        "correctIndex": 1
      },
      {
        "level": "advanced",
        "prompt": "Um losango tem diagonais medindo 24 cm e 18 cm. Um quadrado tem a mesma área desse losango. Qual é o perímetro desse quadrado?",
        "hint": "Primeiro ache a área do losango pela fórmula das diagonais, depois tire a raiz quadrada para obter o lado do quadrado e multiplique por 4.",
        "solution": "Área do losango = 24 × 18 / 2 = 216 cm². Se s é o lado do quadrado, s² = 216, então s = √216 = 6√6 cm. Seu perímetro é 4s = 24√6 cm (C), aproximadamente 58,79 cm. A é o perímetro do losango, cujo lado é √(12² + 9²) = 15 cm; a igualdade das áreas não implica igualdade dos perímetros. B e D dariam quadrados de lados 18 e 12 cm, com áreas 324 e 144 cm².",
        "options": [
          "60 cm",
          "72 cm",
          "24√6 cm",
          "48 cm"
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Circunferência e círculo",
    "objective": "Compreender as propriedades fundamentais da circunferência e do círculo, dominar o cálculo de perímetro, área, ângulos centrais, arcos, setores e coroas circulares, e distinguir a escala linear da quadrática nas medidas circulares.",
    "prerequisites": [
      "Conceitos básicos de geometria plana: ponto, reta, plano e ângulo",
      "Operações com números reais, potências e raiz quadrada",
      "Noção de proporção, regra de três e porcentagem",
      "Definição de π como razão entre perímetro e diâmetro de qualquer circunferência"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Circunferência e círculo: definições, raio, diâmetro, perímetro e área",
        "explanation": "A circunferência é o conjunto de pontos de um plano equidistantes de um ponto fixo chamado centro; essa distância constante é o raio (r). O diâmetro (d) é o dobro do raio (d = 2r) e corresponde à maior corda possível. O círculo é a região plana limitada pela circunferência, incluindo seu interior. O perímetro da circunferência, também chamado de comprimento, é dado por C = 2πr = πd. A área do círculo é A = πr². A constante π (pi) é irracional, aproximadamente 3,14159, e representa a razão entre o perímetro e o diâmetro de qualquer circunferência. Essas fórmulas valem para qualquer círculo no plano euclidiano, independentemente de sua posição ou orientação. A distinção entre a linha (circunferência, unidimensional) e a região (círculo, bidimensional) é essencial: o perímetro mede extensão linear, enquanto a área mede extensão superficial. Em aplicações práticas, usa-se π ≈ 3,14 ou 3,1416, mantendo-se o símbolo π em cálculos exatos.",
        "steps": [
          "Identificar o raio ou o diâmetro informado no problema",
          "Escolher a fórmula apropriada: C = 2πr para perímetro ou A = πr² para área",
          "Substituir o valor numérico e calcular, mantendo π simbólico ou usando aproximação decimal",
          "Verificar a unidade de medida do resultado: comprimento para perímetro, área para círculo"
        ],
        "example": "Um círculo tem raio r = 7 cm. Perímetro: C = 2 × π × 7 = 14π cm ≈ 43,98 cm. Área: A = π × 7² = 49π cm² ≈ 153,94 cm².",
        "pitfall": "Confundir raio com diâmetro ao substituir na fórmula do perímetro ou da área"
      },
      {
        "level": "intermediate",
        "title": "Ângulos centrais, arcos, setores e suas medidas proporcionais",
        "explanation": "Um ângulo central tem vértice no centro da circunferência e seus lados interceptam um arco. A medida do arco (comprimento) é proporcional à medida do ângulo central em graus: comprimento do arco = (θ/360) × 2πr, onde θ é o ângulo em graus. Um setor circular é a região limitada por dois raios e pelo arco correspondente; sua área é área do setor = (θ/360) × πr². Essa proporcionalidade vale porque 360° corresponde à circunferência completa (perímetro 2πr) e ao círculo completo (área πr²). Um arco pode ser menor (θ < 180°), maior (θ > 180°) ou semicircunferência (θ = 180°). O mesmo raciocínio proporcional permite encontrar o ângulo central dado o arco ou a área do setor: θ = (comprimento do arco / 2πr) × 360 ou θ = (área do setor / πr²) × 360. Em radianos, a fórmula simplifica: comprimento do arco = r × θ_rad e área do setor = ½ × r² × θ_rad, pois 2π rad = 360°. A conversão entre graus e radianos usa o fator π/180.",
        "steps": [
          "Identificar o raio e o ângulo central em graus (ou radianos)",
          "Aplicar a regra de três proporcional: θ/360 = arco/2πr = setor/πr²",
          "Calcular o comprimento do arco ou a área do setor conforme solicitado",
          "Se necessário, converter apenas a medida angular: graus × π/180 dão radianos; radianos × 180/π dão graus."
        ],
        "example": "Circunferência de raio 10 cm, ângulo central θ = 72°. Arco: (72/360) × 2π × 10 = (1/5) × 20π = 4π cm ≈ 12,57 cm. Setor: (72/360) × π × 100 = 20π cm² ≈ 62,83 cm².",
        "pitfall": "Esquecer de dividir o ângulo por 360° antes de multiplicar pelo perímetro ou área total"
      },
      {
        "level": "advanced",
        "title": "Coroas circulares, semelhança e aproximação de π",
        "explanation": "Uma coroa circular é a região entre duas circunferências concêntricas, com raios externo R e interno r, sendo R > r > 0. A área é a diferença das áreas dos círculos: A = πR² − πr² = π(R² − r²) = π(R − r)(R + r). O contorno total inclui as bordas externa e interna, portanto P = 2πR + 2πr = 2π(R + r). Se a pergunta pede somente a borda externa, use apenas 2πR. Ao multiplicar ambos os raios por um mesmo fator positivo k, todos os comprimentos são multiplicados por k e todas as áreas por k²; isso é semelhança. Somar uma mesma quantidade aos dois raios não conserva necessariamente sua razão, portanto não autoriza aplicar um único fator de escala. A largura do anel é R − r, mas sua área não é π(R − r)²: anéis de mesma largura podem ter áreas diferentes conforme o tamanho dos raios. Mantenha π simbólico até o fim quando a resposta for exata. Se o problema indicar uma aproximação, use-a em todas as etapas e arredonde apenas o resultado final; π = 3,14 e π = 22/7 são aproximações diferentes, não igualdades exatas.",
        "steps": [
          "Identificar os dois raios R e r da coroa circular (R > r)",
          "Calcular a área da coroa: A = π(R² − r²) ou A = π(R − r)(R + r)",
          "Calcular o perímetro total se solicitado: P = 2π(R + r)",
          "Analisar como as medidas mudam se os raios forem multiplicados por um fator k: comprimentos × k, áreas × k²"
        ],
        "example": "Coroa com R = 12 cm e r = 5 cm. Área: π(12² − 5²) = π(144 − 25) = 119π cm² ≈ 373,85 cm². Perímetro total: 2π(12 + 5) = 34π cm ≈ 106,81 cm. Se raios dobrarem: área × 4, perímetro × 2.",
        "pitfall": "Somar as áreas dos círculos em vez de subtrair, ou confundir R² − r² com (R − r)²"
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma roda de bicicleta tem diâmetro de 70 cm e rola sem deslizar sobre uma pista plana. Quantos metros percorre o centro da roda em 50 voltas completas? Use π ≈ 3,14.",
        "hint": "Calcule o perímetro da roda e multiplique pelo número de voltas, convertendo cm para m.",
        "solution": "Perímetro da roda: C = π × d = 3,14 × 70 = 219,8 cm = 2,198 m. Em 50 voltas: 50 × 2,198 = 109,9 m. A alternativa B usa raio em vez de diâmetro (3,14 × 35 × 50 = 5495 cm = 54,95 m). A C esquece de converter cm para m (10990 m). A D usa π = 3 (3 × 70 × 50 = 10500 cm = 105 m).",
        "options": [
          "109,9 m",
          "54,95 m",
          "10990 m",
          "105 m"
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Um setor circular de raio 14 cm tem área de 343π/5 cm². Qual é a medida do ângulo central desse setor em graus?",
        "hint": "Use a fórmula da área do setor: A = (θ/360) × πr² e isole θ.",
        "solution": "A área do círculo inteiro é π × 14² = 196π cm². O setor ocupa (343π/5)/(196π) = 7/20 dessa área. Assim, seu ângulo central é 360° × 7/20 = 126° (B), exatamente. As opções A, C e D corresponderiam a 1/6, 1/4 e 1/2 da área do círculo; nenhuma delas corresponde à fração 7/20 informada.",
        "options": [
          "60°",
          "126°",
          "90°",
          "180°"
        ],
        "correctIndex": 1
      },
      {
        "level": "advanced",
        "prompt": "Uma coroa circular tem raio externo R = 20 cm e raio interno r = 12 cm. Se ambos os raios forem aumentados em 50%, qual será a razão entre a nova área da coroa e a área original?",
        "hint": "Calcule a área original A = π(R² − r²). Novos raios: 1,5R e 1,5r. Nova área = π((1,5R)² − (1,5r)²). Simplifique a razão.",
        "solution": "Área original: π(20² − 12²) = 256π cm². Novos raios: 30 e 18 cm. Nova área: π(30² − 18²) = 576π cm². A razão nova/original é 576/256 = 9/4 = 2,25 (B). A usa escala linear; C triplicaria a área sem justificativa; D seria o fator de área de uma duplicação dos dois raios, e não de um aumento de 50%.",
        "options": [
          "1,5",
          "2,25",
          "3",
          "4"
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Expressões algébricas",
    "objective": "Dominar a manipulação de expressões algébricas: identificar variáveis e coeficientes, calcular valor numérico respeitando a ordem de operações, aplicar propriedade distributiva e agrupar termos semelhantes, reconhecer e usar produtos notáveis, fatorar expressões e simplificar frações algébricas com atenção às restrições de domínio, evitando o erro de cancelar parcelas de somas.",
    "prerequisites": [
      "Operações com números inteiros e racionais",
      "Conceito de potência e propriedades das potências",
      "Noção de igualdade e equivalência de expressões",
      "Resolução de equações do 1º grau simples"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Variáveis, coeficientes, valor numérico e ordem de operações",
        "explanation": "Uma expressão algébrica combina números, variáveis (letras que representam quantidades desconhecidas ou variáveis) e operações aritméticas. O coeficiente numérico é o fator numérico que multiplica a variável; em 5x², o coeficiente é 5. A ordem de operações segue a convenção universal: parênteses e agrupadores primeiro, depois potências e raízes, em seguida multiplicações e divisões da esquerda para a direita, por fim adições e subtrações da esquerda para a direita. Para calcular o valor numérico, substitui-se cada variável pelo número indicado, mantendo parênteses quando o valor for negativo para evitar erros de sinal, e aplica-se a hierarquia das operações passo a passo. Por exemplo, em 3x² - 2x + 7 com x = -2, primeiro eleva-se -2 ao quadrado obtendo 4, multiplica-se por 3 resultando 12, depois -2 × (-2) = 4, somando 12 + 4 + 7 = 23. O erro frequente é esquecer parênteses ao substituir valores negativos, transformando -2² em -4 em vez de (-2)² = 4.",
        "steps": [
          "Identifique variáveis e seus coeficientes numéricos em cada termo",
          "Substitua cada variável pelo valor dado, colocando parênteses se o valor for negativo",
          "Aplique a ordem de operações: potências, multiplicações/divisões, adições/subtrações",
          "Verifique se o resultado final é compatível com estimativas rápidas."
        ],
        "example": "Para a expressão 2a³ - 5ab + 4b² com a = -3 e b = 2: 2(-3)³ - 5(-3)(2) + 4(2)² = 2(-27) - 5(-6) + 4(4) = -54 + 30 + 16 = -8.",
        "pitfall": "Esquecer parênteses ao substituir variável negativa, alterando o sinal da potência."
      },
      {
        "level": "intermediate",
        "title": "Propriedade distributiva e agrupamento de termos semelhantes",
        "explanation": "A propriedade distributiva da multiplicação em relação à adição afirma que a(b + c) = ab + ac e (b + c)a = ba + ca; ela permite expandir produtos ou fatorar expressões. Termos semelhantes são aqueles que possuem exatamente a mesma parte literal (mesmas variáveis com mesmos expoentes); apenas os coeficientes numéricos podem diferir. Para somar ou subtrair termos semelhantes, conservam-se as variáveis e operam-se os coeficientes: 3x²y - 7x²y + 2x²y = (3 - 7 + 2)x²y = -2x²y. Termos não semelhantes não podem ser combinados: 4x² + 5x permanece 4x² + 5x. A distributiva também se aplica a expressões com vários termos: (2x - 3)(x + 4) = 2x·x + 2x·4 - 3·x - 3·4 = 2x² + 8x - 3x - 12 = 2x² + 5x - 12. Um erro muito comum é aplicar a distributiva apenas ao primeiro termo dentro dos parênteses, esquecendo de multiplicar o fator externo por todos os termos internos, ou tentar somar coeficientes de termos não semelhantes.",
        "steps": [
          "Identifique se há parênteses precedidos de fator multiplicativo",
          "Aplique a distributiva multiplicando o fator externo por cada termo interno",
          "Agrupe termos semelhantes somando ou subtraindo apenas os coeficientes",
          "Escreva a expressão simplificada em ordem decrescente de grau, se houver variável única."
        ],
        "example": "Simplifique (3x - 2)(2x + 5) - 4x(x - 1): 6x² + 15x - 4x - 10 - 4x² + 4x = (6 - 4)x² + (15 - 4 + 4)x - 10 = 2x² + 15x - 10.",
        "pitfall": "Multiplicar o fator externo apenas pelo primeiro termo dentro dos parênteses."
      },
      {
        "level": "advanced",
        "title": "Produtos notáveis, fatoração, restrições de domínio e simplificação de frações",
        "explanation": "Produtos notáveis são identidades que aparecem frequentemente: quadrado da soma (a + b)² = a² + 2ab + b², quadrado da diferença (a - b)² = a² - 2ab + b², produto da soma pela diferença (a + b)(a - b) = a² - b². A fatoração é o processo inverso: escrever uma soma como produto. Métodos comuns: evidenciar fator comum (ab + ac = a(b + c)), trinômio quadrado perfeito (x² + 6x + 9 = (x + 3)²), diferença de quadrados (x² - 25 = (x - 5)(x + 5)), agrupamento de termos. Ao simplificar frações algébricas, só se pode cancelar fatores comuns ao numerador e denominador, nunca parcelas de uma soma: (x + 3)/(x + 5) não simplifica para 3/5. Além disso, deve-se determinar as restrições de domínio: valores que anulam o denominador original são proibidos, mesmo que se cancelem algebricamente. Em (x² - 4)/(x - 2) = (x - 2)(x + 2)/(x - 2) = x + 2, a restrição x ≠ 2 permanece válida, pois a expressão original não existe para x = 2. Erro grave: cancelar parcelas em vez de fatores, ou ignorar restrições de domínio após simplificação.",
        "steps": [
          "Determine o domínio excluindo os zeros do denominador original antes de cancelar qualquer fator.",
          "Reconheça produtos notáveis e fatore completamente numerador e denominador.",
          "Cancele apenas fatores comuns não nulos, nunca parcelas de uma soma.",
          "Registre a expressão simplificada junto de todas as restrições do domínio original."
        ],
        "example": "Simplifique (x² - 9)/(x² - 6x + 9) indicando restrições: (x - 3)(x + 3)/(x - 3)² = (x + 3)/(x - 3), com x ≠ 3.",
        "pitfall": "Cancelar parcelas de uma soma (ex.: (x+3)/(x+5) = 3/5) ou esquecer restrição de domínio após cancelar fator."
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um retângulo tem comprimento representado por (2x + 3) metros e largura por (x - 1) metros. Se x = 4, qual é a área do retângulo em metros quadrados?",
        "hint": "Substitua x = 4 nas expressões do comprimento e largura, calcule cada valor e depois multiplique.",
        "solution": "Substituindo x = 4, o comprimento é 2 × 4 + 3 = 11 m e a largura é 4 − 1 = 3 m. As duas medidas são positivas, como exige o contexto. Área = 11 × 3 = 33 m² (B). A e C não são o produto 11 × 3; D usa indevidamente 4 m como largura em vez de 3 m. Somar comprimento e largura não calcularia a área.",
        "options": [
          "28 m²",
          "33 m²",
          "35 m²",
          "44 m²"
        ],
        "correctIndex": 1
      },
      {
        "level": "intermediate",
        "prompt": "Simplifique a expressão algébrica: 3(2x - 5) - 2(4x + 3) + 5(x - 2).",
        "hint": "Aplique a distributiva em cada parêntese, tome cuidado com os sinais, depois agrupe os termos em x e os constantes.",
        "solution": "Distribuindo todos os fatores: 3(2x − 5) = 6x − 15; −2(4x + 3) = −8x − 6; 5(x − 2) = 5x − 10. Somando os termos semelhantes: (6 − 8 + 5)x + (−15 − 6 − 10) = 3x − 31 (D). A troca o sinal de −6 por +6; B e C têm coeficientes de x incompatíveis com 6 − 8 + 5. A distributiva alcança cada termo dos parênteses.",
        "options": [
          "3x - 19",
          "-x - 31",
          "13x - 31",
          "3x - 31"
        ],
        "correctIndex": 3
      },
      {
        "level": "advanced",
        "prompt": "Simplifique a fração algébrica (x² - 4x + 4) / (x² - 4) e indique a restrição de domínio necessária.",
        "hint": "Fatore numerador e denominador completamente; cancele apenas fatores comuns; lembre-se de excluir valores que anulem o denominador original.",
        "solution": "Antes de simplificar, x² − 4 = (x − 2)(x + 2) exclui x = 2 e x = −2. O numerador é (x − 2)². No domínio permitido, podemos cancelar um fator x − 2, obtendo (x − 2)/(x + 2), com as duas exclusões originais (C). A inverte a fração; B elimina restrições indispensáveis; D cancela fatores diferentes como se fossem iguais. Em x = 0, por exemplo, o valor é −1, e não 1.",
        "options": [
          "(x+2)/(x-2), x ≠ 2 e x ≠ -2",
          "(x-2)/(x+2), sem nenhuma exclusão de valores",
          "(x-2)/(x+2), preservando x ≠ 2 e x ≠ -2",
          "1, x ≠ 2 e x ≠ -2"
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "subject": "Matemática",
    "topic": "Razão e proporção",
    "objective": "Dominar o conceito de razão, identificar proporcionalidade direta e inversa com suas hipóteses e invariantes, resolver problemas de rateio e escala, e distinguir situações não proporcionais.",
    "prerequisites": [
      "Operações com números racionais e frações",
      "Conversão de unidades de comprimento, tempo e massa",
      "Resolução de uma equação simples do primeiro grau"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Razão, ordem e unidade",
        "explanation": "A razão de uma quantidade A para uma quantidade B, com B diferente de zero, é o quociente A/B. A ordem importa: 3/5 significa que a primeira é três quintos da segunda, enquanto 5/3 é sua razão inversa. Se ambas medem a mesma grandeza, padronize as unidades antes de interpretar a razão como número sem unidade: 2 m para 50 cm significa 200 cm/50 cm = 4, e não 2/50. Se as grandezas são diferentes, a razão pode ter unidade própria: 150 km em 3 h correspondem à velocidade média de 50 km/h. A taxa unitária informa a quantidade por uma unidade do denominador. Para quantidades inteiras, simplificar uma razão pelo máximo divisor comum conserva seu valor. Uma proporção é a igualdade de duas razões a/b = c/d, com b e d não nulos; multiplicar por bd produz ad = bc. Essa propriedade permite obter uma incógnita, mas não prova que um fenômeno seja proporcional: o modelo deve ser justificado pelo contexto. Em escala 1:n, com as duas medidas na mesma unidade, cada unidade do desenho representa n unidades reais.",
        "steps": [
          "Identifique as duas grandezas e a ordem solicitada no enunciado",
          "Escreva a razão como fração respeitando a ordem: primeira grandeza no numerador",
          "Simplifique a fração ao máximo divisor comum e, se pedido, converta para taxa unitária dividindo numerador por denominador"
        ],
        "example": "Uma receita leva 600 g de farinha para 400 g de açúcar. Razão farinha/açúcar = 600/400 = 3/2 = 1,5. Taxa unitária: 1,5 g de farinha por 1 g de açúcar.",
        "pitfall": "Inverter os termos da razão ao ler 'razão de A para B' e escrever B/A"
      },
      {
        "level": "intermediate",
        "title": "Proporcionalidade direta e inversa: hipóteses e invariantes",
        "explanation": "No contexto de grandezas positivas, a proporcionalidade direta significa que y/x = k é constante, isto é, y = kx. Dobrar x dobra y; a razão, e não o produto, é o invariante. Um preço por quilograma constante e sem taxa fixa produz esse modelo. Na proporcionalidade inversa, xy = k: ao dobrar x, y cai à metade. Para um mesmo serviço feito por trabalhadores igualmente produtivos, sem interferência entre eles e com jornadas iguais, o número de trabalhadores e o número de dias podem ser modelados assim. Se houver treinamento ou limitação de equipamentos, essa hipótese pode falhar. Para ratear um total T diretamente a pesos positivos w₁, w₂ e w₃, cada parte é T × wᵢ/(w₁ + w₂ + w₃); a soma das partes deve recuperar T. Um rateio inverso usa pesos 1/wᵢ e depois o mesmo procedimento de normalização. Em escala linear 1:n, medidas reais de comprimento são n vezes as do desenho; áreas correspondentes são n² vezes maiores, desde que ambas as dimensões sejam ampliadas pelo mesmo fator e as unidades sejam compatíveis.",
        "steps": [
          "Verifique se o fenômeno obedece a hipótese de proporcionalidade (linearidade pela origem ou produto constante)",
          "Identifique o invariante: quociente constante k na direta, produto constante k na inversa",
          "Monte a equação com o invariante e resolva a incógnita; no rateio, calcule a soma dos proporcionais e aplique a fração correspondente"
        ],
        "example": "Três sócios investem 12 000, 18 000 e 30 000. Lucro de 30 000 rateado diretamente. Soma = 60 000. Partes: (12/60)×30 000 = 6 000; (18/60)×30 000 = 9 000; (30/60)×30 000 = 15 000.",
        "pitfall": "Aplicar regra de três direta em situação de proporcionalidade inversa ou vice-versa"
      },
      {
        "level": "advanced",
        "title": "Casos não proporcionais, escala composta e análise dimensional",
        "explanation": "Uma relação pode ser crescente sem ser diretamente proporcional. No custo C = ax + b, a taxa fixa b diferente de zero impede que C/x seja constante: dobrar a distância não dobra a taxa fixa. Relações quadráticas, como a área de um quadrado em função de seu lado, também não têm razão área/lado constante. Verificar alguns pares de dados ajuda a refutar um modelo, mas encontrar três razões iguais não prova que a regra vale para todos os valores: é preciso uma hipótese sobre o fenômeno. A análise dimensional exige unidades compatíveis em cada soma e resultado. Em C = 25 reais + (0,80 real/km) × d km, a parte variável tem unidade real e pode ser somada à taxa fixa. Já somar reais diretamente a quilômetros não tem sentido. Nas conversões, multiplique por fatores equivalentes a 1, como 1 km/1.000 m, para preservar a quantidade e cancelar a unidade de origem. Em problemas com paradas ou custos fixos, separe as parcelas antes de usar proporção. Duas tarifas afins podem ser comparadas igualando suas expressões e interpretando o ponto em que os custos coincidem.",
        "steps": [
          "Compare razões ou produtos dos dados para procurar incompatibilidades e justifique no contexto a validade do modelo.",
          "Aplique análise dimensional para confirmar que as unidades das grandezas são compatíveis com a relação proposta",
          "Se a relação falhar no teste, modele como função afim, quadrática ou outra e resolva pelo método adequado"
        ],
        "example": "Uma viagem tem 240 km percorridos a 80 km/h, mais uma parada fixa de 0,5 h. Tempo em movimento: 240/80 = 3 h; tempo total: 3,5 h; velocidade média total: 240/3,5 ≈ 68,57 km/h. Para distância d, o tempo total é d/80 + 0,5, uma relação afim, sem proporcionalidade direta.",
        "pitfall": "Assumir proporcionalidade direta entre distância e tempo total ignorando paradas ou trechos com velocidade variável"
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Um mapa tem escala 1:50 000. No mapa, a distância entre duas cidades mede 6,4 cm. Qual é a distância real em quilômetros?",
        "hint": "Converta a medida do mapa para a realidade multiplicando pelo denominador da escala e depois passe de centímetros para quilômetros.",
        "solution": "A escala significa 1 cm no mapa para 50.000 cm reais. Logo, 6,4 × 50.000 = 320.000 cm = 3.200 m = 3,2 km (A). B e C deixam a distância dez ou cem vezes maior, por conversões incorretas; D corresponde a dez vezes menos. Usar as mesmas unidades antes da multiplicação evita confundir centímetros, metros e quilômetros.",
        "options": [
          "3,2 km",
          "32 km",
          "320 km",
          "0,32 km"
        ],
        "correctIndex": 0
      },
      {
        "level": "intermediate",
        "prompt": "Oito operários igualmente produtivos, com jornadas iguais e sem interferência entre si, concluem um serviço em 15 dias. Admitindo esse modelo para toda a equipe, quantos operários a mais são necessários para concluir o mesmo serviço em 10 dias?",
        "hint": "Trata-se de proporcionalidade inversa entre número de operários e tempo: o produto operários × dias permanece constante.",
        "solution": "O serviço exige 8 × 15 = 120 operário-dias. Com prazo de 10 dias, são necessários 120/10 = 12 operários no total. Contratam-se 12 − 8 = 4 adicionais (B). A e D elevariam a equipe para 13 e 10, sem satisfazer exatamente o modelo; C confunde total necessário com contratação adicional. A conclusão depende das hipóteses de produtividade e jornadas iguais.",
        "options": [
          "5 operários",
          "4 operários",
          "12 operários",
          "2 operários"
        ],
        "correctIndex": 1
      },
      {
        "level": "advanced",
        "prompt": "Duas transportadoras cobram pela mesma viagem sem outros custos. A cobra R$ 8,00 fixos mais R$ 2,40 por quilômetro; B cobra R$ 14,00 fixos mais R$ 1,90 por quilômetro. Em qual distância os custos são iguais?",
        "hint": "Escreva as duas funções de custo, iguale-as e isole a distância; as taxas fixas impedem usar proporcionalidade direta simples.",
        "solution": "Se d é a distância em km, 8 + 2,40d = 14 + 1,90d. Subtraindo 1,90d e 8 dos dois lados, 0,50d = 6, portanto d = 12 km (C). Os dois custos são R$ 36,80 nesse ponto. A, B e D dão diferenças não nulas entre as tarifas; além de 12 km, B fica mais barata por ter menor preço por quilômetro.",
        "options": [
          "6 km",
          "10 km",
          "12 km",
          "24 km"
        ],
        "correctIndex": 2
      }
    ]
  }
];
const byTopic=new Map(authoredEnemDeepBatch02.map(spec=>[JSON.stringify([spec.subject,spec.topic]),spec]));

export function deepEnemFoundationsLesson(topic:CurriculumTopic):CourseLesson|null{
 const spec=byTopic.get(JSON.stringify([topic.subject,topic.topic]));
 if(!spec||topic.id!==courseId(spec.subject,spec.topic))return null;
 const exams=(Object.keys(examBlueprints) as ExamId[]).filter(exam=>examBlueprints[exam].subjects[spec.subject]?.includes(spec.topic));
 if(!exams.includes('enem'))return null;
 return {
  kind:'lesson',id:topic.id,subject:spec.subject,topic:spec.topic,exams,
  objective:spec.objective,prerequisites:[...spec.prerequisites],
  sections:spec.sections,tasks:spec.tasks,videos:[],
  authorship:'Kognos — aula autoral de conteúdo original com assistência de IA; revisão pedagógica humana pendente; sem homologação docente',
  license:'Material preparatório autoral do Kognos; não oficial do ENEM nem homologado pelo Inep',
  sourceUrls:[...new Set([
   'https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem',
   ...exams.map(exam=>examBlueprints[exam].sourceUrl).filter(url=>url.startsWith('https://'))
  ])],
  review:'introductory',
  syllabusScope:'Escopo editorial Kognos: '+spec.topic+'. Referências institucionais orientam o catálogo; o texto e os exercícios são autorais, sem atribuição de habilidade oficial ou homologação.'
 };
}
