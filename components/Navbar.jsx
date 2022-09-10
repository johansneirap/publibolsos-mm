import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";
import logo from "../public/Logo.png";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <motion.a
          href="#"
          className={styles.logo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
        >
          <img src={logo.src} alt="logo" width="200" height="" />
        </motion.a>
      </Link>
      <input type="checkbox" id="toggler" className={styles.toggler} />
      <label htmlFor="toggler">
        <i className="fa fa-bars"></i>
      </label>
      <motion.div className="menu">
        <motion.ul
          className={styles.list}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {menuItems.map(({ text, href }, idx) => (
            <motion.li
              key={text}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                delay: idx * 0.2,
              }}
            >
              <ActiveLink href={href} text={text} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </nav>
  );
};
