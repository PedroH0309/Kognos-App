# Etapa 6 — Experiência visual interativa (v1)

## Problema
Nas capturas, Português (Intertextualidade e interdiscursividade) não tinha aula completa e a exploração de Química mostrava apenas perguntas e campos de texto. A existência da aba interativa não significava que havia uma visualização específica para cada tema.

## Implementado
- Todo tema do catálogo passa a receber o mapa TopicVisualStudio: tema central, três eixos disciplinares clicáveis, modo de sequência reorganizável e trechos de referência registrados. As anotações escritas do explorador anterior ficam opcionais.
- Biologia: CellAnatomyLab — diagrama SVG com células animal, vegetal e procarionte, seleção de organelas pelo próprio desenho ou controles, zoom e descrição funcional contextual.
- Português: IntertextualityLab — comparação visual entre textos originais, citação, paráfrase e alusão; alternância entre perspectivas jornalística, científica e de campanha.
- Matemática: preservados 17 laboratórios especializados. Tópicos sem correspondência recebem MathVisualPlayground, gráfico afim manipulável explicitamente identificado como ferramenta genérica, não simulação específica.
- Temas cadastrados sem aula completa têm acesso direto à experiência visual na aba Aula, sem serem indevidamente promovidos a aula desenvolvida.
- CSS novo para telas estreitas, teclado, áreas de toque e movimento reduzido.

## Transparência pedagógica
Os novos exemplos são autorais. O diagrama celular é simplificado e não está em escala. O mapa genérico é uma ferramenta de estudo e organização, não uma aula completa para centenas de tópicos. Os laboratórios existentes mantêm a associação temática. Em todos os casos, a Evolução da habilidade continua a única origem de registros de acertos e domínio. Nenhum banco, login, segredo, migração ou endpoint foi alterado.

## Verificação e revisão
Após a implementação, executar: npm test; npm run test:content-db; npm run test:design; npm run typecheck; npm run build.
Inspecionar no celular e desktop: Português / Intertextualidade e interdiscursividade; Biologia / Organização celular; Química / tema cadastrado sem aula; Matemática / temas com e sem laboratório especializado; navegação entre abas e painel de Evolução.
Não executar merge antes da revisão e dos testes de CI. Inspeção visual real ainda deverá ser realizada.
