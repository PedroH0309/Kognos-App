# ENEM-first: protocolo de reconciliação verificável (22/11/2026)

> Documento de trabalho autoral, não homologado por docentes. Não é matriz oficial do Inep nem certificado de cobertura.

## Fonte de verdade e limites

- `apps/web/src/lib/enem-canonical-priority.ts` calcula o inventário editorial a partir de `curriculumTopics` com associação a `enem`. Seus títulos não equivalem automaticamente às competências e habilidades oficiais do Inep.
- `canonical-lesson-reuse.ts` usa `canonicalExamTopicMappings()` para cobertura integral e `semanticReviewQueue()` para referências consultivas. **Não somar referências parciais à cobertura.**
- `reviewedSemanticAliases` contém uma associação revisada de Português (coesão, coerência e progressão temática), limitada aos exames explicitamente listados. Sua existência não autoriza novas associações por semelhança lexical.
- `reviewedPartialAssociations` descreve lacunas concretas, inclusive Citologia versus organização celular, probabilidade e estatística versus evento simples e urbanização e globalização versus questão urbana.
- Uma fonte do Provão fora do catálogo editorial de outra prova pode ser referência consultiva, nunca prova automática de matrícula curricular ou de cobertura integral.

## Critérios obrigatórios para promover um candidato a vínculo integral

1. Conferir ambos os IDs e títulos registrados, a prova-alvo e a fonte autoral profunda existente na branch em análise.
2. Comparar **todos** os objetivos e subtemas, série, extensão e profundidade da fonte com o escopo editorial-alvo; registrar evidências por objetivo.
3. Se algum objetivo não estiver coberto, conservar `fullyCovered: false`, explicitar o complemento e **não** adicionar alias integral.
4. Quando integral, registrar ID canônico único e exames-alvo explícitos; manter IDs históricos, rotas, progresso, respostas e dados persistidos intactos.
5. Testar identidade da aula resolvida entre os exames autorizados, ausência de herança em exames não autorizados, unicidade de IDs e não promoção de referências parciais.
6. Comparar o inventário **antes/depois no mesmo SHA**, separando entradas, títulos exatos distintos, aulas canônicas profundas únicas, vínculos integrais, links semânticos revisados, referências parciais, lacunas e duplicações realmente eliminadas.
7. Executar testes curriculares, TypeScript, build, testes de segurança e CI; declarar somente o que foi efetivamente executado. Nunca fazer merge/deploy sem revisão.

## Estado desta revisão

Esta documentação **não** executa o inventário, não altera o registro de aliases e não comprova novas equivalências. Os números históricos de 16/11 (896 entradas ENEM, 192 vínculos integrais, 704 lacunas) devem ser tratados apenas como baseline histórico até recálculo no HEAD da branch e da main. O próximo lote deve priorizar a revisão de fontes profundas para as lacunas ENEM antes de produzir novas aulas.

## Revisão de código: risco de equivalência por título (22/11, lote noturno)

Inspeção direta de `apps/web/src/lib/canonical-lesson-reuse.ts` e `apps/web/src/lib/enem-canonical-priority.ts`:

- `verifiedCanonicalLessonLinks()` inclui uma aula profunda quando **o mesmo título e disciplina** aparece em pelo menos dois blueprints; essa condição não verifica, por si só, objetivos, série nem profundidade curricular de cada exame. O resultado deve ser tratado como **compartilhamento editorial exato**, não como certificado de equivalência pedagógica entre matrizes.
- `canonicalLessonForExam()` valida ID/título/associação do blueprint e resolve primeiro a aula profunda do próprio tópico; esse caminho é seguro para identidade histórica, mas **não fornece evidência independente de escopo integral por prova**. O relatório de cobertura mede resolução técnica de aulas, não homologação docente.
- `reviewedCanonicalAliasForExam()` é mais restritivo: exige alvo e fonte registrados, escopo de exame explícito e fonte profunda. A justificativa de revisão é textual; a matriz objetivo→evidência ainda precisa ser documentada por alias.
- `enemCanonicalPriorityAudit()` chama os vínculos tecnicamente resolvidos de `fullCanonicalMappings`. Na comunicação externa, distinguir **cobertura técnica resolvida** de **equivalência curricular integral pedagogicamente comprovada** até haver revisão objetiva.

**Gate de promoção recomendado:** para cada `(exam, examTopicId, canonicalId)`, anexar a lista de objetivos oficiais verificáveis (quando houver), objetivos editoriais, trechos/partes da aula que satisfazem cada objetivo, lacunas e veredito. Sem evidência completa, classificar como `pending-scope-review` ou referência parcial, sem aumentar a contagem de vínculos integralmente comprovados. Não desativar aulas historicamente acessíveis nem alterar progresso persistido como consequência de uma reclassificação de auditoria.

**Validação deste lote:** revisão estática de código e documentação; nenhuma execução de testes, inventário dinâmico ou build. Nenhuma nova equivalência aprovada. A contagem histórica não foi recalculada.

## Correção de transparência do relatório (23/11/2026)

O retorno de `enemCanonicalPriorityAudit()` agora expõe `scopeReviewPending` (quantidade de vínculos técnicos ainda sem matriz objetivo→evidência), `pedagogicallyVerifiedFullLinks: null` e `pedagogicalVerificationStatus: 'not-audited'`. **`null` significa não medido**, não zero vínculos existentes ou zero vínculos pedagogicamente válidos. O campo histórico `deep` permanece uma contagem de resolução técnica de aulas autorais, sem alterar rotas, IDs, persistência ou RLS. Um teste de regressão exige essa distinção. Não houve promoção de alias, aula nova nem certificação pedagógica; a execução do teste e o inventário dinâmico ainda precisam ser confirmados em CI.

## Visibilidade por disciplina (23/11/2026)

O inventário `subjects[]` agora inclui `scopeReviewPending` e `fullLinksSharedWithOtherExams` por disciplina, usando as mesmas associações técnicas já computadas no agregado. O primeiro campo conta aulas resolvidas sem matriz pedagógica objetivo→evidência; o segundo conta vínculos técnicos cuja aula canônica também é referenciada por outro exame. Nenhum desses campos certifica equivalência curricular ou elimina duplicações persistidas. O cálculo não altera resolução de aulas, IDs, rotas, progresso ou dados. Auditoria dinâmica, testes e CI ainda não executados nesta alteração; não declarar verde até confirmação.

## Fila auditável de escopo por vínculo (23/11/2026)

`enemCanonicalPriorityAudit().scopeReviewQueue` expõe, para cada vínculo técnico ENEM, `examTopicId`, `canonicalId`, `mappingKind`, disciplina, título editorial e exames adicionais que referenciam a mesma aula canônica. Cada registro permanece `pending-objective-evidence`. O campo permite organizar revisão objetivo→trecho da aula e detectar compartilhamento interprovas sem declarar equivalência pedagógica ou habilidade oficial do Inep. A fila não cria aliases, não altera conteúdo nem modifica progresso. Testes, TypeScript e build ainda exigem execução e não foram certificados neste lote.
