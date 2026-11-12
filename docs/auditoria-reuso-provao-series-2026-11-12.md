# Auditoria incremental — reutilização por série do Provão (2026-11-12)

## Escopo verificado
- Fonte de verdade: `provaoTopics` (série, código oficial, disciplina, título exato), `officialProvaoCanonicalGradeMappings()` e `officialProvaoGradeCoverage()`.
- A nova regressão exige que cada referência publicada corresponda a uma entrada real de série/código e preserve o mesmo objeto de capítulos e tarefas para títulos idênticos compartilhados.
- A auditoria compara a cobertura profunda por série com os mapeamentos gerados e impede atribuir uma série inexistente a um título.
- Referências parciais de Citologia/Célula e saúde não passam a ser cobertura integral; aliases semânticos não-exatos permanecem sem aprovação.

## Contabilidade e limitações
- Novas aulas autorais: **0**; aliases semânticos completos aprovados: **0**; duplicações persistidas removidas: **0**.
- Mudança nesta branch: **1 teste de regressão**. Não houve alteração de currículo, banco, autenticação, RLS, rotas ou gabaritos.
- Totais por série/exame devem ser obtidos executando as funções de auditoria no commit da branch; nenhum número de cobertura é declarado sem execução.
- Revisão docente e CI completa (testes, TypeScript, build, segurança de dois usuários e design) pendentes. Não considerar esta auditoria uma homologação pedagógica.

## Próximo lote
Revisar títulos de escopo equivalente entre catálogos, incluindo as fontes oficiais de Provão por série; só promover associações não-exatas com verificação documentada de objetivos, profundidade e lacunas. Preservar referências parciais como consultivas.
