"use client";
import { ButtonLink } from "@/components";
import { Prop } from "@/components/Prop";
import { Section } from "@/components/Section";
import { Brewery } from "@prisma/client";
import Link from "next/link";

export type BreweryDisplayProps = {
  brewery: Brewery;
};

const BreweryDisplayActions = ({ slug }: { slug?: string }) => {
  return (
    <div className="grid grid-flow-col">
      <ButtonLink href={`/breweries/${slug}/edit`}>Edit</ButtonLink>
    </div>
  );
};

const BreweryDisplay = ({ brewery }: BreweryDisplayProps) => {
  console.log(window.navigator.geolocation);
  function success(pos: any) {
    console.log("success", pos);
    return true;
  }
  function failure() {
    console.log("failure");
    return false;
  }
  const nav = window.navigator.geolocation;
  nav.getCurrentPosition(success, failure);

  return (
    <div className="mx-auto w-full lg:w-10/12 grid grid-flow-row gap-8">
      <Section
        header={`Brewery: ${brewery.name}`}
        actions={<BreweryDisplayActions slug={brewery.slug} />}
      >
        <Prop label="Name" value={brewery.name} />
        <Prop label="Address" value={brewery.address} />
      </Section>
    </div>
  );
};
export default BreweryDisplay;
