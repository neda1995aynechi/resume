import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/What is Redux with easy explanation.png";
import article5 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import {
  getArticleData,
  getArticleTitleData,
  getLandingData,
  getProjectsData
} from "@/utils/axiosInstance";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>

      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.6 } }}
        src={img}
        alt={title}
        ref={imgRef}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl
    flex items-center justify-between bg-light text-dark first:mt-0 
    border border-solid border-dark border-r-4 border-b-4
    dark:bg-dark dark:text-light dark:border-light
    sm:flex-col
    "
    >
      <MovingImage title={title} img={img} link={link} />
      <span
        className="text-primary font-semibold pl-4 dark:text-primaryDark 
      sm:self-start sm:pl-0 sm:pt-2 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summery, link }) => {
  return (
    <li
      className="col-span-1 w-full p-4 bg-light border border-solid
     border-dark rounded-2xl relative dark:bg-dark dark:border-light"
    >
      {/* border around projects */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light
      "
      ></div>
      {/* end of border */}

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 xs:text-xs">{summery}</p>
      <span className="text-primary font-semibold sm:text-sm ">{time}</span>
    </li>
  );
};

const articles = ({ articleData, articleTitleData }) => {
  return (
    <>
      <Head>
        <title>CodeByNeda | Articles</title>
        <meta name="description" content="description for seo" />
      </Head>

      <main
        className="w-full mb-16 flex flex-col items-center 
      justify-center overflow-hidden dark:text-light"
      >
        <Layout className="pt-16">
          {articleTitleData && (
            <AnimatedText
              text={articleTitleData?.title}
              className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            />
          )}

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-6">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summery="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 minutes read"
              link="/article/iArticle"
              img={articleTitleData?.article_img}
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summery="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="12 minutes read"
              link="/article/iArticle"
              img={article2}
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="march 22, 2023"
              link="/article/iArticle"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="march 22, 2023"
              link="/"
              img={article4}
            />{" "}
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="march 22, 2023"
              link="/"
              img={article5}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="march 22, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="march 22, 2023"
              link="/"
              img={article5}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;

export async function getStaticProps() {
  try {
    const responseArticle = await getArticleData();
    const articleData = responseArticle.results;

    const responseArticleTitle = await getArticleTitleData();
    const articleTitleData = responseArticleTitle.results[0];

    // Pass props
    return { props: { articleData, articleTitleData }, revalidate: 86400 }; // revalidate every hour (24 hours)
  } catch (error) {
    console.error("Error fetching landing data:", error);
    // Pass an empty object or null if there's an error
    return { props: { articleData: null }, revalidate: 60 }; // revalidate every minute (60 seconds)
  }
}
