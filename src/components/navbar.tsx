import styles from '../styles/navbar.module.css';
import { Hamburger } from "./hamburger";
import { DesktopNav } from "./desktop_nav";
import { MobileNav } from './mobile_nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.options}>
                    <DesktopNav />
                </ul>
                <Hamburger />
            </nav>
        </>
    )
}