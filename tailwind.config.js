/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "material-shadow":
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#D1C1D7",

          secondary: "#F6CBD1",

          accent: "#B4E9D6",

          neutral: "#70ACC7",

          "base-100": "#F9F9F9",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
