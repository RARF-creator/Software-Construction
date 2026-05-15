"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const { items } = useCart();
  const { user, logout } = useAuth();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
        setAvatarMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const dashboardLink =
    user?.role === "ADMIN" ? "/dashboard/admin"
    : user?.role === "OWNER" ? "/dashboard/owner"
    : "/dashboard/customer";

  const dashboardLabel =
    user?.role === "ADMIN" ? "ADMIN" : user?.role === "OWNER" ? "FLEET HQ" : "BOOKINGS";

  const handleLogout = () => {
    logout();
    setAvatarMenuOpen(false);
    router.push("/");
  };

  
  const initials = user?.name
    ? user.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()
    : "?";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white">
            NOMAD
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/fleet" className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">FLEET</Link>
            <Link href="/trip-mode" className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">TRIP MODE</Link>
            {mounted && user && (
              <Link href={dashboardLink} className="text-accent hover:text-indigo-400 transition-colors text-sm font-bold tracking-wide">
                {dashboardLabel}
              </Link>
            )}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center space-x-5">
            {/* Cart Icon */}
            <Link href="/cart" className="relative text-white/70 hover:text-white transition-colors flex items-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {mounted && items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {items.length}
                </span>
              )}
            </Link>

            <div className="w-px h-4 bg-white/20" />

            {mounted && user ? (
              /* Avatar dropdown */
              <div className="relative" ref={avatarRef}>
                <button
                  onClick={() => setAvatarMenuOpen(v => !v)}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-indigo-800 flex items-center justify-center text-white text-xs font-black border-2 border-white/10 hover:border-accent/60 transition-all shadow-lg"
                >
                  {initials}
                </button>

                <AnimatePresence>
                  {avatarMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92, y: -8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.92, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-12 w-52 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                    >
                      {/* User Info */}
                      <div className="px-5 py-4 border-b border-white/5">
                        <p className="font-bold text-sm truncate">{user.name}</p>
                        <p className="text-white/40 text-xs truncate">{user.email}</p>
                        <span className={`inline-block mt-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          user.role === "ADMIN" ? "bg-red-500/20 text-red-400"
                          : user.role === "OWNER" ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-accent/20 text-accent"
                        }`}>{user.role}</span>
                      </div>

                      {}
                      <div className="py-2">
                        <Link
                          href={dashboardLink}
                          onClick={() => setAvatarMenuOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                          Dashboard
                        </Link>
                        <Link
                          href="/profile"
                          onClick={() => setAvatarMenuOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          Profile
                        </Link>
                        <Link
                          href="/cart"
                          onClick={() => setAvatarMenuOpen(false)}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          My Cart {items.length > 0 && <span className="ml-auto bg-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{items.length}</span>}
                        </Link>
                      </div>

                      <div className="border-t border-white/5 py-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-5 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Sign Out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
                            <>
                <Link href="/auth/login" className="text-white/80 hover:text-white transition-colors text-sm font-medium tracking-wide">
                  LOGIN
                </Link>
                <Link href="/auth/register" className="btn-premium-glow px-6 py-2 text-sm tracking-wide">
                  SIGN UP
                </Link>
              </>
            )}
          </div>

          {}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center space-y-8"
          >
            <Link onClick={() => setMobileMenuOpen(false)} href="/" className="text-3xl font-black tracking-tighter text-white">HOME</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/fleet" className="text-3xl font-black tracking-tighter text-white">FLEET</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/trip-mode" className="text-3xl font-black tracking-tighter text-white">TRIP MODE</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/cart" className="text-3xl font-black tracking-tighter text-white">CART ({mounted ? items.length : 0})</Link>
            {mounted && user ? (
              <>
                <Link onClick={() => setMobileMenuOpen(false)} href={dashboardLink} className="text-3xl font-black tracking-tighter text-accent">{dashboardLabel}</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/profile" className="text-xl font-medium tracking-wide text-white/60">PROFILE</Link>
                <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="text-xl font-medium tracking-wide text-red-400">SIGN OUT</button>
              </>
            ) : (
              <>
                <Link onClick={() => setMobileMenuOpen(false)} href="/auth/login" className="text-xl font-medium tracking-wide text-white/60">LOGIN</Link>
                <Link onClick={() => setMobileMenuOpen(false)} href="/auth/register" className="btn-premium-glow px-8 py-3">SIGN UP</Link>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
