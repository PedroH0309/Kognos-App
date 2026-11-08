# Correção de contraste das aulas e remoção da numeração visual — 2026-11-08

## Problemas observados

Nas telas da aba **Materiais**, os painéis de correspondência ao Provão Paulista 2026, edital, autoria/referências e ausência de videoaula exibiam texto quase preto sobre superfícies escuras. O mesmo leitor utilizava títulos de etapas precedidos por números decorativos como `02 · Por que estudar isto?`, `03 · Conceitos`, `04 · Desenvolvimento` e botões de capítulos numerados.

## Causa e correção

O CSS compartilhado `course-library.css` definia `--course-ink:#101b33`, `--course-muted:#536780`, `--course-surface:#fff` e fundos claros mesmo quando o componente estava inserido numa tela `theme-dark`. Agora esses valores são derivados de `--txt`, `--sub`, `--box-bg`, `--line` e `--page-bg`, mantendo os valores claros como fallback para rotas independentes.

A folha `kognos-lesson-dark-contrast.css` entra depois dos estilos anteriores e aplica contraste contextualizado: texto claro, texto secundário azul-claro, links ciano legíveis, fundos e bordas da paleta do tema em documentos oficiais, referências, videoaulas, seções conceituais, testes, abas e estados de foco. Os títulos da seção principal e da aula herdam o tema, enquanto o cabeçalho azul-escuro mantém seus textos brancos.

## Numeração visual removida

`UniversalLessonReader` e `TopicLessonSections` não exibem mais `01`, `02`, `03` ... `10` junto de títulos, etiquetas de capítulos e atalhos pedagógicos. Todos os **nomes das seções**, a sequência de conteúdos, as âncoras `k-lesson-*`, o estado da navegação animada, os IDs curriculares e as atividades são preservados. Contadores funcionais (como `Questão 1 de 20`, passos de resolução e progresso) não foram eliminados, pois comunicam informação necessária à aprendizagem.

O ajuste se aplica a todas as matérias que utilizam os leitores universais, não apenas aos exemplos de Física apresentados.

## Validação e segurança

Os testes existentes da apresentação pedagógica foram adaptados à ausência de numeração decorativa. `tests/lesson-dark-contrast-and-unnumbered.test.mjs` verifica tokens de tema, contrastes nas referências e materiais, âncoras funcionais e a ausência de números nas etiquetas visuais.

Nenhuma alteração de banco, API, Supabase Auth, identificadores, gabaritos, autoria, avaliações ou conteúdos foi feita. O PR permanece em rascunho, sem merge nem deploy, até revisão e validação completa da CI.
