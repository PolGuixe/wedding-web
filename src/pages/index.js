import React from 'react'
import Link from 'gatsby-link'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  picture:{
    backgroundColor: 'white',
  },
  text: {
    backgroundColor: 'black',
    color: 'white',
  }
});

const IndexPage = ({classes}) => (
  <Grid container>
    <Grid item xs={6} className={classes.picture}>
      <Typography>Laura + Pol</Typography>

    </Grid>
    <Grid xs={6} className={classes.text}>Text</Grid>
  </Grid>
)

export default withStyles(styles)(IndexPage)
