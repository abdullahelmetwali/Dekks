/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tab: { max: "1000px" },
        mob: { max: "767px" },
      },
    },
  },
  plugins: [],
};
