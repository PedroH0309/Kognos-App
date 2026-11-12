# Mapeamentos canônicos oficiais do Provão — 12/11/2026

Material Kognos autoral, não oficial, sem homologação docente.

`officialProvaoCanonicalGradeMappings()` expõe apenas folhas oficiais com `deepProvaoLesson()` existente e ID coerente com `courseId(subject, topic)`. Cada referência mantém série, código oficial, disciplina e título exato. Folhas iguais em séries diferentes reutilizam a mesma instância de seções e questões; a referência não promove associação parcial a cobertura integral nem modifica histórico, banco, Auth, RLS ou rotas.

Teste: `canonical-lesson-reuse.test.ts` reconcilia as entradas mapeadas com `officialProvaoGradeCoverage()`, valida proveniência e identidade de seções e questões. O teste não constitui revisão pedagógica.

Este lote não cria aliases semânticos entre títulos distintos, não remove registros persistidos e não adiciona aulas profundas. Totais de cobertura anterior/nova devem ser coletados pela execução da auditoria e não inferidos do número de commits. Revisar escopo e profundidade contra edital antes de aprovar novos aliases. CI, TypeScript, build e segurança permanecem pendentes até execução confirmada.
