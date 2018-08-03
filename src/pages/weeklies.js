import React, { Component } from 'react'
import FlexContainer from '../components/flex-container'
import ø from '../data/shortcodes'

export default class Weeklies extends Component {
  // TODO: add tags to GraphQL schema/markdown posts
  // TODO: add Coffee Shop Sundays
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <FlexContainer
        renderMain={() => {
          return (
            <div style={{ textAlign: 'center' }}>
              <h1>Weeklies</h1>
              <em>{ø.øWIP}</em>
            </div>
          )
        }}
        renderSidebar={() => ø.øCS}
      />
    )
  }
}
