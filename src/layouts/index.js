import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={ data.site.siteMetadata.title }
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header data={ data } siteTitle={ data.site.siteMetadata.title } />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      { /* literally a file from ../pages */ }
      { children() }
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp( id: { regex: "/bg.jpg/" } ) {
      sizes( maxWidth: 1080 ) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
              title
              date( formatString: "MMMM DD, YYYY" )
          }
          html
        }
      }
    }
  }
`
export default Layout
