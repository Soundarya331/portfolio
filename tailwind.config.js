/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0F1D',
        surface: '#111827',
        surface2: '#0F172A',
        surface3: '#1E293B',
        border: '#1F293D',
        borderHover: '#334155',
        text: '#F1F5F9',
        muted: '#94A3B8',
        mutedLight: '#CBD5E1',
        teal: '#2DD4BF',
        tealDark: '#0D9488',
        cyan: '#38BDF8',
        amber: '#F59E0B',
        emerald: '#10B981',
        violet: '#818CF8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-teal': '0 0 25px -5px rgba(45, 212, 191, 0.25)',
        'glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.25)',
      },
    },
  },
  plugins: [],
}
