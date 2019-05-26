export interface IProject {
  node: {
    _meta: {
      uid: string
    }

    title: [
      {
        type: string
        text: string
        spans: any
      }
    ]

    image: [
      {
        type: string
        text: string
        spans: any
      }
    ]

    description: [
      {
        type: string
        text: string
        spans: any
      }
    ]
  }
}

export interface IProjectPrismic {
  prismic: {
    allProjects: {
      edges: Array<IProject>
    }
  }
}
