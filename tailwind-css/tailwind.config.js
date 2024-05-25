/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        card: "0px 4px 2px 0px rgba(0, 0, 0, 0.04)",
      },
      colors: {
        "dark-grey": "#5C5F62",
        "light-blue": "#EEE9FD",
        "medium-grey": "#EDEDED",
        "blue-purple": "#6837E7",
        "callout-rgb": "rgb(20, 20, 20)",
        "callout-broder-rgb": "rgb(108, 108, 108)",
      },
    },
  },
  plugins: [],
};
