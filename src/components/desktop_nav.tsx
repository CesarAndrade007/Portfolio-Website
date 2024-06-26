import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function DesktopNav() {
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dheereshagrwal/colored-icons@1.7.5/src/app/ci.min.css"/>
            <ul className={styles.options}>
                <li><Link href="#about" className={styles.link}>About</Link></li> |
                <li><Link href="#experience" className={styles.link}>Experience</Link></li> |
                <li><Link href="#projects" className={styles.link}>Projects</Link></li>
                <a href='/resume.pdf' className={styles.link_button} download>
                    Download Resume <FontAwesomeIcon className={styles.download} icon={faChevronDown} />
                </a>
            </ul>
        </>
    );
}