import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const appColors = {
  tcifRed: 'rgba(252, 70, 117, 0.85)',
  tcifGreen: 'rgba(155, 215, 99, 0.85)',
  tcifBlue: 'rgba(104, 213, 226, 0.85)',
  tcifYellow: 'rgba(254, 209, 84, 0.85)'
}
const NavButton = styled(Link)`
  position: relative;
  /* face: */
  background: #474843;
  box-shadow: 0 4px 0 0 ${props => appColors[props.color]};
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
    box-shadow: 0 6px 0 0 ${props => appColors[props.color]};
  }
`
const NavBar = styled.nav`
  display: flex;
  flex-direction: ${props => (props.headerVisible ? 'row' : 'column')};
  align-items: flex-end;
  justify-content: ${props => (props.headerVisible ? 'center' : 'right')};
  padding-top: ${props => (props.headerVisible ? 0 : '1rem')};
  transition: transform 0.125s, padding-top 0.2s ease;
  transition-timing-function: cubic-bezier(0.39, 0.53, 0.11, 0.96);
  width: 100%;
  ${NavButton} {
    margin: ${props => (props.headerVisible ? 'auto .1rem' : '.25rem 0')};
  }
  @media (max-width: 960px) {
    flex-direction: row;
    justify-content: center;
    ${NavButton} {
      margin: auto 0.1rem;
    }
  }
`
const Nav = props => {
  return (
    <NavBar headerVisible={props.headerVisible}>
      <NavButton to="/weeklies" color="tcifRed">
        {'weeklies'}
      </NavButton>
      <NavButton to="/cool-projects" color="tcifBlue">
        {'cool projects'}
      </NavButton>
      <NavButton to="/about" color="tcifGreen">
        {'about us'}
      </NavButton>
    </NavBar>
  )
}
Nav.propTypes = {
  headerVisible: PropTypes.bool.isRequired
}
export default Nav
