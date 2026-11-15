# Auditoria curricular ENEM-first — execução verificada de 14/11/2026

> **Fonte reprodutível:** [GitHub Actions run 43608284326](https://github.com/PedroH0309/Kognos-App/actions/runs/43608284326), job [132487535162](https://github.com/PedroH0309/Kognos-App/actions/runs/43608284326/job/132487535162), commit `e8a4b97a1930422e070c0f420610f869931f5b47` (branch de revisão do PR #114). O teste `enem-cross-exam-inventory.test.ts` imprimiu `KOGNOS_CROSS_EXAM_AUDIT` e a CI concluiu **success**. Esta é uma fotografia do código testado, não uma medição da `main` futura.

## Definições e cautelas

- **Entradas:** vínculos registrados em catálogos editoriais do Kognos; não equivalem a competências/habilidades oficiais do Inep.
- **Distintos:** títulos exatos por disciplina; não são grupos semânticos aprovados.
- **Profundas:** entradas com mapeamento canônico integral verificado pelo código. **Parciais:** referências consultivas ainda com lacunas; não entram na cobertura profunda.
- **Reutilização entre provas:** vários vínculos podem compartilhar a mesma fonte autoral; isso não significa remoção de linhas persistidas nem homologação pedagógica.
- **Escopo:** este relatório não verificou independentemente cada competência/habilidade da matriz oficial do Inep. Essa correspondência requer revisão documental e pedagógica adicional.

## ENEM — fotografia quantitativa

| Métrica | Valor |
|---|---:|
| Entradas editoriais ENEM | 896 |
| Títulos exatos distintos | 896 |
| Vínculos integrais com aulas profundas | 14 |
| IDs canônicos profundos únicos | 14 |
| Aliases semânticos integrais revisados | 1 |
| Vínculos integrais também utilizados em outras provas | 14 |
| Referências consultivas parciais | 9 |
| Tópicos exclusivamente com referência parcial | 9 |
| Candidatos parciais não resolvidos | 3 |
| Lacunas sem cobertura integral | 882 |

| Disciplina | Entradas | Distintos | Profundas | Parciais | Lacunas |
| ---: | ---: | ---: | ---: | ---: | ---: |
| Arte | 28 | 28 | 0 | 0 | 28 |
| Biologia | 105 | 105 | 2 | 2 | 103 |
| Educação Física | 21 | 21 | 0 | 0 | 21 |
| Espanhol | 19 | 19 | 0 | 0 | 19 |
| Filosofia | 42 | 42 | 0 | 0 | 42 |
| Física | 97 | 97 | 0 | 0 | 97 |
| Geografia | 75 | 75 | 1 | 0 | 74 |
| História | 85 | 85 | 4 | 0 | 81 |
| Inglês | 34 | 34 | 0 | 0 | 34 |
| Literatura | 49 | 49 | 0 | 0 | 49 |
| Matemática | 107 | 107 | 2 | 1 | 105 |
| Português | 70 | 70 | 3 | 6 | 67 |
| Química | 91 | 91 | 2 | 0 | 89 |
| Redação | 31 | 31 | 0 | 0 | 31 |
| Sociologia | 42 | 42 | 0 | 0 | 42 |

## Outras provas registradas

| Exame | Entradas | Profundas | Parciais | Lacunas |
| ---: | ---: | ---: | ---: | ---: |
| etec | 264 | 4 | 1 | 260 |
| saresp | 528 | 206 | 0 | 322 |
| vunesp | 895 | 14 | 8 | 881 |
| fuvest | 903 | 14 | 7 | 889 |

O catálogo ETEC é histórico e não deve ser anunciado como trilha pública ativa. O conjunto `saresp` é um roteiro editorial mais amplo, **não** a mesma unidade de contagem que cada folha oficial do Provão Paulista.

## Provão Paulista — folhas por série

| Série | Entradas | Profundas | Lacunas |
| ---: | ---: | ---: | ---: |
| 1 | 192 | 135 | 57 |
| 2 | 187 | 97 | 90 |
| 3 | 364 | 206 | 158 |

As folhas oficiais são discriminadas por série/código/título e podem repetir o mesmo conteúdo entre séries. A soma das entradas das três séries não representa uma contagem de títulos semânticos exclusivos.

## Reutilização e deduplicação

- Entradas históricas no catálogo agregado: **1512**.
- Títulos exatos por disciplina no catálogo agregado: **1512**.
- IDs canônicos únicos entre catálogo e folhas oficiais: **211** (não interpretar como cobertura ENEM).
- Grupos com **diferentes IDs históricos** compartilhando uma aula canônica: **1**; referências históricas adicionais reutilizadas: **1**.
- Duplicações de registros persistidos efetivamente eliminadas: **0**.

## Antes/depois deste lote documental

| Indicador | Antes (CI e8a4b97) | Depois (somente documentação) |
|---|---:|---:|
| ENEM: entradas | 896 | 896 |
| ENEM: profundas | 14 | 14 |
| ENEM: lacunas | 882 | 882 |
| ENEM: referências parciais | 9 | 9 |
| Novas aulas autorais neste lote | 0 | 0 |
| Novos aliases integrais neste lote | 0 | 0 |
| Linhas persistidas removidas | 0 | 0 |

**Próximas etapas:** revisar todos os candidatos parciais não resolvidos; confirmar equivalências de escopo integral contra objetivos e fontes, sem promover títulos semelhantes automaticamente; priorizar cinco aulas profundas inéditas do ENEM por lote viável; publicar novos relatórios antes/depois, com testes de regressão, segurança e CI. O prazo de 20/11/2026 permanece de alto risco: 882 entradas ENEM ainda não têm cobertura integral neste snapshot.

## Reprodução

Execute no checkout do commit auditado:

```bash
npm install
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run lint
npm run build
```

Localize a linha `KOGNOS_CROSS_EXAM_AUDIT` no log do teste. Não reutilize estes números para commits posteriores sem rodar novamente a auditoria.

## Atualização posterior — ordenação operacional ENEM primeiro

A branch do PR #114 agora ordena o backlog `canonicalAuthoringBacklog()` com todas as **lacunas integrais do ENEM primeiro**, antes das lacunas exclusivas de outras provas. Dentro de cada faixa, continua priorizando tópicos reutilizáveis por mais exames e depois aqueles com fontes parciais verificadas. A alteração não cria equivalência, não transforma referência parcial em cobertura integral, não modifica os IDs históricos e não altera o currículo registrado.

O teste `canonical-lesson-reuse.test.ts` agora exige que o bloco inicial do backlog corresponda exatamente aos tópicos ENEM ainda sem cobertura integral e mantém a prioridade por número de exames dentro de cada faixa. O total do bloco é calculado dinamicamente a partir de `canonicalCoverageByExam().enem.missing`, não fixado em 882. Os números acima permanecem uma **fotografia da CI anterior** até nova execução; esta alteração não adicionou aulas, aliases ou exclusões persistidas. Commits: `98c9598` (ordenação) e `a8fcab8` (regressão).

## Atualização — prioridade explícita da fila de revisão parcial (14/11)

A função `semanticReviewQueue()` agora coloca todas as referências parciais do **ENEM** antes das referências dos outros exames, independentemente da ordem de declaração em `examBlueprints`. O teste de regressão impede que uma referência ENEM apareça após uma referência de outra prova. A fila continua conciliando fontes do catálogo editorial e folhas oficiais do Provão e preserva `eligibleForFullAlias: false` para todas as referências. **Nenhum alias integral, aula nova, ID histórico ou linha persistida foi alterado.**

Antes/depois deste lote: entradas ENEM **896 → 896**, vínculos profundos **14 → 14**, lacunas integrais **882 → 882**, referências parciais **9 → 9**, aliases integrais adicionais **0**, duplicações persistidas eliminadas **0**. Estes são os números da última auditoria aprovada, não uma nova medição de CI; a mudança de ordenação não modifica os conjuntos contabilizados. Commits de implementação `3b708a3` e teste `1a1e6f5`.

## Reconciliação entre branches — 14/11/2026, 19h56 BRT

O PR [#117](https://github.com/PedroH0309/Kognos-App/pull/117) (`codex/quality-reliability-20261114`) está **aberto em draft** em paralelo ao PR #114. A descrição atual do #117 informa **22 temas ENEM aprofundados em 896 entradas, com 874 lacunas**; já o snapshot de CI do #114 acima registra **14/896 e 882 lacunas**. A diferença declarada é de **+8 temas profundos e -8 lacunas**, mas **não é uma medição antes/depois do mesmo checkout**: os números vêm de branches e critérios de inventário distintos, ainda sem auditoria cruzada executada no mesmo commit. Não somar os resultados nem contar a diferença como aliases aprovados.

O PR #117 também declara expansão de conteúdos, testes locais (592 testes da aplicação e seis do motor), build e validação de interface; tais resultados são **relatos da descrição do PR**, não foram reproduzidos nesta branch. O PR #114 mantém auditoria de IDs canônicos do catálogo original, enquanto #117 modifica entrega/índice de conteúdos e amplia a autoria. Antes de qualquer merge, reconciliar os registries, executar `KOGNOS_CROSS_EXAM_AUDIT` sobre o checkout combinado e verificar que o leitor realmente entrega a mesma fonte autoral para cada vínculo integral; referências parciais devem permanecer lacunas. A matriz de competências/habilidades oficiais do Inep continua sem homologação e não pode ser inferida de títulos editoriais.

**Pendência operacional prioritária:** trazer os novos conteúdos efetivamente verificados do #117 para a auditoria sem sobrescrever o trabalho paralelo, identificar quais dos oito novos vínculos têm ID canônico único e quais são referências entre provas, depois publicar os totais por disciplina e CI do commit combinado. Não houve remoção persistida de duplicações, merge, deploy ou mudança de schema nesta atualização documental.

## Reconciliação atualizada — 14/11/2026, 21h BRT

A descrição **atual** do [PR #117](https://github.com/PedroH0309/Kognos-App/pull/117) passou a declarar **38 temas ENEM aprofundados e 858 lacunas em 896 entradas**, em vez dos 22/874 registrados na fotografia anterior. A variação dentro da própria branch #117 é de **+16 temas / -16 lacunas declaradas**; contra a fotografia CI do #114 (14/882), a diferença é de **+24 temas / -24 lacunas**, **não** um ganho validado no mesmo checkout. O PR #117 informa 607 testes de aplicação, seis do motor e build aprovados localmente, mas também relata dívida de lint global (87 erros, 115 avisos), revisão docente pendente e ausência de merge/deploy.

**Critério de integração:** não somar contagens entre PRs nem marcar 38 como cobertura verificada do #114. Antes de atualizar a linha de base, auditar no mesmo commit as aulas novas do #117, seus IDs, cobertura integral, publicação/resolução de alias, disciplinas, pré-requisitos, exemplos, capítulos e questões A–D; executar auditoria ENEM antes/depois e regressões de isolamento. O #114 continua exclusivamente com testes/documentação e não deve sobrescrever os arquivos autorais do #117. O alvo de 20/11 permanece de risco muito elevado.


## Reconciliação entre branches — 14/11/2026, 23h (Brasília)

**Estado observado nos PRs, sem mesclar branches:** [#93](https://github.com/PedroH0309/Kognos-App/pull/93) e [#99](https://github.com/PedroH0309/Kognos-App/pull/99) estão fechados; [#114](https://github.com/PedroH0309/Kognos-App/pull/114) e [#117](https://github.com/PedroH0309/Kognos-App/pull/117) permanecem abertos. O PR #117 informa **53** temas profundos do ENEM, **843** lacunas editoriais entre **896** entradas e **1.259** lacunas agregadas entre **1.512** identidades curriculares. Estes são **números declarados pelo PR #117**, não resultados do teste `KOGNOS_CROSS_EXAM_AUDIT` no checkout combinado. A descrição do PR #117 também informa 614 testes de aplicação, seis testes do motor, build e lint dos arquivos alterados aprovados; não é uma certificação da CI conjunta. O lint global ainda tem dívida relatada de 87 erros e 115 avisos.

| Métrica | Snapshot auditado #114 | Declaração #117 | Delta declarado (não validado em conjunto) |
|---|---:|---:|---:|
| Entradas editoriais ENEM | 896 | 896 | 0 |
| Vínculos/temas profundos ENEM | 14 | 53 | +39 |
| Lacunas integrais ENEM | 882 | 843 | -39 |
| Referências parciais | 9 | não informado | indeterminado |
| Aliases integrais semânticos revisados | 1 | não informado | indeterminado |
| IDs canônicos profundos distintos | 14 | não informado | indeterminado |
| Duplicações persistidas removidas | 0 | não informado | indeterminado |

**Bloqueio de reconciliação:** os totais do #117 não demonstram, por si, que cada tema adicional usa o mesmo objeto canônico em todos os exames elegíveis, nem comprovam escopo integral da matriz oficial do Inep. É necessário integrar temporariamente as branches em um checkout de teste, executar o inventário por disciplina, comparar IDs e objetivos, e registrar links integrais, referências parciais e complementos, antes de atualizar a coluna auditada. Não promover referências parciais a integrais. As 896 entradas são editoriais do Kognos, não 896 habilidades oficiais do ENEM.

**Produção nesta atualização:** somente reconciliação documental; zero novas aulas, zero aliases integrais verificados e zero registros persistidos eliminados. Sem merge, deploy, schema ou RLS alterados. Prazo de 20/11 em risco muito elevado; manter produção e validação após essa data enquanto houver lacunas.
