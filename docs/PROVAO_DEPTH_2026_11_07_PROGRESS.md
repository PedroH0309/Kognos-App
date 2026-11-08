# Kognos — Plano editorial de aprofundamento e cobertura

**Data de referência:** 2026-11-07 • **Branch:** `feat/subject-specific-depth-20261107` • **PR:** #93

## Diagnóstico

A interface universal de 10 etapas já é compartilhada pelas disciplinas, mas **apresentação não equivale a profundidade**. Uma parte do conteúdo ainda é roteirização introdutória de `starter-lessons.ts`, montada a partir de padrões gerais; outra parte utiliza material autoral específico ou aula correlata **parcial**. Um texto-fonte curto não pode ser apresentado como se fosse ensino completo apenas por ser dividido visualmente.

Os tópicos oficiais incluídos no cadastro do Provão Paulista totalizam **364 entradas temáticas distintas**, sendo **360 temas em 10 disciplinas** das três séries mais **4 critérios de Redação** registrados separadamente. Existem outras entradas no catálogo de ENEM, ETEC, Fuvest e Vunesp; a conclusão do Provão não encerraria automaticamente todo o Kognos.

## Conteúdo efetivamente aprofundado nesta branch

- **121 aulas autorais específicas e aprofundadas**, uma por tema identificado por prefixo oficial estrito, sem pareamento difuso.
- **363 capítulos** progressivos (fundamentos, aplicação e aprofundamento).
- **363 questões objetivas originais**, A–D com `correctIndex`, dica e solução comentada específica, sem respostas dissertativas.
- Explicações por nível com conteúdos disciplinares, exemplos resolvidos, condições de validade e erros frequentes.
- **Nenhuma homologação docente presumida**. A etiqueta editorial continua identificando conteúdo autoral não homologado.

### Lista exata das aulas novas

### Biologia (12)
- Construção e análise de árvores filogenéticas
- Organização celular dos seres vivos
- Envoltórios celulares; membrana plasmática
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

### Física (12)
- Trabalho realizado por forças conservativas e não conservativas
- Energia mecânica: energia cinética, potencial gravitacional e potencial elástica
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

### História (13)
- Feudalismo e mundo feudal
- Renascimento Cultural
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

### Química (19)
- Operações envolvendo soluções (diluições e misturas de soluções com ou sem reação química)
- Potenciais-padrão de redução
- Número atômico e de massa. Semelhanças entre átomos
- Propriedades coligativas: conceitos e aspectos qualitativos
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

Após este lote, **262 itens do Provão permanecem fora desta série de aulas aprofundadas**. Alguns deles já têm aula autoral de outra etapa ou apoio parcial; outros têm apenas roteiro introdutório. Esses grupos **não são equivalentes a 278 conteúdos ausentes**, e tampouco significam que os 86 temas aprofundados tenham sido homologados por docentes. O teste `provao-depth-coverage.test.ts` calcula em cada commit os grupos `deep_specific`, `specific_unverified`, `partial_support` e `introductory_only` e registra totais nos logs.

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

## Lote 15 — estrutura atômica, energia, membranas, Renascimento e coligativas

Foram adicionados cinco temas oficiais não repetidos: **número atômico, massa e semelhanças entre átomos** (Química); **energia mecânica e conservação** (Física); **membrana plasmática e transporte** (Biologia); **Renascimento Cultural** (História); **propriedades coligativas** (Química). Cada tema possui três capítulos específicos com teoria, exemplo resolvido e erros comuns e três questões A–D com gabarito e solução. O teste dedicado `provao-depth-batch15.test.ts` verifica 15 gabaritos, níveis, IDs e integridade editorial. Material autoral não oficial, sem homologação docente. A CI deve ser consultada antes de declarar aprovação. Nenhum dado de estudantes, esquema SQL ou publicação editorial foi alterado.

## Verificação da 15ª leva — 2026-11-08

A execução [GitHub Actions #42469341319](https://github.com/PedroH0309/Kognos-App/actions/runs/42469341319), associada ao commit `6b1a95d27af07a87ceaa73e213e9223c8f49dc52`, terminou com `conclusion: success`. O job `tests` confirmou individualmente: Unit tests, Content security (PostgreSQL / two users), Design tests, Type checking e Production build. Essa aprovação é exclusiva do commit indicado, não constitui revisão pedagógica docente e não autoriza merge ou deploy. Nenhuma aula nova é contabilizada nesta atualização de rastreabilidade; a cobertura permanece 86/364, com 278 entradas fora desta série.

## Décima sexta leva — composição, eletrosfera, ecologia e formação estatal

Foram incluídas cinco aulas originais: **fórmulas químicas empíricas e moleculares** e **diagrama de Linus Pauling e configuração eletrônica** (Química), **composição vetorial de forças** (Física), **papéis ecológicos e econômicos de bactérias e fungos** (Biologia) e **formação dos Estados modernos** (História). São 15 capítulos com explicações específicas de pelo menos 750 caracteres, 15 exemplos resolvidos, limites e erros frequentes e 15 questões A–D com gabarito comentado. `provao-depth-batch16.test.ts` verifica identidade oficial única, integração ao resolvedor, exemplos, questões e gabaritos. Total da série: **91/364**, com **273 entradas ainda fora**; o catálogo de 1.512 tópicos multi-exame continua em auditoria. Conteúdo autoral, não oficial, sem homologação docente. CI da nova leva pendente; não mesclar nem publicar sem revisão.

## Décima sétima leva — água, cinemática, reprodução, colonização e deposição ácida

Cinco aulas autorais específicas foram incorporadas ao resolvedor: **tratamento de água** e **óxidos e chuva ácida** (Química); **velocidade e aceleração escalar/vetorial** (Física); **reprodução assexuada e sexuada em animais** (Biologia); e **mercantilismo e colonização** (História). São 15 capítulos com explicações de 750+ caracteres e 15 exemplos resolvidos, além de 15 questões exclusivamente objetivas com quatro alternativas distintas, gabaritos e correções comentadas. O teste `provao-depth-batch17.test.ts` verifica identidade curricular, preservação dos IDs, autoria, profundidade e respostas. Cobertura editorial da série: **96/364**, com **268 entradas restantes**. A auditoria do catálogo multi-exame continua necessária. Conteúdo não oficial, não homologado por docentes; a CI desta leva deve ser verificada antes de qualquer afirmação de aprovação.

## Décima oitava leva — balanceamento, geometria, gravitação, sucessão e industrialização

Foram registradas cinco aulas originais: **equações químicas e balanceamento**, **geometria molecular** (Química), **gravitação universal e campo gravitacional** (Física), **sucessão ecológica** (Biologia) e **Revolução Industrial** (História). São 15 capítulos específicos com pelo menos 750 caracteres por explicação, 15 exemplos resolvidos e 15 questões A–D com respostas e comentários, condições de validade e erros frequentes. O teste `provao-depth-batch18.test.ts` verifica correspondência única com o catálogo, IDs preservados, estrutura, exemplos, alternativas e gabaritos. Cobertura editorial acumulada declarada: **101/364**, com **263 entradas ainda não cobertas por esta série**; não implica cobertura integral de ENEM, ETEC, Fuvest ou Vunesp. A 17ª leva passou na [CI #42473055078](https://github.com/PedroH0309/Kognos-App/actions/runs/42473055078). A 18ª leva requer validação independente no GitHub Actions. Conteúdo autoral não oficial, sem homologação docente; não mesclar ou publicar antes de revisão.

## Correção de auditoria da 18ª leva e 19ª leva

A execução [CI #42473589965](https://github.com/PedroH0309/Kognos-App/actions/runs/42473589965) falhou nos testes unitários: quatro temas da 18ª leva já estavam cadastrados em módulos anteriores (**balanceamento**, **geometria molecular**, **sucessão ecológica** e **Revolução Industrial**). A contagem anunciada de 101 era incorreta; havia apenas **97 entradas únicas**. Removemos os quatro registros duplicados de `provao-depth-batch18-core.ts`, preservando apenas **gravitação universal**, e ajustamos seu teste. As aulas anteriores desses quatro temas permanecem preservadas. 

A 19ª leva acrescenta cinco aulas autorais específicas: **eletronegatividade e polaridade molecular**; **interações íon–dipolo** (Química); **força peso, normal, tração e atrito** (Física); **fisiologia comparada dos animais** (Biologia); **ocupação do litoral e do interior colonial** (História). São 15 capítulos com explicações de pelo menos 750 caracteres, exemplos resolvidos, limites, erros comuns e 15 questões objetivas A–D com gabaritos comentados. A contagem prevista após deduplicação é **102/364** entradas únicas, **306 capítulos** e **306 questões**, com **262 entradas ainda fora desta série**, sujeita à confirmação pela auditoria automatizada. `provao-depth-batch19.test.ts` acrescenta verificação de unicidade de todas as chaves, identidade de cada tema e contrato pedagógico. A CI da nova revisão está pendente; não alegar aprovação, homologação docente, merge ou deploy.

## Vigésima leva — 2026-11-08

Corrigida regressão de TypeScript da 19ª leva: a CI #42478737602 apresentou TS7022 em `provao-depth-batch19.test.ts`, linha 22, apesar de testes unitários, segurança de dois usuários e design aprovados; o `const` compartilhado foi separado em declarações distintas. A nova CI deve confirmar a correção, incluindo build, antes de ser declarada verde.

Adicionadas cinco aulas originais específicas, não oficiais e sem homologação docente: **Atmosfera terrestre: composição e características** e **Interações da água com outras substâncias** (Química); **Sistemas geocêntrico e heliocêntrico. Leis de Kepler** (Física); **Evidências da evolução biológica** (Biologia); e **Aspectos políticos e socioculturais do Antigo Regime** (História). Cada aula possui três capítulos progressivos de 750+ caracteres, exemplos específicos com passos, limites e três questões A–D com gabarito e correção comentada. Novo teste `provao-depth-batch20.test.ts` exige registro único, identidade do tópico, preservação de IDs, capítulos e alternativas. **Cobertura editorial prevista após CI: 107/364 aulas, 321 capítulos e 321 questões; 257 entradas do Provão ainda não aprofundadas nesta série.** A auditoria de ENEM, ETEC, Fuvest e Vunesp segue incompleta; revisão docente pendente. Sem merge ou deploy.

## Vigésima primeira leva — correção de duplicação e cinco novos temas

A CI da 20ª leva (GitHub Actions #42482622995) falhou em testes unitários porque o cadastro continha **107 registros mas apenas 106 tópicos distintos**. A aula `Biologia · Evidências da evolução biológica` já existia no lote 05. Removemos somente o registro redundante do lote 20, mantendo a aula original e ajustando seu teste de lote para quatro novos temas. Não se contabiliza a duplicata como cobertura adicional.

O lote 21 inclui **cinco novos temas específicos**: `Química · Estado físico e propriedades dos materiais`, `Física · Referencial inercial. Movimentos retilíneos. Situações de equilíbrio`, `Biologia · Método científico`, `História · Diversidade religiosa: paganismo, judaísmo, cristianismo e islamismo` e `Química · Segurança na aquisição, armazenagem e utilização de produtos químicos domésticos de produtos…`. Cada um possui três capítulos progressivos com explicações próprias de mais de 750 caracteres, três exemplos resolvidos, erros e condições de validade, e três questões objetivas A–D com gabaritos comentados. Testes de integração e unicidade: `provao-depth-batch21.test.ts` e auditoria geral existente.

Cobertura editorial prevista após o lote 21: **111 tópicos distintos de 364**, **333 capítulos**, **333 questões objetivas**, **253 tópicos ainda sem esta cobertura**. Estes valores devem ser confirmados por CI; não representam homologação pedagógica nem abrangem integralmente ENEM, ETEC, Fuvest e Vunesp. Nenhuma alteração de dados, IDs, autenticação, Supabase ou serviços pagos. PR em rascunho, sem merge ou deploy.

## Vigésima segunda leva — correções de TypeScript e cinco temas

A CI #42485690594 do lote 21 concluiu **testes unitários, segurança de dois usuários e design com sucesso**, mas falhou em TypeScript com TS7022 nos arquivos de teste dos lotes 19, 20 e 21. Os três testes receberam tipagem explícita `(typeof lesson.tasks)[number]` para as variáveis indexadas, sem alterar conteúdo pedagógico ou dados persistidos.

Aulas autorais específicas do lote 22: **Química — Gases do efeito estufa** (absorção infravermelha, ppm e balanço radiativo); **Física — O modelo do gás ideal** (pV=nRT, transformações e compressibilidade); **Biologia — Poluição ambiental e os impactos da intervenção humana** (DBO, eutrofização, biomagnificação e monitoramento); **História — O escravismo na Grécia e em Roma** (cidadania, economia e comparação crítica de fontes); **Química — Energia de ativação** (perfis, Arrhenius e catalisadores). Cada uma contém três capítulos progressivos de pelo menos 750 caracteres, exemplos trabalhados, condições e limitações, e três questões objetivas A–D com correção comentada. Testes específicos em `provao-depth-batch22.test.ts` e auditoria geral em `provao-depth-coverage.test.ts`.

Cobertura editorial prevista: **116/364 tópicos do Provão**, **348 capítulos**, **348 questões**, **248 tópicos ainda pendentes**. Os totais dependem da confirmação da CI. O catálogo de ENEM, ETEC, Fuvest e Vunesp permanece parcialmente introdutório. Autoria Kognos original, não oficial, sem homologação docente; revisão especializada pendente. Sem alterações de schema, Supabase, autenticação, IDs ou chaves. PR #93 continua em rascunho, sem merge ou deploy.

## Vigésima terceira leva — cinco temas e correção de tipagem

A CI da 22ª leva (#42487528480) concluiu testes unitários, segurança com PostgreSQL e dois usuários e design com sucesso, mas falhou no TypeScript com quatro erros `TS2502` em `provao-depth-batch19.test.ts` a `provao-depth-batch22.test.ts`. Substituímos os tipos autorreferentes `(typeof lesson.tasks)[number]` por importação explícita de `CourseTask` nesses quatro testes. O build anterior foi pulado devido à falha; a nova CI precisa confirmar o resultado.

Cinco novos temas autorais específicos foram cadastrados: Química — **Indicadores, condutibilidade elétrica, reação com metais e neutralização**; Física — **Representação gráfica de posição, velocidade e aceleração**; Biologia — **Alternativas energéticas e equilíbrio dos ecossistemas**; História — **Crise e derrocada do Império Romano do Ocidente**; Química — **Modelos atômicos de Dalton, Thomson, Rutherford e Bohr**. Cada tema inclui três capítulos progressivos de 750+ caracteres, três exemplos resolvidos com condições e erros frequentes, e três questões A–D com gabaritos comentados, todos originais e não oficiais, sem homologação docente. Testes: `provao-depth-batch23.test.ts`, além da auditoria global.

Cobertura editorial prevista: **121/364 temas distintos**, **363 capítulos**, **363 questões objetivas**, **243 entradas do Provão ainda pendentes**. Não se confunde essa contagem com conclusão de todo o catálogo multi-exame. PR #93 segue em rascunho, sem merge nem deploy. Validação integral de CI pendente para o commit final desta leva.


## Correção de cobertura e integridade — 2026-11-08

A CI #628 falhou em oito testes unitários: havia 121 registros autorais, mas apenas 120 temas distintos. O lote 23 repetia **Química — Modelos atômicos de Dalton, Thomson, Rutherford e Bohr**, já aprofundado no lote 06. O quinto tema do lote 23 foi substituído por **Química — A eletrosfera e o diagrama de Linus Pauling**, tópico real do programa. A nova aula aborda capacidades dos subníveis, preenchimento, íons, regra de Hund, exceções Cr/Cu e remoção de 4s em Fe²⁺/Fe³⁺. São três capítulos autorais progressivos, exemplos resolvidos e três questões objetivas A–D com gabaritos comentados. O teste específico do lote 23 foi atualizado. Cobertura esperada: **121 tópicos distintos de 364**, restando **243** do Provão; demais exames continuam incompletos. Este valor é uma expectativa, **não validação de CI**. Material original Kognos, não oficial, sem homologação docente. Sem merge, deploy ou mudanças de schema.
