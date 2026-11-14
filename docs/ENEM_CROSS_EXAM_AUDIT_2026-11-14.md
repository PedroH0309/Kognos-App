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
