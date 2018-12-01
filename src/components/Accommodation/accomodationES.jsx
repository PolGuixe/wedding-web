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
        title="¿Dónde dormiremos?"
        subtitle="¡No hace tocar el coche!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.accommodationImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography color="inherit" variant="body2" paragraph>
          Tanto si llegas el viernes como si llegas el sábado, puedes quedarte a
          dormir en Ligüerre de Cinca. Todas las casas antiguas del pueblo se
          han transformado en hoteles y apartamentos con mucho encanto, y pueden
          alojar a todos nuestros invitados.
        </Typography>
        <div className={classes.paperWrapper}>
          <Paper className={classes.paper}>
            <Typography variant="body1" align="center" color="inherit">
              El precio del alojamiento es 35€ / persona / noche.
            </Typography>
          </Paper>
        </div>
        <Typography color="inherit" variant="body2" paragraph>
          <br></br>
          Unas pocas semanas antes de la boda nos pondremos en contacto con
          vosotros para daros más información sobre cómo registrarse en los
          hoteles / apartamentos.
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(accommodationES)
