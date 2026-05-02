import { PrismaClient } from "@/generated/prisma";
import FleetGrid from "@/components/FleetGrid";
import PremiumFill from "@/components/PremiumFill";

const prisma = new PrismaClient();

export default async function FleetPage() {
  const cars = await prisma.car.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <main className="min-h-screen bg-background text-white pt-32 pb-0 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FleetGrid initialCars={cars} />
      </div>

      <PremiumFill />
    </main>
  );
}
