import Link from "next/link";
import { forwardRef } from 'react';
import styles from '../styles/navbar.module.css';

export const MobileNav = forwardRef<HTMLUListElement>((props, ref) => {
    return (
        <ul ref={ref} className={styles.mobile_options}>        
            <li><Link href="/" className={styles.mobile_link}>Home</Link></li>
            <li><Link href="/" className={styles.mobile_link}>Experience</Link></li>
            <li><Link href="/projects" className={styles.mobile_link}>Projects</Link></li>
            <li><Link href="/blog" className={styles.mobile_link}>Blog</Link></li>
        </ul>
    );
});
