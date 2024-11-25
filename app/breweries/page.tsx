import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import { getBreweries } from "./queries";
import BreweryList from "./_components/BreweryList";

export const metadata = {
  title: "JBA: Breweries",
};

export default async function BreweriesIndex() {
  const session = await auth();
  //console.log(session);
  if (!session) redirect("/api/auth/signin");
  const breweries = await getBreweries();
  //console.log(breweries);
  return <BreweryList breweries={breweries} />;
}
