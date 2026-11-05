# Etapa 15 — Aulas específicas, contextualizadas e interligadas

## Modelo editorial
O Kognos continua expandindo os módulos de estudo **escritos diretamente no código**. Cada aula começa com um problema cotidiano, apresenta explicações específicas em três níveis (fundamentos, aplicação e aprofundamento), fornece exemplos e alertas de erros e inclui seis tarefas gradativas, todas com pista e resolução. Nesta etapa, **cada um dos três capítulos possui dois passos próprios de estudo**, em vez de instruções repetidas indistintamente em várias aulas.

Situações ilustrativas não devem ser anunciadas como fatos observados ou estatísticas oficiais. O conteúdo é redigido pelo assistente (uso de IA na autoria) sem chamadas a provedores externos durante a leitura, não é copiado de questões de exames e não recebeu homologação docente. O campo `review:'introductory'` permanece.

## Dezesseis aulas novas

| Disciplina | Tema |
| --- | --- |
| Matemática | Progressão geométrica |
| Física | Calor sensível e capacidade térmica |
| Química | Equilíbrio químico e constantes |
| Biologia | Fotossíntese e quimiossíntese |
| História | Primeira República brasileira |
| Geografia | Urbanização brasileira |
| Sociologia | Marx: classes sociais e conflito |
| Filosofia | Contratualismo: Hobbes, Locke e Rousseau |
| Português | Variação regional, social e histórica |
| Literatura | Naturalismo brasileiro |
| Redação | Desenvolvimento e tópico frasal |
| Inglês | Voz passiva em inglês |
| Espanhol | Variação linguística e voseo |
| Arte | Arte barroca brasileira |
| Educação Física | Esporte, mídia e consumo |
| Ciências | Saneamento básico |

## Cobertura verificável

- Antes da etapa: **69 aulas específicas**, 207 capítulos, 414 exercícios comentados, 69 problemas cotidianos e 138 conexões.
- Novas: **16 aulas**, 48 capítulos, 96 exercícios, 16 problemas resolvidos e 32 conexões entre assuntos preparados.
- Após a etapa, se incorporada: **85 aulas aprofundadas**, **255 capítulos**, **510 exercícios com resolução**, **85 problemas cotidianos** e **170 conexões pedagógicas**.
- Catálogo unificado previamente auditado: **1.512 temas**. Restam **1.427 tópicos sem aula individual aprofundada**, que continuam com material introdutório ou guia. Não descrever o acervo como completo.

## Integração

- `apps/web/src/lib/authored-lessons-stage15.ts`: 16 novas aulas estáticas, exemplos cotidianos e passos de estudo individualizados.
- `apps/web/src/lib/starter-lessons.ts`: identificação por `subject/topic` exatos antes do fallback genérico.
- `apps/web/src/lib/everyday-lesson-contexts.ts`: novos desafios e relações clicáveis entre assuntos existentes.
- `apps/web/src/lib/authored-lessons-stage15.test.ts`: valida profundidade textual mínima, estrutura, progressão, autoria, títulos do catálogo, esquemas e referências de conexões.
- `apps/web/src/lib/everyday-lesson-contexts.test.ts`: confirma abrangência de 85 aulas distintas, sem apontar conexões para materiais sem aprofundamento.
- `apps/web/src/lib/authored-lessons-stage14.test.ts`: teste histórico passa a exigir preservação das 69 aulas anteriores, permitindo crescimento do catálogo.

Nenhuma alteração de esquema, autenticação, perfil do estudante, regras de domínio, cotas ou provedores de IA. O Supabase editorial continua prioritário e materiais arquivados não devem ser reativados pelo fallback.

## Critérios das próximas etapas

Expandir em sequência, com prioridade para fundamentos curriculares do Provão Paulista e ENEM. As conexões entre aulas devem explicar relações conceituais reais, não apenas apresentar novos títulos. Manter precisão de unidades em ciências exatas, contextualização crítica em humanas, respeito à variação linguística e resolução demonstrada nas questões. Testes de código não substituem revisão científica e pedagógica humana.
