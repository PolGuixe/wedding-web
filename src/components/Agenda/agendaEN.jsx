import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import withStyles from '@material-ui/core/styles/withStyles'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InfoSection from '../InfoSection'
import styles from './styles'

const agendaES = ({ classes }) => (
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
        checkIn: file(relativePath: { eq: "agenda/keys.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        bbq: file(relativePath: { eq: "agenda/bbq.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        cerimony: file(relativePath: { eq: "agenda/cerimony.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        reception: file(relativePath: { eq: "agenda/reception.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        breakfast: file(relativePath: { eq: "agenda/breakfast.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <InfoSection
        wrapperClassName={classes.agendaSection}
        title="When do we have to get there?"
        subtitle="A full weekend all together!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.liguerreImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography color="inherit" variant="body2" paragraph>
          Ligüerre de Cinca is a privileged place. It is a small village by El Grado reservoir, surrounded by nature, mountains and vineyards, which can host all of us. We chose to celebrate our wedding in Ligüerre because it allowed us to spend a whole weekend with our family and friends.
        </Typography>
        <Typography color="inherit" variant="body2" paragraph>
          The wedding ceremony will take place on Saturday, and you are free to choose when you want to come to Ligüerre (the sooner, the better!).
        </Typography>
        <Typography color="inherit" variant="body2" paragraph>
          Below you will see the detail of what we have organized for you.
        </Typography>
        <Typography color="inherit" variant="headline">
          And what’s the plan for the weekend?
        </Typography>
        <div className={classes.daySection}>
          <Typography color="inherit" variant="title">
            Friday
          </Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Check-In</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                  <Img fluid={data.checkIn.childImageSharp.fluid} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className={classes.expansionDetailsText}
                >
                  <Typography paragraph>
                    All guests will register online a few weeks before the Big Day. When you arrive at Ligüerre de Cinca you will just need to pick up your keys and enjoy!
                  </Typography>
                  <Typography paragraph>
                    Don't worry, we will give you detailed information in due date.
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                BBQ & Warm-Up Party
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionDetails}>
              <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                  <Img fluid={data.bbq.childImageSharp.fluid} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className={classes.expansionDetailsText}
                >
                  <Typography paragraph>
                  We have planned a BBQ to welcome our guests, catch up with one another, and get the party started. The BBQ will take place next to the social club. It will start at
                    <strong> 19:30</strong> on Friday.
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={classes.daySection}>
          <Typography color="inherit" variant="title">
            Saturday
          </Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Wedding Ceremony</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionDetails}>
              <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                  <Img fluid={data.cerimony.childImageSharp.fluid} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className={classes.expansionDetailsText}
                >
                  <Typography paragraph>
                    The civil ceremony will take place at 13:00 on Saturday in Sebastián square (time permitting!), which has amazing views at El Grado reservoir.
                  </Typography>
                  <Typography paragraph>
                    We will then take some photos and then will move on to the reception.
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Wedding Reception</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionDetails}>
              <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                  <Img fluid={data.reception.childImageSharp.fluid} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className={classes.expansionDetailsText}
                >
                  <Typography paragraph>
                    First, we will have some appetizers in Entremón Outlook square. After that, we will move into the tent to enjoy the Wedding Lunch, cake, D.O. Somontano wine, and then party all night long!!
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={classes.daySection}>
          <Typography color="inherit" variant="title">
            Sunday
          </Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Breakfast</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionDetails}>
              <Grid container>
                <Grid item xs={12} sm={6} md={4}>
                  <Img fluid={data.breakfast.childImageSharp.fluid} />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={8}
                  className={classes.expansionDetailsText}
                >
                  <Typography paragraph>
                    Continental breakfast will be served in Entremón Lookout square (plaza Mirador del Entremón) from 9:00 to 11:30 on Sunday, and also on Saturday for people who arrive on Friday. If it is rainy, breakfast will be served at the restaurant.
                  </Typography>
                  <Typography paragraph>
                    It will be the perfect time to get energy for the long day ahead, share stories and say goodbye before they head for home.
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(agendaES)
