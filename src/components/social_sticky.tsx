import styles from '../styles/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function SocialSticky(){
    return (
        <>
            <div className={styles.sticky_social}>
                <a className={styles.social_block} target="_blank" href="https://www.linkedin.com/in/cesar-lopez-andrade/"><FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} size="2x" /></a>
                <a className={styles.social_block} href="mailto:cesiumdev@gmail.com"><FontAwesomeIcon className={styles.email} icon={faEnvelope} size="2x" /></a>
            </div>
        </>
    );
}