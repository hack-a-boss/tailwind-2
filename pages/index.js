import Link from "next/link";
import { NavItem } from "../components/NavItem";

export default function Home() {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Products", url: "/products" },
  ];

  return (
    <main>
      <header>
        <h1 className="text-7xl mb-2">Hello Tailwind</h1>

        <nav>
          <ul>
            {navLinks.map((item) => (
              <NavItem key={item.url} title={item.title} url={item.url} />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 p-2">
          <button className="btn">Login</button>
          <button className="btn-important">Register</button>
        </nav>
      </header>
    </main>
  );
}
