import { prisma } from "@/lib/client";

export const metadata = {
  title: "JBA: About",
};

export default async function About() {
  return (
    <div>
      <h2 className="text-lg underline font-bold">About JBA</h2>
      About US!
    </div>
  );
}
