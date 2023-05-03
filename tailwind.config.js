/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#cc10b6",

          secondary: "#a2f9cc",

          accent: "#d11ba0",

          neutral: "#252432",

          "base-100": "#F1F2F8",

          info: "#97DAF7",

          success: "#12A56A",

          warning: "#F5D270",

          error: "#ED6E83",
        },
      },
    ],
  },
};
