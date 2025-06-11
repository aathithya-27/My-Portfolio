const Hero = () => (
  <section className="relative overflow-hidden py-28 md:py-40 flex items-center justify-center min-h-[60vh]">
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-20 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500 opacity-80 animate-gradientBG bg-[length:200%_200%]" />

    {/* Animated blob */}
    <div className="absolute -top-32 -left-32 w-96 h-96 -z-10 opacity-30 animate-blob pointer-events-none select-none">
      <svg viewBox="0 0 200 200">
        <defs>
          <linearGradient id="blobGradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient)"
          d="M43.3,-72.2C56.1,-67.7,65.7,-56.1,74.1,-43.3C82.5,-30.4,89.6,-15.2,87.5,-1.4C85.4,12.4,74.1,24.8,64.6,38.2C55.1,51.6,47.4,66,35.7,74.4C24,82.8,12,85.2,-1.8,88.6C-15.6,92,-31.1,96.4,-41.3,87.8C-51.5,79.2,-56.3,57.6,-65,40.5C-73.7,23.3,-86.4,10.6,-87.3,-2.4C-88.2,-15.4,-77.3,-28.7,-66.2,-40C-55.2,-51.3,-44.2,-60.7,-31.4,-66.7C-18.6,-72.7,-9.3,-75.3,3.6,-81.3C16.4,-87.4,32.9,-96.7,43.3,-72.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>

    {/* Content */}
    <div className="relative z-10 text-center text-white animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Hi, I'm <span className="text-purple-200">Aathithya</span>
      </h1>
      <p className="text-lg md:text-2xl mb-8 drop-shadow animate-slide-up">
        Aspiring developer & designer <br /> Building modern web experiences.
      </p>
      <a
        href="#projects"
        className="inline-block px-8 py-3 bg-white/20 hover:bg-white/40 text-lg font-medium rounded-full text-white backdrop-blur transition animate-slide-down"
      >
        View Project
      </a>
    </div>

    {/* SVG wave at the bottom */}
    <div className="absolute left-0 right-0 bottom-0 -z-10">
      <svg viewBox="0 0 1440 320" className="w-full h-24">
        <path
          fill="#a78bfa"
          fillOpacity="0.3"
          d="M0,224L48,208C96,192,192,160,288,154.7C384,149,480,171,576,186.7C672,203,768,213,864,213.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  </section>
);

export default Hero;