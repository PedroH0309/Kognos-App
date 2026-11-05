# Etapa 14 — Ampliação interdisciplinar do repertório Kognos

## Critério didático
Cada módulo começa com um problema cotidiano original que motiva uma pergunta específica; em seguida, apresenta três capítulos focados em fundamentos, aplicação e interpretação crítica; seis exercícios graduados têm pistas e soluções justificadas; por fim, duas conexões com outros assuntos aprofundados permitem navegação entre matérias.

Os exemplos são situações didáticas, não dados estatísticos observados nem provas reproduzidas. As aulas são textos escritos diretamente pelo assistente no código, **sem geração por APIs durante a navegação do estudante**. Não recebem selo de aprovação ou homologação docente: `review:'introductory'` continua intencionalmente.

## 16 módulos desta etapa
| Disciplina | Aula |
| --- | --- |
| Matemática | Média aritmética e ponderada |
| Física | Potência e consumo de energia elétrica |
| Química | pH e pOH |
| Biologia | Imunidade, vacinas e soros |
| Português | Checagem de fontes e desinformação |
| Literatura | Modernismo: primeira geração |
| Redação | Contra-argumentação |
| Inglês | Orações condicionais em inglês |
| História | Redemocratização e Constituição de 1988 |
| Geografia | Mudanças climáticas globais |
| Ciências | Ciclos da água e do carbono |
| Sociologia | Indústria cultural e cultura de massa |
| Espanhol | Subjuntivo em espanhol |
| Filosofia | Filosofia da ciência |
| Arte | Música: ritmo, melodia, harmonia e timbre |
| Educação Física | Capacidades físicas e treinamento |

## Contagem transparente
- Acervo anterior: **53 aulas** (159 capítulos, 318 exercícios, 106 conexões).
- Adições da Etapa 14: **16 aulas** (48 capítulos, 96 exercícios, 32 conexões).
- Total após merge: **69 aulas** (207 capítulos, 414 exercícios, 69 problemas cotidianos resolvidos, 138 conexões).
- Catálogo unificado previamente auditado: **1.512 temas**; **1.443 ainda não têm aula aprofundada individualmente escrita** e permanecem no fallback inicial. Não anunciar o currículo como completo.

## Integração
- `apps/web/src/lib/authored-lessons-stage14.ts`: 16 módulos individuais e 16 problemas iniciais.
- `apps/web/src/lib/starter-lessons.ts`: resolução exata dos temas de Etapa 14 antes do fallback genérico, sem afetar publicações e arquivos editoriais do Supabase.
- `apps/web/src/lib/everyday-lesson-contexts.ts`: 16 desafios e 32 vínculos para aulas existentes.
- `apps/web/src/lib/authored-lessons-stage14.test.ts`: integridade de catálogo, três níveis, seis atividades, aprofundamento e proveniência.
- `apps/web/src/lib/everyday-lesson-contexts.test.ts`: cobertura de 69 entradas e links válidos.

## Diretrizes para a expansão
1. Ampliar cobertura conforme relevância ao ENEM e Provão Paulista, sem repetir assuntos já aprofundados.
2. Exemplos cotidianos devem esclarecer a teoria, sem digressões nem referências fabricadas.
3. As conexões têm um motivo conceitual explícito e apontam para módulos realmente existentes.
4. Preservar IDs, progresso, contexto do tutor, autenticação e precedência do conteúdo editorial.
5. Não confundir exercícios com a prática adaptativa separada nem afirmar avaliação docente quando ela não ocorreu.

Validação de CI cobre testes unitários, segurança de conteúdo, design, TypeScript e build. Isso não substitui revisão científica e pedagógica humana das explicações e gabaritos.
