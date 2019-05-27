import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Hero from '../components/Hero'

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
  width: 100%;
  height: 100%;
`

const IndexPage = (props: IndexPageProps) => {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  )
}

export default IndexPage
