# Etapa 12 — Problema do cotidiano antes da teoria

## Diretriz pedagógica

Cada aula aprofundada abre com um problema concreto, plausível e curto. O exemplo deve servir ao conceito, não deslocar o estudante do tema. A leitura segue: **situação → pergunta → fundamentos → aplicação → conexão → exercícios e resolução**.

Os contextos são **exemplos didáticos autorais**, não relatos verificados ou dados estatísticos oficiais. Quando há valores numéricos, eles representam hipóteses transparentes. Não inventar números sobre estudos, saúde, empresas ou provas. Uma referência histórica deve manter seu período e condições.

## Implementação

- `everyday-lesson-contexts.ts` registra 38 situações, cada uma associada a uma das 38 aulas específicas já escritas (8 de Matemática e 30 em outras 15 disciplinas).
- Cada situação tem cenário, desafio objetivo e solução correta e comentada, além de duas relações conceituais com outros temas já desenvolvidos.
- `TopicLessonSections.tsx` exibe o problema no topo da aula escrita, apresenta conexões após os capítulos e mostra a resposta ao desafio na aba **Explicações**.
- `CurriculumStudyFlow.tsx` e `CurriculumRoom.tsx` permitem clicar nas conexões e navegar para outras aulas na estrutura Matérias → Conteúdos → Aula, inclusive entre disciplinas.
- O mecanismo é puramente estático, sem IA generativa em tempo de leitura e sem alteração do Supabase, da autenticação ou das tabelas.
- Aulas editoriais publicadas no Supabase não recebem contextos de fallback que possam contradizer seu conteúdo.

## Regras editoriais para próximas aulas

1. Começar com uma situação conhecida de alunos ou observável no cotidiano; preferir recursos, deslocamentos, linguagem real, instituições, atividades escolares ou fatos históricos documentados.
2. Fazer uma única pergunta central que a teoria da própria aula permita responder. Não forçar exemplos de outras matérias que exijam teoria não apresentada.
3. Explicar conceitos indispensáveis de modo direto, com definições, condições, unidades e limites quando aplicáveis.
4. Resolver o desafio inicial sem ocultar hipóteses. Não usar referências, porcentagens ou medidas fingindo serem observadas.
5. Indicar duas conexões conceituais contextualizadas, idealmente entre disciplinas, com título e motivo de pertinência. Links devem apontar apenas a conteúdo existente.
6. Distribuir seis tarefas em níveis básico, intermediário e avançado; explicar o raciocínio e erros frequentes.
7. Preservar diferenciação entre conteúdo escrito pelo assistente e material revisado e homologado por docente; a revisão pedagógica continua pendente.

## Cobertura e limites

São **38/1.512 assuntos** com problema contextualizado nesta etapa. Os outros 1.474 assuntos ainda não receberam aula aprofundada; não acrescentar para eles um problema inventado por um template genérico nem afirmar cobertura completa. Os testes verificam cobertura exata, integridade de relações e renderização via componentes; ainda são necessárias leitura crítica e verificação visual em dispositivos reais.
