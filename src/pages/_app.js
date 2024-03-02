import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import React,{useState,useState} from "react"
import React, {Fragment, useEffect, useState} from "react";
import {getLandingSocialData} from "@/utils/axiosInstance";



const monsterrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {

    // const [socialData, setSocialData] = useState()
    // console.log("socialData",socialData)
    //
    // useEffect(() => {
    //     const fetchSocial = async () => {
    //         const data = await getLandingSocialData();
    //         setSocialData(data);
    //     };
    //
    //     fetchSocial();
    // }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shieldLogo.ico" />
      </Head>
      <main
        className={`${monsterrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}


<ToastContainer
    position="bottom-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
/>