import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from 'material-ui-layout'

import './index.css'

const LayoutComponent = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Layout>{children()}</Layout>
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
