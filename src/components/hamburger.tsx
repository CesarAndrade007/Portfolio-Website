"use client";
import { useEffect } from 'react';
import styles from '../styles/navbar.module.css';
import { MobileNav } from './mobile_nav';

export function Hamburger() {
    useEffect(() => {
        const hamburger = document.querySelector<HTMLAnchorElement>(`.${styles.hamburger}`);
        const mobileMenu = document.querySelector<HTMLUListElement>(`.${styles.mobile_options}`);

        if (hamburger && mobileMenu) {
            const handleClick = () => {
                hamburger.classList.toggle(styles.active);
                mobileMenu.classList.toggle(styles.active);
            };

            hamburger.addEventListener("click", handleClick);

            return () => {
                hamburger.removeEventListener("click", handleClick);
            };
        }
    }, []);

    return (
        <>
            <a className={styles.hamburger}>
                <b></b>
                <b></b>
                <b></b>
            </a>
            <MobileNav />
        </>
    );
}