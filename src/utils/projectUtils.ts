import { ILatestPoject, IProject } from '../interfaces/ProjectInterface'
import { IProjectSlice } from '../templates/SinglePage'

export const normalizeProjects = (
  projects: Array<ILatestPoject>
): Array<IProject> => {
  return projects.map((project: ILatestPoject) => ({
    uid: project.latest_projects1.uid,
    title: project.latest_projects1.document[0].data.title,
    image: project.latest_projects1.document[0].data.image,
    description: project.latest_projects1.document[0].data.description
  }))
}

export const normalizeSliceToProjects = (
  projects: Array<IProjectSlice>
): Array<IProject> => {
  return projects.map((project: IProjectSlice) => ({
    uid: project.projects.uid,
    title: project.projects.document[0].data.title,
    image: project.projects.document[0].data.image,
    description: project.projects.document[0].data.description
  }))
}
