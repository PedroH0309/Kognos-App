# Kognos — Etapa 3: Laboratórios de Física, Química e Biologia

## Escopo desta entrega

Adicionados **12 laboratórios originais** (4 por disciplina) à aba `Exploração interativa` dos conteúdos mapeados do Kognos. Todos rodam **no navegador**, com componentes carregados sob demanda, sem chamadas a provedor de IA. Esta entrega não afirma cobrir todos os tópicos das três disciplinas.

Referência curricular pública: [Edital SEDUC nº 10/2026 — Provão Paulista, Anexo VII](https://stcdndev.blob.core.windows.net/lib/SEED2602/Edital-n-10---Provo-Paulista-2026-d8543432b23b459c88a1a77a19a6b83d.pdf). Conteúdo explicativo e experiências são autorais; não reproduzem questões oficiais.

## Laboratórios implementados

| Disciplina | Laboratório | Conteúdos e manipulação |
|---|---|---|
| Física | Movimento uniformemente variado | v₀, aceleração e tempo; deslocamento e velocidade, gráfico s(t) |
| Física | Ondas | Amplitude, frequência, λ, fase; T=1/f e v=λf |
| Física | Resistores e Lei de Ohm | Tensão, resistência, 1/2 resistores em série ou paralelo; corrente e potência |
| Física | Escalas termométricas | °C, °F e K, visualização esquemática de termômetro |
| Química | Estrutura atômica | Prótons, nêutrons, elétrons e carga; Z, A e espécies iônicas |
| Química | Estequiometria simbólica | Proporção molar 2H₂ + O₂ → 2H₂O e reagente limitante, **apenas cálculo teórico** |
| Química | Diluição | Concentração, volume inicial/final, quantidade de soluto conservada |
| Química | pH/pOH | [H⁺], escalas logarítmicas aproximadas a 25 °C |
| Biologia | Genética mendeliana | Cruzamentos AA/Aa/aa, quadro de Punnett, probabilidades teóricas |
| Biologia | Populações | Curva logística com N₀, K, r e tempo |
| Biologia | Pirâmide ecológica | Energia dos produtores e percentual de transferência por nível |
| Biologia | Ciclo celular | G1, S, G2 e mitose, conteúdo relativo de DNA |

Os experimentos só aparecem quando `resolveScienceLab` identifica um dos tópicos adequados. Por exemplo: cinemática → movimento; primeira lei de Ohm → circuito; cálculos estequiométricos → estequiometria; 1ª e 2ª Leis de Mendel → genética. Outros tópicos seguem usando o explorador geral e não recebem simuladores sem correspondência.

## Limites científicos e de experiência

- As fórmulas representam **modelos didáticos idealizados**, não observações ou medições físicas reais.
- Movimento assume aceleração constante; circuitos assumem resistores ôhmicos e fonte ideal; ondas exibem perfil espacial unidimensional ideal.
- Em Química, a reação de formação de água é **somente uma relação matemática de moles**. Não é instrução para combinar, aquecer ou experimentar gases. O modelo não prevê energia, cinética ou segurança de reação.
- pH e pOH seguem a aproximação usual para soluções aquosas diluídas a 25 °C. Representação atômica contabiliza partículas e não simula orbitais reais.
- Genética assume um único gene com dominância completa; probabilidades não garantem resultados individuais nem descrevem heranças complexas.
- A população logística e a transferência trófica são modelos aproximados, não previsões ecológicas. Ciclo celular representa mitose diploide, não meiose.
- O uso da simulação **não é avaliação de aprendizagem**. Nenhum ajuste, cálculo ou exercício cria nota, domínio, tentativa, ranking ou escrita no Supabase. A prática monitorada permanece na aba **Evolução da habilidade** com a rotina existente de 10 questões progressivas.

## Organização do código

- `apps/web/src/lib/science-labs.ts`: cálculos puros, roteamento conservador e tipos.
- `apps/web/src/lib/science-labs.test.ts`: domínio matemático/científico, fórmulas e representatividade no edital.
- `apps/web/src/components/science/ScienceLabCommon.tsx`: componentes reutilizáveis e aviso de não avaliação.
- `apps/web/src/components/science/PhysicsLabs.tsx`, `ChemistryLabs.tsx` e `BiologyLabs.tsx`: 12 experiências.
- `apps/web/src/components/science/ScienceLabPanel.tsx`: registro com carregamento dinâmico por conteúdo.
- `apps/web/src/app/kognos-science-labs.css`: layout responsivo e foco por teclado.
- `apps/web/src/components/CurriculumRoom.tsx`, `LearningTrails.tsx`: integração ao fluxo existente.
- `tests/science-stage3-interactives-design.test.mjs`: barreiras de integração e privacidade.

Nenhum banco, migração, chave, endpoint ou fluxo do Kog é alterado.

## Verificação de entrega

Execute na raiz:

```powershell
npm install
npm test
npm run test:content-db
npm run test:design
npm run typecheck
npm run build
```

Teste no celular e desktop os 12 laboratórios, incluindo os casos limite: aceleração negativa, frequência positiva, circuito em paralelo, Kelvin não negativo, excesso de reagente, diluição sem perda de soluto, cruzamento Aa × Aa e mudança de fase mitótica. Confirme que ao trocar de aula, a simulação é contextual; ao trocar de matéria, não aparece laboratório incorreto; ao voltar para **Evolução da habilidade**, o histórico não muda somente por ter usado as simulações.

### Fora do escopo desta etapa

Simulações de óptica detalhada, gravitação, termodinâmica, eletromagnetismo, equilíbrio químico completo, bioquímica, citologia avançada, fisiologia e biologia evolutiva precisam de módulos pedagógicos próprios e revisão de conteúdo antes de serem tratados como implementados. A presença de uma disciplina no catálogo não representa homologação de todas as aulas.
