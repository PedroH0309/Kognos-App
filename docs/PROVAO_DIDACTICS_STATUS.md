# Provão Paulista — correção pedagógica de conteúdo (2026-11-07)

## Problema encontrado

O modelo de leitor universal (#89) reorganizou a interface, mas não substituiu textos-fonte. O fallback de `starter-lessons.ts` repetia a descrição do edital, colocava metadados editoriais na teoria e reutilizava exemplos. A imagem de Ecologia mostrou essa falha.

## Inventário e limites

- O Anexo VII transcrito no repositório contém **739 entradas por série, referentes a 360 temas únicos** de 10 disciplinas.
- Há ainda quatro critérios de Redação do Anexo VI, incorporados ao catálogo separadamente.
- A estrutura universal de leitura é compartilhada por todos os temas.
- O presente PR **não declara que 364 temas tenham conteúdo completo redigido por especialistas**: essa tarefa é editorial e exige autoria, revisão e testes por tema.
- Antes desta mudança, aulas individuais elaboradas existiam com títulos próximos, mas diferentes dos itens da matriz; por isso o aplicativo não as aproveitava para os tópicos da prova.

## Correções

1. Aula de **Principais conceitos de Ecologia** escrita especificamente para o Anexo VII, com três capítulos progressivos, seis questões autorais comentadas, distinções conceituais e limites do modelo de transferência.
2. Simulador interativo de **energia por nível trófico**, com eficiência ajustável, indicadores e aviso de que representa uma hipótese didática, não uma medição ecológica.
3. Correspondências explícitas de aproximadamente 100 tópicos/competências para **aulas autorais já existentes**. Todas as correspondências ficam rotuladas como apoio **parcial**; não alegam cobertura integral de itens amplos.
4. Temas ainda sem aula desenvolvida **não exibem três capítulos genéricos como se fossem aulas completas**: passam por um roteiro introdutório identificável, com conceito, exemplo, questionamento, referência ao programa e encaminhamento à revisão.
5. Metadados do edital e avisos editoriais deixam de ocupar artificialmente os parágrafos da teoria; a informação de escopo fica separada da explicação.
6. IDs, matrícula do aluno, trilhas, histórico de questões, configurações de AI e Supabase permanecem inalterados.

## Critérios editoriais para fechar os tópicos restantes

Cada tema precisa de autoria original e verificação disciplinar, incluindo:
- definições com pré-requisitos, contextualização e objetivos mensuráveis;
- desenvolvimento gradual sem saltos, exemplos diferentes e resolução em etapas;
- visualizações realmente vinculadas ao conceito, não meramente decorativas;
- comparações, condições de validade, exceções e erros frequentes;
- checagens com correção fundamentada e revisão por bloco;
- fonte e licença, revisão docente, validade factual e acessibilidade.

O curso só deve ser considerado completo ao cobrir todas as competências do escopo oficial, não apenas um recorte relacionado. O módulo de autoavaliação **não pode registrar domínio** sem tentativas corrigidas.

## Validação

Executar `npm test`, `npm run test:content-db`, `npm run test:design`, `npm run typecheck` e `npm run build`. Testar no navegador temas com: (a) aula específica nova; (b) apoio autoral parcial; (c) apenas roteiro introdutório. Conferir desktop, celular e temas claro/escuro.

A main e o serviço público só serão modificados após PR aprovado e merge.
