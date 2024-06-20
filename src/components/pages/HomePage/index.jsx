import { Header } from "../../Header";
import { BannerSection } from "../../BannerSection";
import { AboutMeSection } from "../../AboutMeSection";
import { TechSection } from "../../TechSection";
import { ProjectSection } from "../../ProjectSection";
import { Footer } from "../../Footer";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectSection />
      </main>
      <Footer />
    </>
  );
}
