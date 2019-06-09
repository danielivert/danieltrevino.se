import * as React from 'react'
import styled from 'styled-components'
import { primaryColor, alternativeColor, gutter } from '../utils/variables'

const BodyWrapper = styled.div`
  padding-bottom: 10rem;
  h2 {
    margin: 2rem 0;
  }

  a {
    color: ${primaryColor};

    &:hover {
      color: ${alternativeColor};
    }
  }

  ul,
  ol,
  li,
  p {
    margin: 0;
    line-height: ${gutter * 2}px;
  }

  li {
    margin-bottom: ${gutter * 2}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  ul,
  ol {
    margin-left: 20px;
  }
`

const Body = ({ html, className }: any) => {
  return (
    <BodyWrapper
      dangerouslySetInnerHTML={{ __html: html }}
      className={className}
    />
  )
}

export default Body
