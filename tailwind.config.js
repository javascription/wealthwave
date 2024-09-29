/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/layout.js",
    "./src/page.js",
    "./src/components/Navbar.js",
    "./src/components/ThemeToggle.js",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mo: {'max': '991px'},
        mx: {'max': '580px'},
        mi: {'max': '400px'}
      },

      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
};
