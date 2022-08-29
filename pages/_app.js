import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/layout";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} refetchInterval={10 * 60}>
      <AnimatePresence mode="wait">
        <Layout>
          <Head>
            <title>Home - HJPark</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </SessionProvider>
  );
}

export default MyApp;
