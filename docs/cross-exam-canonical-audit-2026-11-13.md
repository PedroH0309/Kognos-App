# Auditoria canônica entre exames — 13/11/2026

Esta alteração introduz `crossExamCanonicalAudit()` e seu teste de reconciliação. O relatório enumera **todos os exames registrados em `examBlueprints`**, incluindo ETEC histórica, e os divide por disciplina. ENEM permanece a prioridade editorial.

## Definições verificáveis

- **Entradas:** associações de tópicos editoriais a cada exame, não habilidades oficiais.
- **Títulos distintos:** títulos literais, sem inferência semântica.
- **Deep links:** vínculos integrais retornados por `canonicalExamTopicMappings()`.
- **Canônicas únicas:** IDs distintos das fontes autorais profundas.
- **Lacunas:** entradas sem vínculo integral; referências parciais não reduzem lacunas.
- **Grupos entre exames:** IDs canônicos com vínculos integrais para mais de um exame.
- **Duplicatas persistidas eliminadas:** zero; referências compartilhadas não removem dados.
- **Habilidades oficiais:** não auditadas por esta função; requerem matriz e evidência institucional separadas.

## Reproduzir

No checkout da branch do PR #109, após instalar dependências:

```bash
node --experimental-strip-types --test apps/web/src/lib/cross-exam-canonical-audit.test.ts
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run lint
npm run build
```

O teste imprime `CROSS_EXAM_CANONICAL_AUDIT` com números calculados na execução. Não substitua os números por totais históricos; confirme a CI do commit final antes de declarar aprovação.

## Escopo deste lote

Três commits de código/teste para instrumentação transversal, **zero novos aliases integrais, zero novas aulas, zero exclusões**. A instrumentação não valida automaticamente escopo semântico. O próximo lote deve usar os registros para examinar candidatos ENEM de outros exames, promovendo somente equivalências comprovadas e produzindo complementos para as referências parciais. Sem alterações em schema, RLS, Auth, rotas ou dados persistidos. Conteúdo autoral continua sem homologação docente.
