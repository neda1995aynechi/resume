import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/NedaProfileAbout.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Neda Ramakchi</title>
        <meta name="description" content="description for seo" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-9"
            text="Passion Fuels Purpose!"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start lg:col-span-4 md:order-2  md:col-span-8">
              <h2 className="mb-4 text-lg fony-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>

              <p className="font-mediom">
                Hey there, I am Neda, a passionate full stack developer
                experienced in building robust and user-friendly web
                applications. My expertise lies in creating exceptional user
                interfaces using React.js and Next.js on the front end, and
                Python Django on the back end. I am always excited to take on
                new challenges and constantly strive to expand my knowledge and
                skills.
              </p>

              <p className="font-mediom my-4">
                One of my key strengths as a developer is my ability to work
                with a variety of CSS frameworks, including Tailwind CSS and
                Bootstrap. I have hands-on experience with both frameworks and
                continuously seek ways to optimize and improve my utilization of
                them. Additionally, I have worked with other front-end
                technologies such as Redux, React Context, and jQuery, allowing
                me to tackle complex projects with ease.
              </p>

              <p className="font-mediom">
                As a full stack developer, I have a solid understanding of both
                front-end and back-end development. I enjoy working with Python
                Django to create scalable and efficient server-side solutions.
                With my expertise in both front-end and back-end technologies, I
                can seamlessly integrate components, implement data handling and
                storage, and ensure the smooth functionality of web
                applications.
              </p>
              <p className="font-mediom mt-4">
                In addition to my technical skills, I am a self-taught English
                speaker with a solid score of 7.5 on the IELTS exam. Effective
                communication is important to me, and I am adept at conveying
                complex technical ideas in a clear and concise manner. This
                skill greatly contributes to my ability to collaborate
                effectively within a team environment.
              </p>

              <p className="font-mediom mt-4">
                If you are looking for a dedicated full stack developer who is
                passionate about their work and continuously strives for
                improvement, I would be thrilled to contribute my skills and
                experience to take your project to the next level. Feel free to
                reach out to me, so we can build amazing webstites together!
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2
             border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
              xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"></div>
              <Image
                src={profilePic}
                alt="Neda"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 
            xl:flex-row xl:items-center md:order-3 mt-4"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-2xl">
                  <AnimatedNumbers value={100} /> %
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                   xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Front-end Developement
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center mx-2">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-2xl">
                  <AnimatedNumbers value={90} /> %
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm
                "
                >
                  React.js | next.js
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-2xl">
                  <AnimatedNumbers value={60} /> %
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                   xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  Python | Django
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
