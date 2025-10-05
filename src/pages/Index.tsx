import { AboutSection } from "@/components/about-section";
import { AchievementsSection } from "@/components/achievements-section";
import { BlogsSection } from "@/components/blogs-section";
import { ContactSection } from "@/components/contact-section";
import { CourseSection } from "@/components/course-section";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/project-section";
import { SkillsSection } from "@/components/skills-section";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection/>
      <ProjectsSection/>
      <AchievementsSection/>
      <CourseSection/>
      <BlogsSection/>
      <ContactSection/>
    </main>
  );
};

export default Index;
