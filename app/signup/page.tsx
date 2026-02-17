'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [referrer, setReferrer] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const bonusMessage = referrer.trim()
    ? `Bonus unlocked: ₦5,000 credit for you and ${referrer.trim()} once verification completes.`
    : "Add the username of whoever referred you to activate the welcome bonus.";

  const handleVerification = () => {
    setVerificationSent(true);
    // TODO: Hook up sendVerificationEmail API when backend is available.
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (!verificationSent) {
      setVerificationSent(true);
    }
    // TODO: Replace with real signup + email verification logic.
  };

  return (
    <div className="min-h-screen bg-[#030714] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.2),transparent_60%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-10 px-4 py-14 sm:px-6 lg:px-12">
        <div className="w-full rounded-4xl border border-white/10 bg-white/5 px-6 py-10 backdrop-blur-2xl sm:px-10">
          <div className="mb-8 flex flex-col gap-4 text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-100">Create your profile</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              Join Scribe Hub and unlock your bonus path to earnings.
            </h1>
            <p className="text-sm text-slate-200/80 sm:text-base">
              Set up your account, tell us who referred you, and confirm your email to secure your welcome rewards. Allen will greet you the moment verification lands.
            </p>
          </div>
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span>Full name</span>
                <input
                  required
                  type="text"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300"
                  placeholder="Adaeze Okonkwo"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Preferred username</span>
                <input
                  required
                  type="text"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300"
                  placeholder="scribehero"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm">
              <span>Email address</span>
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300"
                placeholder="you@example.com"
              />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span>Password</span>
                <input
                  required
                  type="password"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300"
                  placeholder="••••••••"
                  minLength={8}
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Confirm password</span>
                <input
                  required
                  type="password"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300"
                  placeholder="••••••••"
                  minLength={8}
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <label className="grid gap-2 text-sm">
                <span>Who referred you? (username)</span>
                <input
                  type="text"
                  value={referrer}
                  onChange={(event) => setReferrer(event.target.value)}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300"
                  placeholder="Enter referrer username"
                />
                <p className="text-xs text-emerald-200/80">{bonusMessage}</p>
              </label>
              <button
                type="button"
                onClick={handleVerification}
                className="rounded-2xl border border-emerald-300/60 bg-emerald-300/20 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-300/30"
              >
                {verificationSent ? "Verification email sent" : "Send verification email"}
              </button>
            </div>
            <label className="grid gap-2 text-sm">
              <span>Email verification code</span>
              <input
                required
                type="text"
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-base text-white outline-none transition focus:border-emerald-300"
                placeholder="Enter 6-digit code"
                inputMode="numeric"
                pattern="[0-9]{6}"
              />
              <p className="text-xs text-white/50">
                Enter the 6-digit code we emailed to confirm your address.
              </p>
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/50">
                By continuing you agree to the Scribe Hub terms, privacy policy, and community guidelines.
              </p>
              <button
                type="submit"
                className="rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-300"
              >
                Create account
              </button>
            </div>
          </form>
          <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200/85 sm:flex-row sm:items-center sm:justify-between">
            <div>
              {submitted ? (
                <p>
                  Verification pending! Check {email || "your inbox"} for a confirmation link—Allen will unlock your dashboard once it's confirmed.
                </p>
              ) : (
                <p>
                  Already verified? <button onClick={() => router.push("/login")} className="font-semibold text-emerald-200 underline-offset-2 hover:underline">Sign in here.</button>
                </p>
              )}
            </div>
            <button
              onClick={() => router.push("/login")}
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-emerald-200/70 hover:text-emerald-100"
            >
              Go to login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;