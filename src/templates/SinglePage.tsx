import * as React from 'react'
import { IProject } from '../interfaces/ProjectInterface'
import Layout from '../components/Layout'
import AnimateIns from '../components/AnimateIns'

interface IProps {
  pageContext: IProject
}

const SinglePage = (props: IProps) => {
  return (
    <Layout fullWidth={false}>
      <h1>Works</h1>
    </Layout>
  )
}

export default SinglePage
