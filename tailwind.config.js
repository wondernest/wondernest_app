/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#152644',
        secondary: '#FBF9F2',
        tertiary: '#BCB5FA',
        wonderViolet: {
          400: '#9780fe',
          500: '#8867fa',
        },
        eggshell: '#f8f7f7',
      },
    },
  },
  plugins: [],
};
