// This file creates a component that automatically wraps around all pages. Good for global styling.

import React from 'react'

const containerStyle = {
  margin: `0 auto`,
  maxWidth: 650,
  padding: `0 1rem`,
}

export default ({ children }) =>
// Destructure this.props.children
  <div style={containerStyle}>
    { children() }
  </div>
