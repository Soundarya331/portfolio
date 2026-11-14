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
        'glow-violet': '0 0 25px -5px rgba(129, 140, 248, 0.25)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        'ping-soft': {
          '0%,100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%':      { transform: 'scale(1.4)', opacity: '0.1' },
        },
      },
      animation: {
        'fade-in':   'fade-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-in':  'scale-in 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'ping-soft': 'ping-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
