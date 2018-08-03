import React, { Component } from 'react'
import FlexContainer from '../components/flex-container'

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
              <em>Whoops! We're still working on this section. Check back soon!</em>
            </div>
          )
        }}
        renderSidebar={() => 'Coming soon'}
      />
    )
  }
}
