"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PremiumFill from "@/components/PremiumFill";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";

type Booking = {
  id: string;
  startDate: string;
  endDate: string;
  totalCost: number;
  status: string;
  car: {
    id: string;
    brand: string;
    model: string;
    image: string;
    terrain: string;
    pricePerDay: number;
  };
};

const STATUS_STYLES: Record<string, string> = {
  CONFIRMED: "bg-green-500/20 text-green-400 border-green-500/30",
  PENDING: "bg-accent/20 text-accent border-accent/30",
  CANCELLED: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function CustomerDashboard() {
  const { user, isLoading } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [fetching, setFetching] = useState(true);
  const [cancelling, setCancelling] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "active" | "history">("all");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (!isLoading && !user) { router.push("/auth/login"); return; }
    if (user) fetchBookings();
  }, [user, isLoading]);

  const fetchBookings = async () => {
    setFetching(true);
    try {
      const res = await fetch(`/api/bookings?customerId=${user?.id}`);
      if (res.ok) setBookings(await res.json());
    } catch { toast("Failed to load bookings.", "error"); }
    finally { setFetching(false); }
  };

  const handleCancel = async (bookingId: string) => {
    setCancelling(bookingId);
    try {
      const res = await fetch(`/api/bookings/${bookingId}`, { method: "DELETE" });
      if (res.ok) {
        setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: "CANCELLED" } : b));
        setSelectedBooking(null);
        toast("Booking cancelled.", "success");
      } else toast("Failed to cancel.", "error");
    } catch { toast("An error occurred.", "error"); }
    finally { setCancelling(null); }
  };

  const filtered =
    activeTab === "active" ? bookings.filter(b => b.status === "PENDING" || b.status === "CONFIRMED")
    : activeTab === "history" ? bookings.filter(b => b.status === "CANCELLED")
    : bookings;

  const totalSpend = bookings.filter(b => b.status !== "CANCELLED").reduce((s, b) => s + b.totalCost, 0);
  const activeCount = bookings.filter(b => b.status === "PENDING" || b.status === "CONFIRMED").length;

  if (isLoading || fetching) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-white/20 border-t-accent rounded-full animate-spin" />
          <p className="text-white/40 text-sm tracking-widest uppercase font-bold">Loading Dashboard</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-white pt-28 pb-0 relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(99,102,241,0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex-grow w-full">

        {}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-accent text-xs font-bold tracking-[0.3em] uppercase mb-3">Bookings Portal</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              {user?.name?.split(" ")[0]}'s<br />
              <span className="text-white/30">Journeys.</span>
            </h1>
          </div>
          <Link href="/fleet">
            <button className="btn-premium-glow px-8 py-3 text-sm tracking-wide whitespace-nowrap">+ New Booking</button>
          </Link>
        </div>

        {}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Bookings", value: bookings.length, icon: "🗂" },
            { label: "Active Journeys", value: activeCount, icon: "🚗", accent: true },
            { label: "Total Spent", value: `$${totalSpend.toLocaleString()}`, icon: "💳" },
            { label: "Member Since", value: new Date().getFullYear().toString(), icon: "🏆" },
          ].map(s => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-surface p-6 rounded-2xl border transition-all ${s.accent ? "border-accent/40 bg-accent/5" : "border-border hover:border-white/20"}`}
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{s.label}</p>
              <p className={`text-3xl font-black ${s.accent ? "text-accent" : ""}`}>{s.value}</p>
            </motion.div>
          ))}
        </div>

        {}
        <div className="flex items-center gap-1 p-1 bg-surface rounded-2xl border border-border w-fit mb-10">
          {(["all", "active", "history"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab ? "bg-accent text-white shadow-lg" : "text-white/40 hover:text-white"
              }`}
            >
              {tab === "all" ? `All (${bookings.length})` : tab === "active" ? `Active (${activeCount})` : `Cancelled`}
            </button>
          ))}
        </div>

        {}
        {filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 bg-white/[0.02] rounded-3xl border border-white/5">
            <p className="text-4xl mb-4">🛣</p>
            <p className="text-white/40 font-medium mb-6">No bookings in this category.</p>
            <Link href="/fleet"><button className="btn-premium-glow px-8 py-3 text-sm">Browse Fleet</button></Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <AnimatePresence>
              {filtered.map((booking, i) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedBooking(booking)}
                  className="bg-surface rounded-2xl border border-border hover:border-white/20 transition-all cursor-pointer group overflow-hidden relative"
                >
                  {}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${booking.status === "CONFIRMED" ? "bg-green-500" : booking.status === "PENDING" ? "bg-accent" : "bg-red-500"}`} />

                  <div className="flex gap-5 p-5">
                    {}
                    <div className="relative w-28 h-24 rounded-xl overflow-hidden shrink-0 border border-white/5">
                      <Image src={booking.car.image} alt={booking.car.model} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>

                    {}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <p className="text-accent text-[10px] font-bold uppercase tracking-widest">{booking.car.brand}</p>
                          <h3 className="text-lg font-black tracking-tight leading-tight">{booking.car.model}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border whitespace-nowrap ${STATUS_STYLES[booking.status]}`}>
                          {booking.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mt-3">
                        <div>
                          <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Pick-up</p>
                          <p className="text-xs font-medium mt-0.5">{new Date(booking.startDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Return</p>
                          <p className="text-xs font-medium mt-0.5">{new Date(booking.endDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Cost</p>
                          <p className="text-xs font-bold mt-0.5 text-accent">${booking.totalCost.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {}
      <AnimatePresence>
        {selectedBooking && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBooking(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-surface border-l border-border z-50 overflow-y-auto"
            >
              <div className="p-8">
                <button onClick={() => setSelectedBooking(null)} className="text-white/40 hover:text-white mb-8 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
                  ✕ Close
                </button>

                <div className="relative h-56 rounded-2xl overflow-hidden mb-8 border border-white/10">
                  <Image src={selectedBooking.car.image} alt={selectedBooking.car.model} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest">{selectedBooking.car.brand}</p>
                    <h3 className="text-2xl font-black">{selectedBooking.car.model}</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {[
                    { label: "Booking Ref", value: selectedBooking.id.split("-")[0].toUpperCase() },
                    { label: "Status", value: selectedBooking.status },
                    { label: "Pick-up Date", value: new Date(selectedBooking.startDate).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) },
                    { label: "Return Date", value: new Date(selectedBooking.endDate).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) },
                    { label: "Total Cost", value: `$${selectedBooking.totalCost.toLocaleString()}` },
                    { label: "50% Advance Paid", value: `$${(selectedBooking.totalCost / 2).toLocaleString()}` },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between items-center py-3 border-b border-white/5">
                      <p className="text-white/40 text-sm">{row.label}</p>
                      <p className="font-bold text-sm">{row.value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Link href={`/fleet/${selectedBooking.car.id}`} onClick={() => setSelectedBooking(null)}>
                    <button className="btn-premium-glow w-full py-4 text-sm tracking-wide">View Vehicle</button>
                  </Link>
                  {selectedBooking.status === "PENDING" && (
                    <button
                      onClick={() => handleCancel(selectedBooking.id)}
                      disabled={cancelling === selectedBooking.id}
                      className="w-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 px-6 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all disabled:opacity-50"
                    >
                      {cancelling === selectedBooking.id ? "Cancelling..." : "Cancel Booking"}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <PremiumFill />
    </main>
  );
}
