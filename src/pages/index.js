import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Img from 'gatsby-image'
import Countdown from 'react-countdown-now'

import Logo from '../components/LP-logo'
import ExtraInfoDialog from '../components/ExtraInfoDialog'

const moreInfo = [
  {
    buttonText: 'Más información',
    title: 'Prepárate...',
    content: [
      'Pol quería una boda sencilla..., así que Laura decidió que organizaríamos un fiestón 🎉 en bonito pueblo en el Pirineo para todos vosotros ⛰️ ',
      'Si no te quieres perder nada, te esperamos el viernes 12 a última hora de la tarde 🍔🍷',
      'La ceremonia será el sábado 13 al mediodía 👰🏻🤵🏻',
      'Después de bailar toda la noche, el domingo 14 repondremos fuerzas durante el “brunch” 🍳🥐 antes de volver a casa ',
      'En las próximas semanas daremos más detalles sobre la agenda y la logística. Si necesitas reservar desplazamientos urgentemente, ¡no dudes en contactarnos!✈️',
    ],
    actionText: '¡Mola!',
  },
  {
    buttonText: 'Més informació',
    title: 'Prepareu-vos...',
    content: [
      'En Pol volia una boda senzilla..., per tant la Laura va decidir que prepararíem una bona festa 🎉 en un bonic poble en el Pirineu per a tots vosaltres⛰️ ',
      'Si no et vols perdre res, t’esperem divendres 12 al vespre 🍔🍷',
      'La cerimònia serà dissabte 13 al migdia 👰🏻🤵🏻',
      'Després de ballar tota la nit, el diumenge 14 agafarem forces durant el “brunch” 🍳🥐 avans de tornar a casa',
      'Durant les setmanes vinents us donarem més informació de l’agenda i la logística. Si has de reservar el viatge urgentment, no dubtis en contactar-nos! ✈️',
    ],
    actionText: 'Guai!',
  },
  {
    buttonText: 'More information',
    title: 'Get ready...',
    content: [
      'Pol wanted a simple wedding..., so Laura decided to organize a big party 🎉 in a beautiful village in the Pyrenees for you all ⛰️ ',
      'If you don’t want to miss anything, we hope to see you there Friday 12th in the evening  🍔🍷',
      'The ceremony will take place on Saturday 13th at midday 👰🏻🤵🏻',
      'After dancing all night, Sunday 14th in the morning we’ll enjoy brunch 🍳🥐 before heading back home',
      'In the coming weeks we’ll share more details about the agenda and the logistics. If you need to make your travel arrangements urgently, don’t hesitate to contact us! ✈️',
    ],
    actionText: 'Cool!',
  },
]

const styles = theme => ({
  container: {
    height: '100vh',
  },
  picture: {
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  section: {
    height: '100%',
    padding: theme.spacing.unit * 5,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageOuterWrapper: {
    padding: `${theme.spacing.unit * 2}px 0px`,
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '85%',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
    },
  },
  imageWrapper: {
    maxHeight: '75vh',
  },
  svgLogo: {
    fill: theme.palette.primary.contrastText,
    stroke: theme.palette.primary.contrastText,
    width: '150px',
    marginBottom: theme.spacing.unit * 4,
  },
  divider: {
    width: '10%',
    height: '1px',
    backgroundColor: theme.palette.primary.contrastText,
    margin: `${theme.spacing.unit}px 0px`,
  },
  spacer: {
    height: theme.spacing.unit * 6,
  },
  button: {
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
    borderWidth: '3px',
    fontSize: '18px',
  },
})

const IndexPage = ({ classes, data }) => (
  <Grid container className={classes.container}>
    <Grid item xs={12} sm={6} className={classes.picture}>
      <div className={classes.section}>
        <Typography variant="display2" color="primary">
          Laura + Pol
        </Typography>
        <Img
          outerWrapperClassName={classes.imageOuterWrapper}
          className={classes.imageWrapper}
          // imgStyle={{ width: 'auto', height: '100%' }}
          sizes={data.landingImage.sizes}
        />
        <Typography variant="body2">
          - Save the date, we're launching 🚀 a new adventure -
        </Typography>
        <Typography variant="headline">
          <Countdown date={new Date(2019, 3, 13, 11)}>
            We are married!
          </Countdown>
        </Typography>
      </div>
    </Grid>
    <Grid item xs={12} sm={6} className={classes.text}>
      <div className={classes.section}>
        <Logo className={classes.svgLogo} />
        <Typography variant="subheading" color="inherit">
          ¿Cuándo? Quan? When?
        </Typography>
        <div className={classes.divider} />
        <Typography variant="title" color="inherit">
          12-13-14 / 04 / 2019
        </Typography>
        <div className={classes.spacer} />
        <Typography variant="subheading" color="inherit">
          ¿Dónde? On? Where?
        </Typography>
        <div className={classes.divider} />
        <Button color="inherit" href="https://goo.gl/maps/eVCUn6dH9X62">
          <Typography variant="title" color="inherit">
            Ligüerre Resort
          </Typography>
        </Button>
        <Typography variant="title" color="inherit">
          Huesca - Spain
        </Typography>
        <div className={classes.spacer} />
        {moreInfo.map(info => <ExtraInfoDialog key={info.title} {...info} />)}
        <div className={classes.spacer} />
        <Button variant="outlined" color="inherit" className={classes.button}>
          ¡Voy! Vaig! Coming!
        </Button>
        <div className={classes.spacer} />
        <Typography variant="display1" color="inherit">
          #laura❤️pol
        </Typography>
      </div>
    </Grid>
  </Grid>
)

export default withStyles(styles)(IndexPage)

export const query = graphql`
  query LandingPageQuery {
    landingImage: imageSharp(id: { regex: "/LP-landing-photo/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`
