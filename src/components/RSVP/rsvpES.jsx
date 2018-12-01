import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InfoSection from '../InfoSection'
import styles from './styles'

const rsvpES = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query {
        giftImage: file(relativePath: { eq: "rsvp/rsvp.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <InfoSection
        wrapperClassName={classes.rsvpSection}
        title="¡Nos casamos y nos encantaría que vinieses!"
        subtitle="Solo tienes que responder un corto formulario "
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.giftImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" color="inherit">
          Por favor, para facilitarnos la organización, rellena este breve
          formulario antes del 28 de febrero. ¡Gracias!
        </Typography>
        <div className={classes.buttonWrapper}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            href="https://goo.gl/forms/x5CCVpqY8byJHoDP2"
          >
            ¡Esto no me lo pierdo!
          </Button>
        </div>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(rsvpES)
