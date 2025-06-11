import React from "react";
import { motion } from "framer-motion";

export default function SectionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.08, boxShadow: "0 0 8px #c084fc" }}
      whileTap={{ scale: 0.98 }}
      className="transition-colors duration-200"
    >
      {children}
    </motion.a>
  );
}