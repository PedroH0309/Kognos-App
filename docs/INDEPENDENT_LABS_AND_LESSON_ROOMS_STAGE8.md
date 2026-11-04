# Kognos — Etapa 8: aulas separadas do Laboratório

## Problema confirmado nas capturas

As experiências visuais anteriores estavam dentro das aulas de tópicos específicos, misturadas ao texto e a roteiros com campos de resposta. Em telas estreitas, múltiplas caixas, cabeçalhos e abas com duas linhas comprometiam a leitura, e o leitor frequentemente rolava até uma posição próxima ao cabeçalho fixo.

## Nova organização

**Estudar → Aulas por matéria:** escolha uma matéria e um tema. Cada aula tem cinco espaços distintos:
1. **Aula em texto**: leitura dos conteúdos editoriais já publicados, separados por fundamentos, aplicação e aprofundamento, quando disponíveis.
2. **Atividades**: tarefas originais daquele conteúdo, rascunhos e pistas opcionais.
3. **Explicações**: exemplos guiados, passos e soluções das atividades, separados do enunciado.
4. **Materiais**: documentos do programa, fontes e vídeos já verificados, quando houver.
5. **Evolução**: histórico e prática adaptativa existentes (não afetados pelas interações de aula).

Para introduções legadas, são usados os próprios textos, o exemplo, o erro frequente e o desafio de compreensão já cadastrados. Para temas ainda sem texto editorial, a interface informa corretamente que a aula não existe: não inventa conteúdo nem atribui uma suposta revisão. O fluxo de geração consentida com Kog foi mantido.

**Estudar → Laboratório interativo:** espaço independente com seleção de disciplina, busca por tema e catálogo de simuladores. Abre os 17 laboratórios matemáticos nativos, laboratórios de Física/Química/Biologia, Linguagens, Humanas e experiências PhET compatíveis. Assuntos sem simulador específico têm acesso opcional a um mapa de investigação claramente identificado como genérico.

O filtro de prova e série também fica acessível no Laboratório. Os botões de aula possibilitam mudar diretamente para o laboratório correspondente, sem duplicar simuladores no leitor de texto.

## Interface móvel

- Abas de leitura em linha horizontal rolável, sem blocos 2×2 que ocupam a tela.
- Abertura de aula com scroll somente após renderização, respeitando a área do cabeçalho.
- Leitor de texto sem alturas máximas nem rolagem aninhada, com margens de leitura, contraste e largura de texto apropriada.
- No laboratório móvel, lista de temas e simulador são telas distintas com botão Voltar; no desktop, ficam lado a lado.
- Folha CSS carregada após estilos anteriores para corrigir regras legadas, sem substituir o layout global do aplicativo.

## Privacidade e licenças

Nenhuma alteração de banco, RLS, autenticação, modelos de IA ou tentativas avaliadas. O carregamento de simuladores PhET continua exigindo consentimento por interação e respeita o bloqueio de produção para conteúdos CC BY-NC 4.0 em projeto comercial. Os materiais autorais permanecem separados dos materiais externos.

## Validação

Execute na raiz do repositório:

```powershell
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
```

Inspeção visual adicional recomendada: largura de 375px e 456px, iPhone Safari, Chrome/Edge, e desktop; estudar temas com aula publicada, só introdução e sem aula. Verificar abertura do Laboratório de Matemática, Química e Biologia, retorno à aula e preservação da Evolução da habilidade.

Este PR implementa a organização dos espaços; **não** representa produção de aulas editoriais completas para todos os temas ainda sem conteúdo. A cobertura segue os estados reais do catálogo.
