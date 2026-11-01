# Modelo de dados — FOCO

## 1. Princípios

- UUIDs para entidades principais.
- Dados privados sempre vinculados a `user_id` e protegidos por RLS.
- Conteúdo educacional público separado do histórico pessoal.
- Gabarito separado do enunciado/opções em schema não exposto à API pública.
- Procedência e direitos de uso registrados em cada item.
- Tentativas e eventos de XP são históricos; não editar resultados passados sem trilha de auditoria.

## 2. Entidades principais

| Domínio | Entidades | Finalidade |
|---|---|---|
| Identidade | profiles, user_roles, consent_events | Perfil, função e registro de avisos/decisões de privacidade |
| Modalidades | exam_profiles, user_exam_targets | Configuração de ENEM, vestibulares, provas escolares etc. e metas pessoais |
| Taxonomia | subjects, topics, learning_objectives | Conhecimento independente de uma prova específica |
| Questões | questions, question_options, private.question_answer_keys | Enunciado, alternativas, origem e gabarito protegido |
| Planejamento | study_plans, study_tasks | Agenda, recomendações e execução |
| Avaliações | assessment_sessions, assessment_responses | Sessões, respostas e resultados |
| Revisão | review_items | Itens/conceitos e próxima revisão |
| Gamificação | xp_events | Histórico auditável de XP |
| IA | ai_usage_records | Uso/custo por funcionalidade sem guardar prompt completo por padrão |

## 3. Relacionamentos resumidos

```text
 auth.users ──1:1── profiles
      │
      ├──1:N── user_exam_targets ──N:1── exam_profiles
      ├──1:N── study_plans ──1:N── study_tasks
      ├──1:N── assessment_sessions ──1:N── assessment_responses
      ├──1:N── review_items
      ├──1:N── xp_events
      └──1:N── ai_usage_records

 exam_profiles ──N:M (via blueprints futuros)── subjects/topics
 subjects ──1:N── topics ──1:N── learning_objectives
 topics ──1:N── questions ──1:N── question_options
 questions ──1:1── private.question_answer_keys
```

## 4. Campos e regras importantes

### profiles

`id` = `auth.users.id`; `display_name` opcional; `education_stage`; `timezone`; `preferences` JSONB limitado a preferências não sensíveis; timestamps. Não guardar data de nascimento completa sem necessidade demonstrada.

### exam_profiles

`slug`, `name`, `category`, `description`, `configuration` JSONB, `is_active`, `version`. A configuração guarda regras específicas e é versionada para preservar resultados históricos.

### subjects / topics / learning_objectives

Taxonomia reutilizável; cada tópico pertence a uma disciplina e pode apontar para tópico pai. Objetivos possuem descrição observável e nível cognitivo. Pré-requisitos podem ser normalizados em uma tabela futura.

### questions

Enunciado, tipo, disciplina, tópico, objetivo, dificuldade, status editorial, procedência, fonte, licença e versão. Gabarito não fica na tabela pública.

### study_plans / study_tasks

Plano pertence ao usuário; tarefas pertencem ao plano e guardam duração, data, estado, origem (`manual`/`engine`) e justificativa. Recálculo deve ter chave de idempotência para evitar duplicatas.

### assessment_sessions / assessment_responses

Sessão pertence ao usuário e a um perfil de prova. Respostas preservam snapshot do item e horário. Resultado inclui método e versão de pontuação; gabarito só é consultado no servidor após submissão.

### review_items

Item de revisão relacionado a uma questão ou objetivo, com `due_at`, intervalo, repetições, último resultado e histórico futuro.

### xp_events

Eventos imutáveis, com `event_type`, quantidade positiva, `source_id` e `idempotency_key`. XP é calculado a partir dos eventos; cliente não escolhe a quantidade.

## 5. Políticas RLS esperadas

- `profiles`: usuário lê/atualiza somente o próprio perfil.
- dados privados: `user_id = auth.uid()` para leitura e operações permitidas.
- conteúdo: todos podem ler apenas itens publicados/ativos.
- escrita do catálogo: somente `content_editor` ou `admin`.
- `user_roles`: usuário consulta sua própria função; atribuição somente por administrador/fluxo seguro.
- gabaritos: sem acesso `anon`/`authenticated` pelo Data API; servidor consulta após submissão.
- eventos de XP, correção e consumo de IA: leitura própria; escrita apenas pelo servidor.

## 6. Próximas migrações

A migração `0001_core_schema.sql` cria a fundação. Migrações futuras devem adicionar, com RLS e testes: blueprints e seções de prova; aulas/blocos de conteúdo; decks/flashcards; redações e rubricas; conversas de IA com política de retenção; organizações/escolas; responsáveis e consentimentos específicos; auditoria ampliada.
