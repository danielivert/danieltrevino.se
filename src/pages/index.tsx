import * as React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Stack from '../components/Stack'
import LatestProjects from '../components/LatestProjects'
import Contact from '../components/Contact'
import { graphql, useStaticQuery } from 'gatsby'
import { PrismicSEO } from '../interfaces/PrismicInterface'
import SEO from '../components/SEO'

interface IPrismicHomepageBodySEO {
  prismicHomepageBodySeo: PrismicSEO
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const IndexPage = () => {
  const seoValues: IPrismicHomepageBodySEO = useStaticQuery(seoQuery)

  return (
    <Layout>
      <SEO {...seoValues.prismicHomepageBodySeo.primary} />
      <Wrapper>
        <Hero />
        <Stack />
        <LatestProjects />
        <Contact />
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

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
