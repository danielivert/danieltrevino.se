import * as React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Stack from '../components/Stack'
import LatestProjects from '../components/LatestProjects'
import Contact from '../components/Contact'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Hero />
        <Stack />
        <LatestProjects />
        <Contact />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage
