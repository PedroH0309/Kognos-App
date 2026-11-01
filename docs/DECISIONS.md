# Registro de decisões técnicas e de produto

## ADR-001 — Produto multiusuário

**Decisão:** FOCO será uma plataforma pública multiusuário, não apenas aplicativo pessoal local.

**Motivo:** cadastro, sincronização, perfis, administração de conteúdo e evolução para escolas exigem separação por usuário desde o banco.

## ADR-002 — Next.js + Supabase

**Decisão:** Next.js App Router + React + TypeScript no web; Supabase Auth/Postgres/Storage no backend gerenciado.

**Motivo:** experiência web robusta, SSR, rotas e interface responsiva, com Postgres e RLS para dados pessoais. O protótipo Streamlit fica como referência.

## ADR-003 — Monólito modular

**Decisão:** iniciar com uma aplicação full-stack organizada por domínios. Não introduzir FastAPI ou microserviços sem necessidade técnica medida.

## ADR-004 — Regras de aprendizagem determinísticas

**Decisão:** agendamento, seleção de questões, pontuação, XP e progressão usam regras testáveis. IA explica e personaliza conteúdo, mas não muda resultados oficiais do sistema.

## ADR-005 — Gabarito protegido

**Decisão:** gabaritos ficam em schema privado e só são consultados pelo servidor após submissão. Respostas e XP são gravados por endpoint autorizado.

## ADR-006 — Procedência de conteúdo

**Decisão:** cada questão tem tipo de procedência, fonte, licença e estado de verificação. Não presumir que prova disponível online é reutilizável.

## ADR-007 — Gamificação saudável

**Decisão:** não descontar XP por erros/descanso e não ativar ranking público por padrão.

## ADR-008 — IA desacoplada

**Decisão:** usar interface de provedor server-side, limites de uso e registro de custo. Nenhuma chave de IA vai para o browser.
