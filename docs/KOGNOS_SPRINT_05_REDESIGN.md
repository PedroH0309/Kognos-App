# Kognos v0.5 — Redesign e configuração do tutor

## Escopo concluído no código

- Unificação da paleta oficial em `apps/web/src/app/design-system.css`, mantendo a folha antiga para compatibilidade e importando a nova por último.
- Scrollbar fina e tematizada para viewport, sidebar, listas e mensagens; suporte Firefox e Chromium/WebKit desktop.
- Reestilização do shell SaaS, dos cards e indicadores, das telas já existentes de onboarding, perfil, segurança, prática, planejamento e tutor.
- Menu recolhível no desktop e sobreposição mobile para fechar o menu; preferência do modo recolhido salva localmente.
- Ícones Lucide para estatísticas, metas e categorias de configurações.
- Área de tutor com aviso informativo permanente sobre NVIDIA. Remoção do checkbox obrigatório por envio e da validação `body.consent` da rota protegida.
- `CONFIGURAR_API_NVIDIA.bat` + `scripts/configurar-nvidia.ps1`: input oculto da credencial em Windows; arquivo privado `apps/web/.env.local` preservado. O script não envia segredo ao frontend.
- Prévia de identidade `docs/PREVIA_VISUAL.html`, exclusivamente ilustrativa e offline (não representa dados de aluno).

## Validações executadas

- `npm test`: 18 testes aprovados.
- `npm run test:design`: 4 testes aprovados.
- Verificação sintática TypeScript/TSX com TypeScript global: 18 arquivos; zero erros de sintaxe.
- Parser `tinycss2`: folhas CSS lidas sem erros de sintaxe no nível superior.
- Scanner de arquivos textuais: nenhuma credencial NVIDIA ou chave secreta Supabase real em código distribuído.

## Limites

- `npm install` travou neste ambiente, portanto o build com Next.js não foi executado.
- Screenshot automatizado com Chromium não concluiu neste ambiente. A prévia HTML foi criada, mas o visual responsivo final requer validação em navegador e iPhone reais.
- O configurador PowerShell não foi executado neste ambiente Linux; foi revisado estaticamente para Windows.
- Não se validou chamada real à API NVIDIA nem autenticação Supabase ao vivo. As chaves privadas não são distribuídas.
- O design das telas implementadas foi refinado; os módulos educacionais ainda em desenvolvimento continuam identificados como indisponíveis.

## Privacidade

O tutor expõe um aviso claro antes do envio: pergunta atual, histórico curto e preferências pedagógicas serão encaminhados à NVIDIA para gerar respostas. Não solicita confirmação a cada mensagem. Isso não constitui automaticamente base legal suficiente para todos os usuários; a publicação de um produto para menores exige políticas de privacidade, avaliação jurídica e medidas de proteção adequadas.
