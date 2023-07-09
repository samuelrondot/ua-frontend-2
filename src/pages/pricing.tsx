// React
import { FC } from "react";
// Next
import Head from "next/head";
// Modules Components
import { SalesPricingLandingPage } from "modules/sales/pricing/components/landing-page";

const Pricing: FC = () => {
    return (
        <>
            <Head>
                <title>useArtemis - Pricing</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SalesPricingLandingPage />
        </>
    );
}

export default Pricing;