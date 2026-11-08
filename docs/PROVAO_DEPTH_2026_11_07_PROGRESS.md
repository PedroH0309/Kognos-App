# Kognos — Plano editorial de aprofundamento e cobertura

**Data de referência:** 2026-11-07 • **Branch:** `feat/subject-specific-depth-20261107` • **PR:** #93

## Diagnóstico

A interface universal de 10 etapas já é compartilhada pelas disciplinas, mas **apresentação não equivale a profundidade**. Uma parte do conteúdo ainda é roteirização introdutória de `starter-lessons.ts`, montada a partir de padrões gerais; outra parte utiliza material autoral específico ou aula correlata **parcial**. Um texto-fonte curto não pode ser apresentado como se fosse ensino completo apenas por ser dividido visualmente.

Os tópicos oficiais incluídos no cadastro do Provão Paulista totalizam **364 entradas temáticas distintas**, sendo **360 temas em 10 disciplinas** das três séries mais **4 critérios de Redação** registrados separadamente. Existem outras entradas no catálogo de ENEM, ETEC, Fuvest e Vunesp; a conclusão do Provão não encerraria automaticamente todo o Kognos.

## Conteúdo efetivamente aprofundado nesta branch

- **81 aulas autorais específicas e aprofundadas**, uma por tema identificado por prefixo oficial estrito, sem pareamento difuso.
- **243 capítulos** progressivos (fundamentos, aplicação e aprofundamento).
- **243 questões objetivas originais**, A–D com `correctIndex`, dica e solução comentada específica, sem respostas dissertativas.
- Explicações por nível com conteúdos disciplinares, exemplos resolvidos, condições de validade e erros frequentes.
- **Nenhuma homologação docente presumida**. A etiqueta editorial continua identificando conteúdo autoral não homologado.

### Lista exata das aulas novas

### Biologia (11)
- Construção e análise de árvores filogenéticas
- Organização celular dos seres vivos
- Pirâmides ecológicas
- Sucessão ecológica
- Herança de grupos sanguíneos na espécie humana
- Código genético e síntese proteica
- Evidências da evolução biológica
- Divisões celulares: compreensão das funções da mitose e da meiose
- Metabolismo energético: energia para a vida
- Ciclos biogeoquímicos: água, oxigênio, carbono e nitrogênio
- A 1ª e 2ª Lei de Gregor Mendel

### Filosofia (5)
- O contratualismo clássico
- Direitos Humanos
- A Filosofia e o filosofar
- As abordagens racionalistas e empiristas do conhecimento
- Questões éticas contemporâneas

### Física (11)
- Trabalho realizado por forças conservativas e não conservativas
- Resistores. Primeira Lei de Ohm
- Escalas termométricas. As escalas Celsius
- Comprimento de onda, período e frequência
- Primeira e segunda Leis da Termodinâmica
- Fenômeno da refração. Índice de refração absoluto
- Lei de Coulomb. Campo elétrico
- Potência elétrica. Efeito joule. Consumo de energia elétrica. O quilowatt-hora
- Movimentos uniformes e uniformemente variados. Suas funções horárias
- Leis de Newton: Princípio da inércia
- Calor como forma de energia em trânsito. Capacidade térmica, calor específico e calor latente

### Geografia (5)
- Os espaços supranacionais
- O espaço geográfico e a globalização
- Intemperismo, erosão
- A geopolítica da água
- A cartografia como recurso para a compreensão espacial dos fenômenos geográficos

### História (12)
- Feudalismo e mundo feudal
- Expansão marítima e constituição do espaço atlântico
- Iluminismo e Liberalismo
- A Revolução Francesa e a era napoleônica
- Primeira Guerra Mundial
- Revolução Russa
- Segunda Guerra Mundial
- A Guerra Fria e os conflitos regionais
- O Regime Civil-Militar
- Revolução Industrial
- Primeira República: política, economia e movimentos sociais
- Getúlio Vargas: do governo provisório ao Estado Novo

### Inglês (3)
- Localização de informação específica
- Compreensão da relação entre conteúdos de diferentes textos
- Compreensão crítica de textos: discriminação entre fato e opinião

### Matemática (7)
- Porcentagem, taxas e índices
- Função exponencial e função logarítmica
- Arranjos, permutações e combinações simples
- Áreas de polígonos
- Poliedros e corpos redondos - cálculo de áreas, volume e capacidade
- Função quadrática: Conceitos e resolução de problemas
- Probabilidade da união e da intersecção de dois ou mais eventos

### Português (6)
- Concordância nominal e concordância verbal
- Figuras de Linguagem
- Regência nominal e regência verbal
- Classes de palavras: substantivo, artigo
- Frase, oração e período
- Coordenação e subordinação. Conectivos

### Química (17)
- Operações envolvendo soluções (diluições e misturas de soluções com ou sem reação química)
- Potenciais-padrão de redução
- As principais interações intermoleculares
- Desintegração radioativa: meia-vida, datação e uso de radioisótopos
- Equações químicas e balanceamento
- Cinética química
- Reações de oxirredução e números de oxidação
- Conceito de entalpia e Lei de Hess
- Reações nucleares: fissão e fusão nucleares
- Principais características e propriedades de ácidos, bases, sais e óxidos
- Equilíbrio em sistemas homogêneos e heterogêneos
- Modelos atômicos de Dalton, Thomson, Rutherford e Bohr
- Geometria molecular
- Lei de Lavoisier e Lei de Proust
- Produto iônico da água e escalas de pH e pOH
- Cálculos estequiométricos: massa, volume, quantidade de matéria (mol), massa molar
- Solubilidade e concentrações (porcentagem, ppm, g/L, mol/L, mol/kg, conversões de unidades)

### Sociologia (4)
- Pluralismo cultural: a persistência do etnocentrismo
- Movimentos sociais e novas formas de participação política
- A representação e os partidos políticos
- Preconceitos, estereótipos e outras formas de discriminação social

## Cobertura ainda pendente

Após este lote, **283 itens do Provão permanecem fora desta série de aulas aprofundadas**. Alguns deles já têm aula autoral de outra etapa ou apoio parcial; outros têm apenas roteiro introdutório. Esses grupos **não são equivalentes a 288 conteúdos ausentes**, e tampouco significam que os 76 temas aprofundados tenham sido homologados por docentes. O teste `provao-depth-coverage.test.ts` calcula em cada commit os grupos `deep_specific`, `specific_unverified`, `partial_support` e `introductory_only` e registra totais nos logs.

Aulas **publicadas pelo painel editorial do Supabase** têm prioridade sobre os materiais embarcados no código. Esta auditoria cobre apenas o catálogo offline; é necessário revisar publicações do banco separadamente. Mudanças neste PR não alteram dados de estudantes, IDs curriculares ou registros de questões e progresso.

## Critérios de aceitação para novos lotes

1. Texto ORIGINAL, correto e específico do assunto; não repetir a descrição do edital como teoria nem encher espaço com orientações vagas.
2. Pelo menos três etapas: fundamentos, desenvolvimento/aplicação e aprofundamento com condicionantes, exceções e justificativas.
3. Cada seção deve trazer exemplo resolvido adequado à disciplina, etapas demonstráveis e erro frequente fundamentado; visualização interativa somente quando agregar valor.
4. Somente questões com **quatro alternativas distintas**, gabarito formal e explicação da correta; distratores relevantes à habilidade avaliada.
5. Vincular a aula ao **identificador curricular existente** sem mudar histórico, edição, autenticação ou status de arquivamento de publicações.
6. Executar `npm test`, `npm run test:content-db`, `npm run test:design`, `npm run typecheck` e `npm run build`.
7. Revisão visual e de conteúdo antes de publicar; selo de revisão docente somente quando realmente houver validação humana.

## Continuação

A auditoria automática deve direcionar novas etapas, especialmente temas da Química, Física, Biologia e História que ainda usam roteiros genéricos. O trabalho só se encerra quando o catálogo inteiro tiver conteúdo específico validado, não quando o número de capítulos preenchidos atingir a contagem curricular. 

## Quinta leva — continuidade automática

Adicionados cinco módulos originais com três níveis e questões de alternativas A–D: ácidos/bases/sais/óxidos, equilíbrio químico homogêneo/heterogêneo, Lei de Coulomb e campo elétrico, evidências da evolução, volumes e áreas de sólidos. CI e revisão editorial são requisitos separados; não indicar homologação humana inexistente. A auditoria por categoria e os testes de múltipla escolha devem permanecer válidos em cada novo commit.

## Verificação transversal de avaliação objetiva

O teste `provao-depth-coverage.test.ts` passou a percorrer as aulas aprofundadas pelo catálogo completo e a rejeitar questões sem quatro alternativas distintas, sem gabarito indexado válido ou sem correção comentada suficiente. Também verifica a presença de avaliação em cada um dos três níveis e a integração com o conversor editorial. Essa garantia vale para o material embarcado e não constitui auditoria das aulas externas publicadas no Supabase. O commit de teste aguarda sua própria execução de CI antes de ser considerado aprovado.

## Sexta leva — aprofundamento específico de bases curriculares

Acrescentadas cinco aulas autorais do edital: **Leis de Newton**, **funções quadráticas**, **modelos atômicos**, **mitose e meiose**, **Regime Civil-Militar brasileiro**. Foram elaborados 15 capítulos com casos resolvidos, erros conceituais e 15 questões A–D com gabarito verificado em teste dedicado `provao-depth-batch06.test.ts`. O PR permanece em rascunho e o conteúdo editorial publicado no Supabase mantém precedência. Status de homologação docente não foi alterado.

## Sétima leva — prática disciplinar com problemas próprios

Mais cinco aulas específicas: geometria molecular e polaridade (Química), metabolismo energético e comparação de rotas celulares (Biologia), calor sensível/latente e calorimetria (Física), união e interseção de eventos e probabilidade condicional (Matemática), Revolução Industrial e conflitos sociais (História). Todas têm fundamentos, aplicação progressiva, caso numérico ou contextual completo por nível e quinze questões objetivas A–D. Os testes dedicados validam seus identificadores e gabaritos, sem substituir revisão pedagógica humana.

## Oitava leva — leitura crítica e sintaxe em contexto

Acrescentadas duas aulas autorais específicas: **coordenação, subordinação e conectivos** (Português) e **distinção entre fatos, opiniões, inferências e evidências em inglês** (Inglês). Cada uma possui três níveis, exemplos de interpretação e reescrita, erros de leitura frequentes e três questões A–D comentadas. Identificadores curriculares preservados e homologação docente ainda pendente.

## Nona leva — Filosofia e Sociologia

Duas aulas autorais adicionais: **racionalismo, empirismo e problema da indução** (Filosofia) e **preconceitos, estereótipos, discriminação e desigualdade institucional** (Sociologia). Cada uma contém três capítulos com teoria, exemplos concretos, raciocínio passo a passo e três questões A–D com justificativa. Não há aprovação docente presumida. Os testes específicos verificam gabaritos e IDs curriculares.

## Décima leva — Cartografia e ética contemporânea

Aulas específicas novas: **cartografia como linguagem espacial** (escalas, projeções, mapas temáticos e análise crítica de dados territoriais) e **questões éticas contemporâneas** (moral, deveres, consequências, virtudes, privacidade e governança tecnológica). Seis capítulos, seis questões A–D com gabarito e solução, exemplos resolvidos e validação dedicada. Revisão docente permanece pendente.

## Décima primeira leva — Ciências da Natureza e História

Cinco temas específicos: **Lei de Lavoisier e Lei de Proust** e **produto iônico da água, pH e pOH** (Química); **potência elétrica, efeito Joule e kWh** (Física); **ciclos da água, carbono, oxigênio e nitrogênio** (Biologia); **Primeira República, economia cafeeira, movimentos sociais e crise de 1930** (História). Quinze capítulos progressivos com explicações de mais de 750 caracteres, exemplos resolvidos, limites dos modelos, erros frequentes e quinze questões A–D originais. Validação transversal e teste dedicado verificam gabaritos, cobertura e preservação de IDs. Revisão docente ainda pendente.

## Verificação de regressão — 2026-11-08

A execução GitHub Actions #42440731240 falhou em três testes por um `hint` curto na questão básica de potência elétrica (`Use P=UI.`), abaixo do limite de dez caracteres do validador editorial. O texto da dica foi substituído por uma orientação completa, preservando o gabarito. A execução #42444887367 passou dos testes unitários e segurança/design, mas falhou no TypeScript estrito (`TS7022`) na declaração conjunta de `s` e `q` em `provao-depth-batch11.test.ts`. As variáveis foram tipadas explicitamente como `CourseSection` e `CourseTask` em commit posterior. **Não considerar a branch validada até que um novo workflow complete todas as etapas com sucesso.** Nenhum novo tema foi contabilizado nessa correção; a cobertura permanece em 66/364 no Provão.

## Décima segunda leva — Ciências da Natureza e História

Foram incorporadas cinco aulas específicas: **cálculos estequiométricos**, **concentração e solubilidade**, **MRU e MUV**, **primeira e segunda leis de Mendel** e **Era Vargas até o Estado Novo**. Cada aula tem três níveis, três exemplos trabalhados distintos e três questões A–D com correção. Os conteúdos são originais, não oficiais, não homologados e exigem revisão docente. A contagem restante se refere apenas à série específica do Provão; ENEM, ETEC, Fuvest e Vunesp seguem na auditoria transversal.

## Correção de validação — 2026-11-08

A CI do commit `2d704cf` falhou em dois testes unitários relacionados à qualidade editorial: `provao-depth-batch12.test.ts` e `provao-depth-lessons.test.ts` exigiam exemplo resolvido com ao menos 180 caracteres. A causa identificada foi o exemplo do nível básico da aula **Movimentos uniformes e uniformemente variados**, com 174 caracteres. O exemplo foi ampliado com a condição de validade do movimento uniformemente variado, sem mudar o gabarito ou reduzir o rigor dos testes. A aprovação do novo commit depende de uma nova execução completa da CI. Nenhum tema novo foi declarado concluído nesta correção.

## Lote 13 — Química, Física, Biologia e História

Foram acrescentadas cinco aulas específicas, com três capítulos por tema e três questões de quatro alternativas por aula: diluição e misturas com/sem reação; decaimento radioativo, datação e radioisótopos; trabalho de forças conservativas e não conservativas; cladogramas e sinapomorfias; feudalismo, vassalagem e transformações medievais. Os quinze capítulos apresentam explicação autoral longa, exemplo calculado ou analisado, hipóteses de validade e erros frequentes. A validação de respostas e gabaritos é coberta por `provao-depth-batch13.test.ts`; revisão docente ainda pendente. Cobertura offline: 76 de 364 entradas do Provão nesta série, 288 fora; catálogo multi-exame maior continua pendente. A CI deve ser consultada no commit mais recente antes de qualquer alegação de aprovação.

## Revisão da décima terceira leva — correção de regressões da CI

O GitHub Actions #42457518704 falhou nos testes unitários antes de executar segurança, design, TypeScript e build. A inspeção dos logs apontou dois defeitos de qualidade em `provao-depth-batch13-core.ts`: objetivos didáticos curtos demais para o contrato de conteúdo (`objective.length >= 75`) e ressalva de vassalagem/servidão inferior a 50 caracteres. Foram substituídos os cinco objetivos por objetivos mensuráveis e específicos de cada assunto, e esclarecida a diferença histórica entre vassalagem e servidão. Os critérios de teste não foram enfraquecidos; gabaritos, IDs e dados dos usuários não foram alterados. Nova CI precisa concluir antes de declarar a branch validada. Esta execução priorizou reparar o bloqueio de qualidade anterior e não acrescentou cinco novos temas; a contagem permanece 76/364.

## Décima quarta leva — Química, Física, Biologia e História

Cinco tópicos adicionais do programa oficial: **potenciais-padrão de redução**, **interações intermoleculares**, **resistores e leis de Ohm**, **organização celular dos seres vivos** e **expansão marítima e espaço atlântico**. Cada tópico recebeu três capítulos de conteúdo específico com exemplos calculados ou interpretados passo a passo e três avaliações A–D comentadas, sem dissertativas. Os testes `provao-depth-batch14.test.ts` verificam correspondência de ID, três níveis, densidade de explicações e gabaritos. O conteúdo permanece autoral, não oficial e sem homologação docente. O catálogo ENEM/ETEC/Fuvest/Vunesp continua sujeito à auditoria transversal de maturidade.
