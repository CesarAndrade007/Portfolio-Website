import Image from "next/image";
import styles from '../styles/home.module.css';

export default function AboutSection() {
    return (
        <>
            <div id="about" className={styles.about_container}>
                <Image
                    className={styles.profile_img}
                    src="/profile.jpg"
                    width={300}
                    height={300}
                    alt="Cesar Lopez-Andrade"
                />
                <div>
                    <h1>About Me</h1>
                    <p className={styles.about_paragraph}>
                        My name's Cesar Lopez-Andrade, I am a recent UC Davis Computer Science graduate.
                        I am excited to delve into the world of all things related to software engineering,
                        networking, systems engineering, system administration, and application security!
                        <br /><br />
                        Throughout my undergraduate education, I have been involved in numerous
                        technical projects that have molded me to become a better developer. In every
                        project I have been involved in, I always ensure that the end product is clean,
                        maintainable, and highly optimized for both developer and user experience.
                        <br /><br />
                        Currently, I am aiming to receive my Cloud Practitioner certification for Amazon
                        Web Services (AWS). I'm also improving and deepening my knowledge of GNU/Linux to
                        optimize my workflow and improve my OS knowledge. 
                    </p>
                </div>

            </div>
        </>
    );
}