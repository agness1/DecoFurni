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
        'hero': "url('/images/hero/hero6.png')",
        'allProducts': "url('https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1812&q=80.jpg')"
      },
      backgroundColor: {
        opal: "#384353",
        green: '#4DE1C1'
      },
      colors: {
        opal: "#384353"
      },
      btnfilters: {
        
      }
    },
  },
  plugins: [],
}
export default config
