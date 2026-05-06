function requireEnv(name: "NEXT_PUBLIC_SUPABASE_URL" | "NEXT_PUBLIC_SUPABASE_ANON_KEY") {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing Supabase environment variable: ${name}`);
  }

  return value;
}

export const supabaseUrl: string = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
export const supabaseAnonKey: string = requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");
