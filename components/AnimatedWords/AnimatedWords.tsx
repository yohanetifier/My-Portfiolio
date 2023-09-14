import React from "react";
import styles from "./AnimatedWords.module.scss";
import { motion, Variants } from "framer-motion";

console.log("motion", motion);

type Props = {
  arrayOfLetter: string[];
};

const container: Variants = {
  //   hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AnimatedWords = ({ arrayOfLetter }: Props) => {
  return (
    <motion.div
      variants={container}
      className={styles.title}
      initial="hidden"
      animate="show"
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
      {/* <motion.span variants={letterVariants}>H</motion.span>
      <motion.span variants={letterVariants}>E</motion.span>
      <motion.span variants={letterVariants}>L</motion.span>
      <motion.span variants={letterVariants}>L</motion.span>
      <motion.span variants={letterVariants}>O</motion.span> */}
    </motion.div>
  );
};

export default AnimatedWords;
