import * as React from 'react'
import SEO from './SEO'
import Navigation from './Navigation'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  hideNavigation?: boolean
}

const CustomNormalize = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }
`

const Layout = ({ children, hideNavigation = false }: Props) => (
  <React.Fragment>
    <CustomNormalize>
      <Normalize />
      <SEO />
      {!hideNavigation && <Navigation />}
      <div>{children}</div>
    </CustomNormalize>
  </React.Fragment>
)

export default Layout
