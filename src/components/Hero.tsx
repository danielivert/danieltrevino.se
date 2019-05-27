import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import backgroundImage from '../images/background.svg'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'

export interface IHero {
  node: {
    title: Array<PrismicObject>
    image: PrismicImageObject
  }
}

export interface IHeroPrismic {
  prismic: {
    allHomepages: {
      edges: Array<IHero>
    }
  }
}

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const Title = styled.h1`
  color: white;
`

const Profile = styled.div`
  img {
    opacity: 0.8;
  }
`

export const heroQuery = graphql`
  query HeroQuery {
    prismic {
      allHomepages {
        edges {
          node {
            title
            image
          }
        }
      }
    }
  }
`

const Hero = () => {
  const result: IHeroPrismic = useStaticQuery(heroQuery)
  const heroData = result.prismic.allHomepages.edges[0]
  const title = heroData.node.title[0].text
  const profileImage = heroData.node.image.url

  return (
    <Wrapper>
      <Title>{title}</Title>

      <Profile>
        <img src={profileImage} />
      </Profile>

      <p>
        Go to <Link to="/projects">projects</Link>
      </p>
    </Wrapper>
  )
}

export default Hero
