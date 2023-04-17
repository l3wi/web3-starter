import type { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import ClientOnly from "../utils/clientOnly";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Layout name={null}>
      <div className="pt-8 md:pt-24 flex flex-wrap items-center justify-center">
        <div className="max-w-sm mb-4 md:mb-16 lg:mb-0 lg:max-w-2xl lg:w-1/2 lg:px-4">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-6xl xl:text-7xl">
            A Web3 Starter
          </h2>
          <p className="py-5 mb-5 text-gray-600 lg:text-xl">
            Simple starter using Wagmi, Rainbow, Tailwind and Next.js.
          </p>
          <div className="flex items-center">
            <button
              onClick={() => router.push("/")}
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-indigo-600  rounded hover:bg-indigo-900 focus:shadow-outline focus:outline-none"
              data-rounded="rounded-lg"
              data-primary="gray-900"
            >
              Home
            </button>
            <a
              href="#"
              target={"_blank"}
              rel={"noopener"}
              className="inline-flex items-center text-lg text-gray-600 transition-colors duration-200"
              data-primary="gray-900"
            >
              Learn More
              <svg
                className="inline-block w-2 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="relative flex justify-center items-center lg:w-1/2">
          <div className="">
            <ClientOnly>
              <h2>Client Side stuff happens here</h2>
            </ClientOnly>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
