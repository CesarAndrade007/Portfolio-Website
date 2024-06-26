import styles from '@/styles/home.module.css';

export default function Introduction(){
    return (
        <>
            <div className={styles.intro_content}>                        
                <h1>Welcome, I'm Cesar!</h1>
                <h2>Software Engineer | Full-Stack Web Developer.</h2>
                <p>
                    Developing clean, maintainable, and professional
                    software.
                </p>
                <button className={styles.about_button}><a href="#about">Learn More</a></button>
            </div>
        </>
    );
}