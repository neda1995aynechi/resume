import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
  YoutubeIcon
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./useThemeSwitcher";
import { Butterfly_Kids } from "next/font/google";

const emtySpace = " ";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`      
        h-[1px] inline-block bg-dark
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        dark:bg-light
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        {emtySpace}
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleMobileClick = () => {
    toggle();
    router.push(href);
  };

  return (
    // the button below is using push function to send url to the href
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleMobileClick}
    >
      {title}
      <span //underline for the menu titles
        className={`      
        h-[1px] inline-block bg-light
        absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300
        dark:bg-dark
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        {emtySpace}
      </span>
    </button>
  );
};

export const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [menuIsOpen, setMenuIsOpen] = useState(false); //for collapse menu

  const handleMenuCollapseClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between 
    dark:text-light relative sm:px-8 z-10 lg:px-16 md:px-8 "
    >
      {/* collapsable menu icon */}
      <div className="flex justify-center items-center">
        <button
          className="flex-col justify-center items-center
        hidden lg:flex"
          onClick={handleMenuCollapseClick}
        >
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
        ${menuIsOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}  `}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out
          ${menuIsOpen ? "opacity-0" : "opacity-100"} `}
          ></span>
          <span
            className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
        ${menuIsOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"} `}
          ></span>
        </button>

        {/* theme button */}
        <div className="hidden lg:flex">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
        `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </div>
      </div>
      {/*  */}

      {/* desktop menu */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="m-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="mx-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          {/* twitter icon */}
          {/* <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </motion.a> */}

          {/* git hub icon */}
          <motion.a
            href="https://github.com/neda1995aynechi"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>

          {/* linkedin icon*/}
          <motion.a
            href="https://www.linkedin.com/in/neda-ramakchi/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          {/* instagram icon */}
          <motion.a
            href="https://www.instagram.com/codebyneda"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 dark:bg-light rounded-full"
          >
            <InstagramIcon />
          </motion.a>

          {/* youtube icon */}
          <motion.a
            href="https://youtube.com/@codebyneda"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <YoutubeIcon />
          </motion.a>

          {/* theme button */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* end of desktop menu */}

      {/* mobile menu */}
      {menuIsOpen ? (
        <motion.div
          className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {/* translate classes abover will bring the menu in the middle of the screen */}
          <nav className="flex flex-col items-center justify-center ">
            <CustomMobileLink
              href="/"
              title="Home"
              toggle={handleMenuCollapseClick}
            />

            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleMenuCollapseClick}
            />

            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleMenuCollapseClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleMenuCollapseClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-2">
            {/* twitter icon */}
            {/* <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              className="w-6 mr-3 sm:mx-1"
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </motion.a> */}

            {/* git hub icon */}
            <motion.a
              href="https://github.com/neda1995aynechi"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1"
            >
              <GithubIcon />
            </motion.a>

            {/* linkedin icon*/}
            <motion.a
              href="https://www.linkedin.com/in/neda-ramakchi/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            {/* instagram icon */}
            <motion.a
              href="https://www.instagram.com/codebyneda"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light rounded-full dark:bg-light sm:mx-1"
            >
              <InstagramIcon />
            </motion.a>

            {/* youtube icon */}
            <motion.a
              href="https://youtube.com/@codebyneda"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
            >
              <YoutubeIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}
      {/* end of mobile menu */}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};
