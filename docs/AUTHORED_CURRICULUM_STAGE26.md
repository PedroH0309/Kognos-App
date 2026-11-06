# Kognos — Etapa 26: Física, Geografia e Português

## Escopo
Continuação do PR #85, com **12 novos temas canônicos** escritos individualmente, sem substituição de 445 aulas existentes. O material é estático, original e não é gerado por API de IA durante a leitura. Nenhuma alteração em `main`, no `legacy/`, em IDs, no banco de dados ou no histórico de usuários.

### Física (4)
- Vazão e continuidade
- Capacitores
- Campo magnético
- Teorema de Stevin

### Geografia (4)
- Rede urbana e metropolização
- Organizações internacionais
- Oceanos e correntes marítimas
- Estrutura fundiária e reforma agrária

### Português (4)
- Preconceito linguístico
- Formação de palavras
- Modalização e impessoalização
- Oralidade e escrita

## Metodologia
Cada aula inclui objetivo próprio, **três capítulos** progressivos (básico, intermediário, avançado), explicação conceitual, exemplo resolvido, erro recorrente e correção fundamentada. Os dois exercícios por capítulo incluem enunciado, pista e solução, totalizando **72 exercícios originais**. Cada tema tem também um caso cotidiano resolvido e **duas conexões** a conteúdos previamente aprofundados (ou ao mesmo lote).

## Integração e qualidade
- `authored-stage26-physics.ts`, `authored-stage26-geography.ts` e `authored-stage26-portuguese.ts` contêm os textos específicos.
- `authored-lessons-stage26.ts` agrega aulas e contextos.
- `starter-lessons.ts` habilita navegação pelos IDs originais.
- `everyday-lesson-contexts.ts` incorpora situações; testes avaliam URLs conceituais, IDs, unicidade, estrutura, rotas e preservação das etapas anteriores.

Cobertura acumulada **projetada após mesclagem da cadeia**: **457 aulas aprofundadas**, **1.371 capítulos**, **2.742 exercícios comentados**, **457 casos cotidianos** e **914 conexões**, dos **1.512 temas** no catálogo editorial. O restante preserva o fallback introdutório corretamente identificado.

**Limitação editorial:** o material permanece pendente de revisão docente independente. Fontes vinculadas ao catálogo informam programas de referência, mas as aulas e questões não são provas oficiais.
