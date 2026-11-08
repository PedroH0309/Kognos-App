# Kognos — retirar repertório ETEC e indicador “100%” — 2026-11-08

## Escopo solicitado
Remover o repertório específico do Vestibulinho ETEC **do site do estudante**, sem destruir históricos, respostas, IDs ou dados existentes. Retirar o percentual de cobertura de prática que pode aparecer como **100%**, embora seja apenas uma métrica de temas com tentativas registradas, não de aprendizagem concluída.

## Implementação
- Lista pública de exames centralizada em `publicExamIds`: ENEM, Fuvest, Provão Paulista e UNESP/Vunesp. O legado `ExamId = 'etec'` continua interpretável para registros antigos.
- Retirado o exame ETEC das opções visíveis de cadastro, Estudos, Disciplinas, Trilhas legadas, banco/geração de questões, Matrizes e painel editorial. A opção genérica de objetivo técnico tem nome **Curso técnico** e deixa de implicar um exame ETEC.
- O catálogo curricular público percorre somente os exames ativos; tópicos que existiam exclusivamente no roteiro ETEC deixam de ser listados pela API de conteúdo. Conteúdos compartilhados com outros exames continuam com os mesmos IDs.
- `activeSyllabi()` e `examForStudent()` ignoram o foco ETEC salvo ao decidir o currículo visível. Os valores originais do perfil continuam disponíveis, sem migração destrutiva.
- A biblioteca antiga ainda pode interpretar registros históricos ETEC, mas o catálogo geral omite tópicos gerados apenas para o exame desativado e as novas sugestões de geração não priorizam ETEC.
- Fontes editoriais antigas associadas à ETEC permanecem no banco; são filtradas somente na interface de revisão.
- No painel **Disciplinas** e no resumo das trilhas antigas, substituído o selo de porcentagem de cobertura por **N de M temas praticados**. Assim o usuário não interpreta “100%” como domínio de todo o conteúdo. Barras de progresso permanecem baseadas em dados reais; percentuais de acerto de questões e outros indicadores legítimos permanecem inalterados.

## Proteções
Nenhuma exclusão ou atualização automática de respostas e perfis; nenhum ajuste de RLS, migrations, Auth, gabaritos ou chaves de IA. Conteúdo original do Kognos, não oficial e sem homologação docente. A opção ETEC fica somente como formato histórico interno para compatibilidade.

## Validação
Testes de unidade: `apps/web/src/lib/public-exam-visibility.test.ts`.
Testes estruturais: `tests/hide-etec-and-coverage-design.test.mjs`.
A CI do PR em rascunho deve passar por unitários, PostgreSQL de dois usuários, design, TypeScript e build antes de qualquer merge ou deploy. Revisão visual permanece recomendada.
