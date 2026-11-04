# Etapa 11 — Matemática, lote 1: cinco aulas aprofundadas

## Objetivo
Substituir os modelos genéricos por desenvolvimento autoral específico dos cinco primeiros temas estruturantes de Matemática do currículo do ensino médio, sem modificar a arquitetura de navegação nem o banco de dados.

## Tópicos atendidos
1. Operações, divisibilidade e conjuntos numéricos
2. Razões, escalas e proporcionalidade
3. Porcentagem e juros
4. Potências, radicais e notação científica
5. Equações, inequações e sistemas

Cada aula inclui:
- Objetivo pedagógico explícito e três capítulos específicos: fundamentos, aplicação, aprofundamento;
- Explicações, relações formais, exemplos originais comentados e armadilhas comuns;
- Seis atividades próprias, duas básicas, duas intermediárias e duas avançadas;
- Pistas e resoluções argumentadas;
- Referências para as matrizes/roteiros das provas nas quais o assunto aparece.

Total deste lote: **5 aulas, 15 capítulos e 30 atividades**.

## Integração
O arquivo `deep-math-lessons.ts` contém os textos concretos, sem acesso à rede e sem geração por IA. A função `starterLesson` prioriza esse repertório para correspondência exata entre disciplina e título, mantendo a implementação anterior para todos os demais assuntos. A cobertura nova entra na categoria `thematic`, não `published`.

A API editorial continua com precedência de aulas publicadas no Supabase e protege conteúdos arquivados ou retirados. Nenhuma migração, segredo, conta, cota de IA ou mecanismo de nota foi alterado.

## Limites de qualidade editorial
Estas aulas são **autoria original em desenvolvimento**, não materiais oficiais e ainda **sem homologação docente**. O campo `review` permanece `introductory`, evitando inflar contagens de publicações certificadas. Aulas ampliadas não equivalem a cobertura do currículo inteiro; o próximo lote deve abordar outros tópicos de Matemática.

As atividades textuais permanecem sem correção automática e não determinam proficiência. A avaliação de domínio por habilidade segue independente.

## Testes e verificação
O teste `deep-math-lessons.test.ts` inspeciona correspondências com o catálogo, validade do schema, presença de três estágios, seis atividades distintas, resoluções e procedência. O teste `starter-lessons.test.ts` permite três ou mais atividades sem enfraquecer as verificações dos temas do catálogo.

Executar no CI:
```sh
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
```

Ainda é necessária revisão docente do material e verificação visual em dispositivos reais, principalmente no leitor com seis questões por aula. Não declarar publicado em produção a partir de um PR aberto.
