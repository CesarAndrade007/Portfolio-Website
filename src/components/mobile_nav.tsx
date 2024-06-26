import Link from "next/link";
import { forwardRef } from 'react';
import styles from '../styles/navbar.module.css';

export const MobileNav = forwardRef<HTMLUListElement>((props, ref) => {
    return (
        <ul ref={ref} className={styles.mobile_options}>        
            <li><Link href="#about" className={styles.mobile_link}>About</Link></li>
            <li><Link href="#experience" className={styles.mobile_link}>Experience</Link></li>
            <li><Link href="#projects" className={styles.mobile_link}>Projects</Link></li>
        </ul>
    );
});
