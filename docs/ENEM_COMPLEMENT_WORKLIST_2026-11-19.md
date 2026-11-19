# ENEM — fila editorial de complementos (19/11/2026)

**Natureza:** revisão de escopo baseada no registro `apps/web/src/lib/canonical-lesson-reuse.ts` da branch do PR #120. Este documento **não** concede cobertura integral, não representa matriz oficial Inep e não cria aliases.

## Cinco complementos prioritários

| Disciplina | Entrada editorial alvo | Fonte autoral consultiva | Escopo comprovado na referência | Complemento ainda necessário |
|---|---|---|---|---|
| Matemática | Porcentagem e razão | Porcentagem, taxas e índices | Cálculo e interpretação de porcentagens, taxas e índices | Razões, proporcionalidade e modelos de aplicação além de taxas |
| Matemática | Probabilidade e estatística | Eventos e probabilidade simples | Universo, equiprobabilidade e probabilidade simples | Medidas estatísticas, distribuições, amostragem e probabilidade condicional |
| Biologia | Ecologia e impactos ambientais | Conceitos básicos de Ecologia | Níveis ecológicos, cadeias, teias e fluxo energético | Impactos antrópicos, poluição, conservação, ciclos biogeoquímicos e políticas ambientais |
| Português | Concordância, regência e crase | Concordância nominal e concordância verbal | Concordância nominal e verbal | Regência nominal, regência verbal e crase |
| Biologia | Citologia | Organização celular dos seres vivos | Procariontes, eucariontes e organização celular | Membranas, transportes, organelas, metabolismo e divisão celular |

Essas fontes estão registradas como **referências parciais**. Não se deve inferir que uma única aula complementar resolve o alvo: é necessário conferir todos os objetivos e a profundidade da fonte e da nova aula. O título editorial não equivale automaticamente a uma competência/habilidade oficial do ENEM.

## Critério de aceite para cada novo conteúdo

1. Conferir tópico, ID histórico, exame e escopo do edital, com fonte oficial quando disponível; registrar explicitamente qualquer competência/habilidade Inep efetivamente verificada.
2. Comparar todas as aulas profundas existentes no catálogo e nas branches/PRs antes de autorar; aprovar alias integral somente se a soma dos objetivos e a profundidade forem realmente equivalentes.
3. Para lacuna confirmada, criar aula original com três capítulos progressivos de aproximadamente 750+ caracteres cada, três exemplos resolvidos, pré-requisitos, erros comuns e pelo menos três questões objetivas A–D com respostas e comentários específicos.
4. Verificar identidade canônica compartilhada, isolamento entre provas, preservação de progresso/IDs históricos, integridade dos gabaritos, TypeScript, testes curriculares, segurança de dois usuários, design, build e CI.
5. Atualizar auditoria antes/depois a partir de execução reproduzível; nunca converter referências consultivas em cobertura integral nem afirmar eliminação de duplicações sem evidência.

## Linha de base verificável

Auditoria [ENEM_EDITORIAL_ALL_EXAMS_CI_2026-11-19.md](ENEM_EDITORIAL_ALL_EXAMS_CI_2026-11-19.md): 896 entradas editoriais, 896 títulos distintos, 192 vínculos integrais, 192 canônicas profundas distintas, 9 referências consultivas e 704 lacunas. Esta publicação apenas documenta a fila: **0 novas aulas, 0 novos aliases e 0 lacunas resolvidas**. As 13 entradas no registro global de referências parciais não são 13 referências ENEM efetivamente resolvidas.

**Pendência:** revisão pedagógica humana, confronto com matrizes oficiais e implementação de conteúdos. Não fazer merge nem deploy sem autorização.
