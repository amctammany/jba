import { prisma } from "@/lib/client";
import Link from "next/link";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "JBA: Breweries",
};

export default async function BreweriesIndex() {
  const session = await auth();
  //console.log(session);
  if (!session) redirect("/api/auth/signin");
  const breweries = await prisma.brewery.findMany();
  //console.log(breweries);
  return (
    <div>
      <h2 className="text-lg underline font-bold">Breweries</h2>
      <Link href="/breweries/new">New Brewery</Link>
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
