# Kognos — Exploração por disciplina (Etapa 1)

## Problema corrigido

O PR de Matemática A–H criou oito **laboratórios especializados**, exibidos somente quando o roteador reconhecia uma família de temas matemáticos. Por isso, conteúdos de outras disciplinas e tópicos de Matemática fora dessas famílias não tinham a mesma aba interativa.

Esta etapa cria um **explorador pedagógico básico para todos os tópicos do catálogo**, sem fingir que todos já possuem simulações individuais.

## O que foi implementado agora

- A aba **Exploração interativa** é apresentada para qualquer `CurriculumTopic`, independentemente do resultado de `resolveMathLab`.
- Os oito laboratórios existentes de Matemática permanecem acessíveis para temas compatíveis; o novo explorador é complementar.
- Introduções legadas também recebem o explorador na Sala de estudo/Trilhas. O `InteractiveIntroLesson` foi reaproveitado para mostrar aulas introdutórias do catálogo curricular em etapas.
- Cada disciplina recebe três perguntas e três campos de organização compatíveis com seus métodos de estudo (e não com um texto genérico igual a todos).
- O explorador tem três estágios:
  1. **Investigar**: consultar trechos do tema e seu contexto curricular, usando o texto real cadastrado.
  2. **Organizar**: escrever notas em campos disciplinares; em **aulas completas**, reorganizar passos efetivamente publicados e conferir a ordem didática.
  3. **Aplicar**: utilizar o exercício publicado e sua pista/resolução; numa introdução, o desafio existente e um exemplo relacionado explicitamente não tratado como gabarito; num tema só mapeado, uma pergunta investigativa sem correção simulada.
- A UI informa se o tema é **aula desenvolvida**, **introdução disponível** ou **apenas tema cadastrado**.
- Nenhum dado, ID, migração ou histórico foi alterado. As respostas permanecem locais na interface; não são corrigidas pelo servidor nem registradas como domínio.

### Disciplinas do Provão Paulista com método explícito

Matemática, Português, Inglês, Física, Química, Biologia, História, Geografia, Filosofia, Sociologia e Redação. As demais disciplinas do catálogo também recebem um método exploratório conservador, sem fingir especialização.

## O que NÃO está pronto

- Este primeiro passo **não** cria centenas de novas aulas completas, nem converte o índice curricular em material didático homologado.
- O explorador compartilhado não equivale a um simulador visual específico de cada tópico. As ferramentas matemáticas A–H existentes continuam sendo as únicas dessas famílias já implementadas.
- As notas manuscritas na exploração são rascunhos efêmeros da tela, não históricos pessoais salvos no Supabase.
- As interações exploratórias não são um segundo modo de prática com pontos. **Praticar mais 10 questões** permanece exclusivamente na Evolução da habilidade, distribuindo 3 básicas, 4 intermediárias e 3 avançadas.

## Próximas etapas, em PRs próprios

| Etapa | Escopo planejado |
|---|---|
| 2 | Matemática: mapear e ampliar tópicos que não correspondem aos oito laboratórios, com simuladores para outras famílias realmente distintas |
| 3 | Física/Química/Biologia: experimentos interativos por conteúdo (grandezas, transformações e processos) |
| 4 | Português/Inglês/Redação: análises textuais autorais, construção de argumentos e atividades gramaticais |
| 5 | História/Geografia/Filosofia/Sociologia: cronologias baseadas em fontes, análises espaciais, lógica e relações sociais |
| 6 | Auditoria de cobertura por prova e série; revisão editorial e acessibilidade com exemplos reais de usuários |

Cada etapa requer testes e aprovação de PR antes do merge. Não há trabalho em segundo plano e nenhuma etapa futura deve ser declarada como pronta sem implementação e validação.

## Como validar esta etapa

Na raiz do repositório:
```powershell
npm install
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
```

Teste com Matemática (tema com laboratório e tema fora do roteador), Física, Química, Biologia, Português, Inglês, História, Geografia, Filosofia, Sociologia e Redação. Confirme a aba Exploração para temas só cadastrados, com introdução e com aula completa. Para cada caso, verifique a procedência do texto e se os indicadores de domínio **não** mudam ao editar o rascunho.
