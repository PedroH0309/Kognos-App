# Etapa 7 — Simulações educacionais avançadas (PhET + Kognos nativo)

## Problema
O estudante pediu manipulação de modelos como nas referências visuais: moléculas/átomos e representações geométricas com zoom, movimentos e parâmetros livres, não apenas questões e caixas de texto.

## Recursos incorporados
- **PhET (externo, com autorização de carregamento)**: catálogo de oito simulações HTML5 oficiais verificadas em pt_BR: Gráfico de Quadráticas, Construtor de Área, Frações: Intro, Monte um Átomo, Balanceamento de Equações Químicas, Reagentes, Produtos e Excesso, Geometria Molecular e Escala de pH.
- O roteamento é por tópico de Matemática/Química. No leitor e nas Trilhas, um tema compatível apresenta PhETSimulationPanel; outros temas não recebem simuladores sem correspondência.
- **Química própria**: Molecule3DLab usa a dependência Three.js já presente no projeto. Permite rotação livre, zoom por gesto/toque, clique para inspecionar átomo, troca de H₂O/CO₂/CH₄/NH₃, fallback textual acessível e desmontagem dos recursos gráficos.
- **Matemática própria**: GeometryWorkbench passa a incluir DraggableGeometryCanvas. As dimensões de retângulo, quadrado, círculo e triângulo podem ser alteradas arrastando diretamente os pontos cianos, mantendo os ranges para teclado. Cálculos de área e perímetro continuam na função existente geometryMetrics.
- Interface mobile-first com suporte a foco de teclado, controle de tela cheia quando disponível e indicação clara de conteúdo externo.

## Licenciamento PhET: RESTRIÇÃO OBRIGATÓRIA
A partir de setembro de 2026, as versões regulares HTML5 do PhET utilizam **Creative Commons Attribution–NonCommercial 4.0 (CC BY-NC 4.0)**. PhET considera sites monetizados, produtos pagos e diversas outras formas de vantagem comercial como uso comercial, para o qual **é exigida licença comercial específica**, mesmo que a simulação esteja incorporada em iframe.
Fonte oficial: https://phet.colorado.edu/en/licensing e https://phet.colorado.edu/en/terms-of-use

- A integração NÃO copia código, imagens ou recursos das simulações para o repositório.
- O estudante **precisa clicar** Carregar simulação antes que o iframe externo faça contato com o PhET.
- O rodapé de cada simulação contém atribuição humana visível e links para PhET e licença.
- Em localhost no modo development a incorporação está habilitada para uso educacional individual não comercial.
- Em production o iframe está **DESABILITADO por padrão**. Habilite somente se o Kognos for inequivocamente NÃO COMERCIAL e o proprietário confirmar cumprimento dos termos, definindo NEXT_PUBLIC_PHET_MODE=noncommercial-confirmed na configuração de ambiente do frontend.
- Se houver assinatura, anúncios, patrocínio, venda, marketing ou outra finalidade comercial, mantenha o iframe DESABILITADO até obter a licença comercial diretamente com PhET. Links para o site oficial permanecem acessíveis no cartão.
- Não usar logotipos e imagens do PhET em publicidade sem autorização; nenhum recurso de PhET foi empregado em campanhas do Kognos.

## Transparência técnica
Os modelos moleculares nativos são ilustrações ideais bola-e-vareta, sem escala real, orbitais, dinâmica molecular ou ângulos experimentais exatos. Three.js é uma dependência já existente no package.json. Não foram adicionados pacotes ou APIs. Não são criados resultados de questões nem notas, e os laboratórios não registram ações no Supabase.
O navegador pode bloquear iframes externos, consumo de dados e WebGL pode variar entre celulares, e o fullscreen de elementos pode não funcionar no Safari iOS; nesses casos existe o link oficial e a lista de átomos como alternativa.

## Como verificar
Execute na raiz: npm test; npm run test:content-db; npm run test:design; npm run typecheck; npm run build.

Teste manual: Matemática / funções quadráticas -> simulação PhET; Matemática / geometria plana -> arrastar dimensões, conferir área/perímetro; Química / modelos atômicos -> Monte um Átomo; Química / geometria molecular -> visualizador 3D, rotação e seleção de átomos + simulação oficial; Química / cálculos estequiométricos -> reagentes/limitação; Química / escala pH -> experimento PhET; compare carregamento e permissão em outra série e em tela pequena.

**Não equivale a criar simulação específica para todos os tópicos**: aulas sem correspondência ainda usam os laboratórios nativos ou o estúdio visual universal. A avaliação adaptativa continua separada.
