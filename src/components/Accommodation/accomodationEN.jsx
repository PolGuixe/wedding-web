import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InfoSection from '../InfoSection'
import styles from './styles'

const accommodationES = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query {
        accommodationImage: file(relativePath: { eq: "accommodation/accommodation.jpg" }) {
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
        wrapperClassName={classes.accommodationSection}
        title="Where will we stay?"
        subtitle="No need to drive after the party!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.accommodationImage.childImageSharp.fluid}
            className={classes.introImg}
          /> 
        </div>
        <Typography color="inherit" variant="body2" paragraph>
          Whether you arrive on Friday or Saturday, you can stay in Ligüerre de Cinca. All its traditional houses have been transformed into charming hotels and apartments that can accommodate all our guests.
        </Typography>
        <div className={classes.paperWrapper}>
          <Paper className={classes.paper}>
            <Typography variant="body1" align="center" color="inherit">
              Accommodation is 35€ / person / night.
            </Typography>
          </Paper>
        </div>
        <Typography color="inherit" variant="body2" paragraph>
          <br></br>
          We will get back to you with more information about the check-in a few weeks before the wedding. But don’t worry, there are enough bedrooms for everyone!
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(accommodationES)
