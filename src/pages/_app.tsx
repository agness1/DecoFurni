import type { AppProps } from 'next/app'
import Navigation from '@/components/layout/navitagion';
import { Inter } from 'next/font/google'
import "../../public/globals.css"
import { Providers } from '@/provider';
import 'tailwindcss/tailwind.css';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 
export default function MyApp({ Component, pageProps }: AppProps) {

  return <Providers>
   <Navigation/> <main className={`${inter.variable} font-sans` }>
  <Component {...pageProps} />
</main>
    </Providers>
}
