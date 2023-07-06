// Next
import Head from "next/head";
// Modules Components
import { LandingPage } from "modules/sales/capture/components/landing-page";
import Script from 'next/script'


export default function Home() {
  return (
    <>
      <Head>
        <title>useArtemis - Magic lead machine.</title>
        <meta name="description" content="Find leads, enrich with emails and start multichannel campaigns." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
      id="intercom"
      dangerouslySetInnerHTML={{
        __html: `
        (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/hav4rqtk';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
    `,
      }}
    />
      <LandingPage />
    </>
  );
}
