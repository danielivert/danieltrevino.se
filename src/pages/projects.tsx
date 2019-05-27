import * as React from 'react'

import styled from 'styled-components'
import Projects from '../components/Projects'
import Layout from '../components/Layout'

const Wrapper = styled.div`
  background: blue;
`

const ProjectsPage = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>Hello projects!</h1>
        <Projects />
      </Wrapper>
    </Layout>
  )
}

export default ProjectsPage
