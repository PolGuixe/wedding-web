import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InfoSection from '../InfoSection'
import styles from './styles'

const packingES = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query {
        packingImage: file(relativePath: { eq: "packing/packing.jpg" }) {
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
        wrapperClassName={classes.packingSection}
        title="What do I need to pack?"
        subtitle="Just be ready to have fun!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.packingImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" paragraph color="inherit">
          We don’t want to make a detailed list of everything you need to pack, but we want to give you information that will help. If after reading this you still have questions, please, contact us!
        </Typography>
        <Typography variant="body2" paragraph color="inherit">
          Saturday ceremony will be formal / semiformal. For the rest of the weekend, pack casual and comfy clothes and shoes. And most importantly, be ready to have fun when you arrive!
          Remember that Ligüerre de Cinca is in the Pyrenees, and temperature in April is cool - it’s usually between 5ºC and 18ºC - and it may rain at some point during the weekend.
        </Typography>
        <Typography variant="body2" paragraph color="inherit">
          For ladies, we will organise hairdresser’s service on Saturday morning. Let us know if you are interested.
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(packingES)
