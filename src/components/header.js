import headerBg from '../static/images/header-bg.svg'
import Link from 'gatsby-link'
import logo from '../static/images/logo.svg'
import Nav from './nav'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const keyframes = {
  animation: {
    transition: '.15s',
    timing: 'cubic-bezier(.15, .38, .91, .71)'
  },
  container: {
    default: { padding: `calc(2rem + 4vh) 1.0875rem` },
    collapsed: { padding: `calc(2rem + 4vh - 50px) 1.0875rem` },
    children: {
      logo: {
        default: {
          height: `calc(75px + 2vh)`,
          marginBottom: `0.5rem`
        },
        collapsed: {
          height: `60px`,
          marginBottom: `0`
        }
      }
    }
  },
  wrapper: {
    default: { height: `calc(175px + 10vh)` },
    collapsed: { height: `calc(50px + 10vh)` }
  }
}
const HeaderWrapper = styled.div.attrs(keyframes.wrapper)`
  position: relative;
  background-image: url(${props => props.image});
  background-attachment: fixed;
  height: ${props => props[props.view].height};
  margin-bottom: 3rem;
  transition: ${keyframes.animation.transition};
  transition-timing-function: ${keyframes.animation.timing};
  width: 100%;
  z-index: 1;
  @media (max-width: 960px) {
    background-attachment: scroll;
  }
`
const HeaderContainer = styled.div.attrs(keyframes.container)`
  display: flex;
  position: relative;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 960px;
  padding: ${props => props[props.view].padding};
  transition: ${keyframes.animation.transition};
  transition-timing-function: ${keyframes.animation.timing};
  z-index: 2;
  img {
    height: ${props => props.children.logo[props.view].height};
    margin-bottom: ${props => props.children.logo[props.view].marginBottom} !important;
    transition: 0.5s;
    transition-timing-function: cubic-bezier(0.2, 0.4, 0.55, 0.1);
    &:hover {
      transform: translateY(-5px);
    }
  }
`
export default class Header extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired
  }
  constructor() {
    super()
    this.state = {
      view: 'default'
    }
  }
  render() {
    return (
      <HeaderWrapper image={headerBg} view={this.state.view}>
        <HeaderContainer view={this.state.view}>
          <Link to="/">
            <img src={logo} alt="Try Coding, It's Fun" />
          </Link>
          {this.props.visible ? <Nav headerVisible={true} /> : null}
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}
