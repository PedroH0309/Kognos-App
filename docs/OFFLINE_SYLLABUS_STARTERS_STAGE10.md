# Etapa 10 — Biblioteca de aulas-base pré-carregadas para todos os temas do catálogo

## Defeito que motivou a etapa
Em Estudos → Matérias → Conteúdos → Aula, a aba **Aula em texto** estava vazia na maioria dos temas, apesar de seus títulos aparecerem no roteiro. A API retornava `lesson: null` quando não havia uma publicação correspondente em `kognos_content_documents`.

## Solução implementada
- Todos os tópicos do `curriculumTopics`, que reúne temas de ENEM, FUVEST, ETEC, VUNESP e Provão Paulista, passam a ter material inicial montado **no próprio código**, sem rede externa nem dependência de chave de IA ou de um documento publicado no Supabase.
- Biblioteca autoral de conceitos por disciplina e famílias temáticas (`starter-lesson-patterns.ts`), com definições, procedimentos de aplicação, exemplos resolvidos, erros frequentes, desafios e soluções. Inclui Matemática, Português, Literatura, Redação, Inglês, Espanhol, Física, Química, Biologia, História, Geografia, Filosofia, Sociologia, Arte, Educação Física e Ciências.
- `starter-lessons.ts` monta para cada item do catálogo um módulo em **3 blocos** (Fundamentos, Aplicação, Aprofundamento), **3 atividades** e explicações vinculadas ao tema. Sempre que disponível, usa o conteúdo introdutório autoral legado ou um modelo específico por família. Para temas sem correspondência temática, oferece um **guia disciplinar** baseado no escopo curricular, sem fingir uma explicação acadêmica revisada.
- Para os temas do Provão Paulista, o material apresenta a descrição completa do item presente no Anexo VII, em vez de depender apenas do título resumido.
- A API `GET /api/content?id=...` mantém **aula publicada e autorizada no Supabase** como prioridade. Somente quando não existe uma aula publicada nem retirada é oferecida a aula-base. Uma publicação arquivada, removida ou em revisão não é ressuscitada.
- As listagens mostram duas categorias honestas: `starter` = aula-base temática pré-carregada ou introdução autoral; `guided` = guia inicial da disciplina, sem aprofundamento específico. Essas categorias **não contam** como `published`.
- A aba **Aula em texto** renderiza a explicação, **Atividades** oferece as 3 perguntas com rascunho local, e **Explicações** contém o exemplo resolvido, etapas e justificativas.
- O botão **Prosseguir** reconhece os módulos introdutórios e requer leitura confirmada + atividades preenchidas, mas isso não representa correção ou domínio.
- Permanece disponível o botão de desenvolver aula completa com o Kog para módulos introdutórios, dependendo de conta, permissões e provedor configurado.

## Qualidade, cobertura e limites (obrigatório)
**Não declarar “todas as aulas completas e revisadas”.** Esta etapa entrega **cobertura inicial de acesso a conteúdo para 100% dos temas cadastrados**; o grau de profundidade não é uniforme. Tópicos que correspondem a modelos específicos recebem explicação e exemplo concreto. Tópicos fora desses modelos recebem material metodológico por disciplina e escopo do programa. O método de composição com modelos é determinístico e **não equivale a revisão humana nem a uma aula acadêmica individualmente escrita para cada tópico**.

- O material é original, não reproduz perguntas proprietárias.
- O escopo dos exames ENEM/FUVEST/ETEC/VUNESP é em parte roteiro editorial, não transcrição literal integral; apenas o programa do Provão Paulista tem seus itens do Anexo VII transcritos.
- Status público: `Aula-base pré-carregada · revisão pendente` ou `Guia inicial pré-carregado · aprofundamento pendente`.
- Nenhum banco, migração, segredo, RLS, cota ou serviço de IA foi modificado.
- Respostas textuais são rascunhos locais, não provas corrigidas; o histórico de evolução mantém suas regras anteriores.
- Futuras etapas devem aprofundar cada disciplina por famílias e substituir módulos introdutórios por aulas editoriais revisadas com exemplos próprios e exercícios corrigidos.

## Validação
Testes de ponta a ponta de **schema e roteamento** verificam que todos os tópicos do catálogo retornam `CourseLesson` válido, com 3 seções e 3 tarefas; que cada status é transparente; e que dados publicados/retirados respeitam precedência. Testar:

```powershell
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
```

Inspeção visual real: verificar 375 px, 456 px e desktop; ENEM/Provão Paulista/FUVEST, conteúdo temático e guia; leitura/atividade/resolução; geração com Kog; materiais e evolução. Não executar merge automático sem CI e revisão.
