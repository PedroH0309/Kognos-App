# Auditoria incremental — 2026-11-12, lote de identidade oficial

Base: `main` e PR draft #107. PRs #93 e #99 consultados: ambos integrados em `main`. Regras: `AGENTS.md`.

## Alteração implementada

`canonicalOfficialProvaoLesson(grade, subject, officialCode, officialTitle)` consulta exclusivamente os mapeamentos já verificados em `officialProvaoCanonicalGradeMappings()`. A identidade exige simultaneamente série, disciplina, código oficial e título exato; não cria associação por semelhança textual. Retorna a mesma referência da aula autoral canônica. Teste dedicado cobre resolução, rejeição de código/título forjados e ausência de herança por séries não cadastradas.

## Limites verificáveis

- Novos aliases semânticos entre títulos diferentes: **0**.
- Novas aulas profundas: **0**.
- Duplicações de registros persistidos removidas: **0**.
- Novas rotas, alterações de schema, RLS/Auth ou progresso: **0**.
- Reutilização adicional entre exames não comprovada neste lote; esta mudança protege a identidade dos vínculos oficiais já existentes.
- Contagens globais de cobertura: **não recalculadas** nesta execução. Obter somente pela execução de `canonicalReuseAudit()` e `officialProvaoGradeCoverage()`; nunca usar totais históricos como equivalências comprovadas.
- CI, TypeScript, build, testes de dois usuários e design: **pendentes de execução/consulta**. Nenhum selo verde.

Próxima prioridade: auditar subtemas e objetivos dos títulos divergentes em todos os catálogos, aprovar apenas equivalências de escopo integral e registrar parciais como pendências. Meta 20/11/2026 em risco; não encerrar rotina sem cobertura e revisão pedagógica.
