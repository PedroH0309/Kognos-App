# KOGNOS — Aprendizagem inteligente

> **KOGNOS É PROPRIETÁRIO — TODOS OS DIREITOS RESERVADOS.** Este projeto **não é open source**. A reutilização ou comercialização do código sem autorização não é permitida, observados os termos do GitHub e as exceções legais. Veja [LICENSE](LICENSE).
> **Quer ajudar?** Abra uma Issue ou envie um Pull Request conforme [CONTRIBUTING.md](CONTRIBUTING.md). No repositório privado, peça ao mantenedor acesso como colaborador.

**Versão 0.5.0 — Redesign visual completo das telas existentes, paleta oficial unificada, scrollbars próprias, navegação lateral recolhível e configuração local protegida da API NVIDIA.**

Kognos é a evolução do protótipo FOCO. Os protótipos antigos foram preservados na distribuição v0.5 original; os ZIPs legados foram excluídos deste pacote de GitHub para evitar redistribuição desnecessária. O projeto principal agora é uma aplicação Next.js 16 com App Router, React 19, TypeScript, Supabase e um gateway seguro de IA NVIDIA NIM.

## O que funciona nesta versão

- **Identidade Kognos original**: logomarca K e ilustração próprias em `apps/web/public/brand/`.
- **Onboarding em cinco etapas**: apelido, modalidade de prova, nível, rotina, métodos de estudo, acessibilidade e revisão.
- **Adaptações**: a pergunta sobre TDAH/dislexia é opcional; permite sugerir recursos de foco/leitura, mas a condição em si NÃO é salva e NÃO é enviada à IA.
- **Modo local demonstrativo**: onboarding e preferências persistidos apenas no navegador (`localStorage`), sem necessidade de credenciais para testar a interface.
- **Modo multiusuário com Supabase**: cadastro/login por e-mail e senha, confirmação de e-mail conforme configuração do projeto e perfis independentes no PostgreSQL com RLS.
- **Tutor com API NVIDIA**: rota `/api/tutor` com autenticação validada pelo Supabase, quota diária atômica por usuário, aviso transparente sobre processamento externo e prompt didático personalizado.
- **Perfil e conta**: foto (visitante local ou bucket privado Supabase), nome público, @usuário único, biografia, alteração de e-mail/senha, recuperação e opção de mostrar apenas senhas digitadas.
- **Aparência**: modo claro/escuro, paleta de 13 tokens, componentes com estilos próprios, rolagem customizada, sidebar recolhível, busca de módulos e barra inferior no mobile.
- **Kog**, mascote vetorial original do tutor, com persona professoral e equilibrada.
- **Prática demonstrativa funcional**: 20 questões autorais, simulados por matéria, correção comentada, registro de resultados e visualização de desempenho.
- **Plano semanal local ou sincronizado**: tarefas manuais, sugestão inicial de agenda, conclusão e exclusão.
- **Objetivos múltiplos** no onboarding, inclusive aprendizado pessoal.
- **Motor educacional anterior preservado** em `packages/education-engine`.
- **Testes automatizados** para motor educacional e regras do tutor.

**Ainda não implementados**: simulados oficiais completos, CRUD online de questões, redação, integração do domínio por habilidade com exercícios sincronizados, sincronização completa de avaliações oficiais (somente as tarefas e tentativas demonstrativas são sincronizadas na v0.4). O dashboard mostra apenas dados reais locais existentes — não estimativas inventadas. No menu esses módulos são apresentados como futuros, sem números inventados.

## Rodar no Windows — modo de demonstração

1. Instale Node.js 22 LTS ou outra versão compatível com Next.js 16 (mínimo 20.9).
2. Extraia o ZIP numa pasta que não seja `node_modules`.
3. No terminal do VS Code, na pasta raiz `Kognos`:

```powershell
npm install
npm run dev
```

4. Abra **http://localhost:3000**. Você pode concluir onboarding e experimentar a interface sem configurar o banco. O tutor remoto exige conta e configurações abaixo.
5. Rode `npm test` para verificar as regras locais.

> Neste ambiente de criação, `npm install` não pôde ser concluído porque `registry.npmjs.org` retornou `EAI_AGAIN`. Testes Node.js que não dependem de instalação funcionaram. O build completo ainda requer execução no seu computador.

## Configurar login, persistência e tutor NVIDIA

### 1. Prepare o Supabase

1. Crie um projeto em https://supabase.com/dashboard.
2. No SQL Editor, execute **nesta ordem**:
   - `supabase/migrations/0001_core_schema.sql`
   - `supabase/migrations/0002_kognos_onboarding_ai.sql`
   - `supabase/migrations/0003_account_and_avatars.sql` **(necessária para nome de usuário, biografia e fotos)**
   - `supabase/migrations/0004_demo_cloud_sync.sql` **(sincronização das atividades demonstrativas)**
   - `supabase/seed/seed.sql` (opcional, catálogo inicial demonstrativo)
3. Configure **Authentication → URL Configuration → Site URL** como `http://localhost:3000` para testes, e ajuste a URL de redirecionamento permitida.
4. Configure **Authentication → Providers → Email** e as opções de confirmação desejadas. Para o lançamento público, valide o fluxo de confirmação de e-mail e as políticas de privacidade.

### 2. Crie `apps/web/.env.local`

No Windows, execute **`CONFIGURAR_KOGNOS.bat`** para criar e abrir o arquivo privado; ou copie manualmente `apps/web/.env.example` para `apps/web/.env.local` e preencha:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://SEU-PROJETO.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=SUA_CHAVE_PUBLICAVEL
SUPABASE_URL=https://ktjdlvojnunjntwyodot.supabase.co
SUPABASE_PUBLISHABLE_KEY=SUA_CHAVE_PUBLICAVEL
SUPABASE_SECRET_KEY=SUA_CHAVE_PRIVADA_COMPLETA
SUPABASE_JWKS_URL=https://ktjdlvojnunjntwyodot.supabase.co/auth/v1/.well-known/jwks.json
NVIDIA_API_KEY=SUA_NOVA_CHAVE_NVIDIA
NVIDIA_MODEL=meta/llama-3.3-70b-instruct
NVIDIA_API_BASE_URL=https://integrate.api.nvidia.com/v1
AI_DAILY_REQUEST_LIMIT=20
```

**IMPORTANTE:** revogue a chave NVIDIA que foi exposta em uma conversa e use outra recém-gerada. Não envie, publique ou commite seu `apps/web/.env.local`. Também nunca exponha `SUPABASE_SECRET_KEY` no frontend. A chave publicável e a URL são as únicas variáveis com prefixo `NEXT_PUBLIC_`.

A URL e chave publicável do seu projeto estão predefinidas em `apps/web/.env.example`. A chave de servidor foi fornecida mascarada e portanto NÃO foi preenchida. Copie a chave completa diretamente do painel Supabase para `.env.local` no seu próprio computador.

O `NVIDIA_MODEL` é configurável. Se não estiver liberado no seu catálogo, escolha um modelo habilitado da lista https://build.nvidia.com/.

### 3. Reinicie o servidor

```powershell
npm run dev
```

Crie uma conta na interface (e confirme seu e-mail, caso esteja ativado), complete o onboarding e abra **Kog · Tutor IA**. O aviso de privacidade fica visível no formulário: as mensagens e o contexto pedagógico necessário são processados pela NVIDIA, sem pedir autorização a cada envio. O backend valida a sessão, aplica a quota e encaminha o pedido ao endpoint oficial.

## Segurança, custos e restrições

- O servidor nunca responde com a chave. As credenciais não aparecem no bundle do navegador.
- Nenhuma conversa é persistida no banco nesta versão; a conversa fica no estado temporário da aba. **Conteúdo enviado ao tutor passa por infraestrutura de IA da NVIDIA**.
- O provedor e modelo podem ter limites e custos; monitore a conta do provedor antes de abrir o serviço ao público.
- Quota **por usuário autenticado**, não por IP, para impedir uso irrestrito da chave. Ainda serão necessários proteção contra abuso de cadastro, monitoramento, moderação e revisão de segurança antes do lançamento público.
- O cadastro de menores requer revisão jurídica, política de privacidade e medidas adequadas de proteção. A versão atual é **beta de desenvolvimento**, não um serviço público pronto.
- O uso de TDAH/dislexia no onboarding não é diagnóstico, teste clínico ou substituto de acompanhamento profissional.
- O professor virtual é uma persona original; inspira-se em boas práticas didáticas e não imita a identidade de um professor real.

## Estrutura

```text
apps/web/
  public/brand/        Marca, ícone e hero originais
  src/app/             Página inicial, layout, estilos e API protegida
  src/components/      Aplicação, cadastro, onboarding, dashboard e tutor
  src/lib/             Perfil, Supabase e prompt de IA
packages/education-engine/  Motor anterior preservado
supabase/migrations/        Esquema original + quota diária do Kognos
docs/                      Especificação e decisões
legacy/                    Protótipos FOCO originais intactos
```

## Próxima evolução

- Perfil de acesso para menores e consentimento adequado para produção.
- Plano adaptativo com persistência real (reaproveitar `education-engine`).
- Banco de questões com revisão de origem/licença.
- Simulados com correção protegida no servidor.
- Testes de integração e RLS com usuários distintos.

Ver `docs/KOGNOS_SPRINT_02.md` e `docs/KOGNOS_AI_EDUCATION.md`.

## Atualização v0.3 — Perfil e redesign

O visual segue a paleta Deep Navy (#101B33), Intelligence Violet (#5B4DE3), Progress Cyan (#38CDE5), superfícies claras Soft White (#F7F9FC), e oferece tema claro/escuro, barra inferior móvel e mascote Kog. Consulte `docs/KOGNOS_VISUAL_SPEC_USER.md` para o briefing integral e `docs/KOGNOS_SPRINT_03.md` para o estado de cada recurso.

### Conta e foto

Acesse **Meu perfil** na sidebar ou no avatar do cabeçalho. Escolha foto, nome público, @usuário e descrição. Em **Configurações → Conta e segurança**, altere e-mail e senha ou solicite recuperação. O texto da senha antiga **não pode ser exibido** porque o sistema só armazena credenciais de forma não recuperável.

Fotos de contas conectadas exigem a migration `0003` aplicada. Fotos de visitante e resultados de treino são **dados locais deste navegador**, não são sincronizados com a nuvem. Para detalhes, consulte `docs/ACCOUNT_SECURITY.md`.

### Tutor NVIDIA

O Kog usa o gateway já implementado em `apps/web/src/app/api/tutor/route.ts`; somente o servidor lê `process.env.NVIDIA_API_KEY`. O endpoint oficial é `https://integrate.api.nvidia.com/v1/chat/completions`, mas modelos/limites dependem de permissão da sua conta. Não coloque chaves em arquivos rastreados pelo Git ou neste ZIP.

### Testes

`npm test` executa **18 testes de lógica**, além dos novos testes de interface e configuração na versão 0.5. Sem acesso ao registro do npm, o build e as integrações com Supabase/NVIDIA permanecem **não validados**.


## Atualização v0.4 — projeto Supabase fornecido

- Identificador do projeto: `ktjdlvojnunjntwyodot`; URL e chave **publicável** já estão no `.env.example` (não são segredos).
- Tutor protegido usando o SDK oficial `@supabase/server`, projetado para rotas que recebem `Authorization: Bearer ...`. Instale com `npm install` na raiz; a dependência consta em `apps/web/package.json`.
- As variáveis secretas **não** estão incluídas no projeto; digite os valores completos no arquivo ignorado `apps/web/.env.local`.
- Planejamento e histórico demonstrativos de contas autenticadas agora são carregados/salvos no banco, com RLS por usuário. Visitantes continuam locais.
- Rode SQL migration `0004_demo_cloud_sync.sql` depois das três anteriores.
- Não há migração automática dos dados antigos salvos em dispositivos.
- Leia `docs/KOGNOS_SPRINT_04_SUPABASE.md` antes de publicar.


## Atualização v0.5 — redesign e configuração NVIDIA

### Nova identidade visual

- Paleta oficial: `#101B33`, `#273A61`, `#5B4DE3`, `#38CDE5`, `#F7F9FC`, `#EDF1F7`, `#202633`, `#111722`, `#18B78A`, `#F0AD4E`, `#E46D75`, `#1D2638`, `#778398` e `#E0E6EF`.
- `apps/web/src/app/design-system.css` centraliza os tokens, variantes claro/escuro, inputs, botões, painéis, cards, opções de prova, telas de perfil e tutor. É importado DEPOIS do CSS anterior para reduzir regressões; a migração total do CSS antigo pode ocorrer quando os módulos forem concluídos.
- Scrollbars estilizadas com Firefox `scrollbar-color` e WebKit `::-webkit-scrollbar`, rolagem lateral para configurações pequenas e navegação por teclado.
- Menu lateral recolhível no desktop, controle de aparência e expansão do menu no mobile. O estado de recolhimento fica salvo apenas no navegador.
- Estados de componente e contraste revistos para tema claro e escuro. As páginas ainda em construção exibem estados vazios honestos, não dados fabricados.

Consulte `docs/KOGNOS_DESIGN_SYSTEM_V05.md` para tokens, regras e cobertura.

### Configure a chave NVIDIA como administrador

**Windows:** execute `CONFIGURAR_API_NVIDIA.bat` na pasta principal do projeto, informe uma **nova** chave `nvapi-...` na entrada oculta do PowerShell e pressione Enter. O script grava a chave em `apps/web/.env.local` (ignorado pelo Git) e oferece entrada opcional para o modelo. Reinicie `npm run dev` depois de configurar.

**Linux/macOS:** copie `apps/web/.env.example` para `apps/web/.env.local`, se não existir, e edite somente o arquivo privado para adicionar `NVIDIA_API_KEY=...`. Nunca use `NEXT_PUBLIC_NVIDIA_API_KEY`.

**Importante:** a chave não é inserida na interface dos estudantes, nem empacotada no ZIP. O servidor exige uma sessão Supabase, um projeto Supabase funcional com migrações aplicadas e uma chave autorizada pela NVIDIA.

### Envio ao tutor e privacidade

O formulário do Kog apresenta um **aviso informativo** sobre o provedor e quais informações são enviadas; não há checkbox obrigatório por mensagem. No backend, o parâmetro `consent` foi removido. O tutor continua usando a conta autenticada e um limite de requisições. Este comportamento não elimina a necessidade de política de privacidade, transparência e verificações de requisitos legais antes do lançamento público, especialmente para menores de idade.

### Verificação

Execute `npm test` e `npm run test:design`. Os testes existentes cobrem lógica educacional, perfis e armazenamento. Os novos testes conferem tokens, scrollbars, configuração sem segredos e ausência da antiga exigência de checkbox. O build de Next.js ainda depende da instalação de dependências; não foi declarado testado neste ambiente.


## Direitos autorais e participação

**© 2026 PedroH0309 — All Rights Reserved.** O repositório é proprietário; a colaboração acontece por Issues e Pull Requests, mediante regras de contribuição. Veja `LICENSE`, `CONTRIBUTING.md`, `SECURITY.md` e `docs/PROTECAO_E_COLABORACAO_GITHUB.md`.
