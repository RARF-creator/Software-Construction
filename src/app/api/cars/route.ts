import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// GET /api/cars?ownerId=xxx
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const ownerId = searchParams.get("ownerId");

  try {
    const cars = await prisma.car.findMany({
      where: ownerId ? { ownerId } : {},
      include: { bookings: true, damageReports: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(cars);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
