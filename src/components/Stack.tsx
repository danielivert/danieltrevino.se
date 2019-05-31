import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import Image from './Image'
import { gutter } from '../utils/variables'
import { media } from '../utils/media'
import posed from 'react-pose'

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
  margin: auto 3rem;
`

const StackContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const GridAnimation = posed.div({
  enter: {
    staggerChildren: 150,
    delayChildren: 200,
    opacity: 1,
    beforeChildren: true
  }
})

const StackGrid = styled(GridAnimation)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const Img = styled(Image)`
  margin: 0 auto;
  width: 50%;
  object-fit: cover;

  img {
    height: 200px;
    width: 200px;

    ${media.phone`
      width: 120px;
    `}
  }
`

const ItemAnimation = posed.div({
  hoverable: true,
  hover: {
    scale: 1.2
  },
  init: {
    scale: 1
  },
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
})

const StackItemWrapper = styled(ItemAnimation)`
  text-align: center;

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
      <a href={url.url} target={url.target}>
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
        <StackGrid initialPose="exit" pose="enter">
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
          url
        }
        url {
          target
          url
        }
      }
    }
  }
`
