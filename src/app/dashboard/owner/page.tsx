"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  customer: { name: string; email: string };
  car: { brand: string; model: string; image: string };
};

type Car = {
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  kilometers: number;
  availability: boolean;
  image: string;
  terrain: string;
  bookings: Booking[];
  damageReports: { id: string }[];
};

export default function OwnerDashboard() {
  const { user, isLoading } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [cars, setCars] = useState<Car[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [fetching, setFetching] = useState(true);
  const [togglingCar, setTogglingCar] = useState<string | null>(null);
  const [updatingBooking, setUpdatingBooking] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && !user) { router.push("/auth/login"); return; }
    if (user) { loadData(); }
  }, [user, isLoading]);

  const loadData = async () => {
    try {
      const [carsRes, bookingsRes] = await Promise.all([
        fetch(`/api/cars?ownerId=${user?.id}`),
        fetch("/api/bookings"),
      ]);
      if (carsRes.ok) setCars(await carsRes.json());
      if (bookingsRes.ok) setBookings(await bookingsRes.json());
    } catch { toast("Failed to load data.", "error"); }
    finally { setFetching(false); }
  };

  const toggleAvailability = async (car: Car) => {
    setTogglingCar(car.id);
    try {
      const res = await fetch(`/api/cars/${car.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ availability: !car.availability }),
      });
      if (res.ok) {
        setCars(prev => prev.map(c => c.id === car.id ? { ...c, availability: !c.availability } : c));
        toast(`${car.model} is now ${!car.availability ? "Active" : "Offline"}.`, "success");
      }
    } catch { toast("Failed to update vehicle.", "error"); }
    finally { setTogglingCar(null); }
  };

  const updateBookingStatus = async (bookingId: string, status: string) => {
    setUpdatingBooking(bookingId);
    try {
      const res = await fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status } : b));
        toast(`Booking ${status.toLowerCase()}.`, "success");
      }
    } catch { toast("Update failed.", "error"); }
    finally { setUpdatingBooking(null); }
  };

  const totalRevenue = bookings.filter(b => b.status !== "CANCELLED").reduce((s, b) => s + b.totalCost, 0);
  const activeCars = cars.filter(c => c.availability).length;
  const pendingBookings = bookings.filter(b => b.status === "PENDING");

  if (isLoading || fetching) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-white/20 border-t-accent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-white pt-32 pb-0 relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex-grow w-full">

        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end">
          <div>
            <h4 className="text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-4">Owner Command Center</h4>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">Fleet Overview</h1>
            <p className="text-white/60">Manage availability, review bookings and performance.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Total Revenue", value: `$${totalRevenue.toLocaleString()}`, accent: true },
            { label: "Fleet Size", value: cars.length },
            { label: "Active Vehicles", value: activeCars },
            { label: "Pending Approval", value: pendingBookings.length },
          ].map(s => (
            <div key={s.label} className="bg-surface p-8 rounded-3xl border border-border">
              <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">{s.label}</h3>
              <p className={`text-4xl font-black ${s.accent ? "text-accent" : ""}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Pending Bookings for Approval */}
        {pendingBookings.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-black tracking-tight mb-8 flex items-center gap-3">
              Awaiting Approval
              <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full font-bold">{pendingBookings.length}</span>
            </h2>
            <div className="space-y-4">
              {pendingBookings.map(b => (
                <div key={b.id} className="bg-surface p-6 rounded-2xl border border-border flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <div>
                    <p className="font-black text-lg">{b.car.brand} {b.car.model}</p>
                    <p className="text-white/40 text-sm">{b.customer.name} • {new Date(b.startDate).toLocaleDateString()} — {new Date(b.endDate).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-bold text-accent text-lg">${b.totalCost.toLocaleString()}</p>
                    <button
                      onClick={() => updateBookingStatus(b.id, "CONFIRMED")}
                      disabled={updatingBooking === b.id}
                      className="bg-green-500/20 border border-green-500/40 text-green-400 hover:bg-green-500/40 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all disabled:opacity-50"
                    >
                      {updatingBooking === b.id ? "..." : "Confirm"}
                    </button>
                    <button
                      onClick={() => updateBookingStatus(b.id, "CANCELLED")}
                      disabled={updatingBooking === b.id}
                      className="bg-red-500/20 border border-red-500/40 text-red-400 hover:bg-red-500/40 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all disabled:opacity-50"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fleet Management */}
        <div>
          <h2 className="text-2xl font-black tracking-tight mb-8">Manage Fleet</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cars.map(car => (
              <div key={car.id} className="bg-surface rounded-2xl p-6 border border-border flex gap-6 relative group overflow-hidden">
                <div className={`absolute top-0 left-0 w-1 h-full transition-colors ${car.availability ? "bg-green-500" : "bg-red-500"}`} />
                <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0 border border-white/10">
                  <Image src={car.image} alt={car.model} fill className="object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1">{car.brand}</h4>
                      <h3 className="text-lg font-black tracking-tight">{car.model}</h3>
                    </div>
                    <button
                      onClick={() => toggleAvailability(car)}
                      disabled={togglingCar === car.id}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${car.availability ? "bg-green-500/20 text-green-400 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/40" : "bg-red-500/20 text-red-400 hover:bg-green-500/20 hover:text-green-400"} border border-transparent disabled:opacity-50`}
                    >
                      {togglingCar === car.id ? "..." : car.availability ? "Active ✓" : "Offline ✕"}
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Rate</p>
                      <p className="font-bold text-sm">${car.pricePerDay}/day</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Bookings</p>
                      <p className="font-bold text-sm">{car.bookings?.length ?? 0}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Reports</p>
                      <p className={`font-bold text-sm ${(car.damageReports?.length ?? 0) > 0 ? "text-red-400" : ""}`}>{car.damageReports?.length ?? 0}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PremiumFill />
    </main>
  );
}
