/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`
})

module.exports = {
  siteMetadata: {
    name: 'Danieltrevino',
    tagline: 'Fullstack web developer'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: './src/utils/typography'
      }
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'danieltrevino',
        accessToken: process.env.API_KEY,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline'
  ]
}
