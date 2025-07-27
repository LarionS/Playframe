import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0F12',
        slate: '#1A232B',
        accent: '#7BDFFF',
        lime: '#B6FF5A',
        cloud: '#E6EDF3'
      }
    }
  },
  plugins: [],
}

export default config
