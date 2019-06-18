/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config()

const path = require('path')

let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
const GA_ID = process.env.GA_ID

console.log(`Using environment config: '${activeEnv}'`)

module.exports = {
  siteMetadata: {
    title: 'Daniel Treviño',
    description:
      'Hello, I am Daniel Treviño. Fullstack Web Developer. Based in Stockholm, Sweden.',
    keywords: 'developer, stockholm, fullstack, react, frontend, backend, node',
    GA_ID
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://danieltrevino.se',
        sitemap: 'https://danieltrevino.se/sitemap.xml',
        resolveEnv: () => activeEnv,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.ts'
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'danieltrevino',
        accessToken: process.env.API_KEY,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
}
