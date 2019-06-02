import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import Image from './Image'

export interface ILatestProjectsPrismic {
  prismicHomepageBodyLatestProjects: {
    slice_type: string
    primary: {
      project_section_title: PrismicObject
    }
    items: Array<ILatestPoject>
  }
}

interface ILatestPoject {
  latest_projects1: {
    uid: string
    document: [
      {
        data: {
          title: PrismicObject
          image: PrismicImageObject
          description: PrismicObject
        }
      }
    ]
  }
}

const LatestProjects = () => {
  const result: ILatestProjectsPrismic = useStaticQuery(latestProjectsQuery)
  const title =
    result.prismicHomepageBodyLatestProjects.primary.project_section_title.text
  const projects: Array<ILatestPoject> =
    result.prismicHomepageBodyLatestProjects.items

  return (
    <div>
      <h2>{title}</h2>
      {projects.map((itemData: ILatestPoject, i: any) => {
        const uid = itemData.latest_projects1.uid
        const data = itemData.latest_projects1.document[0].data
        const title = data.title.text

        return (
          <div key={i}>
            <Link to={`/projects/${uid}`}>
              <h2>{title}</h2>
              <Image image={data.image} fallbackAlt={title} />
            </Link>
          </div>
        )
      })}
    </div>
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
