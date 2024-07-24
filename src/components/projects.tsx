import { promises as fs } from 'fs';
import Image from 'next/image';
import styles from '@/styles/home.module.css';

interface Projects {
    title: string;
    description: string;
    image: string;
    tag: string;
    alt: string;
    link: string;
    technologies: {[key:string]: string};
}

export default async function ProjectSection() {
    const file = await fs.readFile(process.cwd() + '/src/app/_data/projects.json', 'utf8');
    const data: Projects[] = JSON.parse(file);

    return (
        <>
            <div className={styles.spacer_inverted}>
                <svg id="visual" viewBox="0 0 2560 100" width="2560" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                    <rect x="0" y="0" width="2560" height="100" fill="#ffffff"></rect><path d="M0 56L53.3 49.8C106.7 43.7 213.3 31.3 320 25.5C426.7 19.7 533.3 20.3 640 27.7C746.7 35 853.3 49 960 47.8C1066.7 46.7 1173.3 30.3 1280 24.2C1386.7 18 1493.3 22 1600 29C1706.7 36 1813.3 46 1920 49.7C2026.7 53.3 2133.3 50.7 2240 46.2C2346.7 41.7 2453.3 35.3 2506.7 32.2L2560 29L2560 0L2506.7 0C2453.3 0 2346.7 0 2240 0C2133.3 0 2026.7 0 1920 0C1813.3 0 1706.7 0 1600 0C1493.3 0 1386.7 0 1280 0C1173.3 0 1066.7 0 960 0C853.3 0 746.7 0 640 0C533.3 0 426.7 0 320 0C213.3 0 106.7 0 53.3 0L0 0Z" fill="#E7ECEF" strokeLinecap="round" strokeLinejoin="miter"></path>
                </svg>
            </div>
            <div className={styles.project_section}>
                <h1 id="projects">Client & Personal Projects</h1>
                <div className={styles.project_container}>
                    {data.map((project, idx) => (
                        <div key={idx} className={styles.project}>
                            <Image
                                className={styles.proj_img}
                                src={project.image}
                                width={600}
                                height={350}
                                alt={project.alt}
                            />
                            <div className={styles.project_overlay}>
                                <h1><span className={styles.proj_type}>{project.tag}</span><br /><br />{project.title}</h1>
                                <div className={styles.project_tech}>
                                    {Object.entries(project.technologies).map(([tech, url], idx) => (
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
                                <a href={project.link} className={styles.project_btn}>Visit Project</a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>



        </>
    )

}