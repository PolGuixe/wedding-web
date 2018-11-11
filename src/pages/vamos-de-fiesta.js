import React, { Component } from 'react'
import Layout from 'material-ui-layout'
import withStyles from '@material-ui/core/styles/withStyles'

import Agenda from '../components/Agenda/agendaES'

const styles = theme => ({

})

class VamosDeFiesta extends Component {
  render() {
    return (
      <Layout>
        <Agenda/>
      </Layout>
    )
  }
}

export default withStyles(styles)(VamosDeFiesta)
