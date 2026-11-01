/** Pure, locale-aware helpers used by the Kognos onboarding controls. */
export function parseBrazilianDate(text:string):string|null {
 const match=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(text.trim());
 if(!match)return null;
 const day=Number(match[1]),month=Number(match[2]),year=Number(match[3]);
 if(year<1900||year>2100||month<1||month>12||day<1||day>31)return null;
 const date=new Date(year,month-1,day);
 if(date.getFullYear()!==year||date.getMonth()!==month-1||date.getDate()!==day)return null;
 return `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}
export function formatBrazilianDate(value:string):string {
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return '';
 const [year,month,day]=value.split('-');
 return `${day}/${month}/${year}`;
}
export function weeklyStudyHours(minutes:number,days:number){return Math.round(minutes*days/60*10)/10;}