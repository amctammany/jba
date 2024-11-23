import { prisma } from "@/lib/client";
import Link from "next/link";

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
          <Link key={brewery.id} href={`/breweries/${brewery.slug}`}>
            <li>{brewery.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
