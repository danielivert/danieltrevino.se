import * as React from 'react'
import { format } from 'date-fns'
import { IProject } from '../interfaces/ProjectInterface'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Body from '../components/Body'
import { media } from '../utils/media'
import Image from '../components/Image'
import { gutter, alternativeColor } from '../utils/variables'
import Contact from '../components/Contact'

interface IProps {
  pageContext: IProject
}

const Wrapper = styled.div`
  margin-top: 3rem; /* Navigation height */
  min-height: calc(100vh - 3rem);
  padding: 0 4rem;

  ${media.tablet`
    padding: 0 2rem;
  `}
`

const Hero = styled.div`
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
  padding-top: 3rem;
  font-size: 2.5rem;
`

const Year = styled.h4`
  margin: 0;
  padding: 1rem 0;

  span {
    color: ${alternativeColor};
  }
`

const SiteUrl = styled.div`
  color: #ffffff;
  background-color: ${alternativeColor};
  border: 1px solid ${alternativeColor};
  border-radius: ${gutter}px;
  width: 120px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: ${gutter * 2}px;
  position: relative;

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: white;
    color: ${alternativeColor};
    border: 1px solid #ffffff;
  }
`

const Img = styled(Image)`
  margin: 0 auto;
  object-fit: cover;
  margin-bottom: ${gutter * 2}px;
  width: 80%;

  ${media.desktop`
    width: 100%;
  `}
`

const BodyComponent = styled(Body)`
  width: 80%;
  margin: 0 auto;

  ${media.desktop`
    width: 100%;
  `}
`

const SingleProject = (props: IProps) => {
  const data = props.pageContext
  const title = data.title.text
  const year = data.year
  const descriptionHtml = data.description.html
  const image = data.image
  const siteUrl = data.link || null

  return (
    <Layout fullWidth={true} secondaryColor primaryColorOnScroll>
      <Wrapper>
        <Hero>
          <Title>{title}</Title>
          <Year>
            Year - <span>{format(year, 'YYYY')}</span>
          </Year>
          {siteUrl && (
            <SiteUrl>
              <a
                href={siteUrl.url}
                target={siteUrl.target}
                rel="noopener noreferrer"
              >
                Visit site
              </a>
            </SiteUrl>
          )}
          <Img image={image} fallbackAlt={title} />
        </Hero>
        <BodyComponent html={descriptionHtml} />
      </Wrapper>
      <Contact primaryColor />
    </Layout>
  )
}

export default SingleProject
