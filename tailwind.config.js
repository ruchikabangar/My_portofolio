/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#090c14',
          soft: '#0e1220',
          surface: '#121728',
        },
        cyan: {
          signal: '#22d3ee',
        },
        violet: {
          depth: '#8b5cf6',
        },
        amber: {
          spark: '#fbbf24',
        },
        ink: {
          primary: '#e9edf6',
          muted: '#8891a6',
          faint: '#565f75',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow': 'linear-gradient(to bottom, rgba(34,211,238,0.06), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34,211,238,0.35)',
        'glow-violet': '0 0 40px -10px rgba(139,92,246,0.35)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
