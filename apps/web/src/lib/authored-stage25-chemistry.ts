import type {TopicSeed} from './authored-stage19-seed.ts';
/** Etapa 25: termoquimica, analise volumetrica, solucoes e corrosao. */
export const stage25Chemistry:TopicSeed[]=[
 {
  "subject": "Química",
  "topic": "Energia de ligação",
  "objective": "Estimar a variação de entalpia por energias médias de ligações, explicitando sinais, unidades e limitações do modelo.",
  "chapters": [
   [
    "Rompimento absorve energia, formação libera",
    "Romper uma ligação química em fase gasosa requer fornecimento de energia; formar a ligação correspondente libera energia. A energia de dissociação de ligação é definida para processos específicos, mas tabelas escolares frequentemente apresentam valores médios de moléculas diferentes. O calor de reação aproximado resulta da diferença entre energia das ligações rompidas e formadas. O sinal importa: romper não libera energia por si só.",
    "Para H₂(g)+Cl₂(g)→2HCl(g), quebram-se uma ligação H–H e uma Cl–Cl; formam-se duas ligações H–Cl.",
    "Quebrar a ligação H–H fornece energia ao ambiente porque os átomos ficam livres para reagir.",
    "Ao romper uma ligação H–H isolada, a etapa exige ou libera energia?",
    "Considere energia necessária para separar os átomos.",
    "Exige absorção de energia; a liberação global só pode ocorrer quando novas ligações se formam e o balanço total é avaliado.",
    "A espontaneidade ou caráter exotérmico da reação não significa que o rompimento individual da ligação seja exotérmico."
   ],
   [
    "Balanço energético aproximado",
    "Uma aproximação usa ΔH≈ΣD(ligações rompidas)−ΣD(ligações formadas), em kJ por mol da reação como escrita. Antes do cálculo, conte quantas ligações de cada tipo são destruídas e construídas segundo a equação balanceada. Se a soma das ligações formadas superar a energia exigida para romper as iniciais, o resultado é negativo. A aproximação funciona melhor para espécies gasosas e não inclui automaticamente mudanças de fase.",
    "Com D(H–H)=436, D(Cl–Cl)=243 e D(H–Cl)=431 kJ/mol, ΔH≈436+243−2×431=−183 kJ para a reação escrita.",
    "Para qualquer reação, basta subtrair uma energia de ligação da outra, sem considerar coeficientes estequiométricos.",
    "Usando esses três valores, qual energia é liberada na formação de dois mols de HCl a partir de H₂ e Cl₂?",
    "Conte as duas ligações H–Cl formadas.",
    "O balanço é 679−862=−183 kJ para a equação H₂+Cl₂→2HCl, aproximadamente exotérmica.",
    "Coeficientes químicos determinam o número de ligações; ignorá-los altera o valor e a interpretação de ΔH."
   ],
   [
    "Energia média e limites de previsão",
    "Ligações com mesma nomenclatura podem ter energias diferentes conforme a molécula e o ambiente eletrônico; tabelas de energias médias não substituem entalpias padrão de formação de substâncias específicas. Reações em solução, mudanças de fase e estruturas não covalentes exigem outras contribuições. O cálculo não fornece diretamente a velocidade de reação nem a energia de ativação, que dependem do mecanismo reacional.",
    "Uma reação pode ter ΔH negativo calculado por energias de ligação e ainda ocorrer lentamente se a barreira cinética for elevada.",
    "Uma entalpia de reação muito negativa garante que o processo aconteça instantaneamente em temperatura ambiente.",
    "O que falta para prever a rapidez de uma reação após calcular ΔH?",
    "Diferencie balanço energético e barreira do percurso.",
    "É necessário estudar mecanismo, energia de ativação e condições cinéticas; ΔH descreve estados inicial e final, não a rapidez.",
    "Termodinâmica informa o balanço energético; cinética investiga caminho e velocidade, duas perguntas diferentes."
   ]
  ],
  "situation": [
   "Uma equipe compara duas rotas gasosas de produção em um modelo didático e possui energias médias de ligação, mas não dados cinéticos. Na rota H₂+Cl₂→2HCl, mede valores tabulados de 436, 243 e 431 kJ/mol.",
   "Qual ΔH aproximado deve calcular e o resultado basta para decidir qual rota terá maior velocidade de reação?",
   "Σ rompidas=436+243=679 kJ; Σ formadas=2×431=862 kJ; ΔH≈−183 kJ por reação escrita. O sinal indica exotermia aproximada, mas sem energia de ativação não se conclui velocidade."
  ],
  "links": [
   [
    "Química",
    "Lei de Hess",
    "A entalpia calculada por ligações pode ser comparada à soma de etapas e entalpias de formação da lei de Hess."
   ],
   [
    "Química",
    "Fatores que alteram a velocidade",
    "A barreira cinética precisa ser diferenciada do balanço de energias de ligação entre reagentes e produtos."
   ]
  ]
 },
 {
  "subject": "Química",
  "topic": "Titulação ácido-base",
  "objective": "Calcular concentrações em titulações por equivalência estequiométrica e distinguir equivalência química, ponto final e pH.",
  "chapters": [
   [
    "Neutralização e proporção em mol",
    "Titulação ácido-base usa uma solução de concentração conhecida, o titulante, para determinar a quantidade de ácido ou base na amostra. No ponto de equivalência, a quantidade adicionada respeita a proporção da equação balanceada; não significa necessariamente volumes iguais. Em reação monoprotica HCl+NaOH→NaCl+H₂O, a razão é 1:1, portanto n(HCl)=n(NaOH) no modelo de reação completa.",
    "Uma amostra de 25,0 mL de HCl neutralizada por 25,0 mL de NaOH 0,100 mol/L contém 0,00250 mol de ácido e concentração 0,100 mol/L.",
    "Um ácido e uma base sempre se neutralizam quando são misturados em volumes iguais, mesmo com concentrações diferentes.",
    "Quantos mols de NaOH há em 20,0 mL de solução 0,200 mol/L?",
    "Converta mililitros em litros e use n=C×V.",
    "n=0,200×0,0200=0,00400 mol de NaOH; a equivalência depende dos mols e da equação química.",
    "Igualdade de volumes não assegura igualdade estequiométrica; concentração e coeficientes devem ser considerados."
   ],
   [
    "Concentração desconhecida e coeficientes",
    "Para ácido e base com razão molar 1:1, pode-se usar C_a V_a=C_b V_b com volumes coerentes. Para H₂SO₄+2NaOH→Na₂SO₄+2H₂O, um mol de ácido requer dois mols de base; nesse caso n(NaOH)=2n(H₂SO₄). A fórmula abreviada sem coeficientes falha em ácidos polipróticos ou outras estequiometrias. Resultados dependem da hipótese de reação completa e composição conhecida da amostra.",
    "Se 10,0 mL de H₂SO₄ são equivalentes a 20,0 mL de NaOH 0,100 mol/L, a amostra contém 0,001 mol de H₂SO₄, portanto 0,100 mol/L.",
    "Qualquer ácido, inclusive H₂SO₄, sempre consome apenas um mol de NaOH por mol de ácido.",
    "Uma amostra de 20 mL de HCl usa 10 mL de NaOH 0,2 mol/L. Qual sua molaridade?",
    "Use a razão 1:1 e converta os volumes.",
    "n(NaOH)=0,010×0,2=0,002 mol; n(HCl)=0,002 mol e C=0,002/0,020=0,10 mol/L.",
    "A razão 1:1 decorre da equação específica HCl+NaOH, não da palavra neutralização por si só."
   ],
   [
    "Equivalência, indicador e curva de pH",
    "O ponto de equivalência é definido por estequiometria; o ponto final é o sinal observado, por exemplo mudança de cor de indicador, que deve ser escolhido próximo do pH esperado na equivalência. Ácido forte com base forte costuma ter pH próximo de sete a 25°C em solução idealizada, mas ácido fraco com base forte pode gerar equivalência básica devido à hidrólise da base conjugada. A curva de titulação e o indicador exigem considerar forças ácido-base, temperatura e faixa de viragem.",
    "Na titulação de ácido acético com NaOH, o acetato formado pode tornar o pH de equivalência maior que sete, mesmo com neutralização estequiométrica.",
    "Toda equivalência ácido-base tem pH exatamente 7, independentemente dos pares químicos presentes.",
    "Em titulação de ácido fraco por base forte, equivalência significa obrigatoriamente pH neutro?",
    "Considere hidrólise da base conjugada formada.",
    "Não. O ânion conjugado de ácido fraco pode gerar OH⁻ e elevar o pH; o indicador deve corresponder à curva observada.",
    "A equivalência mede proporção química de reagentes; pH reflete os equilíbrios das espécies após a reação."
   ]
  ],
  "situation": [
   "Uma equipe de laboratório analisa 20,0 mL de solução aquosa de HCl de concentração desconhecida, consumindo 16,0 mL de NaOH 0,150 mol/L até a equivalência. A solução foi preparada em modelo escolar de neutralização completa.",
   "Qual a concentração de HCl e por que o volume da base não precisa coincidir com o do ácido?",
   "A razão HCl:NaOH é 1:1. n(NaOH)=0,0160×0,150=0,00240 mol; C(HCl)=0,00240/0,0200=0,120 mol/L. Volumes diferem porque as concentrações diferem."
  ],
  "links": [
   [
    "Química",
    "Concentração comum e molaridade",
    "A titulação quantifica quantidade de matéria com a relação entre molaridade, volume e número de mols."
   ],
   [
    "Química",
    "Hidrólise de sais",
    "A hidrólise dos íons produzidos explica por que algumas soluções no ponto de equivalência não têm pH sete."
   ]
  ]
 },
 {
  "subject": "Química",
  "topic": "Propriedades coligativas",
  "objective": "Explicar efeitos de partículas de soluto sobre pressão de vapor, ebulição, congelamento e osmose, com ressalvas para eletrólitos.",
  "chapters": [
   [
    "Número de partículas e pressão de vapor",
    "Propriedades coligativas dependem principalmente da quantidade de partículas dispersas, em modelos de soluções suficientemente diluídas, e não do nome químico isolado do soluto. Adicionar soluto não volátil reduz a fração molar de solvente e, na aproximação ideal, diminui sua pressão de vapor segundo a lei de Raoult. A substância dissolvida pode apresentar outros efeitos específicos, razão pela qual a previsão quantitativa exige as hipóteses do modelo.",
    "Açúcar dissolvido em água pode reduzir sua pressão de vapor em relação à água pura na mesma temperatura, se considerarmos solução ideal diluída.",
    "Qualquer soluto dissolvido aumenta a pressão de vapor, pois a água passa a ter mais partículas para evaporar.",
    "Como tende a variar a pressão de vapor da água ao dissolver pequena quantidade de glicose não volátil?",
    "Pense na fração molar de solvente.",
    "Ela tende a diminuir; na aproximação ideal, a pressão de vapor da água é proporcional à sua fração molar na solução.",
    "Mais partículas de soluto não significam mais moléculas de solvente no vapor; importa a atividade do solvente."
   ],
   [
    "Elevação ebuliométrica e crioscopia",
    "Em soluções diluídas ideais, ΔT_eb≈i K_eb m e ΔT_cong≈i K_cong m, onde m é molalidade e i é fator de van't Hoff aproximado. O ponto de ebulição aumenta e o de congelamento diminui em relação ao solvente puro. Para glicose, i≈1; para NaCl idealmente completamente dissociado, i≈2, mas interações iônicas reais podem afastar o valor efetivo de dois. Molalidade usa massa de solvente em quilogramas, não volume de solução.",
    "Em mesma molalidade diluída, solução ideal de NaCl produz aproximadamente o dobro da depressão crioscópica de glicose, se i for 2 e 1, respectivamente.",
    "Soluções com a mesma massa de soluto em gramas produzem sempre a mesma mudança de temperatura de congelamento.",
    "Na aproximação ideal, qual ΔT_cong de glicose 0,50 mol/kg em água, com K_cong=1,86 °C kg/mol?",
    "Use i=1 para soluto não dissociado.",
    "ΔT_cong=1×1,86×0,50=0,93 °C; o congelamento previsto fica perto de −0,93 °C sob as hipóteses.",
    "Massa molar e dissociação modificam o número de partículas: gramas iguais não asseguram molalidade igual."
   ],
   [
    "Pressão osmótica e membrana semipermeável",
    "Osmose é o movimento líquido de solvente através de membrana permeável ao solvente, mas restritiva a certos solutos. Para soluções diluídas ideais pode-se estimar pressão osmótica por Π≈iMRT, com molaridade M, temperatura absoluta T e constante R coerente. Essa relação descreve condições idealizadas: células reais também transportam íons e regulam volume. Hipotônico e hipertônico são comparações relativas à permeabilidade e às espécies consideradas.",
    "Uma célula animal colocada em meio efetivamente hipotônico pode receber fluxo líquido de água, mas sua resposta depende de membrana e mecanismos regulatórios.",
    "Osmose é transporte ativo de partículas de soluto no sentido da menor concentração por gasto obrigatório de ATP.",
    "Qual tendência de fluxo de água entre dois compartimentos separados por membrana permeável à água e não à glicose, com glicose mais concentrada no lado B?",
    "Compare potenciais químicos do solvente.",
    "Há tendência de fluxo líquido de água de A para B, até atingir condição de equilíbrio definida também por pressão hidrostática.",
    "O solvente responde à diferença de potencial químico; não é transporte ativo de glicose entre compartimentos."
   ]
  ],
  "situation": [
   "Uma cooperativa compara sal e açúcar para explicar por que soluções distintas podem congelar abaixo de 0°C. O modelo usa concentrações molais iguais e considera dissolução ideal diluída.",
   "Qual solução tende a baixar mais o ponto de congelamento e qual limitação impede tratar a previsão como exata?",
   "Com dissociação ideal, NaCl fornece cerca de duas partículas por fórmula e açúcar uma por molécula: a solução salina tende a causar maior depressão. O fator i real varia com concentrações e interações iônicas."
  ],
  "links": [
   [
    "Química",
    "Solubilidade e curvas de solubilidade",
    "Ambos os temas tratam de soluções, mas distinguir quantidade dissolvida e efeitos sobre propriedades do solvente evita confusões."
   ],
   [
    "Química",
    "Produto de solubilidade",
    "A comparação evidencia que equilíbrio de precipitação e propriedades coligativas descrevem fenômenos distintos em soluções."
   ]
  ]
 },
 {
  "subject": "Química",
  "topic": "Corrosão",
  "objective": "Interpretar a corrosão como processo eletroquímico, reconhecendo ânodo, cátodo, eletrólito e estratégias de proteção do ferro.",
  "chapters": [
   [
    "Oxidação do metal e redução em regiões distintas",
    "A corrosão eletroquímica pode envolver regiões anódicas e catódicas na superfície metálica em contato com um eletrólito. No ânodo, ferro metálico pode ser oxidado: Fe→Fe²⁺+2e⁻. Em presença de oxigênio dissolvido e água, uma reação catódica possível é O₂+2H₂O+4e⁻→4OH⁻, em meio neutro ou alcalino. Ferrugem é mistura complexa de produtos hidratados, não simplesmente ferro que desapareceu por evaporação.",
    "Uma grade de ferro exposta à chuva e ao oxigênio pode sofrer oxidação em pontos anódicos enquanto oxigênio se reduz em outras regiões.",
    "A ferrugem se forma porque o ferro perde água, mas mantém o mesmo número de oxidação em todos os átomos.",
    "Em qual região ocorre Fe→Fe²⁺+2e⁻ durante corrosão eletroquímica?",
    "Localize a perda de elétrons.",
    "No ânodo, onde ocorre oxidação do ferro; os elétrons podem alimentar a redução em outra região da superfície.",
    "Oxidação é perda de elétrons e não depende do nome do dispositivo: ânodo é o local de oxidação."
   ],
   [
    "Umidade, eletrólitos e aceleração",
    "Água funciona como meio de transporte de íons; oxigênio pode ser reagente catódico e sais dissolvidos frequentemente aumentam condutividade e favorecem corrosão em determinadas condições. Porém taxa também depende de pH, composição do metal, temperatura, área exposta e camada protetora. Comparar apenas duas peças sem controlar essas variáveis não permite atribuir toda a diferença à presença de sal.",
    "Um prego exposto a solução salina aerada pode apresentar corrosão mais intensa que outro em água pouco condutora, se as demais condições forem próximas.",
    "Todo metal mergulhado em água salobra necessariamente se corrói na mesma velocidade, independentemente de liga, temperatura e oxigênio.",
    "Por que uma película de água com íons pode facilitar uma célula corrosiva?",
    "Pense no fechamento do circuito por transporte de cargas.",
    "A solução permite transporte iônico entre áreas anódicas e catódicas, sustentando o processo eletroquímico quando há reações disponíveis.",
    "Sal não é explicação única para ferrugem; condições químicas e características da superfície precisam ser avaliadas."
   ],
   [
    "Proteção por barreira e ânodo de sacrifício",
    "Tinta e revestimentos podem atuar como barreira à água e ao oxigênio, desde que permaneçam íntegros. Na proteção sacrificial, um metal mais facilmente oxidável, como zinco em condições apropriadas, se oxida preferencialmente e protege o ferro, inclusive em regiões pequenas expostas. A galvanização também pode oferecer barreira física. Aços inoxidáveis usam passivação por películas ricas em óxidos protetores, que não garantem imunidade absoluta em todos os meios.",
    "Numa peça de ferro ligada eletricamente a zinco em eletrólito adequado, o zinco tende a atuar como ânodo sacrificial e corroer primeiro.",
    "O zinco protege o ferro porque nunca sofre oxidação e permanece quimicamente inalterado durante o uso.",
    "Por que um revestimento de zinco pode proteger uma área pequena de ferro exposta?",
    "Compare a tendência à oxidação dos metais.",
    "Com contato elétrico e eletrólito, o zinco pode funcionar como ânodo sacrificial e oxidar preferencialmente, reduzindo a oxidação do ferro.",
    "O metal de proteção é consumido em proteção sacrificial; o sistema requer condições para formar a célula galvânica."
   ]
  ],
  "situation": [
   "Uma ponte metálica próxima ao litoral apresenta pontos sem pintura e contato frequente com umidade e aerossóis salinos. A equipe considera repintura, inspeção e uso de revestimento de zinco.",
   "Como explicar o risco de corrosão e a diferença entre barreira física e proteção sacrificial?",
   "Água com íons e oxigênio favorece reações eletroquímicas do ferro. A pintura impede contato do metal com o meio quando íntegra; o zinco pode oxidar antes do ferro como ânodo sacrificial em condições adequadas."
  ],
  "links": [
   [
    "Química",
    "Oxidação e redução",
    "A corrosão exige identificar transferência de elétrons e semirreações anódicas e catódicas."
   ],
   [
    "Química",
    "Pilhas e baterias",
    "A separação de oxidação e redução em regiões conectadas lembra o funcionamento das células galvânicas."
   ]
  ]
 }
];
