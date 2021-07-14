module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        headings: "72px",

        backgroundImage: theme => ({
          "error-404-page": "url('./images/404.png')",
        }),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
