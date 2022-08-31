/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        button: "var(--color-bg-button)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        button: "var(--color-text-button)",
      },
      placeholderColor: {
        primary: "var(--color-placeholder-primary)",
      },
      borderColor: {
        primary: "var(--color-border-primary)",
      },
    },
  },
  plugins: [],
};
