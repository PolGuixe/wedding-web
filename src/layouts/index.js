import React from 'react'
import Helmet from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import { StaticQuery, graphql } from 'gatsby'

import theme from '../config/theme'

const LayoutComponent = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <CssBaseline />
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </div>
    )}
  />
)

export default LayoutComponent
