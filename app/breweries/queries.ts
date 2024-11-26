import { prisma } from "@/lib/client";
import { Prisma } from "@prisma/client";
import { cache } from "react";

export const getBrewery = cache(async (slug: string) =>
  prisma.brewery.findFirst({ where: { slug }, include: { beers: true } }),
);
export type ExtBrewery = Awaited<ReturnType<typeof getBrewery>>;
export const getBreweries = cache(async (where?: Prisma.BreweryWhereInput) =>
  prisma.brewery.findMany({ where }),
);
