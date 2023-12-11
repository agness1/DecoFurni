import type { AppProps } from 'next/app'
import Navigation from '@/components/layout/navitagion';
import { Roboto } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import "../../public/globals.css"
import { Providers } from '@/provider';
import 'tailwindcss/tailwind.css';
import Head from 'next/head'

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
 
export default function MyApp({ Component, pageProps }: AppProps) {

  return (  <Providers > 
    <Head>
        <title>DecoFurni</title>
      </Head>
    <main className={montserrat.className }>
    <Navigation />
  <Component {...pageProps} />
</main>
    </Providers>
    )
}
