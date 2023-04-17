import Head from "next/head";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

interface Props extends PropsWithChildren {
  name: string | null;
}

const siteName = "Web3 Starter";

const Layout: React.FC<Props> = ({ children, name }) => {
  const router = useRouter();
  return (
    <main className="px-10 mx-auto max-w-7xl min-h-screen flex flex-col">
      <Head>
        <title>{name ? `${name} - ${siteName}` : siteName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="flex-grow">{children}</section>
      <Footer />
    </main>
  );
};
export default Layout;
