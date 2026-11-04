# Kognos — Etapa 5: laboratórios de Ciências Humanas

A Etapa 5 adiciona **12 oficinas autorais de exploração**, três em cada uma das quatro disciplinas: História, Geografia, Filosofia e Sociologia. São interações locais, sem pontuação e sem gravação do progresso. Os conteúdos curriculares continuam identificados como temas cadastrados, introduções ou aulas completas, conforme o estado editorial real.

## Laboratórios

| Disciplina | Laboratório | Exploração |
|---|---|---|
| História | Linha do tempo | Marcos históricos, consulta contextual e ordenação cronológica |
| História | Fontes e narrativas | Análise de autoria, representatividade e necessidade de confronto de fontes; **textos simulados, claramente identificados** |
| História | Causas e consequências | Organização de antecedentes, acontecimentos, agentes e efeitos, sem afirmar causalidade automática |
| Geografia | Cartografia e escala | Conversão de distância em mapas e relação matemática entre escalas |
| Geografia | Camadas espaciais | Quadro territorial **fictício** de relevo, vegetação e serviços, com seleção de quadrículas e leitura de legenda |
| Geografia | Indicadores | Amostra hipotética de acesso a serviços e densidade demográfica; distinção entre simulação e pesquisa real |
| Filosofia | Argumentos lógicos | Reconstrução de premissas e classificação de quatro esquemas válidos e inválidos, com justificativas |
| Filosofia | Formas de conhecimento | Senso comum, raciocínio racional e investigação empírica, com identificação de limites |
| Filosofia | Ética e deliberação | Dilemas de privacidade e recursos públicos, identificação de atores e justificativa de princípios |
| Sociologia | Trabalho e sociedade | Comparação crítica de três situações hipotéticas de trabalho e seus fatores estruturais |
| Sociologia | Cultura e identidades | Etnocentrismo, estereótipos e investigação contextual em três cenários autorais |
| Sociologia | Participação e cidadania | Percentuais de uma consulta fictícia, diferença entre observação, hipótese e interpretação, mecanismos de participação |

## Integração

- \`apps/web/src/lib/humanities-labs.ts\`: roteamento específico e motores determinísticos originais.
- \`apps/web/src/components/humanities/HumanitiesLabPanel.tsx\`: importação dinâmica por disciplina/tema.
- \`HistoryLabs.tsx\`, \`GeographyLabs.tsx\`, \`PhilosophyLabs.tsx\`, \`SociologyLabs.tsx\`: doze oficinas.
- \`CurriculumRoom.tsx\` e \`LearningTrails.tsx\`: renderização na **Exploração interativa** quando o tópico é reconhecido.
- \`apps/web/src/app/kognos-humanities-labs.css\`: controles responsivos com foco de teclado.

A base FOCO, Supabase, banco, autenticação, Tutor Kog e os módulos das outras disciplinas não foram modificados nesta etapa. A prática adaptativa de 10 questões e o histórico permanecem exclusivamente no fluxo de Evolução da habilidade.

## Proveniência, precisão e limites

- A linha do tempo usa marcos históricos amplamente documentados e resumos autorais: Lei Áurea (Lei nº 3.353/1888), República brasileira (1889), Movimento de 1930, golpe de 1964, transição de 1985, Constituição de 1988; Revolução Francesa (1789), revoluções russas (1917), fim da Segunda Guerra (1945), DUDH (ONU, Resolução 217 A (III), 1948), queda do Muro de Berlim (1989) e dissolução soviética (1991).
- As posições dos marcos da linha do tempo são **igualmente espaçadas** para legibilidade, não representam duração histórica proporcional. O aluno pode consultar o ano exato e o contexto de cada marco.
- Os exemplos de fontes de História são **ficcionais** e explicitamente identificados, nunca documentos primários genuínos.
- As grades cartográficas e contagens de Geografia/Sociologia foram inventadas apenas para ensinar como interpretar informações; não descrevem localidades, populações nem políticas reais.
- Roteamento por família temática **não prova** que cada tema do edital possui aula completa ou laboratório especializado em todos os subitens. Os conteúdos sem correspondência conservam a exploração multidisciplinar genérica.
- As atividades de Filosofia não determinam opiniões morais corretas. As de Sociologia não classificam pessoas reais, não representam amostras populacionais reais e não defendem posições partidárias.
- Não há inferências sobre usuários reais, correção de texto livre por IA, armazenamento de rascunhos nem atribuição de nota.

O currículo de referência para seleção dos tópicos é o [Provão Paulista 2026 — Edital SEDUC nº 10/2026](https://stcdndev.blob.core.windows.net/lib/SEED2602/Edital-n-10---Provo-Paulista-2026-d8543432b23b459c88a1a77a19a6b83d.pdf), Anexo VII. Os exemplos desta etapa são material autoral do Kognos, não questões da Vunesp.

## Testes após implementação

Concluídos os componentes, realizar:

\`\`\`powershell
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
\`\`\`

Inspeção visual real em celular ainda é necessária; comparar locais de entrada no leitor curricular e nas Trilhas. O PR deve ser revisado antes de qualquer merge. A Etapa 6 será uma auditoria editorial, de cobertura e de acessibilidade, não substituída por esta expansão.
