# ENEM — prioridade de reutilização e lacunas curriculares (2026-11-13)

## Escopo e fontes

Este lote prioriza **o ENEM** no Kognos e preserva os demais exames.
A matriz de referência do Inep é a fonte institucional a consultar:
https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem

Os títulos de `exam-blueprints.ts` e `exam-syllabus.ts` são uma **orientação editorial do Kognos**; não constituem, por si só, uma transcrição da matriz de competências e habilidades do Inep. Não rotular esses itens como habilidades oficiais. Os conteúdos são autorais e não homologados por docentes. O Provão Paulista tem outro edital, série e escopo; compartilhar conceitos não significa equivalência plena das provas.

## Lote de comparação temática

As cinco relações abaixo são **parciais**, verificadas pelo que aparece expressamente nos títulos/descrições curriculares, e não por similaridade textual automática. O ID de fonte identifica uma única aula autoral quando `deepProvaoLesson` comprova que ela existe; sem fonte profunda resolvida, o item segue como candidato bloqueado. Nenhum deles vira alias integral nem aumenta `canonicalCoverageByExam().enem.deep`.

| Tema editorial ENEM | Fonte do Provão Paulista | Conteúdo aproveitável | Lacuna que impede cobertura integral |
| --- | --- | --- | --- |
| Matemática — Porcentagem e razão | Porcentagem, taxas e índices | Cálculos e interpretação de taxas | Razões, proporcionalidade e modelagem |
| Matemática — Probabilidade e estatística | Eventos equiprováveis ou não; probabilidade simples | Espaço amostral e evento simples | Estatística, amostragem e probabilidade composta/condicional |
| Biologia — Ecologia e impactos ambientais | Principais conceitos de Ecologia | Níveis ecológicos, cadeias e fluxo energético | Impactos antrópicos, poluição e conservação |
| Português — Intertextualidade e argumentação | Intertextualidade e interdiscursividade | Relações entre textos/discursos | Construção e avaliação de argumentos |
| Geografia — Urbanização e globalização | A questão urbana no mundo e no Brasil | Industrialização e metropolização | Globalização, redes mundiais e geopolítica |

Esta lista não é uma equivalência oficial de editais, nem promete que toda fonte tem aula aprofundada já escrita; só a resolução em tempo de execução confirma o reaproveitamento disponível.

## Auditoria reproduzível

A função `enemCanonicalPriorityAudit()` em `apps/web/src/lib/enem-canonical-priority.ts` calcula **a partir do catálogo e dos resolvedores reais**:

- entradas editoriais ENEM e títulos literais distintos, por disciplina;
- entradas com aula aprofundada integral, lacunas reais e IDs canônicos únicos;
- mapeamentos integrais semanticamente revisados, links integrais já compartilhados com outros exames, referências parciais resolvidas;
- tópicos ainda sem cobertura integral mas com fontes parciais; candidatos sem fonte profunda;
- fila de autoria ordenada por reaproveitamento já existente e relevância em mais de um exame.

A função **não produz números fixos**: executar `node --test src/lib/enem-canonical-priority.test.ts` no workspace web para reconciliar os invariantes com os dados presentes no checkout. O CI é autoridade para sucesso de compilação/build, não a mera publicação da branch.

**Base de comparação:** versão `main` imediatamente anterior à branch de 13/11/2026. Este lote registra cinco avaliações parciais (declaradas), zero novos aliases integrais, zero aulas profundas inéditas e zero linhas persistidas apagadas. A quantidade de referências profundas efetivamente resolvidas só deve ser informada depois de medição. Valores antigos do Provão (ex.: 206/364) não são métricas ENEM.

## Próximos lotes

1. Medir `enemCanonicalPriorityAudit()` e priorizar a fila por Matemática, Ciências da Natureza, Linguagens, Humanas e Redação, sem supor que a contagem editorial equivale às 180 questões do exame.
2. Cruzar todos os conteúdos e objetivos das aulas profundas já escritas no Provão, ENEM, FUVEST e VUNESP; promover a alias integral somente quando objetivos, profundidade e escopo coincidirem e houver testes de identidade/isolamento.
3. Completar as lacunas ENEM com autoria original: três capítulos progressivos substanciais, pré-requisitos, três exemplos resolvidos, erros comuns e no mínimo três itens objetivos A–D variados, gabarito indexado, dicas e soluções específicas.
4. Depois do lote ENEM, continuar as demais provas, sem duplicar autoria nem alterar histórico, banco, Auth/RLS ou rotas.
5. Alvo desejado 20/11/2026 (Brasília), condicionado a testes, comparação efetiva de cobertura e revisão pedagógica.

**Restrições:** PR draft para revisão; não fazer merge/deploy sem autorização. Nenhuma API paga, segredo, migração ou exclusão de registros neste lote.
