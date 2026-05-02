import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Create dummy owner
  const owner = await prisma.user.upsert({
    where: { email: 'owner@nomad.com' },
    update: {},
    create: {
      email: 'owner@nomad.com',
      name: 'System Owner',
      password: 'password123',
      role: 'OWNER',
    },
  });

  console.log('Owner created:', owner.id);

  // Cars data
  const mockCars = [
    { brand: "Tesla", model: "Model S Plaid", year: 2024, pricePerDay: 140, kilometers: 5000, rating: 4.9, terrain: "City", passengers: 4, image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1470&auto=format&fit=crop", description: "Experience instant torque and autopilot capabilities in this ultimate electric sedan." },
    { brand: "Mercedes", model: "G-Class AMG", year: 2023, pricePerDay: 250, kilometers: 12000, rating: 4.8, terrain: "Offroad", passengers: 5, image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1469&auto=format&fit=crop", description: "A perfect blend of rugged off-road capability and uncompromising luxury." },
    { brand: "Porsche", model: "Taycan Turbo S", year: 2024, pricePerDay: 190, kilometers: 2000, rating: 5.0, terrain: "Highway", passengers: 4, image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=1374&auto=format&fit=crop", description: "The soul of a Porsche, electrified. Unmatched cornering and highway cruising." },
    { brand: "Land Rover", model: "Defender V8", year: 2022, pricePerDay: 130, kilometers: 24000, rating: 4.7, terrain: "Offroad", passengers: 5, image: "https://images.unsplash.com/photo-1605810731671-512c01831889?q=80&w=1470&auto=format&fit=crop", description: "Legendary off-road prowess combined with modern British refinement." },
    { brand: "BMW", model: "M8 Competition", year: 2023, pricePerDay: 180, kilometers: 8000, rating: 4.8, terrain: "Highway", passengers: 4, image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1469&auto=format&fit=crop", description: "A grand tourer designed for dominating the autobahn." },
    { brand: "Audi", model: "RS e-tron GT", year: 2024, pricePerDay: 160, kilometers: 3500, rating: 4.9, terrain: "City", passengers: 4, image: "https://images.unsplash.com/photo-1614026480209-cd9934144671?q=80&w=1470&auto=format&fit=crop", description: "Aerodynamic perfection meets everyday city drivability." },
  ];

  for (const c of mockCars) {
    const existing = await prisma.car.findFirst({
      where: { brand: c.brand, model: c.model }
    });
    
    if (!existing) {
      const createdCar = await prisma.car.create({
        data: {
          ...c,
          ownerId: owner.id,
          damageReports: {
            create: [
              {
                description: "Minor scratch on front left bumper.",
                date: new Date('2024-01-15')
              }
            ]
          }
        }
      });
      console.log('Created car:', createdCar.brand, createdCar.model);
    }
  }

  console.log('Database seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
