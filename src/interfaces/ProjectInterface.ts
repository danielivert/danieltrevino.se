import { PrismicObject, PrismicImageObject } from './PrismicInterface'

export interface IProject {
  node: {
    _meta: {
      uid: string
    }
    title: Array<PrismicObject>
    image: PrismicImageObject
    description: Array<PrismicObject>
  }
}

export interface IProjectPrismic {
  prismic: {
    allProjects: {
      edges: Array<IProject>
    }
  }
}
