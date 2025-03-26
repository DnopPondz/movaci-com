import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    'app.vue',
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.ts',
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
