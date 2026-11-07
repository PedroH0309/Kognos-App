# Kognos — contrato pedagógico universal v1

## Abrangência

Um único leitor de aulas para Matemática, Física, Química, Biologia, História, Geografia, Português, Literatura, Filosofia, Sociologia, Inglês, Redação e todas as demais disciplinas cadastradas.

A implantação do leitor **não é reescrita do acervo**. Módulos iniciais ainda genéricos continuam explicitamente marcados como introdutórios, não como aulas completas homologadas.

## Organização

Disciplina → bloco ou unidade curricular → aula → revisão do bloco → simulados.

As unidades são as cadastradas no currículo, quando disponíveis. Não são inventadas unidades oficiais. A revisão apresenta objetivos e passagens reais dos materiais de cada unidade, com acesso às aulas de origem. Os simulados continuam pertencendo ao espaço de prática do Kognos; não se deve alegar que avaliam todos os temas do bloco sem conferir o banco de questões.

## As dez partes de toda aula

1. Identificação: disciplina, tema, objetivo, pré-requisitos e tempo estimado.
2. Contextualização: situação do cotidiano quando cadastrada; caso contrário, exemplo original identificado como referência.
3. Conceito central: fundamentos existentes no material.
4. Desenvolvimento: básico, aplicação e aprofundamento em passos curtos.
5. Visualização: mapa conceitual com títulos reais das etapas.
6. Aplicação: exemplo resolvido e etapas justificadas do material.
7. Comparações, limites e erros: condições, regras e erros específicos já escritos.
8. Interatividade: simulador real somente quando correspondente ao tema.
9. Teste rápido: resposta aberta, dica, resolução comentada e autoavaliação identificada como não corrigida automaticamente.
10. Consolidação: recapitulação baseada em trechos reais, autoavaliação e encaminhamento às atividades e simulados corrigidos.

Elementos sem conteúdo confiável ou vínculo relevante devem ser omitidos. Não inventar fatos, respostas ou simulações para preencher seções.

## Critérios editoriais obrigatórios

- Escrever definições e pré-requisitos antes de aplicações. Não produzir paredes de texto.
- Para Exatas: explicitar grandezas, hipóteses, unidades e resolução com passos justificados.
- Para Natureza: processos, modelos, experimentos relevantes e limites das analogias.
- Para Humanas: contexto histórico/geográfico, agentes, evidências, relações de causa e consequências, perspectivas e fontes.
- Para Linguagens: leitura de trechos autorais/licenciados, contexto, interpretação com evidências e comparações textuais.
- Para Filosofia e Sociologia: teses, premissas, contrapontos, casos ou dados com indicação de fonte.
- Fornecer exercícios diferentes nos três níveis. Explicar respostas incorretas em itens corrigidos.
- Resposta livre comparada ao modelo não equivale a nota ou competência dominada.
- Não colocar chaves no cliente, não alterar IDs ou progresso pré-existente e não inventar métricas de domínio.

## Pendência real de qualidade

Auditar e reescrever tema a tema os módulos guiados genéricos e os materiais introdutórios, depois revisar cientificamente e pedagogicamente os materiais autorais temáticos, com histórico editorial e verificação de referências. A padronização de leitura não certifica conteúdo que ainda careça dessa revisão. A revisão de cada disciplina deve produzir exemplos e exercícios específicos, sem substituir palavras-chave em um texto genérico.

## Verificação técnica

Executar npm test, npm run test:content-db, npm run test:design, npm run typecheck e npm run build. Validar também uma aula de cada área, inclusive contexto, lab, teste, revisão de unidade e encaminhamento a simulado em telas móveis e desktop.
