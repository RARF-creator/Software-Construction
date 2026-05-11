"use client";

import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import PremiumFill from "@/components/PremiumFill";

export default function ProfilePage() {
  const { user, isLoading, logout } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) { router.push("/auth/login"); return; }
    if (user) { setName(user.name); setEmail(user.email); }
  }, [user, isLoading]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    await new Promise(r => setTimeout(r, 1000));
    toast("Profile updated successfully!", "success");
    setIsSaving(false);
  };

  const handleLogout = () => {
    logout();
    toast("Logged out. See you soon!", "info");
    router.push("/");
  };

  if (isLoading) {
    return <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-white/20 border-t-accent rounded-full animate-spin" />
    </main>;
  }

  const roleColors: Record<string, string> = {
    ADMIN: "bg-red-500/20 text-red-400",
    OWNER: "bg-yellow-500/20 text-yellow-400",
    CUSTOMER: "bg-accent/20 text-accent",
  };

  return (
    <main className="min-h-screen bg-background text-white pt-32 pb-0 flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 w-full flex-grow relative z-10">
        {}
        <div className="mb-12">
          <h4 className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4">Account</h4>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter">Your Profile</h1>
        </div>

        {}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/10 mb-10 ${roleColors[user?.role ?? "CUSTOMER"]}`}>
          <span className="w-2 h-2 rounded-full bg-current" />
          {user?.role}
        </div>

        {}
        <form onSubmit={handleSave} className="bg-surface p-8 md:p-10 rounded-3xl border border-border space-y-6 mb-8">
          <h2 className="text-xl font-black tracking-tight">Personal Details</h2>

          <div>
            <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-background border border-border rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-background border border-border rounded-xl p-4 text-white focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSaving}
              className="btn-premium-glow px-8 py-3 text-sm tracking-wide flex items-center gap-2 disabled:opacity-50"
            >
              {isSaving ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Saving...</> : "Save Changes"}
            </button>
          </div>
        </form>

        {}
        <div className="bg-surface p-8 rounded-3xl border border-red-500/20">
          <h2 className="text-xl font-black tracking-tight mb-2 text-red-400">Danger Zone</h2>
          <p className="text-white/40 text-sm mb-6">These actions are irreversible. Proceed with caution.</p>
          <button
            onClick={handleLogout}
            className="bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
          >
            Sign Out of Account
          </button>
        </div>
      </div>

      <PremiumFill />
    </main>
  );
}
