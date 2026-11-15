# Expansão integral do catálogo — em execução

Solicitação de 14/11/2026: continuar a autoria com o Claude Code, pelos mesmos
critérios, até completar as aulas. Este documento registra checkpoints; não
declara conclusão do catálogo, homologação docente ou publicação em produção.

## Estado atual — checkpoint 11

O lote 06 contém nove aulas. Foram acrescentadas Inglês — Gêneros e textos
multimodais; Espanhol — Diversidade cultural hispano-americana; Física — Grandezas,
unidades e análise dimensional; Química — Química ambiental; Biologia — Bioquímica
celular e biomoléculas. São 57 aulas novas nesta etapa, com revisão docente humana
pendente. Restam 1.238 lacunas entre 1.512 identidades. ENEM editorial: 73 temas
aprofundados e 823 lacunas; lista de estudo: 73 aprofundadas, 50 guias e 784 temas
em desenvolvimento. Essas contagens não certificam habilidades oficiais.

- Inglês: descrições multimodais autossuficientes, sem imagens ausentes ou estudos
  médicos fabricados. Testes conferem 18/30, crescimento de 40 para 44 e efeito de
  um eixo truncado, sem inferir intenção a partir da apresentação.
- Espanhol: corrigidas afirmações sobre ceceo, distribuição regional e exemplos
  quéchuas inventados. A diversidade não é reduzida a um traço de cada país;
  seseo, voseo e sentidos de guagua são contextualizados com referências da RAE.
- Física: unidades, coerência dimensional, conversões de área, pressão e Reynolds
  são recalculados; consistência dimensional não prova fórmula nem regime de fluxo.
- Química: separados OD, DBO e DQO, mecanismos atmosféricos e balanço de carga.
  Neutralização e remoção são calculadas sem diagnosticar origem ou toxicidade
  por um indicador isolado nem equiparar remoção a destruição.
- Biologia: corrigidas universalizações sobre carboidratos, lipídios, proteínas,
  Km e ATP. Modelo cinético e acoplamento energético têm hipóteses explícitas e
  recálculo nativo; retiradas extrapolações clínicas e rendimento fixo de 38 ATP.

Verificação: 629 testes da aplicação e seis do motor, lint dos arquivos alterados
e build aprovados. Chromium comparou a API das 57 aulas, abriu as cinco novas,
respondeu às 15 questões e conferiu explicações e referências expandidas em
320/375/768/1440 px, sem exceções ou rolagem horizontal. A CI do checkpoint 10
passou (run 43715069408). Sem publicação no banco, merge, deploy ou mudanças de
schema/RLS. A execução segue nos temas restantes; História está corrigida e
aceita em arquivos privados, aguardando integração no próximo checkpoint.

## Histórico — checkpoint 10

O lote 06 começou com Matemática — Geometria e medidas; Português — Leitura,
inferência e interpretação textual; Literatura — Barroco e Arcadismo; Redação —
Coesão, coerência e progressão. Com os três lotes anteriores, são 52 aulas novas
nesta etapa, com autoria assistida e revisão docente humana pendente.

Restam 1.243 lacunas entre 1.512 identidades. ENEM editorial: 68 temas aprofundados
e 828 lacunas. Lista de estudo ENEM: 68 aprofundadas, 50 guias e 789 temas em
desenvolvimento. Contagens editoriais não certificam habilidades oficiais.

- Geometria: corrigidos lados incompatíveis com altura, orientação de rotações e
  origens falsas de distratores. O cone parcial tem vértice para baixo e raio
  variável, com capacidade conferida. O teste recalcula caminho com cantos, nível
  da água por semelhança e transformações em ordens diferentes.
- Português: retiradas atribuições fictícias a instituições reais, inferências
  necessariamente dedutivas, ironia identificada apenas por aspas e confusão entre
  voz citada e autor. Exemplos incluem pressuposição, implicatura cancelável e
  relação explícita entre textos, sem regra universal de prova.
- Literatura: retirados versos falsamente atribuídos, academia inventada e datas
  indevidas; Barroco não é explicado apenas por mineração. Pastoril não comprova
  biografia ou conspiração, e traços comuns não são exclusivos de uma escola.
- Redação: corrigida questão em que pronome pessoal e demonstrativo eram ambos
  válidos. Referência, coerência e progressão são ensinadas com reescritas sem
  ordem universal de tese/conclusão ou dados fabricados para sustentar argumentos.

Verificação: 625 testes da aplicação e seis do motor aprovados; lint alterado e
build de produção aprovados. Chromium comparou a API das 52 aulas, abriu as quatro
novas, respondeu às 12 questões e conferiu explicações e referências expandidas
em 320/375/768/1440 px, sem exceções ou rolagem horizontal. A CI do checkpoint 9
passou (run 43713256507). Sem merge, deploy, alteração de schema/RLS ou publicação
no banco. O trabalho continua nos próximos temas do lote 06.

## Histórico — checkpoint 9

O lote 05 está completo com 16 aulas, uma por disciplina. Foram acrescentadas
Geografia — Urbanização e globalização; Filosofia — Filosofia medieval e
modernidade; Sociologia — Cultura, identidade e diversidade; Arte — Arte brasileira
e modernismo; Educação Física — Atividade física e qualidade de vida; Ciências —
Átomos e tabela periódica introdutória. Os lotes 03/04/05 somam 48 aulas novas
nesta etapa, com revisão pedagógica humana pendente.

Restam 1.247 lacunas entre 1.512 identidades. O recorte editorial ENEM tem 64 temas
aprofundados e 832 lacunas; a lista de estudo ENEM contém 64 aulas aprofundadas,
50 guias introdutórios e 793 temas em desenvolvimento. As unidades editoriais
dessas listas são distintas; não representam certificação de habilidades oficiais.

- Geografia distingue crescimento absoluto e proporção urbana, centralidade e
  população, continuidade física e limites administrativos, segurança e acesso.
- Filosofia inclui tradições medievais plurais, diferenças entre modos de conhecer,
  condições kantianas e limites da obediência em Hobbes; sem cartas ou citações
  inventadas, nem doutrina uniforme atribuída a períodos inteiros.
- Sociologia diferencia cultura aprendida, identidade, etnocentrismo, relativização
  e direitos, sem presumir experiências individuais apenas pela identidade.
- Arte corrige participação de Tarsila, revista Verde em Cataguases e cronologia
  de obras; questões têm descrições autossuficientes, sem pedir imagens ausentes.
- Educação Física remove diagnóstico de sobrecarga por limiar inventado e inferência
  causal de estudo transversal. Diretrizes adultas da OMS de 2020 são contextualizadas
  por componente; não certificam saúde ou rotina completa pelo total de minutos.
- Ciências distingue número de massa e massa média, íons e isótopos, e tendências
  periódicas com definições compatíveis; não impõe octeto ou camadas a todo caso.

Verificação: 624 testes da aplicação e seis do motor aprovados, lint alterado e
build de produção aprovados. Novos testes recalculam proporção urbana, minutos
semanais, neutralidade e média isotópica. Chromium comparou a API das 48 aulas e
abriu as seis novas, respondeu às 18 questões e conferiu explicações e referências
expandidas em 320/375/768/1440 px, sem exceções ou rolagem horizontal. Filosofia
exibiu 12 referências e Arte 11. A CI do checkpoint 8 passou (run 43711575221).
Sem merge, deploy, alteração de schema/RLS ou publicação no banco. A autoria
continua nos próximos temas; o catálogo ainda não está completo.

## Histórico — checkpoint 8

Retomada autorizada em 15/11/2026. O lote 05 chegou a dez aulas com Inglês —
Vocabulário contextual e cognatos; Espanhol — Conectivos, pronomes e estruturas
verbais; Física — Eletricidade cotidiana; Química — Soluções e concentração;
Biologia — Ecologia e impactos ambientais; História — Cidadania e direitos.
São 42 aulas novas nos lotes 03/04/05, com revisão docente humana pendente.

Restam 1.253 lacunas entre 1.512 identidades. O recorte editorial ENEM contém
59 temas aprofundados e 837 lacunas; a lista de estudo ENEM contém 59 aulas
aprofundadas, 52 guias introdutórios e 796 temas em desenvolvimento.

- Inglês: cognatos como hipóteses de leitura, falsos amigos e polissemia; sem
  equivalências universais para realize/resume. Exemplos autorais contextualizados.
- Espanhol: corrigidas alternâncias fonológicas y/e e o/u, combinação de clíticos,
  relativos, condições verbais e haber existencial. Críticas que inventavam
  exigência de tonicidade foram confrontadas com o DPD da RAE e rejeitadas.
- Física: separados fator de potência, rendimento e energia de entrada; retiradas
  regras de instalação e tarifas inventadas. Testes recalculam série, corrente
  eficaz, energia ativa e comparação do mesmo serviço útil sem perdas duplicadas.
- Química: diferenciadas bases de concentração, molaridade analítica e partículas;
  conservação e volume final explícitos em diluição e mistura. Testes recalculam
  massa/volume, NaCl e mistura com adição final de água.
- Biologia: retirados números sem fonte sobre uma bacia real e alegações legais
  inadequadas. Recomposto escopo de populações, relações, teias, energia, ciclos e
  impactos. O teste aplica as duas eficiências tróficas informadas, sem impor 10%.
- História: corrigidos voto analfabeto em 1881/1985, eleições diretas sob a ordem
  de 1946 e distinção entre votar e candidatar-se. Eliminadas decisões judiciais
  inventadas e previsões automáticas de resultado jurídico.

Verificação: 621 testes da aplicação e seis do motor aprovados, incluindo os quatro
testes de integridade entre provas incorporados da branch remota. Lint dos arquivos
alterados e build de produção aprovados. Chromium comparou os payloads das 42
aulas, abriu as seis novas e respondeu às 18 questões, conferindo explicações e
referências expandidas em 320/375/768/1440 px, sem exceções ou rolagem horizontal.
Espanhol e História exibiram 12 referências cada, dentro do contrato de publicação.
A CI do checkpoint 7 passou (run 43662941105). Sem merge, deploy, publicação no
banco ou alteração de schema/RLS. A fila e a conferência das aulas seguintes
continuam; este checkpoint não conclui o catálogo.

## Histórico — checkpoint 7

O lote 05 começou com Matemática — Probabilidade e estatística; Português —
Argumentação e coesão; Literatura — Classicismo e Quinhentismo; Redação —
Argumentos, repertório e evidências. São 36 aulas novas nos lotes 03/04/05 desta
etapa, todas com revisão pedagógica humana pendente.

Restam 1.259 lacunas entre 1.512 identidades. O recorte editorial ENEM tem 53 temas
aprofundados e 843 lacunas. A lista de estudo ENEM tem 53 aulas aprofundadas,
54 guias introdutórios e 800 temas em desenvolvimento. O catálogo completo ainda
não está concluído.

- Matemática: incluídas estatística descritiva efetivamente explicada, média por
  frequências, mediana, dispersão, contagem, condicionamento e hipóteses binomiais.
  Removidos cálculos falsos de distratores e aproximações normais sem suporte.
  O teste enumera retiradas e confere bases de Bayes, média e mediana.
- Português: tese pode ser formulada na conclusão; removidas ordem argumentativa
  universal e falsas pesquisas. Retomadas, progressão, concessão e alcance das
  inferências são ensinados com textos autorais e questões sem dupla resposta.
- Literatura: separados Classicismo português e escrita quinhentista ligada à
  colonização. Removidas citações e versos falsamente atribuídos a Anchieta e
  sinalefas impossíveis; incluídas lírica e épica camonianas, informação, catequese
  e análise do olhar colonial, sem apagar expressões indígenas.
- Redação: retirados dados inventados atribuídos a instituições e referências
  jurídicas incorretas. Seleção, atribuição e mediação do repertório distinguem
  ficção, evidência, interpretação e demonstração empírica. O teste confere taxas
  de 40% e 30%, diferença em pontos percentuais e crescimento absoluto dos casos.

A conferência principal corrigiu também erros do próprio revisor: leitura do
distrator da média e confusão entre acesso público e domínio público. Críticas
originais foram preservadas; as referências mantêm seus direitos e licenças.
As aulas não copiam os exemplos das fontes.

Verificação: 614 testes da aplicação e seis do motor aprovados, lint dos arquivos
alterados e build de produção aprovados. Chromium comparou as respostas da API
das 36 aulas, abriu as quatro novas e respondeu às 12 questões e explicações,
sem exceções ou rolagem horizontal em 320/375/768/1440 px. A CI do checkpoint 6
passou (run 43661331904). Sem merge, deploy, publicação no banco ou alteração de
schema/RLS.

## Histórico — checkpoint 6

O lote 04 chegou a 16 aulas, uma por disciplina. Foram acrescentadas História —
Industrialização e trabalho; Geografia — Clima e ambiente; Filosofia — Filosofia
antiga e ética clássica; Sociologia — Durkheim, Marx e Weber; Arte — História da
arte e patrimônio cultural; Educação Física — Esporte, jogos e cultura corporal;
Ciências — Mudanças de estado e transformações. Com o lote 03, são 32 aulas nesta
etapa, com revisão pedagógica humana pendente.

Restam 1.263 lacunas entre 1.512 identidades. O recorte editorial ENEM tem 49 temas
aprofundados e 847 lacunas; a lista de estudo ENEM contém 49 aulas aprofundadas,
55 guias e 803 temas em desenvolvimento. As contagens representam unidades
editoriais diferentes, sem certificar habilidades oficiais ou cobertura completa.

Correções principais deste checkpoint:

- História: retiradas substituição instantânea do artesanato, invenção do salário
  na fábrica e cronologia linear da resistência. Distintos alcance e fiscalização
  das leis, relações escravistas nas cadeias e limites dos modelos produtivos.
- Geografia: reescritos critérios climáticos misturados, sistemas confundidos e
  projeções numéricas sem dados suficientes. Diferenciadas evapotranspiração real,
  potencial e de referência, volume de chuva e frequência de dias, mitigação e
  adaptação. Sem multiplicadores universais inventados para projeções.
- Filosofia: retirada digressão medieval; corrigida atribuição da temperança a
  uma parte isolada da alma, explicitados limites do meio-termo e diferenças entre
  critérios estoicos, epicuristas e céticos, sem falsas citações antigas.
- Sociologia: eliminada oposição entre compreensão e causalidade em Weber;
  diferenciados regulação e integração, força de trabalho e trabalho, valor novo,
  mais-valia e bases das taxas. Sem conclusões automáticas sobre plataformas.
- Arte: corrigidas cronologia da Bienal, listas de participantes e registros
  patrimoniais inventados. Panorama de linguagens e contextos, com preservação
  material e salvaguarda imaterial, sem reduzir patrimônio a preço ou antiguidade.
- Educação Física: retirados dados falsamente atribuídos ao IBGE, origens e
  consensos de peteca sem comprovação e conteúdo centrado em prova docente.
  Exemplos variados de tática e publicidade, inclusão por opções funcionais e
  limites das inferências sobre amostras de cobertura.
- Ciências: explicitadas condições das transições de fase e exceções de misturas;
  incluídas transformações físicas e químicas, evidências e conservação de massa.
  Reversibilidade e bolhas não são tratadas como provas universais de reação.

Verificação: 612 testes da aplicação e seis do motor aprovados, lint dos arquivos
alterados e build de produção aprovados. Os novos testes recalculam amplitude,
parcela da chuva, mais-valia e taxa, energia de fusão e saída de massa. Chromium
comparou as respostas da API das 32 aulas, abriu as sete novas pela navegação
pública e respondeu às 21 questões, conferindo explicações e ausência de rolagem
horizontal em 320/375/768/1440 px. As 12 referências de Arte foram expandidas e
conferidas em 320/375/768 px. A CI do checkpoint 5 passou (run 43659010985).
Sem merge, deploy, alteração de schema ou publicação no banco.

## Histórico — checkpoint 5

O lote 04 chegou a nove aulas. Além das quatro anteriores, foram integradas
Literatura — Trovadorismo e Humanismo; Espanhol — Cognatos, falsos cognatos e
contexto; Física — Trabalho e energia; Química — Ligações químicas; Biologia —
Genética e hereditariedade. Com o lote 03, são 25 aulas nesta etapa, todas com
revisão pedagógica humana pendente.

Restam 1.270 lacunas entre 1.512 identidades. O recorte editorial ENEM tem 43 temas
aprofundados e 853 lacunas; a lista de estudo ENEM contém 43 aulas aprofundadas,
58 guias e 806 temas em desenvolvimento. A auditoria dos módulos já existentes
para os 1.270 temas pendentes não encontrou candidatos que passassem pelo contrato
comum de conteúdo completo. Não foram promovidos guias a aulas por rótulo.

Correções deste checkpoint:

- Literatura: retiradas atribuições e citações falsas, mestria definida como
  ausência de refrão, distinção entre voz e autoria, e foco em poesia palaciana,
  crônica e teatro do Humanismo, com fontes verificadas de NOVA, RTP e DGE.
- Espanhol: eliminadas falsas regras de formação e questões com duas respostas
  válidas; acepções, polissemia e gênero conferidos no DLE, com oito verbetes nos
  materiais. Sem equivalências universais inventadas.
- Física: explicitadas massa constante, referência de potencial e condições de
  trabalho da normal. A questão avançada combina mola com atrito e preparação
  anterior com potência de entrada e rendimento, sem impor duração incompatível
  à compressão. O teste recalcula os resultados e os distratores.
- Química: retirados limiares universais de eletronegatividade, contagens falsas
  e alternativas duplicadas em correção. Modelos, estrutura, mobilidade, Lewis,
  geometria e interações são relacionados às condições observadas.
- Biologia: segregação, dominância, genealogias, condicionamento, expressão e
  recombinação com hipóteses explícitas. O teste calcula expectativa, 2/3
  condicionado, mapa de 14/18 cM e diferença entre frequência externa e soma dos
  intervalos, sem interpretar mapa como distância física ou diagnóstico.

Verificação: 609 testes da aplicação e seis do motor, lint dos arquivos alterados
e build de produção aprovados. Chromium comparou a API das 25 aulas aos textos,
abriu as cinco novas, respondeu às 15 questões e mostrou explicações, sem exceções
ou rolagem horizontal em 320/375/768/1440 px. As oito referências do DLE expandidas
também foram conferidas em 320/375/768 px. A CI do checkpoint 4 passou; o novo
commit ainda deve passar pela CI. Sem merge, deploy ou publicação no banco.

## Histórico — checkpoint 4

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
