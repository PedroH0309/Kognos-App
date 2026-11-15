# Reconciliação ENEM — 15/11/2026

Base: `5b9e0e11557cf048fca85579dba177e9d576c1c8` (main, merge do #117), mais as correções do PR #114. Reprodução: `node --experimental-strip-types --test apps/web/src/lib/enem-cross-exam-inventory.test.ts`. A linha `KOGNOS_CROSS_EXAM_AUDIT` contém a matriz completa.

## Problemas corrigidos

- O teste estava interrompido dentro do JSON de saída, seguido por imports e outro teste duplicado. Não executava. A estrutura foi fechada e a implementação duplicada removida, preservando as verificações abrangentes.
- O inventário `curriculum-depth-inventory-all-exams.test.ts` considerava apenas `deepProvaoLesson`, omitindo ENEM e lotes autorais. Agora consulta o registro canônico por prova, incluindo aliases integrais revisados.
- Regressões comparam cada fonte autoral direta e o índice leve da interface com o registro em execução. Uma aula omitida ou disponibilidade divergente falha nos testes.

## Comparação no código

| Métrica | Snapshot antigo #114 | Código combinado atual |
|---|---:|---:|
| Entradas ENEM | 896 | 896 |
| Cobertura integral | 14 | 166 |
| Lacunas | 882 | 730 |
| Referências parciais | 9 | 9 |
| Tópicos somente parciais | 9 | 2 |

A descrição do #117 declarava 169/727, mas o commit efetivamente integrado mede 166/730. Não usar a descrição como fonte de contagem. O ganho de 152 vínculos contra a fotografia antiga vem de conteúdo já integrado; esta correção não cria aulas nem promove referências parciais.

| Disciplina | Entradas | Integrais | Lacunas | Só parciais |
|---|---:|---:|---:|---:|
| Arte | 28 | 9 | 19 | 0 |
| Biologia | 105 | 12 | 93 | 0 |
| Educação Física | 21 | 9 | 12 | 0 |
| Espanhol | 19 | 10 | 9 | 0 |
| Filosofia | 42 | 10 | 32 | 0 |
| Física | 97 | 10 | 87 | 0 |
| Geografia | 75 | 11 | 64 | 0 |
| História | 85 | 14 | 71 | 0 |
| Inglês | 34 | 10 | 24 | 0 |
| Literatura | 49 | 10 | 39 | 0 |
| Matemática | 107 | 17 | 90 | 0 |
| Português | 70 | 13 | 57 | 2 |
| Química | 91 | 12 | 79 | 0 |
| Redação | 31 | 10 | 21 | 0 |
| Sociologia | 42 | 9 | 33 | 0 |

| Outra prova | Entradas | Integrais | Lacunas |
|---|---:|---:|---:|
| etec | 264 | 19 | 245 |
| saresp | 528 | 221 | 307 |
| vunesp | 895 | 148 | 747 |
| fuvest | 903 | 143 | 760 |

## Limites e trabalho restante

As 730 lacunas exigem autoria ou revisão explícita de escopo integral. Permanecem 3 candidatos parciais sem resolução; não são automaticamente equivalentes. As 9 referências consultivas continuam inelegíveis para alias integral, mesmo quando o alvo já tem aula própria. A prioridade ENEM permanece nas filas de autoria e revisão. Não houve remoção de registros persistidos, alteração de schema/RLS, merge ou deploy. Contagens editoriais não certificam competências/habilidades oficiais Inep nem revisão docente.

Este relatório substitui o snapshot de 14/11 como referência atual para esta base; o documento anterior permanece histórico.
