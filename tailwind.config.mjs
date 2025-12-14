/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a5f',      // Navy blue
        secondary: '#2563eb',    // Accent blue for hover
        accent: '#60a5fa',       // Light blue accent
        dark: '#0f172a',         // Dark navy
        'dark-purple': '#1e293b', // Slightly lighter navy
        navy: '#0f172a',
        'navy-light': '#1e3a5f',
        'navy-medium': '#1e293b',
      },
    },
  },
  plugins: [],
}
