"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PremiumFill from "@/components/PremiumFill";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/context/ToastContext";
import { useRouter } from "next/navigation";

type User = { id: string; name: string; email: string; role: string; createdAt: string };
type Car = { id: string; brand: string; model: string; image: string; pricePerDay: number; availability: boolean; terrain: string };
type Booking = {
  id: string; startDate: string; endDate: string; totalCost: number; status: string;
  car: Car; customer: User;
};

const STATUS_STYLES: Record<string, string> = {
  CONFIRMED: "bg-green-500/20 text-green-400 border-green-500/30",
  PENDING: "bg-accent/20 text-accent border-accent/30",
  CANCELLED: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function AdminDashboard() {
  const { user, isLoading } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [fetching, setFetching] = useState(true);
  const [activeTab, setActiveTab] = useState<"bookings" | "users" | "fleet">("bookings");
  const [updatingBooking, setUpdatingBooking] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (!isLoading && !user) { router.push("/auth/login"); return; }
    if (user) loadAll();
  }, [user, isLoading]);

  const loadAll = async () => {
    setFetching(true);
    try {
      const [bRes, cRes] = await Promise.all([
        fetch("/api/bookings"),
        fetch("/api/cars"),
      ]);
      if (bRes.ok) {
        const data = await bRes.json();
        setBookings(data);
        // Extract unique users from bookings
        const unique = new Map<string, User>();
        data.forEach((b: Booking) => { if (b.customer) unique.set(b.customer.id, b.customer); });
        setUsers(Array.from(unique.values()));
      }
      if (cRes.ok) setCars(await cRes.json());
    } catch { toast("Failed to load data.", "error"); }
    finally { setFetching(false); }
  };

  const updateStatus = async (id: string, status: string) => {
    setUpdatingBooking(id);
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b));
        if (selectedBooking?.id === id) setSelectedBooking(prev => prev ? { ...prev, status } : null);
        toast(`Booking ${status.toLowerCase()}.`, "success");
      } else toast("Update failed.", "error");
    } catch { toast("Error.", "error"); }
    finally { setUpdatingBooking(null); }
  };

  const totalRevenue = bookings.filter(b => b.status !== "CANCELLED").reduce((s, b) => s + b.totalCost, 0);
  const confirmedCount = bookings.filter(b => b.status === "CONFIRMED").length;
  const pendingCount = bookings.filter(b => b.status === "PENDING").length;
  const availableCars = cars.filter(c => c.availability).length;

  const filteredBookings = bookings.filter(b =>
    b.car?.model?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.customer?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredUsers = users.filter(u =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCars = cars.filter(c =>
    `${c.brand} ${c.model}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading || fetching) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-white/20 border-t-red-400 rounded-full animate-spin" />
          <p className="text-white/40 text-sm tracking-widest uppercase font-bold">Loading Admin Panel</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-white pt-28 pb-0 relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(239,68,68,0.04)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex-grow w-full">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
            <p className="text-red-400 text-xs font-bold tracking-[0.3em] uppercase">Admin Control Panel</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">Global Analytics</h1>
          <p className="text-white/50">Full platform oversight — users, bookings, fleet, and revenue.</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Platform Revenue", value: `$${totalRevenue.toLocaleString()}`, icon: "💰", accent: "text-green-400" },
            { label: "Total Bookings", value: bookings.length, icon: "📋", accent: "" },
            { label: "Pending Review", value: pendingCount, icon: "⏳", accent: "text-accent" },
            { label: "Active Fleet", value: `${availableCars} / ${cars.length}`, icon: "🚗", accent: "" },
          ].map(s => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface p-6 rounded-2xl border border-border hover:border-white/20 transition-all"
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">{s.label}</p>
              <p className={`text-3xl font-black ${s.accent}`}>{s.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Search + Tabs */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          <div className="flex items-center gap-1 p-1 bg-surface rounded-2xl border border-border">
            {(["bookings", "users", "fleet"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSearchQuery(""); }}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab ? "bg-red-500/20 text-red-400 border border-red-500/30" : "text-white/40 hover:text-white"
                }`}
              >
                {tab === "bookings" ? `Bookings (${bookings.length})` : tab === "users" ? `Users (${users.length})` : `Fleet (${cars.length})`}
              </button>
            ))}
          </div>

          <div className="relative flex-grow max-w-xs">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-9 pr-4 py-2.5 bg-surface border border-border rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* BOOKINGS TABLE */}
        <AnimatePresence mode="wait">
          {activeTab === "bookings" && (
            <motion.div key="bookings" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="bg-surface rounded-3xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/5 bg-white/[0.02]">
                        {["Ref", "Customer", "Vehicle", "Dates", "Value", "Status", "Actions"].map(h => (
                          <th key={h} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/30">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {filteredBookings.slice(0, 20).map(b => (
                        <tr
                          key={b.id}
                          onClick={() => setSelectedBooking(b)}
                          className="hover:bg-white/[0.03] transition-colors cursor-pointer group"
                        >
                          <td className="px-6 py-4 font-mono text-xs text-white/40">{b.id.split("-")[0].toUpperCase()}</td>
                          <td className="px-6 py-4">
                            <p className="font-bold text-sm">{b.customer?.name}</p>
                            <p className="text-white/40 text-xs">{b.customer?.email}</p>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-10 h-8 rounded-lg overflow-hidden border border-white/10 shrink-0">
                                <Image src={b.car?.image} alt={b.car?.model} fill className="object-cover" />
                              </div>
                              <span className="text-sm font-medium">{b.car?.brand} {b.car?.model}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-white/60">
                            {new Date(b.startDate).toLocaleDateString()} →<br />{new Date(b.endDate).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 font-bold text-sm text-green-400">${b.totalCost.toLocaleString()}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${STATUS_STYLES[b.status]}`}>
                              {b.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {b.status === "PENDING" && (
                              <div className="flex gap-2" onClick={e => e.stopPropagation()}>
                                <button
                                  onClick={() => updateStatus(b.id, "CONFIRMED")}
                                  disabled={updatingBooking === b.id}
                                  className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-[10px] font-bold hover:bg-green-500/40 transition-all disabled:opacity-40"
                                >✓ Confirm</button>
                                <button
                                  onClick={() => updateStatus(b.id, "CANCELLED")}
                                  disabled={updatingBooking === b.id}
                                  className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-[10px] font-bold hover:bg-red-500/40 transition-all disabled:opacity-40"
                                >✕ Cancel</button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredBookings.length === 0 && (
                  <div className="text-center py-16 text-white/30 font-medium">No bookings found.</div>
                )}
              </div>
            </motion.div>
          )}

          {/* USERS TABLE */}
          {activeTab === "users" && (
            <motion.div key="users" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="bg-surface rounded-3xl border border-border overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                      {["Avatar", "Name", "Email", "Role", "Bookings"].map(h => (
                        <th key={h} className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/30">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredUsers.map(u => {
                      const userBookings = bookings.filter(b => b.customer?.id === u.id).length;
                      const initials = u.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
                      return (
                        <tr key={u.id} className="hover:bg-white/[0.03] transition-colors">
                          <td className="px-6 py-4">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-indigo-800 flex items-center justify-center text-white text-xs font-black">
                              {initials}
                            </div>
                          </td>
                          <td className="px-6 py-4 font-bold">{u.name}</td>
                          <td className="px-6 py-4 text-white/50 text-sm">{u.email}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
                              u.role === "ADMIN" ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : u.role === "OWNER" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              : "bg-accent/20 text-accent border-accent/30"
                            }`}>{u.role}</span>
                          </td>
                          <td className="px-6 py-4 font-bold text-accent">{userBookings}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {filteredUsers.length === 0 && (
                  <div className="text-center py-16 text-white/30 font-medium">No users found.</div>
                )}
              </div>
            </motion.div>
          )}

          {/* FLEET TABLE */}
          {activeTab === "fleet" && (
            <motion.div key="fleet" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map(car => (
                  <div key={car.id} className="bg-surface rounded-2xl border border-border overflow-hidden group hover:border-white/20 transition-all">
                    <div className="relative h-40 overflow-hidden">
                      <Image src={car.image} alt={car.model} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <p className="text-accent text-[10px] font-bold uppercase tracking-widest">{car.brand}</p>
                        <p className="font-black text-lg leading-tight">{car.model}</p>
                      </div>
                      <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${car.availability ? "bg-green-500/80 text-white" : "bg-red-500/80 text-white"}`}>
                        {car.availability ? "Active" : "Offline"}
                      </span>
                    </div>
                    <div className="p-4 grid grid-cols-3 gap-3">
                      <div>
                        <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Rate</p>
                        <p className="font-bold text-sm">${car.pricePerDay}/d</p>
                      </div>
                      <div>
                        <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">Terrain</p>
                        <p className="font-bold text-sm">{car.terrain}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {filteredCars.length === 0 && (
                <div className="text-center py-16 text-white/30 font-medium">No vehicles found.</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Booking Detail Drawer */}
      <AnimatePresence>
        {selectedBooking && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedBooking(null)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-surface border-l border-border z-50 overflow-y-auto"
            >
              <div className="p-8">
                <button onClick={() => setSelectedBooking(null)} className="text-white/40 hover:text-white mb-8 text-sm font-bold tracking-widest uppercase">
                  ✕ Close
                </button>

                <div className="relative h-48 rounded-2xl overflow-hidden mb-8 border border-white/10">
                  <Image src={selectedBooking.car.image} alt={selectedBooking.car.model} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-accent text-xs font-bold uppercase tracking-widest">{selectedBooking.car.brand}</p>
                    <h3 className="text-xl font-black">{selectedBooking.car.model}</h3>
                  </div>
                </div>

                <h3 className="text-lg font-black mb-4">Booking Details</h3>
                <div className="space-y-3 mb-8">
                  {[
                    { label: "Booking Ref", value: selectedBooking.id.split("-")[0].toUpperCase() },
                    { label: "Customer", value: selectedBooking.customer?.name },
                    { label: "Email", value: selectedBooking.customer?.email },
                    { label: "Status", value: selectedBooking.status },
                    { label: "Pick-up", value: new Date(selectedBooking.startDate).toLocaleDateString() },
                    { label: "Return", value: new Date(selectedBooking.endDate).toLocaleDateString() },
                    { label: "Total Cost", value: `$${selectedBooking.totalCost.toLocaleString()}` },
                  ].map(row => (
                    <div key={row.label} className="flex justify-between py-2.5 border-b border-white/5">
                      <p className="text-white/40 text-sm">{row.label}</p>
                      <p className="font-bold text-sm">{row.value}</p>
                    </div>
                  ))}
                </div>

                {selectedBooking.status === "PENDING" && (
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => updateStatus(selectedBooking.id, "CONFIRMED")}
                      disabled={updatingBooking === selectedBooking.id}
                      className="py-3 bg-green-500/20 border border-green-500/40 text-green-400 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-green-500/40 transition-all disabled:opacity-40"
                    >✓ Confirm</button>
                    <button
                      onClick={() => updateStatus(selectedBooking.id, "CANCELLED")}
                      disabled={updatingBooking === selectedBooking.id}
                      className="py-3 bg-red-500/20 border border-red-500/40 text-red-400 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-red-500/40 transition-all disabled:opacity-40"
                    >✕ Cancel</button>
                  </div>
                )}
                {selectedBooking.status !== "PENDING" && (
                  <span className={`w-full block text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest border ${STATUS_STYLES[selectedBooking.status]}`}>
                    {selectedBooking.status}
                  </span>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <PremiumFill />
    </main>
  );
}
