import * as React from 'react'
import { IProject } from '../interfaces/ProjectInterface'

interface IProps {
  pageContext: IProject
}

const SingleProject = (props: IProps) => {
  const data = props.pageContext.data
  const titleHtml = data.title.html
  const descriptionHtml = data.description.html

  const generateMarkup = () => {
    return { __html: `${titleHtml} ${descriptionHtml}` }
  }
  return <div dangerouslySetInnerHTML={generateMarkup()} />
}

export default SingleProject
