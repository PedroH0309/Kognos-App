# Etapa 17 — Expansão acelerada de 32 aulas autorais

## Objetivo e padrões

Duplicar o volume por etapa anterior, passando de 16 para **32 aulas individuais escritas no código**. O repertório segue a navegação **Matérias → Conteúdos → Aula**, com situação cotidiana inicial, três capítulos organizados por nível de dificuldade, dois passos de estudo específicos por capítulo, exemplos e erros frequentes, seis exercícios graduados com soluções e duas conexões justificadas para outros temas realmente aprofundados.

A autoria é assistida por IA na etapa editorial; **não há geração de texto por API quando o estudante abre uma aula**. Nenhum módulo declara revisão ou homologação por docente. Os problemas são hipotéticos; não são dados de pesquisas nem questões oficiais copiadas. O estado `review: 'introductory'` é mantido para indicar que a revisão especializada ainda não ocorreu.

## Novos conteúdos — duas aulas por disciplina

| Disciplina | Aulas |
| --- | --- |
| Matemática | Equações do primeiro grau; Juros compostos |
| Física | Queda livre; Trabalho de uma força |
| Química | Modelos atômicos; Ligação covalente |
| Biologia | Respiração celular; Duplicação do DNA |
| História | Povos indígenas antes da colonização; Iluminismo |
| Geografia | Tectônica de placas; Bacias hidrográficas brasileiras |
| Português | Tema, tese e ideia central; Coerência e progressão textual |
| Literatura | Romantismo: romance urbano, regional e indianista; Simbolismo |
| Redação | Introdução argumentativa; Conclusão e retomada da tese |
| Inglês | Presente simples e contínuo; Fato, opinião e desinformação em textos em inglês |
| Espanhol | Presente do indicativo em espanhol; Diversidade cultural hispânica |
| Filosofia | Platão e a teoria das ideias; Ética e moral |
| Sociologia | Socialização e instituições sociais; Racismo estrutural e relações étnico-raciais |
| Arte | Arte renascentista; Vanguardas artísticas |
| Educação Física | Esportes e suas regras; Danças e expressões culturais |
| Ciências | Células e organelas; Propagação de calor |

## Contagem verificável

| Indicador | Antes | Novos | Total após merge |
| --- | ---: | ---: | ---: |
| Aulas individuais aprofundadas | 101 | 32 | **133** |
| Capítulos específicos | 303 | 96 | **399** |
| Exercícios comentados | 606 | 192 | **798** |
| Situações cotidianas | 101 | 32 | **133** |
| Conexões entre aulas preparadas | 202 | 64 | **266** |

O catálogo completo anteriormente auditado possui **1.512 tópicos**. Após este lote, **1.379** ainda não possuem aulas aprofundadas individuais, embora continuem acessíveis por material introdutório. Não apresentar o catálogo como totalmente aprofundado.

## Arquitetura

O lote é separado em nove módulos editoriais `apps/web/src/lib/authored-stage17-batch1.ts` até `batch9.ts` e agregado por `authored-lessons-stage17.ts`; essa separação facilita revisão e evita arquivos monolíticos crescentes. O `starter-lessons.ts` escolhe o material específico por identificadores existentes sem alterar o conteúdo editorial publicado no Supabase. `everyday-lesson-contexts.ts` acrescenta os casos e as conexões didáticas à apresentação inicial.

A nova suíte `authored-lessons-stage17.test.ts` valida a unicidade dos 32 temas, a existência no catálogo, a estrutura, a autoria, os exercícios e a integridade dos links para os 133 módulos específicos. O teste anterior de cobertura também inclui todos os temas novos. Os históricos de teste de etapas anteriores são preservados sem tratar o total anterior como um teto.

## Restrições e revisões

- Sem novas dependências, schemas SQL, credenciais, novas chamadas de IA ou armazenamento de diagnósticos.
- Progresso por habilidade, IDs, autenticação, cotas, acessibilidade e precedência de edição em Supabase permanecem intocados.
- Os testes automatizados asseguram integração e integridade estrutural, mas não substituem revisão científica, linguística e pedagógica das aulas.
- Novos módulos devem manter relevância à prática e ao repertório de ENEM, Provão Paulista e outros vestibulares, sem prometer fidelidade a exames oficiais não consultados.

**Status deste documento:** descreve a branch e o PR, não alteração confirmada da `main`.
