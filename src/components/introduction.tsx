import styles from '@/styles/home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Introduction(){
    return (
        <>
            <div className={styles.intro_content}>                        
                <h1 className={styles.welcome}>Welcome, I'm Cesar!</h1>
                <h2>Software Engineer</h2>
                <h2>Full-Stack Web Developer.</h2>
                <p>
                    Developing clean, maintainable, and professional
                    software.
                </p>
                <br />
                <a href='#about' className={styles.down_arrow}>
                    <FontAwesomeIcon className={styles.arrow} icon={faChevronDown} size='3x'/>
                </a>
            </div>
        </>
    );
}