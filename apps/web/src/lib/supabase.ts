import { createClient, type SupabaseClient } from '@supabase/supabase-js';
let client: SupabaseClient | null = null;

export function isCloudConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
}

export function getSupabase(): SupabaseClient | null {
  if (!isCloudConfigured()) return null;
  if (!client) {
    client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      { auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true } }
    );
  }
  return client;
}
