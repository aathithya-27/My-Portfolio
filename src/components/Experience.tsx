import { experienceData } from '../data/experienceData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 dark:from-purple-600 dark:via-fuchsia-600 dark:to-indigo-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My professional and academic experiences that have shaped my career.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400 text-4xl">
                {exp.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">{exp.title}</h3>
              <p className="italic mb-2 text-gray-700 dark:text-gray-300">{exp.company}</p>
              <p className="mb-4 font-medium text-gray-800 dark:text-gray-200">{exp.period}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
