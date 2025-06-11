const EducationCardGradient = ({ children }: { children: React.ReactNode }) => (
  <div className="p-1 rounded-2xl bg-gradient-to-tr from-purple-400 via-fuchsia-500 to-indigo-600">
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">{children}</div>
  </div>
);

export default EducationCardGradient;