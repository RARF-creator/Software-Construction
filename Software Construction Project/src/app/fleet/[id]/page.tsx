import { PrismaClient } from "@/generated/prisma";
import CarDetailClient from "@/components/CarDetailClient";
import PremiumFill from "@/components/PremiumFill";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export default async function CarDetailPage({ params }: { params: { id: string } }) {
  const car = await prisma.car.findUnique({
    where: { id: params.id },
    include: {
      damageReports: true,
    }
  });

  if (!car) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-white relative overflow-hidden flex flex-col">
      {}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="flex-grow">
        <CarDetailClient car={car} />
      </div>

      <PremiumFill />
    </main>
  );
}
