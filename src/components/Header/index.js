import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import logo from '../../static/images/logo.svg'

const HeaderWrapper = styled.div`
  position: relative;
  height: ${props => (props.isHome ? '65vh' : '20vh')};
  background: #656565;
  margin-bottom: 1rem;
  overflow: hidden;
  z-index: 1;
`
const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  z-index: 2;
`
const NavBar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    li {
      margin-left: 10px;
      font-family: sans-serif;
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          border-bottom: 2px solid black;
        }
      }
    }
  }
`
export default class Header extends Component {
  constructor(props) {
    super(props)
  }
  componentDidUpdate = prevProps => {
    const { location } = this.props
    console.log(location.pathname)
    console.log(this.wrapper)
    if (location.pathname !== prevProps.location.pathname) {
      if (location.pathname === '/') {
        this.wrapper.animate([{ height: '20vh' }, { height: '65vh' }], {
          duration: 300,
          fill: 'forwards',
          easing: 'ease-in-out',
          iterations: 1
        })
      } else {
        this.wrapper.animate([{ height: '65vh' }, { height: '20vh' }], {
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
        isHome={this.props.location.pathname === '/'}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}>
        <HeaderContainer>
          <img src={logo} alt="Try Coding, It's Fun" />
          <NavBar>
            <ul>
              <li>
                <Link to="/">back to home</Link>
              </li>
              <li>
                <Link to="/posts/">posts</Link>
              </li>
            </ul>
          </NavBar>
        </HeaderContainer>
      </HeaderWrapper>
    )
  }
}
