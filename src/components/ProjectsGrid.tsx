import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { gutter } from '../utils/variables'
import Image from './Image'
import { PrismicImageObject } from '../interfaces/PrismicInterface'
import { media } from '../utils/media'
import AnimateIns, { IPropsAnimateIns } from './AnimateIns'
import { IProject } from '../interfaces/ProjectInterface'

interface IProps extends IPropsAnimateIns {
  projects: Array<IProject>
}

const ProjectsGridWrapper = styled(AnimateIns)`
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

  ${media.phone`
  margin: 0;
  margin: 1rem 1rem;
`}
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

const ProjectsGrid = (props: IProps) => {
  const { projects, delay, offset } = props

  return (
    <ProjectsGridWrapper delay={delay} offset={offset}>
      {projects.map((project: IProject, i: any) => (
        <ProjectItem
          key={i}
          title={project.title.text}
          image={project.image}
          url={`/projects/${project.uid}`}
        />
      ))}
    </ProjectsGridWrapper>
  )
}

export default ProjectsGrid
