import * as React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { ISEO } from '../interfaces/PrismicInterface'
const favicon = require('../../static/favicon.png')

declare global {
  interface Window {
    dataLayer: any
  }
}

const GA_ID = process.env.GA_ID

const SEO = ({ seo_title, seo_description, seo_keywords, seo_image }: ISEO) => {
  const title = get(seo_title, 'text', 'Daniel Treviño')
  const description = get(seo_description, 'text', 'Fullstack Web developer')
  const keywords = get(seo_keywords, 'text', '')
  const ogImage = get(seo_image, 'url', '')

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
