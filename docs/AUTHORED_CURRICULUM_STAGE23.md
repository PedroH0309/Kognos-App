# Kognos — Etapa 23: seis aulas aprofundadas de Ciências e Física

Esta etapa continua sobre o PR #82 (Etapa 22), preservando os 425 tópicos previamente aprofundados, os IDs canônicos e os dados dos estudantes. Nenhuma migração, chave de API, política RLS ou alteração de autenticação foi realizada.

## Aulas novas
- Ciências — Vacinação e saúde coletiva
- Ciências — Circulação e excreção
- Ciências — Sistema nervoso e sentidos
- Física — Lançamento vertical
- Física — Força centrípeta
- Física — Princípio de Pascal

Cada aula possui três capítulos escritos especificamente para o assunto, exemplos resolvidos, diagnóstico de erros conceituais, pistas e seis exercícios progressivos, além de situação cotidiana comentada e duas conexões entre temas aprofundados. As aulas são arquivos versionados, sem geração por IA no momento do acesso do estudante.

## Integração e testes
`authored-lessons-stage23.ts` reúne os seis tópicos. `starter-lessons.ts` abre cada aula pelo ID canônico. `everyday-lesson-contexts.ts` incorpora os seis contextos e preserva todos os anteriores. Os testes de regressão verificam unicidade, schema, progressão, vínculos e cobertura acumulada.

## Cobertura projetada depois da cadeia de merges
431 aulas aprofundadas, 1.293 capítulos, 2.586 exercícios, 431 situações cotidianas e 862 conexões. Dos 1.512 temas históricos, 1.081 ainda não têm aula individual aprofundada. Esses valores não descrevem a `main` até os PRs serem integrados.

A revisão pedagógica humana continua pendente. Os documentos são autorais com assistência de IA no desenvolvimento, não materiais homologados por docentes nem questões oficiais de vestibulares.
