import type {TopicSeed} from './authored-stage19-seed.ts';
/** Etapa 26: mecanica de fluidos, eletromagnetismo e analise dimensional. */
export const stage26Physics:TopicSeed[]=[
 {
  "subject": "Física",
  "topic": "Vazão e continuidade",
  "objective": "Calcular vazão volumétrica e velocidade média em escoamento estacionário, distinguindo conservação de massa de pressão do fluido.",
  "chapters": [
   [
    "Vazão é volume transportado por tempo",
    "Vazão volumétrica Q é o volume de fluido que atravessa uma seção por intervalo de tempo: Q=ΔV/Δt. No Sistema Internacional, mede-se em m³/s, mas litros por minuto são frequentes no cotidiano; 1 litro equivale a 10⁻³ m³. Para escoamento uniforme em uma seção, Q=A·v, com área perpendicular à velocidade média. É preciso usar unidades compatíveis e não confundir vazão com velocidade, pois seções de áreas diferentes podem transportar o mesmo volume por segundo.",
    "Uma torneira que enche 12 L em 30 s tem vazão de 0,4 L/s, equivalente a 4×10⁻⁴ m³/s, enquanto a velocidade depende da área do jato.",
    "Duas tubulações com vazão igual precisam ter velocidade igual, mesmo que seus diâmetros sejam muito diferentes.",
    "Uma mangueira transfere 18 litros de água em 60 segundos. Qual a vazão em L/s?",
    "Divida volume pelo intervalo de tempo em segundos.",
    "Q=18/60=0,30 L/s, correspondente a 3×10⁻⁴ m³/s, após converter litro em metro cúbico.",
    "Vazão informa quanto volume passa por tempo; sem área da seção não é possível inferir a velocidade média."
   ],
   [
    "Equação da continuidade e conservação de massa",
    "Em escoamento estacionário de fluido incompressível, sem entradas ou saídas laterais, a vazão permanece constante ao longo do tubo: A₁v₁=A₂v₂. Assim, reduzir a área pela metade dobra a velocidade média idealizada, não a quantidade de água que atravessa a seção por segundo. Para fluidos compressíveis, a forma mais geral envolve densidade: ρ₁A₁v₁=ρ₂A₂v₂. A área de seção circular depende do quadrado do raio; reduzir diâmetro à metade diminui a área a um quarto.",
    "Se uma tubulação passa de 4 cm² para 2 cm² e a água entra a 1,5 m/s, a velocidade ideal na seção estreita é 3 m/s.",
    "Quando um tubo estreita, a vazão necessariamente aumenta, pois o líquido passa mais rapidamente no trecho fino.",
    "Água escoa a 2 m/s em seção de 6 cm²; qual velocidade em seção de 3 cm² sem ramificações?",
    "Iguale os produtos área vezes velocidade.",
    "6×2=3×v₂; logo v₂=4 m/s, mantendo vazão constante no modelo incompressível e estacionário.",
    "A velocidade muda ao variar a seção, mas a conservação de massa impede criar vazão extra dentro da tubulação."
   ],
   [
    "Pressão, perdas e limites de Bernoulli",
    "A conservação da massa não determina sozinha a pressão. Para fluido ideal, incompressível e em escoamento estacionário ao longo de uma linha de corrente, a relação de Bernoulli pode ser escrita p+ρv²/2+ρgz=constante. Em tubos reais, viscosidade, curvas e atrito causam perdas; bombas adicionam energia ao fluido. Uma redução de seção pode elevar a velocidade, mas não autoriza prever numericamente a pressão sem conhecer alturas, perdas e demais condições.",
    "Em tubo horizontal ideal, uma seção de maior velocidade tende a ter menor pressão estática, mas uma bomba ou perdas reais podem alterar o balanço energético.",
    "Pela continuidade, toda região de maior velocidade possui sempre pressão zero, independentemente da altura ou das perdas.",
    "É possível calcular a pressão na seção estreita conhecendo apenas duas áreas e a vazão?",
    "Continuidade fornece velocidade, não energia disponível.",
    "Não. É preciso informação adicional como pressão de referência, altura, densidade e condições para aplicar balanço energético com perdas ou bombas.",
    "A continuidade é uma lei de conservação de massa; ela não substitui uma equação de energia ou uma medição de pressão."
   ]
  ],
  "situation": [
   "Uma oficina reduz de 4 cm² para 2 cm² a seção de uma tubulação horizontal com água e mede velocidade média inicial de 1,5 m/s. Um funcionário afirma que a alteração dobrou o consumo de água.",
   "Qual velocidade é prevista na seção fina e por que o consumo volumétrico por segundo não dobra no modelo sem vazamentos?",
   "Pela continuidade, A₁v₁=A₂v₂, então v₂=(4×1,5)/2=3 m/s. A vazão permanece 6 cm²·m/s nas unidades usadas; apenas a velocidade aumenta onde a seção é menor."
  ],
  "links": [
   [
    "Biologia",
    "Sistema cardiovascular",
    "O fluxo sanguíneo também depende da área dos vasos, embora circulação real seja pulsátil e exija modelos específicos."
   ],
   [
    "Física",
    "Princípio de Pascal",
    "A comparação separa transmissão de variações de pressão em fluido estático e continuidade em fluido em movimento."
   ]
  ]
 },
 {
  "subject": "Física",
  "topic": "Capacitores",
  "objective": "Relacionar carga elétrica, diferença de potencial, capacitância, associações e energia armazenada sem confundir capacitor com bateria.",
  "chapters": [
   [
    "Capacitância e diferença de potencial",
    "Um capacitor armazena cargas de sinais opostos em condutores separados por material isolante ou espaço, criando campo elétrico. No modelo linear, a capacitância C=Q/ΔV usa o módulo Q da carga em uma das armaduras e a diferença de potencial entre elas. A unidade é farad, F=C/V, e microfarad significa 10⁻⁶ F. A capacitância depende sobretudo de geometria e dielétrico, não da carga momentânea aplicada dentro do regime de operação.",
    "Um capacitor de 20 µF ligado a 5 V idealmente apresenta Q=CV=100 µC em cada armadura, com sinais opostos.",
    "A capacitância aumenta automaticamente quando se coloca mais carga, mesmo sem alterar dielétrico ou geometria.",
    "Qual o módulo de carga em capacitor ideal de 10 µF submetido a 12 V?",
    "Converta microfarad e multiplique C por ΔV.",
    "Q=10×10⁻⁶×12=120×10⁻⁶ C, ou 120 µC de módulo em cada armadura.",
    "C é a relação característica entre carga e tensão; as armaduras possuem cargas opostas e não duas cargas positivas."
   ],
   [
    "Associação em série e paralelo",
    "Capacitores ideais em paralelo estão submetidos à mesma diferença de potencial, e suas capacitâncias se somam: C_eq=ΣC_i. Em série, cada elemento apresenta mesmo módulo de carga no arranjo ideal, enquanto as diferenças de potencial se somam; assim 1/C_eq=Σ1/C_i. A capacitância equivalente em série de valores positivos é menor que a menor capacitância individual. É necessário verificar tensão máxima admissível em cada componente.",
    "Dois capacitores ideais de 6 µF ligados em série resultam em 3 µF; em paralelo, resultam em 12 µF.",
    "Em série, capacitâncias são somadas diretamente porque o mesmo módulo de carga passa a existir em ambos.",
    "Qual C equivalente para capacitores de 4 µF e 12 µF em série?",
    "Some os inversos ou use C_eq=C₁C₂/(C₁+C₂).",
    "C_eq=4×12/(4+12)=3 µF; em paralelo o equivalente seria 16 µF.",
    "A regra de associação de capacitores difere da associação de resistores e deve ser deduzida de carga e tensão."
   ],
   [
    "Energia elétrica, dielétrico e segurança",
    "O trabalho armazenado no campo de um capacitor linear ideal carregado a tensão V é E=CV²/2=Q²/(2C). Dobrar a tensão com C constante multiplica a energia por quatro. O dielétrico influencia capacitância e tensão de ruptura; ultrapassar a especificação pode causar falha. Um capacitor desconectado pode continuar carregado e exigir procedimento seguro de descarga por profissional habilitado, sobretudo em circuitos de alta tensão.",
    "Para C=10 µF e V=10 V, E=(10×10⁻⁶×100)/2=5×10⁻⁴ J, equivalente a 0,5 mJ.",
    "Desligar um equipamento garante que todos os capacitores imediatamente tenham zero de energia e possam ser tocados.",
    "Qual a energia de capacitor ideal de 20 µF carregado até 10 V?",
    "Use E=CV²/2 com farad e volt.",
    "E=20×10⁻⁶×100/2=0,001 J, ou 1 mJ, sem considerar perdas ou limites de componentes reais.",
    "A energia armazenada depende da tensão ao quadrado; desconexão da fonte não significa descarga imediata."
   ]
  ],
  "situation": [
   "Um laboratório didático compara um capacitor ideal de 100 µF e uma pilha, ambos conectados a circuitos de teste, e observa que a carga do capacitor se altera rapidamente ao mudar a tensão aplicada.",
   "Se o capacitor estiver a 5 V, qual carga ideal nas armaduras e por que ele não substitui diretamente uma pilha de mesma tensão?",
   "Q=100×10⁻⁶×5=5×10⁻⁴ C=500 µC. O capacitor armazena energia em campo elétrico e sua tensão varia durante a descarga; uma pilha envolve reações químicas e comportamento diferente."
  ],
  "links": [
   [
    "Física",
    "Lei de Coulomb",
    "A separação de cargas produz interações elétricas e campo, conceitos necessários para interpretar o capacitor."
   ],
   [
    "Química",
    "Pilhas e baterias",
    "A comparação distingue armazenamento eletrostático em capacitores e conversão eletroquímica de energia nas pilhas."
   ]
  ]
 },
 {
  "subject": "Física",
  "topic": "Campo magnético",
  "objective": "Representar campo magnético, calcular seu módulo em fios retilíneos ideais e analisar força magnética sobre cargas móveis.",
  "chapters": [
   [
    "Campo magnético e linhas de orientação",
    "Campo magnético é uma grandeza vetorial B, medida em tesla (T), associada a ímãs, correntes elétricas e campos elétricos variáveis. Linhas de campo são representação geométrica da direção e do sentido do vetor: fora de um ímã de barra, costumam ser desenhadas do polo norte ao sul, fechando o circuito dentro do material. As linhas não são fios nem trajetórias obrigatórias de partículas; a ação do campo depende da carga e da velocidade.",
    "Perto de ímã de barra, uma bússola ideal tende a alinhar-se à direção local do campo, embora campos externos também possam influenciar a agulha.",
    "As linhas de campo magnético são caminhos materiais por onde partículas eletrizadas devem necessariamente se deslocar.",
    "No exterior de um ímã de barra, como são orientadas as linhas de campo convencionais?",
    "Use a convenção externa de polos norte e sul.",
    "No exterior do ímã, as linhas são representadas saindo do polo norte e entrando no polo sul, formando circuitos fechados.",
    "Linha desenhada representa orientação vetorial; sua forma não prova movimento de carga nessa trajetória."
   ],
   [
    "Campo produzido por fio longo",
    "Para um fio retilíneo muito longo conduzindo corrente I, no vácuo e a distância r do fio, o módulo do campo é B=µ₀I/(2πr). A regra da mão direita fornece sentido circular em torno do fio: polegar acompanha a corrente convencional e dedos indicam orientação do campo. Se I dobra mantendo r, B dobra; se r dobra mantendo I, B cai à metade. Em fios finitos ou materiais magnéticos próximos, esse modelo é somente uma aproximação.",
    "Em dois pontos igualmente afastados de fio longo ideal, o módulo de B é igual, embora a direção vetorial varie em torno do condutor.",
    "O campo de fio retilíneo diminui com o quadrado da distância, exatamente como força elétrica entre cargas pontuais.",
    "Se a distância ao fio dobra e a corrente permanece a mesma, como varia o módulo de B?",
    "Identifique a dependência inversa de r.",
    "Pela expressão B=µ₀I/(2πr), dobrar r reduz o campo para metade, dentro das hipóteses do fio retilíneo longo.",
    "Essa dependência é 1/r e não 1/r²; geometrias diferentes produzem expressões de campo diferentes."
   ],
   [
    "Força sobre carga móvel e direção",
    "Uma carga q com velocidade v em campo B sofre força magnética F=q(v×B), cujo módulo é |q|vBsenθ. Se velocidade for paralela ao campo, a força magnética é zero; se perpendicular, o módulo é máximo. A força magnética instantânea é perpendicular à velocidade, portanto não altera diretamente a energia cinética no modelo de campo magnético puro. O sentido se inverte ao trocar o sinal da carga.",
    "Uma carga positiva movendo-se perpendicularmente ao campo pode descrever arco curvo, porque a força magnética muda a direção da velocidade.",
    "Campo magnético necessariamente acelera partículas aumentando o módulo da velocidade, independentemente de orientação.",
    "Uma carga de módulo 2 µC move-se a 1.000 m/s perpendicularmente a B=0,10 T. Qual o módulo da força?",
    "Use sen90°=1 e converta microcoulomb.",
    "F=2×10⁻⁶×1000×0,10=2×10⁻⁴ N; o resultado é módulo, sem especificar sentido vetorial.",
    "Força perpendicular à velocidade curva o movimento; aumento da rapidez depende de outras forças, não do campo magnético puro."
   ]
  ],
  "situation": [
   "Um experimento em simulador mostra carga elétrica positiva movendo-se paralela a um campo uniforme e, depois, perpendicularmente ao mesmo campo, com velocidade de módulo constante.",
   "Em qual orientação aparece força magnética e o que ela muda no movimento?",
   "F=|q|vBsenθ: no caso paralelo θ=0, a força é zero; no perpendicular θ=90°, é máxima. A força altera direção da velocidade, não sua rapidez em um campo magnético puro."
  ],
  "links": [
   [
    "Física",
    "Força centrípeta",
    "Uma força magnética perpendicular à velocidade pode fornecer a resultante centrípeta em trajetórias circulares."
   ],
   [
    "Física",
    "Indução e leis de Faraday e Lenz",
    "Mudanças de fluxo magnético relacionam campos e correntes induzidas em circuitos, ampliando o estudo de B."
   ]
  ]
 },
 {
  "subject": "Física",
  "topic": "Teorema de Stevin",
  "objective": "Determinar variação de pressão hidrostática com profundidade, densidade e gravidade, distinguindo pressão absoluta e manométrica.",
  "chapters": [
   [
    "Pressão em líquido em repouso",
    "Em líquido homogêneo e incompressível em repouso sob campo gravitacional aproximadamente uniforme, a pressão aumenta com a profundidade h: p=p_superfície+ρgh. A parcela ρgh é pressão manométrica relativa à superfície, enquanto p pode representar pressão absoluta se p_superfície for absoluta. Profundidade deve ser vertical e a densidade usada em kg/m³ para obter pascal, não em gramas por litro sem conversão.",
    "Na água com ρ=1000 kg/m³ e g≈10 m/s², a 2 m de profundidade a elevação de pressão é 20.000 Pa em relação à superfície.",
    "A pressão dentro da água depende apenas da distância percorrida ao longo de um tubo inclinado até o ponto medido.",
    "Qual pressão manométrica aproximada a 3 m de profundidade em água com g=10 m/s²?",
    "Multiplique densidade, gravidade e profundidade vertical.",
    "Δp=1000×10×3=30.000 Pa; trata-se da parcela hidrostática, não da pressão absoluta total.",
    "A pressão absoluta ainda inclui a pressão exercida sobre a superfície do líquido, geralmente atmosférica."
   ],
   [
    "Mesma profundidade e formato do recipiente",
    "Em um mesmo líquido homogêneo conectado e em repouso, pontos na mesma cota horizontal possuem mesma pressão, desprezadas tensões capilares relevantes. A pressão hidrostática a uma profundidade dada independe do formato do recipiente ou da área da superfície; a força total no fundo, porém, depende da pressão local e da área do fundo. A distinção impede confundir pressão, força e quantidade total de líquido armazenado.",
    "Uma vasilha estreita e outra larga com água à mesma altura acima de seus fundos produzem igual pressão hidrostática no fundo, mas podem ter forças totais diferentes.",
    "Um recipiente largo sempre tem maior pressão hidrostática no fundo do que um estreito com a mesma altura de água.",
    "Dois recipientes têm a mesma altura h de água, mas áreas de fundo distintas. Como se comparam as pressões no fundo?",
    "Use Δp=ρgh sem incluir a área.",
    "As pressões manométricas são iguais se h, ρ e g forem iguais; forças podem diferir porque F=pA.",
    "A área afeta força resultante sobre uma superfície, mas não integra a fórmula de pressão por profundidade."
   ],
   [
    "Camadas de líquidos e limites de aplicação",
    "Com camadas imiscíveis de densidades diferentes em repouso, a variação total de pressão é soma das parcelas de cada camada: Δp=gΣρᵢhᵢ. A densidade deve corresponder a cada líquido; usar a densidade da água para uma camada de óleo cria erro. O teorema de Stevin modela fluidos em equilíbrio, não substitui equações de escoamento com velocidades, perdas e bombas. Pressões em represas dependem da profundidade, justificando medidas estruturais cuidadosas.",
    "Em duas camadas com 1 m de óleo ρ=800 kg/m³ sobre 2 m de água ρ=1000 kg/m³, Δp≈10(800×1+1000×2)=28.000 Pa.",
    "Em líquidos em camadas, basta somar as alturas e multiplicar pela densidade do líquido que está na superfície.",
    "Qual Δp abaixo de 1 m de óleo e 1 m de água, com g=10, densidades 800 e 1000 kg/m³?",
    "Some separadamente as contribuições hidrostáticas.",
    "Δp=10×800×1+10×1000×1=18.000 Pa em relação à superfície, nas hipóteses de repouso.",
    "É necessário calcular cada contribuição ρgh porque as duas camadas possuem densidades distintas."
   ]
  ],
  "situation": [
   "Um reservatório tem 1,0 m de óleo de densidade 800 kg/m³ sobre 2,0 m de água de densidade 1000 kg/m³, ambos em repouso e com g aproximado de 10 m/s².",
   "Quanto a pressão aumenta da superfície do óleo até o fundo e por que não se pode usar uma única densidade?",
   "A elevação é ρ_óleo g h_óleo+ρ_água g h_água=800×10×1+1000×10×2=28.000 Pa. Densidades diferentes exigem somar as contribuições de cada camada."
  ],
  "links": [
   [
    "Física",
    "Princípio de Pascal",
    "Ambas as leis discutem pressão em fluidos em equilíbrio, porém Stevin descreve sua variação vertical."
   ],
   [
    "Física",
    "Princípio de Arquimedes",
    "O gradiente de pressão hidrostática é fundamento para entender o empuxo resultante sobre corpos submersos."
   ]
  ]
 }
];
