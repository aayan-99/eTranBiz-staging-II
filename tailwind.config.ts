import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'servicebox-gradient': 'linear-gradient(180deg, rgba(19,19,19,0.1) 0%, rgba(31,19,19,0.1) 25%, rgba(58,17,17,0.1) 50%, rgba(109,16,16,0.1) 75%, rgba(212,6,6,0.1) 100%)',
      },
    },
  },
  plugins: [],
}
export default config
