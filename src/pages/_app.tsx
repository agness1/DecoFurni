import type { AppProps } from 'next/app'
import Navigation from '@/components/layout/navitagion';
import { Roboto } from 'next/font/google'
import "../../public/globals.css"
import { Providers } from '@/provider';
import 'tailwindcss/tailwind.css';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
 
export default function MyApp({ Component, pageProps }: AppProps) {

  return ( <Providers >
   <Navigation/> <main className={roboto.className }>
  <Component {...pageProps} />
</main>
    </Providers>
    )
}
