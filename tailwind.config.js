/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      transparent: "transparent",
      surface: "#100D15",
      accent: "#47F213",
      primary: "#E2E2D2",
      secondary: "#767676",
      base: "#ffffff",
      cold: "#4E56ED",
      hot: "#E0312B",
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["neuropol, sans-serif"],
      title: ["project_space, sans-serif"],
    },
    transitionDuration: {
      DEFAULT: "500ms",
      short: "200ms",
    },
    extend: {},
  },
  plugins: [],
};
