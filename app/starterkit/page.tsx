'use client';
import Link from "next/link"
import heroImage from "../assests/starter-kit-hero.jpg";
import allenImage from "../assests/allen-cityscape.jpg";

const mockHighlights = [
  {
    label: "Waitlist Offer",
    value: "₦25,000",
    description: "Lock in 373k+ value bundle before public pricing",
  },
  {
    label: "Regular Price",
    value: "₦75,000",
    description: "Includes Allen premium, courses, jobs, and community",
  },
  {
    label: "Savings",
    value: "₦348,000",
    description: "Compared to purchasing each resource separately",
  },
];

const mockStarterPerks = [
  "10 premium courses across copywriting, tech, design, and growth",
  "3 months of Allen AI companion with voice + emotion recognition",
  "Industry-verified certifications secured on blockchain",
  "Professional-grade portfolio templates ready to ship",
  "5 premium job credits with warm introductions",
  "1 month access to the elite community lounges",
  "AI-generated learning roadmap tailored to your goals",
  "Priority concierge support with under 2-hour responses",
];

const contestTiers = [
  {
    title: "Skill Battles",
    description: "Live contests in coding, copywriting, design, and typing fuel weekly payouts.",
  },
  {
    title: "Creative Sparks",
    description: "Micro-challenges like meme captions and AI art that keep the fun high and stakes real.",
  },
  {
    title: "Knowledge Arenas",
    description: "Trivia, riddles, and rapid-fire quizzes sharpen your mind while you earn.",
  },
];

const revenueBreakdown = [
  {
    title: "Prize Pool",
    amount: "₦85,000",
    description: "Top 3 share 50/30/20 while 27 others gain credits, vouchers, and tools.",
  },
  {
    title: "Platform Fee",
    amount: "₦20,000",
    description: "Sustainable revenue engine reinvested into courses and rewards.",
  },
  {
    title: "Win-Win Loop",
    amount: "₦12,000",
    description: "Non-winners leave with contest credits, assets, and 50% Starter Kit unlock.",
  },
];

const microJobs = [
  "Copywriting sprints for African brands",
  "Social media calendars delivered in 24h",
  "Graphic kits and pitch decks for startups",
  "Data entry missions with instant pay",
  "Virtual assistance for founders on the move",
  "Research briefs for investors and operators",
];

const currencies = ["NGN", "USD", "EUR", "GBP", "GHS", "KES", "ZAR"];

const StarterKit = () => {
  return (
    <div className="bg-[#0B0A17] text-white">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60 bg-linear-to-br from-[#110F2B] via-[#3B2E5A] to-[#132F4A]" />
        <img
          src={heroImage.src} // <-- fixed
          alt="Allen guiding professionals"
          className="absolute inset-0 h-full w-full object-cover mix-blend-soft-light opacity-60"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-8">
              <Link href="/" className="inline-flex items-center text-sm tracking-wide text-white/60 hover:text-white">
  ← Back to home
</Link>

              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-white/60">
                  Professional Launch Pack
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                  Launch your African career with Allen, premium courses, and guaranteed earnings.
                </h1>
                <p className="text-base sm:text-lg text-white/75 max-w-2xl">
                  The Starter Kit unifies everything promising technologists, creatives, and marketers need to learn, earn, and launch credibility fast. Built for African professionals who want more than a course platform—this is your full ecosystem.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {mockHighlights.map((item) => (
                  <div key={item.label} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                    <p className="text-xs uppercase tracking-wide text-white/50">{item.label}</p>
                    <p className="text-2xl font-semibold mt-2">{item.value}</p>
                    <p className="text-sm text-white/70 mt-3">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="px-8 py-3 rounded-full bg-white text-[#0B0A17] font-semibold uppercase tracking-wide text-sm shadow-lg shadow-blue-900/40 hover:bg-[#F6F4F1] transition-colors">
                  Join the waitlist
                </button>
                <button className="px-8 py-3 rounded-full border border-white/30 text-sm font-semibold uppercase tracking-wide text-white hover:bg-white/10 transition-colors">
                  Download pack outline
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative rounded-4xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-3xl shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-black/60" />
                <img
                  src={allenImage.src} // <-- fixed
                  alt="Allen AI holographic city"
                  className="w-full h-full object-cover"
                />
                <div className="relative z-10 p-8 space-y-4">
                  <div className="inline-flex items-center rounded-full bg-[#EAD8FF]/20 border border-[#EAD8FF]/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#F5E8FF]">
                    Meet Allen
                  </div>
                  <h2 className="text-3xl font-semibold leading-snug">
                    Your 3D AI career companion with real voice, vision, and heart for African talent.
                  </h2>
                  <p className="text-sm text-white/80">
                    Allen reads emotions via camera, responds with empathy, and keeps you accountable across learning, earning, and networking.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-white/70">
                    <div className="rounded-2xl bg-black/40 border border-white/10 p-3">
                      <p className="font-semibold text-white">Emotion-aware sessions</p>
                      <p className="mt-1 text-white/70">Camera cues and tone shifts help Allen meet you where you are.</p>
                    </div>
                    <div className="rounded-2xl bg-black/40 border border-white/10 p-3">
                      <p className="font-semibold text-white">Voice + visual coaching</p>
                      <p className="mt-1 text-white/70">Practice interviews, presentations, and client calls in safe mode.</p>
                    </div>
                    <div className="rounded-2xl bg-black/40 border border-white/10 p-3">
                      <p className="font-semibold text-white">Opportunity radar</p>
                      <p className="mt-1 text-white/70">Allen surfaces contests, micro-jobs, and mentors aligned to goals.</p>
                    </div>
                    <div className="rounded-2xl bg-black/40 border border-white/10 p-3">
                      <p className="font-semibold text-white">Custom identities</p>
                      <p className="mt-1 text-white/70">Pick a name and representation that matches your energy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

     <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(110,88,255,0.12),transparent_70%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold">What’s inside the Starter Kit</h2>
                <p className="text-white/70 max-w-2xl">
                  Everything you need to gain skills, build proof, and lock in paid work—without juggling multiple platforms.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {mockStarterPerks.map((perk) => (
                  <div key={perk} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                        ✦
                      </span>
                      <p className="text-sm text-white/80 leading-relaxed">{perk}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-3xl border border-white/10 bg-linear-to-b from-white/10 via-white/5 to-transparent p-8 space-y-6">
              <h3 className="text-2xl font-semibold">The value stack</h3>
              <p className="text-sm text-white/70">
                Premium resources worth ₦373,000+ bundled into an accessible launch tier for the first 1,000 visionaries.
              </p>
              <dl className="space-y-6 text-sm text-white/75">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Course library access</dt>
                  <dd className="font-semibold text-white">₦120,000</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Allen AI premium</dt>
                  <dd className="font-semibold text-white">₦75,000</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Job credits + templates</dt>
                  <dd className="font-semibold text-white">₦95,000</dd>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <dt>Community + certifications</dt>
                  <dd className="font-semibold text-white">₦83,000</dd>
                </div>
              </dl>
              <div className="mt-8 rounded-2xl bg-[#121C29] border border-white/10 px-6 py-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Launch tier</p>
                <p className="text-3xl font-semibold text-white mt-2">₦25,000</p>
                <p className="text-sm text-white/70 mt-2">
                  Paid up? Allen unlocks your roadmap, contest credits, and curated job feed within minutes.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/10">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(90,115,255,0.2),transparent_55%),radial-gradient(circle_at_bottom,rgba(234,76,137,0.18),transparent_45%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-6">
              <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-white/50">Revenue Engine</span>
              <h2 className="text-3xl font-semibold">Allen-powered contest system where every participant wins</h2>
              <p className="text-white/70">
                Pay ₦3,500 per entry, join 30 visionaries, and compete live. Allen tracks your progress, coaches your pitches, and celebrates every win.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {contestTiers.map((tier) => (
                  <div key={tier.title} className="rounded-3xl bg-white/5 border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-white/90">{tier.title}</h3>
                    <p className="text-sm text-white/70 mt-3 leading-relaxed">{tier.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-[28px] bg-[#0F1124] border border-white/10 p-8 space-y-8">
                <div className="flex flex-wrap gap-3 text-xs text-white/60 uppercase tracking-[0.3em]">
                  <span className="px-3 py-1 rounded-full bg-white/10">Prize Pool</span>
                  <span className="px-3 py-1 rounded-full bg-white/10">Retention</span>
                  <span className="px-3 py-1 rounded-full bg-white/10">Profit Engine</span>
                </div>
                <div className="space-y-6">
                  {revenueBreakdown.map((row) => (
                    <div key={row.title} className="rounded-2xl bg-white/10 p-5 border border-white/10">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-white/80">{row.title}</p>
                        <span className="text-lg font-semibold text-white">{row.amount}</span>
                      </div>
                      <p className="text-sm text-white/70 mt-3 leading-relaxed">{row.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-white/50">Earn straight away</span>
              <h2 className="text-3xl font-semibold">Micro-jobs and internships with instant payouts</h2>
              <p className="text-white/70">
                Partnered SMEs bring meaningful freelance work. Allen curates matches, handles escrow, and celebrates every payout.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 text-sm text-white/75">
                {microJobs.map((job) => (
                  <li key={job} className="rounded-2xl border border-white/10 bg-white/5 p-4 leading-relaxed">
                    {job}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <button className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white/60 hover:bg-white/10 transition-colors">
                  View SME partners
                </button>
                <button className="rounded-full bg-white text-[#0B0A17] font-semibold px-6 py-3 text-sm uppercase tracking-wide hover:bg-[#F6F4F1] transition-colors">
                  Submit portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-3xl bg-[#301E5C] opacity-70 blur-3xl" />
              <div className="relative rounded-[28px] border border-white/10 bg-[#0C1023] p-8 space-y-6 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Escrow Match</p>
                    <p className="text-white text-lg font-semibold mt-1">Allen pairs you with paid work</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.3em] text-white/60">Instant Pay</span>
                </div>
                <div className="space-y-4 text-sm text-white/70 leading-relaxed">
                  <p>Allen orchestrates job invites based on your skill growth and contest wins.</p>
                  <p>The platform secures payouts via Paystack and Flutterwave with escrow protection.</p>
                  <p>Ratings flow both ways to lift trusted professionals and high-quality SMEs.</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 text-xs text-white/60 uppercase tracking-[0.2em]">
                  <p>FEATURED CATEGORIES</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-white/80">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em]">Content</span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em]">Design</span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em]">Virtual Assist</span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em]">Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 border-t border-white/10">
        <div className="absolute inset-0 bg-linear-to-br from-[#11152A] via-[#1A0F2B] to-[#0B0A17]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-white/50">Anonymous community</span>
              <h2 className="text-3xl font-semibold">Safe spaces to ask bold questions and find collaborators</h2>
              <p className="text-white/70">
                Choose usernames, unlock mentor pairings, and thrive in topic lounges tuned for true growth.
              </p>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 space-y-4 text-sm text-white/75">
                <p>Allen guides you into mentor-mentee matches, protects your privacy, and keeps reputations fair with badge-based recognition.</p>
                <p>No public rejection trails, no status anxiety—just progress, accountability, and energy.</p>
              </div>
            </div>
            <div className="rounded-4xl border border-white/10 bg-[#0C0A1B] p-8 space-y-8">
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                <span className="px-3 py-1 rounded-full bg-white/10">Topic Lounges</span>
                <span className="px-3 py-1 rounded-full bg-white/10">Voice Rooms</span>
                <span className="px-3 py-1 rounded-full bg-white/10">Badges</span>
              </div>
              <div className="space-y-5 text-sm text-white/70">
                <p>Voice and video rooms are optional—camera anxiety is a thing of the past.</p>
                <p>Allen nudges you into meaningful collaborations, from project squads to hack nights.</p>
                <p>Progress metrics are tracked quietly: XP, streaks, and contest honors earn IRL opportunities.</p>
              </div>
              <button className="rounded-full bg-white text-[#0B0A17] px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-[#F6F4F1] transition-colors">
                Preview community
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/5 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] text-white/50">Multi-currency ready</span>
              <h2 className="text-3xl font-semibold">Pay once, earn globally</h2>
              <p className="text-white/70">
                Scribe Hub auto-detects your location and welcomes multiple currencies with Paystack, Flutterwave, card payments, bank transfers, and mobile money.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                {currencies.map((currency) => (
                  <span key={currency} className="px-3 py-1 rounded-full bg-white/10">
                    {currency}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-4xl border border-white/10 bg-[#0D1524] p-8 space-y-6 text-sm text-white/75">
              <p>Stripe unlocks global card processing while Flutterwave supports pan-African corridors. Crypto settlement arrives soon.</p>
              <p>Allen keeps your payouts diversified—helping you price in NGN, pitch in USD, and stack earnings without friction.</p>
              <div className="flex flex-col gap-2 text-white">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Starter Kit goal</span>
                  <span className="font-semibold">1,000 waitlisters</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Projected MRR</span>
                  <span className="font-semibold">₦46M - ₦70M</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Retention Targets</span>
                  <span className="font-semibold">DAU/MAU 35%+</span>
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Seed round in motion</p>
                <p className="text-white mt-2">We’re raising $500K - $1M to scale Allen, expand contests, and launch mobile apps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 bg-[#0A0A14]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,148,255,0.18),transparent_65%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col sm:flex-row justify-between gap-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Ready to unlock Allen?</h3>
            <p className="text-sm text-white/70 max-w-md">
              Secure your Starter Kit spot, gain Allen as your AI co-founder, and tap into Africa’s most ambitious professional network.
            </p>
           import Link from "next/link";

<Link href="/claim-waitlist">
  <button className="rounded-full bg-white text-[#0B0A17] px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-[#F6F4F1] transition-colors">
    Claim waitlist seat
  </button>
</Link>
          </div>
          <div className="space-y-4 text-sm text-white/60">
            <p>Founder: Odutola Mayomikun</p>
            <p>Email: scribehqworkspace@gmail.com</p>
            <p>Website: Launching January 2026</p>
            <p className="text-white/40 text-xs">“Not just another learning platform. A complete professional ecosystem powered by AI.”</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StarterKit;
