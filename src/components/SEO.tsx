import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { PrismicSEO } from '../interfaces/PrismicInterface'
import { SEOContext, ISEOContext } from './Layout'

const favicon = require('../../static/favicon.png')

interface IPrismicHomepageBodySEO {
  prismicHomepageBodySeo: PrismicSEO
}

export const seoQuery = graphql`
  query HomepageSEO {
    prismicHomepageBodySeo {
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
`

declare global {
  interface Window {
    dataLayer: any
  }
}

const GA_ID = process.env.GA_ID

const SEO = () => {
  const seoContext: ISEOContext = React.useContext(SEOContext)

  const result: IPrismicHomepageBodySEO = useStaticQuery(seoQuery)

  let title = result.prismicHomepageBodySeo.primary.seo_title.text
  let description = result.prismicHomepageBodySeo.primary.seo_description.text
  let keywords = result.prismicHomepageBodySeo.primary.seo_keywords.text
  let ogImage = result.prismicHomepageBodySeo.primary.seo_image.url

  const contextValues = seoContext.values
  if (contextValues) {
    title = contextValues.seo_title.text
    description = contextValues.seo_description.text
    keywords = contextValues.seo_keywords.text
    ogImage = contextValues.seo_image.url
  }

  const initGA = () => {
    window.dataLayer = window.dataLayer || []
    function gtag(first: string, second: any) {
      window.dataLayer.push(arguments)
    }
    gtag('js', new Date())

    gtag('config', GA_ID)
  }

  React.useEffect(() => {
    initGA()
  })

  return (
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'image', content: ogImage }
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
      <meta name="description" content={description} />§
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

export default SEO
