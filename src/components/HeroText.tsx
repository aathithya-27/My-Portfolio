import { motion } from "framer-motion";

export default function HeroText({ headline }: { headline: string }) {
  return (
    <h1>
      {headline.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          style={{ display: "inline-block", marginRight: 4 }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}