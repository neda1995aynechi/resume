import React, {Fragment, useRef} from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companiLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto 
    flex flex-col items-start justify-center
    md:w-[80%]
    "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-2xl xs:text-lg">
          {position} {""}{" "}
          <a
            href={companiLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = ({experience}) => {
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
        Experience
      </h2>

      {/* experience */}

      <div
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        {/* left side scroll line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w[2px] md:left-[30px] xs:left-[20px] "
        ></motion.div>
        {/* end of line */}

        <ul className=" w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experience?.map((item)=>(
              <Fragment key={item?.id + item?.created}>
          <Details
            position={item?.title}
            company="CodeByNeda"
            companiLink={item?.company_site}
            time={`from ${item?.start_date} to ${item?.start_date? item.start_date: "-"}`}
            address={item?.location}
            work={item?.description}
          />
              </Fragment>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Experience;
