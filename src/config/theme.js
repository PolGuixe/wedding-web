import { createMuiTheme } from '@material-ui/core/styles'

const baseFontFamily = ['Montserrat', 'sans-serif']

export default createMuiTheme({
  palette: {
    primary: {
      main: '#213443',
    },
  },
  typography: {
    display4: {
      fontFamily: ['Anton', ...baseFontFamily],
      fontDisplay: 'swap',
    },
    display3: {
      fontFamily: ['Anton', ...baseFontFamily],
      fontDisplay: 'swap',
    },
    display2: {
      fontFamily: ['Anton', ...baseFontFamily],
      fontDisplay: 'swap',
    },
    display1: {
      fontFamily: ['Anton', ...baseFontFamily],
      fontDisplay: 'swap',
    },
    headline: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
    title: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
    subheading: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
    body2: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
    body1: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
    caption: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
    button: {
      fontFamily: baseFontFamily,
      fontDisplay: 'swap',
    },
  },
})
