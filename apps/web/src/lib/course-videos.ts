import type {CourseVideo} from './course-content.ts';
// Chapter times reproduced as factual navigation metadata, not transcript content.
// Evidence: indexed video description. Not a frame-by-frame audiovisual review.
const mathChapters:[string,number][]=[
 ['Fundamentos numéricos',499],['Frações e potências',1209],['Divisibilidade',2038],['MMC e MDC',2414],['Porcentagem',2822],['Razão',4813],['Proporção',5951],['Proporcionalidade direta e inversa',6584],['Conversão de unidades',8514],['Notação científica',9392],['Regra de três',9810],['Escalas',10413],['Álgebra',11110],['Inequações',12370],['Média aritmética',12657],['Média ponderada',12837],['Moda e mediana',12997],['Variância e desvio padrão',13703],['Gráficos',14307],['Matrizes',15033],['Plano cartesiano',15705],['Função afim',16093],['Sequências',18433],['Progressão aritmética',19264],['Função quadrática',19720],['Função exponencial',21830],['Triângulos',23172],['Semelhança',24663],['Quadriláteros',25797],['Trigonometria',26671],['Circunferência',27744],['Geometria espacial',29306],['Análise combinatória',32330],['Probabilidade',36077],['Probabilidade binomial',36802],['Logaritmos',38383],['Função logarítmica',39830],['Juros compostos',40129],['Função trigonométrica',40991],['Geometria analítica',41649]
];
const evidence='https://videohighlight.com/v/_EmywnyCOM0';
export const assaadMathVideos:CourseVideo[]=mathChapters.map(([title,start])=>({title,author:'Pedro Assaad e Renato Passos',videoId:'_EmywnyCOM0',start,evidenceUrl:evidence,verification:'chapter_index',checkedOn:'2026-11-03'}));
const n=(s:string)=>s.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase();
const rules:[RegExp,number[]][]=[
 [/porcent/,[4]], [/juros|financeira/,[4,37]], [/raza|razo|propor|regra de tres/,[5,6,7,10]], [/escala/,[11]],
 [/operac|numeros|divisib|conjuntos/,[0,1,2,3]], [/frac|decima/,[1]], [/potencia|potencias|radica|notacao/,[1,9]],
 [/equac|algebr|fatoracao|produtos notaveis/,[12,13]], [/afim|primeiro grau|funcoes e graficos|funcoes e modelagem/,[21,24,25,36]], [/quadratica/,[24]],
 [/exponencial|logarit/,[25,35,36]], [/progress|sequenc/,[22,23]], [/trigonom/,[29,38]], [/geometria plana|semelhanca|pitagoras/,[26,27,28,30]],
 [/geometria espacial|volumes/,[31]], [/geometria analitica/,[20,39]], [/matriz|matrizes|vetores|determinante/,[19]], [/combinat/,[32]],
 [/probabilidade/,[33,34]], [/estatistica|dispersao|media|mediana/,[14,15,16,17]], [/graficos/,[18]], [/geometria e medidas|geometria basica|^geometria$/,[26,31]], [/modelagem/,[12,21]]
];
export function videosForTopic(subject:string,topic:string):CourseVideo[]{
 if(subject!=='Matemática')return [];
 const indexes=new Set<number>();for(const [pattern,values] of rules)if(pattern.test(n(topic)))for(const i of values)indexes.add(i);
 return [...indexes].map(i=>assaadMathVideos[i]).slice(0,6);
}
