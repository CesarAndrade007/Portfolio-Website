import styles from '../styles/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function FooterContent() {
    return (
        <>
            <div className={styles.footerContent}>
                <span>Copyright 2024 - Cesar Lopez-Andrade</span>
                <br /><span>All Rights Reserved</span>
                <div className={styles.socialContainer}>
                    <a target="_blank" href="https://www.linkedin.com/in/cesar-lopez-andrade/"><FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                    <a target="_blank" href="https://github.com/CesarAndrade007"><FontAwesomeIcon className={styles.github} icon={faGithub} size="2x" /></a>
                    <a href="mailto:cesiumdev@gmail.com"><FontAwesomeIcon className={styles.email} icon={faEnvelope} size="2x" /></a>
                </div>
            </div>
        </>
    );
}