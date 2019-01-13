import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { StaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'

import InfoSection from '../InfoSection'
import styles from './styles'

const contactES = ({ classes, dark }) => (
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
        wrapperClassName={classNames(classes.rsvpSection, {
          [classes.rsvpDarkSection]: dark,
        })}
        title="¿Tienes alguna pregunta?"
        subtitle="No dudes en contactarnos"
      >
        <Typography variant="body2" color="inherit">
          Ya nos conoceis, si teneis alguna duda podeis: preguntar en persona,
          llamarnos, escribir correos, whatsapp, instagram, etc.{' '}
          <span role="img" aria-label="happy face">
            😊
          </span>
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(contactES)
