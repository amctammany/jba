import { prisma } from "@/lib/client";

export const metadata = {
  title: "JBA: Breweries",
};

export default async function BreweriesIndex() {
  const breweries = await prisma.brewery.findMany();
  console.log(breweries);
  return (
    <div>
      <h2 className="text-lg underline font-bold">Breweries</h2>
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>{brewery.name}</li>
        ))}
      </ul>
    </div>
  );
}
