import React, { Component } from 'react'
import { Typography, withStyles } from '@material-ui/core'
import classNames from 'classnames'
import ResponsiveWidth from './ResponsiveWidth'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    height: 'fit-content',
    width: '100%',
  },
})

class InfoSection extends Component {
  render() {
    const { title, subtitle, children, wrapperClassName, classes } = this.props
    return (
      <div className={classNames(classes.root, wrapperClassName)}>
        <ResponsiveWidth>
          <Typography color="inherit" variant="display1">
            {title}
          </Typography>
          <br />
          <Typography color="inherit" variant="title">
            {subtitle}
          </Typography>
          {children}
        </ResponsiveWidth>
      </div>
    )
  }
}

export default withStyles(styles)(InfoSection)
