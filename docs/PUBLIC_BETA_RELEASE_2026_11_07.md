# Kognos — plano de publicação do beta público (2026-11-07)

> Estado verificado pelas integrações GitHub e Render, **não** por um teste de ponta a ponta. Esta branch não altera produção nem a `main` sem revisão e merge.

## Infraestrutura já existente

- Código: `PedroH0309/Kognos-App` (monorepo; Next.js em `apps/web`, build na raiz via npm workspaces).
- Serviço Render existente: `kognos-beta-live`, URL `https://kognos-beta-live.onrender.com`; último deploy visto como `live`, commit `21c927e`, branch `hardening/kog-tutor-public-beta`.
- Logs do Render mostraram `next start` iniciando com sucesso. A acessibilidade externa, o fluxo de cadastro e a conexão real com Supabase e IA **não foram confirmados**.
- Outro serviço Render, `kognos-beta`, apresentou `build_failed`; não deve ser divulgado.
- Em 2026-11-07, a branch do serviço e `main` divergiam; não repontar o deploy para `main` ou para um PR sem antes reconciliar e validar as diferenças.
- Hospedagem `free` do Render é indicada apenas para teste/beta experimental: dormência após inatividade e recursos limitados. Não prometer disponibilidade de produção.

## Proteção adicionada nesta proposta

A geração de questões reserva, no banco, uma unidade da mesma quota diária por conta utilizada pelo tutor Kog **antes** de acessar os provedores. Falha no RPC da migração 0002 bloqueia a chamada (503); limite esgotado retorna 429. O limite é configurável em `TUTOR_DAILY_REQUEST_LIMIT` (padrão 30; valores 1–100), compartilhado com o tutor. Cada solicitação de geração consome uma unidade mesmo quando gera até cinco questões. Não há promessa de uso ilimitado dos provedores gratuitos. Esta mudança só chegará ao serviço depois do merge e da escolha explícita da branch de deploy.

## Ações para liberar inscrições públicas

1. **CI:** executar `npm install --no-audit --no-fund`, `npm test`, `npm run test:content-db`, `npm run test:design`, `npm run typecheck` e `npm run build`; exigir todos verdes no commit de release.
2. **Integração:** confirmar migrações `0001` a `0015` no projeto Supabase usado pelo site. Fazer backup antes de qualquer alteração e nunca reaplicar manualmente migrações em conflito.
3. **Variáveis no Render:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, `SUPABASE_JWKS_URL`, `AI_FREE_ONLY=true`, `GROQ_API_KEY` e/ou `GEMINI_API_KEY`, `TUTOR_DAILY_REQUEST_LIMIT` e os seletores de provedor/modelo. Definir valores secretos **apenas no painel da hospedagem**, nunca neste repositório ou em conversa.
4. **Supabase Auth:** definir `Site URL` para `https://kognos-beta-live.onrender.com` e adicionar somente redirects HTTPS necessários. Confirmar e-mail, recuperação de senha, configurações de SMTP, CAPTCHA e limites de inscrição.
5. **Autorizações:** em dois usuários reais diferentes, provar isolamento de perfil, respostas, histórico e fotos; tentar URLs administrativas sem sessão (401), com aluno (403) e com editor (200).
6. **IA:** verificar `/api/ai-status` (apenas configuração), depois realizar de fato uma mensagem do tutor e uma geração de questões; testar quota usando conta dedicada e limite = 1 em ambiente de teste, confirmando resposta 429 e ausência de chamadas adicionais.
7. **Privacidade:** revisar aviso de privacidade, tratamento de dados de estudantes e menores, exclusão de contas/dados e termos de terceiros; estabelecer backup, monitoramento, plano para falhas e limites dos provedores.
8. **Distribuição:** somente após a validação, escolher um commit/branch de release para o Render e usar essa versão testada como URL a divulgar. Atualizar o serviço existente, não criar instâncias duplicadas.

## Critério objetivo de publicação

- URL pública acessível e funcional em celular e desktop; cadastro, login e recuperação testados.
- Banco real, autenticação e RLS verificados com usuários distintos.
- Nenhuma chave secreta no cliente ou logs.
- CI e build aprovados, tutor e geração de questões com chamadas reais, quota 429 comprovada.
- Conteúdo demonstrativo/IA identificado com transparência, com documentação de privacidade.

Se algum requisito falhar, manter o beta restrito a testes e não anunciar como pronto para uso amplo.
