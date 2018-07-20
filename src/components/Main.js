import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainContainer = styled.div`
  /* define media queries here */
`
/* uses render-prop */
export default class Main extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  render() {
    return <MainContainer>{this.props.render()}</MainContainer>
  }
}
