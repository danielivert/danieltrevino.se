import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import backgroundImage from '../images/background.svg'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import { media } from '../utils/media'

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
  position: relative;
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
  }
  p {
    margin: 0;

    span {
      color: #bdbdbd;
      font-size: 2rem;
    }
  }
`

const Profile = styled.div`
  top: 0;
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5rem;
  position: absolute;
  

  ${media.phone`
    margin-right: 0;
    right: -35%;
    width: 15rem;
    overflow-x: hidden;
  `}

  ${media.tablet`
    margin-right: 0;
    right: -32%;
    overflow-x: hidden;
    padding-right: 0;
  `}

  ${media.desktop`
    padding-right: 0;
  `}

  img {
    opacity: 0.8;
    position: absolute;
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
  const titleArray = heroData.node.title[0].text.split('|')
  const titleFirst = titleArray[0]
  const name = titleArray[1]
  const titleSecond = titleArray[2]
  const titleThird = titleArray[3]
  const profileImage = heroData.node.image.url

  return (
    <Wrapper>
      <Title>
        <p>
          <span>{titleFirst}</span>
        </p>
        <h1>{name}</h1>
        <p>{titleSecond}</p>
        <p>{titleThird}</p>
      </Title>

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
