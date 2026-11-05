# Etapa 13 — 15 aulas adicionais redigidas especificamente por tema

## Princípio editorial

O Kognos apresenta aulas pré-montadas e redigidas diretamente na biblioteca do projeto, **sem executar geração de aulas por IA a pedido do estudante**. O assistente redige o material em código; isso não equivale a autoria humana nem a revisão pedagógica certificada. Cada conteúdo permanece marcado como `review:'introductory'` até revisão editorial responsável.

Em cada aula: **problema cotidiano, pergunta objetiva, três capítulos, três exemplos específicos, três alertas de erro, seis atividades progressivas com pistas e resoluções, duas relações com outros assuntos**. Situações hipotéticas são apresentadas como exemplos didáticos, não como estatísticas ou fatos verificados.

## Assuntos contemplados nesta etapa

- Português — Coesão sequencial e conectivos.
- Literatura — Realismo brasileiro.
- Redação — Proposta de intervenção: agente, ação, meio, finalidade e detalhamento.
- Física — Conservação da energia mecânica.
- Química — Concentração comum e molaridade.
- Biologia — Primeira lei de Mendel.
- História — Abolição e pós-abolição.
- Geografia — Segregação socioespacial.
- Sociologia — Trabalho e divisão social.
- Inglês — Verbos modais.
- Espanhol — Conectores argumentativos em espanhol.
- Filosofia — Argumentação e falácias.
- Arte — Arte e tecnologia.
- Educação Física — Atividade física e saúde.
- Ciências — Cadeias e teias alimentares.

## Contabilização verificável

- Antes: **38 aulas específicas**, em dezesseis disciplinas, com três capítulos e seis atividades cada.
- Novo lote: **15 aulas específicas**, três capítulos, seis atividades, quinze situações iniciais e trinta conexões.
- Após a etapa: **53 aulas aprofundadas**, **159 capítulos**, **318 atividades com solução**, **53 situações iniciais** e **106 conexões**.
- Catálogo unificado anteriormente auditado: **1.512 temas**. Permanecem **1.459 temas** com guias introdutórios ou material-base, não aulas integralmente desenvolvidas.

## Implementação e segurança editorial

- `apps/web/src/lib/authored-lessons-stage13.ts`: módulos individuais e situações do novo lote.
- `apps/web/src/lib/starter-lessons.ts`: novas aulas específicas prevalecem sobre o guia genérico, preservando documentos oficiais publicados e arquivados no Supabase.
- `apps/web/src/lib/everyday-lesson-contexts.ts`: incorpora os novos problemas e suas conexões.
- `apps/web/src/components/CurriculumRoom.tsx`: remove a opção de gerar uma aula com o Kog dentro da área de Estudos; preserva a navegação e a prática existente.
- `apps/web/src/app/api/content/generate/route.ts`: resposta de compatibilidade HTTP **410 Gone**, sem executar provedores, reservar cotas ou gravar aulas.
- Testes de estrutura, temas reais, profundidade, conexões e ausência da rota de geração validam a biblioteca no CI.

## Critérios da próxima rodada

Escrever aulas individuais de assuntos ainda sem aprofundamento, priorizando progressão curricular do Provão Paulista e ENEM; escolher exemplos que de fato ensinem o conceito, sem digressões. A revisão editorial e checagem de precisão de todas as afirmações continuam pendentes. O relatório de CI valida software, não garante homologação por professor.
