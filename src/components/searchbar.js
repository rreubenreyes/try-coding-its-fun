import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

const keyframes = {
  animation: {
    transition: '.15s',
    timing: 'cubic-bezier(.15, .38, .91, .71)'
  },
  searchbar: {
    default: { top: `calc(161px + 10vh)` },
    collapsed: { top: `calc(35px + 10vh)` }
  }
}
const SearchInput = styled.input.attrs(keyframes.searchbar)`
  position: absolute;
  top: ${props => props[props.view].top};
  /* face: */
  background: #fff;
  border: 1px solid transparent;
  border-radius: 25px;
  box-shadow: 0 2px 0 0 #ccc;
  /* text: */
  color: #444;
  font-style: italic;
  letter-spacing: 0.53px;
  padding: 0.125rem 1rem;
  transition: ${keyframes.animation.transition};
  transition-timing-function: ${keyframes.animation.timing};
  width: calc(400px + 15vw);
  /* input: */
  z-index: 3;
  &:focus {
    box-shadow: 0 2px 0 0 #ccc;
    outline: none !important;
  }
`
const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default class Searchbar extends Component {
  static propTypes = {
    handleFilters: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }
  handleChange(e) {
    e.preventDefault()
    this.setState({ input: e.target.value })
    this.props.handleFilters(e.target.value)
  }
  render() {
    return (
      <SearchWrapper>
        <SearchInput
          onChange={e => this.handleChange(e)}
          placeholder="search blog posts"
          view={this.props.view}
          value={this.state.input}
        />
      </SearchWrapper>
    )
  }
}
