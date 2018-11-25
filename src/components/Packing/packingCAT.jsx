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
        title="¿Que tengo que llevar?"
        subtitle="¿Muchas ganas de pasarlo bien!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.packingImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography variant="body2" paragraph color="inherit">
          No queremos hacer una lista detallada de qué poner en la maleta, pero
          sí daros información útil que os puede ayudar. Si aún así tenéis
          preguntas, ¡no dudéis en contactarnos!
        </Typography>

        <Typography variant="body2" paragraph color="inherit">
          La ceremonia del sábado será formal / semiformal. Para el resto del
          fin de semana, traed ropa y calzado casual y cómodos. Y lo más
          importante, ¡muchas ganas de pasarlo genial! Recordad también que
          Ligüerre de Cinca está en el Pirineo, la temperatura en abril es
          fresca - suele estar entre 5ºC y 18ºC -, y es posible que llueva en
          algún momento durante el fin de semana.
        </Typography>
        <Typography variant="body2" paragraph color="inherit">
          Para las chicas, habrá servicio de peluquería el sábado por la mañana.
          Contáctanos si estás interesada.
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(packingES)
