import React from "react";
import styles from "./AnimatedWords.module.scss";
import { motion, Variants } from "framer-motion";

type Props = {
  arrayOfLetter: string[];
  setAnimationComplete: (arg: boolean) => void;
};

export const container: Variants = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, x: -100, transition: { duration: 0.3 } },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const AnimatedWords = ({ arrayOfLetter, setAnimationComplete }: Props) => {
  return (
    <motion.div
      variants={container}
      className={styles.title}
      initial="hidden"
      animate="show"
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      {arrayOfLetter.map((letter, i) => (
        <motion.span
          variants={letterVariants}
          key={i}
          className={styles.letter}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedWords;
