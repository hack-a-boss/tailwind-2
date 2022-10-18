import Link from "next/link";

export const NavItem = ({ title, url }) => {
  return (
    <li className="navlink">
      <Link href={url}>{title}</Link>
    </li>
  );
};
