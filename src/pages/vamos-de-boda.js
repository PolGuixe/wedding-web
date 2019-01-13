import React, { Component } from 'react'
import Layout from 'material-ui-layout'
import withStyles from '@material-ui/core/styles/withStyles'

import Agenda from '../components/Agenda/agendaES'
import Accommodation from '../components/Accommodation/accomodationES'
import Travel from '../components/Travel/travelES'
import Packing from '../components/Packing/packingES'
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
          <RSVP />
          <Agenda />
          <Accommodation noPrice/>
          <Travel />
          <Packing />
          <Contact  dark/>
        </div>
      </Layout>
    )
  }
}

export default withStyles(styles)(VamosDeFiesta)
