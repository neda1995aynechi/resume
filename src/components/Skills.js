import React from "react";
import { motion } from "framer-motion";

const Skill = ({ skillName, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full 
      font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
      dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
      xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: false }}
    >
      {skillName}
    </motion.div>
  );
};

const Skills = ({langSkills}) => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex 
      items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
       lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
       md:bg-circularLightMd md:dark:bg-circularDarkMd
       sm:bg-circularLightSm sm:dark:bg-circularDarkSm
       "
      >
        {/* middle web */}
        <motion.div
          className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
        dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>

        {/* css */}

        {langSkills[0]&&
        <Skill skillName={langSkills[0]?.name} x="-22vw" y="2vw" />
        }

        {langSkills[1]&&
        <Skill skillName={langSkills[1]?.name} x="-30vw" y="-7vw" />
        }

        {langSkills[2]&&
        <Skill skillName={langSkills[2]?.name} x="20vw" y="6vw" />
        }

        {langSkills[3]&&
        <Skill skillName={langSkills[3]?.name} x="0vw" y="10vw" />
        }

        {langSkills[4]&&
        <Skill skillName={langSkills[4]?.name} x="-5vw" y="20vw" />
        }

        {langSkills[5]&&
        <Skill skillName={langSkills[5]?.name} x="-20vw" y="-15vw" />
        }

        {langSkills[6]&&
        <Skill skillName={langSkills[6]?.name} x="15vw" y="-12vw" />
        }

        {langSkills[7]&&
        <Skill skillName={langSkills[7]?.name} x="32vw" y="-5vw" />
        }

        {langSkills[8]&&
        <Skill skillName={langSkills[8]?.name} x="0vw" y="-20vw" />
        }

        {langSkills[9]&&
        <Skill skillName={langSkills[9]?.name} x="-25vw" y="15vw" />
        }

          {langSkills[10]&&
        <Skill skillName={langSkills[10]?.name} x="18vw" y="18vw" />
          }

          {langSkills[11]&&
        <Skill skillName={langSkills[11]?.name} x="-7vw" y="-7vw" />
          }

      </div>
    </>
  );
};

export default Skills;
