// @flow
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../SEO"
import "styles/global.scss"

import Navigation from "../Navigation"

type Props = {
  children: React.Node
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }

        ogImage: allFile(
          filter: { relativePath: { eq: "danieltrevino_desktop.png" } }
        ) {
          edges {
            node {
              id
              name
              publicURL
            }
          }
        }
      }
    `}
    render={(data: Object) => (
      <div>
        <SEO data={data} />
        <Navigation siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
      </div>
    )}
  />
)

export default Layout
