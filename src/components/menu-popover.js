import React, { Fragment } from 'react'
import { debounce } from 'lodash'
import styled from 'styled-components'
import { TcifButton } from '../data/app-style'
import Toggle from './toggle'

const Hamburger = styled.div`
  position: fixed;
  background-color: white;
  text-align: center;
  box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  height: 25px;
  width: 25px;
  margin: 1rem;
  opacity: 1;
  z-index: 10;
  cursor: pointer;

  @media (min-width: 960px) {
    display: none;
  }
`

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem 0 0 calc(1.5rem + 25px);
  height: 100vh;
  width: 100vw;
  z-index: 9;
`

const MenuPopover = () => (
  <Toggle>
    {({ show, toggle }) => (
      <Fragment>
        <Hamburger onClick={toggle}>
+
        </Hamburger>
        {show && (
          <Overlay>
            <TcifButton to="/weeklies" color="tcifRed">
              {`weeklies`}
            </TcifButton>
            <TcifButton to="/cool-projects" color="tcifBlue">
              {`cool projects`}
            </TcifButton>
            <TcifButton to="/about" color="tcifGreen">
              {`about us`}
            </TcifButton>
          </Overlay>
        )}
      </Fragment>
    )}
  </Toggle>
)

export default MenuPopover
