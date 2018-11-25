import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import withStyles from '@material-ui/core/styles/withStyles'
import { StaticQuery, graphql } from 'gatsby'

import InfoSection from '../InfoSection'
import styles from './styles'

const travelES = ({ classes }) => (
  <StaticQuery
    query={graphql`
      query {
        liguerreImage: file(relativePath: { eq: "agenda/liguerre.jpg" }) {
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
        wrapperClassName={classes.travelSection}
        title="¿Como llegamos a Ligüerre?"
        subtitle="No hay autopistas ni aeropuertos cerca. ¡Eso es lo xulo!"
      >
        <div className={classes.mapWrapper}>
          <Paper elevation={4} square>
            <div className={classes.map}>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11807.508750724744!2d0.1967616!3d42.2811449!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c248def99dbf3c1!2sLig%C3%BCerre+Resort!5e0!3m2!1sen!2ses!4v1543145346934"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
              />
            </div>
          </Paper>
        </div>
        <div className={classes.daySection}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Coche</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.expansionDetailsText}>
                <Typography paragraph>
                  Si vienes de Aragón, Cataluña o incluso Madrid, la forma más
                  fácil de llegar es en coche.
                </Typography>
                <Typography paragraph>
                  Sigue la A22 hasta Barbastro, y luego continúa hacia el norte,
                  dirección Bielsa / FRANCIA.
                </Typography>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Avión</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.expansionDetailsText}>
                <Typography paragraph>
                  Si vienes de fuera de la península, la forma más fácil de
                  llegar es volar hasta Barcelona. A veces, también hay vuelos a
                  los aeropuertos de Zaragoza y Lérida desde Londres, París y
                  Mallorca.
                </Typography>
                <Typography paragraph>
                  En el aeropuerto puedes alquilar un coche, o contáctanos si
                  quieres compartir coche con otros invitados.
                </Typography>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Tren</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.expansionDetailsText}>
                <Typography paragraph>
                  Si vienes desde Madrid u otra ciudad conectada con AVE / tren,
                  puedes ir en tren hasta Zaragoza, Lérida o Huesca.
                </Typography>
                <Typography paragraph>
                  Ahí puedes alquilar un coche o contáctanos si quieres
                  compartir coche con otros invitados.
                </Typography>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(travelES)
