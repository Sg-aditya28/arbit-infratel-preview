/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F5F2', // Alabaster Warm Stone Canvas
        obsidian: {
          DEFAULT: '#0B131E', // Deep Obsidian Slate
          light: '#142032',
          deep: '#060B12',
        },
        brass: {
          DEFAULT: '#B8965A', // Muted Champagne Brass
          light: '#CDB17E',
          dark: '#9B7C44',
          muted: 'rgba(184, 150, 90, 0.25)',
          hairline: 'rgba(184, 150, 90, 0.18)',
        },
        charcoal: {
          DEFAULT: '#181A1F', // Warm Charcoal Text
          muted: '#5A6065',
          subtle: '#8C9298',
        },
        stone: {
          150: '#ECEAE4',
          250: '#DDD9D0',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        none: '0px',
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 19, 30, 0.04)',
        'corporate': '0 4px 16px -2px rgba(11, 19, 30, 0.08)',
        'elevated': '0 16px 36px -4px rgba(11, 19, 30, 0.12)',
        'brass': '0 0 0 1px rgba(184, 150, 90, 0.35)',
      }
    },
  },
  plugins: [],
}
