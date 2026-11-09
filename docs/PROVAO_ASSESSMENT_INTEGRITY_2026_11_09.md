# Auditoria de integridade de avaliações — 2026-11-09

Material original Kognos, não oficial e sem homologação docente.

O teste `provao-depth-assessment-integrity.test.ts` percorre aulas aprofundadas resolvidas pelo catálogo offline do Provão Paulista. Exige avaliação editorial com índice de resposta explícito, quatro alternativas distintas, enunciados não repetidos na mesma aula, conjuntos de alternativas não reciclados entre capítulos, correção comentada e ausência de marcadores de fallback `resolution_matching` e `example_matching`.

Esta verificação **não comprova** que um gabarito seja cientificamente verdadeiro, que os distratores sejam pedagogicamente bons ou que a aula tenha sido homologada. A revisão por especialistas permanece pendente. A precedência de publicações no Supabase não foi alterada.

Nenhum novo tema foi contado neste commit. A última referência anterior à execução era 196/364, com 168 pendentes, **não revalidada**. O PR #99 permanece em rascunho; não realizar merge ou deploy sem revisão. O teste exige execução de CI, incluindo unitários, segurança de dois usuários, design, TypeScript e build, antes de qualquer declaração de aprovação.
