//import { Brewery } from "@prisma/client";
import { Prop } from "@/components/Prop";
import { prisma } from "@/lib/client";
import { fail } from "assert";
import Link from "next/link";
import BreweryDisplay from "../_components/BreweryDisplay";

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

export default async function BreweryDisplayPage({
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
  return <BreweryDisplay brewery={brewery} />;
}
