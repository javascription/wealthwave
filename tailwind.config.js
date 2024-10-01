/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/components/Navbar.js",
    "./src/components/ThemeToggle.js",
    "./src/app/contact/page.js",
    "./src/app/login/page.js",
    "./src/app/about/page.js",
    "./src/app/page.js",
    "./src/app/layout.js",
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
};
