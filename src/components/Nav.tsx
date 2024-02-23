import Link from "next/link";

const links = [
  {
    path: "/",
    pathname: "Home",
  },

  {
    path: "/",
    pathname: "Find Hotel",
  },
  {
    path: "/",
    pathname: "About Us",
  },
  {
    path: "/",
    pathname: "Contact Us",
  },
];

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
}
const Nav = ({ containerStyles, listStyles }: NavProps) => {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>
        {links.map((link) => (
          <li key={link.pathname}>
            <Link href={link.path}>{link.pathname}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
