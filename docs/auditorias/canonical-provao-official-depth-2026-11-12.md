# Auditoria Kognos — fontes oficiais do Provão (12/11/2026)

A contagem `allUniqueDeepCanonicalIds` em `canonicalReuseAudit()` passa a considerar a união dos IDs das aulas aprofundadas encontradas em `curriculumTopics` **e** nas folhas oficiais de `provaoTopics`. A identidade da fonte oficial é `courseId(subject, topic)`. Um mesmo ID é contado apenas uma vez, mesmo que esteja em ambos os catálogos.

**Motivação:** folhas do Provão podem ter aulas autorais profundas e não aparecer no catálogo editorial multi-exame. A métrica anterior podia subcontar o repertório autoral existente. O teste de regressão compara o contador com a união independente das duas fontes.

**Limites:** esta correção não cria aliases semânticos, não altera cobertura por exame, não elimina registros persistidos, não copia aulas e não certifica equivalência de escopo. As associações de Citologia, Células/organelas/membranas e Célula e saúde permanecem parciais. Os números atuais dependem de executar a auditoria no commit e não são inferidos de 1.512 títulos ou 364 itens históricos.

**Validação:** teste adicionado em `canonical-lesson-reuse.test.ts`; CI do commit final ainda pendente de confirmação no momento deste registro. Sem homologação docente. Não fazer merge ou deploy sem revisão.

## Lote adicional — cobertura por série oficial (12/11/2026)

A função `officialProvaoGradeCoverage()` inventaria separadamente 1ª, 2ª e 3ª séries diretamente de `provaoTopics`, preservando entradas oficiais e seus códigos. Para cada folha, resolve `courseId(subject,topic)` e exige `deepProvaoLesson()` para registrar cobertura profunda. Retorna `totalEntries`, `deepEntries`, `missingEntries`, IDs canônicos únicos e códigos oficiais ainda pendentes. Uma aula comum a duas séries permanece uma única identidade canônica; a contagem de entradas por série não é uma contagem de aulas autorais distintas.

O teste de regressão reconcilia cada série com as folhas originais, verifica unicidade dos IDs e impede que a nova métrica seja confundida com aprovação de aliases não exatos. Nenhum novo alias integral foi aprovado; nenhuma aula profunda foi escrita; nenhuma duplicação persistida foi eliminada. Os totais executados e o resultado de CI ainda precisam ser verificados no commit final. Sem mudanças de schema, RLS, Auth, rotas, progresso ou gabaritos. Meta de 20/11 ainda em risco; revisão pedagógica pendente.

## Regressão adicional — identidade entre exames (12/11/2026)

O teste `every mapped exact cross-exam reference resolves the identical authored lesson and excludes unrelated exams` percorre todos os mapeamentos profundos existentes, agrupa por ID canônico e verifica, para cada grupo compartilhado, identidade das seções e tarefas da aula resolvida, além da ausência de herança por exames sem vínculo. Ele protege o compartilhamento já existente, mas **não aprova equivalências não exatas**. Novos aliases integrais: 0; novas aulas profundas: 0; duplicações persistidas removidas: 0. A cobertura anterior/nova permanece inalterada; totais executados e CI ainda precisam ser confirmados. Material original Kognos, não oficial e sem homologação docente.
