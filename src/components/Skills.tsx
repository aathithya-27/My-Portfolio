import { useState } from 'react';
import { skillsData } from '../data/skillsData';
import MobileSkillsCarousel from './MobileSkillsCarousel';


type SkillCategory = keyof typeof skillsData;

const Skills = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('frontend');
  const categories = Object.keys(skillsData) as SkillCategory[];
  const skills = skillsData[activeTab];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === category
                    ? 'bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE: Carousel */}
        <div className="md:hidden">
          <MobileSkillsCarousel skills={skills} />
        </div>

        {/* DESKTOP: Original grid style */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col items-center py-10 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 text-5xl">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium mb-2 text-center">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 h-full rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;