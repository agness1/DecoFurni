import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { Providers } from '@/provider';
import 'tailwindcss/tailwind.css';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Providers><main className={`${inter.variable} font-sans `}>
  <Component {...pageProps} />
</main>
    </Providers>
}
