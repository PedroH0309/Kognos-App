# Etapa 11 — Aulas aprofundadas, redigidas individualmente

## Decisão editorial

Por solicitação do responsável pelo Kognos, a biblioteca NÃO usa pipelines de produção textual em lote com Gemini, Groq ou serviços similares. O roteiro anterior de geração automática foi retirado nesta branch, inclusive CLI, workflow, registro de material gerado e testes exclusivos desse processo.

O desenvolvimento ocorre por aulas explicitamente escritas e revisáveis no código. O assistente redige cada módulo com conceitos, demonstrações, exercícios e resoluções de acordo com o tema. Isso continua sendo conteúdo **assistido por inteligência artificial**, não autoria humana ou homologação docente. Não afirmar que textos receberam validação de professor.

## Cobertura real

- Auditoria anterior do índice unificado: **1.512 temas curriculares** distintos dos roteiros ENEM, FUVEST, ETEC, VUNESP e Provão Paulista.
- Atualmente, esta branch contém **38 aulas desenvolvidas de modo específico**: 8 de Matemática e 30 nas outras 15 disciplinas.
- **114 capítulos e 228 atividades** com pistas e resoluções: três capítulos e seis atividades por aula.
- Os **1.474 temas restantes** conservam as introduções ou guias da Etapa 10; não devem ser anunciados como aulas aprofundadas.
- A publicação editorial no Supabase é prioritária; registros arquivados ou retirados não são reativados por fallback.

## Organização pedagógica

1. Fundamentos: definições, pressupostos e explicações próprias do tema.
2. Aplicação: demonstrações, procedimentos e exemplos resolvidos.
3. Aprofundamento: limites dos modelos, interpretação e tarefas contextualizadas.
4. Atividades: duas básicas, duas intermediárias e duas avançadas, com pistas e resoluções comentadas.
5. Progressão: o aluno continua na navegação Matérias → Conteúdos → Aula, com leitura, atividades, explicações e avanço.

Cada tema deve apresentar terminologia correta, contexto verificável, unidades e restrições adequadas quando houver cálculos; em ciências humanas, diferenciar evidências, interpretações e simplificações históricas. Evitar citações inventadas e cópias de questões oficiais.

## Arquivos

- `apps/web/src/lib/deep-math-lessons.ts`: oito módulos de Matemática.
- `apps/web/src/lib/deep-cross-subject-lessons.ts`: trinta módulos de quinze outras disciplinas.
- `apps/web/src/lib/starter-lessons.ts`: seleção de aula escrita por tópico, preservando fallback e IDs.
- Testes de cobertura e validade: `deep-math-lessons.test.ts`, `deep-cross-subject-lessons.test.ts` e `starter-lessons.test.ts`.

## Verificações

```sh
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
```

Esses testes verificam schema, integração e consistência estrutural; não garantem revisão científica integral de cada afirmação ou gabarito. A inspeção editorial e visual permanece pendente, inclusive em dispositivos móveis.

## Critério de finalização

A entrega não pode ser descrita como acervo completo antes de serem escritas aulas específicas para todos os 1.512 temas cadastrados, com verificação dos assuntos e exercícios. Enquanto isso, registrar explicitamente pendências. O aprofundamento de todas as disciplinas exigirá acréscimos editoriais sucessivos, sem geração automática por provedores externos.
