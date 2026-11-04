# Kognos — beta público e controles de produção

Esta documentação acompanha a branch `hardening/kog-tutor-public-beta`. A branch e o PR **não** são uma declaração de que o serviço está publicado ou apto à produção. Não aplicar alterações direto à `main`.

## Estado verificável no código

- Administração editorial: `/api/content/admin` chama `contentAdmin()` em GET e POST. O servidor obtém a identidade com `auth.getUser(token)` e consulta `kognos_content_admins`. Sem associação retorna 403; sem sessão retorna 401.
- A migração existente `0015_editorial_courses.sql` revoga permissões de escrita de `anon`/`authenticated`, ativa RLS e restringe a execução das RPCs de escrita a `service_role`. Os testes de banco com dois usuários protegem contra autopromoção e acesso indevido, mas não validam a configuração do Supabase hospedado do proprietário.
- Tutor Kog: `/api/tutor` exige autenticação, perfil existente e provedor configurado. O contexto de aula/questão é obtido e conferido no servidor; respostas do provedor não são equivalentes a um professor humano.
- Tutor Kog agora reserva quota atômica por usuário no PostgreSQL usando `reserve_ai_quota` da migração **0002** antes de chamar `requestAI`. `TUTOR_DAILY_REQUEST_LIMIT` usa 30 como padrão e aceita 1–100. A quota é **compartilhada** com questões e desenvolvimento de aulas. Requisições rejeitadas por cota não chamam o provedor.
- Limites de aplicação não substituem limites de gastos e rate limits configurados no próprio provedor.

## Pendente de validação real antes de liberar usuários

1. Confirme no projeto Supabase de produção que as migrações `0001` a `0015` (incluindo `0002` e `0015`) foram aplicadas, **sem reeditar migrações já aplicadas**.
2. Em Authentication → Users, cadastre uma conta proprietária e conceda a associação administrativa exclusivamente pelo SQL Editor/service role. Nunca coloque uma chave de serviço no navegador e nunca use uma senha universal.
3. Com a conta administradora, execute `GET /api/content/admin` pelo aplicativo (com Bearer token). Confirme: sessão ausente = 401; aluno autenticado = 403; administrador = 200. Confirme também que só o admin salva/publica.
4. Com duas contas de aluno, confirme isolamento do histórico, respostas e perfil. Os testes PGlite não substituem essa verificação no banco real.
5. Com o Tutor configurado, confirme mensagem pedagógica, correção contextual e bloqueio por quota com `TUTOR_DAILY_REQUEST_LIMIT=1` em ambiente de teste. A primeira mensagem autorizada consome uma unidade; a próxima deve receber 429 sem consumir outra chamada ao provedor. O contador da cota é compartilhado com outras funcionalidades de IA.
6. Configure limites financeiros e de taxa no provedor de IA, monitore erros e valide termos, privacidade, exclusão de dados e backups.
7. Execute `npm ci`, `npm test`, `npm run test:content-db`, `npm run test:design`, `npm run typecheck` e `npm run build`.

## Endereço do beta sem comprar domínio

O **GitHub Pages não hospeda as rotas API do Next.js**, nem o servidor do Tutor Kog. Use o GitHub como fonte de código e publique um *Render Web Service* com um subdomínio `*.onrender.com` temporário. Um site estático no GitHub Pages não substitui este serviço.

Configure um novo serviço **Node**, conectado ao repositório `PedroH0309/Kognos-App`:

| Campo Render | Valor de exemplo |
|---|---|
| Source | Repositório GitHub conectado |
| Branch | `hardening/kog-tutor-public-beta` durante a validação |
| Root Directory | `.` |
| Build Command | `npm ci --no-audit --no-fund && npm run build` |
| Start Command | `npm --workspace @kognos/web run start -- --hostname 0.0.0.0 --port $PORT` |
| Runtime | Node.js 22 |
| Plan | Free, somente para beta e validação |

Depois do merge e da validação, altere a branch de deploy para `main` e configure publicação após CI bem-sucedido. Para uso crescente e estável, considere plano pago, métricas, limites, monitoramento e serviço escalável. Free pode suspender instâncias inativas e não é adequada para produção.

### Variáveis de ambiente no provedor de hospedagem

Use **Render → Environment**, não `.env` versionado:

- Variáveis públicas: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- Variáveis do servidor Supabase: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `SUPABASE_JWKS_URL`.
- Tutor e outras IA: `AI_FREE_ONLY=true`, `GEMINI_API_KEY` e/ou `GROQ_API_KEY`, `TUTOR_DAILY_REQUEST_LIMIT=30`, além dos provedores/modelos selecionados.
- Mantenha `SUPABASE_SECRET_KEY`, `GEMINI_API_KEY` e `GROQ_API_KEY` **fora do GitHub e do chat**. As chaves públicas e endpoints não são credenciais secretas, mas precisam apontar para o projeto correto.

Na autenticação Supabase, habilite em **URL Configuration** o domínio público efetivamente atribuído ao serviço e os URLs de redirecionamento necessários, com HTTPS. Faça testes reais de cadastro/login/recuperação de senha por outro dispositivo.

## Critérios de liberação

Não declare o beta funcional até existirem: URL real acessível de outro dispositivo, build/CI passando, teste de login com contas diferentes, backend configurado, uma resposta real do Kog, prova de 401/403 no painel editorial e limitação de quota, sem chaves expostas.

Status do trabalho nesta branch: **reforço de controles e preparação**. A publicação, conexão das chaves e verificação end-to-end do Supabase e do provedor dependem do ambiente real, não podem ser inferidas dos testes de código.
