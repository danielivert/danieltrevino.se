import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { IProjectPrismic, IProject } from '../interfaces/ProjectInterface'

const Projects = (props: any) => {
  const result: IProjectPrismic = useStaticQuery(projectsQuery)
  const projects = result.allPrismicProject.nodes

  return (
    <div>
      {projects.map((project: IProject, i: any) => {
        const data = project.data
        const uId = project.uid
        const title = data.title.text

        return (
          <h2 key={i}>
            <Link to={`/projects/${uId}`}>{title}</Link>
          </h2>
        )
      })}
    </div>
  )
}

export default Projects

export const projectsQuery = graphql`
  query AllProjects {
    allPrismicProject {
      nodes {
        uid
        data {
          title {
            html
            text
          }
          description {
            html
            text
          }
        }
      }
    }
  }
`
