/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'zinc-950': '#09090b',
        'zinc-900': '#18181b',
        'zinc-800': '#27272a',
        'cyan-400': '#22d3ee',
        'cyan-500': '#06b6d4',
        'blue-500': '#3b82f6',
      },
      boxShadow: {
        'cyan-glow': '0 8px 30px rgba(34, 211, 238, 0.2)',
        'cyan-glow-strong': '0 12px 40px rgba(6, 182, 212, 0.25)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #22d3ee, #3b82f6)',
        'accent-gradient-2': 'linear-gradient(90deg, #06b6d4, #3b82f6)'
      }
    },
  },
  plugins: [],
};
