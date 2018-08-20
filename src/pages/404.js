import React from 'react'
import FlexContainer from '../components/flex-container'

const NotFoundPage = () => (
  <FlexContainer
    renderMain={() => (
      <h3>
        {`This page doesn't exist. How'd you even get here? Leave the poor URL bar alone.`}
      </h3>
    )}
    renderSidebar={() => null}
  />
)
export default NotFoundPage
