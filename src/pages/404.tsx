import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import Layout from '../components/Layout'
import { gutter } from '../utils/variables'

interface NotFoundPageProps {
  data: {
    prismicNotFoundPage: {
      data: {
        title: PrismicObject
        description: PrismicObject
        background_image: PrismicImageObject
        back_button_text: PrismicObject
      }
    }
  }
}

export const notFoundPageQuery = graphql`
  query NotFoundPageQuery {
    prismicNotFoundPage {
      data {
        title {
          text
          html
        }
        description {
          text
          html
        }
        background_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1140, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          url
          alt
        }
        back_button_text {
          text
        }
      }
    }
  }
`

interface IWrapper {
  backgroundImage?: string
}

const Wrapper = styled(Layout)`
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

  h1 {
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
`

const BackButton = styled(Link)`
  margin-top: ${gutter * 2}px;
  width: auto;
  padding: ${gutter}px;
  height: 45px;
  color: white !important;
  border-radius: 5px;

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
  const { data } = props.data.prismicNotFoundPage
  const titleHtml = data.title.html
  const descriptionHtml = data.description.html
  const backgroundImage = data.background_image.url
  const buttonText = data.back_button_text.text

  const createMarkup = () => {
    return { __html: `${titleHtml} ${descriptionHtml}` }
  }
  return (
    <Wrapper hideNavigation backgroundImage={backgroundImage}>
      <Title dangerouslySetInnerHTML={createMarkup()} />
      <BackButton to="/">{buttonText}</BackButton>
    </Wrapper>
  )
}

export default NotFoundPage
