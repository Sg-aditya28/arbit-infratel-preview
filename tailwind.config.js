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
        canvas: '#FFFFFF', // Clean White Canvas
        surface: '#F8FAFC', // Crisp Modern Surface
        arbitBlue: {
          DEFAULT: '#2C8FEA', // Vibrant Azure Brand Blue from Logo
          light: '#56ACF8',
          dark: '#1E75D8',
          deep: '#155BB5',
          soft: '#EAF4FE',
          glow: 'rgba(44, 143, 234, 0.25)',
        },
        brandGold: {
          DEFAULT: '#D0B161', // Logo Arrow Apex Warm Gold Accent
          light: '#E5C778',
          dark: '#B59443',
        },
        obsidian: {
          DEFAULT: '#0F172A', // Deep Architectural Slate Navy
          light: '#1E293B',
          deep: '#070D18',
        },
        charcoal: {
          DEFAULT: '#0F172A', // High-Contrast Modern Text
          muted: '#475569',
          subtle: '#64748B',
        },
        stone: {
          150: '#F1F5F9',
          250: '#E2E8F0',
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
