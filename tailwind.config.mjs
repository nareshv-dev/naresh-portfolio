/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#3A7CA5',      // Darker medium blue - main theme
        secondary: '#16C6D8',    // Vibrant turquoise - accents & highlights
        accent: '#FFE3B3',       // Cream - warm accents
        dark: '#1F4E6B',         // Darker blue - backgrounds
        'dark-purple': '#265A7A', // Medium dark blue
        'sea-dark': '#1F4E6B',
        'sea-medium': '#3A7CA5',
        'sea-turquoise': '#16C6D8',
        'sea-cream': '#FFE3B3',
      },
    },
  },
  plugins: [],
}
