// This file creates a component that automatically wraps around all pages. Good for global styling.

import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 650;
  padding: 1.25rem 1rem;
`
const Header = styled.header`
  margin-bottom: 1.5rem;
`
const SiteTitleLink = styled(Link)`
  text-shadow: none;
  background-image: none;
`
const SiteTitle = styled.h3`
  display: inline;
`
const NavigationList = styled.ul`
  list-style: none;
  float: right;
`
const NavigationItem = styled(Link)`
  display: inline-block;
  margin-right: 1rem;
`

export default ({ children }) =>
// Destructure this.props.children
  <Container>
    <Header>
      <SiteTitleLink to="/">
        <SiteTitle>
          MySweetSite
        </SiteTitle>
      </SiteTitleLink>
      <NavigationList>
        <NavigationItem to="/"> Home </NavigationItem>
        <NavigationItem to="/about"> About </NavigationItem>
        <NavigationItem to="/contact"> Contact </NavigationItem>
      </NavigationList>
    </Header>
    { children() }
  </Container>
