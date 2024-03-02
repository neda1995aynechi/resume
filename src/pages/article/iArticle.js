import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { getLandingSocialData } from "@/utils/axiosInstance";
import axios from "axios";

const IArticles = () => {
  const [socialData, setSocialData] = useState();
  console.log("socialData", socialData);

  // Fetch card data from the API
  useEffect(() => {
    // Replace with your API endpoint
    const apiUrl = "http://65.109.0.142:1400/api/v1/landing_social/";

    axios
      .get(apiUrl, {})
      .then((response) => {
        setSocialData(response.data);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          //    yes
        } else if (error.response && error.response.status === 401) {
          //    yes
        } else {
          console.error("Error fetching data:", error);
        }
      });
  }, []);

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
          <AnimatedText
            text="Words can change the world!"
            className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
        </Layout>
      </main>
    </>
  );
};

export default IArticles;
