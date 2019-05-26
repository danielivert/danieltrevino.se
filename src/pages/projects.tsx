import * as React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Projects from '../components/Projects'

interface ProjectsPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string
        tagline: string
      }
    }
  }
}

export const projectsPageQuery = graphql`
  query ProjectsPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`

const Wrapper = styled.div`
  background: blue;
`

const ProjectsPage = (props: ProjectsPageProps) => {
  return (
    <Wrapper>
      <h1>Hello projects!</h1>
      <Projects />
    </Wrapper>
  )
}

export default ProjectsPage
