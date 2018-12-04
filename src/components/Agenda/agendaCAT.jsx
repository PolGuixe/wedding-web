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
        title="Quan hem d’arribar?"
        subtitle="Un cap de setmana tots junts!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.liguerreImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography color="inherit" variant="body2" paragraph>
          Ligüerre de Cinca és un lloc privilegiat al costat de l’embassament de El Grado, rodejat de natura, muntanyes i vinyes, i pot acollir-nos a tots. Vam triar celebrar la nostra boda a Ligüerre perquè ens permet passar el cap de setmana amb la nostra família i amics.
        </Typography>
        <Typography color="inherit" variant="body2" paragraph>
          La cerimònia serà el dissabte, però podeu venir a Ligüerre quan vulgueu (com més aviat millor!). <br />
        </Typography>
        <Typography color="inherit" variant="body2" paragraph>
          A baix véreu el detall d’ho que hem organitzat per vosaltres.
        </Typography>
        <Typography color="inherit" variant="headline">
          I quin és el pla del cap de setmana?
        </Typography>
        <div className={classes.daySection}>
          <Typography color="inherit" variant="title">
            Divendres
          </Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Registre / Check-In</Typography>
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
                    Tots els convidats s’hauran de registrar online unes setmanes abans del Gran Dia. Quan arribeu a Ligüerre de Cinca, només haureu de recollir les vostres claus, i gaudir!
                  </Typography>
                  <Typography paragraph>
                    No et preocupis, us donarem més informació quan sigui el moment.
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                Barbacoa i festa de benvinguda
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
                    Hem organitzat una barbacoa per donar la benvinguda als convidats, posar-nos al dia, i començar la festa. La barbacoa tindrà lloc al costat del local social, i començarà divendres a les
                    <strong> 19:30</strong> .
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={classes.daySection}>
          <Typography color="inherit" variant="title">
            Dissabte
          </Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Cerimònia</Typography>
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
                    La cerimònia civil tindrà lloc el dissabte a les 13:00 en la Plaça Sebastiá (si el temps ho permet!), que té unes vistes impressionants a l’embassament de El Grado.
                  </Typography>
                  <Typography paragraph>
                    En acabar, farem algunes fotos abans de començar la recepció.
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Recepció</Typography>
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
                    Primer, prendrem l’aperitiu en la Plaça del Mirador de l’Entremón. Tot seguit, anirem a la carpa per a gaudir del dinar, el pastís, el vi de la D.O. Somontano, i ballar tota la nit!
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={classes.daySection}>
          <Typography color="inherit" variant="title">
            Diumenge
          </Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Esmorzar</Typography>
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
                    Diumenge (i també dissabte per qui arribi divendres), se servirà esmorzar continental a la Plaça Mirador de l’Entremón de 9:00 a 11:30. Si plou, se servirà dins del restaurant.
                  </Typography>
                  <Typography paragraph>
                    Aquest serà un moment perfecte per agafar forces, compartir històries i dir adéu abans de marxar de tornada a casa.
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
