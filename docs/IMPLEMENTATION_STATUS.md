# Estado da implementação — primeira fundação

## Entregue neste pacote

- PRD funcional multiusuário e modalidades iniciais.
- Arquitetura de monólito modular com Next.js App Router, Supabase/PostgreSQL e gateway de IA server-side planejado.
- Esquema PostgreSQL inicial com 20 tabelas e 29 políticas RLS.
- Separação do gabarito em schema privado.
- Seed das seis modalidades iniciais e disciplinas-base.
- Interface inicial de dashboard em Next.js, identificada como demonstração e sem dados de usuário real.
- Pacote `@foco/education-engine` com estimativa de domínio, confiança de evidências, prioridade por assunto e justificativas.
- Seis testes automatizados do motor educacional, todos passando.
- Dois ZIPs originais dos protótipos preservados em `legacy/`.

## Verificações executadas

- `npm test`: 6 testes aprovados, 0 falhas.
- Sintaxe TSX/TS verificada por transpilation do TypeScript disponível no ambiente: `layout.tsx`, `page.tsx` e `next.config.ts` sem erros de sintaxe.
- JSON válido nos manifests e no tsconfig.
- Balanceamento de chaves do CSS verificado.
- Inspeção estática da migração: 20 tabelas com RLS habilitada e 29 políticas declaradas.

## Não verificado / ainda não implementado

- `npm install` não completou: o ambiente retornou `EAI_AGAIN` ao resolver `registry.npmjs.org`. Portanto, dependências Next.js não foram instaladas.
- `npm run lint` e `npm run build` não executados; requerem instalação de dependências.
- Migração SQL não aplicada a PostgreSQL/Supabase real; exige revisão e testes de integração/RLS antes de produção.
- Autenticação real, onboarding, módulos, persistência online e painel admin ainda não conectados.
- IA não conectada a nenhum provedor.
- Conteúdo de prova/questões oficiais não incluído; o seed contém apenas perfis de modalidade e disciplinas, sem blueprint validado por edital.
- Não existe deploy/URL pública.

## Próximo gate técnico

1. Instalar dependências num ambiente com acesso ao npm e gerar `package-lock.json`.
2. Criar projeto Supabase de desenvolvimento e aplicar migração após revisão.
3. Executar testes de RLS com dois usuários e conta de editor/admin; confirmar que gabaritos nunca aparecem pelo Data API.
4. Implementar Supabase SSR Auth e onboarding.
5. Trocar métricas demonstrativas por dados reais somente após autenticação e políticas verificadas.


## v0.4 Supabase
Public env prefilled; masked server secret missing. API tutor upgraded to @supabase/server Bearer JWT. Demo tasks and attempts sync through migration 0004 RLS. Production connectivity unverified.
