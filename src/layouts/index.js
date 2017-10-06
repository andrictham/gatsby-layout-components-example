// This file creates a component that automatically wraps around all pages. Good for global styling.

import React from 'react'
import Link from 'gatsby-link'

const styles = {
  container: {
    margin: `0 auto`,
    maxWidth: 650,
    padding: `1.25rem 1rem`,
  },
  title: {
    display: `inline`,
  },
  linkLi: {
    display: `inline-block`,
    marginRight: `1rem`,
  },
  homeLi: {
    textShadow: `none`,
    backgroundImage: `none`,
  },
  navUl: {
    listStyle: `none`,
    float: `right`,
  },
  header: {
    marginBottom: `1.5rem`,
  },
}

const ListLink = ({ to, children }) =>
  <li style={styles.linkLi}>
    <Link to={to}>
      {children}
    </Link>
  </li>

export default ({ children }) =>
// Destructure this.props.children
  <div style={styles.container}>
    <header style={styles.header}>
      <Link to="/" style={styles.homeLi}>
        <h3 style={styles.title}>
          MySweetSite
        </h3>
      </Link>
      <ul style={styles.navUl}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    { children() }
  </div>
