import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { IProjectPrismic, IProject } from '../interfaces/ProjectInterface'

export const projectsQuery = graphql`
  query ProjectsQuery {
    prismic {
      allProjects {
        edges {
          node {
            _meta {
              uid
            }

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
        const projectTitle = project.node.title[0].text
        const uId = project.node._meta.uid

        return (
          <h2 key={i}>
            <Link to={`/projects/${uId}`}>{projectTitle}</Link>
          </h2>
        )
      })}
    </div>
  )
}

export default Projects
