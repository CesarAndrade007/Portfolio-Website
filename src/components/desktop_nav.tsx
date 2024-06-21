import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export function DesktopNav() {
    return (
        <>
            <ul className={styles.options}>
                <li><Link href="/" className={styles.link}>Home</Link></li> |
                <li><Link href="/" className={styles.link}>Experience</Link></li> |
                <li><Link href="/projects" className={styles.link}>Projects</Link></li> |
                <li><Link href="/blog" className={styles.link}>Blog</Link></li>
            </ul>
        </>
    );
}