import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

interface MobileSkillsCarouselProps {
  skills: Skill[];
}

export default function MobileSkillsCarousel({ skills }: MobileSkillsCarouselProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      dragFree: true,
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 2500, // Pause 2.5 seconds per slide (change this value as you like)
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <div
      className="w-full max-w-full overflow-hidden"
      ref={emblaRef}
      aria-roledescription="carousel"
      tabIndex={0}
    >
      <div className="flex">
        {skills.map((skill, idx) => (
          <div
            key={skill.name + idx}
            className="flex-[0_0_80%] px-4 py-6"
            role="group"
            aria-label={skill.name}
          >
            <div className="bg-gradient-to-tr from-purple-700/80 to-fuchsia-600/80 rounded-2xl shadow-xl flex flex-col items-center py-10">
              <span className="text-6xl mb-4">{skill.icon}</span>
              <span className="font-bold text-lg text-white drop-shadow">{skill.name}</span>
              <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mt-4">
                <div
                  className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}