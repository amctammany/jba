//import { Brewery } from "@prisma/client";
import { prisma } from "@/lib/client";

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

export default async function BreweryEditor({
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
      <div>
        <label htmlFor="name">Name</label>
        <span id="name">{brewery.name}</span>
      </div>
    </div>
  );
}
