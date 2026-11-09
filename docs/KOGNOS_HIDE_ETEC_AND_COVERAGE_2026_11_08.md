# Kognos — remoção completa da ETEC das opções e conteúdos públicos

## Solicitação correta

A expressão **“100%”** significa retirar inteiramente o **repertório ETEC** do site. Ela **não** se refere à porcentagem de progresso dos alunos. Percentuais e indicadores de cobertura permanecem exatamente como antes.

## O que deixa de ser exibido

- ETEC/Vestibulinho nas opções de prova do cadastro, dos filtros de Estudos, Disciplinas, laboratório/Trilhas legadas, questões, fontes e painel editorial.
- Tópicos curriculares **exclusivos** da ETEC nas listas de conteúdo dos estudantes; temas compartilhados com ENEM, Fuvest, Provão Paulista e Vunesp continuam.
- Fontes históricas ETEC nas listas de revisão; os registros continuam no banco.
- Associações à ETEC nas referências de aulas visíveis.
- Roteiro ETEC anteriormente salvo em perfis não volta automaticamente aos filtros, sem mudar o histórico do usuário.

## O que foi preservado

- O catálogo interno, com IDs e documentos ETEC antigos, para não quebrar progresso, provas, chaves de questões, testes e respostas salvas.
- As rotas históricas de leitura, referências oficiais, checagens de questões e validações de segurança.
- **Porcentagens de progresso e “100%” em todos os painéis**, pois sua remoção foi fruto de um mal-entendido.
- Todos os assuntos dos demais exames, os gabaritos e os dados dos estudantes.

Não há apagamento destrutivo do Supabase. Os filtros públicos utilizam a lista centralizada `publicExamIds`. A interface de Estudos filtra somente tópicos exclusivos ETEC depois de receber o catálogo existente. A interface do acervo de provas não publica fontes ETEC.

## Validação

Testes de unidade: `apps/web/src/lib/public-exam-visibility.test.ts`.
Testes de interface: `tests/hide-etec-and-coverage-design.test.mjs`.
Exigir a conclusão de unitários, segurança com dois usuários, design, TypeScript e build no GitHub Actions. PR em rascunho, sem merge/deploy sem revisão.
