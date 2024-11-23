import { prisma } from "../lib/client";
async function main() {
  await prisma.beer.deleteMany();
  await prisma.brewery.deleteMany();

  await prisma.brewery.createMany({
    data: [
      {
        name: "Legacy Ale Works",
        slug: "legacy-ale-works",
        address:
          "14965 Old St Augustine Rd suite 129-130, Jacksonville, FL 32258",
        lng: 1,
        lat: 2,
      },
      {
        name: "Intuition Ale Works",
        slug: "intuition-ale-works",
        address: "929 E Bay St, Jacksonville, FL 32202",
        lng: 1.1,
        lat: 2.2,
      },
    ],
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
