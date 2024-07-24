import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function DesktopNav() {
    return (
        <>
            <li><Link href="#about" className={styles.link}>About</Link></li> |
            <li><Link href="#experience" className={styles.link}>Experience</Link></li> |
            <li><Link href="#projects" className={styles.link}>Projects</Link></li>
            <a href='/resume.pdf' className={styles.link_button} download>
                Download Resume <FontAwesomeIcon className={styles.download} icon={faChevronDown} />
            </a>
        </>
    );
}