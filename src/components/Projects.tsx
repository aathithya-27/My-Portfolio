import { useState, useEffect } from 'react';
import { projectsData } from '../data/projectsData';
import { Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];
  const [visibleProjects, setVisibleProjects] = useState(projectsData);

  useEffect(() => {
    if (filter === 'all') {
      setVisibleProjects(projectsData);
    } else {
      setVisibleProjects(projectsData.filter(project => project.category === filter));
    }
  }, [filter]);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );
    const items = document.querySelectorAll('.project-card');
    items.forEach(item => observer.observe(item));
    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, [visibleProjects]);

  // Carousel animation
  const cardWidth = 300;
  const gapWidth = 24;
  const totalItemWidth = cardWidth + gapWidth;
  const animationDuration = visibleProjects.length * 8;

  const carouselStyles = `
    @keyframes scroll-projects {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-${totalItemWidth}px * ${visibleProjects.length})); }
    }
    .project-carousel-all {
      animation: scroll-projects ${animationDuration}s linear infinite;
      display: flex;
      cursor: grab;
    }
    .project-card {
      transition: transform 0.4s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
    }
    .project-carousel-all:hover {
      animation-play-state: paused;
    }
    .project-carousel-all .project-card:hover {
      z-index: 2;
      transform: scale(1.08);
      box-shadow: 0 8px 32px rgba(80,0,120,0.18);
    }
  `;

  return (
    <>
      <section
        id="projects"
        className="py-20 bg-gray-50 dark:bg-gray-800"
      >
        <style>{carouselStyles}</style>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">My Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project reflects my skills
              and experience in different areas of web development.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-white shadow-md'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {filter === 'all' ? (
            <div className="relative overflow-hidden">
              <div className="flex space-x-6 pb-4 project-carousel-all">
                {/* Duplicate projects for seamless loop */}
                {visibleProjects.concat(visibleProjects).map((project, idx) => (
                  <div
                    key={project.id + '-' + idx}
                    className="project-card min-w-[300px] bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform"
                  >
                    <div className="relative overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <div className="flex justify-end gap-3">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                              aria-label="View source code on GitHub"
                            >
                              <Github className="h-5 w-5 text-white" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <div className="flex justify-end gap-3">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                            aria-label="View source code on GitHub"
                          >
                            <Github className="h-5 w-5 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
