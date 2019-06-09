import * as React from 'react'
import { normalizeSliceToProjects } from '../utils/projectUtils'
import ProjectsGrid from './ProjectsGrid'
import { ISEOContext, SEOContext } from './Layout'

const Slice = ({ body }: any) => {
  const seoContext: ISEOContext = React.useContext(SEOContext)

  if (!body) return null

  return body.map((slice: any, i: number) => {
    if (slice.slice_type === 'list_projects') {
      const projects = normalizeSliceToProjects(slice.items)
      return <ProjectsGrid key={i} projects={projects} offset={0} />
    }

    if (slice.slice_type === 'seo') {
      seoContext.setValues(slice.primary)
      return null
    }

    return null
  })
}

export default Slice
