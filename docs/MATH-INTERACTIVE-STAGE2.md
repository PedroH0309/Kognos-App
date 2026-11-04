# Matemática Interativa — Etapa 2: ampliação por conteúdo

## Contexto

A auditoria do Provão Paulista 2026 identificou **63 registros curriculares de Matemática entre as três séries** (incluindo repetições de conteúdos entre séries). A versão A–H anterior tinha oito famílias de laboratórios, com lacunas e roteamentos genéricos demais para progressões, exponenciais/logaritmos, sistemas, geometria espacial e unidades. Este PR acrescenta nove famílias, totalizando **17 laboratórios** carregados sob demanda, sem duplicar dados ou substituir a aula.

## Novos laboratórios

| Família | Conteúdos cobertos | Interação |
|---|---|---|
| Conjuntos numéricos | Naturais, inteiros, racionais, irracionais, reais | Exemplos exatos, reta numérica e classificação |
| Razões e proporcionalidade | Direta, inversa e quadrática | Curvas e fatores manipuláveis |
| Sequências | PA, PG e leis de formação | Termos, razão e soma dos n primeiros termos |
| Exponencial/logaritmo | Funções inversas e domínio | Gráficos, base, potência e argumentos |
| Análise combinatória | Princípios de contagem, permutação, arranjo e combinação | Escolhas, posições e quantidade de possibilidades |
| Sistemas lineares | Duas equações e classificação | Coeficientes, interseção de retas e solução algébrica |
| Geometria espacial | Cubo, bloco, cilindro e cone | Dimensões, área total, volume e vistas esquemáticas |
| Conversão de medidas | Comprimento, massa, tempo e capacidade | Conversões físicas, fator multiplicativo e direção |
| Funções periódicas | Arcos e funções seno/cosseno | Amplitude, período, fase, ângulo e gráfico da onda |

Mantidos sem modificações: notação científica, porcentagem, equações, funções afim/quadrática, geometria plana, probabilidade, estatística e trigonometria do triângulo retângulo.

## Integração

Os novos componentes estão no mesmo `apps/web/src/components/math/`. `MathLabPanel` escolhe por `resolveMathLab` e utiliza `next/dynamic` para carregar apenas o módulo correspondente. Os usuários continuam acessando por **Aula → Exploração interativa** e pelas introduções legadas das Trilhas. O layout responsivo é complementado por `apps/web/src/app/kognos-math-stage2.css`.

A ordem do roteador agora dá prioridade aos termos específicos do assunto/edital, antes de recorrer às unidades gerais. Por exemplo:
- Geometria espacial não deve abrir calculadora de área plana;
- Funções periódicas não devem abrir apenas o triângulo retângulo;
- Funções exponenciais e logarítmicas não devem abrir o gráfico de parábolas;
- Proporcionalidade entre grandezas não deve abrir apenas calculadora de desconto.

## Garantias e limites pedagógicos

- O teste do programa oficial percorre os 63 registros de Matemática e exige que **todos tenham uma família de laboratório atribuída**, sem alegar que um laboratório pequeno esgote todo o item de edital.
- A correspondência entre o título de um item e uma família não certifica cobertura completa de cada subtema. Por exemplo, o laboratório de urna não cobre formalmente probabilidade condicional, e a geometria plana não é uma demonstração completa de semelhança/congruência.
- Vistas ortogonais de sólidos são esquemáticas, não instrumentos de desenho técnico em escala. Gráficos adotam limites de visualização.
- Os cálculos são locais, sem API ou persistência; exploração **não altera** notas, contas, histórico nem o mapa de domínio.
- O painel de Evolução da habilidade continua sendo o único local para **Praticar mais 10 questões**, com a progressão original 3 básicas, 4 intermediárias e 3 avançadas.
- Não foram feitas alterações em banco, migrações, Auth, conteúdo editorial ou APIs do Kog.

## Verificações

```powershell
npm install
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
```

Confirme em um dispositivo móvel: Matemática → Sequências, Matemática → Função exponencial e logarítmica, Matemática → Sistemas lineares, Matemática → Geometria espacial, Matemática → Sistemas de Medidas. Alterar os controles deve atualizar valores/gráficos sem gerar resposta avaliada, sem alterar progresso e sem solicitar redes. Verificar também o retorno ao leitor e o seletor de matérias.

## Próximas etapas em PRs próprios

- **Etapa 3:** Física, Química e Biologia — simulações específicas, exigindo conteúdo e limites científicos fundamentados.
- **Etapa 4:** Português, Inglês e Redação — atividades textuais e argumentativas.
- **Etapa 5:** História, Geografia, Filosofia e Sociologia — cronologias, mapas conceituais e análise baseada em fontes.
- **Etapa 6:** auditoria pedagógica por item, teste de acessibilidade e revisão editorial de conteúdos não homologados.

Nenhuma destas etapas futuras está declarada como concluída.
