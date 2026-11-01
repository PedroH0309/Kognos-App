# Roadmap de implementação

## Fase 0 — Fundamento (esta entrega)

- [x] Consolidar público, modalidades e direção do produto.
- [x] Inspecionar e preservar os dois protótipos anteriores.
- [x] Definir stack web multiusuário.
- [x] Especificar requisitos, domínios, segurança e modelo de dados.
- [x] Criar primeira migração PostgreSQL com RLS.
- [x] Criar primeira casca visual em Next.js (dados demonstrativos identificados).
- [x] Implementar primeiro motor determinístico de domínio/prioridade.
- [x] Criar seis testes unitários do motor educacional.
- [ ] Instalar dependências e validar build em ambiente com acesso ao npm.

## Fase 1 — Fundação executável

- [ ] Criar projeto Supabase e aplicar migrações.
- [ ] Autenticação (cadastro, login, recuperação, logout, verificação de e-mail).
- [ ] Fluxo de onboarding e preferências.
- [ ] Proteção de rotas e RLS testada com dois usuários.
- [ ] Dashboard com dados reais.
- [ ] Painel administrativo básico e catálogo inicial revisado.

## Fase 2 — Núcleo de aprendizagem

- [ ] Catálogo de disciplinas, assuntos e habilidades.
- [ ] CRUD de questões no admin, revisão e publicação.
- [ ] Banco de questões pesquisável.
- [ ] Diagnóstico, sessão de simulado, salvamento e correção server-side.
- [ ] Histórico e métricas por assunto.
- [ ] Importação/exportação segura e validação de procedência.

## Fase 3 — Personalização adaptativa

- [ ] Motor determinístico de domínio e confiança.
- [ ] Planejador com disponibilidade e metas.
- [ ] Revisão espaçada.
- [ ] Explicação de recomendações.
- [ ] Testes contra duplicação de tarefas e amostras insuficientes.

## Fase 4 — IA integrada

- [ ] Gateway multi-provedor e configuração segura.
- [ ] Tutor contextual com fontes aprovadas.
- [ ] Análise de erros e explicações alternativas.
- [ ] Geração assistida de questões/flashcards com fila editorial.
- [ ] Limites, métricas de custo, retenção e fallback.

## Fase 5 — Preparação completa

- [ ] Flashcards completos e decks.
- [ ] Simulados longos com blueprint e cronômetro.
- [ ] Redação com rubrica e avaliação preliminar por IA.
- [ ] Relatórios avançados e exportação completa.
- [ ] PWA, acessibilidade auditada e beta externo.

## Fase 6 — Expansão

- [ ] Concursos e olimpíadas com matrizes específicas.
- [ ] Conteúdo em vídeo/aulas ao vivo.
- [ ] Comunidade/monitorias com moderação.
- [ ] Organizações/escolas e contas de responsáveis.
- [ ] Planos, pagamentos e aplicativo móvel, após validação de mercado.

## Gate para beta público

Não liberar inscrições abertas até que: isolamento RLS tenha testes automatizados; gabaritos estejam protegidos; fluxo de privacidade/minores esteja validado; dados exportáveis e excluíveis; catálogo tenha conteúdo licenciado/verificado; custos de IA tenham limites; e os principais fluxos E2E passem.
