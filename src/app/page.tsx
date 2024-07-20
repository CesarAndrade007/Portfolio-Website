import home from '../styles/home.module.css';
import IntroductionSection from "@/components/intro_section";
import AboutSection from "@/components/about";
import ExperienceSection from "@/components/experience";
import ProjectSection from "@/components/projects";
import SocialSticky from '@/components/social_sticky';

export default function Home() {
  return (
    <>
      <div className={home.container}>
        <SocialSticky />
        <IntroductionSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </div>
    </>
  );
}
