import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// GET /api/bookings?customerId=xxx
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const customerId = searchParams.get("customerId");

  try {
    const bookings = await prisma.booking.findMany({
      where: customerId ? { customerId } : {},
      include: { car: true, customer: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(bookings);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { carId, startDate, endDate, totalCost, customerId: bodyCustomerId } = body;

    if (!carId || !startDate || !endDate || !totalCost) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Use customerId from body if provided, otherwise fall back to the first seeded customer
    let customerId = bodyCustomerId;

    if (!customerId) {
      const fallbackUser = await prisma.user.findFirst({
        where: { role: "CUSTOMER" }
      });
      if (!fallbackUser) {
        return NextResponse.json({ error: "No customer found. Please seed the database." }, { status: 404 });
      }
      customerId = fallbackUser.id;
    }

    const booking = await prisma.booking.create({
      data: {
        carId,
        customerId,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        totalCost: Number(totalCost),
        status: "PENDING",
      }
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
