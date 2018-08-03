import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { TcifButton } from '../data/app-style'

const NavBar = styled.nav`
  /** 
   * TODO: add a concrete page transition so that the nav doesn't just appear on header visibility change
   * TODO: create a mobile-friendly sticky nav solution
   */
  display: flex;
  flex-direction: ${props => (props.headerVisible ? 'row' : 'column')};
  align-items: flex-end;
  justify-content: ${props => (props.headerVisible ? 'center' : 'right')};
  padding-top: ${props => (props.headerVisible ? 0 : '1rem')};
  transition: transform 0.125s, padding-top 0.2s ease;
  transition-timing-function: cubic-bezier(0.39, 0.53, 0.11, 0.96);
  width: 100%;
  ${TcifButton} {
    margin: ${props => (props.headerVisible ? 'auto .1rem' : '.25rem 0')};
  }
  @media (max-width: 960px) {
    flex-direction: row;
    justify-content: center;
    ${TcifButton} {
      margin: auto 0.1rem;
    }
  }
`
const Nav = props => {
  return (
    <NavBar headerVisible={props.headerVisible}>
      <TcifButton to="/weeklies" color="tcifRed">
        {'weeklies'}
      </TcifButton>
      <TcifButton to="/cool-projects" color="tcifBlue">
        {'cool projects'}
      </TcifButton>
      <TcifButton to="/about" color="tcifGreen">
        {'about us'}
      </TcifButton>
    </NavBar>
  )
}
Nav.propTypes = {
  headerVisible: PropTypes.bool.isRequired
}
export default Nav
