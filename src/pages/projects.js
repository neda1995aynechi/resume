import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project2 from "../../public/images/projects/gym-website.png";
import project3 from "../../public/images/projects/website2.png";
import projectFeatured from "../../public/images/projects/aiWebsite.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summery, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-center
    rounded-3xl border border-solid border-dark bg-light 
    shadow-2xl p-12 relative rounded-br-2xl dark:border-light dark:bg-dark 
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      {/* border around projects */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
      ></div>
      {/* end of border */}

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer
      overflow-hidden rounded-lg lg:w-full"
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
      <div
        className="w-1/2 flex flex-col items-start justify-between
      pl-6 lg:w-full lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary font-medium text-xl dark:text-primaryDark
         xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl font-bold dark:text-light 
          sm:text-sm sm:font-bold"
          >
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summery}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10 dark:text-light">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg
          bg-dark text-light p-2 px-6 text-lg font-semibold
          dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative
    dark:border-light dark:bg-dark  xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      ></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer
      overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div
        className="w-full flex flex-col items-start justify-between
      mt-4"
      >
        <span
          className="text-primary font-medium text-xl dark:text-primaryDark
        lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl font-bold dark:text-light 
          lg:text-2xl"
          >
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline dark:text-light md:text-base"
          >
            Visit
          </Link>

          <Link
            href={github}
            target="_blank"
            className="w-8 dark:text-light md:w-6"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>CodeByNeda | Projects</title>
        <meta name="description" content="description for seo" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imaginations trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 sm:gap-y-16 xs:gap-y-10 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {/* full row */}
            <div className="col-span-12">
              <FeaturedProject
                title="Ai website"
                img={projectFeatured}
                summery="Unleash the future of web development with our exceptional programming skills. Elevate your online presence with a responsive and visually 
                stunning website that captivates your audience. Let us bring your vision to life and take your website to new heights."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            {/* end of full row */}

            {/* two im one row */}
            {/* project 1 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Gym Website - Bootstrap"
                img={project2}
                summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            {/* project 2 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Inroduction Website"
                img={project3}
                summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            {/* end of two in one row */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
