import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  children: React.ReactNode
}

const PageLayoutStyled = styled.div`
  width: 100%;
`

const PageLayout = (props: IProps) => {
  const { children } = props

  return <PageLayoutStyled {...props}>{children}</PageLayoutStyled>
}

export default PageLayout
