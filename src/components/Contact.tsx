import * as React from 'react'
import styled from 'styled-components'
import { secondaryColor, textColor } from '../utils/variables'

const Wrapper = styled.div`
  &:before {
    position: absolute;
    z-index: 0;
    left: -2px;
    right: -5px;
    top: -100px;
    height: 150px;
    width: calc(100% + 5px);
    -webkit-transform: rotate(-2deg);
    -ms-transform: rotate(-2deg);
    transform: rotate(-2deg);
    content: '';
    background: ${secondaryColor};
  }

  position: relative;
  width: 100%;
  background: ${secondaryColor};
  color: ${textColor};
`

const Container = styled.div`
  position: relative;
  padding: 3rem 3rem;
  display: flex;
  justify-content: center;
`

const Contact = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Contact</h2>
      </Container>
    </Wrapper>
  )
}

export default Contact
