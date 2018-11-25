import React, { Component } from 'react'
import Layout from 'material-ui-layout'
import withStyles from '@material-ui/core/styles/withStyles'

import Agenda from '../components/Agenda/agendaEN'
import Accommodation from '../components/Accommodation/accomodationEN'
import Travel from '../components/Travel/travelEN'
import Packing from '../components/Packing/packingEN'
import Gift from '../components/Gift/giftEN'
import RSVP from '../components/RSVP/rsvpEN'
import Contact from '../components/Contact/contactEN'

const styles = theme => ({
  moreInfoPageChildren: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
})

class VamosDeFiesta extends Component {
  render() {
    const { classes } = this.props
    return (
      <Layout>
        <div className={classes.moreInfoPageChildren}>
          <Agenda />
          <Accommodation />
          <Travel />
          <Packing />
          <Gift />
          <RSVP />
          <Contact />
        </div>
      </Layout>
    )
  }
}

export default withStyles(styles)(VamosDeFiesta)
