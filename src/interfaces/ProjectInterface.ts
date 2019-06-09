import {
  PrismicObject,
  PrismicImageObject,
  PrismicLink
} from './PrismicInterface'

export interface ILatestProjectsPrismic {
  prismicHomepageBodyLatestProjects: {
    slice_type: string
    primary: {
      project_section_title: PrismicObject
    }
    items: Array<ILatestPoject>
  }
}

export interface ILatestPoject {
  latest_projects1: {
    uid: string
    document: [
      {
        data: {
          title: PrismicObject
          image: PrismicImageObject
          description: PrismicObject
        }
      }
    ]
  }
}

export interface IProject {
  uid: string
  title: PrismicObject
  image: PrismicImageObject
  description: PrismicObject
  year: string
  link?: PrismicLink
  media_button?: PrismicObject
  media?: PrismicLink
}
