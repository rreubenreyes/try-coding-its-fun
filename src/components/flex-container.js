import React, { Component } from 'react'
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
  flex-basis: ${props => (props.flex ? 'calc(25vw - 0.5px)' : 0)};
  flex-grow: ${props => (props.flex ? 1 : 0)};
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
    height: 1rem;
    flex-basis: 100vw;
    margin-bottom: 1.5rem;
    opacity: 1;
    padding-bottom: ${props => (props.headerVisible ? 0 : '1rem')};
    text-align: center;
    z-index: 10;
  }
`
const MainContainer = styled.div`
  flex-basis: ${props => (props.flex ? 'calc(75vw - 0.5px)' : '0')};
  flex-grow: 1;
  opacity: ${props => (props.animate ? 1 : 0)};
  padding-top: ${props => (props.headerVisible ? 0 : '2.5rem')};
  text-align: ${props => (props.flex ? 'default' : 'center')};
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
  align-self: flex-start;
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
  constructor(props) {
    super(props)
    this.main = null
    this.sidebar = null
    this.state = {
      animateIn: false,
      applyFlexBasis: true
    }
  }
  componentWillMount() {
    this.setState({
      applyFlexBasis: this.props.renderSidebar() ? true : false
    })
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
              flex={this.state.applyFlexBasis}
              headerVisible={headerVisible}>
              {this.props.renderSidebar() || ''}
            </SidebarContainer>
            {this.props.renderSidebar() ? (
              <Divider headerVisible={headerVisible}>{'.'}</Divider>
            ) : (
              ''
            )}
            <MainContainer
              animate={this.state.animateIn}
              flex={this.state.applyFlexBasis}
              headerVisible={headerVisible}>
              {this.props.renderMain()}
            </MainContainer>
          </ContentWrapper>
        )}
      </VisibilityContext.Consumer>
    )
  }
}
