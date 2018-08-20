import React from 'react'
import FlexContainer from '../components/flex-container'

const ComingSoon = () => (
  <FlexContainer
    renderMain={() => (
      <h3>{`Whoops! We're still working on this section. Check back soon!`}</h3>
    )}
    renderSidebar={() => null}
  />
)

export default ComingSoon
