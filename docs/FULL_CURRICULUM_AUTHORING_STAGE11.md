# Etapa 11 — Repertório aprofundado por disciplina

## Escopo
Meta: uma aula substantiva, específica e resolvida para cada tema do catálogo de ENEM, ETEC, FUVEST, VUNESP e Provão Paulista. A base granular contém 683 entradas do ensino médio e 201 do fundamental, antes de deduplicar exames e acrescentar itens específicos do Provão Paulista.

Esta etapa NÃO completa todo o repertório: há 20 aulas específicas já implementadas nesta branch (5 Matemática + uma em cada uma das outras 15 disciplinas), mais um processo para gerar e armazenar lotes por tema. Demais temas mantêm materiais introdutórios da Etapa 10 e não devem ser apresentados como aulas integralmente aprofundadas.

## Funcionalidades
- Deep math lessons: cinco assuntos, 15 capítulos e 30 atividades resolvidas.
- Deep cross-subject lessons: quinze disciplinas adicionais, 45 capítulos e 90 atividades próprias.
- Produção externa com Gemini ou Groq, com um prompt dedicado a cada tópico e metadados derivados do catálogo.
- Validação obrigatória de três seções, explicações, exemplos resolvidos, seis atividades distribuídas pelas dificuldades, pistas, soluções, não repetição literal e rótulos de revisão.
- Arquivos por tema em content/generated-lessons. Uma compilação gera apps/web/src/lib/generated-deep-lessons.ts para acesso offline sem chamada de IA ao abrir a aula.
- Retomada incremental, sem sobrescrever aulas produzidas e validadas. Lotes e quotas podem ser ajustados.

A revisão estrutural não equivale à revisão pedagógica de cada fato, exercício ou explicação. Autoria de material assistido por IA deve permanecer identificada. O campo review continua introductory, nunca editor automaticamente. Aulas publicadas/retiradas no Supabase mantêm precedência.

## Diagnóstico sem API
Na raiz do projeto:

    npm run content:audit

Esse comando mostra o número real de assuntos no catálogo, os aprofundados manualmente, os salvos offline e os pendentes.

## Autoria por lotes
Configure GEMINI_API_KEY ou GROQ_API_KEY localmente, sem enviar a chave ao frontend, a logs ou ao repositório. Exemplo em PowerShell:

    $env:GEMINI_API_KEY = "sua-chave-local"
    npm run content:generate -- --provider gemini --subject "Biologia" --limit 10

Prosseguir gradualmente por todos os temas, mantendo o estado:

    npm run content:generate -- --provider gemini --limit 10

Para percorrer tudo enquanto a API permitir e as quotas comportarem:

    npm run content:generate -- --provider gemini --all

Usar --model para alterar o identificador do modelo; --retries e --pause-ms ajustam tentativas e intervalo. Ao gerar, o conteúdo fica gravado no repositório local, sem geração na experiência de leitura.

Para reconstituir o índice estático:

    npm run content:rebuild

Para validar:

    npm test
    npm run test:content-db
    npm run test:design
    npm run typecheck
    npm run build

## Ações no GitHub
O workflow manual de autoria fica disponível após inclusão do arquivo na branch padrão do GitHub. Requer segredos configurados no Actions e execução em branch de trabalho (nunca diretamente na main). Limita a 50 aulas por execução, recompila o índice, executa todos os testes e comita o material na branch.

A possibilidade de utilização gratuita depende da quota e do plano do provedor; nenhuma API gratuita garante geração ilimitada de centenas de aulas. Modelos, limites e preços mudam.

## Definição de pronto
Somente declarar cobertura total quando o diagnóstico indicar zero pendências, os conteúdos forem específicos e substanciais, a consistência pedagógica for revisada, o leitor e os testes funcionarem no celular e desktop e o Supabase não tiver sido comprometido. A revisão humana é necessária antes de declarar aulas homologadas.
