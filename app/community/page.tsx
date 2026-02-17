'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ShieldAlert, Users, Zap, Lock, Info, X } from 'lucide-react';

// --- Types ---
interface User {
  id: string;
  username: string;
  role: 'user' | 'mod' | 'admin';
  avatarColor: string;
}

interface Message {
  id: string;
  userId: string;
  username: string;
  text: string;
  timestamp: Date;
  role: 'user' | 'mod' | 'admin';
  avatarColor: string;
}

// --- Mock Data ---
const CURRENT_USER: User = {
  id: 'current-user',
  username: 'You',
  role: 'user',
  avatarColor: 'bg-emerald-500',
};

const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    userId: 'mod-1',
    username: 'Allen_Mod',
    text: 'Welcome to the ScribeHub Community Lounge! 🚀 Remember to keep it positive and safe.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    role: 'mod',
    avatarColor: 'bg-purple-600',
  },
  {
    id: '2',
    userId: 'user-2',
    username: 'CreativeSoul',
    text: 'Just finished the copywriting sprint! The new tools are amazing.',
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    role: 'user',
    avatarColor: 'bg-blue-500',
  },
  {
    id: '3',
    userId: 'user-3',
    username: 'TechNinja',
    text: 'Anyone else loving the new dark mode on the dashboard?',
    timestamp: new Date(Date.now() - 1000 * 60 * 2),
    role: 'user',
    avatarColor: 'bg-pink-500',
  },
];

// --- Moderation Logic ---
const FORBIDDEN_PATTERNS = [
  // Phone numbers (loose matching)
  /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/,
  /\b\d{10,}\b/,
  // Social handles
  /@\w+/,
  /(?:instagram|twitter|x\.com|facebook|tiktok|snapchat).*?\//i,
  // Begging / Money
  /\b(send|give|borrow|need)\s+(money|cash|funds|naira|dollars|cedis)\b/i,
  /\b(account|acct)\s+number\b/i,
  /\b(bank|transfer)\s+details\b/i,
  // Negative sentiment about ScribeHub
  /\b(scribehub|site|platform)\s+(sucks|bad|scam|trash|worst|horrible)\b/i,
  // Direct contact requests
  /\b(dm|pm|message)\s+me\b/i,
  /\b(call|text)\s+me\b/i,
  /\b(whatsapp|telegram)\b/i,
];

const WARNING_MESSAGES = [
  "⚠️ Warning: Sharing personal contact info is not allowed.",
  "⚠️ Warning: Soliciting funds or begging is strictly prohibited.",
  "⚠️ Warning: Please keep the conversation positive and constructive.",
  "⚠️ Warning: Direct messaging requests are not permitted here.",
  "⚠️ Warning: Social media links are not allowed.",
];

const Community = () => {
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [warning, setWarning] = useState<string | null>(null);
  const [isBanned, setIsBanned] = useState(false);
  const [violationCount, setViolationCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || isBanned) return;

    // 1. Moderation Check
    let violationFound = false;
    for (const pattern of FORBIDDEN_PATTERNS) {
      if (pattern.test(inputValue)) {
        violationFound = true;
        break;
      }
    }

    if (violationFound) {
      const newCount = violationCount + 1;
      setViolationCount(newCount);
      
      if (newCount >= 3) {
        setIsBanned(true);
        setWarning("🚫 You have been temporarily banned for repeated violations.");
      } else {
        setWarning("⚠️ Message blocked: Please follow community guidelines. No contact info, negativity, or solicitation.");
      }
      
      // Clear warning after 5 seconds
      setTimeout(() => setWarning(null), 5000);
      return;
    }

    // 2. Add Message
    const newMessage: Message = {
      id: Date.now().toString(),
      userId: CURRENT_USER.id,
      username: CURRENT_USER.username,
      text: inputValue,
      timestamp: new Date(),
      role: CURRENT_USER.role,
      avatarColor: CURRENT_USER.avatarColor,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-hidden flex flex-col relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-900/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-black/40 backdrop-blur-xl px-4 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <Link href="/" className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <X size={20} className="text-white/70" />
          </Link>
          <div>
            <h1 className="text-lg font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Community Lounge
            </h1>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              1,243 Online
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
            <Info size={18} className="text-white/70" />
          </button>
        </div>
      </header>

      

<Link
  href="/home"
  className="inline-flex items-center mb-6 text-sm text-white/70 hover:text-white transition-colors"
>
  ← Back to Home
</Link>


      {/* Warning Banner */}
      <AnimatePresence>
        {warning && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-20 left-4 right-4 z-50 p-4 rounded-xl border backdrop-blur-md shadow-2xl flex items-start gap-3 ${
              isBanned 
                ? 'bg-red-500/20 border-red-500/50 text-red-200' 
                : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-200'
            }`}
          >
            <ShieldAlert className="shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">{isBanned ? 'Access Restricted' : 'Guideline Violation'}</p>
              <p className="text-xs opacity-90 mt-1">{warning}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6 relative z-0 scrollbar-hide">
        {/* Welcome Message */}
        <div className="flex justify-center my-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 max-w-sm text-center backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-blue-500 mx-auto mb-3 flex items-center justify-center">
              <Users size={20} className="text-white" />
            </div>
            <h3 className="font-semibold text-white mb-1">Welcome to the Hub</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              This is a safe space for growth. No personal contacts, no negativity, no solicitation. 
              Violations result in an immediate ban.
            </p>
          </div>
        </div>

        {messages.map((msg) => {
          const isMe = msg.userId === CURRENT_USER.id;
          const isMod = msg.role === 'mod';

          return (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${isMe ? 'flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-bold text-white shadow-lg ${msg.avatarColor}`}>
                {msg.username[0]}
              </div>

              {/* Message Bubble */}
              <div className={`max-w-[80%] space-y-1 ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                <div className="flex items-center gap-2 px-1">
                  <span className={`text-xs font-medium ${isMod ? 'text-purple-400' : 'text-white/60'}`}>
                    {msg.username}
                  </span>
                  {isMod && (
                    <span className="bg-purple-500/20 text-purple-300 text-[10px] px-1.5 py-0.5 rounded border border-purple-500/30">
                      MOD
                    </span>
                  )}
                  <span className="text-[10px] text-white/30">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm backdrop-blur-sm border ${
                    isMe
                      ? 'bg-emerald-600/80 border-emerald-500/30 text-white rounded-tr-none'
                      : isMod
                      ? 'bg-purple-900/40 border-purple-500/30 text-white rounded-tl-none'
                      : 'bg-white/10 border-white/10 text-white/90 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </motion.div>
          );
        })}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="relative z-10 p-4 bg-black/60 backdrop-blur-xl border-t border-white/10">
        <form onSubmit={handleSendMessage} className="relative max-w-4xl mx-auto">
          <div className="relative flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isBanned}
              placeholder={isBanned ? "You are banned from chatting." : "Type a message..."}
              className={`w-full bg-white/5 border border-white/10 rounded-full pl-5 pr-12 py-3.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all ${
                isBanned ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isBanned}
              className="absolute right-2 p-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all"
            >
              {isBanned ? <Lock size={18} /> : <Send size={18} />}
            </button>
          </div>
          <p className="text-center text-[10px] text-white/30 mt-3">
            <ShieldAlert size={10} className="inline mr-1" />
            Messages are monitored. No personal info,or negativity allowed.
          </p>
        </form>
      </footer>
    </div>
  );
};

export default Community;
