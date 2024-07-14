import AboutMe from "@/components/organisms/AboutMeSection";
import EducationSection from "@/components/organisms/EducationSection";
import Experiences from "@/components/organisms/ExperienceSection";
import HeroSection from "@/components/organisms/HeroSection";
import ProjectsSection from "@/components/organisms/ProjectsSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HeroSection />
      <AboutMe />
      <Experiences />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
