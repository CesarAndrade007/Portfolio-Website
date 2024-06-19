import Image from "next/image";
import Link from "next/link";
import page from '../styles/page.module.css';
import IntroductionSection from "../components/intro_section";

export default function Home() {
  return (
    <>
      <div className={page.container}>
        <IntroductionSection />
      </div>
    </>
  );
}
