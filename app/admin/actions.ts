"use server";
import { prisma } from "@/lib/client";
import { validateSchema } from "@/lib/validateSchema";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";

const schema = zfd.formData({
  id: zfd.text(),
  name: zfd.text(),
  email: zfd.text(),
});
export async function updateUser(formData: FormData) {
  //const data = schema.parse(formData);
  const { errors, ...data } = validateSchema(formData, schema);
  if (errors) return Promise.resolve({ errors });
  console.log(data);
  await prisma.user.update({
    where: {
      id: data.id,
    },
    data,
  });
  return redirect("/admin");
}
