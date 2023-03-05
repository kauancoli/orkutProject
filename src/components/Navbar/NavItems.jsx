export const NavItem = ({ href, isActive, children }) => {
  return (
    <li>
      <a
        href={href}
        className={`block px-3 py-2 rounded-md ${
          isActive ? 'text-pink' : 'text-darkLight'
        }`}
      >
        {children}
      </a>
    </li>
  );
};
