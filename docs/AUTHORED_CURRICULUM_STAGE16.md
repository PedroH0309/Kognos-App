# Etapa 16 — 16 aulas contextualizadas sobre fundamentos curriculares

## Objetivo pedagógico

Ampliar a biblioteca estática do Kognos com aulas escritas especificamente para assuntos ainda sem aprofundamento, em vez de apresentar geração por IA durante a leitura. Os textos foram redigidos pelo assistente diretamente no projeto e **não possuem homologação docente**. Dados numéricos de exemplos são hipotéticos, não estatísticas observadas nem enunciados copiados de provas proprietárias.

Cada aula contém:

1. **Problema cotidiano com pergunta e resolução**, relacionado ao conceito a aprender.
2. **Três capítulos próprios**, organizados em fundamentos, aplicação e aprofundamento, com explicação específica, exemplo ilustrativo e erro comum.
3. **Dois passos de estudo específicos por capítulo**, e não uma orientação genérica repetida para todo o acervo.
4. **Seis exercícios, dois por nível**, com pistas, cálculos ou justificativas e soluções.
5. **Duas conexões conceitualmente justificadas** para aulas específicas já disponíveis, permitindo navegação interdisciplinar.

## Módulos incorporados por esta etapa

| Disciplina | Assunto |
| --- | --- |
| Matemática | Regra de três simples |
| Física | Movimento uniformemente variado |
| Química | Reações químicas e balanceamento |
| Biologia | Meiose |
| História | Tráfico atlântico e resistências |
| Geografia | Escalas cartográficas |
| Português | Fato, opinião e ponto de vista |
| Literatura | Barroco brasileiro |
| Redação | Leitura da proposta e recorte temático |
| Inglês | Passado simples e contínuo |
| Espanhol | Futuro e condicional em espanhol |
| Filosofia | Indução e dedução |
| Sociologia | Cultura e etnocentrismo |
| Arte | Arte indígena |
| Educação Física | Jogos e brincadeiras tradicionais |
| Ciências | Circuitos elétricos simples |

## Contagem transparente

| Indicador | Antes, na main | Adição | Total após merge |
| --- | ---: | ---: | ---: |
| Aulas individuais aprofundadas | 85 | 16 | **101** |
| Capítulos escritos | 255 | 48 | **303** |
| Atividades com solução | 510 | 96 | **606** |
| Problemas cotidianos resolvidos | 85 | 16 | **101** |
| Conexões para aulas já aprofundadas | 170 | 32 | **202** |

O catálogo unificado foi anteriormente auditado em **1.512 temas**; **1.411 ainda não terão aula individual aprofundada** depois desta etapa e continuam servidos pelo material introdutório. Não anunciar o repertório completo nem atribuir aos materiais validação por professores.

## Arquitetura e testes

- `apps/web/src/lib/authored-lessons-stage16.ts`: novas aulas escritas individualmente, sem chamada à API em tempo de leitura.
- `apps/web/src/lib/starter-lessons.ts`: registro dos 16 temas por correspondência exata de disciplina/tópico, antes do fallback introdutório.
- `apps/web/src/lib/everyday-lesson-contexts.ts`: 16 novos problemas iniciais e 32 conexões motivadas com assuntos existentes.
- `apps/web/src/lib/authored-lessons-stage16.test.ts`: valida nomes do catálogo, autoria, não duplicação, integridade, conteúdo mínimo, exercícios, ligação com contexto e conexões para aulas de fato preparadas.
- `apps/web/src/lib/everyday-lesson-contexts.test.ts`: total de 101 problemas, sem temas duplicados e com links válidos.
- `apps/web/src/lib/authored-lessons-stage15.test.ts`: preserva a exigência de pelo menos 85 contextos anteriores sem impedir crescimento.

A revisão editorial em `Supabase` permanece prioritária, e regras de perfil, prática adaptativa, domínio por habilidade, autenticação, cotas de IA e migrações SQL não são alteradas. O build e os testes do CI verificam regressões de software; revisão pedagógica e precisão científica por especialistas continuam recomendadas.

## Direção da próxima etapa

Prosseguir em tópicos elementares de Matemática, Física, Química, Biologia e leitura/produção textual para ENEM e Provão Paulista, intercalando Humanas, Artes e Educação Física. Evitar duplicação de assuntos e melhorar gradualmente a densidade de exercícios, exemplos e conexões conforme lacunas de conteúdo identificadas.
