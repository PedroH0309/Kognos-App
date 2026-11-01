# Especificação de IA — FOCO

## 1. Princípio

A IA é uma camada de assistência integrada aos módulos, mas não é a fonte de verdade do produto. O motor determinístico controla pontuação objetiva, gabarito, XP, domínio calculado, agendamento e permissões. A IA pode explicar, gerar rascunhos, resumir e sugerir; não pode alterar silenciosamente resultados ou publicar conteúdo.

## 2. Funcionalidades por etapa

| Recurso | Entrada permitida | Saída esperada | Regra de segurança/qualidade |
|---|---|---|---|
| Tutor contextual | Dúvida, disciplina, assunto, nível e trechos aprovados | Explicação gradual, exemplo, checagem | Priorizar fontes do catálogo; indicar incerteza |
| Explicação de erro | Questão, resposta do aluno, resolução e habilidade | Diagnóstico pedagógico provável e nova abordagem | Não rotular o aluno; separar erro observado de hipótese |
| Plano de estudo | Prioridades e resultado do motor determinístico | Justificativa em linguagem natural | A IA não escolhe nem altera o cronograma-base |
| Rascunho de questão | Objetivo, formato, dificuldade e matriz | Item candidato, gabarito e justificativa | Sempre entra em rascunho para revisão editorial |
| Flashcards | Conteúdo aprovado e objetivo de aprendizagem | Cartões pergunta/resposta | Revisão editorial e deduplicação antes de publicar |
| Feedback de redação | Texto e rubrica ativa | Feedback por critério com evidência textual | Nota preliminar; não oficial; revisão humana futura |
| Relatório | Métricas agregadas do estudante | Síntese, tendências e próximos passos | Não inferir dados ausentes; mostrar amostra e período |

## 3. Fluxo obrigatório de chamada

1. Validar sessão e obter o `user_id` no servidor.
2. Validar tamanho/formato da entrada e modalidade do recurso.
3. Verificar cota diária, limite de frequência e custo estimado.
4. Coletar somente contexto educacional necessário; excluir dados de conta e informações sensíveis sem necessidade.
5. Recuperar exclusivamente materiais publicados/aprovados, quando o recurso exigir contexto documental.
6. Montar prompt versionado com separação entre instruções do sistema, contexto recuperado e entrada do usuário.
7. Chamar o provedor por adaptador server-side com timeout e cancelamento.
8. Validar a saída contra schema; rejeitar conteúdo malformado ou fora do escopo.
9. Registrar provedor, modelo, tokens, custo estimado, recurso e status; não persistir prompt/resposta integral por padrão.
10. Retornar resposta com aviso de caráter assistivo e fonte(s) consultada(s), quando aplicável.

## 4. RAG e conteúdo

- Usar somente materiais com status publicado e direitos de uso registrados.
- Metadados de cada fragmento: documento, versão, editor, modalidade, disciplina, assunto, licença/procedência e data de revisão.
- Começar com busca textual; adicionar embeddings/pgvector quando o corpus e a avaliação justificarem.
- Exibir referências que permitam ao estudante abrir o material de origem.
- Tratar texto recuperado como dado não confiável: nunca permitir que instruções contidas no material substituam as regras do sistema.
- Se não houver fonte adequada, informar que a explicação é conhecimento geral do modelo e não inventar uma referência.

## 5. Avaliação e qualidade

Cada recurso terá conjunto de casos de avaliação antes de ser liberado:

- correção factual e aderência ao currículo;
- clareza para níveis diferentes;
- adequação da dificuldade;
- ausência de respostas fabricadas e citações falsas;
- tratamento de ambiguidade e dados insuficientes;
- não fornecer diretamente o gabarito durante uma avaliação ativa;
- não produzir conteúdo discriminatório, humilhante ou que induza dependência.

Conteúdo gerado para o catálogo, questões, gabaritos e flashcards não será publicado automaticamente.

## 6. Privacidade e menores

- A chamada deve enviar o mínimo de dados necessário e nunca enviar e-mail, telefone, identificadores externos ou dados familiares ao provedor de IA sem necessidade específica e base legal documentada.
- Política de retenção e exclusão precisa cobrir prompts, respostas, uploads, logs, backups e provedores terceirizados.
- Não usar dados de estudantes para treinamento do provedor por padrão; qualquer uso futuro requer avaliação jurídica, transparência e escolha válida.
- O produto atende adolescentes e pode alcançar crianças; o melhor interesse deve prevalecer nas operações de tratamento. Revisão jurídica e avaliação de impacto/risco são gates antes do beta público.
- A IA não diagnostica TDAH, dislexia, autismo, transtornos ou qualquer condição de saúde.

## 7. Custos e resiliência

- Configurar limite por usuário, por recurso, por dia e por mês.
- Registrar tokens/custo estimado e oferecer limites administráveis por plano.
- Definir limites de entrada e saída, timeout e retentativas limitadas com backoff.
- Circuit breaker/fallback quando o provedor estiver indisponível.
- O estudante continua podendo estudar, revisar e fazer simulados sem IA.
- Provedor/modelo configurável por ambiente; chaves somente em segredos server-side.
