import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();


export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const terrain = searchParams.get("terrain");
    const passengers = Number(searchParams.get("passengers")) || 1;

    const cars = await prisma.car.findMany({
      where: {
        availability: true,
        passengers: { gte: passengers },
        ...(terrain ? { terrain } : {}),
      },
      orderBy: { rating: "desc" },
      take: 6,
    });

    return NextResponse.json(cars);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
