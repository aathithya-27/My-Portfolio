const SkillBar = ({ level }: { level: number }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
    <div
      className="h-full rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 transition-all duration-700"
      style={{ width: `${level}%` }}
    />
  </div>
);

export default SkillBar;