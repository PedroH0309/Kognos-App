import type {TopicSeed} from './authored-stage19-seed.ts';
/** Biologia: mecanismos de desenvolvimento vegetal e genética quantitativa. */
export const stage24Biology:TopicSeed[]=[
 {
  "subject": "Biologia",
  "topic": "Hormônios vegetais e tropismos",
  "objective": "Distinguir respostas de crescimento e movimentos vegetais, relacionando distribuição hormonal, luz e gravidade a adaptações observáveis.",
  "chapters": [
   [
    "Fototropismo e crescimento diferencial",
    "Fototropismo é crescimento orientado pela direção da luz, não deslocamento voluntário da planta. Em caules de muitas espécies, redistribuição de auxina pode favorecer alongamento celular no lado sombreado, curvando o órgão em direção à luz. A resposta depende do tecido, da concentração hormonal e das condições experimentais; raízes podem responder de forma diferente à mesma substância.",
    "Uma muda colocada próxima a janela unilateral pode curvar o caule para a fonte luminosa porque o alongamento celular fica assimétrico.",
    "A planta inclina-se para a luz porque células do lado iluminado sempre crescem mais depressa.",
    "Por que um caule pode curvar-se em direção à janela?",
    "Considere diferença de alongamento entre os lados.",
    "A redistribuição de auxina pode aumentar alongamento no lado sombreado, produzindo curvatura em direção à luz.",
    "A orientação do crescimento depende de assimetria fisiológica, não de movimento muscular."
   ],
   [
    "Gravitropismo e outros sinais",
    "Gravitropismo descreve crescimento orientado em resposta à gravidade. Raízes apresentam frequentemente gravitropismo positivo e caules negativo; a percepção envolve células especializadas e sinalização que altera crescimento. A resposta não depende de a planta reconhecer conscientemente cima ou baixo. Tropismos são direcionais, ao contrário de vários movimentos násticos que dependem da intensidade, mas não da direção do estímulo.",
    "Uma semente germinando de lado tende a orientar raiz para baixo e broto para cima, mesmo sem iluminação direcional, em condições adequadas.",
    "A gravidade atua apenas sobre raízes; caules não respondem a ela quando crescem sem luz.",
    "Como classificar crescimento da raiz para baixo em resposta à gravidade?",
    "Identifique a direção do estímulo e da resposta.",
    "É gravitropismo positivo, pois o crescimento se orienta no sentido da aceleração gravitacional.",
    "Raízes e caules podem ter respostas gravitacionais opostas e coordenadas."
   ],
   [
    "Integração hormonal e limites",
    "Auxinas, giberelinas, citocininas, etileno e ácido abscísico participam de processos distintos, com interações complexas. O etileno está relacionado ao amadurecimento de frutos climatéricos; ácido abscísico participa de respostas a estresse hídrico e fechamento estomático em muitos contextos. Não existe um hormônio único para toda resposta vegetal, e concentração, tecido e estágio de desenvolvimento importam.",
    "Frutos climatéricos podem acelerar amadurecimento em presença de etileno, mas nem todos os frutos respondem da mesma forma.",
    "Qualquer hormônio vegetal causa exatamente a mesma resposta em raiz, folha, fruto e semente.",
    "Por que não se pode prever efeito de auxina sem indicar tecido e concentração?",
    "Pense em sensibilidade diferencial.",
    "Porque tecidos e estágios de desenvolvimento possuem sensibilidades distintas, alterando a resposta à mesma molécula.",
    "A sinalização hormonal integra múltiplas condições, não funciona como comando universal de efeito fixo."
   ]
  ],
  "situation": [
   "Uma horta escolar observa mudas inclinadas para a janela, raízes crescendo para baixo e frutos amadurecendo mais rapidamente perto de outros frutos maduros.",
   "Quais respostas e sinais explicam os três fenômenos sem atribuir intenção consciente às plantas?",
   "Fototropismo do caule envolve crescimento diferencial ligado à luz; gravitropismo orienta raízes; etileno pode favorecer amadurecimento de frutos climatéricos. São respostas fisiológicas distintas."
  ],
  "links": [
   [
    "Biologia",
    "Transporte de seiva",
    "O funcionamento dos tecidos vasculares e o transporte de substâncias dão contexto à integração de respostas vegetais."
   ],
   [
    "Biologia",
    "Gimnospermas e angiospermas",
    "Estruturas reprodutivas e frutos ajudam a situar a ação do etileno no desenvolvimento vegetal."
   ]
  ]
 },
 {
  "subject": "Biologia",
  "topic": "Genética de populações",
  "objective": "Calcular frequências alélicas e genotípicas em modelos simples e interpretar condições de Hardy-Weinberg sem confundir equilíbrio com ausência de evolução.",
  "chapters": [
   [
    "Frequências em uma população",
    "Em população diploide, cada indivíduo contribui com dois alelos por locus autossômico. Para genótipos AA, Aa e aa, a frequência de A é p=(2nAA+nAa)/(2N), enquanto q=(2naa+nAa)/(2N), com p+q=1 no caso de dois alelos. Frequência de indivíduos AA não é igual à frequência de alelos A, pois heterozigotos também os carregam.",
    "Em 100 indivíduos com 36 AA, 48 Aa e 16 aa, existem 120 alelos A em 200, então p=0,60 e q=0,40.",
    "Se 36% dos indivíduos são AA, então exatamente 36% de todos os alelos são A.",
    "Em 50 indivíduos com 20 AA, 20 Aa e 10 aa, qual frequência de A?",
    "Conte dois alelos por homozigoto e um por heterozigoto.",
    "p=(2·20+20)/(2·50)=60/100=0,60; heterozigotos entram na contagem.",
    "Frequências genotípicas descrevem pessoas; frequências alélicas descrevem cópias de genes."
   ],
   [
    "Modelo de Hardy-Weinberg",
    "Em modelo ideal de acasalamento aleatório, população muito grande e ausência de seleção, mutação, migração e deriva relevante, as frequências genotípicas esperadas para dois alelos são p², 2pq e q². O modelo serve como referência para testar hipóteses; uma população real pode desviar-se dessas condições por várias causas. Não se deve inferir causalidade específica apenas observando desvio.",
    "Com p=0,7 e q=0,3, esperam-se aproximadamente 49% AA, 42% Aa e 9% aa no modelo idealizado.",
    "A expressão p²+2pq+q² prova que todas as populações reais estão sempre em equilíbrio genético.",
    "Se p=0,8 e q=0,2, qual proporção esperada de heterozigotos?",
    "Use 2pq.",
    "2·0,8·0,2=0,32, ou 32% no equilíbrio ideal.",
    "O resultado é expectativa do modelo, não medição automática de uma população real."
   ],
   [
    "Mudanças evolutivas e amostragem",
    "Seleção natural, deriva genética, fluxo gênico e mutação podem alterar frequências alélicas ao longo de gerações. Em populações pequenas, amostragem aleatória pode produzir mudanças importantes mesmo sem vantagem adaptativa. A seleção atua sobre diferenças de sobrevivência e reprodução em determinado ambiente; não surge porque organismos decidem adquirir alelos necessários.",
    "Em população pequena, alguns indivíduos deixam mais descendentes por acaso, alterando frequências sem que seus alelos sejam necessariamente melhores.",
    "Toda mudança de frequência alélica comprova seleção natural e vantagem adaptativa do alelo que aumentou.",
    "Uma frequência alélica mudou em poucas gerações. Isso identifica seleção como causa única?",
    "Considere deriva, migração e mutação.",
    "Não; deriva genética, fluxo gênico e outras forças também podem modificar frequências, exigindo evidências adicionais.",
    "Evolução populacional é mudança de frequências herdáveis, mas o mecanismo precisa ser investigado."
   ]
  ],
  "situation": [
   "Uma equipe monitora 100 organismos diploides com 36 AA, 48 Aa e 16 aa e deseja comparar a amostra com um modelo de equilíbrio antes de interpretar seleção.",
   "Quais frequências alélicas e genotípicas esperadas devem ser calculadas?",
   "p=(72+48)/200=0,6; q=0,4. Hardy-Weinberg prevê p²=0,36, 2pq=0,48 e q²=0,16; a concordância não prova ausência de todas as forças evolutivas."
  ],
  "links": [
   [
    "Biologia",
    "Primeira lei de Mendel",
    "A segregação dos alelos na reprodução fundamenta o cálculo de frequências genotípicas esperadas."
   ],
   [
    "Biologia",
    "Seleção natural e adaptação",
    "A seleção é um dos mecanismos que podem modificar frequências alélicas entre gerações."
   ]
  ]
 }
];
