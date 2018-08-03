import React, { Component } from 'react'
import ø from '../data/shortcodes'
import FlexContainer from '../components/flex-container'

export default class CoolProjects extends Component {
  /**
   * TODO: add the following projects
   *  - JS30
   *  - YDKJS Exercises
   *  - Just Build Websites
   */
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <FlexContainer
        renderMain={() => {
          return (
            <div style={{ textAlign: 'center' }}>
              <h1>Cool Projects</h1>
              <em>Whoops! We're still working on this section. Check back soon!</em>
            </div>
          )
        }}
        renderSidebar={() => ø.øCS}
      />
    )
  }
}
