import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface SkillsCarouselProps {
  skills: { name: string; icon: React.ReactNode }[];
}

export default function SkillsCarousel({ skills }: SkillsCarouselProps) {
  const isCarousel = skills.length > 1;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    isCarousel ? [Autoplay({ delay: 1800, stopOnInteraction: false })] : []
  );

  // Accessibility: Optionally announce active skill (simplified, no .current usage)
  useEffect(() => {
    if (!isCarousel || !emblaApi) return;
    // Optional: emblaApi.on("select", ...) for further accessibility if needed
    // But don't try to access emblaRef.current
  }, [emblaApi, skills, isCarousel]);

  if (!isCarousel) {
    // Single skill, static display
    return (
      <div className="flex justify-center items-center gap-4" aria-label={`Skill: ${skills[0]?.name}`}>
        <div className="text-5xl">{skills[0]?.icon}</div>
        <span className="text-xl font-semibold">{skills[0]?.name}</span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden w-full max-w-xl mx-auto" ref={emblaRef} aria-roledescription="carousel">
      <div className="flex">
        {skills.map((skill) => (
          <div
            className="flex-[0_0_80%] sm:flex-[0_0_30%] flex flex-col items-center justify-center p-6"
            key={skill.name}
            role="group"
            aria-label={skill.name}
          >
            <div className="text-5xl mb-3 transition-transform duration-500">{skill.icon}</div>
            <span className="text-xl font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}