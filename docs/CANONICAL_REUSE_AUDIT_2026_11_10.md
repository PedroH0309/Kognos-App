# Auditoria de reutilização curricular — 10/11/2026

Material autoral Kognos, não oficial, sem homologação docente.

## Escopo
O registro `canonical-lesson-reuse.ts` compartilha uma única referência editorial para assuntos de **mesma disciplina e título integral idêntico** presentes em múltiplos exames. A associação usa o ID canônico existente e não altera IDs históricos, progresso, rotas, Supabase ou RLS.

A auditoria `canonicalReuseAudit()` agora distingue:
- entradas e títulos exatos por exame;
- grupos de aulas profundas com vínculo entre provas e vínculos por exame;
- tópicos curriculares com/sem aula profunda;
- referências compartilhadas que evitariam cópias futuras, **não** registros duplicados já apagados;
- exclusões reais de duplicações persistidas nesta mudança: **zero**;
- aliases semânticos de nomes diferentes aprovados: **nenhum**;
- associações parciais aprovadas: **nenhuma**.

As quantidades variáveis são calculadas a partir dos catálogos no código, e não inferidas de totais históricos. `unresolvedSemanticCandidates=0` significa **não inventariados**, não ausência de ambiguidades.

## Limitações e próximos lotes
Não há equivalência semântica validada para títulos diferentes; comparar escopo, série, objetivos, profundidade e fontes antes de aprovar cada alias. Títulos amplos como Citologia não herdam automaticamente uma aula parcial. Separar complementos específicos de prova quando necessários. Não contabilizar o compartilhamento de referências como remoção de dados persistidos.

Os testes verificam identidade de capítulos e questões entre provas compatíveis, isolamento de exames não relacionados e consistência das métricas. CI deve validar unitários, segurança de dois usuários, design, TypeScript e build. Sem merge nem deploy antes da revisão.
