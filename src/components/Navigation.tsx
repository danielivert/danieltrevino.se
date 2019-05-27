import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { NavigationIndex } from '../utils/zIndex'
import { primaryColor } from '../utils/variables'

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
  }

  li {
    margin: 0;
  }

  a {
    opacity: 0.8;
    text-decoration: none;
  }
`

const Navigation = () => (
  <Nav>
    <ul>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  </Nav>
)

export default Navigation
