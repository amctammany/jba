import Link from "next/link";
//import { AuthenticationNav } from ".";
import { Button, Menu } from "..";

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
          className="flex-none sm:hidden text-slate-200 font-extrabold py-2  mx-auto"
        >
          Jacksonville Brewing Alliance
        </Link>

        <Link
          href="/"
          className="flex-none hidden sm:block text-slate-200 font-extrabold text-2xl py-2 mx-auto "
        >
          Jacksonville Brewing Alliance
        </Link>
      </div>
      <div className="md:hidden "></div>
    </nav>
  );
};
