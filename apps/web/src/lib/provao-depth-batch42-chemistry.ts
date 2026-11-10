import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Material autoral Kognos, não oficial, sem homologação docente. */
export const provaoDepthBatch42Chemistry:readonly DeepTopicSpec[]=[
  {
    "subject": "Química",
    "topicStart": "Óxidos e a chuva ácida",
    "objective": "Explicar formação de óxidos ácidos, deposição atmosférica e acidificação com equações balanceadas e limites ambientais.",
    "prerequisites": [
      "Nomenclatura de óxidos e equações químicas",
      "Ácidos, bases e pH",
      "Conservação de átomos em reações"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Óxidos e formação de ácidos",
        "explanation": "Óxidos são compostos binários em que o oxigênio geralmente tem NOX −2; a classificação depende da composição e do comportamento químico, não apenas do nome. SO₂ é produzido, entre outras fontes, pela queima de enxofre presente em combustíveis; NO e NO₂ podem resultar de processos de combustão em alta temperatura. Na atmosfera, SO₂ pode oxidar-se a SO₃, que reage com água formando H₂SO₄; NO₂ participa de rotas que levam a ácido nítrico. Nem todo óxido é ácido: CaO é básico e CO é classificado como neutro em tratamentos escolares. A água da chuva natural já é ligeiramente ácida pela dissolução de CO₂, portanto medir pH menor que 7 não prova isoladamente poluição industrial. Atribuir causa exige avaliar composição, local, período e fontes de emissão. A análise exige separar observação experimental, hipótese explicativa e conclusão: uma evidência é compatível com determinado mecanismo, mas raramente prova uma única causa sem controle. Declare sempre quais espécies, fases e condições foram consideradas; não generalize a partir de uma reação representativa para todos os materiais.",
        "example": "Em uma representação simplificada, balanceie 2 SO₂ + O₂ → 2 SO₃; em seguida SO₃ + H₂O → H₂SO₄. Conte dois átomos de enxofre de cada lado da primeira equação, seis oxigênios de cada lado e conserve todos os elementos na segunda. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Confundir chuva naturalmente levemente ácida com chuva ácida intensificada por emissões antropogênicas. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Deposição e efeitos materiais",
        "explanation": "A deposição ácida ocorre por precipitação úmida e também por deposição seca de gases e partículas. Em solos pouco tamponados, maior entrada de H⁺ pode mobilizar alumínio e remover cátions nutritivos, alterando condições para raízes e organismos aquáticos. Rochas carbonáticas e monumentos de calcário reagem com ácido: CaCO₃ + 2 H⁺ → Ca²⁺ + CO₂ + H₂O. Esse modelo iônico permite entender perda de material, mas não determina sozinho a velocidade de corrosão, que depende de porosidade, umidade, temperatura e concentração. Compare o mesmo aporte de ácido em lago com baixa alcalinidade e em água rica em bicarbonato: a segunda resiste mais à queda de pH porque dispõe de capacidade tampão. Os efeitos variam com exposição, geologia e ecologia, portanto não devem ser generalizados a todos os ambientes. Ao aplicar o modelo, identifique dados medidos, grandezas calculadas e variáveis mantidas constantes. Confira conservação de massa e carga quando houver equações, coerência dimensional em cálculos e limitações de aproximações ideais; um resultado numérico sem essas verificações não sustenta interpretação química.",
        "example": "Uma amostra de carbonato de cálcio recebe ácido suficiente para reagir com 0,10 mol de CaCO₃. Pela proporção 1:2, são necessários 0,20 mol de H⁺; o gás formado é 0,10 mol de CO₂, se a reação for completa. Compare os coeficientes antes de multiplicar. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Afirmar que todo lago responde da mesma forma ao mesmo volume de precipitação ácida. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Monitoramento e mitigação",
        "explanation": "Reduzir emissões de SO₂ pode envolver dessulfurização de gases de combustão e menor teor de enxofre em combustíveis; controlar NOₓ envolve tecnologias e condições de combustão apropriadas. Monitoramento robusto não depende de um único pH: registra precipitação, composição iônica, vento, época do ano e histórico das fontes. A escala de pH é logarítmica, de modo que uma diferença de uma unidade significa fator dez na atividade aproximada de H⁺, não diferença de 1% de acidez. Para soluções diluídas escolares, pH = −log[H⁺] é aproximação útil; em soluções concentradas devem ser consideradas atividades. Neutralização com calcário pode elevar pH de ambientes afetados, mas não substitui controle das emissões e pode ter efeitos colaterais. A interpretação causal exige distinguir correlação temporal, transporte atmosférico e mecanismos químicos. Para aprofundar, compare o modelo escolar com situações reais em que temperatura, concentração, impurezas, atividade química e condições de equilíbrio modificam resultados. Explique o mecanismo antes de propor extrapolações e distinga previsões qualitativas de quantificações que exigem dados adicionais.",
        "example": "Compare duas amostras ideais com pH 4 e pH 5: [H⁺] aproximada vale 10⁻⁴ e 10⁻⁵ mol/L, respectivamente. Dividindo 10⁻⁴ por 10⁻⁵, a primeira apresenta dez vezes mais H⁺. Não subtraia os números de pH para obter concentração. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Tratar a escala logarítmica como linear ou supor que corrigir um lago elimina a fonte de emissão. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual sequência representa uma rota simplificada de formação de ácido sulfúrico atmosférico?",
        "options": [
          "SO₂ oxida a SO₃, que reage com água",
          "CaO dissolve e produz H₂SO₄",
          "CO reage diretamente e gera HNO₃",
          "NaCl evapora e produz H₂SO₄"
        ],
        "correctIndex": 0,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "A oxidação de SO₂ a SO₃ seguida de hidratação pode produzir H₂SO₄; as outras rotas não conservam os elementos necessários nem descrevem esse processo. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "intermediate",
        "prompt": "Quantos mols de H⁺ consome 0,25 mol de CaCO₃ na equação indicada?",
        "options": [
          "0,125 mol",
          "0,25 mol",
          "0,50 mol",
          "1,00 mol"
        ],
        "correctIndex": 2,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "A equação exige dois mols de H⁺ para cada mol de carbonato. Logo, 0,25 × 2 = 0,50 mol, supondo reação completa e ácido disponível. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "advanced",
        "prompt": "Uma chuva com pH 4 tem, aproximadamente, qual relação de [H⁺] com outra de pH 6?",
        "options": [
          "2 vezes maior",
          "10 vezes maior",
          "100 vezes maior",
          "100 vezes menor"
        ],
        "correctIndex": 2,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "A diferença é de duas unidades de pH; 10² = 100. A amostra de pH 4 possui aproximadamente cem vezes mais íons H⁺ que a de pH 6. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Interações do tipo íon-dipolo",
    "objective": "Relacionar hidratação de íons, orientação molecular e dissolução de sais com balanço energético e limites de solubilidade.",
    "prerequisites": [
      "Íons e cargas elétricas",
      "Polaridade da molécula de água",
      "Energia de rede cristalina"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Orientação da água ao redor de íons",
        "explanation": "Uma interação íon–dipolo ocorre entre a carga de um íon e as cargas parciais de uma molécula polar. Na água, o oxigênio apresenta carga parcial negativa e os hidrogênios, parcial positiva. Por isso, moléculas de água orientam seu oxigênio para Na⁺ e seus hidrogênios para Cl⁻, formando camadas de hidratação dinâmicas. Essa orientação não equivale a formação de novas ligações covalentes entre Na e O nem a transformação química da água. A intensidade da interação depende de carga, raio do íon, distância e orientação do dipolo; íons pequenos e muito carregados podem apresentar hidratação intensa. Não se deve confundir íon–dipolo com ligação de hidrogênio, que é interação entre grupos moleculares apropriados. Em água líquida, as moléculas trocam continuamente de posição e o desenho de uma camada estática é apenas um modelo. A análise exige separar observação experimental, hipótese explicativa e conclusão: uma evidência é compatível com determinado mecanismo, mas raramente prova uma única causa sem controle. Declare sempre quais espécies, fases e condições foram consideradas; não generalize a partir de uma reação representativa para todos os materiais.",
        "example": "Para representar NaCl(aq), separe NaCl(s) → Na⁺(aq) + Cl⁻(aq); desenhe o oxigênio da água voltado para Na⁺ e os hidrogênios para Cl⁻. Confira as cargas parciais e não invente NaOH ou HCl como produtos. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Inverter a orientação da água ou considerar hidratação uma reação de neutralização. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Dissolução e energia",
        "explanation": "Para dissolver um sólido iônico é necessário superar, ao menos parcialmente, as interações da rede cristalina e reorganizar o solvente; a hidratação dos íons libera energia. O saldo de entalpia de dissolução pode ser positivo ou negativo, pois depende do balanço entre etapas endotérmicas e exotérmicas. Solubilidade, entretanto, não é decidida só por entalpia: a variação de energia livre ΔG = ΔH − TΔS também envolve entropia e temperatura. Assim, não é correto afirmar que qualquer sal se dissolve em água porque existe atração íon–dipolo. Compare NaCl, moderadamente solúvel, com AgCl, pouco solúvel: ambos podem interagir com água, mas o equilíbrio global de dissolução é diferente. A formação de solução também não implica que íons deixem de existir; a condutividade elétrica resulta de partículas carregadas móveis. Ao aplicar o modelo, identifique dados medidos, grandezas calculadas e variáveis mantidas constantes. Confira conservação de massa e carga quando houver equações, coerência dimensional em cálculos e limitações de aproximações ideais; um resultado numérico sem essas verificações não sustenta interpretação química.",
        "example": "Para dissolução idealizada com ΔH = +5 kJ/mol e ΔS = +30 J/(mol·K), converta ΔS para 0,030 kJ/(mol·K). A 300 K, ΔG = 5 − 300×0,030 = −4 kJ/mol; nesse modelo o processo é termodinamicamente favorecido. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Concluir solubilidade apenas pelo sinal de ΔH, ignorando entropia e equilíbrio. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Hidratação, concentração e competição",
        "explanation": "A água de hidratação altera mobilidade iônica, propriedades coligativas e comportamento de soluções eletrolíticas. Íons multivalentes, como Mg²⁺, costumam apresentar hidratação mais intensa que íons monovalentes de raio comparável, mas a comparação quantitativa exige considerar tamanho, coordenação e condições do meio. A presença de outros íons pode modificar atividades e equilíbrios, de modo que concentrações analíticas não são sempre equivalentes a atividades químicas. Em solução diluída, o modelo escolar de dissociação completa de NaCl é útil; em concentrações altas, interações entre íons e solvente tornam a aproximação menos exata. Solubilidade de um precipitado pode variar por efeito do íon comum ou formação de complexos. O fato de água ser polar ajuda a explicar hidratação, mas não garante que qualquer composto polar ou iônico seja ilimitadamente solúvel. Para aprofundar, compare o modelo escolar com situações reais em que temperatura, concentração, impurezas, atividade química e condições de equilíbrio modificam resultados. Explique o mecanismo antes de propor extrapolações e distinga previsões qualitativas de quantificações que exigem dados adicionais.",
        "example": "Em 0,20 mol de CaCl₂ completamente dissociado, a estequiometria fornece 0,20 mol de Ca²⁺ e 0,40 mol de Cl⁻. Conte os índices da fórmula e verifique a carga total: +0,40 mol de carga positiva equivalente e −0,40 de negativa. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Supor que o número de mols de íons é sempre igual ao número de mols do sal dissolvido. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual parte da molécula de água tende a orientar-se para Na⁺ hidratado?",
        "options": [
          "O átomo de oxigênio, δ−",
          "Os hidrogênios, δ+",
          "A ligação O–H se rompe obrigatoriamente",
          "Nenhuma região, pois a água é apolar"
        ],
        "correctIndex": 0,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "O cátion atrai a região parcialmente negativa da água, próxima ao oxigênio; os hidrogênios δ+ orientam-se preferencialmente para ânions. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "intermediate",
        "prompt": "Para ΔH=+5 kJ/mol e ΔS=+0,030 kJ/(mol·K), qual ΔG a 300 K?",
        "options": [
          "−4 kJ/mol",
          "+14 kJ/mol",
          "+4 kJ/mol",
          "−14 kJ/mol"
        ],
        "correctIndex": 0,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "Usa-se ΔG=ΔH−TΔS=5−(300×0,030)=−4 kJ/mol. O sinal negativo indica favorecimento termodinâmico nas condições do modelo. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "advanced",
        "prompt": "Na dissociação completa de 0,10 mol de CaCl₂, quantos mols de Cl⁻ aparecem?",
        "options": [
          "0,05 mol",
          "0,10 mol",
          "0,20 mol",
          "0,30 mol"
        ],
        "correctIndex": 2,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "Cada unidade fórmula de CaCl₂ produz dois íons cloreto. Portanto, 0,10 mol de sal origina 0,20 mol de Cl⁻, se houver dissociação completa. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Tratamento de água",
    "objective": "Diferenciar etapas de potabilização, separação de fases e desinfecção sem confundir aparência com segurança microbiológica.",
    "prerequisites": [
      "Misturas heterogêneas e suspensões",
      "pH e reações de oxidação",
      "Concentração e unidades mg/L"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Coagulação, floculação e decantação",
        "explanation": "A água bruta pode conter partículas suspensas, matéria orgânica, microrganismos e substâncias dissolvidas. Em uma estação convencional, coagulantes como sais de alumínio ou ferro desestabilizam coloides; a mistura rápida dispersa o reagente e a floculação, sob agitação controlada, promove agregação em flocos maiores. A decantação separa parte desses flocos por sedimentação gravitacional. Nenhuma dessas etapas, isoladamente, garante água potável: microrganismos e solutos dissolvidos podem permanecer. O pH influencia a formação dos hidróxidos e a eficiência do coagulante, exigindo controle operacional. Não se deve confundir floculação com simples filtração, nem interpretar água visualmente transparente como necessariamente segura. A ordem e os equipamentos variam com a tecnologia e com a qualidade da fonte, de modo que o fluxograma convencional é um modelo e não regra universal. A análise exige separar observação experimental, hipótese explicativa e conclusão: uma evidência é compatível com determinado mecanismo, mas raramente prova uma única causa sem controle. Declare sempre quais espécies, fases e condições foram consideradas; não generalize a partir de uma reação representativa para todos os materiais.",
        "example": "Uma água turva recebe coagulante em mistura rápida; após agitação lenta formam-se flocos, que sedimentam em tanque. Identifique a sequência: desestabilização de partículas → agregação → separação gravitacional. Observe que sais dissolvidos não sedimentam com os flocos automaticamente. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Acreditar que decantação remove todo microrganismo ou toda substância dissolvida. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Filtração e desinfecção",
        "explanation": "Após clarificação, filtros de areia ou outros meios granulares retêm partículas remanescentes por mecanismos físicos e superficiais. A desinfecção utiliza agente ou processo capaz de inativar patógenos, como cloração, ozônio ou radiação UV sob condições adequadas. O cloro pode deixar residual protetor na rede de distribuição; UV não fornece esse residual. A eficiência depende de turbidez, dose, tempo de contato, pH e demanda química. A presença de matéria orgânica pode consumir desinfetante e favorecer formação de subprodutos, razão pela qual não se deve aumentar dosagens sem controle. Água filtrada em casa não é necessariamente desinfetada; filtros com carvão ativado removem certos compostos, mas seu desempenho microbiológico depende do dispositivo. Tratamento seguro exige monitoramento de parâmetros e cumprimento das normas locais de potabilidade. Ao aplicar o modelo, identifique dados medidos, grandezas calculadas e variáveis mantidas constantes. Confira conservação de massa e carga quando houver equações, coerência dimensional em cálculos e limitações de aproximações ideais; um resultado numérico sem essas verificações não sustenta interpretação química.",
        "example": "Considere um tanque ideal de 120 m³ com vazão constante de 20 m³/h. O tempo hidráulico nominal é 120/20 = 6 h. Esse cálculo não garante seis horas de contato efetivo em todos os pontos: curtos-circuitos hidráulicos e mistura modificam a distribuição real. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Equiparar filtração a esterilização ou usar tempo nominal como prova automática de desinfecção. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Concentração e avaliação de qualidade",
        "explanation": "Parâmetros de potabilidade abrangem indicadores microbiológicos, químicos, físicos e operacionais; um resultado isolado não caracteriza toda a qualidade da água. Turbidez mede espalhamento de luz por partículas e não equivale a concentração de bactérias. A unidade mg/L expressa massa por volume e, para água diluída de densidade próxima de 1 kg/L, pode aproximar ppm em massa, mas essa equivalência depende da densidade. A avaliação de risco também considera frequência de amostragem, pontos da rede, integridade das tubulações e possibilidade de recontaminação. Em locais sem infraestrutura, soluções domésticas devem seguir recomendações sanitárias específicas; receitas improvisadas com químicos podem causar intoxicação. Comparar duas amostras exige a mesma unidade e método analítico. O controle da fonte e do saneamento reduz a carga contaminante antes da estação, complementando o tratamento. Para aprofundar, compare o modelo escolar com situações reais em que temperatura, concentração, impurezas, atividade química e condições de equilíbrio modificam resultados. Explique o mecanismo antes de propor extrapolações e distinga previsões qualitativas de quantificações que exigem dados adicionais.",
        "example": "Uma análise registra 2 mg/L de uma substância em 500 L de água. A massa total estimada é 2×500 = 1000 mg, ou 1 g. Converta volume e unidades antes de concluir; isso não indica, por si só, se o valor atende a um limite regulatório. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Usar turbidez baixa como substituto de laudo microbiológico ou confundir mg/L com g/L. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual é a função principal da floculação em tratamento convencional?",
        "options": [
          "Evaporar todos os sais",
          "Agregar partículas desestabilizadas em flocos",
          "Garantir esterilidade da água",
          "Aumentar a salinidade para consumo"
        ],
        "correctIndex": 1,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "A floculação aproxima partículas previamente desestabilizadas e forma agregados maiores, facilitando a decantação e a filtração posteriores. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "intermediate",
        "prompt": "Qual processo costuma oferecer residual desinfetante na rede após tratamento?",
        "options": [
          "Irradiação UV isolada",
          "Decantação gravitacional",
          "Cloração controlada",
          "Peneiramento de folhas"
        ],
        "correctIndex": 2,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "A cloração pode manter concentração residual de desinfetante na distribuição, diferentemente de UV isolado, que atua no ponto de exposição. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "advanced",
        "prompt": "Uma concentração de 3 mg/L em 200 L corresponde a qual massa total?",
        "options": [
          "0,006 g",
          "0,06 g",
          "0,6 g",
          "6 g"
        ],
        "correctIndex": 2,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "Multiplique 3 mg/L por 200 L: 600 mg, que equivalem a 0,6 g. A conta pressupõe concentração uniforme na amostra. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Eletronegatividade, polaridade de ligações e moléculas",
    "objective": "Distinguir polaridade de ligação e dipolo resultante da molécula usando geometria e distribuição eletrônica.",
    "prerequisites": [
      "Ligações covalentes",
      "Geometria molecular e pares isolados",
      "Vetores e simetria"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Eletronegatividade e dipolo de ligação",
        "explanation": "Eletronegatividade expressa a tendência relativa de um átomo atrair densidade eletrônica em uma ligação. Quando átomos de eletronegatividades diferentes compartilham elétrons, a distribuição pode ser assimétrica, gerando cargas parciais δ+ e δ−. O sentido do dipolo elétrico depende da convenção vetorial adotada; em Química escolar, costuma-se indicar a seta de polaridade para o átomo mais eletronegativo. A diferença de eletronegatividade ajuda a comparar caráter polar, mas não constitui fronteira absoluta entre ligação iônica e covalente. H–Cl é polar porque Cl atrai mais a nuvem eletrônica, enquanto Cl–Cl é apolar por simetria entre átomos idênticos. Não confunda carga parcial com íon livre: Hδ+ em HCl molecular não é automaticamente H⁺ isolado. O contexto químico e a escala de eletronegatividade utilizada afetam valores numéricos. A análise exige separar observação experimental, hipótese explicativa e conclusão: uma evidência é compatível com determinado mecanismo, mas raramente prova uma única causa sem controle. Declare sempre quais espécies, fases e condições foram consideradas; não generalize a partir de uma reação representativa para todos os materiais.",
        "example": "Compare Cl–Cl e H–Cl. No primeiro, os dois átomos possuem a mesma eletronegatividade, logo Δχ=0. No segundo, Cl é mais eletronegativo que H, deslocando densidade eletrônica para Cl; identifique Hδ+ e Clδ− sem escrever dissociação. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Tratar toda ligação polar como ligação iônica ou confundir δ+ com carga inteira +1. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Geometria e soma dos dipolos",
        "explanation": "A polaridade de uma molécula depende da soma vetorial dos dipolos de ligação e da geometria espacial. CO₂ apresenta duas ligações C=O polares, mas sua geometria linear e simétrica faz os dipolos se cancelarem. H₂O possui duas ligações O–H polares e geometria angular devido aos pares não ligantes no oxigênio; o resultado é um dipolo molecular não nulo. BF₃, idealmente trigonal plano e simétrico, também pode ter cancelamento, enquanto NH₃ piramidal possui dipolo resultante. Para resolver uma questão, desenhe estrutura de Lewis, identifique regiões eletrônicas, determine a geometria e só então some qualitativamente os vetores. A fórmula bruta isolada nem sempre basta para concluir polaridade, especialmente em moléculas maiores com conformações distintas. Ligações polares não garantem molécula polar; por outro lado, moléculas assimétricas frequentemente têm dipolo permanente. Ao aplicar o modelo, identifique dados medidos, grandezas calculadas e variáveis mantidas constantes. Confira conservação de massa e carga quando houver equações, coerência dimensional em cálculos e limitações de aproximações ideais; um resultado numérico sem essas verificações não sustenta interpretação química.",
        "example": "Para CO₂, represente O=C=O com ângulo de 180°. Cada dipolo C→O tem mesmo módulo e sentidos opostos, resultante zero. Para H₂O, desenhe geometria angular e mostre que as componentes dos dois dipolos não se anulam. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Somar apenas módulos dos dipolos sem considerar direção e ângulo entre as ligações. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Polaridade e propriedades observáveis",
        "explanation": "Dipolos permanentes influenciam interações intermoleculares e podem afetar temperatura de ebulição e solubilidade, mas não são o único fator: massa molar, dispersão, ligações de hidrogênio e estrutura também importam. A regra didática semelhante dissolve semelhante é uma heurística, não lei absoluta; água pode dissolver sais por interações íon–dipolo e muitas moléculas polares apresentam solubilidade limitada. A polaridade molecular é diferente de carga elétrica total: uma molécula neutra pode ter dipolo permanente. A comparação de pontos de ebulição exige controlar famílias e tamanhos moleculares. Em solventes, a constante dielétrica e a capacidade de formar interações específicas podem modificar estabilização de solutos. Para misturas de etanol e água, o grupo OH favorece interações com água, enquanto a cadeia carbônica reduz afinidade relativa à medida que cresce. Não infira miscibilidade universal apenas de uma ligação polar presente. Para aprofundar, compare o modelo escolar com situações reais em que temperatura, concentração, impurezas, atividade química e condições de equilíbrio modificam resultados. Explique o mecanismo antes de propor extrapolações e distinga previsões qualitativas de quantificações que exigem dados adicionais.",
        "example": "Compare etanol (C₂H₅OH) e hexanol (C₆H₁₃OH): ambos têm grupo OH, mas a cadeia apolar maior do hexanol reduz sua miscibilidade com água. Identifique primeiro a parte polar, depois a porção hidrocarbonada e finalmente compare proporções estruturais. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Concluir que qualquer composto com O–H é infinitamente miscível em água, sem considerar o restante da molécula. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual ligação é polar devido à diferença de eletronegatividade?",
        "options": [
          "Cl–Cl",
          "H–Cl",
          "O–O",
          "N–N"
        ],
        "correctIndex": 1,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "H e Cl têm eletronegatividades distintas e compartilham densidade eletrônica assimetricamente; ligações entre átomos iguais são apolares no modelo apresentado. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "intermediate",
        "prompt": "Qual molécula tem ligações polares mas dipolo molecular resultante nulo no modelo ideal?",
        "options": [
          "H₂O",
          "NH₃",
          "CO₂",
          "HCl"
        ],
        "correctIndex": 2,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "O CO₂ linear apresenta dois dipolos C=O iguais e opostos, que se cancelam. Água e amônia têm geometria assimétrica, e HCl é diatômica polar. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "advanced",
        "prompt": "Por que hexanol é menos miscível em água que etanol?",
        "options": [
          "Porque hexanol não possui oxigênio",
          "Porque a cadeia hidrocarbonada apolar é maior",
          "Porque etanol é um sal iônico",
          "Porque hexanol tem carga elétrica +1"
        ],
        "correctIndex": 1,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "Ambos têm grupo OH, mas o hexanol possui porção hidrocarbonada apolar maior, que desfavorece a miscibilidade relativa com água. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      }
    ]
  },
  {
    "subject": "Química",
    "topicStart": "Indicadores, condutibilidade elétrica, reação com metais, reação de neutralização",
    "objective": "Interpretar evidências de acidez e basicidade sem inferir propriedades universais a partir de um único teste.",
    "prerequisites": [
      "Ácidos e bases em solução aquosa",
      "Íons e condução elétrica",
      "Balanceamento de equações"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Indicadores e pH",
        "explanation": "Indicadores ácido-base são substâncias cujas formas químicas apresentam cores diferentes conforme o meio e o equilíbrio de protonação. Fenolftaleína costuma ser incolor em meio ácido e rosa em faixa básica apropriada; papel indicador universal fornece estimativa de pH pela comparação com escala de cores. A mudança não mede automaticamente concentração exata de ácido nem revela sua identidade. pH depende da atividade de H⁺ e, no modelo escolar de soluções diluídas, aproxima-se por −log[H⁺]. Ácido forte não é sinônimo de ácido concentrado: força se relaciona à extensão da ionização, concentração à quantidade de soluto por volume. A mesma solução pode alterar a cor de um indicador e não de outro porque cada indicador tem faixa de viragem específica. Temperatura e composição também interferem na interpretação; em questões, verifique qual indicador foi empregado antes de classificar a amostra. A análise exige separar observação experimental, hipótese explicativa e conclusão: uma evidência é compatível com determinado mecanismo, mas raramente prova uma única causa sem controle. Declare sempre quais espécies, fases e condições foram consideradas; não generalize a partir de uma reação representativa para todos os materiais.",
        "example": "Uma solução ideal com [H⁺]=10⁻³ mol/L tem pH≈3. Calcule −log(10⁻³)=3 e classifique como ácida em condições escolares usuais. Uma cor isolada não permite deduzir que o ácido seja HCl, H₂SO₄ ou outro. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Tratar mudança de cor como medida quantitativa exata ou confundir força ácida com concentração. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "intermediate",
        "title": "Condutividade e reação com metais",
        "explanation": "A condução elétrica de soluções depende da presença e mobilidade de íons. Água ultrapura conduz muito pouco; uma solução aquosa de NaCl conduz por Na⁺ e Cl⁻ móveis, enquanto solução de sacarose conduz pouco porque o soluto permanece predominantemente molecular. Condutividade não identifica sozinha ácido, base ou sal, nem indica que toda solução condutora seja perigosa. Certos metais reagem com ácidos liberando H₂, como Zn + 2 HCl → ZnCl₂ + H₂, mas a reação depende de metal, ácido, concentração, camada passivadora e condições. Cobre metálico não libera H₂ com HCl diluído em condições comuns, diferentemente do zinco; ácidos oxidantes podem seguir outras rotas. Portanto, bolhas observadas em experimento não devem ser atribuídas automaticamente a hidrogênio sem identificação apropriada e segurança. Ao aplicar o modelo, identifique dados medidos, grandezas calculadas e variáveis mantidas constantes. Confira conservação de massa e carga quando houver equações, coerência dimensional em cálculos e limitações de aproximações ideais; um resultado numérico sem essas verificações não sustenta interpretação química.",
        "example": "Balanceie Zn + 2 HCl → ZnCl₂ + H₂. Um mol de Zn consome dois mols de HCl e gera um mol de H₂ se houver reagentes e condições adequadas. Verifique que Zn, Cl e H têm as mesmas contagens dos dois lados. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Afirmar que qualquer metal reage com qualquer ácido gerando hidrogênio ou que sacarose forma íons em água. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      },
      {
        "level": "advanced",
        "title": "Neutralização e estequiometria",
        "explanation": "Uma neutralização de Arrhenius entre ácido e base pode ser representada pela reação líquida H⁺ + OH⁻ → H₂O, com íons espectadores dependendo dos reagentes. HCl + NaOH → NaCl + H₂O ocorre na razão molar 1:1, mas H₂SO₄ + 2 NaOH exige duas unidades de base por ácido em neutralização completa. No ponto de equivalência, quantidades estequiométricas de ácido e base reagiram; isso não implica pH igual a 7 para todas as titulações, porque sais podem hidrolisar e a temperatura importa. O ponto final observado por indicador pode diferir ligeiramente do ponto de equivalência. Para calcular volumes, converta para litros, determine mols e use os coeficientes da equação; aplicar C₁V₁=C₂V₂ sem considerar estequiometria pode produzir erro. A reação pode liberar calor e deve ser tratada como processo químico, não apenas mistura de líquidos. Para aprofundar, compare o modelo escolar com situações reais em que temperatura, concentração, impurezas, atividade química e condições de equilíbrio modificam resultados. Explique o mecanismo antes de propor extrapolações e distinga previsões qualitativas de quantificações que exigem dados adicionais.",
        "example": "Para neutralizar 20 mL de H₂SO₄ 0,10 mol/L, calcule n=0,020×0,10=0,002 mol. A equação H₂SO₄+2 NaOH→Na₂SO₄+2 H₂O exige 0,004 mol de NaOH. Com base 0,20 mol/L, V=0,004/0,20=0,020 L=20 mL. Etapas: identifique as espécies envolvidas; aplique a relação química indicada; verifique unidades, conservação e a hipótese usada.",
        "pitfall": "Usar proporção 1:1 para ácido diprótico ou assumir pH 7 em qualquer equivalência. A correção exige voltar à definição e verificar as condições do caso.",
        "steps": [
          "Identifique espécies químicas, dados e hipótese do problema.",
          "Execute o cálculo ou a comparação usando as relações explicitadas no exemplo.",
          "Confira conservação, unidades, limitações e conclusão."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em solução diluída ideal com [H⁺]=10⁻⁴ mol/L, qual é o pH aproximado?",
        "options": [
          "4",
          "10",
          "−4",
          "0,0001"
        ],
        "correctIndex": 0,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "Aplicando pH=−log[H⁺], obtém-se −log(10⁻⁴)=4. O cálculo usa a aproximação de concentração para atividade. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "intermediate",
        "prompt": "Qual solução tende a conduzir melhor corrente elétrica em concentrações comparáveis?",
        "options": [
          "Sacarose aquosa",
          "NaCl aquoso",
          "Etanol puro",
          "Água ultrapura"
        ],
        "correctIndex": 1,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "NaCl se dissocia em íons móveis em água e, por isso, conduz significativamente melhor que soluções moleculares de sacarose e líquidos com poucos íons. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      },
      {
        "level": "advanced",
        "prompt": "Qual volume de NaOH 0,20 mol/L neutraliza 10 mL de H₂SO₄ 0,10 mol/L completamente?",
        "options": [
          "5 mL",
          "10 mL",
          "20 mL",
          "40 mL"
        ],
        "correctIndex": 1,
        "hint": "Identifique a relação química específica e verifique as hipóteses do enunciado.",
        "solution": "O ácido fornece 0,001 mol; são necessários 0,002 mol de NaOH. Dividindo por 0,20 mol/L, resulta 0,010 L, isto é, 10 mL. As demais alternativas contradizem a definição, a conservação de matéria ou os dados do problema."
      }
    ]
  }
];
