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
    technologies: string[];
}

export default async function ExperienceSection() {
    const file = await fs.readFile(process.cwd() + '/src/app/_data/experience.json', 'utf8');
    const data: Experience[] = JSON.parse(file);

    return (
        <>
            <h1 className={styles.exp_title}>Work Experience</h1>
            <div id="experience" className={styles.experience_container}>
                {data.map((exp, index) => (
                    <div key={index} className={styles.exp}>
                        <div className={styles.exp_content}>
                            <h1>{exp.position} - {exp.company}</h1>
                            <h2>{exp.date}</h2>
                            <h2>{exp.location}</h2>
                            <ul className={styles.exp_list}>
                                {exp.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <h3>Technologies Used: </h3>
                            {exp.technologies.map((item, index) => (
                                <span className={styles.tech_list} key={index}>
                                    {item}{index < exp.technologies.length - 1 ? ' | ' : ''}
                                </span>
                            ))}
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