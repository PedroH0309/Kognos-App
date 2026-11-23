# ENEM-first — triagem editorial por impacto (20/11/2026)

> Documento de planejamento, não certificação oficial do Inep. Não altera vínculos, não aprova equivalências e não representa homologação docente.

## Fonte reproduzível

Base: [snapshot extraído da CI de 16/11](ENEM_CI_SNAPSHOT_2026-11-16.md), proveniente da execução [43899834816](https://github.com/PedroH0309/Kognos-App/actions/runs/43899834816). A matriz oficial de competências e habilidades do ENEM deve ser verificada separadamente; títulos e disciplinas abaixo são **editoriais do Kognos**. Os números não foram recalculados neste documento.

| Disciplina editorial | Entradas | Vínculos integrais | Lacunas | Taxa de cobertura |
|---|---:|---:|---:|---:|
| Biologia | 105 | 13 | 92 | 12,4% |
| Matemática | 107 | 19 | 88 | 17,8% |
| Física | 97 | 12 | 85 | 12,4% |
| Química | 91 | 14 | 77 | 15,4% |
| História | 85 | 15 | 70 | 17,6% |
| Geografia | 75 | 12 | 63 | 16,0% |
| Português | 70 | 15 | 55 | 21,4% |
| Literatura | 49 | 12 | 37 | 24,5% |
| Filosofia | 42 | 11 | 31 | 26,2% |
| Sociologia | 42 | 11 | 31 | 26,2% |
| Inglês | 34 | 12 | 22 | 35,3% |
| Redação | 31 | 12 | 19 | 38,7% |
| Arte | 28 | 11 | 17 | 39,3% |
| Educação Física | 21 | 11 | 10 | 52,4% |
| Espanhol | 19 | 12 | 7 | 63,2% |
| **Total** | **896** | **192** | **704** | **21,4%** |

## Ordem de trabalho

1. **Antes de produzir conteúdo**, reconciliar as 704 lacunas editoriais contra aulas profundas de todas as provas, incluindo main, branches e PRs históricos. Usar identidade de tópico, objetivos, subtemas, profundidade e série, não semelhança lexical isolada.
2. Começar a revisão de candidatos por **Biologia, Matemática, Física, Química e História**, que concentram 412 lacunas históricas. A prioridade é volume de lacunas, não previsão de equivalência.
3. Para cada candidato, registrar: exame e ID de destino; ID canônico fonte; cobertura integral/consultiva/ambígua; evidência de objetivos e subtemas; escopo faltante; competência/habilidade oficial somente quando identificada em fonte oficial.
4. Publicar aliases **somente** após revisão integral; referências parciais ficam consultivas e exigem complemento autoral explícito.
5. Depois dos reaproveitamentos, produzir lote de cinco aulas profundas ENEM, quando viável, com três capítulos progressivos (aproximadamente 750+ caracteres cada), três exemplos resolvidos, pré-requisitos, erros frequentes, três questões A–D independentes com índices e soluções comentadas, e autoria original não oficial.
6. Reexecutar auditorias, testes curriculares, isolamento de dois usuários, TypeScript, build e CI. Arquivar antes/depois por SHA; sem CI verde, não afirmar validação.

## Critério de fechamento

A diferença **704 lacunas** não equivale a 704 aulas novas necessárias: uma aula canônica pode servir a vários exames, mas somente com equivalência integral verificada. A contagem de duplicações lógicas evitadas deve ser separada de exclusões físicas (nenhuma exclusão comprovada). Não fundir PR ou fazer deploy sem revisão. A meta de 20/11 não justifica promover cobertura parcial a integral.
