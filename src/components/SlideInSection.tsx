import { motion } from "framer-motion";
import { slideInLeft } from "../animations/sectionVariants";

export default function SlideInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={slideInLeft.initial}
      whileInView={slideInLeft.animate}
      transition={slideInLeft.transition}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
}