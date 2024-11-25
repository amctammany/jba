import BreweryEditor from "../../_components/BreweryEditor";
import { updateBrewery } from "../../actions";
import { getBrewery } from "../../queries";

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
  const brewery = await getBrewery(slug);
  if (!brewery) return <div>Not Found?</div>;
  return <BreweryEditor src={brewery} action={updateBrewery} />;
}
