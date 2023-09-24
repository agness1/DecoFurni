import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      backgroundImage: {
        'header': "url('/images/header.jpg')",
        'hero': "url('/images/hero/hero6.png')"
      },
      backgroundColor: {
        opal: "#384353"
      }
    },
  },
  plugins: [],
}
export default config
