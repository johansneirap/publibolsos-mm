import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Quienes Somos",
    href: "/about",
  },
  {
    text: "Contacto",
    href: "/contact",
  },
  {
    text: "Productos",
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
