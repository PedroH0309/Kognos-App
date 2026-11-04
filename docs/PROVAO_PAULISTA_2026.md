# Provão Paulista 2026 curriculum correction

The student-facing SARESP selection now identifies Provão Paulista (high school), with explicit first-, second- and third-year filters in subjects, trails and the course library. It no longer presents the fundamental-school Science index as the Provão programme.

Source: https://provaopaulistaseriado.vunesp.com.br/ → Edital 10/2026 → Annex VII, PDF pages 35–52. The source PDF is linked from every relevant lesson. SHA-256 of the downloaded PDF: 6c6337c983c676f801afdab906d987be2792f308b92aeeb516ca05de82b921a1.

739 numbered leaf entries were transcribed across the three series (192 / 187 / 360). Parent items become units; English standalone numbered skills remain study entries. Four original summaries of the writing criteria A–D in Annex VI (PDF page 33) are added exclusively to series III, resulting in 364 entries there. The entries overlap between series and are not 743 distinct lessons. Full descriptions, item numbers, units and PDF pages are retained; long dropdown titles are abbreviated to respect the existing generation API limit. Prompts receive the full description.

The database institution key remains `saresp` to preserve existing attempts, generated questions and SQL compatibility. The legacy fundamental topics remain accepted internally for historical records; `learningCatalogForExam` and `studySubjectsForExam` expose the high-school subset for new study. No database migration or historical reassignment is performed. Grade filters are screen-local; historical progress for a shared topic is shared across series. This change does not implement grade-specific weekly exam scoring or generate all lessons in advance.

The source programme metadata is public regulatory material. Kognos explanations and exercises remain original AI-developed material, reviewed automatically, not official exam questions. Course generation still requires the existing configured backend and user authorization. Generated courses now use the skill-evolution practice panel in the app.

Prepara SP was opened in the browser, but sign-in returned “Email ou senha incorretos”. Its private catalog was not accessed or copied. This correction is grounded in the official 2026 programme, not a claimed reproduction of its internal interface.

Validation: unit regressions for each series, subject differences, every official topic's visibility and validated AI practice, and preservation of old SARESP identifiers. Existing design and unit suites also run in CI.
