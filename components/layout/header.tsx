import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useRouter } from "next/router";
import ClientOnly from "../../utils/clientOnly";

export default () => {
  const router = useRouter();
  return (
    <section className="w-full text-gray-700 bg-white tails-selected-element">
      <div className="flex flex-col flex-wrap items-center justify-between py-6 mx-auto md:flex-row max-w-7xl">
        <div className="relative flex flex-row justify-between w-full md:w-max md:justify-center mb-4 md:mb-0">
          <Link
            href="/"
            className="flex items-center font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            <h1 className="text-4xl font-bold">starter.</h1>
          </Link>
        </div>
        <span className="md:hidden pb-4">
          <ConnectButton
            chainStatus={{ smallScreen: "full", largeScreen: "icon" }}
          />
        </span>
        <div className="inline-flex flex-col items-center sm:flex-row sm:ml-12 lg:justify-end">
          <nav className="flex flex-wrap items-center space-x-4 text-xs font-semibold tracking-wide uppercase sm:space-x-6 mr-8">
            <NextLink title={"Home"} href={"/"} />
            <NextLink title={"Google"} href={"https://google.com"} />
          </nav>
          <span className="hidden md:visible md:inline-block">
            <ClientOnly>
              <ConnectButton
                chainStatus={{ smallScreen: "name", largeScreen: "icon" }}
                showBalance={{ smallScreen: false, largeScreen: false }}
              />
            </ClientOnly>
          </span>
        </div>
      </div>
    </section>
  );
};

const NextLink = ({ title, href }: { title: string; href: string }) => {
  const router = useRouter();
  const external = href.startsWith("http");

  return (
    <Link
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      href={href}
      className={`${
        router.pathname === href ? "text-gray-500" : "text-gray-400"
      } hover:text-gray-500  flex items-center`}
    >
      {title}
      {external && (
        <svg
          className="pl-1"
          height="12"
          viewBox="0 0 123 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M110.6 72.5801C110.6 69.3901 113.19 66.8001 116.38 66.8001C119.57 66.8001 122.16 69.3901 122.16 72.5801V105.77C122.16 110.48 120.24 114.76 117.14 117.86C114.04 120.96 109.76 122.88 105.05 122.88H17.11C12.4 122.88 8.12 120.96 5.02 117.86C1.92 114.76 0 110.48 0 105.77V17.1901C0 12.4801 1.92 8.20006 5.02 5.10006C8.12 2.00006 12.4 0.0800553 17.11 0.0800553H50.09C53.28 0.0800553 55.87 2.67006 55.87 5.86006C55.87 9.05006 53.28 11.6401 50.09 11.6401H17.11C15.59 11.6401 14.21 12.2701 13.2 13.2701C12.19 14.2801 11.57 15.6601 11.57 17.1801V105.76C11.57 107.28 12.2 108.66 13.2 109.67C14.21 110.68 15.59 111.3 17.11 111.3H105.06C106.58 111.3 107.96 110.67 108.97 109.67C109.98 108.67 110.6 107.28 110.6 105.76V72.5801ZM112.42 17.4601L54.01 76.6001C51.78 78.8701 48.12 78.9001 45.85 76.6701C43.58 74.4401 43.55 70.7801 45.78 68.5101L101.94 11.6401H78.56C75.37 11.6401 72.78 9.05006 72.78 5.86006C72.78 2.67006 75.37 0.0800553 78.56 0.0800553H105.06C110.18 0.0800553 116.78 -0.789945 120.71 3.18006C123.19 5.69006 122.64 25.7001 122.32 37.2901C122.24 40.2901 122.17 42.5801 122.17 44.2201C122.17 47.4101 119.58 50.0001 116.39 50.0001C113.2 50.0001 110.61 47.4101 110.61 44.2201C110.61 43.9101 110.69 40.9001 110.8 36.9801C110.96 30.9401 111.93 22.9401 112.42 17.4601Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Link>
  );
};
