import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InfoSection from '../InfoSection'
import styles from './styles'

const giftES = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query {
        giftImage: file(relativePath: { eq: "gift/gift2.jpg" }) {
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
        wrapperClassName={classes.giftSection}
        title="Can we chip in?"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.giftImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" color="inherit">
          You are probably thinking a present you’ll need to bring. Just your
          presence will mean everything!
        </Typography>
        <Typography variant="body2" color="inherit">
          But if you want, there is a little something to which we aspire. With
          special travel plans to follow our day, a small gift of currency would
          help us on our way. No need to overboard or rob a bank, whatever your
          gift will be received with thanks.
        </Typography>
        <div className={classes.paperWrapper}>
          <Paper className={classes.paper}>
            <Typography variant="body1">
              ES09 2100 1568 6102 0039 8335
            </Typography>
          </Paper>
        </div>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(giftES)
