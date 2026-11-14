# Completar as aulas autorais do catálogo Kognos

Solicitação: trabalhar com o Claude Code e continuar até concluir todas as aulas,
mantendo os critérios do lote anterior. Não inclui merge ou deploy automático.

## Escopo medido

Ponto de partida: 1.512 identidades curriculares registradas. Há 1.295 sem fonte
aprofundada em nenhuma prova elegível, das quais 877 pertencem ao ENEM. O restante
também faz parte desta solicitação. Números são editoriais, não habilidades oficiais.
As fontes canônicas existentes, IDs e histórico serão preservados.

## Critérios comuns

- Conteúdo original em português, com objetivo e pré-requisitos específicos.
- Três capítulos basic/intermediate/advanced. Cada um: explicação substancial de
  pelo menos 900 caracteres, três passos, exemplo resolvido de 80 caracteres ou
  mais e erro frequente específico de 30 caracteres ou mais.
- Três questões A–D graduadas, quatro alternativas distintas e somente uma
  correta, dica de pelo menos 40 caracteres e resolução de pelo menos 130.
- Enunciados autossuficientes, sem figura ausente, materiais proprietários,
  fatos inventados ou conteúdo genérico apresentado como aula pronta.
- Revisão separada deve conferir escopo, conceitos, exemplos e os três gabaritos.
  Falhas voltam para correção; geração, timeout ou comprimento não são aprovação.
- Metadados de autoria assistida, fontes institucionais e revisão docente pendente.
  Nenhuma revisão por IA equivale a homologação docente ou publicação no banco.

## Ordem de execução

1. Registrar inventário integral e critérios executáveis, com testes negativos.
2. Usar Claude Code sem acesso a credenciais ou ferramentas de escrita: ele
   retorna rascunhos JSON; um processo separado retorna a revisão de conteúdo.
3. Validar lotes pequenos, corrigir problemas e integrar apenas aulas aceitas.
4. Impedir que a expansão envie todos os textos no JavaScript inicial do navegador:
   a interface recebe um índice de disponibilidade; a API entrega a aula selecionada.
5. Conferir IDs, cobertura, fontes únicas e entrega da API. Executar testes e build
   nos checkpoints; salvar commits e atualizar o PR existente.
6. Repetir enquanto houver lacunas ou falhas. O encerramento exige inventário sem
   lacunas, validações aprovadas e relatório dos limites de revisão humana.

## Estado e recuperação

Rascunhos e respostas privadas do CLI ficam em diretório local ignorado. Um
checkpoint registra tentativas e resultados por ID. Reiniciar usa os resultados
já existentes e não repete requisições aprovadas. Nenhuma chave é registrada.
Falhas de rede são tentadas novamente com limite por execução; aulas rejeitadas
não entram no catálogo. Nenhum plano anterior da pasta original será alterado.

## Verificação

Testes nativos do projeto para contrato, rejeição de conteúdo insuficiente,
índice/runtime equivalentes, integridade canônica e isolamento entre provas.
Verificação independente dos cálculos e fatos dos lotes, seguida de API/leitor
real, TypeScript, build e CI. Não diminuir limites nem remover testes para aprovar.

## Correção verificada do leitor avulso

A abertura direta por ID do alias semântico aprovado em `/cursos` agora usa a
fonte canônica com prioridade de publicação e respeito à retirada de ambos os
IDs. Oito testes de resolução e navegação pública verificaram a correção, inclusive
falhas de leitura e publicações inválidas. Nenhuma fonte arquivada é ressuscitada.
