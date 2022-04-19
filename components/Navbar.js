import Link from "next/link"
import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'


export const Navbar = () => {
  return (
    <nav className={ styles['nav-menu'] }>
        <ActiveLink href="/" text="Home"/>
        <ActiveLink href="/about" text="About" />
        <ActiveLink href="/contact" text="Contact" />
    </nav>
  )
}
