// @flow
import * as React from "react"
import Helmet from "react-helmet"

type Props = {
  data: Object
}

const HelmetComponent = ({ data }: Props) => (
  <Helmet
    title={data.site.siteMetadata.title}
    meta={[
      { name: "description", content: "Sample" },
      { name: "keywords", content: "sample, something" }
    ]}
  >
    <html lang="en" />
  </Helmet>
)

export default HelmetComponent
