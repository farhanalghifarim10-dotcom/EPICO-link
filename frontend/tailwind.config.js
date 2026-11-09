/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitch: '#000000',
        obsidian: {
          DEFAULT: '#0A0A0A',
          card: '#0D0D0D',
          hover: '#141414',
          border: '#222222',
        },
        ash: {
          muted: '#888888',
          subtle: '#555555',
          border: '#222222',
          light: '#CCCCCC',
        },
        stark: '#FFFFFF',
      },
      fontFamily: {
        athletic: ['"Barlow Semi Condensed"', '"Barlow"', 'system-ui', 'sans-serif'],
        display: ['"Barlow"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'super-wide': '0.25em',
        'epic': '0.35em',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

