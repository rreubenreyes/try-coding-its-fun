import Link from 'gatsby-link'
import styled, { css } from 'styled-components'

export const TcifColors = {
  tcifBlue: '#68d5e2',
  tcifGray: '#ddd',
  tcifGreen: '#9bd763',
  tcifPurple: '#9a86ee',
  tcifRed: '#fc4675',
  tcifYellow: '#fed154'
}
const IFancyButton = css`
  position: relative;
  background: ${props => (props.fill ? props.fill : '#474843')};
  box-shadow: 0 4px 0 0 ${props => TcifColors[props.color]};
  border-radius: 5px;
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
    box-shadow: 0 6px 0 0 ${props => TcifColors[props.color]};
  }
`
const IFancyLink = css`
  display: inline-block;
  position: relative;
  text-decoration: none;
  width: auto;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0 !important;
  }
  &:after {
    display: block;
    position: relative;
    top: 0.25rem;
    border-bottom: 1px solid #979797;
    content: '';
    margin-top: ${props => (props.isHeader ? '-0.125rem' : '-0.25rem')};
    margin-bottom: ${props => (props.isHeader ? '0.25rem' : 0)};
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: transform 0.2s;
    transition-timing-function: cubic-bezier(0.39, 0.53, 0.11, 0.96);
    width: 100%;
  }
  &:hover:after {
    position: relative;
    transform: scaleX(1);
    width: 100%;
  }
`
export const TcifAnchor = styled.a`
  ${IFancyLink};
  color: ${TcifColors.tcifPurple};
`
export const TcifButton = styled(Link)`
  ${IFancyButton};
`
export const TcifPureButton = styled.button`
  ${IFancyButton};
`
export const TcifLink = styled(Link)`
  ${IFancyLink};
  color: #444;
`
