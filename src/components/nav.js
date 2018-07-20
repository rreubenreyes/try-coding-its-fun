import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import appColors from '../../static/data/app-colors'

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
`
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
export default (Nav = () => {
  return (
    <NavBar>
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
  )
})
