import AboutMe from "@/components/organisms/AboutMeSection";
import Experiences from "@/components/organisms/ExperienceSection";
import HeroSection from "@/components/organisms/HeroSection";
import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutMe />
      <Experiences />
    </main>
  );
}
