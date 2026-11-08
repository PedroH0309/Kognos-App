# Kognos — navegação animada (mobile e aulas)

**Status:** proposta de interface em PR de rascunho, não publicada.

## Objetivo

Aplicar o modelo de navegação com indicador móvel enviado como referência sem substituir o roteamento nem o estado de aprendizagem já implementados. A biblioteca `motion` já está presente no projeto e foi reutilizada em vez de instalar `@animate-ui/react` e introduzir Tailwind ou novos componentes de roteamento.

## Barra inferior do celular

A antiga navegação de cinco destinos foi substituída visualmente por cápsula translúcida com marcador deslizante, ícones e rótulos. Mantêm-se os destinos **Início, Estudar, Questões, Calendário e Perfil** e as chamadas existentes de `navigate`. Rolar para baixo além de 130 px minimiza a barra (ícones permanecem clicáveis); rolar para cima revela os rótulos. O evento é observado tanto na janela quanto em `.app-main` e ambos os listeners são removidos ao desmontar.

Há `aria-current="page"`, nomes acessíveis para os botões, foco visível, altura de toque, suporte a safe-area e desativação das transições sob `prefers-reduced-motion` ou adaptação `reduced_distractions` do perfil.

## Dashboard das aulas

A navegação de **Aula em texto, Atividades, Explicações, Materiais e Evolução** ganhou um destaque que desliza entre itens usando um `layoutId` exclusivo por instância. A aba selecionada ainda é `readerTab` e as telas de exercícios permanecem montadas: nenhuma tentativa local de exercício é apagada por troca de aba.

Os atalhos pedagógicos **01 Objetivos** até **10 Consolidação** ganharam destaque móvel próprio. Continuam sendo âncoras para as seções reais, sem transformá-las em abas que ocultariam o conteúdo. O destaque acompanha cliques, mudanças de fragmento URL e seções visíveis por IntersectionObserver, com fallback quando essa API não existe.

## Segurança e qualidade

Não há alteração de schema, migrations, contas, IDs curriculares, dados de usuários, serviços de IA ou secrets. Não há valores fictícios nos painéis. A verificação inclui testes de design, unidade, segurança com dois usuários, TypeScript e build na CI.

**Nota:** a aparência acompanha a referência visual e o comportamento de `@animate-ui/react`; não utiliza internamente esse pacote porque os componentes atuais do Kognos não são baseados em Tailwind.
