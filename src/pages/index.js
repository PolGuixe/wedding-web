import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import Countdown from 'react-countdown-now'

import Logo from '../components/LP-logo'

const styles = theme => ({
  container: {
    height: '100vh',
  },
  picture: {
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  section: {
    height: '100%',
    padding: theme.spacing.unit * 5,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOuterWrapper: {
    padding: `${theme.spacing.unit * 2}px 0px`,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '85%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
  },
  imageWrapper: {
    maxHeight: '75vh',
  },
  svgLogo: {
    fill: theme.palette.primary.contrastText,
    stroke: theme.palette.primary.contrastText,
    width: '150px',
    marginBottom: theme.spacing.unit * 4,
  },
  divider: {
    width: '10%',
    height: '1px',
    backgroundColor: theme.palette.primary.contrastText,
    margin: `${theme.spacing.unit}px 0px`,
  },
  spacer: {
    height: theme.spacing.unit * 6,
  },
  button: {
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
    borderWidth: '3px',
    fontSize: '18px',
  },
  hastag: {
    fontFamily: ['Bangers'],
  },
})

const IndexPage = ({ classes, data }) => (
  <Grid container className={classes.container}>
    <Grid item xs={12} sm={6} className={classes.picture}>
      <div className={classes.section}>
        <Typography variant="display2" color="primary">
          Laura
        </Typography>
        <Typography
          variant="display3"
          className={classes.plusText}
          color="primary"
        >
          +
        </Typography>
        <Typography variant="display2" color="primary">
          Pol
        </Typography>
        <Img
          outerWrapperClassName={classes.imageOuterWrapper}
          className={classes.imageWrapper}
          // imgStyle={{ width: 'auto', height: '100%' }}
          sizes={data.landingImage.sizes}
        />
        <Typography variant="body2">
          - Save the date, we're launching 🚀 a new adventure -
        </Typography>
        <Typography variant="headline">
        <Countdown date={new Date(2019,3,13,11)}>
          We are married!
        </Countdown>
        </Typography>
      </div>
    </Grid>
    <Grid xs={12} sm={6} className={classes.text}>
      <div className={classes.section}>
        <Logo className={classes.svgLogo} />
        <Typography variant="subheading" color="inherit">
          ¿Cuando? Quan? When?
        </Typography>
        <div className={classes.divider} />
        <Typography variant="title" color="inherit">
          13 avr. 2019 a 13:00
        </Typography>
        <div className={classes.spacer} />
        <Typography variant="subheading" color="inherit">
          ¿Dónde? On? Where?
        </Typography>
        <div className={classes.divider} />
        <Typography variant="title" color="inherit">
          Liguerre Resort
        </Typography>
        <Typography variant="title" color="inherit">
          Calle Santa Orosia Ag Alberuela, 2, 22393
        </Typography>
        <Typography variant="title" color="inherit">
          Abizanda, Huesca, Spain
        </Typography>
        <div className={classes.spacer} />
        <Button variant="outlined" color="inherit" className={classes.button}>
          ¡Voy! Vaig! Coming! On y va!
        </Button>
        <div className={classes.spacer} />
        <Typography variant="title" color="inherit" className={classes.hastag}>
          #laura+pol
        </Typography>
      </div>
    </Grid>
  </Grid>
)

export default withStyles(styles)(IndexPage)

export const query = graphql`
  query LandingPageQuery {
    landingImage: imageSharp(id: { regex: "/LP-landing-photo/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`
