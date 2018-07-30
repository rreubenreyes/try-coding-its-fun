import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/nav'
import styled from 'styled-components'
import { VisibilityContext } from '../data/visibility-context'

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  height: 100vh;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: ${props => (props.headerVisible ? 'hidden' : 'auto')};
  transition: all 0.2s;
  transition-timing-function: cubic-bezier(0.39, 0.53, 0.11, 0.96);
  @media (max-width: 960px) {
    flex-wrap: wrap;
    height: auto;
  }
`
const SidebarContainer = styled.div`
  position: sticky;
  align-self: stretch;
  top: 0;
  flex-basis: calc(25vw - 0.5px);
  flex-grow: 1;
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  opacity: ${props => (props.animate ? 1 : 0)};
  padding-top: ${props => (props.headerVisible ? 0 : '2.5rem')};
  text-align: right;
  transform: ${props => (props.animate ? 'translateX(0%)' : 'translateX(-1000%)')};
  transition: transform 0.2s, padding-top 0.2s ease;
  transition-timing-function: cubic-bezier(0.39, 0.53, 0.11, 0.96);
  @media (max-width: 960px) {
    background-color: #fff;
    height: ${props => (props.show ? 'auto' : 0)};
    flex-basis: 100vw;
    margin-bottom: ${props => (props.show ? `1.5rem` : 0)};
    opacity: 1;
    padding-bottom: ${props => (props.headerVisible ? 0 : '1rem')};
    text-align: center;
    z-index: 10;
  }
`
const MainContainer = styled.div`
  flex-basis: calc(75vw - 0.5px);
  flex-grow: 1;
  opacity: ${props => (props.animate ? 1 : 0)};
  padding-top: ${props => (props.headerVisible ? 0 : '2.5rem')};
  transform: ${props => (props.animate ? 'translateX(0%)' : 'translateX(200%)')};
  transition: transform 0.125s, padding-top 0.2s ease;
  transition-timing-function: cubic-bezier(0.39, 0.53, 0.11, 0.96);
  @media (max-width: 960px) {
    padding-top: 0;
    .nomatch--mobile-centered {
      justify-content: center;
    }
  }
`
const Divider = styled.div`
  position: sticky;
  align-self: stretch;
  top: 0;
  background-color: #979797;
  flex-basis: 1px;
  flex-grow: 0;
  font-size: 5px;
  height: 100%;
  margin: 0 2rem;
  padding-top: ${props => (props.headerVisible ? 0 : '2.5rem')};
  transition: padding-top 0.2s ease;
  @media (max-width: 960px) {
    display: none;
  }
`
export default class FlexContainer extends Component {
  static propTypes = {
    renderMain: PropTypes.func.isRequired,
    renderSidebar: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.main = null
    this.sidebar = null
    this.state = {
      animateIn: false
    }
  }
  componentDidMount() {
    this.setState({
      animateIn: true
    })
  }
  render() {
    return (
      <VisibilityContext.Consumer>
        {headerVisible => (
          <ContentWrapper headerVisible={headerVisible}>
            <SidebarContainer
              animate={this.state.animateIn}
              headerVisible={headerVisible}
              show={this.props.renderSidebar() ? true : false}>
              {this.props.renderSidebar()}
              {headerVisible ? null : <Nav headerVisible={false} />}
            </SidebarContainer>
            {this.props.renderSidebar() ? (
              <Divider headerVisible={headerVisible}>{'.'}</Divider>
            ) : (
              ''
            )}
            <MainContainer animate={this.state.animateIn} headerVisible={headerVisible}>
              {this.props.renderMain()}
            </MainContainer>
          </ContentWrapper>
        )}
      </VisibilityContext.Consumer>
    )
  }
}
