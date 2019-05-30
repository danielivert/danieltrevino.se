import { PrismicObject } from './PrismicInterface'

export interface IProject {
  uid: string
  data: {
    title: PrismicObject
    description: PrismicObject
  }
}

export interface IProjectPrismic {
  allPrismicProject: {
    nodes: Array<IProject>
  }
}
