import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import Image from './Image'

export interface IStackItem {
  stack_title: PrismicObject
  stack_image: PrismicImageObject
}

export interface IStackPrismic {
  prismicHomepageBodyCurrentStack: {
    items: Array<IStackItem>
  }
}

const Wrapper = styled.div``

export const stackQuery = graphql`
  query StackQuery {
    prismicHomepageBodyCurrentStack {
      items {
        stack_title {
          text
          html
        }
        stack_image {
          url
          alt
        }
      }
    }
  }
`

const Stack = () => {
  const result: IStackPrismic = useStaticQuery(stackQuery)
  const items = result.prismicHomepageBodyCurrentStack.items

  return (
    <Wrapper>
      {items.map((item: IStackItem, i: any) => {
        return (
          <div key={i}>
            <h1>{item.stack_title.text}</h1>
            <Image
              fallbackAlt={item.stack_title.text}
              image={item.stack_image}
            />
          </div>
        )
      })}
    </Wrapper>
  )
}

export default Stack
