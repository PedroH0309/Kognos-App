-- Catálogo inicial de modalidades. A configuração específica de cada edital/prova
-- deve ser cadastrada e revisada pelo painel editorial antes de gerar simulados fiéis.
insert into public.exam_profiles (slug, name, category, description, configuration, is_active)
values
  ('enem', 'ENEM', 'enem', 'Preparação para o Exame Nacional do Ensino Médio.', '{"blueprint_status":"pending_review"}'::jsonb, true),
  ('vestibulares', 'Vestibulares', 'vestibular', 'Perfil genérico para vestibulares; cada instituição terá configuração própria.', '{"blueprint_status":"per_institution"}'::jsonb, true),
  ('etec', 'ETEC', 'technical', 'Preparação para processos seletivos de escolas técnicas estaduais.', '{"blueprint_status":"per_edital"}'::jsonb, true),
  ('provas-escolares', 'Provas escolares', 'school', 'Trilhas e avaliações por etapa escolar e instituição.', '{"blueprint_status":"customizable"}'::jsonb, true),
  ('concursos', 'Concursos', 'civil_service', 'Perfil genérico; área, cargo e edital precisam ser configurados.', '{"blueprint_status":"per_edital"}'::jsonb, true),
  ('olimpiadas-cientificas', 'Olimpíadas científicas', 'olympiad', 'Perfil genérico; regras e níveis variam por olimpíada.', '{"blueprint_status":"per_competition"}'::jsonb, true)
on conflict (slug) do update set
  name = excluded.name,
  category = excluded.category,
  description = excluded.description,
  configuration = excluded.configuration,
  is_active = excluded.is_active,
  updated_at = now();

insert into public.subjects (slug, name, area, education_stages, description, is_active)
values
  ('matematica', 'Matemática', 'Matemática', '{fundamental_2,medio,tecnico}', 'Matemática escolar e raciocínio quantitativo.', true),
  ('lingua-portuguesa', 'Língua Portuguesa', 'Linguagens', '{fundamental_2,medio,tecnico}', 'Leitura, interpretação, gramática e produção textual.', true),
  ('redacao', 'Redação', 'Linguagens', '{medio,tecnico,superior}', 'Produção textual e argumentação.', true),
  ('fisica', 'Física', 'Ciências da Natureza', '{medio,tecnico}', 'Conceitos e aplicações de física.', true),
  ('quimica', 'Química', 'Ciências da Natureza', '{medio,tecnico}', 'Conceitos e aplicações de química.', true),
  ('biologia', 'Biologia', 'Ciências da Natureza', '{medio,tecnico}', 'Ciências biológicas.', true),
  ('historia', 'História', 'Ciências Humanas', '{fundamental_2,medio}', 'História geral e do Brasil.', true),
  ('geografia', 'Geografia', 'Ciências Humanas', '{fundamental_2,medio}', 'Geografia física, humana e do Brasil.', true),
  ('filosofia', 'Filosofia', 'Ciências Humanas', '{medio}', 'Filosofia e pensamento crítico.', true),
  ('sociologia', 'Sociologia', 'Ciências Humanas', '{medio}', 'Sociedade, cultura e política.', true),
  ('ingles', 'Inglês', 'Linguagens', '{fundamental_2,medio}', 'Leitura e interpretação em língua inglesa.', true),
  ('raciocinio-logico', 'Raciocínio lógico', 'Geral', '{medio,tecnico,superior,adulto}', 'Lógica, padrões e resolução de problemas.', true),
  ('conhecimentos-gerais', 'Conhecimentos gerais', 'Geral', '{medio,tecnico,superior,adulto}', 'Conteúdos específicos definidos por prova ou edital.', true)
on conflict (slug) do update set
  name = excluded.name,
  area = excluded.area,
  education_stages = excluded.education_stages,
  description = excluded.description,
  is_active = excluded.is_active;
