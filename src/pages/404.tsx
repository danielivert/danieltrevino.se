import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import PageLayout from '../components/PageLayout'
import { gutter } from '../utils/variables'

interface NotFoundPageProps {
  data: {
    prismic: {
      allNot_found_pages: {
        edges: [
          {
            node: {
              title: Array<PrismicObject>
              background_image: PrismicImageObject
              back_button_text: Array<PrismicObject>
            }
          }
        ]
      }
    }
  }
}

export const notFoundPageQuery = graphql`
  query NotFoundPage {
    prismic {
      allNot_found_pages {
        edges {
          node {
            title
            background_image
            back_button_text
          }
        }
      }
    }
  }
`

interface IWrapper {
  backgroundImage?: string
}

const Wrapper = styled(PageLayout)`
  margin: 0 auto;
  height: 100vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${(props: IWrapper) =>
    props.backgroundImage &&
    `
      background-image: url('${props.backgroundImage}');
      background-size: cover; 
      background-repeat: no-repeat;
      background-size: 100% 100%;
  `};
`

const Title = styled.h1`
  text-align: center;
  font-size: 5rem;

  span {
    font-size: 1rem;
    display: flex;
  }
`

const BackButton = styled(Link)`
  margin-top: ${gutter * 2}px;
  width: auto;
  padding: ${gutter}px;
  height: 45px;
  border-radius: 5px;
  color: white;
  background-image: linear-gradient(
    to right top,
    #15386c,
    #003c91,
    #1a3db4,
    #4834d3,
    #7a12eb
  );

  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }
`

const NotFoundPage = (props: NotFoundPageProps) => {
  const pageData = props.data.prismic.allNot_found_pages.edges[0].node
  const title = pageData.title[0].text.split('|')[0]
  const subText = pageData.title[0].text.split('|')[1] || ''
  const backgroundImage = pageData.background_image.url
  const buttonText = pageData.back_button_text[0].text

  return (
    <Wrapper backgroundImage={backgroundImage}>
      <Title>
        {title}
        <span>{subText}</span>
      </Title>
      <BackButton to="/">{buttonText}</BackButton>
    </Wrapper>
  )
}

export default NotFoundPage
