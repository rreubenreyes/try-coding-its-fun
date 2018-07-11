import React from 'react'
<<<<<<< HEAD
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
=======
import Link from 'gatsby-link'
import logo from '../../static/images/logo2.svg'
import styled from 'styled-components'
import Img from 'gatsby-image'

const HeaderWrapper = styled.div`
	position: relative;
	height: 70vh;
	background: #43d1f2;
	margin-bottom: 1.45rem;
	overflow: hidden;
	z-index: 1;
`
const HeaderContainer = styled.div`
	position: relative;
	margin: 0 auto;
	max-width: 960px;
	padding: 1.45rem 1.0875rem;
	h1 {
		img {
			height: 150px;
		}
	}
	z-index: 2;
`
const Header = ({ data }) => (
	<HeaderWrapper>
		<HeaderContainer>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none'
					}}>
					<img src={logo} alt="Try Coding, It's Fun" />
				</Link>
			</h1>
			<nav>
				<ul>
					<li>
						<Link to="/">home</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to="/about/">about</Link>
					</li>
				</ul>
			</nav>
			<p>{data.site.siteMetadata.desc}</p>
		</HeaderContainer>
		<Img
			style={{
				position: 'absolute',
				top: 0,
				left: 0,
				height: '100%',
				width: '100%',
				zIndex: -1
			}}
			sizes={data.background.sizes}
		/>
	</HeaderWrapper>
)
>>>>>>> 63a50d94bf9f813d10fd3b8d48d8e819ebd70371

export default Header
