# Etapa 19 — mais 64 aulas autorais específicas, com modelo compacto

A etapa adiciona **64 assuntos antes não aprofundados**, com três capítulos e seis questões comentadas cada um. O material é escrito especificamente por assunto, com situações contextualizadas e correções de equívocos; a montagem da interface e dos exercícios usa o modelo editorial reutilizável da Etapa 18. A autoria é assistida por IA durante o desenvolvimento, mas **não há chamada de IA ao abrir a aula**; todo o conteúdo é versionado estaticamente. Ainda **não passou por homologação docente**.

## Conteúdos incorporados

| Disciplina | Assuntos |
| --- | --- |
| Matemática | MDC e MMC; Juros simples; Sistemas de equações; Mediana e moda; Variância e desvio padrão |
| Física | Aceleração; Movimento uniforme; Peso, normal e tração; Energia cinética |
| Química | Número atômico, massa e isótopos; Distribuição eletrônica; Ácidos, bases, sais e óxidos; Massa molar |
| Biologia | Células procarióticas e eucarióticas; Organelas e citoplasma; Heredogramas; Segunda lei de Mendel |
| História | Mesopotâmia e Egito; Feudalismo; Renascimento cultural; Revolução Francesa |
| Geografia | Relevo brasileiro; Formação e conservação dos solos; Fontes renováveis e não renováveis de energia; Transição demográfica |
| Português | Gêneros publicitários; Argumentação e estratégias persuasivas; Polissemia e ambiguidade; Verbos: tempos, modos e aspectos |
| Literatura | Trovadorismo; Quinhentismo e literatura de informação; Modernismo: poesia de 1930; Literatura contemporânea |
| Redação | Competências da redação do ENEM; Fuga ao tema e tangenciamento; Revisão gramatical e reescrita; Artigo de opinião |
| Inglês | Inferência de sentidos em inglês; Artigos e quantificadores em inglês; Conectivos e relações lógico-discursivas em inglês; Leitura de tirinhas e anúncios em inglês |
| Espanhol | Inferência e vocabulário em espanhol; Possessivos e demonstrativos em espanhol; Gêneros textuais e multimodalidade em espanhol |
| Filosofia | Pré-socráticos; Empirismo de Locke e Hume; Liberdade e responsabilidade; Bioética e ética ambiental |
| Sociologia | Ideologia e hegemonia; Taylorismo, fordismo e toyotismo; Movimentos sociais; Globalização e sociedade em rede |
| Arte | Perspectiva e composição visual; Patrimônio material e imaterial; Arte medieval; Cultura popular e erudita |
| Educação Física | Ginásticas e práticas de condicionamento; Práticas corporais de aventura; Sedentarismo e qualidade de vida; Práticas corporais e sustentabilidade |
| Ciências | Modelos atômicos introdutórios; Magnetismo; Plantas e fotossíntese; Vírus e prevenção de doenças |

A distribuição não é uniformemente quatro por disciplina: Matemática recebe **5** e Espanhol **3**, pois o tema `Subjuntivo em espanhol` já possuía aula aprofundada na Etapa 14, e o currículo detalhado de Espanhol contém 15 tópicos, que ficam integralmente preparados após esta etapa. Também se evitou duplicar `Média aritmética e ponderada`, de uma etapa anterior.

## Cobertura acumulada após incorporação dos PRs #76, #77 e deste PR

| Medida | Antes da Etapa 19 | Adição | Total |
| --- | ---: | ---: | ---: |
| Aulas específicas | 197 | 64 | **261** |
| Capítulos | 591 | 192 | **783** |
| Exercícios com solução | 1182 | 384 | **1566** |
| Situações cotidianas | 197 | 64 | **261** |
| Links de conhecimento | 394 | 128 | **522** |

Dos **1.512** assuntos auditados anteriormente no catálogo global, **1.251 ainda não têm aula específica aprofundada**, embora tenham conteúdo introdutório de apoio. Os números de cobertura dependem dos merges em ordem; não representam aulas já disponíveis na `main` enquanto os PRs estiverem abertos.

## Implementação

- `authored-stage19-seed.ts`: padroniza oito campos editoriais por capítulo, preservando teoria, problema, pista, resolução e explicação do erro escritos para cada tema.
- `authored-stage19-{discipline}.ts`: 16 arquivos organizados por área com as 64 aulas originais.
- `authored-lessons-stage19.ts`: agregador estático que utiliza `renderAuthoredBlueprint` da etapa anterior sem modificar API nem banco de dados.
- `starter-lessons.ts` e `everyday-lesson-contexts.ts`: aulas por assunto canônico e contextos associados, preservando o fluxo **Matérias → Conteúdos → Aula**.
- `authored-lessons-stage19.test.ts`: verificações de unicidade, ID estável, autoria sem revisão docente, 192 capítulos, 384 exercícios, links preparados e 261 cenários.
- `everyday-lesson-contexts.test.ts`: atualização da expectativa de 197 para 261 sem apagar casos anteriores.

Preservados dados, progresso, permissões, Supabase, autenticação, cotas, esquemas SQL, variáveis de ambiente e funcionalidades de prática. Exemplos numéricos e cenários são didáticos, não dados observados nem questões oficiais copiadas. Testes de software não constituem revisão pedagógica especializada.

## Sequência de PRs

**PR #76** (Etapa 17) e **PR #77** (Etapa 18) ainda não haviam sido incorporados à `main` quando este lote foi iniciado. O novo PR parte de `feat/curriculum-blueprint-stage18-64`; é um PR **encadeado**, que precisa da integração dos anteriores antes de alterar sua base para `main`. Não realizar merges automaticamente.
