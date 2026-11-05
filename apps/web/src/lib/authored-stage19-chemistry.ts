import type {AuthoredLessonSeed} from './authored-lesson-recipe.ts';
export const stage19Chemistry:AuthoredLessonSeed[]=[
  {
    "subject": "Química",
    "topic": "Distribuição eletrônica",
    "objective": "Representar distribuição de elétrons em níveis e subníveis, distinguindo átomo neutro, íon, camada de valência e modelos aproximados.",
    "chapters": [
      [
        "Elétrons e configuração atômica",
        "No modelo quântico escolar, elétrons ocupam orbitais organizados em níveis e subníveis com diferentes energias. A configuração eletrônica de um átomo neutro apresenta Z elétrons; a notação 1s² indica dois elétrons no subnível 1s. O preenchimento de estados deve respeitar limites de ocupação e princípios quânticos, não a ideia de elétrons orbitando em círculos rígidos.",
        "Para o oxigênio neutro, Z=8, uma configuração eletrônica fundamental usual é 1s²2s²2p⁴, com oito elétrons.",
        "O número de elétrons de qualquer átomo é sempre igual à sua massa atômica arredondada.",
        "Escreva a distribuição de um átomo de carbono neutro com Z=6.",
        "Preencha 1s, depois 2s e 2p.",
        "1s²2s²2p² totaliza 2+2+2=6 elétrons, coerente com o número atômico do carbono neutro.",
        "Em átomos neutros, número de elétrons iguala prótons Z; massa inclui também nêutrons e não determina o total eletrônico."
      ],
      [
        "Capacidade de subníveis e ordem energética",
        "Subníveis s, p, d e f comportam, respectivamente, até 2, 6, 10 e 14 elétrons. Para muitos átomos em estado fundamental, a ordem aproximada de preenchimento segue energias relativas, como 4s antes de 3d, mas há exceções e mudanças de ordenação nos íons. Não se deve transformar o diagrama de preenchimento em lei sem condições para todas as espécies.",
        "No átomo neutro de cálcio, uma representação usual é [Ar]4s², somando 20 elétrons.",
        "O subnível p pode acomodar até dez elétrons por ter três orbitais.",
        "Determine quantos elétrons cabem no subnível p completo.",
        "São três orbitais p e dois elétrons por orbital.",
        "O subnível p comporta no máximo 6 elétrons. Cada orbital pode receber dois elétrons com spins opostos.",
        "O subnível d pode comportar dez, mas p comporta seis; misturar capacidades produz configurações impossíveis."
      ],
      [
        "Elétrons de valência e formação de íons",
        "A configuração da região externa ajuda a estudar tendências de ligação e ionização. Para íons, o número eletrônico difere de Z pela carga; Na⁺ possui um elétron a menos que sódio neutro. Metais de transição podem exigir cuidado adicional na ordem de retirada de elétrons. Configuração eletrônica não substitui explicação de estabilidade, energia e condições de formação de compostos.",
        "Sódio neutro tem 11 elétrons; Na⁺ tem 10 e pode ser representado pela configuração de neônio.",
        "Um cátion positivo contém mais elétrons que o átomo neutro correspondente.",
        "Quantos elétrons possui o íon Mg²⁺ se Z=12?",
        "Subtraia dois elétrons da espécie neutra.",
        "O magnésio neutro tem 12 elétrons e Mg²⁺ tem 10, porque perdeu dois elétrons ao formar o cátion.",
        "Carga positiva indica déficit de elétrons em relação aos prótons; não significa adição de partículas negativas."
      ]
    ],
    "situation": [
      "Uma turma desenha o sódio neutro com onze elétrons e depois escreve que Na⁺ deve ter doze, porque o símbolo apresenta um sinal positivo. Outra pessoa discorda.",
      "Quantos elétrons têm o átomo e o cátion, e o que significa o sinal de carga?",
      "Sódio neutro tem 11 elétrons para 11 prótons. Na⁺ tem 10 elétrons: a carga +1 surge da perda de um elétron."
    ],
    "links": [
      [
        "Química",
        "Tabela periódica",
        "Configuração de valência está ligada à organização por grupos e às tendências químicas da tabela."
      ],
      [
        "Química",
        "Ligação iônica",
        "Formação de cátions e ânions depende da diferença entre elétrons e prótons das espécies."
      ]
    ]
  },
  {
    "subject": "Química",
    "topic": "Massa molar",
    "objective": "Calcular massa molar de elementos e compostos, converter entre massa e quantidade de matéria e distinguir mol de massa em gramas.",
    "chapters": [
      [
        "Massa molar não é quantidade de matéria",
        "Massa molar é a massa por quantidade de matéria, geralmente expressa em g/mol. Para substância pura, seu valor numérico em g/mol relaciona-se à massa atômica ou molecular relativa calculada com dados adequados. Mol não é unidade de massa, mas de quantidade de entidades especificadas; é importante indicar se são átomos, moléculas ou unidades fórmula.",
        "A água H₂O tem massa molar aproximada 2×1+16=18 g/mol, usando massas atômicas arredondadas para H e O.",
        "Um mol é sempre igual a um grama de qualquer substância, independentemente de sua fórmula.",
        "Calcule massa molar de CO₂ usando C=12 e O=16 g/mol.",
        "Some uma massa de carbono e duas de oxigênio.",
        "M(CO₂)=12+2×16=44 g/mol. Um mol de moléculas de CO₂ possui massa aproximada de 44 g.",
        "A massa de um mol varia com a composição da substância; a unidade mol representa quantidade de entidades, não 1 g fixo."
      ],
      [
        "Conversão m ↔ n",
        "A relação n=m/M converte massa m para quantidade de matéria n quando a massa molar M da espécie está correta. O resultado precisa trazer unidades compatíveis: gramas divididas por g/mol fornecem mol. A relação não indica quantas moléculas uma amostra possui sem o uso adicional da constante de Avogadro e a especificação das entidades.",
        "Para 36 g de água com M=18 g/mol, a quantidade de matéria é n=36/18=2 mol de H₂O.",
        "Para converter massa em mol, multiplica-se sempre por M, não importa a unidade.",
        "Quantos mol há em 22 g de CO₂ se M=44 g/mol?",
        "Use n=m/M para obter unidades mol.",
        "n=22/44=0,5 mol de CO₂. Metade da massa de um mol corresponde a meio mol da espécie.",
        "Dividir massa por massa molar elimina g e deixa mol; multiplicar m por M produziria unidade incompatível."
      ],
      [
        "Fórmulas e parênteses na composição",
        "Na massa molar de compostos, índices indicam quantidade de átomos ou grupos na unidade fórmula. Parênteses multiplicam todos os átomos do grupo. Fórmulas químicas devem ser interpretadas antes de somar massas, e arredondamentos podem alterar ligeiramente resultados. A massa molar sozinha não informa concentração de solução, que exige volume.",
        "Ca(OH)₂ contém um Ca, dois O e dois H; usando 40, 16 e 1 g/mol, M=40+2×(16+1)=74 g/mol.",
        "No composto Ca(OH)₂, o índice dois multiplica apenas o hidrogênio e não o oxigênio.",
        "Calcule M de Na₂CO₃ com Na=23, C=12 e O=16.",
        "Some duas massas de sódio, uma de carbono e três de oxigênio.",
        "M=2×23+12+3×16=46+12+48=106 g/mol, conforme os índices da fórmula.",
        "O índice após parênteses multiplica todo o grupo; ignorar um dos átomos subestima a massa molar calculada."
      ]
    ],
    "situation": [
      "Um estudante precisa preparar uma quantidade de matéria de 0,5 mol de água para um exercício e afirma que bastam 0,5 g, confundindo a unidade mol com gramas.",
      "Qual massa corresponde a 0,5 mol de H₂O se M≈18 g/mol?",
      "m=nM=0,5×18=9 g. A massa de meio mol é metade da massa molar, não 0,5 g."
    ],
    "links": [
      [
        "Química",
        "Mol e constante de Avogadro",
        "O conceito de mol relaciona quantidade de matéria ao número de entidades químicas especificadas."
      ],
      [
        "Química",
        "Concentração comum e molaridade",
        "Molaridade usa quantidade de matéria em mol por volume de solução, exigindo conversões por massa molar."
      ]
    ]
  },
  {
    "subject": "Química",
    "topic": "Diluição e mistura de soluções",
    "objective": "Aplicar conservação da quantidade de soluto em diluições ideais, diferenciar mistura de soluções e verificar hipóteses de volume.",
    "chapters": [
      [
        "Diluir não cria nem destrói soluto",
        "Na diluição ideal por adição de solvente, a quantidade de soluto se mantém, embora a concentração diminua. Para concentração molar inicial C₁ e volume V₁, a relação C₁V₁=C₂V₂ é válida quando não ocorre reação, perda ou mudança na quantidade do soluto. Os volumes precisam estar na mesma unidade. É uma aproximação escolar que exige cuidado em soluções reais.",
        "Uma solução de 2 mol/L, volume 100 mL, diluída a 200 mL fica com 1 mol/L se o soluto permanece.",
        "Diluir pela metade o volume sempre reduz pela metade a concentração do soluto.",
        "Uma solução 0,5 mol/L de 100 mL é diluída até 250 mL. Calcule C₂.",
        "Use C₂=C₁V₁/V₂.",
        "C₂=0,5×100/250=0,2 mol/L, assumindo soluto conservado e volume final conhecido.",
        "Ao adicionar solvente, o volume cresce e a concentração diminui; reduzir volume por remoção de solvente seria outra operação."
      ],
      [
        "A relação depende da quantidade de soluto",
        "A expressão C₁V₁=C₂V₂ nasce da igualdade entre mol de soluto antes e depois. Ela não deve ser aplicada sem pensar a uma reação química que consome soluto ou à mistura de espécies diferentes. Se concentração é em g/L, fórmula análoga pode funcionar mantendo a mesma grandeza e condições. Mudança de temperatura pode alterar volumes e exigir cuidado.",
        "Se 0,1 mol de soluto permanece em solução e o volume final é 0,5 L, C=0,1/0,5=0,2 mol/L.",
        "A equação de diluição pode ser usada mesmo quando metade do soluto é removida na operação.",
        "Uma amostra possui 0,3 mol de soluto em 1,5 L. Determine sua concentração.",
        "Use concentração como quantidade de matéria por volume.",
        "C=0,3/1,5=0,2 mol/L. A relação vale para a espécie especificada e o volume considerado.",
        "A conservação do soluto é hipótese central; remoção ou reação altera a quantidade e invalida uso direto da igualdade."
      ],
      [
        "Misturar exige balanço das quantidades",
        "Ao misturar soluções do mesmo soluto sem reação e com volumes aproximadamente aditivos, a concentração final pode ser calculada por C_f=(C₁V₁+C₂V₂)/(V₁+V₂). Em soluções concentradas, volumes podem não ser exatamente aditivos; a hipótese deve ser informada. Não basta calcular média aritmética de concentrações quando os volumes são diferentes.",
        "Misturar 100 mL a 1 mol/L com 300 mL a 3 mol/L dá C_f=(1×100+3×300)/400=2,5 mol/L no modelo aditivo.",
        "A concentração de misturas é sempre a média simples das concentrações, sem considerar volumes.",
        "Misture 200 mL de solução 1 mol/L com 100 mL de solução 4 mol/L; calcule C_f.",
        "Some quantidades C×V e divida pelo volume total.",
        "C_f=(1×200+4×100)/300=600/300=2 mol/L, supondo volumes aditivos e mesma espécie.",
        "Quando os volumes diferem, a contribuição de cada solução ao total de soluto difere; a média simples pode ser incorreta."
      ]
    ],
    "situation": [
      "Uma solução hipotética de corante de 3 mol/L ocupa 50 mL. Uma turma adiciona solvente até atingir 150 mL e um aluno afirma que a concentração permanece 3 mol/L.",
      "Qual a nova concentração e o que permaneceu constante durante a diluição?",
      "C₂=3×50/150=1 mol/L. A quantidade de matéria do corante foi conservada enquanto o volume triplicou."
    ],
    "links": [
      [
        "Química",
        "Concentração comum e molaridade",
        "Concentrações em mol/L e g/L fundamentam cálculos de diluição e misturas de soluções."
      ],
      [
        "Matemática",
        "Razões, escalas e proporcionalidade",
        "A concentração varia inversamente ao volume numa diluição ideal que mantém a quantidade de soluto."
      ]
    ]
  },
  {
    "subject": "Química",
    "topic": "Ácidos, bases, sais e óxidos",
    "objective": "Distinguir funções inorgânicas por composição e comportamento em água, reconhecer neutralização e evitar generalizações sobre perigosidade.",
    "chapters": [
      [
        "Ácidos e bases dependem do modelo",
        "Na definição de Arrhenius, ácidos em água aumentam concentração de H⁺ efetivo (na forma hidratada), e bases produzem OH⁻ em solução aquosa por dissociação ou interação adequada. Outros modelos, como Brønsted–Lowry, definem ácidos como doadores de prótons e bases como receptores. É importante declarar o modelo e não equiparar força química a concentração ou corrosividade.",
        "HCl aquoso é tratado como ácido forte no modelo escolar; NaOH aquoso é base forte, mas perigosidade depende também da concentração e exposição.",
        "Todo ácido é obrigatoriamente mais perigoso do que qualquer base, independentemente da concentração.",
        "Explique o comportamento de HCl(aq) no modelo de Arrhenius.",
        "Considere formação de espécies ácidas em água.",
        "HCl em água forma espécies hidratadas de próton e cloreto, elevando acidez; o modelo o classifica como ácido.",
        "Classificar como ácido ou base não fornece, sozinho, nível de perigo; concentração, substância e condições importam."
      ],
      [
        "Sais e neutralização",
        "Sais frequentemente são compostos iônicos constituídos de cátions e ânions, e podem surgir de reações ácido-base. Neutralização em modelo simples pode produzir sal e água, mas nem toda mistura ácido-base termina em pH sete, devido à força das espécies, proporções e equilíbrios. Não realize experiências com reagentes cáusticos fora de laboratório supervisionado.",
        "HCl+NaOH→NaCl+H₂O, em proporção estequiométrica e condições adequadas, é exemplo escolar de neutralização.",
        "Toda neutralização sempre produz solução final exatamente neutra com pH 7.",
        "Indique produtos e verifique proporções reagentes na equação.",
        "Complete HNO₃+KOH→___+H₂O na reação idealizada.",
        "Combine K⁺ e NO₃⁻ no sal.",
        "O sal é KNO₃: HNO₃+KOH→KNO₃+H₂O. A equação está balanceada no modelo.",
        "Resultado final de acidez depende de reagentes e quantidades; neutralizar equivalentes não garante sempre pH exatamente sete."
      ],
      [
        "Óxidos são uma família diversa",
        "Óxidos são compostos binários de oxigênio com outro elemento segundo convenções de nomenclatura, com ressalvas para espécies especiais. CO₂ e CaO diferem em propriedades; alguns óxidos reagem com água formando espécies ácidas ou básicas, mas outros são anfóteros ou praticamente insolúveis. É incorreto afirmar que todos são poluentes ou que todos reagem da mesma forma.",
        "CO₂ pode produzir espécies ácidas em água, enquanto CaO pode formar Ca(OH)₂ por reação com água.",
        "Todo óxido é um gás tóxico que provoca o mesmo efeito em água.",
        "Classifique composição e examine comportamento específico da substância.",
        "Qual fórmula representa óxido de cálcio formado por Ca e O?",
        "Considere Ca²⁺ e O²⁻.",
        "CaO é a proporção mínima neutra entre Ca²⁺ e O²⁻; é um óxido que pode reagir com água formando hidróxido de cálcio.",
        "Óxidos incluem sólidos e gases com comportamentos distintos; a classificação não permite atribuir toxicidade e solubilidade universais."
      ]
    ],
    "situation": [
      "Um estudante lê o rótulo de um produto com ácido fraco diluído e conclui que é necessariamente mais perigoso que uma solução concentrada de base forte, porque ácidos seriam sempre corrosivos e bases inofensivas.",
      "Por que a classe ácido/base não determina sozinha o risco, e que fatores precisam ser considerados?",
      "Perigo depende de substância, concentração, exposição e condições de uso. Bases fortes também podem ser corrosivas; não é seguro generalizar apenas pela função."
    ],
    "links": [
      [
        "Química",
        "Ligação iônica",
        "Muitos sais e hidróxidos envolvem íons cujas cargas determinam fórmulas de compostos."
      ],
      [
        "Química",
        "Reações químicas e balanceamento",
        "Equações de neutralização precisam conservar tipos e quantidades de átomos dos reagentes aos produtos."
      ]
    ]
  }
];
