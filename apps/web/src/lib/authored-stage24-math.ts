import type {TopicSeed} from './authored-stage19-seed.ts';
/** Matemática: combinações algébricas e raízes polinomiais verificadas. */
export const stage24Math:TopicSeed[]=[
 {
  "subject": "Matemática",
  "topic": "Binômio de Newton",
  "objective": "Expandir potências de binômios com coeficientes combinatórios e identificar termos específicos sem confundir posição com expoente.",
  "chapters": [
   [
    "Padrão de coeficientes na expansão",
    "Para inteiro n≥0, (a+b)^n=Σ C(n,k)a^(n−k)b^k, com k de 0 a n. Os coeficientes C(n,k)=n!/[k!(n−k)!] contam escolhas de posições para o fator b no produto. O número de termos formais é n+1, antes de possíveis simplificações por substituições particulares. O triângulo de Pascal organiza os coeficientes, mas não substitui a análise dos expoentes.",
    "(x+y)^3=x³+3x²y+3xy²+y³; o coeficiente 3 de x²y corresponde às três maneiras de escolher um fator y.",
    "Os coeficientes de (a+b)^n são sempre 1, e apenas os expoentes mudam de termo para termo.",
    "Expanda (x+1)² com todos os coeficientes.",
    "Use os coeficientes 1,2,1.",
    "(x+1)²=x²+2x+1; o termo intermediário surge das duas escolhas de posição do fator 1.",
    "A contagem combinatória explica os coeficientes e impede omitir termos cruzados."
   ],
   [
    "Termo geral e sinais",
    "O termo de índice k+1 na expansão de (a+b)^n é T_(k+1)=C(n,k)a^(n−k)b^k. Se b for negativo, o sinal depende da paridade de k. Para localizar termo de grau específico, iguale o expoente desejado e resolva para k dentro do intervalo de 0 a n. Confundir índice do termo com k desloca a escolha do coeficiente.",
    "Em (2x−1)^3, o termo em x² ocorre com k=1: C(3,1)(2x)²(−1)=−12x².",
    "Em (a−b)^n todos os termos após o primeiro são negativos porque há um sinal de menos no binômio.",
    "Qual o coeficiente de x² em (x−2)^3?",
    "Use k=1 para obter x².",
    "C(3,1)·x²·(−2)=−6x²; o coeficiente pedido é −6.",
    "Os sinais alternam conforme a potência do termo negativo, e não permanecem sempre iguais."
   ],
   [
    "Identidades e interpretação combinatória",
    "A soma dos coeficientes de (a+b)^n, quando a=b=1, é 2^n; a soma alternada com a=1 e b=−1 é zero para n>0. Essas identidades podem ser justificadas por contagem de subconjuntos ou pela própria expansão. A aplicação exige verificar a substituição e não confundir soma de coeficientes com soma dos valores de termos para qualquer a e b.",
    "Em (x+1)^4, a soma dos coeficientes é 1+4+6+4+1=16, igual a 2⁴.",
    "A soma dos coeficientes de (3x+2)^4 é sempre 16 porque o expoente é quatro.",
    "Qual a soma dos coeficientes de (x+1)^5?",
    "Substitua x=1 na expressão.",
    "(1+1)^5=2^5=32, que é a soma dos coeficientes do polinômio expandido.",
    "A substituição x=1 funciona para a soma dos coeficientes, mas a base precisa ser avaliada corretamente."
   ]
  ],
  "situation": [
   "Uma equipe de programação deseja contar quantas escolhas de k elementos existem em conjunto de cinco opções, sem considerar ordem, e relacionar a contagem a uma expansão algébrica.",
   "Quantas escolhas de dois elementos existem e onde esse valor aparece no binômio?",
   "C(5,2)=5!/(2!3!)=10. Esse número é coeficiente do termo a³b² na expansão de (a+b)^5, pois escolhe duas das cinco posições para b."
  ],
  "links": [
   [
    "Matemática",
    "Combinações",
    "Os coeficientes binomiais contam seleções sem ordem e fundamentam cada termo da expansão."
   ],
   [
    "Matemática",
    "Princípio fundamental da contagem",
    "A expansão representa escolhas de fatores em produtos sucessivos, conectando álgebra e contagem."
   ]
  ]
 },
 {
  "subject": "Matemática",
  "topic": "Polinômios e equações polinomiais",
  "objective": "Aplicar fatoração, divisão e teorema do resto para encontrar raízes e verificar multiplicidades em equações polinomiais.",
  "chapters": [
   [
    "Raiz como anulação do polinômio",
    "Uma raiz r de P(x) satisfaz P(r)=0. Pelo teorema do fator, isso equivale à divisibilidade de P(x) por (x−r) no conjunto adequado de coeficientes. Grau indica maior expoente com coeficiente não nulo, mas não garante o mesmo número de raízes reais distintas. Verificar por substituição evita aceitar valores apenas porque surgiram de manipulação algébrica inadequada.",
    "P(x)=x²−5x+6 tem P(2)=0 e P(3)=0, logo P(x)=(x−2)(x−3).",
    "Todo polinômio de grau três possui exatamente três raízes reais distintas, independentemente dos coeficientes.",
    "O número 4 é raiz de P(x)=x²−6x+8?",
    "Substitua x=4.",
    "P(4)=16−24+8=0; portanto 4 é raiz e (x−4) é fator.",
    "Uma raiz precisa anular a expressão; o grau sozinho não identifica a natureza de todas as raízes."
   ],
   [
    "Divisão e teorema do resto",
    "Na divisão de P(x) por x−a, o resto é P(a). A divisão sintética, quando aplicável, organiza coeficientes inclusive termos ausentes com coeficiente zero. Conhecer uma raiz permite reduzir o grau e continuar a fatoração; entretanto uma raiz irracional ou complexa pode exigir técnicas adicionais. A identidade P(x)=(x−a)Q(x)+P(a) explica o procedimento.",
    "Para P(x)=x³−3x²+2x, P(1)=0; a divisão por x−1 gera quociente x²−2x, ainda fatorável.",
    "O resto da divisão por x−a é sempre o coeficiente independente do polinômio.",
    "Qual o resto de x³−2x+5 dividido por x−2?",
    "Use P(2) sem dividir completamente.",
    "P(2)=8−4+5=9, então o resto é 9.",
    "O teorema do resto depende do valor a no divisor e não apenas do termo constante."
   ],
   [
    "Multiplicidade e comportamento gráfico",
    "Se P(x) contém (x−r)^m como fator e não contém potência maior, r tem multiplicidade m. Em raízes reais de multiplicidade par, o gráfico tende a tocar o eixo e voltar; em multiplicidade ímpar, atravessa o eixo, considerando a função polinomial real e os demais fatores não nulos em r. A soma das multiplicidades complexas é igual ao grau pelo teorema fundamental da álgebra.",
    "P(x)=(x−1)²(x+2) tem raiz 1 de multiplicidade dois e raiz −2 simples; perto de x=1 o gráfico toca o eixo.",
    "Uma raiz repetida é contada como apenas uma em qualquer relação entre multiplicidades e grau.",
    "Quais raízes e multiplicidades de (x−3)²(x+1)?",
    "Leia os fatores e expoentes.",
    "x=3 tem multiplicidade 2 e x=−1 tem multiplicidade 1; a soma 3 corresponde ao grau.",
    "Distinguir raízes distintas de raízes contadas com multiplicidade evita contagens inconsistentes."
   ]
  ],
  "situation": [
   "Uma equipe ajusta a curva de altura de um dispositivo por P(t)=(t−2)²(t−5), com t em segundos, e deseja localizar instantes em que o valor do modelo é zero.",
   "Quais instantes anulam P e qual a diferença algébrica entre eles?",
   "t=2 e t=5 anulam P; 2 é raiz dupla e 5 é simples. O gráfico toca o eixo em t=2 e atravessa em t=5 no modelo, sem inferir significado físico sem unidades e contexto."
  ],
  "links": [
   [
    "Matemática",
    "Fatoração de polinômios",
    "A decomposição em fatores lineares ou de maior grau facilita encontrar raízes e multiplicidades."
   ],
   [
    "Matemática",
    "Função quadrática",
    "O estudo de raízes e gráficos quadráticos é caso particular da análise de polinômios."
   ]
  ]
 }
];
