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
        title="We are getting married and we would like to share that moment with you!"
        subtitle="You just need to fill in this short form"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.giftImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" color="inherit">
          Please, to help us with the organization, fill in this short form before 28th February. Thanks!
        </Typography>
        <div className={classes.buttonWrapper}>
          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            href="https://goo.gl/forms/x5CCVpqY8byJHoDP2"
          >
            RSVP
          </Button>
        </div>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(rsvpES)
