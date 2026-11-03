import {createClient} from '@supabase/supabase-js';
import {NextResponse} from 'next/server';
export function contentConfigured(){return Boolean(process.env.SUPABASE_URL&&process.env.SUPABASE_SECRET_KEY);}
export function contentDb(){
 if(!contentConfigured())throw new Error('CONTENT_NOT_CONFIGURED');
 return createClient(process.env.SUPABASE_URL!,process.env.SUPABASE_SECRET_KEY!,{auth:{persistSession:false,autoRefreshToken:false}});
}
export const contentJson=(body:object,status=200)=>NextResponse.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function contentIdentity(request:Request){
 if(!contentConfigured())return {response:contentJson({error:'Configure SUPABASE_URL e SUPABASE_SECRET_KEY no servidor.'},503)} as const;
 const token=request.headers.get('Authorization')?.match(/^Bearer ([^\s]+)$/)?.[1];
 if(!token)return {response:contentJson({error:'Entre na sua conta do Kognos.'},401)} as const;
 const db=contentDb();const {data,error}=await db.auth.getUser(token);
 if(error||!data.user)return {response:contentJson({error:'Sua sessão expirou. Entre novamente.'},401)} as const;
 return {db,user:data.user} as const;
}
export async function contentAdmin(request:Request){
 const identity=await contentIdentity(request);if('response' in identity)return identity;
 const {data,error}=await identity.db.from('kognos_content_admins').select('user_id').eq('user_id',identity.user.id).maybeSingle();
 if(error)return {response:contentJson({error:'Execute a migração 0015_editorial_courses.sql para ativar o painel.'},503)} as const;
 if(!data)return {response:contentJson({error:'Sua conta não tem permissão de administrador.',userId:identity.user.id},403)} as const;
 return identity;
}
export async function smallJson(request:Request,limit=160000):Promise<unknown>{
 if(Number(request.headers.get('Content-Length')||0)>limit)throw new Error('BODY_TOO_LARGE');
 const reader=request.body?.getReader();if(!reader)throw new Error('EMPTY_BODY');
 const decoder=new TextDecoder();let body='',size=0;
 try{while(true){const {value,done}=await reader.read();if(done)break;size+=value.byteLength;if(size>limit){await reader.cancel();throw new Error('BODY_TOO_LARGE');}body+=decoder.decode(value,{stream:true});}body+=decoder.decode();return JSON.parse(body);}finally{reader.releaseLock();}
}
