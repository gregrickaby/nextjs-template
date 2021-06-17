module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx}'
    ]
  },
  darkMode: 'media',
  theme: {
    extend: {
      container: {
        center: true,
        margin: 'auto'
      }
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    }
  },
  variants: {},
  plugins: [],
  future: {}
}
