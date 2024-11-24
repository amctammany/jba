"use client";
import { Prop } from "@/components/Prop";
import { Brewery } from "@prisma/client";
import Link from "next/link";

export type BreweryDisplayProps = {
  brewery: Brewery;
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
    <div>
      <div>
        <span className="text-lg font-bold">Brewery Display</span>
        <Link href={`/breweries/${brewery.slug}/edit`}>Edit</Link>
      </div>
      <Prop label="Name" value={brewery.name} />
      <Prop label="Address" value={brewery.address} />
      <div>
        <label htmlFor="name">Name</label>
        <span id="name">{brewery.name}</span>
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <span id="address">{brewery.address}</span>
      </div>
    </div>
  );
};
export default BreweryDisplay;
