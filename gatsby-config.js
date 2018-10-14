// @flow
const path = require("path")
module.exports = {
  siteMetadata: {
    title: "Daniel Treviño",
    description:
      "Hello, I am Daniel Treviño. Fullstack Web Developer. Based in Stockholm, Sweden.",
    keywords: "developer, stockholm, fullstack, react, frontend, backend, node",
    heroHeader: {
      title: "Hello, I am ",
      span: "Daniel Treviño",
      body: ["Fullstack Web Developer", "Based in Stockholm, Sweden 🇸🇪"]
    }
  },
  plugins: [
    "gatsby-plugin-flow",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png" // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images")
      }
    }
  ]
}
