# Kognos — Etapa 22: 56 aulas autorais aprofundadas

## Continuidade editorial

Esta etapa parte da branch `feat/curriculum-stage21-extended-batch`, do PR #81. Mantém conteúdo, identificadores, progresso e organização de todas as etapas anteriores. Não recria a aplicação, não modifica chaves, permissões ou banco de dados e não aciona IA ao aluno acessar material.

## Lote escrito e integrado

| Área | Novas aulas |
| --- | ---: |
| Matemática | 8 |
| Física | 6 |
| Química | 6 |
| Biologia | 6 |
| História | 4 |
| Geografia | 4 |
| Português | 4 |
| Literatura | 4 |
| Filosofia | 3 |
| Sociologia | 3 |
| Arte | 2 |
| Ciências | 2 |
| Inglês | 2 |
| Redação | 2 |
| **Total** | **56** |

Aula por tema: objetivo mensurável, três capítulos de básico a avançado, um exemplo numérico ou conceitual específico em cada capítulo, equívoco diagnosticado e corrigido, pistas e resolução em seis exercícios, um caso aplicado com resposta detalhada, duas conexões explicadas com temas já aprofundados. Os textos expõem hipóteses e limites dos modelos, distinguem fenômenos reais de exemplos didáticos e trabalham comparação de causas, conceitos e fontes.

Diferentemente de conteúdo escrito em tempo real por um modelo, as aulas são arquivos estáticos versionados (`authored-stage22-*.ts`), montados pelo renderizador editorial determinístico e testados contra o catálogo e schema de conteúdos. O padrão é o mesmo; as explicações, valores, exemplos e erros são próprios do assunto.

## Integração

- `authored-lessons-stage22.ts`: reúne todos os 56 tópicos, suas aulas e contextos e usa IDs do catálogo.
- `starter-lessons.ts`: prioriza a nova aula somente quando o par disciplina/tema corresponde ao catálogo.
- `everyday-lesson-contexts.ts`: insere 56 novos problemas cotidianos sem substituir os anteriores.
- `authored-lessons-stage22.test.ts`: verifica exclusividade frente às etapas anteriores, IDs originais, três níveis, seis exercícios, exemplos, contexto, conexão com material aprofundado e metadados pedagógicos.
- `everyday-lesson-contexts.test.ts`: verifica unicidade e associação dos 425 casos após a integração condicional de todos os PRs precedentes.

## Cobertura acumulada projetada após a cadeia de merges

| Métrica | Após Etapa 21 | Após Etapa 22 |
| --- | ---: | ---: |
| Aulas individuais aprofundadas | 369 | 425 |
| Capítulos | 1.107 | 1.275 |
| Exercícios comentados | 2.214 | 2.550 |
| Problemas cotidianos | 369 | 425 |
| Conexões entre temas aprofundados | 738 | 850 |
| Temas do total histórico de 1.512 ainda sem aula profunda | 1.143 | 1.087 |

Estes valores são **projeções condicionadas à fusão dos PRs anteriores**, não indicam que a `main` já contenha as aulas. Integrar a cadeia na ordem #76 → #77 → #79 → #80 → #81 → Etapa 22, sem pular bases.

## Limites editoriais

Cada aula permanece com `review: 'introductory'`. A autoria foi assistida por IA durante o desenvolvimento do código, **não no acesso do estudante**, e ainda precisa de revisão pedagógica humana, verificação de fontes e adequação a séries e vestibulares antes de qualquer alegação de homologação docente. Os exemplos não são questões oficiais.
