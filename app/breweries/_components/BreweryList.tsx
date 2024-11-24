import { auth } from "@/app/auth";
import { Brewery } from "@prisma/client";
import Link from "next/link";
import { redirect } from "next/navigation";

export type BreweryListProps = {
  breweries: Brewery[];
};
export default async function BreweryList({ breweries }: BreweryListProps) {
  const session = await auth();
  console.log(session);
  //const { user, error, isLoading } = useUser();

  //if (isLoading) return <div>Loading...</div>;
  //if (error) return <div>{error.message}</div>;
  if (!session) return <Link href="/api/auth/login">Login</Link>;

  return (
    <div>
      <h2 className="text-lg underline font-bold">Breweries</h2>
      <b>{session?.user?.name}</b>
      <ul>
        {breweries.map((brewery) => (
          <Link key={brewery.id} href={`/breweries/${brewery.slug}`}>
            <li>{brewery.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
