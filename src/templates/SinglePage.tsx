import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { IProject } from '../interfaces/ProjectInterface'
import Layout from '../components/Layout'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import styled from 'styled-components'
import Slice from '../components/Slice'

export interface IProjectSlice {
  projects: {
    uid: string
    document: [
      {
        data: {
          title: PrismicObject
          image: PrismicImageObject
          description: PrismicObject
        }
      }
    ]
  }
}

export interface ISinglePageBody {
  slice_type: string
  items: Array<IProjectSlice> | any
}
interface ISinglePagePrismic {
  prismicPage: {
    uid: string
    data: {
      title: PrismicObject
      description?: PrismicObject
      image?: PrismicImageObject
      body: Array<ISinglePageBody>
    }
  }
}

interface IProps {
  pageContext: IProject
}

const Wrapper = styled.div`
  margin-top: 3rem;
  min-height: calc(100vh - 3rem);
`

const Title = styled.h1`
  margin: 0;
  padding: 3rem 0;
  font-size: 2rem;
`

const SinglePage = (props: IProps) => {
  const result: ISinglePagePrismic = useStaticQuery(singlePageQuery)
  const title = result.prismicPage.data.title.text
  const slices = result.prismicPage.data.body

  return (
    <Layout fullWidth={false} secondaryColor primaryColorOnScroll>
      <Wrapper>
        <Title>{title}</Title>
        <Slice body={slices} />
      </Wrapper>
    </Layout>
  )
}

export default SinglePage

export const singlePageQuery = graphql`
  query SinglePageQuery {
    prismicPage {
      uid
      data {
        title {
          text
          html
        }
        description {
          text
          html
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 450, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          url
          alt
        }
        body {
          ... on PrismicPageBodyListProjects {
            slice_type
            items {
              projects {
                uid
                document {
                  data {
                    title {
                      text
                    }
                    image {
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 450, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                      url
                      alt
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPageBodySeo {
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
      }
    }
  }
`
