import React, { Component } from 'react'
import Layout from 'material-ui-layout'
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography, Button } from '@material-ui/core'
import Img from 'gatsby-image'
import { graphql, navigate } from 'gatsby'

import InfoSection from '../components/InfoSection'

const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: '100vh',
    width: '100%',
  },
  imgWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: '100%',
  },
  img: {
    width: '100%',
    maxWidth: '600px',
  },
  button: {
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
    borderWidth: '3px',
    fontSize: '18px',
  },
  spacer: {
    height: theme.spacing.unit * 6,
  },
})

class NotFound extends Component {
  render() {
    const { classes, data } = this.props
    return (
      <Layout mainGrow stickyFooter={false}>
        <InfoSection
          title="Nothing here... 🙄"
          subtitle="We know we need to provide you with more info.."
          wrapperClassName={classes.wrapper}
        >
          <div className={classes.spacer} />
          <Typography color="inherit" paragraph align="center">
            Right now can find all the information at home
          </Typography>
          <div className={classes.imgWrapper}>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => navigate('/')}
            >
              Go home!
            </Button>
          </div>
          <div className={classes.spacer} />
          <Typography color="inherit" paragraph align="center">
            Or refresh to see pictures of these two...
          </Typography>
          <div className={classes.imgWrapper}>
            <Img
              fluid={
                data[`random${Math.floor(Math.random() * 3)}`].childImageSharp
                  .fluid
              }
              className={classes.img}
            />
          </div>
        </InfoSection>
      </Layout>
    )
  }
}

export default withStyles(styles)(NotFound)

export const query = graphql`
  query {
    random0: file(relativePath: { eq: "random/random0.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    random1: file(relativePath: { eq: "random/random1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    random2: file(relativePath: { eq: "random/random2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
