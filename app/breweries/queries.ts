import { prisma } from "@/lib/client";
import { Prisma } from "@prisma/client";
import { cache } from "react";

export const getBrewery = cache(async (slug: string) =>
  prisma.brewery.findFirst({ where: { slug } })
);
export const getBreweries = cache(async (where?: Prisma.BreweryWhereInput) =>
  prisma.brewery.findMany({ where })
);
