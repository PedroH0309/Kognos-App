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

## Refinamento conforme as novas referências visuais

O usuário enviou uma referência **mobile** com dock escuro integral e cinco ícones; apenas o destino selecionado ganha cápsula azul, expansão horizontal e rótulo ao lado do ícone. A implementação mantém a hierarquia e os cinco destinos reais do Kognos, agora representados visualmente por Casa, Busca/Estudar, Gráfico/Questões, Relógio/Calendário e Perfil. Mesmo no tema claro, o dock permanece escuro para corresponder à referência. A compactação por rolagem anterior é preservada e oculta o texto, nunca os ícones.

A referência **desktop** mostra o mesmo menu em três estados: barra lateral escura expandida, barra clara compacta e barra clara expandida. As classes existentes `theme-dark`, `theme-light` e `sidebar-collapsed` já representam esses estados e continuam sendo a fonte da verdade. O refinamento aplica navy `#052033` com seleção cinza-azulada `#647F92` no escuro e superfície branca com seleção azul-clara `#E5F3FC` no claro. O usuário pode recolher ou expandir o menu com o botão existente e a preferência permanece na chave `kognos_sidebar_collapsed_v1`.

No rodapé do menu, foram adicionados controles reais de **modo claro/escuro** (com o mesmo estado e armazenamento da interface existente) e **sair da conta** (chama a rotina Supabase existente). No modo compacto, os rótulos ocultam-se, mas os ícones e os nomes acessíveis permanecem. No celular, o menu lateral de gaveta continua acessível e a barra inferior não muda rotas nem contas.

Esses ajustes são estritamente visuais e de navegação: nenhuma migração, alteração de banco, permissão, autenticação ou dado curricular. Testes novos em `tests/animated-navigation-design.test.mjs`. Revisão visual manual nos diferentes tamanhos de tela permanece recomendada após a CI.

## Revisão de escopo — retirar a barra inferior anterior

O usuário descartou explicitamente a barra inferior móvel previamente ilustrada. Portanto, o componente `MobileBottomNavigation.tsx` foi excluído e sua montagem no `KognosApp.tsx` foi retirada. As classes CSS da cápsula móvel foram excluídas do arquivo de personalização. Na versão mobile, os destinos continuam acessíveis pelo **menu superior "Abrir menu"**, que apresenta o mesmo menu lateral do desktop, mantendo atalhos para módulos e calendário. O destaque animado nas cinco abas da aula e nas etapas 01–10 continua inalterado.

O novo modelo completo de dashboard foi solicitado com uma referência visual que não ficou disponível como arquivo inspecionável nesta execução. **Não foi implementado um dashboard supostamente correspondente a uma imagem não verificável**. O PR preserva as funções existentes, sem simular a fidelidade ao novo desenho. Essa solicitação visual ainda depende de referência acessível para implementação fiel.
