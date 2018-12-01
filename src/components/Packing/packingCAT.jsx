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
        title="Que ens hem d'emportar?"
        subtitle="Molt ganes de passar-ho bé!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.packingImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" paragraph color="inherit">
          No volem fer una llista detallada de què posar a la maleta, només donar-vos informació útil que pot ajudar-vos. Si tot i això teniu qüestions, no dubteu en contactar-nos!
        </Typography>
        <Typography variant="body2" paragraph color="inherit">
          La cerimònia de dissabte serà formal / semiformal. Per la resta del cap de setmana, traieu roba i calçat casual i còmodes. I el més important, moltes ganes de passar-ho bé!
          Recordeu també que Ligüerre de Cinca es troba als Pirineus, la temperatura en abril és fresca - sou estar entre 5ºC i 18ºC -, i és possible que plogui en durant el cap de setmana.
        </Typography>
        <Typography variant="body2" paragraph color="inherit">
          Per a les noies, hi haurà servei de perruqueria dissabte al matí. Contacta’ns si estàs interessada.
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(packingES)
