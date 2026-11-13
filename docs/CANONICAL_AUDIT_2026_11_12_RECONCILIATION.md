# Auditoria incremental de reutilização — 2026-11-12

## Escopo deste lote
Branch: `feat/provao-depth-batch46-language-20261112` · PR #108 (draft). A regra de desenvolvimento `AGENTS.md` da main foi consultada; PRs #93 e #99 estão integrados, e #107 permanece aberto. O teste `canonical-audit-reconciliation.test.ts` foi adicionado para reconciliar contadores do relatório com os mapeamentos reais em tempo de execução.

## Delta verificável do lote
- **1 arquivo de testes**, **3 casos de regressão**; **0 novos aliases aprovados**, **0 novas aulas** e **0 duplicações persistidas removidas**.
- Verificações: títulos literais distintos, pares disciplina/título, entradas por exame, cobertura por exame, vínculos canônicos, grupos entre IDs históricos e isolamento de referências parciais.
- O registro de alias integral continua contendo a associação revisada de coesão/coerência para ENEM, FUVEST e VUNESP, existente antes deste lote. Não atribuir sua criação a este commit.
- As referências parciais de Citologia/Célula e saúde continuam consultivas; não somam aulas concluídas.
- Não houve alteração de schema, dados, Auth, RLS, rotas, chaves, nem deploy.

## Limitações e próximo lote
Este commit não mede novos totais de cobertura nem comprova aprovação dos testes. A contagem de 195/364 para o Provão é referência anterior documentada, e 200/364 é projeção da branch #108, não conclusão validada. O CI, `npm test`, `npm run test:content-db`, `npm run test:design`, `npm run typecheck` e `npm run build` devem ser executados antes de merge. Para ampliar aliases, comparar objetivos e profundidade do edital com cada capítulo e cada questão, documentando lacunas e impedindo promoção de correspondências parciais.

Meta editorial: 20/11/2026, sob risco até que o inventário completo e a validação sejam comprovados. Conteúdo autoral não oficial, pendente de revisão pedagógica.
