import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'material-ui-layout'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import theme from '../config/theme'

const LayoutComponent = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href:
            'https://fonts.googleapis.com/css?family=Anton|Bangers|Montserrat',
          rel: 'stylesheet',
        },
      ]}
    />
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <Layout>{children()}</Layout>
    </MuiThemeProvider>
  </div>
)

LayoutComponent.propTypes = {
  children: PropTypes.func,
}

export default LayoutComponent

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
