export const Nav = ({ children }) => {
  return (
    <nav className="py-4 px-6 text-lg font-semibold">
      <ul className="flex space-x-3">{children}</ul>
    </nav>
  );
};
