# Auditoria incremental — relações celulares parciais (11/11/2026)

Material autoral Kognos, não oficial, sem homologação docente. Revisão pedagógica pendente.

## Escopo verificado no código

O registro `reviewedPartialAssociations` associa a aula aprofundada **Organização celular dos seres vivos** a dois tópicos editoriais mais amplos de Biologia: **Citologia** e **Células, organelas e membranas**. Somente a organização celular e a distinção procarionte/eucarionte são declaradas reutilizáveis. A primeira associação já existia; a segunda é nova. O resolvedor só habilita cada associação quando os títulos históricos e a aula-fonte estão presentes no catálogo. A contagem efetivamente habilitada depende de executar a auditoria.

Ambos os alvos exigem conteúdo adicional sobre membranas, transportes e organelas; Citologia também exige metabolismo e divisão celular. Portanto **nenhuma das duas associações é um alias integral**, nenhuma deve incrementar `canonicalCoverageByExam().deep`, e não há eliminação de registros persistidos.

## Validação e limites

O teste `canonical-lesson-reuse.test.ts` verifica que as associações mantêm o ID histórico do alvo, compartilham o mesmo ID canônico de origem, são restritas aos exames que realmente listam o alvo e nunca são promovidas por `reviewedCanonicalAliasForExam`. Nenhuma equivalência entre títulos diferentes foi aprovada como cobertura integral. Não houve alteração de Auth, RLS, banco, rotas, progresso ou gabaritos.

**Nesta alteração:** 1 nova associação parcial declarada; 0 aliases integrais; 0 aulas novas; 0 duplicações persistidas eliminadas. Não há novos totais de cobertura sem auditoria executada, nem CI verde até a execução completa dos testes.

## 11/11/2026 — ETEC: candidato não resolvido e regressão corrigida

O roteiro editorial `exam-blueprints.ts` inclui `Biologia / Célula e saúde` para ETEC, mas a aula-fonte `Organização celular dos seres vivos` não consta como tópico com esse título em `curriculumTopics` derivado dos blueprints desta branch. Uma aula no acervo de aprofundamento não equivale automaticamente a um registro de tópico por exame. Assim, `verifiedPartialAssociations()` não pode habilitar a relação sem fonte registrada, e `unresolvedSemanticCandidates` deve contabilizá-la como pendência, sem atribuir cobertura profunda ou alias integral.

O teste ETEC foi corrigido para validar a presença do destino, condicionar a associação à existência real da fonte e verificar isolamento dos demais exames. A execução GitHub Actions 43085565855 confirmou aprovação dos testes unitários, segurança de dois usuários e design, mas reprovou no TypeScript com TS7022 em `canonical-lesson-reuse.test.ts` (linhas 217, 322 e 323); o build foi ignorado. O commit posterior `2daef515` acrescenta anotações explícitas de tipos nesses pontos. **Aguardando nova CI** para confirmar TypeScript e build. Nenhuma aula nova, nenhum alias integral, nenhuma duplicação persistida removida; sem alteração de schema, RLS, progresso ou rotas. Revisão pedagógica ainda pendente.
