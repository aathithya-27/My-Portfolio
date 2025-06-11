const ProjectCardGradient = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-900 transition-all duration-300">
    <div className="absolute inset-0 z-10 bg-gradient-to-tr from-purple-500/40 via-indigo-400/30 to-fuchsia-400/40 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>
    {children}
  </div>
);

export default ProjectCardGradient;