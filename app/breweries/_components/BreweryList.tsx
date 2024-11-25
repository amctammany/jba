import { Brewery } from "@prisma/client";
import Link from "next/link";

function BreweryListItem({ brewery }: { brewery: Brewery }) {
  return (
    <Link key={brewery.id} href={`/breweries/${brewery.slug}`}>
      <li className="group relative flex flex-col bg-white hover:bg-primary-500/10 mb-2 p-3">
        <span className="flex-grow text-lg lg:text-xl font-bold">
          {brewery.name}
        </span>
        <span>{brewery.address}</span>
      </li>
    </Link>
  );
}

export type BreweryListProps = {
  breweries: Brewery[];
};
export default async function BreweryList({ breweries }: BreweryListProps) {
  //const session = await auth();
  //console.log(session);
  //const { user, error, isLoading } = useUser();

  //if (isLoading) return <div>Loading...</div>;
  //if (error) return <div>{error.message}</div>;
  //if (!session) return <Link href="/api/auth/login">Login</Link>;

  return (
    <div>
      <h2 className="text-lg underline font-bold">Breweries</h2>
      <ul className="border-black  border-2 bg-paper gap-7">
        {breweries.map((brewery) => (
          <BreweryListItem key={brewery.id} brewery={brewery} />
        ))}
      </ul>
    </div>
  );
}
