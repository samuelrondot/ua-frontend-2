// Next
import type { AppContext, AppProps } from 'next/app'
// Styles
import "styles/style.scss";

const UAApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
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