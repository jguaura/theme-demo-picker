function getColor(variableName) {
  return `rgb(var(${variableName}))`;
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: getColor('--color-primary'),
          secondary: getColor('--color-secondary'),
          accent: getColor('--color-accent'),
          logo: getColor('--color-logo')
        }
      },
      backgroundColor: {
        skin: {
          primary: getColor('--color-primary'),
          secondary: getColor('--color-secondary'),
          accent: getColor('--color-accent'),
          logo: getColor('--color-logo')
        }
      }
    }
  },
  plugins: []
};
