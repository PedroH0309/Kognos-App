# Auditoria canônica — 2026-11-13

## Correção de escopo

O indicador `canonicalDeepLessons` anteriormente contava somente tópicos do catálogo editorial `curriculumTopics`. Aulas profundas autorais existentes apenas nas folhas oficiais do Provão Paulista ficavam fora desse indicador, apesar de serem consideradas em `allUniqueDeepCanonicalIds`.

Agora o indicador utiliza a união de IDs das associações efetivas por exame (`canonicalExamTopicMappings`) e dos registros por série do Provão (`officialProvaoCanonicalGradeMappings`). A união elimina a multiplicação de uma mesma aula por série. O teste `canonical-audit-official-only.test.ts` reconcilia as duas fontes com o total global.

## Limites de evidência

Esta alteração **não** cria aliases semânticos integrais, não escreve aulas novas, não remove registros persistidos, não modifica progresso, rotas, schema, RLS ou Auth. A cobertura não aumentou: somente a definição do indicador foi corrigida. A contagem numérica atual exige execução da auditoria na branch; não foi inferida de totais históricos. As referências parciais continuam excluídas da cobertura integral.

## Validação e revisão

Testes foram adicionados, mas sua execução e CI ainda precisam ser confirmados. A revisão pedagógica das equivalências e o inventário por exame permanecem pendentes. A meta de 20/11/2026 segue em risco; priorizar o próximo lote de aliases integrais somente após comparar escopo, série, objetivos e profundidade de cada fonte.
