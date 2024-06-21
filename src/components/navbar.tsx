import Link from "next/link";
import styles from '../styles/navbar.module.css';
import { Hamburger } from "./hamburger";
import { MobileNav }  from "./mobile_nav";
import { DesktopNav } from "./desktop_nav";

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <Hamburger />
                <DesktopNav />
            </nav>
        </>
    )
}