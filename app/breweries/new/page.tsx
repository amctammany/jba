//import { Brewery } from "@prisma/client";
import { prisma } from "@/lib/client";
import BreweryEditor from "../_components/BreweryEditor";
import { createBrewery } from "../actions";
import { Brewery } from "@prisma/client";

type BreweryCreatorParams = Promise<{}>;
export async function generateMetadata({
  params,
}: {
  params: BreweryCreatorParams;
}) {
  //const { slug } = await params;
  return {
    title: `JBA Brewery: New Brewery`,
  };
}

export default async function BreweryCreatorPage(
  {
    //params,
  }: {
    params: BreweryCreatorParams;
  }
) {
  //const { slug } = await params;
  //const brewery = await prisma.brewery.findFirst({ where: { slug } });
  //if (!brewery) return <div>Not Found?</div>;
  return (
    <div>
      Brewery Creator
      <BreweryEditor src={{} as Brewery} action={createBrewery} />
    </div>
  );
}
