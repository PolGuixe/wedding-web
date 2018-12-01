import React from 'react'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
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
        title="¿Os podemos ayudar?"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.giftImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" color="inherit">
          Comptar amb la teva presència el pròxim cap de setmana del 13 d'abril és el que ens fa més il·lusió.
        </Typography>
        <Typography variant="body2" color="inherit">
          Però si vols ajudar-nos en aquesta nova etapa, disposem del següent compte bancari. Moltíssimes gràcies!
        </Typography>
        <Typography variant="body2" color="inherit">
          ES09 2100 1568 6102 0039 8335
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(giftES)