"use client";

import { useActionState } from "react";
import { login } from "./actions";

const initialState: { error?: string } = {};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
        <input id="email" name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#005eb8] focus:outline-none" />
      </div>
      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
        <input id="password" name="password" type="password" required className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#005eb8] focus:outline-none" />
      </div>
      {state?.error ? <p className="text-sm text-red-600">{state.error}</p> : null}
      <button disabled={pending} type="submit" className="w-full rounded-lg bg-[#005eb8] px-4 py-3 font-semibold text-white hover:bg-[#004b93] disabled:opacity-60">
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
