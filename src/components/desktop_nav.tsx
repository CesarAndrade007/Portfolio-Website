import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export function DesktopNav() {
    return (
        <>
            <li><Link href="#about" className={styles.link}>About</Link></li> |
            <li><Link href="#experience" className={styles.link}>Experience</Link></li> |
            {/* <li><Link href="#skills" className={styles.link}>Skills</Link></li> | */}
            <li><Link href="#projects" className={styles.link}>Projects</Link></li>
        </>
    );
}