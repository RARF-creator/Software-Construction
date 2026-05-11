"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const result = await login(email, password);

    if (result.error) {
      setError(result.error);
      setIsLoading(false);
    } else {
      // Read user from localStorage to determine role-based redirect
      const saved = localStorage.getItem("nomad_user");
      if (saved) {
        const u = JSON.parse(saved);
        if (u.role === "ADMIN") router.push("/dashboard/admin");
        else if (u.role === "OWNER") router.push("/dashboard/owner");
        else router.push("/dashboard/customer");
      }
    }
  };

  return (
    <main className="min-h-screen bg-background text-white flex items-center justify-center px-6 relative overflow-hidden">
      {}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(99,102,241,0.08)_0%,_transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {}
        <Link href="/" className="block text-center mb-12">
          <span className="text-3xl font-black tracking-tighter">NOMAD</span>
        </Link>

        <div className="bg-surface p-10 rounded-3xl border border-border">
          <div className="mb-10">
            <h1 className="text-3xl font-black tracking-tight">Welcome back.</h1>
            <p className="text-white/40 mt-2">Sign in to your account to continue.</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@nomad.com"
                className="w-full bg-background border border-border rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-background border border-border rounded-xl p-4 text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-premium-glow w-full py-4 text-base tracking-wide mt-2 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> SIGNING IN...</>
              ) : "SIGN IN"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-white/40 text-sm">
              Don't have an account?{" "}
              <Link href="/auth/register" className="text-accent hover:underline font-bold">Create one</Link>
            </p>
          </div>

          {}
          <div className="mt-6 bg-white/[0.03] rounded-xl p-4 border border-white/5">
            <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-3">Test Accounts</p>
            <div className="space-y-1 text-xs text-white/40">
              <p>👤 <span className="font-mono">owner@nomad.com</span> — password123 (Owner)</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
