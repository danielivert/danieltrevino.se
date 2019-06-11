import * as React from 'react'
import { normalizeSliceToProjects } from '../utils/projectUtils'
import ProjectsGrid from './ProjectsGrid'
import SEO from './SEO'

const Slice = ({ body }: any) => {
  if (!body) return null

  return body.map((slice: any, i: number) => {
    if (slice.slice_type === 'list_projects') {
      const projects = normalizeSliceToProjects(slice.items)
      return <ProjectsGrid key={i} projects={projects} offset={0} />
    }

    if (slice.slice_type === 'seo') {
      // seoContext.setValues(slice.primary)
      return <SEO key={i} {...slice.primary} />
    }

    return null
  })
}

export default Slice
