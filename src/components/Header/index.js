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
  container: {
    default: {
      padding: `calc(2rem + 4vh) 1.0875rem`
    },
    collapsed: {
      padding: `calc(2rem + 4vh - 7px) 1.0875rem`
    }
    // children: {
    //   logo: {
    //     default: { height: `calc(75px + 2vh)` },
    //     collapsed: { height: `75px` }
    //   }
    // }
  },
  navbar: {
    default: { width: `100%` },
    collapsed: { width: `auto` }
  },
  searchbar: {
    default: { top: `calc(161px + 10vh)` },
    collapsed: { top: `calc(86px + 10vh)` }
  },
  wrapper: {
    default: { height: `calc(175px + 10vh)` },
    collapsed: { height: `calc(100px + 10vh)` }
  }
}
const HeaderWrapper = styled.div.attrs(keyframes.wrapper.default)`
  position: relative;
  background-image: url(${props => props.image});
  height: ${props => props.height};
  margin-bottom: 3rem;
  width: 100%;
  z-index: 1;
`
const HeaderContainer = styled.div.attrs(keyframes.container.default)`
  display: flex;
  position: relative;
  flex-wrap: ${props => (props.collapsed ? `no-wrap` : `wrap`)};
  justify-content: center;
  margin: 0 auto;
  max-width: 960px;
  padding: ${props => props.padding};
  z-index: 2;
  img {
    height: calc(75px + 2vh);
    margin-bottom: 0.5rem;
    transition: 0.5s;
    transition-timing-function: cubic-bezier(0.2, 0.4, 0.55, 0.1);
    &:hover {
      transform: translateY(-5px);
    }
  }
`
const NavBar = styled.nav.attrs(keyframes.navbar.default)`
  display: flex;
  justify-content: center;
  width: ${props => props.width};
`
const NavButton = styled(Link)`
  position: relative;
  /* face: */
  background: #474843;
  box-shadow: 0 4px 0 0 ${props => COLORS[props.color]};
  border-radius: 5px;
  /* text: */
  color: #ffffff;
  font-size: 0.78rem;
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
const SearchBar = styled.input.attrs(keyframes.searchbar.default)`
  position: absolute;
  top: ${props => props.top};
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
    this.state = {
      collapsed: false
    }
  }
  componentDidUpdate() {
    const { location } = this.props
    const refs = ['container', 'navbar', 'searchbar', 'wrapper']
    if (location.pathname !== '/') {
      this.setState({ collapsed: false })
      if (location.pathname === '/') {
        refs.forEach(async ref => {
          await this[ref].animate([keyframes[ref].collapsed, keyframes[ref].default], {
            duration: 300,
            fill: 'forwards',
            easing: 'cubic-bezier(0.2, 0.4, 0.55, 0.1)',
            iterations: 1
          })
        })
      } else {
        this.setState({ collapsed: true })
        refs.forEach(async ref => {
          await this[ref].animate([keyframes[ref].default, keyframes[ref].collapsed], {
            duration: 250,
            fill: 'forwards',
            easing: 'ease-in-out',
            iterations: 1
          })
        })
      }
    }
  }
  handleVisibilityChange(visibility) {
    console.log(`Header visible: ${visibility ? 'yes' : 'no'}`)
  }
  render() {
    return (
      <HeaderWrapper
        isHome={this.props.location.pathname === '/' || '/collapsed'}
        image={headerBg}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}>
        <HeaderContainer
          collapsed={this.state.collapsed}
          ref={container => {
            this.container = ReactDOM.findDOMNode(container)
          }}>
          <SearchBar
            placeholder="search blog posts"
            ref={searchbar => (this.searchbar = ReactDOM.findDOMNode(searchbar))}
          />
          <VisibilitySensor onChange={v => this.handleVisibilityChange(v)} partialVisibility={true}>
            <Link to="/">
              <img src={logo} alt="Try Coding, It's Fun" />
            </Link>
          </VisibilitySensor>
          <NavBar ref={navbar => (this.navbar = ReactDOM.findDOMNode(navbar))}>
            <NavButton to="/posts" color="tcifRed">
              {'all posts'}
            </NavButton>
            <NavButton to="/" color="tcifBlue">
              {'weeklies'}
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
