import Head from "next/head";
import { GetStaticProps } from "next";
import { getAllPostsForHome, getHomePage } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import AnimatedWords from "../components/AnimatedWords/AnimatedWords";
import styles from "../styles/index.module.scss";

export default function Index({ introduction }) {
  console.log("introductionInIndexFunction", introduction);
  const words = ["H", "E", "L", "L", "O"];
  return (
    <div className={styles.wrapper}>
      <AnimatedWords arrayOfLetter={words} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const introduction = await getHomePage();

  console.log("introduction", introduction);

  return {
    props: { introduction },
    revalidate: 10,
  };
};
