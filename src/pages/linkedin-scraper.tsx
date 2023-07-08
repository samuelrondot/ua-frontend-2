
// Next
import Head from "next/head";
// Modules Components
import { CrmStartupLandingPage } from "modules/crm/startup/components/landing-page";


export default function StartupCrm() {
    return (
        <>
            <Head>
                <title>useArtemis | The Smartest LinkedIn Scraper</title>
                <meta name="description" content="Extract & Enrich clean data from LinkedIn and LinkedIn Sales Navigator with our LinkedIn Scraper." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CrmStartupLandingPage />
        </>
    );
}
