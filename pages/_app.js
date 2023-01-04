import { Roboto_Mono } from '@next/font/google';
import GlobalStyle from '../components/global-comps/globalstyles';

// If loading a variable font, you don't need to specify the font weight
const robotoMono = Roboto_Mono({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={robotoMono.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  )
}