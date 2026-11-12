# Auditoria de reutilização curricular — 10/11/2026

Material autoral Kognos, não oficial, sem homologação docente.

## Escopo
O registro `canonical-lesson-reuse.ts` compartilha uma única referência editorial para assuntos de **mesma disciplina e título integral idêntico** presentes em múltiplos exames. A associação usa o ID canônico existente e não altera IDs históricos, progresso, rotas, Supabase ou RLS.

A auditoria `canonicalReuseAudit()` agora distingue:
- entradas e títulos exatos por exame;
- grupos de aulas profundas com vínculo entre provas e vínculos por exame;
- tópicos curriculares com/sem aula profunda;
- referências compartilhadas que evitariam cópias futuras, **não** registros duplicados já apagados;
- exclusões reais de duplicações persistidas nesta mudança: **zero**;
- aliases semânticos de nomes diferentes aprovados: **nenhum**;
- associações parciais: **uma candidata editorial** (`Citologia` ↔ `Organização celular dos seres vivos`), habilitada somente quando os dois títulos e a aula-fonte existem. Não é equivalência integral nem homologação docente.

As quantidades variáveis são calculadas a partir dos catálogos no código, e não inferidas de totais históricos. `unresolvedSemanticCandidates=0` significa apenas que as candidatas cadastradas estão resolvidas quanto à existência de fonte e destino, **não** que todo o catálogo foi revisado nem que não há ambiguidades.

## Limitações e próximos lotes
Não há equivalência semântica validada para títulos diferentes; comparar escopo, série, objetivos, profundidade e fontes antes de aprovar cada alias. Títulos amplos como Citologia não herdam automaticamente uma aula parcial. Separar complementos específicos de prova quando necessários. Não contabilizar o compartilhamento de referências como remoção de dados persistidos.

Os testes verificam identidade de capítulos e questões entre provas compatíveis, isolamento de exames não relacionados e consistência das métricas. CI deve validar unitários, segurança de dois usuários, design, TypeScript e build. Sem merge nem deploy antes da revisão.

## Lote de 11/11 — referências parciais por exame

A função `partialCoverageByExam()` expõe exclusivamente relações parciais verificáveis por associação de **exame + ID histórico do tópico de destino + ID canônico da fonte**, com escopos coberto e pendente explícitos e `fullyCovered: false`. Exames que não possuem o tópico de destino não recebem a referência. A auditoria publica o mesmo resultado em `partialCoverageByExam`; não altera `canonicalLessonForExam()` nem promove aulas parciais a cobertura profunda.

Teste adicionado: pertença ao exame, unicidade por exame/tópico, disciplina consistente, referência à fonte cadastrada e impossibilidade de conversão em alias integral. **Novos aliases integrais: 0; novas aulas: 0; registros persistidos removidos: 0.** A quantidade de referências habilitadas e a cobertura antes/depois requerem execução dos testes/auditoria. Material autoral não oficial, sem homologação docente. Sem alteração de schema, RLS, Auth ou progresso.

## Lote 11/11 — proteção da entrada de aliases semânticos

`reviewedCanonicalAliasForExam()` agora exige que o ID histórico, a disciplina e o título do objeto recebido coincidam com uma entrada real de `curriculumTopics`, além de conferir a pertença ao exame antes de consultar um alias. A validação vale também para chamadas diretas, não apenas para `canonicalLessonForExam()`. Um alias jamais pode apontar para o próprio tópico. Teste negativo adicionado para ID inventado, disciplina adulterada e título com escopo ampliado, percorrendo todos os exames cadastrados. Nenhuma equivalência não exata foi aprovada nesta mudança; cobertura integral anterior e posterior é a mesma. Duplicações persistidas removidas: 0. A revisão semântica ampla e a validação CI ainda são necessárias.

## Lote 11/11 — reconciliação de títulos literais versus identidades curriculares

Corrigida a métrica `distinctCurriculumTitles`: agora ela conta títulos textuais únicos, independentemente da disciplina. A nova `distinctSubjectTitlePairs` conta pares disciplina+título, preservando a identidade histórica dos tópicos. Antes, `distinctCurriculumTitles` devolvia simplesmente o número de registros, que não media títulos literais distintos. Teste de regressão confronta as duas métricas com os dados atuais e exige `distinctSubjectTitlePairs === curriculumTopics.length`. Isso é correção de auditoria, **não** equivalência semântica aprovada: aliases integrais novos = 0, novas aulas = 0, duplicações persistidas removidas = 0, cobertura pedagógica alterada = 0. Resultados numéricos exatos dependem de execução validada da auditoria. Nenhum ID, conteúdo, progresso, schema ou RLS foi modificado. Revisão docente pendente.

## Lote 11/11 — separar universo autoral de grupos compartilhados

A métrica `canonicalDeepLessons` passa a contar **todas** as aulas profundas canônicas únicas, inclusive aquelas usadas em apenas um exame; anteriormente usava indevidamente `verifiedCanonicalLessonLinks().length`, que só inclui grupos com dois ou mais exames. `crossExamSharedCanonicalLessons` preserva explicitamente essa contagem restrita; `totalDeepExamTopicReferences` soma as referências profundas por exame, e `crossExamReferenceReuse` conta apenas referências compartilhadas adicionais. O teste de reconciliação verifica os totais diretamente a partir de `curriculumTopics`, `canonicalLessonForExam` e `canonicalCoverageByExam`, sem números fixos. A equação antiga de economia de cópias foi atualizada para subtrair apenas os grupos compartilhados.

Este lote corrige a interpretação da auditoria, mas **não** aprova aliases não exatos, não aumenta cobertura, não remove registros persistidos e não substitui revisão pedagógica. Novos aliases integrais: 0; novas aulas: 0; duplicações persistidas removidas: 0. Os totais numéricos precisam ser observados em execução validada. Sem merge/deploy, sem alterações de banco, Auth, RLS ou progresso.


### 11/11/2026 — referências parciais ainda sem cobertura integral
A auditoria expõe `partialOnlyMissingByExam`: para cada exame, conta somente as associações parciais cujo tópico de destino continua em `missingTopicIds`. O indicador não transforma associação parcial em aula aprofundada, não cria alias integral e não representa remoção de registros persistidos. Compare com `partialCoverageByExam` para distinguir referências consultivas de lacunas reais. Teste de reconciliação acrescentado; resultados de CI ainda não confirmados para este lote. Material autoral Kognos, não oficial, sem homologação docente.

### 2026-11-11 — referências canônicas completas por exame
A função `canonicalExamTopicMappings()` enumera **todos** os vínculos profundos efetivos por exame, inclusive os de uma única prova, com `examTopicId` histórico, `canonicalId`, disciplina, título, tipo de associação e referência à mesma instância autoral. Não altera dados persistidos, rotas nem progresso. Um teste reconcilia a contagem com `canonicalCoverageByExam()`, valida unicidade, isolamento e identidade de capítulos/questões. **Este lote não aprova novas equivalências semânticas entre títulos diferentes, não acrescenta aulas e não elimina duplicações persistidas.** Os totais só devem ser publicados após execução da auditoria e CI do commit.


### 11/11/2026 — proteção de futuras equivalências não exatas
O contrato de `reviewedSemanticAliases` passa a exigir `targetTopicId`, `sourceTopicId` e uma lista explícita `exams`, além de disciplina, títulos e justificativa. A resolução valida identidade histórica completa e pertença do destino ao exame aprovado, impedindo herança automática por novas provas ou mudança de títulos. A auditoria de aliases considera apenas registros com IDs reais e ao menos um exame autorizado. Teste negativo preserva a ausência de equivalência integral para os dois tópicos amplos de Biologia. **Nenhum alias integral novo, nenhuma aula nova, nenhuma cópia persistida removida; cobertura inalterada.** Não há homologação docente; executar CI antes de considerar validado. Sem alterações de banco, Auth, RLS ou rotas.


## Reconciliação de vínculos por prova — 11/11/2026

A auditoria agora expõe `canonicalMappingsByExam` (total de mapeamentos profundos efetivos por prova) e `semanticMappingsByExam` (somente aliases integrais de títulos diferentes e explicitamente revisados). Ambos são derivados de `canonicalExamTopicMappings()`, não de contagens históricas ou associações parciais. Um teste garante que o total por prova corresponde a `coverageByExam[exam].deep` e que tópicos exclusivamente parciais não são promovidos a cobertura integral. **Este lote não aprova nenhum alias novo, não adiciona aulas e não elimina registros persistidos.** Os valores efetivos requerem execução da auditoria; não foram presumidos nesta documentação. Conteúdo autoral Kognos, não oficial e sem homologação docente.


### Lote 2026-11-11 — fontes oficiais do Provão para vínculos parciais

O registro `provaoSourcedPartialReferences()` consulta os tópicos efetivamente cadastrados em `provao-paulista.ts` e só projeta uma referência consultiva se a fonte possuir aula autoral profunda recuperável por `deepProvaoLesson`. O identificador canônico é calculado a partir de disciplina e título oficial, sem alterar IDs históricos do exame de destino. `provaoPartialReferencesByExam()` restringe cada referência aos exames que realmente possuem o tópico de destino no blueprint. A origem do Provão não implica automaticamente inscrição em outra prova.

A auditoria `provaoPartialReferencesByExam` não soma essas referências à cobertura profunda e preserva `fullyCovered: false`. As lacunas de Citologia, organelas, membranas e saúde continuam abertas. Teste específico confere identidade, isolamento entre exames e ausência de promoção para alias integral. Totais de vínculos só devem ser publicados após execução observada da auditoria; duplicações persistidas eliminadas: **zero**. Material autoral não oficial e sem homologação docente.


### 11/11/2026 — fila de autoria incorpora fontes parciais oficiais do Provão

`canonicalAuthoringBacklog()` agora combina os IDs de origem de `partialCoverageByExam()` com os de `provaoPartialReferencesByExam()` para cada **tópico ainda sem cobertura integral**. A lista `advisorySourceIds` é deduplicada por ID canônico, inclusive quando ambas as rotas apontam para a mesma aula. Assim, uma fonte autoral aprofundada presente no cadastro oficial do Provão, mas ausente do índice editorial dos blueprints, passa a ser identificável na fila de complementação sem copiar o texto e sem criar matrícula fictícia para o exame de destino. A ordenação por número de exames permanece; `hasPartialReference` reflete ambas as fontes.

Teste de regressão compara cada referência com a fila, exige escopo por exame e garante que tópicos já completos não sejam adicionados novamente. **Aliases integrais novos: 0; aulas profundas novas: 0; duplicações persistidas removidas: 0; aumento de cobertura integral: 0.** As associações continuam `fullyCovered: false`; é necessário escrever e revisar os complementos pedagógicos. Os totais executados e a aprovação de CI dependem de verificação no GitHub Actions. Não houve alteração de Auth, RLS, schema, progresso ou rotas. Material autoral não oficial e sem homologação docente.

## Lote 2026-11-11 — fila de revisão semântica com fontes oficiais do Provão

A função `semanticReviewQueue()` passa a reconciliar duas origens de associações **parciais**: `partialCoverageByExam()` (fonte registrada no blueprint) e `provaoPartialReferencesByExam()` (fonte aprofundada identificada no catálogo oficial do Provão, mesmo quando não aparece no blueprint). A deduplicação usa a tripla `exam + examTopicId + canonicalId`, evitando repetir uma mesma fonte e preservando fontes distintas para revisão de escopo.

A origem é indicada por `sourceOrigin` (`blueprint` ou `provao`). A fila **não** cria alias integral, não altera matrícula em exames, IDs, progresso ou persistência. O campo `eligibleForFullAlias` permanece falso. Uma referência só é exibida quando a fonte e o destino foram identificados e a relação está vinculada a um exame efetivamente cadastrado.

Validação: teste de regressão da fila reconciliada com as duas projeções de origem e isolamento por exame. Os números de vínculos habilitados, cobertura e testes devem ser extraídos de execução verificável da CI; este lote não afirma aumento de cobertura integral, novos aliases completos ou remoção de registros persistidos.


### 2026-11-11 — reconciliação de fontes profundas do Provão

A auditoria de candidatos parciais agora reconhece fontes autorais aprofundadas que constam nas folhas oficiais do Provão Paulista, mesmo quando o título-fonte não aparece no catálogo editorial derivado dos blueprints. A resolução exige destino registrado, fonte oficial identificável e aula profunda existente; a referência permanece **consultiva**, sem promover cobertura integral ou criar alias entre provas. O teste `official Provão deep sources resolve partial blocker audit without granting full aliases` verifica o diagnóstico, a projeção somente para exames com destino registrado e o isolamento do alias integral.

Commits deste lote: `c99f4da` (reconciliação) e `cfe5890` (regressão). Os totais antes/depois de candidatos desbloqueados dependem da execução da auditoria; não são inferidos da quantidade de títulos históricos. Novos aliases integrais: **0**; aulas novas: **0**; duplicações persistidas removidas: **0**. Nenhuma alteração em banco, RLS, Auth ou IDs históricos. CI do commit final pendente de confirmação.
