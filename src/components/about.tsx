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
                <div className={styles.about_description}>
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
            <div className={styles.spacer}>
                <svg id="visual" viewBox="0 0 2560 100" width="2560" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="2560" height="100" fill="#ffffff"></rect><path d="M0 42L53.3 48.2C106.7 54.3 213.3 66.7 320 72.5C426.7 78.3 533.3 77.7 640 70.3C746.7 63 853.3 49 960 50.2C1066.7 51.3 1173.3 67.7 1280 73.8C1386.7 80 1493.3 76 1600 69C1706.7 62 1813.3 52 1920 48.3C2026.7 44.7 2133.3 47.3 2240 51.8C2346.7 56.3 2453.3 62.7 2506.7 65.8L2560 69L2560 101L2506.7 101C2453.3 101 2346.7 101 2240 101C2133.3 101 2026.7 101 1920 101C1813.3 101 1706.7 101 1600 101C1493.3 101 1386.7 101 1280 101C1173.3 101 1066.7 101 960 101C853.3 101 746.7 101 640 101C533.3 101 426.7 101 320 101C213.3 101 106.7 101 53.3 101L0 101Z" fill="#E7ECEF" strokeLinecap="round" strokeLinejoin="miter"></path>
                </svg>
            </div>
        </>
    );
}