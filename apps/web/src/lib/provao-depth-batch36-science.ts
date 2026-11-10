import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Original Kognos editorial material; non-official, without teacher certification. */
export const provaoDepthBatch36Science:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Estabilização de átomos iguais ou diferentes pela formação de ligação química e a Teoria do Octeto",
    "objective": "Relacionar configurações de valência e formação de ligações iônicas e covalentes, interpretar corretamente a regra do octeto e reconhecer limitações e exceções mediante estrutura de Lewis e conservação de carga.",
    "prerequisites": [
      "Elétrons de valência, número atômico e Tabela Periódica",
      "Íons e cargas elétricas",
      "Representação simbólica de átomos e moléculas"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Elétrons de valência e sentido limitado do octeto",
        "explanation": "Átomos podem participar de ligações químicas porque determinados arranjos eletrônicos em conjunto são energeticamente favorecidos em condições específicas. A chamada regra do octeto é uma heurística escolar útil para representar muitas substâncias simples dos elementos representativos, mas não é uma lei universal nem implica que átomos 'desejem' adquirir oito elétrons. O sódio, do grupo 1, possui um elétron de valência e frequentemente forma Na⁺ em compostos iônicos, enquanto o cloro, com sete elétrons de valência, frequentemente forma Cl⁻. Transferência eletrônica é um modelo adequado para a formação de íons; num cristal de NaCl, há uma rede de cátions e ânions mantida por atrações eletrostáticas, não moléculas independentes NaCl com ligação exclusivamente localizada entre dois átomos. O número total de elétrons é conservado durante a formação desses íons, e o cristal se estabiliza por um conjunto de interações cuja descrição exige considerar energia de rede e demais etapas energéticas. A valência não equivale ao número total de elétrons do átomo. Um elemento do segundo período como o neônio pode apresentar oito elétrons na camada externa e baixa reatividade em muitas condições, mas isso não autoriza tratar a regra como causa exclusiva de todas as ligações.",
        "example": "Para representar NaCl, tome Na com 11 elétrons e Cl com 17. O modelo forma Na⁺, que fica com 10 elétrons, e Cl⁻, que fica com 18. A carga total +1+(−1)=0. Em seguida, represente a rede iônica, não uma única molécula isolada. A contagem verifica carga e elétrons sem afirmar que todo composto se forma por transferência completa.",
        "pitfall": "Não confunda octeto com estabilidade absoluta nem imagine que toda substância iônica seja constituída de moléculas diatômicas independentes.",
        "steps": [
          "Defina as grandezas, espécies ou processos e explicite condições de validade.",
          "Aplique as relações do capítulo a um exemplo numérico ou conceitual concreto.",
          "Confira a inferência, compare alternativas e identifique o erro frequente."
        ]
      },
      {
        "level": "intermediate",
        "title": "Compartilhamento de pares e estruturas de Lewis",
        "explanation": "Ligações covalentes podem ser representadas como compartilhamento de pares de elétrons entre núcleos. Na molécula H₂, cada hidrogênio contribui com um elétron e o par compartilhado permite representar uma camada semelhante ao dueto de hélio, não ao octeto. Em H₂O, o oxigênio possui seis elétrons de valência e os hidrogênios têm um cada: são oito elétrons de valência no total. Desenham-se duas ligações O–H, que envolvem quatro elétrons compartilhados, e dois pares não ligantes sobre oxigênio, completando os oito. O formato angular da molécula decorre também da disposição eletrônica e não pode ser inferido apenas da contagem octeto. Em CO₂, a representação escolar O=C=O contém duas ligações duplas e pares não ligantes, respeitando os elétrons de valência e a neutralidade formal. Na construção, some elétrons antes, escolha uma estrutura conectiva plausível, distribua pares e verifique cargas formais; um desenho que dá oito elétrons a todos, mas não conserva o total disponível, é inválido. A representação de Lewis é útil, mas não descreve integralmente orbitais, ressonância, polarização ou energia molecular.",
        "example": "Para H₂O, some 6 elétrons do O e 1 de cada H: 8. Use dois pares nas ligações O–H (4 elétrons) e dois pares isolados no O (4). Confirme que O está associado a oito elétrons na representação e cada H a dois. O total continua 8, e a molécula permanece neutra.",
        "pitfall": "Não some os elétrons compartilhados duas vezes ao contar o total da molécula; a mesma ligação participa da vizinhança eletrônica dos dois átomos.",
        "steps": [
          "Defina as grandezas, espécies ou processos e explicite condições de validade.",
          "Aplique as relações do capítulo a um exemplo numérico ou conceitual concreto.",
          "Confira a inferência, compare alternativas e identifique o erro frequente."
        ]
      },
      {
        "level": "advanced",
        "title": "Exceções, cargas formais e avaliação de modelos",
        "explanation": "A regra do octeto apresenta exceções importantes. BF₃ é representado, em um modelo escolar comum, com boro ligado a três flúors e seis elétrons associados ao boro; sua deficiência eletrônica ajuda a explicar comportamentos como atuação de ácido de Lewis. Compostos com número ímpar de elétrons, como NO, não permitem octetos completos em todos os centros numa estrutura simples; espécies como PCl₅ e SF₆ são frequentemente representadas em livros por arranjos com mais de oito elétrons ao redor do átomo central, embora a descrição moderna da ligação exija cautela com a interpretação literal de orbitais d e 'expansão'. Uma estrutura de Lewis deve minimizar, quando apropriado, cargas formais sem violar a contagem eletrônica. Carga formal é uma ferramenta de contabilidade dos elétrons de valência, não medição direta da carga real sobre o átomo. Por exemplo, em NH₄⁺, o N forma quatro ligações simples com H e a espécie total possui carga +1: não há obrigação de que a fórmula seja neutra porque um átomo central completou octeto. A escolha entre modelos iônico, covalente e de ligação com delocalização deve apoiar-se nas espécies estudadas, não num slogan de estabilidade.",
        "example": "Em BF₃, some 3 elétrons de B e 3×7 de F: 24. Três ligações B–F usam 6 elétrons e os pares isolados dos três flúors usam 18, perfazendo 24. O boro fica representado com seis elétrons, mostrando uma exceção ao octeto. Não adicione pares extras que ultrapassem o total disponível.",
        "pitfall": "Não rejeite BF₃ como 'impossível' só porque boro não completa oito elétrons na estrutura simples; a regra é heurística, não critério universal de existência.",
        "steps": [
          "Defina as grandezas, espécies ou processos e explicite condições de validade.",
          "Aplique as relações do capítulo a um exemplo numérico ou conceitual concreto.",
          "Confira a inferência, compare alternativas e identifique o erro frequente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "No sólido NaCl, a descrição mais adequada é:",
        "options": [
          "Moléculas isoladas NaCl distribuídas sem interações",
          "Rede de íons Na⁺ e Cl⁻ atraídos eletrostaticamente",
          "Átomos de Na e Cl unidos exclusivamente por ligação metálica",
          "Uma molécula Cl₂ incorporada ao sódio"
        ],
        "correctIndex": 1,
        "hint": "Compare os conceitos da etapa com o exemplo resolvido e suas condições de validade.",
        "solution": "NaCl sólido forma uma rede iônica: o sódio aparece como cátion e o cloro como ânion. A fórmula expressa proporção 1:1 e neutralidade de carga; não designa necessariamente uma molécula isolada."
      },
      {
        "level": "intermediate",
        "prompt": "Quantos elétrons de valência devem ser distribuídos na estrutura de Lewis neutra de H₂O?",
        "options": [
          "6",
          "10",
          "8",
          "12"
        ],
        "correctIndex": 2,
        "hint": "Compare os conceitos da etapa com o exemplo resolvido e suas condições de validade.",
        "solution": "O oxigênio contribui com seis elétrons de valência e os dois hidrogênios com um cada: 6+1+1=8. Eles se distribuem entre duas ligações O–H e dois pares não ligantes no oxigênio."
      },
      {
        "level": "advanced",
        "prompt": "Qual espécie exemplifica exceção ao octeto por apresentar boro com seis elétrons em estrutura de Lewis simples?",
        "options": [
          "BF₃",
          "CH₄",
          "Ne",
          "H₂O"
        ],
        "correctIndex": 0,
        "hint": "Compare os conceitos da etapa com o exemplo resolvido e suas condições de validade.",
        "solution": "BF₃ possui três ligações simples B–F, conferindo seis elétrons de ligação ao boro no modelo usual. Esse desenho respeita os 24 elétrons de valência disponíveis e exemplifica limitação da regra do octeto."
      }
    ]
  },
  {
    "subject": "Física",
    "topicStart": "Propagação por condução, convecção e irradiação",
    "objective": "Diferenciar mecanismos de transferência de energia térmica, calcular fluxo por condução num modelo unidimensional e reconhecer condições físicas de convecção e radiação.",
    "prerequisites": [
      "Temperatura, diferença de temperatura e equilíbrio térmico",
      "Calor como energia transferida",
      "Área, comprimento, potência e unidades SI"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Condução e gradiente de temperatura",
        "explanation": "A condução térmica transfere energia por interações microscópicas em um material ou entre materiais em contato, sem exigir transporte macroscópico do próprio material. Em uma parede plana homogênea de espessura L, área A e condutividade térmica k aproximadamente constante, sob regime estacionário e sem geração interna relevante de energia, a taxa de transferência de calor em módulo é P=kAΔT/L. A unidade de k é W/(m·K), de modo que kAΔT/L produz watts; a diferença de 20 °C corresponde a diferença de 20 K nesse cálculo. A expressão não determina a quantidade total transferida sem multiplicar pelo tempo, nem serve diretamente quando a temperatura varia rapidamente no interior da parede ou quando há camadas com propriedades diferentes. Materiais considerados bons isolantes possuem condutividade relativamente baixa nas condições analisadas, mas isolamento real também depende da espessura, da geometria e de possíveis movimentos de ar. Ao tocar uma barra metálica e uma de madeira no mesmo ambiente, a sensação de temperatura pode diferir porque as taxas de transferência de calor entre mão e superfície são distintas, não porque necessariamente estavam em temperaturas iniciais diferentes.",
        "example": "Duas faces de uma parede de k=0,5 W/(m·K), área 2 m² e espessura 0,10 m estão a 30 °C e 20 °C. A diferença é 10 K e P=0,5×2×10/0,10=100 W. Em 60 s, se mantido o regime, 100×60=6000 J. Isso exige temperatura nas faces constante e condução aproximadamente unidimensional.",
        "pitfall": "Não confunda energia Q em joules com potência térmica P em watts; o fluxo estacionário não permite ignorar o tempo ao calcular energia transferida.",
        "steps": [
          "Defina as grandezas, espécies ou processos e explicite condições de validade.",
          "Aplique as relações do capítulo a um exemplo numérico ou conceitual concreto.",
          "Confira a inferência, compare alternativas e identifique o erro frequente."
        ]
      },
      {
        "level": "intermediate",
        "title": "Convecção natural e forçada em fluidos",
        "explanation": "Convecção envolve transferência de energia entre superfície e fluido, associada à condução junto às interfaces e ao movimento do fluido, como ar ou água. Na convecção natural, variações de densidade geradas por aquecimento podem induzir movimento sob ação da gravidade; no resfriamento, o padrão depende de posição, geometria e condições de contorno. Ventiladores e bombas podem criar convecção forçada, aumentando a circulação e modificando a taxa de troca de energia. É inadequado afirmar que 'ar quente sempre sobe' em qualquer situação, pois fluxo externo, confinamento e estratificação podem alterar o movimento. Um forno com circulação forçada frequentemente aquece alimentos de forma diferente de um forno estático justamente porque o ar se move e redistribui energia, mas o alimento também recebe radiação e condução nos pontos de contato. O coeficiente convectivo h na relação aproximada P=hA(T_s−T_f) depende da velocidade do fluido, propriedades, geometria e regime de escoamento; não é uma constante universal. Ao analisar experiências, diferencie transporte de matéria do fluido e simples transmissão de energia por vibrações internas.",
        "example": "Uma superfície de 0,5 m² está a 40 °C e o ar ambiente a 20 °C. Se um modelo fornecer h=10 W/(m²·K), a taxa convectiva aproximada é P=10×0,5×20=100 W. Se a circulação alterar h para 20, P=200 W no modelo, sem que seja necessário dobrar a diferença de temperatura. O h real depende do escoamento.",
        "pitfall": "Não atribua toda transferência térmica em um líquido à condução pura nem trate o coeficiente de convecção como propriedade fixa do material isoladamente.",
        "steps": [
          "Defina as grandezas, espécies ou processos e explicite condições de validade.",
          "Aplique as relações do capítulo a um exemplo numérico ou conceitual concreto.",
          "Confira a inferência, compare alternativas e identifique o erro frequente."
        ]
      },
      {
        "level": "advanced",
        "title": "Irradiação, vácuo e combinação de mecanismos",
        "explanation": "A radiação térmica transporta energia por ondas eletromagnéticas e, ao contrário de condução e convecção, não exige matéria intermediária. É por esse mecanismo que a Terra recebe energia do Sol através do espaço. Todo corpo acima do zero absoluto emite radiação térmica; a potência líquida trocada depende das temperaturas absolutas, emissividades, áreas e condições de visualização mútua. Para um corpo idealizado de área A e emissividade ε trocando radiação com um ambiente amplo, P_líquida≈εσA(T⁴−T_amb⁴), com temperaturas em kelvin e σ constante de Stefan–Boltzmann. Dobrar a temperatura absoluta de um corpo ideal que radia para um entorno muito frio aumenta sua emissão total por fator 16, e não por fator 2; porém esse argumento não vale como regra para potência líquida se o ambiente também emitir de modo relevante. Em garrafas térmicas e construções, diferentes soluções reduzem condução, convecção e troca radiativa, mas raramente eliminam todas. Em superfícies brilhantes, a emissividade pode diferir da de superfícies escuras, dependendo também da faixa espectral. Separar os mecanismos ajuda a escolher a intervenção adequada e evita a ideia errada de que não pode ocorrer troca de calor no vácuo.",
        "example": "Considere um emissor ideal ε=1, área constante e ambiente aproximadamente a 0 K. Se a temperatura do emissor passa de 300 K a 600 K, a relação entre potências emitidas é (600/300)⁴=2⁴=16. O raciocínio exige comparar emissão e não fluxo líquido real junto a um ambiente de temperatura significativa.",
        "pitfall": "Não use temperaturas em Celsius na quarta potência da lei radiativa e não diga que o vácuo bloqueia a radiação térmica.",
        "steps": [
          "Defina as grandezas, espécies ou processos e explicite condições de validade.",
          "Aplique as relações do capítulo a um exemplo numérico ou conceitual concreto.",
          "Confira a inferência, compare alternativas e identifique o erro frequente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma placa possui k=0,5 W/(m·K), A=2 m², L=0,1 m e ΔT=10 K. A potência conduzida no regime estacionário é:",
        "options": [
          "10 W",
          "100 W",
          "1000 W",
          "5 W"
        ],
        "correctIndex": 1,
        "hint": "Compare os conceitos da etapa com o exemplo resolvido e suas condições de validade.",
        "solution": "Na condução unidimensional estacionária, P=kAΔT/L: 0,5×2×10/0,1=100 W. A expressão depende da geometria e das temperaturas mantidas nas faces; Q em joules requer o tempo."
      },
      {
        "level": "intermediate",
        "prompt": "Um ventilador acelera a circulação de ar diante de uma superfície aquecida. Qual mecanismo é diretamente intensificado?",
        "options": [
          "Irradiação no vácuo",
          "Fusão da superfície",
          "Convecção forçada",
          "Transformação química da superfície"
        ],
        "correctIndex": 2,
        "hint": "Compare os conceitos da etapa com o exemplo resolvido e suas condições de validade.",
        "solution": "O ventilador movimenta o fluido e pode aumentar o coeficiente convectivo. A taxa de transferência muda por escoamento, não pela criação de calor nem por uma reação química."
      },
      {
        "level": "advanced",
        "prompt": "Um corpo ideal emite radiação para ambiente a temperatura desprezível. Ao dobrar sua temperatura absoluta, a potência emitida passa a:",
        "options": [
          "Dobrar",
          "Quadruplicar",
          "Aumentar oito vezes",
          "Aumentar dezesseis vezes"
        ],
        "correctIndex": 3,
        "hint": "Compare os conceitos da etapa com o exemplo resolvido e suas condições de validade.",
        "solution": "P∝T⁴ no modelo de Stefan–Boltzmann com área e emissividade constantes. Assim (2T)⁴/T⁴=16; é essencial usar temperatura absoluta e distinguir emissão da troca líquida real."
      }
    ]
  },
  {
    "subject": "Biologia",
    "topicStart": "Principais ameaças antrópicas nos Ecossistemas terrestres e aquáticos, mudanças climáticas e…",
    "objective": "Relacionar desmatamento, eutrofização e mudanças climáticas a mecanismos ecológicos verificáveis, distinguir causas e indicadores e propor avaliações de medidas de mitigação.",
    "prerequisites": [
      "Cadeias alimentares e níveis tróficos",
      "Ciclos do carbono, água e nitrogênio",
      "População, comunidade e ecossistema"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Mudança de uso do solo, fragmentação e biodiversidade",
        "explanation": "A substituição de vegetação nativa por usos agrícolas, urbanos ou minerários altera a cobertura do solo, o microclima, a disponibilidade de recursos e a conectividade de habitats. Uma área pode perder espécies por redução do habitat, isolamento populacional e mudanças nas interações ecológicas, mas o número de espécies que desaparece não pode ser deduzido somente da porcentagem de área removida sem conhecer espécies, configuração espacial e tempo. Fragmentação cria bordas expostas a vento, luz e variações de umidade, afetando organismos que dependem de condições internas de florestas. Corredores ecológicos podem facilitar deslocamento de algumas espécies, porém sua eficácia depende de espécies-alvo, uso humano e desenho da paisagem. Desmatamento também pode alterar infiltração, escoamento superficial e processos de erosão, aumentando o transporte de sedimentos para rios. Para avaliar o impacto, compare áreas de referência e impactadas, padronize esforço de amostragem, período e método, e não confunda correlação com demonstração automática de causalidade. Ameaças humanas incluem perda de habitats, introdução de espécies exóticas, exploração excessiva e poluição, que podem agir em conjunto.",
        "example": "Uma paisagem de 100 hectares tinha 70 ha de vegetação nativa e passou a 40 ha. A perda foi 30 ha, ou 30/70≈42,9% da vegetação inicial. Esse cálculo descreve cobertura, não afirma que exatamente 42,9% das espécies desapareceram; medir biodiversidade exige inventário biológico e avaliação de conectividade.",
        "pitfall": "Não equipare percentual de perda de vegetação ao de espécies extintas; a resposta depende de composição da comunidade e padrões espaciais.",
        "steps": [
          "Defina as grandezas, espécies ou processos e explicite condições de validade.",
          "Aplique as relações do capítulo a um exemplo numérico ou conceitual concreto.",
          "Confira a inferência, compare alternativas e identifique o erro frequente."
        ]
      },
      {
        "level": "intermediate",
        "title": "Eutrofização, oxigênio dissolvido e cadeias aquáticas",
        "explanation": "Descargas de nutrientes como fósforo e nitrogênio podem estimular crescimento excessivo de algas e outros produtores em corpos d'água, fenômeno que pode integrar a eutrofização. Quando biomassa acumulada é degradada por microrganismos, a respiração microbiana consome oxigênio dissolvido, especialmente sob determinadas condições de estratificação, temperatura e circulação. Baixa disponibilidade de oxigênio pode prejudicar peixes e invertebrados, mas nem toda mortandade de peixes decorre de eutrofização e nem todo aumento de algas gera o mesmo efeito. A entrada de esgoto também pode transportar microrganismos patogênicos e alterar outras propriedades da água. Um indicador como oxigênio dissolvido informa condições ambientais, porém o diagnóstico deve incluir nutrientes, temperatura, transparência, ocorrência de florações e fontes potenciais. Retirar o fósforo de um efluente pode reduzir uma pressão, mas a eficácia de longo prazo depende de cargas internas, bacia de drenagem e manejo. É fundamental distinguir a etapa inicial de proliferação de produtores da etapa posterior de consumo de oxigênio na decomposição.",
        "example": "Em um monitoramento fictício, o oxigênio dissolvido caiu de 8 mg/L para 3 mg/L após episódio de alta entrada de nutrientes. A queda absoluta é 5 mg/L, equivalente a 5/8=62,5% do valor inicial. Esse dado sugere alteração importante, mas não prova a causa isoladamente; compare cargas de nutrientes, temperatura e controles.",
        "pitfall": "Não atribua uma queda de oxigênio apenas ao consumo direto dos nutrientes; a respiração e a decomposição da matéria orgânica podem ser mecanismos intermediários.",
        "steps": [
          "Defina as grandezas, espécies ou processos e explicite condições de validade.",
          "Aplique as relações do capítulo a um exemplo numérico ou conceitual concreto.",
          "Confira a inferência, compare alternativas e identifique o erro frequente."
        ]
      },
      {
        "level": "advanced",
        "title": "Mudanças climáticas, riscos combinados e respostas",
        "explanation": "O aumento de concentrações atmosféricas de gases de efeito estufa provenientes de atividades humanas altera o balanço radiativo terrestre, contribuindo para aquecimento global e mudanças em padrões de precipitação e extremos climáticos. Aquecimento de oceanos, mudanças de disponibilidade hídrica e alterações de distribuição geográfica podem impactar espécies e ecossistemas, mas os efeitos locais dependem de vulnerabilidade, capacidade de dispersão, sazonalidade e múltiplas pressões. Em águas quentes, a solubilidade do oxigênio tende a diminuir, enquanto processos metabólicos e demanda de oxigênio podem mudar; isso pode agravar situações de baixa oxigenação. É importante separar mitigação, que reduz emissões e aumenta sumidouros em condições apropriadas, de adaptação, que reduz exposição e vulnerabilidade a impactos. Recuperação de vegetação, redução de poluição e proteção de áreas conectadas podem oferecer benefícios combinados, mas não substituem a redução de gases de efeito estufa. Uma comparação rigorosa entre projetos usa indicadores antes e depois, locais de controle e escalas temporais adequadas; não basta anunciar plantio de árvores sem medir sobrevivência, restauração funcional e efeitos sociais.",
        "example": "Em dois projetos hipotéticos, A planta 1000 mudas e registra 20% de sobrevivência após um ano, enquanto B planta 600 e registra 70%. Sobreviventes: A=1000×0,20=200; B=600×0,70=420. O total plantado não mede sozinho sucesso da restauração; a comparação ainda exige composição de espécies e condições ambientais.",
        "pitfall": "Não confunda mitigação de emissões com adaptação a impactos nem use número de mudas plantadas como única métrica de recuperação ecológica.",
        "steps": [
          "Defina as grandezas, espécies ou processos e explicite condições de validade.",
          "Aplique as relações do capítulo a um exemplo numérico ou conceitual concreto.",
          "Confira a inferência, compare alternativas e identifique o erro frequente."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Uma região perdeu 30 ha de 70 ha de vegetação nativa. A porcentagem de vegetação original perdida foi aproximadamente:",
        "options": [
          "30%",
          "42,9%",
          "70%",
          "75%"
        ],
        "correctIndex": 1,
        "hint": "Compare os conceitos da etapa com o exemplo resolvido e suas condições de validade.",
        "solution": "O percentual é calculado sobre a área nativa inicial: 30/70×100≈42,9%. Esse número refere-se à cobertura vegetal e não pode ser confundido com proporção de espécies extintas."
      },
      {
        "level": "intermediate",
        "prompt": "Por que florações de algas podem ser seguidas por falta de oxigênio em um lago?",
        "options": [
          "Porque fósforo destrói diretamente toda molécula de O₂",
          "Porque a luz solar deixa de existir",
          "Porque a decomposição de biomassa eleva a respiração microbiana e consome O₂",
          "Porque algas nunca realizam fotossíntese"
        ],
        "correctIndex": 2,
        "hint": "Compare os conceitos da etapa com o exemplo resolvido e suas condições de validade.",
        "solution": "A entrada excessiva de nutrientes pode favorecer biomassa que, ao morrer e decompor-se, sustenta microrganismos consumidores de oxigênio. O impacto depende de temperatura, circulação e carga orgânica."
      },
      {
        "level": "advanced",
        "prompt": "Em restauração, A planta 1000 mudas com 20% de sobrevivência e B planta 600 com 70%. Qual possui mais mudas sobreviventes?",
        "options": [
          "B, com 420",
          "A, com 800",
          "A, com 1000",
          "São iguais"
        ],
        "correctIndex": 0,
        "hint": "Compare os conceitos da etapa com o exemplo resolvido e suas condições de validade.",
        "solution": "A registra 1000×0,20=200 sobreviventes; B registra 600×0,70=420. Esse indicador é mais informativo que o número inicialmente plantado, embora não descreva sozinho toda a qualidade ecológica."
      }
    ]
  }
];
