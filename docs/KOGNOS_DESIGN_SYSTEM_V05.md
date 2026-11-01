# KOGNOS — Design System 0.5

## Princípios

A interface deve transmitir confiança e clareza. A proporção visual recomendada é de aproximadamente **75% de superfícies neutras, 20% de navy e 5% de violeta/ciano**. Sem neon excessivo, cartões de vidro ou gradientes complexos em componentes comuns. O Kog usa ilustrações pontuais; não substitui a hierarquia das informações.

## Paleta aprovada

| Token | Nome | Hex | Uso |
| --- | --- | --- | --- |
| primary-900 | Deep Navy | `#101B33` | Sidebar e marca |
| primary-700 | Slate Navy | `#273A61` | Superfícies institucionais secundárias |
| accent-600 | Intelligence Violet | `#5B4DE3` | Botões primários, seleção e IA |
| accent-400 | Progress Cyan | `#38CDE5` | Progresso, detalhes informativos |
| background-light | Soft White | `#F7F9FC` | Fundo tema claro |
| surface-light | Cloud Gray | `#EDF1F7` | Superfícies secundárias tema claro |
| surface-dark | Graphite | `#202633` | Painéis tema escuro |
| background-dark | Midnight | `#111722` | Fundo tema escuro |
| success | Emerald | `#18B78A` | Confirmação e acertos |
| warning | Amber | `#F0AD4E` | Revisões e avisos |
| error | Coral | `#E46D75` | Erros e exclusão |
| text-primary | Ink | `#1D2638` | Texto tema claro |
| text-muted | Slate | `#778398` | Texto secundário |
| border | Mist | `#E0E6EF` | Linhas tema claro |

Os tokens ficam em `apps/web/src/app/design-system.css`, importado depois da folha legada em `layout.tsx`.

## Componentes cobertos

- Shell SaaS: sidebar navy fixa, modo recolhido, menu mobile com sobreposição, cabeçalho sticky, menu de buscas e barra inferior.
- Dashboard: hero com gradiente discreto e arte atenuada, cards com ícones Lucide, indicadores baseados exclusivamente em dados registrados, botões de ação.
- Onboarding: metas com ícones, opções selecionadas, passos, formulário e resumo; tema claro/escuro.
- Conta: avatar, edição de perfil, segurança, abas e seleção de tema.
- Tutor: painel de chat, sugestões, composição, avisos de privacidade e mascote Kog.
- Prática, simulado e planejamento: campos, escolhas, progresso, feedback correto/incorreto, tarefas e formulários.
- Modos de erro, sucesso, indisponibilidade, foco, teclado e redução de movimento.

## Rolagem

Usar `scrollbar-width` e `scrollbar-color` (Firefox), além de `::-webkit-scrollbar` (Chromium/Safari desktop). Barras finas e discretas, sem ocultar o controle de rolagem. Touch scrolling nativo preservado em iOS. Preferências de `prefers-reduced-motion` respeitadas.

## Diretrizes de UX

- Cards com raio 12–16 px; botões de 44 px ou mais; espaçamento em múltiplos de 8 px.
- Tipografia Inter com Manrope como fallback opcional para títulos. Fontes externas não são requisito para desenvolvimento offline.
- Sem uso de violetas em blocos inteiros grandes. A marca aparece em CTAs, estados ativos e pequenos detalhes.
- No modo claro, sidebar continua navy; conteúdo é claro com texto Ink e bordas Mist.
- Elementos de acessibilidade como foco visível, alvos de toque confortáveis, opções de alto contraste e texto ampliado devem ser revisados antes da produção.

## Limites desta entrega

O redesign cobre **todas as telas já implementadas**, mas não cria recursos educacionais ainda pendentes no roadmap. O build e auditoria WCAG automatizada requerem instalação do Next.js e testes no navegador real. Não há dados fictícios promovidos a históricos reais.
