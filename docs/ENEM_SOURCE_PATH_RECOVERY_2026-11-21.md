# ENEM — recuperação dos caminhos-fonte (21/11/2026)

**Natureza:** auditoria de localização de arquivos na branch do PR #120. Não é homologação pedagógica nem ampliação de cobertura.

## Bloqueio de localização resolvido

A árvore Git da revisão `f9b95d1c24d05a691ff0f9a82051fda3b781ffd4` foi consultada com `GET /repos/PedroH0309/Kognos-App/git/trees/<sha>?recursive=1`: 821 entradas, `truncated=false`. Os arquivos de currículo estão em **`apps/web/src/lib/`**, não em `src/lib/` na raiz. O teste anterior que procurava caminhos na raiz não demonstrava ausência de arquivos.

Caminhos confirmados na árvore: `apps/web/src/lib/curriculum-catalog.ts`, `exam-blueprints.ts`, `exam-syllabus.ts`, `provao-paulista.ts`, `canonical-lesson-reuse.ts`, `enem-canonical-priority.ts`, `authored-curriculum-batch03.ts` a `authored-curriculum-batch15.ts`. As auditorias estão em `docs/` e `docs/auditorias/`.

## Critério de inventário reproduzível

1. Percorrer `curriculumTopics` e filtrar `exams.includes('enem')`, agrupando por `subject`; contar IDs e títulos exatos separadamente.
2. Extrair `canonicalExamTopicMappings()` e identificar IDs canônicos distintos e vínculos integrais por exame; não equiparar o compartilhamento de referência a revisão pedagógica.
3. Extrair `semanticReviewQueue()` e `unresolvedPartialCandidates()`; registrar `coveredScope` e `missingScope` sem promover vínculos parciais.
4. Comparar os conteúdos de todas as aulas autorais (inclusive branches e PRs) com objetivos e escopo completo do alvo, documentando fontes oficiais para competências/habilidades Inep quando verificadas.
5. Executar `enemCanonicalPriorityAudit()` e testes no workspace `apps/web`, registrando saída e SHA. A árvore Git prova a existência dos arquivos, **não** executa o inventário ou os testes.

## Evidência curricular limitada

O lote 15 contém uma aula original `Porcentagem e razão` com três seções e três questões A–D. Sua presença no arquivo **não** demonstra automaticamente que esteja indexada, exposta no runtime ou vinculada integralmente ao ENEM. A referência consultiva anterior permanece parcial até revisão de escopo e ligação explícita. Não foram criados aliases neste registro.

Última linha de base documental (não recalculada nesta execução): 896 entradas ENEM, 896 títulos distintos, 192 vínculos integrais, 192 canônicas profundas, 9 referências consultivas e 704 lacunas. Novos vínculos: 0; novas aulas: 0; duplicações persistidas eliminadas: 0. Não confundir títulos editoriais com habilidades oficiais Inep.

**Próxima etapa:** executar auditoria em ambiente de testes com dependências, comparar conteúdo profundo de outras provas, revisar candidatos integrais e publicar lotes autorais após a triagem. Não realizar merge ou deploy sem revisão.
