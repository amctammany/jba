import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/client";
import Profile from "../_components/Profile/Profile";
import { updateUser } from "../actions";
//const AdminModal = dynamic(
//() => import("./AdminModal").then((s) => s.AdminModal),
//{ ssr: false }
//);

//import { auth } from "@/app/auth";
export default async function Page() {
  const session = await auth();

  if (!session || !session.user?.email) return redirect("/");
  const user = await prisma.user.findFirst({
    where: { email: session?.user?.email },
  });
  return <Profile src={user} action={updateUser} />;
}
