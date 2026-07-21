/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1220',
        surface: '#121B2E',
        surface2: '#0E1728',
        border: '#1F2B42',
        text: '#E7ECF3',
        muted: '#8A9BB5',
        teal: '#4FD1C5',
        amber: '#F2A65A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
