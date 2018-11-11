import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import Countdown from 'react-countdown-now'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby'

import Logo from '../components/LP-logo'
import Layout from '../components/Layout'

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
})

const IndexPage = ({ classes, data }) => (
  <Layout>
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={6} className={classes.picture}>
        <div className={classes.section}>
          <Typography variant="display2" color="primary">
            Laura + Pol
          </Typography>
          <div className={classes.imageOuterWrapper}>
            <Img
              className={classes.imageWrapper}
              // imgStyle={{ width: 'auto', height: '100%' }}
              fluid={data.landingImage.childImageSharp.fluid}
            />
          </div>
          <Typography variant="body2">
            - Save the date, we're launching{' '}
            <span role="img" aria-label="rocket launch">
              🚀
            </span>{' '}
            a new adventure -
          </Typography>
          <Typography variant="headline">
            <Countdown date={new Date(2019, 3, 13, 11)}>
              We are married!
            </Countdown>
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.text}>
        <div className={classes.section}>
          <Logo className={classes.svgLogo} />
          <Typography variant="subheading" color="inherit">
            ¿Cuándo? Quan? When?
          </Typography>
          <div className={classes.divider} />
          <Typography variant="title" color="inherit">
            12-13-14 / 04 / 2019
          </Typography>
          <div className={classes.spacer} />
          <Typography variant="subheading" color="inherit">
            ¿Dónde? On? Where?
          </Typography>
          <div className={classes.divider} />
          <Button color="inherit" href="https://goo.gl/maps/eVCUn6dH9X62">
            <Typography variant="title" color="inherit">
              Ligüerre Resort
            </Typography>
          </Button>
          <Typography variant="title" color="inherit">
            Huesca - Spain
          </Typography>
          <div className={classes.spacer} />
          <Button
            onClick={() => {
              navigate('/vamos-de-fiesta')
            }}
          >
            Más información
          </Button>
          <Button>Més informació</Button>
          <Button>More information</Button>
          <div className={classes.spacer} />
          <Button
            variant="outlined"
            color="inherit"
            className={classes.button}
            href="https://goo.gl/forms/x5CCVpqY8byJHoDP2"
          >
            ¡Voy! Vaig! Coming!
          </Button>
          <div className={classes.spacer} />
          <Typography variant="display1" color="inherit">
            #laura
            <span role="img" aria-label="love">
              ❤️
            </span>
            pol
          </Typography>
        </div>
      </Grid>
    </Grid>
  </Layout>
)

export default withStyles(styles)(IndexPage)

export const query = graphql`
  query {
    landingImage: file(relativePath: { eq: "LP-landing-photo.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
