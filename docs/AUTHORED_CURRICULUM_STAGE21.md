# Kognos — Etapa 21: lote de 64 aulas autorais

## Escopo

Esta etapa cria **64 aulas individuais novas**, reutilizando o modelo editorial existente (não o conteúdo), sem chamar modelos de IA durante a navegação. Os textos, casos, respostas e conexões foram escritos especificamente para cada tema; a montagem em seções é determinística e estática.

### Distribuição por disciplina

| Disciplina | Novas aulas |
| --- | ---: |
| Matemática | 8 |
| Física | 7 |
| Química | 6 |
| Biologia | 5 |
| História | 5 |
| Geografia | 5 |
| Português | 5 |
| Literatura | 4 |
| Redação | 4 |
| Inglês | 5 |
| Espanhol | 0 |
| Filosofia | 3 |
| Sociologia | 3 |
| Arte | 3 |
| Ciências | 1 |
| Educação Física | 0 |

Educação Física não recebe tema repetido nesta rodada. O repertório específico de Espanhol já estava coberto neste catálogo e não foi duplicado; uma quinta aula de Inglês, sobre advérbios e marcadores temporais, substitui o tema espanhol repetido.

### Metodologia

Cada aula possui um problema cotidiano com solução, três capítulos progressivos com explicações próprias, exemplos e erros frequentes, seis questões com pistas e comentários, além de duas conexões didáticas específicas com aulas efetivamente aprofundadas. As questões não reproduzem provas proprietárias.

Os arquivos `apps/web/src/lib/authored-stage21-*.ts` separam áreas de estudo. `authored-lessons-stage21.ts` agrega as lições, e `starter-lessons.ts` / `everyday-lesson-contexts.ts` encaminham os temas para os novos materiais sem alterar seus IDs.

### Cobertura projetada após todos os PRs anteriores

| Indicador | Antes (Etapa 20) | Depois (Etapa 21) |
| --- | ---: | ---: |
| Aulas individuais | 305 | 369 |
| Capítulos | 915 | 1.107 |
| Exercícios comentados | 1.830 | 2.214 |
| Problemas cotidianos | 305 | 369 |
| Conexões entre aulas | 610 | 738 |
| Temas restantes sem aula aprofundada individual (universo histórico de 1.512) | 1.207 | 1.143 |

**Esses totais são condicionais aos merges encadeados.** A branch desta etapa parte de `feat/curriculum-stage20-authored-lessons` (PR #80), que depende dos PRs #79, #77 e #76. A `main` não foi alterada nesta etapa.

### Integridade e validação

- `authored-lessons-stage21.test.ts` verifica 64 temas novos e distintos, tópicos válidos do catálogo, estabilidade de IDs, 3 capítulos, 6 questões, problemas e links para aulas aprofundadas existentes.
- `everyday-lesson-contexts.test.ts` inclui todos os 369 contextos previstos e mantém verificações históricas.
- `authored-lessons-stage20.test.ts` passa a aceitar acréscimos futuros sem alterar os totais da etapa já concluída.
- Nenhuma migração, conta, RLS, configuração de IA, chave de API ou progresso de estudante foi alterado.

### Limitações

Os textos têm autoria assistida por IA durante o desenvolvimento, não foram revisados por docentes nem garantem homologação por banca. Metadados `review:'introductory'` e referências oficiais de prova preservam distinção entre material preparatório autoral e questões oficiais.

Revisão pedagógica adicional deve conferir precisão dos exemplos, conteúdo histórico, nomenclatura curricular e adequação por série e exame antes de homologar os materiais.
