import { motion } from "framer-motion";

const SkillBar = ({ level }: { level: number }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
    <motion.div
      className="h-full rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600"
      initial={{ width: 0 }}
      whileInView={{ width: `${level}%` }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    />
  </div>
);

export default SkillBar;