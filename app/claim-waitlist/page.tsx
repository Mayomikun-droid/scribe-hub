'use client';
import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const COUNTDOWN_KEY = "scribe_waitlist_countdown_start";
const COUNTDOWN_DURATION_MS = 48 * 60 * 60 * 1000; // 48 hours in ms

const initialFormState = {
  fullName: "",
  email: "",
  country: "",
  phone: "",
  pathway: "Learning a new skill",
  helpText: "",
  updatesOptIn: false,
};

const timelineStages = [
  {
    title: "Day 0-3",
    description:
      "Emotion-scan onboarding with Allen, personalized learning roadmap, and contest credits unlocked.",
  },
  {
    title: "Day 4-10",
    description:
      "Courses + practice sprints, community lounge pairing, and micro-job portfolio brief.",
  },
  {
    title: "Day 11-20",
    description:
      "Live contest entry with coaching, mentor matching, and Allen reminders to stay consistent.",
  },
  {
    title: "Day 21-30",
    description:
      "Paid micro-job placements, certification submission, and community spotlight on wins.",
  },
];

const testimonials = [
  {
    quote:
      "I landed my first international micro-job within 18 days. Allen's prompts kept me accountable and the community backed me the whole way.",
    name: "Chisom, Product Designer",
  },
  {
    quote:
      "The contest wins unlocked tools and visibility I couldn't access alone. Allen's emotion check-ins made me feel seen and supported.",
    name: "Mpho, Copywriter",
  },
  {
    quote:
      "From zero direction to a personalized roadmap, podcast shoutouts, and paid gigs—I can't imagine navigating this solo anymore.",
    name: "Ama, Growth Marketer",
  },
];

const impactStats = [
  { label: "Contest prize payouts", value: "₦100M+" },
  { label: "Jobs matched in beta", value: "1,200+" },
  { label: "Starter Kits claimed", value: "870" },
  { label: "Communities launched", value: "42" },
];

const pulseHighlights = [
  {
    title: "Emotion Engine",
    description: "Allen senses mood shifts through voice + camera and adjusts coaching on the fly.",
  },
  {
    title: "Concierge Ops",
    description: "A human team shadows Allen so every ping leads to real action within 24 hours.",
  },
  {
    title: "Pan-African Payouts",
    description: "Paystack, Flutterwave, and multi-currency wallets ready for instant earnings.",
  },
];

const ClaimWaitlist = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [remainingTime, setRemainingTime] = useState(COUNTDOWN_DURATION_MS);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedStart = window.localStorage.getItem(COUNTDOWN_KEY);
    let countdownStart = storedStart ? Number(storedStart) : Date.now();

    if (!storedStart) {
      window.localStorage.setItem(COUNTDOWN_KEY, countdownStart.toString());
    }

    const updateRemainingTime = () => {
      const elapsed = Date.now() - countdownStart;
      const newRemaining = Math.max(COUNTDOWN_DURATION_MS - elapsed, 0);
      setRemainingTime(newRemaining);
    };

    updateRemainingTime();

    const interval = window.setInterval(() => {
      updateRemainingTime();
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const isCountdownFinished = remainingTime <= 0;

  const { hours, minutes, seconds } = useMemo(() => {
    const totalSeconds = Math.floor(remainingTime / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    return {
      hours: h.toString().padStart(2, "0"),
      minutes: m.toString().padStart(2, "0"),
      seconds: s.toString().padStart(2, "0"),
    };
  }, [remainingTime]);

  const isValid = useMemo(() => {
    return (
      formValues.fullName.trim().length > 0 &&
      formValues.email.trim().length > 0 &&
      formValues.country.trim().length > 0
    );
  }, [formValues.fullName, formValues.email, formValues.country]);

  const handleChange = (field: keyof typeof formValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value =
      field === "updatesOptIn" && event.target instanceof HTMLInputElement
        ? event.target.checked
        : event.target.value;

    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid || isSubmitting || isCountdownFinished) return;

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormValues(initialFormState);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#05030e] text-white overflow-hidden">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(132,111,255,0.45),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(234,76,255,0.3),transparent_60%),radial-gradient(circle_at_center,rgba(22,214,255,0.2),transparent_65%)]" />
        <div className="absolute inset-0 bg-linear-to-br from-[#090818]/80 via-[#09042A]/80 to-[#03121F]/90 mix-blend-plus-lighter" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-[pulseGlow_16s_ease-in-out_infinite] bg-[radial-gradient(circle_at_20%_30%,rgba(123,94,255,0.55),transparent_60%),radial-gradient(circle_at_80%_40%,rgba(255,89,169,0.45),transparent_65%),linear-gradient(140deg,rgba(12,17,43,0.95),rgba(9,8,28,0.95))]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-soft-light" />
        </div>
        <img
          src="https://public.youware.com/users-website-assets/prod/4bd75a52-5565-42d0-b59f-0f2d8642e56d/4448c360b25646c980dc2ce9488ce24f.jpg"
          alt="Allen welcoming professionals"
          className="absolute inset-0 h-full w-full object-cover mix-blend-soft-light opacity-10"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-24 text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-sm shadow-[0_10px_40px_rgba(128,96,255,0.35)]"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/70">
              Launch Tier Countdown
            </span>
            <motion.div
              className="flex items-center gap-3 text-sm font-semibold text-white"
              animate={{
                filter: [
                  "drop-shadow(0 0 0 rgba(120,90,255,0.0))",
                  "drop-shadow(0 0 12px rgba(120,90,255,0.45))",
                  "drop-shadow(0 0 0 rgba(120,90,255,0.0))",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold">{hours}</span>
                <span className="text-xs uppercase text-white/60">hrs</span>
              </div>
              <span className="text-white/50">:</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold">{minutes}</span>
                <span className="text-xs uppercase text-white/60">min</span>
              </div>
              <span className="text-white/50">:</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-semibold">{seconds}</span>
                <span className="text-xs uppercase text-white/60">sec</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(118,86,255,0.25),transparent_60%)] blur-3xl"
            />
            <Link
             href="/">
              className="inline-flex items-center justify-center text-sm text-white/70 hover:text-white transition-colors"
            {">"}
              ← Back to Home
            </Link>
            <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-1 text-xs uppercase tracking-[0.3em] text-white/60">
              Waitlist Access
            </span>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.7 }}
            >
              Lock your Scribe Hub Starter Kit at the limited ₦25,000 waitlist price.
            </motion.h1>
            <motion.p
              className="text-white/75 text-base sm:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.6 }}
            >
              Be among the first 1,000 visionaries to receive Allen's concierge onboarding, premium courses, and guaranteed earnings pathways. Complete the form below and Allen will confirm your spot within 24 hours.
            </motion.p>
            {isCountdownFinished && (
              <motion.div
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                className="mx-auto max-w-xl rounded-2xl border border-amber-400/40 bg-amber-300/10 px-6 py-4 text-sm text-amber-100 backdrop-blur"
              >
                Countdown reached zero. Allen is closing this cohort's waitlist while the team processes final approvals.
                <span className="block mt-2 text-xs text-amber-200/80">
                  TODO: enforce automatic closure via YouWare backend once integrations are live.
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </header>

      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(100,88,255,0.18),transparent_65%),radial-gradient(circle_at_bottom,rgba(12,225,255,0.18),transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24 grid lg:grid-cols-[1.2fr_1fr] gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-4xl border border-white/10 bg-[#0F0D26]/90 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.45)] p-10 space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold">Tell Allen how to support you</h2>
              <p className="text-white/70 text-sm sm:text-base">
                Share your focus, experience level, and desired outcomes. Allen will tailor the welcome path, contests, and job matches to suit your momentum.
              </p>
            </div>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-white/10 bg-[#102033] p-4 text-left text-sm text-white/80"
              >
                <p className="font-semibold text-white">Request received.</p>
                <p className="mt-2 text-white/70">
                  Allen is preparing your personalized onboarding sprint. Expect a confirmation email with payment steps within the next 24 hours.
                </p>
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <label className="flex flex-col text-left text-sm text-white/70">
                  Full Name
                  <input
                    type="text"
                    value={formValues.fullName}
                    onChange={handleChange("fullName")}
                    placeholder="Odutola Mayomikun"
                    className="mt-2 h-12 rounded-xl bg-white/10 border border-white/15 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8D7BFF]/60 disabled:opacity-60"
                    disabled={isSubmitting || isCountdownFinished}
                    required
                  />
                </label>
                <label className="flex flex-col text-left text-sm text-white/70">
                  Email Address
                  <input
                    type="email"
                    value={formValues.email}
                    onChange={handleChange("email")}
                    placeholder="you@example.com"
                    className="mt-2 h-12 rounded-xl bg-white/10 border border-white/15 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8D7BFF]/60 disabled:opacity-60"
                    disabled={isSubmitting || isCountdownFinished}
                    required
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <label className="flex flex-col text-left text-sm text-white/70">
                  Country / Region
                  <input
                    type="text"
                    value={formValues.country}
                    onChange={handleChange("country")}
                    placeholder="Nigeria"
                    className="mt-2 h-12 rounded-xl bg-white/10 border border-white/15 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8D7BFF]/60 disabled:opacity-60"
                    disabled={isSubmitting || isCountdownFinished}
                    required
                  />
                </label>
                <label className="flex flex-col text-left text-sm text-white/70">
                  WhatsApp or Phone (optional)
                  <input
                    type="tel"
                    value={formValues.phone}
                    onChange={handleChange("phone")}
                    placeholder="+234 700 000 0000"
                    className="mt-2 h-12 rounded-xl bg-white/10 border border-white/15 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8D7BFF]/60 disabled:opacity-60"
                    disabled={isSubmitting || isCountdownFinished}
                  />
                </label>
              </div>

              <label className="flex flex-col text-left text-sm text-white/70">
                Primary Pathway
                <select
                  value={formValues.pathway}
                  onChange={handleChange("pathway")}
                  className="mt-2 h-12 rounded-xl bg-white/10 border border-white/15 px-4 text-white/90 focus:outline-none focus:ring-2 focus:ring-[#8D7BFF]/60 disabled:opacity-60"
                  disabled={isSubmitting || isCountdownFinished}
                >
                  <option className="bg-[#0F0D26] text-white">Learning a new skill</option>
                  <option className="bg-[#0F0D26] text-white">Growing freelance income</option>
                  <option className="bg-[#0F0D26] text-white">Landing internships or jobs</option>
                  <option className="bg-[#0F0D26] text-white">Launching a startup</option>
                  <option className="bg-[#0F0D26] text-white">Networking & mentorship</option>
                </select>
              </label>

              <label className="flex flex-col text-left text-sm text-white/70">
                How can Allen help first?
                <textarea
                  rows={4}
                  value={formValues.helpText}
                  onChange={handleChange("helpText")}
                  placeholder="Tell us about your goals, current challenges, or the contest you're most eager to join."
                  className="mt-2 rounded-2xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8D7BFF]/60 disabled:opacity-60"
                  disabled={isSubmitting || isCountdownFinished}
                />
              </label>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <label className="flex items-start gap-3 text-xs text-white/60">
                  <input
                    type="checkbox"
                    checked={formValues.updatesOptIn}
                    onChange={handleChange("updatesOptIn")}
                    className="mt-1 h-4 w-4 rounded border-white/40 bg-transparent"
                    disabled={isSubmitting || isCountdownFinished}
                  />
                  <p>
                    Keep me in the loop with launch webinars, early Allen demos, and partner openings.
                  </p>
                </label>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  whileHover={
                    !isSubmitting && !isCountdownFinished
                      ? { scale: 1.02, boxShadow: "0 15px 45px rgba(255,255,255,0.2)" }
                      : undefined
                  }
                  type="submit"
                  className="rounded-full bg-white text-[#0B0A17] px-8 py-3 text-sm font-semibold uppercase tracking-wide transition-colors disabled:bg-white/40 disabled:text-[#0B0A17]/70"
                  disabled={!isValid || isSubmitting || isCountdownFinished}
                >
                  {isCountdownFinished ? "Waitlist Closed" : isSubmitting ? "Sending..." : "Request my spot"}
                </motion.button>
              </div>

              <div className="rounded-2xl bg-white/10 border border-white/10 p-4 text-xs text-white/60">
                <p>After submitting, Allen sends a personalized confirmation email with payment instructions and your onboarding schedule within 24 hours.</p>
                <p className="mt-2 text-white/40">TODO: connect form submission to YouWare backend waitlist endpoint.</p>
                {isCountdownFinished && (
                  <p className="mt-2 text-amber-300/80">
                    Countdown reached zero. Allen will reopen the waitlist once the next cohort is ready. TODO: enforce closure via backend.
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          <aside className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-4xl border border-white/10 bg-linear-to-b from-[#181334]/90 via-[#141327]/90 to-[#0A0A14]/90 backdrop-blur-xl p-8 space-y-4"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">What happens next</p>
              <h3 className="text-2xl font-semibold text-white">Allen curates your launch plan</h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li>1. Allen reviews your goals and assigns a personalized onboarding sprint.</li>
                <li>2. You receive a curated course roadmap, contest credits, and job suggestions.</li>
                <li>3. Community access and mentor matching unlock once payment is confirmed.</li>
              </ul>
              <div className="rounded-2xl bg-white/10 border border-white/10 p-4 text-white/70 text-sm">
                <p className="font-semibold text-white">Response time: under 24 hours</p>
                <p className="mt-2">We prioritize waitlisters to ensure you have momentum before the public launch.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="rounded-4xl border border-white/10 bg-[#0D1426]/90 backdrop-blur-xl p-8 space-y-5 text-sm text-white/75"
            >
              <h4 className="text-xl font-semibold text-white">Why waitlist now?</h4>
              <ul className="space-y-3">
                <li>● ₦25,000 launch price vs ₦75,000 regular.</li>
                <li>● 3-month Allen premium access included.</li>
                <li>● Priority support and concierge onboarding.</li>
                <li>● Early access to contest slots and SME gigs.</li>
              </ul>
              <div className="rounded-2xl bg-white/10 border border-white/10 p-4 text-xs text-white/60">
                <p>
                  Need to talk to the team? Email
                  <a href="mailto:scribehqworkspace@gmail.com" className="text-white underline">
                    {" "}
                    scribehqworkspace@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-3 text-xs text-white/60"
            >
              <p className="uppercase tracking-[0.3em]">We keep it private</p>
              <p>Allen encrypts your responses, and only the concierge team can view them before onboarding. No data is shared publicly.</p>
              <p className="text-white/40">GDPR + NDPR ready. TODO: link to privacy policy once published.</p>
            </motion.div>
          </aside>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,108,255,0.12),transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-semibold">Momentum timeline</h2>
              <p className="text-white/70">
                Allen orchestrates your first 30 days so you sprint into the career you want.
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 18px 45px rgba(137,111,255,0.45)",
                y: -4,
              }}
              className="rounded-full bg-white text-[#0B0A17] px-8 py-3 text-sm font-semibold uppercase tracking-wide shadow-[0_12px_40px_rgba(255,255,255,0.2)] transition-all"
            >
              See sample roadmap
            </motion.button>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {timelineStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl p-6 space-y-3"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">{stage.title}</p>
                <p className="text-white/85 text-base">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,76,255,0.12),transparent_65%),radial-gradient(circle_at_bottom,rgba(18,214,255,0.12),transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-3xl font-semibold">Voices from the inner circle</h2>
              <p className="text-white/70">
                Early members share how Allen shifted their confidence, craft, and income.
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 18px 48px rgba(110,255,227,0.35)",
                y: -4,
              }}
              className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_10px_35px_rgba(0,255,222,0.2)] transition-all"
            >
              Request referrals
            </motion.button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-white/15 via-white/5 to-transparent" />
                <div className="relative space-y-4 text-white/80 text-sm">
                  <p className="leading-relaxed">{testimonial.quote}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">{testimonial.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,118,0.15),transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-white/50">
              Impact snapshots
            </span>
            <h2 className="text-3xl font-semibold">Proof that the ecosystem delivers</h2>
            <p className="text-white/70">
              The numbers keep rising because the community keeps each other accountable.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl p-5"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                  <p className="text-2xl font-semibold text-white mt-2">{stat.value}</p>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 18px 45px rgba(255,208,126,0.45)",
                y: -4,
              }}
              className="rounded-full bg-white text-[#0B0A17] px-8 py-3 text-sm font-semibold uppercase tracking-wide shadow-[0_12px_45px_rgba(255,208,126,0.35)] transition-all"
            >
              Explore ROI model
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6 overflow-hidden"
          >
            <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_60%)]" />
            <div className="absolute -bottom-24 -left-12 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(136,105,255,0.3),transparent_70%)]" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Allen's live feed</p>
              <h3 className="text-2xl font-semibold text-white">Signals pulsing through the hub</h3>
              <ul className="space-y-4 text-sm text-white/75">
                {pulseHighlights.map((item) => (
                  <li key={item.title} className="rounded-2xl bg-white/10 border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/50">{item.title}</p>
                    <p className="mt-2 text-white/80">{item.description}</p>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/50">
                Allen syncs these signals every hour during launch. TODO: Connect live signals to backend analytics feed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-[#05030e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,148,255,0.18),transparent_65%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row justify-between gap-10 text-sm text-white/70">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">Ready for Allen's concierge handoff?</h3>
            <p>Founder: Odutola Mayomikun</p>
            <p>
              Email:
              <a href="mailto:scribehqworkspace@gmail.com" className="ml-1 underline text-white">
                scribehqworkspace@gmail.com
              </a>
            </p>
            <p className="text-white/50">Response time: under 24 hours</p>
          </div>
          <div className="space-y-3 max-w-md text-white/60">
            <p>
              "Not just another learning platform. A complete professional ecosystem powered by AI." Allen keeps this promise alive by stitching together learning, earning, and community rituals every single day.
            </p>
            <p className="text-white/40 text-xs">
              TODO: Add legal footer links (Terms, Privacy) once published.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default ClaimWaitlist;


