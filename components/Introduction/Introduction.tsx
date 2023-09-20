import React, { useState } from "react";
import styles from "./Introduction.module.scss";
import AnimatedWords from "../AnimatedWords/AnimatedWords";
import AnimatedImg from "../AnimatedImg/AnimatedImg";
import { ArrayOfImg } from "../AnimatedImg/AnimatedImg";

type SourceImage = Pick<ArrayOfImg, "src" | "alt">;

type Props = {
  words: string[];
  images: SourceImage[];
  setAnimationSecondComplete: (arg: boolean) => void;
};

const Introduction = ({ words, images, setAnimationSecondComplete }: Props) => {
  const [animationComplete, setAnimationComplete] = useState<boolean>(false);
  // const [animationSecondComplete, setAnimationSecondComplete] =
  //   useState<boolean>(false);
  const imagesArray = [
    {
      src: "",
      alt: "",
      className: styles.imgWrapper,
    },
    {
      src: "",
      alt: "",
      className: styles.imgWrapper1,
    },
    {
      src: "",
      alt: "",
      className: styles.imgWrapper2,
    },
    {
      src: "",
      alt: "",
      className: styles.imgWrapper3,
    },
    {
      src: "",
      alt: "",
      className: styles.imgWrapper4,
    },
  ];

  return (
    <div className={`${styles.wrapper} entranceWrapper`}>
      <AnimatedWords
        arrayOfLetter={words}
        setAnimationComplete={setAnimationComplete}
      />
      <AnimatedImg
        arrayOfImg={imagesArray}
        animationComplete={animationComplete}
        setAnimationSecondComplete={setAnimationSecondComplete}
      />
    </div>
  );
};

export default Introduction;
