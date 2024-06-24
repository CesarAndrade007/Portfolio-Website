import Image from "next/image";
import styles from '../styles/home.module.css';

export default function IntroductionSection() {
    return (
        <>
            <div className={styles.intro_container}>
                <div className={styles.intro_banner}>
                    <div className={styles.intro_content}>
                        <h1>Welcome, I'm Cesar!</h1>
                        <h2>Software Engineer and Full-Stack Web Developer.</h2>
                    </div>
                </div>
                <Image 
                    src='/intro-section.jpg'
                    className={styles.intro_img}
                    width={700}
                    height={400}
                    alt="Laptop"
                />
                <div className={styles.overlay}></div>
            </div>
        </>
    );
}