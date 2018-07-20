import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SearchInput = styled.input.attrs(keyframes.searchbar)`
  position: absolute;
  top: ${props => props[props.view].top};
  /* face: */
  background: #fff;
  border: 1px solid transparent;
  border-radius: 25px;
  box-shadow: 0 2px 0 0 #ccc;
  /* text: */
  color: #656565;
  font-style: italic;
  letter-spacing: 0.53px;
  padding: 0 0.5rem;
  transition: ${keyframes.animation.transition};
  transition-timing-function: ${keyframes.animation.timing};
  width: calc(200px + 15vw);
  /* input: */
  z-index: 3;
  &:focus {
    box-shadow: 0 2px 0 0 #ccc;
    outline: none !important;
  }
`

export default class Searchbar extends Component {
  static propTypes = {
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
    this.setState({
      input: e.target.value
    })
    // TODO: add actual search functionality
    // need a search button and a schema/query that accommodates blog post searches
  }
  render() {
    return (
      <SearchInput
        onChange={this.handleChange()}
        placeholder="search blog posts"
        view={this.props.view}
        value={this.state.input}
      />
    )
  }
}
