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
        title="How do we get to Ligüerre?"
        subtitle="There are no highways or airports nearby. That's what's fun about it!"
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
                <span role="img" aria-label="car">
                  🚘
                </span>
                Car
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.expansionDetailsText}>
                <Typography paragraph>
                  If you are coming from Aragon, Catalunya or even Madrid, the
                  easiest way to get there is by car.
                </Typography>
                <Typography paragraph>
                  Follow A22 up to Barbastro, and then continue north, direction
                  Bielsa / FRANCIA.
                </Typography>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                <span role="img" aria-label="plane">
                  ✈️
                </span>
                Plane
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.expansionDetailsText}>
                <Typography paragraph>
                  If you are coming from abroad, the easiest way to get there is
                  to fly to Barcelona - El Prat airport. Sometimes, there are
                  flights to Zaragoza airport or Lleida airport from London,
                  Paris and Majorca.
                </Typography>
                <Typography paragraph>
                  There you can rent a car or contact us for car sharing options
                  with other guests.
                </Typography>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                <span role="img" aria-label="train">
                  🚆
                </span>
                Train
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.expansionDetailsText}>
                <Typography paragraph>
                  If you are coming from Madrid or other Spanish cities
                  connected by train / AVE, you can take the train up to
                  Zaragoza, Lleida or Huesca.
                </Typography>
                <Typography paragraph>
                  There you can rent a car or contact us for car sharing options
                  with other guests.
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
