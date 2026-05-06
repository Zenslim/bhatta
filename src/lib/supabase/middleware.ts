import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
<<<<<<< codex/add-private-solo-doctor-emr-to-dashboard

export function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
=======
import { supabaseAnonKey, supabaseUrl } from "./env";

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request });

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
>>>>>>> main
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
<<<<<<< codex/add-private-solo-doctor-emr-to-dashboard
        setAll(cookiesToSet) {
=======
        setAll(cookiesToSet: Array<{ name: string; value: string; options: any }>) {
>>>>>>> main
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

<<<<<<< codex/add-private-solo-doctor-emr-to-dashboard
  void supabase.auth.getUser();

  return response;
=======
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response, user };
>>>>>>> main
}
