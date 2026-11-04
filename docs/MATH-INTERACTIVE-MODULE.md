# Matemática Interativa — Módulo A–H

Este módulo adiciona **oito laboratórios autorais** aos conteúdos já mapeados do Kognos. Eles complementam a aula existente e não alegam cobrir integralmente o Provão Paulista ou outros editais.

| Ordem | Laboratório | Manipulação real |
|---|---|---|
| A | Notação científica | Mantissa, expoente, conversão decimal, soma, subtração, produto e quociente |
| B | Porcentagem e razão | Taxa e valor-base, desconto/aumento, visualização de percentual e desafio |
| C | Equações | Coeficientes de 1º e 2º graus, discriminação, resolução guiada e conferência da raiz |
| D | Funções e gráficos | Plano cartesiano SVG, reta e parábola, coeficientes e avaliação em x |
| E | Geometria plana | Quadrado, retângulo, triângulo retângulo, círculo, área e perímetro |
| F | Probabilidade | Urna com duas cores, sorteios com reposição e frequência relativa |
| G | Estatística | Dados editáveis, média, mediana, moda, amplitude, desvio-padrão e gráfico de frequências |
| H | Trigonometria | Ângulo, hipotenusa, catetos e seno, cosseno, tangente e radianos |

## Onde acessar

- **Trilhas de aprendizagem e Minhas disciplinas**: assuntos curriculares publicados/mapeados de Matemática mostram a aba `Exploração interativa`, ao lado de Aula, Materiais e Evolução da habilidade. A aba é exibida apenas se o tema puder ser associado com segurança a um dos oito laboratórios.
- **Introduções legadas**: aulas introdutórias de Matemática com um dos oito temas mostram a seção recolhível `Exploração interativa de Matemática`.
- Os laboratórios são carregados sob demanda para não trazer todas as simulações para o carregamento inicial.
- Nenhuma migração de banco foi criada. IDs de aula, perfil e evolução existentes são preservados.

## Integridade dos dados

- Todas as interações são cálculos no navegador. Não enviam respostas para o backend, não atribuem nota e **não modificam o mapa de domínio**.
- O único fluxo de prática avaliada permanece no painel **Evolução da habilidade**, com **Praticar mais 10 questões** (3 básicas, 4 intermediárias, 3 avançadas) e histórico armazenado pelo servidor.
- O roteamento de laboratório exige a disciplina `Matemática`. Temas fora do conjunto implementado **não** recebem uma simulação incorreta. O texto do edital/descrição é utilizado somente como sinal contextual para o laboratório.
- Gráficos são esquemáticos e baseados nos valores controlados. No laboratório de probabilidade, cada sorteio é com reposição; frequência experimental não equivale à chance teórica.
- Exercícios de exploração são diferentes de respostas oficiais e não representam notas do Provão Paulista.

## Validação

Executar na raiz do projeto:

```powershell
npm install
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
```

Testar no navegador: abrir Notação científica e alterar expoente, abrir outras sete explorações, trocar de matéria, navegar entre Aula/Exploração/Materiais/Evolução e confirmar que o histórico não muda após interagir nos laboratórios. Conferir no celular a 390 px, tablet e desktop; respeitar modo escuro e controles por teclado.

**Limite atual:** laboratório exploratório não corrige automaticamente o texto livre de uma atividade, e não cobre conteúdos matemáticos que não coincidam com as oito famílias acima. Isto não é geração de oito aulas completas novas; as explicações já existentes permanecem identificadas como introdução, aula publicada ou tema mapeado.
