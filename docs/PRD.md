# PRD — FOCO | Plataforma inteligente de aprendizagem

**Versão:** 1.0 · **Estado:** especificação-base aprovada para implementação inicial · **Idioma:** pt-BR

## 1. Visão

O FOCO é uma plataforma educacional que identifica necessidades de aprendizagem, organiza um percurso realista, oferece conteúdo e prática, mede evidências de domínio e adapta as próximas atividades. A experiência deve ser gamificada sem transformar descanso em fracasso nem confundir engajamento com aprendizagem.

**Proposta de valor:** o estudante sabe o que estudar agora, entende por que aquilo foi recomendado, aprende com explicações graduais e acompanha a evolução por assunto e habilidade.

## 2. Público e modalidades

A plataforma é multiusuário e suporta estudantes do ensino fundamental e médio e candidatos a processos seletivos. Modalidades iniciais configuráveis:

- ENEM;
- vestibulares;
- ensino técnico (ETEC, Institutos Federais e outros);
- provas escolares;
- concursos;
- olimpíadas científicas;
- trilhas personalizadas criadas pelo estudante ou por um administrador.

Uma modalidade não é um conjunto rígido de páginas. É um perfil de avaliação configurável com matriz de conteúdos, áreas, habilidades, formato de questão, duração, quantidade de itens, regra de pontuação e calendário. O mesmo conteúdo pode servir a várias modalidades.

## 3. Perfis e permissões

- **Estudante:** gerencia seu perfil, metas, tentativas, plano, revisões e preferências.
- **Editor de conteúdo:** cria e revisa disciplinas, aulas, questões, fontes e simulados; não acessa dados privados de estudantes por padrão.
- **Administrador:** gerencia usuários, papéis, catálogo, publicação e configurações operacionais.
- **Responsável:** relacionamento e controles específicos para contas de menores ficam para uma etapa jurídica e funcional própria; não simular consentimento com um simples checkbox.

Papéis são atribuídos no servidor e protegidos por RLS. Um usuário nunca pode promover a si mesmo.

## 4. Jornada principal do estudante

1. Conhece o produto, consulta a política de privacidade e cria uma conta.
2. Faz onboarding: etapa escolar, modalidade(s), prova-alvo e data quando houver, disponibilidade semanal, tempo por sessão, matérias prioritárias e preferências de acessibilidade.
3. Faz diagnóstico inicial. O sistema explica que a amostra é uma primeira referência, não uma medida completa de capacidade.
4. Recebe um plano com sessões curtas e justificativas legíveis.
5. Estuda por um ciclo: objetivo → explicação em etapas → exemplo resolvido → exercício guiado → prática independente → checagem.
6. Faz exercícios/simulados; cada tentativa é registrada e alimenta a análise de domínio.
7. Revê erros e conteúdos prestes a serem esquecidos.
8. Recebe recomendações atualizadas, podendo editar o plano.

## 5. Módulos funcionais

### 5.1 Dashboard

- resumo diário, metas semanais, tarefas de hoje e revisões pendentes;
- evolução recente, aproveitamento por área/assunto e tempo de estudo;
- próxima melhor ação, com justificativa;
- sequência de estudo opcional e não punitiva;
- estados vazios úteis e explicação sobre dados insuficientes.

### 5.2 Planejamento adaptativo

- onboarding de disponibilidade e preferências;
- planejamento diário/semanal por sessões;
- priorização de lacunas, relevância para a prova, pré-requisitos e revisão vencida;
- respeito a dias indisponíveis, duração de sessão e pausas;
- editar, adiar, concluir, excluir e regenerar sem duplicar tarefas;
- explicar por que cada sessão foi sugerida;
- não abandonar tópicos sem evidência suficiente;
- exportação `.ics` inicialmente; sincronização Google/Apple exige OAuth e consentimento posterior.

### 5.3 Catálogo curricular e aprendizagem

- taxonomia: etapa → área → disciplina → assunto → habilidade/objetivo;
- pré-requisitos entre objetivos;
- aulas em blocos: texto, imagem, vídeo incorporado autorizado, exemplo, resumo e prática;
- conteúdo versionado e revisado por editor;
- trilhas por modalidade e trilhas individuais.

### 5.4 Banco de questões

- busca por enunciado, disciplina, assunto, habilidade, dificuldade, prova, ano e tipo;
- questão de múltipla escolha inicialmente; depois, resposta numérica, aberta, associação e interpretação de mídia;
- alternativas, gabarito protegido, resolução, tags e competências;
- estados: rascunho, em revisão, publicado, arquivado;
- procedência: autoral, domínio público, licenciada, enviada pelo usuário ou referência externa;
- guardar fonte, URL, titular/licença e status de verificação;
- importação/exportação validada; registrar erros sem inserir dados parcialmente inválidos.

**Regra de integridade:** conteúdo autoral/inspirado não pode ser rotulado como oficial. Questões de terceiros só entram mediante verificação de origem e permissão de uso. Não copiar o banco, textos, resoluções ou identidade visual da Assaad ou de qualquer outra plataforma.

### 5.5 Diagnósticos e simulados

- diagnóstico por área/assunto;
- simulados por modalidade, matéria ou conteúdo;
- prova completa com cronômetro, navegação, marcação para revisão e salvamento de progresso;
- geração baseada em matriz/blueprint e pesos configurados;
- correção após submissão, com resolução e análise por habilidade;
- histórico de tentativas e comparativo longitudinal;
- estimativa de nota sempre identificada como estimativa e com metodologia/limitações.

**TRI/ENEM:** não anunciar nota TRI como oficial sem parâmetros calibrados e metodologia válida. Sem esses parâmetros, mostrar acertos, percentual e faixa orientativa claramente identificada.

### 5.6 Revisão e flashcards

- fila baseada em vencimento, dificuldade e histórico;
- revisão de questão errada, conceito ou flashcard;
- intervalos ajustados por resposta do estudante;
- permitir pausar e reprogramar; não apagar histórico;
- registrar retenção como estimativa operacional, não como medição clínica.

### 5.7 Tutor e inteligência artificial

A IA deve atuar nos módulos, não só numa página de chat:

- tutor contextual por disciplina, assunto e nível;
- explicação alternativa e exemplos progressivos;
- análise de erros e identificação de pré-requisitos possivelmente ausentes;
- geração assistida de questões/flashcards para revisão editorial;
- sugestão de plano a partir do motor determinístico;
- feedback de redação segundo rubrica configurada;
- resumo de desempenho em linguagem simples.

**Regras:** chamadas somente no servidor; chave secreta fora do browser; limites por usuário/plano; timeout, retentativas controladas e fallback; registrar consumo sem armazenar dados desnecessários; conteúdo gerado para o banco passa por revisão humana; respostas devem informar incerteza e, quando usar RAG, citar os materiais recuperados.

O motor de planejamento, gabarito, pontuação e XP é determinístico. A IA não altera respostas, notas, conquistas ou histórico por conta própria.

### 5.8 Redação

- propostas e textos motivadores autorizados;
- editor e histórico de versões;
- rubrica ENEM com cinco competências quando a modalidade for ENEM;
- feedback separado por competência, exemplos de melhoria e evidência textual;
- nota da IA identificada como preliminar, não oficial;
- opção de revisão humana futura.

### 5.9 Desempenho e relatórios

- acertos por disciplina, assunto, habilidade e dificuldade;
- evolução temporal, tempo, tentativas e revisões;
- cobertura do plano e taxa de conclusão;
- exportação CSV/JSON e exportação dos dados pessoais;
- mostrar amostra e confiança; evitar inferências com poucas respostas.

### 5.10 Gamificação saudável

- XP por atividades de aprendizagem válidas;
- níveis, missões, medalhas e marcos;
- limites contra repetição artificial de atividade;
- sem retirar XP por errar ou descansar;
- sequência pode ser congelada/pausada e não deve ser o principal indicador;
- ranking público desligado por padrão; qualquer ranking futuro exige adesão explícita e análise específica para menores.

### 5.11 Administração de conteúdo

- CRUD de disciplinas, assuntos, objetivos, aulas, provas, questões e simulados;
- rascunho → revisão → publicação;
- versionamento, fonte, licença, autor e histórico de alteração;
- painel de qualidade e itens reportados;
- relatórios operacionais sem acesso amplo a conteúdo privado de estudantes.

## 6. Personalização adaptativa

O estado de domínio será calculado por habilidade usando evidências: acerto/erro, dificuldade, recência, número de tentativas, tempo, consistência e pré-requisitos. A implementação inicial usa regras determinísticas e testáveis; qualquer indicador terá amostra e nível de confiança associados.

O plano considera, no mínimo:

- prioridade e data da prova;
- importância do tópico no blueprint da modalidade;
- domínio estimado e confiança da estimativa;
- revisão vencida e risco de esquecimento;
- pré-requisitos;
- disponibilidade e duração preferida;
- alternância de matérias e pausas.

A recomendação deve incluir uma explicação simples: “priorizado porque você errou 3 de 5 itens recentes neste objetivo e ele é pré-requisito para o próximo tópico”.

## 7. Requisitos não funcionais

- responsividade desde 360 px;
- acessibilidade com meta WCAG 2.2 AA, navegação por teclado, foco visível, semântica e contraste;
- desempenho: páginas principais rápidas, consultas paginadas e índices;
- segurança: RLS, validação server-side, rate limits, logs sem segredos e backup;
- resiliência: indisponibilidade de IA não bloqueia estudo, simulado ou revisão;
- observabilidade: logs estruturados, métricas de erro/latência/consumo;
- portabilidade: exportar dados do estudante e evitar dependência excessiva de um provedor de IA.

## 8. Privacidade, menores e segurança

O público inclui menores. O produto deve minimizar coleta, explicar uso de dados, oferecer exportação/exclusão, restringir retenção de conversas de IA e evitar coleta de dados sensíveis sem necessidade. O melhor interesse de crianças e adolescentes precisa orientar o tratamento; fluxos específicos de consentimento/responsabilidade devem ser definidos com assessoria jurídica antes do lançamento público. Não coletar diagnóstico ou inferir TDAH, dislexia ou outra condição a partir do uso.

## 9. MVP público (beta fechado)

Para liberar beta, o caminho crítico é: autenticação → onboarding → catálogo mínimo revisado → banco de questões → diagnóstico/simulado → registro de tentativa → plano e revisão → dashboard → tutor com limites → administração de conteúdo → exportação/exclusão e validação de RLS.

Redação com correção completa, rankings, aulas ao vivo, rede social e sincronização bidirecional de calendário ficam fora do primeiro beta.

## 10. Critérios de aceite gerais

1. Dois usuários não conseguem consultar, alterar ou inferir os dados privados um do outro.
2. Gabarito não pode ser obtido antes da submissão por endpoints ou chamadas diretas ao banco.
3. Um simulado persiste progresso, corrige de forma determinística e apresenta resolução.
4. Questões sem procedência verificada não são exibidas como oficiais.
5. O plano respeita disponibilidade e não cria tarefas duplicadas ao recalcular.
6. O tutor funciona com contexto aprovado, limites, logs de consumo e fallback quando a IA falha.
7. O aluno consegue exportar e solicitar exclusão dos próprios dados.
8. Nenhuma métrica de domínio é apresentada sem amostra/confiança.
9. Gamificação não remove pontos por erro ou descanso.
10. O beta só é publicado após testes de segurança, privacidade e acessibilidade.
