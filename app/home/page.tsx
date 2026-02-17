'use client';
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import AIAvatar from "../components/AIAvatar"




const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: " AI", href: "#AI" },
  { label: "Opportunities", href: "#opportunities" },
];

const experienceHighlights = [
  {
    title: "Contest Winnings",
    description: "Daily creative and technical challenges with cash payouts and rewards for every participant.",
    metric: "₦105k prize pool",
    accent: "from 30 players",
  },
  {
    title: "Guaranteed Gigs",
    description: "Curated job stream with fair rates and instant payouts once the work is approved.",
    metric: "10-15% platform fee",
    accent: "keep more earnings",
  },
  {
    title: "Certified Skills",
    description: "Blockchain-secured certificates validate every skill you master inside Scribe Hub.",
    metric: "Verified badges",
    accent: "trusted by SMEs",
  },
];

const statPills = [
  { label: "Learners earning", value: "87%" },
  { label: "Jobs unlocked", value: "3.5k" },
  { label: "Contests weekly", value: "42" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030714] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0)_45%,rgba(255,255,255,0.05)_100%)] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[100%_56px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[56px_100%] opacity-20" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#030714]/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-12 lg:py-5">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400/20 text-base font-semibold text-emerald-200 sm:h-11 sm:w-11 sm:text-lg">
              SH
            </span>
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.35em] text-white/50 sm:text-xs">Scribe Hub</p>
              <p className="text-sm font-semibold sm:text-base">Learn → Earn → Grow</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-emerald-200">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-emerald-200/70 hover:text-emerald-100">
              View Pricing
            </button>
            <button className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300">
              Join Scribe Hub
            </button>
          </div>


<Link
  href="/community"
  className="text-sm font-medium text-white/80 hover:text-white transition"
>
  Community
</Link>



          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/80 transition hover:border-emerald-200/60 hover:text-emerald-100 lg:hidden"
          >
            <span className="flex h-4 w-4 flex-col justify-between">
              <span className={`block h-0.5 w-full rounded-full bg-current transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-full rounded-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full rounded-full bg-current transition ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden">
            <div className="border-t border-white/10 bg-[#020512]/95 px-4 py-5 sm:px-6">
              <div className="grid gap-4 text-sm font-semibold text-white/75">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-emerald-200/60 hover:text-emerald-100"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-5 grid gap-3">
                <button className="w-full rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-emerald-200/70 hover:text-emerald-100">
                  View Pricing
                </button>
                <button className="w-full rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300">
                  Join Scribe Hub
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-14 sm:px-6 lg:px-12 lg:py-24" id="platform">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-emerald-200/90 sm:text-xs">
                   AI Live Companion
                </span>
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-6xl">
                  Africa’s first immersive workspace where your AI co-pilot keeps the money moves in motion.
                </h1>
                <p className="text-sm text-slate-200/90 sm:text-base lg:text-lg">
                  Scribe Hub syncs learning, earning, and community in one cockpit. Spin up courses, jump into cash contests, secure gigs, and collect certified credentials—all while your 3D AI avatar coaches you live.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="w-full rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-cyan-300 sm:w-auto">
                  Start free tour
                </button>
                <button className="w-full rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10 sm:w-auto">
                  See success stories
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {statPills.map(({ label, value }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 + index * 0.05 }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50 sm:text-xs">{label}</p>
                    <p className="mt-2 text-2xl font-semibold text-emerald-200 sm:text-3xl">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="relative"
              id="allen"
            >
              <div className="absolute -left-6 top-6 hidden h-24 w-24 rounded-full bg-cyan-400/30 blur-3xl md:block" />
              <div className="absolute -right-6 bottom-10 hidden h-28 w-28 rounded-full bg-emerald-400/30 blur-3xl md:block" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-2xl sm:p-6">
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.35em] text-white/50 sm:text-[0.65rem]">Live session</p>
                    <h2 className="text-base font-semibold sm:text-lg">Allen • Copywriting Accelerator</h2>
                  </div>
                  <span className="inline-flex items-center gap-2 self-start rounded-full bg-emerald-400/15 px-3 py-1 text-[0.65rem] font-semibold text-emerald-200 sm:self-auto">
                    <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-300" /> Online
                  </span>
                </div>
                <div className="relative flex h-[280px] items-center justify-center rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),rgba(17,24,39,0.9))] sm:h-80 lg:h-[360px]">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), rgba(17,24,39,0.92))",
                        "radial-gradient(circle at 80% 30%, rgba(16,185,129,0.35), rgba(17,24,39,0.92))",
                        "radial-gradient(circle at 50% 80%, rgba(59,130,246,0.32), rgba(17,24,39,0.95))",
                      ],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  />

                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Active lesson", value: "Module 4 • Hooks" },
                    { label: "Next contest", value: "Design Sprint 18:00" },
                    { label: "Gig focus", value: "3 premium clients" },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[0.6rem] uppercase tracking-[0.3em] text-white/55 sm:text-[0.68rem]">
                      <p className="mb-1 text-[0.55rem] text-white/40 sm:text-[0.6rem]">{label}</p>
                      <p className="text-[0.72rem] text-white/80 sm:text-[0.78rem]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-12" id="opportunities">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="flex flex-col gap-4 text-center">
              <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/60 sm:text-xs">
                Real earnings. Certified wins.
              </span>
              <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
                Contests, gigs, and certificates fuel your income engine.
              </h2>
              <p className="mx-auto max-w-3xl text-sm text-slate-200/85 sm:text-base">
                Every program inside Scribe Hub is calibrated to move you from learning into paid outcomes. Join daily contests without fear of losing, secure vetted gigs without platform bidding wars, and showcase certified credibility that clients trust.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {experienceHighlights.map(({ title, description, metric, accent }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-lg"
                >
                  <div className="absolute -right-12 top-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-3xl transition group-hover:translate-x-6 group-hover:translate-y-2" />
                  <div className="absolute -bottom-16 left-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:-translate-x-4 group-hover:-translate-y-2" />
                  <div className="relative z-10 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-emerald-200">
                        {metric}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200/90">{description}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">{accent}</p>

<Link
  href="/contestwinnings"
  className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:gap-3 transition-all"
>
  Learn how →
</Link>

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-[28px] border border-white/10 bg-linear-to-r from-emerald-400/10 via-transparent to-cyan-400/10 px-6 py-8 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur sm:px-8 sm:py-10"
          >
            <div className="flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="space-y-2">
                <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/45 sm:text-xs">Stay in flow</p>
                <h3 className="text-xl font-semibold sm:text-2xl md:text-3xl">Get daily AI nudges that keep success streaks alive.</h3>
                <p className="text-sm text-slate-200/80 md:max-w-lg">
                  Morning challenges, contest reminders, and curated gig alerts—Allen orchestrates everything so you never miss a chance to grow your earnings.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button className="w-full rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-emerald-200/70 hover:text-emerald-100 sm:w-auto">
                  Watch product demo
                </button>
                <Link
  href="/starterkit"
  className="w-full rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-300 sm:w-auto inline-block text-center"
>
  Claim starter kit
</Link>

              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-12">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-2xl bg-emerald-400/20 px-4 py-2 text-sm font-semibold text-emerald-100">
              SH
              <span className="text-white/80">Scribe Hub</span>
            </span>
            <p className="text-sm text-slate-200/75">
              Empowering one million Africans to learn, earn, and grow through AI-powered guidance, verified credentials, and real paid opportunities.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <a href="#" className="transition hover:text-emerald-200">
                Twitter
              </a>
              <a href="#" className="transition hover:text-emerald-200">
                LinkedIn
              </a>
              <a href="#" className="transition hover:text-emerald-200">
                Instagram
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Explore</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#platform" className="transition hover:text-emerald-200">
                  Dashboard tour
                </a>
              </li>
              <li>
                <a href="#opportunities" className="transition hover:text-emerald-200">
                  Earnings engine
                </a>
              </li>
              <li>
                <a href="#community" className="transition hover:text-emerald-200">
                  Community rooms
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="transition hover:text-emerald-200">
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-emerald-200">
                  Instructor access
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-emerald-200">
                  Refer a friend
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-[0.65rem] text-white/50 sm:text-xs">
          © {new Date().getFullYear()} Scribe Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
<AIAvatar />



export default App;


