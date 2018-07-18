import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../static/images/logo.svg'
import headerBg from '../../static/images/header-bg.svg'
import VisibilitySensor from 'react-visibility-sensor'

const COLORS = {
  tcifRed: 'rgba(252, 70, 117, 0.85)',
  tcifGreen: 'rgba(155, 215, 99, 0.85)',
  tcifBlue: 'rgba(104, 213, 226, 0.85)',
  tcifYellow: 'rgba(254, 209, 84, 0.85)'
}
const keyframes = {
  animation: {
    transition: '.25s',
    timing: 'cubic-bezier(0.2, 0.4, 0.55, 0.1)'
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
  searchbar: {
    default: { top: `calc(161px + 10vh)` },
    collapsed: { top: `calc(35px + 10vh)` }
  },
  wrapper: {
    default: { height: `calc(175px + 10vh)` },
    collapsed: { height: `calc(50px + 10vh)` }
  }
}
const HeaderWrapper = styled.div.attrs(keyframes.wrapper)`
  position: relative;
  background-image: url(${props => props.image});
  height: ${props => props[props.view].height};
  margin-bottom: 3rem;
  transition: ${keyframes.animation.transition};
  transition-timing-function: ${keyframes.animation.timing};
  width: 100%;
  z-index: 1;
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
const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`
const NavButton = styled(Link)`
  position: relative;
  /* face: */
  background: #474843;
  box-shadow: 0 4px 0 0 ${props => COLORS[props.color]};
  border-radius: 5px;
  /* text: */
  color: #ffffff;
  font-size: calc(0.5rem + 0.5vh);
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.75px;
  margin: auto 0.1rem;
  padding: 0.05rem 1rem 0.05rem 0.5rem;
  text-decoration: none;
  transition: 0.2s;
  transition-timing-function: cubic-bezier(0.2, 0.4, 0.55, 0.1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 0 ${props => COLORS[props.color]};
  }
`
const SearchBar = styled.input.attrs(keyframes.searchbar)`
  position: absolute;
  top: ${props => props[props.view].top};
  /* face: */
  background: #fff;
  border: 1px solid transparent;
  border-radius: 25px;
  box-shadow: 0 2px 0 0 #ccc;
  /* text: */
  color: #656565;
  font-style: italic;
  letter-spacing: 0.53px;
  padding: 0 0.5rem;
  transition: ${keyframes.animation.transition};
  transition-timing-function: ${keyframes.animation.timing};
  width: calc(200px + 15vw);
  /* input: */
  z-index: 3;
  &:focus {
    box-shadow: 0 2px 0 0 #ccc;
    outline: none !important;
  }
`
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.nav = null
    this.state = {
      view: props.location.pathname === '/' ? 'default' : 'collapsed'
    }
  }
  componentDidMount() {
    console.log(this.nav)
  }
  componentDidUpdate(prevProps) {
    const path = this.props.location.pathname
    if (path !== prevProps.location.pathname) {
      if (path === '/') {
        this.setState({ view: 'default' })
      } else {
        this.setState({ view: 'collapsed' })
      }
    }
  }
  handleVisibilityChange(visibility) {
    console.log(`Header visible: ${visibility ? 'yes' : 'no'}`)
  }
  render() {
    return (
      <HeaderWrapper image={headerBg} view={this.state.view}>
        <HeaderContainer view={this.state.view}>
          <SearchBar placeholder="search blog posts" view={this.state.view} />
          <VisibilitySensor onChange={v => this.handleVisibilityChange(v)} partialVisibility={true}>
            <Link to="/">
              <img src={logo} alt="Try Coding, It's Fun" />
            </Link>
          </VisibilitySensor>
          <NavBar ref={nav => (this.nav = nav)}>
            <NavButton to="/posts" color="tcifRed">
              {'weeklies'}
            </NavButton>
            <NavButton to="/" color="tcifBlue">
              {'cool projects'}
            </NavButton>
            <NavButton to="/" color="tcifGreen">
              {'the author'}
            </NavButton>
          </NavBar>
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}
