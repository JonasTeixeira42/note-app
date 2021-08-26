export default {
  grid: {
    container: '130rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    bold: 500,
    sizes: {
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.0rem',
      xlarge: '2.4rem',
      xxlarge: '3.4rem'
    }
  },
  colors: {
    white: '#FFFFFF',
    gray: '#282E29',
    black: '#000000',
    purple: '#5C6BC0',
    lightBlue: '#69BCFF',
    lightGray: '#F5F5F5',
    orange: '#FF9100',
    green: '#66BB6A',
    blue: '#03A9F4',
    red: '#f94546'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
