import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import posed from 'react-pose'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import { media } from '../utils/media'
import Image from './Image'
import AnimateIns from './AnimateIns'
import { secondaryColor } from '../utils/variables'

const backgroundImage = require('../images/background.svg') as string

export interface IHeroPrismic {
  prismicHomepage: {
    data: {
      intro: PrismicObject
      title: PrismicObject
      description: PrismicObject
      image: PrismicImageObject
    }
  }
}

const Name = posed.h1({
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 350
    }
  },
  exit: {
    opacity: 1,
    scale: 0
  }
})

const Wrapper = styled.div`
  margin-top: -3rem;
  position: relative;
  height: 100vh;
  background-color: ${secondaryColor};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const Title = styled.div`
  color: white;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 5rem;
    margin: 0;
    margin-bottom: 1.45rem;
  }
  p {
    color: #dadada;
    font-size: 1.5rem;

    ${media.phone`
      font-size: 1.2rem;
    `}
  }
`

const Profile = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Img = styled(Image)`
  position: absolute;
  opacity: 0.8;

  ${media.tablet`
    margin-left: -30%;
  `}
`

export const heroQuery = graphql`
  query Homepage {
    prismicHomepage {
      data {
        intro {
          text
          html
        }
        title {
          text
          html
        }
        description {
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
`

const Hero = () => {
  const result: IHeroPrismic = useStaticQuery(heroQuery)
  const data = result.prismicHomepage.data
  const intro = data.intro.text
  const title = data.title.text
  const description = data.description.text
  const image = data.image

  return (
    <Wrapper>
      <AnimateIns delay={100}>
        <Title>
          <p>{intro}</p>
          <Name pose="enter" initialPose="exit">
            {title}
          </Name>
          <p>{description}</p>
        </Title>

        {/* <Profile>
        <Img fallbackAlt="profile" image={image} />
      </Profile> */}
      </AnimateIns>
    </Wrapper>
  )
}

export default Hero
