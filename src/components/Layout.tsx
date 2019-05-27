import * as React from 'react'
import SEO from './SEO'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <div>
    <SEO />
    {/* <Navigation  /> */}
    <div>{children}</div>
  </div>
)

export default Layout
