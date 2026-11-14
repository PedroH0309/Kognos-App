# Matemática: fundamentos, lote 02

Cinco temas editoriais que não tinham aula aprofundada receberam conteúdo
original: Ângulos e retas paralelas, Áreas de figuras planas, Circunferência e
círculo, Expressões algébricas e Razão e proporção. Cada aula contém objetivos,
pré-requisitos e três capítulos progressivos, com método, exemplo resolvido e
erro frequente. Há três questões autorais A–D por aula, com dica e resolução.

Os rascunhos foram produzidos pelo Claude Code instalado e revisados pelo agente
implementador. A conferência corrigiu ângulo de setor circular, condições de
proporcionalidade, geometria sem figura suficiente, alternativas ambíguas,
explicações de distratores e formatos de dados. Essa conferência automatizada
não substitui revisão pedagógica humana. Todas as aulas mantêm esse aviso,
`review: introductory` e ausência de homologação docente.

O material é preparatório autoral do Kognos, sem cópia de questões da concorrência.
Os títulos são do catálogo editorial, não habilidades oficiais certificadas.
A [página institucional de matrizes do Inep](https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem)
orienta a consulta da matriz; ela não é a origem nem uma aprovação dos exercícios.
Não foram atribuídos códigos de habilidades ou vídeos sem verificação.

## Entrega no aplicativo

O resolvedor canônico aceita somente disciplina, título e ID históricos
registrados, com participação literal nos roteiros de cada prova. Uma única
fonte atende às referências elegíveis; não foram criados aliases semânticos,
cópias persistidas ou migrações de progresso.

O caminho offline usado por `/api/content` agora entrega as aulas ENEM autorais
dos dois lotes antes de recorrer a textos genéricos. Isso também torna acessíveis
as cinco aulas do lote anterior que já entravam na auditoria canônica, mas não
eram entregues por esse caminho. Publicações e retiradas do banco continuam tendo
prioridade; este trabalho não altera publicação, schema, RLS ou autenticação.

## Verificação e cobertura

- Quatro testes novos: estrutura e originalidade, cálculos independentes dos
  quinze gabaritos, entrega pelo resolvedor offline e compartilhamento restrito
  aos exames registrados, incluindo recusa de IDs e escopos adulterados.
- A auditoria de fontes únicas passou a importar o agregador dos dois lotes;
  nenhuma expectativa de integridade foi removida ou enfraquecida.
- Chromium acessou as cinco respostas reais de `/api/content`, abriu o leitor
  nos modos conteúdo, explicações e atividades e respondeu às quinze questões.
  Sem exceções ou rolagem horizontal em 320, 375, 768 e 1440 px, nos dois temas.
  A rota de ensaio foi removida.
- Na base isolada deste lote: 6 testes do motor e 568 da aplicação aprovados;
  arquivos alterados sem ocorrências de lint. A validação conjunta com a revisão
  visual é registrada no relatório de qualidade.

No catálogo editorial ENEM, a auditoria passou de 14 para 19 referências
aprofundadas entre 896 temas; continuam faltando 877. Essa contagem não descreve
o número de habilidades oficiais nem certifica preparação completa para a prova.
Também continuam pendentes a revisão docente e a validação de publicações reais
em homologação. Não houve publicação em produção.
