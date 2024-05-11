/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "callout-rgb": "rgb(20, 20, 20)",
        "callout-broder-rgb": "rgb(108, 108, 108)",
      },
    },
  },
  plugins: [],
};
