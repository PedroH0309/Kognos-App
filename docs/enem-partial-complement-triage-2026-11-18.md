# Revisão editorial ENEM — 18/11/2026

> Documento de triagem, não homologação docente nem equivalência oficial do Inep. O catálogo do Kognos usa títulos editoriais; competências/habilidades oficiais só podem ser atribuídas após conferência individual na matriz do Inep.

## Fonte e critério

Inspecionados nesta rodada: `AGENTS.md`, `apps/web/src/lib/canonical-lesson-reuse.ts`, `enem-gap-worklist.test.ts`, `enem-first-backlog-integrity.test.ts` e `enem-depth-lessons.ts` na branch `audit/enem-regression-20261116`. Os testes existentes constroem inventários a partir dos catálogos em tempo de execução; seus relatórios JSON **não foram executados nesta revisão**. Portanto, não se publicam totais atuais, aprovação de CI ou novas equivalências sem comprovação.

## Reaproveitamento seguro e complementos

O registro possui um alias semântico explícito, `Coesão, coerência e progressão temática` → aula aprofundada de mecanismos de coesão, restrito aos exames declarados no registro. A justificativa registrada inclui coesão lexical, referencial, sequencial, coerência global e progressão temática. Essa decisão não autoriza propagação para interpretação, argumentação ou gêneros.

Os seguintes pares do registro são **apenas sobreposições parciais**, nunca cobertura integral:

| Alvo editorial | Fonte parcial | Complemento necessário |
| --- | --- | --- |
| Porcentagem e razão | Porcentagem, taxas e índices | Razões, proporcionalidade e aplicações |
| Probabilidade e estatística | Eventos e probabilidade simples | Estatística, distribuições, amostragem e probabilidade condicional |
| Ecologia e impactos ambientais | Conceitos básicos de Ecologia | Poluição, conservação, ciclos e impactos antrópicos |
| Intertextualidade e argumentação | Intertextualidade e interdiscursividade | Tese, evidências e estratégias argumentativas |
| Urbanização e globalização | Questão urbana no Brasil e no mundo | Fluxos globais, redes mundiais e divisão internacional do trabalho |
| Variação linguística e norma-padrão | Distinção entre variedades linguísticas | Convenções normativas e adequação |
| Morfologia e classes de palavras | Classes de palavras | Formação, estrutura e flexão |
| Concordância, regência e crase | Concordância nominal e verbal | Regência e crase |
| Semântica e figuras de linguagem | Níveis de significação do texto | Figuras e relações semânticas |
| Gêneros textuais e tipos de discurso | Modos de organização do texto | Gêneros, discursos e contextos de uso |
| Citologia | Organização celular dos seres vivos | Membranas, transportes, organelas, metabolismo e divisão |
| Células, organelas e membranas | Organização celular dos seres vivos | Organelas, membranas e transportes |
| Célula e saúde | Organização celular dos seres vivos | Saúde, prevenção e funcionamento do organismo |

Esses 13 itens são **descrições no registro**, não 13 referências resolvidas nem 13 lacunas ENEM exclusivas. A presença e a profundidade da fonte devem ser verificadas pelos resolvedores antes de contagem.

## Próximo lote autoral, condicionado à deduplicação

Priorizar complementos específicos de: (1) razões e proporcionalidade; (2) estatística descritiva e amostragem; (3) impactos ambientais e ciclos biogeoquímicos; (4) regência e crase; (5) membranas, organelas e transporte celular. Antes de produzir, comparar com todas as aulas profundas nas branches/PRs, confirmar os IDs dos tópicos, escopo e série. Cada nova aula deve ter três capítulos extensos, três exemplos resolvidos e três questões objetivas A–D com gabarito comentado, dicas, pré-requisitos e erros frequentes.

## Auditoria antes/depois

A última referência histórica reportada foi 896 entradas ENEM, 192 vínculos integrais e 704 lacunas; **não é uma medição atual desta branch**. Nesta alteração documental: zero novos aliases, zero aulas, zero vínculos comprovados e zero duplicações comprovadamente eliminadas. Executar os testes de auditoria e guardar seus relatórios para obter entradas, títulos distintos, canônicas, links, parciais e lacunas atuais por disciplina. Não confundir a matriz oficial do Inep com o blueprint editorial.

**Restrições:** não alterar `main`, IDs históricos, banco, RLS, progresso, gabaritos ou rotas; não declarar CI verde sem execução verificável; revisão pedagógica continua pendente.
