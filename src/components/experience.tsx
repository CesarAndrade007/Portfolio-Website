"use client"; // This directive tells Next.js this is a client-side component

import { useState, useEffect } from 'react';
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
    technologies: { [key: string]: string };
}

export default function ExperienceSection() {
    const [data, setData] = useState<Experience[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/_data/experience.json');
            const parsedData: Experience[] = await response.json();
            setData(parsedData);
        };
        fetchData();
    }, []);

    const numOfExperiencesToShow = 2;
    const toggleShowMore = () => {
        setShowAll(!showAll);
        setTimeout(() => {
            setFadeIn(true);
        }, 100);
    };

    return (
        <>
            <div id="experience" className={styles.experience_container}>
                <h1 className={styles.exp_title}>Work Experience</h1>

                {data.slice(0, showAll ? data.length : numOfExperiencesToShow).map((exp, index) => (
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

                <button onClick={toggleShowMore} className={styles.show_more}>
                    {showAll ? 'Show Less' : 'Show More'}
                </button>
            </div>
        </>
    );
}
