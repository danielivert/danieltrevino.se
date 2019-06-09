const path = require('path')

const createDynamicProjectPages = async (graphql, actions) => {
  const { createPage } = actions

  const projects = await graphql(`
    {
      allPrismicProject {
        nodes {
          uid
          data {
            title {
              html
              text
            }
            description {
              html
              text
            }
            image {
              url
              dimensions {
                width
                height
              }
              alt
            }
            year
            link {
              url
              target
            }
            media_button {
              text
              html
            }
            media {
              url
              target
            }
            body {
              ... on PrismicProjectBodySeo {
                slice_type
                primary {
                  seo_title {
                    text
                  }
                  seo_image {
                    url
                  }
                  seo_description {
                    text
                  }
                  seo_keywords {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const templateProject = path.resolve('./src/templates/SingleProject.tsx')

  projects.data.allPrismicProject.nodes.forEach(project => {
    const uid = project.uid
    const data = project.data
    createPage({
      path: `projects/${uid}`,
      component: templateProject,
      context: data
    })
  })
}

const createDynamicPages = async (graphql, actions) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          uid
          data {
            title {
              html
              text
            }
            body {
              ... on PrismicPageBodyListProjects {
                items {
                  projects {
                    uid
                    document {
                      data {
                        title {
                          html
                          text
                        }
                        description {
                          html
                          text
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicPageBodySeo {
                slice_type
                primary {
                  seo_title {
                    text
                  }
                  seo_image {
                    url
                  }
                  seo_description {
                    text
                  }
                  seo_keywords {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const tempaltePage = path.resolve('./src/templates/SinglePage.tsx')

  pages.data.allPrismicPage.nodes.forEach(project => {
    const uid = project.uid
    const data = project.data
    createPage({
      path: `/${uid}`,
      component: tempaltePage,
      context: data
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createDynamicProjectPages(graphql, actions)
  await createDynamicPages(graphql, actions)
}
