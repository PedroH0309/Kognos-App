import {NextResponse} from 'next/server';
import {publicAIReadiness} from '@/lib/ai-readiness';

export const runtime='nodejs';
/** Presence check only: does not authenticate with NVIDIA or disclose any secrets. */
export function GET(){
 return NextResponse.json(publicAIReadiness(process.env),{headers:{'Cache-Control':'no-store'}});
}