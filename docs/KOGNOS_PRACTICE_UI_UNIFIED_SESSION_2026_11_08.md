# Correções das atividades e questões geradas — 2026-11-08

## Problemas observados
Alternativas A–D desalinhadas; questões IA exibidas em cartões separados; estados de conclusão da aula, aviso de provedor e botões de correção visualmente inconsistentes.

## Implementação
- Cada alternativa de aula agora apresenta uma coluna fixa para a letra e uma coluna flexível para o texto, com alinhamento à esquerda e tamanho responsivo. Preserva seleção, feedback e gabarito.
- O gerador de IA reúne **somente as questões aprovadas e retornadas pelo servidor na geração atual** e abre automaticamente a sessão de resolução existente. Um item por vez, progresso e resultado ao final. O banco pendente oferece um único botão Iniciar sessão e não renderiza cartões individuais de questões.
- No gerador alternativo da sala de aula, a sequência apresenta um item visível por vez e mantém os demais montados (ocultos) para preservar respostas ao navegar. Avanço exige correção real do servidor; o final traz um resumo.
- O bloco Finalizar e prosseguir usa checklist alinhado e mantém o bloqueio até leitura confirmada e atividades respondidas.
- O aviso de configuração da IA usa grade responsiva; botões de resultado, tutoria e fechamento têm alinhamento e alturas consistentes.

## Segurança
Sem alterar IDs, banco, RLS, permissões, correção, APIs de geração ou credenciais. Não cria perguntas fictícias. Questões IA seguem revisadas automaticamente, não oficiais e sem homologação docente. A ausência de provedor continua sendo exibida corretamente.

## Validação
Teste estrutural em tests/practice-ui-unified-session-design.test.mjs, além da CI completa: unitários, segurança PostgreSQL com dois usuários, design, TypeScript e build. PR em rascunho, sem merge ou deploy.
