import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/sectionVariants";

export default function StaggeredList({ items }: { items: string[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item, i) => (
        <motion.div key={i} variants={staggerItem}>
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}