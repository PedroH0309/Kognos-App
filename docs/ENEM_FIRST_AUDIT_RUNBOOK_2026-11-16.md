# ENEM-first — protocolo de auditoria reproduzível (16/11/2026)

> Documento operacional de autoria Kognos, **não** matriz oficial do Inep, não homologado por docente. Este arquivo não afirma nova cobertura.

## Fontes e precedência

1. Leia `AGENTS.md`, `main`, PRs abertos e branches com conteúdo autoral (incluindo histórico dos PRs #93, #99, #117, #118 e PR #120).
2. Use `curriculum-catalog.ts`, `exam-blueprints.ts`, `exam-syllabus.ts`, `provao-paulista.ts` e catálogos cadastrados para **entradas editoriais**; não atribua automaticamente competência/habilidade oficial Inep.
3. Use `canonical-lesson-reuse.ts`, `enem-canonical-priority.ts` e os registros de autoria profunda para cobertura **integral verificada**. Uma referência parcial não conta como integral. Preserve `examTopicId` histórico e identidade do objeto `lesson`.

## Reproduzir antes/depois

Na raiz do repositório com dependências instaladas:

```bash
node --experimental-strip-types --test apps/web/src/lib/enem-cross-exam-inventory.test.ts
node --experimental-strip-types --test apps/web/src/lib/enem-priority-partition-regression.test.ts apps/web/src/lib/enem-audit-integrity-regression.test.ts
```

Capture a linha `KOGNOS_CROSS_EXAM_AUDIT` do primeiro comando **no mesmo SHA** em que os testes rodaram. Registre o SHA de base e o SHA de head. Compare `enem.entries`, `distinctExactTitles`, `deep`, `uniqueDeepCanonicalLessons`, `reviewedSemanticLinks`, `advisoryLinks`, `partialOnlyTopics`, `missing`, `fullLinksSharedWithOtherExams`, `unresolvedPartialCandidates`, além de `bySubject` e `otherExams`. Reporte também `crossTitleCanonicalGroups`, `crossTitleReferencesReused` e `persistedDuplicatesDeleted`; referências reutilizadas **não** equivalem a linhas persistidas apagadas.

A fotografia de `docs/ENEM_CROSS_EXAM_AUDIT_2026-11-15.md` (SHA `5b9e0e1`, anterior ao #118) contém **896 entradas, 166 vínculos integrais, 730 lacunas, 9 referências consultivas e 2 tópicos apenas parciais**. Não use esses valores como medição da main atual. O teste dinâmico e o relatório histórico têm papéis diferentes: um prova invariantes, o outro registra uma fotografia datada.

## Critério de revisão de cada alias

Para cada candidato, registre: prova e ID do tópico de destino; título exato; ID canônico da aula de origem; objetivos, série, subtemas, exercícios e profundidade exigidos; evidência de abrangência integral; eventual diferença de edital; e decisão (`integral`, `parcial com complemento` ou `não relacionado`). Um nome parecido nunca basta. Um tópico amplo com apenas um subtema abordado permanece lacuna. Vínculos integrais devem apontar para **a mesma instância autoral**, sem clonar textos. Preserve rotas, histórico, progresso, gabaritos, autenticação, RLS e IDs.

Para cada novo lote: revisar primeiro todas as aulas profundas existentes e os PRs abertos; só então escrever ao menos cinco temas ENEM específicos quando viável. Cada tema novo exige três capítulos progressivos substanciais, três exemplos resolvidos, pré-requisitos, erros frequentes, três questões objetivas A–D com alternativas distintas, gabaritos e justificativas específicas. Identifique autoria original e ausência de homologação docente.

## Portões de publicação

Exigir regressão curricular, testes de segurança entre dois usuários, design, TypeScript, build e CI do **head publicado**. Não declarar verde com base em SHA anterior. Documentar números antes/depois, IDs de vínculos aprovados, complementos parciais, duplicações efetivamente evitadas, riscos e bloqueios. Não fazer merge, deploy, alteração de schema ou RLS sem revisão/autorização. A meta 20/11 é aspiracional; lacunas e revisão pedagógica impedem declarar conclusão.

## Reconciliação de proveniência — 16/11/2026

Consulta direta ao GitHub nesta rodada: [PR #93](https://github.com/PedroH0309/Kognos-App/pull/93) e [PR #99](https://github.com/PedroH0309/Kognos-App/pull/99) estão **merged**, portanto seus lotes não devem ser contados como branches independentes além da main. [PR #118](https://github.com/PedroH0309/Kognos-App/pull/118) também está **merged** e adicionou 28 aulas; a fotografia de 15/11 antecede essa integração. [PR #120](https://github.com/PedroH0309/Kognos-App/pull/120) está **open/draft**, com testes de regressão e sem novos vínculos curriculares. Antes de atribuir um número atualizado de cobertura, execute o inventário no SHA efetivo da main e, separadamente, no head do PR. Não some números de descrições de PRs a contagens do registro, pois podem refletir snapshots diferentes.

**Pendência bloqueante para nova afirmação quantitativa:** não há nesta rodada saída executada de `KOGNOS_CROSS_EXAM_AUDIT` sobre a main pós-#118. O resultado da CI do PR #120 em `2915924` valida os testes daquele SHA, não a cobertura pedagógica nem este documento. Nenhum alias novo, aula nova ou exclusão de duplicata é atribuído a esta reconciliação documental.
