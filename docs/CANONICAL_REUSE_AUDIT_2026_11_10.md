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
