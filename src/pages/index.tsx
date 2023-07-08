// React
import { FC } from "react";
// Next
import Head from "next/head";
// Modules Components
import { LandingPage } from "modules/sales/capture/components/landing-page";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>useArtemis - Magic lead machine.</title>
        <meta name="description" content="Find leads, enrich with emails and start multichannel campaigns." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  );
}

export default Home;