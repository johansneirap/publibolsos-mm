import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

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
      <a href="#" className={ styles.logo }>LOGO</a>
      <input type="checkbox" id="toggler" className={ styles.toggler } />
      <label htmlFor="toggler"><i className="fa fa-bars"></i></label>
      <div className="menu">
        <ul className={ styles.list }>
          {menuItems.map(({ text, href }) => (
            <li>
              <ActiveLink key={text} href={href} text={text} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
