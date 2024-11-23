//import { Brewery } from "@prisma/client";
import { prisma } from "@/lib/client";
import Link from "next/link";

type BreweryDisplayParams = Promise<{
  slug: string;
}>;
export async function generateMetadata({
  params,
}: {
  params: BreweryDisplayParams;
}) {
  const { slug } = await params;

  return {
    title: `JBA Brewery: ${slug}`,
  };
}

export default async function BreweryDisplay({
  params,
}: {
  params: BreweryDisplayParams;
}) {
  const { slug } = await params;
  const brewery = await prisma.brewery.findFirst({
    where: {
      slug,
    },
  });
  if (!brewery) return <div>Not Found?</div>;
  return (
    <div>
      <div>
        <span className="text-lg font-bold">Brewery Display</span>
        <Link href={`/breweries/${brewery.slug}/edit`}>Edit</Link>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <span id="name">{brewery.name}</span>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <span id="address">{brewery.address}</span>
      </div>
    </div>
  );
}
