# Kognos — Contas e segurança

## Senhas

- Senhas são geridas pelo Supabase Auth. O Kognos não possui API para consultar ou exibir a senha antiga.
- O campo de nova senha possui botão Mostrar/Ocultar para conferir **somente o texto que você está digitando**.
- Recuperação: login > Esqueci minha senha; o link é enviado pelo Auth. Configure Site URL e Redirect URLs no painel do Supabase, por exemplo `http://localhost:3000` durante testes.
- O fluxo de recuperação é detectado pelo evento `PASSWORD_RECOVERY` do SDK.
- Alteração de e-mail pode solicitar confirmação do e-mail atual e novo dependendo do projeto.

## Fotos

- Visitantes: foto é redimensionada para 256 × 256 no navegador e fica apenas no localStorage daquele dispositivo.
- Usuários autenticados: arquivos JPG, PNG e WebP até 3 MB vão para bucket **privado** `kognos-avatars` no Supabase Storage.
- RLS limita upload, leitura, alteração e exclusão ao prefixo `{auth.uid()}/`.
- A URL de acesso é assinada com validade de uma hora e carregada novamente quando a pessoa abre o aplicativo. Deve ser renovada em sessões abertas por períodos longos (pendente).
- Deletar a foto remove o ponteiro do perfil e tenta apagar o objeto de storage. Deleção automática integral da conta e limpeza de objetos órfãos são melhorias futuras.

## Nome de usuário

- Regra: 3 a 24 caracteres, começa com letra, aceita letras minúsculas, números e underscore.
- Index UNIQUE do PostgreSQL garante exclusividade entre contas. Para convidados, a escolha é provisória.
- Uma tabela `profiles` com RLS permite apenas ao próprio usuário ler e alterar seus dados pessoais.

## Serviços externos

- Somente `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` podem ser públicos.
- `NVIDIA_API_KEY` e `SUPABASE_SECRET_KEY` devem permanecer **somente no servidor**, em `.env.local` ou secret store do host.
- Nunca compartilhe keys em chats, issues, commits, vídeos, prints, logs ou ZIPs distribuídos.
- Rota `/api/tutor` valida o token com `auth.getUser`, reserva cota no banco via service role e chama a API NVIDIA. Não há exposição de key no navegador.
- Ative proteções contra abuso de cadastro, política de retenção e proteção de menores antes do lançamento público.
