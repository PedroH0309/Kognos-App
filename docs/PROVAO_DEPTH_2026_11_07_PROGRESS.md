# Kognos — Plano editorial de aprofundamento e cobertura

**Data de referência:** 2026-11-07 • **Branch:** `feat/subject-specific-depth-20261107` • **PR:** #93

## Diagnóstico

A interface universal de 10 etapas já é compartilhada pelas disciplinas, mas **apresentação não equivale a profundidade**. Uma parte do conteúdo ainda é roteirização introdutória de `starter-lessons.ts`, montada a partir de padrões gerais; outra parte utiliza material autoral específico ou aula correlata **parcial**. Um texto-fonte curto não pode ser apresentado como se fosse ensino completo apenas por ser dividido visualmente.

Os tópicos oficiais incluídos no cadastro do Provão Paulista totalizam **364 entradas temáticas distintas**, sendo **360 temas em 10 disciplinas** das três séries mais **4 critérios de Redação** registrados separadamente. Existem outras entradas no catálogo de ENEM, ETEC, Fuvest e Vunesp; a conclusão do Provão não encerraria automaticamente todo o Kognos.

## Conteúdo efetivamente aprofundado nesta branch

- **45 aulas autorais específicas e aprofundadas**, uma por tema identificado por prefixo oficial estrito, sem pareamento difuso.
- **135 capítulos** progressivos (fundamentos, aplicação e aprofundamento).
- **135 questões objetivas originais**, A–D com `correctIndex`, dica e solução comentada específica, sem respostas dissertativas.
- Explicações por nível com conteúdos disciplinares, exemplos resolvidos, condições de validade e erros frequentes.
- **Nenhuma homologação docente presumida**. A etiqueta editorial continua identificando conteúdo autoral não homologado.

### Lista exata das aulas novas

### Biologia (5)
- Pirâmides ecológicas
- Sucessão ecológica
- Herança de grupos sanguíneos na espécie humana
- Código genético e síntese proteica
- Evidências da evolução biológica

### Filosofia (3)
- O contratualismo clássico
- Direitos Humanos
- A Filosofia e o filosofar

### Física (5)
- Escalas termométricas. As escalas Celsius
- Comprimento de onda, período e frequência
- Primeira e segunda Leis da Termodinâmica
- Fenômeno da refração. Índice de refração absoluto
- Lei de Coulomb. Campo elétrico

### Geografia (4)
- Os espaços supranacionais
- O espaço geográfico e a globalização
- Intemperismo, erosão
- A geopolítica da água

### História (6)
- Iluminismo e Liberalismo
- A Revolução Francesa e a era napoleônica
- Primeira Guerra Mundial
- Revolução Russa
- Segunda Guerra Mundial
- A Guerra Fria e os conflitos regionais

### Inglês (2)
- Localização de informação específica
- Compreensão da relação entre conteúdos de diferentes textos

### Matemática (5)
- Porcentagem, taxas e índices
- Função exponencial e função logarítmica
- Arranjos, permutações e combinações simples
- Áreas de polígonos
- Poliedros e corpos redondos - cálculo de áreas, volume e capacidade

### Português (5)
- Concordância nominal e concordância verbal
- Figuras de Linguagem
- Regência nominal e regência verbal
- Classes de palavras: substantivo, artigo
- Frase, oração e período

### Química (7)
- Equações químicas e balanceamento
- Cinética química
- Reações de oxirredução e números de oxidação
- Conceito de entalpia e Lei de Hess
- Reações nucleares: fissão e fusão nucleares
- Principais características e propriedades de ácidos, bases, sais e óxidos
- Equilíbrio em sistemas homogêneos e heterogêneos

### Sociologia (3)
- Pluralismo cultural: a persistência do etnocentrismo
- Movimentos sociais e novas formas de participação política
- A representação e os partidos políticos

## Cobertura ainda pendente

Após este lote, **319 itens do Provão permanecem fora desta série de aulas aprofundadas**. Alguns deles já têm aula autoral de outra etapa ou apoio parcial; outros têm apenas roteiro introdutório. Esses grupos **não são equivalentes a 319 conteúdos ausentes**, e tampouco significam que os 324 tenham sido auditados como completos. O teste `provao-depth-coverage.test.ts` calcula em cada commit os grupos `deep_specific`, `specific_unverified`, `partial_support` e `introductory_only` e registra totais nos logs.

Aulas **publicadas pelo painel editorial do Supabase** têm prioridade sobre os materiais embarcados no código. Esta auditoria cobre apenas o catálogo offline; é necessário revisar publicações do banco separadamente. Mudanças neste PR não alteram dados de estudantes, IDs curriculares ou registros de questões e progresso.

## Critérios de aceitação para novos lotes

1. Texto ORIGINAL, correto e específico do assunto; não repetir a descrição do edital como teoria nem encher espaço com orientações vagas.
2. Pelo menos três etapas: fundamentos, desenvolvimento/aplicação e aprofundamento com condicionantes, exceções e justificativas.
3. Cada seção deve trazer exemplo resolvido adequado à disciplina, etapas demonstráveis e erro frequente fundamentado; visualização interativa somente quando agregar valor.
4. Somente questões com **quatro alternativas distintas**, gabarito formal e explicação da correta; distratores relevantes à habilidade avaliada.
5. Vincular a aula ao **identificador curricular existente** sem mudar histórico, edição, autenticação ou status de arquivamento de publicações.
6. Executar `npm test`, `npm run test:content-db`, `npm run test:design`, `npm run typecheck` e `npm run build`.
7. Revisão visual e de conteúdo antes de publicar; selo de revisão docente somente quando realmente houver validação humana.

## Continuação

A auditoria automática deve direcionar novas etapas, especialmente temas da Química, Física, Biologia e História que ainda usam roteiros genéricos. O trabalho só se encerra quando o catálogo inteiro tiver conteúdo específico validado, não quando o número de capítulos preenchidos atingir a contagem curricular. 

## Quinta leva — continuidade automática

Adicionados cinco módulos originais com três níveis e questões de alternativas A–D: ácidos/bases/sais/óxidos, equilíbrio químico homogêneo/heterogêneo, Lei de Coulomb e campo elétrico, evidências da evolução, volumes e áreas de sólidos. CI e revisão editorial são requisitos separados; não indicar homologação humana inexistente. A auditoria por categoria e os testes de múltipla escolha devem permanecer válidos em cada novo commit.

## Verificação transversal de avaliação objetiva

O teste `provao-depth-coverage.test.ts` passou a percorrer as aulas aprofundadas pelo catálogo completo e a rejeitar questões sem quatro alternativas distintas, sem gabarito indexado válido ou sem correção comentada suficiente. Também verifica a presença de avaliação em cada um dos três níveis e a integração com o conversor editorial. Essa garantia vale para o material embarcado e não constitui auditoria das aulas externas publicadas no Supabase. O commit de teste aguarda sua própria execução de CI antes de ser considerado aprovado.
