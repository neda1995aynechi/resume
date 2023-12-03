import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto 
    flex flex-col items-center justify-between md:w-[80%]
    "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  // animation for left side scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });
  // end of animation

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      {/* experience 1  */}

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        {/* left side scroll line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w[2px] md:left-[30px] xs:left-[20px]"
        ></motion.div>
        {/* end of line */}

        <ul className=" w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Front-end Developement"
            time="2022-2023"
            place="Anformatic/Mashhad"
            info="This was a full course for Front-end Developement. This course covered all skills needed to design and develope the
             Front-end of a website, covering important skills such as HTML, CSS, Tailwind, Bootstrap, Material UI and etc.."
          />
          {/* education 2 */}
          <Details
            type="React.js"
            time="2023-2023"
            place="Anformatic/Mashhad"
            info="This course is designed for people with background knowladge of coding, that want to learn a framework. 
            This course covered, React.js, Next.js, Redux, etc.."
          />
          {/* education 3 */}
          <Details
            type="Python Django"
            time="2023-"
            place="Anformatic/Mashhad"
            info=" Python-Django, This course covers, introduction to Python and then moves on to Django and all of its 
            dependencies."
          />
          {/* education 4 */}
          <Details
            type="Full-stack Developement"
            time="2023-"
            place="Anformatic/Mashhad"
            info="This is a completional course, designed to help connect Django to React Framework, and get a deep understanding of the
            API, and how to work with them properly."
          />
          {/* education 5 */}
          <Details
            type="Figma Design"
            time="2023-2023"
            place="Anformatic/Mashhad"
            info="A quick course as an introduction to Figma design, for easier understanding and better explanation of desing patterns."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
