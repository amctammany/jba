import React from "react";
import { Beer } from "@prisma/client";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button/ButtonLink";
const BeerListActions = ({ slug }: { slug: string }) => {
  return (
    <div className="grid grid-flow-col">
      <ButtonLink href={`/breweries/${slug}/beers/new`}>New</ButtonLink>
    </div>
  );
};

function BeerListItem({ beer }: { beer: Beer }) {
  return (
    <li className="group relative flex flex-col bg-white hover:bg-primary-500/10 border-b-2 p-3">
      <span className="flex-grow text-lg lg:text-xl font-bold">
        {beer.name}
      </span>
      <span>{beer.description}</span>
    </li>
  );
}

export type BeerListProps = {
  beers: Beer[];
  slug: string;
};
export function BeerList({ beers, slug }: BeerListProps) {
  return (
    <Section header="Beers" actions={<BeerListActions slug={slug} />}>
      {beers.map((beer) => (
        <BeerListItem key={beer.id} beer={beer} />
      ))}
    </Section>
  );
}

export default BeerList;
