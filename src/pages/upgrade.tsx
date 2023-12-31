// React
import { FC, useEffect, useState, useContext } from "react";
import GlobalContext from "context/GlobalContext"
import { useRouter } from "next/router";
// Next
import Head from "next/head";
// Modules Components
import { SalesPricingLandingPage } from "modules/sales/upgrade/components/landing-page";

const Pricing: FC = () => {

   
    return (
        <>
            <Head>
                <title>useArtemis - Pricing</title>
                <meta name="description" content="Subscribe to useArtemis and automate your lead generation" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SalesPricingLandingPage />
        </>
    );
}

export default Pricing;