// React
import { FC, useEffect, useState, useContext } from "react";
import GlobalContext from "context/GlobalContext"
import { useRouter } from "next/router";
// Next
import Head from "next/head";
// Modules Components
import { SalesPricingLandingPage } from "modules/sales/pricing/components/landing-page";

const Pricing: FC = () => {

    const router = useRouter()

    const gContext = useContext(GlobalContext);

    const calculateDateDifference = (date: any) => {
        const currentDate = new Date();
        const accountDate = new Date(date);
        const diffTime = Math.abs(currentDate.getTime() - accountDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return diffDays;
      }

    if(gContext?.isloggedin && gContext?.userinfo){
        const diffDays = calculateDateDifference(gContext.userinfo.createdAt);
       
        if (diffDays > 14) {
          router.push('/upgrade');
        }
    }

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