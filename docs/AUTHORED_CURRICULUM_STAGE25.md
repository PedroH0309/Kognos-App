# Kognos — Etapa 25: ampliação curricular autoral

## Propósito

Adiciona **12 aulas inéditas**, verificadas antes da escrita quanto a duplicações no repertório, ao conjunto estático de materiais aprofundados do Kognos. Cada aula é específica e composta por:

- Três capítulos progressivos (básico, intermediário, avançado), com explicação, exemplo resolvido, erro recorrente e sua correção.
- Seis exercícios originais e comentados (dois por capítulo).
- Uma situação cotidiana resolvida, com hipóteses explícitas.
- Duas conexões conceituais para outros temas que também possuem aula aprofundada.

Os documentos são escritos no repositório; não dependem de geração por IA durante o estudo, nem alteram IDs, banco de dados, políticas RLS ou perfis dos usuários.

## Matemática (4)

1. Amostragem e interpretação de pesquisas
2. Ciclo trigonométrico
3. Cones
4. Polígonos regulares

## Química (4)

1. Energia de ligação
2. Titulação ácido-base
3. Propriedades coligativas
4. Corrosão

## Biologia (4)

1. Sistema cardiovascular
2. Sistema excretor
3. Órgãos dos sentidos
4. Sistema respiratório

## Integração e regressão

O conjunto é registrado em `authored-lessons-stage25.ts`, roteado por `starter-lessons.ts` e disponibilizado em `everyday-lesson-contexts.ts`. Novos testes verificam temas canônicos, ausência de duplicação com 433 aulas anteriores, composição de capítulos, exercícios, explicações, links e preservação das rotas não modificadas.

**Cobertura projetada após merge da cadeia de PRs anteriores:** 445 aulas aprofundadas, 1.335 capítulos, 2.670 exercícios comentados, 445 casos cotidianos e 890 conexões. Os temas do catálogo restantes usam material introdutório sinalizado como tal.

**Status de revisão:** material autoral introdutório ainda não homologado por docente. Os números e casos de aula são exemplos didáticos, não dados oficiais nem questões copiadas de provas. A branch da Etapa 25 depende da Etapa 24 (PR #84); nenhuma alteração foi mesclada automaticamente na `main`.
