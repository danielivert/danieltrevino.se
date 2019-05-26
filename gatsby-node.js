const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projects = await graphql(`
    {
      prismic {
        allProjects {
          edges {
            node {
              _meta {
                uid
              }

              title
              image
              description
            }
          }
        }
      }
    }
  `)

  const template = path.resolve('./src/templates/SingleProject.tsx')

  projects.data.prismic.allProjects.edges.forEach(edge => {
    createPage({
      path: `projects/${edge.node._meta.uid}`,
      component: template,
      context: edge.node
    })
  })
}
