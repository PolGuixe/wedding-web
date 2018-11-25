import React, { Component } from 'react'
import Layout from 'material-ui-layout'
import withStyles from '@material-ui/core/styles/withStyles'

import Agenda from '../components/Agenda/agendaCAT'
import Accommodation from '../components/Accommodation/accomodationCAT'
import Travel from '../components/Travel/travelCAT'
import Packing from '../components/Packing/packingCAT'
import Gift from '../components/Gift/giftCAT'
import RSVP from '../components/RSVP/rsvpCAT'
import Contact from '../components/Contact/contactCAT'

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
