import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
  font-medium text-lg dark:text-light dark:border-light 
  sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        {/* copy rights */}
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Built with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by:{" "}
          <Link
            className="ml-1.5 underline underline-offset-2"
            href="mailto:neda1995aynechi@protonmail.com"
            target={"_blank"}
          >
            Neda
          </Link>
        </div>

        <Link
          className="underline underline-offset-2"
          href="mailto:neda1995aynechi@protonmail.com"
          target={"_blank"}
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
