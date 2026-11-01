# KOGNOS — Plataforma Inteligente de Aprendizagem

## 1. Objetivo do projeto

Crie uma aplicação web completa, responsiva, moderna e profissional chamada **Kognos**, uma plataforma de estudos com inteligência artificial, aprendizagem adaptativa, organização de rotina e acompanhamento de desempenho.

A referência de experiência educacional é a plataforma do Professor Pedro Assad, principalmente sua organização de conteúdos, clareza na navegação e foco na aprendizagem. Entretanto, o Kognos deve possuir identidade própria, interface original e um nível visual comparável ao de produtos SaaS premium.

**Não crie um site genérico de cursinho, uma landing page isolada ou um dashboard com funcionalidades falsas. Desenvolva a estrutura de um produto digital real, escalável e preparado para produção.**

O Kognos deve transmitir cinco atributos fundamentais:

- Inteligência
- Foco
- Progresso
- Conhecimento
- Clareza

O público inclui estudantes do Ensino Fundamental, Ensino Médio, ENEM, vestibulares, ETEC, concursos públicos, olimpíadas científicas e pessoas que desejam aprender independentemente.

---

## 2. Identidade visual

### Paleta oficial

| Token | Nome | Código HEX | Aplicação |
|---|---|---|---|
| primary-900 | Deep Navy | #101B33 | Sidebar, marca, áreas institucionais |
| primary-700 | Slate Navy | #273A61 | Elementos secundários |
| accent-600 | Intelligence Violet | #5B4DE3 | Botões principais, recursos de IA |
| accent-400 | Progress Cyan | #38CDE5 | Indicadores de progresso e destaques |
| background-light | Soft White | #F7F9FC | Fundo do tema claro |
| surface-light | Cloud Gray | #EDF1F7 | Superfícies secundárias |
| surface-dark | Graphite | #202633 | Cards em dark mode |
| background-dark | Midnight | #111722 | Fundo em dark mode |
| success | Emerald | #18B78A | Acertos, objetivos concluídos |
| warning | Amber | #F0AD4E | Revisões pendentes e alertas |
| error | Coral | #E46D75 | Erros e ações destrutivas |
| text-primary | Ink | #1D2638 | Texto principal em light mode |
| text-muted | Slate | #778398 | Informações secundárias |
| border | Mist | #E0E6EF | Divisórias e bordas |

Use a proporção visual aproximada de 75% de superfícies neutras, 20% de azul navy e 5% de acentos violeta/ciano.

Não utilize gradientes exagerados, neon excessivo, efeitos glassmorphism em todos os elementos ou cores vibrantes em excesso.

### Tipografia

- Fonte principal: Inter
- Fonte alternativa para títulos: Manrope
- Títulos com peso 600–700
- Textos com peso 400–500
- Excelente legibilidade e espaçamento
- Hierarquia tipográfica consistente
- Comprimento de linha confortável para leitura educacional

### Componentes

- Cards com border-radius de 12–16 px.
- Botões com altura entre 40–48 px.
- Sombras suaves e discretas.
- Bordas finas de baixo contraste.
- Ícones da biblioteca Lucide.
- Espaçamento baseado em sistema de 8 px.
- Transições suaves de 150–250 ms.
- Microinterações sutis e funcionais.
- Skeleton loading nas operações assíncronas.
- Estados de hover, focus, loading, disabled, success e error.

Evite aparência infantil ou gamificação exagerada.

---

## 3. Identidade da marca

Nome: **Kognos**

Slogan: **Conhecimento que evolui com você.**

Crie uma identidade visual original com logotipo tipográfico e símbolo abstrato que represente conexões neurais, conhecimento, inteligência e crescimento.

O símbolo pode combinar nós interconectados, linhas geométricas e uma estrutura abstrata que remeta ao cérebro humano.

O logotipo deve funcionar em fundo claro, fundo escuro, versão reduzida e favicon.

A estética deve parecer uma empresa de tecnologia educacional consolidada.

---

## 4. Arquitetura da interface

### Desktop

Crie um layout de aplicação SaaS com:

**Sidebar fixa à esquerda:**

- Logotipo Kognos
- Visão geral
- Meu plano de estudos
- Trilhas de aprendizagem
- Minhas disciplinas
- Simulados
- Banco de questões
- Tutor IA
- Revisões
- Calendário
- Meu desempenho
- Conquistas
- Configurações

A sidebar deve ter modo expandido e recolhido, ícones consistentes e indicação clara da página ativa.

**Header superior:**

- Busca global
- Atalho do tutor IA
- Notificações
- Sequência de estudos
- Perfil do estudante
- Alternância light/dark

### Mobile

Transforme a experiência em um aplicativo mobile-first, compatível com Safari no iPhone e navegadores Android.

Utilize navegação inferior com cinco itens principais: Início, Estudar, Plano, Tutor IA e Perfil.

Inclua menu para funcionalidades secundárias.

Não simplesmente reduza o layout desktop. Reorganize a interface para interação por toque, leitura confortável e navegação com uma mão.

Preparar suporte PWA, com manifesto, ícones próprios e instalação na tela inicial.

---

## 5. Dashboard principal

O dashboard é a página mais importante do produto.

O objetivo é fazer o estudante compreender imediatamente o que precisa estudar, seu desempenho e seus próximos passos.

### Seção de boas-vindas

Exibir uma saudação personalizada:

"Bom dia, Pedro. Pronto para evoluir hoje?"

Subtítulo dinâmico:

"Seu próximo passo está preparado. Continue de onde parou."

### Card principal: Continuar aprendendo

Exibir:

- Disciplina
- Assunto atual
- Progresso na trilha
- Tempo estimado
- Botão "Continuar estudando"

Esse elemento deve possuir maior destaque visual que os demais cards.

### Resumo de desempenho

Exibir quatro indicadores:

1. Tempo estudado na semana
2. Questões resolvidas
3. Taxa de acertos
4. Dias consecutivos estudando

Utilize cards minimalistas com ícones, números destacados e pequenas variações temporais.

### Plano de hoje

Lista de tarefas organizada por prioridade:

- Estudar determinado assunto
- Resolver questões
- Realizar revisão
- Corrigir erros

Cada tarefa deve mostrar duração prevista, disciplina, progresso e botão de início.

### Evolução do aprendizado

Gráfico discreto e interativo com desempenho ao longo da semana ou mês.

### Domínio por disciplina

Cards mostrando a evolução de Matemática, Física, Química, Biologia, História, Português e demais matérias selecionadas.

Use barras de progresso e cores coerentes com o design system.

### Próximas revisões

Exibir conteúdos que precisam ser revisados, priorizando conteúdos com mais dificuldade.

---

## 6. Onboarding inteligente

No primeiro acesso, não enviar o estudante diretamente ao dashboard.

Crie um onboarding com etapas curtas, indicador de progresso e possibilidade de voltar sem perder as respostas.

### Etapa 1 — Perfil

Perguntar:

- Como prefere ser chamado?
- Em qual etapa de ensino está?
- Qual seu principal objetivo?

Opções de objetivo:

- ENEM
- Vestibulares
- ETEC
- Provas escolares
- Concursos
- Olimpíadas científicas
- Aprendizado pessoal

Permitir selecionar múltiplas opções.

### Etapa 2 — Preferências de aprendizagem

Perguntar:

"Como você prefere aprender?"

Permitir múltiplas escolhas:

- Explicações passo a passo
- Exemplos práticos
- Resumos objetivos
- Mapas mentais
- Exercícios comentados
- Aprender por perguntas
- Explicações aprofundadas
- Recursos visuais

### Etapa 3 — Acessibilidade

Perguntar de maneira opcional e respeitosa:

"Existe alguma adaptação que pode melhorar sua experiência?"

Opções:

- Prefiro sessões curtas de estudo
- Tenho dificuldade em manter a concentração
- Gostaria de recursos úteis para TDAH
- Gostaria de recursos úteis para dislexia
- Preciso de fontes maiores
- Prefiro uma interface com menos estímulos
- Não preciso de adaptações
- Prefiro não responder

Essas preferências não devem ser tratadas como diagnóstico médico.

Para estudantes que selecionarem recursos para TDAH, oferecer:

- Modo foco
- Sessões curtas
- Uma tarefa por vez
- Menos distrações visuais
- Divisão de conteúdos em pequenos passos
- Pausas configuráveis
- Reforço positivo discreto

Para estudantes que selecionarem recursos para dislexia, oferecer:

- Ajuste de fonte
- Maior espaçamento entre linhas
- Controle de largura do texto
- Leitura por voz quando disponível
- Destaque de palavras ou trechos
- Redução de blocos longos de texto

Permitir alterar essas configurações a qualquer momento.

### Etapa 4 — Rotina

Perguntar:

- Quantos minutos deseja estudar diariamente?
- Em quais dias da semana?
- Quantas disciplinas deseja priorizar?
- Qual a data da prova?
- Quanto tempo prefere estudar antes de uma pausa?

### Etapa 5 — Diagnóstico

Oferecer avaliação diagnóstica inicial de aproximadamente 20 questões.

A dificuldade deve começar acessível e ser ajustada de acordo com as respostas.

Ao terminar, gerar um perfil inicial de aprendizado e um plano personalizado.

---

## 7. Sistema de aprendizagem

Criar trilhas de aprendizagem organizadas hierarquicamente:

Disciplina → Unidade → Assunto → Aula → Exercícios → Revisão.

Na página de disciplinas, exibir o progresso global e permitir visualizar todos os conteúdos.

Na página de aula, utilizar layout focado em aprendizagem.

### Estrutura da aula

- Título
- Objetivos de aprendizagem
- Tempo estimado
- Explicação conceitual
- Exemplos resolvidos
- Exercícios progressivos
- Resumo final
- Próxima aula sugerida

O conteúdo não deve parecer uma apostila estática. Deve permitir interação com o estudante.

Adicionar recursos:

- Marcar aula como concluída
- Fazer anotações
- Favoritar
- Solicitar outra explicação
- Perguntar ao tutor IA
- Resolver exercícios relacionados
- Retomar de onde parou

---

## 8. Tutor de inteligência artificial

Criar um módulo chamado **Kognos Tutor**.

A proposta é um professor virtual com didática excepcional, comunicação clara, repertório amplo e capacidade de adaptar explicações ao nível do estudante.

A referência pedagógica é o estilo de ensino estruturado, intuitivo, acessível e progressivo de bons professores preparatórios, incluindo a abordagem didática observada na plataforma Assad.

Não copie materiais proprietários, aulas, textos ou a identidade de um professor específico.

### Personalidade pedagógica

O tutor deve:

- Identificar o conhecimento prévio do estudante.
- Explicar conceitos dos fundamentos até aplicações avançadas.
- Usar exemplos cotidianos e analogias precisas.
- Alternar entre explicações curtas e aprofundadas.
- Apresentar exercícios progressivos.
- Corrigir erros explicando o raciocínio.
- Detectar dificuldades recorrentes.
- Adaptar a dificuldade conforme o desempenho.
- Evitar respostas excessivamente longas quando o estudante selecionar sessões objetivas.
- Incentivar raciocínio independente.

### Interface do tutor

Layout de chat premium, similar a produtos modernos de IA, mas integrado à identidade Kognos.

Recursos:

- Histórico de conversas
- Conversas por disciplina
- Renderização de fórmulas matemáticas
- Blocos de código
- Respostas estruturadas
- Questões interativas
- Botão "Explique de outra forma"
- Botão "Dê um exemplo"
- Botão "Me teste"
- Botão "Resuma"
- Botão "Aprofunde"

O tutor deve considerar objetivos, preferências pedagógicas, histórico de desempenho e assunto atual, respeitando as configurações de privacidade.

A integração com IA deve utilizar chamadas seguras no backend e variáveis de ambiente. Nunca expor chaves de API no código frontend.

---

## 9. Banco de questões e simulados

Criar um banco de questões com filtros por:

- Disciplina
- Assunto
- Nível de dificuldade
- Instituição ou banca
- Tipo de prova
- Ano
- Questões erradas anteriormente

O estudante deve poder resolver questões individualmente ou iniciar simulados.

### Interface de resolução

- Enunciado organizado
- Alternativas legíveis
- Indicador de progresso
- Botão de confirmar resposta
- Correção comentada
- Explicação pelo tutor IA
- Opção de salvar para revisão

Não utilizar questões reais protegidas por direitos autorais sem autorização ou fonte licenciada.

### Resultado do simulado

Apresentar:

- Percentual de acertos
- Tempo utilizado
- Desempenho por disciplina
- Assuntos com maior dificuldade
- Revisões recomendadas
- Evolução comparada com simulados anteriores

---

## 10. Planejamento adaptativo

Criar uma página de planejamento com calendário semanal.

O estudante deve visualizar:

- Atividades diárias
- Disciplinas
- Tempo previsto
- Atividades concluídas
- Revisões pendentes
- Próximos simulados

O planejamento deve adaptar-se a mudanças na rotina.

Se uma atividade não for realizada, permitir reorganizá-la sem destruir o restante do calendário.

Priorizar automaticamente conteúdos com maior necessidade de revisão e proximidade das provas.

---

## 11. Gamificação sofisticada

A gamificação deve motivar sem infantilizar.

Implementar:

- Sequência de dias de estudo
- Conquistas
- Metas semanais
- Níveis de evolução
- Indicadores de domínio
- Marcos de aprendizado

Criar selos minimalistas com iconografia geométrica.

Não utilizar mascotes infantis, moedas exageradas ou animações constantes.

As recompensas devem refletir progresso verdadeiro, não apenas quantidade de cliques.

---

## 12. Mapa de domínio

Criar uma visualização interativa do conhecimento.

Cada disciplina possui assuntos conectados por pré-requisitos.

Estados possíveis:

- Não iniciado
- Em aprendizagem
- Precisa de revisão
- Dominado

Representar visualmente por nós, conexões e indicadores de progresso.

O nível de domínio deve considerar exercícios, revisões e estabilidade do desempenho, não simplesmente a conclusão de aulas.

---

## 13. Tecnologias e qualidade

Utilizar:

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
- Supabase, quando disponível, para autenticação e persistência
- Recharts para gráficos
- Componentização reutilizável

Preparar uma arquitetura com separação entre componentes visuais, regras de negócio, serviços, autenticação, armazenamento e integração com IA.

Implementar:

- Rotas protegidas
- Login e cadastro
- Recuperação de senha
- Persistência de progresso
- Preferências de usuário
- Validação de formulários
- Tratamento de erros
- Estados de carregamento
- Layout responsivo
- Navegação por teclado
- Contraste acessível
- Design tokens centralizados
- Organização de código para manutenção

Aplicar controle de acesso aos dados por usuário no backend.

Nunca armazenar credenciais sensíveis diretamente no navegador.

---

## 14. Telas de autenticação

Criar telas de login e cadastro minimalistas.

No desktop, utilizar composição em duas colunas: uma área para formulário e outra para elemento visual abstrato que represente conhecimento e evolução.

No mobile, priorizar o formulário.

Evitar imagens genéricas de estudantes sorrindo, livros empilhados e salas de aula tradicionais.

Utilizar gráficos abstratos originais, formas geométricas e conexões neurais discretas.

---

## 15. Diretrizes de acessibilidade

Seguir WCAG 2.2 AA como objetivo de implementação.

Respeitar preferências de movimento reduzido, oferecer foco visível para teclado e manter contraste adequado em ambos os temas.

O modo foco deve reduzir elementos periféricos e deixar a atividade atual como principal área de atenção.

As adaptações de leitura e atenção devem ser personalizáveis e reversíveis.

---

## 16. Responsividade

Desenvolver para:

- Celulares compactos
- iPhone 14 e dispositivos semelhantes
- Tablets
- Notebooks
- Monitores desktop

Nenhum componente pode provocar rolagem horizontal indevida.

Tabelas extensas devem receber uma apresentação alternativa no mobile.

Cards, gráficos, menus e formulários devem ser adaptados à largura disponível.

---

## 17. Critérios de aceitação

Antes de considerar a versão concluída, verificar:

1. Login e cadastro funcionam.
2. Onboarding salva as preferências.
3. Dashboard apresenta informações persistidas do usuário.
4. Navegação funciona em desktop e mobile.
5. Tema claro e escuro funcionam corretamente.
6. Questões demonstrativas podem ser respondidas e corrigidas.
7. Progresso é atualizado após atividades concluídas.
8. Calendário permite visualizar e administrar atividades.
9. Preferências de acessibilidade afetam a experiência.
10. Interface não contém botões decorativos sem ação.
11. Tutor IA apresenta estados corretos de integração, carregamento e erro.
12. Não há dados pessoais de demonstração vazando entre contas.

Quando uma funcionalidade depender de serviço externo não configurado, criar sua estrutura real, apresentar claramente o estado de configuração e não simular respostas como se viessem de uma API funcional.

---

## 18. Execução

Comece construindo a base funcional do aplicativo, incluindo:

- Design system
- Identidade visual
- Sidebar e navegação
- Autenticação
- Onboarding
- Dashboard
- Página de disciplinas
- Interface inicial do tutor IA
- Banco de questões demonstrativo
- Estrutura de dados e persistência

Organize o desenvolvimento em módulos e mantenha consistência entre todas as páginas.

Tome decisões técnicas razoáveis sem interromper o desenvolvimento com perguntas desnecessárias.

**Resultado esperado:** um aplicativo educacional premium chamado Kognos, com personalidade visual própria, excelente experiência mobile, aprendizagem adaptativa e uma base técnica que possa evoluir até se tornar uma plataforma comercial completa.
