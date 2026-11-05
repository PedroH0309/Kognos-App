# Etapa 19 — mais 64 aulas sobre bases dos vestibulares

## Objetivo

Ampliar os módulos escritos do Kognos usando o **padrão reutilizável da Etapa 18**, sem gerar aulas por IA no momento em que o aluno abre o conteúdo. A estrutura compartilhada está em `authored-lesson-blueprint.ts` e a nova camada de autoria compacta em `authored-lesson-recipe.ts`. Esta camada apenas transforma campos escritos por tema em dados da estrutura anterior: **não inventa teoria, resposta nem exercícios em runtime**.

Cada aula oferece três capítulos autorais de dificuldade progressiva com explicação conceitual, caso concreto e um erro recorrente, além de seis atividades: uma questão diretamente ligada ao capítulo e um diagnóstico de erro com justificativa. Cada aula inclui problema inicial cotidiano com resposta e duas conexões para aulas aprofundadas existentes.

## Disciplinas e assuntos

| Disciplina | Aulas específicas da etapa |
| --- | --- |
| Matemática | MDC e MMC; Juros simples; Sistemas de equações; Teorema de Pitágoras |
| Física | Movimento uniforme; Energia cinética; Potência e rendimento; Impulso e quantidade de movimento |
| Química | Distribuição eletrônica; Massa molar; Diluição e mistura de soluções; Ácidos, bases, sais e óxidos |
| Biologia | Carboidratos; Fotossíntese e quimiossíntese; Segunda lei de Mendel; Seleção natural e adaptação |
| História | Revolução Francesa; Independência do Brasil; Primeira Guerra Mundial; Ditadura militar brasileira |
| Geografia | Matriz energética brasileira; Transição demográfica; Migrações internas e internacionais; Problemas ambientais urbanos |
| Português | Concordância verbal; Crase; Pontuação e efeitos de sentido; Argumentação e estratégias persuasivas |
| Literatura | Trovadorismo; Naturalismo brasileiro; Semana de Arte Moderna; Literatura indígena brasileira |
| Redação | Contra-argumentação; Competências da redação do ENEM; Fuga ao tema e tangenciamento; Artigo de opinião |
| Inglês | Inferência de sentidos em inglês; Orações condicionais em inglês; Voz passiva em inglês; Conectivos e relações lógico-discursivas em inglês |
| Espanhol | Inferência e vocabulário em espanhol; Possessivos e demonstrativos em espanhol; Subjuntivo em espanhol; Gêneros textuais e multimodalidade em espanhol |
| Filosofia | Empirismo de Locke e Hume; Criticismo de Kant; Liberdade e responsabilidade; Democracia, cidadania e justiça |
| Sociologia | Taylorismo, fordismo e toyotismo; Movimentos sociais; Cidadania e direitos humanos; Globalização e sociedade em rede |
| Arte | Patrimônio material e imaterial; Arte na Antiguidade; Arte medieval; Cultura popular e erudita |
| Educação Física | Ginásticas e práticas de condicionamento; Práticas corporais de aventura; Sedentarismo e qualidade de vida; Práticas corporais e sustentabilidade |
| Ciências | Movimento e velocidade média; Máquinas simples; Vírus e prevenção de doenças; Sistema Solar |

## Contagem prevista quando as etapas 17, 18 e 19 forem integradas

| Indicador | Antes da Etapa 19 (com as etapas 17–18) | Adição | Total |
| --- | ---: | ---: | ---: |
| Aulas aprofundadas específicas | 197 | 64 | **261** |
| Capítulos | 591 | 192 | **783** |
| Exercícios com correção | 1.182 | 384 | **1.566** |
| Situações cotidianas resolvidas | 197 | 64 | **261** |
| Conexões entre aulas específicas | 394 | 128 | **522** |

O catálogo anteriormente auditado compreende **1.512 tópicos**. Após os merges, restam **1.251** tópicos apenas com o material introdutório anterior. Essa é cobertura parcial, não homologação docente ou programa oficial completo.

## Qualidade, fontes e limites

- A aula sobre competências do Enem usa a orientação publicada pelo **Inep para a redação do Enem 2026**, disponível em https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante . O Kognos não atribui notas oficiais.
- Situações matemáticas e narrativas são exercícios didáticos hipotéticos; não se apresentam como ocorrências reais, estatísticas observadas nem questões oficiais reproduzidas.
- Os conteúdos foram redigidos com apoio de IA durante desenvolvimento, com autoria editorial identificada e `review:'introductory'`; **não há revisão formal de docente**. Recomenda-se revisão humana antes de atribuir ao material caráter de conteúdo verificado.
- Integração exata por disciplina e tópico em `starter-lessons.ts`, preservando IDs canônicos e precedência do conteúdo editorial do Supabase.
- Os 64 problemas e 128 conexões foram registrados em `everyday-lesson-contexts.ts`.
- Teste `authored-lessons-stage19.test.ts` valida 4 temas por disciplina, estrutura, IDs, cenários e referências, exercícios e ausência de substituição de conteúdo antigo. Teste histórico atualizado para 261 contextos.
- Sem alterações de esquema, RLS, banco, configuração de IA, segurança, dados pessoais, progresso ou autenticação.

## Dependência de pull requests

A branch desta etapa foi criada sobre `feat/curriculum-blueprint-stage18-64` (PR #77), que por sua vez depende do PR #76. **A sequência correta é integrar #76, depois #77 e finalmente o novo PR da Etapa 19**, atualizando as bases e revalidando CI após mudanças de base. Não declarar que `main` está atualizada enquanto esses PRs estiverem abertos.
