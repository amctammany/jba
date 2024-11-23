export type MenuItemProps = {
  children: React.ReactNode;
};

export const MenuItem = ({ children }: MenuItemProps) => {
  return (
    <a
      className="block px-4 py-2 text-sm capitalize text-gray-800 hover:bg-indigo-500 hover:text-white"
      href="#"
    >
      {children}
    </a>
  );
};
