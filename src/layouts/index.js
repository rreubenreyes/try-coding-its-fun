import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import _ from 'lodash'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'
import Header from '../components/header'
import Footer from '../components/footer'
import Searchbar from '../components/searchbar'
import VisibilityContext from '../data/visibility-context'
import './index.css'

import favicon from '../static/images/favicon.png'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 1.0875rem 1.45rem;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      headerVisible: false,
      filtered: ``,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.handleUpdate()
    }
  }

  handleUpdate() {
    this.setState({ filtered: `` })
  }

  handleFilters(searchInput) {
    this.setState({ filtered: searchInput })
  }

  handleVisibility(isVisible) {
    this.setState({
      headerVisible: isVisible,
    })
  }

  render() {
    const { data } = this.props
    const debounceHandleFilters = _.debounce(this.handleFilters, 100, {
      maxWait: 1000,
    }).bind(this)
    return (
      <div value={{ headerVisible: this.state.headerVisible }}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: `description`,
              content: `A blog about loving what you code.`,
            },
            {
              name: `keywords`,
              content: `development, progrmaming, coding, web development, web dev, blog, learning`,
            },
          ]}
        >
          <link key="canonical" rel="canonical" href="https://trycodingitsfun.com" />
          <link key="icon" rel="icon" href={favicon} />
        </Helmet>
        <VisibilitySensor
          onChange={(isVisible) => {
            this.handleVisibility(isVisible)
          }}
          partialVisibility
        >
          <Header data={data} visible={this.state.headerVisible} />
        </VisibilitySensor>
        <Searchbar handleFilters={searchInput => debounceHandleFilters(searchInput)} />
        <Wrapper>
          <VisibilityContext.Provider value={this.state.headerVisible}>
            {this.props.children({
              ...this.props,
              filtered: this.state.filtered,
            })}
          </VisibilityContext.Provider>
        </Wrapper>
        <Footer />
      </div>
    )
  }
}

/* eslint-disable no-undef */
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
