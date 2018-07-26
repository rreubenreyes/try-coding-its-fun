import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Searchbar from '../components/searchbar'
import _ from 'lodash'
import VisibilitySensor from 'react-visibility-sensor'
import './index.css'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applyFixedPosition: false,
      filtered: null
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ filtered: null })
    }
  }
  handleFilters(searchInput) {
    this.setState({ filtered: searchInput })
    console.log(searchInput)
  }
  handleVisibility(isVisible) {
    this.setState({
      applyFixedPosition: isVisible
    })
    console.log(isVisible)
  }
  render() {
    const { data } = this.props
    const debounceHandleFilters = _.debounce(this.handleFilters, 100, {
      maxWait: 1000
    }).bind(this)
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <VisibilitySensor
          onChange={isVisible => {
            this.handleVisibility(isVisible)
          }}
          partialVisibility={true}>
          <Header data={data} />
        </VisibilitySensor>
        <Searchbar
          handleFilters={searchInput => debounceHandleFilters(searchInput)}
          view="default"
        />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1200,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}>
          {this.props.children({
            ...this.props,
            filtered: this.state.filtered
          })}
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
