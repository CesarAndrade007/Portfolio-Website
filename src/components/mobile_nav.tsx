import Link from "next/link";
import styles from '../styles/navbar.module.css';

export function MobileNav(){
    return (
        <>
            <ul className={styles.mobile_options}>        
                <li><Link href="/" className={styles.mobile_link}>Home</Link></li>
                <li><Link href="/" className={styles.mobile_link}>Experience</Link></li>
                <li><Link href="/projects" className={styles.mobile_link}>Projects</Link></li>
                <li><Link href="/blog" className={styles.mobile_link}>Blog</Link></li>
            </ul>
        </>
    );
}