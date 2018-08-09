import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import Searchbar from '../components/searchbar'
import _ from 'lodash'
import { VisibilityContext } from '../data/visibility-context'
import VisibilitySensor from 'react-visibility-sensor'
import './index.css'
import styled from 'styled-components'
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
    children: PropTypes.func
  }
  constructor(props) {
    super(props)
    this.state = {
      headerVisible: false,
      filtered: ''
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ filtered: '' })
    }
  }
  handleFilters(searchInput) {
    this.setState({ filtered: searchInput })
  }
  handleVisibility(isVisible) {
    this.setState({
      headerVisible: isVisible
    })
  }
  render() {
    const { data } = this.props
    const debounceHandleFilters = _.debounce(this.handleFilters, 100, {
      maxWait: 1000
    }).bind(this)
    return (
      <div value={{ headerVisible: this.state.headerVisible }}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'A blog about loving what you code.'
            },
            {
              name: 'keywords',
              content: 'development, progrmaming, coding, web development, web dev, blog, learning'
            }
          ]}>
          <link key="canonical" rel="canonical" href="https://trycodingitsfun.com" />
          <link key="icon" rel="icon" href={favicon} />
        </Helmet>
        <VisibilitySensor
          onChange={isVisible => {
            this.handleVisibility(isVisible)
          }}
          partialVisibility={true}>
          <Header data={data} visible={this.state.headerVisible} />
        </VisibilitySensor>
        <Searchbar
          handleFilters={searchInput => debounceHandleFilters(searchInput)}
          view="default"
        />
        <Wrapper>
          <VisibilityContext.Provider value={this.state.headerVisible}>
            {this.props.children({
              ...this.props,
              filtered: this.state.filtered
            })}
          </VisibilityContext.Provider>
        </Wrapper>
        <Footer />
      </div>
    )
  }
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
