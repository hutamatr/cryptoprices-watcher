/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#db628e",

          secondary: "#edf767",

          accent: "#a12fed",

          neutral: "#1E1221",

          "base-100": "#ECF1F3",

          info: "#1D58ED",

          success: "#148060",

          warning: "#C56F0D",

          error: "#ED7668",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
