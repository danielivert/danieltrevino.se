// @flow
import * as React from "react"
import Helmet from "react-helmet"

type Props = {
  data: Object
}

const GA_ID = "UA-83814700-1"

class SEO extends React.Component<Props> {
  componentDidMount() {
    this.initGA()
  }
  initGA() {
    window.dataLayer = window.dataLayer || []
    function gtag(first: string, second: any) {
      window.dataLayer.push(arguments)
    }
    gtag("js", new Date())

    gtag("config", GA_ID)
  }
  render() {
    const { title, description, keywords } = this.props.data.site.siteMetadata
    const { publicURL } = this.props.data.ogImage.edges[0].node
    const favicon = this.props.data.favicon.edges[0].node.publicURL
    const ogImage = publicURL

    return (
      <Helmet
        title={title}
        meta={[
          { name: "description", content: description },
          { name: "keywords", content: keywords },
          { name: "image", content: ogImage }
        ]}
      >
        <html lang="en" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@danielivert" />
        <meta name="twitter:image" content={ogImage} />

        <meta property="og:image" content={ogImage} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
      </Helmet>
    )
  }
}

export default SEO
