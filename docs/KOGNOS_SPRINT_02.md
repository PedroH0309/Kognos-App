# Kognos v0.2 — Registro de implementação

## Produto decidido
- Nome oficial: **Kognos**; FOCO permanece como nome histórico da base.
- Identidade D: premium + educacional, interface navy/índigo/violeta com acentos ciano.
- Tutor: professoral e equilibrado; método próprio, sem simular a voz ou identidade de Pedro Assaad.
- Modalidades: ENEM, vestibulares, ETEC, provas escolares, concursos e olimpíadas.
- Web responsiva primeiro; app instalável PWA após estabilizar fluxos.

## Onboarding
1. Nome opcional? No fluxo atual o apelido é obrigatório para uma saudação pessoal; não é necessário nome legal.
2. Meta: modalidade, etapa, nível, meta específica e data opcional.
3. Rotina: dias, tempo por dia e duração da sessão.
4. Aprendizagem: preferências múltiplas + tom professoral/equilibrado.
5. Acessibilidade: pergunta opcional sobre TDAH/dislexia que configura apenas adaptações funcionais.
6. Revisão e conclusão; armazenamento local em demonstração e cloud quando autenticado.

## Decisões de privacidade
- Informação de diagnóstico clínico não é persistida. Ativadores iniciais só alteram lista de preferências funcionais.
- O perfil salvo contém apenas preferências, metas e rotina; não é usado para classificação clínica.
- Conteúdo de conversa vai à NVIDIA somente após confirmação explícita no formulário do tutor.
- Histórico do tutor não é armazenado no Supabase nesta versão.
- Não se executam chamadas externas ao provedor em testes sem credenciais privadas.

## Recursos implementados
- Logo, ícone e hero WEBP originais gerados e incorporados ao frontend.
- Onboarding em cinco etapas, dashboard real de preferências, edição e perfil.
- Autenticação Supabase quando configurada, persistência de perfil com RLS original.
- Gateway `/api/tutor` com `getUser(token)` para validação, quota RPC atômica, sistema de prompt, limite de caracteres/histórico e tratamento de erros.
- Migração SQL `0002_kognos_onboarding_ai.sql` cria quota segura e função reservada ao service_role.
- Testes de persona, sanitização, perfil e validação.

## Limitações honestas
- Não conectado de verdade ao NVIDIA neste ambiente: não há chave nova segura e nenhum projeto Supabase fornecido.
- Instalação npm/build completo não pôde ser validado neste ambiente por falha DNS `EAI_AGAIN` no registry.npmjs.org.
- Migrações e políticas ainda exigem teste em projeto real antes de produção.
- O app ainda não está hospedado online. Não há URL pública.
- Testes de fluxo visual / acessibilidade formal, CI, proteção anti-bot, recuperação de senha e consentimento legal de menores permanecem pendentes.
- Outros módulos visíveis como em desenvolvimento e não simulam dados.

## Próximos critérios de aceite
- `npm install`, `npm run build` e validação TS executados no ambiente com acesso ao registry.
- Dois usuários não podem consultar nem alterar perfis um do outro.
- No backend, requisições sem JWT retornam 401, com JWT vencido 401, sem sessão 401, além da quota 429.
- Contas de menores não devem entrar em produção sem revisão de consentimento e privacidade.
- Questões e gabaritos nunca expostos indevidamente ao navegador.
