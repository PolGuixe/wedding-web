import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  childrenWrapper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '95%',
    },
    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '1200px',
    },
  },
})

// Add a responsive padding
//
class ResponsiveWidth extends Component {
  render() {
    const { classes, children } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.childrenWrapper}>{children} </div>
      </div>
    )
  }
}

export default withStyles(styles)(ResponsiveWidth)
