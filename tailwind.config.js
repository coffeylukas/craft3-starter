//
// TailwindCSS Configuration File
// ------------------------------

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
      },
      fontFamily: {
        sans: [
          ...defaultTheme.fontFamily.sans,
        ]
      },
      spacing: {
      }
    }
  },
  variants: {},
  plugins: []
}
