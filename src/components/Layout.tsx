import * as React from 'react'
import SEO from './SEO'
import Navigation from './Navigation'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'
import { media } from '../utils/media'

type Props = {
  fullWidth?: boolean
  children: React.ReactNode
  hideNavigation?: boolean
  className?: string
}

const CustomNormalize = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }

  overflow: hidden;
`

const PageLayout: any = styled.div`
  width: 100%;

  padding: ${(p: any) => !p.fullWidth && '0 4rem'};

  ${media.tablet`
    padding: ${(p: any) => !p.fullWidth && '0 2rem'};
  `};
`

const Layout = ({
  fullWidth = true,
  children,
  hideNavigation = false,
  className
}: Props) => {
  return (
    <React.Fragment>
      <CustomNormalize>
        <Normalize />
        <SEO />
        {!hideNavigation && <Navigation />}
        <PageLayout fullWidth={fullWidth} className={className}>
          {children}
        </PageLayout>
      </CustomNormalize>
    </React.Fragment>
  )
}

export default Layout
