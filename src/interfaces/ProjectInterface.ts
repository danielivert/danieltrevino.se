import { PrismicObject } from './PrismicInterface'

export interface IProject {
  title: PrismicObject
  description: PrismicObject
}

export interface IProjectPrismic {
  allPrismicProject: {
    nodes: Array<IProject>
  }
}
