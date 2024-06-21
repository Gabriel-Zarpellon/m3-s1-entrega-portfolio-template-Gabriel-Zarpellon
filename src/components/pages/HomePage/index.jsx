import { BannerSection } from "../../BannerSection";
import { AboutMeSection } from "../../AboutMeSection";
import { TechSection } from "../../TechSection";
import { ProjectSection } from "../../ProjectSection";
import { PageTemplate } from "../../PageTemplate";

export function HomePage() {
  return (
    <PageTemplate>
      <BannerSection />
      <AboutMeSection />
      <TechSection />
      <ProjectSection />
    </PageTemplate>
  );
}
