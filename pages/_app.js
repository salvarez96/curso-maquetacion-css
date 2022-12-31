import { Roboto_Slab, Roboto, Roboto_Mono } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const robotoSlab = Roboto_Slab({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});

const roboto = Roboto({ 
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'] 
});

const robotoMono = Roboto_Mono({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={robotoMono.className}>
      <Component {...pageProps} />
    </main>
  )
}