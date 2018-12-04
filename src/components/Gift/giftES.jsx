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
        title="¿Os podemos ayudar?"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.giftImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" color="inherit">
          Contar con vuestra presencia el próximo fin de semana del 13 de abril
          es lo que más ilusión nos hace.
        </Typography>
        <Typography variant="body2" color="inherit">
          Pero si nos quieres ayudar en esta nueva etapa, disponemos de la
          siguiente cuenta bancaria. ¡Muchísimas gracias!
        </Typography>
        <div className={classes.paperWrapper}>
          <Paper className={classes.paper}>
            <Typography variant="body2">
              ES09 2100 1568 6102 0039 8335
            </Typography>
          </Paper>
        </div>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(giftES)
