import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SidebarContainer = styled.div`
  /* define media queries here */
`
/* uses render-prop */
export default class Sidebar extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired
  }

  render() {
    return <SidebarContainer>{this.props.render()}</SidebarContainer>
  }
}
