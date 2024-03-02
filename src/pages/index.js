import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/NedaProfile.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import { getLandingData } from "@/utils/axiosInstance";
import Loader from "@/components/utilities/Loader";

export default function Home({ landingData }) {
  const isDataLoading = !landingData;

  return (
    <>
      <Head>
        <title>Code By Neda</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          {!isDataLoading ? (
            <div className="flex items-center justify-between w-full lg:flex-col">
              {/* profile image */}
              <div className="w-1/2 md:w-full">
                <Image
                  src={landingData?.profile_img}
                  // src={profilePic}
                  alt="Neda"
                  className="w-full h-auto lg:inline-block lg:w-full lg:mt-4"
                  priority
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                />
              </div>

              {/* right side text */}
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
                <AnimatedText
                  text={landingData.title}
                  className="!text-6xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                />
                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  {landingData.description}
                </p>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  {landingData.resume_file && (
                    <Link
                      href={landingData.resume_file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border--solid border-dark
              transition-all duration-1000
              dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light
              md:p-2 md:px-4 md:text-base"
                      download
                    >
                      Resume
                      <LinkArrow className={"!w-5 ml-1"} />
                    </Link>
                  )}
                  {landingData.phone_number && (
                    <Link
                      href={`tel:${landingData.phone_number}`}
                      target={"_blank"}
                      className="ml-4 text-lg font-medium capitalize text-dark underline
                  dark:text-light"
                    >
                      Contact
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </Layout>
        {landingData && landingData?.email && (
          <HireMe email={landingData?.email} />
        )}
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    // Fetch landing data
    const response = await getLandingData();
    const landingData = response.results[0];

    // Pass landingData as props
    return { props: { landingData }, revalidate: 86400 }; // revalidate every hour (24 hours)
  } catch (error) {
    console.error("Error fetching landing data:", error);
    // Pass an empty object or null if there's an error
    return { props: { landingData: null }, revalidate: 60 }; // revalidate every minute (60 seconds)
  }
}
