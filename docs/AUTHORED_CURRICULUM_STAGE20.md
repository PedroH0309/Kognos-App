# Kognos — Etapa 20: ampliação editorial incremental

## Situação de integração

A Etapa 20 parte da branch `feat/curriculum-stage19-batch64` do PR #79, que depende dos PRs #77 e #76. **Não está na `main`** e não deve ser anunciada como publicada para todos os usuários antes da incorporação ordenada.

## Aulas incluídas

Foram escritos 16 novos módulos por tema, cobrindo Matemática (2), Português, Literatura, Redação, Inglês, Física, Química, Biologia, História, Geografia, Filosofia, Sociologia, Arte, Educação Física e Ciências.

- Matemática: Binômio de Newton; Números complexos.
- Português: Tecnologias da comunicação e circulação da informação.
- Literatura: Poesia concreta e marginal.
- Redação: Coerência e contradições.
- Inglês: Discurso indireto em inglês.
- Física: Efeito Doppler.
- Química: Soluções tampão.
- Biologia: Especiação e isolamento reprodutivo.
- História: Revoluções inglesas.
- Geografia: Sensoriamento remoto.
- Filosofia: Existencialismo.
- Sociologia: Sociologia brasileira.
- Arte: Mediação cultural: museus, galerias e espaços públicos.
- Educação Física: História e transformações das práticas corporais.
- Ciências: Genética e evolução introdutórias.

O modelo reutiliza a estrutura prévia: três capítulos com explicações, exemplos, erros conceituais e correções, seis tarefas progressivas com resoluções, uma situação cotidiana e duas conexões justificadas. Os textos de cada tema foram redigidos especificamente e versionados como dados estáticos; não se usa provedor de IA em tempo de leitura da aula.

O teste `authored-lessons-stage20.test.ts` valida correspondência ao catálogo, identificadores de progresso, ausência de duplicação frente aos 289 temas já preparados, formato das aulas, problemas cotidianos e ligações pedagógicas.

## Cobertura projetada depois da integração

- 305 aulas aprofundadas individuais.
- 915 capítulos.
- 1.830 questões comentadas.
- 305 problemas do cotidiano.
- 610 conexões.
- 1.207 dos 1.512 temas de referência ainda **sem** aula aprofundada individual.

Esses totais são condicionais à integração de #76, #77, #79 e desta etapa. Os números refletem cobertura editorial, **não** garantem que o catálogo tenha homologação pedagógica. Cada módulo preserva `review:'introductory'` e metadados de autoria/limites. Não se reproduziram provas oficiais.

## Restrições respeitadas

Não foram modificados perfis, tabelas Supabase, RLS, IDs curriculares, calendário, contas, credenciais, modelos de IA, cotas ou endpoints de geração de exercícios. Não criar migração de banco nesta etapa.

## Revisão necessária

Revisão humana de precisão conceitual, validade dos exercícios e adequação para Provão Paulista/ENEM antes de classificar o material como homologado. Verificar ações do CI após abertura do PR e manter o merge sob decisão do mantenedor.
