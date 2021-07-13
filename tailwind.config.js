module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        headings: "72px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
