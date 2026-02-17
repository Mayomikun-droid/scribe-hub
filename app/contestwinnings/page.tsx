"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const games = [
  {
    id: 1,
    title: "Allen’s Precision Test",
    category: "Skill / Serious Fun",
    description: "Execute a task with near-perfect accuracy under strict constraints.",
    mechanic: "Needle gauge slams into zones. ‘Almost’ zone glows painfully close.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "The 90-Second Cognitive Sprint",
    category: "Skill / Intense & Addictive",
    description: "A rapid-fire mental obstacle course. 6 mini-tasks, 15s each.",
    mechanic: "Performance timeline races across screen. Winners maintain speed till the end.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Allen’s Trivia Showdown",
    category: "Skill / Fun / Replayable",
    description: "High-stakes trivia with escalating difficulty and time pressure.",
    mechanic: "Stage lights + drumroll. Podium-style reveal.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    title: "The Rewrite Duel",
    category: "Skill / Creative Fun",
    description: "Transform weak content into elite output in one move.",
    mechanic: "Original → improved morph animation. Applause SFX for winners.",
    color: "from-emerald-500 to-green-400",
  },
  {
    id: 5,
    title: "Allen’s Judgment Call",
    category: "Skill / Strategic Drama",
    description: "Make high-impact decisions with incomplete information.",
    mechanic: "Branching decision tree. Winners’ path highlighted in gold.",
    color: "from-red-500 to-rose-500",
  },
  {
    id: 6,
    title: "The Invisible Constraint",
    category: "Skill / Puzzle-Like Fun",
    description: "Infer hidden rules through feedback alone.",
    mechanic: "Locks snapping open. Winners unlock all.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    id: 7,
    title: "Allen’s Lucky Break",
    category: "Fun / Luck-Based",
    description: "Controlled luck with light skill qualification.",
    mechanic: "Vault opening / wheel spin. Explosive win animation.",
    color: "from-amber-400 to-yellow-300",
  },
];

const tiers = [
  {
    name: "Tier 1 – Open Skill",
    entry: "₦500–₦1,000",
    players: "50–200",
    winnerShare: "55–60%",
    color: "border-emerald-400/30 bg-emerald-400/5",
  },
  {
    name: "Tier 2 – Pro Circuit",
    entry: "₦3,000–₦5,000",
    players: "30–80",
    winnerShare: "~45% (1st)",
    color: "border-cyan-400/30 bg-cyan-400/5",
  },
  {
    name: "Tier 3 – Elite Vault",
    entry: "₦10,000–₦25,000",
    players: "10–30",
    winnerShare: "60–65%",
    color: "border-purple-400/30 bg-purple-400/5",
  },
];

export default function GameCenter() {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#020510] text-white selection:bg-emerald-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#020510]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 font-bold transition group-hover:bg-emerald-500/30">
              SH
            </span>
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.2em] text-white/50">Game Center</p>
              <p className="text-sm font-semibold">Scribe Hub Arena</p>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-white/70">Allen Online</span>
            </div>
            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition">
              My Stats
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase">
              Skill Over Luck
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">
              Prove Your Mastery. <br />
              <span className="text-emerald-400">Claim The Prize.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Welcome to the arena. 7 high-stakes contests designed to test your precision, speed, and judgment. 
              Guided by Allen, your AI co-pilot.
            </p>
          </motion.div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onClick={() => setSelectedGame(selectedGame === game.id ? null : game.id)}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-white/0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative h-full p-6 rounded-3xl border border-white/10 bg-[#0A0F1E] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                {/* Glow Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${game.color} opacity-10 blur-3xl rounded-full -mr-10 -mt-10`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[0.6rem] font-bold tracking-widest uppercase text-white/40 border border-white/10 px-2 py-1 rounded-md">
                      Game 0{game.id}
                    </span>
                    <span className={`w-2 h-2 rounded-full bg-linear-to-r ${game.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-xs font-medium text-emerald-400/80 mb-4 uppercase tracking-wider">
                    {game.category}
                  </p>
                  <p className="text-sm text-slate-400 mb-6 line-clamp-3">
                    {game.description}
                  </p>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-slate-500 mb-2">Result Reveal</p>
                    <p className="text-xs text-slate-300 italic">
                      "{game.mechanic}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tiers Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold">Entry Tiers & Payouts</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl border ${tier.color} backdrop-blur-sm`}
              >
                <h3 className="text-lg font-bold mb-4">{tier.name}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/50">Entry Fee</span>
                    <span className="font-mono font-medium">{tier.entry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Players</span>
                    <span className="font-mono font-medium">{tier.players}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50">Winner Take</span>
                    <span className="font-mono font-medium text-emerald-400">{tier.winnerShare}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0F1E] p-8 sm:p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Compete?</h2>
            <p className="text-slate-400 mb-8">
              Join the Pro Circuit today. Allen is waiting to evaluate your skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                Enter Lobby
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition font-medium">
                View Leaderboard
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
