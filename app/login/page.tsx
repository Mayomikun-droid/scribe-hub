'use client';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [remember, setRemember] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Replace this with real authentication logic
    const loginSuccessful = email && password; // temporary check

    if (loginSuccessful) {
      router.push("/home"); // navigate to home page after login
    } else {
      alert("Login failed. Please enter valid credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-[#020818] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.18),transparent_60%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center gap-12 px-4 py-12 sm:px-6 lg:px-12">
        <div className="w-full rounded-[28px] border border-white/10 bg-white/5 px-6 py-10 backdrop-blur-xl sm:px-10">
          <div className="mb-8 flex flex-col gap-3 text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-100">Welcome back</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">Continue your Scribe Hub journey.</h1>
            <p className="text-sm text-slate-200/80 sm:text-base">
              Log in to reconnect with Allen, track your contests, and pick up where you left off.
            </p>
          </div>
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm">
              <span>Email or username</span>
              <input
                required
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span>Password</span>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300"
                placeholder="••••••••"
                minLength={8}
              />
              <p className="text-xs text-white/45">
                Make sure your email is verified. Need help? Reach out via support.
              </p>
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex items-center gap-3 text-sm text-white/70">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                  className="h-4 w-4 rounded border-white/30 bg-black/40 text-emerald-300 focus:ring-emerald-300"
                />
                Stay signed in on this device
              </label>
              <button type="button" className="text-sm font-semibold text-emerald-200 underline-offset-2 hover:underline">
                Forgot password?
              </button>
            </div>
            <button
              type="submit"
              className="rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-300"
            >
              Sign in
            </button>
          </form>
          <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200/85 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Still new? <button onClick={() => router.push("/signup")} className="font-semibold text-emerald-200 underline-offset-2 hover:underline">Create your account.</button>
            </p>
            <Link
              href="/"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-emerald-200/70 hover:text-emerald-100"
            >
              Back to welcome
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
