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
        title="On dormirem?"
        subtitle="No fa falta agafar el cotxe!"
      >
        <div className={classes.introImgWrapper}>
          <Img
            fluid={data.accommodationImage.childImageSharp.fluid}
            className={classes.introImg}
          />
        </div>
        <Typography color="inherit" variant="body2" paragraph>
          Tant si arribes divendres com si arribes dissabte, et pots quedar a dormir a Ligüerre de Cinca. Totes les cases antigues del poble han estat transformades en hotels i apartaments amb molt encant, i poden allotjar a tots els nostres convidats. 
        </Typography>
        <div className={classes.paperWrapper}>
          <Paper className={classes.paper}>
            <Typography variant="body1" align="center" color="inherit">
            El preu del allotjament és 35€ / persona / nit.
            </Typography>
          </Paper>
        </div>
        <Typography color="inherit" variant="body2" paragraph>
        <br></br>
          Unes poques setmanes abans de la boda ens posarem en contacte amb vosaltres per a donar-vos més informació sobre com registrar-se als hotels / apartaments. Però no et preocupis, hi ha joc per tot!
        </Typography>
      </InfoSection>
    )}
  />
)

export default withStyles(styles)(accommodationES)
