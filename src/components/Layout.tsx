import * as React from 'react'
import SEO from './SEO'
import Navigation from './Navigation'
import { Normalize } from 'styled-normalize'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <React.Fragment>
    <Normalize />
    <SEO />
    <Navigation />
    <div>{children}</div>
  </React.Fragment>
)

export default Layout
