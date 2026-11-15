# Retomada após pausa solicitada pelo usuário

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
