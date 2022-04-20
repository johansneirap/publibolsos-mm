import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Products",
    href: "/products",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["nav-menu"]}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={text} href={href} text={text} />
      ))}
    </nav>
  );
};
