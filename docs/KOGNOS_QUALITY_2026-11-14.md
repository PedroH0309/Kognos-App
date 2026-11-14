# Kognos — confiabilidade e compatibilidade do kit

Data: 14/11/2026. Base: `9c729fc` de `origin/main`.
Branch: `codex/quality-reliability-20261114`.

Este lote foi implementado em um worktree separado. As migrações e alterações locais
na pasta de trabalho original foram preservadas. Não houve merge, implantação,
alteração de schema ou mudança de políticas de acesso.

## Consultas e isolamento de contas

O histórico de IA e as conquistas podiam receber uma resposta depois da troca de
conta ou de uma atualização mais recente. Agora os resultados pertencem a uma
chave de recurso e a uma revisão. A interface oculta os dados da conta anterior
durante a própria renderização, antes mesmo da limpeza dos efeitos.

`useAsyncResource` concentra esse comportamento nos três consumidores: histórico
de IA, conquistas e configuração pública do servidor. O carregador recebe um
`AbortSignal`; sair da tela, trocar a conta ou atualizar cancela a consulta anterior.
Respostas atrasadas são ignoradas mesmo quando o carregador não consegue cancelar
fisicamente seu trabalho. O prazo de 15 segundos termina consultas travadas com
uma mensagem recuperável. A checagem da conta da sessão continua anterior ao envio
do token, e a autorização real continua nos endpoints protegidos.

Sete testes comportamentais cobrem troca de conta, saída, atualização, conclusão
fora de ordem, cancelamento, tempo limite e recuperação. Remover temporariamente
a comparação da chave fez o teste de isolamento falhar; o código correto foi
restaurado e os sete testes passaram novamente.

## Kit e recuperação de falhas

- Seis aliases `--radius-*: var(--radius-*)` invalidavam seus próprios valores.
  Foram removidos para preservar os tokens válidos já definidos.
- As migrações na branch de interface utilizavam 42 classes sem definição CSS.
  O kit agora oferece os utilitários de layout, tamanho, tipografia e estado
  efetivamente consumidos por esses componentes, com as variáveis existentes.
- As variantes `ks-badge-*` e `ks-toast-warning` compartilham as regras das
  variantes equivalentes existentes. Não foi instalado outro kit de interface.
- O carregamento foi integrado aos skeletons com dimensões, posicionamento,
  contenção no painel e preferência de movimento reduzido implementados no CSS.
- `error.tsx`, `global-error.tsx` e `not-found.tsx` oferecem recuperação em português,
  foco no título, controles por teclado e retorno ao início por navegação completa.
  A interface não imprime o erro recebido nem detalhes de conta/provedor.
- O fallback global importa seus próprios estilos, pois substitui o layout raiz.
  Nesse fallback, o tema acompanha a preferência do sistema operacional.

Os novos testes de contrato usam PostCSS para analisar regras reais: tokens não
podem se referenciar diretamente e classes estáticas `ks-*` usadas nos componentes
precisam ter uma regra CSS. Esses testes complementam a inspeção visual; não a
substituem. PostCSS já era dependência transitiva do Next e passou a ser declarado
explicitamente como dependência de desenvolvimento dos testes.

## Dependências

A auditoria inicial encontrou sete alertas moderados propagados pela versão de
`minimatch` consumida por `@typescript-eslint/typescript-estree`. A atualização
automática comum não resolveu a restrição desse consumidor. Foi aplicado um
override restrito a ele, com a versão corrigida registrada no novo lockfile.
O resultado local de `npm audit --audit-level=moderate` foi zero vulnerabilidades.
Isso não é uma certificação de ausência de falhas de segurança na aplicação.

O lockfile permite reproduzir a instalação com `npm ci`. Nenhuma dependência de
execução da interface foi adicionada. A configuração TypeScript acompanha o JSX
automático e os tipos de desenvolvimento exigidos pela versão instalada do Next;
o cache `.tsbuildinfo` passa a ser ignorado pelo Git.

Referência da correção: [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249).

## Evidências e ferramentas

- Histórico do projeto com o Claude: lidos os dois históricos locais para recuperar
  as decisões de produto e a evolução das migrações. Históricos e configurações
  privadas não foram adicionados ao repositório.
- Impeccable: contexto do projeto, orientações de hardening e revisão visual.
- Graphify: consulta do grafo existente confirmou o acoplamento do componente
  principal; este lote preserva suas funções e faz uma extração limitada.
- Context7: consulta à documentação oficial do React para limpeza de efeitos e
  descarte de respostas antigas. A documentação instalada do Next orientou os
  arquivos especiais de recuperação.
- Chromium headless: consultas concorrentes, troca de conta, saída, erro de API e
  nova tentativa; carregamento em 320, 768 e 1440 px nos dois temas, movimento
  reduzido e contenção inline; foco, nova tentativa por teclado e página 404.
  A rota temporária de ensaio foi removida do código entregue.

Documentação consultada: [limpeza de efeitos no React](https://react.dev/learn/synchronizing-with-effects).

## Validação e limites

| Verificação | Resultado local |
| --- | --- |
| Motor educacional | 6 testes aprovados |
| Aplicação e regras | 575 testes aprovados |
| Design e contrato CSS | 244 testes aprovados |
| Segurança do conteúdo / dois usuários | 8 testes aprovados |
| TypeScript e build | Aprovados |
| Lint dos arquivos novos e consumidores alterados | Sem erros ou avisos |
| Auditoria de dependências | 0 alertas conhecidos |

Na base deste lote, o lint geral tinha 90 erros e 115 avisos. As três ocorrências
de atualização síncrona de estado nos consumidores corrigidos foram eliminadas;
permanecem 87 erros e 115 avisos em outras partes do projeto. Nenhuma regra foi
desativada e nenhum teste foi removido para obter aprovação.

O ensaio em navegador utilizou respostas controladas; não certifica o funcionamento
de contas reais, das configurações do Supabase hospedado ou do provedor NVIDIA.
Os testes de banco executaram o ambiente local de teste, não o banco de produção.

Na primeira tentativa, o Claude Code CLI respondeu que não havia login ativo. Uma segunda tentativa de
revisão somente leitura pelo inicializador `fcc-claude` excedeu o tempo limite;
o processo de revisão foi encerrado e nenhuma aprovação por ele foi reivindicada.
Na iteração seguinte, a conexão local já instalada foi configurada no processo
isolado do CLI, sem alterar credenciais do usuário. O Claude Code respondeu à
verificação e passou a produzir rascunhos de aulas em outro branch; isso não
constitui aprovação deste código nem revisão pedagógica humana.
O Strix consta como skill,
mas o executável não foi encontrado entre as ferramentas instaladas acessíveis;
não foi executado um pentest Strix nem foi reivindicada aprovação por ele.

Continuam pendentes: correção dos demais erros de lint, revisão das migrações
restantes com dados reais, validação autenticada em homologação, pentest configurado
e revisão pedagógica/cobertura curricular. Este lote não declara o app ou o currículo
100% concluídos para produção.

## Catálogo e acesso às aulas

A tela de estudo agora distingue aula aprofundada, guia introdutório e tema em
desenvolvimento. Os totais são calculados pelo resolvedor canônico usado pelo app,
sem considerar a presença de um título no catálogo como aula concluída. Um filtro
acessível permite exibir apenas as aulas que já possuem conteúdo. No catálogo
ENEM desta revisão: 14 aulas aprofundadas, 70 guias e 823 temas em desenvolvimento;
esses números descrevem o catálogo editorial do app, não a matriz oficial do Inep.

Três entradas históricas (`bio-vaccines`, `hist-industry` e `pt-cohesion`) abriam
resumos apesar de terem uma aula canônica aprofundada. O acesso agora resolve os
identificadores antigos com disciplina e título registrados, preservando o
histórico e recusando metadados forjados. Quatro testes cobrem classificação,
integridade dos totais e essas entradas.

O Chromium verificou o componente real em 320, 375, 768 e 1440 px, nos temas claro
e escuro: sem rolagem horizontal, filtro por teclado, mudança de disciplina,
busca vazia com orientação e ausência de exceções do navegador. A rota temporária
de ensaio foi removida. Os cinco erros e 19 avisos de lint já existentes em
`LearningTrails.tsx` permanecem; os novos arquivos não adicionam ocorrências.
