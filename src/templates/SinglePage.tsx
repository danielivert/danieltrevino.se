import * as React from 'react'
import styled from 'styled-components'
import { IProject } from '../interfaces/ProjectInterface'
import Layout from '../components/Layout'

interface IProps {
  pageContext: IProject
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const SinglePage = (props: IProps) => {
  return (
    <Layout>
      <Wrapper>
        <h1>Works</h1>
      </Wrapper>
    </Layout>
  )
}

export default SinglePage
