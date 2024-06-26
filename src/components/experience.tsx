import { promises as fs } from 'fs';
import Image from 'next/image';
import styles from '@/styles/home.module.css';

interface Experience {
    logo: string;
    alt: string;
    company: string;
    position: string;
    date: string;
    location: string;
    description: string[];
    technologies: {[key:string]: string};
}

export default async function ExperienceSection() {
    const file = await fs.readFile(process.cwd() + '/src/app/_data/experience.json', 'utf8');
    const data: Experience[] = JSON.parse(file);

    return (
        <>
            <div id="experience" className={styles.experience_container}>
                <h1 className={styles.exp_title}>Work Experience</h1>
                {data.map((exp, index) => (
                    <div key={index} className={styles.exp}>
                        <div className={styles.exp_content}>
                            <h1>{exp.position} | {exp.company}</h1>
                            <h2>{exp.date}</h2>
                            <h2>{exp.location}</h2>
                            <ul className={styles.exp_list}>
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item} <br /><br /></li>
                                    
                                ))}
                            </ul>
                            <h2>Technologies Used:</h2>
                            <div>
                                {Object.entries(exp.technologies).map(([tech, url], idx) => (
                                    <img
                                        className={styles.tech_icon} 
                                        key={idx}
                                        src={url}
                                        width={50}
                                        height={50}
                                        alt={`${tech} logo`}
                                        title={`${tech}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <Image
                            className={styles.company_img}
                            src={exp.logo}
                            width={200}
                            height={200}
                            alt={exp.alt}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}