# Unified study catalogue

SubjectDashboard, LearningTrails, the curriculum reader and AI practice now share the union of registered exam topics. Existing introductory lesson IDs and stored course IDs remain stable. The learning entries include the 80 original introductions and the expanded programme indices. Grouped topics and their granular subtopics can coexist to preserve historical references.

The catalog is an original editorial study index, not an audited transcription of all official competencies. ENEM, FUVEST and UNESP/VUNESP share a broad high-school preparation base, including complementary topics. ETEC uses a fundamental-school base. The SARESP institution key now exposes the Provão Paulista high-school programme by series; legacy fundamental-school topics are retained internally for historical compatibility. See PROVAO_PAULISTA_2026.md. Edition-specific references remain linked in each course reader. The FUVEST reading list applies to 2027.

New entries are metadata: they are never displayed as completed lessons with generic placeholder prose. Opening one loads the existing curriculum service; published lessons render immediately, otherwise the student can explicitly authorize generation and independent automatic review. This requires the existing content migrations, authentication and configured AI providers. Content generation is not pre-run by this change and consumes the configured provider allowance when requested.

The default subject panel shows the searchable topic list. Exam filters apply consistently to counts, next-topic recommendations and navigation. New topics use explicit lesson IDs for server-regraded AI practice and progress; legacy broad-topic questions are not silently reassigned. Original demo review scheduling remains limited to real demo questions. Planner coverage priority is normalized so larger catalogues do not outrank actual errors solely by their size.

Validation: all registered exam subjects/topics must be reachable in the learning catalogue, resolve a course, and have a server-valid generation reference. A regression checks AI answers on newly added topics are included in subject progress. No schema changes.
