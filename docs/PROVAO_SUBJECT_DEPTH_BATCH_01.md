# Kognos — aprofundamento real das aulas (lote 01)

## Diagnóstico que motivou a alteração

O leitor universal melhorou a apresentação, mas as aulas provenientes de `starter-lessons.ts` ainda podem exibir orientações gerais a respeito de um tema sem desenvolver o conteúdo específico. Uma mudança de CSS, título ou divisão em blocos não resolve esse problema.

As aulas abaixo **não são templates**: cada uma contém três capítulos escritos especificamente para o assunto, conceitos definidos, contextos, cálculos ou interpretações resolvidas, etapas justificadas, limites e três questões A–D com alternativas e resolução desenvolvidas.

## Escopo efetivamente desenvolvido nesta entrega

| Disciplina | Assunto específico |
|---|---|
| Biologia | Pirâmides ecológicas |
| Química | Equações químicas e balanceamento |
| Física | Escalas termométricas: Celsius, Fahrenheit e Kelvin |
| Matemática | Porcentagem, taxas e índices |
| História | Iluminismo e Liberalismo |
| Geografia | Os espaços supranacionais |
| Português | Concordância nominal e verbal |
| Inglês | Localização de informação específica em textos |
| Filosofia | O contratualismo clássico |
| Sociologia | Pluralismo cultural, etnocentrismo e relativismo |

Cada aula inclui no mínimo três capítulos com explicações de pelo menos 750 caracteres, exemplos de pelo menos 180 caracteres, três ou mais passos de raciocínio por capítulo e **questões A–D próprias de cada nível**. Esses limites são o piso técnico, **não certificação pedagógica**.

- 10 assuntos oficiais aprofundados.
- 30 capítulos progressivos.
- 30 questões de quatro alternativas, sem dissertativas.
- Zero alterações em IDs de temas, dados do aluno, migrações SQL ou configuração das APIs.
- Preservação da prioridade do conteúdo **publicado editorialmente no Supabase**. A nova aula offline substitui apenas o fallback, jamais uma publicação, um arquivamento ou uma retirada de conteúdo no banco.

## Limites e próxima etapa editorial

O programa transcrito no projeto contém centenas de temas distribuídos pelas séries. A criação deste lote não transforma todas essas entradas em aulas profundas. Itens sem aula específica continuam claramente classificados como introdutórios; não é legítimo gerar títulos avançados e texto genérico para simular abrangência.

A próxima etapa exige auditoria e redação específica tema a tema, com prioridade a assuntos que estão efetivamente sendo acessados por estudantes. Revisão por docentes/especialistas e verificação de fontes ainda são necessárias. Material autoral não é material oficial da prova.

## Validação

Executar `npm test`, `npm run test:content-db`, `npm run test:design`, `npm run typecheck` e `npm run build`. Verificar no navegador desktop e mobile: leitura progressiva, exemplos, alternativas, feedback, ligações das três séries, e funcionamento das aulas não modificadas.
