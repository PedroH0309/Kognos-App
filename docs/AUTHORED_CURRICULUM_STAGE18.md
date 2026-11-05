# Kognos — Etapa 18: modelo editorial reutilizável e lote de 64 aulas

## O que mudou

Esta etapa atende à solicitação de **usar um modelo pré-pronto para cada aula, preenchendo apenas os dados específicos do tema**, sem copiar a mesma explicação para assuntos distintos.

O mecanismo foi implementado em `apps/web/src/lib/authored-lesson-blueprint.ts`. Cada `LessonBlueprint` define:
- Identidade do assunto e objetivo de aprendizagem.
- **Três capítulos específicos**, correspondentes a fundamentos, aplicação e análise crítica. Cada capítulo contém teoria, exemplo trabalhado, uma afirmação equivocada comum e orientação de estudo.
- Para cada capítulo, **uma pergunta direta e uma pergunta de diagnóstico de erro**, ambas respondidas com justificativas específicas. São seis atividades progressivas no total, com pistas.
- Um **problema cotidiano autônomo**, com pergunta e resolução.
- Dois links justificados para aulas efetivamente aprofundadas, sem recorrer a tópicos apenas introdutórios.

A função `renderAuthoredBlueprint` gera somente a **estrutura** dos documentos e exercícios, sem chamada a IA nem rede. As afirmações científicas, exemplos, correções e respostas permanecem **escritos especificamente para cada assunto** em 16 arquivos compactos:
`authored-stage18-math.ts`, `physics.ts`, `chemistry.ts`, `biology.ts`, `history.ts`, `geography.ts`, `portuguese.ts`, `literature.ts`, `writing.ts`, `english.ts`, `spanish.ts`, `philosophy.ts`, `sociology.ts`, `art.ts`, `pe.ts`, `science.ts`.

Cada arquivo contém **quatro aulas por disciplina**, totalizando 64 temas novos, registrados por `authored-lessons-stage18.ts`. Essa arquitetura permite ampliar outros lotes adicionando dados autorais sem reescrever a lógica de renderização.

## Temas novos

| Disciplina | Quatro aulas |
| --- | --- |
| Matemática | Frações e operações; Potências e propriedades; Equações do segundo grau; Função afim |
| Física | Sistema Internacional de Unidades; Conversão de unidades físicas; Força de atrito; Gráficos de posição, velocidade e aceleração |
| Química | Misturas homogêneas e heterogêneas; Separação de misturas; Tabela periódica; Ligação iônica |
| Biologia | Proteínas e enzimas; Transcrição e tradução; Ácidos nucleicos; Fermentação |
| História | Fontes e construção do conhecimento histórico; Grécia antiga; Roma antiga; Economia açucareira |
| Geografia | Projeções cartográficas; Mapas temáticos e geotecnologias; Climas do Brasil e do mundo; Biomas e formações vegetais |
| Português | Ironia e humor; Metáfora e metonímia; Denotação e conotação; Gêneros jornalísticos |
| Literatura | Arcadismo brasileiro; Parnasianismo; Pré-modernismo brasileiro; Versificação, rima e ritmo |
| Redação | Planejamento e projeto de texto; Argumentação por causa e consequência; Seleção e uso de dados e citações; Conectivos e progressão argumentativa |
| Inglês | Cognatos e falsos cognatos em inglês; Comparativos e superlativos em inglês; Formas de futuro em inglês; Pronomes e referências textuais em inglês |
| Espanhol | Leitura global e localização de informações em espanhol; Artigos e contrações em espanhol; Pronomes pessoais e tratamento em espanhol; Expressões idiomáticas em espanhol |
| Filosofia | Mito e filosofia; Silogismos; Ética das virtudes; Racionalismo de Descartes |
| Sociologia | Senso comum e conhecimento sociológico; Estratificação e mobilidade social; Desigualdade de renda; Métodos de pesquisa social |
| Arte | Modernismo brasileiro; Arte contemporânea e intervenções urbanas; Artes africanas e afro-brasileiras; Teatro: dramaturgia, atuação e encenação |
| Educação Física | Lutas e artes marciais; Corpo, identidade e padrões de beleza; Lazer e direito às práticas corporais; Doping e ética esportiva |
| Ciências | Separação de misturas; Luz, reflexão e refração; Sistemas digestório e respiratório; Calor e temperatura |

## Contagem após os dois merges necessários

| Métrica | Base com Etapa 17 | Etapa 18 | Total |
| --- | ---: | ---: | ---: |
| Aulas individuais | 133 | 64 | **197** |
| Capítulos | 399 | 192 | **591** |
| Atividades com resolução | 798 | 384 | **1.182** |
| Situações cotidianas | 133 | 64 | **197** |
| Conexões entre aulas | 266 | 128 | **394** |

O catálogo global anteriormente auditado possui **1.512 temas**; depois dos dois merges, **1.315** continuarão sem aula individual aprofundada e terão o material introdutório anterior. A maior escala de produção não deve ser confundida com homologação editorial.

## Integração, segurança e qualidade

- `starter-lessons.ts` prioriza a nova aula padronizada apenas para `subject/topic` exatos, antes do fallback genérico, sem alterar prioridade do conteúdo editorial Supabase.
- `everyday-lesson-contexts.ts` registra os novos problemas e conexões com a navegação existente.
- `authored-lessons-stage18.test.ts` verifica 64 cursos não duplicados, quatro por disciplina, IDs canônicos, profundidade mínima, seis atividades em três níveis, casos completos, ausência de falsas credenciais docentes e links existentes.
- `everyday-lesson-contexts.test.ts` aumenta a auditoria de casos de 133 para 197.
- Nenhuma modificação em autenticação, progresso, RLS, dados do aluno, esquemas SQL, cotas ou API de IA.
- As aulas foram redigidas por assistente de IA durante desenvolvimento, sem geração de aulas durante a navegação, **sem homologação docente**; `review:'introductory'` permanece explícito. Os exemplos são didáticos e não simulam dados estatísticos observados. Testes de software não substituem revisão humana da correção pedagógica.

## Dependência entre branches

**PR #76 (Etapa 17) permanece aberto no início deste trabalho.** A nova branch `feat/curriculum-blueprint-stage18-64` parte da branch da Etapa 17. O PR desta etapa deve apontar inicialmente para `feat/curriculum-authored-stage17-32-lessons`, permitindo revisão do acréscimo isolado e mantendo os 32 módulos de #76. Após merge de #76, o destino de #18 deverá ser atualizado para `main` antes do merge, ou seguir outro procedimento de integração equivalente revisado. Não afirmar que a `main` foi atualizada enquanto os PRs estiverem abertos.
