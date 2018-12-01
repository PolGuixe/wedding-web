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
        title="Com arribem a Ligüerre?"
        subtitle="No hi ha autopistes ni aeroports aprop. Aixó és lo xulo!"
      >
        <Paper elevation={4} square className={classes.mapWrapper}>
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
        <div className={classes.daySection}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                <span role="img" aria-label="cotxe">
                  🚘
                </span>
                Coche
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.expansionDetailsText}>
                <Typography paragraph>
                  Si vens d’Aragó, Catalunya o Madrid, la forma més fàcil
                  d’arribar-hi és en cotxe.
                </Typography>
                <Typography paragraph>
                  Pren l’A22 fins a Barbastre, i després segueix cap al nord,
                  direcció Bielsa / FRANÇA.
                </Typography>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                <span role="img" aria-label="`avió">
                  ✈️
                </span>
                Avió
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.expansionDetailsText}>
                <Typography paragraph>
                  Si vens de fora de la península, la forma més fàcil
                  d’arribar-hi és volar fins a Barcelona. A vegades, també hi ha
                  vols fins a Saragossa o Lleida des de Londres, París o
                  Mallorca.
                </Typography>
                <Typography paragraph>
                  A l’aeroport pots llogar un cotxe, o contacta’ns si
                  prefereixes compartir cotxe amb altres convidats.
                </Typography>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                <span role="img" aria-label="tren">
                  🚆
                </span>
                Tren
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.expansionDetailsText}>
                <Typography paragraph>
                  Si vens des de Madrid o una altra ciutat connectada amb l’AVE
                  / tren, pots anar amb tren fins a Saragossa, Lleida o Osca.
                </Typography>
                <Typography paragraph>
                  Allà pots llogar un cotxe, o contacta’ns si prefereixes
                  compartir cotxe amb altres convidats.
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
