//import { Brewery } from "@prisma/client";
import { prisma } from "@/lib/client";
import BreweryEditor from "../../_components/BreweryEditor";
import { updateBrewery } from "../../actions";

type BreweryEditorParams = Promise<{
  slug: string;
}>;
export async function generateMetadata({
  params,
}: {
  params: BreweryEditorParams;
}) {
  const { slug } = await params;
  return {
    title: `JBA Brewery: ${slug}`,
  };
}

export default async function BreweryEditorPage({
  params,
}: {
  params: BreweryEditorParams;
}) {
  const { slug } = await params;
  const brewery = await prisma.brewery.findFirst({ where: { slug } });
  if (!brewery) return <div>Not Found?</div>;
  return (
    <div>
      Brewery Editor
      <BreweryEditor src={brewery} action={updateBrewery} />
    </div>
  );
}
