# Arquitetura técnica — FOCO

## 1. Direção

Aplicação web full-stack em Next.js App Router, monólito modular. Supabase oferece Postgres, Auth e Storage. O backend do Next.js funciona como camada de aplicação e chama serviços de domínio e provedores de IA no servidor.

Não iniciar com microserviços. Python/FastAPI poderá ser introduzido quando houver um workload de ML, processamento ou scoring que justifique um serviço separado.

## 2. Componentes

- **Web UI:** React + TypeScript; Server Components para leitura inicial e Client Components somente onde houver interação.
- **Application layer:** Route Handlers/Server Actions; autenticação, validação, autorização, limites e orquestração.
- **Domain layer:** pacote independente `packages/education-engine` para regras puras de domínio, prioridade e explicação adaptativa; os demais domínios seguem sem dependência de UI.
- **Persistence:** Postgres via Supabase; migrations versionadas; RLS em todas as tabelas com dados privados.
- **Storage:** Supabase Storage para avatares e arquivos de conteúdo autorizados; buckets privados quando necessário.
- **AI gateway:** provider adapter server-side, orçamento, rate limit, prompt versioning, recuperação de contexto aprovado, validação da saída e métricas.
- **Operations:** GitHub Actions, logs, monitoramento, backup e gestão de segredos.

## 3. Organização proposta

```text
packages/education-engine/  # regras determinísticas e testes do motor educacional
apps/web/src/
  app/                     # rotas e layouts
  components/              # design system
  features/
    auth/ dashboard/ learning/ assessments/ questions/
    planning/ reviews/ tutor/ essays/ performance/ admin/
  server/
    application/            # casos de uso
    domain/                 # regras puras
    repositories/           # persistência
    ai/                     # gateway e provedores
  lib/                      # env, supabase, logger, rate limit
supabase/
  migrations/
  seed/
docs/
tests/
```

## 4. Domínios e contratos

- **Identity:** perfil, papéis, sessão, preferências e consentimentos.
- **Catalog:** modalidades, áreas, disciplinas, assuntos, habilidades, aulas e fontes.
- **Assessment:** blueprint, sessão, itens, respostas, submissão, resultado e revisão.
- **Learning:** trilhas, blocos de aula, objetivos, progresso e domínio.
- **Planning:** disponibilidade, plano, tarefas, recomendações e recálculo idempotente.
- **Review:** fila, feedback e agendamento espaçado.
- **AI:** tutor, geração assistida, feedback, retrieval e medição de custo.
- **Gamification:** eventos XP, níveis e conquistas.
- **Administration:** revisão/publicação, auditoria e gestão de conteúdo.

## 5. Segurança e fluxo de dados

1. Toda operação de usuário começa com sessão autenticada.
2. O servidor deriva `user_id` da sessão, nunca do body enviado pelo cliente.
3. Regras de acesso são aplicadas no servidor e novamente no banco por RLS.
4. Chave `service_role` só existe no servidor e só é usada onde necessário.
5. Gabaritos ficam em schema privado e são acessados pelo servidor após a submissão.
6. Conteúdo publicado pode ser lido; escrita de conteúdo exige papel de editor/admin.
7. Eventos XP, correções e resultados são escritos pelo servidor para impedir manipulação do cliente.
8. Logs não contêm senha, tokens, chaves nem redações/conversas integrais por padrão.

## 6. API inicial (contratos planejados)

- `GET /api/me` — perfil resumido.
- `GET /api/dashboard` — resumo e próximas ações.
- `GET /api/catalog/exams` — modalidades ativas.
- `GET /api/catalog/topics` — taxonomia filtrada.
- `POST /api/assessments/sessions` — cria sessão a partir de blueprint.
- `POST /api/assessments/sessions/:id/responses` — salva resposta validada.
- `POST /api/assessments/sessions/:id/submit` — corrige no servidor e fecha sessão.
- `POST /api/plans/recalculate` — recálculo idempotente com justificativas.
- `GET /api/reviews/due` — revisões vencidas.
- `POST /api/reviews/:id/grade` — feedback e agendamento seguinte.
- `POST /api/ai/tutor` — tutor com rate limit e contexto aprovado.
- `POST /api/ai/essay-feedback` — feedback preliminar de redação.

Contratos devem validar entrada e saída com schemas compartilhados (Zod ou alternativa equivalente).

## 7. Estratégia de IA

Pipeline: autenticar → aplicar limite/quota → classificar funcionalidade → montar contexto permitido → recuperar material aprovado → compor prompt versionado → chamar provedor → validar formato → verificar citações/contexto → registrar tokens/custo → responder.

- Tutor deve priorizar conteúdo do catálogo. RAG pode começar por busca textual e evoluir para embeddings/pgvector.
- Geração de questões e flashcards é assistida e entra como rascunho, nunca diretamente publicada.
- Planejador calcula a agenda por regras testadas; IA pode produzir uma explicação natural da decisão.
- Correção de redação retorna comentários vinculados à rubrica e evidências do texto; a nota é preliminar.
- Provider adapter deve permitir trocar provedor/modelo sem alterar os módulos de produto.
- Limitar tamanho de entrada, chamadas/dia, tokens e custos; aplicar proteção contra prompt injection em documentos recuperados.

## 8. Desempenho e escala

Começar com Postgres bem indexado, paginação e cache apenas para conteúdo público. Não cachear resposta privada entre usuários. Medir primeiro; adicionar filas para embeddings, importações e geração em lote quando houver volume.

## 9. Testes obrigatórios

- unidade: prioridade adaptativa, revisão, pontuação, XP e validação de importação;
- integração: repositories e transações Postgres;
- autorização: RLS e tentativa de acesso cruzado entre usuários;
- API: gabarito não exposto, submissão idempotente, limites de IA;
- E2E: cadastro, onboarding, diagnóstico, simulado, revisão e exportação;
- acessibilidade: teclado, foco, leitor de tela e contraste.
