import Image from "next/image";
import styles from '../styles/home.module.css';
import Introduction from "./introduction";

export default function IntroductionSection() {
    return (
        <>
            <div className={styles.intro_container}>
                <div className={styles.intro_banner}>
                    <Introduction />
                </div>
                <Image 
                    src='/intro-section.jpg'
                    className={styles.intro_img}
                    width={700}
                    height={400}
                    alt="Laptop"
                />
                <div className={styles.overlay}>
                    <div className={styles.overlay_content}>
                        <Introduction />
                    </div>
                </div>
            </div>
        </>
    );
}