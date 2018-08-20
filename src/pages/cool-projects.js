import React from 'react'
import ø from '../data/shortcodes'
import FlexContainer from '../components/flex-container'

const CoolProjects = () => (
  <FlexContainer
    renderMain={() => (
      <div style={{ textAlign: `center` }}>
        <h1>
          {`Cool Projects`}
        </h1>
        <em>
          {`Whoops! We're still working on this section. Check back soon!`}
        </em>
      </div>
    )}
    renderSidebar={() => ø.CS}
  />
)
export default CoolProjects
