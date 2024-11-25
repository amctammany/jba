import BreweryDisplay from "../_components/BreweryDisplay";
import { getBrewery } from "../queries";

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
  const brewery = await getBrewery(slug);
  if (!brewery) return <div>Not Found?</div>;
  return <BreweryDisplay brewery={brewery} />;
}
