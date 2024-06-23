import Image from "next/image";
import styles from '../styles/home.module.css';

export default function IntroductionSection() {
    return (
        <>
            <div className={styles.intro_container}>
                <div className={styles.intro_banner}>
                    <div className={styles.intro_content}>
                        <h1>Hello, welcome to my website!</h1>
                    </div>
                </div>
                <Image 
                    src='/intro-section.jpg'
                    className={styles.intro_img}
                    width={200}
                    height={500}
                    alt="Laptop"
                />
            </div>
        </>
    );
}