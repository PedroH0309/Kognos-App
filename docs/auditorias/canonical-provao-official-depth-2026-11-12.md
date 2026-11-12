# Auditoria Kognos — fontes oficiais do Provão (12/11/2026)

A contagem `allUniqueDeepCanonicalIds` em `canonicalReuseAudit()` passa a considerar a união dos IDs das aulas aprofundadas encontradas em `curriculumTopics` **e** nas folhas oficiais de `provaoTopics`. A identidade da fonte oficial é `courseId(subject, topic)`. Um mesmo ID é contado apenas uma vez, mesmo que esteja em ambos os catálogos.

**Motivação:** folhas do Provão podem ter aulas autorais profundas e não aparecer no catálogo editorial multi-exame. A métrica anterior podia subcontar o repertório autoral existente. O teste de regressão compara o contador com a união independente das duas fontes.

**Limites:** esta correção não cria aliases semânticos, não altera cobertura por exame, não elimina registros persistidos, não copia aulas e não certifica equivalência de escopo. As associações de Citologia, Células/organelas/membranas e Célula e saúde permanecem parciais. Os números atuais dependem de executar a auditoria no commit e não são inferidos de 1.512 títulos ou 364 itens históricos.

**Validação:** teste adicionado em `canonical-lesson-reuse.test.ts`; CI do commit final ainda pendente de confirmação no momento deste registro. Sem homologação docente. Não fazer merge ou deploy sem revisão.
