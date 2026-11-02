-- Kognos 0014: make the existing AI question bank and editorial source catalogue
-- consistent with the five exam IDs supported in the UI and weekly exams.
-- Run AFTER 0013. Does not delete or recreate any user questions, attempts,
-- source evidence, exam reservations, or profiles.
--
-- 0005/0006 originally allowed only ENEM, ETEC, FUVEST. The weekly exam
-- functions added SARESP and VUNESP, but those old CHECK constraints still
-- block new rows for them. Keep all institution CHECK constraints in sync.

begin;

alter table public.kognos_ai_questions
 drop constraint if exists kognos_ai_questions_institution_check;
alter table public.kognos_ai_questions
 add constraint kognos_ai_questions_institution_check
 check (institution in ('enem','etec','fuvest','saresp','vunesp'));

alter table public.kognos_exam_sources
 drop constraint if exists kognos_exam_sources_institution_check;
alter table public.kognos_exam_sources
 add constraint kognos_exam_sources_institution_check
 check (institution in ('enem','etec','fuvest','saresp','vunesp'));

-- No client permissions or policies changed: the private bank/source rows
-- remain accessible only through authenticated server handlers.
notify pgrst, 'reload schema';
commit;
