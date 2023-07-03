import type { AppProps } from 'next/app'
// Styles
import "styles/style.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
