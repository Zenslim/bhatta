import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-md px-4">
        <h1 className="mb-2 text-3xl font-bold text-[#005eb8]">Doctor Portal Login</h1>
        <p className="mb-8 text-slate-600">Secure access for your private EMR dashboard.</p>
        <LoginForm />
      </div>
    </section>
  );
}
