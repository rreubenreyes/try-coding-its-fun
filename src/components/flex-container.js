import React, { Component } from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: no-wrap;
  justify-content: center;
  overflow-x: hidden;
  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
const SidebarContainer = styled.div`
  flex-basis: ${props => (props.flex ? 'calc(25vw - 0.5px)' : 0)};
  flex-grow: ${props => (props.flex ? 1 : 0)};
  font-family: 'Quicksand', sans-serif;
  font-size: 1rem;
  opacity: ${props => (props.animate ? 1 : 0)};
  text-align: right;
  transform: ${props => (props.animate ? 'translateX(0%)' : 'translateX(-1000%)')};
  transition: 0.2s;
  transition-timing-function: cubic-bezier(0.39, 0.53, 0.11, 0.96);
  @media (max-width: 960px) {
    flex-basis: 100vw;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`
const MainContainer = styled.div`
  position: relative;
  flex-basis: ${props => (props.flex ? 'calc(75vw - 0.5px)' : '0')};
  flex-grow: 1;
  opacity: ${props => (props.animate ? 1 : 0)};
  text-align: ${props => (props.flex ? 'default' : 'center')};
  transform: ${props => (props.animate ? 'translateX(0%)' : 'translateX(200%)')};
  transition: transform 0.125s;
  transition-timing-function: cubic-bezier(0.39, 0.53, 0.11, 0.96);
`
const Divider = styled.div`
  background-color: #979797;
  flex-basis: 1px;
  flex-grow: 0;
  font-size: 5px;
  height: auto;
  margin: 0 2rem;
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
      <ContentWrapper>
        <SidebarContainer animate={this.state.animateIn} flex={this.state.applyFlexBasis}>
          {this.props.renderSidebar() || ''}
        </SidebarContainer>
        {this.props.renderSidebar() ? <Divider>{'.'}</Divider> : ''}
        <MainContainer animate={this.state.animateIn} flex={this.state.applyFlexBasis}>
          {this.props.renderMain()}
        </MainContainer>
      </ContentWrapper>
    )
  }
}
