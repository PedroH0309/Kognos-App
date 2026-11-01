# Kognos — regras de desenvolvimento

1. Mantenha a base FOCO original preservada em `legacy/`.
2. Projeto principal: Next.js + React/TypeScript + Supabase/PostgreSQL + NVIDIA NIM server-side.
3. Não marque funcionalidades demonstrativas como concluídas em produção.
4. Chaves de API apenas em variáveis de ambiente locais; nunca no código, em commits, em logs ou no ZIP.
5. Qualquer alteração no schema precisa de migração SQL, RLS, testes de dois usuários e documentação.
6. Materiais de provas devem indicar autoria, licença, origem e verificação; não copiar material proprietário da concorrência.
7. Acessibilidade: salvamos as opções funcionais escolhidas, nunca diagnósticos de saúde no fluxo padrão.
8. Persona do tutor Kognos é original. Não imitar nem alegar identidade de docente existente.
9. Testes primeiro para regras críticas; segurança e privacidade são requisitos de entrada em produção.
10. Antes de expor a API NVIDIA, exigir Supabase Auth, quotas e autorização consciente de envio ao provedor.
