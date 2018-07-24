import React, { Component } from 'react'
import FlexContainer from '../components/flex-container'

export default class ComingSoon extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <FlexContainer
        renderMain={() => {
          return <h3>Whoops! We're still working on this section. Check back soon!</h3>
        }}
        renderSidebar={() => null}
      />
    )
  }
}
