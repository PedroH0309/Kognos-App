# Expansão integral do catálogo — em execução

Solicitação de 14/11/2026: continuar a autoria com o Claude Code, pelos mesmos
critérios, até completar as aulas. Este documento registra checkpoints; não
declara conclusão do catálogo, homologação docente ou publicação em produção.

## Estado atual — checkpoint 4

O lote 04 começou com quatro aulas integradas e conferidas: Matemática — Funções
e gráficos; Português — Gêneros e linguagens; Redação — Estrutura
dissertativo-argumentativa; Inglês — Estratégias de leitura e inferência. Somados
ao lote 03, são 20 textos autorais novos nesta etapa, com revisão humana pendente.

Restam 1.275 lacunas entre 1.512 identidades. No recorte editorial ENEM, são 38
temas aprofundados e 858 lacunas. A lista de estudo ENEM tem 38 aulas aprofundadas,
60 guias introdutórios e 809 temas em desenvolvimento. Não há equivalência entre
essas contagens e habilidades oficiais concluídas.

Foram corrigidos domínio e imagem de funções, distinção de função afim constante,
condições de perpendicularidade e generalizações de gráficos. Os testes recalculam
imagem, inclinação e intervalo de lucro. Em linguagens, os textos separam gênero,
sequência e suporte; em redação, eliminam regras universais de parágrafos e notas
automáticas; em inglês, retiram tempo de prova inventado e inferências sem apoio.
Exemplos e exercícios são autorais, com referências verificadas nos materiais.

O validador agora também detecta palavras corrompidas por mistura acidental de
alfabetos latino, hangul e han, sem proibir referências isoladas em outras línguas.
O teste negativo reproduz dois defeitos encontrados em rascunhos. Os limites de
conteúdo e as exigências de revisão não foram reduzidos.

Verificação: 607 testes da aplicação e seis do motor, lint dos arquivos alterados
e build de produção aprovados. Chromium comparou a API das 20 aulas aos textos,
abriu as quatro novas por `/cursos`, respondeu às 12 questões e mostrou as
explicações, sem exceções ou rolagem horizontal em 320/375/768/1440 px. A CI do
checkpoint anterior passou; o novo commit ainda deve passar pela CI.

## Histórico — checkpoint 3

O lote 03 tem 16 aulas integradas: uma primeira aula nas 16 disciplinas da fila.
Restam 1.279 lacunas entre 1.512 identidades curriculares. No recorte editorial
ENEM, são 34 temas aprofundados e 862 lacunas; a lista de estudo ENEM reúne 34
aulas aprofundadas, 61 guias introdutórios e 812 temas em desenvolvimento.
Essas unidades são diferentes e não representam habilidades oficiais concluídas.

Além das nove aulas do checkpoint anterior, entraram:

- História — Brasil colonial: ocupação, povos indígenas, instituições, economias,
  escravização, resistências e distinção entre 1808, 1815 e 1822. Referências
  incluem Receita Federal, pesquisa da UFF, FUNAG e a Carta de Lei de 1815.
- Geografia — Cartografia: coordenadas, orientação, escalas, projeções e leitura
  de mapas temáticos. Corrigidas regras falsas sobre conformidade e distâncias,
  conversão de unidades e conclusões sobre quantis; testes recalculam os dados.
- Filosofia — Introdução à filosofia e argumentação: problemas, premissas,
  dedução, indução e crítica de falácias; retirados estudos e citações inventados.
- Sociologia — Surgimento da sociologia e métodos: contexto, perspectivas
  clássicas, confiabilidade, validade, causalidade e ética. O exemplo de entradas
  e pessoas distintas mostra por que uma medida consistente pode ser inadequada.
- Arte — Linguagens artísticas e leitura de imagens: recursos visuais, sonoros,
  corporais e cênicos; interpretação com evidências e contexto de circulação.
  As composições são autorais e descritas integralmente, sem figuras ausentes.
- Educação Física — Corpo, movimento e saúde: atividade física, exercício,
  comportamento sedentário, capacidades, participação e acesso. O texto é
  dirigido ao estudante, sem prescrição clínica ou aconselhamento jurídico.
- Ciências — Matéria, substâncias e misturas: fases, componentes, transformações,
  separação e balanço de massa. Retiradas regras falsas de destilação e conteúdo
  termodinâmico fora do objetivo; o teste confere a massa do filtrado.

Todas mantêm autoria assistida, fontes nos materiais, hashes da versão conferida
e revisão pedagógica humana pendente. Rascunhos recusados não são cobertura.

Também foi corrigida a abertura direta de um alias curricular já aprovado:
`/cursos` agora entrega a mesma fonte aprofundada do inventário. Publicação própria
do alvo tem prioridade; publicação atualizada da fonte fornece sua revisão;
retirada, arquivamento, publicação inválida e falha de consulta impedem fallback.
O ID solicitado continua nos metadados do tópico e as questões pertencem à fonte
entregue. Oito testes de resolução cobrem esses caminhos sem alterar schema.

Verificação: 605 testes da aplicação, seis do motor e 244 verificações de design
aprovados; lint dos arquivos alterados e build de produção aprovados. Chromium
conferiu a API das 16 aulas, abriu as sete novas pela navegação pública, respondeu
às 21 questões e mostrou explicações. O alias foi aberto diretamente, com suas
três questões e a mesma fonte canônica. Sem exceções ou rolagem horizontal em
320/375/768/1440 px. Não houve merge, deploy ou publicação no banco.

## Histórico — checkpoint 2

O lote 03 tem nove aulas integradas e conferidas. Restam 1.286 lacunas entre as
1.512 identidades do catálogo; no recorte editorial ENEM, são 28 temas aprofundados
e 868 lacunas. A lista de estudo ENEM reúne 28 aulas aprofundadas, 65 guias e 814
temas em desenvolvimento. A fila de autoria e revisão continua em execução.

Além das três aulas do primeiro checkpoint, entraram:

- Inglês — Leitura e interpretação de textos: contexto, referentes, quantificadores,
  modalidade, argumentação e ironia com exemplos autorais diferentes dos exercícios.
- Física — Movimento e forças: cinemática, leis de Newton, atrito, fios/polias,
  resultante radial e condições para trabalho. Retiradas generalizações incorretas
  sobre tração, normal e polias; cálculos e hipóteses conferidos em testes nativos.
- Química — Estrutura atômica: partículas, notação, configurações, tendências e
  transições de um elétron. Corrigidos afinidade eletrônica, distratores e unidades;
  exemplos resolvidos usam dados diferentes dos exercícios.
- Espanhol — Leitura e interpretação em espanhol: leitura global, coesão e crítica;
  acepções consultadas no DLE/RAE para evitar falsas equivalências ou proibições
  absolutas de sentido. Textos de apoio são autorais e identificados.
- Biologia — Citologia: organização procariótica/eucariótica, funções celulares,
  osmose, expressão gênica, ciclo e contagem cromossômica. Substituído o desvio dos
  rascunhos para sinalização farmacológica por conteúdo adequado ao escopo escolar.
- Redação — Projeto de texto e tese: recorte, razões, evidências, progressão,
  objeções e revisão. Sem dados inventados atribuídos a instituições nem regras
  universais de número de linhas, posição da tese ou formato de parágrafo.

Os materiais exibem as referências verificadas de OpenStax e DLE/RAE quando
pertinentes; os textos são redação autoral, não transcrições desses livros.
Revisão docente permanece pendente em todas as aulas.

Validação: 595 testes da aplicação e seis do motor, lint dos arquivos alterados e
build de produção aprovados. As nove respostas reais da API conferem com os textos
integrados. A navegação pública `/cursos`, as 27 respostas e as explicações foram
conferidas em Chromium; sem exceções ou rolagem horizontal em 320/375/768/1440 px.
Os links de referência expandidos também foram verificados em 320/375/768 px.

## Inventário e checkpoint 1

| Medida | Início desta continuação | Após o lote 03 inicial |
| --- | ---: | ---: |
| Identidades curriculares nas cinco provas | 1.512 | 1.512 |
| Temas sem fonte aprofundada registrada | 1.295 | 1.292 |
| Temas editoriais ENEM com aula aprofundada | 19 | 22 |
| Temas editoriais ENEM ainda sem aula aprofundada | 877 | 874 |

A lista de estudo ENEM tem unidade diferente: inclui guias históricos e contém
22 aulas aprofundadas, 69 guias e 816 temas em desenvolvimento neste checkpoint.
Nenhum desses números é uma contagem de habilidades oficiais.

## Aulas integradas e conferência

- Português — Interpretação de textos: distinção de tema, ideia central e tese;
  inferências sustentadas, organização argumentativa, ironia e intertextualidade.
  Dados sem fonte e atribuições inventadas foram substituídos por textos autorais
  expressamente hipotéticos. As três respostas foram analisadas no contexto.
- Matemática — Porcentagem e razão: bases de incidência, divisão proporcional,
  fatores sucessivos, juros e hipóteses de modelos de mistura. Foram corrigidas
  afirmações sobre ordem dos fatores e justificativas de distratores. Os valores
  dos quatro montantes da questão avançada são recalculados pelo teste nativo.
- Literatura — Gêneros literários e recursos estilísticos: composição narrativa,
  lírica e dramática; recursos de sentido, construção e som; hibridismo e relações
  entre textos. Citações não verificadas e classificações incorretas dos rascunhos
  foram retiradas; exemplos e exercícios finais são originais.

Cada aula tem três capítulos de pelo menos 900 caracteres, método explícito,
exemplos resolvidos, erros frequentes e três questões A–D comentadas. O arquivo
do lote contém o hash do texto conferido e a análise dos gabaritos, para que uma
edição posterior exija nova conferência. Revisão docente humana continua pendente.

## Trabalho com Claude Code

O CLI instalado usa o provedor local já configurado pelo usuário; não foi alegado
uso de um modelo Anthropic ou alterada a conta do usuário. Sessões sem ferramentas
produzem os rascunhos; outras sessões analisam conceitos e respostas. O agente
principal lê, recalcula, corrige e decide a integração. Uma aceitação pelo modelo
revisor não é suficiente: foram encontrados problemas também em rascunhos que ele
havia aceitado. Esses casos ficam retidos para correção.

A fila local está separada por ID e mantém resultados para retomada. Respostas
malformadas, insuficientes ou rejeitadas não contam como cobertura. Configurações,
credenciais, rascunhos brutos e conversas locais não entram no commit. Não existe
geração automática ao estudante abrir uma aula.

## Verificação deste checkpoint

- 592 testes da aplicação e seis do motor aprovados; lint dos arquivos alterados
  e build de produção aprovados. A auditoria existente não foi enfraquecida.
- Testes comparam o índice leve do navegador com todas as fontes completas e
  percorrem seus imports para impedir inclusão dos textos no bundle do índice.
- Chromium abriu as três aulas pela navegação pública real `/cursos`, recebeu
  capítulos/exercícios da API do build de produção, respondeu às nove questões e
  mostrou explicações. Sem exceções ou rolagem horizontal em 320/375/768/1440 px.
- As publicações e retiradas do banco preservam prioridade. Sem alterações de
  schema, RLS, autenticação, histórico, `legacy/`, merge ou deploy.

O trabalho segue na fila de disciplinas. O plano e o checklist estão em
`tasks/plan.md` e `tasks/todo.md`; o encerramento exige zerar as lacunas e repetir
as verificações finais, sem converter revisão por IA em aprovação humana.

## Revisão da resolução de conteúdo

A revisão independente pelo Claude Code confirmou prioridade editorial e bloqueio
em erros de consulta, mas sugeriu remover todo fallback quando não existe linha
no banco. Essa sugestão não foi aplicada: ausência de override é diferente de
retirada, e o produto já oferece módulos offline explicitamente identificados
como introdutórios. Exigir publicação para cada ID eliminaria esse comportamento.
O teste de ausência preserva o contrato; testes separados cobrem retirada,
arquivamento, publicação inválida e falhas de leitura em ambos os IDs. Também há
cobertura para publicações válidas externas ao catálogo, sem criar vínculo
curricular. Nenhuma revisão automática substitui a conferência do contrato.
