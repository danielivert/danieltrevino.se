import * as React from 'react'
import SEO from './SEO'
import Navigation from './Navigation'
import { Normalize } from 'styled-normalize'
import styled from 'styled-components'
import { media } from '../utils/media'
import { secondaryColor } from '../utils/variables'

type Props = {
  fullWidth?: boolean
  children: React.ReactNode
  hideNavigation?: boolean
  secondaryColor?: boolean
  className?: string
  primaryColorOnScroll?: boolean
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
  background: ${(p: any) =>
    p.secondaryColor ? `${secondaryColor}` : '#FFFFFF'};
  color: #ffffff;
  padding: ${(p: any) => !p.fullWidth && '0 4rem'};

  ${media.tablet`
    padding: ${(p: any) => !p.fullWidth && '0 2rem'};
  `};
`

const Layout = ({
  fullWidth = true,
  children,
  hideNavigation = false,
  secondaryColor = false,
  primaryColorOnScroll,
  className
}: Props) => {
  return (
    <React.Fragment>
      <CustomNormalize>
        <Normalize />
        {!hideNavigation && (
          <Navigation primaryColorOnScroll={primaryColorOnScroll} />
        )}
        <PageLayout
          fullWidth={fullWidth}
          className={className}
          secondaryColor={secondaryColor}
        >
          {children}
        </PageLayout>
      </CustomNormalize>
    </React.Fragment>
  )
}

export default Layout
