# Continuidade do catálogo — execução retomada

## Estado atual em 15/11/2026 — checkpoint 11

Este estado prevalece sobre todos os históricos abaixo. Execução ativa por pedido
expresso do usuário, até completar as aulas; não encerrar em um checkpoint.

- Lotes 03/04/05 completos (16 cada), lote 06 com nove aulas: 57 novas nesta etapa.
- 629 testes da aplicação + seis do motor, lint alterado, build e leitor real
  aprovados. API das 57 comparada; cinco novas aulas, 15 respostas e referências
  expandidas em 320/375/768/1440 px aprovadas. Preview 3316 contém este checkpoint.
- Restam 1.238 lacunas; ENEM editorial: 73 aprofundadas, 823 lacunas. Lista de
  estudo: 73 aprofundadas, 50 guias e 784 planejadas. Revisão humana pendente.
- CI do checkpoint 10 `43715069408` aprovada. Sem banco/merge/deploy.
- IDs do lote 06 (integrador reescreve tudo; manter TODOS):
  `course-40b23112 course-0f508a76 course-b82ee91c course-f4182a5e course-c1380ae4 course-ad4ac447 course-4dc391a5 course-bfdc69a6 course-6c839b74`.
- História — Tempo histórico, fontes e historiografia (`course-1d95d9c6`):
  corrigida, crítica independente aceita e lida; NÃO integrada ainda. Próximo lote.
- Geografia — Escalas e representações espaciais (`course-5888a55a`): rascunho lido;
  corrigir fórmulas sem condição, origens falsas de distratores e estatísticas
  com p-valores incompatíveis; não apresentar MAUP como redução monotônica de r.
- Continuar Filosofia, Sociologia, Arte, Educação Física e Ciências até fechar 06;
  depois demais temas da fila. Autoria Claude segue em background sem autointegração.
- Helpers Temp e backups privados; não reaplicar patches antigos. Antes de novo
  push, fetch e verificar concorrência. PR 117 continua draft.

## Histórico — checkpoint 10

Este estado prevalece sobre os históricos abaixo. A execução permanece ativa.

- Lotes 03/04/05 completos (16 cada) e quatro aulas no lote 06: 52 aulas nesta etapa.
- 625 testes da aplicação + seis do motor, lint alterado, build e leitor real
  aprovados. API das 52 comparada; quatro novas aulas, 12 respostas e referências
  expandidas em 320/375/768/1440 px aprovadas. Preview 3316 contém este checkpoint.
- Restam 1.243 lacunas; ENEM editorial: 68 aprofundadas, 828 lacunas. Lista de
  estudo: 68 aprofundadas, 50 guias, 789 planejadas. Revisão humana pendente.
- CI do checkpoint 9 `43713256507` aprovada. Sem publicação no banco/merge/deploy.
- IDs atuais do lote 06: `course-40b23112 course-0f508a76 course-b82ee91c course-f4182a5e`.
  `kognos-integrate-batch06.mjs` reescreve o lote inteiro: preservar todos os IDs.
- Inglês — Gêneros e textos multimodais (`course-c1380ae4`): versão principal e
  crítica aceitas em arquivos privados; falta ler a crítica inteira, criar teste
  de dados (18/30 e 40→44), integrar e verificar. Descrições são autossuficientes,
  sem estatísticas médicas inventadas nem imagem que não existe.
- Espanhol — Diversidade cultural hispano-americana (`course-ad4ac447`): rascunho
  tem erros graves de ceceo, distribuição regional e frases quéchuas inventadas;
  refazer antes de nova crítica. Já conferidos DPD seseo/voseo e DLE guagua.
- Seguem os demais temas a partir da fila original [54..63], com correção principal.
- Helpers corrigidos do lote 06 estão em Temp e em backups privados. Para Português,
  executar correção e depois refinamento, que preserva a crítica anterior e corrige
  leitura de dias alternativos de inscrição. Nunca reaplicar patches antigos.

## Histórico — checkpoint 9

Este é o estado mais recente e prevalece sobre todos os registros históricos abaixo.

- Lotes 03/04/05: 16 aulas cada; total desta etapa: 48 aulas novas.
- 624 testes da aplicação + seis do motor, lint alterado e build aprovados.
- API das 48 aulas comparada; seis novas aulas no leitor, 18 respostas e referências
  expandidas em quatro larguras aprovadas. Preview 3316 contém este checkpoint.
- Restam 1.247 lacunas; ENEM editorial: 64 aprofundadas e 832 lacunas.
- CI do checkpoint 8 `43711575221` aprovada; sem deploy, merge ou revisão humana.
- Próximo lote começa em `course-40b23112` (Matemática — Geometria e medidas),
  seguido de `course-0f508a76` (Português — Leitura, inferência e interpretação
  textual) e demais entradas a partir do índice 48 da fila privada original.
- A revisão inicial de geometria aceitou erros: lados incompatíveis com a altura,
  falsas origens numéricas dos distratores e rotação negativa que supostamente
  inverteria orientação. Corrigir e pedir nova crítica antes de integrar.
- Helpers corrigidos de todo o lote estão em Temp e em backups privados. O helper
  de seleção de fontes de filosofia deve seguir o de correção para manter nove
  fontes publicáveis mais as três provas, dentro do limite de 12.

IDs completos finais do lote 05 (não sobrescrever com listas históricas menores):
`course-3c1c6438 course-e4a5aa54 course-c5049767 course-0a23ce3d course-2b490f5f course-a73beb78 course-e752d495 course-e7200af0 course-67789452 course-09d3e70e course-8a0ee99e course-47f820f7 course-0e21cfd0 course-e176a6df course-130d1225 course-a254bbd8`.

## Histórico — checkpoint 8

A pausa anterior foi revogada pelo usuário. A execução continua. Os registros
abaixo desta seção descrevem a pausa histórica e foram superados por este estado.

- Lotes 03/04: 16 aulas cada; lote 05: dez; total desta etapa: 42 aulas.
- 621 testes da aplicação + seis do motor, lint alterado e build aprovados.
- API de todas as 42 aulas comparada; seis novas aulas abertas no leitor público,
  18 respostas, explicações e referências expandidas em quatro larguras aprovadas.
- Restam 1.253 lacunas. ENEM editorial: 59 aprofundadas e 837 lacunas.
- Revisão docente humana pendente. Sem merge, deploy, publicação no banco ou
  alteração de schema/RLS. `legacy/` permanece intacto.
- Geografia — Urbanização e globalização (`course-8a0ee99e`): versão corrigida e
  crítica final aceitas em arquivos privados; falta ler a crítica inteira,
  acrescentar teste de proporção urbana, integrar e verificar.
- Depois: Filosofia `course-47f820f7`, Sociologia `course-0e21cfd0`, Arte
  `course-e176a6df`, Educação Física `course-130d1225`, Ciências `course-a254bbd8`.
- Preview 3316 contém o checkpoint 8. Parar apenas esse processo antes de build.
- A fila Claude Code foi retomada com dois workers e ignora arquivos de versão
  principal. O helper de crítica agora invalida cache por conteúdo e contexto
  editorial, preservando as críticas anteriores. Backups privados atualizados.

IDs atuais completos do lote 05 para integração (reescreve o arquivo inteiro):
`course-3c1c6438 course-e4a5aa54 course-c5049767 course-0a23ce3d course-2b490f5f course-a73beb78 course-e752d495 course-e7200af0 course-67789452 course-09d3e70e`.

O patch privado da pausa é antigo: não reaplicá-lo. Preservar o trabalho particular
no diretório original. Detalhes verificados em `docs/CURRICULUM_COMPLETION_PROGRESS.md`.

## Registro histórico da pausa — superado pelo estado atual

Retomada autorizada pelo usuário em 15/11/2026. O checkpoint abaixo registra a
pausa anterior; a execução do catálogo foi retomada a partir dos arquivos salvos.

Em 14/11/2026 à noite (Brasil), o usuário pediu para dormir e continuar no dia
seguinte. A fila Claude Code, as críticas em andamento e o servidor de preview
3316 foram encerrados. Não reiniciar trabalho enquanto a pausa não for revogada.

## Checkpoint publicado

- Worktree: `C:/Users/pedro/.codex/worktrees/kognos-quality-20261114`.
- Branch: `codex/quality-reliability-20261114`.
- PR draft: https://github.com/PedroH0309/Kognos-App/pull/117.
- Commit de implementação: `74ac2e5`; CI `43662941105` aprovada.
- Lotes 03 e 04: 16 aulas cada; lote 05: quatro aulas publicadas no PR.
- 36 aulas desta etapa, 614 testes da aplicação + seis do motor, lint alterado,
  build e leitor real aprovados. Restam 1.259 lacunas. Sem homologação docente,
  merge, deploy, publicação no banco ou alteração de schema/RLS.
- Progresso detalhado: `docs/CURRICULUM_COMPLETION_PROGRESS.md`, checkpoint 7.

## Trabalho local preservado

- Lote 05 tem uma quinta aula integrada localmente, ainda não commitada:
  Inglês — Vocabulário contextual e cognatos (`course-2b490f5f`). Correção e
  crítica aceitas; 27 testes focados passaram. Ainda falta repetir build,
  testes gerais e navegador depois das próximas integrações. O preview anterior
  contém apenas as 36 aulas do checkpoint publicado.
- Modificados por essa integração: `authored-curriculum-batch05.ts` e
  `canonical-lesson-index.generated.ts`. Patch de backup ignorado:
  `private/curriculum-run/pause-uncommitted.patch`. Os arquivos permanecem
  modificados; não reaplicar o patch sobre eles sem verificar o estado.
- `apps/web/AGENTS.md` é gerado e não deve ser commitado.
- Preservar o trabalho particular no diretório original do usuário. Não usar
  stash, reset ou restore nele. `legacy/` permanece intacto.

## Próximas aulas

1. Espanhol — Conectivos, pronomes e estruturas verbais (`course-a73beb78`):
   `principal-corrected.json` e fontes estão prontos, mas a crítica está rejeitada
   e **não permite integração**. O crítico inventou exigência de tonicidade para
   y/e e o/u, contradizendo o DPD diretamente conferido. A resposta com evidências
   foi salva em `principal-response.json`; a crítica incorreta foi preservada em
   `principal-second-review-incorrect-tonicity.json`. O helper de crítica usa só
   o hash da aula para cache e não percebe mudança da resposta editorial:
   preservar/renomear o resultado atual antes de solicitar crítica novamente.
   Não alterar a aula para seguir afirmações falsas do revisor.
2. Física — Eletricidade cotidiana (`course-e752d495`): versão corrigida e cinco
   referências OpenStax salvas. A crítica foi interrompida; retomar. Removidas
   regras de instalação inventadas e confusão entre fator de potência e rendimento.
   Criar teste numérico antes de integrar: série 20 V / (6+4 Ω), FP 800 VA × 0,75,
   energia de entrada versus útil (48 → 36 → 40 kWh; economia fictícia R$ 6,40).
3. Química — Soluções e concentração (`course-e7200af0`) e Biologia — Ecologia e
   impactos ambientais (`course-67789452`), ainda sem conferência principal.

## Recomeçar a colaboração local

Rascunhos, revisões e fila de 1.295 lacunas iniciais ficam em
`private/curriculum-run/` (ignorado pelo Git). São candidatos, nunca aprovação
automática. Helpers foram copiados do Temp para
`private/curriculum-run/resume-helpers/`. Eles mantêm caminhos absolutos do mesmo
worktree e alguns consultam o helper original no Temp: se necessário, restaurar
os helpers no Temp antes de executá-los.

Executável Python do FCC:
`C:/Users/pedro/AppData/Roaming/uv/tools/free-claude-code/Scripts/python.exe`.
Claude Code: `C:/Users/pedro/.local/bin/claude.exe`. Usa o provedor local já
configurado pelo usuário, não se alega modelo Anthropic. Não imprimir settings,
ambiente, tokens ou chaves. Dois workers da fila, ferramentas Claude desativadas.

`kognos-curriculum-collaboration-v2.py` retoma por arquivos/IDs. Verificar cache e
estados principais ao reiniciar; resultados já integrados são ignorados.
`kognos-review-final.py ID` faz crítica independente da versão corrigida.
`kognos-integrate-batch05.mjs` reescreve o lote inteiro: passar **todos** os IDs
atuais mais o novo, depois regenerar o índice e rodar testes focados.

IDs atuais do lote 05, em ordem:
`course-3c1c6438 course-e4a5aa54 course-c5049767 course-0a23ce3d course-2b490f5f`.

Aplicar o contrato comum sem reduzir métricas. Ler e recalcular inclusive as
críticas: houve erros reais dos rascunhos e erros inventados pelos revisores.
Manter referências, autoria assistida e revisão humana pendente. Só atualizar o
PR com contagens verificadas; o usuário quer continuar até concluir o catálogo,
mas esta pausa não é conclusão.
