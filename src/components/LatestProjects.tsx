import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import Image from './Image'
import styled from 'styled-components'
import AnimateIns from './AnimateIns'
import { gutter, primaryColor } from '../utils/variables'

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

const ProjectsGrid = styled(AnimateIns)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Img = styled(Image)`
  margin: 0 auto;
  object-fit: cover;

  img {
    height: 100%;
    max-height: 350px;
    width: 100%;
  }
`

const ProjectItemWrapper = styled.div`
  position: relative;
  text-align: center;
  transition: 0.3s ease;

  margin-right: ${gutter * 2}px;
  margin-top: ${gutter * 2}px;

  a {
    cursor: pointer;
  }

  h4 {
    margin: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: left;
    background-color: black;
    opacity: 0.8;
    padding: 1rem;
  }

  &:hover {
    transform: translateY(0px) scale(1.05) translateZ(0px);
  }
`

const ProjectItem = ({
  title,
  image,
  url
}: {
  title: string
  image: PrismicImageObject
  url: string
}) => {
  return (
    <Link to={url}>
      <ProjectItemWrapper>
        <h4>{title}</h4>
        <Img fallbackAlt={title} image={image} />
      </ProjectItemWrapper>
    </Link>
  )
}

const LatestProjects = () => {
  const result: ILatestProjectsPrismic = useStaticQuery(latestProjectsQuery)
  const title =
    result.prismicHomepageBodyLatestProjects.primary.project_section_title.text
  const projects: Array<ILatestPoject> =
    result.prismicHomepageBodyLatestProjects.items

  return (
    <Wrapper>
      <Title>{title}</Title>

      <ProjectsContainer>
        <ProjectsGrid delay={200}>
          {projects.map((itemData: ILatestPoject, i: any) => {
            const uid = itemData.latest_projects1.uid
            const url = `/projects/${uid}`
            const data = itemData.latest_projects1.document[0].data
            const title = data.title.text

            return (
              <ProjectItem key={i} title={title} image={data.image} url={url} />
            )
          })}
        </ProjectsGrid>
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
