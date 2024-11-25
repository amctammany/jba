"use server";
import { prisma } from "@/lib/client";
import { validateSchema } from "@/lib/validateSchema";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { z } from "zod";
import { zfd } from "zod-form-data";

const brewerySchema = zfd.formData({
  id: zfd.text(z.string().optional()),
  name: zfd.text(),
  description: zfd.text(z.string().optional()),
  website: zfd.text(z.string().optional()),
  phoneNumber: zfd.text(z.string().optional()),
  address: zfd.text(z.string()),
  lng: zfd.numeric(z.number().optional()),
  lat: zfd.numeric(z.number().optional()),
});
type State = any;
export async function createBrewery(prevState: State, formData: FormData) {
  //const data = schema.parse(formData);
  const { errors, ...data } = validateSchema(formData, brewerySchema);
  if (errors) return Promise.resolve({ errors });
  //console.log(data);
  const res = await prisma.brewery.create({
    data: { slug: slugify(data.name, { lower: true }), ...data },
  });
  return redirect(`/breweries/${res.slug}`);
}
export async function updateBrewery(prevState: State, formData: FormData) {
  //const data = schema.parse(formData);
  const { errors, ...data } = validateSchema(formData, brewerySchema);
  if (errors) return Promise.resolve({ errors });
  //console.log(data);
  const res = await prisma.brewery.update({
    where: {
      id: data.id,
    },
    //data,
    data: { slug: slugify(data.name, { lower: true }), ...data },
  });
  return redirect(`/breweries/${res.slug}`);
}
