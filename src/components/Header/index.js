import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../static/images/logo.svg'
import headerBg from '../../static/images/header-bg.svg'

const COLORS = {
  tcifRed: 'rgba(252, 70, 117, 0.85)',
  tcifGreen: 'rgba(155, 215, 99, 0.85)',
  tcifBlue: 'rgba(104, 213, 226, 0.85)',
  tcifYellow: 'rgba(254, 209, 84, 0.85)'
}

const HeaderWrapper = styled.div`
  position: relative;
  background-image: url(${props => props.image});
  height: ${props => (props.isHome ? '33vh' : '20vh')};
  margin-bottom: 4rem;
  overflow: visible;
  z-index: 1;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding: 4.3rem 1.0875rem;
  z-index: 2;
  img {
    height: 12.5vh;
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
const SearchBar = styled.div`
  position: relative;
  flex-grow: 1;
  /* side: */
  align-self: flex-end;
  background: #fff;
  border-radius: 25px;
  bottom: -3rem;
  box-shadow: 0 2px 0 0 #ccc;
  color: #656565;
  letter-spacing: 0.53px;
  margin-bottom: 0.67rem;
  padding: 0.25rem 1rem;
  width: 33vw;
  z-index: 3;
`

export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  componentDidUpdate(prevProps) {
    const { location } = this.props
    if (location.pathname !== prevProps.location.pathname) {
      if (location.pathname === '/') {
        this.wrapper.animate([{ height: '20vh' }, { height: '33vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'cubic-bezier(0.2, 0.4, 0.55, 0.1)',
          iterations: 1
        })
      } else {
        this.wrapper.animate([{ height: '33vh' }, { height: '20vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'ease-in-out',
          iterations: 1
        })
      }
    }
  }

  render() {
    return (
      <HeaderWrapper
        isHome={this.props.location.pathname === '/' || '/collapsedg'}
        image={headerBg}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}>
        <HeaderContainer>
          <img src={logo} style={{ marginBottom: '.67rem' }} alt="Try Coding, It's Fun" />
          <NavBar>
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
          <SearchBar>
            <em>{'search all blog posts'}</em>
          </SearchBar>
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}
