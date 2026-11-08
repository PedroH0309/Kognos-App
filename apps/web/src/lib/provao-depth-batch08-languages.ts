import type {DeepTopicSpec} from './provao-depth-lessons.ts';
/** Eighth batch: original language pedagogy; teacher review pending. */
export const provaoDepthBatch08Languages:readonly DeepTopicSpec[]=[
  {
    "subject": "Português",
    "topicStart": "Coordenação e subordinação. Conectivos",
    "objective": "Distinguir orações coordenadas e subordinadas, interpretar valores semânticos de conectivos e avaliar alterações de sentido ao reorganizar períodos.",
    "prerequisites": [
      "Frase, oração e período",
      "Verbos e conjunções",
      "Relações de sentido entre enunciados"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Coordenação: orações sintaticamente independentes",
        "explanation": "Uma oração contém estrutura organizada em torno de verbo ou locução verbal; um período pode reunir mais de uma oração. Na coordenação, orações não exercem função sintática uma dentro da outra, embora dependam do contexto para produzir sentido. Em \"Estudei bastante, mas fiquei nervoso\", há dois verbos e duas orações coordenadas, ligadas por \"mas\", que estabelece contraste ou oposição. Em \"Estudei e resolvi exercícios\", a conjunção \"e\" apresenta adição; em \"Ou revisamos agora, ou deixamos para amanhã\", a estrutura expressa alternância. Também há coordenação sem conectivo, chamada assindética: \"Cheguei, sentei, comecei\". A classificação de conjunções não substitui leitura do texto: o mesmo \"e\" pode sugerir consequência ou contraste conforme o contexto. Orações coordenadas podem apresentar valor aditivo, adversativo, alternativo, conclusivo ou explicativo, conforme o funcionamento discursivo. Para analisar, localize os verbos e observe a relação entre ideias, evitando classificar toda vírgula como fronteira entre orações. Uma enumeração de substantivos não cria automaticamente novas orações.",
        "example": "Em \"A equipe revisou o texto, mas não publicou a notícia\", as formas verbais \"revisou\" e \"publicou\" indicam duas orações. A segunda é coordenada sindética adversativa porque \"mas\" contrasta revisão com ausência de publicação. Substituir \"mas\" por \"e\" altera o valor de oposição para adição, mesmo preservando a estrutura de duas orações.",
        "pitfall": "Não classifique uma oração apenas pelo sinal de pontuação. Uma vírgula pode separar termos dentro de uma oração, enquanto a relação semântica entre orações depende também do conectivo e do contexto.",
        "steps": [
          "Identifique verbos e limites de cada oração.",
          "Verifique se alguma oração desempenha função sintática na outra.",
          "Leia o conectivo como relação de adição, oposição, alternativa, conclusão ou explicação."
        ]
      },
      {
        "level": "intermediate",
        "title": "Subordinação: uma oração integra a estrutura da outra",
        "explanation": "Na subordinação, uma oração desempenha função sintática associada a outra estrutura ou estabelece circunstância que modifica a principal. Em \"Espero que você venha\", a oração \"que você venha\" funciona como complemento do verbo \"espero\": é subordinada substantiva objetiva direta no tratamento escolar. Em \"O livro que comprei chegou\", \"que comprei\" caracteriza o substantivo \"livro\" e funciona como subordinada adjetiva restritiva, sem vírgulas nesse contexto. Em \"Embora estivesse cansada, Ana terminou a prova\", a oração introduzida por \"embora\" expressa concessão, isto é, uma circunstância que não impediu o resultado. Orações subordinadas adverbiais podem indicar causa, condição, tempo, finalidade, consequência, concessão e outras relações, de acordo com o uso. Para distinguir causa e concessão, compare \"Como chovia, ficamos em casa\" e \"Embora chovesse, saímos\": no primeiro, a chuva justifica a permanência; no segundo, não impediu a saída. Os rótulos são instrumentos para explicar sentido e função, não apenas para decorar listas de conjunções.",
        "example": "Em \"Se o prazo terminar hoje, enviaremos o relatório agora\", a oração introduzida por \"se\" estabelece condição para a ação principal. Em \"Embora o prazo termine hoje, enviaremos o relatório agora\", a mesma estrutura geral apresenta concessão: a proximidade do prazo é um obstáculo potencial que não impede a ação. Trocar conectivos muda a interpretação lógica.",
        "pitfall": "Não confunda a conjunção integrante \"que\" com pronome relativo \"que\" em todos os casos. Em \"Espero que venha\", a oração completa o verbo; em \"O aluno que chegou\", a oração caracteriza o nome \"aluno\".",
        "steps": [
          "Localize a oração principal e a oração introduzida pelo conectivo.",
          "Teste se a subordinada completa um verbo, caracteriza um nome ou acrescenta circunstância.",
          "Justifique o valor semântico com uma paráfrase fiel."
        ]
      },
      {
        "level": "advanced",
        "title": "Conectivos, pontuação e reescrita sem perda de sentido",
        "explanation": "A interpretação de períodos complexos exige distinguir equivalência sintática de equivalência semântica. \"Embora estivesse doente, participou da reunião\" e \"Estava doente, mas participou da reunião\" expressam contraste concessivo semelhante, mas a primeira usa subordinação e a segunda, coordenação adversativa. Já substituir \"embora\" por \"porque\" inverte a relação: concessão passa a causa, mudando a mensagem. A pontuação também pode modificar informação: em \"Os estudantes que terminaram saíram\", a oração relativa restritiva delimita quais estudantes saíram; em \"Os estudantes, que terminaram, saíram\", a oração explicativa acrescenta comentário sobre o conjunto já identificado, sugerindo que todos terminaram. O efeito depende do contexto e da referência, e por isso não basta retirar vírgulas mecanicamente. Em avaliações, reescritas podem alterar pressupostos, abrangência de sujeitos e força argumentativa mesmo quando mantêm palavras semelhantes. Uma boa revisão pergunta se a relação de causa, condição, concessão, explicação ou conclusão foi preservada e se a pontuação manteve o mesmo referente. Em textos reais, conectivos participam da coesão e da progressão argumentativa, podendo reforçar ou limitar inferências.",
        "example": "Compare \"Os professores que participaram do encontro receberam certificado\" com \"Os professores, que participaram do encontro, receberam certificado\". A primeira restringe o grupo aos participantes; a segunda apresenta a participação como explicação adicional sobre um grupo de professores já identificado. Não são sempre equivalentes, mesmo com as mesmas palavras.",
        "pitfall": "Não trate orações adjetivas restritivas e explicativas como intercambiáveis. A mudança de vírgulas pode ampliar ou restringir o conjunto referido, afetando o significado do período.",
        "steps": [
          "Identifique o valor lógico e a função sintática originais.",
          "Reescreva o período preservando referentes, relações e informações.",
          "Compare a nova frase com a original e explicite qualquer mudança de sentido."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Em 'Ela estudou, mas não conseguiu dormir', o conectivo 'mas' indica:",
        "options": [
          "Adição.",
          "Alternância.",
          "Oposição.",
          "Finalidade."
        ],
        "correctIndex": 2,
        "hint": "Compare a expectativa de dormir com o fato de não conseguir.",
        "solution": "A alternativa C está correta: 'mas' estabelece relação adversativa entre as duas orações coordenadas. Não indica finalidade, alternância ou mera soma de fatos."
      },
      {
        "level": "intermediate",
        "prompt": "Em 'Embora estivesse chovendo, saímos', a oração inicial expressa:",
        "options": [
          "Concessão.",
          "Causa.",
          "Finalidade.",
          "Consequência."
        ],
        "correctIndex": 0,
        "hint": "A chuva não impediu a ação de sair.",
        "solution": "A alternativa A está correta: 'embora' introduz circunstância concessiva, algo que poderia dificultar a ação, mas não a impediu. 'Porque' indicaria causa, modificando a relação."
      },
      {
        "level": "advanced",
        "prompt": "Qual interpretação de 'Os alunos que terminaram a atividade saíram' é mais adequada?",
        "options": [
          "Todos os alunos necessariamente terminaram.",
          "A oração relativa é explicativa e sempre exige vírgulas.",
          "A oração indica uma causa para a saída.",
          "A oração relativa restringe o grupo de alunos aos que terminaram."
        ],
        "correctIndex": 3,
        "hint": "Sem vírgulas, a oração relativa pode delimitar o referente.",
        "solution": "A alternativa D está correta: 'que terminaram a atividade' restringe quais alunos saíram. As demais generalizam o grupo ou confundem a função restritiva com explicativa."
      }
    ]
  },
  {
    "subject": "Inglês",
    "topicStart": "Compreensão crítica de textos: discriminação entre fato e opinião",
    "objective": "Distinguir fato verificável, opinião, inferência e evidência em textos ingleses; reconhecer hedging, autoria e marcadores de posicionamento sem confundir crenças com dados.",
    "prerequisites": [
      "Leitura de textos curtos em inglês",
      "Vocabulário de avaliação e evidência",
      "Marcadores de contraste e causa"
    ],
    "sections": [
      {
        "level": "basic",
        "title": "Fact versus opinion: verificabilidade e ponto de vista",
        "explanation": "Em leitura crítica de inglês, fact designa uma afirmação passível de verificação por evidências apropriadas, enquanto opinion expressa julgamento, preferência ou avaliação. Isso não significa que toda afirmação apresentada como fato seja verdadeira: ela pode ser verificável e ainda assim falsa. \"The museum opens at 9 a.m.\" é verificável consultando horário oficial; \"The museum is wonderful\" expressa avaliação subjetiva. A palavra \"best\" costuma sinalizar julgamento, mas é necessário observar critérios: \"best-selling\" pode ter definição quantitativa verificável. O leitor deve identificar quem fala, quais dados são citados e se a afirmação é sustentada por fonte. Palavras como \"I think\", \"in my view\", \"probably\" e \"seems\" indicam graus de posicionamento ou incerteza; não tornam automaticamente toda a frase irrelevante. A diferença entre observação e interpretação aparece também em gráficos: \"Sales rose by 10%\" pode ser testado com números, enquanto \"The campaign was a brilliant success\" depende de critérios de avaliação. Ao responder questões, use trechos do texto e não apenas impressões sobre o tema.",
        "example": "Leia: \"The library has 3,000 books. It is the most welcoming place in town.\" A primeira frase apresenta número verificável em catálogo; a segunda contém avaliação subjetiva de acolhimento. Para marcar a alternativa correta, identifique \"3,000\" como dado que exige conferência e \"most welcoming\" como opinião, mesmo que ambas sejam plausíveis.",
        "pitfall": "Não confunda \"fato\" com \"afirmação necessariamente verdadeira\". Uma alegação factual pode estar errada; a diferença está na possibilidade de verificação, não na certeza automática.",
        "steps": [
          "Leia o enunciado e marque termos avaliativos ou números verificáveis.",
          "Pergunte qual evidência permitiria confirmar ou refutar a afirmação.",
          "Classifique fato, opinião ou mistura e justifique com palavras do texto."
        ]
      },
      {
        "level": "intermediate",
        "title": "Evidence, claims and hedging em notícias e divulgação",
        "explanation": "Textos argumentativos apresentam claims, isto é, afirmações ou teses, apoiadas em evidence como dados, testemunhos ou pesquisas. A expressão \"according to the report\" atribui informação a uma fonte; não prova que a fonte seja infalível. Marcadores como \"may\", \"might\", \"suggests\", \"appears\" e \"likely\" modulam o grau de certeza, frequentemente chamado hedging. Compare \"The treatment cures every patient\" com \"The study suggests the treatment may help some patients\": a segunda afirmação é mais limitada e não autoriza concluir cura universal. O leitor precisa reconhecer também relações de contraste: \"however\" introduz contraponto, \"although\" indica concessão e \"therefore\" apresenta conclusão. Em provas, distratores frequentemente exageram quantificadores: \"some\" vira \"all\", \"may\" vira \"will\" e \"associated with\" vira \"caused by\". Essa troca altera a força da afirmação. A leitura crítica avalia a relação entre evidência e conclusão, incluindo tamanho e características de amostra quando disponíveis. Não é necessário traduzir cada palavra para perceber exageros de escopo; observar verbos modais e quantificadores já permite eliminar interpretações incompatíveis.",
        "example": "Texto: \"A survey of 200 students suggests that some learners prefer short videos. However, the researchers did not test exam performance.\" A evidência é preferência declarada de parte da amostra, não melhora comprovada de notas. A conclusão \"Short videos always improve grades\" seria inválida por trocar preferência por desempenho e \"some\" por \"always\".",
        "pitfall": "Não transforme \"may improve\" em \"will improve\" nem \"some participants\" em \"everyone\". O inglês utiliza modais e quantificadores para delimitar a certeza e a abrangência das conclusões.",
        "steps": [
          "Identifique a claim e a fonte de evidência citada.",
          "Destaque modais e quantificadores que limitam a conclusão.",
          "Compare cada alternativa com o grau de certeza e escopo do texto."
        ]
      },
      {
        "level": "advanced",
        "title": "Perspectiva, viés e comparação de fontes",
        "explanation": "Comparar dois textos sobre o mesmo acontecimento exige separar diferenças de dados, seleção de fatos e interpretação editorial. Um texto pode enfatizar benefícios econômicos de uma política e outro, custos sociais, sem que uma simples oposição prove que um deles esteja mentindo. Para examinar perspectiva, identifique autoria, público-alvo, propósito, data, financiamento declarado e evidências oferecidas. A expressão \"critics argue\" atribui opinião a críticos; \"official records show\" apresenta referência a registros, que devem ser avaliados quanto a pertinência. Em inglês, discurso indireto e verbos de relato como \"claims\", \"reports\", \"admits\" e \"insists\" podem sugerir atitude do autor em relação à informação, embora o efeito dependa do contexto. Uma leitura madura não classifica automaticamente toda fonte institucional como neutra ou toda opinião como falsa. O procedimento é cruzar afirmações comparáveis, verificar se usam o mesmo período e métricas e distinguir fatos consensuais de controvérsias interpretativas. Em uma prova, a resposta mais forte costuma reconhecer a limitação das fontes em vez de afirmar certeza não demonstrada.",
        "example": "Texto A: \"The city added 12 km of bike lanes last year, according to municipal records.\" Texto B: \"The new bike lanes are a waste of money, says a local columnist.\" O primeiro contém dado mensurável atribuído a registros, sujeito a verificação; o segundo apresenta juízo de valor atribuído a um colunista. As frases podem coexistir sem contradição factual.",
        "pitfall": "Não conclua que fontes com opiniões diferentes necessariamente apresentam números incompatíveis. Compare primeiro as proposições específicas, as evidências e os critérios de avaliação usados por cada autor.",
        "steps": [
          "Localize autor, data, público e propósito de cada fonte.",
          "Separe dados mensuráveis de avaliações e qualificadores.",
          "Compare as afirmações sem ampliar a certeza ou inventar contradições."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Which sentence is primarily an opinion?",
        "options": [
          "The library has 3,000 books.",
          "The library opens on Monday.",
          "The library is the most welcoming place in town.",
          "The library is located on Main Street."
        ],
        "correctIndex": 2,
        "hint": "Look for a subjective judgment rather than a verifiable claim.",
        "solution": "Option C is correct: 'most welcoming' evaluates a place subjectively. Opening days, location and book counts are factual claims that can be checked, even if a particular claim could be inaccurate."
      },
      {
        "level": "intermediate",
        "prompt": "A text says 'Some students may benefit from short videos.' Which conclusion is supported?",
        "options": [
          "All students will improve their grades.",
          "Short videos guarantee success.",
          "No students benefit from videos.",
          "Short videos could help a portion of students."
        ],
        "correctIndex": 3,
        "hint": "Preserve the meanings of 'some' and 'may'.",
        "solution": "Option D is correct: 'some' limits the group and 'may' expresses possibility, not certainty. The other answers exaggerate the claim or contradict the original wording."
      },
      {
        "level": "advanced",
        "prompt": "A report states a city built 12 km of bike lanes; a columnist calls them a waste of money. What is the best reading?",
        "options": [
          "Both texts must be factually false.",
          "The report offers a verifiable quantity while the columnist expresses an evaluation.",
          "The columnist proves the city built no lanes.",
          "The two texts make identical factual claims."
        ],
        "correctIndex": 1,
        "hint": "Distinguish the quantity from the judgment about value.",
        "solution": "Option B is correct: the measured distance is a factual claim that can be verified, whereas 'waste of money' evaluates a policy. Different emphases do not establish a factual contradiction by themselves."
      }
    ]
  }
];
