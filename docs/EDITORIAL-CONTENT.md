# Biblioteca curricular e administração

## O que esta entrega contém (e o que falta)

O catálogo reúne **322 combinações distintas de disciplina e tema** das cinco matrizes editoriais existentes no código: ENEM, FUVEST, UNESP/VUNESP, ETEC e SARESP. São 16 disciplinas. Isso não certifica cobertura integral dos editais de todas as edições: temas amplos precisam ser desdobrados e confrontados com habilidades, séries e leituras obrigatórias. VUNESP é uma organizadora; a referência aqui é o vestibular UNESP, não todos os concursos organizados por ela. SARESP é uma avaliação escolar.

As 80 miniaulas anteriores continuam como introduções. **Não foram entregues 322 aulas aprofundadas prontas.** As novas aulas progressivas são produzidas e salvas no servidor configurado, mediante solicitação do aluno ou fila do administrador; cada uma passa por geração e segunda revisão automática. Falhas de estrutura ou revisão impedem publicação. Revisão automática não equivale à homologação por professor. O painel identifica temas mapeados, introduções, rascunhos e aulas desenvolvidas separadamente.

Cada aula desenvolvida tem fundamentos, aplicação e aprofundamento; passos explicados, exemplo resolvido, erro comum e pelo menos três tarefas (uma por nível), com pista e resolução. O administrador pode substituir o texto e administrar os vídeos. O tutor consulta a versão publicada da aula, pelo identificador validado no servidor.

Há **40 trechos de Matemática** do vídeo de Pedro Assaad e Renato Passos, `_EmywnyCOM0`. Os segundos vêm do índice da descrição, consultado em https://videohighlight.com/v/_EmywnyCOM0 em 03/11/2026. Exemplo: porcentagem começa em `2822` segundos (47:02). São metadados de navegação; não foi copiada a transcrição nem baixado o vídeo. A verificação é `chapter_index`, não revisão audiovisual integral. Há links profundos e player YouTube com início no trecho. Os capítulos são associados apenas a assuntos relacionados; **nem todo tema tem vídeo**, e um capítulo de apoio não cobre necessariamente toda a aula. O painel permite conferir/substituir os horários e adicionar outros professores. Incorporação depende da disponibilidade e permissão do YouTube.

## Ativação no computador do proprietário

1. Instale a branch/PR desta entrega e execute `npm install` na raiz.
2. Mantenha o ambiente de Supabase e dos provedores de IA em `apps/web/.env.local`. O CMS usa `SUPABASE_URL` e `SUPABASE_SECRET_KEY` no servidor; o login também usa as variáveis públicas existentes. Não exponha chaves privadas no cliente.
3. No SQL Editor do projeto Supabase correto, execute as migrações anteriores e `supabase/migrations/0015_editorial_courses.sql`. A reserva de cota da geração usa a função da migração 0002.
4. Cadastre/entre na sua conta normal do Kognos. No SQL Editor, substitua o endereço abaixo pelo e-mail da conta que será administradora:

```sql
insert into public.kognos_content_admins(user_id)
select id from auth.users where lower(email)=lower('SEU_EMAIL_DE_LOGIN')
on conflict(user_id) do nothing;
```

Confira se uma linha foi inserida; se não foi, confira o e-mail em Authentication → Users. Não adicione e-mails de alunos. Alternativamente, use o UUID exibido em `/admin` quando sua conta ainda não tiver permissão.

5. Execute `npm run dev`; entre na conta e abra http://localhost:3000/admin. A área do aluno fica em http://localhost:3000/cursos e na opção Estudar do aplicativo.
6. Crie ou selecione um conteúdo, **salve o rascunho e publique**. Apenas salvar não muda a versão que o aluno vê. A área de estudos consulta as publicações ao abrir, ao retornar à janela e a cada 30 segundos enquanto ativa.

O painel não cria um usuário/senha universal e ninguém se torna administrador por editar o próprio perfil. Esta entrega não executa SQL no seu projeto nem concede a permissão automaticamente. `localhost` só funciona no computador em que o app está rodando; para acesso pela internet é necessário hospedar a aplicação e configurar as mesmas variáveis no servidor hospedado.

## Operação editorial

- Aulas: criar conteúdo próprio ou desenvolver um tema mapeado; editar os três níveis, tarefas, autores, licença e fontes.
- Vídeos: adicionar/remover, editar ID YouTube, início/fim em segundos e evidência do horário. Conferir o link antes de publicar.
- Questões: 80 cópias editáveis do acervo autoral inicial aparecem no painel; selecione, ajuste, salve e publique na aula. Também é possível criar novas questões. As cópias editoriais têm IDs separados para preservar respostas históricas do banco demonstrativo. O banco demonstrativo antigo continua fixo; as edições são exibidas no catálogo curricular. Questões privadas geradas por IA continuam no banco pessoal dos estudantes e não são expostas ao administrador deste CMS.
- Retirar publicação: suspende acesso mantendo o rascunho. Arquivar: remove da listagem preservando histórico. Restaurar: recupera o registro. Histórico: recupere uma versão como rascunho e salve/publique explicitamente.
- Duas abas editando o mesmo item: uma gravação com versão antiga recebe erro 409 e não sobrescreve a mais recente.
- Fila de IA: filtre por disciplina/tema, escolha o tamanho do lote e autorize. A fila roda sequencialmente nesta aba; mantenha-a aberta. É possível parar depois da aula atual. Reinicie para continuar os temas ainda não salvos. Rascunhos, publicações e arquivos existentes não são sobrescritos. Uma falha interrompe o lote; conteúdos já salvos ficam preservados.
- A geração de aulas usa a cota compartilhada `reserve_ai_quota`, com `COURSE_DAILY_REQUEST_LIMIT` opcional (padrão 20; máximo 100), além dos limites/custos dos provedores. A configuração de provedores de geração e revisão é a já usada pelo app. O lote não promete concluir todo o catálogo em uma execução.

## Segurança e testes

As cinco tabelas novas têm RLS; estudantes não podem consultar documentos brutos, rascunhos, histórico ou gabaritos. APIs administrativas validam a sessão no Supabase e a associação em `kognos_content_admins` em cada chamada. A identidade vem do token, nunca de um campo do corpo. As funções SQL mutadoras só permitem `service_role`; o salvamento editorial confere também o administrador. Não conceda essa role ao navegador.

A API pública projeta questões sem índice correto e resolução. Correção exige login e versão publicada atual. Tentativas são gravadas com o usuário autenticado e só podem ser lidas por ele. A geração usa lease por tema e inserção atômica, sem substituir edição humana. A auditoria é transacional.

```sh
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
```

O teste de banco usa PostgreSQL real em WASM (PGlite), duas identidades e roles `anon`, `authenticated`, `service_role`; aplica a migração duas vezes e verifica RLS, promoção indevida, acesso a gabaritos/histórico, versões, auditoria, leases e proteção da edição humana. Isso não substitui testar login, geração real e publicação no projeto Supabase do proprietário após ativar a migração.

Verificação de interface local: Chromium em 1440 px e 390 px, filtro de disciplina/tema, link de vídeo em 2822 s e bloqueio do painel sem configuração. O fluxo de editar, salvar rascunho e publicar também foi exercitado com respostas HTTP simuladas; não houve integração com o Supabase real do proprietário nem chamadas reais aos provedores de IA.
