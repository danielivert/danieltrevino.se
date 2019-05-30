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

export interface IStackItem {
  stack_title: PrismicObject
  stack_image: PrismicImageObject
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
      }
    }
  }
`

export const autoGrid = (minColumnWidth = 250, gridGap = 0) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap
})

const Grid = styled.div({
  ...autoGrid(100, 40)
})

const StackGrid = styled(Grid)`
  margin: 0 auto;
  max-width: 400px;
`

const Img = styled(Image)`
  width: 100%;
  object-fit: cover;
  border-radius: 10;
`

const StackItemWrapper = styled.div`
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: ${gutter * 3}px;
  text-align: center;
`

const StackItem = ({
  title,
  image
}: {
  title: string
  image: PrismicImageObject
}) => {
  return (
    <StackItemWrapper>
      <h4>{title}</h4>
      <Img fallbackAlt={title} image={image} />
    </StackItemWrapper>
  )
}

const Stack = () => {
  const result: IStackPrismic = useStaticQuery(stackQuery)
  const items = result.prismicHomepageBodyCurrentStack.items
  const title =
    result.prismicHomepageBodyCurrentStack.primary.stack_section_title.text

  return (
    <Wrapper>
      <Title>{title}</Title>
      <StackGrid>
        {items.map((item: IStackItem, i: number) => {
          return (
            <StackItem
              key={i}
              title={item.stack_title.text}
              image={item.stack_image}
            />
          )
        })}
      </StackGrid>
    </Wrapper>
  )
}

export default Stack
