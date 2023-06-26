/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#FF0303",
        primary: "#D37918",
        "txt-primary": "#787979",
        "txt-secondary": "#9A9A9A",
        "txt-main": "#2E3840",
      },
    },
  },
  plugins: [],
};
