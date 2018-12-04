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
        title="¿Cuándo tenemos que llegar?"
        subtitle="¡Un fin de semana juntos!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.liguerreImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography color="inherit" variant="body2" paragraph>
          Ligüerre de Cinca es un sitio privilegiado. Es un pequeño pueblo junto
          al embalse de El Grado, rodeado de naturaleza, montañas y viñedos, y
          que puede acogernos a todos. Elegimos celebrar nuestra boda en Ligüerre porque nos permite pasar el
          fin de semana entero con nuestra familia y amigos.
        </Typography>
        <Typography color="inherit" variant="body2" paragraph>
          La ceremonia tendrá lugar el sábado, pero podéis elegir cuándo venir a
          Ligüerre (cuanto antes, ¡mejor!).
        </Typography>
        <Typography color="inherit" variant="body2" paragraph>
          Abajo veréis el detalle de lo que hemos organizado para vosotros.
        </Typography>
        <Typography color="inherit" variant="headline">
          ¿Y cuál es el plan del fin de semana?
        </Typography>
        <div className={classes.daySection}>
          <Typography color="inherit" variant="title">
            Viernes
          </Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Registro / Check-In</Typography>
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
                    Todos los invitados deberán registrarse online unas semanas
                    antes del Gran Día. Cuando lleguéis a Ligüerre de Cinca,
                    sólo tendréis que recoger vuestras llaves ¡y a disfrutar!
                  </Typography>
                  <Typography paragraph>
                    No te preocupes, os daremos más información cuando llegue el
                    momento.
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">
                Barbacoa y fiesta de bienvenida
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
                    Hemos planeado una barbacoa para dar la bienvenida a
                    nuestros invitados, ponernos al día, y dar comienzo a la
                    fiesta. La barbacoa tendrá lugar junto al local social y
                    empezará a las
                    <strong> 19:30</strong> el viernes.
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={classes.daySection}>
          <Typography color="inherit" variant="title">
            Sábado
          </Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Ceremonia</Typography>
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
                    La ceremonia civil tendrá lugar el sábado a las 13:00 en la
                    Plaza Sebastián (¡si el tiempo nos deja!), que tiene unas
                    vistas asombrosas al embalse de El Grado.
                  </Typography>
                  <Typography paragraph>
                    Al terminar, tomaremos algunas fotos antes de pasar a la
                    recepción.
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Recepción</Typography>
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
                    Primero, tomaremos unos aperitivos en la Plaza del Mirador
                    del Entremón. A continuación, iremos a la carpa para
                    disfrutar de la comida, tarta, vino de la D.O. Somontano, ¡y
                    bailar toda la noche!
                  </Typography>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={classes.daySection}>
          <Typography color="inherit" variant="title">
            Domingo
          </Typography>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subheading">Desayuno</Typography>
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
                    El domingo (y también el sábado para quienes lleguen el
                    viernes), se servirá desayuno continental en la Plaza
                    Mirador del Entremón de 9:00 a 11:30. Si llueve, se servirá
                    en el interior del restaurante.
                  </Typography>
                  <Typography paragraph>
                    Será un momento perfecto para recuperar energía, compartir
                    historias y decir adiós antes de marcharnos de vuelta a
                    casa.
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
