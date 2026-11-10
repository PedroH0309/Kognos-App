# Kognos — navegação, leitura, carregamento e Kog (2026-11-08)

## Ajustes solicitados

**Trilhas** foi removido da barra lateral e do atalho do painel inicial. Os links internos que antes abriam uma aula em Trilhas passam a abrir o mesmo assunto em **Estudos**. Os acessos antigos salvos na sessão são redirecionados de forma compatível, sem apagar rascunhos, IDs ou dados de estudo. O módulo legado permanece no código por compatibilidade, mas deixa de ser um destino exposto na navegação.

**Leitura de aula:** ao chegar ao final da aba `Aula em texto`, um `IntersectionObserver` acompanha um marcador posicionado depois do conteúdo real. A detecção marca a leitura automaticamente uma única vez, sem marcar exercícios como corretos, registrar domínio ou pular as verificações. A opção manual continua disponível para tecnologias assistivas e navegadores sem `IntersectionObserver`. A próxima aula permanece bloqueada até a leitura e as alternativas da aba `Atividades` estarem preenchidas.

**Botão do Kog:** o rodapé da aula mantém **um botão** `Explicar com o Kog`. O botão extra de `CurriculumRoom` aparece somente nas abas `Materiais` e `Evolução`, nas quais o rodapé do conteúdo não é exibido. Não há alteração de sessão, rota de tutor nem contexto de questões.

**Carregamento:** foi criado `KognosLoadingOverlay`, um indicador circular com rotação contínua, superfície desfocada e descrição acessível para leitores de tela. Os textos visíveis de `Carregando...` foram substituídos nos carregamentos dos módulos sob demanda, na inicialização, na consulta de aulas, no catálogo/revisões e ao processar a resposta do Kog. O indicador respeita `prefers-reduced-motion` e o modo de menor distração do Kognos.

**Calendário:** no resumo diário sem atividades, não aparece mais o indicador confuso `0/0`; o status informa `0 — sem atividades`. O anel e a grade de métricas foram adaptados a diferentes larguras e temas.

**Animações:** menus, botões de ação, atalhos, cards do calendário e estados interativos receberam transições de cor, elevação e confirmação de pressão, com foco visível preservado e desativação quando o movimento reduzido estiver ativo.

## Kog: diagnóstico real

A captura mostra `Biblioteca local · sem IA`. A consulta `/api/ai-status` utiliza `publicAIReadiness`: um tutor de conversação não funciona se as credenciais necessárias não existirem **no servidor**. Essa situação não pode ser corrigida criando ou publicando uma chave fictícia, transferindo uma chave para o navegador, desativando segurança ou simulando respostas de IA.

A interface mostra agora uma descrição coerente com o problema, oferece **Verificar novamente** e amplia a correspondência segura com guias de estudo já escritos: apenas uma correspondência curricular não ambígua é usada. O aviso de privacidade diferencia claramente um provedor configurado do modo local. O tutor continua limitado ao conteúdo educacional e preserva autenticação, quotas e regras de segurança.

Para ativar efetivamente a conversação, o responsável pelo deploy deve configurar `GEMINI_API_KEY` ou `GROQ_API_KEY` como segredo na hospedagem, além das configurações exigidas do Supabase. Nenhuma chave foi incluída no repositório. A disponibilidade das APIs externas não pode ser garantida por testes de interface.

## Validação

`tests/kognos-usability-kog-loading-scroll.test.mjs` verifica os fluxos anteriores, com testes existentes adaptados à navegação e ao novo callback de leitura. O PR deve ficar em rascunho e não sofrer merge/deploy até aprovação da CI e revisão visual.
