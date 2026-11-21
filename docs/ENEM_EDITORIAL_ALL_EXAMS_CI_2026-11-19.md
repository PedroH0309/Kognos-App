# Auditoria editorial por exame — CI de 19/11/2026

Fonte verificável: [Kognos CI #44493183597](https://github.com/PedroH0309/Kognos-App/actions/runs/44493183597), job `tests` (135453698053), commit `75dde63a98465441de3e66d89dbf606dec9ddf8a`, saída `KOGNOS_EDITORIAL_DISCIPLINE_AUDIT`. Este documento transcreve resultados efetivamente calculados; não altera cobertura nem valida pedagogicamente equivalências.

| Exame editorial | Entradas | IDs distintos | Canônicas profundas distintas | Vínculos integrais | Lacunas |
|---|---:|---:|---:|---:|---:|
| enem | 896 | 896 | 192 | 192 | 704 |
| etec | 264 | 264 | 21 | 21 | 243 |
| saresp | 528 | 528 | 223 | 223 | 305 |
| vunesp | 895 | 895 | 174 | 174 | 721 |
| fuvest | 903 | 903 | 169 | 169 | 734 |

Global (todos os exames): **400** fontes canônicas profundas distintas; **779** vínculos exame→aula. Não somar as fontes distintas por exame para obter o global. Registros persistidos apagados: **0**. Habilidades oficiais Inep verificadas nesta extração: **0**.

## ENEM por disciplina

| Disciplina | Entradas | Títulos exatos distintos | Vínculos integrais | Canônicas distintas | Referências consultivas | Lacunas |
|---|---:|---:|---:|---:|---:|---:|
| Matemática | 107 | 107 | 19 | 19 | 1 | 88 |
| Português | 70 | 70 | 15 | 15 | 6 | 55 |
| Literatura | 49 | 49 | 12 | 12 | 0 | 37 |
| Redação | 31 | 31 | 12 | 12 | 0 | 19 |
| Inglês | 34 | 34 | 12 | 12 | 0 | 22 |
| Espanhol | 19 | 19 | 12 | 12 | 0 | 7 |
| Física | 97 | 97 | 12 | 12 | 0 | 85 |
| Química | 91 | 91 | 14 | 14 | 0 | 77 |
| Biologia | 105 | 105 | 13 | 13 | 2 | 92 |
| História | 85 | 85 | 15 | 15 | 0 | 70 |
| Geografia | 75 | 75 | 12 | 12 | 0 | 63 |
| Filosofia | 42 | 42 | 11 | 11 | 0 | 31 |
| Sociologia | 42 | 42 | 11 | 11 | 0 | 31 |
| Arte | 28 | 28 | 11 | 11 | 0 | 17 |
| Educação Física | 21 | 21 | 11 | 11 | 0 | 10 |

As referências consultivas podem apontar para tópicos já cobertos por outra fonte e **não** são novas aulas profundas. A correspondência com matrizes oficiais ENEM permanece não homologada. A igualdade de títulos editoriais entre provas não é, isoladamente, comprovação de escopo integral.

## Antes e depois

Comparação com o [snapshot de 16/11/2026](ENEM_CI_SNAPSHOT_2026-11-16.md): ENEM **896 → 896** entradas; **896 → 896** títulos distintos; **192 → 192** fontes profundas; **192 → 192** vínculos integrais; **704 → 704** lacunas; **9 → 9** referências parciais. **0** novos vínculos e **0** novas aulas demonstrados entre as duas medições. O teste de disciplina consolida auditoria, não autoria.

## Limitações e continuidade

Prioridade: revisar escopo, série, objetivos e didática de fontes já profundas antes de aprovar aliases; registrar complementos para referências parciais; depois escrever pelo menos cinco aulas autorais profundas em lote viável. Os PRs #93 e #99 estão integrados à main; o PR #120 permanece draft. Nenhuma equivalência adicional foi homologada nesta extração. Manter testes unitários, segurança de dois usuários, design, TypeScript, build e revisão pedagógica. Não mesclar nem implantar sem autorização.
