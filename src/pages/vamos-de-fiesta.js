import React, { Component } from 'react'
import Layout from 'material-ui-layout'
import withStyles from '@material-ui/core/styles/withStyles'

import Agenda from '../components/Agenda/agendaES'
import Accommodation from '../components/Accommodation/accomodationES'

const styles = theme => ({
  moreInfoPageChildren:{
    display:'flex',
    flexDirection:'column',
  }
})

class VamosDeFiesta extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Layout>
        <div className={classes.moreInfoPageChildren}>
        <Agenda/>
        <Accommodation />
        </div>
      </Layout>
    )
  }
}

export default withStyles(styles)(VamosDeFiesta)
