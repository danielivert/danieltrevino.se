import * as React from 'react'
import { graphql, Link } from 'gatsby'
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
      <p>
        Go to <Link to="/projects">projects</Link>
      </p>
    </Wrapper>
  )
}

export default IndexPage
