import * as React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Hero />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
