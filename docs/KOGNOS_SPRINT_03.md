# Kognos v0.3 — Perfil, identidade, segurança e primeiros exercícios

## Entregue neste incremento

- **Conta:** foto (local para visitante ou armazenamento privado em Supabase Storage), nome, @usuário único (RLS + restrição UNIQUE), biografia e acesso rápido pelo cabeçalho e pela sidebar.
- **Segurança:** alteração de e-mail via confirmação de Auth, alteração de senha, ver/ocultar apenas senha nova digitada, recuperação por e-mail, login com link para recuperar senha, saída da conta.
- **Aparência:** tema claro e escuro persistente, navegação inferior no mobile, menu lateral e busca local por módulos.
- **Mascote Kog:** SVG original no chat e na área lateral do tutor; persona pedagógica com identidade original, tom professoral e equilibrado.
- **Objetivos múltiplos:** onboarding permite marcar modalidades simultâneas, inclusive aprendizado pessoal; preferências de TDAH/dislexia seguem opcionais e são convertidas apenas em ajustes de interface e didática.
- **Banco demonstrativo:** 20 questões originais identificadas como tal, correção comentada, prática por matéria, simulado e resumo de acertos.
- **Planejador local:** atividades, calendário por data, marcar concluídas, excluir, gerar sugestões de semana sem duplicar datas com sugestões existentes.
- **Dashboard:** números reais dos exercícios e tarefas deste navegador, nunca métricas inventadas.
- **Perfis autenticados:** identificação por UUID no armazenamento de atividades DEMO. Ainda não sincroniza esses exercícios.

## Não confundir com lançamento de produção

- A nuvem requer Supabase URL/publishable key, service role somente no servidor e aplicação das migrations 0001, 0002, 0003.
- A integração de IA exige chave NVIDIA ativa server-side e escolha de modelo disponível na conta. Credenciais enviadas em conversas devem ser revogadas e substituídas.
- O banco de 20 questões é demonstração local e NÃO um acervo de questões oficiais; o motor definitivo de avaliação com chaves privadas e sincronização ainda depende de implementação.
- A aplicação em desenvolvimento ainda precisa de testes de integração de Auth, Storage, RLS, iOS Safari, WCAG e build completo.
- Não há recuperação da senha existente: a senha só pode ser alterada ou redefinida. O controle “Mostrar” revela exclusivamente o texto digitado no formulário.
- Não há histórico de chat persistente nem correção automatizada de redações nesta versão.

## Validação local

`npm test`: 6 testes do motor educacional e 10 testes dos módulos de perfil, tutor e banco de questões demonstrativo.

Todos os arquivos `.ts` / `.tsx` passam no parser TypeScript. A instalação npm/build Next.js não foi validada no ambiente de geração devido à indisponibilidade do registro npm; essa verificação precisa ser feita após instalar dependências num ambiente com rede.

## Prioridades seguintes

1. Aplicar migrations e testar isolamento entre 2 usuários reais de Supabase (perfis, avatars e quota).
2. Persistir o motor de exercícios no Supabase com sessões e correção pelo servidor.
3. Evoluir o calendário e o plano adaptativo com base nos erros e no desempenho.
4. PWA manifesto/icons, suporte offline limitado, auditoria de acessibilidade e mobile.
5. Importar conteúdo licenciado/publicado oficialmente com procedência verificada; expandir banco e trilhas.
