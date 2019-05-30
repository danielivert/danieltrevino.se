import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { NavigationIndex } from '../utils/zIndex'
import { primaryColor, gutter } from '../utils/variables'
import { PrismicObject } from '../interfaces/PrismicInterface'

interface INavigation {
  primary: {
    label: PrismicObject
    link: {
      uid: string
    }
  }
}

export interface INavigationPrismic {
  prismicNavigation: {
    data: {
      nav: Array<INavigation>
    }
  }
}

const Nav = styled.nav`
  position: fixed;
  height: 3rem;
  width: 100%;
  top: 0;
  left: 0;
  background: #ffffff;
  color: ${primaryColor};
  font-weight: 800;
  z-index: ${NavigationIndex};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2rem;
  font-size: 0.8rem;

  ul {
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: row;
  }

  li {
    &:first-child {
      margin-right: ${gutter * 2}px;
    }
    margin: 0;
  }

  a {
    opacity: 0.8;
    text-decoration: none;
  }
`

export const navigationQuery = graphql`
  query Navigation {
    prismicNavigation {
      data {
        display_name {
          html
          text
        }
        nav {
          primary {
            label {
              html
              text
            }
            link {
              uid
            }
          }
        }
      }
    }
  }
`

const Navigation = () => {
  const result: INavigationPrismic = useStaticQuery(navigationQuery)
  const data = result.prismicNavigation.data

  console.log(data)

  return (
    <Nav>
      <ul>
        {data.nav.map((item: INavigation, i: number) => {
          // Special case for HomePage
          const normmalizeUid =
            item.primary.link.uid === 'home' ? '/' : item.primary.link.uid

          return (
            <li key={i}>
              <Link to={normmalizeUid}>{item.primary.label.text}</Link>
            </li>
          )
        })}
      </ul>
    </Nav>
  )
}

export default Navigation
