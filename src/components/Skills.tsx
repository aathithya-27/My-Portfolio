import { useState, useRef, useEffect } from 'react';
import { skillsData } from '../data/skillsData';

type SkillCategory = keyof typeof skillsData;

const Skills = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [skillCount, setSkillCount] = useState(0);
  const scrollStep = 1; // pixels per frame
  const scrollIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    setSkillCount(skillsData[activeTab].length);
  }, [activeTab]);

  // Smooth infinite scroll logic
  useEffect(() => {
    if (skillCount <= 1) {
      // No scroll needed
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
      if (carouselRef.current) {
        carouselRef.current.scrollLeft = 0;
      }
      return;
    }

    if (isPaused) {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
      return;
    }

    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth / 2; // because of duplicated items
      scrollIntervalRef.current = window.setInterval(() => {
        if (!carouselRef.current) return;
        if (carouselRef.current.scrollLeft >= scrollWidth) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += scrollStep;
        }
      }, 16); // approx 60fps
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };
  }, [skillCount, isPaused]);

  // Scroll buttons handlers
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Determine carousel width and nav arrow visibility based on skill count
  const isFullWidth = skillCount >= 6;
  const isPartialWidth = skillCount >= 2 && skillCount <= 5;
  const isSingleSkill = skillCount === 1;

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's a comprehensive list of my technical skills.
          </p>
        </div>
        
        <div className="text-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {Object.keys(skillsData).map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab(category as SkillCategory)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={`relative mx-auto mb-8 ${isFullWidth ? 'max-w-full' : 'max-w-[90%]'} ${isPartialWidth ? 'overflow-hidden' : ''}`}>
          {/* Navigation buttons outside carousel with mx-4 spacing */}
          {isFullWidth && (
            <>
              <button
                onClick={scrollLeft}
                aria-label="Scroll skills left"
                className="z-50 absolute -left-16 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-700 transition mx-4"
              >
                &#8592;
              </button>
              <button
                onClick={scrollRight}
                aria-label="Scroll skills right"
                className="z-50 absolute -right-16 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-700 transition mx-4"
              >
                &#8594;
              </button>
            </>
          )}
          <div
            ref={carouselRef}
            className={`flex space-x-6 pb-4 pl-4 pr-4 ${isSingleSkill ? 'justify-center' : 'overflow-x-auto'} ${isPartialWidth ? 'justify-center' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ scrollBehavior: 'smooth' }}
          >
            {(skillCount > 0 ? skillsData[activeTab] : []).map((skill) => (
              <div
                key={skill.name}
                className="skill-card min-w-[150px] px-4 md:px-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-110"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 text-center">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 h-full rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate skills for seamless loop only if full width */}
            {isFullWidth && skillsData[activeTab].map((skill) => (
              <div
                key={`duplicate-${skill.name}`}
                className="skill-card min-w-[150px] px-4 md:px-8 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-110"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2 text-center">
                    {skill.name}
                  </h3>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 h-full rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
