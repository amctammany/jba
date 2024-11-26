import { prisma } from "../lib/client";
async function main() {
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();

  await prisma.beer.deleteMany();
  await prisma.brewery.deleteMany();
  await prisma.user.deleteMany();

  const legacy = await prisma.brewery.create({
    data: {
      name: "Legacy Ale Works",
      slug: "legacy-ale-works",
      address:
        "14965 Old St Augustine Rd suite 129-130, Jacksonville, FL 32258",
      lng: 1,
      lat: 2,
    },
  });
  await prisma.beer.create({
    data: {
      breweryId: legacy.id,
      name: "Leg2025",
      year: "JBA2025",
      description: "desc",
    },
  });
  const intuition = await prisma.brewery.create({
    data: {
      name: "Intuition Ale Works",
      slug: "intuition-ale-works",
      address: "929 E Bay St, Jacksonville, FL 32202",
      lng: 1.1,
      lat: 2.2,
    },
  });
  await prisma.beer.create({
    data: {
      breweryId: intuition.id,
      name: "int2025",
      year: "JBA2025",
      description: "desc",
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
