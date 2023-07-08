// Next
import type { AppContext, AppProps } from 'next/app'
// Styles
import "styles/style.scss";
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import Script from 'next/script'


const UAApp = ({ Component, pageProps }: AppProps) => {

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
    <>
      <Component {...pageProps} />
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
      </div>
    </>
  )
}

UAApp.getInitialProps = async ({ Component, ctx, router }: AppContext) => {
  let pageProps = {}

  const { req } = ctx;
  const { locale } = router; // Will return `fr` for `/fr/*` pages
  const { messages } = req || (window as any).__NEXT_DATA__.props;
  const initialNow = Date.now();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    initialNow,
    pageProps,
    messages,
    locale,
  }
}

export default UAApp