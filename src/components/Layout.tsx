import * as React from 'react'
import SEO from './SEO'
import Navigation from './Navigation'
import { Normalize } from 'styled-normalize'

type Props = {
  children: React.ReactNode
  hideNavigation?: boolean
}

const Layout = ({ children, hideNavigation = false }: Props) => (
  <React.Fragment>
    <Normalize />
    <SEO />
    {!hideNavigation && <Navigation />}
    <div>{children}</div>
  </React.Fragment>
)

export default Layout
