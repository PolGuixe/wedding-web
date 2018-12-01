import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { StaticQuery, graphql } from 'gatsby'

import InfoSection from '../InfoSection'
import styles from './styles'

const contactES = ({ classes }) => (
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
        title="Do you have any other questions?"
        subtitle="Don't hesitate to contact us"
      >
        <Typography variant="body2" color="inherit">
          You know us already, if you have any questions, you can: ask when you see us,
          call us, write us an e-mail, whatsapp, instagram, etc. 😊
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(contactES)
