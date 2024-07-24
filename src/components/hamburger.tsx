"use client";
import { useEffect, useRef } from 'react';
import styles from '../styles/navbar.module.css';
import { MobileNav } from './mobile_nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export function Hamburger() {
    const mobileMenuRef = useRef<HTMLUListElement>(null);
    const hamburgerRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const hamburger = hamburgerRef.current;
        const mobileMenu = mobileMenuRef.current;

        const handleClick = () => {
            hamburger?.classList.toggle(styles.active);
            mobileMenu?.classList.toggle(styles.active);
        };

        const handleLinkClick = () => {
            hamburger?.classList.remove(styles.active);
            mobileMenu?.classList.remove(styles.active);
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenu &&
                hamburger &&
                !mobileMenu.contains(event.target as Node) &&
                !hamburger.contains(event.target as Node)
            ) {
                hamburger.classList.remove(styles.active);
                mobileMenu.classList.remove(styles.active);
            }
        };

        if (hamburger && mobileMenu) {
            hamburger.addEventListener("click", handleClick);

            const links = mobileMenu.querySelectorAll(`.${styles.mobile_link}`);
            links.forEach(link => link.addEventListener("click", handleLinkClick));

            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            if (hamburger) hamburger.removeEventListener("click", handleClick);

            const links = mobileMenu?.querySelectorAll(`.${styles.mobile_link}`);
            links?.forEach(link => link.removeEventListener("click", handleLinkClick));

            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <a ref={hamburgerRef} className={styles.hamburger}>
                <b></b>
                <b></b>
                <b></b>
            </a>
            <MobileNav ref={mobileMenuRef} />
        </>
    );
}
