/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      transparent: "transparent",
      surface: "var(--surface-color)",
      accent: "var(--accent-color)",
      primary: "var(--primary-color)",
      secondary: "var(--secondary-color)",
      cold: "var(--cold-color)",
      hot: "var(--hot-color)",
    },
    container: {
      center: true,
      padding: "1rem",
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
