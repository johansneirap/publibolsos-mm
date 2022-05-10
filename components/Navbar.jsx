import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";
import logo from "../public/Logo.png";
import Link from "next/link";
const menuItems = [
  {
    text: "Inicio",
    href: "/",
  },
  {
    text: "Quienes Somos",
    href: "/acerca",
  },
  {
    text: "Contacto",
    href: "/contacto",
  },
  {
    text: "Productos",
    href: "/productos",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <Link href="/">
        <a href="#" className={ styles.logo } >
          <img src={ logo.src } alt="logo" width="200" height=""/>
        </a>
      </Link>
      <input type="checkbox" id="toggler" className={ styles.toggler } />
      <label htmlFor="toggler"><i className="fa fa-bars"></i></label>
      <div className="menu">
        <ul className={ styles.list }>
          {menuItems.map(({ text, href }) => (
            <li key={text}>
              <ActiveLink href={href} text={text} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
