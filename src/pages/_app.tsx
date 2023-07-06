import type { AppProps } from 'next/app'
// Styles
import "styles/style.scss";
import Router, { useRouter } from 'next/router'
import {  useEffect } from 'react';
import Script from 'next/script'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      window.gtag("config", "G-K29KX46KCP", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  return (
  <div>
   <Script
   id='tagmanager'
strategy="afterInteractive"
            
            src={`https://www.googletagmanager.com/gtag/js?id=G-K29KX46KCP`}
          /> 
<Script
id='googletag'
strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-K29KX46KCP', {
                page_path: window.location.pathname,
              });
              gtag('config', 'AW-1004009503');
          `,
            }}
          />
<Component {...pageProps} />
  </div>
  
)}
