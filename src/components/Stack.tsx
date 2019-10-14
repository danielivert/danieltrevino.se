import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import Image from './Image'
import { secondaryColor, gutter, textColorSecondary } from '../utils/variables'
import { media } from '../utils/media'
import AnimateIns from './AnimateIns'

export interface IStackItem {
  stack_title: PrismicObject
  stack_image: PrismicImageObject
  url: {
    target: string
    url: string
  }
}

export interface IStackPrismic {
  prismicHomepageBodyCurrentStack: {
    slice_type: string
    primary: {
      stack_section_title: PrismicObject
    }
    items: Array<IStackItem>
  }
}

const Wrapper = styled.div`
  padding: auto 3rem;
  padding-bottom: 6rem;
  background-color: ${secondaryColor};
  color: ${textColorSecondary};
`

const StackContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const StackGrid = styled(AnimateIns)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Img = styled(Image)`
  margin: 0 auto;
  width: 50%;
  object-fit: cover;

  height: 200px;

  margin-top: 1rem;
  img {
    width: 200px;

    ${media.phone`
      width: 120px;
    `}
  }
`

const StackItemWrapper = styled.div`
  text-align: center;
  transition: 0.3s ease;

  a {
    cursor: pointer;
  }

  ${media.phone`
    margin-right: ${gutter}px;

    &:last-child {
      margin-right: 0;
    }
  `}

  h4 {
    margin: 0;
  }

  &:hover {
    transform: translateY(0px) scale(1.2) translateZ(0px);
  }
`

const Title = styled.h2`
  margin-bottom: ${gutter * 4}px;
  text-align: center;
`

const StackItem = ({
  title,
  image,
  url
}: {
  title: string
  image: PrismicImageObject
  url: { url: string; target: string }
}) => {
  const WrapperComponent = () => (
    <StackItemWrapper>
      <h4>{title}</h4>
      <Img fallbackAlt={title} image={image} />
    </StackItemWrapper>
  )

  let component = <WrapperComponent />

  if (url) {
    component = (
      <a href={url.url} target={url.target} rel="noopener noreferrer">
        <WrapperComponent />
      </a>
    )
  }

  return component
}

const Stack = () => {
  const result: IStackPrismic = useStaticQuery(stackQuery)
  const items = result.prismicHomepageBodyCurrentStack.items
  const title =
    result.prismicHomepageBodyCurrentStack.primary.stack_section_title.text

  return (
    <Wrapper>
      <Title>{title}</Title>

      <StackContainer>
        <StackGrid delay={200}>
          {items.map((item: IStackItem, i: number) => {
            return (
              <StackItem
                key={i}
                title={item.stack_title.text}
                image={item.stack_image}
                url={item.url}
              />
            )
          })}
        </StackGrid>
      </StackContainer>
    </Wrapper>
  )
}

export default Stack

export const stackQuery = graphql`
  query StackQuery {
    prismicHomepageBodyCurrentStack {
      slice_type
      primary {
        stack_section_title {
          text
          html
          raw {
            type
            text
          }
        }
      }
      items {
        stack_title {
          text
        }
        stack_image {
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
        url {
          target
          url
        }
      }
    }
  }
`
