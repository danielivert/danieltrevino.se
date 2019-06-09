import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { gutter, primaryColor } from '../utils/variables'
import {
  ILatestProjectsPrismic,
  IProject
} from '../interfaces/ProjectInterface'
import { normalizeProjects } from '../utils/projectUtils'
import ProjectsGrid from './ProjectsGrid'

const Wrapper = styled.div`
  &:before {
    position: absolute;
    z-index: 0;
    left: -2px;
    right: -5px;
    top: -100px;
    height: 150px;
    width: calc(100% + 5px);
    -webkit-transform: rotate(-2deg);
    -ms-transform: rotate(-2deg);
    transform: rotate(-2deg);
    content: '';
    background: ${primaryColor};
  }

  position: relative;
  margin: 3rem 0;
  background: ${primaryColor};
  color: white;
  padding: 3rem 0;
  padding-bottom: 6rem;
`

const Title = styled.h2`
  margin-bottom: ${gutter * 4}px;
  text-align: center;
`

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const LatestProjects = () => {
  const result: ILatestProjectsPrismic = useStaticQuery(latestProjectsQuery)
  const title =
    result.prismicHomepageBodyLatestProjects.primary.project_section_title.text
  const projects: Array<IProject> = normalizeProjects(
    result.prismicHomepageBodyLatestProjects.items
  )

  return (
    <Wrapper>
      <Title>{title}</Title>

      <ProjectsContainer>
        <ProjectsGrid projects={projects} />
      </ProjectsContainer>
    </Wrapper>
  )
}

export default LatestProjects

export const latestProjectsQuery = graphql`
  query LatestProjects {
    prismicHomepageBodyLatestProjects {
      slice_type
      primary {
        project_section_title {
          text
          html
          raw {
            type
            text
          }
        }
      }
      items {
        latest_projects1 {
          uid
          document {
            data {
              title {
                text
                html
              }
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                url
                alt
              }
            }
          }
        }
      }
    }
  }
`
