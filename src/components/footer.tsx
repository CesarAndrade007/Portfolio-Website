import styles from '../styles/footer.module.css';

export default function FooterContent() {
    return (
        <>
            <div className={styles.footerContent}>
                <span>Copyright 2024 - Cesar Lopez-Andrade</span>
                <br /><span>All Rights Reserved</span>
            </div>
        </>
    );
}