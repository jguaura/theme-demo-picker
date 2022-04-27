import type { AppProps } from 'next/app';
import '../global.css';
import { ColorProvider } from '../Context/ColorContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorProvider>
      <Component {...pageProps} />
    </ColorProvider>
  )
}

export default MyApp;
