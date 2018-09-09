import { createMuiTheme } from '@material-ui/core/styles'
import { runInDebugContext } from 'vm';

const baseFontFamily = ['Montserrat', 'sans-serif']

export default createMuiTheme({
    palette:{
        primary:{
            main: '#213443',
        },
    },
  typography: {
    display4: {
      fontFamily: ['Anton', ...baseFontFamily],
    },
    display3: {
      fontFamily: ['Anton', ...baseFontFamily],
    },
    display2: {
      fontFamily: ['Anton', ...baseFontFamily],
    },
    display1: {
      fontFamily: ['Anton', ...baseFontFamily],
    },
    headline: {
      fontFamily: baseFontFamily,
    },
    title: {
      fontFamily: baseFontFamily,
    },
    subheading: {
      fontFamily: baseFontFamily,
    },
    body2: {
      fontFamily: baseFontFamily,
    },
    body1: {
      fontFamily: baseFontFamily,
    },
    caption: {
      fontFamily: baseFontFamily,
    },
    button: {
      fontFamily: baseFontFamily,
    },

    // fontFamily: baseFontFamily,
  },
})
