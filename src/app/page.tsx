import Image from "next/image";
import Link from "next/link";
import home from '../styles/home.module.css';
import IntroductionSection from "@/components/intro_section";
import AboutSection from "@/components/about";
import ExperienceSection from "@/components/experience";
import ProjectSection from "@/components/project";

export default function Home() {
  return (
    <>
      <div className={home.container}>
        <IntroductionSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </div>
    </>
  );
}
