import AboutMe from "@/components/organisms/AboutMeSection";
import EducationSection from "@/components/organisms/EducationSection";
import Experiences from "@/components/organisms/ExperienceSection";
import HeroSection from "@/components/organisms/HeroSection";
import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutMe />
      <Experiences />
      <EducationSection />
    </main>
  );
}
