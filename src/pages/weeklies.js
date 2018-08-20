import React from 'react'
import FlexContainer from '../components/flex-container'
import ø from '../data/shortcodes'

const Weeklies = () => (
  <FlexContainer
    renderMain={() => (
      <div style={{ textAlign: `center` }}>
        <h1>
          {`Weeklies`}
        </h1>
        <em>
          {ø.WIP}
        </em>
      </div>
    )}
    renderSidebar={() => ø.CS}
  />
)

export default Weeklies
