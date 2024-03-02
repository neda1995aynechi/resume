import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, {Fragment, useEffect, useRef} from "react";
import profilePic from "../../public/images/profile/NedaProfileAbout.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import {getAboutData} from "@/utils/axiosInstance";
import Loader from "@/components/utilities/Loader";
import TextFormatter from "@/components/utilities/textFormatter";

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




const about = ({aboutData,programSkills,experience ,education,langSkills}) => {
  const isDataLoading = !aboutData;

  return (
    <>
      <Head>
        <title>About Neda Ramakchi</title>
        <meta name="description" content="description for seo" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {isDataLoading ?
            <Loader/>:

          <Fragment>
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-9"
            text={aboutData.title}
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start lg:col-span-4 md:order-2  md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>

              <div className="font-medium">
                <TextFormatter text={aboutData.description} />
              </div>
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

            {programSkills &&
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 
            xl:flex-row xl:items-center md:order-3 mt-4"
            >

              {programSkills?.map((skill)=>(

              <div
                  key={skill?.id + skill?.updated}
                  className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-2xl">
                  <AnimatedNumbers value={skill?.percent} /> %
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75
                   xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  {skill?.name}
                </h2>
              </div>
              ))}
            </div>
            }

          </div>

            {langSkills&&
          <Skills langSkills={langSkills} />
            }

            {experience&&
          <Experience experience={experience} />
            }

            {education&&
          <Education education={education} />
            }

          </Fragment>
          }

        </Layout>
      </main>

    </>
  );
};

export default about;

export async function getStaticProps() {
  try {
    const response = await getAboutData();
    const aboutData = response.about[0]
    const programSkills= response.program_skills
    const experience =response.experience
    const education=response.education
    const langSkills =response.lan_skills

    // Pass landingData as props
    return { props: { aboutData, programSkills,experience ,education,langSkills }, revalidate: 86400 }; // revalidate every hour (24 hours)
  } catch (error) {
    console.error("Error fetching landing data:", error);
    // Pass an empty object or null if there's an error
    return { props: { aboutData: null }, revalidate: 60 }; // revalidate every minute (60 seconds)
  }
}


