# Continuidade do catálogo — execução retomada

## Estado atual em 15/11/2026 — checkpoint 20

CONTINUAR ATÉ COMPLETAR TODAS AS AULAS. Não finalizar neste checkpoint.
Worktree C:/Users/pedro/.codex/worktrees/kognos-quality-20261114; branch
codex/quality-reliability-20261114; PR117 draft. Raiz original tem trabalho usuário.

- Lotes03–08 completos,09nove. Total105 novas. 650 testes + seis do motor,
  50 específicos, build/lint/leitor aprovados. API105; cinco novas15respostas,
  quatro larguras/referências. Preview3316/fixtures105; índice322.
- Lacunas1190, ENEM118/778, estudo118/37/752. Homologação humana pendente;
  sem banco/schema/RLS/merge/deploy. CI19 43739422221 success head6684943.
- Integrador09 reescreve módulo: TODOS os nove IDs obrigatórios:
  course-908579c0 course-d975676a course-7774e4cc course-7e1c2be2
  course-1e013a84 course-3a987540 course-e243247f course-e296f2d6 course-19628dfd.
- Próximos09[105..111]: course-beb74772 História Renascimento e Reformas
  religiosas; course-e0d9a321 Geografia Clima, massas de ar e mudanças climáticas;
  course-9bfe0da1 Filosofia Filosofia política e democracia; course-bb4de815
  Sociologia Estado, poder e cidadania; course-09d10671 Arte Perspectiva e
  composição visual; course-f341096e EdFísica Esportes coletivos e individuais;
  course-d79458d8 Ciências Corpo humano e saúde.
- História draft1 LIDO integralmente. Crítica1 ainda não chegou na última leitura;
  worker passou a tentativa2 por erroJSON. Nenhum principal pronto. Corrigir:
  poema Petrarca As Três Cordas sem fonte/cartasLaura; humanismo secular como
  regra; Trento fundando jesuítas (aprovados1540, antes de1545); HenriqueVIII
  tratado imediatamente luterano; Augsburgo obrigando todos sem exceções;
  cronologia revolução1688 no séculoXVIII; narrativa linear de tolerância.
- Fontes História abertas: OpenStax world-history-volume-2/5-1-the-protestant-
  reformation; LOC https://wwws.loc.gov/exhibits/vatican/humanism.html;
  Parliament Act of Supremacy1534; Newberry https://dcc.newberry.org/?p=18521.
  Hanover1559 e fontes primárias de Trento ainda precisam leitura pertinente.
- Espanhol/Física/Química/Bio autoria principal Codex, crítica Claude separada.
  Pareceres corrigidos explicitamente pelo principal preservam originais;
  não reaplicar scripts base nem afirmar correção principal feita pelo Claude.
- Helper final privado exige3questões em ordem, reasoning>=80, concepts>=3,
  scope>=80, decisão coerente; salva incompletos e tenta até3vezes. Wrapper
  Lightning atualizado para _reviewModel. Não afeta configuração global.
- Worker próprio v4 raizPID19984, limite112, um autor; log Temp/kognos-
  curriculum-collaboration-v4-20261115.log. Não matar usuário/proxy. Ao acabar
  limite112, ampliar próximo lote deliberadamente, sem reduzir qualidade.
- Helpers Temp respaldados em private/curriculum-run/resume-helpers. Restore
  next-env só na RAIZ ativa. AGENTS gerado fora do commit. Fetch/preservar
  concorrência antes de push, sem force. Atualizar PR/CI após commit20.

## Histórico — checkpoint 19

Trabalho local posterior ao commit19 (CI19 43739422221 success, head6684943):
- Módulo09 já ampliado localmente para oito aulas: quatro publicadas + Inglês,
  Espanhol, Física e Química. Total104 LOCAL, ainda sem novo índice/build/leitor.
  Preview3316 e fixtures permanecem100, NÃO executar leitor com fixtures novas
  antes de rebuild correspondente.
- Física/Química têm testes RED→GREEN específicos. Biologia Fotossíntese
  course-19628dfd principal pronto, crítica sessão93926 pendente de leitura;
  teste RED já no agregador, portanto suíte atual falha até integrar Biologia.
- Após crítica Bio aceita e lida, integrador09 com TODOS os nove IDs:
  908579c0 d975676a 7774e4cc 7e1c2be2 1e013a84 3a987540 e243247f e296f2d6
  19628dfd (cada um com course-). Index/metrics/fixtures, focused50, full650,
  build/lint e novo leitor105 com cinco aulas/15MCQ/4widths; contagens confirmar.
- Espanhol, Física, Química e Biologia são autoria principal Codex independente;
  não alegar rascunho Claude usado. Crítica separada via ClaudeCodeNIMLightning.
- Espanhol crítica omitiu2questões duas vezes, depois3respondidas com erros
  de transcrição, alegação de exemplo repetido e relaçãofalsa de distractores.
  Correções principais documentadas, original integral preservado. Aula e
  índices2/0/3 não alterados. Versão final informática, nunca reaplicar antiga.
- Crítico helper Temp/kognos-review-final.py agora exige3questões completas,
  índices em ordem, justificativas>=80, conceitos>=3 e decisão coerente com
  issues; inválidos preservados em principal-incomplete-review e retries3.
  Cache também rejeita incompletos. WrapperLightning ajustado para _reviewModel.
  Smoke isolado aprovou caso válido/rejeitou incompleto/inconsistente/duplicado.
- Helpers novos e alterações copiados a private/curriculum-run/resume-helpers.
- Próximo História course-beb74772 está em autoriaworker. Fontes primárias
  encontradas: OpenStax world-history-volume-2/5-1-the-protestant-reformation,
  LOC exhibits/vatican/humanism.html, Parliament Act of Supremacy1534 e
  Hanover history/texts/engref/er79.html (1559). Ainda não autoradas pelo principal.

CONTINUAR ATÉ COMPLETAR TODAS AS AULAS. Não encerrar neste checkpoint.
Worktree C:/Users/pedro/.codex/worktrees/kognos-quality-20261114; branch
codex/quality-reliability-20261114; PR117 draft. Raiz original tem trabalho usuário.

- Lotes03–08 completos; 09 quatro aulas: total100 novas. 647 testes + seis
  do motor, build, lint alterado e leitor100 aprovados. 12 novas respostas e
  referências em quatro larguras. Preview3316 contém100; fixtures100; índice317.
- Lacunas1195; ENEM113/783; estudo113/39/755. Sem homologação docente, banco,
  schema/RLS, merge ou deploy. CI18 43737738798 success head e57ffa6.
- Integrador09 reescreve módulo: passar TODOS os IDs existentes:
  course-908579c0 course-d975676a course-7774e4cc course-7e1c2be2.
  As três funções de fallback já usam agregador atualizado com lote09.
- Matemática: crítico afirmou inversão de divisão = −0,95%; principal corrigiu
  para inversão de sinal (inversa seria −0,94%), original preservado. Cálculos
  testados. Português e Literatura precisaram nova crítica por alegações falsas.
- Redação: rascunho1 rejeitado por omitir sufixo(ENEM), mas lido e corrigido
  pelo principal. Cartilha2026 oficial PDF não respondeu; cópia INEP identificada
  em noticiasconcursos consultada sem material concorrente. Limite registrado
  em principal-review antes da integração; não alegar hash idêntico ao oficial.
- Inglês09 course-1e013a84: principal completo em arquivo privado; crítica
  accept lida, índices2/3/0, estrutura passa. Ainda NÃO integrar antes de fechar
  este checkpoint. Fonte BC páginas abertas; Cambridge403 direto, índice oficial
  consultado. Nova autoriaworker não substitui principal. Texto privado prevalece.
- Próximos09 course-3a987540 Espanhol, e243247f Física, e296f2d6 Química,
  19628dfd Biologia, beb74772 História, e0d9a321 Geografia, 9bfe0da1 Filosofia,
  bb4de815 Sociologia, 09d10671 Arte, f341096e EdFísica, d79458d8 Ciências.
- Worker v4 um processo raiz inicial19984, limite112, Lightning por CLI somente.
  Log Temp/kognos-curriculum-collaboration-v4-20261115.log; erros no arquivo
  errors. Não matar Claude do usuário/proxy. v2 importado por críticos.
- Helpers Temp copiados para private/curriculum-run/resume-helpers. Não
  reaplicar scripts base08 (Newton28N errado e Geoexemplo exige refinamento).
- Restore next-env somente da RAIZ ativa. Não commitar AGENTS gerado. Fetch
  antes de push, ler concorrência e sem force. Atualizar PR/CI após commit19.

## Histórico — checkpoint 18

CONTINUAR até completar as aulas, sem encerrar neste checkpoint. PR draft 117.
Worktree C:/Users/pedro/.codex/worktrees/kognos-quality-20261114; branch
codex/quality-reliability-20261114. Raiz original tem trabalho do usuário.

- Lotes 03–08 completos, 96 novas. 645 testes + seis do motor, build, lint
  alterado e leitor aprovados. API 96; últimas sete com 21 respostas e
  referências em quatro larguras. Preview 3316 contém 96. Índice 313.
- Lacunas 1199; ENEM 109/787; estudo 109/41/757. Homologação docente pendente.
- Arquivos privados finais e hashes são a verdade, não reaplicar scripts base.
  Newton tem 28,8 N (script base errado); Geografia exige refinamento do exemplo.
- Lote08 completo: ec7605b5 dbf21a8e 84476138 547b99f1 10a4bfef 1b39a7ec
  c16348f7 0ef210b6 bdb5db0b 7f0fb858 9a137405 dce3680a a907a354 561bf0c8
  213b533d a90fa732; todos prefixados course-. Integrador reescreve o lote,
  deve receber TODOS os IDs, nunca subconjunto acidental.
- Autoria Codex nas três Trabalho/Esportes/Células, crítica Claude separada.
- Worker próprio v4 PID inicial 19984, limite112, um autor; Lightning por
  processo. Log Temp/kognos-curriculum-collaboration-v4-20261115.log.
  Não fechar Claude do usuário/proxy. Helpers v2 são importados pelo crítico.
- Críticas finais: Temp/kognos-review-final-lightning.py ID. Ler inteiro;
  aceite não é prova. Verificar texto/contexto pelo readiness helper.
- Próximo lote09 course-908579c0 Porcentagem e juros: principal pronto, crítica
  Lightning solicitada; teste RED em Temp/kognos-batch09-math-red.test.ts.
  Só transportar teste/integrar módulo09 após fechar este checkpoint.
- course-d975676a Português: draft1 e crítica1 lidos, ambos aceitam absurdos
  (ausência de sujeitos no céu; implicatura falsa com porque; denotação fixa;
  bala por notícia). Precisa reescrita principal e fontes verificadas.
- Demais09: 7774e4cc Literatura; 7e1c2be2 Redação; 1e013a84 Inglês;
  3a987540 Espanhol; e243247f Física; e296f2d6 Química; 19628dfd Biologia;
  beb74772 História; e0d9a321 Geografia; 9bfe0da1 Filosofia; bb4de815 Sociologia;
  09d10671 Arte; f341096e Educação Física; d79458d8 Ciências.
- Redação: localizar e ler cartilha oficial INEP 2026, sobretudo competência V;
  não confundir zero da competência com zero de toda redação.
- Restore next-env só na RAIZ ativa. AGENTS gerado fica fora do commit.
  Fetch antes de push, ler concorrência, sem force. Sem schema/banco/merge/deploy.
- CI17 43732469514 success head45569cf; atualizar PR e CI após commit18.

## Histórico — checkpoint 17

Atualização de trabalho após esse commit (15/11, 13:35 local): as sete aulas
restantes do lote 08 já têm principal-corrected e referências em privado.
História e Geografia têm crítica aceita, lida e hash/contexto atuais. Filosofia,
Sociologia, Arte, Educação Física e Ciências aguardam a crítica serial em curso
na sessão própria (runner kognos-review-final-lightning.py). NÃO integrar só
porque a estrutura passa. Os três testes novos de Geografia/Sociologia/Ciências
estão em RED no working tree porque esses módulos ainda não foram integrados;
o commit publicado 45569cf tem 642 testes aprovados e CI 43732469514 success.

O provedor NIM padrão Ultra passou a falhar por timeout, inclusive em chamada
mínima. Proxy /health respondeu200 e catálogo NIM200; autenticação nativa do
Claude está ausente. Não mudar configuração global nem tentar credenciais novas.
Teste pelo Claude Code com modelo NIM Lightning respondeu JSON corretamente.
Revisões agora usam nvidia_nim/nvidia/nemotron-3.5-lightning-30b-a3b só por
argumento de cada processo; não alegar modelo Anthropic. Geo foi aceita por essa
sessão e deve manter o exemplo básico refinado (comparação de perfis), diferente
da tarefa de erosão. Runner v3 antigo foi encerrado apenas nos processos próprios.
Autoria v4 retomada com um worker, PID inicial19984, limite112, log Temp/
kognos-curriculum-collaboration-v4-20261115.log; prepara o lote09 [96..111].

Sociologia foi escrita pelo Codex, sem usar rascunho paralelo que não chegou;
draftMethod próprio registrado. Educação Física e Ciências também são de autoria
principal pelo Codex; antes de integrar, atualizar draftMethod retirando a frase
crítica ainda pendente SOMENTE após crítica aceita e lida. Arte partiu de draft1
do Claude, corrigido pelo Codex. Referências FIBA2026 e FIVB2025–2028 conferidas;
não substituir pelas regras antigas. Exemplos são autorais e distintos das tarefas.
Helpers finais copiados para private/curriculum-run/resume-helpers. JSON final
prevalece sobre script base; Geo requer kognos-refine-soil-example.py após base.

Após as seis críticas: integrar TODOS os16 IDs do lote08, regenerar índice,
medir contagens reais e fixtures, testes focados/full/lint/build, restore só de
next-env na raiz, preview e leitor das sete novas em quatro larguras; só depois
documentar checkpoint18, fetch/push e atualizar PR/CI. Continuar lote09 em seguida.


Continuar até completar as aulas; não encerrar neste checkpoint. PR 117 draft.
Sem banco, schema/RLS, merge ou deploy; revisão docente humana pendente.

- Lotes 03–07 completos; lote 08 nove aulas: 89 novas. 642 testes da aplicação
  + seis do motor, lint, build e leitor aprovados. API das 89 comparada; cinco
  novas com 15 respostas e referências expandidas em quatro larguras. Preview
  3316 contém 89. CI do checkpoint 16: 43730807041 success, head 3902ac8.
- Restam 1.206 lacunas; ENEM 103/793; estudo 103/43/761.
- Integrador 08 deve receber TODOS os nove IDs existentes ao reescrever lote:
  ec7605b5 dbf21a8e 84476138 547b99f1 10a4bfef 1b39a7ec c16348f7 0ef210b6
  bdb5db0b (cada um com prefixo course-). Não remover subconjunto sem querer.
- Física: tração final 28,8 N, texto corrigido e nova crítica independente
  conferindo ambas as equações. Script base ainda tem 28 N, NÃO reaplicar;
  kognos-fix-newton-tension.py e resposta privada foram necessários.
- Espanhol/Biologia: redações da crítica corrigidas pelo principal, originais
  preservados e _principalCorrections explícito; sem atribuir correção ao Claude.
- Próximos [89..95]: História course-7f0fb858; Geografia course-9a137405;
  Filosofia course-dce3680a; Sociologia course-a907a354; Arte course-561bf0c8;
  Educação Física course-213b533d; Ciências course-a90fa732.
- História: draft2 e crítica lidos, versão principal corrigida já escrita;
  crítica final solicitada, ainda não integrada. Retirados contratos/cartulários
  fictícios com nomes reais, estatuto servil inferido de encargos e lucro
  calculado com produção inventada e hl=quarters. LER crítica antes de integrar.
- Geografia: draft2/crítica lidos, ainda SEM principal. Falsos diagnósticos de
  Latossolo por clima/basalto, B textural atribuído a Latossolos, voçoroca
  irreversível, LS linear/exponencial, medidas inventadas e tolerância universal.
  SiBCS 6ª edição 2025 localizado via handle doc/1176834; PDF direto retorna404
  nesta ferramenta. Horizontes diagnósticos no portal Embrapa. USDA/NRCS e IBGE
  primários localizados. Não misturar RUSLE simples e software RUSLE2.
- Fila v3b um worker próprio, log Temp/kognos-curriculum-collaboration-v3b-
  20261115.log; não matar Claude do usuário/proxy. Helpers v2 ainda necessários.
- JSON principal final prevalece sobre scripts base. Crítica final verifica
  texto e contexto; aceite não dispensa leitura. Restore de next-env só na RAIZ.
  Fetch antes de push, preservar concorrência e deixar AGENTS gerado fora.

## Histórico — checkpoint 16

Continuar até completar as aulas; não encerrar neste checkpoint. PR 117 draft.
Sem banco, schema/RLS, merge ou deploy; revisão docente humana pendente.

- Lotes 03–07 completos e lote 08 com quatro: 84 novas, 639 testes da aplicação
  + seis do motor, lint alterado, build e leitor Chromium aprovados. API das 84
  comparada, quatro novas e 12 respostas em quatro larguras com referências
  expandidas. Preview 3316 contém 84. CI anterior 43728379175 aprovada.
- Restam 1.211 lacunas; ENEM 98/798; estudo 98 aprofundadas/43 guias/766 planejadas.
- Lote 08 contém course-ec7605b5, course-dbf21a8e, course-84476138,
  course-547b99f1. Integrador reescreve TODO o lote: sempre passar todos os IDs.
  Hash de texto e de contexto conferidos, normalizando CRLF como Python.
- Literatura: correção de redação da crítica preservou original em privado;
  não há menção racial na opção B, que propõe inferioridade biológica sem base.
- Inglês course-10a4bfef: draft4 e crítica lidos. Corrigidos will após if,
  backshift não obrigatório de must, hipóteses mistas e modais perfeitos. Texto
  principal pronto, crítica final solicitada; LER resultado integral antes de
  integrar. Não reaplicar helper base sobre refinamentos posteriores.
- Espanhol course-1b39a7ec: draft3 lido, ainda SEM correção principal. Contém
  metafonia inventada, desarrollo chamado de forma em -miento, falsos cognatos
  mal comparados, celebração classificada como esdrúxula, questão sem lista de
  correspondências e inferências que adicionam validação não dada. Reescrever
  com contexto e léxico verificado em DLE/Cervantes. Seguem Física course-c16348f7,
  Química course-0ef210b6 e Biologia course-bdb5db0b; consultar fila para demais.
- Autoria v3b com um worker próprio (PID inicial 26292), log
  Temp/kognos-curriculum-collaboration-v3b-20261115.log. Guardas pulam temas com
  principal-corrected antes de nova autoria/crítica. Não matar Claude do usuário
  nem proxy FCC. Helpers v2 ainda são importados pela crítica final.
- Helper final kognos-review-final.py verifica texto E contexto. Aceite vazio
  não substitui leitura crítica: revisores também erram. JSON final é fonte da
  retomada. Helpers em Temp e backups privados; sem autointegração/commit.
- Restaurar somente next-env alterado pelo build, sempre com cwd na RAIZ ativa.
  Antes de push: fetch, preservar concorrência e excluir AGENTS gerado.

## Histórico — checkpoint 15

Este estado prevalece sobre os históricos. Continuar até completar as aulas;
não encerrar neste checkpoint. PR 117 draft; sem banco/merge/deploy.

- Lotes 03–07 completos: 80 novas. 638 testes da aplicação + seis do motor,
  lint alterado, build e leitor real aprovados. API das 80 comparada; sete novas,
  21 respostas e referências expandidas em 320/375/768/1440 px aprovadas.
  Preview 3316 contém 80. CI anterior 43725072023 aprovada.
- Restam 1.215 lacunas; ENEM 94/802; estudo 94/46/767. Revisão humana pendente.
- Lote 07 completo na fila [64..79]. Não reescrever com subconjunto de IDs.
  Integrador privado verifica hash de texto E contexto, normalizando CRLF como
  leitura Python. Autoria individual preservada em draftMethod do principal.
- Teste do estágio 16 agora permite substituição curricular e preserva TODAS
  as verificações das seis questões e estrutura originais. Não reverter.
- Próximo lote 08, fila [80..95]. course-ec7605b5 Matemática — Razões, escalas e
  proporcionalidade: draft2 lido, ainda SEM correção principal ou teste. Steps
  vieram como arrays; explicações curtas; homogeneidade não implica concentração
  constante sob qualquer operação; proporções inversas requerem condições.
  Escala gráfica só acompanha redimensionamento uniforme se a barra também muda.
  Inverter razões consistentemente não é erro. Q3 dá 10 máquinas, com condições
  de produtividade a explicitar. Fontes OpenStax 5.6/6.5 Prealgebra, Elementary
  Algebra 8.9 e IBGE liv101675 localizadas; conferir conteúdo antes de publicar.
- course-dbf21a8e Português — Variação/norma-padrão: draft3 e crítica lidos.
  Norma-padrão não é sinônimo automático de norma culta; artigo antes de nome
  próprio é facultativo no caso apresentado; estereótipos fonéticos e atribuição
  a Bagno como inventor do termo são falsos. Notícia não vira editorial pelo
  registro formal. Sem versão principal ainda. Fontes Ceale e Ciberdúvidas
  21809 sobre artigo facultativo localizadas. Seguem Literatura course-84476138
  e Redação course-547b99f1, ainda não lidas.
- Fila antiga de dois workers foi encerrada só nos processos próprios para
  reduzir timeouts. Autoria retomada com v3 de um worker (PID inicial 21836), log
  Temp/kognos-curriculum-collaboration-v3-20261115.log; começou Matemática draft3.
  Não matar proxy FCC nem Claude do usuário. Helpers v2 continuam necessários
  para importação dos scripts de crítica. Sem autointegração.
- Helpers e correções finais estão em Temp e backups privados. JSON principal
  final é fonte da retomada: NÃO reaplicar scripts base sobre aula já corrigida;
  refinamentos posteriores são necessários e mudam hashes/contexto da crítica.
- Integrador batch08 já preparado em Temp (nomes/exports 08), mas não executado.
  Antes de push, fetch, preservar concorrência e deixar AGENTS gerado fora.

## Histórico — checkpoint 14

Este estado prevalece sobre os históricos. Execução ativa até completar aulas;
não encerrar neste checkpoint. PR 117 draft; sem banco/merge/deploy.

- 73 aulas novas: lotes 03–06 completos e nove no 07; 635 testes + seis do motor,
  lint alterado, build, API das 73 e leitor das cinco novas aprovados. Foram 15
  respostas e referências expandidas em 320/375/768/1440 px. Preview 3316 = 73.
- Restam 1.222 lacunas; ENEM 88/808; estudo 88/47/772. Revisão humana pendente.
  CI do checkpoint 13 43723017121 aprovada.
- Integrador 07 reescreve tudo: manter course-ca3586c5 course-e5132a3e
  course-e1614f73 course-8aa12850 course-400807fd course-176421ee
  course-b3e78a50 course-e31ebf0d course-e43a4fab antes de acrescentar outros.
- Biologia: crítica acertou volume, mas errou unidade de partículas. Correção
  _principalCorrections preserva original-units; não apagar ao reutilizar cache.
- Próximo course-67ca78bb História: draft3/crítica lidos e versão principal
  reescrita; nova crítica em execução. NÃO integrada neste checkpoint. Corrigidas
  realeza divina, cidadania, determinismos e generalizações; fontes conferidas.
- Geografia course-87b3d0a9: reviewed bruto lido, ainda SEM versão principal.
  Erros graves aceitos: hotspot inverte direção do movimento, ondas P diretas
  presumidas na sombra, Pangeia 300 Ma confundida com extinção 252 Ma, tomografia
  tratada como diagnóstico químico único. Reescrever antes de integrar.
- Restantes 07: course-998f05a6 Filosofia; course-a8d7ba10 Sociologia;
  course-def934f8 Arte; course-5e32cba9 Educação Física; course-25151546 Ciências.
- Autoria Claude continua sem autointegração. Helpers em Temp/backups privados;
  fetch antes de push, preservar concorrência e não commitar AGENTS gerado.

## Histórico — checkpoint 13

Este estado prevalece sobre os históricos. Continuar até completar as aulas;
não encerrar neste checkpoint. PR 117 draft; sem merge/deploy/banco.

- Lotes 03–06 completos, quatro aulas no lote 07: 68 novas nesta etapa.
- 632 testes da aplicação e seis do motor, lint alterado, build e leitor real
  aprovados. API das 68 comparada; quatro novas, 12 respostas e referências
  expandidas em 320/375/768/1440 px aprovadas. Preview 3316 contém 68 aulas.
- Restam 1.227 lacunas; ENEM editorial 83/813; lista de estudo 83/48/776.
  Revisão humana pendente. CI anterior 43720220273 aprovada.
- Integrador batch07 reescreve tudo: manter course-ca3586c5 course-e5132a3e
  course-e1614f73 course-8aa12850 e acrescentar novos IDs. Lotes anteriores intactos.
- Próximo course-400807fd Inglês — Tempos e aspectos verbais: draft2 lido,
  ainda sem versão principal. Corrigir absolutos sobre present continuous,
  stative verbs, past perfect e futuros e questões com respostas ambíguas.
  Fontes British Council e Cambridge estão sendo conferidas. Seguem Espanhol
  course-176421ee, Física course-b3e78a50 e Química course-e31ebf0d.
- Teste histórico de matemática agora permite prioridade curricular e preserva
  TODAS as verificações das aulas antigas. Não reverter essa correção de teste.
- Crítica de Literatura teve descrições A/B trocadas; original preservado e
  _principalCorrections documentado. Não apagar correções documentais do cache.
- Autoria Claude em background sem integração automática; helpers Temp e backups
  privados. Fetch antes de push; preservar concorrência. AGENTS gerado fora do commit.

## Histórico — checkpoint 12

Este estado prevalece sobre todos os históricos abaixo. Execução ativa a pedido
do usuário; continuar até completar as aulas, sem encerrar neste checkpoint.

- Lotes 03/04/05/06 completos, 16 aulas cada: 64 novas nesta etapa.
- 631 testes da aplicação + seis do motor, lint alterado, build e leitor real
  aprovados. API das 64 comparada; sete novas, 21 respostas e referências
  expandidas em 320/375/768/1440 px aprovadas. Preview 3316 contém este checkpoint.
- Restam 1.231 lacunas; ENEM editorial: 79 aprofundadas e 817 lacunas. Lista de
  estudo: 79 aprofundadas, 48 guias e 780 planejadas. Revisão humana pendente.
- CI do checkpoint 11 `43717481529` aprovada. Sem banco/merge/deploy.
- Lote 06 contém TODOS os IDs da fila original [48..63]. Seu integrador reescreve
  tudo; não reutilizá-lo para o lote 07 sem mudar arquivo e nomes de exports.
- Próximo: lote 07, fila [64..79]. Começa `course-ca3586c5` Matemática — Operações,
  divisibilidade e conjuntos numéricos. Rascunho e crítica foram lidos: há excesso
  de teoria modular sem ensino e justificativas erradas de alternativas de MDC/MMC.
  Ainda SEM versão principal, teste novo ou integração. Fontes OpenStax sobre
  reais/propriedades/fatoração/MMC já conferidas; corrigir antes de nova crítica.
- Seguem `course-e5132a3e` Português, `course-e1614f73` Literatura,
  `course-8aa12850` Redação, `course-400807fd` Inglês e demais temas da fila.
- Autoria Claude permanece em background, com rascunhos perto da quinta rodada.
  Sem integração automática. Helpers estão em Temp e backups privados.
- A crítica de Geografia confundiu dobrar e quadruplicar no distrator de 1→4 km²:
  registro corrigido com original preservado e `_principalCorrections` privado.
  Não reexecutar revisão em cache e apagar essa correção documental.
- PR 117 draft, branch codex/quality-reliability-20261114. Antes de push, fetch e
  preservar trabalho concorrente. `apps/web/AGENTS.md` gerado fica fora do commit.

## Histórico — checkpoint 11

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
