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
        subtitle="Dame argoooooooooo!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.giftImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" color="inherit">
          Contar con tu presencia el próximo fin de semana del 13 de abril es lo
          que más ilusión nos hace. Pero si nos quieres ayudar en esta nueva
          etapa, disponemos de la siguiente cuenta bancaria. ¡Muchísimas
          gracias!
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(giftES)
