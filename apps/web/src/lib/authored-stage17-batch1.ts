import type {Stage17Spec} from './authored-lessons-stage17.ts';
export const stage17Batch1:Stage17Spec[]=[
  {
    "subject": "Matemática",
    "topic": "Equações do primeiro grau",
    "objective": "Resolver equações lineares por operações equivalentes e interpretar soluções em situações de custo, quantidade e restrições.",
    "sections": [
      {
        "title": "Igualdades, incógnitas e modelos",
        "explanation": "Uma equação representa uma igualdade entre expressões. Resolver 3x+5=20 significa encontrar o valor de x que torna verdadeiros os dois lados: x=5. A incógnita tem significado no problema, como preço, quantidade ou duração, e essa unidade deve aparecer na resposta. Uma equação do primeiro grau pode ser reduzida a ax+b=0 com a diferente de zero. Operações realizadas igualmente nos dois membros preservam a solução, como somar ou subtrair o mesmo valor. A equação não é apenas uma receita de passar números para o outro lado: é uma relação que precisa continuar válida após cada transformação. Em compras, contar pessoas ou produtos impõe ainda restrições sobre valores inteiros e não negativos.",
        "example": "Uma loja cobra R$ 5 por embalagem e R$ 3 por caderno. Se o pedido totalizou R$ 20, então 3x+5=20, e x=5 cadernos.",
        "pitfall": "Alterar apenas um lado da equação ou aceitar valor negativo de quantidade de produtos sem discutir o domínio.",
        "steps": [
          "Defina a incógnita com unidade e traduza separadamente taxa fixa e parcela variável.",
          "Aplique a mesma operação aos dois lados e confira a igualdade por substituição."
        ]
      },
      {
        "title": "Distributividade e casos de solução",
        "explanation": "Parênteses e frações precisam ser tratados corretamente. Em 2(x+3)=16, a distributiva resulta 2x+6=16 e a solução é x=5. Reunir termos semelhantes evita confundir x+x com x². Quando multiplicamos uma equação por um valor, esse fator não pode ser zero se quisermos preservar equivalência sem perder informação. Se houver denominadores com incógnitas, devemos registrar valores proibidos antes de eliminar frações. Equações lineares também podem resultar em identidades, como 2(x+1)=2x+2, válidas para qualquer valor do domínio, ou contradições, como x+2=x+5, sem solução. Portanto, o procedimento não garante sempre uma única resposta: a igualdade final precisa ser interpretada.",
        "example": "A equação 3(x−2)=9 fica 3x−6=9 e 3x=15; logo x=5. Verificando: 3(5−2)=9.",
        "pitfall": "Distribuir multiplicação apenas ao primeiro termo do parêntese ou afirmar solução única diante de igualdade 0=0.",
        "steps": [
          "Expanda parênteses e reúna os termos sem esquecer sinais de subtração.",
          "Classifique a igualdade final como solução única, verdadeira sempre ou contraditória."
        ]
      },
      {
        "title": "A solução precisa respeitar o contexto",
        "explanation": "A modelagem traduz palavras em relações e é etapa essencial da matemática aplicada. Um plano com taxa de adesão de R$ 25 e mensalidade de R$ 15 produz 25+15m=100 para um total de R$ 100; daí m=5 meses no modelo. Como meses de cobrança são contados em inteiros, não se deve arredondar qualquer fração obtida sem examinar o contrato. Em problemas de comprimento, valores decimais podem fazer sentido, e em temperatura valores negativos são possíveis. Uma taxa fixa impede proporcionalidade direta entre quantidade e total, de modo que regra de três não substitui toda equação linear. Antes de apresentar a resposta, verifique se os dados representam o mesmo período, se não faltam taxas e se o valor encontrado realmente responde à pergunta feita.",
        "example": "Uma associação cobra R$ 25 de inscrição e R$ 15 por visita. Se a despesa foi R$ 100, 25+15v=100 fornece v=5 visitas.",
        "pitfall": "Achar que toda equação representa uma proporção ou tratar resultados decimais como contagens inteiras automaticamente.",
        "steps": [
          "Compare as condições e restrições físicas da incógnita com o valor algébrico encontrado.",
          "Substitua a resposta no problema original, justificando unidade e hipótese usada."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Resolva x+7=19 e confirme por substituição.",
        "hint": "Subtraia sete em ambos os lados da igualdade.",
        "solution": "x=19−7=12. A verificação fornece 12+7=19, igual ao segundo membro."
      },
      {
        "level": "basic",
        "prompt": "Resolva a equação 5x=45 por operação equivalente.",
        "hint": "Divida os dois membros por cinco, que não é zero.",
        "solution": "x=45/5=9. A divisão preserva a igualdade porque foi realizada nos dois lados por fator não nulo."
      },
      {
        "level": "intermediate",
        "prompt": "Resolva 2(x+3)=22 aplicando corretamente a distributividade.",
        "hint": "Expanda os parênteses antes de isolar a incógnita.",
        "solution": "2x+6=22, então 2x=16 e x=8. Verificando: 2(8+3)=22."
      },
      {
        "level": "intermediate",
        "prompt": "Uma encomenda custa R$ 6 fixos mais R$ 4 por item. Total R$ 30: quantos itens?",
        "hint": "Use 6+4x=30 para representar o preço.",
        "solution": "4x=24 e x=6 itens. A conta confirma: 6+4×6=30 reais."
      },
      {
        "level": "advanced",
        "prompt": "Classifique as soluções de 3(x+2)=3x+6.",
        "hint": "Distribua e subtraia 3x em ambos os membros.",
        "solution": "Após distribuir, 3x+6=3x+6, chegando a 0=0. Qualquer número real satisfaz a igualdade."
      },
      {
        "level": "advanced",
        "prompt": "Por que a cobrança P=10+7x não é proporcional diretamente a x?",
        "hint": "Observe o preço quando x=0, que inclui taxa fixa.",
        "solution": "A razão P/x não é constante devido aos R$ 10 fixos. É relação linear, mas não proporcionalidade direta."
      }
    ],
    "everyday": {
      "context": "Uma papelaria cobra R$ 10 fixos para entregar um pedido e R$ 7 por unidade comprada. Uma cliente pagou R$ 31 e quer saber quantos itens estavam no pacote.",
      "question": "Como organizar uma equação que considere a taxa fixa e a quantidade adquirida?",
      "answer": "A relação é 10+7x=31. Logo 7x=21 e x=3 unidades; a verificação fornece 10+21=31.",
      "connections": [
        {
          "subject": "Matemática",
          "topic": "Regra de três simples",
          "reason": "A taxa fixa é um exemplo em que a relação linear não constitui proporção direta e exige equação."
        },
        {
          "subject": "Matemática",
          "topic": "Equações, inequações e sistemas",
          "reason": "Operações equivalentes sobre uma incógnita preparam o estudo de sistemas e restrições algébricas."
        }
      ]
    }
  },
  {
    "subject": "Matemática",
    "topic": "Juros compostos",
    "objective": "Calcular montantes a partir de taxas periódicas, diferenciar capital e juros e evitar tratar crescimento nominal como ganho real garantido.",
    "sections": [
      {
        "title": "Porcentagens que se acumulam",
        "explanation": "O regime de juros compostos atualiza a base de cálculo ao fim de cada período: juros anteriores passam a integrar o saldo sobre o qual incide a próxima taxa. Para capital inicial C, taxa periódica i e n períodos sem outros fluxos, M=C(1+i)^n representa o montante final. Se uma quantia de R$ 1.000 aumenta 10% em dois períodos, passa a R$ 1.100 e depois R$ 1.210: o segundo ganho é R$ 110, não R$ 100. O fator 1+i deve corresponder ao período de capitalização, assim como o expoente n. A expressão é modelo hipotético e não inclui automaticamente impostos, tarifas, saques nem mudanças de rentabilidade; não é uma promessa de rendimento em aplicação real.",
        "example": "R$ 500 a 10% por período em dois períodos resultam em 500×1,1²=R$ 605, supondo taxa fixa e ausência de outras operações.",
        "pitfall": "Somar percentuais de períodos sucessivos como se todos incidissem sobre a base inicial ou misturar taxa mensal com número de anos.",
        "steps": [
          "Identifique capital, taxa e quantidade de períodos em uma mesma unidade temporal.",
          "Use o fator multiplicativo 1+i e mantenha as hipóteses de ausência de taxas adicionais."
        ]
      },
      {
        "title": "Juros e montante não representam a mesma quantia",
        "explanation": "O montante M reúne capital C e juros acumulados J, logo J=M−C. Um capital de R$ 2.000 aplicado a 5% por período por três períodos, sob modelo composto simples de cálculo, produz M=2.000×1,05³=R$ 2.315,25, e portanto J=R$ 315,25. Em juros simples, o rendimento de cada período é calculado sobre o capital inicial e o total seria R$ 300. A diferença é uma consequência da atualização de base, não de uma regra que sempre faz qualquer investimento composto ser melhor. Em financiamentos, a presença de prestações, custos e condições contratuais exige outro modelo de fluxos de caixa. A fórmula simples de montante é apropriada apenas quando o problema realmente descreve um saldo acumulado sem movimentos intermediários.",
        "example": "Para R$ 100 a 20% por dois períodos, o montante composto é R$ 144 e o juro total R$ 44, diferente de R$ 40 em juros simples.",
        "pitfall": "Confundir montante com rendimento líquido ou aplicar a fórmula a uma compra parcelada com taxas e pagamentos mensais sem ajustes.",
        "steps": [
          "Calcule M com a potência antes de obter o ganho J pela diferença em relação a C.",
          "Compare regimes usando o mesmo capital e a mesma duração, sem omitir os fluxos de caixa."
        ]
      },
      {
        "title": "Taxa efetiva, inflação e interpretação responsável",
        "explanation": "Taxas de períodos diferentes só podem ser comparadas após conversão coerente. Uma taxa hipotética de 1% ao mês capitalizada doze vezes gera fator 1,01¹²≈1,1268, equivalente a cerca de 12,68% em doze meses, não exatamente 12%. Da mesma forma, inflação altera o poder de compra de um valor monetário: crescimento nominal do saldo não assegura lucro real da mesma magnitude. Para entender uma oferta de crédito, é preciso observar custo efetivo, encargos e prazos, não apenas um percentual destacado em anúncio. Taxas podem mudar no tempo e resultados previstos para muitos anos dependem de pressupostos fortes. Um cálculo escolar demonstra consequências de um modelo; não fornece recomendação financeira individual nem garante condições comerciais reais.",
        "example": "R$ 100 sob taxa hipotética de 1% ao mês por doze meses alcançariam aproximadamente R$ 112,68, sem impostos ou tarifas, pois 100×1,01¹²≈112,68.",
        "pitfall": "Afirmar que 1% ao mês equivale exatamente a 12% ao ano com capitalização ou que ganho nominal sempre aumenta poder de compra.",
        "steps": [
          "Converta taxas entre períodos pela equivalência de fatores multiplicativos.",
          "Analise inflação e encargos antes de chamar uma valorização nominal de retorno real."
        ]
      }
    ],
    "tasks": [
      {
        "level": "basic",
        "prompt": "Qual fator multiplica o saldo a uma taxa de 5% por período?",
        "hint": "Converta 5% para 0,05 antes de somar um.",
        "solution": "O fator é 1+0,05=1,05, aplicado ao saldo atualizado em cada período da capitalização."
      },
      {
        "level": "basic",
        "prompt": "Calcule o montante de R$ 100 a 10% em dois períodos compostos.",
        "hint": "Multiplique duas vezes por 1,10.",
        "solution": "M=100×1,1²=R$ 121. O segundo período adicionou R$ 11, não os R$ 10 iniciais."
      },
      {
        "level": "intermediate",
        "prompt": "Sobre R$ 500 a 10% por dois períodos, quanto corresponde somente aos juros?",
        "hint": "Calcule M e retire o capital inicial.",
        "solution": "M=500×1,1²=R$ 605; os juros totalizam 605−500=R$ 105."
      },
      {
        "level": "intermediate",
        "prompt": "Compare juros simples e compostos de R$ 1.000 a 10% por dois períodos.",
        "hint": "No simples some juros fixos; no composto use 1,1².",
        "solution": "O simples gera R$ 1.200, e o composto R$ 1.210. A diferença de R$ 10 vem da capitalização anterior."
      },
      {
        "level": "advanced",
        "prompt": "Por que 1% mensal capitalizado por um ano supera 12% anual simples?",
        "hint": "Calcule o fator 1,01¹².",
        "solution": "O fator 1,01¹²≈1,1268 representa cerca de 12,68% no ano, porque cada mês incide sobre saldo atualizado."
      },
      {
        "level": "advanced",
        "prompt": "Se o saldo nominal cresceu 6%, podemos afirmar ganho real de 6%?",
        "hint": "Considere a evolução dos preços no mesmo período.",
        "solution": "Não. O ganho real depende da inflação e das condições comparáveis; crescimento nominal sozinho não mede poder de compra."
      }
    ],
    "everyday": {
      "context": "Uma estudante compara saldo de R$ 1.000 sujeito a dois aumentos sucessivos de 10%. Outro aluno apenas soma 10%+10% e prevê R$ 1.200 ao fim dos dois períodos.",
      "question": "Como a atualização do saldo a cada período altera o montante final?",
      "answer": "O fator composto é 1,1²=1,21, gerando R$ 1.210 e crescimento acumulado de 21% sob taxa fixa e sem outras operações.",
      "connections": [
        {
          "subject": "Matemática",
          "topic": "Progressão geométrica",
          "reason": "A multiplicação do saldo por fator constante em cada período constitui progressão geométrica."
        },
        {
          "subject": "Matemática",
          "topic": "Porcentagem e juros",
          "reason": "O conceito de taxa percentual e sua base de incidência é necessário para justificar a capitalização composta."
        }
      ]
    }
  }
];
