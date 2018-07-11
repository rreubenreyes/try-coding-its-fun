import React from 'react'
import styled from 'styled-components'
import logo from '../../static/images/logo.svg'

const HeaderWrapper = styled.div`
  position: relative;
  height: 65vh;
  background: #656565;
  margin-bottom: 1rem;
  overflow: hidden;
  z-index: 1;
`
const HeaderContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  img {
    position: relative;
    height: 150px;
    left: 50%;
    transform: translateX(-50%);
  }
  z-index: 2;
`
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <img src={logo} alt="Try Coding, It's Fun" />
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
