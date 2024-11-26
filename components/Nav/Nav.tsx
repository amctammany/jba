import Link from "next/link";
//import { AuthenticationNav } from ".";
import { Menu } from "@/components/Menu";
import { AuthenticationNav } from "@/components/Nav/AuthenticationNav";

export type NavProps = {
  children: React.ReactNode;
};

export const Nav = ({ children }: NavProps) => {
  return (
    <nav className="flex items-center md:justify-between md:flex-nowrap pr-5 md:py-2 bg-slate-700">
      <Menu variant="dark">{children}</Menu>
      <div className="flex items-center flex-grow mr-6 lg:mr-2 w-full ">
        <Link
          href="/"
          className="flex-none text-slate-200 font-extrabold sm:text-2xl py-2 mx-auto hover:underline"
        >
          Jacksonville Brewing Alliance
        </Link>
      </div>
      <div className="">
        <AuthenticationNav />
      </div>
    </nav>
  );
};
