import AnimatedSection from "../components/AnimatedSection";
import HeroText from "../components/HeroText";
import SkillBar from "../components/SkillBar";
import StaggeredList from "../components/StaggeredList";
import SlideInSection from "../components/SlideInSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 p-6">
      {/* Hero Section with Animated Text */}
      <AnimatedSection>
        <HeroText headline="Welcome to My Animated Portfolio" />
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Elevate your web experience with Framer Motion animations!
        </p>
      </AnimatedSection>

      {/* About Section with Fade Up */}
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p>
          I am a creative developer passionate about beautiful, interactive web apps.
        </p>
      </AnimatedSection>

      {/* Skills Section: Staggered List and Animated Bars */}
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>React</span>
              <span>90%</span>
            </div>
            <SkillBar level={90} />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>TypeScript</span>
              <span>80%</span>
            </div>
            <SkillBar level={80} />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span>Framer Motion</span>
              <span>75%</span>
            </div>
            <SkillBar level={75} />
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section: Slide In from Side */}
      <SlideInSection>
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <StaggeredList
          items={[
            "Animated Portfolio Website",
            "E-commerce Dashboard",
            "Real-time Chat App"
          ]}
        />
      </SlideInSection>

      {/* Contact Section: Fade Up */}
      <AnimatedSection>
        <h2 className="text-2xl font-bold mb-2">Contact</h2>
        <p>
          Let's build something amazing! Reach out via email or connect on LinkedIn.
        </p>
      </AnimatedSection>
    </main>
  );
}