import React, { Component } from 'react'
import Layout from 'material-ui-layout'
import withStyles from '@material-ui/core/styles/withStyles'

import Agenda from '../components/Agenda/agendaES'
import Accommodation from '../components/Accommodation/accomodationES'
import Travel from '../components/Travel/travelES'
import Packing from '../components/Packing/packingES'
import Gift from '../components/Gift/giftES'
import RSVP from '../components/RSVP/rsvpES'
import Contact from '../components/Contact/contactES'

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
