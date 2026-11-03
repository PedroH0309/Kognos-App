import {getSupabase} from './supabase';
export async function contentRequest(path:string,init:RequestInit={}){
 const sb=getSupabase();const {data}=sb?await sb.auth.getSession():{data:{session:null}};
 const response=await fetch(path,{...init,cache:'no-store',headers:{'Content-Type':'application/json',...(data.session?{Authorization:`Bearer ${data.session.access_token}`}:{})}});
 const body=await response.json();
 if(!response.ok)throw Object.assign(new Error(body.error||'Não foi possível concluir esta operação.'),{status:response.status,userId:body.userId});
 return body;
}
