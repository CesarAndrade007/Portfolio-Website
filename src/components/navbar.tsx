import styles from '../styles/navbar.module.css';
import { Hamburger } from "./hamburger";
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