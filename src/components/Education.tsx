const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education cards */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Bachelor of Engineering</h3>
            <p className="italic mb-2 text-gray-700 dark:text-gray-300">R.M.K Engineering College</p>
            <p className="mb-4 font-medium text-gray-800 dark:text-gray-200">2019 - 2023</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
              <li>Specialized in Computer Science and Engineering</li>
              <li>Graduated with First Class Honors</li>
              <li>Active member of the Coding Club</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Higher Secondary Certificate</h3>
            <p className="italic mb-2 text-gray-700 dark:text-gray-300">ABC Higher Secondary School</p>
            <p className="mb-4 font-medium text-gray-800 dark:text-gray-200">2017 - 2019</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
              <li>Science Stream with Mathematics and Physics</li>
              <li>Graduated with Distinction</li>
            </ul>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Secondary School Certificate</h3>
            <p className="italic mb-2 text-gray-700 dark:text-gray-300">XYZ High School</p>
            <p className="mb-4 font-medium text-gray-800 dark:text-gray-200">2015 - 2017</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
              <li>Completed with Honors</li>
              <li>Member of the Science Club</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
