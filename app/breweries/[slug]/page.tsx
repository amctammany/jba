import { Brewery } from "@prisma/client";
import { prisma } from "@/lib/client";

export const metadata = {
  title: "JBA: Breweries",
};
type BreweryDisplayProps = {
  params: {
    slug: string;
  };
};
export function generateMetadata({ params }: BreweryDisplayProps) {
  return {
    title: `JBA Brewery: ${params.slug}`,
  };
}

export default async function BreweriesIndex() {
  const breweries = await prisma.brewery.findMany();
  return (
    <div>
      BreweriesIndex
      {JSON.stringify(breweries)}
    </div>
  );
}
