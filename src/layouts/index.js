import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Searchbar from '../components/searchbar'
import _ from 'lodash'
import './index.css'
import { createContext } from 'vm'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: null
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ filtered: null })
    }
  }
  filterCurrentData(searchInput) {
    this.setState({ filtered: searchInput })
    console.log(searchInput)
  }
  render() {
    const { data } = this.props
    const debounceFilterCurrentData = _.debounce(this.filterCurrentData, 100, {
      maxWait: 1000
    }).bind(this)
    // const SearchContext = createContext({ filtered: this.state.searchInput })
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header data={data} />
        <Searchbar
          filterCurrentData={searchInput => debounceFilterCurrentData(searchInput)}
          view="default"
        />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1200,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
