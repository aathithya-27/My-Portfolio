import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /**
   * Animation style for the section.
   * - "fadeUp" (default): fades in and slides up
   * - "scaleIn": fades and scales in
   * - "slideLeft": fades and slides in from left
   * - "slideRight": fades and slides in from right
   */
  variant?: "fadeUp" | "scaleIn" | "slideLeft" | "slideRight";
}

const variantPresets = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay }
    })
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay }
    })
  },
  slideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay }
    })
  },
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay }
    })
  }
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp"
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [controls]);

  const variants = {
    hidden: variantPresets[variant].hidden,
    visible: variantPresets[variant].visible(delay)
  };

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}