import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string
        tagline: string
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`

const Wrapper = styled.div`
  background: red;
`

const IndexPage = (props: IndexPageProps) => {
  return (
    <Wrapper>
      <h1>Hello world!</h1>
    </Wrapper>
  )
}

export default IndexPage
