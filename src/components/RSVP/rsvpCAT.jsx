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
        title="Ens casem i ens agradaria compartir aquest moment amb vosaltres!"
        subtitle="Només has de respondre un breu formulari"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.giftImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" color="inherit">
          Si us plau, per a facilitar-nos l’organització, ompli aquest breu formulari abans del 28 de febrer. Gràcies!
        </Typography>
        <div className={classes.buttonWrapper}>
          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            href="https://goo.gl/forms/x5CCVpqY8byJHoDP2"
          >
            Això no m’ho perdo!
          </Button>
        </div>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(rsvpES)
