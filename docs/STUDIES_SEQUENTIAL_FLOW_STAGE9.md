# Etapa 9 — Navegação sequencial em Estudos

## Problema resolvido
A página principal de Estudos continuava renderizando a grade antiga com centenas de temas e filtros no topo. A experiência completa precisava ser: **Matérias → Conteúdos → Aula exclusiva → Próxima aula**.

## Fluxo
1. **Escolher matéria**: tela inicial com cartões de disciplinas, total de conteúdos, aulas desenvolvidas e introduções. Filtros de prova e série do Provão Paulista permanecem, mas não há grade de temas nesta etapa.
2. **Escolher conteúdo**: tela exclusiva da disciplina selecionada, busca e lista de temas em ordem editorial, sem colunas truncadas e com status honesto (aula desenvolvida, introdução ou tema apenas mapeado).
3. **Aula exclusiva**: sem sidebar de outros tópicos nem filtros, mantendo as cinco abas atuais: Aula em texto, Atividades, Explicações, Materiais e Evolução. Materiais curriculares oficiais são exibidos na aba Materiais em vez de ocupar o topo da leitura.
4. **Prosseguir**: no rodapé da aula, o aluno confirma a leitura e escreve resposta em cada atividade autoral. Somente após ambas as condições o botão **Prosseguir para a próxima aula** é habilitado. A sequência segue a ordem da disciplina no currículo filtrado, não uma lista de resultados de pesquisa. A última aula retorna aos conteúdos da disciplina.

## Transparência e acessibilidade
- A confirmação de leitura é declaração explícita do estudante; não é possível medir leitura real pelo navegador.
- As atividades de texto são consideradas preenchidas quando há conteúdo não vazio; isso **não** significa resposta correta, nota oficial nem atualização de domínio. O histórico e a correção existentes continuam separados na aba Evolução.
- Temas sem aula escrita podem ser pulados, sem registrar conclusão.
- O leitor para celular evita alturas e rolagens aninhadas, mostra uma matéria por vez e preserva margens e indicadores de foco.
- Links para aulas introduzidas por identificadores legados continuam resolvidos ao tema curricular correspondente.
- Nenhum dado, segredo, autenticação, banco, migração ou comportamento de IA foi alterado.

## Validação
`npm test`, `npm run test:content-db`, `npm run test:design`, `npm run typecheck`, `npm run build`.

Inspeção visual manual recomendada: largura de 375px e 456px, fluxo completo a partir de Estudos, filtragem Provão Paulista, seleção de Matemática e Português, avançar tema após leitura e respostas, tentar avançar sem ler, retornar à lista, experimentar tema sem aula. Validar Safari iPhone além de Chrome desktop.

**Escopo**: a etapa reorganiza a navegação; não cria material editorial novo para as centenas de tópicos ainda sem aula.
