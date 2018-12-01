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
        title="Tens algun dubte?"
        subtitle="No dubtis en contactar-nos"
      >
        <Typography variant="body2" color="inherit">
          Ja ens coneixeu, si teniu algun dubte podeu: preguntar en persona,
          trucar-nos, escriure correus, whatsapp, instagram, etc. 😊
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(contactES)
