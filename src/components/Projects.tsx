import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { IProjectPrismic, IProject } from '../interfaces/ProjectInterface'

export const projectsQuery = graphql`
  query ProjectsQuery {
    prismic {
      allProjects {
        edges {
          node {
            title
            image
            description
          }
        }
      }
    }
  }
`

const Projects = () => {
  const result: IProjectPrismic = useStaticQuery(projectsQuery)

  const projects = result.prismic.allProjects.edges

  return (
    <div>
      {projects.map((project: IProject, i: number) => {
        return <h1 key={i}>{project.node.title[0].text}</h1>
      })}
    </div>
  )
}

export default Projects
